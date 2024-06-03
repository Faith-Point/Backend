export const CONTACT = {
  name: 'contact',
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
          name: 'email',
          type: 'varchar',
          length: 100,
          isNullable: false,            
      },
      {
          name: 'phone',
          type: 'varchar',
          length: 20,
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
};

export const IDX_CONTACT_ID = {
  name: 'IDX_CONTACT_ID',
  columnNames: ['id'],
};
