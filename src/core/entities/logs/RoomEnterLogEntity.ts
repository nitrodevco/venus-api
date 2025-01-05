import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('room_enter_log')
export class RoomEnterLogEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'room_id' })
    public roomId: number;

    @Column('int', { name: 'user_id' })
    public userId: number;

    @Column('int', { name: 'timestamp' })
    public timestamp: number;

    @Column('int', { name: 'exit_timestamp', default: '0' })
    public exitTimestamp: number;
}
