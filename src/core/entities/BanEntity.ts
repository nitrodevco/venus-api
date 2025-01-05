import { BanTypeEnum } from '#base/api';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('bans')
export class BanEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'user_id' })
    public userId: number;

    @Column('varchar', { name: 'ip', length: 50 })
    public ip: string;

    @Column('varchar', { name: 'machine_id', length: 255 })
    public machineId: string;

    @Column('int', { name: 'user_staff_id' })
    public userStaffId: number;

    @Column('int', { name: 'timestamp' })
    public timestamp: number;

    @Column('int', { name: 'ban_expire', default: '0' })
    public banExpire: number;

    @Column('varchar', { name: 'ban_reason', length: 200 })
    public banReason: string;

    @Column('enum', { name: 'type', enum: BanTypeEnum, default: BanTypeEnum.ACCOUNT })
    public type: BanTypeEnum;

    @Column('int', { name: 'cfh_topic', default: '-1' })
    public cfhTopic: number;
}
