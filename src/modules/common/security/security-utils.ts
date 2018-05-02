
import { Request } from 'express';
import * as jwt from 'jsonwebtoken';
import * as _ from 'lodash';

export function extractTokenPayload(request: Request): any {

    const header = request.header('Authorization');

    if (!header) {
        return null;
    }

    const chunks = header.split(' ');

    if (chunks.length !== 2 || chunks[0] !== 'Bearer') {
        return null;
    }

    try {

        const env = process.env;
        return jwt.verify(chunks[1], `${env.JWT_SECRET}`, {
            algorithms: ['HS256'],
            issuer: 'DEFAULT_ISSUER'
        });

    }
    catch (err) {
        return null;
    }
}
