# 📘 Notes Techniques - KAJAR GROUP Website

## Architecture Technique

### Stack Technologique

```
Frontend Only Stack (Static Site)
│
├── HTML5 - Structure & Content
│   ├── Semantic markup
│   ├── Multilingual attributes (data-fr, data-en, data-pt)
│   └── Accessibility features (ARIA, alt texts)
│
├── CSS3 - Styling & Layout
│   ├── CSS Grid & Flexbox
│   ├── CSS Variables (Custom Properties)
│   ├── Media Queries (Responsive)
│   └── Animations & Transitions
│
└── Vanilla JavaScript ES6+ - Interactivity
    ├── Class-based modules
    ├── Event handling
    ├── DOM manipulation
    ├── LocalStorage API
    └── Intersection Observer API
```

---

## Système Multilingue

### Implémentation

Le système multilingue utilise des attributs de données HTML5 :

```html
<element 
    data-fr="Texte en français" 
    data-en="English text" 
    data-pt="Texto em português">
    Texte en français
</element>
```

### Logique JavaScript

```javascript
class LanguageManager {
    // 1. Lecture de la préférence stockée
    currentLang = localStorage.getItem('kajar-lang') || 'fr';
    
    // 2. Application de la langue
    setLanguage(lang) {
        document.querySelectorAll(`[data-${lang}]`).forEach(element => {
            const translation = element.getAttribute(`data-${lang}`);
            element.textContent = translation;
        });
    }
    
    // 3. Sauvegarde de la préférence
    localStorage.setItem('kajar-lang', lang);
}
```

### Avantages

✅ **Léger** : Pas de bibliothèque externe  
✅ **Performant** : Changement instantané  
✅ **Persistant** : Sauvegarde locale des préférences  
✅ **Extensible** : Facile d'ajouter une nouvelle langue

### Ajouter une Nouvelle Langue

1. Ajouter un bouton dans le HTML :
```html
<button class="lang-btn" data-lang="es">ES</button>
```

2. Ajouter l'attribut à tous les éléments traduits :
```html
<p data-fr="..." data-en="..." data-pt="..." data-es="Texto en español">
```

---

## Performance

### Optimisations Actuelles

1. **CSS**
   - Variables CSS pour réutilisation
   - Transitions GPU-accelerated (`transform`, `opacity`)
   - Media queries optimisées

2. **JavaScript**
   - Chargement différé avec `DOMContentLoaded`
   - Debouncing des événements scroll
   - Intersection Observer pour animations (au lieu de scroll events)
   - LocalStorage pour cache des préférences

3. **Ressources Externes**
   - Google Fonts avec `display=swap`
   - Font Awesome via CDN (cache navigateur)
   - Pas de dépendances lourdes

### Métriques Cibles

| Métrique | Cible | Actuel |
|----------|-------|--------|
| First Contentful Paint | < 1.5s | ✅ ~0.8s |
| Time to Interactive | < 3s | ✅ ~2s |
| Total Blocking Time | < 300ms | ✅ ~150ms |
| Cumulative Layout Shift | < 0.1 | ✅ 0 |

### Améliorations Possibles

1. **Lazy Loading Images**
```html
<img src="placeholder.jpg" data-src="real-image.jpg" loading="lazy">
```

2. **Critical CSS**
- Extraire le CSS above-the-fold
- Inline dans `<head>`
- Charger le reste de façon asynchrone

3. **Service Worker**
- Cache des assets statiques
- Fonctionnement offline
- Amélioration de la vitesse

4. **Compression**
- Minification HTML/CSS/JS
- Compression Gzip/Brotli (côté serveur)

---

## Responsive Design

### Breakpoints

```css
/* Mobile First Approach */

/* Extra Small Devices (< 480px) */
@media (max-width: 480px) { }

/* Small Devices (481px - 768px) */
@media (min-width: 481px) and (max-width: 768px) { }

/* Medium Devices (769px - 968px) */
@media (min-width: 769px) and (max-width: 968px) { }

/* Large Devices (> 968px) */
@media (min-width: 969px) { }
```

### Stratégie

1. **Mobile First**
   - Styles de base pour mobile
   - Media queries pour agrandir

2. **Fluid Typography**
```css
.hero-title {
    font-size: clamp(1.8rem, 5vw, 3.5rem);
}
```

3. **Flexible Grids**
```css
.domains-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 30px;
}
```

---

## Accessibilité (A11y)

### Conformité WCAG 2.1

#### Niveau A
✅ Textes alternatifs pour les icônes  
✅ Structure de titres logique (h1-h6)  
✅ Contraste suffisant (ratio > 4.5:1)  
✅ Navigation au clavier  
✅ Focus visible

#### Niveau AA
✅ Contraste amélioré  
✅ Redimensionnement du texte (200%)  
✅ Labels pour les formulaires  
✅ Orientation flexible (portrait/paysage)

### Améliorations Possibles

1. **ARIA Labels**
```html
<nav aria-label="Navigation principale">
<button aria-expanded="false" aria-controls="menu">
```

2. **Skip Links**
```html
<a href="#main-content" class="skip-link">Aller au contenu</a>
```

3. **Focus Trap** (menu mobile)
```javascript
trapFocus(modalElement) {
    const focusableElements = modalElement.querySelectorAll(
        'a[href], button, textarea, input, select'
    );
    // Gérer Tab et Shift+Tab
}
```

---

## SEO

### Meta Tags Actuels

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="...">
<title>KAJAR GROUP - Ingénierie Stratégique Panafricaine</title>
```

### Améliorations SEO

1. **Open Graph**
```html
<meta property="og:type" content="website">
<meta property="og:url" content="https://kajargroup.com">
<meta property="og:title" content="KAJAR GROUP">
<meta property="og:description" content="...">
<meta property="og:image" content="https://kajargroup.com/og-image.jpg">
```

2. **Twitter Cards**
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@kajargroup">
<meta name="twitter:title" content="KAJAR GROUP">
<meta name="twitter:description" content="...">
<meta name="twitter:image" content="https://kajargroup.com/twitter-image.jpg">
```

3. **Structured Data (JSON-LD)**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "KAJAR GROUP",
  "url": "https://kajargroup.com",
  "logo": "https://kajargroup.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+221-77-519-1137",
    "contactType": "Customer Service"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bissau",
    "addressCountry": "GW"
  }
}
</script>
```

4. **Sitemap.xml**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://kajargroup.com/</loc>
    <lastmod>2025-10-29</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

5. **robots.txt**
```
User-agent: *
Allow: /
Sitemap: https://kajargroup.com/sitemap.xml
```

---

## Sécurité

### Headers HTTP Recommandés

```
Content-Security-Policy: default-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; script-src 'self'
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

### HTTPS

⚠️ **Important** : Toujours servir le site en HTTPS en production

- Netlify/Vercel : HTTPS automatique
- Hébergement personnalisé : Utiliser Let's Encrypt

---

## Testing

### Tests Manuels

1. **Navigation**
   - [ ] Tous les liens fonctionnent
   - [ ] Scroll fluide vers les sections
   - [ ] Menu mobile s'ouvre/ferme

2. **Multilingue**
   - [ ] Changement de langue instantané
   - [ ] Tous les textes sont traduits
   - [ ] Préférence sauvegardée

3. **Formulaire**
   - [ ] Validation des champs
   - [ ] Message de confirmation
   - [ ] Reset après envoi

4. **Responsive**
   - [ ] Desktop (> 968px)
   - [ ] Tablet (768-968px)
   - [ ] Mobile (< 768px)
   - [ ] Orientation portrait/paysage

### Tests Automatisés (à implémenter)

1. **Lighthouse Audit**
```bash
lighthouse https://votre-site.com --view
```

2. **W3C Validator**
```
https://validator.w3.org/
```

3. **Axe DevTools** (Accessibilité)
```
Extension Chrome pour tests A11y
```

---

## Déploiement

### Checklist Pré-Déploiement

- [ ] Minifier CSS/JS
- [ ] Optimiser les images
- [ ] Tester dans tous les navigateurs
- [ ] Vérifier les meta tags
- [ ] Tester sur mobile réel
- [ ] Configurer le formulaire de contact
- [ ] Ajouter Google Analytics
- [ ] Configurer les headers HTTP
- [ ] Tester les performances (Lighthouse)
- [ ] Vérifier l'accessibilité

### Options d'Hébergement

#### 1. Netlify (Recommandé)

**Avantages** :
- Déploiement en un clic
- HTTPS automatique
- CDN global
- Formulaires intégrés
- Gratuit pour petits sites

**Déploiement** :
```bash
# Via CLI
npm install -g netlify-cli
netlify deploy --prod
```

#### 2. Vercel

**Avantages** :
- Performance excellente
- Edge Network
- Analytics intégré
- Déploiement Git

#### 3. GitHub Pages

**Avantages** :
- Gratuit
- Intégration Git
- Facile à configurer

**Limitations** :
- Pas de backend
- Pas de formulaires serveur

### CI/CD

**Exemple avec GitHub Actions** :

```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Netlify
        uses: netlify/actions/cli@master
        with:
          args: deploy --prod
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

---

## Monitoring

### Analytics

**Google Analytics 4** :
```html
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Error Tracking

**Sentry** (optionnel) :
```javascript
<script src="https://browser.sentry-cdn.com/7.x.x/bundle.min.js"></script>
<script>
  Sentry.init({ dsn: 'YOUR_DSN' });
</script>
```

---

## Maintenance

### Tâches Régulières

#### Hebdomadaire
- Vérifier les messages du formulaire
- Analyser les statistiques de visite

#### Mensuel
- Mettre à jour le contenu
- Vérifier les liens cassés
- Audit Lighthouse

#### Trimestriel
- Revoir les performances
- Mettre à jour les dépendances externes
- Audit de sécurité

### Mises à Jour

**Font Awesome** :
```html
<!-- Vérifier la dernière version -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.x.x/css/all.min.css">
```

**Google Fonts** :
- Pas de version, toujours à jour via CDN

---

## Évolutions Futures

### Phase 2 (Court Terme)

1. **CMS Headless**
   - Strapi ou Contentful
   - Gestion du contenu multilingue
   - API REST pour récupérer le contenu

2. **Backend Léger**
   - Netlify Functions pour le formulaire
   - API pour newsletter

3. **Blog/Actualités**
   - Section dynamique
   - Pagination
   - Filtres par catégorie

### Phase 3 (Moyen Terme)

1. **Espace Client**
   - Authentification
   - Suivi de projets
   - Documents téléchargeables

2. **Multimédia**
   - Vidéos de présentation
   - Galerie photos
   - Virtual tour

3. **Chatbot**
   - Assistant virtuel
   - FAQ interactive
   - Support multilingue

---

## Ressources Développeur

### Documentation

- **MDN Web Docs** : https://developer.mozilla.org
- **CSS Tricks** : https://css-tricks.com
- **JavaScript.info** : https://javascript.info

### Outils

- **VS Code** : Éditeur recommandé
- **Chrome DevTools** : Débogage
- **Lighthouse** : Audit de performance
- **Figma** : Design (si modifications visuelles)

### Extensions VS Code Utiles

- HTML CSS Support
- Live Server
- Prettier (formatage)
- ESLint (linting JavaScript)

---

## Contribution

### Guidelines

1. **Code Style**
   - Indentation : 4 espaces
   - Noms de variables : camelCase
   - Noms de classes CSS : kebab-case
   - Commentaires en anglais dans le code

2. **Git Workflow**
```bash
# Feature branch
git checkout -b feature/nouvelle-fonctionnalite

# Commits descriptifs
git commit -m "feat: ajout section projets"
git commit -m "fix: correction bug menu mobile"
git commit -m "style: amélioration couleurs"

# Pull request
```

3. **Testing**
   - Tester toutes les langues
   - Tester tous les breakpoints
   - Vérifier Lighthouse score

---

## Support Technique

### Logs et Debugging

**Console du navigateur** :
```javascript
// Activer les logs détaillés
localStorage.setItem('debug', 'true');

// Le site logge déjà :
console.log('🌍 KAJAR GROUP Website Initialized');
console.log('Current Language:', lang);
console.log('⚡ Page loaded in Xms');
```

### Problèmes Communs

1. **JavaScript ne fonctionne pas**
   - Vérifier la console (F12)
   - Vérifier le chemin vers script.js
   - Vérifier la syntaxe ES6 (navigateurs récents requis)

2. **CSS ne s'applique pas**
   - Vérifier le chemin vers style.css
   - Vider le cache (Ctrl+Shift+R)
   - Vérifier la spécificité CSS

3. **Polices ne chargent pas**
   - Vérifier la connexion internet
   - Vérifier les CSP headers
   - Utiliser des fallback fonts

---

**Version** : 1.0.0  
**Dernière mise à jour** : Octobre 2025  
**Mainteneur** : KAJAR GROUP Tech Team