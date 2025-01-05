import { IRoomModelEntity, OffOnEnum } from '#base/api';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('room_models')
export class RoomModelEntity implements IRoomModelEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('varchar', { primary: true, name: 'name', length: 100 })
    public name: string;

    @Column('int', { name: 'door_x' })
    public doorX: number;

    @Column('int', { name: 'door_y' })
    public doorY: number;

    @Column('int', { name: 'door_dir', default: '2' })
    public doorDir: number;

    @Column('text', { name: 'heightmap' })
    public heightmap: string;

    @Column('text', { name: 'public_items' })
    public publicItems: string;

    @Column('enum', { name: 'club_only', enum: OffOnEnum, default: '0' })
    public clubOnly: OffOnEnum;
}
