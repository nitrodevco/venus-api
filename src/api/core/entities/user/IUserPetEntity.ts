import { OffOnEnum } from '../../enum';
import { IUserEntity } from './IUserEntity';

export interface IUserPetEntity
{
    id: number;
    userId: number;
    roomId: number;
    name: string;
    race: number;
    type: number;
    color: string;
    happyness: number;
    experience: number;
    energy: number;
    hunger: number;
    thirst: number;
    respect: number;
    created: number;
    x: number;
    y: number;
    z: number;
    rot: number;
    hairStyle: number;
    hairColor: number;
    saddle: OffOnEnum;
    ride: OffOnEnum;
    mpType: number;
    mpColor: number;
    mpNose: number;
    mpNoseColor: number;
    mpEyes: number;
    mpEyesColor: number;
    mpMouth: number;
    mpMouthColor: number;
    mpDeathTimestamp: number;
    mpBreedable: OffOnEnum;
    mpAllowBreed: OffOnEnum;
    gnomeData: string;
    mpIsDead: boolean;
    saddleItemId: number;

    user?: IUserEntity;
}
