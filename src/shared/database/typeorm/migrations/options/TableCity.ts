export const CITY = {
	name: 'city',
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
					name: 'state_id',
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