# Vexaro Courier Solutions — Interactions & Animations Specification

## 1. Overview
The live reference website combines fine-tuned micro-interactions, spring-based scroll reveals, fluid header transitions, dynamic carousels, and realistic mock business logic for tracking and quotation requests.

---

## 2. Global Interactions

### 2.1 Navigation & Scroll Dynamics
- **Glass Header Morphing**:
  - `scrollY <= 12px`: Background is `bg-transparent`.
  - `scrollY > 12px`: Morph into `.glass-panel` (`backdrop-blur(12px)`, subtle border, elevation).
- **Active Route Sliding Pill**:
  - Desktop nav links sit inside a pill-shaped container.
  - Active route displays a sliding background pill with Framer Motion `layoutId="nav-bar"` (`bg-white shadow-sm rounded-full`).
- **Mobile Menu Drawer**:
  - Hamburger icon triggers full mobile drawer sliding from top/right.
  - Links automatically close the drawer upon click or route change.

### 2.2 Reusable Viewport Entrance Animations
Standardized Framer Motion variants:
- **`kh` (Container Stagger)**:
  - `hidden: { opacity: 0 }`
  - `visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }`
- **`Ah` (Child Card Fade-Up)**:
  - `hidden: { opacity: 0, y: 28 }`
  - `visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }`
- **`Eh` (Section Heading Fade-Up)**:
  - `hidden: { opacity: 0, y: 20 }`
  - `visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }`
- **`Dh` / `Oh` (Split Column Entrances)**:
  - Left column enters from left/fade; right column enters with smooth scale/fade.

---

## 3. Page-Specific Interactive Workflows

### 3.1 Home Page
- **Hero Parallax**:
  - Background image and text track `useScroll({ target: heroRef, offset: ["start start", "end start"] })`.
  - Opacity transitions from `1` to `0` at 70% scroll; `y` moves from `0%` to `15%`.
- **Animated Number Counter (`StatCounter`)**:
  - Runs a 2000ms cubic bezier ease-out curve (`1 - Math.pow(1 - s, 3)`) once triggered in view.
  - Animates: `2,500+` Daily Shipments, `100+` Cities Covered, `98%` Success Rate, `300+` Happy Clients.
- **Card Hover Effects**:
  - Card translates `y: -4px` with box shadow `0 16px 40px rgba(26,58,143,0.14)`.
  - Card images scale `1.10` over `700ms`.
  - Icon boxes switch from light pastel backgrounds to rich brand gradients on hover.
- **Shipment Journey Steps**:
  - 4 stages connected by animated route lines.
- **Testimonial Slider**:
  - Auto-scrolling carousel with pagination dots, pause on hover, responsive multi-slide view.

### 3.2 Track Shipment (`/track`)
- **Query Input**:
  - Accepts standard AWB string (case-insensitive, trimmed).
  - Pressing `Enter` or clicking `Track` starts lookup.
- **Demo Buttons**:
  - Direct preset buttons for `VX2024001`, `VX2024002`, `VX2024003` allow instant testing.
- **Loading State**:
  - Shows spinning loader for `900ms` simulating live network query.
- **Result Presentation**:
  - If found: renders complete status card (Delivered / In Transit / Picked Up), origin, destination, weight, ETA, and chronological step timeline with green/orange checkmarks.
  - If not found: displays helpful error message suggesting valid demo AWBs.

### 3.3 Contact & Enquiry (`/contact`)
- **Query Param Pre-fill**:
  - Visiting `/contact?plan=Gold` automatically sets the Subject to `Enquiry for Gold plan`.
- **Honeypot Protection**:
  - Off-screen `botField` input stops automated spam submissions.
- **Client-Side Form Validation**:
  - `Name`: Required.
  - `Email`: Must match `\S+@\S+\.\S+`.
  - `Phone`: Must match 10-digit Indian mobile `^[6-9]\d{9}$`.
  - `Subject`: Required.
  - `Message`: Must be at least 20 characters.
- **Submission Feedback**:
  - Displays animated spinner during submit.
  - On success: renders green confirmation card with "Message Sent!" and reset button.
  - On error: displays helpful alert with direct support email contacts.

### 3.4 Pricing Plan Integration (`/pricing`)
- **Razorpay Payment Gateway Redirects**:
  - **Gold Plan**: Links directly to `https://pages.razorpay.com/pl_T9M4P1xtR0lUnn/view?amount=25960`.
  - **Platinum Plan**: Links directly to `https://pages.razorpay.com/pl_T9M4P1xtR0lUnn/view?amount=36580`.
  - **Partial Amount**: Links to `https://rzp.io/rzp/6XcH8YQj`.
