import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('support_issue_presets')
export class SupportIssuePresetEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('int', { name: 'category', default: '1' })
    public category: number;

    @Column('varchar', { name: 'name', length: 100 })
    public name: string;

    @Column('varchar', { name: 'message', length: 300 })
    public message: string;

    @Column('varchar', { name: 'reminder', length: 100 })
    public reminder: string;

    @Column('int', { name: 'ban_for', default: '0' })
    public banFor: number;

    @Column('int', { name: 'mute_for', default: '0' })
        muteFor: number;
}
