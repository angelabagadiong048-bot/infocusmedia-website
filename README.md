# In Focus Production Co., Ltd. — website

One-page site. Static HTML/CSS, no build step, no dependencies. Every nav link
is an anchor to a section further down the page.

Live domain: **infocusmedia.site** (registered at Namecheap, served by Vercel).

## Files

| File | What it is |
|---|---|
| `index.html` | The whole page — all content and copy |
| `brand.css` | The design system. Colours, type scale and components. Do not edit per-page things in here |
| `site.css` | Page-specific styles that build on the system |
| `main.js` | Footer year and the brief form. The page works without it |
| `assets/logo.svg` | Full lockup, traced to vector from the supplied raster |
| `assets/logo-mark.svg` | Camera mark only — used as the nav/footer logo via CSS mask |
| `favicon.svg` | White mark on an ink square |

## Editing locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000 — use a server rather than opening the file
directly, so the leading-slash paths resolve.

## Deploying

Every push to `main` redeploys on Vercel automatically.

```bash
git add -A
git commit -m "Describe the change"
git push
```

## Wiring up the form

The brief form is built and validated but has nowhere to send yet. Until an
endpoint is set it tells the visitor to email instead — it never silently
fails. Two options:

1. **Formspree** (no code): create a form at formspree.io, then set the
   endpoint on the `<form id="brief-form">` tag in `index.html`:
   `action="https://formspree.io/f/YOUR_ID"`. Free tier covers 50/month.
2. **Vercel function**: add `api/brief.js` and set `action="/api/brief"`.
   More control, needs an email-sending service such as Resend.

`main.js` already POSTs `FormData` and handles both success and failure states.

## Design system notes

Hard-edge editorial. **No rounded corners, no gradients, no drop shadows.**
Structure comes from 1px hairlines and 1.5px ink rules. Emphasis comes from
weight, the purple accent, and the lime marker highlight.

- Purple `#7D39EB` — section numbers, links, labels
- Lime `#C6FF33` — one thing per screen. If two limes compete, one is wrong
- The lime marker `.hl` highlights a phrase, never a whole sentence

## Copy

Source: `in-focus-website-copy-v1.md`.

The hero is a variation on **Option A**: "Every business has a story behind
it." / "We bring that out beautifully." Options B and C are in the copy sheet;
swapping means editing the `<h1>` and the quote beneath it, nothing else.
Don't mix directions.

## Still to do

- [ ] Point the domain at Vercel (Vercel → Settings → Domains, then Namecheap Advanced DNS)
- [ ] Confirm the studio address — Vichit is normally in Mueang Phuket district, not Thalang
- [ ] Confirm which number is WhatsApp and which is the office line
- [ ] Give the form an endpoint (above)
- [ ] Restore the Work section once there are real projects (it is commented out in `index.html`; put the nav and footer links back and renumber About to 06)
- [ ] Add `assets/og-image.jpg` at 1200×630 and uncomment the `og:image` tag
- [ ] Supply the original vector logo if one exists, to replace the traced version
- [ ] Decide whether In Focus keeps the purple/lime accents or takes its own
