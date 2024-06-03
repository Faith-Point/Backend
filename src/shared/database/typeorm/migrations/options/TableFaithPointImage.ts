export const FAITH_POINT_IMAGE = {
  name: 'faith_point_image',
  columns: [
      {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          generationStrategy: 'uuid',
      },
      {
          name: 'url',
          type: 'varchar',
          length: 100,
          isNullable: false,
      },
      {
          name: 'faith_point_id',
          type: 'uuid',
          isNullable: false,
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
          columnNames: ['faith_point_id'],
          referencedTableName: 'faith_point',
          referencedColumnNames: ['id'],
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
      },
  ],
};

export const IDX_FAITH_POINT_IMAGE_ID = {
  name: 'IDX_FAITH_POINT_IMAGE_ID',
  columnNames: ['id'],
};

export const IDX_FAITH_POINT_IMAGE_FAITH_POINT_ID = {
  name: 'IDX_FAITH_POINT_IMAGE_FAITH_POINT_ID',
  columnNames: ['faith_point_id'],
};
