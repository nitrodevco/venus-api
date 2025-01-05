import { CatalogPageLayoutEnum, OffOnEnum } from '#base/api';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('catalog_pages_bc')
export class CatalogPageBcEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'parent_id', default: '-1' })
    public parentId: number;

    @Column('varchar', { name: 'caption', length: 128 })
    public caption: string;

    @Column('enum', { name: 'page_layout', enum: CatalogPageLayoutEnum, default: CatalogPageLayoutEnum.DEFAULT_3x3 })
    public pageLayout: CatalogPageLayoutEnum;

    @Column('int', { name: 'icon_color', default: '1' })
    public iconColor: number;

    @Column('int', { name: 'icon_image', default: '1' })
    public iconImage: number;

    @Column('int', { name: 'order_num', default: '1' })
    public orderNum: number;

    @Column('enum', { name: 'visible', enum: OffOnEnum, default: OffOnEnum.ON })
    public visible: OffOnEnum;

    @Column('enum', { name: 'enabled', enum: OffOnEnum, default: OffOnEnum.ON })
    public enabled: OffOnEnum;

    @Column('varchar', { name: 'page_headline', length: 1024 })
    public pageHeadline: string;

    @Column('varchar', { name: 'page_teaser', length: 64 })
    public pageTeaser: string;

    @Column('varchar', { name: 'page_special', nullable: true, length: 2048 })
    public pageSpecial: string;

    @Column('text', { name: 'page_text1', nullable: true })
    public pageText1: string;

    @Column('text', { name: 'page_text2', nullable: true })
    public pageText2: string;

    @Column('text', { name: 'page_text_details', nullable: true })
    public pageTextDetails: string;

    @Column('text', { name: 'page_text_teaser', nullable: true })
    public pageTextTeaser: string;
}
