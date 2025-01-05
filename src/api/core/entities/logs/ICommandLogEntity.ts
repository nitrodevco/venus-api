export interface ICommandLogEntity
{
    id: number;
    userId: number;
    timestamp: number;
    command: string;
    params: string;
    succes: 'no' | 'yes';
}
