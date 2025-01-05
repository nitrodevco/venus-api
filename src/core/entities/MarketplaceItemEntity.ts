import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('marketplace_items')
export class MarketplaceItemEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'item_id' })
    public itemId: number;

    @Column('int', { name: 'user_id' })
    public userId: number;

    @Column('int', { name: 'price' })
    public price: number;

    @Column('int', { name: 'timestamp' })
    public timestamp: number;

    @Column('int', { name: 'sold_timestamp', default: '0' })
    public soldTimestamp: number;

    @Column('int', { name: 'state', default: '1' })
    public state: number;
}
