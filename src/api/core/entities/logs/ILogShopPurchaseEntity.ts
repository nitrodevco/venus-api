export interface ILogShopPurchaseEntity
{
    id: number;
    timestamp: number;
    userId: number;
    catalogItemId: number;
    itemIds: string;
    catalogName: string;
    costCredits: number;
    costPoints: number;
    pointsType: number;
    amount: number;
}
