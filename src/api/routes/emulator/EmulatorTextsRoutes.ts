import { IEmulatorTextEntity, IRepositorySearchOptions, IRepositorySearchResult, IRepositoryUpdate } from '../../core';

export type IEmulatorTextsPostRequest = { options: IRepositorySearchOptions<IEmulatorTextEntity> };
export type IEmulatorTextsPostResponse = IRepositorySearchResult<IEmulatorTextEntity>;

export type IEmulatorTextsPatchRequest = { updates: IRepositoryUpdate<IEmulatorTextEntity>[] };
export type IEmulatorTextsPatchResponse = IRepositoryUpdate<IEmulatorTextEntity>[];
