# Assetra Landing Page

A production-ready landing page for Assetra built with Next.js 14, Tailwind CSS, and TypeScript.

## Features

- **Responsive Design**: Optimized for all device sizes
- **Dark Theme**: Modern dark UI with violet-pink gradient accents
- **Interactive Components**: 
  - Hero section with dual CTAs
  - Featured Drop card with real-time countdown and progress bar
  - 3-step "How it works" section
  - Waitlist form with validation
  - Social sharing functionality
- **Accessibility**: Built with accessibility best practices
- **Performance**: Optimized with Next.js 14 and Turbo mode

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Lucide React
- **Build Tool**: Turbo

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation & Running

1. Navigate to the project directory:
   ```bash
   cd assetra-landing
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:3000
   ```

## Available Scripts

- `npm run dev` - Start development server with Turbo mode
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint

## Project Structure

```
assetra-landing/
├── src/
│   ├── app/
│   │   ├── globals.css         # Global styles and Tailwind setup
│   │   ├── layout.tsx          # Root layout with metadata
│   │   └── page.tsx            # Main landing page
│   └── components/
│       ├── NavBar.tsx          # Navigation with mobile menu
│       ├── Hero.tsx            # Hero section with CTAs
│       ├── FeaturedDrop.tsx    # Featured drop with countdown
│       ├── HowItWorks.tsx      # 3-step process section
│       ├── Waitlist.tsx        # Waitlist signup form
│       └── Footer.tsx          # Footer with links and newsletter
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies and scripts
```

## Design System

### Colors
- **Background**: Dark theme with subtle gradients
- **Brand**: Violet to pink gradient (`#6a5cff` → `#ff5fc0`)
- **Text**: Light colors with muted variants for hierarchy

### Components
- **Buttons**: Gradient primary, light secondary with hover effects
- **Cards**: Subtle borders and shadows with glass-morphism effect
- **Animations**: Floating animations for visual interest

## Features in Detail

### Hero Section
- Animated social proof badge
- Responsive typography with clamp() values
- Dual CTA buttons (primary + secondary)
- Interactive mockup interface

### Featured Drop
- Real-time countdown timer
- Animated progress bar
- Share functionality with Web Share API fallback
- Dynamic pricing chips
- Live status indicator

### How It Works
- 3-step process with icons and animations
- Connected flow with gradient lines
- Hover effects and micro-interactions
- Social proof integration

### Waitlist Form
- Email validation
- Loading states and success handling
- Position tracking simulation
- Perk highlights with icons

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

Private - All rights reserved.