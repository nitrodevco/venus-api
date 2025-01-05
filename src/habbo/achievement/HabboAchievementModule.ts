import { Module } from '@nestjs/common';
import { HabboAchievementController, HabboAchievementTalentController } from './controllers';
import { HabboAchievementService, HabboAchievementTalentService } from './services';

@Module({
    imports: [
    ],
    controllers: [
        HabboAchievementController,
        HabboAchievementTalentController
    ],
    providers: [
        HabboAchievementService,
        HabboAchievementTalentService
    ],
    exports: [
        HabboAchievementService,
        HabboAchievementTalentService
    ]
})
export class HabboAchievementModule
{ }
