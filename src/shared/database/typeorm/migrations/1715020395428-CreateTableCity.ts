import {MigrationInterface, QueryRunner, Table, TableIndex} from 'typeorm';
import { CITY, IDX_CITY_ID, IDX_CITY_STATE_ID } from './options/TableCity';

export class CreateTableCity1715020395428 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
                // @ts-ignore city
                await queryRunner.createTable(new Table(CITY));
                await queryRunner.createIndex('city', new TableIndex(IDX_CITY_ID));
                await queryRunner.createIndex('city', new TableIndex(IDX_CITY_STATE_ID));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex('city', 'IDX_CITY_STATE_ID');
        await queryRunner.dropIndex('city', 'IDX_CITY_ID');
        await queryRunner.dropTable('city');
    }

}
