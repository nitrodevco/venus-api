import { GroupItemTypeEnum, OffOnEnum } from '#base/api';
import { Column, Entity } from 'typeorm';

@Entity('groups_items')
export class GroupItemEntity
{
    @Column('enum', { primary: true, name: 'type', enum: GroupItemTypeEnum })
    public type: GroupItemTypeEnum;

    @Column('int', { primary: true, name: 'id' })
    public id: number;

    @Column('varchar', { name: 'firstvalue', length: 255 })
    public firstvalue: string;

    @Column('varchar', { name: 'secondvalue', length: 2000 })
    public secondvalue: string;

    @Column('enum', { name: 'enabled', enum: OffOnEnum, default: OffOnEnum.ON })
    public enabled: OffOnEnum;
}
