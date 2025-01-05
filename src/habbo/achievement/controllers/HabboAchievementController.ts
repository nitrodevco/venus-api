import { IHabboAchievementPatchRequest, IHabboAchievementPatchResponse, IHabboAchievementPostRequest, IHabboAchievementPostResponse, IRequest, PermissionNameEnum } from '#base/api';
import { HttpException, Permission } from '#base/core';
import { Body, Controller, HttpCode, HttpStatus, Patch, Post, Req } from '@nestjs/common';
import { HabboAchievementService } from '../services';

@Controller('habbo/achievement')
export class HabboAchievementController
{
    constructor(private readonly habboAchievementService: HabboAchievementService)
    { }

    @Post()
    @HttpCode(HttpStatus.OK)
    @Permission(PermissionNameEnum.HABBO_ACHIEVEMENT)
    public async post(@Req() req: IRequest, @Body() body: IHabboAchievementPostRequest): Promise<IHabboAchievementPostResponse>
    {
        try
        {
            return await this.habboAchievementService.getAll(body.options, req.session.user);
        }

        catch (err)
        {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }

    @Patch()
    @HttpCode(HttpStatus.OK)
    @Permission(PermissionNameEnum.HABBO_ACHIEVEMENT_MODIFY)
    public async patch(@Req() req: IRequest, @Body() body: IHabboAchievementPatchRequest): Promise<IHabboAchievementPatchResponse>
    {
        try
        {
            return await this.habboAchievementService.processUpdate(body.updates, req.session.user);
        }

        catch (err)
        {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }
}
