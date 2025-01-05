import { IAnalyst, IRepositorySearchOptions, IRepositorySearchResult } from '#base/api';
import { CommandLogEntity, DatabaseService } from '#base/core';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class HabboCommandLogService
{
    constructor(
        @InjectRepository(CommandLogEntity)
        private readonly commandLogRepository: Repository<CommandLogEntity>,
        private readonly databaseService: DatabaseService)
    { }

    public async getAll(options: IRepositorySearchOptions<CommandLogEntity> = null, analyst: IAnalyst = null): Promise<IRepositorySearchResult<CommandLogEntity>>
    {
        return await this.databaseService.searchRepository(this.commandLogRepository, options);
    }
}
