import { IPanelRoleGetRequest, IPanelRoleGetResponse, IRequest } from '#base/api';
import { HttpException } from '#base/core';
import { Controller, Get, HttpCode, HttpStatus, Param, Req } from '@nestjs/common';
import { PanelRoleService } from '../services';

@Controller('panel/role')
export class PanelRoleController
{
    constructor(
        private readonly panelRoleService: PanelRoleService)
    { }

    @Get('allRoles')
    @HttpCode(HttpStatus.OK)
    public async getRoles(@Param() params: IPanelRoleGetRequest): Promise<IPanelRoleGetResponse>
    {
        try
        {
            return await Promise.all(this.panelRoleService.roles.map(async role =>
            {
                return {
                    id: role.id,
                    name: role.name,
                    order: role.order,
                    color: role.color,
                    permissions: this.panelRoleService.getAllValidPublicPermissionsForRoles(role.id),
                    users: await this.panelRoleService.getUsersWithRoleId(role.id)
                };
            })) ?? [];
        }

        catch (err)
        {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }

    @Get('allPermissions')
    @HttpCode(HttpStatus.OK)
    public async getAllPermissions(@Req() req: IRequest): Promise<any[]>
    {
        try
        {
            return this.panelRoleService.permissionCategories.map(category =>
            {
                return {
                    id: category.id,
                    name: category.name,
                    permissions: category.permissions.map(permission =>
                    {
                        return {
                            id: permission.id,
                            name: permission.name
                        };
                    })
                };
            }) ?? [];
        }

        catch (err)
        {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }

    @Get('myPermissions')
    @HttpCode(HttpStatus.OK)
    public async getMyPermissions(@Req() req: IRequest): Promise<{ id: number; name: string }[]>
    {
        try
        {
            return this.panelRoleService.getAllValidPublicPermissionsForRoles(...req.session.user.roleIds);
        }

        catch (err)
        {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }
}
