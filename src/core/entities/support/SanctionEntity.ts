import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('sanctions')
export class SanctionEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'habbo_id', default: '0' })
    public habboId: number;

    @Column('int', { name: 'sanction_level', default: '0' })
    public sanctionLevel: number;

    @Column('int', { name: 'probation_timestamp', default: '0' })
    public probationTimestamp: number;

    @Column('varchar', { name: 'reason', length: 255 })
    public reason: string;

    @Column('int', { name: 'trade_locked_until', default: '0' })
    public tradeLockedUntil: number;

    @Column('tinyint', { name: 'is_muted', width: 1, default: '0' })
    public isMuted: boolean;

    @Column('int', { name: 'mute_duration', default: '0' })
    public muteDuration: number;
}
