import { ILogHcPaydayEntity } from '#base/api';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('logs_hc_payday')
export class LogHcPaydayEntity implements ILogHcPaydayEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
    public id: number;

    @Column('int', { name: 'timestamp', nullable: true, unsigned: true })
    public timestamp: number;

    @Column('int', { name: 'user_id', nullable: true, unsigned: true })
    public userId: number;

    @Column('int', { name: 'hc_streak', nullable: true, unsigned: true })
    public hcStreak: number;

    @Column('int', { name: 'total_coins_spent', nullable: true, unsigned: true })
    public totalCoinsSpent: number;

    @Column('int', { name: 'reward_coins_spent', nullable: true, unsigned: true })
    public rewardCoinsSpent: number;

    @Column('int', { name: 'reward_streak', nullable: true, unsigned: true })
    public rewardStreak: number;

    @Column('int', { name: 'total_payout', nullable: true, unsigned: true })
    public totalPayout: number;

    @Column('varchar', { name: 'currency', nullable: true, length: 255 })
    public currency: string;

    @Column('tinyint', { name: 'claimed', nullable: true, width: 1, default: '0' })
    public claimed: boolean;
}
