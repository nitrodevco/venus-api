import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('calendar_rewards')
export class CalendarRewardEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('varchar', { name: 'custom_image', length: 128 })
    public customImage: string;

    @Column('int', { name: 'credits', default: '0' })
    public credits: number;

    @Column('int', { name: 'points', default: '0' })
    public points: number;

    @Column('int', { name: 'points_type', default: '0' })
    public pointsType: number;

    @Column('varchar', { name: 'badge', length: 25 })
    public badge: string;

    @Column('int', { name: 'item_id', default: '0' })
    public itemId: number;
}
