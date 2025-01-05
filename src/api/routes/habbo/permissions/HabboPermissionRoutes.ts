import { IPermissionEntity, IRepositorySearchOptions, IRepositorySearchResult } from '../../../core';

export type IHabboPermissionPostRequest = { options: IRepositorySearchOptions<IPermissionEntity> };
export type IHabboPermissionPostResponse = IRepositorySearchResult<IPermissionEntity>;

export type IHabboPermissionUpdateRankPostRequest = { userId: number; rankId: number; };
export type IHabboPermissionUpdateRankPostResponse = void;
