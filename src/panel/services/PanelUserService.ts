import { IAnalyst, ILoginDetails, IRepositorySearchOptions, IRepositorySearchResult, OffOnEnum } from '#base/api';
import { DatabaseService, VenusUserEntity } from '#base/core';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PanelUserService
{
    constructor(
        @InjectRepository(VenusUserEntity)
        private readonly systemUserRepository: Repository<VenusUserEntity>,
        private readonly databaseService: DatabaseService)
    { }

    public async getAll(options: IRepositorySearchOptions<VenusUserEntity> = null, analyst: IAnalyst = null): Promise<IRepositorySearchResult<VenusUserEntity>>
    {
        return await this.databaseService.searchRepository(this.systemUserRepository, options);
    }

    public async getUser(id: number): Promise<VenusUserEntity>
    {
        const result = await this.systemUserRepository.findOne({
            where: { id },
            relations: [ 'roles' ]
        });

        if(!result) throw new Error('invalid_user');

        return result;
    }

    public async getLoginDetails(name: string): Promise<ILoginDetails>
    {
        if(!name?.length) throw new Error('invalid_login');

        const result = await this.systemUserRepository.findOne({
            select: [ 'id', 'password', 'passwordExpired', 'otpSecret' ],
            where: { name }
        });

        if(!result) throw new Error('invalid_login');

        return {
            id: result.id,
            password: result.password,
            passwordExpired: result.passwordExpired === OffOnEnum.ON,
            otpSecret: result.otpSecret
        };
    }

    public async updatePasswordById(id: number, password: string): Promise<boolean>
    {
        if(!id || !password?.length) return false;

        const result = await this.systemUserRepository
            .update(
                { id },
                {
                    password,
                    passwordExpired: OffOnEnum.OFF
                });

        return (result.affected === 1);
    }

    public async updatePasswordByName(name: string, password: string): Promise<boolean>
    {
        if(!name?.length || !password?.length) return false;

        const result = await this.systemUserRepository
            .update(
                { name },
                {
                    password,
                    passwordExpired: OffOnEnum.OFF
                });

        return (result.affected === 1);
    }

    public async updatOtpSecretById(id: number, otpSecret: string): Promise<boolean>
    {
        if(!id || !otpSecret?.length) return false;

        const result = await this.systemUserRepository
            .update(
                { id },
                {
                    otpSecret
                });

        return (result.affected === 1);
    }

    public async updatOtpSecretByName(name: string, otpSecret: string): Promise<boolean>
    {
        if(!name?.length || !otpSecret?.length) return false;

        const result = await this.systemUserRepository
            .update(
                { name },
                {
                    otpSecret
                });

        return (result.affected === 1);
    }
}
