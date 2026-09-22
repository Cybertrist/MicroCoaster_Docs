<div align="center">

<p>
  <img src="docs/langues/fr-on.png" alt="Français, page affichée" width="150" />
  <a href="README.en.md"><img src="docs/langues/en-off.png" alt="Read this page in English" width="150" /></a>
</p>

<img src="docs/banniere.png" alt="MicroCoaster Docs, page d'attente de la documentation produit" width="100%">

</div>

**Page d'attente de la documentation produit MicroCoaster : compte à rebours, bascule de langue, et rien de superflu.**

<img src="docs/sections/s01.png" alt="01 À quoi ça sert" width="100%">

La documentation officielle n'est pas encore publiée. Cette page occupe le domaine en attendant : compte à rebours vers la mise en ligne, message d'explication, et affichage en français ou en anglais selon le visiteur.

Un serveur Express qui sert du statique, rien de plus. Pas de générateur de site, pas d'étape de build. Ce choix n'est pas de la paresse : une page d'attente qui demande une chaîne de compilation est une page d'attente qu'on n'ose plus toucher.

<img src="docs/sections/s02.png" alt="02 Contenu" width="100%">

<img src="docs/schemas/contenu.png" alt="server.js : serveur Express, il sert le dossier public et répond sur la racine. public/index.html : la page elle-même. public/css/style.css : les styles. public/js/countdown.js : le compte à rebours jusqu'à la date de lancement. public/js/i18n.js : la traduction français-anglais, par attributs data-i18n." width="100%">

<img src="docs/sections/s03.png" alt="03 Lancer en local" width="100%">

```bash
npm install
npm start
```

Le serveur écoute sur `http://localhost:3000`, ou sur `PORT` si la variable est définie.

<img src="docs/sections/s04.png" alt="04 Quand la vraie doc arrivera" width="100%">

L'idée est de remplacer `public/` par la sortie du générateur de documentation, en gardant `server.js` tel quel. La page d'attente devient alors la page 404, ou disparaît.

Écrit en Node.js 18 et Express 4.18. Licence MIT.

---

<sub>MicroCoaster · Auteur : Cybertrist</sub>
