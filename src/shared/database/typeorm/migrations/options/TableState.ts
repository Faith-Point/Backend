export const STATE = {
	name: 'state',
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
					name: 'country_id',
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