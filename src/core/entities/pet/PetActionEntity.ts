import { OffOnEnum } from '#base/api';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pet_actions')
export class PetActionEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'pet_type' })
    public petType: number;

    @Column('varchar', { name: 'pet_name', length: 32 })
    public petName: string;

    @Column('int', { name: 'offspring_type', default: '-1' })
    public offspringType: number;

    @Column('varchar', { name: 'happy_actions', length: 100 })
    public happyActions: string;

    @Column('varchar', { name: 'tired_actions', length: 100 })
    public tiredActions: string;

    @Column('varchar', { name: 'random_actions', length: 100 })
    public randomActions: string;

    @Column('enum', { name: 'can_swim', nullable: true, enum: OffOnEnum, default: OffOnEnum.OFF })
    public canSwim: OffOnEnum;
}
