import { IUserEntity } from './IUserEntity';

export interface IUserRecipeEntity
{
    id: number;
    userId: number;
    recipe: number;

    user?: IUserEntity;
}
