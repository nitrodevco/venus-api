import { ILanguage, ILocalization } from '../../core';

export type ICoreLanguageLanguagesGetRequest = {};
export type ICoreLanguageLanguagesGetResponse = Partial<ILanguage>[];

export type ICoreLanguageLanguageGetRequest = { code: string };
export type ICoreLanguageLanguageGetResponse = ILanguage;

export type ICoreLanguageLanguagePostRequest = { code: string; localizations: ILocalization[]; };
export type ICoreLanguageLanguagePostResponse = boolean;

export type ICoreLanguageLanguageDeleteRequest = { code: string; localizationIds: number[]; };
export type ICoreLanguageLanguageDeleteResponse = boolean;

export type ICoreLanguageAddPostRequest = { code: string; name: string; copyFrom: string; localizations: ILocalization[]; };
export type ICoreLanguageAddPostResponse = boolean;
