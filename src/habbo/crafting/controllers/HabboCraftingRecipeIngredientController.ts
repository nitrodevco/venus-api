import { IHabboCraftingRecipeIngredientPatchRequest, IHabboCraftingRecipeIngredientPatchResponse, IHabboCraftingRecipeIngredientPostRequest, IHabboCraftingRecipeIngredientPostResponse, IRequest, PermissionNameEnum } from '#base/api';
import { HttpException, Permission } from '#base/core';
import { Body, Controller, HttpCode, HttpStatus, Patch, Post, Req } from '@nestjs/common';
import { HabboCraftingRecipeIngredientService } from '../services';

@Controller('habbo/crafting/recipe-ingredient')
export class HabboCraftingRecipeIngredientController
{
    constructor(private readonly habboCraftingRecipeIngredientService: HabboCraftingRecipeIngredientService)
    { }

    @Post()
    @HttpCode(HttpStatus.OK)
    @Permission(PermissionNameEnum.HABBO_CRAFTING_RECIPE_INGREDIENT)
    public async post(@Req() req: IRequest, @Body() body: IHabboCraftingRecipeIngredientPostRequest): Promise<IHabboCraftingRecipeIngredientPostResponse>
    {
        try
        {
            return await this.habboCraftingRecipeIngredientService.getAll(body.options, req.session.user);
        }

        catch (err)
        {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }

    @Patch()
    @HttpCode(HttpStatus.OK)
    @Permission(PermissionNameEnum.HABBO_CRAFTING_RECIPE_INGREDIENT_MODIFY)
    public async patch(@Req() req: IRequest, @Body() body: IHabboCraftingRecipeIngredientPatchRequest): Promise<IHabboCraftingRecipeIngredientPatchResponse>
    {
        try
        {
            return await this.habboCraftingRecipeIngredientService.processUpdate(body.updates, req.session.user);
        }

        catch (err)
        {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }
}
