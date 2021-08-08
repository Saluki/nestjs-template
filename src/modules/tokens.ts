/**
 * These tokens can be used for NestJS custom providers. For each required
 * custom provider, declare a new string below and use in the whole application.
 *
 * @see https://docs.nestjs.com/fundamentals/custom-providers
 */
export enum Service {

    STORAGE = 'storage.service',

    CONFIG = 'config.service',

}

export enum Role {

    RESTRICTED = 'restricted'

}
