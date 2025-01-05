import { IVenusRoleEntity } from './IVenusRoleEntity';
import { IVenusUserEntity } from './IVenusUserEntity';

export interface IVenusUserRoleEntity
{
    id: number;
    userId: number;
    roleId: number;

    user?: IVenusUserEntity;
    role?: IVenusRoleEntity;
}
