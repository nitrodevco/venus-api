import { ICraftingRecipeEntity, IRepositorySearchOptions, IRepositorySearchResult, IRepositoryUpdate } from '../../../core';

export type IHabboCraftingRecipePostRequest = { options: IRepositorySearchOptions<ICraftingRecipeEntity> };
export type IHabboCraftingRecipePostResponse = IRepositorySearchResult<ICraftingRecipeEntity>;

export type IHabboCraftingRecipePatchRequest = { updates: IRepositoryUpdate<ICraftingRecipeEntity>[] };
export type IHabboCraftingRecipePatchResponse = IRepositoryUpdate<ICraftingRecipeEntity>[];
