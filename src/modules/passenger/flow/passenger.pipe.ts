
import * as Joi from 'joi';
import { JoiValidationPipe } from '../../common/flow';

export class PassengerPipe extends JoiValidationPipe {

    public buildSchema(): object {

        return Joi.object({
            firstName: Joi.string().required(),
            lastName: Joi.string().required()
        });

    }
}
