import {MigrationInterface, QueryRunner, Table, TableIndex} from 'typeorm';
import { FAITH_POINT_IMAGE, IDX_FAITH_POINT_IMAGE_ID, IDX_FAITH_POINT_IMAGE_FAITH_POINT_ID } from './options/TableFaithPointImage';

export class CreateTableFaithPointImage1717001701176 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
                        // @ts-ignore address
                        await queryRunner.createTable(new Table(FAITH_POINT_IMAGE));
                        await queryRunner.createIndex('faith_point_image', new TableIndex(IDX_FAITH_POINT_IMAGE_ID));
                        await queryRunner.createIndex('faith_point_image', new TableIndex(IDX_FAITH_POINT_IMAGE_FAITH_POINT_ID));                        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex('faith_point_image', 'IDX_FAITH_POINT_IMAGE_FAITH_POINT_ID');
        await queryRunner.dropIndex('faith_point_image', 'IDX_FAITH_POINT_IMAGE_ID');
        await queryRunner.dropTable('faith_point_image');
    }

}
