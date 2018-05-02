
import { Module } from '@nestjs/common';

import { CommonModule } from '../common';
import { PassengerController } from './controller';
import { passengerRepositoryProvider } from './provider';
import { PassengerService } from './service';

@Module({
    modules: [
        CommonModule
    ],
    components: [
        passengerRepositoryProvider,
        PassengerService
    ],
    controllers: [
        PassengerController
    ],
    exports: []
})
export class PassengerModule { }
