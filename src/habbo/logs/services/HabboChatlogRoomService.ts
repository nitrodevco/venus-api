import { IAnalyst, IRepositorySearchOptions, IRepositorySearchResult } from '#base/api';
import { ChatlogRoomEntity, DatabaseService } from '#base/core';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class HabboChatlogRoomService
{
    constructor(
        @InjectRepository(ChatlogRoomEntity)
        private readonly chatlogRoomRepository: Repository<ChatlogRoomEntity>,
        private readonly databaseService: DatabaseService)
    { }

    public async getAll(options: IRepositorySearchOptions<ChatlogRoomEntity> = null, analyst: IAnalyst = null): Promise<IRepositorySearchResult<ChatlogRoomEntity>>
    {
        return await this.databaseService.searchRepository(this.chatlogRoomRepository, options);
    }
}
