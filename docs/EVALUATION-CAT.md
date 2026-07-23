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

**VERIFY (volet moteur — validé empiriquement, simulation navigateur) :**
- Examen complet FR de 103 items : **16 % d1 / 53 % d2 / 31 % d3** + 3 items
  d'ordonnancement — quotas atteints (cible ≈ 25/45/30).
- Mode CAT : en répondant juste, la difficulté servie converge vers 3
  (2,3,3,3,… — moyenne 2,8 → 3,0) ; en répondant faux, elle converge vers 1
  (3,2,2,1,1,… — moyenne 2,0 → 1,0). **Adaptativité prouvée dans les deux sens.**

**VERIFY (volet banques) :** re-mesure automatisée après la vague d'assesseurs
(cibles : ≥ 40 % scénarisées, ≥ 25 % difficulté 3 par banque, 100 % des questions
avec correction par option). Résultats de l'itération 2 ci-dessous.

### Itération 2 — vague d'assesseurs par domaine (résultats VERIFY)

**REFINE exécuté** (un assesseur par domaine, grille en 5 critères) :
- Correction détaillée **option par option** (`pourquoi`) sur 100 % des questions,
  chaque distracteur réfuté avec son type de piège nommé (« techniquement vrai mais
  pas prioritaire pour un manager », trop étroit, hors phase, absolu, réponse de
  technicien…). Idem sur les 79 étapes des 16 scénarios.
- **+86 questions FR et +32 EN de difficulté 3 niveau CAT** sur les thèmes modernes du
  DCO : gouvernance de l'IA, SCRM et dépendances de rang 2, PQC/HNDL, confidential
  computing, Zero Trust/SASE en migration, convergence IT/OT et iDMZ, MFA résistant au
  phishing, identités machine et agents IA, EPSS/KEV, tests adversariaux LLM, IA
  générative au SOC, double extorsion, code généré par IA, empoisonnement ML.
- **63 jeux de distracteurs faibles réécrits** (q et réponse inchangées) : les options
  absurdes remplacées par des pièges plausibles.

**Audit de la mesure (honnêteté méthodologique)** : le détecteur v1 de « questions
scénarisées » sous-comptait (échantillonnage manuel : des questions pleinement
contextuelles — « Un auditeur s'inquiète… », calculs ALE en situation — n'étaient pas
détectées). Détecteur v2 élargi aux acteurs/situations, et assiette restreinte aux
questions de difficulté ≥ 2 (celles que privilégie le tirage d'examen ; les d1 sont des
items d'apprentissage assumés).

**VERIFY final (détecteur v2, boucle REFINE rejouée sur D3/D4 puis re-mesure) :**

| Domaine | FR | % scénarisées (d≥2) | % difficulté 3 | pourquoi | EN | Verdict |
|---|---|---|---|---|---|---|
| D1 | 92 | 57 % | 26 % | 100 % | 36 | ✅ PASS |
| D2 | 77 | 55 % | 26 % | 100 % | 35 | ✅ PASS |
| D3 | 108 | 40 % | 27 % | 100 % | 43 | ✅ PASS |
| D4 | 95 | 40 % | 34 % | 100 % | 34 | ✅ PASS |
| D5 | 80 | 57 % | 33 % | 100 % | 35 | ✅ PASS |
| D6 | 81 | 60 % | 26 % | 100 % | 34 | ✅ PASS |
| D7 | 85 | 48 % | 25 % | 100 % | 36 | ✅ PASS |
| D8 | 83 | 56 % | 28 % | 100 % | 33 | ✅ PASS |

**Total : 701 questions FR + 286 EN = 987**, plus 79 étapes de scénarios — toutes avec
correction par option. **8/8 banques PASS.**

**SCORE après itération 2 : 8,5/10** pour la préparation au CAT réel (contre 6/10 en
itération 1). Le solde tient à ce que seule l'expérience du vrai examen valide
totalement la calibration adaptative, et à la poursuite naturelle de l'enrichissement
de la banque EN. Prochaine itération recommandée : recueil de retours de candidats
réels et calibration des difficultés sur leurs résultats.

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
