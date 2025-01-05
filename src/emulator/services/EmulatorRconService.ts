import { ConfigKeys } from '#base/api';
import { CoreLogService, CoreSettingsService } from '#base/core';
import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { Socket } from 'net';

@Injectable()
export class EmulatorRconService implements OnApplicationBootstrap
{
    private _socket: Socket = null;
    private _isConnected = false;

    constructor(
        private readonly coreSettingsService: CoreSettingsService,
        private readonly logService: CoreLogService)
    { }

    public async onApplicationBootstrap(): Promise<void>
    {
        this.setupSocket();
    }

    public async sendMessage(key: string, data: object): Promise<boolean>
    {
        if(!key?.length || !this._socket || !this._isConnected) return false;

        return new Promise((resolve, reject) =>
        {
            const timeout = setTimeout(() => reject(new Error('timed_out')), 5000);

            this._socket.once('data', data =>
            {
                clearTimeout(timeout);

                try
                {
                    const response = JSON.parse(data.toString()) as { status: number; message: string };
                    const status = (response.status ?? 0);

                    switch(status)
                    {
                        case 0:
                            resolve(true);
                            return;
                        case 1:
                            reject(new Error('not_found'));
                            return;
                        case 2:
                            reject(new Error('user_not_found'));
                            return;
                        case 3:
                            reject(new Error('room_not_found'));
                            return;
                        case 4:
                            reject(new Error('system_error'));
                    }
                }

                catch (err)
                {
                    this.logService.error(err);

                    reject(new Error(err.message));

                    return;
                }
            });

            this._socket.write(JSON.stringify({ key, data }));
        });
    }

    private setupSocket(): void
    {
        if(this._socket) return;

        const rconEnabled = this.coreSettingsService.getBoolean(ConfigKeys.RCON_ENABLED, true);

        if(!rconEnabled) return;

        this._socket = new Socket();
        this._isConnected = false;

        const socketIp = this.coreSettingsService.getString(ConfigKeys.RCON_IP, '127.0.0.1');
        const socketPort = this.coreSettingsService.getNumber(ConfigKeys.RCON_PORT, 3001);

        this._socket.connect(socketPort, socketIp, () =>
        {
            this._isConnected = true;

            this.logService.log(`RCON Listening ${ socketIp }:${ socketPort }`);
        });

        this._socket.on('close', hadError =>
        {
            this.logService.warn(`RCON Closed ${ socketIp }:${ socketPort }`);

            this._isConnected = false;
            this._socket = null;
        });

        this._socket.on('error', err =>
        {
            //@ts-expect-error idk
            if(err?.code === 'ECONNREFUSED')
            {
                this.logService.warn(`RCON Failed ${ socketIp }:${ socketPort }`);

                this._isConnected = false;
                this._socket = null;
            }
        });
    }

    private destorySocket(): void
    {
        if(!this._socket) return;

        this._socket.destroy();

        this._socket = null;
    }

    public async updateSettings(): Promise<boolean>
    {
        return await this.sendMessage('updatesettings', {});
    }

    public async setRank(userId: number, rank: number): Promise<boolean>
    {
        return await this.sendMessage('setrank', {
            'user_id': userId,
            'rank': rank
        });
    }

    public async giveBadge(userId: number, badgeCode: string): Promise<boolean>
    {
        return await this.sendMessage('givebadge', {
            'user_id': userId,
            'badge': badgeCode
        });
    }

    public get isConnected(): boolean
    {
        return this._isConnected;
    }
}
