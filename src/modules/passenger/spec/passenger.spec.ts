
import { HttpStatus } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as express from 'express';
import * as request from 'supertest';

import { PassengerModule } from '../passenger.module';

describe('Passenger API', () => {

    const server = express();

    beforeAll(async () => {

        const module = await Test.createTestingModule({
            modules: [PassengerModule],
        }).compile();

        const app = module.createNestApplication(server);
        await app.init();
    });

    it('Should return empty passenger list', () =>

        request(server)
            .get('/passengers')
            .expect(HttpStatus.OK)
            .then(response => {
                expect(response.body).toBeInstanceOf(Array);
                expect(response.body.length).toEqual(0);
            })
    );

    it('Should insert new passenger in the API', () =>

        request(server)
            .post('/passengers')
            .send({
                firstName: 'John',
                lastName: 'Doe'
            })
            .expect(HttpStatus.CREATED)
            .then(response => {
                expect(response.body.firstName).toEqual('John');
                expect(response.body.lastName).toEqual('Doe');
            })
    );

});
