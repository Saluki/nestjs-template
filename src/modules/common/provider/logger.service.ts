
import { Logger, LoggerInstance, transports } from 'winston';

export class LoggerService {

    private readonly instance: LoggerInstance;

    public constructor() {

        this.instance = new Logger({
            transports: [
                new transports.Console({
                    level: 'info',
                    silent: (process.env.NODE_ENV === 'testing'),
                    colorize: (process.env.NODE_ENV !== 'production'),
                    timestamp: true,
                    showLevel: true
                })
            ]
        });
    }

    public info(message: string) {
        this.instance.info(message);
    }

    public error(message: string) {
        this.instance.error(message);
    }

}
