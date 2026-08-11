---
inclusion: manual
---

# Swiss Clean Flux Design System Reference

> Extracted from the swiss-clean-flux design templates (splash, login, dashboard, detail pages).
> This is a Swiss/International Typographic Style aesthetic - clean grid systems, precise typography, minimal color palette, generous whitespace, and structured layouts on pure white backgrounds.

## Color Palette

### Core Colors
- **Black**: `#000000` / `#0A0A0A` - Primary text, borders, nav background, buttons
- **White**: `#FFFFFF` - Page background, card backgrounds, nav text
- **Red**: `#E30613` / `#E20613` - Primary accent, CTAs, active indicators, highlights, hover states

### Gray Scale
- **Gray 100**: `#F5F5F5` - Subtle backgrounds, hover states, footer background, transaction icon bg
- **Gray 200**: `#E8E8E8` / `#E0E0E0` - Borders, dividers, progress bar tracks, table row borders
- **Gray 300**: `#D0D0D0` / `#B0B0B0` - Input borders (default), subtle elements
- **Gray 400**: `#999999` / `#8A8A8A` - Meta text, labels, inactive nav links, chart labels
- **Gray 500**: `#777777` / `#666666` / `#6A6A6A` - Body text, descriptions, secondary text
- **Gray 600**: `#555555` / `#444444` - Slightly darker body text
- **Gray 700**: `#333333` - Dark text, meta values
- **Gray 800**: `#1A1A1A` - Near-black for emphasis

### Functional Colors
- **Positive/Income**: `#E30613` (red) - Income amounts use red as the accent color
- **Negative/Expense**: `#000000` (black) - Expense amounts use black
- **Success/Completed**: `#2ECC71` - Status badge dots
- **Warning**: `#E30613` (red) - Budget bars over threshold

## Typography

### Font Families

The reference templates use slightly different font stacks per page:

| Role | splash.html | login.html | dashboard.html | detail.html |
|------|-------------|------------|----------------|-------------|
| Display/Headlines | `'Space Grotesk', sans-serif` | `'Helvetica Neue', Helvetica, Arial, sans-serif` | `'Helvetica Neue', Helvetica, Arial, sans-serif` | `'Space Grotesk', 'Helvetica Neue', Helvetica, Arial, sans-serif` |
| Body | `'DM Sans', sans-serif` | `'Helvetica Neue', Helvetica, Arial, sans-serif` | `'Helvetica Neue', Helvetica, Arial, sans-serif` | `'Space Grotesk', 'Helvetica Neue', Helvetica, Arial, sans-serif` |

Common font mapping for Tailwind:
- **font-display**: `'Space Grotesk', sans-serif` - Headlines, labels, nav links, buttons, section numbers
- **font-body**: `'DM Sans', sans-serif` - Body text, descriptions, paragraphs
- **font-primary** (fallback): `'Helvetica Neue', Helvetica, Arial, sans-serif` - Dashboard/login pages use system sans-serif

### Google Fonts Loading

> **CRITICAL**: Do NOT use `@import url(...)` in CSS files when using Tailwind CSS 4.
> Tailwind CSS 4's `@import "tailwindcss"` directive processes and silently strips external `@import url()` rules.
> Always load Google Fonts via `<link>` tags in the HTML `<head>` (in Next.js, use `layout.tsx`).

```
Space Grotesk:wght@300;400;500;600;700
DM Sans:wght@400;500;700
Inter:wght@300;400;500;600;700
```

### Tailwind CSS Font Mapping
```
font-display -> 'Space Grotesk', sans-serif (headlines, labels, buttons, nav)
font-body -> 'DM Sans', sans-serif (body text, descriptions)
font-primary -> 'Helvetica Neue', Helvetica, Arial, sans-serif (fallback system font)
```

### Font Sizes
| Token | Size | Usage |
|-------|------|-------|
| 3xs | 0.625rem (10px) | Uppercase labels, meta labels, taglines |
| 2xs | 0.6875rem (11px) | Section numbers, feature indices, chart labels, uppercase labels |
| xs | 0.75rem (12px) | Input labels, copyright, nav hints, back links |
| sm | 0.8125rem (13px) | Nav links, feature descriptions, receipt table text, similar items |
| base | 0.875rem (14px) | Buttons, transaction names, budget categories, nav items |
| md | 0.9375rem (15px) | Feature descriptions, form inputs, receipt totals |
| lg | 1.25rem (20px) | Footer logo, metric suffix |
| xl | 1.375rem (22px) | Feature card names |
| 2xl | 1.5rem (24px) | Nav logo (splash), panel-left quote |
| 3xl | 2rem (32px) | Form header h1, nav brand |
| 4xl | 2.5rem (40px) | Hero stat numbers |
| 5xl | 3rem (48px) | Page titles, merchant names, header titles |
| 6xl | 3.5rem (56px) | Transaction amount (detail) |
| hero | clamp(3.5rem, 7vw, 6.5rem) | Hero headline |

### Font Weights
- 300: Light - hero headlines, page titles, metric values, quotes (the signature "thin" look)
- 400: Regular - body text, descriptions, nav links
- 500: Medium - labels, nav links, buttons, meta values
- 600: Semi-bold - CTAs, receipt amounts, bar values
- 700: Bold - brand logos, section titles, headlines, feature names

### Letter Spacing
- Headlines: `-0.03em` to `-0.04em` (tight, negative tracking)
- Page titles: `-2px` to `-3px` (very tight)
- Body: `0` to `0.02em` (default/slight)
- Uppercase labels: `0.1em` to `0.12em` (wide)
- Section titles: `2px` (wide, uppercase)
- Buttons: `0.04em` to `0.12em` (wide, uppercase)
- Logo: `-0.03em` (tight)

## Spacing & Layout

### Grid System
- **12-column grid** with `24px` column gap
- Page padding: `48px` horizontal (desktop), `24px` (tablet)
- Grid unit: `8px` (all spacing is multiples of 8px)
- `grid-template-columns: repeat(12, 1fr)` for splash/landing pages

### Border Radius
| Token | Value | Usage |
|-------|-------|-------|
| none | 0px | Cards, buttons, inputs, transaction icons - EVERYTHING is square/sharp |
| sm | 2px | Rare: status badges, nav logo mark, receipt table border-radius |
| full | 50% | Avatars only |

**CRITICAL**: This design system uses sharp corners (0px border-radius) on virtually everything. Buttons, cards, inputs, icons - all square. Only avatars are round.

### Page Structure

#### Splash/Landing (Top Nav)
- Nav: fixed top, full-width, white background, 1px black bottom border
- Nav height: ~60px (padding `20px` vertical)
- Nav padding: `0 48px`
- Content: 12-column grid, sections separated by 1px black borders
- Section padding: `128px 48px` (generous vertical whitespace)

#### Dashboard/Detail (Side Nav)
- Sidebar: fixed left, `200-240px` wide, black background, full height
- Main content: `margin-left: 200-240px`, padding `48px 64px`
- Content uses 2-column grid with `64-72px` gap

### Common Spacing
- Card/section padding: `32px`
- Nav item padding: `14px 32px` (sidebar), `20px 48px` (top nav)
- Button padding: `18px 40px` (primary CTA), `16px 0` (full-width login)
- Input padding: `14px 0` (bottom-border-only inputs)
- Section gap: `64-72px` between content sections
- Metric card padding: `32px`
- Transaction item padding: `16px 0`

## Components

### Navigation - Top Bar (Splash/Landing Pages)
```css
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: #FFFFFF;
  border-bottom: 1px solid #000000;
}
.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 48px;
}
.nav-logo {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: #000000;
  display: flex;
  align-items: center;
  gap: 8px;
}
.nav-logo-mark {
  width: 28px;
  height: 28px;
  background: #E30613; /* red square */
}
.nav-links a {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.8125rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #6A6A6A;
  text-decoration: none;
}
.nav-links a:hover { color: #000000; }
.nav-cta {
  background: #000000;
  color: #FFFFFF;
  padding: 10px 24px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  font-weight: 600;
}
.nav-cta:hover { background: #E30613; }
```

### Navigation - Sidebar (Dashboard/Detail Pages)
```css
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 200-240px;
  height: 100vh;
  background: #000000;
  color: #FFFFFF;
  padding: 48px 0;
  display: flex;
  flex-direction: column;
}
.nav-brand h1 {
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -1px;
  color: #FFFFFF;
}
.nav-brand h1 span { color: #E30613; } /* Red accent on "x" in "Flux" */
.nav-tagline {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #777777;
}
.nav-item a {
  display: block;
  padding: 14px 32px;
  font-size: 14px;
  color: #999999;
  text-decoration: none;
}
.nav-item a:hover { color: #FFFFFF; background: rgba(255,255,255,0.04); }
.nav-item.active a { color: #FFFFFF; font-weight: 500; }
.nav-item.active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: #E30613; /* red active indicator */
}
```

### Primary CTA Button
```css
.btn-primary {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #FFFFFF;
  background: #E30613; /* red */
  padding: 18px 40px;
  border: none;
  cursor: pointer;
  transition: all 0.25s ease;
}
.btn-primary:hover {
  background: #000000;
  transform: translateY(-1px);
}
```
Login variant: `background: #000000; width: 100%; padding: 16px 0; letter-spacing: 0.12em;`
Login hover: `background: #E30613;`

### Secondary/Ghost Button
```css
.btn-secondary {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #000000;
  text-decoration: none;
  border-bottom: 1px solid #000000;
  padding-bottom: 2px;
}
.btn-secondary:hover {
  color: #E30613;
  border-color: #E30613;
}
```

### Social Login Button
```css
.btn-social {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 14px 0;
  background: transparent;
  border: 1px solid #E8E8E8;
  font-size: 14px;
  color: #000000;
  cursor: pointer;
}
.btn-social:hover {
  border-color: #000000;
  background: #F5F5F5;
}
```

### Input Field (Bottom-Border Style)
```css
.form-input {
  width: 100%;
  padding: 14px 0;
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 15px;
  color: #000000;
  background: transparent;
  border: none;
  border-bottom: 1px solid #D0D0D0;
  outline: none;
  transition: border-color 0.2s ease;
}
.form-input::placeholder {
  color: #999999;
  font-weight: 300;
}
.form-input:focus {
  border-bottom-color: #000000;
}
```
Input labels: `font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.1em; color: #000000;`

### Metric Card (Dashboard Stats)
```css
.metric {
  background: #FFFFFF;
  padding: 32px;
  /* Metrics are in a 4-column grid separated by 1px gray borders */
}
.metric-label {
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #777777;
  margin-bottom: 12px;
}
.metric-value {
  font-size: 36px;
  font-weight: 300; /* light weight is signature */
  letter-spacing: -1.5px;
  color: #000000;
}
.metric-value.accent { color: #E30613; } /* red for key metric */
```

### Metrics Row Container
```css
.metrics {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: #E8E8E8; /* gap color = border color */
  border: 1px solid #E8E8E8;
}
```

### Section Header
```css
.section-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 32px;
  padding-bottom: 16px;
  border-bottom: 2px solid #000000; /* thick black rule */
}
.section-title {
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #000000;
}
.section-title.red-accent {
  border-bottom-color: #E30613; /* red variant */
}
.section-action {
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #777777;
  text-decoration: none;
}
.section-action:hover { color: #E30613; }
```

### Section Number (Splash Page)
```css
.section-number {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #E30613; /* red */
  margin-bottom: 24px;
}
/* Format: "01 - Features", "02 - Get Started" */
```

### Feature Card (Splash Page)
```css
.feature-card {
  border-top: 2px solid #000000;
  padding-top: 24px;
  transition: all 0.3s ease;
}
.feature-card:hover {
  border-top-color: #E30613; /* red on hover */
}
.feature-index {
  font-size: 0.6875rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #999999;
  margin-bottom: 24px;
}
.feature-name {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.375rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 12px;
}
.feature-desc {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9375rem;
  color: #6A6A6A;
  line-height: 1.6;
}
```

### Transaction Item
```css
.transaction {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 16px;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #E8E8E8;
}
.transaction-icon {
  width: 36px;
  height: 36px;
  background: #F5F5F5;
  border-radius: 0; /* square icon container */
  display: flex;
  align-items: center;
  justify-content: center;
}
.transaction-name {
  font-size: 14px;
  font-weight: 500;
  color: #000000;
}
.transaction-meta {
  font-size: 12px;
  color: #777777;
}
.transaction-amount {
  font-size: 14px;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
}
.transaction-amount.negative { color: #000000; }
.transaction-amount.positive { color: #E30613; } /* red for income */
```

### Budget/Progress Bar
```css
.budget-bar {
  height: 4px; /* very thin */
  background: #E8E8E8;
  overflow: hidden;
}
.budget-bar-fill {
  height: 100%;
  background: #000000; /* black fill */
  transition: width 1s cubic-bezier(0.16, 1, 0.3, 1);
}
.budget-bar-fill.warning {
  background: #E30613; /* red when over threshold */
}
```

### Goal Progress Bar
```css
.goal-bar {
  height: 8px; /* slightly thicker than budget */
  background: #E8E8E8;
  overflow: hidden;
}
.goal-bar-fill {
  height: 100%;
  background: #E30613; /* red fill */
  transition: width 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}
.goal-percent {
  font-size: 28px;
  font-weight: 300;
  color: #E30613;
  letter-spacing: -1px;
}
```

### Avatar
```css
.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%; /* only round element in the system */
  background: #FFFFFF; /* or #E30613 on detail page */
  color: #000000; /* or #FFFFFF on red bg */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.5px;
}
```

### Receipt Table (Detail Page)
```css
.receipt-table {
  width: 100%;
  border-collapse: collapse;
}
.receipt-table tr {
  border-bottom: 1px solid #E8E8E8;
  transition: background 0.15s ease;
}
.receipt-table tr:hover { background: #F5F5F5; }
.receipt-table td {
  padding: 10px 0;
  font-size: 13px;
}
.receipt-table td:first-child {
  color: #999999;
  font-size: 11px;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
}
.receipt-table td:last-child {
  text-align: right;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}
.receipt-total {
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
  border-top: 2px solid #000000; /* thick black rule */
  font-weight: 700;
  font-size: 15px;
}
```

### Payment Info Grid (Detail Page)
```css
.payment-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  padding: 24px;
  background: #F5F5F5;
  border: 1px solid #E8E8E8;
}
.payment-info-label {
  font-size: 10px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #999999;
}
.payment-info-value {
  font-size: 13px;
  font-weight: 600;
  color: #000000;
}
```

### Status Badge
```css
.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  font-weight: 600;
  color: #000000;
  background: #F5F5F5;
  padding: 4px 10px;
  border-radius: 2px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
.status-badge::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #2ECC71; /* green dot */
}
```

### Map Placeholder (Detail Page)
```css
.map-placeholder {
  width: 100%;
  height: 160px;
  background: #F5F5F5;
  border: 1px solid #E8E8E8;
  position: relative;
  overflow: hidden;
}
/* Grid lines inside map */
.map-grid {
  background-image:
    linear-gradient(#E8E8E8 1px, transparent 1px),
    linear-gradient(90deg, #E8E8E8 1px, transparent 1px);
  background-size: 32px 32px;
}
/* Red crosshair + pin dot */
.map-pin-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #E30613;
  box-shadow: 0 0 0 4px rgba(227, 6, 19, 0.2);
}
```

## Decorative Elements

### Red Line Accent
A short red horizontal rule used as a visual separator/accent:
```css
.red-line {
  width: 48px;
  height: 2-3px;
  background: #E30613;
  margin-bottom: 16-24px;
}
```

### Red Accent Line (Login Page)
```css
.accent-line {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 3px;
  background: #E30613;
  animation: lineExpand 1s ease-out 0.5s forwards;
}
```

### Grid Decoration (Login Left Panel)
Abstract grid with thin white lines on black background, with red accent blocks at grid intersections:
```css
.grid-line-v, .grid-line-h {
  position: absolute;
  background: rgba(255, 255, 255, 0.06); /* very subtle white lines */
}
.grid-block {
  position: absolute;
  background: #E30613; /* red blocks at intersections */
}
```

### Chart Bar Visualization (Login Left Panel)
Abstract bar chart on black background:
```css
.chart-bar {
  background: rgba(255, 255, 255, 0.1); /* subtle white bars */
  border-radius: 1px 1px 0 0;
}
.chart-bar.accent {
  background: #E30613; /* red accent bars */
}
```

### Divider
```css
.divider {
  display: flex;
  align-items: center;
  gap: 16px;
}
.divider::before, .divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: #E8E8E8;
}
.divider span {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #999999;
}
```

## Background & Textures

### Page Background
```css
body {
  background-color: #FFFFFF; /* pure white */
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #000000;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```
No textures, no noise, no grain. Pure white backgrounds only.

### Login Page - Split Layout
```css
.page {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
}
.panel-left { background: #000000; } /* black decorative panel */
.panel-right { background: #FFFFFF; } /* white form panel */
```

### HTML Structure
```html
<body>
  <!-- Pure white background, no overlays or textures -->
  <!-- Content sits directly in body or a minimal wrapper -->
</body>
```

### Next.js / React Implementation
In `globals.css`, keep it minimal:
```css
@import "tailwindcss";
/* No @import url() for fonts - use <link> tags instead */
```

In `layout.tsx`, load Google Fonts via `<link>` tags in `<head>`:
```tsx
<html lang="en">
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=DM+Sans:wght@400;500;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  </head>
  <body className="bg-white text-black font-body min-h-screen overflow-x-hidden antialiased">
    {children}
  </body>
</html>
```

## Animations

### Entry Animations
- **fadeUp**: `opacity: 0; translateY(16-40px)` to `opacity: 1; translateY(0)`, 0.5-0.8s `cubic-bezier(0.16, 1, 0.3, 1)` - Primary entry animation for all content
- **navSlide**: `translateX(-100%)` to `translateX(0)`, 0.6s - Sidebar reveal
- **slideUp**: `opacity: 0; translateY(16px)` to `opacity: 1; translateY(0)`, 0.6s - Form elements, quotes
- **barGrow**: `height: 0` to `height: <target>`, 0.5-1s - Chart bars
- **lineExpand**: `width: 0` to `width: 100%`, 1s - Red accent line
- **blockReveal**: `scale(0.9); opacity: 0` to `scale(1); opacity: 1`, 0.6s - Grid decoration blocks
- **fadeInGrid**: `opacity: 0` to `opacity: 1`, 0.8-1.2s - Grid decorations

### Easing
- Primary easing: `cubic-bezier(0.16, 1, 0.3, 1)` - Smooth deceleration (used everywhere)
- Simple easing: `ease-out` - Simpler animations

### Stagger Pattern
```css
.section:nth-child(1) { animation-delay: 0.6s; }
.section:nth-child(2) { animation-delay: 0.7s; }
.section:nth-child(3) { animation-delay: 0.8s; }
.section:nth-child(4) { animation-delay: 0.9s; }
/* Increment by 0.1s */
```
For feature cards: increment by 0.1s (0.1s, 0.2s, 0.3s)
For form elements: increment by 0.2s (0.4s, 0.6s, 0.8s, 1.0s, 1.2s)

### Scroll Reveal
```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
```
Elements start with `opacity: 0; transform: translateY(30px)` and transition to visible.

### Hover Effects
- Feature cards: border-top color changes from black to red
- Buttons: `translateY(-1px)` (subtle lift), background color swap
- Nav links: color change (gray to white for sidebar, gray to black for top nav)
- Section actions: color change to red
- Chart bars: background changes from black to red
- Transaction rows: subtle background change
- Social buttons: border darkens, background tints

## Chart Styling

### Bar Chart
```css
.chart {
  display: flex;
  align-items: flex-end;
  height: 160px;
  position: relative;
}
.chart::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: #000000; /* black baseline */
}
.chart-bar {
  flex: 1;
  max-width: 48px;
  background: #000000;
  transition: height 0.8s cubic-bezier(0.16, 1, 0.3, 1), background 0.2s ease;
}
.chart-bar:hover { background: #E30613; } /* red on hover */
.chart-bar.current { background: #E30613; } /* red for current period */
.chart-bar-value {
  font-size: 11px;
  font-weight: 500-600;
  color: #777777;
  font-variant-numeric: tabular-nums;
  opacity: 0; /* show on hover */
}
.chart-bar:hover .chart-bar-value {
  opacity: 1;
  color: #E30613;
}
.chart-label {
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5-1px;
  color: #777777;
}
.chart-label.current { color: #E30613; font-weight: 700; }
```

## Tailwind CSS Quick Reference

```js
// tailwind.config.ts extension for Swiss Clean Flux theme
const swissCleanTheme = {
  colors: {
    'black': '#000000',
    'white': '#FFFFFF',
    'red': '#E30613',
    'gray-100': '#F5F5F5',
    'gray-200': '#E8E8E8',
    'gray-300': '#D0D0D0',
    'gray-400': '#999999',
    'gray-500': '#777777',
    'gray-600': '#555555',
    'gray-700': '#333333',
    'gray-800': '#1A1A1A',
  },
  fontFamily: {
    'display': ['Space Grotesk', 'sans-serif'],
    'body': ['DM Sans', 'sans-serif'],
    'primary': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
  },
  borderRadius: {
    'none': '0px',
    'sm': '2px',
    'full': '50%',
  },
}
```

### Common Utility Patterns
```
/* Metric Card */
bg-white p-8

/* Metric Label */
text-[11px] font-medium uppercase tracking-[1.5px] text-gray-500

/* Metric Value */
text-[36px] font-light tracking-tight text-black

/* Primary CTA */
bg-red text-white font-display text-sm font-semibold uppercase tracking-wider px-10 py-[18px]

/* Section Title */
text-[13px] font-bold uppercase tracking-[2px] text-black border-b-2 border-black pb-4

/* Nav Logo (sidebar) */
text-[32px] font-bold tracking-tight text-white

/* Body Text */
font-body text-[15px] text-gray-500 leading-relaxed

/* Uppercase Label */
text-[11px] font-medium uppercase tracking-[1.5px] text-gray-500

/* Transaction Amount */
text-sm font-medium tabular-nums
```

## Page-Specific Layouts

### Splash/Landing Page Structure
```
Nav (fixed top, white, 1px black bottom border)
Hero Section (full viewport height, 12-col grid)
  - Left (col 1-7): label, headline, subtitle, CTA buttons
  - Right (col 9-13): stat blocks with top border
Features Section (border-bottom: 1px solid black)
  - Left (col 1-4): section number + title
  - Right (col 5-13): 3-column feature card grid
Social Proof Section (black background, white text)
  - Left (col 1-6): quote with attribution
  - Right (col 8-13): large metric numbers with left border
CTA Section (border-bottom: 1px solid black)
  - Left (col 1-8): section number, headline, subtitle, CTA button
  - Right (col 10-13): arrow link box
Footer (gray-100 background)
  - Top: 5-column grid (brand + 4 link columns), border-bottom
  - Bottom: copyright + version label
```

### Login Page Structure
```
Split 50/50 grid (min-height: 100vh)
Left Panel (black background):
  - Brand logo (top)
  - Grid decoration (subtle white lines + red blocks)
  - Abstract bar chart visualization
  - Quote (bottom area)
  - Copyright (footer)
Right Panel (white background):
  - Top-right nav hints (absolute positioned)
  - Centered form container (max-width: 400px)
  - Logo + title + subtitle
  - Email input (bottom-border style)
  - Password input (bottom-border style)
  - Remember me checkbox + forgot password link
  - Primary submit button (full-width, black)
  - Divider ("or continue with")
  - Social buttons (2-column grid: Google, Apple)
  - Sign up link
  - Red accent line (bottom, animated)
```

### Dashboard Page Structure
```
Sidebar (fixed left, 240px, black)
  - Brand (Flu[x] with red x)
  - Tagline
  - Nav items (with red active indicator)
  - User block (avatar + name, bottom)
Main Content (margin-left: 240px, padding: 48px 64px)
  - Header (label + title + date)
  - Metrics Row (4-column grid, 1px gap borders)
  - Content Grid (2-column, 72px gap)
    - Left: Recent Transactions list
    - Right: Budget Categories with progress bars
  - Divider (1px gray)
  - Bottom Grid (2-column, 72px gap)
    - Left: Weekly Spending bar chart
    - Right: Savings Goal with progress + stats
```

### Detail Page Structure
```
Sidebar (fixed left, 200px, black) - same as dashboard
Main Content (margin-left: 200px, padding: 48px 64px)
  - Back link (arrow + "Back to Dashboard")
  - Transaction Header (2-column: info left, amount right)
    - Merchant name (48px, bold)
    - Meta items (date, category, payment, status)
    - Amount (56px, bold, right-aligned)
  - Content Grid (2-column, 64px gap)
    - Left: Receipt table + location map
    - Right: Payment info grid + similar transactions + monthly trend chart
```

### Social Proof / Dark Section (Splash Page)
```css
.proof {
  padding: 96px 48px;
  background: #000000;
  color: #FFFFFF;
}
.proof-quote {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.5rem, 2.5vw, 2.25rem);
  font-weight: 300;
  line-height: 1.35;
  letter-spacing: -0.01em;
}
.proof-quote em {
  font-style: normal;
  color: #E30613;
  font-weight: 600;
}
/* Attribution: small red square with initials + name/date */
.proof-metric {
  border-left: 1px solid #777777;
  padding-left: 24px;
}
.proof-metric-value {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: -0.03em;
}
.proof-metric-value .red { color: #E30613; } /* red punctuation */
.proof-metric-label {
  font-size: 0.8125rem;
  color: #999999;
}
```

### Hero Section Details (Splash Page)
```css
.hero {
  padding-top: 160px;
  padding-bottom: 128px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #000000;
}
.hero-label {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #E30613; /* red label above headline */
}
.hero-headline {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(3.5rem, 7vw, 6.5rem);
  font-weight: 700;
  line-height: 0.92;
  letter-spacing: -0.04em;
}
.hero-headline em {
  font-style: normal;
  color: #E30613; /* red emphasis word */
}
.hero-sub {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.25rem;
  color: #6A6A6A;
  line-height: 1.6;
  max-width: 520px;
}
.hero-stat {
  border-top: 1px solid #000000;
  padding-top: 24px;
  margin-bottom: 40px;
}
.hero-stat-number {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: -0.03em;
}
```

### CTA Section (Splash Page)
```css
.cta-section {
  padding: 160px 48px;
  border-bottom: 1px solid #000000;
}
.cta-headline {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.04em;
}
.cta-sub {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.0625rem;
  color: #6A6A6A;
}
/* Arrow link box */
.cta-arrow {
  width: 80px;
  height: 80px;
  border: 2px solid #000000;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cta-arrow:hover {
  background: #E30613;
  border-color: #E30613;
}
```

### Footer (Splash Page)
```css
.footer {
  padding: 64px 48px;
  background: #F5F5F5;
}
.footer-top {
  display: grid;
  grid-template-columns: 2fr repeat(4, 1fr);
  gap: 24px;
  padding-bottom: 48px;
  border-bottom: 1px solid #E0E0E0;
}
.footer-col-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #000000;
  margin-bottom: 20px;
}
.footer-col a {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem;
  color: #6A6A6A;
  text-decoration: none;
}
.footer-col a:hover { color: #000000; }
.footer-copyright {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.75rem;
  color: #999999;
}
```

### Checkbox (Login Page)
```css
.checkbox {
  appearance: none;
  width: 16px;
  height: 16px;
  border: 1.5px solid #000000;
  cursor: pointer;
  /* No border-radius - square checkbox */
}
.checkbox:checked {
  background: #000000;
  /* White checkmark via ::after pseudo-element */
}
```

### Back Link (Detail Page)
```css
.back-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 500;
  color: #777777;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-decoration: none;
  margin-bottom: 48px;
}
.back-link:hover { color: #000000; }
/* Includes a left-arrow SVG icon (16x16) */
```

### Similar Transactions List (Detail Page)
```css
.similar-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0;
  border-bottom: 1px solid #E8E8E8;
  font-size: 13px;
}
.similar-item:hover {
  background: #F5F5F5;
  margin: 0 -8px;
  padding: 14px 8px;
}
.average-row {
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
  border-top: 2px solid #000000;
}
.average-label {
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #777777;
}
.average-value {
  font-size: 15px;
  font-weight: 700;
  color: #E30613;
  font-variant-numeric: tabular-nums;
}
```

### Detail Page - Transaction Header
```css
.tx-header {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 40px;
  margin-bottom: 64px;
  padding-bottom: 48px;
  border-bottom: 1px solid #E8E8E8;
}
.tx-merchant {
  font-size: 48px;
  font-weight: 700;
  letter-spacing: -2px;
}
.tx-amount {
  font-size: 56px;
  font-weight: 700;
  letter-spacing: -3px;
  text-align: right;
}
.tx-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
}
.tx-meta-label {
  font-size: 10px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #999999;
}
.tx-meta-value {
  font-size: 14px;
  font-weight: 500;
  color: #333333;
}
.category-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #E30613;
}
```

## Responsive Breakpoints

### Tablet (max-width: 1024px)
- Grid container padding reduces to `24px`
- Dashboard content grid becomes single column
- Dashboard bottom grid becomes single column
- Splash hero content spans wider (col 1-10)

### Mobile (max-width: 900px)
- Login page: left panel hidden, right panel takes full width
- Dashboard sidebar collapses (not shown in templates)

### Desktop (1200px+)
- Dashboard main padding: `48px 64px`
- Content grid gap: `72px`

## Icon Style

### SVG Icons
- Stroke-based icons (not filled)
- `stroke-width: 1.5` to `2`
- `stroke-linecap: round; stroke-linejoin: round`
- Color: `currentColor` (inherits from parent)
- Size: `16px` (in transaction icons, nav)
- Feature icons: `40x40px` with `stroke-width: 1.5`, occasional red fill accents

### Feature Icon Pattern (Splash Page)
```css
.feature-icon {
  width: 40px;
  height: 40px;
}
.feature-icon svg {
  stroke: #000000;
  stroke-width: 1.5;
  fill: none;
}
/* Small red-filled accent shapes within icons */
```

## Design Principles

1. **Swiss/International Typographic Style** - Clean grid systems, precise typography, structured layouts, generous whitespace
2. **Monochrome + Red** - Black, white, and grays with a single red accent (#E30613). No other colors except functional green for success states
3. **Sharp corners everywhere** - 0px border-radius on cards, buttons, inputs, icons. Only avatars are round
4. **Light font weights for large text** - Headlines and metric values use font-weight 300 (light). This is the signature look
5. **Tight negative letter-spacing on headlines** - `-0.03em` to `-0.04em` for display text
6. **Wide positive letter-spacing on labels** - `0.1em` to `0.12em` for uppercase micro-labels
7. **1px black borders as dividers** - Sections separated by thin black rules, not shadows or gaps
8. **2px black rules for section headers** - Thick black underlines on section titles
9. **Generous whitespace** - 64-72px between sections, 32px card padding, 128px section padding on landing pages
10. **No decorative elements** - No textures, noise, tape, stamps, stickers, or torn edges. Pure minimalism
11. **Tabular numerics** - All monetary values and data use `font-variant-numeric: tabular-nums` for alignment
12. **Red as the only accent** - Red is used sparingly for: active nav indicators, CTAs, hover states, key metrics, income amounts, current chart bars
13. **Black sidebar navigation** - Dashboard/detail pages use a fixed black sidebar with white text
14. **White top navigation** - Landing/splash pages use a fixed white top bar with black text
15. **Grid-based layouts** - 12-column grid for landing pages, 2-column content grid for dashboards
16. **Subtle hover states** - Color changes and minimal transforms (translateY -1px), no dramatic effects
17. **Progressive reveal animations** - Content fades up on load with staggered delays using cubic-bezier(0.16, 1, 0.3, 1)
18. **System font fallbacks** - Always include Helvetica, Arial as fallbacks for the Swiss aesthetic
