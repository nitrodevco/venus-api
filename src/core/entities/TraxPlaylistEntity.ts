import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('trax_playlist')
export class TraxPlaylistEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'trax_item_id' })
    public traxItemId: number;

    @Column('int', { name: 'item_id' })
    public itemId: number;
}
