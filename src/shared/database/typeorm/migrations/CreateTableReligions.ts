import {MigrationInterface, QueryRunner, Table, TableIndex} from 'typeorm';
import { RELIGION, IDX_RELIGION_ID } from './options/TableReligions';

export class CreateTableReligions1717001676421 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
                        // @ts-ignore address
                        await queryRunner.createTable(new Table(RELIGION)); 
                        await queryRunner.createIndex('religion', new TableIndex(IDX_RELIGION_ID));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex('religion', 'IDX_RELIGION_ID');
        await queryRunner.dropTable('religion');
    }

}
