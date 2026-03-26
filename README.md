# KAJAR GROUP - Site Web Corporate Multilingue

## 🌍 À Propos du Projet

Site web corporate professionnel pour **KAJAR GROUP**, un groupe panafricain d'ingénierie stratégique et de développement basé en Guinée-Bissau. Le site présente l'entreprise, ses services, ses valeurs et son engagement envers le développement économique africain.

### Caractéristiques Principales

✅ **Site multilingue complet** (Français, Anglais, Portugais)  
✅ **Design corporate moderne et élégant**  
✅ **Navigation fluide et intuitive**  
✅ **Responsive sur tous les appareils**  
✅ **Animations et transitions professionnelles**  
✅ **Optimisé pour la performance**  
✅ **Contenu authentique extrait des documents officiels**

---

## 📋 Sections du Site

### 1. **Accueil (Hero Section)**
- Message d'accueil inspirant
- Présentation de la vision de l'entreprise
- Call-to-action vers la page contact

### 2. **À Propos**
- Présentation de KAJAR GROUP
- Mission et Vision
- 4 Valeurs fondamentales :
  - Excellence
  - Intégrité
  - Engagement
  - Synergie Collective

### 3. **Domaines d'Intervention**
7 secteurs d'activité présentés :
1. Promotion Immobilière & Développement Urbain
2. Énergie & Infrastructures
3. Ingénierie & Construction
4. Logistique & Solutions Maritimes
5. Industrie & Transformation Locale
6. Commerce International & Import-Export
7. Conseil Stratégique & Ingénierie de Projets

### 4. **Notre Approche**
Méthodologie en 4 piliers :
- Analyse Stratégique
- Structuration
- Partenariats Solides
- Exécution Maîtrisée

### 5. **Engagement RSE & Impact Social**
- Emploi Local
- Projets Durables
- Éthique & Responsabilité
- Transformation Positive

### 6. **Direction Exécutive**
Présentation des dirigeants :
- **Mathieu KADIONA** - Président Directeur Général
- **Rosalie GUEYE** - Directrice Exécutive (Juridique, Finance & Stratégie)

### 7. **Contact**
- Informations de contact complètes
- Formulaire de contact interactif
- Localisation à Bissau, Guinée-Bissau

---

## 🚀 Fonctionnalités Techniques

### Système Multilingue
- **Langues disponibles** : Français (FR), Anglais (EN), Portugais (PT)
- **Changement instantané** via sélecteur de langue dans le header
- **Sauvegarde de préférence** dans le localStorage du navigateur
- **Traduction complète** de tout le contenu (textes, boutons, formulaires)

### Design Responsive
- **Desktop** : Layout optimisé pour grands écrans
- **Tablet** : Adaptation automatique pour tablettes
- **Mobile** : Menu hamburger et interface tactile optimisée
- **Points de rupture** : 968px, 768px, 480px

### Performance
- **Chargement optimisé** des ressources
- **Animations fluides** avec transitions CSS
- **Lazy loading** pour les sections
- **Code minifiable** pour la production

### Accessibilité
- **Navigation au clavier** complète
- **Focus visible** sur tous les éléments interactifs
- **Contraste** respectant les normes WCAG
- **Structure sémantique** HTML5

---

## 📁 Structure du Projet

```
kajar-group-website/
│
├── index.html              # Page principale avec tout le contenu
├── README.md              # Documentation du projet
│
├── css/
│   └── style.css          # Styles complets et responsive
│
└── js/
    └── script.js          # Scripts JavaScript (multilingue, animations, etc.)
```

---

## 🎨 Palette de Couleurs

### Couleurs Principales
- **Bleu Corporate** : `#1a365d` (Primary)
- **Bleu Secondaire** : `#2c5282` (Secondary)
- **Or Accent** : `#d4af37` (Gold)
- **Bleu Clair** : `#4a90e2` (Accent Light)

### Couleurs de Fond
- **Fond Sombre** : `#0f1419` (Dark Background)
- **Fond Clair** : `#f7fafc` (Light Background)
- **Blanc** : `#ffffff`

### Couleurs de Texte
- **Texte Foncé** : `#1a202c`
- **Texte Clair** : `#718096`
- **Bordures** : `#e2e8f0`

---

## 🔧 Technologies Utilisées

### Frontend
- **HTML5** - Structure sémantique
- **CSS3** - Design moderne avec Flexbox et Grid
- **JavaScript ES6+** - Interactivité et fonctionnalités

### Typographie
- **Inter** (via Google Fonts) - Police principale pour le texte
- **Playfair Display** (via Google Fonts) - Police pour les titres

### Icônes
- **Font Awesome 6.4.0** (via CDN) - Icônes vectorielles

### APIs et Services
- Aucune dépendance externe côté serveur
- Site 100% statique, hébergeable partout

---

## 💻 Utilisation

### Visualisation Locale

1. **Télécharger les fichiers** du projet
2. **Ouvrir `index.html`** dans un navigateur web moderne
3. Le site est entièrement fonctionnel sans serveur

### Hébergement

Le site peut être hébergé sur :
- **Netlify** (recommandé)
- **Vercel**
- **GitHub Pages**
- **Tout serveur web statique**

### Configuration du Formulaire de Contact

Le formulaire de contact est actuellement configuré pour afficher une alerte. Pour le rendre fonctionnel :

1. Intégrer un service comme **Formspree**, **EmailJS** ou **Netlify Forms**
2. Modifier la fonction `handleSubmit()` dans `js/script.js`
3. Exemple avec Formspree :

```javascript
fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
})
```

---

## 🌐 Fonctionnalités JavaScript

### Classes Principales

1. **LanguageManager**
   - Gestion du système multilingue
   - Sauvegarde des préférences utilisateur
   - Mise à jour dynamique du contenu

2. **MobileMenu**
   - Menu responsive pour mobile
   - Animation hamburger
   - Fermeture automatique

3. **NavbarScroll**
   - Effet de scroll sur la navigation
   - Changement de style au défilement

4. **SmoothScroll**
   - Défilement fluide vers les sections
   - Compensation de la hauteur du header

5. **ScrollAnimations**
   - Animations au scroll avec Intersection Observer
   - Effet d'apparition progressive

6. **ContactForm**
   - Validation du formulaire
   - Gestion de l'envoi
   - Messages multilingues

7. **ActiveNavigation**
   - Surlignage de la section active
   - Mise à jour dynamique de la navigation

---

## 📱 Responsive Design

### Desktop (> 968px)
- Layout 3 colonnes pour les grilles
- Navigation horizontale complète
- Espacement généreux

### Tablet (768px - 968px)
- Layout 2 colonnes adaptatives
- Navigation compacte
- Marges réduites

### Mobile (< 768px)
- Layout 1 colonne
- Menu hamburger
- Touch-friendly
- Typographie adaptée

---

## 🔐 Informations de Contact

### KAJAR GROUP, SARL

**Adresse** :  
Bissau Praça  
République de Guinée-Bissau

**Téléphone** :  
+221 77 519 1137  
+245 957 603 951

**Email** :  
contact@kajargroup.com

---

## ✅ Fonctionnalités Actuellement Implémentées

- ✅ Structure HTML complète et sémantique
- ✅ Design CSS moderne et professionnel
- ✅ Système multilingue (FR/EN/PT) entièrement fonctionnel
- ✅ Navigation responsive avec menu mobile
- ✅ Animations et transitions fluides
- ✅ Formulaire de contact interactif
- ✅ Section Valeurs avec 4 cartes
- ✅ Section Domaines avec 7 secteurs d'activité
- ✅ Section Approche avec 4 piliers
- ✅ Section RSE avec 4 engagements
- ✅ Section Équipe avec 2 dirigeants
- ✅ Footer complet avec liens
- ✅ Smooth scrolling
- ✅ Active navigation highlight
- ✅ Intersection Observer pour animations

---

## 🎯 Prochaines Étapes Recommandées

### Améliorations Possibles

1. **Backend pour le formulaire de contact**
   - Intégrer EmailJS ou Formspree
   - Ajouter une base de données pour les messages

2. **Contenu additionnel**
   - Page Projets avec portfolio
   - Page Actualités / Blog
   - Galerie photos

3. **SEO et Performance**
   - Ajouter des meta tags Open Graph
   - Optimiser les images
   - Implémenter un sitemap.xml

4. **Fonctionnalités avancées**
   - Système de newsletter
   - Chat en direct
   - Téléchargement de brochures

5. **Analytics**
   - Google Analytics
   - Suivi des conversions
   - Heatmaps utilisateur

---

## 📊 Points d'Entrée Fonctionnels

| URI | Description | Langue |
|-----|-------------|--------|
| `/` ou `index.html` | Page d'accueil complète | FR/EN/PT |
| `#accueil` | Section Hero | FR/EN/PT |
| `#apropos` | Section À Propos + Valeurs | FR/EN/PT |
| `#domaines` | Domaines d'intervention | FR/EN/PT |
| `#approche` | Notre Approche | FR/EN/PT |
| `#equipe` | Direction Exécutive | FR/EN/PT |
| `#contact` | Formulaire de contact | FR/EN/PT |

---

## 🛠️ Modèles de Données

### Aucune base de données actuellement

Le site est entièrement statique. Pour ajouter une gestion de contenu dynamique, envisager :

- **CMS Headless** (Strapi, Contentful)
- **Base de données** (pour les messages du formulaire)
- **API REST** pour la gestion du contenu multilingue

---

## 📄 Licence et Propriété

© 2025 KAJAR GROUP. Tous droits réservés.

Site web développé pour présenter les activités et l'expertise du groupe KAJAR GROUP dans le développement économique africain.

---

## 👨‍💻 Support et Maintenance

Pour toute question technique ou demande de modification :

1. **Modifications de contenu** : Éditer `index.html`
2. **Modifications de style** : Éditer `css/style.css`
3. **Modifications de fonctionnalités** : Éditer `js/script.js`

### Guide de Modification Rapide

**Changer une traduction** :
```html
<p data-fr="Texte en français" data-en="English text" data-pt="Texto em português">
```

**Ajouter une nouvelle section** :
```html
<section class="section-light" id="nouvelle-section">
    <div class="container">
        <!-- Votre contenu ici -->
    </div>
</section>
```

**Modifier les couleurs** :
Éditer les variables CSS dans `:root` du fichier `css/style.css`

---

## 🌟 Remerciements

Site développé avec soin pour représenter fidèlement l'excellence et le professionnalisme de KAJAR GROUP dans sa mission de transformation économique africaine.

**Vision** : Transformer les potentiels africains en opportunités réelles et mesurables.

---

**Dernière mise à jour** : Octobre 2025  
**Version** : 1.0.0  
**Statut** : ✅ Production Ready