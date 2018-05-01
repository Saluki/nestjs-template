
import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiUseTags } from '@nestjs/swagger';

import { PassengerPipe } from '../flow';
import { PassengerData, PassengerInput } from '../model';
import { PassengerService } from '../service';

@ApiUseTags('passenger')
@ApiBearerAuth()
@Controller('passengers')
export class PassengerController {

    public constructor(
        private readonly passengerService: PassengerService
    ) { }

    @Get()
    @ApiResponse({ status: 200, isArray: true, type: PassengerData })
    public async find(): Promise<PassengerData[]> {

        const passengers = await this.passengerService.find();
        return passengers.map((passenger) => passenger.buildData());
    }

    @Post()
    @ApiResponse({ status: 201, type: PassengerData })
    public async create(@Body(new PassengerPipe()) input: PassengerInput): Promise<PassengerData> {

        const passenger = await this.passengerService.create(input);
        return passenger.buildData();
    }

}
