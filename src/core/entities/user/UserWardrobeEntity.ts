import { IUserEntity, IUserWardrobeEntity, UserGenderTypeEnum } from '#base/api';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './UserEntity';

@Entity('users_wardrobe')
export class UserWardrobeEntity implements IUserWardrobeEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'user_id', default: '0' })
    public userId: number;

    @Column('int', { name: 'slot_id', default: '0' })
    public slotId: number;

    @Column('varchar', { name: 'look', length: 256 })
    public look: string;

    @Column('enum', { name: 'gender', enum: UserGenderTypeEnum, default: UserGenderTypeEnum.MALE })
    public gender: UserGenderTypeEnum;

    @ManyToOne(type => UserEntity)
    @JoinColumn({ name: 'user_id' })
    public user?: IUserEntity;
}
