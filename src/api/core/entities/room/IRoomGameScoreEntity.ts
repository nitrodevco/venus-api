import { IUserEntity } from '../user';
import { IRoomEntity } from './IRoomEntity';

export interface IRoomGameScoreEntity
{
    id: number;
    roomId: number;
    gameStartTimestamp: number;
    gameName: string;
    userId: number;
    teamId: number;
    score: number;
    teamScore: number;

    room?: IRoomEntity;
    user?: IUserEntity;
}
