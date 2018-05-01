
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { PassengerData } from '.';

@Entity()
export class Passenger {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ name: 'first_name'})
    public firstName: string;

    @Column({ name: 'last_name'})
    public lastName: string;

    public buildData(): PassengerData {

        return {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName
        };
    }

}
