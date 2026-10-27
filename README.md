# Sushi's scrapbook

A personal portfolio styled like a paper scrapbook: taped polaroids, pressed flowers, torn notes and a postcard contact form. It also has a reading shelf and a K-drama watch diary.

## Pages

| Route          | What's there                                                               |
| -------------- | -------------------------------------------------------------------------- |
| `/`            | Hero, project notes, about, experience, awards and a postcard contact form |
| `/library`     | Book shelf with search, status filters and a detail dialog per book        |
| `/watch-diary` | Drama tickets with the same search, filters and dialog                     |

## Tech stack

- **[Next.js 16](https://nextjs.org)**: App Router, Server Components by default, with Cache Components and partial prefetching turned on in `next.config.ts`. All pages are prerendered as static content.
- **[React 19](https://react.dev)**: client components only where there is interaction (tabs, shelf filters, dialog, contact form, scroll reveals).
- **[TypeScript](https://www.typescriptlang.org)**: strict, no `any`.
- **[Tailwind CSS v4](https://tailwindcss.com)**: compiled through `@tailwindcss/turbopack`. Uses the default spacing, type and breakpoint scales; the theme in `src/app/globals.css` only adds the palette, fonts, paper shadows and a few texture utilities (`paper-*`, `clip-torn-*`).
- **[clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge)**: combined in `cn()` (`src/lib/utils.ts`) so classes passed to a component override its defaults cleanly.
- **[Zod](https://zod.dev)**: validates the postcard form before opening a `mailto:` draft.
- **[next/font](https://nextjs.org/docs/app/api-reference/components/font)**: Caveat (handwriting), Fraunces (headings) and DM Sans (body), self-hosted at build time.
- **[next/image](https://nextjs.org/docs/app/api-reference/components/image)**: photos and the pressed-lavender sprig are statically imported from `src/assets`, so sizes are known up front.
- **Native APIs**: `IntersectionObserver` for scroll reveals and `<dialog>` for the shelf entries. No animation or modal libraries.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command               | What it does                                  |
| --------------------- | --------------------------------------------- |
| `npm run dev`         | Start the dev server                          |
| `npm run build`       | Production build                              |
| `npm run start`       | Serve the production build                    |
| `npm run lint`        | ESLint (Next.js core-web-vitals + TypeScript) |
| `npm run check-types` | TypeScript type check                         |
| `npm run format`      | Check formatting with Prettier                |
| `npm run format:fix`  | Format everything with Prettier               |

Prettier sorts Tailwind classes (`prettier-plugin-tailwindcss`, including inside `cn()`) and groups imports (`@ianvs/prettier-plugin-sort-imports`).

## Project structure

```
src/
├── app/
│   ├── components/        Home page sections (hero, work, about, journey, awards, contact)
│   ├── library/           /library route
│   ├── watch-diary/       /watch-diary route and its ticket decoration
│   ├── globals.css        Tailwind import, theme tokens, textures, base styles
│   ├── layout.tsx         Fonts, metadata, nav and footer shell
│   └── page.tsx           Home page
├── assets/                Images imported with next/image
├── components/
│   ├── layout/            Nav, footer, signature
│   ├── shelf/             Book jackets, drama tickets, entry dialog, filters
│   └── ui/                Shared pieces: tabs, paper tape, section wrapper, headings
├── constants/             Site content: profile, projects, journey, awards, books, dramas, nav
└── lib/utils.ts           cn() helper
public/                    CV and favicon
```

## Updating content

Everything on the site is plain data in `src/constants/`:

- `profile.ts`: name, bio, email, CV link, socials, skills
- `projects.ts`: project notes (`paper` picks the note's paper style)
- `journey.ts`: experience and education
- `achievements.ts`: awards
- `collections.ts`: books and dramas for the shelves
- `navigation.ts`: nav links
