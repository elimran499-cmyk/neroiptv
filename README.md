# NeroIPTV

Landing page for NeroIPTV — a Dutch IPTV subscription service. Built with React 19, Vite, TypeScript and Tailwind CSS v4.

## Run locally

**Prerequisites:** Node.js 20+

```bash
npm install
npm run dev
```

The dev server runs on port 3000 (or the next free port).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build |
| `npm run lint` | Type-check with `tsc --noEmit` |

## Structure

- `src/data/iptvData.ts` — plans, prices, features, FAQ, WhatsApp number. Most content edits happen here.
- `src/components/` — one component per page section.
- `src/index.css` — brand palette (`--color-brand`, `--color-navy`, `--color-cream`) as Tailwind v4 theme tokens.

Orders are placed through WhatsApp: each plan's "Nu kopen" button opens a `wa.me` link pre-filled with the pack, screen count and price. The number lives in `WHATSAPP_NUMBER` in `src/data/iptvData.ts`.
