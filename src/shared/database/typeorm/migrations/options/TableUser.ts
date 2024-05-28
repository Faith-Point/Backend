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
          isNullable: false,
      },
      {
          name: 'email',
          type: 'varchar',
          precision: 100,
          isUnique: true,
          isNullable: false,
      },
      {
          name: 'password',
          type: 'varchar',
          precision: 255,
          isNullable: false,
      },
      {
          name: 'role_id',
          type: 'varchar',
          isNullable: false,
      },
      {
          name: 'address_id',
          type: 'varchar',
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
          default: 'now()',
          isNullable: true,
      },
      {
          name: 'deleted_at',
          type: 'timestamp',
          default: 'null',
          isNullable: true,
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
