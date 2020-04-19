import { ApiProperty } from '@nestjs/swagger';

export class PassengerData {

    @ApiProperty({ description: 'Passenger unique ID', example: '36635263' })
    public readonly id: number;

    @ApiProperty({ description: 'First name', example: 'John' })
    public readonly firstName: string;

    @ApiProperty({ description: 'Last name', example: 'Doe' })
    public readonly lastName: string;

}
