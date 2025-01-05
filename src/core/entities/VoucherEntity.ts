import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('vouchers')
export class VoucherEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('varchar', { name: 'code', length: 10 })
    public code: string;

    @Column('int', { name: 'credits', default: '0' })
    public credits: number;

    @Column('int', { name: 'points', default: '0' })
    public points: number;

    @Column('int', { name: 'points_type', default: '0' })
    public pointsType: number;

    @Column('int', { name: 'catalog_item_id', default: '0' })
    public catalogItemId: number;

    @Column('int', { name: 'amount', default: '1' })
    public amount: number;

    @Column('int', { name: 'limit', default: '-1' })
    public limit: number;
}
