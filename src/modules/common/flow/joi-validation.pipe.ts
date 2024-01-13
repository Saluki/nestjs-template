import { HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import * as Joi from 'joi';

@Injectable()
export abstract class JoiValidationPipe implements PipeTransform<unknown> {

    public transform(value: unknown): unknown {

        const result = this.buildSchema().validate(value);

        if (result.error) {
            throw new HttpException({
                message: 'Validation failed',
                detail: result.error.message.replace(/"/g, '\''),
                statusCode: HttpStatus.BAD_REQUEST
            }, HttpStatus.BAD_REQUEST);
        }

        return result.value;
    }

    public abstract buildSchema(): Joi.Schema;

}
