# Hossein Seyed Bagheri — Portfolio (EN)

Static portfolio, single self-contained `index.html` (inline CSS + JS, no framework, no build step).
This repo is the **EN** deployment: <https://hossein.my.id/>. The other language lives in its own repo.

```
index.html            page (all CSS/JS inline)
404.html              served by the host for every unknown path
images/               project screenshots + og-cover.jpg
favicon*, apple-*, web-app-manifest-*   purple seal icons
functions/api/visits.js   optional Cloudflare Pages counter (needs KV binding VISITS)
```

## 404
Cloudflare Pages and GitHub Pages serve a root `404.html` for any unknown URL automatically.
Netlify does too. On other hosts, point the "not found" rule at `/404.html`.

## Run locally
`python -m http.server 8000`, then open http://localhost:8000 (a non-existent path shows the 404 page
only on hosts that support it; the plain Python server shows its own error).

## Editing
Copy lives in the HTML. Colors are the tokens at the top of the `<style>` block (`--accent` is the purple).
Project links and the archive list are plain `<a>` tags.

Contact: hhh13246578@gmail.com · https://github.com/Hosseinb1111
