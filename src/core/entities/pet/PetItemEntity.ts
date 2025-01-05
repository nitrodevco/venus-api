import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pet_items')
export class PetItemEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'pet_id' })
    public petId: number;

    @Column('int', { name: 'item_id' })
    public itemId: number;
}
