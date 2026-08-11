---
inclusion: manual
---

# Collage Punk Flux Design System Reference

> Extracted from the collage-punk-flux design templates (splash, login, dashboard, detail pages).
> This is a scrapbook/zine-inspired aesthetic - torn paper, tape strips, stamps, handwritten annotations, and bold typography on aged paper backgrounds.

## Color Palette

### Background Colors
- **Main/Aged**: `#e8e0d4` / `#e8dcc8` - Primary page background (warm aged paper)
- **Paper/Cream**: `#f5f0e8` / `#faf3e6` - Card backgrounds, elevated surfaces
- **Newsprint**: `#d9d2c4` / `#d4c9b0` - Secondary surfaces, muted areas
- **Dark/Ink**: `#1a1a1a` / `#2a2522` - Nav background, dark cards, footer
- **White**: `#ffffff` / `#fffef5` - Feature cards, receipt cards

### Accent Colors
- **Red**: `#c62828` / `#d63031` / `#e53935` - Primary accent, negative values, stamps, CTAs, borders
- **Red Dark**: `#b71c1c` / `#8e0000` / `#8b0000` - Hover states, dark stamps
- **Yellow**: `#f9a825` / `#f9ca24` / `#fdd835` - Highlights, stickers, badges, logo color
- **Yellow Pale**: `#fff3b0` / `#fff9c4` - Soft highlights, hover backgrounds
- **Blue**: `#0984e3` / `#1565c0` - Links, data accents, tape color
- **Blue Pale**: `#dfe6e9` / `#bbdefb` - Soft backgrounds
- **Green**: `#00b894` / `#2e7d32` - Positive values, income, success states
- **Green Light**: `#66bb6a` / `#c8e6c9` - Progress bars, icon backgrounds
- **Pink**: `#fd79a8` / `#e91e63` - Decorative stickers, spending alerts
- **Orange**: `#e65100` - Utilities, dining category

### Text Colors
- **Primary/Ink**: `#1a1a1a` / `#1a1714` - Headings, primary content
- **Ink Light**: `#3a3a3a` / `#3d3a33` - Body text, descriptions
- **Muted**: `#6d6050` - Captions, labels, timestamps (or use `opacity: 0.6` on ink)

### Functional Colors
- **Positive**: `#2e7d32` / `#00b894` - Income, gains, success
- **Negative**: `#c62828` / `#d63031` - Expenses, errors, losses
- **Warning/Highlight**: `#f9a825` / `#f9ca24` - Alerts, emphasis

### Tape & Decorative Colors
- **Tape**: `rgba(255, 243, 176, 0.7)` / `rgba(255, 235, 150, 0.55)` - Scotch tape strips
- **Tape Shadow**: `rgba(0,0,0,0.05)` - Subtle tape shadow
- **Blue Tape**: `rgba(100, 160, 220, 0.35)` - Blue-tinted tape variant
- **Tape Edge**: `rgba(200, 180, 100, 0.3)` - Tape border tint

## Typography

### Font Families

The reference templates use slightly different headline fonts per page. The table below shows the exact mapping from each source file:

| Role | dashboard.html | splash.html | detail.html | login.html |
|------|---------------|-------------|-------------|------------|
| Headline/Bold | `'Oswald', sans-serif` | `'Anton', sans-serif` | `'Anton', sans-serif` | `'Bebas Neue', Impact, sans-serif` |
| Nav logo | `'Permanent Marker', cursive` | `'Anton', sans-serif` | `'Anton', sans-serif` | N/A |
| Nav links | `'Oswald', sans-serif` | `'Space Mono', monospace` | `'Space Mono', monospace` | N/A |
| Stamps/Badges | `'Oswald', sans-serif` | N/A | N/A | `'Oswald', sans-serif` |

Common fonts (same across all pages):
- **Typewriter**: `'Special Elite', 'Courier New', monospace` - Body text, form inputs, descriptions
- **Marker**: `'Permanent Marker', cursive` - Card titles, stat values, stickers
- **Handwritten**: `'Caveat', cursive` - Annotations, subtitles, labels, doodle text
- **Mono**: `'Space Mono', monospace` - Data values, amounts, meta tags

Page-specific headline fonts:
- **Dashboard/Login**: `'Oswald', sans-serif` - Nav links, stamps, uppercase labels, card-title labels
- **Splash/Detail**: `'Anton', sans-serif` - Nav logo, hero headlines, section headings

### Google Fonts Loading

> **CRITICAL**: Do NOT use `@import url(...)` in CSS files when using Tailwind CSS 4.
> Tailwind CSS 4's `@import "tailwindcss"` directive processes and silently strips external `@import url()` rules.
> Always load Google Fonts via `<link>` tags in the HTML `<head>` (in Next.js, use `layout.tsx`).

Dashboard variant (recommended for app pages):
```
Special Elite
Permanent Marker
Oswald:wght@400;700
Caveat:wght@400;700
Space Mono:wght@400;700
```

Splash/detail variant (for landing pages):
```
Special Elite
Permanent Marker
Anton
Caveat:wght@400;700
Space Mono:wght@400;700
```

### Tailwind CSS Mapping
```
font-typewriter -> 'Special Elite', 'Courier New', monospace (body text, inputs)
font-marker -> 'Permanent Marker', cursive (card titles, stat values, nav logo on dashboard)
font-headline -> 'Oswald', sans-serif (nav links, stamps, labels on dashboard)
             or 'Anton', sans-serif (nav logo, hero text on splash/detail)
font-handwritten -> 'Caveat', cursive (annotations, subtitles, labels)
font-mono -> 'Space Mono', monospace (amounts, data, meta tags)
```

### Font Sizes
| Token | Size | Usage |
|-------|------|-------|
| xs | 0.65-0.7rem | Meta tags, card labels, uppercase labels |
| sm | 0.8-0.85rem | Nav links, body text, descriptions, card titles |
| base | 0.9-0.95rem | Transaction names, form inputs |
| lg | 1.1-1.3rem | Feature card titles, step titles, handwritten labels |
| xl | 1.5rem | Section card headers (marker font) |
| 2xl | 2-2.5rem | Stat values, proof numbers, CTA headings |
| 3xl | 3-3.5rem | Section headings (headline font) |
| hero | clamp(3rem, 6vw, 5.5rem) | Hero headline |

### Font Weights
- 400: Regular - typewriter body text, general text
- 700: Bold - headline font, mono amounts, marker text (inherently bold)

### Letter Spacing
- Headlines: `2-4px` (wider, uppercase)
- Labels/Uppercase: `1-2px` (wider)
- Body: `0` (default)
- Logo: `2-3px` (wider)

## Spacing & Layout

### Border Radius
| Token | Value | Usage |
|-------|-------|-------|
| none | 0px | Most cards (sharp corners for paper/collage feel) |
| rough | 2px | Form inputs (barely rounded) |
| sm | 4px | Stamps, small badges |
| full | 50% | Avatars, icon circles, stickers, circle stamps |

### Page Structure
- Nav height: `60-72px` (fixed/sticky)
- Main content padding: `30-40px`
- Dashboard grid: `4-column` grid with `30px` gap
- Max content width: none (full-width dashboard) or `1200px` (splash features)
- Detail page: `2-column` grid

### Common Spacing
- Card padding: `24-30px`
- Nav padding: `0 40px`
- Section padding: `80-100px 60px` (splash sections)
- Feature card padding: `36px 28px`
- Form input padding: `12px 14px`
- Button padding: `14-18px 36-44px`
- Transaction item padding: `10px 0` with dashed bottom border

## Components

### Card (Primary Container) - Paper Cutout Style
```css
.card {
  background: #f5f0e8; /* paper color */
  background-image: url("data:image/svg+xml,..."); /* subtle noise texture */
  padding: 24px;
  position: relative;
  box-shadow: 2px 3px 6px rgba(0,0,0,0.15); /* paste shadow */
  border: 1px solid rgba(0,0,0,0.08); /* or 2-3px solid #1a1a1a for bold border */
}
```
Cards should feel like paper cutouts pasted onto a corkboard/scrapbook page. Some cards have bold ink borders, others have subtle shadows only.

### Feature Card (Bold Border + Shadow)
```css
.feature-card {
  background: white;
  border: 3px solid #1a1a1a;
  padding: 36px 28px;
  box-shadow: 6px 6px 0 #1a1a1a; /* hard offset shadow */
  transition: transform 0.3s, box-shadow 0.3s;
}
.feature-card:hover {
  transform: rotate(0deg) translateY(-4px);
  box-shadow: 8px 8px 0 #c62828; /* red shadow on hover */
}
```

### Stat Card
```css
.stat-card {
  background: #f5f0e8;
  text-align: center;
  padding: 28px 20px;
  border-left: 5px solid <category-color>; /* green for income, red for spending, blue for savings */
  transform: rotate(var(--slight-rotation)); /* -1.5deg to 2deg */
  box-shadow: 2px 3px 6px rgba(0,0,0,0.15);
}
.stat-card:hover {
  transform: rotate(0deg) scale(1.03);
  box-shadow: 3px 5px 12px rgba(0,0,0,0.2);
}
.stat-value {
  font-family: 'Permanent Marker', cursive;
  font-size: 2.2rem;
  color: <category-color>;
}
.stat-label {
  font-family: 'Caveat', cursive;
  font-size: 1.1rem;
  opacity: 0.6;
}
```

### Primary CTA Button
```css
.btn-primary {
  display: inline-block;
  background: #1a1a1a;
  color: #f5f0e8;
  font-family: 'Permanent Marker', cursive;
  font-size: 1.3rem;
  padding: 16px 36px;
  border: 3px solid #1a1a1a;
  cursor: pointer;
  box-shadow: 4px 4px 0 #c62828; /* red offset shadow */
  transition: all 0.2s;
}
.btn-primary:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 #c62828;
}
```
Alternate red CTA variant: `background: #c62828; border-color: #c62828; box-shadow: 4px 4px 0 #1a1a1a;`

### Secondary/Ghost Button
```css
.btn-secondary {
  font-family: 'Caveat', cursive;
  font-size: 1.4rem;
  color: #1a1a1a;
  text-decoration: none;
  border-bottom: 2px dashed #1a1a1a;
  padding-bottom: 2px;
}
.btn-secondary:hover {
  color: #c62828;
  border-color: #c62828;
}
```

### Input Field
```css
.form-input {
  width: 100%;
  padding: 12px 14px;
  font-family: 'Special Elite', monospace;
  font-size: 15px;
  color: #1a1a1a;
  background: #e8dcc8; /* aged paper */
  border: 2px solid #1a1a1a;
  border-radius: 2px;
  outline: none;
}
.form-input:focus {
  background: #faf3e6;
  border-color: #c62828;
  box-shadow: 3px 3px 0 #1a1a1a; /* hard offset shadow on focus */
}
```

### Navigation (Top Bar)

The dashboard and splash/detail pages differ in nav font choices:

```css
nav {
  background: #2a2522; /* dark ink with noise texture */
  color: #f5f0e8;
  padding: 0 40px;
  height: 72px;
  display: flex;
  align-items: center;
  border-bottom: 4px solid #1a1a1a; /* dashboard uses ink border */
  /* splash/detail uses: border-bottom: 4px solid #c62828 (red) */
  position: sticky;
  top: 0;
  z-index: 100;
}

/* Dashboard variant (dashboard.html) */
.nav-logo {
  font-family: 'Permanent Marker', cursive; /* --font-marker */
  font-size: 2.2rem;
  color: #f5f0e8; /* paper color, NOT yellow */
  letter-spacing: 2px;
}
.nav-links a {
  font-family: 'Oswald', sans-serif; /* --font-headline */
  font-size: 0.85rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #ddd5c5; /* newsprint */
}

/* Splash/Detail variant (splash.html, detail.html) */
.nav-logo {
  font-family: 'Anton', sans-serif; /* --font-bold */
  font-size: 2rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #f9ca24; /* yellow */
  text-shadow: 2px 2px 0 #c62828; /* red text shadow */
}
.nav-links a {
  font-family: 'Space Mono', monospace; /* --font-mono */
  font-size: 0.8rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #f5f0e8;
}

/* Common nav link hover/active (all pages) */
.nav-links a:hover { color: #f9ca24; }
.nav-links a.active::after {
  height: 3px;
  background: #c62828;
  transform: rotate(-1deg);
}
```

### Avatar
```css
.avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #f9a825; /* yellow */
  color: #2a2522; /* dark */
  font-family: 'Permanent Marker', cursive;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #f5f0e8;
  transform: rotate(4deg);
}
.avatar:hover { transform: rotate(-4deg) scale(1.1); }
```

### Stamp Badge
```css
.stamp {
  display: inline-block;
  padding: 4px 12px;
  border: 3px solid <color>;
  border-radius: 4px;
  font-family: 'Oswald', sans-serif; /* --font-headline on dashboard */
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  transform: rotate(-3deg);
  font-size: 0.7rem;
  color: <color>; /* matches border color */
}
```
Variants: `.stamp-red` (red border/text), `.stamp-green`, `.stamp-blue`

### Progress Bar (Hatched Fill)
```css
.progress-track {
  height: 12-18px;
  background: #ddd5c5; /* newsprint */
  border: 2px solid #1a1a1a;
  overflow: hidden;
}
.progress-fill {
  height: 100%;
  /* Diagonal stripe pattern for each category */
  background: repeating-linear-gradient(
    45deg,
    <color>, <color> 4px,
    <color-light> 4px, <color-light> 8px
  );
}
```

### Transaction Item
```css
.tx-item {
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid rgba(0,0,0,0.06); /* or 1px dashed */
}
.tx-icon {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 2px solid #1a1a1a;
  background: <category-tint>; /* light tint per category */
}
.tx-name {
  font-family: 'Special Elite', monospace;
  font-size: 0.9rem;
  font-weight: 700;
}
.tx-category {
  font-family: 'Caveat', cursive;
  font-size: 0.95rem;
  opacity: 0.5;
}
.tx-amount {
  font-family: 'Space Mono', monospace;
  font-size: 0.95rem;
  font-weight: 700;
}
.tx-amount.negative { color: #c62828; }
.tx-amount.positive { color: #2e7d32; }
```

## Decorative Elements (Critical for the Collage Aesthetic)

### Tape Strips
Every card should have 1-2 tape strips to look "pasted" onto the page:
```css
.tape {
  position: absolute;
  width: 70-100px;
  height: 24-28px;
  background: rgba(255, 235, 150, 0.55); /* semi-transparent yellow */
  border-top: 1px solid rgba(200, 180, 100, 0.3);
  border-bottom: 1px solid rgba(200, 180, 100, 0.3);
  z-index: 10;
  transform: rotate(<random -8deg to 5deg>);
}
/* Position at top-left, top-right, or top-center of cards */
.tape-tl { top: -10px; left: 15px; }
.tape-tr { top: -10px; right: 15px; }
.tape-center { top: -12px; left: 50%; transform: translateX(-50%) rotate(-2deg); }
```
Blue tape variant: `background: rgba(100, 160, 220, 0.35);`

### Washi Tape (Patterned)
```css
.washi {
  position: absolute;
  height: 20px;
  z-index: 10;
  opacity: 0.7;
  top: -8px;
  /* Diagonal stripe pattern */
  background: repeating-linear-gradient(45deg, <color>, <color> 3px, transparent 3px, transparent 6px);
  width: 70-90px;
  transform: rotate(<random -5deg to 4deg>);
}
```
Color variants: pink (#ffcdd2), blue (#bbdefb), green (#c8e6c9), yellow (#fff9c4)

### Torn Paper Edges
Apply to section dividers and card bottoms for a ripped-paper effect:
```css
.torn-bottom::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0; right: 0;
  height: 12px;
  background: inherit;
  clip-path: polygon(0% 0%, 3% 60%, 5% 20%, 8% 70%, 12% 10%, 15% 80%, ...);
}
```
Use irregular polygon clip-paths with alternating high/low points to simulate torn paper.

### Sticker Badges
```css
.sticker {
  display: inline-block;
  padding: 8px 16px;
  border: 3px solid #1a1a1a;
  border-radius: 50%;
  font-family: 'Permanent Marker', cursive;
  font-size: 0.85rem;
  transform: rotate(-8deg);
  background: #f9ca24; /* yellow */
  box-shadow: 2px 3px 0 #1a1a1a;
}
```

### Circle Stamp (Decorative)
```css
.circle-stamp {
  width: 70px;
  height: 70px;
  border: 3px solid #c62828;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Oswald', sans-serif; /* --font-headline on dashboard */
  text-transform: uppercase;
  font-size: 0.55rem;
  letter-spacing: 1px;
  color: #c62828;
  transform: rotate(-15deg);
  opacity: 0.6;
}
```

### Handwritten Annotations / Doodle Arrows
Scatter handwritten notes near data points for personality:
```css
.annotation {
  font-family: 'Caveat', cursive;
  color: #c62828;
  font-size: 16-20px;
  transform: rotate(-3deg to -8deg);
}
/* Examples: "← Friday spike!", "↑ ouch!", "← pretty consistent", "↓ Trending down!" */
```

### Scattered Decorative Elements
Place these as `position: absolute` background elements:
```css
/* Large X marks */
.scattered-x {
  font-family: 'Permanent Marker', cursive;
  font-size: 3-5rem;
  color: #c62828;
  opacity: 0.1;
  pointer-events: none;
}
/* Dashed circles */
.scattered-circle {
  width: 80px; height: 80px;
  border: 3px dashed #1a1a1a;
  border-radius: 50%;
  opacity: 0.08;
}
```

### Paper Clip
```css
/* SVG paper clip attached to card top */
.paperclip {
  position: absolute;
  top: -14px;
  z-index: 15;
  pointer-events: none;
}
/* Use an SVG path for the wire shape */
```

### Yellow Highlight (Marker Underline)
```css
.highlight::after {
  content: '';
  position: absolute;
  bottom: 4px;
  left: -4px; right: -4px;
  height: 14px;
  background: #f9ca24;
  z-index: -1;
  transform: rotate(-1deg);
}
```

### Scribble Underline
```css
.scribble-underline::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0; right: 0;
  height: 4px;
  background: url("data:image/svg+xml,...wavy-line...") repeat-x;
}
```

## Background Textures (Critical for Aged Paper Feel)

### Paper Grain Texture
Always apply to `body` and cards:
```css
body {
  background-color: #e8e0d4;
  background-image: url("data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E");
}
```

### Crosshatch Pattern Overlay
Apply to sections for additional texture:
```css
.crosshatch-bg {
  background-image:
    repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.015) 10px, rgba(0,0,0,0.015) 11px),
    repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(0,0,0,0.015) 10px, rgba(0,0,0,0.015) 11px);
}
```

### Newsprint Line Texture (Login page)
```css
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image:
    repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.015) 2px, rgba(0,0,0,0.015) 3px),
    repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(0,0,0,0.01) 3px, rgba(0,0,0,0.01) 4px);
  pointer-events: none;
  z-index: 1;
}
```

### HTML Structure
```html
<body>
  <!-- Body itself has paper grain via background-image -->
  <!-- No separate overlay divs needed - use ::before/::after on body for newsprint lines -->
  <!-- App content sits directly in body -->
</body>
```

### Next.js / React Implementation
In `globals.css`, include the paper grain on body and crosshatch as a utility class.
Do NOT put `@import url('https://fonts.googleapis.com/...')` in `globals.css` - Tailwind CSS 4 will strip it.

In `layout.tsx`, load Google Fonts via `<link>` tags in `<head>`:
```tsx
<html lang="en">
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Special+Elite&family=Permanent+Marker&family=Oswald:wght@400;700&family=Caveat:wght@400;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
  </head>
  <body className="bg-[#e8e0d4] text-[#1a1a1a] font-typewriter min-h-screen overflow-x-hidden">
    <div className="relative z-[2]">{children}</div>
  </body>
</html>
```

## Animations

### Entry Animations
- **pasteIn**: `translateY(20px) scale(0.95)` to `translateY(0) scale(1)`, 0.5-0.6s ease-out (cards pasting onto page)
- **slideInLeft**: `translateX(-60px) rotate(-2deg)` to `translateX(0) rotate(0)`, 0.8s ease-out
- **slideInRight**: `translateX(60px) rotate(2deg)` to `translateX(0) rotate(0)`, 0.8s ease-out
- **stampIn**: `scale(2.5) rotate(-15deg)` to `scale(1) rotate(-12deg)`, 0.6s ease-out (stamp slam effect)
- **stickerPop**: `scale(0) rotate(-20deg)` to `scale(1) rotate(-8deg)`, 0.4s ease-out
- **logoSlam**: `scale(2) rotate(-10deg)` to `scale(1) rotate(0)`, 0.5s ease-out (nav logo)
- **fillBar**: `width: 0` to `width: <target>`, 1.2s ease-out (progress bars)

### Stagger Pattern
```css
.card:nth-child(1) { animation-delay: 0.05s; }
.card:nth-child(2) { animation-delay: 0.1s; }
.card:nth-child(3) { animation-delay: 0.15s; }
.card:nth-child(4) { animation-delay: 0.2s; }
/* ... increment by 0.05s */
```

### Hover Effects
- Cards: `rotate(0deg) scale(1.03)`, stronger box-shadow
- Feature cards: `translateY(-4px)`, shadow color changes from ink to red
- Buttons: `translate(-2px, -2px)`, shadow grows (hard offset)
- Nav links: color change to yellow, red underline bar appears
- Avatar: `rotate(-4deg) scale(1.1)` (playful wobble)

### Floating Background Elements
```css
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}
/* Apply to decorative background shapes, 8-10s infinite */
```

## Card Rotation Pattern (Critical for Collage Feel)

Every card should have a slight random rotation to look hand-placed:
```css
.card:nth-child(odd) { transform: rotate(-0.5deg to -2deg); }
.card:nth-child(even) { transform: rotate(0.5deg to 2deg); }
/* On hover, rotate back to 0deg for a "straightening" effect */
```
Use CSS custom properties for per-card rotation: `--rot: -1.5deg;`

## Tailwind CSS Quick Reference

```js
// tailwind.config.ts extension for Collage Punk Flux theme
const collagePunkTheme = {
  colors: {
    'bg-main': '#e8e0d4',
    'bg-paper': '#f5f0e8',
    'bg-newsprint': '#d9d2c4',
    'bg-dark': '#2a2522',
    'ink': '#1a1a1a',
    'ink-light': '#3a3a3a',
    'accent-red': '#c62828',
    'accent-red-dark': '#8e0000',
    'accent-yellow': '#f9a825',
    'accent-yellow-pale': '#fff9c4',
    'accent-blue': '#1565c0',
    'accent-green': '#2e7d32',
    'accent-green-light': '#66bb6a',
    'accent-pink': '#e91e63',
    'accent-orange': '#e65100',
    'tape': 'rgba(255, 235, 150, 0.55)',
    'positive': '#2e7d32',
    'negative': '#c62828',
    'warning': '#f9a825',
  },
  fontFamily: {
    'typewriter': ['Special Elite', 'Courier New', 'monospace'],
    'marker': ['Permanent Marker', 'cursive'],
    'headline': ['Oswald', 'sans-serif'], /* dashboard/login pages */
    'headline-bold': ['Anton', 'sans-serif'], /* splash/detail pages */
    'handwritten': ['Caveat', 'cursive'],
    'mono': ['Space Mono', 'monospace'],
  },
  borderRadius: {
    'none': '0px',
    'rough': '2px',
    'sm': '4px',
    'full': '50%',
  },
}
```

### Common Utility Patterns
```
/* Paper Card */
bg-[#f5f0e8] p-6 relative shadow-[2px_3px_6px_rgba(0,0,0,0.15)] border border-black/[0.08]

/* Bold Border Card */
bg-white border-[3px] border-[#1a1a1a] p-9 shadow-[6px_6px_0_#1a1a1a]

/* Stat Value */
font-marker text-[2.2rem] text-[#c62828]

/* Primary CTA */
bg-[#1a1a1a] text-[#f5f0e8] font-marker text-xl px-9 py-4 border-[3px] border-[#1a1a1a] shadow-[4px_4px_0_#c62828]

/* Nav Logo (dashboard variant) */
font-marker text-[2.2rem] text-[#f5f0e8] tracking-[2px]

/* Nav Logo (splash/detail variant) */
font-headline text-[2rem] uppercase tracking-[3px] text-[#f9ca24] [text-shadow:2px_2px_0_#c62828]

/* Section Label (uppercase headline) */
font-headline text-[0.8rem] uppercase tracking-[2px] text-[#1a1a1a] opacity-70

/* Body Text */
font-typewriter text-sm text-[#3a3a3a] leading-relaxed

/* Handwritten Annotation */
font-handwritten text-[#c62828] text-base -rotate-3

/* Tape Strip */
absolute w-20 h-6 bg-[rgba(255,235,150,0.55)] z-10 -top-3 left-4 -rotate-[8deg]
```

## Chart Styling

### SVG Line Chart (Hand-drawn feel)
```css
/* Area fill with gradient fade */
polygon { fill: url(#areaGrad); } /* gradient from color 0.3 opacity to 0.02 */
/* Line with round caps */
polyline { stroke: #c62828; stroke-width: 3; stroke-linecap: round; stroke-linejoin: round; }
/* Data points: paper-colored fill with colored stroke */
circle { fill: #f5f0e8; stroke: #c62828; stroke-width: 2.5; r: 5; }
/* Handwritten value labels using Caveat font */
text { font-family: 'Caveat', cursive; font-size: 16px; opacity: 0.6; }
```

### Bar Chart
```css
.chart-bar {
  background: #1a1a1a;
  border: 2px solid #1a1a1a;
  width: 50px;
}
.chart-bar.current {
  background: #c62828; /* highlight current period in red */
  border-color: #c62828;
}
.chart-bar-value {
  font-family: 'Space Mono', monospace;
  font-size: 11px;
  font-weight: 700;
}
.chart-bar-label {
  font-family: 'Special Elite', monospace;
  font-size: 12px;
  text-transform: uppercase;
}
```

### Ring/Donut Chart (Goal Progress)
```css
/* Dark background card for contrast */
.goal-card { background: #2a2522; color: #f5f0e8; }
/* SVG ring with yellow stroke */
circle.track { stroke: rgba(255,255,255,0.1); stroke-width: 12; }
circle.fill { stroke: #f9a825; stroke-width: 12; stroke-linecap: round; }
/* Animated stroke-dashoffset for fill animation */
.goal-ring-pct { font-family: 'Permanent Marker'; font-size: 2rem; color: #f9a825; }
```

## Design Principles

1. **Scrapbook/Zine aesthetic** - Everything looks hand-cut, pasted, and annotated on aged paper
2. **Tape and paste** - Cards are "attached" with tape strips, washi tape, or paper clips
3. **Slight rotations** - Every element is slightly rotated (-2deg to 2deg) for a hand-placed feel
4. **Bold ink borders** - Heavy 2-3px solid black borders on key elements (not subtle/transparent)
5. **Hard offset shadows** - `4-6px 4-6px 0 <color>` instead of soft blurs
6. **Torn paper edges** - Irregular clip-path polygons on section dividers
7. **Handwritten annotations** - Caveat font doodles, arrows, and comments scattered near data
8. **Stamps and stickers** - Circular/rectangular badges with bold borders for status indicators
9. **Aged paper textures** - SVG noise filters on backgrounds, crosshatch patterns
10. **Red + Yellow + Ink** - Primary palette is warm: red accents, yellow highlights, black ink on cream paper
11. **Typewriter body text** - Special Elite font gives everything a vintage typed feel
12. **Marker headlines** - Permanent Marker font for titles feels hand-lettered
13. **Category-colored progress bars** - Diagonal stripe (hatched) fills instead of solid colors
14. **Playful hover states** - Elements "straighten out" or grow slightly on hover
15. **No rounded corners on cards** - Sharp edges reinforce the cut-paper metaphor (only pills/avatars are round)
