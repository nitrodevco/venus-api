import { IVenusLanguageEntity } from './IVenusLanguageEntity';

export interface IVenusLocalizationEntity
{
    id: number;
    languageId: number;
    key: string;
    value: string;

    language?: IVenusLanguageEntity;
}
