import { IChatlogRoomEntity, IRepositorySearchOptions, IRepositorySearchResult } from '../../../core';

export type IIHabboLogChatlogRoomPostRequest = { options: IRepositorySearchOptions<IChatlogRoomEntity> };
export type IIHabboLogChatlogRoomPostResponse = IRepositorySearchResult<IChatlogRoomEntity>;
