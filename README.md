# Sushi's scrapbook

My portfolio, styled like a paper scrapbook, with a small reading library.

**Stack:** Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · Zod

## Run it

```bash
npm install
npm run dev
```

Also: `build`, `lint`, `check-types`, `format:fix`.

## Structure

```
src/
├── app/          Routes (home, /library) and their components
├── assets/       Images and book covers
├── components/   Shared layout, book and UI pieces
├── constants/    Site content
└── lib/          cn() helper
```

Edit content in `src/constants/`.
