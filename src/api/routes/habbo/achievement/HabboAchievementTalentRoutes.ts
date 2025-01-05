import { IAchievementTalentEntity, IRepositorySearchOptions, IRepositorySearchResult, IRepositoryUpdate } from '../../../core';

export type IHabboAchievementTalentPostRequest = { options: IRepositorySearchOptions<IAchievementTalentEntity> };
export type IHabboAchievementTalentPostResponse = IRepositorySearchResult<IAchievementTalentEntity>;

export type IHabboAchievementTalentPatchRequest = { updates: IRepositoryUpdate<IAchievementTalentEntity>[] };
export type IHabboAchievementTalentPatchResponse = IRepositoryUpdate<IAchievementTalentEntity>[];
