import { DECORATOR_PERMISSION, HttpException } from '#base/core';
import { CanActivate, ExecutionContext, HttpStatus, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PanelRoleService } from '../services';

@Injectable()
export class PanelPermissionGuard implements CanActivate
{
    constructor(
        private readonly reflector: Reflector,
        private readonly panelRoleService: PanelRoleService)
    { }

    public canActivate(context: ExecutionContext): boolean
    {
        const permissions = this.reflector.get<string[]>(DECORATOR_PERMISSION, context.getHandler());

        if(!permissions?.length) return true;

        const req = context.switchToHttp().getRequest();

        if(!req.session?.user?.roleIds) throw new HttpException('invalid_session', HttpStatus.UNAUTHORIZED);

        permissions.forEach(permission =>
        {
            if(!this.panelRoleService.anyRoleHasPermisionName(req.session.user.roleIds, permission)) throw new HttpException('invalid_permission', HttpStatus.UNAUTHORIZED);
        });

        return true;
    }
}
