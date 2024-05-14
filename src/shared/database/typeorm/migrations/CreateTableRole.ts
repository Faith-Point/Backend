import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';
import { ROLE, IDX_ROLE_ID } from './options/TableRole';

export class CreateTableRole1715710650091 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // @ts-ignore role
        await queryRunner.createTable(new Table(ROLE));
        await queryRunner.createIndex('role', new TableIndex(IDX_ROLE_ID));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex('role', 'IDX_ROLE_ID');
        await queryRunner.dropTable('role');
    }

}
