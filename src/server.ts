
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

import { INestApplication } from '@nestjs/common';
import { ApplicationModule } from './modules/app.module';
import { CommonModule } from './modules/common/common.module';
import { LogInterceptor } from './modules/common/flow/log.interceptor';

const API_DEFAULT_PORT = 3000;
const API_DEFAULT_PREFIX = '/api/v1/';

const SWAGGER_TITLE = 'Passenger API';
const SWAGGER_DESCRIPTION = 'API used for passenger management';
const SWAGGER_PREFIX = '/docs';

// tslint:disable-next-line:no-any
async function bootstrap(): Promise<any> {

    const app = await NestFactory.create(ApplicationModule);

    createSwagger(app);

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use(cors());

    app.setGlobalPrefix(API_DEFAULT_PREFIX);

    const logInterceptor = app.select(CommonModule).get(LogInterceptor);
    app.useGlobalInterceptors(logInterceptor);

    await app.listen(API_DEFAULT_PORT);
}

function createSwagger(app: INestApplication) {

    const version = require('../package.json').version || '';

    const options = new DocumentBuilder()
        .setTitle(SWAGGER_TITLE)
        .setDescription(SWAGGER_DESCRIPTION)
        .setVersion(version)
        .setBasePath(API_DEFAULT_PREFIX)
        .setSchemes('https', 'http')
        .addBearerAuth('Bearer', 'header')
        .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup(SWAGGER_PREFIX, app, document);
}

bootstrap();
