const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 25023;

// Configuration des fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Route principale
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`🎢 Serveur MicroCoaster Docs démarré sur http://localhost:${PORT}`);
  console.log(`📅 Lancement prévu le 1er janvier 2026`);
});
