# http-files.org

Static documentation site for the .http file format. Built with Astro + Starlight + Markdoc.

## Architecture

The site lives in `site/`. Content is authored in Markdoc (`.mdoc` files) using a schema-defined tag vocabulary. Comparison data lives in YAML.

### Key directories

- `site/src/content/docs/` — all page content in `.mdoc` format
- `site/src/data/clients.yaml` — registry of all .http implementations (single source of truth)
- `site/src/data/features.yaml` — feature support booleans per client (drives comparison tables)
- `site/src/data/syntax-examples.yaml` — per-client code examples
- `site/src/components/` — Astro components that render the custom Markdoc tags
- `site/markdoc.config.mjs` — Markdoc schema defining available tags and their attributes
- `site/src/styles/custom.css` — neon-on-black theme, OLED dark mode

### Custom Markdoc tags (the DSL)

These are the only non-Markdown elements contributors use:

- `{% support-table category="core" /%}` — renders comparison matrix from features.yaml
- `{% supported clients="jetbrains,httpyac" /%}` — inline support badges
- `{% syntax-example feature="response-handler" /%}` — per-client syntax from syntax-examples.yaml
- `{% client-card id="jetbrains" /%}` — client info card from clients.yaml
- `{% client-grid %}...{% /client-grid %}` — grid layout for cards
- `{% interop level="universal" %}...{% /interop %}` — interoperability callout (universal/widespread/limited/unique)
- `{% spec-ref section="4" /%}` — cross-reference link to a spec section
- `{% http title="Example" %}...{% /http %}` — HTTP code block with title

### Known limitation: Markdoc and `{%` in code blocks

Markdoc's tokenizer parses `{%` and `{{` even inside fenced code blocks. Code containing JetBrains/httpyac script syntax (`> {% %}`, `{{ }}`) **must** go in `syntax-examples.yaml` and render via `{% syntax-example %}`. Do not put these characters in fenced code blocks in `.mdoc` files — the build will fail or render backslashes.

## Commands

```
cd site
npm run dev       # local dev server with hot reload
npm run build     # generate dist/ (static output)
npm run preview   # serve dist/ locally
```

## Deployment

GitHub Pages via Actions. Every push to `main` triggers `.github/workflows/deploy.yml` which builds and deploys to https://http-files.org.

## Adding a new client

1. Add entry to `site/src/data/clients.yaml`
2. Add support values in `site/src/data/features.yaml` for each category
3. Add syntax examples to `site/src/data/syntax-examples.yaml` if the client has unique syntax
4. Add a `{% client-card id="new-id" /%}` to the relevant clients page

## Adding a new feature to comparison tables

1. Add the feature to the relevant category in `site/src/data/features.yaml`
2. The comparison table on the corresponding page updates automatically

## Repo governance (TODO when collaborators join)

- Add branch protection on `main` (require PRs, no direct push)
- Add issue templates ("Add a client", "Correct a feature entry")
- Consider moving repo to a neutral org

## Tone

This site is a neutral community resource, not marketing. Treat all implementations equally. Focus on compatibility and interoperability, not competition. Think jwt.io — authoritative spec reference that benefits the whole ecosystem.
