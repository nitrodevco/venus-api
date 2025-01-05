import { UserGenderTypeEnum } from '../../enum';
import { IUserEntity } from './IUserEntity';

export interface IUserWardrobeEntity
{
    id: number;
    userId: number;
    slotId: number;
    look: string;
    gender: UserGenderTypeEnum;

    user?: IUserEntity;
}
