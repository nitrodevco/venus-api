import { IEmulatorErrorEntity } from '#base/api';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('emulator_errors')
export class EmulatorErrorEntity implements IEmulatorErrorEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'timestamp', default: '0' })
    public timestamp: number;

    @Column('varchar', { name: 'version', length: 64 })
    public version: string;

    @Column('varchar', { name: 'build_hash', length: 64 })
    public buildHash: string;

    @Column('varchar', { name: 'type', length: 32, default: 'Exception' })
    public type: string;

    @Column('blob', { name: 'stacktrace' })
    public stacktrace: Buffer;
}
