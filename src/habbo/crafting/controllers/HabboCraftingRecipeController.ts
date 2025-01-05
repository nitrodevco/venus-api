import { IHabboCraftingRecipePatchRequest, IHabboCraftingRecipePatchResponse, IHabboCraftingRecipePostRequest, IHabboCraftingRecipePostResponse, IRequest, PermissionNameEnum } from '#base/api';
import { HttpException, Permission } from '#base/core';
import { Body, Controller, HttpCode, HttpStatus, Patch, Post, Req } from '@nestjs/common';
import { HabboCraftingRecipeService } from '../services';

@Controller('habbo/crafting/recipe')
export class HabboCraftingRecipeController
{
    constructor(private readonly habboCraftingRecipeService: HabboCraftingRecipeService)
    { }

    @Post()
    @HttpCode(HttpStatus.OK)
    @Permission(PermissionNameEnum.HABBO_CRAFTING_RECIPE)
    public async post(@Req() req: IRequest, @Body() body: IHabboCraftingRecipePostRequest): Promise<IHabboCraftingRecipePostResponse>
    {
        try
        {
            return await this.habboCraftingRecipeService.getAll(body.options, req.session.user);
        }

        catch (err)
        {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }

    @Patch()
    @HttpCode(HttpStatus.OK)
    @Permission(PermissionNameEnum.HABBO_CRAFTING_RECIPE_MODIFY)
    public async patch(@Req() req: IRequest, @Body() body: IHabboCraftingRecipePatchRequest): Promise<IHabboCraftingRecipePatchResponse>
    {
        try
        {
            return await this.habboCraftingRecipeService.processUpdate(body.updates, req.session.user);
        }

        catch (err)
        {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }
}
