import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('guilds_forums_threads')
export class GuildForumThreadEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
    public id: number;

    @Column('int', { name: 'guild_id', nullable: true, default: '0' })
    public guildId: number;

    @Column('int', { name: 'opener_id', nullable: true, default: '0' })
    public openerId: number;

    @Column('varchar', { name: 'subject', nullable: true, length: 255 })
    public subject: string;

    @Column('int', { name: 'posts_count', nullable: true, default: '0' })
    public postsCount: number;

    @Column('int', { name: 'created_at', nullable: true, default: '0' })
    public createdAt: number;

    @Column('int', { name: 'updated_at', nullable: true, default: '0' })
    public updatedAt: number;

    @Column('int', { name: 'state', nullable: true, default: '0' })
    public state: number;

    @Column('tinyint', { name: 'pinned', nullable: true, default: '0' })
    public pinned: number;

    @Column('tinyint', { name: 'locked', nullable: true, default: '0' })
    public locked: number;

    @Column('int', { name: 'admin_id', nullable: true, default: '0' })
    public adminId: number;
}
