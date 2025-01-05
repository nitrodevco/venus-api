import { CatalogFeaturedPageTypeEnum } from '#base/api';
import { Column, Entity } from 'typeorm';

@Entity('catalog_featured_pages')
export class CatalogFeaturedPageEntity
{
    @Column('int', { primary: true, name: 'slot_id' })
    public slotId: number;

    @Column('varchar', { name: 'image', length: 70 })
    public image: string;

    @Column('varchar', { name: 'caption', length: 130 })
    public caption: string;

    @Column('enum', { name: 'type', enum: CatalogFeaturedPageTypeEnum, default: CatalogFeaturedPageTypeEnum.PAGE_NAME })
    public type: CatalogFeaturedPageTypeEnum;

    @Column('int', { name: 'expire_timestamp', default: '-1' })
    public expireTimestamp: number;

    @Column('varchar', { name: 'page_name', length: 30 })
    public pageName: string;

    @Column('int', { name: 'page_id', default: '0' })
    public pageId: number;

    @Column('varchar', { name: 'product_name', length: 40 })
    public productName: string;
}
