export const LOG_EXCEPTION = {
	name: 'log_exception',
	columns: [
		{
			name: 'id',
			type: 'varchar',			
			isPrimary: true,
			generationStrategy: 'uuid',
		},
		{
			name: 'message',
			type: 'varchar',
			precision: 256,
			isNullable: true,
		},
		{
			name: 'code',
			type: 'varchar',
			precision: 8,
			isNullable: true,
		},
		{
			name: 'type',
			type: 'varchar',
			precision: 128,
			isNullable: true,
			comment: 'type exception example: "Exception, Celebrate, AuthError".',
		},
		{
			name: 'stack',
			type: 'varchar',
			isNullable: true,
		},
		{
			name: 'agent',
			type: 'varchar',
			precision: 128,
			isNullable: true,
		},
		{
			name: 'ip',
			type: 'varchar',
			isNullable: true,
		},
		{
			name: 'url',
			type: 'varchar',
			precision: 128,
			isNullable: true,
		},
		{
			name: 'method',
			type: 'varchar',
			precision: 64,
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

export const IDX_LOG_EXCEPTION_ID = {
	name: 'IDX_LOG_EXCEPTION_ID',
	columnNames: ['id'],
};