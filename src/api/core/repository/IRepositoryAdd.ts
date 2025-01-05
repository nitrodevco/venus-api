import { DeepOptional } from '../../database/types';

export interface IRepositoryAdd<T = any>
{
    values: DeepOptional<T>;
}
