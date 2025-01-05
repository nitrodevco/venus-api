import { IChatlogPrivateEntity, IChatlogRoomEntity, IPermissionEntity, IRoomEntity, IUserAchievementEntity, IUserAchievementQueueEntity, IUserBadgeEntity, IUserClothingEntity, IUserCurrencyEntity, IUserEffectEntity, IUserEntity, IUserFavoriteRoomEntity, IUserIgnoreEntity, IUserNavigatorSettingEntity, IUserPetEntity, IUserRecipeEntity, IUserSavedSearchEntity, IUserSettingEntity, IUserSubscriptionEntity, IUserTargetOfferPurchaseEntity, IUserWardrobeEntity, IUserWindowSettingEntity, UserGenderTypeEnum, UserOnlineStatusEnum } from '#base/api';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ChatlogPrivateEntity, ChatlogRoomEntity } from '../logs';
import { PermissionEntity } from '../PermissionEntity';
import { RoomEntity } from '../room';
import { UserAchievementEntity } from './UserAchievementEntity';
import { UserAchievementQueueEntity } from './UserAchievementQueueEntity';
import { UserBadgeEntity } from './UserBadgeEntity';
import { UserClothingEntity } from './UserClothingEntity';
import { UserCurrencyEntity } from './UserCurrencyEntity';
import { UserEffectEntity } from './UserEffectEntity';
import { UserFavoriteRoomEntity } from './UserFavoriteRoomEntity';
import { UserIgnoreEntity } from './UserIgnoreEntity';
import { UserNavigatorSettingEntity } from './UserNavigatorSettingEntity';
import { UserPetEntity } from './UserPetEntity';
import { UserRecipeEntity } from './UserRecipeEntity';
import { UserSavedSearchEntity } from './UserSavedSearchEntity';
import { UserSettingEntity } from './UserSettingEntity';
import { UserSubscriptionEntity } from './UserSubscriptionEntity';
import { UserTargetOfferPurchaseEntity } from './UserTargetOfferPurchaseEntity';
import { UserWardrobeEntity } from './UserWardrobeEntity';
import { UserWindowSettingEntity } from './UserWindowSettingEntity';

@Entity('users')
export class UserEntity implements IUserEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('varchar', { name: 'username', unique: true, length: 25 })
    public username: string;

    @Column('varchar', { name: 'mail', nullable: true, length: 500 })
    public mail: string;

    @Column('int', { name: 'account_created', select: false })
    public accountCreated: number;

    @Column('int', { name: 'last_login', default: '0' })
    public lastLogin: number;

    @Column('int', { name: 'last_online', default: '0' })
    public lastOnline: number;

    @Column('varchar', { name: 'motto', length: 127 })
    public motto: string;

    @Column('varchar', { name: 'look', length: 256, default: 'hr-115-42.hd-195-19.ch-3030-82.lg-275-1408.fa-1201.ca-1804-64' })
    public look: string;

    @Column('enum', { name: 'gender', enum: UserGenderTypeEnum, default: () => UserGenderTypeEnum.MALE })
    public gender: UserGenderTypeEnum;

    @Column('int', { name: 'rank', default: '1' })
    public rank: number;

    @Column('int', { name: 'credits', default: '2500' })
    public credits: number;

    @Column('enum', { name: 'online', enum: UserOnlineStatusEnum, default: UserOnlineStatusEnum.OFFLINE })
    public online: UserOnlineStatusEnum;

    @Column('varchar', { name: 'auth_ticket', length: 256, select: false })
    public authTicket: string;

    @Column('varchar', { name: 'ip_register', length: 45 })
    public ipRegister: string;

    @Column('varchar', { name: 'ip_current', length: 45 })
    public ipCurrent: string;

    @Column('varchar', { name: 'machine_id', length: 64 })
    public machineId: string;

    @Column('int', { name: 'home_room', default: '0' })
    public homeRoom: number;

    @OneToMany(type => UserAchievementEntity, achievement => achievement.user)
    public achievements?: IUserAchievementEntity[];

    @OneToMany(type => UserAchievementQueueEntity, queue => queue.user)
    public achievementsQueue?: IUserAchievementQueueEntity[];

    @OneToMany(type => UserBadgeEntity, badge => badge.user)
    public badges?: IUserBadgeEntity[];

    @OneToMany(type => UserClothingEntity, clothing => clothing.user)
    public clothing?: IUserClothingEntity[];

    @OneToMany(type => UserCurrencyEntity, currency => currency.user)
    public currencies?: IUserCurrencyEntity[];

    @OneToMany(type => UserEffectEntity, effect => effect.user)
    public effects?: IUserEffectEntity[];

    @OneToMany(type => UserFavoriteRoomEntity, favoriteRoom => favoriteRoom.user)
    public favoriteRooms?: IUserFavoriteRoomEntity[];

    @OneToMany(type => UserIgnoreEntity, ignore => ignore.user)
    public ignoredUsers?: IUserIgnoreEntity[];

    @OneToOne(type => UserNavigatorSettingEntity, setting => setting.user)
    public navigatorSettings?: IUserNavigatorSettingEntity;

    @OneToMany(type => UserPetEntity, pet => pet.user)
    public pets?: IUserPetEntity[];

    @OneToMany(type => UserRecipeEntity, recipe => recipe.user)
    public recipes?: IUserRecipeEntity[];

    @OneToMany(type => UserSavedSearchEntity, search => search.user)
    public savedSearches?: IUserSavedSearchEntity[];

    @OneToOne(type => UserSettingEntity, setting => setting.user)
    public settings?: IUserSettingEntity;

    @OneToMany(type => UserSubscriptionEntity, subscription => subscription.user)
    public subscriptions?: IUserSubscriptionEntity[];

    @OneToMany(type => UserTargetOfferPurchaseEntity, purchase => purchase.user)
    public targetOfferPurchases?: IUserTargetOfferPurchaseEntity[];

    @OneToMany(type => UserWardrobeEntity, badge => badge.user)
    public wardrobe?: IUserWardrobeEntity[];

    @OneToOne(type => UserWindowSettingEntity, setting => setting.user)
    public windowSetting?: IUserWindowSettingEntity;

    @ManyToOne(type => PermissionEntity)
    @JoinColumn({ name: 'rank' })
    public permission?: IPermissionEntity;

    @OneToMany(type => ChatlogRoomEntity, log => log.user)
    public chatlogRoomSent?: IChatlogRoomEntity[];

    @OneToMany(type => ChatlogRoomEntity, log => log.target)
    public chatlogRoomRecieved?: IChatlogRoomEntity[];

    @OneToMany(type => ChatlogPrivateEntity, log => log.user)
    public chatlogPrivateSent?: IChatlogPrivateEntity[];

    @OneToMany(type => ChatlogPrivateEntity, log => log.target)
    public chatlogPrivateRecieved?: IChatlogPrivateEntity[];

    @OneToMany(type => RoomEntity, room => room.user)
    public rooms?: IRoomEntity[];
}
