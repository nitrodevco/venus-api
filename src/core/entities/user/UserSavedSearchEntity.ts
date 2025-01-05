import { IUserEntity, IUserSavedSearchEntity } from '#base/api';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './UserEntity';

@Entity('users_saved_searches')
export class UserSavedSearchEntity implements IUserSavedSearchEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('varchar', { name: 'search_code', length: 255 })
    public searchCode: string;

    @Column('varchar', { name: 'filter', nullable: true, length: 255 })
    public filter: string;

    @Column('int', { name: 'user_id' })
    public userId: number;

    @ManyToOne(type => UserEntity)
    @JoinColumn({ name: 'user_id' })
    public user?: IUserEntity;
}
