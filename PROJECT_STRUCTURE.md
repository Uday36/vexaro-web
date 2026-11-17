# VEXARO COURIER SOLUTIONS — DEVELOPER GUIDE & PROJECT STRUCTURE

**Document**: `PROJECT_STRUCTURE.md`  
**Target Audience**: Frontend Engineers & Maintainers  
**Application Root**: `./website`  
**Stack**: React 19, Vite 8, React Router 7, Tailwind CSS, Lucide Icons  

---

## 1. Project Overview

Vexaro Courier Solutions is a modern, high-performance courier and logistics web application built with React and Vite. It serves 10 distinct routes, features responsive design across desktop, tablet, and mobile viewports, and uses a centralized data model for easy maintenance.

---

## 2. Directory Structure

```text
Vexaro-Reconstruction/
├── analysis/                      # Engineering, site map, and design system specs
├── capture/                       # Live reference & local verification screenshots
├── scripts/                       # Verification, audit & capture utility scripts
├── PROJECT_AUDIT.md               # Pre-cleanup architecture assessment
├── CLEANUP_REPORT.md              # Post-cleanup refactoring & verification report
├── PROJECT_STRUCTURE.md           # This document
│
└── website/                       # Application Root Directory
    ├── index.html                 # HTML Entry point (Google Fonts & metadata)
    ├── package.json               # Dependencies, scripts & metadata
    ├── vite.config.js             # Vite 8 build & plugin configuration
    ├── eslint.config.js           # ESLint 10 code quality rules
    │
    ├── public/                    # Static Assets (Served directly at `/`)
    │   ├── new-logo.png           # Primary Vexaro logo (used in Navbar & Footer)
    │   ├── hero_background.png    # Homepage hero background banner
    │   ├── amazon-shipping.png    # Partner logos (DHL, FedEx, Ekart, Aramex, etc.)
    │   ├── client-ankit.png       # Testimonial client avatars
    │   └── assets/                # Mirror directory preserving `/assets/*` URL paths
    │
    └── src/                       # Application Source Code
        ├── main.jsx               # React DOM entry point (`createRoot`, `StrictMode`)
        ├── App.jsx                # Router shell, layout skeleton & route definitions
        ├── index.css              # Global production stylesheet (tokens, utilities, Swiper)
        │
        ├── components/            # Reusable UI & Layout Components
        │   ├── index.js           # Central barrel export for convenient imports
        │   ├── layout/            # Page framing and structural components
        │   │   ├── Navbar.jsx     # Top sticky header with glassmorphism & mobile drawer
        │   │   ├── Footer.jsx     # Global multi-column footer & newsletter
        │   │   └── PageHeader.jsx # Reusable subpage blueprint hero with breadcrumb
        │   │
        │   ├── common/            # Shared, reusable UI widgets
        │   │   ├── IconHelper.jsx # Dynamic icon resolver & custom social SVG icons
        │   │   ├── StatCounter.jsx# Viewport-triggered animated metric display
        │   │   └── ScrollToTop.jsx# Automatic scroll-to-top on route change
        │   │
        │   └── sections/          # Complex multi-element page sections
        │       ├── ShipmentJourney.jsx    # 4-step parcel workflow timeline
        │       └── TestimonialsSlider.jsx # Swiper-compatible review carousel
        │
        ├── pages/                 # Route-level Page Components
        │   ├── Home.jsx           # Landing page (`/`)
        │   ├── About.jsx          # Company background, vision & values (`/about`)
        │   ├── Services.jsx       # 6 core logistics services (`/services`)
        │   ├── Pricing.jsx        # Gold, Platinum, Partial pricing tiers (`/pricing`)
        │   ├── Partners.jsx       # Ecosystem & courier partner network (`/partners`)
        │   ├── Track.jsx          # Live AWB shipment tracking console (`/track`)
        │   ├── Contact.jsx        # HQ contact details, map & inquiry form (`/contact`)
        │   └── Legal.jsx          # Reusable legal layout (`/terms`, `/privacy`, `/resources`)
        │
        ├── hooks/                 # Custom React Hooks
        │   ├── useMeta.js         # Dynamic page `<title>` and `<meta name="description">`
        │   └── useCountUp.js      # Smooth `requestAnimationFrame` cubic ease number counter
        │
        └── data/                  # Central Content & Database Models
            └── siteData.js        # Centralized copy, navigation links, FAQs & mock AWB DB
```

---

## 3. Directory Purpose & Responsibilities

| Directory / File | Purpose | Conventions |
| :--- | :--- | :--- |
| `src/components/layout/` | Structural elements present across multiple views (headers, footers, page headers). | Must accept props for customizable titles/breadcrumbs; avoid page-specific business logic. |
| `src/components/common/` | Low-level, highly reusable widgets (icons, animated counters, scroll helpers). | Pure UI components; stateless or hook-driven. |
| `src/components/sections/` | Large composed sections that could be reused across pages. | Keep responsive layouts self-contained. |
| `src/pages/` | Top-level components mounted by React Router. | Call `useMeta({ title, description })` at the top of each page. |
| `src/data/` | Centralized text, menus, pricing plans, stats, and mock databases. | All user-facing strings and datasets should live in `siteData.js`, not hardcoded inside JSX. |
| `src/hooks/` | Reusable React hooks. | Name files with camelCase (`useHookName.js`). |
| `public/` | Images, logos, partner icons, and favicons. | Use lowercase hyphenated naming (e.g. `express-delivery.png`). |

---

## 4. How to Add New Pages

To add a new route to the website:

1. **Create the Page Component**:
   Create a new file in `src/pages/`, e.g., `src/pages/Careers.jsx`:
   ```jsx
   import PageHeader from '../components/layout/PageHeader';
   import { useMeta } from '../hooks/useMeta';

   export default function Careers() {
     useMeta({
       title: 'Careers',
       description: 'Join the VEXARO Courier Solutions team.'
     });

     return (
       <>
         <PageHeader
           title="Careers at VEXARO"
           subtitle="Help us build India's fastest logistics network."
           breadcrumb="Careers"
         />
         <section className="section-padding bg-white flex-1">
           <div className="container-custom">
             {/* Page content here */}
           </div>
         </section>
       </>
     );
   }
   ```

2. **Register the Route in `src/App.jsx`**:
   ```jsx
   import Careers from './pages/Careers';
   // ...
   <Route path="/careers" element={<Careers />} />
   ```

3. **(Optional) Add to Navigation**:
   In `src/data/siteData.js`, add the link to `navLinks` or `footerQuickLinks`:
   ```javascript
   { label: 'Careers', path: '/careers' }
   ```

---

## 5. How to Add New Components

- **Layout Component**: Place in `src/components/layout/`.
- **Reusable Widget**: Place in `src/components/common/`.
- **Complex Page Section**: Place in `src/components/sections/`.
- **Export in Barrel**: Add export to `src/components/index.js` so it can be imported cleanly:
  ```javascript
  export { default as MyWidget } from './common/MyWidget';
  ```

---

## 6. How Styling Is Organized

The project uses a hybrid Tailwind CSS and design-token architecture in `src/index.css`:

### Color Palette Tokens
| Variable | Hex Code | Utility Class | Purpose |
| :--- | :--- | :--- | :--- |
| `--navy` | `#1a3a8f` | `text-navy`, `bg-navy`, `border-navy` | Primary brand color, headers, CTAs |
| `--orange` | `#e06000` | `text-orange`, `bg-orange`, `border-orange` | Accent color, highlights, badges |
| `--charcoal` | `#0f172a` / `#1a202c` | `text-charcoal`, `bg-charcoal` | Body headings, dark sections, footer |
| `--graphite` | `#4a5568` | `text-graphite` | Body copy, secondary text |
| `--cream` | `#fafbff` | `bg-cream` | Background tone |
| `--light-blue` | `#f0f4ff` | `bg-light-blue` | Card and subpage hero backgrounds |

### Typography
- **Headings**: `font-heading` (*Plus Jakarta Sans*, weights 600, 700, 800, 900)
- **Body**: `font-body` (*Inter*, weights 400, 500, 600)

### Key Utility Classes
- `.container-custom`: Responsive container max-width 1200px with 24px inline padding.
- `.section-padding`: Standard vertical section spacing (`padding: 80px 0`).
- `.glass-panel`: Frosted glass blur effect with subtle border and box-shadow.
- `.card-hover`: Smooth translateY(-4px) lift with elevated shadow.
- `.pulse-ring`: Animated glowing circular radar ring.

---

## 7. How Routing Is Configured

Routing is managed via **React Router DOM 7** in `src/App.jsx`:

- Every route change triggers `<ScrollToTop />`, which resets the window scroll position to `(0, 0)`.
- All routes share the persistent `<Navbar />` and `<Footer />` layout shell.
- The `<main>` element maintains a dynamic minimum height (`minHeight: calc(100vh - 72px)`) to guarantee the footer stays pinned to the bottom on short pages.
- Unmatched paths are caught by `<Route path="*" element={<Home />} />`.

---

## 8. Managing Shared Data

All content is decoupled from components and stored in `src/data/siteData.js`:
- `siteConfig`: Company name, phone, email, address, tagline, social links.
- `navLinks`: Header navigation items.
- `footerQuickLinks`, `footerServicesLinks`, `footerLegalLinks`: Footer navigation columns.
- `servicesData`: Full catalog of 6 courier services (features, icons, badges).
- `pricingPlans`: Gold, Platinum, and Partial payment plan tiers.
- `testimonials`: 5 client reviews with ratings, names, roles, and avatar URLs.
- `trackingDatabase`: Mock live tracking database with tracking steps, timestamps, and locations.

---

## 9. Development & Build Workflow

Inside the `website/` directory:

```bash
# Start local development server with HMR
npm run dev

# Run ESLint to verify code quality (must report 0 errors)
npm run lint

# Build optimized production bundle to /dist
npm run build

# Preview production build locally
npm run preview
```
