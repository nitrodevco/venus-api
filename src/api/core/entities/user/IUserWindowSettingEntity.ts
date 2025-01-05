import { OffOnEnum } from '../../enum';
import { IUserEntity } from './IUserEntity';

export interface IUserWindowSettingEntity
{
    id: number;
    userId: number;
    x: number;
    y: number;
    width: number;
    height: number;
    openSearches: OffOnEnum;

    user?: IUserEntity;
}
