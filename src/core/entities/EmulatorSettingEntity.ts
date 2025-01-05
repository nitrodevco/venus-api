import { IEmulatorSettingEntity } from '#base/api';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('emulator_settings')
export class EmulatorSettingEntity implements IEmulatorSettingEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('varchar', { name: 'key', length: 100, unique: true })
    public key: string;

    @Column('varchar', { name: 'value', length: 512 })
    public value: string;
}
