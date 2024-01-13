import { Module } from '@nestjs/common';

import { CommonModule } from './common';
import { PassengerModule } from './passenger/passenger.module';

@Module({
    imports: [
        CommonModule,
        PassengerModule
    ]
})
export class ApplicationModule {}
