module.exports = {
  verbose: true,
  moduleFileExtensions: ['ts', 'js', 'json', 'vue'],
  transform: {
    '.*\\.(ts|js)$': 'babel-jest',
    '.*\\.(ts)$': 'ts-jest',
    '.*\\.(vue)$': 'vue-jest'
  },
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^utils/(.*)$': '<rootDir>/src/utils/$1',
    '^styles/(.*)$': '<rootDir>/src/styles/$1',
    '^vue$': 'vue/dist/vue.esm.js'
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,js,vue}', '!**/node_modules/**', '!**/coverage/**', '!**/dist/**']
};
