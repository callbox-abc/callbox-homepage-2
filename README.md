# Callbox Homepage — V2 "Bulletin"

A homepage mockup for Callbox (B2B lead generation agency), built with
React + Vite + Tailwind CSS + lucide-react.

Design direction: lighter, editorial layout with serif display headlines,
hairline dividers, a tabbed services panel, and a radar-sweep hero
illustration (fixed service icons lit by a rotating sweep beam inside a
dark device panel).

All copy, stats and logos are **sample content** for layout review only.

## Run locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Build for production

```bash
npm run build
npm run preview   # sanity-check the production build locally
```

Output goes to `dist/`.

## Deploy to Vercel

1. Push this folder to its own GitHub repository.
2. In Vercel: **New Project → Import** the repo.
3. Vercel auto-detects the Vite framework preset (`vite build`, output `dist`).
   A `vercel.json` is included as a fallback in case auto-detection is off.
4. Deploy. No environment variables are required.

## Structure

```
index.html          entry HTML
src/main.jsx         React root
src/App.jsx           the homepage itself
src/index.css         Tailwind directives
tailwind.config.js
vite.config.js
```
