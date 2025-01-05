import { IRepositorySearchOptions, IRepositorySearchResult, IRoomEntity } from '../../../core';

export type IHabboRoomPostRequest = { options: IRepositorySearchOptions<IRoomEntity> };
export type IHabboRoomPostResponse = IRepositorySearchResult<IRoomEntity>;
