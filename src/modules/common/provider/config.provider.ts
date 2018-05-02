
import * as _ from 'lodash';

import { Service } from '../../tokens';
import { Config } from '../model';

export const configProvider = {

    provide: Service.CONFIG,
    useFactory: (config): Config => {

        const env: { [a: string]: string } = process.env;

        return {
            MYSQL_HOST: env.MYSQL_HOST,
            MYSQL_PORT: _.toNumber(env.MYSQL_PORT),
            MYSQL_USER: env.MYSQL_USER,
            MYSQL_PASSWORD: env.MYSQL_PASSWORD,
            MYSQL_DATABASE: env.MYSQL_DATABASE,
            JWT_SECRET: env.JWT_SECRET
        };
    }

};
