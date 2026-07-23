// Domaine 7 — Opérations de sécurité (Security Operations) — 13%
window.CISSP_DATA = window.CISSP_DATA || { domains: {} };
window.CISSP_DATA.domains[7] = {
  id: 7,
  code: "D7",
  titre: "Opérations de sécurité",
  titreEn: "Security Operations",
  poids: "13%",
  couleur: "#f95738",
  icone: "⚙️",
  description:
    "Le Domaine 7 couvre le quotidien de la sécurité : investigations et forensics, journalisation et supervision, gestion des configurations, des changements et des correctifs, réponse aux incidents, et surtout la récupération après sinistre avec le DRP et le BCP. C'est un domaine très opérationnel, mais l'examen l'aborde toujours avec un regard de manager : processus, priorités et jugement.",
  objectifs: [
    "7.1 Comprendre et respecter les exigences des investigations (preuves, chain of custody, forensics)",
    "7.2 Mener les activités de logging et de monitoring (SIEM, UEBA, threat intelligence, threat hunting)",
    "7.3 Réaliser la gestion des configurations (provisioning, baselines, automatisation)",
    "7.4 Appliquer les concepts opérationnels fondamentaux (need-to-know, séparation des tâches, rotation, comptes privilégiés)",
    "7.5 Protéger les ressources et gérer les médias",
    "7.6 Conduire la gestion des incidents (détection jusqu'aux leçons apprises)",
    "7.7 Exploiter les mesures de détection et de prévention (IDS/IPS, honeypots, anti-malware, sandboxing)",
    "7.8 Mettre en œuvre la gestion des correctifs et des vulnérabilités",
    "7.9 Participer aux processus de gestion des changements",
    "7.10 Mettre en œuvre les stratégies de récupération (sauvegardes, sites de secours, résilience)",
    "7.11 Mettre en œuvre les processus de Disaster Recovery (DR)",
    "7.12 Tester les plans de reprise (DRP) : du read-through au full interruption",
    "7.13 Participer à la planification et aux exercices de Business Continuity (BC)",
    "7.14 Mettre en œuvre et gérer la sécurité physique",
    "7.15 Traiter la sûreté et la sécurité du personnel"
  ],

  lecons: [
    // ------------------------------------------------------------------
    // LEÇON 1 — Investigations et forensics
    // ------------------------------------------------------------------
    {
      id: "d7-l1",
      titre: "Investigations et forensics numériques",
      duree: 12,
      slides: [
        {
          type: "intro",
          titre: "Pourquoi les investigations comptent",
          points: [
            "Une investigation est une enquête formelle et systématique",
            "Objectifs : cause racine, prévention, limitation de l'impact",
            "Une preuve mal manipulée peut être rejetée par un tribunal"
          ],
          narration:
            "Bienvenue dans le Domaine sept, le cœur opérationnel du CISSP. Nous commençons par les investigations. Quand un incident de sécurité survient, l'organisation doit mener une enquête formelle pour identifier la cause racine, prévenir la récidive et limiter l'impact. Retenez dès maintenant une idée clé : une preuve mal collectée ou mal manipulée peut être rejetée par un tribunal, et toute l'enquête s'effondre."
        },
        {
          type: "standard",
          titre: "Les quatre types d'investigations",
          points: [
            "Administrative : violation de politique interne, niveau de preuve le plus bas",
            "Criminelle : menée par les forces de l'ordre, preuve « beyond a reasonable doubt »",
            "Civile : litige entre parties, niveau de preuve plus faible (prépondérance)",
            "Réglementaire : déclenchée par un régulateur en cas de non-conformité"
          ],
          narration:
            "L'examen adore distinguer les quatre types d'investigations. L'investigation administrative traite les violations de politiques internes. L'investigation criminelle est conduite par les forces de l'ordre et exige le niveau de preuve le plus élevé, au-delà du doute raisonnable. L'investigation civile concerne les litiges, comme un différend contractuel, avec un niveau de preuve bien plus faible. Enfin, l'investigation réglementaire est lancée par un régulateur qui soupçonne une non-conformité. Dans les cas criminels et réglementaires, votre rôle est de préserver les preuves et d'assister les enquêteurs officiels.",
          astuce: "💡 Conseil examen : criminel = « beyond a reasonable doubt » ; civil = prépondérance des preuves. Cette différence de niveau de preuve est une question classique."
        },
        {
          type: "standard",
          titre: "Sécuriser la scène et le principe de Locard",
          points: [
            "Sceller l'accès, photographier, documenter, ne rien toucher",
            "Locard exchange principle : tout contact laisse une trace",
            "La collecte doit commencer dès la découverte de l'incident",
            "Conserver les logs sur une durée raisonnable"
          ],
          narration:
            "Toute investigation sérieuse commence par la sécurisation de la scène : on scelle l'accès, on photographie, on documente, et surtout on ne touche à rien. Le principe d'échange de Locard nous rappelle que lors de tout crime, quelque chose est emporté et quelque chose est laissé derrière. C'est le fondement du forensics. La collecte de preuves doit démarrer dès la découverte de l'incident, et comme la découverte peut être tardive, la rétention des journaux sur une durée raisonnable est critique."
        },
        {
          type: "standard",
          titre: "Types de preuves",
          points: [
            "Primary evidence : documents originaux, les plus fiables",
            "Secondary evidence : copies, témoignages oraux",
            "Best evidence rule : présenter l'original plutôt qu'une copie",
            "Real evidence : objets physiques (disques, ordinateurs)",
            "Hearsay : déclaration hors tribunal, généralement irrecevable"
          ],
          narration:
            "Passons aux types de preuves. La preuve primaire, c'est le document original, le plus fiable devant un tribunal. La preuve secondaire regroupe les copies et les témoignages oraux, moins puissants. La règle de la meilleure preuve, le best evidence rule, exige de présenter l'original plutôt qu'une copie. La preuve réelle désigne les objets physiques comme un disque dur, qui doivent être authentifiés par un témoin ou par une chain of custody documentée. Enfin, le hearsay, le ouï-dire, est en principe irrecevable : un témoin ne peut pas rapporter ce qu'un tiers lui a dit. Notez aussi la preuve circonstancielle, qui soutient une conclusion sans la prouver, et la preuve corroborative, qui renforce une autre preuve."
        },
        {
          type: "standard",
          titre: "Les cinq règles de la preuve",
          points: [
            "Authentic : non fabriquée ni implantée",
            "Accurate : intégrité préservée, non modifiée",
            "Complete : toutes les parties, même défavorables",
            "Convincing : compréhensible et crédible",
            "Admissible : pertinente, matérielle, collectée légalement"
          ],
          narration:
            "Pour survivre à l'examen juridique, une preuve doit respecter cinq règles. Elle doit être authentique, c'est-à-dire ni fabriquée ni implantée. Elle doit être exacte, avec une intégrité démontrable. Elle doit être complète, en incluant même les éléments qui n'arrangent pas votre dossier. Elle doit être convaincante, facile à comprendre pour un jury. Et enfin elle doit être admissible : pertinente pour l'affaire, matérielle, et collectée de façon légale."
        },
        {
          type: "schema",
          titre: "Chain of custody : tag, bag, carry",
          points: [
            "Qui a collecté et manipulé quelle preuve, quand et où",
            "Toute rupture de la chaîne compromet l'admissibilité",
            "Documentation continue de la saisie jusqu'au tribunal"
          ],
          schema: {
            type: "flow",
            items: ["Tag (étiqueter)", "Bag (emballer)", "Carry (transporter)", "Stocker sous scellés", "Documenter chaque transfert"]
          },
          narration:
            "La chain of custody, ou chaîne de possession, documente qui a collecté et manipulé chaque preuve, quand et où. Le moyen mnémotechnique est simple : tag, bag and carry. On étiquette, on emballe, on transporte, et chaque transfert de mains est consigné. Une seule rupture dans cette chaîne, et l'avocat adverse fera rejeter la preuve. C'est probablement le concept le plus testé de cette section."
        },
        {
          type: "standard",
          titre: "Forensics numérique et preuves vivantes",
          points: [
            "Live evidence : RAM, cache, buffers — volatile et fragile",
            "Toute interaction avec un système allumé modifie son état",
            "Toujours travailler sur deux copies bit à bit, jamais l'original",
            "ISO/IEC 27037 : identification, collection, acquisition, préservation"
          ],
          narration:
            "Le forensics numérique est l'examen scientifique des données pour identifier un coupable ou une cause racine. Les preuves vivantes, comme la mémoire vive, le cache et les buffers, sont extrêmement fragiles : le moindre clic de souris ou une mise hors tension peut les détruire. Règle d'or pour les supports de stockage : on crée d'abord deux copies identiques bit à bit, et on analyse une copie, jamais l'original. La norme ISO 27037 encadre le traitement des preuves numériques en quatre phases : identification, collection, acquisition et préservation."
        },
        {
          type: "standard",
          titre: "eDiscovery et artefacts",
          points: [
            "eDiscovery : produire l'information stockée électroniquement pour la justice",
            "Modèle EDRM en 9 étapes, de la gouvernance à la présentation",
            "Obligation de préservation dès qu'un litige est anticipé",
            "Artefacts : traces dans les systèmes, navigateurs, mobiles, disques"
          ],
          narration:
            "L'eDiscovery est le processus d'identification, de collecte et de production d'informations stockées électroniquement pour une procédure judiciaire. Le modèle de référence EDRM compte neuf étapes, de la gouvernance de l'information jusqu'à la présentation au tribunal, en passant par la préservation, la collecte, le traitement et l'analyse. Point important : une organisation qui anticipe un procès a l'obligation légale de préserver ses preuves numériques. Enfin, les artefacts forensiques sont les traces laissées par une intrusion : on les trouve dans les systèmes, les navigateurs web, les appareils mobiles et les supports de stockage."
        },
        {
          type: "question",
          titre: "Contrôle de connaissance",
          narration:
            "Vérifions votre compréhension avec une question de style examen sur la manipulation des preuves.",
          q: "Lors d'une investigation forensique sur un disque dur, que devez-vous faire EN PREMIER avant toute analyse ?",
          choix: [
            "Analyser directement le disque original pour gagner du temps",
            "Créer deux copies bit à bit et travailler sur une copie",
            "Redémarrer le système pour figer son état",
            "Supprimer les fichiers temporaires pour clarifier l'analyse"
          ],
          reponse: 1,
          explication:
            "On crée toujours deux copies identiques bit à bit du support original, puis on analyse une copie. Travailler sur l'original modifierait la preuve et compromettrait son admissibilité. Redémarrer détruit les preuves vivantes, et supprimer quoi que ce soit revient à altérer la preuve."
        },
        {
          type: "resume",
          titre: "À retenir",
          points: [
            "4 types d'investigations : administrative, criminelle, civile, réglementaire",
            "Chain of custody = tag, bag, carry, documenter chaque transfert",
            "5 règles de la preuve : authentic, accurate, complete, convincing, admissible",
            "Forensics : deux copies bit à bit, jamais l'original",
            "eDiscovery : devoir de préservation dès qu'un litige est anticipé"
          ],
          narration:
            "Résumons. Il existe quatre types d'investigations, chacune avec son niveau de preuve : administrative, criminelle, civile et réglementaire. La chain of custody documente chaque manipulation de preuve, sur le principe tag, bag and carry. Une bonne preuve est authentique, exacte, complète, convaincante et admissible. En forensics, on travaille toujours sur une copie bit à bit, jamais sur l'original. Et dès qu'un litige se profile, l'organisation doit préserver ses données électroniques."
        }
      ]
    },

    // ------------------------------------------------------------------
    // LEÇON 2 — Logging, monitoring, threat intelligence
    // ------------------------------------------------------------------
    {
      id: "d7-l2",
      titre: "Logging, monitoring et renseignement sur les menaces",
      duree: 13,
      slides: [
        {
          type: "intro",
          titre: "Voir pour défendre",
          points: [
            "On ne peut pas défendre ce qu'on ne voit pas",
            "Logs, monitoring, SIEM, UEBA, threat intelligence",
            "Objectif : détecter tôt, répondre vite, rendre des comptes"
          ],
          narration:
            "Deuxième leçon : la journalisation et la supervision. Le principe est simple : on ne peut pas défendre ce qu'on ne voit pas. Les journaux enregistrent les événements, le monitoring les analyse, le SIEM les corrèle, et le renseignement sur les menaces donne le contexte. L'objectif est triple : détecter tôt, répondre vite, et pouvoir tenir chacun responsable de ses actions."
        },
        {
          type: "standard",
          titre: "Logs, audit trails et monitoring",
          points: [
            "Log : enregistrement des actions et événements d'un système",
            "Audit trail : contrôle détectif passif, permet de reconstruire un événement",
            "Monitoring : revue active des logs, imputabilité des sujets",
            "Sampling (statistique) vs clipping (dépassement de seuil)"
          ],
          narration:
            "Un log est l'enregistrement des actions et événements survenus sur un système. L'audit trail, la piste d'audit, est un contrôle détectif passif : il permet de reconstruire un événement, d'en extraire des informations, et de prouver ou réfuter une culpabilité. Le monitoring, lui, est la revue active de ces journaux : il rend les sujets imputables de leurs actions. Pour analyser de gros volumes, deux méthodes d'échantillonnage existent : le sampling, statistique et représentatif, et le clipping, qui ne retient que les événements dépassant un seuil prédéfini."
        },
        {
          type: "standard",
          titre: "SIEM : le centre nerveux",
          points: [
            "Ingestion des logs de sources multiples, analyse et corrélation",
            "Capacités clés : aggregation, normalization, correlation, stockage sécurisé, analyse, reporting",
            "Technologie + processus + personnes",
            "Tuning : réduire les false positives sans créer de false negatives"
          ],
          narration:
            "Le SIEM, Security Information and Event Management, ingère les journaux de sources multiples, les normalise, les corrèle et alerte en temps quasi réel. Ses capacités clés sont l'agrégation, la normalisation, la corrélation, le stockage sécurisé, l'analyse et le reporting. Attention, un SIEM n'est pas qu'un outil : c'est de la technologie, des processus et des personnes formées. Et il faut le régler en permanence : le tuning consiste à réduire les faux positifs, qui épuisent les analystes, sans jamais créer de faux négatifs, c'est-à-dire des attaques réelles non détectées.",
          astuce: "💡 Conseil examen : false positive = alerte sur du bénin ; false negative = silence sur du malveillant. Le false negative est le plus dangereux."
        },
        {
          type: "standard",
          titre: "SOAR, playbooks et runbooks",
          points: [
            "SOAR : orchestration et réponse automatisée aux incidents",
            "Playbook : document qui définit COMMENT répondre à un incident",
            "Runbook : implémentation automatisée des étapes du playbook",
            "Bénéfice : moins de charge pour les admins, moins d'erreur humaine"
          ],
          narration:
            "Le SOAR, Security Orchestration, Automation and Response, va plus loin que le SIEM : il répond automatiquement à certains incidents. Deux termes à ne pas confondre : le playbook est le document, la checklist qui définit comment répondre à un type d'incident ; le runbook est son implémentation technique, qui traduit les étapes en actions automatisées. Le grand bénéfice du SOAR, c'est la réduction de la charge des administrateurs et la diminution du risque d'erreur humaine."
        },
        {
          type: "standard",
          titre: "UEBA et détection comportementale",
          points: [
            "UEBA : analyse du comportement des utilisateurs et entités",
            "Profil de comportement normal, alerte sur les déviations",
            "Détecte fraude, malware, menaces internes, comptes compromis",
            "Behavior-based = baseline + statistiques + heuristiques"
          ],
          narration:
            "L'UEBA, User and Entity Behavior Analytics, construit un profil de comportement normal pour chaque utilisateur et chaque entité, puis alerte sur les déviations. C'est très efficace contre la fraude, les menaces internes et les comptes compromis, car un attaquant qui vole des identifiants valides ne se comporte pas comme leur propriétaire légitime. La détection comportementale repose sur une baseline d'activité normale, des statistiques et des heuristiques. On retrouve souvent l'UEBA intégré aux solutions SIEM."
        },
        {
          type: "standard",
          titre: "Threat intelligence : STIX, TAXII, threat feeds",
          points: [
            "Threat intelligence : données sur les menaces, enrichies pour la décision",
            "Threat feeds : flux continus de données brutes sur les menaces",
            "STIX : langage standardisé (JSON) pour décrire les menaces",
            "TAXII : protocole de transport des données STIX sur HTTPS"
          ],
          narration:
            "Le renseignement sur les menaces, ou threat intelligence, regroupe la recherche, l'analyse et les tendances émergentes, transformées en contexte utile à la décision. Les threat feeds fournissent un flux continu de données brutes. Deux standards facilitent le partage : STIX, un langage structuré basé sur JSON qui décrit les menaces de façon lisible et cohérente, et TAXII, le protocole de transport qui achemine les données STIX sur HTTPS. Mémorisez le duo : STIX décrit, TAXII transporte."
        },
        {
          type: "standard",
          titre: "Threat hunting : chasser plutôt qu'attendre",
          points: [
            "Recherche proactive d'activité malveillante ayant échappé aux outils",
            "Hypothèse de départ : l'attaquant est peut-être déjà dans le réseau",
            "S'appuie sur la threat intelligence et les IoC",
            "Complète les défenses automatisées, ne les remplace pas"
          ],
          narration:
            "Le threat hunting est une démarche proactive : au lieu d'attendre une alerte, les analystes partent du principe qu'un attaquant est peut-être déjà présent dans l'environnement et le cherchent activement. Ils s'appuient sur la threat intelligence et sur les indicateurs de compromission, les IoC, pour fouiller le réseau et les endpoints à la recherche de signes d'activité malveillante qui ont échappé aux outils automatisés. La chasse complète les défenses, elle ne les remplace pas."
        },
        {
          type: "schema",
          titre: "La Cyber Kill Chain de Lockheed Martin",
          points: [
            "Sept étapes ordonnées d'une attaque",
            "Casser la chaîne à n'importe quelle étape stoppe l'attaque",
            "Modèle dérivé de la kill chain militaire"
          ],
          schema: {
            type: "flow",
            items: [
              "Reconnaissance",
              "Weaponization",
              "Delivery",
              "Exploitation",
              "Installation",
              "Command & Control",
              "Actions on Objectives"
            ]
          },
          narration:
            "La Cyber Kill Chain de Lockheed Martin décrit une attaque en sept étapes ordonnées. D'abord la reconnaissance, où l'attaquant collecte des informations. Puis la weaponization, où il prépare son exploit. Vient la delivery, l'envoi de l'arme par phishing ou site compromis. Ensuite l'exploitation de la vulnérabilité, puis l'installation d'un malware avec backdoor. L'attaquant établit alors son command and control, et termine par les actions sur objectifs : vol, destruction ou rançongiciel. L'intérêt défensif est clair : casser la chaîne à n'importe quelle étape stoppe l'attaque."
        },
        {
          type: "standard",
          titre: "Egress monitoring et gestion des logs",
          points: [
            "Egress monitoring : surveiller le trafic SORTANT, détecter l'exfiltration",
            "Outils : DLP, détection de stéganographie, NetFlow",
            "Log management : collecter, traiter, analyser, protéger les logs",
            "Rollover logging : écrase les événements les plus anciens à taille max"
          ],
          narration:
            "On surveille souvent ce qui entre, mais il faut aussi surveiller ce qui sort. L'egress monitoring détecte les transferts non autorisés de données vers l'extérieur, autrement dit l'exfiltration. Les outils classiques sont le DLP, Data Loss Prevention, et la détection de stéganographie. Le NetFlow, qui enregistre source, destination et volume de chaque communication, est précieux pour ces analyses. Enfin, la gestion des logs couvre leur collecte, leur traitement, leur analyse et leur protection ; le rollover logging écrase les événements les plus anciens quand le journal atteint sa taille maximale."
        },
        {
          type: "question",
          titre: "Contrôle de connaissance",
          narration:
            "Une question pour vérifier que la distinction entre playbook et runbook est bien ancrée.",
          q: "Quelle est la MEILLEURE description d'un runbook dans un contexte SOAR ?",
          choix: [
            "Un document qui liste les parties prenantes à notifier",
            "L'implémentation automatisée des étapes définies dans le playbook",
            "Un registre des incidents passés pour les leçons apprises",
            "La politique de sécurité qui autorise la réponse aux incidents"
          ],
          reponse: 1,
          explication:
            "Le playbook est le document qui définit comment répondre à un incident ; le runbook en est l'implémentation, traduisant les étapes en actions automatisées. Les autres réponses décrivent des artefacts de communication, d'historique ou de gouvernance, pas le runbook."
        },
        {
          type: "resume",
          titre: "À retenir",
          points: [
            "SIEM = agrégation, normalisation, corrélation ; tuning = moins de false positives",
            "SOAR automatise la réponse ; playbook (quoi) vs runbook (comment automatisé)",
            "UEBA détecte les déviations de comportement (insider, compte compromis)",
            "STIX décrit les menaces, TAXII les transporte ; threat hunting = proactif",
            "Cyber Kill Chain : 7 étapes, de la reconnaissance aux actions on objectives",
            "Egress monitoring + DLP contre l'exfiltration de données"
          ],
          narration:
            "Résumons cette leçon. Le SIEM centralise, normalise et corrèle les journaux, et son tuning vise à réduire les faux positifs sans créer de faux négatifs. Le SOAR automatise la réponse grâce aux playbooks et aux runbooks. L'UEBA repère les comportements anormaux, signature des menaces internes et des comptes compromis. STIX décrit les menaces, TAXII les transporte, et le threat hunting cherche proactivement l'attaquant déjà présent. Enfin, gardez en tête les sept étapes de la Cyber Kill Chain et l'importance de surveiller le trafic sortant."
        }
      ]
    },

    // ------------------------------------------------------------------
    // LEÇON 3 — Concepts opérationnels, configuration, changement, patchs
    // ------------------------------------------------------------------
    {
      id: "d7-l3",
      titre: "Concepts opérationnels, configurations, changements et correctifs",
      duree: 14,
      slides: [
        {
          type: "intro",
          titre: "Les fondations du quotidien",
          points: [
            "Principes qui limitent les dégâts : need-to-know, least privilege, SoD",
            "Gestion des configurations : des systèmes durcis et cohérents",
            "Gestion des changements et des correctifs : évoluer sans casser"
          ],
          narration:
            "Cette leçon regroupe les fondations opérationnelles du quotidien. D'abord les principes qui limitent les dégâts quand quelque chose tourne mal : need-to-know, moindre privilège, séparation des tâches. Ensuite la gestion des configurations, qui garantit des systèmes durcis et cohérents. Enfin la gestion des changements et des correctifs, qui permet de faire évoluer l'environnement sans le casser. Appliquer ces concepts démontre le due care et la due diligence de l'organisation."
        },
        {
          type: "standard",
          titre: "Need-to-know et least privilege",
          points: [
            "Need-to-know : limite QUELLES informations on peut connaître",
            "Least privilege : limite COMBIEN de droits et permissions on reçoit",
            "S'applique aussi aux applications et comptes de service",
            "Limite la portée des incidents quand ils surviennent"
          ],
          narration:
            "Deux principes jumeaux mais distincts. Le need-to-know restreint l'accès à l'information : vous ne connaissez que ce dont vous avez besoin pour votre tâche. Le moindre privilège, least privilege, restreint l'étendue des droits : vous ne recevez que les permissions minimales nécessaires, ni plus. Retenez la nuance : need-to-know porte sur le quoi, least privilege sur le combien. Et le moindre privilège s'applique aussi aux applications et aux comptes de service, car un service compromis offre à l'attaquant tous les privilèges de son compte."
        },
        {
          type: "standard",
          titre: "Séparation des tâches et contrôles associés",
          points: [
            "SoD : personne n'a le contrôle total d'une fonction critique",
            "Two-person control : deux approbations pour une tâche critique",
            "Split knowledge : le savoir est réparti (ex. M of N control)",
            "Objectif : forcer la collusion pour frauder, donc dissuader"
          ],
          narration:
            "La séparation des tâches, Segregation of Duties, garantit qu'aucune personne seule ne contrôle entièrement une fonction critique. Pour frauder, il faudrait une collusion entre plusieurs personnes, ce qui est bien plus difficile et risqué. Le two-person control exige l'approbation de deux individus pour une tâche critique, comme deux moitiés d'un mot de passe. Le split knowledge combine ces idées : l'information nécessaire à une opération est répartie entre plusieurs personnes, le M of N control en étant l'exemple type pour les clés cryptographiques."
        },
        {
          type: "standard",
          titre: "Job rotation et comptes privilégiés",
          points: [
            "Job rotation : revue par les pairs, anti-fraude, cross-training",
            "Agit comme contrôle dissuasif ET détectif",
            "PAM : restreindre et surveiller les comptes privilégiés",
            "Surveiller : créations de comptes, modifications firewall, accès aux logs"
          ],
          narration:
            "La rotation des postes fait tourner les employés sur différentes fonctions. C'est à la fois un mécanisme de dissuasion et de détection : les fraudes qui dépendent d'une personne en place finissent par être découvertes, et l'organisation gagne en polyvalence. Côté comptes privilégiés, les solutions PAM, Privileged Account Management, restreignent l'accès aux comptes à hauts privilèges, limitent leur durée d'utilisation et surveillent leurs actions : création de comptes, modification de règles firewall, accès aux journaux d'audit. Les attaquants utilisent presque toujours des privilèges élevés, donc surveiller ces comptes détecte aussi les attaques.",
          astuce: "💡 Conseil examen : job rotation et mandatory vacation servent surtout à DÉTECTER la fraude ; SoD sert à la PRÉVENIR."
        },
        {
          type: "standard",
          titre: "SLA et accords avec les tiers",
          points: [
            "SLA : engagement de performance d'un fournisseur, avec pénalités",
            "MOU : intention de coopérer, sans force contraignante forte",
            "Certains référentiels (PCI DSS) exigent la conformité des prestataires"
          ],
          narration:
            "Les opérations reposent souvent sur des tiers. Le Service Level Agreement, SLA, fixe les attentes de performance envers un fournisseur et prévoit généralement des pénalités en cas de manquement. Le Memorandum of Understanding, MOU, documente simplement l'intention de deux entités de travailler ensemble, sans réelle force contraignante. Notez enfin que des référentiels comme PCI DSS exigent que vos prestataires soient eux-mêmes conformes : externaliser le service n'externalise jamais la responsabilité."
        },
        {
          type: "standard",
          titre: "Gestion des configurations : baseline et hardening",
          points: [
            "CM : identifier, contrôler et vérifier la configuration des systèmes",
            "Baseline : configuration de départ, souvent déployée par images",
            "Hardening : désactiver services inutiles, fermer les ports, supprimer apps, changer mots de passe par défaut",
            "Référentiels : benchmarks CIS"
          ],
          narration:
            "La gestion des configurations identifie, contrôle et vérifie la configuration des systèmes tout au long de leur cycle de vie. La baseline est la configuration de départ, la liste des réglages qui durcissent un système ; beaucoup d'organisations la déploient par images, ce qui garantit des réglages corrects et réduit les coûts de maintenance. Le hardening consiste à désactiver les services inutilisés, fermer les ports logiques inutiles, supprimer les applications superflues et changer les mots de passe par défaut, en s'appuyant sur des référentiels comme les benchmarks du Center for Internet Security. Le provisioning applique ensuite cette baseline aux nouveaux systèmes, avec l'automatisation pour personnaliser par groupes de machines."
        },
        {
          type: "schema",
          titre: "Le processus de gestion des changements",
          points: [
            "Toute modification passe par un processus formel documenté",
            "Prévoir systématiquement un plan de rollback",
            "Trois composantes : request control, change control, release control"
          ],
          schema: {
            type: "flow",
            items: [
              "Change request",
              "Assess impact",
              "Approve / reject",
              "Build & test",
              "Schedule & notify",
              "Implement (rollback prêt)",
              "Validate",
              "Document"
            ]
          },
          narration:
            "La gestion des changements fait passer chaque modification par un processus formel. On soumet une demande de changement, on évalue son impact, on l'approuve ou on la rejette, on développe et on teste idéalement dans un environnement de test, on planifie et on notifie les parties prenantes, on implémente avec un plan de retour arrière prêt, on valide, et on documente à chaque étape. Ce processus permet aux experts de repérer les conséquences involontaires avant l'implémentation, et la documentation produite permet de reproduire ou d'annuler le changement."
        },
        {
          type: "standard",
          titre: "Patch management : le cycle",
          points: [
            "Évaluer → tester → approuver (via change management) → déployer → vérifier",
            "Tester sur un système isolé non-productif avant tout déploiement",
            "Vérifier par audits et scans que les patchs sont bien appliqués",
            "Patch Tuesday : publication mensuelle des grands éditeurs"
          ],
          narration:
            "Un patch corrige un bug ou une vulnérabilité sans changer la version du logiciel. Un programme de patch management efficace suit un cycle précis : évaluer si le correctif s'applique à vos systèmes, le tester sur un environnement isolé et non productif, l'approuver via la gestion des changements, le déployer, souvent automatiquement, puis vérifier par des audits et des scans qu'il est réellement appliqué. Sans ce programme, l'organisation subit des pannes et des incidents causés par des failles connues et évitables. Retenez aussi le Patch Tuesday, la publication mensuelle des correctifs des grands éditeurs."
        },
        {
          type: "standard",
          titre: "Vulnerability management",
          points: [
            "Identifier, évaluer, prioriser et remédier aux faiblesses",
            "Scans de vulnérabilités routiniers + assessments périodiques",
            "Les scanners vérifient aussi l'efficacité du patch management",
            "On ne peut pas éliminer toutes les vulnérabilités : on priorise le risque"
          ],
          narration:
            "La gestion des vulnérabilités identifie, évalue, priorise et corrige les faiblesses des systèmes d'information. Elle combine des scans routiniers, qui détectent les failles connues comme les patchs manquants ou les mots de passe faibles, et des évaluations périodiques plus larges incluant revues et audits. Les rapports de scan sont d'ailleurs un excellent contrôle de l'efficacité du programme de patch management. Soyez lucide : on ne peut éliminer ni tous les risques ni toutes les vulnérabilités ; on traite en priorité celles qui représentent le plus grand risque. Le système non patché reste la vulnérabilité la plus courante en entreprise."
        },
        {
          type: "question",
          titre: "Contrôle de connaissance",
          narration:
            "Voyons si la logique du patch management est claire avec une mise en situation.",
          q: "Un correctif de sécurité critique vient d'être publié pour vos serveurs de production. Que devriez-vous faire EN PREMIER ?",
          choix: [
            "Le déployer immédiatement sur tous les serveurs de production",
            "Attendre le prochain cycle mensuel de maintenance",
            "Le tester sur un système isolé non productif",
            "Désactiver les serveurs concernés en attendant"
          ],
          reponse: 2,
          explication:
            "Même pour un correctif critique, on teste d'abord sur un environnement isolé pour détecter les effets de bord, puis on approuve via la gestion des changements et on déploie. Déployer sans tester peut provoquer une panne majeure ; attendre un mois laisse la vulnérabilité ouverte ; désactiver la production est disproportionné."
        },
        {
          type: "resume",
          titre: "À retenir",
          points: [
            "Need-to-know = quoi ; least privilege = combien",
            "SoD prévient la fraude, job rotation et mandatory vacation la détectent",
            "PAM : restreindre, limiter dans le temps et surveiller les privilèges",
            "Baseline + hardening + images = systèmes cohérents et sûrs",
            "Changement : request → impact → approbation → test → implémentation (rollback) → validation → documentation",
            "Patch : évaluer, tester, approuver, déployer, vérifier"
          ],
          narration:
            "Récapitulons. Need-to-know limite ce que l'on sait, least privilege limite ce que l'on peut faire. La séparation des tâches prévient la fraude en forçant la collusion, tandis que la rotation des postes la détecte. Les solutions PAM encadrent les comptes privilégiés. La gestion des configurations s'appuie sur des baselines durcies et des images. Tout changement suit un processus formel avec plan de rollback, et tout correctif est testé avant d'être approuvé, déployé et vérifié."
        }
      ]
    },

    // ------------------------------------------------------------------
    // LEÇON 4 — Médias, détection et prévention
    // ------------------------------------------------------------------
    {
      id: "d7-l4",
      titre: "Gestion des médias et mesures de détection et prévention",
      duree: 13,
      slides: [
        {
          type: "intro",
          titre: "Protéger les supports, bloquer les menaces",
          points: [
            "Gestion des médias : protéger tout ce qui porte des données",
            "Panorama des outils : firewalls, IDS/IPS, honeypots, sandboxing, anti-malware",
            "Contrôles préventifs vs détectifs"
          ],
          narration:
            "Dans cette leçon, nous couvrons deux volets complémentaires. D'abord la gestion des médias : protéger tout support capable de contenir des données, du disque dur à la simple feuille de papier. Ensuite, le grand panorama des mesures de détection et de prévention : pare-feu, IDS et IPS, honeypots, sandboxing et anti-malware. Gardez en tête la distinction du Domaine un : un contrôle préventif empêche l'activité indésirable, un contrôle détectif la découvre après coup."
        },
        {
          type: "standard",
          titre: "Gestion des médias",
          points: [
            "Média : tout ce qui peut contenir des données (papier, bandes, SSD, optique, mobiles)",
            "Critères : confidentialité, vitesse d'accès, portabilité, durabilité, formats",
            "Stockage sécurisé : contrôle d'accès strict, température et humidité contrôlées",
            "Marquage, manipulation, stockage, transport, sanitization, fin de vie"
          ],
          narration:
            "Un média, c'est tout ce qui peut contenir des données : papier, microformes, supports magnétiques comme les disques et bandes, mémoire flash, supports optiques, sans oublier les smartphones et cartes mémoire. L'évaluation d'un support prend en compte la confidentialité, la vitesse d'accès, la portabilité, la durabilité et les formats. Le MTBF, temps moyen entre pannes, est un critère important pour les données sensibles. Un média sensible se stocke dans un lieu sécurisé, avec contrôle d'accès strict et régulation de la température et de l'humidité. Correctement marqué, manipulé et stocké, un média est protégé contre la divulgation, la modification et la destruction non autorisées, jusqu'à sa destruction en fin de vie."
        },
        {
          type: "standard",
          titre: "Les familles de firewalls",
          points: [
            "Static packet filtering : couche 3, rapide, sans contexte",
            "Circuit-level : couche 5, valide la session TCP",
            "Stateful inspection : couches 3-4, suit l'état des connexions",
            "Application-level / WAF : couche 7, deep packet inspection",
            "NGFW : couches 3 à 7, stateful + DPI + IPS + sandboxing",
            "ISFW : segmentation interne, bloque le mouvement latéral"
          ],
          narration:
            "Passons en revue les familles de pare-feu. Le filtrage statique de paquets travaille en couche trois : rapide mais aveugle au contexte. Le circuit-level gateway opère en couche cinq et valide l'établissement des sessions, sans inspecter le contenu. Le stateful inspection suit l'état des connexions en couches trois et quatre : chaque paquet doit appartenir à une connexion légitime. Le firewall applicatif, en couche sept, fait de l'inspection profonde de paquets ; le WAF en est l'exemple type, capable de bloquer les injections SQL et le cross-site scripting. Le next-generation firewall combine tout : stateful, DPI, IPS, contrôle applicatif, parfois sandboxing. Enfin, l'ISFW segmente le réseau interne pour bloquer le mouvement latéral des attaquants."
        },
        {
          type: "standard",
          titre: "IDS et IPS",
          points: [
            "IDS : détecte et alerte ; IPS : détecte ET bloque (placé en coupure)",
            "Knowledge-based (signatures) : fiable sur le connu, aveugle au nouveau",
            "Behavior-based (anomalies) : détecte le nouveau, plus de false positives",
            "Déployer aux points stratégiques : périmètre, entre segments"
          ],
          narration:
            "L'IDS, Intrusion Detection System, surveille en temps réel le réseau ou les systèmes et alerte en cas d'activité anormale : c'est une alarme, il détecte mais n'arrête rien. L'IPS, Intrusion Prevention System, ajoute la capacité de blocage : placé en coupure sur le trafic, il empêche l'attaque d'atteindre sa cible. Deux méthodes de détection : la détection par signatures, knowledge-based, très fiable sur les attaques connues mais aveugle aux nouvelles ; et la détection comportementale, behavior-based, qui compare l'activité à une baseline et détecte l'inconnu au prix de plus de faux positifs. On déploie ces sondes aux endroits stratégiques : périmètre et frontières entre segments.",
          astuce: "💡 Conseil examen : IDS = détectif ; IPS = préventif. Une nouvelle attaque inconnue ? Seule la détection behavior-based a une chance de la voir."
        },
        {
          type: "standard",
          titre: "Honeypots, honeynets et allow/deny lists",
          points: [
            "Honeypot : leurre avec pseudo-failles et fausses données",
            "Honeynet : réseau de honeypots ; on observe l'attaquant sans risque",
            "Allow list : seules les apps autorisées s'exécutent (deny by default)",
            "Deny list : bloque les apps listées ; un système utilise UNE liste, pas les deux"
          ],
          narration:
            "Le honeypot est un ordinateur leurre, doté de pseudo-failles et de fausses données pour attirer les intrus. Le honeynet en réseau plusieurs pour simuler tout un environnement. L'intérêt est double : occuper l'attaquant loin de la production, et observer ses techniques sans compromettre l'environnement réel. Côté contrôle applicatif, l'allow list n'autorise que les applications approuvées, tout le reste étant bloqué par défaut : c'est le deny by default, dont l'App Store d'Apple est un exemple extrême. La deny list fait l'inverse en bloquant les applications listées. Attention, un système utilise l'une ou l'autre, jamais les deux simultanément."
        },
        {
          type: "standard",
          titre: "Sandboxing et confinement",
          points: [
            "Sandbox : environnement isolé pour exécuter du code non fiable",
            "Le code s'exécute normalement mais sans atteindre l'hôte",
            "Usages : analyse de malware, tests, honeynets, NGFW",
            "Confinement : limiter un processus à certaines ressources et zones mémoire"
          ],
          narration:
            "Le sandboxing crée un environnement isolé et sécurisé pour exécuter et analyser du code non testé ou non fiable. Le programme se comporte comme dans un environnement normal, mais il ne peut ni affecter le système hôte ni accéder aux ressources critiques. On l'utilise pour l'analyse de malware, les tests de développement et d'intégration, et au sein des next-generation firewalls. Le concept sous-jacent est le confinement : restreindre un processus à certaines ressources et à certaines zones mémoire, dont il ne peut pas sortir."
        },
        {
          type: "standard",
          titre: "Le bestiaire des malwares",
          points: [
            "Virus : nécessite une action de l'utilisateur pour se déclencher",
            "Worm : se propage SEUL en exploitant des vulnérabilités",
            "Trojan : semble légitime mais installe une backdoor",
            "Ransomware : chiffre les données, exige une rançon",
            "Rootkit : s'enfouit dans l'OS pour masquer sa présence",
            "Logic bomb : s'active sur une condition ou une date"
          ],
          narration:
            "Un tour rapide du bestiaire. Le virus se copie et se propage, mais sa caractéristique définissante est qu'il doit être déclenché par l'utilisateur. Le ver, lui, se propage tout seul en exploitant des vulnérabilités réseau, sans intervention humaine. Le cheval de Troie paraît utile ou inoffensif mais cache une charge malveillante, souvent une backdoor. Le ransomware chiffre les systèmes et exige une rançon pour la clé de déchiffrement. Le rootkit s'enfouit profondément dans le système d'exploitation pour masquer sa présence. La logic bomb attend une condition ou une date pour se déclencher. Citons aussi le malware polymorphe, qui mute pour échapper à la détection, le fileless malware qui ne s'écrit jamais sur disque, et le zero-day, exploitant une faille inconnue de l'éditeur."
        },
        {
          type: "standard",
          titre: "Anti-malware, botnets et IA",
          points: [
            "Défense clé : anti-malware à jour avec signatures ET heuristiques",
            "Approche multicouche + moindre privilège (pas d'admin pour les utilisateurs)",
            "Botnet = réseau de bots (zombies) contrôlé par un bot herder via C2",
            "ML : apprend depuis une baseline ; AI : construit sa propre baseline"
          ],
          narration:
            "La protection la plus importante contre le code malveillant reste un anti-malware à jour, combinant signatures et heuristiques, déployé en approche multicouche : sur chaque poste et en filtrage du contenu internet. Le moindre privilège aide aussi : sans droits d'administration, un utilisateur ne peut pas installer d'application malveillante. Retenez le vocabulaire des botnets : un bot ou zombie est une machine compromise, contrôlée via un canal de command and control par un bot herder, qui peut louer son botnet à d'autres criminels. Enfin, machine learning et intelligence artificielle renforcent la détection comportementale : le ML apprend à partir d'une baseline fournie par l'administrateur, tandis qu'un système d'IA construit progressivement sa propre baseline et s'améliore grâce au feedback."
        },
        {
          type: "question",
          titre: "Contrôle de connaissance",
          narration:
            "Une question classique sur la distinction entre virus et ver.",
          q: "Quelle caractéristique distingue le MIEUX un worm d'un virus ?",
          choix: [
            "Le worm chiffre les données et exige une rançon",
            "Le worm se propage seul sans action de l'utilisateur",
            "Le worm se cache dans le secteur de démarrage",
            "Le worm change de forme pour éviter la détection"
          ],
          reponse: 1,
          explication:
            "Le ver se propage de façon autonome en exploitant des vulnérabilités, sans intervention de l'utilisateur, alors que le virus doit être déclenché par une action humaine. Le chiffrement avec rançon décrit le ransomware, le secteur de démarrage les boot sector infectors, et le changement de forme le malware polymorphe."
        },
        {
          type: "resume",
          titre: "À retenir",
          points: [
            "Médias : marquage, stockage contrôlé, transport, sanitization, fin de vie",
            "Firewalls : du packet filtering (L3) au NGFW (L3-L7) ; ISFW contre le mouvement latéral",
            "IDS détecte, IPS bloque ; signatures = connu, comportemental = inconnu",
            "Honeypot occupe et permet d'observer ; allow list = deny by default",
            "Sandbox : exécuter le code suspect sans risque pour l'hôte",
            "Virus (déclenché) vs worm (autonome) ; anti-malware multicouche"
          ],
          narration:
            "Résumé de la leçon. Les médias sont protégés durant tout leur cycle de vie, du marquage à la destruction. Les pare-feu vont du simple filtrage de paquets au NGFW multicouche, avec l'ISFW pour bloquer le mouvement latéral interne. L'IDS détecte, l'IPS bloque ; les signatures voient le connu, le comportemental voit l'inconnu. Les honeypots détournent et renseignent, les allow lists appliquent le deny by default, et la sandbox isole le code suspect. Enfin, distinguez bien le virus, qui a besoin de l'utilisateur, du ver, qui se propage seul."
        }
      ]
    },

    // ------------------------------------------------------------------
    // LEÇON 5 — Gestion des incidents
    // ------------------------------------------------------------------
    {
      id: "d7-l5",
      titre: "Gestion des incidents : de la détection aux leçons apprises",
      duree: 12,
      slides: [
        {
          type: "intro",
          titre: "Événement ou incident ?",
          points: [
            "Event : occurrence observable, le plus souvent bénigne",
            "Incident : événement qui menace la CIA des systèmes ou des données",
            "Seuls les incidents déclenchent le processus de réponse",
            "Trois buts : réduire l'impact, maintenir l'activité, se défendre pour l'avenir"
          ],
          narration:
            "Abordons la gestion des incidents. Première distinction fondamentale : un événement est une occurrence observable, et il s'en produit des millions par jour, presque tous insignifiants. Un incident, lui, est un événement qui menace réellement ou potentiellement la confidentialité, l'intégrité ou la disponibilité d'un système ou de ses données. Seuls les incidents déclenchent le processus de réponse. Les trois buts de la réponse aux incidents : réduire l'impact sur l'organisation, maintenir ou restaurer la continuité d'activité, et se défendre contre les attaques futures."
        },
        {
          type: "schema",
          titre: "Le cycle de réponse : DRMRRRL",
          points: [
            "Mnémonique : D-R-M-R-R-R-L, prononcez « drumroll »",
            "La préparation précède tout : plan, équipe, procédures",
            "Ces sept étapes sont explicitement à l'examen"
          ],
          schema: {
            type: "cycle",
            items: [
              "Detection",
              "Response",
              "Mitigation",
              "Reporting",
              "Recovery",
              "Remediation",
              "Lessons Learned"
            ]
          },
          narration:
            "Voici le cycle officiel de la réponse aux incidents, celui qui tombe à l'examen : Detection, Response, Mitigation, Reporting, Recovery, Remediation et Lessons Learned. Le moyen mnémotechnique en anglais est D-R-M-R-R-R-L, que l'on prononce drumroll, comme un roulement de tambour. En amont de tout cela se trouve la préparation : développer le plan de réponse, constituer l'équipe et définir les procédures. Une bonne préparation anticipe toutes les étapes suivantes."
        },
        {
          type: "standard",
          titre: "Détection",
          points: [
            "Identifier l'incident via IDS/IPS, anti-malware, scans de logs, utilisateurs",
            "Une alerte ou une plainte n'est pas forcément un incident : il faut vérifier",
            "But : distinguer l'événement adverse et enclencher la réponse"
          ],
          narration:
            "La détection identifie les incidents potentiels grâce aux systèmes de détection d'intrusion, aux anti-malwares, aux outils qui scannent automatiquement les journaux, et parfois tout simplement grâce aux utilisateurs qui signalent un comportement anormal au support. Attention : recevoir une alerte ne signifie pas qu'un incident a eu lieu. Il faut d'abord vérifier, faire le tri, puis déclencher la réponse pour les vrais incidents."
        },
        {
          type: "standard",
          titre: "Response : activer l'équipe",
          points: [
            "Activer l'équipe IR (aussi appelée CIRT ou CSIRT)",
            "Première tâche : impact assessment (ampleur, durée, qui impliquer)",
            "Protéger toutes les données comme preuves",
            "Ne PAS éteindre les ordinateurs concernés"
          ],
          narration:
            "Une fois l'incident vérifié, on active l'équipe de réponse aux incidents, aussi appelée CIRT ou CSIRT. Ses premières actions incluent une évaluation d'impact : quelle est l'ampleur de l'incident, combien de temps va-t-il durer, qui doit être impliqué. L'équipe enquête, évalue les dégâts, collecte les preuves et participera ensuite à toutes les étapes suivantes. Deux réflexes essentiels : protéger toutes les données comme des preuves potentielles, et ne pas éteindre les ordinateurs, car cela détruirait les preuves volatiles en mémoire."
        },
        {
          type: "standard",
          titre: "Mitigation : contenir, pas réparer",
          points: [
            "Contenir l'incident, empêcher la propagation des dégâts",
            "Exemple : isoler une machine du réseau",
            "Le but n'est PAS de corriger le problème à ce stade",
            "Parfois contenir discrètement, sans alerter l'attaquant"
          ],
          narration:
            "La mitigation, c'est le confinement. L'équipe cherche à limiter les dégâts et à empêcher la propagation, par exemple en déconnectant une machine compromise du réseau. Comprenez bien : à ce stade, le travail n'est pas de réparer le problème, mais simplement d'empêcher qu'il ne s'aggrave. Et parfois, les intervenants confinent discrètement, sans faire savoir à l'attaquant qu'il a été détecté, pour mieux l'observer ou préserver les preuves."
        },
        {
          type: "standard",
          titre: "Reporting : informer qui de droit",
          points: [
            "Le reporting traverse en réalité tout le processus",
            "Obligations légales si des PII sont exposées",
            "Certains standards l'exigent (ex. PCI DSS vers les autorités)",
            "Communication formelle aux parties prenantes après confinement"
          ],
          narration:
            "Le reporting intervient tout au long du processus, mais devient formel une fois l'incident contenu, car de nombreuses parties prenantes doivent comprendre ce qui s'est passé. Selon la juridiction, la loi peut imposer de notifier les autorités et les personnes concernées si des données personnelles ont été exposées. Certains standards sectoriels, comme PCI DSS pour les données de cartes bancaires, exigent également le signalement de certains incidents aux forces de l'ordre."
        },
        {
          type: "standard",
          titre: "Recovery : retour à la normale",
          points: [
            "Restaurer les systèmes dans un état pleinement fonctionnel",
            "Méthode la plus sûre : reconstruction complète + restauration des données",
            "Vérifier : ACL et règles firewall, services inutiles, patchs, comptes, compromissions inversées",
            "La doc de configuration et changement guide la reconstruction"
          ],
          narration:
            "La récupération ramène les systèmes à un état pleinement fonctionnel. La méthode la plus sûre après une compromission est la reconstruction complète du système depuis zéro, suivie de la restauration des données depuis la sauvegarde la plus récente. La documentation issue de la gestion des configurations et des changements garantit une reconstruction correcte. Vérifiez ensuite les listes de contrôle d'accès et les règles de pare-feu, la désactivation des services inutiles, l'application des correctifs, la configuration des comptes utilisateurs, et que toutes les compromissions connues ont bien été inversées."
        },
        {
          type: "standard",
          titre: "Remediation et Lessons Learned",
          points: [
            "Remediation : root cause analysis, empêcher la récidive",
            "Lessons learned : revue globale de l'incident ET de la réponse",
            "Le rapport final alimente la phase de détection (boucle)",
            "La direction décide des recommandations et assume le risque résiduel",
            "JAMAIS de contre-attaque (hackback interdit)"
          ],
          narration:
            "La remédiation cherche la cause racine : qu'est-ce qui a permis l'incident, et quels changements empêcheront la récidive ? La phase des leçons apprises prend ensuite de la hauteur : l'équipe et les parties prenantes examinent l'incident et la qualité de la réponse elle-même, puis produisent un rapport avec des recommandations. Ces enseignements alimentent la phase de détection, bouclant le cycle. Point de gouvernance : c'est la direction qui décide quelles recommandations implémenter, et elle assume le risque résiduel de celles qu'elle rejette. Et retenez une règle absolue pour l'examen : la gestion des incidents n'inclut jamais de contre-attaque contre l'attaquant.",
          astuce: "💡 Conseil examen : toute réponse qui propose un « hackback » ou une contre-attaque est TOUJOURS fausse."
        },
        {
          type: "question",
          titre: "Contrôle de connaissance",
          narration:
            "Mise en situation classique sur les premières actions face à un incident.",
          q: "Un serveur est activement compromis par un malware qui se propage sur le réseau. Après vérification de l'incident, quelle est la PREMIÈRE action appropriée ?",
          choix: [
            "Éteindre le serveur pour stopper le malware",
            "Isoler le serveur du réseau tout en préservant les preuves",
            "Reconstruire immédiatement le serveur depuis une image propre",
            "Lancer une analyse de cause racine"
          ],
          reponse: 1,
          explication:
            "La mitigation vise à contenir l'incident : isoler la machine du réseau stoppe la propagation tout en préservant les preuves volatiles en mémoire. Éteindre le serveur détruirait ces preuves. La reconstruction relève de la phase recovery, et la root cause analysis de la remediation — toutes deux viennent plus tard."
        },
        {
          type: "resume",
          titre: "À retenir",
          points: [
            "Event ≠ incident : seul l'incident menace la CIA et déclenche la réponse",
            "Cycle DRMRRRL : Detection, Response, Mitigation, Reporting, Recovery, Remediation, Lessons Learned",
            "Contenir sans réparer ; ne pas éteindre les machines ; préserver les preuves",
            "Recovery la plus sûre : reconstruction complète + restauration",
            "Lessons learned boucle vers la détection ; jamais de contre-attaque"
          ],
          narration:
            "Résumons la gestion des incidents. Distinguez l'événement, bénin, de l'incident, qui menace la CIA et déclenche la réponse. Le cycle à connaître par cœur : détection, réponse, mitigation, reporting, récupération, remédiation et leçons apprises — drumroll. Pendant la mitigation on contient sans réparer, on n'éteint pas les machines et on préserve les preuves. La récupération la plus sûre passe par une reconstruction complète. Et les leçons apprises réalimentent la détection, sans jamais, jamais inclure de contre-attaque."
        }
      ]
    },

    // ------------------------------------------------------------------
    // LEÇON 6 — Stratégies de récupération
    // ------------------------------------------------------------------
    {
      id: "d7-l6",
      titre: "Stratégies de récupération : sauvegardes, sites et résilience",
      duree: 15,
      slides: [
        {
          type: "intro",
          titre: "Se préparer au pire",
          points: [
            "Recovery strategy : plan de restauration après une disruption",
            "DR : restaurer l'infrastructure critique après une catastrophe",
            "BC : continuer les fonctions critiques pendant et après l'événement",
            "Les métriques BIA guident tout : RPO, RTO, WRT, MTD"
          ],
          narration:
            "Voici probablement la leçon la plus dense du domaine : les stratégies de récupération. Le disaster recovery vise à restaurer l'infrastructure technologique critique après une catastrophe, tandis que la business continuity vise à maintenir les fonctions critiques de l'entreprise pendant et après l'événement. Tout part du Business Impact Analysis et de ses métriques : RPO, RTO, WRT et MTD, qui dictent les choix de sauvegarde et de sites de secours. Accrochez-vous, l'examen adore cette partie."
        },
        {
          type: "standard",
          titre: "RPO, RTO, WRT, MTD",
          points: [
            "RPO : perte de données maximale tolérable, mesurée en temps",
            "RTO : temps maximal pour restaurer le service",
            "WRT : temps pour vérifier l'intégrité systèmes et données",
            "MTD : indisponibilité maximale avant conséquences irrécupérables",
            "Règle : RTO + WRT ≤ MTD"
          ],
          narration:
            "Quatre métriques fondamentales issues du BIA. Le Recovery Point Objective est la perte de données maximale tolérable, exprimée en temps : un RPO d'une heure signifie qu'on accepte de perdre au plus une heure de données. Le Recovery Time Objective est le temps maximal acceptable pour restaurer le service. Le Work Recovery Time est le temps nécessaire pour vérifier l'intégrité des systèmes et des données avant la reprise normale. Et le Maximum Tolerable Downtime est la durée d'indisponibilité au-delà de laquelle les conséquences deviennent irrécupérables pour l'entreprise. La relation à retenir : RTO plus WRT doit rester inférieur ou égal au MTD.",
          astuce: "💡 Conseil examen : RPO = données perdues ; RTO = temps de restauration. Ne les inversez jamais."
        },
        {
          type: "standard",
          titre: "Full, incremental, differential",
          points: [
            "Full : copie complète, remet l'archive bit à 0",
            "Incremental : changements depuis le DERNIER backup (full ou incr.), remet le bit à 0",
            "Differential : changements depuis le dernier FULL, ne touche pas au bit",
            "Restauration : full + 1 differential, ou full + TOUS les incrementals dans l'ordre"
          ],
          narration:
            "Trois types de sauvegardes. La sauvegarde complète copie tout et remet l'archive bit de chaque fichier à zéro. La sauvegarde incrémentale copie uniquement ce qui a changé depuis la dernière sauvegarde, quelle qu'elle soit, puis remet le bit à zéro. La sauvegarde différentielle copie tout ce qui a changé depuis la dernière sauvegarde complète, et surtout, elle ne modifie pas l'archive bit. Conséquence pratique pour la restauration : avec des différentielles, il suffit du dernier full et de la dernière différentielle ; avec des incrémentales, il faut le dernier full plus toutes les incrémentales dans l'ordre chronologique. L'incrémentale est rapide à créer mais lente à restaurer ; la différentielle, c'est l'inverse."
        },
        {
          type: "schema",
          titre: "La règle 3-2-1 et les rotations",
          points: [
            "Rotations de médias : Grandfather/Father/Son, Tower of Hanoi, Six Cartridge Weekly",
            "Toujours au moins une copie hors site",
            "Cloud : scalable, hautement disponible, paiement à l'usage"
          ],
          schema: {
            type: "grid",
            items: [
              "3 copies des fichiers critiques",
              "2 supports différents",
              "1 copie hors site",
              "Rotation : GFS / Hanoi / Six Cartridge"
            ]
          },
          narration:
            "La règle trois-deux-un structure toute stratégie de sauvegarde : trois copies des fichiers critiques, sur deux supports différents, dont une copie hors site, assez éloignée pour qu'un même sinistre ne détruise pas la source et la sauvegarde. Le cloud est devenu un choix populaire pour cette copie externe : scalable, hautement disponible et facturé à l'usage. Pour la rotation des médias, connaissez les trois schémas classiques : Grandfather-Father-Son avec ses cycles quotidien, hebdomadaire et mensuel, la Tower of Hanoi inspirée du casse-tête, et le Six Cartridge Weekly pour les petites structures."
        },
        {
          type: "standard",
          titre: "Copies hors site de bases de données",
          points: [
            "Electronic vaulting : transferts en masse des backups vers le site distant",
            "Remote journaling : transfert plus fréquent des journaux de transactions",
            "Remote mirroring : serveur live distant, mis à jour en temps réel — le plus cher"
          ],
          narration:
            "Trois techniques pour copier les bases de données hors site, par ordre croissant de fraîcheur et de coût. L'electronic vaulting transfère les sauvegardes complètes en masse vers le site distant, périodiquement. Le remote journaling transfère les journaux de transactions de façon plus fréquente et expéditive, mais ces journaux ne sont pas appliqués à une base vivante. Le remote mirroring, la solution la plus avancée et la plus coûteuse, maintient un serveur de base de données vivant sur le site de secours, qui reçoit chaque modification en même temps que la production."
        },
        {
          type: "standard",
          titre: "Sites de secours : cold, warm, hot",
          points: [
            "Cold site : bâtiment + électricité/climatisation, AUCUN équipement — le moins cher, semaines d'activation",
            "Warm site : équipements et liens préconfigurés, PAS de données — environ 12 h d'activation",
            "Hot site : tout est prêt, données répliquées — bascule quasi immédiate, très coûteux",
            "Hot site = attaque de surface accrue (copies des données de production)"
          ],
          narration:
            "Les trois sites de secours classiques. Le cold site n'offre qu'un bâtiment avec électricité et environnement contrôlé : aucun matériel, aucun lien de communication actif. C'est l'option la moins chère, mais l'activation se mesure en semaines et le site est difficile à tester, d'où un faux sentiment de sécurité. Le warm site ajoute les équipements de base et les liens préconfigurés, mais pas les données de l'organisation ; comptez au moins douze heures pour l'activer. Le hot site est une installation pleinement opérationnelle avec matériel, logiciels et données répliquées en continu : la bascule est quasi immédiate, mais le coût peut doubler le budget informatique, et le site accroît la surface d'attaque puisqu'il détient une copie de toutes vos données."
        },
        {
          type: "standard",
          titre: "Sites mobiles, cloud, redondants et accords",
          points: [
            "Mobile site : unité déplaçable, souvent cold ou warm, idéale pour les workgroups",
            "Cloud/IaaS : option DR de plus en plus privilégiée",
            "Hot site = service par abonnement ; redundant site = possédé par l'org",
            "MAA : entraide entre organisations — rarement utilisée (inapplicable, confidentialité)",
            "Resource capacity agreement : ressources garanties par contrat en cas de sinistre"
          ],
          narration:
            "Quelques options complémentaires. Les sites mobiles sont des unités déplaçables, généralement configurées en cold ou warm, parfaites pour une stratégie de récupération par groupes de travail. Le cloud, souvent en IaaS, est devenu l'option de reprise préférée de nombreuses organisations. Distinction d'examen importante : le hot site est un service par abonnement, tandis que le site redondant est possédé et exploité par l'organisation elle-même, souvent en configuration active-active. Les Mutual Assistance Agreements, accords d'entraide entre organisations, sont peu utilisés car difficiles à faire respecter, vulnérables au même sinistre régional, et problématiques pour la confidentialité. Enfin, les resource capacity agreements garantissent contractuellement l'accès aux ressources nécessaires après un sinistre."
        },
        {
          type: "standard",
          titre: "Résilience : HA, fault tolerance, QoS",
          points: [
            "System resilience : maintenir un niveau de service acceptable pendant l'adversité",
            "HA : composants redondants, reprise rapide ; clustering vs redundancy (failover)",
            "Fault tolerance : subir une panne et continuer à fonctionner",
            "QoS : bande passante, latence, perte de paquets, interférences",
            "MTBF, MTTF, MTTR pour évaluer les équipements"
          ],
          narration:
            "La résilience système est la capacité à maintenir un niveau de service acceptable pendant un événement adverse. La haute disponibilité s'appuie sur la redondance : le clustering fait travailler plusieurs systèmes ensemble derrière un load balancer, tandis que la redondance classique associe un système primaire actif et un secondaire en attente qui prend le relais en cas de panne, le failover. La tolérance aux pannes va plus loin : subir une défaillance et continuer à fonctionner. La qualité de service protège la disponibilité du réseau en gérant bande passante, latence, perte de paquets et interférences. Et pour évaluer les équipements, trois métriques : MTBF, le temps moyen entre pannes, MTTF, la durée de vie fonctionnelle attendue, et MTTR, le temps moyen de réparation."
        },
        {
          type: "standard",
          titre: "RAID : les niveaux à connaître",
          points: [
            "RAID 0 — striping : performance, aucune redondance",
            "RAID 1 — mirroring : disponibilité par duplication",
            "RAID 5 — parité : min. 3 disques, tolère 1 panne",
            "RAID 6 — double parité : min. 4 disques, tolère 2 pannes",
            "RAID 10 — mirroring + striping : min. 4 disques, rapide et fiable, coûteux"
          ],
          narration:
            "Le RAID combine plusieurs disques pour la vitesse ou la disponibilité. RAID zéro, le striping, répartit les données pour la performance mais n'offre aucune redondance : un disque tombe, tout est perdu. RAID un, le mirroring, duplique intégralement les données. RAID cinq utilise un bit de parité calculé par opération XOR, exige au moins trois disques et tolère la panne d'un seul. RAID six ajoute un second bloc de parité, exige quatre disques et tolère deux pannes simultanées. RAID dix combine miroir et striping sur au moins quatre disques : rapide et fiable, mais c'est l'option la plus coûteuse."
        },
        {
          type: "question",
          titre: "Contrôle de connaissance",
          narration:
            "Une question de calcul de restauration, grand classique de l'examen.",
          q: "Votre organisation effectue un full backup le lundi soir et des sauvegardes différentielles chaque autre soir. Une panne survient samedi matin. Quelles sauvegardes devez-vous restaurer ?",
          choix: [
            "Le full du lundi puis toutes les différentielles de mardi à vendredi",
            "Uniquement la différentielle de vendredi",
            "Le full du lundi puis la différentielle de vendredi",
            "Le full du lundi uniquement"
          ],
          reponse: 2,
          explication:
            "Une différentielle contient TOUS les changements depuis le dernier full. Il suffit donc de restaurer le full du lundi puis la dernière différentielle, celle de vendredi. Restaurer toutes les différentielles serait la logique des incrémentales ; la différentielle seule ne contient pas la base complète ; et le full seul perdrait quatre jours de données."
        },
        {
          type: "resume",
          titre: "À retenir",
          points: [
            "RPO = perte de données ; RTO = temps de restauration ; RTO + WRT ≤ MTD",
            "Differential : full + dernière diff ; incremental : full + toutes les incr.",
            "Règle 3-2-1 ; vaulting < journaling < mirroring (fraîcheur et coût)",
            "Cold (semaines, pas cher) < warm (~12 h) < hot (immédiat, cher) ; redundant = possédé par l'org",
            "RAID 1 miroir, 5 parité (3 disques), 6 double parité (4), 10 miroir+striping",
            "HA, fault tolerance et QoS pour la résilience"
          ],
          narration:
            "Grand résumé. Le RPO mesure la perte de données tolérable, le RTO le temps de restauration, et leur somme avec le WRT doit tenir dans le MTD. Avec des différentielles on restaure le full plus la dernière ; avec des incrémentales, le full plus toute la chaîne. Appliquez la règle trois-deux-un, et graduez vos copies distantes du vaulting au mirroring. Les sites de secours vont du cold, économique mais lent, au hot, immédiat mais coûteux, sans oublier le site redondant possédé par l'organisation. Ajoutez le RAID, la haute disponibilité et la tolérance aux pannes, et vous avez une stratégie de récupération complète."
        }
      ]
    },

    // ------------------------------------------------------------------
    // LEÇON 7 — DRP, tests, BCP, sécurité physique et personnel
    // ------------------------------------------------------------------
    {
      id: "d7-l7",
      titre: "DRP, tests de reprise, BCP, sécurité physique et personnel",
      duree: 14,
      slides: [
        {
          type: "intro",
          titre: "Du plan au terrain",
          points: [
            "DRP : instructions concrètes pour survivre à la catastrophe",
            "Un plan non testé n'est qu'une hypothèse",
            "BCP : périmètre plus large que le DR",
            "Et toujours : la vie humaine d'abord"
          ],
          narration:
            "Dernière leçon du domaine : nous passons du plan au terrain. Le plan de reprise après sinistre, le DRP, contient les instructions concrètes que suivent les équipes quand la catastrophe frappe. Mais un plan jamais testé n'est qu'une hypothèse, d'où les cinq types de tests à connaître. Nous verrons aussi le BCP, dont le périmètre dépasse largement le DR, puis la sécurité physique et la protection du personnel. Et retenez la règle d'or de tout l'examen : la vie humaine passe toujours en premier."
        },
        {
          type: "standard",
          titre: "Le DRP : response, personnel, communications",
          points: [
            "Checklists simples, tâches ordonnées par priorité",
            "Critères clairs d'activation et autorité de déclaration du désastre",
            "Liste de contacts avec moyens alternatifs et suppléants",
            "Assessment initial rapide, puis évaluations détaillées",
            "Restoration (site utilisable) ≠ recovery (opérations relancées)"
          ],
          narration:
            "Un bon DRP fournit des instructions simples et complètes, souvent sous forme de checklists dont les tâches sont classées par priorité, la plus importante en premier. Il définit les critères d'activation et surtout qui a l'autorité de déclarer le désastre, puis les procédures de notification, avec des moyens de contact alternatifs et des suppléants pour chaque rôle. À l'arrivée de l'équipe, la première priorité est l'évaluation rapide de la situation pour trier et lancer la réponse. Distinction utile : la restoration remet le site et l'environnement en état de fonctionner, tandis que la recovery relance les opérations métier. Les unités les plus prioritaires sont récupérées en premier, et l'objectif final reste le retour des équipes à leur lieu de travail habituel."
        },
        {
          type: "schema",
          titre: "Les cinq tests du DRP",
          points: [
            "Du moins risqué au plus risqué et au plus probant",
            "Seul le full-interruption prouve que le plan fonctionne",
            "La direction résiste souvent au full-interruption (risque réel)"
          ],
          schema: {
            type: "pyramid",
            items: [
              "Read-through / tabletop",
              "Walk-through structuré",
              "Simulation",
              "Parallel test",
              "Full-interruption test"
            ]
          },
          narration:
            "Cinq types de tests, du plus simple au plus probant. Le read-through distribue le plan aux membres de l'équipe pour relecture, ce qui rafraîchit les responsabilités et détecte les informations obsolètes ; le tabletop réunit l'équipe pour discuter d'un scénario sans rien perturber. Le walk-through est plus pratique : on déroule les procédures pour vérifier qu'elles sont exactes et réalisables. La simulation présente un scénario et teste réellement certaines mesures de réponse, quitte à interrompre des activités non critiques. Le parallel test va plus loin : le personnel est relocalisé sur le site de secours et l'active, sans interrompre la production. Enfin, le full-interruption test bascule réellement les opérations vers le site de secours : c'est le seul qui prouve que le plan fonctionne, mais son risque le rend très difficile à faire accepter par la direction.",
          astuce: "💡 Conseil examen : mémorisez l'ordre croissant : checklist → walkthrough → simulation → parallel → full interruption."
        },
        {
          type: "standard",
          titre: "Communiquer autour des tests et leçons apprises",
          points: [
            "Avant : informer les parties prenantes (calendrier, impacts, objectifs)",
            "Pendant : points d'avancement réguliers",
            "Après : débriefing, succès et axes d'amélioration",
            "Régulateurs : certains secteurs exigent des tests DR documentés",
            "Lessons learned rapidement, animées par un facilitateur (NIST SP 800-61)"
          ],
          narration:
            "Un test de DRP se communique. Avant, on informe toutes les parties prenantes du calendrier, des impacts potentiels et des objectifs. Pendant, surtout pour un full-interruption, on fournit des points d'avancement réguliers. Après, un débriefing passe en revue les succès et les axes d'amélioration. Dans les secteurs réglementés, tenir les régulateurs informés fait partie de la conformité. Et comme pour les incidents, chaque opération de reprise se conclut par une session de leçons apprises, menée rapidement avant que les mémoires ne s'estompent, idéalement par un facilitateur formé, en s'appuyant sur les questions du NIST SP 800-61."
        },
        {
          type: "standard",
          titre: "BCP : la vision d'ensemble",
          points: [
            "BCP : maintenir l'activité après une disruption majeure — périmètre plus large que le DR",
            "4 étapes : project scope & planning, BIA, continuity planning, approval & implementation",
            "Le RSSI participe mais ne dirige pas forcément le BCP",
            "BCM chapeaute la création, la maintenance et les tests des plans BC et DR"
          ],
          narration:
            "La business continuity planning traite la question la plus large : comment garder l'entreprise en vie après une disruption majeure. Son périmètre dépasse le seul volet technologique du DR. Les quatre étapes principales sont le cadrage et la planification du projet, le Business Impact Analysis, la planification de la continuité, puis l'approbation et l'implémentation du plan. Point de posture pour l'examen : le responsable sécurité participe à l'effort BCP, mais ne le dirige pas nécessairement, car la continuité d'activité appartient au métier. L'ensemble est chapeauté par le Business Continuity Management, qui crée, maintient et teste les plans BC et DR."
        },
        {
          type: "standard",
          titre: "Sécurité physique : le périmètre",
          points: [
            "Zones désignées : publiques, privées, restreintes, avec signalétique",
            "Fences, PIDAS (multi-clôtures), gates, turnstiles, bollards",
            "Access control vestibule (mantrap) contre le piggybacking",
            "Éclairage : contrôle périmétrique le plus courant, rôle dissuasif",
            "Guards : s'adaptent aux situations ; dogs : détection et dissuasion"
          ],
          narration:
            "La sécurité physique commence au périmètre. Les zones du site sont désignées publiques, privées ou restreintes, avec la signalétique appropriée. Les clôtures définissent le périmètre ; le PIDAS, avec ses deux ou trois clôtures concentriques et sa détection de contact, en est la forme avancée, la clôture extérieure réduisant les fausses alarmes causées par les animaux. Les portails contrôlent les passages, les tourniquets n'admettent qu'une personne à la fois, et les bollards empêchent les véhicules béliers. Le sas d'accès, ou mantrap, avec sa double porte, bloque le piggybacking et peut piéger un individu. L'éclairage est le contrôle périmétrique le plus répandu, avec un rôle avant tout dissuasif. Et les gardes restent irremplaçables car ils savent s'adapter, tous les contrôles physiques reposant in fine sur une intervention humaine."
        },
        {
          type: "standard",
          titre: "Sécurité physique interne",
          points: [
            "Priorité absolue : protéger les personnes",
            "Locks, badges, motion detectors, alarmes, PDS",
            "Détecteurs : wave pattern, infrarouge (chaleur), capacitance (champ électromagnétique)",
            "Alarmes : deterrent, repellent, notification",
            "Visitor logs : contexte physique pour interpréter les logs logiques"
          ],
          narration:
            "À l'intérieur, la règle absolue demeure : protéger les personnes avant tout. Les contrôles internes incluent les serrures, forme rudimentaire d'identification et d'autorisation, les badges, les détecteurs de mouvement, les alarmes d'intrusion et les protective distribution systems pour le câblage. Trois familles de détecteurs de mouvement : à ondes, qui émettent des signaux ultrasoniques ou micro-ondes et surveillent le retour ; à infrarouge, qui repèrent les variations de chaleur ; et capacitifs, fondés sur les champs électromagnétiques. Les alarmes se classent en dissuasives, répulsives et de notification. Enfin, les visiteurs sont escortés et consignés dans des registres, précieux pour donner un contexte physique à l'interprétation des journaux logiques."
        },
        {
          type: "standard",
          titre: "Sécurité du personnel : voyages, formation, duress",
          points: [
            "Voyage : pas de données sensibles sur les appareils, VPN, méfiance envers le wi-fi gratuit",
            "Sensibilisation : insider threat, réseaux sociaux, MFA fatigue",
            "MFA fatigue : ne JAMAIS approuver une notification non sollicitée, signaler",
            "Duress : bouton d'alarme discret, mot de code pour les fausses alertes",
            "Emergency management : la sécurité des personnes d'abord"
          ],
          narration:
            "Terminons par la protection du personnel. En voyage, les appareils ne doivent pas contenir de données sensibles, le wi-fi gratuit est à considérer comme hostile, et l'entreprise doit fournir un VPN ; dans certains pays, des dispositifs de surveillance peuvent même être installés dans les chambres d'hôtel. La sensibilisation couvre les menaces internes, les risques de sur-partage sur les réseaux sociaux qui alimentent l'ingénierie sociale, et les attaques par MFA fatigue, où l'attaquant bombarde de notifications en espérant une approbation : la consigne est de ne jamais approuver une demande non sollicitée et de la signaler. Les systèmes de duress permettent de donner l'alerte discrètement, avec un mot de code pour distinguer les fausses alertes, particulièrement utiles pour le personnel isolé. Et dans toute gestion d'urgence, la sécurité des personnes prime sur tout le reste."
        },
        {
          type: "standard",
          titre: "Duress codes : alerter sous la contrainte",
          points: [
            "Duress : agir sous la menace directe d'un agresseur (arme, otage, chantage)",
            "Duress code : mot, phrase ou geste convenu qui déclenche une alerte SILENCIEUSE",
            "Exemples : phrase anodine au téléphone, PIN alternatif qui ouvre ET alerte, bouton panique",
            "Règle d'or : coopérer en apparence, ne jamais résister — la vie humaine d'abord",
            "Coercition/extorsion d'employés : canal de signalement confidentiel, sans crainte de sanction",
            "Former et tester régulièrement : un code jamais répété sera oublié sous stress"
          ],
          narration:
            "Approfondissons la notion de duress, la contrainte. Un employé sous duress agit sous la menace directe d'un agresseur : une arme pointée, un proche pris en otage, un chantage. Le duress code est un mot, une phrase ou un geste convenu à l'avance qui déclenche une alerte silencieuse sans éveiller les soupçons de l'agresseur : une phrase anodine glissée au téléphone, un code PIN alternatif qui ouvre bien la porte mais prévient la sécurité, ou un bouton panique discret. La règle d'or est absolue : l'employé coopère en apparence et ne résiste jamais, car la vie humaine passe avant tout actif. Pensez aussi à la coercition de longue durée : un employé victime d'extorsion ou de chantage doit disposer d'un canal de signalement confidentiel, sans crainte de sanction, sinon il cédera à l'attaquant en silence. Enfin, ces procédures doivent être enseignées et répétées régulièrement, car un code jamais exercé sera oublié dans le stress d'une situation réelle.",
          astuce: "💡 Conseil examen : face à une menace physique, la bonne réponse combine toujours coopération apparente et alerte discrète. Toute option de résistance ou de confrontation est fausse — la vie humaine prime."
        },
        {
          type: "standard",
          titre: "Sécurité en voyage et protection à l'étranger",
          points: [
            "Appareils jetables ou de prêt (burner/loaner devices) : données minimales, réinitialisés au retour",
            "Avant le départ : patchs à jour, chiffrement intégral, formation à la sûreté, briefing pays",
            "Sur place : VPN systématique, wi-fi public hostile, appareils jamais laissés sans surveillance",
            "Douanes : certains pays peuvent exiger le déverrouillage — le chiffrement ne protège pas d'une injonction légale",
            "Collaborateurs à l'étranger : itinéraires partagés, check-ins réguliers, point de contact, plan d'évacuation",
            "Zones à haut risque : executive protection, veille géopolitique, assistance médicale et rapatriement"
          ],
          narration:
            "La protection du personnel en déplacement mérite un vrai programme. Pour les destinations sensibles, la meilleure pratique est l'appareil jetable ou de prêt : un téléphone et un ordinateur dédiés au voyage, contenant le strict minimum de données, entièrement réinitialisés au retour. Avant le départ, on applique tous les correctifs, on active le chiffrement intégral du disque, et surtout on forme le voyageur : briefing sur les risques du pays, consignes de comportement et procédures d'urgence. Sur place, le VPN est systématique, le wi-fi public est considéré comme hostile, et les appareils ne sont jamais laissés sans surveillance, pas même dans le coffre de l'hôtel. Point souvent ignoré : au passage des douanes, certains pays peuvent légalement exiger le déverrouillage des appareils ; le chiffrement ne protège pas contre une injonction, d'où l'intérêt de ne transporter aucune donnée sensible. Pour les collaborateurs expatriés ou en mission, l'organisation maintient des itinéraires partagés, des check-ins réguliers, un point de contact d'urgence et un plan d'évacuation. Et pour les dirigeants en zone à haut risque, on ajoute l'executive protection, la veille géopolitique et l'assistance médicale avec rapatriement.",
          astuce: "💡 Conseil examen : pour un voyage en pays à risque, la MEILLEURE réponse est presque toujours l'appareil de prêt avec données minimales — pas le chiffrement seul, qui ne résiste pas à une fouille frontalière légale."
        },
        {
          type: "question",
          titre: "Contrôle de connaissance",
          narration:
            "Une dernière question sur les tests de reprise.",
          q: "Quel type de test DRP consiste à relocaliser le personnel sur le site de secours et à l'activer SANS interrompre les opérations du site principal ?",
          choix: [
            "Simulation test",
            "Full-interruption test",
            "Parallel test",
            "Structured walk-through"
          ],
          reponse: 2,
          explication:
            "Le parallel test relocalise le personnel sur le site de secours et exécute les procédures d'activation pendant que le site principal continue de fonctionner normalement. Le full-interruption arrête réellement la production ; la simulation ne teste que certaines mesures sur scénario ; le walk-through reste un exercice procédural sans relocalisation."
        },
        {
          type: "resume",
          titre: "À retenir",
          points: [
            "DRP : checklists priorisées, autorité de déclaration, contacts et suppléants",
            "5 tests : read-through → walk-through → simulation → parallel → full-interruption",
            "Seul le full-interruption prouve le plan ; communiquer avant/pendant/après",
            "BCP : scope & planning, BIA, continuity planning, approval — plus large que le DR",
            "Périmètre : PIDAS, mantrap, bollards, éclairage ; intérieur : détecteurs, alarmes",
            "Personnel : voyages, MFA fatigue, duress — la vie humaine d'abord"
          ],
          narration:
            "Dernier résumé du domaine. Le DRP repose sur des checklists priorisées, une autorité claire de déclaration du désastre et des listes de contacts avec suppléants. Les cinq tests s'échelonnent du read-through au full-interruption, seul capable de prouver le plan. Le BCP embrasse un périmètre plus large que le DR, en quatre étapes du cadrage à l'approbation. La sécurité physique s'étage du périmètre, avec PIDAS, mantraps et éclairage, jusqu'aux contrôles internes. Et pour le personnel comme pour tout le CISSP : la protection de la vie humaine est toujours la priorité numéro un."
        }
      ]
    }
  ],

  // --------------------------------------------------------------------
  // QUIZ — 32 questions style examen
  // --------------------------------------------------------------------
  quiz: [
    {
      q: "Lors d'une investigation criminelle, quel est le rôle PRINCIPAL du professionnel de la sécurité de l'entreprise ?",
      choix: [
        "Mener l'interrogatoire des suspects internes",
        "Préserver les preuves et assister les forces de l'ordre",
        "Déterminer la culpabilité au-delà du doute raisonnable",
        "Négocier avec l'attaquant pour récupérer les données"
      ],
      reponse: 1,
      explication:
        "Dans une investigation criminelle, ce sont les forces de l'ordre qui enquêtent. Le professionnel de la sécurité préserve les preuves, s'assure que la police a été contactée et assiste selon les besoins. Il ne mène pas d'interrogatoire, ne juge pas de la culpabilité (rôle du tribunal) et ne négocie jamais avec un attaquant.",
      difficulte: 1
    },
    {
      q: "Quel niveau de preuve est requis dans une investigation civile ?",
      choix: [
        "Au-delà du doute raisonnable (beyond a reasonable doubt)",
        "Prépondérance des preuves (preponderance of evidence)",
        "Certitude absolue documentée",
        "Preuve directe par témoin oculaire uniquement"
      ],
      reponse: 1,
      explication:
        "Le civil exige seulement la prépondérance des preuves, un niveau bien plus faible que le « beyond a reasonable doubt » réservé au criminel. La certitude absolue n'est un standard nulle part, et la preuve directe n'est jamais la seule forme admissible.",
      difficulte: 2
    },
    {
      q: "Un administrateur système souhaite présenter des journaux systèmes comme preuves au tribunal. Quelle règle risque de s'y opposer si les logs ne sont pas authentifiés ?",
      choix: [
        "Le parol evidence rule",
        "Le best evidence rule",
        "La règle du hearsay (ouï-dire)",
        "Le principe de Locard"
      ],
      reponse: 2,
      explication:
        "Les tribunaux ont appliqué la règle du hearsay aux logs systèmes : ils ne peuvent être introduits comme preuves que s'ils sont authentifiés par un administrateur système. Le parol evidence concerne les contrats écrits, le best evidence rule impose l'original plutôt que la copie, et Locard traite des traces laissées sur une scène de crime.",
      difficulte: 3
    },
    {
      q: "Quelle affirmation décrit le MIEUX la chain of custody ?",
      choix: [
        "La liste des vulnérabilités exploitées pendant l'incident",
        "La documentation de qui a collecté et manipulé chaque preuve, quand et où",
        "L'ordre chronologique des étapes de l'attaque",
        "Le processus d'approbation des changements en urgence"
      ],
      reponse: 1,
      explication:
        "La chain of custody documente le contrôle de la preuve : qui l'a collectée et manipulée, quand et où, à chaque transfert (tag, bag, carry). Sans elle, la preuve réelle perd son admissibilité. Les autres réponses décrivent l'analyse d'attaque ou la gestion des changements.",
      difficulte: 1
    },
    {
      q: "Parmi les cinq règles de la preuve, laquelle exige de fournir TOUTES les parties de la preuve, y compris celles qui desservent votre dossier ?",
      choix: ["Authentic", "Convincing", "Complete", "Admissible"],
      reponse: 2,
      explication:
        "La règle « complete » impose de partager la preuve dans son intégralité, qu'elle soutienne ou non votre cause. « Authentic » signifie non fabriquée, « convincing » facile à comprendre, et « admissible » pertinente, matérielle et collectée légalement.",
      difficulte: 2
    },
    {
      q: "Votre organisation apprend qu'un procès va probablement être intenté contre elle. Que devez-vous faire EN PREMIER concernant les données électroniques ?",
      choix: [
        "Purger les données au-delà de la durée de rétention",
        "Mettre en œuvre la préservation des preuves numériques potentiellement pertinentes",
        "Chiffrer toutes les archives pour les protéger",
        "Transférer les données vers un tiers de confiance"
      ],
      reponse: 1,
      explication:
        "Une organisation qui anticipe un litige a l'obligation légale de préserver les preuves numériques (legal hold, phase Preservation du modèle EDRM). Purger des données à ce stade constituerait une destruction de preuves ; le chiffrement et le transfert ne répondent pas à l'obligation de préservation.",
      difficulte: 2
    },
    {
      q: "Quel est l'objectif PRINCIPAL du tuning d'un SIEM ?",
      choix: [
        "Augmenter le volume de logs collectés",
        "Réduire les false positives sans créer de false negatives",
        "Éliminer complètement les alertes pour les analystes",
        "Accélérer la rotation des fichiers journaux"
      ],
      reponse: 1,
      explication:
        "Le tuning réduit les faux positifs, qui causent la fatigue des analystes, tout en évitant les faux négatifs — des activités malveillantes réelles non détectées. Collecter plus de logs n'est pas le but du tuning, supprimer toutes les alertes serait dangereux, et la rotation des journaux relève du log management.",
      difficulte: 2
    },
    {
      q: "Quelle technologie permet de répondre AUTOMATIQUEMENT à certains incidents en s'appuyant sur des playbooks et des runbooks ?",
      choix: ["SIEM", "SOAR", "UEBA", "IDS"],
      reponse: 1,
      explication:
        "Le SOAR (Security Orchestration, Automation, and Response) automatise la réponse aux incidents définis dans des playbooks, implémentés par des runbooks, réduisant la charge des administrateurs et l'erreur humaine. Le SIEM corrèle et alerte mais ne répond pas, l'UEBA analyse les comportements, et l'IDS détecte sans agir.",
      difficulte: 1
    },
    {
      q: "Quel duo de standards permet de DÉCRIRE puis de TRANSPORTER les informations de threat intelligence ?",
      choix: [
        "STIX pour décrire, TAXII pour transporter",
        "TAXII pour décrire, STIX pour transporter",
        "IoC pour décrire, NetFlow pour transporter",
        "SCAP pour décrire, SNMP pour transporter"
      ],
      reponse: 0,
      explication:
        "STIX est le langage structuré (JSON) qui exprime les renseignements sur les menaces ; TAXII est le protocole de transport qui achemine les données STIX sur HTTPS. L'inverser est le piège classique. IoC et NetFlow sont des données, pas des standards d'échange complets ; SCAP concerne l'automatisation de la conformité.",
      difficulte: 2
    },
    {
      q: "Dans la Cyber Kill Chain de Lockheed Martin, à quelle étape l'attaquant envoie-t-il son exploit à la cible via un e-mail de phishing ?",
      choix: ["Weaponization", "Delivery", "Exploitation", "Installation"],
      reponse: 1,
      explication:
        "La delivery est l'envoi de l'arme vers la cible : phishing, pièce jointe malveillante, site compromis. La weaponization est la préparation de l'exploit en amont, l'exploitation est le déclenchement de la vulnérabilité, et l'installation est la mise en place du malware avec backdoor.",
      difficulte: 2
    },
    {
      q: "Quelle solution est la MIEUX adaptée pour détecter un compte compromis dont l'attaquant utilise des identifiants valides ?",
      choix: [
        "Un firewall stateful",
        "Une détection par signatures",
        "L'UEBA (analyse comportementale des utilisateurs et entités)",
        "Une deny list applicative"
      ],
      reponse: 2,
      explication:
        "Avec des identifiants valides, aucune signature d'attaque ni règle firewall n'est violée. L'UEBA détecte les déviations par rapport au profil de comportement habituel de l'utilisateur (horaires, volumes, ressources accédées), signature typique d'un compte compromis ou d'une menace interne.",
      difficulte: 2
    },
    {
      q: "Quelle est la différence FONDAMENTALE entre need-to-know et least privilege ?",
      choix: [
        "Need-to-know concerne les administrateurs, least privilege les utilisateurs",
        "Need-to-know limite l'accès à l'information, least privilege limite l'étendue des droits et permissions",
        "Need-to-know est technique, least privilege est administratif",
        "Il n'y a aucune différence, ce sont des synonymes"
      ],
      reponse: 1,
      explication:
        "Need-to-know restreint QUELLES informations un sujet peut connaître pour accomplir sa tâche ; least privilege restreint l'ÉTENDUE des privilèges accordés (permissions sur les données et droits d'exécuter des tâches systèmes). Les deux s'appliquent à tous les sujets, y compris processus et services.",
      difficulte: 1
    },
    {
      q: "Quel contrôle exige la coopération de DEUX personnes pour effectuer une tâche critique, par exemple chacune saisissant la moitié d'un mot de passe ?",
      choix: ["Job rotation", "Two-person control", "Mandatory vacation", "Clipping"],
      reponse: 1,
      explication:
        "Le two-person control (règle des deux hommes) exige l'approbation ou l'action conjointe de deux individus, garantissant la revue par les pairs et réduisant le risque de fraude. La rotation des postes et les congés obligatoires détectent la fraude dans la durée, et le clipping est une technique d'échantillonnage de logs.",
      difficulte: 1
    },
    {
      q: "Quel est le bénéfice de sécurité PRINCIPAL de la job rotation ?",
      choix: [
        "Réduire les coûts de formation",
        "Fournir revue par les pairs, détection de la fraude et cross-training",
        "Accélérer les promotions internes",
        "Éliminer le besoin de séparation des tâches"
      ],
      reponse: 1,
      explication:
        "La rotation des postes offre une revue par les pairs, réduit la fraude (dissuasion et détection, car une fraude dépendant d'une personne en poste finit par être découverte) et développe la polyvalence. Elle complète la séparation des tâches mais ne la remplace pas, et elle augmente plutôt les coûts de formation.",
      difficulte: 1
    },
    {
      q: "Pourquoi est-il essentiel de surveiller les actions des comptes privilégiés ?",
      choix: [
        "Parce que les administrateurs sont les employés les moins fiables",
        "Parce que les attaquants utilisent presque toujours des privilèges élevés et que les employés de confiance peuvent en abuser",
        "Uniquement pour satisfaire les exigences des auditeurs externes",
        "Pour mesurer la productivité des équipes IT"
      ],
      reponse: 1,
      explication:
        "La surveillance des opérations privilégiées répond à deux risques : l'abus par des employés de confiance et la détection d'attaques, car les attaquants exploitent quasi systématiquement des privilèges élevés. Il ne s'agit ni de défiance systématique, ni de simple conformité, ni de mesure de productivité.",
      difficulte: 2
    },
    {
      q: "Quel processus garantit que les systèmes sont déployés dans un état sécurisé et cohérent et qu'ils le RESTENT tout au long de leur cycle de vie ?",
      choix: [
        "La gestion des vulnérabilités",
        "La gestion des configurations (CM)",
        "La gestion des incidents",
        "L'eDiscovery"
      ],
      reponse: 1,
      explication:
        "La configuration management identifie, contrôle et vérifie les configurations, en s'appuyant sur des baselines (souvent déployées par images) et le hardening. La gestion des vulnérabilités identifie les faiblesses, la gestion des incidents traite les compromissions, et l'eDiscovery concerne les procédures judiciaires.",
      difficulte: 1
    },
    {
      q: "Lors d'un changement d'infrastructure, quel élément doit IMPÉRATIVEMENT être prêt avant l'implémentation ?",
      choix: [
        "Un communiqué de presse",
        "Un plan de rollback permettant d'annuler le changement",
        "La sauvegarde des logs du SIEM",
        "L'accord écrit de tous les utilisateurs finaux"
      ],
      reponse: 1,
      explication:
        "Le processus de change management exige un plan de retour arrière avant l'implémentation, afin de pouvoir annuler le changement si un problème survient. La communication vise les parties prenantes clés, pas la presse ni chaque utilisateur, et la sauvegarde des logs SIEM n'est pas l'élément critique ici.",
      difficulte: 1
    },
    {
      q: "Quelle est la MEILLEURE façon de vérifier l'efficacité d'un programme de patch management ?",
      choix: [
        "Compter le nombre de patchs publiés par les éditeurs",
        "Effectuer des scans de vulnérabilités et des audits réguliers des systèmes",
        "Demander une attestation écrite aux administrateurs",
        "Vérifier que les patchs sont téléchargés sur le serveur central"
      ],
      reponse: 1,
      explication:
        "Les scans de vulnérabilités détectent les patchs manquants et constituent un contrôle efficace du programme de patch management ; les audits confirment que les systèmes restent à jour. Le nombre de patchs publiés ne dit rien de leur déploiement, une attestation n'est pas une vérification technique, et télécharger n'est pas installer.",
      difficulte: 2
    },
    {
      q: "Quel type de firewall opère en couche 7 et peut bloquer des attaques par injection SQL contre un serveur web ?",
      choix: [
        "Static packet filtering firewall",
        "Circuit-level gateway",
        "Web Application Firewall (WAF)",
        "Stateful inspection firewall"
      ],
      reponse: 2,
      explication:
        "Le WAF est un firewall applicatif de couche 7 qui inspecte le contenu du trafic web et bloque les attaques comme l'injection SQL ou le XSS. Le filtrage statique reste en couche 3, le circuit-level en couche 5 valide les sessions sans inspecter le contenu, et le stateful (couches 3-4) n'inspecte pas la couche applicative.",
      difficulte: 2
    },
    {
      q: "Un IDS behavior-based génère beaucoup plus d'alertes qu'un IDS à signatures. Quel est son avantage COMPENSATOIRE ?",
      choix: [
        "Il consomme moins de ressources système",
        "Il peut détecter des attaques nouvelles et inconnues",
        "Il ne nécessite aucune configuration initiale",
        "Il bloque automatiquement les attaques détectées"
      ],
      reponse: 1,
      explication:
        "La détection comportementale compare l'activité à une baseline et peut donc repérer des attaques inédites, là où la détection par signatures est aveugle à tout ce qui n'est pas déjà répertorié. En contrepartie, elle génère plus de faux positifs, exige la constitution d'une baseline, et un IDS ne bloque rien (c'est le rôle de l'IPS).",
      difficulte: 2
    },
    {
      q: "Quel est l'intérêt PRINCIPAL d'un honeypot pour une organisation ?",
      choix: [
        "Héberger les données sensibles dans un environnement renforcé",
        "Occuper l'attaquant loin de la production et observer ses techniques",
        "Riposter automatiquement contre les systèmes de l'attaquant",
        "Remplacer l'IDS sur les segments critiques"
      ],
      reponse: 1,
      explication:
        "Le honeypot est un leurre doté de pseudo-failles et de fausses données : il détourne l'attaquant de l'environnement de production tout en permettant de l'observer sans risque. Il n'héberge jamais de données de valeur réelle, ne riposte pas (le hackback est proscrit) et complète l'IDS sans le remplacer.",
      difficulte: 1
    },
    {
      q: "Quelle approche de contrôle applicatif correspond au principe « deny by default » ?",
      choix: [
        "La deny list : bloquer les applications connues comme malveillantes",
        "L'allow list : seules les applications explicitement autorisées peuvent s'exécuter",
        "Le sandboxing de toutes les applications",
        "L'utilisation simultanée d'une allow list et d'une deny list"
      ],
      reponse: 1,
      explication:
        "L'allow listing n'autorise que les applications approuvées et bloque tout le reste par défaut (implicit deny) — l'App Store d'iOS en est un exemple extrême. La deny list ne bloque que ce qui est listé et laisse passer le reste. Un système utilise une seule liste, jamais les deux, et le sandboxing est une technique d'isolation, pas de contrôle d'exécution.",
      difficulte: 2
    },
    {
      q: "Un malware reste actif en mémoire sans jamais s'écrire sur le disque. Comment le qualifie-t-on ?",
      choix: ["Rootkit", "Fileless malware", "Multipartite", "Logic bomb"],
      reponse: 1,
      explication:
        "Le fileless malware ne laisse aucune trace sur les supports de stockage tout en restant résident et actif en mémoire, ce qui complique fortement sa détection. Le rootkit s'enfouit dans l'OS pour se masquer, le multipartite se propage par plusieurs vecteurs, et la logic bomb attend une condition de déclenchement.",
      difficulte: 2
    },
    {
      q: "Pendant la phase de mitigation d'un incident, quel est l'objectif de l'équipe de réponse ?",
      choix: [
        "Corriger définitivement la vulnérabilité exploitée",
        "Contenir l'incident et empêcher des dégâts supplémentaires",
        "Rédiger le rapport final pour la direction",
        "Restaurer les systèmes depuis les sauvegardes"
      ],
      reponse: 1,
      explication:
        "La mitigation est le confinement : limiter l'impact et empêcher la propagation, par exemple en isolant une machine du réseau — sans chercher à réparer à ce stade. La correction de la vulnérabilité relève de la remediation, le rapport du reporting, et la restauration de la phase recovery.",
      difficulte: 1
    },
    {
      q: "Après un incident majeur, la méthode la PLUS SÛRE pour restaurer un système compromis est :",
      choix: [
        "Supprimer le malware avec l'antivirus puis remettre en production",
        "Restaurer uniquement les fichiers modifiés par l'attaquant",
        "Reconstruire complètement le système puis restaurer les données depuis la sauvegarde la plus récente",
        "Changer tous les mots de passe et surveiller le système"
      ],
      reponse: 2,
      explication:
        "La reconstruction complète depuis zéro, guidée par la documentation de configuration, garantit qu'aucun composant compromis (backdoor, rootkit) ne subsiste, avant restauration des données. Un simple nettoyage antivirus ou une restauration partielle peut laisser des portes dérobées, et changer les mots de passe ne suffit pas.",
      difficulte: 2
    },
    {
      q: "À l'issue de la phase lessons learned, la direction rejette une recommandation de l'équipe IR. Qui assume le risque associé ?",
      choix: [
        "L'équipe de réponse aux incidents",
        "Le RSSI personnellement",
        "La direction (management) qui a pris la décision",
        "L'auditeur externe"
      ],
      reponse: 2,
      explication:
        "Le management décide quelles recommandations implémenter et reste responsable du risque résiduel pour celles qu'il rejette. C'est un principe transverse du CISSP : la responsabilité ultime du risque appartient toujours à la direction, jamais aux équipes techniques ni aux auditeurs.",
      difficulte: 2
    },
    {
      q: "Votre RTO est de 4 heures, votre WRT de 2 heures et votre MTD de 8 heures. Cette configuration est-elle acceptable ?",
      choix: [
        "Non, car le RTO doit toujours être supérieur au MTD",
        "Oui, car RTO + WRT (6 h) reste inférieur au MTD (8 h)",
        "Non, car le WRT doit être égal au RTO",
        "Impossible à dire sans connaître le RPO"
      ],
      reponse: 1,
      explication:
        "La règle est RTO + WRT ≤ MTD : le temps de restauration du service plus le temps de vérification de l'intégrité doivent tenir dans l'indisponibilité maximale tolérable. Ici 4 + 2 = 6 heures ≤ 8 heures, c'est acceptable. Le RPO concerne la perte de données, pas la durée d'indisponibilité.",
      difficulte: 3
    },
    {
      q: "Votre organisation effectue un full backup le dimanche et des sauvegardes incrémentales chaque nuit. Une panne survient jeudi matin. Que devez-vous restaurer ?",
      choix: [
        "Le full du dimanche et l'incrémentale de mercredi uniquement",
        "Le full du dimanche puis les incrémentales de lundi, mardi et mercredi dans l'ordre chronologique",
        "Uniquement l'incrémentale de mercredi",
        "Le full du dimanche uniquement"
      ],
      reponse: 1,
      explication:
        "Chaque incrémentale ne contient que les changements depuis la sauvegarde précédente : il faut donc le full puis TOUTES les incrémentales dans l'ordre chronologique. Restaurer une seule incrémentale est la logique des différentielles ; le full seul perdrait trois jours de données.",
      difficulte: 2
    },
    {
      q: "Quelle technique de copie hors site maintient un serveur de base de données VIVANT sur le site de secours, mis à jour en même temps que la production ?",
      choix: ["Electronic vaulting", "Remote journaling", "Remote mirroring", "Rollover logging"],
      reponse: 2,
      explication:
        "Le remote mirroring, solution la plus avancée et la plus coûteuse, applique les modifications à un serveur de secours actif simultanément à la production. L'electronic vaulting transfère les sauvegardes en masse, le remote journaling transfère les journaux de transactions sans les appliquer à une base vivante, et le rollover logging concerne la rotation des logs.",
      difficulte: 2
    },
    {
      q: "Une PME au budget limité peut tolérer plusieurs semaines d'indisponibilité pour ses applications non critiques. Quel site de secours est le PLUS approprié ?",
      choix: ["Hot site", "Warm site", "Cold site", "Site redondant actif-actif"],
      reponse: 2,
      explication:
        "Le cold site — un bâtiment avec électricité et environnement contrôlé mais sans équipement — est l'option la moins chère, adaptée à un RTO très souple mesuré en semaines. Hot site et site redondant sont très coûteux et surdimensionnés ici, et le warm site reste plus cher que nécessaire pour ce besoin.",
      difficulte: 1
    },
    {
      q: "Pourquoi les Mutual Assistance Agreements (MAA) sont-ils RAREMENT utilisés comme stratégie de reprise ?",
      choix: [
        "Ils sont interdits par la plupart des régulateurs",
        "Ils sont difficiles à faire respecter, vulnérables au même sinistre régional et posent des problèmes de confidentialité",
        "Ils coûtent plus cher qu'un hot site",
        "Ils exigent une certification ISO préalable"
      ],
      reponse: 1,
      explication:
        "Les MAA sont peu contraignants juridiquement (difficiles à faire appliquer), les deux organisations peuvent être touchées par le même sinistre régional, et l'hébergement mutuel soulève des questions de confidentialité. Ils ne sont ni interdits, ni plus chers qu'un hot site — c'est même leur faible coût qui les rend tentants.",
      difficulte: 3
    },
    {
      q: "Quel niveau de RAID utilise un double bloc de parité et tolère la panne SIMULTANÉE de deux disques ?",
      choix: ["RAID 1", "RAID 5", "RAID 6", "RAID 10"],
      reponse: 2,
      explication:
        "RAID 6 utilise deux blocs de parité, exige au minimum quatre disques et survit à la défaillance simultanée de deux d'entre eux. RAID 5 (parité simple, trois disques minimum) ne tolère qu'une panne, RAID 1 est un simple miroir, et RAID 10 combine miroir et striping sans double parité.",
      difficulte: 2
    },
    {
      q: "Quel test DRP est le SEUL à prouver réellement que le plan de reprise fonctionne, tout en étant le plus risqué ?",
      choix: ["Simulation test", "Parallel test", "Full-interruption test", "Structured walk-through"],
      reponse: 2,
      explication:
        "Le full-interruption test arrête réellement les opérations du site principal et les bascule vers le site de secours : c'est la seule preuve complète du plan, mais son risque (arrêt de production réel) provoque souvent la résistance de la direction. Le parallel test active le site de secours sans interrompre la production, la simulation ne teste que certaines mesures, et le walk-through reste procédural.",
      difficulte: 1
    },
    {
      q: "Lors d'un read-through test du DRP, quel bénéfice N'EST PAS attendu ?",
      choix: [
        "Rafraîchir les responsabilités des personnels clés",
        "Identifier les informations obsolètes du plan",
        "Repérer les rôles DR laissés vacants par des départs",
        "Valider le fonctionnement réel du basculement vers le site de secours"
      ],
      reponse: 3,
      explication:
        "Le read-through est une simple relecture du plan : il rafraîchit les responsabilités, met à jour les informations obsolètes et détecte les rôles à réattribuer après un départ. Il ne teste jamais le basculement réel — seuls les tests parallel et full-interruption activent le site de secours.",
      difficulte: 2
    },
    {
      q: "Un employé reçoit en pleine nuit des dizaines de notifications MFA qu'il n'a pas sollicitées. Quelle est la consigne CORRECTE à lui enseigner ?",
      choix: [
        "Approuver une notification pour faire cesser les alertes",
        "Éteindre son téléphone jusqu'au matin",
        "Ne jamais approuver et signaler immédiatement l'activité",
        "Désactiver la MFA sur son compte"
      ],
      reponse: 2,
      explication:
        "C'est une attaque par MFA fatigue : l'attaquant possède déjà le mot de passe et bombarde de notifications en espérant une approbation. La consigne est de ne jamais approuver une demande non initiée et de la signaler immédiatement, car elle prouve que le mot de passe est compromis. Approuver donne l'accès à l'attaquant ; éteindre le téléphone ou désactiver la MFA n'adresse pas la compromission.",
      difficulte: 2
    },
    {
      q: "Quel dispositif de sécurité physique empêche le piggybacking grâce à un double jeu de portes ?",
      choix: [
        "Le turnstile",
        "L'access control vestibule (mantrap)",
        "Le bollard",
        "Le PIDAS"
      ],
      reponse: 1,
      explication:
        "Le sas d'accès (mantrap) utilise deux portes successives, souvent sous contrôle d'un garde, pour empêcher qu'une personne n'en suive une autre (piggybacking) et peut piéger un individu suspect. Le tourniquet limite le passage à une personne mais sans sas, le bollard bloque les véhicules, et le PIDAS est un système de clôtures multiples.",
      difficulte: 1
    }
  ],

  // --------------------------------------------------------------------
  // FLASHCARDS — 26 cartes
  // --------------------------------------------------------------------
  flashcards: [
    {
      recto: "Chain of custody",
      verso: "Documentation continue de qui a collecté et manipulé chaque preuve, quand et où (« tag, bag, carry »). Toute rupture compromet l'admissibilité de la preuve au tribunal."
    },
    {
      recto: "Les 4 types d'investigations",
      verso: "Administrative (violations de politiques internes), criminelle (forces de l'ordre, « beyond a reasonable doubt »), civile (litiges, prépondérance des preuves), réglementaire (déclenchée par un régulateur)."
    },
    {
      recto: "Les 5 règles de la preuve",
      verso: "Authentic (non fabriquée), accurate (intégrité), complete (toutes les parties, même défavorables), convincing (compréhensible), admissible (pertinente, matérielle, collectée légalement)."
    },
    {
      recto: "Best evidence rule",
      verso: "Règle exigeant de présenter au tribunal la preuve originale plutôt qu'une copie ou une preuve secondaire."
    },
    {
      recto: "Hearsay evidence",
      verso: "Preuve par ouï-dire (déclaration faite hors tribunal), généralement irrecevable. Appliquée aux logs systèmes : ils doivent être authentifiés par un administrateur pour être admissibles."
    },
    {
      recto: "Locard exchange principle",
      verso: "Lors de tout crime, quelque chose est emporté et quelque chose est laissé derrière. Fondement du forensics : tout contact laisse une trace."
    },
    {
      recto: "eDiscovery",
      verso: "Processus d'identification, de collecte et de production d'informations stockées électroniquement pour une procédure judiciaire (modèle EDRM en 9 étapes). Devoir de préservation dès qu'un litige est anticipé."
    },
    {
      recto: "SIEM",
      verso: "Security Information and Event Management : ingère les logs de sources multiples, avec agrégation, normalisation, corrélation, stockage sécurisé, analyse et reporting. Nécessite technologie + processus + personnes."
    },
    {
      recto: "SOAR / playbook / runbook",
      verso: "SOAR : réponse automatisée aux incidents. Playbook : document définissant COMMENT répondre à un incident. Runbook : implémentation automatisée des étapes du playbook."
    },
    {
      recto: "False positive vs false negative",
      verso: "False positive : classer à tort une activité bénigne comme malveillante (fatigue des analystes). False negative : ne PAS alerter sur une activité réellement malveillante — le plus dangereux."
    },
    {
      recto: "UEBA",
      verso: "User and Entity Behavior Analytics : construit des profils de comportement normal et alerte sur les déviations. Détecte fraude, malware, menaces internes et comptes compromis."
    },
    {
      recto: "STIX et TAXII",
      verso: "STIX : langage standardisé (JSON) pour décrire et partager la threat intelligence. TAXII : protocole de transport des données STIX sur HTTPS. STIX décrit, TAXII transporte."
    },
    {
      recto: "Threat hunting",
      verso: "Recherche proactive d'activité malveillante ayant échappé aux outils automatisés, sur le réseau et les endpoints. Postulat : l'attaquant est peut-être déjà dans l'environnement."
    },
    {
      recto: "Cyber Kill Chain (7 étapes)",
      verso: "Reconnaissance → Weaponization → Delivery → Exploitation → Installation → Command & Control → Actions on Objectives. Casser la chaîne à n'importe quelle étape stoppe l'attaque."
    },
    {
      recto: "Egress monitoring",
      verso: "Surveillance du trafic SORTANT du réseau pour détecter l'exfiltration de données. Outils typiques : DLP (Data Loss Prevention) et détection de stéganographie."
    },
    {
      recto: "Need-to-know vs least privilege",
      verso: "Need-to-know : limite QUELLES informations un sujet peut connaître. Least privilege : limite l'ÉTENDUE des droits et permissions accordés (données et tâches systèmes)."
    },
    {
      recto: "Segregation of Duties (SoD)",
      verso: "Aucune personne seule ne contrôle une fonction critique : la fraude nécessite une collusion. Variantes : two-person control (deux approbations) et split knowledge (savoir réparti, ex. M of N control)."
    },
    {
      recto: "Hardening d'un système",
      verso: "Désactiver les services inutilisés, fermer les ports logiques inutiles, supprimer les applications superflues, changer les mots de passe par défaut — selon des référentiels comme les benchmarks CIS."
    },
    {
      recto: "Cycle du patch management",
      verso: "Évaluer le patch → tester sur système isolé non productif → approuver (via change management) → déployer → vérifier par audits et scans qu'il est appliqué."
    },
    {
      recto: "IDS vs IPS",
      verso: "IDS : détecte et alerte (contrôle détectif). IPS : détecte ET bloque, placé en coupure (contrôle préventif). Détection par signatures = attaques connues ; comportementale (baseline) = attaques inconnues."
    },
    {
      recto: "Honeypot / honeynet",
      verso: "Systèmes leurres avec pseudo-failles et fausses données : occupent l'attaquant loin de la production et permettent d'observer ses techniques. Honeynet = réseau de honeypots."
    },
    {
      recto: "Cycle de réponse aux incidents (DRMRRRL)",
      verso: "Detection → Response → Mitigation → Reporting → Recovery → Remediation → Lessons Learned (« drumroll »). Jamais de contre-attaque. Lessons learned réalimente la détection."
    },
    {
      recto: "RPO / RTO / WRT / MTD",
      verso: "RPO : perte de données max tolérable (en temps). RTO : temps max de restauration du service. WRT : temps de vérification d'intégrité. MTD : indisponibilité max tolérable. Règle : RTO + WRT ≤ MTD."
    },
    {
      recto: "Full vs incremental vs differential",
      verso: "Full : tout, remet l'archive bit à 0. Incremental : changements depuis le dernier backup, remet le bit à 0 (restauration : full + toutes les incr.). Differential : changements depuis le dernier full, ne touche pas au bit (restauration : full + dernière diff)."
    },
    {
      recto: "Cold / warm / hot / redundant site",
      verso: "Cold : bâtiment seul, semaines d'activation, le moins cher. Warm : équipements sans données, ~12 h. Hot : tout prêt, données répliquées, quasi immédiat, très cher (abonnement). Redundant : possédé par l'org, souvent actif-actif."
    },
    {
      recto: "Les 5 tests du DRP",
      verso: "Read-through/tabletop (relecture, discussion) → walk-through (procédural) → simulation (scénario, mesures testées) → parallel (site de secours activé, production intacte) → full-interruption (bascule réelle, seul test qui prouve le plan)."
    }
  ]
};
