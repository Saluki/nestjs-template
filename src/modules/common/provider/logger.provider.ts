
import { Logger, LoggerInstance, transports } from 'winston';
import { Service } from '../../tokens';

export const loggerProvider = {

    provide: Service.LOGGER,
    useFactory: (): LoggerInstance => new Logger({

        transports: [
            new transports.Console({
                level: 'info',
                silent: (process.env.NODE_ENV === 'testing'),
                colorize: (process.env.NODE_ENV !== 'production'),
                timestamp: true,
                showLevel: true
            })
        ]

    })

};
