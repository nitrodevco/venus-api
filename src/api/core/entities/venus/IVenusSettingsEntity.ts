import { OffOnEnum } from '../../enum';

export interface IVenusSettingsEntity
{
    id: number;
    key: string;
    value: string;
    isPublic: OffOnEnum;
}
