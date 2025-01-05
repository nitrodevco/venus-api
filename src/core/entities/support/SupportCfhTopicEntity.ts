import { CfhActionEnum, OffOnEnum } from '#base/api';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('support_cfh_topics')
export class SupportCfhTopicEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'category_id', nullable: true })
    public categoryId: number;

    @Column('varchar', { name: 'name_internal', nullable: true, length: 255 })
    public nameInternal: string;

    @Column('varchar', { name: 'name_external', nullable: true, length: 255 })
    public nameExternal: string;

    @Column('enum', { name: 'action', nullable: true, enum: CfhActionEnum, default: CfhActionEnum.MODS })
    public action: CfhActionEnum;

    @Column('enum', { name: 'ignore_target', enum: OffOnEnum, default: OffOnEnum.OFF })
    public ignoreTarget: OffOnEnum;

    @Column('text', { name: 'auto_reply', nullable: true })
    public autoReply: string;

    @Column('int', { name: 'default_sanction', default: '0' })
    public defaultSanction: number;
}
