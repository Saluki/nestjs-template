
import { ApiModelProperty } from '@nestjs/swagger';

export class PassengerInput {

    @ApiModelProperty()
    public readonly firstName: string;

    @ApiModelProperty()
    public readonly lastName: string;

}
