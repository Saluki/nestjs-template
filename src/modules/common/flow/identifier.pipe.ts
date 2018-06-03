
import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

/* tslint:disable:no-any */

@Injectable()
export class IdentifierPipe implements PipeTransform<any> {

    public transform(value: any, metadata: ArgumentMetadata) {

        if (/^[0-9]{1,64}$/.test(value)) {
            return value;
        }

        throw new HttpException('Identifier validation failed', HttpStatus.BAD_REQUEST);
    }

}
