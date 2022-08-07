import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HealthzController } from './controller/healthz.controller';

import { LogInterceptor } from './flow';
import { configProvider, LoggerService } from './provider';

@Module({
    imports: [
        TerminusModule
    ],
    providers: [
        configProvider,
        LoggerService,
        LogInterceptor
    ],
    exports: [
        configProvider,
        LoggerService,
        LogInterceptor
    ],
    controllers: [
        HealthzController
    ],
})
export class CommonModule {}
