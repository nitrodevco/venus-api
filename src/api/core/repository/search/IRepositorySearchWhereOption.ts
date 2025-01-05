import { RepositorySearchOperator } from './RepositorySearchOperator';

export interface IRepositorySearchWhereOption<T>
{
    propertyName: keyof T;
    operator: RepositorySearchOperator;
    value: string;
}
