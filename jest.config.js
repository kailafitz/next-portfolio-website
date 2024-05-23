const nextJest = require('next/jest');

// https://www.youtube.com/watch?v=AS79oJ3Fcf0
// https://stackoverflow.com/questions/56547215/react-testing-library-why-is-tobeinthedocument-not-a-function
// https://stackoverflow.com/questions/77328459/cannot-find-module-testing-library-jest-dom-extend-expect-from-jest-setup-js

/** @type {import('jest').Config} */
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const config = {
  coverageProvider: 'v8',
  testEnvironment: 'jest-environment-jsdom',
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  preset: "ts-jest",
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config);