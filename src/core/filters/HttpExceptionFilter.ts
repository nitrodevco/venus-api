import { IRequest, IResponse } from '#base/api';
import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from '@nestjs/common';
import { HttpException } from '../exceptions';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter
{
    public catch(error: HttpException, host: ArgumentsHost): void
    {
        const request = host.switchToHttp().getRequest<IRequest>();
        const response = host.switchToHttp().getResponse<IResponse>();
        const status = (error instanceof HttpException) ? error.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

        response.status(status).send({ message: error.message });

        return;
    }
}
