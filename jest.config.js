/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  resetMocks: true,
  clearMocks: true,
  coveragePathIgnorePatterns: ['node_modules', 'index.ts', 'vite-env.d.ts'],
}
