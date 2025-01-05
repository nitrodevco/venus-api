import { RepositorySearchOrderSort } from './RepositorySearchOrderSort';

export interface IRepositorySearchOrderOption<T>
{
    propertyName: keyof T;
    sort: RepositorySearchOrderSort;
}
