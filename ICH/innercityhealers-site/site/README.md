# Inner City Healers — Website

## Structure

```
innercityhealers/
├── index.html       Home page
├── about.html        About Us page
├── events.html        Events page
├── gallery.html      Gallery page
├── contact.html       Contact page
├── css/
│   └── style.css      All styling — shared by every page
├── js/
│   └── script.js       Mobile nav toggle + contact form
└── images/             Empty — drop your own photos in here
```

## Adding a new page

1. Copy an existing file (e.g. `about.html`) and rename it.
2. Update the `<title>` and the content inside the `<section>` tags.
3. Add a link to it in the `<div class="navlinks">` block — that block is
   duplicated at the top of every page, so add the new link to **all five**
   files (find `<a href="contact.html">Contact</a>` and add your new link
   near it in each file).
4. Add `class="active"` to the new link's `<a>` tag *only* on the new page
   itself, so the nav highlights correctly.

## Editing the design

Everything visual lives in `css/style.css`. Useful starting points:

- `:root { ... }` near the top — colour palette and you can change every
  colour from one place (`--pine`, `--gold`, `--rust`, `--moss`, etc.)
- `.hero` — the big homepage banner
- `.page-hero` — the smaller banner used on About/Events/Gallery/Contact
- `.pillar-grid` — the "What we do" 3-column section
- `.event-row` — each row in the Events list
- `.gal-grid` — the photo grid on the Gallery page

## Swapping photos

Photos are currently placeholder images pulled from Unsplash. To use your
own:

1. Put your image files in the `images/` folder (e.g. `images/hike1.jpg`).
2. Find the matching `<img src="https://images.unsplash.com/...">` tag in
   the relevant `.html` file and change it to `src="images/hike1.jpg"`.

## Previewing locally

Open the folder in VS Code and use the **Live Server** extension — right
click `index.html` → "Open with Live Server". It'll auto-refresh in your
browser every time you save a file.

## Known placeholders to fill in before going live

- Social media links in `contact.html` (`<a href="#" aria-label="Instagram">`
  etc.) — currently just `#`.
- The contact form in `contact.html` only shows a "Message sent" message —
  it isn't wired up to actually send anywhere yet (you'd need a backend or
  a service like Formspree).
