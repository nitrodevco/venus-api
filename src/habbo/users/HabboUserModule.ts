import { EmulatorModule } from '#base/emulator';
import { Module } from '@nestjs/common';
import { HabboUserAchievementController, HabboUserBadgeController, HabboUserController, HabboUserCurrencyController } from './controllers';
import { HabboUserAchievementService, HabboUserBadgeService, HabboUserCurrencyService, HabboUserService } from './services';

@Module({
    imports: [
        EmulatorModule
    ],
    controllers: [
        HabboUserAchievementController,
        HabboUserBadgeController,
        HabboUserController,
        HabboUserCurrencyController
    ],
    providers: [
        HabboUserAchievementService,
        HabboUserBadgeService,
        HabboUserService,
        HabboUserCurrencyService
    ],
    exports: [
        HabboUserAchievementService,
        HabboUserBadgeService,
        HabboUserService,
        HabboUserCurrencyService
    ]
})
export class HabboUserModule
{ }
