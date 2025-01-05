import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('polls_questions')
export class PollQuestionEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'parent_id', default: '0' })
    public parentId: number;

    @Column('int', { name: 'poll_id' })
    public pollId: number;

    @Column('int', { name: 'order' })
    public order: number;

    @Column('varchar', { name: 'question', length: 255 })
    public question: string;

    @Column('int', { name: 'type', default: '2' })
    public type: number;

    @Column('int', { name: 'min_selections', default: '1' })
    public minSelections: number;

    @Column('varchar', { name: 'options', length: 255 })
    public options: string;
}
