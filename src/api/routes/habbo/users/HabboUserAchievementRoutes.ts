import { IRepositorySearchOptions, IRepositorySearchResult, IRepositoryUpdate, IUserAchievementEntity } from '../../../core';

export type IHabboUserAchievementPostRequest = { options: IRepositorySearchOptions<IUserAchievementEntity> };
export type IHabboUserAchievementPostResponse = IRepositorySearchResult<IUserAchievementEntity>;

export type IHabboUserAchievementPatchRequest = { updates: IRepositoryUpdate<IUserAchievementEntity>[] };
export type IHabboUserAchievementPatchResponse = IRepositoryUpdate<IUserAchievementEntity>[];
