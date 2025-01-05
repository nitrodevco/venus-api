import { IAnalyst, IRepositorySearchOptions, IRepositorySearchResult, IRepositoryUpdate, IUserAchievementEntity } from '#base/api';
import { DatabaseService, UserAchievementEntity } from '#base/core';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class HabboUserAchievementService
{
    constructor(
        @InjectRepository(UserAchievementEntity)
        private readonly userAchievementRepository: Repository<IUserAchievementEntity>,
        private readonly databaseService: DatabaseService)
    { }

    public async getAll(options: IRepositorySearchOptions<IUserAchievementEntity> = null, analyst: IAnalyst = null): Promise<IRepositorySearchResult<IUserAchievementEntity>>
    {
        return await this.databaseService.searchRepository(this.userAchievementRepository, options, analyst);
    }

    public async processUpdate(updates: IRepositoryUpdate<IUserAchievementEntity>[], analyst: IAnalyst = null): Promise<IRepositoryUpdate<IUserAchievementEntity>[]>
    {
        return await this.databaseService.updateRepository(this.userAchievementRepository, updates, analyst);
    }
}
