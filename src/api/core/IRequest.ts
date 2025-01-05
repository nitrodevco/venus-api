import { Request } from 'express';
import { ISession } from '../authentication';

export interface IRequest extends Request
{
    session: ISession;
}
