import { IHabboAchievementTalentPatchRequest, IHabboAchievementTalentPatchResponse, IHabboAchievementTalentPostRequest, IHabboAchievementTalentPostResponse, IRequest, PermissionNameEnum } from '#base/api';
import { HttpException, Permission } from '#base/core';
import { Body, Controller, HttpCode, HttpStatus, Patch, Post, Req } from '@nestjs/common';
import { HabboAchievementTalentService } from '../services';

@Controller('habbo/achievement/talent')
export class HabboAchievementTalentController
{
    constructor(private readonly habboAchievementTalentService: HabboAchievementTalentService)
    { }

    @Post()
    @HttpCode(HttpStatus.OK)
    @Permission(PermissionNameEnum.HABBO_ACHIEVEMENT_TALENT)
    public async post(@Req() req: IRequest, @Body() body: IHabboAchievementTalentPostRequest): Promise<IHabboAchievementTalentPostResponse>
    {
        try
        {
            return await this.habboAchievementTalentService.getAll(body.options, req.session.user);
        }

        catch (err)
        {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }

    @Patch()
    @HttpCode(HttpStatus.OK)
    @Permission(PermissionNameEnum.HABBO_ACHIEVEMENT_TALENT_MODIFY)
    public async patch(@Req() req: IRequest, @Body() body: IHabboAchievementTalentPatchRequest): Promise<IHabboAchievementTalentPatchResponse>
    {
        try
        {
            return await this.habboAchievementTalentService.processUpdate(body.updates, req.session.user);
        }

        catch (err)
        {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }
}
