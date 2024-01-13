import { CallHandler, ExecutionContext, HttpStatus, Injectable, NestInterceptor } from '@nestjs/common';
import { FastifyRequest, FastifyReply } from 'fastify';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { LoggerService } from '../provider';

@Injectable()
export class LogInterceptor implements NestInterceptor {

    public constructor(
        private readonly logger: LoggerService
    ) { }

    public intercept(context: ExecutionContext, next: CallHandler): Observable<FastifyReply> {

        const startTime = new Date().getTime();
        const request = context.switchToHttp().getRequest<FastifyRequest>();

        return next.handle().pipe(
            map((data: FastifyReply) => {
                const responseStatus = (request.method === 'POST') ? HttpStatus.CREATED : HttpStatus.OK;
                this.logger.info(`${this.getTimeDelta(startTime)}ms ${request.ip} ${responseStatus} ${request.method} ${this.getUrl(request)}`);
                return data;
            }),
            catchError((err: unknown) => {
                // Log fomat inspired by the Squid docs
                // See https://docs.trafficserver.apache.org/en/6.1.x/admin-guide/monitoring/logging/log-formats.en.html
                const status = this.hasStatus(err) ? err.status : 'XXX';
                this.logger.error(`${this.getTimeDelta(startTime)}ms ${request.ip} ${status} ${request.method} ${this.getUrl(request)}`);
                return throwError(err);
            })
        );
    }

    private getTimeDelta(startTime: number): number {
        return new Date().getTime() - startTime;
    }

    private getUrl(request: FastifyRequest): string {
        return `${request.protocol}://${request.hostname}${request.originalUrl}`;
    }

    private hasStatus(err: unknown): err is { status: number } {
        return (err as { status: number })?.status !== undefined && typeof (err as { status: number }).status === 'number';
    }

}
