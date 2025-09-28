# 10. Unified Project Structure

```plaintext
/
├── apps
│   └── web/                # Next.js App (Frontend + API)
│       ├── src/
│       │   ├── app/
│       │   │   ├── (api)/      # API Routes
│       │   │   └── (app)/      # UI Pages & Components
│       │   └── lib/          # Helper functions, DB client
│       └── package.json
├── packages
│   ├── db/                 # Database schema, types, repository
│   ├── ui/                 # Shared React components (shadcn/ui)
│   └── config/             # Shared configs (ESLint, TSConfig)
├── .env.example
├── package.json
└── turborepo.json
```

---
