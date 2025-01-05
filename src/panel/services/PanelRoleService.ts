import { OffOnEnum, PermissionNameEnum } from '#base/api';
import { CoreLogService, VenusPermissionCategoryEntity, VenusPermissionEntity, VenusRoleEntity, VenusRolePermissionEntity, VenusUserRoleEntity } from '#base/core';
import { Injectable, OnApplicationBootstrap, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PanelRoleService implements OnModuleInit, OnApplicationBootstrap
{
    private _roles: VenusRoleEntity[] = [];
    private _permissionCategories: VenusPermissionCategoryEntity[] = [];
    private _permissions: VenusPermissionEntity[] = [];

    constructor(
        @InjectRepository(VenusPermissionCategoryEntity)
        private readonly venusPermissionCategoryRepository: Repository<VenusPermissionCategoryEntity>,
        @InjectRepository(VenusPermissionEntity)
        private readonly venusPermissionRepository: Repository<VenusPermissionEntity>,
        @InjectRepository(VenusRoleEntity)
        private readonly venusRoleRepository: Repository<VenusRoleEntity>,
        @InjectRepository(VenusRolePermissionEntity)
        private readonly venusRolePermissionRepository: Repository<VenusRolePermissionEntity>,
        @InjectRepository(VenusUserRoleEntity)
        private readonly venusUserRoleRepository: Repository<VenusUserRoleEntity>,
        private readonly logService: CoreLogService)
    { }

    public async onModuleInit(): Promise<void>
    {
        await this.loadSystemPermissionCategories();
        await this.loadSystemPermissions();
        await this.loadSystemRoles();
    }

    public async onApplicationBootstrap(): Promise<void>
    {
        await this.loadSystemRolePermissions();
    }

    public getPermission(id: number): VenusPermissionEntity
    {
        if(!id || (id <= 0)) return null;

        return this._permissions.find(permission => (permission.id === id));
    }

    public getPermissionId(name: string): number
    {
        if(!name?.length) return -1;

        const permission = this._permissions.find(permission => (permission.name === name));

        if(!permission) return -1;

        return permission.id;
    }

    public getRoleById(roleId: number): VenusRoleEntity
    {
        if(!roleId || (roleId <= 0)) return null;

        return this._roles.find(role => (role.id === roleId));
    }

    public roleHasPermissionId(roleId: number, permissionId: number): boolean
    {
        if(this.roleIsAdministrator(roleId)) return true;

        const role = this.getRoleById(roleId);

        if(!role?.permissions?.length) return false;

        const permission = role.permissions.find(permission => (permission.permissionId === permissionId));

        if(!permission || (permission.enabled === OffOnEnum.OFF)) return false;

        return true;
    }

    public anyRoleIsAdministrator(...roleIds: number[]): boolean
    {
        for(const roleId of roleIds)
        {
            if(this.roleIsAdministrator(roleId)) return true;
        }

        return false;
    }

    public roleIsAdministrator(roleId: number): boolean
    {
        const role = this.getRoleById(roleId);

        if(!role?.permissions?.length) return false;

        const permission = role.permissions.find(permission => (permission.id === this.getPermissionId(PermissionNameEnum.ADMINISTRATOR)));

        if(!permission || (permission.enabled === OffOnEnum.OFF)) return false;

        return true;
    }

    public anyRoleHasPermissionId(roleIds: number[], permissionId: number): boolean
    {
        for(const roleId of roleIds)
        {
            if(this.roleHasPermissionId(roleId, permissionId)) return true;
        }

        return false;
    }

    public anyRoleHasPermisionName(roleIds: number[], permissionName: string): boolean
    {
        const permissionId = this.getPermissionId(permissionName);

        if(permissionId <= 0) return false;

        return this.anyRoleHasPermissionId(roleIds, permissionId);
    }

    public getAllValidPermissionsForRoles(...roleIds: number[]): VenusPermissionEntity[]
    {
        const validPermissions: VenusPermissionEntity[] = [];

        if(roleIds?.length)
        {
            roleIds.forEach(roleId =>
            {
                const role = this.getRoleById(roleId);

                if(!role) return;

                if(role.permissions?.length)
                {
                    role.permissions.forEach(permission =>
                    {
                        if(permission.enabled)
                        {
                            if(!validPermissions.includes(permission.permission)) validPermissions.push(permission.permission);
                        }
                    });
                }
            });
        }

        return validPermissions;
    }

    public getAllValidPermissionNamesForRoles(...roleIds: number[]): string[]
    {
        return this.getAllValidPermissionsForRoles(...roleIds).map(permission => permission.name) ?? [];
    }

    public getAllValidPublicPermissionsForRoles(...roleIds: number[]): { id: number, name: string }[]
    {
        return this.getAllValidPermissionsForRoles(...roleIds).map(permission =>
        {
            return { id: permission.id, name: permission.name };
        });
    }

    public async getUsersWithRoleId(roleId: number): Promise<{ userId: number, name: string }[]>
    {
        const role = this.getRoleById(roleId);

        if(!role) return null;

        const userRoles = await this.venusUserRoleRepository.find({
            select: { user: { id: true, name: true } },
            where: { roleId },
            relations: [ 'user' ]
        });

        return userRoles.map(userRole =>
        {
            return {
                userId: userRole.user.id,
                name: userRole.user.name
            };
        }) ?? [];
    }

    private async loadSystemPermissionCategories(): Promise<void>
    {
        const categories = await this.venusPermissionCategoryRepository.find();

        if(categories?.length) this._permissionCategories = categories;

        this.logService.log(`Loaded ${ this._permissionCategories.length } permission categories`);
    }

    private async loadSystemPermissions(): Promise<void>
    {
        const permissions = await this.venusPermissionRepository.find();

        if(permissions?.length)
        {
            permissions.forEach(permission =>
            {
                const category = this._permissionCategories.find(category => (category.id === permission.categoryId));

                if(!category) return;

                if(!category.permissions) category.permissions = [];

                category.permissions.push(permission);

                permission.category = category;

                this._permissions.push(permission);
            });
        }

        this.logService.log(`Loaded ${ this._permissions.length } permissions`);
    }

    private async loadSystemRoles(): Promise<void>
    {
        const roles = await this.venusRoleRepository.find();

        if(roles?.length) this._roles = roles;

        this.logService.log(`Loaded ${ this._roles.length } roles`);
    }

    private async loadSystemRolePermissions(): Promise<void>
    {
        if(!this._roles?.length) return;

        const permissions = await this.venusRolePermissionRepository.find();

        if(!permissions?.length) return;

        permissions.forEach(permission =>
        {
            const role = this._roles.find(role => (role.id === permission.roleId));

            if(!role) return;

            permission.role = role;

            const permissionData = this.getPermission(permission.permissionId);

            if(!permissionData) return;

            permission.permission = permissionData;

            if(!role.permissions) role.permissions = [];

            role.permissions.push(permission);
        });
    }

    public get permissionCategories(): VenusPermissionCategoryEntity[]
    {
        return this._permissionCategories;
    }

    public get permissions(): VenusPermissionEntity[]
    {
        return this._permissions;
    }

    public get roles(): VenusRoleEntity[]
    {
        return this._roles;
    }
}
