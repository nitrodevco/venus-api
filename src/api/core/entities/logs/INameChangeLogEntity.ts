export interface INameChangeLogEntity
{
    id: number;
    userId: number;
    oldName: string;
    newName: string;
    timestamp: number;
}
