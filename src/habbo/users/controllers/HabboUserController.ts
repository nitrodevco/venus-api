import { IHabboUserPostRequest, IHabboUserPostResponse, IRequest, PermissionNameEnum } from '#base/api';
import { HttpException, Permission } from '#base/core';
import { Body, Controller, HttpCode, HttpStatus, Post, Req } from '@nestjs/common';
import { HabboUserService } from '../services';

@Controller('habbo/user')
export class HabboUserController
{
    constructor(private readonly habboUserService: HabboUserService)
    { }

    @Post()
    @HttpCode(HttpStatus.OK)
    @Permission(PermissionNameEnum.HABBO_USER)
    public async post(@Req() req: IRequest, @Body() body: IHabboUserPostRequest): Promise<IHabboUserPostResponse>
    {
        try
        {
            return await this.habboUserService.getAll(body.options, req.session.user);
        }

        catch (err)
        {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }
}
