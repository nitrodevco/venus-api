import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('gift_wrappers')
export class GiftWrapperEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'sprite_id' })
    public spriteId: number;

    @Column('int', { name: 'item_id' })
    public itemId: number;

    @Column('enum', { name: 'type', enum: [ 'gift', 'wrapper' ], default: 'wrapper' })
    public type: 'gift' | 'wrapper';
}
