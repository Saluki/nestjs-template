import * as Joi from 'joi';

import { JoiValidationPipe } from '../../common';
import { PassengerData, PassengerInput } from '../model';

export class PassengerPipe extends JoiValidationPipe {

    public buildSchema(): Joi.Schema {

        return Joi.object<PassengerInput>({
            firstName: Joi.string().required().max(PassengerData.NAME_LENGTH),
            lastName: Joi.string().required().max(PassengerData.NAME_LENGTH)
        });

    }
}
