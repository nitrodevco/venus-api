import { Module } from '@nestjs/common';
import { EmulatorSettingsController, EmulatorTextsController } from './controllers';
import { EmulatorRconService, EmulatorSettingsService, EmulatorTextsService } from './services';

@Module({
    controllers: [
        EmulatorSettingsController,
        EmulatorTextsController
    ],
    providers: [
        EmulatorRconService,
        EmulatorSettingsService,
        EmulatorTextsService
    ],
    exports: [
        EmulatorRconService,
        EmulatorSettingsService,
        EmulatorTextsService
    ]
})
export class EmulatorModule
{ }
