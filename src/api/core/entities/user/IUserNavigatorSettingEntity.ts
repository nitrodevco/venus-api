import { NavigatorListDisplayEnum, NavigatorListTypeEnum } from '../../enum';
import { IUserEntity } from './IUserEntity';

export interface IUserNavigatorSettingEntity
{
    id: number;
    userId: number;
    caption: string;
    listType: NavigatorListTypeEnum;
    display: NavigatorListDisplayEnum;

    user?: IUserEntity;
}
