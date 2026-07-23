window.CISSP_DATA = window.CISSP_DATA || { domains: {} };
window.CISSP_DATA.domains[8] = {
  id: 8,
  code: "D8",
  titre: "Sécurité du développement logiciel",
  titreEn: "Software Development Security",
  poids: "10%",
  couleur: "#43aa8b",
  icone: "💻",
  description: "Le Domaine 8 couvre la sécurité tout au long du cycle de vie du développement logiciel. Vous y apprendrez à intégrer la sécurité dans le SDLC et les méthodologies modernes comme DevSecOps, à sécuriser les environnements et chaînes d'approvisionnement logicielles, à reconnaître les vulnérabilités applicatives majeures, et à évaluer la sécurité des logiciels développés en interne ou acquis.",
  objectifs: [
    "8.1 Comprendre et intégrer la sécurité dans le Software Development Life Cycle (SDLC) : méthodologies (Agile, Waterfall, DevOps, DevSecOps), modèles de maturité (CMM, SAMM), opérations et maintenance, gestion du changement, Integrated Product Team",
    "8.2 Identifier et appliquer les contrôles de sécurité dans les écosystèmes de développement : langages, bibliothèques, IDE, runtime, CI/CD, gestion de configuration, code repositories, tests de sécurité applicative (SAST, DAST, IAST, SCA)",
    "8.3 Évaluer l'efficacité de la sécurité logicielle : audit et journalisation des changements, analyse et atténuation des risques",
    "8.4 Évaluer l'impact sécurité des logiciels acquis : COTS, open source, tiers, services managés, services cloud (SaaS, IaaS, PaaS)",
    "8.5 Définir et appliquer des lignes directrices et standards de codage sécurisé : vulnérabilités au niveau du code source, sécurité des APIs, pratiques de codage sécurisé, software-defined security"
  ],
  lecons: [
    // ------------------------------------------------------------------
    // LEÇON 1 — SDLC et méthodologies
    // ------------------------------------------------------------------
    {
      id: "d8-l1",
      titre: "Le SDLC et les méthodologies de développement",
      duree: 12,
      slides: [
        {
          type: "intro",
          titre: "Pourquoi la sécurité du développement logiciel ?",
          points: [
            "Le logiciel est l'une des plus grandes surfaces d'attaque de l'organisation",
            "Le logiciel maison apporte des risques uniques : erreurs de logique, backdoors",
            "La sécurité doit être intégrée dès la conception, pas ajoutée à la fin"
          ],
          narration: "Bienvenue dans le Domaine 8, consacré à la sécurité du développement logiciel. Les applications représentent aujourd'hui l'une des plus grandes menaces pour la sécurité d'une organisation. Quand une entreprise développe ses propres logiciels, elle s'expose à des risques uniques, comme des faiblesses de logique ou des portes dérobées insérées pendant le développement. Le message central de ce domaine est simple : la sécurité doit faire partie de la conception dès le départ, et non être rajoutée après coup.",
          astuce: "💡 Conseil examen : à l'examen CISSP, la bonne réponse est presque toujours d'intégrer la sécurité le plus TÔT possible dans le cycle de vie."
        },
        {
          type: "standard",
          titre: "Les phases du SDLC",
          points: [
            "Requirements gathering : pourquoi, quoi, pour qui",
            "Design : comment le logiciel répondra aux exigences",
            "Development : codage et intégration",
            "Testing : vérification et validation",
            "Operations and Maintenance : déploiement, configuration, correctifs, supervision"
          ],
          narration: "Le Software Development Life Cycle, ou SDLC, est le cadre qui structure la vie d'un logiciel, de sa planification jusqu'à son retrait. Tout commence par la collecte des exigences : pourquoi créer ce logiciel, que fera-t-il, et pour qui. Vient ensuite la conception, puis le développement proprement dit, suivi des tests qui vérifient et valident que le logiciel répond aux exigences. Enfin, la phase d'exploitation et de maintenance assure que le logiciel reste correctement configuré, corrigé et supervisé jusqu'à son décommissionnement.",
          astuce: "💡 Conseil examen : retenez que les exigences de sécurité se définissent dès la phase des requirements, et que les design reviews ont lieu après les spécifications mais avant l'écriture du code."
        },
        {
          type: "schema",
          titre: "Le cycle de vie du logiciel",
          points: [
            "Chaque phase alimente la suivante",
            "La sécurité est présente à chaque étape",
            "Le cycle se termine par le décommissionnement"
          ],
          narration: "Visualisons le SDLC comme un enchaînement de phases. Les exigences nourrissent la conception, la conception guide le développement, le développement est validé par les tests, et le tout aboutit à l'exploitation et la maintenance. Gardez en tête que la sécurité n'est pas une phase séparée : elle traverse chacune de ces étapes, du premier atelier d'exigences jusqu'à la mise hors service du système.",
          schema: { type: "flow", items: ["Exigences", "Conception", "Développement", "Tests", "Exploitation et maintenance", "Décommissionnement"] }
        },
        {
          type: "standard",
          titre: "Waterfall, Spiral et V-Model",
          points: [
            "Waterfall : approche linéaire et séquentielle, exigences figées dès le départ",
            "Critique majeure : rigidité, mal adapté aux projets complexes",
            "Spiral model : modèle itératif piloté par le risque, de Barry Boehm",
            "V-Model : chaque phase de développement est associée à une phase de test"
          ],
          narration: "Le modèle Waterfall, formalisé par Winston Royce en 1970, est une approche linéaire : chaque phase doit être totalement terminée avant que la suivante ne commence, comme l'eau qui ne coule que vers le bas. Toutes les exigences sont recueillies au départ, ce qui rend le modèle très rigide face au changement. Le modèle en spirale de Barry Boehm corrige ce défaut : c'est un processus itératif piloté par le risque, où chaque tour de spirale commence par identifier et résoudre les risques. Enfin, le V-Model étend Waterfall en associant à chaque phase de développement une phase de vérification et de validation correspondante.",
          astuce: "💡 Conseil examen : Spiral = risk-driven. Si la question parle d'un modèle centré sur l'analyse de risques à chaque itération, c'est le modèle en spirale."
        },
        {
          type: "standard",
          titre: "L'approche Agile",
          points: [
            "Itérations courtes, livraison fréquente de logiciel fonctionnel",
            "Les individus et les interactions plutôt que les processus et les outils",
            "Le logiciel fonctionnel plutôt que la documentation exhaustive",
            "La collaboration avec le client plutôt que la négociation contractuelle",
            "La réponse au changement plutôt que le suivi d'un plan"
          ],
          narration: "En 2001, dix-sept pionniers ont publié le Manifeste Agile, qui a bouleversé le développement logiciel. L'approche Agile privilégie quatre valeurs : les individus et leurs interactions plutôt que les processus, le logiciel qui fonctionne plutôt que la documentation exhaustive, la collaboration avec le client plutôt que la négociation de contrat, et la réponse au changement plutôt que le suivi rigide d'un plan. Concrètement, les équipes livrent du logiciel fonctionnel en itérations courtes, ce qui réduit les risques en détectant les problèmes tôt grâce aux tests et retours fréquents."
        },
        {
          type: "standard",
          titre: "Les déclinaisons d'Agile",
          points: [
            "Scrum : sprints courts, réunions quotidiennes, équipes auto-organisées",
            "Kanban : gestion visuelle du flux de travail, réduction du temps de cycle",
            "XP (Extreme Programming) : vitesse et simplicité, pair programming",
            "RAD : prototypage rapide plutôt que planification stricte",
            "SAFe : mise à l'échelle d'Agile au niveau de l'entreprise"
          ],
          narration: "Plusieurs méthodologies concrétisent les principes Agile. Scrum organise le travail en sprints courts avec des réunions quotidiennes et des équipes auto-organisées. Kanban utilise un tableau visuel pour suivre le flux de travail et réduire le temps entre le début et la fin d'une tâche. Extreme Programming vise la vitesse et la simplicité avec des cycles très courts et des pratiques comme le pair programming. Le Rapid Application Development mise sur le prototypage rapide, et le Scaled Agile Framework, ou SAFe, permet d'appliquer Agile à l'échelle de toute une entreprise. Citons aussi RUP et sa version simplifiée AUP, ainsi que DSDM, centré sur le besoin métier et la livraison dans les délais."
        },
        {
          type: "standard",
          titre: "DevOps et DevSecOps",
          points: [
            "DevOps : unifier développement, assurance qualité et opérations",
            "Objectif : raccourcir le cycle et livrer en continu, parfois plusieurs fois par jour",
            "DevSecOps : la sécurité devient l'affaire de tous, intégrée au pipeline",
            "Shift left : déplacer les contrôles de sécurité vers l'amont du cycle"
          ],
          narration: "DevOps réunit trois fonctions historiquement cloisonnées : le développement, l'assurance qualité et les opérations. L'objectif est de réduire drastiquement le temps nécessaire pour développer, tester et déployer, au point de pouvoir livrer du code des dizaines de fois par jour. Cette vitesse exige un haut degré d'automatisation. DevSecOps va plus loin en intégrant la sécurité directement dans ce modèle : les contrôles de sécurité sont automatisés dans le pipeline et avancent au même rythme que le code. C'est ce qu'on appelle le shift left : déplacer la sécurité le plus en amont possible du cycle de développement.",
          astuce: "💡 Conseil examen : DevSecOps soutient le concept de software-defined security, où les contrôles de sécurité sont gérés activement dans le pipeline CI/CD."
        },
        {
          type: "schema",
          titre: "Le pipeline CI/CD",
          points: [
            "Continuous Integration : chaque commit est fusionné et testé automatiquement",
            "Continuous Delivery : le code est toujours déployable, mais la mise en production reste une décision humaine",
            "Continuous Deployment : tout changement validé part automatiquement en production"
          ],
          narration: "Le pipeline CI/CD est le moteur de DevOps. Avec l'intégration continue, tout nouveau code est fusionné dans un dépôt partagé dès qu'il est écrit, ce qui déclenche automatiquement des tests unitaires puis des tests d'intégration. Cela permet de détecter les erreurs tôt et souvent. La livraison continue, ou continuous delivery, garantit que le code est toujours dans un état déployable, mais la mise en production exige encore une approbation humaine. Le déploiement continu, lui, supprime cette dernière étape : tout changement qui passe les tests automatisés part directement en production, sans intervention manuelle.",
          schema: { type: "flow", items: ["Commit", "Build automatique", "Tests unitaires", "Tests d'intégration", "Livraison (staging)", "Déploiement en production"] },
          astuce: "💡 Conseil examen : la différence entre continuous delivery et continuous deployment tient à un seul mot : l'approbation humaine avant la production."
        },
        {
          type: "question",
          titre: "Contrôle de connaissances",
          points: [],
          narration: "Vérifions votre compréhension des méthodologies de développement avec une petite question.",
          q: "Quelle est la différence ESSENTIELLE entre continuous delivery et continuous deployment ?",
          choix: [
            "Continuous delivery ne comporte aucun test automatisé",
            "Continuous deployment exige une approbation manuelle avant la production",
            "Continuous delivery conserve une approbation manuelle avant la mise en production, continuous deployment est entièrement automatique",
            "Continuous deployment ne s'applique qu'aux environnements de test"
          ],
          reponse: 2,
          explication: "Les deux pratiques reposent sur l'intégration continue et l'automatisation des tests. En continuous delivery, le code est toujours déployable mais un humain approuve la mise en production. En continuous deployment, tout changement qui passe les tests part automatiquement en production, sans intervention manuelle."
        },
        {
          type: "standard",
          titre: "Gestion du changement et IPT",
          points: [
            "Request Control : cadre organisé pour demander des modifications et prioriser",
            "Change Control : les développeurs recréent le problème et testent la solution avant production",
            "Release Control : approbation de la mise en production, avec acceptance testing",
            "CAB : le Change Advisory Board approuve ou rejette les changements",
            "IPT : équipes multifonctionnelles du DoD favorisant des décisions parallèles"
          ],
          narration: "La gestion du changement comporte trois composantes fondamentales à connaître. Le request control offre un cadre organisé où les utilisateurs demandent des modifications, les managers font l'analyse coûts-bénéfices, et les développeurs priorisent. Le change control permet aux développeurs de recréer la situation rencontrée, puis de créer et tester une solution avant de la déployer en production. Enfin, le release control approuve formellement la mise en production, en incluant les tests d'acceptation. Un Change Advisory Board, ou CAB, examine et approuve les changements proposés. Notez aussi l'Integrated Product Team, une approche du département de la Défense américain qui réunit des équipes multifonctionnelles pour favoriser des décisions parallèles plutôt que séquentielles."
        },
        {
          type: "resume",
          titre: "Résumé de la leçon",
          points: [
            "Le SDLC va des exigences au décommissionnement ; la sécurité s'intègre à chaque phase",
            "Waterfall est linéaire et rigide ; Spiral est itératif et piloté par le risque ; le V-Model associe développement et tests",
            "Agile livre en itérations courtes ; Scrum, Kanban, XP et SAFe en sont des déclinaisons",
            "DevOps unifie dev, QA et ops ; DevSecOps y intègre la sécurité en continu",
            "CI/CD automatise l'intégration et la livraison ; delivery garde une approbation humaine, deployment non",
            "Gestion du changement : request control, change control, release control"
          ],
          narration: "Récapitulons. Le SDLC structure la vie du logiciel, des exigences jusqu'au retrait, et la sécurité doit y être intégrée dès le début. Waterfall est linéaire et rigide, le modèle en spirale est itératif et piloté par le risque, et le V-Model associe chaque phase de développement à une phase de test. Agile privilégie les itérations courtes et la collaboration, avec des déclinaisons comme Scrum, Kanban et SAFe. DevOps unifie développement et opérations, DevSecOps y intègre la sécurité, et le pipeline CI/CD automatise l'ensemble. Enfin, la gestion du changement s'appuie sur trois piliers : request control, change control et release control."
        }
      ]
    },
    // ------------------------------------------------------------------
    // LEÇON 2 — Maturité : CMM, SAMM, IDEAL
    // ------------------------------------------------------------------
    {
      id: "d8-l2",
      titre: "Modèles de maturité : CMM, SAMM et IDEAL",
      duree: 9,
      slides: [
        {
          type: "intro",
          titre: "Pourquoi mesurer la maturité ?",
          points: [
            "Passer de processus improvisés à des processus fiables et gérés",
            "Un processus mature produit un logiciel plus prévisible et de meilleure qualité",
            "Trois modèles à connaître : SW-CMM, SAMM et IDEAL"
          ],
          narration: "Comment savoir si votre organisation développe du logiciel de manière fiable, ou si tout repose sur quelques héros qui improvisent ? C'est précisément le rôle des modèles de maturité. Ils aident les organisations à passer de processus incohérents et non structurés à des processus fiables et bien gérés. Pour l'examen, vous devez être capable de décrire trois modèles : le Software Capability Maturity Model, le Software Assurance Maturity Model d'OWASP, et le modèle IDEAL."
        },
        {
          type: "standard",
          titre: "Le SW-CMM du SEI",
          points: [
            "Créé par le Software Engineering Institute de Carnegie Mellon",
            "Décrit la maturité des processus de développement en cinq niveaux séquentiels",
            "Attention : le CMM ne traite pas explicitement de la sécurité"
          ],
          narration: "Le Software Capability Maturity Model, abrégé SW-CMM ou simplement CMM, a été créé par le Software Engineering Institute de l'université Carnegie Mellon. C'est un modèle de gestion visant l'amélioration continue des processus de développement logiciel. L'idée centrale est que toute organisation traverse des phases de maturité de façon séquentielle : on ne saute pas d'étapes. Un point important pour l'examen : le CMM ne traite pas explicitement de la sécurité, il mesure la maturité des processus en général."
        },
        {
          type: "schema",
          titre: "Les cinq niveaux du CMM",
          points: [
            "Niveau 1 Initial : processus ad hoc, dépendant des individus",
            "Niveau 2 Repeatable : gestion de projet de base, gestion de configuration",
            "Niveau 3 Defined : processus formels documentés, revues par les pairs",
            "Niveau 4 Managed : mesures quantitatives des processus et produits",
            "Niveau 5 Optimizing : amélioration continue, prévention des défauts"
          ],
          narration: "Le CMM comporte cinq niveaux. Au niveau un, Initial, les processus sont désorganisés, ad hoc, et tout dépend des compétences individuelles. Au niveau deux, Repeatable, on introduit la gestion de projet de base : planification, gestion des exigences, gestion de configuration et assurance qualité. Au niveau trois, Defined, les développeurs suivent des processus formels et documentés, avec des revues par les pairs et la réutilisation de code. Au niveau quatre, Managed, l'organisation pilote ses processus avec des mesures quantitatives. Enfin au niveau cinq, Optimizing, l'amélioration continue est institutionnalisée, avec gestion du changement de processus et prévention des défauts.",
          schema: { type: "pyramid", items: ["1. Initial", "2. Repeatable", "3. Defined", "4. Managed", "5. Optimizing"] },
          astuce: "💡 Conseil examen : mémorisez l'ordre avec I-R-D-M-O. Le mot-clé du niveau 4 est « quantitatif », celui du niveau 5 est « amélioration continue »."
        },
        {
          type: "standard",
          titre: "SAMM : la maturité de la sécurité logicielle",
          points: [
            "Software Assurance Maturity Model, projet open source maintenu par OWASP",
            "Cadre pour intégrer la sécurité dans le développement ET évaluer sa maturité",
            "Organisé autour de cinq fonctions métier"
          ],
          narration: "Contrairement au CMM, le Software Assurance Maturity Model, ou SAMM, est entièrement dédié à la sécurité. C'est un projet open source maintenu par l'OWASP. Il fournit un cadre pour intégrer la sécurité dans les processus de développement et de maintenance du logiciel, tout en permettant à l'organisation d'évaluer sa maturité dans ce domaine. SAMM associe le développement logiciel à cinq fonctions métier que nous allons détailler."
        },
        {
          type: "schema",
          titre: "Les cinq fonctions métier de SAMM",
          points: [
            "Governance : stratégie, métriques, politique, conformité, formation",
            "Design : threat modeling, exigences et architecture de sécurité",
            "Implementation : secure build, secure deployment, gestion des défauts",
            "Verification : évaluation d'architecture, tests de sécurité",
            "Operations : gestion des incidents, de l'environnement et opérationnelle"
          ],
          narration: "SAMM structure la sécurité logicielle en cinq fonctions métier. La gouvernance couvre le pilotage des processus de développement : stratégie, métriques, politiques, conformité et formation. Le design couvre la définition des exigences et la conception, avec notamment le threat modeling et l'architecture de sécurité. L'implémentation englobe la construction et le déploiement sécurisés ainsi que la gestion des défauts. La vérification confirme que le code répond aux exigences métier et de sécurité, à travers les tests de sécurité et l'évaluation d'architecture. Enfin, les opérations maintiennent la sécurité après la mise en production, avec la gestion des incidents et de l'environnement.",
          schema: { type: "grid", items: ["Governance", "Design", "Implementation", "Verification", "Operations"] }
        },
        {
          type: "standard",
          titre: "Le modèle IDEAL",
          points: [
            "Développé par le SEI, orienté amélioration des processus",
            "Initiating : justifier le changement, obtenir le soutien",
            "Diagnosing : analyser l'état actuel, recommander des changements",
            "Establishing : bâtir un plan d'action précis",
            "Acting : développer, tester, affiner et déployer les solutions",
            "Learning : analyser en continu et proposer de nouvelles actions"
          ],
          narration: "Le modèle IDEAL, également développé par le SEI, reprend beaucoup d'attributs du CMM mais avec une orientation différente. Ses cinq phases forment l'acronyme IDEAL. Initiating : on expose les raisons métier du changement et on obtient le soutien et les ressources. Diagnosing : les ingénieurs analysent l'état actuel de l'organisation et recommandent des changements. Establishing : on développe un plan d'action précis à partir de ces recommandations. Acting : on développe les solutions, on les teste, on les affine et on les met en œuvre. Learning : on analyse continuellement les efforts et on propose de nouvelles actions si nécessaire."
        },
        {
          type: "standard",
          titre: "IDEAL versus SW-CMM",
          points: [
            "IDEAL : modèle d'AMÉLIORATION des processus — comment progresser",
            "SW-CMM : modèle d'ÉVALUATION de maturité — où en êtes-vous",
            "Correspondance approximative : Initiating-Initial, Diagnosing-Repeatable, Establishing-Defined, Acting-Managed, Learning-Optimizing"
          ],
          narration: "Ne confondez pas les deux modèles du SEI. IDEAL est un modèle d'amélioration des processus : il décrit comment progresser. Le SW-CMM est un modèle d'évaluation de maturité : il décrit où vous en êtes actuellement. Il existe une correspondance conceptuelle approximative entre leurs phases : Initiating avec Initial, Diagnosing avec Repeatable, Establishing avec Defined, Acting avec Managed, et Learning avec Optimizing. Ce parallèle est un moyen mnémotechnique pratique pour l'examen.",
          astuce: "💡 Conseil examen : IDEAL et Initial commencent tous deux par I, et les phases s'alignent dans l'ordre avec les niveaux du CMM."
        },
        {
          type: "question",
          titre: "Contrôle de connaissances",
          points: [],
          narration: "Testons votre maîtrise des modèles de maturité.",
          q: "À quel niveau du SW-CMM une organisation utilise-t-elle pour la PREMIÈRE fois des mesures quantitatives pour gérer ses processus logiciels ?",
          choix: ["Niveau 2 : Repeatable", "Niveau 3 : Defined", "Niveau 4 : Managed", "Niveau 5 : Optimizing"],
          reponse: 2,
          explication: "Le niveau 4, Managed, est caractérisé par l'utilisation de mesures quantitatives du développement logiciel et la fixation d'objectifs quantitatifs. Le niveau 2 introduit la gestion de projet de base, le niveau 3 les processus formels documentés, et le niveau 5 l'amélioration continue."
        },
        {
          type: "resume",
          titre: "Résumé de la leçon",
          points: [
            "Les modèles de maturité font passer d'un développement improvisé à des processus gérés",
            "SW-CMM : cinq niveaux — Initial, Repeatable, Defined, Managed, Optimizing — sans focus sécurité",
            "SAMM (OWASP) : maturité de la sécurité logicielle en cinq fonctions — Governance, Design, Implementation, Verification, Operations",
            "IDEAL (SEI) : Initiating, Diagnosing, Establishing, Acting, Learning — modèle d'amélioration",
            "IDEAL dit comment s'améliorer ; CMM dit où vous en êtes"
          ],
          narration: "En résumé, les modèles de maturité permettent de professionnaliser le développement logiciel. Le SW-CMM du SEI décrit cinq niveaux, d'Initial à Optimizing, mais ne traite pas explicitement de sécurité. Le SAMM d'OWASP est dédié à la sécurité logicielle et s'organise en cinq fonctions métier : gouvernance, design, implémentation, vérification et opérations. Le modèle IDEAL, aussi du SEI, guide l'amélioration des processus en cinq phases. Retenez la distinction clé : IDEAL vous dit comment vous améliorer, le CMM vous dit où vous en êtes."
        }
      ]
    },
    // ------------------------------------------------------------------
    // LEÇON 3 — Sécuriser l'écosystème de développement
    // ------------------------------------------------------------------
    {
      id: "d8-l3",
      titre: "Sécuriser l'écosystème de développement",
      duree: 11,
      slides: [
        {
          type: "intro",
          titre: "L'environnement de développement, cible de choix",
          points: [
            "Le pipeline de développement est lui-même une surface d'attaque",
            "Dépôts de code, bibliothèques, outils, secrets : tout doit être protégé",
            "Les attaques de supply chain logicielle visent le maillon le plus faible"
          ],
          narration: "Dans cette leçon, nous changeons de perspective : ce n'est plus seulement le logiciel produit qu'il faut protéger, mais l'usine qui le fabrique. Les dépôts de code, les bibliothèques partagées, les outils des développeurs et les pipelines d'automatisation constituent une surface d'attaque à part entière. Les grandes attaques de supply chain logicielle de ces dernières années l'ont démontré : compromettre l'environnement de développement permet d'atteindre tous les clients du logiciel."
        },
        {
          type: "standard",
          titre: "Langages et compilation",
          points: [
            "Langage compilé : converti en code machine ; plus difficile à manipuler, mais backdoors moins visibles",
            "Langage interprété : code source visible et exécuté par un interpréteur (Python, JavaScript)",
            "Assembleurs, décompilateurs et désassembleurs convertissent entre les représentations",
            "Strong typing : le typage fort prévient les erreurs de type à la compilation"
          ],
          narration: "Un mot sur les langages de programmation, car l'examen aime les questions de vocabulaire. Un langage compilé convertit le code source en format exécutable par la machine. Le code compilé est plus difficile à manipuler par un tiers, mais comme le source n'est pas visible, il est aussi plus difficile d'y détecter une porte dérobée. Un langage interprété, comme Python ou JavaScript, est exécuté par un interpréteur et son code source reste visible. Les assembleurs convertissent le langage d'assemblage en code machine, les décompilateurs font le chemin inverse vers le code source, et les désassembleurs reviennent au langage d'assemblage. Enfin, un typage fort protège le développeur en générant des erreurs dès la compilation en cas d'incompatibilité de types."
        },
        {
          type: "standard",
          titre: "La programmation orientée objet",
          points: [
            "Encapsulation : regrouper données et méthodes, masquer les détails internes",
            "Héritage : une sous-classe hérite des méthodes de sa classe parente",
            "Polymorphisme : un même message peut produire des comportements différents",
            "Cohésion élevée et couplage faible : les marques d'une bonne conception"
          ],
          narration: "La programmation orientée objet offre par nature une approche de type boîte noire, favorable à la sécurité. L'encapsulation regroupe les données et les méthodes dans un objet et masque ses détails internes. L'héritage permet à une sous-classe de réutiliser les méthodes de sa classe parente. Le polymorphisme désigne la capacité d'un objet à répondre différemment au même message selon les conditions externes. Deux notions de conception sont à retenir : une cohésion élevée, quand les méthodes d'une classe partagent des objectifs similaires, et un couplage faible, quand les objets interagissent peu entre eux. Cohésion élevée et couplage faible sont les marques d'un bon design, plus facile à maintenir et à dépanner.",
          astuce: "💡 Conseil examen : high cohesion, low coupling. C'est la combinaison gagnante qu'attend l'examen."
        },
        {
          type: "standard",
          titre: "Bibliothèques et dépendances",
          points: [
            "Les bibliothèques partagées accélèrent le développement et évitent de réinventer",
            "Mais elles importent aussi leurs vulnérabilités (exemple célèbre : Heartbleed)",
            "Le plus grand risque de l'open source : dépendre de versions obsolètes",
            "Connaître l'origine du code et suivre les vulnérabilités publiées"
          ],
          narration: "Les bibliothèques logicielles sont des collections de composants préécrits qui font gagner un temps précieux : personne ne devrait réécrire un algorithme de chiffrement de zéro. Mais réutiliser du code, c'est aussi importer ses failles. La vulnérabilité Heartbleed dans OpenSSL en est l'exemple emblématique : une faille dans une bibliothèque partagée a exposé une immense partie d'Internet. Les développeurs doivent connaître l'origine du code qu'ils réutilisent et se tenir informés des vulnérabilités découvertes. Retenez que le plus grand risque de l'open source est de dépendre de versions obsolètes, en particulier pour les bibliothèques partagées."
        },
        {
          type: "standard",
          titre: "Outils, IDE et runtime",
          points: [
            "IDE : environnement unique pour écrire, tester, déboguer et compiler",
            "Laisser chaque développeur choisir ses outils élargit la surface d'attaque",
            "Meilleure approche : validation des outils par un change advisory board",
            "Runtime environment : exécution portable du code (exemple : la JVM)"
          ],
          narration: "L'environnement de développement intégré, ou IDE, regroupe tout ce dont le développeur a besoin pour écrire, tester, déboguer et compiler son code. Concernant les outils en général, il faut trouver un équilibre : imposer un outillage unique réduit la productivité et la satisfaction, mais laisser chacun choisir librement élargit la surface d'attaque de l'organisation. La meilleure approche consiste à faire valider les demandes d'outils par un change advisory board qui évalue les risques associés, puis à faire surveiller les contrôles par l'équipe sécurité. Enfin, les environnements d'exécution, comme la machine virtuelle Java, permettent d'exécuter du code portable sur différents systèmes sans recompilation."
        },
        {
          type: "standard",
          titre: "Dépôts de code et gestion de configuration",
          points: [
            "Code repositories : stockage central du code, versioning, collaboration (GitHub, Bitbucket)",
            "Ne JAMAIS stocker de secrets (clés API, mots de passe) dans un dépôt",
            "SCM : suivi méthodique des changements pour garantir intégrité et traçabilité",
            "L'audit et la journalisation des changements permettent de détecter les modifications non autorisées"
          ],
          narration: "Les dépôts de code comme GitHub ou Bitbucket sont le point de stockage central du code source : ils fournissent le contrôle de version, le suivi des bugs et la gestion des releases pour des équipes qui travaillent en parallèle. Un piège classique et redoutable : les secrets. Des clés d'API, des mots de passe ou des certificats accidentellement poussés dans un dépôt sont une cause majeure de compromission ; il faut les gérer dans des coffres à secrets dédiés et scanner les dépôts. La gestion de configuration logicielle, ou SCM, identifie les attributs du logiciel à différents moments et applique un contrôle de changement méthodique pour maintenir l'intégrité et la traçabilité tout au long du SDLC. La journalisation de tous les changements permet de repérer rapidement une activité suspecte ou une modification non autorisée.",
          astuce: "💡 Conseil examen : un dépôt de code public contenant des credentials est un scénario d'exposition classique. La réponse attendue combine révocation immédiate des secrets et gestion centralisée des secrets."
        },
        {
          type: "standard",
          titre: "Supply chain logicielle et SBOM",
          points: [
            "SBOM : Software Bill of Materials, l'inventaire formel de tous les composants et dépendances",
            "Permet d'identifier rapidement les systèmes affectés par une nouvelle vulnérabilité",
            "Le pipeline CI/CD repose sur des outils tiers qui peuvent être compromis",
            "Défenses : threat modeling, least privilege, defense in depth, zero trust"
          ],
          narration: "La chaîne d'approvisionnement logicielle est devenue un enjeu central. Le Software Bill of Materials, ou SBOM, est un inventaire formel de tous les composants, bibliothèques et dépendances contenus dans un produit logiciel. Quand une nouvelle vulnérabilité est divulguée, comme ce fut le cas avec Log4j, le SBOM permet d'identifier immédiatement les systèmes affectés. N'oubliez pas que le pipeline CI/CD lui-même repose sur l'automatisation et des outils tiers qui peuvent comporter des vulnérabilités ou être compromis. Les principes classiques s'appliquent : threat modeling, moindre privilège, défense en profondeur et zero trust réduisent les menaces pesant sur ces outils et systèmes."
        },
        {
          type: "schema",
          titre: "Les maillons de la supply chain logicielle",
          points: [
            "Chaque maillon peut être attaqué",
            "Le SBOM documente ce qui entre dans le produit final",
            "L'intégrité doit être vérifiée à chaque transition"
          ],
          narration: "Représentons la chaîne d'approvisionnement logicielle. Le développeur écrit du code qui s'appuie sur des dépendances open source. Le tout est versionné dans un dépôt, construit par le pipeline CI/CD, empaqueté en artefact, puis déployé en production. Chacun de ces maillons peut être attaqué : un compte développeur volé, une dépendance empoisonnée, un pipeline détourné ou un artefact substitué. C'est pourquoi il faut vérifier l'intégrité à chaque transition, par exemple avec des signatures, et documenter l'ensemble des composants dans un SBOM.",
          schema: { type: "flow", items: ["Développeur", "Dépendances open source", "Dépôt de code", "Pipeline CI/CD", "Artefact signé", "Production"] }
        },
        {
          type: "question",
          titre: "Contrôle de connaissances",
          points: [],
          narration: "Une question pour ancrer les notions de supply chain logicielle.",
          q: "Une vulnérabilité critique vient d'être divulguée dans une bibliothèque open source très répandue. Quel outil permet le PLUS RAPIDEMENT d'identifier les applications de l'organisation qui sont affectées ?",
          choix: [
            "Un scan de vulnérabilités réseau",
            "Le Software Bill of Materials (SBOM) de chaque application",
            "Un test d'intrusion applicatif",
            "La revue manuelle du code source"
          ],
          reponse: 1,
          explication: "Le SBOM fournit un inventaire formel de tous les composants, bibliothèques et dépendances d'un logiciel. Il permet d'identifier immédiatement les applications contenant la bibliothèque vulnérable. Un scan réseau ne voit pas les dépendances internes, un pentest et une revue manuelle seraient beaucoup trop lents et coûteux pour cet objectif."
        },
        {
          type: "resume",
          titre: "Résumé de la leçon",
          points: [
            "Le code compilé cache les backdoors ; le code interprété est lisible ; le typage fort prévient les erreurs",
            "OOP : encapsulation, héritage, polymorphisme ; viser cohésion élevée et couplage faible",
            "Les bibliothèques importent leurs vulnérabilités ; le risque majeur de l'open source est l'obsolescence",
            "Outils validés par un CAB ; secrets hors des dépôts de code ; SCM pour l'intégrité et la traçabilité",
            "SBOM : inventaire des composants, clé de la gestion de la supply chain logicielle"
          ],
          narration: "Résumons cette leçon. L'environnement de développement est une surface d'attaque à part entière. Côté langages, retenez la distinction entre compilé et interprété, et les vertus du typage fort. En programmation orientée objet, visez une cohésion élevée et un couplage faible. Les bibliothèques partagées font gagner du temps mais importent leurs failles, et le grand risque de l'open source est l'obsolescence des versions. Protégez les dépôts de code, sortez-en les secrets, appuyez-vous sur la gestion de configuration pour la traçabilité, et documentez vos composants dans un SBOM pour maîtriser la chaîne d'approvisionnement logicielle."
        }
      ]
    },
    // ------------------------------------------------------------------
    // LEÇON 4 — Vulnérabilités applicatives et bases de données
    // ------------------------------------------------------------------
    {
      id: "d8-l4",
      titre: "Vulnérabilités applicatives et sécurité des bases de données",
      duree: 13,
      slides: [
        {
          type: "intro",
          titre: "Connaître l'ennemi : les vulnérabilités applicatives",
          points: [
            "Design flaw : la conception elle-même est défectueuse",
            "Implementation flaw : une bonne conception mal codée",
            "L'OWASP Top 10 recense les catégories de risques les plus critiques du web"
          ],
          narration: "Pour défendre une application, il faut connaître les attaques qui la visent. Une vulnérabilité au niveau du code source provient soit d'un défaut de conception, quand même un code parfait resterait vulnérable parce que le design est mauvais, soit d'un défaut d'implémentation, quand le développeur a mal codé une bonne conception. L'OWASP publie régulièrement son Top 10, la liste de référence des catégories de risques applicatifs les plus critiques. Dans cette leçon, nous passons en revue les grandes familles d'attaques, puis les problématiques propres aux bases de données."
        },
        {
          type: "standard",
          titre: "L'OWASP Top 10",
          points: [
            "Broken access control et authentication failures",
            "Injection et insecure design",
            "Security misconfiguration et cryptographic failures",
            "Software supply chain failures et integrity failures",
            "Logging/alerting failures et mishandling of exceptional conditions"
          ],
          narration: "L'édition 2025 de l'OWASP Top 10 recense notamment : le broken access control, c'est-à-dire les contrôles d'accès défaillants, en tête de liste ; la security misconfiguration ; les défaillances de la supply chain logicielle ; les cryptographic failures, quand le chiffrement est absent ou mal utilisé ; l'injection ; l'insecure design ; les authentication failures ; les défauts d'intégrité du logiciel et des données ; les défaillances de journalisation et d'alerte ; et enfin la mauvaise gestion des conditions exceptionnelles. Inutile de mémoriser l'ordre exact, mais vous devez reconnaître chaque catégorie et savoir comment s'en prémunir."
        },
        {
          type: "standard",
          titre: "Injection et validation des entrées",
          points: [
            "SQL injection : du code SQL malveillant injecté via une entrée utilisateur",
            "Défenses : requêtes paramétrées, procédures stockées, validation des entrées",
            "Malformed input : les entrées mal contrôlées sont la source d'erreurs numéro un",
            "Defensive programming : traiter TOUTE entrée comme non fiable jusqu'à preuve du contraire"
          ],
          narration: "L'injection reste un grand classique. Dans une injection SQL, l'attaquant insère du code SQL dans un champ de saisie pour manipuler la base de données : contourner une authentification, extraire des données, voire les détruire. La défense principale est constituée des requêtes paramétrées, complétées par la validation stricte des entrées et la limitation des privilèges du compte applicatif. Plus généralement, la mauvaise gestion des entrées est une source majeure d'erreurs pouvant mener à l'exécution de code arbitraire. D'où le principe de defensive programming : traiter toutes les routines d'entrée comme non fiables tant qu'elles n'ont pas été validées et assainies.",
          astuce: "💡 Conseil examen : face à une question sur l'injection SQL, la MEILLEURE réponse technique est presque toujours les parameterized queries, avec la validation des entrées en complément."
        },
        {
          type: "standard",
          titre: "XSS et CSRF",
          points: [
            "XSS (Cross-Site Scripting) : un script malveillant s'exécute dans le navigateur de la victime",
            "Défenses XSS : validation des entrées et encodage des sorties (output encoding)",
            "CSRF (Cross-Site Request Forgery) : exploiter la session authentifiée de la victime à son insu",
            "Défenses CSRF : jetons anti-CSRF uniques par session, revérification de l'utilisateur"
          ],
          narration: "Deux attaques web à ne pas confondre. Le cross-site scripting, ou XSS, consiste à injecter un script malveillant dans une page web consultée par la victime : le script s'exécute dans son navigateur et peut voler ses cookies de session. La défense repose sur la validation des entrées et surtout l'encodage des sorties. Le cross-site request forgery, ou CSRF, exploite au contraire la confiance du serveur envers le navigateur : l'attaquant fait émettre à la victime, déjà authentifiée sur un site, une requête qu'elle n'a jamais voulue, comme un virement. La parade classique est le jeton anti-CSRF, une valeur unique et imprévisible exigée avec chaque requête sensible.",
          astuce: "💡 Conseil examen : XSS abuse de la confiance de l'utilisateur envers un site ; CSRF abuse de la confiance du site envers le navigateur de l'utilisateur."
        },
        {
          type: "standard",
          titre: "Buffer overflow et exécution de code arbitraire",
          points: [
            "Écrire au-delà de l'espace mémoire alloué au buffer",
            "Peut permettre l'exécution de code arbitraire choisi par l'attaquant",
            "Défenses : vérification des bornes (bounds checking), langages sûrs, canaris, ASLR et DEP",
            "Concerne surtout les langages sans gestion mémoire automatique comme C/C++"
          ],
          narration: "Le buffer overflow, ou dépassement de tampon, est une vulnérabilité du code source qui permet d'accéder à des emplacements mémoire situés en dehors de l'espace alloué au tampon. L'attaquant déclenche le débordement en soumettant une entrée plus grande que la taille prévue, et peut ainsi écraser des données adjacentes, voire détourner le flux d'exécution pour exécuter du code arbitraire. Les défenses commencent dans le code, avec la vérification systématique des bornes et de la taille des entrées, et se prolongent au niveau du système avec des protections comme la randomisation de l'espace d'adressage et la prévention d'exécution des données. Les langages à gestion mémoire automatique sont nettement moins exposés que C ou C++."
        },
        {
          type: "standard",
          titre: "Race conditions et TOCTOU",
          points: [
            "Race condition : le résultat dépend de l'ordre d'exécution de processus concurrents",
            "TOCTOU : time-of-check to time-of-use, exploiter le délai entre la vérification et l'usage",
            "Exemple : le fichier vérifié est remplacé entre le contrôle d'accès et l'ouverture",
            "Défenses : opérations atomiques, verrous, revérifier au moment de l'usage"
          ],
          narration: "Une race condition, ou situation de compétition, survient quand le comportement d'un système dépend de l'ordre d'exécution de processus concurrents. L'attaque TOCTOU, pour time-of-check to time-of-use, en est la forme la plus connue : l'attaquant exploite le délai entre le moment où une vérification de sécurité est effectuée, par exemple une autorisation, et le moment où la ressource est réellement utilisée. Entre les deux, il substitue la ressource. La parade consiste à rendre les opérations atomiques, c'est-à-dire indivisibles, à utiliser des mécanismes de verrouillage et à revérifier les droits au moment précis de l'usage.",
          astuce: "💡 Conseil examen : TOCTOU est une attaque de type race condition qui cible l'état du système, pas les entrées de l'utilisateur."
        },
        {
          type: "standard",
          titre: "Backdoors, covert channels et autres menaces",
          points: [
            "Backdoor/trapdoor : mécanisme caché contournant les contrôles d'accès, aussi appelé maintenance hook",
            "Covert channels : canaux de communication violant la politique de sécurité — timing ou storage",
            "Citizen programmers : développement ad hoc hors de tout cadre de sécurité",
            "Memory/object reuse : les données résiduelles en mémoire créent un risque de rémanence"
          ],
          narration: "Quelques menaces complémentaires à connaître. La backdoor, ou maintenance hook, est un mécanisme caché qui contourne les contrôles d'accès : insérée par un développeur pour faciliter la maintenance ou par un attaquant, elle doit être bannie du code de production. Les covert channels sont des chemins de communication qui violent la politique de sécurité ; on en distingue deux types, les canaux de timing et les canaux de stockage. Pensez aussi aux citizen programmers, ces employés qui codent des outils métier hors de tout cadre : le résultat est difficile à gérer et généralement dépourvu de considérations de sécurité. Enfin, la réutilisation d'objets mémoire sans effacement expose des données résiduelles, un risque de rémanence des données."
        },
        {
          type: "standard",
          titre: "Bases de données : agrégation et inférence",
          points: [
            "Aggregation : combiner des données non sensibles pour créer de l'information sensible",
            "Inference : l'ATTAQUE qui déduit une information de niveau supérieur à partir d'éléments moins sensibles",
            "ACID : Atomicity, Consistency, Isolation, Durability — l'intégrité transactionnelle",
            "Dirty read : lire une valeur non validée d'une autre transaction, violation de l'isolation"
          ],
          narration: "Passons aux bases de données. L'agrégation désigne la capacité à combiner des données non sensibles provenant de sources séparées pour créer une information sensible : c'est un problème de sécurité structurel. L'inférence, elle, est l'attaque correspondante : un attaquant rassemble des morceaux d'informations peu sensibles pour en déduire une information de sensibilité supérieure. Côté intégrité, retenez le test ACID des transactions : atomicité, cohérence, isolation et durabilité. Une dirty read, quand une transaction lit une valeur écrite par une autre transaction non encore validée, est une violation de la propriété d'isolation. La concurrence se gère par des mécanismes de verrouillage qui évitent les conflits entre utilisateurs simultanés.",
          astuce: "💡 Conseil examen : aggregation est un « security issue », inference est une « attaque ». Cette nuance de formulation apparaît telle quelle à l'examen."
        },
        {
          type: "standard",
          titre: "Polyinstantiation et défenses des bases de données",
          points: [
            "Polyinstantiation : plusieurs versions d'une même donnée à des niveaux de sécurité différents",
            "Empêche un utilisateur de bas niveau d'inférer l'existence de données classifiées",
            "Query attack et bypass attack : contourner le front-end ou les vues de la base",
            "Autres défenses : vues restreintes, contrôle du contenu et du contexte, data contamination à bloquer"
          ],
          narration: "La polyinstantiation, littéralement plusieurs instances, est la défense reine contre l'inférence dans les bases de données multiniveaux. Le système stocke plusieurs versions d'une même donnée, avec la même clé, à des niveaux de sécurité différents, et ne montre à chaque utilisateur que la version correspondant à son habilitation. Ainsi, un utilisateur de bas niveau ne peut pas détecter l'existence de données plus sensibles à travers des erreurs système ou des conflits de doublons. Retenez aussi les attaques par requête, qui utilisent des outils de requête ou des requêtes malformées pour accéder à des données normalement interdites, et les attaques de contournement qui esquivent les contrôles du front-end. Les vues restreintes et la validation stricte des requêtes complètent l'arsenal défensif."
        },
        {
          type: "question",
          titre: "Contrôle de connaissances",
          points: [],
          narration: "Vérifions votre compréhension des défenses de bases de données.",
          q: "Dans une base de données militaire multiniveau, un utilisateur non habilité tente de créer un enregistrement portant la même clé qu'un enregistrement classifié invisible pour lui. Quel mécanisme empêche que le rejet de sa requête ne lui révèle l'existence de la donnée classifiée ?",
          choix: ["Le chiffrement transparent de la base", "La polyinstantiation", "La normalisation du schéma", "Le verrouillage pessimiste"],
          reponse: 1,
          explication: "La polyinstantiation permet de stocker plusieurs versions d'une même donnée, avec le même identifiant, à des niveaux de sécurité différents. L'utilisateur de bas niveau peut créer sa version sans erreur et ne peut donc rien inférer sur l'existence de la version classifiée. Le chiffrement protège la confidentialité au repos mais ne masque pas les conflits de clés, la normalisation est une technique de conception, et le verrouillage gère la concurrence, pas l'inférence."
        },
        {
          type: "resume",
          titre: "Résumé de la leçon",
          points: [
            "OWASP Top 10 : broken access control, injection, misconfiguration, supply chain, cryptographic failures…",
            "Injection SQL : requêtes paramétrées et validation des entrées ; defensive programming partout",
            "XSS : encodage des sorties ; CSRF : jetons anti-CSRF",
            "Buffer overflow : vérification des bornes ; TOCTOU : opérations atomiques et verrous",
            "Aggregation = problème, inference = attaque ; polyinstantiation = défense",
            "ACID : Atomicity, Consistency, Isolation, Durability"
          ],
          narration: "Récapitulons cette leçon dense. L'OWASP Top 10 cartographie les risques applicatifs majeurs, du broken access control à l'injection en passant par la supply chain. Contre l'injection SQL, exigez des requêtes paramétrées et la validation des entrées. Contre le XSS, encodez les sorties ; contre le CSRF, imposez des jetons uniques. Le buffer overflow se prévient par la vérification des bornes, et les attaques TOCTOU par des opérations atomiques. Côté bases de données, l'agrégation est le problème, l'inférence est l'attaque, et la polyinstantiation est la défense. Enfin, les propriétés ACID garantissent l'intégrité des transactions."
        }
      ]
    },
    // ------------------------------------------------------------------
    // LEÇON 5 — Évaluation, acquisition, APIs et codage sécurisé
    // ------------------------------------------------------------------
    {
      id: "d8-l5",
      titre: "Évaluer la sécurité logicielle : tests, acquisition, APIs et codage sécurisé",
      duree: 12,
      slides: [
        {
          type: "intro",
          titre: "Faire confiance, mais vérifier",
          points: [
            "Comment prouver qu'un logiciel, développé ou acheté, est suffisamment sûr ?",
            "Tests de sécurité applicative : SAST, DAST, IAST, SCA",
            "Évaluation des logiciels acquis : COTS, open source, tiers, cloud"
          ],
          narration: "Dernière leçon de ce domaine : comment évaluer l'efficacité de la sécurité logicielle, que le logiciel soit développé en interne ou acquis à l'extérieur. Nous verrons d'abord les grandes familles de tests de sécurité applicative, puis les critères d'évaluation des logiciels commerciaux, open source, sur mesure et cloud. Nous terminerons par la sécurité des APIs et microservices, et par les standards de codage sécurisé, y compris la gestion des erreurs et la journalisation."
        },
        {
          type: "standard",
          titre: "SAST : l'analyse statique",
          points: [
            "Examine le code SANS l'exécuter, avant même la compilation",
            "Détecte erreurs de type, dépassements de bornes, code inaccessible, violations de politique",
            "Méthode scalable de revue de code sécurisée",
            "SAST = outil automatisé ; la revue humaine s'appelle code review"
          ],
          narration: "Le static application security testing, ou SAST, analyse le code sans exécuter le programme, souvent avant même la compilation. Il détecte les défauts logiciels comme les erreurs de type, les violations de bornes ou le code inaccessible, ainsi que les écarts par rapport aux politiques de codage sécurisé. C'est une méthode scalable qui permet de vérifier que les développeurs respectent les standards. Petite précision de vocabulaire : le terme SAST est réservé aux outils automatisés ; l'inspection manuelle par des humains s'appelle simplement code review. Parmi les techniques de revue humaine, citons le pair programming, où un développeur code pendant que l'autre relit, et les pass-around reviews, effectuées de façon asynchrone."
        },
        {
          type: "standard",
          titre: "DAST, IAST et SCA",
          points: [
            "DAST : évalue le programme EN COURS D'EXÉCUTION, sans accès au code source",
            "DAST intervient généralement après le SAST, pour traquer les erreurs logiques subtiles",
            "IAST : combinaison des deux — système en exécution AVEC accès au code source",
            "SCA : inventorie les composants open source et tiers, leurs versions, licences et vulnérabilités connues",
            "RASP : agents intégrés à l'application qui détectent et bloquent les violations à l'exécution"
          ],
          narration: "Le dynamic application security testing, ou DAST, évalue le programme pendant son exécution, en le sollicitant de manière à révéler des vulnérabilités exploitables, sans accéder au code source. Il intervient généralement une fois que le SAST a permis de corriger les défauts de base, et il excelle à tracer les erreurs logiques subtiles, les fuites mémoire et les problèmes de compatibilité. L'interactive application security testing, ou IAST, combine les deux approches : le test s'effectue sur le système en fonctionnement, avec accès au code source. La software composition analysis, ou SCA, identifie les composants open source et tiers du code, catalogue leurs versions et licences, et signale les vulnérabilités connues : c'est un outil critique de la gestion de la supply chain. Mentionnons enfin le RASP, des agents de sécurité intégrés à l'application qui détectent les violations à l'exécution et peuvent y réagir.",
          astuce: "💡 Conseil examen : SAST = boîte blanche sans exécution ; DAST = boîte noire en exécution ; IAST = les deux à la fois ; SCA = les dépendances."
        },
        {
          type: "question",
          titre: "Contrôle de connaissances",
          points: [],
          narration: "Une question sur les tests de sécurité applicative.",
          q: "Quelle technique de test évalue une application EN COURS D'EXÉCUTION tout en ayant accès à son code source ?",
          choix: ["SAST", "DAST", "IAST", "SCA"],
          reponse: 2,
          explication: "L'IAST, interactive application security testing, combine le SAST et le DAST : le test est réalisé sur le système en exécution, comme le DAST, mais avec accès au code source, comme le SAST. Le SAST n'exécute pas le programme, le DAST n'a pas accès au source, et la SCA analyse les composants tiers et open source."
        },
        {
          type: "standard",
          titre: "Évaluer les logiciels acquis : COTS et open source",
          points: [
            "COTS : produits finis, largement testés par les chercheurs ; étudier l'historique des vulnérabilités du vendeur",
            "Certifications à rechercher : ISO/IEC 27034, ISO/IEC 27001, FedRAMP",
            "Open source : code inspectable par les défenseurs… et par les attaquants",
            "Risque majeur de l'open source : les versions obsolètes ; prévoir un processus de mise à jour dédié"
          ],
          narration: "Quand on achète du logiciel au lieu de le développer, l'évaluation change de nature. Pour les produits commercial off-the-shelf, ou COTS, les produits les plus répandus ont déjà été testés par des chercheurs, bienveillants ou non : étudier les vulnérabilités découvertes et la façon dont le vendeur y a répondu renseigne sur son sérieux. Pour les produits de niche, recherchez des certifications comme ISO 27034 pour la sécurité applicative, ou des certifications de système de management comme ISO 27001 et FedRAMP, difficiles à obtenir. Côté open source, le code est inspectable par tous, défenseurs comme adversaires. Le plus grand risque reste la dépendance à des versions obsolètes, ce qui impose un processus de mise à jour périodique, distinct de celui des logiciels commerciaux.",
          astuce: "💡 Conseil examen : demandez au vendeur s'il pratique le defensive programming, c'est-à-dire traiter toutes les entrées comme non fiables jusqu'à preuve du contraire."
        },
        {
          type: "standard",
          titre: "Logiciels tiers, services managés et cloud",
          points: [
            "Third-party software : logiciel sur mesure, donc ni COTS ni standard — exiger un audit externe contractuel",
            "Managed services et cloud : commodité contre perte de contrôle",
            "Causes principales des brèches cloud : misconfigurations, manque de visibilité, contrôles d'accès faibles",
            "Certification et accréditation : l'analyse technique, puis la décision formelle d'autoriser l'exploitation"
          ],
          narration: "Le logiciel tiers, développé sur mesure pour l'organisation, n'est pas du COTS : il peut embarquer de l'open source, mais sa personnalisation crée des vulnérabilités spécifiques. La bonne pratique est de faire réaliser un audit et une évaluation de sécurité par un tiers indépendant, en l'inscrivant dans le contrat et en conditionnant l'achat à la réussite de l'audit. Pour les services managés et le cloud, en SaaS, PaaS ou IaaS, l'organisation gagne en commodité mais perd une part de contrôle. Les premières causes de brèches cloud restent les erreurs de configuration, le manque de visibilité sur les accès et les contrôles d'accès insuffisants. Enfin, deux termes formels : la certification est l'analyse technique complète de la sécurité d'un système, et l'accréditation est la déclaration formelle par une autorité désignée que le système est approuvé pour fonctionner à un niveau de risque acceptable."
        },
        {
          type: "standard",
          titre: "Sécurité des APIs et des microservices",
          points: [
            "API : le contrat d'interaction entre composants logiciels — REST échange l'état via HTTP/S",
            "Parameter validation : vérifier que chaque paramètre reçu est dans les limites définies",
            "Authentifier et autoriser chaque appel : clés d'API, OAuth, principe du moindre privilège",
            "Microservices : multiplication des APIs, donc de la surface d'attaque — passerelle API, TLS mutuel, zero trust"
          ],
          narration: "Les APIs, ou application programming interfaces, spécifient la manière dont un composant logiciel interagit avec les autres. Le style REST, très répandu, synchronise des applications distantes en échangeant l'état via HTTP sécurisé. La mesure de sécurité fondamentale est la validation des paramètres : confirmer que chaque valeur reçue est conforme et dans les limites définies avant tout traitement. Chaque appel doit aussi être authentifié et autorisé, avec des mécanismes comme les clés d'API ou OAuth, et le moindre privilège. Dans une architecture microservices, l'application est décomposée en petits services communiquant par API : la surface d'attaque se multiplie d'autant. On la maîtrise avec une passerelle API centralisant l'authentification et la limitation de débit, du chiffrement TLS entre services, et une posture zero trust où aucun service ne fait confiance à un autre par défaut."
        },
        {
          type: "standard",
          titre: "Standards et guidelines de codage sécurisé",
          points: [
            "Standard : activité OBLIGATOIRE — réduit un risque précis, applicable partout, vérifiable",
            "Guideline : recommandation flexible (commentaires cohérents, fonctions courtes)",
            "Les standards rigoureusement appliqués sont le MEILLEUR moyen de réduire les vulnérabilités du code",
            "Software-defined security : les fonctions de sécurité implémentées en logiciel, pilotées dans le pipeline"
          ],
          narration: "Distinguons deux notions que l'examen adore opposer. Un standard est une règle obligatoire : pour mériter ce nom, une pratique de codage doit réduire le risque d'un type précis de vulnérabilité, être applicable à tous les développements de l'organisation, et être vérifiable. Une guideline est une recommandation, plus souple, comme formater les commentaires de façon cohérente ou garder des fonctions courtes. Retenez que des standards de codage sécurisé rigoureusement appliqués sont le meilleur moyen de réduire les vulnérabilités du code source. Mentionnons aussi la software-defined security : les fonctions de sécurité, comme le pare-feu ou la détection d'intrusion, sont implémentées en logiciel et gérées activement dans le pipeline CI/CD, ce qui permet par exemple de repositionner dynamiquement les capteurs selon la menace."
        },
        {
          type: "standard",
          titre: "Gestion des erreurs et journalisation",
          points: [
            "Ne jamais révéler de détails techniques dans les messages d'erreur destinés à l'utilisateur",
            "Échouer de façon sûre : fail secure, en refusant l'accès en cas de doute",
            "Journaliser vers un dépôt centralisé : échecs de validation, authentifications, contrôles d'accès",
            "OWASP recommande aussi de tracer l'usage des privilèges admin, les erreurs TLS et cryptographiques"
          ],
          narration: "La gestion des erreurs est un art d'équilibre. Un message d'erreur destiné à l'utilisateur ne doit jamais révéler de détails techniques, comme une trace de pile ou une requête SQL, car ces informations sont de l'or pour un attaquant. En revanche, les détails complets doivent être journalisés en interne, vers un dépôt de logs centralisé. Et en cas de condition anormale, l'application doit échouer de façon sûre, en refusant l'accès plutôt qu'en l'accordant. Les pratiques de codage sécurisé de l'OWASP recommandent de journaliser notamment : les échecs de validation d'entrée et de sortie, les tentatives d'authentification et surtout les échecs, les échecs de contrôle d'accès, les tentatives de falsification, les jetons de session invalides ou expirés, les exceptions systèmes et applicatives, l'usage des privilèges d'administration, les erreurs TLS et les erreurs cryptographiques."
        },
        {
          type: "question",
          titre: "Contrôle de connaissances",
          points: [],
          narration: "Une dernière vérification avant le résumé.",
          q: "Selon les bonnes pratiques, quel est le MEILLEUR moyen de réduire durablement les vulnérabilités au niveau du code source dans toute l'organisation ?",
          choix: [
            "Réaliser un test d'intrusion annuel sur chaque application",
            "Appliquer rigoureusement des standards de codage sécurisé obligatoires et vérifiables",
            "Publier des guidelines de codage recommandées aux développeurs",
            "Déployer un WAF devant toutes les applications web"
          ],
          reponse: 1,
          explication: "Les standards de codage sécurisé, rigoureusement appliqués, sont le meilleur moyen de réduire les vulnérabilités du code : ils sont obligatoires, applicables à tous les développements et vérifiables. Les guidelines ne sont que des recommandations flexibles, un pentest annuel est ponctuel et détectif, et un WAF est un contrôle compensatoire qui ne corrige pas le code."
        },
        {
          type: "resume",
          titre: "Résumé de la leçon",
          points: [
            "SAST analyse le code sans l'exécuter ; DAST teste l'application en exécution ; IAST combine les deux ; SCA inventorie les dépendances",
            "COTS : historique des vulnérabilités et certifications ; open source : risque d'obsolescence ; tiers : audit externe contractuel",
            "Cloud : misconfigurations et contrôles d'accès faibles en tête des causes de brèches",
            "APIs : parameter validation, authentification de chaque appel ; microservices : passerelle API et zero trust",
            "Standards obligatoires et vérifiables ; messages d'erreur sobres, fail secure, journalisation centralisée"
          ],
          narration: "Terminons ce domaine. Pour tester la sécurité applicative, le SAST analyse le code sans l'exécuter, le DAST teste l'application en fonctionnement, l'IAST combine les deux, et la SCA inventorie les composants tiers. Pour les logiciels acquis, évaluez l'historique de sécurité et les certifications des vendeurs COTS, maîtrisez l'obsolescence de l'open source, et exigez un audit externe pour les développements tiers. Dans le cloud, les erreurs de configuration dominent les causes de brèches. Sécurisez vos APIs par la validation des paramètres et l'authentification de chaque appel. Enfin, imposez des standards de codage sécurisé, gérez les erreurs sans divulguer de détails, échouez de façon sûre, et journalisez les événements de sécurité vers un dépôt centralisé. Vous avez maintenant tous les concepts clés du Domaine 8."
        }
      ]
    }
  ],
  quiz: [
    {
      q: "Un chef de projet doit choisir une méthodologie pour un projet dont les exigences sont incertaines et évolueront fréquemment. Quelle approche est la PLUS adaptée ?",
      choix: ["Waterfall", "Agile", "V-Model", "Big Bang"],
      reponse: 1,
      explication: "Agile est conçu pour accueillir le changement, même tardif, grâce à des itérations courtes et des retours fréquents. Waterfall fige les exigences au départ et n'offre pas de mécanisme formel d'intégration des changements ; le V-Model hérite de cette rigidité en y ajoutant des phases de test parallèles ; « Big Bang » n'est pas une méthodologie structurée adaptée.",
      difficulte: 1
    },
    {
      q: "Quel modèle de développement est décrit comme « risk-driven », chaque itération commençant par l'identification et la résolution des risques ?",
      choix: ["Waterfall", "Spiral", "Scrum", "RAD"],
      reponse: 1,
      explication: "Le modèle en spirale de Barry Boehm est un processus itératif piloté par le risque : chaque tour comprend la détermination des objectifs, l'identification et la résolution des risques, le développement et les tests, puis la planification de l'itération suivante. Waterfall est linéaire, Scrum est un cadre Agile centré sur les sprints, et RAD privilégie le prototypage rapide.",
      difficulte: 1
    },
    {
      q: "Quelle affirmation reflète le MIEUX une valeur du Manifeste Agile ?",
      choix: [
        "La documentation exhaustive plutôt que le logiciel fonctionnel",
        "Le suivi du plan plutôt que la réponse au changement",
        "La collaboration avec le client plutôt que la négociation contractuelle",
        "Les processus et les outils plutôt que les individus et les interactions"
      ],
      reponse: 2,
      explication: "Le Manifeste Agile valorise la collaboration avec le client plutôt que la négociation contractuelle. Les trois autres propositions inversent les valeurs du manifeste : Agile privilégie le logiciel fonctionnel sur la documentation, la réponse au changement sur le plan, et les individus sur les processus.",
      difficulte: 1
    },
    {
      q: "Une organisation déploie automatiquement en production chaque changement de code qui réussit l'ensemble des tests automatisés, sans aucune approbation humaine. Comment s'appelle cette pratique ?",
      choix: ["Continuous integration", "Continuous delivery", "Continuous deployment", "Continuous monitoring"],
      reponse: 2,
      explication: "Le continuous deployment déploie automatiquement en production tout changement passant les tests, sans intervention manuelle. Le continuous delivery maintient le code toujours déployable mais conserve une approbation humaine avant la production. La continuous integration se limite à fusionner et tester le code fréquemment, et le continuous monitoring est une pratique de supervision, pas de déploiement.",
      difficulte: 2
    },
    {
      q: "Quel est l'objectif PRINCIPAL de DevSecOps par rapport à DevOps ?",
      choix: [
        "Accélérer les déploiements en supprimant les contrôles de sécurité bloquants",
        "Intégrer les pratiques de sécurité de manière automatisée dans l'ensemble du pipeline",
        "Transférer la responsabilité de la sécurité à une équipe dédiée en fin de cycle",
        "Remplacer les tests manuels par des audits annuels de conformité"
      ],
      reponse: 1,
      explication: "DevSecOps étend DevOps en intégrant la sécurité comme responsabilité partagée, automatisée dans le pipeline CI/CD, pour qu'elle avance au même rythme que le code. Supprimer les contrôles va à l'encontre du concept ; reléguer la sécurité en fin de cycle est précisément l'anti-modèle que DevSecOps corrige ; et les audits annuels sont incompatibles avec des livraisons quotidiennes.",
      difficulte: 1
    },
    {
      q: "Lors de quelle phase du SDLC les exigences de sécurité devraient-elles être définies pour la PREMIÈRE fois ?",
      choix: [
        "Pendant les tests, quand les vulnérabilités sont détectables",
        "Pendant la collecte des exigences, au tout début du projet",
        "Pendant le développement, quand le code prend forme",
        "Pendant l'exploitation, sur la base des incidents observés"
      ],
      reponse: 1,
      explication: "La sécurité doit être intégrée dès la phase des exigences : c'est là que se définissent les besoins fonctionnels et non fonctionnels, dont la sécurité fait partie. Corriger en phase de test ou d'exploitation coûte beaucoup plus cher, et attendre le développement signifie concevoir sans contraintes de sécurité. Le principe du « shift left » traduit cette exigence.",
      difficulte: 1
    },
    {
      q: "Quel composant de la gestion du changement fournit le cadre organisé dans lequel les utilisateurs demandent des modifications et les managers conduisent les analyses coûts-bénéfices ?",
      choix: ["Change control", "Release control", "Request control", "Configuration control"],
      reponse: 2,
      explication: "Le request control est le processus qui organise les demandes de modification des utilisateurs, l'analyse coûts-bénéfices par les managers et la priorisation par les développeurs. Le change control encadre la création et le test des changements par les développeurs, le release control gère l'approbation de mise en production avec les tests d'acceptation, et le configuration control protège le système contre les modifications inappropriées.",
      difficulte: 2
    },
    {
      q: "Quelle responsabilité relève spécifiquement du release control ?",
      choix: [
        "Prioriser les demandes de modification des utilisateurs",
        "Permettre aux développeurs de recréer le problème signalé par un utilisateur",
        "S'assurer que l'acceptance testing confirme que les changements sont compris et fonctionnels avant la mise en production",
        "Documenter la configuration matérielle des serveurs de production"
      ],
      reponse: 2,
      explication: "Le release control approuve la mise en production et doit inclure l'acceptance testing, confirmant que les modifications des tâches utilisateur sont comprises et fonctionnelles avant la sortie du code. La priorisation des demandes relève du request control, la reproduction des problèmes du change control, et la configuration matérielle du configuration control.",
      difficulte: 2
    },
    {
      q: "Au niveau 3 « Defined » du SW-CMM, quelle caractéristique distingue l'organisation ?",
      choix: [
        "Les processus sont ad hoc et dépendent des individus",
        "Les développeurs suivent des processus formels et documentés, avec des revues par les pairs",
        "Des objectifs quantitatifs sont fixés pour les produits et les processus",
        "L'amélioration continue et la prévention des défauts sont institutionnalisées"
      ],
      reponse: 1,
      explication: "Le niveau 3, Defined, est marqué par des processus de développement formels et documentés, les revues par les pairs, la coordination inter-groupes et les programmes de formation. Les processus ad hoc caractérisent le niveau 1 (Initial), les mesures quantitatives le niveau 4 (Managed), et l'amélioration continue le niveau 5 (Optimizing).",
      difficulte: 2
    },
    {
      q: "Quelle est la distinction CORRECTE entre le modèle IDEAL et le SW-CMM ?",
      choix: [
        "IDEAL évalue la maturité actuelle, SW-CMM décrit comment s'améliorer",
        "IDEAL est un modèle d'amélioration des processus, SW-CMM est un modèle d'évaluation de maturité",
        "IDEAL est maintenu par OWASP, SW-CMM par le NIST",
        "IDEAL ne s'applique qu'aux projets Agile, SW-CMM qu'aux projets Waterfall"
      ],
      reponse: 1,
      explication: "IDEAL (Initiating, Diagnosing, Establishing, Acting, Learning) est un modèle d'amélioration des processus : il décrit comment progresser. Le SW-CMM est un modèle d'évaluation de maturité : il situe l'organisation sur cinq niveaux. Les deux ont été développés par le SEI de Carnegie Mellon, pas par OWASP ni le NIST, et aucun n'est lié à une méthodologie particulière.",
      difficulte: 2
    },
    {
      q: "Quelle fonction métier du SAMM d'OWASP couvre le threat modeling et l'architecture de sécurité ?",
      choix: ["Governance", "Design", "Implementation", "Verification"],
      reponse: 1,
      explication: "La fonction Design du SAMM couvre la définition des exigences logicielles et la conception, incluant le threat modeling, l'évaluation des menaces, les exigences de sécurité et l'architecture de sécurité. Governance couvre stratégie, métriques et conformité ; Implementation couvre le build et le déploiement sécurisés ; Verification couvre les tests et l'évaluation d'architecture.",
      difficulte: 2
    },
    {
      q: "Un RSSI veut évaluer la maturité des pratiques de sécurité du développement logiciel de son organisation. Quel modèle est le PLUS approprié ?",
      choix: ["SW-CMM", "SAMM", "IDEAL", "Waterfall"],
      reponse: 1,
      explication: "Le SAMM d'OWASP est spécifiquement conçu pour intégrer la sécurité dans le développement logiciel et évaluer la maturité de ces pratiques de sécurité. Le SW-CMM mesure la maturité des processus de développement en général mais ne traite pas explicitement de la sécurité ; IDEAL est un modèle d'amélioration générique ; Waterfall est une méthodologie de développement, pas un modèle de maturité.",
      difficulte: 2
    },
    {
      q: "Un développeur découvre des identifiants de base de données codés en dur dans un dépôt de code accessible à toute l'entreprise. Que devrait faire l'organisation EN PREMIER ?",
      choix: [
        "Supprimer le fichier du dépôt et considérer l'incident clos",
        "Révoquer et remplacer immédiatement les identifiants exposés",
        "Former le développeur aux bonnes pratiques de gestion des secrets",
        "Migrer le dépôt vers une plateforme privée"
      ],
      reponse: 1,
      explication: "Les identifiants doivent être considérés comme compromis dès leur exposition : la priorité est de les révoquer et de les remplacer. Supprimer le fichier ne suffit pas, car l'historique du dépôt conserve les données et elles ont pu être copiées. La formation et la migration du dépôt sont des mesures correctives utiles, mais elles viennent après le traitement de l'exposition active.",
      difficulte: 2
    },
    {
      q: "Quel est le PLUS GRAND risque associé à l'utilisation de logiciels open source dans une organisation ?",
      choix: [
        "Le code source est visible par les attaquants",
        "L'absence de licence d'utilisation",
        "La dépendance à des versions obsolètes, notamment des bibliothèques partagées",
        "Le coût élevé du support éditeur"
      ],
      reponse: 2,
      explication: "Le plus grand risque de l'open source est de dépendre de versions obsolètes, en particulier pour les bibliothèques partagées : les vulnérabilités connues restent exploitables tant que la mise à jour n'est pas faite. La visibilité du code profite autant aux défenseurs qu'aux attaquants et n'est pas le risque principal ; l'open source est justement distribué sous licence ; et l'absence de support payant est une contrainte opérationnelle, pas le risque majeur.",
      difficulte: 2
    },
    {
      q: "Quel est le PRINCIPAL bénéfice de sécurité d'un Software Bill of Materials (SBOM) ?",
      choix: [
        "Il chiffre les dépendances du logiciel",
        "Il permet d'identifier rapidement les systèmes affectés lors de la divulgation d'une nouvelle vulnérabilité",
        "Il empêche l'introduction de code malveillant dans le pipeline",
        "Il remplace les tests de sécurité applicative"
      ],
      reponse: 1,
      explication: "Le SBOM est un inventaire formel de tous les composants, bibliothèques et dépendances d'un produit logiciel. Son bénéfice principal est de permettre d'identifier rapidement les systèmes affectés quand une vulnérabilité est divulguée dans un composant. Il ne chiffre rien, n'empêche pas par lui-même l'introduction de code malveillant, et ne remplace aucun test : c'est un outil de visibilité.",
      difficulte: 1
    },
    {
      q: "En programmation orientée objet, quelle combinaison caractérise une conception logicielle de QUALITÉ ?",
      choix: [
        "Cohésion élevée et couplage élevé",
        "Cohésion faible et couplage faible",
        "Cohésion élevée et couplage faible",
        "Cohésion faible et couplage élevé"
      ],
      reponse: 2,
      explication: "Une bonne conception combine une cohésion élevée, où les méthodes d'une même classe partagent des objectifs similaires, et un couplage faible, où les objets interagissent peu entre eux. Cette combinaison rend le code plus indépendant, plus facile à dépanner et à faire évoluer. Toute autre combinaison dégrade la maintenabilité et augmente la propagation des erreurs.",
      difficulte: 2
    },
    {
      q: "Quelle caractéristique d'un objet lui permet de répondre par des comportements différents au même message selon les conditions externes ?",
      choix: ["L'encapsulation", "L'héritage", "Le polymorphisme", "La délégation"],
      reponse: 2,
      explication: "Le polymorphisme est la caractéristique d'un objet qui lui permet de répondre avec des comportements différents au même message ou à la même méthode en fonction de changements dans les conditions externes. L'encapsulation regroupe données et méthodes, l'héritage transmet les méthodes d'une classe parente à ses sous-classes, et la délégation transfère une requête à un autre objet.",
      difficulte: 2
    },
    {
      q: "Une application web renvoie l'intégralité de la table clients lorsqu'un utilisateur saisit « ' OR 1=1 -- » dans le champ de connexion. Quel est le MEILLEUR contrôle préventif contre cette attaque ?",
      choix: [
        "Un système de détection d'intrusion réseau",
        "Les requêtes paramétrées et la validation des entrées",
        "Le chiffrement de la base de données au repos",
        "Une revue de code annuelle"
      ],
      reponse: 1,
      explication: "Il s'agit d'une injection SQL. Les requêtes paramétrées empêchent l'interprétation des entrées comme du code SQL, et la validation des entrées la complète : c'est la défense préventive la plus efficace. Un IDS est détectif et non préventif, le chiffrement au repos ne protège pas contre des requêtes exécutées légitimement par l'application, et une revue annuelle est trop ponctuelle pour prévenir l'exploitation.",
      difficulte: 1
    },
    {
      q: "Quelle distinction entre XSS et CSRF est CORRECTE ?",
      choix: [
        "XSS exploite la confiance du site envers le navigateur ; CSRF exécute un script chez la victime",
        "XSS exécute un script malveillant dans le navigateur de la victime ; CSRF fait émettre à la victime authentifiée une requête non désirée",
        "XSS ne concerne que les applications mobiles ; CSRF ne concerne que les APIs",
        "Les deux attaques sont identiques, seul le vecteur d'injection diffère"
      ],
      reponse: 1,
      explication: "Le XSS injecte un script qui s'exécute dans le navigateur de la victime, abusant de la confiance de l'utilisateur envers le site. Le CSRF abuse de la confiance du site envers le navigateur : il fait émettre à un utilisateur déjà authentifié une requête qu'il n'a pas voulue. La première proposition inverse les deux définitions, et les deux attaques sont bien distinctes, avec des défenses différentes : encodage des sorties pour XSS, jetons anti-CSRF pour CSRF.",
      difficulte: 2
    },
    {
      q: "Un attaquant soumet une entrée de 5 000 caractères dans un champ prévu pour 256, ce qui lui permet d'écraser des zones mémoire adjacentes et d'exécuter du code arbitraire. De quelle vulnérabilité s'agit-il et quelle est la contre-mesure au niveau du CODE ?",
      choix: [
        "Race condition ; utiliser des verrous",
        "Buffer overflow ; vérifier les bornes et la taille des entrées",
        "Injection SQL ; utiliser des requêtes paramétrées",
        "Covert channel ; chiffrer les communications"
      ],
      reponse: 1,
      explication: "Une entrée plus grande que l'espace alloué au tampon qui écrase la mémoire adjacente est un buffer overflow. La contre-mesure au niveau du code est la vérification systématique des bornes et de la taille des entrées (bounds checking). Les verrous répondent aux race conditions, les requêtes paramétrées à l'injection SQL, et le chiffrement ne traite pas les canaux cachés au niveau du code applicatif.",
      difficulte: 1
    },
    {
      q: "Un programme vérifie les permissions d'un utilisateur sur un fichier, puis ouvre ce fichier quelques millisecondes plus tard. Un attaquant remplace le fichier par un lien symbolique vers /etc/shadow entre ces deux opérations. Comment s'appelle cette attaque ?",
      choix: ["Buffer overflow", "TOCTOU (time-of-check to time-of-use)", "Injection de commande", "Dirty read"],
      reponse: 1,
      explication: "C'est une attaque TOCTOU, une forme de race condition qui exploite le délai entre la vérification de sécurité (time of check) et l'utilisation réelle de la ressource (time of use). La parade consiste à rendre les opérations atomiques et à revérifier au moment de l'usage. Le buffer overflow concerne la mémoire, l'injection de commande les entrées utilisateur, et la dirty read la concurrence transactionnelle en base de données.",
      difficulte: 2
    },
    {
      q: "Quelle affirmation décrit CORRECTEMENT la relation entre agrégation et inférence en sécurité des bases de données ?",
      choix: [
        "L'inférence est un problème de sécurité, l'agrégation est l'attaque correspondante",
        "L'agrégation est la capacité à combiner des données non sensibles en information sensible ; l'inférence est l'attaque qui en déduit une information de sensibilité supérieure",
        "Les deux termes désignent la même attaque sur les index de la base",
        "L'agrégation ne concerne que les données chiffrées, l'inférence que les données en clair"
      ],
      reponse: 1,
      explication: "L'agrégation est un problème de sécurité : la capacité de combiner des données non sensibles issues de sources séparées pour créer une information sensible. L'inférence est l'attaque : l'adversaire rassemble des éléments peu sensibles pour déduire une information de sensibilité supérieure. La première proposition inverse les termes, et les deux dernières sont fantaisistes.",
      difficulte: 3
    },
    {
      q: "Quelle propriété ACID est violée lorsqu'une transaction lit une valeur écrite par une autre transaction qui n'a pas encore été validée (dirty read) ?",
      choix: ["Atomicity", "Consistency", "Isolation", "Durability"],
      reponse: 2,
      explication: "La dirty read viole la propriété d'Isolation, qui exige que les transactions concurrentes n'interfèrent pas entre elles : une transaction ne doit pas voir les modifications non validées d'une autre. L'atomicité garantit le tout-ou-rien, la cohérence le respect des règles d'intégrité, et la durabilité la persistance des transactions validées.",
      difficulte: 2
    },
    {
      q: "Quel mécanisme permet à une base de données multiniveau de stocker deux enregistrements portant la même clé primaire à des niveaux de classification différents ?",
      choix: ["La normalisation", "La polyinstantiation", "Le partitionnement", "La réplication"],
      reponse: 1,
      explication: "La polyinstantiation crée plusieurs instances d'une même donnée, avec le même identifiant, à des niveaux de sécurité différents. Chaque utilisateur ne voit que la version correspondant à son habilitation, ce qui empêche l'inférence de l'existence de données classifiées. La normalisation structure le schéma, le partitionnement répartit les données pour la performance, et la réplication copie les données pour la disponibilité.",
      difficulte: 2
    },
    {
      q: "Un développeur a laissé dans l'application de production un mécanisme caché lui permettant de contourner l'authentification « pour faciliter la maintenance ». Comment ce mécanisme est-il désigné et quelle est la position correcte de l'organisation ?",
      choix: [
        "Un covert channel ; il est acceptable s'il est documenté",
        "Une backdoor (maintenance hook) ; elle doit être interdite et retirée du code de production",
        "Un RASP ; il doit être conservé pour la supervision",
        "Un trapdoor ; il est acceptable si l'accès est chiffré"
      ],
      reponse: 1,
      explication: "Un mécanisme caché contournant les contrôles d'accès est une backdoor, aussi appelée trapdoor ou maintenance hook. Même créée avec de bonnes intentions, elle contourne les contrôles d'accès et peut être découverte et exploitée par un attaquant : elle doit être interdite par la politique et retirée avant la mise en production. Un covert channel est un canal de communication violant la politique, et le RASP est un agent de protection légitime intégré à l'application.",
      difficulte: 2
    },
    {
      q: "Quelle technique d'analyse examine le code source SANS exécuter le programme ?",
      choix: ["DAST", "SAST", "IAST", "Fuzzing"],
      reponse: 1,
      explication: "Le SAST (static application security testing) examine le code sans exécuter le programme, souvent avant compilation, pour détecter défauts et violations de politique de codage. Le DAST évalue le programme en cours d'exécution, l'IAST combine exécution et accès au code source, et le fuzzing est une technique dynamique qui injecte des entrées malformées dans un programme en fonctionnement.",
      difficulte: 1
    },
    {
      q: "Une équipe sécurité veut inventorier les composants open source d'une application, leurs versions, leurs licences et leurs vulnérabilités connues. Quel type d'outil doit-elle utiliser ?",
      choix: [
        "Software composition analysis (SCA)",
        "Dynamic application security testing (DAST)",
        "Runtime application self-protection (RASP)",
        "Web application firewall (WAF)"
      ],
      reponse: 0,
      explication: "La SCA identifie les composants open source et tiers d'une base de code, catalogue leurs versions et licences, et signale les vulnérabilités connues : c'est l'outil central de la gestion du risque de supply chain logicielle. Le DAST teste l'application en exécution sans inventorier les dépendances, le RASP protège l'application à l'exécution, et le WAF filtre le trafic web.",
      difficulte: 1
    },
    {
      q: "Votre organisation s'apprête à acheter un logiciel développé sur mesure par un prestataire externe. Quelle est la MEILLEURE pratique pour évaluer sa sécurité avant l'achat ?",
      choix: [
        "Se fier aux certifications génériques du prestataire",
        "Prévoir contractuellement un audit de sécurité externe, dont la réussite conditionne la finalisation de l'achat",
        "Exiger uniquement une démonstration fonctionnelle du produit",
        "Attendre la mise en production pour réaliser un test d'intrusion"
      ],
      reponse: 1,
      explication: "Pour du logiciel tiers sur mesure, la meilleure pratique consiste à faire réaliser un audit et une évaluation de sécurité par un tiers indépendant, inscrits dans le contrat, la réussite de l'audit conditionnant la finalisation de l'achat. Les certifications générales sont un indicateur mais ne couvrent pas ce développement spécifique, une démonstration fonctionnelle ne dit rien de la sécurité, et attendre la production expose l'organisation à des risques évitables.",
      difficulte: 2
    },
    {
      q: "Quelles sont les causes PRINCIPALES des brèches de sécurité dans le cloud ?",
      choix: [
        "Les vulnérabilités zero-day des hyperviseurs",
        "Les erreurs de configuration, le manque de visibilité sur les accès et les contrôles d'accès insuffisants",
        "Les pannes matérielles des centres de données",
        "Les attaques par déni de service distribué"
      ],
      reponse: 1,
      explication: "Les premières causes de brèches cloud restent les misconfigurations, le manque de visibilité sur les paramètres d'accès et les contrôles d'accès insuffisants : des erreurs côté client du modèle de responsabilité partagée. Les zero-days d'hyperviseur sont rares, les pannes matérielles relèvent de la disponibilité gérée par le fournisseur, et les DDoS, bien que réels, ne sont pas la cause principale des brèches de données.",
      difficulte: 2
    },
    {
      q: "Quelle mesure est FONDAMENTALE pour sécuriser l'utilisation d'une API ?",
      choix: [
        "Publier la documentation complète de l'API",
        "La validation des paramètres : vérifier que chaque valeur reçue est dans les limites définies avant traitement",
        "Limiter l'API aux seuls appels internes",
        "Utiliser exclusivement le format XML"
      ],
      reponse: 1,
      explication: "La parameter validation est la mesure fondamentale : elle garantit que tout paramètre reçu par l'API est contrôlé contre les valeurs malformées, invalides ou malveillantes avant traitement. La documentation aide les développeurs mais ne protège pas, restreindre aux appels internes n'est souvent pas possible et ne valide rien, et le choix du format d'échange n'est pas un contrôle de sécurité en soi.",
      difficulte: 1
    },
    {
      q: "Quelle est la différence entre un standard et une guideline de codage sécurisé ?",
      choix: [
        "Un standard est recommandé, une guideline est obligatoire",
        "Un standard est obligatoire, vérifiable et applicable à tous les développements ; une guideline est une recommandation flexible",
        "Les deux termes sont interchangeables",
        "Un standard ne concerne que les langages compilés"
      ],
      reponse: 1,
      explication: "Un standard est une règle obligatoire : il doit réduire le risque d'un type précis de vulnérabilité, être applicable à l'ensemble des développements de l'organisation et être vérifiable. Une guideline est une recommandation qui laisse de la flexibilité, comme des commentaires cohérents ou des fonctions courtes. La première proposition inverse les définitions, et les deux notions sont bien distinctes, quel que soit le langage.",
      difficulte: 1
    },
    {
      q: "Une application affiche la trace de pile complète et la requête SQL en erreur lorsqu'une exception survient. Quel est le risque PRINCIPAL et la correction appropriée ?",
      choix: [
        "Risque de déni de service ; augmenter les ressources serveur",
        "Divulgation d'informations utiles à un attaquant ; afficher un message générique et journaliser les détails en interne",
        "Perte de données ; mettre en place des sauvegardes",
        "Aucun risque ; ces informations aident les utilisateurs"
      ],
      reponse: 1,
      explication: "Des messages d'erreur détaillés révèlent la structure interne de l'application, la technologie utilisée et parfois le schéma de la base : autant d'informations précieuses pour un attaquant. La bonne pratique est d'afficher un message générique à l'utilisateur, de journaliser les détails complets vers un dépôt centralisé, et d'échouer de façon sûre. Il ne s'agit ni d'un problème de capacité ni de sauvegarde.",
      difficulte: 1
    },
    {
      q: "Selon les pratiques de codage sécurisé de l'OWASP, lequel de ces événements devrait IMPÉRATIVEMENT être journalisé ?",
      choix: [
        "Chaque affichage de page réussi de tous les utilisateurs",
        "Les échecs de validation d'entrée, les échecs d'authentification et l'usage des privilèges d'administration",
        "Le contenu intégral des mots de passe saisis",
        "Uniquement les redémarrages du serveur"
      ],
      reponse: 1,
      explication: "L'OWASP recommande de journaliser notamment les échecs de validation d'entrée et de sortie, les tentatives d'authentification et surtout leurs échecs, les échecs de contrôle d'accès, les jetons de session invalides, les exceptions, les erreurs TLS et cryptographiques, et l'usage des privilèges d'administration. Journaliser chaque page vue noie le signal, enregistrer les mots de passe est une faute grave, et se limiter aux redémarrages est très insuffisant.",
      difficulte: 2
    },
    {
      q: "Quelle affirmation décrit CORRECTEMENT la certification et l'accréditation d'un système ?",
      choix: [
        "La certification est la décision d'exploitation ; l'accréditation est l'analyse technique",
        "La certification est l'analyse technique complète de la sécurité ; l'accréditation est la déclaration formelle par l'autorité désignée que le système est approuvé pour fonctionner à un niveau de risque acceptable",
        "Les deux termes désignent l'audit annuel de conformité",
        "L'accréditation est délivrée par l'éditeur du logiciel"
      ],
      reponse: 1,
      explication: "La certification est l'analyse technique de sécurité complète vérifiant que le système répond aux exigences applicables. L'accréditation est la déclaration formelle par une autorité d'accréditation désignée (DAA) que le système est approuvé pour fonctionner à un niveau de risque acceptable. La première proposition inverse les définitions ; il ne s'agit ni d'un audit annuel ni d'une décision de l'éditeur.",
      difficulte: 3
    },
    {
      q: "Une organisation autorise ses employés métier à créer eux-mêmes des petites applications avec des outils low-code, sans supervision de l'IT. Quel risque PRINCIPAL ce phénomène de « citizen programmers » présente-t-il ?",
      choix: [
        "Les licences des outils low-code sont coûteuses",
        "Le développement ad hoc est difficile à gérer et généralement dépourvu de considérations de sécurité",
        "Les employés deviennent plus productifs que les développeurs",
        "Les applications produites sont trop performantes pour les serveurs"
      ],
      reponse: 1,
      explication: "Les citizen programmers codifient leurs connaissances métier de façon ad hoc : le résultat est difficile à gérer, échappe au SDLC et aux contrôles, et est généralement dépourvu de considérations de sécurité — validation des entrées, gestion des accès, journalisation. Le coût des licences est un enjeu financier secondaire, et les deux dernières propositions ne décrivent pas des risques de sécurité.",
      difficulte: 2
    },
    {
      q: "Dans une architecture microservices, quelle combinaison de contrôles réduit le MIEUX la surface d'attaque liée à la multiplication des APIs ?",
      choix: [
        "Un mot de passe partagé entre tous les services et des logs locaux",
        "Une passerelle API centralisant authentification et limitation de débit, du TLS entre services et une posture zero trust",
        "La désactivation du chiffrement interne pour améliorer les performances",
        "L'exposition directe de chaque microservice sur Internet pour simplifier l'architecture"
      ],
      reponse: 1,
      explication: "La bonne combinaison associe une passerelle API qui centralise l'authentification, l'autorisation et la limitation de débit, du chiffrement TLS pour les communications entre services, et une approche zero trust où aucun service ne fait confiance à un autre par défaut. Un secret partagé crée un point de compromission unique, désactiver le chiffrement interne expose les flux, et l'exposition directe multiplie les portes d'entrée.",
      difficulte: 3
    },
    {
      q: "Quel terme désigne l'exécution, par la victime, d'un ensemble d'instructions choisi par l'attaquant à la suite de l'exploitation d'une vulnérabilité comme un buffer overflow ?",
      choix: ["Exécution de code arbitraire", "Dirty read", "Query attack", "Data mining"],
      reponse: 0,
      explication: "L'exécution de code arbitraire désigne le fait qu'un attaquant parvienne à faire exécuter au processeur un ensemble alternatif d'instructions de son choix, conséquence typique d'un buffer overflow ou d'une entrée malformée non contrôlée. La dirty read est un problème de concurrence transactionnelle, la query attack un contournement des contrôles d'une base via des requêtes, et le data mining une technique légitime d'analyse de données.",
      difficulte: 1
    },
    {
      q: "Pourquoi le code compilé présente-t-il un compromis de sécurité par rapport au code interprété ?",
      choix: [
        "Le code compilé est toujours moins sécurisé que le code interprété",
        "Le code compilé est plus difficile à manipuler par un tiers, mais les backdoors y sont aussi plus difficiles à détecter faute de code source visible",
        "Le code compilé ne peut pas contenir de vulnérabilités",
        "Le code interprété ne peut pas être lu par les attaquants"
      ],
      reponse: 1,
      explication: "Le code compilé, distribué en binaire, est généralement moins exposé à la manipulation directe par un tiers ; mais comme le code source n'est pas visible dans la forme compilée, il est aussi plus difficile pour les relecteurs d'y détecter des backdoors ou d'autres failles. Aucune forme n'est intrinsèquement exempte de vulnérabilités, et le code interprété est au contraire lisible par quiconque y accède.",
      difficulte: 3
    }
  ],
  flashcards: [
    { recto: "SDLC (Software Development Life Cycle)", verso: "Cadre structurant la vie du logiciel : collecte des exigences, conception, développement, tests, exploitation et maintenance, jusqu'au décommissionnement. La sécurité doit être intégrée à chaque phase, dès les exigences." },
    { recto: "Waterfall vs Spiral", verso: "Waterfall : modèle linéaire et séquentiel (Royce, 1970), exigences figées, très rigide. Spiral (Boehm) : modèle itératif piloté par le risque, chaque tour commence par l'identification et la résolution des risques." },
    { recto: "V-Model", verso: "Extension du modèle Waterfall qui associe à chaque phase de développement une phase de test correspondante, illustrant le parallélisme entre activités de développement et de vérification/validation." },
    { recto: "Manifeste Agile : les 4 valeurs", verso: "Les individus et interactions plutôt que les processus ; le logiciel fonctionnel plutôt que la documentation exhaustive ; la collaboration avec le client plutôt que la négociation contractuelle ; la réponse au changement plutôt que le suivi d'un plan." },
    { recto: "DevSecOps", verso: "Extension de DevOps intégrant la sécurité comme responsabilité partagée et automatisée dans tout le pipeline CI/CD (« shift left »). Soutient la software-defined security : les contrôles de sécurité sont gérés activement dans le pipeline." },
    { recto: "Continuous Delivery vs Continuous Deployment", verso: "Delivery : le code est toujours déployable, mais la mise en production exige une approbation humaine. Deployment : tout changement passant les tests automatisés est déployé en production sans intervention manuelle." },
    { recto: "Request / Change / Release Control", verso: "Request control : cadre des demandes de modification, analyse coûts-bénéfices, priorisation. Change control : recréation du problème, création et test de la solution avant production. Release control : approbation de mise en production, incluant l'acceptance testing." },
    { recto: "SW-CMM : les 5 niveaux", verso: "1 Initial (ad hoc), 2 Repeatable (gestion de projet de base), 3 Defined (processus formels documentés), 4 Managed (mesures quantitatives), 5 Optimizing (amélioration continue). Créé par le SEI ; ne traite pas explicitement de la sécurité." },
    { recto: "SAMM (Software Assurance Maturity Model)", verso: "Projet open source d'OWASP pour intégrer la sécurité dans le développement et évaluer sa maturité. Cinq fonctions métier : Governance, Design, Implementation, Verification, Operations." },
    { recto: "Modèle IDEAL", verso: "Modèle d'amélioration des processus du SEI : Initiating, Diagnosing, Establishing, Acting, Learning. À distinguer du SW-CMM, qui est un modèle d'évaluation de maturité (où vous en êtes vs comment progresser)." },
    { recto: "SBOM (Software Bill of Materials)", verso: "Inventaire formel de tous les composants, bibliothèques et dépendances d'un produit logiciel. Permet d'identifier rapidement les systèmes affectés lors de la divulgation d'une nouvelle vulnérabilité ; central pour la supply chain logicielle." },
    { recto: "Buffer overflow", verso: "Vulnérabilité du code source permettant d'accéder à des emplacements mémoire hors de l'espace alloué au tampon, déclenchée par une entrée plus grande que prévu. Peut mener à l'exécution de code arbitraire. Défense : vérification des bornes (bounds checking)." },
    { recto: "TOCTOU (time-of-check to time-of-use)", verso: "Attaque de type race condition exploitant le délai entre une vérification de sécurité (authentification, autorisation) et l'utilisation réelle de la ressource. Défenses : opérations atomiques, verrous, revérification au moment de l'usage." },
    { recto: "XSS vs CSRF", verso: "XSS : script malveillant exécuté dans le navigateur de la victime (défense : validation des entrées, encodage des sorties). CSRF : requête non désirée émise par la victime déjà authentifiée (défense : jetons anti-CSRF uniques)." },
    { recto: "Aggregation vs Inference", verso: "Aggregation : problème de sécurité — combiner des données non sensibles de sources séparées pour créer de l'information sensible. Inference : l'attaque — déduire une information de sensibilité supérieure à partir d'éléments moins sensibles." },
    { recto: "Polyinstantiation", verso: "Stockage de plusieurs versions d'une même donnée, avec le même identifiant, à des niveaux de sécurité différents. Chaque utilisateur ne voit que la version correspondant à son habilitation, ce qui empêche l'inférence de l'existence de données classifiées." },
    { recto: "ACID", verso: "Propriétés d'intégrité des transactions : Atomicity (tout ou rien), Consistency (respect des règles d'intégrité), Isolation (pas d'interférence entre transactions — une dirty read viole cette propriété), Durability (persistance des transactions validées)." },
    { recto: "SAST vs DAST vs IAST vs SCA", verso: "SAST : analyse du code sans exécution (boîte blanche). DAST : test de l'application en exécution, sans code source (boîte noire). IAST : combinaison — exécution avec accès au code source. SCA : inventaire des composants open source/tiers et de leurs vulnérabilités." },
    { recto: "Backdoor / trapdoor / maintenance hook", verso: "Mécanisme caché contournant les contrôles d'accès, inséré par un développeur (maintenance) ou un attaquant. Doit être interdit et retiré du code de production, car il peut être découvert et exploité." },
    { recto: "Covert channel", verso: "Chemin de communication qui viole la politique de sécurité, utilisé pour transmettre de l'information par une voie non prévue. Deux types de base : timing (canaux temporels) et storage (canaux de stockage)." },
    { recto: "Standard vs guideline de codage sécurisé", verso: "Standard : règle obligatoire — réduit un type précis de vulnérabilité, applicable à tous les développements, vérifiable. Guideline : recommandation flexible. Les standards rigoureusement appliqués sont le meilleur moyen de réduire les vulnérabilités du code source." },
    { recto: "Certification vs Accreditation", verso: "Certification : analyse technique complète de la sécurité d'un système par rapport à ses exigences. Accreditation : déclaration formelle par l'autorité désignée (DAA) que le système est approuvé pour fonctionner à un niveau de risque acceptable." },
    { recto: "Cohésion et couplage (OOP)", verso: "Cohésion : force de la relation entre les objectifs des méthodes d'une même classe (élevée = bon signe). Couplage : niveau d'interaction entre objets (faible = meilleur design, code plus indépendant et maintenable). Viser : high cohesion, low coupling." },
    { recto: "Parameter validation (API)", verso: "Contrôle fondamental de sécurité des APIs : vérifier que chaque paramètre reçu n'est ni malformé, ni invalide, ni malveillant, et qu'il se situe dans les limites définies, avant tout traitement par le système." },
    { recto: "COTS (Commercial Off-The-Shelf)", verso: "Logiciel fourni comme produit fini, non destiné à être modifié par l'utilisateur. Évaluation : historique des vulnérabilités et réactivité du vendeur, certifications (ISO/IEC 27034, ISO/IEC 27001, FedRAMP), pratiques de defensive programming." },
    { recto: "RASP (Runtime Application Self-Protection)", verso: "Agents de sécurité intégrés dans l'application, capables de détecter des violations de sécurité à l'exécution et de réagir, par exemple en terminant l'application ou en prenant d'autres actions protectrices." }
  ]
};
