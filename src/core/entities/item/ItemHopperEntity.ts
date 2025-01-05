import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('items_hoppers')
export class ItemHopperEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'item_id' })
    public itemId: number;

    @Column('int', { name: 'base_item' })
    public wbaseItem: number;
}
