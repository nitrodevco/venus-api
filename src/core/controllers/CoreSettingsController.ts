import { ICoreSettingsAllGetRequest, ICoreSettingsAllGetResponse, ICoreSettingsDeleteRequest, ICoreSettingsDeleteResponse, ICoreSettingsGetRequest, ICoreSettingsGetResponse, ICoreSettingsPostRequest, ICoreSettingsPostResponse } from '#base/api';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { AllowsGuest } from '../decorators';
import { HttpException } from '../exceptions';
import { CoreSettingsService } from '../services';

@Controller('core/settings')
export class CoreSettingsController
{
    constructor(private readonly settingsService: CoreSettingsService)
    { }

    @Get()
    @HttpCode(HttpStatus.OK)
    @AllowsGuest()
    public async get(@Param() params: ICoreSettingsGetRequest): Promise<ICoreSettingsGetResponse>
    {
        try
        {
            return this.settingsService.getPublicSettings();
        }

        catch (err)
        {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }

    @Get('all')
    @HttpCode(HttpStatus.OK)
    public async getAll(@Param() params: ICoreSettingsAllGetRequest): Promise<ICoreSettingsAllGetResponse>
    {
        try
        {
            return this.settingsService.getAllSettings();
        }

        catch (err)
        {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }

    @Post()
    @HttpCode(HttpStatus.OK)
    public async post(@Body() body: ICoreSettingsPostRequest): Promise<ICoreSettingsPostResponse>
    {
        try
        {
            await this.settingsService.updateSettings(body.updates ?? [], body.deletes ?? []);
        }

        catch (err)
        {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }

    @Delete()
    @HttpCode(HttpStatus.OK)
    public async delete(@Body() body: ICoreSettingsDeleteRequest): Promise<ICoreSettingsDeleteResponse>
    {
        try
        {
            await this.settingsService.deleteKeys(...(body.keys ?? []));
        }

        catch (err)
        {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }
}
