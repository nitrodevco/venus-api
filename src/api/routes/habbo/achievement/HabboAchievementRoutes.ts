import { IAchievementEntity, IRepositorySearchOptions, IRepositorySearchResult, IRepositoryUpdate } from '../../../core';

export type IHabboAchievementPostRequest = { options: IRepositorySearchOptions<IAchievementEntity> };
export type IHabboAchievementPostResponse = IRepositorySearchResult<IAchievementEntity>;

export type IHabboAchievementPatchRequest = { updates: IRepositoryUpdate<IAchievementEntity>[] };
export type IHabboAchievementPatchResponse = IRepositoryUpdate<IAchievementEntity>[];
