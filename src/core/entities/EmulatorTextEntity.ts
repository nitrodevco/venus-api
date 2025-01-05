import { IEmulatorTextEntity } from '#base/api';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('emulator_texts')
export class EmulatorTextEntity implements IEmulatorTextEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('varchar', { name: 'key', length: 100, unique: true })
    public key: string;

    @Column('varchar', { name: 'value', length: 4096 })
    public value: string;
}
