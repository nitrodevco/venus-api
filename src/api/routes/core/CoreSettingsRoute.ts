import { ISettings, IUpdatedSetting } from '../../core';

export type ICoreSettingsGetRequest = {};
export type ICoreSettingsGetResponse = ISettings;

export type ICoreSettingsAllGetRequest = {};
export type ICoreSettingsAllGetResponse = ISettings;

export type ICoreSettingsPostRequest = { updates: IUpdatedSetting[], deletes: string[] };
export type ICoreSettingsPostResponse = void;

export type ICoreSettingsDeleteRequest = { keys: string[] };
export type ICoreSettingsDeleteResponse = void;
