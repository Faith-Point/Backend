import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';
import { LOG_AUTH, IDX_LOG_AUTH_ID, IDX_LOG_AUTH_USERS_ID } from './options/TableLogAuth';

export class CreateTableLogAuth1715741972465 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // @ts-ignore log_auth
        await queryRunner.createTable(new Table(LOG_AUTH));
        await queryRunner.createIndex('log_auth', new TableIndex(IDX_LOG_AUTH_ID));
        await queryRunner.createIndex('log_auth', new TableIndex(IDX_LOG_AUTH_USERS_ID));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex('log_auth', 'IDX_LOG_AUTH_USERS_ID');
        await queryRunner.dropIndex('log_auth', 'IDX_LOG_AUTH_ID');
        await queryRunner.dropTable('log_auth');
    }

}
