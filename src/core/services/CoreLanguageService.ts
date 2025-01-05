import { ConfigKeys, ILocalization } from '#base/api';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VenusLanguageEntity, VenusLocalizationEntity } from '../entities';
import { CoreLogService } from './CoreLogService';
import { CoreSettingsService } from './CoreSettingsService';

@Injectable()
export class CoreLanguageService implements OnModuleInit
{
    private _languages = new Map<string, VenusLanguageEntity>();

    constructor(
        @InjectRepository(VenusLanguageEntity)
        private readonly systemLanguageRepository: Repository<VenusLanguageEntity>,
        @InjectRepository(VenusLocalizationEntity)
        private readonly systemLocalizationRepository: Repository<VenusLocalizationEntity>,
        private readonly settingsService: CoreSettingsService,
        private readonly logService: CoreLogService)
    { }

    public async onModuleInit(): Promise<void>
    {
        await this.loadLanguages();
    }

    public getDefaultLanguage(): VenusLanguageEntity
    {
        return this._languages.get(this.settingsService.getString(ConfigKeys.SYSTEM_DEFAULT_LANGUAGE, 'en'));
    }

    public getLanguage(name: string): VenusLanguageEntity
    {
        return this._languages.get(name) ?? this.getDefaultLanguage();
    }

    public async addLanguage(code: string, name: string, copyFrom: string = null, localizations: Partial<ILocalization>[] = []): Promise<VenusLanguageEntity>
    {
        if(this._languages.has(code)) return this._languages.get(code);

        if(copyFrom && (copyFrom.length > 0)) this.getLanguage(copyFrom)?.localizations?.forEach(localization => localizations.push({ key: localization.key, value: localization.value }));

        const entity = new VenusLanguageEntity(code, name);

        if(localizations.length > 0)
        {
            entity.localizations = [];

            localizations.forEach(localization => entity.localizations.push(new VenusLocalizationEntity(localization.key, localization.value)));
        }

        await this.systemLanguageRepository.save(entity);

        this._languages.set(entity.code, entity);

        return this.getLanguage(name);
    }

    public async editLocalizations(code: string, localizations: ILocalization[] = []): Promise<boolean>
    {
        if(!this._languages.has(code)) return false;

        const language = this._languages.get(code);

        localizations.forEach(localization =>
        {
            const existing = language.localizations.find(existing => (existing.id === localization.id));

            if(existing)
            {
                existing.key = localization.key;
                existing.value = localization.value;
            }
            else
            {
                language.localizations.push(new VenusLocalizationEntity(localization.key, localization.value));
            }
        });

        await this.systemLanguageRepository.save(language);

        return true;
    }

    public async removeLocalizations(code: string, localizationIds: number[] = []): Promise<boolean>
    {
        if(!this._languages.has(code)) return false;

        const language = this._languages.get(code);
        const deletedEntities: VenusLocalizationEntity[] = [];

        localizationIds.forEach(localizationId =>
        {
            const localizationIndex = language.localizations?.findIndex(localization => (localization.id === localizationId));

            if(localizationIndex === -1) return;

            deletedEntities.push(...language.localizations.splice(localizationIndex, 1));
        });

        await this.systemLocalizationRepository.remove(deletedEntities);

        return true;
    }

    private async loadLanguages(): Promise<void>
    {
        const entities = await this.systemLanguageRepository.find({
            relations: [ 'localizations' ]
        });

        if(entities?.length)
        {
            entities.forEach(entity =>
            {
                if(!entity.localizations) entity.localizations = [];

                this._languages.set(entity.code, entity);
            });
        }

        this.logService.log(`Loaded ${ this._languages.size } languages`);
    }

    public get languageCodes(): string[]
    {
        return Array.from(this._languages.keys());
    }

    public get languages(): VenusLanguageEntity[]
    {
        return Array.from(this._languages.values());
    }
}
