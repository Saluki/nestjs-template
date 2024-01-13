import { ApiProperty } from '@nestjs/swagger';
import { Passenger } from '@prisma/client';

export class PassengerData {

    public static readonly NAME_LENGTH = 50;

    @ApiProperty({ description: 'Passenger unique ID', example: '36635263' })
    public readonly id: number;

    @ApiProperty({ description: 'First name', example: 'John' })
    public readonly firstName: string;

    @ApiProperty({ description: 'Last name', example: 'Doe' })
    public readonly lastName: string;

    public constructor(entity: Passenger) {
        this.id = entity.id;
        this.firstName = entity.firstName;
        this.lastName = entity.lastName;
    }

}
