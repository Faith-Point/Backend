import {MigrationInterface, QueryRunner, Table, TableIndex} from 'typeorm';
import { ADDRESS, IDX_ADDRESS_CITY_ID, IDX_ADDRESS_ID } from './options/TableAddress';

export class CreateTableAddress1715020408072 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
                // @ts-ignore address
                await queryRunner.createTable(new Table(ADDRESS));
                await queryRunner.createIndex('address', new TableIndex(IDX_ADDRESS_ID));
                await queryRunner.createIndex('address', new TableIndex(IDX_ADDRESS_CITY_ID));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex('address', 'IDX_ADDRESS_CITY_ID');
        await queryRunner.dropIndex('address', 'IDX_ADDRESS_ID');
        await queryRunner.dropTable('address');
    }

}
