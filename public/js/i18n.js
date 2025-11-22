// Traductions
const translations = {
  en: {
    title: 'MicroCoaster Docs',
    status: 'Under Construction',
    description: 'We are working hard to bring you the official documentation.<br>The docs will be available very soon!',
    launching: 'Launching in',
    days: 'Days',
    hours: 'Hours',
    minutes: 'Minutes',
    seconds: 'Seconds',
    'stay-connected': 'Stay connected to not miss the launch!',
    website: 'Website',
    app: 'Application',
    forum: 'Forum',
    launched: 'The Docs are now available!',
    welcome: 'Welcome to the MicroCoaster Documentation!'
  },
  fr: {
    title: 'MicroCoaster Docs',
    status: 'En Construction',
    description: 'Nous travaillons dur pour vous offrir la documentation officielle.<br>Les docs seront disponibles très bientôt !',
    launching: 'Lancement dans',
    days: 'Jours',
    hours: 'Heures',
    minutes: 'Minutes',
    seconds: 'Secondes',
    'stay-connected': 'Restez connectés pour ne rien manquer du lancement !',
    website: 'Site Web',
    app: 'Application',
    forum: 'Forum',
    launched: 'La Documentation est maintenant disponible !',
    welcome: 'Bienvenue sur la documentation officielle de MicroCoaster !'
  }
};

// Langue par défaut : Anglais
let currentLang = 'en';

// Fonction pour détecter la langue du navigateur
function detectBrowserLanguage() {
  const browserLang = navigator.language || navigator.userLanguage;
  // Priorité à l'anglais, sauf si le navigateur est explicitement en français
  if (browserLang.startsWith('fr')) {
    return 'fr';
  }
  return 'en'; // Par défaut anglais
}

// Fonction pour changer la langue
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('preferredLang', lang);
  
  // Mise à jour de l'attribut lang du HTML
  document.documentElement.lang = lang;
  
  // Mise à jour de tous les éléments avec data-i18n
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });
  
  // Mise à jour du meta description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.content = lang === 'fr' 
      ? 'Documentation MicroCoaster - Bientôt disponible'
      : 'MicroCoaster Docs - Coming Soon';
  }
  
  // Mise à jour du titre de la page
  document.title = lang === 'fr'
    ? '🎢 MicroCoaster Docs - En Construction'
    : '🎢 MicroCoaster Docs - Under Construction';
}

// Export pour countdown.js
window.getCurrentLang = () => currentLang;
window.getTranslation = (key) => translations[currentLang][key] || key;

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
  // Vérifier si une langue est sauvegardée, sinon détecter
  const savedLang = localStorage.getItem('preferredLang');
  const initialLang = savedLang || detectBrowserLanguage();
  
  setLanguage(initialLang);
});
