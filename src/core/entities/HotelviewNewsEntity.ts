import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('hotelview_news')
export class HotelviewNewsEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('varchar', { name: 'title', length: 100 })
    public title: string;

    @Column('varchar', { name: 'text', length: 500 })
    public text: string;

    @Column('varchar', { name: 'button_text', length: 50 })
    public buttonText: string;

    @Column('enum', { name: 'button_type', enum: [ 'client', 'web' ], default: 'web' })
    public buttonType: 'client' | 'web';

    @Column('varchar', { name: 'button_link', length: 200 })
    public buttonLink: string;

    @Column('varchar', { name: 'image', length: 200 })
    public image: string;
}
