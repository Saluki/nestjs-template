import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class GuestGuard implements CanActivate {

    public canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {

        const header = context.switchToHttp().getRequest<Request>().header('Authorization');
        return header === undefined || !header;
    }

}
