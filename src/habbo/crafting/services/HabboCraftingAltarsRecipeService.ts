import { IAnalyst, IRepositorySearchOptions, IRepositorySearchResult, IRepositoryUpdate } from '#base/api';
import { CraftingAltarsRecipeEntity, DatabaseService } from '#base/core';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class HabboCraftingAltarsRecipeService
{
    constructor(
        @InjectRepository(CraftingAltarsRecipeEntity)
        private readonly craftingAltarsRecipeRepository: Repository<CraftingAltarsRecipeEntity>,
        private readonly databaseService: DatabaseService)
    { }

    public async getAll(options: IRepositorySearchOptions<CraftingAltarsRecipeEntity> = null, analyst: IAnalyst = null): Promise<IRepositorySearchResult<CraftingAltarsRecipeEntity>>
    {
        return await this.databaseService.searchRepository(this.craftingAltarsRecipeRepository, options, analyst);
    }

    public async processUpdate(updates: IRepositoryUpdate<CraftingAltarsRecipeEntity>[], analyst: IAnalyst = null): Promise<IRepositoryUpdate<CraftingAltarsRecipeEntity>[]>
    {
        return await this.databaseService.updateRepository(this.craftingAltarsRecipeRepository, updates, analyst);
    }
}
