
import { Connection } from 'typeorm';

import { Repository, Service } from '../../tokens';
import { Passenger } from '../model';

export const passengerRepositoryProvider = {

    provide: Repository.PASSENGER,
    useFactory: (connection: Connection) => connection.getRepository(Passenger),
    inject: [Service.STORAGE]

};
