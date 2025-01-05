import { IRepositoryColumn } from '../IRepositoryColumn';

export interface IRepositorySearchResult<T = any>
{
    data: T[],
    meta: {
        totalRowCount: number;
        columnDefs: IRepositoryColumn[];
    }
}
