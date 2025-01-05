import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pet_drinks')
export class PetDrinkEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'pet_id', default: '0' })
    public petId: number;

    @Column('int', { name: 'item_id' })
    public itemId: number;
}
