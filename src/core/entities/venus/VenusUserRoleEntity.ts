import { IVenusUserRoleEntity } from '#base/api';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { VenusRoleEntity } from './VenusRoleEntity';
import { VenusUserEntity } from './VenusUserEntity';

@Entity('venus_user_roles')
export class VenusUserRoleEntity implements IVenusUserRoleEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'user_id' })
    public userId: number;

    @Column('int', { name: 'role_id' })
    public roleId: number;

    @ManyToOne(type => VenusUserEntity)
    @JoinColumn({ name: 'user_id' })
    public user?: VenusUserEntity;

    @ManyToOne(type => VenusRoleEntity)
    @JoinColumn({ name: 'role_id' })
    public role?: VenusRoleEntity;
}
