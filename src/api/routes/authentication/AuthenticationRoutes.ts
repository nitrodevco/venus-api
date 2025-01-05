import { ISession } from '../../authentication';
import { ISystemUser } from '../../panel';

export type IAuthenticationLoginPostRequest = { name: string, password: string, otpToken: string };
export type IAuthenticationLoginPostResponse = { token: string, session: ISession };

export type IAuthenticationUpdatePasswordPostRequest = { name: string, password: string, newPassword: string, otpToken: string };
export type IAuthenticationUpdatePasswordPostResponse = void;

export type IAuthenticationUserGetRequest = {};
export type IAuthenticationUserGetResponse = ISystemUser;
