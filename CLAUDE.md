# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Echo is a Next.js 15 application using React 19, TypeScript, and Tailwind CSS 4. It's a content publishing platform designed to write once and publish everywhere (Hashnode, Dev.to, Medium). The project features:

- **World-class minimal design** - Pure monochromatic palette with no color accents
- **Sophisticated landing page** - Hero, features, pricing, FAQ sections with refined typography
- **Smooth scrolling** - Lenis library for buttery-smooth scroll experience
- **Framer Motion animations** - Subtle, professional micro-interactions
- **Dark mode support** - next-themes with seamless theme switching
- **Responsive design** - Mobile-first approach with elegant breakpoints

## Design Philosophy

The landing page embodies a **world-class minimal aesthetic**:
- **Pure monochromatic** - Only neutral colors (blacks, whites, grays)
- **No color accents** - Completely removed orange and all color highlights
- **Generous whitespace** - Consistent 32px vertical spacing between sections
- **Refined typography** - Large, bold headings (up to text-8xl) with tight tracking
- **Subtle interactions** - 200ms transitions, minimal hover effects
- **Professional presentation** - Clean layouts with clear visual hierarchy

## Common Commands

```bash
# Development
pnpm dev              # Start dev server with Turbopack at localhost:3000

# Build & Production
pnpm build            # Build production bundle
pnpm start            # Start production server

# Linting
pnpm lint             # Run ESLint
```

## Architecture & Structure

### Directory Organization

```
src/
├── app/              # Next.js App Router (pages, layouts, routes)
│   ├── page.tsx      # Landing page (client component)
│   ├── layout.tsx    # Root layout with fonts and metadata
│   └── globals.css   # Tailwind config + custom design tokens
├── components/
│   ├── blocks/       # Feature components (card-stack, aurora, spotlight-card)
│   ├── shared/       # Layout components (navbar, footer, smooth-scroll)
│   └── ui/           # Base UI primitives (button) using Radix + CVA
├── hooks/            # Custom React hooks
├── lib/              # Utility functions (cn helper)
└── types/            # TypeScript type definitions
```

### Key Components

**Landing Page (`src/app/page.tsx`)**
- Client component using Framer Motion throughout
- Sections: Hero, What is Echo, Features, Pricing, FAQ, Final CTA
- All sections use `motion.div` for fade-in animations
- Imports `SmoothScroll` component for Lenis integration

**Platform Showcase (`src/components/blocks/card-stack.tsx`)**
- Visual flow diagram: Echo → Arrow → Platform Grid
- Shows content distribution from one source to three destinations
- Uses inline SVG logos for Hashnode, Dev.to, Medium
- Client component with staggered animations

**Smooth Scrolling (`src/components/shared/smooth-scroll.tsx`)**
- Client component wrapper for Lenis smooth scroll
- Initializes on mount, cleans up on unmount
- Returns `null` (invisible component)

**Navbar (`src/components/shared/navbar.tsx`)**
- Glassmorphism effect with backdrop blur
- Theme toggle using next-themes
- Mobile menu with responsive breakpoints
- All neutral colors, no accent colors

**Footer (`src/components/shared/footer.tsx`)**
- Four-column grid layout
- All links use neutral hover colors
- Minimal, clean design

### Styling Architecture

**Tailwind CSS 4 Configuration (`src/app/globals.css`)**
- Custom dark mode variant: `@custom-variant dark (&:is(.dark *))`
- Design tokens using CSS variables
- Minimal color palette - removed all orange references
- Refined borders: `oklch(0.18 0.01 265 / 25%)`
- Subtle elevated surfaces with minimal shadows

**Color System**
- **Light mode**: White backgrounds, neutral-900 text
- **Dark mode**: `oklch(0.06 0.005 265)` background, neutral-50 text
- **No accent colors** - Pure monochromatic throughout
- **Borders**: Subtle neutral-200/neutral-800

**Typography Scale**
- Headings: text-4xl to text-8xl with bold weights
- Body: text-base to text-2xl with relaxed leading
- Font: Geist Sans (primary), Geist Mono (code)

### Client vs Server Components

**Client Components** (marked with `"use client"`):
- `page.tsx` - Uses Framer Motion and interactive elements
- `card-stack.tsx` - Animated platform showcase
- `navbar.tsx` - Theme toggle and menu state
- `smooth-scroll.tsx` - Lenis initialization
- `animated-section.tsx` - Motion wrapper components

**Important**: Client components are still pre-rendered on the server (SSR), then hydrated on the client. Avoid using browser APIs (`document`, `window`) in the component body - use `useEffect` instead.

**SSR-Safe Patterns**:
```tsx
// ❌ BAD - Causes SSR error
const isDark = document.documentElement.classList.contains('dark');

// ✅ GOOD - Use CSS classes
className="fill-white dark:fill-[#0a0a0a]"

// ✅ GOOD - Use useEffect for browser APIs
useEffect(() => {
  const isDark = document.documentElement.classList.contains('dark');
}, []);
```

### Configuration Notes

- **Package Manager**: pnpm (uses `pnpm-lock.yaml`)
- **Next.js**: Turbopack for dev builds (faster than Webpack)
- **Fonts**: Geist Sans and Geist Mono via next/font/google
- **TypeScript**: Strict mode enabled
- **Linting**: ESLint with Next.js config

## Important Implementation Details

**Design Principles**:
1. **No color accents** - Use only neutral colors (black, white, grays)
2. **Generous spacing** - Consistent `py-32` for section padding
3. **Minimal borders** - Subtle `border-neutral-200 dark:border-neutral-800`
4. **Refined typography** - Large headings with `font-bold` and `tracking-tight`
5. **Subtle animations** - 200ms transitions, simple fade-ins

**When adding new components**:
1. Mark interactive components with `"use client"`
2. Use Framer Motion for animations: `motion.div` with `ease: [0.22, 1, 0.36, 1]`
3. Follow monochromatic color scheme - no orange or accent colors
4. Use neutral hover states: `hover:border-neutral-300 dark:hover:border-neutral-700`

**When working with animations**:
1. Use consistent easing: `[0.22, 1, 0.36, 1]` (custom ease-out)
2. Stagger delays: `delay: 0.1 + index * 0.1`
3. Keep durations short: 200-600ms
4. Avoid flashy effects - subtle is better

**Path imports**:
- Always use `@/` alias for imports from `src/` directory
- Example: `import { cn } from "@/lib/utils"`

**Image Storage**:
- Place all images in `public/images/` directory
- Reference with `/images/filename.jpg` (public is the root)
- Use Next.js Image component for optimization

## Key Dependencies

- **next**: 15.3.4 - React framework with App Router
- **react**: 19.0.0 - UI library
- **motion**: 12.23.24 - Framer Motion for animations
- **lenis**: 1.3.15 - Smooth scrolling library
- **next-themes**: 0.4.6 - Dark mode support
- **lucide-react**: 0.525.0 - Icon library
- **tailwindcss**: 4 - Utility-first CSS framework
- **class-variance-authority**: 0.7.1 - Component variants
- **@radix-ui/react-slot**: 1.2.3 - Composition primitive

