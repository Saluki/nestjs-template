
import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { TableOptions } from 'typeorm/schema-builder/options/TableOptions';

export class PassengerMigration1533302442199 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        const tableOptions: TableOptions = {
            name: 'passengers',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
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

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable('passengers');
    }

}
