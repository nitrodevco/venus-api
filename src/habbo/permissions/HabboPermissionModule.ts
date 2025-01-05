import { EmulatorModule } from '#base/emulator';
import { Module } from '@nestjs/common';
import { HabboPermissionController } from './controllers';
import { HabboPermissionService } from './services';

@Module({
    imports: [
        EmulatorModule
    ],
    controllers: [
        HabboPermissionController
    ],
    providers: [
        HabboPermissionService
    ],
    exports: [
        HabboPermissionService
    ]
})
export class HabboPermissionModule
{ }
