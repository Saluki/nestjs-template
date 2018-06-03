
import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Repository as RepositoryToken } from '../../tokens';
import { Passenger, PassengerInput } from '../model';

@Injectable()
export class PassengerService {

    public constructor(
        @Inject(RepositoryToken.PASSENGER)
        private readonly passengerRepository: Repository<Passenger>
    ) { }

    public async find(): Promise<Passenger[]> {
        return this.passengerRepository.find();
    }

    public async create(input: PassengerInput): Promise<Passenger> {

        const passenger = new Passenger();

        passenger.firstName = input.firstName;
        passenger.lastName = input.lastName;

        return this.passengerRepository.create(passenger);
    }

}
