import { DeepOptional } from '../../database/types';

export interface IRepositoryUpdate<T = any>
{
    id: number;
    updates: DeepOptional<T>;
}
