import { INextFunction, IRequest, IResponse } from '#base/api';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { PanelRoleService } from '../services';

@Injectable()
export class LoadRoleMiddleware implements NestMiddleware
{
    constructor(
        private readonly panelRoleService: PanelRoleService)
    { }

    public async use(req: IRequest, res: IResponse, next: INextFunction)
    {
        const session = req.session;

        if(session?.user?.roleIds)
        {
            session.user.hasPermissionId = (permissionId: number) => this.panelRoleService.anyRoleHasPermissionId(session.user.roleIds, permissionId);
        }

        next();
    }
}
