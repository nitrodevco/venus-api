import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('polls')
export class PollEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('varchar', { name: 'title', length: 255, default: 'Hey! We\'d appreciate it if you could take some time to answer these questions. It will help improve our hotel.' })
    public title: string;

    @Column('varchar', { name: 'thanks_message', length: 255 })
    public thanksMessage: string;

    @Column('varchar', { name: 'reward_badge', length: 10 })
    public rewardBadge: string;
}
