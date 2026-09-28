# Portfolio

Muneeb Rehman's portfolio, live at https://muneebrehman.co.uk (GitHub Pages, custom domain set by `public/CNAME`; DNS in Route 53).

Built with React, TypeScript and Vite. No UI framework: styling is plain CSS in `src/styles.css`, with light and dark themes that follow the system setting.

## Scripts

```bash
npm install
npm run dev       # dev server at http://localhost:5173/
npm run build     # type-check and build to dist/
npm run preview   # serve the production build locally
npm run deploy    # build and publish dist/ to the gh-pages branch
```

## Editing content

All text lives in `src/data.ts`: experience, projects, skills and links. Project images go in `src/assets/` (WebP, about 1200px wide) and are imported at the top of that file. The CV is `public/CV.pdf`, generated from `cv/cv.html`: edit the HTML, then run `npm run cv` (needs Chrome or Edge installed; set `CHROME_PATH` if it isn't found).
