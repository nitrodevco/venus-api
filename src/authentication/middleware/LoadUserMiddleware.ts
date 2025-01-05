import { INextFunction, IRequest, IResponse, ISystemUser } from '#base/api';
import { PanelUserService } from '#base/panel';
import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoadUserMiddleware implements NestMiddleware
{
    constructor(
        private readonly systemUserService: PanelUserService)
    { }

    public async use(req: IRequest, res: IResponse, next: INextFunction)
    {
        const session = req.session;

        if(session)
        {
            const systemUser = await this.systemUserService.getUser(session.userId);

            if(systemUser)
            {
                const roleIds = systemUser.roles?.map(role => role.roleId) ?? [];

                const user: ISystemUser = {
                    id: systemUser.id,
                    name: systemUser.name,
                    roleIds,
                    hasPermissionId: null
                };

                session.user = user;
            }
        }

        next();
    }
}
