# Naveen Madhav — Portfolio

Dark, elegant, motion-driven personal portfolio. Static **HTML + Tailwind CSS** (compiled, no runtime framework) so it loads fast on any device.

## Stack
- HTML + Tailwind CSS (compiled to `dist/styles.css`)
- Vanilla JS (`src/main.js`) — scroll reveals, count-up, lightbox, parallax, mobile menu
- tsParticles (vanilla, via CDN) — gold sparkle field behind the hero portrait
- Fonts: Fraunces (display) · Inter (body) · JetBrains Mono (labels)

## Run locally
```bash
npm install            # one time — installs Tailwind
npm run build          # compile CSS once
npm run serve          # serve at http://localhost:8080
```
Editing styles? Run `npm run dev` to rebuild CSS on save.

## Edit content
- **Text / sections** → `index.html`
- **Projects (titles, copy, screenshots, captions, live links)** → the `projects` array near the top of `src/main.js`
- **Images** → `assets/profile/` and `assets/projects/<project>/`
- **Colors / fonts / animation timings** → `tailwind.config.js` (rebuild CSS after changes)

## Deploy
It's fully static — drag the folder to **Netlify**, **Vercel**, or **GitHub Pages**.
Make sure `dist/styles.css` is built first (`npm run build`).

### Note on the sparkles
The hero sparkle field loads tsParticles from a CDN and is non-blocking — if the CDN is
unreachable the portrait simply keeps its static glow. To make the site 100% offline/self-contained,
download `tsparticles.slim.bundle.min.js` into `assets/` and point the script tag in `index.html` at it.

Built with Tailwind. Designed & built by Naveen Sereddy.
