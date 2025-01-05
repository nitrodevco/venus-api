import { IUserEntity, IUserSubscriptionEntity } from '#base/api';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './UserEntity';

@Entity('users_subscriptions')
export class UserSubscriptionEntity implements IUserSubscriptionEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
    public id: number;

    @Column('int', { name: 'user_id', nullable: true, unsigned: true })
    public userId: number;

    @Column('varchar', { name: 'subscription_type', nullable: true, length: 255 })
    public subscriptionType: string;

    @Column('int', { name: 'timestamp_start', nullable: true, unsigned: true })
    public timestampStart: number;

    @Column('int', { name: 'duration', nullable: true, unsigned: true })
    public duration: number;

    @Column('tinyint', { name: 'active', nullable: true, width: 1, default: '1' })
    public active: boolean;

    @ManyToOne(type => UserEntity)
    @JoinColumn({ name: 'user_id' })
    public user?: IUserEntity;
}
