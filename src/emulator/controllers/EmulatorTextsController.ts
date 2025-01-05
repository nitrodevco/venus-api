import { IEmulatorTextsPatchRequest, IEmulatorTextsPatchResponse, IEmulatorTextsPostRequest, IEmulatorTextsPostResponse, IRequest } from '#base/api';
import { FormException, HttpException } from '#base/core';
import { Body, Controller, HttpCode, HttpStatus, Patch, Post, Req } from '@nestjs/common';
import { EmulatorTextsService } from '../services';

@Controller('emulator/texts')
export class EmulatorTextsController
{
    constructor(private readonly emulatorTextsService: EmulatorTextsService)
    { }

    @Post()
    @HttpCode(HttpStatus.OK)
    public async post(@Req() req: IRequest, @Body() body: IEmulatorTextsPostRequest): Promise<IEmulatorTextsPostResponse>
    {
        try
        {
            return await this.emulatorTextsService.getAll(body.options, req.session.user);
        }

        catch (err)
        {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }

    @Patch()
    @HttpCode(HttpStatus.OK)
    public async patch(@Req() req: IRequest, @Body() body: IEmulatorTextsPatchRequest): Promise<IEmulatorTextsPatchResponse>
    {
        try
        {
            return await this.emulatorTextsService.processUpdate(body.updates, req.session.user);
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
