import { ICommandLogEntity } from '#base/api';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('commandlogs')
export class CommandLogEntity implements ICommandLogEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'user_id' })
    public userId: number;

    @Column('int', { name: 'timestamp' })
    public timestamp: number;

    @Column('varchar', { name: 'command', length: 256 })
    public command: string;

    @Column('varchar', { name: 'params', length: 256 })
    public params: string;

    @Column('enum', { name: 'succes', enum: [ 'no', 'yes' ], default: 'yes' })
    public succes: 'no' | 'yes';
}
