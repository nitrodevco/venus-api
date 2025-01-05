import { IRepositorySearchOptions, IRepositorySearchResult, IRequest, IUserBadgeEntity, PermissionNameEnum } from '#base/api';
import { HttpException, Permission } from '#base/core';
import { Body, Controller, Delete, HttpCode, HttpStatus, Post, Put, Req } from '@nestjs/common';
import { HabboUserBadgeService } from '../services';

@Controller('habbo/user/badge')
export class HabboUserBadgeController
{
    constructor(private readonly habboUserBadgeService: HabboUserBadgeService)
    { }

    @Post()
    @HttpCode(HttpStatus.OK)
    @Permission(PermissionNameEnum.HABBO_USER_BADGE)
    public async post(@Req() req: IRequest, @Body() body: { options: IRepositorySearchOptions<IUserBadgeEntity> }): Promise<IRepositorySearchResult<IUserBadgeEntity>>
    {
        try
        {
            return await this.habboUserBadgeService.getAll(body.options, req.session.user);
        }

        catch (err)
        {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    @Permission(PermissionNameEnum.HABBO_USER_BADGE_MODIFY)
    public async put(@Body() body: { userIds: number[], badgeCodes: string[] }): Promise<void>
    {
        try
        {
            await this.habboUserBadgeService.giveBadge(body.userIds, body.badgeCodes);
        }

        catch (err)
        {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }

    @Delete()
    @HttpCode(HttpStatus.OK)
    @Permission(PermissionNameEnum.HABBO_USER_BADGE_MODIFY)
    public async delete(@Body() body: { userIds: number[], badgeCodes: string[] }): Promise<void>
    {
        try
        {
            await this.habboUserBadgeService.removeBadge(body.userIds, body.badgeCodes);
        }

        catch (err)
        {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }
}
