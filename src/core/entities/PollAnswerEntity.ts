import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('polls_answers')
export class PollAnswerEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'poll_id' })
    public pollId: number;

    @Column('int', { name: 'user_id' })
    public userId: number;

    @Column('int', { name: 'question_id' })
    public questionId: number;

    @Column('varchar', { name: 'answer', length: 255 })
    public answer: string;
}
