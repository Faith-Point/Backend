export const STATE = {
    name: 'state',
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
            name: 'country_id',
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
			name: 'FK_STATE_COUNTRY_ID_COUNTRY_ID',
			referencedTableName: 'country',
			referencedColumnNames: ['id'],
			columnNames: ['country_id'],
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE',
		},
	],
};

export const IDX_STATE_ID = {
    name: 'IDX_STATE_ID',
    columnNames: ['id'],
};
export const IDX_STATE_COUNTRY_ID = {
    name: 'IDX_STATE_COUNTRY_ID',
    columnNames: ['country_id'],
};