export const RELIGION = {
  name: 'religion',
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
};

export const IDX_RELIGION_ID = {
  name: 'IDX_RELIGION_ID',
  columnNames: ['id'],
};
