import { IFormError } from '#base/api';

export class FormException extends Error
{
    public formErrors: IFormError[];

    constructor(...errors: IFormError[])
    {
        super('invalid_form');

        this.formErrors = errors;
    }
}
