import { IRepositorySearchOptions, IRepositorySearchResult, IUserEntity } from '../../../core';

export type IHabboUserPostRequest = { options: IRepositorySearchOptions<IUserEntity> };
export type IHabboUserPostResponse = IRepositorySearchResult<IUserEntity>;
