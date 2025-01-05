import { OffOnEnum } from '#base/api';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pet_breeds')
export class PetBreedEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'race' })
    public race: number;

    @Column('int', { name: 'color_one' })
    public colorOne: number;

    @Column('int', { name: 'color_two' })
    public colorTwo: number;

    @Column('enum', { name: 'has_color_one', enum: OffOnEnum, default: OffOnEnum.OFF })
    public hasColorOne: OffOnEnum;

    @Column('enum', { name: 'has_color_two', enum: OffOnEnum, default: OffOnEnum.OFF })
    public hasColorTwo: OffOnEnum;
}
