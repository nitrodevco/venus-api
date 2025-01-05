import { IVenusUserEntity, OffOnEnum } from '#base/api';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { VenusUserRoleEntity } from './VenusUserRoleEntity';
import { VenusUserSessionEntity } from './VenusUserSessionEntity';

@Entity('venus_users')
export class VenusUserEntity implements IVenusUserEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('varchar', { name: 'name', length: 255, unique: true })
    public name: string;

    @Column('varchar', { name: 'password', length: 255, select: false })
    public password: string;

    @Column('varchar', { name: 'email', length: 255 })
    public email: string;

    @Column('enum', { name: 'password_expired', enum: OffOnEnum, default: OffOnEnum.ON })
    public passwordExpired: OffOnEnum;

    @Column('varchar', { name: 'otp_secret', length: 255 })
    public otpSecret: string;

    @OneToMany(type => VenusUserRoleEntity, role => role.user)
    public roles?: VenusUserRoleEntity[];

    @OneToMany(type => VenusUserSessionEntity, session => session.user)
    public sessions?: VenusUserSessionEntity[];
}
