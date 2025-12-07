# Projects Portfolio - Senior Blockchain LLC

A modern, professional portfolio website built with React 19, TypeScript, and shadcn/ui.

## 🚀 Features

- **10 Showcase Projects**: Real estate, AI e-commerce, WhatsApp management, call centers, video platforms, and more
- **Dynamic Project Pages**: Each project has a detailed presentation page with features, pricing, and timeline
- **Modern UI Components**: Built with shadcn/ui for a premium, professional look
- **Responsive Design**: Fully responsive and mobile-friendly
- **Search & Filtering**: Advanced search and difficulty-level filtering
- **Type-Safe**: Written in TypeScript for reliability
- **Fast**: Optimized with Vite for lightning-fast development and builds

## 📁 Project Structure

```
src/
├── components/
│   ├── ProjectCard.tsx       # Project preview card
│   ├── ProjectHero.tsx       # Hero banner for project pages
│   ├── ProjectFeature.tsx    # Feature list component
│   ├── PriceBox.tsx          # Pricing and CTA box
│   ├── Section.tsx           # Reusable section wrapper
│   └── ui/                   # shadcn/ui components
├── data/
│   └── projects.ts           # All 10 project data
├── pages/
│   ├── home.tsx              # Landing page
│   ├── projects/
│   │   ├── index.tsx         # Projects list page
│   │   └── [slug].tsx        # Individual project page
├── styles/
│   └── projects.css          # Custom project styles
└── lib/
    └── utils.ts              # Utility functions
```

## 🛠️ Tech Stack

- **React 19** - Latest React features
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **TailwindCSS** - Utility-first CSS
- **shadcn/ui** - High-quality UI components
- **React Router** - Client-side routing
- **Lucide Icons** - Beautiful icons

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Customization

### Adding New Projects

Edit `src/data/projects.ts` and add a new project object:

```typescript
{
  id: 11,
  slug: "your-project-slug",
  title: "Your Project Title",
  shortDescription: "Brief description",
  longDescription: "Detailed description",
  priceEstimate: "From $X,XXX",
  deliveryTime: "X–Y weeks",
  difficultyLevel: "Medium",
  technologies: ["Tech1", "Tech2"],
  features: ["Feature 1", "Feature 2"],
  heroImage: "/images/projects/your-image.jpg"
}
```

### Customizing Colors

The project uses TailwindCSS and CSS variables. Edit `src/index.css` to change the color scheme.

### Modifying Components

All components are in `src/components/`. They're built with shadcn/ui and fully customizable.

## 📄 Pages

### Home Page (`/`)
- Hero section
- Feature highlights
- Statistics
- Call-to-action

### Projects List (`/projects`)
- Grid of all projects
- Search functionality
- Difficulty filtering
- Responsive cards

### Project Details (`/projects/:slug`)
- Project hero banner
- Full description
- Feature list
- Technology stack
- Timeline visualization
- Pricing box with CTA
- Related projects

## 🎯 Key Components

### ProjectCard
Displays project preview with:
- Title and description
- Technologies used
- Timeline and difficulty
- Price estimate
- Link to details

### ProjectHero
Hero banner showing:
- Project title
- Description
- Technology badges
- Gradient background

### PriceBox
Sticky pricing sidebar with:
- Price estimate
- Delivery timeline
- Complexity level
- Feature list
- CTA buttons

### ProjectFeature
Feature list with:
- Checkmark icons
- Hover effects
- Clean layout

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy the dist/ folder
```

### Netlify
```bash
npm run build
# Deploy the dist/ folder
# Add redirect rule: /* /index.html 200
```

### Custom Server
```bash
npm run build
# Serve the dist/ folder with your preferred server
```

## 📝 Environment Variables

No environment variables required for basic functionality.

## 🤝 Contributing

This is a portfolio project for Senior Blockchain LLC. Contact us for custom development needs.

## 📧 Contact

**Senior Blockchain LLC**
- Website: [Your Website]
- Email: [Your Email]
- Location: Oman

## 📄 License

Copyright © 2025 Senior Blockchain LLC. All rights reserved.

---

Built with ❤️ using React 19 and shadcn/ui
