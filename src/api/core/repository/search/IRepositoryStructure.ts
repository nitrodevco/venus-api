import { IRepositoryColumn } from '../IRepositoryColumn';
import { IRepositoryRelation } from '../IRepositoryRelation';

export interface IRepositoryStructure
{
    tableName: string;
    columns: IRepositoryColumn[];
    relations?: IRepositoryRelation[];
}
