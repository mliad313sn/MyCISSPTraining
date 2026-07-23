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
      difficulte: 1,
      pourquoi: [
        "Piège de la réponse de technicien : une liste brute de vulnérabilités sans contexte métier n'aide pas le management à décider.",
        "Le livrable principal d'un assessment est un rapport non technique destiné au management, conclu par des recommandations : c'est la finalité managériale de l'exercice.",
        "Trop étroit : les tickets relèvent de la remédiation opérationnelle qui suit le rapport, pas du livrable de l'assessment.",
        "Hors périmètre : un assessment formule une opinion et des recommandations, il ne délivre aucune certification de conformité."
      ]
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
      difficulte: 1,
      pourquoi: [
        "Techniquement utile mais sans validité externe : les auditeurs internes appartiennent à l'organisation qu'ils évaluent.",
        "Conflit d'intérêt maximal : le RSSI évaluerait son propre programme, sans aucune valeur probante pour des investisseurs.",
        "Un cabinet indépendant n'a théoriquement aucun conflit d'intérêt : c'est la forme d'assurance la plus crédible pour investisseurs et régulateurs.",
        "Une revue entre pairs reste interne : elle n'apporte pas l'indépendance qu'exige la validité externe."
      ]
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
      difficulte: 2,
      pourquoi: [
        "Confusion de périmètre : la distinction Type I/Type II porte sur la durée d'évaluation, pas sur sécurité contre vie privée.",
        "Exact : le Type I juge la conception à un instant donné, le Type II ajoute la preuve d'efficacité opérationnelle sur au moins six mois.",
        "Confusion avec le SOC 3 : c'est lui qui est public, ce n'est pas une différence entre Type I et Type II.",
        "Faux : les deux types sont réalisés par un auditeur indépendant ; seule la période observée diffère."
      ]
    },
    {
      q: "Un client potentiel demande une preuve publique de la qualité des contrôles de sécurité de votre fournisseur SaaS, sans NDA. Quel rapport est conçu pour cet usage ?",
      choix: ["SOC 1 Type II", "SOC 2 Type II", "SOC 3", "Rapport ISAE 3402 Type I"],
      reponse: 2,
      explication:
        "Le SOC 3 évalue les contrôles de sécurité et de vie privée et ses résultats sont destinés à une divulgation publique ; il sert essentiellement d'outil marketing. Le SOC 2 (B) est confidentiel et partagé sous NDA, le SOC 1 (A) concerne le reporting financier, et l'ISAE 3402 (D) est l'équivalent international du SSAE 18, pas un rapport public.",
      difficulte: 2,
      pourquoi: [
        "Hors sujet : le SOC 1 porte sur le reporting financier et se partage de manière restreinte.",
        "Techniquement le plus riche, mais contextuellement faux : le SOC 2 est confidentiel et exige un NDA, ce que l'énoncé exclut.",
        "Le SOC 3 est précisément conçu pour la diffusion publique sans NDA, comme outil de confiance commercial.",
        "L'ISAE 3402 est l'équivalent international du SSAE 18 pour des rapports restreints, pas un document public."
      ]
    },
    {
      q: "Quel standard américain encadre les audits des organisations de services (audits SOC) ?",
      choix: ["NIST 800-115", "SSAE 18", "ISO 27001", "PCI DSS"],
      reponse: 1,
      explication:
        "Le SSAE 18 (Standards for Attestation Engagements 18) fournit le standard commun pour les auditeurs évaluant les organisations de services ; son équivalent international est l'ISAE 3402. NIST 800-115 (A) est un guide de test technique de sécurité, ISO 27001 (C) est un standard de système de management, et PCI DSS (D) concerne les données de cartes de paiement.",
      difficulte: 2,
      pourquoi: [
        "Piège de proximité thématique : NIST 800-115 guide les tests techniques de sécurité, pas les attestations d'organisations de services.",
        "Le SSAE 18 est le standard américain d'attestation qui encadre les rapports SOC ; son pendant international est l'ISAE 3402.",
        "ISO 27001 certifie un système de management de la sécurité, ce n'est pas le cadre des audits SOC.",
        "PCI DSS est un standard sectoriel sur les données de cartes, sans lien avec les rapports SOC."
      ]
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
      difficulte: 1,
      pourquoi: [
        "La reconnaissance passive fait partie intégrante d'une évaluation de vulnérabilités.",
        "L'énumération des adresses, ports et services est une étape normale de l'évaluation.",
        "L'exploitation appartient exclusivement au penetration test : une évaluation de vulnérabilités s'arrête à l'identification et à l'analyse.",
        "La documentation des findings est le livrable attendu de toute évaluation."
      ]
    },
    {
      q: "Quel composant SCAP fournit un système de NOMMAGE des vulnérabilités de sécurité ?",
      choix: ["CVSS", "CVE", "XCCDF", "CCE"],
      reponse: 1,
      explication:
        "CVE (Common Vulnerabilities and Exposures) fournit le système de nommage des vulnérabilités. CVSS (A) fournit le score de sévérité, XCCDF (C) est un langage de description de checklists de sécurité, et CCE (D) nomme les problèmes de configuration système.",
      difficulte: 1,
      pourquoi: [
        "Piège de la famille SCAP : CVSS attribue un score de sévérité, il ne nomme pas les vulnérabilités.",
        "CVE fournit l'identifiant unique et le nommage standardisé des vulnérabilités publiques.",
        "XCCDF est un langage de description de checklists de configuration, pas un nommage de vulnérabilités.",
        "CCE nomme les problèmes de configuration système, pas les vulnérabilités logicielles."
      ]
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
      difficulte: 2,
      pourquoi: [
        "Multiplier des scans identiques produit plus vite les mêmes faux positifs : la fréquence ne change pas la profondeur.",
        "Le scan authentifié lit la configuration réelle depuis l'intérieur, ce qui réduit les faux positifs ; le compte en lecture seule limite le risque induit.",
        "Trop étroit : un scan de découverte se contente de cartographier les hôtes, sans analyser les configurations.",
        "Disproportionné et hors besoin : un pentest black box part sans information interne, à l'opposé de la précision de configuration recherchée."
      ]
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
      difficulte: 1,
      pourquoi: [
        "Absolu et faux : une évaluation de vulnérabilités peut parfaitement être menée en interne.",
        "C'est la frontière essentielle : le pentest tente réellement l'exploitation, l'évaluation de vulnérabilités s'arrête avant.",
        "Faux : le pentest combine outillage automatisé et expertise manuelle.",
        "Faux : les deux exercices produisent un rapport."
      ]
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
      difficulte: 2,
      pourquoi: [
        "Détail logistique de technicien, sans effet sur la protection juridique.",
        "L'autorisation écrite du management et les Rules of Engagement distinguent légalement le test du piratage : c'est la protection juridique première des deux parties.",
        "Techniquement prudent mais secondaire : une sauvegarde ne confère aucune autorisation légale.",
        "Contre-productif : prévenir tout le monde fausserait les tests de détection, sans protéger juridiquement personne."
      ]
    },
    {
      q: "Dans quel type de test d'intrusion le testeur dispose-t-il du code source et travaille-t-il dans une perspective de développeur ?",
      choix: ["Black box", "Gray box", "White box", "Double-blind"],
      reponse: 2,
      explication:
        "Le white-box test, ou known environment test, fournit une information détaillée incluant l'accès au code source ; le testeur travaille dans une perspective développeur, ce qui raccourcit le test en éliminant la reconnaissance. Le black box (A) ne fournit aucune information, le gray box (B) une connaissance partielle avec une perspective utilisateur, et le double-blind n'est pas la réponse attendue ici.",
      difficulte: 1,
      pourquoi: [
        "Le black box ne fournit aucune information préalable, encore moins le code source.",
        "Le gray box donne une connaissance partielle dans une perspective utilisateur, pas développeur.",
        "Le white box (known environment) fournit le code source et adopte la perspective du développeur, éliminant la phase de reconnaissance.",
        "Le double-blind qualifie l'information donnée aux défenseurs, pas l'accès du testeur au code."
      ]
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
      difficulte: 1,
      pourquoi: [
        "Décrit plutôt un rôle d'arbitrage (white team), pas la purple team.",
        "C'est la mission de la blue team, l'équipe défensive.",
        "La purple team est un mode de collaboration : la red team partage ses techniques pendant que la blue team améliore ses détections.",
        "Un prestataire offensif externe reste une red team, quelle que soit sa provenance."
      ]
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
      difficulte: 1,
      pourquoi: [
        "Le social engineering est une technique offensive de la red team.",
        "La threat intelligence offensive alimente les attaques de la red team.",
        "Forensics et réponse à incident sont des activités défensives caractéristiques de la blue team.",
        "L'exploitation de vulnérabilités est le cœur de métier de la red team."
      ]
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
      difficulte: 2,
      pourquoi: [
        "Absolu : la BAS automatise des scénarios connus mais ne remplace pas la créativité des testeurs humains.",
        "La BAS injecte des indicateurs de menace pour vérifier en continu que les contrôles de détection et de prévention réagissent comme attendu.",
        "Hors sujet : la formation au codage sécurisé n'est pas la vocation d'une plateforme BAS.",
        "Hors sujet : la BAS peut alimenter la conformité, mais ce n'est pas son objectif premier."
      ]
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
      difficulte: 2,
      pourquoi: [
        "La compression optimise le stockage, elle n'aligne pas les horloges.",
        "Sans synchronisation NTP de toutes les sources et du SIEM, aucune corrélation chronologique fiable n'est possible : c'est le prérequis à vérifier d'abord.",
        "La redondance améliore la disponibilité, pas la cohérence des horodatages.",
        "La fréquence de revue est une bonne pratique, mais elle ne résout pas un problème d'horodatage."
      ]
    },
    {
      q: "Comment les logs archivés devraient-ils être protégés contre la modification ?",
      choix: [
        "En les chiffrant avec la clé publique de l'administrateur",
        "En les répliquant en continu vers un serveur secondaire modifiable par l'équipe d'exploitation",
        "En les centralisant, en restreignant l'accès par permissions et en les passant en lecture seule",
        "En réduisant leur durée de rétention à trente jours"
      ],
      reponse: 2,
      explication:
        "Les logs doivent être stockés de manière centralisée, protégés par des permissions restrictives, et les archives placées en lecture seule pour prévenir toute modification. Le chiffrement seul (A) ne gère pas l'intégrité d'accès de bout en bout, une réplique modifiable (B) n'empêche aucune altération, et raccourcir la rétention (D) détruit la preuve au lieu de la protéger.",
      difficulte: 1,
      pourquoi: [
        "Le chiffrement protège la confidentialité, mais le détenteur de la clé peut toujours modifier puis rechiffrer : l'intégrité n'est pas garantie.",
        "Une réplique modifiable par l'exploitation ajoute de la disponibilité, pas de l'intégrité : les logs restent altérables.",
        "Centralisation, permissions restrictives et passage en lecture seule constituent la protection d'intégrité attendue pour des archives.",
        "Raccourcir la rétention détruit la preuve au lieu de la protéger contre la modification."
      ]
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
      difficulte: 2,
      pourquoi: [
        "Le pair programming est une revue continue mais informelle.",
        "La pull request est un processus structuré mais bien moins formel que l'inspection Fagan.",
        "L'inspection Fagan, avec ses six étapes et ses critères d'entrée et de sortie, est le processus de revue le plus formel.",
        "La revue over-the-shoulder est la forme la plus informelle de peer review."
      ]
    },
    {
      q: "Votre équipe sécurité doit évaluer une application métier achetée à un éditeur, sans accès au code source. Quelle technique est généralement la SEULE option ?",
      choix: ["SAST", "DAST", "Inspection Fagan", "Statement coverage analysis"],
      reponse: 1,
      explication:
        "Le DAST (Dynamic Application Security Testing) évalue la sécurité du logiciel dans un environnement d'exécution et constitue souvent la seule option pour les organisations qui déploient des applications écrites par des tiers. Le SAST (A), l'inspection Fagan (C) et l'analyse de couverture (D) requièrent l'accès au code source.",
      difficulte: 1,
      pourquoi: [
        "Le SAST exige le code source, indisponible pour un progiciel acheté.",
        "Le DAST teste l'application en cours d'exécution, de l'extérieur : c'est généralement la seule option sans code source.",
        "L'inspection Fagan est une revue de code : impossible sans le source.",
        "L'analyse de couverture instrumente le code, donc inaccessible ici."
      ]
    },
    {
      q: "Quelle technique de test combine des éléments de SAST et de DAST en analysant le code pendant l'exécution, depuis l'intérieur de l'application ?",
      choix: ["Fuzzing générationnel", "IAST", "Misuse case testing", "RUM"],
      reponse: 1,
      explication:
        "L'IAST (Interactive Application Security Testing) combine SAST et DAST en instrumentant l'application pour analyser le code à l'exécution depuis l'intérieur, ce qui fournit des résultats plus précis. Le fuzzing (A) soumet des entrées inattendues, le misuse case testing (C) adopte le point de vue de l'attaquant, et le RUM (D) est du monitoring passif d'utilisateurs réels.",
      difficulte: 2,
      pourquoi: [
        "Le fuzzing soumet des entrées inattendues, il n'instrumente pas le code à l'exécution.",
        "L'IAST instrumente l'application pour analyser le code pendant l'exécution, depuis l'intérieur : c'est l'hybride SAST/DAST décrit.",
        "Le misuse case testing rejoue des scénarios d'abus, sans instrumentation du code.",
        "Le RUM observe passivement les utilisateurs réels, sans analyser le code."
      ]
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
      difficulte: 3,
      pourquoi: [
        "Exact : la mutation altère des entrées connues, la génération construit des entrées depuis un modèle de la spécification.",
        "Piège de vocabulaire : c'est le mutation testing, pas le mutation fuzzing, qui modifie le programme lui-même.",
        "Faux : les deux approches sont automatisées.",
        "Faux : la différence de stratégie de génération d'entrées est fondamentale."
      ]
    },
    {
      q: "Un testeur vérifie que chaque instruction IF du code a été exécutée à la fois sous sa condition vraie et sa condition fausse. Quel critère de couverture applique-t-il ?",
      choix: ["Statement coverage", "Branch coverage", "Loop coverage", "Functional coverage"],
      reponse: 1,
      explication:
        "La branch coverage vérifie que chaque instruction conditionnelle a été exécutée sous toutes ses branches, IF et ELSE. La statement coverage (A) vérifie que chaque ligne a été exécutée, la loop coverage (C) que chaque boucle a été exécutée zéro, une et plusieurs fois, et la functional coverage (D) que chaque fonction a été appelée et a retourné un résultat.",
      difficulte: 2,
      pourquoi: [
        "Trop étroit : la statement coverage vérifie l'exécution de chaque ligne, pas des deux issues d'un IF.",
        "La branch coverage exige que chaque condition ait été exécutée sous ses branches vraie et fausse : exactement le critère décrit.",
        "La loop coverage concerne les boucles : zéro, une et plusieurs itérations.",
        "La functional coverage vérifie l'appel et le retour de chaque fonction."
      ]
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
      difficulte: 2,
      pourquoi: [
        "Le synthetic monitoring est actif : il exécute des scripts, il n'observe pas passivement.",
        "Les transactions synthétiques sont scriptées et proactives, à l'opposé de l'observation passive demandée.",
        "Le RUM capture passivement les interactions des utilisateurs réels : idéal pour voir les problèmes effectivement vécus.",
        "La BAS simule des attaques, elle n'observe pas l'expérience utilisateur."
      ]
    },
    {
      q: "Pourquoi les interfaces PHYSIQUES méritent-elles une attention particulière lors des tests d'interface ?",
      choix: [
        "Elles reposent souvent sur des protocoles propriétaires peu documentés",
        "Leur défaillance peut avoir des conséquences graves lorsqu'elles pilotent des machines ou des automates",
        "Elles échappent souvent à la couverture des scanners de vulnérabilités classiques",
        "Leur test exige des équipements spécialisés coûteux"
      ],
      reponse: 1,
      explication:
        "Les interfaces physiques existent dans les applications qui manipulent des machines, des automates programmables ou d'autres objets ; les testeurs doivent y porter une attention particulière en raison des conséquences potentielles (sécurité des personnes, dégâts matériels) en cas de défaillance. Les protocoles propriétaires (A), la couverture des scanners (C) et le coût de l'outillage (D) sont des difficultés réelles mais secondaires : la raison principale est la conséquence physique et humaine d'une défaillance.",
      difficulte: 2,
      pourquoi: [
        "Difficulté réelle mais secondaire : la documentation des protocoles ne constitue pas l'enjeu principal.",
        "Une interface physique défaillante peut blesser des personnes ou endommager des équipements : la conséquence physique justifie l'attention particulière.",
        "Vrai dans certains environnements, mais c'est une limite d'outillage, pas la raison de la vigilance.",
        "Le coût du test est une contrainte de moyens, pas la justification du risque."
      ]
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
      difficulte: 2,
      pourquoi: [
        "Trop étroit : les comptes anciens sont précisément là où s'accumulent les dérives de privilèges.",
        "L'échantillonnage vraiment aléatoire est acceptable pour la masse, mais les comptes hautement privilégiés doivent être revus en totalité : approche fondée sur le risque.",
        "Une confirmation verbale ne laisse aucune trace et n'a aucune valeur d'audit.",
        "Reporter la revue laisse la fenêtre d'exposition ouverte pendant des mois."
      ]
    },
    {
      q: "Dans la boucle Plan-Do-Check-Act appliquée à un ISMS, à quelle phase correspond l'évaluation et les tests de sécurité ?",
      choix: ["Plan", "Do", "Check", "Act"],
      reponse: 2,
      explication:
        "Dans le modèle PDCA des normes ISO 9000, le Plan fixe les objectifs et les politiques, le Do correspond aux opérations de sécurité, le Check correspond précisément à l'évaluation et aux tests de sécurité (l'objet du domaine 6), et le Act est la revue formelle de direction.",
      difficulte: 2,
      pourquoi: [
        "Plan fixe les objectifs et les politiques, en amont.",
        "Do correspond à l'exécution des opérations de sécurité.",
        "Check est la phase d'évaluation et de tests : exactement l'objet du domaine 6.",
        "Act est la revue de direction et les décisions d'amélioration."
      ]
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
      difficulte: 3,
      pourquoi: [
        "Regard vers le passé : le temps de résolution mesure la performance du processus, c'est un KPI.",
        "Comptage historique d'incidents : un KPI, pas un signal d'exposition future.",
        "Un tiers non évalué est une exposition au risque à venir : c'est la logique prospective d'un KRI.",
        "Les findings récurrents mesurent la performance passée du programme d'audit : KPI."
      ]
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
      difficulte: 1,
      pourquoi: [
        "Un code de retour sans erreur ne prouve pas que les données sont restaurables.",
        "Seule une restauration réelle périodique démontre que la sauvegarde protège effectivement les données.",
        "Le contrat décrit un engagement, il ne prouve aucune capacité technique.",
        "Le chiffrement protège la confidentialité des supports, pas la restaurabilité."
      ]
    },
    {
      q: "Comment une organisation devrait-elle MESURER l'efficacité de son programme de sensibilisation à la sécurité ?",
      choix: [
        "En comptant le nombre d'heures de formation dispensées",
        "En suivant des métriques comme l'évolution du taux de clic aux simulations de phishing",
        "En vérifiant que chaque employé a signé la politique de sécurité",
        "En suivant le taux de complétion des modules e-learning obligatoires"
      ],
      reponse: 1,
      explication:
        "Les simulations de phishing permettent d'évaluer l'efficacité réelle du programme de sensibilisation, et il faut la mesurer par des métriques comme l'évolution du taux de clic dans le temps. Les heures dispensées (A), les signatures (C) et le taux de complétion (D) mesurent l'effort ou la conformité, pas le changement de comportement réel.",
      difficulte: 2,
      pourquoi: [
        "Mesure d'effort, pas d'efficacité : des heures dispensées ne prouvent aucun changement de comportement.",
        "L'évolution du taux de clic aux simulations de phishing mesure le comportement réel dans la durée : c'est l'efficacité du programme.",
        "La signature de la politique atteste une conformité administrative, pas une vigilance réelle.",
        "Le taux de complétion mesure la participation : piège classique de l'indicateur d'activité pris pour un indicateur de résultat."
      ]
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
      difficulte: 1,
      pourquoi: [
        "Réflexe de technicien : aucun bien matériel ne passe avant les personnes.",
        "La vie humaine prime absolument sur toute autre considération : premier réflexe attendu à l'examen.",
        "L'assureur sera notifié plus tard, ce n'est jamais la première priorité.",
        "La bascule des services attend que les personnes soient en sécurité."
      ]
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
      difficulte: 3,
      pourquoi: [
        "Patcher sans ré-accréditation crée un risque réglementaire et potentiellement clinique.",
        "Ignorer laisse un risque critique sans traitement ni traçabilité.",
        "Compensating controls, exception documentée et revue périodique : la réponse managériale complète quand la correction directe est impossible.",
        "Absolu et disproportionné : déconnecter définitivement peut compromettre les soins aux patients."
      ]
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
      difficulte: 2,
      pourquoi: [
        "Divulguer immédiatement expose les utilisateurs avant tout correctif.",
        "Vendre la faille est contraire à l'éthique professionnelle.",
        "La notification privée au vendeur, avec un délai raisonnable de correction, est le premier pas de l'ethical disclosure.",
        "Exploiter la faille dépasse toute autorisation et devient illégal."
      ]
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
      difficulte: 2,
      pourquoi: [
        "Idée reçue : les défauts des logiciels commerciaux ne sont pas la source majoritaire.",
        "Mauvaises configurations, politiques inadaptées, processus défaillants et personnel non sensibilisé constituent l'essentiel des vulnérabilités réelles.",
        "Les zero-days sophistiqués sont rares comparés aux erreurs ordinaires.",
        "Les défaillances matérielles relèvent de la disponibilité, pas de la majorité des vulnérabilités."
      ]
    },
    {
      q: "Lors de l'analyse des résultats de tests pour le rapport final, quelle question permet de déterminer l'impact business d'un finding ?",
      choix: [
        "« Quel est le score CVSS de cette faille ? »",
        "« Et alors ? » (so what?)",
        "« Qui est responsable de cette erreur ? »",
        "« Sur combien de systèmes cette faille est-elle présente ? »"
      ],
      reponse: 1,
      explication:
        "L'analyse doit progresser logiquement des faits vers l'information actionnable : après avoir compris les données, on détermine l'impact business en se demandant « et alors ? », puis on identifie ce qui est actionnable. Le score CVSS (A) et la prévalence (D) restent des mesures techniques qui n'expriment pas l'impact métier, et la recherche de coupables (C) n'apporte pas de valeur au rapport.",
      difficulte: 2,
      pourquoi: [
        "Le score CVSS mesure une sévérité technique, pas l'impact sur l'activité de l'organisation.",
        "La question « et alors ? » force le passage des faits techniques à l'impact business : le cœur d'un rapport actionnable.",
        "Chercher un coupable n'apporte aucune valeur analytique au rapport.",
        "La prévalence reste une mesure technique de surface : elle ne dit pas ce que l'organisation risque concrètement."
      ]
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
      difficulte: 2,
      pourquoi: [
        "Inversé : l'indépendance est l'avantage des auditeurs externes.",
        "Inversé : la largeur d'expérience multi-organisations caractérise les cabinets externes.",
        "La connaissance d'initié de l'environnement réduit le temps d'audit et donne de l'agilité de planification : atout propre à l'équipe interne.",
        "Inversé : les régulateurs privilégient les attestations externes indépendantes."
      ]
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
      difficulte: 3,
      pourquoi: [
        "Excessif : ouvrir tout le SI dépasse le besoin et crée des risques de confidentialité.",
        "Un audit de partenaire est de nature contractuelle : son périmètre se limite aux obligations qui lient les deux organisations.",
        "L'audit interne répond à d'autres objectifs, il ne fonde pas le périmètre d'un audit contractuel.",
        "Absolu : aucun partenaire ne décide unilatéralement et sans limite chez un tiers."
      ]
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
      difficulte: 2,
      pourquoi: [
        "C'est la définition de closed : le port répond mais rien n'écoute.",
        "C'est la définition de open : un service accepte les connexions.",
        "Filtered signifie qu'un dispositif de filtrage intercepte les sondes : le scanner ne peut pas conclure sur l'état réel.",
        "Cet état n'existe pas dans la nomenclature nmap."
      ]
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
      difficulte: 2,
      pourquoi: [
        "Le connect scan complète le handshake : connexion journalisée par la cible, donc peu discrète.",
        "Le SYN scan interrompt l'échange avant l'établissement : plus rapide et plus discret, exactement le besoin.",
        "Hors sujet : le scan UDP ne recense pas les ports TCP.",
        "Le banner grabbing identifie les versions de services déjà découverts, il ne recense pas les ports."
      ]
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
      difficulte: 2,
      pourquoi: [
        "La Kill Chain modélise les étapes séquentielles d'une attaque, pas les relations entre acteurs.",
        "Le Diamond Model relie précisément adversaire, capacités, infrastructure et victime : les quatre sommets du losange.",
        "ATT&CK catalogue tactiques et techniques, sans modéliser la relation adversaire-victime.",
        "STRIDE est un cadre de threat modeling par catégories de menaces, pas d'analyse d'intrusion."
      ]
    },
    {
      q: "Votre organisation crée une équipe d'audit interne permanente. À QUI cette équipe devrait-elle rendre compte pour préserver au MIEUX son indépendance ?",
      choix: [
        "Au DSI, qui possède les systèmes audités",
        "Au RSSI, qui pilote le programme de sécurité",
        "Au comité d'audit du conseil d'administration",
        "Au directeur des opérations, pour faciliter la remédiation"
      ],
      reponse: 2,
      explication:
        "Pour limiter les conflits d'intérêts, l'audit interne doit être rattaché au plus haut niveau de gouvernance, idéalement au comité d'audit du conseil d'administration : les auditeurs ne doivent jamais dépendre hiérarchiquement des responsables des fonctions qu'ils auditent. Rendre compte au DSI (A) ou au RSSI (B) crée un conflit direct, car ces derniers sont propriétaires ou pilotes des contrôles évalués ; le directeur des opérations (D) pose le même problème d'indépendance.",
      difficulte: 2,
      pourquoi: [
        "Conflit direct : le DSI possède les systèmes audités.",
        "Conflit direct : le RSSI pilote les contrôles que l'audit évalue.",
        "Le rattachement au comité d'audit du conseil garantit que les auditeurs ne dépendent pas des fonctions qu'ils contrôlent.",
        "Même conflit d'indépendance : les opérations sont l'objet même des audits."
      ]
    },
    {
      q: "Un régulateur bancaire exige une attestation indépendante de l'efficacité de vos contrôles de sécurité. QUELLE approche répond le MIEUX à cette exigence ?",
      choix: [
        "Une auto-évaluation annuelle validée par le RSSI",
        "Un audit tierce partie mené par un cabinet accrédité, selon un référentiel reconnu",
        "Un rapport d'audit interne présenté au comité de direction",
        "Un scan de vulnérabilités trimestriel avec rapport exécutif"
      ],
      reponse: 1,
      explication:
        "Une exigence réglementaire d'attestation indépendante appelle un audit tierce partie (third-party audit) réalisé par un cabinet accrédité selon un référentiel reconnu : c'est la seule option offrant l'indépendance et l'acceptabilité attendues par un régulateur. L'auto-évaluation (A) et l'audit interne (C) manquent d'indépendance, et un scan de vulnérabilités (D) est un test technique, pas une attestation formelle de conformité.",
      difficulte: 1,
      pourquoi: [
        "L'auto-évaluation n'offre aucune indépendance : irrecevable pour un régulateur.",
        "Un audit tierce partie par un cabinet accrédité, selon un référentiel reconnu, apporte l'indépendance et l'acceptabilité exigées.",
        "Techniquement utile mais interne : sans l'indépendance qu'exige une attestation réglementaire.",
        "Un scan est un test technique ponctuel, pas une attestation formelle de conformité."
      ]
    },
    {
      q: "Un prospect important veut la preuve que les contrôles de sécurité de votre plateforme SaaS ont fonctionné efficacement pendant les neuf derniers mois. QUEL rapport devriez-vous lui fournir sous NDA ?",
      choix: ["SOC 2 Type I", "SOC 2 Type II", "SOC 3", "Rapport de pen test annuel"],
      reponse: 1,
      explication:
        "Le SOC 2 Type II atteste non seulement de la conception des contrôles, mais aussi de leur efficacité opérationnelle sur une période étendue (au moins six mois) : c'est exactement ce que demande le prospect, et il se partage sous NDA. Le Type I (A) ne couvre qu'un instant donné, le SOC 3 (C) est un rapport public moins détaillé, et un rapport de pen test (D) ne constitue pas une attestation d'audit des contrôles dans la durée.",
      difficulte: 1,
      pourquoi: [
        "Le Type I ne couvre qu'un instant donné : il ne prouve rien sur neuf mois.",
        "Le SOC 2 Type II atteste l'efficacité opérationnelle des contrôles sur la période demandée et se partage sous NDA.",
        "Le SOC 3 est la version publique résumée, sans le détail attendu par un prospect exigeant.",
        "Un pentest photographie des vulnérabilités, il n'atteste pas des contrôles dans la durée."
      ]
    },
    {
      q: "Une jeune société SaaS vient de déployer ses contrôles de sécurité il y a deux mois. Un client stratégique exige un rapport SOC 2 sous six semaines. QUELLE est la MEILLEURE réponse du management ?",
      choix: [
        "Produire immédiatement un SOC 2 Type II sur les deux derniers mois",
        "Faire réaliser un SOC 2 Type I maintenant, puis planifier un Type II après une période d'observation suffisante",
        "Refuser toute forme d'audit tant que les contrôles n'ont pas un an",
        "Fournir un SOC 3 à la place, car il est plus rapide à produire"
      ],
      reponse: 1,
      explication:
        "Un Type II exige une période d'observation d'au moins six mois : impossible ici. La démarche classique est de produire d'abord un SOC 2 Type I, qui évalue la conception des contrôles à un instant donné, puis d'enchaîner sur un Type II une fois la période d'observation écoulée. Le Type II sur deux mois (A) ne respecte pas la période minimale, refuser (C) fait perdre le client, et le SOC 3 (D) est un dérivé public d'un audit SOC 2 déjà réalisé, pas un raccourci.",
      difficulte: 2,
      pourquoi: [
        "Impossible : le Type II exige au moins six mois d'observation, il n'y en a que deux.",
        "Le Type I atteste la conception maintenant et prépare le Type II après la période d'observation : la séquence classique et honnête.",
        "Refuser fait perdre le client alors qu'une réponse conforme existe : absolu inutile.",
        "Le SOC 3 dérive d'un audit SOC 2 déjà réalisé : ce n'est pas un raccourci."
      ]
    },
    {
      q: "Vos clients utilisent votre service de paie externalisé et leurs auditeurs financiers veulent évaluer l'impact de vos contrôles sur LEURS états financiers. QUEL rapport est conçu pour cet usage ?",
      choix: ["SOC 1 Type II", "SOC 2 Type II", "SOC 3", "Attestation PCI DSS"],
      reponse: 0,
      explication:
        "Les rapports SOC 1 portent sur les contrôles d'une organisation de services susceptibles d'affecter le reporting financier de ses clients : c'est le rapport que les auditeurs financiers des clients demanderont, et le Type II confirme l'efficacité opérationnelle dans la durée. Le SOC 2 (B) porte sur les Trust Services Criteria (sécurité, disponibilité, etc.), le SOC 3 (C) est la version publique du SOC 2, et PCI DSS (D) concerne les données de cartes de paiement.",
      difficulte: 2,
      pourquoi: [
        "Le SOC 1 est conçu pour les contrôles affectant le reporting financier des clients, et le Type II couvre la durée : exactement la demande des auditeurs financiers.",
        "Le SOC 2 traite les Trust Services Criteria, pas l'impact sur les états financiers.",
        "Le SOC 3 est un résumé public sans valeur pour un audit financier.",
        "PCI DSS concerne les données de cartes de paiement : hors sujet."
      ]
    },
    {
      q: "Quel groupe de métriques CVSS évolue dans le TEMPS, par exemple lorsqu'un code d'exploitation devient public ou qu'un correctif officiel est publié ?",
      choix: ["Base", "Temporal", "Environmental", "Attack Vector"],
      reponse: 1,
      explication:
        "Le groupe Temporal capture les caractéristiques qui changent avec le temps : maturité du code d'exploitation (exploit code maturity), niveau de remédiation disponible et confiance dans le rapport. Le groupe Base (A) décrit les caractéristiques intrinsèques et constantes de la vulnérabilité, le groupe Environmental (C) ajuste le score au contexte propre de l'organisation, et Attack Vector (D) est une métrique de base, pas un groupe.",
      difficulte: 2,
      pourquoi: [
        "Le groupe Base est constant : il décrit les caractéristiques intrinsèques de la faille.",
        "Le groupe Temporal capture ce qui évolue : maturité de l'exploit, disponibilité du correctif, confiance dans le rapport.",
        "Le groupe Environmental ajuste le score au contexte de l'organisation, pas au temps.",
        "Attack Vector est une métrique de base, pas un groupe."
      ]
    },
    {
      q: "Deux vulnérabilités sont détectées : CVSS 9.1 sur un serveur de développement isolé sans données sensibles, et CVSS 7.5 sur un serveur web de production exposé à Internet traitant des données personnelles. QUE devriez-vous corriger EN PREMIER ?",
      choix: [
        "La vulnérabilité CVSS 9.1, car le score de base est plus élevé",
        "La vulnérabilité CVSS 7.5, car l'exposition et la criticité de l'actif rendent le risque réel plus élevé",
        "Les deux simultanément, sans priorisation",
        "Aucune, tant que le comité de changement n'a pas statué"
      ],
      reponse: 1,
      explication:
        "Le score CVSS de base mesure la sévérité intrinsèque, pas le risque pour votre organisation. La priorisation doit intégrer le contexte : exposition à Internet, criticité de l'actif, données traitées et exploitation active. Le serveur de production exposé traitant des données personnelles présente un risque métier supérieur malgré un score plus bas ; c'est exactement le rôle des métriques Environmental. Suivre aveuglément le score de base (A) est un piège classique de l'examen, et l'attentisme (D) laisse le risque ouvert.",
      difficulte: 3,
      pourquoi: [
        "Piège du score brut : la sévérité intrinsèque ignore l'exposition et la valeur de l'actif.",
        "Exposition Internet, production et données personnelles rendent le risque réel supérieur malgré le score plus bas : le raisonnement contextuel attendu d'un manager.",
        "Sans priorisation, les ressources se dispersent : ce n'est pas une décision.",
        "L'attentisme laisse un risque exposé ouvert : le comité de changement n'exonère pas de prioriser."
      ]
    },
    {
      q: "Une attaque ne fonctionne que si la victime clique sur un lien piégé. QUELLE métrique de base CVSS reflète cette condition ?",
      choix: ["Attack Complexity", "Privileges Required", "User Interaction", "Scope"],
      reponse: 2,
      explication:
        "La métrique User Interaction (UI) indique si l'exploitation exige une action d'un utilisateur autre que l'attaquant, comme cliquer sur un lien ou ouvrir une pièce jointe. Attack Complexity (A) mesure les conditions techniques hors du contrôle de l'attaquant, Privileges Required (B) le niveau de privilèges nécessaire avant l'attaque, et Scope (D) indique si l'exploitation affecte des ressources au-delà du composant vulnérable.",
      difficulte: 2,
      pourquoi: [
        "Attack Complexity mesure des conditions techniques hors du contrôle de l'attaquant, pas l'action d'une victime.",
        "Privileges Required décrit les privilèges préalables de l'attaquant, pas le clic d'un utilisateur.",
        "User Interaction indique précisément qu'une action de la victime, comme un clic, conditionne l'exploitation.",
        "Scope indique si l'impact déborde du composant vulnérable."
      ]
    },
    {
      q: "Votre équipe ne peut pas patcher toutes les vulnérabilités détectées ce mois-ci. Au-delà du score CVSS de base, QUEL facteur devrait le PLUS influencer la priorisation ?",
      choix: [
        "Le nombre brut de vulnérabilités détectées sur chaque serveur",
        "L'exploitation active observée dans la nature et la criticité métier des actifs concernés",
        "L'ancienneté du CVE, les plus récents d'abord",
        "La facilité d'installation du correctif"
      ],
      reponse: 1,
      explication:
        "Une priorisation mature combine le score de sévérité avec des renseignements sur l'exploitation réelle (catalogues de vulnérabilités exploitées connues, threat intelligence) et la criticité métier des actifs : une faille moyenne activement exploitée sur un actif critique passe avant une faille critique théorique sur un actif isolé. L'ancienneté (C) et la facilité d'installation (D) sont des critères secondaires, et le volume brut de failles par serveur (A) mesure une charge de travail, pas un risque.",
      difficulte: 3,
      pourquoi: [
        "Le volume de failles par serveur mesure une charge de travail, pas un risque : piège de l'indicateur d'activité.",
        "Exploitation active constatée et criticité métier des actifs sont les deux facteurs qui transforment une sévérité en risque réel.",
        "L'ancienneté du CVE ne dit rien de son exploitabilité actuelle : critère secondaire.",
        "La facilité d'installation optimise l'ordonnancement, pas la priorité du risque : réflexe d'exploitation, pas de manager."
      ]
    },
    {
      q: "Pendant un test d'intrusion autorisé, le testeur découvre des indices d'une compromission RÉELLE préexistante par un attaquant tiers. QUE doit-il faire ?",
      choix: [
        "Poursuivre le test et mentionner la découverte dans le rapport final",
        "Éradiquer lui-même l'attaquant pour protéger le client",
        "Suspendre le test et notifier immédiatement le contact désigné, conformément à la procédure d'escalade des Rules of Engagement",
        "Publier un avis de sécurité pour alerter les autres clients du même secteur"
      ],
      reponse: 2,
      explication:
        "Les Rules of Engagement doivent prévoir une procédure d'escalade pour ce cas précis : le testeur suspend ses activités et notifie sans délai le contact désigné, car une compromission réelle relève de la réponse à incident, pas du test. Attendre le rapport (A) laisse l'attaquant agir, éradiquer soi-même (B) dépasse le mandat et peut détruire des preuves, et publier (D) violerait la confidentialité contractuelle.",
      difficulte: 3,
      pourquoi: [
        "Poursuivre laisse un attaquant réel agir pendant des jours : le rapport arrivera trop tard.",
        "Éradiquer dépasse le mandat du testeur et risque de détruire des preuves.",
        "La procédure d'escalade des Rules of Engagement existe pour ce cas : suspendre et notifier immédiatement le contact désigné, car on bascule dans la réponse à incident.",
        "Publier violerait la confidentialité contractuelle du client."
      ]
    },
    {
      q: "Dans la méthodologie de test d'intrusion du NIST SP 800-115, quelle phase suit immédiatement la phase de DISCOVERY ?",
      choix: ["Planning", "Attack", "Reporting", "Remediation"],
      reponse: 1,
      explication:
        "Le processus NIST SP 800-115 enchaîne quatre phases : planning (accord sur le périmètre et les Rules of Engagement), discovery (reconnaissance et énumération), attack (tentatives d'exploitation, gain et élévation d'accès) et reporting. Après la discovery vient donc la phase d'attack. La remédiation (D) n'est pas une phase du test lui-même mais une suite donnée par l'organisation aux findings.",
      difficulte: 1,
      pourquoi: [
        "Le planning précède tout : c'est la première phase.",
        "Après la discovery (reconnaissance, énumération) vient l'attack : exploitation, gain et élévation d'accès.",
        "Le reporting clôt le processus, il ne suit pas directement la discovery.",
        "La remédiation n'est pas une phase du test NIST : elle appartient à l'organisation."
      ]
    },
    {
      q: "En pleine phase d'attaque, un pen testeur découvre un sous-réseau inconnu, absent du périmètre convenu, qui semble contenir des systèmes vulnérables. QUE doit-il faire ?",
      choix: [
        "Le tester immédiatement, car il est connecté au périmètre autorisé",
        "L'ignorer définitivement et ne pas le mentionner",
        "Arrêter tout le test jusqu'à la fin du contrat",
        "S'abstenir de le tester et demander une autorisation écrite d'extension de périmètre avant toute action"
      ],
      reponse: 3,
      explication:
        "Le périmètre et les Rules of Engagement délimitent l'autorisation légale du testeur : tester un système hors périmètre sans accord écrit s'apparente à un accès non autorisé, quelle que soit sa connectivité. La bonne pratique est de signaler la découverte au client et d'obtenir une extension de périmètre écrite avant de continuer. Tester sans accord (A) expose juridiquement le testeur, taire la découverte (B) prive le client d'une information utile, et tout arrêter (C) est disproportionné.",
      difficulte: 2,
      pourquoi: [
        "La connectivité ne vaut pas autorisation : tester hors périmètre est un accès non autorisé.",
        "Taire la découverte prive le client d'une information de sécurité importante.",
        "Disproportionné : rien n'impose d'arrêter tout le test.",
        "S'abstenir et obtenir une extension écrite du périmètre respecte la limite légale tout en servant le client."
      ]
    },
    {
      q: "Votre direction veut évaluer non seulement les vulnérabilités techniques, mais aussi la capacité de DÉTECTION et de RÉPONSE du SOC, sans le prévenir. QUEL exercice correspond à ce besoin ?",
      choix: [
        "Un scan de vulnérabilités authentifié",
        "Un test d'intrusion double-blind",
        "Un audit de conformité ISO 27001",
        "Une revue de code Fagan"
      ],
      reponse: 1,
      explication:
        "Dans un test double-blind, l'équipe de défense n'est pas informée du test : on évalue ainsi de manière réaliste la détection, l'alerte et la réponse, en plus des vulnérabilités techniques. Un scan (A) ne teste pas la réponse humaine, un audit de conformité (C) vérifie l'alignement sur un référentiel, et une revue de code (D) porte sur le logiciel, pas sur le SOC.",
      difficulte: 2,
      pourquoi: [
        "Un scan authentifié mesure des vulnérabilités, pas la réaction humaine du SOC.",
        "Le double-blind, où les défenseurs ignorent le test, évalue de façon réaliste détection, alerte et réponse.",
        "Un audit de conformité vérifie l'alignement sur un référentiel, pas la réaction opérationnelle.",
        "Une revue de code porte sur le logiciel, pas sur le SOC."
      ]
    },
    {
      q: "QUELLE caractéristique distingue le MIEUX un engagement de red team d'un test d'intrusion classique ?",
      choix: [
        "La red team utilise uniquement des outils automatisés",
        "La red team poursuit des objectifs précis en émulant un adversaire réaliste, dans la durée et en furtivité, pour éprouver aussi la détection et la réponse",
        "La red team se limite aux applications web",
        "La red team travaille toujours avec un accès complet au code source"
      ],
      reponse: 1,
      explication:
        "Un engagement de red team est orienté objectifs (par exemple exfiltrer des données précises), émule les tactiques d'un adversaire réaliste, se déroule sur une période étendue et privilégie la furtivité afin de tester la capacité de la blue team à détecter et répondre. Un pen test classique vise plutôt l'identification exhaustive des vulnérabilités sur un périmètre donné, dans un temps court. Les affirmations A, C et D sont fausses.",
      difficulte: 2,
      pourquoi: [
        "Faux : la red team privilégie l'expertise humaine et l'adaptation.",
        "Objectifs précis, émulation d'adversaire réaliste, durée et furtivité pour éprouver détection et réponse : la signature d'un engagement red team.",
        "Trop étroit : la red team ne se limite à aucune couche technique.",
        "Faux : l'accès complet au code source décrit plutôt un test white box."
      ]
    },
    {
      q: "Après un exercice red team, le SOC n'a détecté AUCUNE des techniques employées. QUELLE est la MEILLEURE prochaine étape ?",
      choix: [
        "Remplacer les analystes du SOC",
        "Organiser des sessions purple team où la red team rejoue ses techniques pendant que la blue team construit et valide ses détections",
        "Renoncer aux exercices offensifs, jugés trop décourageants",
        "Acheter immédiatement un nouveau SIEM"
      ],
      reponse: 1,
      explication:
        "L'approche purple team transforme l'échec de détection en apprentissage : la red team rejoue ses tactiques, techniques et procédures de façon transparente pendant que la blue team développe, teste et affine ses règles de détection en boucle courte. C'est la voie la plus directe vers une amélioration mesurable. Sanctionner les analystes (A) ou abandonner les exercices (C) ne corrige rien, et changer d'outil (D) sans comprendre les lacunes de détection est prématuré.",
      difficulte: 2,
      pourquoi: [
        "Sanctionner détruit la confiance et n'améliore aucune détection.",
        "La purple team rejoue les TTP de façon transparente pendant que la blue team construit et valide ses détections : conversion directe de l'échec en amélioration mesurable.",
        "Renoncer aux exercices supprime le thermomètre, pas le problème.",
        "Changer d'outil sans comprendre les lacunes reproduit l'échec à prix fort : réflexe d'achat, pas d'analyse."
      ]
    },
    {
      q: "Vous voulez détecter les injections SQL dans le code source AVANT même la compilation et l'intégration. QUELLE technique intégrer au pipeline CI ?",
      choix: ["DAST", "SAST", "RUM", "Test de charge"],
      reponse: 1,
      explication:
        "Le SAST (Static Application Security Testing) analyse le code source, le bytecode ou les binaires sans exécuter l'application : il s'intègre tôt dans le pipeline CI et détecte des motifs dangereux comme les injections SQL dès l'écriture du code. Le DAST (A) exige une application déployée et en cours d'exécution, le RUM (C) observe les utilisateurs réels en production, et le test de charge (D) mesure la performance, pas la sécurité.",
      difficulte: 1,
      pourquoi: [
        "Le DAST exige une application déployée et en cours d'exécution : trop tard pour « avant compilation ».",
        "Le SAST analyse le code source sans l'exécuter et détecte les injections SQL dès l'écriture : il s'intègre naturellement au pipeline CI.",
        "Le RUM observe la production, à l'extrême opposé du cycle.",
        "Le test de charge mesure la performance, pas la sécurité du code."
      ]
    },
    {
      q: "Une faille de configuration d'authentification n'apparaît que lorsque l'application est déployée avec son serveur web et son reverse proxy. QUELLE technique a le PLUS de chances de la détecter ?",
      choix: [
        "SAST sur le code source",
        "Revue de code par pull request",
        "DAST contre l'application déployée en environnement de test",
        "Analyse de couverture des instructions"
      ],
      reponse: 2,
      explication:
        "Les défauts qui n'existent qu'à l'exécution, comme les erreurs de configuration du serveur, des en-têtes ou de la chaîne d'authentification, échappent à l'analyse statique : seul un test dynamique (DAST) contre l'application réellement déployée, avec sa pile complète, peut les révéler. Le SAST (A) et la revue de code (B) ne voient que le code, et la couverture d'instructions (D) mesure l'exhaustivité des tests, pas la sécurité de la configuration.",
      difficulte: 2,
      pourquoi: [
        "Le SAST ne voit que le code : les défauts de la pile déployée lui échappent.",
        "La revue de code partage la même limite : elle ne voit pas la configuration d'exécution.",
        "Seul le DAST contre l'application réellement déployée, avec sa pile complète, révèle les défauts qui n'existent qu'à l'exécution.",
        "La couverture d'instructions mesure l'exhaustivité des tests, pas la sécurité de la configuration."
      ]
    },
    {
      q: "Vous devez tester la robustesse du parseur d'un protocole binaire propriétaire dont vous connaissez la spécification. QUELLE approche de fuzzing est la PLUS efficace ?",
      choix: [
        "Mutation fuzzing à partir de captures de trafic aléatoires",
        "Generational fuzzing fondé sur un modèle de la spécification du protocole",
        "Scan de vulnérabilités authentifié",
        "Test d'interface utilisateur automatisé"
      ],
      reponse: 1,
      explication:
        "Le generational fuzzing (intelligent) construit des entrées à partir d'un modèle décrivant le format attendu : pour un protocole propriétaire structuré, il atteint des couches profondes du parseur que des mutations aléatoires n'atteindraient presque jamais, car elles échoueraient dès les premières validations de format. Le mutation fuzzing (A) reste utile mais moins efficace ici, et les options C et D ne testent pas la robustesse d'un parseur.",
      difficulte: 3,
      pourquoi: [
        "Des mutations aléatoires échouent aux premières validations de format d'un protocole structuré : couches profondes inaccessibles.",
        "Le generational fuzzing modélise la spécification et atteint les couches profondes du parseur : le choix efficace quand le format est connu.",
        "Un scan authentifié inventorie des vulnérabilités connues, il ne teste pas la robustesse d'un parseur.",
        "Le test d'interface utilisateur est hors sujet pour un protocole binaire."
      ]
    },
    {
      q: "QUELLE catégorie de défauts le fuzzing est-il le MOINS susceptible de détecter ?",
      choix: [
        "Les crashs liés au traitement d'entrées malformées",
        "Les débordements de mémoire tampon",
        "Les erreurs de logique métier, comme un contournement de règle d'approbation",
        "Les erreurs de gestion d'exceptions sur entrées inattendues"
      ],
      reponse: 2,
      explication:
        "Le fuzzing excelle à découvrir les défauts de traitement des entrées : crashs, débordements de tampon, exceptions non gérées. En revanche, il détecte mal les défauts de logique métier ou de conception, car l'application répond alors « correctement » du point de vue technique tout en violant une règle métier ; ces défauts exigent du misuse case testing ou une revue manuelle. C'est une limite classique demandée à l'examen.",
      difficulte: 3,
      pourquoi: [
        "Les crashs sur entrées malformées sont la cible naturelle du fuzzing.",
        "Les débordements de tampon sont une découverte classique du fuzzing.",
        "Les erreurs de logique métier laissent l'application techniquement « correcte » : le fuzzing ne les voit pas, il faut du misuse case testing ou une revue manuelle.",
        "Les exceptions non gérées sont exactement ce que le fuzzing révèle."
      ]
    },
    {
      q: "Vos analystes SOC ignorent désormais les alertes du SIEM, noyées sous les faux positifs. QUELLE est la MEILLEURE action de management ?",
      choix: [
        "Augmenter le nombre d'analystes pour traiter toutes les alertes",
        "Désactiver les règles les plus bruyantes sans analyse",
        "Conduire un programme de tuning : réviser les cas d'usage, ajuster seuils et corrélations, et mesurer le taux de faux positifs",
        "Réduire le nombre de sources de logs envoyées au SIEM"
      ],
      reponse: 2,
      explication:
        "L'alert fatigue est un risque opérationnel majeur : la réponse managériale est un programme de tuning structuré, qui repart des cas d'usage de détection, ajuste les seuils et les règles de corrélation, et suit des métriques comme le taux de faux positifs. Ajouter des analystes (A) traite le symptôme à coût croissant, désactiver sans analyse (B) crée des angles morts, et couper des sources (D) réduit la visibilité.",
      difficulte: 2,
      pourquoi: [
        "Ajouter des analystes traite le symptôme à coût croissant sans réduire le bruit.",
        "Désactiver sans analyse crée des angles morts de détection.",
        "Un programme de tuning structuré — cas d'usage, seuils, corrélations, mesure du taux de faux positifs — est la réponse managériale à l'alert fatigue.",
        "Couper des sources réduit la visibilité au lieu d'améliorer le signal."
      ]
    },
    {
      q: "Un auditeur constate qu'un serveur critique n'apparaît plus dans le SIEM depuis trois semaines. QUE vérifier EN PREMIER ?",
      choix: [
        "La licence du SIEM",
        "Le bon fonctionnement de l'agent ou du mécanisme de collecte et d'acheminement des logs de ce serveur",
        "Les règles de corrélation appliquées aux événements de ce serveur",
        "La durée de rétention configurée pour les logs de ce serveur"
      ],
      reponse: 1,
      explication:
        "Une interruption de réception des logs d'une source est d'abord un problème de chaîne de collecte : agent arrêté, file d'acheminement en erreur, changement de configuration ou filtrage réseau. La bonne pratique est d'ailleurs de superviser la santé des sources de logs et d'alerter automatiquement quand une source devient silencieuse, car un attaquant peut couper la journalisation pour masquer ses traces. La licence (A) et la rétention (D) n'expliquent pas un arrêt brutal de réception, et les règles de corrélation (C) sont sans objet si les logs n'arrivent même plus.",
      difficulte: 2,
      pourquoi: [
        "Plausible mais improbable en premier : un plafond de licence n'explique guère le silence d'une seule source.",
        "Un arrêt de réception se diagnostique d'abord sur la chaîne de collecte — agent, acheminement, configuration, filtrage réseau — d'autant qu'un attaquant peut couper la journalisation.",
        "Sans objet : les règles de corrélation ne s'appliquent qu'à des logs qui arrivent.",
        "La rétention gouverne la conservation des données passées, pas la réception des nouvelles."
      ]
    },
    {
      q: "Vos logs pourraient servir de PREUVE dans une procédure judiciaire. QUELLE combinaison de mesures renforce le MIEUX leur recevabilité ?",
      choix: [
        "Compression et déduplication pour réduire les coûts",
        "Stockage inaltérable (WORM), contrôles d'intégrité par hachage et chaîne de custody documentée",
        "Conservation sur le poste de l'administrateur avec mot de passe",
        "Chiffrement des archives avec une clé détenue par le seul administrateur système"
      ],
      reponse: 1,
      explication:
        "La valeur probante des logs repose sur la démonstration qu'ils n'ont pas été altérés : stockage en écriture unique (WORM), vérification d'intégrité par hachage, horodatage fiable et chaîne de custody documentée depuis la collecte jusqu'à la présentation. La compression (A) n'apporte rien à l'intégrité, le stockage individuel (C) affaiblit la preuve, et un chiffrement dont la clé est détenue par une seule personne (D) protège la confidentialité mais concentre le pouvoir d'altération au lieu de démontrer l'intégrité.",
      difficulte: 2,
      pourquoi: [
        "La compression sert les coûts, elle n'apporte rien à l'intégrité probante.",
        "WORM, contrôles d'intégrité par hachage et chaîne de custody documentée démontrent la non-altération : le cœur de la recevabilité.",
        "Un stockage individuel sous simple mot de passe affaiblit la preuve au lieu de la renforcer.",
        "Le chiffrement à clé unique protège la confidentialité mais concentre le pouvoir d'altération sur une personne : contre-productif pour la preuve."
      ]
    },
    {
      q: "Vous voulez identifier QUI communique avec QUI sur le réseau, avec quels volumes, sans capturer le contenu des paquets. QUELLE source de données utiliser ?",
      choix: [
        "Full packet capture",
        "Données NetFlow",
        "Journaux applicatifs des serveurs web",
        "Rapports de scan de vulnérabilités"
      ],
      reponse: 1,
      explication:
        "NetFlow enregistre les métadonnées des flux réseau : adresses source et destination, ports, protocoles, volumes et horodatages, sans le contenu. C'est idéal pour cartographier les communications, détecter des exfiltrations ou des mouvements latéraux, avec un coût de stockage bien inférieur à la capture complète (A), qui conserve le payload. Les journaux applicatifs (C) ne couvrent qu'un service, et les scans (D) ne décrivent pas les flux.",
      difficulte: 2,
      pourquoi: [
        "La capture complète conserve le payload : coûteuse et excessive quand seuls les flux importent.",
        "NetFlow enregistre les métadonnées des flux — qui parle à qui, combien, quand — sans le contenu : exactement le besoin.",
        "Les journaux applicatifs ne couvrent qu'un service, pas la cartographie du réseau.",
        "Les rapports de scan décrivent des vulnérabilités, pas des communications."
      ]
    },
    {
      q: "En gestion des journaux, QU'EST-CE qu'un « clipping level » ?",
      choix: [
        "La durée maximale de rétention des logs",
        "Un seuil prédéfini au-delà duquel les événements sont signalés, pour ignorer le bruit des erreurs occasionnelles",
        "Le niveau de compression appliqué aux archives",
        "Le nombre maximal de sources connectées au SIEM"
      ],
      reponse: 1,
      explication:
        "Le clipping level est un seuil : en dessous, les événements ordinaires (par exemple quelques échecs de connexion isolés) sont ignorés ; au-delà (par exemple cinq échecs en dix minutes), l'événement est signalé pour analyse. C'est une forme d'échantillonnage non statistique qui concentre l'attention sur les motifs anormaux. Les options A, C et D décrivent d'autres paramètres de gestion des logs.",
      difficulte: 2,
      pourquoi: [
        "La rétention définit la durée de conservation, pas un seuil de signalement.",
        "Le clipping level est ce seuil prédéfini qui ignore le bruit ordinaire et ne signale qu'au-delà : sélection non statistique des anomalies.",
        "La compression n'a aucun rapport avec le signalement d'événements.",
        "Le nombre de sources est un paramètre de capacité, pas un seuil d'alerte."
      ]
    },
    {
      q: "Le comité de direction demande un indicateur montrant si les OBJECTIFS du programme de sécurité sont atteints. QUEL type de métrique correspond à cette demande ?",
      choix: ["KPI", "KRI", "KGI", "SLA"],
      reponse: 2,
      explication:
        "Les KGI (Key Goal Indicators) mesurent l'atteinte des objectifs et répondent à la question « avons-nous atteint le but fixé ? », typiquement pour la gouvernance. Les KPI (A) mesurent la performance des processus qui mènent au but (regard vers le passé), les KRI (B) signalent l'évolution de l'exposition au risque (regard vers le futur), et un SLA (D) est un engagement contractuel de niveau de service, pas une métrique de gouvernance.",
      difficulte: 3,
      pourquoi: [
        "Le KPI mesure la performance des processus, regard vers le passé, pas l'atteinte des objectifs.",
        "Le KRI signale l'exposition au risque à venir, pas l'atteinte d'un but.",
        "Le KGI répond précisément à « avons-nous atteint l'objectif fixé ? » : la métrique de gouvernance demandée.",
        "Un SLA est un engagement contractuel de niveau de service, pas une métrique de gouvernance."
      ]
    },
    {
      q: "QUEL indicateur est le PLUS pertinent pour mesurer la performance de votre programme de gestion des correctifs ?",
      choix: [
        "Le nombre total de serveurs de l'organisation",
        "Le temps moyen de remédiation (MTTR) des vulnérabilités critiques",
        "Le budget annuel de l'équipe infrastructure",
        "Le nombre de licences de l'outil de scan"
      ],
      reponse: 1,
      explication:
        "Le temps moyen de remédiation des vulnérabilités critiques mesure directement l'efficacité du processus de patching : il relie la détection à la correction et peut être suivi dans le temps et comparé à des cibles. Le nombre de serveurs (A), le budget (C) et les licences (D) sont des mesures de volume ou de moyens, pas de performance du processus.",
      difficulte: 1,
      pourquoi: [
        "Le nombre de serveurs est une mesure de volume, pas de performance.",
        "Le MTTR des vulnérabilités critiques relie détection et correction : l'indicateur direct de l'efficacité du patching.",
        "Le budget mesure les moyens engagés, pas le résultat obtenu.",
        "Le nombre de licences est une donnée d'achat sans valeur de pilotage."
      ]
    },
    {
      q: "Pour un tableau de bord destiné au conseil d'administration, QUEL indicateur est un bon KRI, orienté vers le FUTUR ?",
      choix: [
        "Le nombre d'incidents résolus le trimestre dernier",
        "Le pourcentage de systèmes critiques arrivant en fin de support éditeur dans les douze prochains mois",
        "Le temps moyen de détection des incidents l'an passé",
        "Le nombre de sessions de formation dispensées"
      ],
      reponse: 1,
      explication:
        "Un KRI signale une exposition au risque à venir : la proportion de systèmes critiques bientôt privés de correctifs de sécurité annonce une augmentation prévisible de la surface d'attaque et appelle une décision (migration, budget, exception). Les incidents résolus (A), le temps de détection passé (C) et les formations dispensées (D) mesurent la performance passée : ce sont des KPI.",
      difficulte: 2,
      pourquoi: [
        "Regard vers le passé : les incidents résolus sont un KPI.",
        "Des systèmes critiques bientôt sans support annoncent une exposition croissante et appellent une décision : la définition d'un KRI prospectif.",
        "Le temps de détection passé mesure la performance historique : KPI.",
        "Les formations dispensées comptent l'effort, pas le risque futur."
      ]
    },
    {
      q: "QUEL type de test de reprise après sinistre est le MOINS perturbant pour les opérations ?",
      choix: [
        "Le full-interruption test",
        "Le parallel test",
        "La read-through (revue documentaire par chaque responsable)",
        "Le test de bascule du datacenter"
      ],
      reponse: 2,
      explication:
        "La read-through, ou revue documentaire, consiste à distribuer le plan aux responsables concernés pour qu'ils le relisent et signalent les éléments obsolètes : aucune opération n'est touchée, c'est le test le moins perturbant et le moins coûteux. Le parallel test (B) mobilise le site de repli, et le full-interruption (A, D) interrompt réellement la production, avec le risque le plus élevé.",
      difficulte: 1,
      pourquoi: [
        "Le full-interruption arrête réellement la production : le plus risqué de tous.",
        "Le parallel test mobilise le site de repli : perturbation réelle quoique maîtrisée.",
        "La read-through est une simple revue documentaire par chaque responsable : aucune opération touchée, coût minimal.",
        "La bascule de datacenter est une interruption réelle, à l'opposé du besoin."
      ]
    },
    {
      q: "Votre organisation veut vérifier que le site de repli peut réellement traiter la charge, SANS interrompre la production. QUEL test choisir ?",
      choix: [
        "Tabletop exercise",
        "Full-interruption test",
        "Parallel test",
        "Read-through"
      ],
      reponse: 2,
      explication:
        "Le parallel test active les systèmes du site de repli et y rejoue les traitements en parallèle, pendant que le site principal continue d'assurer la production : on valide la capacité réelle de reprise sans risque d'interruption. Le tabletop (A) reste théorique en salle, la read-through (D) est documentaire, et le full-interruption (B) bascule réellement la production, ce que l'énoncé exclut.",
      difficulte: 2,
      pourquoi: [
        "Le tabletop reste une discussion en salle : il ne prouve pas la capacité de charge du site de repli.",
        "Le full-interruption valide la bascule mais interrompt la production, ce que l'énoncé exclut.",
        "Le parallel test fait tourner le site de repli en parallèle de la production intacte : validation réelle sans interruption.",
        "La read-through est documentaire : aucune preuve de capacité."
      ]
    },
    {
      q: "Un test DR échoue : la restauration a dépassé le RTO de plusieurs heures. QUELLE est la PREMIÈRE action de management appropriée ?",
      choix: [
        "Sanctionner l'équipe d'exploitation responsable du retard",
        "Documenter les constats dans un rapport de lessons learned et mettre à jour le plan et les procédures en conséquence",
        "Classer le test comme réussi pour ne pas inquiéter la direction",
        "Reprogrammer immédiatement le même test sans rien changer"
      ],
      reponse: 1,
      explication:
        "Un test DR qui révèle des écarts a précisément rempli son rôle : la valeur vient du processus de lessons learned, qui documente les causes, met à jour le plan, les procédures et éventuellement l'architecture, puis planifie une nouvelle validation. Sanctionner (A) décourage la transparence, maquiller le résultat (C) est contraire à l'éthique professionnelle, et retester sans corriger (D) reproduira l'échec.",
      difficulte: 2,
      pourquoi: [
        "Sanctionner décourage la transparence dont dépendent les tests futurs.",
        "Le test a rempli son rôle en révélant l'écart : lessons learned, mise à jour du plan et nouvelle validation sont la réponse managériale.",
        "Maquiller le résultat est contraire à l'éthique et prive la direction d'une information de risque.",
        "Retester sans corriger reproduira le même échec."
      ]
    },
    {
      q: "Après un audit, QUI devrait être PROPRIÉTAIRE de la remédiation d'un finding portant sur une application métier ?",
      choix: [
        "L'auditeur qui a identifié le finding",
        "Le propriétaire métier ou système de l'application concernée, avec le conseil de l'équipe sécurité",
        "Exclusivement l'équipe sécurité",
        "Le prestataire de scan de vulnérabilités"
      ],
      reponse: 1,
      explication:
        "La responsabilité de la remédiation revient au propriétaire du système ou du processus concerné : lui seul peut arbitrer les impacts métier, planifier les changements et engager les ressources, l'équipe sécurité jouant un rôle de conseil et de suivi. L'auditeur (A) doit rester indépendant de la remédiation pour préserver son objectivité, et les options C et D diluent la responsabilité loin de ceux qui possèdent le risque.",
      difficulte: 2,
      pourquoi: [
        "L'auditeur doit rester indépendant de la remédiation pour préserver son objectivité.",
        "Le propriétaire du système possède le risque, les impacts et les ressources : c'est lui qui porte la remédiation, la sécurité conseillant.",
        "Confier tout à la sécurité déresponsabilise le métier qui possède le risque.",
        "Le prestataire de scan détecte, il ne possède ni le système ni le risque."
      ]
    },
    {
      q: "Un contrôle exigé par la politique ne peut pas être appliqué sur un système hérité. QUELLES conditions rendent une exception ACCEPTABLE ?",
      choix: [
        "L'administrateur du système la valide oralement",
        "L'exception est approuvée formellement par le niveau de management approprié, assortie de compensating controls, d'une date d'expiration et d'une revue périodique",
        "L'exception est accordée définitivement, sans limite de durée",
        "L'équipe sécurité la refuse systématiquement, sans processus d'exception"
      ],
      reponse: 1,
      explication:
        "Un processus d'exception mûr exige une approbation formelle par le management habilité à accepter le risque, des compensating controls qui réduisent l'exposition, une durée limitée avec date d'expiration et une réévaluation périodique. Une validation orale (A) n'engage personne et ne laisse pas de trace, une exception permanente (C) devient une vulnérabilité oubliée, et l'absence de tout processus (D) pousse les équipes au contournement non documenté.",
      difficulte: 2,
      pourquoi: [
        "Une validation orale n'engage personne et ne laisse aucune trace.",
        "Approbation formelle au bon niveau, compensating controls, date d'expiration et revue périodique : les quatre conditions d'une exception maîtrisée.",
        "Une exception permanente devient une vulnérabilité oubliée : piège de l'absolu.",
        "Refuser tout processus d'exception pousse au contournement non documenté."
      ]
    },
    {
      q: "Un chercheur a notifié en privé une vulnérabilité à un éditeur qui ne répond plus depuis plus de 90 jours malgré plusieurs relances. QUELLE est la démarche la PLUS conforme à l'ethical disclosure ?",
      choix: [
        "Publier immédiatement un exploit fonctionnel complet",
        "Vendre la vulnérabilité au plus offrant",
        "Recourir à un organisme de coordination (comme un CERT) pour une divulgation coordonnée, puis publier de façon responsable les informations nécessaires à la protection des utilisateurs",
        "Garder le silence indéfiniment pour éviter tout conflit"
      ],
      reponse: 2,
      explication:
        "Quand l'éditeur reste silencieux malgré une notification privée et un délai raisonnable, la divulgation coordonnée via un organisme tiers de confiance, tel qu'un CERT de coordination, est la voie éthique : elle maintient la pression sur l'éditeur tout en préparant une publication responsable qui permet aux utilisateurs de se protéger, sans fournir d'arme clé en main. Publier un exploit complet (A) et vendre (B) sont contraires à l'éthique ; se taire indéfiniment (D) laisse les utilisateurs exposés à leur insu.",
      difficulte: 3,
      pourquoi: [
        "Publier un exploit fonctionnel arme les attaquants avant les défenseurs.",
        "Vendre la faille trahit l'éthique professionnelle.",
        "La divulgation coordonnée via un CERT maintient la pression sur l'éditeur et prépare une publication responsable qui protège les utilisateurs.",
        "Le silence indéfini laisse les utilisateurs exposés à leur insu : piège de l'inaction."
      ]
    },
    {
      q: "Un RSSI dispose d'un budget limité pour les tests offensifs d'une plateforme SaaS mature, déjà couverte par le pentest annuel exigé par PCI DSS. Son objectif est de maximiser la découverte CONTINUE de vulnérabilités réelles sur le périmètre exposé au public. QUELLE est la MEILLEURE allocation du budget restant ?",
      choix: [
        "Passer le pentest à un rythme semestriel",
        "Lancer un programme de bug bounty ciblé sur le périmètre public, avec règles d'engagement et processus de triage définis",
        "Financer un engagement red team furtif de six mois pour éprouver la détection du SOC",
        "Acquérir une plateforme de Breach and Attack Simulation pour rejouer des scénarios d'attaque connus"
      ],
      reponse: 1,
      explication:
        "Le pentest annuel couvre déjà l'exigence de conformité ; le besoin exprimé est la découverte continue sur le périmètre public. Le bug bounty mobilise en permanence une diversité de chercheurs, payés au résultat : c'est l'option la plus efficiente pour cet objectif à budget contraint. Doubler le pentest (A) reste ponctuel, la red team (C) évalue la détection et la réponse — un autre objectif —, et la BAS (D) valide les contrôles contre des scénarios connus sans découvrir de vulnérabilités nouvelles.",
      difficulte: 3,
      pourquoi: [
        "Techniquement utile mais toujours ponctuel : deux photos par an ne créent pas la découverte continue recherchée — piège du « plus de la même chose ».",
        "Le bug bounty mobilise en continu une diversité de chercheurs sur le périmètre public et paie au résultat : c'est l'option qui répond exactement à l'objectif énoncé avec un budget contraint.",
        "Vraie valeur mais hors objectif : la red team éprouve la détection et la réponse du SOC, pas la découverte exhaustive de failles exposées — réponse correcte à une autre question.",
        "La BAS rejoue des scénarios connus pour valider les contrôles existants ; elle ne découvre pas de vulnérabilités nouvelles — techniquement vrai mais inadapté au besoin."
      ]
    },
    {
      q: "La direction veut annoncer publiquement un programme de bug bounty au prochain salon professionnel, dans six semaines. En tant que RSSI, QUE devez-vous vérifier EN PREMIER avant le lancement ?",
      choix: [
        "Que le montant des récompenses est compétitif par rapport au marché",
        "Que l'organisation dispose d'un processus de triage et de remédiation capable d'absorber le flux de rapports, et de règles d'engagement avec safe harbor",
        "Que la plateforme de bug bounty retenue est la plus reconnue du secteur",
        "Que le pentest annuel a bien été réalisé avant l'ouverture du programme"
      ],
      reponse: 1,
      explication:
        "Un bug bounty public génère immédiatement un flux de rapports de qualité variable : sans capacité de triage, de qualification et de remédiation, le programme s'effondre et la réputation avec. Les règles d'engagement avec clause de safe harbor protègent juridiquement les chercheurs et l'organisation. Les récompenses (A) et le choix de plateforme (C) sont des paramètres secondaires, et le pentest préalable (D) est une bonne pratique non bloquante.",
      difficulte: 3,
      pourquoi: [
        "Techniquement pertinent pour attirer les chercheurs, mais inutile si l'organisation ne sait pas traiter leurs rapports : critère secondaire.",
        "Sans capacité de triage et de remédiation ni règles d'engagement avec safe harbor, le programme génère un flux ingérable et des risques juridiques : c'est le prérequis à valider avant tout lancement.",
        "Choix de fournisseur, pas condition de réussite : piège du critère de sélection pris pour un prérequis.",
        "Bonne pratique réelle mais non bloquante : un bug bounty peut coexister avec le cycle de pentest, ce n'est pas la porte d'entrée du lancement."
      ]
    },
    {
      q: "Votre programme de gestion des tiers doit évaluer 300 fournisseurs avec deux analystes, et le régulateur exige une assurance proportionnée au risque. QUELLE approche est la PLUS défendable ?",
      choix: [
        "Envoyer à tous les fournisseurs le même questionnaire détaillé de 400 questions",
        "Exiger un audit sur site annuel de chaque fournisseur",
        "Segmenter les fournisseurs par criticité : rapports d'audit indépendants (SOC 2 Type II ou équivalent) pour les tiers critiques, questionnaires pour les tiers à faible risque, audits sur site réservés aux risques élevés non couverts",
        "Accepter la certification ISO 27001 comme assurance suffisante pour tous les fournisseurs"
      ],
      reponse: 2,
      explication:
        "La proportionnalité exigée par le régulateur s'obtient en alignant le niveau d'assurance sur la criticité du tiers : attestations indépendantes dans la durée pour les fournisseurs critiques, auto-évaluations questionnaires pour la masse à faible risque, audits sur site en dernier recours ciblé. Le questionnaire unique (A) sature l'équipe sans discriminer le risque, l'audit sur site universel (B) est irréaliste, et la certification ISO 27001 seule (D) atteste un système de management sans couvrir tous les services ni tous les risques.",
      difficulte: 3,
      pourquoi: [
        "Uniforme et ingérable : 300 questionnaires détaillés dépassent la capacité de deux analystes et traitent le fournisseur critique comme le tiers anodin.",
        "Absolu et irréaliste : l'audit sur site universel est financièrement impossible et disproportionné pour les tiers à faible risque.",
        "La segmentation par criticité aligne l'effort d'assurance sur le risque, exactement la proportionnalité exigée par le régulateur avec des ressources contraintes.",
        "Techniquement vrai qu'ISO 27001 apporte une assurance, mais un certificat de système de management ne couvre ni tous les services consommés ni tous les risques : insuffisant seul pour les tiers critiques."
      ]
    },
    {
      q: "Un fournisseur cloud critique refuse votre clause d'audit sur site en invoquant la mutualisation de son environnement, et propose à la place son rapport SOC 2 Type II sous NDA, ses attestations de pentest et une clause de notification d'incident. QUELLE est la MEILLEURE réponse du responsable de la gestion des tiers ?",
      choix: [
        "Refuser le contrat : sans droit d'audit sur site, aucune assurance n'est possible",
        "Évaluer si le périmètre et les critères du SOC 2 Type II couvrent les services consommés et les obligations réglementaires, puis combler les écarts par des exigences contractuelles ciblées",
        "Accepter le rapport SOC 2 tel quel, puisque c'est le standard du marché",
        "Exiger la complétion de votre questionnaire interne détaillé en remplacement de l'audit"
      ],
      reponse: 1,
      explication:
        "Le refus d'audit sur site est courant et légitime chez les fournisseurs cloud mutualisés : l'assurance passe alors par l'analyse critique du rapport d'audit indépendant. Il faut vérifier que le périmètre (services, sites, période) et les Trust Services Criteria couverts correspondent aux services réellement consommés et aux obligations réglementaires, puis traiter les écarts par contrat. Refuser en bloc (A) est un absolu contre-productif, accepter sans analyse (C) revient à une assurance de façade, et un questionnaire auto-déclaratif (D) est plus faible que l'attestation indépendante déjà proposée.",
      difficulte: 3,
      pourquoi: [
        "Absolu : le refus d'audit sur site est courant chez les fournisseurs cloud mutualisés et n'empêche pas une assurance robuste par d'autres moyens.",
        "Analyser le périmètre et les critères du rapport, vérifier la couverture des services consommés et combler les écarts par contrat : la démarche d'assurance proportionnée attendue d'un responsable des tiers.",
        "Accepter sans analyse est le piège inverse : un SOC 2 dont le périmètre n'inclut pas vos services ne vous assure de rien.",
        "Un questionnaire auto-déclaratif est plus faible que le rapport d'audit indépendant déjà proposé : c'est une régression d'assurance."
      ]
    },
    {
      q: "Votre entreprise s'apprête à déployer un assistant conversationnel fondé sur un LLM, connecté à la base clients, pour le support de premier niveau. Le pentest applicatif classique n'a rien relevé. En tant que RSSI, QUELLE assurance supplémentaire devez-vous exiger EN PRIORITÉ avant la mise en production ?",
      choix: [
        "Un test de charge validant la tenue aux pics de trafic",
        "Des tests adversariaux ciblant les risques propres aux LLM : injection de prompt, exfiltration de données clients via les réponses, contournement des garde-fous",
        "Une nouvelle passe d'analyse statique (SAST) sur le code d'intégration",
        "Une attestation de l'éditeur du modèle sur la sécurité de son entraînement"
      ],
      reponse: 1,
      explication:
        "Les systèmes fondés sur des LLM présentent des modes de défaillance spécifiques — injection de prompt directe ou indirecte, divulgation de données sensibles dans les réponses, contournement des garde-fous — qu'aucun pentest applicatif classique ni SAST ne couvre. Avant de connecter un modèle à des données clients, des tests adversariaux dédiés (red teaming IA) sont l'assurance manquante. Le test de charge (A) est une préoccupation d'exploitation, le SAST (C) ne voit pas le comportement du modèle, et l'attestation de l'éditeur (D) ne teste ni votre intégration ni vos données.",
      difficulte: 3,
      pourquoi: [
        "Vraie préoccupation d'exploitation, mais elle ne couvre aucun des risques de sécurité propres au LLM : hors sujet pour la décision de sécurité.",
        "L'injection de prompt, la fuite de données clients via les réponses et le contournement des garde-fous sont des risques spécifiques aux LLM que le pentest classique ne couvre pas : c'est l'assurance manquante avant le go-live.",
        "Techniquement utile mais déjà couverte par le cycle applicatif : l'analyse statique ne voit pas les comportements émergents du modèle.",
        "Une attestation de l'éditeur ne teste ni votre intégration ni vos données : piège du transfert de confiance sans vérification."
      ]
    },
    {
      q: "Votre équipe de gestion des vulnérabilités traite 2 000 findings par mois en les classant par score CVSS décroissant, mais les vulnérabilités réellement exploitées dans votre secteur restent ouvertes plusieurs semaines. QUELLE évolution du processus est la PLUS pertinente ?",
      choix: [
        "Abaisser le seuil de traitement pour couvrir aussi les scores moyens",
        "Intégrer la probabilité d'exploitation (EPSS) et les catalogues de vulnérabilités activement exploitées (type KEV) comme premiers critères, pondérés par la criticité des actifs",
        "Recruter des analystes supplémentaires pour traiter davantage de findings chaque mois",
        "Basculer la priorisation sur le score CVSS environnemental recalculé pour chaque actif"
      ],
      reponse: 1,
      explication:
        "Le symptôme décrit — des failles exploitées qui attendent derrière des failles critiques théoriques — est la limite connue du tri par CVSS brut. Les scores de probabilité d'exploitation (EPSS) et les catalogues d'exploitation avérée (comme le KEV de la CISA), croisés avec la criticité métier des actifs, concentrent l'effort sur le risque réel. Élargir le volume (A) ou recruter (C) aggravent ou compensent l'engorgement sans corriger le critère de tri, et le score environnemental (D), utile en théorie, ne capture pas l'exploitation active et serait impraticable à cette échelle.",
      difficulte: 3,
      pourquoi: [
        "Élargir le volume traité sans changer le critère de tri aggrave l'engorgement : plus d'efforts, même aveuglement.",
        "EPSS et catalogues type KEV mesurent la probabilité et la réalité de l'exploitation ; croisés avec la criticité des actifs, ils concentrent l'effort sur le risque réel : l'évolution attendue d'un programme mature.",
        "Réponse de moyens : plus d'analystes traitant dans le mauvais ordre ne réduisent pas l'exposition aux failles exploitées.",
        "Techniquement vrai que le score environnemental contextualise, mais il ne capture pas l'exploitation active et son recalcul par actif est impraticable à cette échelle : vrai mais contextuellement insuffisant."
      ]
    },
    {
      q: "Le comité exécutif n'a jamais participé à un exercice de crise cyber ; le conseil d'administration en demande un premier dans le trimestre, sans perturber la production. QUEL format devriez-vous proposer ?",
      choix: [
        "Un exercice technique de bascule du datacenter avec les équipes d'exploitation",
        "Un test full-interruption pour démontrer la réalité du risque à la direction",
        "Un exercice sur table (tabletop) fondé sur un scénario de ransomware, centré sur les décisions du comité exécutif : communication, obligations légales, arbitrages métier",
        "Une campagne de phishing simulée ciblant les membres du comité exécutif"
      ],
      reponse: 2,
      explication:
        "L'objectif est d'entraîner les dirigeants à décider en crise, pas de valider la technique : le tabletop exercise construit sur un scénario réaliste confronte le comité exécutif aux décisions qui lui reviennent — communication de crise, notification aux régulateurs, arbitrages de continuité, question de la rançon — sans toucher à la production et dans le délai imparti. La bascule technique (A) entraîne les mauvaises personnes, le full-interruption (B) est disproportionné pour une première fois, et le phishing simulé (D) mesure la vigilance individuelle, pas la décision collective.",
      difficulte: 3,
      pourquoi: [
        "Exercice utile mais destiné aux équipes techniques : il n'entraîne pas le comité exécutif à décider.",
        "Absolu et disproportionné : interrompre la production pour une première sensibilisation de la direction est un risque injustifiable.",
        "Le tabletop centré sur les décisions de crise — communication, obligations légales, arbitrages métier — entraîne exactement la population visée, sans toucher à la production et dans le délai imparti.",
        "La simulation de phishing mesure la vigilance individuelle, pas la capacité collective de décision en crise : hors objectif."
      ]
    },
    {
      q: "Le conseil d'administration juge le reporting sécurité « illisible » : quarante métriques techniques présentées chaque trimestre. QUELLE refonte du tableau de bord est la PLUS adaptée ?",
      choix: [
        "Réduire le nombre de métriques en conservant les indicateurs techniques les plus précis, comme le taux de patching par système d'exploitation",
        "Présenter un petit nombre d'indicateurs reliés au risque métier : exposition des actifs critiques, tendances dans le temps, comparaison aux seuils d'appétence au risque validés par le conseil",
        "Conserver les métriques et ajouter une annexe méthodologique expliquant chacune d'elles",
        "Confier la présentation au prestataire du SOC, qui maîtrise le détail des indicateurs"
      ],
      reponse: 1,
      explication:
        "Un conseil d'administration exerce une surveillance : il a besoin de peu d'indicateurs, exprimés en termes de risque métier, montrant des tendances et situés par rapport à l'appétence au risque qu'il a lui-même validée. C'est ce qui rend un tableau de bord « board-ready ». Réduire sans changer d'altitude (A) laisse des métriques de technicien, l'annexe méthodologique (C) documente l'illisible au lieu de le rendre décisionnel, et déléguer au prestataire (D) ajoute du détail technique tout en diluant la responsabilité du RSSI devant le conseil.",
      difficulte: 3,
      pourquoi: [
        "Réduire le volume sans changer d'altitude : des métriques techniques précises restent illisibles pour un conseil d'administration — réponse de technicien.",
        "Peu d'indicateurs, reliés au risque métier et à l'appétence validée par le conseil, avec des tendances : le format qui permet à un conseil d'exercer sa surveillance.",
        "Documenter l'illisible ne le rend pas décisionnel : piège de l'effort pédagogique mal placé.",
        "Déléguer la présentation au prestataire ajoute du détail technique et dilue la responsabilité du RSSI devant le conseil."
      ]
    },
    {
      q: "Après trois ans de pentests annuels aux findings récurrents, la direction demande si le programme d'évaluation apporte encore de la valeur. QUEL indicateur démontrerait le MIEUX l'efficacité du programme dans la durée ?",
      choix: [
        "Le nombre total de vulnérabilités découvertes à chaque campagne de test",
        "La tendance du taux de findings récurrents et du délai de remédiation entre deux cycles de test",
        "Le coût journalier du cabinet de pentest comparé aux tarifs du marché",
        "Le nombre de systèmes couverts par chaque campagne de test"
      ],
      reponse: 1,
      explication:
        "L'efficacité d'un programme d'évaluation ne se mesure pas au volume de découvertes mais à sa capacité à produire un changement durable : si le taux de findings récurrents baisse et que le délai de remédiation se réduit de cycle en cycle, le programme transforme réellement la posture de sécurité. Le comptage brut (A) peut rester stable pour de mauvaises raisons, le coût journalier (C) mesure la compétitivité de l'achat, et la couverture (D) est une condition de qualité du test, pas une preuve d'amélioration.",
      difficulte: 3,
      pourquoi: [
        "Le comptage brut de findings ne dit pas si l'organisation s'améliore : un chiffre stable peut cacher un périmètre croissant ou une remédiation défaillante — piège de l'indicateur d'activité.",
        "La baisse des findings récurrents et du délai de remédiation entre cycles prouve que le programme produit un changement durable : la vraie mesure d'efficacité dans le temps.",
        "Le coût journalier mesure la compétitivité de l'achat, pas la valeur produite par le programme.",
        "La couverture est une condition de qualité du test, pas une preuve d'amélioration de la posture."
      ]
    },
    {
      q: "Votre SOC détecte désormais la plupart des scénarios rejoués par votre plateforme BAS. Le RSSI veut éprouver la résilience face à un adversaire créatif et persistant, avec un budget n'autorisant qu'un seul engagement majeur. QUEL choix est le PLUS cohérent avec cet objectif ?",
      choix: [
        "Renouveler l'abonnement BAS en élargissant la bibliothèque de scénarios",
        "Un engagement red team orienté objectifs, mené en furtivité sur plusieurs semaines, suivi d'une restitution purple team",
        "Un pentest white box exhaustif de l'infrastructure interne",
        "Un audit de maturité du SOC selon un référentiel reconnu"
      ],
      reponse: 1,
      explication:
        "La BAS a atteint sa limite : elle rejoue des scénarios connus, or l'objectif est désormais de confronter l'organisation à un adversaire adaptatif. Seul un engagement red team orienté objectifs, furtif et étalé dans le temps, simule cette créativité ; la restitution purple team convertit ensuite l'exercice en améliorations concrètes de détection. Élargir la BAS (A) reste dans le connu, le pentest white box (C) inventorie des vulnérabilités sans éprouver la résilience face à un intrus furtif, et l'audit de maturité (D) évalue des processus sur dossier sans confrontation réelle.",
      difficulte: 3,
      pourquoi: [
        "Techniquement vrai que la bibliothèque s'enrichit, mais la BAS rejoue des scénarios connus : elle ne modélise pas un adversaire créatif et persistant.",
        "Seul un engagement red team orienté objectifs, furtif et dans la durée, confronte l'organisation à un adversaire adaptatif ; la restitution purple team convertit l'exercice en améliorations de détection.",
        "Exhaustif mais hors objectif : le pentest white box inventorie des vulnérabilités, il n'éprouve pas la résilience face à un adversaire furtif — réponse de technicien.",
        "Un audit de maturité évalue des processus sur dossier : aucune confrontation réelle avec un attaquant."
      ]
    }
  ],
  quizEn: [
    {
      q: "During an authorized penetration test, the tester obtains credentials that grant access to a system explicitly excluded from the agreed scope. What should the tester do NEXT?",
      choix: [
        "Use the credentials to demonstrate maximum business impact",
        "Refrain from accessing the system and report the finding to the designated client contact per the rules of engagement",
        "Access the system briefly to confirm the credentials are valid",
        "Delete the credentials and omit them from the report"
      ],
      reponse: 1,
      explication:
        "Le périmètre et les Rules of Engagement définissent la limite de l'autorisation légale du testeur : un système explicitement exclu ne doit pas être touché, même avec des identifiants valides. La conduite correcte est de s'abstenir et de signaler la découverte au contact désigné, qui décidera d'une éventuelle extension de périmètre écrite. Utiliser les identifiants (A) ou même « vérifier brièvement » (C) constitue un accès non autorisé, et omettre l'information du rapport (D) prive le client d'un finding important.",
      difficulte: 2,
      pourquoi: [
        "Utiliser les identifiants hors périmètre est un accès non autorisé, quel que soit l'intérêt démonstratif.",
        "S'abstenir et signaler au contact désigné respecte la limite légale des Rules of Engagement tout en valorisant le finding.",
        "Même une vérification « brève » constitue un accès non autorisé : piège de la bonne intention.",
        "Omettre le finding prive le client d'une information de sécurité majeure."
      ]
    },
    {
      q: "An organization needs assurance that a SaaS provider's security controls operated effectively over the past nine months. Which report BEST meets this requirement?",
      choix: ["SOC 2 Type I", "SOC 2 Type II", "SOC 3", "SOC 1 Type I"],
      reponse: 1,
      explication:
        "Le SOC 2 Type II couvre à la fois la conception ET l'efficacité opérationnelle des contrôles sur une période étendue (au moins six mois) : c'est le rapport adapté quand on veut une assurance sur le fonctionnement dans la durée. Le Type I (A) n'évalue la conception qu'à un instant donné, le SOC 3 (C) est une version publique résumée sans le détail des tests, et le SOC 1 (D) porte sur les contrôles affectant le reporting financier.",
      difficulte: 1,
      pourquoi: [
        "Le Type I photographie la conception à un instant donné : aucune preuve sur neuf mois.",
        "Le SOC 2 Type II atteste conception et efficacité opérationnelle sur une période étendue : exactement l'assurance demandée.",
        "Le SOC 3 est un résumé public sans le détail des tests.",
        "Le SOC 1 concerne le reporting financier, et le Type I reste ponctuel."
      ]
    },
    {
      q: "Which SOC report is specifically designed for unrestricted public distribution, for example on a vendor's website?",
      choix: ["SOC 1 Type II", "SOC 2 Type I", "SOC 2 Type II", "SOC 3"],
      reponse: 3,
      explication:
        "Le SOC 3 est conçu pour une diffusion publique sans restriction : il atteste que l'organisation a satisfait aux Trust Services Criteria sans divulguer le détail des contrôles ni des tests, et sert souvent d'argument commercial. Les rapports SOC 1 et SOC 2 (A, B, C) contiennent des détails sensibles et sont partagés de manière restreinte, généralement sous NDA.",
      difficulte: 1,
      pourquoi: [
        "Le SOC 1 est restreint et porte sur le reporting financier.",
        "Le SOC 2 Type I est confidentiel, partagé sous NDA.",
        "Le SOC 2 Type II, le plus détaillé, est justement le plus restreint.",
        "Le SOC 3 est conçu pour la diffusion publique sans restriction, typiquement sur le site du fournisseur."
      ]
    },
    {
      q: "A security manager must prioritize remediation of dozens of vulnerabilities. Beyond the CVSS base score, which factor should MOST influence the prioritization?",
      choix: [
        "The raw number of vulnerabilities found on each host",
        "Evidence of active exploitation in the wild combined with the business criticality of the affected assets",
        "The age of each CVE identifier",
        "The availability of a vendor-supplied patch for each finding"
      ],
      reponse: 1,
      explication:
        "Le score CVSS de base mesure une sévérité intrinsèque, pas le risque contextuel. Une priorisation efficace croise ce score avec l'exploitation active observée (threat intelligence, catalogues de vulnérabilités exploitées) et la criticité métier des actifs touchés : une faille moyennement notée mais activement exploitée sur un actif critique passe avant une faille critique théorique sur un système isolé. Le volume brut par hôte (A) mesure une charge de travail, l'ancienneté du CVE (C) est un critère secondaire, et la disponibilité d'un correctif (D) influence le mode de traitement, pas la priorité du risque.",
      difficulte: 2,
      pourquoi: [
        "Le volume brut par hôte mesure une charge de travail, pas un risque.",
        "Exploitation active dans la nature et criticité métier des actifs transforment la sévérité en risque réel : les deux facteurs décisifs.",
        "L'ancienneté d'un CVE ne prédit pas son exploitabilité actuelle : critère secondaire.",
        "La disponibilité d'un correctif influence le mode de traitement, pas la priorité du risque."
      ]
    },
    {
      q: "Which CVSS metric group allows an organization to adjust a vulnerability score based on the importance of the affected asset in its OWN context?",
      choix: ["Base", "Temporal", "Environmental", "Exploitability"],
      reponse: 2,
      explication:
        "Le groupe Environmental permet d'adapter le score au contexte propre de l'organisation, notamment via les exigences de confidentialité, d'intégrité et de disponibilité de l'actif concerné et les métriques de base modifiées. Le groupe Base (A) est constant et universel, le groupe Temporal (B) reflète des facteurs évoluant dans le temps comme la maturité de l'exploit, et « Exploitability » (D) est un sous-ensemble de métriques, pas un groupe de contextualisation.",
      difficulte: 2,
      pourquoi: [
        "Le groupe Base est universel et constant, sans contextualisation.",
        "Le groupe Temporal suit l'évolution dans le temps (exploit, correctif), pas le contexte de l'actif.",
        "Le groupe Environmental ajuste le score aux exigences propres de l'organisation pour l'actif concerné.",
        "« Exploitability » est un sous-ensemble de métriques de base, pas un groupe de contextualisation."
      ]
    },
    {
      q: "In the NIST SP 800-115 penetration testing methodology, gaining access to systems and escalating privileges occurs during which phase?",
      choix: ["Planning", "Discovery", "Attack", "Reporting"],
      reponse: 2,
      explication:
        "La phase d'attack du NIST SP 800-115 regroupe le gain d'accès initial, l'élévation de privilèges, le pivot vers d'autres systèmes (system browsing) et l'installation d'outils additionnels. Le planning (A) fixe le périmètre et les Rules of Engagement, la discovery (B) couvre la reconnaissance et l'énumération, et le reporting (D) restitue les résultats au client.",
      difficulte: 1,
      pourquoi: [
        "Le planning fixe périmètre et Rules of Engagement, avant toute action.",
        "La discovery couvre reconnaissance et énumération, sans accès aux systèmes.",
        "Gain d'accès et élévation de privilèges définissent la phase d'attack du NIST SP 800-115.",
        "Le reporting restitue les résultats, en clôture."
      ]
    },
    {
      q: "What is the PRIMARY purpose of the rules of engagement in a penetration test?",
      choix: [
        "To guarantee that no system will ever fail during the test",
        "To define the scope, authorized techniques, time windows, communication and escalation procedures that legally frame the test",
        "To list every vulnerability the testers expect to find",
        "To transfer all legal liability to the testing firm"
      ],
      reponse: 1,
      explication:
        "Les Rules of Engagement encadrent juridiquement et opérationnellement le test : périmètre exact, techniques autorisées ou interdites, fenêtres horaires, contacts, procédures de communication et d'escalade en cas d'incident. C'est ce document, avec l'autorisation écrite du management, qui distingue le test légal du piratage. Elles ne garantissent pas l'absence d'incident (A), ne prédisent pas les findings (C) et ne transfèrent pas toute la responsabilité (D).",
      difficulte: 1,
      pourquoi: [
        "Absolu : aucun document ne garantit l'absence d'incident.",
        "Périmètre, techniques autorisées, fenêtres, contacts et escalade : les Rules of Engagement encadrent légalement et opérationnellement le test.",
        "Les Rules of Engagement ne prédisent pas les findings.",
        "Elles répartissent les responsabilités, elles ne les transfèrent pas toutes au prestataire."
      ]
    },
    {
      q: "A red team emulates the tactics of a specific threat actor over several weeks without notifying the SOC. What is the PRIMARY objective of this engagement?",
      choix: [
        "To produce an exhaustive inventory of all technical vulnerabilities",
        "To evaluate the organization's real-world detection and response capabilities against a realistic adversary",
        "To verify compliance with ISO 27001 controls",
        "To train developers in secure coding practices"
      ],
      reponse: 1,
      explication:
        "Un engagement de red team est orienté objectifs : il émule un adversaire réaliste, dans la durée et en furtivité, précisément pour éprouver la capacité réelle de l'organisation (personnes, processus, technologies) à détecter et répondre. L'inventaire exhaustif des vulnérabilités (A) relève du vulnerability assessment ou du pen test classique, la conformité (C) relève de l'audit, et la formation des développeurs (D) n'est pas l'objet de l'exercice.",
      difficulte: 2,
      pourquoi: [
        "L'inventaire exhaustif relève du vulnerability assessment, pas d'une red team furtive.",
        "Émuler un adversaire réaliste dans la durée pour éprouver détection et réponse réelles : l'objectif premier d'un engagement red team.",
        "La conformité ISO relève de l'audit, pas de l'émulation d'adversaire.",
        "La formation des développeurs n'est pas l'objet d'un exercice offensif."
      ]
    },
    {
      q: "Which team construct is BEST described as a collaborative process in which offensive and defensive teams share techniques and findings to improve detections?",
      choix: ["White team", "Blue team", "Purple team", "Tiger team"],
      reponse: 2,
      explication:
        "La purple team n'est pas une équipe permanente distincte mais un mode de collaboration : la red team partage ses tactiques, techniques et procédures pendant que la blue team construit et valide ses détections, en boucle d'amélioration continue. La white team (A) arbitre et contrôle certains exercices, la blue team (B) est la défense seule, et « tiger team » (D) est un terme historique désignant une équipe offensive.",
      difficulte: 1,
      pourquoi: [
        "La white team arbitre et contrôle l'exercice, elle ne fusionne pas attaque et défense.",
        "La blue team est la défense seule.",
        "La purple team est ce processus collaboratif où offensif et défensif partagent techniques et findings pour améliorer les détections.",
        "« Tiger team » est un terme historique désignant une équipe offensive."
      ]
    },
    {
      q: "A development manager wants to identify security flaws in application source code before the application is ever executed. Which technique should be used?",
      choix: [
        "Dynamic application security testing",
        "Static application security testing",
        "Real user monitoring",
        "Breach and attack simulation"
      ],
      reponse: 1,
      explication:
        "Le SAST analyse le code source, le bytecode ou les binaires sans exécuter l'application : il s'intègre tôt dans le cycle de développement et détecte des motifs vulnérables (injections, gestion dangereuse de la mémoire) avant tout déploiement. Le DAST (A) exige une application en cours d'exécution, le RUM (C) observe passivement les utilisateurs réels en production, et la BAS (D) simule des attaques contre les contrôles de détection.",
      difficulte: 1,
      pourquoi: [
        "Le DAST exige une application en cours d'exécution : trop tard pour « avant toute exécution ».",
        "Le SAST analyse le code source sans exécuter l'application : la détection au plus tôt du cycle.",
        "Le RUM observe les utilisateurs réels en production.",
        "La BAS teste les contrôles de détection, pas le code source."
      ]
    },
    {
      q: "An organization deploys a commercial application without any access to its source code. Which security testing technique remains available?",
      choix: [
        "Fagan inspection",
        "Static code analysis",
        "Dynamic application security testing",
        "Branch coverage analysis"
      ],
      reponse: 2,
      explication:
        "Le DAST évalue l'application en cours d'exécution, de l'extérieur, sans nécessiter le code source : c'est souvent la seule option pour les logiciels tiers. L'inspection Fagan (A), l'analyse statique (B) et l'analyse de couverture des branches (D) requièrent toutes l'accès au code source ou aux artefacts internes du développement.",
      difficulte: 1,
      pourquoi: [
        "L'inspection Fagan est une revue de code : impossible sans le source.",
        "L'analyse statique exige le code ou des binaires instrumentables.",
        "Le DAST teste l'application en cours d'exécution, de l'extérieur : la seule option sans code source.",
        "La couverture des branches nécessite l'instrumentation du code."
      ]
    },
    {
      q: "A tester feeds a program with thousands of randomly modified variants of known valid inputs and monitors for crashes. Which technique is being used?",
      choix: [
        "Generational fuzzing",
        "Mutation fuzzing",
        "Misuse case testing",
        "Regression testing"
      ],
      reponse: 1,
      explication:
        "Le mutation fuzzing (dit « dumb fuzzing ») part d'entrées valides connues et les altère aléatoirement pour produire des entrées synthétiques susceptibles de provoquer des comportements inattendus ou des crashs. Le generational fuzzing (A) construit au contraire les entrées à partir d'un modèle de la spécification, le misuse case testing (C) rejoue des scénarios d'abus du point de vue de l'attaquant, et le regression testing (D) vérifie qu'une modification n'a rien cassé d'existant.",
      difficulte: 1,
      pourquoi: [
        "Le generational fuzzing construit les entrées depuis un modèle de la spécification, pas depuis des variantes aléatoires.",
        "Modifier aléatoirement des entrées valides connues et guetter les crashs : la définition du mutation fuzzing.",
        "Le misuse case testing rejoue des scénarios d'abus délibérés, pas des mutations aléatoires.",
        "Le regression testing vérifie qu'une modification n'a rien cassé d'existant."
      ]
    },
    {
      q: "Which code review process is the MOST formal, with defined entry and exit criteria for each of its six steps?",
      choix: [
        "Pair programming",
        "Over-the-shoulder review",
        "Fagan inspection",
        "Pull request review"
      ],
      reponse: 2,
      explication:
        "L'inspection Fagan est le processus de revue le plus formel : six étapes (planning, overview, preparation, inspection, rework, follow-up), chacune avec des critères d'entrée et de sortie, des rôles définis et des métriques. On la rencontre dans les environnements à très forte exigence (aéronautique, médical). Le pair programming (A), la revue informelle (B) et les pull requests (D) sont des formes plus légères de peer review.",
      difficulte: 2,
      pourquoi: [
        "Le pair programming est une revue continue informelle.",
        "La revue over-the-shoulder est la plus informelle.",
        "Six étapes avec critères d'entrée et de sortie définis : l'inspection Fagan est le processus le plus formel.",
        "La pull request est structurée mais légère comparée à Fagan."
      ]
    },
    {
      q: "An auditor correlating events across multiple systems notices that timestamps differ by several minutes between servers. Which control MOST LIKELY failed?",
      choix: [
        "Log encryption at rest",
        "Network Time Protocol synchronization across systems",
        "Role-based access control on the SIEM",
        "Log compression before archiving"
      ],
      reponse: 1,
      explication:
        "Des horodatages incohérents entre systèmes empêchent de reconstituer une chronologie fiable des événements : la cause la plus probable est un défaut de synchronisation NTP. Tous les systèmes émetteurs et le SIEM doivent être synchronisés sur des sources de temps fiables pour permettre la corrélation. Le chiffrement (A), le contrôle d'accès (C) et la compression (D) n'ont aucun effet sur la cohérence temporelle.",
      difficulte: 2,
      pourquoi: [
        "Le chiffrement au repos n'influence pas les horodatages.",
        "Des horloges décalées de plusieurs minutes trahissent un défaut de synchronisation NTP : le contrôle qui garantit une chronologie corrélable.",
        "Le contrôle d'accès au SIEM ne touche pas aux horloges.",
        "La compression est sans effet sur les horodatages."
      ]
    },
    {
      q: "A security team configures its monitoring so that failed logons are only reported when more than five occur within ten minutes for a given account. What is this threshold called?",
      choix: [
        "A retention period",
        "A clipping level",
        "A correlation window",
        "A sampling bias"
      ],
      reponse: 1,
      explication:
        "Un clipping level est un seuil prédéfini en dessous duquel les événements ordinaires sont ignorés et au-delà duquel ils sont signalés : ici, plus de cinq échecs de connexion en dix minutes. Cette technique de sélection non statistique concentre l'analyse sur les motifs anormaux et réduit le bruit. La rétention (A) concerne la durée de conservation, la fenêtre de corrélation (C) est un paramètre de règle SIEM plus général, et le biais d'échantillonnage (D) est un défaut statistique.",
      difficulte: 2,
      pourquoi: [
        "La rétention définit la conservation, pas un seuil de signalement.",
        "Un seuil au-delà duquel les événements sont signalés — plus de cinq échecs en dix minutes — est un clipping level.",
        "La fenêtre de corrélation est un paramètre de règle SIEM plus général.",
        "Le biais d'échantillonnage est un défaut statistique, pas un seuil volontaire."
      ]
    },
    {
      q: "What is the PRIMARY advantage of synthetic transactions over real user monitoring?",
      choix: [
        "They passively capture the experience of actual users",
        "They proactively verify system behavior against known expected results, even with no user traffic",
        "They eliminate the need for any other form of testing",
        "They are always less expensive to operate"
      ],
      reponse: 1,
      explication:
        "Les transactions synthétiques sont scriptées avec des résultats attendus connus : elles s'exécutent de manière proactive, y compris en l'absence de trafic réel, et détectent les dégradations avant que les utilisateurs ne les subissent. Le RUM (A) est au contraire passif et dépend du trafic réel. Les transactions synthétiques ne remplacent pas les autres tests (C) et leur coût (D) n'est pas leur avantage distinctif.",
      difficulte: 2,
      pourquoi: [
        "C'est la définition du RUM, l'inverse des transactions synthétiques.",
        "Scriptées avec un résultat attendu connu, elles vérifient proactivement le comportement même sans trafic réel : leur avantage distinctif.",
        "Absolu : aucune technique n'élimine le besoin des autres tests.",
        "Le coût n'est pas leur avantage caractéristique."
      ]
    },
    {
      q: "Which of the following metrics is BEST classified as a key risk indicator (KRI)?",
      choix: [
        "The number of incidents closed last quarter",
        "The mean time to detect incidents over the past year",
        "The percentage of critical systems running software that will lose vendor support within twelve months",
        "The number of security awareness sessions delivered"
      ],
      reponse: 2,
      explication:
        "Un KRI regarde vers l'avenir et signale une exposition croissante au risque : la proportion de systèmes critiques bientôt privés de support éditeur annonce une accumulation prévisible de vulnérabilités non corrigeables et appelle une décision. Les incidents clos (A), le temps de détection passé (B) et les formations dispensées (D) mesurent la performance passée du programme : ce sont des KPI.",
      difficulte: 3,
      pourquoi: [
        "Incidents clos : performance passée, donc KPI.",
        "Temps de détection historique : KPI rétrospectif.",
        "Des systèmes critiques bientôt sans support éditeur signalent une exposition future croissante : la définition d'un KRI.",
        "Sessions de sensibilisation dispensées : mesure d'effort, KPI."
      ]
    },
    {
      q: "Senior management asks for a metric that shows whether the security program's strategic objectives have actually been achieved. Which metric type answers this question?",
      choix: [
        "Key performance indicator",
        "Key risk indicator",
        "Key goal indicator",
        "Service level agreement"
      ],
      reponse: 2,
      explication:
        "Le KGI (Key Goal Indicator) mesure l'atteinte des objectifs : il répond à la question « le but fixé est-il atteint ? », ce qui correspond au besoin de gouvernance exprimé. Le KPI (A) mesure la performance des processus qui concourent au but, le KRI (B) alerte sur l'exposition au risque future, et un SLA (D) est un engagement contractuel de niveau de service.",
      difficulte: 2,
      pourquoi: [
        "Le KPI mesure la performance des processus, pas l'atteinte des objectifs stratégiques.",
        "Le KRI alerte sur l'exposition au risque à venir.",
        "Le KGI répond à « l'objectif est-il atteint ? » : la question posée par la direction.",
        "Le SLA est un engagement contractuel, pas une métrique de gouvernance."
      ]
    },
    {
      q: "Which disaster recovery test activates the alternate processing site while the primary site CONTINUES normal production operations?",
      choix: [
        "Full-interruption test",
        "Parallel test",
        "Tabletop exercise",
        "Read-through"
      ],
      reponse: 1,
      explication:
        "Le parallel test active le site de repli et y rejoue les traitements en parallèle de la production, qui n'est jamais interrompue : on valide la capacité réelle de reprise sans risque opérationnel majeur. Le full-interruption test (A) bascule réellement la production (risque maximal), le tabletop (C) est une discussion de scénario en salle, et la read-through (D) une simple revue documentaire du plan.",
      difficulte: 2,
      pourquoi: [
        "Le full-interruption bascule réellement la production : elle ne continue pas normalement.",
        "Activer le site de repli pendant que la production continue : la définition du parallel test.",
        "Le tabletop reste en salle, sans activer aucun site.",
        "La read-through est une revue documentaire."
      ]
    },
    {
      q: "A business continuity manager gathers the recovery team in a conference room and walks through a simulated disaster scenario without touching any system. Which type of test is this?",
      choix: [
        "Parallel test",
        "Full-interruption test",
        "Structured walkthrough (tabletop exercise)",
        "Simulation with live failover"
      ],
      reponse: 2,
      explication:
        "Le structured walkthrough, ou tabletop exercise, réunit l'équipe autour d'un scénario de sinistre joué sur table : chacun déroule son rôle et le plan est confronté au scénario, sans toucher aux systèmes. C'est peu coûteux et révélateur des lacunes de coordination. Le parallel test (A) et le full-interruption (B) mobilisent réellement les infrastructures, et une bascule réelle (D) dépasse le cadre décrit.",
      difficulte: 1,
      pourquoi: [
        "Le parallel test active réellement le site de repli.",
        "Le full-interruption interrompt la production.",
        "Un scénario simulé déroulé en salle sans toucher aux systèmes : le structured walkthrough, ou tabletop exercise.",
        "Une bascule réelle dépasse le cadre décrit."
      ]
    },
    {
      q: "A critical vulnerability cannot be patched because the vendor no longer supports the system, which must remain in production for two more years. What should the security manager do FIRST?",
      choix: [
        "Accept the risk silently and take no further action",
        "Implement compensating controls, document a formal risk exception approved by the appropriate management level, and schedule periodic reviews",
        "Disconnect the system immediately regardless of business impact",
        "Reinstall the operating system to remove the vulnerability"
      ],
      reponse: 1,
      explication:
        "Quand la correction est impossible, la démarche correcte combine des compensating controls (segmentation, restriction d'accès, surveillance renforcée), une exception formellement approuvée par le niveau de management habilité à accepter le risque, et une revue périodique de la décision. L'acceptation silencieuse (A) n'est ni tracée ni autorisée, la déconnexion brutale (C) ignore l'impact métier, et la réinstallation (D) ne corrige pas une vulnérabilité du logiciel lui-même.",
      difficulte: 2,
      pourquoi: [
        "Accepter en silence n'est ni tracé ni autorisé : personne n'a formellement validé le risque.",
        "Compensating controls, exception formellement approuvée au bon niveau et revues périodiques : la réponse complète quand le correctif n'existe pas.",
        "Absolu : déconnecter sans égard à l'impact métier n'est pas une décision de manager.",
        "Réinstaller ne corrige pas une vulnérabilité du logiciel lui-même."
      ]
    },
    {
      q: "A security researcher privately reported a vulnerability to a vendor. After repeated attempts over a reasonable period, the vendor has not responded. What is the MOST ethical next step?",
      choix: [
        "Publish a fully weaponized exploit to force the vendor to react",
        "Sell the vulnerability details to the highest bidder",
        "Engage a coordination body such as a CERT to pursue coordinated disclosure",
        "Take no further action and keep the flaw secret indefinitely"
      ],
      reponse: 2,
      explication:
        "Face à un éditeur silencieux malgré une notification privée et un délai raisonnable, l'ethical disclosure recommande de passer par un organisme de coordination, tel qu'un CERT, pour organiser une divulgation coordonnée : cela maintient la pression sur l'éditeur et prépare une publication responsable permettant aux utilisateurs de se protéger. Publier un exploit armé (A) et vendre la faille (B) sont contraires à l'éthique, et le silence perpétuel (D) laisse les utilisateurs exposés à leur insu.",
      difficulte: 3,
      pourquoi: [
        "Publier un exploit armé expose les utilisateurs avant tout correctif.",
        "Vendre la faille est contraire à l'éthique professionnelle.",
        "Passer par un organisme de coordination type CERT pour une divulgation coordonnée : la voie éthique face à un éditeur silencieux.",
        "Le secret indéfini laisse les utilisateurs vulnérables à leur insu."
      ]
    },
    {
      q: "Which statement about an INTERNAL audit team is TRUE?",
      choix: [
        "It offers greater independence than an external audit firm",
        "Its familiarity with the environment reduces audit time and increases scheduling agility, at the cost of lower perceived independence",
        "Its reports are universally accepted by regulators as independent attestations",
        "It must always report administratively to the CIO"
      ],
      reponse: 1,
      explication:
        "L'atout de l'audit interne est la connaissance de l'environnement, qui réduit le temps d'audit et permet de replanifier avec agilité ; sa limite est une indépendance perçue moindre, car les auditeurs appartiennent à l'organisation. Les régulateurs et investisseurs préfèrent des attestations externes (C), et pour préserver son objectivité l'audit interne doit rendre compte au comité d'audit, surtout pas au DSI dont il audite les systèmes (D).",
      difficulte: 2,
      pourquoi: [
        "Inversé : l'indépendance est l'atout des cabinets externes.",
        "Connaissance de l'environnement, gain de temps et agilité de planification, au prix d'une indépendance perçue moindre : le vrai profil de l'audit interne.",
        "Absolu et faux : les régulateurs privilégient les attestations externes.",
        "Absolu : l'audit interne doit justement rendre compte au comité d'audit, pas au DSI."
      ]
    },
    {
      q: "During a port scan, nmap reports a port as 'closed'. What does this state indicate?",
      choix: [
        "A firewall is blocking the scanner's probes",
        "The port is reachable but no service is listening on it",
        "A service is accepting connections on the port",
        "The host is powered off"
      ],
      reponse: 1,
      explication:
        "L'état closed signifie que le port est accessible, la cible répond aux sondes, mais qu'aucun service n'écoute sur ce port. L'état filtered (A) correspond au cas où un dispositif de filtrage empêche le scanner de conclure, l'état open (C) indique un service qui accepte les connexions, et un hôte éteint (D) ne répondrait pas du tout aux sondes.",
      difficulte: 2,
      pourquoi: [
        "Un blocage par firewall correspond à l'état filtered.",
        "Closed signifie que le port est joignable mais qu'aucun service n'y écoute.",
        "Un service qui accepte les connexions correspond à open.",
        "Un hôte éteint ne répondrait à aucune sonde."
      ]
    },
    {
      q: "Which TCP scanning technique completes the full three-way handshake with the target and is therefore MOST LIKELY to be logged by the target system?",
      choix: [
        "TCP SYN (half-open) scan",
        "TCP connect scan",
        "UDP scan",
        "Passive banner analysis"
      ],
      reponse: 1,
      explication:
        "Le TCP connect scan établit une connexion complète (SYN, SYN/ACK, ACK) via l'API du système : la connexion aboutie est généralement journalisée par la cible, ce qui le rend plus détectable. Le SYN scan (A), dit half-open, interrompt l'échange avant l'établissement complet et laisse moins de traces applicatives. Le scan UDP (C) ne concerne pas le handshake TCP, et l'analyse passive (D) n'émet aucun paquet.",
      difficulte: 1,
      pourquoi: [
        "Le SYN scan interrompt l'échange avant l'établissement : moins de traces applicatives.",
        "Le connect scan complète le three-way handshake via l'API système : la connexion aboutie est journalisée par la cible.",
        "Le scan UDP n'implique aucun handshake TCP.",
        "L'analyse passive n'émet aucun paquet."
      ]
    },
    {
      q: "An organization cannot review every user account each quarter. Which account population should ALWAYS receive a full, non-sampled review?",
      choix: [
        "Accounts created during the last month",
        "Highly privileged accounts such as domain and system administrators",
        "Accounts of employees on vacation",
        "Service accounts only, chosen at the reviewer's discretion"
      ],
      reponse: 1,
      explication:
        "Les comptes hautement privilégiés (administrateurs de domaine, de systèmes, comptes root) doivent être revus en totalité à chaque cycle, car leur compromission ou leur dérive a l'impact maximal. Pour les comptes ordinaires, un échantillonnage est acceptable à condition d'être véritablement aléatoire. Les populations proposées en A, C et D ne correspondent pas à une approche fondée sur le risque.",
      difficulte: 2,
      pourquoi: [
        "Trop étroit : l'ancienneté du compte n'est pas le critère de risque.",
        "Les comptes hautement privilégiés concentrent l'impact maximal : revue complète systématique, l'échantillonnage aléatoire étant réservé aux comptes ordinaires.",
        "Le statut de congés n'a aucun rapport avec le risque d'accès.",
        "Une sélection discrétionnaire n'est ni aléatoire ni fondée sur le risque."
      ]
    },
    {
      q: "A required security control cannot be implemented on a business-critical system. Who should formally APPROVE the resulting policy exception?",
      choix: [
        "The system administrator who discovered the constraint",
        "The penetration tester who validated the finding",
        "A management level with the authority to accept the residual risk on behalf of the organization",
        "The vendor of the affected product"
      ],
      reponse: 2,
      explication:
        "Accepter un risque résiduel est une décision de gouvernance : seule une autorité de management habilitée (propriétaire du risque, direction, selon la politique de l'organisation) peut approuver formellement l'exception, avec compensating controls, durée limitée et revue périodique. L'administrateur (A) et le testeur (B) n'ont pas cette autorité, et le fournisseur (D) est extérieur à la décision de risque de l'organisation.",
      difficulte: 2,
      pourquoi: [
        "L'administrateur constate la contrainte mais n'a pas autorité pour accepter le risque.",
        "Le testeur valide le finding, il ne gouverne pas le risque de l'organisation.",
        "Accepter un risque résiduel est une décision de gouvernance : seul un niveau de management habilité peut approuver formellement l'exception.",
        "Le fournisseur est extérieur à la décision de risque de l'organisation."
      ]
    },
    {
      q: "Which method provides the STRONGEST evidence that an organization's backup process actually protects its data?",
      choix: [
        "Confirming that backup jobs complete without error codes",
        "Reviewing the backup vendor's marketing documentation",
        "Periodically performing an actual restoration of systems or files from backup media",
        "Encrypting all backup media"
      ],
      reponse: 2,
      explication:
        "Seule une restauration réelle périodique prouve que les données sont effectivement récupérables : c'est le test ultime du processus de sauvegarde. Un code de retour sans erreur (A) ne garantit ni l'intégrité ni la restaurabilité des données, la documentation du fournisseur (B) n'est pas une preuve, et le chiffrement (D) protège la confidentialité des supports, pas la capacité de restauration.",
      difficulte: 1,
      pourquoi: [
        "Un job « sans erreur » ne prouve pas la restaurabilité des données.",
        "La documentation commerciale n'est pas une preuve.",
        "Seule une restauration réelle périodique démontre que les données sont récupérables : le test ultime de la sauvegarde.",
        "Le chiffrement protège la confidentialité, pas la capacité de restauration."
      ]
    },
    {
      q: "In an ISO management system context, what is the PRIMARY purpose of the formal management review?",
      choix: [
        "To assign blame for security incidents to specific employees",
        "For senior leadership to evaluate the effectiveness of the security management system and direct necessary changes",
        "To replace internal audits entirely",
        "To tune SIEM correlation rules"
      ],
      reponse: 1,
      explication:
        "La revue de direction, qui correspond à la phase Act du cycle Plan-Do-Check-Act, permet à la direction d'évaluer l'efficacité du système de management de la sécurité à partir des résultats d'audits, de tests et de métriques, puis de décider des changements et des ressources nécessaires. Elle ne cherche pas de coupables (A), ne remplace pas les audits (C) qui l'alimentent, et le tuning du SIEM (D) est une tâche opérationnelle.",
      difficulte: 2,
      pourquoi: [
        "Chercher des coupables n'est pas l'objet d'une revue de direction.",
        "La direction évalue l'efficacité du système de management à partir des audits et métriques, puis décide des changements : la phase Act du PDCA.",
        "La revue s'appuie sur les audits, elle ne les remplace pas.",
        "Le tuning du SIEM est une tâche opérationnelle, pas une revue de direction."
      ]
    },
    {
      q: "During the attack phase of a penetration test, a critical production system becomes unresponsive. What should the testing team do FIRST?",
      choix: [
        "Continue testing other systems to stay on schedule",
        "Attempt to restore the system themselves before anyone notices",
        "Follow the notification and escalation procedure defined in the rules of engagement and inform the designated client contact immediately",
        "Document the outage and disclose it only in the final report"
      ],
      reponse: 2,
      explication:
        "Les Rules of Engagement définissent la procédure de communication et d'escalade en cas d'incident : la première action est de notifier immédiatement le contact désigné afin que l'organisation déclenche ses procédures de reprise, le test étant suspendu si nécessaire. Continuer comme si de rien n'était (A) aggrave le risque, restaurer soi-même en cachette (B) dépasse le mandat et peut empirer la situation, et attendre le rapport final (D) retarde une information critique.",
      difficulte: 3,
      pourquoi: [
        "Continuer comme si de rien n'était aggrave le risque sur un système critique.",
        "Restaurer en cachette dépasse le mandat et peut empirer la situation.",
        "Notifier immédiatement le contact désigné selon la procédure d'escalade des Rules of Engagement : l'organisation déclenche sa reprise, le test étant suspendu si nécessaire.",
        "Attendre le rapport final retarde une information critique."
      ]
    },
    {
      q: "A CISO already funds a compliance-mandated annual penetration test of a public-facing platform. With a fixed budget, the board now asks for CONTINUOUS discovery of exploitable flaws. Which option BEST meets this goal?",
      choix: [
        "Schedule the annual penetration test twice a year instead",
        "Launch a scoped bug bounty program with defined rules of engagement and an internal triage process",
        "Commission a six-month covert red team engagement",
        "Deploy a breach and attack simulation platform to replay known attack scenarios"
      ],
      reponse: 1,
      explication:
        "L'exigence de conformité est déjà couverte par le pentest annuel ; le besoin est une découverte continue sur le périmètre public. Le bug bounty cadré mobilise en permanence une diversité de chercheurs payés au résultat : c'est la réponse la plus efficiente à budget constant. Le pentest semestriel (A) reste ponctuel, la red team (C) évalue la détection et la réponse — un objectif différent —, et la BAS (D) valide les contrôles contre des scénarios connus sans découvrir de failles nouvelles.",
      difficulte: 3,
      pourquoi: [
        "Toujours ponctuel : deux campagnes par an ne créent pas une découverte continue — piège du « plus de la même chose ».",
        "Un bug bounty cadré mobilise en continu des chercheurs variés sur le périmètre public et paie au résultat : la réponse exacte à l'objectif du conseil à budget constant.",
        "Techniquement vrai qu'une red team apporte de la valeur, mais elle mesure la détection et la réponse, pas la découverte continue de failles exposées.",
        "La BAS valide les contrôles contre des scénarios connus : elle ne découvre pas de vulnérabilités nouvelles."
      ]
    },
    {
      q: "A vulnerability management team patches strictly in descending CVSS base score order, yet vulnerabilities listed in known exploited vulnerabilities catalogs remain open for weeks. What should the security manager do FIRST?",
      choix: [
        "Lower the CVSS threshold so that medium-severity findings are also patched",
        "Reprioritize remediation so that actively exploited vulnerabilities on business-critical assets are addressed ahead of higher-scored but unexploited ones",
        "Recompute environmental CVSS scores for every asset before changing the process",
        "Increase scanning frequency to detect new vulnerabilities sooner"
      ],
      reponse: 1,
      explication:
        "Le tri par score CVSS brut est la cause du symptôme : des failles activement exploitées attendent derrière des failles critiques théoriques. La première action du manager est de corriger le critère de priorisation en plaçant l'exploitation avérée (catalogues type KEV, scores EPSS) et la criticité métier des actifs en tête. Abaisser le seuil (A) et scanner plus souvent (D) augmentent le volume sans corriger l'ordre, et recalculer les scores environnementaux de chaque actif (C) est théoriquement juste mais retarde le traitement des failles déjà exploitées.",
      difficulte: 3,
      pourquoi: [
        "Élargit le volume traité sans corriger le critère de tri : l'engorgement empire.",
        "Réordonner selon l'exploitation active et la criticité métier traite d'abord le risque réel : la correction de processus attendue d'un manager.",
        "Techniquement vrai que le score environnemental contextualise, mais recalculer chaque actif avant d'agir retarde le traitement des failles déjà exploitées : vrai mais hors tempo.",
        "Scanner plus souvent découvre plus vite ce que l'on continuera de traiter dans le mauvais ordre."
      ]
    },
    {
      q: "An organization must assess the security posture of 250 suppliers with a small vendor-risk team, under regulatory expectations of risk-proportionate assurance. Which approach is MOST defensible?",
      choix: [
        "Send every supplier the same exhaustive security questionnaire",
        "Require an annual on-site audit of every supplier",
        "Tier suppliers by criticality: require independent audit reports such as SOC 2 Type II from critical suppliers, questionnaires for low-risk vendors, and reserve on-site audits for high-risk gaps",
        "Rely on each supplier's self-declared compliance statement"
      ],
      reponse: 2,
      explication:
        "L'assurance proportionnée au risque s'obtient en segmentant les tiers par criticité : attestations indépendantes dans la durée (SOC 2 Type II ou équivalent) pour les fournisseurs critiques, questionnaires pour la masse à faible risque, audits sur site ciblés en dernier recours. Le questionnaire unique (A) sature l'équipe sans discriminer, l'audit sur site universel (B) est irréaliste, et l'auto-déclaration (D) n'est pas une assurance vérifiée.",
      difficulte: 3,
      pourquoi: [
        "Uniforme : le même questionnaire exhaustif pour tous ignore le risque et sature une petite équipe.",
        "Absolu et irréaliste : l'audit sur site universel est impossible avec une petite équipe et disproportionné pour les tiers mineurs.",
        "La segmentation par criticité, avec rapports d'audit indépendants pour les fournisseurs critiques et questionnaires pour les autres, aligne l'assurance sur le risque : l'approche défendable devant un régulateur.",
        "L'auto-déclaration sans vérification indépendante n'est pas une assurance."
      ]
    },
    {
      q: "Before deploying an LLM-based customer service assistant with access to customer records, which assurance activity should the security manager REQUIRE in addition to traditional application testing?",
      choix: [
        "A load test demonstrating acceptable response times under peak traffic",
        "Adversarial testing targeting AI-specific failure modes such as prompt injection, sensitive data leakage, and guardrail bypass",
        "An additional static analysis pass on the integration code",
        "The model vendor's documentation of its training data governance"
      ],
      reponse: 1,
      explication:
        "Les assistants fondés sur des LLM présentent des modes de défaillance propres — injection de prompt directe ou indirecte, divulgation de données sensibles dans les réponses, contournement des garde-fous — que ni le pentest applicatif ni l'analyse statique ne détectent. Des tests adversariaux dédiés (red teaming IA) sont donc l'assurance à exiger avant de connecter le modèle aux données clients. Le test de charge (A) est une préoccupation de performance, le SAST (C) ne voit pas le comportement du modèle, et la documentation du fournisseur (D) ne teste ni votre intégration ni vos garde-fous.",
      difficulte: 3,
      pourquoi: [
        "Préoccupation d'exploitation légitime mais sans lien avec les risques de sécurité propres au modèle.",
        "Injection de prompt, fuite de données sensibles et contournement des garde-fous sont des modes de défaillance spécifiques aux LLM, invisibles pour les tests applicatifs classiques : l'assurance à exiger.",
        "Utile mais déjà couvert par le cycle de développement : l'analyse statique ne voit pas le comportement du modèle.",
        "La gouvernance des données d'entraînement du fournisseur ne teste ni votre intégration ni vos garde-fous : transfert de confiance sans vérification."
      ]
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
