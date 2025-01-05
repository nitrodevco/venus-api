import { OffOnEnum } from '#base/api';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('navigator_flatcats')
export class NavigatorFlatCategoryEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'min_rank', default: '0' })
    public minRank: number;

    @Column('varchar', { name: 'caption_save', length: 32 })
    public captionSave: string;

    @Column('varchar', { name: 'caption', length: 100 })
    public caption: string;

    @Column('enum', { name: 'can_trade', enum: OffOnEnum, default: OffOnEnum.ON })
    public canTrade: OffOnEnum;

    @Column('int', { name: 'max_user_count', default: '100' })
    public maxUserCount: number;

    @Column('enum', { name: 'public', enum: OffOnEnum, default: OffOnEnum.OFF })
    public public: OffOnEnum;

    @Column('int', { name: 'list_type', default: '0' })
    public listType: number;

    @Column('int', { name: 'order_num', default: '0' })
    public orderNum: number;
}
