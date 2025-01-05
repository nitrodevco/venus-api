import { Module } from '@nestjs/common';
import { HabboChatlogRoomController } from './controllers';
import { HabboChatlogPrivateService, HabboChatlogRoomService, HabboCommandLogService } from './services';

@Module({
    imports: [
    ],
    controllers: [
        HabboChatlogRoomController
    ],
    providers: [
        HabboChatlogRoomService,
        HabboChatlogPrivateService,
        HabboCommandLogService
    ],
    exports: [
        HabboChatlogRoomService,
        HabboChatlogPrivateService,
        HabboCommandLogService
    ]
})
export class HabboLogModule
{ }
