module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended"
    ],
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "react"
    ],
    "rules": {
        "quotes": ["error", "double"],
        "no-console": [
            "warn",
            {
                allow: ["debug", "warn", "error"],
            },
          ],
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/ban-types": "off"
        // "@typescript-eslint/naming-convention": [
        //     "error",
        //     {
        //         "selector": "variable",
        //         "format": ["camelCase", "UPPER_CASE", "PascalCase"],
        //         "leadingUnderscore": "allow"
        //     },
        //     {
        //         "selector": "variable",
        //         "format": ["UPPER_CASE"],
        //         "modifiers": ["const"]
        //     },
        //     {
        //         "selector": "function",
        //         "format": ["camelCase", "PascalCase"]
        //     },
        //     {
        //         "selector": "parameter",
        //         "format": ["camelCase"],
        //         "leadingUnderscore": "allow"
        //     }
        // ]
    }
}
