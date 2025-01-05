import { IRoomEntity, IRoomTraxPlaylistEntity } from '#base/api';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { RoomEntity } from './RoomEntity';

@Entity('room_trax_playlist')
export class RoomTraxPlaylistEntity implements IRoomTraxPlaylistEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'room_id' })
    public roomId: number;

    @Column('int', { name: 'item_id' })
    public itemId: number;

    @ManyToOne(type => RoomEntity)
    @JoinColumn({ name: 'room_id' })
    public room?: IRoomEntity;
}
