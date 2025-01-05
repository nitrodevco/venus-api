import { IVenusColumnPermissionEntity } from './IVenusColumnPermissionEntity';
import { IVenusPermissionCategoryEntity } from './IVenusPermissionCategoryEntity';
import { IVenusRolePermissionEntity } from './IVenusRolePermissionEntity';

export interface IVenusPermissionEntity
{
    id: number;
    categoryId: number;
    name: string;

    category?: IVenusPermissionCategoryEntity;
    rolePermissions?: IVenusRolePermissionEntity[];
    columnPermissions?: IVenusColumnPermissionEntity[];
}
