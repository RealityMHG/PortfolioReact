# Rafael Rêgo — Portfolio

Personal portfolio built with React 18, TypeScript and Vite. An editorial design with locally hosted fonts, a typography-led introduction and native scrolling. No new runtime dependencies.

## Development

```sh
npm ci
npm run dev
```

## Validation and production

```sh
npm run lint
npm run build  # TypeScript project checks followed by the Vite production build
npm run preview
```

Deploy `dist/` to a static host. For a subdirectory deployment, set Vite's `base` (or build with `npm run build -- --base=/your-path/`). Update the canonical and social URLs in `index.html` if the public domain changes.

## Content

- `src/data/portfolio.ts`: contact links and technology groups.
- `src/components/CaseStudy.tsx`: IGFEJ case study, grounded in the supplied CV and read-only source review.
- `src/components/CaseArchitecture.tsx`: compact architecture flow; technical explanations and the subtype example are available in the case study’s native disclosure.
- `src/components/CaseStudy.css`: case study and illustration layout.
- `src/components/Experience.tsx`: professional roles, dates and responsibilities.
- `docs/case-study-evidence.md`: source evidence, attribution boundaries and the client-perspective review.
- `src/components/About.tsx`: profile, education and languages.
- `public/CV/RafaelRegoCV.pdf`: supplied English CV; `RafaelRegoCV-PT.pdf`: supplied Portuguese CV.
- `src/index.css`: design tokens, layout, responsive styles, print styles and reduced-motion support.
- `public/fonts/`: locally hosted Manrope and Instrument Serif with their SIL Open Font Licenses.

Professional content follows the supplied CVs. The portfolio prioritizes Axians work and technical contributions; earlier personal projects and the outdated portrait are not displayed. Master's attendance is explicitly marked as not completed. AI appears as an interest, and deployment tools are described as exposure.

## Interaction and accessibility

The mobile navigation is a keyboard-accessible disclosure: Escape closes it and restores focus; selection moves focus to the destination. Other interactions use native links and native details disclosures. The case study leads with the problem, team contribution and a compact architecture flow; deeper technical detail is optional. Contact uses email links and a copy action with accessible success/error feedback, without an external form service. Reveal effects are progressive enhancements: content remains visible without an observer, and motion respects `prefers-reduced-motion`.

`Raposa` and `idstudio` informed the typography, whitespace and section composition. The IGFEJ project was also reviewed read-only for the case study. This project has no runtime or build dependencies on any reference project.

## Cursor and motion

A mouse-only cursor pairs a precise dot with a trailing `rr` monogram, inspired by the read-only references. While visible, it cycles between sans, italic and outline lettering every 600 ms, including during scrolling. Hover feedback follows the element beneath the pointer as the page scrolls. It uses no additional dependencies and stops requesting movement frames when settled; the variant timer stops when hidden. The cursor remains available with reduced-motion preferences, while touch and keyboard navigation retain the native cursor. Other page animations still respect `prefers-reduced-motion`.
