import {MigrationInterface, QueryRunner, Table, TableIndex} from 'typeorm';
import { FAITH_POINT_RATING, IDX_FAITH_POINT_RATING_ID, IDX_FAITH_POINT_RATING_FAITH_POINT_ID, IDX_FAITH_POINT_RATING_USER_ID } from './options/TableFaithPointRating';

export class CreateTableFaithPointRating1717001747131 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
                        // @ts-ignore address
                        await queryRunner.createTable(new Table(FAITH_POINT_RATING));
                        await queryRunner.createIndex('faith_point_rating', new TableIndex(IDX_FAITH_POINT_RATING_ID));
                        await queryRunner.createIndex('faith_point_rating', new TableIndex(IDX_FAITH_POINT_RATING_FAITH_POINT_ID));                        
                        await queryRunner.createIndex('faith_point_rating', new TableIndex(IDX_FAITH_POINT_RATING_USER_ID));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex('faith_point_rating', 'IDX_FAITH_POINT_RATING_USER_ID');
        await queryRunner.dropIndex('faith_point_rating', 'IDX_FAITH_POINT_RATING_FAITH_POINT_ID');
        await queryRunner.dropIndex('faith_point_rating', 'IDX_FAITH_POINT_RATING_ID');
        await queryRunner.dropTable('faith_point_rating');
    }

}
