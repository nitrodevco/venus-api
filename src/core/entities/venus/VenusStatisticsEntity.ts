import { IVenusStatisticsEntity } from '#base/api';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('venus_statistics')
export class VenusStatisticsEntity implements IVenusStatisticsEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'total_users' })
    public totalUsers: number;

    @Column('text', { name: 'total_rooms' })
    public totalRooms: number;

    @Column('text', { name: 'total_items' })
    public totalItems: number;

    @Column('text', { name: 'credits_spent' })
    public creditsSpent: number;

    @Column('text', { name: 'points_spent' })
    public pointsSpent: number;
}
