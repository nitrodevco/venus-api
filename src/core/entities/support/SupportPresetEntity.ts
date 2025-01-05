import { SupportPresetTypeEnum } from '#base/api';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('support_presets')
export class SupportPresetEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('enum', { name: 'type', enum: SupportPresetTypeEnum, default: SupportPresetTypeEnum.USER })
    public type: SupportPresetTypeEnum;

    @Column('varchar', { name: 'preset', length: 200 })
    public preset: string;
}
