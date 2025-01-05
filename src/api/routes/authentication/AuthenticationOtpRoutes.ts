export type IAuthenticationOtpSetupPostRequest = { name: string, password: string, otpSecret: string, otpToken: string };
export type IAuthenticationOtpSetupPostResponse = void;

export type IAuthenticationOtpQrCodeGetRequest = { name: string, otpSecret: string };
export type IAuthenticationOtpQrCodeGetResponse = any;

export type IAuthenticationGenerateSecretGetRequest = {};
export type IAuthenticationGenerateSecretGetResponse = { otpSecret: string };
