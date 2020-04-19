import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { PassengerData } from '.';

@Entity({ name: 'passengers' })
export class Passenger {

    public static readonly NAME_LENGTH = 50;

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ name: 'first_name', length: Passenger.NAME_LENGTH })
    public firstName: string;

    @Column({ name: 'last_name', length: Passenger.NAME_LENGTH })
    public lastName: string;

    public buildData(): PassengerData {

        return {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName
        };
    }

}
