import { ICraftingAltarsRecipeEntity } from '#base/api';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('crafting_altars_recipes')
export class CraftingAltarsRecipeEntity implements ICraftingAltarsRecipeEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'altar_id' })
    public altarId: number;

    @Column('int', { name: 'recipe_id' })
    public recipeId: number;
}
