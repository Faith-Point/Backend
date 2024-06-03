export const COUNTRY = {
	name: 'country',
	columns: [
			{
					name: 'id',
					type: 'uuid',
					isPrimary: true,
					generationStrategy: 'uuid',
			},
			{
					name: 'short_name',
					type: 'varchar',
					length: 50,
					isNullable: false,            
			},
			{
					name: 'long_name',
					type: 'varchar',
					length: 100,
					isNullable: false,
			},
			{
					name: 'code',
					type: 'varchar',
					length: 10,
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

export const IDX_COUNTRY_ID = {
	name: 'IDX_COUNTRY_ID',
	columnNames: ['id'],
};