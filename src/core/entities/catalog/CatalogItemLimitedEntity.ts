import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('catalog_items_limited')
export class CatalogItemLimitedEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'catalog_item_id' })
    public catalogItemId: number;

    @Column('int', { name: 'number' })
    public number: number;

    @Column('int', { name: 'user_id', default: '0' })
    public userId: number;

    @Column('int', { name: 'timestamp', default: '0' })
    public timestamp: number;

    @Column('int', { name: 'item_id', default: '0' })
    public itemId: number;
}
