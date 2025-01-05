import { HabboClubTypeEnum, OffOnEnum } from '#base/api';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('catalog_club_offers')
export class CatalogClubOfferEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('enum', { name: 'enabled', enum: OffOnEnum, default: OffOnEnum.ON })
    public enabled: OffOnEnum;

    @Column('varchar', { name: 'name', length: 35 })
    public name: string;

    @Column('int', { name: 'days' })
    public days: number;

    @Column('int', { name: 'credits', default: '10' })
    public credits: number;

    @Column('int', { name: 'points', default: '0' })
    public points: number;

    @Column('int', { name: 'points_type', default: '0' })
    public pointsType: number;

    @Column('enum', { name: 'type', enum: HabboClubTypeEnum, default: HabboClubTypeEnum.HABBO_CLUB })
    public type: HabboClubTypeEnum;

    @Column('enum', { name: 'deal', enum: OffOnEnum, default: OffOnEnum.OFF })
    public deal: OffOnEnum;

    @Column('enum', { name: 'giftable', enum: OffOnEnum, default: OffOnEnum.OFF })
    public giftable: OffOnEnum;
}
