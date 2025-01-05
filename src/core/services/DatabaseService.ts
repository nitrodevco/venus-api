import { DeepOptional, IAnalyst, IRepositoryAdd, IRepositoryColumn, IRepositorySearchOptions, IRepositorySearchResult, IRepositoryStructure, IRepositoryUpdate, RepositorySearchOperator, RepositorySearchOrderSort } from '#base/api';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, EntityMetadata, Equal, FindManyOptions, FindOptionsOrder, FindOptionsRelations, FindOptionsSelect, FindOptionsWhere, In, LessThan, LessThanOrEqual, Like, MoreThan, MoreThanOrEqual, Not, Raw, Repository } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { VenusColumnPermissionEntity } from '../entities';
import { CoreLogService } from './CoreLogService';

@Injectable()
export class DatabaseService implements OnModuleInit
{
    private _cachedStructures = new Map<string, IRepositoryStructure>();
    private _readColumnPermissions = new Map<string, number>();
    private _editColumnPermissions = new Map<string, number>();

    constructor(
        @InjectRepository(VenusColumnPermissionEntity)
        private readonly systemColumnPermissionRepository: Repository<VenusColumnPermissionEntity>,
        private readonly logService: CoreLogService)
    { }

    public async onModuleInit(): Promise<void>
    {
        await this.loadColumnPermissions();
    }

    public getStructureForMetadata(metaData: EntityMetadata): IRepositoryStructure
    {
        if(!metaData) return null;

        let structure = this._cachedStructures.get(metaData.tableName);

        if(!structure) structure = this.processStructureForMetadata(metaData);

        if(!structure) return null;

        return structure;
    }

    public getStructureForRepository<T>(repository: Repository<T>): IRepositoryStructure
    {
        return this.getStructureForMetadata(repository?.metadata);
    }

    public getStructureForTableName(tableName: string): IRepositoryStructure
    {
        if(!tableName || (tableName.length <= 0)) return null;

        const structure = this._cachedStructures.get(tableName);

        if(!structure) return null;

        return structure;
    }

    private processStructureForMetadata(metaData: EntityMetadata): IRepositoryStructure
    {
        if(!metaData) return null;

        const structure: IRepositoryStructure = {
            tableName: metaData.tableName,
            columns: metaData.columns.filter(column =>
            {
                if(!column?.isSelect) return false;

                return true;
            }).map(column =>
            {
                const repositoryColumn: IRepositoryColumn = {
                    columnType: column.type,
                    columnName: column.databaseName,
                    propertyName: column.propertyName,
                    isNullable: column.isNullable,
                    readPermissionId: this.getReadStructureColumnPermissionId(metaData.tableName, column.databaseName),
                    editPermissionId: this.getEditStructureColumnPermissionId(metaData.tableName, column.databaseName)
                };

                if(column.type === 'enum') repositoryColumn.enumValues = column.enum;

                return repositoryColumn;
            }),
            relations: []
        };

        this._cachedStructures.set(structure.tableName, structure);

        metaData.relations.forEach(relation =>
        {
            const relationStructure = this.getStructureForMetadata(relation.inverseEntityMetadata);

            structure.relations.push({
                name: relation.propertyName,
                tableName: relationStructure.tableName,
            });
        });

        return structure;
    }

    public async searchRepository<T>(repository: Repository<T>, searchOptions: IRepositorySearchOptions<T> = null, analyst: IAnalyst = null): Promise<IRepositorySearchResult<T>>
    {
        const structure = this.getStructureForRepository(repository);

        if(!structure) throw new Error('invalid_structure');

        const validColumnDefs = structure.columns.filter(column => this.canReadStructureColumn(structure, column, analyst));
        const selectedColumnDefs: IRepositoryColumn[] = [];

        searchOptions = {
            select: searchOptions?.select ?? [],
            where: searchOptions?.where ?? [],
            order: searchOptions?.order ?? [],
            skip: parseInt(((searchOptions?.skip ?? 0) as unknown) as string),
            take: Math.min(parseInt(((searchOptions?.take ?? 0) as unknown) as string), 20),
            relations: searchOptions?.relations ?? []
        };

        const searchSelectOptions: FindOptionsSelect<T> = {};
        const searchWhereOptions: FindOptionsWhere<T>[] = [];
        const searchOrderOptions: FindOptionsOrder<T> = {};
        const relationOptions: FindOptionsRelations<T> = {};

        if(searchOptions.select && Array.isArray(searchOptions.select) && searchOptions.select.length)
        {
            searchOptions.select.forEach(selectOption =>
            {
                const column = validColumnDefs.find(column => (column.propertyName === selectOption));

                if(!column) throw new Error('invalid_select_column');

                searchSelectOptions[column.propertyName] = true;

                selectedColumnDefs.push(column);
            });
        }
        else
        {
            validColumnDefs.forEach(column =>
            {
                searchSelectOptions[column.propertyName] = true;

                selectedColumnDefs.push(column);
            });
        }

        if(searchOptions.where && Array.isArray(searchOptions.where) && searchOptions.where.length)
        {
            searchOptions.where.forEach(whereOptions =>
            {
                if(!whereOptions || !Array.isArray(whereOptions)) return;

                const searchWhereOption: FindOptionsWhere<T> = {};

                whereOptions.forEach(whereOption =>
                {
                    if(!whereOption.propertyName || !whereOption.operator || !whereOption.value) throw new Error('invalid_where_option');

                    const column = selectedColumnDefs.find(column => (column.propertyName === whereOption.propertyName));

                    if(!column) throw new Error('invalid_search_column');

                    switch(whereOption.operator)
                    {
                        case RepositorySearchOperator.EQUALS:
                            searchWhereOption[column.propertyName] = Equal(whereOption.value);
                            return;
                        case RepositorySearchOperator.NOT:
                            searchWhereOption[column.propertyName] = Not(whereOption.value);
                            return;
                        case RepositorySearchOperator.LIKE:
                            searchWhereOption[column.propertyName] = Raw(alias => `LOWER(${ alias }) LIKE LOWER(:value)`, {
                                value: `%${ whereOption.value }%`
                            });
                            return;
                        case RepositorySearchOperator.STARTS_WITH:
                            searchWhereOption[column.propertyName] = Like(`${ whereOption.value }%`);
                            return;
                        case RepositorySearchOperator.LESS_THAN:
                            searchWhereOption[column.propertyName] = LessThan(`${ whereOption.value }%`);
                            return;
                        case RepositorySearchOperator.LESS_THAN_EQUALS:
                            searchWhereOption[column.propertyName] = LessThanOrEqual(`${ whereOption.value }%`);
                            return;
                        case RepositorySearchOperator.MORE_THAN:
                            searchWhereOption[column.propertyName] = MoreThan(`${ whereOption.value }%`);
                            return;
                        case RepositorySearchOperator.MORE_THAN_EQUALS:
                            searchWhereOption[column.propertyName] = MoreThanOrEqual(`${ whereOption.value }%`);
                            return;
                        case RepositorySearchOperator.IN:
                            searchWhereOption[column.propertyName] = In(whereOption.value.split(';'));
                            return;
                        case RepositorySearchOperator.BETWEEN: {
                            const [ valueOne, valueTwo ] = whereOption.value.split(';');
                            searchWhereOption[column.propertyName] = Between(valueOne, valueTwo);
                            return;
                        }
                        default:
                            throw new Error('invalid_search_operator');
                    }
                });

                if(Object.keys(searchWhereOption).length > 0) searchWhereOptions.push(searchWhereOption);
            });
        }

        if(searchOptions.order && Array.isArray(searchOptions.order) && searchOptions.order.length)
        {
            searchOptions.order.forEach(orderOption =>
            {
                if(!orderOption.propertyName || !orderOption.sort) throw new Error('invalid_order');

                const column = selectedColumnDefs.find(column => (column.propertyName === orderOption.propertyName));

                if(!column) throw new Error('invalid_order_column');

                if((orderOption.sort === RepositorySearchOrderSort.ASC) || (orderOption.sort === RepositorySearchOrderSort.DESC))
                {
                    searchOrderOptions[column.propertyName] = orderOption.sort;

                    return;
                }

                throw new Error('invalid_order_type');
            });
        }

        if(searchOptions.relations && Array.isArray(searchOptions.relations) && searchOptions.relations.length)
        {
            searchOptions.relations.forEach(value =>
            {
                const [ relationName = null, relationPropertyNames = '' ] = value.split(':');
                const propertyNames = relationPropertyNames.split(',');
                const relation = structure.relations.find(relation => (relation.name === relationName));
                const tableName = relation?.tableName;

                if(!relation || !tableName || (tableName.length <= 0)) throw new Error('invalid_relation_name');

                const relationStructure = this.getStructureForTableName(tableName);

                if(!relationStructure) throw new Error('invalid_structure');

                const validPropertyNames = propertyNames.filter(propertyName =>
                {
                    if(!propertyName || (propertyName.length <= 0)) return false;

                    return !!(relationStructure.columns?.find(column => (column.propertyName === propertyName)));
                });

                if(validPropertyNames.length > 0)
                {
                    searchSelectOptions[relationName] = {};

                    validPropertyNames.forEach(propertyName =>
                    {
                        searchSelectOptions[relationName][propertyName] = true;
                    });
                }

                relationOptions[relationName] = true;
            });
        }

        const findOptions: FindManyOptions<T> = {
            skip: searchOptions.skip,
            take: searchOptions.take
        };

        if(Object.keys(searchSelectOptions).length > 0) findOptions.select = searchSelectOptions;
        if(Object.keys(searchWhereOptions).length > 0) findOptions.where = searchWhereOptions;
        if(Object.keys(searchOrderOptions).length > 0) findOptions.order = searchOrderOptions;
        if(Object.keys(relationOptions).length > 0) findOptions.relations = relationOptions;

        const result = await repository.findAndCount(findOptions);

        return {
            data: result[0],
            meta: {
                totalRowCount: +result[1],
                columnDefs: selectedColumnDefs
            }
        };
    }

    public async updateRepository<T = any>(repository: Repository<T>, updates: IRepositoryUpdate<T>[], analyst: IAnalyst = null): Promise<IRepositoryUpdate<T>[]>
    {
        const structure = this.getStructureForRepository(repository);

        if(!structure) throw new Error('invalid_structure');

        const successfulUpdates: IRepositoryUpdate<T>[] = [];

        for(const update of updates)
        {
            if(!update.id || (update.id <= 0)) continue;

            const updates: DeepOptional<T> = {};

            Object.keys(update.updates).forEach(key =>
            {
                if(key === 'id') return;

                const column = structure.columns.find(column => column.propertyName === (key));

                if(!column || !this.canEditStructureColumn(structure, column, analyst)) return;

                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
                updates[key] = update.updates[key].toString().trim();
            });

            if(!Object.keys(updates).length) continue;

            try
            {
                await repository.update(update.id, updates as QueryDeepPartialEntity<T>);

                successfulUpdates.push({ id: update.id, updates });
            }

            catch (err)
            {
                this.logService.error(err);
            }
        }

        return successfulUpdates;
    }

    public async addRepository<T = any>(repository: Repository<T>, entity: new() => T, values: IRepositoryAdd<T>[], analyst: IAnalyst = null): Promise<T[]>
    {
        const structure = this.getStructureForRepository(repository);

        if(!structure) throw new Error('invalid_structure');

        const successfulAdditions: T[] = [];

        for(const value of values)
        {
            const newEntity = new entity();
            const values: QueryDeepPartialEntity<T> = {};

            //@ts-expect-error ///
            delete value.values.id;

            Object.keys(value.values).forEach(key =>
            {
                const column = structure.columns.find(column => column.propertyName === (key));

                if(!column) return;

                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                newEntity[column.propertyName] = value.values[key];

                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                values[key] = value.values[key];
            });

            if(!Object.keys(values).length) continue;

            await repository.save(newEntity);

            successfulAdditions.push(newEntity);
        }

        return successfulAdditions;
    }

    public getReadStructureColumnPermissionId(tableName: string, columnName: string): number
    {
        const key = `${ tableName }.${ columnName }`;

        if(!this._readColumnPermissions.has(key)) return -1;

        let permissionId = this._readColumnPermissions.get(key);

        if(!permissionId || (permissionId <= 0)) permissionId = -1;

        return permissionId;
    }

    public getEditStructureColumnPermissionId(tableName: string, columnName: string): number
    {
        const key = `${ tableName }.${ columnName }`;

        if(!this._editColumnPermissions.has(key)) return -1;

        let permissionId = this._editColumnPermissions.get(key);

        if(!permissionId || (permissionId <= 0)) permissionId = -1;

        return permissionId;
    }

    public canReadStructureColumn(structure: IRepositoryStructure, column: IRepositoryColumn, analyst: IAnalyst = null): boolean
    {
        const permissionId = column.readPermissionId;

        if(permissionId === -1) return true;

        if((permissionId > 0) && analyst && !analyst.hasPermissionId(permissionId)) return false;

        return true;
    }

    public canEditStructureColumn(structure: IRepositoryStructure, column: IRepositoryColumn, analyst: IAnalyst = null): boolean
    {
        const permissionId = column.editPermissionId;

        if(permissionId === -1) return true;

        if((permissionId > 0) && analyst && !analyst.hasPermissionId(permissionId)) return false;

        return true;
    }

    private async loadColumnPermissions(): Promise<void>
    {
        const columnPermissions = await this.systemColumnPermissionRepository.find();

        if(columnPermissions?.length)
        {
            columnPermissions.forEach(columnPermission =>
            {
                const key = `${ columnPermission.tableName }.${ columnPermission.columnName }`;

                if(columnPermission.readPermissionId) this._readColumnPermissions.set(key, columnPermission.readPermissionId);

                if(columnPermission.editPermissionId) this._editColumnPermissions.set(key, columnPermission.editPermissionId);
            });
        }

        this.logService.log(`Loaded ${ this._readColumnPermissions.size } column permissions`);
    }
}
