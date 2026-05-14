# EUREKA : L'Odyssée des Sciences - Charte de Collaboration

Ce fichier définit les règles, conventions et objectifs du projet pour assurer une continuité parfaite entre nos sessions de développement.

## 📌 Vision du Projet
Application éducative interactive pour enfants de 10 à 16 ans.
**Objectif** : Transformer des concepts scientifiques complexes en expériences ludiques et visuelles.

## 🛠 Stack Technique
- **Framework** : Next.js 14+ (App Router)
- **Stylage** : Tailwind CSS + Framer Motion (animations)
- **UI Components** : Shadcn/UI (Radix UI)
- **État** : Context API / LocalStorage (Progression)
- **Typage** : TypeScript (Strict)

## 🏗 Architecture & Conventions
1. **Dossier `app/`** : Routage par cours (ex: `app/cours/[id]/page.tsx`).
2. **Dossier `components/learning/`** : Composants spécifiques à l'apprentissage.
   - `LessonContent` : Rendu du cours (Image + Texte).
   - `QuizEngine` : Moteur de quiz interactif.
   - `ProgressBar` : Indicateur de progression visuel.
3. **Dossier `lib/lessons/`** : Fichiers TypeScript contenant la data des cours (Questions, Contenu, Images).
4. **Style Visuel** :
   - Thème : "Cyber-Savant" (Bleu profond, accents Néon, coins arrondis).
   - Typographie : Sans-serif moderne (ex: Inter ou Geist).

## 🎓 Règles Métier
- **Validation** : Score >= 80% requis pour débloquer l'étape suivante.
- **Accessibilité** : Textes clairs, contrastes élevés, support clavier.
- **Réutilisation** : Tout nouveau type de contenu (vidéo, schéma interactif) doit être un composant isolé.

## 📝 Roadmap Courte Terme
- [x] Initialisation de la structure du projet.
- [x] Création du moteur de quiz.
- [x] Implémentation du 1er cours : Le Cycle de l'Eau.
- [x] Implémentation du 2ème cours : Les Secrets des Volcans (Types, Roches, Magma).
- [x] Système de déblocage basé sur le score (XP et LocalStorage).

## 🧪 Direction Artistique 3D : Laboratoire Scientifique

### 🎯 Objectif
Créer un laboratoire immersif, crédible et pédagogique inspiré de vrais environnements scientifiques, tout en restant accessible et lisible pour un public 10–16 ans.

---

## 🏗 Structure du Laboratoire

### 🧱 Salle
- Forme : Circulaire (optimisée pour navigation 3D)
- Hauteur : ~3m
- Murs :
  - Couleur : Blanc / gris clair (type laboratoire réel)
  - Matériau : Lisse, légèrement réfléchissant
- Sol :
  - Type : Résine ou carrelage scientifique
  - Couleur : Gris neutre

---

### 🧫 Îlot Central / Périphérique
- Forme : Circulaire suivant les murs
- Fonction : Zone principale d’expérimentation
- Hauteur : ~1m
- Matériau :
  - Surface : Métal / composite (type inox)
  - Base : Plus sombre (contraste visuel)

---

## 📍 Système de Placement des Objets

### 🔒 Règle
- Les objets ne sont **pas placés librement**
- Utilisation de **slots prédéfinis invisibles**

### 🎯 Slots
- Disposition : Circulaire autour de l’îlot
- Nombre : 8 à 12 max
- Contraintes :
  - 1 objet par slot
  - Snap automatique
  - Orientation automatique vers le centre

### 💡 UX
- Preview (ghost) avant placement
- Highlight du slot actif
- Refus visuel si slot occupé

---

## 🔬 Objets Scientifiques

### 📦 Types d’objets
- Microscope
- Bécher
- Tube à essai
- Pipette
- Balance
- Modèles pédagogiques (cellule, molécule, etc.)

### 🎨 Règles visuelles
- Style : Semi-réaliste (pas cartoon pur)
- Couleurs :
  - Base neutre (blanc, gris, métal)
  - Accents pédagogiques (bleu, vert, orange)
- Détail :
  - Suffisant pour crédibilité
  - Pas trop complexe (performance mobile)

---

## 💡 Éclairage

- Type principal : Lumière blanche froide
- Intensité : Forte mais diffuse
- Ombres : Douces
- Ajout :
  - Légère lumière centrale
  - Accent lumineux sur objet sélectionné

---

## 🧠 Interactions

### 🖱 Actions utilisateur
- Cliquer pour sélectionner un objet
- Cliquer sur un slot pour placer
- Rotation automatique vers centre

### 🔄 Feedback
- Animation légère (scale / glow)
- Son discret (optionnel)

---

## ⚙️ Contraintes Techniques (Three.js / WebGL)

- Format modèles : `.glb` uniquement
- Taille max par modèle : < 2MB
- Polycount : Low à medium
- Textures :
  - Compressées (KTX2 recommandé)
- FPS cible : 60fps desktop / 30fps mobile

---

## 🚫 À éviter

- Placement libre sans contrainte (complexité inutile)
- Objets ultra réalistes lourds (perf)
- Couleurs flashy non scientifiques
- Interfaces surchargeant l’écran

---

## 🧩 Évolution future

- Ajout de nouveaux modules scientifiques
- Laboratoires thématiques (chimie, biologie, physique)
---
*Dernière mise à jour : 11 avril 2026*
