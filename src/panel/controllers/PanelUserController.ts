import { IRepositorySearchOptions, IRepositorySearchResult, IRequest, IVenusUserEntity } from '#base/api';
import { HttpException } from '#base/core';
import { Body, Controller, HttpCode, HttpStatus, Post, Req } from '@nestjs/common';
import { PanelUserService } from '../services';

@Controller('panel/user')
export class PanelUserController
{
    constructor(private readonly panelUserService: PanelUserService)
    { }

    @Post()
    @HttpCode(HttpStatus.OK)
    public async post(@Req() req: IRequest, @Body() body: { options: IRepositorySearchOptions<IVenusUserEntity> }): Promise<IRepositorySearchResult<IVenusUserEntity>>
    {
        try
        {
            return await this.panelUserService.getAll(body.options, req.session.user);
        }

        catch (err)
        {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }
}
