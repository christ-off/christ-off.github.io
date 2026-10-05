# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Jekyll blog (GitHub Pages, https://christ-off.github.io), posts mostly in French. Ruby 3.2.3 (`.ruby-version`). No tests, no CI workflow; Dependabot updates bundler monthly.

## Commands

- Install: `etc/bundle_install.sh` (installs gems into `vendor/bundle`)
- Serve locally with livereload and future-dated posts: `etc/local_develop.sh` (`bundle exec jekyll serve --livereload --future`)
- Build: `bundle exec jekyll build`

## Structure

- `_posts/` — `YYYY-MM-DD-slug.md` (one is `.html`). Front matter: `layout: post`, `title`, `excerpt` (used as meta description), `category` (single), `tags` (list), `image` (hero, required by `_layouts/post.html`, stored under `assets/posts/<topic>/`).
- `_layouts/` (`home`, `page`, `post`) and `_includes/` — Pico CSS markup; `post.html` renders category/tag links to `categories.html` / `tags.html`, which group posts client-side by anchor (`#slug`).
- `css/main.scss` is the Sass entry point (`sass_dir: css`); it pulls in `_solarized-dark.scss` and `css/custom/*`. Edit `css/custom/` for site styling. Icons are inline SVG symbols in `_includes/icons.html` (`<svg class="icon"><use href="#i-name"/></svg>`); no icon font.
- `css/pico.min.css` is vendored Pico CSS 2.1.1 (linked separately in `head.html`; no CDN anywhere).
- `javascript/` — vendored clipboard.js, and `codeselect.js` (code-block copy).
- `_config.yml` — `permalink: :title/`; `etc` and `vendor` are excluded from the build. Changes to `_config.yml` need a server restart.
- `feed.xml`, `sitemap.xml` and SEO meta come from `jekyll-feed`, `jekyll-sitemap`, `jekyll-seo-tag` (`_config.yml` `plugins`); `robots.txt`, `ads.txt` are hand-maintained at the root.
