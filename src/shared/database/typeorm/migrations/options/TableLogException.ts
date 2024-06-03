export const LOG_EXCEPTION = {
	name: 'log_exception',
	columns: [
			{
					name: 'id',
					type: 'uuid',
					isPrimary: true,
					generationStrategy: 'uuid',
			},
			{
					name: 'message',
					type: 'varchar',
					length: 255,
					isNullable: true,
			},
			{
					name: 'code',
					type: 'varchar',
					length: 10,
					isNullable: true,
			},
			{
					name: 'type',
					type: 'varchar',
					length: 128,
					isNullable: true,
					comment: 'type exception example: "Exception, Celebrate, AuthError".',
			},
			{
					name: 'stack',
					type: 'text',
					isNullable: true,
			},
			{
					name: 'agent',
					type: 'varchar',
					length: 128,
					isNullable: true,
			},
			{
					name: 'ip',
					type: 'varchar',
					length: 45,
					isNullable: true,
			},
			{
					name: 'url',
					type: 'varchar',
					length: 255,
					isNullable: true,
			},
			{
					name: 'method',
					type: 'varchar',
					length: 64,
					isNullable: true,
			},
			{
					name: 'data',
					type: 'text',
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

export const IDX_LOG_EXCEPTION_ID = {
	name: 'IDX_LOG_EXCEPTION_ID',
	columnNames: ['id'],
};