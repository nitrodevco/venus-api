import { IVenusUserSessionEntity } from '#base/api';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { VenusUserEntity } from './VenusUserEntity';

@Entity('venus_user_sessions')
export class VenusUserSessionEntity implements IVenusUserSessionEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'user_id' })
    public userId: number;

    @Column('text', { name: 'token' })
    public token: number;

    @ManyToOne(type => VenusUserEntity)
    @JoinColumn({ name: 'user_id' })
    public user?: VenusUserEntity;
}
