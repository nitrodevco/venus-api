import { IVenusLocalizationEntity } from './IVenusLocalizationEntity';

export interface IVenusLanguageEntity
{
    id: number;
    code: string;
    name: string;

    localizations?: IVenusLocalizationEntity[];
}
