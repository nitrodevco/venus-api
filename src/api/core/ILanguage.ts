import { ILocalization } from './ILocalization';

export interface ILanguage
{
    id: number;
    code: string;
    name: string;
    localizations: ILocalization[];
}
