import { INextFunction, IRequest, IResponse } from '#base/api';
import { HttpException } from '#base/core';
import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { AuthenticationSessionService } from '../services';

@Injectable()
export class LoadSessionMiddleware implements NestMiddleware
{
    constructor(private readonly authenticationSessionService: AuthenticationSessionService)
    { }

    public use(req: IRequest, res: IResponse, next: INextFunction)
    {
        const token = req.headers.authorization ? req.headers.authorization.toString().replace('Bearer ', '') : null;

        if(token?.length)
        {
            const payload = this.authenticationSessionService.validateToken(token);

            if(!payload) throw new HttpException('invalid_token', HttpStatus.BAD_REQUEST);

            req.session = payload;
        }

        next();
    }
}
