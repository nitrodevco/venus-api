import { IVenusLanguageEntity } from '#base/api';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { VenusLocalizationEntity } from './VenusLocalizationEntity';

@Entity('venus_languages')
export class VenusLanguageEntity implements IVenusLanguageEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('varchar', { name: 'code', length: 64, unique: true })
    public code: string;

    @Column('varchar', { name: 'name' })
    public name: string;

    @OneToMany(type => VenusLocalizationEntity, localization => localization.language, { cascade: [ 'insert', 'update' ] })
    public localizations?: VenusLocalizationEntity[];

    constructor(code: string, name: string)
    {
        this.code = code;
        this.name = name;
    }
}
