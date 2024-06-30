module.exports = {
    "roots": [
        "<rootDir>/src"
    ],
    "moduleNameMapper": {
        "^.+\\.(css|scss)$": "identity-obj-proxy",
    },
    "testMatch": [
        "**/__tests__/**/*.+(ts|tsx|js)",
        "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    "transform": {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
}