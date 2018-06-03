
import { Module } from '@nestjs/common';

import { LogInterceptor } from './flow';
import { configProvider, LoggerService, storageProvider } from './provider';

@Module({
    providers: [
        configProvider,
        storageProvider,
        LoggerService,
        LogInterceptor
    ],
    exports: [
        configProvider,
        storageProvider,
        LoggerService,
        LogInterceptor
    ]
})
export class CommonModule {}
