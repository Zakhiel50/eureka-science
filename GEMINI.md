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
- [ ] Implémentation du 2ème cours : Les Secrets des Volcans (Types, Roches, Magma).
- [ ] Système de déblocage basé sur le score (XP et LocalStorage).

---
*Dernière mise à jour : 11 avril 2026*
