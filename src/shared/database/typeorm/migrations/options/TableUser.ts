export const USER = {
  name: 'user',
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
      },
      {
          name: 'email',
          type: 'varchar',
          precision: 100,
          isUnique: true,
      },
      {
          name: 'password',
          type: 'varchar',
          precision: 255,
      },
      {
          name: 'role_id',
          type: 'varchar',
      },
      {
          name: 'address_id',
          type: 'varchar',
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
  foreignKeys: [
      {
          name: 'FK_USER_ROLE_ID',
          referencedTableName: 'role',
          referencedColumnNames: ['id'],
          columnNames: ['role_id'],
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
      },
      {
          name: 'FK_USER_ADDRESS_ID',
          referencedTableName: 'address',
          referencedColumnNames: ['id'],
          columnNames: ['address_id'],
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
      },
  ],
};

export const IDX_USER_ID = {
  name: 'IDX_USER_ID',
  columnNames: ['id'],
};

export const IDX_USER_EMAIL = {
  name: 'IDX_USER_EMAIL',
  columnNames: ['email'],
};

export const IDX_USER_ROLE_ID = {
  name: 'IDX_USER_ROLE_ID',
  columnNames: ['role_id'],
};

export const IDX_USER_ADDRESS_ID = {
  name: 'IDX_USER_ADDRESS_ID',
  columnNames: ['address_id'],
};
