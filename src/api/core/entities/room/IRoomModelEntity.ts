import { OffOnEnum } from '../../enum';

export interface IRoomModelEntity
{
    id: number;
    name: string;
    doorX: number;
    doorY: number;
    doorDir: number;
    heightmap: string;
    publicItems: string;
    clubOnly: OffOnEnum;
}
