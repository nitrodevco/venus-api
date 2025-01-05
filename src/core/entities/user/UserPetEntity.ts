import { IUserEntity, IUserPetEntity, OffOnEnum } from '#base/api';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './UserEntity';

@Entity('users_pets')
export class UserPetEntity implements IUserPetEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'user_id' })
    public userId: number;

    @Column('int', { name: 'room_id' })
    public roomId: number;

    @Column('varchar', { name: 'name', length: 15, default: 'Pet' })
    public name: string;

    @Column('int', { name: 'race' })
    public race: number;

    @Column('int', { name: 'type' })
    public type: number;

    @Column('varchar', { name: 'color', length: 6 })
    public color: string;

    @Column('int', { name: 'happyness', default: '100' })
    public happyness: number;

    @Column('int', { name: 'experience', default: '0' })
    public experience: number;

    @Column('int', { name: 'energy', default: () => '100' })
    public energy: number;

    @Column('int', { name: 'hunger', default: '0' })
    public hunger: number;

    @Column('int', { name: 'thirst', default: '0' })
    public thirst: number;

    @Column('int', { name: 'respect', default: '0' })
    public respect: number;

    @Column('int', { name: 'created' })
    public created: number;

    @Column('int', { name: 'x', default: '0' })
    public x: number;

    @Column('int', { name: 'y', default: '0' })
    public y: number;

    @Column('double', { name: 'z', precision: 22, default: '0' })
    public z: number;

    @Column('int', { name: 'rot', default: '0' })
    public rot: number;

    @Column('int', { name: 'hair_style', default: '-1' })
    public hairStyle: number;

    @Column('int', { name: 'hair_color', default: '0' })
    public hairColor: number;

    @Column('enum', { name: 'saddle', enum: OffOnEnum, default: OffOnEnum.OFF })
    public saddle: OffOnEnum;

    @Column('enum', { name: 'ride', enum: OffOnEnum, default: OffOnEnum.OFF })
    public ride: OffOnEnum;

    @Column('int', { name: 'mp_type', default: '0' })
    public mpType: number;

    @Column('int', { name: 'mp_color', default: '0' })
    public mpColor: number;

    @Column('int', { name: 'mp_nose', default: '0' })
    public mpNose: number;

    @Column('tinyint', { name: 'mp_nose_color', default: '0' })
    public mpNoseColor: number;

    @Column('int', { name: 'mp_eyes', default: '0' })
    public mpEyes: number;

    @Column('tinyint', { name: 'mp_eyes_color', default: '0' })
    public mpEyesColor: number;

    @Column('int', { name: 'mp_mouth', default: '0' })
    public mpMouth: number;

    @Column('tinyint', { name: 'mp_mouth_color', default: '0' })
    public mpMouthColor: number;

    @Column('int', { name: 'mp_death_timestamp', default: '0' })
    public mpDeathTimestamp: number;

    @Column('enum', { name: 'mp_breedable', enum: OffOnEnum, default: OffOnEnum.OFF })
    public mpBreedable: OffOnEnum;

    @Column('enum', { name: 'mp_allow_breed', enum: OffOnEnum, default: OffOnEnum.OFF })
    public mpAllowBreed: OffOnEnum;

    @Column('varchar', { name: 'gnome_data', length: 80 })
    public gnomeData: string;

    @Column('tinyint', { name: 'mp_is_dead', width: 1, default: '0' })
    public mpIsDead: boolean;

    @Column('int', { name: 'saddle_item_id', nullable: true })
    public saddleItemId: number;

    @ManyToOne(type => UserEntity)
    @JoinColumn({ name: 'user_id' })
    public user?: IUserEntity;
}
