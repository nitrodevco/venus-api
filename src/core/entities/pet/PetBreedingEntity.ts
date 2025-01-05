import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pet_breeding')
export class PetBreedingEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'pet_id' })
    public petId: number;

    @Column('int', { name: 'offspring_id' })
    public offspringId: number;
}
