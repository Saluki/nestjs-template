
import { Module } from '@nestjs/common';

import { LogInterceptor } from './flow';
import { configProvider, loggerProvider, storageProvider } from './provider';

@Module({
    components: [
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
