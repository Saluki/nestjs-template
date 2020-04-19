import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import * as _ from 'lodash';

@Injectable()
export class IdentifierPipe implements PipeTransform<unknown, string> {

    public transform(value: unknown, metadata: ArgumentMetadata): string {

        if (!_.isString(value)) {
            throw new HttpException('Identifier validation failed', HttpStatus.BAD_REQUEST);
        }

        if (/^[0-9]{1,64}$/.test(value)) {
            return value;
        }

        throw new HttpException('Identifier validation failed', HttpStatus.BAD_REQUEST);
    }

}
