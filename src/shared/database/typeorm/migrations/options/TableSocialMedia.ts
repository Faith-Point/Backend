export const SOCIAL_MEDIA = {
  name: 'social_media',
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
          name: 'link',
          type: 'varchar',
          length: 100,
          isNullable: true,
      },
      {
          name: 'icon',
          type: 'varchar',
          length: 50,
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

export const IDX_SOCIAL_MEDIA_ID = {
name: 'IDX_SOCIAL_MEDIA_ID',
columnNames: ['id'],
};
