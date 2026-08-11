---
inclusion: always
---

# Aurora Flux Design System Reference

> Extracted from the aurora-ui-flux design templates (splash, login, dashboard, detail pages).

## Color Palette

### Background Colors
- **Deep/Void**: `#070a13` / `#060611` / `#0a0a12` - Page background, deepest layer
- **Base**: `#0c1220` - Secondary background
- **Surface**: `rgba(255, 255, 255, 0.04)` - Elevated surface
- **Card**: `rgba(15, 25, 50, 0.45)` or `rgba(255, 255, 255, 0.06)` - Glass card background
- **Card Hover**: `rgba(20, 32, 65, 0.55)` or `rgba(255, 255, 255, 0.09)` - Card hover state

### Aurora Accent Colors (Gradient Palette)
- **Aurora Green**: `#38ef7d` / `#3dffc0` / `#00f5a0` - Primary accent, positive states, CTAs
- **Aurora Teal**: `#11d3bc` / `#22d9b4` / `#14b8a6` - Secondary accent
- **Aurora Cyan**: `#00d4ff` / `#00e5ff` / `#22d3ee` - Charts, data highlights
- **Aurora Blue**: `#4facfe` / `#4d8bff` / `#3b82f6` - Links, secondary data
- **Aurora Purple/Violet**: `#a855f7` / `#7b61ff` - Tertiary accent, goals
- **Aurora Pink**: `#e879f9` / `#f472b6` / `#ec4899` - Spending, alerts
- **Aurora Magenta**: `#f472b6` - Decorative gradients

### Text Colors
- **Primary**: `#e8edf5` / `#f0f2f8` - Headings, primary content
- **Secondary**: `rgba(200, 215, 240, 0.65)` / `rgba(240, 242, 248, 0.6)` - Body text, descriptions
- **Muted/Tertiary**: `rgba(160, 180, 220, 0.4)` / `rgba(240, 242, 248, 0.35)` - Captions, labels, timestamps

### Functional Colors
- **Positive**: `#38ef7d` / `#3dffc2` - Income, gains, success
- **Negative**: `#f87171` / `#ff6b8a` - Expenses, errors, losses
- **Warning**: `#fbbf24` - Alerts, caution states

### Glass/Border Colors
- **Glass Border**: `rgba(120, 160, 255, 0.1)` / `rgba(255, 255, 255, 0.08)` - Card borders, dividers
- **Glass Border Hover**: `rgba(120, 160, 255, 0.2)` / `rgba(255, 255, 255, 0.14)` - Hover state borders
- **Input Border**: `rgba(255, 255, 255, 0.08)` - Form field borders
- **Input Focus**: `rgba(0, 245, 160, 0.3)` - Focus ring color

## Typography

### Font Families
- **Display**: `'Space Grotesk', sans-serif` or `'Outfit', sans-serif` - Headings, hero text, stat values, brand
- **Body**: `'Outfit', sans-serif` or `'Space Grotesk', sans-serif` or `'DM Sans', sans-serif` - Body text, labels, UI elements

### Google Fonts Import
```
Outfit:wght@200;300;400;500;600;700;800
Space Grotesk:wght@300;400;500;600;700
DM Sans:wght@300;400;500
```

### Tailwind CSS Mapping
```
font-display -> 'Outfit' or 'Space Grotesk' (for headings, stat values, brand)
font-body -> 'Space Grotesk' or 'Outfit' (for body text, UI elements)
```

### Font Sizes
| Token | Size | Usage |
|-------|------|-------|
| xs | 0.7-0.72rem | Taglines, timestamps, tertiary labels |
| sm | 0.78-0.82rem | Stat labels, card actions, meta text |
| base | 0.85-0.92rem | Nav items, body text, transaction names |
| lg | 1.0-1.05rem | Card titles, section labels |
| xl | 1.25-1.35rem | Feature titles, sub-headings |
| 2xl | 1.65-1.75rem | Stat values, page headings |
| 3xl | 2.2rem | Large amounts, hero sub-elements |
| hero | clamp(3.5rem, 7vw, 6.5rem) | Hero headline |

### Font Weights
- 300: Light - body text, descriptions, subtitles
- 400: Regular - nav items, general text
- 500: Medium - card titles, labels, nav active
- 600: Semi-bold - section headings, stat values, buttons
- 700: Bold - hero text, brand name, large numbers
- 800: Extra-bold - hero headline only

### Letter Spacing
- Headings: `-0.02em` to `-0.04em` (tighter)
- Labels/Uppercase: `0.06em` to `0.15em` (wider)
- Body: `0` to `0.01em` (default)

## Spacing & Layout

### Border Radius
| Token | Value | Usage |
|-------|-------|-------|
| sm | 8px | Icons, small elements, progress bars |
| md | 14-16px | Cards, inputs, nav items, buttons |
| lg | 20-24px | Large cards, feature cards, modals |
| xl | 28-32px | Login card, hero mockup, major containers |
| full | 100px / 50% | Pills, badges, avatars, CTA buttons |

### Blur Values
- **Glass**: `20-24px` - Standard glassmorphism backdrop
- **Heavy**: `40px` - Sidebar, login card, deep glass
- **Aurora orbs**: `60-100px` - Background decorative blurs

### Page Structure
- Sidebar width: `260px` (fixed, sticky)
- Main content padding: `36px 40px 60px`
- Max content width: `1100-1280px`
- Grid gap: `20-24px`

### Common Spacing
- Card padding: `24-28px` (stat cards), `28-40px` (glass cards)
- Nav item padding: `12px 14-16px`
- Button padding: `10px 24px` (nav CTA), `15-16px 40px` (primary CTA)
- Section padding: `120px 60px` (desktop), `80px 24px` (mobile)

## Components

### Glass Card (Primary Container)
```css
background: rgba(15, 25, 50, 0.45); /* or rgba(255, 255, 255, 0.06) */
backdrop-filter: blur(20px);
border: 1px solid rgba(120, 160, 255, 0.1);
border-radius: 20px;
padding: 28px;
position: relative;
overflow: hidden;
```
Top luminous line accent:
```css
.glass-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(120, 160, 255, 0.15), transparent);
}
```
Tailwind: `bg-white/[0.06] backdrop-blur-[20px] border border-white/[0.08] rounded-[20px] p-7 relative overflow-hidden`

### Stat Card
```css
background: rgba(15, 25, 50, 0.45);
backdrop-filter: blur(20px);
border: 1px solid rgba(120, 160, 255, 0.1);
border-radius: 20px;
padding: 24px;
/* Top accent line with card-specific color */
/* Subtle glow orb in bottom-right corner */
/* Hover: translateY(-2px), brighter border */
```

### Primary CTA Button
```css
padding: 16px 40px;
background: linear-gradient(135deg, #3dffc0, #00e5ff);
border: none;
border-radius: 100px;
color: #070a13; /* dark text on bright gradient */
font-weight: 600;
box-shadow: 0 0 40px rgba(61, 255, 192, 0.2), 0 4px 20px rgba(0, 0, 0, 0.3);
/* Hover: translateY(-2px), stronger glow */
/* Shimmer effect on hover via ::before pseudo-element */
```
Tailwind: `bg-gradient-to-br from-[#3dffc0] to-[#00e5ff] text-[#070a13] font-semibold rounded-full px-10 py-4 shadow-[0_0_40px_rgba(61,255,192,0.2)] hover:-translate-y-0.5 transition-all`

### Secondary/Ghost Button
```css
background: rgba(255, 255, 255, 0.06);
border: 1px solid rgba(255, 255, 255, 0.08);
border-radius: 100px;
color: #f0f2f8;
backdrop-filter: blur(10px);
/* Hover: brighter background, subtle green glow */
```

### Input Field
```css
background: rgba(255, 255, 255, 0.03);
border: 1px solid rgba(255, 255, 255, 0.08);
border-radius: 14px;
padding: 14px 16px 14px 46px; /* left padding for icon */
color: #e8edf5;
/* Focus: border-color rgba(0, 245, 160, 0.3), green glow ring */
```

### Navigation (Sidebar)
```css
background: rgba(8, 12, 24, 0.7);
backdrop-filter: blur(40px);
border-right: 1px solid rgba(120, 160, 255, 0.1);
width: 260px;
/* Active item: green-tinted background, left accent bar */
.nav-item.active {
  background: rgba(56, 239, 125, 0.08);
  /* 3px left bar with green-teal gradient */
}
```

### Avatar
```css
width: 40px;
height: 40px;
border-radius: 50%;
background: linear-gradient(135deg, #a855f7, #f472b6);
/* Online indicator: 10px green dot with deep border */
```

### Badge/Pill
```css
padding: 5px 12px;
border-radius: 20px;
background: rgba(61, 255, 194, 0.08);
border: 1px solid rgba(61, 255, 194, 0.15);
font-size: 0.75rem;
color: #3dffc2;
/* Status dot: 6px green circle with glow */
```

### Progress Bar
```css
.track {
  height: 6px;
  border-radius: 3px;
  background: rgba(120, 160, 255, 0.08);
}
.fill {
  height: 100%;
  border-radius: 3px;
  background: linear-gradient(90deg, #38ef7d, #11d3bc); /* varies per item */
  /* Glowing dot at end via ::after */
}
```

### Transaction Item
```css
display: grid;
grid-template-columns: 40px 1fr auto;
gap: 14px;
padding: 14px 0;
border-bottom: 1px solid rgba(120, 160, 255, 0.04);
/* Icon: 40x40 rounded-sm with category-tinted background */
```

## Aurora Background Effect (Complete CSS)

Always include these two elements as the first children of `<body>` or the root layout:

```css
/* ===== AURORA ANIMATED BACKGROUND ===== */
.aurora-bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
}

.aurora-bg::before {
  content: '';
  position: absolute;
  width: 140%;
  height: 140%;
  top: -30%;
  left: -20%;
  background:
    radial-gradient(ellipse 600px 400px at 15% 20%, rgba(56, 239, 125, 0.12) 0%, transparent 70%),
    radial-gradient(ellipse 500px 600px at 75% 10%, rgba(0, 212, 255, 0.1) 0%, transparent 60%),
    radial-gradient(ellipse 800px 300px at 50% 50%, rgba(168, 85, 247, 0.08) 0%, transparent 70%),
    radial-gradient(ellipse 400px 500px at 85% 70%, rgba(244, 114, 182, 0.07) 0%, transparent 60%),
    radial-gradient(ellipse 600px 400px at 20% 80%, rgba(17, 211, 188, 0.09) 0%, transparent 65%);
  animation: auroraDrift 25s ease-in-out infinite alternate;
}

.aurora-bg::after {
  content: '';
  position: absolute;
  width: 120%;
  height: 120%;
  top: -10%;
  left: -10%;
  background:
    radial-gradient(ellipse 500px 350px at 60% 30%, rgba(79, 172, 254, 0.1) 0%, transparent 65%),
    radial-gradient(ellipse 700px 250px at 30% 60%, rgba(56, 239, 125, 0.06) 0%, transparent 60%),
    radial-gradient(ellipse 450px 450px at 80% 50%, rgba(232, 121, 249, 0.08) 0%, transparent 55%);
  animation: auroraDrift2 30s ease-in-out infinite alternate;
}

@keyframes auroraDrift {
  0% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(30px, -20px) rotate(1deg); }
  66% { transform: translate(-20px, 15px) rotate(-0.5deg); }
  100% { transform: translate(15px, -10px) rotate(0.5deg); }
}

@keyframes auroraDrift2 {
  0% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(-25px, 20px) rotate(-1deg); }
  100% { transform: translate(20px, -15px) rotate(0.5deg); }
}

/* ===== GRAIN TEXTURE OVERLAY ===== */
.grain {
  position: fixed;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 256px;
}
```

### HTML Structure
```html
<body>
  <div class="aurora-bg"></div>
  <div class="grain"></div>
  <!-- App content with position: relative; z-index: 2; -->
</body>
```

### Next.js / React Implementation
In `globals.css`, include the CSS above. In `layout.tsx`, add the two divs before `{children}`:
```tsx
<body className="bg-[#070a13] text-[#e8edf5] font-body antialiased min-h-screen overflow-x-hidden">
  <div className="aurora-bg" />
  <div className="grain" />
  <div className="relative z-[2]">{children}</div>
</body>
```

### Glass Card Top-Edge Light Line
Every glass card should have this subtle luminous top border:
```css
.glass-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(120, 160, 255, 0.15), transparent);
}
```

### Sidebar Left Accent Bar (Active Nav Item)
```css
.nav-item.active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 24px;
  border-radius: 2px;
  background: linear-gradient(180deg, #38ef7d, #11d3bc);
}
```

### SVG Gradient Definitions (for charts)
Include once in the page for chart line/area gradients:
```html
<svg width="0" height="0" style="position:absolute">
  <defs>
    <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#00d4ff" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#00d4ff" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#38ef7d"/>
      <stop offset="50%" stop-color="#00d4ff"/>
      <stop offset="100%" stop-color="#a855f7"/>
    </linearGradient>
    <linearGradient id="ringGradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#38ef7d"/>
      <stop offset="100%" stop-color="#00d4ff"/>
    </linearGradient>
  </defs>
</svg>
```

## Animations

### Entry Animations
- **fadeInUp**: `translateY(16-30px)` to `translateY(0)`, 0.5-0.8s ease-out
- **slideInLeft**: `translateX(-100%)` to `translateX(0)`, 0.6s ease-out (sidebar)
- **containerReveal**: `translateY(20px)` to `translateY(0)`, 1s cubic-bezier(0.16, 1, 0.3, 1)

### Stagger Pattern
```css
.stagger-1 { animation-delay: 0.3s; }
.stagger-2 { animation-delay: 0.4s; }
.stagger-3 { animation-delay: 0.5s; }
.stagger-4 { animation-delay: 0.6s; }
.stagger-5 { animation-delay: 0.7s; }
```

### Hover Effects
- Cards: `translateY(-2px)` to `-4px`, brighter border, subtle glow
- Buttons: `translateY(-1px)` to `-2px`, stronger box-shadow
- Nav items: background tint, color change

### Chart Animations
- Line draw: `stroke-dashoffset` animation, 1.5s ease-out
- Bar grow: `scaleY(0)` to `scaleY(1)`, 1s ease-out
- Ring fill: `stroke-dashoffset` animation for circular progress
- Dot appear: `scale(0)` to `scale(1)`, 0.3s staggered

## Tailwind CSS Quick Reference

```js
// tailwind.config.ts extension for Aurora Flux theme
const auroraTheme = {
  colors: {
    'aurora-green': '#38ef7d',
    'aurora-teal': '#11d3bc',
    'aurora-cyan': '#00d4ff',
    'aurora-blue': '#4facfe',
    'aurora-purple': '#a855f7',
    'aurora-pink': '#e879f9',
    'aurora-magenta': '#f472b6',
    'deep': '#070a13',
    'surface': 'rgba(255, 255, 255, 0.04)',
    'card': 'rgba(15, 25, 50, 0.45)',
    'card-hover': 'rgba(20, 32, 65, 0.55)',
    'glass-border': 'rgba(120, 160, 255, 0.1)',
    'glass-border-hover': 'rgba(120, 160, 255, 0.2)',
    'text-primary': '#e8edf5',
    'text-secondary': 'rgba(200, 215, 240, 0.65)',
    'text-muted': 'rgba(160, 180, 220, 0.4)',
    'positive': '#38ef7d',
    'negative': '#f87171',
    'warning': '#fbbf24',
  },
  fontFamily: {
    'display': ['Outfit', 'Space Grotesk', 'sans-serif'],
    'body': ['Space Grotesk', 'Outfit', 'sans-serif'],
  },
  borderRadius: {
    'glass-sm': '8px',
    'glass-md': '14px',
    'glass-lg': '20px',
    'glass-xl': '28px',
  },
}
```

### Common Utility Patterns
```
/* Glass Card */
bg-[rgba(15,25,50,0.45)] backdrop-blur-[20px] border border-[rgba(120,160,255,0.1)] rounded-[20px] p-7

/* Stat Value */
font-display text-[1.65rem] font-bold tracking-tight text-[#00d4ff]

/* Primary CTA */
bg-gradient-to-br from-[#3dffc0] to-[#00e5ff] text-[#070a13] font-semibold rounded-full px-10 py-4

/* Nav Item Active */
bg-[rgba(56,239,125,0.08)] text-[#e8edf5] font-medium rounded-[14px] px-4 py-3

/* Section Label */
text-xs uppercase tracking-[0.15em] text-[#38ef7d] font-medium

/* Body Text */
text-[rgba(200,215,240,0.65)] text-sm font-light leading-relaxed
```

## Design Principles

1. **Dark-first glassmorphism** - Deep dark backgrounds with translucent glass cards
2. **Aurora gradient accents** - Green-cyan-purple gradient spectrum used sparingly for emphasis
3. **Subtle luminosity** - Top-edge light lines on cards, glow orbs, soft shadows
4. **Generous whitespace** - Large padding, breathing room between elements
5. **Animated grain texture** - Subtle noise overlay for depth and texture
6. **Staggered reveal** - Elements animate in sequence on page load
7. **Minimal borders** - Very low-opacity borders (0.08-0.1), never solid
8. **Gradient text** - Brand name and hero text use gradient fills
9. **Rounded everything** - 14-28px radius on cards, 100px on pills/CTAs
10. **Glow on interaction** - Hover states add colored glow/shadow effects
