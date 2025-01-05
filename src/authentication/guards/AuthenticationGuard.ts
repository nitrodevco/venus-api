import { DECORATOR_ALLOWS_GUEST, DECORATOR_REQUIRES_GUEST, HttpException } from '#base/core';
import { CanActivate, ExecutionContext, HttpStatus, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class AuthenticationGuard implements CanActivate
{
    constructor(private readonly reflector: Reflector)
    { }

    public canActivate(context: ExecutionContext): boolean
    {
        let authenticationRequired = true;
        
        const req = context.switchToHttp().getRequest();
        
        if(this.reflector.get<boolean>(DECORATOR_REQUIRES_GUEST, context.getHandler()))
        {
            if(req.session) throw new HttpException('valid_session', HttpStatus.UNAUTHORIZED);
        }

        if(this.reflector.get<boolean>(DECORATOR_ALLOWS_GUEST, context.getHandler())) authenticationRequired = false;

        if(authenticationRequired)
        {
            if(!req.session) throw new HttpException('invalid_session', HttpStatus.UNAUTHORIZED);
        }

        return true;
    }
}
