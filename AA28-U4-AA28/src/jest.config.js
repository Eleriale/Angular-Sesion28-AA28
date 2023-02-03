module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/src/setupJest.ts'],
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov'],
    collectCoverage: true,
    coveragePathIgnorePatterns: [
      '/node_modules/',
      '<rootDir>/src/test.ts',
      '<rootDir>/src/setupJest.ts',
    ],
  };
  