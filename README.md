# PLEAST React Application

A React + TypeScript application that replicates the 4 HTML pages for PLEAST real estate investment company.

## Tech Stack

- **React 18** with TypeScript
- **Vite** as build tool
- **React Router** for navigation
- **Bootstrap 5** for mobile optimization
- **Tailwind CSS** for utility styling
- Custom CSS for component-specific styles

## Project Structure

```
src/
├── components/        # Shared components (Header, Footer, FixedCTA)
├── pages/            # Page components
│   ├── TopPage.tsx   # Homepage
│   ├── OperationPage.tsx  # Q&A/Operation page
│   ├── ShintikuPage.tsx   # New construction villa page
│   └── TrailerPage.tsx    # Trailer house page
├── App.tsx           # Main app with routing
├── main.tsx          # Entry point
└── index.css         # Global styles
```

## Getting Started

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

## Pages

- `/` - TopPage (Homepage)
- `/operation` - Operation/Q&A Page
- `/shintiku` - New Construction Villa Type Inn Page
- `/trailer` - Trailer House Page

## Features

- Responsive design with Bootstrap and Tailwind CSS
- Smooth scrolling navigation
- Animated sections with Intersection Observer
- Mobile-optimized layouts
- All original styling preserved