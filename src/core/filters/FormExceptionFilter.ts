import { IResponse } from '#base/api';
import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from '@nestjs/common';
import { FormException } from '../exceptions';

@Catch()
export class FormExceptionFilter implements ExceptionFilter
{
    public catch(error: FormException, host: ArgumentsHost): void
    {
        const response = host.switchToHttp().getResponse<IResponse>();

        if((error instanceof FormException))
        {
            response.status(HttpStatus.BAD_REQUEST).send({ message: 'invalid_form', errors: error.formErrors });

            return;
        }
    }
}
