import { IUserEntity } from './IUserEntity';

export interface IUserSavedSearchEntity
{
    id: number;
    searchCode: string;
    filter: string;
    userId: number;

    user?: IUserEntity;
}
