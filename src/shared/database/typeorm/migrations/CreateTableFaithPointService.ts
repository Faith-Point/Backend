import {MigrationInterface, QueryRunner, Table, TableIndex} from 'typeorm';
import { FAITH_POINT_SERVICE, IDX_FAITH_POINT_SERVICE_ID, IDX_FAITH_POINT_SERVICE_FAITH_POINT_ID } from './options/TableFaithPointService';

export class CreateTableFaithPointService1717001726029 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
                        // @ts-ignore address
                        await queryRunner.createTable(new Table(FAITH_POINT_SERVICE));
                        await queryRunner.createIndex('faith_point_service', new TableIndex(IDX_FAITH_POINT_SERVICE_ID));
                        await queryRunner.createIndex('faith_point_service', new TableIndex(IDX_FAITH_POINT_SERVICE_FAITH_POINT_ID));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex('faith_point_service', 'IDX_FAITH_POINT_SERVICE_FAITH_POINT_ID');
        await queryRunner.dropIndex('faith_point_service', 'IDX_FAITH_POINT_SERVICE_ID');
        await queryRunner.dropTable('faith_point_service');
    }

}
