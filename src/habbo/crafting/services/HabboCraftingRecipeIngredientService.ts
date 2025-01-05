import { IAnalyst, IRepositorySearchOptions, IRepositorySearchResult, IRepositoryUpdate } from '#base/api';
import { CraftingRecipeIngredientEntity, DatabaseService } from '#base/core';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class HabboCraftingRecipeIngredientService
{
    constructor(
        @InjectRepository(CraftingRecipeIngredientEntity)
        private readonly craftingRecipeIngredientRepository: Repository<CraftingRecipeIngredientEntity>,
        private readonly databaseService: DatabaseService)
    { }

    public async getAll(options: IRepositorySearchOptions<CraftingRecipeIngredientEntity> = null, analyst: IAnalyst = null): Promise<IRepositorySearchResult<CraftingRecipeIngredientEntity>>
    {
        return await this.databaseService.searchRepository(this.craftingRecipeIngredientRepository, options, analyst);
    }

    public async processUpdate(updates: IRepositoryUpdate<CraftingRecipeIngredientEntity>[], analyst: IAnalyst = null): Promise<IRepositoryUpdate<CraftingRecipeIngredientEntity>[]>
    {
        return await this.databaseService.updateRepository(this.craftingRecipeIngredientRepository, updates, analyst);
    }
}
