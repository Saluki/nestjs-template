import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../common';
import { PassengerData, PassengerInput } from '../model';

@Injectable()
export class PassengerService {

    public constructor(
        private readonly prismaService: PrismaService
    ) { }

    public async find(): Promise<PassengerData[]> {

        const passengers = await this.prismaService.passenger.findMany({});

        return passengers.map(passenger => new PassengerData(passenger));
    }

    public async create(data: PassengerInput): Promise<PassengerData> {

        const passenger = await this.prismaService.passenger.create({
            data
        });

        return new PassengerData(passenger);
    }

}
