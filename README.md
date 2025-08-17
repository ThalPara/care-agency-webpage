# S‑Rock Care — Vite + React + Tailwind

A minimal project scaffold using the component we built in ChatGPT Canvas.

## Local dev
```bash
npm i
npm run dev
```

Open the URL printed by Vite.

## Build
```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages
Update **vite.config.js** `base` to your repo path, e.g.
```js
export default defineConfig({
  plugins: [react()],
  base: '/srock-care/'
})
```
Then either:
- Use GitHub Actions (already included in `.github/workflows/deploy.yml`), set Settings → Pages → Build from Actions.
- Or publish with:
```bash
npm run deploy
```

## Notes
- Images are CSP‑safe (`data:` URIs). If you add remote images, update your CSP or self‑host them under `/public` and reference `/images/...`.


## GitHub Pages base
Vite base is set to `/care-agency-webpage/` for this repo name.


## Troubleshooting
If you see:
```
[plugin:vite:react-babel] Cannot redefine property: File
```
this build switches to **@vitejs/plugin-react-swc** to avoid Babel in dev.
Steps:
```bash
npm run clean
npm i
npm run dev
```
