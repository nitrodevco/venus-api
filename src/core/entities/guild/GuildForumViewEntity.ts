import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('guild_forum_views')
export class GuildForumViewEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'user_id' })
    public userId: number;

    @Column('int', { name: 'guild_id' })
    public guildId: number;

    @Column('int', { name: 'timestamp' })
    public timestamp: number;
}
