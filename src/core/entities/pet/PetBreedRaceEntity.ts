import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pet_breeding_races')
export class PetBreedRaceEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'pet_type' })
    public petType: number;

    @Column('int', { name: 'rarity_level' })
    public rarityLevel: number;

    @Column('int', { name: 'breed' })
    public breed: number;
}
