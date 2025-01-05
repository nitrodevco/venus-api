import { IRoomModelCustomEntity } from '#base/api';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('room_models_custom')
export class RoomModelCustomEntity implements IRoomModelCustomEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('varchar', { name: 'name', length: 100 })
    public name: string;

    @Column('int', { name: 'door_x' })
    public doorX: number;

    @Column('int', { name: 'door_y' })
    public doorY: number;

    @Column('int', { name: 'door_dir' })
    public doorDir: number;

    @Column('text', { name: 'heightmap' })
    public heightmap: string;
}
