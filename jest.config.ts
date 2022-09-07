import { defaults } from 'jest-config';

export default {
  setupFilesAfterEnv: ['<rootDir>/.jest/env.js'],
  roots: ['<rootDir>/__tests__', '<rootDir>/__mocks__'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, '.test.ts'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
};
