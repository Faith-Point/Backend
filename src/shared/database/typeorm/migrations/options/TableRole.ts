export const ROLE = {
  name: 'role',
  columns: [
      {
          name: 'id',
          type: 'varchar',
          isPrimary: true,
          generationStrategy: 'uuid',
      },
      {
          name: 'name',
          type: 'varchar',
          precision: 50,
          isUnique: true,
      },
      {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()',
      },
      {
          name: 'updated_at',
          type: 'timestamp',
          default: 'now()',
      },
      {
          name: 'deleted_at',
          type: 'timestamp',
          default: 'null',
      },
  ],
};

export const IDX_ROLE_ID = {
  name: 'IDX_ROLE_ID',
  columnNames: ['id'],
};
