
import { DynamicModule, Global, Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoreLanguageController, CoreSettingsController } from './controllers';
import { AchievementEntity, AchievementTalentEntity, BanEntity, BotEntity, BotServeEntity, CalendarRewardClaimedEntity, CalendarRewardEntity, CameraWebEntity, CatalogClothingEntity, CatalogClubOfferEntity, CatalogFeaturedPageEntity, CatalogItemEntity, CatalogItemLimitedEntity, CatalogPageBcEntity, CatalogPageEntity, CatalogTargetOfferEntity, ChatlogPrivateEntity, ChatlogRoomEntity, CommandLogEntity, CraftingAltarsRecipeEntity, CraftingRecipeEntity, CraftingRecipeIngredientEntity, EmulatorErrorEntity, EmulatorSettingEntity, EmulatorTextEntity, GiftWrapperEntity, GroupItemEntity, GuildEntity, GuildForumCommentEntity, GuildForumThreadEntity, GuildForumViewEntity, GuildMemberEntity, HotelviewNewsEntity, ItemBaseEntity, ItemCrackableEntity, ItemEntity, ItemHighscoreDataEntity, ItemHopperEntity, ItemPresentEntity, ItemTeleportEntity, LogHcPaydayEntity, LogShopPurchaseEntity, MarketplaceItemEntity, MessengerFriendRequestEntity, MessengerFriendshipEntity, MessengerOfflineEntity, NameChangeLogEntity, NavigatorFilterEntity, NavigatorFlatCategoryEntity, NavigatorPublicCategoryEntity, NavigatorPublicEntity, NuxGiftEntity, OldGuildForumEntity, OldGuildsForumCommentEntity, PermissionEntity, PetActionEntity, PetBreedEntity, PetBreedingEntity, PetBreedRaceEntity, PetCommandDataEntity, PetCommandEntity, PetDrinkEntity, PetFoodEntity, PetItemEntity, PetVocalEntity, PollAnswerEntity, PollEntity, PollQuestionEntity, RecyclerPrizeEntity, RoomBanEntity, RoomEnterLogEntity, RoomEntity, RoomGameScoreEntity, RoomModelCustomEntity, RoomModelEntity, RoomMuteEntity, RoomPromotionEntity, RoomRightEntity, RoomTradeLogEntity, RoomTraxEntity, RoomTraxPlaylistEntity, RoomVoteEntity, RoomWordFilterEntity, SanctionEntity, SpecialEnableEntity, SupportCfhCategoryEntity, SupportCfhTopicEntity, SupportIssueCategoryEntity, SupportIssuePresetEntity, SupportPresetEntity, SupportTicketEntity, TraxPlaylistEntity, UserAchievementEntity, UserAchievementQueueEntity, UserBadgeEntity, UserClothingEntity, UserCurrencyEntity, UserEffectEntity, UserEntity, UserFavoriteRoomEntity, UserIgnoreEntity, UserNavigatorSettingEntity, UserPetEntity, UserRecipeEntity, UserSavedSearchEntity, UserSettingEntity, UserSubscriptionEntity, UserTargetOfferPurchaseEntity, UserWardrobeEntity, UserWindowSettingEntity, VenusColumnPermissionEntity, VenusLanguageEntity, VenusLocalizationEntity, VenusPermissionCategoryEntity, VenusPermissionEntity, VenusRoleEntity, VenusRolePermissionEntity, VenusSettingsEntity, VenusStatisticsEntity, VenusUserEntity, VenusUserRoleEntity, VenusUserSessionEntity, VoucherEntity, VoucherHistoryEntity, WiredRewardGivenEntity, WordfilterEntity, YoutubePlaylistEntity } from './entities';
import { FormExceptionFilter, HttpExceptionFilter } from './filters';
import { CoreLanguageService, CoreLogService, CoreSettingsService, DatabaseService } from './services';

@Global()
@Module({})
export class CoreModule
{
    private static entities = [
        AchievementEntity,
        AchievementTalentEntity,
        BanEntity,
        BotEntity,
        BotServeEntity,
        CalendarRewardClaimedEntity,
        CalendarRewardEntity,
        CameraWebEntity,
        CatalogClothingEntity,
        CatalogClubOfferEntity,
        CatalogFeaturedPageEntity,
        CatalogItemEntity,
        CatalogItemLimitedEntity,
        CatalogPageBcEntity,
        CatalogPageEntity,
        CatalogTargetOfferEntity,
        ChatlogPrivateEntity,
        ChatlogRoomEntity,
        CommandLogEntity,
        CraftingAltarsRecipeEntity,
        CraftingRecipeEntity,
        CraftingRecipeIngredientEntity,
        EmulatorErrorEntity,
        EmulatorSettingEntity,
        EmulatorTextEntity,
        GiftWrapperEntity,
        GroupItemEntity,
        GuildEntity,
        GuildForumCommentEntity,
        GuildForumThreadEntity,
        GuildForumViewEntity,
        GuildMemberEntity,
        HotelviewNewsEntity,
        ItemBaseEntity,
        ItemCrackableEntity,
        ItemEntity,
        ItemHighscoreDataEntity,
        ItemHopperEntity,
        ItemPresentEntity,
        ItemTeleportEntity,
        LogHcPaydayEntity,
        LogShopPurchaseEntity,
        MarketplaceItemEntity,
        MessengerFriendRequestEntity,
        MessengerFriendshipEntity,
        MessengerOfflineEntity,
        NameChangeLogEntity,
        NavigatorFilterEntity,
        NavigatorFlatCategoryEntity,
        NavigatorPublicCategoryEntity,
        NavigatorPublicEntity,
        NuxGiftEntity,
        OldGuildForumEntity,
        OldGuildsForumCommentEntity,
        PermissionEntity,
        PetActionEntity,
        PetBreedEntity,
        PetBreedingEntity,
        PetBreedRaceEntity,
        PetCommandDataEntity,
        PetCommandEntity,
        PetDrinkEntity,
        PetFoodEntity,
        PetItemEntity,
        PetVocalEntity,
        PollAnswerEntity,
        PollEntity,
        PollQuestionEntity,
        RecyclerPrizeEntity,
        RoomBanEntity,
        RoomEnterLogEntity,
        RoomEntity,
        RoomGameScoreEntity,
        RoomModelCustomEntity,
        RoomModelEntity,
        RoomMuteEntity,
        RoomPromotionEntity,
        RoomRightEntity,
        RoomTradeLogEntity,
        RoomTraxEntity,
        RoomTraxPlaylistEntity,
        RoomVoteEntity,
        RoomWordFilterEntity,
        SanctionEntity,
        SpecialEnableEntity,
        SupportCfhCategoryEntity,
        SupportCfhTopicEntity,
        SupportIssueCategoryEntity,
        SupportIssuePresetEntity,
        SupportPresetEntity,
        SupportTicketEntity,
        TraxPlaylistEntity,
        UserAchievementEntity,
        UserAchievementQueueEntity,
        UserBadgeEntity,
        UserClothingEntity,
        UserCurrencyEntity,
        UserEffectEntity,
        UserEntity,
        UserFavoriteRoomEntity,
        UserIgnoreEntity,
        UserNavigatorSettingEntity,
        UserPetEntity,
        UserRecipeEntity,
        UserSavedSearchEntity,
        UserSettingEntity,
        UserSubscriptionEntity,
        UserTargetOfferPurchaseEntity,
        UserWardrobeEntity,
        UserWindowSettingEntity,
        VoucherEntity,
        VoucherHistoryEntity,
        WiredRewardGivenEntity,
        WordfilterEntity,
        YoutubePlaylistEntity,
        VenusColumnPermissionEntity,
        VenusLanguageEntity,
        VenusLocalizationEntity,
        VenusPermissionCategoryEntity,
        VenusPermissionEntity,
        VenusRoleEntity,
        VenusRolePermissionEntity,
        VenusSettingsEntity,
        VenusStatisticsEntity,
        VenusUserEntity,
        VenusUserRoleEntity,
        VenusUserSessionEntity
    ];

    public static forRoot(options: {
        host: string,
        port: number,
        username: string,
        password: string,
        database: string,
        sync: boolean
    }): DynamicModule
    {
        return {
            module: CoreModule,
            imports: [
                TypeOrmModule.forRoot({
                    type: 'mysql',
                    host: options?.host ?? 'localhost',
                    port: options?.port ? parseInt((options.port as unknown) as string) : 3306,
                    username: options?.username ?? 'root',
                    password: options?.password ?? '',
                    database: options?.database ?? '',
                    synchronize: options.sync ?? false,
                    entities: CoreModule.entities
                }),
                TypeOrmModule.forFeature(CoreModule.entities)
            ],
            controllers: [
                CoreLanguageController,
                CoreSettingsController
            ],
            providers: [
                DatabaseService,
                CoreLanguageService,
                CoreLogService,
                CoreSettingsService,
                {
                    provide: APP_FILTER,
                    useClass: FormExceptionFilter
                },
                {
                    provide: APP_FILTER,
                    useClass: HttpExceptionFilter
                },
            ],
            exports: [
                TypeOrmModule,
                DatabaseService,
                CoreLanguageService,
                CoreLogService,
                CoreSettingsService
            ]
        };
    }
}
