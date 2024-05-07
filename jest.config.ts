import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';

export default {
	bail: false,
	clearMocks: true,
	collectCoverage: true,
	collectCoverageFrom: ['<rootDir>/src/domain/**/tests/*.ts'],
	coverageDirectory: 'coverage',
	coverageProvider: 'v8',
	coverageReporters: ['text-summary', 'lcov'],
	moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
		prefix: '<rootDir>/',
	}),
	preset: 'ts-jest',
	testEnvironment: 'node',
	testMatch: ['**/*.test.ts'],
};