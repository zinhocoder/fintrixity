# Fintrixity

Finance Solution in One Platform - Next.js Application

This is a personal project created to challenge and improve my front-end development skills. The project features a modern, responsive design with smooth horizontal scrolling navigation between sections.

## Credits

The Hero section design was inspired by the Figma prototype: [16 Hero Designs](https://www.figma.com/design/nYne2BsmjmELq3EIsCNYhz/16-Hero-Designs?node-id=27-18756&t=gBTvpbB2kEPi57Sx-4)

All other sections (Features, Pricing, and FAQ) were designed and developed from scratch, serving as a challenge to enhance my front-end capabilities and create a cohesive, professional user experience.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- Horizontal scroll navigation between sections
- Custom SF Pro Display font
- Fully responsive design (mobile-first approach)
- Smooth section transitions
- Interactive FAQ accordion
- Modern UI with glassmorphism effects

## Project Structure

- `app/` - Next.js app directory
  - `page.tsx` - Main page with horizontal scroll logic
  - `layout.tsx` - Root layout
  - `globals.css` - Global styles and font definitions
- `components/` - React components
  - `HeroSection.tsx` - Hero section with header and main content (design inspired by Figma prototype)
  - `DashboardSection.tsx` - Dashboard image section
  - `FeatureSection.tsx` - Features grid section (designed from scratch)
  - `PricingSection.tsx` - Pricing plans section (designed from scratch)
  - `FAQSection.tsx` - FAQ accordion section (designed from scratch)
- `public/` - Static assets
  - `Group 1.png` - Orange glow effect
  - `dashboard.png` - Dashboard image
  - `7.png` - Feature section background
  - `13.png` - Pricing section background
  - `6.png` - FAQ section background
  - `icon.png` - Logo icon
  - `discico.png` - Discord icon
  - `fonts/` - SF Pro Display font files

## Build

To build for production:

```bash
npm run build
npm start
```

