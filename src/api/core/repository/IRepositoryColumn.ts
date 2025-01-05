import { ColumnType } from 'typeorm';

export interface IRepositoryColumn
{
    columnType: ColumnType;
    columnName: string;
    propertyName: string;
    enumValues?: (string | number)[];
    isNullable: boolean;
    readPermissionId: number;
    editPermissionId: number;
}
