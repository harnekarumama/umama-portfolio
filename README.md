# Umama's Portfolio

A responsive, one-page React portfolio with ink navy, ivory, powder blue,
copper, and champagne gold sections. Built with Vite and TanStack Router.
No backend or additional dependencies are required.

## Run

```bash
bun install
bun run dev
```

## Validate and build

```bash
bun run check:cv
bunx tsc --noEmit
bun run build
bun run preview
```

Deploy the `dist/` folder to a static host.

## Edit

- `src/components/`: header, hero, about, experience, projects, event gallery,
  ventures, credentials, personal interests, contact, and footer.
- `src/data/cv.ts`: professional content transcribed from the supplied CV.
- `src/styles.css`: palette variables, section styles, responsive layouts,
  animations, and reduced-motion support.
- `src/assets/`: optimized WebP photographs selected from `src/public/me-img/`.
- `src/routes/index.tsx`: section order.
- `Umama_Abdul-Hamid_Ahmed_CV.md`: downloadable source CV.

`bun run check:cv` verifies that every CV bullet and the complete professional
profile are preserved in the website data. Update both the CV and its website
data when professional information changes.

The LinkedIn name is displayed without inventing a profile URL. Add the exact
URL in `src/components/Contact.tsx` when available. The second reference phone
number is preserved exactly as supplied in the CV; confirm it before publishing.

Google Fonts enhances the typography when available; fallback fonts keep the
site usable offline. Email and telephone links use native device applications.
