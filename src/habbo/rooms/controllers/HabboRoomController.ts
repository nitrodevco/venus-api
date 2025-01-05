import { IHabboRoomPostRequest, IHabboRoomPostResponse, IRequest, PermissionNameEnum } from '#base/api';
import { HttpException, Permission } from '#base/core';
import { Body, Controller, HttpCode, HttpStatus, Post, Req } from '@nestjs/common';
import { HabboRoomService } from '../services';

@Controller('habbo/room')
export class HabboRoomController
{
    constructor(private readonly habboRoomService: HabboRoomService)
    { }

    @Post()
    @HttpCode(HttpStatus.OK)
    @Permission(PermissionNameEnum.HABBO_USER)
    public async post(@Req() req: IRequest, @Body() body: IHabboRoomPostRequest): Promise<IHabboRoomPostResponse>
    {
        try
        {
            return await this.habboRoomService.getAll(body.options, req.session.user);
        }

        catch (err)
        {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }
}
