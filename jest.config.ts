import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  roots: [
    "<rootDir>/src"
  ],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  transform: {
  "^.+\\.tsx?$": "ts-jest",
  },
};

export default config;