import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('messenger_friendships')
export class MessengerFriendshipEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'user_one_id', default: '0' })
    public userOneId: number;

    @Column('int', { name: 'user_two_id', default: '0' })
    public userTwoId: number;

    @Column('int', { name: 'relation', default: '0' })
    public relation: number;

    @Column('int', { name: 'friends_since', default: '0' })
    public friendsSince: number;
}
