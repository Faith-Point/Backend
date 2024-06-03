export const FAITH_POINT_SERVICE = {
  name: 'faith_point_service',
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

export const IDX_FAITH_POINT_SERVICE_ID = {
  name: 'IDX_FAITH_POINT_SERVICE_ID',
  columnNames: ['id'],
};

export const IDX_FAITH_POINT_SERVICE_FAITH_POINT_ID = {
  name: 'IDX_FAITH_POINT_SERVICE_FAITH_POINT_ID',
  columnNames: ['faith_point_id'],
};
