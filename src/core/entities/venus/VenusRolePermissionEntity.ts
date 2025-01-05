import { IVenusRolePermissionEntity, OffOnEnum } from '#base/api';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { VenusPermissionEntity } from './VenusPermissionEntity';
import { VenusRoleEntity } from './VenusRoleEntity';

@Entity('venus_role_permissions')
export class VenusRolePermissionEntity implements IVenusRolePermissionEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'role_id' })
    public roleId: number;

    @Column('int', { name: 'permission_id' })
    public permissionId: number;

    @Column('enum', { name: 'enabled', enum: OffOnEnum, default: OffOnEnum.OFF })
    public enabled: OffOnEnum;

    @ManyToOne(type => VenusRoleEntity)
    @JoinColumn({ name: 'role_id' })
    public role?: VenusRoleEntity;

    @ManyToOne(type => VenusPermissionEntity)
    @JoinColumn({ name: 'permission_id' })
    public permission?: VenusPermissionEntity;
}
