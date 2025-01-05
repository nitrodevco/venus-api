import { ILogShopPurchaseEntity } from '#base/api';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('logs_shop_purchases')
export class LogShopPurchaseEntity implements ILogShopPurchaseEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
    public id: number;

    @Column('int', { name: 'timestamp', nullable: true, unsigned: true })
    public timestamp: number;

    @Column('int', { name: 'user_id', nullable: true, unsigned: true })
    public userId: number;

    @Column('int', { name: 'catalog_item_id', nullable: true, unsigned: true })
    public catalogItemId: number;

    @Column('text', { name: 'item_ids', nullable: true })
    public itemIds: string;

    @Column('varchar', { name: 'catalog_name', nullable: true, length: 255 })
    public catalogName: string;

    @Column('int', { name: 'cost_credits', nullable: true })
    public costCredits: number;

    @Column('int', { name: 'cost_points', nullable: true })
    public costPoints: number;

    @Column('int', { name: 'points_type', nullable: true })
    public pointsType: number;

    @Column('int', { name: 'amount', nullable: true })
    public amount: number;
}
