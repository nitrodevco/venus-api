import { IChatlogRoomEntity, IRoomBanEntity, IRoomEntity, IRoomGameScoreEntity, IRoomMuteEntity, IRoomPromotionEntity, IRoomRightEntity, IRoomTraxEntity, IRoomTraxPlaylistEntity, IRoomVoteEntity, IRoomWordFilterEntity, IUserEntity, OffOnEnum, RoomStateEnum } from '#base/api';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ChatlogRoomEntity } from '../logs';
import { UserEntity } from '../user';
import { RoomBanEntity } from './RoomBanEntity';
import { RoomGameScoreEntity } from './RoomGameScoreEntity';
import { RoomMuteEntity } from './RoomMuteEntity';
import { RoomPromotionEntity } from './RoomPromotionEntity';
import { RoomRightEntity } from './RoomRightEntity';
import { RoomTraxEntity } from './RoomTraxEntity';
import { RoomTraxPlaylistEntity } from './RoomTraxPlaylistEntity';
import { RoomVoteEntity } from './RoomVoteEntity';
import { RoomWordFilterEntity } from './RoomWordFilterEntity';

@Entity('rooms')
export class RoomEntity implements IRoomEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'owner_id', default: '0' })
    public ownerId: number;

    @Column('varchar', { name: 'owner_name', length: 25 })
    public ownerName: string;

    @Column('varchar', { name: 'name', length: 50 })
    public name: string;

    @Column('varchar', { name: 'description', length: 512 })
    public description: string;

    @Column('varchar', { name: 'model', length: 20, default: 'model_a' })
    public model: string;

    @Column('varchar', { name: 'password', length: 20 })
    public password: string;

    @Column('enum', { name: 'state', enum: RoomStateEnum, default: RoomStateEnum.OPEN })
    public state: RoomStateEnum;

    @Column('int', { name: 'users', default: '0' })
    public users: number;

    @Column('int', { name: 'users_max', default: '25' })
    public usersMax: number;

    @Column('int', { name: 'guild_id', default: '0' })
    public guildId: number;

    @Column('int', { name: 'category', default: '1' })
    public category: number;

    @Column('int', { name: 'score', default: '0' })
    public score: number;

    @Column('varchar', { name: 'paper_floor', length: 5, default: () => '0.0' })
    public paperFloor: string;

    @Column('varchar', { name: 'paper_wall', length: 5, default: () => '0.0' })
    public paperWall: string;

    @Column('varchar', { name: 'paper_landscape', length: 5, default: () => '0.0' })
    public paperLandscape: string;

    @Column('int', { name: 'thickness_wall', default: '0' })
    public thicknessWall: number;

    @Column('int', { name: 'wall_height', default: '-1' })
    public wallHeight: number;

    @Column('int', { name: 'thickness_floor', default: '0' })
    public thicknessFloor: number;

    @Column('varchar', { name: 'moodlight_data', length: 254, default: () => '2, 1, 1,#000000, 255; 2, 3, 1,#000000, 255; 2, 3, 1,#000000, 255; ' })
    public moodlightData: string;

    @Column('varchar', { name: 'tags', length: 500 })
    public tags: string;

    @Column('enum', { name: 'is_public', enum: OffOnEnum, default: '0' })
    public isPublic: OffOnEnum;

    @Column('enum', { name: 'is_staff_picked', enum: OffOnEnum, default: OffOnEnum.OFF })
    public isStaffPicked: OffOnEnum;

    @Column('enum', { name: 'allow_other_pets', enum: OffOnEnum, default: OffOnEnum.OFF })
    public allowOtherPets: OffOnEnum;

    @Column('enum', { name: 'allow_other_pets_eat', enum: OffOnEnum, default: OffOnEnum.OFF })
    public allowOtherPetsEat: OffOnEnum;

    @Column('enum', { name: 'allow_walkthrough', enum: OffOnEnum, default: OffOnEnum.ON })
    public allowWalkthrough: OffOnEnum;

    @Column('enum', { name: 'allow_hidewall', enum: OffOnEnum, default: OffOnEnum.OFF })
    public allowHidewall: OffOnEnum;

    @Column('int', { name: 'chat_mode', default: '0' })
    public chatMode: number;

    @Column('int', { name: 'chat_weight', default: '1' })
    public chatWeight: number;

    @Column('int', { name: 'chat_speed', default: '1' })
    public chatSpeed: number;

    @Column('int', { name: 'chat_hearing_distance', default: '50' })
    public chatHearingDistance: number;

    @Column('int', { name: 'chat_protection', default: '2' })
    public chatProtection: number;

    @Column('enum', { name: 'override_model', enum: OffOnEnum, default: OffOnEnum.OFF })
    public overrideModel: OffOnEnum;

    @Column('int', { name: 'who_can_mute', default: '0' })
    public whoCanMute: number;

    @Column('int', { name: 'who_can_kick', default: '0' })
    public whoCanKick: number;

    @Column('int', { name: 'who_can_ban', default: '0' })
    public whoCanBan: number;

    @Column('int', { name: 'poll_id', default: '0' })
    public pollId: number;

    @Column('int', { name: 'roller_speed', default: '4' })
    public rollerSpeed: number;

    @Column('enum', { name: 'promoted', enum: OffOnEnum, default: OffOnEnum.OFF })
    public promoted: OffOnEnum;

    @Column('int', { name: 'trade_mode', default: '2' })
    public tradeMode: number;

    @Column('enum', { name: 'move_diagonally', enum: OffOnEnum, default: OffOnEnum.ON })
    public moveDiagonally: OffOnEnum

    @Column('enum', { name: 'jukebox_active', enum: OffOnEnum, default: OffOnEnum.OFF })
    public jukeboxActive: OffOnEnum

    @Column('enum', { name: 'hidewired', enum: OffOnEnum, default: OffOnEnum.OFF })
    public hidewired: OffOnEnum

    @Column('enum', { name: 'is_forsale', enum: [ '0', '1', '2' ], default: '0' })
    public isForsale: '0' | '1' | '2';

    @ManyToOne(type => UserEntity)
    @JoinColumn({ name: 'owner_id' })
    public user?: IUserEntity;

    @OneToMany(type => RoomBanEntity, ban => ban.room)
    public roomBans?: IRoomBanEntity[];

    @OneToMany(type => RoomGameScoreEntity, gameScore => gameScore.room)
    public roomGameScores?: IRoomGameScoreEntity[];

    @OneToMany(type => RoomMuteEntity, mute => mute.room)
    public roomMutes?: IRoomMuteEntity[];

    @OneToMany(type => RoomPromotionEntity, promotion => promotion.room)
    public roomPromotions?: IRoomPromotionEntity[];

    @OneToMany(type => RoomRightEntity, right => right.room)
    public roomRights?: IRoomRightEntity[];

    @OneToMany(type => RoomTraxEntity, trax => trax.room)
    public roomTraxs?: IRoomTraxEntity[];

    @OneToMany(type => RoomTraxPlaylistEntity, trax => trax.room)
    public roomTraxPlaylists?: IRoomTraxPlaylistEntity[];

    @OneToMany(type => RoomVoteEntity, vote => vote.room)
    public roomVotes?: IRoomVoteEntity[];

    @OneToMany(type => RoomWordFilterEntity, filter => filter.room)
    public roomWordFilters?: IRoomWordFilterEntity[];

    @OneToMany(type => ChatlogRoomEntity, log => log.room)
    public roomChatLogs?: IChatlogRoomEntity[];
}
