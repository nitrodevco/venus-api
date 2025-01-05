import { IUserEntity } from '../user';

export interface IChatlogPrivateEntity
{
    id: number;
    userFromId: number;
    userToId: number;
    message: string;
    timestamp: number;

    user?: IUserEntity;
    target?: IUserEntity;
}
