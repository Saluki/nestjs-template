import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CommonModule } from './common';
import { PassengerModule } from './passenger/passenger.module';

function assertEnv(name: string): string {

    const env = process.env[name];
    if (typeof env !== 'string' || env.length === 0) {
        throw new Error(`Expected environment variable ${name}`);
    }

    return env;
}

@Module({
    imports: [
        CommonModule,
        TypeOrmModule.forRoot({
            type: 'mariadb',
            host: assertEnv('DB_HOST'),
            port: +assertEnv('DB_PORT'),
            username: assertEnv('DB_USERNAME'),
            password: assertEnv('DB_PASSWORD'),
            database: assertEnv('DB_DATABASE'),
            autoLoadEntities: true,
            synchronize: false
        }),
        PassengerModule
    ]
})
export class ApplicationModule {}
