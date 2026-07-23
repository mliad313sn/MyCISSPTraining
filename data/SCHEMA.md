# Schéma des fichiers de données `data/domainN.js`

Chaque fichier de domaine enregistre son contenu dans l'objet global `CISSP_DATA` :

```js
window.CISSP_DATA = window.CISSP_DATA || { domains: {} };
window.CISSP_DATA.domains[1] = {
  id: 1,
  code: "D1",
  titre: "Sécurité et gestion des risques",      // titre français
  titreEn: "Security and Risk Management",        // titre officiel anglais
  poids: "16%",                                   // poids à l'examen
  couleur: "#e63946",                             // couleur du domaine
  icone: "🛡️",
  description: "2–3 phrases en français présentant le domaine.",
  objectifs: ["Objectif 1.1 …", "Objectif 1.2 …"],
  lecons: [
    {
      id: "d1-l1",
      titre: "Titre de la leçon",
      duree: 8,                                   // durée estimée en minutes
      slides: [
        {
          type: "intro" | "standard" | "schema" | "question" | "resume",
          titre: "Titre de la diapositive",
          points: ["Point clé 1", "Point clé 2"], // affichés progressivement
          narration: "Texte de narration en français, 2–5 phrases, lu à voix haute par la synthèse vocale. Style pédagogique, oral, fluide.",
          // Optionnel pour type "schema" :
          schema: { type: "flow" | "cycle" | "pyramid" | "grid", items: ["Étape 1", "Étape 2"] },
          // Obligatoire pour type "question" (contrôle de connaissance interactif) :
          q: "Question ?", choix: ["A", "B", "C", "D"], reponse: 0, explication: "Pourquoi.",
          // Optionnel :
          astuce: "💡 Conseil examen : …"
        }
      ]
    }
  ],
  quiz: [
    {
      q: "Question de type examen, orientée jugement de manager.",
      choix: ["A", "B", "C", "D"],
      reponse: 2,                 // index 0-3 de la bonne réponse
      explication: "Explication pédagogique de la bonne réponse ET pourquoi les autres sont fausses.",
      difficulte: 2               // 1 facile, 2 moyen, 3 difficile
    }
  ],
  flashcards: [
    { recto: "Terme ou question (termes techniques en anglais)", verso: "Définition/réponse en français" }
  ]
};
```

## Règles de contenu

- Tout le contenu pédagogique est en **français** ; les termes techniques consacrés restent en **anglais** (ex. *Due Care*, *SLE/ALE*, *Zero Trust*, *bcrypt*).
- Les questions de quiz imitent le style CISSP : « QUEL est le MEILLEUR… », « Que devriez-vous faire EN PREMIER… », point de vue managérial.
- Chaque leçon contient au moins une diapositive `question` (interactivité) et se termine par une diapositive `resume`.
- La narration doit pouvoir être lue à voix haute naturellement (pas de listes brutes, pas de symboles).
