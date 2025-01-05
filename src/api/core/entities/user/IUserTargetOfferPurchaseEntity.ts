import { IUserEntity } from './IUserEntity';

export interface IUserTargetOfferPurchaseEntity
{
    id: number;
    userId: number;
    offerId: number;
    state: number;
    amount: number;
    lastPurchase: number;

    user?: IUserEntity;
}
