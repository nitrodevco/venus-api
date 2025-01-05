import { ICraftingRecipeIngredientEntity, IRepositorySearchOptions, IRepositorySearchResult, IRepositoryUpdate } from '../../../core';

export type IHabboCraftingRecipeIngredientPostRequest = { options: IRepositorySearchOptions<ICraftingRecipeIngredientEntity> };
export type IHabboCraftingRecipeIngredientPostResponse = IRepositorySearchResult<ICraftingRecipeIngredientEntity>;

export type IHabboCraftingRecipeIngredientPatchRequest = { updates: IRepositoryUpdate<ICraftingRecipeIngredientEntity>[] };
export type IHabboCraftingRecipeIngredientPatchResponse = IRepositoryUpdate<ICraftingRecipeIngredientEntity>[];
