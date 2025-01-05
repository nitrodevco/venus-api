import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('special_enables')
export class SpecialEnableEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'effect_id' })
    public effectId: number;

    @Column('int', { name: 'min_rank' })
    public minRank: number;
}
