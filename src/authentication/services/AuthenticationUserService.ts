import { ConfigKeys, ILoginDetails, ISession } from '#base/api';
import { CoreSettingsService } from '#base/core';
import { PanelUserService } from '#base/panel';
import { PasswordHelper } from '#base/utils';
import { Injectable } from '@nestjs/common';
import { AuthenticationOtpService } from './AuthenticationOtpService';
import { AuthenticationSessionService } from './AuthenticationSessionService';

@Injectable()
export class AuthenticationUserService
{
    constructor(
        private readonly coreSettingsService: CoreSettingsService,
        private readonly authenticationSessionService: AuthenticationSessionService,
        private readonly authenticationOtpService: AuthenticationOtpService,
        private readonly panelUserService: PanelUserService)
    { }

    public async login(name: string, password: string, otpToken: string = null): Promise<{ token: string; session: ISession }> 
    {
        const loginDetails = await this.validateLogin(name, password);
    
        if (loginDetails.passwordExpired) throw new Error('password_expired');
    
        await this.validateOtp(loginDetails, otpToken);
    
        const payload: ISession = { userId: loginDetails.id };
        const token = this.authenticationSessionService.createTokenForSession(payload);
    
        return { token, session: payload };
    }

    public async updatePassword(name: string, password: string, newPassword: string, otpToken: string = null): Promise<boolean>
    {
        if (!newPassword?.length || !new RegExp(this.coreSettingsService.getString(ConfigKeys.PASSWORD_REGEX)).test(newPassword)) throw new Error('invalid_password');
      
        const loginDetails = await this.validateLogin(name, password);
      
        await this.validateOtp(loginDetails, otpToken);
      
        if(!await this.panelUserService.updatePasswordById(loginDetails.id, PasswordHelper.encryptPassword(newPassword))) throw new Error('password_not_updated');
      
        return true;
    }

    private async validateLogin(name: string, password: string): Promise<ILoginDetails> 
    {
        if (!name?.length || !password?.length) throw new Error('invalid_login');
    
        const loginDetails = await this.panelUserService.getLoginDetails(name);

        if (!loginDetails || !PasswordHelper.validatePassword(password, loginDetails.password)) throw new Error('invalid_login');
    
        return loginDetails;
    }

    private async validateOtp(loginDetails: any, token: string): Promise<void>
    {
        if (this.coreSettingsService.getBoolean(ConfigKeys.OTP_ENABLED, false))
        {
            if (!loginDetails.otpSecret?.length) throw new Error('setup_otp');

            if (!token?.length) throw new Error('otp_required');

            if (!this.authenticationOtpService.validateOtp(loginDetails.otpSecret, token)) throw new Error('invalid_otp');
        }
    }
}
