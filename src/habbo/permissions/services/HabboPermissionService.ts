import { IAnalyst, IRepositorySearchOptions, IRepositorySearchResult, IRepositoryUpdate, IUserEntity } from '#base/api';
import { DatabaseService, PermissionEntity, UserEntity } from '#base/core';
import { EmulatorRconService } from '#base/emulator';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class HabboPermissionService
{
    constructor(
        @InjectRepository(PermissionEntity)
        private readonly permissionRepository: Repository<PermissionEntity>,
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<IUserEntity>,
        private readonly emulatorRconService: EmulatorRconService,
        private readonly databaseService: DatabaseService)
    { }

    public async getAll(options: IRepositorySearchOptions<PermissionEntity> = null, analyst: IAnalyst = null): Promise<IRepositorySearchResult<PermissionEntity>>
    {
        return await this.databaseService.searchRepository(this.permissionRepository, options, analyst);
    }

    public async processUpdate(updates: IRepositoryUpdate<PermissionEntity>[], analyst: IAnalyst = null): Promise<IRepositoryUpdate<PermissionEntity>[]>
    {
        return await this.databaseService.updateRepository(this.permissionRepository, updates, analyst);
    }

    public async updateRank(userId: number, rankId: number): Promise<boolean>
    {
        if(this.emulatorRconService.isConnected)
        {
            await this.emulatorRconService.setRank(userId, rankId);

            return true;
        }

        await this.userRepository.update(userId, {
            rank: rankId
        });

        return true;
    }
}
