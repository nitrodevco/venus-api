import { IAnalyst, IRepositorySearchOptions, IRepositorySearchResult, IRepositoryUpdate } from '#base/api';
import { CoreLogService, DatabaseService, EmulatorTextEntity } from '#base/core';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EmulatorTextsService
{
    constructor(
        @InjectRepository(EmulatorTextEntity)
        private readonly emulatorTextsRepository: Repository<EmulatorTextEntity>,
        private readonly databaseService: DatabaseService,
        private readonly logService: CoreLogService)
    { }

    public async getAll(options: IRepositorySearchOptions<EmulatorTextEntity> = null, analyst: IAnalyst = null): Promise<IRepositorySearchResult<EmulatorTextEntity>>
    {
        return await this.databaseService.searchRepository(this.emulatorTextsRepository, options, analyst);
    }

    public async processUpdate(updates: IRepositoryUpdate<EmulatorTextEntity>[], analyst: IAnalyst = null): Promise<IRepositoryUpdate<EmulatorTextEntity>[]>
    {
        const updatesToProcess: IRepositoryUpdate[] = [];

        for(const update of updates)
        {
            if(update.updates.key)
            {
                const existing = await this.emulatorTextsRepository.findOne({
                    where: {
                        key: update.updates.key.trim()
                    }
                });

                if(existing && (existing.id !== update.id)) throw new Error('key_already_exists');
            }

            updatesToProcess.push(update);
        }

        if(!updatesToProcess.length) return [];

        return await this.databaseService.updateRepository(this.emulatorTextsRepository, updates, analyst);
    }
}
