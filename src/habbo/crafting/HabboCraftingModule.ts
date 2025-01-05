import { Module } from '@nestjs/common';
import { HabboCraftingAltarsRecipeController, HabboCraftingRecipeController, HabboCraftingRecipeIngredientController } from './controllers';
import { HabboCraftingAltarsRecipeService, HabboCraftingRecipeIngredientService, HabboCraftingRecipeService } from './services';

@Module({
    imports: [
    ],
    controllers: [
        HabboCraftingAltarsRecipeController,
        HabboCraftingRecipeController,
        HabboCraftingRecipeIngredientController
    ],
    providers: [
        HabboCraftingAltarsRecipeService,
        HabboCraftingRecipeIngredientService,
        HabboCraftingRecipeService
    ],
    exports: [
        HabboCraftingAltarsRecipeService,
        HabboCraftingRecipeIngredientService,
        HabboCraftingRecipeService
    ]
})
export class HabboCraftingModule
{ }
