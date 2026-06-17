# Monk Funnel

**Performance marketing & website design agency — Delhi, India.**

We design and build conversion-focused websites for Indian startups, paired with SEO and paid ads (Meta & Google) to drive real revenue. This is the marketing site for the agency.

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS v4 |
| Language | TypeScript |
| Fonts | Cormorant Garamond (serif) · Nimbus Sans (sans) |
| Bundler | Turbopack |
| Deployment | Vercel |

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page — hero, services, pixel section, testimonials, pricing, FAQ, CTA |
| `/contact` | Contact form (Google Sheets integration ready) |
| `/privacy-policy` | Privacy policy |
| `/terms` | Terms of service |
| `/refund` | Refund policy |

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # ESLint
npx tsc --noEmit  # type check
```

---

## Project Structure

```
app/
  page.tsx              # Home
  contact/page.tsx      # Contact form
  privacy-policy/       # Legal pages
  terms/
  refund/
components/
  Hero.tsx              # Full-bleed hero with animated dashboard mockup
  Navbar.tsx            # Floating transparent navbar
  ServicesSection.tsx   # 6-service grid
  PricingSection.tsx    # 3-tier pricing cards with hover lift
  FAQSection.tsx        # Smooth CSS-grid accordion
  Footer.tsx            # Pixel-art footer with legal links
  FloatingNPC.tsx       # Mario-style floating NPC with rotating quips
public/
  mf-logo.png           # Brand mark
  *.avif / *.webp / *.png  # Pixel-art imagery and section decorations
```

---

## Deployment

Deployed on **Vercel**. Every push to `main` triggers an automatic deploy.

```bash
git push origin main
```

---

## Contact

**Monk Funnel** · Delhi, India  
monkfunnel0@gmail.com · +91 88103 26598
