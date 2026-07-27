[README.md](https://github.com/user-attachments/files/30433553/README.md)
# Supra Studio — Site Next.js

Page d'accueil du site Supra Studio, prête pour un déploiement Vercel.

## Lancer en local

```bash
npm install
npm run dev
```
Ouvrir http://localhost:3000

## Déployer sur Vercel

1. Pousser ce dossier sur un repo GitHub/GitLab.
2. Sur vercel.com : "Add New Project" → importer le repo → Deploy (aucune configuration requise, Next.js est détecté automatiquement).
3. Pour utiliser votre nom de domaine Ionos : dans Vercel, Project Settings → Domains → ajouter `suprastudio.fr`, puis suivre les instructions pour pointer les DNS depuis votre espace client Ionos (ajout d'enregistrements A/CNAME).

## À compléter avant mise en ligne

- **`components/Contact.tsx`** : remplacer `https://formspree.io/f/REPLACE_ME` par votre vrai endpoint de formulaire (créez un compte gratuit sur formspree.io, ou utilisez EmailJS).
- **Lien Calendly** : remplacer `https://calendly.com/suprastudio` (présent dans `Services.tsx` et `Contact.tsx`) par votre vrai lien Calendly.
- **Projets** : les 5 visuels affichés dans `components/Projects.tsx` sont vos rendus/photos fournis jusqu'ici, à renommer/recatégoriser avec les vrais noms et types de projets une fois les 5 projets définitifs choisis.
- **Multilingue (FR/EN/IT)** : le sélecteur de langue dans le header est pour l'instant un stub visuel (il ne change pas encore le contenu). La structure du contenu est prête à être dupliquée par langue quand vous le souhaitez.

## Structure

```
app/
  layout.tsx      → metadata SEO, JSON-LD, police
  page.tsx        → assemble toutes les sections
  globals.css     → design tokens (couleurs, typographie, styles)
components/
  Header.tsx      → nav + logo + switch langue
  Hero.tsx        → bandeau plein écran
  Intro.tsx       → citation + paragraphe de présentation
  Stats.tsx       → les 3 chiffres clés
  Projects.tsx    → grille de projets
  Studio.tsx      → présentation du studio (aperçu)
  SplitTwo.tsx    → artisans + valeurs
  Services.tsx    → méthode en 4 étapes
  Contact.tsx     → formulaire + coordonnées
  Footer.tsx
  ScrollReveal.tsx → animations au scroll
public/assets/
  fonts/          → PP Radio Grotesk (woff2)
  images/         → visuels de projets (compressés pour le web)
  icons/          → logo SVG
```
