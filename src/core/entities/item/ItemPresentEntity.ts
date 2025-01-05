import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('items_presents')
export class ItemPresentEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'item_id' })
    public itemId: number;

    @Column('int', { name: 'base_item_reward' })
    public baseItemReward: number;
}
