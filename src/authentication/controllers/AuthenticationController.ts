import { IAuthenticationLoginPostRequest, IAuthenticationLoginPostResponse, IAuthenticationUpdatePasswordPostRequest, IAuthenticationUpdatePasswordPostResponse, IAuthenticationUserGetRequest, IAuthenticationUserGetResponse, IRequest } from '#base/api';
import { HttpException, RequiresGuest } from '#base/core';
import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Req } from '@nestjs/common';
import { AuthenticationUserService } from '../services';

@Controller('authentication')
export class AuthenticationController
{
    constructor(private readonly authenticationUserService: AuthenticationUserService)
    { }

    @Post('login')
    @HttpCode(HttpStatus.OK)
    @RequiresGuest()
    public async postLogin(@Body() body: IAuthenticationLoginPostRequest): Promise<IAuthenticationLoginPostResponse>
    {
        try
        {
            const session = await this.authenticationUserService.login(body.name, body.password, body.otpToken);

            if(!session) throw new Error('invalid_login');

            return session;
        }

        catch (err)
        {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }

    @Post('update-password')
    @HttpCode(HttpStatus.OK)
    public async postUpdatePassword(@Body() body: IAuthenticationUpdatePasswordPostRequest): Promise<IAuthenticationUpdatePasswordPostResponse>
    {
        try
        {
            if(!await this.authenticationUserService.updatePassword(body.name, body.password, body.newPassword, body.otpToken)) throw new Error('password_not_updated');

            return;
        }

        catch (err)
        {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }

    @Get('user')
    @HttpCode(HttpStatus.OK)
    public async getUser(@Req() req: IRequest, @Param() params: IAuthenticationUserGetRequest): Promise<IAuthenticationUserGetResponse>
    {
        try
        {
            return req.session.user;
        }

        catch (err)
        {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }
}
