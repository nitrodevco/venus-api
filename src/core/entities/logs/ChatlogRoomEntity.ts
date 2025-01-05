import { IChatlogRoomEntity, IRoomEntity, IUserEntity } from '#base/api';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { RoomEntity } from '../room';
import { UserEntity } from '../user';

@Entity('chatlogs_room')
export class ChatlogRoomEntity implements IChatlogRoomEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'room_id', default: '0' })
    public roomId: number;

    @Column('int', { name: 'user_from_id' })
    public userFromId: number;

    @Column('int', { name: 'user_to_id', default: '0' })
    public userToId: number;

    @Column('varchar', { name: 'message', length: 255 })
    public message: string;

    @Column('int', { name: 'timestamp' })
    public timestamp: number;

    @ManyToOne(type => RoomEntity)
    @JoinColumn({ name: 'room_id' })
    public room?: IRoomEntity;

    @ManyToOne(type => UserEntity)
    @JoinColumn({ name: 'user_from_id' })
    public user?: IUserEntity;

    @ManyToOne(type => UserEntity)
    @JoinColumn({ name: 'user_to_id' })
    public target?: IUserEntity;
}
