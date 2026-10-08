# Import.io Design System

Accessible, themeable React components for Import.io data products. The design language is extracted from the Import.io Studio concept and organized as reusable foundations—not application screens.

## Install

```sh
npm install @importio/design-system
```

```tsx
import { Button, Card, CardContent } from '@importio/design-system';
import '@importio/design-system/styles.css';

export function Example() {
  return <Card><CardContent><Button variant="primary">Run task</Button></CardContent></Card>;
}
```

React 19 and React DOM 19 are peer dependencies. Components are typed, tree-shakeable, and composed from Radix UI primitives where interaction semantics matter.

## Design language

- Inter for product UI, Geist Mono for metadata and code
- Quiet neutral surfaces with a violet-blue action color
- 7px controls, 12px panels, compact 4px-based spacing
- Semantic status colors and first-class light/dark themes
- Visible focus, coarse-pointer sizing, and reduced-motion support

Set `data-theme="light"` or `data-theme="dark"` on an ancestor. If omitted, the styles follow the operating-system preference.

## Development

```sh
npm install
npm run dev
npm run check
npm run build:storybook
```

## Releasing

This package is configured for public npm publishing with provenance. Releases should be created by the GitHub Actions workflow after updating the version and adding release notes. Before the first release, confirm the npm organization owns the `@importio` scope and set the repository URL in `package.json` if the final GitHub location differs.

## Documentation site

Storybook is deployed to GitHub Pages on each push to `main`. The static site includes downloadable PowerPoint templates and brand resources from `public/downloads`; those files remain outside the npm package.

## License

MIT © Import.io
