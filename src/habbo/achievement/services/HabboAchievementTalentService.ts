import { IAnalyst, IRepositorySearchOptions, IRepositorySearchResult, IRepositoryUpdate } from '#base/api';
import { AchievementTalentEntity, DatabaseService } from '#base/core';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class HabboAchievementTalentService
{
    constructor(
        @InjectRepository(AchievementTalentEntity)
        private readonly achievementTalentRepository: Repository<AchievementTalentEntity>,
        private readonly databaseService: DatabaseService)
    { }

    public async getAll(options: IRepositorySearchOptions<AchievementTalentEntity> = null, analyst: IAnalyst = null): Promise<IRepositorySearchResult<AchievementTalentEntity>>
    {
        return await this.databaseService.searchRepository(this.achievementTalentRepository, options, analyst);
    }

    public async processUpdate(updates: IRepositoryUpdate<AchievementTalentEntity>[], analyst: IAnalyst = null): Promise<IRepositoryUpdate<AchievementTalentEntity>[]>
    {
        return await this.databaseService.updateRepository(this.achievementTalentRepository, updates, analyst);
    }
}
