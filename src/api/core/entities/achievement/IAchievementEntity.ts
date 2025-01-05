import { AchievementCategoryEnum } from '../../enum';

export interface IAchievementEntity
{
    id: number;
    publicname: string;
    category: AchievementCategoryEnum;
    level: number;
    rewardAmount: number;
    rewardType: number;
    points: number;
    progressNeeded: number;
}
