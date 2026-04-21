# Zeyu Xu Portfolio

CV-backed personal portfolio for graduate supervision conversations and professional review.

Live project focus:

- applied machine learning for Android malware detection
- mobile and system security
- AI-assisted digital forensics
- computer-vision interaction and WebGL systems

Repository: [github.com/Zeyu723/zeyu-xu-portfolio](https://github.com/Zeyu723/zeyu-xu-portfolio)

## Tech Stack

- React 19
- Vite
- TypeScript
- Tailwind CSS
- Motion
- Lucide icons

## Local Development

```bash
npm install
npm run dev
```

The Vite dev server runs on `http://localhost:3000`.

## Build

```bash
npm run build
```

## Deploy To Vercel

1. Push this repository to GitHub.
2. In Vercel, choose **Add New Project**.
3. Import `Zeyu723/zeyu-xu-portfolio`.
4. Keep the default Vite settings:
   - Build command: `npm run build`
   - Output directory: `dist`
5. Deploy.

`vercel.json` rewrites all routes to `index.html`, so direct links like `/projects/ai-driven-android-malware-detection` work after deployment.

## Content Updates

Update portfolio content in:

```text
src/content/portfolio.ts
```

Public CV-style content belongs to Zeyu Xu.
