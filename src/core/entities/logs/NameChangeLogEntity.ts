import { INameChangeLogEntity } from '#base/api';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('namechange_log')
export class NameChangeLogEntity implements INameChangeLogEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'user_id' })
    public userId: number;

    @Column('varchar', { name: 'old_name', length: 32 })
    public oldName: string;

    @Column('varchar', { name: 'new_name', length: 32 })
    public newName: string;

    @Column('int', { name: 'timestamp' })
    public timestamp: number;
}
