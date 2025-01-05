import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('support_tickets')
export class SupportTicketEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'state', default: '0' })
    public state: number;

    @Column('int', { name: 'type', default: '1' })
    public type: number;

    @Column('int', { name: 'timestamp', default: '0' })
    public timestamp: number;

    @Column('int', { name: 'score', default: '0' })
    public score: number;

    @Column('int', { name: 'sender_id', default: '0' })
    public senderId: number;

    @Column('int', { name: 'reported_id', default: '0' })
    public reportedId: number;

    @Column('int', { name: 'room_id', default: '0' })
    public roomId: number;

    @Column('int', { name: 'mod_id', default: '0' })
    public modId: number;

    @Column('varchar', { name: 'issue', length: 500 })
    public issue: string;

    @Column('int', { name: 'category', default: '0' })
    public category: number;

    @Column('int', { name: 'group_id' })
    public groupId: number;

    @Column('int', { name: 'thread_id' })
    public threadId: number;

    @Column('int', { name: 'comment_id' })
    public commentId: number;

    @Column('int', { name: 'photo_item_id', default: '-1' })
    public photoItemId: number;
}
