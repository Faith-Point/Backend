export const ROLE = {
    name: 'role',
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

export const IDX_ROLE_ID = {
    name: 'IDX_ROLE_ID',
    columnNames: ['id'],
};
