import { IUserAchievementEntity, IUserEntity } from '#base/api';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './UserEntity';

@Entity('users_achievements')
export class UserAchievementEntity implements IUserAchievementEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'user_id' })
    public userId: number;

    @Column('varchar', { name: 'achievement_name', length: 255, unique: true })
    public achievementName: string;

    @Column('int', { name: 'progress', default: '1' })
    public progress: number;

    @ManyToOne(type => UserEntity)
    @JoinColumn({ name: 'user_id' })
    public user?: IUserEntity;
}
