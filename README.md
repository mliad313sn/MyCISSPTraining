# 🎓 CISSP en clair — Formation CISSP complète en français

Site web statique et interactif pour préparer et **réussir la certification CISSP du premier coup**, entièrement en français (les termes techniques consacrés restent en anglais, comme à l'examen).

Adapté et traduit des [CISSP Study Resources](https://github.com/jefferywmoore/CISSP-Study-Resources) de Jeffery W. Moore, mis à jour pour les objectifs ISC2 2024+.

## ✨ Fonctionnalités

- **🗺️ Parcours guidé en 12 escales** : le fil conducteur du site — un voyage simple qui emmène le lecteur du niveau débutant au raisonnement d'expert CISSP (décollage mindset → 8 domaines → consolidation → examens blancs → jour J), avec activités cochées automatiquement selon la progression réelle.
- **🧭 Mindset** : apprendre à *penser et parler* comme un CISSP — 10 principes de raisonnement d'examen, drills « éliminez d'abord les 2 pièges puis tranchez », et reformulations « répondez comme un security manager, pas comme un technicien » (CEO, board, auditeur, presse…).
- **🎬 Leçons vidéo interactives** : diapositives animées avec **narration vocale française** (Web Speech API), lecture automatique, questions intégrées dans chaque leçon, schémas (flux, cycles, pyramides).
- **📚 8 domaines complets du CBK** avec leurs pondérations officielles.
- **🧪 Banque de 987 questions** (701 en français + 286 en anglais pour la simulation CAT) : style examen (« MEILLEUR », « EN PREMIER », point de vue manager), correction immédiate avec **explication détaillée option par option** (chaque distracteur réfuté et son type de piège nommé), difficultés calibrées — qualité auditée contre le format CAT réel (voir `docs/EVALUATION-CAT.md`).
- **🎬 Scénarios de cas réels** : études de cas séquentielles inspirées d'incidents connus (ransomware, supply chain, GDPR…) pour ancrer les concepts en contexte.
- **🃏 Flashcards** recto/verso par domaine avec **répétition espacée** (système Leitner : intervalles 1/3/7/14/30 jours, file « à réviser aujourd'hui » sur le tableau de bord).
- **🧠 Mémo** : mnémoniques éprouvés de la communauté CISSP (OSI, ALE/SLE, STRIDE, classes de feu, CPSOW…) + exercices interactifs « remettre dans l'ordre » (incident response, RMF, order of volatility, tests DRP, Kerberos…).
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
  flashcards.js     # révision par cartes (répétition espacée Leitner)
  memo.js           # mnémoniques + exercices d'ordonnancement
  parcours.js       # parcours guidé en 12 escales
  mindset.js        # drills d'élimination + reformulations manager
  progress.js       # persistance de la progression (localStorage)
data/
  domain1..8.js     # contenu pédagogique des 8 domaines (leçons, quiz, flashcards)
  scenarios.js      # études de cas réalistes
  memo.js           # mnémoniques et séquences à connaître
  mindset.js        # principes, drills et reformulations
  glossary.js       # glossaire
  SCHEMA.md         # schéma de données des domaines
```

## ⚖️ Mentions

CISSP® est une marque déposée d'ISC2. Ce projet est un outil d'étude communautaire indépendant, non affilié à ISC2. Contenu adapté des notes de Jeffery W. Moore avec attribution.
