import { IEmulatorSettingsPatchRequest, IEmulatorSettingsPatchResponse, IEmulatorSettingsPostRequest, IEmulatorSettingsPostResponse, IRequest } from '#base/api';
import { FormException, HttpException } from '#base/core';
import { Body, Controller, HttpCode, HttpStatus, Patch, Post, Req } from '@nestjs/common';
import { EmulatorSettingsService } from '../services';

@Controller('emulator/settings')
export class EmulatorSettingsController
{
    constructor(private readonly emulatorSettingsService: EmulatorSettingsService)
    { }

    @Post()
    @HttpCode(HttpStatus.OK)
    public async post(@Req() req: IRequest, @Body() body: IEmulatorSettingsPostRequest): Promise<IEmulatorSettingsPostResponse>
    {
        try
        {
            return await this.emulatorSettingsService.getAll(body.options, req.session.user);
        }

        catch (err)
        {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }

    @Patch()
    @HttpCode(HttpStatus.OK)
    public async patch(@Req() req: IRequest, @Body() body: IEmulatorSettingsPatchRequest): Promise<IEmulatorSettingsPatchResponse>
    {
        try
        {
            return await this.emulatorSettingsService.processUpdate(body.updates, req.session.user);
        }

        catch (err)
        {
            switch(err.message)
            {
                case 'key_already_exists':
                    throw new FormException({
                        propertyName: 'key',
                        message: 'key.already_exists'
                    });
            }

            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }
}
