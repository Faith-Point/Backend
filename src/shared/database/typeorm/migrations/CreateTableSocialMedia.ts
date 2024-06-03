import {MigrationInterface, QueryRunner, Table, TableIndex} from 'typeorm';
import { SOCIAL_MEDIA, IDX_SOCIAL_MEDIA_ID  } from './options/TableSocialMedia';

export class CreateTableSocialMedia1717001644218 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
                        // @ts-ignore address
                        await queryRunner.createTable(new Table(SOCIAL_MEDIA));
                        await queryRunner.createIndex('social_media', new TableIndex(IDX_SOCIAL_MEDIA_ID));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex('social_media', 'IDX_SOCIAL_MEDIA_ID');
        await queryRunner.dropTable('social_media');
    }

}
