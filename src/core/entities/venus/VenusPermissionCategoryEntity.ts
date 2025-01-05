import { IVenusPermissionCategoryEntity } from '#base/api';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { VenusPermissionEntity } from './VenusPermissionEntity';

@Entity('venus_permission_categories')
export class VenusPermissionCategoryEntity implements IVenusPermissionCategoryEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('varchar', { name: 'name', length: 64 })
    public name: string;

    @OneToMany(type => VenusPermissionEntity, permission => permission.category)
    public permissions?: VenusPermissionEntity[];
}
