import { OffOnEnum } from '#base/api';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('old_guilds_forums')
export class OldGuildForumEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'guild_id' })
    public guildId: number;

    @Column('int', { name: 'user_id' })
    public userId: number;

    @Column('mediumtext', { name: 'subject' })
    public subject: string;

    @Column('longtext', { name: 'message' })
    public message: string;

    @Column('enum', { name: 'state', enum: [ 'OPEN', 'CLOSED', 'HIDDEN_BY_ADMIN', 'HIDDEN_BY_STAFF' ], default: 'OPEN' })
    public state: 'OPEN' | 'CLOSED' | 'HIDDEN_BY_ADMIN' | 'HIDDEN_BY_STAFF';

    @Column('int', { name: 'admin_id', default: '0' })
    public adminId: number;

    @Column('enum', { name: 'pinned', enum: OffOnEnum, default: OffOnEnum.OFF })
    public pinned: OffOnEnum;

    @Column('enum', { name: 'locked', enum: OffOnEnum, default: OffOnEnum.OFF })
    public locked: OffOnEnum;

    @Column('int', { name: 'timestamp' })
    public timestamp: number;
}
