import { IUserEntity, OffOnEnum } from '#base/api';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './user';

@Entity('permissions')
export class PermissionEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('varchar', { name: 'rank_name', length: 25 })
    public rankName: string;

    @Column('varchar', { name: 'badge', length: 12 })
    public badge: string;

    @Column('int', { name: 'level', default: '1' })
    public level: number;

    @Column('int', { name: 'room_effect', default: '0' })
    public roomEffect: number;

    @Column('enum', { name: 'log_commands', enum: OffOnEnum, default: OffOnEnum.OFF })
    public logCommands: OffOnEnum

    @Column('varchar', { name: 'prefix', length: 5 })
    public prefix: string;

    @Column('varchar', { name: 'prefix_color', length: 7 })
    public prefixColor: string;

    @Column('enum', { name: 'cmd_about', enum: OffOnEnum, default: '1' })
    public cmdAbout: OffOnEnum

    @Column('enum', { name: 'cmd_alert', enum: OffOnEnum, default: OffOnEnum.OFF })
    public cmdAlert: OffOnEnum

    @Column('enum', { name: 'cmd_allow_trading', enum: OffOnEnum, default: OffOnEnum.OFF })
    public cmdAllowTrading: OffOnEnum

    @Column('enum', { name: 'cmd_badge', enum: OffOnEnum, default: OffOnEnum.OFF })
    public cmdBadge: OffOnEnum

    @Column('enum', { name: 'cmd_ban', enum: OffOnEnum, default: OffOnEnum.OFF })
    public cmdBan: OffOnEnum

    @Column('enum', { name: 'cmd_blockalert', enum: OffOnEnum, default: OffOnEnum.OFF })
    public cmdBlockalert: OffOnEnum

    @Column('enum', { name: 'cmd_bots', enum: [ '0', '1', '2' ], default: '1' })
    public cmdBots: '0' | '1' | '2';

    @Column('enum', { name: 'cmd_bundle', enum: OffOnEnum, default: '0' })
    public cmdBundle: OffOnEnum

    @Column('enum', { name: 'cmd_calendar', enum: OffOnEnum, default: '0' })
    public cmdCalendar: OffOnEnum

    @Column('enum', {
        name: 'cmd_changename',
        enum: OffOnEnum,
        default: '0',
    })
    public cmdChangename: OffOnEnum

    @Column('enum', {
        name: 'cmd_chatcolor',
        enum: OffOnEnum,
        default: '0',
    })
    public cmdChatcolor: OffOnEnum

    @Column('enum', {
        name: 'cmd_commands',
        enum: OffOnEnum,
        default: '1',
    })
    public cmdCommands: OffOnEnum

    @Column('enum', {
        name: 'cmd_connect_camera',
        enum: OffOnEnum,
        default: '0',
    })
    public cmdConnectCamera: OffOnEnum

    @Column('enum', {
        name: 'cmd_control',
        enum: [ '0', '1', '2' ],
        default: '0',
    })
    public cmdControl: '0' | '1' | '2';

    @Column('enum', {
        name: 'cmd_coords',
        enum: [ '0', '1', '2' ],
        default: () => '2',
    })
    public cmdCoords: '0' | '1' | '2';

    @Column('enum', {
        name: 'cmd_credits',
        enum: OffOnEnum,
        default: '0',
    })
    public cmdCredits: OffOnEnum

    @Column('enum', {
        name: 'cmd_subscription',
        nullable: true,
        enum: OffOnEnum,
        default: '0',
    })
    public cmdSubscription: '0' | '1';

    @Column('enum', {
        name: 'cmd_danceall',
        enum: [ '0', '1', '2' ],
        default: '0',
    })
    public cmdDanceall: '0' | '1' | '2';

    @Column('enum', {
        name: 'cmd_diagonal',
        enum: [ '0', '1', '2' ],
        default: '1',
    })
    public cmdDiagonal: '0' | '1' | '2';

    @Column('enum', {
        name: 'cmd_disconnect',
        enum: OffOnEnum,
        default: '0',
    })
    public cmdDisconnect: OffOnEnum

    @Column('enum', {
        name: 'cmd_duckets',
        enum: OffOnEnum,
        default: '0',
    })
    public cmdDuckets: OffOnEnum

    @Column('enum', {
        name: 'cmd_ejectall',
        enum: [ '0', '1', '2' ],
        default: () => '2',
    })
    public cmdEjectall: '0' | '1' | '2';

    @Column('enum', { name: 'cmd_empty', enum: OffOnEnum, default: '1' })
    public cmdEmpty: OffOnEnum

    @Column('enum', {
        name: 'cmd_empty_bots',
        enum: OffOnEnum,
        default: '1',
    })
    public cmdEmptyBots: OffOnEnum

    @Column('enum', {
        name: 'cmd_empty_pets',
        enum: OffOnEnum,
        default: '1',
    })
    public cmdEmptyPets: OffOnEnum

    @Column('enum', {
        name: 'cmd_enable',
        enum: [ '0', '1', '2' ],
        default: '1',
    })
    public cmdEnable: '0' | '1' | '2';

    @Column('enum', { name: 'cmd_event', enum: OffOnEnum, default: OffOnEnum.OFF })
        cmdEvent: OffOnEnum

    @Column('enum', {
        name: 'cmd_faceless',
        enum: OffOnEnum,
        default: '0',
    })
        cmdFaceless: OffOnEnum

    @Column('enum', {
        name: 'cmd_fastwalk',
        enum: [ '0', '1', '2' ],
        default: '0',
    })
        cmdFastwalk: '0' | '1' | '2';

    @Column('enum', {
        name: 'cmd_filterword',
        enum: OffOnEnum,
        default: '0',
    })
        cmdFilterword: OffOnEnum

    @Column('enum', {
        name: 'cmd_freeze',
        enum: OffOnEnum,
        default: '0',
    })
        cmdFreeze: OffOnEnum

    @Column('enum', {
        name: 'cmd_freeze_bots',
        enum: [ '0', '1', '2' ],
        default: '1',
    })
        cmdFreezeBots: '0' | '1' | '2';

    @Column('enum', { name: 'cmd_gift', enum: OffOnEnum, default: OffOnEnum.OFF })
        cmdGift: OffOnEnum

    @Column('enum', {
        name: 'cmd_give_rank',
        enum: OffOnEnum,
        default: '0',
    })
        cmdGiveRank: OffOnEnum

    @Column('enum', { name: 'cmd_ha', enum: OffOnEnum, default: OffOnEnum.OFF })
        cmdHa: OffOnEnum

    @Column('enum', {
        name: 'acc_can_stalk',
        enum: OffOnEnum,
        default: '0',
    })
        accCanStalk: OffOnEnum

    @Column('enum', { name: 'cmd_hal', enum: OffOnEnum, default: OffOnEnum.OFF })
        cmdHal: OffOnEnum

    @Column('enum', {
        name: 'cmd_invisible',
        enum: [ '0', '1', '2' ],
        default: '0',
    })
        cmdInvisible: '0' | '1' | '2';

    @Column('enum', {
        name: 'cmd_ip_ban',
        enum: OffOnEnum,
        default: '0',
    })
        cmdIpBan: OffOnEnum

    @Column('enum', {
        name: 'cmd_machine_ban',
        enum: OffOnEnum,
        default: '0',
    })
        cmdMachineBan: OffOnEnum

    @Column('enum', {
        name: 'cmd_hand_item',
        enum: [ '0', '1', '2' ],
        default: '1',
    })
        cmdHandItem: '0' | '1' | '2';

    @Column('enum', {
        name: 'cmd_happyhour',
        enum: OffOnEnum,
        default: '0',
    })
        cmdHappyhour: OffOnEnum

    @Column('enum', {
        name: 'cmd_hidewired',
        enum: [ '0', '1', '2' ],
        default: () => '2',
    })
        cmdHidewired: '0' | '1' | '2';

    @Column('enum', {
        name: 'cmd_kickall',
        enum: [ '0', '1', '2' ],
        default: () => '2',
    })
        cmdKickall: '0' | '1' | '2';

    @Column('enum', {
        name: 'cmd_softkick',
        enum: OffOnEnum,
        default: '0',
    })
        cmdSoftkick: OffOnEnum

    @Column('enum', {
        name: 'cmd_massbadge',
        enum: OffOnEnum,
        default: '0',
    })
        cmdMassbadge: OffOnEnum

    @Column('enum', {
        name: 'cmd_roombadge',
        enum: OffOnEnum,
        default: '0',
    })
        cmdRoombadge: OffOnEnum

    @Column('enum', {
        name: 'cmd_masscredits',
        enum: OffOnEnum,
        default: '0',
    })
        cmdMasscredits: OffOnEnum

    @Column('enum', {
        name: 'cmd_massduckets',
        enum: OffOnEnum,
        default: '0',
    })
        cmdMassduckets: OffOnEnum

    @Column('enum', {
        name: 'cmd_massgift',
        enum: OffOnEnum,
        default: '0',
    })
        cmdMassgift: OffOnEnum

    @Column('enum', {
        name: 'cmd_masspoints',
        enum: OffOnEnum,
        default: '0',
    })
        cmdMasspoints: OffOnEnum

    @Column('enum', {
        name: 'cmd_moonwalk',
        enum: [ '0', '1', '2' ],
        default: '0',
    })
        cmdMoonwalk: '0' | '1' | '2';

    @Column('enum', { name: 'cmd_mimic', enum: OffOnEnum, default: OffOnEnum.OFF })
        cmdMimic: OffOnEnum

    @Column('enum', {
        name: 'cmd_multi',
        enum: [ '0', '1', '2' ],
        default: '0',
    })
        cmdMulti: '0' | '1' | '2';

    @Column('enum', { name: 'cmd_mute', enum: OffOnEnum, default: OffOnEnum.OFF })
        cmdMute: OffOnEnum

    @Column('enum', {
        name: 'cmd_pet_info',
        enum: [ '0', '1', '2' ],
        default: () => '2',
    })
        cmdPetInfo: '0' | '1' | '2';

    @Column('enum', {
        name: 'cmd_pickall',
        enum: OffOnEnum,
        default: '1',
    })
        cmdPickall: OffOnEnum

    @Column('enum', {
        name: 'cmd_plugins',
        enum: OffOnEnum,
        default: '1',
    })
        cmdPlugins: OffOnEnum

    @Column('enum', {
        name: 'cmd_points',
        enum: OffOnEnum,
        default: '0',
    })
        cmdPoints: OffOnEnum

    @Column('enum', {
        name: 'cmd_promote_offer',
        enum: OffOnEnum,
        default: '0',
    })
        cmdPromoteOffer: OffOnEnum

    @Column('enum', {
        name: 'cmd_pull',
        enum: [ '0', '1', '2' ],
        default: '0',
    })
        cmdPull: '0' | '1' | '2';

    @Column('enum', {
        name: 'cmd_push',
        enum: [ '0', '1', '2' ],
        default: '0',
    })
        cmdPush: '0' | '1' | '2';

    @Column('enum', {
        name: 'cmd_redeem',
        enum: OffOnEnum,
        default: '0',
    })
        cmdRedeem: OffOnEnum

    @Column('enum', {
        name: 'cmd_reload_room',
        enum: [ '0', '1', '2' ],
        default: () => '2',
    })
        cmdReloadRoom: '0' | '1' | '2';

    @Column('enum', {
        name: 'cmd_roomalert',
        enum: [ '0', '1', '2' ],
        default: '0',
    })
        cmdRoomalert: '0' | '1' | '2';

    @Column('enum', {
        name: 'cmd_roomcredits',
        enum: OffOnEnum,
        default: '0',
    })
        cmdRoomcredits: OffOnEnum

    @Column('enum', {
        name: 'cmd_roomeffect',
        enum: [ '0', '1', '2' ],
        default: '0',
    })
        cmdRoomeffect: '0' | '1' | '2';

    @Column('enum', {
        name: 'cmd_roomgift',
        enum: OffOnEnum,
        default: '0',
    })
        cmdRoomgift: OffOnEnum

    @Column('enum', {
        name: 'cmd_roomitem',
        enum: [ '0', '1', '2' ],
        default: '0',
    })
        cmdRoomitem: '0' | '1' | '2';

    @Column('enum', {
        name: 'cmd_roommute',
        enum: OffOnEnum,
        default: '0',
    })
        cmdRoommute: OffOnEnum

    @Column('enum', {
        name: 'cmd_roompixels',
        enum: OffOnEnum,
        default: '0',
    })
        cmdRoompixels: OffOnEnum

    @Column('enum', {
        name: 'cmd_roompoints',
        enum: OffOnEnum,
        default: '0',
    })
        cmdRoompoints: OffOnEnum

    @Column('enum', {
        name: 'cmd_say',
        enum: [ '0', '1', '2' ],
        default: '0',
    })
        cmdSay: '0' | '1' | '2';

    @Column('enum', {
        name: 'cmd_say_all',
        enum: [ '0', '1', '2' ],
        default: '0',
    })
        cmdSayAll: '0' | '1' | '2';

    @Column('enum', {
        name: 'cmd_setmax',
        enum: [ '0', '1', '2' ],
        default: '0',
    })
        cmdSetmax: '0' | '1' | '2';

    @Column('enum', {
        name: 'cmd_set_poll',
        enum: OffOnEnum,
        default: '0',
    })
        cmdSetPoll: OffOnEnum

    @Column('enum', {
        name: 'cmd_setpublic',
        enum: OffOnEnum,
        default: '0',
    })
        cmdSetpublic: OffOnEnum

    @Column('enum', {
        name: 'cmd_setspeed',
        enum: [ '0', '1', '2' ],
        default: '1',
    })
        cmdSetspeed: '0' | '1' | '2';

    @Column('enum', {
        name: 'cmd_shout',
        enum: [ '0', '1', '2' ],
        default: '0',
    })
        cmdShout: '0' | '1' | '2';

    @Column('enum', {
        name: 'cmd_shout_all',
        enum: [ '0', '1', '2' ],
        default: '0',
    })
        cmdShoutAll: '0' | '1' | '2';

    @Column('enum', {
        name: 'cmd_shutdown',
        enum: OffOnEnum,
        default: '0',
    })
        cmdShutdown: OffOnEnum

    @Column('enum', {
        name: 'cmd_sitdown',
        enum: [ '0', '1', '2' ],
        default: '0',
    })
        cmdSitdown: '0' | '1' | '2';

    @Column('enum', {
        name: 'cmd_staffalert',
        enum: OffOnEnum,
        default: '0',
    })
        cmdStaffalert: OffOnEnum

    @Column('enum', {
        name: 'cmd_staffonline',
        enum: OffOnEnum,
        default: '0',
    })
        cmdStaffonline: OffOnEnum

    @Column('enum', {
        name: 'cmd_summon',
        enum: OffOnEnum,
        default: '0',
    })
        cmdSummon: OffOnEnum

    @Column('enum', {
        name: 'cmd_summonrank',
        enum: OffOnEnum,
        default: '0',
    })
        cmdSummonrank: OffOnEnum

    @Column('enum', {
        name: 'cmd_super_ban',
        enum: OffOnEnum,
        default: '0',
    })
        cmdSuperBan: OffOnEnum

    @Column('enum', { name: 'cmd_stalk', enum: OffOnEnum, default: OffOnEnum.OFF })
        cmdStalk: OffOnEnum

    @Column('enum', {
        name: 'cmd_superpull',
        enum: [ '0', '1', '2' ],
        default: '0',
    })
        cmdSuperpull: '0' | '1' | '2';

    @Column('enum', {
        name: 'cmd_take_badge',
        enum: OffOnEnum,
        default: '0',
    })
        cmdTakeBadge: OffOnEnum

    @Column('enum', { name: 'cmd_talk', enum: OffOnEnum, default: OffOnEnum.OFF })
        cmdTalk: OffOnEnum

    @Column('enum', {
        name: 'cmd_teleport',
        enum: [ '0', '1', '2' ],
        default: '0',
    })
        cmdTeleport: '0' | '1' | '2';

    @Column('enum', { name: 'cmd_trash', enum: OffOnEnum, default: OffOnEnum.OFF })
        cmdTrash: OffOnEnum

    @Column('enum', {
        name: 'cmd_transform',
        enum: [ '0', '1', '2' ],
        default: '0',
    })
        cmdTransform: '0' | '1' | '2';

    @Column('enum', { name: 'cmd_unban', enum: OffOnEnum, default: OffOnEnum.OFF })
        cmdUnban: OffOnEnum

    @Column('enum', {
        name: 'cmd_unload',
        enum: [ '0', '1', '2' ],
        default: '0',
    })
        cmdUnload: '0' | '1' | '2';

    @Column('enum', {
        name: 'cmd_unmute',
        enum: OffOnEnum,
        default: '0',
    })
        cmdUnmute: OffOnEnum

    @Column('enum', {
        name: 'cmd_update_achievements',
        enum: OffOnEnum,
        default: '0',
    })
        cmdUpdateAchievements: OffOnEnum

    @Column('enum', {
        name: 'cmd_update_bots',
        enum: OffOnEnum,
        default: '0',
    })
        cmdUpdateBots: OffOnEnum

    @Column('enum', {
        name: 'cmd_update_catalogue',
        enum: OffOnEnum,
        default: '0',
    })
        cmdUpdateCatalogue: OffOnEnum

    @Column('enum', {
        name: 'cmd_update_config',
        enum: OffOnEnum,
        default: '0',
    })
        cmdUpdateConfig: OffOnEnum

    @Column('enum', {
        name: 'cmd_update_guildparts',
        enum: OffOnEnum,
        default: '0',
    })
        cmdUpdateGuildparts: OffOnEnum

    @Column('enum', {
        name: 'cmd_update_hotel_view',
        enum: OffOnEnum,
        default: '0',
    })
        cmdUpdateHotelView: OffOnEnum

    @Column('enum', {
        name: 'cmd_update_items',
        enum: OffOnEnum,
        default: '0',
    })
        cmdUpdateItems: OffOnEnum

    @Column('enum', {
        name: 'cmd_update_navigator',
        enum: OffOnEnum,
        default: '0',
    })
        cmdUpdateNavigator: OffOnEnum

    @Column('enum', {
        name: 'cmd_update_permissions',
        enum: OffOnEnum,
        default: '0',
    })
        cmdUpdatePermissions: OffOnEnum

    @Column('enum', {
        name: 'cmd_update_pet_data',
        enum: OffOnEnum,
        default: '0',
    })
        cmdUpdatePetData: OffOnEnum

    @Column('enum', {
        name: 'cmd_update_plugins',
        enum: OffOnEnum,
        default: '0',
    })
        cmdUpdatePlugins: OffOnEnum

    @Column('enum', {
        name: 'cmd_update_polls',
        enum: OffOnEnum,
        default: '0',
    })
        cmdUpdatePolls: OffOnEnum

    @Column('enum', {
        name: 'cmd_update_texts',
        enum: OffOnEnum,
        default: '0',
    })
        cmdUpdateTexts: OffOnEnum

    @Column('enum', {
        name: 'cmd_update_wordfilter',
        enum: OffOnEnum,
        default: '0',
    })
        cmdUpdateWordfilter: OffOnEnum

    @Column('enum', {
        name: 'cmd_userinfo',
        enum: OffOnEnum,
        default: '0',
    })
        cmdUserinfo: OffOnEnum

    @Column('enum', {
        name: 'cmd_word_quiz',
        enum: [ '0', '1', '2' ],
        default: '0',
    })
        cmdWordQuiz: '0' | '1' | '2';

    @Column('enum', { name: 'cmd_warp', enum: OffOnEnum, default: OffOnEnum.OFF })
        cmdWarp: OffOnEnum

    @Column('enum', {
        name: 'acc_anychatcolor',
        enum: OffOnEnum,
        default: '0',
    })
        accAnychatcolor: OffOnEnum

    @Column('enum', {
        name: 'acc_anyroomowner',
        enum: OffOnEnum,
        default: '0',
    })
        accAnyroomowner: OffOnEnum

    @Column('enum', {
        name: 'acc_empty_others',
        enum: OffOnEnum,
        default: '0',
    })
        accEmptyOthers: OffOnEnum

    @Column('enum', {
        name: 'acc_enable_others',
        enum: OffOnEnum,
        default: '0',
    })
        accEnableOthers: OffOnEnum

    @Column('enum', {
        name: 'acc_see_whispers',
        enum: OffOnEnum,
        default: '0',
    })
        accSeeWhispers: OffOnEnum

    @Column('enum', {
        name: 'acc_see_tentchat',
        enum: OffOnEnum,
        default: '0',
    })
        accSeeTentchat: OffOnEnum

    @Column('enum', {
        name: 'acc_superwired',
        enum: OffOnEnum,
        default: '0',
    })
        accSuperwired: OffOnEnum

    @Column('enum', {
        name: 'acc_supporttool',
        enum: OffOnEnum,
        default: '0',
    })
        accSupporttool: OffOnEnum

    @Column('enum', {
        name: 'acc_unkickable',
        enum: OffOnEnum,
        default: '0',
    })
        accUnkickable: OffOnEnum

    @Column('enum', {
        name: 'acc_guildgate',
        enum: OffOnEnum,
        default: '0',
    })
        accGuildgate: OffOnEnum

    @Column('enum', {
        name: 'acc_moverotate',
        enum: OffOnEnum,
        default: '0',
    })
        accMoverotate: OffOnEnum

    @Column('enum', {
        name: 'acc_placefurni',
        enum: OffOnEnum,
        default: '0',
    })
        accPlacefurni: OffOnEnum

    @Column('enum', {
        name: 'acc_unlimited_bots',
        comment: 'Overrides the bot restriction to the inventory and room.',
        enum: [ '0', '1', '2' ],
        default: '0',
    })
        accUnlimitedBots: '0' | '1' | '2';

    @Column('enum', {
        name: 'acc_unlimited_pets',
        comment: 'Overrides the pet restriction to the inventory and room.',
        enum: [ '0', '1', '2' ],
        default: '0',
    })
        accUnlimitedPets: '0' | '1' | '2';

    @Column('enum', {
        name: 'acc_hide_ip',
        enum: OffOnEnum,
        default: '0',
    })
        accHideIp: OffOnEnum

    @Column('enum', {
        name: 'acc_hide_mail',
        enum: OffOnEnum,
        default: '0',
    })
        accHideMail: OffOnEnum

    @Column('enum', {
        name: 'acc_not_mimiced',
        enum: OffOnEnum,
        default: '0',
    })
        accNotMimiced: OffOnEnum

    @Column('enum', {
        name: 'acc_chat_no_flood',
        enum: OffOnEnum,
        default: '0',
    })
        accChatNoFlood: OffOnEnum

    @Column('enum', {
        name: 'acc_staff_chat',
        enum: OffOnEnum,
        default: '0',
    })
        accStaffChat: OffOnEnum

    @Column('enum', {
        name: 'acc_staff_pick',
        enum: OffOnEnum,
        default: '0',
    })
        accStaffPick: OffOnEnum

    @Column('enum', {
        name: 'acc_enteranyroom',
        enum: OffOnEnum,
        default: '0',
    })
        accEnteranyroom: OffOnEnum

    @Column('enum', {
        name: 'acc_fullrooms',
        enum: OffOnEnum,
        default: '0',
    })
        accFullrooms: OffOnEnum

    @Column('enum', {
        name: 'acc_infinite_credits',
        enum: OffOnEnum,
        default: '0',
    })
        accInfiniteCredits: OffOnEnum

    @Column('enum', {
        name: 'acc_infinite_pixels',
        enum: OffOnEnum,
        default: '0',
    })
        accInfinitePixels: OffOnEnum

    @Column('enum', {
        name: 'acc_infinite_points',
        enum: OffOnEnum,
        default: '0',
    })
        accInfinitePoints: OffOnEnum

    @Column('enum', {
        name: 'acc_ambassador',
        enum: OffOnEnum,
        default: '0',
    })
        accAmbassador: OffOnEnum

    @Column('enum', { name: 'acc_debug', enum: OffOnEnum, default: OffOnEnum.OFF })
        accDebug: OffOnEnum

    @Column('enum', {
        name: 'acc_chat_no_limit',
        comment:
            'People with this permission node are always heard and can see all chat in the room regarding of maximum hearing distance in the room settings (In game)',
        enum: OffOnEnum,
        default: '0',
    })
        accChatNoLimit: OffOnEnum

    @Column('enum', {
        name: 'acc_chat_no_filter',
        enum: OffOnEnum,
        default: '0',
    })
        accChatNoFilter: OffOnEnum

    @Column('enum', {
        name: 'acc_nomute',
        enum: OffOnEnum,
        default: '0',
    })
        accNomute: OffOnEnum

    @Column('enum', {
        name: 'acc_guild_admin',
        enum: OffOnEnum,
        default: '0',
    })
        accGuildAdmin: OffOnEnum

    @Column('enum', {
        name: 'acc_catalog_ids',
        enum: OffOnEnum,
        default: '0',
    })
        accCatalogIds: OffOnEnum

    @Column('enum', {
        name: 'acc_modtool_ticket_q',
        enum: OffOnEnum,
        default: '0',
    })
        accModtoolTicketQ: OffOnEnum

    @Column('enum', {
        name: 'acc_modtool_user_logs',
        enum: OffOnEnum,
        default: '0',
    })
        accModtoolUserLogs: OffOnEnum

    @Column('enum', {
        name: 'acc_modtool_user_alert',
        enum: OffOnEnum,
        default: '0',
    })
        accModtoolUserAlert: OffOnEnum

    @Column('enum', {
        name: 'acc_modtool_user_kick',
        enum: OffOnEnum,
        default: '0',
    })
        accModtoolUserKick: OffOnEnum

    @Column('enum', {
        name: 'acc_modtool_user_ban',
        enum: OffOnEnum,
        default: '0',
    })
        accModtoolUserBan: OffOnEnum

    @Column('enum', {
        name: 'acc_modtool_room_info',
        enum: OffOnEnum,
        default: '0',
    })
        accModtoolRoomInfo: OffOnEnum

    @Column('enum', {
        name: 'acc_modtool_room_logs',
        enum: OffOnEnum,
        default: '0',
    })
        accModtoolRoomLogs: OffOnEnum

    @Column('enum', {
        name: 'acc_trade_anywhere',
        enum: OffOnEnum,
        default: '0',
    })
        accTradeAnywhere: OffOnEnum

    @Column('enum', {
        name: 'acc_update_notifications',
        enum: OffOnEnum,
        default: '0',
    })
        accUpdateNotifications: OffOnEnum

    @Column('enum', {
        name: 'acc_helper_use_guide_tool',
        enum: OffOnEnum,
        default: '0',
    })
        accHelperUseGuideTool: OffOnEnum

    @Column('enum', {
        name: 'acc_helper_give_guide_tours',
        enum: OffOnEnum,
        default: '0',
    })
        accHelperGiveGuideTours: OffOnEnum

    @Column('enum', {
        name: 'acc_helper_judge_chat_reviews',
        enum: OffOnEnum,
        default: '0',
    })
        accHelperJudgeChatReviews: OffOnEnum

    @Column('enum', {
        name: 'acc_floorplan_editor',
        enum: OffOnEnum,
        default: '0',
    })
        accFloorplanEditor: OffOnEnum

    @Column('enum', {
        name: 'acc_camera',
        enum: OffOnEnum,
        default: '0',
    })
        accCamera: OffOnEnum

    @Column('enum', {
        name: 'acc_ads_background',
        enum: OffOnEnum,
        default: '0',
    })
        accAdsBackground: OffOnEnum

    @Column('enum', {
        name: 'cmd_wordquiz',
        enum: [ '0', '1', '2' ],
        default: '0',
    })
        cmdWordquiz: '0' | '1' | '2';

    @Column('enum', {
        name: 'acc_room_staff_tags',
        enum: OffOnEnum,
        default: '0',
    })
        accRoomStaffTags: OffOnEnum

    @Column('enum', {
        name: 'acc_infinite_friends',
        enum: OffOnEnum,
        default: '0',
    })
        accInfiniteFriends: OffOnEnum

    @Column('enum', {
        name: 'acc_mimic_unredeemed',
        enum: OffOnEnum,
        default: '0',
    })
        accMimicUnredeemed: OffOnEnum

    @Column('enum', {
        name: 'cmd_update_youtube_playlists',
        enum: OffOnEnum,
        default: '0',
    })
        cmdUpdateYoutubePlaylists: OffOnEnum

    @Column('enum', {
        name: 'cmd_add_youtube_playlist',
        enum: OffOnEnum,
        default: '0',
    })
        cmdAddYoutubePlaylist: OffOnEnum

    @Column('int', {
        name: 'auto_credits_amount',
        nullable: true,
        default: '0',
    })
        autoCreditsAmount: number;

    @Column('int', {
        name: 'auto_pixels_amount',
        nullable: true,
        default: '0',
    })
        autoPixelsAmount: number;

    @Column('int', {
        name: 'auto_gotw_amount',
        nullable: true,
        default: '0',
    })
        autoGotwAmount: number;

    @Column('int', {
        name: 'auto_points_amount',
        nullable: true,
        default: '0',
    })
        autoPointsAmount: number;

    @Column('enum', {
        name: 'acc_mention',
        enum: [ '0', '1', '2' ],
        default: '0',
    })
        accMention: '0' | '1' | '2';

    @Column('enum', {
        name: 'cmd_setstate',
        enum: [ '0', '1', '2' ],
        default: '1',
    })
        cmdSetstate: '0' | '1' | '2';

    @Column('enum', {
        name: 'cmd_buildheight',
        enum: [ '0', '1', '2' ],
        default: '1',
    })
        cmdBuildheight: '0' | '1' | '2';

    @Column('enum', {
        name: 'cmd_setrotation',
        enum: [ '0', '1', '2' ],
        default: '1',
    })
        cmdSetrotation: '0' | '1' | '2';

    @Column('enum', {
        name: 'cmd_sellroom',
        enum: [ '0', '1', '2' ],
        default: '1',
    })
        cmdSellroom: '0' | '1' | '2';

    @Column('enum', {
        name: 'cmd_buyroom',
        enum: [ '0', '1', '2' ],
        default: '1',
    })
        cmdBuyroom: '0' | '1' | '2';

    @Column('enum', {
        name: 'cmd_pay',
        enum: [ '0', '1', '2' ],
        default: '1',
    })
        cmdPay: '0' | '1' | '2';

    @Column('enum', {
        name: 'cmd_kill',
        enum: [ '0', '1', '2' ],
        default: '1',
    })
        cmdKill: '0' | '1' | '2';

    @Column('enum', {
        name: 'cmd_hoverboard',
        enum: [ '0', '1', '2' ],
        default: '1',
    })
        cmdHoverboard: '0' | '1' | '2';

    @Column('enum', {
        name: 'cmd_kiss',
        enum: [ '0', '1', '2' ],
        default: '1',
    })
        cmdKiss: '0' | '1' | '2';

    @Column('enum', {
        name: 'cmd_hug',
        enum: [ '0', '1', '2' ],
        default: '1',
    })
        cmdHug: '0' | '1' | '2';

    @Column('enum', {
        name: 'cmd_welcome',
        enum: [ '0', '1', '2' ],
        default: '0',
    })
        cmdWelcome: '0' | '1' | '2';

    @Column('enum', {
        name: 'cmd_disable_effects',
        enum: [ '0', '1', '2' ],
        default: () => '2',
    })
        cmdDisableEffects: '0' | '1' | '2';

    @Column('enum', {
        name: 'cmd_brb',
        enum: [ '0', '1', '2' ],
        default: '1',
    })
        cmdBrb: '0' | '1' | '2';

    @Column('enum', {
        name: 'cmd_nuke',
        enum: [ '0', '1', '2' ],
        default: '1',
    })
        cmdNuke: '0' | '1' | '2';

    @Column('enum', {
        name: 'cmd_slime',
        enum: [ '0', '1', '2' ],
        default: '1',
    })
        cmdSlime: '0' | '1' | '2';

    @Column('enum', {
        name: 'cmd_explain',
        enum: [ '0', '1', '2' ],
        default: '1',
    })
        cmdExplain: '0' | '1' | '2';

    @Column('enum', {
        name: 'cmd_closedice',
        enum: [ '0', '1', '2' ],
        default: '1',
    })
        cmdClosedice: '0' | '1' | '2';

    @Column('enum', {
        name: 'acc_closedice_room',
        enum: [ '0', '1', '2' ],
        default: () => '2',
    })
        accClosediceRoom: '0' | '1' | '2';

    @Column('enum', {
        name: 'cmd_set',
        enum: [ '0', '1', '2' ],
        default: '1',
    })
    public cmdSet: '0' | '1' | '2';

    @Column('enum', {
        name: 'cmd_furnidata',
        enum: OffOnEnum,
        default: '0',
    })
    public cmdFurnidata: OffOnEnum

    @Column('enum', {
        name: 'kiss_cmd',
        enum: [ '0', '1', '2' ],
        default: '0',
    })
    public kissCmd: '0' | '1' | '2';

    @OneToMany(type => UserEntity, user => user.permission)
    public users?: IUserEntity[];
}
