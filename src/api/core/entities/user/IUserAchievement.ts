import { IUserEntity } from './IUserEntity';

export interface IUserAchievementEntity
{
    id: number;
    userId: number;
    achievementName: string;
    progress: number;

    user?: IUserEntity;
}
