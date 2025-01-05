import { AuthenticationModule, LoadSessionMiddleware, LoadUserMiddleware } from '#base/authentication';
import { CoreModule } from '#base/core';
import { EmulatorModule } from '#base/emulator';
import { HabboModule } from '#base/habbo';
import { LoadRoleMiddleware, PanelModule } from '#base/panel';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';

@Module({
    imports: [
        CoreModule.forRoot({
            host: process.env.DB_HOST,
            port: (process.env.DB_PORT as unknown) as number,
            username: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
            sync: process.env.DB_SYNC === '1'
        }),
        AuthenticationModule,
        PanelModule,
        EmulatorModule,
        HabboModule
    ],
    providers: [
    ],
    exports: [
    ]
})
export class AppModule implements NestModule
{
    public configure(consumer: MiddlewareConsumer): void
    {
        consumer
            .apply(LoadSessionMiddleware, LoadUserMiddleware, LoadRoleMiddleware)
            .forRoutes({ path: '*', method: RequestMethod.ALL });
    }
}
