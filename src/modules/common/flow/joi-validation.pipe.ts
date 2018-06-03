
import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import * as Joi from 'joi';

/* tslint:disable:no-any */

@Injectable()
export abstract class JoiValidationPipe implements PipeTransform<any> {

    public transform(value: any, metadata: ArgumentMetadata) {

        const result = Joi.validate(value, this.buildSchema());

        if (result.error !== null) {
            throw new HttpException({
                message: 'Validation failed',
                detail: result.error.message.replace(/"/g, `'`),
                statusCode: HttpStatus.BAD_REQUEST
            }, HttpStatus.BAD_REQUEST);
        }

        return result.value;
    }

    public abstract buildSchema(): object;

}
