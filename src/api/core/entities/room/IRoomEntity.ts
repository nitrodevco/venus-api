import { OffOnEnum, RoomStateEnum } from '../../enum';
import { IChatlogRoomEntity } from '../logs';
import { IUserEntity } from '../user';
import { IRoomBanEntity } from './IRoomBanEntity';
import { IRoomGameScoreEntity } from './IRoomGameScoreEntity';
import { IRoomMuteEntity } from './IRoomMuteEntity';
import { IRoomPromotionEntity } from './IRoomPromotionEntity';
import { IRoomRightEntity } from './IRoomRightEntity';
import { IRoomTraxEntity } from './IRoomTraxEntity';
import { IRoomTraxPlaylistEntity } from './IRoomTraxPlaylistEntity';
import { IRoomVoteEntity } from './IRoomVoteEntity';
import { IRoomWordFilterEntity } from './IRoomWordFilterEntity';

export interface IRoomEntity
{
    id: number;
    ownerId: number;
    ownerName: string;
    name: string;
    description: string;
    model: string;
    password: string;
    state: RoomStateEnum;
    users: number;
    usersMax: number;
    guildId: number;
    category: number;
    score: number;
    paperFloor: string;
    paperWall: string;
    paperLandscape: string;
    thicknessWall: number;
    wallHeight: number;
    thicknessFloor: number;
    moodlightData: string;
    tags: string;
    isPublic: OffOnEnum;
    isStaffPicked: OffOnEnum;
    allowOtherPets: OffOnEnum;
    allowOtherPetsEat: OffOnEnum;
    allowWalkthrough: OffOnEnum;
    allowHidewall: OffOnEnum;
    chatMode: number;
    chatWeight: number;
    chatSpeed: number;
    chatHearingDistance: number;
    chatProtection: number;
    overrideModel: OffOnEnum;
    whoCanMute: number;
    whoCanKick: number;
    whoCanBan: number;
    pollId: number;
    rollerSpeed: number;
    promoted: OffOnEnum;
    tradeMode: number;
    moveDiagonally: OffOnEnum
    jukeboxActive: OffOnEnum
    hidewired: OffOnEnum
    isForsale: '0' | '1' | '2';

    user?: IUserEntity;
    roomBans?: IRoomBanEntity[];
    roomGameScores?: IRoomGameScoreEntity[];
    roomMutes?: IRoomMuteEntity[];
    roomPromotions?: IRoomPromotionEntity[];
    roomRights?: IRoomRightEntity[];
    roomTraxs?: IRoomTraxEntity[];
    roomTraxPlaylists?: IRoomTraxPlaylistEntity[];
    roomVotes?: IRoomVoteEntity[];
    roomWordFilters?: IRoomWordFilterEntity[];
    roomChatLogs?: IChatlogRoomEntity[];
}
