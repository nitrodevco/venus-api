import { IVenusPermissionEntity } from './IVenusPermissionEntity';

export interface IVenusPermissionCategoryEntity
{
    id: number;
    name: string;

    permissions?: IVenusPermissionEntity[];
}
