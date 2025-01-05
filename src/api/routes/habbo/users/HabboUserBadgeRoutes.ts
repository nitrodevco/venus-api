import { IRepositorySearchOptions, IRepositorySearchResult, IUserBadgeEntity } from '../../../core';

export type IHabboUserBadgePostRequest = { options: IRepositorySearchOptions<IUserBadgeEntity> };
export type IHabboUserBadgePostResponse = IRepositorySearchResult<IUserBadgeEntity>;
