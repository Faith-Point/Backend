export const COUNTRY = {
	name: 'country',
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
};

export const IDX_COUNTRY_ID = {
	name: 'IDX_COUNTRY_ID',
	columnNames: ['id'],
};