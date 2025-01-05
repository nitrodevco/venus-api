import { IUserEntity, IUserTargetOfferPurchaseEntity } from '#base/api';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './UserEntity';

@Entity('users_target_offer_purchases')
export class UserTargetOfferPurchaseEntity implements IUserTargetOfferPurchaseEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'user_id' })
    public userId: number;

    @Column('int', { name: 'offer_id' })
    public offerId: number;

    @Column('int', { name: 'state', default: '0' })
    public state: number;

    @Column('int', { name: 'amount', default: '0' })
    public amount: number;

    @Column('int', { name: 'last_purchase', default: '0' })
    public lastPurchase: number;

    @ManyToOne(type => UserEntity)
    @JoinColumn({ name: 'user_id' })
    public user?: IUserEntity;
}
