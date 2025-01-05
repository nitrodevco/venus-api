export interface IEmulatorErrorEntity
{
    id: number;
    timestamp: number;
    version: string;
    buildHash: string;
    type: string;
    stacktrace: Buffer;
}
