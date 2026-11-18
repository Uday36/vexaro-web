# Vexaro Courier Solutions — Design System Specification

## 1. Color Palette

The color system is extracted directly from the compiled CSS stylesheet (`53b68ede7034.css`) and `:root` variables:

```css
:root {
  --navy: #1a3a8f;
  --navy-dark: #0f2566;
  --navy-light: #2855c8;
  --orange: #e06000;
  --orange-dark: #b84d00;
  --orange-light: #ff8c2a;
  --cream: #fafbff;
  --light-blue: #f0f4ff;
  --white: #ffffff;
  --soft-border: #dde3f0;
  --graphite: #4a5568;
  --charcoal: #1a202c;
}
```

### Color Token Mapping
| Token | Hex / Value | Usage Description |
| :--- | :--- | :--- |
| `navy` | `#1a3a8f` / `rgb(26, 58, 143)` | Primary brand color, headers, primary buttons, badges |
| `navy-dark` | `#0f2566` / `rgb(15, 37, 102)` | Dark gradient stops, hero dark mode backgrounds |
| `navy-light` | `#2855c8` / `rgb(40, 85, 200)` | Primary gradient second stop, hover accents |
| `navy-50` | `#eef2ff` / `rgb(238, 242, 255)` | Tag pills background, subtle icon container fills |
| `orange` | `#e06000` / `rgb(224, 96, 0)` | Accent brand color, CTA highlights, badges, active indicators |
| `orange-light` | `#ff8c2a` / `rgb(255, 140, 42)` | Gradient stop for buttons, glowing dots |
| `orange-50` | `#fff4ed` / `rgb(255, 244, 237)` | Warm badge and card icon background fills |
| `charcoal` | `#0f172a` / `#1a202c` | Main dark text, footer background, primary contrast elements |
| `graphite` | `#4a5568` | Secondary body text, descriptions, subtle labels |
| `cream` | `#fafbff` | Subtle warm background for alternating sections |
| `light-blue` | `#f0f4ff` | Subtle cool background for cards, headers, and hero overlays |
| `soft-border` | `#dde3f0` | Standard card and container borders |

---

## 2. Gradients & Surface Styles

```css
/* Core Brand Gradients */
.gradient-navy {
  background: linear-gradient(135deg, #1a3a8f 0%, #2855c8 100%);
}

.gradient-orange {
  background: linear-gradient(135deg, #e06000 0%, #ff8c2a 100%);
}

.gradient-duo {
  background: linear-gradient(135deg, #1a3a8f 0%, #e06000 100%);
}

.gradient-text-navy {
  background: linear-gradient(135deg, #1a3a8f, #2855c8);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
}

.gradient-text-orange {
  background: linear-gradient(135deg, #e06000, #ff8c2a);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
}

/* Glassmorphism & Cards */
.glass-panel {
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.05);
}

.card-hover {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(26, 58, 143, 0.14);
}
```

---

## 3. Typography System

- **Heading Font Family**: `Plus Jakarta Sans`, sans-serif (`font-heading`)
- **Body Font Family**: `Inter`, sans-serif (`font-body`)

### Hierarchy & Scale
| Level | Font Family | Size | Weight | Line Height | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display H1** | `Plus Jakarta Sans` | `4.5rem` (72px) / `4rem` / `3rem` | 900 (Black) | `1.05` | Hero headline |
| **Section H2** | `Plus Jakarta Sans` | `2.25rem` (36px) - `2.5rem` (40px) | 700 (Bold) / 800 | `1.2` | Major section titles |
| **Card H3** | `Plus Jakarta Sans` | `1.25rem` (20px) - `1.5rem` (24px) | 700 (Bold) | `1.3` | Service titles, feature cards |
| **Subhead H4** | `Plus Jakarta Sans` | `0.875rem` (14px) - `1rem` (16px) | 600 (Semibold) | `1.4` | Ticker labels, footer headings |
| **Body Large** | `Inter` | `1.125rem` (18px) | 400 / 500 | `1.6` | Hero descriptive copy |
| **Body Base** | `Inter` | `0.9375rem` (15px) - `1rem` (16px) | 400 | `1.6` | Standard paragraphs, content |
| **Body Small** | `Inter` | `0.875rem` (14px) | 400 / 500 | `1.5` | Footers, card descriptions |
| **Caption / Tiny** | `Plus Jakarta Sans` | `0.6875rem` (11px) - `0.75rem` (12px) | 600 / 700 | `1.2` | Uppercase tracking pills, tags |

---

## 4. Layout, Containers & Spacing

- **Container Constraint**:
  ```css
  .container-custom {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
  }
  ```
- **Section Spacing**:
  ```css
  .section-padding {
    padding: 80px 0;
    overflow-x: clip;
  }
  ```
- **Border Radius**:
  - `rounded-card`: `1rem` (16px)
  - `rounded-btn`: `0.75rem` (12px)
  - `rounded-full`: `9999px` (Pill buttons, badges, navbars)
- **Breakpoints**:
  - `sm`: `640px`
  - `md`: `768px` (Tablet)
  - `lg`: `1024px` (Laptop / Desktop threshold)
  - `xl`: `1280px`
  - `2xl`: `1536px`

---

## 5. Shadows & Elevation

- `shadow-card`: `0 4px 20px rgba(0, 0, 0, 0.05)`
- `shadow-navy`: `0 8px 30px rgba(26, 58, 143, 0.25)`
- `shadow-navy-sm`: `0 4px 15px rgba(26, 58, 143, 0.2)`
- `shadow-orange`: `0 8px 25px rgba(224, 96, 0, 0.3)`
- `shadow-orange-sm`: `0 4px 15px rgba(224, 96, 0, 0.2)`
- `shadow-soft`: `0 4px 16px rgba(26, 58, 143, 0.06)`
