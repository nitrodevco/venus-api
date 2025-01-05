import { IUserEntity } from '../user';
import { IRoomEntity } from './IRoomEntity';

export interface IRoomBanEntity
{
    id: number;
    roomId: number;
    userId: number;
    ends: number;

    room?: IRoomEntity;
    user?: IUserEntity;
}
