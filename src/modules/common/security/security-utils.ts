import { Request } from 'express';
import * as jwt from 'jsonwebtoken';

const PAYLOAD_COMPONENTS = 2;

// tslint:disable-next-line:no-any
export function extractTokenPayload(request: Request): any | null {

    const header = request.header('Authorization');

    if (!header) {
        return null;
    }

    const chunks = header.split(' ');

    if (chunks.length !== PAYLOAD_COMPONENTS || chunks[0] !== 'Bearer') {
        return null;
    }

    try {

        const env = process.env;
        return jwt.verify(chunks[1], `${env.JWT_SECRET}`, {
            algorithms: ['HS256'],
            issuer: env.JWT_ISSUER
        });

    }
    catch (err) {
        return null;
    }
}
