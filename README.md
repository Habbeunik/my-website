# My Portfolio - Astro + React + SSR

A modern portfolio website built with Astro, React, and Tailwind CSS, featuring server-side rendering (SSR).

## Features

- ⚡ **Astro** - Fast, modern static site generator
- ⚛️ **React** - Component-based UI with SSR support
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🚀 **SSR** - Server-side rendering for better SEO and performance
- 📱 **Responsive** - Mobile-first design
- 🌐 **Deployment Ready** - Configured for Netlify deployment

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run astro` - Run Astro CLI commands

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section
│   ├── About.jsx       # About section
│   ├── Projects.jsx    # Projects showcase
│   └── Footer.jsx      # Footer with contact info
├── pages/              # Astro pages
│   └── index.astro     # Home page
└── styles/             # Global styles (if needed)
```

## Configuration

### SSR Configuration

The project is configured for server-side rendering in `astro.config.mjs`:

```javascript
export default defineConfig({
	output: 'server', // Enable SSR
	integrations: [react(), tailwind()],
	adapter: netlify(), // For Netlify deployment
});
```

### Hybrid Rendering

You can mix static and server-rendered pages:

- **Static pages** (default): No frontmatter needed
- **SSR pages**: Add `export const prerender = false;` to page frontmatter

## Deployment

### Netlify (Recommended)

1. Build the project:

```bash
npm run build
```

2. Deploy to Netlify:
   - Connect your repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`

### Other Platforms

For other platforms, install the appropriate adapter:

```bash
# Vercel
npm install @astrojs/vercel

# Node.js
npm install @astrojs/node
```

## Customization

1. **Update content**: Edit the React components in `src/components/`
2. **Modify styling**: Update Tailwind classes or add custom CSS
3. **Add pages**: Create new `.astro` files in `src/pages/`
4. **Configure SSR**: Adjust the `output` setting in `astro.config.mjs`

## Technologies Used

- [Astro](https://astro.build/) - Web framework
- [React](https://reactjs.org/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Netlify](https://netlify.com/) - Deployment platform

## License

MIT License - feel free to use this template for your own portfolio!

