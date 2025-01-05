import { IAnalyst } from './IAnalyst';

export interface ISystemUser extends IAnalyst
{
    id: number;
    name: string;
    roleIds: number[];
}
