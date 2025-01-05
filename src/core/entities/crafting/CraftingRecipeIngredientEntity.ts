import { ICraftingRecipeIngredientEntity } from '#base/api';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('crafting_recipes_ingredients')
export class CraftingRecipeIngredientEntity implements ICraftingRecipeIngredientEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'recipe_id' })
    public recipeId: number;

    @Column('int', { name: 'item_id' })
    public itemId: number;

    @Column('int', { name: 'amount', default: '1' })
    public amount: number;
}
