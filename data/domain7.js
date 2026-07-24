/* Domaine 7 — données générées ; schéma : data/SCHEMA.md */
window.CISSP_DATA = window.CISSP_DATA || { domains: {} };
window.CISSP_DATA.domains[7] = {
  "id": 7,
  "code": "D7",
  "titre": "Opérations de sécurité",
  "titreEn": "Security Operations",
  "poids": "13%",
  "couleur": "#f95738",
  "icone": "⚙️",
  "description": "Le Domaine 7 couvre le quotidien de la sécurité : investigations et forensics, journalisation et supervision, gestion des configurations, des changements et des correctifs, réponse aux incidents, et surtout la récupération après sinistre avec le DRP et le BCP. C'est un domaine très opérationnel, mais l'examen l'aborde toujours avec un regard de manager : processus, priorités et jugement.",
  "objectifs": [
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
  "lecons": [
    {
      "id": "d7-l1",
      "titre": "Investigations et forensics numériques",
      "duree": 12,
      "slides": [
        {
          "type": "intro",
          "titre": "Pourquoi les investigations comptent",
          "points": [
            "Une investigation est une enquête formelle et systématique",
            "Objectifs : cause racine, prévention, limitation de l'impact",
            "Une preuve mal manipulée peut être rejetée par un tribunal"
          ],
          "narration": "Bienvenue dans le Domaine sept, le cœur opérationnel du CISSP. Nous commençons par les investigations. Quand un incident de sécurité survient, l'organisation doit mener une enquête formelle pour identifier la cause racine, prévenir la récidive et limiter l'impact. Retenez dès maintenant une idée clé : une preuve mal collectée ou mal manipulée peut être rejetée par un tribunal, et toute l'enquête s'effondre."
        },
        {
          "type": "standard",
          "titre": "Les quatre types d'investigations",
          "points": [
            "Administrative : violation de politique interne, niveau de preuve le plus bas",
            "Criminelle : menée par les forces de l'ordre, preuve « beyond a reasonable doubt »",
            "Civile : litige entre parties, niveau de preuve plus faible (prépondérance)",
            "Réglementaire : déclenchée par un régulateur en cas de non-conformité"
          ],
          "narration": "L'examen adore distinguer les quatre types d'investigations. L'investigation administrative traite les violations de politiques internes. L'investigation criminelle est conduite par les forces de l'ordre et exige le niveau de preuve le plus élevé, au-delà du doute raisonnable. L'investigation civile concerne les litiges, comme un différend contractuel, avec un niveau de preuve bien plus faible. Enfin, l'investigation réglementaire est lancée par un régulateur qui soupçonne une non-conformité. Dans les cas criminels et réglementaires, votre rôle est de préserver les preuves et d'assister les enquêteurs officiels.",
          "astuce": "💡 Conseil examen : criminel = « beyond a reasonable doubt » ; civil = prépondérance des preuves. Cette différence de niveau de preuve est une question classique."
        },
        {
          "type": "standard",
          "titre": "Sécuriser la scène et le principe de Locard",
          "points": [
            "Sceller l'accès, photographier, documenter, ne rien toucher",
            "Locard exchange principle : tout contact laisse une trace",
            "La collecte doit commencer dès la découverte de l'incident",
            "Conserver les logs sur une durée raisonnable"
          ],
          "narration": "Toute investigation sérieuse commence par la sécurisation de la scène : on scelle l'accès, on photographie, on documente, et surtout on ne touche à rien. Le principe d'échange de Locard nous rappelle que lors de tout crime, quelque chose est emporté et quelque chose est laissé derrière. C'est le fondement du forensics. La collecte de preuves doit démarrer dès la découverte de l'incident, et comme la découverte peut être tardive, la rétention des journaux sur une durée raisonnable est critique."
        },
        {
          "type": "standard",
          "titre": "Types de preuves",
          "points": [
            "Primary evidence : documents originaux, les plus fiables",
            "Secondary evidence : copies, témoignages oraux",
            "Best evidence rule : présenter l'original plutôt qu'une copie",
            "Real evidence : objets physiques (disques, ordinateurs)",
            "Hearsay : déclaration hors tribunal, généralement irrecevable"
          ],
          "narration": "Passons aux types de preuves. La preuve primaire, c'est le document original, le plus fiable devant un tribunal. La preuve secondaire regroupe les copies et les témoignages oraux, moins puissants. La règle de la meilleure preuve, le best evidence rule, exige de présenter l'original plutôt qu'une copie. La preuve réelle désigne les objets physiques comme un disque dur, qui doivent être authentifiés par un témoin ou par une chain of custody documentée. Enfin, le hearsay, le ouï-dire, est en principe irrecevable : un témoin ne peut pas rapporter ce qu'un tiers lui a dit. Notez aussi la preuve circonstancielle, qui soutient une conclusion sans la prouver, et la preuve corroborative, qui renforce une autre preuve."
        },
        {
          "type": "standard",
          "titre": "Les cinq règles de la preuve",
          "points": [
            "Authentic : non fabriquée ni implantée",
            "Accurate : intégrité préservée, non modifiée",
            "Complete : toutes les parties, même défavorables",
            "Convincing : compréhensible et crédible",
            "Admissible : pertinente, matérielle, collectée légalement"
          ],
          "narration": "Pour survivre à l'examen juridique, une preuve doit respecter cinq règles. Elle doit être authentique, c'est-à-dire ni fabriquée ni implantée. Elle doit être exacte, avec une intégrité démontrable. Elle doit être complète, en incluant même les éléments qui n'arrangent pas votre dossier. Elle doit être convaincante, facile à comprendre pour un jury. Et enfin elle doit être admissible : pertinente pour l'affaire, matérielle, et collectée de façon légale."
        },
        {
          "type": "schema",
          "titre": "Chain of custody : tag, bag, carry",
          "points": [
            "Qui a collecté et manipulé quelle preuve, quand et où",
            "Toute rupture de la chaîne compromet l'admissibilité",
            "Documentation continue de la saisie jusqu'au tribunal"
          ],
          "schema": {
            "type": "flow",
            "items": [
              "Tag (étiqueter)",
              "Bag (emballer)",
              "Carry (transporter)",
              "Stocker sous scellés",
              "Documenter chaque transfert"
            ]
          },
          "narration": "La chain of custody, ou chaîne de possession, documente qui a collecté et manipulé chaque preuve, quand et où. Le moyen mnémotechnique est simple : tag, bag and carry. On étiquette, on emballe, on transporte, et chaque transfert de mains est consigné. Une seule rupture dans cette chaîne, et l'avocat adverse fera rejeter la preuve. C'est probablement le concept le plus testé de cette section."
        },
        {
          "type": "standard",
          "titre": "Forensics numérique et preuves vivantes",
          "points": [
            "Live evidence : RAM, cache, buffers — volatile et fragile",
            "Toute interaction avec un système allumé modifie son état",
            "Toujours travailler sur deux copies bit à bit, jamais l'original",
            "ISO/IEC 27037 : identification, collection, acquisition, préservation"
          ],
          "narration": "Le forensics numérique est l'examen scientifique des données pour identifier un coupable ou une cause racine. Les preuves vivantes, comme la mémoire vive, le cache et les buffers, sont extrêmement fragiles : le moindre clic de souris ou une mise hors tension peut les détruire. Règle d'or pour les supports de stockage : on crée d'abord deux copies identiques bit à bit, et on analyse une copie, jamais l'original. La norme ISO 27037 encadre le traitement des preuves numériques en quatre phases : identification, collection, acquisition et préservation."
        },
        {
          "type": "standard",
          "titre": "eDiscovery et artefacts",
          "points": [
            "eDiscovery : produire l'information stockée électroniquement pour la justice",
            "Modèle EDRM en 9 étapes, de la gouvernance à la présentation",
            "Obligation de préservation dès qu'un litige est anticipé",
            "Artefacts : traces dans les systèmes, navigateurs, mobiles, disques"
          ],
          "narration": "L'eDiscovery est le processus d'identification, de collecte et de production d'informations stockées électroniquement pour une procédure judiciaire. Le modèle de référence EDRM compte neuf étapes, de la gouvernance de l'information jusqu'à la présentation au tribunal, en passant par la préservation, la collecte, le traitement et l'analyse. Point important : une organisation qui anticipe un procès a l'obligation légale de préserver ses preuves numériques. Enfin, les artefacts forensiques sont les traces laissées par une intrusion : on les trouve dans les systèmes, les navigateurs web, les appareils mobiles et les supports de stockage."
        },
        {
          "type": "question",
          "titre": "Contrôle de connaissance",
          "narration": "Vérifions votre compréhension avec une question de style examen sur la manipulation des preuves.",
          "q": "Lors d'une investigation forensique sur un disque dur, que devez-vous faire EN PREMIER avant toute analyse ?",
          "choix": [
            "Analyser directement le disque original pour gagner du temps",
            "Supprimer les fichiers temporaires pour clarifier l'analyse",
            "Redémarrer le système pour figer son état",
            "Créer deux copies bit à bit et travailler sur une copie"
          ],
          "reponse": 3,
          "explication": "On crée toujours deux copies identiques bit à bit du support original, puis on analyse une copie. Travailler sur l'original modifierait la preuve et compromettrait son admissibilité. Redémarrer détruit les preuves vivantes, et supprimer quoi que ce soit revient à altérer la preuve."
        },
        {
          "type": "resume",
          "titre": "À retenir",
          "points": [
            "4 types d'investigations : administrative, criminelle, civile, réglementaire",
            "Chain of custody = tag, bag, carry, documenter chaque transfert",
            "5 règles de la preuve : authentic, accurate, complete, convincing, admissible",
            "Forensics : deux copies bit à bit, jamais l'original",
            "eDiscovery : devoir de préservation dès qu'un litige est anticipé"
          ],
          "narration": "Résumons. Il existe quatre types d'investigations, chacune avec son niveau de preuve : administrative, criminelle, civile et réglementaire. La chain of custody documente chaque manipulation de preuve, sur le principe tag, bag and carry. Une bonne preuve est authentique, exacte, complète, convaincante et admissible. En forensics, on travaille toujours sur une copie bit à bit, jamais sur l'original. Et dès qu'un litige se profile, l'organisation doit préserver ses données électroniques."
        }
      ]
    },
    {
      "id": "d7-l2",
      "titre": "Logging, monitoring et renseignement sur les menaces",
      "duree": 13,
      "slides": [
        {
          "type": "intro",
          "titre": "Voir pour défendre",
          "points": [
            "On ne peut pas défendre ce qu'on ne voit pas",
            "Logs, monitoring, SIEM, UEBA, threat intelligence",
            "Objectif : détecter tôt, répondre vite, rendre des comptes"
          ],
          "narration": "Deuxième leçon : la journalisation et la supervision. Le principe est simple : on ne peut pas défendre ce qu'on ne voit pas. Les journaux enregistrent les événements, le monitoring les analyse, le SIEM les corrèle, et le renseignement sur les menaces donne le contexte. L'objectif est triple : détecter tôt, répondre vite, et pouvoir tenir chacun responsable de ses actions."
        },
        {
          "type": "standard",
          "titre": "Logs, audit trails et monitoring",
          "points": [
            "Log : enregistrement des actions et événements d'un système",
            "Audit trail : contrôle détectif passif, permet de reconstruire un événement",
            "Monitoring : revue active des logs, imputabilité des sujets",
            "Sampling (statistique) vs clipping (dépassement de seuil)"
          ],
          "narration": "Un log est l'enregistrement des actions et événements survenus sur un système. L'audit trail, la piste d'audit, est un contrôle détectif passif : il permet de reconstruire un événement, d'en extraire des informations, et de prouver ou réfuter une culpabilité. Le monitoring, lui, est la revue active de ces journaux : il rend les sujets imputables de leurs actions. Pour analyser de gros volumes, deux méthodes d'échantillonnage existent : le sampling, statistique et représentatif, et le clipping, qui ne retient que les événements dépassant un seuil prédéfini."
        },
        {
          "type": "standard",
          "titre": "SIEM : le centre nerveux",
          "points": [
            "Ingestion des logs de sources multiples, analyse et corrélation",
            "Capacités clés : aggregation, normalization, correlation, stockage sécurisé, analyse, reporting",
            "Technologie + processus + personnes",
            "Tuning : réduire les false positives sans créer de false negatives"
          ],
          "narration": "Le SIEM, Security Information and Event Management, ingère les journaux de sources multiples, les normalise, les corrèle et alerte en temps quasi réel. Ses capacités clés sont l'agrégation, la normalisation, la corrélation, le stockage sécurisé, l'analyse et le reporting. Attention, un SIEM n'est pas qu'un outil : c'est de la technologie, des processus et des personnes formées. Et il faut le régler en permanence : le tuning consiste à réduire les faux positifs, qui épuisent les analystes, sans jamais créer de faux négatifs, c'est-à-dire des attaques réelles non détectées.",
          "astuce": "💡 Conseil examen : false positive = alerte sur du bénin ; false negative = silence sur du malveillant. Le false negative est le plus dangereux."
        },
        {
          "type": "standard",
          "titre": "SOAR, playbooks et runbooks",
          "points": [
            "SOAR : orchestration et réponse automatisée aux incidents",
            "Playbook : document qui définit COMMENT répondre à un incident",
            "Runbook : implémentation automatisée des étapes du playbook",
            "Bénéfice : moins de charge pour les admins, moins d'erreur humaine"
          ],
          "narration": "Le SOAR, Security Orchestration, Automation and Response, va plus loin que le SIEM : il répond automatiquement à certains incidents. Deux termes à ne pas confondre : le playbook est le document, la checklist qui définit comment répondre à un type d'incident ; le runbook est son implémentation technique, qui traduit les étapes en actions automatisées. Le grand bénéfice du SOAR, c'est la réduction de la charge des administrateurs et la diminution du risque d'erreur humaine."
        },
        {
          "type": "standard",
          "titre": "UEBA et détection comportementale",
          "points": [
            "UEBA : analyse du comportement des utilisateurs et entités",
            "Profil de comportement normal, alerte sur les déviations",
            "Détecte fraude, malware, menaces internes, comptes compromis",
            "Behavior-based = baseline + statistiques + heuristiques"
          ],
          "narration": "L'UEBA, User and Entity Behavior Analytics, construit un profil de comportement normal pour chaque utilisateur et chaque entité, puis alerte sur les déviations. C'est très efficace contre la fraude, les menaces internes et les comptes compromis, car un attaquant qui vole des identifiants valides ne se comporte pas comme leur propriétaire légitime. La détection comportementale repose sur une baseline d'activité normale, des statistiques et des heuristiques. On retrouve souvent l'UEBA intégré aux solutions SIEM."
        },
        {
          "type": "standard",
          "titre": "Threat intelligence : STIX, TAXII, threat feeds",
          "points": [
            "Threat intelligence : données sur les menaces, enrichies pour la décision",
            "Threat feeds : flux continus de données brutes sur les menaces",
            "STIX : langage standardisé (JSON) pour décrire les menaces",
            "TAXII : protocole de transport des données STIX sur HTTPS"
          ],
          "narration": "Le renseignement sur les menaces, ou threat intelligence, regroupe la recherche, l'analyse et les tendances émergentes, transformées en contexte utile à la décision. Les threat feeds fournissent un flux continu de données brutes. Deux standards facilitent le partage : STIX, un langage structuré basé sur JSON qui décrit les menaces de façon lisible et cohérente, et TAXII, le protocole de transport qui achemine les données STIX sur HTTPS. Mémorisez le duo : STIX décrit, TAXII transporte."
        },
        {
          "type": "standard",
          "titre": "Threat hunting : chasser plutôt qu'attendre",
          "points": [
            "Recherche proactive d'activité malveillante ayant échappé aux outils",
            "Hypothèse de départ : l'attaquant est peut-être déjà dans le réseau",
            "S'appuie sur la threat intelligence et les IoC",
            "Complète les défenses automatisées, ne les remplace pas"
          ],
          "narration": "Le threat hunting est une démarche proactive : au lieu d'attendre une alerte, les analystes partent du principe qu'un attaquant est peut-être déjà présent dans l'environnement et le cherchent activement. Ils s'appuient sur la threat intelligence et sur les indicateurs de compromission, les IoC, pour fouiller le réseau et les endpoints à la recherche de signes d'activité malveillante qui ont échappé aux outils automatisés. La chasse complète les défenses, elle ne les remplace pas."
        },
        {
          "type": "schema",
          "titre": "La Cyber Kill Chain de Lockheed Martin",
          "points": [
            "Sept étapes ordonnées d'une attaque",
            "Casser la chaîne à n'importe quelle étape stoppe l'attaque",
            "Modèle dérivé de la kill chain militaire"
          ],
          "schema": {
            "type": "flow",
            "items": [
              "Reconnaissance",
              "Weaponization",
              "Delivery",
              "Exploitation",
              "Installation",
              "Command & Control",
              "Actions on Objectives"
            ]
          },
          "narration": "La Cyber Kill Chain de Lockheed Martin décrit une attaque en sept étapes ordonnées. D'abord la reconnaissance, où l'attaquant collecte des informations. Puis la weaponization, où il prépare son exploit. Vient la delivery, l'envoi de l'arme par phishing ou site compromis. Ensuite l'exploitation de la vulnérabilité, puis l'installation d'un malware avec backdoor. L'attaquant établit alors son command and control, et termine par les actions sur objectifs : vol, destruction ou rançongiciel. L'intérêt défensif est clair : casser la chaîne à n'importe quelle étape stoppe l'attaque."
        },
        {
          "type": "standard",
          "titre": "Egress monitoring et gestion des logs",
          "points": [
            "Egress monitoring : surveiller le trafic SORTANT, détecter l'exfiltration",
            "Outils : DLP, détection de stéganographie, NetFlow",
            "Log management : collecter, traiter, analyser, protéger les logs",
            "Rollover logging : écrase les événements les plus anciens à taille max"
          ],
          "narration": "On surveille souvent ce qui entre, mais il faut aussi surveiller ce qui sort. L'egress monitoring détecte les transferts non autorisés de données vers l'extérieur, autrement dit l'exfiltration. Les outils classiques sont le DLP, Data Loss Prevention, et la détection de stéganographie. Le NetFlow, qui enregistre source, destination et volume de chaque communication, est précieux pour ces analyses. Enfin, la gestion des logs couvre leur collecte, leur traitement, leur analyse et leur protection ; le rollover logging écrase les événements les plus anciens quand le journal atteint sa taille maximale."
        },
        {
          "type": "question",
          "titre": "Contrôle de connaissance",
          "narration": "Une question pour vérifier que la distinction entre playbook et runbook est bien ancrée.",
          "q": "Quelle est la MEILLEURE description d'un runbook dans un contexte SOAR ?",
          "choix": [
            "Un document qui liste les parties prenantes à notifier",
            "Un registre des incidents passés pour les leçons apprises",
            "L'implémentation automatisée des étapes définies dans le playbook",
            "La politique de sécurité qui autorise la réponse aux incidents"
          ],
          "reponse": 2,
          "explication": "Le playbook est le document qui définit comment répondre à un incident ; le runbook en est l'implémentation, traduisant les étapes en actions automatisées. Les autres réponses décrivent des artefacts de communication, d'historique ou de gouvernance, pas le runbook."
        },
        {
          "type": "resume",
          "titre": "À retenir",
          "points": [
            "SIEM = agrégation, normalisation, corrélation ; tuning = moins de false positives",
            "SOAR automatise la réponse ; playbook (quoi) vs runbook (comment automatisé)",
            "UEBA détecte les déviations de comportement (insider, compte compromis)",
            "STIX décrit les menaces, TAXII les transporte ; threat hunting = proactif",
            "Cyber Kill Chain : 7 étapes, de la reconnaissance aux actions on objectives",
            "Egress monitoring + DLP contre l'exfiltration de données"
          ],
          "narration": "Résumons cette leçon. Le SIEM centralise, normalise et corrèle les journaux, et son tuning vise à réduire les faux positifs sans créer de faux négatifs. Le SOAR automatise la réponse grâce aux playbooks et aux runbooks. L'UEBA repère les comportements anormaux, signature des menaces internes et des comptes compromis. STIX décrit les menaces, TAXII les transporte, et le threat hunting cherche proactivement l'attaquant déjà présent. Enfin, gardez en tête les sept étapes de la Cyber Kill Chain et l'importance de surveiller le trafic sortant."
        }
      ]
    },
    {
      "id": "d7-l3",
      "titre": "Concepts opérationnels, configurations, changements et correctifs",
      "duree": 14,
      "slides": [
        {
          "type": "intro",
          "titre": "Les fondations du quotidien",
          "points": [
            "Principes qui limitent les dégâts : need-to-know, least privilege, SoD",
            "Gestion des configurations : des systèmes durcis et cohérents",
            "Gestion des changements et des correctifs : évoluer sans casser"
          ],
          "narration": "Cette leçon regroupe les fondations opérationnelles du quotidien. D'abord les principes qui limitent les dégâts quand quelque chose tourne mal : need-to-know, moindre privilège, séparation des tâches. Ensuite la gestion des configurations, qui garantit des systèmes durcis et cohérents. Enfin la gestion des changements et des correctifs, qui permet de faire évoluer l'environnement sans le casser. Appliquer ces concepts démontre le due care et la due diligence de l'organisation."
        },
        {
          "type": "standard",
          "titre": "Need-to-know et least privilege",
          "points": [
            "Need-to-know : limite QUELLES informations on peut connaître",
            "Least privilege : limite COMBIEN de droits et permissions on reçoit",
            "S'applique aussi aux applications et comptes de service",
            "Limite la portée des incidents quand ils surviennent"
          ],
          "narration": "Deux principes jumeaux mais distincts. Le need-to-know restreint l'accès à l'information : vous ne connaissez que ce dont vous avez besoin pour votre tâche. Le moindre privilège, least privilege, restreint l'étendue des droits : vous ne recevez que les permissions minimales nécessaires, ni plus. Retenez la nuance : need-to-know porte sur le quoi, least privilege sur le combien. Et le moindre privilège s'applique aussi aux applications et aux comptes de service, car un service compromis offre à l'attaquant tous les privilèges de son compte."
        },
        {
          "type": "standard",
          "titre": "Séparation des tâches et contrôles associés",
          "points": [
            "SoD : personne n'a le contrôle total d'une fonction critique",
            "Two-person control : deux approbations pour une tâche critique",
            "Split knowledge : le savoir est réparti (ex. M of N control)",
            "Objectif : forcer la collusion pour frauder, donc dissuader"
          ],
          "narration": "La séparation des tâches, Segregation of Duties, garantit qu'aucune personne seule ne contrôle entièrement une fonction critique. Pour frauder, il faudrait une collusion entre plusieurs personnes, ce qui est bien plus difficile et risqué. Le two-person control exige l'approbation de deux individus pour une tâche critique, comme deux moitiés d'un mot de passe. Le split knowledge combine ces idées : l'information nécessaire à une opération est répartie entre plusieurs personnes, le M of N control en étant l'exemple type pour les clés cryptographiques."
        },
        {
          "type": "standard",
          "titre": "Job rotation et comptes privilégiés",
          "points": [
            "Job rotation : revue par les pairs, anti-fraude, cross-training",
            "Agit comme contrôle dissuasif ET détectif",
            "PAM : restreindre et surveiller les comptes privilégiés",
            "Surveiller : créations de comptes, modifications firewall, accès aux logs"
          ],
          "narration": "La rotation des postes fait tourner les employés sur différentes fonctions. C'est à la fois un mécanisme de dissuasion et de détection : les fraudes qui dépendent d'une personne en place finissent par être découvertes, et l'organisation gagne en polyvalence. Côté comptes privilégiés, les solutions PAM, Privileged Account Management, restreignent l'accès aux comptes à hauts privilèges, limitent leur durée d'utilisation et surveillent leurs actions : création de comptes, modification de règles firewall, accès aux journaux d'audit. Les attaquants utilisent presque toujours des privilèges élevés, donc surveiller ces comptes détecte aussi les attaques.",
          "astuce": "💡 Conseil examen : job rotation et mandatory vacation servent surtout à DÉTECTER la fraude ; SoD sert à la PRÉVENIR."
        },
        {
          "type": "standard",
          "titre": "SLA et accords avec les tiers",
          "points": [
            "SLA : engagement de performance d'un fournisseur, avec pénalités",
            "MOU : intention de coopérer, sans force contraignante forte",
            "Certains référentiels (PCI DSS) exigent la conformité des prestataires"
          ],
          "narration": "Les opérations reposent souvent sur des tiers. Le Service Level Agreement, SLA, fixe les attentes de performance envers un fournisseur et prévoit généralement des pénalités en cas de manquement. Le Memorandum of Understanding, MOU, documente simplement l'intention de deux entités de travailler ensemble, sans réelle force contraignante. Notez enfin que des référentiels comme PCI DSS exigent que vos prestataires soient eux-mêmes conformes : externaliser le service n'externalise jamais la responsabilité."
        },
        {
          "type": "standard",
          "titre": "Gestion des configurations : baseline et hardening",
          "points": [
            "CM : identifier, contrôler et vérifier la configuration des systèmes",
            "Baseline : configuration de départ, souvent déployée par images",
            "Hardening : désactiver services inutiles, fermer les ports, supprimer apps, changer mots de passe par défaut",
            "Référentiels : benchmarks CIS"
          ],
          "narration": "La gestion des configurations identifie, contrôle et vérifie la configuration des systèmes tout au long de leur cycle de vie. La baseline est la configuration de départ, la liste des réglages qui durcissent un système ; beaucoup d'organisations la déploient par images, ce qui garantit des réglages corrects et réduit les coûts de maintenance. Le hardening consiste à désactiver les services inutilisés, fermer les ports logiques inutiles, supprimer les applications superflues et changer les mots de passe par défaut, en s'appuyant sur des référentiels comme les benchmarks du Center for Internet Security. Le provisioning applique ensuite cette baseline aux nouveaux systèmes, avec l'automatisation pour personnaliser par groupes de machines."
        },
        {
          "type": "schema",
          "titre": "Le processus de gestion des changements",
          "points": [
            "Toute modification passe par un processus formel documenté",
            "Prévoir systématiquement un plan de rollback",
            "Trois composantes : request control, change control, release control"
          ],
          "schema": {
            "type": "flow",
            "items": [
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
          "narration": "La gestion des changements fait passer chaque modification par un processus formel. On soumet une demande de changement, on évalue son impact, on l'approuve ou on la rejette, on développe et on teste idéalement dans un environnement de test, on planifie et on notifie les parties prenantes, on implémente avec un plan de retour arrière prêt, on valide, et on documente à chaque étape. Ce processus permet aux experts de repérer les conséquences involontaires avant l'implémentation, et la documentation produite permet de reproduire ou d'annuler le changement."
        },
        {
          "type": "standard",
          "titre": "Patch management : le cycle",
          "points": [
            "Évaluer → tester → approuver (via change management) → déployer → vérifier",
            "Tester sur un système isolé non-productif avant tout déploiement",
            "Vérifier par audits et scans que les patchs sont bien appliqués",
            "Patch Tuesday : publication mensuelle des grands éditeurs"
          ],
          "narration": "Un patch corrige un bug ou une vulnérabilité sans changer la version du logiciel. Un programme de patch management efficace suit un cycle précis : évaluer si le correctif s'applique à vos systèmes, le tester sur un environnement isolé et non productif, l'approuver via la gestion des changements, le déployer, souvent automatiquement, puis vérifier par des audits et des scans qu'il est réellement appliqué. Sans ce programme, l'organisation subit des pannes et des incidents causés par des failles connues et évitables. Retenez aussi le Patch Tuesday, la publication mensuelle des correctifs des grands éditeurs."
        },
        {
          "type": "standard",
          "titre": "Vulnerability management",
          "points": [
            "Identifier, évaluer, prioriser et remédier aux faiblesses",
            "Scans de vulnérabilités routiniers + assessments périodiques",
            "Les scanners vérifient aussi l'efficacité du patch management",
            "On ne peut pas éliminer toutes les vulnérabilités : on priorise le risque"
          ],
          "narration": "La gestion des vulnérabilités identifie, évalue, priorise et corrige les faiblesses des systèmes d'information. Elle combine des scans routiniers, qui détectent les failles connues comme les patchs manquants ou les mots de passe faibles, et des évaluations périodiques plus larges incluant revues et audits. Les rapports de scan sont d'ailleurs un excellent contrôle de l'efficacité du programme de patch management. Soyez lucide : on ne peut éliminer ni tous les risques ni toutes les vulnérabilités ; on traite en priorité celles qui représentent le plus grand risque. Le système non patché reste la vulnérabilité la plus courante en entreprise."
        },
        {
          "type": "question",
          "titre": "Contrôle de connaissance",
          "narration": "Voyons si la logique du patch management est claire avec une mise en situation.",
          "q": "Un correctif de sécurité critique vient d'être publié pour vos serveurs de production. Que devriez-vous faire EN PREMIER ?",
          "choix": [
            "Le tester sur un système isolé non productif",
            "Le déployer immédiatement sur tous les serveurs de production",
            "Attendre le prochain cycle mensuel de maintenance",
            "Désactiver les serveurs concernés en attendant"
          ],
          "reponse": 0,
          "explication": "Même pour un correctif critique, on teste d'abord sur un environnement isolé pour détecter les effets de bord, puis on approuve via la gestion des changements et on déploie. Déployer sans tester peut provoquer une panne majeure ; attendre un mois laisse la vulnérabilité ouverte ; désactiver la production est disproportionné."
        },
        {
          "type": "resume",
          "titre": "À retenir",
          "points": [
            "Need-to-know = quoi ; least privilege = combien",
            "SoD prévient la fraude, job rotation et mandatory vacation la détectent",
            "PAM : restreindre, limiter dans le temps et surveiller les privilèges",
            "Baseline + hardening + images = systèmes cohérents et sûrs",
            "Changement : request → impact → approbation → test → implémentation (rollback) → validation → documentation",
            "Patch : évaluer, tester, approuver, déployer, vérifier"
          ],
          "narration": "Récapitulons. Need-to-know limite ce que l'on sait, least privilege limite ce que l'on peut faire. La séparation des tâches prévient la fraude en forçant la collusion, tandis que la rotation des postes la détecte. Les solutions PAM encadrent les comptes privilégiés. La gestion des configurations s'appuie sur des baselines durcies et des images. Tout changement suit un processus formel avec plan de rollback, et tout correctif est testé avant d'être approuvé, déployé et vérifié."
        }
      ]
    },
    {
      "id": "d7-l4",
      "titre": "Gestion des médias et mesures de détection et prévention",
      "duree": 13,
      "slides": [
        {
          "type": "intro",
          "titre": "Protéger les supports, bloquer les menaces",
          "points": [
            "Gestion des médias : protéger tout ce qui porte des données",
            "Panorama des outils : firewalls, IDS/IPS, honeypots, sandboxing, anti-malware",
            "Contrôles préventifs vs détectifs"
          ],
          "narration": "Dans cette leçon, nous couvrons deux volets complémentaires. D'abord la gestion des médias : protéger tout support capable de contenir des données, du disque dur à la simple feuille de papier. Ensuite, le grand panorama des mesures de détection et de prévention : pare-feu, IDS et IPS, honeypots, sandboxing et anti-malware. Gardez en tête la distinction du Domaine un : un contrôle préventif empêche l'activité indésirable, un contrôle détectif la découvre après coup."
        },
        {
          "type": "standard",
          "titre": "Gestion des médias",
          "points": [
            "Média : tout ce qui peut contenir des données (papier, bandes, SSD, optique, mobiles)",
            "Critères : confidentialité, vitesse d'accès, portabilité, durabilité, formats",
            "Stockage sécurisé : contrôle d'accès strict, température et humidité contrôlées",
            "Marquage, manipulation, stockage, transport, sanitization, fin de vie"
          ],
          "narration": "Un média, c'est tout ce qui peut contenir des données : papier, microformes, supports magnétiques comme les disques et bandes, mémoire flash, supports optiques, sans oublier les smartphones et cartes mémoire. L'évaluation d'un support prend en compte la confidentialité, la vitesse d'accès, la portabilité, la durabilité et les formats. Le MTBF, temps moyen entre pannes, est un critère important pour les données sensibles. Un média sensible se stocke dans un lieu sécurisé, avec contrôle d'accès strict et régulation de la température et de l'humidité. Correctement marqué, manipulé et stocké, un média est protégé contre la divulgation, la modification et la destruction non autorisées, jusqu'à sa destruction en fin de vie."
        },
        {
          "type": "standard",
          "titre": "Les familles de firewalls",
          "points": [
            "Static packet filtering : couche 3, rapide, sans contexte",
            "Circuit-level : couche 5, valide la session TCP",
            "Stateful inspection : couches 3-4, suit l'état des connexions",
            "Application-level / WAF : couche 7, deep packet inspection",
            "NGFW : couches 3 à 7, stateful + DPI + IPS + sandboxing",
            "ISFW : segmentation interne, bloque le mouvement latéral"
          ],
          "narration": "Passons en revue les familles de pare-feu. Le filtrage statique de paquets travaille en couche trois : rapide mais aveugle au contexte. Le circuit-level gateway opère en couche cinq et valide l'établissement des sessions, sans inspecter le contenu. Le stateful inspection suit l'état des connexions en couches trois et quatre : chaque paquet doit appartenir à une connexion légitime. Le firewall applicatif, en couche sept, fait de l'inspection profonde de paquets ; le WAF en est l'exemple type, capable de bloquer les injections SQL et le cross-site scripting. Le next-generation firewall combine tout : stateful, DPI, IPS, contrôle applicatif, parfois sandboxing. Enfin, l'ISFW segmente le réseau interne pour bloquer le mouvement latéral des attaquants."
        },
        {
          "type": "standard",
          "titre": "IDS et IPS",
          "points": [
            "IDS : détecte et alerte ; IPS : détecte ET bloque (placé en coupure)",
            "Knowledge-based (signatures) : fiable sur le connu, aveugle au nouveau",
            "Behavior-based (anomalies) : détecte le nouveau, plus de false positives",
            "Déployer aux points stratégiques : périmètre, entre segments"
          ],
          "narration": "L'IDS, Intrusion Detection System, surveille en temps réel le réseau ou les systèmes et alerte en cas d'activité anormale : c'est une alarme, il détecte mais n'arrête rien. L'IPS, Intrusion Prevention System, ajoute la capacité de blocage : placé en coupure sur le trafic, il empêche l'attaque d'atteindre sa cible. Deux méthodes de détection : la détection par signatures, knowledge-based, très fiable sur les attaques connues mais aveugle aux nouvelles ; et la détection comportementale, behavior-based, qui compare l'activité à une baseline et détecte l'inconnu au prix de plus de faux positifs. On déploie ces sondes aux endroits stratégiques : périmètre et frontières entre segments.",
          "astuce": "💡 Conseil examen : IDS = détectif ; IPS = préventif. Une nouvelle attaque inconnue ? Seule la détection behavior-based a une chance de la voir."
        },
        {
          "type": "standard",
          "titre": "Honeypots, honeynets et allow/deny lists",
          "points": [
            "Honeypot : leurre avec pseudo-failles et fausses données",
            "Honeynet : réseau de honeypots ; on observe l'attaquant sans risque",
            "Allow list : seules les apps autorisées s'exécutent (deny by default)",
            "Deny list : bloque les apps listées ; un système utilise UNE liste, pas les deux"
          ],
          "narration": "Le honeypot est un ordinateur leurre, doté de pseudo-failles et de fausses données pour attirer les intrus. Le honeynet en réseau plusieurs pour simuler tout un environnement. L'intérêt est double : occuper l'attaquant loin de la production, et observer ses techniques sans compromettre l'environnement réel. Côté contrôle applicatif, l'allow list n'autorise que les applications approuvées, tout le reste étant bloqué par défaut : c'est le deny by default, dont l'App Store d'Apple est un exemple extrême. La deny list fait l'inverse en bloquant les applications listées. Attention, un système utilise l'une ou l'autre, jamais les deux simultanément."
        },
        {
          "type": "standard",
          "titre": "Sandboxing et confinement",
          "points": [
            "Sandbox : environnement isolé pour exécuter du code non fiable",
            "Le code s'exécute normalement mais sans atteindre l'hôte",
            "Usages : analyse de malware, tests, honeynets, NGFW",
            "Confinement : limiter un processus à certaines ressources et zones mémoire"
          ],
          "narration": "Le sandboxing crée un environnement isolé et sécurisé pour exécuter et analyser du code non testé ou non fiable. Le programme se comporte comme dans un environnement normal, mais il ne peut ni affecter le système hôte ni accéder aux ressources critiques. On l'utilise pour l'analyse de malware, les tests de développement et d'intégration, et au sein des next-generation firewalls. Le concept sous-jacent est le confinement : restreindre un processus à certaines ressources et à certaines zones mémoire, dont il ne peut pas sortir."
        },
        {
          "type": "standard",
          "titre": "Le bestiaire des malwares",
          "points": [
            "Virus : nécessite une action de l'utilisateur pour se déclencher",
            "Worm : se propage SEUL en exploitant des vulnérabilités",
            "Trojan : semble légitime mais installe une backdoor",
            "Ransomware : chiffre les données, exige une rançon",
            "Rootkit : s'enfouit dans l'OS pour masquer sa présence",
            "Logic bomb : s'active sur une condition ou une date"
          ],
          "narration": "Un tour rapide du bestiaire. Le virus se copie et se propage, mais sa caractéristique définissante est qu'il doit être déclenché par l'utilisateur. Le ver, lui, se propage tout seul en exploitant des vulnérabilités réseau, sans intervention humaine. Le cheval de Troie paraît utile ou inoffensif mais cache une charge malveillante, souvent une backdoor. Le ransomware chiffre les systèmes et exige une rançon pour la clé de déchiffrement. Le rootkit s'enfouit profondément dans le système d'exploitation pour masquer sa présence. La logic bomb attend une condition ou une date pour se déclencher. Citons aussi le malware polymorphe, qui mute pour échapper à la détection, le fileless malware qui ne s'écrit jamais sur disque, et le zero-day, exploitant une faille inconnue de l'éditeur."
        },
        {
          "type": "standard",
          "titre": "Anti-malware, botnets et IA",
          "points": [
            "Défense clé : anti-malware à jour avec signatures ET heuristiques",
            "Approche multicouche + moindre privilège (pas d'admin pour les utilisateurs)",
            "Botnet = réseau de bots (zombies) contrôlé par un bot herder via C2",
            "ML : apprend depuis une baseline ; AI : construit sa propre baseline"
          ],
          "narration": "La protection la plus importante contre le code malveillant reste un anti-malware à jour, combinant signatures et heuristiques, déployé en approche multicouche : sur chaque poste et en filtrage du contenu internet. Le moindre privilège aide aussi : sans droits d'administration, un utilisateur ne peut pas installer d'application malveillante. Retenez le vocabulaire des botnets : un bot ou zombie est une machine compromise, contrôlée via un canal de command and control par un bot herder, qui peut louer son botnet à d'autres criminels. Enfin, machine learning et intelligence artificielle renforcent la détection comportementale : le ML apprend à partir d'une baseline fournie par l'administrateur, tandis qu'un système d'IA construit progressivement sa propre baseline et s'améliore grâce au feedback."
        },
        {
          "type": "question",
          "titre": "Contrôle de connaissance",
          "narration": "Une question classique sur la distinction entre virus et ver.",
          "q": "Quelle caractéristique distingue le MIEUX un worm d'un virus ?",
          "choix": [
            "Le worm change de forme pour éviter la détection",
            "Le worm se propage seul sans action de l'utilisateur",
            "Le worm se cache dans le secteur de démarrage",
            "Le worm chiffre les données et exige une rançon"
          ],
          "reponse": 1,
          "explication": "Le ver se propage de façon autonome en exploitant des vulnérabilités, sans intervention de l'utilisateur, alors que le virus doit être déclenché par une action humaine. Le chiffrement avec rançon décrit le ransomware, le secteur de démarrage les boot sector infectors, et le changement de forme le malware polymorphe."
        },
        {
          "type": "resume",
          "titre": "À retenir",
          "points": [
            "Médias : marquage, stockage contrôlé, transport, sanitization, fin de vie",
            "Firewalls : du packet filtering (L3) au NGFW (L3-L7) ; ISFW contre le mouvement latéral",
            "IDS détecte, IPS bloque ; signatures = connu, comportemental = inconnu",
            "Honeypot occupe et permet d'observer ; allow list = deny by default",
            "Sandbox : exécuter le code suspect sans risque pour l'hôte",
            "Virus (déclenché) vs worm (autonome) ; anti-malware multicouche"
          ],
          "narration": "Résumé de la leçon. Les médias sont protégés durant tout leur cycle de vie, du marquage à la destruction. Les pare-feu vont du simple filtrage de paquets au NGFW multicouche, avec l'ISFW pour bloquer le mouvement latéral interne. L'IDS détecte, l'IPS bloque ; les signatures voient le connu, le comportemental voit l'inconnu. Les honeypots détournent et renseignent, les allow lists appliquent le deny by default, et la sandbox isole le code suspect. Enfin, distinguez bien le virus, qui a besoin de l'utilisateur, du ver, qui se propage seul."
        }
      ]
    },
    {
      "id": "d7-l5",
      "titre": "Gestion des incidents : de la détection aux leçons apprises",
      "duree": 12,
      "slides": [
        {
          "type": "intro",
          "titre": "Événement ou incident ?",
          "points": [
            "Event : occurrence observable, le plus souvent bénigne",
            "Incident : événement qui menace la CIA des systèmes ou des données",
            "Seuls les incidents déclenchent le processus de réponse",
            "Trois buts : réduire l'impact, maintenir l'activité, se défendre pour l'avenir"
          ],
          "narration": "Abordons la gestion des incidents. Première distinction fondamentale : un événement est une occurrence observable, et il s'en produit des millions par jour, presque tous insignifiants. Un incident, lui, est un événement qui menace réellement ou potentiellement la confidentialité, l'intégrité ou la disponibilité d'un système ou de ses données. Seuls les incidents déclenchent le processus de réponse. Les trois buts de la réponse aux incidents : réduire l'impact sur l'organisation, maintenir ou restaurer la continuité d'activité, et se défendre contre les attaques futures."
        },
        {
          "type": "schema",
          "titre": "Le cycle de réponse : DRMRRRL",
          "points": [
            "Mnémonique : D-R-M-R-R-R-L, prononcez « drumroll »",
            "La préparation précède tout : plan, équipe, procédures",
            "Ces sept étapes sont explicitement à l'examen"
          ],
          "schema": {
            "type": "cycle",
            "items": [
              "Detection",
              "Response",
              "Mitigation",
              "Reporting",
              "Recovery",
              "Remediation",
              "Lessons Learned"
            ]
          },
          "narration": "Voici le cycle officiel de la réponse aux incidents, celui qui tombe à l'examen : Detection, Response, Mitigation, Reporting, Recovery, Remediation et Lessons Learned. Le moyen mnémotechnique en anglais est D-R-M-R-R-R-L, que l'on prononce drumroll, comme un roulement de tambour. En amont de tout cela se trouve la préparation : développer le plan de réponse, constituer l'équipe et définir les procédures. Une bonne préparation anticipe toutes les étapes suivantes."
        },
        {
          "type": "standard",
          "titre": "Détection",
          "points": [
            "Identifier l'incident via IDS/IPS, anti-malware, scans de logs, utilisateurs",
            "Une alerte ou une plainte n'est pas forcément un incident : il faut vérifier",
            "But : distinguer l'événement adverse et enclencher la réponse"
          ],
          "narration": "La détection identifie les incidents potentiels grâce aux systèmes de détection d'intrusion, aux anti-malwares, aux outils qui scannent automatiquement les journaux, et parfois tout simplement grâce aux utilisateurs qui signalent un comportement anormal au support. Attention : recevoir une alerte ne signifie pas qu'un incident a eu lieu. Il faut d'abord vérifier, faire le tri, puis déclencher la réponse pour les vrais incidents."
        },
        {
          "type": "standard",
          "titre": "Response : activer l'équipe",
          "points": [
            "Activer l'équipe IR (aussi appelée CIRT ou CSIRT)",
            "Première tâche : impact assessment (ampleur, durée, qui impliquer)",
            "Protéger toutes les données comme preuves",
            "Ne PAS éteindre les ordinateurs concernés"
          ],
          "narration": "Une fois l'incident vérifié, on active l'équipe de réponse aux incidents, aussi appelée CIRT ou CSIRT. Ses premières actions incluent une évaluation d'impact : quelle est l'ampleur de l'incident, combien de temps va-t-il durer, qui doit être impliqué. L'équipe enquête, évalue les dégâts, collecte les preuves et participera ensuite à toutes les étapes suivantes. Deux réflexes essentiels : protéger toutes les données comme des preuves potentielles, et ne pas éteindre les ordinateurs, car cela détruirait les preuves volatiles en mémoire."
        },
        {
          "type": "standard",
          "titre": "Mitigation : contenir, pas réparer",
          "points": [
            "Contenir l'incident, empêcher la propagation des dégâts",
            "Exemple : isoler une machine du réseau",
            "Le but n'est PAS de corriger le problème à ce stade",
            "Parfois contenir discrètement, sans alerter l'attaquant"
          ],
          "narration": "La mitigation, c'est le confinement. L'équipe cherche à limiter les dégâts et à empêcher la propagation, par exemple en déconnectant une machine compromise du réseau. Comprenez bien : à ce stade, le travail n'est pas de réparer le problème, mais simplement d'empêcher qu'il ne s'aggrave. Et parfois, les intervenants confinent discrètement, sans faire savoir à l'attaquant qu'il a été détecté, pour mieux l'observer ou préserver les preuves."
        },
        {
          "type": "standard",
          "titre": "Reporting : informer qui de droit",
          "points": [
            "Le reporting traverse en réalité tout le processus",
            "Obligations légales si des PII sont exposées",
            "Certains standards l'exigent (ex. PCI DSS vers les autorités)",
            "Communication formelle aux parties prenantes après confinement"
          ],
          "narration": "Le reporting intervient tout au long du processus, mais devient formel une fois l'incident contenu, car de nombreuses parties prenantes doivent comprendre ce qui s'est passé. Selon la juridiction, la loi peut imposer de notifier les autorités et les personnes concernées si des données personnelles ont été exposées. Certains standards sectoriels, comme PCI DSS pour les données de cartes bancaires, exigent également le signalement de certains incidents aux forces de l'ordre."
        },
        {
          "type": "standard",
          "titre": "Recovery : retour à la normale",
          "points": [
            "Restaurer les systèmes dans un état pleinement fonctionnel",
            "Méthode la plus sûre : reconstruction complète + restauration des données",
            "Vérifier : ACL et règles firewall, services inutiles, patchs, comptes, compromissions inversées",
            "La doc de configuration et changement guide la reconstruction"
          ],
          "narration": "La récupération ramène les systèmes à un état pleinement fonctionnel. La méthode la plus sûre après une compromission est la reconstruction complète du système depuis zéro, suivie de la restauration des données depuis la sauvegarde la plus récente. La documentation issue de la gestion des configurations et des changements garantit une reconstruction correcte. Vérifiez ensuite les listes de contrôle d'accès et les règles de pare-feu, la désactivation des services inutiles, l'application des correctifs, la configuration des comptes utilisateurs, et que toutes les compromissions connues ont bien été inversées."
        },
        {
          "type": "standard",
          "titre": "Remediation et Lessons Learned",
          "points": [
            "Remediation : root cause analysis, empêcher la récidive",
            "Lessons learned : revue globale de l'incident ET de la réponse",
            "Le rapport final alimente la phase de détection (boucle)",
            "La direction décide des recommandations et assume le risque résiduel",
            "JAMAIS de contre-attaque (hackback interdit)"
          ],
          "narration": "La remédiation cherche la cause racine : qu'est-ce qui a permis l'incident, et quels changements empêcheront la récidive ? La phase des leçons apprises prend ensuite de la hauteur : l'équipe et les parties prenantes examinent l'incident et la qualité de la réponse elle-même, puis produisent un rapport avec des recommandations. Ces enseignements alimentent la phase de détection, bouclant le cycle. Point de gouvernance : c'est la direction qui décide quelles recommandations implémenter, et elle assume le risque résiduel de celles qu'elle rejette. Et retenez une règle absolue pour l'examen : la gestion des incidents n'inclut jamais de contre-attaque contre l'attaquant.",
          "astuce": "💡 Conseil examen : toute réponse qui propose un « hackback » ou une contre-attaque est TOUJOURS fausse."
        },
        {
          "type": "question",
          "titre": "Contrôle de connaissance",
          "narration": "Mise en situation classique sur les premières actions face à un incident.",
          "q": "Un serveur est activement compromis par un malware qui se propage sur le réseau. Après vérification de l'incident, quelle est la PREMIÈRE action appropriée ?",
          "choix": [
            "Isoler le serveur du réseau tout en préservant les preuves",
            "Lancer une analyse de cause racine",
            "Reconstruire immédiatement le serveur depuis une image propre",
            "Éteindre le serveur pour stopper le malware"
          ],
          "reponse": 0,
          "explication": "La mitigation vise à contenir l'incident : isoler la machine du réseau stoppe la propagation tout en préservant les preuves volatiles en mémoire. Éteindre le serveur détruirait ces preuves. La reconstruction relève de la phase recovery, et la root cause analysis de la remediation — toutes deux viennent plus tard."
        },
        {
          "type": "resume",
          "titre": "À retenir",
          "points": [
            "Event ≠ incident : seul l'incident menace la CIA et déclenche la réponse",
            "Cycle DRMRRRL : Detection, Response, Mitigation, Reporting, Recovery, Remediation, Lessons Learned",
            "Contenir sans réparer ; ne pas éteindre les machines ; préserver les preuves",
            "Recovery la plus sûre : reconstruction complète + restauration",
            "Lessons learned boucle vers la détection ; jamais de contre-attaque"
          ],
          "narration": "Résumons la gestion des incidents. Distinguez l'événement, bénin, de l'incident, qui menace la CIA et déclenche la réponse. Le cycle à connaître par cœur : détection, réponse, mitigation, reporting, récupération, remédiation et leçons apprises — drumroll. Pendant la mitigation on contient sans réparer, on n'éteint pas les machines et on préserve les preuves. La récupération la plus sûre passe par une reconstruction complète. Et les leçons apprises réalimentent la détection, sans jamais, jamais inclure de contre-attaque."
        }
      ]
    },
    {
      "id": "d7-l6",
      "titre": "Stratégies de récupération : sauvegardes, sites et résilience",
      "duree": 15,
      "slides": [
        {
          "type": "intro",
          "titre": "Se préparer au pire",
          "points": [
            "Recovery strategy : plan de restauration après une disruption",
            "DR : restaurer l'infrastructure critique après une catastrophe",
            "BC : continuer les fonctions critiques pendant et après l'événement",
            "Les métriques BIA guident tout : RPO, RTO, WRT, MTD"
          ],
          "narration": "Voici probablement la leçon la plus dense du domaine : les stratégies de récupération. Le disaster recovery vise à restaurer l'infrastructure technologique critique après une catastrophe, tandis que la business continuity vise à maintenir les fonctions critiques de l'entreprise pendant et après l'événement. Tout part du Business Impact Analysis et de ses métriques : RPO, RTO, WRT et MTD, qui dictent les choix de sauvegarde et de sites de secours. Accrochez-vous, l'examen adore cette partie."
        },
        {
          "type": "standard",
          "titre": "RPO, RTO, WRT, MTD",
          "points": [
            "RPO : perte de données maximale tolérable, mesurée en temps",
            "RTO : temps maximal pour restaurer le service",
            "WRT : temps pour vérifier l'intégrité systèmes et données",
            "MTD : indisponibilité maximale avant conséquences irrécupérables",
            "Règle : RTO + WRT ≤ MTD"
          ],
          "narration": "Quatre métriques fondamentales issues du BIA. Le Recovery Point Objective est la perte de données maximale tolérable, exprimée en temps : un RPO d'une heure signifie qu'on accepte de perdre au plus une heure de données. Le Recovery Time Objective est le temps maximal acceptable pour restaurer le service. Le Work Recovery Time est le temps nécessaire pour vérifier l'intégrité des systèmes et des données avant la reprise normale. Et le Maximum Tolerable Downtime est la durée d'indisponibilité au-delà de laquelle les conséquences deviennent irrécupérables pour l'entreprise. La relation à retenir : RTO plus WRT doit rester inférieur ou égal au MTD.",
          "astuce": "💡 Conseil examen : RPO = données perdues ; RTO = temps de restauration. Ne les inversez jamais."
        },
        {
          "type": "standard",
          "titre": "Full, incremental, differential",
          "points": [
            "Full : copie complète, remet l'archive bit à 0",
            "Incremental : changements depuis le DERNIER backup (full ou incr.), remet le bit à 0",
            "Differential : changements depuis le dernier FULL, ne touche pas au bit",
            "Restauration : full + 1 differential, ou full + TOUS les incrementals dans l'ordre"
          ],
          "narration": "Trois types de sauvegardes. La sauvegarde complète copie tout et remet l'archive bit de chaque fichier à zéro. La sauvegarde incrémentale copie uniquement ce qui a changé depuis la dernière sauvegarde, quelle qu'elle soit, puis remet le bit à zéro. La sauvegarde différentielle copie tout ce qui a changé depuis la dernière sauvegarde complète, et surtout, elle ne modifie pas l'archive bit. Conséquence pratique pour la restauration : avec des différentielles, il suffit du dernier full et de la dernière différentielle ; avec des incrémentales, il faut le dernier full plus toutes les incrémentales dans l'ordre chronologique. L'incrémentale est rapide à créer mais lente à restaurer ; la différentielle, c'est l'inverse."
        },
        {
          "type": "schema",
          "titre": "La règle 3-2-1 et les rotations",
          "points": [
            "Rotations de médias : Grandfather/Father/Son, Tower of Hanoi, Six Cartridge Weekly",
            "Toujours au moins une copie hors site",
            "Cloud : scalable, hautement disponible, paiement à l'usage"
          ],
          "schema": {
            "type": "grid",
            "items": [
              "3 copies des fichiers critiques",
              "2 supports différents",
              "1 copie hors site",
              "Rotation : GFS / Hanoi / Six Cartridge"
            ]
          },
          "narration": "La règle trois-deux-un structure toute stratégie de sauvegarde : trois copies des fichiers critiques, sur deux supports différents, dont une copie hors site, assez éloignée pour qu'un même sinistre ne détruise pas la source et la sauvegarde. Le cloud est devenu un choix populaire pour cette copie externe : scalable, hautement disponible et facturé à l'usage. Pour la rotation des médias, connaissez les trois schémas classiques : Grandfather-Father-Son avec ses cycles quotidien, hebdomadaire et mensuel, la Tower of Hanoi inspirée du casse-tête, et le Six Cartridge Weekly pour les petites structures."
        },
        {
          "type": "standard",
          "titre": "Copies hors site de bases de données",
          "points": [
            "Electronic vaulting : transferts en masse des backups vers le site distant",
            "Remote journaling : transfert plus fréquent des journaux de transactions",
            "Remote mirroring : serveur live distant, mis à jour en temps réel — le plus cher"
          ],
          "narration": "Trois techniques pour copier les bases de données hors site, par ordre croissant de fraîcheur et de coût. L'electronic vaulting transfère les sauvegardes complètes en masse vers le site distant, périodiquement. Le remote journaling transfère les journaux de transactions de façon plus fréquente et expéditive, mais ces journaux ne sont pas appliqués à une base vivante. Le remote mirroring, la solution la plus avancée et la plus coûteuse, maintient un serveur de base de données vivant sur le site de secours, qui reçoit chaque modification en même temps que la production."
        },
        {
          "type": "standard",
          "titre": "Sites de secours : cold, warm, hot",
          "points": [
            "Cold site : bâtiment + électricité/climatisation, AUCUN équipement — le moins cher, semaines d'activation",
            "Warm site : équipements et liens préconfigurés, PAS de données — environ 12 h d'activation",
            "Hot site : tout est prêt, données répliquées — bascule quasi immédiate, très coûteux",
            "Hot site = attaque de surface accrue (copies des données de production)"
          ],
          "narration": "Les trois sites de secours classiques. Le cold site n'offre qu'un bâtiment avec électricité et environnement contrôlé : aucun matériel, aucun lien de communication actif. C'est l'option la moins chère, mais l'activation se mesure en semaines et le site est difficile à tester, d'où un faux sentiment de sécurité. Le warm site ajoute les équipements de base et les liens préconfigurés, mais pas les données de l'organisation ; comptez au moins douze heures pour l'activer. Le hot site est une installation pleinement opérationnelle avec matériel, logiciels et données répliquées en continu : la bascule est quasi immédiate, mais le coût peut doubler le budget informatique, et le site accroît la surface d'attaque puisqu'il détient une copie de toutes vos données."
        },
        {
          "type": "standard",
          "titre": "Sites mobiles, cloud, redondants et accords",
          "points": [
            "Mobile site : unité déplaçable, souvent cold ou warm, idéale pour les workgroups",
            "Cloud/IaaS : option DR de plus en plus privilégiée",
            "Hot site = service par abonnement ; redundant site = possédé par l'org",
            "MAA : entraide entre organisations — rarement utilisée (inapplicable, confidentialité)",
            "Resource capacity agreement : ressources garanties par contrat en cas de sinistre"
          ],
          "narration": "Quelques options complémentaires. Les sites mobiles sont des unités déplaçables, généralement configurées en cold ou warm, parfaites pour une stratégie de récupération par groupes de travail. Le cloud, souvent en IaaS, est devenu l'option de reprise préférée de nombreuses organisations. Distinction d'examen importante : le hot site est un service par abonnement, tandis que le site redondant est possédé et exploité par l'organisation elle-même, souvent en configuration active-active. Les Mutual Assistance Agreements, accords d'entraide entre organisations, sont peu utilisés car difficiles à faire respecter, vulnérables au même sinistre régional, et problématiques pour la confidentialité. Enfin, les resource capacity agreements garantissent contractuellement l'accès aux ressources nécessaires après un sinistre."
        },
        {
          "type": "standard",
          "titre": "Résilience : HA, fault tolerance, QoS",
          "points": [
            "System resilience : maintenir un niveau de service acceptable pendant l'adversité",
            "HA : composants redondants, reprise rapide ; clustering vs redundancy (failover)",
            "Fault tolerance : subir une panne et continuer à fonctionner",
            "QoS : bande passante, latence, perte de paquets, interférences",
            "MTBF, MTTF, MTTR pour évaluer les équipements"
          ],
          "narration": "La résilience système est la capacité à maintenir un niveau de service acceptable pendant un événement adverse. La haute disponibilité s'appuie sur la redondance : le clustering fait travailler plusieurs systèmes ensemble derrière un load balancer, tandis que la redondance classique associe un système primaire actif et un secondaire en attente qui prend le relais en cas de panne, le failover. La tolérance aux pannes va plus loin : subir une défaillance et continuer à fonctionner. La qualité de service protège la disponibilité du réseau en gérant bande passante, latence, perte de paquets et interférences. Et pour évaluer les équipements, trois métriques : MTBF, le temps moyen entre pannes, MTTF, la durée de vie fonctionnelle attendue, et MTTR, le temps moyen de réparation."
        },
        {
          "type": "standard",
          "titre": "RAID : les niveaux à connaître",
          "points": [
            "RAID 0 — striping : performance, aucune redondance",
            "RAID 1 — mirroring : disponibilité par duplication",
            "RAID 5 — parité : min. 3 disques, tolère 1 panne",
            "RAID 6 — double parité : min. 4 disques, tolère 2 pannes",
            "RAID 10 — mirroring + striping : min. 4 disques, rapide et fiable, coûteux"
          ],
          "narration": "Le RAID combine plusieurs disques pour la vitesse ou la disponibilité. RAID zéro, le striping, répartit les données pour la performance mais n'offre aucune redondance : un disque tombe, tout est perdu. RAID un, le mirroring, duplique intégralement les données. RAID cinq utilise un bit de parité calculé par opération XOR, exige au moins trois disques et tolère la panne d'un seul. RAID six ajoute un second bloc de parité, exige quatre disques et tolère deux pannes simultanées. RAID dix combine miroir et striping sur au moins quatre disques : rapide et fiable, mais c'est l'option la plus coûteuse."
        },
        {
          "type": "question",
          "titre": "Contrôle de connaissance",
          "narration": "Une question de calcul de restauration, grand classique de l'examen.",
          "q": "Votre organisation effectue un full backup le lundi soir et des sauvegardes différentielles chaque autre soir. Une panne survient samedi matin. Quelles sauvegardes devez-vous restaurer ?",
          "choix": [
            "Le full du lundi puis toutes les différentielles de mardi à vendredi",
            "Le full du lundi uniquement",
            "Uniquement la différentielle de vendredi",
            "Le full du lundi puis la différentielle de vendredi"
          ],
          "reponse": 3,
          "explication": "Une différentielle contient TOUS les changements depuis le dernier full. Il suffit donc de restaurer le full du lundi puis la dernière différentielle, celle de vendredi. Restaurer toutes les différentielles serait la logique des incrémentales ; la différentielle seule ne contient pas la base complète ; et le full seul perdrait quatre jours de données."
        },
        {
          "type": "resume",
          "titre": "À retenir",
          "points": [
            "RPO = perte de données ; RTO = temps de restauration ; RTO + WRT ≤ MTD",
            "Differential : full + dernière diff ; incremental : full + toutes les incr.",
            "Règle 3-2-1 ; vaulting < journaling < mirroring (fraîcheur et coût)",
            "Cold (semaines, pas cher) < warm (~12 h) < hot (immédiat, cher) ; redundant = possédé par l'org",
            "RAID 1 miroir, 5 parité (3 disques), 6 double parité (4), 10 miroir+striping",
            "HA, fault tolerance et QoS pour la résilience"
          ],
          "narration": "Grand résumé. Le RPO mesure la perte de données tolérable, le RTO le temps de restauration, et leur somme avec le WRT doit tenir dans le MTD. Avec des différentielles on restaure le full plus la dernière ; avec des incrémentales, le full plus toute la chaîne. Appliquez la règle trois-deux-un, et graduez vos copies distantes du vaulting au mirroring. Les sites de secours vont du cold, économique mais lent, au hot, immédiat mais coûteux, sans oublier le site redondant possédé par l'organisation. Ajoutez le RAID, la haute disponibilité et la tolérance aux pannes, et vous avez une stratégie de récupération complète."
        }
      ]
    },
    {
      "id": "d7-l7",
      "titre": "DRP, tests de reprise, BCP, sécurité physique et personnel",
      "duree": 14,
      "slides": [
        {
          "type": "intro",
          "titre": "Du plan au terrain",
          "points": [
            "DRP : instructions concrètes pour survivre à la catastrophe",
            "Un plan non testé n'est qu'une hypothèse",
            "BCP : périmètre plus large que le DR",
            "Et toujours : la vie humaine d'abord"
          ],
          "narration": "Dernière leçon du domaine : nous passons du plan au terrain. Le plan de reprise après sinistre, le DRP, contient les instructions concrètes que suivent les équipes quand la catastrophe frappe. Mais un plan jamais testé n'est qu'une hypothèse, d'où les cinq types de tests à connaître. Nous verrons aussi le BCP, dont le périmètre dépasse largement le DR, puis la sécurité physique et la protection du personnel. Et retenez la règle d'or de tout l'examen : la vie humaine passe toujours en premier."
        },
        {
          "type": "standard",
          "titre": "Le DRP : response, personnel, communications",
          "points": [
            "Checklists simples, tâches ordonnées par priorité",
            "Critères clairs d'activation et autorité de déclaration du désastre",
            "Liste de contacts avec moyens alternatifs et suppléants",
            "Assessment initial rapide, puis évaluations détaillées",
            "Restoration (site utilisable) ≠ recovery (opérations relancées)"
          ],
          "narration": "Un bon DRP fournit des instructions simples et complètes, souvent sous forme de checklists dont les tâches sont classées par priorité, la plus importante en premier. Il définit les critères d'activation et surtout qui a l'autorité de déclarer le désastre, puis les procédures de notification, avec des moyens de contact alternatifs et des suppléants pour chaque rôle. À l'arrivée de l'équipe, la première priorité est l'évaluation rapide de la situation pour trier et lancer la réponse. Distinction utile : la restoration remet le site et l'environnement en état de fonctionner, tandis que la recovery relance les opérations métier. Les unités les plus prioritaires sont récupérées en premier, et l'objectif final reste le retour des équipes à leur lieu de travail habituel."
        },
        {
          "type": "schema",
          "titre": "Les cinq tests du DRP",
          "points": [
            "Du moins risqué au plus risqué et au plus probant",
            "Seul le full-interruption prouve que le plan fonctionne",
            "La direction résiste souvent au full-interruption (risque réel)"
          ],
          "schema": {
            "type": "pyramid",
            "items": [
              "Read-through / tabletop",
              "Walk-through structuré",
              "Simulation",
              "Parallel test",
              "Full-interruption test"
            ]
          },
          "narration": "Cinq types de tests, du plus simple au plus probant. Le read-through distribue le plan aux membres de l'équipe pour relecture, ce qui rafraîchit les responsabilités et détecte les informations obsolètes ; le tabletop réunit l'équipe pour discuter d'un scénario sans rien perturber. Le walk-through est plus pratique : on déroule les procédures pour vérifier qu'elles sont exactes et réalisables. La simulation présente un scénario et teste réellement certaines mesures de réponse, quitte à interrompre des activités non critiques. Le parallel test va plus loin : le personnel est relocalisé sur le site de secours et l'active, sans interrompre la production. Enfin, le full-interruption test bascule réellement les opérations vers le site de secours : c'est le seul qui prouve que le plan fonctionne, mais son risque le rend très difficile à faire accepter par la direction.",
          "astuce": "💡 Conseil examen : mémorisez l'ordre croissant : checklist → walkthrough → simulation → parallel → full interruption."
        },
        {
          "type": "standard",
          "titre": "Communiquer autour des tests et leçons apprises",
          "points": [
            "Avant : informer les parties prenantes (calendrier, impacts, objectifs)",
            "Pendant : points d'avancement réguliers",
            "Après : débriefing, succès et axes d'amélioration",
            "Régulateurs : certains secteurs exigent des tests DR documentés",
            "Lessons learned rapidement, animées par un facilitateur (NIST SP 800-61)"
          ],
          "narration": "Un test de DRP se communique. Avant, on informe toutes les parties prenantes du calendrier, des impacts potentiels et des objectifs. Pendant, surtout pour un full-interruption, on fournit des points d'avancement réguliers. Après, un débriefing passe en revue les succès et les axes d'amélioration. Dans les secteurs réglementés, tenir les régulateurs informés fait partie de la conformité. Et comme pour les incidents, chaque opération de reprise se conclut par une session de leçons apprises, menée rapidement avant que les mémoires ne s'estompent, idéalement par un facilitateur formé, en s'appuyant sur les questions du NIST SP 800-61."
        },
        {
          "type": "standard",
          "titre": "BCP : la vision d'ensemble",
          "points": [
            "BCP : maintenir l'activité après une disruption majeure — périmètre plus large que le DR",
            "4 étapes : project scope & planning, BIA, continuity planning, approval & implementation",
            "Le RSSI participe mais ne dirige pas forcément le BCP",
            "BCM chapeaute la création, la maintenance et les tests des plans BC et DR"
          ],
          "narration": "La business continuity planning traite la question la plus large : comment garder l'entreprise en vie après une disruption majeure. Son périmètre dépasse le seul volet technologique du DR. Les quatre étapes principales sont le cadrage et la planification du projet, le Business Impact Analysis, la planification de la continuité, puis l'approbation et l'implémentation du plan. Point de posture pour l'examen : le responsable sécurité participe à l'effort BCP, mais ne le dirige pas nécessairement, car la continuité d'activité appartient au métier. L'ensemble est chapeauté par le Business Continuity Management, qui crée, maintient et teste les plans BC et DR."
        },
        {
          "type": "standard",
          "titre": "Sécurité physique : le périmètre",
          "points": [
            "Zones désignées : publiques, privées, restreintes, avec signalétique",
            "Fences, PIDAS (multi-clôtures), gates, turnstiles, bollards",
            "Access control vestibule (mantrap) contre le piggybacking",
            "Éclairage : contrôle périmétrique le plus courant, rôle dissuasif",
            "Guards : s'adaptent aux situations ; dogs : détection et dissuasion"
          ],
          "narration": "La sécurité physique commence au périmètre. Les zones du site sont désignées publiques, privées ou restreintes, avec la signalétique appropriée. Les clôtures définissent le périmètre ; le PIDAS, avec ses deux ou trois clôtures concentriques et sa détection de contact, en est la forme avancée, la clôture extérieure réduisant les fausses alarmes causées par les animaux. Les portails contrôlent les passages, les tourniquets n'admettent qu'une personne à la fois, et les bollards empêchent les véhicules béliers. Le sas d'accès, ou mantrap, avec sa double porte, bloque le piggybacking et peut piéger un individu. L'éclairage est le contrôle périmétrique le plus répandu, avec un rôle avant tout dissuasif. Et les gardes restent irremplaçables car ils savent s'adapter, tous les contrôles physiques reposant in fine sur une intervention humaine."
        },
        {
          "type": "standard",
          "titre": "Sécurité physique interne",
          "points": [
            "Priorité absolue : protéger les personnes",
            "Locks, badges, motion detectors, alarmes, PDS",
            "Détecteurs : wave pattern, infrarouge (chaleur), capacitance (champ électromagnétique)",
            "Alarmes : deterrent, repellent, notification",
            "Visitor logs : contexte physique pour interpréter les logs logiques"
          ],
          "narration": "À l'intérieur, la règle absolue demeure : protéger les personnes avant tout. Les contrôles internes incluent les serrures, forme rudimentaire d'identification et d'autorisation, les badges, les détecteurs de mouvement, les alarmes d'intrusion et les protective distribution systems pour le câblage. Trois familles de détecteurs de mouvement : à ondes, qui émettent des signaux ultrasoniques ou micro-ondes et surveillent le retour ; à infrarouge, qui repèrent les variations de chaleur ; et capacitifs, fondés sur les champs électromagnétiques. Les alarmes se classent en dissuasives, répulsives et de notification. Enfin, les visiteurs sont escortés et consignés dans des registres, précieux pour donner un contexte physique à l'interprétation des journaux logiques."
        },
        {
          "type": "standard",
          "titre": "Sécurité du personnel : voyages, formation, duress",
          "points": [
            "Voyage : pas de données sensibles sur les appareils, VPN, méfiance envers le wi-fi gratuit",
            "Sensibilisation : insider threat, réseaux sociaux, MFA fatigue",
            "MFA fatigue : ne JAMAIS approuver une notification non sollicitée, signaler",
            "Duress : bouton d'alarme discret, mot de code pour les fausses alertes",
            "Emergency management : la sécurité des personnes d'abord"
          ],
          "narration": "Terminons par la protection du personnel. En voyage, les appareils ne doivent pas contenir de données sensibles, le wi-fi gratuit est à considérer comme hostile, et l'entreprise doit fournir un VPN ; dans certains pays, des dispositifs de surveillance peuvent même être installés dans les chambres d'hôtel. La sensibilisation couvre les menaces internes, les risques de sur-partage sur les réseaux sociaux qui alimentent l'ingénierie sociale, et les attaques par MFA fatigue, où l'attaquant bombarde de notifications en espérant une approbation : la consigne est de ne jamais approuver une demande non sollicitée et de la signaler. Les systèmes de duress permettent de donner l'alerte discrètement, avec un mot de code pour distinguer les fausses alertes, particulièrement utiles pour le personnel isolé. Et dans toute gestion d'urgence, la sécurité des personnes prime sur tout le reste."
        },
        {
          "type": "standard",
          "titre": "Duress codes : alerter sous la contrainte",
          "points": [
            "Duress : agir sous la menace directe d'un agresseur (arme, otage, chantage)",
            "Duress code : mot, phrase ou geste convenu qui déclenche une alerte SILENCIEUSE",
            "Exemples : phrase anodine au téléphone, PIN alternatif qui ouvre ET alerte, bouton panique",
            "Règle d'or : coopérer en apparence, ne jamais résister — la vie humaine d'abord",
            "Coercition/extorsion d'employés : canal de signalement confidentiel, sans crainte de sanction",
            "Former et tester régulièrement : un code jamais répété sera oublié sous stress"
          ],
          "narration": "Approfondissons la notion de duress, la contrainte. Un employé sous duress agit sous la menace directe d'un agresseur : une arme pointée, un proche pris en otage, un chantage. Le duress code est un mot, une phrase ou un geste convenu à l'avance qui déclenche une alerte silencieuse sans éveiller les soupçons de l'agresseur : une phrase anodine glissée au téléphone, un code PIN alternatif qui ouvre bien la porte mais prévient la sécurité, ou un bouton panique discret. La règle d'or est absolue : l'employé coopère en apparence et ne résiste jamais, car la vie humaine passe avant tout actif. Pensez aussi à la coercition de longue durée : un employé victime d'extorsion ou de chantage doit disposer d'un canal de signalement confidentiel, sans crainte de sanction, sinon il cédera à l'attaquant en silence. Enfin, ces procédures doivent être enseignées et répétées régulièrement, car un code jamais exercé sera oublié dans le stress d'une situation réelle.",
          "astuce": "💡 Conseil examen : face à une menace physique, la bonne réponse combine toujours coopération apparente et alerte discrète. Toute option de résistance ou de confrontation est fausse — la vie humaine prime."
        },
        {
          "type": "standard",
          "titre": "Sécurité en voyage et protection à l'étranger",
          "points": [
            "Appareils jetables ou de prêt (burner/loaner devices) : données minimales, réinitialisés au retour",
            "Avant le départ : patchs à jour, chiffrement intégral, formation à la sûreté, briefing pays",
            "Sur place : VPN systématique, wi-fi public hostile, appareils jamais laissés sans surveillance",
            "Douanes : certains pays peuvent exiger le déverrouillage — le chiffrement ne protège pas d'une injonction légale",
            "Collaborateurs à l'étranger : itinéraires partagés, check-ins réguliers, point de contact, plan d'évacuation",
            "Zones à haut risque : executive protection, veille géopolitique, assistance médicale et rapatriement"
          ],
          "narration": "La protection du personnel en déplacement mérite un vrai programme. Pour les destinations sensibles, la meilleure pratique est l'appareil jetable ou de prêt : un téléphone et un ordinateur dédiés au voyage, contenant le strict minimum de données, entièrement réinitialisés au retour. Avant le départ, on applique tous les correctifs, on active le chiffrement intégral du disque, et surtout on forme le voyageur : briefing sur les risques du pays, consignes de comportement et procédures d'urgence. Sur place, le VPN est systématique, le wi-fi public est considéré comme hostile, et les appareils ne sont jamais laissés sans surveillance, pas même dans le coffre de l'hôtel. Point souvent ignoré : au passage des douanes, certains pays peuvent légalement exiger le déverrouillage des appareils ; le chiffrement ne protège pas contre une injonction, d'où l'intérêt de ne transporter aucune donnée sensible. Pour les collaborateurs expatriés ou en mission, l'organisation maintient des itinéraires partagés, des check-ins réguliers, un point de contact d'urgence et un plan d'évacuation. Et pour les dirigeants en zone à haut risque, on ajoute l'executive protection, la veille géopolitique et l'assistance médicale avec rapatriement.",
          "astuce": "💡 Conseil examen : pour un voyage en pays à risque, la MEILLEURE réponse est presque toujours l'appareil de prêt avec données minimales — pas le chiffrement seul, qui ne résiste pas à une fouille frontalière légale."
        },
        {
          "type": "question",
          "titre": "Contrôle de connaissance",
          "narration": "Une dernière question sur les tests de reprise.",
          "q": "Quel type de test DRP consiste à relocaliser le personnel sur le site de secours et à l'activer SANS interrompre les opérations du site principal ?",
          "choix": [
            "Structured walk-through",
            "Parallel test",
            "Simulation test",
            "Full-interruption test"
          ],
          "reponse": 1,
          "explication": "Le parallel test relocalise le personnel sur le site de secours et exécute les procédures d'activation pendant que le site principal continue de fonctionner normalement. Le full-interruption arrête réellement la production ; la simulation ne teste que certaines mesures sur scénario ; le walk-through reste un exercice procédural sans relocalisation."
        },
        {
          "type": "resume",
          "titre": "À retenir",
          "points": [
            "DRP : checklists priorisées, autorité de déclaration, contacts et suppléants",
            "5 tests : read-through → walk-through → simulation → parallel → full-interruption",
            "Seul le full-interruption prouve le plan ; communiquer avant/pendant/après",
            "BCP : scope & planning, BIA, continuity planning, approval — plus large que le DR",
            "Périmètre : PIDAS, mantrap, bollards, éclairage ; intérieur : détecteurs, alarmes",
            "Personnel : voyages, MFA fatigue, duress — la vie humaine d'abord"
          ],
          "narration": "Dernier résumé du domaine. Le DRP repose sur des checklists priorisées, une autorité claire de déclaration du désastre et des listes de contacts avec suppléants. Les cinq tests s'échelonnent du read-through au full-interruption, seul capable de prouver le plan. Le BCP embrasse un périmètre plus large que le DR, en quatre étapes du cadrage à l'approbation. La sécurité physique s'étage du périmètre, avec PIDAS, mantraps et éclairage, jusqu'aux contrôles internes. Et pour le personnel comme pour tout le CISSP : la protection de la vie humaine est toujours la priorité numéro un."
        }
      ]
    }
  ],
  "quiz": [
    {
      "q": "Lors d'une investigation criminelle, quel est le rôle PRINCIPAL du professionnel de la sécurité de l'entreprise ?",
      "choix": [
        "Déterminer la culpabilité au-delà du doute raisonnable",
        "Préserver les preuves et assister les forces de l'ordre",
        "Négocier avec l'attaquant pour récupérer les données",
        "Mener l'interrogatoire des suspects internes"
      ],
      "reponse": 1,
      "explication": "Dans une investigation criminelle, ce sont les forces de l'ordre qui enquêtent. Le professionnel de la sécurité préserve les preuves, s'assure que la police a été contactée et assiste selon les besoins. Il ne mène pas d'interrogatoire, ne juge pas de la culpabilité (rôle du tribunal) et ne négocie jamais avec un attaquant.",
      "difficulte": 1,
      "pourquoi": [
        "Hors rôle : la culpabilité est établie par le tribunal, pas par l'entreprise.",
        "Bonne réponse : l'entreprise préserve les preuves et assiste la police, qui mène l'enquête criminelle.",
        "Réponse dangereuse : on ne négocie jamais avec un attaquant, quel que soit le contexte.",
        "Hors rôle : l'interrogatoire des suspects appartient aux forces de l'ordre, jamais au professionnel de sécurité."
      ]
    },
    {
      "q": "Quel niveau de preuve est requis dans une investigation civile ?",
      "choix": [
        "Prépondérance des preuves (preponderance of evidence)",
        "Au-delà du doute raisonnable (beyond a reasonable doubt)",
        "Preuve directe par témoin oculaire uniquement",
        "Certitude absolue documentée"
      ],
      "reponse": 0,
      "explication": "Le civil exige seulement la prépondérance des preuves, un niveau bien plus faible que le « beyond a reasonable doubt » réservé au criminel. La certitude absolue n'est un standard nulle part, et la preuve directe n'est jamais la seule forme admissible.",
      "difficulte": 2,
      "pourquoi": [
        "Bonne réponse : le civil se contente de la prépondérance des preuves, un standard bien plus faible que le criminel.",
        "Confusion de standard : « beyond a reasonable doubt » est le niveau exigé au criminel, pas au civil.",
        "Trop étroit : la preuve directe n'est jamais la seule forme admissible.",
        "Absolu irréaliste : la certitude absolue n'est un standard de preuve dans aucune juridiction."
      ]
    },
    {
      "q": "Un administrateur système souhaite présenter des journaux systèmes comme preuves au tribunal. Quelle règle risque de s'y opposer si les logs ne sont pas authentifiés ?",
      "choix": [
        "La règle du hearsay (ouï-dire)",
        "Le principe de Locard",
        "Le parol evidence rule",
        "Le best evidence rule"
      ],
      "reponse": 0,
      "explication": "Les tribunaux ont appliqué la règle du hearsay aux logs systèmes : ils ne peuvent être introduits comme preuves que s'ils sont authentifiés par un administrateur système. Le parol evidence concerne les contrats écrits, le best evidence rule impose l'original plutôt que la copie, et Locard traite des traces laissées sur une scène de crime.",
      "difficulte": 3,
      "pourquoi": [
        "Bonne réponse : les logs sont du ouï-dire tant qu'un administrateur système ne les authentifie pas devant le tribunal.",
        "Hors sujet : le principe de Locard décrit les traces laissées sur une scène de crime, pas l'admissibilité.",
        "Hors sujet : le parol evidence rule concerne les contrats écrits, pas les journaux systèmes.",
        "Techniquement plausible mais hors cible : le best evidence rule impose l'original plutôt que la copie, il ne traite pas de l'authentification des logs."
      ]
    },
    {
      "q": "Quelle affirmation décrit le MIEUX la chain of custody ?",
      "choix": [
        "Le processus d'approbation des changements en urgence",
        "La liste des vulnérabilités exploitées pendant l'incident",
        "La documentation de qui a collecté et manipulé chaque preuve, quand et où",
        "L'ordre chronologique des étapes de l'attaque"
      ],
      "reponse": 2,
      "explication": "La chain of custody documente le contrôle de la preuve : qui l'a collectée et manipulée, quand et où, à chaque transfert (tag, bag, carry). Sans elle, la preuve réelle perd son admissibilité. Les autres réponses décrivent l'analyse d'attaque ou la gestion des changements.",
      "difficulte": 1,
      "pourquoi": [
        "Hors sujet : l'approbation des changements d'urgence relève du change management.",
        "Confusion : la liste des vulnérabilités relève de l'analyse technique de l'incident, pas du contrôle de la preuve.",
        "Bonne réponse : la chain of custody trace qui a collecté et manipulé chaque preuve, quand et où, à chaque transfert.",
        "Confusion : la chronologie de l'attaque est la timeline d'investigation, pas la chaîne de contrôle de la preuve."
      ]
    },
    {
      "q": "Parmi les cinq règles de la preuve, laquelle exige de fournir TOUTES les parties de la preuve, y compris celles qui desservent votre dossier ?",
      "choix": [
        "Authentic",
        "Admissible",
        "Convincing",
        "Complete"
      ],
      "reponse": 3,
      "explication": "La règle « complete » impose de partager la preuve dans son intégralité, qu'elle soutienne ou non votre cause. « Authentic » signifie non fabriquée, « convincing » facile à comprendre, et « admissible » pertinente, matérielle et collectée légalement.",
      "difficulte": 2,
      "pourquoi": [
        "Piège de vocabulaire : « authentic » signifie que la preuve n'est pas fabriquée.",
        "Piège de vocabulaire : « admissible » signifie pertinente, matérielle et collectée légalement.",
        "Piège de vocabulaire : « convincing » signifie que la preuve est claire et compréhensible pour le tribunal.",
        "Bonne réponse : « complete » exige de produire la preuve entière, y compris les éléments défavorables à votre cause."
      ]
    },
    {
      "q": "Votre organisation apprend qu'un procès va probablement être intenté contre elle. Que devez-vous faire EN PREMIER concernant les données électroniques ?",
      "choix": [
        "Purger les données au-delà de la durée de rétention",
        "Mettre en œuvre la préservation des preuves numériques potentiellement pertinentes",
        "Chiffrer toutes les archives pour les protéger",
        "Transférer les données vers un tiers de confiance"
      ],
      "reponse": 1,
      "explication": "Une organisation qui anticipe un litige a l'obligation légale de préserver les preuves numériques (legal hold, phase Preservation du modèle EDRM). Purger des données à ce stade constituerait une destruction de preuves ; le chiffrement et le transfert ne répondent pas à l'obligation de préservation.",
      "difficulte": 2,
      "pourquoi": [
        "Réponse illégale : purger des données quand un litige est anticipé constitue une destruction de preuves.",
        "Bonne réponse : l'anticipation d'un litige déclenche l'obligation de préservation (legal hold, phase Preservation de l'EDRM).",
        "Réponse de technicien : chiffrer protège la confidentialité mais ne répond pas à l'obligation légale de préservation.",
        "Fausse bonne idée : transférer les données ne crée aucune préservation opposable et complique la production."
      ]
    },
    {
      "q": "Quel est l'objectif PRINCIPAL du tuning d'un SIEM ?",
      "choix": [
        "Augmenter le volume de logs collectés",
        "Réduire les false positives sans créer de false negatives",
        "Accélérer la rotation des fichiers journaux",
        "Éliminer complètement les alertes pour les analystes"
      ],
      "reponse": 1,
      "explication": "Le tuning réduit les faux positifs, qui causent la fatigue des analystes, tout en évitant les faux négatifs — des activités malveillantes réelles non détectées. Collecter plus de logs n'est pas le but du tuning, supprimer toutes les alertes serait dangereux, et la rotation des journaux relève du log management.",
      "difficulte": 2,
      "pourquoi": [
        "Contresens : collecter plus de logs augmente le bruit, ce n'est pas l'objectif du tuning.",
        "Bonne réponse : le tuning réduit les faux positifs, cause de la fatigue des analystes, sans créer de faux négatifs.",
        "Hors sujet : la rotation des journaux relève du log management, pas du tuning de la détection.",
        "Absolu dangereux : éliminer toutes les alertes reviendrait à s'aveugler volontairement."
      ]
    },
    {
      "q": "Quelle technologie permet de répondre AUTOMATIQUEMENT à certains incidents en s'appuyant sur des playbooks et des runbooks ?",
      "choix": [
        "SOAR",
        "IDS",
        "UEBA",
        "SIEM"
      ],
      "reponse": 0,
      "explication": "Le SOAR (Security Orchestration, Automation, and Response) automatise la réponse aux incidents définis dans des playbooks, implémentés par des runbooks, réduisant la charge des administrateurs et l'erreur humaine. Le SIEM corrèle et alerte mais ne répond pas, l'UEBA analyse les comportements, et l'IDS détecte sans agir.",
      "difficulte": 1,
      "pourquoi": [
        "Bonne réponse : le SOAR exécute des playbooks implémentés en runbooks pour répondre automatiquement aux incidents définis.",
        "Trop étroit : l'IDS détecte et alerte sans jamais agir.",
        "Trop étroit : l'UEBA analyse les comportements pour détecter, sans capacité de réponse.",
        "Techniquement plausible mais incomplet : le SIEM corrèle et alerte, il ne déclenche pas de réponse automatisée."
      ]
    },
    {
      "q": "Quel duo de standards permet de DÉCRIRE puis de TRANSPORTER les informations de threat intelligence ?",
      "choix": [
        "IoC pour décrire, NetFlow pour transporter",
        "SCAP pour décrire, SNMP pour transporter",
        "TAXII pour décrire, STIX pour transporter",
        "STIX pour décrire, TAXII pour transporter"
      ],
      "reponse": 3,
      "explication": "STIX est le langage structuré (JSON) qui exprime les renseignements sur les menaces ; TAXII est le protocole de transport qui achemine les données STIX sur HTTPS. L'inverser est le piège classique. IoC et NetFlow sont des données, pas des standards d'échange complets ; SCAP concerne l'automatisation de la conformité.",
      "difficulte": 2,
      "pourquoi": [
        "Confusion : IoC et NetFlow sont des données observables, pas un couple de standards de description et de transport.",
        "Hors sujet : SCAP automatise la conformité et SNMP supervise les équipements.",
        "Piège d'inversion classique : les rôles de STIX et TAXII sont ici échangés.",
        "Bonne réponse : STIX est le langage qui décrit la threat intelligence, TAXII le protocole qui la transporte."
      ]
    },
    {
      "q": "Dans la Cyber Kill Chain de Lockheed Martin, à quelle étape l'attaquant envoie-t-il son exploit à la cible via un e-mail de phishing ?",
      "choix": [
        "Weaponization",
        "Installation",
        "Delivery",
        "Exploitation"
      ],
      "reponse": 2,
      "explication": "La delivery est l'envoi de l'arme vers la cible : phishing, pièce jointe malveillante, site compromis. La weaponization est la préparation de l'exploit en amont, l'exploitation est le déclenchement de la vulnérabilité, et l'installation est la mise en place du malware avec backdoor.",
      "difficulte": 2,
      "pourquoi": [
        "Hors phase : la weaponization est la préparation de l'exploit, avant tout envoi.",
        "Hors phase : l'installation implante le malware une fois l'exploitation réussie.",
        "Bonne réponse : la delivery est la transmission de l'arme à la cible, typiquement par phishing.",
        "Hors phase : l'exploitation est le déclenchement de la vulnérabilité après réception."
      ]
    },
    {
      "q": "Quelle solution est la MIEUX adaptée pour détecter un compte compromis dont l'attaquant utilise des identifiants valides ?",
      "choix": [
        "Une détection par signatures",
        "Un firewall stateful",
        "Une deny list applicative",
        "L'UEBA (analyse comportementale des utilisateurs et entités)"
      ],
      "reponse": 3,
      "explication": "Avec des identifiants valides, aucune signature d'attaque ni règle firewall n'est violée. L'UEBA détecte les déviations par rapport au profil de comportement habituel de l'utilisateur (horaires, volumes, ressources accédées), signature typique d'un compte compromis ou d'une menace interne.",
      "difficulte": 2,
      "pourquoi": [
        "Inefficace ici : aucune signature d'attaque n'est violée quand l'attaquant utilise des identifiants valides.",
        "Inefficace ici : un firewall stateful laisse passer une session légitimement authentifiée.",
        "Inefficace ici : une deny list bloque des applications, pas l'usage anormal d'un compte légitime.",
        "Bonne réponse : l'UEBA détecte les écarts au profil comportemental habituel — la signature d'un compte compromis."
      ]
    },
    {
      "q": "Quelle est la différence FONDAMENTALE entre need-to-know et least privilege ?",
      "choix": [
        "Need-to-know limite l'accès à l'information, least privilege limite l'étendue des droits et permissions",
        "Need-to-know est technique, least privilege est administratif",
        "Least privilege s'applique uniquement aux comptes ayant accès à des données classifiées",
        "Need-to-know concerne les administrateurs, least privilege les utilisateurs"
      ],
      "reponse": 0,
      "explication": "Need-to-know restreint QUELLES informations un sujet peut connaître pour accomplir sa tâche ; least privilege restreint l'ÉTENDUE des privilèges accordés (permissions sur les données et droits d'exécuter des tâches systèmes). Les deux s'appliquent à tous les sujets, y compris processus et services.",
      "difficulte": 1,
      "pourquoi": [
        "Bonne réponse : need-to-know limite l'accès à l'information, least privilege limite l'étendue des droits et permissions.",
        "Faux clivage : les deux principes se déclinent à la fois techniquement et administrativement.",
        "Trop étroit : least privilege s'applique à tous les sujets et à toutes les sensibilités, pas seulement au classifié.",
        "Faux clivage : les deux principes s'appliquent à tous les sujets, administrateurs comme utilisateurs."
      ]
    },
    {
      "q": "Quel contrôle exige la coopération de DEUX personnes pour effectuer une tâche critique, par exemple chacune saisissant la moitié d'un mot de passe ?",
      "choix": [
        "Mandatory vacation",
        "Two-person control",
        "Clipping",
        "Job rotation"
      ],
      "reponse": 1,
      "explication": "Le two-person control (règle des deux hommes) exige l'approbation ou l'action conjointe de deux individus, garantissant la revue par les pairs et réduisant le risque de fraude. La rotation des postes et les congés obligatoires détectent la fraude dans la durée, et le clipping est une technique d'échantillonnage de logs.",
      "difficulte": 1,
      "pourquoi": [
        "Piège temporel : les congés obligatoires révèlent la fraude pendant l'absence, sans coopération simultanée.",
        "Bonne réponse : le two-person control impose l'action conjointe de deux individus pour une tâche critique.",
        "Hors sujet : le clipping est un seuil d'échantillonnage de logs.",
        "Piège temporel : la job rotation détecte la fraude dans la durée, elle n'exige pas deux personnes simultanément."
      ]
    },
    {
      "q": "Quel est le bénéfice de sécurité PRINCIPAL de la job rotation ?",
      "choix": [
        "Éliminer le besoin de séparation des tâches",
        "Améliorer la satisfaction des employés en variant leurs tâches",
        "Fournir revue par les pairs, détection de la fraude et cross-training",
        "Garantir la disponibilité du service en cas d'absence imprévue"
      ],
      "reponse": 2,
      "explication": "La rotation des postes offre une revue par les pairs, réduit la fraude (dissuasion et détection, car une fraude dépendant d'une personne en poste finit par être découverte) et développe la polyvalence. Elle complète la séparation des tâches mais ne la remplace pas ; la continuité de service et la satisfaction des employés sont des bénéfices réels, mais pas des bénéfices de sécurité.",
      "difficulte": 1,
      "pourquoi": [
        "Absolu : la rotation complète la séparation des tâches mais ne l'élimine jamais.",
        "Vrai mais pas sécurité : la satisfaction des employés est un bénéfice RH, pas un contrôle de sécurité.",
        "Bonne réponse : la rotation apporte revue par les pairs, détection de la fraude et polyvalence (cross-training).",
        "Vrai mais pas sécurité : la continuité de service est un bénéfice opérationnel, pas le bénéfice de sécurité recherché."
      ]
    },
    {
      "q": "Pourquoi est-il essentiel de surveiller les actions des comptes privilégiés ?",
      "choix": [
        "Parce que les administrateurs sont les employés les moins fiables",
        "Pour pouvoir alléger la journalisation des comptes standards et économiser du stockage",
        "Uniquement pour satisfaire les exigences des auditeurs externes",
        "Parce que les attaquants utilisent presque toujours des privilèges élevés et que les employés de confiance peuvent en abuser"
      ],
      "reponse": 3,
      "explication": "La surveillance des opérations privilégiées répond à deux risques : l'abus par des employés de confiance et la détection d'attaques, car les attaquants exploitent quasi systématiquement des privilèges élevés. Il ne s'agit ni de défiance systématique, ni de simple conformité, ni d'un arbitrage de volumétrie de journalisation.",
      "difficulte": 2,
      "pourquoi": [
        "Contresens : la surveillance ne présume pas la malveillance des administrateurs, elle gère un risque.",
        "Réponse de technicien : un arbitrage de stockage ne justifie pas la surveillance des comptes privilégiés.",
        "Trop étroit : la conformité est un bénéfice secondaire, pas la raison principale.",
        "Bonne réponse : les attaquants utilisent presque toujours des privilèges élevés, et l'abus par des initiés de confiance reste possible."
      ]
    },
    {
      "q": "Quel processus garantit que les systèmes sont déployés dans un état sécurisé et cohérent et qu'ils le RESTENT tout au long de leur cycle de vie ?",
      "choix": [
        "La gestion des configurations (CM)",
        "L'eDiscovery",
        "La gestion des incidents",
        "La gestion des vulnérabilités"
      ],
      "reponse": 0,
      "explication": "La configuration management identifie, contrôle et vérifie les configurations, en s'appuyant sur des baselines (souvent déployées par images) et le hardening. La gestion des vulnérabilités identifie les faiblesses, la gestion des incidents traite les compromissions, et l'eDiscovery concerne les procédures judiciaires.",
      "difficulte": 1,
      "pourquoi": [
        "Bonne réponse : la configuration management déploie des baselines sécurisées et vérifie qu'elles sont maintenues dans le temps.",
        "Hors sujet : l'eDiscovery concerne les procédures judiciaires.",
        "Hors sujet : la gestion des incidents traite les compromissions, pas l'état de déploiement.",
        "Piège de périmètre : la gestion des vulnérabilités identifie les faiblesses, elle ne maintient pas l'état des systèmes."
      ]
    },
    {
      "q": "Lors d'un changement d'infrastructure, quel élément doit IMPÉRATIVEMENT être prêt avant l'implémentation ?",
      "choix": [
        "Le rapport post-implémentation destiné au CAB",
        "Un plan de rollback permettant d'annuler le changement",
        "La sauvegarde des logs du SIEM",
        "L'accord écrit de tous les utilisateurs finaux"
      ],
      "reponse": 1,
      "explication": "Le processus de change management exige un plan de retour arrière avant l'implémentation, afin de pouvoir annuler le changement si un problème survient. Le rapport post-implémentation intervient après le changement, l'accord de chaque utilisateur est irréaliste, et la sauvegarde des logs SIEM n'est pas l'élément critique ici.",
      "difficulte": 1,
      "pourquoi": [
        "Hors phase : le rapport post-implémentation intervient après le changement, pas avant.",
        "Bonne réponse : un plan de rollback prêt avant l'implémentation permet d'annuler le changement en cas de problème.",
        "Hors sujet : la sauvegarde des logs SIEM n'est pas le prérequis critique d'un changement d'infrastructure.",
        "Absolu irréaliste : on informe les parties prenantes clés, on ne recueille pas l'accord de chaque utilisateur."
      ]
    },
    {
      "q": "Quelle est la MEILLEURE façon de vérifier l'efficacité d'un programme de patch management ?",
      "choix": [
        "Compter le nombre de patchs publiés par les éditeurs",
        "Demander une attestation écrite aux administrateurs",
        "Effectuer des scans de vulnérabilités et des audits réguliers des systèmes",
        "Vérifier que les patchs sont téléchargés sur le serveur central"
      ],
      "reponse": 2,
      "explication": "Les scans de vulnérabilités détectent les patchs manquants et constituent un contrôle efficace du programme de patch management ; les audits confirment que les systèmes restent à jour. Le nombre de patchs publiés ne dit rien de leur déploiement, une attestation n'est pas une vérification technique, et télécharger n'est pas installer.",
      "difficulte": 2,
      "pourquoi": [
        "Métrique creuse : le nombre de patchs publiés ne dit rien de leur déploiement effectif.",
        "Contrôle faible : une attestation écrite est déclarative, sans vérification technique.",
        "Bonne réponse : les scans de vulnérabilités et les audits vérifient techniquement que les correctifs sont réellement appliqués.",
        "Piège d'étape : télécharger un patch n'est ni l'installer ni le vérifier."
      ]
    },
    {
      "q": "Quel type de firewall opère en couche 7 et peut bloquer des attaques par injection SQL contre un serveur web ?",
      "choix": [
        "Web Application Firewall (WAF)",
        "Stateful inspection firewall",
        "Circuit-level gateway",
        "Static packet filtering firewall"
      ],
      "reponse": 0,
      "explication": "Le WAF est un firewall applicatif de couche 7 qui inspecte le contenu du trafic web et bloque les attaques comme l'injection SQL ou le XSS. Le filtrage statique reste en couche 3, le circuit-level en couche 5 valide les sessions sans inspecter le contenu, et le stateful (couches 3-4) n'inspecte pas la couche applicative.",
      "difficulte": 2,
      "pourquoi": [
        "Bonne réponse : le WAF inspecte le trafic applicatif en couche 7 et bloque injections SQL et XSS.",
        "Hors couche : le stateful suit l'état des connexions en couches 3-4 sans analyse applicative.",
        "Hors couche : le circuit-level gateway valide les sessions en couche 5 sans inspecter le contenu.",
        "Hors couche : le filtrage statique opère en couche 3 et ignore le contenu applicatif."
      ]
    },
    {
      "q": "Un IDS behavior-based génère beaucoup plus d'alertes qu'un IDS à signatures. Quel est son avantage COMPENSATOIRE ?",
      "choix": [
        "Il ne nécessite aucune configuration initiale",
        "Il peut détecter des attaques nouvelles et inconnues",
        "Il bloque automatiquement les attaques détectées",
        "Il consomme moins de ressources système"
      ],
      "reponse": 1,
      "explication": "La détection comportementale compare l'activité à une baseline et peut donc repérer des attaques inédites, là où la détection par signatures est aveugle à tout ce qui n'est pas déjà répertorié. En contrepartie, elle génère plus de faux positifs, exige la constitution d'une baseline, et un IDS ne bloque rien (c'est le rôle de l'IPS).",
      "difficulte": 2,
      "pourquoi": [
        "Faux : il exige au contraire la construction d'une baseline initiale.",
        "Bonne réponse : la comparaison à une baseline permet de détecter des attaques nouvelles, invisibles aux signatures.",
        "Confusion IDS/IPS : un IDS détecte et alerte, il ne bloque pas.",
        "Faux : l'analyse comportementale consomme généralement plus de ressources que les signatures."
      ]
    },
    {
      "q": "Quel est l'intérêt PRINCIPAL d'un honeypot pour une organisation ?",
      "choix": [
        "Héberger les données sensibles dans un environnement renforcé",
        "Riposter automatiquement contre les systèmes de l'attaquant",
        "Remplacer l'IDS sur les segments critiques",
        "Occuper l'attaquant loin de la production et observer ses techniques"
      ],
      "reponse": 3,
      "explication": "Le honeypot est un leurre doté de pseudo-failles et de fausses données : il détourne l'attaquant de l'environnement de production tout en permettant de l'observer sans risque. Il n'héberge jamais de données de valeur réelle, ne riposte pas (le hackback est proscrit) et complète l'IDS sans le remplacer.",
      "difficulte": 1,
      "pourquoi": [
        "Contresens dangereux : un honeypot ne doit jamais héberger de données réelles de valeur.",
        "Réponse illégale : la riposte automatique (hackback) est proscrite.",
        "Absolu : le honeypot complète l'IDS, il ne le remplace pas.",
        "Bonne réponse : le leurre détourne l'attaquant de la production et permet d'étudier ses techniques sans risque."
      ]
    },
    {
      "q": "Quelle approche de contrôle applicatif correspond au principe « deny by default » ?",
      "choix": [
        "L'utilisation simultanée d'une allow list et d'une deny list",
        "La deny list : bloquer les applications connues comme malveillantes",
        "L'allow list : seules les applications explicitement autorisées peuvent s'exécuter",
        "Le sandboxing de toutes les applications"
      ],
      "reponse": 2,
      "explication": "L'allow listing n'autorise que les applications approuvées et bloque tout le reste par défaut (implicit deny) — l'App Store d'iOS en est un exemple extrême. La deny list ne bloque que ce qui est listé et laisse passer le reste. Un système utilise une seule liste, jamais les deux, et le sandboxing est une technique d'isolation, pas de contrôle d'exécution.",
      "difficulte": 2,
      "pourquoi": [
        "Faux : un système applique une seule liste, jamais les deux simultanément.",
        "Inversion : la deny list autorise par défaut et ne bloque que ce qui est listé — l'inverse du deny by default.",
        "Bonne réponse : l'allow list n'exécute que l'approuvé et refuse tout le reste par défaut (implicit deny).",
        "Confusion : le sandboxing isole l'exécution, il ne décide pas de ce qui a le droit de s'exécuter."
      ]
    },
    {
      "q": "Un malware reste actif en mémoire sans jamais s'écrire sur le disque. Comment le qualifie-t-on ?",
      "choix": [
        "Logic bomb",
        "Rootkit",
        "Fileless malware",
        "Multipartite"
      ],
      "reponse": 2,
      "explication": "Le fileless malware ne laisse aucune trace sur les supports de stockage tout en restant résident et actif en mémoire, ce qui complique fortement sa détection. Le rootkit s'enfouit dans l'OS pour se masquer, le multipartite se propage par plusieurs vecteurs, et la logic bomb attend une condition de déclenchement.",
      "difficulte": 2,
      "pourquoi": [
        "Hors sujet : la logic bomb attend une condition de déclenchement.",
        "Piège plausible : le rootkit se dissimule dans l'OS mais s'écrit généralement sur le disque.",
        "Bonne réponse : le fileless malware réside uniquement en mémoire, sans trace sur les supports de stockage.",
        "Hors sujet : le multipartite se propage par plusieurs vecteurs."
      ]
    },
    {
      "q": "Pendant la phase de mitigation d'un incident, quel est l'objectif de l'équipe de réponse ?",
      "choix": [
        "Rédiger le rapport final pour la direction",
        "Corriger définitivement la vulnérabilité exploitée",
        "Restaurer les systèmes depuis les sauvegardes",
        "Contenir l'incident et empêcher des dégâts supplémentaires"
      ],
      "reponse": 3,
      "explication": "La mitigation est le confinement : limiter l'impact et empêcher la propagation, par exemple en isolant une machine du réseau — sans chercher à réparer à ce stade. La correction de la vulnérabilité relève de la remediation, le rapport du reporting, et la restauration de la phase recovery.",
      "difficulte": 1,
      "pourquoi": [
        "Hors phase : le rapport appartient à la phase reporting.",
        "Hors phase : corriger la vulnérabilité relève de la remediation, après le confinement.",
        "Hors phase : la restauration appartient à la phase recovery.",
        "Bonne réponse : la mitigation contient l'incident et empêche des dégâts supplémentaires."
      ]
    },
    {
      "q": "Après un incident majeur, la méthode la PLUS SÛRE pour restaurer un système compromis est :",
      "choix": [
        "Reconstruire complètement le système puis restaurer les données depuis la sauvegarde la plus récente",
        "Changer tous les mots de passe et surveiller le système",
        "Supprimer le malware avec l'antivirus puis remettre en production",
        "Restaurer uniquement les fichiers modifiés par l'attaquant"
      ],
      "reponse": 0,
      "explication": "La reconstruction complète depuis zéro, guidée par la documentation de configuration, garantit qu'aucun composant compromis (backdoor, rootkit) ne subsiste, avant restauration des données. Un simple nettoyage antivirus ou une restauration partielle peut laisser des portes dérobées, et changer les mots de passe ne suffit pas.",
      "difficulte": 2,
      "pourquoi": [
        "Bonne réponse : la reconstruction complète garantit l'élimination de toute persistance avant restauration des données.",
        "Insuffisant : changer les mots de passe ne retire pas les implants de l'attaquant.",
        "Insuffisant : un nettoyage antivirus peut laisser backdoors et rootkits en place.",
        "Insuffisant : restaurer les seuls fichiers connus ignore les modifications non détectées."
      ]
    },
    {
      "q": "À l'issue de la phase lessons learned, la direction rejette une recommandation de l'équipe IR. Qui assume le risque associé ?",
      "choix": [
        "Le RSSI personnellement",
        "La direction (management) qui a pris la décision",
        "L'équipe de réponse aux incidents",
        "L'auditeur externe"
      ],
      "reponse": 1,
      "explication": "Le management décide quelles recommandations implémenter et reste responsable du risque résiduel pour celles qu'il rejette. C'est un principe transverse du CISSP : la responsabilité ultime du risque appartient toujours à la direction, jamais aux équipes techniques ni aux auditeurs.",
      "difficulte": 2,
      "pourquoi": [
        "Piège de responsabilité : le RSSI conseille, mais la responsabilité ultime du risque ne lui incombe pas personnellement.",
        "Bonne réponse : la direction qui rejette une recommandation assume le risque résiduel de sa décision.",
        "Piège de responsabilité : l'équipe IR recommande, elle ne porte pas le risque des décisions de la direction.",
        "Hors rôle : l'auditeur évalue, il ne porte jamais le risque de l'organisation."
      ]
    },
    {
      "q": "Votre RTO est de 4 heures, votre WRT de 2 heures et votre MTD de 8 heures. Cette configuration est-elle acceptable ?",
      "choix": [
        "Non, car le WRT doit être égal au RTO",
        "Impossible à dire sans connaître le RPO",
        "Oui, car RTO + WRT (6 h) reste inférieur au MTD (8 h)",
        "Non, car le RTO doit toujours être supérieur au MTD"
      ],
      "reponse": 2,
      "explication": "La règle est RTO + WRT ≤ MTD : le temps de restauration du service plus le temps de vérification de l'intégrité doivent tenir dans l'indisponibilité maximale tolérable. Ici 4 + 2 = 6 heures ≤ 8 heures, c'est acceptable. Le RPO concerne la perte de données, pas la durée d'indisponibilité.",
      "difficulte": 3,
      "pourquoi": [
        "Règle inventée : aucun principe n'exige l'égalité du WRT et du RTO.",
        "Hors sujet : le RPO mesure la perte de données, il n'entre pas dans ce calcul d'indisponibilité.",
        "Bonne réponse : RTO + WRT (4 + 2 = 6 h) reste inférieur au MTD de 8 h, la configuration est acceptable.",
        "Inversion : c'est le MTD qui doit englober RTO + WRT, pas l'inverse."
      ]
    },
    {
      "q": "Votre organisation effectue un full backup le dimanche et des sauvegardes incrémentales chaque nuit. Une panne survient jeudi matin. Que devez-vous restaurer ?",
      "choix": [
        "Le full du dimanche uniquement",
        "Le full du dimanche et l'incrémentale de mercredi uniquement",
        "Uniquement l'incrémentale de mercredi",
        "Le full du dimanche puis les incrémentales de lundi, mardi et mercredi dans l'ordre chronologique"
      ],
      "reponse": 3,
      "explication": "Chaque incrémentale ne contient que les changements depuis la sauvegarde précédente : il faut donc le full puis TOUTES les incrémentales dans l'ordre chronologique. Restaurer une seule incrémentale est la logique des différentielles ; le full seul perdrait trois jours de données.",
      "difficulte": 2,
      "pourquoi": [
        "Incomplet : le full seul perdrait trois jours de modifications.",
        "Piège différentiel : ne restaurer que la dernière sauvegarde vaut pour les différentielles, pas pour les incrémentales.",
        "Incomplet : une incrémentale seule ne contient ni le socle ni les jours précédents.",
        "Bonne réponse : chaque incrémentale ne contient que les changements depuis la précédente — il faut le full puis toutes les incrémentales dans l'ordre."
      ]
    },
    {
      "q": "Quelle technique de copie hors site maintient un serveur de base de données VIVANT sur le site de secours, mis à jour en même temps que la production ?",
      "choix": [
        "Remote mirroring",
        "Electronic vaulting",
        "Rollover logging",
        "Remote journaling"
      ],
      "reponse": 0,
      "explication": "Le remote mirroring, solution la plus avancée et la plus coûteuse, applique les modifications à un serveur de secours actif simultanément à la production. L'electronic vaulting transfère les sauvegardes en masse, le remote journaling transfère les journaux de transactions sans les appliquer à une base vivante, et le rollover logging concerne la rotation des logs.",
      "difficulte": 2,
      "pourquoi": [
        "Bonne réponse : le remote mirroring maintient un serveur de secours vivant, mis à jour en même temps que la production.",
        "Trop lent : l'electronic vaulting transfère des sauvegardes en masse, sans serveur distant vivant.",
        "Terme piège : le « rollover logging » renvoie à la rotation des journaux, pas à une stratégie de site distant.",
        "Piège proche : le remote journaling transfère les journaux de transactions mais ne maintient pas une base active."
      ]
    },
    {
      "q": "Une PME au budget limité peut tolérer plusieurs semaines d'indisponibilité pour ses applications non critiques. Quel site de secours est le PLUS approprié ?",
      "choix": [
        "Site redondant actif-actif",
        "Cold site",
        "Hot site",
        "Warm site"
      ],
      "reponse": 1,
      "explication": "Le cold site — un bâtiment avec électricité et environnement contrôlé mais sans équipement — est l'option la moins chère, adaptée à un RTO très souple mesuré en semaines. Hot site et site redondant sont très coûteux et surdimensionnés ici, et le warm site reste plus cher que nécessaire pour ce besoin.",
      "difficulte": 1,
      "pourquoi": [
        "Surdimensionné : un site actif-actif est l'option la plus onéreuse, injustifiable ici.",
        "Bonne réponse : le cold site, simple bâtiment alimenté et climatisé, est l'option la moins chère adaptée à un RTO en semaines.",
        "Surdimensionné : le hot site est très coûteux pour des applications tolérant des semaines d'arrêt.",
        "Surdimensionné : le warm site reste plus cher que nécessaire pour un RTO aussi souple."
      ]
    },
    {
      "q": "Pourquoi les Mutual Assistance Agreements (MAA) sont-ils RAREMENT utilisés comme stratégie de reprise ?",
      "choix": [
        "Ils sont difficiles à faire respecter, vulnérables au même sinistre régional et posent des problèmes de confidentialité",
        "Ils sont interdits par la plupart des régulateurs",
        "Ils exigent une certification ISO préalable",
        "Ils coûtent plus cher qu'un hot site"
      ],
      "reponse": 0,
      "explication": "Les MAA sont peu contraignants juridiquement (difficiles à faire appliquer), les deux organisations peuvent être touchées par le même sinistre régional, et l'hébergement mutuel soulève des questions de confidentialité. Ils ne sont ni interdits, ni plus chers qu'un hot site — c'est même leur faible coût qui les rend tentants.",
      "difficulte": 3,
      "pourquoi": [
        "Bonne réponse : difficiles à faire respecter juridiquement, exposés au même sinistre régional et problématiques pour la confidentialité.",
        "Faux : les MAA ne sont pas interdits, ils sont simplement peu fiables.",
        "Règle inventée : aucune certification ISO n'est exigée pour un MAA.",
        "Inversé : leur faible coût est précisément leur attrait face au hot site."
      ]
    },
    {
      "q": "Quel niveau de RAID utilise un double bloc de parité et tolère la panne SIMULTANÉE de deux disques ?",
      "choix": [
        "RAID 5",
        "RAID 1",
        "RAID 10",
        "RAID 6"
      ],
      "reponse": 3,
      "explication": "RAID 6 utilise deux blocs de parité, exige au minimum quatre disques et survit à la défaillance simultanée de deux d'entre eux. RAID 5 (parité simple, trois disques minimum) ne tolère qu'une panne, RAID 1 est un simple miroir, et RAID 10 combine miroir et striping sans double parité.",
      "difficulte": 2,
      "pourquoi": [
        "Piège proche : RAID 5 n'a qu'une parité simple et ne survit qu'à une seule panne.",
        "Insuffisant : RAID 1 est un miroir qui ne tolère la perte que d'un disque du couple.",
        "Piège proche : RAID 10 combine miroir et striping, sans double parité.",
        "Bonne réponse : RAID 6 utilise une double parité et tolère la panne simultanée de deux disques."
      ]
    },
    {
      "q": "Quel test DRP est le SEUL à prouver réellement que le plan de reprise fonctionne, tout en étant le plus risqué ?",
      "choix": [
        "Structured walk-through",
        "Parallel test",
        "Full-interruption test",
        "Simulation test"
      ],
      "reponse": 2,
      "explication": "Le full-interruption test arrête réellement les opérations du site principal et les bascule vers le site de secours : c'est la seule preuve complète du plan, mais son risque (arrêt de production réel) provoque souvent la résistance de la direction. Le parallel test active le site de secours sans interrompre la production, la simulation ne teste que certaines mesures, et le walk-through reste procédural.",
      "difficulte": 1,
      "pourquoi": [
        "Insuffisant : le walk-through reste une revue procédurale sur papier.",
        "Insuffisant : le parallel test active le site de secours sans arrêter la production, donc sans preuve complète.",
        "Bonne réponse : seul le full-interruption bascule réellement les opérations et prouve le plan de bout en bout — d'où son risque.",
        "Insuffisant : la simulation ne teste que certaines mesures sur scénario, sans bascule réelle."
      ]
    },
    {
      "q": "Lors d'un read-through test du DRP, quel bénéfice N'EST PAS attendu ?",
      "choix": [
        "Identifier les informations obsolètes du plan",
        "Valider le fonctionnement réel du basculement vers le site de secours",
        "Rafraîchir les responsabilités des personnels clés",
        "Repérer les rôles DR laissés vacants par des départs"
      ],
      "reponse": 1,
      "explication": "Le read-through est une simple relecture du plan : il rafraîchit les responsabilités, met à jour les informations obsolètes et détecte les rôles à réattribuer après un départ. Il ne teste jamais le basculement réel — seuls les tests parallel et full-interruption activent le site de secours.",
      "difficulte": 2,
      "pourquoi": [
        "Bénéfice réel : elle met en évidence les informations obsolètes du plan.",
        "Bonne réponse : un read-through ne teste jamais le basculement réel — seuls les tests parallel et full-interruption activent le site de secours.",
        "Bénéfice réel du read-through : la relecture rafraîchit les responsabilités des personnels clés.",
        "Bénéfice réel : elle révèle les rôles laissés vacants par des départs."
      ]
    },
    {
      "q": "Un employé reçoit en pleine nuit des dizaines de notifications MFA qu'il n'a pas sollicitées. Quelle est la consigne CORRECTE à lui enseigner ?",
      "choix": [
        "Approuver une notification pour faire cesser les alertes",
        "Ne jamais approuver et signaler immédiatement l'activité",
        "Éteindre son téléphone jusqu'au matin",
        "Désactiver la MFA sur son compte"
      ],
      "reponse": 1,
      "explication": "C'est une attaque par MFA fatigue : l'attaquant possède déjà le mot de passe et bombarde de notifications en espérant une approbation. La consigne est de ne jamais approuver une demande non initiée et de la signaler immédiatement, car elle prouve que le mot de passe est compromis. Approuver donne l'accès à l'attaquant ; éteindre le téléphone ou désactiver la MFA n'adresse pas la compromission.",
      "difficulte": 2,
      "pourquoi": [
        "Réponse catastrophique : approuver donne l'accès à l'attaquant, qui possède déjà le mot de passe.",
        "Bonne réponse : ne jamais approuver une demande non sollicitée et signaler immédiatement — le mot de passe est compromis.",
        "Fausse échappatoire : éteindre le téléphone n'adresse pas la compromission du mot de passe.",
        "Réponse dangereuse : désactiver la MFA supprimerait la dernière barrière protégeant le compte."
      ]
    },
    {
      "q": "Quel dispositif de sécurité physique empêche le piggybacking grâce à un double jeu de portes ?",
      "choix": [
        "Le turnstile",
        "Le PIDAS",
        "Le bollard",
        "L'access control vestibule (mantrap)"
      ],
      "reponse": 3,
      "explication": "Le sas d'accès (mantrap) utilise deux portes successives, souvent sous contrôle d'un garde, pour empêcher qu'une personne n'en suive une autre (piggybacking) et peut piéger un individu suspect. Le tourniquet limite le passage à une personne mais sans sas, le bollard bloque les véhicules, et le PIDAS est un système de clôtures multiples.",
      "difficulte": 1,
      "pourquoi": [
        "Piège proche : le tourniquet limite le passage à une personne mais sans double porte ni capacité de rétention.",
        "Hors sujet : le PIDAS est un système de clôtures de détection périmétrique.",
        "Hors sujet : le bollard arrête les véhicules.",
        "Bonne réponse : le sas à double porte empêche le piggybacking et peut retenir un individu suspect."
      ]
    },
    {
      "q": "Un analyste arrive devant un poste de travail compromis encore allumé et suspecté d'héberger un malware actif. Selon l'ordre de volatilité, que doit-il collecter EN PREMIER ?",
      "choix": [
        "Le contenu de la mémoire vive (RAM) et des connexions réseau actives",
        "Les sauvegardes de la veille",
        "Une image bit à bit du disque dur",
        "Les journaux archivés sur le serveur central"
      ],
      "reponse": 0,
      "explication": "L'ordre de volatilité impose de collecter d'abord les données les plus éphémères : registres CPU, cache, RAM, tables de connexions réseau. La RAM disparaît à la mise hors tension et contient le malware actif, les clés de chiffrement et les sessions. Le disque, les sauvegardes et les logs archivés sont persistants et peuvent être collectés ensuite sans perte.",
      "difficulte": 2,
      "pourquoi": [
        "Bonne réponse : RAM et connexions actives disparaissent à l'extinction — l'ordre de volatilité impose de les capturer d'abord.",
        "Hors ordre : les sauvegardes sont parmi les données les plus durables.",
        "Hors ordre : le disque est persistant, son image peut être réalisée après la capture des données volatiles.",
        "Hors ordre : les journaux archivés sont persistants et récupérables à tout moment."
      ]
    },
    {
      "q": "Pendant un procès, l'avocat de la défense démontre qu'un disque saisi est resté deux jours dans le coffre de voiture d'un enquêteur sans aucune mention dans le registre. Quelle est la conséquence la PLUS probable ?",
      "choix": [
        "Le tribunal ordonne une nouvelle copie du disque",
        "Aucune, tant que le hash du disque est intact",
        "La preuve risque d'être déclarée inadmissible pour rupture de la chain of custody",
        "L'enquêteur doit simplement signer le registre a posteriori"
      ],
      "reponse": 2,
      "explication": "La chain of custody exige une documentation continue de chaque manipulation et de chaque lieu de stockage. Un trou de deux jours non documenté permet à la défense d'alléguer une altération possible : la preuve risque le rejet. Le hash prouve l'intégrité des données mais pas l'absence d'accès physique non autorisé, et une signature rétroactive ou une nouvelle copie ne réparent pas la rupture.",
      "difficulte": 2,
      "pourquoi": [
        "Inutile : une nouvelle copie hériterait du même doute sur l'original.",
        "Piège technique : le hash prouve l'intégrité logique, pas l'absence d'accès physique pendant la période non tracée.",
        "Bonne réponse : une période non documentée rompt la chain of custody et expose la preuve au rejet.",
        "Illusoire : une signature rétroactive ne répare pas une rupture de traçabilité."
      ]
    },
    {
      "q": "Avant et après la création d'une image forensique d'un disque, l'enquêteur calcule une empreinte cryptographique (hash). Quel est l'objectif PRINCIPAL ?",
      "choix": [
        "Chiffrer l'image pour la protéger pendant le transport",
        "Prouver que la copie est identique à l'original et que la preuve n'a pas été modifiée",
        "Signer numériquement le rapport d'investigation",
        "Accélérer la restauration ultérieure de l'image"
      ],
      "reponse": 1,
      "explication": "Le hash calculé sur l'original puis sur la copie démontre que l'image est bit à bit identique et que l'intégrité de la preuve est préservée (règle « accurate »). Un hash ne chiffre rien, n'accélère aucune restauration, et la signature du rapport est un usage distinct de la cryptographie.",
      "difficulte": 1,
      "pourquoi": [
        "Confusion cryptographique : un hash ne chiffre rien, il produit une empreinte.",
        "Bonne réponse : des empreintes identiques avant et après prouvent que la copie est fidèle et la preuve intacte (règle « accurate »).",
        "Usage distinct : la signature du rapport est une autre application de la cryptographie.",
        "Hors sujet : le hash n'a aucun effet sur la vitesse de restauration."
      ]
    },
    {
      "q": "Quel dispositif matériel garantit qu'aucune écriture n'est envoyée vers un disque saisi pendant son acquisition forensique ?",
      "choix": [
        "Un write blocker",
        "Un TPM",
        "Un dongle HSM",
        "Un duplicateur RAID"
      ],
      "reponse": 0,
      "explication": "Le write blocker (bloqueur d'écriture) s'intercale entre le disque saisi et la station d'analyse : il laisse passer les lectures mais bloque physiquement toute écriture, préservant l'intégrité de l'original. Le HSM protège des clés cryptographiques, le TPM est une puce de sécurité de la carte mère, et un duplicateur RAID n'offre aucune garantie de non-écriture.",
      "difficulte": 1,
      "pourquoi": [
        "Bonne réponse : le write blocker laisse passer les lectures et bloque physiquement toute écriture vers le disque saisi.",
        "Hors sujet : le TPM est une puce de sécurité de la carte mère.",
        "Hors sujet : le HSM protège des clés cryptographiques.",
        "Insuffisant : un duplicateur RAID copie sans garantir l'absence d'écriture."
      ]
    },
    {
      "q": "Classez ces sources de preuves de la PLUS volatile à la moins volatile : (1) fichiers sur disque, (2) registres et cache CPU, (3) table ARP et connexions réseau, (4) sauvegardes sur bande.",
      "choix": [
        "2, 1, 3, 4",
        "3, 2, 4, 1",
        "1, 2, 3, 4",
        "2, 3, 1, 4"
      ],
      "reponse": 3,
      "explication": "L'ordre de volatilité va des registres et caches CPU (perdus en nanosecondes), aux structures réseau et à la RAM (perdues à l'extinction), puis aux fichiers sur disque (persistants) et enfin aux sauvegardes et archives (les plus durables). On collecte toujours dans cet ordre pour ne rien perdre.",
      "difficulte": 2,
      "pourquoi": [
        "Désordonné : les structures réseau disparaissent avant les fichiers persistants.",
        "Inversé en tête : les registres CPU s'évanouissent avant les tables réseau.",
        "Inversé : les fichiers sur disque sont bien moins volatils que les registres et le réseau.",
        "Bonne réponse : registres et cache CPU, puis structures réseau, puis fichiers sur disque, enfin sauvegardes — du plus éphémère au plus durable."
      ]
    },
    {
      "q": "Un administrateur bien intentionné a examiné directement le disque original d'un serveur compromis, ouvrant plusieurs fichiers avant l'arrivée de l'équipe forensique. Quel est l'impact PRINCIPAL ?",
      "choix": [
        "L'incident doit être requalifié en événement",
        "Aucun, car il possédait les droits d'administration",
        "Les métadonnées (horodatages d'accès) ont été altérées, fragilisant l'admissibilité de la preuve",
        "Le disque doit simplement être défragmenté avant analyse"
      ],
      "reponse": 2,
      "explication": "Chaque ouverture de fichier modifie les horodatages d'accès et potentiellement d'autres métadonnées : la preuve originale a été altérée, ce que la partie adverse exploitera. C'est précisément pourquoi on travaille sur des copies bit à bit avec write blocker. Les droits d'administration n'autorisent pas à manipuler une preuve, et les autres réponses sont sans rapport.",
      "difficulte": 2,
      "pourquoi": [
        "Hors sujet : la qualification incident/événement ne dépend pas de cette manipulation.",
        "Faux : les droits d'administration n'autorisent pas la manipulation d'une preuve.",
        "Bonne réponse : chaque ouverture altère les horodatages d'accès, fragilisant l'admissibilité de l'original.",
        "Absurde techniquement : défragmenter détruirait davantage de métadonnées."
      ]
    },
    {
      "q": "Un SIEM reçoit trois événements anodins pris isolément : une connexion VPN depuis l'étranger, une élévation de privilèges, puis un transfert sortant volumineux à 3 h du matin. Quelle capacité du SIEM permet d'en faire UNE alerte critique ?",
      "choix": [
        "L'agrégation",
        "La corrélation",
        "La rétention",
        "La normalisation"
      ],
      "reponse": 1,
      "explication": "La corrélation relie des événements provenant de sources différentes pour révéler un schéma d'attaque qu'aucun événement isolé ne trahit. L'agrégation collecte et regroupe les logs, la normalisation les convertit dans un format commun, et la rétention en assure la conservation — trois prérequis de la corrélation, mais pas l'analyse elle-même.",
      "difficulte": 1,
      "pourquoi": [
        "Prérequis, pas analyse : l'agrégation collecte et regroupe sans détecter de schéma.",
        "Bonne réponse : la corrélation relie des événements isolément anodins pour révéler le schéma d'attaque.",
        "Hors sujet : la rétention conserve les logs dans le temps.",
        "Prérequis, pas analyse : la normalisation convertit les formats sans relier les événements."
      ]
    },
    {
      "q": "Quel élément déclenche typiquement une campagne de threat hunting ?",
      "choix": [
        "Une demande de l'audit interne",
        "La détection d'un malware par l'antivirus",
        "Une hypothèse fondée sur la threat intelligence, en l'absence de toute alerte",
        "Une alerte critique du SIEM"
      ],
      "reponse": 2,
      "explication": "Le threat hunting est proactif : l'analyste formule une hypothèse (« si le groupe X nous ciblait avec ses TTP connues, quelles traces trouverait-on ? ») et cherche des preuves de compromission qui ont échappé aux outils. Une alerte SIEM ou antivirus déclenche la réponse aux incidents, pas la chasse ; l'audit poursuit d'autres objectifs.",
      "difficulte": 2,
      "pourquoi": [
        "Hors sujet : une demande d'audit poursuit des objectifs de conformité.",
        "Piège réactif : une détection antivirus relève de la réponse aux incidents.",
        "Bonne réponse : le threat hunting part d'une hypothèse fondée sur la threat intelligence, sans aucune alerte préalable.",
        "Piège réactif : une alerte SIEM déclenche la réponse aux incidents, pas la chasse proactive."
      ]
    },
    {
      "q": "Lors d'une investigation, les horodatages des logs de trois serveurs se contredisent, rendant la chronologie de l'attaque inexploitable. Quel contrôle aurait DÛ être en place ?",
      "choix": [
        "La compression des journaux",
        "Le chiffrement des journaux en transit",
        "L'augmentation de la durée de rétention",
        "La synchronisation de tous les systèmes sur une source de temps commune (NTP)"
      ],
      "reponse": 3,
      "explication": "Sans synchronisation NTP sur une source de temps fiable, la corrélation des événements entre systèmes devient impossible et la chronologie présentée au tribunal est contestable. La compression, le chiffrement et la rétention protègent les logs mais ne résolvent pas l'incohérence temporelle.",
      "difficulte": 2,
      "pourquoi": [
        "Hors sujet : la compression économise l'espace sans corriger les horloges.",
        "Hors sujet : le chiffrement protège la confidentialité en transit, pas la cohérence temporelle.",
        "Hors sujet : la rétention allonge la conservation sans aligner les horloges.",
        "Bonne réponse : la synchronisation NTP sur une source commune rend les horodatages corrélables et opposables."
      ]
    },
    {
      "q": "Quelle est la MEILLEURE protection contre un attaquant qui efface les journaux locaux d'un serveur compromis pour couvrir ses traces ?",
      "choix": [
        "Transmettre les logs en temps réel vers un serveur de logs centralisé en écriture seule",
        "Activer la rotation automatique des journaux",
        "Restreindre la taille maximale des fichiers de logs",
        "Sauvegarder les journaux chaque nuit"
      ],
      "reponse": 0,
      "explication": "L'envoi en temps réel vers un collecteur centralisé, idéalement en écriture seule (WORM), garantit qu'une copie des événements existe hors de portée de l'attaquant, même s'il purge les logs locaux. Une sauvegarde nocturne laisse une fenêtre d'effacement, et la rotation ou la limitation de taille détruisent elles-mêmes des données.",
      "difficulte": 2,
      "pourquoi": [
        "Bonne réponse : l'envoi en temps réel vers un serveur centralisé en écriture seule met les logs hors de portée de l'attaquant.",
        "Contre-productif : la rotation détruit elle-même des données.",
        "Contre-productif : limiter la taille provoque l'écrasement des événements.",
        "Fenêtre d'exposition : une sauvegarde nocturne laisse à l'attaquant toute la journée pour effacer."
      ]
    },
    {
      "q": "Une faille critique est activement exploitée et l'équipe doit appliquer un correctif en urgence, sans passer par le circuit d'approbation habituel. Que prévoit un processus de change management mature ?",
      "choix": [
        "Laisser l'administrateur décider seul sans documentation",
        "Interdire toute dérogation : le circuit normal doit être suivi",
        "Une procédure de changement d'urgence : implémenter rapidement, puis documenter et faire approuver rétroactivement",
        "Attendre la prochaine réunion du comité des changements"
      ],
      "reponse": 2,
      "explication": "Les processus matures prévoient l'emergency change : le correctif est appliqué sans délai pour traiter le risque, mais le changement est documenté, revu et approuvé a posteriori afin de préserver la traçabilité et de détecter d'éventuels effets de bord. Interdire toute urgence ou attendre le comité laisse la faille ouverte ; agir sans documentation détruit la maîtrise des configurations.",
      "difficulte": 2,
      "pourquoi": [
        "Anarchie : agir sans documentation détruit la maîtrise des configurations.",
        "Rigidité dangereuse : interdire toute dérogation laisse la faille activement exploitée ouverte.",
        "Bonne réponse : l'emergency change permet d'agir sans délai puis de documenter et faire approuver rétroactivement.",
        "Trop lent : attendre le comité laisse la fenêtre d'exploitation ouverte."
      ]
    },
    {
      "q": "Un audit révèle qu'une règle firewall en production ne correspond à aucune demande de changement approuvée. Que devez-vous faire EN PREMIER ?",
      "choix": [
        "Supprimer immédiatement la règle non autorisée",
        "Mettre à jour la documentation pour régulariser la règle",
        "Sanctionner l'administrateur firewall",
        "Enquêter sur l'origine et l'impact de la règle avant toute action"
      ],
      "reponse": 3,
      "explication": "Un changement non autorisé peut être une erreur bénigne… ou la trace d'une compromission (persistance d'un attaquant). Il faut d'abord enquêter : qui l'a créée, quand, et quel trafic elle autorise. La supprimer aveuglément pourrait casser un service ou alerter un attaquant, sanctionner est prématuré sans faits, et régulariser sans enquête masquerait un incident potentiel.",
      "difficulte": 3,
      "pourquoi": [
        "Précipité : supprimer aveuglément peut casser un service ou alerter un attaquant qui utilise cette règle.",
        "Dangereux : régulariser sans enquête masquerait un incident potentiel.",
        "Prématuré : sanctionner sans faits établis est injuste et contre-productif.",
        "Bonne réponse : enquêter d'abord — la règle peut être une erreur bénigne ou la persistance d'une compromission."
      ]
    },
    {
      "q": "Dans un processus de gestion des changements, quel organe évalue l'impact des changements proposés et les approuve ou les rejette ?",
      "choix": [
        "Le service desk",
        "Le Change Advisory Board (CAB)",
        "L'équipe de réponse aux incidents",
        "Le comité d'audit"
      ],
      "reponse": 1,
      "explication": "Le CAB réunit des représentants des équipes techniques et métier pour évaluer l'impact, les risques et la planification des changements proposés, puis les approuver ou les rejeter. L'équipe IR gère les incidents, le comité d'audit supervise le contrôle interne, et le service desk enregistre les demandes sans pouvoir d'approbation.",
      "difficulte": 1,
      "pourquoi": [
        "Hors rôle : le service desk enregistre les demandes sans pouvoir d'approbation.",
        "Bonne réponse : le CAB évalue impact, risques et planification des changements, puis les approuve ou les rejette.",
        "Hors rôle : l'équipe IR gère les incidents, pas les changements.",
        "Hors rôle : le comité d'audit supervise le contrôle interne."
      ]
    },
    {
      "q": "Un utilisateur signale que sa machine est « lente et bizarre ». Dans le cycle de réponse aux incidents, quelle est la PREMIÈRE action de l'équipe ?",
      "choix": [
        "Vérifier et qualifier le signalement pour déterminer s'il s'agit d'un incident réel",
        "Activer le plan de reprise après sinistre",
        "Notifier le régulateur",
        "Réinstaller immédiatement le poste"
      ],
      "reponse": 0,
      "explication": "Nous sommes en phase de détection : une alerte ou une plainte n'est pas forcément un incident. Il faut d'abord trier et vérifier (triage) — la lenteur peut venir d'un disque plein comme d'un malware. Le DRP concerne les sinistres majeurs, la réinstallation détruirait les preuves, et la notification réglementaire n'intervient qu'après qualification d'un incident avec exposition de données.",
      "difficulte": 1,
      "pourquoi": [
        "Bonne réponse : en phase de détection, on trie et vérifie d'abord — une lenteur n'est pas forcément un incident.",
        "Disproportionné : le DRP se déclenche pour un sinistre déclaré, pas pour un signalement non qualifié.",
        "Hors phase : la notification réglementaire suppose un incident qualifié avec exposition de données.",
        "Destructeur : réinstaller efface les preuves avant toute qualification."
      ]
    },
    {
      "q": "Une violation de données personnelles de clients européens est confirmée. Dans quelle phase du cycle de réponse aux incidents s'inscrit la notification à l'autorité de contrôle sous 72 heures ?",
      "choix": [
        "Reporting",
        "Remediation",
        "Mitigation",
        "Detection"
      ],
      "reponse": 0,
      "explication": "La notification aux autorités (comme l'exigence RGPD de 72 heures) et aux personnes concernées relève de la phase Reporting, qui couvre les obligations légales, réglementaires et la communication aux parties prenantes. La détection identifie l'incident, la mitigation le contient, et la remédiation traite la cause racine.",
      "difficulte": 2,
      "pourquoi": [
        "Bonne réponse : la notification aux autorités (dont l'exigence RGPD de 72 heures) relève de la phase Reporting.",
        "Hors phase : la remediation traite la cause racine.",
        "Hors phase : la mitigation contient l'incident.",
        "Hors phase : la détection identifie l'incident, elle ne notifie pas."
      ]
    },
    {
      "q": "Quand la session de lessons learned doit-elle idéalement se tenir après un incident majeur ?",
      "choix": [
        "Pendant la phase de mitigation, tant que l'attaque est en cours",
        "Rapidement après l'incident, avant que les souvenirs ne s'estompent, avec un facilitateur",
        "Uniquement si l'incident a causé une perte financière",
        "Six mois plus tard, pour avoir du recul"
      ],
      "reponse": 1,
      "explication": "NIST SP 800-61 recommande de mener les lessons learned rapidement après la clôture, idéalement animées par un facilitateur formé, car les détails s'oublient vite. Attendre six mois dégrade la qualité des enseignements, tout incident majeur mérite une revue, et pendant la mitigation l'équipe doit contenir l'attaque, pas l'analyser rétrospectivement.",
      "difficulte": 1,
      "pourquoi": [
        "Hors phase : pendant la mitigation, l'équipe contient l'attaque, elle ne l'analyse pas rétrospectivement.",
        "Bonne réponse : NIST SP 800-61 recommande une revue rapide, animée par un facilitateur, avant que les souvenirs ne s'estompent.",
        "Trop étroit : tout incident majeur mérite une revue, avec ou sans perte financière.",
        "Trop tard : six mois d'attente dégradent la qualité des enseignements."
      ]
    },
    {
      "q": "Un ransomware vient d'être confirmé sur trois serveurs de fichiers et continue de chiffrer des partages réseau. Quelle est l'action IMMÉDIATE la plus appropriée ?",
      "choix": [
        "Éteindre tous les serveurs du datacenter par précaution",
        "Payer la rançon pour limiter les dégâts",
        "Restaurer immédiatement les sauvegardes sur les mêmes serveurs",
        "Isoler les serveurs et segments affectés du réseau pour stopper la propagation"
      ],
      "reponse": 3,
      "explication": "La mitigation impose de contenir : isoler les machines et segments touchés stoppe le chiffrement des partages tout en préservant les preuves en mémoire. Payer la rançon n'est jamais la réponse attendue, restaurer sur des systèmes encore compromis exposerait les sauvegardes au chiffrement, et éteindre tout le datacenter est disproportionné et détruit les preuves volatiles.",
      "difficulte": 2,
      "pourquoi": [
        "Disproportionné : éteindre tout le datacenter détruit les preuves volatiles et étend l'indisponibilité.",
        "Jamais la réponse attendue : payer n'arrête pas le chiffrement en cours et n'offre aucune garantie.",
        "Prématuré : restaurer sur des systèmes encore compromis exposerait les sauvegardes au chiffrement.",
        "Bonne réponse : isoler les serveurs et segments touchés stoppe la propagation tout en préservant les preuves volatiles."
      ]
    },
    {
      "q": "Quelle capacité distingue le MIEUX un EDR d'un antivirus traditionnel ?",
      "choix": [
        "Il filtre le spam entrant",
        "Il compare les fichiers à une base de signatures",
        "Il surveille en continu le comportement des endpoints, permet l'investigation et la réponse à distance (isolation, kill process)",
        "Il chiffre les disques des postes de travail"
      ],
      "reponse": 2,
      "explication": "L'EDR (Endpoint Detection and Response) enregistre en continu l'activité des endpoints (processus, connexions, modifications), détecte les comportements suspects au-delà des signatures, et offre des capacités de réponse à distance : isoler la machine, tuer un processus, collecter des artefacts. L'antivirus classique se limite essentiellement aux signatures ; le chiffrement et l'anti-spam sont d'autres outils.",
      "difficulte": 2,
      "pourquoi": [
        "Hors sujet : le filtrage du spam relève de la passerelle de messagerie.",
        "Trop étroit : la comparaison à des signatures est le propre de l'antivirus classique.",
        "Bonne réponse : l'EDR surveille en continu le comportement des endpoints et permet investigation et réponse à distance.",
        "Hors sujet : le chiffrement de disque est un autre contrôle."
      ]
    },
    {
      "q": "Votre SOC passe des heures chaque jour à trier manuellement des alertes de phishing identiques : vérifier l'expéditeur, détoner la pièce jointe, bloquer l'URL. Quelle solution apporte le MEILLEUR gain ?",
      "choix": [
        "Externaliser le triage de niveau 1 à un prestataire MSSP",
        "Relever les seuils d'alerte pour réduire le volume à traiter",
        "Un SOAR avec un playbook automatisant le triage et la réponse aux phishings",
        "Recruter davantage d'analystes de niveau 1"
      ],
      "reponse": 2,
      "explication": "Les tâches répétitives et bien définies sont le cas d'usage idéal du SOAR : un runbook automatise l'analyse de l'expéditeur, la détonation en sandbox et le blocage, libérant les analystes pour les cas complexes. Recruter ne résout pas la répétitivité, relever les seuils crée des false negatives, et l'externalisation déplace le coût du triage répétitif sans le supprimer.",
      "difficulte": 1,
      "pourquoi": [
        "Vraie mais sous-optimale : externaliser déplace le coût du triage répétitif sans l'éliminer — l'automatisation reste le meilleur gain.",
        "Dangereux : relever les seuils crée des faux négatifs en masquant de vrais phishings.",
        "Bonne réponse : un playbook SOAR automatise le triage répétitif et libère les analystes pour les cas complexes.",
        "Coûteux et non scalable : recruter ne supprime pas la répétitivité des tâches."
      ]
    },
    {
      "q": "Quelle différence de DÉPLOIEMENT distingue un NIPS d'un NIDS ?",
      "choix": [
        "Le NIPS est placé en coupure (inline) sur le chemin du trafic, le NIDS analyse une copie passive du trafic",
        "Le NIDS bloque le trafic, le NIPS se contente d'alerter",
        "Le NIPS analyse une copie du trafic via un port SPAN, le NIDS est en coupure",
        "Les deux sont toujours installés sur les endpoints"
      ],
      "reponse": 0,
      "explication": "Pour bloquer le trafic malveillant, l'IPS doit être inline, en coupure sur le chemin des paquets. L'IDS, purement détectif, analyse une copie du trafic reçue via un port SPAN ou un TAP réseau, sans pouvoir intervenir. Les versions réseau (NIDS/NIPS) sont des équipements ou sondes réseau, pas des agents endpoint, et la dernière proposition inverse les rôles.",
      "difficulte": 2,
      "pourquoi": [
        "Bonne réponse : le NIPS doit être inline pour bloquer, le NIDS observe passivement une copie du trafic.",
        "Inversion des rôles : c'est l'IPS qui bloque, l'IDS se contente d'alerter.",
        "Inversion : c'est le NIDS qui analyse une copie via un port SPAN, et le NIPS qui est en coupure.",
        "Faux : les versions réseau sont des sondes ou équipements, pas des agents endpoint."
      ]
    },
    {
      "q": "Pourquoi un false negative est-il considéré comme PLUS dangereux qu'un false positive pour un système de détection ?",
      "choix": [
        "Il fausse les métriques de conformité présentées à l'audit",
        "Il génère trop d'alertes et fatigue les analystes",
        "Il déclenche des réponses automatiques injustifiées sur des systèmes sains",
        "Une attaque réelle passe inaperçue, sans aucune alerte ni réponse"
      ],
      "reponse": 3,
      "explication": "Le false negative est le silence face à une activité réellement malveillante : l'attaque progresse sans détection ni réponse, parfois pendant des mois. Le false positive gaspille du temps d'analyste (c'est lui qui cause la fatigue d'alertes), mais l'activité était bénigne. Les réponses automatiques injustifiées sont une conséquence des faux positifs, et l'impact sur les métriques d'audit est secondaire face à une intrusion non détectée.",
      "difficulte": 1,
      "pourquoi": [
        "Vrai mais secondaire : l'impact sur les métriques d'audit est négligeable face à une intrusion non détectée.",
        "Inversion : la surcharge d'alertes et la fatigue sont le symptôme des faux positifs.",
        "Inversion : des réponses injustifiées sur des systèmes sains sont une conséquence des faux positifs.",
        "Bonne réponse : le faux négatif laisse une attaque réelle progresser sans alerte ni réponse, parfois pendant des mois."
      ]
    },
    {
      "q": "Sur le plan juridique, quelle distinction rend un honeypot défendable ?",
      "choix": [
        "Un honeypot est illégal dans tous les cas",
        "L'enticement (offrir une cible tentante) est acceptable, l'entrapment (induire à commettre un délit) ne l'est pas",
        "L'entrapment est acceptable, l'enticement ne l'est pas",
        "Un honeypot doit héberger de vraies données pour être crédible juridiquement"
      ],
      "reponse": 1,
      "explication": "L'enticement consiste à laisser une opportunité visible à un attaquant qui avait déjà l'intention de s'introduire : c'est admis. L'entrapment consiste à pousser quelqu'un à commettre un délit qu'il n'aurait pas commis autrement : c'est une défense juridique valable pour l'accusé et donc à éviter. Les honeypots ne sont pas illégaux en soi et ne doivent jamais contenir de vraies données sensibles.",
      "difficulte": 3,
      "pourquoi": [
        "Absolu faux : les honeypots ne sont pas illégaux en soi.",
        "Bonne réponse : l'enticement (opportunité offerte à qui avait déjà l'intention) est admis, l'entrapment (induire au délit) ne l'est pas.",
        "Inversion exacte des deux notions juridiques.",
        "Contresens dangereux : un honeypot ne doit jamais contenir de vraies données sensibles."
      ]
    },
    {
      "q": "Le BIA fixe un RPO de 4 heures pour la base de commandes, mais les sauvegardes actuelles s'exécutent toutes les 24 heures. Quelle est la MEILLEURE conclusion ?",
      "choix": [
        "Il existe un écart : il faut des sauvegardes au moins toutes les 4 heures ou une réplication continue (journaling/mirroring)",
        "La stratégie est conforme puisque les sauvegardes sont quotidiennes",
        "Il faut augmenter le RPO à 24 heures pour s'aligner sur l'existant",
        "Le RPO ne concerne pas les sauvegardes"
      ],
      "reponse": 0,
      "explication": "Avec des sauvegardes quotidiennes, une panne peut faire perdre jusqu'à 24 heures de données, soit six fois le RPO de 4 heures fixé par le métier. Il faut combler l'écart par des sauvegardes plus fréquentes ou une réplication quasi continue. Ajuster le RPO à la contrainte technique inverserait la logique : c'est le besoin métier qui dicte la solution, pas l'inverse.",
      "difficulte": 3,
      "pourquoi": [
        "Bonne réponse : il faut aligner la solution sur le besoin métier — sauvegardes toutes les 4 heures ou réplication continue.",
        "Illusion de conformité : des sauvegardes quotidiennes exposent à 24 heures de perte, six fois le RPO.",
        "Logique inversée : c'est le besoin métier qui dicte la solution technique, pas l'inverse.",
        "Faux : le RPO définit précisément la fréquence de protection des données requise."
      ]
    },
    {
      "q": "Une application critique a un RTO de 12 heures et le budget DR est contraint. Quel site de secours répond au besoin au MEILLEUR coût ?",
      "choix": [
        "Cold site",
        "Hot site",
        "Site redondant actif-actif",
        "Warm site"
      ],
      "reponse": 3,
      "explication": "Le warm site, avec équipements et liens préconfigurés mais sans données à jour, s'active en une douzaine d'heures : il satisfait un RTO de 12 heures à un coût bien moindre qu'un hot site. Le cold site demande des semaines (RTO non tenu), et le hot site ou le site redondant, quasi immédiats, seraient surdimensionnés pour ce budget.",
      "difficulte": 2,
      "pourquoi": [
        "RTO non tenu : un cold site demande des semaines d'activation.",
        "Vrai mais trop cher : le hot site tient le RTO mais dépasse le budget contraint.",
        "Vrai mais trop cher : le site actif-actif est l'option la plus onéreuse, surdimensionnée ici.",
        "Bonne réponse : le warm site s'active en une douzaine d'heures et satisfait le RTO de 12 heures au meilleur coût."
      ]
    },
    {
      "q": "Full backup dimanche soir, différentielles chaque soir de la semaine. Un serveur tombe mercredi à midi. Combien de jeux de sauvegarde faut-il restaurer, et lesquels ?",
      "choix": [
        "Un seul : la différentielle de mardi soir",
        "Deux : le full de dimanche puis la différentielle de mardi soir",
        "Trois : le full puis les différentielles de lundi et mardi",
        "Quatre : le full puis les différentielles de lundi et mardi et mercredi"
      ],
      "reponse": 1,
      "explication": "Chaque différentielle cumule TOUS les changements depuis le dernier full : la différentielle de mardi soir contient donc aussi ceux de lundi. Deux jeux suffisent : le full de dimanche puis la dernière différentielle disponible (mardi soir). Restaurer chaque différentielle successivement est la logique des incrémentales, et la différentielle seule ne contient pas le socle complet.",
      "difficulte": 2,
      "pourquoi": [
        "Incomplet : la différentielle seule ne contient pas le socle du full.",
        "Bonne réponse : la différentielle cumule tout depuis le full — le full de dimanche plus la différentielle de mardi soir suffisent.",
        "Inutile : la différentielle de lundi est déjà incluse dans celle de mardi.",
        "Piège incrémental : rejouer chaque différentielle successivement est la logique des incrémentales."
      ]
    },
    {
      "q": "Une grappe RAID 5 est composée de quatre disques de 2 To. Quelle capacité utile obtient-on ?",
      "choix": [
        "8 To",
        "2 To",
        "6 To",
        "4 To"
      ],
      "reponse": 2,
      "explication": "En RAID 5, l'équivalent d'un disque est consommé par la parité répartie : capacité utile = (n − 1) × taille du disque, soit (4 − 1) × 2 To = 6 To. 8 To serait du RAID 0 sans redondance, 4 To correspondrait à un RAID 10 ou à un miroir de deux paires, et 2 To ne correspond à aucune configuration standard ici.",
      "difficulte": 2,
      "pourquoi": [
        "Piège RAID 0 : 8 To supposerait l'absence de tout bloc de parité.",
        "Aucune configuration standard ne donne 2 To utiles avec quatre disques de 2 To.",
        "Bonne réponse : (n − 1) × taille = 3 × 2 To = 6 To, l'équivalent d'un disque étant consommé par la parité répartie.",
        "Piège RAID 10 : 4 To correspondrait à un miroir de deux paires."
      ]
    },
    {
      "q": "Un administrateur propose de stocker la base de données financière sur un volume RAID 0 « pour la performance ». Pourquoi devez-vous refuser ?",
      "choix": [
        "Le RAID 0 n'offre aucune redondance : la panne d'un seul disque détruit toutes les données",
        "Le RAID 0 est incompatible avec les bases de données",
        "Le RAID 0 est plus lent que le RAID 5",
        "Le RAID 0 nécessite au moins cinq disques"
      ],
      "reponse": 0,
      "explication": "Le RAID 0 (striping) répartit les données sur plusieurs disques uniquement pour la vitesse : sans miroir ni parité, la défaillance d'un seul disque rend l'ensemble du volume irrécupérable. Pour des données financières critiques, il faut au minimum du RAID 1, 5, 6 ou 10. Le RAID 0 est justement rapide, fonctionne dès deux disques, et n'a pas d'incompatibilité applicative particulière.",
      "difficulte": 1,
      "pourquoi": [
        "Bonne réponse : le striping sans redondance perd tout le volume à la première panne — inacceptable pour des données financières.",
        "Faux : aucune incompatibilité applicative particulière.",
        "Faux : le RAID 0 est précisément le plus rapide, sans calcul de parité.",
        "Faux : le RAID 0 fonctionne dès deux disques."
      ]
    },
    {
      "q": "Le métier exige un RPO de quelques minutes pour la base transactionnelle, mais le budget ne permet pas de maintenir un serveur de base de données vivant sur le site distant. Quelle solution choisir ?",
      "choix": [
        "Sauvegardes différentielles hebdomadaires",
        "Remote mirroring avec serveur actif distant",
        "Electronic vaulting quotidien",
        "Remote journaling : transfert fréquent des journaux de transactions vers le site distant"
      ],
      "reponse": 3,
      "explication": "Le remote journaling transfère les journaux de transactions toutes les quelques minutes vers le site distant, permettant de reconstruire la base à quelques minutes près — sans le coût d'un serveur distant vivant qu'exige le remote mirroring (exclu ici par le budget). L'electronic vaulting quotidien et les différentielles hebdomadaires laissent des heures ou des jours de perte de données.",
      "difficulte": 3,
      "pourquoi": [
        "RPO non tenu : des différentielles hebdomadaires laissent des jours de perte.",
        "Vrai mais hors budget : le mirroring tient le RPO mais exige le serveur distant actif exclu par la contrainte.",
        "RPO non tenu : un vaulting quotidien laisse jusqu'à 24 heures de perte.",
        "Bonne réponse : le transfert fréquent des journaux de transactions tient un RPO de quelques minutes sans serveur distant vivant."
      ]
    },
    {
      "q": "Votre DRP vient d'être rédigé et n'a JAMAIS été testé. Par quel type de test devez-vous commencer ?",
      "choix": [
        "Un parallel test sur le site de secours",
        "Un read-through / tabletop pour vérifier la cohérence du plan sans aucun risque",
        "Aucun test avant un an d'existence du plan",
        "Un full-interruption test pour une preuve immédiate"
      ],
      "reponse": 1,
      "explication": "La progression des tests va toujours du moins risqué au plus probant : on commence par la relecture et l'exercice sur table pour détecter les incohérences, rôles vacants et informations obsolètes, avant d'engager des tests opérationnels. Lancer un full-interruption sur un plan jamais validé ferait courir un risque réel de sinistre auto-infligé.",
      "difficulte": 2,
      "pourquoi": [
        "Prématuré : le parallel test suppose un plan déjà validé sur papier.",
        "Bonne réponse : la progression va du moins risqué au plus probant — on commence par la relecture et l'exercice sur table.",
        "Négligence : un plan non testé n'offre aucune assurance, attendre un an est indéfendable.",
        "Risque inacceptable : basculer réellement sur un plan jamais validé peut créer un sinistre auto-infligé."
      ]
    },
    {
      "q": "Lors du dernier exercice DR, l'équipe a activé le site de secours et fait tourner les applications critiques dessus, pendant que la production continuait normalement sur le site principal. De quel test s'agit-il ?",
      "choix": [
        "Simulation",
        "Structured walk-through",
        "Parallel test",
        "Full-interruption test"
      ],
      "reponse": 2,
      "explication": "Le parallel test relocalise le personnel et active réellement le site de secours, mais sans interrompre la production : les deux sites tournent en parallèle. La simulation ne teste que certaines mesures sur scénario, le walk-through reste procédural, et le full-interruption bascule réellement les opérations en arrêtant le site principal.",
      "difficulte": 2,
      "pourquoi": [
        "Insuffisant : la simulation déroule un scénario sans activer réellement le site de secours.",
        "Insuffisant : le walk-through reste une revue procédurale.",
        "Bonne réponse : le parallel test active réellement le site de secours pendant que la production continue sur le site principal.",
        "Trop loin : le full-interruption aurait arrêté la production du site principal."
      ]
    },
    {
      "q": "Un incendie majeur frappe le datacenter un samedi à 2 h du matin. Le DRP doit préciser SANS ambiguïté qui peut lancer la bascule vers le site de secours. Quel élément du plan répond à ce besoin ?",
      "choix": [
        "Le registre des risques de l'organisation",
        "La désignation de l'autorité habilitée à déclarer le désastre, avec ses suppléants",
        "Le contrat d'abonnement au hot site",
        "La matrice RACI du projet BCP"
      ],
      "reponse": 1,
      "explication": "Le DRP doit désigner nommément qui a l'autorité de déclarer le désastre et d'activer le plan, avec des suppléants joignables à tout moment : sans cela, la bascule est retardée ou déclenchée à tort. La matrice RACI et le registre des risques sont des outils de gouvernance amont, et le contrat de hot site ne dit pas qui décide.",
      "difficulte": 2,
      "pourquoi": [
        "Outil amont : le registre des risques ne confère aucune autorité opérationnelle.",
        "Bonne réponse : le DRP doit nommer l'autorité habilitée à déclarer le désastre, avec des suppléants joignables à tout moment.",
        "Hors sujet : le contrat de hot site ne dit pas qui décide de basculer.",
        "Outil amont : la matrice RACI du projet BCP ne désigne pas l'autorité d'activation en pleine nuit."
      ]
    },
    {
      "q": "Quelle affirmation compare CORRECTEMENT le BCP et le DRP ?",
      "choix": [
        "Le DRP couvre les processus métier et le BCP la restauration technique",
        "BCP et DRP sont deux noms du même document",
        "Le BCP maintient les fonctions critiques de l'ENTREPRISE ; le DRP restaure l'infrastructure TECHNOLOGIQUE — le BCP a le périmètre le plus large",
        "Le DRP englobe le BCP"
      ],
      "reponse": 2,
      "explication": "Le BCP couvre la survie des processus métier dans leur ensemble (personnel, locaux, fournisseurs, communication), tandis que le DRP est son volet technologique : restaurer l'infrastructure IT critique. Le BCP englobe donc le DRP, pas l'inverse, et la dernière proposition inverse exactement leurs définitions.",
      "difficulte": 1,
      "pourquoi": [
        "Inversion des définitions : le BCP couvre le métier et le DRP la technique, pas l'inverse.",
        "Faux : ce sont deux documents distincts aux périmètres différents.",
        "Bonne réponse : le BCP maintient les fonctions critiques de l'entreprise, le DRP restaure l'infrastructure technologique.",
        "Inversion de périmètre : c'est le BCP qui englobe le DRP."
      ]
    },
    {
      "q": "Un agent de sécurité est contraint, sous la menace d'une arme, d'ouvrir l'accès à la salle serveurs. Quel dispositif lui permet d'alerter la sécurité SANS mettre sa vie en danger ?",
      "choix": [
        "Déclencher l'alarme incendie générale",
        "Négocier avec l'agresseur pour gagner du temps",
        "Refuser d'ouvrir et appeler la police devant l'agresseur",
        "Un duress code : un code d'ouverture alternatif qui ouvre la porte ET déclenche une alerte silencieuse"
      ],
      "reponse": 3,
      "explication": "Le duress code est conçu exactement pour cette situation : l'agent coopère en apparence — la vie humaine prime sur tout actif — tout en alertant discrètement la sécurité via un code alternatif ou un geste convenu. Refuser ou négocier met sa vie en danger, et l'alarme incendie révèle l'alerte à l'agresseur tout en déclenchant une évacuation inadaptée.",
      "difficulte": 2,
      "pourquoi": [
        "Contre-productif : l'alarme incendie révèle l'alerte et déclenche une évacuation inadaptée.",
        "Risqué : négocier expose l'agent sans alerter la sécurité.",
        "Danger de mort : refuser devant un agresseur armé met la vie de l'agent en jeu — la vie humaine prime sur tout actif.",
        "Bonne réponse : le duress code ouvre la porte en apparence tout en déclenchant une alerte silencieuse."
      ]
    },
    {
      "q": "Une dirigeante part négocier un contrat dans un pays connu pour l'espionnage économique. Quelle est la MEILLEURE pratique concernant ses équipements ?",
      "choix": [
        "Lui fournir des appareils de prêt dédiés au voyage, contenant le strict minimum de données, réinitialisés au retour",
        "Emporter une copie chiffrée de toutes les données de l'entreprise par précaution",
        "Utiliser uniquement le wi-fi de l'hôtel, réputé plus sûr que les réseaux mobiles",
        "Emporter son ordinateur habituel protégé par un mot de passe robuste"
      ],
      "reponse": 0,
      "explication": "L'appareil de prêt (loaner/burner device) avec données minimales limite l'exposition en cas de fouille, de saisie, de vol ou de compromission par des dispositifs de surveillance ; il est réinitialisé au retour. L'ordinateur habituel transporte trop de données, en emporter une copie complète aggrave le risque, et le wi-fi d'hôtel à l'étranger doit être considéré comme hostile.",
      "difficulte": 2,
      "pourquoi": [
        "Bonne réponse : des appareils de prêt au contenu minimal, réinitialisés au retour, réduisent l'exposition à la fouille, au vol ou à la surveillance.",
        "Aggravant : emporter une copie complète maximise l'impact d'une saisie.",
        "Faux : le wi-fi d'hôtel à l'étranger doit être présumé hostile.",
        "Exposition excessive : l'ordinateur habituel transporte l'historique complet des données de l'entreprise."
      ]
    },
    {
      "q": "Un consultant doit franchir la frontière d'un pays où les douanes peuvent légalement exiger le déverrouillage des appareils. Son disque est intégralement chiffré. Quelle est la MEILLEURE analyse ?",
      "choix": [
        "Le chiffrement ne protège pas contre une injonction légale de déverrouillage : il faut voyager sans données sensibles et les récupérer ensuite par canal sécurisé",
        "Le chiffrement suffit : les douanes ne pourront rien lire",
        "Il doit cacher les données dans une partition dissimulée",
        "Il doit refuser le contrôle en invoquant le secret professionnel"
      ],
      "reponse": 0,
      "explication": "Face à une injonction légale de déverrouillage, le voyageur devra fournir l'accès sous peine de refoulement, de saisie ou de poursuites : le chiffrement ne protège que contre l'accès non autorisé, pas contre la contrainte légale. La bonne stratégie est de ne transporter aucune donnée sensible et de la récupérer sur place via un canal sécurisé (VPN). Refuser ou dissimuler expose à des sanctions et aggrave la situation.",
      "difficulte": 3,
      "pourquoi": [
        "Bonne réponse : voyager sans données sensibles et les récupérer sur place par canal sécurisé neutralise la contrainte légale.",
        "Illusion technique : le chiffrement cède devant une injonction légale de déverrouillage.",
        "Aggravant : une partition dissimulée découverte expose à des sanctions.",
        "Risqué : refuser expose au refoulement, à la saisie ou aux poursuites."
      ]
    },
    {
      "q": "Un administrateur systèmes confie qu'un inconnu le menace de révéler des informations personnelles s'il ne fournit pas ses identifiants d'accès. Quelle réponse organisationnelle est la MEILLEURE ?",
      "choix": [
        "Ignorer l'affaire tant qu'aucun accès frauduleux n'est constaté",
        "Le licencier immédiatement car il représente un risque",
        "Lui demander de gérer la situation en privé",
        "Disposer d'un canal de signalement confidentiel et d'un accompagnement, afin que les employés victimes de coercition alertent sans crainte de sanction"
      ],
      "reponse": 3,
      "explication": "La coercition et l'extorsion transforment un employé loyal en menace interne involontaire. La meilleure défense est un programme qui encourage le signalement précoce — canal confidentiel, soutien, absence de représailles — permettant à la sécurité de protéger l'employé et l'organisation. Le licencier dissuaderait tout futur signalement, et ignorer ou privatiser le problème laisse l'attaquant progresser.",
      "difficulte": 3,
      "pourquoi": [
        "Négligence : attendre un accès frauduleux laisse l'attaquant progresser.",
        "Contre-productif : licencier la victime dissuaderait tout signalement futur.",
        "Abandon : privatiser le problème isole l'employé face à l'extorsion.",
        "Bonne réponse : un canal confidentiel sans représailles permet aux victimes de coercition d'alerter tôt et de protéger l'organisation."
      ]
    },
    {
      "q": "Quelle mesure de protection est la PLUS pertinente pour des collaborateurs expatriés travaillant durablement dans une région instable ?",
      "choix": [
        "L'interdiction de tout déplacement professionnel",
        "Un dispositif complet : itinéraires partagés, check-ins réguliers, point de contact d'urgence, veille géopolitique et plan d'évacuation",
        "Souscrire une assurance couvrant les frais médicaux à l'étranger",
        "Un simple briefing sécurité avant le départ"
      ],
      "reponse": 1,
      "explication": "La protection du personnel à l'étranger est un programme continu : suivi des itinéraires, points de contact réguliers (check-ins), veille sur la situation locale, assistance médicale et plan d'évacuation activable rapidement. Un briefing unique est insuffisant pour une présence durable, l'interdiction générale est rarement réaliste, et une assurance médicale indemnise après coup sans rien prévenir.",
      "difficulte": 2,
      "pourquoi": [
        "Irréaliste : l'interdiction générale des déplacements est rarement tenable pour le métier.",
        "Bonne réponse : un dispositif continu — itinéraires, check-ins, contact d'urgence, veille et plan d'évacuation — protège dans la durée.",
        "Vrai mais trop étroit : l'assurance indemnise après coup, elle ne prévient ni ne protège.",
        "Insuffisant : un briefing unique ne couvre pas une présence durable en zone instable."
      ]
    },
    {
      "q": "Le SOC d'une banque déploie un assistant d'IA générative qui résume les alertes et propose une qualification (vrai ou faux positif). Après trois mois, le RSSI constate que les analystes de niveau 1 clôturent des alertes en se fiant uniquement au résumé de l'IA, dont plusieurs se sont révélés inexacts. Quelle est la MEILLEURE mesure à prendre ?",
      "choix": [
        "Faire réentraîner le modèle par l'éditeur pour améliorer la précision des résumés",
        "Limiter l'assistant aux alertes de sévérité faible, où une erreur est sans conséquence",
        "Exiger une validation humaine documentée avant toute clôture d'alerte et cantonner l'IA à l'aide au triage",
        "Retirer l'assistant d'IA du SOC jusqu'à ce que son taux d'erreur soit nul"
      ],
      "reponse": 2,
      "explication": "L'IA générative peut halluciner ou omettre des éléments : elle accélère le triage, mais la décision de clôture — qui peut masquer une vraie intrusion — doit rester humaine et documentée (human-in-the-loop). Exiger un taux d'erreur nul est irréaliste, réentraîner améliore sans supprimer le risque résiduel, et la sévérité initiale étant elle-même une estimation, une alerte « faible » mal clôturée peut être le premier signal d'une attaque majeure.",
      "difficulte": 3,
      "pourquoi": [
        "Réponse de technicien : améliorer le modèle réduit l'erreur sans jamais l'éliminer — l'enjeu du manager est le contrôle du processus, pas la précision.",
        "Vraie mais contextuellement fausse : la sévérité est elle-même une estimation — une alerte « faible » mal clôturée peut être le premier signal d'une intrusion majeure.",
        "Bonne réponse : maintenir l'humain dans la boucle sur la décision de clôture traite le risque de faux négatif tout en conservant le bénéfice de l'automatisation.",
        "Absolu irréaliste : aucun modèle n'atteindra un taux d'erreur nul, et retirer l'outil sacrifie le gain de productivité sans traiter le problème de gouvernance."
      ]
    },
    {
      "q": "Une attaque par ransomware avec double extorsion frappe un laboratoire pharmaceutique : les fichiers sont chiffrés ET les attaquants prouvent avoir exfiltré des données d'essais cliniques. Les sauvegardes sont intactes et la restauration est en cours. Le directeur des opérations propose de clore l'incident dès la fin de la restauration. En tant que RSSI, quelle est votre MEILLEURE réponse ?",
      "choix": [
        "Rappeler que l'exfiltration constitue une violation de données déclenchant des obligations de notification et une gestion de crise, indépendamment de la restauration",
        "Demander le paiement de la rançon pour obtenir la suppression des données exfiltrées",
        "Accepter : la restauration des sauvegardes rétablit la disponibilité, objectif du plan de reprise",
        "Faire vérifier l'intégrité des systèmes restaurés avant de prononcer la clôture"
      ],
      "reponse": 0,
      "explication": "La double extorsion transforme un incident de disponibilité en violation de confidentialité : les données exfiltrées imposent notification aux autorités et aux personnes concernées, analyse juridique et gestion de crise, que la restauration ne traite pas. Payer n'offre aucune garantie de suppression et n'éteint pas ces obligations ; vérifier l'intégrité est une bonne pratique de recovery mais ne règle pas davantage le volet divulgation.",
      "difficulte": 3,
      "pourquoi": [
        "Bonne réponse : les données exfiltrées imposent notification, évaluation juridique et gestion de crise — la restauration ne traite qu'un des deux volets de l'attaque.",
        "Jamais la réponse attendue : payer n'offre aucune garantie de suppression et n'éteint pas les obligations légales de notification.",
        "Vraie mais contextuellement fausse : la restauration règle la disponibilité, mais la double extorsion fait de l'incident une violation de confidentialité que la reprise ne résout pas.",
        "Vraie mais trop étroite : vérifier l'intégrité est une bonne pratique de recovery qui ne traite pas le volet divulgation des données."
      ]
    },
    {
      "q": "Un incident est détecté dans l'environnement IaaS d'un e-commerçant : des conteneurs compromis sont automatiquement détruits et recréés par l'auto-scaling toutes les quelques minutes. L'équipe forensique doit préserver les preuves. Que devez-vous faire EN PREMIER ?",
      "choix": [
        "Redéployer immédiatement l'environnement depuis l'infrastructure as code pour rétablir le service",
        "Attendre le rapport d'investigation du fournisseur cloud, contractuellement responsable de l'infrastructure",
        "Suspendre l'auto-scaling, prendre des snapshots des instances actives et préserver les journaux via les API du fournisseur avant toute destruction",
        "Demander au fournisseur cloud la saisie physique des disques des serveurs hôtes"
      ],
      "reponse": 2,
      "explication": "En environnement cloud éphémère, la volatilité est extrême : chaque cycle d'auto-scaling détruit des preuves. La préservation passe par les mécanismes logiques du fournisseur — suspension du scaling, snapshots, export des journaux via API — avant la destruction automatique. La saisie physique est irréaliste en infrastructure mutualisée, le modèle de responsabilité partagée laisse l'investigation des charges de travail au client, et restaurer avant de collecter détruirait les preuves.",
      "difficulte": 3,
      "pourquoi": [
        "Hors phase : restaurer avant d'avoir préservé détruirait les preuves — la recovery vient après la collecte.",
        "Piège de responsabilité partagée : le CSP gère l'infrastructure, mais l'investigation des charges de travail du client incombe au client.",
        "Bonne réponse : en environnement éphémère, figer l'auto-scaling, snapshotter et exporter les logs via API est la seule préservation possible avant destruction automatique.",
        "Irréaliste en cloud mutualisé : le CSP ne saisira pas des disques physiques partagés entre clients — la préservation passe par ses mécanismes logiques."
      ]
    },
    {
      "q": "Un playbook SOAR isole automatiquement tout serveur présentant des indicateurs de compromission. Pendant le pic des soldes, un faux positif a isolé le serveur de paiement, causant deux heures d'interruption des ventes. La direction exige que cela ne se reproduise pas, sans renoncer à la réactivité de l'automatisation. Quelle est la MEILLEURE évolution ?",
      "choix": [
        "Maintenir l'isolation automatique mais exclure définitivement le serveur de paiement du périmètre du SOAR",
        "Conserver l'automatisation complète mais affiner les règles de détection pour réduire les faux positifs",
        "Désactiver l'isolation automatique et revenir à un traitement entièrement manuel des alertes",
        "Introduire une approbation humaine pour les actions de confinement sur les actifs critiques, en conservant l'automatisation complète sur les autres"
      ],
      "reponse": 3,
      "explication": "L'automatisation graduée aligne le niveau de contrôle humain sur la criticité métier : les actifs standards restent confinés automatiquement (réactivité), tandis que les actions à fort impact sur les actifs critiques exigent un jugement humain. Revenir au tout-manuel sacrifie la réactivité exigée, affiner les règles réduit les faux positifs sans jamais les éliminer, et exclure le serveur de paiement le prive de tout confinement rapide alors qu'il est la cible la plus attractive.",
      "difficulte": 3,
      "pourquoi": [
        "Dangereux : exclure le serveur de paiement le prive de tout confinement rapide alors qu'il est précisément la cible la plus attractive.",
        "Vraie mais insuffisante : affiner les règles réduit les faux positifs sans jamais les éliminer — le prochain isolera encore un actif critique.",
        "Sur-réaction : abandonner toute automatisation sacrifie la réactivité exigée par la direction pour un incident unique.",
        "Bonne réponse : l'automatisation graduée aligne le contrôle humain sur la criticité métier — réactivité préservée, jugement humain là où l'impact l'exige."
      ]
    },
    {
      "q": "Le DRP technique d'un assureur est testé chaque année avec succès, mais aucun membre du comité exécutif n'a jamais participé à un exercice. Le RSSI craint qu'en cas de ransomware majeur, les décisions de direction (paiement, communication, arrêt d'activité) soient improvisées. Quelle est la MEILLEURE initiative ?",
      "choix": [
        "Faire suivre au comité exécutif une formation de sensibilisation à la cybersécurité",
        "Organiser un exercice sur table de gestion de crise avec le comité exécutif, autour d'un scénario de ransomware exigeant leurs décisions",
        "Ajouter au DRP une annexe détaillant les décisions que la direction devra prendre en crise",
        "Planifier un full-interruption test pour démontrer à la direction la gravité d'une crise réelle"
      ],
      "reponse": 1,
      "explication": "Le problème identifié n'est pas technique mais décisionnel : ce sont les arbitrages de la direction qui n'ont jamais été répétés. Un exercice sur table de crise fait travailler le comité exécutif sur ses propres décisions — payer ou non, communiquer, arrêter l'activité — sans aucun risque opérationnel. Le full-interruption teste la bascule technique déjà éprouvée, une annexe non exercée est ignorée en crise, et la sensibilisation transmet des connaissances sans entraîner la décision sous pression.",
      "difficulte": 3,
      "pourquoi": [
        "Vraie mais trop générique : la sensibilisation transmet des connaissances, elle n'entraîne pas la prise de décision sous pression.",
        "Bonne réponse : le tabletop de crise fait répéter à la direction ses propres arbitrages — paiement, communication, arrêt — sans aucun risque opérationnel.",
        "Vraie mais insuffisante : documenter les décisions ne remplace pas leur répétition — en crise, un document jamais exercé est ignoré.",
        "Hors cible : le full-interruption teste la bascule technique, déjà éprouvée — il n'exerce pas la prise de décision des dirigeants."
      ]
    },
    {
      "q": "Une violation de données touche les clients d'un groupe présent dans l'Union européenne, au Canada et à Singapour, où les délais et seuils de notification diffèrent. Le directeur juridique et le RSSI se réunissent en cellule de crise. Que doit faire le groupe EN PREMIER ?",
      "choix": [
        "Attendre la fin complète de l'investigation pour ne communiquer que des faits définitifs",
        "Notifier immédiatement toutes les autorités de tous les pays pour démontrer sa bonne foi",
        "Notifier d'abord l'autorité du pays du siège et laisser chaque filiale gérer localement",
        "Cartographier avec le juridique les obligations de notification applicables par juridiction et bâtir un calendrier de conformité coordonné"
      ],
      "reponse": 3,
      "explication": "Face à des obligations divergentes, la première action est de les cartographier avec le juridique : quelles autorités, quels seuils, quels délais (dont les 72 heures du RGPD), pour bâtir un calendrier coordonné. Notifier partout sans qualification expose à des déclarations inexactes, attendre la fin de l'investigation fait dépasser les délais impératifs, et des notifications décentralisées non coordonnées produisent des messages contradictoires exploités par régulateurs et médias.",
      "difficulte": 3,
      "pourquoi": [
        "Dangereux : attendre la fin de l'investigation fait dépasser les délais impératifs comme les 72 heures du RGPD.",
        "Précipité : notifier partout sans qualification expose à des déclarations inexactes ou non requises, difficiles à corriger ensuite.",
        "Piège de décentralisation : des notifications non coordonnées produisent des messages contradictoires exploités par les régulateurs et les médias.",
        "Bonne réponse : les obligations divergent par juridiction — seule une cartographie juridique coordonnée permet de tenir chaque délai sans contradiction entre pays."
      ]
    },
    {
      "q": "Un audit interne révèle que des analystes du SOC collent des extraits de journaux contenant des adresses IP internes et des noms de comptes dans un service public d'IA générative pour accélérer leurs analyses. Quelle est la MEILLEURE réponse du RSSI ?",
      "choix": [
        "Encadrer l'usage par une politique et fournir un service d'IA approuvé garantissant la confidentialité des données soumises",
        "Sanctionner les analystes concernés pour violation de la politique de classification des données",
        "Autoriser la pratique, car les journaux techniques ne contiennent pas de données personnelles",
        "Bloquer l'accès à tous les services d'IA générative depuis le réseau de l'entreprise"
      ],
      "reponse": 0,
      "explication": "Le besoin d'efficacité des analystes est réel : la réponse managériale consiste à le canaliser vers un service approuvé, encadré par une politique claire, plutôt qu'à le nier. Le blocage total pousse l'usage vers des canaux personnels incontrôlés (shadow AI), la sanction sans alternative rend la pratique clandestine, et les journaux révèlent l'architecture interne et peuvent contenir des données personnelles ou sensibles.",
      "difficulte": 3,
      "pourquoi": [
        "Bonne réponse : canaliser le besoin vers un service approuvé, encadré par une politique, traite la cause — le besoin d'efficacité — tout en protégeant les données.",
        "Vraie mais contre-productive en premier recours : sanctionner sans offrir d'alternative pousse la pratique dans la clandestinité au lieu de l'éliminer.",
        "Faux : journaux, adresses internes et noms de comptes révèlent l'architecture et peuvent contenir des données personnelles ou sensibles.",
        "Réflexe de blocage : l'interdiction totale pousse l'usage vers des canaux personnels non maîtrisés (shadow AI) et prive le SOC d'un gain réel."
      ]
    },
    {
      "q": "Après une double extorsion, le négociateur mandaté obtient des attaquants la promesse de supprimer les données volées contre paiement. Le directeur financier soutient le paiement « pour éviter la notification aux clients ». Quelle est la MEILLEURE analyse du RSSI ?",
      "choix": [
        "Le paiement est acceptable si l'assurance cyber le prend en charge",
        "Le paiement n'apporte aucune garantie de suppression et n'éteint pas les obligations légales de notification : la violation demeure",
        "Le paiement est justifié si son coût est inférieur à celui de la notification et de la gestion de crise",
        "Le paiement doit être refusé uniquement parce qu'il pourrait financer des groupes sous sanctions internationales"
      ],
      "reponse": 1,
      "explication": "La promesse d'un criminel n'est pas vérifiable, et surtout l'exfiltration constitue déjà une violation de données : les obligations de notification s'imposent que la rançon soit payée ou non. Le calcul coût-bénéfice du DAF repose donc sur une prémisse fausse, la prise en charge par l'assurance ne change ni la fiabilité de la promesse ni le droit applicable, et le risque de sanctions internationales est réel mais n'est pas la seule raison de refuser.",
      "difficulte": 3,
      "pourquoi": [
        "Hors sujet : le financement par l'assurance ne change ni la fiabilité de la promesse ni les obligations légales.",
        "Bonne réponse : la promesse d'un criminel n'est pas vérifiable, et l'exfiltration constitue une violation dont la notification s'impose indépendamment du paiement.",
        "Piège du calcul court-termiste : l'analyse coût-bénéfice ignore que la violation reste juridiquement notifiable, payée ou non.",
        "Vraie mais trop étroite : le risque de sanctions est réel, mais la notification resterait due même si le paiement était licite."
      ]
    },
    {
      "q": "Un RSSI migre les applications critiques de son organisation vers un fournisseur cloud. Sachant que les investigations futures dépendront des capacités du fournisseur (journaux, snapshots, assistance forensique), à quel moment ces exigences doivent-elles PRINCIPALEMENT être traitées ?",
      "choix": [
        "Lors du premier incident, en s'appuyant sur l'équipe de réponse du fournisseur",
        "Lors de la configuration technique, en activant toutes les options de journalisation disponibles",
        "Lors de la négociation du contrat, en y intégrant les clauses de journalisation, de préservation et d'assistance à l'investigation",
        "Lors de l'audit annuel du fournisseur, en vérifiant ses certifications SOC 2"
      ],
      "reponse": 2,
      "explication": "En cloud, le client ne contrôle ni l'infrastructure ni les preuves qu'elle contient : ses droits d'investigation n'existent que s'ils sont contractualisés avant la signature — journalisation, durées de rétention, préservation sur demande, assistance forensique. Attendre le premier incident laisse l'investigation sans recours, les certifications attestent des contrôles du fournisseur mais pas des droits du client, et activer la journalisation ne crée aucun droit opposable.",
      "difficulte": 3,
      "pourquoi": [
        "Trop tard : découvrir en pleine crise que le contrat ne prévoit ni préservation ni assistance laisse l'investigation sans recours.",
        "Réponse de technicien : activer la journalisation ne crée aucun droit d'accès, de rétention ni d'assistance opposable au fournisseur.",
        "Bonne réponse : sans clause contractuelle, le client n'a aucun levier pour exiger préservation, journaux ou assistance pendant une crise — ces capacités se négocient avant la signature.",
        "Vraie mais insuffisante : les certifications attestent des contrôles du fournisseur, pas des droits d'investigation du client."
      ]
    },
    {
      "q": "Un ransomware paralyse simultanément les filiales d'un groupe industriel dans trois pays. Le RSSI groupe découvre que deux équipes locales ont entamé, chacune de leur côté, des échanges avec les attaquants, et que les communications publiques des filiales divergent. Quelle est l'action la PLUS importante ?",
      "choix": [
        "Laisser chaque filiale gérer selon son droit local, mieux adapté à son contexte",
        "Interrompre immédiatement toute négociation avec les attaquants dans toutes les filiales",
        "Activer la structure de commandement de crise du groupe : un décideur unique, des canaux uniques de négociation et de communication",
        "Publier un communiqué mondial unique pour reprendre le contrôle du narratif"
      ],
      "reponse": 2,
      "explication": "En crise multi-entités, la première urgence est l'unité de commandement : sans décideur unique et canaux uniques, les négociations parallèles s'affaiblissent mutuellement et les communications contradictoires détruisent la crédibilité du groupe. Le droit local s'applique aux notifications mais ne justifie pas des négociations dispersées, la décision d'arrêter ou de poursuivre la négociation revient à la cellule de crise une fois constituée, et communiquer avant d'avoir unifié les faits aggrave les contradictions.",
      "difficulte": 3,
      "pourquoi": [
        "Piège de décentralisation : le droit local s'applique aux notifications, mais des négociations parallèles non coordonnées affaiblissent le groupe face à l'attaquant.",
        "Vraie mais prématurée : arrêter ou poursuivre la négociation est une décision de la cellule de crise — qui doit d'abord exister et parler d'une seule voix.",
        "Bonne réponse : en crise multi-entités, la première urgence est l'unité de commandement — sans décideur et canaux uniques, négociations et communication se sabotent mutuellement.",
        "Hors priorité : communiquer avant d'avoir unifié le commandement et les faits risque d'aggraver les contradictions."
      ]
    },
    {
      "q": "Votre PRA prévoit un basculement vers un site chaud avec un RTO de 4 h. Lors d'un exercice réel de bascule, la restauration technique réussit en 3 h, mais les équipes métier découvrent que les procédures opérationnelles ne couvrent pas la ressaisie des transactions des 45 dernières minutes (RPO), bloquant la reprise pendant 6 h supplémentaires. Quelle est la MEILLEURE conclusion à porter au comité de pilotage ?",
      "choix": [
        "L'exercice révèle un écart entre reprise technique et reprise métier : les procédures de continuité d'activité doivent intégrer la reconstitution des données dans le périmètre testé, et le RTO global doit être re-mesuré de bout en bout",
        "Le RPO doit être réduit à zéro en investissant dans une réplication synchrone pour éliminer toute ressaisie",
        "Les équipes métier doivent être formées à ressaisir plus vite pour tenir le RTO",
        "L'exercice est un succès : le RTO technique de 4 h est respecté et l'infrastructure a basculé sans incident"
      ],
      "reponse": 0,
      "explication": "Le RTO qui compte est celui de la reprise du SERVICE métier, pas de la seule infrastructure. L'exercice a précisément rempli son rôle : révéler que le plan technique et les procédures métier ne sont pas alignés. La conclusion managériale est de corriger le périmètre du plan et de re-mesurer le RTO réel de bout en bout.",
      "pourquoi": [
        "Correct : la bonne conclusion relie reprise technique et reprise métier, corrige le plan et ré-évalue l'objectif de bout en bout — la lecture d'un manager de la continuité.",
        "Techniquement vrai mais disproportionné : la réplication synchrone répond à un problème de procédures par un investissement lourd, sans analyse coût/bénéfice ni validation que le RPO actuel est inacceptable pour le métier.",
        "Trop étroit : « ressaisir plus vite » traite le symptôme par la pression sur les équipes au lieu de corriger le défaut structurel du plan.",
        "Piège de l'indicateur partiel : déclarer le succès sur le seul RTO technique masque une indisponibilité métier réelle de 9 h — c'est exactement l'angle mort que l'exercice devait révéler."
      ],
      "difficulte": 3
    },
    {
      "q": "Une attaque détruit simultanément la production et les sauvegardes en ligne de votre filiale (compte d'administration compromis). Seules les bandes hors ligne mensuelles, stockées à 200 km, subsistent — avec jusqu'à 30 jours de perte de données. La direction exige que cela ne se reproduise « jamais ». Quelle recommandation structurelle est PRIORITAIRE ?",
      "choix": [
        "Passer à des sauvegardes horaires répliquées en temps réel sur un second datacenter connecté",
        "Mettre en place une architecture de sauvegarde 3-2-1 renforcée par une copie immuable (WORM) ou air-gappée, avec des comptes de sauvegarde isolés de l'administration de production et des tests de restauration réguliers",
        "Chiffrer toutes les sauvegardes pour empêcher l'attaquant de les lire",
        "Souscrire une cyber-assurance couvrant la reconstruction des données"
      ],
      "reponse": 1,
      "explication": "Le facteur aggravant est que les sauvegardes en ligne partageaient la surface d'attaque de la production (même plan d'administration). La réponse structurelle : immuabilité/air gap, séparation des identités d'administration de sauvegarde, et tests de restauration — le cœur de la résilience anti-ransomware.",
      "pourquoi": [
        "Piège du « plus fréquent = mieux » : une réplication temps réel connectée aurait été détruite elle aussi — elle réduit le RPO mais pas le risque de destruction simultanée, qui est le problème posé.",
        "Correct : immuabilité/air gap + isolation des comptes de sauvegarde + tests répondent exactement au mode de défaillance observé.",
        "Hors sujet : le chiffrement protège la confidentialité des sauvegardes, pas leur disponibilité face à une destruction volontaire.",
        "Transfert de risque incomplet : l'assurance indemnise financièrement mais ne restaure ni les données ni l'activité — elle complète, elle ne remplace pas la résilience."
      ],
      "difficulte": 3
    }
  ],
  "quizEn": [
    {
      "q": "A security analyst responds to a compromised server that is still powered on. According to the order of volatility, which evidence should be collected FIRST?",
      "choix": [
        "Archived log files stored on a remote server",
        "A bit-level image of the hard drive",
        "Backup tapes from the previous night",
        "Contents of RAM and active network connections"
      ],
      "reponse": 3,
      "explication": "L'ordre de volatilité impose de capturer d'abord les données les plus éphémères : la mémoire vive et l'état réseau disparaissent à la mise hors tension, alors que le disque, les logs distants et les bandes sont persistants. La RAM contient en outre les processus malveillants actifs et les clés de chiffrement.",
      "difficulte": 2,
      "pourquoi": [
        "Hors ordre : les logs distants sont persistants et récupérables après la phase volatile.",
        "Hors ordre : le disque est persistant, son image peut attendre.",
        "Hors ordre : les bandes de sauvegarde sont les données les plus durables.",
        "Bonne réponse : RAM et connexions actives disparaissent à l'extinction — à capturer en premier selon l'ordre de volatilité."
      ]
    },
    {
      "q": "During cross-examination, opposing counsel establishes that a seized hard drive was left unattended in an analyst's office for a weekend with no log entry. What is the MOST likely outcome?",
      "choix": [
        "The evidence will be admitted because the hash values still match",
        "The evidence may be ruled inadmissible due to a break in the chain of custody",
        "The analyst will be required to re-image the drive",
        "The court will order a new investigation"
      ],
      "reponse": 1,
      "explication": "Toute période non documentée dans la chain of custody permet à la partie adverse d'alléguer une altération possible de la preuve, qui risque alors le rejet. La concordance des hashes prouve l'intégrité logique des données mais pas l'absence d'accès physique ou de substitution pendant la période non tracée.",
      "difficulte": 1,
      "pourquoi": [
        "Piège technique : des hashes concordants prouvent l'intégrité logique, pas l'absence d'accès physique pendant la période non tracée.",
        "Bonne réponse : une période non documentée rompt la chain of custody et expose la preuve au rejet.",
        "Inutile : réimager le disque n'efface pas le doute créé sur l'original.",
        "Disproportionné : le tribunal écarte la preuve, il n'ordonne pas de nouvelle enquête pour autant."
      ]
    },
    {
      "q": "An investigator needs to examine a running workstation suspected of containing fileless malware. What should the investigator do FIRST?",
      "choix": [
        "Capture a memory dump while the system is still running",
        "Power off the workstation to freeze its state",
        "Run an antivirus scan to identify the malware",
        "Disconnect the hard drive and attach it to a write blocker"
      ],
      "reponse": 0,
      "explication": "Un fileless malware ne réside qu'en mémoire : éteindre la machine détruirait la seule preuve existante. Il faut d'abord capturer la RAM pendant que le système tourne. Le write blocker concerne l'acquisition du disque (inutile ici puisque rien n'est écrit sur le disque), et un scan antivirus modifierait l'état du système.",
      "difficulte": 2,
      "pourquoi": [
        "Bonne réponse : capturer la RAM pendant que le système tourne préserve la seule preuve existante.",
        "Destructeur : éteindre efface la mémoire, seule localisation d'un fileless malware.",
        "Altérant : un scan antivirus modifie l'état du système et peut détruire des preuves.",
        "Hors cible : le write blocker sert à l'acquisition disque — or rien n'est écrit sur le disque ici."
      ]
    },
    {
      "q": "Which rule of evidence requires that the original document, rather than a copy, be presented in court whenever it is available?",
      "choix": [
        "The hearsay rule",
        "The exclusionary rule",
        "The best evidence rule",
        "The parol evidence rule"
      ],
      "reponse": 2,
      "explication": "Le best evidence rule exige la présentation de l'original plutôt que d'une copie lorsque c'est possible. Le hearsay concerne le ouï-dire, le parol evidence rule interdit de contredire un contrat écrit par des accords oraux, et l'exclusionary rule écarte les preuves collectées illégalement.",
      "difficulte": 1,
      "pourquoi": [
        "Piège de vocabulaire : le hearsay concerne le ouï-dire.",
        "Piège de vocabulaire : l'exclusionary rule écarte les preuves collectées illégalement.",
        "Bonne réponse : le best evidence rule exige l'original plutôt qu'une copie lorsqu'il est disponible.",
        "Piège de vocabulaire : le parol evidence rule protège les contrats écrits des accords oraux contradictoires."
      ]
    },
    {
      "q": "A government agency suspects that a financial institution has violated banking regulations and launches an inquiry. What type of investigation is this?",
      "choix": [
        "Administrative",
        "Civil",
        "Criminal",
        "Regulatory"
      ],
      "reponse": 3,
      "explication": "Une investigation réglementaire est déclenchée par une agence gouvernementale ou un régulateur qui soupçonne une violation des règles sectorielles. L'investigation administrative est interne à l'organisation, la criminelle est menée par les forces de l'ordre pour un crime, et la civile oppose deux parties privées.",
      "difficulte": 1,
      "pourquoi": [
        "Hors périmètre : l'investigation administrative est interne à l'organisation.",
        "Hors périmètre : la civile oppose deux parties privées.",
        "Hors périmètre : la criminelle est menée par les forces de l'ordre pour un crime.",
        "Bonne réponse : une agence gouvernementale qui vérifie le respect de règles sectorielles mène une investigation réglementaire."
      ]
    },
    {
      "q": "A SIEM converts logs from firewalls, servers, and applications into a common format before analysis. Which SIEM capability does this describe?",
      "choix": [
        "Retention",
        "Normalization",
        "Aggregation",
        "Correlation"
      ],
      "reponse": 1,
      "explication": "La normalisation convertit les journaux de formats hétérogènes vers un format commun exploitable. L'agrégation collecte et centralise les logs de sources multiples, la corrélation relie les événements entre eux pour détecter des schémas d'attaque, et la rétention assure leur conservation dans le temps.",
      "difficulte": 2,
      "pourquoi": [
        "Hors sujet : la rétention conserve les logs dans le temps.",
        "Bonne réponse : la normalisation convertit les logs hétérogènes vers un format commun exploitable.",
        "Piège d'étape : l'agrégation collecte et centralise, sans convertir les formats.",
        "Hors phase : la corrélation relie des événements déjà normalisés."
      ]
    },
    {
      "q": "Which term BEST describes a file hash, an IP address, or a domain name that suggests a system may have been breached?",
      "choix": [
        "An indicator of compromise (IoC)",
        "A threat vector",
        "An attack surface",
        "A vulnerability signature"
      ],
      "reponse": 0,
      "explication": "Un indicateur de compromission (IoC) est un artefact observable — hash de fichier malveillant, adresse IP de command and control, nom de domaine — qui suggère qu'une intrusion a eu lieu. Le threat vector est le chemin d'attaque, l'attack surface l'ensemble des points exposés, et « vulnerability signature » n'est pas un terme consacré.",
      "difficulte": 1,
      "pourquoi": [
        "Bonne réponse : hash, adresse IP ou domaine suspects sont des indicateurs de compromission (IoC).",
        "Confusion : le threat vector est le chemin d'attaque, pas l'artefact observé.",
        "Confusion : l'attack surface est l'ensemble des points exposés.",
        "Terme piège : « vulnerability signature » n'est pas un concept consacré."
      ]
    },
    {
      "q": "A threat hunting team wants to structure its hunts around the tactics, techniques, and procedures used by known adversary groups. Which resource BEST supports this goal?",
      "choix": [
        "The OSI reference model",
        "ISO/IEC 27001",
        "The CIS benchmarks",
        "The MITRE ATT&CK framework"
      ],
      "reponse": 3,
      "explication": "MITRE ATT&CK est une base de connaissances des tactiques, techniques et procédures (TTP) observées chez les attaquants réels : c'est l'outil de référence pour formuler des hypothèses de chasse. Le modèle OSI décrit les couches réseau, les benchmarks CIS servent au hardening, et ISO 27001 encadre le système de management de la sécurité.",
      "difficulte": 2,
      "pourquoi": [
        "Hors sujet : le modèle OSI décrit des couches réseau.",
        "Hors sujet : ISO/IEC 27001 encadre le système de management de la sécurité.",
        "Hors sujet : les benchmarks CIS guident le hardening.",
        "Bonne réponse : MITRE ATT&CK catalogue les TTP réels des groupes adverses — la base idéale des hypothèses de chasse."
      ]
    },
    {
      "q": "An organization configures its audit system to record an alert only after a user exceeds five failed login attempts within one hour. What is this threshold called?",
      "choix": [
        "A correlation rule",
        "A sampling rate",
        "A clipping level",
        "A baseline deviation"
      ],
      "reponse": 2,
      "explication": "Le clipping level est un seuil prédéfini en dessous duquel les événements sont ignorés : seuls les dépassements (ici plus de cinq échecs en une heure) sont enregistrés ou signalés, ce qui distingue l'erreur humaine normale de l'attaque. Le sampling est un échantillonnage statistique, sans notion de seuil.",
      "difficulte": 2,
      "pourquoi": [
        "Confusion : une règle de corrélation relie plusieurs sources d'événements.",
        "Confusion : le sampling est un échantillonnage statistique sans notion de seuil.",
        "Bonne réponse : le clipping level n'enregistre que les dépassements d'un seuil prédéfini, séparant l'erreur humaine normale de l'attaque.",
        "Confusion : la déviation de baseline relève de la détection comportementale."
      ]
    },
    {
      "q": "Which technology records the source, destination, and volume of network communications, making it valuable for detecting data exfiltration?",
      "choix": [
        "DHCP snooping",
        "SNMP traps",
        "Syslog",
        "NetFlow"
      ],
      "reponse": 3,
      "explication": "NetFlow enregistre les métadonnées des flux réseau — source, destination, volume — sans le contenu, ce qui permet de repérer des transferts sortants anormaux, signes d'exfiltration. Les traps SNMP signalent des événements d'équipements, le DHCP snooping protège l'attribution d'adresses, et syslog transporte des messages de logs.",
      "difficulte": 2,
      "pourquoi": [
        "Hors sujet : le DHCP snooping protège l'attribution d'adresses.",
        "Hors sujet : les traps SNMP signalent des événements d'équipements.",
        "Hors sujet : syslog transporte des messages de logs, pas des métadonnées de flux.",
        "Bonne réponse : NetFlow enregistre source, destination et volume des flux — idéal pour repérer une exfiltration."
      ]
    },
    {
      "q": "During an incident, responders discover that the attacker deleted the local security logs on the compromised host. Which control would BEST ensure that log data remains available for future investigations?",
      "choix": [
        "Enabling verbose logging on all endpoints",
        "Increasing local log file size limits",
        "Real-time forwarding of logs to a centralized, write-once log server",
        "Weekly backups of local log files"
      ],
      "reponse": 2,
      "explication": "L'envoi en temps réel vers un collecteur centralisé en écriture seule place une copie des événements hors de portée de l'attaquant, même s'il purge les journaux locaux. Les sauvegardes hebdomadaires laissent une large fenêtre de perte, et augmenter la taille des fichiers ou la verbosité ne protège en rien contre l'effacement.",
      "difficulte": 2,
      "pourquoi": [
        "Contre-productif : la verbosité accroît le volume sans protéger contre la suppression.",
        "Inefficace : augmenter la taille locale n'empêche pas l'effacement par l'attaquant.",
        "Bonne réponse : l'envoi en temps réel vers un serveur centralisé en écriture seule met les logs hors de portée de l'attaquant.",
        "Fenêtre d'exposition : des sauvegardes hebdomadaires laissent des jours de logs effaçables."
      ]
    },
    {
      "q": "What is the PRIMARY security benefit of a formal change management process?",
      "choix": [
        "It transfers responsibility for outages to the change advisory board",
        "It ensures changes are reviewed for unintended security consequences before implementation",
        "It eliminates the need for configuration baselines",
        "It accelerates the deployment of new features"
      ],
      "reponse": 1,
      "explication": "Le bénéfice sécurité central du change management est la revue préalable : des experts évaluent chaque changement pour repérer les conséquences involontaires — ouverture de ports, affaiblissement de contrôles — avant l'implémentation, avec un plan de rollback prêt. Il ne vise pas la vitesse, ne remplace pas les baselines et ne transfère pas la responsabilité.",
      "difficulte": 1,
      "pourquoi": [
        "Faux : la responsabilité des pannes n'est pas transférée au CAB.",
        "Bonne réponse : la revue préalable détecte les conséquences de sécurité involontaires avant l'implémentation.",
        "Faux : les baselines de configuration restent indispensables.",
        "Contresens : le change management ralentit plutôt qu'il n'accélère les déploiements."
      ]
    },
    {
      "q": "A security team wants to detect servers whose configurations have drifted from the approved secure baseline. Which practice BEST meets this need?",
      "choix": [
        "Automated configuration audits comparing systems against the baseline",
        "Requiring administrators to sign a code of conduct",
        "Annual penetration testing",
        "Reviewing firewall logs daily"
      ],
      "reponse": 0,
      "explication": "La détection de dérive de configuration (configuration drift) repose sur des audits automatisés qui comparent en continu l'état réel des systèmes à la baseline approuvée et signalent tout écart. Le pentest annuel est trop ponctuel, les logs firewall ne couvrent pas les configurations systèmes, et un code de conduite est un contrôle administratif sans vérification technique.",
      "difficulte": 2,
      "pourquoi": [
        "Bonne réponse : des audits automatisés comparent en continu l'état réel des systèmes à la baseline et signalent toute dérive.",
        "Contrôle administratif : un code de conduite ne vérifie pas techniquement l'état des systèmes.",
        "Trop ponctuel : un pentest annuel laisse la dérive invisible entre deux tests.",
        "Hors périmètre : les logs firewall ne couvrent pas les configurations systèmes."
      ]
    },
    {
      "q": "A critical vulnerability affects a legacy production system, but the vendor's patch cannot be applied because it breaks a core business application. What is the BEST course of action?",
      "choix": [
        "Immediately decommission the legacy system",
        "Apply compensating controls such as network segmentation and enhanced monitoring until the application is remediated",
        "Apply the patch anyway and let the business application fail",
        "Accept the risk and document the decision without further action"
      ],
      "reponse": 1,
      "explication": "Quand un correctif ne peut pas être appliqué, on réduit le risque par des contrôles compensatoires : isoler le système par segmentation, restreindre les accès, renforcer la surveillance, en attendant une remédiation durable. Accepter le risque sans mitigation néglige des options disponibles, et les deux dernières réponses sacrifient le métier sans analyse.",
      "difficulte": 3,
      "pourquoi": [
        "Disproportionné : décommissionner brutalement sacrifie une application métier critique.",
        "Bonne réponse : segmentation, restriction d'accès et surveillance renforcée réduisent le risque en attendant la remédiation.",
        "Inacceptable : casser sciemment l'application métier inverse les priorités du manager.",
        "Négligent : accepter le risque sans mitigation ignore les options de réduction disponibles."
      ]
    },
    {
      "q": "Which of the following BEST distinguishes a security incident from a security event?",
      "choix": [
        "An incident is any observable occurrence on a network or system",
        "An event involves an external attacker while an incident is internal",
        "An incident is an event that actually or potentially jeopardizes the confidentiality, integrity, or availability of systems or data",
        "An event always requires regulatory notification"
      ],
      "reponse": 2,
      "explication": "L'événement est toute occurrence observable, presque toujours bénigne ; l'incident est l'événement qui menace réellement ou potentiellement la CIA des systèmes ou des données, et lui seul déclenche le processus de réponse. La notification réglementaire ne concerne que certains incidents, et la distinction interne/externe n'entre pas dans la définition.",
      "difficulte": 1,
      "pourquoi": [
        "Piège de définition : toute occurrence observable est un event, pas un incident.",
        "Faux clivage : la distinction interne/externe n'entre pas dans la définition.",
        "Bonne réponse : l'incident est l'événement qui menace réellement ou potentiellement la CIA des systèmes ou des données.",
        "Faux : seuls certains incidents exigent une notification réglementaire."
      ]
    },
    {
      "q": "A first responder confirms that a database server is actively compromised. Which action would MOST likely destroy volatile evidence?",
      "choix": [
        "Isolating the server from the network",
        "Photographing the screen",
        "Documenting the running processes",
        "Powering off the server"
      ],
      "reponse": 3,
      "explication": "Éteindre la machine détruit la mémoire vive : processus malveillants, connexions actives, clés de chiffrement — des preuves volatiles irremplaçables. C'est pourquoi la consigne est d'isoler du réseau (mitigation) sans mise hors tension. Photographier l'écran et documenter les processus font partie des bonnes pratiques de préservation.",
      "difficulte": 1,
      "pourquoi": [
        "Bonne pratique, pas un risque : isoler du réseau contient l'attaque sans détruire la mémoire.",
        "Bonne pratique : photographier l'écran documente l'état visible.",
        "Bonne pratique : documenter les processus fait partie de la préservation.",
        "Bonne réponse : la mise hors tension efface la RAM — processus, connexions, clés — des preuves volatiles irremplaçables."
      ]
    },
    {
      "q": "An incident response team detects an advanced attacker moving laterally through the network. Management wants to observe the attacker's techniques before removing access. What is the GREATEST risk of this strategy?",
      "choix": [
        "The attacker may cause additional damage or exfiltrate more data while being observed",
        "The attacker may notice the monitoring tools",
        "The observation will invalidate the chain of custody",
        "The SIEM will generate too many alerts"
      ],
      "reponse": 0,
      "explication": "Observer un attaquant actif peut enrichir le renseignement, mais chaque minute d'accès supplémentaire lui permet de voler davantage de données ou de causer plus de dégâts — un arbitrage risqué qui doit être décidé par la direction en connaissance de cause. Les autres réponses sont des considérations secondaires ou sans fondement.",
      "difficulte": 3,
      "pourquoi": [
        "Bonne réponse : chaque minute d'accès supplémentaire permet à l'attaquant d'exfiltrer ou de détruire davantage — un arbitrage qui appartient à la direction.",
        "Secondaire : la découverte des outils de surveillance est un risque mineur comparé aux dégâts possibles.",
        "Sans fondement : l'observation n'affecte pas la chain of custody.",
        "Anecdotique : le volume d'alertes n'est pas un risque de sécurité."
      ]
    },
    {
      "q": "During which phase of the incident management process does the team perform root cause analysis and implement changes to prevent recurrence?",
      "choix": [
        "Mitigation",
        "Reporting",
        "Remediation",
        "Recovery"
      ],
      "reponse": 2,
      "explication": "La remediation cherche la cause racine de l'incident et met en œuvre les changements qui empêcheront sa récidive. La mitigation contient l'incident, la recovery restaure les systèmes en état opérationnel, et le reporting couvre la notification aux parties prenantes et aux autorités.",
      "difficulte": 2,
      "pourquoi": [
        "Hors phase : la mitigation contient l'incident.",
        "Hors phase : le reporting couvre notifications et communication.",
        "Bonne réponse : la remediation analyse la cause racine et implémente les changements empêchant la récidive.",
        "Hors phase : la recovery restaure les systèmes en état opérationnel."
      ]
    },
    {
      "q": "An organization wants to ensure that only approved applications can execute on point-of-sale terminals. Which control BEST achieves this?",
      "choix": [
        "Full-disk encryption",
        "Application allow listing",
        "Host-based intrusion detection",
        "Application deny listing"
      ],
      "reponse": 1,
      "explication": "L'allow listing n'autorise que les applications explicitement approuvées et bloque tout le reste par défaut (deny by default) : idéal pour des terminaux à usage fixe comme les caisses. La deny list laisse passer tout ce qui n'est pas listé, le HIDS détecte sans empêcher l'exécution, et le chiffrement protège la confidentialité, pas l'exécution.",
      "difficulte": 1,
      "pourquoi": [
        "Hors sujet : le chiffrement protège la confidentialité, pas le contrôle d'exécution.",
        "Bonne réponse : l'allow list n'autorise que l'approuvé et bloque tout le reste par défaut — idéal pour des terminaux à usage fixe.",
        "Détectif seulement : le HIDS alerte sans empêcher l'exécution.",
        "Insuffisant : la deny list laisse s'exécuter tout ce qui n'est pas listé."
      ]
    },
    {
      "q": "A network IPS protecting a hospital's clinical systems fails. The security team must choose between fail-open and fail-closed behavior. Which statement BEST captures the trade-off?",
      "choix": [
        "Fail-open maintains availability of clinical traffic but allows attacks through; fail-closed blocks attacks but interrupts patient care systems",
        "The choice has no impact on clinical operations",
        "Fail-closed maintains both security and availability",
        "Fail-open is always the correct choice for security devices"
      ],
      "reponse": 0,
      "explication": "Un IPS en coupure qui tombe en panne doit soit laisser passer le trafic sans inspection (fail-open : disponibilité préservée, sécurité dégradée), soit tout bloquer (fail-closed : sécurité préservée, service interrompu). Dans un contexte hospitalier où la vie des patients dépend de la disponibilité, l'arbitrage penche souvent vers fail-open avec surveillance compensatoire — mais c'est une décision de gestion du risque, pas un automatisme.",
      "difficulte": 3,
      "pourquoi": [
        "Bonne réponse : l'arbitrage oppose disponibilité des soins (fail-open) et sécurité (fail-closed) — une décision de gestion du risque.",
        "Faux : bloquer le trafic clinique impacte directement les soins aux patients.",
        "Faux : le fail-closed sacrifie la disponibilité, il ne préserve pas les deux.",
        "Absolu : aucun choix n'est « toujours » correct, tout dépend du contexte de risque."
      ]
    },
    {
      "q": "A malware sample remains dormant for 30 minutes and checks for virtualization artifacts before executing its payload. What is the MOST likely purpose of this behavior?",
      "choix": [
        "To reduce its memory footprint",
        "To synchronize with the attacker's time zone",
        "To avoid triggering full-disk encryption",
        "To evade automated sandbox analysis, which typically observes samples for only a short time"
      ],
      "reponse": 3,
      "explication": "Les sandboxes d'analyse n'observent un échantillon que quelques minutes : un malware qui dort longtemps et détecte les artefacts de virtualisation (sandbox evasion) paraît inoffensif pendant l'analyse et n'exécute sa charge que sur une machine réelle. Les autres réponses ne correspondent à aucune technique documentée.",
      "difficulte": 3,
      "pourquoi": [
        "Sans rapport : dormir ne réduit pas l'empreinte mémoire.",
        "Fantaisiste : aucun lien avec le fuseau horaire de l'attaquant.",
        "Sans rapport : le chiffrement de disque n'interagit pas avec ce comportement.",
        "Bonne réponse : dormir et détecter la virtualisation permet d'échapper aux sandboxes, qui n'observent un échantillon que quelques minutes."
      ]
    },
    {
      "q": "An organization performs a full backup on Sunday and incremental backups every weeknight. The file server fails on Thursday morning. Which restore sequence is CORRECT?",
      "choix": [
        "Sunday's full backup, then Monday's, Tuesday's, and Wednesday's incrementals in chronological order",
        "Wednesday's incremental only",
        "Sunday's full backup, then Wednesday's incremental only",
        "Sunday's full backup only"
      ],
      "reponse": 0,
      "explication": "Chaque incrémentale ne contient que les changements depuis la sauvegarde précédente : la restauration exige le full puis toutes les incrémentales dans l'ordre chronologique. Restaurer seulement la dernière serait la logique des différentielles, et le full seul perdrait trois jours de données.",
      "difficulte": 2,
      "pourquoi": [
        "Bonne réponse : le full puis chaque incrémentale dans l'ordre chronologique reconstituent l'état complet.",
        "Incomplet : une incrémentale seule ne contient ni le socle ni les jours précédents.",
        "Piège différentiel : sauter les incrémentales intermédiaires perdrait les changements de lundi et mardi.",
        "Incomplet : le full seul perd trois jours de changements."
      ]
    },
    {
      "q": "A business impact analysis establishes a recovery point objective of 15 minutes for the order-processing database. Which offsite data protection strategy BEST meets this requirement?",
      "choix": [
        "Weekly full backups stored offsite",
        "Nightly electronic vaulting",
        "Remote journaling or remote mirroring",
        "Monthly tape rotation to a secure vault"
      ],
      "reponse": 2,
      "explication": "Un RPO de 15 minutes exige un transfert quasi continu : le remote journaling expédie les journaux de transactions toutes les quelques minutes, et le remote mirroring applique chaque écriture en temps réel sur le site distant. Le vaulting nocturne, les fulls hebdomadaires et la rotation mensuelle laissent des heures ou des semaines de perte potentielle.",
      "difficulte": 2,
      "pourquoi": [
        "RPO non tenu : des fulls hebdomadaires exposent à une semaine de perte.",
        "RPO non tenu : un vaulting nocturne expose à 24 heures de perte.",
        "Bonne réponse : journaling ou mirroring distants transfèrent les transactions en quasi-continu — seuls compatibles avec 15 minutes.",
        "RPO non tenu : une rotation mensuelle expose à des semaines de perte."
      ]
    },
    {
      "q": "Beyond its high cost, what is a SIGNIFICANT security drawback of operating a hot site?",
      "choix": [
        "It cannot be tested without interrupting production",
        "It duplicates all production data, effectively doubling the organization's attack surface",
        "It cannot support database replication",
        "It requires weeks to activate after a disaster"
      ],
      "reponse": 1,
      "explication": "Le hot site détient une copie répliquée en continu de toutes les données de production : c'est un second site à défendre avec le même niveau d'exigence, ce qui accroît la surface d'attaque. Il se teste au contraire facilement, s'active quasi immédiatement, et la réplication de bases de données est précisément l'une de ses fonctions.",
      "difficulte": 2,
      "pourquoi": [
        "Faux : le hot site se teste justement sans interrompre la production.",
        "Bonne réponse : la réplication complète des données double la surface d'attaque — un second site à défendre au même niveau d'exigence.",
        "Faux : la réplication de bases de données est l'une de ses fonctions natives.",
        "Faux : le hot site s'active quasi immédiatement."
      ]
    },
    {
      "q": "Why can a cold site create a false sense of security for an organization?",
      "choix": [
        "Because it stores an outdated copy of production data",
        "Because regulators prohibit its use for critical systems",
        "Because it is more expensive than a hot site",
        "Because it is difficult to test realistically, so activation problems are discovered only during an actual disaster"
      ],
      "reponse": 3,
      "explication": "Un cold site n'a ni équipement ni données : il est presque impossible à tester de façon réaliste, et l'organisation découvre les problèmes d'activation — délais, matériels manquants, procédures fausses — au pire moment, pendant le vrai sinistre. Il est par ailleurs l'option la moins chère et ne stocke aucune donnée.",
      "difficulte": 2,
      "pourquoi": [
        "Faux : un cold site ne stocke aucune donnée.",
        "Faux : aucune interdiction réglementaire générale n'existe.",
        "Faux : le cold site est l'option la moins chère.",
        "Bonne réponse : quasi impossible à tester de façon réaliste, il révèle ses défaillances au pire moment — pendant le vrai sinistre."
      ]
    },
    {
      "q": "Which metric represents the average time required to repair a failed component and return it to service?",
      "choix": [
        "MTTR",
        "MTTF",
        "MTD",
        "MTBF"
      ],
      "reponse": 0,
      "explication": "Le MTTR (Mean Time To Repair) est le temps moyen de réparation d'un composant défaillant. Le MTBF mesure le temps moyen entre pannes, le MTTF la durée de vie fonctionnelle attendue avant défaillance, et le MTD est l'indisponibilité maximale tolérable issue du BIA — une métrique métier, pas une métrique d'équipement.",
      "difficulte": 2,
      "pourquoi": [
        "Bonne réponse : le MTTR est le temps moyen de réparation et de remise en service d'un composant défaillant.",
        "Piège de sigle : le MTTF est la durée de vie attendue avant défaillance.",
        "Piège de sigle : le MTD est une métrique métier issue du BIA, pas une métrique d'équipement.",
        "Piège de sigle : le MTBF mesure le temps moyen entre pannes."
      ]
    },
    {
      "q": "What is the minimum number of disks required for RAID 6, and how many simultaneous disk failures can it tolerate?",
      "choix": [
        "Five disks, three failures",
        "Two disks, one failure",
        "Four disks, two failures",
        "Three disks, one failure"
      ],
      "reponse": 2,
      "explication": "RAID 6 utilise deux blocs de parité répartis : il exige au minimum quatre disques et survit à la défaillance simultanée de deux d'entre eux. Trois disques et une panne correspondent au RAID 5, deux disques au RAID 1 (miroir), et aucune configuration standard ne tolère trois pannes avec cinq disques.",
      "difficulte": 1,
      "pourquoi": [
        "Aucune configuration standard ne correspond à cinq disques et trois pannes.",
        "Piège RAID 1 : deux disques et une panne décrivent le miroir.",
        "Bonne réponse : RAID 6 exige quatre disques minimum et sa double parité tolère deux pannes simultanées.",
        "Piège RAID 5 : trois disques et une seule panne tolérée décrivent le RAID 5."
      ]
    },
    {
      "q": "During a disaster recovery exercise, team members gather in a conference room and discuss their responses to a hypothetical ransomware scenario without touching any systems. What type of test is this?",
      "choix": [
        "A simulation test",
        "A tabletop exercise",
        "A full-interruption test",
        "A parallel test"
      ],
      "reponse": 1,
      "explication": "L'exercice sur table (tabletop) réunit l'équipe pour dérouler verbalement un scénario, sans aucune action technique : idéal pour valider rôles et procédures sans risque. La simulation teste réellement certaines mesures, le parallel test active le site de secours en parallèle de la production, et le full-interruption bascule réellement les opérations.",
      "difficulte": 1,
      "pourquoi": [
        "Trop loin : la simulation teste réellement certaines mesures.",
        "Bonne réponse : discuter un scénario en salle sans toucher aux systèmes est l'exercice sur table (tabletop).",
        "Trop loin : le full-interruption bascule réellement les opérations.",
        "Trop loin : le parallel test active le site de secours."
      ]
    },
    {
      "q": "Why does senior management frequently resist authorizing a full-interruption test of the disaster recovery plan?",
      "choix": [
        "It provides no useful information about the plan",
        "It is prohibited by most insurance policies",
        "It requires regulator approval in all industries",
        "It deliberately halts production operations, so a test failure could itself cause a real outage and business losses"
      ],
      "reponse": 3,
      "explication": "Le full-interruption test arrête réellement le site principal pour basculer sur le site de secours : si le plan échoue, le test provoque lui-même un sinistre opérationnel avec pertes réelles. C'est pourtant le seul test qui prouve le plan de bout en bout — d'où la tension entre valeur probante et risque. Il n'est ni inutile, ni interdit par principe.",
      "difficulte": 2,
      "pourquoi": [
        "Faux : c'est au contraire le test le plus probant.",
        "Inventé : les polices d'assurance ne l'interdisent pas par principe.",
        "Inventé : aucune approbation réglementaire universelle n'est requise.",
        "Bonne réponse : arrêter volontairement la production fait courir le risque d'une panne réelle et de pertes si le plan échoue."
      ]
    },
    {
      "q": "After a system crash, an operating system restarts and ensures that security controls are enforced and no data is exposed before allowing user access. What is this capability called?",
      "choix": [
        "Trusted recovery",
        "Fail-open recovery",
        "Journaling",
        "Hot swapping"
      ],
      "reponse": 0,
      "explication": "La trusted recovery garantit qu'après une défaillance, le système revient à un état sûr : les contrôles de sécurité restent appliqués et aucune donnée n'est exposée pendant ni après la reprise. Le fail-open sacrifie la sécurité à la disponibilité, le hot swapping remplace du matériel à chaud, et le journaling protège l'intégrité des systèmes de fichiers.",
      "difficulte": 3,
      "pourquoi": [
        "Bonne réponse : la trusted recovery ramène le système dans un état sûr, contrôles appliqués et données protégées, avant tout accès utilisateur.",
        "Contresens : le fail-open sacrifie la sécurité au profit de la disponibilité.",
        "Trop étroit : le journaling protège l'intégrité du système de fichiers, pas l'état de sécurité global.",
        "Hors sujet : le hot swapping remplace du matériel à chaud."
      ]
    },
    {
      "q": "A bank teller is forced at gunpoint to open the vault. Which control allows the teller to summon help WITHOUT alerting the attacker?",
      "choix": [
        "Refusing to comply until police arrive",
        "Activating the fire alarm",
        "A CCTV camera recording the event",
        "Entering a duress code that opens the vault while silently alerting security"
      ],
      "reponse": 3,
      "explication": "Le duress code permet de coopérer en apparence — la vie humaine prime toujours sur les actifs — tout en déclenchant une alerte silencieuse. Refuser d'obtempérer met la vie de l'employé en danger, l'alarme incendie révèle l'alerte et déclenche une évacuation inadaptée, et la vidéosurveillance enregistre sans appeler de secours.",
      "difficulte": 2,
      "pourquoi": [
        "Danger de mort : refuser face à une arme viole la primauté de la vie humaine.",
        "Contre-productif : l'alarme incendie révèle l'alerte à l'agresseur.",
        "Passif : la vidéosurveillance enregistre sans appeler de secours.",
        "Bonne réponse : le duress code ouvre le coffre en apparence tout en alertant silencieusement la sécurité."
      ]
    },
    {
      "q": "An executive is traveling to a country known for aggressive economic espionage and intrusive border inspections. Which practice provides the BEST protection for corporate information?",
      "choix": [
        "Relying on the hotel's business center computers",
        "Issuing loaner devices containing only the minimum data needed, to be wiped upon return",
        "Storing all files in a hidden encrypted partition",
        "Carrying her usual laptop protected by full-disk encryption"
      ],
      "reponse": 1,
      "explication": "L'appareil de prêt avec données minimales est la meilleure pratique : même en cas de fouille frontalière avec déverrouillage exigé, de saisie ou de compromission, l'exposition est négligeable, et l'appareil est réinitialisé au retour. Le chiffrement ne résiste pas à une injonction légale de déverrouillage, une partition cachée expose à des sanctions si elle est découverte, et les ordinateurs d'hôtel doivent être présumés compromis.",
      "difficulte": 2,
      "pourquoi": [
        "Dangereux : les ordinateurs d'hôtel doivent être présumés compromis.",
        "Bonne réponse : des appareils de prêt au contenu minimal, effacés au retour, réduisent l'exposition au strict nécessaire.",
        "Risqué : une partition cachée découverte expose à des sanctions.",
        "Illusion : le chiffrement cède devant une injonction de déverrouillage à la frontière."
      ]
    },
    {
      "q": "A security operations center deploys a generative AI assistant that summarizes alerts and recommends dispositions. Several AI-generated summaries later prove inaccurate. Which practice BEST addresses this risk while preserving the efficiency gains?",
      "choix": [
        "Restrict the assistant to low-severity alerts only",
        "Ask the vendor to retrain the model on the organization's historical data",
        "Require documented human validation before any alert is closed or escalated, using the AI only to assist triage",
        "Remove the AI assistant until it produces no errors"
      ],
      "reponse": 2,
      "explication": "L'IA générative peut halluciner : elle accélère le triage, mais la décision de clôture ou d'escalade — susceptible de masquer une vraie intrusion — doit rester humaine et documentée (human-in-the-loop). Exiger un taux d'erreur nul est irréaliste, cantonner l'IA aux alertes « faibles » ignore que la sévérité est elle-même une estimation faillible, et réentraîner le modèle réduit l'erreur sans la supprimer.",
      "difficulte": 3,
      "pourquoi": [
        "Vraie mais contextuellement fausse : la sévérité est une estimation — une alerte « faible » mal clôturée peut être le premier signal d'une intrusion majeure.",
        "Réponse de technicien : réentraîner améliore la précision sans jamais éliminer le risque résiduel — l'enjeu est le contrôle du processus.",
        "Bonne réponse : maintenir l'humain dans la boucle sur les décisions de clôture et d'escalade traite le risque d'erreur de l'IA tout en conservant son apport au triage.",
        "Absolu irréaliste : aucun modèle n'atteindra un taux d'erreur nul, et retirer l'outil sacrifie le gain d'efficacité sans traiter la gouvernance du processus."
      ]
    },
    {
      "q": "A manufacturer restores all systems from clean backups after a double-extortion ransomware attack in which the attackers also exfiltrated customer data. Why is the incident NOT resolved?",
      "choix": [
        "The restored systems may still contain the ransomware binary",
        "The recovery time objective may have been exceeded during the restore",
        "The exfiltrated data constitutes a breach that still triggers notification and crisis-management obligations",
        "The attackers may return through the same unpatched vulnerability"
      ],
      "reponse": 2,
      "explication": "La double extorsion transforme un incident de disponibilité en violation de confidentialité : même une fois les systèmes restaurés, les données exfiltrées imposent notification aux autorités et aux personnes concernées, analyse juridique et gestion de crise. Le risque de réinfection et la vulnérabilité non corrigée relèvent de la qualité de la recovery et de la remediation, et le dépassement éventuel du RTO est un enjeu de performance, pas d'obligations résiduelles.",
      "difficulte": 3,
      "pourquoi": [
        "Vraie mais hors sujet ici : le risque de réinfection concerne la qualité de la recovery, pas la raison pour laquelle l'incident reste ouvert.",
        "Hors sujet : le dépassement du RTO est un enjeu de performance de la reprise, pas d'obligations résiduelles.",
        "Bonne réponse : la double extorsion fait de l'incident une violation de confidentialité — notification et gestion de crise restent dues malgré la restauration.",
        "Vraie mais secondaire : corriger la vulnérabilité relève de la remediation ; ce n'est pas ce qui distingue la double extorsion."
      ]
    },
    {
      "q": "During an incident in a public cloud environment, compromised containers are being automatically terminated and replaced by the auto-scaling service. What should the incident response team do FIRST?",
      "choix": [
        "Request that the cloud provider seize the physical drives of the host servers",
        "Rely on the cloud provider's incident response team, since it owns the infrastructure",
        "Redeploy the environment from infrastructure-as-code templates to restore service",
        "Pause auto-scaling and preserve volatile evidence through provider APIs, snapshots, and centralized logs before instances are destroyed"
      ],
      "reponse": 3,
      "explication": "En cloud éphémère, chaque cycle d'auto-scaling détruit des preuves : la seule préservation possible passe par les mécanismes logiques du fournisseur — suspendre le scaling, snapshotter les instances, exporter les journaux via API — avant la destruction automatique. La saisie physique est irréaliste en infrastructure mutualisée, le modèle de responsabilité partagée laisse au client l'investigation de ses charges de travail, et redéployer avant de collecter détruirait les preuves.",
      "difficulte": 3,
      "pourquoi": [
        "Irréaliste en cloud mutualisé : le fournisseur ne saisira pas des disques physiques partagés entre clients.",
        "Piège de responsabilité partagée : le fournisseur gère l'infrastructure, mais l'investigation des charges de travail du client incombe au client.",
        "Hors phase : restaurer avant d'avoir préservé détruirait les preuves — la recovery vient après la collecte.",
        "Bonne réponse : figer l'auto-scaling, snapshotter et exporter les journaux via API est la seule préservation possible avant la destruction automatique des instances."
      ]
    },
    {
      "q": "A SOAR platform automatically isolated a critical trading server based on a false positive, halting operations for two hours. Management demands both rapid containment and protection of critical services. Which approach BEST satisfies these requirements?",
      "choix": [
        "Apply tiered automation: automatic containment for standard assets, human approval for actions affecting business-critical assets",
        "Tune detection rules until false positives no longer occur",
        "Exclude all critical servers from the SOAR platform's scope",
        "Disable automated containment and require analysts to approve every response action"
      ],
      "reponse": 0,
      "explication": "L'automatisation graduée aligne le niveau de contrôle humain sur la criticité métier : confinement automatique pour les actifs standards (réactivité), approbation humaine pour les actions à fort impact sur les actifs critiques (jugement). Revenir au tout-manuel sacrifie la réactivité exigée, aucun tuning n'élimine totalement les faux positifs, et exclure les serveurs critiques les prive de tout confinement rapide alors qu'ils sont les cibles les plus attractives.",
      "difficulte": 3,
      "pourquoi": [
        "Bonne réponse : l'automatisation graduée aligne le contrôle humain sur la criticité métier — réactivité sur les actifs standards, jugement humain là où l'impact l'exige.",
        "Vraie mais insuffisante : le tuning réduit les faux positifs sans jamais les éliminer — l'objectif « zéro faux positif » est un absolu inatteignable.",
        "Dangereux : exclure les serveurs critiques les prive de tout confinement rapide alors qu'ils sont précisément les cibles les plus attractives.",
        "Sur-réaction : exiger une approbation humaine pour chaque action sacrifie la réactivité que la direction veut conserver."
      ]
    }
  ],
  "flashcards": [
    {
      "recto": "Chain of custody",
      "verso": "Documentation continue de qui a collecté et manipulé chaque preuve, quand et où (« tag, bag, carry »). Toute rupture compromet l'admissibilité de la preuve au tribunal."
    },
    {
      "recto": "Les 4 types d'investigations",
      "verso": "Administrative (violations de politiques internes), criminelle (forces de l'ordre, « beyond a reasonable doubt »), civile (litiges, prépondérance des preuves), réglementaire (déclenchée par un régulateur)."
    },
    {
      "recto": "Les 5 règles de la preuve",
      "verso": "Authentic (non fabriquée), accurate (intégrité), complete (toutes les parties, même défavorables), convincing (compréhensible), admissible (pertinente, matérielle, collectée légalement)."
    },
    {
      "recto": "Best evidence rule",
      "verso": "Règle exigeant de présenter au tribunal la preuve originale plutôt qu'une copie ou une preuve secondaire."
    },
    {
      "recto": "Hearsay evidence",
      "verso": "Preuve par ouï-dire (déclaration faite hors tribunal), généralement irrecevable. Appliquée aux logs systèmes : ils doivent être authentifiés par un administrateur pour être admissibles."
    },
    {
      "recto": "Locard exchange principle",
      "verso": "Lors de tout crime, quelque chose est emporté et quelque chose est laissé derrière. Fondement du forensics : tout contact laisse une trace."
    },
    {
      "recto": "eDiscovery",
      "verso": "Processus d'identification, de collecte et de production d'informations stockées électroniquement pour une procédure judiciaire (modèle EDRM en 9 étapes). Devoir de préservation dès qu'un litige est anticipé."
    },
    {
      "recto": "SIEM",
      "verso": "Security Information and Event Management : ingère les logs de sources multiples, avec agrégation, normalisation, corrélation, stockage sécurisé, analyse et reporting. Nécessite technologie + processus + personnes."
    },
    {
      "recto": "SOAR / playbook / runbook",
      "verso": "SOAR : réponse automatisée aux incidents. Playbook : document définissant COMMENT répondre à un incident. Runbook : implémentation automatisée des étapes du playbook."
    },
    {
      "recto": "False positive vs false negative",
      "verso": "False positive : classer à tort une activité bénigne comme malveillante (fatigue des analystes). False negative : ne PAS alerter sur une activité réellement malveillante — le plus dangereux."
    },
    {
      "recto": "UEBA",
      "verso": "User and Entity Behavior Analytics : construit des profils de comportement normal et alerte sur les déviations. Détecte fraude, malware, menaces internes et comptes compromis."
    },
    {
      "recto": "STIX et TAXII",
      "verso": "STIX : langage standardisé (JSON) pour décrire et partager la threat intelligence. TAXII : protocole de transport des données STIX sur HTTPS. STIX décrit, TAXII transporte."
    },
    {
      "recto": "Threat hunting",
      "verso": "Recherche proactive d'activité malveillante ayant échappé aux outils automatisés, sur le réseau et les endpoints. Postulat : l'attaquant est peut-être déjà dans l'environnement."
    },
    {
      "recto": "Cyber Kill Chain (7 étapes)",
      "verso": "Reconnaissance → Weaponization → Delivery → Exploitation → Installation → Command & Control → Actions on Objectives. Casser la chaîne à n'importe quelle étape stoppe l'attaque."
    },
    {
      "recto": "Egress monitoring",
      "verso": "Surveillance du trafic SORTANT du réseau pour détecter l'exfiltration de données. Outils typiques : DLP (Data Loss Prevention) et détection de stéganographie."
    },
    {
      "recto": "Need-to-know vs least privilege",
      "verso": "Need-to-know : limite QUELLES informations un sujet peut connaître. Least privilege : limite l'ÉTENDUE des droits et permissions accordés (données et tâches systèmes)."
    },
    {
      "recto": "Segregation of Duties (SoD)",
      "verso": "Aucune personne seule ne contrôle une fonction critique : la fraude nécessite une collusion. Variantes : two-person control (deux approbations) et split knowledge (savoir réparti, ex. M of N control)."
    },
    {
      "recto": "Hardening d'un système",
      "verso": "Désactiver les services inutilisés, fermer les ports logiques inutiles, supprimer les applications superflues, changer les mots de passe par défaut — selon des référentiels comme les benchmarks CIS."
    },
    {
      "recto": "Cycle du patch management",
      "verso": "Évaluer le patch → tester sur système isolé non productif → approuver (via change management) → déployer → vérifier par audits et scans qu'il est appliqué."
    },
    {
      "recto": "IDS vs IPS",
      "verso": "IDS : détecte et alerte (contrôle détectif). IPS : détecte ET bloque, placé en coupure (contrôle préventif). Détection par signatures = attaques connues ; comportementale (baseline) = attaques inconnues."
    },
    {
      "recto": "Honeypot / honeynet",
      "verso": "Systèmes leurres avec pseudo-failles et fausses données : occupent l'attaquant loin de la production et permettent d'observer ses techniques. Honeynet = réseau de honeypots."
    },
    {
      "recto": "Cycle de réponse aux incidents (DRMRRRL)",
      "verso": "Detection → Response → Mitigation → Reporting → Recovery → Remediation → Lessons Learned (« drumroll »). Jamais de contre-attaque. Lessons learned réalimente la détection."
    },
    {
      "recto": "RPO / RTO / WRT / MTD",
      "verso": "RPO : perte de données max tolérable (en temps). RTO : temps max de restauration du service. WRT : temps de vérification d'intégrité. MTD : indisponibilité max tolérable. Règle : RTO + WRT ≤ MTD."
    },
    {
      "recto": "Full vs incremental vs differential",
      "verso": "Full : tout, remet l'archive bit à 0. Incremental : changements depuis le dernier backup, remet le bit à 0 (restauration : full + toutes les incr.). Differential : changements depuis le dernier full, ne touche pas au bit (restauration : full + dernière diff)."
    },
    {
      "recto": "Cold / warm / hot / redundant site",
      "verso": "Cold : bâtiment seul, semaines d'activation, le moins cher. Warm : équipements sans données, ~12 h. Hot : tout prêt, données répliquées, quasi immédiat, très cher (abonnement). Redundant : possédé par l'org, souvent actif-actif."
    },
    {
      "recto": "Les 5 tests du DRP",
      "verso": "Read-through/tabletop (relecture, discussion) → walk-through (procédural) → simulation (scénario, mesures testées) → parallel (site de secours activé, production intacte) → full-interruption (bascule réelle, seul test qui prouve le plan)."
    }
  ]
};
