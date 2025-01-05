import { OffOnEnum } from '../../enum';
import { IVenusUserRoleEntity } from './IVenusUserRoleEntity';
import { IVenusUserSessionEntity } from './IVenusUserSessionEntity';

export interface IVenusUserEntity
{
    id: number;
    name: string;
    password: string;
    email: string;
    passwordExpired: OffOnEnum;
    otpSecret: string;

    roles?: IVenusUserRoleEntity[];
    sessions?: IVenusUserSessionEntity[];
}
