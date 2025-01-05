import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('catalog_target_offers')
export class CatalogTargetOfferEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('varchar', { name: 'offer_code', length: 32 })
    public offerCode: string;

    @Column('varchar', { name: 'title', length: 128 })
    public title: string;

    @Column('varchar', { name: 'description', length: 2048 })
    public description: string;

    @Column('varchar', { name: 'image', length: 128 })
    public image: string;

    @Column('varchar', { name: 'icon', length: 128 })
    public icon: string;

    @Column('int', { name: 'end_timestamp' })
    public endTimestamp: number;

    @Column('int', { name: 'credits', default: '10' })
    public credits: number;

    @Column('int', { name: 'points', default: '10' })
    public points: number;

    @Column('int', { name: 'points_type', default: '5' })
    public pointsType: number;

    @Column('int', { name: 'purchase_limit', default: '5' })
    public purchaseLimit: number;

    @Column('int', { name: 'catalog_item' })
    public catalogItem: number;

    @Column('varchar', { name: 'vars', length: 1024 })
    public vars: string;
}
