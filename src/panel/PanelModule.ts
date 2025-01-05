import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { PanelRoleController, PanelUserController } from './controllers';
import { PanelPermissionGuard } from './guards';
import { PanelRoleService, PanelUserService } from './services';

@Module({
    imports: [
    ],
    controllers: [
        PanelRoleController,
        PanelUserController
    ],
    providers: [
        {
            provide: APP_GUARD,
            useClass: PanelPermissionGuard
        },
        PanelUserService,
        PanelRoleService
    ],
    exports: [
        PanelUserService,
        PanelRoleService
    ]
})
export class PanelModule
{ }
