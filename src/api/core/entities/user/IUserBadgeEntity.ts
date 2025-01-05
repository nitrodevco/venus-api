import { IUserEntity } from './IUserEntity';

export interface IUserBadgeEntity
{
    id: number;
    userId: number;
    slotId: number;
    badgeCode: string;

    user?: IUserEntity;
}
