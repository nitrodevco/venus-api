import { IRoomEntity } from '../room';
import { IUserEntity } from '../user';

export interface IChatlogRoomEntity
{
    id: number;
    roomId: number;
    userFromId: number;
    userToId: number;
    message: string;
    timestamp: number;

    room?: IRoomEntity;
    user?: IUserEntity;
    target?: IUserEntity;
}
