import { OffOnEnum } from '../../enum';
import { IVenusPermissionEntity } from './IVenusPermissionEntity';
import { IVenusRoleEntity } from './IVenusRoleEntity';

export interface IVenusRolePermissionEntity
{
    id: number;
    roleId: number;
    permissionId: number;
    enabled: OffOnEnum;

    role?: IVenusRoleEntity;
    permission?: IVenusPermissionEntity;
}
