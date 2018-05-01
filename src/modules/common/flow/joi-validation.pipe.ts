
import { ArgumentMetadata, HttpException, HttpStatus, Pipe, PipeTransform } from '@nestjs/common';
import * as Joi from 'joi';

/* tslint:disable:no-any */

@Pipe()
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
