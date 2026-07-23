// Domaine 6 — Évaluation et tests de sécurité (Security Assessment and Testing)
window.CISSP_DATA = window.CISSP_DATA || { domains: {} };
window.CISSP_DATA.domains[6] = {
  id: 6,
  code: "D6",
  titre: "Évaluation et tests de sécurité",
  titreEn: "Security Assessment and Testing",
  poids: "12%",
  couleur: "#9b5de5",
  icone: "🔍",
  description:
    "Ce domaine couvre la validation continue de l'efficacité des contrôles de sécurité : audits internes, externes et tierce partie, scans de vulnérabilités, tests d'intrusion, tests logiciels, collecte de données de processus et production de rapports actionnables. Vous apprendrez à concevoir une stratégie de test, à interpréter les résultats et à piloter la remédiation avec un regard de manager.",
  objectifs: [
    "6.1 Concevoir et valider des stratégies d'évaluation, de test et d'audit (interne, externe, tierce partie, on-premise, cloud, hybride)",
    "6.2 Conduire des tests de contrôles de sécurité (vulnerability assessment, penetration testing, log reviews, synthetic transactions, code review, misuse case, coverage, interface testing, breach attack simulations, compliance checks)",
    "6.3 Collecter les données des processus de sécurité (account management, revues de direction, KPI/KRI, vérification des sauvegardes, formation, DR/BC)",
    "6.4 Analyser les résultats des tests et produire des rapports (remédiation, exception handling, ethical disclosure)",
    "6.5 Conduire ou faciliter des audits de sécurité (interne, externe, tierce partie)"
  ],
  lecons: [
    // ------------------------------------------------------------------
    // Leçon 1 — Stratégies d'audit et d'évaluation
    // ------------------------------------------------------------------
    {
      id: "d6-l1",
      titre: "Stratégies d'audit : interne, externe et tierce partie",
      duree: 10,
      slides: [
        {
          type: "intro",
          titre: "Pourquoi évaluer et tester la sécurité ?",
          points: [
            "Valider l'efficacité continue des contrôles",
            "Un programme d'assessment et de testing défini et opérationnel",
            "Le domaine 6 pèse 12% de l'examen CISSP"
          ],
          narration:
            "Bienvenue dans le domaine six du CISSP. Installer des contrôles de sécurité ne suffit pas, il faut prouver régulièrement qu'ils fonctionnent. C'est tout l'objet de l'évaluation et des tests de sécurité, qui combinent scans de vulnérabilités, tests d'intrusion, tests logiciels et audits. Chaque organisation devrait disposer d'un programme d'évaluation défini et opérationnel, et c'est vous, en tant que manager, qui devez le concevoir et le valider."
        },
        {
          type: "standard",
          titre: "Assessment, test et audit : trois notions distinctes",
          points: [
            "Assessment : revue complète de la sécurité d'un système, avec recommandations",
            "Test : exercer un mécanisme pour comparer le comportement réel à l'attendu",
            "Audit : vérifier la conformité à un standard ou à une baseline, souvent de façon indépendante"
          ],
          narration:
            "Commençons par le vocabulaire, car l'examen adore ces nuances. Un assessment est une revue complète de la sécurité d'un environnement, menée par un professionnel qui identifie les vulnérabilités et formule des recommandations. Un test consiste à exercer un mécanisme dans des conditions précises pour comparer le comportement réel au comportement attendu. Un audit, lui, vérifie la conformité par rapport à un standard ou une baseline, et il est souvent formel et indépendant. Le livrable principal d'un assessment est un rapport destiné au management, rédigé en langage non technique.",
          astuce: "💡 Conseil examen : le produit final d'un security assessment est un rapport pour le management, pas une liste technique de vulnérabilités."
        },
        {
          type: "standard",
          titre: "L'audit interne",
          points: [
            "Réalisé par l'équipe d'audit interne de l'organisation",
            "Résultats destinés à un usage interne et au management",
            "Stratégie alignée sur le business et les exigences réglementaires"
          ],
          narration:
            "L'audit interne est réalisé par le personnel de l'organisation elle-même, et ses résultats sont destinés à un usage interne, principalement pour le management. Son objectif est d'évaluer les contrôles avec l'idée de trouver des améliorations. La stratégie d'audit interne doit être alignée sur le business et les opérations quotidiennes, et intégrer les exigences réglementaires. Notez qu'une société cotée en bourse aura une stratégie d'audit interne plus rigoureuse qu'une société privée."
        },
        {
          type: "standard",
          titre: "L'audit externe et l'audit tierce partie",
          points: [
            "Externe : réalisé par un cabinet d'audit extérieur, forte validité, pas de conflit d'intérêt",
            "Tierce partie : conduit par ou pour le compte d'une autre organisation, qui définit le périmètre",
            "L'audit externe complète la stratégie interne"
          ],
          narration:
            "L'audit externe est mené par un cabinet extérieur. Il offre une forte validité car les auditeurs n'ont théoriquement aucun conflit d'intérêt avec l'organisation, ce qui le rend acceptable pour les investisseurs et les régulateurs. L'audit tierce partie, lui, est conduit par une autre organisation ou pour son compte, par exemple un client qui audite son fournisseur. Dans ce cas, c'est l'organisation qui initie l'audit qui choisit les auditeurs et définit le périmètre. Retenez que la stratégie externe doit compléter la stratégie interne, en vérifiant régulièrement que les procédures sont suivies."
        },
        {
          type: "standard",
          titre: "SSAE 18, ISAE 3402 et les audits SOC",
          points: [
            "SSAE 18 aux États-Unis, ISAE 3402 à l'international",
            "SOC 1 : contrôles impactant le reporting financier",
            "SOC 2 : sécurité et vie privée, confidentiel, partagé sous NDA",
            "SOC 3 : version publique, outil marketing"
          ],
          narration:
            "Pour les organisations de services, le standard américain SSAE 18 et son équivalent international ISAE 3402 encadrent ce qu'on appelle les audits SOC, pour Service Organization Controls. Un rapport SOC 1 évalue les contrôles qui peuvent impacter l'exactitude du reporting financier. Un rapport SOC 2 évalue les contrôles de sécurité et de vie privée selon les cinq Trust Services Criteria : sécurité, disponibilité, confidentialité, intégrité de traitement et vie privée ; ses résultats sont confidentiels et partagés sous accord de non-divulgation. Le SOC 3 couvre des sujets similaires mais il est destiné à une diffusion publique, essentiellement comme outil marketing."
        },
        {
          type: "schema",
          titre: "SOC Type I contre Type II",
          points: [
            "Type I : opinion sur la conception des contrôles à un instant donné",
            "Type II : opinion sur la conception ET l'efficacité opérationnelle sur la durée",
            "Type II couvre au moins six mois, souvent un an"
          ],
          schema: {
            type: "grid",
            items: [
              "Type I : photo à un instant T",
              "Type I : conception des contrôles",
              "Type II : période étendue (6 à 12 mois)",
              "Type II : conception + efficacité opérationnelle"
            ]
          },
          narration:
            "Distinction incontournable à l'examen : le rapport de Type un donne l'opinion de l'auditeur sur la description fournie par le management et sur la pertinence de la conception des contrôles, mais uniquement à un instant donné. C'est en quelque sorte une revue documentaire. Le rapport de Type deux va plus loin : l'auditeur vérifie que les contrôles fonctionnent réellement, sur une période étendue d'au moins six mois. Les rapports de Type deux sont donc beaucoup plus fiables, et un professionnel de la sécurité demandera un SOC deux de Type deux à ses fournisseurs.",
          astuce: "💡 Conseil examen : Type I égale photo de la conception à un instant T ; Type II égale évaluation de l'efficacité opérationnelle dans la durée. Le SOC 2 Type II est la référence."
        },
        {
          type: "standard",
          titre: "La localisation : on-premise, cloud, hybride",
          points: [
            "On-premise : évaluer l'infrastructure et les centres de données internes",
            "Cloud : évaluer la sécurité des données et applications chez le fournisseur",
            "Hybride : évaluer la connectivité et les flux entre les deux mondes"
          ],
          narration:
            "La stratégie d'évaluation dépend aussi de la localisation des ressources. Une évaluation on-premise se concentre sur les systèmes internes et les centres de données physiques de l'organisation. Une évaluation cloud porte sur la sécurité des données et des applications hébergées chez un fournisseur de services cloud. Enfin, l'évaluation hybride s'intéresse à ce qui relie les deux : la connectivité, les flux de données et les contrôles de sécurité aux points d'interconnexion et d'intégration."
        },
        {
          type: "question",
          titre: "Vérifions vos acquis",
          q: "Votre organisation veut fournir à ses clients l'assurance la plus fiable que ses contrôles de sécurité fonctionnent efficacement dans la durée. Quel rapport devrait-elle obtenir ?",
          choix: [
            "SOC 1 Type I",
            "SOC 2 Type I",
            "SOC 2 Type II",
            "SOC 3"
          ],
          reponse: 2,
          explication:
            "Le SOC 2 couvre la sécurité et la vie privée, et le Type II atteste de l'efficacité opérationnelle des contrôles sur une période étendue d'au moins six mois. Le SOC 1 concerne le reporting financier, le Type I n'est qu'une photo de la conception à un instant donné, et le SOC 3 est un rapport public à vocation marketing.",
          narration:
            "Prenez un instant pour répondre à cette question avant de continuer."
        },
        {
          type: "resume",
          titre: "Ce qu'il faut retenir",
          points: [
            "Assessment, test et audit sont trois notions distinctes ; le livrable d'un assessment est un rapport pour le management",
            "Audit interne pour l'amélioration, externe pour la validité, tierce partie pour les clients et régulateurs",
            "SSAE 18 et ISAE 3402 encadrent les audits SOC : SOC 1 financier, SOC 2 confidentiel, SOC 3 public",
            "Type I : conception à un instant T ; Type II : efficacité opérationnelle sur la durée",
            "Adapter la stratégie à la localisation : on-premise, cloud ou hybride"
          ],
          narration:
            "Résumons cette première leçon. Un assessment est une revue complète qui aboutit à un rapport pour le management. Les audits se déclinent en interne, externe et tierce partie, chacun avec ses avantages. Les audits SOC, encadrés par SSAE dix-huit et ISAE trois mille quatre cent deux, se déclinent en SOC un, deux et trois, et surtout en Type un et Type deux. Retenez que le SOC deux de Type deux est le rapport de référence pour évaluer un fournisseur de services."
        }
      ]
    },
    // ------------------------------------------------------------------
    // Leçon 2 — Vulnérabilités, scans et SCAP
    // ------------------------------------------------------------------
    {
      id: "d6-l2",
      titre: "Évaluation des vulnérabilités, scans et CVSS",
      duree: 11,
      slides: [
        {
          type: "intro",
          titre: "Trouver les faiblesses avant l'attaquant",
          points: [
            "Vulnérabilité : faiblesse exploitable par une menace",
            "Le vulnerability assessment est un outil central du professionnel de la sécurité",
            "Objectif : identifier ce qui n'est pas correctement protégé"
          ],
          narration:
            "Dans cette leçon, nous allons apprendre à chercher les faiblesses avant que les attaquants ne les trouvent. Une vulnérabilité est une faiblesse dans un système ou un contrôle de sécurité qui pourrait être exploitée par une menace. L'évaluation des vulnérabilités est l'un des outils les plus importants de la boîte à outils du professionnel de la sécurité. Et attention, elle ne se limite pas à la technique : on peut aussi évaluer la vulnérabilité de la sécurité physique, du personnel, ou la dépendance à l'alimentation électrique."
        },
        {
          type: "schema",
          titre: "Les étapes d'une évaluation de vulnérabilités",
          points: [
            "Reconnaissance : collecte passive d'informations publiques",
            "Enumeration : découverte active du réseau, adresses et ports",
            "Vulnerability analysis : identifier les vulnérabilités potentielles",
            "Execution : exploitation, uniquement en pen test",
            "Documentation des findings et de leur sévérité"
          ],
          schema: {
            type: "flow",
            items: [
              "Reconnaissance",
              "Enumeration",
              "Vulnerability Analysis",
              "Execution (pen test)",
              "Document Findings"
            ]
          },
          narration:
            "Une évaluation de vulnérabilités suit une démarche structurée. On commence par la reconnaissance, c'est-à-dire la collecte passive d'informations publiquement disponibles. Puis vient l'énumération, la découverte active du réseau pour identifier les adresses et les ports des cibles. Ensuite, l'analyse des vulnérabilités identifie les faiblesses potentiellement exploitables. L'étape d'exécution, où l'on tente réellement d'exploiter, ne s'applique que si l'on réalise un test d'intrusion. Enfin, on documente les findings et leur sévérité dans un rapport."
        },
        {
          type: "standard",
          titre: "Les quatre catégories de scans de vulnérabilités",
          points: [
            "Network discovery scans : cartographier les systèmes présents",
            "Network vulnerability scans : chercher les faiblesses des systèmes et équipements",
            "Web application vulnerability scans : tester les applications web",
            "Database vulnerability scans : tester les bases de données"
          ],
          narration:
            "Les scanners de vulnérabilités sondent automatiquement les systèmes, applications et réseaux à la recherche de faiblesses exploitables : correctifs manquants, mauvaises configurations ou code défectueux. On distingue quatre grandes catégories de scans : les scans de découverte réseau, qui cartographient les systèmes présents, les scans de vulnérabilités réseau, les scans d'applications web et les scans de bases de données. Chacun apporte une vision complémentaire de la surface d'attaque."
        },
        {
          type: "standard",
          titre: "Les états de ports : open, closed, filtered",
          points: [
            "Open : un service écoute sur le port et accepte les connexions",
            "Closed : le port est accessible mais aucun service n'écoute",
            "Filtered : un firewall ou filtre bloque, le scanner ne peut pas conclure",
            "Un port open non justifié augmente la surface d'attaque : à fermer ou filtrer"
          ],
          narration:
            "Quand un scanner de découverte comme nmap sonde un système, il classe chaque port dans un état. Open signifie qu'une application écoute sur ce port et accepte les connexions : c'est un service exposé, donc une surface d'attaque potentielle. Closed signifie que le port est accessible, le système répond, mais qu'aucune application n'y écoute. Filtered signifie que le scanner n'arrive pas à déterminer l'état, généralement parce qu'un firewall ou un filtre intercepte les sondes sans répondre. Pour le manager sécurité, la lecture est simple : tout port open doit correspondre à un besoin métier documenté ; sinon, on désactive le service ou on filtre le port.",
          astuce: "💡 Conseil examen : filtered ne veut pas dire fermé — cela veut dire qu'un dispositif de filtrage empêche le scanner de conclure."
        },
        {
          type: "standard",
          titre: "Techniques de scan : TCP connect, SYN, UDP, banner grabbing",
          points: [
            "TCP connect scan : three-way handshake complet — fiable mais bruyant, journalisé",
            "TCP SYN scan (half-open) : SYN, SYN/ACK, puis RST — plus discret, jamais de connexion complète",
            "UDP scan : sans handshake, lent et moins fiable (pas de réponse ≠ port fermé)",
            "Banner grabbing : lire la bannière du service pour identifier logiciel et version"
          ],
          narration:
            "Connaissez les principales techniques de scan. Le TCP connect scan établit le three-way handshake complet, SYN, SYN-ACK, ACK : il est fiable et ne demande pas de privilèges particuliers, mais il est bruyant, car la connexion complète est journalisée par la cible. Le TCP SYN scan, dit half-open ou semi-ouvert, envoie un SYN, attend le SYN-ACK qui révèle un port ouvert, puis répond par un RST au lieu de terminer la connexion : plus rapide et plus discret, c'est la technique par défaut de nmap. Le scan UDP est plus délicat, car UDP n'a pas de handshake : l'absence de réponse ne prouve pas que le port est ouvert ou fermé, ce qui rend ce scan lent et moins fiable. Enfin, le banner grabbing consiste à se connecter à un service pour lire sa bannière et identifier le logiciel et sa version, une information précieuse pour cibler les vulnérabilités connues.",
          astuce: "💡 Conseil examen : SYN scan = half-open = SYN, SYN/ACK, RST — jamais de connexion complète, donc plus furtif que le connect scan."
        },
        {
          type: "standard",
          titre: "Scans authentifiés",
          points: [
            "Authenticated scan ou credentialed scan : le scanner utilise des identifiants valides",
            "Simule les actions d'un utilisateur authentifié, accède aux couches profondes",
            "Résultats plus précis, moins de faux positifs",
            "Utilise souvent un compte en lecture seule"
          ],
          narration:
            "Un scan authentifié, aussi appelé credentialed scan, utilise des identifiants valides pour se connecter aux systèmes évalués. Le scanner peut ainsi simuler les actions d'un utilisateur authentifié, accéder à des couches plus profondes du système, lire les fichiers de configuration, et fournir une évaluation nettement plus précise des vulnérabilités. Bonne pratique importante : ce scan utilise généralement un compte en lecture seule, afin de ne rien modifier sur les systèmes audités.",
          astuce: "💡 Conseil examen : un scan authentifié réduit les faux positifs et utilise idéalement un compte read-only."
        },
        {
          type: "standard",
          titre: "SCAP : le langage commun de la vulnérabilité",
          points: [
            "Security Content Automation Protocol, cadre du NIST",
            "CVE : nommer les vulnérabilités",
            "CVSS : scorer leur sévérité",
            "CCE, CPE, XCCDF, OVAL : configurations, plateformes, checklists, procédures de test"
          ],
          narration:
            "Pour que tous les outils de sécurité parlent le même langage, le NIST a défini SCAP, le Security Content Automation Protocol. Retenez ses composants. CVE, Common Vulnerabilities and Exposures, fournit un système de nommage des vulnérabilités. CVSS fournit un système de score standardisé de leur sévérité. CCE nomme les problèmes de configuration, CPE nomme les systèmes d'exploitation, applications et équipements, XCCDF est un langage pour décrire des checklists de sécurité, et OVAL est un langage pour décrire les procédures de test. À l'examen, sachez associer chaque sigle à sa fonction."
        },
        {
          type: "standard",
          titre: "CVSS : évaluer la sévérité",
          points: [
            "Common Vulnerability Scoring System : score standardisé de sévérité",
            "Métriques d'exploitabilité et d'impact",
            "Prend en compte la maturité du code d'exploitation et les possibilités de remédiation",
            "Permet d'adapter le score au contexte de l'organisation"
          ],
          narration:
            "Le CVSS, Common Vulnerability Scoring System, est le système standardisé pour décrire la sévérité des vulnérabilités. Il inclut des métriques et des outils de calcul portant sur l'exploitabilité, l'impact, la maturité du code d'exploitation et les possibilités de remédiation. Il permet aussi d'ajuster le score aux exigences propres de l'organisation. C'est ce qui permet de prioriser objectivement : une vulnérabilité critique sur un serveur exposé à Internet ne se traite pas comme une faiblesse mineure sur un poste isolé."
        },
        {
          type: "schema",
          titre: "Le vulnerability management, un cycle continu",
          points: [
            "Inventaire des actifs et valeur de chaque actif",
            "Identification des vulnérabilités par actif",
            "Priorisation et mitigation",
            "Revue et réévaluation continues"
          ],
          schema: {
            type: "cycle",
            items: [
              "Inventaire des actifs",
              "Valorisation des actifs",
              "Identification des vulnérabilités",
              "Priorisation et mitigation",
              "Revue continue"
            ]
          },
          narration:
            "La gestion des vulnérabilités n'est pas un événement ponctuel mais un cycle continu : identifier, classifier, prioriser et atténuer les vulnérabilités. Le programme prend en entrée les résultats des tests, puis applique un processus de gestion des risques : inventaire des actifs, identification de la valeur de chaque actif, identification des vulnérabilités pour chaque actif, et enfin revue et évaluation permanentes. Sans inventaire fiable, impossible de savoir ce que l'on doit protéger."
        },
        {
          type: "question",
          titre: "Contrôle de connaissance",
          q: "Quel composant de SCAP fournit un système de score standardisé pour décrire la sévérité des vulnérabilités de sécurité ?",
          choix: ["CVE", "CVSS", "CPE", "OVAL"],
          reponse: 1,
          explication:
            "CVSS, Common Vulnerability Scoring System, fournit le score standardisé de sévérité. CVE nomme les vulnérabilités, CPE nomme les plateformes (OS, applications, équipements) et OVAL est un langage décrivant les procédures de test de sécurité.",
          narration:
            "Vérifions que les sigles SCAP sont bien en place. Répondez avant de passer à la suite."
        },
        {
          type: "resume",
          titre: "Ce qu'il faut retenir",
          points: [
            "Démarche : reconnaissance, enumeration, analyse, exécution (pen test seulement), documentation",
            "Quatre catégories de scans : discovery, réseau, web, base de données",
            "États de ports : open, closed, filtered ; SYN scan (half-open) plus discret que connect scan ; UDP lent ; banner grabbing identifie les versions",
            "Scan authentifié : plus profond, plus précis, compte read-only",
            "SCAP : CVE nomme, CVSS score, CCE configure, CPE identifie, XCCDF liste, OVAL teste",
            "Vulnerability management : cycle continu fondé sur l'inventaire des actifs"
          ],
          narration:
            "En résumé, l'évaluation des vulnérabilités suit des étapes précises, de la reconnaissance passive à la documentation des findings, l'exploitation étant réservée aux tests d'intrusion. Les scans se déclinent en quatre catégories, et le scan authentifié apporte précision et profondeur. Côté réseau, retenez les trois états de ports, open, closed et filtered, le SYN scan semi-ouvert plus discret que le connect scan, les limites du scan UDP et le banner grabbing. Le cadre SCAP standardise le vocabulaire, avec CVE pour nommer et CVSS pour scorer. Enfin, tout cela alimente un cycle continu de vulnerability management fondé sur un inventaire d'actifs à jour."
        }
      ]
    },
    // ------------------------------------------------------------------
    // Leçon 3 — Penetration testing et équipes
    // ------------------------------------------------------------------
    {
      id: "d6-l3",
      titre: "Penetration testing, red, blue et purple teams",
      duree: 11,
      slides: [
        {
          type: "intro",
          titre: "Aller au-delà du scan : exploiter",
          points: [
            "Le pen test tente réellement de contourner les défenses",
            "Encadré par contrat et par des Rules of Engagement",
            "Complète les scans, plus automatisés et non intrusifs"
          ],
          narration:
            "Les tests d'intrusion vont plus loin que les scans de vulnérabilités : les testeurs tentent activement de contourner les mécanismes de sécurité et d'exploiter les failles. C'est la grande différence avec un scan, qui est plus automatisé, plus rapide, mais qui ne tente jamais d'exploiter. Parce qu'il est intrusif, le pen test est encadré par un contrat et par des Rules of Engagement qui définissent le périmètre et limitent la responsabilité des testeurs comme du commanditaire."
        },
        {
          type: "schema",
          titre: "Les quatre phases NIST du pen test",
          points: [
            "Planning : périmètre, Rules of Engagement, autorisation explicite",
            "Information gathering and discovery : reconnaissance et scans",
            "Attack : exploitation manuelle et automatisée",
            "Reporting : résultats et recommandations"
          ],
          schema: {
            type: "flow",
            items: ["Planning", "Discovery", "Attack", "Reporting"]
          },
          narration:
            "Le NIST décrit le processus de test d'intrusion en quatre phases. D'abord le planning, où l'on s'accorde sur le périmètre et les règles d'engagement : cette phase garantit que le test est explicitement autorisé par le management. Ensuite, la collecte d'informations et la découverte, qui combine reconnaissance, cartographie du site web, découverte réseau et scans de vulnérabilités. Puis la phase d'attaque, où les testeurs utilisent des outils manuels et automatisés pour tenter de vaincre les défenses ; c'est là que le pen test dépasse le scan. Enfin, le reporting synthétise les résultats et recommande des améliorations.",
          astuce: "💡 Conseil examen : l'autorisation écrite du management pendant le planning est ce qui distingue le pen test légal du piratage."
        },
        {
          type: "standard",
          titre: "Rules of Engagement",
          points: [
            "Définissent le périmètre du test et les limites d'activité",
            "Établissent les limites de responsabilité des deux parties",
            "Précisent horaires, cibles autorisées, techniques interdites, contacts d'urgence"
          ],
          narration:
            "Les Rules of Engagement, ou règles d'engagement, sont l'ensemble des règles, contraintes et limites qui encadrent l'activité des participants. Dans un test d'intrusion éthique, elles définissent précisément le périmètre du test et établissent les limites de responsabilité, à la fois pour les testeurs et pour l'organisation commanditaire. Concrètement, on y trouve les systèmes cibles autorisés, les plages horaires, les techniques permises ou interdites, et les personnes à contacter en cas d'incident."
        },
        {
          type: "schema",
          titre: "Black box, gray box, white box",
          points: [
            "Black box ou unknown environment : aucune information préalable, simule un attaquant externe",
            "Gray box ou partially known : connaissance partielle, bon compromis coût-réalisme",
            "White box ou known environment : information détaillée, accès au code source, test plus rapide"
          ],
          schema: {
            type: "grid",
            items: [
              "Black box : aucune info, attaquant externe",
              "Gray box : connaissance partielle, compromis",
              "White box : info complète et code source",
              "Plus d'info = test plus court et plus profond"
            ]
          },
          narration:
            "On classe les tests d'intrusion en trois groupes selon l'information fournie aux testeurs. Le test black box, ou environnement inconnu, ne fournit aucune information préalable : il simule un attaquant externe qui doit tout découvrir. Le test white box, ou environnement connu, fournit des informations détaillées, y compris l'accès au code source : on saute la phase de reconnaissance, ce qui raccourcit le test et augmente la probabilité de trouver des failles. Le test gray box, à connaissance partielle, équilibre les avantages des deux approches, souvent pour des raisons de coût ou de délai."
        },
        {
          type: "standard",
          titre: "Red team et blue team",
          points: [
            "Red team : sécurité offensive interne, ethical hacking, pen testing, social engineering, threat intelligence",
            "Blue team : sécurité défensive, monitoring, incident response, forensics, security operations"
          ],
          narration:
            "Dans les organisations matures, on organise des exercices entre équipes. La red team est l'équipe offensive : elle joue le rôle de l'attaquant et pratique l'ethical hacking, les tests d'intrusion, le social engineering et la threat intelligence. La blue team est l'équipe défensive : elle assure la surveillance de sécurité, la réponse aux incidents, l'investigation numérique et les opérations de sécurité au quotidien. L'affrontement simulé entre les deux permet de tester les défenses en conditions réalistes."
        },
        {
          type: "standard",
          titre: "La purple team : la collaboration",
          points: [
            "Pas une troisième équipe distincte",
            "Collaboration entre red et blue teams",
            "Partage d'informations et compétition saine"
          ],
          narration:
            "Attention au piège classique : la purple team n'est pas une troisième équipe séparée. Le violet représente la collaboration entre la red team et la blue team. Les attaquants partagent leurs techniques avec les défenseurs, les défenseurs expliquent ce qu'ils ont détecté ou manqué, et cette boucle de partage d'informations, dans une compétition saine, améliore les deux camps. Si l'examen vous demande ce qu'est la purple team, la réponse est toujours : le travail en commun du rouge et du bleu.",
          astuce: "💡 Conseil examen : purple team = collaboration red + blue, jamais une équipe indépendante."
        },
        {
          type: "standard",
          titre: "Breach and Attack Simulation",
          points: [
            "Plateformes BAS : automatisation partielle du pen testing",
            "Combinent techniques red et blue avec de l'automatisation",
            "Injectent des indicateurs de menace pour déclencher les contrôles de détection",
            "Références : MITRE ATT&CK, OSSTMM, NIST 800-115, OWASP",
            "Modèles d'analyse d'attaque : Cyber Kill Chain, MITRE ATT&CK et Diamond Model of Intrusion Analysis"
          ],
          narration:
            "Les plateformes de Breach and Attack Simulation automatisent certains aspects du test d'intrusion. Elles combinent des techniques de red team et de blue team avec de l'automatisation pour simuler des menaces persistantes avancées contre l'environnement. Concrètement, elles injectent des indicateurs de menace sur les systèmes et les réseaux, par exemple un fichier suspect déposé sur un serveur, pour vérifier que les contrôles de détection et de prévention réagissent immédiatement. Côté méthodologies, connaissez les références : le framework MITRE ATT&CK, l'OSSTMM, le guide NIST huit cents tiret cent quinze et le Web Security Testing Guide de l'OWASP. Et pour modéliser les attaques simulées ou réelles, trois cadres sont à connaître : la Cyber Kill Chain de Lockheed Martin, qui décrit les étapes séquentielles d'une intrusion, MITRE ATT&CK, qui catalogue les tactiques et techniques réelles des attaquants, et le Diamond Model of Intrusion Analysis, qui analyse chaque événement d'intrusion selon quatre sommets reliés : l'adversaire, ses capacités, son infrastructure et la victime.",
          astuce: "💡 Conseil examen : Diamond Model = 4 sommets — adversary, capability, infrastructure, victim ; Kill Chain = étapes séquentielles ; ATT&CK = matrice de tactiques et techniques."
        },
        {
          type: "question",
          titre: "Testez-vous",
          q: "Une entreprise veut un test réaliste simulant un attaquant externe, mais son budget limité impose de fournir quelques informations aux testeurs pour réduire la durée. QUEL type de test est le PLUS approprié ?",
          choix: [
            "White-box penetration test",
            "Gray-box penetration test",
            "Black-box penetration test",
            "Vulnerability scan authentifié"
          ],
          reponse: 1,
          explication:
            "Le gray box, ou partially known environment test, est précisément choisi quand on souhaite le réalisme du black box mais que les contraintes de coût ou de temps imposent de fournir une connaissance partielle. Le white box fournit toute l'information, le black box n'en fournit aucune et coûte plus cher en temps, et un scan authentifié n'est pas un test d'intrusion.",
          narration:
            "Voici une mise en situation typique de l'examen. Réfléchissez au compromis entre réalisme et contraintes de budget."
        },
        {
          type: "resume",
          titre: "Ce qu'il faut retenir",
          points: [
            "Le pen test exploite réellement les failles, contrairement au scan",
            "Quatre phases NIST : planning, discovery, attack, reporting",
            "Les Rules of Engagement définissent périmètre et responsabilités",
            "Black box sans information, white box avec code source, gray box entre les deux",
            "Red offensive, blue défensive, purple collaboration ; BAS automatise la simulation d'attaques"
          ],
          narration:
            "Récapitulons. Le test d'intrusion se distingue du scan par la tentative réelle d'exploitation, et il suit les quatre phases du NIST : planification avec autorisation explicite, découverte, attaque et rapport. Les règles d'engagement protègent les deux parties. Les tests se déclinent en black, gray et white box selon l'information fournie. Enfin, la red team attaque, la blue team défend, la purple team incarne leur collaboration, et les plateformes BAS automatisent la simulation d'attaques pour tester vos contrôles en continu."
        }
      ]
    },
    // ------------------------------------------------------------------
    // Leçon 4 — Tests logiciels
    // ------------------------------------------------------------------
    {
      id: "d6-l4",
      titre: "Tests logiciels : revue de code, SAST, DAST et fuzzing",
      duree: 12,
      slides: [
        {
          type: "intro",
          titre: "Vérifier le code avant la production",
          points: [
            "Le test logiciel vérifie que le code fonctionne comme conçu et sans failles",
            "Revue par des tiers avant la mise en production",
            "Découvrir les défauts de sécurité, de performance et de fiabilité avant l'impact business"
          ],
          narration:
            "Le test logiciel vérifie que le code fonctionne comme prévu et qu'il ne contient pas de failles de sécurité. La revue de code et les tests constituent l'un des composants les plus critiques d'un programme de test logiciel : ils offrent une revue indépendante du travail des développeurs avant le passage en production, et permettent de découvrir des défauts de sécurité, de performance ou de fiabilité avant qu'ils n'impactent les opérations."
        },
        {
          type: "standard",
          titre: "La revue de code et les inspections Fagan",
          points: [
            "Code review ou peer review : d'autres développeurs examinent le code",
            "Processus formel ou informel",
            "Fagan inspection, le plus formel : planning, overview, preparation, inspection, rework, follow-up",
            "Entry criteria et exit criteria encadrent chaque étape"
          ],
          narration:
            "Dans la revue de code, aussi appelée peer review, des développeurs autres que l'auteur examinent le code à la recherche de défauts. Cela peut être informel, ou très formel. Le processus le plus formel est l'inspection Fagan, qui suit six étapes : planning, overview, preparation, inspection, rework et follow-up. Chaque étape est encadrée par des critères d'entrée, à satisfaire pour démarrer, et des critères de sortie, à satisfaire pour terminer. À l'examen, si l'on vous parle du processus de revue de code le plus formel, pensez Fagan.",
          astuce: "💡 Moyen mnémotechnique pour Fagan : P-O-P-I-R-F, planning, overview, preparation, inspection, rework, follow-up."
        },
        {
          type: "schema",
          titre: "SAST, DAST et IAST",
          points: [
            "SAST : analyse statique, sans exécuter le logiciel, sur le code source ou compilé",
            "DAST : analyse dynamique, à l'exécution ; souvent la seule option pour du code tiers",
            "IAST : combine les deux, analyse le code à l'exécution depuis l'intérieur de l'application"
          ],
          schema: {
            type: "grid",
            items: [
              "SAST : code au repos, perspective développeur",
              "DAST : application en cours d'exécution",
              "IAST : instrumentation à l'exécution, plus précis",
              "Code review = un exemple de SAST"
            ]
          },
          narration:
            "Trois sigles à maîtriser absolument. Le SAST, Static Application Security Testing, évalue la sécurité du logiciel sans l'exécuter, en analysant le code source ou l'application compilée ; la revue de code en est un exemple. Le DAST, Dynamic Application Security Testing, évalue le logiciel dans un environnement d'exécution ; c'est souvent la seule option quand on déploie une application écrite par quelqu'un d'autre, car on n'a pas le code source. L'IAST, Interactive Application Security Testing, combine les deux : il analyse le code pendant l'exécution, depuis l'intérieur de l'application, ce qui donne des résultats plus précis."
        },
        {
          type: "standard",
          titre: "Le fuzzing",
          points: [
            "Envoyer des entrées modifiées pour tester le comportement face à l'inattendu",
            "Mutation fuzzing, dit dumb : modifie des entrées connues",
            "Generational fuzzing, dit intelligent : génère des entrées à partir de modèles"
          ],
          narration:
            "Le fuzzing consiste à soumettre au logiciel des entrées modifiées pour tester sa performance dans des circonstances inattendues. On distingue deux approches. Le mutation fuzzing, parfois qualifié de dumb, prend des entrées connues et les modifie pour générer des entrées synthétiques susceptibles de déclencher un comportement inattendu. Le generational fuzzing, dit intelligent, développe des entrées à partir de modèles décrivant les entrées attendues par le programme. Le fuzzing est excellent pour découvrir des plantages et des débordements que les tests classiques ratent."
        },
        {
          type: "standard",
          titre: "Misuse case testing et mutation testing",
          points: [
            "Misuse case ou abuse case testing : tester du point de vue d'un acteur hostile",
            "Enumérer les cas de mésusage connus puis tenter de les exploiter",
            "Mutation testing : modifier légèrement le programme pour vérifier que les tests détectent le mutant"
          ],
          narration:
            "Le misuse case testing, ou abuse case testing, évalue le logiciel du point de vue d'un acteur hostile : on se concentre sur les comportements que l'organisation ne souhaite pas, contraires au bon fonctionnement du système. Les testeurs énumèrent d'abord les cas de mésusage connus, puis tentent de les exploiter par des techniques manuelles ou automatisées. Ne confondez pas avec le mutation testing, qui modifie le programme lui-même par petites touches pour créer des mutants, et vérifie si les tests détectent bien ces défauts introduits volontairement."
        },
        {
          type: "standard",
          titre: "L'analyse de couverture de test",
          points: [
            "Test coverage = cas d'usage testés divisés par cas d'usage totaux",
            "Branch coverage : chaque IF sous toutes les conditions",
            "Condition coverage : chaque test logique sous tous les jeux d'entrées",
            "Functional, loop et statement coverage complètent l'analyse"
          ],
          narration:
            "L'analyse de couverture estime le degré de test appliqué à un logiciel. La couverture de test se calcule comme le nombre de cas d'usage testés divisé par le nombre total de cas d'usage, ce qui suppose d'avoir énuméré tous les cas possibles, tâche difficile. Cinq critères sont couramment utilisés : la branch coverage vérifie que chaque instruction conditionnelle a été exécutée sous toutes ses branches ; la condition coverage, que chaque test logique a été exécuté avec tous les jeux d'entrées ; la functional coverage, que chaque fonction a été appelée et a retourné un résultat ; la loop coverage, que chaque boucle a été exécutée plusieurs fois, une fois et zéro fois ; et la statement coverage, que chaque ligne de code a été exécutée."
        },
        {
          type: "standard",
          titre: "Le test des interfaces",
          points: [
            "API : vérifier que les interfaces programmatiques appliquent les exigences de sécurité",
            "UI : interfaces graphiques et lignes de commande",
            "Interfaces physiques : attention aux conséquences en cas de défaillance"
          ],
          narration:
            "Le test des interfaces évalue la manière dont les modules interagissent entre eux et avec les utilisateurs. Trois types d'interfaces doivent être testés. Les API, qui offrent un moyen standardisé aux modules de code d'interagir et peuvent être exposées au monde extérieur via des services web : il faut vérifier qu'elles appliquent toutes les exigences de sécurité. Les interfaces utilisateur, graphiques ou en ligne de commande, par lesquelles les utilisateurs finaux interagissent avec le logiciel. Et les interfaces physiques, présentes dans les applications qui pilotent des machines ou des automates : leur défaillance peut avoir des conséquences graves, donc une attention particulière s'impose."
        },
        {
          type: "standard",
          titre: "Transactions synthétiques et monitoring",
          points: [
            "Synthetic transactions : transactions scriptées avec résultats attendus connus",
            "Synthetic ou active monitoring : transactions émulées pour surveiller la performance",
            "RUM, Real User Monitoring : monitoring passif des utilisateurs réels"
          ],
          narration:
            "Pour vérifier le comportement d'un système en fonctionnement, on utilise des transactions synthétiques : des transactions scriptées dont le résultat attendu est connu à l'avance. Le monitoring synthétique, dit actif, exécute ces transactions émulées ou enregistrées pour détecter des changements de temps de réponse ou de fonctionnalité. À l'inverse, le Real User Monitoring, ou RUM, est une technique passive qui observe et enregistre l'interaction des utilisateurs réels avec l'application ; il est idéal pour identifier les problèmes concrets rencontrés par les utilisateurs. Retenez l'opposition : synthétique égale actif et scripté, RUM égale passif et réel.",
          astuce: "💡 Conseil examen : synthetic monitoring = actif, scripts ; RUM = passif, utilisateurs réels."
        },
        {
          type: "question",
          titre: "Question de contrôle",
          q: "Votre organisation déploie une application commerciale dont elle n'a PAS le code source. Quelle technique de test de sécurité est la PLUS appropriée ?",
          choix: [
            "SAST",
            "Revue de code Fagan",
            "DAST",
            "Mutation testing"
          ],
          reponse: 2,
          explication:
            "Le DAST évalue la sécurité du logiciel dans un environnement d'exécution sans besoin du code source ; c'est souvent la seule option pour les applications écrites par un tiers. Le SAST, la revue Fagan et le mutation testing nécessitent tous l'accès au code source.",
          narration:
            "Situation classique : pas de code source. Quelle approche reste possible ?"
        },
        {
          type: "resume",
          titre: "Ce qu'il faut retenir",
          points: [
            "Fagan : le processus de revue de code le plus formel, en six étapes",
            "SAST sans exécution, DAST à l'exécution, IAST combine les deux",
            "Fuzzing : mutation (dumb) ou generational (intelligent)",
            "Misuse case : point de vue de l'attaquant ; coverage : branch, condition, functional, loop, statement",
            "Interfaces API, UI et physiques ; transactions synthétiques actives contre RUM passif"
          ],
          narration:
            "Résumons cette leçon dense. La revue de code culmine avec l'inspection Fagan en six étapes. Le SAST analyse le code au repos, le DAST teste l'application en fonctionnement, et l'IAST combine les deux depuis l'intérieur. Le fuzzing bombarde le logiciel d'entrées inattendues, en mode mutation ou générationnel. Le misuse case testing adopte le point de vue de l'attaquant, l'analyse de couverture mesure l'exhaustivité des tests, et le test des interfaces couvre les API, les interfaces utilisateur et physiques. Enfin, distinguez le monitoring synthétique actif du monitoring passif des utilisateurs réels."
        }
      ]
    },
    // ------------------------------------------------------------------
    // Leçon 5 — Données de processus, logs, KPI, rapports
    // ------------------------------------------------------------------
    {
      id: "d6-l5",
      titre: "Logs, SIEM, KPI/KRI, exercices DR/BC et rapports",
      duree: 12,
      slides: [
        {
          type: "intro",
          titre: "Superviser le programme de sécurité",
          points: [
            "Le management doit collecter des données techniques et administratives",
            "Revues de logs, revues de comptes, vérification des sauvegardes",
            "KPI et KRI donnent une vue de haut niveau de l'efficacité du programme"
          ],
          narration:
            "Dernière leçon du domaine : la supervision du programme de sécurité par le management. De nombreux composants du programme génèrent des données cruciales pour l'évaluation : le processus de gestion des comptes, les revues et approbations de la direction, les indicateurs de performance et de risque, la vérification des sauvegardes, et les données produites par les programmes de continuité et de reprise. Voyons comment collecter et exploiter tout cela, puis comment transformer les résultats en rapports actionnables."
        },
        {
          type: "standard",
          titre: "Revue des logs et SIEM",
          points: [
            "SIEM : collecte via syslog, agrégation, normalisation, corrélation, stockage sécurisé, analyse, reporting",
            "Logs courants : sécurité, application, firewall, proxy, change management",
            "Revue périodique des activités des comptes privilégiés",
            "NetFlow particulièrement utile pour investiguer les incidents"
          ],
          narration:
            "La revue des logs, en particulier des activités des administrateurs, garantit que les systèmes ne sont pas détournés. Le SIEM, Security Information and Event Management, collecte les informations grâce à la fonctionnalité syslog présente dans la plupart des équipements, systèmes et applications, puis assure l'agrégation, la normalisation, la corrélation, le stockage sécurisé, l'analyse et le reporting. Les responsables sécurité doivent conduire périodiquement des revues de logs, notamment sur les fonctions sensibles, pour vérifier que les utilisateurs privilégiés n'abusent pas de leurs droits. Et pour les investigations d'incidents, les logs de flux réseau NetFlow sont particulièrement précieux."
        },
        {
          type: "standard",
          titre: "Protéger les logs et synchroniser les horloges",
          points: [
            "Stockage centralisé, permissions restreintes",
            "Archives en lecture seule pour empêcher la modification",
            "NTP pour synchroniser les horloges des sources et du SIEM",
            "Politiques de logging déployables par GPO"
          ],
          narration:
            "Les fichiers de logs sont des preuves potentielles : ils doivent être protégés. On les stocke de façon centralisée, on restreint l'accès par des permissions, et on place les archives en lecture seule pour empêcher toute modification. Point d'examen fréquent : les systèmes de logging doivent utiliser le protocole NTP, Network Time Protocol, pour synchroniser les horloges des systèmes émetteurs et du SIEM lui-même, afin que les événements de sources multiples s'alignent sur une chronologie cohérente. Enfin, sous Windows, les politiques de journalisation peuvent être déployées par Group Policy Objects.",
          astuce: "💡 Conseil examen : sans NTP, impossible de corréler les événements entre systèmes ; c'est la réponse attendue aux questions sur la cohérence temporelle des logs."
        },
        {
          type: "standard",
          titre: "Revues de comptes et de la direction",
          points: [
            "Vérifier que les utilisateurs ne conservent que les permissions autorisées",
            "Revue complète pour les comptes à privilèges élevés ; sinon échantillonnage vraiment aléatoire",
            "Créations, modifications et suppressions contrôlées et documentées ; comptes inutiles suspendus",
            "ISO 9000 : boucle Plan-Do-Check-Act, le check correspond à l'assessment"
          ],
          narration:
            "Les revues de gestion des comptes garantissent que seuls les utilisateurs autorisés ont accès aux informations, et qu'aucune modification non autorisée ne s'est produite. Une revue complète de tous les comptes est chronophage, donc on la réserve souvent aux comptes hautement privilégiés ; pour le reste, on peut utiliser un échantillonnage, à condition qu'il soit véritablement aléatoire. L'ajout, la modification et la suppression de comptes doivent être des processus bien définis, contrôlés et documentés, et les comptes devenus inutiles doivent être suspendus. Situez aussi tout cela dans la boucle Plan-Do-Check-Act d'ISO neuf mille : le Plan fixe les objectifs, le Do correspond aux opérations, le Check est précisément l'évaluation et les tests de sécurité, et le Act est la revue formelle de direction."
        },
        {
          type: "schema",
          titre: "KPI contre KRI",
          points: [
            "KPI : mesure la performance de l'ISMS par rapport aux objectifs, orienté passé",
            "Exemples de KPI : vulnérabilités ouvertes, délai de résolution, comptes compromis, findings récurrents",
            "KRI : indique l'exposition au risque opérationnel, orienté futur",
            "Exemples de KRI : systèmes EOL, vendeurs sans assessment récent, données sensibles non chiffrées"
          ],
          schema: {
            type: "grid",
            items: [
              "KPI : regard vers le passé",
              "KPI : performance vs objectifs",
              "KRI : regard vers le futur",
              "KRI : exposition au risque émergent"
            ]
          },
          narration:
            "Deux familles d'indicateurs à ne pas confondre. Les Key Performance Indicators mesurent la performance du système de management de la sécurité par rapport aux objectifs fixés : ils regardent vers le passé. Exemples : le nombre de vulnérabilités ouvertes, le temps de résolution, le nombre de comptes compromis ou les findings d'audit récurrents. Les Key Risk Indicators, eux, indiquent le niveau d'exposition au risque opérationnel et aident à anticiper les évolutions du risque : ils regardent vers le futur. Exemples : le pourcentage de systèmes en fin de vie, le nombre de fournisseurs sans évaluation de sécurité récente, ou le volume de données sensibles transmises sans chiffrement. La bonne pratique consiste à définir des baselines, automatiser la collecte et suivre le tout dans un tableau de bord.",
          astuce: "💡 Conseil examen : KPI = backward looking, KRI = forward looking."
        },
        {
          type: "standard",
          titre: "Sauvegardes, formation et phishing simulé",
          points: [
            "Vérifier périodiquement les sauvegardes : logs, hachages, restaurations réelles",
            "Formation initiale adaptée au rôle, puis rappels tout au long de l'année",
            "Simulations de phishing pour mesurer l'efficacité de la sensibilisation",
            "Mesurer par des métriques, par exemple le taux de clic dans le temps"
          ],
          narration:
            "Les managers doivent inspecter périodiquement les résultats des sauvegardes : revue des logs, vérification des valeurs de hachage, et surtout demande de restauration réelle d'un système ou d'un fichier, car seule une restauration prouve que la sauvegarde fonctionne. Côté facteur humain, le programme de formation et de sensibilisation commence par une formation initiale adaptée au rôle de chacun, puis se poursuit toute l'année avec des rappels et des mises à jour sur le paysage des menaces. Les simulations de phishing permettent d'évaluer l'efficacité du programme, et il faut en mesurer les résultats par des métriques, comme l'évolution du taux de clic. N'oubliez pas les exigences par rôle, par exemple le secure coding pour les développeurs, et les obligations réglementaires de formation annuelle."
        },
        {
          type: "standard",
          titre: "Tester les plans DR et BC",
          points: [
            "BC : maintenir ou restaurer rapidement les processus vitaux ; DR en est un sous-ensemble centré sur les systèmes",
            "Plans à évaluer et tester périodiquement",
            "Formation, sensibilisation et lessons learned pour améliorer en continu",
            "La protection de la vie humaine prime toujours"
          ],
          narration:
            "La continuité d'activité, ou Business Continuity, regroupe les processus garantissant que les activités vitales restent opérationnelles ou sont rapidement restaurées après un incident grave. Le Disaster Recovery en est un sous-ensemble, centré sur la restauration des systèmes d'information après un sinistre. Ces programmes couvrent la réponse initiale, le personnel impliqué, la communication interne et externe, l'évaluation des efforts de réponse et la restauration des services. Point crucial pour ce domaine : les plans DR et BC doivent être évalués et testés périodiquement pour rester efficaces, avec de la formation et des sessions de retour d'expérience. Et souvenez-vous du principe absolu : la protection de la vie humaine passe avant toute chose.",
          astuce: "💡 Conseil examen : dans toute question DR/BC, la sécurité des personnes est TOUJOURS la priorité numéro un."
        },
        {
          type: "schema",
          titre: "De l'analyse au rapport actionnable",
          points: [
            "Étape 1 : revoir et comprendre les données",
            "Étape 2 : déterminer l'impact business, se demander « et alors ? »",
            "Étape 3 : déterminer ce qui est actionnable",
            "Une liste brute de vulnérabilités n'a aucune valeur pour les dirigeants sans contexte"
          ],
          schema: {
            type: "flow",
            items: [
              "Comprendre les données",
              "Évaluer l'impact business",
              "Identifier l'actionnable",
              "Rédiger le rapport"
            ]
          },
          narration:
            "Analyser les résultats de tests, c'est passer logiquement des faits à de l'information actionnable. D'abord, revoir et comprendre les données. Ensuite, déterminer l'impact business de ces faits, en se posant systématiquement la question : et alors ? Enfin, déterminer ce qui est actionnable, car l'analyse n'a de valeur que si elle débouche sur des actions. Une liste de vulnérabilités et d'exceptions de politique n'a que peu de valeur pour des dirigeants si elle n'est pas mise en contexte. C'est seulement après cette analyse qu'on rédige le rapport officiel, et les tâches de remédiation sont suivies dans un Plan of Action and Milestones, le POA&M."
        },
        {
          type: "standard",
          titre: "Remédiation, exceptions et divulgation éthique",
          points: [
            "La plupart des vulnérabilités viennent de mauvaises configurations, politiques inadaptées, processus défaillants ou personnel non sensibilisé",
            "La remédiation implique toutes les parties prenantes, pas seulement l'IT",
            "Vulnérabilité non corrigeable : compensating controls, documentation de l'exception, réexamen",
            "Ethical disclosure : signaler au vendeur en privé, délai raisonnable, puis divulgation publique si rien n'est corrigé"
          ],
          narration:
            "Contrairement à l'intuition, la plupart des vulnérabilités des organisations ne viennent pas de défauts logiciels, mais de systèmes mal configurés, de politiques inadaptées, de processus métier défaillants ou de personnel non sensibilisé. La remédiation doit donc impliquer toutes les parties prenantes, pas seulement l'informatique. Quand une vulnérabilité ne peut pas être corrigée à temps, par exemple un dispositif médical qui nécessiterait une nouvelle accréditation, on met en place des compensating controls comme la micro-segmentation ou des restrictions d'accès, on documente l'exception et la décision, et on la réexamine régulièrement. Enfin, la divulgation éthique : un professionnel qui découvre une vulnérabilité doit la signaler au vendeur en privé, en lui laissant un délai raisonnable pour corriger ; si rien n'est fait, la divulgation publique devient légitime pour que les autres professionnels puissent décider en connaissance de cause."
        },
        {
          type: "question",
          titre: "Dernière vérification",
          q: "Un dirigeant demande un indicateur qui l'aide à anticiper l'évolution FUTURE de l'exposition au risque de l'organisation. QUE devriez-vous lui proposer ?",
          choix: [
            "Un KPI comme le nombre de vulnérabilités résolues le trimestre dernier",
            "Un KRI comme le pourcentage de systèmes exécutant des logiciels en fin de support",
            "Le nombre de findings du dernier audit interne",
            "Le taux de disponibilité des systèmes sur l'année écoulée"
          ],
          reponse: 1,
          explication:
            "Les KRI, Key Risk Indicators, sont orientés vers le futur : ils indiquent le niveau d'exposition au risque opérationnel et aident à anticiper les risques émergents, comme la proportion de systèmes EOL. Les trois autres propositions sont des mesures rétrospectives de performance, donc des KPI, orientés vers le passé.",
          narration:
            "Une dernière question pour ancrer la distinction entre indicateurs de performance et indicateurs de risque."
        },
        {
          type: "resume",
          titre: "Ce qu'il faut retenir",
          points: [
            "SIEM : agrégation, normalisation, corrélation ; logs protégés, archivés en lecture seule, horloges NTP",
            "Revues de comptes : complètes pour les privilèges, échantillonnage aléatoire sinon ; PDCA, le Check est l'assessment",
            "KPI regarde le passé, KRI regarde le futur ; vérifier les sauvegardes par restauration réelle",
            "Tester périodiquement DR et BC ; la vie humaine d'abord",
            "Rapport : des faits à l'actionnable ; remédiation avec toutes les parties prenantes ; compensating controls et ethical disclosure"
          ],
          narration:
            "Terminons ce domaine. Le SIEM centralise et corrèle les logs, qui doivent être protégés, archivés en lecture seule et horodatés grâce à NTP. Les revues de comptes et de direction bouclent le cycle Plan-Do-Check-Act. Les KPI mesurent la performance passée, les KRI anticipent le risque futur, et les sauvegardes ne sont prouvées que par une restauration réelle. Les plans de continuité et de reprise se testent périodiquement, avec la vie humaine comme priorité absolue. Enfin, l'analyse transforme les faits en actions, la remédiation mobilise toutes les parties prenantes, et face à l'incorrigeable, on compense, on documente et on divulgue de manière éthique."
        }
      ]
    }
  ],
  quiz: [
    {
      q: "Quel est le PRINCIPAL livrable d'un security assessment ?",
      choix: [
        "Une liste technique exhaustive des vulnérabilités détectées",
        "Un rapport d'évaluation destiné au management, en langage non technique, avec des recommandations",
        "Un ticket de remédiation pour chaque faille trouvée",
        "Une certification de conformité réglementaire"
      ],
      reponse: 1,
      explication:
        "Le produit principal d'un security assessment est un rapport adressé au management, rédigé en langage non technique, qui présente les résultats et se conclut par des recommandations d'amélioration. Une liste brute de vulnérabilités (A) n'a que peu de valeur sans contexte, les tickets (C) relèvent de la remédiation opérationnelle, et un assessment ne délivre pas de certification (D).",
      difficulte: 1
    },
    {
      q: "Une société cotée souhaite rassurer ses investisseurs sur ses contrôles. Quel type d'audit offre la PLUS grande validité externe ?",
      choix: [
        "Un audit interne mené par l'équipe sécurité",
        "Une auto-évaluation documentée par le RSSI",
        "Un audit externe mené par un cabinet indépendant",
        "Une revue par les pairs entre départements"
      ],
      reponse: 2,
      explication:
        "Un audit externe réalisé par un cabinet indépendant offre une forte validité externe car les auditeurs n'ont théoriquement aucun conflit d'intérêt avec l'organisation ; ces audits sont généralement acceptés par les investisseurs et les organes de gouvernance. Les audits internes (A), auto-évaluations (B) et revues entre pairs (D) souffrent de conflits d'intérêts potentiels.",
      difficulte: 1
    },
    {
      q: "Quelle est la différence FONDAMENTALE entre un rapport SOC 2 Type I et Type II ?",
      choix: [
        "Le Type I couvre la sécurité, le Type II couvre la vie privée",
        "Le Type I évalue la conception des contrôles à un instant donné, le Type II évalue aussi leur efficacité opérationnelle sur une période étendue",
        "Le Type I est public, le Type II est confidentiel",
        "Le Type I est réalisé en interne, le Type II par un tiers"
      ],
      reponse: 1,
      explication:
        "Le Type I donne l'opinion de l'auditeur sur la description du management et la pertinence de la conception des contrôles à un instant donné. Le Type II confirme en plus que les contrôles fonctionnent effectivement, sur une période d'au moins six mois. La distinction ne porte ni sur le périmètre sécurité/vie privée (A), ni sur la diffusion (C, c'est SOC 3 qui est public), ni sur l'auteur de l'audit (D).",
      difficulte: 2
    },
    {
      q: "Un client potentiel demande une preuve publique de la qualité des contrôles de sécurité de votre fournisseur SaaS, sans NDA. Quel rapport est conçu pour cet usage ?",
      choix: ["SOC 1 Type II", "SOC 2 Type II", "SOC 3", "Rapport ISAE 3402 Type I"],
      reponse: 2,
      explication:
        "Le SOC 3 évalue les contrôles de sécurité et de vie privée et ses résultats sont destinés à une divulgation publique ; il sert essentiellement d'outil marketing. Le SOC 2 (B) est confidentiel et partagé sous NDA, le SOC 1 (A) concerne le reporting financier, et l'ISAE 3402 (D) est l'équivalent international du SSAE 18, pas un rapport public.",
      difficulte: 2
    },
    {
      q: "Quel standard américain encadre les audits des organisations de services (audits SOC) ?",
      choix: ["NIST 800-115", "SSAE 18", "ISO 27001", "PCI DSS"],
      reponse: 1,
      explication:
        "Le SSAE 18 (Standards for Attestation Engagements 18) fournit le standard commun pour les auditeurs évaluant les organisations de services ; son équivalent international est l'ISAE 3402. NIST 800-115 (A) est un guide de test technique de sécurité, ISO 27001 (C) est un standard de système de management, et PCI DSS (D) concerne les données de cartes de paiement.",
      difficulte: 2
    },
    {
      q: "Lors d'une évaluation de vulnérabilités SANS test d'intrusion, quelle étape ne devrait PAS être réalisée ?",
      choix: [
        "La reconnaissance passive",
        "L'énumération des adresses et ports",
        "L'exploitation des vulnérabilités identifiées",
        "La documentation des findings"
      ],
      reponse: 2,
      explication:
        "L'étape d'exécution, c'est-à-dire la tentative d'exploitation des vulnérabilités, ne s'applique que dans le cadre d'un penetration test. Une évaluation de vulnérabilités comprend la reconnaissance (A), l'énumération (B), l'analyse des vulnérabilités et la documentation des findings (D), mais n'exploite jamais les failles.",
      difficulte: 1
    },
    {
      q: "Quel composant SCAP fournit un système de NOMMAGE des vulnérabilités de sécurité ?",
      choix: ["CVSS", "CVE", "XCCDF", "CCE"],
      reponse: 1,
      explication:
        "CVE (Common Vulnerabilities and Exposures) fournit le système de nommage des vulnérabilités. CVSS (A) fournit le score de sévérité, XCCDF (C) est un langage de description de checklists de sécurité, et CCE (D) nomme les problèmes de configuration système.",
      difficulte: 1
    },
    {
      q: "Un analyste veut réduire les faux positifs de ses scans et obtenir une vision plus profonde des configurations des serveurs. QUELLE approche est la MEILLEURE ?",
      choix: [
        "Augmenter la fréquence des scans réseau non authentifiés",
        "Réaliser des scans authentifiés avec un compte en lecture seule",
        "Passer à un scan de découverte réseau",
        "Lancer un test d'intrusion black box"
      ],
      reponse: 1,
      explication:
        "Un scan authentifié (credentialed) utilise des identifiants valides pour accéder aux couches profondes du système, lire les fichiers de configuration et produire une évaluation plus précise ; la bonne pratique est un compte en lecture seule. Multiplier les scans non authentifiés (A) ne réduit pas les faux positifs, un scan de découverte (C) ne fait que cartographier, et un pen test black box (D) ne répond pas au besoin de précision de configuration.",
      difficulte: 2
    },
    {
      q: "Quelle est la PRINCIPALE différence entre un vulnerability assessment et un penetration test ?",
      choix: [
        "Le vulnerability assessment est toujours réalisé par des tiers",
        "Le penetration test tente réellement d'exploiter les vulnérabilités, pas le vulnerability assessment",
        "Le penetration test est entièrement automatisé",
        "Le vulnerability assessment ne produit pas de rapport"
      ],
      reponse: 1,
      explication:
        "Les évaluations de vulnérabilités sont généralement plus automatisées, rapides, et ne tentent jamais d'exploiter les failles ; le pen test, lui, tente activement de contourner les défenses. Le vulnerability assessment peut être interne (A), le pen test combine outils manuels et automatisés (C), et les deux produisent des rapports (D).",
      difficulte: 1
    },
    {
      q: "Avant de démarrer un test d'intrusion, quelle action est la PLUS importante pour protéger juridiquement les testeurs et l'organisation ?",
      choix: [
        "Installer les outils d'exploitation sur un poste dédié",
        "Obtenir un accord écrit sur le périmètre et les Rules of Engagement, avec autorisation explicite du management",
        "Effectuer une sauvegarde complète des systèmes cibles",
        "Informer tous les employés de la date du test"
      ],
      reponse: 1,
      explication:
        "La phase de planning du processus NIST inclut l'accord sur le périmètre et les Rules of Engagement, garantissant que le test est explicitement autorisé ; c'est ce qui distingue le test légal du piratage et établit les limites de responsabilité. Les sauvegardes (C) sont prudentes mais secondaires, prévenir tous les employés (D) fausserait certains tests, et l'outillage (A) est une considération technique.",
      difficulte: 2
    },
    {
      q: "Dans quel type de test d'intrusion le testeur dispose-t-il du code source et travaille-t-il dans une perspective de développeur ?",
      choix: ["Black box", "Gray box", "White box", "Double-blind"],
      reponse: 2,
      explication:
        "Le white-box test, ou known environment test, fournit une information détaillée incluant l'accès au code source ; le testeur travaille dans une perspective développeur, ce qui raccourcit le test en éliminant la reconnaissance. Le black box (A) ne fournit aucune information, le gray box (B) une connaissance partielle avec une perspective utilisateur, et le double-blind n'est pas la réponse attendue ici.",
      difficulte: 1
    },
    {
      q: "Quelle affirmation décrit CORRECTEMENT la purple team ?",
      choix: [
        "Une équipe indépendante chargée d'arbitrer les exercices",
        "L'équipe qui gère la réponse aux incidents pendant l'attaque",
        "La collaboration et le partage d'informations entre la red team et la blue team",
        "Une équipe externe de pen testeurs certifiés"
      ],
      reponse: 2,
      explication:
        "La purple team n'est pas une équipe distincte : elle représente la collaboration entre la red team (offensive) et la blue team (défensive), avec partage d'informations et compétition saine. Les réponses A, B et D décrivent respectivement un rôle inexistant dans ce modèle, une mission de la blue team, et un prestataire externe.",
      difficulte: 1
    },
    {
      q: "Parmi les activités suivantes, laquelle relève de la BLUE team ?",
      choix: [
        "Social engineering",
        "Threat intelligence offensive",
        "Digital forensics et incident response",
        "Exploitation de vulnérabilités web"
      ],
      reponse: 2,
      explication:
        "La blue team est l'équipe défensive : surveillance de sécurité, réponse aux incidents, investigation numérique (forensics) et opérations de sécurité. Le social engineering (A), la threat intelligence offensive (B) et l'exploitation (D) relèvent de la red team.",
      difficulte: 1
    },
    {
      q: "Quel est l'objectif PRINCIPAL d'une plateforme de Breach and Attack Simulation (BAS) ?",
      choix: [
        "Remplacer entièrement les pen testeurs humains",
        "Automatiser l'injection d'indicateurs de menace pour vérifier que les contrôles de détection et de prévention réagissent",
        "Former les développeurs au codage sécurisé",
        "Générer les rapports de conformité PCI DSS"
      ],
      reponse: 1,
      explication:
        "Une plateforme BAS combine techniques red et blue avec de l'automatisation pour simuler des menaces avancées : elle injecte des indicateurs de menace (par exemple un fichier suspect sur un serveur) afin de vérifier que les contrôles détectent et bloquent l'activité. Elle automatise certains aspects du pen testing mais ne remplace pas les testeurs humains (A) ; la formation (C) et la conformité (D) ne sont pas son objet.",
      difficulte: 2
    },
    {
      q: "Un auditeur veut vérifier que les journaux d'événements de sources multiples peuvent être corrélés sur une chronologie cohérente. QUE doit-il vérifier EN PREMIER ?",
      choix: [
        "Que les logs sont compressés avant archivage",
        "Que tous les systèmes et le SIEM sont synchronisés via NTP",
        "Que les logs sont dupliqués sur deux SIEM différents",
        "Que les administrateurs revoient les logs chaque jour"
      ],
      reponse: 1,
      explication:
        "La synchronisation des horloges via NTP (Network Time Protocol), sur les systèmes émetteurs comme sur le SIEM, est indispensable pour que les informations de sources multiples s'alignent sur une chronologie cohérente. La compression (A), la redondance (C) et la fréquence de revue (D) ne résolvent pas le problème d'horodatage.",
      difficulte: 2
    },
    {
      q: "Comment les logs archivés devraient-ils être protégés contre la modification ?",
      choix: [
        "En les chiffrant avec la clé publique de l'administrateur",
        "En les stockant sur le poste de chaque administrateur",
        "En les centralisant, en restreignant l'accès par permissions et en les passant en lecture seule",
        "En les supprimant après chaque revue"
      ],
      reponse: 2,
      explication:
        "Les logs doivent être stockés de manière centralisée, protégés par des permissions restrictives, et les archives placées en lecture seule pour prévenir toute modification. Le chiffrement seul (A) ne gère pas l'intégrité d'accès de bout en bout, le stockage décentralisé (B) affaiblit la protection, et la suppression (D) détruit la preuve.",
      difficulte: 1
    },
    {
      q: "Quel processus de revue de code est le PLUS formel ?",
      choix: [
        "Le pair programming",
        "La revue par pull request",
        "L'inspection Fagan",
        "La revue à la demande (over-the-shoulder)"
      ],
      reponse: 2,
      explication:
        "L'inspection Fagan est le processus de revue de code le plus formel, en six étapes : planning, overview, preparation, inspection, rework et follow-up, avec des critères d'entrée et de sortie pour chaque étape. Le pair programming (A), les pull requests (B) et les revues informelles (D) sont des formes moins formelles de peer review.",
      difficulte: 2
    },
    {
      q: "Votre équipe sécurité doit évaluer une application métier achetée à un éditeur, sans accès au code source. Quelle technique est généralement la SEULE option ?",
      choix: ["SAST", "DAST", "Inspection Fagan", "Statement coverage analysis"],
      reponse: 1,
      explication:
        "Le DAST (Dynamic Application Security Testing) évalue la sécurité du logiciel dans un environnement d'exécution et constitue souvent la seule option pour les organisations qui déploient des applications écrites par des tiers. Le SAST (A), l'inspection Fagan (C) et l'analyse de couverture (D) requièrent l'accès au code source.",
      difficulte: 1
    },
    {
      q: "Quelle technique de test combine des éléments de SAST et de DAST en analysant le code pendant l'exécution, depuis l'intérieur de l'application ?",
      choix: ["Fuzzing générationnel", "IAST", "Misuse case testing", "RUM"],
      reponse: 1,
      explication:
        "L'IAST (Interactive Application Security Testing) combine SAST et DAST en instrumentant l'application pour analyser le code à l'exécution depuis l'intérieur, ce qui fournit des résultats plus précis. Le fuzzing (A) soumet des entrées inattendues, le misuse case testing (C) adopte le point de vue de l'attaquant, et le RUM (D) est du monitoring passif d'utilisateurs réels.",
      difficulte: 2
    },
    {
      q: "Quelle est la différence entre mutation fuzzing et generational fuzzing ?",
      choix: [
        "Le mutation fuzzing modifie des entrées connues ; le generational fuzzing crée des entrées à partir de modèles des entrées attendues",
        "Le mutation fuzzing modifie le code source ; le generational fuzzing modifie les données",
        "Le mutation fuzzing est manuel ; le generational fuzzing est automatisé",
        "Ils sont identiques, seuls les outils diffèrent"
      ],
      reponse: 0,
      explication:
        "Le mutation fuzzing (dit dumb) modifie des entrées connues pour générer des entrées synthétiques susceptibles de déclencher un comportement inattendu ; le generational fuzzing (dit intelligent) développe des entrées à partir de modèles décrivant les entrées attendues du programme. Attention au piège (B) : c'est le mutation testing, et non le mutation fuzzing, qui modifie le programme lui-même.",
      difficulte: 3
    },
    {
      q: "Un testeur vérifie que chaque instruction IF du code a été exécutée à la fois sous sa condition vraie et sa condition fausse. Quel critère de couverture applique-t-il ?",
      choix: ["Statement coverage", "Branch coverage", "Loop coverage", "Functional coverage"],
      reponse: 1,
      explication:
        "La branch coverage vérifie que chaque instruction conditionnelle a été exécutée sous toutes ses branches, IF et ELSE. La statement coverage (A) vérifie que chaque ligne a été exécutée, la loop coverage (C) que chaque boucle a été exécutée zéro, une et plusieurs fois, et la functional coverage (D) que chaque fonction a été appelée et a retourné un résultat.",
      difficulte: 2
    },
    {
      q: "Quelle technique de monitoring est PASSIVE et idéale pour identifier les problèmes réellement rencontrés par les utilisateurs ?",
      choix: [
        "Synthetic monitoring",
        "Transactions synthétiques scriptées",
        "Real User Monitoring (RUM)",
        "Breach and attack simulation"
      ],
      reponse: 2,
      explication:
        "Le RUM (Real User Monitoring) observe et enregistre passivement les interactions des utilisateurs réels avec l'application, ce qui le rend idéal pour identifier les problèmes concrets des utilisateurs. Le monitoring synthétique (A) et les transactions scriptées (B) sont des techniques actives à résultats attendus connus, et la BAS (D) simule des attaques.",
      difficulte: 2
    },
    {
      q: "Pourquoi les interfaces PHYSIQUES méritent-elles une attention particulière lors des tests d'interface ?",
      choix: [
        "Elles sont plus faciles à tester que les API",
        "Leur défaillance peut avoir des conséquences graves lorsqu'elles pilotent des machines ou des automates",
        "Elles sont toujours exposées à Internet",
        "Elles ne peuvent pas être testées automatiquement"
      ],
      reponse: 1,
      explication:
        "Les interfaces physiques existent dans les applications qui manipulent des machines, des automates programmables ou d'autres objets ; les testeurs doivent y porter une attention particulière en raison des conséquences potentielles (sécurité des personnes, dégâts matériels) en cas de défaillance. Les autres affirmations sont fausses ou hors sujet.",
      difficulte: 2
    },
    {
      q: "Une organisation n'a pas le temps de réviser tous les comptes utilisateurs. QUELLE approche est acceptable pour la revue de gestion des comptes ?",
      choix: [
        "Ne réviser que les comptes créés le mois dernier",
        "Utiliser un échantillonnage, à condition qu'il soit véritablement aléatoire, et réviser en totalité les comptes hautement privilégiés",
        "Demander à chaque manager de confirmer verbalement les accès de son équipe",
        "Reporter la revue à l'audit externe annuel"
      ],
      reponse: 1,
      explication:
        "Une revue complète est chronophage et souvent réservée aux comptes hautement privilégiés ; pour les autres, l'échantillonnage est acceptable seulement s'il est réellement aléatoire. Réviser uniquement les comptes récents (A) ou se contenter de confirmations verbales (C) ne détecte pas les dérives, et reporter (D) laisse la fenêtre d'exposition ouverte.",
      difficulte: 2
    },
    {
      q: "Dans la boucle Plan-Do-Check-Act appliquée à un ISMS, à quelle phase correspond l'évaluation et les tests de sécurité ?",
      choix: ["Plan", "Do", "Check", "Act"],
      reponse: 2,
      explication:
        "Dans le modèle PDCA des normes ISO 9000, le Plan fixe les objectifs et les politiques, le Do correspond aux opérations de sécurité, le Check correspond précisément à l'évaluation et aux tests de sécurité (l'objet du domaine 6), et le Act est la revue formelle de direction.",
      difficulte: 2
    },
    {
      q: "Lequel des indicateurs suivants est un KRI plutôt qu'un KPI ?",
      choix: [
        "Le temps moyen de résolution des vulnérabilités le trimestre dernier",
        "Le nombre de comptes compromis l'an passé",
        "Le pourcentage de fournisseurs tiers sans évaluation de sécurité à jour",
        "Le nombre de findings récurrents du dernier audit"
      ],
      reponse: 2,
      explication:
        "Les KRI sont orientés vers le futur et signalent l'exposition au risque : la proportion de fournisseurs sans assessment récent indique un risque émergent. Les trois autres mesures regardent la performance passée du programme : ce sont des KPI, backward looking.",
      difficulte: 3
    },
    {
      q: "Quelle est la MEILLEURE façon de vérifier qu'un processus de sauvegarde protège réellement les données de l'organisation ?",
      choix: [
        "Vérifier que la tâche de sauvegarde se termine sans code d'erreur",
        "Demander périodiquement une restauration réelle d'un système ou d'un fichier",
        "Consulter le contrat du fournisseur de sauvegarde",
        "Chiffrer les supports de sauvegarde"
      ],
      reponse: 1,
      explication:
        "Les managers doivent inspecter périodiquement les résultats des sauvegardes, et la vérification la plus probante est de demander une restauration réelle : c'est la seule preuve que les données sont récupérables. Un code de retour sans erreur (A) ne garantit pas la restaurabilité, le contrat (C) ne prouve rien techniquement, et le chiffrement (D) protège la confidentialité, pas la capacité de restauration.",
      difficulte: 1
    },
    {
      q: "Comment une organisation devrait-elle MESURER l'efficacité de son programme de sensibilisation à la sécurité ?",
      choix: [
        "En comptant le nombre d'heures de formation dispensées",
        "En suivant des métriques comme l'évolution du taux de clic aux simulations de phishing",
        "En vérifiant que chaque employé a signé la politique de sécurité",
        "En comparant son budget formation à celui des concurrents"
      ],
      reponse: 1,
      explication:
        "Les simulations de phishing permettent d'évaluer l'efficacité réelle du programme de sensibilisation, et il faut la mesurer par des métriques comme l'évolution du taux de clic dans le temps. Les heures dispensées (A), les signatures (C) et le budget (D) mesurent l'effort ou la conformité, pas l'efficacité comportementale.",
      difficulte: 2
    },
    {
      q: "Pendant un exercice de reprise après sinistre, un incendie se déclare dans le centre de repli. QUELLE doit être la PREMIÈRE priorité ?",
      choix: [
        "Sauvegarder les serveurs critiques du site",
        "La protection de la vie des personnes présentes",
        "Notifier l'assureur de l'organisation",
        "Basculer les services vers le site principal"
      ],
      reponse: 1,
      explication:
        "La protection de la vie humaine est d'une importance absolue et doit toujours être traitée en premier, avant toute tentative de sauver des biens matériels ou des systèmes. C'est un réflexe d'examen : dans toute question DR/BC, la sécurité des personnes prime.",
      difficulte: 1
    },
    {
      q: "Un scanner détecte une vulnérabilité critique sur un dispositif médical qui ne peut pas être patché sans une longue ré-accréditation. QUE devriez-vous faire ?",
      choix: [
        "Patcher immédiatement malgré l'absence d'accréditation",
        "Ignorer la vulnérabilité jusqu'à la prochaine accréditation",
        "Mettre en place des compensating controls (micro-segmentation, restrictions d'accès, monitoring), documenter l'exception et la réexaminer périodiquement",
        "Déconnecter définitivement le dispositif du réseau"
      ],
      reponse: 2,
      explication:
        "Quand une vulnérabilité ne peut pas être corrigée à temps, la bonne démarche est d'implémenter des compensating controls, de documenter l'exception et la décision, puis de la réexaminer régulièrement. Patcher sans accréditation (A) crée un risque réglementaire et de sécurité des patients, ignorer (B) laisse le risque sans traitement, et la déconnexion définitive (D) peut compromettre les soins.",
      difficulte: 3
    },
    {
      q: "Un chercheur en sécurité découvre une vulnérabilité inconnue dans un produit commercial. Selon le principe d'ethical disclosure, QUE doit-il faire EN PREMIER ?",
      choix: [
        "Publier immédiatement les détails pour alerter la communauté",
        "Vendre l'information sur un marché de vulnérabilités",
        "Notifier le vendeur en privé et lui laisser un délai raisonnable pour corriger",
        "Exploiter la faille pour en démontrer l'impact"
      ],
      reponse: 2,
      explication:
        "La divulgation éthique impose de signaler la vulnérabilité au vendeur de manière privée, en lui laissant un délai raisonnable pour la corriger. Ce n'est que si le vendeur ne corrige pas que la divulgation publique devient légitime, afin que les professionnels puissent décider en connaissance de cause. La publication immédiate (A), la vente (B) et l'exploitation (D) sont contraires à l'éthique.",
      difficulte: 2
    },
    {
      q: "D'où proviennent la MAJORITÉ des vulnérabilités dans une organisation moyenne ?",
      choix: [
        "De défauts dans les logiciels commerciaux",
        "De systèmes mal configurés, de politiques inadaptées, de processus métier défaillants et de personnel non sensibilisé",
        "D'attaques zero-day sophistiquées",
        "De défaillances matérielles"
      ],
      reponse: 1,
      explication:
        "Plutôt que des défauts logiciels, la plupart des vulnérabilités des organisations moyennes proviennent de systèmes mal configurés, de politiques inadéquates, de processus métier peu sûrs ou de personnel insuffisamment sensibilisé. C'est pourquoi la remédiation doit impliquer toutes les parties prenantes, pas seulement l'IT.",
      difficulte: 2
    },
    {
      q: "Lors de l'analyse des résultats de tests pour le rapport final, quelle question permet de déterminer l'impact business d'un finding ?",
      choix: [
        "« Quel outil a détecté cette faille ? »",
        "« Et alors ? » (so what?)",
        "« Qui est responsable de cette erreur ? »",
        "« Combien de temps a duré le scan ? »"
      ],
      reponse: 1,
      explication:
        "L'analyse doit progresser logiquement des faits vers l'information actionnable : après avoir compris les données, on détermine l'impact business en se demandant « et alors ? », puis on identifie ce qui est actionnable. Les questions d'outillage (A, D) sont techniques, et la recherche de coupables (C) n'apporte pas de valeur au rapport.",
      difficulte: 2
    },
    {
      q: "Quel est un AVANTAGE d'une équipe d'audit interne par rapport à un auditeur tiers ?",
      choix: [
        "Une plus grande indépendance vis-à-vis de la politique interne",
        "Une expérience plus large de nombreux types d'organisations",
        "La connaissance de l'environnement interne, qui réduit le temps d'audit et permet une plus grande agilité",
        "Une meilleure acceptabilité par les régulateurs"
      ],
      reponse: 2,
      explication:
        "L'équipe interne connaît l'environnement, ce qui réduit le temps nécessaire, permet d'explorer tous les recoins des systèmes grâce à la connaissance d'initié, et offre de l'agilité pour replanifier rapidement. En revanche, l'indépendance (A), la largeur d'expérience (B) et l'acceptabilité réglementaire (D) sont des avantages des auditeurs tiers.",
      difficulte: 2
    },
    {
      q: "Un partenaire commercial exige de conduire un audit chez vous dans le cadre de votre contrat. Comment cet audit devrait-il être délimité ?",
      choix: [
        "Il doit couvrir l'ensemble du système d'information",
        "Il doit être limité aux obligations contractuelles entre les deux organisations",
        "Il doit couvrir les mêmes éléments que le dernier audit interne",
        "Le partenaire décide librement du périmètre sans limite"
      ],
      reponse: 1,
      explication:
        "Un audit externe (parfois appelé second-party audit) conduit par ou pour un partenaire commercial est lié au contrat : par définition, son périmètre doit se limiter aux obligations contractuelles de l'organisation. Ouvrir tout le SI (A, D) excède le besoin et crée des risques de confidentialité ; aligner sur l'audit interne (C) n'a pas de fondement contractuel.",
      difficulte: 3
    },
    {
      q: "Lors d'un scan de découverte, nmap rapporte un port en état « filtered ». Que devez-vous en conclure ?",
      choix: [
        "Aucun service n'écoute sur ce port",
        "Un service écoute et accepte les connexions",
        "Un firewall ou un filtre empêche le scanner de déterminer l'état du port",
        "Le port est ouvert mais le service est en panne"
      ],
      reponse: 2,
      explication:
        "Filtered signifie que les sondes du scanner sont interceptées par un dispositif de filtrage (firewall, ACL) et qu'aucune réponse exploitable ne revient : le scanner ne peut pas conclure. Closed (A) signifie que le port répond mais qu'aucun service n'écoute ; open (B) signifie qu'un service accepte les connexions ; l'option D ne correspond à aucun état nmap.",
      difficulte: 2
    },
    {
      q: "Un testeur souhaite identifier les ports TCP ouverts d'un serveur en restant le PLUS discret possible, sans établir de connexion complète. Quelle technique devrait-il utiliser ?",
      choix: [
        "TCP connect scan",
        "TCP SYN scan (half-open)",
        "UDP scan",
        "Banner grabbing"
      ],
      reponse: 1,
      explication:
        "Le SYN scan, dit half-open, envoie un SYN, interprète le SYN/ACK comme un port ouvert puis répond par un RST : la connexion n'est jamais complétée, ce qui le rend plus rapide et plus discret. Le connect scan établit le handshake complet et est journalisé par la cible ; le scan UDP ne concerne pas les ports TCP ; le banner grabbing identifie les versions de services déjà découverts, il ne recense pas les ports.",
      difficulte: 2
    },
    {
      q: "Un analyste veut représenter une intrusion en reliant l'adversaire, ses capacités, son infrastructure et la victime. Quel modèle d'analyse devrait-il utiliser ?",
      choix: [
        "La Cyber Kill Chain de Lockheed Martin",
        "Le Diamond Model of Intrusion Analysis",
        "La matrice MITRE ATT&CK",
        "Le modèle STRIDE"
      ],
      reponse: 1,
      explication:
        "Le Diamond Model of Intrusion Analysis analyse chaque événement d'intrusion selon quatre sommets reliés : adversary, capability, infrastructure et victim. La Kill Chain décrit les étapes séquentielles d'une attaque, ATT&CK catalogue les tactiques et techniques observées, et STRIDE est un modèle de threat modeling orienté catégories de menaces, pas d'analyse d'intrusion.",
      difficulte: 2
    }
  ],
  flashcards: [
    {
      recto: "Security Assessment",
      verso: "Revue complète de la sécurité d'un système ou environnement, menée par un professionnel ; livrable principal : un rapport pour le management en langage non technique avec des recommandations."
    },
    {
      recto: "Audit",
      verso: "Processus de revue d'un système pour vérifier sa conformité à un standard ou une baseline ; peut être formel et indépendant, ou informel et interne. Trois stratégies : interne, externe, tierce partie."
    },
    {
      recto: "SSAE 18 / ISAE 3402",
      verso: "Standards d'attestation (américain / international) encadrant les audits des organisations de services, appelés audits SOC (Service Organization Controls)."
    },
    {
      recto: "SOC 1 / SOC 2 / SOC 3",
      verso: "SOC 1 : contrôles impactant le reporting financier. SOC 2 : sécurité et vie privée selon les 5 Trust Services Criteria, confidentiel (NDA). SOC 3 : version destinée au public, outil marketing."
    },
    {
      recto: "SOC Type I vs Type II",
      verso: "Type I : opinion sur la conception des contrôles à un instant donné (revue documentaire). Type II : conception ET efficacité opérationnelle vérifiées sur au moins 6 mois ; beaucoup plus fiable."
    },
    {
      recto: "Trust Services Criteria (TSC)",
      verso: "Les cinq critères du SOC 2 : Security, Availability, Confidentiality, Processing Integrity, Privacy."
    },
    {
      recto: "Étapes d'un vulnerability assessment",
      verso: "Reconnaissance (passive) → Enumeration (découverte active) → Vulnerability Analysis → Execution (pen test uniquement) → Document Findings."
    },
    {
      recto: "SCAP",
      verso: "Security Content Automation Protocol (NIST 800-126) : cadre standardisant la communication des failles et configurations. Composants : CVE, CVSS, CCE, CPE, XCCDF, OVAL."
    },
    {
      recto: "CVE vs CVSS",
      verso: "CVE (Common Vulnerabilities and Exposures) : système de NOMMAGE des vulnérabilités. CVSS (Common Vulnerability Scoring System) : système de SCORE standardisé de leur sévérité."
    },
    {
      recto: "Authenticated scan (credentialed scan)",
      verso: "Scan de vulnérabilités utilisant des identifiants valides pour accéder aux couches profondes du système ; résultats plus précis, moins de faux positifs ; utilise souvent un compte read-only."
    },
    {
      recto: "États de ports : open / closed / filtered",
      verso: "Open : un service écoute et accepte les connexions. Closed : le port répond mais aucun service n'écoute. Filtered : un firewall ou filtre bloque les sondes, le scanner ne peut pas conclure. Techniques : TCP connect (handshake complet, bruyant), TCP SYN half-open (SYN → SYN/ACK → RST, discret), UDP (lent, peu fiable), banner grabbing (identifier logiciel et version)."
    },
    {
      recto: "Diamond Model of Intrusion Analysis",
      verso: "Modèle analysant chaque événement d'intrusion selon 4 sommets reliés : adversary (l'attaquant), capability (ses outils/techniques), infrastructure (ses moyens, C2), victim (la cible). Complémentaire de la Cyber Kill Chain (étapes séquentielles) et de MITRE ATT&CK (tactiques et techniques)."
    },
    {
      recto: "Les 4 phases NIST du penetration testing",
      verso: "Planning (périmètre, RoE, autorisation) → Information gathering and discovery → Attack (exploitation) → Reporting (résultats et recommandations)."
    },
    {
      recto: "Rules of Engagement (RoE)",
      verso: "Règles, contraintes et limites encadrant un pen test : périmètre, cibles autorisées, techniques permises, horaires, et limites de responsabilité pour les testeurs et le commanditaire."
    },
    {
      recto: "Black box / Gray box / White box",
      verso: "Black (unknown environment) : aucune information, simule un attaquant externe. Gray (partially known) : connaissance partielle, compromis coût-réalisme. White (known) : information détaillée et code source, test plus court et profond."
    },
    {
      recto: "Red / Blue / Purple team",
      verso: "Red : offensive (ethical hacking, pen test, social engineering). Blue : défensive (monitoring, incident response, forensics). Purple : pas une équipe distincte, mais la collaboration red + blue."
    },
    {
      recto: "Breach and Attack Simulation (BAS)",
      verso: "Plateforme automatisant des aspects du pen testing : injecte des indicateurs de menace sur systèmes et réseaux pour vérifier que les contrôles de détection et de prévention réagissent."
    },
    {
      recto: "SAST / DAST / IAST",
      verso: "SAST : analyse statique sans exécuter (code source ou compilé ; la code review en est un exemple). DAST : test à l'exécution, seule option sans code source. IAST : combine les deux, analyse à l'exécution depuis l'intérieur de l'application."
    },
    {
      recto: "Fagan inspection",
      verso: "Processus de revue de code le plus formel, en six étapes : planning, overview, preparation, inspection, rework, follow-up ; avec entry criteria et exit criteria."
    },
    {
      recto: "Fuzzing : mutation vs generational",
      verso: "Mutation (dumb) : modifie des entrées connues pour créer des entrées synthétiques. Generational (intelligent) : génère des entrées à partir de modèles des entrées attendues."
    },
    {
      recto: "Misuse case testing",
      verso: "AKA abuse case testing : tester du point de vue d'un acteur hostile ; on énumère les cas de mésusage connus puis on tente de les exploiter manuellement ou automatiquement."
    },
    {
      recto: "Test coverage et ses 5 critères",
      verso: "Test coverage = cas testés / cas totaux. Critères : branch (chaque IF/ELSE), condition (chaque test logique), functional (chaque fonction), loop (chaque boucle 0/1/n fois), statement (chaque ligne)."
    },
    {
      recto: "Synthetic monitoring vs RUM",
      verso: "Synthetic (actif) : transactions scriptées à résultats attendus connus, détecte les dérives de performance. RUM (Real User Monitoring, passif) : observe les utilisateurs réels, idéal pour les problèmes concrets."
    },
    {
      recto: "SIEM",
      verso: "Security Information and Event Management : collecte via syslog puis agrégation, normalisation, corrélation, stockage sécurisé, analyse et reporting des événements de sécurité."
    },
    {
      recto: "NTP (dans le contexte du logging)",
      verso: "Network Time Protocol : synchronise les horloges des systèmes émetteurs de logs et du SIEM afin de garantir une chronologie cohérente entre sources multiples."
    },
    {
      recto: "KPI vs KRI",
      verso: "KPI (Key Performance Indicator) : mesure la performance de l'ISMS par rapport aux objectifs, orienté PASSÉ. KRI (Key Risk Indicator) : indique l'exposition au risque opérationnel et les risques émergents, orienté FUTUR."
    },
    {
      recto: "Plan-Do-Check-Act (ISO 9000)",
      verso: "Plan : objectifs et politiques de l'ISMS. Do : opérations de sécurité. Check : évaluation et tests de sécurité (domaine 6). Act : revue formelle de direction."
    },
    {
      recto: "BC vs DR",
      verso: "Business Continuity : maintenir ou restaurer rapidement les processus vitaux après un incident grave. Disaster Recovery : sous-ensemble de la BC centré sur la restauration des systèmes d'information. Les deux plans doivent être testés périodiquement ; la vie humaine prime toujours."
    },
    {
      recto: "Compensating controls",
      verso: "Mesures palliant les faiblesses de contrôles existants ou l'impossibilité de satisfaire une exigence (ex. vulnérabilité non patchable) : micro-segmentation, restrictions d'accès, monitoring ; l'exception est documentée et réexaminée."
    },
    {
      recto: "Ethical disclosure",
      verso: "Responsabilité du professionnel découvrant une vulnérabilité : la signaler au vendeur en privé avec un délai raisonnable de correction ; divulgation publique justifiée seulement si rien n'est corrigé."
    },
    {
      recto: "POA&M",
      verso: "Plan of Action and Milestones : document identifiant les tâches de remédiation à accomplir, avec détails, ressources, jalons et dates cibles d'achèvement."
    },
    {
      recto: "Chaos Engineering",
      verso: "Discipline consistant à expérimenter sur un système en production pour bâtir la confiance dans sa capacité à résister à des conditions turbulentes ou inattendues."
    },
    {
      recto: "Judgement sampling vs statistical sampling",
      verso: "Judgement (purposive) : échantillonnage non probabiliste fondé sur le jugement de l'auditeur. Statistical : sélection de sous-ensembles visant à estimer les propriétés de la population totale ; l'échantillonnage des revues de comptes doit être véritablement aléatoire."
    },
    {
      recto: "Compliance checks / Compliance calendar",
      verso: "Les compliance checks vérifient que tous les contrôles du plan de conformité fonctionnent et satisfont les exigences réglementaires ; le compliance calendar suit les audits, évaluations, dépôts obligatoires et échéances de l'organisation."
    }
  ]
};
