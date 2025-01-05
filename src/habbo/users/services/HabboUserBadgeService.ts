import { IAnalyst, IRepositorySearchOptions, IRepositorySearchResult, RepositorySearchOperator } from '#base/api';
import { DatabaseService, UserBadgeEntity } from '#base/core';
import { EmulatorRconService } from '#base/emulator';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

@Injectable()
export class HabboUserBadgeService
{
    constructor(
        @InjectRepository(UserBadgeEntity)
        private readonly userBadgeRepository: Repository<UserBadgeEntity>,
        private readonly emulatorRconService: EmulatorRconService,
        private readonly databaseService: DatabaseService)
    { }

    public async getAll(options: IRepositorySearchOptions<UserBadgeEntity> = null, analyst: IAnalyst = null): Promise<IRepositorySearchResult<UserBadgeEntity>>
    {
        return await this.databaseService.searchRepository(this.userBadgeRepository, options, analyst);
    }

    public async getOne(id: number, ...relations: string[]): Promise<UserBadgeEntity>
    {
        const options: IRepositorySearchOptions<UserBadgeEntity> = {
            where: [
                [
                    {
                        propertyName: 'id',
                        operator: RepositorySearchOperator.EQUALS,
                        value: id.toString()
                    },
                ]
            ],
            take: 1
        };

        const result = await this.databaseService.searchRepository(this.userBadgeRepository, options);

        return result.data[0];
    }

    public async giveBadge(userIds: number[], badgeCodes: string[]): Promise<boolean>
    {
        if(!userIds?.length || !badgeCodes?.length) throw new Error('invalid_parameters');

        if(this.emulatorRconService.isConnected)
        {
            for(const userId of userIds)
            {
                for(const badgeCode of badgeCodes)
                {
                    try
                    {
                        await this.emulatorRconService.giveBadge(userId, badgeCode);
                    }

                    catch (err)
                    {
                        console.log(err);
                    }
                }
            }
        }
        else
        {
            const values: { userId: number, badgeCode: string }[] = [];

            userIds.forEach(userId => badgeCodes.forEach(badgeCode => values.push({ userId, badgeCode })));

            if(!values.length) throw new Error('invalid_parameters');

            for(const value of values)
            {
                if(await this.userBadgeRepository.findOne({ where: { ...value } })) return;

                await this.userBadgeRepository.save(value);
            }
        }

        return true;
    }

    public async removeBadge(userIds: number[], badgeCodes: string[]): Promise<boolean>
    {
        if(!userIds?.length || !badgeCodes?.length) throw new Error('invalid_parameters');

        await this.userBadgeRepository.delete({ userId: In(userIds), badgeCode: In(badgeCodes) });

        return true;
    }

    public async totalUserBadges(): Promise<number>
    {
        return await this.userBadgeRepository.count();
    }
}
