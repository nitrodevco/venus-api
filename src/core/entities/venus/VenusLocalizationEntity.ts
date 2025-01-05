import { IVenusLocalizationEntity } from '#base/api';
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { VenusLanguageEntity } from './VenusLanguageEntity';

@Index([ 'key', 'languageId' ], { unique: true })
@Entity('venus_localizations')
export class VenusLocalizationEntity implements IVenusLocalizationEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'language_id' })
    public languageId: number;

    @Column('varchar', { name: 'key', length: 64 })
    public key: string;

    @Column('varchar', { name: 'value', length: 100 })
    public value: string;

    @ManyToOne(type => VenusLanguageEntity)
    @JoinColumn({ name: 'language_id' })
    public language?: VenusLanguageEntity;

    constructor(key: string, value: string)
    {
        this.key = key;
        this.value = value;
    }
}
