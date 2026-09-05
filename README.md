# In Focus Media — website

Static landing page. No build step, no dependencies. Open `index.html` in a
browser and it works.

## Files

| File | What it is |
|---|---|
| `index.html` | All the page content and copy |
| `styles.css` | All styling. Colours and fonts are set at the top in `:root` |
| `main.js` | Optional polish: scroll fade-ins, sticky header, footer year |
| `favicon.svg` | Browser tab icon — placeholder |
| `robots.txt` | Search engine instructions |

## Editing locally

Double-click `index.html`, or run a local server so paths starting with `/`
resolve correctly:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000

## Deploying

Every push to `main` triggers a Vercel deploy automatically:

```bash
git add -A
git commit -m "Describe the change"
git push
```

## Still to replace

Search the project for `REPLACE` and `TODO` to find every placeholder.

- [ ] Real domain in `index.html` (canonical, Open Graph, email addresses) and `robots.txt`
- [ ] Real contact details — email, WhatsApp number, LINE ID, Instagram
- [ ] Hero backdrop — swap the CSS gradient for a showreel video or a still
- [ ] Six real projects in the Work grid, with images
- [ ] Real client names in the "Trusted by" strip, or delete that section
- [ ] The About paragraphs, rewritten in the founder's own voice
- [ ] Real numbers in the stats block (currently `00`)
- [ ] `og-image.jpg` at 1200×630 for link previews
- [ ] Real logo mark in `favicon.svg`

## Adding images

Put them in an `images/` folder and reference them as `/images/name.jpg`.
Export at roughly 1600px wide for grid thumbnails and compress them —
large photos are the usual reason a site like this feels slow.
