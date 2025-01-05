import { OffOnEnum } from '#base/api';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('navigator_publiccats')
export class NavigatorPublicCategoryEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('varchar', { name: 'name', length: 32 })
    public name: string;

    @Column('enum', { name: 'image', enum: OffOnEnum, default: OffOnEnum.OFF })
    public image: OffOnEnum;

    @Column('enum', { name: 'visible', enum: OffOnEnum, default: OffOnEnum.ON })
    public visible: OffOnEnum;

    @Column('int', { name: 'order_num', default: '0' })
    public orderNum: number;
}
