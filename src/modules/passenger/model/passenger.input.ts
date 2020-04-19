import { ApiProperty } from '@nestjs/swagger';

export class PassengerInput {

    @ApiProperty()
    public readonly firstName: string;

    @ApiProperty()
    public readonly lastName: string;

}
