import 'dotenv/config';
// organize-imports-disable-above
import { ConfigKeys } from '#base/api';
import { CoreLogService, CoreSettingsService } from '#base/core';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './AppModule';

const bootstrap = async () =>
{
    const app = await NestFactory.create(AppModule);
    const logService = app.get(CoreLogService);
    const settingsService = app.get(CoreSettingsService);

    app.useLogger(logService);

    await app.init();

    await app.listen(settingsService.getNumber(ConfigKeys.HTTP_PORT, 3001), settingsService.getString(ConfigKeys.HTTP_IP, '127.0.0.1'), () =>
    {
        logService.log(`Listening ${ settingsService.getString(ConfigKeys.HTTP_IP, '127.0.0.1') }:${ settingsService.getNumber(ConfigKeys.HTTP_PORT, 3001) }`);
    });
}

void bootstrap();
