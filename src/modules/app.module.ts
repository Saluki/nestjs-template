
import { Module } from '@nestjs/common';

import { PassengerModule } from './passenger/passenger.module';

@Module({
    modules: [
        PassengerModule
    ]
})
export class ApplicationModule {}
