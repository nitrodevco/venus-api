import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('voucher_history')
export class VoucherHistoryEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'voucher_id' })
    public voucherId: number;

    @Column('int', { name: 'user_id' })
    public userId: number;

    @Column('int', { name: 'timestamp' })
    public timestamp: number;
}
