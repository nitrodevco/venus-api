import { IRepositorySearchOrderOption } from './IRepositorySearchOrderOption';
import { IRepositorySearchWhereOption } from './IRepositorySearchWhereOption';

export interface IRepositorySearchOptions<T = any>
{
    select?: (keyof T)[];
    where?: IRepositorySearchWhereOption<T>[][];
    order?: IRepositorySearchOrderOption<T>[];
    relations?: string[];
    skip?: number;
    take?: number;
}
