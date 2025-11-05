# Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and TypeScript. Showcasing projects, work experience, and blog posts.

## Features

- 🎨 Modern and clean UI design
- 📱 Fully responsive layout
- 🌙 Dark mode support
- ✨ Smooth animations with Framer Motion
- 📝 Blog functionality with MDX support
- 🚀 Optimized for performance

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Radix UI, Shadcn UI
- **Content**: MDX for blog posts

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (or npm/yarn)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Himanshu-0143/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio/
├── src/
│   ├── app/          # Next.js app router pages
│   ├── components/   # React components
│   ├── data/         # Data configuration files
│   └── lib/          # Utility functions
├── content/          # MDX blog posts
└── public/           # Static assets
```

## Customization

Update your personal information in `src/data/resume.tsx`:
- Personal details
- Skills
- Projects
- Work experience
- Education
- Social media links

## Deployment

The easiest way to deploy this portfolio is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and deploy

## License

This project is open source and available under the [MIT License](LICENSE).
