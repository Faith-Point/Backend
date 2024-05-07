export const CITY = {
    name: 'city',
    columns: [
        {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
        },
		{
			name: 'short_name',
			type: 'char',
			precision: 2,
			isNullable: false,			
		},
		{
			name: 'long_name',
			type: 'varchar',
			precision: 32,
			isNullable: false,
		},
		{
			name: 'code',
			type: 'varchar',
			precision: 32,
			isNullable: false,
		},
        {
            name: 'state_id',
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
			default: 'null',
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
			name: 'FK_CITY_STATE_ID_STATE_ID',
			referencedTableName: 'state',
			referencedColumnNames: ['id'],
			columnNames: ['state_id'],
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE',
		},
	],
};

export const IDX_CITY_ID = {
    name: 'IDX_CITY_ID',
    columnNames: ['id'],
};
export const IDX_CITY_STATE_ID = {
    name: 'IDX_CITY_STATE_ID',
    columnNames: ['state_id'],
};