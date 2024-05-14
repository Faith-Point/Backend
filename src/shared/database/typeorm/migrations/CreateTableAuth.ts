import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';
import { AUTH, IDX_AUTH_ID, IDX_AUTH_USER_ID } from './options/TableAuth';

export class CreateTableAuth1715711925278 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // @ts-ignore auth
        await queryRunner.createTable(new Table(AUTH));
        await queryRunner.createIndex('auth', new TableIndex(IDX_AUTH_ID));
        await queryRunner.createIndex('auth', new TableIndex(IDX_AUTH_USER_ID));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex('auth', 'IDX_AUTH_USER_ID');
        await queryRunner.dropIndex('auth', 'IDX_AUTH_ID');
        await queryRunner.dropTable('auth');
    }

}
