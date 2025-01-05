import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pet_commands')
export class PetCommandEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'pet_id' })
    public petId: number;

    @Column('int', { name: 'command_id' })
    public commandId: number;
}
