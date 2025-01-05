import { OffOnEnum } from '#base/api';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('navigator_publics')
export class NavigatorPublicEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'public_cat_id' })
    public publicCatId: number;

    @Column('int', { name: 'room_id' })
    public roomId: number;

    @Column('enum', { name: 'visible', enum: OffOnEnum, default: OffOnEnum.ON })
    public visible: OffOnEnum;
}
