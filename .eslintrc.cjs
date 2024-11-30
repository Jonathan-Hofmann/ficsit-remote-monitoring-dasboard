module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  ignorePatterns: [
    "build",
    "node_modules",
    "src/unused",
    "tailwind.config.ts",
    // TODO Fix all types in widgets/ui components
    "src/react/components/widgets",
    "src/react/ui",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:prettier/recommended",
  ],
  plugins: [
    "@stylistic",
    "simple-import-sort",
    "react-refresh",
    "@typescript-eslint",
    "promise",
    "import",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    // Classic rules
    "no-console": ["warn", { allow: ["error"] }],
    "no-param-reassign": "error",

    // Prettier rules
    "prettier/prettier": [
      "error",
      {
        printWidth: 80,
        tabWidth: 2,
        useTabs: false,
        semi: true,
        singleQuote: false,
        quoteProps: "consistent",
        jsxSingleQuote: false,
        trailingComma: "all",
        bracketSpacing: true,
        bracketSameLine: false,
        arrowParens: "always",
        endOfLine: "auto",
        singleAttributePerLine: true,
      },
    ],

    // Import rules
    "import/no-default-export": "error",
    "import/prefer-default-export": "off",
    "import/first": "error",
    "import/no-extraneous-dependencies": "error",
    "import/no-unused-modules": "off",
    // "import/no-unused-modules": [
    //   "error",
    //   { "missingExports ": true, "unusedExports": true },
    // ],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",

    // React rules
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/require-default-props": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],

    // Typescript
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/no-use-before-define": "error",
  },
  overrides: [
    {
      files: ["src/types/apis/dataTransferObject/**", "src/app/**"],
      rules: {
        "import/no-unused-modules": "off",
      },
    },
    {
      files: ["src/app/**"],
      rules: {
        "import/no-default-export": "off",
      },
    },
  ],
  globals: {
    window: "readonly",
    document: "readonly",
  },
};
