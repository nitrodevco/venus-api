import { Column, Entity } from 'typeorm';

@Entity('items_crackable')
export class ItemCrackableEntity
{
    @Column('int', { primary: true, name: 'item_id' })
    public itemId: number;

    @Column('varchar', { name: 'item_name', length: 255 })
    public itemName: string;

    @Column('int', { name: 'count' })
    public count: number;

    @Column('varchar', { name: 'prizes', length: 255, default: '179: 1' })
    public prizes: string;

    @Column('varchar', { name: 'achievement_tick', length: 64 })
    public achievementTick: string;

    @Column('varchar', { name: 'achievement_cracked', length: 64 })
    public achievementCracked: string;

    @Column('int', { name: 'required_effect', default: '0' })
    public requiredEffect: number;

    @Column('int', { name: 'subscription_duration', nullable: true })
    public subscriptionDuration: number;

    @Column('varchar', { name: 'subscription_type', nullable: true, length: 255 })
    public subscriptionType: string;
}
