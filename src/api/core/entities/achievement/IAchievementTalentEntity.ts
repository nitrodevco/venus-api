import { AchievementTalentTypeEnum } from '../../enum';

export interface IAchievementTalentEntity
{
    id: number;
    type: AchievementTalentTypeEnum;
    level: number;
    achievementIds: string;
    achievementLevels: string;
    rewardFurni: string;
    rewardPerks: string;
    rewardBadges: string;
}
