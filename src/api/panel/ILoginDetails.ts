export interface ILoginDetails
{
    id: number;
    password: string;
    passwordExpired: boolean;
    otpSecret: string;
}
