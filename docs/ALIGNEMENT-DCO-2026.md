# Alignement fin sur le référentiel en vigueur 2026

**Référentiel cible (vérifié)** : le CISSP Detailed Content Outline effectif au 15 avril 2024
est celui qui régit les examens 2026 — les refreshes ISC2 annoncés pour 2026 concernent le
CCSP (1er août 2026) et le CC, pas le CISSP. Pondérations : 16/10/13/13/13/12/13/10.

## Méthode

Évaluation bas niveau, **bullet par bullet du DCO** (309 items détaillés, pas seulement les
62 sous-objectifs), par 8 assesseurs indépendants. Pour chaque bullet : enseigné (slide
citée) ? testé (nombre de questions) ? niveau cognitif dominant (rappel / compréhension /
jugement en situation) ? Double note par domaine : fidélité au DCO et « niveau attendu d'un
CISSP en exercice » (arbitrage coût/risque/mission, inter-domaines, posture de conseil).
Matrices détaillées conservées en artefacts de session (matrice-d1…d8.md).

## Baseline (avant correction) — juillet 2026

| Domaine | Bullets | ✅ | 🟡 | ❌ | DCO /10 | Niveau CISSP /10 |
|---|---|---|---|---|---|---|
| D1 Security & Risk Mgmt (16 %) | 37 | 28 | 9 | 0 | 8,5 | 8,5 |
| D2 Asset Security (10 %) | 25 | 22 | 3 | 0 | 9,0 | 8,5 |
| D3 Architecture & Engineering (13 %) | 67 | 41 | 25 | 1 | 8,5 | 8,0 |
| D4 Communication & Network (13 %) | 26 | 18 | 8 | 0 | 8,5 | 8,0 |
| D5 IAM (13 %) | 37 | 33 | 4 | 0 | 9,0 | 9,0 |
| D6 Assessment & Testing (12 %) | 28 | 22 | 5 | 1 | 8,5 | 9,0 |
| D7 Security Operations (13 %) | 64 | 50 | 14 | 0 | 8,5 | 8,0 |
| D8 Software Dev Security (10 %) | 25 | 16 | 9 | 0 | 8,5 | 8,0 |
| **Total** | **309** | **230** | **77** | **2** | **8,6** | **8,4** |

Aucun sous-objectif absent ; les 2 ❌ sont des bullets fins : *restricted/work area security*
(SCIF, 3.9) et *compliance checks* (6.2). Motif dominant des 🟡 : la boucle
leçon↔question n'est pas fermée (concept enseigné sans question d'ancrage, ou testé sans
support de cours).

## Cycle de correction

Un correcteur par domaine, mandat : pour chaque bullet 🟡/❌ de sa matrice, (a) ajouter
l'enseignement manquant (slide dédiée avant le résumé de la leçon pertinente), (b) fermer
la boucle par au moins une question de niveau application avec correction par option, en
maintenant l'équilibre des positions de réponse. Journaux de correction par domaine
(correction-d1…d8.md). Re-évaluation après la vague ; itération jusqu'à zéro ❌ et
résorption des 🟡.

Les résultats de la re-évaluation sont consignés ci-dessous à mesure des itérations.
