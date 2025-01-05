import { IHabboCraftingAltarsRecipePatchRequest, IHabboCraftingAltarsRecipePatchResponse, IHabboCraftingAltarsRecipePostRequest, IHabboCraftingAltarsRecipePostResponse, IRequest, PermissionNameEnum } from '#base/api';
import { HttpException, Permission } from '#base/core';
import { Body, Controller, HttpCode, HttpStatus, Patch, Post, Req } from '@nestjs/common';
import { HabboCraftingAltarsRecipeService } from '../services';

@Controller('habbo/crafting/altars-recipe')
export class HabboCraftingAltarsRecipeController
{
    constructor(private readonly habboCraftingAltarsRecipeService: HabboCraftingAltarsRecipeService)
    { }

    @Post()
    @HttpCode(HttpStatus.OK)
    @Permission(PermissionNameEnum.HABBO_CRAFTING_ALTARS)
    public async post(@Req() req: IRequest, @Body() body: IHabboCraftingAltarsRecipePostRequest): Promise<IHabboCraftingAltarsRecipePostResponse>
    {
        try
        {
            return await this.habboCraftingAltarsRecipeService.getAll(body.options, req.session.user);
        }

        catch (err)
        {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }

    @Patch()
    @HttpCode(HttpStatus.OK)
    @Permission(PermissionNameEnum.HABBO_CRAFTING_ALTARS_MODIFY)
    public async patch(@Req() req: IRequest, @Body() body: IHabboCraftingAltarsRecipePatchRequest): Promise<IHabboCraftingAltarsRecipePatchResponse>
    {
        try
        {
            return await this.habboCraftingAltarsRecipeService.processUpdate(body.updates, req.session.user);
        }

        catch (err)
        {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }
}
