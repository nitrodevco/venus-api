import { ConfigKeys } from '#base/api';
import { CoreSettingsService } from '#base/core';
import { PanelUserService } from '#base/panel';
import { PasswordHelper } from '#base/utils';
import { Injectable } from '@nestjs/common';
import { authenticator } from 'otplib';
import { toDataURL } from 'qrcode';

@Injectable()
export class AuthenticationOtpService
{
    private _usedTokens = new Map<string, string>();

    constructor(
        private readonly coreSettingsService: CoreSettingsService,
        private readonly panelUserService: PanelUserService)
    { }

    public generateSecret(): string
    {
        return authenticator.generateSecret();
    }

    public validateOtp(secret: string, token: string): boolean
    {
        if(!token?.length || !secret?.length) return false;

        if(this._usedTokens.has(secret) && (this._usedTokens.get(secret) === token)) return false;

        const status = authenticator.check(token, secret);

        if(status) this._usedTokens.set(secret, token);

        return status;
    }

    public async generateQrCodeImageString(name: string, otpSecret: string): Promise<string>
    {
        const otpauth = authenticator.keyuri(name, this.coreSettingsService.getString(ConfigKeys.SESSION_ISSUER, 'VenusAPI'), otpSecret);

        const dataUrl = await toDataURL(otpauth);

        return dataUrl.split(',')[1];
    }

    public async generateAndSaveOtpSecret(name: string, password: string): Promise<string>
    {
        if(!name?.length || !password?.length) return null;

        if(!this.coreSettingsService.getBoolean(ConfigKeys.OTP_ENABLED, false)) throw new Error('otp_disabled');

        const loginDetails = await this.panelUserService.getLoginDetails(name);

        if(!loginDetails) throw new Error('invalid_login');

        if(!PasswordHelper.validatePassword(password, loginDetails.password)) throw new Error('invalid_login');

        if(loginDetails.otpSecret || loginDetails.otpSecret.length) throw new Error('otp_previously_enabled');

        const otpSecret = this.generateSecret();

        if(!await this.panelUserService.updatOtpSecretByName(name, otpSecret)) throw new Error('otp_not_updated');

        return otpSecret;
    }

    public async saveOtpSecret(name: string, password: string, secret: string, token: string): Promise<boolean>
    {
        if(!name?.length || !password?.length || !secret?.length || !token || (token.length < 6)) return false;

        if(!this.coreSettingsService.getBoolean(ConfigKeys.OTP_ENABLED, false)) throw new Error('otp_disabled');

        const loginDetails = await this.panelUserService.getLoginDetails(name);

        if(!loginDetails) throw new Error('invalid_login');

        if(!PasswordHelper.validatePassword(password, loginDetails.password)) throw new Error('invalid_login');

        if(loginDetails.otpSecret || loginDetails.otpSecret.length) throw new Error('otp_previously_enabled');

        if(!this.validateOtp(secret, token)) throw new Error('invalid_otp');

        if(!await this.panelUserService.updatOtpSecretByName(name, secret)) throw new Error('otp_not_updated');

        return true;
    }
}
