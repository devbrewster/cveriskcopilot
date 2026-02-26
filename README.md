# cveriskcopilot

AWS-native Next.js (App Router) scaffold for CVE memo generation and risk workflows.

## Folders

- `app/`: App Router pages and API routes.
- `app/(auth)/`: Authentication pages.
- `app/(dashboard)/`: Main application pages.
- `app/api/`: Route handlers.
- `components/`: Reusable React components.
- `components/ui/`: UI primitives.
- `lib/`: Domain and integration modules.
- `prisma/`: Prisma schema.
- `public/brand/`: Brand assets.

## Directory Tree

```text
app/
  (auth)/
    login/
      page.tsx
  (dashboard)/
    dashboard/
      page.tsx
    memos/
      page.tsx
      new/
        page.tsx
    templates/
      page.tsx
    settings/
      page.tsx
  api/
    memos/
      generate/
        route.ts
      export/
        route.ts
      list/
        route.ts
      [id]/
        route.ts
  favicon.ico
  globals.css
  layout.tsx
  page.tsx
components/
  ui/
  MemoForm.tsx
  MemoPreview.tsx
  MemoTable.tsx
  Sidebar.tsx
  Topbar.tsx
lib/
  auth/
    index.ts
  bedrock/
    client.ts
    generateMemo.ts
  cve/
    enrich.ts
    nvd.ts
    kev.ts
    normalize.ts
  db/
    prisma.ts
  pdf/
    renderMemoHtml.ts
    htmlToPdf.ts
  security/
    rateLimit.ts
    validation.ts
  stripe/
    client.ts
    billing.ts
prisma/
  schema.prisma
public/
  brand/
    logo.svg
README.md
.env.example
.gitignore
next.config.js
middleware.ts
```
