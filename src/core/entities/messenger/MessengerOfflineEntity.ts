import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('messenger_offline')
export class MessengerOfflineEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'user_id', default: '0' })
    public userId: number;

    @Column('int', { name: 'user_from_id', default: '0' })
    public userFromId: number;

    @Column('varchar', { name: 'message', length: 500 })
    public message: string;

    @Column('int', { name: 'sended_on' })
    public sendedOn: number;
}
