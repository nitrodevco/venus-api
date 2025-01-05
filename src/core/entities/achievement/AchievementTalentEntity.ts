import { AchievementTalentTypeEnum, IAchievementTalentEntity } from '#base/api';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('achievements_talents')
export class AchievementTalentEntity implements IAchievementTalentEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('enum', { name: 'type', enum: AchievementTalentTypeEnum })
    public type: AchievementTalentTypeEnum;

    @Column('int', { name: 'level', default: '0' })
    public level: number;

    @Column('varchar', { name: 'achievement_ids', length: 100 })
    public achievementIds: string;

    @Column('varchar', { name: 'achievement_levels', length: 100 })
    public achievementLevels: string;

    @Column('varchar', { name: 'reward_furni', length: 100 })
    public rewardFurni: string;

    @Column('varchar', { name: 'reward_perks', length: 100 })
    public rewardPerks: string;

    @Column('varchar', { name: 'reward_badges', length: 100 })
    public rewardBadges: string;
}
