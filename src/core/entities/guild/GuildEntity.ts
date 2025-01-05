import { OffOnEnum } from '#base/api';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('guilds')
export class GuildEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'user_id', default: '0' })
    public userId: number;

    @Column('varchar', { name: 'name', length: 50 })
    public name: string;

    @Column('varchar', { name: 'description', length: 250 })
    public description: string;

    @Column('int', { name: 'room_id', default: '0' })
    public roomId: number;

    @Column('int', { name: 'state', default: '0' })
    public state: number;

    @Column('enum', { name: 'rights', enum: OffOnEnum, default: OffOnEnum.OFF })
    public rights: OffOnEnum;

    @Column('int', { name: 'color_one', default: '0' })
    public colorOne: number;

    @Column('int', { name: 'color_two', default: '0' })
    public colorTwo: number;

    @Column('varchar', { name: 'badge', length: 256 })
    public badge: string;

    @Column('int', { name: 'date_created' })
    public dateCreated: number;

    @Column('enum', { name: 'forum', enum: OffOnEnum, default: OffOnEnum.OFF })
    public forum: OffOnEnum;

    @Column('enum', { name: 'read_forum', enum: [ 'EVERYONE', 'MEMBERS', 'ADMINS' ], default: 'EVERYONE' })
    public readForum: 'EVERYONE' | 'MEMBERS' | 'ADMINS';

    @Column('enum', { name: 'post_messages', enum: [ 'EVERYONE', 'MEMBERS', 'ADMINS', 'OWNER' ], default: 'EVERYONE' })
    public postMessages: 'EVERYONE' | 'MEMBERS' | 'ADMINS' | 'OWNER';

    @Column('enum', {
        name: 'post_threads', enum: [ 'EVERYONE', 'MEMBERS', 'ADMINS', 'OWNER' ], default: 'EVERYONE',
    })
    public postThreads: 'EVERYONE' | 'MEMBERS' | 'ADMINS' | 'OWNER';

    @Column('enum', { name: 'mod_forum', enum: [ 'ADMINS', 'OWNER' ], default: 'ADMINS' })
    public modForum: 'ADMINS' | 'OWNER';
}
