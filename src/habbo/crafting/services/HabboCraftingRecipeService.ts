import { IAnalyst, IRepositorySearchOptions, IRepositorySearchResult, IRepositoryUpdate } from '#base/api';
import { CraftingRecipeEntity, DatabaseService } from '#base/core';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class HabboCraftingRecipeService
{
    constructor(
        @InjectRepository(CraftingRecipeEntity)
        private readonly craftingRecipeRepository: Repository<CraftingRecipeEntity>,
        private readonly databaseService: DatabaseService)
    { }

    public async getAll(options: IRepositorySearchOptions<CraftingRecipeEntity> = null, analyst: IAnalyst = null): Promise<IRepositorySearchResult<CraftingRecipeEntity>>
    {
        return await this.databaseService.searchRepository(this.craftingRecipeRepository, options, analyst);
    }

    public async processUpdate(updates: IRepositoryUpdate<CraftingRecipeEntity>[], analyst = null): Promise<IRepositoryUpdate<CraftingRecipeEntity>[]>
    {
        return await this.databaseService.updateRepository(this.craftingRecipeRepository, updates, analyst);
    }
}
