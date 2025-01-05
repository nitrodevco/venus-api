import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('old_guilds_forums_comments')
export class OldGuildsForumCommentEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'thread_id' })
    public threadId: number;

    @Column('int', { name: 'user_id' })
    public userId: number;

    @Column('int', { name: 'timestamp' })
    public timestamp: number;

    @Column('longtext', { name: 'message' })
    public message: string;

    @Column('enum', { name: 'state', enum: [ 'OPEN', 'CLOSED', 'HIDDEN_BY_ADMIN', 'HIDDEN_BY_STAFF' ], default: 'OPEN' })
    public state: 'OPEN' | 'CLOSED' | 'HIDDEN_BY_ADMIN' | 'HIDDEN_BY_STAFF';

    @Column('int', { name: 'admin_id', default: '0' })
    public adminId: number;
}
