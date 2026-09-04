# Crazy Case

A small text transformer built with React, TypeScript, Vite, and Tailwind CSS.
Enter text, toggle Crazy Case Mode to invert its casing, or select Randomise to
randomise the casing of the input. Transformations affect ASCII letters (A–Z and
a–z); other characters are preserved.

## Getting started

Install Node.js compatible with the project's Vite version and pnpm, then run:

```bash
pnpm install
pnpm dev
```

Open the local URL printed by Vite (normally <http://localhost:5173>).

## Development checks

```bash
pnpm lint
pnpm format:check
pnpm build
```

Use `pnpm format` to apply formatting. The build runs TypeScript checks before
generating the production site. There is currently no automated test suite.

## Production build

```bash
pnpm build
pnpm preview
```

The production files are written to `dist/`. Deploy that directory to a static
hosting service. `pnpm preview` serves the build locally for inspection; it is
not a production server. If hosting under a subpath, configure Vite's `base`
option in `vite.config.ts` before building.

## Project structure

- `src/components/CrazyCase.tsx`: input, mode toggle, and transformed output.
- `src/lib/case.ts`: inversion and randomisation functions.
- `src/index.css`: Tailwind setup and theme colours.
- `src/App.tsx`: page layout.
- `vite.config.ts`: build plugins and import alias.
