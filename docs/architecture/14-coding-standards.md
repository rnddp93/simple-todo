# 14. Coding Standards

*   **Type Sharing:** All database types and API request/response types must be defined in `packages/db` and imported into the `apps/web` application. There should be no duplicate type definitions.
*   **Environment Variables:** Never access `process.env` directly in components or API routes. Use a centralized config object to expose environment variables to the application.
*   **Naming Conventions:**
    *   Components: `PascalCase.tsx`
    *   API Routes: `kebab-case/route.ts`
    -   Database Tables: `snake_case`

---
