# CineVeo AI · Product Requirement Document

Next.js implementation of the CineVeo AI PRD. The single-page experience delivers the full vision, feature set, security architecture, and roadmap for the privacy-first mobile camera platform.

## Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` and explore each section: vision, feature matrix, personas, experience principles, security stack, non-functional requirements, roadmap, and compliance notes.

## Production Build

```bash
npm run build
npm run start
```

## Stack & Design Notes

- Next.js App Router with TypeScript and Tailwind CSS v4
- Inter + Roboto Flex font pairing via `next/font`
- Radial-gradient dark theme aligned with PRD art direction (#0B0B0D base, teal accent #23C7B6)
- Reusable section and card components to keep the document maintainable

## Deployment

Use Vercel for production releases. The project is configured for zero-config deployment and matches the `agentic-41f87028` production target.
