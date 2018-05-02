
import * as Joi from 'joi';
import * as _ from 'lodash';

import { Service } from '../../tokens';
import { Config } from '../model';

export const configProvider = {

    provide: Service.CONFIG,
    useFactory: (config): Config => {

        const env = process.env;

        const result = Joi.validate(env, Joi.object().unknown().keys({
            MYSQL_HOST: Joi.string().required(),
            MYSQL_PORT: Joi.string().required(),
            MYSQL_USER: Joi.string().required(),
            MYSQL_PASSWORD: Joi.string().required(),
            MYSQL_DATABASE: Joi.string().required(),
            JWT_SECRET: Joi.string().required()
        }));

        if (result.error) {
            throw new Error('Configuration not valid ' + result.error.message);
        }

        return {
            MYSQL_HOST: `${env.MYSQL_HOST}`,
            MYSQL_PORT: _.toNumber(env.MYSQL_PORT),
            MYSQL_USER: `${env.MYSQL_USER}`,
            MYSQL_PASSWORD: `${env.MYSQL_PASSWORD}`,
            MYSQL_DATABASE: `${env.MYSQL_DATABASE}`,
            JWT_SECRET: `${env.JWT_SECRET}`
        };
    }

};
