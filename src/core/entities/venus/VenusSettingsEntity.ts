import { IVenusSettingsEntity, OffOnEnum } from '#base/api';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('venus_settings')
export class VenusSettingsEntity implements IVenusSettingsEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('varchar', { name: 'key', length: 64, unique: true })
    public key: string;

    @Column('varchar', { name: 'value', length: 100 })
    public value: string;

    @Column('enum', { name: 'is_public', enum: OffOnEnum, default: OffOnEnum.OFF })
    public isPublic: OffOnEnum;
}
