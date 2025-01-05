import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('items_highscore_data')
export class ItemHighscoreDataEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'item_id' })
    public itemId: number;

    @Column('varchar', { name: 'user_ids', length: 500 })
    public userIds: string;

    @Column('int', { name: 'score' })
    public score: number;

    @Column('tinyint', { name: 'is_win', nullable: true, width: 1, default: '0' })
    public isWin: boolean;

    @Column('int', { name: 'timestamp' })
    public timestamp: number;
}
