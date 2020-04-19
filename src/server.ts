import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';

import { INestApplication } from '@nestjs/common';
import { ApplicationModule } from './modules/app.module';
import { CommonModule, LogInterceptor } from './modules/common';

const API_DEFAULT_PORT = 3000;
const API_DEFAULT_PREFIX = '/api/v1/';

const SWAGGER_TITLE = 'Passenger API';
const SWAGGER_DESCRIPTION = 'API used for passenger management';
const SWAGGER_PREFIX = '/docs';

async function bootstrap(): Promise<void> {

    const app = await NestFactory.create(ApplicationModule);

    app.setGlobalPrefix(process.env.API_PREFIX || API_DEFAULT_PREFIX);

    if (!process.env.SWAGGER_ENABLE || process.env.SWAGGER_ENABLE === '1') {
        createSwagger(app);
    }

    app.use(bodyParser.json());
    app.use(helmet());

    const logInterceptor = app.select(CommonModule).get(LogInterceptor);
    app.useGlobalInterceptors(logInterceptor);

    await app.listen(process.env.API_PORT || API_DEFAULT_PORT);
}

function createSwagger(app: INestApplication) {

    const version = require('../package.json').version || '';

    const options = new DocumentBuilder()
        .setTitle(SWAGGER_TITLE)
        .setDescription(SWAGGER_DESCRIPTION)
        .setVersion(version)
        .addBearerAuth()
        .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup(SWAGGER_PREFIX, app, document);
}

// tslint:disable-next-line:no-console
bootstrap().catch(err => console.error(err));
