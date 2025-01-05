import { Column, Entity } from 'typeorm';

@Entity('navigator_filter')
export class NavigatorFilterEntity
{
    @Column('varchar', { primary: true, name: 'key', length: 11 })
    public key: string;

    @Column('varchar', { name: 'field', length: 32 })
    public field: string;

    @Column('enum', { name: 'compare', enum: [ 'equals', 'equals_ignore_case', 'contains' ] })
    public compare: 'equals' | 'equals_ignore_case' | 'contains';

    @Column('varchar', { name: 'database_query', length: 1024 })
    public databaseQuery: string;
}
