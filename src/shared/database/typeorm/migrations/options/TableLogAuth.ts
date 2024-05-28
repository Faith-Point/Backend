export const LOG_AUTH = {
  name: 'log_auth',
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
          isNullable: false,
      },
      {
        name: 'log',
        type: 'enum',
        precision: 1,
        isNullable: false,
        enum: ['login', 'logout', 'refresh'],
      },
      {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()',
          isNullable: true,
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

export const IDX_LOG_AUTH_ID = {
	name: 'IDX_LOG_AUTH_ID',
	columnNames: ['id'],
};

export const IDX_LOG_AUTH_USERS_ID = {
	name: 'IDX_LOG_AUTH_USERS_ID',
	columnNames: ['user_id'],
};
