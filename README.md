# Kid Flash Cards

Static, dependency-free flash card website for GitHub Pages.

## Run locally

Open `index.html` in a browser.

## Publish on GitHub Pages

1. Create a GitHub repository.
2. Upload `index.html`, `styles.css`, `app.js`, `decks.js`, and `README.md`.
3. Go to **Settings > Pages**.
4. Set source to **Deploy from a branch**.
5. Select `main` and `/root`, then save.

## Add or change cards

Edit `decks.js`.

Each card uses this format:

```js
{ name: "Dog", file: "Golden Retriever standing Tucker.jpg" }
```

The `file` value is the Wikimedia Commons filename. The website converts it to a hosted image URL using `Special:FilePath`.

## Image licensing note

Wikimedia Commons hosts freely licensed or public-domain media, but individual files can require attribution or have specific license conditions. Review the file page before broad publishing or commercial use.
