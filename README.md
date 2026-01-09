# Ryze Website Redesign

A modern, visually stunning redesign of the Ryze AI advertising platform website, built with React, Framer Motion, and Tailwind CSS.



## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Design Decisions](#design-decisions)
- [Key Components](#key-components)


## Overview

This project is a complete redesign of the Ryze website (https://www.get-ryze.ai/) with a focus on:

- **Modern Design**: Clean, professional, and visually appealing interface
- **User Experience**: Smooth navigation, clear CTAs, and intuitive interactions
- **Mobile-First**: Fully responsive and accessible design
- **Modular Architecture**: Reusable, maintainable component structure
- **Performance**: Optimized animations and lazy loading , but still a bit laggy because of framer motion.

## ✨ Features

### Core Features

- **Multi-page Navigation**: Home, Case Studies, and Our Story pages
- **Interactive Animations**: Framer Motion-powered scroll animations and parallax effects
- **Theme Toggle**: Dynamic color scheme switching with 5 pre-built themes
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Accessibility**: Semantic HTML and ARIA-compliant components

### Interactive Elements

- **Chatbot Experience**: Interactive AI chat interface in the Comparison section
- **Heart Animation**: Beating heart animation in Testimonials (speeds up on hover)
- **Parallax Scrolling**: Depth effects throughout the site
- **Hover Effects**: Rich micro-interactions on cards, buttons, and links
- **Scroll Animations**: Staggered fade-in animations as elements enter viewport

### Special Sections

- **Hero Section**: Bold typography with email capture CTA
- **Features Grid**: Interactive cards showcasing AI capabilities
- **Testimonials Wall**: Dynamic grid layout with social media-style cards
- **Case Studies**: Detailed success stories with insights
- **Our Story**: Narrative-driven page with parallax storytelling



## Project Structure

```
structurerize-redesign/
├── public/
│   ├── favicon.svg
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── logos/          # Client logos
│   │   └── testimonials/   # Testimonial images
│   ├── components/
│   │   ├── layout/         # Navbar, Footer
│   │   ├── sections/       # Page sections
│   │   └── ui/             # Reusable UI components
│   ├── pages/              # Route pages
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles & animations
├── package.json
├── vite.config.js
├── tailwind.config.js
`
``

### Component Organization

**Layout Components** (`components/layout/`):
- `Navbar.jsx`: Global navigation with theme toggle
- `Footer.jsx`: Footer with interactive cards and CTA

**Section Components** (`components/sections/`):
- `Hero.jsx`: Main hero section with CTA
- `Features.jsx`: Feature showcase with interactive cards
- `Testimonials.jsx`: Social proof grid with heart animation
- `LogoTray.jsx`: Client logo marquee
- `Comparison.jsx`: AI vs Chat comparison with chatbot
- `AuditHero.jsx`: Account audit CTA section
- `Ticker.jsx`: Scrolling stats banner

**Page Components** (`pages/`):
- `Home.jsx`: Main landing page
- `CaseStudies.jsx`: Case studies showcase
- `OurStory.jsx`: Company story with parallax

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AryanAkhare/ryze-redesign
   cd ryze-redesign/structurerize-redesign
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory, ready for deployment.

### Preview Production Build

```bash
npm run preview
```

## Design Decisions

### Color System

The website uses a CSS variable-based theming system:

- `--color-bg`: Background color
- `--color-text-primary`: Primary brand color (accent)
- `--color-text-secondary`: Main text color
- `--color-accent`: Accent color
- `--color-primary-rgb`: RGB values for rgba() usage

### Typography

- **Headings**: Ultra-bold, tight tracking for impact
- **Body**: Medium weight, relaxed leading for readability
- **CTAs**: Bold, uppercase with tracking for emphasis

### Animation Philosophy

- **Scroll-triggered**: Elements animate as they enter viewport
- **Hover states**: Rich feedback on interactive elements
- **Parallax**: Depth through scroll-based transforms
- **Performance**: GPU-accelerated transforms, will-change hints

### Layout Principles

- **Modular Sections**: Each section is self-contained and reusable
- **Grid Systems**: CSS Grid for complex layouts, Flexbox for simple ones
- **Spacing**: Consistent scale using Tailwind's spacing system
- **Responsive**: Mobile-first breakpoints (sm, md, lg, xl)

## Key Components

### Theme Toggle

Located in the Navbar, allows users to switch between 5 color themes:
- Default (Orange)
- Blue
- Purple
- Green

Theme preference is saved to localStorage and persists across sessions.

### Interactive Chatbot

In the Comparison section, users can:
- Click pre-written questions to start conversations
- See AI responses appear in a chat interface
- Experience smooth message animations

### Heart Animation

In the Testimonials "Wall of Love" section:
- Heart beats slowly by default (1.6s cycle)
- Speeds up dramatically on hover (0.7s cycle)
- Uses CSS keyframe animations with transform scale

### Parallax Effects

Multiple sections use scroll-based parallax:
- Background elements move at different speeds
- Creates depth and visual interest
- Smooth spring physics via Framer Motion

## Theme System

The theme system allows dynamic color changes across the entire site:

1. **CSS Variables**: All colors use CSS custom properties
2. **RGB Support**: Separate RGB variable for opacity-based colors
3. **Theme Toggle**: Button in navbar cycles through themes
4. **Persistence**: Selected theme saved to localStorage

### Adding New Themes

Edit `Navbar.jsx` and add to the `themes` array:

```javascript
{
  name: "YourTheme",
  bg: "#ffffff",
  textPrimary: "#YOUR_COLOR",
  textSecondary: "#YOUR_COLOR",
  accent: "#YOUR_COLOR",
}
```

## Responsive Design

The site is fully responsive with breakpoints:

- **Mobile**: < 640px (default)
- **Tablet**: 640px - 1024px (sm, md)
- **Desktop**: > 1024px (lg, xl)

Key responsive features:
- Flexible grid layouts
- Stacked navigation on mobile
- Touch-friendly interactive elements
- Optimized image loading




##  Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint


##  Acknowledgments

- Design inspiration from modern SaaS websites
- Framer Motion for smooth animations
- Tailwind CSS for rapid development
- Original Ryze website for reference

---

**Note**: For detailed component explanations and subtle features, see `COMPONENTS_EXPLANATION.txt`
