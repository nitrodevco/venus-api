import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('calendar_rewards_claimed')
export class CalendarRewardClaimedEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'user_id' })
    public userId: number;

    @Column('int', { name: 'reward_id' })
    public rewardId: number;

    @Column('int', { name: 'timestamp' })
    public timestamp: number;
}
