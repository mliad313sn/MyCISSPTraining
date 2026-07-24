/* Domaine 8 — données générées ; schéma : data/SCHEMA.md */
window.CISSP_DATA = window.CISSP_DATA || { domains: {} };
window.CISSP_DATA.domains[8] = {
  "id": 8,
  "code": "D8",
  "titre": "Sécurité du développement logiciel",
  "titreEn": "Software Development Security",
  "poids": "10%",
  "couleur": "#43aa8b",
  "icone": "💻",
  "description": "Le Domaine 8 couvre la sécurité tout au long du cycle de vie du développement logiciel. Vous y apprendrez à intégrer la sécurité dans le SDLC et les méthodologies modernes comme DevSecOps, à sécuriser les environnements et chaînes d'approvisionnement logicielles, à reconnaître les vulnérabilités applicatives majeures, et à évaluer la sécurité des logiciels développés en interne ou acquis.",
  "objectifs": [
    "8.1 Comprendre et intégrer la sécurité dans le Software Development Life Cycle (SDLC) : méthodologies (Agile, Waterfall, DevOps, DevSecOps), modèles de maturité (CMM, SAMM), opérations et maintenance, gestion du changement, Integrated Product Team",
    "8.2 Identifier et appliquer les contrôles de sécurité dans les écosystèmes de développement : langages, bibliothèques, IDE, runtime, CI/CD, gestion de configuration, code repositories, tests de sécurité applicative (SAST, DAST, IAST, SCA)",
    "8.3 Évaluer l'efficacité de la sécurité logicielle : audit et journalisation des changements, analyse et atténuation des risques",
    "8.4 Évaluer l'impact sécurité des logiciels acquis : COTS, open source, tiers, services managés, services cloud (SaaS, IaaS, PaaS)",
    "8.5 Définir et appliquer des lignes directrices et standards de codage sécurisé : vulnérabilités au niveau du code source, sécurité des APIs, pratiques de codage sécurisé, software-defined security"
  ],
  "lecons": [
    {
      "id": "d8-l1",
      "titre": "Le SDLC et les méthodologies de développement",
      "duree": 12,
      "slides": [
        {
          "type": "intro",
          "titre": "Pourquoi la sécurité du développement logiciel ?",
          "points": [
            "Le logiciel est l'une des plus grandes surfaces d'attaque de l'organisation",
            "Le logiciel maison apporte des risques uniques : erreurs de logique, backdoors",
            "La sécurité doit être intégrée dès la conception, pas ajoutée à la fin"
          ],
          "narration": "Bienvenue dans le Domaine 8, consacré à la sécurité du développement logiciel. Les applications représentent aujourd'hui l'une des plus grandes menaces pour la sécurité d'une organisation. Quand une entreprise développe ses propres logiciels, elle s'expose à des risques uniques, comme des faiblesses de logique ou des portes dérobées insérées pendant le développement. Le message central de ce domaine est simple : la sécurité doit faire partie de la conception dès le départ, et non être rajoutée après coup.",
          "astuce": "💡 Conseil examen : à l'examen CISSP, la bonne réponse est presque toujours d'intégrer la sécurité le plus TÔT possible dans le cycle de vie."
        },
        {
          "type": "standard",
          "titre": "Les phases du SDLC",
          "points": [
            "Requirements gathering : pourquoi, quoi, pour qui",
            "Design : comment le logiciel répondra aux exigences",
            "Development : codage et intégration",
            "Testing : vérification et validation",
            "Operations and Maintenance : déploiement, configuration, correctifs, supervision"
          ],
          "narration": "Le Software Development Life Cycle, ou SDLC, est le cadre qui structure la vie d'un logiciel, de sa planification jusqu'à son retrait. Tout commence par la collecte des exigences : pourquoi créer ce logiciel, que fera-t-il, et pour qui. Vient ensuite la conception, puis le développement proprement dit, suivi des tests qui vérifient et valident que le logiciel répond aux exigences. Enfin, la phase d'exploitation et de maintenance assure que le logiciel reste correctement configuré, corrigé et supervisé jusqu'à son décommissionnement.",
          "astuce": "💡 Conseil examen : retenez que les exigences de sécurité se définissent dès la phase des requirements, et que les design reviews ont lieu après les spécifications mais avant l'écriture du code."
        },
        {
          "type": "schema",
          "titre": "Le cycle de vie du logiciel",
          "points": [
            "Chaque phase alimente la suivante",
            "La sécurité est présente à chaque étape",
            "Le cycle se termine par le décommissionnement"
          ],
          "narration": "Visualisons le SDLC comme un enchaînement de phases. Les exigences nourrissent la conception, la conception guide le développement, le développement est validé par les tests, et le tout aboutit à l'exploitation et la maintenance. Gardez en tête que la sécurité n'est pas une phase séparée : elle traverse chacune de ces étapes, du premier atelier d'exigences jusqu'à la mise hors service du système.",
          "schema": {
            "type": "flow",
            "items": [
              "Exigences",
              "Conception",
              "Développement",
              "Tests",
              "Exploitation et maintenance",
              "Décommissionnement"
            ]
          }
        },
        {
          "type": "standard",
          "titre": "Waterfall, Spiral et V-Model",
          "points": [
            "Waterfall : approche linéaire et séquentielle, exigences figées dès le départ",
            "Critique majeure : rigidité, mal adapté aux projets complexes",
            "Spiral model : modèle itératif piloté par le risque, de Barry Boehm",
            "V-Model : chaque phase de développement est associée à une phase de test"
          ],
          "narration": "Le modèle Waterfall, formalisé par Winston Royce en 1970, est une approche linéaire : chaque phase doit être totalement terminée avant que la suivante ne commence, comme l'eau qui ne coule que vers le bas. Toutes les exigences sont recueillies au départ, ce qui rend le modèle très rigide face au changement. Le modèle en spirale de Barry Boehm corrige ce défaut : c'est un processus itératif piloté par le risque, où chaque tour de spirale commence par identifier et résoudre les risques. Enfin, le V-Model étend Waterfall en associant à chaque phase de développement une phase de vérification et de validation correspondante.",
          "astuce": "💡 Conseil examen : Spiral = risk-driven. Si la question parle d'un modèle centré sur l'analyse de risques à chaque itération, c'est le modèle en spirale."
        },
        {
          "type": "standard",
          "titre": "L'approche Agile",
          "points": [
            "Itérations courtes, livraison fréquente de logiciel fonctionnel",
            "Les individus et les interactions plutôt que les processus et les outils",
            "Le logiciel fonctionnel plutôt que la documentation exhaustive",
            "La collaboration avec le client plutôt que la négociation contractuelle",
            "La réponse au changement plutôt que le suivi d'un plan"
          ],
          "narration": "En 2001, dix-sept pionniers ont publié le Manifeste Agile, qui a bouleversé le développement logiciel. L'approche Agile privilégie quatre valeurs : les individus et leurs interactions plutôt que les processus, le logiciel qui fonctionne plutôt que la documentation exhaustive, la collaboration avec le client plutôt que la négociation de contrat, et la réponse au changement plutôt que le suivi rigide d'un plan. Concrètement, les équipes livrent du logiciel fonctionnel en itérations courtes, ce qui réduit les risques en détectant les problèmes tôt grâce aux tests et retours fréquents."
        },
        {
          "type": "standard",
          "titre": "Les déclinaisons d'Agile",
          "points": [
            "Scrum : sprints courts, réunions quotidiennes, équipes auto-organisées",
            "Kanban : gestion visuelle du flux de travail, réduction du temps de cycle",
            "XP (Extreme Programming) : vitesse et simplicité, pair programming",
            "RAD : prototypage rapide plutôt que planification stricte",
            "SAFe : mise à l'échelle d'Agile au niveau de l'entreprise"
          ],
          "narration": "Plusieurs méthodologies concrétisent les principes Agile. Scrum organise le travail en sprints courts avec des réunions quotidiennes et des équipes auto-organisées. Kanban utilise un tableau visuel pour suivre le flux de travail et réduire le temps entre le début et la fin d'une tâche. Extreme Programming vise la vitesse et la simplicité avec des cycles très courts et des pratiques comme le pair programming. Le Rapid Application Development mise sur le prototypage rapide, et le Scaled Agile Framework, ou SAFe, permet d'appliquer Agile à l'échelle de toute une entreprise. Citons aussi RUP et sa version simplifiée AUP, ainsi que DSDM, centré sur le besoin métier et la livraison dans les délais."
        },
        {
          "type": "standard",
          "titre": "DevOps et DevSecOps",
          "points": [
            "DevOps : unifier développement, assurance qualité et opérations",
            "Objectif : raccourcir le cycle et livrer en continu, parfois plusieurs fois par jour",
            "DevSecOps : la sécurité devient l'affaire de tous, intégrée au pipeline",
            "Shift left : déplacer les contrôles de sécurité vers l'amont du cycle"
          ],
          "narration": "DevOps réunit trois fonctions historiquement cloisonnées : le développement, l'assurance qualité et les opérations. L'objectif est de réduire drastiquement le temps nécessaire pour développer, tester et déployer, au point de pouvoir livrer du code des dizaines de fois par jour. Cette vitesse exige un haut degré d'automatisation. DevSecOps va plus loin en intégrant la sécurité directement dans ce modèle : les contrôles de sécurité sont automatisés dans le pipeline et avancent au même rythme que le code. C'est ce qu'on appelle le shift left : déplacer la sécurité le plus en amont possible du cycle de développement.",
          "astuce": "💡 Conseil examen : DevSecOps soutient le concept de software-defined security, où les contrôles de sécurité sont gérés activement dans le pipeline CI/CD."
        },
        {
          "type": "schema",
          "titre": "Le pipeline CI/CD",
          "points": [
            "Continuous Integration : chaque commit est fusionné et testé automatiquement",
            "Continuous Delivery : le code est toujours déployable, mais la mise en production reste une décision humaine",
            "Continuous Deployment : tout changement validé part automatiquement en production"
          ],
          "narration": "Le pipeline CI/CD est le moteur de DevOps. Avec l'intégration continue, tout nouveau code est fusionné dans un dépôt partagé dès qu'il est écrit, ce qui déclenche automatiquement des tests unitaires puis des tests d'intégration. Cela permet de détecter les erreurs tôt et souvent. La livraison continue, ou continuous delivery, garantit que le code est toujours dans un état déployable, mais la mise en production exige encore une approbation humaine. Le déploiement continu, lui, supprime cette dernière étape : tout changement qui passe les tests automatisés part directement en production, sans intervention manuelle.",
          "schema": {
            "type": "flow",
            "items": [
              "Commit",
              "Build automatique",
              "Tests unitaires",
              "Tests d'intégration",
              "Livraison (staging)",
              "Déploiement en production"
            ]
          },
          "astuce": "💡 Conseil examen : la différence entre continuous delivery et continuous deployment tient à un seul mot : l'approbation humaine avant la production."
        },
        {
          "type": "question",
          "titre": "Contrôle de connaissances",
          "points": [],
          "narration": "Vérifions votre compréhension des méthodologies de développement avec une petite question.",
          "q": "Quelle est la différence ESSENTIELLE entre continuous delivery et continuous deployment ?",
          "choix": [
            "Continuous deployment ne s'applique qu'aux environnements de test",
            "Continuous delivery ne comporte aucun test automatisé",
            "Continuous delivery conserve une approbation manuelle avant la mise en production, continuous deployment est entièrement automatique",
            "Continuous deployment exige une approbation manuelle avant la production"
          ],
          "reponse": 2,
          "explication": "Les deux pratiques reposent sur l'intégration continue et l'automatisation des tests. En continuous delivery, le code est toujours déployable mais un humain approuve la mise en production. En continuous deployment, tout changement qui passe les tests part automatiquement en production, sans intervention manuelle."
        },
        {
          "type": "standard",
          "titre": "Gestion du changement et IPT",
          "points": [
            "Request Control : cadre organisé pour demander des modifications et prioriser",
            "Change Control : les développeurs recréent le problème et testent la solution avant production",
            "Release Control : approbation de la mise en production, avec acceptance testing",
            "CAB : le Change Advisory Board approuve ou rejette les changements",
            "IPT : équipes multifonctionnelles du DoD favorisant des décisions parallèles"
          ],
          "narration": "La gestion du changement comporte trois composantes fondamentales à connaître. Le request control offre un cadre organisé où les utilisateurs demandent des modifications, les managers font l'analyse coûts-bénéfices, et les développeurs priorisent. Le change control permet aux développeurs de recréer la situation rencontrée, puis de créer et tester une solution avant de la déployer en production. Enfin, le release control approuve formellement la mise en production, en incluant les tests d'acceptation. Un Change Advisory Board, ou CAB, examine et approuve les changements proposés. Notez aussi l'Integrated Product Team, une approche du département de la Défense américain qui réunit des équipes multifonctionnelles pour favoriser des décisions parallèles plutôt que séquentielles."
        },
        {
          "type": "standard",
          "titre": "Operations and Maintenance : la sécurité après le déploiement",
          "points": [
            "Le déploiement n'est pas la fin : la majeure partie de la vie du logiciel se passe en production",
            "Gestion des correctifs et des vulnérabilités : évaluer, tester, appliquer, vérifier",
            "Supervision continue : journaux, performances, incidents et alertes de sécurité",
            "Tout changement en production passe par le processus formel de gestion du changement",
            "Fin de vie : décommissionnement ordonné et effacement sécurisé des données"
          ],
          "narration": "Arrêtons-nous sur une phase souvent négligée : l'exploitation et la maintenance, en anglais operations and maintenance. Une fois le logiciel déployé, le travail de sécurité ne s'arrête pas, il change de nature. L'équipe doit maintenir une configuration durcie, appliquer les correctifs selon un processus de gestion des vulnérabilités, c'est-à-dire évaluer chaque correctif, le tester, le déployer puis vérifier son application. La supervision continue surveille les journaux, les performances et les signaux d'incident, et alimente la réponse aux incidents applicatifs. Attention : toute modification du logiciel en production, correctif compris, doit passer par le processus formel de gestion du changement, avec test et approbation. Enfin, la phase se termine par le décommissionnement : retirer proprement le système, révoquer les accès et effacer les données de façon sécurisée.",
          "astuce": "💡 Conseil examen : si une question situe la gestion des correctifs, la supervision continue ou la réponse aux incidents applicatifs dans le SDLC, la phase attendue est Operations and Maintenance — et tout correctif en production passe par le change management."
        },
        {
          "type": "standard",
          "titre": "L'Integrated Product Team (IPT)",
          "points": [
            "Équipe multifonctionnelle introduite par le département de la Défense américain en 1995",
            "Réunit développeurs, opérations, sécurité, achats, testeurs et représentants métier",
            "Objectif : des décisions prises en PARALLÈLE plutôt qu'en revues séquentielles",
            "Les parties prenantes, sécurité comprise, sont impliquées sur TOUT le cycle de vie",
            "Précurseur de l'esprit DevOps : collaboration continue plutôt que silos"
          ],
          "narration": "Approfondissons maintenant l'Integrated Product Team, un concept que l'examen peut interroger directement. Introduite par le département de la Défense américain au milieu des années quatre-vingt-dix, l'IPT est une équipe multifonctionnelle qui rassemble autour d'un même produit toutes les parties prenantes : les développeurs, bien sûr, mais aussi les opérations, la sécurité, les achats, les testeurs et les représentants du métier ou du client. Son objectif est de remplacer les longues chaînes de validation séquentielles, où chaque fonction examine le projet l'une après l'autre, par des décisions prises en parallèle, tous les points de vue étant présents autour de la table dès le départ. La sécurité participe ainsi aux choix de conception au lieu de les découvrir trop tard. Vous remarquerez que cette philosophie annonce l'esprit DevOps : casser les silos et faire collaborer en continu toutes les fonctions sur l'ensemble du cycle de vie du produit.",
          "astuce": "💡 Conseil examen : IPT = équipe multidisciplinaire associée au DoD, orientée décisions PARALLÈLES. Si l'énoncé décrit des parties prenantes réunies en continu autour d'un produit pour éviter les validations séquentielles, pensez Integrated Product Team."
        },
        {
          "type": "resume",
          "titre": "Résumé de la leçon",
          "points": [
            "Le SDLC va des exigences au décommissionnement ; la sécurité s'intègre à chaque phase",
            "Waterfall est linéaire et rigide ; Spiral est itératif et piloté par le risque ; le V-Model associe développement et tests",
            "Agile livre en itérations courtes ; Scrum, Kanban, XP et SAFe en sont des déclinaisons",
            "DevOps unifie dev, QA et ops ; DevSecOps y intègre la sécurité en continu",
            "CI/CD automatise l'intégration et la livraison ; delivery garde une approbation humaine, deployment non",
            "Gestion du changement : request control, change control, release control",
            "Operations and Maintenance : correctifs, supervision continue et gestion des vulnérabilités après le déploiement",
            "IPT : équipe multifonctionnelle du DoD qui décide en parallèle avec toutes les parties prenantes"
          ],
          "narration": "Récapitulons. Le SDLC structure la vie du logiciel, des exigences jusqu'au retrait, et la sécurité doit y être intégrée dès le début. Waterfall est linéaire et rigide, le modèle en spirale est itératif et piloté par le risque, et le V-Model associe chaque phase de développement à une phase de test. Agile privilégie les itérations courtes et la collaboration, avec des déclinaisons comme Scrum, Kanban et SAFe. DevOps unifie développement et opérations, DevSecOps y intègre la sécurité, et le pipeline CI/CD automatise l'ensemble. La gestion du changement s'appuie sur trois piliers : request control, change control et release control. Enfin, la sécurité continue après le déploiement pendant l'exploitation et la maintenance, et l'Integrated Product Team incarne la collaboration multifonctionnelle avec des décisions prises en parallèle."
        }
      ]
    },
    {
      "id": "d8-l2",
      "titre": "Modèles de maturité : CMM, SAMM et IDEAL",
      "duree": 9,
      "slides": [
        {
          "type": "intro",
          "titre": "Pourquoi mesurer la maturité ?",
          "points": [
            "Passer de processus improvisés à des processus fiables et gérés",
            "Un processus mature produit un logiciel plus prévisible et de meilleure qualité",
            "Trois modèles à connaître : SW-CMM, SAMM et IDEAL"
          ],
          "narration": "Comment savoir si votre organisation développe du logiciel de manière fiable, ou si tout repose sur quelques héros qui improvisent ? C'est précisément le rôle des modèles de maturité. Ils aident les organisations à passer de processus incohérents et non structurés à des processus fiables et bien gérés. Pour l'examen, vous devez être capable de décrire trois modèles : le Software Capability Maturity Model, le Software Assurance Maturity Model d'OWASP, et le modèle IDEAL."
        },
        {
          "type": "standard",
          "titre": "Le SW-CMM du SEI",
          "points": [
            "Créé par le Software Engineering Institute de Carnegie Mellon",
            "Décrit la maturité des processus de développement en cinq niveaux séquentiels",
            "Attention : le CMM ne traite pas explicitement de la sécurité"
          ],
          "narration": "Le Software Capability Maturity Model, abrégé SW-CMM ou simplement CMM, a été créé par le Software Engineering Institute de l'université Carnegie Mellon. C'est un modèle de gestion visant l'amélioration continue des processus de développement logiciel. L'idée centrale est que toute organisation traverse des phases de maturité de façon séquentielle : on ne saute pas d'étapes. Un point important pour l'examen : le CMM ne traite pas explicitement de la sécurité, il mesure la maturité des processus en général."
        },
        {
          "type": "schema",
          "titre": "Les cinq niveaux du CMM",
          "points": [
            "Niveau 1 Initial : processus ad hoc, dépendant des individus",
            "Niveau 2 Repeatable : gestion de projet de base, gestion de configuration",
            "Niveau 3 Defined : processus formels documentés, revues par les pairs",
            "Niveau 4 Managed : mesures quantitatives des processus et produits",
            "Niveau 5 Optimizing : amélioration continue, prévention des défauts"
          ],
          "narration": "Le CMM comporte cinq niveaux. Au niveau un, Initial, les processus sont désorganisés, ad hoc, et tout dépend des compétences individuelles. Au niveau deux, Repeatable, on introduit la gestion de projet de base : planification, gestion des exigences, gestion de configuration et assurance qualité. Au niveau trois, Defined, les développeurs suivent des processus formels et documentés, avec des revues par les pairs et la réutilisation de code. Au niveau quatre, Managed, l'organisation pilote ses processus avec des mesures quantitatives. Enfin au niveau cinq, Optimizing, l'amélioration continue est institutionnalisée, avec gestion du changement de processus et prévention des défauts.",
          "schema": {
            "type": "pyramid",
            "items": [
              "1. Initial",
              "2. Repeatable",
              "3. Defined",
              "4. Managed",
              "5. Optimizing"
            ]
          },
          "astuce": "💡 Conseil examen : mémorisez l'ordre avec I-R-D-M-O. Le mot-clé du niveau 4 est « quantitatif », celui du niveau 5 est « amélioration continue »."
        },
        {
          "type": "standard",
          "titre": "SAMM : la maturité de la sécurité logicielle",
          "points": [
            "Software Assurance Maturity Model, projet open source maintenu par OWASP",
            "Cadre pour intégrer la sécurité dans le développement ET évaluer sa maturité",
            "Organisé autour de cinq fonctions métier"
          ],
          "narration": "Contrairement au CMM, le Software Assurance Maturity Model, ou SAMM, est entièrement dédié à la sécurité. C'est un projet open source maintenu par l'OWASP. Il fournit un cadre pour intégrer la sécurité dans les processus de développement et de maintenance du logiciel, tout en permettant à l'organisation d'évaluer sa maturité dans ce domaine. SAMM associe le développement logiciel à cinq fonctions métier que nous allons détailler."
        },
        {
          "type": "schema",
          "titre": "Les cinq fonctions métier de SAMM",
          "points": [
            "Governance : stratégie, métriques, politique, conformité, formation",
            "Design : threat modeling, exigences et architecture de sécurité",
            "Implementation : secure build, secure deployment, gestion des défauts",
            "Verification : évaluation d'architecture, tests de sécurité",
            "Operations : gestion des incidents, de l'environnement et opérationnelle"
          ],
          "narration": "SAMM structure la sécurité logicielle en cinq fonctions métier. La gouvernance couvre le pilotage des processus de développement : stratégie, métriques, politiques, conformité et formation. Le design couvre la définition des exigences et la conception, avec notamment le threat modeling et l'architecture de sécurité. L'implémentation englobe la construction et le déploiement sécurisés ainsi que la gestion des défauts. La vérification confirme que le code répond aux exigences métier et de sécurité, à travers les tests de sécurité et l'évaluation d'architecture. Enfin, les opérations maintiennent la sécurité après la mise en production, avec la gestion des incidents et de l'environnement.",
          "schema": {
            "type": "grid",
            "items": [
              "Governance",
              "Design",
              "Implementation",
              "Verification",
              "Operations"
            ]
          }
        },
        {
          "type": "standard",
          "titre": "Le modèle IDEAL",
          "points": [
            "Développé par le SEI, orienté amélioration des processus",
            "Initiating : justifier le changement, obtenir le soutien",
            "Diagnosing : analyser l'état actuel, recommander des changements",
            "Establishing : bâtir un plan d'action précis",
            "Acting : développer, tester, affiner et déployer les solutions",
            "Learning : analyser en continu et proposer de nouvelles actions"
          ],
          "narration": "Le modèle IDEAL, également développé par le SEI, reprend beaucoup d'attributs du CMM mais avec une orientation différente. Ses cinq phases forment l'acronyme IDEAL. Initiating : on expose les raisons métier du changement et on obtient le soutien et les ressources. Diagnosing : les ingénieurs analysent l'état actuel de l'organisation et recommandent des changements. Establishing : on développe un plan d'action précis à partir de ces recommandations. Acting : on développe les solutions, on les teste, on les affine et on les met en œuvre. Learning : on analyse continuellement les efforts et on propose de nouvelles actions si nécessaire."
        },
        {
          "type": "standard",
          "titre": "IDEAL versus SW-CMM",
          "points": [
            "IDEAL : modèle d'AMÉLIORATION des processus — comment progresser",
            "SW-CMM : modèle d'ÉVALUATION de maturité — où en êtes-vous",
            "Correspondance approximative : Initiating-Initial, Diagnosing-Repeatable, Establishing-Defined, Acting-Managed, Learning-Optimizing"
          ],
          "narration": "Ne confondez pas les deux modèles du SEI. IDEAL est un modèle d'amélioration des processus : il décrit comment progresser. Le SW-CMM est un modèle d'évaluation de maturité : il décrit où vous en êtes actuellement. Il existe une correspondance conceptuelle approximative entre leurs phases : Initiating avec Initial, Diagnosing avec Repeatable, Establishing avec Defined, Acting avec Managed, et Learning avec Optimizing. Ce parallèle est un moyen mnémotechnique pratique pour l'examen.",
          "astuce": "💡 Conseil examen : IDEAL et Initial commencent tous deux par I, et les phases s'alignent dans l'ordre avec les niveaux du CMM."
        },
        {
          "type": "question",
          "titre": "Contrôle de connaissances",
          "points": [],
          "narration": "Testons votre maîtrise des modèles de maturité.",
          "q": "À quel niveau du SW-CMM une organisation utilise-t-elle pour la PREMIÈRE fois des mesures quantitatives pour gérer ses processus logiciels ?",
          "choix": [
            "Niveau 5 : Optimizing",
            "Niveau 3 : Defined",
            "Niveau 4 : Managed",
            "Niveau 2 : Repeatable"
          ],
          "reponse": 2,
          "explication": "Le niveau 4, Managed, est caractérisé par l'utilisation de mesures quantitatives du développement logiciel et la fixation d'objectifs quantitatifs. Le niveau 2 introduit la gestion de projet de base, le niveau 3 les processus formels documentés, et le niveau 5 l'amélioration continue."
        },
        {
          "type": "resume",
          "titre": "Résumé de la leçon",
          "points": [
            "Les modèles de maturité font passer d'un développement improvisé à des processus gérés",
            "SW-CMM : cinq niveaux — Initial, Repeatable, Defined, Managed, Optimizing — sans focus sécurité",
            "SAMM (OWASP) : maturité de la sécurité logicielle en cinq fonctions — Governance, Design, Implementation, Verification, Operations",
            "IDEAL (SEI) : Initiating, Diagnosing, Establishing, Acting, Learning — modèle d'amélioration",
            "IDEAL dit comment s'améliorer ; CMM dit où vous en êtes"
          ],
          "narration": "En résumé, les modèles de maturité permettent de professionnaliser le développement logiciel. Le SW-CMM du SEI décrit cinq niveaux, d'Initial à Optimizing, mais ne traite pas explicitement de sécurité. Le SAMM d'OWASP est dédié à la sécurité logicielle et s'organise en cinq fonctions métier : gouvernance, design, implémentation, vérification et opérations. Le modèle IDEAL, aussi du SEI, guide l'amélioration des processus en cinq phases. Retenez la distinction clé : IDEAL vous dit comment vous améliorer, le CMM vous dit où vous en êtes."
        }
      ]
    },
    {
      "id": "d8-l3",
      "titre": "Sécuriser l'écosystème de développement",
      "duree": 11,
      "slides": [
        {
          "type": "intro",
          "titre": "L'environnement de développement, cible de choix",
          "points": [
            "Le pipeline de développement est lui-même une surface d'attaque",
            "Dépôts de code, bibliothèques, outils, secrets : tout doit être protégé",
            "Les attaques de supply chain logicielle visent le maillon le plus faible"
          ],
          "narration": "Dans cette leçon, nous changeons de perspective : ce n'est plus seulement le logiciel produit qu'il faut protéger, mais l'usine qui le fabrique. Les dépôts de code, les bibliothèques partagées, les outils des développeurs et les pipelines d'automatisation constituent une surface d'attaque à part entière. Les grandes attaques de supply chain logicielle de ces dernières années l'ont démontré : compromettre l'environnement de développement permet d'atteindre tous les clients du logiciel."
        },
        {
          "type": "standard",
          "titre": "Langages et compilation",
          "points": [
            "Langage compilé : converti en code machine ; plus difficile à manipuler, mais backdoors moins visibles",
            "Langage interprété : code source visible et exécuté par un interpréteur (Python, JavaScript)",
            "Assembleurs, décompilateurs et désassembleurs convertissent entre les représentations",
            "Strong typing : le typage fort prévient les erreurs de type à la compilation"
          ],
          "narration": "Un mot sur les langages de programmation, car l'examen aime les questions de vocabulaire. Un langage compilé convertit le code source en format exécutable par la machine. Le code compilé est plus difficile à manipuler par un tiers, mais comme le source n'est pas visible, il est aussi plus difficile d'y détecter une porte dérobée. Un langage interprété, comme Python ou JavaScript, est exécuté par un interpréteur et son code source reste visible. Les assembleurs convertissent le langage d'assemblage en code machine, les décompilateurs font le chemin inverse vers le code source, et les désassembleurs reviennent au langage d'assemblage. Enfin, un typage fort protège le développeur en générant des erreurs dès la compilation en cas d'incompatibilité de types."
        },
        {
          "type": "standard",
          "titre": "La programmation orientée objet",
          "points": [
            "Encapsulation : regrouper données et méthodes, masquer les détails internes",
            "Héritage : une sous-classe hérite des méthodes de sa classe parente",
            "Polymorphisme : un même message peut produire des comportements différents",
            "Cohésion élevée et couplage faible : les marques d'une bonne conception"
          ],
          "narration": "La programmation orientée objet offre par nature une approche de type boîte noire, favorable à la sécurité. L'encapsulation regroupe les données et les méthodes dans un objet et masque ses détails internes. L'héritage permet à une sous-classe de réutiliser les méthodes de sa classe parente. Le polymorphisme désigne la capacité d'un objet à répondre différemment au même message selon les conditions externes. Deux notions de conception sont à retenir : une cohésion élevée, quand les méthodes d'une classe partagent des objectifs similaires, et un couplage faible, quand les objets interagissent peu entre eux. Cohésion élevée et couplage faible sont les marques d'un bon design, plus facile à maintenir et à dépanner.",
          "astuce": "💡 Conseil examen : high cohesion, low coupling. C'est la combinaison gagnante qu'attend l'examen."
        },
        {
          "type": "standard",
          "titre": "Bibliothèques et dépendances",
          "points": [
            "Les bibliothèques partagées accélèrent le développement et évitent de réinventer",
            "Mais elles importent aussi leurs vulnérabilités (exemple célèbre : Heartbleed)",
            "Le plus grand risque de l'open source : dépendre de versions obsolètes",
            "Connaître l'origine du code et suivre les vulnérabilités publiées"
          ],
          "narration": "Les bibliothèques logicielles sont des collections de composants préécrits qui font gagner un temps précieux : personne ne devrait réécrire un algorithme de chiffrement de zéro. Mais réutiliser du code, c'est aussi importer ses failles. La vulnérabilité Heartbleed dans OpenSSL en est l'exemple emblématique : une faille dans une bibliothèque partagée a exposé une immense partie d'Internet. Les développeurs doivent connaître l'origine du code qu'ils réutilisent et se tenir informés des vulnérabilités découvertes. Retenez que le plus grand risque de l'open source est de dépendre de versions obsolètes, en particulier pour les bibliothèques partagées."
        },
        {
          "type": "standard",
          "titre": "Outils, IDE et runtime",
          "points": [
            "IDE : environnement unique pour écrire, tester, déboguer et compiler",
            "Laisser chaque développeur choisir ses outils élargit la surface d'attaque",
            "Meilleure approche : validation des outils par un change advisory board",
            "Runtime environment : exécution portable du code (exemple : la JVM)"
          ],
          "narration": "L'environnement de développement intégré, ou IDE, regroupe tout ce dont le développeur a besoin pour écrire, tester, déboguer et compiler son code. Concernant les outils en général, il faut trouver un équilibre : imposer un outillage unique réduit la productivité et la satisfaction, mais laisser chacun choisir librement élargit la surface d'attaque de l'organisation. La meilleure approche consiste à faire valider les demandes d'outils par un change advisory board qui évalue les risques associés, puis à faire surveiller les contrôles par l'équipe sécurité. Enfin, les environnements d'exécution, comme la machine virtuelle Java, permettent d'exécuter du code portable sur différents systèmes sans recompilation."
        },
        {
          "type": "standard",
          "titre": "Dépôts de code et gestion de configuration",
          "points": [
            "Code repositories : stockage central du code, versioning, collaboration (GitHub, Bitbucket)",
            "Ne JAMAIS stocker de secrets (clés API, mots de passe) dans un dépôt",
            "SCM : suivi méthodique des changements pour garantir intégrité et traçabilité",
            "L'audit et la journalisation des changements permettent de détecter les modifications non autorisées"
          ],
          "narration": "Les dépôts de code comme GitHub ou Bitbucket sont le point de stockage central du code source : ils fournissent le contrôle de version, le suivi des bugs et la gestion des releases pour des équipes qui travaillent en parallèle. Un piège classique et redoutable : les secrets. Des clés d'API, des mots de passe ou des certificats accidentellement poussés dans un dépôt sont une cause majeure de compromission ; il faut les gérer dans des coffres à secrets dédiés et scanner les dépôts. La gestion de configuration logicielle, ou SCM, identifie les attributs du logiciel à différents moments et applique un contrôle de changement méthodique pour maintenir l'intégrité et la traçabilité tout au long du SDLC. La journalisation de tous les changements permet de repérer rapidement une activité suspecte ou une modification non autorisée.",
          "astuce": "💡 Conseil examen : un dépôt de code public contenant des credentials est un scénario d'exposition classique. La réponse attendue combine révocation immédiate des secrets et gestion centralisée des secrets."
        },
        {
          "type": "standard",
          "titre": "Supply chain logicielle et SBOM",
          "points": [
            "SBOM : Software Bill of Materials, l'inventaire formel de tous les composants et dépendances",
            "Permet d'identifier rapidement les systèmes affectés par une nouvelle vulnérabilité",
            "Le pipeline CI/CD repose sur des outils tiers qui peuvent être compromis",
            "Défenses : threat modeling, least privilege, defense in depth, zero trust"
          ],
          "narration": "La chaîne d'approvisionnement logicielle est devenue un enjeu central. Le Software Bill of Materials, ou SBOM, est un inventaire formel de tous les composants, bibliothèques et dépendances contenus dans un produit logiciel. Quand une nouvelle vulnérabilité est divulguée, comme ce fut le cas avec Log4j, le SBOM permet d'identifier immédiatement les systèmes affectés. N'oubliez pas que le pipeline CI/CD lui-même repose sur l'automatisation et des outils tiers qui peuvent comporter des vulnérabilités ou être compromis. Les principes classiques s'appliquent : threat modeling, moindre privilège, défense en profondeur et zero trust réduisent les menaces pesant sur ces outils et systèmes."
        },
        {
          "type": "schema",
          "titre": "Les maillons de la supply chain logicielle",
          "points": [
            "Chaque maillon peut être attaqué",
            "Le SBOM documente ce qui entre dans le produit final",
            "L'intégrité doit être vérifiée à chaque transition"
          ],
          "narration": "Représentons la chaîne d'approvisionnement logicielle. Le développeur écrit du code qui s'appuie sur des dépendances open source. Le tout est versionné dans un dépôt, construit par le pipeline CI/CD, empaqueté en artefact, puis déployé en production. Chacun de ces maillons peut être attaqué : un compte développeur volé, une dépendance empoisonnée, un pipeline détourné ou un artefact substitué. C'est pourquoi il faut vérifier l'intégrité à chaque transition, par exemple avec des signatures, et documenter l'ensemble des composants dans un SBOM.",
          "schema": {
            "type": "flow",
            "items": [
              "Développeur",
              "Dépendances open source",
              "Dépôt de code",
              "Pipeline CI/CD",
              "Artefact signé",
              "Production"
            ]
          }
        },
        {
          "type": "standard",
          "titre": "Code signing : signer les exécutables",
          "points": [
            "Code signing : signature numérique d'un exécutable ou d'un script par son éditeur",
            "Garantit l'INTÉGRITÉ (le code n'a pas été modifié) et l'ORIGINE (authenticité de l'éditeur)",
            "Repose sur un certificat de signature délivré par une CA ; hash du code chiffré avec la clé privée",
            "Ne garantit PAS que le code est sûr ou sans malveillance — seulement qu'il est intact et authentique",
            "Un certificat de signature volé permet de signer du malware : protéger les clés (HSM), révoquer si compromis"
          ],
          "narration": "Le code signing, la signature de code, applique la signature numérique aux exécutables, bibliothèques, pilotes et scripts. Le principe : l'éditeur calcule le hash de son code, le chiffre avec sa clé privée, et joint le résultat avec son certificat de signature délivré par une autorité de certification. Le système du client recalcule le hash et vérifie la signature : si tout correspond, il a deux garanties, l'intégrité, le code n'a pas été modifié depuis la signature, et l'origine, il provient bien de l'éditeur annoncé. Attention à la limite classique de l'examen : la signature ne dit rien de la qualité ni de l'innocuité du code ; un logiciel signé peut très bien être vulnérable, voire malveillant si le certificat de l'éditeur a été volé, comme dans plusieurs attaques de supply chain célèbres. D'où l'importance de protéger les clés de signature, idéalement dans un HSM, de signer dans le pipeline CI/CD de façon contrôlée, et de révoquer immédiatement tout certificat compromis.",
          "astuce": "💡 Conseil examen : code signing = intégrité + authenticité de l'origine, jamais une preuve d'absence de malveillance."
        },
        {
          "type": "question",
          "titre": "Contrôle de connaissances",
          "points": [],
          "narration": "Une question pour ancrer les notions de supply chain logicielle.",
          "q": "Une vulnérabilité critique vient d'être divulguée dans une bibliothèque open source très répandue. Quel outil permet le PLUS RAPIDEMENT d'identifier les applications de l'organisation qui sont affectées ?",
          "choix": [
            "Un test d'intrusion applicatif",
            "Le Software Bill of Materials (SBOM) de chaque application",
            "Un scan de vulnérabilités réseau",
            "La revue manuelle du code source"
          ],
          "reponse": 1,
          "explication": "Le SBOM fournit un inventaire formel de tous les composants, bibliothèques et dépendances d'un logiciel. Il permet d'identifier immédiatement les applications contenant la bibliothèque vulnérable. Un scan réseau ne voit pas les dépendances internes, un pentest et une revue manuelle seraient beaucoup trop lents et coûteux pour cet objectif."
        },
        {
          "type": "standard",
          "titre": "Sécuriser les toolsets, IDE et runtime",
          "points": [
            "Catalogue d'outils approuvés : chaque toolset est validé, inventorié, maintenu à jour",
            "Extensions et plugins d'IDE : un vecteur d'attaque réel (typosquatting, extensions malveillantes)",
            "Intégrité de la chaîne de build : compilateurs et outils issus de sources officielles, signatures et sommes de contrôle vérifiées",
            "Runtime : corriger aussi la JVM, les interpréteurs et les images de conteneurs, pas seulement l'application",
            "Le poste développeur est un actif critique : durcissement, moindre privilège, surveillance"
          ],
          "narration": "Allons plus loin sur la sécurisation concrète de l'outillage. Les toolsets approuvés doivent vivre dans un catalogue géré : chaque outil est inventorié, sa version suivie, et ses correctifs appliqués comme pour n'importe quel logiciel de production. L'IDE mérite une attention particulière : ses extensions et plugins, téléchargés depuis des places de marché publiques, sont un vecteur d'attaque bien réel. Des campagnes de typosquatting ont diffusé de fausses extensions qui volaient les secrets et les variables d'environnement des développeurs ; il faut donc restreindre les extensions à une liste vérifiée. La chaîne de build elle-même doit être intègre : compilateurs et outils obtenus de sources officielles, signatures et sommes de contrôle vérifiées, car un compilateur compromis peut injecter du code malveillant dans tout ce qu'il produit. Même logique pour les environnements d'exécution : une machine virtuelle Java, un interpréteur ou une image de conteneur obsolète expose toutes les applications qui s'exécutent dessus. Enfin, le poste du développeur, qui détient des accès aux dépôts et aux pipelines, se traite comme un actif critique : durcissement, moindre privilège et surveillance.",
          "astuce": "💡 Conseil examen : une faille dans l'IDE, le compilateur ou le runtime compromet TOUTES les applications qui en dépendent. Les outils de développement sont des logiciels comme les autres : validation par le CAB, inventaire, correctifs et surveillance."
        },
        {
          "type": "resume",
          "titre": "Résumé de la leçon",
          "points": [
            "Le code compilé cache les backdoors ; le code interprété est lisible ; le typage fort prévient les erreurs",
            "OOP : encapsulation, héritage, polymorphisme ; viser cohésion élevée et couplage faible",
            "Les bibliothèques importent leurs vulnérabilités ; le risque majeur de l'open source est l'obsolescence",
            "Outils validés par un CAB ; secrets hors des dépôts de code ; SCM pour l'intégrité et la traçabilité",
            "SBOM : inventaire des composants, clé de la gestion de la supply chain logicielle",
            "Code signing : intégrité et origine des exécutables via certificat — pas une preuve d'innocuité",
            "Toolsets, IDE et runtime sécurisés : catalogue approuvé, extensions vérifiées, environnements d'exécution corrigés"
          ],
          "narration": "Résumons cette leçon. L'environnement de développement est une surface d'attaque à part entière : outils validés et inventoriés, extensions d'IDE vérifiées et environnements d'exécution maintenus à jour en font partie. Côté langages, retenez la distinction entre compilé et interprété, et les vertus du typage fort. En programmation orientée objet, visez une cohésion élevée et un couplage faible. Les bibliothèques partagées font gagner du temps mais importent leurs failles, et le grand risque de l'open source est l'obsolescence des versions. Protégez les dépôts de code, sortez-en les secrets, appuyez-vous sur la gestion de configuration pour la traçabilité, et documentez vos composants dans un SBOM pour maîtriser la chaîne d'approvisionnement logicielle."
        }
      ]
    },
    {
      "id": "d8-l4",
      "titre": "Vulnérabilités applicatives et sécurité des bases de données",
      "duree": 13,
      "slides": [
        {
          "type": "intro",
          "titre": "Connaître l'ennemi : les vulnérabilités applicatives",
          "points": [
            "Design flaw : la conception elle-même est défectueuse",
            "Implementation flaw : une bonne conception mal codée",
            "L'OWASP Top 10 recense les catégories de risques les plus critiques du web"
          ],
          "narration": "Pour défendre une application, il faut connaître les attaques qui la visent. Une vulnérabilité au niveau du code source provient soit d'un défaut de conception, quand même un code parfait resterait vulnérable parce que le design est mauvais, soit d'un défaut d'implémentation, quand le développeur a mal codé une bonne conception. L'OWASP publie régulièrement son Top 10, la liste de référence des catégories de risques applicatifs les plus critiques. Dans cette leçon, nous passons en revue les grandes familles d'attaques, puis les problématiques propres aux bases de données."
        },
        {
          "type": "standard",
          "titre": "L'OWASP Top 10",
          "points": [
            "Broken access control et authentication failures",
            "Injection et insecure design",
            "Security misconfiguration et cryptographic failures",
            "Software supply chain failures et integrity failures",
            "Logging/alerting failures et mishandling of exceptional conditions"
          ],
          "narration": "L'édition 2025 de l'OWASP Top 10 recense notamment : le broken access control, c'est-à-dire les contrôles d'accès défaillants, en tête de liste ; la security misconfiguration ; les défaillances de la supply chain logicielle ; les cryptographic failures, quand le chiffrement est absent ou mal utilisé ; l'injection ; l'insecure design ; les authentication failures ; les défauts d'intégrité du logiciel et des données ; les défaillances de journalisation et d'alerte ; et enfin la mauvaise gestion des conditions exceptionnelles. Inutile de mémoriser l'ordre exact, mais vous devez reconnaître chaque catégorie et savoir comment s'en prémunir."
        },
        {
          "type": "standard",
          "titre": "Injection et validation des entrées",
          "points": [
            "SQL injection : du code SQL malveillant injecté via une entrée utilisateur",
            "Défenses : requêtes paramétrées, procédures stockées, validation des entrées",
            "Malformed input : les entrées mal contrôlées sont la source d'erreurs numéro un",
            "Defensive programming : traiter TOUTE entrée comme non fiable jusqu'à preuve du contraire"
          ],
          "narration": "L'injection reste un grand classique. Dans une injection SQL, l'attaquant insère du code SQL dans un champ de saisie pour manipuler la base de données : contourner une authentification, extraire des données, voire les détruire. La défense principale est constituée des requêtes paramétrées, complétées par la validation stricte des entrées et la limitation des privilèges du compte applicatif. Plus généralement, la mauvaise gestion des entrées est une source majeure d'erreurs pouvant mener à l'exécution de code arbitraire. D'où le principe de defensive programming : traiter toutes les routines d'entrée comme non fiables tant qu'elles n'ont pas été validées et assainies.",
          "astuce": "💡 Conseil examen : face à une question sur l'injection SQL, la MEILLEURE réponse technique est presque toujours les parameterized queries, avec la validation des entrées en complément."
        },
        {
          "type": "standard",
          "titre": "XSS et CSRF",
          "points": [
            "XSS (Cross-Site Scripting) : un script malveillant s'exécute dans le navigateur de la victime",
            "Défenses XSS : validation des entrées et encodage des sorties (output encoding)",
            "CSRF (Cross-Site Request Forgery) : exploiter la session authentifiée de la victime à son insu",
            "Défenses CSRF : jetons anti-CSRF uniques par session, revérification de l'utilisateur"
          ],
          "narration": "Deux attaques web à ne pas confondre. Le cross-site scripting, ou XSS, consiste à injecter un script malveillant dans une page web consultée par la victime : le script s'exécute dans son navigateur et peut voler ses cookies de session. La défense repose sur la validation des entrées et surtout l'encodage des sorties. Le cross-site request forgery, ou CSRF, exploite au contraire la confiance du serveur envers le navigateur : l'attaquant fait émettre à la victime, déjà authentifiée sur un site, une requête qu'elle n'a jamais voulue, comme un virement. La parade classique est le jeton anti-CSRF, une valeur unique et imprévisible exigée avec chaque requête sensible.",
          "astuce": "💡 Conseil examen : XSS abuse de la confiance de l'utilisateur envers un site ; CSRF abuse de la confiance du site envers le navigateur de l'utilisateur."
        },
        {
          "type": "standard",
          "titre": "Buffer overflow et exécution de code arbitraire",
          "points": [
            "Écrire au-delà de l'espace mémoire alloué au buffer",
            "Peut permettre l'exécution de code arbitraire choisi par l'attaquant",
            "Défenses : vérification des bornes (bounds checking), langages sûrs, canaris, ASLR et DEP",
            "Concerne surtout les langages sans gestion mémoire automatique comme C/C++"
          ],
          "narration": "Le buffer overflow, ou dépassement de tampon, est une vulnérabilité du code source qui permet d'accéder à des emplacements mémoire situés en dehors de l'espace alloué au tampon. L'attaquant déclenche le débordement en soumettant une entrée plus grande que la taille prévue, et peut ainsi écraser des données adjacentes, voire détourner le flux d'exécution pour exécuter du code arbitraire. Les défenses commencent dans le code, avec la vérification systématique des bornes et de la taille des entrées, et se prolongent au niveau du système avec des protections comme la randomisation de l'espace d'adressage et la prévention d'exécution des données. Les langages à gestion mémoire automatique sont nettement moins exposés que C ou C++."
        },
        {
          "type": "standard",
          "titre": "Race conditions et TOCTOU",
          "points": [
            "Race condition : le résultat dépend de l'ordre d'exécution de processus concurrents",
            "TOCTOU : time-of-check to time-of-use, exploiter le délai entre la vérification et l'usage",
            "Exemple : le fichier vérifié est remplacé entre le contrôle d'accès et l'ouverture",
            "Défenses : opérations atomiques, verrous, revérifier au moment de l'usage"
          ],
          "narration": "Une race condition, ou situation de compétition, survient quand le comportement d'un système dépend de l'ordre d'exécution de processus concurrents. L'attaque TOCTOU, pour time-of-check to time-of-use, en est la forme la plus connue : l'attaquant exploite le délai entre le moment où une vérification de sécurité est effectuée, par exemple une autorisation, et le moment où la ressource est réellement utilisée. Entre les deux, il substitue la ressource. La parade consiste à rendre les opérations atomiques, c'est-à-dire indivisibles, à utiliser des mécanismes de verrouillage et à revérifier les droits au moment précis de l'usage.",
          "astuce": "💡 Conseil examen : TOCTOU est une attaque de type race condition qui cible l'état du système, pas les entrées de l'utilisateur."
        },
        {
          "type": "standard",
          "titre": "Backdoors, covert channels et autres menaces",
          "points": [
            "Backdoor/trapdoor : mécanisme caché contournant les contrôles d'accès, aussi appelé maintenance hook",
            "Covert channels : canaux de communication violant la politique de sécurité — timing ou storage",
            "Citizen programmers : développement ad hoc hors de tout cadre de sécurité",
            "Memory/object reuse : les données résiduelles en mémoire créent un risque de rémanence"
          ],
          "narration": "Quelques menaces complémentaires à connaître. La backdoor, ou maintenance hook, est un mécanisme caché qui contourne les contrôles d'accès : insérée par un développeur pour faciliter la maintenance ou par un attaquant, elle doit être bannie du code de production. Les covert channels sont des chemins de communication qui violent la politique de sécurité ; on en distingue deux types, les canaux de timing et les canaux de stockage. Pensez aussi aux citizen programmers, ces employés qui codent des outils métier hors de tout cadre : le résultat est difficile à gérer et généralement dépourvu de considérations de sécurité. Enfin, la réutilisation d'objets mémoire sans effacement expose des données résiduelles, un risque de rémanence des données."
        },
        {
          "type": "standard",
          "titre": "Bases de données : agrégation et inférence",
          "points": [
            "Aggregation : combiner des données non sensibles pour créer de l'information sensible",
            "Inference : l'ATTAQUE qui déduit une information de niveau supérieur à partir d'éléments moins sensibles",
            "ACID : Atomicity, Consistency, Isolation, Durability — l'intégrité transactionnelle",
            "Dirty read : lire une valeur non validée d'une autre transaction, violation de l'isolation"
          ],
          "narration": "Passons aux bases de données. L'agrégation désigne la capacité à combiner des données non sensibles provenant de sources séparées pour créer une information sensible : c'est un problème de sécurité structurel. L'inférence, elle, est l'attaque correspondante : un attaquant rassemble des morceaux d'informations peu sensibles pour en déduire une information de sensibilité supérieure. Côté intégrité, retenez le test ACID des transactions : atomicité, cohérence, isolation et durabilité. Une dirty read, quand une transaction lit une valeur écrite par une autre transaction non encore validée, est une violation de la propriété d'isolation. La concurrence se gère par des mécanismes de verrouillage qui évitent les conflits entre utilisateurs simultanés.",
          "astuce": "💡 Conseil examen : aggregation est un « security issue », inference est une « attaque ». Cette nuance de formulation apparaît telle quelle à l'examen."
        },
        {
          "type": "standard",
          "titre": "Polyinstantiation et défenses des bases de données",
          "points": [
            "Polyinstantiation : plusieurs versions d'une même donnée à des niveaux de sécurité différents",
            "Empêche un utilisateur de bas niveau d'inférer l'existence de données classifiées",
            "Query attack et bypass attack : contourner le front-end ou les vues de la base",
            "Autres défenses : vues restreintes, contrôle du contenu et du contexte, data contamination à bloquer"
          ],
          "narration": "La polyinstantiation, littéralement plusieurs instances, est la défense reine contre l'inférence dans les bases de données multiniveaux. Le système stocke plusieurs versions d'une même donnée, avec la même clé, à des niveaux de sécurité différents, et ne montre à chaque utilisateur que la version correspondant à son habilitation. Ainsi, un utilisateur de bas niveau ne peut pas détecter l'existence de données plus sensibles à travers des erreurs système ou des conflits de doublons. Retenez aussi les attaques par requête, qui utilisent des outils de requête ou des requêtes malformées pour accéder à des données normalement interdites, et les attaques de contournement qui esquivent les contrôles du front-end. Les vues restreintes et la validation stricte des requêtes complètent l'arsenal défensif."
        },
        {
          "type": "standard",
          "titre": "Systèmes à base de connaissances : expert systems, neural networks, ML",
          "points": [
            "Expert system : base de règles (knowledge base, règles SI-ALORS) + moteur d'inférence (inference engine)",
            "Codifie le savoir d'experts humains ; décisions cohérentes, sans émotion ni fatigue",
            "Neural networks : couches de nœuds pondérés imitant le cerveau, apprentissage par entraînement",
            "Machine learning : le modèle apprend des données — supervisé (données étiquetées) ou non supervisé",
            "Risques du ML : data poisoning (empoisonnement des données d'entraînement), biais des jeux de données, décisions inexplicables"
          ],
          "narration": "Terminons par les systèmes à base de connaissances, un classique de l'examen. Un expert system, ou système expert, codifie le savoir d'experts humains sous deux composants : la knowledge base, un ensemble de règles de type si-alors qui capturent la connaissance du domaine, et l'inference engine, le moteur d'inférence qui applique ces règles aux faits observés pour en tirer des conclusions. L'intérêt : des décisions cohérentes, reproductibles, insensibles à la fatigue ou à la panique, par exemple pour détecter des fraudes ou aider au diagnostic. Les neural networks, réseaux de neurones, adoptent une autre approche : des couches de nœuds pondérés, inspirées du cerveau humain, qui apprennent par entraînement plutôt que par règles explicites. Le machine learning généralise cette idée : le modèle apprend directement des données, en mode supervisé avec des données étiquetées, ou non supervisé pour découvrir des structures cachées. Mais retenez les risques propres au ML : l'empoisonnement des données d'entraînement, data poisoning, où un attaquant corrompt les données pour fausser le modèle ; les biais hérités de jeux de données non représentatifs ; et l'opacité de décisions difficiles à expliquer ou à auditer.",
          "astuce": "💡 Conseil examen : expert system = knowledge base (règles SI-ALORS) + inference engine. Le ML introduit des risques nouveaux : poisoning, biais, explicabilité."
        },
        {
          "type": "question",
          "titre": "Contrôle de connaissances",
          "points": [],
          "narration": "Vérifions votre compréhension des défenses de bases de données.",
          "q": "Dans une base de données militaire multiniveau, un utilisateur non habilité tente de créer un enregistrement portant la même clé qu'un enregistrement classifié invisible pour lui. Quel mécanisme empêche que le rejet de sa requête ne lui révèle l'existence de la donnée classifiée ?",
          "choix": [
            "La polyinstantiation",
            "Le chiffrement transparent de la base",
            "Le verrouillage pessimiste",
            "La normalisation du schéma"
          ],
          "reponse": 0,
          "explication": "La polyinstantiation permet de stocker plusieurs versions d'une même donnée, avec le même identifiant, à des niveaux de sécurité différents. L'utilisateur de bas niveau peut créer sa version sans erreur et ne peut donc rien inférer sur l'existence de la version classifiée. Le chiffrement protège la confidentialité au repos mais ne masque pas les conflits de clés, la normalisation est une technique de conception, et le verrouillage gère la concurrence, pas l'inférence."
        },
        {
          "type": "resume",
          "titre": "Résumé de la leçon",
          "points": [
            "OWASP Top 10 : broken access control, injection, misconfiguration, supply chain, cryptographic failures…",
            "Injection SQL : requêtes paramétrées et validation des entrées ; defensive programming partout",
            "XSS : encodage des sorties ; CSRF : jetons anti-CSRF",
            "Buffer overflow : vérification des bornes ; TOCTOU : opérations atomiques et verrous",
            "Aggregation = problème, inference = attaque ; polyinstantiation = défense",
            "ACID : Atomicity, Consistency, Isolation, Durability",
            "Expert system = knowledge base + inference engine ; neural networks et ML : attention au data poisoning et aux biais"
          ],
          "narration": "Récapitulons cette leçon dense. L'OWASP Top 10 cartographie les risques applicatifs majeurs, du broken access control à l'injection en passant par la supply chain. Contre l'injection SQL, exigez des requêtes paramétrées et la validation des entrées. Contre le XSS, encodez les sorties ; contre le CSRF, imposez des jetons uniques. Le buffer overflow se prévient par la vérification des bornes, et les attaques TOCTOU par des opérations atomiques. Côté bases de données, l'agrégation est le problème, l'inférence est l'attaque, et la polyinstantiation est la défense. Enfin, les propriétés ACID garantissent l'intégrité des transactions."
        }
      ]
    },
    {
      "id": "d8-l5",
      "titre": "Évaluer la sécurité logicielle : tests, acquisition, APIs et codage sécurisé",
      "duree": 12,
      "slides": [
        {
          "type": "intro",
          "titre": "Faire confiance, mais vérifier",
          "points": [
            "Comment prouver qu'un logiciel, développé ou acheté, est suffisamment sûr ?",
            "Tests de sécurité applicative : SAST, DAST, IAST, SCA",
            "Évaluation des logiciels acquis : COTS, open source, tiers, cloud"
          ],
          "narration": "Dernière leçon de ce domaine : comment évaluer l'efficacité de la sécurité logicielle, que le logiciel soit développé en interne ou acquis à l'extérieur. Nous verrons d'abord les grandes familles de tests de sécurité applicative, puis les critères d'évaluation des logiciels commerciaux, open source, sur mesure et cloud. Nous terminerons par la sécurité des APIs et microservices, et par les standards de codage sécurisé, y compris la gestion des erreurs et la journalisation."
        },
        {
          "type": "standard",
          "titre": "SAST : l'analyse statique",
          "points": [
            "Examine le code SANS l'exécuter, avant même la compilation",
            "Détecte erreurs de type, dépassements de bornes, code inaccessible, violations de politique",
            "Méthode scalable de revue de code sécurisée",
            "SAST = outil automatisé ; la revue humaine s'appelle code review"
          ],
          "narration": "Le static application security testing, ou SAST, analyse le code sans exécuter le programme, souvent avant même la compilation. Il détecte les défauts logiciels comme les erreurs de type, les violations de bornes ou le code inaccessible, ainsi que les écarts par rapport aux politiques de codage sécurisé. C'est une méthode scalable qui permet de vérifier que les développeurs respectent les standards. Petite précision de vocabulaire : le terme SAST est réservé aux outils automatisés ; l'inspection manuelle par des humains s'appelle simplement code review. Parmi les techniques de revue humaine, citons le pair programming, où un développeur code pendant que l'autre relit, et les pass-around reviews, effectuées de façon asynchrone."
        },
        {
          "type": "standard",
          "titre": "DAST, IAST et SCA",
          "points": [
            "DAST : évalue le programme EN COURS D'EXÉCUTION, sans accès au code source",
            "DAST intervient généralement après le SAST, pour traquer les erreurs logiques subtiles",
            "IAST : combinaison des deux — système en exécution AVEC accès au code source",
            "SCA : inventorie les composants open source et tiers, leurs versions, licences et vulnérabilités connues",
            "RASP : agents intégrés à l'application qui détectent et bloquent les violations à l'exécution"
          ],
          "narration": "Le dynamic application security testing, ou DAST, évalue le programme pendant son exécution, en le sollicitant de manière à révéler des vulnérabilités exploitables, sans accéder au code source. Il intervient généralement une fois que le SAST a permis de corriger les défauts de base, et il excelle à tracer les erreurs logiques subtiles, les fuites mémoire et les problèmes de compatibilité. L'interactive application security testing, ou IAST, combine les deux approches : le test s'effectue sur le système en fonctionnement, avec accès au code source. La software composition analysis, ou SCA, identifie les composants open source et tiers du code, catalogue leurs versions et licences, et signale les vulnérabilités connues : c'est un outil critique de la gestion de la supply chain. Mentionnons enfin le RASP, des agents de sécurité intégrés à l'application qui détectent les violations à l'exécution et peuvent y réagir.",
          "astuce": "💡 Conseil examen : SAST = boîte blanche sans exécution ; DAST = boîte noire en exécution ; IAST = les deux à la fois ; SCA = les dépendances."
        },
        {
          "type": "question",
          "titre": "Contrôle de connaissances",
          "points": [],
          "narration": "Une question sur les tests de sécurité applicative.",
          "q": "Quelle technique de test évalue une application EN COURS D'EXÉCUTION tout en ayant accès à son code source ?",
          "choix": [
            "DAST",
            "SCA",
            "SAST",
            "IAST"
          ],
          "reponse": 3,
          "explication": "L'IAST, interactive application security testing, combine le SAST et le DAST : le test est réalisé sur le système en exécution, comme le DAST, mais avec accès au code source, comme le SAST. Le SAST n'exécute pas le programme, le DAST n'a pas accès au source, et la SCA analyse les composants tiers et open source."
        },
        {
          "type": "standard",
          "titre": "Évaluer les logiciels acquis : COTS et open source",
          "points": [
            "COTS : produits finis, largement testés par les chercheurs ; étudier l'historique des vulnérabilités du vendeur",
            "Certifications à rechercher : ISO/IEC 27034, ISO/IEC 27001, FedRAMP",
            "Open source : code inspectable par les défenseurs… et par les attaquants",
            "Risque majeur de l'open source : les versions obsolètes ; prévoir un processus de mise à jour dédié"
          ],
          "narration": "Quand on achète du logiciel au lieu de le développer, l'évaluation change de nature. Pour les produits commercial off-the-shelf, ou COTS, les produits les plus répandus ont déjà été testés par des chercheurs, bienveillants ou non : étudier les vulnérabilités découvertes et la façon dont le vendeur y a répondu renseigne sur son sérieux. Pour les produits de niche, recherchez des certifications comme ISO 27034 pour la sécurité applicative, ou des certifications de système de management comme ISO 27001 et FedRAMP, difficiles à obtenir. Côté open source, le code est inspectable par tous, défenseurs comme adversaires. Le plus grand risque reste la dépendance à des versions obsolètes, ce qui impose un processus de mise à jour périodique, distinct de celui des logiciels commerciaux.",
          "astuce": "💡 Conseil examen : demandez au vendeur s'il pratique le defensive programming, c'est-à-dire traiter toutes les entrées comme non fiables jusqu'à preuve du contraire."
        },
        {
          "type": "standard",
          "titre": "Software escrow : le séquestre de code source",
          "points": [
            "Software escrow : le code source est déposé chez un TIERS de confiance (escrow agent)",
            "Conditions de libération contractuelles : faillite de l'éditeur, arrêt du support, non-respect du contrat",
            "Protège le client dont l'activité dépend d'un logiciel dont il n'a pas le code",
            "Bonnes pratiques : dépôts mis à jour à chaque version, vérification que le dépôt compile réellement"
          ],
          "narration": "Que se passe-t-il si l'éditeur d'un logiciel critique pour votre activité fait faillite ou cesse d'en assurer la maintenance ? Sans le code source, vous ne pouvez ni corriger les bugs ni faire évoluer le produit. La réponse contractuelle s'appelle le software escrow, le séquestre de code source : l'éditeur dépose le code source et sa documentation chez un tiers de confiance, l'escrow agent. Le contrat définit les conditions de libération, en anglais release conditions : typiquement la faillite de l'éditeur, l'arrêt du support du produit ou le non-respect d'obligations contractuelles. Si l'une de ces conditions survient, le client reçoit le code et peut poursuivre la maintenance lui-même ou via un prestataire. Deux précautions rendent l'arrangement réellement utile : exiger que le dépôt soit mis à jour à chaque nouvelle version, et faire vérifier périodiquement que le contenu du séquestre compile et correspond bien au produit livré.",
          "astuce": "💡 Conseil examen : le software escrow est la MEILLEURE protection contre la faillite ou la disparition d'un éditeur dont le logiciel est critique — c'est une mesure de continuité, négociée dans le contrat d'acquisition."
        },
        {
          "type": "standard",
          "titre": "Logiciels tiers, services managés et cloud",
          "points": [
            "Third-party software : logiciel sur mesure, donc ni COTS ni standard — exiger un audit externe contractuel",
            "Managed services et cloud : commodité contre perte de contrôle",
            "Causes principales des brèches cloud : misconfigurations, manque de visibilité, contrôles d'accès faibles",
            "Certification et accréditation : l'analyse technique, puis la décision formelle d'autoriser l'exploitation"
          ],
          "narration": "Le logiciel tiers, développé sur mesure pour l'organisation, n'est pas du COTS : il peut embarquer de l'open source, mais sa personnalisation crée des vulnérabilités spécifiques. La bonne pratique est de faire réaliser un audit et une évaluation de sécurité par un tiers indépendant, en l'inscrivant dans le contrat et en conditionnant l'achat à la réussite de l'audit. Pour les services managés et le cloud, en SaaS, PaaS ou IaaS, l'organisation gagne en commodité mais perd une part de contrôle. Les premières causes de brèches cloud restent les erreurs de configuration, le manque de visibilité sur les accès et les contrôles d'accès insuffisants. Enfin, deux termes formels : la certification est l'analyse technique complète de la sécurité d'un système, et l'accréditation est la déclaration formelle par une autorité désignée que le système est approuvé pour fonctionner à un niveau de risque acceptable."
        },
        {
          "type": "standard",
          "titre": "Sécurité des APIs et des microservices",
          "points": [
            "API : le contrat d'interaction entre composants logiciels — REST échange l'état via HTTP/S",
            "Parameter validation : vérifier que chaque paramètre reçu est dans les limites définies",
            "Authentifier et autoriser chaque appel : clés d'API, OAuth, principe du moindre privilège",
            "Microservices : multiplication des APIs, donc de la surface d'attaque — passerelle API, TLS mutuel, zero trust"
          ],
          "narration": "Les APIs, ou application programming interfaces, spécifient la manière dont un composant logiciel interagit avec les autres. Le style REST, très répandu, synchronise des applications distantes en échangeant l'état via HTTP sécurisé. La mesure de sécurité fondamentale est la validation des paramètres : confirmer que chaque valeur reçue est conforme et dans les limites définies avant tout traitement. Chaque appel doit aussi être authentifié et autorisé, avec des mécanismes comme les clés d'API ou OAuth, et le moindre privilège. Dans une architecture microservices, l'application est décomposée en petits services communiquant par API : la surface d'attaque se multiplie d'autant. On la maîtrise avec une passerelle API centralisant l'authentification et la limitation de débit, du chiffrement TLS entre services, et une posture zero trust où aucun service ne fait confiance à un autre par défaut."
        },
        {
          "type": "standard",
          "titre": "Standards et guidelines de codage sécurisé",
          "points": [
            "Standard : activité OBLIGATOIRE — réduit un risque précis, applicable partout, vérifiable",
            "Guideline : recommandation flexible (commentaires cohérents, fonctions courtes)",
            "Les standards rigoureusement appliqués sont le MEILLEUR moyen de réduire les vulnérabilités du code",
            "Software-defined security : les fonctions de sécurité implémentées en logiciel, pilotées dans le pipeline"
          ],
          "narration": "Distinguons deux notions que l'examen adore opposer. Un standard est une règle obligatoire : pour mériter ce nom, une pratique de codage doit réduire le risque d'un type précis de vulnérabilité, être applicable à tous les développements de l'organisation, et être vérifiable. Une guideline est une recommandation, plus souple, comme formater les commentaires de façon cohérente ou garder des fonctions courtes. Retenez que des standards de codage sécurisé rigoureusement appliqués sont le meilleur moyen de réduire les vulnérabilités du code source. Mentionnons aussi la software-defined security : les fonctions de sécurité, comme le pare-feu ou la détection d'intrusion, sont implémentées en logiciel et gérées activement dans le pipeline CI/CD, ce qui permet par exemple de repositionner dynamiquement les capteurs selon la menace."
        },
        {
          "type": "standard",
          "titre": "Gestion des erreurs et journalisation",
          "points": [
            "Ne jamais révéler de détails techniques dans les messages d'erreur destinés à l'utilisateur",
            "Échouer de façon sûre : fail secure, en refusant l'accès en cas de doute",
            "Journaliser vers un dépôt centralisé : échecs de validation, authentifications, contrôles d'accès",
            "OWASP recommande aussi de tracer l'usage des privilèges admin, les erreurs TLS et cryptographiques"
          ],
          "narration": "La gestion des erreurs est un art d'équilibre. Un message d'erreur destiné à l'utilisateur ne doit jamais révéler de détails techniques, comme une trace de pile ou une requête SQL, car ces informations sont de l'or pour un attaquant. En revanche, les détails complets doivent être journalisés en interne, vers un dépôt de logs centralisé. Et en cas de condition anormale, l'application doit échouer de façon sûre, en refusant l'accès plutôt qu'en l'accordant. Les pratiques de codage sécurisé de l'OWASP recommandent de journaliser notamment : les échecs de validation d'entrée et de sortie, les tentatives d'authentification et surtout les échecs, les échecs de contrôle d'accès, les tentatives de falsification, les jetons de session invalides ou expirés, les exceptions systèmes et applicatives, l'usage des privilèges d'administration, les erreurs TLS et les erreurs cryptographiques."
        },
        {
          "type": "question",
          "titre": "Contrôle de connaissances",
          "points": [],
          "narration": "Une dernière vérification avant le résumé.",
          "q": "Selon les bonnes pratiques, quel est le MEILLEUR moyen de réduire durablement les vulnérabilités au niveau du code source dans toute l'organisation ?",
          "choix": [
            "Appliquer rigoureusement des standards de codage sécurisé obligatoires et vérifiables",
            "Publier des guidelines de codage recommandées aux développeurs",
            "Réaliser un test d'intrusion annuel sur chaque application",
            "Déployer un WAF devant toutes les applications web"
          ],
          "reponse": 0,
          "explication": "Les standards de codage sécurisé, rigoureusement appliqués, sont le meilleur moyen de réduire les vulnérabilités du code : ils sont obligatoires, applicables à tous les développements et vérifiables. Les guidelines ne sont que des recommandations flexibles, un pentest annuel est ponctuel et détectif, et un WAF est un contrôle compensatoire qui ne corrige pas le code."
        },
        {
          "type": "standard",
          "titre": "Évaluer l'efficacité de la sécurité logicielle",
          "points": [
            "Objectif 8.3 : prouver, mesures à l'appui, que les contrôles de sécurité logicielle fonctionnent",
            "Audit et journalisation des changements : rapprocher chaque mise en production d'une demande approuvée, d'une revue de code et d'un pipeline tracé",
            "Des journaux de changements centralisés et protégés en intégrité révèlent les modifications non autorisées",
            "Analyse de risque logicielle : prioriser les vulnérabilités selon impact métier et vraisemblance, pas selon le seul score technique",
            "Atténuation : corriger, compenser, ou faire ACCEPTER formellement le risque résiduel par son propriétaire métier",
            "Métriques : densité de défauts, vulnérabilités ouvertes par criticité, délai moyen de remédiation"
          ],
          "narration": "Comment savoir si votre programme de sécurité logicielle est réellement efficace ? C'est l'objet du sous-objectif huit point trois, qui repose sur deux piliers. Premier pilier : l'audit et la journalisation des changements. Chaque modification qui atteint la production doit pouvoir être rapprochée d'une demande approuvée, d'une revue de code et d'une exécution tracée du pipeline. Cette piste d'audit de bout en bout répond aux questions qui, quoi, quand et avec quelle approbation ; conservée dans des journaux centralisés et protégés en intégrité, elle permet de détecter les changements non autorisés et de fournir des preuves aux auditeurs. Second pilier : l'analyse et l'atténuation des risques. Toutes les vulnérabilités ne se valent pas : on les priorise selon leur impact métier et leur vraisemblance d'exploitation, pas seulement selon leur score technique. Pour chacune, l'organisation choisit de corriger, de mettre en place une mesure compensatoire, ou d'accepter le risque résiduel, une décision qui doit être formalisée par le propriétaire du risque métier, jamais prise silencieusement par les équipes techniques. Des métriques comme la densité de défauts, le nombre de vulnérabilités ouvertes par criticité ou le délai moyen de remédiation objectivent les progrès dans le temps.",
          "astuce": "💡 Conseil examen : évaluer l'efficacité = PREUVES et MESURES. La piste d'audit des changements est la preuve la plus probante qu'aucun changement non autorisé n'a atteint la production, et le risque résiduel est accepté par le propriétaire du risque métier, pas par le CISO."
        },
        {
          "type": "standard",
          "titre": "Services managés : évaluer avant de déléguer",
          "points": [
            "Managed services : un prestataire exploite tout ou partie du service (MSP, MSSP, SaaS, PaaS, IaaS managés)",
            "Commodité contre perte de contrôle : on délègue l'exploitation, JAMAIS la responsabilité finale",
            "Due diligence : attestations indépendantes (SOC 2 type II, ISO 27001, FedRAMP) quand l'audit sur site est impossible",
            "Contrat : modèle de responsabilité partagée, SLA de sécurité, notification d'incident, droit d'audit, réversibilité",
            "Surveiller les accès du prestataire à vos données comme tout accès à privilèges"
          ],
          "narration": "Approfondissons l'acquisition de services managés, où un prestataire exploite tout ou partie d'un service pour votre compte : fournisseur de services managés, MSSP pour la sécurité, ou offres SaaS, PaaS et IaaS opérées par un tiers. Le marché est simple : vous gagnez en commodité et en expertise, mais vous perdez du contrôle direct. Ce que vous ne perdez jamais, en revanche, c'est la responsabilité finale envers vos données et vos clients. L'évaluation avant signature relève de la due diligence : comme un grand fournisseur refusera presque toujours un audit sur site, appuyez-vous sur des attestations indépendantes, un rapport SOC 2 de type deux, une certification ISO 27001 ou une autorisation FedRAMP. Le contrat doit ensuite figer le modèle de responsabilité partagée, qui protège quoi, des SLA de sécurité, les délais de notification d'incident, un droit d'audit ou d'accès aux rapports, et la réversibilité, c'est-à-dire votre capacité à récupérer vos données et à quitter le service. Enfin, en exploitation, traitez les accès du prestataire à vos systèmes comme n'importe quel accès à privilèges : limités, journalisés et revus.",
          "astuce": "💡 Conseil examen : le client reste accountable de ses données quel que soit le modèle SaaS, PaaS ou IaaS. Face à un fournisseur qui refuse l'audit sur site, la bonne réponse s'appuie sur les attestations indépendantes et les clauses contractuelles, pas sur la confiance ni sur l'abandon du projet."
        },
        {
          "type": "standard",
          "titre": "Software-defined security",
          "points": [
            "Fonctions de sécurité (pare-feu, segmentation, détection) implémentées en LOGICIEL, découplées du matériel",
            "Les contrôles sont définis comme du code : versionnés, testés et déployés par le pipeline CI/CD",
            "Défenses dynamiques : repositionner un capteur ou modifier une règle en quelques minutes",
            "Cohérence et auditabilité : la configuration de sécurité vit dans le dépôt, comme l'Infrastructure as Code",
            "Pilier de DevSecOps, des architectures cloud et des réseaux SDN"
          ],
          "narration": "Terminons par un bullet explicite de l'examen : la software-defined security, ou sécurité définie par logiciel. L'idée est de découpler les fonctions de sécurité du matériel qui les portait traditionnellement : pare-feu, segmentation réseau, détection d'intrusion ou chiffrement deviennent des services logiciels, pilotés de façon centralisée. Concrètement, les contrôles sont définis comme du code : les règles de pare-feu, les politiques d'accès et le placement des capteurs sont écrits dans des fichiers versionnés dans le dépôt, testés, puis déployés automatiquement par le pipeline CI/CD, exactement comme l'Infrastructure as Code. Les bénéfices sont triples. D'abord la réactivité : face à une menace, on repositionne un capteur ou on modifie une règle en quelques minutes, sur des centaines de systèmes à la fois. Ensuite la cohérence : la même politique s'applique partout, sans dérive de configuration manuelle. Enfin l'auditabilité : l'historique du dépôt prouve qui a changé quelle règle et quand. C'est pour cela que la software-defined security est un pilier naturel de DevSecOps, des architectures cloud et des réseaux définis par logiciel.",
          "astuce": "💡 Conseil examen : software-defined security = contrôles de sécurité implémentés en logiciel et gérés activement dans le pipeline CI/CD. Si l'énoncé décrit des défenses qui s'adaptent automatiquement au rythme des déploiements, c'est cette notion — étroitement associée à DevSecOps."
        },
        {
          "type": "resume",
          "titre": "Résumé de la leçon",
          "points": [
            "SAST analyse le code sans l'exécuter ; DAST teste l'application en exécution ; IAST combine les deux ; SCA inventorie les dépendances",
            "COTS : historique des vulnérabilités et certifications ; open source : risque d'obsolescence ; tiers : audit externe contractuel",
            "Software escrow : code source déposé chez un tiers, libéré si l'éditeur fait faillite ou cesse le support",
            "Cloud : misconfigurations et contrôles d'accès faibles en tête des causes de brèches",
            "APIs : parameter validation, authentification de chaque appel ; microservices : passerelle API et zero trust",
            "Standards obligatoires et vérifiables ; messages d'erreur sobres, fail secure, journalisation centralisée",
            "Efficacité de la sécurité logicielle : piste d'audit des changements de bout en bout, métriques, acceptation formelle du risque résiduel par le propriétaire métier",
            "Services managés : attestations indépendantes (SOC 2, ISO 27001), responsabilité partagée, réversibilité contractuelle",
            "Software-defined security : les contrôles de sécurité définis comme du code et pilotés dans le pipeline CI/CD"
          ],
          "narration": "Terminons ce domaine. Pour tester la sécurité applicative, le SAST analyse le code sans l'exécuter, le DAST teste l'application en fonctionnement, l'IAST combine les deux, et la SCA inventorie les composants tiers. Pour les logiciels acquis, évaluez l'historique de sécurité et les certifications des vendeurs COTS, maîtrisez l'obsolescence de l'open source, et exigez un audit externe pour les développements tiers. Dans le cloud, les erreurs de configuration dominent les causes de brèches. Sécurisez vos APIs par la validation des paramètres et l'authentification de chaque appel. Enfin, imposez des standards de codage sécurisé, gérez les erreurs sans divulguer de détails, échouez de façon sûre, et journalisez les événements de sécurité vers un dépôt centralisé. Pour prouver l'efficacité de tout cela, appuyez-vous sur la piste d'audit des changements, des métriques, et une acceptation formelle du risque résiduel par son propriétaire métier. Évaluez les services managés par des attestations indépendantes et des clauses contractuelles solides, et retenez la software-defined security, où les contrôles vivent comme du code dans le pipeline. Vous avez maintenant tous les concepts clés du Domaine 8."
        }
      ]
    }
  ],
  "quiz": [
    {
      "q": "Un chef de projet doit choisir une méthodologie pour un projet dont les exigences sont incertaines et évolueront fréquemment. Quelle approche est la PLUS adaptée ?",
      "choix": [
        "V-Model",
        "Agile",
        "Cleanroom",
        "Waterfall"
      ],
      "reponse": 1,
      "explication": "Agile est conçu pour accueillir le changement, même tardif, grâce à des itérations courtes et des retours fréquents. Waterfall fige les exigences au départ et n'offre pas de mécanisme formel d'intégration des changements ; le V-Model hérite de cette rigidité en y ajoutant des phases de test parallèles ; et Cleanroom repose sur des spécifications formelles figées en amont, incompatibles avec des exigences mouvantes.",
      "difficulte": 1,
      "pourquoi": [
        "Piège de proximité : le V-Model ajoute des tests à chaque phase mais hérite de la rigidité séquentielle de Waterfall.",
        "Bonne réponse : Agile est conçu pour accueillir le changement grâce aux itérations courtes et aux retours fréquents du client.",
        "Trop rigide pour le contexte : Cleanroom repose sur des spécifications formelles figées, incompatibles avec des exigences mouvantes.",
        "Techniquement viable mais hors contexte : Waterfall fige les exigences au départ, l'inverse du besoin exprimé."
      ]
    },
    {
      "q": "Quel modèle de développement est décrit comme « risk-driven », chaque itération commençant par l'identification et la résolution des risques ?",
      "choix": [
        "Waterfall",
        "Spiral",
        "Scrum",
        "RAD"
      ],
      "reponse": 1,
      "explication": "Le modèle en spirale de Barry Boehm est un processus itératif piloté par le risque : chaque tour comprend la détermination des objectifs, l'identification et la résolution des risques, le développement et les tests, puis la planification de l'itération suivante. Waterfall est linéaire, Scrum est un cadre Agile centré sur les sprints, et RAD privilégie le prototypage rapide.",
      "difficulte": 1,
      "pourquoi": [
        "Hors sujet : Waterfall est linéaire et séquentiel, sans itération ni analyse de risque récurrente.",
        "Bonne réponse : le modèle en spirale de Boehm ouvre chaque itération par l'identification et la résolution des risques — il est explicitement « risk-driven ».",
        "Piège de famille : Scrum est itératif mais centré sur les sprints et la valeur métier, pas piloté par le risque.",
        "Trop étroit : RAD privilégie le prototypage rapide, sans phase de risque structurante à chaque tour."
      ]
    },
    {
      "q": "Quelle affirmation reflète le MIEUX une valeur du Manifeste Agile ?",
      "choix": [
        "Le suivi du plan plutôt que la réponse au changement",
        "La documentation exhaustive plutôt que le logiciel fonctionnel",
        "La collaboration avec le client plutôt que la négociation contractuelle",
        "Les processus et les outils plutôt que les individus et les interactions"
      ],
      "reponse": 2,
      "explication": "Le Manifeste Agile valorise la collaboration avec le client plutôt que la négociation contractuelle. Les trois autres propositions inversent les valeurs du manifeste : Agile privilégie le logiciel fonctionnel sur la documentation, la réponse au changement sur le plan, et les individus sur les processus.",
      "difficulte": 1,
      "pourquoi": [
        "Inversion : le manifeste privilégie la réponse au changement plutôt que le suivi du plan.",
        "Inversion : le manifeste valorise le logiciel fonctionnel PLUTÔT QUE la documentation exhaustive.",
        "Bonne réponse : la collaboration avec le client plutôt que la négociation contractuelle est l'une des quatre valeurs authentiques du manifeste.",
        "Inversion : le manifeste place les individus et les interactions au-dessus des processus et des outils."
      ]
    },
    {
      "q": "Une organisation déploie automatiquement en production chaque changement de code qui réussit l'ensemble des tests automatisés, sans aucune approbation humaine. Comment s'appelle cette pratique ?",
      "choix": [
        "Continuous integration",
        "Continuous monitoring",
        "Continuous delivery",
        "Continuous deployment"
      ],
      "reponse": 3,
      "explication": "Le continuous deployment déploie automatiquement en production tout changement passant les tests, sans intervention manuelle. Le continuous delivery maintient le code toujours déployable mais conserve une approbation humaine avant la production. La continuous integration se limite à fusionner et tester le code fréquemment, et le continuous monitoring est une pratique de supervision, pas de déploiement.",
      "difficulte": 2,
      "pourquoi": [
        "Trop étroit : la continuous integration s'arrête à la fusion et aux tests fréquents du code, sans déploiement.",
        "Hors sujet : le continuous monitoring est une pratique de supervision, pas de déploiement.",
        "Piège de proximité classique : le continuous delivery garde le code toujours déployable mais conserve une approbation humaine avant la production.",
        "Bonne réponse : le continuous deployment pousse automatiquement en production tout changement passant les tests, sans intervention humaine — exactement le scénario décrit."
      ]
    },
    {
      "q": "Quel est l'objectif PRINCIPAL de DevSecOps par rapport à DevOps ?",
      "choix": [
        "Intégrer les pratiques de sécurité de manière automatisée dans l'ensemble du pipeline",
        "Accélérer les déploiements en supprimant les contrôles de sécurité bloquants",
        "Transférer la responsabilité de la sécurité à une équipe dédiée en fin de cycle",
        "Remplacer les tests manuels par des audits annuels de conformité"
      ],
      "reponse": 0,
      "explication": "DevSecOps étend DevOps en intégrant la sécurité comme responsabilité partagée, automatisée dans le pipeline CI/CD, pour qu'elle avance au même rythme que le code. Supprimer les contrôles va à l'encontre du concept ; reléguer la sécurité en fin de cycle est précisément l'anti-modèle que DevSecOps corrige ; et les audits annuels sont incompatibles avec des livraisons quotidiennes.",
      "difficulte": 1,
      "pourquoi": [
        "Bonne réponse : DevSecOps intègre la sécurité comme responsabilité partagée et automatisée sur tout le pipeline, au rythme des livraisons.",
        "Contresens absolu : supprimer les contrôles de sécurité est l'inverse de DevSecOps, qui les automatise sans les supprimer.",
        "Anti-modèle : reléguer la sécurité à une équipe en fin de cycle est précisément ce que DevSecOps corrige.",
        "Hors phase : des audits annuels sont incompatibles avec des déploiements quotidiens et ne remplacent pas les tests continus."
      ]
    },
    {
      "q": "Lors de quelle phase du SDLC les exigences de sécurité devraient-elles être définies pour la PREMIÈRE fois ?",
      "choix": [
        "Pendant l'exploitation, sur la base des incidents observés",
        "Pendant le développement, quand le code prend forme",
        "Pendant les tests, quand les vulnérabilités sont détectables",
        "Pendant la collecte des exigences, au tout début du projet"
      ],
      "reponse": 3,
      "explication": "La sécurité doit être intégrée dès la phase des exigences : c'est là que se définissent les besoins fonctionnels et non fonctionnels, dont la sécurité fait partie. Corriger en phase de test ou d'exploitation coûte beaucoup plus cher, et attendre le développement signifie concevoir sans contraintes de sécurité. Le principe du « shift left » traduit cette exigence.",
      "difficulte": 1,
      "pourquoi": [
        "Hors phase : l'exploitation ne fait que subir les défauts non prévenus, au coût maximal.",
        "Hors phase : attendre le développement signifie concevoir l'architecture sans contraintes de sécurité.",
        "Hors phase : découvrir la sécurité aux tests, c'est corriger au prix fort ce qui aurait dû être conçu en amont.",
        "Bonne réponse : les exigences de sécurité se définissent dès la collecte des exigences — c'est le principe du shift left, au moment le moins coûteux."
      ]
    },
    {
      "q": "Quel composant de la gestion du changement fournit le cadre organisé dans lequel les utilisateurs demandent des modifications et les managers conduisent les analyses coûts-bénéfices ?",
      "choix": [
        "Configuration control",
        "Request control",
        "Change control",
        "Release control"
      ],
      "reponse": 1,
      "explication": "Le request control est le processus qui organise les demandes de modification des utilisateurs, l'analyse coûts-bénéfices par les managers et la priorisation par les développeurs. Le change control encadre la création et le test des changements par les développeurs, le release control gère l'approbation de mise en production avec les tests d'acceptation, et le configuration control protège le système contre les modifications inappropriées.",
      "difficulte": 2,
      "pourquoi": [
        "Hors sujet : le configuration control protège les systèmes contre les modifications non autorisées, il ne traite pas les demandes.",
        "Bonne réponse : le request control organise les demandes des utilisateurs, l'analyse coûts-bénéfices des managers et la priorisation.",
        "Piège de proximité : le change control encadre la création et le test des changements par les développeurs, pas la demande initiale.",
        "Hors phase : le release control gère l'approbation de mise en production, en aval du processus."
      ]
    },
    {
      "q": "Quelle responsabilité relève spécifiquement du release control ?",
      "choix": [
        "L'acceptance testing valide les changements avant la production",
        "Prioriser les demandes de modification des utilisateurs",
        "Permettre aux développeurs de recréer le problème signalé par un utilisateur",
        "Documenter la configuration matérielle des serveurs de production"
      ],
      "reponse": 0,
      "explication": "Le release control approuve la mise en production et doit inclure l'acceptance testing, confirmant que les modifications des tâches utilisateur sont comprises et fonctionnelles avant la sortie du code. La priorisation des demandes relève du request control, la reproduction des problèmes du change control, et la configuration matérielle du configuration control.",
      "difficulte": 2,
      "pourquoi": [
        "Bonne réponse : l'acceptance testing avant mise en production est la responsabilité propre du release control.",
        "Hors périmètre : prioriser les demandes relève du request control.",
        "Hors périmètre : recréer le problème signalé relève du change control.",
        "Hors périmètre : documenter la configuration matérielle relève du configuration control."
      ]
    },
    {
      "q": "Au niveau 3 « Defined » du SW-CMM, quelle caractéristique distingue l'organisation ?",
      "choix": [
        "Des objectifs quantitatifs sont fixés pour les produits et les processus",
        "Les processus sont ad hoc et dépendent des individus",
        "Les développeurs suivent des processus formels et documentés, avec des revues par les pairs",
        "L'amélioration continue et la prévention des défauts sont institutionnalisées"
      ],
      "reponse": 2,
      "explication": "Le niveau 3, Defined, est marqué par des processus de développement formels et documentés, les revues par les pairs, la coordination inter-groupes et les programmes de formation. Les processus ad hoc caractérisent le niveau 1 (Initial), les mesures quantitatives le niveau 4 (Managed), et l'amélioration continue le niveau 5 (Optimizing).",
      "difficulte": 2,
      "pourquoi": [
        "Hors niveau : les objectifs quantitatifs apparaissent au niveau 4, Managed.",
        "Hors niveau : les processus ad hoc dépendant des individus décrivent le niveau 1, Initial.",
        "Bonne réponse : le niveau 3, Defined, se caractérise par des processus formels documentés, des revues par les pairs et la formation.",
        "Hors niveau : l'amélioration continue et la prévention des défauts définissent le niveau 5, Optimizing."
      ]
    },
    {
      "q": "Quelle est la distinction CORRECTE entre le modèle IDEAL et le SW-CMM ?",
      "choix": [
        "IDEAL ne s'applique qu'aux projets Agile, SW-CMM qu'aux projets Waterfall",
        "IDEAL est maintenu par OWASP, SW-CMM par le NIST",
        "IDEAL évalue la maturité actuelle, SW-CMM décrit comment s'améliorer",
        "IDEAL décrit comment s'améliorer ; SW-CMM évalue la maturité"
      ],
      "reponse": 3,
      "explication": "IDEAL (Initiating, Diagnosing, Establishing, Acting, Learning) est un modèle d'amélioration des processus : il décrit comment progresser. Le SW-CMM est un modèle d'évaluation de maturité : il situe l'organisation sur cinq niveaux. Les deux ont été développés par le SEI de Carnegie Mellon, pas par OWASP ni le NIST, et aucun n'est lié à une méthodologie particulière.",
      "difficulte": 2,
      "pourquoi": [
        "Restriction inventée : aucun des deux modèles n'est lié à une méthodologie de développement particulière.",
        "Fausse attribution : les deux modèles viennent du SEI de Carnegie Mellon, pas d'OWASP ni du NIST.",
        "Inversion : c'est exactement le contraire — IDEAL décrit comment s'améliorer, SW-CMM évalue la maturité.",
        "Bonne réponse : IDEAL est un modèle d'amélioration des processus, le SW-CMM un modèle d'évaluation de maturité en cinq niveaux."
      ]
    },
    {
      "q": "Quelle fonction métier du SAMM d'OWASP couvre le threat modeling et l'architecture de sécurité ?",
      "choix": [
        "Implementation",
        "Verification",
        "Design",
        "Governance"
      ],
      "reponse": 2,
      "explication": "La fonction Design du SAMM couvre la définition des exigences logicielles et la conception, incluant le threat modeling, l'évaluation des menaces, les exigences de sécurité et l'architecture de sécurité. Governance couvre stratégie, métriques et conformité ; Implementation couvre le build et le déploiement sécurisés ; Verification couvre les tests et l'évaluation d'architecture.",
      "difficulte": 2,
      "pourquoi": [
        "Hors périmètre : Implementation couvre le build et le déploiement sécurisés, après la conception.",
        "Hors périmètre : Verification couvre les tests de sécurité et l'évaluation de l'architecture existante.",
        "Bonne réponse : la fonction Design du SAMM couvre le threat modeling, les exigences de sécurité et l'architecture de sécurité.",
        "Hors périmètre : Governance couvre la stratégie, les métriques et la conformité, pas la conception."
      ]
    },
    {
      "q": "Un RSSI veut évaluer la maturité des pratiques de sécurité du développement logiciel de son organisation. Quel modèle est le PLUS approprié ?",
      "choix": [
        "Waterfall",
        "SAMM",
        "IDEAL",
        "SW-CMM"
      ],
      "reponse": 1,
      "explication": "Le SAMM d'OWASP est spécifiquement conçu pour intégrer la sécurité dans le développement logiciel et évaluer la maturité de ces pratiques de sécurité. Le SW-CMM mesure la maturité des processus de développement en général mais ne traite pas explicitement de la sécurité ; IDEAL est un modèle d'amélioration générique ; Waterfall est une méthodologie de développement, pas un modèle de maturité.",
      "difficulte": 2,
      "pourquoi": [
        "Hors catégorie : Waterfall est une méthodologie de développement, pas un modèle de maturité.",
        "Bonne réponse : le SAMM d'OWASP est précisément conçu pour évaluer et améliorer la maturité des pratiques de sécurité logicielle.",
        "Trop générique : IDEAL est un modèle d'amélioration de processus, sans dimension sécurité spécifique.",
        "Techniquement vrai mais trop générique : le SW-CMM mesure la maturité des processus de développement sans traiter explicitement la sécurité."
      ]
    },
    {
      "q": "Un développeur découvre des identifiants de base de données codés en dur dans un dépôt de code accessible à toute l'entreprise. Que devrait faire l'organisation EN PREMIER ?",
      "choix": [
        "Révoquer et remplacer immédiatement les identifiants exposés",
        "Migrer le dépôt vers une plateforme privée",
        "Supprimer le fichier du dépôt et considérer l'incident clos",
        "Former le développeur aux bonnes pratiques de gestion des secrets"
      ],
      "reponse": 0,
      "explication": "Les identifiants doivent être considérés comme compromis dès leur exposition : la priorité est de les révoquer et de les remplacer. Supprimer le fichier ne suffit pas, car l'historique du dépôt conserve les données et elles ont pu être copiées. La formation et la migration du dépôt sont des mesures correctives utiles, mais elles viennent après le traitement de l'exposition active.",
      "difficulte": 2,
      "pourquoi": [
        "Bonne réponse : des identifiants exposés sont réputés compromis — les révoquer et les remplacer neutralise le risque immédiat.",
        "Techniquement utile mais hors phase : migrer le dépôt ne révoque pas des secrets déjà exposés et copiés.",
        "Trop étroit : supprimer le fichier laisse les identifiants dans l'historique du dépôt et dans les copies déjà faites.",
        "Techniquement utile mais hors phase : la formation est une mesure préventive qui ne traite pas l'exposition en cours."
      ]
    },
    {
      "q": "Quel est le PLUS GRAND risque associé à l'utilisation de logiciels open source dans une organisation ?",
      "choix": [
        "L'absence de licence d'utilisation",
        "Le coût élevé du support éditeur",
        "La dépendance à des versions obsolètes",
        "Le code source est visible par les attaquants"
      ],
      "reponse": 2,
      "explication": "Le plus grand risque de l'open source est de dépendre de versions obsolètes, en particulier pour les bibliothèques partagées : les vulnérabilités connues restent exploitables tant que la mise à jour n'est pas faite. La visibilité du code profite autant aux défenseurs qu'aux attaquants et n'est pas le risque principal ; l'open source est justement distribué sous licence ; et l'absence de support payant est une contrainte opérationnelle, pas le risque majeur.",
      "difficulte": 2,
      "pourquoi": [
        "Faux factuellement : l'open source est justement distribué sous licence.",
        "Trop étroit : l'absence de support payant est une contrainte opérationnelle, pas le risque de sécurité principal.",
        "Bonne réponse : dépendre de versions obsolètes de bibliothèques partagées laisse des vulnérabilités connues exploitables — c'est le risque majeur.",
        "Idée reçue : la visibilité du code profite autant aux défenseurs qu'aux attaquants ; ce n'est pas le risque principal."
      ]
    },
    {
      "q": "Quel est le PRINCIPAL bénéfice de sécurité d'un Software Bill of Materials (SBOM) ?",
      "choix": [
        "Identifier vite les systèmes affectés par une vulnérabilité",
        "Il empêche l'introduction de code malveillant dans le pipeline",
        "Il remplace les tests de sécurité applicative",
        "Il chiffre les dépendances du logiciel"
      ],
      "reponse": 0,
      "explication": "Le SBOM est un inventaire formel de tous les composants, bibliothèques et dépendances d'un produit logiciel. Son bénéfice principal est de permettre d'identifier rapidement les systèmes affectés quand une vulnérabilité est divulguée dans un composant. Il ne chiffre rien, n'empêche pas par lui-même l'introduction de code malveillant, et ne remplace aucun test : c'est un outil de visibilité.",
      "difficulte": 1,
      "pourquoi": [
        "Bonne réponse : le SBOM permet d'identifier immédiatement les systèmes affectés lors de la divulgation d'une vulnérabilité dans un composant.",
        "Surestimation : un inventaire ne bloque pas par lui-même l'introduction de code malveillant.",
        "Absolu : le SBOM est un outil de visibilité qui complète les tests, il ne les remplace jamais.",
        "Faux rôle : le SBOM est un inventaire, il ne chiffre rien."
      ]
    },
    {
      "q": "En programmation orientée objet, quelle combinaison caractérise une conception logicielle de QUALITÉ ?",
      "choix": [
        "Cohésion faible et couplage élevé",
        "Cohésion faible et couplage faible",
        "Cohésion élevée et couplage élevé",
        "Cohésion élevée et couplage faible"
      ],
      "reponse": 3,
      "explication": "Une bonne conception combine une cohésion élevée, où les méthodes d'une même classe partagent des objectifs similaires, et un couplage faible, où les objets interagissent peu entre eux. Cette combinaison rend le code plus indépendant, plus facile à dépanner et à faire évoluer. Toute autre combinaison dégrade la maintenabilité et augmente la propagation des erreurs.",
      "difficulte": 2,
      "pourquoi": [
        "La pire combinaison : responsabilités dispersées et objets interdépendants.",
        "Une cohésion faible disperse les responsabilités : le couplage faible ne suffit pas à sauver la conception.",
        "Le couplage élevé propage les erreurs entre objets : mauvaise conception malgré la bonne cohésion.",
        "Bonne réponse : cohésion élevée et couplage faible rendent le code indépendant, maintenable et facile à dépanner."
      ]
    },
    {
      "q": "Quelle caractéristique d'un objet lui permet de répondre par des comportements différents au même message selon les conditions externes ?",
      "choix": [
        "L'encapsulation",
        "Le polymorphisme",
        "L'héritage",
        "La délégation"
      ],
      "reponse": 1,
      "explication": "Le polymorphisme est la caractéristique d'un objet qui lui permet de répondre avec des comportements différents au même message ou à la même méthode en fonction de changements dans les conditions externes. L'encapsulation regroupe données et méthodes, l'héritage transmet les méthodes d'une classe parente à ses sous-classes, et la délégation transfère une requête à un autre objet.",
      "difficulte": 2,
      "pourquoi": [
        "Piège de proximité : l'encapsulation regroupe données et méthodes et masque l'implémentation, sans varier les comportements.",
        "Bonne réponse : le polymorphisme permet à un objet de répondre différemment au même message selon les conditions externes.",
        "Piège de proximité : l'héritage transmet les méthodes d'une classe parente, il ne fait pas varier la réponse au même message.",
        "Hors sujet : la délégation transfère une requête à un autre objet, elle ne modifie pas le comportement propre de l'objet."
      ]
    },
    {
      "q": "Une application web renvoie l'intégralité de la table clients lorsqu'un utilisateur saisit « ' OR 1=1 -- » dans le champ de connexion. Quel est le MEILLEUR contrôle préventif contre cette attaque ?",
      "choix": [
        "Une revue de code annuelle",
        "Un système de détection d'intrusion réseau",
        "Le chiffrement de la base de données au repos",
        "Les requêtes paramétrées et la validation des entrées"
      ],
      "reponse": 3,
      "explication": "Il s'agit d'une injection SQL. Les requêtes paramétrées empêchent l'interprétation des entrées comme du code SQL, et la validation des entrées la complète : c'est la défense préventive la plus efficace. Un IDS est détectif et non préventif, le chiffrement au repos ne protège pas contre des requêtes exécutées légitimement par l'application, et une revue annuelle est trop ponctuelle pour prévenir l'exploitation.",
      "difficulte": 1,
      "pourquoi": [
        "Hors phase et trop ponctuel : une revue annuelle ne prévient pas une exploitation quotidienne.",
        "Réponse détective, pas préventive : un IDS observe l'attaque sans l'empêcher.",
        "Techniquement vrai mais hors sujet : le chiffrement au repos ne bloque pas des requêtes exécutées légitimement par l'application.",
        "Bonne réponse : les requêtes paramétrées empêchent structurellement l'interprétation des entrées comme du SQL — c'est la prévention à la racine."
      ]
    },
    {
      "q": "Quelle distinction entre XSS et CSRF est CORRECTE ?",
      "choix": [
        "Les deux attaques sont identiques, seul le vecteur d'injection diffère",
        "XSS exécute un script chez la victime ; CSRF forge une requête en son nom",
        "XSS exploite la confiance du site envers le navigateur ; CSRF exécute un script chez la victime",
        "XSS ne concerne que les applications mobiles ; CSRF ne concerne que les APIs"
      ],
      "reponse": 1,
      "explication": "Le XSS injecte un script qui s'exécute dans le navigateur de la victime, abusant de la confiance de l'utilisateur envers le site. Le CSRF abuse de la confiance du site envers le navigateur : il fait émettre à un utilisateur déjà authentifié une requête qu'il n'a pas voulue. La troisième proposition inverse les deux définitions, et les deux attaques sont bien distinctes, avec des défenses différentes : encodage des sorties pour XSS, jetons anti-CSRF pour CSRF.",
      "difficulte": 2,
      "pourquoi": [
        "Absolu faux : les deux attaques sont distinctes, avec des défenses différentes.",
        "Bonne réponse : XSS exécute un script chez la victime ; CSRF fait émettre une requête non désirée par une victime authentifiée.",
        "Inversion des deux définitions : c'est le CSRF qui abuse de la confiance du site envers le navigateur.",
        "Restriction inventée : les deux attaques concernent toute application web."
      ]
    },
    {
      "q": "Un attaquant soumet une entrée de 5 000 caractères dans un champ prévu pour 256, ce qui lui permet d'écraser des zones mémoire adjacentes et d'exécuter du code arbitraire. De quelle vulnérabilité s'agit-il et quelle est la contre-mesure au niveau du CODE ?",
      "choix": [
        "Race condition ; utiliser des verrous",
        "Injection SQL ; utiliser des requêtes paramétrées",
        "Buffer overflow ; vérifier les bornes et la taille des entrées",
        "Covert channel ; chiffrer les communications"
      ],
      "reponse": 2,
      "explication": "Une entrée plus grande que l'espace alloué au tampon qui écrase la mémoire adjacente est un buffer overflow. La contre-mesure au niveau du code est la vérification systématique des bornes et de la taille des entrées (bounds checking). Les verrous répondent aux race conditions, les requêtes paramétrées à l'injection SQL, et le chiffrement ne traite pas les canaux cachés au niveau du code applicatif.",
      "difficulte": 1,
      "pourquoi": [
        "Mauvais diagnostic : la race condition concerne la concurrence temporelle, pas le dépassement de mémoire.",
        "Mauvais diagnostic : l'injection SQL passe par l'interprétation de requêtes, pas par l'écrasement mémoire.",
        "Bonne réponse : entrée dépassant le tampon écrasant la mémoire adjacente = buffer overflow ; la parade code est le bounds checking.",
        "Mauvais diagnostic : le covert channel est un canal de communication caché, sans rapport."
      ]
    },
    {
      "q": "Un programme vérifie les permissions d'un utilisateur sur un fichier, puis ouvre ce fichier quelques millisecondes plus tard. Un attaquant remplace le fichier par un lien symbolique vers /etc/shadow entre ces deux opérations. Comment s'appelle cette attaque ?",
      "choix": [
        "TOCTOU (time-of-check to time-of-use)",
        "Injection de commande (command injection)",
        "Buffer overflow",
        "Dirty read"
      ],
      "reponse": 0,
      "explication": "C'est une attaque TOCTOU, une forme de race condition qui exploite le délai entre la vérification de sécurité (time of check) et l'utilisation réelle de la ressource (time of use). La parade consiste à rendre les opérations atomiques et à revérifier au moment de l'usage. Le buffer overflow concerne la mémoire, l'injection de commande les entrées utilisateur, et la dirty read la concurrence transactionnelle en base de données.",
      "difficulte": 2,
      "pourquoi": [
        "Bonne réponse : l'écart entre le contrôle (time of check) et l'utilisation (time of use) définit l'attaque TOCTOU, une race condition.",
        "Mauvais diagnostic : aucune commande n'est injectée, c'est la fenêtre temporelle qui est exploitée.",
        "Mauvais diagnostic : le buffer overflow exploite la mémoire, pas le délai entre vérification et usage.",
        "Mauvais diagnostic : la dirty read est un problème transactionnel de base de données."
      ]
    },
    {
      "q": "Quelle affirmation décrit CORRECTEMENT la relation entre agrégation et inférence en sécurité des bases de données ?",
      "choix": [
        "L'inférence ne s'applique qu'aux bases relationnelles, l'agrégation qu'aux entrepôts de données",
        "L'inférence est un problème de sécurité, l'agrégation est l'attaque correspondante",
        "L'agrégation combine des données banales en information sensible ; l'inférence la déduit",
        "L'agrégation exige un accès privilégié, tandis que l'inférence exploite une faille d'injection"
      ],
      "reponse": 2,
      "explication": "L'agrégation est un problème de sécurité : la capacité de combiner des données non sensibles issues de sources séparées pour créer une information sensible. L'inférence est l'attaque : l'adversaire rassemble des éléments peu sensibles pour déduire une information de sensibilité supérieure. La deuxième proposition inverse les termes, et les première et dernière inventent des restrictions de périmètre ou des mécanismes d'accès qui n'existent pas : les deux notions s'appliquent à tout type de base et à des utilisateurs légitimes.",
      "difficulte": 3,
      "pourquoi": [
        "Restriction inventée : les deux notions s'appliquent à tout type de base ou d'entrepôt de données.",
        "Inversion : l'agrégation est le problème, l'inférence est l'attaque — pas l'inverse.",
        "Bonne réponse : l'agrégation combine des données non sensibles en information sensible ; l'inférence est l'attaque qui déduit l'information supérieure.",
        "Mécanismes inventés : aucune des deux ne requiert de privilège ni d'injection — elles exploitent des accès légitimes."
      ]
    },
    {
      "q": "Quelle propriété ACID est violée lorsqu'une transaction lit une valeur écrite par une autre transaction qui n'a pas encore été validée (dirty read) ?",
      "choix": [
        "Durability",
        "Atomicity",
        "Consistency",
        "Isolation"
      ],
      "reponse": 3,
      "explication": "La dirty read viole la propriété d'Isolation, qui exige que les transactions concurrentes n'interfèrent pas entre elles : une transaction ne doit pas voir les modifications non validées d'une autre. L'atomicité garantit le tout-ou-rien, la cohérence le respect des règles d'intégrité, et la durabilité la persistance des transactions validées.",
      "difficulte": 2,
      "pourquoi": [
        "Hors sujet : la durabilité garantit la persistance des transactions validées.",
        "Hors sujet : l'atomicité garantit le tout-ou-rien d'une transaction, pas l'étanchéité entre transactions.",
        "Hors sujet : la cohérence porte sur le respect des règles d'intégrité de la base.",
        "Bonne réponse : lire des données non validées d'une autre transaction viole l'Isolation — définition même de la dirty read."
      ]
    },
    {
      "q": "Quel mécanisme permet à une base de données multiniveau de stocker deux enregistrements portant la même clé primaire à des niveaux de classification différents ?",
      "choix": [
        "La polyinstantiation",
        "Le partitionnement",
        "La réplication",
        "La normalisation"
      ],
      "reponse": 0,
      "explication": "La polyinstantiation crée plusieurs instances d'une même donnée, avec le même identifiant, à des niveaux de sécurité différents. Chaque utilisateur ne voit que la version correspondant à son habilitation, ce qui empêche l'inférence de l'existence de données classifiées. La normalisation structure le schéma, le partitionnement répartit les données pour la performance, et la réplication copie les données pour la disponibilité.",
      "difficulte": 2,
      "pourquoi": [
        "Bonne réponse : la polyinstantiation stocke plusieurs enregistrements de même clé à des niveaux de classification différents.",
        "Hors sujet : le partitionnement répartit les données pour la performance, sans notion de classification.",
        "Hors sujet : la réplication copie les données pour la disponibilité, pas pour la confidentialité multiniveau.",
        "Hors sujet : la normalisation structure le schéma et élimine la redondance — l'inverse de la coexistence recherchée."
      ]
    },
    {
      "q": "Un développeur a laissé dans l'application de production un mécanisme caché lui permettant de contourner l'authentification « pour faciliter la maintenance ». Comment ce mécanisme est-il désigné et quelle est la position correcte de l'organisation ?",
      "choix": [
        "Un covert channel ; il est acceptable s'il est documenté",
        "Une backdoor (maintenance hook) à bannir de la production",
        "Un trapdoor ; il est acceptable si l'accès est chiffré",
        "Un RASP ; il doit être conservé pour la supervision"
      ],
      "reponse": 1,
      "explication": "Un mécanisme caché contournant les contrôles d'accès est une backdoor, aussi appelée trapdoor ou maintenance hook. Même créée avec de bonnes intentions, elle contourne les contrôles d'accès et peut être découverte et exploitée par un attaquant : elle doit être interdite par la politique et retirée avant la mise en production. Un covert channel est un canal de communication violant la politique, et le RASP est un agent de protection légitime intégré à l'application.",
      "difficulte": 2,
      "pourquoi": [
        "Mauvais terme et faux principe : un covert channel est un canal de communication, et documenter une porte dérobée ne la rend pas acceptable.",
        "Bonne réponse : c'est une backdoor (maintenance hook), à interdire par la politique et à retirer avant la production car elle contourne les contrôles d'accès.",
        "Piège de vocabulaire partiellement vrai : trapdoor est bien un synonyme, mais aucun chiffrement ne rend une backdoor acceptable.",
        "Contresens : le RASP est un mécanisme de protection légitime, pas un contournement caché."
      ]
    },
    {
      "q": "Quelle technique d'analyse examine le code source SANS exécuter le programme ?",
      "choix": [
        "DAST",
        "SAST",
        "Fuzzing",
        "IAST"
      ],
      "reponse": 1,
      "explication": "Le SAST (static application security testing) examine le code sans exécuter le programme, souvent avant compilation, pour détecter défauts et violations de politique de codage. Le DAST évalue le programme en cours d'exécution, l'IAST combine exécution et accès au code source, et le fuzzing est une technique dynamique qui injecte des entrées malformées dans un programme en fonctionnement.",
      "difficulte": 1,
      "pourquoi": [
        "Inversion : le DAST évalue l'application en cours d'exécution, sans le code.",
        "Bonne réponse : le SAST analyse le code source sans exécuter le programme, souvent avant compilation.",
        "Hors sujet : le fuzzing injecte des entrées malformées dans un programme en fonctionnement.",
        "Piège de proximité : l'IAST combine exécution et accès au code — il exige donc l'exécution."
      ]
    },
    {
      "q": "Une équipe sécurité veut inventorier les composants open source d'une application, leurs versions, leurs licences et leurs vulnérabilités connues. Quel type d'outil doit-elle utiliser ?",
      "choix": [
        "Dynamic application security testing (DAST)",
        "Runtime application self-protection (RASP)",
        "Software composition analysis (SCA)",
        "Web application firewall (WAF)"
      ],
      "reponse": 2,
      "explication": "La SCA identifie les composants open source et tiers d'une base de code, catalogue leurs versions et licences, et signale les vulnérabilités connues : c'est l'outil central de la gestion du risque de supply chain logicielle. Le DAST teste l'application en exécution sans inventorier les dépendances, le RASP protège l'application à l'exécution, et le WAF filtre le trafic web.",
      "difficulte": 1,
      "pourquoi": [
        "Hors périmètre : le DAST teste l'application en exécution mais n'inventorie pas les dépendances.",
        "Hors périmètre : le RASP protège l'application à l'exécution, il n'analyse pas la composition.",
        "Bonne réponse : la SCA inventorie les composants open source, leurs versions, licences et vulnérabilités connues.",
        "Hors périmètre : le WAF filtre le trafic web, sans visibilité sur les composants du code."
      ]
    },
    {
      "q": "Votre organisation s'apprête à acheter un logiciel développé sur mesure par un prestataire externe. Quelle est la MEILLEURE pratique pour évaluer sa sécurité avant l'achat ?",
      "choix": [
        "Exiger par contrat un audit de sécurité externe avant l'achat",
        "Se fier aux certifications génériques du prestataire",
        "Attendre la mise en production pour réaliser un test d'intrusion",
        "Exiger uniquement une démonstration fonctionnelle du produit"
      ],
      "reponse": 0,
      "explication": "Pour du logiciel tiers sur mesure, la meilleure pratique consiste à faire réaliser un audit et une évaluation de sécurité par un tiers indépendant, inscrits dans le contrat, la réussite de l'audit conditionnant la finalisation de l'achat. Les certifications générales sont un indicateur mais ne couvrent pas ce développement spécifique, une démonstration fonctionnelle ne dit rien de la sécurité, et attendre la production expose l'organisation à des risques évitables.",
      "difficulte": 2,
      "pourquoi": [
        "Bonne réponse : un audit de sécurité indépendant, contractualisé et conditionnant l'achat, donne une assurance vérifiable avant l'engagement.",
        "Trop faible : des certifications génériques ne disent rien de la sécurité de ce développement spécifique.",
        "Hors phase : tester après la mise en production expose l'organisation à des risques évitables.",
        "Trop étroit : une démonstration fonctionnelle ne révèle rien des vulnérabilités."
      ]
    },
    {
      "q": "Quelles sont les causes PRINCIPALES des brèches de sécurité dans le cloud ?",
      "choix": [
        "Les attaques par déni de service distribué",
        "Les vulnérabilités zero-day des hyperviseurs",
        "Les pannes matérielles des centres de données",
        "Les erreurs de configuration côté client"
      ],
      "reponse": 3,
      "explication": "Les premières causes de brèches cloud restent les misconfigurations, le manque de visibilité sur les paramètres d'accès et les contrôles d'accès insuffisants : des erreurs côté client du modèle de responsabilité partagée. Les zero-days d'hyperviseur sont rares, les pannes matérielles relèvent de la disponibilité gérée par le fournisseur, et les DDoS, bien que réels, ne sont pas la cause principale des brèches de données.",
      "difficulte": 2,
      "pourquoi": [
        "Techniquement vrai mais pas la cause principale : les DDoS affectent la disponibilité, pas les fuites de données.",
        "Techniquement réel mais marginal : les zero-days d'hyperviseur sont rares et côté fournisseur.",
        "Hors sujet : les pannes matérielles relèvent de la disponibilité, gérée par le fournisseur.",
        "Bonne réponse : misconfigurations, manque de visibilité et contrôles d'accès insuffisants — erreurs côté client — sont les premières causes de brèches cloud."
      ]
    },
    {
      "q": "Quelle mesure est FONDAMENTALE pour sécuriser l'utilisation d'une API ?",
      "choix": [
        "Limiter l'API aux seuls appels internes",
        "Publier la documentation complète de l'API",
        "Attribuer une clé API statique unique partagée par tous les clients",
        "La validation des paramètres reçus avant traitement"
      ],
      "reponse": 3,
      "explication": "La parameter validation est la mesure fondamentale : elle garantit que tout paramètre reçu par l'API est contrôlé contre les valeurs malformées, invalides ou malveillantes avant traitement. La documentation aide les développeurs mais ne protège pas, restreindre aux appels internes n'est souvent pas possible et ne valide rien, et une clé statique partagée n'authentifie personne individuellement, ne se révoque pas sans casser tous les clients et ne valide aucune entrée.",
      "difficulte": 1,
      "pourquoi": [
        "Irréaliste et insuffisant : restreindre aux appels internes n'est souvent pas possible et ne valide rien.",
        "Utile mais pas un contrôle : la documentation aide les développeurs, elle ne protège rien.",
        "Contre-mesure illusoire : une clé statique partagée n'authentifie personne individuellement et ne se révoque pas sans casser tous les clients.",
        "Bonne réponse : la parameter validation contrôle chaque valeur reçue avant traitement — c'est le contrôle fondamental d'une API."
      ]
    },
    {
      "q": "Quelle est la différence entre un standard et une guideline de codage sécurisé ?",
      "choix": [
        "Une guideline devient automatiquement un standard après un an d'application",
        "Les deux termes sont interchangeables",
        "Le standard est obligatoire ; la guideline est une recommandation flexible",
        "Un standard est recommandé, une guideline est obligatoire"
      ],
      "reponse": 2,
      "explication": "Un standard est une règle obligatoire : il doit réduire le risque d'un type précis de vulnérabilité, être applicable à l'ensemble des développements de l'organisation et être vérifiable. Une guideline est une recommandation qui laisse de la flexibilité, comme des commentaires cohérents ou des fonctions courtes. La dernière proposition inverse les définitions, les deux notions restent bien distinctes, et aucune promotion automatique ne transforme une recommandation en règle obligatoire : cela exige une décision de gouvernance.",
      "difficulte": 1,
      "pourquoi": [
        "Mécanisme inventé : aucune promotion automatique n'existe — élever une guideline en standard est une décision de gouvernance.",
        "Absolu faux : les deux notions sont distinctes par leur caractère contraignant.",
        "Bonne réponse : un standard est obligatoire, vérifiable et applicable à tous les développements ; une guideline reste une recommandation flexible.",
        "Inversion des définitions : c'est le standard qui est obligatoire."
      ]
    },
    {
      "q": "Une application affiche la trace de pile complète et la requête SQL en erreur lorsqu'une exception survient. Quel est le risque PRINCIPAL et la correction appropriée ?",
      "choix": [
        "Fuite d'informations vers l'attaquant ; message générique à afficher",
        "Vulnérabilité d'injection SQL ; déployer un WAF en urgence",
        "Risque de déni de service ; augmenter les ressources serveur",
        "Perte de données ; mettre en place des sauvegardes"
      ],
      "reponse": 0,
      "explication": "Des messages d'erreur détaillés révèlent la structure interne de l'application, la technologie utilisée et parfois le schéma de la base : autant d'informations précieuses pour un attaquant. La bonne pratique est d'afficher un message générique à l'utilisateur, de journaliser les détails complets vers un dépôt centralisé, et d'échouer de façon sûre. Il ne s'agit ni d'un problème de capacité ni de sauvegarde, et afficher une requête en erreur n'est pas en soi une injection : c'est une fuite d'informations qui la facilite.",
      "difficulte": 1,
      "pourquoi": [
        "Bonne réponse : les détails techniques exposés renseignent l'attaquant ; il faut un message générique côté client et la journalisation interne des détails.",
        "Confusion symptôme/vulnérabilité : afficher une requête en erreur n'est pas une injection SQL — c'est une fuite d'informations qui la faciliterait.",
        "Mauvais diagnostic : rien n'indique un problème de capacité ou de disponibilité.",
        "Mauvais diagnostic : aucune donnée n'est perdue, elle est divulguée."
      ]
    },
    {
      "q": "Selon les pratiques de codage sécurisé de l'OWASP, lequel de ces événements devrait IMPÉRATIVEMENT être journalisé ?",
      "choix": [
        "Chaque affichage de page réussi de tous les utilisateurs",
        "Les échecs d'authentification et les accès administrateur",
        "Uniquement les redémarrages du serveur",
        "Le contenu intégral des mots de passe saisis"
      ],
      "reponse": 1,
      "explication": "L'OWASP recommande de journaliser notamment les échecs de validation d'entrée et de sortie, les tentatives d'authentification et surtout leurs échecs, les échecs de contrôle d'accès, les jetons de session invalides, les exceptions, les erreurs TLS et cryptographiques, et l'usage des privilèges d'administration. Journaliser chaque page vue noie le signal, enregistrer les mots de passe est une faute grave, et se limiter aux redémarrages est très insuffisant.",
      "difficulte": 2,
      "pourquoi": [
        "Excès inverse : journaliser chaque page vue noie le signal utile sous le bruit.",
        "Bonne réponse : échecs de validation, échecs d'authentification et usage des privilèges d'administration sont les événements de sécurité à journaliser selon l'OWASP.",
        "Trop étroit : se limiter aux redémarrages ignore l'essentiel des signaux d'attaque.",
        "Faute grave : enregistrer des mots de passe en clair crée une vulnérabilité majeure."
      ]
    },
    {
      "q": "Quelle affirmation décrit CORRECTEMENT la certification et l'accréditation d'un système ?",
      "choix": [
        "L'accréditation est délivrée par l'éditeur du logiciel",
        "Les deux termes désignent l'audit annuel de conformité",
        "Certification = analyse technique ; accréditation = décision de l'autorité désignée",
        "La certification est la décision d'exploitation ; l'accréditation est l'analyse technique"
      ],
      "reponse": 2,
      "explication": "La certification est l'analyse technique de sécurité complète vérifiant que le système répond aux exigences applicables. L'accréditation est la déclaration formelle par une autorité d'accréditation désignée (DAA) que le système est approuvé pour fonctionner à un niveau de risque acceptable. La dernière proposition inverse les définitions ; il ne s'agit ni d'un audit annuel ni d'une décision de l'éditeur.",
      "difficulte": 3,
      "pourquoi": [
        "Fausse attribution : l'accréditation émane de l'autorité désignée de l'organisation, jamais de l'éditeur.",
        "Confusion de processus : il ne s'agit pas d'un audit annuel de conformité.",
        "Bonne réponse : certification = analyse technique complète ; accréditation = approbation formelle d'exploitation par l'autorité désignée à un niveau de risque acceptable.",
        "Inversion des définitions : la certification est l'analyse technique, pas la décision."
      ]
    },
    {
      "q": "Une organisation autorise ses employés métier à créer eux-mêmes des petites applications avec des outils low-code, sans supervision de l'IT. Quel risque PRINCIPAL ce phénomène de « citizen programmers » présente-t-il ?",
      "choix": [
        "Les applications low-code ne peuvent pas s'intégrer à l'annuaire d'entreprise",
        "Le développement ad hoc est difficile à gérer et généralement dépourvu de considérations de sécurité",
        "Les licences des outils low-code sont coûteuses",
        "Le code généré par les outils low-code est de qualité inférieure à celui des développeurs professionnels"
      ],
      "reponse": 1,
      "explication": "Les citizen programmers codifient leurs connaissances métier de façon ad hoc : le résultat est difficile à gérer, échappe au SDLC et aux contrôles, et est généralement dépourvu de considérations de sécurité — validation des entrées, gestion des accès, journalisation. Le coût des licences est un enjeu financier secondaire, l'intégration à l'annuaire est un point technique généralement résoluble, et la qualité du code n'est pas le cœur du problème : c'est l'absence de gouvernance et de contrôles de sécurité qui crée le risque.",
      "difficulte": 2,
      "pourquoi": [
        "Trop étroit : l'intégration à l'annuaire est un point technique généralement résoluble.",
        "Bonne réponse : le développement ad hoc hors SDLC, sans considérations de sécurité, est le risque central du citizen development.",
        "Techniquement vrai mais secondaire : le coût des licences est un enjeu financier, pas le risque de sécurité principal.",
        "Débat de qualité hors sujet : le problème est l'absence de gouvernance et de contrôles, pas le niveau des développeurs."
      ]
    },
    {
      "q": "Dans une architecture microservices, quelle combinaison de contrôles réduit le MIEUX la surface d'attaque liée à la multiplication des APIs ?",
      "choix": [
        "La désactivation du chiffrement interne pour améliorer les performances",
        "Un mot de passe partagé entre tous les services et des logs locaux",
        "L'exposition directe de chaque microservice sur Internet pour simplifier l'architecture",
        "Passerelle API, TLS entre services et posture zero trust"
      ],
      "reponse": 3,
      "explication": "La bonne combinaison associe une passerelle API qui centralise l'authentification, l'autorisation et la limitation de débit, du chiffrement TLS pour les communications entre services, et une approche zero trust où aucun service ne fait confiance à un autre par défaut. Un secret partagé crée un point de compromission unique, désactiver le chiffrement interne expose les flux, et l'exposition directe multiplie les portes d'entrée.",
      "difficulte": 3,
      "pourquoi": [
        "Contresens : désactiver le chiffrement interne expose tout le trafic est-ouest.",
        "Anti-modèle : un secret partagé crée un point de compromission unique et les logs locaux se dispersent.",
        "Contresens : exposer chaque microservice sur Internet multiplie les portes d'entrée.",
        "Bonne réponse : passerelle API centralisée, TLS entre services et zero trust réduisent ensemble la surface d'attaque des APIs."
      ]
    },
    {
      "q": "Quel terme désigne l'exécution, par la victime, d'un ensemble d'instructions choisi par l'attaquant à la suite de l'exploitation d'une vulnérabilité comme un buffer overflow ?",
      "choix": [
        "Exécution de code arbitraire",
        "Data mining (fouille de données)",
        "Dirty read",
        "Query attack"
      ],
      "reponse": 0,
      "explication": "L'exécution de code arbitraire désigne le fait qu'un attaquant parvienne à faire exécuter au processeur un ensemble alternatif d'instructions de son choix, conséquence typique d'un buffer overflow ou d'une entrée malformée non contrôlée. La dirty read est un problème de concurrence transactionnelle, la query attack un contournement des contrôles d'une base via des requêtes, et le data mining une technique légitime d'analyse de données.",
      "difficulte": 1,
      "pourquoi": [
        "Bonne réponse : faire exécuter au processeur des instructions choisies par l'attaquant est l'exécution de code arbitraire, suite typique d'un buffer overflow.",
        "Hors sujet : le data mining est une technique d'analyse légitime.",
        "Hors sujet : la dirty read est un problème de concurrence transactionnelle.",
        "Hors sujet : la query attack contourne les contrôles d'une base par des requêtes, sans exécution de code."
      ]
    },
    {
      "q": "Pourquoi le code compilé présente-t-il un compromis de sécurité par rapport au code interprété ?",
      "choix": [
        "Le code compilé garantit l'intégrité car le compilateur le signe automatiquement",
        "Le code interprété est protégé par l'obfuscation intégrée de l'interpréteur",
        "Le binaire résiste mieux à la manipulation, mais masque mieux les backdoors",
        "Le code compilé est toujours moins sécurisé que le code interprété"
      ],
      "reponse": 2,
      "explication": "Le code compilé, distribué en binaire, est généralement moins exposé à la manipulation directe par un tiers ; mais comme le code source n'est pas visible dans la forme compilée, il est aussi plus difficile pour les relecteurs d'y détecter des backdoors ou d'autres failles. La compilation n'implique aucune signature — le code signing est un mécanisme distinct et volontaire — et les interpréteurs n'obfusquent rien : le code interprété est lisible par quiconque y accède.",
      "difficulte": 3,
      "pourquoi": [
        "Mécanisme inventé : la compilation ne signe rien — le code signing est un dispositif distinct et volontaire.",
        "Mécanisme inventé : les interpréteurs n'obfusquent rien ; le code interprété est lisible par quiconque y accède.",
        "Bonne réponse : le binaire compilé résiste mieux à la manipulation directe, mais l'absence de code source visible rend les backdoors plus difficiles à détecter.",
        "Absolu faux : aucune forme n'est intrinsèquement moins sécurisée dans tous les cas."
      ]
    },
    {
      "q": "Votre organisation dépend d'une application critique développée par un petit éditeur dont la santé financière est incertaine, et le contrat ne donne pas accès au code source. Quelle est la MEILLEURE mesure pour garantir la continuité si l'éditeur fait faillite ?",
      "choix": [
        "Négocier un software escrow libérant le code source",
        "Exiger un SLA renforcé avec pénalités financières",
        "Souscrire une assurance couvrant les pertes d'exploitation",
        "Décompiler le logiciel pour reconstituer le code source"
      ],
      "reponse": 0,
      "explication": "Le software escrow place le code source chez un tiers de confiance, avec des conditions de libération contractuelles comme la faillite de l'éditeur ou l'arrêt du support : le client peut alors reprendre la maintenance. L'assurance compense financièrement mais ne permet pas de maintenir l'application ; un SLA ne sert à rien si l'éditeur disparaît ; et la décompilation viole généralement la licence et donne un résultat inexploitable.",
      "difficulte": 2,
      "pourquoi": [
        "Bonne réponse : le software escrow libère le code source au client selon des conditions contractuelles comme la faillite de l'éditeur.",
        "Inopérant : un SLA renforcé ne sert à rien si l'éditeur a disparu.",
        "Compensation financière seulement : l'assurance ne permet pas de maintenir l'application.",
        "Illégal et inefficace : la décompilation viole généralement la licence et produit un résultat inexploitable."
      ]
    },
    {
      "q": "Que garantit la signature numérique d'un exécutable (code signing) vérifiée avec succès par le système du client ?",
      "choix": [
        "Le code sera automatiquement mis à jour par l'éditeur",
        "Le code a été testé et approuvé par l'autorité de certification",
        "Le code est exempt de vulnérabilités et de malveillance",
        "Le code est intègre et provient de l'éditeur du certificat"
      ],
      "reponse": 3,
      "explication": "Le code signing garantit l'intégrité (le hash correspond, donc le code n'a pas été altéré depuis la signature) et l'origine (le certificat authentifie l'éditeur). Il ne dit rien de la qualité ni de l'innocuité du code : un binaire signé peut être vulnérable, et même malveillant si le certificat de signature a été volé. La CA délivre le certificat mais ne teste jamais le code, et la signature n'implique aucun mécanisme de mise à jour.",
      "difficulte": 2,
      "pourquoi": [
        "Mécanisme inventé : la signature n'implique aucun dispositif de mise à jour.",
        "Faux rôle : la CA délivre le certificat mais ne teste jamais le code.",
        "Surestimation classique : la signature ne dit rien de la qualité ni de l'innocuité du code.",
        "Bonne réponse : la signature vérifiée garantit l'intégrité depuis la signature et l'origine identifiée par le certificat — rien de plus."
      ]
    },
    {
      "q": "Quels sont les DEUX composants fondamentaux d'un expert system ?",
      "choix": [
        "Le référentiel de signatures et le moteur d'analyse heuristique",
        "La knowledge base (règles SI-ALORS) et l'inference engine",
        "Le réseau de neurones et les données d'entraînement",
        "La base de données relationnelle et le langage SQL"
      ],
      "reponse": 1,
      "explication": "Un expert system se compose de la knowledge base, qui codifie le savoir d'experts humains sous forme de règles si-alors, et de l'inference engine, qui applique ces règles aux faits observés pour produire des conclusions. Les réseaux de neurones et les données d'entraînement relèvent du machine learning, une approche différente, et les signatures/heuristiques décrivent un antimalware.",
      "difficulte": 1,
      "pourquoi": [
        "Confusion d'outil : signatures et heuristiques décrivent un antimalware.",
        "Bonne réponse : la knowledge base de règles SI-ALORS et l'inference engine sont les deux composants fondamentaux d'un expert system.",
        "Confusion de famille : réseau de neurones et données d'entraînement relèvent du machine learning.",
        "Hors sujet : une base relationnelle et SQL ne constituent pas un système expert."
      ]
    },
    {
      "q": "Un attaquant parvient à insérer des échantillons soigneusement choisis dans les données servant à entraîner le modèle de machine learning de détection de fraude d'une banque, afin que ses futures fraudes soient classées comme légitimes. Comment s'appelle cette attaque ?",
      "choix": [
        "Data poisoning",
        "Adversarial example",
        "Inference attack",
        "Model inversion"
      ],
      "reponse": 0,
      "explication": "Le data poisoning, l'empoisonnement des données, consiste à corrompre les données d'ENTRAÎNEMENT pour biaiser durablement le comportement du modèle. L'adversarial example manipule une entrée au moment de l'INFÉRENCE, sans toucher à l'entraînement ; la model inversion cherche à reconstruire les données d'entraînement à partir du modèle ; et l'inference attack, au sens bases de données, déduit des informations sensibles à partir d'éléments moins sensibles.",
      "difficulte": 3,
      "pourquoi": [
        "Bonne réponse : corrompre les données d'ENTRAÎNEMENT pour biaiser durablement le modèle est le data poisoning.",
        "Piège de phase : l'adversarial example manipule une entrée au moment de l'inférence, sans toucher à l'entraînement.",
        "Confusion de domaine : l'inference attack déduit des informations sensibles, elle ne modifie pas le modèle.",
        "Piège de proximité : la model inversion reconstruit les données d'entraînement à partir du modèle, elle ne les corrompt pas."
      ]
    },
    {
      "q": "Une équipe Scrum livre un incrément toutes les deux semaines. Le RSSI veut s'assurer que la sécurité est prise en compte sans casser le rythme des sprints. Quelle est la MEILLEURE approche ?",
      "choix": [
        "Transférer la responsabilité de la sécurité à l'équipe SOC",
        "Critères de sécurité dans la Definition of Done, plus abuse cases",
        "Planifier un test d'intrusion annuel après la version majeure",
        "Insérer une phase de sécurité dédiée d'une semaine après chaque sprint"
      ],
      "reponse": 1,
      "explication": "En Agile, la sécurité doit être intégrée dans le flux normal de travail : des critères de sécurité dans la Definition of Done garantissent qu'aucune user story n'est « terminée » sans validation sécurité, et les abuse cases (ou evil user stories) forcent l'équipe à penser comme un attaquant dès le backlog. Un pentest annuel est trop tardif et ponctuel pour des livraisons bimensuelles ; une phase dédiée après chaque sprint recrée le goulot d'étranglement que l'Agile cherche à éliminer ; et déléguer au SOC contredit le principe de responsabilité partagée de la sécurité.",
      "difficulte": 2,
      "pourquoi": [
        "Contresens organisationnel : déléguer au SOC contredit la responsabilité partagée de la sécurité.",
        "Bonne réponse : critères de sécurité dans la Definition of Done et abuse cases au backlog intègrent la sécurité au flux Agile sans le casser.",
        "Hors phase et trop ponctuel : un pentest annuel ne suit pas un rythme de livraison bimensuel.",
        "Anti-modèle : une phase dédiée après chaque sprint recrée le goulot d'étranglement que l'Agile élimine."
      ]
    },
    {
      "q": "Votre organisation conçoit une nouvelle application de paiement. Lors de la phase de conception, quelle activité de sécurité devriez-vous mener EN PREMIER ?",
      "choix": [
        "Une revue de code manuelle ligne par ligne",
        "Un scan DAST de l'environnement de préproduction",
        "Un audit de conformité PCI DSS de la production",
        "Un threat modeling (STRIDE) de l'architecture"
      ],
      "reponse": 3,
      "explication": "Le threat modeling est l'activité de sécurité propre à la phase de conception : il identifie les menaces (Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege avec STRIDE) sur l'architecture avant qu'une ligne de code ne soit écrite, quand les corrections coûtent le moins cher. Le DAST exige une application en exécution, la revue de code exige du code écrit, et un audit PCI DSS s'applique à un environnement de production existant : toutes ces activités viennent plus tard dans le cycle.",
      "difficulte": 2,
      "pourquoi": [
        "Hors phase : la revue de code exige du code déjà écrit.",
        "Hors phase : le DAST exige une application en cours d'exécution, inexistante en conception.",
        "Hors phase : un audit PCI DSS s'applique à un environnement de production existant.",
        "Bonne réponse : le threat modeling (par exemple STRIDE) est l'activité de sécurité propre à la phase de conception, quand corriger coûte le moins cher."
      ]
    },
    {
      "q": "Le RSSI veut empêcher que du code contenant des vulnérabilités critiques atteigne la production, sans ralentir les dizaines de déploiements quotidiens de l'équipe DevOps. Quelle est la MEILLEURE solution ?",
      "choix": [
        "Réduire la fréquence des déploiements à une fois par mois",
        "Autoriser les déploiements et corriger les vulnérabilités trouvées lors du pentest trimestriel",
        "Intégrer des outils SAST et SCA automatisés dans le pipeline CI/CD avec des seuils bloquants (security gates)",
        "Exiger une revue manuelle du comité sécurité avant chaque déploiement"
      ],
      "reponse": 2,
      "explication": "Des contrôles automatisés (SAST, SCA) intégrés au pipeline, avec des security gates qui font échouer le build au-delà d'un seuil de criticité, appliquent la sécurité à la vitesse du DevOps : c'est l'essence du DevSecOps. Une revue manuelle systématique est incompatible avec des dizaines de déploiements par jour ; attendre le pentest trimestriel laisse les vulnérabilités en production pendant des mois ; et réduire la fréquence des livraisons sacrifie la valeur métier au lieu d'automatiser la sécurité.",
      "difficulte": 2,
      "pourquoi": [
        "Sacrifice du business : réduire la fréquence des livraisons détruit la valeur au lieu d'automatiser la sécurité.",
        "Hors phase : attendre le pentest trimestriel laisse les vulnérabilités en production pendant des mois.",
        "Bonne réponse : SAST et SCA automatisés avec des security gates bloquants appliquent la sécurité à la vitesse du DevOps.",
        "Irréaliste à l'échelle : une revue manuelle systématique est incompatible avec des dizaines de déploiements quotidiens."
      ]
    },
    {
      "q": "Une équipe provisionne toute son infrastructure cloud via des templates Infrastructure as Code (IaC). Quel est le MEILLEUR moyen de prévenir les erreurs de configuration de sécurité en production ?",
      "choix": [
        "Restreindre l'IaC aux environnements de test uniquement",
        "Auditer manuellement la console cloud chaque trimestre",
        "Scanner les templates IaC avant déploiement",
        "Chiffrer les templates IaC dans le dépôt de code"
      ],
      "reponse": 2,
      "explication": "L'IaC permet précisément de traiter la configuration comme du code : l'analyser automatiquement avant le déploiement (policy as code) détecte les buckets publics, ports ouverts ou chiffrements absents avant qu'ils n'existent en production. Un audit trimestriel manuel est détectif et tardif alors que les misconfigurations sont la première cause de brèches cloud ; limiter l'IaC aux tests supprime ses bénéfices de cohérence ; et chiffrer les templates protège leur confidentialité mais ne corrige en rien leur contenu.",
      "difficulte": 3,
      "pourquoi": [
        "Contresens : restreindre l'IaC aux tests supprime ses bénéfices de cohérence sans réduire le risque.",
        "Détectif et tardif : un audit trimestriel manuel découvre les erreurs après exposition.",
        "Bonne réponse : scanner les templates IaC avant déploiement (policy as code) bloque les misconfigurations avant qu'elles n'existent en production.",
        "Hors sujet : chiffrer les templates protège leur confidentialité, pas la validité de leur contenu."
      ]
    },
    {
      "q": "Un développeur a poussé par erreur une clé API de production dans le dépôt Git de l'entreprise, puis a supprimé le fichier dans un commit suivant. Que devez-vous faire EN PREMIER ?",
      "choix": [
        "Révoquer immédiatement la clé exposée et en générer une nouvelle",
        "Former le développeur aux bonnes pratiques de gestion des secrets",
        "Réécrire l'historique Git pour effacer toute trace du fichier",
        "Activer l'authentification à deux facteurs sur le dépôt"
      ],
      "reponse": 0,
      "explication": "Un secret commité doit être considéré comme compromis : l'historique Git le conserve même après suppression du fichier, et il a pu être cloné ou indexé entre-temps. La première action est donc de révoquer la clé et d'en émettre une nouvelle, ce qui neutralise le risque. Réécrire l'historique est un nettoyage utile mais ne protège pas contre les copies déjà faites ; la formation et le MFA sont des mesures préventives pertinentes, mais elles n'éliminent pas le danger immédiat de la clé encore valide.",
      "difficulte": 2,
      "pourquoi": [
        "Bonne réponse : la clé est réputée compromise — la révoquer et en générer une nouvelle neutralise le risque immédiat.",
        "Préventif hors phase : la formation n'agit pas sur la clé encore valide.",
        "Nettoyage utile mais insuffisant : réécrire l'historique n'annule pas les copies et clones déjà réalisés.",
        "Préventif hors phase : le MFA du dépôt ne révoque pas le secret exposé."
      ]
    },
    {
      "q": "Quelle est la MEILLEURE pratique pour fournir des identifiants de base de données aux jobs d'un pipeline CI/CD ?",
      "choix": [
        "Les stocker dans un fichier de configuration du dépôt, accessible aux seuls développeurs",
        "Les coder en dur dans les scripts de build pour éviter les erreurs de saisie",
        "Les transmettre par messagerie chiffrée au responsable des déploiements",
        "Les injecter à l'exécution depuis un vault, avec identifiants éphémères et rotation"
      ],
      "reponse": 3,
      "explication": "Un secrets manager centralisé injecte les identifiants au moment de l'exécution, sans qu'ils apparaissent jamais dans le code ou le dépôt ; les identifiants dynamiques à courte durée de vie et la rotation automatique réduisent la fenêtre d'exploitation en cas de fuite et fournissent un audit centralisé. Tout stockage dans le dépôt, même « restreint », expose les secrets à chaque clone et à l'historique ; le codage en dur est l'anti-pattern classique détecté par les scanners ; et la transmission manuelle ne s'automatise pas et disperse les secrets.",
      "difficulte": 2,
      "pourquoi": [
        "Exposition garantie : tout secret dans le dépôt est visible de chaque clone et de l'historique.",
        "Anti-pattern classique : les secrets codés en dur sont la cible première des scanners et des attaquants.",
        "Non industrialisable : la transmission manuelle disperse les secrets et ne s'automatise pas.",
        "Bonne réponse : l'injection à l'exécution depuis un vault, avec identifiants éphémères et rotation automatique, élimine la persistance des secrets et centralise l'audit."
      ]
    },
    {
      "q": "Après un incident de type SolarWinds, votre organisation craint qu'un attaquant compromette le serveur de build pour injecter du code malveillant dans des livrables ensuite signés légitimement. Quel ensemble de contrôles répond le MIEUX à ce risque ?",
      "choix": [
        "Chiffrer le code source au repos dans le dépôt",
        "Durcir et isoler le build, avec attestations de provenance vérifiables",
        "Déployer un WAF devant les applications produites",
        "Augmenter la couverture des tests unitaires et exiger deux relecteurs par pull request"
      ],
      "reponse": 1,
      "explication": "L'attaque visait la chaîne de build elle-même : le code source était sain, mais le binaire produit ne l'était plus. La réponse est de traiter le pipeline comme un système critique : environnement de build durci, éphémère et isolé, accès à privilèges minimaux, et attestations de provenance (à la manière de SLSA) qui permettent de vérifier qu'un artefact provient bien du bon code source et du bon processus. Les revues de code et tests unitaires ne voient pas une injection post-compilation ; le chiffrement du dépôt et un WAF ne protègent pas le processus de build.",
      "difficulte": 3,
      "pourquoi": [
        "Hors sujet : chiffrer le dépôt ne protège pas le processus de build.",
        "Bonne réponse : durcir et isoler l'environnement de build et produire des attestations de provenance vérifiables (approche SLSA) protège la chaîne de build elle-même.",
        "Hors sujet : un WAF protège les applications en production, pas le pipeline qui les fabrique.",
        "Techniquement vrai mais hors cible : revues et tests ne voient pas une injection réalisée APRÈS la compilation."
      ]
    },
    {
      "q": "Lors de la divulgation de la vulnérabilité Log4Shell, une organisation a mis trois semaines à identifier lesquelles de ses 400 applications utilisaient Log4j. Quel artefact aurait le PLUS réduit ce délai ?",
      "choix": [
        "Une couverture DAST complète des applications",
        "Un plan de réponse à incident à jour",
        "Un SBOM (Software Bill of Materials) maintenu pour chaque application",
        "Un inventaire des serveurs et de leurs systèmes d'exploitation"
      ],
      "reponse": 2,
      "explication": "Le SBOM est l'inventaire formel de tous les composants, bibliothèques et dépendances (y compris transitives) de chaque application : lors de la divulgation d'une vulnérabilité comme Log4Shell, une simple recherche dans les SBOM identifie en quelques minutes les applications affectées. Le plan de réponse à incident organise la réaction mais ne dit pas où se trouve le composant ; le DAST ne détecte pas de façon fiable une bibliothèque vulnérable non exposée ; et l'inventaire des serveurs s'arrête au niveau OS, sans visibilité sur les dépendances applicatives.",
      "difficulte": 1,
      "pourquoi": [
        "Peu fiable ici : le DAST ne détecte pas systématiquement une bibliothèque vulnérable non exposée.",
        "Techniquement vrai mais pas suffisant : le plan de réponse organise la réaction sans dire où se trouve le composant.",
        "Bonne réponse : le SBOM inventorie toutes les dépendances, y compris transitives — une recherche suffit pour identifier les applications affectées.",
        "Trop superficiel : un inventaire des serveurs s'arrête à l'OS, sans visibilité applicative."
      ]
    },
    {
      "q": "Un attaquant publie sur un dépôt public de paquets une bibliothèque portant le même nom qu'une bibliothèque interne de votre entreprise, avec un numéro de version supérieur. Vos serveurs de build téléchargent automatiquement le paquet malveillant. Comment s'appelle cette attaque ?",
      "choix": [
        "Typosquatting",
        "Watering hole (attaque du point d'eau)",
        "DLL hijacking",
        "Dependency confusion"
      ],
      "reponse": 3,
      "explication": "La dependency confusion exploite les gestionnaires de paquets configurés pour interroger à la fois un registre interne et un registre public : en publiant un paquet public homonyme avec une version supérieure, l'attaquant fait « préférer » sa version malveillante par le résolveur. Le typosquatting repose sur des noms proches mais mal orthographiés que des humains saisissent par erreur ; le DLL hijacking détourne l'ordre de recherche des bibliothèques sur un poste ; et le watering hole piège un site web fréquenté par les victimes.",
      "difficulte": 2,
      "pourquoi": [
        "Piège de proximité : le typosquatting exige une faute de frappe humaine sur un nom proche.",
        "Hors contexte : le watering hole piège un site web fréquenté par les victimes.",
        "Hors contexte : le DLL hijacking détourne l'ordre de recherche des bibliothèques sur un poste.",
        "Bonne réponse : publier un homonyme public à version supérieure exploitant la résolution multi-registres est la dependency confusion."
      ]
    },
    {
      "q": "Quelle combinaison de mesures protège le MIEUX une organisation contre les paquets open source malveillants dans sa chaîne d'approvisionnement logicielle ?",
      "choix": [
        "Registre interne approuvé, version pinning et SCA continue",
        "Compiler soi-même tous les paquets à partir des sources",
        "Interdire totalement l'open source et ne développer qu'en interne",
        "Ne télécharger les paquets que depuis des sites en HTTPS"
      ],
      "reponse": 0,
      "explication": "Un registre interne (proxy) ne servant que des paquets examinés et approuvés, l'épinglage des versions avec vérification des empreintes (lockfiles, hashes) et la SCA continue forment une défense en profondeur : on contrôle ce qui entre, on empêche les substitutions silencieuses et on surveille les vulnérabilités connues. Interdire l'open source est irréaliste et coûteux ; HTTPS protège le transport mais pas le contenu d'un paquet malveillant légitimement publié ; et compiler les sources ne protège pas si la source elle-même est compromise.",
      "difficulte": 3,
      "pourquoi": [
        "Bonne réponse : registre interne approuvé, version pinning, vérification des hashes et SCA continue forment une défense en profondeur de la supply chain.",
        "Fausse assurance : compiler les sources ne protège pas si la source elle-même est compromise.",
        "Absolu irréaliste : interdire l'open source est économiquement et techniquement intenable.",
        "Trop étroit : HTTPS protège le transport, pas le contenu d'un paquet malveillant légitimement publié."
      ]
    },
    {
      "q": "Un client authentifié d'une banque en ligne remarque qu'en changeant le numéro de compte dans l'URL (…/releve?compte=12345), il peut afficher les relevés d'autres clients. De quelle catégorie OWASP relève cette faille ?",
      "choix": [
        "Security Misconfiguration",
        "Broken Access Control",
        "Cryptographic Failures",
        "Injection"
      ],
      "reponse": 1,
      "explication": "C'est un cas classique d'Insecure Direct Object Reference (IDOR), qui appartient à la catégorie Broken Access Control, numéro un de l'OWASP Top 10 2021 : l'application authentifie l'utilisateur mais ne vérifie pas qu'il est AUTORISÉ à accéder à l'objet demandé. Il n'y a ni injection de code, ni défaut de chiffrement, ni paramétrage de sécurité erroné du serveur : le contrôle d'autorisation au niveau de l'objet est tout simplement absent.",
      "difficulte": 1,
      "pourquoi": [
        "Hors sujet : ce n'est pas un paramétrage serveur erroné mais un contrôle applicatif absent.",
        "Bonne réponse : accéder aux objets d'autrui faute de vérification d'autorisation est un IDOR, catégorie Broken Access Control.",
        "Hors sujet : aucun défaut de chiffrement n'est en cause.",
        "Mauvais diagnostic : aucune donnée n'est injectée, l'application exécute des requêtes légitimes."
      ]
    },
    {
      "q": "Lors d'un test, une erreur applicative renvoie à l'utilisateur la pile d'appels complète, la version du serveur et la chaîne de connexion à la base de données. Quel principe de codage sécurisé est violé ?",
      "choix": [
        "Message d'erreur sobre côté client, détails côté serveur",
        "La limitation du nombre de sessions simultanées",
        "Le chiffrement des données au repos",
        "La séparation des tâches entre développeurs et opérateurs"
      ],
      "reponse": 0,
      "explication": "Une gestion d'erreurs sécurisée affiche à l'utilisateur un message générique et enregistre les détails techniques (stack trace, versions, requêtes) uniquement dans les journaux côté serveur : les informations divulguées ici constituent une mine d'or pour préparer une attaque ciblée. Le chiffrement au repos, la séparation des tâches et la gestion des sessions sont des contrôles pertinents ailleurs, mais aucun n'est en cause dans cette fuite d'informations par les messages d'erreur.",
      "difficulte": 1,
      "pourquoi": [
        "Bonne réponse : messages génériques côté client et détails journalisés côté serveur — le principe de gestion d'erreurs violé ici.",
        "Hors sujet : la gestion des sessions n'a aucun lien avec la divulgation d'erreurs.",
        "Techniquement pertinent ailleurs : le chiffrement au repos n'est pas en cause dans une fuite par messages d'erreur.",
        "Hors sujet : la séparation des tâches concerne les responsabilités humaines."
      ]
    },
    {
      "q": "Une analyse SCA révèle que l'application e-commerce utilise une bibliothèque comportant une CVE critique activement exploitée, mais l'équipe craint des régressions. Quelle est la MEILLEURE recommandation ?",
      "choix": [
        "Attendre la prochaine version majeure de l'application pour tout mettre à jour",
        "Corriger en priorité via le change management, avec mesures compensatoires",
        "Accepter le risque puisque l'application est derrière un pare-feu",
        "Désactiver l'analyse SCA qui génère trop d'alertes"
      ],
      "reponse": 1,
      "explication": "Une CVE critique activement exploitée exige un correctif prioritaire mais maîtrisé : passage par la gestion des changements avec tests de régression, et, pendant le délai de correction, des contrôles compensatoires comme des règles WAF ou du virtual patching réduisent l'exposition. Attendre une version majeure laisse une fenêtre d'exploitation ouverte ; désactiver l'outil supprime la visibilité, pas le risque ; et un pare-feu réseau ne bloque pas une attaque applicative transitant par le port autorisé de l'application.",
      "difficulte": 2,
      "pourquoi": [
        "Fenêtre d'exploitation ouverte : attendre une version majeure face à une CVE activement exploitée est indéfendable.",
        "Bonne réponse : correctif prioritaire via la gestion des changements avec tests de régression, et mesures compensatoires (WAF, virtual patching) dans l'intervalle.",
        "Fausse assurance : un pare-feu réseau laisse passer l'attaque applicative sur le port autorisé.",
        "Déni du risque : désactiver l'outil supprime la visibilité, pas la vulnérabilité."
      ]
    },
    {
      "q": "Une application web permet à l'utilisateur de fournir une URL dont le serveur va chercher le contenu. Un attaquant fournit l'adresse du service de métadonnées du cloud (http://169.254.169.254/) et récupère des identifiants IAM temporaires. De quelle vulnérabilité s'agit-il ?",
      "choix": [
        "Open redirect",
        "Cross-Site Request Forgery (CSRF)",
        "Server-Side Request Forgery (SSRF)",
        "Cross-Site Scripting (XSS)"
      ],
      "reponse": 2,
      "explication": "Le SSRF consiste à faire émettre par le SERVEUR des requêtes vers des cibles choisies par l'attaquant, typiquement des ressources internes inaccessibles de l'extérieur comme le service de métadonnées cloud, qui délivre des identifiants temporaires. Le XSS exécute du script dans le navigateur de la victime, le CSRF fait émettre une requête par le NAVIGATEUR d'une victime authentifiée, et l'open redirect renvoie l'utilisateur vers un site externe : dans ces trois cas, c'est le client qui agit, pas le serveur. Défenses SSRF : liste blanche de destinations, blocage des plages internes, IMDSv2.",
      "difficulte": 3,
      "pourquoi": [
        "Trop faible : l'open redirect renvoie l'utilisateur vers un site externe, sans requête serveur interne.",
        "Mauvais acteur : le CSRF fait agir le navigateur d'une victime authentifiée.",
        "Bonne réponse : faire émettre par le SERVEUR une requête vers une ressource interne comme le service de métadonnées cloud est un SSRF.",
        "Mauvais acteur : le XSS s'exécute dans le navigateur de la victime, pas côté serveur."
      ]
    },
    {
      "q": "Un testeur saisit « ' OR '1'='1 » dans le champ mot de passe et obtient l'accès au premier compte de la table des utilisateurs. Quelle est la correction la PLUS efficace et durable ?",
      "choix": [
        "Interdire le caractère apostrophe dans les formulaires",
        "Masquer les messages d'erreur SQL renvoyés à l'utilisateur",
        "Renommer les tables sensibles de la base de données",
        "Des requêtes paramétrées (prepared statements) partout"
      ],
      "reponse": 3,
      "explication": "Les requêtes paramétrées séparent structurellement le code SQL des données fournies par l'utilisateur : l'entrée ne peut jamais être interprétée comme du SQL, ce qui neutralise l'injection à la racine. Filtrer l'apostrophe est un blacklisting fragile, contournable par encodages et inutilisable pour les noms légitimes contenant une apostrophe ; masquer les erreurs gêne l'attaquant (l'injection devient « blind ») mais ne l'empêche pas ; et renommer les tables n'est que de la sécurité par l'obscurité.",
      "difficulte": 1,
      "pourquoi": [
        "Blacklisting fragile : filtrer l'apostrophe se contourne par encodages et bloque des noms légitimes.",
        "Palliatif : masquer les erreurs rend l'injection « blind » sans l'empêcher.",
        "Sécurité par l'obscurité : renommer les tables ne corrige pas la vulnérabilité.",
        "Bonne réponse : les requêtes paramétrées séparent structurellement le code SQL des données — neutralisation durable à la racine."
      ]
    },
    {
      "q": "Un attaquant poste sur un forum un commentaire contenant un script qui s'exécute dans le navigateur de chaque visiteur affichant la page et exfiltre leurs cookies de session. Quelle est cette attaque et sa MEILLEURE défense ?",
      "choix": [
        "Reflected XSS ; défense : jetons anti-CSRF",
        "Stored XSS ; encodage des sorties et CSP",
        "CSRF ; défense : encodage des sorties",
        "SQL injection ; défense : requêtes paramétrées"
      ],
      "reponse": 1,
      "explication": "Le script est enregistré durablement sur le serveur (dans le commentaire) et servi à chaque visiteur : c'est un stored XSS, la variante la plus dangereuse car elle ne nécessite aucune interaction spécifique de la victime. La défense combine la validation des entrées, l'encodage des sorties adapté au contexte HTML/JavaScript, une CSP qui restreint les scripts exécutables, et des cookies HttpOnly pour protéger les sessions. Le reflected XSS exigerait que la victime clique un lien piégé ; le CSRF ne fait pas exécuter de script ; et il n'y a aucune requête SQL en cause.",
      "difficulte": 2,
      "pourquoi": [
        "Mauvaise variante et mauvaise défense : le reflected XSS exige un lien piégé, et les jetons anti-CSRF ne bloquent pas un script.",
        "Bonne réponse : script persisté côté serveur = stored XSS ; défense par validation des entrées, encodage contextuel des sorties et CSP.",
        "Mauvais diagnostic : le CSRF ne fait exécuter aucun script, et l'encodage des sorties vise le XSS.",
        "Mauvais diagnostic : aucune requête SQL n'est en cause."
      ]
    },
    {
      "q": "Un utilisateur connecté à sa banque clique dans un e-mail sur une image piégée ; à son insu, son navigateur envoie une requête de virement à la banque, qui l'exécute car la session est valide. Quelle défense est SPÉCIFIQUEMENT conçue contre cette attaque ?",
      "choix": [
        "L'encodage des sorties HTML",
        "Le chiffrement TLS de toutes les communications",
        "Jetons anti-CSRF uniques et cookie SameSite",
        "Une politique de mots de passe robustes"
      ],
      "reponse": 2,
      "explication": "Il s'agit d'un Cross-Site Request Forgery : l'attaquant fait émettre par le navigateur de la victime une requête que le serveur croit légitime puisque les cookies de session l'accompagnent automatiquement. Le jeton anti-CSRF, secret propre à la session et inconnu du site attaquant, rend la requête forgée invalide ; l'attribut SameSite empêche l'envoi des cookies sur les requêtes intersites. L'encodage des sorties vise le XSS, TLS protège la confidentialité en transit mais transporte fidèlement la requête forgée, et le mot de passe n'est pas en cause puisque la victime est déjà authentifiée.",
      "difficulte": 2,
      "pourquoi": [
        "Mauvaise cible : l'encodage des sorties combat le XSS, pas la requête forgée.",
        "Techniquement vrai mais inopérant : TLS transporte fidèlement la requête forgée en la chiffrant.",
        "Bonne réponse : le jeton anti-CSRF, inconnu du site attaquant, invalide la requête forgée ; SameSite complète la défense.",
        "Hors sujet : la victime est déjà authentifiée — la robustesse du mot de passe ne change rien."
      ]
    },
    {
      "q": "Une application web appelle un utilitaire système en concaténant un nom de fichier fourni par l'utilisateur ; un testeur soumet « rapport.pdf; cat /etc/passwd » et obtient le contenu du fichier système. Quelle est la MEILLEURE correction ?",
      "choix": [
        "Chiffrer le fichier /etc/passwd",
        "Bloquer le caractère point-virgule dans le WAF",
        "Exécuter le serveur web en tant que root pour maîtriser les permissions",
        "Éviter le shell via des API natives et une liste blanche stricte"
      ],
      "reponse": 3,
      "explication": "C'est une OS command injection : l'entrée utilisateur est interprétée par le shell. La correction en profondeur consiste à ne jamais passer d'entrée utilisateur à un shell — utiliser des API natives du langage (ouverture de fichier directe, exécution sans shell avec arguments séparés) — et à valider l'entrée contre une liste blanche stricte. Exécuter en root aggrave dramatiquement l'impact au lieu de le réduire (violation du moindre privilège) ; bloquer le point-virgule au WAF est un pansement contournable (autres métacaractères, encodages) ; et chiffrer un fichier système ne traite qu'une cible parmi toutes celles accessibles.",
      "difficulte": 3,
      "pourquoi": [
        "Trop étroit : chiffrer un fichier cible ne protège pas les innombrables autres ressources accessibles.",
        "Pansement contournable : bloquer un métacaractère au WAF laisse tous les autres vecteurs et encodages.",
        "Aggravation : exécuter en root maximise l'impact et viole le moindre privilège.",
        "Bonne réponse : supprimer l'invocation du shell (API natives, arguments séparés) et valider par liste blanche traite l'injection de commande en profondeur."
      ]
    },
    {
      "q": "Un analyste sans habilitation combine des informations publiques — offres d'emploi, marchés publics, photos satellite — et reconstitue l'existence et l'emplacement d'un programme militaire classifié. Quel problème de sécurité des données ce scénario illustre-t-il ?",
      "choix": [
        "Aggregation",
        "Polyinstantiation",
        "Inference uniquement",
        "Data mining"
      ],
      "reponse": 0,
      "explication": "L'aggregation est le problème de sécurité par lequel la COMBINAISON d'éléments individuellement non sensibles, issus de sources séparées, produit une information de sensibilité supérieure : chaque pièce est publique, mais l'ensemble révèle un secret. L'inference est l'attaque cognitive associée (déduire l'information), mais le terme qui désigne ce phénomène de combinaison est l'agrégation. La polyinstantiation est une DÉFENSE contre l'inférence, et le data mining est une technique d'analyse légitime.",
      "difficulte": 1,
      "pourquoi": [
        "Bonne réponse : combiner des éléments individuellement publics en information classifiée est le problème d'aggregation.",
        "Inversion de rôle : la polyinstantiation est une défense, pas un problème.",
        "Piège de vocabulaire : l'inférence est la déduction ; le phénomène de combinaison décrit ici est l'agrégation.",
        "Hors sujet : le data mining est une analyse légitime de données."
      ]
    },
    {
      "q": "Un employé du service courrier remarque que la salle du conseil est réservée toute la semaine par la DRH avec un cabinet externe de restructuration, et en déduit qu'un plan social se prépare. Quelle attaque contre la confidentialité ce raisonnement illustre-t-il ?",
      "choix": [
        "Shoulder surfing",
        "Inference",
        "Aggregation",
        "Social engineering"
      ],
      "reponse": 1,
      "explication": "L'inference est l'attaque par laquelle un individu DÉDUIT une information d'un niveau de sensibilité supérieur à partir d'éléments auxquels il a légitimement accès : ici, des données banales de réservation de salle mènent à une conclusion confidentielle. L'agrégation désigne plutôt le problème structurel de la combinaison de données multiples ; le shoulder surfing est une observation physique directe ; et le social engineering suppose une manipulation d'autrui, absente ici — l'employé raisonne seul.",
      "difficulte": 2,
      "pourquoi": [
        "Hors sujet : le shoulder surfing est une observation physique directe.",
        "Bonne réponse : déduire une information confidentielle à partir d'éléments légitimement accessibles est l'inference.",
        "Piège de vocabulaire : l'agrégation désigne le problème structurel de combinaison, pas l'acte de déduction individuel.",
        "Hors sujet : le social engineering suppose la manipulation d'autrui — l'employé raisonne seul."
      ]
    },
    {
      "q": "Dans une base de données multiniveau, un utilisateur non habilité tente de créer un enregistrement pour le cargo « Aurora » et découvre qu'une clé identique existe déjà à un niveau classifié, révélant l'existence d'une mission secrète. Quelle technique prévient cette fuite ?",
      "choix": [
        "La polyinstantiation",
        "La normalisation de la base de données",
        "Le database view filtering",
        "Le chiffrement transparent des données (TDE)"
      ],
      "reponse": 0,
      "explication": "La polyinstantiation autorise plusieurs instances d'un même enregistrement, avec la même clé primaire, à des niveaux de classification différents : l'utilisateur non habilité voit une version non classifiée plausible (une cargaison banale), sans erreur de clé dupliquée qui trahirait l'existence de l'enregistrement secret. La normalisation vise l'intégrité structurelle et élimine justement les doublons ; le TDE protège les fichiers de la base au repos ; et les vues filtrent l'accès mais un conflit de clé primaire révélerait quand même l'existence de la donnée cachée.",
      "difficulte": 2,
      "pourquoi": [
        "Bonne réponse : la polyinstantiation fait coexister deux enregistrements de même clé à des niveaux différents, masquant l'existence du secret.",
        "Contresens : la normalisation élimine justement les doublons de clé.",
        "Insuffisant : les vues filtrent la lecture, mais le conflit de clé primaire révélerait quand même la donnée cachée.",
        "Hors sujet : le TDE protège les fichiers de la base au repos, pas l'inférence par conflit de clé."
      ]
    },
    {
      "q": "Une base de données statistique RH permet des requêtes agrégées sur les salaires. Un analyste multiplie les requêtes avec des filtres de plus en plus précis jusqu'à isoler le salaire d'une seule personne. Quels contrôles contrent le MIEUX cette attaque d'inférence ?",
      "choix": [
        "Sauvegarder la base quotidiennement sur un site distant",
        "Exiger le MFA pour accéder à l'outil de reporting",
        "Chiffrer la base de données au repos avec AES-256",
        "Cell suppression, taille minimale et bruit statistique"
      ],
      "reponse": 3,
      "explication": "Les attaques d'inférence sur bases statistiques se contrent par des contrôles spécifiques : refuser les requêtes dont le résultat porte sur un ensemble trop petit, supprimer les cellules à faibles effectifs, ajouter du bruit aléatoire calibré (perturbation, ancêtre de la differential privacy) et limiter les requêtes successives recoupables (query set overlap control). Le chiffrement au repos, le MFA et les sauvegardes sont de bons contrôles généraux, mais l'analyste est ici un utilisateur AUTORISÉ qui n'exploite que des requêtes légitimes : seuls les contrôles d'inférence traitent ce risque.",
      "difficulte": 3,
      "pourquoi": [
        "Hors sujet : les sauvegardes traitent la disponibilité, pas l'inférence.",
        "Hors cible : le MFA authentifie mieux un utilisateur qui est déjà légitime.",
        "Techniquement vrai mais hors cible : l'analyste est un utilisateur autorisé — le chiffrement au repos ne bloque pas ses requêtes légitimes.",
        "Bonne réponse : taille minimale des ensembles, cell suppression et bruit statistique sont les contrôles spécifiques contre l'inférence statistique."
      ]
    },
    {
      "q": "Un pentest révèle que l'API mobile de votre entreprise renvoie l'objet demandé dès lors que l'appelant présente un jeton valide, sans vérifier que l'objet appartient à cet utilisateur. Les numéros d'objets sont séquentiels. Quelle est cette vulnérabilité ?",
      "choix": [
        "Injection SQL dans les paramètres de l'API",
        "Excessive data exposure dans les réponses JSON",
        "Broken Object Level Authorization (BOLA)",
        "Absence de chiffrement TLS sur l'API"
      ],
      "reponse": 2,
      "explication": "La Broken Object Level Authorization — première vulnérabilité du OWASP API Security Top 10 — survient quand l'API authentifie l'appelant mais ne vérifie pas son AUTORISATION sur l'objet précis demandé : avec des identifiants séquentiels, l'énumération de toutes les données devient triviale. La correction impose une vérification d'autorisation systématique à chaque appel et des identifiants non prédictibles. Il n'y a ici ni injection, ni problème de transport, ni surexposition de champs : le contrôle d'accès objet est simplement absent.",
      "difficulte": 2,
      "pourquoi": [
        "Mauvais diagnostic : aucune injection n'est décrite, les appels sont légitimes.",
        "Piège de proximité : l'excessive data exposure concerne des champs excédentaires dans les réponses, pas l'accès aux objets d'autrui.",
        "Bonne réponse : jeton valide mais autorisation objet jamais vérifiée, identifiants séquentiels — définition du BOLA/IDOR, n°1 du OWASP API Security Top 10.",
        "Mauvais diagnostic : le transport n'est pas en cause."
      ]
    },
    {
      "q": "Votre architecture comprend 60 microservices qui communiquent entre eux en interne (trafic est-ouest). Quelle approche sécurise le MIEUX ces communications selon un modèle zero trust ?",
      "choix": [
        "Faire confiance au trafic interne puisque le périmètre réseau est protégé par un pare-feu",
        "Limiter la sécurité à la passerelle API qui reçoit le trafic externe",
        "Le mTLS entre services, avec une identité par service via un service mesh",
        "Utiliser un mot de passe partagé commun à tous les microservices"
      ],
      "reponse": 2,
      "explication": "Le zero trust rejette la confiance implicite du réseau interne : chaque microservice doit prouver son identité à chaque communication. Le mTLS fournit l'authentification mutuelle et le chiffrement du trafic est-ouest, avec des certificats de courte durée gérés par un service mesh qui applique aussi des politiques d'autorisation fines. Se fier au périmètre reproduit le modèle « château fort » qu'un seul service compromis suffit à ruiner ; un secret partagé n'identifie personne et sa compromission expose tout ; et la passerelle API ne voit que le trafic nord-sud, pas les échanges entre services.",
      "difficulte": 3,
      "pourquoi": [
        "Modèle château fort périmé : un seul service compromis ruine la confiance implicite du réseau interne.",
        "Trop étroit : la passerelle API ne voit que le trafic nord-sud, pas les échanges entre services.",
        "Bonne réponse : le mTLS avec identités et certificats propres à chaque service, via un service mesh, applique le zero trust au trafic est-ouest.",
        "Anti-modèle : un secret partagé n'identifie personne et sa compromission expose tout."
      ]
    },
    {
      "q": "Quel est le PRINCIPAL bénéfice de sécurité d'une passerelle API (API gateway) placée devant des microservices ?",
      "choix": [
        "Elle augmente la bande passante disponible pour les clients",
        "Elle remplace le chiffrement TLS entre le client et les services",
        "Elle rend inutile la sécurisation des microservices situés derrière elle",
        "Centraliser authentification, rate limiting et validation"
      ],
      "reponse": 3,
      "explication": "La passerelle API constitue un point d'application central des politiques : authentification et autorisation de chaque appel, rate limiting contre les abus et le déni de service, validation et filtrage des requêtes, journalisation uniforme. Cette centralisation évite que chaque microservice réimplémente (inégalement) ces contrôles. Elle n'a pas vocation à accroître la bande passante ; elle ne dispense jamais de sécuriser les services eux-mêmes (défense en profondeur, trafic est-ouest) ; et elle s'appuie sur TLS, elle ne le remplace pas.",
      "difficulte": 2,
      "pourquoi": [
        "Hors sujet : la passerelle est un point de contrôle, pas un accélérateur de bande passante.",
        "Contresens : la passerelle s'appuie sur TLS, elle ne le remplace jamais.",
        "Fausse assurance : la défense en profondeur impose de sécuriser aussi les services derrière la passerelle.",
        "Bonne réponse : centraliser authentification, rate limiting et validation des requêtes en un point unique est le bénéfice de sécurité principal."
      ]
    },
    {
      "q": "Votre entreprise dispose d'un accord de software escrow pour son ERP critique. L'éditeur fait faillite, mais le code libéré par l'agent d'escrow date de trois ans et ne correspond plus à la version exploitée. Quelle disposition aurait prévenu ce problème ?",
      "choix": [
        "Des dépôts à chaque version majeure, vérifiés périodiquement",
        "Une assurance cyber couvrant la défaillance des fournisseurs",
        "Une clause de pénalités financières en cas de retard de support",
        "Le choix d'un agent d'escrow disposant de coffres physiques certifiés"
      ],
      "reponse": 0,
      "explication": "Un escrow n'a de valeur que si le dépôt reflète la version en production : le contrat doit imposer des dépôts synchronisés avec les versions livrées et des vérifications périodiques (escrow verification) par un tiers, confirmant que le contenu est complet, documenté et compilable. Des pénalités financières ne servent à rien contre un éditeur en faillite ; une assurance compense financièrement mais ne fournit pas le code nécessaire à la continuité ; et la qualité des coffres protège le dépôt existant sans garantir qu'il soit à jour.",
      "difficulte": 2,
      "pourquoi": [
        "Bonne réponse : dépôts à chaque version majeure et vérification indépendante (complet, compilable, à jour) garantissent la valeur réelle de l'escrow.",
        "Compensation seulement : l'assurance ne fournit pas le code nécessaire à la continuité.",
        "Inopérant : des pénalités financières ne s'appliquent pas à un éditeur en faillite.",
        "Trop étroit : la qualité des coffres protège le dépôt existant sans garantir qu'il soit à jour."
      ]
    },
    {
      "q": "Un malware est distribué signé avec le certificat de code signing légitime d'un éditeur connu, dérobé lors d'une intrusion. Les postes de travail l'exécutent sans alerte. Quelles mesures l'ÉDITEUR aurait-il dû prendre pour prévenir et traiter ce scénario ?",
      "choix": [
        "Utiliser un certificat auto-signé pour ne pas dépendre d'une autorité de certification",
        "Protéger les clés dans un HSM à accès contrôlé et révoquer le certificat si compromis",
        "Étendre la durée de validité du certificat afin d'espacer les opérations de renouvellement, jugées risquées",
        "Signer uniquement les versions majeures pour limiter l'usage des clés"
      ],
      "reponse": 1,
      "explication": "La valeur du code signing repose entièrement sur la protection de la clé privée : elle doit résider dans un HSM, avec signature effectuée dans un environnement dédié, accès nominatifs et journalisés. En cas de compromission, la révocation immédiate du certificat auprès de la CA invalide la confiance dans les signatures frauduleuses. Allonger la vie du certificat étend au contraire la fenêtre d'exploitation d'une clé volée ; signer moins souvent ne protège pas la clé elle-même ; et un certificat auto-signé supprime la chaîne de confiance qui fait précisément la valeur du dispositif.",
      "difficulte": 2,
      "pourquoi": [
        "Contresens : l'auto-signature supprime la chaîne de confiance qui fait la valeur du code signing.",
        "Bonne réponse : protéger les clés dans un HSM à accès strictement contrôlé et révoquer immédiatement en cas de compromission — prévention et réponse.",
        "Contresens : allonger la vie du certificat étend la fenêtre d'exploitation d'une clé volée.",
        "Trop étroit : signer moins souvent ne protège pas la clé elle-même."
      ]
    },
    {
      "q": "Votre organisation évalue un fournisseur SaaS pour héberger des données clients sensibles. Quel élément fournit la MEILLEURE assurance sur l'efficacité réelle des contrôles de sécurité du fournisseur ?",
      "choix": [
        "La promesse commerciale d'un chiffrement « de niveau militaire »",
        "Les témoignages de clients publiés sur le site du fournisseur",
        "Un rapport SOC 2 Type II récent et un droit d'audit contractuel",
        "Le questionnaire de sécurité auto-déclaré rempli par le fournisseur"
      ],
      "reponse": 2,
      "explication": "Le rapport SOC 2 Type II est une attestation indépendante qui évalue non seulement la CONCEPTION des contrôles mais leur EFFICACITÉ OPÉRATIONNELLE sur une période de plusieurs mois — bien plus probant qu'un instantané ou qu'une déclaration. Le droit d'audit contractuel complète le dispositif. Un questionnaire auto-déclaré n'engage que la bonne foi du fournisseur, les témoignages clients sont du marketing, et « chiffrement de niveau militaire » est un slogan sans valeur d'assurance vérifiable.",
      "difficulte": 2,
      "pourquoi": [
        "Slogan invérifiable : « niveau militaire » n'est pas une assurance mesurable.",
        "Marketing : les témoignages clients n'ont aucune valeur d'assurance.",
        "Bonne réponse : le SOC 2 Type II atteste l'efficacité opérationnelle des contrôles sur une période, par un tiers indépendant, complété par un droit d'audit.",
        "Auto-déclaratif : le questionnaire n'engage que la bonne foi du fournisseur."
      ]
    },
    {
      "q": "Avant d'intégrer une bibliothèque open source dans un produit critique, vous menez une évaluation. Quel constat devrait le PLUS vous inquiéter ?",
      "choix": [
        "Le dernier commit remonte à trois ans et deux CVE critiques restent sans correctif ni réponse des mainteneurs",
        "La licence est une licence permissive approuvée par votre direction juridique",
        "La bibliothèque est maintenue par une fondation avec de nombreux contributeurs actifs",
        "Le projet publie un changelog détaillé et des versions signées"
      ],
      "reponse": 0,
      "explication": "Le risque majeur de l'open source est l'abandon : un projet sans activité depuis trois ans, avec des CVE critiques ignorées, ne recevra probablement jamais de correctifs — l'organisation devrait prévoir de maintenir le code elle-même ou choisir une alternative activement maintenue. À l'inverse, une communauté active, des versions signées avec changelog et une licence validée juridiquement sont tous des signaux POSITIFS d'un projet sain. L'évaluation de l'open source porte sur la vitalité du projet, sa réactivité aux vulnérabilités et la conformité de licence.",
      "difficulte": 3,
      "pourquoi": [
        "Bonne réponse : trois ans sans commit et des CVE critiques ignorées signalent un projet abandonné — le risque majeur de l'open source.",
        "Signal positif : une licence permissive validée juridiquement lève le risque de conformité.",
        "Signal positif, pas une inquiétude : une fondation et des contributeurs actifs indiquent un projet sain.",
        "Signal positif : changelog détaillé et versions signées sont des bonnes pratiques."
      ]
    },
    {
      "q": "Des chercheurs apposent de petits autocollants sur un panneau stop ; le système de vision d'un véhicule autonome, dont le modèle n'a jamais été modifié, le classe alors comme panneau de limitation de vitesse. Quel type d'attaque contre le machine learning est illustré ?",
      "choix": [
        "Model theft par extraction de requêtes",
        "Membership inference sur les données d'entraînement",
        "Data poisoning des données d'entraînement",
        "Adversarial example : entrée trompant le modèle"
      ],
      "reponse": 3,
      "explication": "L'adversarial example est une entrée subtilement altérée — ici des autocollants imperceptiblement significatifs pour le modèle — qui provoque une classification erronée au moment de l'INFÉRENCE, sans aucune modification du modèle ni des données d'entraînement. Le data poisoning corrompt en amont les données d'ENTRAÎNEMENT ; le model theft reconstruit un modèle équivalent en l'interrogeant massivement ; et la membership inference détermine si une donnée précise a servi à l'entraînement. La précision « modèle jamais modifié » exclut l'empoisonnement.",
      "difficulte": 2,
      "pourquoi": [
        "Hors sujet : le model theft reconstruit un modèle par interrogation massive.",
        "Hors sujet : la membership inference détermine si une donnée a servi à l'entraînement.",
        "Piège de phase : le data poisoning corrompt l'entraînement, or le modèle n'a jamais été modifié.",
        "Bonne réponse : une entrée physiquement altérée qui trompe le modèle au moment de l'inférence est un adversarial example."
      ]
    },
    {
      "q": "Un régulateur bancaire exige que chaque refus de crédit automatisé puisse être expliqué précisément au client. L'équipe hésite entre un réseau de neurones profond très performant et un expert system à base de règles. Quel critère de sécurité et de conformité favorise l'expert system ?",
      "choix": [
        "L'expert system apprend seul de nouvelles fraudes sans intervention humaine",
        "Des règles SI-ALORS explicites et traçables offrent l'explicabilité exigée",
        "L'expert system ne nécessite aucune maintenance de sa base de connaissances",
        "L'expert system est toujours plus précis qu'un réseau de neurones"
      ],
      "reponse": 1,
      "explication": "L'expert system applique des règles si-alors codifiées dans sa knowledge base via un inference engine : chaque décision peut être retracée aux règles déclenchées, ce qui satisfait l'exigence d'explicabilité du régulateur. Un réseau de neurones profond, malgré ses performances, produit des décisions difficilement explicables (boîte noire), un enjeu de conformité majeur. Les distracteurs inversent les réalités : c'est le machine learning qui apprend des données, l'expert system n'est pas intrinsèquement plus précis, et sa base de connaissances exige au contraire une maintenance experte continue.",
      "difficulte": 2,
      "pourquoi": [
        "Inversion : c'est le machine learning qui apprend des données ; l'expert system applique des règles écrites.",
        "Bonne réponse : des règles SI-ALORS explicites et traçables offrent l'explicabilité exigée par le régulateur, contrairement à la boîte noire neuronale.",
        "Absolu faux : la knowledge base exige une maintenance experte continue.",
        "Absolu faux : l'expert system n'est pas intrinsèquement plus précis."
      ]
    },
    {
      "q": "Le CISO d'un éditeur SaaS constate qu'un assistant d'IA générative produit désormais près de 40 % du code livré. La direction refuse tout ralentissement du time-to-market. Que devrait faire le CISO EN PREMIER ?",
      "choix": [
        "Soumettre le code IA aux mêmes gates que le code humain : revue, SAST, SCA et tests",
        "Former les développeurs à rédiger des prompts orientés sécurité pour réduire les défauts à la source",
        "Interdire l'usage de l'IA générative jusqu'à ce qu'un audit complet en démontre l'innocuité",
        "Acquérir un outil spécialisé de détection de code généré par IA afin d'en tracer la provenance"
      ],
      "reponse": 0,
      "explication": "Le code généré par IA doit être traité comme du code tiers non fiable : le soumettre aux mêmes contrôles que le code humain (revue, SAST, SCA, tests) applique la gouvernance existante sans créer de processus parallèle ni ralentir les livraisons — la réponse compatible avec la contrainte business. L'interdiction totale ignore l'enjeu de compétitivité et sera contournée ; la formation aux prompts est utile mais ne constitue pas un contrôle vérifiable ; et tracer la provenance n'empêche aucun défaut d'atteindre la production.",
      "difficulte": 3,
      "pourquoi": [
        "Bonne réponse : traiter le code IA comme du code non fiable soumis aux gates existants du pipeline gouverne le risque sans casser la vélocité.",
        "Techniquement vrai mais insuffisant : la formation aux prompts réduit les défauts sans fournir de contrôle vérifiable — mesure complémentaire, pas première.",
        "Absolu et hors contexte business : une interdiction ignore la contrainte de time-to-market et pousse à l'usage clandestin.",
        "Réponse de technicien : la traçabilité de provenance n'empêche aucun défaut d'atteindre la production."
      ]
    },
    {
      "q": "Une revue interne révèle que l'assistant d'IA de développement reproduit parfois des extraits de code open source sous licence copyleft dans le produit propriétaire de l'entreprise. Quelle est la MEILLEURE réponse de gouvernance ?",
      "choix": [
        "Demander à la direction juridique d'examiner chaque cas signalé spontanément par les développeurs",
        "Exiger de l'éditeur de l'assistant une clause d'indemnisation en cas de contentieux de propriété intellectuelle",
        "Mettre à jour la politique IA et scanner similarité et licences avant chaque fusion",
        "Désactiver l'assistant d'IA pour tout le code destiné aux produits commercialisés"
      ],
      "reponse": 2,
      "explication": "Le risque est systémique : il exige une réponse systémique — une politique claire et un contrôle automatisé (analyse de similarité et des licences) appliqué à chaque fusion, qui détecte le code copyleft avant qu'il ne contamine le produit propriétaire. S'en remettre aux signalements spontanés est réactif et invérifiable ; désactiver l'assistant sacrifie la productivité sans traiter les autres sources de code copié ; et l'indemnisation transfère une partie du coût financier sans prévenir l'obligation éventuelle de divulguer le code du produit.",
      "difficulte": 3,
      "pourquoi": [
        "Réactif et invérifiable : les signalements spontanés ne détectent qu'une fraction des cas, après coup.",
        "Techniquement vrai mais partiel : l'indemnisation couvre le coût financier, pas l'obligation potentielle de divulguer le code sous copyleft.",
        "Bonne réponse : politique plus contrôle automatisé de similarité et de licences à chaque fusion — la seule réponse préventive et industrialisable.",
        "Absolu : la désactivation sacrifie la productivité et ne traite pas les copies manuelles de code open source."
      ]
    },
    {
      "q": "Après Log4Shell, le comité exécutif demande au CISO que « cela ne se reproduise plus », avec un budget limité. L'organisation exploite 300 applications sans inventaire de dépendances. Quelle initiative lancer EN PREMIER ?",
      "choix": [
        "Déployer un WAF avec virtual patching devant les applications exposées sur Internet",
        "Mettre à niveau les bibliothèques obsolètes des 300 applications vers leurs dernières versions",
        "Imposer une approbation manuelle par l'équipe sécurité de chaque nouvelle dépendance introduite",
        "Générer automatiquement un SBOM pour chaque application dans le pipeline de build et centraliser ces inventaires"
      ],
      "reponse": 3,
      "explication": "Le problème révélé par Log4Shell est d'abord un problème de VISIBILITÉ : sans inventaire des dépendances, aucune remédiation ne peut être priorisée. Générer des SBOM automatisés dans le pipeline crée cette visibilité pour un coût maîtrisé et rend toutes les initiatives suivantes possibles. Mettre à niveau 300 applications sans savoir lesquelles sont exposées est irréalisable avec un budget limité ; le WAF est un palliatif qui ne couvre pas les applications internes ; et l'approbation manuelle des nouvelles dépendances ne traite pas le stock existant tout en créant un goulot d'étranglement.",
      "difficulte": 3,
      "pourquoi": [
        "Palliatif compensatoire : le virtual patching protège temporairement le périmètre exposé sans créer de gouvernance durable.",
        "Techniquement vrai mais pas premier : impossible de prioriser la mise à niveau de 300 applications sans inventaire, et le budget ne le permet pas.",
        "Trop étroit et hors cible : l'approbation manuelle ne couvre pas les dépendances existantes et crée un goulot d'étranglement.",
        "Bonne réponse : la visibilité d'abord — le SBOM automatisé est le prérequis de toute priorisation et répond au besoin de réactivité pour un coût maîtrisé."
      ]
    },
    {
      "q": "À la suite d'un incident lié à une dépendance vulnérable, le CISO doit arbitrer : l'équipe sécurité veut bloquer tout build contenant la moindre CVE, les équipes produit refusent tout gate bloquant. Quelle politique est la MEILLEURE ?",
      "choix": [
        "Ne rien bloquer, mais publier un tableau de bord mensuel des vulnérabilités par équipe",
        "Bloquer sur les vulnérabilités critiques et hautes exploitables, gérer le reste par SLA",
        "Bloquer tout build contenant une CVE, quelle que soit sa criticité, car la sécurité n'est pas négociable",
        "Laisser chaque équipe produit définir ses propres seuils de blocage selon son contexte"
      ],
      "reponse": 1,
      "explication": "Une politique fondée sur le risque concilie les deux camps : bloquer uniquement ce qui est réellement dangereux (critique et haut exploitables) préserve la vélocité tout en garantissant que rien de grave ne passe, et les SLA gradués assurent la remédiation du reste sous gouvernance. Bloquer toute CVE est un absolu ingérable qui provoque l'alert fatigue et des contournements ; déléguer les seuils à chaque équipe abandonne la cohérence de la gouvernance ; et un simple tableau de bord est détectif, sans aucune force préventive.",
      "difficulte": 3,
      "pourquoi": [
        "Détectif sans force préventive : un tableau de bord informe mais ne bloque rien — l'incident peut se reproduire à l'identique.",
        "Bonne réponse : l'approche par le risque — blocage ciblé et SLA gradués — protège l'essentiel tout en préservant la vélocité, sous gouvernance unifiée.",
        "Absolu : bloquer toute CVE, même mineure, provoque l'alert fatigue, paralyse les livraisons et incite au contournement.",
        "Abdication de gouvernance : des seuils propres à chaque équipe détruisent la cohérence et l'auditabilité de la politique."
      ]
    },
    {
      "q": "Les équipes DevOps demandent la suppression du gate SAST du pipeline : il bloque des releases avec environ 40 % de faux positifs et met en péril des engagements clients. Quelle est la MEILLEURE réponse du CISO ?",
      "choix": [
        "Exiger une dérogation signée par un vice-président pour chaque release bloquée",
        "Retirer le gate et le remplacer par un scan hebdomadaire hors pipeline avec revue différée des résultats",
        "Régler l'outil, bloquer sur les criticités élevées confirmées, gérer le reste par SLA",
        "Maintenir le gate en l'état : accepter des faux positifs est le prix normal de la sécurité"
      ],
      "reponse": 2,
      "explication": "Un gate qui bloque à tort 40 % du temps détruit sa propre légitimité : la bonne réponse managériale est d'améliorer le contrôle, pas de le supprimer ni de le sacraliser — réglage de l'outil, blocage limité aux findings élevés confirmés, backlog avec SLA pour le reste, et mesure du taux de faux positifs pour piloter l'amélioration. Maintenir le gate en l'état ignore le coût business réel et nourrit les contournements ; le scan hebdomadaire hors pipeline abandonne la prévention au profit d'une détection tardive ; et la dérogation par vice-président ajoute de la bureaucratie sans corriger la cause racine.",
      "difficulte": 3,
      "pourquoi": [
        "Bureaucratie : l'escalade systématique ne corrige pas la cause racine (l'outil mal réglé) et ralentit tout le monde.",
        "Capitulation hors phase : un scan hebdomadaire différé transforme un contrôle préventif en détection tardive.",
        "Bonne réponse : améliorer le contrôle — réglage, blocage ciblé sur les criticités confirmées, SLA et métrique de faux positifs — réconcilie assurance et vélocité.",
        "Absolu : ignorer le coût business et l'alert fatigue érode la crédibilité de la sécurité et encourage les contournements."
      ]
    },
    {
      "q": "Une fintech doit livrer un module de vérification d'identité en quatre mois pour tenir une échéance réglementaire. Le développement interne prendrait neuf mois ; un petit éditeur propose une solution éprouvée mais refuse de céder son code source. Quelle est la MEILLEURE décision ?",
      "choix": [
        "Acheter avec un software escrow vérifié, un droit d'audit et des SLA de correctifs",
        "Développer en interne afin de conserver la maîtrise complète du code et de sa sécurité",
        "Acheter la solution la moins chère du marché et négocier les clauses de continuité après la mise en production",
        "Exiger la cession complète du code source comme condition non négociable de l'achat"
      ],
      "reponse": 0,
      "explication": "La contrainte dominante est l'échéance réglementaire : seul l'achat la respecte. Le risque de dépendance envers un petit éditeur se traite contractuellement — escrow avec vérification périodique des dépôts (complets, compilables, à jour), droit d'audit et SLA de correctifs — c'est l'arbitrage classique buy vs build vu par un manager. Développer en interne offre la maîtrise mais rate l'échéance, ce qui en fait une réponse techniquement vraie mais contextuellement fausse ; négocier la continuité après la mise en production abandonne tout levier contractuel ; et exiger la cession du code est irréaliste face à un éditeur dont c'est l'actif principal.",
      "difficulte": 3,
      "pourquoi": [
        "Bonne réponse : l'achat tient le délai et le risque fournisseur est traité par escrow vérifié, droit d'audit et SLA — l'arbitrage managérial correct.",
        "Techniquement vrai mais contextuellement faux : la maîtrise interne rate l'échéance réglementaire, la contrainte dominante du scénario.",
        "Hors phase : après la mise en production, l'acheteur a perdu tout levier de négociation sur les clauses de continuité.",
        "Irréaliste et disproportionné : un éditeur ne cède pas son actif principal, et l'escrow suffit à couvrir le risque de continuité."
      ]
    },
    {
      "q": "Le portefeuille d'APIs d'une plateforme est passé de 20 à 300 en deux ans ; deux incidents récents impliquaient des APIs « oubliées », restées exposées après le retrait des applications qu'elles servaient. Sur quoi le responsable de la sécurité applicative devrait-il agir EN PREMIER ?",
      "choix": [
        "Renforcer les règles de rate limiting sur la passerelle API",
        "La découverte continue des APIs et la gouvernance de leur cycle de vie",
        "Commander un test d'intrusion annuel couvrant l'ensemble du périmètre API",
        "Généraliser le mTLS et l'authentification forte sur toutes les APIs connues"
      ],
      "reponse": 1,
      "explication": "Les incidents révèlent un problème d'inventaire, pas de mécanisme : des APIs « zombies » échappent à tous les contrôles parce que personne ne sait qu'elles existent. On ne protège pas ce qu'on ignore : la découverte continue et la gouvernance du cycle de vie (inventaire, propriétaire, décommissionnement) sont le préalable. Généraliser le mTLS est excellent mais ne s'applique qu'aux APIs CONNUES — techniquement vrai, contextuellement insuffisant ; un pentest annuel est ponctuel et ne suivra pas un parc qui a été multiplié par quinze ; et le rate limiting traite l'abus, pas l'exposition d'APIs oubliées.",
      "difficulte": 3,
      "pourquoi": [
        "Trop étroit : le rate limiting limite l'abus d'APIs légitimes, il ne découvre ni ne retire les APIs zombies.",
        "Bonne réponse : le problème racine est l'inventaire — découverte continue et gouvernance du cycle de vie traitent les APIs oubliées que tout autre contrôle manquera.",
        "Ponctuel et détectif : un pentest annuel photographie un instant sans suivre la croissance continue du parc.",
        "Techniquement vrai mais contextuellement insuffisant : le mTLS ne protège que les APIs connues, or les incidents viennent des APIs inconnues."
      ]
    },
    {
      "q": "Une banque envisage d'acquérir un modèle de détection de fraude entraîné par un fournisseur sur des données mutualisées de plusieurs clients. Le RSSI s'inquiète d'un possible empoisonnement du modèle. Quelle exigence d'acquisition répond le MIEUX à ce risque ?",
      "choix": [
        "Exiger la remise du code source complet du modèle pour revue par les équipes internes",
        "Prévoir une surveillance de la dérive du modèle après sa mise en production",
        "Faire réaliser un test d'intrusion de l'API qui expose le modèle",
        "Exiger la provenance des données d'entraînement et une évaluation indépendante"
      ],
      "reponse": 3,
      "explication": "Le data poisoning se niche dans les DONNÉES d'entraînement, pas dans le code : l'assurance doit porter sur la provenance et l'intégrité de ces données et sur une évaluation comportementale indépendante (tests sur des jeux contrôlés, recherche d'angles morts) avant intégration — l'équivalent ML de la due diligence de supply chain. La revue du code source est la réponse du technicien : un modèle empoisonné a un code parfaitement sain. Le pentest de l'API teste l'enveloppe applicative, pas les décisions du modèle. Et la surveillance de dérive en production est un complément détectif, trop tardif pour être la meilleure réponse d'ACQUISITION.",
      "difficulte": 3,
      "pourquoi": [
        "Réponse de technicien : le code d'un modèle empoisonné est sain — la revue de code ne peut pas révéler un biais implanté par les données.",
        "Techniquement vrai mais hors phase : la surveillance de dérive est détective et post-production, complément utile mais pas exigence d'acquisition première.",
        "Hors cible : le pentest éprouve l'enveloppe applicative (API), pas la fiabilité des décisions du modèle.",
        "Bonne réponse : le poison vit dans les données d'entraînement — provenance, intégrité et évaluation comportementale indépendante avant intégration sont la due diligence adaptée."
      ]
    },
    {
      "q": "Le modèle de recommandation d'un site marchand est réentraîné chaque nuit sur les données de production, y compris les avis déposés par les utilisateurs. Le CISO veut réduire le risque d'empoisonnement sans arrêter le réentraînement. Quel ensemble de contrôles est le MEILLEUR ?",
      "choix": [
        "Chiffrer les données d'entraînement au repos et en transit",
        "Faire relire manuellement les données d'entraînement par l'équipe data science avant chaque cycle",
        "Assainir les données entrantes, sécuriser le pipeline et comparer à une référence",
        "Geler définitivement le modèle actuel et cesser tout réentraînement"
      ],
      "reponse": 2,
      "explication": "L'empoisonnement passe ici par un canal LÉGITIME : des avis soumis publiquement. La défense combine la validation et l'assainissement des données entrantes (détection d'anomalies, filtrage des soumissions coordonnées), la protection du pipeline de données (accès, intégrité), et un garde-fou de promotion : chaque nouveau modèle est comparé à une référence comportementale avant de remplacer l'ancien. Le chiffrement protège la confidentialité mais laisse passer des données malveillantes légitimement soumises — techniquement vrai, hors cible ; geler le modèle est un absolu qui détruit la valeur métier du réentraînement ; et la relecture manuelle quotidienne de millions d'avis est irréaliste.",
      "difficulte": 3,
      "pourquoi": [
        "Techniquement vrai mais hors cible : le chiffrement protège la confidentialité, pas contre des données malveillantes soumises par le canal légitime.",
        "Irréaliste à l'échelle : la relecture manuelle quotidienne de volumes massifs de données est impraticable.",
        "Bonne réponse : assainissement des entrées, intégrité du pipeline et comparaison à une référence avant promotion — défense en profondeur qui préserve le réentraînement.",
        "Absolu : geler le modèle supprime le risque en détruisant la valeur métier — l'inverse de l'arbitrage demandé."
      ]
    },
    {
      "q": "À la veille d'un salon stratégique, la direction produit demande de contourner le security gate : l'analyse SCA bloque la release phare pour une vulnérabilité haute sans correctif disponible. Que devrait faire le CISO EN PREMIER ?",
      "choix": [
        "Présenter le risque au propriétaire métier et faire formaliser une acceptation temporaire",
        "Refuser le contournement : les gates de sécurité ne doivent souffrir aucune exception",
        "Autoriser le déploiement et faire corriger discrètement après le salon",
        "Retarder la release jusqu'à la publication d'un correctif par le mainteneur de la bibliothèque"
      ],
      "reponse": 0,
      "explication": "Le CISO conseille, il n'est pas propriétaire du risque métier : face à un conflit entre sécurité et enjeu commercial majeur, la démarche correcte est de présenter le risque évalué au business owner et de faire formaliser une acceptation de risque temporaire — avec mesures compensatoires (WAF, surveillance renforcée, désactivation de la fonction vulnérable) et date de remédiation ferme. Refuser catégoriquement outrepasse son rôle et ignore le processus de gestion des risques ; retarder unilatéralement la release est une décision qui ne lui appartient pas seul ; et déployer « discrètement » contourne toute gouvernance et supprime la traçabilité qui protège aussi le CISO.",
      "difficulte": 3,
      "pourquoi": [
        "Bonne réponse : acceptation de risque formalisée par le business owner, mesures compensatoires et date de remédiation — la gouvernance des risques appliquée sous contrainte.",
        "Absolu et hors rôle : le CISO conseille le propriétaire du risque, il ne détient pas un droit de veto inconditionnel sur les décisions métier.",
        "Contournement de gouvernance : déployer sans trace formelle supprime la responsabilité documentée et expose l'organisation comme le CISO.",
        "Techniquement prudent mais hors rôle : retarder unilatéralement la release ignore l'enjeu commercial et court-circuite le propriétaire du risque."
      ]
    },
    {
      "q": "Une application critique vient de passer en production et le chef de projet annonce que « le volet sécurité est terminé ». En tant que responsable sécurité, que devriez-vous mettre en place EN PRIORITÉ pour la phase d'exploitation et de maintenance ?",
      "choix": [
        "Commander un test d'intrusion final pour clore formellement le projet",
        "Supervision continue, gestion des correctifs et change management",
        "Archiver le code source et réaffecter l'équipe de développement à d'autres projets",
        "Planifier un audit de conformité annuel comme unique contrôle post-déploiement"
      ],
      "reponse": 1,
      "explication": "La sécurité ne s'arrête pas au déploiement : la phase Operations and Maintenance exige une supervision continue des journaux et incidents, un processus de gestion des correctifs et des vulnérabilités, et le passage de toute modification par la gestion formelle du changement. Un pentest final est ponctuel et ne couvre pas la durée de vie, l'archivage du code ignore la maintenance, et un audit annuel seul laisse l'application exposée entre deux audits.",
      "difficulte": 2,
      "pourquoi": [
        "Ponctuel : un pentest de clôture photographie un instant, il ne protège pas l'application pendant des années d'exploitation.",
        "Bonne réponse : supervision continue, patch et vulnerability management, et change management formel sont les activités de sécurité qui définissent la phase O&M.",
        "Contresens : archiver le code et dissoudre l'équipe supprime la capacité même de corriger et de maintenir le logiciel.",
        "Insuffisant : un audit annuel est détectif et espacé ; il ne remplace ni les correctifs ni la supervision au quotidien."
      ]
    },
    {
      "q": "Un programme logiciel de défense accumule des retards : chaque décision de conception est validée séquentiellement par l'ingénierie, puis la sécurité, puis les achats, puis les représentants des utilisateurs, et chaque étape renvoie le dossier en arrière. Quelle approche organisationnelle, recommandée par le DoD, corrige ce problème ?",
      "choix": [
        "Externaliser l'intégralité du programme à un intégrateur unique responsable de bout en bout",
        "Revenir à un cycle Waterfall strict avec des jalons contractuels de validation",
        "Créer un change advisory board chargé d'approuver chaque décision de conception",
        "Constituer une Integrated Product Team réunissant toutes les parties prenantes pour décider en parallèle"
      ],
      "reponse": 3,
      "explication": "L'Integrated Product Team, introduite par le DoD, est précisément conçue pour ce cas : une équipe multifonctionnelle — ingénierie, sécurité, achats, testeurs, utilisateurs — travaille ensemble sur tout le cycle de vie et prend les décisions en parallèle plutôt qu'en revues séquentielles. Externaliser déplace le problème sans le résoudre, Waterfall renforce la logique séquentielle qui cause les retards, et un CAB est un organe d'approbation des changements, pas une structure de conception collaborative.",
      "difficulte": 2,
      "pourquoi": [
        "Déplacement du problème : l'intégrateur unique reproduira les mêmes validations séquentielles en interne et réduit votre visibilité.",
        "Aggravation : Waterfall institutionnalise justement l'enchaînement séquentiel de validations qui cause les retards.",
        "Piège de vocabulaire : le CAB approuve des changements en exploitation ; ce n'est pas une équipe pluridisciplinaire de conception.",
        "Bonne réponse : l'IPT du DoD réunit toutes les parties prenantes autour du produit pour des décisions parallèles, éliminant les allers-retours séquentiels."
      ]
    },
    {
      "q": "Un incident révèle qu'un développeur avait installé un utilitaire de build téléchargé sur un forum, qui contenait un cheval de Troie ayant accédé au dépôt de code. Les développeurs revendiquent la liberté de choisir leurs outils pour rester productifs. Quelle mesure de gouvernance équilibre le MIEUX productivité et sécurité ?",
      "choix": [
        "Faire valider les demandes d'outils par le CAB, puis surveiller les outils approuvés",
        "Interdire tout outil qui n'a pas été développé en interne par l'organisation",
        "Maintenir le libre choix des outils en le compensant par un antivirus sur chaque poste",
        "Limiter la revue de sécurité aux seuls outils open source, les outils commerciaux étant réputés sûrs"
      ],
      "reponse": 0,
      "explication": "La bonne pratique consiste à canaliser les demandes d'outils vers un change advisory board qui évalue les risques avant approbation, puis à faire surveiller les outils approuvés par l'équipe sécurité : les développeurs obtiennent les outils dont ils ont besoin, par un canal maîtrisé. Tout interdire sauf l'interne est un absolu irréaliste qui détruit la productivité, un antivirus seul ne détecte pas les outils malveillants inconnus, et présumer les outils commerciaux sûrs est démenti par les attaques de supply chain.",
      "difficulte": 2,
      "pourquoi": [
        "Bonne réponse : la validation par le CAB avec analyse de risques, suivie de la surveillance par la sécurité, canalise le besoin des développeurs sans l'étouffer.",
        "Absolu irréaliste : ne rien autoriser d'externe condamne l'équipe à réinventer son outillage et pousse au contournement clandestin.",
        "Contrôle insuffisant : l'antivirus est détectif et signe-dépendant ; il laisse passer un utilitaire piégé inconnu et ne gouverne rien.",
        "Fausse prémisse : les attaques de supply chain comme SolarWinds prouvent que les outils commerciaux ne sont pas sûrs par nature."
      ]
    },
    {
      "q": "Votre organisation découvre qu'une extension d'IDE installée par plusieurs développeurs depuis une place de marché publique exfiltrait les variables d'environnement, dont des jetons d'accès aux dépôts. Quelle est la MEILLEURE mesure préventive contre la répétition de ce scénario ?",
      "choix": [
        "Revenir à des éditeurs de texte minimalistes sans système d'extensions",
        "Chiffrer intégralement les disques des postes de développement",
        "Gouverner l'IDE et ses extensions : liste approuvée, sources contrôlées, mises à jour gérées",
        "Stocker les jetons d'accès directement dans le code source d'un dépôt privé plutôt que dans les variables d'environnement"
      ],
      "reponse": 2,
      "explication": "L'IDE et ses extensions font partie de l'écosystème de développement et doivent être gouvernés comme tout logiciel : catalogue d'extensions vérifiées et approuvées, installation depuis des sources contrôlées, et mises à jour gérées. Supprimer les extensions sacrifie la productivité sans traiter la cause, le chiffrement de disque protège contre le vol physique mais pas contre un code malveillant s'exécutant dans la session, et placer des secrets dans un dépôt, même privé, aggrave l'exposition.",
      "difficulte": 2,
      "pourquoi": [
        "Absolu contre-productif : priver les développeurs d'outillage moderne détruit la productivité sans gouverner le vrai problème, la provenance du code exécuté.",
        "Hors cible : le chiffrement de disque protège les données au repos contre un vol physique, pas contre une extension malveillante s'exécutant dans la session de l'utilisateur.",
        "Bonne réponse : liste d'extensions approuvées, sources contrôlées et mises à jour gérées appliquent à l'IDE la même gouvernance qu'à tout logiciel de l'écosystème de développement.",
        "Aggravation : des secrets committés dans un dépôt, même privé, sont un anti-pattern majeur — exposition durable dans l'historique et à tout accès au dépôt."
      ]
    },
    {
      "q": "Une application métier est corrigée à chaque sprint, mais l'audit révèle qu'elle s'exécute sur une machine virtuelle Java qui n'a reçu aucune mise à jour depuis trois ans. Quelle est la MEILLEURE réponse à ce constat ?",
      "choix": [
        "Aucune action : le code applicatif étant corrigé en continu, le risque global est couvert",
        "Réécrire l'application dans un langage compilé nativement pour supprimer la dépendance au runtime",
        "Isoler définitivement le serveur du réseau pour neutraliser les vulnérabilités de la JVM",
        "Intégrer les environnements d'exécution au processus de gestion des correctifs et des vulnérabilités, au même titre que les applications"
      ],
      "reponse": 3,
      "explication": "Le runtime — JVM, interpréteurs, images de conteneurs — est un composant logiciel dont les vulnérabilités exposent toutes les applications qu'il héberge, quel que soit l'état du code applicatif. Il doit donc être inventorié et corrigé par le même processus de patch et vulnerability management. Corriger seulement l'application laisse la couche d'exécution vulnérable, une réécriture complète est disproportionnée et échange un runtime contre d'autres dépendances, et l'isolement total est un absolu qui casse la fonction métier.",
      "difficulte": 2,
      "pourquoi": [
        "Fausse assurance : les failles de la JVM s'exploitent indépendamment de la qualité du code applicatif — la couche d'exécution reste béante.",
        "Disproportionné : une réécriture coûte des années et remplace simplement une dépendance par d'autres (bibliothèques, compilateur) qu'il faudra aussi maintenir.",
        "Absolu : l'isolement réseau total neutralise l'application autant que la menace ; c'est un contournement, pas une gestion du risque.",
        "Bonne réponse : le runtime est un actif logiciel comme un autre — inventaire, veille sur les vulnérabilités et correctifs via le processus standard."
      ]
    },
    {
      "q": "Pendant l'analyse d'un incident, l'équipe constate que le binaire en production diffère de la version validée en préproduction, sans que personne ne puisse dire quand ni par qui l'écart a été introduit. Quelle discipline, correctement appliquée, aurait empêché cette situation ?",
      "choix": [
        "Le pair programming systématique sur tout le code applicatif",
        "La software configuration management des artefacts",
        "Une campagne de fuzzing sur l'environnement de préproduction",
        "L'analyse dynamique DAST exécutée avant chaque mise en production"
      ],
      "reponse": 1,
      "explication": "La software configuration management (SCM) identifie les attributs et versions du logiciel à chaque étape, applique un contrôle de changement méthodique et maintient l'intégrité et la traçabilité des artefacts tout au long du SDLC : un écart entre préproduction et production serait détecté et attribuable. Le pair programming améliore la qualité du code écrit mais ne gouverne pas les artefacts déployés, et le fuzzing comme le DAST cherchent des vulnérabilités, pas des écarts de configuration ou des modifications non tracées.",
      "difficulte": 2,
      "pourquoi": [
        "Hors périmètre : le pair programming relit le code au moment de l'écriture ; il ne contrôle ni les versions ni ce qui est réellement déployé.",
        "Bonne réponse : la SCM garantit l'identification des versions, l'intégrité des artefacts et la traçabilité de chaque changement — exactement ce qui manquait.",
        "Hors sujet : le fuzzing bombarde l'application d'entrées malformées pour trouver des bugs, il ne compare pas des versions d'artefacts.",
        "Hors sujet : le DAST détecte des vulnérabilités à l'exécution ; il ne dit rien sur la provenance ni la conformité de la version déployée."
      ]
    },
    {
      "q": "Un auditeur externe vous demande de démontrer qu'aucun changement non autorisé n'a atteint l'application de paiement en production au cours des six derniers mois. Quelle source de preuve est la PLUS probante ?",
      "choix": [
        "Les attestations écrites et signées des développeurs de l'équipe",
        "Les rapports SAST générés à chaque build du pipeline",
        "La piste d'audit reliant chaque déploiement à sa demande approuvée",
        "Le tableau de suivi du projet montrant les tickets clôturés sur la période"
      ],
      "reponse": 2,
      "explication": "Évaluer l'efficacité de la sécurité logicielle passe par l'audit et la journalisation des changements : la preuve la plus probante est une piste d'audit de bout en bout qui rapproche chaque déploiement d'une demande approuvée, d'une revue et d'une exécution du pipeline, sur des journaux dont l'intégrité est protégée. Les attestations sont déclaratives et invérifiables, les rapports SAST prouvent la qualité du code analysé mais pas l'autorisation des déploiements, et un tableau de projet se modifie sans trace fiable.",
      "difficulte": 3,
      "pourquoi": [
        "Déclaratif : une attestation signée reflète ce que les personnes affirment, pas ce qui s'est réellement produit — invérifiable pour un auditeur.",
        "Hors question : les rapports SAST prouvent que le code a été analysé, pas que chaque déploiement était autorisé et tracé.",
        "Bonne réponse : le rapprochement systématique déploiement–approbation–revue–pipeline sur des journaux intègres est la preuve d'audit de bout en bout attendue.",
        "Preuve faible : un outil de suivi de projet se modifie a posteriori et ne couvre pas ce qui a réellement été poussé en production."
      ]
    },
    {
      "q": "Une PME veut confier la paie à un service SaaS managé. Le fournisseur, un acteur majeur, décline la demande d'audit sur site formulée par le RSSI. Quelle est la MEILLEURE démarche avant de signer ?",
      "choix": [
        "Exiger des attestations indépendantes (SOC 2 type II, ISO 27001) et un contrat solide",
        "Abandonner le projet : sans audit sur site, aucune assurance de sécurité n'est possible",
        "Signer sans autre formalité : en SaaS, la sécurité des données relève entièrement du fournisseur",
        "Conditionner la signature au dépôt du code source de la plateforme chez un agent d'escrow"
      ],
      "reponse": 0,
      "explication": "Les grands fournisseurs cloud refusent quasi systématiquement les audits sur site individuels ; la due diligence s'appuie alors sur des attestations indépendantes comme un SOC 2 type II ou une certification ISO 27001, complétées par un contrat solide : responsabilité partagée explicite, SLA de sécurité, délais de notification d'incident et clause de réversibilité. Abandonner est un absolu disproportionné, croire que le SaaS transfère toute la responsabilité est faux — le client reste responsable de ses données —, et l'escrow protège contre la disparition d'un éditeur, pas contre les défaillances de sécurité d'un service opéré.",
      "difficulte": 3,
      "pourquoi": [
        "Bonne réponse : attestations indépendantes plus clauses contractuelles (responsabilité partagée, SLA, notification, réversibilité) — la due diligence réaliste face à un grand fournisseur.",
        "Absolu : le refus d'audit sur site est la norme chez les grands fournisseurs ; y voir un motif d'abandon prive le métier d'une solution viable malgré des assurances alternatives crédibles.",
        "Fausse croyance : même en SaaS, le client reste responsable de ses données, de ses accès et de sa conformité — la responsabilité ne se sous-traite pas.",
        "Hors cible : l'escrow couvre le risque de faillite ou d'abandon du produit ; il ne fournit aucune assurance sur la sécurité opérationnelle du service managé."
      ]
    },
    {
      "q": "Une organisation DevSecOps déploie ses microservices plusieurs fois par jour et veut que les règles de pare-feu, la segmentation et le placement des capteurs de détection s'ajustent automatiquement à chaque déploiement, à partir de définitions versionnées dans le dépôt. Quel concept décrit le MIEUX cette approche ?",
      "choix": [
        "Le RASP, qui embarque la protection dans chaque application",
        "Le durcissement manuel standardisé appliqué par l'équipe infrastructure à chaque release",
        "La séparation stricte des environnements par air gap",
        "La software-defined security : sécurité définie comme du code, pilotée par le pipeline"
      ],
      "reponse": 3,
      "explication": "La software-defined security découple les fonctions de sécurité du matériel : pare-feu, segmentation et capteurs sont définis comme du code, versionnés dans le dépôt, puis déployés et ajustés automatiquement par le pipeline CI/CD au rythme des livraisons — le scénario décrit exactement cela. Le RASP protège l'intérieur d'une application à l'exécution mais ne pilote pas les contrôles d'infrastructure, le durcissement manuel ne peut pas suivre plusieurs déploiements par jour, et l'air gap est une mesure d'isolement sans rapport avec l'adaptation dynamique des défenses.",
      "difficulte": 2,
      "pourquoi": [
        "Trop étroit : le RASP instrumente une application donnée à l'exécution ; il ne définit ni ne repositionne les contrôles réseau et de détection de l'environnement.",
        "Incompatible avec le rythme : un durcissement manuel, même standardisé, ne suit pas des déploiements pluriquotidiens et réintroduit dérive et délais.",
        "Hors sujet : l'air gap isole physiquement des environnements ; il n'offre aucune adaptation automatique des défenses au fil des déploiements.",
        "Bonne réponse : contrôles implémentés en logiciel, définis comme du code versionné et gérés activement dans le pipeline CI/CD — la définition même de la software-defined security."
      ]
    }
  ],
  "quizEn": [
    {
      "q": "A government agency is developing a payroll system with stable, well-understood requirements and a contractual obligation to produce exhaustive documentation and formal sign-off at each stage. Which development model is MOST appropriate?",
      "choix": [
        "Extreme Programming",
        "Waterfall",
        "Kanban",
        "Scrum"
      ],
      "reponse": 1,
      "explication": "Waterfall convient précisément aux projets dont les exigences sont stables et connues d'avance, avec des livrables documentaires et des validations formelles à chaque phase : sa rigidité, défaut ailleurs, devient ici un atout de traçabilité contractuelle. Scrum, XP et Kanban sont des approches Agile/Lean conçues pour des exigences évolutives et une documentation minimale, à l'opposé du besoin exprimé.",
      "difficulte": 1,
      "pourquoi": [
        "Hors contexte : XP est une méthode Agile axée sur le code et le feedback rapide.",
        "Bonne réponse : Waterfall convient aux exigences stables avec livrables documentaires et validations formelles à chaque phase.",
        "Hors contexte : Kanban est un flux Lean continu, sans jalons documentaires contractuels.",
        "Hors contexte : Scrum vise des exigences évolutives et une documentation minimale, l'inverse du besoin."
      ]
    },
    {
      "q": "At which point in the SDLC should a security professional FIRST be engaged to provide the greatest benefit at the lowest cost?",
      "choix": [
        "During acceptance testing, when the full system can be evaluated",
        "During code review, once the implementation exists",
        "During operations, based on real incident data",
        "During the requirements gathering phase, at project initiation"
      ],
      "reponse": 3,
      "explication": "La sécurité doit être impliquée dès la collecte des exigences : les besoins de sécurité y sont définis comme exigences non fonctionnelles, orientant toute la conception. Plus un défaut est découvert tard, plus il coûte cher à corriger — plusieurs dizaines de fois plus en production qu'en conception. Les tests d'acceptation, la revue de code et l'exploitation sont tous des points d'intervention utiles mais tardifs : c'est le principe du « shift left ».",
      "difficulte": 1,
      "pourquoi": [
        "Hors phase : les tests d'acceptation arrivent trop tard, quand corriger coûte le plus cher.",
        "Hors phase : la revue de code suppose une implémentation déjà écrite.",
        "Hors phase : l'exploitation subit les défauts non prévenus au coût maximal.",
        "Bonne réponse : impliquer la sécurité dès la collecte des exigences maximise le bénéfice au coût minimal — principe du shift left."
      ]
    },
    {
      "q": "Which activity BEST exemplifies the concept of \"shifting security left\" in a DevSecOps environment?",
      "choix": [
        "Performing an annual penetration test on the production environment",
        "Conducting threat modeling during the design phase and running SAST on every commit",
        "Establishing a bug bounty program for released products",
        "Deploying a web application firewall in front of production applications"
      ],
      "reponse": 1,
      "explication": "« Shift left » signifie déplacer les activités de sécurité vers le début du cycle de vie : le threat modeling en conception et le SAST à chaque commit détectent les défauts avant qu'ils n'atteignent la production, au moment où la correction est la moins coûteuse. Le pentest annuel, le WAF et le bug bounty interviennent tous « à droite », sur des systèmes déjà déployés : utiles en défense en profondeur, ils ne préviennent pas l'introduction des défauts.",
      "difficulte": 1,
      "pourquoi": [
        "Hors phase : un pentest annuel de production intervient tout « à droite » du cycle.",
        "Bonne réponse : threat modeling en conception et SAST à chaque commit déplacent la sécurité vers l'amont du cycle — définition du shift left.",
        "Hors phase : un bug bounty s'applique aux produits déjà livrés.",
        "Hors phase : un WAF protège des systèmes déjà déployés."
      ]
    },
    {
      "q": "A CISO wants to assess and improve the organization's software security practices using an open framework organized around business functions such as Governance, Design, Implementation, Verification, and Operations. Which model BEST fits this need?",
      "choix": [
        "IDEAL",
        "SW-CMM",
        "OWASP SAMM",
        "ISO 31000"
      ],
      "reponse": 2,
      "explication": "Le Software Assurance Maturity Model (SAMM) d'OWASP est un cadre open source dédié à la maturité de la SÉCURITÉ logicielle, structuré autour de cinq fonctions métier : Governance, Design, Implementation, Verification et Operations. Le SW-CMM mesure la maturité générale des processus de développement sans traiter explicitement la sécurité, IDEAL est un modèle d'amélioration des processus du SEI, et ISO 31000 est un cadre de management des risques d'entreprise, pas un modèle de maturité logicielle.",
      "difficulte": 2,
      "pourquoi": [
        "Hors catégorie : IDEAL est un modèle d'amélioration des processus du SEI, sans fonctions métier de sécurité.",
        "Techniquement vrai mais trop générique : le SW-CMM mesure la maturité des processus sans traiter la sécurité.",
        "Bonne réponse : le SAMM d'OWASP est structuré autour des fonctions Governance, Design, Implementation, Verification et Operations.",
        "Hors catégorie : ISO 31000 est un cadre de management des risques d'entreprise."
      ]
    },
    {
      "q": "Developers merge code into a shared repository several times per day, automatically triggering builds and test suites. Code that passes all tests is packaged and ready for production, but an operations manager must approve each release. Which practices are in place?",
      "choix": [
        "Continuous integration with continuous deployment",
        "Trunk-based development with continuous deployment",
        "Continuous monitoring with release control",
        "Continuous integration with continuous delivery"
      ],
      "reponse": 3,
      "explication": "Les fusions fréquentes avec builds et tests automatiques définissent la continuous integration ; le fait que le code soit toujours prêt pour la production mais qu'une APPROBATION HUMAINE reste requise correspond au continuous delivery. Le continuous deployment supprimerait cette approbation : tout changement passant les tests irait automatiquement en production. C'est la distinction favorite de l'examen entre delivery et deployment.",
      "difficulte": 2,
      "pourquoi": [
        "Piège de proximité : le continuous deployment supprimerait l'approbation humaine décrite.",
        "Mauvaise combinaison : l'approbation manuelle exclut le continuous deployment, quel que soit le mode de branche.",
        "Hors sujet : le continuous monitoring est de la supervision, pas une pratique de livraison.",
        "Bonne réponse : fusions et tests automatiques = CI ; code toujours prêt mais approbation humaine requise = continuous delivery."
      ]
    },
    {
      "q": "A developer accidentally pushes a file containing production database credentials to the organization's source code repository. The file has been deleted in a subsequent commit. What should the security team do NEXT?",
      "choix": [
        "Rotate the exposed credentials immediately and review access logs for misuse",
        "Enable branch protection rules on the repository",
        "Send the developer to secure coding training",
        "Purge the repository history to remove all traces of the file"
      ],
      "reponse": 0,
      "explication": "Un secret entré dans un dépôt doit être considéré comme compromis : l'historique Git le conserve malgré la suppression du fichier, et des clones ont pu être réalisés. La priorité est de révoquer et remplacer les identifiants, puis de vérifier dans les journaux s'ils ont été utilisés. La purge de l'historique est un nettoyage complémentaire qui n'annule pas les copies existantes ; la formation et les protections de branche sont des mesures préventives pour l'avenir, pas la réponse à l'exposition en cours.",
      "difficulte": 2,
      "pourquoi": [
        "Bonne réponse : les identifiants sont réputés compromis — les révoquer puis vérifier les journaux d'accès traite le risque actif.",
        "Préventif hors phase : la protection de branche n'aurait d'effet que pour l'avenir.",
        "Préventif hors phase : la formation n'agit pas sur les identifiants encore valides.",
        "Nettoyage utile mais insuffisant : la purge n'annule pas les clones déjà réalisés."
      ]
    },
    {
      "q": "Which approach BEST reduces the risk associated with secrets used by automated CI/CD pipeline jobs?",
      "choix": [
        "Embedding secrets in container images at build time",
        "Retrieving short-lived credentials at runtime from a centralized secrets management service",
        "Sharing a single service account password across all pipeline stages",
        "Storing secrets in environment configuration files committed with the code"
      ],
      "reponse": 1,
      "explication": "Un service centralisé de gestion des secrets délivre au pipeline des identifiants dynamiques à courte durée de vie, injectés uniquement à l'exécution : rien ne persiste dans le code, les images ou les journaux, la rotation est automatique et chaque accès est audité. Les fichiers de configuration commités exposent les secrets à tout l'historique du dépôt ; les secrets incorporés aux images sont extractibles de chaque couche ; et un mot de passe unique partagé supprime la traçabilité et maximise l'impact d'une compromission.",
      "difficulte": 2,
      "pourquoi": [
        "Extractibles : des secrets incorporés aux images se lisent dans chaque couche.",
        "Bonne réponse : des identifiants éphémères délivrés à l'exécution par un service centralisé éliminent la persistance et centralisent l'audit.",
        "Anti-modèle : un mot de passe unique partagé supprime la traçabilité et maximise l'impact d'une fuite.",
        "Exposition garantie : des fichiers commités livrent les secrets à tout l'historique du dépôt."
      ]
    },
    {
      "q": "After learning about attacks in which a compromised build server injected malicious code into legitimately signed software updates, an organization wants assurance that its released artifacts match its reviewed source code. Which control BEST provides this assurance?",
      "choix": [
        "Requiring two-person code review on all pull requests",
        "Scanning released binaries with antivirus software",
        "Encrypting the source code repository at rest",
        "Signed provenance attestations from a hardened build"
      ],
      "reponse": 3,
      "explication": "L'attaque de type SolarWinds compromet le processus de BUILD : le code source relu est sain, mais l'artefact produit ne l'est plus. La parade est une chaîne de build de confiance : environnement durci, éphémère et isolé, et attestations de provenance signées (approche SLSA) prouvant que chaque artefact provient bien du code source examiné et du processus attendu. La revue à deux personnes ne voit pas une injection post-compilation, l'antivirus ne détecte pas un implant furtif inédit, et le chiffrement du dépôt ne protège pas le pipeline.",
      "difficulte": 3,
      "pourquoi": [
        "Techniquement vrai mais hors cible : la revue à deux ne voit pas une injection post-compilation.",
        "Trop faible : l'antivirus ne détecte pas un implant furtif inédit.",
        "Hors sujet : chiffrer le dépôt au repos ne protège pas le pipeline de build.",
        "Bonne réponse : des attestations de provenance signées issues d'un build durci et isolé prouvent que l'artefact correspond au code source relu."
      ]
    },
    {
      "q": "What is the PRIMARY purpose of maintaining a Software Bill of Materials (SBOM) for each application?",
      "choix": [
        "A formal inventory of all components and dependencies",
        "To prove compliance with open source license obligations only",
        "To estimate the development cost of the application",
        "To document the application's functional requirements for auditors"
      ],
      "reponse": 0,
      "explication": "Le SBOM est l'inventaire formel de tous les composants, bibliothèques et dépendances — y compris transitives — d'un logiciel. Sa valeur première en sécurité est la réactivité : lors de la divulgation d'une vulnérabilité comme Log4Shell, il permet d'identifier immédiatement les applications affectées. La conformité des licences est un bénéfice secondaire réel mais non principal, et le SBOM ne documente ni les exigences fonctionnelles ni les coûts.",
      "difficulte": 1,
      "pourquoi": [
        "Bonne réponse : inventaire formel des composants et dépendances, il permet d'identifier immédiatement l'exposition lors d'une nouvelle divulgation.",
        "Trop étroit : la conformité des licences est un bénéfice secondaire, pas le but principal.",
        "Hors sujet : le SBOM n'estime aucun coût de développement.",
        "Hors sujet : le SBOM n'est pas un document d'exigences fonctionnelles."
      ]
    },
    {
      "q": "An organization's build system resolves packages from both an internal registry and a public repository. An attacker publishes a package on the public repository using the name of an internal library with a higher version number, and the build system downloads it. Which attack has occurred?",
      "choix": [
        "Watering hole attack",
        "Cross-site scripting",
        "Dependency confusion",
        "Typosquatting"
      ],
      "reponse": 2,
      "explication": "La dependency confusion exploite les résolveurs de paquets configurés sur plusieurs registres : l'attaquant publie sur le registre public un homonyme du paquet interne avec une version supérieure, que le gestionnaire préfère automatiquement. Le typosquatting repose sur des fautes de frappe humaines dans des noms proches, le watering hole compromet un site fréquenté par les cibles, et le XSS est une vulnérabilité web sans rapport. Défenses : registre privé prioritaire ou exclusif, épinglage des versions, vérification des hashes.",
      "difficulte": 2,
      "pourquoi": [
        "Hors contexte : le watering hole piège un site fréquenté par les cibles.",
        "Hors sujet : le XSS est une vulnérabilité web sans lien avec la résolution de paquets.",
        "Bonne réponse : l'homonyme public à version supérieure préféré par le résolveur multi-registres est la dependency confusion.",
        "Piège de proximité : le typosquatting exige une faute de frappe humaine sur un nom voisin."
      ]
    },
    {
      "q": "Which application security testing technique examines source code for vulnerabilities WITHOUT executing the program?",
      "choix": [
        "Dynamic application security testing (DAST)",
        "Static application security testing (SAST)",
        "Fuzz testing",
        "Runtime application self-protection (RASP)"
      ],
      "reponse": 1,
      "explication": "Le SAST analyse le code source, le bytecode ou les binaires SANS exécuter l'application : approche boîte blanche, applicable tôt dans le cycle, qui localise précisément les défauts dans le code. Le DAST teste l'application EN EXÉCUTION de l'extérieur, le fuzzing envoie des entrées malformées à un programme en fonctionnement, et le RASP est un mécanisme de protection embarqué à l'exécution, pas une technique de test.",
      "difficulte": 1,
      "pourquoi": [
        "Inversion : le DAST teste l'application en cours d'exécution, de l'extérieur.",
        "Bonne réponse : le SAST analyse le code source sans exécuter le programme — approche boîte blanche en amont.",
        "Hors sujet : le fuzzing envoie des entrées malformées à un programme en fonctionnement.",
        "Hors catégorie : le RASP est un mécanisme de protection à l'exécution, pas une technique de test."
      ]
    },
    {
      "q": "A security consultant is asked to test a web application. She has no access to source code or documentation and interacts only with the running application over HTTP, as an attacker would. Which testing approach is she using?",
      "choix": [
        "SAST",
        "Software composition analysis",
        "DAST",
        "Regression testing"
      ],
      "reponse": 2,
      "explication": "Le DAST (dynamic application security testing) évalue l'application en cours d'exécution, de l'extérieur, sans accès au code source : c'est une approche boîte noire qui reproduit le point de vue de l'attaquant. Le SAST exige l'accès au code sans exécution ; la SCA inventorie les composants tiers et leurs vulnérabilités connues ; et les tests de régression vérifient que les modifications n'ont pas cassé les fonctionnalités existantes — un objectif de qualité, pas de sécurité offensive.",
      "difficulte": 1,
      "pourquoi": [
        "Contresens : le SAST exige l'accès au code, qu'elle n'a pas.",
        "Hors sujet : la SCA inventorie les composants tiers.",
        "Bonne réponse : tester l'application en exécution, sans code ni documentation, comme un attaquant, est la définition du DAST boîte noire.",
        "Hors sujet : les tests de régression vérifient la non-régression fonctionnelle, pas la sécurité offensive."
      ]
    },
    {
      "q": "Which technology combines elements of static and dynamic analysis by instrumenting the running application from within, providing code-level context for vulnerabilities discovered during execution?",
      "choix": [
        "Software composition analysis (SCA)",
        "Web application firewall (WAF)",
        "Network vulnerability scanning",
        "Interactive application security testing (IAST)"
      ],
      "reponse": 3,
      "explication": "L'IAST instrumente l'application pendant son exécution (généralement lors des tests fonctionnels) avec un accès au code : il combine la visibilité interne du SAST et le réalisme d'exécution du DAST, réduisant les faux positifs et localisant précisément les défauts. Le WAF est un contrôle de protection, pas de test ; la SCA analyse les dépendances tierces ; et le scan réseau opère au niveau infrastructure, sans contexte applicatif.",
      "difficulte": 2,
      "pourquoi": [
        "Hors sujet : la SCA analyse les dépendances, sans instrumentation d'exécution.",
        "Hors catégorie : le WAF est un contrôle de protection, pas de test.",
        "Trop superficiel : le scan réseau opère au niveau infrastructure, sans contexte applicatif.",
        "Bonne réponse : instrumenter l'application en exécution avec un contexte code est la définition de l'IAST, hybride SAST/DAST."
      ]
    },
    {
      "q": "During testing, an application error displays a full stack trace, framework version, and SQL query text to the end user. Which secure coding principle is MOST directly violated?",
      "choix": [
        "Show generic errors to users; log details server-side only",
        "Separation of duties between developers and the operators who deploy",
        "Defense in depth",
        "Least privilege"
      ],
      "reponse": 0,
      "explication": "La gestion sécurisée des erreurs impose des messages génériques côté utilisateur et la journalisation des détails techniques côté serveur uniquement : pile d'appels, versions et requêtes SQL offrent à un attaquant une cartographie précieuse pour cibler ses attaques (notamment l'injection SQL). Le moindre privilège concerne les droits d'accès, la défense en profondeur l'empilement des contrôles, et la séparation des tâches la répartition des responsabilités : aucun n'est le principe directement violé ici.",
      "difficulte": 1,
      "pourquoi": [
        "Bonne réponse : la gestion d'erreurs sécurisée impose des messages génériques côté utilisateur et des détails journalisés côté serveur.",
        "Hors sujet : la séparation des tâches répartit les responsabilités humaines.",
        "Trop générique : la défense en profondeur n'est pas le principe directement violé.",
        "Hors sujet : le moindre privilège concerne les droits d'accès, pas les messages d'erreur."
      ]
    },
    {
      "q": "An attacker posts a product review containing JavaScript that is stored by the server and later executes in the browser of every user who views the product page, sending their session cookies to the attacker. Which is the MOST effective set of remediations?",
      "choix": [
        "Parameterized queries and stored procedures",
        "TLS 1.3 with certificate pinning",
        "Anti-CSRF tokens and SameSite cookies",
        "Output encoding, CSP, and HttpOnly cookies"
      ],
      "reponse": 3,
      "explication": "Il s'agit d'un stored XSS : le script persiste côté serveur et s'exécute chez chaque visiteur. La défense combine la validation des entrées, l'encodage contextuel des sorties (la mesure centrale), une Content Security Policy restreignant les scripts exécutables, et l'attribut HttpOnly qui rend les cookies inaccessibles à JavaScript. Les jetons anti-CSRF visent le CSRF, les requêtes paramétrées l'injection SQL, et TLS protège le transport — aucun n'empêche l'exécution du script dans le navigateur.",
      "difficulte": 2,
      "pourquoi": [
        "Mauvaise cible : les requêtes paramétrées neutralisent l'injection SQL.",
        "Mauvaise cible : TLS protège le transport, pas l'exécution du script dans le navigateur.",
        "Mauvaise cible : les jetons anti-CSRF et SameSite combattent le CSRF, pas un script exécuté.",
        "Bonne réponse : validation des entrées, encodage contextuel des sorties, CSP et cookies HttpOnly traitent le stored XSS en profondeur."
      ]
    },
    {
      "q": "Which control is SPECIFICALLY designed to prevent cross-site request forgery attacks?",
      "choix": [
        "Output encoding of user-supplied data",
        "Unique anti-CSRF tokens per request",
        "Password complexity requirements",
        "Database connection pooling"
      ],
      "reponse": 1,
      "explication": "Le CSRF exploite le fait que le navigateur joint automatiquement les cookies de session aux requêtes, même émises depuis un site attaquant. Le jeton anti-CSRF — secret unique et imprévisible exigé avec chaque requête modifiant un état — ne peut pas être connu du site attaquant, ce qui invalide la requête forgée ; l'attribut de cookie SameSite complète la défense. L'encodage des sorties contre le XSS, la robustesse des mots de passe et le pooling de connexions n'ont aucun effet sur le CSRF.",
      "difficulte": 1,
      "pourquoi": [
        "Mauvaise cible : l'encodage des sorties combat le XSS.",
        "Bonne réponse : un jeton anti-CSRF unique et imprévisible, validé à chaque requête modifiant un état, est LE contrôle spécifique anti-CSRF.",
        "Hors sujet : la victime est déjà authentifiée, la complexité du mot de passe n'intervient pas.",
        "Hors sujet : le pooling de connexions est une optimisation de performance."
      ]
    },
    {
      "q": "A penetration tester bypasses an application's login form by entering ' OR '1'='1' -- in the username field. Which remediation provides the MOST effective long-term protection?",
      "choix": [
        "Suppressing database error messages returned to the browser",
        "Renaming database tables to non-obvious names",
        "Using parameterized queries so user input is never interpreted as SQL code",
        "Blocking single-quote characters at the web application firewall"
      ],
      "reponse": 2,
      "explication": "Les requêtes paramétrées (prepared statements) séparent structurellement le code SQL des données : l'entrée utilisateur est traitée comme une valeur, jamais comme de la syntaxe, ce qui élimine l'injection à la racine. Le filtrage de caractères au WAF est un blacklisting contournable par encodages ; masquer les erreurs ne fait que rendre l'injection « blind » ; et renommer les tables relève de la sécurité par l'obscurité, sans effet sur la vulnérabilité elle-même.",
      "difficulte": 1,
      "pourquoi": [
        "Palliatif : masquer les erreurs rend l'injection « blind » sans l'empêcher.",
        "Sécurité par l'obscurité : renommer les tables ne corrige rien.",
        "Bonne réponse : les requêtes paramétrées garantissent que l'entrée n'est jamais interprétée comme du SQL — protection durable à la racine.",
        "Blacklisting fragile : le filtrage de caractères au WAF se contourne par encodages."
      ]
    },
    {
      "q": "A web application accepts a URL from users and fetches its content server-side to generate previews. An attacker submits the address of the cloud provider's instance metadata service and retrieves temporary IAM credentials. Which vulnerability was exploited?",
      "choix": [
        "Server-side request forgery",
        "Reflected cross-site scripting",
        "Cross-site request forgery",
        "Open redirect"
      ],
      "reponse": 0,
      "explication": "Le SSRF amène le SERVEUR à émettre des requêtes vers des cibles choisies par l'attaquant, typiquement des ressources internes injoignables depuis Internet, comme le service de métadonnées cloud qui délivre des identifiants IAM temporaires. Le CSRF et le XSS s'exécutent dans le NAVIGATEUR d'une victime, et l'open redirect renvoie l'utilisateur vers un site tiers. Défenses : liste blanche de destinations, blocage des plages d'adresses internes, IMDSv2 avec jeton de session.",
      "difficulte": 3,
      "pourquoi": [
        "Bonne réponse : le serveur émettant une requête forgée vers le service de métadonnées interne est un server-side request forgery.",
        "Mauvais acteur : le XSS s'exécute dans le navigateur, pas côté serveur.",
        "Mauvais acteur : le CSRF fait agir le navigateur d'une victime authentifiée.",
        "Trop faible : l'open redirect renvoie l'utilisateur vers un site tiers, sans requête serveur interne."
      ]
    },
    {
      "q": "Authenticated users of a customer portal discover they can view other customers' invoices by incrementing the numeric invoice identifier in the URL. To which OWASP Top 10 category does this flaw belong?",
      "choix": [
        "Identification and Authentication Failures",
        "Broken Access Control",
        "Insecure Design",
        "Injection"
      ],
      "reponse": 1,
      "explication": "C'est une Insecure Direct Object Reference (IDOR), archétype de la catégorie Broken Access Control — numéro un de l'OWASP Top 10 2021 : l'utilisateur est correctement AUTHENTIFIÉ, mais l'application ne vérifie pas son AUTORISATION sur l'objet demandé. Il n'y a pas d'injection de code, l'authentification fonctionne, et si l'on peut discuter d'un défaut de conception, la catégorie précise qui décrit ce contrôle d'accès manquant est Broken Access Control.",
      "difficulte": 1,
      "pourquoi": [
        "Mauvais diagnostic : l'authentification fonctionne parfaitement, c'est l'autorisation qui manque.",
        "Bonne réponse : utilisateur authentifié mais autorisation objet jamais vérifiée — IDOR, archétype de Broken Access Control.",
        "Trop générique : le défaut précis est le contrôle d'accès manquant, pas la conception globale.",
        "Mauvais diagnostic : aucune donnée n'est injectée dans une requête."
      ]
    },
    {
      "q": "A statistical HR database allows aggregate salary queries. An analyst issues a series of increasingly narrow queries until the results reveal the exact salary of a single named executive. Which attack has the analyst performed?",
      "choix": [
        "SQL injection",
        "Aggregation",
        "Inference",
        "Polyinstantiation"
      ],
      "reponse": 2,
      "explication": "L'inference consiste à DÉDUIRE une information de sensibilité supérieure à partir de requêtes individuellement autorisées : en rétrécissant les filtres, l'analyste isole une valeur individuelle qu'il n'a pas le droit de connaître. L'agrégation est le problème inverse-complémentaire — combiner des données pour créer de la sensibilité — mais ici c'est bien la déduction par requêtes successives qui opère. La polyinstantiation est une DÉFENSE, et aucune injection SQL n'est utilisée : les requêtes sont légitimes.",
      "difficulte": 2,
      "pourquoi": [
        "Mauvais diagnostic : les requêtes sont légitimes, aucune injection n'est utilisée.",
        "Piège de vocabulaire : l'agrégation est le problème de combinaison ; ici l'analyste DÉDUIT activement par requêtes successives.",
        "Bonne réponse : rétrécir les requêtes autorisées jusqu'à isoler une valeur individuelle est une attaque par inference.",
        "Inversion de rôle : la polyinstantiation est une défense, pas une attaque."
      ]
    },
    {
      "q": "In a multilevel secure database, which technique prevents a lower-cleared user from inferring the existence of classified data by allowing records with the same primary key to exist at different classification levels?",
      "choix": [
        "Polyinstantiation",
        "Database sharding",
        "Referential integrity",
        "Normalization"
      ],
      "reponse": 0,
      "explication": "La polyinstantiation autorise plusieurs instances d'un enregistrement partageant la même clé primaire à des niveaux de classification différents : l'utilisateur faiblement habilité voit une version banale, sans erreur de « clé dupliquée » qui trahirait l'existence d'un enregistrement classifié. La normalisation élimine la redondance structurelle (l'inverse), l'intégrité référentielle maintient la cohérence des clés étrangères, et le sharding est un partitionnement de performance, sans dimension de classification.",
      "difficulte": 2,
      "pourquoi": [
        "Bonne réponse : la polyinstantiation fait coexister des enregistrements de même clé à des niveaux de classification différents, empêchant l'inférence.",
        "Hors sujet : le sharding est un partitionnement de performance sans dimension de classification.",
        "Hors sujet : l'intégrité référentielle maintient la cohérence des clés étrangères.",
        "Contresens : la normalisation élimine justement les clés dupliquées."
      ]
    },
    {
      "q": "A data warehouse project combines individually harmless records from several operational systems. The security team notes that the combined dataset now reveals sensitive patterns about employees. Which database security issue does this describe?",
      "choix": [
        "Inference",
        "Deadlock",
        "Dirty read",
        "Aggregation"
      ],
      "reponse": 3,
      "explication": "L'aggregation est le problème par lequel la COMBINAISON de données individuellement non sensibles produit un ensemble d'une sensibilité supérieure : c'est un risque inhérent aux entrepôts de données qui centralisent des sources multiples. L'inference est l'acte de déduction qui peut exploiter cette combinaison, mais le phénomène décrit — la réunion des données — est l'agrégation. La dirty read et le deadlock sont des problèmes de concurrence transactionnelle, sans rapport avec la confidentialité.",
      "difficulte": 1,
      "pourquoi": [
        "Piège de vocabulaire : l'inférence est l'acte de déduction ; le phénomène décrit est la réunion des données.",
        "Hors sujet : le deadlock est un blocage mutuel de transactions.",
        "Hors sujet : la dirty read est un problème de concurrence transactionnelle.",
        "Bonne réponse : combiner des enregistrements individuellement anodins en un ensemble sensible est le problème d'aggregation, typique des entrepôts."
      ]
    },
    {
      "q": "Transaction A reads a row that transaction B has updated but not yet committed. Transaction B then rolls back, leaving A with data that never officially existed. Which ACID property has been violated?",
      "choix": [
        "Isolation",
        "Consistency",
        "Atomicity",
        "Durability"
      ],
      "reponse": 0,
      "explication": "C'est une dirty read, violation de l'ISOLATION : les transactions concurrentes ne doivent pas voir les modifications non validées les unes des autres, comme si chacune s'exécutait seule. L'atomicité garantit le tout-ou-rien d'une transaction (le rollback de B a d'ailleurs fonctionné), la cohérence le respect des règles d'intégrité, et la durabilité la persistance des transactions VALIDÉES. Retenez l'association d'examen : dirty read = échec d'isolation.",
      "difficulte": 2,
      "pourquoi": [
        "Bonne réponse : lire les modifications non validées d'une autre transaction est une dirty read, violation de l'Isolation.",
        "Hors sujet : la cohérence porte sur les règles d'intégrité de la base.",
        "Piège : l'atomicité a fonctionné — le rollback de B s'est bien exécuté.",
        "Hors sujet : la durabilité concerne la persistance des transactions validées."
      ]
    },
    {
      "q": "An architect must secure east-west communication among dozens of microservices in accordance with zero trust principles. Which approach BEST meets this requirement?",
      "choix": [
        "Using a shared static API key embedded in every service's configuration",
        "Trusting all internal traffic because the perimeter firewall blocks external attackers",
        "Mutual TLS with a unique cryptographic identity per service, via a service mesh",
        "Routing all inter-service traffic through the public API gateway"
      ],
      "reponse": 2,
      "explication": "Le zero trust supprime la confiance implicite du réseau interne : chaque service doit prouver cryptographiquement son identité à chaque échange. Le mTLS assure l'authentification mutuelle et le chiffrement du trafic est-ouest, avec des certificats de courte durée par service gérés par un service mesh qui applique aussi des politiques d'autorisation fines. La confiance périmétrique s'effondre dès qu'un service est compromis ; une clé statique partagée n'identifie rien et se diffuse ; et la passerelle API est conçue pour le trafic nord-sud, pas pour les échanges internes.",
      "difficulte": 3,
      "pourquoi": [
        "Anti-modèle : une clé statique partagée n'identifie rien et se diffuse.",
        "Modèle château fort périmé : un seul service compromis ruine la confiance du réseau interne.",
        "Bonne réponse : le mTLS avec identité cryptographique par service, appliqué par un service mesh, matérialise le zero trust est-ouest.",
        "Contresens d'architecture : la passerelle publique est conçue pour le trafic nord-sud."
      ]
    },
    {
      "q": "What is the PRIMARY security benefit of deploying an API gateway in front of an organization's microservices?",
      "choix": [
        "It guarantees the confidentiality of data stored by backend services",
        "It removes the need for TLS on backend connections",
        "It eliminates the need to authenticate individual API calls",
        "A single enforcement point for authN, authZ, and rate limiting"
      ],
      "reponse": 3,
      "explication": "La passerelle API centralise l'application des politiques : authentification et autorisation de chaque appel, rate limiting contre l'abus et le déni de service, validation des requêtes et journalisation uniforme — évitant que chaque microservice réimplémente ces contrôles de façon inégale. Elle n'élimine pas l'authentification, elle l'APPLIQUE ; elle ne protège pas les données au repos des services ; et le TLS reste nécessaire de bout en bout, y compris derrière la passerelle (zero trust).",
      "difficulte": 2,
      "pourquoi": [
        "Surestimation : elle ne protège pas les données au repos des services en aval.",
        "Contresens : le TLS reste nécessaire de bout en bout, y compris derrière la passerelle.",
        "Contresens : la passerelle applique l'authentification, elle ne la supprime pas.",
        "Bonne réponse : un point unique d'application de l'authentification, de l'autorisation, du rate limiting et de la validation est le bénéfice principal."
      ]
    },
    {
      "q": "An organization licenses mission-critical software from a small vendor that refuses to provide source code. Management is concerned about business continuity if the vendor goes bankrupt or discontinues support. Which contractual provision BEST addresses this risk?",
      "choix": [
        "Cyber insurance covering vendor failure",
        "A software escrow agreement with periodic deposit verification",
        "A right-to-audit clause covering the vendor's development practices",
        "A service level agreement with financial penalties"
      ],
      "reponse": 1,
      "explication": "Le software escrow dépose le code source et sa documentation chez un tiers de confiance, avec libération contractuelle en cas de faillite ou d'arrêt du support : l'organisation peut alors maintenir l'application elle-même. La vérification périodique du dépôt garantit qu'il reste complet et à jour. Un SLA avec pénalités est inopérant contre un éditeur disparu, le droit d'audit évalue les pratiques sans donner accès au code, et l'assurance compense financièrement sans assurer la continuité opérationnelle.",
      "difficulte": 1,
      "pourquoi": [
        "Compensation financière seulement : l'assurance ne fournit pas le code nécessaire.",
        "Bonne réponse : l'escrow avec conditions de libération définies et vérification périodique des dépôts assure la continuité sans dépendre de la survie de l'éditeur.",
        "Trop étroit : le droit d'audit évalue les pratiques sans donner accès au code.",
        "Inopérant : des pénalités ne s'appliquent pas à un éditeur disparu."
      ]
    },
    {
      "q": "Endpoints across several organizations execute malware that was digitally signed with a valid code-signing certificate stolen from a legitimate software vendor. What does this incident BEST illustrate about code signing?",
      "choix": [
        "Certificate authorities are responsible for testing signed code for malware",
        "Code signing proves origin and integrity, not safety",
        "Code signing has no security value and should be abandoned",
        "Self-signed certificates would have prevented this incident"
      ],
      "reponse": 1,
      "explication": "La signature de code garantit deux choses seulement : l'intégrité (le code n'a pas changé depuis la signature) et l'origine (la clé du signataire identifié). Elle ne dit RIEN de l'innocuité du code, et toute la confiance repose sur la protection de la clé privée : volée, elle permet de signer du malware « légitime » — d'où les HSM, les accès contrôlés et la révocation immédiate en cas de compromission. Le mécanisme reste précieux malgré cette limite, les CA ne testent jamais le code, et l'auto-signature supprimerait la chaîne de confiance.",
      "difficulte": 3,
      "pourquoi": [
        "Faux rôle : les CA délivrent des certificats, elles ne testent jamais le code.",
        "Bonne réponse : la signature prouve origine et intégrité relatives à la clé — jamais l'innocuité — et s'effondre si la clé privée est compromise.",
        "Absolu faux : le mécanisme reste précieux malgré sa limite.",
        "Contresens : l'auto-signature supprimerait la chaîne de confiance."
      ]
    },
    {
      "q": "When evaluating a SaaS provider that will process sensitive customer data, which evidence provides the GREATEST assurance that the provider's security controls operate effectively over time?",
      "choix": [
        "A recent SOC 2 Type II report from an independent auditor",
        "A completed self-assessment security questionnaire",
        "Marketing materials describing military-grade encryption",
        "The provider's published privacy policy"
      ],
      "reponse": 0,
      "explication": "Le rapport SOC 2 Type II atteste, par un auditeur indépendant, que les contrôles sont non seulement bien CONÇUS mais qu'ils ont FONCTIONNÉ EFFICACEMENT sur une période d'observation de plusieurs mois — c'est le niveau d'assurance le plus élevé parmi les options. Un Type I ne serait qu'un instantané de conception. Le questionnaire auto-déclaré n'engage que le fournisseur, la politique de confidentialité décrit des intentions, et les arguments marketing n'ont aucune valeur probante.",
      "difficulte": 2,
      "pourquoi": [
        "Bonne réponse : le SOC 2 Type II atteste par un auditeur indépendant l'efficacité opérationnelle des contrôles SUR UNE PÉRIODE.",
        "Auto-déclaratif : le questionnaire n'engage que la bonne foi du fournisseur.",
        "Marketing sans valeur probante : « military-grade » n'est pas une assurance vérifiable.",
        "Déclaration d'intention : la politique de confidentialité ne prouve aucune efficacité."
      ]
    },
    {
      "q": "During acquisition of a fraud detection product based on machine learning, which supply chain risk is UNIQUE to the machine learning component compared with traditional software?",
      "choix": [
        "The vendor may lack a vulnerability disclosure program",
        "The vendor may use vulnerable open source libraries",
        "Training data may be poisoned to create hidden blind spots",
        "The product may contain unpatched operating system components"
      ],
      "reponse": 2,
      "explication": "Le data poisoning est propre aux systèmes de machine learning : un attaquant qui corrompt les données d'ENTRAÎNEMENT peut implanter des angles morts durables — des fraudes systématiquement classées légitimes — invisibles aux tests classiques puisque le code, lui, est correct. L'évaluation doit donc couvrir la provenance et l'intégrité des données d'entraînement. Les bibliothèques vulnérables, les composants non corrigés et l'absence de programme de divulgation sont des risques réels mais communs à TOUT logiciel acquis.",
      "difficulte": 2,
      "pourquoi": [
        "Techniquement vrai mais commun : l'absence de programme de divulgation n'est pas spécifique au ML.",
        "Techniquement vrai mais commun : les bibliothèques vulnérables concernent tout logiciel acquis.",
        "Bonne réponse : l'empoisonnement des données d'entraînement créant des angles morts invisibles aux tests classiques est propre au machine learning.",
        "Techniquement vrai mais commun : les composants OS non corrigés touchent tout produit."
      ]
    },
    {
      "q": "A CISO learns that development teams now merge AI-generated code into product repositories daily. The business will not accept slower release cycles. Which approach BEST manages the associated risk?",
      "choix": [
        "Ban AI coding assistants until a full security evaluation has been completed",
        "Deploy a tool that watermarks AI-generated code to ensure traceability",
        "Train developers to write security-aware prompts for the AI assistant",
        "Require AI code to pass the same pipeline controls as human code"
      ],
      "reponse": 3,
      "explication": "Le code généré par IA doit être traité comme du code tiers non fiable et soumis aux mêmes contrôles vérifiables que le code humain — revue par les pairs, SAST, SCA et tests automatisés dans le pipeline : la gouvernance existante absorbe le nouveau risque sans ralentir les livraisons. L'interdiction est un absolu incompatible avec la contrainte business et pousse à l'usage clandestin ; la formation aux prompts améliore la qualité en amont mais n'est pas un contrôle vérifiable ; et le marquage de provenance trace le code sans jamais empêcher un défaut d'atteindre la production.",
      "difficulte": 3,
      "pourquoi": [
        "Absolu et hors contexte business : l'interdiction ignore la contrainte de vélocité et provoque le shadow IT.",
        "Réponse de technicien : la traçabilité n'empêche aucun défaut de partir en production.",
        "Techniquement vrai mais insuffisant : la formation aux prompts n'est pas un contrôle vérifiable — complément, pas fondement.",
        "Bonne réponse : soumettre le code IA aux gates existants du pipeline gouverne le risque à la vitesse du DevOps."
      ]
    },
    {
      "q": "Following a critical vulnerability in a widely used open source logging library, the board directs the CISO to ensure the organization can respond faster next time. No dependency inventory exists for its several hundred applications. What should the CISO do FIRST?",
      "choix": [
        "Deploy virtual patching rules on the perimeter web application firewall",
        "Automate SBOM generation for every application within the build pipeline and centralize the results",
        "Require security team approval for every new third-party component",
        "Upgrade all applications to the latest versions of their dependencies"
      ],
      "reponse": 1,
      "explication": "Le mandat du conseil porte sur la capacité de RÉACTION : elle exige d'abord la visibilité. Générer automatiquement des SBOM dans le pipeline et les centraliser permet, à la prochaine divulgation, d'identifier en quelques minutes les applications affectées — le prérequis de toute priorisation. Mettre à niveau des centaines d'applications sans inventaire est irréalisable et non priorisable ; le virtual patching est un palliatif limité au périmètre exposé ; et l'approbation manuelle des nouveaux composants ne couvre pas le stock existant tout en créant un goulot d'étranglement.",
      "difficulte": 3,
      "pourquoi": [
        "Palliatif compensatoire : le virtual patching ne couvre que le périmètre exposé, sans gouvernance durable.",
        "Bonne réponse : la visibilité d'abord — le SBOM automatisé et centralisé est le prérequis de la réactivité demandée par le conseil.",
        "Trop étroit : l'approbation des nouveaux composants ignore l'existant et crée un goulot d'étranglement.",
        "Techniquement vrai mais pas premier : la mise à niveau massive est impossible à prioriser sans inventaire préalable."
      ]
    },
    {
      "q": "Development teams complain that the pipeline's static analysis gate blocks releases with a high false-positive rate, threatening contractual delivery dates. What is the CISO's BEST course of action?",
      "choix": [
        "Tune the tool, block only confirmed critical findings, backlog the rest with SLAs",
        "Remove the gate and rely on quarterly penetration testing instead",
        "Keep the gate unchanged, because security requirements must never be relaxed",
        "Escalate every blocked release to executive management for a case-by-case decision"
      ],
      "reponse": 0,
      "explication": "Un gate au fort taux de faux positifs détruit sa propre légitimité et le coût business est réel : la réponse managériale est d'améliorer le contrôle, pas de le supprimer ni de le sacraliser. Régler l'outil, ne bloquer que sur les findings élevés confirmés et gérer le reste en backlog avec des SLA réconcilie l'assurance sécurité et la vélocité — l'esprit DevSecOps. Maintenir le gate en l'état est un absolu qui nourrit l'alert fatigue et les contournements ; le pentest trimestriel remplace la prévention continue par une détection tardive ; et l'escalade systématique ajoute de la bureaucratie sans corriger la cause racine.",
      "difficulte": 3,
      "pourquoi": [
        "Bonne réponse : améliorer le contrôle — réglage, blocage ciblé, SLA de remédiation — préserve l'assurance ET la vélocité.",
        "Capitulation hors phase : le pentest trimestriel troque la prévention en pipeline contre une détection tardive.",
        "Absolu : ignorer le coût business et l'alert fatigue érode la crédibilité de la sécurité et incite au contournement.",
        "Bureaucratie : l'escalade au cas par cas ne corrige pas l'outil mal réglé, la cause racine."
      ]
    },
    {
      "q": "A firm must deliver a regulatory reporting capability within months. Building in-house would take three times longer; a niche vendor offers a proven product but will not share its source code. Which option BEST balances time-to-market and long-term risk?",
      "choix": [
        "License the cheapest alternative and negotiate continuity clauses after go-live",
        "Demand full source code ownership as a non-negotiable purchase condition",
        "License the product with verified escrow, audit rights, and patch SLAs",
        "Build the capability in-house to retain full control over the code"
      ],
      "reponse": 2,
      "explication": "L'échéance réglementaire est la contrainte dominante : seule l'acquisition la respecte, et le risque de dépendance envers un petit éditeur se traite contractuellement — escrow avec vérification périodique des dépôts, droit d'audit de sécurité et SLA de correctifs. C'est l'arbitrage buy vs build vu par un manager. Le développement interne conserve la maîtrise mais manque l'échéance — techniquement vrai, contextuellement faux ; négocier la continuité après le go-live abandonne tout levier contractuel ; et exiger la propriété du code est irréaliste face à un éditeur dont c'est l'actif principal, alors que l'escrow suffit.",
      "difficulte": 3,
      "pourquoi": [
        "Hors phase : après le go-live, l'acheteur n'a plus aucun levier pour obtenir des clauses de continuité.",
        "Irréaliste : un éditeur ne cède pas son actif principal, et l'escrow couvre déjà le risque de continuité.",
        "Bonne réponse : l'achat tient le délai et l'escrow vérifié, le droit d'audit et les SLA traitent le risque fournisseur de long terme.",
        "Techniquement vrai mais contextuellement faux : la maîtrise interne fait manquer l'échéance réglementaire, la contrainte dominante."
      ]
    }
  ],
  "flashcards": [
    {
      "recto": "SDLC (Software Development Life Cycle)",
      "verso": "Cadre structurant la vie du logiciel : collecte des exigences, conception, développement, tests, exploitation et maintenance, jusqu'au décommissionnement. La sécurité doit être intégrée à chaque phase, dès les exigences."
    },
    {
      "recto": "Waterfall vs Spiral",
      "verso": "Waterfall : modèle linéaire et séquentiel (Royce, 1970), exigences figées, très rigide. Spiral (Boehm) : modèle itératif piloté par le risque, chaque tour commence par l'identification et la résolution des risques."
    },
    {
      "recto": "V-Model",
      "verso": "Extension du modèle Waterfall qui associe à chaque phase de développement une phase de test correspondante, illustrant le parallélisme entre activités de développement et de vérification/validation."
    },
    {
      "recto": "Manifeste Agile : les 4 valeurs",
      "verso": "Les individus et interactions plutôt que les processus ; le logiciel fonctionnel plutôt que la documentation exhaustive ; la collaboration avec le client plutôt que la négociation contractuelle ; la réponse au changement plutôt que le suivi d'un plan."
    },
    {
      "recto": "DevSecOps",
      "verso": "Extension de DevOps intégrant la sécurité comme responsabilité partagée et automatisée dans tout le pipeline CI/CD (« shift left »). Soutient la software-defined security : les contrôles de sécurité sont gérés activement dans le pipeline."
    },
    {
      "recto": "Continuous Delivery vs Continuous Deployment",
      "verso": "Delivery : le code est toujours déployable, mais la mise en production exige une approbation humaine. Deployment : tout changement passant les tests automatisés est déployé en production sans intervention manuelle."
    },
    {
      "recto": "Request / Change / Release Control",
      "verso": "Request control : cadre des demandes de modification, analyse coûts-bénéfices, priorisation. Change control : recréation du problème, création et test de la solution avant production. Release control : approbation de mise en production, incluant l'acceptance testing."
    },
    {
      "recto": "SW-CMM : les 5 niveaux",
      "verso": "1 Initial (ad hoc), 2 Repeatable (gestion de projet de base), 3 Defined (processus formels documentés), 4 Managed (mesures quantitatives), 5 Optimizing (amélioration continue). Créé par le SEI ; ne traite pas explicitement de la sécurité."
    },
    {
      "recto": "SAMM (Software Assurance Maturity Model)",
      "verso": "Projet open source d'OWASP pour intégrer la sécurité dans le développement et évaluer sa maturité. Cinq fonctions métier : Governance, Design, Implementation, Verification, Operations."
    },
    {
      "recto": "Modèle IDEAL",
      "verso": "Modèle d'amélioration des processus du SEI : Initiating, Diagnosing, Establishing, Acting, Learning. À distinguer du SW-CMM, qui est un modèle d'évaluation de maturité (où vous en êtes vs comment progresser)."
    },
    {
      "recto": "SBOM (Software Bill of Materials)",
      "verso": "Inventaire formel de tous les composants, bibliothèques et dépendances d'un produit logiciel. Permet d'identifier rapidement les systèmes affectés lors de la divulgation d'une nouvelle vulnérabilité ; central pour la supply chain logicielle."
    },
    {
      "recto": "Buffer overflow",
      "verso": "Vulnérabilité du code source permettant d'accéder à des emplacements mémoire hors de l'espace alloué au tampon, déclenchée par une entrée plus grande que prévu. Peut mener à l'exécution de code arbitraire. Défense : vérification des bornes (bounds checking)."
    },
    {
      "recto": "TOCTOU (time-of-check to time-of-use)",
      "verso": "Attaque de type race condition exploitant le délai entre une vérification de sécurité (authentification, autorisation) et l'utilisation réelle de la ressource. Défenses : opérations atomiques, verrous, revérification au moment de l'usage."
    },
    {
      "recto": "XSS vs CSRF",
      "verso": "XSS : script malveillant exécuté dans le navigateur de la victime (défense : validation des entrées, encodage des sorties). CSRF : requête non désirée émise par la victime déjà authentifiée (défense : jetons anti-CSRF uniques)."
    },
    {
      "recto": "Aggregation vs Inference",
      "verso": "Aggregation : problème de sécurité — combiner des données non sensibles de sources séparées pour créer de l'information sensible. Inference : l'attaque — déduire une information de sensibilité supérieure à partir d'éléments moins sensibles."
    },
    {
      "recto": "Polyinstantiation",
      "verso": "Stockage de plusieurs versions d'une même donnée, avec le même identifiant, à des niveaux de sécurité différents. Chaque utilisateur ne voit que la version correspondant à son habilitation, ce qui empêche l'inférence de l'existence de données classifiées."
    },
    {
      "recto": "ACID",
      "verso": "Propriétés d'intégrité des transactions : Atomicity (tout ou rien), Consistency (respect des règles d'intégrité), Isolation (pas d'interférence entre transactions — une dirty read viole cette propriété), Durability (persistance des transactions validées)."
    },
    {
      "recto": "SAST vs DAST vs IAST vs SCA",
      "verso": "SAST : analyse du code sans exécution (boîte blanche). DAST : test de l'application en exécution, sans code source (boîte noire). IAST : combinaison — exécution avec accès au code source. SCA : inventaire des composants open source/tiers et de leurs vulnérabilités."
    },
    {
      "recto": "Backdoor / trapdoor / maintenance hook",
      "verso": "Mécanisme caché contournant les contrôles d'accès, inséré par un développeur (maintenance) ou un attaquant. Doit être interdit et retiré du code de production, car il peut être découvert et exploité."
    },
    {
      "recto": "Covert channel",
      "verso": "Chemin de communication qui viole la politique de sécurité, utilisé pour transmettre de l'information par une voie non prévue. Deux types de base : timing (canaux temporels) et storage (canaux de stockage)."
    },
    {
      "recto": "Standard vs guideline de codage sécurisé",
      "verso": "Standard : règle obligatoire — réduit un type précis de vulnérabilité, applicable à tous les développements, vérifiable. Guideline : recommandation flexible. Les standards rigoureusement appliqués sont le meilleur moyen de réduire les vulnérabilités du code source."
    },
    {
      "recto": "Certification vs Accreditation",
      "verso": "Certification : analyse technique complète de la sécurité d'un système par rapport à ses exigences. Accreditation : déclaration formelle par l'autorité désignée (DAA) que le système est approuvé pour fonctionner à un niveau de risque acceptable."
    },
    {
      "recto": "Cohésion et couplage (OOP)",
      "verso": "Cohésion : force de la relation entre les objectifs des méthodes d'une même classe (élevée = bon signe). Couplage : niveau d'interaction entre objets (faible = meilleur design, code plus indépendant et maintenable). Viser : high cohesion, low coupling."
    },
    {
      "recto": "Parameter validation (API)",
      "verso": "Contrôle fondamental de sécurité des APIs : vérifier que chaque paramètre reçu n'est ni malformé, ni invalide, ni malveillant, et qu'il se situe dans les limites définies, avant tout traitement par le système."
    },
    {
      "recto": "COTS (Commercial Off-The-Shelf)",
      "verso": "Logiciel fourni comme produit fini, non destiné à être modifié par l'utilisateur. Évaluation : historique des vulnérabilités et réactivité du vendeur, certifications (ISO/IEC 27034, ISO/IEC 27001, FedRAMP), pratiques de defensive programming."
    },
    {
      "recto": "RASP (Runtime Application Self-Protection)",
      "verso": "Agents de sécurité intégrés dans l'application, capables de détecter des violations de sécurité à l'exécution et de réagir, par exemple en terminant l'application ou en prenant d'autres actions protectrices."
    },
    {
      "recto": "Software escrow",
      "verso": "Séquestre de code source : l'éditeur dépose le code et sa documentation chez un tiers de confiance (escrow agent). Le code est libéré au client si des conditions contractuelles surviennent — faillite de l'éditeur, arrêt du support. Mesure de continuité négociée dans le contrat d'acquisition."
    },
    {
      "recto": "Code signing",
      "verso": "Signature numérique des exécutables et scripts : hash du code chiffré avec la clé privée de l'éditeur, vérifié via son certificat (CA). Garantit l'INTÉGRITÉ et l'ORIGINE du code — jamais son innocuité. Un certificat volé permet de signer du malware : protéger les clés (HSM), révoquer si compromis."
    },
    {
      "recto": "Expert system",
      "verso": "Système à base de connaissances composé d'une knowledge base (règles SI-ALORS codifiant le savoir d'experts humains) et d'un inference engine (moteur d'inférence qui applique les règles aux faits). Décisions cohérentes, sans émotion ni fatigue. À distinguer du ML, qui apprend des données (risques : data poisoning, biais)."
    }
  ]
};
