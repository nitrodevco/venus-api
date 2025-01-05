import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('guilds_forums_comments')
export class GuildForumCommentEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
    public id: number;

    @Column('int', { name: 'thread_id', default: '0' })
    public threadId: number;

    @Column('int', { name: 'user_id', default: '0' })
    public userId: number;

    @Column('text', { name: 'message' })
    public message: string;

    @Column('int', { name: 'created_at', default: '0' })
    public createdAt: number;

    @Column('int', { name: 'state', default: '0' })
    public state: number;

    @Column('int', { name: 'admin_id', default: '0' })
    public adminId: number;
}
