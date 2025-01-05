import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('wired_rewards_given')
export class WiredRewardGivenEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'wired_item' })
    public wiredItem: number;

    @Column('int', { name: 'user_id' })
    public userId: number;

    @Column('int', { name: 'reward_id' })
    public rewardId: number;

    @Column('int', { name: 'timestamp' })
    public timestamp: number;
}
