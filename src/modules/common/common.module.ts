
import { Module } from '@nestjs/common';

import { LogInterceptor } from './flow';
import { configProvider, loggerProvider, storageProvider } from './provider';

@Module({
    providers: [
        configProvider,
        storageProvider,
        loggerProvider,
        LogInterceptor
    ],
    exports: [
        configProvider,
        storageProvider,
        loggerProvider,
        LogInterceptor
    ]
})
export class CommonModule {}
