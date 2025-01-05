import { IUserBadgeEntity, IUserEntity } from '#base/api';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './UserEntity';

@Entity('users_badges')
export class UserBadgeEntity implements IUserBadgeEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'user_id', default: '0' })
    public userId: number;

    @Column('int', { name: 'slot_id', default: '0' })
    public slotId: number;

    @Column('varchar', { name: 'badge_code', length: 32 })
    public badgeCode: string;

    @ManyToOne(type => UserEntity)
    @JoinColumn({ name: 'user_id' })
    public user?: IUserEntity;
}
