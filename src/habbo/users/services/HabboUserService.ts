import { IAnalyst, IRepositorySearchOptions, IRepositorySearchResult, UserOnlineStatusEnum } from '#base/api';
import { DatabaseService, UserEntity } from '#base/core';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class HabboUserService
{
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
        private readonly databaseService: DatabaseService)
    { }

    public async getAll(options: IRepositorySearchOptions<UserEntity> = null, analyst: IAnalyst = null): Promise<IRepositorySearchResult<UserEntity>>
    {
        return await this.databaseService.searchRepository(this.userRepository, options, analyst);
    }

    public async isUserIdOnline(userId: number): Promise<boolean>
    {
        if(userId <= 0) return false;

        const result = await this.userRepository.findOne({
            select: [ 'id', 'online' ],
            where: {
                id: userId,
                online: UserOnlineStatusEnum.OFFLINE
            }
        });

        if(!result) return false;

        return true;
    }

    public async totalUsers(): Promise<number>
    {
        return await this.userRepository.count();
    }
}
