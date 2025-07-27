import js from "@eslint/js";
import lit from "eslint-plugin-lit";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js, lit },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },
]);
