import { ICraftingAltarsRecipeEntity, IRepositorySearchOptions, IRepositorySearchResult, IRepositoryUpdate } from '../../../core';

export type IHabboCraftingAltarsRecipePostRequest = { options: IRepositorySearchOptions<ICraftingAltarsRecipeEntity> };
export type IHabboCraftingAltarsRecipePostResponse = IRepositorySearchResult<ICraftingAltarsRecipeEntity>;

export type IHabboCraftingAltarsRecipePatchRequest = { updates: IRepositoryUpdate<ICraftingAltarsRecipeEntity>[] };
export type IHabboCraftingAltarsRecipePatchResponse = IRepositoryUpdate<ICraftingAltarsRecipeEntity>[];
