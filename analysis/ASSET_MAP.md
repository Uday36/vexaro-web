# Vexaro Courier Solutions — Asset Recovery & Mapping

## 1. Overview
All original photographic assets, branding logos, illustration graphics, partner emblems, client portraits, and stylesheets have been discovered in `capture/live/assets/`. 

This document maps each captured asset to its public path inside `website/public/` so that every component references the identical high-resolution asset without missing references or broken images.

---

## 2. Master Asset Mapping Table

| Source Captured File | Destination in `website/public/` | Size | Content Type | Section & Component Placement |
| :--- | :--- | :--- | :--- | :--- |
| `assets/f90d2b8b43ac.png` | `/new-logo.png` | 467 KB | `image/png` | **Global Brand Logo**: Navbar Header, Mobile Drawer, and Footer. |
| `assets/0000f04fbd14.png` | `/hero_background.png` | 1.83 MB | `image/png` | **Home Hero Background**: High-resolution logistics/courier truck & highway visual with transparency overlay. |
| `assets/24e74f650ec5.png` | `/trusted-secure.png` | 1.54 MB | `image/png` | **Home — About Feature Card 1**: "Trusted & Secure" feature image. |
| `assets/9e2d7f11cdce.png` | `/lightning-speed.png` | 1.58 MB | `image/png` | **Home — About Feature Card 2**: "Lightning Speed" feature image. |
| `assets/6871c5ee9f01.png` | `/pan-india-reach.png` | 1.72 MB | `image/png` | **Home — About Feature Card 3**: "Pan-India Reach" feature image. |
| `assets/ed05c35b2b86.png` | `/24-7-support.png` | 1.68 MB | `image/png` | **Home — About Feature Card 4**: "24/7 Support" feature image. |
| `assets/3fdf32a296c6.png` | `/speed-precision.png` | 1.73 MB | `image/png` | **Home — Why VEXARO Card 1**: "Speed & Precision" card image. |
| `assets/31e931f834c5.png` | `/real-time-tracking.png` | 1.38 MB | `image/png` | **Home — Why VEXARO Card 2**: "Real-Time Tracking" card image. |
| `assets/573748cb85b2.png` | `/safe-secure.png` | 1.43 MB | `image/png` | **Home — Why VEXARO Card 3**: "Safe & Secure" card image. |
| `assets/f9285f3c7aaf.png` | `/dedicated-support.png` | 1.48 MB | `image/png` | **Home — Why VEXARO Card 4**: "Dedicated Support" card image. |
| `assets/03ed50ce9af2.png` | `/widest-network.png` | 1.65 MB | `image/png` | **Home — Why VEXARO Card 5**: "Widest Network" card image. |
| `assets/2585f6867e07.png` | `/technology-first.png` | 1.50 MB | `image/png` | **Home — Why VEXARO Card 6**: "Technology-First" card image. |
| `assets/775a63d1b562.png` | `/client-rajesh.png` | 1.61 MB | `image/png` | **Testimonials**: Rajesh Sharma (Operations Head, TechMart India). |
| `assets/1210d61776b8.png` | `/client-priya.png` | 1.62 MB | `image/png` | **Testimonials**: Priya Nair (Supply Chain Manager, Fashionista Retail). |
| `assets/bd7795ecae56.png` | `/client-ankit.png` | 1.58 MB | `image/png` | **Testimonials**: Ankit Mehta (Founder & CEO, QuickServe Marketplace). |
| `assets/063d30361377.png` | `/client-divya.png` | 1.55 MB | `image/png` | **Testimonials**: Divya Krishnan (Director, Meridian Pharmaceuticals). |
| `assets/013b5a30918c.png` | `/client-suresh.png` | 1.80 MB | `image/png` | **Testimonials**: Suresh Gupta (E-commerce Head, HomeDecor Plus). |
| `assets/89581b27c1a2.png` | `/dhl.png` | 910 KB | `image/png` | **Partners Page**: DHL brand card. |
| `assets/8a5ebbf57344.png` | `/amazon-shipping.png` | 765 KB | `image/png` | **Partners Page**: Amazon Shipping brand card. |
| `assets/a0aaf4ee64ac.png` | `/aramex.png` | 676 KB | `image/png` | **Partners Page**: Aramex brand card. |
| `assets/11f574200614.png` | `/ekart.png` | 647 KB | `image/png` | **Partners Page**: Ekart brand card. |
| `assets/01a1f59ea3ab.png` | `/xpressbees.png` | 785 KB | `image/png` | **Partners Page**: Xpressbees brand card. |
| `assets/2d02c9f54c19.png` | `/skynet.png` | 760 KB | `image/png` | **Partners Page**: SkyNet brand card. |
| `assets/c974508605ab.png` | `/fedex.png` | 665 KB | `image/png` | **Partners Page**: FedEx brand card. |
| `assets/1d79520a8bec.png` | `/ecom-express.png` | 842 KB | `image/png` | **Partners Page**: Ecom Express brand card. |
| `assets/bfdba9802e1e.png` | `/logoxpress.png` | 785 KB | `image/png` | **Partners Page**: LogoXpress brand card. |
| `assets/ac63da59286f.png` | `/gati.png` | 842 KB | `image/png` | **Partners Page**: Gati brand card. |
| `assets/eef86cb577a8.png` | `/shree-maruti.png` | 848 KB | `image/png` | **Partners Page**: Shree Maruti brand card. |

---

## 3. Web Fonts & Stylesheet Recovery

- **Google Fonts Import**:
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  ```
- **Live Compiled Stylesheet**: `capture/live/assets/53b68ede7034.css`
  - Extracted to `website/src/index.css` to guarantee all custom utility classes, keyframes, scrollbar styling, and color variables match pixel-for-pixel.
