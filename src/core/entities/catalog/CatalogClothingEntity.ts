import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('catalog_clothing')
export class CatalogClothingEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('varchar', { name: 'name', length: 75 })
    public name: string;

    @Column('varchar', { name: 'setid', length: 75 })
    public setid: string;
}
