import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('items')
export class ItemEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'user_id', default: '0' })
    public userId: number;

    @Column('int', { name: 'room_id', default: '0' })
    public roomId: number;

    @Column('int', { name: 'item_id', nullable: true, default: '0' })
    public itemId: number;

    @Column('varchar', { name: 'wall_pos', length: 20 })
    public wallPos: string;

    @Column('int', { name: 'x', default: '0' })
    public x: number;

    @Column('int', { name: 'y', default: '0' })
    public y: number;

    @Column('double', { name: 'z', precision: 10, scale: 6, default: '0.000000' })
    public z: number;

    @Column('int', { name: 'rot', default: '0' })
    public rot: number;

    @Column('varchar', { name: 'extra_data', length: 1024 })
    public extraData: string;

    @Column('varchar', { name: 'wired_data', length: 10000 })
    public wiredData: string;

    @Column('varchar', { name: 'limited_data', length: 10, default: '0: 0' })
    public limitedData: string;

    @Column('int', { name: 'guild_id', default: '0' })
    public guildId: number;
}
