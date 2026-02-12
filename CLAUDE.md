# The Tool Brew — Project Context

## What is this?

A niche utility website that earns passive income through Google AdSense. The site offers 10 free online developer/text tools, each targeting high-search-volume keywords. Organic search traffic drives ad revenue with zero ongoing costs (free Vercel hosting, no backend, no database).

## Live URLs

- **Production**: https://thetoolbrew.com
- **Vercel alias**: https://devbrew-tools.vercel.app
- **GitHub repo**: https://github.com/tagsko/devtoolbox

## Domain & Hosting

- **Domain**: `thetoolbrew.com` (registered on Cloudflare)
- **DNS**: Cloudflare — A record `@` → `76.76.21.21`, CNAME `www` → `cname.vercel-dns.com` (proxy OFF)
- **Hosting**: Vercel free tier, auto-deploys from `main` branch

## Tech Stack

- Next.js 16 (App Router, TypeScript, Tailwind CSS v4)
- `marked` for Markdown rendering
- `clsx` + `tailwind-merge` for class utilities
- `@vercel/analytics` for traffic tracking
- No backend, no database — all tools run client-side

## Monetization

- **Google AdSense** publisher ID: `ca-pub-6265513430069974`
- Env var `NEXT_PUBLIC_ADSENSE_CLIENT_ID` is set in Vercel production
- 4 ad slots per page: header banner, in-article, sidebar (desktop), footer banner
- Ads are gated — placeholders show when env var is not set
- `public/ads.txt` contains the seller authorization
- Google Funding Choices CMP is integrated for GDPR cookie consent

## The 10 Tools

| # | Tool | Route | Implementation |
|---|------|-------|----------------|
| 1 | JSON Formatter & Validator | `/tools/json-formatter` | `JSON.parse` + `JSON.stringify` |
| 2 | Word & Character Counter | `/tools/word-counter` | Regex splitting + stats |
| 3 | Base64 Encode/Decode | `/tools/base64-encode-decode` | `btoa`/`atob` + TextEncoder |
| 4 | UUID Generator | `/tools/uuid-generator` | `crypto.randomUUID()` |
| 5 | Lorem Ipsum Generator | `/tools/lorem-ipsum-generator` | Hardcoded word bank + assembly |
| 6 | URL Encode/Decode | `/tools/url-encode-decode` | `encodeURIComponent`/`decodeURIComponent` |
| 7 | Case Converter | `/tools/case-converter` | String transforms |
| 8 | Color Converter | `/tools/color-converter` | Pure math HEX/RGB/HSL conversions |
| 9 | Hash Generator | `/tools/hash-generator` | `crypto.subtle.digest()` + inline MD5 |
| 10 | Markdown Preview | `/tools/markdown-preview` | `marked` library |

## Architecture

### Tool Registry Pattern
`src/lib/tools-registry.ts` is the single source of truth. Every tool is defined there (name, slug, description, keywords, how-to steps, related tools). Homepage, sitemap, JSON-LD, and related-tool sections all derive from this file. Adding a new tool = 1 registry entry + 1 route folder.

### Page Structure
Each tool page uses `ToolPageShell` component:
1. H1 title + description (SEO)
2. Interactive tool UI (`"use client"` component)
3. "How to Use" steps (targets featured snippets)
4. Related tools (internal linking)
5. JSON-LD structured data (WebApplication + HowTo schemas)

### Key Files
```
src/
  app/
    layout.tsx              # Root layout (AdSense, CMP, Analytics, header/footer)
    page.tsx                # Homepage with tool grid
    icon.svg                # Favicon (blue "TB" icon)
    sitemap.ts              # Auto-generated from registry
    robots.ts               # Standard robots.txt
    not-found.tsx           # Custom 404
    privacy/page.tsx        # Privacy policy (required for AdSense)
    terms/page.tsx          # Terms of service
    tools/
      layout.tsx            # Two-column layout (content + sidebar)
      [tool-slug]/
        page.tsx            # Server component with metadata
        [ToolName]Tool.tsx  # Client component with tool logic
  components/
    layout/    Header.tsx, Footer.tsx, Sidebar.tsx
    ads/       AdBanner.tsx, AdSidebar.tsx, AdInArticle.tsx
    tools/     ToolPageShell.tsx, ToolCard.tsx, ToolGrid.tsx,
               HowToUse.tsx, RelatedTools.tsx, CopyButton.tsx
    ui/        Button.tsx, Textarea.tsx, Input.tsx, Card.tsx, Tabs.tsx
    seo/       JsonLd.tsx
  lib/
    tools-registry.ts       # Single source of truth for all tools
    site-config.ts          # Site name, URL, description
    utils.ts                # cn() helper
  types/
    tool.ts                 # Tool interface
```

## SEO Setup

- Auto-generated `sitemap.xml` at `/sitemap.xml` (from registry)
- `robots.txt` at `/robots.txt`
- JSON-LD on every tool page (WebApplication + HowTo schemas)
- Per-page `<title>` and `<meta description>` from registry
- OpenGraph + Twitter card metadata
- Internal linking via "Related Tools" on every page

## What's Done

- [x] All 10 tools built and working
- [x] Custom domain connected (thetoolbrew.com)
- [x] AdSense publisher ID configured
- [x] Google CMP/GDPR consent banner (Funding Choices)
- [x] ads.txt with publisher ID
- [x] Privacy Policy + Terms of Service pages
- [x] Sitemap + robots.txt
- [x] JSON-LD structured data
- [x] Favicon
- [x] Vercel Analytics
- [x] Dark mode (prefers-color-scheme)
- [x] Responsive design

## What's NOT Done Yet

- [ ] Google Search Console verification + sitemap submission
- [ ] AdSense site approval (submitted, waiting for review)
- [ ] Backlink building (Reddit, Dev.to, HN, Product Hunt)
- [ ] Open Graph images (per-tool social share images)
- [ ] Blog/content marketing section
- [ ] Custom domain for `www` subdomain (Cloudflare proxy still on)

## How to Add a New Tool

1. Add entry to `src/lib/tools-registry.ts` with name, slug, description, keywords, howToSteps, relatedSlugs
2. Create `src/app/tools/[slug]/page.tsx` (copy any existing one, change the slug)
3. Create `src/app/tools/[slug]/[ToolName]Tool.tsx` with the client-side tool logic
4. Push to `main` — auto-deploys

## Commands

```bash
npm run dev      # Local dev server
npm run build    # Production build
npm run lint     # ESLint
```
