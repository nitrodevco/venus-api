import { IUserEntity, IUserNavigatorSettingEntity, NavigatorListDisplayEnum, NavigatorListTypeEnum } from '#base/api';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './UserEntity';

@Entity('users_navigator_settings')
export class UserNavigatorSettingEntity implements IUserNavigatorSettingEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'user_id' })
    public userId: number;

    @Column('varchar', { name: 'caption', length: 128 })
    public caption: string;

    @Column('enum', { name: 'list_type', enum: NavigatorListTypeEnum, default: NavigatorListTypeEnum.LIST })
    public listType: NavigatorListTypeEnum;

    @Column('enum', { name: 'display', enum: NavigatorListDisplayEnum, default: NavigatorListDisplayEnum.VISIBLE })
    public display: NavigatorListDisplayEnum;

    @OneToOne(type => UserEntity)
    @JoinColumn({ name: 'user_id' })
    public user?: IUserEntity;
}
