import { IAnalyst, IRepositorySearchOptions, IRepositorySearchResult } from '#base/api';
import { ChatlogPrivateEntity, DatabaseService } from '#base/core';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class HabboChatlogPrivateService
{
    constructor(
        @InjectRepository(ChatlogPrivateEntity)
        private readonly chatlogPrivateRepository: Repository<ChatlogPrivateEntity>,
        private readonly databaseService: DatabaseService)
    { }

    public async getAll(options: IRepositorySearchOptions<ChatlogPrivateEntity> = null, analyst: IAnalyst = null): Promise<IRepositorySearchResult<ChatlogPrivateEntity>>
    {
        return await this.databaseService.searchRepository(this.chatlogPrivateRepository, options);
    }
}
