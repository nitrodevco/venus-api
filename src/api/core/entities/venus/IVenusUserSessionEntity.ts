import { IVenusUserEntity } from './IVenusUserEntity';

export interface IVenusUserSessionEntity
{
    id: number;
    userId: number;
    token: number;

    user?: IVenusUserEntity;
}
