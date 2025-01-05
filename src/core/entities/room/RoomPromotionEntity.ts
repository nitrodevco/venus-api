import { IRoomEntity, IRoomPromotionEntity } from '#base/api';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { RoomEntity } from './RoomEntity';

@Entity('room_promotions')
export class RoomPromotionEntity implements IRoomPromotionEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'room_id' })
    public roomId: number;

    @Column('varchar', { name: 'title', length: 127 })
    public title: string;

    @Column('varchar', { name: 'description', length: 1024 })
    public description: string;

    @Column('int', { name: 'end_timestamp', default: '0' })
    public endTimestamp: number;

    @Column('int', { name: 'start_timestamp', default: '-1' })
    public startTimestamp: number;

    @Column('int', { name: 'category', default: '0' })
    public category: number;

    @ManyToOne(type => RoomEntity)
    @JoinColumn({ name: 'room_id' })
    public room?: IRoomEntity;
}
