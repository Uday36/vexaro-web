# Vexaro Courier Solutions — Component Architecture & Mapping

## 1. Component Hierarchy

```
App
├── Navbar (Global persistent fixed header)
├── Routes
│   ├── HomePage ("/")
│   │   ├── HeroSection (Animated headline, route line, background image, CTAs)
│   │   ├── StatsRow (4 animated Counter Cards)
│   │   ├── AboutPreviewSection (Our Story + 4 Feature Cards with images)
│   │   ├── ServicesOverviewSection (8 Services Cards + "View All" CTA)
│   │   ├── WhyVexaroSection (6 Differentiator Cards with images)
│   │   ├── ShipmentJourneySection (Interactive 4-step Book -> Delivered workflow)
│   │   ├── TestimonialsSection (Client story carousel / swiper)
│   │   ├── CtaBanner ("Ready to Ship Smarter?" gradient banner)
│   │   └── FastContactStrip ("Questions? We're here.")
│   │
│   ├── AboutPage ("/about")
│   │   ├── PageHeader (Breadcrumb, SVG animated route curve, Title)
│   │   ├── StorySection (Founders, Indore roots, trust stats)
│   │   ├── FoundationSection (Mission, Vision, Values)
│   │   ├── StrengthsSection (6 capability cards)
│   │   ├── QuoteSection (Sonu Tiwari & Nikhil Pratap Singh quote)
│   │   └── NetworkReachSection (100+ cities, 1000+ pin codes, 20+ hubs, 5000+ agents)
│   │
│   ├── ServicesPage ("/services")
│   │   ├── PageHeader
│   │   └── ServicesGridSection (8 detailed cards with full benefit lists and SLA timelines)
│   │
│   ├── PricingPage ("/pricing")
│   │   ├── PageHeader
│   │   └── PricingGridSection (Gold @ ₹25,960, Platinum @ ₹36,580, Partial Amount + Razorpay checkout actions)
│   │
│   ├── PartnersPage ("/partners")
│   │   ├── PageHeader
│   │   ├── CategoriesSection (Courier Partners, E-commerce, Business, Tech)
│   │   ├── TrustedByGrid (11 partner logos with integration descriptions)
│   │   └── PartnerCtaSection ("Become a VEXARO Partner")
│   │
│   ├── TrackPage ("/track")
│   │   ├── PageHeader
│   │   ├── TrackSearchSection (AWB input + demo presets VX2024001, VX2024002, VX2024003)
│   │   └── TrackResultCard (Status badge, Origin, Destination, Weight, ETA, Step timeline)
│   │
│   ├── ContactPage ("/contact")
│   │   ├── PageHeader
│   │   ├── ContactFormSection (Interactive form with validation & anti-bot protection)
│   │   ├── ContactInfoCards (Indore HQ, emails, phone, hours)
│   │   ├── SocialLinksRow
│   │   └── GoogleMapEmbed (Interactive iframe of Indore Vijay Nagar location)
│   │
│   ├── LegalPage ("/terms", "/privacy", "/resources")
│   │   ├── PageHeader
│   │   ├── ClausesCard (Rendered items from legal dataset)
│   │   └── ContactSidebar (Quick enquiry / assistance card)
│   │
│   └── NotFound / CatchAll -> Redirects to "/"
│
└── Footer (Global persistent footer with 4 columns + bottom legal bar)
```

---

## 2. Reusable Component Specifications

### 2.1 `Navbar`
- **Location**: `src/components/Navbar.jsx`
- **Props**: None (reads router location and window scroll)
- **Features**:
  - Starts transparent, switches to `.glass-panel` when `window.scrollY > 12px`
  - Fixed positioning (`fixed top-0 left-0 right-0 z-[100]`)
  - Active route pill animation using Framer Motion `layoutId="nav-bar"`
  - Mobile hamburger toggle with animated slide-in drawer
  - Direct action buttons: "Try for Free" and "Contact Us"

### 2.2 `PageHeader`
- **Location**: `src/components/PageHeader.jsx`
- **Props**: `{ title, subtitle, breadcrumb }`
- **Visuals**:
  - Grid background pattern: `linear-gradient(to right, #1A3A8F 1px, transparent 1px)`
  - Animated SVG curved route line with gradient stroke (`#pageRoute`)
  - Floating glowing delivery icon moving along the path
  - Breadcrumb navigation (`Home / <Page>`)

### 2.3 `StatCounter`
- **Location**: `src/components/StatCounter.jsx`
- **Props**: `{ value, suffix, label, decimal, icon, color }`
- **Behavior**: Uses `useInView` to trigger a smooth cubic-bezier count-up animation from `0` to `value` over 2000ms.

### 2.4 `ShipmentJourney`
- **Location**: `src/components/ShipmentJourney.jsx`
- **Props**: `{ isInView }`
- **Features**: Visual representation of the 4 key stages:
  1. `01 Book`: "Book online or call. We schedule pickup at your convenience."
  2. `02 Pickup`: "Agent arrives at your doorstep with secure packaging materials."
  3. `03 Transit`: "Real-time GPS tracking and transit updates through our hubs."
  4. `04 Delivered`: "Safe delivery with digital proof of delivery and OTP confirmation."
  - Connected by an animated dashed routing line with animated pulse indicators.

### 2.5 `Footer`
- **Location**: `src/components/Footer.jsx`
- **Features**:
  - Full gradient divider top bar (`w-full h-[3px] gradient-duo`)
  - 4 responsive columns (Logo & Socials, Quick Links, Services, Contact info)
  - Bottom copyright bar with Terms, Privacy, Resources links

### 2.6 `MetaHelmet`
- **Location**: `src/hooks/useMeta.js`
- **Features**: Dynamically updates `document.title`, `meta[name="description"]`, OpenGraph tags, and canonical links.
