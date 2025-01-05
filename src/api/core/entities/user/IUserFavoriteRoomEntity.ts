import { IUserEntity } from './IUserEntity';

export interface IUserFavoriteRoomEntity
{
    id: number;
    userId: number;
    roomId: number;

    user?: IUserEntity;
}
