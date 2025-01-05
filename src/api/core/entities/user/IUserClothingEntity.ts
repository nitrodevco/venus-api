import { IUserEntity } from './IUserEntity';

export interface IUserClothingEntity
{
    id: number;
    userId: number;
    clothingId: number;

    user?: IUserEntity;
}
