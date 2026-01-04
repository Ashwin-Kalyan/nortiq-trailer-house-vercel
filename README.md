# PLEAST Website

A modern, responsive website for PLEAST real estate investment services, built with React, TypeScript, Tailwind CSS, and Bootstrap.

## Features

- **React 18** with TypeScript for type safety
- **Tailwind CSS** for utility-first styling
- **Bootstrap 5** for additional components
- **React Router** for client-side routing
- **Responsive Design** - Mobile-first approach
- **Modern UI/UX** - Smooth animations and transitions

## Project Structure

```
src/
├── components/       # Shared components (Header, Footer, FixedCTA)
├── pages/           # Page components
│   ├── HomePage.tsx
│   ├── OperationPage.tsx
│   ├── ShintikuPage.tsx
│   └── TrailerHousePage.tsx
├── App.tsx          # Main app component with routing
├── main.tsx         # Entry point
└── index.css        # Global styles
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Pages

- **Home** (`/`) - Main landing page with hero, problem/solution sections, CLT info, and company overview
- **Operation** (`/operation`) - Operation flow, FAQ, and contact form
- **Shintiku** (`/shintiku`) - New built inn investment page
- **Trailer House** (`/trailer-house`) - Trailer house investment page

## Technologies

- **React 18.2.0** - UI library
- **TypeScript 5.2.2** - Type safety
- **Vite 5.0.0** - Build tool
- **React Router 6.20.0** - Routing
- **Tailwind CSS 3.3.5** - Styling
- **Bootstrap 5.3.2** - Additional components

## Customization

The design uses a custom color palette defined in `tailwind.config.js`:
- Primary: `#1a2a4a` (dark blue)
- Secondary: `#c9a962` (gold)
- Accent: `#b8432f` (red)

## License

© 2025 PLEAST Inc. All Rights Reserved.

