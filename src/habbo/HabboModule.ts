
import { Module } from '@nestjs/common';
import { HabboAchievementModule } from './achievement';
import { HabboCatalogModule } from './catalog';
import { HabboCraftingModule } from './crafting';
import { HabboGuildModule } from './guilds';
import { HabboItemModule } from './items';
import { HabboLogModule } from './logs';
import { HabboMessengerModule } from './messenger';
import { HabboNavigatorModule } from './navigator';
import { HabboPermissionModule } from './permissions';
import { HabboPetModule } from './pet';
import { HabobPollModule } from './polls';
import { HabboRoomModule } from './rooms';
import { HabboSupportModule } from './support';
import { HabboUserModule } from './users';

@Module({
    imports: [
        HabboAchievementModule,
        HabboCatalogModule,
        HabboCraftingModule,
        HabboGuildModule,
        HabboItemModule,
        HabboLogModule,
        HabboMessengerModule,
        HabboNavigatorModule,
        HabboPermissionModule,
        HabboPetModule,
        HabobPollModule,
        HabboRoomModule,
        HabboSupportModule,
        HabboUserModule
    ],
    controllers: [],
    providers: [],
    exports: []
})
export class HabboModule
{ }
