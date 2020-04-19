import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CommonModule } from '../common';
import { PassengerController } from './controller';
import { Passenger } from './model';
import { PassengerService } from './service';

@Module({
    imports: [
        CommonModule,
        TypeOrmModule.forFeature([
            Passenger
        ])
    ],
    providers: [
        PassengerService
    ],
    controllers: [
        PassengerController
    ],
    exports: []
})
export class PassengerModule { }
