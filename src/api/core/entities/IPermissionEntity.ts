import { OffOnEnum } from '../enum';
import { IUserEntity } from './user';

export interface IPermissionEntity
{
    id: number;
    rankName: string;
    badge: string;
    level: number;
    roomEffect: number;
    logCommands: OffOnEnum;
    prefix: string;
    prefixColor: string;
    [index: string]: any;

    users?: IUserEntity[];
}
