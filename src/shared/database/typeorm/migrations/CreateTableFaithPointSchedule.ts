import {MigrationInterface, QueryRunner, Table, TableIndex} from 'typeorm';
import { FAITH_POINT_SCHEDULE, IDX_FAITH_POINT_SCHEDULE_ID, IDX_FAITH_POINT_SCHEDULE_FAITH_POINT_ID } from './options/TableFaithPointSchedule';

export class CreateTableFaithPointSchedule1717001716561 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
                        // @ts-ignore address
                        await queryRunner.createTable(new Table(FAITH_POINT_SCHEDULE));
                        await queryRunner.createIndex('faith_point_schedule', new TableIndex(IDX_FAITH_POINT_SCHEDULE_ID));
                        await queryRunner.createIndex('faith_point_schedule', new TableIndex(IDX_FAITH_POINT_SCHEDULE_FAITH_POINT_ID));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex('faith_point_schedule', 'IDX_FAITH_POINT_SCHEDULE_FAITH_POINT_ID');
        await queryRunner.dropIndex('faith_point_schedule', 'IDX_FAITH_POINT_SCHEDULE_ID');
        await queryRunner.dropTable('faith_point_schedule');
    }

}
