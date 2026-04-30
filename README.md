# G&D Construction & Snow Removal — Website

Flat-file website for **G&D Construction and Snow Removal, Inc.** (sister company to G&D Materials).
Built for Netlify deployment via GitHub. **All files are flat — no subfolders.**

---

## File Inventory (24 files)

### HTML Pages (14)
- `index.html` — Homepage with hero, services grid, areas, contact form
- `services.html` — All-services hub (Construction + Snow)
- `hardscaping.html` — Hardscaping landing page
- `snow-removal.html` — Commercial snow removal landing page
- `patios.html` — Patio installation
- `retaining-walls.html` — Retaining walls
- `fire-pits.html` — Fire pits
- `walkways-driveways.html` — Walkways & driveways
- `decks.html` — Decks
- `gardens.html` — Garden installation
- `salting.html` — Salting & ice management
- `service-areas.html` — All 30 cities served
- `about.html` — About G&D / Dalyne
- `thank-you.html` — Form submission confirmation page

### Assets
- `styles.css` — Master stylesheet, brand-color palette
- `script.js` — Mobile nav, smooth scroll, contact form prefill
- `GD.png` — Header logo (165×44, "G&D" mark only)
- `GD-full.png` — Footer logo (220×90, full mark with "Construction and Snow Removal Inc." tagline)
- `favicon.png` — 64×64 favicon

### SEO / Technical
- `sitemap.xml` — XML sitemap (13 indexed URLs)
- `robots.txt` — Crawl directives + AI bot allow list
- `manifest.json` — PWA manifest (theme color: brand blue)

---

## Brand System

Colors pulled directly from the official logo:

| Token | Hex | Usage |
|---|---|---|
| Brand blue | `#1478dc` | Primary brand color, links, accents |
| Brand orange | `#f08c14` | All primary CTAs ("Get Estimate", "Send Request") |
| Brand green | `#144628` | Reserved for trust/landscaping accents |
| Navy neutral | `#0f1722` | Dark surfaces (footer, hero) |

Typography: Bebas Neue (display), Fraunces (serif headings), Inter (body) — all loaded from Google Fonts.

---

## Key Build Specs

- **Domain target:** gdconstructionsnow.com
- **Phone:** 773-501-8699 (Dalyne)
- **Email:** d.ganddlandscape@gmail.com (FormSubmit posts here)
- **Service areas:** 30 cities across Lake County + Chicago North Shore
- **Sister site:** gdmulchmaterials.com (linked from footer & gardens page)
- **Form:** city field is **MANDATORY** (per client spec)
- **Schema.org:** GeneralContractor with `name` and `legalName` ("Inc.") + full areaServed list

---

## Deployment Instructions (Netlify via GitHub)

### Option A — Drag-and-drop (fastest, no Git needed)
1. Go to https://app.netlify.com/drop
2. Drag the entire folder onto the page
3. Netlify will assign a temporary URL (e.g. `random-name-12345.netlify.app`)
4. Site settings → Domain management → Add custom domain → `gdconstructionsnow.com`
5. Update DNS at the domain registrar to point to Netlify
6. Wait for SSL provisioning (auto, usually 1–10 minutes)

### Option B — GitHub workflow (recommended for ongoing updates)
1. Create a new GitHub repo (e.g. `gd-construction-snow`)
2. Upload all files at the root level (no subfolders)
3. In Netlify: New site from Git → Connect GitHub → Select repo
4. Build settings: leave blank (no build command, publish directory is `.`)
5. Deploy site
6. Add custom domain `gdconstructionsnow.com` and configure DNS
7. **For future edits:** edit files directly in GitHub editor → commit → Netlify auto-deploys

---

## Pre-launch Checklist

- [x] Official G&D logo integrated (header mark + full footer version)
- [x] Brand color palette applied site-wide
- [x] Legal entity name ("Inc.") in schema.org and copyright
- [ ] Add real photos of past projects (patios, walls, fire pits) for hero / gallery
- [ ] Verify FormSubmit on first test submission (FormSubmit emails Dalyne a one-click activation link on first use)
- [ ] Add `og-image.jpg` (1200×630) for social sharing — referenced in OG meta tags
- [ ] Submit `sitemap.xml` to Google Search Console
- [ ] Submit `sitemap.xml` to Bing Webmaster Tools
- [ ] Set up Google Business Profile for "G&D Construction & Snow Removal, Inc."
- [ ] Verify SSL is provisioned (Netlify → Domain → HTTPS)
- [ ] Test mobile nav, contact form, and all page-to-page links live

---

## Form Behavior

- Contact form posts to: `https://formsubmit.co/d.ganddlandscape@gmail.com`
- On success, redirects to: `https://gdconstructionsnow.com/thank-you.html`
- Honeypot spam protection enabled (`_honey` hidden field)
- City field is `required` per client request
- URL parameters supported for prefill: `?service=Patio` or `?city=Lake%20Zurich` (params first, then `#contact` fragment)

---

## SEO Highlights

- LocalBusiness/GeneralContractor schema on homepage with all 30 service areas
- Per-service Service schema on each landing page
- `legalName` field added for Google Knowledge Graph entity matching
- Canonical URLs on every page
- Open Graph + Twitter Card meta tags
- Mobile-first responsive design (980px and 640px breakpoints)
- ADA: skip-link, ARIA labels, prefers-reduced-motion, semantic HTML
- AI crawler explicit allows (GPTBot, ClaudeBot, PerplexityBot, etc.)
