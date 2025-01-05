import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('nux_gifts')
export class NuxGiftEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('enum', { name: 'type', enum: [ 'item', 'room' ], default: 'item' })
    public type: 'item' | 'room';

    @Column('varchar', { name: 'value', length: 32 })
    public value: string;

    @Column('varchar', { name: 'image', length: 256 })
    public image: string;
}
