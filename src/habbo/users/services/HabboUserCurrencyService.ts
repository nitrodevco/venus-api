import { IUserCurrency } from '#base/api';
import { DatabaseService, UserCurrencyEntity, UserEntity } from '#base/core';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class HabboUserCurrencyService
{
    constructor(
        @InjectRepository(UserCurrencyEntity)
        private readonly userCurrencyRepository: Repository<UserCurrencyEntity>,
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
        private readonly databaseService: DatabaseService)
    { }

    public async getCreditsByUserId(userId: number): Promise<number>
    {
        let credits = 0;

        const result = await this.userRepository.findOne({
            where: {
                id: userId
            },
            select: {
                id: true,
                credits: true
            }
        });

        if(result) credits = result.credits;

        return credits;
    }

    public async getCurrenciesByUserId(userId: number): Promise<IUserCurrency[]>
    {
        const results = await this.userCurrencyRepository.find({
            where: {
                userId
            }
        });

        return results.map(result =>
        {
            return { type: result.type, amount: result.amount };
        });
    }

    public async getAllCurrenciesByUserId(userId: number): Promise<IUserCurrency[]>
    {
        const allCurrencies: IUserCurrency[] = [];

        const credits = await this.getCreditsByUserId(userId);

        allCurrencies.push({ type: -1, amount: credits });

        const currencies = await this.getCurrenciesByUserId(userId);

        currencies.push(...currencies);

        return allCurrencies;
    }
}
