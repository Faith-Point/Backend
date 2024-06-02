export const FAITH_POINT = {
  name: 'faith_point',
  columns: [
      {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          generationStrategy: 'uuid',
      },
      {
          name: 'name',
          type: 'varchar',
          length: 50,
          isNullable: false,
      },
      {
          name: 'description',
          type: 'varchar',
          length: 100,
          isNullable: true,
      },
      {
          name: 'address_id',
          type: 'uuid',
          isNullable: true,          
      },
      {
          name: 'religion_id',
          type: 'uuid',
          isNullable: true,
      },
      {
          name: 'contact_id',
          type: 'uuid',
          isNullable: true,
      },
      {
          name: 'social_media_id',
          type: 'uuid',
          isNullable: true,
      },
      {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()',
          isNullable: true,
      },
      {
          name: 'updated_at',
          type: 'timestamp',
          isNullable: true,
      },
      {
          name: 'deleted_at',
          type: 'timestamp',
          isNullable: true,
      },
  ],
  foreignKeys: [
      {
          name: 'FK_FAITH_POINT_ADDRESS_ID_ADDRESS_ID',
          referencedTableName: 'address',
          referencedColumnNames: ['id'],
          columnNames: ['address_id'],
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
      },
      {
          name: 'FK_FAITH_POINT_RELIGION_ID_RELIGION_ID',
          referencedTableName: 'religion',
          referencedColumnNames: ['id'],
          columnNames: ['religion_id'],
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
      },
      {
          name: 'FK_FAITH_POINT_CONTACT_ID_CONTACT_ID',
          referencedTableName: 'contact',
          referencedColumnNames: ['id'],
          columnNames: ['contact_id'],
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
      },
      {
          name: 'FK_FAITH_POINT_SOCIAL_MEDIA_ID_SOCIAL_MEDIA_ID',
          referencedTableName: 'social_media',
          referencedColumnNames: ['id'],
          columnNames: ['social_media_id'],
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
      },
  ],
};

export const IDX_FAITH_POINT_ID = {
  name: 'IDX_FAITH_POINT_ID',
  columnNames: ['id'],
};

export const IDX_FAITH_POINT_ADDRESS_ID = {
  name: 'IDX_FAITH_POINT_ADDRESS_ID',
  columnNames: ['address_id'],
};

export const IDX_FAITH_POINT_RELIGION_ID = {
  name: 'IDX_FAITH_POINT_RELIGION_ID',
  columnNames: ['religion_id'],
};

export const IDX_FAITH_POINT_CONTACT_ID = {
  name: 'IDX_FAITH_POINT_CONTACT_ID',
  columnNames: ['contact_id'],
};

export const IDX_FAITH_POINT_SOCIAL_MEDIA_ID = {
  name: 'IDX_FAITH_POINT_SOCIAL_MEDIA_ID',
  columnNames: ['social_media_id'],
};
