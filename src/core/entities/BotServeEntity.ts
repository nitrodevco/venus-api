import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('bot_serves')
export class BotServeEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('varchar', { name: 'keys', length: 128 })
    public keys: string;

    @Column('int', { name: 'item' })
    public item: number;
}
