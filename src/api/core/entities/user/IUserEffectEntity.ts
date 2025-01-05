import { IUserEntity } from './IUserEntity';

export interface IUserEffectEntity
{
    id: number;
    userId: number;
    effect: number;
    duration: number;
    activationTimestamp: number;
    total: number;

    user?: IUserEntity;
}
