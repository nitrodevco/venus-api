import { IAnalyst, IRepositorySearchOptions, IRepositorySearchResult, IRepositoryUpdate } from '#base/api';
import { AchievementEntity, DatabaseService } from '#base/core';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class HabboAchievementService
{
    constructor(
        @InjectRepository(AchievementEntity)
        private readonly achievementRepository: Repository<AchievementEntity>,
        private readonly databaseService: DatabaseService)
    { }

    public async getAll(options: IRepositorySearchOptions<AchievementEntity> = null, analyst: IAnalyst = null): Promise<IRepositorySearchResult<AchievementEntity>>
    {
        return await this.databaseService.searchRepository(this.achievementRepository, options, analyst);
    }

    public async processUpdate(updates: IRepositoryUpdate<AchievementEntity>[], analyst: IAnalyst = null): Promise<IRepositoryUpdate<AchievementEntity>[]>
    {
        return await this.databaseService.updateRepository(this.achievementRepository, updates, analyst);
    }
}
