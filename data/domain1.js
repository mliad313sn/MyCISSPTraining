/* Domaine 1 — données générées ; schéma : data/SCHEMA.md */
window.CISSP_DATA = window.CISSP_DATA || { domains: {} };
window.CISSP_DATA.domains[1] = {
  "id": 1,
  "code": "D1",
  "titre": "Sécurité et gestion des risques",
  "titreEn": "Security and Risk Management",
  "poids": "16%",
  "couleur": "#ef476f",
  "icone": "🛡️",
  "description": "Le Domaine 1 est le socle de tout le CISSP : il couvre les concepts fondamentaux de la sécurité (CIA, AAA), la gouvernance, la conformité légale et réglementaire, l'éthique professionnelle, la gestion des risques, la modélisation des menaces et la continuité d'activité. C'est le domaine le plus lourd de l'examen, et surtout celui qui installe la posture de manager attendue par ISC².",
  "objectifs": [
    "1.1 Comprendre, respecter et promouvoir l'éthique professionnelle (Code ISC²)",
    "1.2 Comprendre et appliquer les concepts de sécurité (CIA, authenticité, non-répudiation, AAA)",
    "1.3 Évaluer et appliquer les principes de gouvernance de la sécurité",
    "1.4 Comprendre les enjeux légaux, réglementaires et de conformité (GDPR, HIPAA, PCI-DSS…)",
    "1.5 Comprendre les exigences des types d'enquêtes (administrative, criminelle, civile, réglementaire)",
    "1.6 Développer et mettre en œuvre politiques, standards, procédures et guidelines",
    "1.7 Identifier, analyser et prioriser les exigences de continuité d'activité (BCP, BIA)",
    "1.8 Contribuer aux politiques de sécurité du personnel et les faire respecter",
    "1.9 Comprendre et appliquer les concepts de gestion des risques",
    "1.10 Comprendre et appliquer les méthodologies de threat modeling (STRIDE, DREAD, PASTA)",
    "1.11 Appliquer les concepts de Supply Chain Risk Management (SCRM)",
    "1.12 Établir et maintenir un programme de sensibilisation, d'éducation et de formation à la sécurité"
  ],
  "lecons": [
    {
      "id": "d1-l1",
      "titre": "Les fondamentaux : triade CIA, DAD et services AAA",
      "duree": 10,
      "slides": [
        {
          "type": "intro",
          "titre": "Bienvenue dans le Domaine 1",
          "points": [
            "Le domaine le plus lourd de l'examen : 16 %",
            "Le socle conceptuel de tous les autres domaines",
            "Objectif : penser comme un manager, pas comme un technicien"
          ],
          "narration": "Bienvenue dans le Domaine 1 du CISSP, la sécurité et la gestion des risques. C'est le domaine au poids le plus élevé de l'examen, seize pour cent, et surtout c'est la fondation de tout le reste. Retenez dès maintenant l'état d'esprit attendu : à l'examen, vous êtes un manager de la sécurité, pas un technicien. On commence par les concepts les plus fondamentaux de la profession."
        },
        {
          "type": "standard",
          "titre": "La triade CIA",
          "points": [
            "Confidentiality : l'information n'est divulguée qu'aux sujets autorisés",
            "Integrity : l'information reste exacte et n'est modifiée que par des sujets autorisés",
            "Availability : les sujets autorisés ont un accès fiable et rapide aux ressources"
          ],
          "narration": "La triade CIA est le cœur historique de la sécurité de l'information. La confidentialité garantit que les données ne sont pas divulguées à des personnes non autorisées, ce qui protège aussi la vie privée et les informations propriétaires. L'intégrité protège l'exactitude et la fiabilité des données, en empêchant les modifications non autorisées, y compris les erreurs commises par des personnes pourtant autorisées. Enfin, la disponibilité assure que les utilisateurs légitimes ont un accès rapide et ininterrompu aux ressources dont ils ont besoin.",
          "astuce": "💡 Conseil examen : la confidentialité n'est pas le secret. On protège aussi des données qui ne sont pas secrètes, comme des données personnelles."
        },
        {
          "type": "standard",
          "titre": "La triade inversée : DAD",
          "points": [
            "Disclosure : divulgation non autorisée, l'échec de la confidentialité",
            "Alteration : altération non autorisée, l'échec de l'intégrité",
            "Destruction (ou Denial) : destruction ou déni d'accès, l'échec de la disponibilité"
          ],
          "narration": "La triade DAD est simplement le miroir négatif de la triade CIA. Disclosure, c'est la divulgation, l'échec de la confidentialité. Alteration, c'est l'altération non autorisée, l'échec de l'intégrité. Et Destruction, parfois appelée Denial, c'est la destruction ou le déni d'accès, l'échec de la disponibilité. Quand vous analysez un incident, demandez-vous toujours lequel de ces trois échecs s'est produit : cela vous indique quel pilier de la sécurité a été touché."
        },
        {
          "type": "standard",
          "titre": "Les deux piliers complémentaires",
          "points": [
            "Authenticity : garantir qu'un message, une transmission ou un émetteur est légitime",
            "Nonrepudiation : l'auteur d'une action ne peut pas nier l'avoir réalisée",
            "Ensemble avec CIA : les 5 piliers de la sécurité de l'information"
          ],
          "narration": "ISC² étend aujourd'hui la triade à cinq piliers. L'authenticité garantit qu'un message ou un émetteur est bien légitime, qu'il est bien ce qu'il prétend être. La non-répudiation, ou nonrepudiation en anglais, garantit que l'auteur d'une action ne peut pas nier l'avoir accomplie. Elle repose sur l'identification, l'authentification, l'autorisation, la journalisation et l'audit. Pensez à une signature numérique : elle prouve à la fois qui a signé et empêche le signataire de le nier ensuite."
        },
        {
          "type": "schema",
          "titre": "Les services AAA : la chaîne du contrôle d'accès",
          "points": [
            "Cinq étapes qui s'enchaînent logiquement",
            "De l'affirmation d'identité jusqu'à la responsabilité individuelle"
          ],
          "schema": {
            "type": "flow",
            "items": [
              "Identification",
              "Authentication",
              "Authorization",
              "Auditing",
              "Accountability"
            ]
          },
          "narration": "Les services AAA forment une chaîne logique. D'abord l'identification : je prétends être quelqu'un, par exemple en tapant un nom d'utilisateur. Ensuite l'authentification : je prouve cette identité avec quelque chose que je sais, que je possède ou que je suis. Puis l'autorisation : le système détermine ce que j'ai le droit de faire. L'audit enregistre tout ce que je fais dans des journaux. Et enfin l'accountability, la responsabilité : grâce aux journaux et à une authentification solide, on peut attribuer chaque action à une personne et la tenir responsable."
        },
        {
          "type": "standard",
          "titre": "Assurer la disponibilité en pratique",
          "points": [
            "Redondance matérielle et logicielle, tolérance aux pannes",
            "Failover clustering, load balancing, résilience de site",
            "La disponibilité se conçoit, elle ne s'improvise pas"
          ],
          "narration": "La disponibilité mérite un mot de plus, car c'est souvent le pilier le plus visible pour le métier. Pour l'assurer, on met en œuvre des techniques comme la redondance des composants matériels et logiciels, le clustering avec basculement automatique, la répartition de charge, et la résilience entre plusieurs sites. Retenez que la haute disponibilité est un choix d'architecture décidé en amont, en fonction de la criticité du service pour l'entreprise."
        },
        {
          "type": "question",
          "titre": "Contrôle de connaissance",
          "points": [
            "Vérifions votre compréhension des piliers"
          ],
          "narration": "Petit contrôle de connaissance. Lisez bien la question et choisissez la meilleure réponse.",
          "q": "Un employé signe électroniquement un ordre de virement, puis affirme plus tard ne l'avoir jamais approuvé. Quel service de sécurité permet de prouver qu'il l'a bien fait ?",
          "choix": [
            "Confidentiality",
            "Availability",
            "Authorization",
            "Nonrepudiation"
          ],
          "reponse": 3,
          "explication": "La non-répudiation (Nonrepudiation) empêche l'auteur d'une action de la nier. Elle s'appuie sur l'identification, l'authentification et l'audit. La confidentialité protège contre la divulgation, la disponibilité contre l'interruption de service, et l'autorisation définit les droits, mais aucun de ces services ne prouve qu'une action a bien été réalisée par une personne donnée."
        },
        {
          "type": "standard",
          "titre": "L'état d'esprit CISSP",
          "points": [
            "La sécurité soutient le business, elle ne le bloque pas",
            "Les décisions se prennent en fonction du risque et de la valeur des actifs",
            "La vie humaine passe toujours en premier"
          ],
          "narration": "Avant de conclure cette première leçon, ancrons l'état d'esprit qui vous servira pour tout l'examen. La sécurité existe pour permettre au métier d'atteindre ses objectifs, jamais pour le bloquer. Chaque décision de sécurité se justifie par le risque et par la valeur des actifs protégés. Et quand une question mentionne la sécurité des personnes, la réponse est toujours la même : la vie humaine passe avant tout le reste, avant les données, avant les systèmes, avant les profits."
        },
        {
          "type": "resume",
          "titre": "Ce qu'il faut retenir",
          "points": [
            "CIA : Confidentiality, Integrity, Availability ; DAD est son miroir négatif",
            "5 piliers : CIA plus Authenticity et Nonrepudiation",
            "AAA : Identification, Authentication, Authorization, Auditing, Accountability",
            "Penser manager : risque, valeur des actifs, et les personnes d'abord"
          ],
          "narration": "Résumons. La triade CIA, confidentialité, intégrité, disponibilité, est le cœur de la sécurité, et la triade DAD en est le miroir négatif. On y ajoute l'authenticité et la non-répudiation pour former les cinq piliers. La chaîne AAA relie l'identification à la responsabilité individuelle en passant par l'authentification, l'autorisation et l'audit. Et surtout, adoptez dès maintenant la posture du manager : on raisonne en risques, en valeur d'actifs, et la sécurité des personnes prime toujours."
        }
      ]
    },
    {
      "id": "d1-l2",
      "titre": "Gouvernance : alignement, rôles, frameworks, Due Care et Due Diligence",
      "duree": 12,
      "slides": [
        {
          "type": "intro",
          "titre": "La gouvernance de la sécurité",
          "points": [
            "L'ensemble des politiques, rôles et processus qui pilotent les décisions de sécurité",
            "La sécurité doit s'aligner sur la stratégie, la mission et les objectifs de l'organisation",
            "La gouvernance vient d'en haut : le soutien de la direction est indispensable"
          ],
          "narration": "La gouvernance de la sécurité, c'est l'ensemble des politiques, des rôles et des processus utilisés pour prendre les décisions de sécurité dans une organisation. Son but est de garantir que la stratégie de sécurité s'aligne sur les objectifs métier, la mission et la vision de l'entreprise, et qu'elle est cohérente dans toute l'organisation. Retenez un principe d'or pour l'examen : la sécurité se pilote depuis le sommet. Sans le soutien visible de la direction générale, aucun programme de sécurité ne réussit."
        },
        {
          "type": "schema",
          "titre": "Les trois niveaux de planification",
          "points": [
            "Strategic Plan : long terme, environ cinq ans, inclut une analyse de risque",
            "Tactical Plan : moyen terme, un an ou moins",
            "Operational Plan : court terme, très détaillé"
          ],
          "schema": {
            "type": "pyramid",
            "items": [
              "Plan stratégique (≈5 ans)",
              "Plan tactique (≤1 an)",
              "Plans opérationnels (détaillés)"
            ]
          },
          "narration": "La planification de la sécurité se décline en trois niveaux. Le plan stratégique est un plan de long terme, utile environ cinq ans, qui définit la raison d'être de la sécurité dans l'organisation et qui doit inclure une évaluation des risques. Le plan tactique, d'un an ou moins, détaille comment atteindre les buts fixés par la stratégie. Et les plans opérationnels sont des plans de court terme, très détaillés et concrets, qui découlent des deux niveaux supérieurs. Les plans opérationnels soutiennent les plans tactiques, qui soutiennent eux-mêmes le plan stratégique."
        },
        {
          "type": "standard",
          "titre": "Rôles et responsabilités",
          "points": [
            "Senior Manager : responsable ultime de la sécurité, il approuve et assume",
            "Security Professional : responsabilité fonctionnelle, rédige et met en œuvre la politique",
            "Asset Owner : classifie l'information ; Custodian : applique la protection au quotidien",
            "Auditor : vérifie que la politique est correctement appliquée"
          ],
          "narration": "Les rôles sont un grand classique de l'examen. Le senior manager, la direction, porte la responsabilité ultime de la sécurité de l'organisation, c'est lui qui approuve et qui assume. Le professionnel de la sécurité a une responsabilité fonctionnelle : il rédige la politique de sécurité et la met en œuvre. Le propriétaire d'actif, l'asset owner, classifie l'information et décide de son niveau de protection. Le custodian, le dépositaire, applique techniquement au quotidien la protection définie. Et l'auditeur, indépendant, vérifie que tout cela est correctement appliqué. À l'examen, si on vous demande qui est responsable en dernier ressort, la réponse est toujours la direction."
        },
        {
          "type": "standard",
          "titre": "Frameworks de gouvernance et de contrôle, première partie",
          "points": [
            "ISO/IEC 27001 : standard international pour le système de management de la sécurité (ISMS)",
            "ISO 27002 : guide d'implémentation des contrôles ; 27017 et 27018 : cloud et PII dans le cloud",
            "NIST CSF 2.0 : six fonctions — Govern, Identify, Protect, Detect, Respond, Recover",
            "NIST SP 800-53 : catalogue de contrôles de sécurité et de vie privée"
          ],
          "narration": "Passons aux référentiels. ISO 27001 est le standard international le plus reconnu pour les systèmes de management de la sécurité de l'information, avec une approche fondée sur le risque et l'amélioration continue. ISO 27002 fournit le guide détaillé d'implémentation des contrôles, tandis que 27017 et 27018 couvrent le cloud et la protection des données personnelles dans le cloud. Côté américain, le NIST Cybersecurity Framework version deux s'articule autour de six fonctions : gouverner, identifier, protéger, détecter, répondre et récupérer. Et la publication spéciale 800-53 est un vaste catalogue de contrôles de sécurité et de vie privée."
        },
        {
          "type": "standard",
          "titre": "Frameworks, deuxième partie",
          "points": [
            "COBIT (ISACA) : gouvernance IT, souvent utilisé comme framework d'audit et de conformité",
            "SABSA : architecture de sécurité pilotée par le métier et le risque",
            "FedRAMP : autorisation des services cloud pour le gouvernement fédéral américain",
            "CIS Controls, ITIL, COSO : actions prioritaires, gestion de services IT, contrôle interne financier"
          ],
          "narration": "COBIT, créé par ISACA, aligne l'informatique sur la stratégie de l'entreprise et sert très souvent de référentiel d'audit et de conformité. SABSA est une méthodologie d'architecture de sécurité pilotée par les besoins métier et le risque. FedRAMP est le programme américain qui standardise l'évaluation et l'autorisation des services cloud pour les agences fédérales, avec une autorisation réutilisable d'une agence à l'autre. Retenez aussi les CIS Controls, une liste d'actions priorisées très pratiques, ITIL pour la gestion des services informatiques, et COSO, qui vise le contrôle interne et la prévention de la fraude financière."
        },
        {
          "type": "question",
          "titre": "Contrôle de connaissance",
          "points": [
            "Frameworks : à chacun son usage"
          ],
          "narration": "Vérifions que vous distinguez bien les référentiels entre eux.",
          "q": "Votre direction souhaite un référentiel d'audit reconnu pour évaluer la gouvernance de l'informatique et son alignement avec la stratégie de l'entreprise. Lequel est le PLUS adapté ?",
          "choix": [
            "FedRAMP",
            "COBIT",
            "ISO 27017",
            "PCI DSS"
          ],
          "reponse": 1,
          "explication": "COBIT, publié par ISACA, est le référentiel de gouvernance IT par excellence, couramment utilisé pour l'audit et la conformité et centré sur l'alignement entre l'IT et la stratégie métier. ISO 27017 concerne les contrôles de sécurité du cloud, FedRAMP l'autorisation des services cloud pour le gouvernement américain, et PCI DSS la protection des données de cartes de paiement."
        },
        {
          "type": "standard",
          "titre": "Due Diligence et Due Care",
          "points": [
            "Due Diligence : savoir ce qui doit être fait et le planifier — comprendre, évaluer, documenter",
            "Due Care : faire ce qui doit être fait — appliquer les contrôles et agir raisonnablement",
            "Formule mémo : Due Diligence pense, Due Care agit"
          ],
          "narration": "Voici deux termes incontournables. La Due Diligence, c'est savoir ce qui doit être fait et le planifier : collecter l'information, évaluer les risques, établir les politiques et les structures de sécurité. La Due Care, c'est la pratique quotidienne de ces activités : appliquer les contrôles, suivre les politiques, agir en personne raisonnable et prudente. Un moyen mnémotechnique efficace : la Due Diligence réfléchit et prépare, la Due Care agit. On dit aussi que la Due Care est la protection responsable des actifs, et que la Due Diligence permet de prouver cette Due Care.",
          "astuce": "💡 Conseil examen : Due Diligence = « Do Detect » (comprendre et planifier), Due Care = « Do Correct » (agir). Les managers qui négligent ces devoirs engagent leur responsabilité personnelle."
        },
        {
          "type": "standard",
          "titre": "Processus organisationnels : fusions, cessions, comités",
          "points": [
            "Acquisitions : environnement IT inconnu, la Due Diligence est essentielle",
            "Divestitures : comment séparer l'infrastructure, les identités et les accès",
            "Comités de gouvernance : un regard neuf sur les projets, architectures et incidents",
            "Évaluation de tiers : on-site assessment, revue documentaire, audit tiers"
          ],
          "narration": "La gouvernance doit aussi couvrir les grands événements de la vie de l'entreprise. Lors d'une acquisition, l'état de l'environnement informatique à intégrer est inconnu, donc la Due Diligence est cruciale. Lors d'une cession, il faut décider comment scinder l'infrastructure et que faire des identités et des accès. Les comités de gouvernance réunissent dirigeants et managers pour examiner les architectures, les projets et les incidents avec un regard neuf. Et pour évaluer un tiers avant une intégration, on combine visite sur site, échange et revue de documents, revue des processus et politiques, et audit par un tiers indépendant."
        },
        {
          "type": "question",
          "titre": "Contrôle de connaissance",
          "points": [
            "Due Care ou Due Diligence ?"
          ],
          "narration": "Encore une vérification, sur la distinction la plus testée du domaine.",
          "q": "Un RSSI effectue une évaluation des risques, documente une politique de sécurité et la diffuse dans l'organisation. De quoi s'agit-il ?",
          "choix": [
            "Due Diligence",
            "Separation of Duties",
            "Due Care",
            "Risk Acceptance"
          ],
          "reponse": 0,
          "explication": "Évaluer les risques, formaliser et documenter des politiques puis les diffuser, c'est savoir ce qui doit être fait et le planifier : c'est la Due Diligence. La Due Care serait ensuite l'application concrète et continue de ces politiques au quotidien. Risk Acceptance est un choix de traitement du risque, et la séparation des tâches est un contrôle contre la fraude."
        },
        {
          "type": "resume",
          "titre": "Ce qu'il faut retenir",
          "points": [
            "La gouvernance aligne la sécurité sur la mission et vient de la direction",
            "Trois plans : stratégique, tactique, opérationnel",
            "Rôles : senior manager responsable ultime, owner classifie, custodian applique, auditor vérifie",
            "Frameworks : ISO 27001, NIST CSF et 800-53, COBIT, SABSA, FedRAMP, CIS, ITIL, COSO",
            "Due Diligence planifie et prouve, Due Care agit"
          ],
          "narration": "En résumé, la gouvernance de la sécurité aligne la fonction sécurité sur la stratégie et la mission de l'organisation, et elle émane toujours de la direction. La planification se fait à trois niveaux, stratégique, tactique et opérationnel. Chaque rôle a sa responsabilité, du senior manager responsable en dernier ressort jusqu'à l'auditeur qui vérifie. Vous connaissez maintenant les grands référentiels, et vous savez distinguer la Due Diligence, qui pense et planifie, de la Due Care, qui agit."
        }
      ]
    },
    {
      "id": "d1-l3",
      "titre": "Lois, réglementation, conformité et types d'enquêtes",
      "duree": 15,
      "slides": [
        {
          "type": "intro",
          "titre": "Le paysage légal et réglementaire",
          "points": [
            "Un manager de la sécurité doit connaître ses obligations légales",
            "Lois pénales, civiles et administratives n'ont pas les mêmes règles",
            "La conformité peut venir d'une loi, d'un régulateur ou d'un contrat"
          ],
          "narration": "Dans cette leçon, nous entrons dans le paysage légal et réglementaire. Un professionnel CISSP n'est pas juriste, mais il doit connaître les grandes catégories de lois, les principales réglementations de protection des données, et les obligations de notification en cas de violation. Retenez d'emblée que la conformité peut découler d'une loi, d'un régulateur, d'un standard industriel ou d'un simple contrat, et que les exigences varient fortement selon les pays."
        },
        {
          "type": "standard",
          "titre": "Trois catégories de droit",
          "points": [
            "Criminal law : protège la société ; poursuites par l'État ; preuve au-delà du doute raisonnable",
            "Civil law : litiges entre personnes ou organisations ; prépondérance de la preuve ; dommages financiers",
            "Administrative law : règlements édictés par les agences gouvernementales pour leur fonctionnement"
          ],
          "narration": "Il existe trois grandes catégories de droit à connaître. Le droit pénal, criminal law, protège la société contre les actes qui violent ses principes fondamentaux ; les poursuites sont menées par l'État et la culpabilité doit être prouvée au-delà de tout doute raisonnable. Le droit civil encadre les relations entre personnes et organisations ; les deux parties s'affrontent devant le tribunal, il s'agit généralement de dommages financiers, et le standard de preuve est la simple prépondérance de la preuve. Enfin, le droit administratif regroupe les règlements que les agences gouvernementales édictent pour mener leurs activités quotidiennes."
        },
        {
          "type": "standard",
          "titre": "Le GDPR : la référence mondiale",
          "points": [
            "S'applique à toute organisation, où qu'elle soit, traitant des données de résidents de l'UE",
            "Principes : licéité, limitation des finalités, minimisation, exactitude, limitation de conservation, sécurité, accountability",
            "Notification de violation à l'autorité de contrôle sous 72 heures"
          ],
          "narration": "Le General Data Protection Regulation, le GDPR, a remplacé l'ancienne directive européenne pour créer une loi unique et harmonisée sur les données personnelles dans toute l'Union européenne. Point capital : il s'applique à toute organisation, où qu'elle soit dans le monde, dès lors qu'elle traite les données personnelles de résidents européens. Ses principes clés sont la licéité et la transparence, la limitation des finalités, la minimisation des données, l'exactitude, la limitation de la conservation, la sécurité et l'accountability. Et retenez ce chiffre pour l'examen : une violation de données doit être notifiée à l'autorité de contrôle compétente dans les soixante-douze heures.",
          "astuce": "💡 Conseil examen : GDPR = 72 heures pour notifier l'autorité. HIPAA/HITECH = 60 jours pour notifier les individus."
        },
        {
          "type": "standard",
          "titre": "Réglementations sectorielles américaines",
          "points": [
            "HIPAA / HITECH : données de santé (PHI) ; notification sous 60 jours, médias si plus de 500 personnes",
            "GLBA : banques, assurances, crédit ; politiques de confidentialité écrites obligatoires",
            "SOX : sociétés cotées ; la direction certifie personnellement les comptes ; sanctions pénales",
            "FISMA : programmes de sécurité obligatoires pour les agences fédérales et leurs sous-traitants"
          ],
          "narration": "Aux États-Unis, la protection des données est un patchwork de lois sectorielles. HIPAA impose des mesures de sécurité strictes aux hôpitaux, médecins et assureurs qui traitent des informations médicales, et la loi HITECH a renforcé ses exigences de notification : les personnes affectées doivent être prévenues sous soixante jours, et au-delà de cinq cents personnes touchées, il faut aussi notifier le ministère de la santé et les médias. GLBA couvre les banques et assurances. Sarbanes-Oxley, SOX, oblige les dirigeants de sociétés cotées à certifier personnellement l'exactitude des informations financières, sous peine de sanctions pénales. Et FISMA impose un programme de sécurité complet aux agences fédérales américaines et à leurs sous-traitants."
        },
        {
          "type": "standard",
          "titre": "PCI DSS : un standard contractuel, pas une loi",
          "points": [
            "Protège les données de cartes bancaires",
            "Imposé par contrat entre le commerçant et sa banque, pas par un législateur",
            "Exigences : chiffrement, contrôle d'accès strict, surveillance, tests, politiques de sécurité"
          ],
          "narration": "PCI DSS, le Payment Card Industry Data Security Standard, protège les données de cartes de crédit et de débit. Attention, c'est le piège classique : PCI DSS n'est pas une loi. C'est un standard industriel imposé par contrat entre le commerçant qui accepte les paiements par carte et la banque qui traite ses transactions. Ses exigences couvrent la sécurité du réseau, le chiffrement des données au repos et en transit, un contrôle d'accès strict avec des identifiants uniques, la surveillance et les tests réguliers, et le maintien de politiques de sécurité de l'information."
        },
        {
          "type": "standard",
          "titre": "Autres lois de vie privée dans le monde",
          "points": [
            "CCPA (Californie) : droits des consommateurs — savoir, supprimer, opt-out de la vente",
            "PIPEDA (Canada), PIPL (Chine), POPIA (Afrique du Sud) : équivalents nationaux du GDPR",
            "COPPA : consentement parental vérifiable pour les moins de 13 ans",
            "Privacy Shield invalidé (Schrems II), remplacé par l'EU-US Data Privacy Framework"
          ],
          "narration": "Le mouvement mondial de protection de la vie privée s'est largement inspiré du GDPR. En Californie, le CCPA donne aux consommateurs le droit de savoir quelles données sont collectées, de les faire supprimer, et de refuser leur vente. Le Canada a PIPEDA, la Chine a le PIPL, et l'Afrique du Sud a POPIA, toutes comparables au GDPR dans l'esprit. La loi américaine COPPA exige un consentement parental vérifiable avant de collecter des données d'enfants de moins de treize ans. Enfin, notez que le Privacy Shield encadrant les transferts de données entre l'Europe et les États-Unis a été invalidé par l'arrêt Schrems deux, puis remplacé en 2023 par l'EU-US Data Privacy Framework."
        },
        {
          "type": "standard",
          "titre": "Propriété intellectuelle et export",
          "points": [
            "Trademark : marques et logos ; Patent : inventions ; Copyright : œuvres originales",
            "Trade Secret : secret d'affaires protégé tant qu'il reste secret ; Economic Espionage Act",
            "ITAR : matériel militaire ; EAR : biens à double usage ; Wassenaar : accord multinational d'export",
            "DMCA : interdit le contournement des protections de copyright numériques"
          ],
          "narration": "La propriété intellectuelle se protège par quatre mécanismes principaux. La marque, trademark, protège les noms, slogans et logos. Le brevet, patent, protège les inventions nouvelles pour une durée limitée. Le copyright protège les œuvres originales comme les livres, la musique ou le code. Et le secret d'affaires, trade secret, protège les recettes internes de l'entreprise tant qu'elles restent secrètes, avec l'Economic Espionage Act qui punit leur vol. Côté export, retenez ITAR pour le matériel militaire américain, EAR pour les biens commerciaux à double usage, et l'arrangement de Wassenaar, un accord multinational volontaire de contrôle des exportations, notamment de cryptographie."
        },
        {
          "type": "question",
          "titre": "Contrôle de connaissance",
          "points": [
            "Lois et standards : ne pas confondre"
          ],
          "narration": "Voyons si le piège classique fonctionne sur vous.",
          "q": "Quelle affirmation décrit le MIEUX la nature de PCI DSS ?",
          "choix": [
            "Une directive gouvernementale volontaire sans sanction",
            "Un règlement européen applicable aux commerçants",
            "Un standard industriel imposé par obligation contractuelle",
            "Une loi fédérale américaine protégeant les données bancaires"
          ],
          "reponse": 2,
          "explication": "PCI DSS est un standard de l'industrie des cartes de paiement, imposé par le contrat qui lie le commerçant à sa banque : ce n'est ni une loi fédérale ni un règlement gouvernemental. Son non-respect entraîne des pénalités contractuelles, voire la perte de la capacité à accepter les cartes, ce qui est loin d'être sans conséquence."
        },
        {
          "type": "schema",
          "titre": "Les cinq types d'enquêtes",
          "points": [
            "Du moins formel au plus contraignant",
            "Le standard de preuve varie selon le type"
          ],
          "schema": {
            "type": "grid",
            "items": [
              "Administrative : interne, la moins formelle, cause racine",
              "Civile : prépondérance de la preuve, dommages financiers",
              "Criminelle : au-delà du doute raisonnable, forces de l'ordre",
              "Réglementaire : menée par un régulateur (SEC, FINRA), coopération obligatoire",
              "Standards industriels : conformité contractuelle (ex. audit PCI DSS)"
            ]
          },
          "narration": "Il existe cinq types d'enquêtes à connaître. L'enquête administrative est interne, souvent liée aux ressources humaines ou à des problèmes opérationnels ; c'est la moins formelle et elle cherche surtout la cause racine. L'enquête civile oppose deux parties pour des dommages généralement financiers, avec pour standard la prépondérance de la preuve. L'enquête criminelle implique les forces de l'ordre, et la culpabilité doit être établie au-delà de tout doute raisonnable, ce qui impose la collecte de preuves la plus rigoureuse. L'enquête réglementaire est menée par un régulateur comme la SEC, et l'organisation a l'obligation de coopérer, sans dissimuler ni détruire de preuves. Enfin, l'enquête de standard industriel vérifie la conformité contractuelle à un référentiel comme PCI DSS."
        },
        {
          "type": "question",
          "titre": "Contrôle de connaissance",
          "points": [
            "Standards de preuve"
          ],
          "narration": "Une dernière question sur les enquêtes avant le résumé.",
          "q": "Quel standard de preuve s'applique dans une affaire civile ?",
          "choix": [
            "Prépondérance de la preuve",
            "Au-delà de tout doute raisonnable",
            "Preuve irréfutable et directe",
            "Intime conviction du régulateur"
          ],
          "reponse": 0,
          "explication": "En matière civile, il suffit de démontrer la prépondérance de la preuve, c'est-à-dire qu'il est plus probable qu'improbable que les faits reprochés soient vrais. Le standard « au-delà de tout doute raisonnable » est réservé aux affaires criminelles, où l'enjeu, la liberté de la personne, justifie une exigence bien plus élevée."
        },
        {
          "type": "standard",
          "titre": "Cybercrime et notification de violation",
          "points": [
            "Trois familles de cybercriminalité : l'ordinateur CIBLE (accès non autorisé, malware, DoS), l'ordinateur OUTIL (fraude, usurpation d'identité), les infractions de CONTENU",
            "Convention de Budapest (2001) : premier traité international contre la cybercriminalité, harmonisation et coopération entre États",
            "GDPR : autorité de contrôle notifiée sous 72 h ; personnes concernées « sans retard injustifié » si risque élevé",
            "USA : pas de loi fédérale unique — chaque État a sa loi de notification (pionnière : Californie, SB 1386)",
            "NIS2 (UE) : alerte précoce 24 h, notification 72 h, rapport final sous 1 mois pour les entités essentielles et importantes"
          ],
          "narration": "Élargissons maintenant le regard sur la cybercriminalité et les obligations de notification. On classe généralement les cybercrimes en trois familles : les attaques où l'ordinateur est la cible, comme l'accès non autorisé, les malwares ou le déni de service ; celles où il est l'outil de l'infraction, comme la fraude ou l'usurpation d'identité ; et les infractions de contenu, comme la diffusion de matériels illicites. La Convention de Budapest de deux mille un est le premier traité international qui harmonise ces incriminations et organise la coopération entre États. Côté notification, retenez bien les délais par juridiction : le GDPR impose soixante-douze heures vers l'autorité de contrôle, et une information des personnes concernées sans retard injustifié quand le risque pour leurs droits est élevé. La directive européenne NIS2 exige une alerte précoce en vingt-quatre heures, une notification complète en soixante-douze heures, puis un rapport final sous un mois. Et aux États-Unis, il n'existe pas de loi fédérale unique : chaque État possède sa propre loi de notification depuis la loi pionnière de la Californie.",
          "astuce": "💡 Conseil examen : mémorisez la grille des délais — GDPR : 72 h vers l'autorité. NIS2 : 24 h, puis 72 h, puis 1 mois. HIPAA/HITECH : 60 jours vers les individus. USA : une loi par État, pas de délai fédéral unique."
        },
        {
          "type": "standard",
          "titre": "Transferts transfrontières de données",
          "points": [
            "Principe GDPR : transfert hors UE interdit par défaut, sauf garantie appropriée",
            "Adequacy decision : la Commission européenne reconnaît une protection équivalente dans le pays tiers — transfert libre",
            "SCC (Standard Contractual Clauses) : clauses types approuvées par la Commission, insérées dans les contrats avec le destinataire",
            "BCR (Binding Corporate Rules) : règles internes contraignantes pour les transferts intra-groupe, approuvées par une autorité de contrôle",
            "Schrems II (2020) : Privacy Shield invalidé ; même avec des SCC, évaluer le droit du pays de destination et ajouter des mesures supplémentaires ; relais par l'EU-US Data Privacy Framework (2023)"
          ],
          "narration": "Le GDPR interdit par défaut le transfert de données personnelles hors de l'Union européenne, sauf garanties appropriées. Première voie : la décision d'adéquation, l'adequacy decision, par laquelle la Commission européenne reconnaît qu'un pays tiers offre une protection substantiellement équivalente, ce qui autorise les transferts librement. Deuxième voie : les Standard Contractual Clauses, des clauses contractuelles types approuvées par la Commission, que l'on insère dans les contrats avec les destinataires des données. Troisième voie : les Binding Corporate Rules, des règles d'entreprise contraignantes qui encadrent les transferts au sein d'un même groupe multinational, après approbation d'une autorité de contrôle. Enfin, l'arrêt Schrems deux de deux mille vingt a invalidé le Privacy Shield et exige, même en présence de SCC, d'évaluer la législation du pays de destination et d'ajouter des mesures supplémentaires si nécessaire. L'EU-US Data Privacy Framework a pris le relais en deux mille vingt-trois pour les transferts vers les États-Unis.",
          "astuce": "💡 Conseil examen : adequacy = transfert libre ; SCC = clauses types dans le contrat ; BCR = intra-groupe multinational. Schrems II impose une évaluation d'impact du transfert même avec des SCC."
        },
        {
          "type": "standard",
          "titre": "Licences logicielles : types, conformité et audits d'éditeurs",
          "points": [
            "Licence commerciale : l'EULA est un contrat exécutoire — modèles perpétuel ou abonnement, par utilisateur, par poste ou par processeur",
            "Open source : licences permissives (MIT, Apache) vs copyleft (GPL — le code dérivé doit être partagé sous la même licence)",
            "Freeware : gratuit mais pas libre ; Shareware : essai avant achat",
            "Conformité : Software Asset Management (SAM) — inventorier les installations et les rapprocher des droits acquis",
            "Audits d'éditeurs : clause d'audit contractuelle ; le sur-déploiement est une violation de contrat ET de copyright"
          ],
          "narration": "Le volet licences logicielles complète la propriété intellectuelle. Une licence commerciale, matérialisée par l'EULA, l'accord de licence utilisateur final, est un contrat exécutoire : il précise combien de copies vous pouvez installer et selon quel modèle, perpétuel ou par abonnement, par utilisateur, par poste ou par processeur. Attention, open source ne veut pas dire sans obligations : les licences permissives comme MIT ou Apache laissent une grande liberté, mais les licences copyleft comme la GPL imposent de redistribuer le code dérivé sous la même licence, ce qui peut être incompatible avec un produit propriétaire. Le freeware est gratuit sans être libre, et le shareware s'essaie avant de s'acheter. Côté conformité, un programme de Software Asset Management inventorie les installations et les rapproche des droits réellement acquis, car les contrats des grands éditeurs contiennent presque toujours une clause d'audit : un sur-déploiement découvert lors d'un audit d'éditeur expose l'organisation à des pénalités contractuelles, à un rappel de redevances, et à une violation de copyright.",
          "astuce": "💡 Conseil examen : utiliser plus de copies que la licence n'en accorde viole à la fois le contrat et le copyright. La parade de gouvernance est le SAM : inventorier, rapprocher, régulariser — avant que l'éditeur n'audite."
        },
        {
          "type": "resume",
          "titre": "Ce qu'il faut retenir",
          "points": [
            "Criminal, civil, administrative : trois catégories de droit, trois logiques",
            "GDPR : portée mondiale, notification 72 h ; HIPAA/HITECH : PHI, 60 jours",
            "PCI DSS est contractuel, SOX vise les sociétés cotées, GLBA la finance, FISMA le fédéral",
            "Cinq types d'enquêtes avec des standards de preuve différents",
            "Cybercrime : cible, outil ou contenu ; notification selon la juridiction (GDPR 72 h, NIS2 24 h/72 h/1 mois, lois par État aux USA)",
            "Transferts hors UE : adequacy decision, SCC, BCR — et l'impact de Schrems II",
            "Licences logicielles : EULA contractuel, permissive vs copyleft, conformité par le SAM face aux audits d'éditeurs"
          ],
          "narration": "Résumons cette leçon dense. Trois catégories de droit : pénal, civil et administratif, chacune avec sa logique et son standard de preuve. Le GDPR s'applique mondialement dès qu'on traite des données de résidents européens, avec notification sous soixante-douze heures. HIPAA et HITECH protègent les données de santé avec un délai de soixante jours. PCI DSS est un standard contractuel, SOX responsabilise les dirigeants des sociétés cotées, GLBA encadre la finance et FISMA le secteur fédéral américain. Sachez reconnaître les cinq types d'enquêtes et leurs niveaux d'exigence respectifs. Enfin, vous savez désormais situer les grandes familles de cybercriminalité, les obligations de notification propres à chaque juridiction, et les mécanismes de transfert transfrontière de données : décisions d'adéquation, clauses contractuelles types et règles d'entreprise contraignantes, dans le monde d'après Schrems deux. Enfin, côté licences logicielles, retenez que l'EULA est un contrat, que le copyleft impose de partager le code dérivé, et que la conformité se pilote par un programme de Software Asset Management face aux audits d'éditeurs."
        }
      ]
    },
    {
      "id": "d1-l4",
      "titre": "Éthique ISC², politiques et sécurité du personnel",
      "duree": 11,
      "slides": [
        {
          "type": "intro",
          "titre": "Éthique et cadre documentaire",
          "points": [
            "Le Code of Ethics ISC² est exigible à l'examen, canons dans l'ordre",
            "La documentation de sécurité forme une hiérarchie : de la politique à la procédure",
            "L'humain est le maillon le plus faible… et un atout quand il est formé"
          ],
          "narration": "Cette leçon regroupe trois sujets très liés à la dimension humaine et organisationnelle : le code d'éthique ISC², la hiérarchie documentaire de la sécurité, et la sécurité du personnel. Le code d'éthique est exigible tel quel à l'examen, dans l'ordre de ses canons. Et gardez en tête ce paradoxe : l'humain est souvent décrit comme le maillon le plus faible de la sécurité, mais bien formé et motivé, il devient l'un de ses meilleurs atouts."
        },
        {
          "type": "standard",
          "titre": "Le Code of Ethics ISC² : quatre canons, dans l'ordre",
          "points": [
            "1. Protect society, the common good, necessary public trust and confidence, and the infrastructure",
            "2. Act honorably, honestly, justly, responsibly, and legally",
            "3. Provide diligent and competent service to principals",
            "4. Advance and protect the profession"
          ],
          "narration": "Le code d'éthique ISC² comporte quatre canons, et leur ordre est significatif : en cas de conflit, le premier prime sur le deuxième, et ainsi de suite. Premier canon : protéger la société, le bien commun, la confiance du public et les infrastructures. Deuxième : agir de façon honorable, honnête, juste, responsable et légale. Troisième : fournir un service diligent et compétent à ses mandants, ses employeurs et clients. Quatrième : faire progresser et protéger la profession. Autrement dit, la société passe avant la loi, la loi avant le client, et le client avant la profession.",
          "astuce": "💡 Conseil examen : l'ordre des canons est une réponse en soi. Société > légalité > mandants > profession."
        },
        {
          "type": "standard",
          "titre": "Éthique : détails qui tombent à l'examen",
          "points": [
            "Tout membre du public peut porter plainte au titre des canons I et II",
            "Canon III : seul un employeur ou un client sous contrat peut porter plainte",
            "En cas de lois contradictoires entre juridictions, priorité à la juridiction locale où vous travaillez",
            "RFC 1087 : gaspiller des ressources, compromettre la vie privée ou l'intégrité est « unethical »"
          ],
          "narration": "Quelques détails d'éthique qui tombent régulièrement. N'importe quel membre du public peut déposer une plainte au titre des deux premiers canons, mais pour le troisième, seul un employeur ou une personne liée par contrat le peut. Si vous travaillez sur un projet où des lois de plusieurs pays entrent en conflit, priorisez la juridiction locale depuis laquelle vous fournissez le service. Enfin, la RFC 1087 sur l'éthique d'Internet qualifie de non éthique tout acte qui cherche un accès non autorisé, perturbe l'usage prévu d'Internet, gaspille des ressources, détruit l'intégrité d'informations ou compromet la vie privée des utilisateurs. Et bien sûr, vous devez aussi soutenir et promouvoir le code d'éthique propre à votre organisation."
        },
        {
          "type": "standard",
          "titre": "Le code d'éthique de l'organisation",
          "points": [
            "Deux codes coexistent : le code ISC² s'impose aux certifiés, le code interne s'impose à TOUS les employés",
            "Contenu typique : valeurs de l'entreprise, conflits d'intérêts, cadeaux et invitations, usage des ressources, canal de signalement",
            "Le professionnel doit soutenir et promouvoir le code de son organisation, pas seulement celui d'ISC²",
            "Mise en œuvre : intégré aux politiques, présenté dès l'onboarding, rappelé en formation, appliqué par la direction et les RH"
          ],
          "narration": "Ne confondez pas le code d'éthique ISC² avec le code d'éthique de l'organisation. Le premier s'impose aux professionnels certifiés, et une violation peut coûter la certification. Le second est un document interne qui s'applique à tous les employés, certifiés ou non : il formalise les valeurs de l'entreprise, encadre les conflits d'intérêts, les cadeaux et l'usage des ressources, et prévoit un canal de signalement des manquements. En tant que professionnel de la sécurité, vous avez le devoir de soutenir et de promouvoir ce code interne : le faire vivre dans les politiques, le présenter dès l'intégration des nouveaux arrivants, et montrer l'exemple. Une pratique peut être parfaitement légale tout en violant le code de l'organisation ; dans ce cas, le bon réflexe est de la signaler par le canal interne prévu, pas de l'ignorer sous prétexte que la loi est respectée.",
          "astuce": "💡 Conseil examen : distinguez la portée — code ISC² : les certifiés, plaintes instruites par ISC² au titre des canons ; code organisationnel : tous les employés, appliqué par la direction et les RH. Légal ne veut pas dire éthique."
        },
        {
          "type": "schema",
          "titre": "La hiérarchie documentaire",
          "points": [
            "De l'obligatoire et stratégique au détaillé et opérationnel",
            "Policies et standards sont obligatoires, guidelines sont recommandées"
          ],
          "schema": {
            "type": "pyramid",
            "items": [
              "Policies (obligatoires, stratégiques)",
              "Standards & Baselines (obligatoires, précis)",
              "Guidelines (recommandées, flexibles)",
              "Procedures / SOP (pas-à-pas détaillés)"
            ]
          },
          "narration": "La documentation de sécurité forme une hiérarchie. Au sommet, les politiques : des documents de haut niveau rédigés et publiés par la direction, qui définissent la portée et les objectifs stratégiques de la sécurité. Elles sont obligatoires mais ne disent pas comment faire. En dessous, les standards imposent des exigences précises et uniformes, par exemple l'usage homogène d'un matériel ou d'une technologie ; les baselines définissent le niveau minimal de sécurité que chaque système doit atteindre. Les guidelines, elles, sont des recommandations flexibles, non obligatoires. Et tout en bas, les procédures, ou SOP, décrivent pas à pas les actions exactes pour mettre en œuvre un contrôle. Retenez : politique et standard obligatoires, guideline recommandée, procédure détaillée."
        },
        {
          "type": "question",
          "titre": "Contrôle de connaissance",
          "points": [
            "Politique, standard, baseline, guideline ou procédure ?"
          ],
          "narration": "Testons cette hiérarchie documentaire avec un cas concret.",
          "q": "Un document définit le niveau minimal de configuration sécurisée que tout serveur de l'organisation doit respecter avant sa mise en production. Comment l'appelle-t-on ?",
          "choix": [
            "Guideline",
            "Policy",
            "Baseline",
            "Procedure"
          ],
          "reponse": 2,
          "explication": "Une baseline définit le niveau minimal de sécurité que chaque système doit atteindre ; elle est généralement spécifique à un type de système, comme une configuration standard de serveur. Une policy est stratégique et de haut niveau, une guideline est une simple recommandation, et une procedure décrit les étapes détaillées pour accomplir une tâche."
        },
        {
          "type": "standard",
          "titre": "Sécurité du personnel : le recrutement",
          "points": [
            "Candidate screening : vérification du casier, des diplômes, des références et de l'historique d'emploi",
            "Employment agreement : plus il est précis, moins l'organisation prend de risques juridiques",
            "NDA pour la confidentialité, AUP pour l'usage acceptable, non-compete selon les juridictions"
          ],
          "narration": "La sécurité du personnel commence avant même l'embauche. Le screening des candidats comprend la vérification du casier judiciaire, de l'historique d'emploi, des diplômes et certifications, et la prise de contact avec les références. À l'embauche, le contrat de travail précise les fonctions, les attentes et les conditions de fin de contrat ; plus il est détaillé, plus il protège l'organisation, notamment contre les litiges de licenciement abusif. On y adjoint des documents comme le NDA, l'accord de non-divulgation qui protège les informations confidentielles même après le départ, et l'AUP, la politique d'usage acceptable qui définit ce qui est permis ou non avec les ressources de l'entreprise."
        },
        {
          "type": "standard",
          "titre": "Onboarding, transferts et offboarding",
          "points": [
            "Onboarding : intégration documentée, formation à la sécurité dès l'arrivée",
            "Transfert : réajuster les accès pour maintenir le Least Privilege",
            "Offboarding : désactiver les accès dans l'IAM, récupérer les actifs, escorter la personne",
            "Prestataires et fournisseurs : SLA, revues de processus, contrôles d'accès dédiés"
          ],
          "narration": "Le cycle de vie de l'employé continue avec l'onboarding : un processus documenté qui intègre le nouvel arrivant rapidement et de façon cohérente, avec une formation de sensibilisation dès l'arrivée. Lors d'un transfert interne, il faut réajuster les droits d'accès pour respecter le principe du moindre privilège et éviter l'accumulation de droits. Lors du départ, l'offboarding retire l'identité du système de gestion des identités, désactive les comptes, récupère les équipements, et la personne est escortée hors des locaux, que le départ soit cordial ou non. N'oubliez pas les tiers : les prestataires, consultants et fournisseurs doivent être couverts par des accords de niveau de service et des contrôles adaptés."
        },
        {
          "type": "question",
          "titre": "Contrôle de connaissance",
          "points": [
            "Réagir à un départ"
          ],
          "narration": "Une mise en situation de manager sur l'offboarding.",
          "q": "Un administrateur système est licencié avec effet immédiat. Que devriez-vous faire EN PREMIER ?",
          "choix": [
            "Organiser un entretien de sortie détaillé",
            "Récupérer son badge et son ordinateur portable",
            "Informer son équipe de son départ",
            "Désactiver ses comptes et ses accès"
          ],
          "reponse": 3,
          "explication": "Pour un compte à privilèges élevés et un départ non choisi, la priorité absolue est de désactiver les accès logiques avant ou au moment de l'annonce, afin d'empêcher toute action malveillante. L'entretien de sortie, la récupération du matériel et la communication interne suivent, mais ne protègent pas les systèmes si les accès restent ouverts."
        },
        {
          "type": "resume",
          "titre": "Ce qu'il faut retenir",
          "points": [
            "Quatre canons ISC² dans l'ordre : société, honneur et légalité, mandants, profession",
            "Hiérarchie : Policy > Standard/Baseline > Guideline > Procedure",
            "Screening avant l'embauche, NDA et AUP pendant, offboarding rigoureux au départ",
            "Un départ à risque : désactiver les accès d'abord"
          ],
          "narration": "Récapitulons. Le code d'éthique ISC² comporte quatre canons ordonnés : protéger la société, agir honorablement et légalement, servir ses mandants avec compétence, et faire progresser la profession. La documentation de sécurité va de la politique stratégique et obligatoire jusqu'à la procédure détaillée, en passant par les standards, les baselines et les guidelines. Et la sécurité du personnel couvre tout le cycle de vie : screening à l'embauche, accords comme le NDA et l'AUP, ajustement des droits lors des transferts, et offboarding rigoureux où la désactivation des accès prime."
        }
      ]
    },
    {
      "id": "d1-l5",
      "titre": "Gestion des risques : analyse quantitative, qualitative et traitement",
      "duree": 14,
      "slides": [
        {
          "type": "intro",
          "titre": "Le cœur du métier : gérer le risque",
          "points": [
            "On ne peut jamais éliminer 100 % du risque",
            "La direction décide quels risques sont acceptables",
            "Vocabulaire précis exigé : threat, vulnerability, exposure, risk, safeguard"
          ],
          "narration": "Nous voici au cœur du Domaine 1 : la gestion des risques. Le principe de départ est simple : on ne peut jamais éliminer cent pour cent du risque, ni dans l'informatique, ni ailleurs. Le rôle du management est donc de décider quels risques sont acceptables et lesquels ne le sont pas, en équilibrant le coût des protections et la valeur des actifs. Pour y parvenir, il faut d'abord maîtriser un vocabulaire très précis, que l'examen teste sans pitié."
        },
        {
          "type": "standard",
          "titre": "Le vocabulaire du risque",
          "points": [
            "Threat : événement potentiel pouvant causer un dommage ; Threat Agent : celui qui l'exploite",
            "Vulnerability : faiblesse d'un actif ou absence de protection",
            "Exposure : susceptibilité à une perte ; Risk : probabilité qu'une menace exploite une vulnérabilité",
            "Safeguard / Countermeasure : contrôle qui réduit le risque"
          ],
          "narration": "Posons les définitions. Une menace, threat, est tout événement potentiel pouvant causer un résultat indésirable pour un actif ; l'agent de menace est celui qui l'exploite intentionnellement, et le threat vector est le chemin qu'emprunte l'attaque. Une vulnérabilité est une faiblesse dans un actif, ou l'absence d'une protection. L'exposition est le fait d'être susceptible de subir une perte. Et le risque, c'est la probabilité qu'une menace exploite une vulnérabilité, combinée à la gravité du dommage. La chaîne logique à retenir : les menaces exploitent les vulnérabilités, ce qui crée une exposition ; l'exposition est un risque, et le risque est réduit par des safeguards, qui protègent les actifs."
        },
        {
          "type": "standard",
          "titre": "Appetite, tolerance, capacity",
          "points": [
            "Risk Appetite : la quantité totale de risque que l'organisation est prête à accepter",
            "Risk Tolerance : la variation acceptable autour d'un objectif spécifique",
            "Risk Capacity : le maximum de risque que l'organisation peut absorber"
          ],
          "narration": "Trois notions proches et très testées. Le risk appetite, l'appétit pour le risque, est la quantité totale de risque que l'organisation est prête à accepter pour poursuivre sa mission. La risk tolerance est plus fine : c'est la variation acceptable des résultats autour d'un objectif donné. Et la risk capacity est le plafond absolu, le maximum de risque que l'organisation peut supporter sans mettre en péril son existence. L'appétit doit évidemment rester en dessous de la capacité."
        },
        {
          "type": "standard",
          "titre": "Analyse quantitative : les formules à connaître par cœur",
          "points": [
            "SLE = AV × EF : coût d'une seule réalisation du risque",
            "ALE = SLE × ARO : coût annuel attendu",
            "Valeur du safeguard = (ALE avant − ALE après) − coût annuel du safeguard (ACS)"
          ],
          "narration": "L'analyse quantitative attribue des valeurs monétaires réelles au risque. La Single Loss Expectancy, SLE, est le coût d'une seule réalisation du risque : elle vaut la valeur de l'actif, Asset Value, multipliée par l'Exposure Factor, le pourcentage de l'actif perdu si la menace se réalise. L'Annualized Rate of Occurrence, ARO, est le nombre de fois où l'on s'attend à ce que le risque se réalise par an. Et l'Annualized Loss Expectancy, ALE, est la perte annuelle attendue : SLE multiplié par ARO. Pour juger un safeguard, on calcule l'ALE avant, moins l'ALE après, moins le coût annuel du safeguard : si le résultat est positif, l'investissement est justifié.",
          "astuce": "💡 Conseil examen : entraînez-vous aux calculs. Exemple : actif de 200 000 €, EF de 25 %, ARO de 0,5 → SLE = 50 000 €, ALE = 25 000 €."
        },
        {
          "type": "standard",
          "titre": "Analyse qualitative et approche hybride",
          "points": [
            "Qualitative : valeurs subjectives, scénarios, jugement d'experts, échelles haut/moyen/bas",
            "Techniques : Delphi (consensus anonyme), brainstorming, storyboards, questionnaires",
            "En pratique, la plupart des organisations combinent les deux approches"
          ],
          "narration": "L'analyse qualitative, elle, s'appuie sur des valeurs subjectives et intangibles : des scénarios, l'intuition et l'expérience des experts, des classements du type élevé, moyen, faible. La technique Delphi est le grand classique : un système de retours anonymes en plusieurs tours qui permet d'atteindre un consensus sans que la hiérarchie ou la personnalité des participants ne biaise le résultat. Dans la vraie vie, la plupart des organisations utilisent une approche hybride : le qualitatif pour prioriser rapidement un grand nombre de risques, et le quantitatif pour justifier financièrement les décisions importantes."
        },
        {
          "type": "question",
          "titre": "Contrôle de connaissance",
          "points": [
            "Un calcul quantitatif"
          ],
          "narration": "À vous de calculer. Prenez le temps de poser les formules.",
          "q": "Un data center vaut 2 000 000 €. Une inondation détruirait 30 % de sa valeur et devrait survenir une fois tous les 10 ans. Quel est l'ALE ?",
          "choix": [
            "200 000 €",
            "60 000 €",
            "600 000 €",
            "6 000 €"
          ],
          "reponse": 1,
          "explication": "SLE = AV × EF = 2 000 000 × 0,30 = 600 000 €. ARO = 1/10 = 0,1. ALE = SLE × ARO = 600 000 × 0,1 = 60 000 €. L'erreur classique est de s'arrêter au SLE (600 000 €) ou de se tromper dans la conversion de la fréquence en ARO."
        },
        {
          "type": "schema",
          "titre": "Les réponses au risque",
          "points": [
            "Quatre réponses principales, plus la dissuasion",
            "Le rejet du risque n'est jamais acceptable"
          ],
          "schema": {
            "type": "grid",
            "items": [
              "Mitigation : réduire par des contrôles",
              "Transference / Assignment : transférer (assurance, externalisation)",
              "Avoidance : éviter en renonçant à l'activité",
              "Acceptance : accepter après analyse coût/bénéfice",
              "Deterrence : dissuader les attaquants potentiels",
              "Rejection : ignorer le risque — jamais acceptable"
            ]
          },
          "narration": "Face à un risque identifié, on formule une réponse. La mitigation réduit le risque en déployant des contrôles et des contre-mesures. Le transfert confie l'impact financier à un tiers, typiquement une assurance cyber. L'évitement consiste à renoncer à l'activité parce que le risque dépasse le bénéfice attendu. L'acceptation est une décision documentée du management, après analyse coût-bénéfice, d'assumer les conséquences si le risque se réalise. On mentionne aussi la dissuasion, comme les caméras et les bannières d'avertissement. En revanche, rejeter ou ignorer un risque en espérant qu'il ne se réalisera pas n'est jamais une réponse acceptable : c'est une violation de la Due Care."
        },
        {
          "type": "standard",
          "titre": "Risque inhérent, résiduel et total",
          "points": [
            "Inherent Risk : le risque naturel avant tout traitement",
            "Residual Risk : le risque qui reste après les contrôles — c'est lui que la direction accepte",
            "Total Risk = threats × vulnerabilities × asset value ; Residual = Total − Controls Gap"
          ],
          "narration": "Encore un peu de vocabulaire. Le risque inhérent est le niveau de risque naturel, avant tout effort de gestion : c'est ce que révèle l'évaluation initiale. Le risque résiduel est ce qui reste après la mise en place des contrôles ; c'est ce risque-là que la direction choisit d'accepter. Le risque total est ce que l'organisation subirait sans aucune protection, et se conceptualise comme le produit des menaces, des vulnérabilités et de la valeur des actifs. Le controls gap est la part de risque éliminée par les contrôles, si bien que le risque résiduel est égal au risque total moins le controls gap."
        },
        {
          "type": "standard",
          "titre": "Catégories et types de contrôles",
          "points": [
            "Trois catégories : Administrative, Technical/Logical, Physical",
            "Types : Preventive, Deterrent, Detective, Corrective, Recovery, Directive, Compensating",
            "Défense en profondeur : les trois catégories se superposent"
          ],
          "narration": "Les contrôles se classent selon deux axes. Par catégorie d'implémentation, on distingue les contrôles administratifs, comme les politiques et procédures, les contrôles techniques ou logiques, comme les pare-feu et le chiffrement, et les contrôles physiques, comme les clôtures et les gardiens. Par fonction, un contrôle préventif empêche l'incident, un contrôle dissuasif décourage l'attaquant, un contrôle détectif découvre l'incident après coup, un contrôle correctif ramène le système à la normale, un contrôle de récupération répare des dégâts plus importants, un contrôle directif oriente les comportements, et un contrôle compensatoire remplace ou renforce un contrôle principal. En défense en profondeur, ces couches se superposent, en commençant par les politiques."
        },
        {
          "type": "question",
          "titre": "Contrôle de connaissance",
          "points": [
            "Classer un contrôle"
          ],
          "narration": "Sauriez-vous classer ce contrôle sur les deux axes ?",
          "q": "Une caméra de surveillance visible à l'entrée d'un bâtiment est un contrôle de quel type principal ?",
          "choix": [
            "Administratif et directif",
            "Physique et préventif",
            "Technique et détectif",
            "Physique et dissuasif"
          ],
          "reponse": 3,
          "explication": "Une caméra visible est un contrôle physique dont la fonction première, quand elle est bien en évidence, est la dissuasion : convaincre l'attaquant potentiel de renoncer. Elle a aussi une fonction détective via l'enregistrement, mais elle n'empêche physiquement rien, donc elle n'est pas préventive au sens strict."
        },
        {
          "type": "standard",
          "titre": "Piloter dans la durée : registre, RMF, maturité",
          "points": [
            "Risk Register : inventaire vivant des risques, réponses et suivis",
            "NIST RMF, 7 étapes : Prepare, Categorize, Select, Implement, Assess, Authorize, Monitor",
            "Risk Maturity Model : Ad hoc → Preliminary → Defined → Integrated → Optimized",
            "SCA et monitoring continu : vérifier que les contrôles fonctionnent réellement"
          ],
          "narration": "La gestion des risques est un cycle, pas un projet ponctuel. Le risk register, ou registre des risques, inventorie tous les risques identifiés, leur criticité, les réponses prescrites et l'avancement du traitement. Le Risk Management Framework du NIST structure ce cycle en sept étapes : préparer, catégoriser le système, sélectionner les contrôles, les implémenter, les évaluer, autoriser le système, puis surveiller en continu. La maturité du dispositif s'évalue avec un Risk Maturity Model en cinq niveaux, d'ad hoc jusqu'à optimized. Enfin, les Security Control Assessments et le monitoring continu vérifient régulièrement que les contrôles sont bien en place et réellement efficaces. Citons aussi d'autres cadres de risque : ISO 31000, FAIR, OCTAVE ou le modèle TARA."
        },
        {
          "type": "standard",
          "titre": "Évaluer les contrôles : SCA, PIA et DPIA",
          "points": [
            "Security Control Assessment (SCA) : vérifier que les contrôles sont en place, correctement implémentés et produisent l'effet attendu (démarche NIST 800-53A)",
            "Le référentiel exige d'évaluer les contrôles de sécurité ET de vie privée",
            "PIA (Privacy Impact Assessment) : analyse d'impact sur la vie privée d'un projet ou d'un système, terme générique et exigence du secteur public américain",
            "DPIA : version GDPR (article 35), OBLIGATOIRE avant tout traitement à risque élevé — profilage à grande échelle, données sensibles, surveillance systématique",
            "Risque résiduel élevé malgré les mesures prévues : consultation préalable de l'autorité de contrôle"
          ],
          "narration": "Sélectionner et implémenter des contrôles ne suffit pas : il faut prouver qu'ils fonctionnent. C'est l'objet du Security Control Assessment, le SCA : une évaluation formelle qui vérifie que chaque contrôle est bien en place, correctement implémenté, et qu'il produit réellement l'effet attendu, selon la démarche décrite par le NIST. Mais attention, le référentiel officiel parle des contrôles de sécurité et de vie privée. Côté vie privée, l'outil est l'analyse d'impact : le Privacy Impact Assessment, ou PIA, évalue les effets d'un projet sur les données personnelles avant son lancement. Sa déclinaison européenne, la Data Protection Impact Assessment, la DPIA, est rendue obligatoire par l'article trente-cinq du GDPR avant tout traitement susceptible d'engendrer un risque élevé pour les droits des personnes : profilage à grande échelle, données sensibles, ou surveillance systématique d'une zone accessible au public. Elle se mène avant le traitement, avec le concours du délégué à la protection des données. Et si le risque résiduel reste élevé malgré les mesures envisagées, l'organisation doit consulter l'autorité de contrôle avant de démarrer.",
          "astuce": "💡 Conseil examen : la DPIA se mène AVANT le début du traitement, avec le DPO. Scénario de profilage à grande échelle de résidents européens = réponse DPIA, pas pentest ni SCA. Le SCA vérifie les contrôles ; la PIA/DPIA évalue l'impact sur les personnes."
        },
        {
          "type": "standard",
          "titre": "Monitoring continu, mesure et reporting du risque",
          "points": [
            "Continuous monitoring (NIST ISCM) : collecte automatisée, tableaux de bord, réévaluation à chaque changement majeur — l'autorisation n'est jamais définitive",
            "KPI : mesurent la performance des contrôles ; KRI : indicateurs avancés de risque, assortis de seuils qui déclenchent une action",
            "Reporting interne : direction, comité des risques, board — en langage business : tendances, exposition comparée à l'appétit pour le risque",
            "Reporting externe : régulateurs (notifications obligatoires), assureurs cyber, clients et auditeurs (attestations, rapports de type SOC 2)"
          ],
          "narration": "Une évaluation annuelle ne suffit pas : entre deux audits, le système change, les menaces évoluent. Le monitoring continu, formalisé par le NIST sous le nom d'Information Security Continuous Monitoring, maintient une visibilité permanente : collecte automatisée d'indicateurs, tableaux de bord, et réévaluation du risque à chaque changement majeur du système ou de son environnement. Pour mesurer, distinguez deux familles d'indicateurs : les KPI, indicateurs de performance, disent si les contrôles fonctionnent, par exemple le taux de correctifs appliqués dans les délais ; les KRI, indicateurs de risque, sont des signaux avancés dotés de seuils, et le franchissement d'un seuil doit déclencher une action prédéfinie, pas une simple curiosité statistique. Ces mesures alimentent le reporting. En interne, on rend compte à la direction, au comité des risques et au conseil d'administration, en langage business : tendances, pertes potentielles quantifiées, exposition comparée à l'appétit pour le risque. En externe, on rend compte aux régulateurs à travers les notifications obligatoires, aux assureurs cyber pour la souscription, et aux clients ou auditeurs via des attestations comme les rapports SOC deux.",
          "astuce": "💡 Conseil examen : au board, on parle risque business et argent, jamais jargon technique ni CVE. Un KRI qui franchit son seuil = déclencheur d'action. Monitoring continu = la réponse aux scénarios « entre deux évaluations annuelles »."
        },
        {
          "type": "resume",
          "titre": "Ce qu'il faut retenir",
          "points": [
            "Chaîne : threat → vulnerability → exposure → risk → safeguard",
            "SLE = AV × EF ; ALE = SLE × ARO ; valeur du safeguard = (ALE1 − ALE2) − ACS",
            "Réponses : mitigate, transfer, avoid, accept, deter — jamais reject",
            "Residual risk = ce que la direction accepte ; contrôles en 3 catégories et 7 types",
            "Cycle continu : risk register, RMF, maturité, monitoring",
            "Évaluer et rendre compte : SCA côté sécurité, PIA/DPIA côté vie privée ; KRI avec seuils, monitoring continu, reporting interne (board) et externe (régulateurs, assureurs)"
          ],
          "narration": "Résumons ce chapitre central. Maîtrisez la chaîne du risque : les menaces exploitent des vulnérabilités, créant une exposition qui constitue le risque, réduit par des safeguards. Sachez calculer sans hésiter SLE, ALE et la valeur d'un safeguard. Connaissez les réponses au risque, en vous rappelant que le rejet n'est jamais acceptable. Distinguez risque inhérent, résiduel et total, et sachez classer un contrôle par catégorie et par fonction. Enfin, retenez que tout cela s'inscrit dans un cycle continu, outillé par le registre des risques, le RMF du NIST et les modèles de maturité. N'oubliez pas la boucle de contrôle : les Security Control Assessments et les analyses d'impact sur la vie privée, PIA et DPIA, vérifient les contrôles ; le monitoring continu et les KRI surveillent la posture au quotidien ; et le reporting traduit le tout en langage business, pour la direction comme pour les régulateurs, assureurs et clients."
        }
      ]
    },
    {
      "id": "d1-l6",
      "titre": "Threat modeling (STRIDE, DREAD, PASTA) et risque de la supply chain",
      "duree": 11,
      "slides": [
        {
          "type": "intro",
          "titre": "Modéliser les menaces",
          "points": [
            "Identifier, catégoriser et analyser les menaces potentielles",
            "Approche proactive (dès la conception) ou réactive (après déploiement)",
            "La sécurité coûte moins cher quand elle est intégrée tôt"
          ],
          "narration": "Le threat modeling, la modélisation des menaces, est le processus qui consiste à identifier, catégoriser et analyser les menaces potentielles pesant sur un système. Il peut être mené de façon proactive, pendant la conception et le développement, c'est l'approche défensive, ou de façon réactive, une fois le produit déployé, c'est l'approche adversariale. Retenez le principe économique : intégrer la sécurité dès la conception coûte toujours moins cher que la rajouter après coup. C'est l'esprit du Security Development Lifecycle de Microsoft : secure by design, secure by default, secure in deployment."
        },
        {
          "type": "schema",
          "titre": "STRIDE : catégoriser les menaces",
          "points": [
            "Modèle de catégorisation développé par Microsoft",
            "Chaque lettre correspond à une famille de menaces"
          ],
          "schema": {
            "type": "grid",
            "items": [
              "Spoofing : usurpation d'identité",
              "Tampering : altération de données",
              "Repudiation : nier avoir agi",
              "Information Disclosure : divulgation",
              "Denial of Service : déni de service",
              "Elevation of Privilege : élévation de privilèges"
            ]
          },
          "narration": "STRIDE, développé par Microsoft, est un modèle de catégorisation des menaces. S pour spoofing, l'usurpation d'identité par de fausses informations d'authentification. T pour tampering, l'altération non autorisée de données en transit ou stockées. R pour repudiation, la capacité d'un utilisateur ou d'un attaquant à nier avoir accompli une action. I pour information disclosure, la divulgation d'informations confidentielles. D pour denial of service, l'attaque qui empêche l'usage légitime d'une ressource. Et E pour elevation of privilege, quand un compte limité obtient des pouvoirs supérieurs. Remarquez que chaque catégorie STRIDE attaque un des piliers de la sécurité."
        },
        {
          "type": "standard",
          "titre": "DREAD : prioriser les menaces",
          "points": [
            "Damage potential, Reproducibility, Exploitability, Affected users, Discoverability",
            "Un score par critère pour classer les menaces",
            "STRIDE identifie et catégorise, DREAD priorise : ils se complètent"
          ],
          "narration": "Une fois les menaces identifiées, encore faut-il les prioriser : c'est le rôle de DREAD, également créé par Microsoft. On note chaque menace selon cinq critères : le potentiel de dommage, la reproductibilité de l'attaque, la facilité d'exploitation, le nombre d'utilisateurs affectés, et la facilité de découverte de la vulnérabilité. La somme des scores permet de classer les menaces et de traiter les plus sérieuses en premier. Le duo classique à retenir pour l'examen : STRIDE pour identifier et catégoriser, DREAD pour prioriser."
        },
        {
          "type": "standard",
          "titre": "PASTA : sept étapes centrées sur le risque",
          "points": [
            "Process for Attack Simulation and Threat Analysis",
            "7 stages : objectifs, périmètre technique, décomposition, analyse des menaces, vulnérabilités, simulation d'attaque, gestion du risque",
            "Méthodologie centrée sur le risque et alignée sur le métier"
          ],
          "narration": "PASTA, le Process for Attack Simulation and Threat Analysis, est une méthodologie en sept étapes centrée sur le risque. On commence par définir les objectifs de l'analyse, puis le périmètre technique. On décompose ensuite l'application, on analyse les menaces, puis les faiblesses et vulnérabilités. L'avant-dernière étape modélise et simule les attaques, et la dernière analyse et gère le risque qui en résulte. Ce qu'il faut retenir, c'est que PASTA relie explicitement la modélisation des menaces aux objectifs métier et au risque, là où STRIDE reste une grille de catégorisation technique. Citons aussi VAST, pensé pour les environnements agiles à grande échelle, et Trike, une méthodologie open source basée sur le risque et l'audit."
        },
        {
          "type": "standard",
          "titre": "Outils complémentaires du threat modeling",
          "points": [
            "MITRE ATT&CK : base de connaissance des tactiques et techniques réelles des attaquants",
            "Reduction analysis : décomposer le système — trust boundaries, data flows, input points, opérations privilégiées, contrôles",
            "Partage de renseignement : STIX (décrire), TAXII (échanger), CAPEC (patterns d'attaque)"
          ],
          "narration": "Quelques outils complètent l'arsenal. MITRE ATT&CK est une base de connaissance mondialement utilisée qui documente les tactiques, techniques et procédures réellement employées par les attaquants ; elle sert de référence dans de nombreux produits de détection. La reduction analysis, ou décomposition, consiste à découper un système en cinq éléments clés : les frontières de confiance, les chemins de flux de données, les points d'entrée, les opérations privilégiées et les détails des contrôles de sécurité. Enfin, pour partager du renseignement sur les menaces, STIX est le langage standardisé de description, TAXII le protocole d'échange, et CAPEC le dictionnaire des patterns d'attaque connus."
        },
        {
          "type": "question",
          "titre": "Contrôle de connaissance",
          "points": [
            "STRIDE en situation"
          ],
          "narration": "Appliquons STRIDE à un cas concret.",
          "q": "Un attaquant modifie le contenu d'un fichier de configuration pendant son transfert vers un serveur. Dans le modèle STRIDE, de quelle catégorie de menace s'agit-il ?",
          "choix": [
            "Repudiation",
            "Elevation of Privilege",
            "Tampering",
            "Spoofing"
          ],
          "reponse": 2,
          "explication": "La modification non autorisée de données, en transit ou au repos, correspond au Tampering, qui attaque l'intégrité. Le Spoofing est une usurpation d'identité, la Repudiation consiste à nier une action, et l'Elevation of Privilege transforme un compte limité en compte privilégié."
        },
        {
          "type": "standard",
          "titre": "Supply Chain Risk Management (SCRM)",
          "points": [
            "Chaque maillon de la chaîne doit être fiable, digne de confiance et responsable devant le suivant",
            "Menaces : product tampering, contrefaçons, implants matériels ou logiciels",
            "La supply chain est un vecteur d'attaque : la source paraît de confiance, l'amont est compromis"
          ],
          "narration": "Passons à la chaîne d'approvisionnement. Le Supply Chain Risk Management vise à garantir que tous les fournisseurs et maillons de la chaîne sont fiables, dignes de confiance et transparents sur leurs pratiques de sécurité envers leurs partenaires. Chaque maillon doit être responsable devant le suivant, et chaque transfert documenté et audité. Le danger est que la supply chain devienne elle-même un vecteur d'attaque : vous recevez du matériel ou du logiciel d'une source apparemment de confiance, mais un maillon en amont a été compromis. Les menaces typiques sont le sabotage de produit, les contrefaçons et les implants, parfois des puces miniaturisées, difficiles à détecter."
        },
        {
          "type": "standard",
          "titre": "Atténuer le risque de la supply chain",
          "points": [
            "Évaluations de tiers : on-site assessment, revue documentaire, audits externes, monitoring continu",
            "Exigences minimales de sécurité intégrées aux contrats et SLA",
            "Techniques : silicon Root of Trust, Physically Unclonable Function (PUF), SBOM"
          ],
          "narration": "Comment atténuer ce risque ? D'abord par la diligence sur les tiers : évaluations sur site, revues de documents et de politiques, audits par des organismes indépendants et surveillance continue. Ensuite en intégrant des exigences minimales de sécurité et des niveaux de service directement dans les contrats et les SLA. Enfin par des mécanismes techniques : le silicon root of trust, une racine de confiance matérielle qui sécurise le démarrage du système ; la physically unclonable function, un composant physique qui crée une empreinte électronique unique et non clonable pour authentifier une puce ; et le Software Bill of Materials, le SBOM, l'inventaire détaillé de tous les composants et bibliothèques d'un logiciel, indispensable pour tracer les vulnérabilités."
        },
        {
          "type": "question",
          "titre": "Contrôle de connaissance",
          "points": [
            "Transparence logicielle"
          ],
          "narration": "Une question sur les mitigations de la supply chain.",
          "q": "Après une vulnérabilité critique dans une bibliothèque open source, votre organisation veut identifier rapidement tous les logiciels affectés. Quel élément répond le MIEUX à ce besoin ?",
          "choix": [
            "Un Software Bill of Materials (SBOM)",
            "Une Physically Unclonable Function (PUF)",
            "Un accord de niveau de service (SLA)",
            "Un silicon Root of Trust"
          ],
          "reponse": 0,
          "explication": "Le SBOM liste tous les composants, bibliothèques et dépendances d'une application ; c'est exactement l'outil qui permet de savoir où une bibliothèque vulnérable est utilisée. Le root of trust et la PUF protègent l'intégrité et l'authenticité du matériel, et le SLA encadre les engagements de service d'un fournisseur, sans donner de visibilité sur les composants logiciels."
        },
        {
          "type": "resume",
          "titre": "Ce qu'il faut retenir",
          "points": [
            "Threat modeling : proactif (conception) ou réactif (déploiement)",
            "STRIDE catégorise, DREAD priorise, PASTA relie menaces et risque métier en 7 étapes",
            "MITRE ATT&CK, reduction analysis, STIX/TAXII/CAPEC complètent l'arsenal",
            "SCRM : évaluer les tiers, contractualiser la sécurité, RoT, PUF, SBOM"
          ],
          "narration": "En résumé, le threat modeling identifie et analyse les menaces, idéalement dès la conception où il coûte le moins cher. STRIDE catégorise les menaces en six familles, DREAD les priorise avec cinq critères, et PASTA déroule sept étapes centrées sur le risque métier. MITRE ATT&CK documente les techniques réelles des attaquants, et la reduction analysis décompose le système pour mieux le comprendre. Côté supply chain, chaque maillon doit être fiable et auditable ; on se protège par les évaluations de tiers, les exigences contractuelles, et des mécanismes comme le root of trust matériel, la PUF et le SBOM."
        }
      ]
    },
    {
      "id": "d1-l7",
      "titre": "Continuité d'activité (BCP, BIA) et programme de sensibilisation",
      "duree": 12,
      "slides": [
        {
          "type": "intro",
          "titre": "Continuer à fonctionner, quoi qu'il arrive",
          "points": [
            "BCP : maintenir les opérations critiques pendant et après une crise",
            "La priorité absolue du BCP et du DRP : la sécurité des personnes",
            "BCP stratégique et orienté processus métier ; DRP tactique et technique"
          ],
          "narration": "Dernière leçon de ce domaine : la continuité d'activité et la sensibilisation. Le Business Continuity Planning évalue les risques pesant sur les processus de l'organisation et crée les politiques, plans et procédures pour en minimiser l'impact. Son but est de maintenir les opérations critiques pendant et après une crise, avec une réponse rapide, calme et efficace. Deux réflexes d'examen : d'abord, la priorité numéro un du BCP comme du DRP est toujours la sécurité des personnes. Ensuite, distinguez bien le BCP, stratégique et centré sur les processus métier, du DRP, plus tactique et technique, qui décrit les sites de repli, les sauvegardes et la restauration."
        },
        {
          "type": "schema",
          "titre": "Les quatre étapes du processus BCP",
          "points": [
            "Un processus séquentiel validé par la direction",
            "Le soutien du top management est indispensable dès le départ"
          ],
          "schema": {
            "type": "flow",
            "items": [
              "1. Project scope & planning",
              "2. Business Impact Analysis",
              "3. Continuity planning",
              "4. Approval & implementation"
            ]
          },
          "narration": "Le processus BCP comporte quatre grandes étapes. D'abord le cadrage du projet : obtenir le soutien de la direction, constituer une équipe représentative du métier et de l'informatique, et bâtir le business case. Ensuite la Business Impact Analysis, que nous détaillons juste après. Puis la planification de la continuité proprement dite, avec le développement de la stratégie et des mécanismes de protection. Et enfin l'approbation et la mise en œuvre : le plan doit être endossé par le plus haut dirigeant de l'organisation, puis décliné en formation pour tout le personnel concerné."
        },
        {
          "type": "standard",
          "titre": "La Business Impact Analysis (BIA)",
          "points": [
            "Identifier les processus et systèmes critiques et l'impact d'une interruption",
            "Cinq temps : identification des priorités, identification des risques, évaluation de la probabilité, évaluation de l'impact, priorisation des ressources",
            "Produit les métriques clés : RTO, RPO, MTD"
          ],
          "narration": "La Business Impact Analysis identifie les systèmes et services dont l'entreprise dépend, et évalue l'impact qu'aurait leur interruption, y compris sur des processus métier comme la facturation ou les ventes. Elle se déroule en cinq temps : identifier les priorités de l'organisation, identifier les risques, évaluer leur probabilité, évaluer leur impact, puis prioriser les ressources, c'est-à-dire décider quels systèmes restaurer en premier, en commençant par les services fondamentaux comme le réseau et l'annuaire, dont tout le reste dépend. C'est la BIA qui produit les métriques de récupération que tout candidat CISSP doit connaître parfaitement."
        },
        {
          "type": "standard",
          "titre": "RTO, RPO, MTD et les métriques de fiabilité",
          "points": [
            "RTO : durée maximale tolérable pour restaurer le service",
            "RPO : perte de données maximale tolérable, mesurée en temps",
            "MTD/MAD : durée d'interruption au-delà de laquelle l'entreprise ne survit pas ; RTO ≤ MTD",
            "MTTR : temps moyen de réparation ; MTBF : temps moyen entre pannes"
          ],
          "narration": "Voici les métriques essentielles. Le Recovery Time Objective, RTO, est le temps maximal toléré pour remettre un système en service à un niveau défini. Le Recovery Point Objective, RPO, est la perte de données maximale tolérable, exprimée en temps : un RPO d'une heure signifie qu'on accepte de perdre au plus une heure de données, ce qui dicte la fréquence des sauvegardes. Le Maximum Tolerable Downtime, MTD, est la durée d'interruption d'une fonction critique au-delà de laquelle l'organisation cesse d'être viable ; le RTO doit donc toujours être inférieur ou égal au MTD. Ajoutez le MTTR, le temps moyen de réparation d'un équipement, et le MTBF, le temps moyen entre deux pannes.",
          "astuce": "💡 Conseil examen : RTO = temps pour revenir, RPO = données qu'on accepte de perdre, MTD = limite de survie. Et toujours RTO ≤ MTD."
        },
        {
          "type": "standard",
          "titre": "Continuity planning et dépendances externes",
          "points": [
            "Strategy development : choisir quels risques seront atténués",
            "Provisions & processes : concevoir les mécanismes ; objectif : le COOP, jusqu'à un mois d'opérations",
            "Dépendances externes : fournisseurs critiques, cloud, obligations légales — à intégrer au plan",
            "Facettes de la continuité : résilience, récupération, contingence"
          ],
          "narration": "La phase de continuity planning comprend deux sous-étapes : le développement de la stratégie, où l'équipe décide quels risques seront atténués, et les provisions and processes, où l'on conçoit les mécanismes et procédures correspondants. Le livrable est le continuity of operations plan, le COOP, qui décrit comment l'organisation assurera ses fonctions critiques dès la survenue d'une perturbation et jusqu'à un mois d'opérations soutenues. N'oubliez pas les dépendances externes : fournisseurs de matériel et de logiciels critiques, services cloud, contraintes légales et réglementaires doivent être intégrés au plan. Et retenez les trois facettes de la continuité : la résilience d'abord, la récupération si un service tombe, et la contingence en dernier recours."
        },
        {
          "type": "question",
          "titre": "Contrôle de connaissance",
          "points": [
            "Les métriques de la BIA"
          ],
          "narration": "Vérifions ces métriques avec une question de style examen.",
          "q": "Votre organisation effectue des sauvegardes toutes les 4 heures. Quelle métrique cette fréquence détermine-t-elle directement ?",
          "choix": [
            "RTO",
            "RPO",
            "MTBF",
            "MTD"
          ],
          "reponse": 1,
          "explication": "La fréquence des sauvegardes détermine la quantité maximale de données perdues en cas d'incident : c'est le Recovery Point Objective. Avec une sauvegarde toutes les 4 heures, on peut perdre jusqu'à 4 heures de données. Le RTO concerne le délai de restauration du service, le MTD la durée d'interruption maximale supportable, et le MTBF la fiabilité d'un équipement."
        },
        {
          "type": "standard",
          "titre": "Awareness, training, education",
          "points": [
            "Awareness : attirer l'attention, changer les réflexes de tous",
            "Training : apprendre à accomplir ses tâches en respectant la politique de sécurité",
            "Education : savoir au-delà du poste, souvent liée à une certification ou une évolution",
            "Obligatoire pour les nouveaux arrivants, puis au minimum une fois par an"
          ],
          "narration": "L'humain étant la première cible des attaquants, le programme de sensibilisation est un pilier du Domaine 1. On distingue trois niveaux. La sensibilisation, awareness, vise à capter l'attention de tous et à installer les bons réflexes face au phishing ou aux clés USB abandonnées. La formation, training, apprend aux employés à accomplir leurs tâches conformément à la politique de sécurité. L'éducation va au-delà des besoins du poste : elle est souvent associée à une certification ou à une évolution de carrière. La formation doit être obligatoire pour tous les nouveaux arrivants, puis renouvelée au minimum chaque année."
        },
        {
          "type": "standard",
          "titre": "Techniques modernes et mesure d'efficacité",
          "points": [
            "Campagnes de phishing simulé : taux d'ouverture, de clic et de signalement",
            "Social engineering : autorité, intimidation, consensus, rareté, familiarité, confiance, urgence",
            "Security champions et gamification pour ancrer la culture",
            "Réviser le contenu régulièrement : IA, blockchain, nouvelles menaces — et mesurer les résultats"
          ],
          "narration": "Les techniques modernes rendent la sensibilisation vivante. Les campagnes de phishing simulé produisent des métriques précieuses : le pourcentage d'employés qui ouvrent le message, qui cliquent, et surtout qui le signalent. La formation doit couvrir les principes du social engineering : l'autorité, l'intimidation, le consensus, la rareté, la familiarité, la confiance et l'urgence. Les security champions sont des relais au sein des équipes qui évangélisent la sécurité au quotidien, et la gamification rend l'apprentissage plus engageant qu'un simple questionnaire. Enfin, le contenu doit être révisé périodiquement pour intégrer les technologies émergentes comme l'intelligence artificielle ou la blockchain, et l'efficacité du programme doit être mesurée avec des indicateurs suivis dans le temps : un programme qu'on ne mesure pas ne s'améliore pas."
        },
        {
          "type": "question",
          "titre": "Contrôle de connaissance",
          "points": [
            "La priorité en cas de sinistre"
          ],
          "narration": "Une dernière question, sur le réflexe le plus important de tout l'examen.",
          "q": "Un incendie se déclare dans le data center principal pendant les heures de bureau. Quelle est la PREMIÈRE priorité du plan de continuité ?",
          "choix": [
            "Déclencher la restauration des sauvegardes",
            "Notifier la direction et les autorités",
            "Évacuer le personnel et garantir la sécurité des personnes",
            "Basculer les services critiques vers le site de secours"
          ],
          "reponse": 2,
          "explication": "La priorité absolue du BCP et du DRP est toujours la vie humaine : on met les personnes hors de danger avant toute considération technique ou financière. Le basculement, la restauration et les notifications sont importants, mais viennent après la mise en sécurité du personnel. À l'examen, quand la sécurité des personnes figure parmi les choix, c'est presque toujours la bonne réponse."
        },
        {
          "type": "standard",
          "titre": "Réviser le contenu : menaces et technologies émergentes",
          "points": [
            "Le contenu SETA est périssable : revue planifiée au moins annuelle, PLUS des revues déclenchées (nouvel incident, nouvelle technologie, nouvelle réglementation)",
            "Technologies émergentes à intégrer : IA générative et deepfakes, cryptocurrency (arnaques à l'investissement, fraude, rançons), blockchain",
            "Adapter le contenu par rôle, retirer ce qui est obsolète, puis re-mesurer l'efficacité après chaque mise à jour"
          ],
          "narration": "Un programme de sensibilisation n'est jamais terminé, car les attaquants, eux, mettent leur contenu à jour en permanence. La revue du contenu se fait à deux rythmes. D'abord une revue périodique planifiée, au moins une fois par an, qui vérifie que les supports restent exacts et pertinents. Ensuite des revues déclenchées par un événement : un incident interne, une nouvelle vague d'attaques dans le secteur, une nouvelle technologie adoptée par l'entreprise, ou une nouvelle réglementation. Les technologies émergentes doivent entrer dans les supports : l'intelligence artificielle générative et les deepfakes, la blockchain, et les cryptomonnaies, très présentes dans les arnaques à l'investissement, les fraudes au faux support et le paiement des rançons. À chaque révision, on adapte le contenu aux rôles concernés, on retire ce qui est obsolète, puis on mesure à nouveau l'efficacité du programme pour vérifier que la mise à jour a porté ses fruits.",
          "astuce": "💡 Conseil examen : scénario avec une formation datée face à de nouvelles attaques non couvertes ? La réponse attendue est la revue périodique du contenu SETA — pas des sanctions, pas plus de phishing simulé à l'identique, pas un simple outil technique."
        },
        {
          "type": "resume",
          "titre": "Ce qu'il faut retenir",
          "points": [
            "BCP en 4 étapes : cadrage, BIA, continuity planning, approbation par la direction",
            "BIA → RTO, RPO, MTD ; RTO ≤ MTD ; RPO dicté par les sauvegardes",
            "Les personnes d'abord, toujours",
            "Awareness, training, education ; phishing simulé, champions, gamification, contenu à jour"
          ],
          "narration": "Résumons cette dernière leçon. Le BCP se construit en quatre étapes, du cadrage à l'approbation par le plus haut niveau de la direction, avec la BIA en pivot central. La BIA produit les métriques clés : RTO pour le délai de restauration, RPO pour la perte de données acceptable, MTD pour la limite de survie de l'organisation. La priorité absolue reste la sécurité des personnes. Et le facteur humain se travaille dans la durée : sensibilisation pour tous, formation annuelle obligatoire, campagnes de phishing simulé, security champions et gamification, avec un contenu régulièrement mis à jour et des résultats mesurés. Bravo, vous avez terminé le tour du Domaine 1 : place aux quiz et aux flashcards pour ancrer tout cela."
        }
      ]
    },
    {
      "id": "d1-l8",
      "titre": "Acteurs de la menace et ingénierie sociale",
      "duree": 13,
      "slides": [
        {
          "type": "intro",
          "titre": "Connaître son adversaire",
          "points": [
            "Identifier QUI attaque : motivations, ressources, niveau de sophistication",
            "Catalogue complet des attaques d'ingénierie sociale, très testé à l'examen",
            "Bonus : entrapment vs enticement et trois lois américaines clés"
          ],
          "narration": "Dans cette leçon, nous changeons de perspective : nous passons du côté de l'adversaire. L'examen adore les questions du type : quel acteur de la menace est le plus probable dans ce scénario ? Pour y répondre, il faut connaître la taxonomie des threat actors, leurs motivations et leur niveau de sophistication. Nous passerons ensuite en revue le catalogue complet des attaques d'ingénierie sociale, du simple phishing aux deepfakes, avant de terminer sur la distinction juridique entre entrapment et enticement, et sur trois lois américaines incontournables."
        },
        {
          "type": "standard",
          "titre": "Taxonomie des threat actors, première partie",
          "points": [
            "Script kiddies : outils tout faits, faible compétence, cibles opportunistes",
            "Hacktivistes : motivation idéologique ou politique (défacement, DDoS, fuites)",
            "Crime organisé : motivation financière avant tout (ransomware, fraude, vol de données)",
            "État-nation / APT : ressources quasi illimitées, furtivité, persistance sur le long terme"
          ],
          "narration": "Commençons par les profils classiques. Les script kiddies sont des attaquants peu qualifiés qui utilisent des outils développés par d'autres ; ils sont opportunistes et bruyants, mais restent dangereux pour les systèmes mal protégés. Les hacktivistes agissent par conviction idéologique ou politique : leurs armes favorites sont le défacement de sites, le déni de service et la divulgation de documents. Le crime organisé, lui, est motivé par l'argent : ransomware, fraude, vol et revente de données. Enfin, les acteurs étatiques, souvent qualifiés d'APT, Advanced Persistent Threat, disposent de ressources quasi illimitées, visent des objectifs d'espionnage ou de sabotage, et privilégient la furtivité et la persistance dans la durée.",
          "astuce": "💡 Conseil examen : « furtif, patient, ciblé, très financé » = état-nation/APT. « Motivé par l'argent » = crime organisé. « Message politique » = hacktiviste."
        },
        {
          "type": "standard",
          "titre": "Taxonomie, deuxième partie : insiders et concurrents",
          "points": [
            "Insider threat malveillant : employé qui abuse volontairement de son accès légitime (vengeance, argent)",
            "Insider négligent : sans intention de nuire, il cause l'incident par erreur ou contournement des règles",
            "Concurrents : espionnage industriel, vol de trade secrets, débauchage d'employés clés",
            "L'insider est souvent le PLUS dangereux : il a déjà l'accès et la connaissance interne"
          ],
          "narration": "Deux profils méritent une attention particulière. L'insider threat, la menace interne, se décline en deux variantes : l'insider malveillant abuse délibérément de son accès légitime, par vengeance après un licenciement, par appât du gain ou par idéologie ; l'insider négligent, lui, n'a aucune intention de nuire, mais provoque l'incident par erreur, par méconnaissance ou en contournant les règles pour aller plus vite. Retenez que la menace interne est souvent considérée comme la plus dangereuse, car l'insider possède déjà un accès autorisé et connaît l'organisation de l'intérieur. Enfin, les concurrents pratiquent l'espionnage industriel pour voler des trade secrets, un domaine couvert par l'Economic Espionage Act que nous avons vu dans la leçon sur les lois."
        },
        {
          "type": "schema",
          "titre": "Motivations et sophistication : la grille de lecture",
          "points": [
            "À l'examen, on identifie l'acteur par sa motivation et ses moyens",
            "Croisez toujours : qui, pourquoi, avec quelles ressources"
          ],
          "schema": {
            "type": "grid",
            "items": [
              "Script kiddie : reconnaissance/amusement — sophistication faible",
              "Hacktiviste : idéologie, message — sophistication variable",
              "Crime organisé : argent — sophistication élevée",
              "État-nation / APT : espionnage, sabotage — sophistication maximale",
              "Insider : vengeance, argent, ou simple négligence — accès déjà acquis",
              "Concurrent : avantage commercial, trade secrets — moyens ciblés"
            ]
          },
          "narration": "Voici la grille de lecture à mémoriser. Face à un scénario d'examen, posez-vous trois questions : qui attaque, pourquoi, et avec quelles ressources. Un défacement revendiquant une cause : hacktiviste. Une demande de rançon : crime organisé. Une intrusion discrète qui dure des mois dans un ministère ou un industriel de la défense : état-nation. Un scan maladroit avec des outils publics : script kiddie. Une fuite de données commise par quelqu'un qui avait déjà les accès : insider. Et le vol ciblé d'une formule ou d'un procédé de fabrication : un concurrent. C'est ce raisonnement, motivation plus sophistication, qui donne la réponse la plus probable."
        },
        {
          "type": "standard",
          "titre": "La famille du phishing",
          "points": [
            "Phishing : hameçonnage de masse, non ciblé, par e-mail",
            "Spear phishing : ciblé sur une personne ou un groupe précis, message personnalisé",
            "Whaling : spear phishing visant les dirigeants (CEO, CFO) — les « gros poissons »",
            "Vishing : par téléphone ou VoIP ; Smishing : par SMS"
          ],
          "narration": "Entrons dans le catalogue de l'ingénierie sociale, en commençant par la famille du phishing. Le phishing classique est un hameçonnage de masse : le même e-mail frauduleux envoyé à des milliers de destinataires, en espérant que quelques-uns mordent. Le spear phishing est ciblé : l'attaquant personnalise son message pour une personne ou un groupe précis, après s'être renseigné sur sa victime. Le whaling est un spear phishing qui vise spécifiquement les gros poissons, c'est-à-dire les dirigeants, le CEO ou le CFO, souvent pour déclencher des virements frauduleux. Le vishing utilise le téléphone ou la voix sur IP, et le smishing passe par SMS.",
          "astuce": "💡 Distinction classique : spear phishing = ciblé sur quelqu'un ; whaling = ciblé sur un DIRIGEANT. Si la victime est un cadre exécutif, la réponse est whaling, pas spear phishing."
        },
        {
          "type": "standard",
          "titre": "Manipulations et attaques de proximité",
          "points": [
            "Pretexting : inventer un scénario crédible (faux technicien, faux auditeur) pour obtenir info ou accès",
            "Baiting : appâter avec un objet (clé USB piégée) ; Quid pro quo : échange d'un « service » contre des infos",
            "Tailgating : suivre quelqu'un SANS son accord ; Piggybacking : AVEC son consentement",
            "Shoulder surfing : observer par-dessus l'épaule ; Dumpster diving : fouiller les poubelles"
          ],
          "narration": "Poursuivons avec les manipulations et les attaques de proximité. Le pretexting consiste à inventer un scénario crédible, un prétexte : l'attaquant se fait passer pour un technicien du support, un auditeur ou un livreur afin d'obtenir des informations ou un accès. La nuance avec le phishing : le pretexting repose sur un scénario et un dialogue construits, pas seulement sur un message frauduleux. Le baiting appâte la victime avec un objet, typiquement une clé USB piégée abandonnée sur un parking. Le quid pro quo propose un échange : un faux service informatique contre vos identifiants. Le tailgating consiste à franchir une porte sécurisée en suivant un employé sans qu'il le sache, tandis que le piggybacking se fait avec son consentement, souvent par politesse. Ajoutez le shoulder surfing, l'observation par-dessus l'épaule, et le dumpster diving, la fouille des poubelles à la recherche de documents sensibles."
        },
        {
          "type": "standard",
          "titre": "Attaques indirectes et menaces émergentes",
          "points": [
            "Watering hole : compromettre un site web que la cible visite habituellement",
            "Typosquatting / URL hijacking : enregistrer des domaines proches (goggle.com) pour piéger les fautes de frappe",
            "Deepfakes : audio ou vidéo synthétiques imitant une personne réelle",
            "Vishing assisté par IA : clonage de voix d'un dirigeant pour ordonner un virement"
          ],
          "narration": "Terminons le catalogue avec les attaques indirectes et les menaces émergentes. Dans une attaque de type watering hole, le point d'eau, l'attaquant ne cible pas directement sa victime : il compromet un site web que la victime ou sa communauté visite régulièrement, comme un site professionnel de sa filière, et y dépose un code malveillant. Le typosquatting, ou URL hijacking, consiste à enregistrer des noms de domaine très proches du domaine légitime pour capter les fautes de frappe des utilisateurs et leur servir une fausse page. Enfin, les deepfakes utilisent l'intelligence artificielle pour générer des audios ou des vidéos imitant une personne réelle : combinés au vishing, ils permettent de cloner la voix d'un dirigeant et d'ordonner un virement urgent. La parade reste la même : des procédures de vérification par un canal indépendant, et une sensibilisation régulière."
        },
        {
          "type": "question",
          "titre": "Contrôle de connaissance",
          "points": [
            "Whaling ou spear phishing ?"
          ],
          "narration": "Vérifions la distinction la plus testée du catalogue.",
          "q": "Le directeur financier reçoit un e-mail personnalisé, prétendument envoyé par le CEO, lui demandant de valider en urgence un virement confidentiel. De quelle attaque s'agit-il ?",
          "choix": [
            "Phishing",
            "Whaling",
            "Pretexting",
            "Vishing"
          ],
          "reponse": 1,
          "explication": "Un message frauduleux ciblé et personnalisé visant un dirigeant, ici le CFO, est du whaling : la variante du spear phishing réservée aux « gros poissons ». Le phishing est massif et non ciblé, le vishing passe par le téléphone, et le pretexting repose sur un scénario interactif plutôt qu'un simple e-mail. Notez que ce schéma correspond aussi à la fraude dite BEC, Business Email Compromise."
        },
        {
          "type": "standard",
          "titre": "Entrapment vs Enticement : la frontière légale des honeypots",
          "points": [
            "Enticement : l'attaquant a DÉJÀ l'intention de commettre le délit ; on lui offre une opportunité — LÉGAL",
            "Entrapment : on INCITE une personne qui n'en avait pas l'intention à commettre le délit — ILLÉGAL",
            "Un honeypot bien conçu pratique l'enticement, jamais l'entrapment",
            "Enjeu : la recevabilité des preuves et la validité des poursuites"
          ],
          "narration": "Parlons maintenant d'une distinction juridique liée aux honeypots, ces systèmes pièges déployés pour attirer les attaquants. L'enticement, l'attrait, est légal : l'attaquant avait déjà l'intention de s'introduire, et le honeypot ne fait que lui offrir une cible tentante ; les preuves collectées restent recevables. L'entrapment, le piège incitatif, est illégal : il consiste à pousser une personne qui n'avait pas d'intention délictueuse à commettre le délit, par exemple en l'invitant activement à pénétrer un système ; c'est une défense recevable en justice qui peut faire échouer les poursuites. Retenez la formule : l'enticement exploite une intention préexistante, l'entrapment la crée. Un honeypot bien conçu attire sans jamais inciter.",
          "astuce": "💡 Mémo : ENTicement = TENtation légale d'un attaquant déjà décidé. ENTRAPment = TRAP illégal qui fabrique l'intention."
        },
        {
          "type": "standard",
          "titre": "Trois lois américaines complémentaires",
          "points": [
            "CFAA (Computer Fraud and Abuse Act, 1986) : criminalise l'accès non autorisé aux ordinateurs, notamment fédéraux et financiers",
            "ECPA (Electronic Communications Privacy Act, 1986) : protège les communications électroniques contre l'interception et la surveillance illégales",
            "PATRIOT Act (2001) : élargit les pouvoirs de surveillance et d'enquête des autorités après le 11 septembre, et alourdit les peines du CFAA"
          ],
          "narration": "Complétons notre panorama légal avec trois lois américaines qui tombent régulièrement à l'examen. Le Computer Fraud and Abuse Act, le CFAA, de mille neuf cent quatre-vingt-six, est la grande loi pénale contre l'accès non autorisé aux systèmes informatiques, en particulier les ordinateurs du gouvernement fédéral et des institutions financières. L'Electronic Communications Privacy Act, l'ECPA, de la même année, protège les communications électroniques contre l'interception et la surveillance illégales, y compris par le gouvernement. Et le PATRIOT Act de deux mille un a considérablement élargi les pouvoirs de surveillance et d'enquête des autorités américaines après les attentats du onze septembre, tout en aggravant les sanctions prévues par le CFAA."
        },
        {
          "type": "question",
          "titre": "Contrôle de connaissance",
          "points": [
            "Identifier l'acteur le plus probable"
          ],
          "narration": "Une dernière mise en situation avant le résumé.",
          "q": "Un industriel de la défense découvre une intrusion discrète, active depuis 18 mois, utilisant des malwares sur mesure et exfiltrant des plans classifiés. Quel acteur de la menace est le PLUS probable ?",
          "choix": [
            "État-nation (APT)",
            "Hacktiviste",
            "Insider négligent",
            "Script kiddie"
          ],
          "reponse": 0,
          "explication": "Furtivité, persistance sur dix-huit mois, outils développés sur mesure et ciblage de secrets de défense : tous les marqueurs d'un acteur étatique de type APT sont réunis. Un script kiddie n'a ni la compétence ni la patience, un hacktiviste chercherait la visibilité et revendiquerait son action, et un insider négligent cause des incidents par erreur, pas une campagne d'exfiltration structurée."
        },
        {
          "type": "resume",
          "titre": "Ce qu'il faut retenir",
          "points": [
            "Acteurs : script kiddie, hacktiviste, crime organisé (argent), état-nation/APT (furtif, persistant), insider (malveillant vs négligent), concurrent",
            "Phishing massif ; spear phishing ciblé ; whaling = dirigeants ; vishing = voix ; smishing = SMS",
            "Pretexting, baiting, quid pro quo, tailgating vs piggybacking, shoulder surfing, dumpster diving, watering hole, typosquatting, deepfakes",
            "Enticement légal (intention préexistante), entrapment illégal (intention fabriquée)",
            "CFAA : accès non autorisé ; ECPA : interception des communications ; PATRIOT Act : pouvoirs de surveillance élargis"
          ],
          "narration": "Résumons. Vous savez maintenant profiler les acteurs de la menace : le script kiddie opportuniste, le hacktiviste idéologique, le crime organisé motivé par l'argent, l'état-nation furtif et persistant, l'insider malveillant ou simplement négligent, et le concurrent en quête de trade secrets. Vous maîtrisez le catalogue de l'ingénierie sociale, du phishing de masse au whaling des dirigeants, en passant par le pretexting, le baiting, le tailgating et les attaques modernes comme le watering hole, le typosquatting et les deepfakes. Vous distinguez l'enticement, légal, de l'entrapment, illégal. Et vous connaissez les trois lois américaines clés : CFAA, ECPA et PATRIOT Act. Le meilleur contrôle contre tout cela reste un personnel sensibilisé et des procédures de vérification solides."
        }
      ]
    }
  ],
  "quiz": [
    {
      "q": "Lors d'une réunion de crise, la direction demande qui porte la responsabilité ULTIME de la sécurité de l'information dans l'organisation. Quelle est la MEILLEURE réponse ?",
      "choix": [
        "La direction générale (senior management)",
        "Le propriétaire des données",
        "Le RSSI (CISO)",
        "L'équipe sécurité"
      ],
      "reponse": 0,
      "explication": "La responsabilité ultime de la sécurité incombe toujours à la direction générale : c'est elle qui approuve les politiques, alloue les ressources et assume les conséquences. Le CISO a une responsabilité fonctionnelle, le data owner classifie ses données, et l'équipe sécurité exécute, mais aucun d'eux ne porte la responsabilité finale.",
      "difficulte": 1,
      "pourquoi": [
        "Correcte : la direction générale porte la responsabilité ultime (accountability) de la sécurité, même lorsqu'elle en délègue l'exécution.",
        "Trop étroit : le propriétaire des données répond de la classification et des règles d'accès de ses données, pas de la sécurité de toute l'organisation.",
        "Réponse de technicien-manager intermédiaire : le CISO dirige le programme au quotidien, mais la responsabilité ultime ne se délègue pas.",
        "Réponse opérationnelle : l'équipe sécurité met en œuvre les contrôles, elle n'assume pas la responsabilité ultime devant les actionnaires et les régulateurs."
      ]
    },
    {
      "q": "Un chiffrement de bout en bout protège des données médicales contre toute lecture non autorisée pendant leur transmission. Quel principe de la triade CIA est PRINCIPALEMENT assuré ?",
      "choix": [
        "Availability",
        "Confidentiality",
        "Integrity",
        "Nonrepudiation"
      ],
      "reponse": 1,
      "explication": "Le chiffrement empêche la divulgation du contenu aux personnes non autorisées : c'est la confidentialité. Il ne garantit pas à lui seul l'intégrité (il faudrait un hachage ou un MAC), ne contribue pas à la disponibilité, et la non-répudiation exige des signatures numériques associées à une identité.",
      "difficulte": 1,
      "pourquoi": [
        "Hors sujet : la disponibilité concerne l'accès fiable des utilisateurs autorisés, pas la protection contre la lecture.",
        "Correcte : empêcher toute lecture non autorisée pendant la transmission est précisément la définition de la confidentialité.",
        "Piège d'association : l'intégrité protège contre la modification non autorisée, pas contre la lecture des données.",
        "Hors périmètre : la non-répudiation empêche de nier une action, elle ne protège pas le contenu contre la lecture."
      ]
    },
    {
      "q": "Quelle formule permet de calculer la Single Loss Expectancy (SLE) ?",
      "choix": [
        "SLE = AV × ARO",
        "SLE = ALE × ARO",
        "SLE = AV × EF",
        "SLE = EF × ARO"
      ],
      "reponse": 2,
      "explication": "SLE = Asset Value × Exposure Factor : la valeur de l'actif multipliée par le pourcentage de perte en cas de réalisation de la menace. L'ALE se calcule ensuite en multipliant la SLE par l'ARO (fréquence annuelle). Les autres combinaisons n'ont pas de sens dans le modèle quantitatif.",
      "difficulte": 1,
      "pourquoi": [
        "Mélange de variables : l'ARO mesure une fréquence annuelle et n'entre pas dans le calcul d'une perte unique.",
        "Inversion de formule : c'est l'ALE qui se calcule à partir du SLE (ALE = SLE × ARO), pas l'inverse.",
        "Correcte : la Single Loss Expectancy est la valeur de l'actif multipliée par le facteur d'exposition (SLE = AV × EF).",
        "Formule incomplète : EF × ARO combine un pourcentage et une fréquence sans jamais intégrer la valeur de l'actif."
      ]
    },
    {
      "q": "Un serveur vaut 100 000 €. Un incident de type ransomware entraînerait la perte de 40 % de sa valeur et devrait se produire deux fois par an. Quel est l'ALE ?",
      "choix": [
        "40 000 €",
        "20 000 €",
        "100 000 €",
        "80 000 €"
      ],
      "reponse": 3,
      "explication": "SLE = 100 000 × 0,40 = 40 000 €. ARO = 2 (deux occurrences par an). ALE = SLE × ARO = 40 000 × 2 = 80 000 €. Le piège classique est de répondre 40 000 €, qui n'est que la SLE d'une seule occurrence.",
      "difficulte": 2,
      "pourquoi": [
        "Piège de calcul : 40 000 € est le SLE (100 000 × 40 %), c'est-à-dire la perte d'un seul incident, pas la perte annualisée.",
        "Erreur d'opération : 20 000 € reviendrait à diviser le SLE par l'ARO au lieu de le multiplier.",
        "Confusion avec l'AV : 100 000 € est la valeur de l'actif, pas une espérance de perte.",
        "Correcte : ALE = SLE × ARO = (100 000 × 0,4) × 2 = 80 000 €."
      ]
    },
    {
      "q": "Après un calcul, un safeguard à 30 000 € par an réduirait l'ALE d'un risque de 120 000 € à 50 000 €. Que devrait faire le management ?",
      "choix": [
        "Rejeter le safeguard car son coût est trop élevé",
        "Transférer le risque à un assureur avant toute décision",
        "Implémenter le safeguard car sa valeur annuelle nette est de 40 000 €",
        "Accepter le risque sans contrôle"
      ],
      "reponse": 2,
      "explication": "Valeur du safeguard = (ALE avant − ALE après) − coût annuel = (120 000 − 50 000) − 30 000 = 40 000 €. La valeur nette étant positive, l'investissement est financièrement justifié. Rejeter le safeguard ou accepter le risque ignorerait cette analyse coût/bénéfice favorable, et rien n'indique qu'un transfert serait plus avantageux.",
      "difficulte": 3,
      "pourquoi": [
        "Contresens économique : le coût (30 000 €) est bien inférieur à la réduction d'ALE obtenue (70 000 €), le safeguard est donc rentable.",
        "Hors phase du processus : le transfert est une option de réponse, mais l'analyse démontre déjà qu'une atténuation rentable existe ; l'assurance n'annulerait pas ce calcul.",
        "Correcte : la valeur du safeguard = (120 000 − 50 000) − 30 000 = 40 000 € par an ; un bénéfice net positif justifie l'implémentation.",
        "Décision non étayée : accepter un risque dont l'atténuation est financièrement rentable contredit l'analyse coût/bénéfice qui vient d'être menée."
      ]
    },
    {
      "q": "Votre organisation décide de souscrire une cyber-assurance pour couvrir l'impact financier d'une violation de données. De quelle réponse au risque s'agit-il ?",
      "choix": [
        "Risk Avoidance",
        "Risk Acceptance",
        "Risk Mitigation",
        "Risk Transference"
      ],
      "reponse": 3,
      "explication": "Payer un tiers, ici un assureur, pour assumer l'impact financier d'un risque est un transfert de risque (Risk Transference ou Assignment). La mitigation réduirait le risque par des contrôles, l'évitement renoncerait à l'activité, et l'acceptation assumerait la perte sans transfert. Notez que la responsabilité légale, elle, ne se transfère jamais totalement.",
      "difficulte": 1,
      "pourquoi": [
        "Hors sujet : l'évitement supprime l'activité porteuse du risque, ce que l'entreprise ne fait pas ici.",
        "Trop passif : l'acceptation assume le risque sans action, or l'entreprise agit en payant une prime pour être couverte.",
        "Piège de vocabulaire : l'atténuation réduit le risque par des contrôles, alors que l'assurance ne réduit rien, elle déplace l'impact financier.",
        "Correcte : souscrire une assurance déplace les conséquences financières du risque vers un tiers, c'est la définition du transfert."
      ]
    },
    {
      "q": "Après l'implémentation de tous les contrôles approuvés, un niveau de risque subsiste. Comment appelle-t-on ce risque que la direction choisit d'assumer ?",
      "choix": [
        "Inherent risk",
        "Residual risk",
        "Total risk",
        "Controls gap"
      ],
      "reponse": 1,
      "explication": "Le risque résiduel est celui qui demeure après la mise en place des contrôles ; c'est lui que le management accepte formellement. Le risque inhérent existe avant tout traitement, le risque total est celui qu'on subirait sans aucun safeguard, et le controls gap est la part de risque éliminée par les contrôles (total moins résiduel).",
      "difficulte": 1,
      "pourquoi": [
        "Piège temporel : le risque inhérent est celui qui existe avant tout contrôle, pas après.",
        "Correcte : le risque résiduel est ce qui subsiste après l'application des contrôles et que la direction accepte formellement.",
        "Trop large : le risque total est l'exposition globale avant traitement, pas ce qui reste après contrôles.",
        "Concept voisin mais distinct : le controls gap est la portion de risque éliminée par les contrôles (risque total − controls gap = risque résiduel), pas le risque assumé après traitement."
      ]
    },
    {
      "q": "Un analyste propose d'« ignorer » un risque jugé peu probable, sans analyse ni documentation. En tant que manager, pourquoi devez-vous refuser ?",
      "choix": [
        "Parce que le rejet du risque n'est pas une réponse prudente et viole la Due Care",
        "Parce qu'un risque peu probable doit toujours être atténué",
        "Parce que seul l'auditeur peut accepter un risque",
        "Parce que l'acceptation du risque nécessite l'accord de l'assureur"
      ],
      "reponse": 0,
      "explication": "Rejeter ou ignorer un risque en espérant qu'il ne se réalise pas n'est jamais une réponse valable : c'est un manquement à la Due Care et à la Due Diligence. L'acceptation d'un risque est légitime, mais elle doit résulter d'une analyse coût/bénéfice documentée et d'une décision formelle du management, pas d'un simple oubli.",
      "difficulte": 2,
      "pourquoi": [
        "Correcte : « ignorer » un risque sans analyse ni documentation est un rejet du risque, réponse indéfendable qui viole la Due Care du management.",
        "Absolu : « toujours atténuer » est faux — un risque peu probable peut être accepté, mais après analyse et documentation formelles.",
        "Confusion de rôles : l'auditeur évalue et rapporte, il ne détient pas l'autorité de décision sur les risques.",
        "Hors périmètre : l'acceptation d'un risque est une décision interne du management, l'assureur n'a aucun rôle d'approbation."
      ]
    },
    {
      "q": "Quelle est la différence ESSENTIELLE entre l'analyse quantitative et l'analyse qualitative des risques ?",
      "choix": [
        "La quantitative attribue des valeurs monétaires, la qualitative des valeurs subjectives basées sur des scénarios",
        "La quantitative repose sur des scénarios, la qualitative sur des calculs",
        "La qualitative doit toujours précéder la quantitative pour que celle-ci soit valide",
        "La quantitative évalue la probabilité, la qualitative uniquement l'impact"
      ],
      "reponse": 0,
      "explication": "L'analyse quantitative assigne des valeurs monétaires réelles (AV, SLE, ALE) à partir de calculs, tandis que l'analyse qualitative s'appuie sur des jugements subjectifs, des scénarios et des classements (élevé/moyen/faible). La deuxième proposition inverse les définitions ; aucun ordre obligatoire n'existe entre les deux approches, qui considèrent chacune probabilité et impact — la plupart des organisations les combinent.",
      "difficulte": 1,
      "pourquoi": [
        "Correcte : la quantitative produit des valeurs monétaires objectives (AV, SLE, ALE), la qualitative des jugements subjectifs fondés sur des scénarios et des échelles.",
        "Inversion des définitions : ce sont les calculs monétaires qui caractérisent la quantitative et les scénarios subjectifs la qualitative.",
        "Absolu : les deux approches sont complémentaires et souvent combinées, aucun ordre obligatoire ne conditionne leur validité.",
        "Faux découpage : chaque approche considère la probabilité ET l'impact ; elles diffèrent par la nature des valeurs produites, pas par les variables traitées."
      ]
    },
    {
      "q": "Lors d'un atelier d'analyse de risques, vous voulez obtenir un consensus d'experts sans que la hiérarchie n'influence les réponses. Quelle technique est la PLUS adaptée ?",
      "choix": [
        "Un brainstorming ouvert",
        "Un audit externe",
        "La technique Delphi",
        "Une analyse quantitative SLE/ALE"
      ],
      "reponse": 2,
      "explication": "La technique Delphi recueille les avis de façon anonyme et itérative jusqu'à converger vers un consensus, ce qui neutralise les effets de hiérarchie et de personnalité. Le brainstorming ouvert expose justement aux biais d'influence, l'analyse quantitative ne cherche pas de consensus d'opinion, et l'audit externe évalue la conformité, pas les opinions d'experts internes.",
      "difficulte": 2,
      "pourquoi": [
        "Techniquement utile mais inadapté à la contrainte : en brainstorming ouvert, la hiérarchie et les personnalités dominantes influencent les avis.",
        "Hors périmètre : un audit externe évalue la conformité, il ne construit pas un consensus interne d'experts sur les risques.",
        "Correcte : la technique Delphi recueille les avis de façon anonyme et itérative, précisément pour neutraliser l'influence hiérarchique et dégager un consensus.",
        "Hors sujet : SLE/ALE est un calcul monétaire, pas une technique de consensus d'experts."
      ]
    },
    {
      "q": "Un panneau « site sous vidéosurveillance » à l'entrée d'un parking d'entreprise est un exemple de quel type de contrôle ?",
      "choix": [
        "Detective",
        "Corrective",
        "Preventive",
        "Deterrent"
      ],
      "reponse": 3,
      "explication": "Le panneau vise à décourager un attaquant potentiel de passer à l'acte : c'est un contrôle dissuasif (deterrent), qui repose sur la décision de l'individu de renoncer. Il n'empêche physiquement rien (préventif), ne détecte rien par lui-même (détectif) et ne corrige rien après incident (correctif).",
      "difficulte": 1,
      "pourquoi": [
        "Piège de composant : c'est la caméra qui détecte, pas le panneau, dont le rôle est d'influencer le comportement avant l'acte.",
        "Hors phase : un contrôle correctif intervient après l'incident pour en limiter les effets, ce que ne fait pas un panneau.",
        "Nuance de finalité : le panneau ne bloque physiquement personne, il ne peut donc pas être préventif au sens strict.",
        "Correcte : le panneau vise à décourager l'attaquant potentiel en signalant la surveillance — fonction dissuasive (deterrent) par excellence."
      ]
    },
    {
      "q": "Le contrôle d'accès par badge du data center est en panne. En attendant sa réparation, un gardien vérifie manuellement les identités à l'entrée. Comment qualifier ce contrôle ?",
      "choix": [
        "Contrôle de récupération",
        "Contrôle compensatoire",
        "Contrôle correctif",
        "Contrôle directif"
      ],
      "reponse": 1,
      "explication": "Un contrôle compensatoire est déployé en complément ou en remplacement d'un contrôle principal, notamment en cas de défaillance de celui-ci : le gardien compense la panne du système de badges. Un contrôle correctif ramènerait le système à la normale, un contrôle directif oriente les comportements, et un contrôle de récupération restaure après un dommage important.",
      "difficulte": 2,
      "pourquoi": [
        "Hors sujet : la récupération vise le retour à l'état normal après sinistre, pas la couverture d'une défaillance ponctuelle d'un contrôle.",
        "Correcte : le gardien remplace temporairement un contrôle principal défaillant en offrant une protection équivalente — définition du contrôle compensatoire.",
        "Piège de phase : un contrôle correctif répare après un incident (ex. restauration), il ne se substitue pas à un contrôle en panne.",
        "Trop étroit : un contrôle directif oriente les comportements (panneaux, politiques), il ne vérifie pas les identités."
      ]
    },
    {
      "q": "Quelle réglementation impose la notification d'une violation de données personnelles à l'autorité de contrôle dans les 72 heures suivant sa découverte ?",
      "choix": [
        "SOX",
        "HIPAA",
        "GDPR",
        "PCI DSS"
      ],
      "reponse": 2,
      "explication": "Le GDPR impose la notification à l'autorité de contrôle compétente sous 72 heures. HIPAA (via HITECH) prévoit un délai de 60 jours pour notifier les individus affectés, SOX concerne l'exactitude des informations financières des sociétés cotées, et PCI DSS est un standard contractuel de protection des données de cartes sans délai légal de notification.",
      "difficulte": 1,
      "pourquoi": [
        "Hors périmètre : SOX encadre l'information financière des sociétés cotées, pas les violations de données personnelles.",
        "Piège de régime : HIPAA/HITECH impose 60 jours pour les données de santé américaines, pas 72 heures.",
        "Correcte : l'article 33 du GDPR impose la notification à l'autorité de contrôle dans les 72 heures suivant la découverte.",
        "Hors sujet : PCI DSS est un standard contractuel de protection des cartes de paiement, sans délai légal de notification de 72 heures."
      ]
    },
    {
      "q": "Une entreprise américaine sans aucune présence physique en Europe vend en ligne à des clients résidant en France. Est-elle soumise au GDPR ?",
      "choix": [
        "Oui, mais uniquement si elle stocke les données en Europe",
        "Non, car elle n'a pas d'établissement dans l'UE",
        "Non, si elle a moins de 250 salariés",
        "Oui, car elle traite les données personnelles de résidents de l'UE"
      ],
      "reponse": 3,
      "explication": "Le GDPR a une portée extraterritoriale : il s'applique à toute organisation, où qu'elle soit, qui traite les données personnelles de résidents de l'Union européenne. Ni l'absence d'établissement dans l'UE, ni la taille de l'entreprise, ni la localisation du stockage n'exemptent l'organisation de ses obligations.",
      "difficulte": 2,
      "pourquoi": [
        "Critère hors sujet : le lieu de stockage des données ne conditionne pas l'applicabilité du GDPR, c'est la personne concernée qui compte.",
        "Critère erroné : le GDPR s'applique aussi sans établissement dans l'UE dès lors que l'on cible des résidents européens (article 3.2).",
        "Fausse exemption : le seuil de 250 salariés allège seulement certaines obligations documentaires, il n'exonère pas de l'application du règlement.",
        "Correcte : la portée extraterritoriale du GDPR couvre toute offre de biens ou services à des résidents de l'UE, où que soit l'entreprise."
      ]
    },
    {
      "q": "Un hôpital subit une violation touchant les données de santé (PHI) de 800 patients. Selon la règle de notification HIPAA/HITECH, que doit-il faire ?",
      "choix": [
        "Notifier les patients, le HHS et les médias dans les 60 jours",
        "Notifier l'autorité européenne dans les 72 heures",
        "Notifier uniquement les patients affectés, sans délai imposé",
        "Aucune notification n'est requise en dessous de 1 000 patients"
      ],
      "reponse": 0,
      "explication": "HITECH impose la notification des individus affectés, du Department of Health and Human Services et, lorsque plus de 500 personnes sont touchées, des médias, le tout dans les 60 jours suivant la découverte. Le délai de 72 heures relève du GDPR, et il n'existe pas de seuil de 1 000 patients exemptant de notification.",
      "difficulte": 2,
      "pourquoi": [
        "Correcte : au-delà de 500 personnes affectées, la règle impose de notifier les individus, le HHS et les médias dans les 60 jours.",
        "Piège de régime : les 72 heures sont l'exigence du GDPR européen, pas de HIPAA/HITECH.",
        "Trop faible : HITECH impose un délai maximal de 60 jours et des notifications au-delà des seuls patients.",
        "Faux seuil : aucune franchise à 1 000 patients n'existe ; le seuil pertinent est 500, déjà dépassé ici."
      ]
    },
    {
      "q": "Qu'est-ce qui oblige un commerçant à respecter PCI DSS ?",
      "choix": [
        "Une loi fédérale sur les paiements électroniques",
        "Le contrat commercial conclu avec sa banque acquéreuse",
        "Un règlement de la banque centrale",
        "Une directive de l'organisme de certification ISO"
      ],
      "reponse": 1,
      "explication": "PCI DSS est un standard industriel dont le respect est imposé par les termes du contrat entre le commerçant qui accepte les cartes et la banque qui traite ses transactions. Ce n'est ni une loi ni un règlement gouvernemental : sa force vient de l'obligation contractuelle et du risque de perdre la capacité d'accepter les paiements par carte.",
      "difficulte": 1,
      "pourquoi": [
        "Fausse source d'autorité : aucune loi fédérale américaine n'impose PCI DSS, c'est un standard privé.",
        "Correcte : PCI DSS s'impose par le contrat entre le commerçant et sa banque acquéreuse, sous peine de pénalités et de perte du droit d'encaisser les cartes.",
        "Fausse source d'autorité : les banques centrales ne réglementent pas PCI DSS.",
        "Confusion d'organismes : ISO n'a aucun rôle dans PCI DSS, géré par le PCI Security Standards Council et appliqué contractuellement."
      ]
    },
    {
      "q": "Quelle loi américaine exige que les dirigeants de sociétés cotées certifient PERSONNELLEMENT l'exactitude des informations financières, sous peine de sanctions pénales ?",
      "choix": [
        "GLBA",
        "FISMA",
        "COPPA",
        "SOX"
      ],
      "reponse": 3,
      "explication": "Sarbanes-Oxley (SOX) gouverne les sociétés cotées en bourse et impose à la direction de certifier individuellement l'exactitude des états financiers, avec des sanctions pénales en cas de violation. GLBA vise les institutions financières, FISMA les agences fédérales, et COPPA la protection des données des enfants de moins de 13 ans en ligne.",
      "difficulte": 2,
      "pourquoi": [
        "Hors périmètre : GLBA protège les données financières des clients des institutions financières, sans certification personnelle des dirigeants.",
        "Hors périmètre : FISMA encadre la sécurité des systèmes d'information fédéraux, pas la communication financière des sociétés cotées.",
        "Hors sujet : COPPA protège les données des enfants de moins de 13 ans en ligne.",
        "Correcte : SOX (Sarbanes-Oxley) rend les dirigeants pénalement responsables de l'exactitude des états financiers qu'ils certifient personnellement."
      ]
    },
    {
      "q": "Le code source d'un algorithme propriétaire constitue l'avantage concurrentiel majeur d'une entreprise, qui souhaite le protéger sans jamais le divulguer publiquement. Quel mécanisme de propriété intellectuelle est le PLUS approprié ?",
      "choix": [
        "Copyright",
        "Trademark",
        "Trade secret",
        "Patent"
      ],
      "reponse": 2,
      "explication": "Le trade secret protège les secrets d'affaires critiques tant qu'ils restent confidentiels, sans limite de durée ni divulgation publique. Un brevet obligerait à publier l'invention et expire, le copyright protège l'expression de l'œuvre mais pas l'idée et n'empêche pas l'ingénierie inverse indépendante, et la marque protège des signes distinctifs, pas des procédés.",
      "difficulte": 2,
      "pourquoi": [
        "Trop étroit : le copyright protège l'expression du code contre la copie, pas l'idée ni l'algorithme, et n'empêche pas la redécouverte indépendante.",
        "Hors sujet : la marque protège les signes distinctifs commerciaux, pas un algorithme.",
        "Correcte : le trade secret protège indéfiniment une information gardée confidentielle par des mesures raisonnables, sans aucune divulgation.",
        "Contre-productif ici : un brevet impose la divulgation publique de l'invention, exactement ce que l'entreprise refuse."
      ]
    },
    {
      "q": "Une enquête interne des ressources humaines vise à déterminer si un employé a violé la politique d'usage acceptable. Quel type d'enquête est-ce, et quel est son niveau de formalisme ?",
      "choix": [
        "Administrative — le formalisme le plus faible",
        "Réglementaire — formalisme imposé par le régulateur",
        "Civile — prépondérance de la preuve",
        "Criminelle — le formalisme le plus élevé"
      ],
      "reponse": 0,
      "explication": "Une enquête interne portant sur une violation de politique d'organisation est une enquête administrative : menée à des fins internes, elle a les standards de documentation et de procédure les moins stricts. Les enquêtes criminelles exigent le formalisme maximal (preuve au-delà du doute raisonnable), les réglementaires sont conduites par un régulateur, et les civiles opposent deux parties devant un tribunal.",
      "difficulte": 1,
      "pourquoi": [
        "Correcte : une enquête interne RH est administrative, avec le formalisme le plus faible car les sanctions restent internes (jusqu'au licenciement).",
        "Hors sujet : aucune autorité de régulation n'est impliquée dans une affaire de politique interne.",
        "Mauvaise catégorie : la prépondérance de la preuve caractérise le civil, qui oppose des parties devant un tribunal, pas une procédure interne.",
        "Piège d'échelle inversée : l'enquête criminelle exige le standard de preuve le plus élevé, mais ce n'est pas la nature d'une enquête RH interne."
      ]
    },
    {
      "q": "Dans le cadre d'une enquête menée par la SEC contre votre entreprise, un cadre propose de « faire le ménage » dans certains e-mails. Quelle est la MEILLEURE réponse du RSSI ?",
      "choix": [
        "Accepter, car les e-mails internes appartiennent à l'entreprise",
        "Refuser : dans une enquête réglementaire, l'organisation doit coopérer et ne détruire aucune preuve",
        "Accepter si le service juridique donne un accord verbal",
        "Reporter la décision à la fin de l'enquête"
      ],
      "reponse": 1,
      "explication": "Dans une enquête réglementaire, l'organisation a l'obligation légale de coopérer, ce qui interdit de dissimuler ou de détruire des preuves : la destruction d'e-mails constituerait une obstruction passible de sanctions graves. Aucun accord interne, verbal ou différé, ne peut légitimer la destruction de preuves.",
      "difficulte": 2,
      "pourquoi": [
        "Techniquement vrai mais juridiquement fatal : la propriété des e-mails n'autorise pas leur destruction lorsqu'une enquête réglementaire est ouverte (obstruction).",
        "Correcte : dès l'ouverture d'une enquête réglementaire, l'organisation doit préserver les preuves (legal hold) ; détruire des e-mails constituerait une obstruction pénalement sanctionnable.",
        "Faux garde-fou : un accord verbal du juridique ne rend pas licite la destruction de preuves sous enquête.",
        "Hors délai : reporter la décision maintient le risque de destruction ; l'obligation de préservation s'applique immédiatement."
      ]
    },
    {
      "q": "Quel canon du Code of Ethics ISC² doit primer lorsqu'il entre en conflit avec les intérêts de votre employeur ?",
      "choix": [
        "Provide diligent and competent service to principals",
        "Protect society, the common good, necessary public trust and confidence, and the infrastructure",
        "Advance and protect the profession",
        "Act honorably, honestly, justly, responsibly, and legally"
      ],
      "reponse": 1,
      "explication": "Les canons du code ISC² sont ordonnés par priorité : le premier, protéger la société et le bien commun, prime sur tous les autres, y compris le service aux mandants (canon III, qui couvre les employeurs). En cas de conflit, l'intérêt de la société l'emporte donc sur celui de l'employeur.",
      "difficulte": 2,
      "pourquoi": [
        "Piège du devoir de loyauté : servir ses mandants est justement le canon qui cède face à la protection de la société.",
        "Correcte : le canon I (protéger la société, le bien commun et les infrastructures) prime sur tous les autres en cas de conflit, y compris avec l'employeur.",
        "Mauvais rang : ce canon arrive en dernier dans l'ordre de préséance.",
        "Rang intermédiaire : agir honorablement est le canon II, subordonné au canon I dans l'ordre de préséance."
      ]
    },
    {
      "q": "Qui peut déposer une plainte pour violation du canon III (« Provide diligent and competent service to principals ») du code d'éthique ISC² ?",
      "choix": [
        "Uniquement un employeur ou une personne liée par une relation contractuelle",
        "Uniquement un autre titulaire du CISSP",
        "Uniquement le comité d'éthique d'ISC²",
        "Tout membre du public"
      ],
      "reponse": 0,
      "explication": "Pour le canon III, seuls un employeur ou une personne ayant une relation contractuelle avec le professionnel peuvent porter plainte, car ce canon protège les mandants. Tout membre du public peut porter plainte au titre des canons I et II, et toute personne soumise à un code d'éthique professionnel peut le faire pour le canon IV.",
      "difficulte": 3,
      "pourquoi": [
        "Correcte : seules les personnes liées par une relation d'emploi ou de contrat (les principals) peuvent se plaindre d'un manquement au devoir de service diligent.",
        "Critère erroné : la qualité de professionnel soumis à un code d'éthique est exigée pour les plaintes du canon IV, pas du canon III.",
        "Confusion de rôles : le comité d'éthique instruit les plaintes, il ne détient pas le monopole de leur dépôt.",
        "Trop large : le public peut dénoncer les atteintes aux canons I et II, mais pas au canon III qui relève de la relation de service."
      ]
    },
    {
      "q": "Votre organisation exige que tous les postes de travail Windows soient configurés selon un modèle de durcissement minimal appliqué via GPO. Ce document de référence est :",
      "choix": [
        "Une policy",
        "Une procedure",
        "Une guideline",
        "Une baseline"
      ],
      "reponse": 3,
      "explication": "Une baseline définit le niveau minimal de sécurité que chaque système d'un type donné doit atteindre, souvent déclinée en configurations appliquées par GPO ou par des outils de gestion de configuration. La policy est stratégique, la guideline est une recommandation facultative, et la procedure décrit des étapes d'exécution pas à pas.",
      "difficulte": 1,
      "pourquoi": [
        "Trop haut niveau : la policy exprime l'intention et les objectifs de la direction, pas un modèle de configuration technique.",
        "Mauvais grain : une procédure décrit des étapes pas à pas, pas un état de configuration de référence.",
        "Trop faible : une guideline est facultative, or ce modèle de durcissement est exigé pour tous les postes.",
        "Correcte : une baseline définit le niveau minimal de configuration sécurisée imposé uniformément à une catégorie de systèmes."
      ]
    },
    {
      "q": "Quelle affirmation distingue le MIEUX un standard d'une guideline ?",
      "choix": [
        "Le standard est facultatif, la guideline est obligatoire",
        "Le standard décrit des étapes détaillées, la guideline des objectifs stratégiques",
        "Le standard est obligatoire et uniforme, la guideline est une recommandation flexible",
        "Le standard découle d'une exigence externe, la guideline d'une exigence interne"
      ],
      "reponse": 2,
      "explication": "Les standards sont des exigences obligatoires qui imposent un usage homogène des technologies et contrôles dans toute l'organisation, tandis que les guidelines sont des recommandations flexibles et non contraignantes. Les étapes détaillées relèvent des procédures, et les objectifs stratégiques des policies rédigées par la direction.",
      "difficulte": 1,
      "pourquoi": [
        "Inversion pure : c'est la guideline qui est facultative et le standard qui est obligatoire.",
        "Confusion de granularité : les étapes détaillées relèvent de la procédure et les objectifs stratégiques de la policy, pas de la distinction standard/guideline.",
        "Correcte : le standard impose des exigences uniformes et contraignantes, la guideline formule des recommandations flexibles et facultatives.",
        "Faux critère d'origine : les deux documents peuvent découler d'exigences internes comme externes ; c'est leur caractère contraignant qui les distingue."
      ]
    },
    {
      "q": "Avant de finaliser l'acquisition d'une autre société, quelle démarche le RSSI devrait-il recommander EN PREMIER ?",
      "choix": [
        "Déployer l'EDR de l'acquéreur sur tous les postes de la cible",
        "Mener une Due Diligence de sécurité sur l'environnement IT de la cible",
        "Résilier les contrats fournisseurs de la cible",
        "Fusionner immédiatement les annuaires d'identités"
      ],
      "reponse": 1,
      "explication": "L'état de l'environnement IT à intégrer étant inconnu, la première étape est la Due Diligence : évaluer les risques, la posture de sécurité, les éventuelles compromissions et les obligations de conformité de la cible. Fusionner les identités ou déployer des outils avant cette évaluation exposerait l'acquéreur à des risques non mesurés.",
      "difficulte": 2,
      "pourquoi": [
        "Réponse de technicien : déployer un EDR est une mesure opérationnelle qui ne se décide qu'après l'évaluation des risques et la conclusion de l'opération.",
        "Correcte : avant de finaliser l'acquisition, il faut évaluer les risques de la cible (dettes de sécurité, compromissions, conformité) — c'est la Due Diligence.",
        "Décision non étayée : résilier les contrats fournisseurs sans évaluation préalable pourrait détruire de la valeur et n'est pas une étape de Due Diligence.",
        "Hors phase : fusionner les identités est une action d'intégration post-acquisition, prématurée avant toute évaluation."
      ]
    },
    {
      "q": "Dans le modèle STRIDE, une attaque par SYN flood qui rend un service web inaccessible relève de quelle catégorie ?",
      "choix": [
        "Denial of Service",
        "Tampering",
        "Information Disclosure",
        "Spoofing"
      ],
      "reponse": 0,
      "explication": "Le SYN flood perturbe le three-way handshake TCP pour empêcher l'usage légitime d'une ressource : c'est un déni de service, la catégorie D de STRIDE, qui attaque la disponibilité. Le spoofing usurpe une identité, le tampering altère des données et l'information disclosure divulgue des informations confidentielles.",
      "difficulte": 1,
      "pourquoi": [
        "Correcte : rendre un service inaccessible en le saturant est l'atteinte à la disponibilité que STRIDE classe en Denial of Service.",
        "Mauvaise catégorie : le tampering modifie des données ou du code, il ne rend pas un service indisponible.",
        "Mauvaise catégorie : l'Information Disclosure expose des données confidentielles, ce que ne fait pas un flood.",
        "Mauvaise catégorie : le spoofing usurpe une identité, or le SYN flood ne se fait passer pour personne, il sature le service."
      ]
    },
    {
      "q": "Votre équipe a identifié une longue liste de menaces avec STRIDE et doit maintenant décider lesquelles traiter en priorité. Quelle approche est la PLUS appropriée ?",
      "choix": [
        "Décomposer l'application avec la reduction analysis",
        "Recommencer l'identification avec PASTA",
        "Consulter les flux STIX/TAXII",
        "Noter chaque menace avec les critères DREAD"
      ],
      "reponse": 3,
      "explication": "DREAD (Damage, Reproducibility, Exploitability, Affected users, Discoverability) sert précisément à noter et prioriser des menaces déjà identifiées : STRIDE catégorise, DREAD priorise. PASTA est une méthodologie complète qui referait le travail, la reduction analysis sert à décomposer le système en amont, et STIX/TAXII concernent le partage de renseignement sur les menaces.",
      "difficulte": 2,
      "pourquoi": [
        "Hors phase : la reduction analysis sert à décomposer le système en amont de l'identification, pas à hiérarchiser les menaces.",
        "Hors phase : PASTA est une méthodologie complète d'identification et d'analyse ; la relancer n'aide pas à prioriser une liste déjà établie.",
        "Hors sujet : STIX/TAXII servent à échanger du renseignement sur les menaces, pas à prioriser une liste interne.",
        "Correcte : DREAD fournit une notation (Damage, Reproducibility, Exploitability, Affected users, Discoverability) qui permet de classer et prioriser les menaces identifiées."
      ]
    },
    {
      "q": "Quelle méthodologie de threat modeling se déroule en sept étapes, de la définition des objectifs jusqu'à l'analyse et la gestion du risque, en passant par la simulation d'attaques ?",
      "choix": [
        "DREAD",
        "VAST",
        "PASTA",
        "STRIDE"
      ],
      "reponse": 2,
      "explication": "PASTA (Process for Attack Simulation and Threat Analysis) est la méthodologie en sept étapes centrée sur le risque, qui va des objectifs métier à la gestion du risque en passant par la décomposition de l'application et la simulation d'attaques. STRIDE catégorise les menaces, DREAD les priorise, et VAST intègre le threat modeling dans les environnements agiles à grande échelle.",
      "difficulte": 2,
      "pourquoi": [
        "Mauvais modèle : DREAD est une grille de notation en cinq critères, pas une méthodologie séquentielle.",
        "Mauvais modèle : VAST vise le passage à l'échelle en environnement agile, sans structure canonique en sept étapes.",
        "Correcte : PASTA (Process for Attack Simulation and Threat Analysis) déroule sept étapes, des objectifs métier à la gestion du risque en passant par la simulation d'attaques.",
        "Mauvais modèle : STRIDE est une taxonomie de six catégories de menaces, pas un processus en sept étapes."
      ]
    },
    {
      "q": "Un fabricant découvre que des composants contrefaits ont été introduits par un sous-traitant de rang 2 dans ses serveurs. Quelle discipline vise à prévenir ce type de risque ?",
      "choix": [
        "Business Continuity Planning",
        "Data Loss Prevention",
        "Supply Chain Risk Management",
        "Security Control Assessment"
      ],
      "reponse": 2,
      "explication": "Le Supply Chain Risk Management (SCRM) vise à garantir que chaque maillon de la chaîne d'approvisionnement est fiable, auditable et responsable devant le suivant, précisément pour prévenir contrefaçons, sabotages et implants. Le BCP traite la continuité d'activité, le SCA évalue les contrôles internes, et le DLP prévient les fuites de données.",
      "difficulte": 1,
      "pourquoi": [
        "Hors sujet : le BCP maintient l'activité en cas de perturbation, il ne prévient pas l'introduction de composants contrefaits.",
        "Hors sujet : le DLP prévient la fuite de données, pas l'entrée de matériel contrefait.",
        "Correcte : le Supply Chain Risk Management couvre précisément les risques issus des fournisseurs et sous-traitants de tous rangs, dont la contrefaçon de composants.",
        "Trop étroit : l'évaluation des contrôles mesure l'efficacité de contrôles existants, elle ne gouverne pas les risques fournisseurs."
      ]
    },
    {
      "q": "Quel est l'objectif PRINCIPAL d'une Business Impact Analysis (BIA) ?",
      "choix": [
        "Identifier les processus critiques et évaluer l'impact de leur interruption",
        "Chiffrer le budget annuel de la sécurité",
        "Attribuer les rôles de l'équipe de gestion de crise",
        "Tester le plan de reprise après sinistre"
      ],
      "reponse": 0,
      "explication": "La BIA identifie les systèmes et processus dont l'entreprise dépend, évalue l'impact d'une interruption et établit les priorités de récupération ainsi que les métriques RTO, RPO et MTD. Les tests du DRP et l'organisation de crise interviennent dans d'autres phases, et le budget sécurité n'est pas l'objet de la BIA.",
      "difficulte": 1,
      "pourquoi": [
        "Correcte : la BIA identifie les processus critiques et quantifie l'impact de leur interruption dans le temps (MTD, RTO, RPO).",
        "Hors sujet : le budget annuel de la sécurité est un exercice de gestion, pas l'objectif d'une BIA.",
        "Trop étroit : l'attribution des rôles de crise relève du développement du plan, pas de l'analyse d'impact.",
        "Hors phase : les tests du DRP interviennent bien après, une fois les plans construits sur les résultats de la BIA."
      ]
    },
    {
      "q": "La direction déclare qu'une interruption du système de facturation au-delà de 48 heures menacerait la survie de l'entreprise. Quelle métrique cette valeur représente-t-elle ?",
      "choix": [
        "RPO",
        "MTD",
        "MTTR",
        "RTO"
      ],
      "reponse": 1,
      "explication": "Le Maximum Tolerable Downtime (MTD) est la durée maximale d'interruption d'une fonction critique au-delà de laquelle l'organisation cesse d'être viable : ici 48 heures. Le RTO est l'objectif de restauration, qui doit être fixé en dessous du MTD ; le RPO mesure la perte de données acceptable et le MTTR le temps moyen de réparation d'un équipement.",
      "difficulte": 2,
      "pourquoi": [
        "Mauvaise dimension : le RPO mesure la perte de données admissible, pas la durée d'interruption tolérable.",
        "Correcte : la durée maximale d'indisponibilité au-delà de laquelle la survie de l'organisation est menacée est le Maximum Tolerable Downtime.",
        "Hors sujet : le MTTR est une métrique de maintenance (temps moyen de réparation), pas un seuil de tolérance métier.",
        "Nuance clé : le RTO est l'objectif de restauration fixé par l'équipe, nécessairement inférieur au seuil de survie évoqué ici."
      ]
    },
    {
      "q": "Lors de l'élaboration du BCP, quelle étape doit être réalisée EN PREMIER ?",
      "choix": [
        "La formation du personnel au plan",
        "La Business Impact Analysis",
        "Le développement de la stratégie de continuité",
        "Le cadrage du projet et l'obtention du soutien de la direction"
      ],
      "reponse": 3,
      "explication": "Le processus BCP suit quatre étapes : d'abord le cadrage du projet (business case, soutien de la direction, constitution de l'équipe), puis la BIA, puis la planification de la continuité, et enfin l'approbation et la mise en œuvre incluant la formation. Sans le soutien de la direction obtenu au cadrage, rien d'autre n'aboutit.",
      "difficulte": 2,
      "pourquoi": [
        "Hors phase : la formation intervient en fin de cycle, une fois le plan développé et approuvé.",
        "Piège de séquence : la BIA est une étape majeure, mais elle suppose un projet déjà cadré et soutenu par la direction.",
        "Hors phase : la stratégie de continuité se construit à partir des résultats de la BIA, donc encore plus tard.",
        "Correcte : tout BCP commence par le cadrage du projet (périmètre, équipe) et l'obtention du soutien formel de la direction, sans lequel rien ne tient."
      ]
    },
    {
      "q": "Un nouveau commercial rejoint l'entreprise. Quel est le MEILLEUR moment pour lui faire suivre la formation de sensibilisation à la sécurité ?",
      "choix": [
        "Dès son arrivée, pendant l'onboarding",
        "Uniquement s'il accède à des données sensibles",
        "Après sa période d'essai",
        "Lors de la campagne annuelle de formation"
      ],
      "reponse": 0,
      "explication": "Tous les nouveaux employés doivent recevoir la formation de sensibilisation dès l'onboarding, afin de connaître les standards, guidelines et procédures avant d'utiliser les systèmes, puis une remise à niveau au moins annuelle. Attendre la campagne annuelle ou la fin de la période d'essai laisserait une fenêtre d'exposition, et la sensibilisation concerne tout le personnel, pas seulement ceux qui traitent des données sensibles.",
      "difficulte": 1,
      "pourquoi": [
        "Correcte : la sensibilisation doit faire partie de l'onboarding, avant que l'employé n'accède aux systèmes et ne devienne une cible.",
        "Faux critère : tout employé disposant d'un compte est une cible de social engineering, pas seulement ceux qui touchent aux données sensibles.",
        "Trop tardif : la période d'essai n'exonère pas des risques ; l'employé a déjà des accès dès le premier jour.",
        "Trop tardif : attendre la campagne annuelle laisse le nouvel arrivant vulnérable pendant des mois."
      ]
    },
    {
      "q": "Quel indicateur reflète le MIEUX l'amélioration de l'efficacité d'un programme de sensibilisation au phishing ?",
      "choix": [
        "Le nombre de campagnes de phishing simulé envoyées",
        "Le nombre d'employés ayant assisté à la formation annuelle",
        "Le budget alloué au programme de formation",
        "L'évolution du taux de clic et du taux de signalement lors des campagnes simulées"
      ],
      "reponse": 3,
      "explication": "L'efficacité se mesure par les résultats comportementaux : la baisse du taux de clic et la hausse du taux de signalement des e-mails de phishing simulés montrent un vrai changement. Le nombre de campagnes, le budget et la simple assiduité sont des indicateurs d'activité ou de moyens, pas des preuves d'efficacité.",
      "difficulte": 2,
      "pourquoi": [
        "Mesure d'activité, pas d'efficacité : envoyer plus de campagnes ne prouve aucun changement de comportement.",
        "Mesure de présence : assister à une formation ne démontre pas l'acquisition des bons réflexes.",
        "Mesure de moyens : le budget ne dit rien des résultats obtenus.",
        "Correcte : la baisse du taux de clic et la hausse du taux de signalement mesurent un changement de comportement réel, donc l'efficacité du programme."
      ]
    },
    {
      "q": "Un attaquant appelle le standard en se faisant passer pour un collègue du service informatique et invoque une urgence pour obtenir un mot de passe. Quels principes de social engineering exploite-t-il PRINCIPALEMENT ?",
      "choix": [
        "Rareté et consensus",
        "Autorité et gamification",
        "Familiarité et urgence",
        "Intimidation et rareté"
      ],
      "reponse": 2,
      "explication": "Se présenter comme un collègue exploite la familiarité, la confiance naturelle envers ce qui est connu, et l'invocation d'une urgence pousse la victime à agir sans réfléchir. La gamification est une technique de formation, pas d'attaque, et ni la rareté, ni le consensus, ni l'intimidation ne sont au premier plan dans ce scénario.",
      "difficulte": 2,
      "pourquoi": [
        "Mauvais leviers : ni la rareté ni la preuve sociale (consensus) ne sont mobilisées dans cet appel.",
        "Mélange : l'autorité pourrait jouer, mais la gamification n'a rien à voir avec ce scénario.",
        "Correcte : se faire passer pour un collègue joue la familiarité, et l'« urgence » invoquée court-circuite la réflexion critique de la victime.",
        "Mauvais leviers : aucune menace (intimidation) ni offre limitée (rareté) n'est exploitée ici."
      ]
    },
    {
      "q": "Quelle est la distinction correcte entre risk appetite et risk tolerance ?",
      "choix": [
        "L'appetite s'applique aux projets, la tolerance à l'organisation entière",
        "L'appetite est le risque total que l'organisation accepte de prendre, la tolerance est la variation acceptable autour d'un objectif donné",
        "L'appetite est le maximum absorbable, la tolerance est le total accepté",
        "Les deux termes sont strictement synonymes"
      ],
      "reponse": 1,
      "explication": "Le risk appetite est la quantité totale de risque qu'une organisation est prête à accepter pour atteindre sa mission ; la risk tolerance est la variation acceptable des résultats par rapport à un objectif spécifique. Le maximum absorbable correspond à la risk capacity. Les deux notions ne sont donc ni synonymes ni inversées.",
      "difficulte": 3,
      "pourquoi": [
        "Faux partage : les deux notions s'appliquent à tous les niveaux, ce n'est pas une répartition projet/organisation.",
        "Correcte : l'appetite est le niveau global de risque que l'organisation accepte pour sa mission ; la tolerance est la variation admise autour d'un objectif particulier.",
        "Inversion et confusion : le « maximum absorbable » définit la risk capacity, et les définitions sont interverties.",
        "Absolu erroné : les deux notions sont liées mais distinctes, l'une globale, l'autre locale."
      ]
    },
    {
      "q": "Dans le NIST Risk Management Framework (RMF), quelle étape suit immédiatement l'implémentation des contrôles ?",
      "choix": [
        "Assess",
        "Authorize",
        "Categorize",
        "Select"
      ],
      "reponse": 0,
      "explication": "Les sept étapes du RMF sont : Prepare, Categorize, Select, Implement, Assess, Authorize, Monitor. Après l'implémentation, on évalue (Assess) que les contrôles sont correctement mis en œuvre et produisent les résultats attendus, avant d'autoriser le système (Authorize) puis de le surveiller en continu (Monitor).",
      "difficulte": 3,
      "pourquoi": [
        "Correcte : après Implement vient Assess — l'évaluation de la bonne mise en œuvre et de l'efficacité des contrôles.",
        "Trop tôt : l'autorisation (Authorize) ne peut être prononcée qu'après l'évaluation des contrôles.",
        "Hors séquence : la catégorisation ouvre le cycle RMF, bien avant l'implémentation.",
        "Hors séquence : la sélection des contrôles précède leur implémentation."
      ]
    },
    {
      "q": "Dans un Risk Maturity Model, une organisation où chaque département évalue les risques à sa manière, sans cadre commun, se situe à quel niveau ?",
      "choix": [
        "Defined",
        "Ad hoc",
        "Integrated",
        "Preliminary"
      ],
      "reponse": 3,
      "explication": "Au niveau Preliminary, des tentatives de suivre des processus de gestion des risques existent, mais chaque département procède à sa façon, sans cadre standardisé. Ad hoc désigne le chaos initial sans aucune démarche, Defined marque l'adoption d'un cadre commun à toute l'organisation, et Integrated l'intégration du risque dans les processus métier avec des métriques.",
      "difficulte": 3,
      "pourquoi": [
        "Trop avancé : Defined suppose justement un cadre commun standardisé à toute l'organisation, absent ici.",
        "Piège de niveau : ad hoc désigne le point de départ chaotique où rien n'est formalisé ; ici, des évaluations existent déjà, mais sans cadre commun.",
        "Trop avancé : Integrated implique des métriques consolidées et l'intégration du risque dans la décision métier.",
        "Correcte : le niveau Preliminary se caractérise par des tentatives disparates, chaque département évaluant les risques à sa façon."
      ]
    },
    {
      "q": "Quel document permet de suivre dans la durée les risques identifiés, leur criticité, les réponses décidées et l'avancement de leur traitement ?",
      "choix": [
        "La BIA",
        "Le SBOM",
        "Le risk register",
        "La security policy"
      ],
      "reponse": 2,
      "explication": "Le risk register (ou risk log) inventorie tous les risques identifiés et sert à enregistrer et suivre les activités de gestion des risques : évaluation de la gravité, priorisation, réponses prescrites et avancement de la mitigation. La BIA évalue l'impact des interruptions, le SBOM inventorie les composants logiciels, et la policy fixe les objectifs stratégiques de sécurité.",
      "difficulte": 1,
      "pourquoi": [
        "Hors sujet : la BIA analyse l'impact des interruptions, elle ne trace pas le suivi des risques dans la durée.",
        "Hors sujet : le SBOM inventorie les composants logiciels, pas les risques.",
        "Correcte : le risk register consigne chaque risque, sa criticité, son propriétaire, la réponse retenue et l'avancement du traitement.",
        "Mauvais grain : la policy fixe les orientations, elle n'assure pas le suivi opérationnel des risques."
      ]
    },
    {
      "q": "Votre PDG demande pourquoi l'entreprise devrait viser la conformité PCI DSS alors qu'aucune loi ne l'y oblige. Quelle est la MEILLEURE réponse ?",
      "choix": [
        "La certification ISO 27001 déjà obtenue couvre l'essentiel des exigences de PCI DSS",
        "Le contrat avec la banque l'exige, et la non-conformité expose à des pénalités et à la perte du droit d'accepter les cartes",
        "La conformité transférerait à la banque émettrice la responsabilité des fraudes par carte",
        "Une auto-évaluation annuelle (SAQ) suffit à éteindre le risque contractuel"
      ],
      "reponse": 1,
      "explication": "Même sans force de loi, PCI DSS s'impose par le contrat avec la banque acquéreuse : la non-conformité entraîne des pénalités contractuelles, une responsabilité accrue en cas de violation, et potentiellement la perte de la capacité d'accepter les paiements par carte, ce qui menace directement le chiffre d'affaires. ISO 27001 ne remplace pas les exigences prescriptives de PCI DSS, la conformité ne transfère pas la responsabilité des fraudes, et le mode de validation (SAQ ou audit QSA) dépend du niveau du commerçant sans supprimer l'exposition contractuelle.",
      "difficulte": 2,
      "pourquoi": [
        "Fausse équivalence : ISO 27001 est un cadre de management générique qui ne satisfait ni les exigences prescriptives de PCI DSS ni l'obligation contractuelle.",
        "Correcte : PCI DSS s'impose par le contrat avec la banque acquéreuse ; la non-conformité expose à des pénalités, une responsabilité accrue et la perte du droit d'accepter les cartes.",
        "Faux bénéfice : la conformité ne transfère pas la responsabilité des fraudes, elle réduit le risque et les pénalités contractuelles.",
        "Trop étroit : le mode de validation (SAQ ou audit QSA) dépend du volume de transactions, et une auto-évaluation ne supprime pas l'exposition contractuelle en cas de violation."
      ]
    },
    {
      "q": "Quelle formulation résume le MIEUX la relation entre Due Care et Due Diligence ?",
      "choix": [
        "Les deux notions ne concernent que les fournisseurs",
        "La Due Care planifie, la Due Diligence exécute",
        "La Due Diligence est facultative si la Due Care est exercée",
        "La Due Care est la protection responsable des actifs ; la Due Diligence est la capacité à prouver cette Due Care"
      ],
      "reponse": 3,
      "explication": "La Due Care est la pratique responsable : appliquer les contrôles, suivre les politiques, agir raisonnablement. La Due Diligence est le volet connaissance et planification : évaluer, documenter, structurer, ce qui permet aussi de prouver que la Due Care est exercée. La première proposition inverse les rôles, et les deux devoirs sont indissociables, pour l'organisation comme pour ses dirigeants.",
      "difficulte": 2,
      "pourquoi": [
        "Trop étroit : ces notions s'appliquent à toute la gouvernance de l'organisation, pas seulement à la relation fournisseurs.",
        "Inversion séquentielle : c'est plutôt la Due Diligence (recherche, évaluation, suivi) qui établit et entretient la Due Care, pas une répartition planification/exécution.",
        "Faux : les deux sont indissociables ; sans Due Diligence, l'organisation ne peut prouver sa prudence en cas de contentieux.",
        "Correcte : la Due Care est l'exercice responsable de la protection (faire ce qu'une personne prudente ferait), la Due Diligence l'ensemble des activités qui l'établissent et la démontrent dans la durée."
      ]
    },
    {
      "q": "Le site web d'une agence gouvernementale est défiguré : la page d'accueil est remplacée par un message dénonçant la politique environnementale du pays. Quel acteur de la menace est le PLUS probable ?",
      "choix": [
        "Crime organisé",
        "Script kiddie",
        "Hacktiviste",
        "État-nation (APT)"
      ],
      "reponse": 2,
      "explication": "Un défacement accompagné d'un message revendicatif à caractère politique ou idéologique est la signature typique de l'hacktiviste : son objectif est la visibilité de sa cause. Le crime organisé cherche un gain financier et éviterait de se faire remarquer sans profit, un état-nation privilégie la furtivité et l'espionnage plutôt que la publicité, et un script kiddie agit par défi ou amusement, généralement sans message politique construit.",
      "difficulte": 1,
      "pourquoi": [
        "Mobile inadapté : le crime organisé recherche un profit financier, pas la visibilité d'un message politique.",
        "Possible techniquement mais incohérent : un script kiddie cherche le prestige facile, or le message ciblé et politique traduit une motivation idéologique.",
        "Correcte : la défiguration porteuse d'un message politique ou environnemental est la signature des hacktivistes.",
        "Sur-attribution : un APT étatique privilégie la discrétion et la persistance, pas un défacement revendicatif."
      ]
    },
    {
      "q": "Des employés d'un sous-traitant aéronautique sont compromis après avoir visité un forum professionnel spécialisé que l'attaquant avait préalablement infecté. Comment appelle-t-on cette attaque ?",
      "choix": [
        "Watering hole",
        "Baiting",
        "Spear phishing",
        "Typosquatting"
      ],
      "reponse": 0,
      "explication": "Compromettre un site tiers légitime que la population cible visite habituellement, puis attendre que les victimes s'y « abreuvent », est une attaque de type watering hole (point d'eau). Le spear phishing enverrait un message ciblé directement aux victimes, le typosquatting exploiterait un nom de domaine ressemblant au site légitime, et le baiting utiliserait un objet piégé comme une clé USB.",
      "difficulte": 2,
      "pourquoi": [
        "Correcte : infecter un site légitime fréquenté par la population cible pour la compromettre est la définition du watering hole.",
        "Vecteur différent : le baiting appâte avec un support physique ou une offre (clé USB piégée), pas un site compromis.",
        "Vecteur différent : le spear phishing passe par un message ciblé, pas par l'infection d'un site tiers légitime.",
        "Vecteur différent : le typosquatting exploite des fautes de frappe dans les noms de domaine."
      ]
    },
    {
      "q": "Un individu se présente à l'accueil en se faisant passer pour un auditeur mandaté par le siège, avec un faux ordre de mission, et obtient un accès à la salle serveur. Quelle technique d'ingénierie sociale décrit le MIEUX ce scénario ?",
      "choix": [
        "Phishing",
        "Pretexting",
        "Quid pro quo",
        "Piggybacking"
      ],
      "reponse": 1,
      "explication": "L'attaquant a construit un scénario crédible et une fausse identité (un prétexte) pour obtenir un accès : c'est du pretexting. Le phishing repose sur un message électronique frauduleux et non sur un scénario joué en personne ; le quid pro quo propose un échange de service contre des informations ; et le piggybacking consiste à franchir un accès contrôlé avec le consentement d'un employé, sans nécessairement d'identité inventée.",
      "difficulte": 2,
      "pourquoi": [
        "Mauvais canal : le phishing est électronique ; ici l'attaque se joue en personne avec un scénario fabriqué.",
        "Correcte : construire une fausse identité et un scénario crédible (auditeur mandaté, ordre de mission) est du pretexting.",
        "Mauvais mécanisme : le quid pro quo échange un service contre des informations, ce qui n'est pas le cas ici.",
        "Mauvais mécanisme : le piggybacking consiste à franchir une porte derrière un porteur de badge, avec son accord, sans scénario d'identité."
      ]
    },
    {
      "q": "Votre organisation déploie un honeypot. Le conseil juridique vous met en garde : quelle pratique rendrait les poursuites contre un attaquant IRRECEVABLES ?",
      "choix": [
        "Laisser le honeypot visible avec des vulnérabilités attrayantes (enticement)",
        "Inviter activement des personnes sans intention malveillante à pénétrer le système (entrapment)",
        "Isoler le honeypot du réseau de production",
        "Journaliser toutes les actions de l'attaquant sur le honeypot"
      ],
      "reponse": 1,
      "explication": "L'entrapment consiste à inciter une personne qui n'avait pas d'intention délictueuse à commettre l'infraction : c'est illégal et cela constitue une défense recevable qui fait échouer les poursuites. L'enticement, au contraire, se contente d'offrir une opportunité tentante à un attaquant déjà décidé : c'est légal. La journalisation et l'isolement du honeypot sont des bonnes pratiques qui renforcent, et non affaiblissent, le dossier.",
      "difficulte": 2,
      "pourquoi": [
        "Légal : l'enticement — rendre la cible attrayante pour qui a déjà l'intention d'attaquer — est admis et ne compromet pas les poursuites.",
        "Correcte : l'entrapment — pousser à l'acte une personne sans intention préalable — est une défense recevable qui fait échouer les poursuites.",
        "Bonne pratique : l'isolement du honeypot est une précaution de sécurité sans effet négatif sur la recevabilité.",
        "Bonne pratique : la journalisation renforce au contraire la valeur probante des éléments recueillis."
      ]
    },
    {
      "q": "Un employé du service comptabilité, sans aucune intention de nuire, envoie par erreur un fichier de paie complet à un destinataire externe. Comment qualifier cette menace ?",
      "choix": [
        "Advanced Persistent Threat",
        "Espionnage par un concurrent",
        "Insider threat malveillant",
        "Insider threat négligent"
      ],
      "reponse": 3,
      "explication": "Un collaborateur qui cause une fuite de données par erreur, sans intention hostile, est un insider négligent : la variante la plus fréquente de la menace interne, que l'on traite par la sensibilisation, le DLP et des contrôles préventifs. L'insider malveillant agit délibérément (vengeance, argent), le concurrent est un acteur externe motivé par l'avantage commercial, et l'APT désigne une campagne externe sophistiquée et persistante.",
      "difficulte": 1,
      "pourquoi": [
        "Sur-qualification : un APT suppose un attaquant sophistiqué et persistant, pas une erreur d'envoi.",
        "Hors sujet : aucun acteur externe ni motivation concurrentielle n'apparaît dans le scénario.",
        "Intention absente : l'employé n'a aucune volonté de nuire, il ne peut être qualifié de malveillant.",
        "Correcte : un accès légitime et une erreur sans intention : c'est l'insider négligent, cause majeure d'incidents."
      ]
    },
    {
      "q": "Quelle loi américaine criminalise principalement l'accès non autorisé aux systèmes informatiques fédéraux et des institutions financières ?",
      "choix": [
        "PATRIOT Act",
        "ECPA (Electronic Communications Privacy Act)",
        "CFAA (Computer Fraud and Abuse Act)",
        "GLBA (Gramm-Leach-Bliley Act)"
      ],
      "reponse": 2,
      "explication": "Le CFAA de 1986 est la grande loi pénale américaine contre l'accès non autorisé aux ordinateurs, en particulier ceux du gouvernement fédéral et des institutions financières. L'ECPA protège les communications électroniques contre l'interception illégale, le PATRIOT Act élargit les pouvoirs de surveillance des autorités (et aggrave les peines du CFAA) mais n'est pas la loi d'incrimination de base, et GLBA encadre la confidentialité des données dans le secteur financier.",
      "difficulte": 2,
      "pourquoi": [
        "Piège d'actualité : le PATRIOT Act a étendu des pouvoirs d'enquête après 2001, mais il n'est pas la loi fondatrice sur l'intrusion informatique.",
        "Périmètre différent : l'ECPA protège les communications électroniques contre l'interception, il ne criminalise pas l'intrusion informatique en tant que telle.",
        "Correcte : le CFAA (1986) criminalise l'accès non autorisé aux systèmes fédéraux et des institutions financières.",
        "Hors sujet : GLBA impose la protection des données financières des clients, ce n'est pas une loi pénale sur l'accès non autorisé."
      ]
    },
    {
      "q": "Un consultant CISSP découvre que son client dissimule une violation de données mettant en danger le public, et le client lui demande de garder le silence. Selon le Code of Ethics ISC², que devrait-il faire ?",
      "choix": [
        "Faire primer la protection de la société et refuser de participer à la dissimulation",
        "Respecter la confidentialité due à son client, protégée par le canon III",
        "S'en remettre au code d'éthique interne du client",
        "Attendre la fin de son contrat avant de se prononcer"
      ],
      "reponse": 0,
      "explication": "Les canons du code ISC² sont ordonnés par priorité : le canon I (protéger la société, le bien commun et la confiance du public) prime sur le canon III (servir ses mandants). Un professionnel ne peut donc pas couvrir une dissimulation qui met le public en danger au nom de la loyauté envers son client. Attendre ou s'en remettre au code interne du client reviendrait à cautionner la dissimulation et violerait aussi le canon II (agir honnêtement et légalement).",
      "difficulte": 2,
      "pourquoi": [
        "Correcte : le canon I — protéger la société et la confiance publique — prime ; participer à la dissimulation violerait l'ordre de préséance du code.",
        "Piège de loyauté : la confidentialité due aux mandants (canon III) est subordonnée au canon I lorsque le public est en danger.",
        "Fausse autorité : le code interne du client ne peut supplanter le Code of Ethics ISC² qui lie le professionnel certifié.",
        "Hors délai : attendre la fin du contrat perpétue le danger pour le public et la complicité de fait."
      ]
    },
    {
      "q": "Selon la RFC 1087 (« Ethics and the Internet »), laquelle de ces activités est explicitement considérée comme non éthique ?",
      "choix": [
        "Publier un article critiquant un protocole réseau",
        "Gaspiller délibérément des ressources (personnes, capacité, ordinateurs) via Internet",
        "Chiffrer ses communications personnelles",
        "Utiliser un logiciel open source à des fins commerciales"
      ],
      "reponse": 1,
      "explication": "La RFC 1087 qualifie de non éthique tout acte qui cherche un accès non autorisé, perturbe l'usage prévu d'Internet, gaspille des ressources (personnes, capacité, ordinateurs), détruit l'intégrité d'informations ou compromet la vie privée des utilisateurs. La critique publique d'un protocole, l'usage commercial de l'open source (dans le respect des licences) et le chiffrement de ses communications sont des activités parfaitement légitimes.",
      "difficulte": 2,
      "pourquoi": [
        "Protégée : la critique technique publiée relève du débat scientifique, pas d'un comportement non éthique.",
        "Correcte : la RFC 1087 qualifie explicitement de non éthique le gaspillage délibéré de ressources (personnes, capacité, machines) via Internet.",
        "Hors sujet : chiffrer ses communications est un exercice légitime de protection de la vie privée.",
        "Hors sujet : l'usage commercial de l'open source est une question de licence, pas d'éthique au sens de la RFC 1087."
      ]
    },
    {
      "q": "Vous fournissez depuis la France un service impliquant des données hébergées aux États-Unis et au Japon, et les lois de ces juridictions entrent en conflit. Quelle approche est généralement recommandée ?",
      "choix": [
        "Prioriser la juridiction locale depuis laquelle vous fournissez le service",
        "Choisir la loi la moins contraignante pour l'entreprise",
        "Appliquer systématiquement la loi américaine, la plus connue",
        "Suspendre le service dans les juridictions concernées jusqu'à l'harmonisation des législations"
      ],
      "reponse": 0,
      "explication": "En cas de conflit de lois entre juridictions, la recommandation classique (reprise dans le corpus ISC²) est de donner la priorité à la juridiction locale depuis laquelle le professionnel fournit le service, tout en recherchant un avis juridique pour les autres obligations. Choisir la loi la moins contraignante exposerait l'organisation à des sanctions et violerait la Due Care, suspendre le service serait disproportionné, et appliquer par défaut la loi américaine n'a aucun fondement.",
      "difficulte": 3,
      "pourquoi": [
        "Correcte : la recommandation classique est de donner priorité à la juridiction locale d'où le service est fourni, en s'appuyant sur un conseil juridique pour les autres obligations.",
        "Piège d'opportunisme : choisir la loi la moins contraignante expose à des sanctions dans les juridictions ignorées et viole la Due Care.",
        "Fausse règle : aucune primauté générale de la loi américaine n'existe ; l'applicabilité dépend des rattachements juridiques, pas de la notoriété.",
        "Absolue et disproportionnée : suspendre le service mondialement n'est pas une réponse de gestion du risque, c'est une destruction de valeur sans analyse."
      ]
    },
    {
      "q": "Qui est habilité à déposer une plainte pour violation du canon IV (« Advance and protect the profession ») du code d'éthique ISC² ?",
      "choix": [
        "Tout membre du public, sans condition",
        "Uniquement les clients liés par contrat",
        "Uniquement l'employeur du professionnel",
        "Toute personne elle-même soumise à un code d'éthique professionnel"
      ],
      "reponse": 3,
      "explication": "Pour le canon IV, la plainte peut être déposée par toute personne elle-même soumise à un code d'éthique professionnel (certifiés ISC² ou autres professionnels sous code de déontologie). Rappel des autres règles : tout membre du public peut porter plainte au titre des canons I et II, et seuls un employeur ou une personne sous relation contractuelle peuvent le faire pour le canon III.",
      "difficulte": 3,
      "pourquoi": [
        "Trop large : le grand public peut agir pour les canons I et II, mais pas pour le canon IV.",
        "Mauvais canon : les clients sous contrat sont les plaignants légitimes du canon III, pas du IV.",
        "Trop étroit : la plainte au canon IV n'est pas réservée à l'employeur, qui relève plutôt du canon III.",
        "Correcte : pour le canon IV, la plainte est ouverte à toute personne elle-même tenue par un code d'éthique professionnel (dont les certifiés ISC²)."
      ]
    },
    {
      "q": "Un professionnel certifié CISSP embellit volontairement les conclusions d'un audit de sécurité pour plaire à sa direction. Quel canon du code ISC² viole-t-il le PLUS directement ?",
      "choix": [
        "Provide diligent and competent service to principals",
        "Advance and protect the profession",
        "Act honorably, honestly, justly, responsibly, and legally",
        "Protect society, the common good, necessary public trust and confidence, and the infrastructure"
      ],
      "reponse": 2,
      "explication": "Falsifier ou embellir des conclusions d'audit est avant tout un manquement à l'honnêteté : c'est le canon II (« Act honorably, honestly, justly, responsibly, and legally ») qui est violé le plus directement. On pourrait aussi soutenir que le service rendu aux mandants n'est plus diligent (canon III), mais la question porte sur la violation la plus directe : le mensonge délibéré relève de l'honnêteté avant tout.",
      "difficulte": 2,
      "pourquoi": [
        "Plausible mais moins précis : le service aux mandants est dégradé, mais le manquement premier est le mensonge lui-même.",
        "Indirect : la profession est ternie par ricochet, ce n'est pas le canon le plus directement violé.",
        "Correcte : falsifier ou embellir des conclusions est un manquement à l'honnêteté, cœur du canon II « Act honorably, honestly… ».",
        "Moins direct : la société n'est pas la victime première d'un rapport d'audit embelli en interne."
      ]
    },
    {
      "q": "Dans l'ordre de priorité des canons du Code of Ethics ISC², lequel arrive en DERNIER ?",
      "choix": [
        "Servir ses mandants avec diligence et compétence",
        "Protéger la société et les infrastructures",
        "Faire progresser et protéger la profession",
        "Agir honorablement, honnêtement et légalement"
      ],
      "reponse": 2,
      "explication": "L'ordre des canons est significatif et exigible à l'examen : 1) protéger la société, 2) agir honorablement et légalement, 3) servir ses mandants, 4) faire progresser et protéger la profession. En cas de conflit, chaque canon prime sur les suivants : la profession passe donc après la société, la légalité et les mandants.",
      "difficulte": 1,
      "pourquoi": [
        "Troisième canon dans l'ordre de préséance.",
        "Premier de l'ordre de préséance, pas le dernier.",
        "Correcte : « Advance and protect the profession » est le quatrième et dernier canon — l'intérêt de la profession cède devant tous les autres.",
        "Deuxième canon dans l'ordre de préséance."
      ]
    },
    {
      "q": "La BIA établit un MTD de 24 heures pour le système de commandes. L'équipe technique propose un RTO de 36 heures pour réduire les coûts. Quelle est la MEILLEURE réponse du responsable de la continuité ?",
      "choix": [
        "Refuser : le RTO doit être strictement égal au MTD",
        "Accepter, à condition de réduire le RPO en compensation",
        "Accepter : le RTO est indépendant du MTD",
        "Refuser : le RTO doit toujours être inférieur ou égal au MTD"
      ],
      "reponse": 3,
      "explication": "Le MTD est la durée d'interruption au-delà de laquelle l'organisation cesse d'être viable : un objectif de restauration (RTO) supérieur au MTD signifierait planifier l'échec. Le RTO doit donc toujours être inférieur ou égal au MTD (idéalement avec une marge). Le RPO mesure la perte de données et ne compense en rien un délai de restauration trop long, et rien n'impose que RTO et MTD soient égaux.",
      "difficulte": 2,
      "pourquoi": [
        "Trop rigide : le RTO doit être inférieur ou égal au MTD, une marge de sécurité est même souhaitable ; l'égalité stricte n'est pas exigée.",
        "Faux troc : le RPO concerne la perte de données, il ne compense pas un dépassement de la durée maximale d'interruption.",
        "Faux : le RTO est précisément dérivé du MTD et doit rester en deçà, ils ne sont pas indépendants.",
        "Correcte : un RTO de 36 h dépasserait le MTD de 24 h, seuil au-delà duquel le dommage devient inacceptable ; le RTO doit être inférieur ou égal au MTD."
      ]
    },
    {
      "q": "Quelle est la PREMIÈRE étape d'une Business Impact Analysis ?",
      "choix": [
        "Évaluer la probabilité de chaque risque",
        "Identifier les priorités de l'organisation en déterminant la criticité des processus métier",
        "Calculer l'ALE de chaque actif informatique",
        "Sélectionner le site de repli"
      ],
      "reponse": 1,
      "explication": "La BIA se déroule en cinq temps : identification des priorités (criticité des processus et fonctions), identification des risques, évaluation de leur probabilité, évaluation de l'impact, puis priorisation des ressources de récupération. On ne peut pas évaluer des probabilités ni prioriser des ressources avant de savoir quels processus comptent le plus. Le choix du site de repli relève du DRP, en aval.",
      "difficulte": 2,
      "pourquoi": [
        "Hors séquence : l'évaluation de probabilité (likelihood assessment) vient après l'identification des priorités.",
        "Correcte : la BIA commence par identifier les priorités de l'organisation, en recensant les processus métier et leur criticité.",
        "Hors séquence : les calculs d'ALE relèvent des étapes d'évaluation d'impact, une fois les priorités posées.",
        "Hors phase : la sélection d'un site de repli appartient à la stratégie de continuité, bien après la BIA."
      ]
    },
    {
      "q": "Après un sinistre majeur, plusieurs systèmes doivent être restaurés. Selon la logique de priorisation issue de la BIA, lesquels devraient l'être EN PREMIER ?",
      "choix": [
        "Les services fondamentaux dont tout le reste dépend, comme le réseau et l'annuaire",
        "Les postes de travail des dirigeants",
        "Les applications métier les plus visibles des clients",
        "Les systèmes les moins coûteux à restaurer"
      ],
      "reponse": 0,
      "explication": "La restauration commence par les services d'infrastructure fondamentaux (réseau, DNS, annuaire/authentification) car aucune application métier ne peut fonctionner sans eux. Restaurer d'abord les applications visibles échouerait faute de fondations, et ni le coût de restauration ni le statut hiérarchique des utilisateurs ne sont des critères de priorisation valables.",
      "difficulte": 2,
      "pourquoi": [
        "Correcte : on restaure d'abord les services fondamentaux (réseau, annuaire, DNS) dont dépendent tous les autres systèmes.",
        "Piège hiérarchique : le confort des dirigeants n'est pas un critère de priorisation issu de la BIA.",
        "Piège de visibilité : les applications clients dépendent elles-mêmes des services d'infrastructure ; les restaurer d'abord échouerait.",
        "Faux critère : le coût de restauration n'a aucun lien avec la criticité ni les dépendances."
      ]
    },
    {
      "q": "Quel est l'objectif du Continuity of Operations Plan (COOP), livrable de la phase « provisions and processes » du BCP ?",
      "choix": [
        "Décrire comment maintenir les fonctions critiques depuis la survenue de la perturbation jusqu'à un mois d'opérations soutenues",
        "Définir la politique de sécurité de l'organisation",
        "Remplacer intégralement le DRP",
        "Décrire la restauration technique détaillée des sauvegardes"
      ],
      "reponse": 0,
      "explication": "Le COOP décrit comment l'organisation assurera ses fonctions critiques dès la survenue d'une perturbation et jusqu'à un mois d'opérations soutenues. La restauration technique des sauvegardes relève du DRP, qui complète le COOP sans être remplacé par lui, et la politique de sécurité est un document de gouvernance distinct.",
      "difficulte": 3,
      "pourquoi": [
        "Correcte : le COOP décrit le maintien des fonctions critiques depuis la perturbation jusqu'à environ un mois d'opérations soutenues.",
        "Hors sujet : la politique de sécurité est un document de gouvernance indépendant du BCP.",
        "Faux : le COOP complète le DRP, il ne le remplace pas.",
        "Mauvais grain : la restauration technique détaillée relève du DRP, pas du COOP."
      ]
    },
    {
      "q": "Le plan de continuité d'activité est finalisé. Qui devrait l'endosser formellement pour lui donner tout son poids dans l'organisation ?",
      "choix": [
        "Le RSSI",
        "Le comité d'audit interne",
        "Le dirigeant le plus haut placé de l'organisation",
        "Le responsable de la continuité d'activité"
      ],
      "reponse": 2,
      "explication": "Le BCP doit être approuvé et endossé par le plus haut dirigeant de l'organisation (CEO ou équivalent) : c'est ce qui démontre l'engagement de la direction, garantit les ressources et donne au plan son autorité en temps de crise. Le RSSI et le responsable de la continuité construisent et maintiennent le plan, et le comité d'audit le contrôle, mais aucun ne peut se substituer à l'endossement de la direction générale.",
      "difficulte": 1,
      "pourquoi": [
        "Insuffisant : la signature du RSSI n'engage pas toute l'organisation ni les ressources nécessaires.",
        "Hors rôle : le comité d'audit évalue, il n'endosse pas les plans opérationnels.",
        "Correcte : l'endossement par le plus haut dirigeant démontre l'engagement de la direction et donne au plan son autorité sur toute l'organisation.",
        "Poids insuffisant : l'auteur du plan ne peut pas lui conférer l'autorité organisationnelle requise."
      ]
    },
    {
      "q": "La direction déclare pouvoir tolérer la perte d'au maximum quinze minutes de transactions en cas d'incident. Quelle métrique vient d'être définie ?",
      "choix": [
        "MTBF",
        "RPO",
        "MTD",
        "RTO"
      ],
      "reponse": 1,
      "explication": "La quantité maximale de données que l'on accepte de perdre, exprimée en temps (ici quinze minutes de transactions), est le Recovery Point Objective. Ce RPO dictera la fréquence des sauvegardes ou de la réplication. Le RTO concerne le délai de remise en service, le MTD la durée d'interruption maximale supportable, et le MTBF la fiabilité moyenne d'un équipement.",
      "difficulte": 1,
      "pourquoi": [
        "Hors sujet : le MTBF est une métrique de fiabilité des équipements.",
        "Correcte : tolérer la perte d'au plus quinze minutes de transactions définit le point de reprise admissible — le RPO.",
        "Mauvaise dimension : le MTD est la durée maximale d'indisponibilité, pas une perte de données.",
        "Mauvaise dimension : le RTO mesure la durée de restauration du service, pas la quantité de données perdues."
      ]
    },
    {
      "q": "Quelle affirmation distingue le MIEUX le BCP du DRP ?",
      "choix": [
        "Le BCP s'active avant l'incident, le DRP uniquement après l'incident",
        "Le DRP englobe le BCP",
        "Le BCP est technique, le DRP est stratégique",
        "Le BCP est stratégique et centré sur les processus métier ; le DRP est tactique et technique (sites de repli, sauvegardes, restauration)"
      ],
      "reponse": 3,
      "explication": "Le Business Continuity Plan est stratégique : il vise à maintenir les processus métier critiques pendant et après une crise. Le Disaster Recovery Plan est son volet tactique et technique : sites de repli, sauvegardes, procédures de restauration des systèmes. C'est le BCP qui englobe conceptuellement le DRP, et non l'inverse ; la première proposition inverse les rôles.",
      "difficulte": 2,
      "pourquoi": [
        "Faux critère temporel : les deux plans se préparent avant l'incident et s'activent pendant la crise ; leur différence tient au niveau (métier vs technique), pas au moment.",
        "Hiérarchie inversée : c'est le BCP qui englobe conceptuellement le DRP.",
        "Inversion des rôles : c'est le BCP qui est stratégique et le DRP qui est technique.",
        "Correcte : le BCP, stratégique, maintient les processus métier ; le DRP, tactique et technique, restaure les systèmes (sites de repli, sauvegardes)."
      ]
    },
    {
      "q": "Un utilisateur conteste avoir validé une opération dans une application qui ne journalise pas les actions. Dans le modèle STRIDE, quelle catégorie de menace ce défaut illustre-t-il ?",
      "choix": [
        "Spoofing",
        "Information Disclosure",
        "Repudiation",
        "Tampering"
      ],
      "reponse": 2,
      "explication": "La capacité d'un utilisateur à nier avoir accompli une action, faute de journalisation et de preuves, relève de la Repudiation, le R de STRIDE. La parade est la non-répudiation : authentification forte, journalisation fiable, signatures. Le spoofing usurpe une identité, le tampering altère des données et l'information disclosure divulgue des informations confidentielles.",
      "difficulte": 1,
      "pourquoi": [
        "Mauvaise catégorie : le spoofing est l'usurpation d'identité, pas la contestation d'une action.",
        "Mauvaise catégorie : l'Information Disclosure est l'exposition de données confidentielles.",
        "Correcte : sans journalisation, l'utilisateur peut nier avoir agi — c'est la menace de Repudiation de STRIDE.",
        "Mauvaise catégorie : le tampering est la modification non autorisée de données."
      ]
    },
    {
      "q": "Quelle catégorie du modèle STRIDE attaque directement la confidentialité ?",
      "choix": [
        "Denial of Service",
        "Elevation of Privilege",
        "Tampering",
        "Information Disclosure"
      ],
      "reponse": 3,
      "explication": "L'Information Disclosure est la divulgation d'informations à des personnes non autorisées : c'est l'attaque directe de la confidentialité. Le tampering vise l'intégrité, le denial of service la disponibilité, et l'elevation of privilege l'autorisation. Retenez que chaque catégorie STRIDE se rattache à un pilier de la sécurité : c'est une question classique.",
      "difficulte": 1,
      "pourquoi": [
        "Cible la disponibilité : le déni de service interrompt l'accès.",
        "Cible l'autorisation : l'élévation de privilège outrepasse les droits accordés.",
        "Cible l'intégrité : le tampering modifie les données.",
        "Correcte : l'Information Disclosure expose des informations à des personnes non autorisées — atteinte directe à la confidentialité."
      ]
    },
    {
      "q": "Lors d'une reduction analysis (décomposition d'un système), pourquoi identifie-t-on les trust boundaries ?",
      "choix": [
        "Pour inventorier les licences des bibliothèques",
        "Pour localiser les points où le niveau de confiance ou de privilège change, là où les contrôles doivent être concentrés",
        "Pour calculer l'ALE de chaque module applicatif",
        "Pour mesurer la latence réseau entre les composants"
      ],
      "reponse": 1,
      "explication": "La reduction analysis décompose le système en cinq éléments : trust boundaries, data flow paths, input points, opérations privilégiées et détails des contrôles. Les frontières de confiance marquent les endroits où le niveau de confiance ou de privilège change (ex. passage d'Internet au réseau interne) : ce sont précisément les points où valider les entrées et renforcer les contrôles. Les calculs financiers, la latence et les licences ne relèvent pas du threat modeling.",
      "difficulte": 3,
      "pourquoi": [
        "Hors sujet : l'inventaire des licences relève de la gestion des actifs logiciels.",
        "Correcte : les trust boundaries marquent les points où le niveau de confiance ou de privilège change ; c'est là que les attaques se concentrent et que les contrôles doivent être placés.",
        "Hors sujet : l'ALE est un calcul de gestion des risques, pas un objectif de décomposition applicative.",
        "Réponse de technicien réseau : la latence est une préoccupation de performance, pas de modélisation des menaces."
      ]
    },
    {
      "q": "Une équipe intègre la modélisation des menaces dès les phases de conception et de développement d'un produit. Comment qualifie-t-on cette approche ?",
      "choix": [
        "Proactive / défensive",
        "Corrective",
        "Réactive / adversariale",
        "Compensatoire"
      ],
      "reponse": 0,
      "explication": "Le threat modeling mené pendant la conception et le développement est l'approche proactive, dite défensive : elle permet d'intégrer la sécurité dès le design, où elle coûte le moins cher. L'approche réactive, dite adversariale, intervient après le déploiement (fuzzing, pentest). « Corrective » et « compensatoire » sont des types de contrôles, pas des approches de threat modeling.",
      "difficulte": 1,
      "pourquoi": [
        "Correcte : intégrer le threat modeling dès la conception est l'approche proactive, dite défensive, qui prévient les défauts au lieu de les corriger.",
        "Mauvais registre : « corrective » qualifie une catégorie de contrôle post-incident, pas une approche de modélisation.",
        "Contresens temporel : l'approche adversariale/réactive teste un système déjà construit (pentest, fuzzing).",
        "Mauvais registre : « compensatoire » désigne un contrôle de substitution, sans rapport avec le moment de la modélisation."
      ]
    },
    {
      "q": "Quelle méthodologie de threat modeling a été conçue pour s'intégrer aux environnements agiles et DevOps à grande échelle ?",
      "choix": [
        "PASTA",
        "Trike",
        "STRIDE",
        "VAST"
      ],
      "reponse": 3,
      "explication": "VAST (Visual, Agile, and Simple Threat modeling) a été pensé pour passer à l'échelle dans les organisations agiles et DevOps, en s'intégrant aux outils et aux sprints des équipes. STRIDE est une grille de catégorisation, PASTA une méthodologie en sept étapes centrée sur le risque, et Trike une méthodologie open source fondée sur le risque et l'audit des exigences.",
      "difficulte": 3,
      "pourquoi": [
        "Mauvais modèle : PASTA est un processus d'analyse en sept étapes centré sur le risque, pas sur l'intégration DevOps.",
        "Mauvais modèle : Trike est centré sur l'évaluation des risques à partir d'exigences, pas sur l'agilité à grande échelle.",
        "Mauvais modèle : STRIDE est une taxonomie de menaces, sans dispositif natif de passage à l'échelle agile.",
        "Correcte : VAST (Visual, Agile and Simple Threat modeling) a été conçu pour s'intégrer aux pipelines agiles et DevOps à l'échelle de l'entreprise."
      ]
    },
    {
      "q": "Votre organisation veut échanger automatiquement du renseignement sur les menaces avec ses partenaires sectoriels. Quel standard sert au TRANSPORT de ce renseignement ?",
      "choix": [
        "STIX",
        "TAXII",
        "CAPEC",
        "SAML"
      ],
      "reponse": 1,
      "explication": "TAXII (Trusted Automated eXchange of Intelligence Information) est le protocole de transport et d'échange du renseignement sur les menaces. STIX est le langage structuré qui décrit ce renseignement (on dit souvent : STIX décrit, TAXII transporte), CAPEC est un dictionnaire de patterns d'attaque, et SAML est un standard de fédération d'identité sans rapport avec la threat intelligence.",
      "difficulte": 3,
      "pourquoi": [
        "Piège de paire : STIX décrit le contenu du renseignement (le format), il ne le transporte pas.",
        "Correcte : TAXII est le protocole d'échange et de transport du renseignement exprimé en STIX.",
        "Hors sujet : CAPEC est un catalogue de schémas d'attaque, pas un protocole d'échange.",
        "Hors sujet : SAML est un standard de fédération d'identité."
      ]
    },
    {
      "q": "Un fabricant veut pouvoir authentifier chaque puce individuellement grâce à une empreinte électronique unique impossible à cloner. Quelle technologie répond à ce besoin ?",
      "choix": [
        "Physically Unclonable Function (PUF)",
        "Chiffrement de disque",
        "Software Bill of Materials (SBOM)",
        "Silicon Root of Trust"
      ],
      "reponse": 0,
      "explication": "La Physically Unclonable Function exploite les micro-variations physiques de fabrication pour créer une empreinte électronique unique et non reproductible, qui permet d'authentifier individuellement chaque puce et de détecter les contrefaçons. Le silicon root of trust sécurise le démarrage mais n'identifie pas chaque exemplaire de façon unique, le SBOM inventorie des composants logiciels, et le chiffrement de disque protège des données au repos.",
      "difficulte": 3,
      "pourquoi": [
        "Correcte : la PUF exploite les micro-variations physiques de fabrication pour donner à chaque puce une empreinte unique et inclonable, idéale pour l'authentification matérielle.",
        "Hors sujet : le chiffrement de disque protège les données stockées, il n'authentifie pas la puce elle-même.",
        "Hors sujet : le SBOM inventorie des composants logiciels, pas l'identité du matériel.",
        "Concept voisin : le Silicon Root of Trust ancre la confiance du démarrage, mais ne fournit pas d'empreinte unique inclonable par puce."
      ]
    },
    {
      "q": "Quel est le MEILLEUR moyen de rendre exigibles les obligations de sécurité d'un fournisseur critique ?",
      "choix": [
        "Une évaluation de sécurité approfondie menée avant la signature du contrat",
        "Un questionnaire de sécurité annuel auto-déclaratif",
        "L'intégration d'exigences minimales de sécurité dans les contrats et les SLA",
        "L'obtention par le fournisseur d'une certification ISO 27001 en cours de validité"
      ],
      "reponse": 2,
      "explication": "Seules des exigences intégrées aux contrats et aux SLA sont juridiquement exigibles : elles définissent les niveaux de sécurité attendus, les droits d'audit et les pénalités en cas de manquement. Une évaluation initiale, une certification ou un questionnaire auto-déclaratif sont des sources d'assurance utiles, mais n'offrent aucun levier opposable si le fournisseur défaille. C'est un principe central du Supply Chain Risk Management.",
      "difficulte": 1,
      "pourquoi": [
        "Utile mais ponctuelle : une évaluation initiale photographie un instant, elle ne crée aucune obligation continue ni levier en cas de manquement.",
        "Trop faible : un questionnaire auto-déclaratif n'a pas de force contraignante et repose sur la bonne foi du fournisseur.",
        "Correcte : seules les exigences inscrites dans les contrats et SLA sont juridiquement exigibles, avec droits d'audit et pénalités en cas de défaillance.",
        "Techniquement vraie mais insuffisante : une certification atteste d'un système de management à un instant donné, sans engagement opposable envers votre organisation."
      ]
    },
    {
      "q": "Avant de confier des données sensibles à un prestataire, vous voulez vérifier que ses pratiques réelles correspondent à ses politiques écrites. Quelle méthode d'évaluation est la PLUS probante ?",
      "choix": [
        "La consultation de son site web institutionnel",
        "La revue documentaire à distance",
        "Un questionnaire d'auto-évaluation rempli par le prestataire",
        "Une évaluation sur site (on-site assessment)"
      ],
      "reponse": 3,
      "explication": "L'évaluation sur site permet d'observer directement les pratiques, d'interroger les équipes et de confronter la réalité du terrain aux politiques écrites : c'est la méthode la plus probante. La revue documentaire et l'auto-évaluation ne montrent que ce que le prestataire déclare, et un site web institutionnel n'a aucune valeur probante. En pratique, on combine ces méthodes avec des audits tiers indépendants et un monitoring continu.",
      "difficulte": 2,
      "pourquoi": [
        "Anecdotique : le site web institutionnel est un support marketing sans valeur probante.",
        "Limitée au déclaratif : la revue documentaire vérifie l'existence des politiques, pas leur application réelle.",
        "La moins probante : l'auto-évaluation repose entièrement sur la bonne foi du prestataire, juge et partie.",
        "Correcte : l'évaluation sur site permet d'observer directement les pratiques, les locaux et les contrôles réels — la méthode la plus probante."
      ]
    },
    {
      "q": "Des attaquants compromettent le mécanisme de mise à jour d'un éditeur logiciel largement déployé afin de distribuer une porte dérobée à tous ses clients. Comment qualifier cette attaque ?",
      "choix": [
        "Attaque par force brute",
        "Attaque de la chaîne d'approvisionnement (supply chain attack)",
        "Typosquatting",
        "Attaque par watering hole"
      ],
      "reponse": 1,
      "explication": "Compromettre un maillon amont de confiance (ici l'éditeur et son canal de mise à jour) pour atteindre ses clients en aval est la définition même de l'attaque de supply chain, illustrée par l'affaire SolarWinds. Le watering hole compromet un site web que la cible visite, le typosquatting exploite des noms de domaine ressemblants, et la force brute vise des mots de passe. La parade passe par le SCRM : évaluation des fournisseurs, signature et vérification des mises à jour, SBOM.",
      "difficulte": 1,
      "pourquoi": [
        "Hors sujet : la force brute vise des identifiants, pas un canal de distribution logiciel.",
        "Correcte : compromettre l'éditeur pour diffuser une porte dérobée via ses mises à jour légitimes est l'archétype de la supply chain attack (ex. SolarWinds).",
        "Vecteur différent : le typosquatting joue sur des noms de domaine ressemblants.",
        "Vecteur différent : le watering hole infecte un site fréquenté par les cibles, pas le mécanisme de mise à jour d'un éditeur."
      ]
    },
    {
      "q": "Un fournisseur critique a passé avec succès son évaluation initiale il y a deux ans. Quelle est la MEILLEURE pratique pour maintenir la confiance dans la durée ?",
      "choix": [
        "Un monitoring continu et des réévaluations périodiques (audits, revues de conformité)",
        "S'appuyer sur l'évaluation initiale tant que le périmètre contractuel reste inchangé",
        "Exiger une nouvelle certification uniquement au renouvellement du contrat",
        "Attendre un incident pour déclencher une réévaluation"
      ],
      "reponse": 0,
      "explication": "La posture de sécurité d'un tiers évolue : rachats, rotation des équipes, nouvelles menaces. Le SCRM impose donc une surveillance continue et des réévaluations périodiques (audits tiers, revues de certification, indicateurs contractuels). S'en remettre à une évaluation vieille de deux ans, attendre l'incident ou caler la vérification sur le seul renouvellement du contrat laisse des angles morts et constitue un manquement à la Due Diligence.",
      "difficulte": 2,
      "pourquoi": [
        "Correcte : le SCRM impose un monitoring continu et des réévaluations périodiques (audits, revues de conformité, indicateurs) pour maintenir la confiance dans la durée.",
        "Piège de stabilité : la posture d'un tiers évolue indépendamment du contrat (rachats, turnover, nouvelles menaces) ; une évaluation vieille de deux ans ne prouve plus rien.",
        "Cadence insuffisante : caler la vérification sur le seul renouvellement contractuel laisse des années d'angle mort entre deux échéances.",
        "Réactif : attendre l'incident revient à renoncer à la prévention et constitue un manquement à la Due Diligence."
      ]
    },
    {
      "q": "Sous la directive européenne NIS2, dans quel délai une entité essentielle doit-elle transmettre l'alerte précoce (early warning) d'un incident significatif ?",
      "choix": [
        "7 jours",
        "60 jours",
        "24 heures",
        "72 heures"
      ],
      "reponse": 2,
      "explication": "NIS2 impose un processus de notification en trois temps : une alerte précoce sous 24 heures après la prise de connaissance de l'incident significatif, une notification complète sous 72 heures, puis un rapport final sous un mois. Ne confondez pas avec le délai unique de 72 heures du GDPR (violation de données personnelles) ni avec les 60 jours de HIPAA/HITECH.",
      "difficulte": 2,
      "pourquoi": [
        "Sans fondement : aucun délai de 7 jours n'existe dans le dispositif de notification NIS2.",
        "Piège de régime : 60 jours correspond à la notification HIPAA/HITECH américaine.",
        "Correcte : NIS2 impose l'alerte précoce sous 24 heures, suivie d'une notification détaillée sous 72 heures et d'un rapport final sous un mois.",
        "Piège d'étape : 72 heures est le délai de la notification d'incident détaillée sous NIS2 (et celui du GDPR), pas de l'early warning."
      ]
    },
    {
      "q": "Concernant la notification des violations de données aux États-Unis, quelle affirmation est CORRECTE ?",
      "choix": [
        "Chaque État dispose de sa propre loi de notification, avec des exigences et des délais variables",
        "La notification n'est due qu'aux régulateurs sectoriels fédéraux, jamais aux individus",
        "Seules les entreprises cotées en bourse doivent notifier",
        "Une loi fédérale unique impose un délai de 72 heures"
      ],
      "reponse": 0,
      "explication": "Il n'existe pas de loi fédérale générale de notification des violations aux États-Unis : les cinquante États ont chacun leur propre loi (la Californie fut pionnière avec SB 1386 en 2002), avec des seuils, des délais et des définitions variables. S'y ajoutent des régimes sectoriels fédéraux comme HIPAA/HITECH pour la santé ou GLBA pour la finance. Une entreprise nationale doit donc gérer une mosaïque d'obligations.",
      "difficulte": 2,
      "pourquoi": [
        "Correcte : chaque État américain dispose de sa propre loi de notification (la Californie fut pionnière), avec seuils, délais et définitions variables, complétées par des régimes sectoriels fédéraux.",
        "Inversé : la plupart des lois d'État imposent précisément la notification des individus affectés, en plus des éventuels régulateurs.",
        "Trop étroit : les règles de divulgation de la SEC visent les sociétés cotées, mais les lois des États s'appliquent à toute entité détenant des données de leurs résidents.",
        "Fausse harmonisation : le délai de 72 heures est une exigence du GDPR européen ; aucune loi fédérale générale équivalente n'existe aux États-Unis."
      ]
    },
    {
      "q": "Quelle a été la conséquence PRINCIPALE de l'arrêt Schrems II de la Cour de justice de l'Union européenne (2020) ?",
      "choix": [
        "L'interdiction définitive de tout transfert de données vers les États-Unis",
        "L'invalidation du Privacy Shield et l'obligation d'évaluer les transferts fondés sur les SCC, avec des mesures supplémentaires si nécessaire",
        "L'abrogation du GDPR",
        "La création des Binding Corporate Rules"
      ],
      "reponse": 1,
      "explication": "Schrems II a invalidé le Privacy Shield, jugeant que la surveillance américaine ne garantissait pas une protection équivalente au droit européen. Les SCC restent valides, mais l'exportateur doit évaluer le droit du pays de destination (transfer impact assessment) et ajouter des mesures supplémentaires (chiffrement, pseudonymisation…) si nécessaire. Les transferts vers les États-Unis n'ont jamais été interdits en bloc, et les BCR existaient bien avant cet arrêt.",
      "difficulte": 2,
      "pourquoi": [
        "Absolu : les transferts vers les États-Unis restaient possibles via SCC évaluées et mesures complémentaires, pas d'interdiction générale.",
        "Correcte : Schrems II a invalidé le Privacy Shield et exigé une évaluation cas par cas des transferts fondés sur les SCC, avec mesures supplémentaires si le droit du pays tiers l'exige.",
        "Excessif : l'arrêt n'a pas touché le GDPR lui-même, qui reste pleinement en vigueur.",
        "Anachronique : les BCR existaient bien avant 2020 et ne résultent pas de cet arrêt."
      ]
    },
    {
      "q": "La Commission européenne adopte une adequacy decision en faveur d'un pays tiers. Qu'est-ce que cela implique pour les transferts de données personnelles vers ce pays ?",
      "choix": [
        "Seules des données anonymisées peuvent être transférées",
        "Les transferts restent interdits par défaut",
        "Les transferts peuvent se faire librement, sans garantie supplémentaire, car le pays offre une protection substantiellement équivalente",
        "Chaque transfert doit être approuvé individuellement par l'autorité de contrôle"
      ],
      "reponse": 2,
      "explication": "Une décision d'adéquation atteste que le pays tiers assure un niveau de protection substantiellement équivalent à celui de l'UE : les transferts vers ce pays sont alors libres, comme s'il s'agissait de transferts intra-européens, sans SCC ni BCR. C'est le mécanisme le plus simple pour l'exportateur, mais il dépend entièrement de la Commission, qui peut réévaluer ou révoquer sa décision.",
      "difficulte": 1,
      "pourquoi": [
        "Trop restrictif : ce sont bien des données personnelles, et pas seulement anonymisées, qui peuvent circuler.",
        "Contresens : l'adequacy decision lève précisément l'interdiction par défaut des transferts.",
        "Correcte : une décision d'adéquation reconnaît une protection substantiellement équivalente, autorisant les transferts sans garantie supplémentaire.",
        "Trop lourd : aucune approbation individuelle n'est requise une fois l'adéquation reconnue."
      ]
    },
    {
      "q": "Une multinationale souhaite encadrer les transferts réguliers de données RH entre toutes ses filiales, dans et hors de l'Union européenne. Quel mécanisme est le PLUS adapté à ces transferts intra-groupe ?",
      "choix": [
        "Le recueil du consentement systématique de chaque salarié",
        "Des SCC signées séparément entre chaque paire de filiales",
        "Une adequacy decision demandée par l'entreprise à la Commission",
        "Des Binding Corporate Rules (BCR) approuvées par une autorité de contrôle"
      ],
      "reponse": 3,
      "explication": "Les BCR sont précisément conçues pour les transferts intra-groupe des multinationales : un corpus unique de règles contraignantes, approuvé par une autorité de contrôle, couvre l'ensemble des filiales. Multiplier les SCC bilatérales est lourd et fragile à grande échelle, une adequacy decision concerne un pays (pas une entreprise) et ne se « demande » pas, et le consentement des salariés est considéré comme rarement libre dans la relation de travail.",
      "difficulte": 2,
      "pourquoi": [
        "Fragile juridiquement : le consentement systématique des salariés est déséquilibré par le lien de subordination et difficilement valable comme base pérenne.",
        "Praticable mais inefficient : multiplier les SCC bilatérales entre chaque paire de filiales devient ingérable à l'échelle d'un groupe.",
        "Hors de portée : l'adequacy decision est un acte de la Commission visant un pays ; une entreprise ne peut pas la demander pour elle-même.",
        "Correcte : les BCR sont conçues pour les transferts intra-groupe réguliers — un cadre unique contraignant, approuvé par une autorité de contrôle."
      ]
    },
    {
      "q": "Que sont les Standard Contractual Clauses (SCC) dans le contexte du GDPR ?",
      "choix": [
        "Une décision reconnaissant le niveau de protection adéquat d'un pays tiers",
        "Un certificat de conformité délivré par l'ENISA",
        "Des clauses types approuvées par la Commission européenne, insérées dans les contrats pour encadrer les transferts de données hors UE",
        "Des règles internes contraignantes propres à un groupe multinational"
      ],
      "reponse": 2,
      "explication": "Les SCC sont des modèles de clauses contractuelles adoptés par la Commission européenne : intégrées telles quelles au contrat entre l'exportateur et l'importateur de données, elles créent des garanties appropriées pour les transferts hors UE. Les règles internes d'un groupe sont les BCR, l'ENISA ne délivre pas de certificat de transfert, et la reconnaissance d'un pays relève de l'adequacy decision.",
      "difficulte": 1,
      "pourquoi": [
        "Confusion d'instrument : la reconnaissance d'un niveau de protection adéquat est l'adequacy decision.",
        "Sans fondement : l'ENISA ne délivre aucun certificat de conformité GDPR de ce type.",
        "Correcte : les SCC sont des clauses contractuelles types approuvées par la Commission, insérées dans les contrats pour légaliser les transferts hors UE.",
        "Confusion d'instrument : les règles internes contraignantes décrivent les BCR, pas les SCC."
      ]
    },
    {
      "q": "Quel traité constitue le premier accord international visant à harmoniser la lutte contre la cybercriminalité et à faciliter la coopération entre États ?",
      "choix": [
        "La Convention de Budapest sur la cybercriminalité (2001)",
        "Le traité de Lisbonne",
        "L'accord EU-US Data Privacy Framework",
        "L'arrangement de Wassenaar"
      ],
      "reponse": 0,
      "explication": "La Convention de Budapest, adoptée en 2001 sous l'égide du Conseil de l'Europe et ouverte aux États non européens, est le premier traité international sur la cybercriminalité : elle harmonise les incriminations (accès illégal, atteinte à l'intégrité des données, fraude informatique…) et organise l'entraide judiciaire. Wassenaar concerne le contrôle des exportations, Lisbonne l'organisation de l'UE, et le Data Privacy Framework les transferts de données UE–USA.",
      "difficulte": 2,
      "pourquoi": [
        "Correcte : la Convention de Budapest (2001) est le premier traité international harmonisant les infractions informatiques et la coopération entre États.",
        "Hors sujet : le traité de Lisbonne réforme les institutions de l'Union européenne.",
        "Hors sujet : le Data Privacy Framework encadre les transferts de données UE–US, pas la lutte pénale contre la cybercriminalité.",
        "Hors sujet : Wassenaar encadre l'exportation des biens à double usage, pas la coopération pénale contre la cybercriminalité."
      ]
    },
    {
      "q": "Sous le GDPR, dans quel cas et dans quel délai les personnes concernées doivent-elles être informées d'une violation de leurs données ?",
      "choix": [
        "Uniquement si plus de 500 personnes sont affectées, sous 60 jours",
        "Sans retard injustifié, lorsque la violation est susceptible d'engendrer un risque élevé pour leurs droits et libertés",
        "Jamais : seule l'autorité de contrôle doit être notifiée",
        "Toujours, dans les 72 heures"
      ],
      "reponse": 1,
      "explication": "Le délai de 72 heures concerne la notification à l'autorité de contrôle. Les personnes concernées, elles, doivent être informées sans retard injustifié uniquement lorsque la violation est susceptible d'engendrer un risque élevé pour leurs droits et libertés (des exceptions existent, par exemple si les données étaient chiffrées). Le seuil de 500 personnes et le délai de 60 jours relèvent de HIPAA/HITECH, pas du GDPR.",
      "difficulte": 3,
      "pourquoi": [
        "Faux seuils : les 500 personnes et 60 jours proviennent du régime HIPAA américain, pas du GDPR.",
        "Correcte : l'article 34 impose d'informer les personnes sans retard injustifié uniquement lorsque la violation est susceptible d'engendrer un risque élevé pour leurs droits et libertés.",
        "Trop restrictif : l'autorité n'est pas la seule destinataire, les personnes doivent être averties en cas de risque élevé.",
        "Absolu et confondu : les 72 heures visent l'autorité de contrôle ; les personnes ne sont informées que si le risque est élevé."
      ]
    },
    {
      "q": "Une violation touche simultanément des données de santé de patients américains (PHI) et des données personnelles de résidents européens. Quelles obligations de notification s'appliquent ?",
      "choix": [
        "Uniquement le GDPR, car c'est le régime le plus strict",
        "Aucune notification tant que l'enquête interne n'est pas terminée",
        "Uniquement HIPAA, car les données de santé priment",
        "Les deux régimes cumulativement : autorité européenne sous 72 heures ET notification HIPAA/HITECH des individus sous 60 jours"
      ],
      "reponse": 3,
      "explication": "Les régimes de notification ne s'excluent pas : ils se cumulent en fonction des personnes concernées et des juridictions. L'organisation doit notifier l'autorité de contrôle européenne sous 72 heures pour les résidents de l'UE, et respecter HIPAA/HITECH (individus, HHS, médias si plus de 500 personnes, sous 60 jours) pour les PHI américaines. Attendre la fin de l'enquête interne ferait manquer les délais légaux : c'est la découverte de la violation qui déclenche les horloges.",
      "difficulte": 3,
      "pourquoi": [
        "Faux arbitrage : les régimes ne s'excluent pas, le plus strict ne dispense pas de l'autre.",
        "Hors délai : attendre la fin de l'enquête ferait manquer les délais légaux des deux régimes.",
        "Faux arbitrage : HIPAA ne couvre pas les résidents européens, dont les données restent régies par le GDPR.",
        "Correcte : les obligations se cumulent — notification de l'autorité européenne sous 72 heures pour les données GDPR ET notification HIPAA/HITECH sous 60 jours pour les PHI."
      ]
    },
    {
      "q": "Un groupe criminel utilise des serveurs préalablement compromis pour lancer un déni de service massif contre le site d'une banque. Dans la taxonomie de la cybercriminalité, le système de la banque est ici :",
      "choix": [
        "Hors du champ de la cybercriminalité",
        "La cible de l'infraction",
        "L'outil de l'infraction",
        "Un simple support de preuve"
      ],
      "reponse": 1,
      "explication": "On distingue les crimes où l'ordinateur est la cible (l'attaque vise le système lui-même : intrusion, DoS, sabotage) de ceux où il n'est que l'outil (fraude, escroquerie réalisées au moyen de l'informatique). Ici, le système de la banque subit directement l'attaque : il est la cible. Les serveurs compromis utilisés pour lancer l'attaque jouent, eux, le rôle d'outils. Cette qualification influence les incriminations applicables et la conduite de l'enquête.",
      "difficulte": 2,
      "pourquoi": [
        "Contresens : un DDoS contre une banque est un cas typique de cybercriminalité.",
        "Correcte : le système de la banque est la cible de l'infraction, celui contre lequel le déni de service est dirigé.",
        "Rôle inversé : les serveurs compromis utilisés pour lancer l'attaque sont l'outil ; la banque, elle, subit l'attaque.",
        "Rôle secondaire : un système « support de preuve » stocke incidemment des éléments d'une infraction commise ailleurs, ce qui n'est pas le cas ici."
      ]
    },
    {
      "q": "Quel cadre encadre depuis 2023 les transferts de données personnelles entre l'Union européenne et les États-Unis, en remplacement du Privacy Shield invalidé ?",
      "choix": [
        "Le Cloud Act",
        "Le Safe Harbor",
        "L'EU-US Data Privacy Framework",
        "La directive NIS2"
      ],
      "reponse": 2,
      "explication": "L'EU-US Data Privacy Framework, adossé à une décision d'adéquation de la Commission européenne adoptée en 2023, encadre les transferts vers les entreprises américaines auto-certifiées. Il succède au Privacy Shield (invalidé par Schrems II en 2020), lui-même successeur du Safe Harbor (invalidé par Schrems I en 2015). Le Cloud Act est une loi américaine d'accès aux données, et NIS2 concerne la cybersécurité des entités critiques, pas les transferts.",
      "difficulte": 2,
      "pourquoi": [
        "Hors sujet : le Cloud Act est une loi américaine sur l'accès aux données par les autorités, pas un cadre de transfert UE–US.",
        "Anachronique : le Safe Harbor a été invalidé dès 2015 par Schrems I.",
        "Correcte : l'EU-US Data Privacy Framework, adossé à une décision d'adéquation de 2023, remplace le Privacy Shield pour les transferts UE–États-Unis.",
        "Hors sujet : NIS2 traite de la cybersécurité des entités essentielles, pas des transferts de données personnelles."
      ]
    },
    {
      "q": "Le comité exécutif d'une banque veut déployer un modèle d'IA générative pour automatiser les réponses aux clients. Le RSSI est chargé d'encadrer l'initiative. Que devrait-il faire EN PREMIER ?",
      "choix": [
        "Rattacher l'initiative au cadre de gouvernance existant : classification des cas d'usage, appétit pour le risque et rôles de décision",
        "Rédiger une politique d'usage acceptable de l'IA générative pour les employés",
        "Sélectionner un cadre de référence comme le NIST AI RMF et lancer un gap assessment technique",
        "Exiger des tests adversariaux (prompt injection, jailbreak) avant toute mise en production"
      ],
      "reponse": 0,
      "explication": "Face à une technologie nouvelle, le réflexe CISSP est « gouvernance d'abord » : rattacher l'initiative au cadre de décision existant — qui autorise quoi, avec quel appétit pour le risque, sur quels cas d'usage. Les tests adversariaux et le gap assessment NIST AI RMF sont des étapes ultérieures parfaitement légitimes, et la politique d'usage employé couvre un autre périmètre que le déploiement d'un service client automatisé.",
      "difficulte": 3,
      "pourquoi": [
        "Correcte : la première étape du manager est de raccrocher l'IA à la gouvernance existante — décideurs, appétit pour le risque, classification des cas d'usage — avant toute mesure technique.",
        "Trop étroite : une politique d'usage employé ne couvre ni le déploiement d'un service client automatisé ni les décisions de risque associées.",
        "Vraie mais prématurée : un cadre comme le NIST AI RMF se déploie à l'intérieur d'une gouvernance établie ; le choisir d'abord est une réponse d'expert, pas de dirigeant.",
        "Techniquement indispensable mais hors phase : les tests adversariaux interviennent une fois le cas d'usage autorisé et encadré par la gouvernance."
      ]
    },
    {
      "q": "Votre organisation intègre un modèle de langage fourni par un tiers via API dans une application RH de présélection des candidatures. Quel risque le RSSI devrait-il traiter en PRIORITÉ ?",
      "choix": [
        "La fuite des prompts système révélant la logique interne de l'application",
        "L'augmentation des coûts d'inférence en cas de montée en charge",
        "La latence et la disponibilité de l'API du fournisseur",
        "Des décisions discriminatoires du modèle exposant l'organisation à des sanctions réglementaires et à un préjudice pour les candidats"
      ],
      "reponse": 3,
      "explication": "Un traitement RH automatisé touche des personnes et déclenche des obligations légales fortes : non-discrimination, GDPR (décision automatisée), réglementations sur l'IA. Pour un manager, l'impact humain et réglementaire prime sur la disponibilité (gérable par SLA), la confidentialité des prompts (risque limité) et les coûts (question financière, pas sécuritaire).",
      "difficulte": 3,
      "pourquoi": [
        "Techniquement vraie mais secondaire : la divulgation de prompts est un risque de confidentialité mineur comparé à des décisions d'embauche biaisées.",
        "Hors périmètre sécurité : la maîtrise des coûts d'inférence relève de la gestion financière du projet.",
        "Réelle mais opérationnelle : une indisponibilité se gère par SLA et redondance, elle ne menace ni les personnes ni la conformité.",
        "Correcte : un traitement RH automatisé engage la non-discrimination, le GDPR et les réglementations IA ; l'impact humain et réglementaire prime dans l'arbitrage d'un manager."
      ]
    },
    {
      "q": "Un RSSI découvre que trois applications métier critiques dépendent du même fournisseur SaaS de niche, financièrement fragile. La direction refuse de changer de fournisseur pour des raisons de coût. Quelle est la MEILLEURE action ?",
      "choix": [
        "Exiger du fournisseur un audit SOC 2 Type II annuel",
        "Documenter le refus dans le risk register et faire accepter formellement le risque par la direction",
        "Négocier un entiercement (escrow) du code et des données et bâtir une stratégie de sortie testée",
        "Souscrire une cyber-assurance couvrant l'interruption d'activité"
      ],
      "reponse": 2,
      "explication": "La contrainte de la direction interdit le remplacement, pas l'atténuation : un entiercement du code et des données plus une stratégie de sortie testée réduisent concrètement le risque de défaillance du fournisseur en respectant la contrainte budgétaire. Documenter l'acceptation sans atténuer serait prématuré tant que des mitigations abordables existent ; un audit SOC 2 ne protège pas d'une faillite, et l'assurance ne restaure ni applications ni données.",
      "difficulte": 3,
      "pourquoi": [
        "Techniquement vraie mais inadaptée : un audit SOC 2 mesure les contrôles du fournisseur, il ne protège en rien contre sa faillite.",
        "Vraie mais insuffisante : documenter et faire accepter le risque est nécessaire, mais s'y arrêter renonce à des atténuations disponibles qui respectent la contrainte budgétaire.",
        "Correcte : l'entiercement du code et des données et une stratégie de sortie testée réduisent le risque de défaillance sans changer de fournisseur — exactement l'arbitrage demandé au manager.",
        "Partielle : l'assurance transfère l'impact financier mais ne restaure ni les applications ni les données si le fournisseur disparaît."
      ]
    },
    {
      "q": "Après l'attaque d'un sous-traitant de rang 2 ayant paralysé un fournisseur critique, le comité des risques demande au RSSI comment éviter qu'une telle dépendance cachée ne se reproduise. Quelle réponse traite la cause PREMIÈRE du problème ?",
      "choix": [
        "Imposer contractuellement au fournisseur de rang 1 la déclaration et l'encadrement de ses propres sous-traitants critiques",
        "Déployer une plateforme de notation continue de la sécurité des fournisseurs (security ratings)",
        "Ajouter une clause de résiliation immédiate en cas d'incident chez le fournisseur",
        "Étendre le questionnaire annuel de sécurité à tous les fournisseurs, quelle que soit leur criticité"
      ],
      "reponse": 0,
      "explication": "La cause première est l'absence de visibilité et d'exigences sur les rangs inférieurs de la chaîne d'approvisionnement. Le levier du manager est contractuel : obliger le rang 1 à déclarer ses sous-traitants critiques et à leur répercuter les exigences de sécurité (clauses de flow-down). La notation externe n'observe que des signaux publics du rang 1, la résiliation est punitive et non préventive, et diluer le questionnaire sur tous les fournisseurs sans tri de criticité épuise les ressources sans traiter la profondeur de la chaîne.",
      "difficulte": 3,
      "pourquoi": [
        "Correcte : la cause première est l'absence de visibilité sur les rangs inférieurs ; le levier managérial est contractuel — obliger le rang 1 à déclarer et encadrer ses sous-traitants critiques (clauses de flow-down).",
        "Techniquement utile mais partielle : la notation externe observe des signaux publics du rang 1, elle ne révèle pas les dépendances cachées de rang 2.",
        "Punitive, pas préventive : résilier après l'incident ne restaure pas l'activité et ne réduit pas la probabilité du scénario.",
        "Effort mal ciblé : étendre le questionnaire à tous les fournisseurs sans tri de criticité disperse les ressources sans traiter la profondeur de la chaîne."
      ]
    },
    {
      "q": "Le budget sécurité est réduit de 20 % et le directeur financier exige de justifier chaque investissement en termes financiers. Trois projets sont en concurrence. Sur quelle base le RSSI devrait-il PRINCIPALEMENT fonder son arbitrage ?",
      "choix": [
        "L'alignement de chaque projet sur les incidents les plus récents subis par le secteur",
        "La réduction d'ALE attendue de chaque projet rapportée à son coût total de possession",
        "La couverture des exigences des référentiels (ISO 27001, NIST CSF) apportée par chaque projet",
        "La criticité des menaces bloquées, mesurée par les scores CVSS des vulnérabilités traitées"
      ],
      "reponse": 1,
      "explication": "Dans un arbitrage budgétaire imposé par la direction financière, la valeur d'un contrôle se démontre par la réduction de perte annualisée attendue rapportée à son coût — l'analyse coût/bénéfice quantitative, seul langage commun avec le DAF. La couverture des référentiels justifie un programme mais ne classe pas financièrement des projets ; le CVSS mesure une sévérité technique, pas une perte évitée ; et l'actualité du secteur relève du biais de récence.",
      "difficulte": 3,
      "pourquoi": [
        "Biais de récence : l'actualité du secteur informe l'analyse mais ne constitue pas une base de décision financière rigoureuse.",
        "Correcte : la réduction d'ALE rapportée au coût total exprime la valeur de chaque projet dans le langage financier exigé par le DAF — l'analyse coût/bénéfice quantitative.",
        "Vraie mais hors contexte : la conformité aux référentiels justifie un programme, pas un classement financier entre projets exigé par la direction financière.",
        "Réponse de technicien : le CVSS mesure la sévérité technique d'une vulnérabilité, pas la perte financière évitée pour l'organisation."
      ]
    },
    {
      "q": "Le conseil d'administration juge les rapports de risque « rouge/orange/vert » inutilisables pour arbitrer entre le cyber-risque et les autres risques d'entreprise. Quelle évolution répond le MIEUX à ce besoin ?",
      "choix": [
        "Confier l'évaluation à un cabinet externe pour garantir l'objectivité des niveaux attribués",
        "Présenter au conseil les indicateurs opérationnels : taux de patching, couverture EDR, résultats des simulations de phishing",
        "Affiner la matrice qualitative avec des sous-niveaux et des critères d'évaluation documentés",
        "Adopter une quantification financière du risque (par exemple FAIR) exprimant les scénarios en pertes probabilisées"
      ],
      "reponse": 3,
      "explication": "Pour comparer le cyber-risque aux risques financiers, de marché ou juridiques que manipule un conseil d'administration, il faut une unité commune : la perte financière probabilisée. C'est précisément l'objet des méthodes de quantification comme FAIR. Raffiner l'échelle qualitative ne la rend pas comparable, les indicateurs opérationnels mesurent l'activité et non l'exposition, et changer d'évaluateur ne change pas la nature qualitative du langage.",
      "difficulte": 3,
      "pourquoi": [
        "Hors sujet : l'externalisation change l'évaluateur, pas la nature qualitative du langage qui pose problème.",
        "Réponse de technicien : ces métriques opérationnelles mesurent l'activité sécurité, pas l'exposition dans des termes que le conseil peut arbitrer.",
        "Vraie mais insuffisante : raffiner une échelle qualitative ne la rend toujours pas comparable aux risques financiers ou de marché du conseil.",
        "Correcte : une unité commune — la perte financière probabilisée — permet au conseil de comparer le cyber-risque aux autres risques d'entreprise ; c'est l'objet de la quantification type FAIR."
      ]
    },
    {
      "q": "Une autorité judiciaire américaine exige, via le Cloud Act, des données hébergées par votre filiale en Allemagne concernant des résidents européens ; l'article 48 du GDPR restreint pourtant ce transfert. Que devrait faire le RSSI EN PREMIER ?",
      "choix": [
        "Refuser la demande américaine, le GDPR primant sur le droit américain pour des données européennes",
        "Saisir immédiatement le conseil juridique et la direction pour une décision documentée intégrant les deux analyses de conformité",
        "Transmettre les données en minimisant leur volume pour limiter la violation du GDPR",
        "Transférer les données en s'appuyant sur les SCC déjà signées avec la maison mère américaine"
      ],
      "reponse": 1,
      "explication": "Un conflit de lois entre juridictions n'est pas une décision de sécurité mais une décision d'entreprise à fort enjeu juridique : le rôle du RSSI est d'escalader sans délai au conseil juridique et à la direction pour une décision documentée pesant les deux régimes. Aucune primauté automatique n'existe entre GDPR et Cloud Act ; « minimiser » un transfert illicite reste illicite ; et les SCC encadrent les transferts commerciaux, pas la remise de données à une autorité étrangère visée par l'article 48.",
      "difficulte": 3,
      "pourquoi": [
        "Absolue et fausse : aucune primauté automatique n'existe entre les deux régimes ; refuser unilatéralement expose l'entreprise à des sanctions côté américain.",
        "Correcte : un conflit de lois est une décision d'entreprise ; le RSSI escalade au juridique et à la direction pour une décision documentée pesant les deux régimes — c'est la posture Due Care.",
        "Compromis illicite : réduire le volume ne rend pas licite un transfert que le GDPR restreint — c'est une violation « réduite », pas une conformité.",
        "Hors périmètre : les SCC encadrent les transferts commerciaux courants, pas la remise de données à une autorité étrangère visée par l'article 48."
      ]
    },
    {
      "q": "Un audit interne révèle que plusieurs équipes utilisent des outils d'IA générative publics avec des données clients, sans validation. La direction demande au RSSI une réponse proportionnée qui préserve les gains de productivité. Quelle approche est la MEILLEURE ?",
      "choix": [
        "Établir une politique d'usage avec des cas autorisés, fournir une alternative approuvée et sensibiliser les équipes",
        "Déployer une solution de DLP configurée pour détecter les envois de données clients vers les services d'IA",
        "Sanctionner les équipes fautives pour violation de la politique de classification des données",
        "Bloquer les outils d'IA publics au niveau du proxy en attendant une étude complète"
      ],
      "reponse": 0,
      "explication": "La direction fixe deux contraintes : réduire le risque ET préserver la productivité. La réponse de gouvernance équilibrée combine une politique claire des cas d'usage, une alternative approuvée qui canalise le besoin, et de la sensibilisation. Le blocage total sacrifie la productivité et pousse aux contournements ; la sanction sans cadre détériore la culture sécurité sans traiter la cause ; le DLP est un contrôle de soutien utile mais qui, seul, ne définit ni les usages légitimes ni l'alternative.",
      "difficulte": 3,
      "pourquoi": [
        "Correcte : politique claire, alternative approuvée et sensibilisation réduisent le risque tout en respectant la contrainte métier posée par la direction — la réponse de gouvernance équilibrée.",
        "Techniquement vraie mais incomplète : le DLP est un contrôle de soutien qui ne définit ni les usages légitimes ni l'alternative attendue ; seul, il traite le symptôme.",
        "Punitive et inefficace : sanctionner sans offrir de cadre ni d'alternative ne traite pas la cause et détériore la culture de sécurité.",
        "Disproportionnée au regard de la demande : le blocage total sacrifie la productivité que la direction veut préserver et pousse les usages vers des contournements invisibles."
      ]
    },
    {
      "q": "L'ALE d'un risque applicatif est estimée à 45 000 € ; le seul contrôle disponible coûte 60 000 € par an et le transfert assurantiel est exclu par les clauses du contrat. L'activité concernée est stratégique. Que devrait recommander le RSSI ?",
      "choix": [
        "Suspendre l'activité concernée jusqu'à ce qu'un contrôle rentable soit disponible",
        "Implémenter le contrôle malgré son coût, car l'activité est stratégique",
        "Faire accepter formellement le risque par son propriétaire, avec revue périodique au risk register",
        "Répartir le coût du contrôle sur plusieurs budgets pour le rendre acceptable"
      ],
      "reponse": 2,
      "explication": "Quand le coût annuel du contrôle (60 000 €) excède la perte annualisée attendue (45 000 €) et que le transfert est impossible, la réponse rationnelle est l'acceptation formelle du risque par son propriétaire, documentée au risk register et revue périodiquement — le paysage des menaces et le coût des contrôles évoluent. Payer plus que la perte attendue détruit de la valeur, l'évitement sacrifierait une activité stratégique pour un risque économiquement acceptable, et répartir le coût ne change pas le rapport coût/bénéfice, il le masque.",
      "difficulte": 3,
      "pourquoi": [
        "Disproportionnée : l'évitement supprimerait une activité stratégique pour un risque économiquement acceptable.",
        "Contresens économique : payer 60 000 € pour éviter 45 000 € de perte attendue détruit de la valeur — le caractère stratégique de l'activité ne change pas ce calcul.",
        "Correcte : quand le coût du contrôle excède la perte attendue et que le transfert est impossible, l'acceptation formelle par le propriétaire du risque, documentée et revue périodiquement, est la réponse rationnelle.",
        "Illusion comptable : répartir le coût entre budgets ne modifie pas le rapport coût/bénéfice pour l'organisation, il le masque."
      ]
    },
    {
      "q": "Votre groupe lance un service mondial et découvre des exigences contradictoires : localisation des données dans certains pays, GDPR en Europe, lois sectorielles américaines. En tant que RSSI, quelle démarche structurez-vous EN PREMIER ?",
      "choix": [
        "L'alignement du programme sur le régime le plus strict, appliqué uniformément partout",
        "L'ouverture de négociations avec chaque régulateur pour obtenir des dérogations",
        "Une architecture technique de régionalisation des données, avec des instances locales par pays",
        "Un inventaire des traitements et une cartographie des exigences par juridiction, arbitrés avec le juridique selon le risque"
      ],
      "reponse": 3,
      "explication": "Avant toute solution, le manager établit les faits : quels traitements, quelles données, quelles obligations dans chaque juridiction — puis arbitre avec le juridique en fonction du risque. La régionalisation technique est une solution possible mais la choisir avant d'avoir cartographié les obligations revient à concevoir sans exigences ; le « régime le plus strict » ne résout pas des exigences contradictoires (une localisation imposée ici peut violer une restriction là-bas) ; et négocier des dérogations sans cartographie n'a ni base ni crédibilité.",
      "difficulte": 3,
      "pourquoi": [
        "Fausse bonne idée : le « régime le plus strict » ne résout pas des exigences contradictoires — une localisation imposée ici peut violer une restriction là-bas — et surcoûte inutilement.",
        "Irréaliste et prématurée : négocier des dérogations sans cartographie préalable des obligations n'a ni base ni crédibilité.",
        "Réponse d'architecte : la régionalisation est une solution possible, mais la choisir avant d'avoir cartographié les obligations revient à concevoir sans exigences.",
        "Correcte : le manager établit d'abord les faits — traitements, données, obligations par juridiction — puis arbitre avec le juridique selon le risque : c'est la démarche de gouvernance."
      ]
    },
    {
      "q": "Un éditeur américain s'apprête à vendre à des clients étrangers une appliance de sécurité intégrant un chiffrement fort, utilisable aussi bien en contexte civil que militaire. Quel régime encadre PRINCIPALEMENT cette exportation ?",
      "choix": [
        "ITAR, car tout produit à usage potentiellement militaire est un article d'armement",
        "EAR, le régime américain des biens commerciaux à double usage",
        "L'arrangement de Wassenaar, traité contraignant qui autorise directement l'export",
        "Aucun régime : les logiciels commerciaux sont librement exportables"
      ],
      "reponse": 1,
      "explication": "Un produit commercial à double usage, civil et militaire, comme un équipement intégrant de la cryptographie forte, relève de l'Export Administration Regulations (EAR). L'ITAR est réservé aux articles de défense inscrits sur l'US Munitions List. L'arrangement de Wassenaar est un accord multinational volontaire qui coordonne les politiques nationales d'export : il n'a pas force de loi et n'autorise rien par lui-même. Et la cryptographie forte reste un bien contrôlé à l'export, même dans un produit commercial.",
      "difficulte": 2,
      "pourquoi": [
        "Piège de sur-classification : l'ITAR vise les articles de défense de l'US Munitions List ; un produit commercial à double usage relève de l'EAR.",
        "Correcte : l'Export Administration Regulations régit précisément les biens commerciaux à double usage, dont la cryptographie forte destinée à l'export.",
        "Contresens sur sa nature : Wassenaar est un arrangement multinational volontaire qui harmonise les politiques d'export ; il n'a pas force de loi et ne délivre aucune autorisation.",
        "Faux : la cryptographie forte est le cas d'école du bien contrôlé à l'exportation, même intégrée à un produit commercial grand public."
      ]
    },
    {
      "q": "Un grand éditeur exerce sa clause d'audit contractuelle. Votre inventaire interne révèle 1 200 installations d'un logiciel pour 800 licences acquises. En tant que responsable, que devriez-vous faire EN PREMIER ?",
      "choix": [
        "Désinstaller discrètement les 400 copies excédentaires avant l'arrivée des auditeurs",
        "Contester la validité de la clause d'audit pour gagner du temps",
        "Attendre les conclusions de l'éditeur avant toute action interne",
        "Valider l'écart via le programme SAM, informer la direction et le juridique, et préparer une régularisation transparente"
      ],
      "reponse": 3,
      "explication": "Face à un audit d'éditeur, la démarche de gouvernance consiste à établir les faits avec le Software Asset Management, à informer la direction et le juridique, puis à coopérer et régulariser : c'est ce qui limite à la fois le risque contractuel et le risque de violation de copyright. Désinstaller discrètement revient à dissimuler des preuves face à un audit contractuel, contester la clause librement acceptée est dilatoire, et attendre passivement prive la direction de toute capacité d'anticipation et de négociation.",
      "difficulte": 2,
      "pourquoi": [
        "Dissimulation de preuves face à un audit contractuel : contraire à la Due Care et à l'éthique, et les journaux d'installation trahiraient la manœuvre.",
        "Dilatoire : la clause d'audit a été librement acceptée au contrat ; la contester sans base juridique aggrave la position de l'organisation.",
        "Passive : attendre prive la direction de la possibilité d'anticiper l'impact financier et de négocier une régularisation.",
        "Correcte : établir les faits avec le SAM, informer la direction et le juridique, puis coopérer et régulariser — la démarche honnête qui limite le risque contractuel et de copyright."
      ]
    },
    {
      "q": "Le meilleur candidat pour un poste d'administrateur de bases de données financières refuse la vérification d'antécédents prévue par la politique de recrutement, en invoquant sa vie privée. Quelle est la MEILLEURE décision ?",
      "choix": [
        "Maintenir l'exigence : le screening, proportionné à la sensibilité du poste et conforme au droit local, est une condition d'embauche",
        "L'embaucher en compensant par une période d'essai prolongée et un encadrement renforcé",
        "L'embaucher avec des accès restreints pendant six mois avant de lui accorder les droits complets",
        "Remplacer la vérification par une attestation sur l'honneur signée par le candidat"
      ],
      "reponse": 0,
      "explication": "Pour un poste à accès privilégié sur des données financières, la vérification d'antécédents prévue par la politique est un contrôle de personnel non négociable, mené dans le respect du droit local et proportionné au poste. Aucune des alternatives ne révèle un éventuel passé de fraude : la période d'essai n'observe que le comportement futur, les accès restreints sont incompatibles avec la fonction d'administrateur et ne font que différer le risque, et l'attestation sur l'honneur repose sur la bonne foi de la personne qu'on cherche précisément à vérifier.",
      "difficulte": 2,
      "pourquoi": [
        "Correcte : pour un poste à accès privilégié sur des données financières, le screening prévu par la politique est un contrôle de personnel non négociable, mené dans le respect du droit local.",
        "Substitution illusoire : une période d'essai observe le comportement futur ; elle ne révèle rien d'un passé de fraude que la vérification d'antécédents aurait détecté.",
        "Incompatible avec le poste : un administrateur de bases de données a besoin d'accès privilégiés pour travailler ; restreindre ses droits ne fait que retarder le risque sans le traiter.",
        "Contrôle déclaratif sans valeur probante : l'attestation sur l'honneur repose sur la bonne foi de la personne qu'on cherche justement à vérifier."
      ]
    },
    {
      "q": "Un ingénieur démissionne pour rejoindre un concurrent direct et affirme pouvoir désormais parler librement des projets confidentiels puisqu'il n'est plus salarié. Quel document donne à l'organisation le MEILLEUR recours ?",
      "choix": [
        "L'Acceptable Use Policy (AUP) qu'il avait signée à son arrivée",
        "Son contrat de travail, même arrivé à terme",
        "Le Non-Disclosure Agreement (NDA), dont les obligations survivent à la fin de l'emploi",
        "La politique de classification des données de l'entreprise"
      ],
      "reponse": 2,
      "explication": "Le NDA est précisément conçu pour que l'obligation de confidentialité survive à la fin de la relation d'emploi : c'est lui qui fonde un recours juridique contre la divulgation d'informations confidentielles par un ancien salarié. L'AUP encadre l'usage des ressources informatiques pendant l'emploi, les obligations générales du contrat de travail cessent pour l'essentiel avec la relation, et la politique de classification est un document interne qui n'engage pas contractuellement un ex-employé.",
      "difficulte": 2,
      "pourquoi": [
        "Hors périmètre : l'AUP encadre l'usage acceptable des ressources informatiques pendant l'emploi, pas la confidentialité après le départ.",
        "Insuffisant : les obligations générales du contrat de travail s'éteignent pour l'essentiel avec la relation d'emploi, sauf clauses spécifiques de survie.",
        "Correcte : le NDA est conçu pour que l'obligation de confidentialité survive à la fin du contrat, offrant un recours juridique contre la divulgation.",
        "Document interne : la politique de classification organise la protection des données dans l'entreprise, elle ne lie pas contractuellement un ancien salarié."
      ]
    },
    {
      "q": "La direction marketing veut lancer un profilage à grande échelle des clients européens combinant géolocalisation et historique d'achats. Avec le DPO, qu'exigez-vous AVANT le démarrage du traitement ?",
      "choix": [
        "Un Security Control Assessment complet de l'infrastructure d'hébergement",
        "Une Data Protection Impact Assessment (DPIA), le traitement présentant un risque élevé pour les droits des personnes",
        "Une notification préalable du projet à l'autorité de contrôle sous 72 heures",
        "Un test d'intrusion de l'application de profilage"
      ],
      "reponse": 1,
      "explication": "Un profilage à grande échelle de résidents européens est un traitement à risque élevé : l'article 35 du GDPR impose une DPIA menée avant le début du traitement, avec le concours du DPO ; si le risque résiduel reste élevé, une consultation préalable de l'autorité de contrôle s'ajoute. Le SCA vérifie les contrôles de sécurité mais n'évalue pas l'impact sur les droits des personnes, le délai de 72 heures concerne la notification d'une violation et non le lancement d'un traitement, et le pentest est un contrôle technique ponctuel qui ne remplace pas l'analyse d'impact.",
      "difficulte": 2,
      "pourquoi": [
        "Angle incomplet : le SCA vérifie les contrôles de sécurité, mais n'évalue pas l'impact du traitement sur les droits et libertés des personnes — l'objet même de l'exigence GDPR.",
        "Correcte : profilage à grande échelle de résidents européens = traitement à risque élevé ; l'article 35 du GDPR impose une DPIA avant le début du traitement, menée avec le DPO.",
        "Confusion de mécanismes : les 72 heures concernent la notification d'une violation de données ; seule une DPIA au risque résiduel élevé impose une consultation préalable de l'autorité.",
        "Contrôle technique ponctuel : utile plus tard, mais il ne remplace pas l'analyse d'impact juridique et organisationnelle exigée avant le traitement."
      ]
    },
    {
      "q": "Un système critique vient d'être autorisé en production. La direction demande comment garantir que sa posture de sécurité restera acceptable entre deux évaluations annuelles. Quelle est la MEILLEURE réponse ?",
      "choix": [
        "Mettre en place un monitoring continu : collecte automatisée, KRI assortis de seuils déclencheurs, réévaluation à chaque changement majeur",
        "Doubler la fréquence des audits en passant à des évaluations semestrielles",
        "Programmer un test d'intrusion complet après chaque incident de sécurité",
        "S'appuyer sur les scans de vulnérabilités mensuels déjà en place"
      ],
      "reponse": 0,
      "explication": "Le continuous monitoring comble précisément l'angle mort entre deux évaluations ponctuelles : visibilité permanente par collecte automatisée, indicateurs de risque dotés de seuils qui déclenchent une action prédéfinie, et réévaluation dès qu'un changement majeur modifie le profil de risque. Des audits semestriels restent du ponctuel avec des mois d'angle mort, un pentest post-incident est réactif par construction, et les scans mensuels ne couvrent qu'une famille de faiblesses techniques sans mesurer l'efficacité globale des contrôles.",
      "difficulte": 3,
      "pourquoi": [
        "Correcte : le monitoring continu maintient une visibilité permanente, déclenche des actions au franchissement des seuils de KRI, et réévalue le risque à chaque changement majeur — exactement la demande.",
        "Toujours du ponctuel : des audits semestriels laissent encore des mois d'angle mort et ne détectent ni dérive de configuration ni évolution de la menace en temps utile.",
        "Réactif par construction : attendre l'incident pour évaluer revient à constater l'échec au lieu de le prévenir.",
        "Fragmentaire : les scans mensuels ne couvrent qu'une famille de faiblesses techniques, sans mesurer l'efficacité d'ensemble des contrôles ni la dérive du risque."
      ]
    },
    {
      "q": "Les employés d'une fintech subissent des arnaques à l'investissement en cryptomonnaie et des deepfakes vocaux imitant leur direction, mais la formation de sensibilisation, conçue il y a trois ans, ne couvre que le phishing par e-mail. Que devrait faire le responsable du programme ?",
      "choix": [
        "Augmenter la fréquence des campagnes de phishing simulé existantes",
        "Attendre la prochaine revue annuelle planifiée pour modifier les supports",
        "Compenser par un durcissement des filtres de messagerie",
        "Déclencher une revue du contenu pour intégrer les menaces émergentes, puis re-mesurer l'efficacité du programme"
      ],
      "reponse": 3,
      "explication": "Le contenu SETA est un contenu vivant : la revue périodique planifiée se complète de revues déclenchées par l'évolution des menaces. Face à des attaques émergentes avérées — cryptomonnaie, deepfakes — non couvertes par des supports vieux de trois ans, on déclenche la revue du contenu, on l'adapte aux nouveaux vecteurs, puis on mesure l'effet de la mise à jour. Intensifier les simulations de phishing e-mail n'apprend rien sur ces vecteurs, attendre la revue annuelle laisse les employés exposés, et les filtres de messagerie n'arrêtent ni un appel deepfake ni une arnaque hors des canaux de l'entreprise.",
      "difficulte": 2,
      "pourquoi": [
        "Plus de la même chose : intensifier des simulations de phishing par e-mail n'apprend rien aux employés sur des vecteurs que le programme ne couvre pas.",
        "Trop lent : la revue planifiée se complète de revues déclenchées par l'évolution des menaces ; attendre laisse les employés exposés pendant des mois.",
        "Contrôle technique inadapté : les filtres de messagerie n'arrêtent ni un appel deepfake ni une arnaque à l'investissement menée hors des canaux de l'entreprise.",
        "Correcte : un programme SETA se révise sur déclencheur face à des menaces émergentes avérées — mise à jour du contenu, adaptation aux nouveaux vecteurs, puis nouvelle mesure d'efficacité."
      ]
    },
    {
      "q": "Un analyste certifié CISSP constate qu'une pratique commerciale de son entreprise est parfaitement légale, mais contraire au code d'éthique interne de l'organisation. Quelle est la MEILLEURE conduite ?",
      "choix": [
        "Ne rien faire : seul le code d'éthique ISC² s'impose à un certifié",
        "Démissionner afin de ne pas compromettre sa certification",
        "Signaler la pratique par le canal prévu par le code interne, qu'il a le devoir de soutenir et de promouvoir",
        "Déposer une plainte éthique formelle auprès d'ISC² contre son employeur"
      ],
      "reponse": 2,
      "explication": "Le professionnel doit soutenir et promouvoir le code d'éthique de son organisation en plus du code ISC². Une pratique peut être légale et néanmoins contraire à l'éthique interne : le levier approprié est alors le dispositif prévu par l'organisation elle-même, c'est-à-dire le signalement par le canal interne. Ignorer la violation contredit les deux codes, la démission est un dernier recours quand les canaux internes ont échoué, et ISC² instruit les plaintes contre des certifiés au titre de ses canons, pas contre les pratiques commerciales d'une entreprise.",
      "difficulte": 2,
      "pourquoi": [
        "Faux : le professionnel doit soutenir et promouvoir le code d'éthique de son organisation en plus du code ISC² ; ignorer une violation interne contredit les deux.",
        "Disproportionnée : la démission n'est envisagée qu'en dernier recours, quand les canaux internes ont échoué ou qu'on exige de lui un acte contraire à l'éthique.",
        "Correcte : la pratique étant légale, le levier approprié est le dispositif interne — signalement par le canal prévu par le code de l'organisation, que chaque employé doit faire vivre.",
        "Mauvais destinataire : ISC² instruit les plaintes visant des certifiés au titre de ses canons, pas les pratiques commerciales d'une entreprise."
      ]
    }
  ],
  "quizEn": [
    {
      "q": "Which of the following security principles is violated when an attacker modifies data while it is being transmitted between two systems?",
      "choix": [
        "Integrity",
        "Availability",
        "Confidentiality",
        "Authenticity"
      ],
      "reponse": 0,
      "explication": "La modification non autorisée de données, au repos ou en transit, est une atteinte à l'intégrité (Integrity). La confidentialité serait violée par une lecture non autorisée, la disponibilité par une interruption de service, et l'authenticité par l'usurpation de l'origine du message. À l'examen, associez toujours l'action de l'attaquant au pilier touché : modifier = intégrité.",
      "difficulte": 1,
      "pourquoi": [
        "Correcte : modifier des données en transit est une atteinte directe à l'intégrité.",
        "Hors sujet : la disponibilité concerne l'interruption d'accès au service.",
        "Piège d'association : la confidentialité serait violée par une lecture non autorisée, pas par une modification.",
        "Proche mais distinct : l'authenticité concerne l'origine du message, pas la préservation de son contenu."
      ]
    },
    {
      "q": "A security manager wants to ensure that the sender of a critical financial message cannot later deny having sent it. Which of the following BEST meets this requirement?",
      "choix": [
        "Hashing the message with SHA-256",
        "Symmetric encryption of the message",
        "Digital signatures supported by a public key infrastructure",
        "Role-based access control"
      ],
      "reponse": 2,
      "explication": "La non-répudiation exige de lier l'action à une identité unique de façon prouvable : c'est ce que fait la signature numérique, car la clé privée n'est détenue que par le signataire. Le chiffrement symétrique utilise une clé partagée (chaque partie pourrait avoir produit le message), un hachage seul ne prouve pas l'identité de l'émetteur, et le RBAC gère les droits d'accès, pas la preuve d'origine.",
      "difficulte": 2,
      "pourquoi": [
        "Trop étroit : un hachage prouve l'intégrité du contenu, pas l'identité de l'expéditeur.",
        "Insuffisant : la clé symétrique étant partagée, chaque partie peut nier être l'auteur du message — aucune non-répudiation.",
        "Correcte : la signature numérique lie le message à la clé privée du seul expéditeur, appuyée par une PKI — c'est le mécanisme de la non-répudiation.",
        "Hors sujet : le RBAC contrôle les accès, il n'établit pas la preuve d'origine d'un message."
      ]
    },
    {
      "q": "Who holds the ULTIMATE responsibility for the security of an organization's information assets?",
      "choix": [
        "The chief information security officer (CISO)",
        "The security steering committee",
        "The data custodians",
        "Senior management"
      ],
      "reponse": 3,
      "explication": "La responsabilité ultime de la sécurité appartient toujours à la direction générale (senior management) : elle approuve les politiques, alloue les ressources et assume les conséquences légales. Le CISO porte une responsabilité fonctionnelle, les custodians appliquent la protection au quotidien, et le comité de pilotage conseille et coordonne. C'est l'un des réflexes les plus testés de l'examen.",
      "difficulte": 1,
      "pourquoi": [
        "Réponse tentante de technicien-manager : le CISO dirige le programme, mais la responsabilité ultime ne se délègue pas.",
        "Rôle consultatif : le comité de pilotage coordonne et arbitre, il n'assume pas la responsabilité ultime.",
        "Réponse opérationnelle : les custodians appliquent les protections décidées par d'autres.",
        "Correcte : la direction générale porte l'accountability finale de la sécurité des actifs informationnels."
      ]
    },
    {
      "q": "What should a security manager do FIRST when initiating a business continuity planning effort?",
      "choix": [
        "Perform the business impact analysis",
        "Obtain senior management support and define the project scope",
        "Develop recovery procedures for critical systems",
        "Select an alternate processing site"
      ],
      "reponse": 1,
      "explication": "La première étape du processus BCP est le cadrage du projet : obtenir le soutien de la direction, bâtir le business case, constituer l'équipe et définir le périmètre. Sans cet appui, la BIA et les phases suivantes n'aboutiront pas. Le choix d'un site alternatif et les procédures de récupération relèvent de phases ultérieures (continuity planning et DRP). Face à une question « FIRST », remontez toujours au début du processus.",
      "difficulte": 2,
      "pourquoi": [
        "Hors séquence : la BIA est essentielle mais suppose un projet déjà cadré et soutenu.",
        "Correcte : sans soutien de la direction ni périmètre défini, aucune étape du BCP n'a d'autorité ni de ressources.",
        "Hors phase : les procédures de reprise se développent en aval, sur la base des priorités issues de la BIA.",
        "Hors phase : le choix d'un site alternatif relève de la stratégie, après la BIA."
      ]
    },
    {
      "q": "Which of the following BEST describes due diligence?",
      "choix": [
        "Delegating security decisions to system administrators",
        "Understanding risks and developing plans, policies, and processes to address them",
        "Purchasing cyber insurance to transfer risk",
        "Applying security controls in day-to-day operations"
      ],
      "reponse": 1,
      "explication": "La Due Diligence, c'est savoir ce qui doit être fait : comprendre les risques, évaluer, planifier, documenter les politiques et structures. L'application quotidienne des contrôles est la Due Care (« Due Diligence pense, Due Care agit »). L'assurance est une réponse de transfert de risque, et déléguer les décisions de sécurité aux administrateurs serait un manquement du management à ses devoirs.",
      "difficulte": 2,
      "pourquoi": [
        "Contresens managérial : déléguer les décisions de sécurité aux administrateurs est l'inverse d'une gouvernance diligente.",
        "Correcte : la Due Diligence est l'effort structuré pour comprendre les risques et bâtir plans, politiques et processus pour les traiter.",
        "Trop étroit : l'assurance est une option de transfert du risque, pas la définition de la Due Diligence.",
        "Piège de paire : appliquer les contrôles au quotidien décrit la Due Care, pas la Due Diligence."
      ]
    },
    {
      "q": "An asset is valued at $400,000. A threat against it has an exposure factor of 25% and is expected to occur once every two years. What is the annualized loss expectancy (ALE)?",
      "choix": [
        "$25,000",
        "$200,000",
        "$100,000",
        "$50,000"
      ],
      "reponse": 3,
      "explication": "SLE = AV × EF = 400 000 × 0,25 = 100 000 $. ARO = une occurrence tous les deux ans = 0,5. ALE = SLE × ARO = 100 000 × 0,5 = 50 000 $. Le piège classique est de répondre 100 000 $ (la SLE) en oubliant de convertir la fréquence en taux annualisé. Entraînez-vous à convertir « une fois tous les N ans » en ARO = 1/N.",
      "difficulte": 2,
      "pourquoi": [
        "Erreur de combinaison : 25 000 $ ne correspond à aucune application correcte des formules.",
        "Erreur d'ARO : 200 000 $ supposerait deux occurrences par an au lieu d'une tous les deux ans.",
        "Piège de calcul : 100 000 $ est le SLE (400 000 × 25 %), pas la perte annualisée.",
        "Correcte : ALE = SLE × ARO = 100 000 × 0,5 = 50 000 $."
      ]
    },
    {
      "q": "After a risk assessment, management decides to discontinue an online service because the potential losses outweigh the expected benefits. Which risk response does this represent?",
      "choix": [
        "Risk avoidance",
        "Risk acceptance",
        "Risk transference",
        "Risk mitigation"
      ],
      "reponse": 0,
      "explication": "Renoncer à une activité parce que le risque dépasse le bénéfice attendu est l'évitement du risque (avoidance) : c'est la seule réponse qui supprime l'exposition en éliminant l'activité elle-même. La mitigation réduirait le risque par des contrôles tout en maintenant le service, le transfert le confierait à un tiers (assurance), et l'acceptation assumerait la perte potentielle en continuant l'activité.",
      "difficulte": 1,
      "pourquoi": [
        "Correcte : abandonner l'activité dont le risque excède les bénéfices est la définition de l'évitement du risque.",
        "Mauvaise réponse : l'acceptation maintiendrait le service en assumant le risque, or il est arrêté.",
        "Mauvaise réponse : aucun tiers (assureur, prestataire) ne reprend le risque ici.",
        "Mauvaise réponse au risque : l'atténuation réduirait le risque par des contrôles tout en maintenant le service."
      ]
    },
    {
      "q": "What is the PRIMARY purpose of a business impact analysis (BIA)?",
      "choix": [
        "To determine who caused previous service outages",
        "To test the effectiveness of disaster recovery procedures",
        "To identify critical business functions and assess the impact of their disruption over time",
        "To calculate the annual security budget"
      ],
      "reponse": 2,
      "explication": "La BIA identifie les fonctions et processus critiques de l'organisation, évalue l'impact de leur interruption dans le temps, et en déduit les priorités de récupération ainsi que les métriques RTO, RPO et MTD. Les tests du DRP interviennent après l'élaboration des plans, la recherche de responsabilité relève d'autres processus, et le budget sécurité n'est pas l'objet de la BIA.",
      "difficulte": 1,
      "pourquoi": [
        "Hors sujet : la recherche des causes relève de l'analyse post-incident, pas de la BIA.",
        "Hors phase : les tests du DRP interviennent après la construction des plans.",
        "Correcte : la BIA identifie les fonctions critiques et mesure l'impact de leur interruption dans le temps.",
        "Hors sujet : le budget sécurité n'est pas un livrable de la BIA."
      ]
    },
    {
      "q": "An organization performs backups of its transaction database every six hours. Which recovery metric is DIRECTLY determined by this backup frequency?",
      "choix": [
        "Recovery point objective (RPO)",
        "Mean time between failures (MTBF)",
        "Maximum tolerable downtime (MTD)",
        "Recovery time objective (RTO)"
      ],
      "reponse": 0,
      "explication": "La fréquence des sauvegardes détermine la quantité maximale de données perdues en cas d'incident : c'est le RPO. Avec une sauvegarde toutes les six heures, on peut perdre jusqu'à six heures de transactions. Le RTO mesure le délai de remise en service, le MTD la durée d'interruption au-delà de laquelle l'organisation n'est plus viable, et le MTBF la fiabilité moyenne d'un équipement.",
      "difficulte": 1,
      "pourquoi": [
        "Correcte : sauvegarder toutes les six heures fixe la perte de données maximale possible, c'est-à-dire le RPO.",
        "Hors sujet : le MTBF mesure la fiabilité des équipements.",
        "Hors sujet : le MTD est une limite métier définie par la direction, indépendante de la technique.",
        "Mauvaise métrique : le RTO dépend des procédures de restauration, pas de la fréquence des sauvegardes."
      ]
    },
    {
      "q": "A fire breaks out in the primary data center during business hours. What should the disaster recovery team address FIRST?",
      "choix": [
        "Failing over critical services to the alternate site",
        "Notifying the cyber insurance provider",
        "Restoring the most recent backups",
        "Ensuring the safety of all personnel"
      ],
      "reponse": 3,
      "explication": "La priorité absolue de tout plan de continuité ou de reprise est la vie humaine : on évacue et on met les personnes en sécurité avant toute considération technique ou financière. Le basculement, les notifications et la restauration viennent ensuite. À l'examen, quand la sécurité des personnes figure parmi les choix, c'est presque toujours la bonne réponse.",
      "difficulte": 1,
      "pourquoi": [
        "Techniquement pertinent mais pas prioritaire : le basculement attend que les personnes soient en sécurité.",
        "Hors délai : l'assureur sera notifié bien après la mise en sécurité.",
        "Réponse de technicien : la restauration des données n'a aucun sens tant que des vies sont en jeu.",
        "Correcte : la vie humaine prime sur toute autre considération — règle absolue de l'examen comme du terrain."
      ]
    },
    {
      "q": "During a threat modeling exercise, an analyst determines that an attacker could use stolen session tokens to impersonate a legitimate user. Which STRIDE category does this threat belong to?",
      "choix": [
        "Elevation of privilege",
        "Spoofing",
        "Repudiation",
        "Tampering"
      ],
      "reponse": 1,
      "explication": "Se faire passer pour un utilisateur légitime à l'aide d'informations d'authentification volées (jetons de session, mots de passe) est du Spoofing, l'usurpation d'identité. Le tampering altère des données, la repudiation consiste à nier une action, et l'elevation of privilege donne à un compte limité des pouvoirs supérieurs — ce qui n'est pas le cas ici : l'attaquant utilise les droits existants de la victime.",
      "difficulte": 2,
      "pourquoi": [
        "Piège voisin : l'attaquant obtient les droits de l'utilisateur usurpé, il n'élève pas ses privilèges au-delà.",
        "Correcte : utiliser des jetons volés pour se faire passer pour un utilisateur légitime est du spoofing (usurpation d'identité).",
        "Mauvaise catégorie : la répudiation consiste à nier une action faute de traçabilité.",
        "Mauvaise catégorie : le tampering modifie données ou code, il n'usurpe pas d'identité."
      ]
    },
    {
      "q": "Which threat modeling methodology consists of seven stages and focuses on aligning threat analysis with business objectives and risk?",
      "choix": [
        "DREAD",
        "OCTAVE",
        "PASTA",
        "STRIDE"
      ],
      "reponse": 2,
      "explication": "PASTA (Process for Attack Simulation and Threat Analysis) déroule sept étapes, des objectifs métier jusqu'à l'analyse et la gestion du risque, en passant par la décomposition de l'application et la simulation d'attaques : c'est la méthodologie centrée sur le risque et alignée sur le métier. STRIDE catégorise les menaces, DREAD les priorise, et OCTAVE est un cadre d'évaluation des risques organisationnels, pas une méthodologie de threat modeling en sept étapes.",
      "difficulte": 2,
      "pourquoi": [
        "Mauvais modèle : DREAD est une grille de notation, pas un processus en sept étapes.",
        "Mauvais modèle : OCTAVE est une méthode d'évaluation des risques organisationnels, pas ce processus en sept étapes.",
        "Correcte : PASTA aligne en sept étapes l'analyse des menaces sur les objectifs métier et le risque.",
        "Mauvais modèle : STRIDE est une taxonomie en six catégories, sans étapes séquentielles."
      ]
    },
    {
      "q": "A development team has categorized a long list of threats using STRIDE. What should the team do NEXT?",
      "choix": [
        "Rate and prioritize the threats, for example using DREAD",
        "Implement countermeasures for every identified threat",
        "Restart the identification phase with a different methodology",
        "Publish the full threat list to all employees"
      ],
      "reponse": 0,
      "explication": "Après l'identification et la catégorisation (STRIDE), l'étape logique est la priorisation : noter chaque menace, par exemple avec les cinq critères DREAD, pour traiter d'abord les plus sérieuses. Traiter toutes les menaces sans priorisation gaspillerait les ressources (les moyens sont limités), recommencer l'identification n'apporte rien, et diffuser la liste à tous exposerait des informations sensibles sur les faiblesses du système.",
      "difficulte": 2,
      "pourquoi": [
        "Correcte : après l'identification vient la priorisation, par exemple avec la notation DREAD.",
        "Irréaliste : traiter toutes les menaces sans priorisation gaspille des ressources limitées.",
        "Hors phase : recommencer l'identification n'apporte rien, cette étape est achevée.",
        "Contre-productif : publier la liste complète des menaces créerait un risque de divulgation sans bénéfice."
      ]
    },
    {
      "q": "A critical vulnerability is announced in a widely used open source library. Which of the following BEST enables an organization to quickly identify all affected applications?",
      "choix": [
        "A vendor service level agreement",
        "A software bill of materials (SBOM)",
        "An annual penetration test",
        "A hardware root of trust"
      ],
      "reponse": 1,
      "explication": "Le SBOM inventorie tous les composants, bibliothèques et dépendances de chaque application : c'est l'outil qui permet de localiser immédiatement les logiciels embarquant la bibliothèque vulnérable. Le root of trust matériel protège le démarrage, le SLA encadre les engagements d'un fournisseur, et un pentest annuel ne fournit ni l'exhaustivité ni la réactivité nécessaires face à une vulnérabilité publiée aujourd'hui.",
      "difficulte": 2,
      "pourquoi": [
        "Levier contractuel, pas outil d'inventaire : le SLA n'identifie pas les applications affectées.",
        "Correcte : le SBOM liste les composants et dépendances de chaque application, permettant d'identifier immédiatement celles qui embarquent la bibliothèque vulnérable.",
        "Trop lent et ponctuel : un pentest annuel ne fournit pas de cartographie exhaustive des dépendances au moment voulu.",
        "Hors sujet : le root of trust matériel sécurise le démarrage, il n'inventorie pas les bibliothèques logicielles."
      ]
    },
    {
      "q": "Which of the following BEST reduces the risk of counterfeit network hardware being introduced into an organization's infrastructure?",
      "choix": [
        "Extending the warranty period on all purchased devices",
        "Increasing the frequency of internal vulnerability scans",
        "Requiring all employees to sign an acceptable use policy",
        "Purchasing equipment only from authorized distributors and verifying its integrity upon receipt"
      ],
      "reponse": 3,
      "explication": "Le risque de contrefaçon se traite à la source, dans la chaîne d'approvisionnement : acheter uniquement auprès de canaux autorisés et vérifier l'intégrité et l'authenticité du matériel à réception (numéros de série, scellés, root of trust). La garantie est un recours commercial, pas une prévention ; les scans de vulnérabilités ne détectent pas un implant matériel ; et l'AUP encadre le comportement des employés, pas la provenance du matériel.",
      "difficulte": 2,
      "pourquoi": [
        "Hors sujet : la garantie couvre les pannes, elle ne prévient pas la contrefaçon.",
        "Hors sujet : les scans de vulnérabilités ne détectent pas un matériel contrefait d'apparence légitime.",
        "Hors périmètre : l'AUP encadre le comportement des employés, pas la chaîne d'approvisionnement.",
        "Correcte : acheter uniquement auprès de distributeurs agréés et vérifier l'intégrité à réception coupe le canal principal d'introduction de matériel contrefait."
      ]
    },
    {
      "q": "A company subject to the GDPR discovers a breach of personal data belonging to EU residents. Within what timeframe must the competent supervisory authority be notified?",
      "choix": [
        "60 days",
        "30 days",
        "72 hours",
        "24 hours"
      ],
      "reponse": 2,
      "explication": "Le GDPR impose la notification de la violation à l'autorité de contrôle compétente dans les 72 heures suivant sa découverte. Le délai de 24 heures correspond à l'alerte précoce de NIS2, et 60 jours au régime HIPAA/HITECH américain pour la notification des individus. Mémorisez cette grille de délais : c'est une question quasi certaine à l'examen.",
      "difficulte": 1,
      "pourquoi": [
        "Piège de régime : 60 jours correspond à HIPAA/HITECH aux États-Unis.",
        "Sans fondement dans le GDPR : aucun délai de 30 jours n'y figure.",
        "Correcte : l'article 33 du GDPR impose la notification de l'autorité de contrôle dans les 72 heures suivant la découverte.",
        "Trop court : 24 heures est le délai de l'early warning NIS2, pas celui du GDPR."
      ]
    },
    {
      "q": "Which of the following BEST describes how PCI DSS is enforced on a merchant?",
      "choix": [
        "Through federal legislation on electronic payments",
        "Through contractual obligations with the merchant's acquiring bank",
        "Through European Union directives",
        "Through a mandatory ISO certification scheme"
      ],
      "reponse": 1,
      "explication": "PCI DSS n'est pas une loi : c'est un standard de l'industrie des cartes de paiement, imposé par le contrat entre le commerçant et sa banque acquéreuse. Sa force vient des pénalités contractuelles et du risque de perdre la capacité d'accepter les cartes. Aucune législation fédérale, certification ISO ou directive européenne ne fonde son application — c'est le piège classique de l'examen.",
      "difficulte": 2,
      "pourquoi": [
        "Fausse source : aucune loi fédérale n'impose PCI DSS.",
        "Correcte : PCI DSS s'applique par les obligations contractuelles liant le commerçant à sa banque acquéreuse.",
        "Fausse source : l'Union européenne n'est pas l'autorité de PCI DSS.",
        "Fausse source : aucune certification ISO obligatoire ne porte PCI DSS."
      ]
    },
    {
      "q": "A multinational corporation needs a lawful mechanism to routinely transfer employee data among its subsidiaries located inside and outside the European Union. Which mechanism is MOST appropriate?",
      "choix": [
        "Binding corporate rules (BCR) approved by a supervisory authority",
        "Collecting individual consent from each employee for every transfer",
        "Continuing to rely on the invalidated Privacy Shield",
        "Waiting for adequacy decisions covering every country involved"
      ],
      "reponse": 0,
      "explication": "Les Binding Corporate Rules sont le mécanisme conçu pour les transferts intra-groupe des multinationales : un corpus unique de règles contraignantes, approuvé par une autorité de contrôle, couvre toutes les filiales. Le Privacy Shield est invalidé depuis Schrems II, les décisions d'adéquation dépendent de la Commission et ne couvrent pas tous les pays, et le consentement des salariés est rarement considéré comme libre dans la relation de travail.",
      "difficulte": 3,
      "pourquoi": [
        "Correcte : les BCR approuvées par une autorité de contrôle sont l'instrument conçu pour les transferts intra-groupe réguliers.",
        "Fragile : le consentement individuel systématique des salariés est précaire (lien de subordination, retrait possible) et ingérable à l'échelle.",
        "Illégal : le Privacy Shield est invalidé depuis Schrems II (2020).",
        "Irréaliste : attendre des décisions d'adéquation pour chaque pays laisserait les transferts sans base légale indéfiniment."
      ]
    },
    {
      "q": "Following the Schrems II ruling, what MUST an organization do before relying on standard contractual clauses (SCC) to transfer personal data outside the EU?",
      "choix": [
        "Obtain individual approval from the European Commission for each transfer",
        "Nothing; SCC remain automatically sufficient in all cases",
        "Assess the legal environment of the destination country and implement supplementary measures where needed",
        "Replace the SCC with the Privacy Shield framework"
      ],
      "reponse": 2,
      "explication": "Schrems II a maintenu la validité des SCC mais a imposé une condition : l'exportateur doit évaluer si le droit du pays de destination (notamment ses lois de surveillance) permet de respecter les clauses en pratique — c'est le transfer impact assessment — et ajouter des mesures supplémentaires (chiffrement, pseudonymisation…) si nécessaire. La Commission n'approuve pas chaque transfert individuellement, et le Privacy Shield est précisément ce que l'arrêt a invalidé.",
      "difficulte": 3,
      "pourquoi": [
        "Procédure inexistante : la Commission n'approuve pas les transferts individuellement.",
        "Absolu et faux depuis Schrems II : les SCC ne suffisent plus automatiquement.",
        "Correcte : l'arrêt impose d'évaluer le droit du pays de destination (transfer impact assessment) et d'ajouter des mesures supplémentaires si nécessaire.",
        "Anachronique : le Privacy Shield est précisément le mécanisme invalidé par cet arrêt."
      ]
    },
    {
      "q": "Which standard of proof must be met to obtain a conviction in a criminal case?",
      "choix": [
        "Clear and convincing evidence",
        "Probable cause",
        "Preponderance of the evidence",
        "Beyond a reasonable doubt"
      ],
      "reponse": 3,
      "explication": "En matière criminelle, la culpabilité doit être établie au-delà de tout doute raisonnable (beyond a reasonable doubt) : c'est le standard le plus exigeant, car la liberté de la personne est en jeu, et il impose la collecte de preuves la plus rigoureuse. La prépondérance de la preuve suffit au civil, et la probable cause est le seuil requis pour obtenir un mandat, pas pour condamner.",
      "difficulte": 1,
      "pourquoi": [
        "Standard intermédiaire : « clear and convincing » s'applique à certaines affaires civiles particulières.",
        "Hors sujet : la probable cause est le seuil pour obtenir un mandat, pas pour condamner.",
        "Standard civil : la prépondérance de la preuve suffit au civil, pas au pénal.",
        "Correcte : la condamnation pénale exige la preuve au-delà de tout doute raisonnable, le standard le plus élevé."
      ]
    },
    {
      "q": "Your organization receives notice of a regulatory investigation along with a request to preserve relevant records. What should the security manager do FIRST?",
      "choix": [
        "Implement a legal hold to preserve all potentially relevant evidence",
        "Negotiate the scope of the investigation with the regulator",
        "Delete outdated emails in accordance with the retention schedule",
        "Wait for a court order before taking any action"
      ],
      "reponse": 0,
      "explication": "Dans une enquête réglementaire, l'organisation a l'obligation de coopérer et de préserver les preuves : la première action est de mettre en place un legal hold suspendant toute destruction de documents potentiellement pertinents, y compris les purges automatiques de rétention. Continuer à supprimer des e-mails, même selon le calendrier normal, pourrait constituer une destruction de preuves ; attendre un ordre du tribunal ou négocier ne dispense pas de préserver immédiatement.",
      "difficulte": 2,
      "pourquoi": [
        "Correcte : le legal hold suspend immédiatement toute destruction et préserve l'ensemble des éléments potentiellement pertinents.",
        "Hors priorité : négocier le périmètre peut venir ensuite ; la préservation, elle, est immédiate.",
        "Dangereux : appliquer la purge planifiée pendant une enquête détruirait des preuves potentielles (spoliation).",
        "Hors délai : l'obligation de préservation naît dès la notification, pas à l'arrivée d'une ordonnance."
      ]
    },
    {
      "q": "A CISSP-certified professional discovers that her employer is knowingly exposing the public to a serious safety risk. According to the ISC² Code of Ethics, whose interests should take precedence?",
      "choix": [
        "The profession's reputation",
        "The professional's own career interests",
        "Society's and the common good's",
        "The employer's, under the duty to principals"
      ],
      "reponse": 2,
      "explication": "Les canons du code ISC² sont hiérarchisés : le premier, protéger la société, le bien commun, la confiance du public et les infrastructures, prime sur tous les autres, y compris le devoir envers les mandants (canon III) qui couvre l'employeur. En cas de conflit, l'intérêt de la société l'emporte. La réputation de la profession n'arrive qu'en quatrième position, et l'intérêt personnel n'est pas un canon.",
      "difficulte": 2,
      "pourquoi": [
        "Rang inférieur : la profession est le dernier canon dans l'ordre de préséance.",
        "Hors éthique : l'intérêt personnel n'est protégé par aucun canon.",
        "Correcte : le canon I place la société, le bien commun et la confiance publique au sommet de l'ordre de préséance.",
        "Piège de loyauté : le devoir envers l'employeur (canon III) cède devant la protection du public."
      ]
    },
    {
      "q": "Which type of security document provides detailed, step-by-step instructions for completing a specific security task?",
      "choix": [
        "Guideline",
        "Standard",
        "Policy",
        "Procedure"
      ],
      "reponse": 3,
      "explication": "La procédure (ou SOP, standard operating procedure) décrit pas à pas les actions exactes pour accomplir une tâche : c'est le document le plus détaillé et le plus opérationnel de la hiérarchie documentaire. La policy fixe les objectifs stratégiques, le standard impose des exigences uniformes obligatoires, et la guideline formule des recommandations flexibles et facultatives.",
      "difficulte": 1,
      "pourquoi": [
        "Mauvais caractère : la guideline recommande sans détailler d'étapes obligatoires.",
        "Mauvais grain : le standard impose des exigences uniformes, pas des étapes d'exécution.",
        "Mauvais grain : la policy exprime l'intention de la direction, sans détail opérationnel.",
        "Correcte : la procédure décrit pas à pas l'exécution d'une tâche spécifique."
      ]
    },
    {
      "q": "Which type of security document offers recommendations that are flexible and NOT mandatory?",
      "choix": [
        "Standard",
        "Guideline",
        "Policy",
        "Baseline"
      ],
      "reponse": 1,
      "explication": "La guideline est le seul document de la hiérarchie qui soit une recommandation : flexible, adaptable au contexte, et non obligatoire. Policies, standards et baselines sont tous contraignants : la policy au niveau stratégique, le standard pour l'uniformité des technologies et pratiques, et la baseline pour le niveau minimal de sécurité de chaque type de système.",
      "difficulte": 1,
      "pourquoi": [
        "Obligatoire : le standard s'impose uniformément.",
        "Correcte : la guideline est le seul document volontairement flexible et non contraignant.",
        "Obligatoire : la policy engage toute l'organisation.",
        "Obligatoire : la baseline fixe un niveau minimal imposé."
      ]
    },
    {
      "q": "A database administrator with privileged access is being terminated involuntarily. What should the organization do FIRST?",
      "choix": [
        "Collect the company laptop and access badge",
        "Conduct a detailed exit interview",
        "Announce the departure to the rest of the team",
        "Disable the administrator's accounts and access rights"
      ],
      "reponse": 3,
      "explication": "Pour un départ contraint d'un titulaire de comptes à privilèges, la priorité est de désactiver les accès logiques avant ou au moment même de l'annonce, afin d'empêcher toute action malveillante (sabotage, exfiltration). L'entretien de sortie, la récupération du matériel et la communication interne suivent : aucun d'eux ne protège les systèmes tant que les accès restent actifs.",
      "difficulte": 1,
      "pourquoi": [
        "Important mais secondaire : matériel et badge se récupèrent après la coupure des accès logiques.",
        "Hors priorité : l'entretien de départ peut attendre ; des accès privilégiés actifs, non.",
        "Hors priorité : la communication interne n'a aucun caractère d'urgence sécuritaire.",
        "Correcte : pour un départ contraint d'un compte à privilèges, on coupe d'abord les accès afin de prévenir tout acte de représailles ou d'exfiltration."
      ]
    },
    {
      "q": "The badge reader controlling access to the server room fails, and a security guard is posted at the door to verify identities until the system is repaired. Which type of control does the guard represent?",
      "choix": [
        "Compensating",
        "Directive",
        "Recovery",
        "Corrective"
      ],
      "reponse": 0,
      "explication": "Un contrôle compensatoire remplace ou renforce temporairement un contrôle principal défaillant : le gardien compense la panne du lecteur de badges en assurant la même fonction de contrôle d'accès. Un contrôle correctif ramènerait le système à la normale après incident, un contrôle directif oriente les comportements (panneaux, consignes), et un contrôle de récupération restaure après des dommages étendus.",
      "difficulte": 2,
      "pourquoi": [
        "Correcte : le gardien fournit une protection alternative équivalente pendant la défaillance du contrôle principal — contrôle compensatoire.",
        "Mauvais rôle : un contrôle directif prescrit des comportements, il ne vérifie pas les identités.",
        "Mauvaise phase : la récupération vise le retour à l'état normal après sinistre.",
        "Mauvaise phase : un contrôle correctif intervient après un incident pour en réduire les effets."
      ]
    },
    {
      "q": "Which of the following BEST indicates that a security awareness program is effective?",
      "choix": [
        "The size of the budget allocated to the program",
        "A decreasing click rate and an increasing reporting rate during simulated phishing campaigns",
        "The number of training sessions delivered each year",
        "The attendance rate at the annual training session"
      ],
      "reponse": 1,
      "explication": "L'efficacité d'un programme de sensibilisation se mesure aux changements de comportement : la baisse du taux de clic et la hausse du taux de signalement lors des campagnes de phishing simulé sont des indicateurs de résultat. Le nombre de sessions, le budget et l'assiduité ne mesurent que l'activité ou les moyens engagés, pas l'impact réel sur les comportements — distinction classique entre indicateurs de moyens et indicateurs de résultats.",
      "difficulte": 2,
      "pourquoi": [
        "Mesure de moyens : le budget ne dit rien de l'efficacité.",
        "Correcte : la baisse des clics et la hausse des signalements dans les simulations démontrent un changement de comportement mesurable.",
        "Mesure d'activité : le volume de sessions ne prouve aucun changement de comportement.",
        "Mesure de présence : l'assiduité ne garantit pas l'acquisition des réflexes."
      ]
    },
    {
      "q": "A defense contractor discovers a stealthy intrusion that has persisted for two years, using custom-built malware to exfiltrate classified design documents. Which threat actor is MOST likely responsible?",
      "choix": [
        "A negligent insider",
        "A script kiddie",
        "A nation-state advanced persistent threat (APT)",
        "A hacktivist group"
      ],
      "reponse": 2,
      "explication": "Furtivité, persistance sur deux ans, malwares développés sur mesure et ciblage de secrets de défense : tous les marqueurs de l'acteur étatique (APT) sont réunis — ressources quasi illimitées, objectifs d'espionnage, patience. Un script kiddie n'a ni la compétence ni la persistance, un insider négligent cause des incidents par erreur et non une campagne structurée, et un hacktiviste chercherait la visibilité et revendiquerait son action.",
      "difficulte": 2,
      "pourquoi": [
        "Incohérent : un négligent cause des incidents par erreur, il ne conduit pas d'exfiltration furtive outillée.",
        "Incohérent : un script kiddie n'a ni la discrétion ni les outils sur mesure d'une intrusion de deux ans.",
        "Correcte : persistance longue, malware sur mesure, ciblage de plans classifiés — signature d'un APT étatique.",
        "Mobile inadapté : un hacktiviste revendique publiquement, il ne reste pas silencieux deux ans pour voler des plans."
      ]
    },
    {
      "q": "The chief financial officer receives a personalized email, apparently from the CEO, urgently requesting a confidential wire transfer. Which attack does this scenario BEST describe?",
      "choix": [
        "Whaling",
        "Vishing",
        "Tailgating",
        "Pharming"
      ],
      "reponse": 0,
      "explication": "Un message frauduleux personnalisé ciblant un dirigeant (ici le CFO) est du whaling, la variante du spear phishing réservée aux « gros poissons », typique de la fraude BEC (Business Email Compromise). Le vishing passe par le téléphone, le pharming redirige les victimes vers de faux sites en manipulant la résolution DNS, et le tailgating est une intrusion physique en suivant un employé.",
      "difficulte": 1,
      "pourquoi": [
        "Correcte : un e-mail ciblant un dirigeant (CFO) en usurpant le CEO pour obtenir un virement est du whaling — le spear phishing des hautes cibles.",
        "Mauvais canal : le vishing passe par la voix (téléphone).",
        "Hors sujet : le tailgating est une intrusion physique derrière un porteur de badge.",
        "Mauvais mécanisme : le pharming détourne la résolution DNS vers de faux sites."
      ]
    },
    {
      "q": "Which of the following BEST defines residual risk?",
      "choix": [
        "The total risk that has been transferred to an insurance provider",
        "The risk remaining after controls have been implemented, which management chooses to accept",
        "The risk that exists before any controls are applied",
        "The portion of risk eliminated by the controls gap"
      ],
      "reponse": 1,
      "explication": "Le risque résiduel est celui qui subsiste après la mise en place des contrôles approuvés : c'est ce risque que la direction accepte formellement. Le risque existant avant tout traitement est le risque inhérent, le transfert à un assureur est une réponse au risque (pas la définition du résiduel), et le controls gap est la part de risque éliminée par les contrôles — le résiduel est ce qui reste, pas ce qui est éliminé.",
      "difficulte": 1,
      "pourquoi": [
        "Confusion : le transfert à l'assureur est une réponse au risque, pas la définition du résiduel.",
        "Correcte : le risque résiduel subsiste après les contrôles et fait l'objet d'une acceptation formelle par la direction.",
        "Piège temporel : le risque avant contrôles est le risque inhérent.",
        "Concept distinct : le controls gap est la réduction de risque apportée par les contrôles (risque total − controls gap = risque résiduel), pas le risque restant à accepter."
      ]
    },
    {
      "q": "An organization's board asks which framework BEST supports the governance of enterprise IT and its alignment with business strategy. What should the security manager recommend?",
      "choix": [
        "CVSS",
        "FedRAMP",
        "COBIT",
        "PCI DSS"
      ],
      "reponse": 2,
      "explication": "COBIT, publié par ISACA, est le référentiel de gouvernance des technologies de l'information par excellence : il aligne l'IT sur la stratégie de l'entreprise et sert couramment de cadre d'audit et de conformité. PCI DSS protège les données de cartes de paiement, FedRAMP autorise les services cloud pour le gouvernement fédéral américain, et CVSS est un système de notation de la gravité des vulnérabilités.",
      "difficulte": 2,
      "pourquoi": [
        "Hors sujet : CVSS note la sévérité des vulnérabilités.",
        "Hors sujet : FedRAMP autorise les services cloud pour l'administration américaine.",
        "Correcte : COBIT est le référentiel de gouvernance de l'IT d'entreprise, conçu pour aligner l'informatique sur la stratégie métier.",
        "Trop étroit : PCI DSS protège les données de cartes de paiement, ce n'est pas un cadre de gouvernance."
      ]
    },
    {
      "q": "Which of the following BEST describes the difference between risk appetite and risk tolerance?",
      "choix": [
        "Risk tolerance always exceeds risk capacity",
        "The two terms are synonyms and can be used interchangeably",
        "Risk appetite applies only to financial risks",
        "Risk appetite is the total amount of risk an organization is willing to accept, while risk tolerance is the acceptable variation around a specific objective"
      ],
      "reponse": 3,
      "explication": "Le risk appetite est la quantité globale de risque que l'organisation est prête à accepter pour poursuivre sa mission ; la risk tolerance est plus fine : la variation acceptable des résultats autour d'un objectif spécifique. Les deux notions ne sont pas synonymes, la tolérance ne doit jamais dépasser la risk capacity (le maximum absorbable), et l'appétit pour le risque s'applique à tous les types de risques, pas seulement financiers.",
      "difficulte": 3,
      "pourquoi": [
        "Contresens : la tolérance doit rester en deçà de la capacité, jamais au-delà.",
        "Absolu erroné : les deux notions sont distinctes, l'une globale, l'autre par objectif.",
        "Trop étroit : l'appétit couvre tous les types de risques, pas seulement financiers.",
        "Correcte : l'appétit est le risque global accepté par l'organisation, la tolérance la variation admise autour d'un objectif donné."
      ]
    },
    {
      "q": "An organization plans to embed a third-party large language model into a customer-facing application. Which action should the CISO take FIRST?",
      "choix": [
        "Require the vendor to provide a complete inventory of the model's training data sources",
        "Bring the initiative under the existing governance framework, including risk appetite, use-case classification, and approval roles",
        "Conduct adversarial testing of the model against prompt injection and jailbreak techniques",
        "Develop an incident response playbook for AI-specific failure scenarios"
      ],
      "reponse": 1,
      "explication": "Le réflexe managérial face à une technologie émergente est de la rattacher d'abord à la gouvernance existante : qui décide, quel appétit pour le risque, quels cas d'usage autorisés. Les tests adversariaux, l'examen des données d'entraînement du fournisseur et le playbook de réponse à incident sont tous nécessaires, mais ce sont des livrables qui découlent du cadre de gouvernance, pas des points de départ.",
      "difficulte": 3,
      "pourquoi": [
        "Vraie mais prématurée : l'examen des sources d'entraînement est un point de due diligence fournisseur qui s'inscrit dans le cadre défini par la gouvernance.",
        "Correcte : la gouvernance vient d'abord — appétit pour le risque, classification des cas d'usage, rôles d'approbation — avant toute mesure technique.",
        "Techniquement nécessaire mais hors phase : les tests adversariaux s'exécutent une fois le cas d'usage autorisé et encadré.",
        "Vraie mais en aval : le playbook de réponse à incident se construit après que le déploiement a été autorisé et cadré."
      ]
    },
    {
      "q": "A critical zero-day vulnerability is disclosed in a widely used open-source component. The CISO must report the organization's exposure to executive management within hours. Which capability BEST enables this?",
      "choix": [
        "An up-to-date software bill of materials (SBOM) covering all applications",
        "A recent penetration test report covering internet-facing systems",
        "Continuous vendor security-rating feeds for all software suppliers",
        "A contractual right to audit every software supplier"
      ],
      "reponse": 0,
      "explication": "Seul un SBOM à jour permet d'interroger en quelques minutes quelles applications embarquent le composant vulnérable, et donc de chiffrer l'exposition pour la direction. Le pentest ne couvre qu'un périmètre et un instant donnés, les notations fournisseurs observent des signaux externes sans visibilité sur les dépendances internes, et le droit d'audit est un levier contractuel qui demande des semaines à exercer.",
      "difficulte": 3,
      "pourquoi": [
        "Correcte : le SBOM inventorie les dépendances de chaque application et permet de mesurer l'exposition en quelques minutes — la seule capacité au rythme exigé par la direction.",
        "Techniquement vraie mais inadaptée : un pentest photographie un périmètre à un instant donné, il ne cartographie pas les dépendances logicielles internes.",
        "Techniquement vraie mais hors cible : les notations externes suivent la posture publique des fournisseurs, pas la présence d'un composant dans vos applications.",
        "Levier contractuel, pas capacité opérationnelle : exercer un droit d'audit prend des semaines, incompatible avec un reporting en quelques heures."
      ]
    },
    {
      "q": "The board of directors asks the CISO to justify next year's security budget in business terms. Which approach is MOST effective?",
      "choix": [
        "Reporting the number of attacks blocked by existing controls over the past year",
        "Mapping each investment to NIST CSF functions to demonstrate coverage",
        "Presenting the annualized loss expectancy reduction expected from each proposed investment against its cost",
        "Benchmarking the security budget against industry peers of a similar size"
      ],
      "reponse": 2,
      "explication": "Le conseil raisonne en valeur : la réduction de perte annualisée attendue rapportée au coût de chaque investissement (analyse coût/bénéfice quantitative) traduit la sécurité dans le langage financier de la décision. Le benchmark sectoriel indique une norme de dépense, pas la valeur créée ; la couverture NIST CSF démontre la complétude du programme, pas son rendement ; et le volume d'attaques bloquées est une métrique d'activité invérifiable en termes de valeur.",
      "difficulte": 3,
      "pourquoi": [
        "Métrique d'activité : compter les attaques bloquées ne traduit ni la perte évitée ni la pertinence des investissements futurs.",
        "Vraie mais hors registre : la couverture d'un référentiel démontre la complétude technique, pas la valeur métier exigée par le conseil.",
        "Correcte : la réduction d'ALE rapportée au coût exprime chaque investissement en valeur financière — le langage de décision du conseil.",
        "Vraie mais faible : le benchmark indique ce que dépensent les pairs, pas ce que rapporte votre programme à votre organisation."
      ]
    },
    {
      "q": "A multinational discovers that complying with a data-localization law in one country would cause it to violate a data-protection regulation in another country where it also operates. What should the CISO do FIRST?",
      "choix": [
        "Suspend the affected cross-border data flows until the conflict is resolved",
        "Migrate the processing to a neutral third country not covered by either law",
        "Comply with the stricter of the two regulations across the whole organization",
        "Escalate the conflict to legal counsel and executive management for a documented, risk-based decision"
      ],
      "reponse": 3,
      "explication": "Un conflit de lois est une décision d'entreprise, pas une décision de sécurité : le RSSI doit l'escalader au juridique et à la direction pour un arbitrage documenté et fondé sur le risque. Appliquer « le plus strict » ne fonctionne pas quand les exigences sont contradictoires (respecter l'une viole l'autre) ; suspendre les flux est une mesure conservatoire lourde qui ne se décide pas unilatéralement ; et déplacer le traitement vers un pays tiers peut créer de nouvelles obligations sans éteindre les premières.",
      "difficulte": 3,
      "pourquoi": [
        "Vraie mais disproportionnée en premier geste : suspendre des flux métier est une décision d'entreprise lourde qui ne relève pas du seul RSSI.",
        "Vraie mais prématurée : une relocalisation peut créer de nouvelles obligations sans éteindre les premières, et ne se décide qu'après l'analyse juridique.",
        "Fausse bonne idée : quand les exigences sont contradictoires, « le plus strict » n'existe pas — se conformer à l'une viole l'autre.",
        "Correcte : le rôle du RSSI est d'escalader le conflit au juridique et à la direction pour une décision d'entreprise documentée et fondée sur le risque."
      ]
    }
  ],
  "flashcards": [
    {
      "recto": "Triade CIA",
      "verso": "Confidentiality (pas de divulgation non autorisée), Integrity (pas de modification non autorisée), Availability (accès fiable et rapide pour les sujets autorisés). Son miroir négatif est la triade DAD : Disclosure, Alteration, Destruction."
    },
    {
      "recto": "Nonrepudiation",
      "verso": "Garantie que l'auteur d'une action ne peut pas nier l'avoir accomplie. Rendue possible par l'identification, l'authentification, l'autorisation, l'audit et l'accountability (ex. signature numérique)."
    },
    {
      "recto": "Services AAA (5 éléments)",
      "verso": "Identification (affirmer une identité) → Authentication (la prouver) → Authorization (définir les droits) → Auditing (journaliser) → Accountability (attribuer les actions et tenir responsable)."
    },
    {
      "recto": "Due Care vs Due Diligence",
      "verso": "Due Diligence : savoir ce qui doit être fait et le planifier (évaluer les risques, établir les politiques) — elle prouve la Due Care. Due Care : agir, appliquer les contrôles au quotidien, protéger les actifs de façon responsable."
    },
    {
      "recto": "Les 4 canons du Code of Ethics ISC² (dans l'ordre)",
      "verso": "1) Protect society, the common good, necessary public trust and confidence, and the infrastructure. 2) Act honorably, honestly, justly, responsibly, and legally. 3) Provide diligent and competent service to principals. 4) Advance and protect the profession."
    },
    {
      "recto": "Plans stratégique / tactique / opérationnel",
      "verso": "Stratégique : long terme (≈5 ans), définit la raison d'être de la sécurité, inclut une analyse de risque. Tactique : ≤1 an, détaille l'atteinte des buts. Opérationnel : court terme, très détaillé et concret."
    },
    {
      "recto": "Policy / Standard / Baseline / Guideline / Procedure",
      "verso": "Policy : stratégique, obligatoire, émane de la direction. Standard : exigence précise et uniforme, obligatoire. Baseline : niveau minimal de sécurité par système. Guideline : recommandation flexible, facultative. Procedure (SOP) : étapes détaillées pas à pas."
    },
    {
      "recto": "SLE (Single Loss Expectancy)",
      "verso": "Coût d'une seule réalisation d'un risque sur un actif. SLE = AV (Asset Value) × EF (Exposure Factor, % de perte). Ex. : actif de 100 000 € avec EF de 20 % → SLE = 20 000 €."
    },
    {
      "recto": "ALE (Annualized Loss Expectancy)",
      "verso": "Perte annuelle attendue pour un risque donné. ALE = SLE × ARO (Annualized Rate of Occurrence, fréquence annuelle attendue). Sert de base à l'analyse coût/bénéfice des safeguards."
    },
    {
      "recto": "Valeur d'un safeguard",
      "verso": "(ALE avant safeguard − ALE après safeguard) − coût annuel du safeguard (ACS). Si le résultat est positif, l'investissement est financièrement justifié."
    },
    {
      "recto": "Réponses au risque",
      "verso": "Mitigation (réduire par des contrôles), Transference (assurance, externalisation), Avoidance (renoncer à l'activité), Acceptance (décision documentée du management), Deterrence (dissuader). Rejection (ignorer) n'est jamais acceptable."
    },
    {
      "recto": "Inherent / Residual / Total risk et Controls Gap",
      "verso": "Inherent : risque avant tout traitement. Total : risque sans aucun safeguard (threats × vulnerabilities × asset value). Controls gap : part de risque éliminée par les contrôles. Residual = Total − Controls gap : c'est le risque que la direction accepte."
    },
    {
      "recto": "Risk appetite / tolerance / capacity",
      "verso": "Appetite : quantité totale de risque que l'organisation est prête à accepter. Tolerance : variation acceptable autour d'un objectif spécifique. Capacity : maximum de risque que l'organisation peut absorber sans péril."
    },
    {
      "recto": "Catégories et types de contrôles",
      "verso": "Catégories : Administrative, Technical/Logical, Physical. Types : Preventive, Deterrent, Detective, Corrective, Recovery, Directive, Compensating. Superposés en défense en profondeur, en commençant par les politiques."
    },
    {
      "recto": "STRIDE",
      "verso": "Modèle Microsoft de catégorisation des menaces : Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege. STRIDE identifie et catégorise ; DREAD priorise ensuite."
    },
    {
      "recto": "DREAD",
      "verso": "Méthode Microsoft de priorisation des menaces selon 5 critères : Damage potential, Reproducibility, Exploitability, Affected users, Discoverability."
    },
    {
      "recto": "PASTA (7 étapes)",
      "verso": "Process for Attack Simulation and Threat Analysis, méthodologie centrée risque : 1) Objectifs, 2) Périmètre technique, 3) Décomposition de l'application, 4) Analyse des menaces, 5) Analyse des vulnérabilités, 6) Modélisation/simulation d'attaques, 7) Analyse et gestion du risque."
    },
    {
      "recto": "GDPR — points clés examen",
      "verso": "Règlement européen à portée extraterritoriale : s'applique à toute organisation traitant les données de résidents de l'UE. Principes : licéité, limitation des finalités, minimisation, exactitude, limitation de conservation, sécurité, accountability. Notification de violation à l'autorité sous 72 heures."
    },
    {
      "recto": "HIPAA / HITECH",
      "verso": "Protection des données de santé (PHI) aux USA. HITECH impose la notification des individus, du HHS et des médias (si >500 personnes affectées) dans les 60 jours suivant la découverte d'une violation. Contrat écrit exigé avec les business associates."
    },
    {
      "recto": "PCI DSS",
      "verso": "Standard de protection des données de cartes de paiement. Ce n'est PAS une loi : il s'impose par le contrat entre le commerçant et sa banque. Exigences : sécurité réseau, chiffrement, contrôle d'accès strict, surveillance et tests, politiques de sécurité."
    },
    {
      "recto": "Types d'enquêtes et standards de preuve",
      "verso": "Administrative : interne, la moins formelle. Civile : prépondérance de la preuve. Criminelle : au-delà de tout doute raisonnable (formalisme maximal). Réglementaire : menée par un régulateur, coopération obligatoire. Standards industriels : conformité contractuelle (ex. PCI DSS)."
    },
    {
      "recto": "BIA et ses 5 étapes",
      "verso": "Business Impact Analysis : identifier les processus critiques et l'impact d'une interruption. Étapes : 1) Identification des priorités, 2) Identification des risques, 3) Évaluation de la probabilité, 4) Évaluation de l'impact, 5) Priorisation des ressources. Produit RTO, RPO et MTD."
    },
    {
      "recto": "RTO / RPO / MTD",
      "verso": "RTO : durée maximale pour restaurer le service (doit être ≤ MTD). RPO : perte de données maximale tolérable, en temps (dicte la fréquence des sauvegardes). MTD (ou MAD) : durée d'interruption au-delà de laquelle l'organisation n'est plus viable."
    },
    {
      "recto": "Les 4 étapes du processus BCP",
      "verso": "1) Project scope & planning (soutien de la direction, équipe, business case), 2) Business Impact Analysis, 3) Continuity planning (stratégie + provisions/processes → COOP), 4) Approval & implementation (endossement par le top management, formation). Priorité absolue : la sécurité des personnes."
    },
    {
      "recto": "SCRM et ses mitigations",
      "verso": "Supply Chain Risk Management : garantir que chaque maillon est fiable, auditable et responsable devant le suivant (menaces : tampering, contrefaçons, implants). Mitigations : évaluations de tiers, exigences contractuelles/SLA, silicon Root of Trust, PUF, SBOM."
    },
    {
      "recto": "SBOM (Software Bill of Materials)",
      "verso": "Inventaire détaillé de tous les composants, bibliothèques et dépendances (open source et propriétaires) d'une application. Apporte transparence et traçabilité pour identifier rapidement les logiciels affectés par une vulnérabilité."
    },
    {
      "recto": "NIST RMF — 7 étapes",
      "verso": "Prepare, Categorize, Select, Implement, Assess, Authorize, Monitor. Cadre de gestion du risque du NIST (SP 800-37), complété par SP 800-30 pour la conduite des évaluations de risque et SP 800-53 pour le catalogue de contrôles."
    },
    {
      "recto": "Awareness / Training / Education",
      "verso": "Awareness : capter l'attention et installer les réflexes de sécurité chez tous. Training : apprendre à faire son travail conformément à la politique (obligatoire à l'embauche puis au moins annuel). Education : connaissances au-delà du poste, souvent liée à une certification."
    },
    {
      "recto": "Whaling",
      "verso": "Variante du spear phishing ciblant spécifiquement les dirigeants (CEO, CFO…), les « gros poissons », souvent pour déclencher des virements frauduleux (proche du BEC, Business Email Compromise). Distinction examen : spear phishing = ciblé sur quelqu'un ; whaling = ciblé sur un DIRIGEANT."
    },
    {
      "recto": "Pretexting",
      "verso": "Ingénierie sociale fondée sur un scénario inventé mais crédible (faux technicien du support, faux auditeur, faux livreur) pour obtenir des informations ou un accès. Différence avec le phishing : le pretexting repose sur un prétexte et un dialogue construits, pas seulement sur un message frauduleux."
    },
    {
      "recto": "Watering hole attack",
      "verso": "Attaque indirecte : l'attaquant compromet un site web légitime que la cible ou sa communauté visite habituellement (le « point d'eau ») et y dépose un code malveillant, puis attend que les victimes s'y rendent d'elles-mêmes."
    },
    {
      "recto": "Typosquatting / URL hijacking",
      "verso": "Enregistrement de noms de domaine très proches d'un domaine légitime (ex. goggle.com) pour capter les fautes de frappe des utilisateurs et les diriger vers une fausse page (vol d'identifiants, malware, publicité). Contre-mesures : enregistrement défensif des variantes, surveillance des domaines."
    },
    {
      "recto": "Entrapment vs Enticement",
      "verso": "Enticement (LÉGAL) : offrir une opportunité tentante (ex. honeypot) à un attaquant qui avait DÉJÀ l'intention d'agir — preuves recevables. Entrapment (ILLÉGAL) : inciter une personne sans intention délictueuse à commettre l'infraction — défense recevable qui fait échouer les poursuites. Un honeypot bien conçu attire sans inciter."
    },
    {
      "recto": "Insider threat (malveillant vs négligent)",
      "verso": "Menace interne, souvent la plus dangereuse car l'insider a déjà un accès légitime et la connaissance de l'organisation. Malveillant : abuse volontairement de son accès (vengeance, argent, idéologie). Négligent : cause l'incident par erreur ou contournement des règles, sans intention de nuire. Parades : least privilege, DLP, sensibilisation, monitoring, offboarding rigoureux."
    }
  ]
};
