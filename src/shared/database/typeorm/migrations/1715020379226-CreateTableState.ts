import {MigrationInterface, QueryRunner, Table, TableIndex} from 'typeorm';
import { IDX_STATE_COUNTRY_ID, IDX_STATE_ID, STATE } from "./options/TableState";

export class CreateTableState1715020379226 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
                // @ts-ignore state
                await queryRunner.createTable(new Table(STATE));
                await queryRunner.createIndex('state', new TableIndex(IDX_STATE_ID));
                await queryRunner.createIndex('state', new TableIndex(IDX_STATE_COUNTRY_ID));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex('state', 'IDX_STATE_COUNTRY_ID');
        await queryRunner.dropIndex('state', 'IDX_STATE_ID');
        await queryRunner.dropTable('state');
    }

}
