import {MigrationInterface, QueryRunner, Table, TableIndex} from 'typeorm';
import { CONTACT, IDX_CONTACT_ID } from './options/TableContact';

export class CreateTableContact1717001663705 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
                        // @ts-ignore address
                        await queryRunner.createTable(new Table(CONTACT)); 
                        await queryRunner.createIndex('contact', new TableIndex(IDX_CONTACT_ID));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex('contact', 'IDX_CONTACT_ID');
        await queryRunner.dropTable('contact');
    }

}
