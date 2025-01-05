import { IEmulatorSettingEntity, IRepositorySearchOptions, IRepositorySearchResult, IRepositoryUpdate } from '../../core';

export type IEmulatorSettingsPostRequest = { options: IRepositorySearchOptions<IEmulatorSettingEntity> };
export type IEmulatorSettingsPostResponse = IRepositorySearchResult<IEmulatorSettingEntity>;

export type IEmulatorSettingsPatchRequest = { updates: IRepositoryUpdate<IEmulatorSettingEntity>[] };
export type IEmulatorSettingsPatchResponse = IRepositoryUpdate<IEmulatorSettingEntity>[];
