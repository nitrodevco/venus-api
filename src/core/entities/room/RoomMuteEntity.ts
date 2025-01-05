import { IRoomEntity, IRoomMuteEntity, IUserEntity } from '#base/api';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { UserEntity } from '../user';
import { RoomEntity } from './RoomEntity';

@Entity('room_mutes')
@Unique([ 'roomId', 'userId' ])
export class RoomMuteEntity implements IRoomMuteEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'room_id' })
    public roomId: number;

    @Column('int', { name: 'user_id' })
    public userId: number;

    @Column('int', { name: 'ends' })
    public ends: number;

    @ManyToOne(type => RoomEntity)
    @JoinColumn({ name: 'room_id' })
    public room?: IRoomEntity;

    @ManyToOne(type => UserEntity)
    @JoinColumn({ name: 'user_id' })
    public user?: IUserEntity;
}
