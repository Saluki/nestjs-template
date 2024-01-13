import { Body, Controller, Get, HttpStatus, Inject, Post, PreconditionFailedException, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { Config, LoggerService, RestrictedGuard } from '../../common';
import { Service } from '../../tokens';

import { PassengerPipe } from '../flow';
import { PassengerData, PassengerInput } from '../model';
import { PassengerService } from '../service';

@Controller('passengers')
@ApiTags('passenger')
@ApiBearerAuth()
export class PassengerController {

    public constructor(
        @Inject(Service.CONFIG)
        private readonly config: Config,
        private readonly logger: LoggerService,
        private readonly passengerService: PassengerService
    ) { }

    @Get()
    @ApiOperation({ summary: 'Find passengers' })
    @ApiResponse({ status: HttpStatus.OK, isArray: true, type: PassengerData })
    public async find(): Promise<PassengerData[]> {

        return this.passengerService.find();
    }

    @Post()
    @UseGuards(RestrictedGuard)
    @ApiOperation({ summary: 'Create passenger' })
    @ApiResponse({ status: HttpStatus.CREATED, type: PassengerData })
    public async create(@Body(PassengerPipe) input: PassengerInput): Promise<PassengerData> {

        if (this.config.PASSENGERS_ALLOWED === 'no') {
            throw new PreconditionFailedException('Not allowed to onboard passengers');
        }

        const passenger = await this.passengerService.create(input);
        this.logger.info(`Created new passenger with ID ${passenger.id}`);

        return passenger;
    }

}
