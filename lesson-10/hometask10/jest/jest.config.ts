import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
    extensionsToTreatAsEsm: ['.ts'],
    verbose: true,
    preset: 'ts-jest/presets/default-esm',
    testEnvironment: 'node',
    transform: {
        '^.+\\.tsx?$': ['ts-jest', { useESM: true }]
    },
    testPathIgnorePatterns: ['./dist'],
    clearMocks: true,
    coverageProvider: 'v8',
    testMatch: ['**/tests/**/*.[t]s?(x)', '**/?(*.)+(spec|test).[t]s?(x)']
    // globalSetup: './hooks/jest-global-setup.ts'
};

export default config;
// import type { JestConfigWithTsJest } from 'ts-jest';

// const config: JestConfigWithTsJest = {
//     preset: 'ts-jest',
//     testEnvironment: 'node',
//     moduleFileExtensions: ['ts', 'js'],
//     testMatch: ['**/jest/tests/**/*.spec.ts'],
//     transform: {
//         '^.+\\.ts$': ['ts-jest', { isolatedModules: true }]
//     },
//     roots: ['<rootDir>/jest/tests'],
//     moduleDirectories: ['node_modules', '<rootDir>/src', '<rootDir>/jest'],
//     setupFilesAfterEnv: [],
//     verbose: true
// };

// export default config;
