
import { CanActivate, Guard, Inject } from '@nestjs/common';
import { Request } from 'express';

import { Role } from '../../tokens';
import { extractTokenPayload } from './security-utils';

@Guard()
export class RestrictedGuard implements CanActivate {

    public canActivate(request: Request): boolean {

        const payload = extractTokenPayload(request);

        if (!payload) {
            return false;
        }

        return (payload.role === Role.RESTRICTED);
    }

}
