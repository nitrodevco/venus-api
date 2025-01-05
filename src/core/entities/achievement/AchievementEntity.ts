import { AchievementCategoryEnum, IAchievementEntity } from '#base/api';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('achievements')
export class AchievementEntity implements IAchievementEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('varchar', { name: 'name', length: 64 })
    public publicname: string;

    @Column('enum', { name: 'category', enum: AchievementCategoryEnum })
    public category: AchievementCategoryEnum;

    @Column('int', { name: 'level', default: '1' })
    public level: number;

    @Column('int', { name: 'reward_amount', default: '100' })
    public rewardAmount: number;

    @Column('int', { name: 'reward_type', default: '0' })
    public rewardType: number;

    @Column('int', { name: 'points', nullable: true, default: '10' })
    public points: number;

    @Column('int', { name: 'progress_needed', default: '1' })
    public progressNeeded: number;
}
