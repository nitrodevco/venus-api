import { IVenusPermissionEntity } from '#base/api';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { VenusColumnPermissionEntity } from './VenusColumnPermissionEntity';
import { VenusPermissionCategoryEntity } from './VenusPermissionCategoryEntity';
import { VenusRolePermissionEntity } from './VenusRolePermissionEntity';

@Entity('venus_permissions')
export class VenusPermissionEntity implements IVenusPermissionEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'category_id' })
    public categoryId: number;

    @Column('varchar', { name: 'name', length: 64 })
    public name: string;

    @ManyToOne(type => VenusPermissionCategoryEntity)
    @JoinColumn({ name: 'category_id' })
    public category?: VenusPermissionCategoryEntity;

    @OneToMany(type => VenusRolePermissionEntity, permission => permission.permission)
    public rolePermissions?: VenusRolePermissionEntity[];

    @OneToMany(type => VenusColumnPermissionEntity, column => column.readPermission)
    public columnPermissions?: VenusColumnPermissionEntity[];
}
