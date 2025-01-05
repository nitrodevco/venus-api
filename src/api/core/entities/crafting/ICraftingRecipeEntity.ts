import { OffOnEnum } from '../../enum';

export interface ICraftingRecipeEntity
{
    id: number;
    productName: string;
    reward: number;
    enabled: OffOnEnum;
    achievement: string;
    secret: OffOnEnum;
    limited: OffOnEnum;
    remaining: number;
}
