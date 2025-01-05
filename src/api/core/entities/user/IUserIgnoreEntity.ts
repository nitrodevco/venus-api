import { IUserEntity } from './IUserEntity';

export interface IUserIgnoreEntity
{
    id: number;
    userId: number;
    targetId: number;

    user?: IUserEntity;
}
