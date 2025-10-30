# 🚀 Guide de Démarrage Rapide - KAJAR GROUP

## Bienvenue ! 

Ce guide vous aidera à comprendre et utiliser votre nouveau site web en quelques minutes.

---

## ✨ Ce Qui Est Inclus

Votre site web professionnel KAJAR GROUP comprend :

✅ **7 sections complètes** présentant votre entreprise  
✅ **3 langues** : Français, Anglais, Portugais  
✅ **Design responsive** : fonctionne sur ordinateur, tablette et mobile  
✅ **Formulaire de contact** interactif  
✅ **Navigation fluide** entre les sections  
✅ **Contenu authentique** extrait de vos documents officiels

---

## 🎯 Comment Utiliser le Site

### 1️⃣ Ouvrir le Site

**Option A : Visualisation locale**
- Double-cliquez sur le fichier `index.html`
- Le site s'ouvrira dans votre navigateur par défaut

**Option B : Navigateur web**
- Faites un clic droit sur `index.html`
- Sélectionnez "Ouvrir avec" → votre navigateur préféré

### 2️⃣ Changer de Langue

Dans le coin supérieur droit du site :
- Cliquez sur **FR** pour le français
- Cliquez sur **EN** pour l'anglais
- Cliquez sur **PT** pour le portugais

💡 **Le site se souvient de votre choix** lors de votre prochaine visite !

### 3️⃣ Navigation

**Sur ordinateur** :
- Utilisez le menu en haut : Accueil, À Propos, Domaines, etc.
- Cliquez pour accéder directement à chaque section

**Sur mobile** :
- Cliquez sur l'icône ☰ (hamburger) en haut à droite
- Le menu s'affichera en plein écran
- Cliquez sur une section pour y accéder

### 4️⃣ Formulaire de Contact

Le formulaire en bas de page permet aux visiteurs de vous contacter :
- Remplissez les champs (Nom, Email, Téléphone, Message)
- Cliquez sur "Envoyer le Message"
- Une confirmation s'affichera

⚠️ **Note** : Pour recevoir réellement les messages, il faut configurer un service email (voir section "Configuration Avancée" ci-dessous)

---

## 📝 Modifier le Contenu

### Changer un Texte

1. Ouvrez le fichier `index.html` avec un éditeur de texte (Notepad, TextEdit, VS Code, etc.)
2. Recherchez le texte que vous souhaitez modifier
3. Modifiez le texte dans les 3 langues (attributs `data-fr`, `data-en`, `data-pt`)

**Exemple** :
```html
<h3 data-fr="Notre Vision" data-en="Our Vision" data-pt="A Nossa Visão">Notre Vision</h3>
```

Pour changer "Notre Vision" :
- `data-fr="Nouveau texte en français"`
- `data-en="New text in English"`
- `data-pt="Novo texto em português"`

### Changer les Couleurs

1. Ouvrez `css/style.css`
2. Trouvez la section `:root` au début du fichier
3. Modifiez les couleurs hexadécimales

**Exemple** :
```css
--primary-color: #1a365d;  /* Bleu principal */
--accent-gold: #d4af37;    /* Or */
```

### Modifier les Coordonnées

Dans `index.html`, recherchez "Contact Section" et modifiez :
- L'adresse
- Les numéros de téléphone
- L'email

---

## 🌐 Publier Votre Site en Ligne

### Option 1 : Netlify (Recommandé - Gratuit)

1. Créez un compte sur [netlify.com](https://netlify.com)
2. Glissez-déposez votre dossier complet sur Netlify
3. Votre site est en ligne en quelques secondes !
4. Netlify vous donne une URL gratuite (ex: kajar-group.netlify.app)

### Option 2 : GitHub Pages (Gratuit)

1. Créez un compte sur [github.com](https://github.com)
2. Créez un nouveau repository
3. Uploadez tous vos fichiers
4. Activez GitHub Pages dans les paramètres
5. Votre site sera accessible via github.io

### Option 3 : Votre Hébergeur Web

Si vous avez déjà un hébergement web :
1. Connectez-vous via FTP
2. Uploadez tous les fichiers du site
3. Le site sera accessible via votre nom de domaine

---

## 📧 Configurer le Formulaire de Contact

### Option Simple : Formspree (Gratuit)

1. Allez sur [formspree.io](https://formspree.io)
2. Créez un compte gratuit
3. Créez un nouveau formulaire
4. Copiez votre Form ID
5. Dans `js/script.js`, recherchez la fonction `handleSubmit()`
6. Décommentez le code fetch et remplacez `YOUR_FORM_ID` par votre ID

### Option Alternative : EmailJS

1. Créez un compte sur [emailjs.com](https://emailjs.com)
2. Configurez un service email
3. Intégrez le SDK EmailJS dans votre site
4. Configurez l'envoi dans `js/script.js`

---

## 🎨 Personnalisation Avancée

### Ajouter une Nouvelle Section

Dans `index.html`, ajoutez :

```html
<section class="section-light" id="ma-section">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title" 
                data-fr="Mon Titre" 
                data-en="My Title" 
                data-pt="Meu Título">Mon Titre</h2>
            <div class="section-divider"></div>
        </div>
        
        <!-- Votre contenu ici -->
        
    </div>
</section>
```

### Ajouter un Lien dans le Menu

Dans `index.html`, dans la section `<ul class="nav-menu">`, ajoutez :

```html
<li><a href="#ma-section" 
       data-fr="Ma Section" 
       data-en="My Section" 
       data-pt="Minha Seção">Ma Section</a></li>
```

### Changer la Police de Caractères

Dans `index.html`, changez le lien Google Fonts :

```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

Puis dans `css/style.css`, modifiez :

```css
--font-primary: 'Roboto', sans-serif;
```

---

## 📱 Test sur Mobile

### Tester sur votre téléphone (même réseau WiFi)

1. Sur votre ordinateur, trouvez votre adresse IP locale
   - Windows : `ipconfig` dans le terminal
   - Mac : `ifconfig` dans le terminal
2. Lancez un serveur local simple
3. Sur votre téléphone, ouvrez le navigateur
4. Allez à `http://VOTRE-IP:PORT`

---

## 🔍 Vérification du Site

### Liste de Contrôle

✅ Le site s'ouvre correctement dans le navigateur  
✅ Les 3 langues fonctionnent (FR, EN, PT)  
✅ Le menu mobile s'ouvre sur petit écran  
✅ Les liens de navigation fonctionnent  
✅ Le défilement est fluide  
✅ Le formulaire se remplit correctement  
✅ Toutes les sections sont visibles  
✅ Les coordonnées sont correctes

### Navigateurs Testés

✅ Chrome / Edge (recommandé)  
✅ Firefox  
✅ Safari  
✅ Opera

---

## 🆘 Problèmes Courants

### Le style ne s'affiche pas

**Solution** : Vérifiez que les dossiers `css/` et `js/` sont au même niveau que `index.html`

### Les icônes ne s'affichent pas

**Solution** : Vérifiez votre connexion internet (Font Awesome est chargé depuis un CDN)

### Le formulaire ne fonctionne pas

**Solution** : C'est normal ! Il faut configurer un service comme Formspree (voir section ci-dessus)

### Le changement de langue ne marche pas

**Solution** : 
1. Ouvrez la console du navigateur (F12)
2. Vérifiez s'il y a des erreurs JavaScript
3. Vérifiez que le fichier `js/script.js` est bien chargé

---

## 📚 Ressources Utiles

### Documentation
- [README.md](README.md) - Documentation technique complète
- [MDN Web Docs](https://developer.mozilla.org) - Références HTML/CSS/JS

### Outils Recommandés
- **VS Code** - Éditeur de code gratuit et puissant
- **Chrome DevTools** - Pour inspecter et déboguer
- **TinyPNG** - Pour optimiser les images
- **Google Fonts** - Pour changer les polices

### Services Utiles
- **Netlify** - Hébergement gratuit
- **Formspree** - Formulaires de contact
- **Google Analytics** - Statistiques de visite

---

## 💡 Conseils Pro

### Pour Améliorer le Site

1. **Ajoutez des images** : Photos de projets, équipe, locaux
2. **Créez une page Projets** : Portfolio de vos réalisations
3. **Ajoutez un blog** : Actualités et articles
4. **Optimisez pour Google** : Ajoutez des meta descriptions
5. **Ajoutez des témoignages** : Avis de clients satisfaits

### SEO (Référencement)

Dans `index.html`, dans `<head>`, ajoutez :

```html
<meta name="description" content="KAJAR GROUP - Groupe panafricain d'ingénierie stratégique">
<meta name="keywords" content="ingénierie, afrique, développement, construction">
<meta property="og:title" content="KAJAR GROUP">
<meta property="og:description" content="Ingénierie stratégique panafricaine">
<meta property="og:image" content="URL_DE_VOTRE_IMAGE">
```

---

## 📞 Support

Pour toute question ou assistance :

**Email** : groupkajar@gmail.com  
**Téléphone** : +221 77 519 1137 / +245 957 603 951

---

## 🎉 Félicitations !

Votre site web professionnel est maintenant prêt à l'emploi. N'hésitez pas à le personnaliser et à le faire évoluer selon vos besoins.

**Bonne chance avec KAJAR GROUP !** 🚀

---

*Dernière mise à jour : Octobre 2025*