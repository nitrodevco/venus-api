import { compareSync, hashSync } from 'bcrypt';

export class PasswordHelper
{
    public static validatePassword(check: string, against: string): boolean
    {
        return compareSync(check, against);
    }

    public static encryptPassword(password: string): string
    {
        return hashSync(password, 10);
    }
}
