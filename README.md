# AnchorSpec Official Site

This repository contains the public website for AnchorSpec. It is an introduction and documentation entry point, not the canonical specification repository.

Current site version: v0.1.1.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The static export is generated in `out/`.

## Deployment

This site is configured for GitHub Pages.

The workflow in `.github/workflows/deploy.yml` installs dependencies, builds the static site, uploads `out/`, and deploys it to GitHub Pages.

The production URL is controlled by `NEXT_PUBLIC_SITE_URL` during the GitHub Actions build. The default local fallback is:

```text
https://owner.github.io/AnchorSpec-web
```

When moving to a custom domain such as `https://anchorspec.com`, update the GitHub Actions environment value or set `NEXT_PUBLIC_SITE_URL` before running `npm run build`.

## Search Console

To register the site with Google Search Console:

1. Deploy the site to GitHub Pages.
2. Open Google Search Console and add a URL-prefix property for the deployed GitHub Pages URL.
3. Verify ownership using the HTML file method or another supported method.
4. Submit the sitemap URL:

```text
https://owner.github.io/AnchorSpec-web/sitemap.xml
```

If a custom domain is used later, add the custom domain property and submit:

```text
https://anchorspec.com/sitemap.xml
```

Do not add `noindex`; the site is intended to be discoverable.

## Canonical Specification URL

The GitHub navigation link currently uses the placeholder:

```text
https://github.com/OWNER/AnchorSpec
```

Update `GITHUB_URL` in `components/site-header.tsx` when the canonical AnchorSpec specification repository URL is known.
