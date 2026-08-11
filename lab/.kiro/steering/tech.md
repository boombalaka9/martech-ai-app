---
inclusion: always
---

# Tech Stack

## Frontend

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript (strict mode enabled)
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Target**: ES2017
- **Deployment**: Static export to S3 + CloudFront
- **Source maps**: Enabled in production (`productionBrowserSourceMaps: true` in next.config.ts)

### Frontend Commands

```bash
cd frontend
npm install          # Install dependencies
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Production build (static export to out/)
npm run lint         # Run ESLint
```

## Architecture

- **Single-page application**: All views and data managed client-side
- **Mock data**: Embedded in the frontend (no backend server)
- **Hosting**: S3 bucket with CloudFront distribution
- **Routing**: Client-side routing via Next.js App Router (CloudFront 403/404 → /index.html)

## Development Approach

- **Local-first**: Run frontend locally with `npm run dev`
- **No backend**: All data is mocked/embedded in the React components
- **Static export**: `output: 'export'` in next.config.ts produces a fully static site

## Key Dependencies

### Frontend
- next: 16.1.5
- react: 19.2.3
- lucide-react: ^0.563.0
- tailwindcss: ^4
