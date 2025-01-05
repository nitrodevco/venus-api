import { IVenusPermissionEntity } from './IVenusPermissionEntity';

export interface IVenusColumnPermissionEntity
{
    id: number;
    tableName: string;
    columnName: string;
    readPermissionId: number;
    editPermissionId: number;

    readPermission?: IVenusPermissionEntity;
    editPermission?: IVenusPermissionEntity;
}
