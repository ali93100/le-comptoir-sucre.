import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettierConfig from "eslint-config-prettier";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettierConfig,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Clone source du skill UI UX Pro Max (CLI/gallery externes, hors
    // périmètre de ce projet) — voir .claude/skills/ui-ux-pro-max/.
    "ui-ux-pro-max/**",
  ]),
]);

export default eslintConfig;
