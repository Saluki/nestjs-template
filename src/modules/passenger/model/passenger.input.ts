import { PickType } from '@nestjs/swagger';
import { PassengerData } from './passenger.data';

export class PassengerInput extends PickType(PassengerData, ['firstName', 'lastName'] as const) {}
