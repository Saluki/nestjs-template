import { Module } from '@nestjs/common';

import { LogInterceptor } from './flow';
import { configProvider, LoggerService, PrismaService } from './provider';

@Module({
    providers: [
        configProvider,
        LoggerService,
        LogInterceptor,
        PrismaService
    ],
    exports: [
        configProvider,
        LoggerService,
        LogInterceptor,
        PrismaService
    ]
})
export class CommonModule {}
