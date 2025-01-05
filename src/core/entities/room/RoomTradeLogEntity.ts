import { IRoomTradeLogEntity, IUserEntity } from '#base/api';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from '../user';

@Entity('room_trade_log')
export class RoomTradeLogEntity implements IRoomTradeLogEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'user_one_id' })
    public userOneId: number;

    @Column('int', { name: 'user_two_id' })
    public userTwoId: number;

    @Column('varchar', { name: 'user_one_ip', length: 45 })
    public userOneIp: string;

    @Column('varchar', { name: 'user_two_ip', length: 45 })
    public userTwoIp: string;

    @Column('int', { name: 'timestamp' })
    public timestamp: number;

    @Column('int', { name: 'user_one_item_count' })
    public userOneItemCount: number;

    @Column('int', { name: 'user_two_item_count' })
    public userTwoItemCount: number;

    @ManyToOne(type => UserEntity)
    @JoinColumn({ name: 'user_one_id' })
    public userOne?: IUserEntity;

    @ManyToOne(type => UserEntity)
    @JoinColumn({ name: 'user_two_id' })
    public userTwo?: IUserEntity;
}
