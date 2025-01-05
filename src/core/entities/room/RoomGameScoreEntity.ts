import { IRoomEntity, IRoomGameScoreEntity, IUserEntity } from '#base/api';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from '../user';
import { RoomEntity } from './RoomEntity';

@Entity('room_game_scores')
export class RoomGameScoreEntity implements IRoomGameScoreEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'room_id' })
    public roomId: number;

    @Column('int', { name: 'game_start_timestamp' })
    public gameStartTimestamp: number;

    @Column('varchar', { name: 'game_name', length: 64 })
    public gameName: string;

    @Column('int', { name: 'user_id' })
    public userId: number;

    @Column('int', { name: 'team_id' })
    public teamId: number;

    @Column('int', { name: 'score' })
    public score: number;

    @Column('int', { name: 'team_score' })
    public teamScore: number;

    @ManyToOne(type => RoomEntity)
    @JoinColumn({ name: 'room_id' })
    public room?: IRoomEntity;

    @ManyToOne(type => UserEntity)
    @JoinColumn({ name: 'user_id' })
    public user?: IUserEntity;
}
