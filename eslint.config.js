import path from "node:path";

import { includeIgnoreFile } from "@eslint/compat";
import js from "@eslint/js";
import { configs, plugins, rules } from "eslint-config-airbnb-extended";
import { rules as prettierConfigRules } from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import testingLibraryPlugin from "eslint-plugin-testing-library";
import vitestPlugin from "eslint-plugin-vitest";

export const projectRoot = path.resolve(".");
export const gitignorePath = path.resolve(projectRoot, ".gitignore");

const jsConfig = [
  // ESLint Recommended Rules
  {
    name: "js/config",
    ...js.configs.recommended,
  },
  // Stylistic Plugin
  plugins.stylistic,
  // Import X Plugin
  plugins.importX,
  // Airbnb Base Recommended Config
  ...configs.base.recommended,
];

const reactConfig = [
  // React Plugin
  plugins.react,
  // React Hooks Plugin
  plugins.reactHooks,
  // React JSX A11y Plugin
  plugins.reactA11y,
  // Airbnb React Recommended Config
  ...configs.react.recommended,
  {
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },
];

const typescriptConfig = [
  // TypeScript ESLint Plugin
  plugins.typescriptEslint,
  // Airbnb Base TypeScript Config
  ...configs.base.typescript,
  // Airbnb React TypeScript Config
  ...configs.react.typescript,
];

const testingConfig = [
  // Testing Library Plugin
  {
    name: "testing-library/config",
    plugins: {
      "testing-library": testingLibraryPlugin,
    },
  },
  // Vitest Plugin
  {
    name: "vitest/config",
    plugins: {
      vitest: vitestPlugin,
    },
  },
  // Testing Library Rules
  {
    name: "testing-library/rules",
    rules: {
      "testing-library/await-async-queries": "error",
      "testing-library/no-await-sync-queries": "error",
      "testing-library/no-debugging-utils": "warn",
      "testing-library/no-dom-import": "error",
      "testing-library/no-manual-cleanup": "error",
      "testing-library/no-render-in-lifecycle": "error",
      "testing-library/prefer-explicit-assert": "error",
      "testing-library/prefer-find-by": "error",
      "testing-library/prefer-presence-queries": "error",
      "testing-library/prefer-query-by-disappearance": "error",
      "testing-library/prefer-screen-queries": "error",
      "testing-library/prefer-user-event": "error",
      "testing-library/render-result-naming-convention": "error",
    },
  },
  // Vitest Rules
  {
    name: "vitest/rules",
    rules: {
      "vitest/expect-expect": "error",
      "vitest/max-expects": "error",
      "vitest/no-alias-methods": "error",
      "vitest/no-conditional-expect": "error",
      "vitest/no-conditional-in-test": "error",
      "vitest/no-conditional-tests": "error",
      "vitest/no-disabled-tests": "warn",
      "vitest/no-focused-tests": "error",
      "vitest/no-identical-title": "error",
      "vitest/no-interpolation-in-snapshots": "error",
      "vitest/no-large-snapshots": "warn",
      "vitest/no-standalone-expect": "error",
      "vitest/no-test-prefixes": "error",
      "vitest/prefer-called-with": "error",
      "vitest/prefer-comparison-matcher": "error",
      "vitest/prefer-each": "error",
      "vitest/prefer-equality-matcher": "error",
      "vitest/prefer-expect-assertions": "error",
      "vitest/prefer-hooks-in-order": "error",
      "vitest/prefer-lowercase-title": "error",
      "vitest/prefer-mock-promise-shorthand": "error",
      "vitest/prefer-snapshot-hint": "error",
      "vitest/prefer-spy-on": "error",
      "vitest/prefer-strict-equal": "error",
      "vitest/prefer-to-be": "error",
      "vitest/prefer-to-be-falsy": "error",
      "vitest/prefer-to-be-object": "error",
      "vitest/prefer-to-be-truthy": "error",
      "vitest/prefer-to-contain": "error",
      "vitest/prefer-to-have-length": "error",
      "vitest/prefer-todo": "error",
      "vitest/require-hook": "error",
      "vitest/require-to-throw-message": "error",
      "vitest/valid-expect": "error",
      "vitest/valid-title": "error",
    },
  },
];

const prettierConfig = [
  // Prettier Plugin
  {
    name: "prettier/plugin/config",
    plugins: {
      prettier: prettierPlugin,
    },
  },
  // Prettier Config
  {
    name: "prettier/config",
    rules: {
      ...prettierConfigRules,
      "prettier/prettier": "error",
    },
  },
];

export default [
  // Ignore .gitignore files/folder in eslint
  includeIgnoreFile(gitignorePath),
  // Javascript Config
  ...jsConfig,
  // React Config
  ...reactConfig,
  // TypeScript Config
  ...typescriptConfig,
  // Testing Config
  ...testingConfig,
  // Prettier Config
  ...prettierConfig,
  rules.base.importsStrict,
  rules.react.strict,
  rules.typescript.typescriptEslintStrict,
];
