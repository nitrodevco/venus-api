import { ICoreLanguageAddPostRequest, ICoreLanguageAddPostResponse, ICoreLanguageLanguageDeleteRequest, ICoreLanguageLanguageDeleteResponse, ICoreLanguageLanguageGetRequest, ICoreLanguageLanguageGetResponse, ICoreLanguageLanguagePostRequest, ICoreLanguageLanguagePostResponse, ICoreLanguageLanguagesGetRequest, ICoreLanguageLanguagesGetResponse, ILocalization } from '#base/api';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { AllowsGuest } from '../decorators';
import { HttpException } from '../exceptions';
import { CoreLanguageService } from '../services';

@Controller('core/language')
export class CoreLanguageController
{
    constructor(private readonly languageService: CoreLanguageService)
    { }

    @Get('languages')
    @HttpCode(HttpStatus.OK)
    @AllowsGuest()
    public async getLanguages(@Param() params: ICoreLanguageLanguagesGetRequest): Promise<ICoreLanguageLanguagesGetResponse>
    {
        try
        {
            return this.languageService.languages.map(language =>
            {
                return { id: language.id, code: language.code, name: language.name };
            });
        }

        catch (err)
        {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }

    @Get(':code')
    @HttpCode(HttpStatus.OK)
    @AllowsGuest()
    public async getLanguage(@Param() params: ICoreLanguageLanguageGetRequest): Promise<ICoreLanguageLanguageGetResponse>
    {
        try
        {
            const language = this.languageService.getLanguage(params.code ?? null);

            if(!language) return null;

            return {
                id: language.id,
                code: language.code,
                name: language.name,
                localizations: language.localizations.map(localization =>
                {
                    return { id: localization.id, key: localization.key, value: localization.value } as ILocalization;
                })
            };
        }

        catch (err)
        {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }

    @Post(':code')
    @HttpCode(HttpStatus.OK)
    public async postLanguage(@Body() body: ICoreLanguageLanguagePostRequest): Promise<ICoreLanguageLanguagePostResponse>
    {
        try
        {
            await this.languageService.editLocalizations(body.code ?? null, body.localizations ?? []);

            return true;
        }

        catch (err)
        {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }

    @Delete(':code/localizations')
    @HttpCode(HttpStatus.OK)
    public async deleteLocalizations(@Body() body: ICoreLanguageLanguageDeleteRequest): Promise<ICoreLanguageLanguageDeleteResponse>
    {
        try
        {
            await this.languageService.removeLocalizations(body.code ?? null, body.localizationIds ?? []);

            return true;
        }

        catch (err)
        {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }

    @Post('add')
    @HttpCode(HttpStatus.OK)
    public async postAdd(@Body() body: ICoreLanguageAddPostRequest): Promise<ICoreLanguageAddPostResponse>
    {
        try
        {
            await this.languageService.addLanguage(body.code ?? null, body.name ?? null, body.copyFrom ?? null, body.localizations ?? []);

            return true;
        }

        catch (err)
        {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }
}
