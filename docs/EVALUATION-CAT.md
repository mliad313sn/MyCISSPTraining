# Évaluation continue « niveau CAT réel » — CISSP en clair

Rôle : évaluateur-instructeur CISSP senior. Référentiel : ISC2 Detailed Content Outline
(avril 2024, en vigueur pour le cycle 2026), format CAT 3 h / 100-150 questions,
pondérations 16/10/13/13/13/12/13/10. Critère central : le **mindset managérial**
(gouvernance et risque avant configuration ; la bonne réponse résout le problème
business ; vie humaine > tout ; distracteurs techniquement corrects mais
contextuellement faux pour un CISO).

## Boucle d'amélioration (ASSESS → SCORE → REFINE → VERIFY)

### Itération 1 — mesure de départ (banques v1, ~613 questions FR + 254 EN)

**ASSESS (mesures automatisées sur les 8 banques) :**

| Domaine | Questions FR | % scénarisées | Difficulté 1/2/3 | Longueur moy. | EN |
|---|---|---|---|---|---|
| D1 (16 %) | 82 | 23 % | 29/39/14 | 145 c. | 32 |
| D2 (10 %) | 67 | 28 % | 24/33/10 | 119 c. | 31 |
| D3 (13 %) | 96 | 18 % | 21/58/17 | 146 c. | 39 |
| D4 (13 %) | 81 | 16 % | 20/43/18 | 125 c. | 30 |
| D5 (13 %) | 70 | 13 % | 17/37/16 | 155 c. | 31 |
| D6 (12 %) | 71 | 23 % | 18/42/11 | 130 c. | 30 |
| D7 (13 %) | 73 | 14 % | 23/41/9 | 130 c. | 32 |
| D8 (10 %) | 73 | 29 % | 20/40/13 | 172 c. | 29 |

Constats :
- Couverture du DCO : 62/62 sous-objectifs (audit précédent) — pas d'écart de périmètre.
- **Écart principal : profondeur cognitive.** Part de questions en situation (scénario
  manager) : 13-29 % selon les domaines, alors que le CAT réel est majoritairement du
  jugement contextuel multi-étapes. Difficulté 3 sous-représentée (9-18/banque).
- Présence de questions de pur vocabulaire (« Quelle est la longueur d'une adresse
  IPv6 ? ») — légitimes en phase d'apprentissage, mais à exclure de la simulation d'examen.

**SCORE : 6/10** pour la préparation au CAT réel (10/10 sur la couverture, 4/10 sur la
part de questions au niveau de difficulté de l'examen).

**REFINE appliqué :**
1. *Moteur d'examen* : le tirage pondéré intègre désormais des quotas de difficulté
   (~30 % niveau 3, ~45 % niveau 2) — les questions définitionnelles restent disponibles
   pour les quiz d'apprentissage mais ne dominent plus les examens blancs ; le mode CAT
   reste pleinement adaptatif via `difficulte`.
2. *Banques* : vague d'agents assesseurs par domaine — ajout de questions scénarisées
   difficulté 3 « style CISO » (distracteurs techniquement corrects mais hors contexte
   managérial), réécriture des questions trop faciles à distracteurs faibles, corrections
   option par option (`pourquoi`) typant chaque piège.

**VERIFY :** re-mesure automatisée après la vague (cibles : ≥ 40 % scénarisées,
≥ 25 % difficulté 3 par banque, 100 % des questions avec correction par option).
Les résultats de l'itération 2 seront consignés ci-dessous.

### Grille d'évaluation d'une question (utilisée par les assesseurs)

1. L'énoncé pose-t-il un **contexte décisionnel** (rôle, organisation, contrainte) ?
2. Le mot-opérateur (BEST/FIRST/MOST/PRIMARY) impose-t-il un **arbitrage**, pas un rappel ?
3. Les 4 options sont-elles **toutes plausibles techniquement**, dont ≥ 2 « vraies mais
   pas prioritaires pour un manager » ?
4. La résolution demande-t-elle un raisonnement **multi-étapes** (identifier la phase du
   processus, puis l'action de cette phase) ?
5. L'explication justifie-t-elle la bonne réponse **et réfute-t-elle chaque distracteur**
   en nommant le type de piège ?

Une question qui échoue aux critères 1-4 est classée « apprentissage » (difficulté 1) et
ne doit pas prétendre au niveau examen.
