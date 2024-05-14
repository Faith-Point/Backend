export const AUTH = {
  name: 'auth',
  columns: [
      {
          name: 'id',
          type: 'varchar',
          isPrimary: true,
          generationStrategy: 'uuid',
      },
      {
          name: 'user_id',
          type: 'varchar',
      },
      {
          name: 'token',
          type: 'varchar',
          precision: 255,
      },
      {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()',
      },
      {
          name: 'expires_at',
          type: 'timestamp',
      },
  ],
  foreignKeys: [
      {
          name: 'FK_AUTH_USER_ID',
          referencedTableName: 'user',
          referencedColumnNames: ['id'],
          columnNames: ['user_id'],
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
      },
  ],
};

export const IDX_AUTH_ID = {
  name: 'IDX_AUTH_ID',
  columnNames: ['id'],
};

export const IDX_AUTH_USER_ID = {
  name: 'IDX_AUTH_USER_ID',
  columnNames: ['user_id'],
};
