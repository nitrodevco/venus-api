import { ConfigKeys, ISession } from '#base/api';
import { CoreSettingsService } from '#base/core';
import { RandomId } from '#base/utils';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { sign, verify } from 'jsonwebtoken';

@Injectable()
export class AuthenticationSessionService implements OnModuleInit
{
    private _sessionSecret: string = null;
    private _sessionExpiresIn: string = null;
    private _sessionIssuer: string = null;

    constructor(
        private readonly coreSettingsService: CoreSettingsService)
    { }

    public async onModuleInit(): Promise<void>
    {
        this._sessionSecret = this.coreSettingsService.getString(ConfigKeys.SESSION_SECRET, RandomId(15));
        this._sessionExpiresIn = this.coreSettingsService.getString(ConfigKeys.SESSION_EXPIRESIN, '1d');
        this._sessionIssuer = this.coreSettingsService.getString(ConfigKeys.SESSION_ISSUER, RandomId(15));
    }

    public createTokenForSession(session: ISession): string
    {
        try
        {
            if(!session) throw new Error('invalid_payload');

            return sign(session, this._sessionSecret, {
                expiresIn: this._sessionExpiresIn,
                issuer: this._sessionIssuer
            });
        }

        catch (err)
        {
            throw new Error(err);
        }
    }

    public validateToken(token: string): ISession
    {
        try
        {
            if(!token?.length) throw new Error('invalid_token');

            return verify(token, this._sessionSecret, {
                issuer: this._sessionIssuer
            }) as ISession;
        }

        catch (err)
        {
            throw new Error('invalid_token');
        }
    }
}
