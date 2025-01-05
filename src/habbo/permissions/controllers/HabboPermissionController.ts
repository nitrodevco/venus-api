import { IHabboPermissionPostRequest, IHabboPermissionPostResponse, IHabboPermissionUpdateRankPostRequest, IHabboPermissionUpdateRankPostResponse, IRequest, PermissionNameEnum } from '#base/api';
import { HttpException, Permission } from '#base/core';
import { Body, Controller, HttpCode, HttpStatus, Post, Req } from '@nestjs/common';
import { HabboPermissionService } from '../services';

@Controller('habbo/permission')
export class HabboPermissionController
{
    constructor(private readonly habboPermissionService: HabboPermissionService)
    { }

    @Post()
    @HttpCode(HttpStatus.OK)
    @Permission(PermissionNameEnum.HABBO_USER)
    public async post(@Req() req: IRequest, @Body() body: IHabboPermissionPostRequest): Promise<IHabboPermissionPostResponse>
    {
        try
        {
            return await this.habboPermissionService.getAll(body.options, req.session.user);
        }

        catch (err)
        {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }

    @Post('updateRank')
    @HttpCode(HttpStatus.OK)
    @Permission(PermissionNameEnum.HABBO_USER)
    public async getPermissionNames(@Req() req: IRequest, @Body() body: IHabboPermissionUpdateRankPostRequest): Promise<IHabboPermissionUpdateRankPostResponse>
    {
        try
        {
            await this.habboPermissionService.updateRank(body.userId, body.rankId);
        }

        catch (err)
        {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }
}
