
import * as Joi from 'joi';
import { JoiValidationPipe } from '../../common';
import { Passenger } from '../model';

export class PassengerPipe extends JoiValidationPipe {

    public buildSchema(): object {

        return Joi.object({
            firstName: Joi.string().required().max(Passenger.NAME_LENGTH),
            lastName: Joi.string().required().max(Passenger.NAME_LENGTH)
        });

    }
}
