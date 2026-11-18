# Vexaro Courier Solutions — Implementation Plan

## 1. Overview & Strategy
This plan outlines the step-by-step technical reconstruction of the Vexaro Courier Solutions website inside `./website/`, adhering strictly to pixel-perfect visual fidelity, full route coverage, authentic original copy and assets, and interactive responsiveness.

---

## 2. Phased Roadmap

### Phase 1: Reference Analysis (COMPLETED)
- [x] Extracted and decoded manifest, route maps, and data files from `capture/live/`.
- [x] Extracted theme colors, keyframes, typography, and utility classes from `capture/live/assets/53b68ede7034.css`.
- [x] Extracted component structure, data objects, and interactive flows from `capture/live/assets/d159656472b0.js`.
- [x] Generated documentation:
  - `analysis/SITE_MAP.md`
  - `analysis/DESIGN_SYSTEM.md`
  - `analysis/COMPONENT_MAP.md`
  - `analysis/ASSET_MAP.md`
  - `analysis/INTERACTIONS.md`
  - `analysis/IMPLEMENTATION_PLAN.md`

### Phase 2: Asset Recovery & Placement
- [ ] Create `website/public/assets/` and copy all 28 original high-res images from `capture/live/assets/` to `website/public/` using their original filenames.
- [ ] Verify image checksums and aspect ratios.
- [ ] Connect Google Fonts (`Plus Jakarta Sans` and `Inter`) in `website/index.html`.

### Phase 3: Design System & Stylesheet Configuration
- [ ] Populate `website/src/index.css` with the exact `:root` design variables, custom classes (`.gradient-navy`, `.gradient-orange`, `.gradient-duo`, `.glass-panel`, `.card-hover`, `.container-custom`, `.section-padding`), keyframe animations (`float`, `shimmer`, `pulse-ring`), and custom scrollbar rules.
- [ ] Configure Tailwind / CSS configuration so `font-heading`, `font-body`, and theme colors (`navy`, `charcoal`, `orange`, `cream`, `light-blue`) are recognized across all components.

### Phase 4: Data Layer Setup
- [ ] Build `website/src/data/siteData.js` containing:
  - Navigation links
  - Services data (8 services with benefits, timelines, icons)
  - Partner ecosystem categories and 11 partner profiles
  - Testimonials (5 verified client stories with ratings and avatars)
  - Shipment tracking database (`VX2024001`, `VX2024002`, `VX2024003`)
  - Pricing packages and Razorpay integration links
  - Legal content (Terms & Conditions, Privacy Policy, Resources)
  - Company stats and contact details

### Phase 5: Reusable UI Component Construction
- [ ] Build `Navbar.jsx`: Fixed header, scroll detection, glass panel transition, active indicator, mobile drawer.
- [ ] Build `Footer.jsx`: 4-column layout, social links, quick links, contact info, legal links, gradient accent line.
- [ ] Build `PageHeader.jsx`: SVG animated route line, breadcrumbs, moving vehicle indicator.
- [ ] Build `StatCounter.jsx`: Animated cubic bezier counter hook and card display.
- [ ] Build `ShipmentJourney.jsx`: 4-stage interactive journey visualization.
- [ ] Build `TestimonialsSlider.jsx`: Client review cards with responsive display and pagination.

### Phase 6: Page Assembly & Routing
- [ ] `Home.jsx`: Full landing page with all 8 original sections.
- [ ] `About.jsx`: Origin story, founders, foundation cards, strengths, leadership quote, network stats.
- [ ] `Services.jsx`: 8 service cards with bulleted benefits and timeline tags.
- [ ] `Pricing.jsx`: Gold, Platinum, Partial Amount cards with Razorpay links.
- [ ] `Partners.jsx`: 4 categories, 11 partner cards with logos, "Become a Partner" CTA.
- [ ] `Track.jsx`: Live tracking form, demo buttons, status badge, progress step timeline.
- [ ] `Contact.jsx`: Form with honeypot and validation, contact cards, social icons, Google Maps iframe.
- [ ] `Legal.jsx`: Reusable component for `/terms`, `/privacy`, and `/resources`.
- [ ] Set up React Router in `src/App.jsx` with scroll-to-top on route change.

### Phase 7: Functionality & Interaction Verification
- [ ] Ensure all internal links point to active routes.
- [ ] Ensure external links (Razorpay, WhatsApp, Instagram, Facebook, Google Maps, emails) work properly.
- [ ] Ensure demo tracking queries return realistic data and error handling triggers on invalid AWBs.
- [ ] Ensure contact form validation works accurately.

### Phase 8: Visual QA & Comparison
- [ ] Launch Vite development server.
- [ ] Verify each page against reference screenshots at Desktop (1440px), Tablet (768px), and Mobile (390px).
- [ ] Check for zero console errors and zero layout shifts.

### Phase 9: Final Delivery & Polish
- [ ] Clean up redundant temporary files.
- [ ] Verify build passes with `npm run build` cleanly without warnings or errors.
