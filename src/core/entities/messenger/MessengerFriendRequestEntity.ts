import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('messenger_friendrequests')
export class MessengerFriendRequestEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'user_to_id', default: '0' })
    public userToId: number;

    @Column('int', { name: 'user_from_id', default: '0' })
    public userFromId: number;
}
