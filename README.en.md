<div align="center">

<p>
  <a href="README.md"><img src="docs/langues/fr-off.png" alt="Lire cette page en français" width="150" /></a>
  <img src="docs/langues/en-on.png" alt="English, page shown" width="150" />
</p>

<img src="docs/en/banniere.png" alt="MicroCoaster Docs, the holding page for the product documentation" width="100%">

</div>

**The holding page for the MicroCoaster product documentation: a countdown, a language switch, and nothing surplus.**

<img src="docs/en/sections/s01.png" alt="01 What it is for" width="100%">

The official documentation is not published yet. This page occupies the domain in the meantime: a countdown to going live, a message explaining what is coming, and a display in French or English depending on the visitor.

An Express server serving static files, nothing more. No site generator, no build step. That choice is not laziness: a holding page that needs a toolchain is a holding page nobody dares touch again.

<img src="docs/en/sections/s02.png" alt="02 Contents" width="100%">

<img src="docs/en/schemas/contenu.png" alt="server.js: an Express server, it serves the public folder and answers on the root. public/index.html: the page itself. public/css/style.css: the styles. public/js/countdown.js: the countdown to the launch date. public/js/i18n.js: the French to English translation, through data-i18n attributes." width="100%">

<img src="docs/en/sections/s03.png" alt="03 Running it locally" width="100%">

```bash
npm install
npm start
```

The server listens on `http://localhost:3000`, or on `PORT` if the variable is set.

<img src="docs/en/sections/s04.png" alt="04 When the real docs land" width="100%">

The idea is to replace `public/` with the output of the documentation generator, keeping `server.js` exactly as it is. The holding page then becomes the 404 page, or disappears.

Written in Node.js 18 and Express 4.18. MIT licence.

---

<sub>MicroCoaster · Author: Cybertrist</sub>
