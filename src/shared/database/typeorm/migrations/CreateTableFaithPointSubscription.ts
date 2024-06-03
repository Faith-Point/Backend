import {MigrationInterface, QueryRunner, Table, TableIndex} from 'typeorm';
import { FAITH_POINT_SUBSCRIPTION, IDX_FAITH_POINT_SUBSCRIPTION_ID, IDX_FAITH_POINT_SUBSCRIPTION_FAITH_POINT_ID, IDX_FAITH_POINT_SUBSCRIPTION_USER_ID } from './options/TableFaithPointSubscription';

export class CreateTableFaithPointSubscription1717001737051 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
                        // @ts-ignore address
                        await queryRunner.createTable(new Table(FAITH_POINT_SUBSCRIPTION));
                        await queryRunner.createIndex('faith_point_subscription', new TableIndex(IDX_FAITH_POINT_SUBSCRIPTION_ID));
                        await queryRunner.createIndex('faith_point_subscription', new TableIndex(IDX_FAITH_POINT_SUBSCRIPTION_FAITH_POINT_ID));
                        await queryRunner.createIndex('faith_point_subscription', new TableIndex(IDX_FAITH_POINT_SUBSCRIPTION_USER_ID));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex('faith_point_subscription', 'IDX_FAITH_POINT_SUBSCRIPTION_USER_ID');
        await queryRunner.dropIndex('faith_point_subscription', 'IDX_FAITH_POINT_SUBSCRIPTION_FAITH_POINT_ID');
        await queryRunner.dropIndex('faith_point_subscription', 'IDX_FAITH_POINT_SUBSCRIPTION_ID');
        await queryRunner.dropTable('faith_point_subscription');
    }

}
