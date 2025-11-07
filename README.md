# Faizan Ali — Portfolio

Next.js portfolio showcasing case studies, services, projects, resume, and a contact page. Built with TypeScript and Tailwind, with smooth animations via Framer Motion.

## Live Demo

- Deployed on Vercel: `https://<your-vercel-project>.vercel.app/` (update after first deploy)

## Tech Stack

- Next.js 16, React 19, TypeScript
- Tailwind CSS, Framer Motion
- Markdown rendering for resume (`public/resume.md`)
- Optional server email via Resend (disabled by default; current contact uses `mailto:`)

## Features

- Case Studies with dynamic content and site preview
- Services page with structured offerings and tech stack
- Projects grid with categories and live links
- Resume viewer that loads `public/resume.md`
- Contact form that opens the user’s email client (`mailto:`)

## Getting Started

Prerequisites:
- Node.js `>= 18`

Install and run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Scripts

- `npm run dev` — start local dev server
- `npm run build` — build for production
- `npm start` — run production build
- `npm run lint` — run ESLint

## Configuration

- No environment variables are required for the default `mailto` contact flow.
- Optional (only if enabling server-side email): create `portfolio/.env.local` with:
  - `RESEND_API_KEY=your_key`
  - `CONTACT_TO_EMAIL=your_destination@example.com`

## Deployment

Recommended: Vercel
- Push the repo to GitHub
- Import the GitHub repo in Vercel (`New Project` → Next.js auto-detected)
- Add env vars only if enabling server email
- Deploy; future pushes create preview and production deployments automatically

Note on GitHub Pages
- GitHub Pages does not support Next.js server features (API routes, SSR). This project uses server-side logic for site previews; Vercel is the reliable choice.

## Project Structure

- `src/app` — App Router pages
- `src/components` — UI components
- `src/data` — case studies and services data
- `public` — static assets and `resume.md`

## Contact

- For inquiries, use the Contact page or email: `faizali2152@gmail.com`
