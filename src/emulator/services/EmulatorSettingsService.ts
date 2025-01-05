import { IAnalyst, IRepositorySearchOptions, IRepositorySearchResult, IRepositoryUpdate } from '#base/api';
import { CoreLogService, DatabaseService, EmulatorSettingEntity } from '#base/core';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EmulatorSettingsService
{
    constructor(
        @InjectRepository(EmulatorSettingEntity)
        private readonly emulatorSettingsRepository: Repository<EmulatorSettingEntity>,
        private readonly databaseService: DatabaseService,
        private readonly logService: CoreLogService)
    { }

    public async getAll(options: IRepositorySearchOptions<EmulatorSettingEntity> = null, analyst: IAnalyst = null): Promise<IRepositorySearchResult<EmulatorSettingEntity>>
    {
        return await this.databaseService.searchRepository(this.emulatorSettingsRepository, options, analyst);
    }

    public async processUpdate(updates: IRepositoryUpdate<EmulatorSettingEntity>[], analyst: IAnalyst = null): Promise<IRepositoryUpdate<EmulatorSettingEntity>[]>
    {
        const updatesToProcess: IRepositoryUpdate[] = [];

        for(const update of updates)
        {
            if(update.updates.key)
            {
                const existing = await this.emulatorSettingsRepository.findOne({
                    where: {
                        key: update.updates.key.trim()
                    }
                });

                if(existing && (existing.id !== update.id)) throw new Error('key_already_exists');
            }

            updatesToProcess.push(update);
        }

        if(!updatesToProcess.length) return [];

        return await this.databaseService.updateRepository(this.emulatorSettingsRepository, updates, analyst);
    }
}
