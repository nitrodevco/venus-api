import { IUserCurrencyEntity, IUserEntity } from '#base/api';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './UserEntity';

@Entity('users_currency')
export class UserCurrencyEntity implements IUserCurrencyEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { primary: true, name: 'user_id' })
    public userId: number;

    @Column('int', { primary: true, name: 'type' })
    public type: number;

    @Column('int', { name: 'amount', default: '0' })
    public amount: number;

    @ManyToOne(type => UserEntity)
    @JoinColumn({ name: 'user_id' })
    public user?: IUserEntity;
}
