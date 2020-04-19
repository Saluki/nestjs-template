import { Module } from '@nestjs/common';

import { LogInterceptor } from './flow';
import { configProvider, LoggerService } from './provider';

@Module({
    providers: [
        configProvider,
        LoggerService,
        LogInterceptor
    ],
    exports: [
        configProvider,
        LoggerService,
        LogInterceptor
    ]
})
export class CommonModule {}
