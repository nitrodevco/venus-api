import { PanelModule } from '#base/panel';
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthenticationController, AuthenticationOtpController } from './controllers';
import { AuthenticationGuard } from './guards';
import { AuthenticationOtpService, AuthenticationSessionService, AuthenticationUserService } from './services';

@Module({
    imports: [
        PanelModule
    ],
    controllers: [
        AuthenticationController,
        AuthenticationOtpController
    ],
    providers: [
        {
            provide: APP_GUARD,
            useClass: AuthenticationGuard
        },
        AuthenticationOtpService,
        AuthenticationSessionService,
        AuthenticationUserService
    ],
    exports: [
        AuthenticationOtpService,
        AuthenticationSessionService,
        AuthenticationUserService
    ]
})
export class AuthenticationModule
{ }
