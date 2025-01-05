import { IUserEntity } from './IUserEntity';

export interface IUserSubscriptionEntity
{
    id: number;
    userId: number;
    subscriptionType: string;
    timestampStart: number;
    duration: number;
    active: boolean;

    user?: IUserEntity;
}
