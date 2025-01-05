import { SanctionTypeEnum } from '#base/api';
import { Column, Entity } from 'typeorm';

@Entity('sanction_levels')
export class SanctionLevelEntity
{
    @Column('int', { primary: true, name: 'level' })
    public level: number;

    @Column('enum', { name: 'type', enum: SanctionTypeEnum })
    public type: SanctionTypeEnum;

    @Column('int', { name: 'hour_length' })
    public hourLength: number;

    @Column('int', { name: 'probation_days' })
    public probationDays: number;
}
