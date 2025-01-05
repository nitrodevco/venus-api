import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('soundtracks')
export class SoundtrackEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('varchar', { name: 'code', length: 32 })
    public code: string;

    @Column('varchar', { name: 'name', length: 100 })
    public name: string;

    @Column('varchar', { name: 'author', length: 50 })
    public author: string;

    @Column('text', { name: 'track' })
    public track: string;

    @Column('int', { name: 'length', default: '0' })
    public length: number;
}
