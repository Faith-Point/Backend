export const ADDRESS = {
    name: 'address',
    columns: [
        {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
        },
        {
            name: 'street',
            type: 'varchar',
            precision: 50,
            isNullable: true,
        },
        {
            name: 'number',
            type: 'varchar',
            precision: 10,
            isNullable: true,
        },
        {
            name: 'complement',
            type: 'varchar',
            precision: 50,
            isNullable: true,
        },
        {
            name: 'neighborhood',
            type: 'varchar',
            precision: 50,
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
			default: 'null',
			isNullable: true,
		},
		{
			name: 'deleted_at',
			type: 'timestamp',
			default: 'null',
			isNullable: true,
		},
    ]
};

export const IDX_ADDRESS_ID = {
    name: 'IDX_ADDRESS_ID',
    columnNames: ['id'],
};
export const IDX_ADDRESS_CITY_ID = {
    name: 'IDX_ADDRESS_CITY_ID',
    columnNames: ['city_id'],
};