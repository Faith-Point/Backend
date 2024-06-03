import {MigrationInterface, QueryRunner, Table, TableIndex} from 'typeorm';
import { FAITH_POINT, IDX_FAITH_POINT_ID, IDX_FAITH_POINT_ADDRESS_ID, IDX_FAITH_POINT_CONTACT_ID, IDX_FAITH_POINT_RELIGION_ID, IDX_FAITH_POINT_SOCIAL_MEDIA_ID } from './options/TableFaithPoint';

export class CreateTableFaithPoint1717001688475 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
                        // @ts-ignore 
                        await queryRunner.createTable(new Table(FAITH_POINT));
                        await queryRunner.createIndex('faith_point', new TableIndex(IDX_FAITH_POINT_ID));
                        await queryRunner.createIndex('faith_point', new TableIndex(IDX_FAITH_POINT_ADDRESS_ID));
                        await queryRunner.createIndex('faith_point', new TableIndex(IDX_FAITH_POINT_CONTACT_ID));
                        await queryRunner.createIndex('faith_point', new TableIndex(IDX_FAITH_POINT_RELIGION_ID));
                        await queryRunner.createIndex('faith_point', new TableIndex(IDX_FAITH_POINT_SOCIAL_MEDIA_ID));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex('faith_point', 'IDX_FAITH_POINT_SOCIAL_MEDIA_ID');
        await queryRunner.dropIndex('faith_point', 'IDX_FAITH_POINT_RELIGION_ID');
        await queryRunner.dropIndex('faith_point', 'IDX_FAITH_POINT_CONTACT_ID');
        await queryRunner.dropIndex('faith_point', 'IDX_FAITH_POINT_ADDRESS_ID');
        await queryRunner.dropIndex('faith_point', 'IDX_FAITH_POINT_ID');
        await queryRunner.dropTable('faith_point');
    }

}
