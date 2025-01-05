import { IUserEntity } from './IUserEntity';

export interface IUserCurrencyEntity
{
    id: number;
    userId: number;
    type: number;
    amount: number;

    user?: IUserEntity;
}
