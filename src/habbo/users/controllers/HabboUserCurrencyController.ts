import { IHabboUserCurrencyGetRequest, IHabboUserCurrencyGetResponse, IRequest, PermissionNameEnum } from '#base/api';
import { HttpException, Permission } from '#base/core';
import { Controller, Get, HttpCode, HttpStatus, Param, Req } from '@nestjs/common';
import { HabboUserCurrencyService } from '../services';

@Controller('habbo/user/currency')
export class HabboUserCurrencyController
{
    constructor(private readonly habboUserCurrencyService: HabboUserCurrencyService)
    { }

    @Get(':userId')
    @HttpCode(HttpStatus.OK)
    @Permission(PermissionNameEnum.HABBO_USER)
    public async post(@Req() req: IRequest, @Param() params: IHabboUserCurrencyGetRequest): Promise<IHabboUserCurrencyGetResponse>
    {
        try
        {
            return await this.habboUserCurrencyService.getAllCurrenciesByUserId(params.userId);
        }

        catch (err)
        {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }
}
