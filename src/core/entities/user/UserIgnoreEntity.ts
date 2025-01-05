import { IUserEntity, IUserIgnoreEntity } from '#base/api';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './UserEntity';

@Entity('users_ignored')
export class UserIgnoreEntity implements IUserIgnoreEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'user_id' })
    public userId: number;

    @Column('int', { name: 'target_id' })
    public targetId: number;

    @ManyToOne(type => UserEntity)
    @JoinColumn({ name: 'user_id' })
    public user?: IUserEntity;
}
