# Glowvy Beauty Center 🌸

A modern, responsive, and luxury web application for **Glowvy Beauty Center** located on Victoria Road, London. Designed with a bespoke luxury aesthetic featuring interactive treatment showcases, service bundles, client testimonials, and online appointment booking.

🔗 **Live Demo:** [https://sumohamed.github.io/Glowvy/](https://sumohamed.github.io/Glowvy/)

---

## ✨ Features

- **Hero Slider**: Interactive carousel with smooth fade transitions, custom slide pagination, and dynamic headlines.
- **Brand Story (About Section)**: Split layout highlighting the salon's self-care ethos, instant reservation form for 12 treatments, and working hour badges.
- **Curated Services Showcase**: 12 specialty beauty rituals presented in an arch-framed carousel with 4-card pagination and Lucide iconography.
- **Curated Packages**: 4 tailored service bundles (The Weekly Refresh, The New Look, Deep Therapy, and The Full-Body Reset) featuring popular tags and customizable options.
- **Social Proof Carousel**: Auto-sliding client reviews formatted as authentic social media feedback with interactive dot navigation.
- **Booking & FAQ Accordion**: Interactive split reservation card paired with an expandable accordion answering common client questions (bridal bookings, custom packages, payment methods).
- **SEO & Performance Optimized**:
   - Semantic HTML5 structure with complete Open Graph and Twitter Card tags.
   - LocalBusiness JSON-LD Schema markup for London local search visibility.
   - Native lazy loading on below-the-fold media.
   - Fully responsive design engineered with mobile-first SCSS and CSS Grid/Flexbox.

---

## 🎨 Visual Assets & Design Credits

All custom photography, mood boards, and aesthetic visuals across the application were conceptualized and generated using **Google Gemini (AI Image Generation)** to match the bespoke luxury identity of Glowvy:

- **Hero Visuals**: High-resolution photography capturing styling, nail art, and skincare atmospheres.
- **Service Catalog**: 12 bespoke vertical portraits (3:4 ratio) covering all specialized treatments (Japanese Head Spa, Moroccan Hammam, Non-Invasive Body Contouring, Sunless Glow, and Hair Care).
- **Social Proof**: Candid, realistic 1:1 client profile avatars tailored for community recommendations.
- **Graphic Assets**: Custom vector SVG floral patterns, decorative section dividers, and branded Open Graph banners.

---

## 🛠️ Built With

- **Core**: Semantic HTML5, Vanilla JavaScript (ES6 Modules)
- **Styling**: Sass / SCSS (BEM Methodology, CSS Custom Properties, Modular Mixins)
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Bundler & Tooling**: [Vite](https://vitejs.dev/)
- **Deployment**: [GitHub Pages](https://pages.github.com/) via `gh-pages`

---

## 📁 Project Structure

```text
Glowvy/
├── index.html              # Main HTML entry with SEO & Schema markup
├── package.json            # Scripts & dependencies
├── vite.config.js          # Vite config with base path for GH Pages
├── public/
│   └── favicon.svg         # SVG vector favicon
└── src/
    ├── assets/             # Photography, SVG ornaments, and brand graphics
    │   └── data/           # Services, reviews, packages & FAQ data objects
    ├── js/                 # Modular JS logic (slider, services, reviews, FAQ)
    ├── scss/               # SCSS architecture (abstracts, base, components, layout)
    └── main.js             # Application entry point
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (v16 or newer) installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone [https://github.com/sumohamed/Glowvy.git](https://github.com/sumohamed/Glowvy.git)
   cd Glowvy
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start local development server:

   ```bash
   npm run dev
   ```

4. Build and deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

---

## 👥 Contributors & Attribution

- **UI Development & Architecture**: Built with semantic HTML, Sass, and modular JavaScript.
- **AI Art Direction & Media Generation**: **Google Gemini** (Prompt engineering and AI image synthesis for all site visuals).
- **Iconography**: [Lucide Icons](https://lucide.dev/).

---

## 📄 License

© 2026 GLOWVY CO. ALL RIGHTS RESERVED.
