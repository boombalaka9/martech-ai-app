---
inclusion: always
---

# Development Guidelines: Lessons Learned

> **Purpose**: Actionable guidelines to follow during implementation to avoid common errors and maximize speed.

---

## 🚀 PERFORMANCE RULES (Follow Every Time)

### Rule 1: ALWAYS Execute Tools in Parallel
**Before every tool invocation, ask: "Can these run in parallel?"**

```python
# ❌ SLOW - Sequential (3x latency)
readFile("file1.py")
readFile("file2.py")
readFile("file3.py")

# ✅ FAST - Parallel (1x latency)
readMultipleFiles(["file1.py", "file2.py", "file3.py"])

# ❌ SLOW - Sequential replacements
strReplace(file="test.md", oldStr="A", newStr="B")
strReplace(file="test.md", oldStr="C", newStr="D")

# ✅ FAST - Invoke all strReplace calls simultaneously in one turn
```

**Impact**: 5-10x faster execution

### Rule 2: Trust Context - Don't Re-Read
**Read once, trust the result. Only re-read on actual errors.**

```python
# ❌ SLOW - Re-reading unnecessarily
readFile("App.tsx")  # 600 lines
# ... make change ...
readFile("App.tsx")  # 600 lines again - WASTE

# ✅ FAST - Read once, trust strReplace
readFile("App.tsx")  # Initial read
# ... make change ...
# Done - trust it worked
```

**Impact**: Save 2-3 seconds per unnecessary read

### Rule 3: Verify Once at the End
**Make all changes first, then verify once.**

```bash
# ❌ SLOW - Verify after each change (90 seconds)
# Change 1 → pnpm build (30s)
# Change 2 → pnpm build (30s)
# Change 3 → pnpm build (30s)

# ✅ FAST - Verify once (30 seconds)
# Change 1, 2, 3 → pnpm build (30s)
```

**Impact**: Save 60-120 seconds per feature

### Rule 4: Use Line Ranges and Search
**Don't read entire files when you need specific sections.**

```python
# ❌ SLOW - Read 500 lines to check one function
readFile("large_file.py")

# ✅ FAST - Search first, then read targeted
grepSearch(query="function_name", includePattern="**/*.py")
readFile("large_file.py", start_line=100, end_line=120)
```

**Impact**: Save 2-3 seconds per read

---

## 🐛 COMMON ERRORS - QUICK REFERENCE

### TypeScript Errors

**React Imports**
```typescript
// ✅ Named imports (React 17+)
import { useState, useEffect } from 'react'

// ❌ Default import
import React from 'react'
```

**Null Safety**
```typescript
// ✅ Use optional chaining and nullish coalescing
const name = user?.name ?? 'Unknown'

// ✅ Type guards for complex checks
if (user && user.name) {
    console.log(user.name)
}
```

---

## 📋 DEVELOPMENT CHECKLIST

### Before Starting
- [ ] Identify all operations that can run in parallel
- [ ] Plan to read files once and trust context
- [ ] Decide on single verification point at the end

### During Implementation
- [ ] Execute independent tools simultaneously
- [ ] Use `readMultipleFiles` for multiple files
- [ ] Invoke multiple `strReplace` calls in parallel
- [ ] Use line ranges for large files
- [ ] Trust `strReplace` - don't re-read to verify

### After Implementation
- [ ] Verify once with build/test
- [ ] Clean up any temporary files
- [ ] Update this file if new errors encountered

---

## 🎯 SPEED TARGETS

**Target**: Complete features in 2-5 minutes (within 20-minute constraint)

**Time Breakdown**:
- Planning: 30 seconds
- Reading context: 30 seconds (parallel reads)
- Implementation: 1-2 minutes (parallel changes)
- Verification: 30 seconds (one build)
- **Total**: 2.5-3.5 minutes

**Avoid**:
- Sequential reads: +2-3 minutes
- Multiple verifications: +1-2 minutes
- Re-reading files: +1-2 minutes
- **Wasted time**: 4-7 minutes

---

## 🔧 QUICK COMMANDS

```bash
# Frontend
cd frontend
npm install
npm run build
```

---

## 💡 KEY PRINCIPLES

1. **Parallel > Sequential**: Always execute independent operations simultaneously
2. **Trust > Verify**: Read once, trust the result, verify only at the end
3. **Targeted > Complete**: Use line ranges and search instead of reading entire files
4. **Fast > Perfect**: Ship working MVP within 20 minutes, iterate later
5. **Learn > Repeat**: Update this file when encountering new errors

---

## 📊 SUCCESS METRICS

**Good Performance**:
- Feature completed in 2-5 minutes
- 1-2 file reads per file
- 1 verification at the end
- All tools executed in parallel when possible

**Poor Performance**:
- Feature takes >10 minutes
- 3+ reads of same file
- Multiple verifications
- Sequential tool execution

**Always ask**: "Am I being as fast as possible?"

---

### Next.js Scaffolding

**`create-next-app` Timeout**
```bash
# ❌ SLOW - npx create-next-app can timeout (>120s) in constrained environments
npx create-next-app@latest frontend --typescript --tailwind ...

# ✅ FAST - Manually scaffold: mkdir, write package.json, npm install
mkdir -p frontend/app frontend/components/ui
# Write package.json with exact deps, then npm install
```

**Recovery**: Create project structure manually with `mkdir`, write `package.json`, `tsconfig.json`, `postcss.config.mjs`, `next.config.ts`, `globals.css`, and `layout.tsx` by hand, then `npm install`.

---

### Python PEP 668 / pip on macOS

**`pip3 install` fails with PEP 668 externally-managed-environment**
```bash
# ❌ FAILS on macOS with system Python
pip3 install -r requirements.txt

# ✅ Use venv first
python3 -m venv venv
source venv/bin/activate && pip install -r requirements.txt
```

**Recovery**: Always create a venv before installing Python packages. Use `>=` version constraints in requirements.txt to allow pip to find pre-built wheels for the current Python version.

---

### Sub-agent File Writes May Not Persist

**Sub-agent reports success but file content is unchanged (still placeholder)**
```
# ❌ Sub-agent claimed it wrote frontend/app/page.tsx but file still had placeholder content
# The sub-agent's invokeSubAgent reported "Build passes cleanly" but the file was never actually written

# ✅ Always verify sub-agent file writes by reading the file after delegation
# If file is unchanged, write it yourself
```

**Recovery**: After delegating file creation to a sub-agent, always verify the target files were actually written. Sub-agents may report success even when file writes didn't persist. Be prepared to write the files yourself as a fallback.

---

### Large TSX File Corruption from Incremental fsWrite + fsAppend

**Multiple fsWrite/fsAppend calls on the same large file can produce corrupted output with duplicate functions and misaligned JSX**
```
# ❌ FAILS - Writing a 500+ line TSX file across 8+ fsAppend calls
# Appends may overlap, duplicate, or interleave with previous content
# Result: 128 TypeScript errors, duplicate function implementations

# ✅ Write the complete file in fewer, larger chunks
# Use fsWrite for the first ~50 lines (imports, types, helpers)
# Then 3-4 carefully planned fsAppend calls for logical sections
# Verify with getDiagnostics after EACH append to catch corruption early
# If corruption detected, rewrite the entire file from scratch
```

**Recovery**: For large single-file components (>200 lines), plan the file structure carefully before writing. Use getDiagnostics after each append. If errors appear, don't try to patch — rewrite the entire file. Keep JSX compact (single-line elements) to reduce line count and minimize append boundaries.

---

*Last Updated: After frontend page.tsx corruption — multiple overlapping appends caused 128 errors*


### Tailwind CSS 4 Strips Google Fonts @import in globals.css

**`@import url('https://fonts.googleapis.com/...')` in globals.css is silently removed by Tailwind CSS 4**
```css
/* ❌ FAILS - Tailwind CSS 4's @import "tailwindcss" processes and strips the Google Fonts @import */
@import "tailwindcss";
@import url('https://fonts.googleapis.com/css2?family=Special+Elite&...');

/* ✅ Load Google Fonts via <link> tags in layout.tsx instead */
```

```tsx
// layout.tsx
<html lang="en">
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Special+Elite&family=Permanent+Marker&..." rel="stylesheet" />
  </head>
  ...
</html>
```

**Recovery**: When using Tailwind CSS 4 with `@import "tailwindcss"`, external font imports via `@import url()` in the same CSS file will be processed and removed. Always load Google Fonts via `<link>` tags in the HTML `<head>` instead.

---

*Last Updated: After font loading failure — Tailwind CSS 4 @import conflict*


### Custom Web Fonts May Be Publicly Hosted

**Custom fonts like `TISCO_AD` that appear proprietary may actually be served as public woff2 files**
```
# ❌ ASSUMED - Font is proprietary, can't download, use substitute
font-family: 'IBM Plex Sans Thai', sans-serif;  # Fallback only

# ✅ CHECK NETWORK REQUESTS - Font files may be publicly hosted
# Use Playwright browser_network_requests with filter="font" and static=true
# Found: tisco_ad-regular-webfont.woff2 and tisco_ad-bold-webfont.woff2
# Download them for local serving
```

**Recovery**: Before assuming a custom font is unavailable, load the website in Playwright and inspect network requests filtered by "font". Custom fonts are often served as public woff2 files from the site's uploads/assets directory. Download them for local serving to get pixel-perfect brand matching.

---

*Last Updated: After TISCO_AD font discovery - custom fonts were publicly hosted on tisco.co.th*
