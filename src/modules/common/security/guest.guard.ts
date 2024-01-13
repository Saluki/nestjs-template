import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { FastifyRequest } from 'fastify';
import { Observable } from 'rxjs';

@Injectable()
export class GuestGuard implements CanActivate {

    public canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {

        const header = context.switchToHttp().getRequest<FastifyRequest>().headers.authorization;
        return header === undefined || !header;
    }

}
