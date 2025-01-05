import { IAnalyst, IRepositorySearchOptions, IRepositorySearchResult } from '#base/api';
import { DatabaseService, RoomEntity } from '#base/core';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class HabboRoomService
{
    constructor(
        @InjectRepository(RoomEntity)
        private readonly roomRepository: Repository<RoomEntity>,
        private readonly databaseService: DatabaseService)
    { }

    public async getAll(options: IRepositorySearchOptions<RoomEntity> = null, analyst: IAnalyst = null): Promise<IRepositorySearchResult<RoomEntity>>
    {
        return await this.databaseService.searchRepository(this.roomRepository, options, analyst);
    }

    public async totalRooms(): Promise<number>
    {
        return await this.roomRepository.count();
    }
}
