import { IVenusColumnPermissionEntity } from '#base/api';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { VenusPermissionEntity } from './VenusPermissionEntity';

@Entity('venus_column_permissions')
@Unique('unique_table_column', [ 'tableName', 'columnName' ])
export class VenusColumnPermissionEntity implements IVenusColumnPermissionEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('varchar', { name: 'table_name', length: 64 })
    public tableName: string;

    @Column('varchar', { name: 'column_name', length: 64 })
    public columnName: string;

    @Column('int', { name: 'read_permission_id', nullable: true })
    public readPermissionId: number;

    @Column('int', { name: 'edit_permission_id', nullable: true })
    public editPermissionId: number;

    @ManyToOne(type => VenusPermissionEntity)
    @JoinColumn({ name: 'read_permission_id' })
    public readPermission?: VenusPermissionEntity;

    @ManyToOne(type => VenusPermissionEntity)
    @JoinColumn({ name: 'edit_permission_id' })
    public editPermission?: VenusPermissionEntity;
}
