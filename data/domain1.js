// Domaine 1 — Sécurité et gestion des risques (Security and Risk Management)
// Poids à l'examen : 16 %

window.CISSP_DATA = window.CISSP_DATA || { domains: {} };
window.CISSP_DATA.domains[1] = {
  id: 1,
  code: "D1",
  titre: "Sécurité et gestion des risques",
  titreEn: "Security and Risk Management",
  poids: "16%",
  couleur: "#ef476f",
  icone: "🛡️",
  description:
    "Le Domaine 1 est le socle de tout le CISSP : il couvre les concepts fondamentaux de la sécurité (CIA, AAA), la gouvernance, la conformité légale et réglementaire, l'éthique professionnelle, la gestion des risques, la modélisation des menaces et la continuité d'activité. C'est le domaine le plus lourd de l'examen, et surtout celui qui installe la posture de manager attendue par ISC².",
  objectifs: [
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

  lecons: [
    // ------------------------------------------------------------------
    // Leçon 1 — Les fondamentaux : CIA, DAD, les 5 piliers et AAA
    // ------------------------------------------------------------------
    {
      id: "d1-l1",
      titre: "Les fondamentaux : triade CIA, DAD et services AAA",
      duree: 10,
      slides: [
        {
          type: "intro",
          titre: "Bienvenue dans le Domaine 1",
          points: [
            "Le domaine le plus lourd de l'examen : 16 %",
            "Le socle conceptuel de tous les autres domaines",
            "Objectif : penser comme un manager, pas comme un technicien"
          ],
          narration:
            "Bienvenue dans le Domaine 1 du CISSP, la sécurité et la gestion des risques. C'est le domaine au poids le plus élevé de l'examen, seize pour cent, et surtout c'est la fondation de tout le reste. Retenez dès maintenant l'état d'esprit attendu : à l'examen, vous êtes un manager de la sécurité, pas un technicien. On commence par les concepts les plus fondamentaux de la profession."
        },
        {
          type: "standard",
          titre: "La triade CIA",
          points: [
            "Confidentiality : l'information n'est divulguée qu'aux sujets autorisés",
            "Integrity : l'information reste exacte et n'est modifiée que par des sujets autorisés",
            "Availability : les sujets autorisés ont un accès fiable et rapide aux ressources"
          ],
          narration:
            "La triade CIA est le cœur historique de la sécurité de l'information. La confidentialité garantit que les données ne sont pas divulguées à des personnes non autorisées, ce qui protège aussi la vie privée et les informations propriétaires. L'intégrité protège l'exactitude et la fiabilité des données, en empêchant les modifications non autorisées, y compris les erreurs commises par des personnes pourtant autorisées. Enfin, la disponibilité assure que les utilisateurs légitimes ont un accès rapide et ininterrompu aux ressources dont ils ont besoin.",
          astuce: "💡 Conseil examen : la confidentialité n'est pas le secret. On protège aussi des données qui ne sont pas secrètes, comme des données personnelles."
        },
        {
          type: "standard",
          titre: "La triade inversée : DAD",
          points: [
            "Disclosure : divulgation non autorisée, l'échec de la confidentialité",
            "Alteration : altération non autorisée, l'échec de l'intégrité",
            "Destruction (ou Denial) : destruction ou déni d'accès, l'échec de la disponibilité"
          ],
          narration:
            "La triade DAD est simplement le miroir négatif de la triade CIA. Disclosure, c'est la divulgation, l'échec de la confidentialité. Alteration, c'est l'altération non autorisée, l'échec de l'intégrité. Et Destruction, parfois appelée Denial, c'est la destruction ou le déni d'accès, l'échec de la disponibilité. Quand vous analysez un incident, demandez-vous toujours lequel de ces trois échecs s'est produit : cela vous indique quel pilier de la sécurité a été touché."
        },
        {
          type: "standard",
          titre: "Les deux piliers complémentaires",
          points: [
            "Authenticity : garantir qu'un message, une transmission ou un émetteur est légitime",
            "Nonrepudiation : l'auteur d'une action ne peut pas nier l'avoir réalisée",
            "Ensemble avec CIA : les 5 piliers de la sécurité de l'information"
          ],
          narration:
            "ISC² étend aujourd'hui la triade à cinq piliers. L'authenticité garantit qu'un message ou un émetteur est bien légitime, qu'il est bien ce qu'il prétend être. La non-répudiation, ou nonrepudiation en anglais, garantit que l'auteur d'une action ne peut pas nier l'avoir accomplie. Elle repose sur l'identification, l'authentification, l'autorisation, la journalisation et l'audit. Pensez à une signature numérique : elle prouve à la fois qui a signé et empêche le signataire de le nier ensuite."
        },
        {
          type: "schema",
          titre: "Les services AAA : la chaîne du contrôle d'accès",
          points: [
            "Cinq étapes qui s'enchaînent logiquement",
            "De l'affirmation d'identité jusqu'à la responsabilité individuelle"
          ],
          schema: {
            type: "flow",
            items: ["Identification", "Authentication", "Authorization", "Auditing", "Accountability"]
          },
          narration:
            "Les services AAA forment une chaîne logique. D'abord l'identification : je prétends être quelqu'un, par exemple en tapant un nom d'utilisateur. Ensuite l'authentification : je prouve cette identité avec quelque chose que je sais, que je possède ou que je suis. Puis l'autorisation : le système détermine ce que j'ai le droit de faire. L'audit enregistre tout ce que je fais dans des journaux. Et enfin l'accountability, la responsabilité : grâce aux journaux et à une authentification solide, on peut attribuer chaque action à une personne et la tenir responsable."
        },
        {
          type: "standard",
          titre: "Assurer la disponibilité en pratique",
          points: [
            "Redondance matérielle et logicielle, tolérance aux pannes",
            "Failover clustering, load balancing, résilience de site",
            "La disponibilité se conçoit, elle ne s'improvise pas"
          ],
          narration:
            "La disponibilité mérite un mot de plus, car c'est souvent le pilier le plus visible pour le métier. Pour l'assurer, on met en œuvre des techniques comme la redondance des composants matériels et logiciels, le clustering avec basculement automatique, la répartition de charge, et la résilience entre plusieurs sites. Retenez que la haute disponibilité est un choix d'architecture décidé en amont, en fonction de la criticité du service pour l'entreprise."
        },
        {
          type: "question",
          titre: "Contrôle de connaissance",
          points: ["Vérifions votre compréhension des piliers"],
          narration:
            "Petit contrôle de connaissance. Lisez bien la question et choisissez la meilleure réponse.",
          q: "Un employé signe électroniquement un ordre de virement, puis affirme plus tard ne l'avoir jamais approuvé. Quel service de sécurité permet de prouver qu'il l'a bien fait ?",
          choix: ["Confidentiality", "Nonrepudiation", "Availability", "Authorization"],
          reponse: 1,
          explication:
            "La non-répudiation (Nonrepudiation) empêche l'auteur d'une action de la nier. Elle s'appuie sur l'identification, l'authentification et l'audit. La confidentialité protège contre la divulgation, la disponibilité contre l'interruption de service, et l'autorisation définit les droits, mais aucun de ces services ne prouve qu'une action a bien été réalisée par une personne donnée."
        },
        {
          type: "standard",
          titre: "L'état d'esprit CISSP",
          points: [
            "La sécurité soutient le business, elle ne le bloque pas",
            "Les décisions se prennent en fonction du risque et de la valeur des actifs",
            "La vie humaine passe toujours en premier"
          ],
          narration:
            "Avant de conclure cette première leçon, ancrons l'état d'esprit qui vous servira pour tout l'examen. La sécurité existe pour permettre au métier d'atteindre ses objectifs, jamais pour le bloquer. Chaque décision de sécurité se justifie par le risque et par la valeur des actifs protégés. Et quand une question mentionne la sécurité des personnes, la réponse est toujours la même : la vie humaine passe avant tout le reste, avant les données, avant les systèmes, avant les profits."
        },
        {
          type: "resume",
          titre: "Ce qu'il faut retenir",
          points: [
            "CIA : Confidentiality, Integrity, Availability ; DAD est son miroir négatif",
            "5 piliers : CIA plus Authenticity et Nonrepudiation",
            "AAA : Identification, Authentication, Authorization, Auditing, Accountability",
            "Penser manager : risque, valeur des actifs, et les personnes d'abord"
          ],
          narration:
            "Résumons. La triade CIA, confidentialité, intégrité, disponibilité, est le cœur de la sécurité, et la triade DAD en est le miroir négatif. On y ajoute l'authenticité et la non-répudiation pour former les cinq piliers. La chaîne AAA relie l'identification à la responsabilité individuelle en passant par l'authentification, l'autorisation et l'audit. Et surtout, adoptez dès maintenant la posture du manager : on raisonne en risques, en valeur d'actifs, et la sécurité des personnes prime toujours."
        }
      ]
    },

    // ------------------------------------------------------------------
    // Leçon 2 — Gouvernance de la sécurité
    // ------------------------------------------------------------------
    {
      id: "d1-l2",
      titre: "Gouvernance : alignement, rôles, frameworks, Due Care et Due Diligence",
      duree: 12,
      slides: [
        {
          type: "intro",
          titre: "La gouvernance de la sécurité",
          points: [
            "L'ensemble des politiques, rôles et processus qui pilotent les décisions de sécurité",
            "La sécurité doit s'aligner sur la stratégie, la mission et les objectifs de l'organisation",
            "La gouvernance vient d'en haut : le soutien de la direction est indispensable"
          ],
          narration:
            "La gouvernance de la sécurité, c'est l'ensemble des politiques, des rôles et des processus utilisés pour prendre les décisions de sécurité dans une organisation. Son but est de garantir que la stratégie de sécurité s'aligne sur les objectifs métier, la mission et la vision de l'entreprise, et qu'elle est cohérente dans toute l'organisation. Retenez un principe d'or pour l'examen : la sécurité se pilote depuis le sommet. Sans le soutien visible de la direction générale, aucun programme de sécurité ne réussit."
        },
        {
          type: "schema",
          titre: "Les trois niveaux de planification",
          points: [
            "Strategic Plan : long terme, environ cinq ans, inclut une analyse de risque",
            "Tactical Plan : moyen terme, un an ou moins",
            "Operational Plan : court terme, très détaillé"
          ],
          schema: {
            type: "pyramid",
            items: ["Plan stratégique (≈5 ans)", "Plan tactique (≤1 an)", "Plans opérationnels (détaillés)"]
          },
          narration:
            "La planification de la sécurité se décline en trois niveaux. Le plan stratégique est un plan de long terme, utile environ cinq ans, qui définit la raison d'être de la sécurité dans l'organisation et qui doit inclure une évaluation des risques. Le plan tactique, d'un an ou moins, détaille comment atteindre les buts fixés par la stratégie. Et les plans opérationnels sont des plans de court terme, très détaillés et concrets, qui découlent des deux niveaux supérieurs. Les objectifs alimentent les missions, les missions mènent aux buts, et les buts réalisent la stratégie."
        },
        {
          type: "standard",
          titre: "Rôles et responsabilités",
          points: [
            "Senior Manager : responsable ultime de la sécurité, il approuve et assume",
            "Security Professional : responsabilité fonctionnelle, rédige et met en œuvre la politique",
            "Asset Owner : classifie l'information ; Custodian : applique la protection au quotidien",
            "Auditor : vérifie que la politique est correctement appliquée"
          ],
          narration:
            "Les rôles sont un grand classique de l'examen. Le senior manager, la direction, porte la responsabilité ultime de la sécurité de l'organisation, c'est lui qui approuve et qui assume. Le professionnel de la sécurité a une responsabilité fonctionnelle : il rédige la politique de sécurité et la met en œuvre. Le propriétaire d'actif, l'asset owner, classifie l'information et décide de son niveau de protection. Le custodian, le dépositaire, applique techniquement au quotidien la protection définie. Et l'auditeur, indépendant, vérifie que tout cela est correctement appliqué. À l'examen, si on vous demande qui est responsable en dernier ressort, la réponse est toujours la direction."
        },
        {
          type: "standard",
          titre: "Frameworks de gouvernance et de contrôle, première partie",
          points: [
            "ISO/IEC 27001 : standard international pour le système de management de la sécurité (ISMS)",
            "ISO 27002 : guide d'implémentation des contrôles ; 27017 et 27018 : cloud et PII dans le cloud",
            "NIST CSF 2.0 : six fonctions — Govern, Identify, Protect, Detect, Respond, Recover",
            "NIST SP 800-53 : catalogue de contrôles de sécurité et de vie privée"
          ],
          narration:
            "Passons aux référentiels. ISO 27001 est le standard international le plus reconnu pour les systèmes de management de la sécurité de l'information, avec une approche fondée sur le risque et l'amélioration continue. ISO 27002 fournit le guide détaillé d'implémentation des contrôles, tandis que 27017 et 27018 couvrent le cloud et la protection des données personnelles dans le cloud. Côté américain, le NIST Cybersecurity Framework version deux s'articule autour de six fonctions : gouverner, identifier, protéger, détecter, répondre et récupérer. Et la publication spéciale 800-53 est un vaste catalogue de contrôles de sécurité et de vie privée."
        },
        {
          type: "standard",
          titre: "Frameworks, deuxième partie",
          points: [
            "COBIT (ISACA) : gouvernance IT, souvent utilisé comme framework d'audit et de conformité",
            "SABSA : architecture de sécurité pilotée par le métier et le risque",
            "FedRAMP : autorisation des services cloud pour le gouvernement fédéral américain",
            "CIS Controls, ITIL, COSO : actions prioritaires, gestion de services IT, contrôle interne financier"
          ],
          narration:
            "COBIT, créé par ISACA, aligne l'informatique sur la stratégie de l'entreprise et sert très souvent de référentiel d'audit et de conformité. SABSA est une méthodologie d'architecture de sécurité pilotée par les besoins métier et le risque. FedRAMP est le programme américain qui standardise l'évaluation et l'autorisation des services cloud pour les agences fédérales, avec une autorisation réutilisable d'une agence à l'autre. Retenez aussi les CIS Controls, une liste d'actions priorisées très pratiques, ITIL pour la gestion des services informatiques, et COSO, qui vise le contrôle interne et la prévention de la fraude financière."
        },
        {
          type: "question",
          titre: "Contrôle de connaissance",
          points: ["Frameworks : à chacun son usage"],
          narration:
            "Vérifions que vous distinguez bien les référentiels entre eux.",
          q: "Votre direction souhaite un référentiel d'audit reconnu pour évaluer la gouvernance de l'informatique et son alignement avec la stratégie de l'entreprise. Lequel est le PLUS adapté ?",
          choix: ["ISO 27017", "COBIT", "FedRAMP", "PCI DSS"],
          reponse: 1,
          explication:
            "COBIT, publié par ISACA, est le référentiel de gouvernance IT par excellence, couramment utilisé pour l'audit et la conformité et centré sur l'alignement entre l'IT et la stratégie métier. ISO 27017 concerne les contrôles de sécurité du cloud, FedRAMP l'autorisation des services cloud pour le gouvernement américain, et PCI DSS la protection des données de cartes de paiement."
        },
        {
          type: "standard",
          titre: "Due Diligence et Due Care",
          points: [
            "Due Diligence : savoir ce qui doit être fait et le planifier — comprendre, évaluer, documenter",
            "Due Care : faire ce qui doit être fait — appliquer les contrôles et agir raisonnablement",
            "Formule mémo : Due Diligence pense, Due Care agit"
          ],
          narration:
            "Voici deux termes incontournables. La Due Diligence, c'est savoir ce qui doit être fait et le planifier : collecter l'information, évaluer les risques, établir les politiques et les structures de sécurité. La Due Care, c'est la pratique quotidienne de ces activités : appliquer les contrôles, suivre les politiques, agir en personne raisonnable et prudente. Un moyen mnémotechnique efficace : la Due Diligence réfléchit et prépare, la Due Care agit. On dit aussi que la Due Care est la protection responsable des actifs, et que la Due Diligence permet de prouver cette Due Care.",
          astuce: "💡 Conseil examen : Due Diligence = « Do Detect » (comprendre et planifier), Due Care = « Do Correct » (agir). Les managers qui négligent ces devoirs engagent leur responsabilité personnelle."
        },
        {
          type: "standard",
          titre: "Processus organisationnels : fusions, cessions, comités",
          points: [
            "Acquisitions : environnement IT inconnu, la Due Diligence est essentielle",
            "Divestitures : comment séparer l'infrastructure, les identités et les accès",
            "Comités de gouvernance : un regard neuf sur les projets, architectures et incidents",
            "Évaluation de tiers : on-site assessment, revue documentaire, audit tiers"
          ],
          narration:
            "La gouvernance doit aussi couvrir les grands événements de la vie de l'entreprise. Lors d'une acquisition, l'état de l'environnement informatique à intégrer est inconnu, donc la Due Diligence est cruciale. Lors d'une cession, il faut décider comment scinder l'infrastructure et que faire des identités et des accès. Les comités de gouvernance réunissent dirigeants et managers pour examiner les architectures, les projets et les incidents avec un regard neuf. Et pour évaluer un tiers avant une intégration, on combine visite sur site, échange et revue de documents, revue des processus et politiques, et audit par un tiers indépendant."
        },
        {
          type: "question",
          titre: "Contrôle de connaissance",
          points: ["Due Care ou Due Diligence ?"],
          narration:
            "Encore une vérification, sur la distinction la plus testée du domaine.",
          q: "Un RSSI effectue une évaluation des risques, documente une politique de sécurité et la diffuse dans l'organisation. De quoi s'agit-il ?",
          choix: ["Due Care", "Due Diligence", "Risk Acceptance", "Separation of Duties"],
          reponse: 1,
          explication:
            "Évaluer les risques, formaliser et documenter des politiques puis les diffuser, c'est savoir ce qui doit être fait et le planifier : c'est la Due Diligence. La Due Care serait ensuite l'application concrète et continue de ces politiques au quotidien. Risk Acceptance est un choix de traitement du risque, et la séparation des tâches est un contrôle contre la fraude."
        },
        {
          type: "resume",
          titre: "Ce qu'il faut retenir",
          points: [
            "La gouvernance aligne la sécurité sur la mission et vient de la direction",
            "Trois plans : stratégique, tactique, opérationnel",
            "Rôles : senior manager responsable ultime, owner classifie, custodian applique, auditor vérifie",
            "Frameworks : ISO 27001, NIST CSF et 800-53, COBIT, SABSA, FedRAMP, CIS, ITIL, COSO",
            "Due Diligence planifie et prouve, Due Care agit"
          ],
          narration:
            "En résumé, la gouvernance de la sécurité aligne la fonction sécurité sur la stratégie et la mission de l'organisation, et elle émane toujours de la direction. La planification se fait à trois niveaux, stratégique, tactique et opérationnel. Chaque rôle a sa responsabilité, du senior manager responsable en dernier ressort jusqu'à l'auditeur qui vérifie. Vous connaissez maintenant les grands référentiels, et vous savez distinguer la Due Diligence, qui pense et planifie, de la Due Care, qui agit."
        }
      ]
    },

    // ------------------------------------------------------------------
    // Leçon 3 — Lois, réglementation et conformité
    // ------------------------------------------------------------------
    {
      id: "d1-l3",
      titre: "Lois, réglementation, conformité et types d'enquêtes",
      duree: 15,
      slides: [
        {
          type: "intro",
          titre: "Le paysage légal et réglementaire",
          points: [
            "Un manager de la sécurité doit connaître ses obligations légales",
            "Lois pénales, civiles et administratives n'ont pas les mêmes règles",
            "La conformité peut venir d'une loi, d'un régulateur ou d'un contrat"
          ],
          narration:
            "Dans cette leçon, nous entrons dans le paysage légal et réglementaire. Un professionnel CISSP n'est pas juriste, mais il doit connaître les grandes catégories de lois, les principales réglementations de protection des données, et les obligations de notification en cas de violation. Retenez d'emblée que la conformité peut découler d'une loi, d'un régulateur, d'un standard industriel ou d'un simple contrat, et que les exigences varient fortement selon les pays."
        },
        {
          type: "standard",
          titre: "Trois catégories de droit",
          points: [
            "Criminal law : protège la société ; poursuites par l'État ; preuve au-delà du doute raisonnable",
            "Civil law : litiges entre personnes ou organisations ; prépondérance de la preuve ; dommages financiers",
            "Administrative law : règlements édictés par les agences gouvernementales pour leur fonctionnement"
          ],
          narration:
            "Il existe trois grandes catégories de droit à connaître. Le droit pénal, criminal law, protège la société contre les actes qui violent ses principes fondamentaux ; les poursuites sont menées par l'État et la culpabilité doit être prouvée au-delà de tout doute raisonnable. Le droit civil encadre les relations entre personnes et organisations ; les deux parties s'affrontent devant le tribunal, il s'agit généralement de dommages financiers, et le standard de preuve est la simple prépondérance de la preuve. Enfin, le droit administratif regroupe les règlements que les agences gouvernementales édictent pour mener leurs activités quotidiennes."
        },
        {
          type: "standard",
          titre: "Le GDPR : la référence mondiale",
          points: [
            "S'applique à toute organisation, où qu'elle soit, traitant des données de résidents de l'UE",
            "Principes : licéité, limitation des finalités, minimisation, exactitude, limitation de conservation, sécurité, accountability",
            "Notification de violation à l'autorité de contrôle sous 72 heures"
          ],
          narration:
            "Le General Data Protection Regulation, le GDPR, a remplacé l'ancienne directive européenne pour créer une loi unique et harmonisée sur les données personnelles dans toute l'Union européenne. Point capital : il s'applique à toute organisation, où qu'elle soit dans le monde, dès lors qu'elle traite les données personnelles de résidents européens. Ses principes clés sont la licéité et la transparence, la limitation des finalités, la minimisation des données, l'exactitude, la limitation de la conservation, la sécurité et l'accountability. Et retenez ce chiffre pour l'examen : une violation de données doit être notifiée à l'autorité de contrôle compétente dans les soixante-douze heures.",
          astuce: "💡 Conseil examen : GDPR = 72 heures pour notifier l'autorité. HIPAA/HITECH = 60 jours pour notifier les individus."
        },
        {
          type: "standard",
          titre: "Réglementations sectorielles américaines",
          points: [
            "HIPAA / HITECH : données de santé (PHI) ; notification sous 60 jours, médias si plus de 500 personnes",
            "GLBA : banques, assurances, crédit ; politiques de confidentialité écrites obligatoires",
            "SOX : sociétés cotées ; la direction certifie personnellement les comptes ; sanctions pénales",
            "FISMA : programmes de sécurité obligatoires pour les agences fédérales et leurs sous-traitants"
          ],
          narration:
            "Aux États-Unis, la protection des données est un patchwork de lois sectorielles. HIPAA impose des mesures de sécurité strictes aux hôpitaux, médecins et assureurs qui traitent des informations médicales, et la loi HITECH a renforcé ses exigences de notification : les personnes affectées doivent être prévenues sous soixante jours, et au-delà de cinq cents personnes touchées, il faut aussi notifier le ministère de la santé et les médias. GLBA couvre les banques et assurances. Sarbanes-Oxley, SOX, oblige les dirigeants de sociétés cotées à certifier personnellement l'exactitude des informations financières, sous peine de sanctions pénales. Et FISMA impose un programme de sécurité complet aux agences fédérales américaines et à leurs sous-traitants."
        },
        {
          type: "standard",
          titre: "PCI DSS : un standard contractuel, pas une loi",
          points: [
            "Protège les données de cartes bancaires",
            "Imposé par contrat entre le commerçant et sa banque, pas par un législateur",
            "Exigences : chiffrement, contrôle d'accès strict, surveillance, tests, politiques de sécurité"
          ],
          narration:
            "PCI DSS, le Payment Card Industry Data Security Standard, protège les données de cartes de crédit et de débit. Attention, c'est le piège classique : PCI DSS n'est pas une loi. C'est un standard industriel imposé par contrat entre le commerçant qui accepte les paiements par carte et la banque qui traite ses transactions. Ses exigences couvrent la sécurité du réseau, le chiffrement des données au repos et en transit, un contrôle d'accès strict avec des identifiants uniques, la surveillance et les tests réguliers, et le maintien de politiques de sécurité de l'information."
        },
        {
          type: "standard",
          titre: "Autres lois de vie privée dans le monde",
          points: [
            "CCPA (Californie) : droits des consommateurs — savoir, supprimer, opt-out de la vente",
            "PIPEDA (Canada), PIPL (Chine), POPIA (Afrique du Sud) : équivalents nationaux du GDPR",
            "COPPA : consentement parental vérifiable pour les moins de 13 ans",
            "Privacy Shield invalidé (Schrems II), remplacé par l'EU-US Data Privacy Framework"
          ],
          narration:
            "Le mouvement mondial de protection de la vie privée s'est largement inspiré du GDPR. En Californie, le CCPA donne aux consommateurs le droit de savoir quelles données sont collectées, de les faire supprimer, et de refuser leur vente. Le Canada a PIPEDA, la Chine a le PIPL, et l'Afrique du Sud a POPIA, toutes comparables au GDPR dans l'esprit. La loi américaine COPPA exige un consentement parental vérifiable avant de collecter des données d'enfants de moins de treize ans. Enfin, notez que le Privacy Shield encadrant les transferts de données entre l'Europe et les États-Unis a été invalidé par l'arrêt Schrems deux, puis remplacé en 2023 par l'EU-US Data Privacy Framework."
        },
        {
          type: "standard",
          titre: "Propriété intellectuelle et export",
          points: [
            "Trademark : marques et logos ; Patent : inventions ; Copyright : œuvres originales",
            "Trade Secret : secret d'affaires protégé tant qu'il reste secret ; Economic Espionage Act",
            "ITAR : matériel militaire ; EAR : biens à double usage ; Wassenaar : accord multinational d'export",
            "DMCA : interdit le contournement des protections de copyright numériques"
          ],
          narration:
            "La propriété intellectuelle se protège par quatre mécanismes principaux. La marque, trademark, protège les noms, slogans et logos. Le brevet, patent, protège les inventions nouvelles pour une durée limitée. Le copyright protège les œuvres originales comme les livres, la musique ou le code. Et le secret d'affaires, trade secret, protège les recettes internes de l'entreprise tant qu'elles restent secrètes, avec l'Economic Espionage Act qui punit leur vol. Côté export, retenez ITAR pour le matériel militaire américain, EAR pour les biens commerciaux à double usage, et l'arrangement de Wassenaar, un accord multinational volontaire de contrôle des exportations, notamment de cryptographie."
        },
        {
          type: "question",
          titre: "Contrôle de connaissance",
          points: ["Lois et standards : ne pas confondre"],
          narration:
            "Voyons si le piège classique fonctionne sur vous.",
          q: "Quelle affirmation décrit le MIEUX la nature de PCI DSS ?",
          choix: [
            "Une loi fédérale américaine protégeant les données bancaires",
            "Un règlement européen applicable aux commerçants",
            "Un standard industriel imposé par obligation contractuelle",
            "Une directive gouvernementale volontaire sans sanction"
          ],
          reponse: 2,
          explication:
            "PCI DSS est un standard de l'industrie des cartes de paiement, imposé par le contrat qui lie le commerçant à sa banque : ce n'est ni une loi fédérale ni un règlement gouvernemental. Son non-respect entraîne des pénalités contractuelles, voire la perte de la capacité à accepter les cartes, ce qui est loin d'être sans conséquence."
        },
        {
          type: "schema",
          titre: "Les cinq types d'enquêtes",
          points: [
            "Du moins formel au plus contraignant",
            "Le standard de preuve varie selon le type"
          ],
          schema: {
            type: "grid",
            items: [
              "Administrative : interne, la moins formelle, cause racine",
              "Civile : prépondérance de la preuve, dommages financiers",
              "Criminelle : au-delà du doute raisonnable, forces de l'ordre",
              "Réglementaire : menée par un régulateur (SEC, FINRA), coopération obligatoire",
              "Standards industriels : conformité contractuelle (ex. audit PCI DSS)"
            ]
          },
          narration:
            "Il existe cinq types d'enquêtes à connaître. L'enquête administrative est interne, souvent liée aux ressources humaines ou à des problèmes opérationnels ; c'est la moins formelle et elle cherche surtout la cause racine. L'enquête civile oppose deux parties pour des dommages généralement financiers, avec pour standard la prépondérance de la preuve. L'enquête criminelle implique les forces de l'ordre, et la culpabilité doit être établie au-delà de tout doute raisonnable, ce qui impose la collecte de preuves la plus rigoureuse. L'enquête réglementaire est menée par un régulateur comme la SEC, et l'organisation a l'obligation de coopérer, sans dissimuler ni détruire de preuves. Enfin, l'enquête de standard industriel vérifie la conformité contractuelle à un référentiel comme PCI DSS."
        },
        {
          type: "question",
          titre: "Contrôle de connaissance",
          points: ["Standards de preuve"],
          narration:
            "Une dernière question sur les enquêtes avant le résumé.",
          q: "Quel standard de preuve s'applique dans une affaire civile ?",
          choix: [
            "Au-delà de tout doute raisonnable",
            "Prépondérance de la preuve",
            "Preuve irréfutable et directe",
            "Intime conviction du régulateur"
          ],
          reponse: 1,
          explication:
            "En matière civile, il suffit de démontrer la prépondérance de la preuve, c'est-à-dire qu'il est plus probable qu'improbable que les faits reprochés soient vrais. Le standard « au-delà de tout doute raisonnable » est réservé aux affaires criminelles, où l'enjeu, la liberté de la personne, justifie une exigence bien plus élevée."
        },
        {
          type: "standard",
          titre: "Cybercrime et notification de violation",
          points: [
            "Trois familles de cybercriminalité : l'ordinateur CIBLE (accès non autorisé, malware, DoS), l'ordinateur OUTIL (fraude, usurpation d'identité), les infractions de CONTENU",
            "Convention de Budapest (2001) : premier traité international contre la cybercriminalité, harmonisation et coopération entre États",
            "GDPR : autorité de contrôle notifiée sous 72 h ; personnes concernées « sans retard injustifié » si risque élevé",
            "USA : pas de loi fédérale unique — chaque État a sa loi de notification (pionnière : Californie, SB 1386)",
            "NIS2 (UE) : alerte précoce 24 h, notification 72 h, rapport final sous 1 mois pour les entités essentielles et importantes"
          ],
          narration:
            "Élargissons maintenant le regard sur la cybercriminalité et les obligations de notification. On classe généralement les cybercrimes en trois familles : les attaques où l'ordinateur est la cible, comme l'accès non autorisé, les malwares ou le déni de service ; celles où il est l'outil de l'infraction, comme la fraude ou l'usurpation d'identité ; et les infractions de contenu, comme la diffusion de matériels illicites. La Convention de Budapest de deux mille un est le premier traité international qui harmonise ces incriminations et organise la coopération entre États. Côté notification, retenez bien les délais par juridiction : le GDPR impose soixante-douze heures vers l'autorité de contrôle, et une information des personnes concernées sans retard injustifié quand le risque pour leurs droits est élevé. La directive européenne NIS2 exige une alerte précoce en vingt-quatre heures, une notification complète en soixante-douze heures, puis un rapport final sous un mois. Et aux États-Unis, il n'existe pas de loi fédérale unique : chaque État possède sa propre loi de notification depuis la loi pionnière de la Californie.",
          astuce: "💡 Conseil examen : mémorisez la grille des délais — GDPR : 72 h vers l'autorité. NIS2 : 24 h, puis 72 h, puis 1 mois. HIPAA/HITECH : 60 jours vers les individus. USA : une loi par État, pas de délai fédéral unique."
        },
        {
          type: "standard",
          titre: "Transferts transfrontières de données",
          points: [
            "Principe GDPR : transfert hors UE interdit par défaut, sauf garantie appropriée",
            "Adequacy decision : la Commission européenne reconnaît une protection équivalente dans le pays tiers — transfert libre",
            "SCC (Standard Contractual Clauses) : clauses types approuvées par la Commission, insérées dans les contrats avec le destinataire",
            "BCR (Binding Corporate Rules) : règles internes contraignantes pour les transferts intra-groupe, approuvées par une autorité de contrôle",
            "Schrems II (2020) : Privacy Shield invalidé ; même avec des SCC, évaluer le droit du pays de destination et ajouter des mesures supplémentaires ; relais par l'EU-US Data Privacy Framework (2023)"
          ],
          narration:
            "Le GDPR interdit par défaut le transfert de données personnelles hors de l'Union européenne, sauf garanties appropriées. Première voie : la décision d'adéquation, l'adequacy decision, par laquelle la Commission européenne reconnaît qu'un pays tiers offre une protection substantiellement équivalente, ce qui autorise les transferts librement. Deuxième voie : les Standard Contractual Clauses, des clauses contractuelles types approuvées par la Commission, que l'on insère dans les contrats avec les destinataires des données. Troisième voie : les Binding Corporate Rules, des règles d'entreprise contraignantes qui encadrent les transferts au sein d'un même groupe multinational, après approbation d'une autorité de contrôle. Enfin, l'arrêt Schrems deux de deux mille vingt a invalidé le Privacy Shield et exige, même en présence de SCC, d'évaluer la législation du pays de destination et d'ajouter des mesures supplémentaires si nécessaire. L'EU-US Data Privacy Framework a pris le relais en deux mille vingt-trois pour les transferts vers les États-Unis.",
          astuce: "💡 Conseil examen : adequacy = transfert libre ; SCC = clauses types dans le contrat ; BCR = intra-groupe multinational. Schrems II impose une évaluation d'impact du transfert même avec des SCC."
        },
        {
          type: "resume",
          titre: "Ce qu'il faut retenir",
          points: [
            "Criminal, civil, administrative : trois catégories de droit, trois logiques",
            "GDPR : portée mondiale, notification 72 h ; HIPAA/HITECH : PHI, 60 jours",
            "PCI DSS est contractuel, SOX vise les sociétés cotées, GLBA la finance, FISMA le fédéral",
            "Cinq types d'enquêtes avec des standards de preuve différents",
            "Cybercrime : cible, outil ou contenu ; notification selon la juridiction (GDPR 72 h, NIS2 24 h/72 h/1 mois, lois par État aux USA)",
            "Transferts hors UE : adequacy decision, SCC, BCR — et l'impact de Schrems II"
          ],
          narration:
            "Résumons cette leçon dense. Trois catégories de droit : pénal, civil et administratif, chacune avec sa logique et son standard de preuve. Le GDPR s'applique mondialement dès qu'on traite des données de résidents européens, avec notification sous soixante-douze heures. HIPAA et HITECH protègent les données de santé avec un délai de soixante jours. PCI DSS est un standard contractuel, SOX responsabilise les dirigeants des sociétés cotées, GLBA encadre la finance et FISMA le secteur fédéral américain. Sachez reconnaître les cinq types d'enquêtes et leurs niveaux d'exigence respectifs. Enfin, vous savez désormais situer les grandes familles de cybercriminalité, les obligations de notification propres à chaque juridiction, et les mécanismes de transfert transfrontière de données : décisions d'adéquation, clauses contractuelles types et règles d'entreprise contraignantes, dans le monde d'après Schrems deux."
        }
      ]
    },

    // ------------------------------------------------------------------
    // Leçon 4 — Éthique, documentation de sécurité et personnel
    // ------------------------------------------------------------------
    {
      id: "d1-l4",
      titre: "Éthique ISC², politiques et sécurité du personnel",
      duree: 11,
      slides: [
        {
          type: "intro",
          titre: "Éthique et cadre documentaire",
          points: [
            "Le Code of Ethics ISC² est exigible à l'examen, canons dans l'ordre",
            "La documentation de sécurité forme une hiérarchie : de la politique à la procédure",
            "L'humain est le maillon le plus faible… et un atout quand il est formé"
          ],
          narration:
            "Cette leçon regroupe trois sujets très liés à la dimension humaine et organisationnelle : le code d'éthique ISC², la hiérarchie documentaire de la sécurité, et la sécurité du personnel. Le code d'éthique est exigible tel quel à l'examen, dans l'ordre de ses canons. Et gardez en tête ce paradoxe : l'humain est souvent décrit comme le maillon le plus faible de la sécurité, mais bien formé et motivé, il devient l'un de ses meilleurs atouts."
        },
        {
          type: "standard",
          titre: "Le Code of Ethics ISC² : quatre canons, dans l'ordre",
          points: [
            "1. Protect society, the common good, necessary public trust and confidence, and the infrastructure",
            "2. Act honorably, honestly, justly, responsibly, and legally",
            "3. Provide diligent and competent service to principals",
            "4. Advance and protect the profession"
          ],
          narration:
            "Le code d'éthique ISC² comporte quatre canons, et leur ordre est significatif : en cas de conflit, le premier prime sur le deuxième, et ainsi de suite. Premier canon : protéger la société, le bien commun, la confiance du public et les infrastructures. Deuxième : agir de façon honorable, honnête, juste, responsable et légale. Troisième : fournir un service diligent et compétent à ses mandants, ses employeurs et clients. Quatrième : faire progresser et protéger la profession. Autrement dit, la société passe avant la loi, la loi avant le client, et le client avant la profession.",
          astuce: "💡 Conseil examen : l'ordre des canons est une réponse en soi. Société > légalité > mandants > profession."
        },
        {
          type: "standard",
          titre: "Éthique : détails qui tombent à l'examen",
          points: [
            "Tout membre du public peut porter plainte au titre des canons I et II",
            "Canon III : seul un employeur ou un client sous contrat peut porter plainte",
            "En cas de lois contradictoires entre juridictions, priorité à la juridiction locale où vous travaillez",
            "RFC 1087 : gaspiller des ressources, compromettre la vie privée ou l'intégrité est « unethical »"
          ],
          narration:
            "Quelques détails d'éthique qui tombent régulièrement. N'importe quel membre du public peut déposer une plainte au titre des deux premiers canons, mais pour le troisième, seul un employeur ou une personne liée par contrat le peut. Si vous travaillez sur un projet où des lois de plusieurs pays entrent en conflit, priorisez la juridiction locale depuis laquelle vous fournissez le service. Enfin, la RFC 1087 sur l'éthique d'Internet qualifie de non éthique tout acte qui cherche un accès non autorisé, perturbe l'usage prévu d'Internet, gaspille des ressources, détruit l'intégrité d'informations ou compromet la vie privée des utilisateurs. Et bien sûr, vous devez aussi soutenir et promouvoir le code d'éthique propre à votre organisation."
        },
        {
          type: "schema",
          titre: "La hiérarchie documentaire",
          points: [
            "De l'obligatoire et stratégique au détaillé et opérationnel",
            "Policies et standards sont obligatoires, guidelines sont recommandées"
          ],
          schema: {
            type: "pyramid",
            items: ["Policies (obligatoires, stratégiques)", "Standards & Baselines (obligatoires, précis)", "Guidelines (recommandées, flexibles)", "Procedures / SOP (pas-à-pas détaillés)"]
          },
          narration:
            "La documentation de sécurité forme une hiérarchie. Au sommet, les politiques : des documents de haut niveau rédigés et publiés par la direction, qui définissent la portée et les objectifs stratégiques de la sécurité. Elles sont obligatoires mais ne disent pas comment faire. En dessous, les standards imposent des exigences précises et uniformes, par exemple l'usage homogène d'un matériel ou d'une technologie ; les baselines définissent le niveau minimal de sécurité que chaque système doit atteindre. Les guidelines, elles, sont des recommandations flexibles, non obligatoires. Et tout en bas, les procédures, ou SOP, décrivent pas à pas les actions exactes pour mettre en œuvre un contrôle. Retenez : politique et standard obligatoires, guideline recommandée, procédure détaillée."
        },
        {
          type: "question",
          titre: "Contrôle de connaissance",
          points: ["Politique, standard, baseline, guideline ou procédure ?"],
          narration:
            "Testons cette hiérarchie documentaire avec un cas concret.",
          q: "Un document définit le niveau minimal de configuration sécurisée que tout serveur de l'organisation doit respecter avant sa mise en production. Comment l'appelle-t-on ?",
          choix: ["Policy", "Baseline", "Guideline", "Procedure"],
          reponse: 1,
          explication:
            "Une baseline définit le niveau minimal de sécurité que chaque système doit atteindre ; elle est généralement spécifique à un type de système, comme une configuration standard de serveur. Une policy est stratégique et de haut niveau, une guideline est une simple recommandation, et une procedure décrit les étapes détaillées pour accomplir une tâche."
        },
        {
          type: "standard",
          titre: "Sécurité du personnel : le recrutement",
          points: [
            "Candidate screening : vérification du casier, des diplômes, des références et de l'historique d'emploi",
            "Employment agreement : plus il est précis, moins l'organisation prend de risques juridiques",
            "NDA pour la confidentialité, AUP pour l'usage acceptable, non-compete selon les juridictions"
          ],
          narration:
            "La sécurité du personnel commence avant même l'embauche. Le screening des candidats comprend la vérification du casier judiciaire, de l'historique d'emploi, des diplômes et certifications, et la prise de contact avec les références. À l'embauche, le contrat de travail précise les fonctions, les attentes et les conditions de fin de contrat ; plus il est détaillé, plus il protège l'organisation, notamment contre les litiges de licenciement abusif. On y adjoint des documents comme le NDA, l'accord de non-divulgation qui protège les informations confidentielles même après le départ, et l'AUP, la politique d'usage acceptable qui définit ce qui est permis ou non avec les ressources de l'entreprise."
        },
        {
          type: "standard",
          titre: "Onboarding, transferts et offboarding",
          points: [
            "Onboarding : intégration documentée, formation à la sécurité dès l'arrivée",
            "Transfert : réajuster les accès pour maintenir le Least Privilege",
            "Offboarding : désactiver les accès dans l'IAM, récupérer les actifs, escorter la personne",
            "Prestataires et fournisseurs : SLA, revues de processus, contrôles d'accès dédiés"
          ],
          narration:
            "Le cycle de vie de l'employé continue avec l'onboarding : un processus documenté qui intègre le nouvel arrivant rapidement et de façon cohérente, avec une formation de sensibilisation dès l'arrivée. Lors d'un transfert interne, il faut réajuster les droits d'accès pour respecter le principe du moindre privilège et éviter l'accumulation de droits. Lors du départ, l'offboarding retire l'identité du système de gestion des identités, désactive les comptes, récupère les équipements, et la personne est escortée hors des locaux, que le départ soit cordial ou non. N'oubliez pas les tiers : les prestataires, consultants et fournisseurs doivent être couverts par des accords de niveau de service et des contrôles adaptés."
        },
        {
          type: "question",
          titre: "Contrôle de connaissance",
          points: ["Réagir à un départ"],
          narration:
            "Une mise en situation de manager sur l'offboarding.",
          q: "Un administrateur système est licencié avec effet immédiat. Que devriez-vous faire EN PREMIER ?",
          choix: [
            "Organiser un entretien de sortie détaillé",
            "Désactiver ses comptes et ses accès",
            "Récupérer son badge et son ordinateur portable",
            "Informer son équipe de son départ"
          ],
          reponse: 1,
          explication:
            "Pour un compte à privilèges élevés et un départ non choisi, la priorité absolue est de désactiver les accès logiques avant ou au moment de l'annonce, afin d'empêcher toute action malveillante. L'entretien de sortie, la récupération du matériel et la communication interne suivent, mais ne protègent pas les systèmes si les accès restent ouverts."
        },
        {
          type: "resume",
          titre: "Ce qu'il faut retenir",
          points: [
            "Quatre canons ISC² dans l'ordre : société, honneur et légalité, mandants, profession",
            "Hiérarchie : Policy > Standard/Baseline > Guideline > Procedure",
            "Screening avant l'embauche, NDA et AUP pendant, offboarding rigoureux au départ",
            "Un départ à risque : désactiver les accès d'abord"
          ],
          narration:
            "Récapitulons. Le code d'éthique ISC² comporte quatre canons ordonnés : protéger la société, agir honorablement et légalement, servir ses mandants avec compétence, et faire progresser la profession. La documentation de sécurité va de la politique stratégique et obligatoire jusqu'à la procédure détaillée, en passant par les standards, les baselines et les guidelines. Et la sécurité du personnel couvre tout le cycle de vie : screening à l'embauche, accords comme le NDA et l'AUP, ajustement des droits lors des transferts, et offboarding rigoureux où la désactivation des accès prime."
        }
      ]
    },

    // ------------------------------------------------------------------
    // Leçon 5 — Gestion des risques
    // ------------------------------------------------------------------
    {
      id: "d1-l5",
      titre: "Gestion des risques : analyse quantitative, qualitative et traitement",
      duree: 14,
      slides: [
        {
          type: "intro",
          titre: "Le cœur du métier : gérer le risque",
          points: [
            "On ne peut jamais éliminer 100 % du risque",
            "La direction décide quels risques sont acceptables",
            "Vocabulaire précis exigé : threat, vulnerability, exposure, risk, safeguard"
          ],
          narration:
            "Nous voici au cœur du Domaine 1 : la gestion des risques. Le principe de départ est simple : on ne peut jamais éliminer cent pour cent du risque, ni dans l'informatique, ni ailleurs. Le rôle du management est donc de décider quels risques sont acceptables et lesquels ne le sont pas, en équilibrant le coût des protections et la valeur des actifs. Pour y parvenir, il faut d'abord maîtriser un vocabulaire très précis, que l'examen teste sans pitié."
        },
        {
          type: "standard",
          titre: "Le vocabulaire du risque",
          points: [
            "Threat : événement potentiel pouvant causer un dommage ; Threat Agent : celui qui l'exploite",
            "Vulnerability : faiblesse d'un actif ou absence de protection",
            "Exposure : susceptibilité à une perte ; Risk : probabilité qu'une menace exploite une vulnérabilité",
            "Safeguard / Countermeasure : contrôle qui réduit le risque"
          ],
          narration:
            "Posons les définitions. Une menace, threat, est tout événement potentiel pouvant causer un résultat indésirable pour un actif ; l'agent de menace est celui qui l'exploite intentionnellement, et le threat vector est le chemin qu'emprunte l'attaque. Une vulnérabilité est une faiblesse dans un actif, ou l'absence d'une protection. L'exposition est le fait d'être susceptible de subir une perte. Et le risque, c'est la probabilité qu'une menace exploite une vulnérabilité, combinée à la gravité du dommage. La chaîne logique à retenir : les menaces exploitent les vulnérabilités, ce qui crée une exposition ; l'exposition est un risque, et le risque est réduit par des safeguards, qui protègent les actifs."
        },
        {
          type: "standard",
          titre: "Appetite, tolerance, capacity",
          points: [
            "Risk Appetite : la quantité totale de risque que l'organisation est prête à accepter",
            "Risk Tolerance : la variation acceptable autour d'un objectif spécifique",
            "Risk Capacity : le maximum de risque que l'organisation peut absorber"
          ],
          narration:
            "Trois notions proches et très testées. Le risk appetite, l'appétit pour le risque, est la quantité totale de risque que l'organisation est prête à accepter pour poursuivre sa mission. La risk tolerance est plus fine : c'est la variation acceptable des résultats autour d'un objectif donné. Et la risk capacity est le plafond absolu, le maximum de risque que l'organisation peut supporter sans mettre en péril son existence. L'appétit doit évidemment rester en dessous de la capacité."
        },
        {
          type: "standard",
          titre: "Analyse quantitative : les formules à connaître par cœur",
          points: [
            "SLE = AV × EF : coût d'une seule réalisation du risque",
            "ALE = SLE × ARO : coût annuel attendu",
            "Valeur du safeguard = (ALE avant − ALE après) − coût annuel du safeguard (ACS)"
          ],
          narration:
            "L'analyse quantitative attribue des valeurs monétaires réelles au risque. La Single Loss Expectancy, SLE, est le coût d'une seule réalisation du risque : elle vaut la valeur de l'actif, Asset Value, multipliée par l'Exposure Factor, le pourcentage de l'actif perdu si la menace se réalise. L'Annualized Rate of Occurrence, ARO, est le nombre de fois où l'on s'attend à ce que le risque se réalise par an. Et l'Annualized Loss Expectancy, ALE, est la perte annuelle attendue : SLE multiplié par ARO. Pour juger un safeguard, on calcule l'ALE avant, moins l'ALE après, moins le coût annuel du safeguard : si le résultat est positif, l'investissement est justifié.",
          astuce: "💡 Conseil examen : entraînez-vous aux calculs. Exemple : actif de 200 000 €, EF de 25 %, ARO de 0,5 → SLE = 50 000 €, ALE = 25 000 €."
        },
        {
          type: "standard",
          titre: "Analyse qualitative et approche hybride",
          points: [
            "Qualitative : valeurs subjectives, scénarios, jugement d'experts, échelles haut/moyen/bas",
            "Techniques : Delphi (consensus anonyme), brainstorming, storyboards, questionnaires",
            "En pratique, la plupart des organisations combinent les deux approches"
          ],
          narration:
            "L'analyse qualitative, elle, s'appuie sur des valeurs subjectives et intangibles : des scénarios, l'intuition et l'expérience des experts, des classements du type élevé, moyen, faible. La technique Delphi est le grand classique : un système de retours anonymes en plusieurs tours qui permet d'atteindre un consensus sans que la hiérarchie ou la personnalité des participants ne biaise le résultat. Dans la vraie vie, la plupart des organisations utilisent une approche hybride : le qualitatif pour prioriser rapidement un grand nombre de risques, et le quantitatif pour justifier financièrement les décisions importantes."
        },
        {
          type: "question",
          titre: "Contrôle de connaissance",
          points: ["Un calcul quantitatif"],
          narration:
            "À vous de calculer. Prenez le temps de poser les formules.",
          q: "Un data center vaut 2 000 000 €. Une inondation détruirait 30 % de sa valeur et devrait survenir une fois tous les 10 ans. Quel est l'ALE ?",
          choix: ["600 000 €", "200 000 €", "60 000 €", "6 000 €"],
          reponse: 2,
          explication:
            "SLE = AV × EF = 2 000 000 × 0,30 = 600 000 €. ARO = 1/10 = 0,1. ALE = SLE × ARO = 600 000 × 0,1 = 60 000 €. L'erreur classique est de s'arrêter au SLE (600 000 €) ou de se tromper dans la conversion de la fréquence en ARO."
        },
        {
          type: "schema",
          titre: "Les réponses au risque",
          points: [
            "Quatre réponses principales, plus la dissuasion",
            "Le rejet du risque n'est jamais acceptable"
          ],
          schema: {
            type: "grid",
            items: [
              "Mitigation : réduire par des contrôles",
              "Transference / Assignment : transférer (assurance, externalisation)",
              "Avoidance : éviter en renonçant à l'activité",
              "Acceptance : accepter après analyse coût/bénéfice",
              "Deterrence : dissuader les attaquants potentiels",
              "Rejection : ignorer le risque — jamais acceptable"
            ]
          },
          narration:
            "Face à un risque identifié, on formule une réponse. La mitigation réduit le risque en déployant des contrôles et des contre-mesures. Le transfert confie l'impact financier à un tiers, typiquement une assurance cyber. L'évitement consiste à renoncer à l'activité parce que le risque dépasse le bénéfice attendu. L'acceptation est une décision documentée du management, après analyse coût-bénéfice, d'assumer les conséquences si le risque se réalise. On mentionne aussi la dissuasion, comme les caméras et les bannières d'avertissement. En revanche, rejeter ou ignorer un risque en espérant qu'il ne se réalisera pas n'est jamais une réponse acceptable : c'est une violation de la Due Care."
        },
        {
          type: "standard",
          titre: "Risque inhérent, résiduel et total",
          points: [
            "Inherent Risk : le risque naturel avant tout traitement",
            "Residual Risk : le risque qui reste après les contrôles — c'est lui que la direction accepte",
            "Total Risk = threats × vulnerabilities × asset value ; Residual = Total − Controls Gap"
          ],
          narration:
            "Encore un peu de vocabulaire. Le risque inhérent est le niveau de risque naturel, avant tout effort de gestion : c'est ce que révèle l'évaluation initiale. Le risque résiduel est ce qui reste après la mise en place des contrôles ; c'est ce risque-là que la direction choisit d'accepter. Le risque total est ce que l'organisation subirait sans aucune protection, et se conceptualise comme le produit des menaces, des vulnérabilités et de la valeur des actifs. Le controls gap est la part de risque éliminée par les contrôles, si bien que le risque résiduel est égal au risque total moins le controls gap."
        },
        {
          type: "standard",
          titre: "Catégories et types de contrôles",
          points: [
            "Trois catégories : Administrative, Technical/Logical, Physical",
            "Types : Preventive, Deterrent, Detective, Corrective, Recovery, Directive, Compensating",
            "Défense en profondeur : les trois catégories se superposent"
          ],
          narration:
            "Les contrôles se classent selon deux axes. Par catégorie d'implémentation, on distingue les contrôles administratifs, comme les politiques et procédures, les contrôles techniques ou logiques, comme les pare-feu et le chiffrement, et les contrôles physiques, comme les clôtures et les gardiens. Par fonction, un contrôle préventif empêche l'incident, un contrôle dissuasif décourage l'attaquant, un contrôle détectif découvre l'incident après coup, un contrôle correctif ramène le système à la normale, un contrôle de récupération répare des dégâts plus importants, un contrôle directif oriente les comportements, et un contrôle compensatoire remplace ou renforce un contrôle principal. En défense en profondeur, ces couches se superposent, en commençant par les politiques."
        },
        {
          type: "question",
          titre: "Contrôle de connaissance",
          points: ["Classer un contrôle"],
          narration:
            "Sauriez-vous classer ce contrôle sur les deux axes ?",
          q: "Une caméra de surveillance visible à l'entrée d'un bâtiment est un contrôle de quel type principal ?",
          choix: [
            "Physique et préventif",
            "Physique et dissuasif",
            "Technique et détectif",
            "Administratif et directif"
          ],
          reponse: 1,
          explication:
            "Une caméra visible est un contrôle physique dont la fonction première, quand elle est bien en évidence, est la dissuasion : convaincre l'attaquant potentiel de renoncer. Elle a aussi une fonction détective via l'enregistrement, mais elle n'empêche physiquement rien, donc elle n'est pas préventive au sens strict."
        },
        {
          type: "standard",
          titre: "Piloter dans la durée : registre, RMF, maturité",
          points: [
            "Risk Register : inventaire vivant des risques, réponses et suivis",
            "NIST RMF, 7 étapes : Prepare, Categorize, Select, Implement, Assess, Authorize, Monitor",
            "Risk Maturity Model : Ad hoc → Preliminary → Defined → Integrated → Optimized",
            "SCA et monitoring continu : vérifier que les contrôles fonctionnent réellement"
          ],
          narration:
            "La gestion des risques est un cycle, pas un projet ponctuel. Le risk register, ou registre des risques, inventorie tous les risques identifiés, leur criticité, les réponses prescrites et l'avancement du traitement. Le Risk Management Framework du NIST structure ce cycle en sept étapes : préparer, catégoriser le système, sélectionner les contrôles, les implémenter, les évaluer, autoriser le système, puis surveiller en continu. La maturité du dispositif s'évalue avec un Risk Maturity Model en cinq niveaux, d'ad hoc jusqu'à optimized. Enfin, les Security Control Assessments et le monitoring continu vérifient régulièrement que les contrôles sont bien en place et réellement efficaces. Citons aussi d'autres cadres de risque : ISO 31000, FAIR, OCTAVE ou le modèle TARA."
        },
        {
          type: "resume",
          titre: "Ce qu'il faut retenir",
          points: [
            "Chaîne : threat → vulnerability → exposure → risk → safeguard",
            "SLE = AV × EF ; ALE = SLE × ARO ; valeur du safeguard = (ALE1 − ALE2) − ACS",
            "Réponses : mitigate, transfer, avoid, accept, deter — jamais reject",
            "Residual risk = ce que la direction accepte ; contrôles en 3 catégories et 7 types",
            "Cycle continu : risk register, RMF, maturité, monitoring"
          ],
          narration:
            "Résumons ce chapitre central. Maîtrisez la chaîne du risque : les menaces exploitent des vulnérabilités, créant une exposition qui constitue le risque, réduit par des safeguards. Sachez calculer sans hésiter SLE, ALE et la valeur d'un safeguard. Connaissez les réponses au risque, en vous rappelant que le rejet n'est jamais acceptable. Distinguez risque inhérent, résiduel et total, et sachez classer un contrôle par catégorie et par fonction. Enfin, retenez que tout cela s'inscrit dans un cycle continu, outillé par le registre des risques, le RMF du NIST et les modèles de maturité."
        }
      ]
    },

    // ------------------------------------------------------------------
    // Leçon 6 — Threat modeling et supply chain
    // ------------------------------------------------------------------
    {
      id: "d1-l6",
      titre: "Threat modeling (STRIDE, DREAD, PASTA) et risque de la supply chain",
      duree: 11,
      slides: [
        {
          type: "intro",
          titre: "Modéliser les menaces",
          points: [
            "Identifier, catégoriser et analyser les menaces potentielles",
            "Approche proactive (dès la conception) ou réactive (après déploiement)",
            "La sécurité coûte moins cher quand elle est intégrée tôt"
          ],
          narration:
            "Le threat modeling, la modélisation des menaces, est le processus qui consiste à identifier, catégoriser et analyser les menaces potentielles pesant sur un système. Il peut être mené de façon proactive, pendant la conception et le développement, c'est l'approche défensive, ou de façon réactive, une fois le produit déployé, c'est l'approche adversariale. Retenez le principe économique : intégrer la sécurité dès la conception coûte toujours moins cher que la rajouter après coup. C'est l'esprit du Security Development Lifecycle de Microsoft : secure by design, secure by default, secure in deployment."
        },
        {
          type: "schema",
          titre: "STRIDE : catégoriser les menaces",
          points: [
            "Modèle de catégorisation développé par Microsoft",
            "Chaque lettre correspond à une famille de menaces"
          ],
          schema: {
            type: "grid",
            items: [
              "Spoofing : usurpation d'identité",
              "Tampering : altération de données",
              "Repudiation : nier avoir agi",
              "Information Disclosure : divulgation",
              "Denial of Service : déni de service",
              "Elevation of Privilege : élévation de privilèges"
            ]
          },
          narration:
            "STRIDE, développé par Microsoft, est un modèle de catégorisation des menaces. S pour spoofing, l'usurpation d'identité par de fausses informations d'authentification. T pour tampering, l'altération non autorisée de données en transit ou stockées. R pour repudiation, la capacité d'un utilisateur ou d'un attaquant à nier avoir accompli une action. I pour information disclosure, la divulgation d'informations confidentielles. D pour denial of service, l'attaque qui empêche l'usage légitime d'une ressource. Et E pour elevation of privilege, quand un compte limité obtient des pouvoirs supérieurs. Remarquez que chaque catégorie STRIDE attaque un des piliers de la sécurité."
        },
        {
          type: "standard",
          titre: "DREAD : prioriser les menaces",
          points: [
            "Damage potential, Reproducibility, Exploitability, Affected users, Discoverability",
            "Un score par critère pour classer les menaces",
            "STRIDE identifie et catégorise, DREAD priorise : ils se complètent"
          ],
          narration:
            "Une fois les menaces identifiées, encore faut-il les prioriser : c'est le rôle de DREAD, également créé par Microsoft. On note chaque menace selon cinq critères : le potentiel de dommage, la reproductibilité de l'attaque, la facilité d'exploitation, le nombre d'utilisateurs affectés, et la facilité de découverte de la vulnérabilité. La somme des scores permet de classer les menaces et de traiter les plus sérieuses en premier. Le duo classique à retenir pour l'examen : STRIDE pour identifier et catégoriser, DREAD pour prioriser."
        },
        {
          type: "standard",
          titre: "PASTA : sept étapes centrées sur le risque",
          points: [
            "Process for Attack Simulation and Threat Analysis",
            "7 stages : objectifs, périmètre technique, décomposition, analyse des menaces, vulnérabilités, simulation d'attaque, gestion du risque",
            "Méthodologie centrée sur le risque et alignée sur le métier"
          ],
          narration:
            "PASTA, le Process for Attack Simulation and Threat Analysis, est une méthodologie en sept étapes centrée sur le risque. On commence par définir les objectifs de l'analyse, puis le périmètre technique. On décompose ensuite l'application, on analyse les menaces, puis les faiblesses et vulnérabilités. L'avant-dernière étape modélise et simule les attaques, et la dernière analyse et gère le risque qui en résulte. Ce qu'il faut retenir, c'est que PASTA relie explicitement la modélisation des menaces aux objectifs métier et au risque, là où STRIDE reste une grille de catégorisation technique. Citons aussi VAST, pensé pour les environnements agiles à grande échelle, et Trike, une méthodologie open source basée sur le risque et l'audit."
        },
        {
          type: "standard",
          titre: "Outils complémentaires du threat modeling",
          points: [
            "MITRE ATT&CK : base de connaissance des tactiques et techniques réelles des attaquants",
            "Reduction analysis : décomposer le système — trust boundaries, data flows, input points, opérations privilégiées, contrôles",
            "Partage de renseignement : STIX (décrire), TAXII (échanger), CAPEC (patterns d'attaque)"
          ],
          narration:
            "Quelques outils complètent l'arsenal. MITRE ATT&CK est une base de connaissance mondialement utilisée qui documente les tactiques, techniques et procédures réellement employées par les attaquants ; elle sert de référence dans de nombreux produits de détection. La reduction analysis, ou décomposition, consiste à découper un système en cinq éléments clés : les frontières de confiance, les chemins de flux de données, les points d'entrée, les opérations privilégiées et les détails des contrôles de sécurité. Enfin, pour partager du renseignement sur les menaces, STIX est le langage standardisé de description, TAXII le protocole d'échange, et CAPEC le dictionnaire des patterns d'attaque connus."
        },
        {
          type: "question",
          titre: "Contrôle de connaissance",
          points: ["STRIDE en situation"],
          narration:
            "Appliquons STRIDE à un cas concret.",
          q: "Un attaquant modifie le contenu d'un fichier de configuration pendant son transfert vers un serveur. Dans le modèle STRIDE, de quelle catégorie de menace s'agit-il ?",
          choix: ["Spoofing", "Tampering", "Repudiation", "Elevation of Privilege"],
          reponse: 1,
          explication:
            "La modification non autorisée de données, en transit ou au repos, correspond au Tampering, qui attaque l'intégrité. Le Spoofing est une usurpation d'identité, la Repudiation consiste à nier une action, et l'Elevation of Privilege transforme un compte limité en compte privilégié."
        },
        {
          type: "standard",
          titre: "Supply Chain Risk Management (SCRM)",
          points: [
            "Chaque maillon de la chaîne doit être fiable, digne de confiance et responsable devant le suivant",
            "Menaces : product tampering, contrefaçons, implants matériels ou logiciels",
            "La supply chain est un vecteur d'attaque : la source paraît de confiance, l'amont est compromis"
          ],
          narration:
            "Passons à la chaîne d'approvisionnement. Le Supply Chain Risk Management vise à garantir que tous les fournisseurs et maillons de la chaîne sont fiables, dignes de confiance et transparents sur leurs pratiques de sécurité envers leurs partenaires. Chaque maillon doit être responsable devant le suivant, et chaque transfert documenté et audité. Le danger est que la supply chain devienne elle-même un vecteur d'attaque : vous recevez du matériel ou du logiciel d'une source apparemment de confiance, mais un maillon en amont a été compromis. Les menaces typiques sont le sabotage de produit, les contrefaçons et les implants, parfois des puces miniaturisées, difficiles à détecter."
        },
        {
          type: "standard",
          titre: "Atténuer le risque de la supply chain",
          points: [
            "Évaluations de tiers : on-site assessment, revue documentaire, audits externes, monitoring continu",
            "Exigences minimales de sécurité intégrées aux contrats et SLA",
            "Techniques : silicon Root of Trust, Physically Unclonable Function (PUF), SBOM"
          ],
          narration:
            "Comment atténuer ce risque ? D'abord par la diligence sur les tiers : évaluations sur site, revues de documents et de politiques, audits par des organismes indépendants et surveillance continue. Ensuite en intégrant des exigences minimales de sécurité et des niveaux de service directement dans les contrats et les SLA. Enfin par des mécanismes techniques : le silicon root of trust, une racine de confiance matérielle qui sécurise le démarrage du système ; la physically unclonable function, un composant physique qui crée une empreinte électronique unique et non clonable pour authentifier une puce ; et le Software Bill of Materials, le SBOM, l'inventaire détaillé de tous les composants et bibliothèques d'un logiciel, indispensable pour tracer les vulnérabilités."
        },
        {
          type: "question",
          titre: "Contrôle de connaissance",
          points: ["Transparence logicielle"],
          narration:
            "Une question sur les mitigations de la supply chain.",
          q: "Après une vulnérabilité critique dans une bibliothèque open source, votre organisation veut identifier rapidement tous les logiciels affectés. Quel élément répond le MIEUX à ce besoin ?",
          choix: [
            "Un silicon Root of Trust",
            "Un Software Bill of Materials (SBOM)",
            "Une Physically Unclonable Function (PUF)",
            "Un accord de niveau de service (SLA)"
          ],
          reponse: 1,
          explication:
            "Le SBOM liste tous les composants, bibliothèques et dépendances d'une application ; c'est exactement l'outil qui permet de savoir où une bibliothèque vulnérable est utilisée. Le root of trust et la PUF protègent l'intégrité et l'authenticité du matériel, et le SLA encadre les engagements de service d'un fournisseur, sans donner de visibilité sur les composants logiciels."
        },
        {
          type: "resume",
          titre: "Ce qu'il faut retenir",
          points: [
            "Threat modeling : proactif (conception) ou réactif (déploiement)",
            "STRIDE catégorise, DREAD priorise, PASTA relie menaces et risque métier en 7 étapes",
            "MITRE ATT&CK, reduction analysis, STIX/TAXII/CAPEC complètent l'arsenal",
            "SCRM : évaluer les tiers, contractualiser la sécurité, RoT, PUF, SBOM"
          ],
          narration:
            "En résumé, le threat modeling identifie et analyse les menaces, idéalement dès la conception où il coûte le moins cher. STRIDE catégorise les menaces en six familles, DREAD les priorise avec cinq critères, et PASTA déroule sept étapes centrées sur le risque métier. MITRE ATT&CK documente les techniques réelles des attaquants, et la reduction analysis décompose le système pour mieux le comprendre. Côté supply chain, chaque maillon doit être fiable et auditable ; on se protège par les évaluations de tiers, les exigences contractuelles, et des mécanismes comme le root of trust matériel, la PUF et le SBOM."
        }
      ]
    },

    // ------------------------------------------------------------------
    // Leçon 7 — BCP/BIA et sensibilisation
    // ------------------------------------------------------------------
    {
      id: "d1-l7",
      titre: "Continuité d'activité (BCP, BIA) et programme de sensibilisation",
      duree: 12,
      slides: [
        {
          type: "intro",
          titre: "Continuer à fonctionner, quoi qu'il arrive",
          points: [
            "BCP : maintenir les opérations critiques pendant et après une crise",
            "La priorité absolue du BCP et du DRP : la sécurité des personnes",
            "BCP stratégique et orienté processus métier ; DRP tactique et technique"
          ],
          narration:
            "Dernière leçon de ce domaine : la continuité d'activité et la sensibilisation. Le Business Continuity Planning évalue les risques pesant sur les processus de l'organisation et crée les politiques, plans et procédures pour en minimiser l'impact. Son but est de maintenir les opérations critiques pendant et après une crise, avec une réponse rapide, calme et efficace. Deux réflexes d'examen : d'abord, la priorité numéro un du BCP comme du DRP est toujours la sécurité des personnes. Ensuite, distinguez bien le BCP, stratégique et centré sur les processus métier, du DRP, plus tactique et technique, qui décrit les sites de repli, les sauvegardes et la restauration."
        },
        {
          type: "schema",
          titre: "Les quatre étapes du processus BCP",
          points: [
            "Un processus séquentiel validé par la direction",
            "Le soutien du top management est indispensable dès le départ"
          ],
          schema: {
            type: "flow",
            items: [
              "1. Project scope & planning",
              "2. Business Impact Analysis",
              "3. Continuity planning",
              "4. Approval & implementation"
            ]
          },
          narration:
            "Le processus BCP comporte quatre grandes étapes. D'abord le cadrage du projet : obtenir le soutien de la direction, constituer une équipe représentative du métier et de l'informatique, et bâtir le business case. Ensuite la Business Impact Analysis, que nous détaillons juste après. Puis la planification de la continuité proprement dite, avec le développement de la stratégie et des mécanismes de protection. Et enfin l'approbation et la mise en œuvre : le plan doit être endossé par le plus haut dirigeant de l'organisation, puis décliné en formation pour tout le personnel concerné."
        },
        {
          type: "standard",
          titre: "La Business Impact Analysis (BIA)",
          points: [
            "Identifier les processus et systèmes critiques et l'impact d'une interruption",
            "Quatre temps : identification des priorités, identification des risques, évaluation de la probabilité, priorisation des ressources",
            "Produit les métriques clés : RTO, RPO, MTD"
          ],
          narration:
            "La Business Impact Analysis identifie les systèmes et services dont l'entreprise dépend, et évalue l'impact qu'aurait leur interruption, y compris sur des processus métier comme la facturation ou les ventes. Elle se déroule en quatre temps : identifier les priorités de l'organisation, identifier les risques, évaluer leur probabilité, puis prioriser les ressources, c'est-à-dire décider quels systèmes restaurer en premier, en commençant par les services fondamentaux comme le réseau et l'annuaire, dont tout le reste dépend. C'est la BIA qui produit les métriques de récupération que tout candidat CISSP doit connaître parfaitement."
        },
        {
          type: "standard",
          titre: "RTO, RPO, MTD et les métriques de fiabilité",
          points: [
            "RTO : durée maximale tolérable pour restaurer le service",
            "RPO : perte de données maximale tolérable, mesurée en temps",
            "MTD/MAD : durée d'interruption au-delà de laquelle l'entreprise ne survit pas ; RTO ≤ MTD",
            "MTTR : temps moyen de réparation ; MTBF : temps moyen entre pannes"
          ],
          narration:
            "Voici les métriques essentielles. Le Recovery Time Objective, RTO, est le temps maximal toléré pour remettre un système en service à un niveau défini. Le Recovery Point Objective, RPO, est la perte de données maximale tolérable, exprimée en temps : un RPO d'une heure signifie qu'on accepte de perdre au plus une heure de données, ce qui dicte la fréquence des sauvegardes. Le Maximum Tolerable Downtime, MTD, est la durée d'interruption d'une fonction critique au-delà de laquelle l'organisation cesse d'être viable ; le RTO doit donc toujours être inférieur ou égal au MTD. Ajoutez le MTTR, le temps moyen de réparation d'un équipement, et le MTBF, le temps moyen entre deux pannes.",
          astuce: "💡 Conseil examen : RTO = temps pour revenir, RPO = données qu'on accepte de perdre, MTD = limite de survie. Et toujours RTO ≤ MTD."
        },
        {
          type: "standard",
          titre: "Continuity planning et dépendances externes",
          points: [
            "Strategy development : choisir quels risques seront atténués",
            "Provisions & processes : concevoir les mécanismes ; objectif : le COOP, jusqu'à un mois d'opérations",
            "Dépendances externes : fournisseurs critiques, cloud, obligations légales — à intégrer au plan",
            "Facettes de la continuité : résilience, récupération, contingence"
          ],
          narration:
            "La phase de continuity planning comprend deux sous-étapes : le développement de la stratégie, où l'équipe décide quels risques seront atténués, et les provisions and processes, où l'on conçoit les mécanismes et procédures correspondants. Le livrable est le continuity of operations plan, le COOP, qui décrit comment l'organisation assurera ses fonctions critiques dès la survenue d'une perturbation et jusqu'à un mois d'opérations soutenues. N'oubliez pas les dépendances externes : fournisseurs de matériel et de logiciels critiques, services cloud, contraintes légales et réglementaires doivent être intégrés au plan. Et retenez les trois facettes de la continuité : la résilience d'abord, la récupération si un service tombe, et la contingence en dernier recours."
        },
        {
          type: "question",
          titre: "Contrôle de connaissance",
          points: ["Les métriques de la BIA"],
          narration:
            "Vérifions ces métriques avec une question de style examen.",
          q: "Votre organisation effectue des sauvegardes toutes les 4 heures. Quelle métrique cette fréquence détermine-t-elle directement ?",
          choix: ["RTO", "RPO", "MTD", "MTBF"],
          reponse: 1,
          explication:
            "La fréquence des sauvegardes détermine la quantité maximale de données perdues en cas d'incident : c'est le Recovery Point Objective. Avec une sauvegarde toutes les 4 heures, on peut perdre jusqu'à 4 heures de données. Le RTO concerne le délai de restauration du service, le MTD la durée d'interruption maximale supportable, et le MTBF la fiabilité d'un équipement."
        },
        {
          type: "standard",
          titre: "Awareness, training, education",
          points: [
            "Awareness : attirer l'attention, changer les réflexes de tous",
            "Training : apprendre à accomplir ses tâches en respectant la politique de sécurité",
            "Education : savoir au-delà du poste, souvent liée à une certification ou une évolution",
            "Obligatoire pour les nouveaux arrivants, puis au minimum une fois par an"
          ],
          narration:
            "L'humain étant la première cible des attaquants, le programme de sensibilisation est un pilier du Domaine 1. On distingue trois niveaux. La sensibilisation, awareness, vise à capter l'attention de tous et à installer les bons réflexes face au phishing ou aux clés USB abandonnées. La formation, training, apprend aux employés à accomplir leurs tâches conformément à la politique de sécurité. L'éducation va au-delà des besoins du poste : elle est souvent associée à une certification ou à une évolution de carrière. La formation doit être obligatoire pour tous les nouveaux arrivants, puis renouvelée au minimum chaque année."
        },
        {
          type: "standard",
          titre: "Techniques modernes et mesure d'efficacité",
          points: [
            "Campagnes de phishing simulé : taux d'ouverture, de clic et de signalement",
            "Social engineering : autorité, intimidation, consensus, rareté, familiarité, confiance, urgence",
            "Security champions et gamification pour ancrer la culture",
            "Réviser le contenu régulièrement : IA, blockchain, nouvelles menaces — et mesurer les résultats"
          ],
          narration:
            "Les techniques modernes rendent la sensibilisation vivante. Les campagnes de phishing simulé produisent des métriques précieuses : le pourcentage d'employés qui ouvrent le message, qui cliquent, et surtout qui le signalent. La formation doit couvrir les principes du social engineering : l'autorité, l'intimidation, le consensus, la rareté, la familiarité, la confiance et l'urgence. Les security champions sont des relais au sein des équipes qui évangélisent la sécurité au quotidien, et la gamification rend l'apprentissage plus engageant qu'un simple questionnaire. Enfin, le contenu doit être révisé périodiquement pour intégrer les technologies émergentes comme l'intelligence artificielle ou la blockchain, et l'efficacité du programme doit être mesurée avec des indicateurs suivis dans le temps : un programme qu'on ne mesure pas ne s'améliore pas."
        },
        {
          type: "question",
          titre: "Contrôle de connaissance",
          points: ["La priorité en cas de sinistre"],
          narration:
            "Une dernière question, sur le réflexe le plus important de tout l'examen.",
          q: "Un incendie se déclare dans le data center principal pendant les heures de bureau. Quelle est la PREMIÈRE priorité du plan de continuité ?",
          choix: [
            "Basculer les services critiques vers le site de secours",
            "Évacuer le personnel et garantir la sécurité des personnes",
            "Déclencher la restauration des sauvegardes",
            "Notifier la direction et les autorités"
          ],
          reponse: 1,
          explication:
            "La priorité absolue du BCP et du DRP est toujours la vie humaine : on met les personnes hors de danger avant toute considération technique ou financière. Le basculement, la restauration et les notifications sont importants, mais viennent après la mise en sécurité du personnel. À l'examen, quand la sécurité des personnes figure parmi les choix, c'est presque toujours la bonne réponse."
        },
        {
          type: "resume",
          titre: "Ce qu'il faut retenir",
          points: [
            "BCP en 4 étapes : cadrage, BIA, continuity planning, approbation par la direction",
            "BIA → RTO, RPO, MTD ; RTO ≤ MTD ; RPO dicté par les sauvegardes",
            "Les personnes d'abord, toujours",
            "Awareness, training, education ; phishing simulé, champions, gamification, contenu à jour"
          ],
          narration:
            "Résumons cette dernière leçon. Le BCP se construit en quatre étapes, du cadrage à l'approbation par le plus haut niveau de la direction, avec la BIA en pivot central. La BIA produit les métriques clés : RTO pour le délai de restauration, RPO pour la perte de données acceptable, MTD pour la limite de survie de l'organisation. La priorité absolue reste la sécurité des personnes. Et le facteur humain se travaille dans la durée : sensibilisation pour tous, formation annuelle obligatoire, campagnes de phishing simulé, security champions et gamification, avec un contenu régulièrement mis à jour et des résultats mesurés. Bravo, vous avez terminé le tour du Domaine 1 : place aux quiz et aux flashcards pour ancrer tout cela."
        }
      ]
    },

    // ------------------------------------------------------------------
    // Leçon 8 — Acteurs de la menace et ingénierie sociale
    // ------------------------------------------------------------------
    {
      id: "d1-l8",
      titre: "Acteurs de la menace et ingénierie sociale",
      duree: 13,
      slides: [
        {
          type: "intro",
          titre: "Connaître son adversaire",
          points: [
            "Identifier QUI attaque : motivations, ressources, niveau de sophistication",
            "Catalogue complet des attaques d'ingénierie sociale, très testé à l'examen",
            "Bonus : entrapment vs enticement et trois lois américaines clés"
          ],
          narration:
            "Dans cette leçon, nous changeons de perspective : nous passons du côté de l'adversaire. L'examen adore les questions du type : quel acteur de la menace est le plus probable dans ce scénario ? Pour y répondre, il faut connaître la taxonomie des threat actors, leurs motivations et leur niveau de sophistication. Nous passerons ensuite en revue le catalogue complet des attaques d'ingénierie sociale, du simple phishing aux deepfakes, avant de terminer sur la distinction juridique entre entrapment et enticement, et sur trois lois américaines incontournables."
        },
        {
          type: "standard",
          titre: "Taxonomie des threat actors, première partie",
          points: [
            "Script kiddies : outils tout faits, faible compétence, cibles opportunistes",
            "Hacktivistes : motivation idéologique ou politique (défacement, DDoS, fuites)",
            "Crime organisé : motivation financière avant tout (ransomware, fraude, vol de données)",
            "État-nation / APT : ressources quasi illimitées, furtivité, persistance sur le long terme"
          ],
          narration:
            "Commençons par les profils classiques. Les script kiddies sont des attaquants peu qualifiés qui utilisent des outils développés par d'autres ; ils sont opportunistes et bruyants, mais restent dangereux pour les systèmes mal protégés. Les hacktivistes agissent par conviction idéologique ou politique : leurs armes favorites sont le défacement de sites, le déni de service et la divulgation de documents. Le crime organisé, lui, est motivé par l'argent : ransomware, fraude, vol et revente de données. Enfin, les acteurs étatiques, souvent qualifiés d'APT, Advanced Persistent Threat, disposent de ressources quasi illimitées, visent des objectifs d'espionnage ou de sabotage, et privilégient la furtivité et la persistance dans la durée.",
          astuce: "💡 Conseil examen : « furtif, patient, ciblé, très financé » = état-nation/APT. « Motivé par l'argent » = crime organisé. « Message politique » = hacktiviste."
        },
        {
          type: "standard",
          titre: "Taxonomie, deuxième partie : insiders et concurrents",
          points: [
            "Insider threat malveillant : employé qui abuse volontairement de son accès légitime (vengeance, argent)",
            "Insider négligent : sans intention de nuire, il cause l'incident par erreur ou contournement des règles",
            "Concurrents : espionnage industriel, vol de trade secrets, débauchage d'employés clés",
            "L'insider est souvent le PLUS dangereux : il a déjà l'accès et la connaissance interne"
          ],
          narration:
            "Deux profils méritent une attention particulière. L'insider threat, la menace interne, se décline en deux variantes : l'insider malveillant abuse délibérément de son accès légitime, par vengeance après un licenciement, par appât du gain ou par idéologie ; l'insider négligent, lui, n'a aucune intention de nuire, mais provoque l'incident par erreur, par méconnaissance ou en contournant les règles pour aller plus vite. Retenez que la menace interne est souvent considérée comme la plus dangereuse, car l'insider possède déjà un accès autorisé et connaît l'organisation de l'intérieur. Enfin, les concurrents pratiquent l'espionnage industriel pour voler des trade secrets, un domaine couvert par l'Economic Espionage Act que nous avons vu dans la leçon sur les lois."
        },
        {
          type: "schema",
          titre: "Motivations et sophistication : la grille de lecture",
          points: [
            "À l'examen, on identifie l'acteur par sa motivation et ses moyens",
            "Croisez toujours : qui, pourquoi, avec quelles ressources"
          ],
          schema: {
            type: "grid",
            items: [
              "Script kiddie : reconnaissance/amusement — sophistication faible",
              "Hacktiviste : idéologie, message — sophistication variable",
              "Crime organisé : argent — sophistication élevée",
              "État-nation / APT : espionnage, sabotage — sophistication maximale",
              "Insider : vengeance, argent, ou simple négligence — accès déjà acquis",
              "Concurrent : avantage commercial, trade secrets — moyens ciblés"
            ]
          },
          narration:
            "Voici la grille de lecture à mémoriser. Face à un scénario d'examen, posez-vous trois questions : qui attaque, pourquoi, et avec quelles ressources. Un défacement revendiquant une cause : hacktiviste. Une demande de rançon : crime organisé. Une intrusion discrète qui dure des mois dans un ministère ou un industriel de la défense : état-nation. Un scan maladroit avec des outils publics : script kiddie. Une fuite de données commise par quelqu'un qui avait déjà les accès : insider. Et le vol ciblé d'une formule ou d'un procédé de fabrication : un concurrent. C'est ce raisonnement, motivation plus sophistication, qui donne la réponse la plus probable."
        },
        {
          type: "standard",
          titre: "La famille du phishing",
          points: [
            "Phishing : hameçonnage de masse, non ciblé, par e-mail",
            "Spear phishing : ciblé sur une personne ou un groupe précis, message personnalisé",
            "Whaling : spear phishing visant les dirigeants (CEO, CFO) — les « gros poissons »",
            "Vishing : par téléphone ou VoIP ; Smishing : par SMS"
          ],
          narration:
            "Entrons dans le catalogue de l'ingénierie sociale, en commençant par la famille du phishing. Le phishing classique est un hameçonnage de masse : le même e-mail frauduleux envoyé à des milliers de destinataires, en espérant que quelques-uns mordent. Le spear phishing est ciblé : l'attaquant personnalise son message pour une personne ou un groupe précis, après s'être renseigné sur sa victime. Le whaling est un spear phishing qui vise spécifiquement les gros poissons, c'est-à-dire les dirigeants, le CEO ou le CFO, souvent pour déclencher des virements frauduleux. Le vishing utilise le téléphone ou la voix sur IP, et le smishing passe par SMS.",
          astuce: "💡 Distinction classique : spear phishing = ciblé sur quelqu'un ; whaling = ciblé sur un DIRIGEANT. Si la victime est un cadre exécutif, la réponse est whaling, pas spear phishing."
        },
        {
          type: "standard",
          titre: "Manipulations et attaques de proximité",
          points: [
            "Pretexting : inventer un scénario crédible (faux technicien, faux auditeur) pour obtenir info ou accès",
            "Baiting : appâter avec un objet (clé USB piégée) ; Quid pro quo : échange d'un « service » contre des infos",
            "Tailgating : suivre quelqu'un SANS son accord ; Piggybacking : AVEC son consentement",
            "Shoulder surfing : observer par-dessus l'épaule ; Dumpster diving : fouiller les poubelles"
          ],
          narration:
            "Poursuivons avec les manipulations et les attaques de proximité. Le pretexting consiste à inventer un scénario crédible, un prétexte : l'attaquant se fait passer pour un technicien du support, un auditeur ou un livreur afin d'obtenir des informations ou un accès. La nuance avec le phishing : le pretexting repose sur un scénario et un dialogue construits, pas seulement sur un message frauduleux. Le baiting appâte la victime avec un objet, typiquement une clé USB piégée abandonnée sur un parking. Le quid pro quo propose un échange : un faux service informatique contre vos identifiants. Le tailgating consiste à franchir une porte sécurisée en suivant un employé sans qu'il le sache, tandis que le piggybacking se fait avec son consentement, souvent par politesse. Ajoutez le shoulder surfing, l'observation par-dessus l'épaule, et le dumpster diving, la fouille des poubelles à la recherche de documents sensibles."
        },
        {
          type: "standard",
          titre: "Attaques indirectes et menaces émergentes",
          points: [
            "Watering hole : compromettre un site web que la cible visite habituellement",
            "Typosquatting / URL hijacking : enregistrer des domaines proches (goggle.com) pour piéger les fautes de frappe",
            "Deepfakes : audio ou vidéo synthétiques imitant une personne réelle",
            "Vishing assisté par IA : clonage de voix d'un dirigeant pour ordonner un virement"
          ],
          narration:
            "Terminons le catalogue avec les attaques indirectes et les menaces émergentes. Dans une attaque de type watering hole, le point d'eau, l'attaquant ne cible pas directement sa victime : il compromet un site web que la victime ou sa communauté visite régulièrement, comme un site professionnel de sa filière, et y dépose un code malveillant. Le typosquatting, ou URL hijacking, consiste à enregistrer des noms de domaine très proches du domaine légitime pour capter les fautes de frappe des utilisateurs et leur servir une fausse page. Enfin, les deepfakes utilisent l'intelligence artificielle pour générer des audios ou des vidéos imitant une personne réelle : combinés au vishing, ils permettent de cloner la voix d'un dirigeant et d'ordonner un virement urgent. La parade reste la même : des procédures de vérification par un canal indépendant, et une sensibilisation régulière."
        },
        {
          type: "question",
          titre: "Contrôle de connaissance",
          points: ["Whaling ou spear phishing ?"],
          narration:
            "Vérifions la distinction la plus testée du catalogue.",
          q: "Le directeur financier reçoit un e-mail personnalisé, prétendument envoyé par le CEO, lui demandant de valider en urgence un virement confidentiel. De quelle attaque s'agit-il ?",
          choix: ["Phishing", "Whaling", "Vishing", "Pretexting"],
          reponse: 1,
          explication:
            "Un message frauduleux ciblé et personnalisé visant un dirigeant, ici le CFO, est du whaling : la variante du spear phishing réservée aux « gros poissons ». Le phishing est massif et non ciblé, le vishing passe par le téléphone, et le pretexting repose sur un scénario interactif plutôt qu'un simple e-mail. Notez que ce schéma correspond aussi à la fraude dite BEC, Business Email Compromise."
        },
        {
          type: "standard",
          titre: "Entrapment vs Enticement : la frontière légale des honeypots",
          points: [
            "Enticement : l'attaquant a DÉJÀ l'intention de commettre le délit ; on lui offre une opportunité — LÉGAL",
            "Entrapment : on INCITE une personne qui n'en avait pas l'intention à commettre le délit — ILLÉGAL",
            "Un honeypot bien conçu pratique l'enticement, jamais l'entrapment",
            "Enjeu : la recevabilité des preuves et la validité des poursuites"
          ],
          narration:
            "Parlons maintenant d'une distinction juridique liée aux honeypots, ces systèmes pièges déployés pour attirer les attaquants. L'enticement, l'attrait, est légal : l'attaquant avait déjà l'intention de s'introduire, et le honeypot ne fait que lui offrir une cible tentante ; les preuves collectées restent recevables. L'entrapment, le piège incitatif, est illégal : il consiste à pousser une personne qui n'avait pas d'intention délictueuse à commettre le délit, par exemple en l'invitant activement à pénétrer un système ; c'est une défense recevable en justice qui peut faire échouer les poursuites. Retenez la formule : l'enticement exploite une intention préexistante, l'entrapment la crée. Un honeypot bien conçu attire sans jamais inciter.",
          astuce: "💡 Mémo : ENTicement = TENtation légale d'un attaquant déjà décidé. ENTRAPment = TRAP illégal qui fabrique l'intention."
        },
        {
          type: "standard",
          titre: "Trois lois américaines complémentaires",
          points: [
            "CFAA (Computer Fraud and Abuse Act, 1986) : criminalise l'accès non autorisé aux ordinateurs, notamment fédéraux et financiers",
            "ECPA (Electronic Communications Privacy Act, 1986) : protège les communications électroniques contre l'interception et la surveillance illégales",
            "PATRIOT Act (2001) : élargit les pouvoirs de surveillance et d'enquête des autorités après le 11 septembre, et alourdit les peines du CFAA"
          ],
          narration:
            "Complétons notre panorama légal avec trois lois américaines qui tombent régulièrement à l'examen. Le Computer Fraud and Abuse Act, le CFAA, de mille neuf cent quatre-vingt-six, est la grande loi pénale contre l'accès non autorisé aux systèmes informatiques, en particulier les ordinateurs du gouvernement fédéral et des institutions financières. L'Electronic Communications Privacy Act, l'ECPA, de la même année, protège les communications électroniques contre l'interception et la surveillance illégales, y compris par le gouvernement. Et le PATRIOT Act de deux mille un a considérablement élargi les pouvoirs de surveillance et d'enquête des autorités américaines après les attentats du onze septembre, tout en aggravant les sanctions prévues par le CFAA."
        },
        {
          type: "question",
          titre: "Contrôle de connaissance",
          points: ["Identifier l'acteur le plus probable"],
          narration:
            "Une dernière mise en situation avant le résumé.",
          q: "Un industriel de la défense découvre une intrusion discrète, active depuis 18 mois, utilisant des malwares sur mesure et exfiltrant des plans classifiés. Quel acteur de la menace est le PLUS probable ?",
          choix: ["Script kiddie", "Hacktiviste", "État-nation (APT)", "Insider négligent"],
          reponse: 2,
          explication:
            "Furtivité, persistance sur dix-huit mois, outils développés sur mesure et ciblage de secrets de défense : tous les marqueurs d'un acteur étatique de type APT sont réunis. Un script kiddie n'a ni la compétence ni la patience, un hacktiviste chercherait la visibilité et revendiquerait son action, et un insider négligent cause des incidents par erreur, pas une campagne d'exfiltration structurée."
        },
        {
          type: "resume",
          titre: "Ce qu'il faut retenir",
          points: [
            "Acteurs : script kiddie, hacktiviste, crime organisé (argent), état-nation/APT (furtif, persistant), insider (malveillant vs négligent), concurrent",
            "Phishing massif ; spear phishing ciblé ; whaling = dirigeants ; vishing = voix ; smishing = SMS",
            "Pretexting, baiting, quid pro quo, tailgating vs piggybacking, shoulder surfing, dumpster diving, watering hole, typosquatting, deepfakes",
            "Enticement légal (intention préexistante), entrapment illégal (intention fabriquée)",
            "CFAA : accès non autorisé ; ECPA : interception des communications ; PATRIOT Act : pouvoirs de surveillance élargis"
          ],
          narration:
            "Résumons. Vous savez maintenant profiler les acteurs de la menace : le script kiddie opportuniste, le hacktiviste idéologique, le crime organisé motivé par l'argent, l'état-nation furtif et persistant, l'insider malveillant ou simplement négligent, et le concurrent en quête de trade secrets. Vous maîtrisez le catalogue de l'ingénierie sociale, du phishing de masse au whaling des dirigeants, en passant par le pretexting, le baiting, le tailgating et les attaques modernes comme le watering hole, le typosquatting et les deepfakes. Vous distinguez l'enticement, légal, de l'entrapment, illégal. Et vous connaissez les trois lois américaines clés : CFAA, ECPA et PATRIOT Act. Le meilleur contrôle contre tout cela reste un personnel sensibilisé et des procédures de vérification solides."
        }
      ]
    }
  ],

  // --------------------------------------------------------------------
  // QUIZ — questions de style examen CISSP
  // --------------------------------------------------------------------
  quiz: [
    {
      q: "Lors d'une réunion de crise, la direction demande qui porte la responsabilité ULTIME de la sécurité de l'information dans l'organisation. Quelle est la MEILLEURE réponse ?",
      choix: ["Le RSSI (CISO)", "La direction générale (senior management)", "Le propriétaire des données", "L'équipe sécurité"],
      reponse: 1,
      explication:
        "La responsabilité ultime de la sécurité incombe toujours à la direction générale : c'est elle qui approuve les politiques, alloue les ressources et assume les conséquences. Le CISO a une responsabilité fonctionnelle, le data owner classifie ses données, et l'équipe sécurité exécute, mais aucun d'eux ne porte la responsabilité finale.",
      difficulte: 1
    },
    {
      q: "Un chiffrement de bout en bout protège des données médicales contre toute lecture non autorisée pendant leur transmission. Quel principe de la triade CIA est PRINCIPALEMENT assuré ?",
      choix: ["Integrity", "Availability", "Confidentiality", "Nonrepudiation"],
      reponse: 2,
      explication:
        "Le chiffrement empêche la divulgation du contenu aux personnes non autorisées : c'est la confidentialité. Il ne garantit pas à lui seul l'intégrité (il faudrait un hachage ou un MAC), ne contribue pas à la disponibilité, et la non-répudiation exige des signatures numériques associées à une identité.",
      difficulte: 1
    },
    {
      q: "Quelle formule permet de calculer la Single Loss Expectancy (SLE) ?",
      choix: ["SLE = ALE × ARO", "SLE = AV × EF", "SLE = AV × ARO", "SLE = EF × ARO"],
      reponse: 1,
      explication:
        "SLE = Asset Value × Exposure Factor : la valeur de l'actif multipliée par le pourcentage de perte en cas de réalisation de la menace. L'ALE se calcule ensuite en multipliant la SLE par l'ARO (fréquence annuelle). Les autres combinaisons n'ont pas de sens dans le modèle quantitatif.",
      difficulte: 1
    },
    {
      q: "Un serveur vaut 100 000 €. Un incident de type ransomware entraînerait la perte de 40 % de sa valeur et devrait se produire deux fois par an. Quel est l'ALE ?",
      choix: ["40 000 €", "80 000 €", "20 000 €", "100 000 €"],
      reponse: 1,
      explication:
        "SLE = 100 000 × 0,40 = 40 000 €. ARO = 2 (deux occurrences par an). ALE = SLE × ARO = 40 000 × 2 = 80 000 €. Le piège classique est de répondre 40 000 €, qui n'est que la SLE d'une seule occurrence.",
      difficulte: 2
    },
    {
      q: "Après un calcul, un safeguard à 30 000 € par an réduirait l'ALE d'un risque de 120 000 € à 50 000 €. Que devrait faire le management ?",
      choix: [
        "Rejeter le safeguard car son coût est trop élevé",
        "Implémenter le safeguard car sa valeur annuelle nette est de 40 000 €",
        "Accepter le risque sans contrôle",
        "Transférer le risque à un assureur avant toute décision"
      ],
      reponse: 1,
      explication:
        "Valeur du safeguard = (ALE avant − ALE après) − coût annuel = (120 000 − 50 000) − 30 000 = 40 000 €. La valeur nette étant positive, l'investissement est financièrement justifié. Rejeter le safeguard ou accepter le risque ignorerait cette analyse coût/bénéfice favorable, et rien n'indique qu'un transfert serait plus avantageux.",
      difficulte: 3
    },
    {
      q: "Votre organisation décide de souscrire une cyber-assurance pour couvrir l'impact financier d'une violation de données. De quelle réponse au risque s'agit-il ?",
      choix: ["Risk Mitigation", "Risk Avoidance", "Risk Transference", "Risk Acceptance"],
      reponse: 2,
      explication:
        "Payer un tiers, ici un assureur, pour assumer l'impact financier d'un risque est un transfert de risque (Risk Transference ou Assignment). La mitigation réduirait le risque par des contrôles, l'évitement renoncerait à l'activité, et l'acceptation assumerait la perte sans transfert. Notez que la responsabilité légale, elle, ne se transfère jamais totalement.",
      difficulte: 1
    },
    {
      q: "Après l'implémentation de tous les contrôles approuvés, un niveau de risque subsiste. Comment appelle-t-on ce risque que la direction choisit d'assumer ?",
      choix: ["Inherent risk", "Total risk", "Residual risk", "Controls gap"],
      reponse: 2,
      explication:
        "Le risque résiduel est celui qui demeure après la mise en place des contrôles ; c'est lui que le management accepte formellement. Le risque inhérent existe avant tout traitement, le risque total est celui qu'on subirait sans aucun safeguard, et le controls gap est la part de risque éliminée par les contrôles (total moins résiduel).",
      difficulte: 1
    },
    {
      q: "Un analyste propose d'« ignorer » un risque jugé peu probable, sans analyse ni documentation. En tant que manager, pourquoi devez-vous refuser ?",
      choix: [
        "Parce que l'acceptation du risque nécessite l'accord de l'assureur",
        "Parce que le rejet du risque n'est pas une réponse prudente et viole la Due Care",
        "Parce que seul l'auditeur peut accepter un risque",
        "Parce qu'un risque peu probable doit toujours être atténué"
      ],
      reponse: 1,
      explication:
        "Rejeter ou ignorer un risque en espérant qu'il ne se réalise pas n'est jamais une réponse valable : c'est un manquement à la Due Care et à la Due Diligence. L'acceptation d'un risque est légitime, mais elle doit résulter d'une analyse coût/bénéfice documentée et d'une décision formelle du management, pas d'un simple oubli.",
      difficulte: 2
    },
    {
      q: "Quelle est la différence ESSENTIELLE entre l'analyse quantitative et l'analyse qualitative des risques ?",
      choix: [
        "La quantitative repose sur des scénarios, la qualitative sur des calculs",
        "La quantitative attribue des valeurs monétaires, la qualitative des valeurs subjectives basées sur des scénarios",
        "La qualitative est réservée aux grandes organisations",
        "La quantitative ne s'applique qu'aux risques physiques"
      ],
      reponse: 1,
      explication:
        "L'analyse quantitative assigne des valeurs monétaires réelles (AV, SLE, ALE) à partir de calculs, tandis que l'analyse qualitative s'appuie sur des jugements subjectifs, des scénarios et des classements (élevé/moyen/faible). La première proposition inverse les définitions, et les deux méthodes s'appliquent à toutes les organisations et tous types de risques ; la plupart des organisations combinent les deux.",
      difficulte: 1
    },
    {
      q: "Lors d'un atelier d'analyse de risques, vous voulez obtenir un consensus d'experts sans que la hiérarchie n'influence les réponses. Quelle technique est la PLUS adaptée ?",
      choix: ["Un brainstorming ouvert", "La technique Delphi", "Une analyse quantitative SLE/ALE", "Un audit externe"],
      reponse: 1,
      explication:
        "La technique Delphi recueille les avis de façon anonyme et itérative jusqu'à converger vers un consensus, ce qui neutralise les effets de hiérarchie et de personnalité. Le brainstorming ouvert expose justement aux biais d'influence, l'analyse quantitative ne cherche pas de consensus d'opinion, et l'audit externe évalue la conformité, pas les opinions d'experts internes.",
      difficulte: 2
    },
    {
      q: "Un panneau « site sous vidéosurveillance » à l'entrée d'un parking d'entreprise est un exemple de quel type de contrôle ?",
      choix: ["Preventive", "Detective", "Deterrent", "Corrective"],
      reponse: 2,
      explication:
        "Le panneau vise à décourager un attaquant potentiel de passer à l'acte : c'est un contrôle dissuasif (deterrent), qui repose sur la décision de l'individu de renoncer. Il n'empêche physiquement rien (préventif), ne détecte rien par lui-même (détectif) et ne corrige rien après incident (correctif).",
      difficulte: 1
    },
    {
      q: "Le contrôle d'accès par badge du data center est en panne. En attendant sa réparation, un gardien vérifie manuellement les identités à l'entrée. Comment qualifier ce contrôle ?",
      choix: ["Contrôle compensatoire", "Contrôle correctif", "Contrôle directif", "Contrôle de récupération"],
      reponse: 0,
      explication:
        "Un contrôle compensatoire est déployé en complément ou en remplacement d'un contrôle principal, notamment en cas de défaillance de celui-ci : le gardien compense la panne du système de badges. Un contrôle correctif ramènerait le système à la normale, un contrôle directif oriente les comportements, et un contrôle de récupération restaure après un dommage important.",
      difficulte: 2
    },
    {
      q: "Quelle réglementation impose la notification d'une violation de données personnelles à l'autorité de contrôle dans les 72 heures suivant sa découverte ?",
      choix: ["HIPAA", "GDPR", "SOX", "PCI DSS"],
      reponse: 1,
      explication:
        "Le GDPR impose la notification à l'autorité de contrôle compétente sous 72 heures. HIPAA (via HITECH) prévoit un délai de 60 jours pour notifier les individus affectés, SOX concerne l'exactitude des informations financières des sociétés cotées, et PCI DSS est un standard contractuel de protection des données de cartes sans délai légal de notification.",
      difficulte: 1
    },
    {
      q: "Une entreprise américaine sans aucune présence physique en Europe vend en ligne à des clients résidant en France. Est-elle soumise au GDPR ?",
      choix: [
        "Non, car elle n'a pas d'établissement dans l'UE",
        "Oui, car elle traite les données personnelles de résidents de l'UE",
        "Non, si elle a moins de 250 salariés",
        "Oui, mais uniquement si elle stocke les données en Europe"
      ],
      reponse: 1,
      explication:
        "Le GDPR a une portée extraterritoriale : il s'applique à toute organisation, où qu'elle soit, qui traite les données personnelles de résidents de l'Union européenne. Ni l'absence d'établissement dans l'UE, ni la taille de l'entreprise, ni la localisation du stockage n'exemptent l'organisation de ses obligations.",
      difficulte: 2
    },
    {
      q: "Un hôpital subit une violation touchant les données de santé (PHI) de 800 patients. Selon la règle de notification HIPAA/HITECH, que doit-il faire ?",
      choix: [
        "Notifier uniquement les patients affectés, sans délai imposé",
        "Notifier les patients, le HHS et les médias dans les 60 jours",
        "Notifier l'autorité européenne dans les 72 heures",
        "Aucune notification n'est requise en dessous de 1 000 patients"
      ],
      reponse: 1,
      explication:
        "HITECH impose la notification des individus affectés, du Department of Health and Human Services et, lorsque plus de 500 personnes sont touchées, des médias, le tout dans les 60 jours suivant la découverte. Le délai de 72 heures relève du GDPR, et il n'existe pas de seuil de 1 000 patients exemptant de notification.",
      difficulte: 2
    },
    {
      q: "Qu'est-ce qui oblige un commerçant à respecter PCI DSS ?",
      choix: [
        "Une loi fédérale sur les paiements électroniques",
        "Un règlement de la banque centrale",
        "Le contrat commercial conclu avec sa banque acquéreuse",
        "Une directive de l'organisme de certification ISO"
      ],
      reponse: 2,
      explication:
        "PCI DSS est un standard industriel dont le respect est imposé par les termes du contrat entre le commerçant qui accepte les cartes et la banque qui traite ses transactions. Ce n'est ni une loi ni un règlement gouvernemental : sa force vient de l'obligation contractuelle et du risque de perdre la capacité d'accepter les paiements par carte.",
      difficulte: 1
    },
    {
      q: "Quelle loi américaine exige que les dirigeants de sociétés cotées certifient PERSONNELLEMENT l'exactitude des informations financières, sous peine de sanctions pénales ?",
      choix: ["GLBA", "FISMA", "SOX", "COPPA"],
      reponse: 2,
      explication:
        "Sarbanes-Oxley (SOX) gouverne les sociétés cotées en bourse et impose à la direction de certifier individuellement l'exactitude des états financiers, avec des sanctions pénales en cas de violation. GLBA vise les institutions financières, FISMA les agences fédérales, et COPPA la protection des données des enfants de moins de 13 ans en ligne.",
      difficulte: 2
    },
    {
      q: "Le code source d'un algorithme propriétaire constitue l'avantage concurrentiel majeur d'une entreprise, qui souhaite le protéger sans jamais le divulguer publiquement. Quel mécanisme de propriété intellectuelle est le PLUS approprié ?",
      choix: ["Patent", "Copyright", "Trademark", "Trade secret"],
      reponse: 3,
      explication:
        "Le trade secret protège les secrets d'affaires critiques tant qu'ils restent confidentiels, sans limite de durée ni divulgation publique. Un brevet obligerait à publier l'invention et expire, le copyright protège l'expression de l'œuvre mais pas l'idée et n'empêche pas l'ingénierie inverse indépendante, et la marque protège des signes distinctifs, pas des procédés.",
      difficulte: 2
    },
    {
      q: "Une enquête interne des ressources humaines vise à déterminer si un employé a violé la politique d'usage acceptable. Quel type d'enquête est-ce, et quel est son niveau de formalisme ?",
      choix: [
        "Criminelle — le formalisme le plus élevé",
        "Administrative — le formalisme le plus faible",
        "Réglementaire — formalisme imposé par le régulateur",
        "Civile — prépondérance de la preuve"
      ],
      reponse: 1,
      explication:
        "Une enquête interne portant sur une violation de politique d'organisation est une enquête administrative : menée à des fins internes, elle a les standards de documentation et de procédure les moins stricts. Les enquêtes criminelles exigent le formalisme maximal (preuve au-delà du doute raisonnable), les réglementaires sont conduites par un régulateur, et les civiles opposent deux parties devant un tribunal.",
      difficulte: 1
    },
    {
      q: "Dans le cadre d'une enquête menée par la SEC contre votre entreprise, un cadre propose de « faire le ménage » dans certains e-mails. Quelle est la MEILLEURE réponse du RSSI ?",
      choix: [
        "Accepter, car les e-mails internes appartiennent à l'entreprise",
        "Refuser : dans une enquête réglementaire, l'organisation doit coopérer et ne détruire aucune preuve",
        "Accepter si le service juridique donne un accord verbal",
        "Reporter la décision à la fin de l'enquête"
      ],
      reponse: 1,
      explication:
        "Dans une enquête réglementaire, l'organisation a l'obligation légale de coopérer, ce qui interdit de dissimuler ou de détruire des preuves : la destruction d'e-mails constituerait une obstruction passible de sanctions graves. Aucun accord interne, verbal ou différé, ne peut légitimer la destruction de preuves.",
      difficulte: 2
    },
    {
      q: "Quel canon du Code of Ethics ISC² doit primer lorsqu'il entre en conflit avec les intérêts de votre employeur ?",
      choix: [
        "Advance and protect the profession",
        "Provide diligent and competent service to principals",
        "Protect society, the common good, necessary public trust and confidence, and the infrastructure",
        "Act honorably, honestly, justly, responsibly, and legally"
      ],
      reponse: 2,
      explication:
        "Les canons du code ISC² sont ordonnés par priorité : le premier, protéger la société et le bien commun, prime sur tous les autres, y compris le service aux mandants (canon III, qui couvre les employeurs). En cas de conflit, l'intérêt de la société l'emporte donc sur celui de l'employeur.",
      difficulte: 2
    },
    {
      q: "Qui peut déposer une plainte pour violation du canon III (« Provide diligent and competent service to principals ») du code d'éthique ISC² ?",
      choix: [
        "Tout membre du public",
        "Uniquement un employeur ou une personne liée par une relation contractuelle",
        "Uniquement un autre titulaire du CISSP",
        "Uniquement le comité d'éthique d'ISC²"
      ],
      reponse: 1,
      explication:
        "Pour le canon III, seuls un employeur ou une personne ayant une relation contractuelle avec le professionnel peuvent porter plainte, car ce canon protège les mandants. Tout membre du public peut porter plainte au titre des canons I et II, et toute personne soumise à un code d'éthique professionnel peut le faire pour le canon IV.",
      difficulte: 3
    },
    {
      q: "Votre organisation exige que tous les postes de travail Windows soient configurés selon un modèle de durcissement minimal appliqué via GPO. Ce document de référence est :",
      choix: ["Une policy", "Une guideline", "Une baseline", "Une procedure"],
      reponse: 2,
      explication:
        "Une baseline définit le niveau minimal de sécurité que chaque système d'un type donné doit atteindre, souvent déclinée en configurations appliquées par GPO ou par des outils de gestion de configuration. La policy est stratégique, la guideline est une recommandation facultative, et la procedure décrit des étapes d'exécution pas à pas.",
      difficulte: 1
    },
    {
      q: "Quelle affirmation distingue le MIEUX un standard d'une guideline ?",
      choix: [
        "Le standard est facultatif, la guideline est obligatoire",
        "Le standard est obligatoire et uniforme, la guideline est une recommandation flexible",
        "Le standard est rédigé par les utilisateurs, la guideline par la direction",
        "Le standard décrit des étapes détaillées, la guideline des objectifs stratégiques"
      ],
      reponse: 1,
      explication:
        "Les standards sont des exigences obligatoires qui imposent un usage homogène des technologies et contrôles dans toute l'organisation, tandis que les guidelines sont des recommandations flexibles et non contraignantes. Les étapes détaillées relèvent des procédures, et les objectifs stratégiques des policies rédigées par la direction.",
      difficulte: 1
    },
    {
      q: "Avant de finaliser l'acquisition d'une autre société, quelle démarche le RSSI devrait-il recommander EN PREMIER ?",
      choix: [
        "Fusionner immédiatement les annuaires d'identités",
        "Mener une Due Diligence de sécurité sur l'environnement IT de la cible",
        "Déployer l'EDR de l'acquéreur sur tous les postes de la cible",
        "Résilier les contrats fournisseurs de la cible"
      ],
      reponse: 1,
      explication:
        "L'état de l'environnement IT à intégrer étant inconnu, la première étape est la Due Diligence : évaluer les risques, la posture de sécurité, les éventuelles compromissions et les obligations de conformité de la cible. Fusionner les identités ou déployer des outils avant cette évaluation exposerait l'acquéreur à des risques non mesurés.",
      difficulte: 2
    },
    {
      q: "Dans le modèle STRIDE, une attaque par SYN flood qui rend un service web inaccessible relève de quelle catégorie ?",
      choix: ["Spoofing", "Tampering", "Denial of Service", "Information Disclosure"],
      reponse: 2,
      explication:
        "Le SYN flood perturbe le three-way handshake TCP pour empêcher l'usage légitime d'une ressource : c'est un déni de service, la catégorie D de STRIDE, qui attaque la disponibilité. Le spoofing usurpe une identité, le tampering altère des données et l'information disclosure divulgue des informations confidentielles.",
      difficulte: 1
    },
    {
      q: "Votre équipe a identifié une longue liste de menaces avec STRIDE et doit maintenant décider lesquelles traiter en priorité. Quelle approche est la PLUS appropriée ?",
      choix: [
        "Recommencer l'identification avec PASTA",
        "Noter chaque menace avec les critères DREAD",
        "Décomposer l'application avec la reduction analysis",
        "Consulter les flux STIX/TAXII"
      ],
      reponse: 1,
      explication:
        "DREAD (Damage, Reproducibility, Exploitability, Affected users, Discoverability) sert précisément à noter et prioriser des menaces déjà identifiées : STRIDE catégorise, DREAD priorise. PASTA est une méthodologie complète qui referait le travail, la reduction analysis sert à décomposer le système en amont, et STIX/TAXII concernent le partage de renseignement sur les menaces.",
      difficulte: 2
    },
    {
      q: "Quelle méthodologie de threat modeling se déroule en sept étapes, de la définition des objectifs jusqu'à l'analyse et la gestion du risque, en passant par la simulation d'attaques ?",
      choix: ["STRIDE", "DREAD", "PASTA", "VAST"],
      reponse: 2,
      explication:
        "PASTA (Process for Attack Simulation and Threat Analysis) est la méthodologie en sept étapes centrée sur le risque, qui va des objectifs métier à la gestion du risque en passant par la décomposition de l'application et la simulation d'attaques. STRIDE catégorise les menaces, DREAD les priorise, et VAST intègre le threat modeling dans les environnements agiles à grande échelle.",
      difficulte: 2
    },
    {
      q: "Un fabricant découvre que des composants contrefaits ont été introduits par un sous-traitant de rang 2 dans ses serveurs. Quelle discipline vise à prévenir ce type de risque ?",
      choix: [
        "Business Continuity Planning",
        "Supply Chain Risk Management",
        "Security Control Assessment",
        "Data Loss Prevention"
      ],
      reponse: 1,
      explication:
        "Le Supply Chain Risk Management (SCRM) vise à garantir que chaque maillon de la chaîne d'approvisionnement est fiable, auditable et responsable devant le suivant, précisément pour prévenir contrefaçons, sabotages et implants. Le BCP traite la continuité d'activité, le SCA évalue les contrôles internes, et le DLP prévient les fuites de données.",
      difficulte: 1
    },
    {
      q: "Quel est l'objectif PRINCIPAL d'une Business Impact Analysis (BIA) ?",
      choix: [
        "Tester le plan de reprise après sinistre",
        "Identifier les processus critiques et évaluer l'impact de leur interruption",
        "Attribuer les rôles de l'équipe de gestion de crise",
        "Chiffrer le budget annuel de la sécurité"
      ],
      reponse: 1,
      explication:
        "La BIA identifie les systèmes et processus dont l'entreprise dépend, évalue l'impact d'une interruption et établit les priorités de récupération ainsi que les métriques RTO, RPO et MTD. Les tests du DRP et l'organisation de crise interviennent dans d'autres phases, et le budget sécurité n'est pas l'objet de la BIA.",
      difficulte: 1
    },
    {
      q: "La direction déclare qu'une interruption du système de facturation au-delà de 48 heures menacerait la survie de l'entreprise. Quelle métrique cette valeur représente-t-elle ?",
      choix: ["RTO", "RPO", "MTD", "MTTR"],
      reponse: 2,
      explication:
        "Le Maximum Tolerable Downtime (MTD) est la durée maximale d'interruption d'une fonction critique au-delà de laquelle l'organisation cesse d'être viable : ici 48 heures. Le RTO est l'objectif de restauration, qui doit être fixé en dessous du MTD ; le RPO mesure la perte de données acceptable et le MTTR le temps moyen de réparation d'un équipement.",
      difficulte: 2
    },
    {
      q: "Lors de l'élaboration du BCP, quelle étape doit être réalisée EN PREMIER ?",
      choix: [
        "La Business Impact Analysis",
        "Le développement de la stratégie de continuité",
        "Le cadrage du projet et l'obtention du soutien de la direction",
        "La formation du personnel au plan"
      ],
      reponse: 2,
      explication:
        "Le processus BCP suit quatre étapes : d'abord le cadrage du projet (business case, soutien de la direction, constitution de l'équipe), puis la BIA, puis la planification de la continuité, et enfin l'approbation et la mise en œuvre incluant la formation. Sans le soutien de la direction obtenu au cadrage, rien d'autre n'aboutit.",
      difficulte: 2
    },
    {
      q: "Un nouveau commercial rejoint l'entreprise. Quel est le MEILLEUR moment pour lui faire suivre la formation de sensibilisation à la sécurité ?",
      choix: [
        "Lors de la campagne annuelle de formation",
        "Dès son arrivée, pendant l'onboarding",
        "Après sa période d'essai",
        "Uniquement s'il accède à des données sensibles"
      ],
      reponse: 1,
      explication:
        "Tous les nouveaux employés doivent recevoir la formation de sensibilisation dès l'onboarding, afin de connaître les standards, guidelines et procédures avant d'utiliser les systèmes, puis une remise à niveau au moins annuelle. Attendre la campagne annuelle ou la fin de la période d'essai laisserait une fenêtre d'exposition, et la sensibilisation concerne tout le personnel, pas seulement ceux qui traitent des données sensibles.",
      difficulte: 1
    },
    {
      q: "Quel indicateur reflète le MIEUX l'amélioration de l'efficacité d'un programme de sensibilisation au phishing ?",
      choix: [
        "Le nombre de campagnes de phishing simulé envoyées",
        "Le budget alloué au programme de formation",
        "L'évolution du taux de clic et du taux de signalement lors des campagnes simulées",
        "Le nombre d'employés ayant assisté à la formation annuelle"
      ],
      reponse: 2,
      explication:
        "L'efficacité se mesure par les résultats comportementaux : la baisse du taux de clic et la hausse du taux de signalement des e-mails de phishing simulés montrent un vrai changement. Le nombre de campagnes, le budget et la simple assiduité sont des indicateurs d'activité ou de moyens, pas des preuves d'efficacité.",
      difficulte: 2
    },
    {
      q: "Un attaquant appelle le standard en se faisant passer pour un collègue du service informatique et invoque une urgence pour obtenir un mot de passe. Quels principes de social engineering exploite-t-il PRINCIPALEMENT ?",
      choix: [
        "Rareté et consensus",
        "Familiarité et urgence",
        "Autorité et gamification",
        "Intimidation et rareté"
      ],
      reponse: 1,
      explication:
        "Se présenter comme un collègue exploite la familiarité, la confiance naturelle envers ce qui est connu, et l'invocation d'une urgence pousse la victime à agir sans réfléchir. La gamification est une technique de formation, pas d'attaque, et ni la rareté, ni le consensus, ni l'intimidation ne sont au premier plan dans ce scénario.",
      difficulte: 2
    },
    {
      q: "Quelle est la distinction correcte entre risk appetite et risk tolerance ?",
      choix: [
        "L'appetite est le maximum absorbable, la tolerance est le total accepté",
        "L'appetite est le risque total que l'organisation accepte de prendre, la tolerance est la variation acceptable autour d'un objectif donné",
        "Les deux termes sont strictement synonymes",
        "L'appetite s'applique aux projets, la tolerance à l'organisation entière"
      ],
      reponse: 1,
      explication:
        "Le risk appetite est la quantité totale de risque qu'une organisation est prête à accepter pour atteindre sa mission ; la risk tolerance est la variation acceptable des résultats par rapport à un objectif spécifique. Le maximum absorbable correspond à la risk capacity. Les deux notions ne sont donc ni synonymes ni inversées.",
      difficulte: 3
    },
    {
      q: "Dans le NIST Risk Management Framework (RMF), quelle étape suit immédiatement l'implémentation des contrôles ?",
      choix: ["Categorize", "Select", "Assess", "Authorize"],
      reponse: 2,
      explication:
        "Les sept étapes du RMF sont : Prepare, Categorize, Select, Implement, Assess, Authorize, Monitor. Après l'implémentation, on évalue (Assess) que les contrôles sont correctement mis en œuvre et produisent les résultats attendus, avant d'autoriser le système (Authorize) puis de le surveiller en continu (Monitor).",
      difficulte: 3
    },
    {
      q: "Dans un Risk Maturity Model, une organisation où chaque département évalue les risques à sa manière, sans cadre commun, se situe à quel niveau ?",
      choix: ["Ad hoc", "Preliminary", "Defined", "Integrated"],
      reponse: 1,
      explication:
        "Au niveau Preliminary, des tentatives de suivre des processus de gestion des risques existent, mais chaque département procède à sa façon, sans cadre standardisé. Ad hoc désigne le chaos initial sans aucune démarche, Defined marque l'adoption d'un cadre commun à toute l'organisation, et Integrated l'intégration du risque dans les processus métier avec des métriques.",
      difficulte: 3
    },
    {
      q: "Quel document permet de suivre dans la durée les risques identifiés, leur criticité, les réponses décidées et l'avancement de leur traitement ?",
      choix: ["La BIA", "Le risk register", "Le SBOM", "La security policy"],
      reponse: 1,
      explication:
        "Le risk register (ou risk log) inventorie tous les risques identifiés et sert à enregistrer et suivre les activités de gestion des risques : évaluation de la gravité, priorisation, réponses prescrites et avancement de la mitigation. La BIA évalue l'impact des interruptions, le SBOM inventorie les composants logiciels, et la policy fixe les objectifs stratégiques de sécurité.",
      difficulte: 1
    },
    {
      q: "Votre PDG demande pourquoi l'entreprise devrait viser la conformité PCI DSS alors qu'aucune loi ne l'y oblige. Quelle est la MEILLEURE réponse ?",
      choix: [
        "La conformité est facultative et peut être ignorée sans conséquence",
        "Le contrat avec la banque l'exige, et la non-conformité expose à des pénalités et à la perte du droit d'accepter les cartes",
        "PCI DSS deviendra une loi fédérale l'année prochaine",
        "Seules les grandes entreprises doivent s'y conformer"
      ],
      reponse: 1,
      explication:
        "Même sans force de loi, PCI DSS s'impose par le contrat avec la banque acquéreuse : la non-conformité entraîne des pénalités contractuelles, une responsabilité accrue en cas de violation, et potentiellement la perte de la capacité d'accepter les paiements par carte, ce qui menace directement le chiffre d'affaires. La conformité s'applique à tout commerçant acceptant les cartes, quelle que soit sa taille.",
      difficulte: 2
    },
    {
      q: "Quelle formulation résume le MIEUX la relation entre Due Care et Due Diligence ?",
      choix: [
        "La Due Care planifie, la Due Diligence exécute",
        "La Due Care est la protection responsable des actifs ; la Due Diligence est la capacité à prouver cette Due Care",
        "Les deux notions ne concernent que les fournisseurs",
        "La Due Diligence est facultative si la Due Care est exercée"
      ],
      reponse: 1,
      explication:
        "La Due Care est la pratique responsable : appliquer les contrôles, suivre les politiques, agir raisonnablement. La Due Diligence est le volet connaissance et planification : évaluer, documenter, structurer, ce qui permet aussi de prouver que la Due Care est exercée. La première proposition inverse les rôles, et les deux devoirs sont indissociables, pour l'organisation comme pour ses dirigeants.",
      difficulte: 2
    },
    {
      q: "Le site web d'une agence gouvernementale est défiguré : la page d'accueil est remplacée par un message dénonçant la politique environnementale du pays. Quel acteur de la menace est le PLUS probable ?",
      choix: ["Crime organisé", "Hacktiviste", "État-nation (APT)", "Script kiddie"],
      reponse: 1,
      explication:
        "Un défacement accompagné d'un message revendicatif à caractère politique ou idéologique est la signature typique de l'hacktiviste : son objectif est la visibilité de sa cause. Le crime organisé cherche un gain financier et éviterait de se faire remarquer sans profit, un état-nation privilégie la furtivité et l'espionnage plutôt que la publicité, et un script kiddie agit par défi ou amusement, généralement sans message politique construit.",
      difficulte: 1
    },
    {
      q: "Des employés d'un sous-traitant aéronautique sont compromis après avoir visité un forum professionnel spécialisé que l'attaquant avait préalablement infecté. Comment appelle-t-on cette attaque ?",
      choix: ["Spear phishing", "Typosquatting", "Watering hole", "Baiting"],
      reponse: 2,
      explication:
        "Compromettre un site tiers légitime que la population cible visite habituellement, puis attendre que les victimes s'y « abreuvent », est une attaque de type watering hole (point d'eau). Le spear phishing enverrait un message ciblé directement aux victimes, le typosquatting exploiterait un nom de domaine ressemblant au site légitime, et le baiting utiliserait un objet piégé comme une clé USB.",
      difficulte: 2
    },
    {
      q: "Un individu se présente à l'accueil en se faisant passer pour un auditeur mandaté par le siège, avec un faux ordre de mission, et obtient un accès à la salle serveur. Quelle technique d'ingénierie sociale décrit le MIEUX ce scénario ?",
      choix: ["Phishing", "Pretexting", "Quid pro quo", "Piggybacking"],
      reponse: 1,
      explication:
        "L'attaquant a construit un scénario crédible et une fausse identité (un prétexte) pour obtenir un accès : c'est du pretexting. Le phishing repose sur un message électronique frauduleux et non sur un scénario joué en personne ; le quid pro quo propose un échange de service contre des informations ; et le piggybacking consiste à franchir un accès contrôlé avec le consentement d'un employé, sans nécessairement d'identité inventée.",
      difficulte: 2
    },
    {
      q: "Votre organisation déploie un honeypot. Le conseil juridique vous met en garde : quelle pratique rendrait les poursuites contre un attaquant IRRECEVABLES ?",
      choix: [
        "Laisser le honeypot visible avec des vulnérabilités attrayantes (enticement)",
        "Journaliser toutes les actions de l'attaquant sur le honeypot",
        "Inviter activement des personnes sans intention malveillante à pénétrer le système (entrapment)",
        "Isoler le honeypot du réseau de production"
      ],
      reponse: 2,
      explication:
        "L'entrapment consiste à inciter une personne qui n'avait pas d'intention délictueuse à commettre l'infraction : c'est illégal et cela constitue une défense recevable qui fait échouer les poursuites. L'enticement, au contraire, se contente d'offrir une opportunité tentante à un attaquant déjà décidé : c'est légal. La journalisation et l'isolement du honeypot sont des bonnes pratiques qui renforcent, et non affaiblissent, le dossier.",
      difficulte: 2
    },
    {
      q: "Un employé du service comptabilité, sans aucune intention de nuire, envoie par erreur un fichier de paie complet à un destinataire externe. Comment qualifier cette menace ?",
      choix: [
        "Insider threat malveillant",
        "Insider threat négligent",
        "Espionnage par un concurrent",
        "Advanced Persistent Threat"
      ],
      reponse: 1,
      explication:
        "Un collaborateur qui cause une fuite de données par erreur, sans intention hostile, est un insider négligent : la variante la plus fréquente de la menace interne, que l'on traite par la sensibilisation, le DLP et des contrôles préventifs. L'insider malveillant agit délibérément (vengeance, argent), le concurrent est un acteur externe motivé par l'avantage commercial, et l'APT désigne une campagne externe sophistiquée et persistante.",
      difficulte: 1
    },
    {
      q: "Quelle loi américaine criminalise principalement l'accès non autorisé aux systèmes informatiques fédéraux et des institutions financières ?",
      choix: [
        "ECPA (Electronic Communications Privacy Act)",
        "CFAA (Computer Fraud and Abuse Act)",
        "PATRIOT Act",
        "GLBA (Gramm-Leach-Bliley Act)"
      ],
      reponse: 1,
      explication:
        "Le CFAA de 1986 est la grande loi pénale américaine contre l'accès non autorisé aux ordinateurs, en particulier ceux du gouvernement fédéral et des institutions financières. L'ECPA protège les communications électroniques contre l'interception illégale, le PATRIOT Act élargit les pouvoirs de surveillance des autorités (et aggrave les peines du CFAA) mais n'est pas la loi d'incrimination de base, et GLBA encadre la confidentialité des données dans le secteur financier.",
      difficulte: 2
    }
  ],

  // --------------------------------------------------------------------
  // FLASHCARDS
  // --------------------------------------------------------------------
  flashcards: [
    {
      recto: "Triade CIA",
      verso: "Confidentiality (pas de divulgation non autorisée), Integrity (pas de modification non autorisée), Availability (accès fiable et rapide pour les sujets autorisés). Son miroir négatif est la triade DAD : Disclosure, Alteration, Destruction."
    },
    {
      recto: "Nonrepudiation",
      verso: "Garantie que l'auteur d'une action ne peut pas nier l'avoir accomplie. Rendue possible par l'identification, l'authentification, l'autorisation, l'audit et l'accountability (ex. signature numérique)."
    },
    {
      recto: "Services AAA (5 éléments)",
      verso: "Identification (affirmer une identité) → Authentication (la prouver) → Authorization (définir les droits) → Auditing (journaliser) → Accountability (attribuer les actions et tenir responsable)."
    },
    {
      recto: "Due Care vs Due Diligence",
      verso: "Due Diligence : savoir ce qui doit être fait et le planifier (évaluer les risques, établir les politiques) — elle prouve la Due Care. Due Care : agir, appliquer les contrôles au quotidien, protéger les actifs de façon responsable."
    },
    {
      recto: "Les 4 canons du Code of Ethics ISC² (dans l'ordre)",
      verso: "1) Protect society, the common good, necessary public trust and confidence, and the infrastructure. 2) Act honorably, honestly, justly, responsibly, and legally. 3) Provide diligent and competent service to principals. 4) Advance and protect the profession."
    },
    {
      recto: "Plans stratégique / tactique / opérationnel",
      verso: "Stratégique : long terme (≈5 ans), définit la raison d'être de la sécurité, inclut une analyse de risque. Tactique : ≤1 an, détaille l'atteinte des buts. Opérationnel : court terme, très détaillé et concret."
    },
    {
      recto: "Policy / Standard / Baseline / Guideline / Procedure",
      verso: "Policy : stratégique, obligatoire, émane de la direction. Standard : exigence précise et uniforme, obligatoire. Baseline : niveau minimal de sécurité par système. Guideline : recommandation flexible, facultative. Procedure (SOP) : étapes détaillées pas à pas."
    },
    {
      recto: "SLE (Single Loss Expectancy)",
      verso: "Coût d'une seule réalisation d'un risque sur un actif. SLE = AV (Asset Value) × EF (Exposure Factor, % de perte). Ex. : actif de 100 000 € avec EF de 20 % → SLE = 20 000 €."
    },
    {
      recto: "ALE (Annualized Loss Expectancy)",
      verso: "Perte annuelle attendue pour un risque donné. ALE = SLE × ARO (Annualized Rate of Occurrence, fréquence annuelle attendue). Sert de base à l'analyse coût/bénéfice des safeguards."
    },
    {
      recto: "Valeur d'un safeguard",
      verso: "(ALE avant safeguard − ALE après safeguard) − coût annuel du safeguard (ACS). Si le résultat est positif, l'investissement est financièrement justifié."
    },
    {
      recto: "Réponses au risque",
      verso: "Mitigation (réduire par des contrôles), Transference (assurance, externalisation), Avoidance (renoncer à l'activité), Acceptance (décision documentée du management), Deterrence (dissuader). Rejection (ignorer) n'est jamais acceptable."
    },
    {
      recto: "Inherent / Residual / Total risk et Controls Gap",
      verso: "Inherent : risque avant tout traitement. Total : risque sans aucun safeguard (threats × vulnerabilities × asset value). Controls gap : part de risque éliminée par les contrôles. Residual = Total − Controls gap : c'est le risque que la direction accepte."
    },
    {
      recto: "Risk appetite / tolerance / capacity",
      verso: "Appetite : quantité totale de risque que l'organisation est prête à accepter. Tolerance : variation acceptable autour d'un objectif spécifique. Capacity : maximum de risque que l'organisation peut absorber sans péril."
    },
    {
      recto: "Catégories et types de contrôles",
      verso: "Catégories : Administrative, Technical/Logical, Physical. Types : Preventive, Deterrent, Detective, Corrective, Recovery, Directive, Compensating. Superposés en défense en profondeur, en commençant par les politiques."
    },
    {
      recto: "STRIDE",
      verso: "Modèle Microsoft de catégorisation des menaces : Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege. STRIDE identifie et catégorise ; DREAD priorise ensuite."
    },
    {
      recto: "DREAD",
      verso: "Méthode Microsoft de priorisation des menaces selon 5 critères : Damage potential, Reproducibility, Exploitability, Affected users, Discoverability."
    },
    {
      recto: "PASTA (7 étapes)",
      verso: "Process for Attack Simulation and Threat Analysis, méthodologie centrée risque : 1) Objectifs, 2) Périmètre technique, 3) Décomposition de l'application, 4) Analyse des menaces, 5) Analyse des vulnérabilités, 6) Modélisation/simulation d'attaques, 7) Analyse et gestion du risque."
    },
    {
      recto: "GDPR — points clés examen",
      verso: "Règlement européen à portée extraterritoriale : s'applique à toute organisation traitant les données de résidents de l'UE. Principes : licéité, limitation des finalités, minimisation, exactitude, limitation de conservation, sécurité, accountability. Notification de violation à l'autorité sous 72 heures."
    },
    {
      recto: "HIPAA / HITECH",
      verso: "Protection des données de santé (PHI) aux USA. HITECH impose la notification des individus, du HHS et des médias (si >500 personnes affectées) dans les 60 jours suivant la découverte d'une violation. Contrat écrit exigé avec les business associates."
    },
    {
      recto: "PCI DSS",
      verso: "Standard de protection des données de cartes de paiement. Ce n'est PAS une loi : il s'impose par le contrat entre le commerçant et sa banque. Exigences : sécurité réseau, chiffrement, contrôle d'accès strict, surveillance et tests, politiques de sécurité."
    },
    {
      recto: "Types d'enquêtes et standards de preuve",
      verso: "Administrative : interne, la moins formelle. Civile : prépondérance de la preuve. Criminelle : au-delà de tout doute raisonnable (formalisme maximal). Réglementaire : menée par un régulateur, coopération obligatoire. Standards industriels : conformité contractuelle (ex. PCI DSS)."
    },
    {
      recto: "BIA et ses 4 étapes",
      verso: "Business Impact Analysis : identifier les processus critiques et l'impact d'une interruption. Étapes : 1) Identification des priorités, 2) Identification des risques, 3) Évaluation de la probabilité, 4) Priorisation des ressources. Produit RTO, RPO et MTD."
    },
    {
      recto: "RTO / RPO / MTD",
      verso: "RTO : durée maximale pour restaurer le service (doit être ≤ MTD). RPO : perte de données maximale tolérable, en temps (dicte la fréquence des sauvegardes). MTD (ou MAD) : durée d'interruption au-delà de laquelle l'organisation n'est plus viable."
    },
    {
      recto: "Les 4 étapes du processus BCP",
      verso: "1) Project scope & planning (soutien de la direction, équipe, business case), 2) Business Impact Analysis, 3) Continuity planning (stratégie + provisions/processes → COOP), 4) Approval & implementation (endossement par le top management, formation). Priorité absolue : la sécurité des personnes."
    },
    {
      recto: "SCRM et ses mitigations",
      verso: "Supply Chain Risk Management : garantir que chaque maillon est fiable, auditable et responsable devant le suivant (menaces : tampering, contrefaçons, implants). Mitigations : évaluations de tiers, exigences contractuelles/SLA, silicon Root of Trust, PUF, SBOM."
    },
    {
      recto: "SBOM (Software Bill of Materials)",
      verso: "Inventaire détaillé de tous les composants, bibliothèques et dépendances (open source et propriétaires) d'une application. Apporte transparence et traçabilité pour identifier rapidement les logiciels affectés par une vulnérabilité."
    },
    {
      recto: "NIST RMF — 7 étapes",
      verso: "Prepare, Categorize, Select, Implement, Assess, Authorize, Monitor. Cadre de gestion du risque du NIST (SP 800-37), complété par SP 800-30 pour la conduite des évaluations de risque et SP 800-53 pour le catalogue de contrôles."
    },
    {
      recto: "Awareness / Training / Education",
      verso: "Awareness : capter l'attention et installer les réflexes de sécurité chez tous. Training : apprendre à faire son travail conformément à la politique (obligatoire à l'embauche puis au moins annuel). Education : connaissances au-delà du poste, souvent liée à une certification."
    },
    {
      recto: "Whaling",
      verso: "Variante du spear phishing ciblant spécifiquement les dirigeants (CEO, CFO…), les « gros poissons », souvent pour déclencher des virements frauduleux (proche du BEC, Business Email Compromise). Distinction examen : spear phishing = ciblé sur quelqu'un ; whaling = ciblé sur un DIRIGEANT."
    },
    {
      recto: "Pretexting",
      verso: "Ingénierie sociale fondée sur un scénario inventé mais crédible (faux technicien du support, faux auditeur, faux livreur) pour obtenir des informations ou un accès. Différence avec le phishing : le pretexting repose sur un prétexte et un dialogue construits, pas seulement sur un message frauduleux."
    },
    {
      recto: "Watering hole attack",
      verso: "Attaque indirecte : l'attaquant compromet un site web légitime que la cible ou sa communauté visite habituellement (le « point d'eau ») et y dépose un code malveillant, puis attend que les victimes s'y rendent d'elles-mêmes."
    },
    {
      recto: "Typosquatting / URL hijacking",
      verso: "Enregistrement de noms de domaine très proches d'un domaine légitime (ex. goggle.com) pour capter les fautes de frappe des utilisateurs et les diriger vers une fausse page (vol d'identifiants, malware, publicité). Contre-mesures : enregistrement défensif des variantes, surveillance des domaines."
    },
    {
      recto: "Entrapment vs Enticement",
      verso: "Enticement (LÉGAL) : offrir une opportunité tentante (ex. honeypot) à un attaquant qui avait DÉJÀ l'intention d'agir — preuves recevables. Entrapment (ILLÉGAL) : inciter une personne sans intention délictueuse à commettre l'infraction — défense recevable qui fait échouer les poursuites. Un honeypot bien conçu attire sans inciter."
    },
    {
      recto: "Insider threat (malveillant vs négligent)",
      verso: "Menace interne, souvent la plus dangereuse car l'insider a déjà un accès légitime et la connaissance de l'organisation. Malveillant : abuse volontairement de son accès (vengeance, argent, idéologie). Négligent : cause l'incident par erreur ou contournement des règles, sans intention de nuire. Parades : least privilege, DLP, sensibilisation, monitoring, offboarding rigoureux."
    }
  ]
};
