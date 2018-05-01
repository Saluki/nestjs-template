
import { ExecutionContext, HttpStatus, Inject, Interceptor, NestInterceptor } from '@nestjs/common';
import { Request } from 'express';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { LoggerInstance } from 'winston';

import { Service } from '../../tokens';

/* tslint:disable:no-any */

@Interceptor()
export class LogInterceptor implements NestInterceptor {

    public constructor(
        @Inject(Service.LOGGER)
        private readonly logger: LoggerInstance
    ) { }

    public intercept(request: Request, context: ExecutionContext, stream: Observable<any>): Observable<any> {

        const startTime = new Date().getMilliseconds();

        return stream
            .map(data => {
                const responseStatus = (request.method === 'POST') ? HttpStatus.CREATED : HttpStatus.OK;
                this.logger.info(`${this.getTimeDelta(startTime)} ${request.ip} ${responseStatus} ${request.method} ${this.getUrl(request)}`);
                return data;
            })
            .catch(err => {
                // Log fomat inspired by the Squid docs
                // See https://docs.trafficserver.apache.org/en/6.1.x/admin-guide/monitoring/logging/log-formats.en.html
                this.logger.error(`${this.getTimeDelta(startTime)} ${request.ip} ${err.status} ${request.method} ${this.getUrl(request)}`); return Observable.throw(err);
            });
    }

    private getTimeDelta(startTime: number): number {
        return new Date().getMilliseconds() - startTime;
    }

    private getUrl(request: Request): string {
        return `${request.protocol}://${request.get('host')}${request.originalUrl}`;
    }

}
