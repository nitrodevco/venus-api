import { IUserEntity, IUserSettingEntity, OffOnEnum } from '#base/api';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './UserEntity';

@Entity('users_settings')
export class UserSettingEntity implements IUserSettingEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'user_id', unique: true, default: '0' })
    public userId: number;

    @Column('int', { name: 'credits', default: '0' })
    public credits: number;

    @Column('int', { name: 'achievement_score', default: '0' })
    public achievementScore: number;

    @Column('int', { name: 'daily_respect_points', default: '3' })
    public dailyRespectPoints: number;

    @Column('int', { name: 'daily_pet_respect_points', default: '3' })
    public dailyPetRespectPoints: number;

    @Column('int', { name: 'respects_given', default: '0' })
    public respectsGiven: number;

    @Column('int', { name: 'respects_received', default: '0' })
    public respectsReceived: number;

    @Column('int', { name: 'guild_id', default: '0' })
    public guildId: number;

    @Column('enum', { name: 'can_change_name', enum: OffOnEnum, default: OffOnEnum.OFF })
    public canChangeName: OffOnEnum;

    @Column('enum', { name: 'can_trade', enum: OffOnEnum, default: OffOnEnum.ON })
    public canTrade: OffOnEnum;

    @Column('enum', { name: 'is_citizen', enum: OffOnEnum, default: OffOnEnum.OFF })
    public isCitizen: OffOnEnum;

    @Column('int', { name: 'citizen_level', default: '0' })
    public citizenLevel: number;

    @Column('int', { name: 'helper_level', default: '0' })
    public helperLevel: number;

    @Column('int', { name: 'tradelock_amount', default: '0' })
    public tradelockAmount: number;

    @Column('int', { name: 'cfh_send', default: '0' })
    public cfhSend: number;

    @Column('int', { name: 'cfh_abusive', default: '0' })
    public cfhAbusive: number;

    @Column('int', { name: 'cfh_warnings', default: '0' })
    public cfhWarnings: number;

    @Column('int', { name: 'cfh_bans', default: '0' })
    public cfhBans: number;

    @Column('enum', { name: 'block_following', enum: OffOnEnum, default: OffOnEnum.OFF })
    public blockFollowing: OffOnEnum;

    @Column('enum', { name: 'block_friendrequests', enum: OffOnEnum, default: OffOnEnum.OFF })
    public blockFriendrequests: OffOnEnum;

    @Column('enum', { name: 'block_roominvites', enum: OffOnEnum, default: OffOnEnum.OFF })
    public blockRoominvites: OffOnEnum;

    @Column('int', { name: 'volume_system', default: '100' })
    public volumeSystem: number;

    @Column('int', { name: 'volume_furni', default: '100' })
    public volumeFurni: number;

    @Column('int', { name: 'volume_trax', default: '100' })
    public volumeTrax: number;

    @Column('enum', { name: 'old_chat', enum: OffOnEnum, default: '0' })
    public oldChat: OffOnEnum;

    @Column('enum', { name: 'block_camera_follow', enum: OffOnEnum, default: OffOnEnum.OFF })
    public blockCameraFollow: OffOnEnum;

    @Column('int', { name: 'chat_color', default: '0' })
    public chatColor: number;

    @Column('int', { name: 'home_room', default: '0' })
    public homeRoom: number;

    @Column('int', { name: 'online_time', default: '0' })
    public onlineTime: number;

    @Column('varchar', { name: 'tags', length: 255, default: '' })
    public tags: string;

    @Column('int', { name: 'club_expire_timestamp', default: '0' })
    public clubExpireTimestamp: number;

    @Column('int', { name: 'login_streak', default: '0' })
    public loginStreak: number;

    @Column('int', { name: 'rent_space_id', default: '0' })
    public rentSpaceId: number;

    @Column('int', { name: 'rent_space_endtime', default: '0' })
    public rentSpaceEndtime: number;

    @Column('int', { name: 'hof_points', default: '0' })
    public hofPoints: number;

    @Column('enum', { name: 'block_alerts', enum: OffOnEnum, default: OffOnEnum.OFF })
    public blockAlerts: OffOnEnum;

    @Column('int', { name: 'talent_track_citizenship_level', default: '-1' })
    public talentTrackCitizenshipLevel: number;

    @Column('int', { name: 'talent_track_helpers_level', default: '-1' })
    public talentTrackHelpersLevel: number;

    @Column('enum', { name: 'ignore_bots', enum: OffOnEnum, default: OffOnEnum.OFF })
    public ignoreBots: OffOnEnum;

    @Column('enum', { name: 'ignore_pets', enum: OffOnEnum, default: '0' })
    public ignorePets: OffOnEnum;

    @Column('enum', { name: 'nux', enum: OffOnEnum, default: OffOnEnum.OFF })
    public nux: OffOnEnum;

    @Column('int', { name: 'mute_end_timestamp', default: '0' })
    public muteEndTimestamp: number;

    @Column('enum', { name: 'allow_name_change', enum: OffOnEnum, default: OffOnEnum.OFF })
    public allowNameChange: OffOnEnum;

    @Column('enum', { name: 'perk_trade', enum: OffOnEnum, default: OffOnEnum.OFF })
    public perkTrade: OffOnEnum;

    @Column('int', { name: 'forums_post_count', nullable: true, default: '0' })
    public forumsPostCount: number;

    @Column('int', { name: 'ui_flags', default: '1' })
    public uiFlags: number;

    @Column('tinyint', { name: 'has_gotten_default_saved_searches', width: 1, default: '0' })
    public hasGottenDefaultSavedSearches: boolean;

    @Column('int', { name: 'hc_gifts_claimed', nullable: true, default: '0' })
    public hcGiftsClaimed: number;

    @Column('int', { name: 'last_hc_payday', nullable: true, default: '0' })
    public lastHcPayday: number;

    @Column('int', { name: 'max_rooms', nullable: true, default: '50' })
    public maxRooms: number;

    @Column('int', { name: 'max_friends', nullable: true, default: '300' })
    public maxFriends: number;

    @OneToOne(type => UserEntity)
    @JoinColumn({ name: 'user_id' })
    public user?: IUserEntity;
}
