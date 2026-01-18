
import js from "@eslint/js";
import globals from "globals";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { ignores: ["dist/**", "drizzle.config.ts", "src/tests/.test.ts"] },
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
    rules: {
      "no-unused-vars": "error",
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    plugins: { "@typescript-eslint": tseslint },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/ban-ts-comment": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-explicit-any": "warn"
    },
  },
]);
