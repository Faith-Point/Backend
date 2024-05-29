export const FAITH_POINT_SUBSCRIPTION = {
  name: 'faith_point_subscription',
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
          name: 'is_active',
          type: 'boolean',
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
      {
          columnNames: ['user_id'],
          referencedTableName: 'user',
          referencedColumnNames: ['id'],
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
      },
  ],
};

export const IDX_FAITH_POINT_SUBSCRIPTION_ID = {
  name: 'IDX_FAITH_POINT_SUBSCRIPTION_ID',
  columnNames: ['id'],
};

export const IDX_FAITH_POINT_SUBSCRIPTION_FAITH_POINT_ID = {
  name: 'IDX_FAITH_POINT_SUBSCRIPTION_FAITH_POINT_ID',
  columnNames: ['faith_point_id'],
};

export const IDX_FAITH_POINT_SUBSCRIPTION_USER_ID = {
  name: 'IDX_FAITH_POINT_SUBSCRIPTION_USER_ID',
  columnNames: ['user_id'],
};
