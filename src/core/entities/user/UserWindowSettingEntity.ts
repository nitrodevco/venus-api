import { IUserEntity, IUserWindowSettingEntity, OffOnEnum } from '#base/api';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './UserEntity';

@Entity('user_window_settings')
export class UserWindowSettingEntity implements IUserWindowSettingEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'user_id' })
    public userId: number;

    @Column('int', { name: 'x', default: '100' })
    public x: number;

    @Column('int', { name: 'y', default: '100' })
    public y: number;

    @Column('int', { name: 'width', default: '435' })
    public width: number;

    @Column('int', { name: 'height', default: '535' })
    public height: number;

    @Column('enum', { name: 'open_searches', enum: OffOnEnum, default: OffOnEnum.OFF })
    public openSearches: OffOnEnum;

    @OneToOne(type => UserEntity)
    @JoinColumn({ name: 'user_id' })
    public user?: IUserEntity;
}
