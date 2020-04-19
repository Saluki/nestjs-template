import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CommonModule } from './common';
import { PassengerModule } from './passenger/passenger.module';

@Module({
    imports: [
        CommonModule,
        TypeOrmModule.forRoot(),
        PassengerModule
    ]
})
export class ApplicationModule {}
