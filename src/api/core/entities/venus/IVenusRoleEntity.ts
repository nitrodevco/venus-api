import { IVenusRolePermissionEntity } from './IVenusRolePermissionEntity';
import { IVenusUserRoleEntity } from './IVenusUserRoleEntity';

export interface IVenusRoleEntity
{
    id: number;
    name: string;
    order: number;
    color: string;

    permissions?: IVenusRolePermissionEntity[];
    userRoles?: IVenusUserRoleEntity[];
}
