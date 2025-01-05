import { IUserEntity } from './IUserEntity';

export interface IUserAchievementQueueEntity
{
    id: number;
    userId: number;
    achievementId: number;
    amount: number;

    user?: IUserEntity;
}
