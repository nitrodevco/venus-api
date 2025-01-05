import { ISettings, IUpdatedSetting, OffOnEnum } from '#base/api';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { VenusSettingsEntity } from '../entities';
import { CoreLogService } from './CoreLogService';

@Injectable()
export class CoreSettingsService implements OnModuleInit
{
    private _settings = new Map<string, VenusSettingsEntity>();
    private _envSettings = new Map<string, string>();

    constructor(
        @InjectRepository(VenusSettingsEntity)
        private readonly venusSettingsRepository: Repository<VenusSettingsEntity>,
        private readonly logService: CoreLogService)
    { }

    public async onModuleInit(): Promise<void>
    {
        await this.loadSettings();
    }

    public getString(key: string, defaultValue: string = null): string
    {
        return this.getValue(key) ?? defaultValue;
    }

    public getNumber(key: string, defaultValue: number = null): number
    {
        const value = this.getValue(key);

        return ((value !== undefined) ? parseInt(value) : (defaultValue ?? 0));
    }

    public getFloat(key: string, defaultValue: number = null): number
    {
        const value = this.getValue(key);

        return ((value !== undefined) ? parseFloat(value) : (defaultValue ?? 0));
    }

    public getBoolean(key: string, defaultValue = false): boolean
    {
        const value = this.getValue(key);

        if(value !== undefined)
        {
            if((value === '1') || (value === 'true')) return true;

            return false;
        }

        return defaultValue;
    }

    private getValue(key: string): string
    {
        let value = this._settings.get(key)?.value ?? undefined;

        if(value === undefined) value = this._envSettings.get(key) ?? undefined;

        return value;
    }

    public async updateKeys(...updates: IUpdatedSetting[]): Promise<void>
    {
        if(!updates?.length) return;

        const updatedEntities: VenusSettingsEntity[] = [];

        for(const update of updates)
        {
            if(this._settings.has(update.newKey)) continue;

            let settingEntity = this._settings.get(update.oldKey);

            if(settingEntity)
            {
                if(settingEntity.key !== update.newKey)
                {
                    if(this._settings.has(update.newKey)) continue;

                    settingEntity.key = update.newKey;
                }

                settingEntity.value = update.value;
                settingEntity.isPublic = update.isPublic ? OffOnEnum.ON : OffOnEnum.OFF;
            }
            else
            {
                settingEntity = new VenusSettingsEntity();

                settingEntity.key = update.newKey;
                settingEntity.value = update.value;
                settingEntity.isPublic = update.isPublic ? OffOnEnum.ON : OffOnEnum.OFF;

                this._settings.set(settingEntity.key, settingEntity);
            }

            updatedEntities.push(settingEntity);
        }

        await this.venusSettingsRepository.save(updatedEntities);
    }

    public async deleteKeys(...keys: string[]): Promise<void>
    {
        if(!keys?.length) return;

        const deletedKeys: string[] = [];

        for(const key of keys)
        {
            if(!this._settings.has(key)) continue;

            this._settings.delete(key);

            deletedKeys.push(key);
        }

        await this.venusSettingsRepository.delete({
            key: In(deletedKeys)
        });
    }

    public async updateSettings(updates: IUpdatedSetting[], deletes: string[] = []): Promise<void>
    {
        if(deletes?.length) await this.deleteKeys(...deletes);

        if(updates?.length) await this.updateKeys(...updates);
    }

    private async loadSettings(): Promise<void>
    {
        this.loadEnvSettings();

        const entities = await this.venusSettingsRepository.find();

        if(entities?.length)
        {
            entities.forEach(entity =>
            {
                this._settings.set(entity.key, entity);
            });
        }

        console.log(this._settings, this._envSettings)

        this.logService.log(`Loaded ${ this._settings.size } settings`);
    }

    private loadEnvSettings(): void
    {
        Object.keys(process.env)
            .filter(key => key.startsWith('VENUS_'))
            .forEach(key => 
            {
                const formattedKey = key.replace(/^VENUS_/, '').replace(/_/g, '.').toLowerCase();

                this._envSettings.set(formattedKey, process.env[key]);
            });
    }

    public getPublicSettings(): ISettings
    {
        const settings: ISettings = {};

        Array.from(this._settings.values()).forEach(entity =>
        {
            if(entity.isPublic === OffOnEnum.ON) settings[entity.key] = { value: entity.value, isPublic: true };
        });

        return settings;
    }

    public getAllSettings(): ISettings
    {
        const settings: ISettings = {};

        Array.from(this._settings.values()).forEach(entity =>
        {
            settings[entity.key] = { value: entity.value, isPublic: (entity.isPublic === OffOnEnum.ON) };
        });

        return settings;
    }
}
