import { Module } from '@nestjs/common';
import { HabboRoomController } from './controllers';
import { HabboRoomService } from './services';

@Module({
    imports: [
    ],
    controllers: [
        HabboRoomController
    ],
    providers: [
        HabboRoomService
    ],
    exports: [
        HabboRoomService
    ]
})
export class HabboRoomModule
{ }
