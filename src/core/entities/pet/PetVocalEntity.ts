import { PetVocalTypeEnum } from '#base/api';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pet_vocals')
export class PetVocalEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'pet_id', default: '0' })
    public petId: number;

    @Column('enum', { name: 'type', enum: PetVocalTypeEnum, default: PetVocalTypeEnum.GENERIC_HAPPY })
    public type: PetVocalTypeEnum;

    @Column('varchar', { name: 'message', length: 100 })
    public message: string;
}
