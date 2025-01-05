import { OffOnEnum } from '#base/api';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('wordfilter')
export class WordfilterEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('varchar', { name: 'key', length: 256 })
    public key: string;

    @Column('varchar', { name: 'replacement', length: 16 })
    public replacement: string;

    @Column('enum', { name: 'hide', enum: OffOnEnum, default: OffOnEnum.OFF })
    public hide: OffOnEnum;

    @Column('enum', { name: 'report', enum: OffOnEnum, default: OffOnEnum.OFF })
    public report: OffOnEnum;

    @Column('int', { name: 'mute', default: '0' })
    public mute: number;
}
