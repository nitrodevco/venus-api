import { IIHabboLogChatlogRoomPostRequest, IIHabboLogChatlogRoomPostResponse, IRequest } from '#base/api';
import { HttpException } from '#base/core';
import { Body, Controller, HttpCode, HttpStatus, Post, Req } from '@nestjs/common';
import { HabboChatlogRoomService } from '../services';

@Controller('habbo/logs/chatlog/room')
export class HabboChatlogRoomController
{
    constructor(private readonly chatlogRoomService: HabboChatlogRoomService)
    { }

    @Post()
    @HttpCode(HttpStatus.OK)
    public async post(@Req() req: IRequest, @Body() body: IIHabboLogChatlogRoomPostRequest): Promise<IIHabboLogChatlogRoomPostResponse>
    {
        try
        {
            return await this.chatlogRoomService.getAll(body.options, req.session.user);
        }

        catch (err)
        {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }
}
