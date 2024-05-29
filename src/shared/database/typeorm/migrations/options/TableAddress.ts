export const ADDRESS = {
    name: 'address',
    columns: [
        {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
        },
        {
            name: 'street',
            type: 'varchar',
            length: 100,
            isNullable: true,
        },
        {
            name: 'number',
            type: 'varchar',
            length: 10,
            isNullable: true,
        },
        {
            name: 'complement',
            type: 'varchar',
            length: 50,
            isNullable: true,
        },
        {
            name: 'neighborhood',
            type: 'varchar',
            length: 50,
            isNullable: true,
        },
        {
            name: 'city_id',
            type: 'uuid',
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
            name: 'FK_ADDRESS_CITY_ID_CITY_ID',
            referencedTableName: 'city',
            referencedColumnNames: ['id'],
            columnNames: ['city_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        },
    ],
};

export const IDX_ADDRESS_ID = {
    name: 'IDX_ADDRESS_ID',
    columnNames: ['id'],
};
export const IDX_ADDRESS_CITY_ID = {
    name: 'IDX_ADDRESS_CITY_ID',
    columnNames: ['city_id'],
};