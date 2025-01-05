import 'dotenv/config';
// organize-imports-disable-above
import { DataSource } from 'typeorm';
import { VenusColumnPermissionEntity, VenusLanguageEntity, VenusLocalizationEntity, VenusPermissionCategoryEntity, VenusPermissionEntity, VenusRoleEntity, VenusRolePermissionEntity, VenusSettingsEntity, VenusStatisticsEntity, VenusUserEntity, VenusUserRoleEntity, VenusUserSessionEntity } from './src/core/entities';

// Create a new DataSource with only the specific entities
const specificDataSource = new DataSource({
    type: 'mysql', // or your database type
    host: process.env.DB_HOST,
    port: (process.env.DB_PORT as unknown) as number,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: true,
    entities: [
        VenusColumnPermissionEntity,
        VenusLanguageEntity,
        VenusLocalizationEntity,
        VenusPermissionCategoryEntity,
        VenusPermissionEntity,
        VenusRoleEntity,
        VenusRolePermissionEntity,
        VenusSettingsEntity,
        VenusStatisticsEntity,
        VenusUserEntity,
        VenusUserRoleEntity,
        VenusUserSessionEntity
    ]
});

// Run the synchronization
void (async () => {
    console.log('Being database schema synchronization for venus entities');
    await specificDataSource.initialize();
    console.log('Done');
    await specificDataSource.destroy(); // Close the connection
})();
