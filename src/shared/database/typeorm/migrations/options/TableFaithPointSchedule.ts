export const FAITH_POINT_SCHEDULE = {
  name: 'faith_point_schedule',
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
          name: 'date',
          type: 'date',
          isNullable: false,      
      },
      {
          name: 'start_time',
          type: 'timestamp',
          isNullable: false,
      },
      {
          name: 'end_time',
          type: 'timestamp',
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

export const IDX_FAITH_POINT_SCHEDULE_ID = {
  name: 'IDX_FAITH_POINT_SCHEDULE_ID',
  columnNames: ['id'],
};

export const IDX_FAITH_POINT_SCHEDULE_FAITH_POINT_ID = {
  name: 'IDX_FAITH_POINT_SCHEDULE_FAITH_POINT_ID',
  columnNames: ['faith_point_id'],
};
