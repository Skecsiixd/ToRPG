// eslint.config.js
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      // Kikapcsoljuk az alap JS szabályt, hogy ne legyen duplázás:
      "no-unused-vars": "off",

      // A TypeScript szabály fogja kezelni, de átállítjuk ERROR-ról csak WARN-ra (sárga jelzésre)
      // Így nem fog lehalni tőle a projekted, csak figyelmeztet!
      "@typescript-eslint/no-unused-vars": "warn",

      "no-console": "off",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
);
