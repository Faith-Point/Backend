import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';
import { USER, IDX_USER_ID, IDX_USER_EMAIL, IDX_USER_ROLE_ID, IDX_USER_ADDRESS_ID } from './options/TableUser';

export class CreateTableUser1715711903438 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // @ts-ignore user
        await queryRunner.createTable(new Table(USER));
        await queryRunner.createIndex('user', new TableIndex(IDX_USER_ID));
        await queryRunner.createIndex('user', new TableIndex(IDX_USER_EMAIL));
        await queryRunner.createIndex('user', new TableIndex(IDX_USER_ROLE_ID));
        await queryRunner.createIndex('user', new TableIndex(IDX_USER_ADDRESS_ID));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex('user', 'IDX_USER_ADDRESS_ID');
        await queryRunner.dropIndex('user', 'IDX_USER_ROLE_ID');
        await queryRunner.dropIndex('user', 'IDX_USER_EMAIL');
        await queryRunner.dropIndex('user', 'IDX_USER_ID');
        await queryRunner.dropTable('user');
    }

}
