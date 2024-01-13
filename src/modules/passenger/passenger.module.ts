import { Module } from '@nestjs/common';

import { CommonModule } from '../common';
import { PassengerController } from './controller';
import { PassengerService } from './service';

@Module({
    imports: [
        CommonModule,
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
