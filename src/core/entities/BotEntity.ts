import { BotTypeEnum, OffOnEnum, UserGenderTypeEnum } from '#base/api';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('bots')
export class BotEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'user_id', default: '0' })
    public userId: number;

    @Column('int', { name: 'room_id', default: '0' })
    public roomId: number;

    @Column('varchar', { name: 'name', length: 25 })
    public name: string;

    @Column('varchar', { name: 'motto', length: 100 })
    public motto: string;

    @Column('varchar', { name: 'figure', length: 500 })
    public figure: string;

    @Column('enum', { name: 'gender', enum: UserGenderTypeEnum, default: UserGenderTypeEnum.MALE })
    public gender: UserGenderTypeEnum;

    @Column('int', { name: 'x', default: '0' })
    public x: number;

    @Column('int', { name: 'y', default: '0' })
    public y: number;

    @Column('double', { name: 'z', precision: 11, scale: 1, default: '0' })
    public z: number;

    @Column('int', { name: 'rot', default: '0' })
    public rot: number;

    @Column('varchar', { name: 'chat_lines', length: 5112 })
    public chatLines: string;

    @Column('enum', { name: 'chat_auto', enum: OffOnEnum, default: OffOnEnum.ON })
    public chatAuto: OffOnEnum;

    @Column('enum', { name: 'chat_random', enum: OffOnEnum, default: OffOnEnum.ON })
    public chatRandom: OffOnEnum;

    @Column('int', { name: 'chat_delay', default: '5' })
    public chatDelay: number;

    @Column('int', { name: 'dance', default: '0' })
    public dance: number;

    @Column('enum', { name: 'freeroam', enum: OffOnEnum, default: OffOnEnum.OFF })
    public freeroam: OffOnEnum;

    @Column('enum', { name: 'type', enum: BotTypeEnum, default: BotTypeEnum.GENERIC })
    public type: BotTypeEnum;

    @Column('int', { name: 'effect', default: '0' })
    public effect: number;

    @Column('int', { name: 'bubble_id', nullable: true, default: '31' })
    public bubbleId: number;
}
