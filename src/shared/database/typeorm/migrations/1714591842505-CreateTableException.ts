import {MigrationInterface, QueryRunner, Table, TableIndex} from 'typeorm';
import { LOG_EXCEPTION, IDX_LOG_EXCEPTION_ID } from "./options/TableLogException";

export class CreateTableException1714591842505 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // @ts-ignore logException
       await queryRunner.createTable(new Table(LOG_EXCEPTION));
       await queryRunner.createIndex('log_exception', new TableIndex(IDX_LOG_EXCEPTION_ID));   
   }

   public async down(queryRunner: QueryRunner): Promise<void> {
       await queryRunner.dropIndex('log_exception', 'IDX_LOG_EXCEPTION_ID');
       await queryRunner.dropTable('log_exception');
   }

}
