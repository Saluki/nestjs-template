
import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { TableOptions } from 'typeorm/schema-builder/options/TableOptions';

export class PassengerMigration1533302442199 implements MigrationInterface {

    // tslint:disable-next-line:no-any
    public async up(queryRunner: QueryRunner): Promise<any> {

        const tableOptions: TableOptions = {
            name: 'passengers',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true
                },
                {
                    name: 'first_name',
                    type: 'varchar',
                    length: '50'
                },
                {
                    name: 'last_name',
                    type: 'varchar',
                    length: '50'
                }
            ]
        };

        await queryRunner.createTable(
            new Table(tableOptions)
        );
    }

    // tslint:disable-next-line:no-any
    public async down(queryRunner: QueryRunner): Promise<any> {

        await queryRunner.dropTable('passengers');
    }

}
