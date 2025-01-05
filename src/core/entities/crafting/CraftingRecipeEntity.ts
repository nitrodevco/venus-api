import { ICraftingRecipeEntity, OffOnEnum } from '#base/api';
import { Column, Entity } from 'typeorm';

@Entity('crafting_recipes')
export class CraftingRecipeEntity implements ICraftingRecipeEntity
{
    @Column('int', { primary: true, name: 'id' })
    public id: number;

    @Column('varchar', { name: 'product_name', unique: true, length: 64 })
    public productName: string;

    @Column('int', { name: 'reward' })
    public reward: number;

    @Column('enum', { name: 'enabled', enum: OffOnEnum, default: OffOnEnum.ON })
    public enabled: OffOnEnum;

    @Column('varchar', { name: 'achievement', length: 255 })
    public achievement: string;

    @Column('enum', { name: 'secret', enum: OffOnEnum, default: OffOnEnum.OFF })
    public secret: OffOnEnum;

    @Column('enum', { name: 'limited', enum: OffOnEnum, default: OffOnEnum.OFF })
    public limited: OffOnEnum;

    @Column('int', { name: 'remaining', default: '0' })
    public remaining: number;
}
