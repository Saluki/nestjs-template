
import { CanActivate, Guard } from '@nestjs/common';
import { Request } from 'express';
import * as _ from 'lodash';

@Guard()
export class GuestGuard implements CanActivate {

    public canActivate(request: Request): boolean {

        const header = request.header('Authorization');

        return _.isEmpty(header);
    }

}
