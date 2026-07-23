# 🎓 CISSP Démystifié — Formation CISSP complète en français

Site web statique et interactif pour préparer et **réussir la certification CISSP du premier coup**, entièrement en français (les termes techniques consacrés restent en anglais, comme à l'examen).

Adapté et traduit des [CISSP Study Resources](https://github.com/jefferywmoore/CISSP-Study-Resources) de Jeffery W. Moore, mis à jour pour les objectifs ISC2 2024+.

## ✨ Fonctionnalités

- **🎬 Leçons vidéo interactives** : diapositives animées avec **narration vocale française** (Web Speech API), lecture automatique, questions intégrées dans chaque leçon, schémas (flux, cycles, pyramides).
- **📚 8 domaines complets du CBK** avec leurs pondérations officielles.
- **🧪 Quiz par domaine** : questions style examen (« MEILLEUR », « EN PREMIER », point de vue manager), correction immédiate et explications détaillées.
- **🎬 Scénarios de cas réels** : études de cas séquentielles inspirées d'incidents connus (ransomware, supply chain, GDPR…) pour ancrer les concepts en contexte.
- **🃏 Flashcards** recto/verso par domaine avec suivi « je connais / à revoir ».
- **🎯 Examens blancs chronométrés** : tirage pondéré selon les poids officiels, pas de retour arrière (comme le vrai CAT), analyse des résultats par domaine.
- **📖 Glossaire** interactif des termes techniques.
- **📋 Méthode** : plan d'étude 8-12 semaines et stratégie du jour J.
- **📈 Suivi de progression** local (localStorage) : leçons validées, meilleurs scores, historique d'examens blancs.

## 🚀 Utilisation

Aucune dépendance, aucun build : c'est un site 100 % statique.

```bash
# Option 1 : ouvrir directement
open index.html

# Option 2 : servir en local
python3 -m http.server 8000
# puis http://localhost:8000
```

Déployable tel quel sur **GitHub Pages** (Settings → Pages → branche → `/`).

## 🗂 Structure

```
index.html          # coquille de l'application (SPA à routage par hash)
css/style.css       # design sombre complet
js/
  app.js            # routeur + tableau de bord + vues
  player.js         # lecteur de leçons « vidéo » + synthèse vocale fr-FR
  quiz.js           # moteur de quiz
  exam.js           # examen blanc chronométré pondéré
  scenarios.js      # moteur d'études de cas séquentielles
  flashcards.js     # révision par cartes
  progress.js       # persistance de la progression (localStorage)
data/
  domain1..8.js     # contenu pédagogique des 8 domaines (leçons, quiz, flashcards)
  scenarios.js      # études de cas réalistes
  glossary.js       # glossaire
  SCHEMA.md         # schéma de données des domaines
```

## ⚖️ Mentions

CISSP® est une marque déposée d'ISC2. Ce projet est un outil d'étude communautaire indépendant, non affilié à ISC2. Contenu adapté des notes de Jeffery W. Moore avec attribution.
