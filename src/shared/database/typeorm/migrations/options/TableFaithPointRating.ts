export const FAITH_POINT_RATING = {
  name: 'faith_point_rating',
  columns: [
      {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          generationStrategy: 'uuid',
      },
      {
          name: 'faith_point_id',
          type: 'uuid',
          isNullable: false,
      },
      {
          name: 'user_id',
          type: 'uuid',
          isNullable: false,
      },
      {
          name: 'rating',
          type: 'integer',
          isNullable: false,
      },
      {
          name: 'comment',
          type: 'varchar',
          length: 100,
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
          columnNames: ['faith_point_id'],
          referencedTableName: 'faith_point',
          referencedColumnNames: ['id'],
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
      },
      {
          columnNames: ['user_id'],
          referencedTableName: 'user',
          referencedColumnNames: ['id'],
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
      },
  ],
};

export const IDX_FAITH_POINT_RATING_ID = {
  name: 'IDX_FAITH_POINT_RATING_ID',
  columnNames: ['id'],
};

export const IDX_FAITH_POINT_RATING_FAITH_POINT_ID = {
  name: 'IDX_FAITH_POINT_RATING_FAITH_POINT_ID',
  columnNames: ['faith_point_id'],
};

export const IDX_FAITH_POINT_RATING_USER_ID = {
  name: 'IDX_FAITH_POINT_RATING_USER_ID',
  columnNames: ['user_id'],
};
