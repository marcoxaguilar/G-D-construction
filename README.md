# G&D Construction & Snow Removal — Website

Flat-file website for G&D Construction & Snow Removal (sister company to G&D Materials).
Built for Netlify deployment via GitHub. **All files are flat — no subfolders.**

---

## File Inventory (22 files)

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
- `styles.css` — Master stylesheet (~750 lines, fully responsive)
- `script.js` — Mobile nav, smooth scroll, contact form prefill
- `GD.png` — Logo (512×512 placeholder — replace with official asset)
- `GD.svg` — SVG source for the logo
- `favicon.png` — 64×64 favicon

### SEO / Technical
- `sitemap.xml` — XML sitemap (13 indexed URLs)
- `robots.txt` — Crawl directives + AI bot allow list
- `manifest.json` — PWA manifest

---

## Key Build Specs

- **Domain target:** gdconstructionsnow.com
- **Phone:** 773-501-8699 (Dalyne)
- **Email:** d.ganddlandscape@gmail.com (Formsubmit form posts here)
- **Service areas:** 30 cities across Lake County + Chicago North Shore
- **Sister site:** gdmulchmaterials.com (linked from footer & gardens page)
- **Form:** city field is **MANDATORY** (per client spec)
- **Schema.org:** GeneralContractor type with full areaServed list
- **Snow service color:** Ice-blue accent (#5b8aa6) to differentiate from terracotta hardscape

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

- [ ] Replace `GD.png` with the official G&D logo from G&D Materials repo
- [ ] Add real photos of past projects (patios, walls, fire pits) — replace stock hero
- [ ] Verify FormSubmit on first test submission (FormSubmit requires email confirmation on first use)
- [ ] Add `og-image.jpg` (1200×630) for social sharing — referenced in OG meta tags
- [ ] Submit `sitemap.xml` to Google Search Console
- [ ] Submit `sitemap.xml` to Bing Webmaster Tools
- [ ] Set up Google Business Profile for "G&D Construction & Snow Removal"
- [ ] Verify SSL is provisioned (Netlify → Domain → HTTPS)
- [ ] Test mobile nav, contact form, and all page-to-page links live

---

## Form Behavior

- Contact form posts to: `https://formsubmit.co/d.ganddlandscape@gmail.com`
- On success, redirects to: `https://gdconstructionsnow.com/thank-you.html`
- Honeypot spam protection enabled (`_honey` hidden field)
- City field is `required` per client request
- URL parameters supported for prefill: `?service=patios` or `?city=Lake+Zurich`

---

## SEO Highlights

- LocalBusiness/GeneralContractor schema on homepage with all 30 service areas
- Per-service Service schema on each landing page
- Canonical URLs on every page
- Open Graph + Twitter Card meta tags
- Bebas Neue / Fraunces / Inter font stack via Google Fonts (preconnected)
- Mobile-first responsive design (980px and 640px breakpoints)
- ADA: skip-link, ARIA labels, prefers-reduced-motion, semantic HTML
- AI crawler explicit allows (GPTBot, ClaudeBot, PerplexityBot, etc.)
