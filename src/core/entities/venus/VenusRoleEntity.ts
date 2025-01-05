import { IVenusRoleEntity } from '#base/api';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { VenusRolePermissionEntity } from './VenusRolePermissionEntity';
import { VenusUserRoleEntity } from './VenusUserRoleEntity';

@Entity('venus_roles')
export class VenusRoleEntity implements IVenusRoleEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('varchar', { name: 'name', length: 64 })
    public name: string;

    @Column('int', { name: 'order', nullable: false })
    public order: number;

    @Column('varchar', { name: 'color', length: 64 })
    public color: string;

    @OneToMany(type => VenusRolePermissionEntity, permission => permission.role)
    public permissions?: VenusRolePermissionEntity[];

    @OneToMany(type => VenusUserRoleEntity, role => role.role)
    public userRoles?: VenusUserRoleEntity[];
}
