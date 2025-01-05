import { IAuthenticationOtpSetupPostRequest, IAuthenticationOtpSetupPostResponse, IResponse } from '#base/api';
import { HttpException } from '#base/core';
import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { AuthenticationOtpService } from '../services';

@Controller('authentication/otp')
export class AuthenticationOtpController
{
    constructor(private readonly authenticationOtpService: AuthenticationOtpService)
    { }

    @Post('setup')
    @HttpCode(HttpStatus.OK)
    public async postSetup(@Body() body: IAuthenticationOtpSetupPostRequest): Promise<IAuthenticationOtpSetupPostResponse>
    {
        try
        {
            if(!await this.authenticationOtpService.saveOtpSecret(body.name, body.password, body.otpSecret, body.otpToken)) throw new Error('otp_not_updated');

            return;
        }

        catch (err)
        {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }

    @Get('qrcode/:name?/:otpSecret?')
    @HttpCode(HttpStatus.OK)
    public async getQrCode(@Param() params: { name: string, otpSecret: string }, @Res() response: IResponse): Promise<IResponse>
    {
        try
        {
            const dataUrl = await this.authenticationOtpService.generateQrCodeImageString(params.name, params.otpSecret);

            if(!dataUrl?.length) throw new Error('invalid_qr_code');

            return response.contentType('image/png').send(Buffer.from(dataUrl, 'base64'));
        }

        catch (err)
        {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }

    @Get('generate-secret')
    public async getGenerateSecret(): Promise<{ otpSecret: string }>
    {
        try
        {
            return {
                otpSecret: this.authenticationOtpService.generateSecret()
            };
        }

        catch (err)
        {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }
}
