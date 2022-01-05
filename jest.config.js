
module.exports = {
    moduleNameMapper: {
      '^~/(.*)$': '<rootDir>/src/$1',
      //"\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/app/__mocks__/fileMock.js",
      "\\.(css|less)$": "<rootDir>/src/__mocks__/fileMock.js"
    },
    transformIgnorePatterns: [
      '/node_modules/'
    ],
    testRegex: ["((\\.|/*.)(test))\\.js?$"],
    setupFilesAfterEnv: [
      '<rootDir>/src/setupTests.js',
      '@testing-library/jest-dom/extend-expect',
    ],
    coverageReporters: ["text-summary", "html"]
  };
    
  