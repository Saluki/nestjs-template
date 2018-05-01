
import * as orm from 'typeorm';

import { Passenger } from '../../passenger/model';
import { Service } from '../../tokens';
import { Config } from '../config';

export const storageProvider = {

    provide: Service.STORAGE,
    useFactory: async (config: Config) => orm.createConnection({
        type: 'mysql',
        host: config.MYSQL_HOST,
        port: config.MYSQL_PORT,
        username: config.MYSQL_USER,
        password: config.MYSQL_PASSWORD,
        database: config.MYSQL_DATABASE,
        entities: [
            Passenger
        ],
        // TODO
        // Disable synchronization in production
        // And move to migrations
        // Synchronize: (process.env.NODE_ENV==='testing' || process.env.NODE_ENV==='develop'),
        synchronize: true,
        // TODO
        // May be handy to provide env FLAG to enable debug
        logging: false
    }),
    inject: [Service.CONFIG]

};
