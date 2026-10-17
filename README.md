# Poultry: poultry farm directory (front-end demo)

React 19 + Vite + Tailwind CSS 4 + React Router. No backend; all data is local and clearly labelled as sample data.

    npm install
    npm run dev       # development
    npm run build     # production build into dist/
    npm run lint

## Where things live
- `src/data/farms.js`, `categories.js`, `products.js`, `articles.js`, `faqs.js`: all content
- `src/data/site.js`: contact details and navigation. **Contact details are unconfirmed placeholders; replace before launch.**
- `src/data/images.js`: the only place photos are referenced. Replace with your own farm photography.
- `src/components/ui/`: shared buttons, badges, form fields, accordion, pagination
- `src/index.css`: design tokens (colours, fonts) in the Tailwind `@theme` block

## Deployment
`public/_redirects` (Netlify/Cloudflare) and `vercel.json` rewrite all paths to `index.html` so direct URLs and refreshes work.

## Before treating any listing as real
All farms are fictional samples with `verified: false`. Forms validate in the browser and send nothing.
