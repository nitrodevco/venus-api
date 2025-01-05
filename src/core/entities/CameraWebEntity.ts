import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('camera_web')
export class CameraWebEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'user_id' })
    public userId: number;

    @Column('int', { name: 'room_id', default: '0' })
    public roomId: number;

    @Column('int', { name: 'timestamp' })
    public timestamp: number;

    @Column('varchar', { name: 'url', length: 128 })
    public url: string;
}
