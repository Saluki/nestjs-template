import * as Joi from 'joi';
import * as _ from 'lodash';

import { Service } from '../../tokens';
import { Config } from '../model';

export const configProvider = {

    provide: Service.CONFIG,
    useFactory: (): Config => {

        const env = process.env;
        const validationSchema = Joi.object().unknown().keys({
            API_PORT: Joi.string().required(),
            API_PREFIX: Joi.string().required(),
            SWAGGER_ENABLE: Joi.string().required(),
            TYPEORM_CONNECTION: Joi.string().required(),
            TYPEORM_HOST: Joi.string().required(),
            TYPEORM_PORT: Joi.string().required(),
            TYPEORM_USERNAME: Joi.string().required(),
            TYPEORM_PASSWORD: Joi.string().required(),
            TYPEORM_DATABASE: Joi.string().required(),
            TYPEORM_ENTITIES: Joi.string().required(),
            JWT_SECRET: Joi.string().required(),
            JWT_ISSUER: Joi.string().required(),
            PASSENGERS_ALLOWED: Joi.string().valid('yes', 'no').required()
        });

        const result = validationSchema.validate(env);

        if (result.error) {
            throw new Error('Configuration not valid: ' + result.error.message);
        }

        return {
            API_PORT: _.toNumber(env.API_PORT),
            API_PREFIX: `${env.API_PREFIX}`,
            SWAGGER_ENABLE: _.toNumber(env.SWAGGER_ENABLE),
            TYPEORM_CONNECTION: `${env.TYPEORM_CONNECTION}`,
            TYPEORM_HOST: `${env.TYPEORM_HOST}`,
            TYPEORM_PORT: _.toNumber(env.TYPEORM_PORT),
            TYPEORM_USERNAME: `${env.TYPEORM_USERNAME}`,
            TYPEORM_PASSWORD: `${env.TYPEORM_PASSWORD}`,
            TYPEORM_DATABASE: `${env.TYPEORM_DATABASE}`,
            TYPEORM_ENTITIES: `${env.TYPEORM_ENTITIES}`,
            JWT_SECRET: `${env.JWT_SECRET}`,
            PASSENGERS_ALLOWED: `${env.PASSENGERS_ALLOWED}`
        };
    }

};
