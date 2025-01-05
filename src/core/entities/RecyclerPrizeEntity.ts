import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('recycler_prizes')
export class RecyclerPrizeEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'rarity' })
    public rarity: number;

    @Column('int', { name: 'item_id' })
    public itemId: number;
}
