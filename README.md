# UW Student Portfolio Template

https://thomasz05.me


A free, modern portfolio website template designed for University of Washington students to showcase their academic achievements, projects, and professional experience.

## Features

- Modern, responsive design optimized for all devices
- Built with Next.js 15 for optimal performance
- Tailored sections for ACMS, Informatics, and CSE programs
- Easy deployment to Cloudflare Pages
- Professional layout perfect for internship applications

## Quick Start

1. Click "Use this template" at the top of this repository
2. Clone your new repository:
   ```bash
   git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   cd YOUR-REPO-NAME
   ```
3. Install dependencies and run:
   ```bash
   pnpm install
   pnpm dev
   ```

## Customization

Edit `app/page.tsx` to update your personal information, experience, projects, and skills. Add your resume PDF to the `public/` folder and update the download link.

## Deployment

### Cloudflare Pages
1. Push code to GitHub
2. Connect repository at [Cloudflare Pages](https://pages.cloudflare.com/)
3. Build settings: `pnpm build` with output directory `out`

## Tech Stack

- Next.js 15
- TailwindCSS
- shadcn/ui components
- Static export for universal hosting

## License

MIT License - free for all students to use and modify. 
