import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pet_commands_data')
export class PetCommandDataEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { primary: true, name: 'command_id' })
    public commandId: number;

    @Column('varchar', { name: 'text', length: 15 })
    public text: string;

    @Column('int', { name: 'required_level' })
    public requiredLevel: number;

    @Column('int', { name: 'reward_xp', default: '5' })
    public rewardXp: number;

    @Column('int', { name: 'cost_happyness', default: '0' })
    public costHappyness: number;

    @Column('int', { name: 'cost_energy', default: '0' })
    public costEnergy: number;
}
