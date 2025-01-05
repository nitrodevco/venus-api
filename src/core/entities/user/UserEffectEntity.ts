import { IUserEffectEntity, IUserEntity } from '#base/api';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './UserEntity';

@Entity('users_effects')
export class UserEffectEntity implements IUserEffectEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'user_id' })
    public userId: number;

    @Column('int', { name: 'effect' })
    public effect: number;

    @Column('int', { name: 'duration', default: () => '86400' })
    public duration: number;

    @Column('int', { name: 'activation_timestamp', default: '-1' })
    public activationTimestamp: number;

    @Column('int', { name: 'total', default: '1' })
    public total: number;

    @ManyToOne(type => UserEntity)
    @JoinColumn({ name: 'user_id' })
    public user?: IUserEntity;
}
