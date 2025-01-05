export interface IRoomTradeLogEntity
{
    id: number;
    userOneId: number;
    userTwoId: number;
    userOneIp: string;
    userTwoIp: string;
    timestamp: number;
    userOneItemCount: number;
    userTwoItemCount: number;
}
