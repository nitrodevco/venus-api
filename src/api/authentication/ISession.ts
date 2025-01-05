import { ISystemUser } from '../panel';

export interface ISession
{
    userId: number;
    user?: ISystemUser;
}
