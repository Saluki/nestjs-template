
import { ExecutionContext, HttpStatus, Inject, Injectable, NestInterceptor } from '@nestjs/common';
import { Request } from 'express';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { LoggerInstance } from 'winston';

import { Service } from '../../tokens';

/* tslint:disable:no-any */

@Injectable()
export class LogInterceptor implements NestInterceptor {

    public constructor(
        @Inject(Service.LOGGER)
        private readonly logger: LoggerInstance
    ) { }

    public intercept(context: ExecutionContext, call$: Observable<any>): Observable<any> {

        const startTime = new Date().getMilliseconds();
        const request = context.switchToHttp().getRequest();

        return call$.pipe(
            map(data => {
                const responseStatus = (request.method === 'POST') ? HttpStatus.CREATED : HttpStatus.OK;
                this.logger.info(`${this.getTimeDelta(startTime)} ${request.ip} ${responseStatus} ${request.method} ${this.getUrl(request)}`);
                return data;
            }),
            catchError(err => {
                // Log fomat inspired by the Squid docs
                // See https://docs.trafficserver.apache.org/en/6.1.x/admin-guide/monitoring/logging/log-formats.en.html
                this.logger.error(`${this.getTimeDelta(startTime)} ${request.ip} ${err.status} ${request.method} ${this.getUrl(request)}`);
                return throwError(err);
            })
        );
    }

    private getTimeDelta(startTime: number): number {
        return new Date().getMilliseconds() - startTime;
    }

    private getUrl(request: Request): string {
        return `${request.protocol}://${request.get('host')}${request.originalUrl}`;
    }

}
