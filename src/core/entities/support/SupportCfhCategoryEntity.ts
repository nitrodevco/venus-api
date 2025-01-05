import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('support_cfh_categories')
export class SupportCfhCategoryEntity
{
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('varchar', { name: 'name_internal', nullable: true, length: 255 })
    public nameInternal: string;

    @Column('varchar', { name: 'name_external', nullable: true, length: 255 })
    public nameExternal: string;
}
