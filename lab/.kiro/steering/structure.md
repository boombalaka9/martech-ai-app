---
inclusion: always
---

# Project Structure

## Root Layout

```
/
├── frontend/          # Next.js application (SPA)
├── deploy.sh          # Deployment script (S3 sync)
├── verify-domain.sh   # Domain verification for pen testing
└── README.md          # Project documentation
```

## Frontend Structure

```
frontend/
├── app/
│   ├── page.tsx       # Main application (single-page app)
│   ├── layout.tsx     # Root layout with metadata
│   ├── globals.css    # Global styles
│   └── favicon.ico
├── components/
│   └── ui/            # shadcn/ui components
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       └── input.tsx
├── public/            # Static assets (SVG icons)
├── package.json
├── tsconfig.json
└── next.config.ts
```

### Frontend Architecture

- **Single-page application**: All views in `app/page.tsx` with view state management
- **Client component**: Uses `'use client'` directive for interactivity
- **Views**: dashboard, submit, detail, criteria (managed via state)
- **Mock data**: Embedded directly in the component (no API calls)

## Code Organization Patterns

### Frontend Patterns

- **Component co-location**: UI components in `components/ui/`
- **Type definitions**: Inline interfaces in `page.tsx`
- **State management**: React hooks (useState, useEffect)
- **Styling**: Tailwind utility classes
- **Icons**: Lucide React components
- **Data**: Mock data as module-level constants in the page component

## Key Files

- `frontend/app/page.tsx` - Main UI with all views, logic, and mock data
- `frontend/components/ui/*` - Reusable shadcn/ui components
- `frontend/next.config.ts` - Must include `output: 'export'`
- `deploy.sh` - Deploys static build to S3 + CloudFront
- `verify-domain.sh` - Places pen test verification token in S3
- `README.md` - Setup and usage instructions

## Development Workflow

1. Start frontend: `cd frontend && npm run dev`
2. Access UI: http://localhost:3000
3. Build for deployment: `cd frontend && npm run build` (produces `out/` directory)
4. Deploy: `bash deploy.sh`
