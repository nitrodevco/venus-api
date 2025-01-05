import { IHabboUserAchievementPatchRequest, IHabboUserAchievementPatchResponse, IHabboUserAchievementPostRequest, IHabboUserAchievementPostResponse, IRequest, PermissionNameEnum } from '#base/api';
import { HttpException, Permission } from '#base/core';
import { Body, Controller, HttpCode, HttpStatus, Patch, Post, Req } from '@nestjs/common';
import { HabboUserAchievementService } from '../services';

@Controller('habbo/user/achievement')
export class HabboUserAchievementController
{
    constructor(private readonly habboUserAchievementService: HabboUserAchievementService)
    { }

    @Post()
    @HttpCode(HttpStatus.OK)
    @Permission(PermissionNameEnum.HABBO_USER_ACHIEVEMENT)
    public async post(@Req() req: IRequest, @Body() body: IHabboUserAchievementPostRequest): Promise<IHabboUserAchievementPostResponse>
    {
        try
        {
            return await this.habboUserAchievementService.getAll(body.options, req.session.user);
        }

        catch (err)
        {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }

    @Patch()
    @HttpCode(HttpStatus.OK)
    @Permission(PermissionNameEnum.HABBO_USER_ACHIEVEMENT_MODIFY)
    public async patch(@Req() req: IRequest, @Body() body: IHabboUserAchievementPatchRequest): Promise<IHabboUserAchievementPatchResponse>
    {
        try
        {
            return await this.habboUserAchievementService.processUpdate(body.updates, req.session.user);
        }

        catch (err)
        {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }
}
