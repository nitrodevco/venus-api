import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('support_issue_categories')
export class SupportIssueCategoryEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('varchar', { name: 'name', length: 255, default: 'PII' })
    public name: string;
}
