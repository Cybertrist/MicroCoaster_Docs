<div align="center">

# MicroCoaster — Documentation

Page d'attente de la documentation produit MicroCoaster : compte à rebours, bascule de langue et rien de superflu.

[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=flat-square&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.18-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com/)
[![Licence](https://img.shields.io/badge/Licence-MIT-1F6FEB?style=flat-square)](LICENSE)

</div>

---

## À quoi ça sert

La documentation officielle n'est pas encore publiée. Cette page occupe le domaine en attendant : compte à rebours vers la mise en ligne, message d'explication, et affichage en français ou en anglais selon le visiteur.

Un serveur Express qui sert du statique, rien de plus. Pas de générateur de site, pas d'étape de build.

## Contenu

| Fichier | Rôle |
|:--|:--|
| `server.js` | Serveur Express, sert `public/` et répond sur `/` |
| `public/index.html` | La page |
| `public/css/style.css` | Styles |
| `public/js/countdown.js` | Compte à rebours jusqu'à la date de lancement |
| `public/js/i18n.js` | Traduction FR/EN par attributs `data-i18n` |

## Lancer en local

```bash
npm install
npm start
```

Le serveur écoute sur `http://localhost:3000`, ou sur `PORT` si la variable est définie.

## Quand la vraie doc arrivera

L'idée est de remplacer `public/` par la sortie du générateur de documentation, en gardant `server.js` tel quel. La page d'attente devient alors la page 404, ou disparaît.

---

<sub>Projet MicroCoaster · voir aussi <a href="https://github.com/Cybertrist/MicroCoaster_Forum">MicroCoaster_Forum</a> et <a href="https://github.com/Cybertrist/Microcoaster">Microcoaster</a> (bot Discord de support).</sub>
