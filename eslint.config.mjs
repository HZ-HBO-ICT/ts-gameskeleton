import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import jsdoc from "eslint-plugin-jsdoc";

export default tseslint.config(
    {
        extends: [
            eslint.configs.recommended,
            ...tseslint.configs.recommended
        ],
        files: ['src/**/*.ts'],
        ignores: ["node_modules", "build"],

        languageOptions: {
            parser: tseslint.parser,
            sourceType: "module",
            parserOptions: {
                project: "./tsconfig.json",
                sourceType: "module",
            },
        },

        plugins: {
            '@typescript-eslint': tseslint.plugin,
            '@stylistic': stylistic,
            jsdoc: jsdoc
        },

        rules: {
            "camelcase": "off",
            "@stylistic/array-bracket-spacing": ["warn", "never"],
            "@stylistic/eol-last": ["warn", "always"],
            "@stylistic/max-statements-per-line": ["warn", { "max": 1 }],
            "@stylistic/max-len": ["warn", 100, 2, {
                ignoreUrls: true,
                ignoreComments: false,
                ignoreRegExpLiterals: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
            }],

            "@stylistic/no-trailing-spaces": ["warn", {
                skipBlankLines: true,
                ignoreComments: true,
            }],

            "@stylistic/no-multiple-empty-lines": ["warn", {
                max: 2,
                maxBOF: 1,
                maxEOF: 1,
            }],

            "@stylistic/no-multi-spaces": "warn",
            "@stylistic/padded-blocks": ["warn", "never"],
            "@stylistic/brace-style": "warn",
            "@stylistic/comma-spacing": "warn",
            "@stylistic/indent": ["warn", 2],
            "@stylistic/quotes": ["warn", "single"],
            "@stylistic/lines-between-class-members": "warn",
            "@stylistic/semi": "error",

            "prefer-arrow-callback": "warn",
            "prefer-destructuring": "off",
            "prefer-exponentiation-operator": "warn",
            "no-console": "off",
            "class-methods-use-this": "warn",
            "no-empty": "warn",
            "no-var": "warn",
            "prefer-const": "warn",

            curly: ["warn", "all"],
            "no-else-return": "off",

            "no-plusplus": ["warn", {
                allowForLoopAfterthoughts: true,
            }],

            "no-unused-vars": "off",
            "no-useless-constructor": "off",
            "@typescript-eslint/no-unused-vars": "warn",
            "@typescript-eslint/triple-slash-reference": "off",
            "@typescript-eslint/no-explicit-any": "error",
            "@typescript-eslint/no-useless-constructor": "warn",

            "@typescript-eslint/explicit-member-accessibility": ["error", {
                accessibility: "explicit",
            }],

            "@typescript-eslint/explicit-function-return-type": "error",
            "@typescript-eslint/no-inferrable-types": "off",

            "@typescript-eslint/typedef": ["error", {
                arrowParameter: true,
                variableDeclaration: true,
                variableDeclarationIgnoreFunction: true,
                memberVariableDeclaration: true,
                parameter: true,
            }],

            "@typescript-eslint/naming-convention": ["warn",
                {
                    selector: "default",
                    format: ["camelCase"],
                }, {
                    selector: "memberLike",
                    modifiers: ["private"],
                    format: ["camelCase"],
                }, {
                    selector: "typeLike",
                    format: ["PascalCase"],
                }, {
                    selector: "variable",
                    format: ["camelCase", "UPPER_CASE"],
                }, {
                    selector: "classProperty",
                    format: ["camelCase", "UPPER_CASE"],
                    leadingUnderscore: "allow",
                }, {
                    selector: "parameter",
                    format: ["camelCase"],
                    leadingUnderscore: "allow",
                }, {
                    selector: "import",
                    format: ["PascalCase"],
                }, {
                    selector: "enumMember",
                    format: ["PascalCase", "camelCase"],
                }],

            "jsdoc/require-jsdoc": ["warn", {
                publicOnly: true,
                checkConstructors: false,
                contexts: ["MethodDefinition[key.name!=/get.*/][key.name!=/set.*/]"],

                require: {
                    ClassDeclaration: false,
                    MethodDefinition: false,
                },
            }],
            "jsdoc/require-description": "warn",
            "jsdoc/require-param-description": "warn",
            "jsdoc/require-returns-description": "warn",
            "jsdoc/require-returns": "warn",

            "jsdoc/require-param-type": "off",
            "jsdoc/require-returns-type": "off",

            "jsdoc/no-types": ["warn", {
                contexts: ["any"],
            }],

            "jsdoc/tag-lines": "off",
        },
    }
);
