import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('guilds_members')
export class GuildMemberEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'guild_id', default: '0' })
    public guildId: number;

    @Column('int', { name: 'user_id', default: '0' })
    public userId: number;

    @Column('int', { name: 'level_id', default: '0' })
    public levelId: number;

    @Column('int', { name: 'member_since', default: '0' })
    public memberSince: number;
}
