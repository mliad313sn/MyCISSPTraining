// Domaine 2 — Sécurité des actifs (Asset Security)
window.CISSP_DATA = window.CISSP_DATA || { domains: {} };
window.CISSP_DATA.domains[2] = {
  id: 2,
  code: "D2",
  titre: "Sécurité des actifs",
  titreEn: "Asset Security",
  poids: "10%",
  couleur: "#f78c6b",
  icone: "📦",
  description:
    "Le Domaine 2 couvre la protection des informations et des actifs tout au long de leur cycle de vie : classification, rôles et responsabilités, états de la donnée, rétention et destruction sécurisée. Il aborde aussi les méthodes de protection comme le DRM, le DLP et les CASB, ainsi que l'adaptation des baselines de sécurité via le scoping et le tailoring.",
  objectifs: [
    "2.1 Identifier et classifier l'information et les actifs",
    "2.2 Établir les exigences de manipulation de l'information et des actifs",
    "2.3 Provisionner l'information et les actifs de manière sécurisée",
    "2.4 Gérer le cycle de vie de la donnée (rôles, collecte, localisation, maintenance, rétention, rémanence, destruction)",
    "2.5 Assurer une rétention appropriée des actifs (End-of-Life, End-of-Support)",
    "2.6 Déterminer les contrôles de sécurité des données et les exigences de conformité (data states, scoping et tailoring, sélection de standards, DRM, DLP, CASB)"
  ],

  lecons: [
    // ────────────────────────────────────────────────────────────
    // LEÇON 1 — Classification des données et des actifs
    // ────────────────────────────────────────────────────────────
    {
      id: "d2-l1",
      titre: "Classification des données et des actifs",
      duree: 10,
      slides: [
        {
          type: "intro",
          titre: "Pourquoi classifier ?",
          points: [
            "Toute protection commence par savoir ce que l'on possède",
            "La classification attribue une valeur et un niveau de protection",
            "Un actif : tout ce qui a de la valeur pour l'organisation"
          ],
          narration:
            "Bienvenue dans le Domaine 2, la sécurité des actifs. Avant de protéger quoi que ce soit, il faut savoir ce que l'on possède et combien cela vaut. C'est exactement le rôle de la classification : attribuer à chaque donnée et à chaque actif un niveau de sensibilité, qui déterminera ensuite le niveau de protection requis. Retenez qu'un actif, c'est tout ce qui a de la valeur pour l'organisation : les données bien sûr, mais aussi le matériel qui les traite et les supports qui les stockent."
        },
        {
          type: "standard",
          titre: "Données sensibles : PII, PHI, données propriétaires",
          points: [
            "Sensitive data : toute information non publique à protéger",
            "PII : toute information permettant d'identifier un individu",
            "PHI : information de santé rattachable à une personne (HIPAA)",
            "Proprietary data : donne un avantage concurrentiel à l'organisation"
          ],
          narration:
            "Une donnée sensible, c'est toute information qui n'est pas publique et que l'organisation doit protéger, soit pour sa valeur, soit pour respecter des lois et règlements. Les PII, Personally Identifiable Information, regroupent tout ce qui permet d'identifier ou de tracer un individu : nom, numéro de sécurité sociale, données biométriques. Les PHI, Protected Health Information, sont les informations de santé rattachables à une personne, encadrées par HIPAA. Enfin, les données propriétaires sont celles qui donnent à l'entreprise son avantage concurrentiel, comme les secrets de fabrication.",
          astuce: "💡 Conseil examen : PII vient de NIST SP 800-122 ; PHI concerne tout organisme qui manipule des données de santé, pas seulement les hôpitaux."
        },
        {
          type: "schema",
          titre: "Niveaux de classification gouvernementaux",
          points: [
            "Top Secret : dommage exceptionnellement grave à la sécurité nationale",
            "Secret : dommage sérieux",
            "Confidential : dommage",
            "Unclassified : non sensible"
          ],
          schema: {
            type: "pyramid",
            items: ["Top Secret", "Secret", "Confidential", "Unclassified"]
          },
          narration:
            "Le secteur gouvernemental utilise une pyramide de classification bien connue. Au sommet, Top Secret : une divulgation causerait un dommage exceptionnellement grave à la sécurité nationale, pensez aux informations sur les satellites espions. En dessous, Secret, dont la divulgation affecterait sérieusement la sécurité nationale, puis Confidential, dont la divulgation causerait un dommage. Tout en bas, Unclassified, qui n'est pas sensible. Plus on monte dans la pyramide, plus les contrôles sont stricts."
        },
        {
          type: "schema",
          titre: "Niveaux de classification du secteur privé",
          points: [
            "Confidential / Proprietary : conséquences graves si divulgué",
            "Private : données personnelles, bancaires",
            "Sensitive : précautions particulières requises",
            "Public : divulgation sans dommage"
          ],
          schema: {
            type: "pyramid",
            items: ["Confidential / Proprietary", "Private", "Sensitive", "Public"]
          },
          narration:
            "Les organisations privées utilisent leurs propres étiquettes, souvent Confidential ou Proprietary pour les données dont la divulgation aurait des conséquences graves, Private pour les données personnelles comme les cartes bancaires, Sensitive pour ce qui exige des précautions particulières, et Public pour ce qui peut être vu de tous. Retenez bien que ces étiquettes ne sont pas normalisées : chaque organisation peut définir des niveaux aussi granulaires qu'elle le souhaite, du moment que la politique de sécurité les documente clairement."
        },
        {
          type: "standard",
          titre: "Classification des actifs et clearance",
          points: [
            "L'actif hérite de la classification de la donnée la plus sensible qu'il traite",
            "Chaque actif classifié doit avoir un owner identifié",
            "Clearance : habilitation d'accès à un niveau de classification",
            "Processus formel d'approbation d'accès par le data owner"
          ],
          narration:
            "La classification ne s'arrête pas aux données : les systèmes, serveurs et appareils mobiles doivent aussi être classifiés. La règle est simple : un actif hérite de la classification de la donnée la plus sensible qu'il traite. Si un ordinateur traite des données Top Secret, cet ordinateur est un actif Top Secret. Pour accéder à un niveau donné, une personne doit détenir la clearance correspondante, c'est-à-dire l'habilitation. Et tout changement d'accès doit passer par un processus formel d'approbation impliquant le data owner, avec une sensibilisation de l'utilisateur aux règles de ce niveau."
        },
        {
          type: "standard",
          titre: "Marking et Labeling",
          points: [
            "Marking : attributs de sécurité lisibles par l'humain",
            "Labeling : attributs lisibles par le système (metadata, RFID, QR codes)",
            "Le marquage guide les processus, le label permet l'application automatique",
            "Le handling dépend de la classification, pas du type de support"
          ],
          narration:
            "Deux termes proches mais distincts à l'examen. Le marking, c'est l'association d'attributs de sécurité sous une forme lisible par l'humain : un tampon Confidentiel sur un dossier, un bandeau en haut d'un document. Le labeling, lui, est lisible par le système : métadonnées, codes-barres, QR codes ou étiquettes RFID, ce qui permet une application automatique des politiques de sécurité. Retenez enfin que les exigences de manipulation, le handling, découlent toujours de la classification de l'actif, jamais du type de support."
        },
        {
          type: "standard",
          titre: "Exigences de manipulation des actifs",
          points: [
            "Asset handling : procédures pour déplacer, stocker et récupérer les actifs",
            "Objectif clé : prévenir les fuites de données",
            "Limiter la collecte : ne stocker que ce qui a un but métier clair",
            "Stockage selon la classification : verrous physiques, chiffrement"
          ],
          narration:
            "Une fois les actifs classifiés, il faut définir comment les manipuler. L'asset handling regroupe les procédures qui encadrent le déplacement, le stockage et la récupération des actifs, avec un objectif central : prévenir les fuites de données. Deux bonnes pratiques dominent. D'abord, limiter la collecte : si une donnée n'a pas de but métier clair, on ne la collecte pas et on ne la stocke pas. Ensuite, adapter le stockage à la classification : verrous physiques pour le papier, chiffrement pour l'électronique, et copies de sauvegarde sur site et hors site."
        },
        {
          type: "question",
          titre: "Contrôle de connaissance",
          points: [],
          narration:
            "Petit contrôle de connaissance. Prenez le temps de bien lire la question avant de répondre.",
          q: "Un serveur traite des données classifiées Secret et des données Public. Quelle classification l'organisation devrait-elle attribuer à ce serveur ?",
          choix: [
            "Public, car c'est le niveau le plus courant",
            "Secret, car l'actif hérite de la donnée la plus sensible qu'il traite",
            "Une moyenne entre Secret et Public",
            "Unclassified, car un serveur n'est pas une donnée"
          ],
          reponse: 1,
          explication:
            "Un actif doit être classifié au niveau de la donnée la plus sensible qu'il traite ou stocke. Ici, le serveur traite du Secret : il devient donc un actif Secret, avec les contrôles correspondants."
        },
        {
          type: "resume",
          titre: "Résumé de la leçon",
          points: [
            "Classifier données ET actifs selon leur valeur et leur impact",
            "PII, PHI et données propriétaires sont des données sensibles à protéger",
            "L'actif hérite de la classification de la donnée la plus sensible",
            "Marking = lisible par l'humain ; Labeling = lisible par le système",
            "Le handling découle de la classification, pas du support"
          ],
          narration:
            "Résumons. La classification est la première étape de la protection : elle attribue à chaque donnée et à chaque actif un niveau de sensibilité fondé sur la valeur et l'impact d'une compromission. Les PII, les PHI et les données propriétaires exigent une protection particulière. Un actif hérite toujours de la classification de la donnée la plus sensible qu'il traite. Enfin, distinguez le marking, lisible par l'humain, du labeling, lisible par le système, et souvenez-vous que les règles de manipulation dépendent de la classification et non du type de support."
        }
      ]
    },

    // ────────────────────────────────────────────────────────────
    // LEÇON 2 — Les rôles autour de la donnée
    // ────────────────────────────────────────────────────────────
    {
      id: "d2-l2",
      titre: "Les rôles de la donnée : owner, custodian, controller, processor",
      duree: 10,
      slides: [
        {
          type: "intro",
          titre: "Qui est responsable de quoi ?",
          points: [
            "Chaque actif doit avoir un propriétaire identifié",
            "L'accountability ne se délègue pas, les tâches oui",
            "Les rôles data sont un grand classique de l'examen"
          ],
          narration:
            "Dans cette leçon, nous allons répondre à une question essentielle : qui est responsable de quoi autour de la donnée ? L'examen CISSP adore ces questions de rôles, car elles testent votre jugement de manager. Retenez le principe fondateur : chaque actif doit avoir un propriétaire identifié, et si les tâches opérationnelles peuvent être déléguées, la responsabilité ultime, l'accountability, elle, ne se délègue jamais."
        },
        {
          type: "standard",
          titre: "Data Owner et Asset Owner",
          points: [
            "Le data owner classifie, catégorise et autorise l'accès aux données",
            "Typiquement un cadre dirigeant : CEO, président, chef de département",
            "Responsable ultime de la protection de l'actif",
            "Délègue les tâches, jamais l'accountability"
          ],
          narration:
            "Le data owner, ou propriétaire de la donnée, est la personne qui connaît le mieux l'importance de la donnée pour le métier. C'est lui qui classifie, catégorise et autorise l'accès. À l'examen, le data owner est presque toujours un cadre dirigeant : le CEO, un président ou un chef de département. Il porte la responsabilité ultime de la protection, s'assure que les contrôles appropriés sont en place, et délègue les tâches quotidiennes à d'autres rôles. Mais attention : il délègue les tâches, jamais la responsabilité."
        },
        {
          type: "standard",
          titre: "System Owner",
          points: [
            "Responsable du système qui stocke ou traite la donnée",
            "Développe et maintient le System Security Plan (NIST SP 800-18)",
            "Assure exploitation, maintenance, patching et formation des utilisateurs",
            "Distinct du data owner : le système versus la donnée"
          ],
          narration:
            "Le system owner est responsable du système qui stocke ou traite les données, y compris les configurations matérielles et logicielles. Selon le NIST SP 800-18, c'est lui qui développe et maintient le plan de sécurité du système, s'assure que le système est exploité conformément aux exigences, que les utilisateurs reçoivent la formation de sécurité requise, et il participe à l'identification et à l'évaluation des contrôles communs. Ne le confondez pas avec le data owner : l'un possède le système, l'autre possède la donnée."
        },
        {
          type: "standard",
          titre: "Data Custodian et Data Steward",
          points: [
            "Custodian : tâches quotidiennes déléguées de stockage et protection",
            "Sauvegardes, archivage, prévention de la perte, restauration",
            "Steward : responsabilité métier de la donnée (qualité, gouvernance, metadata)",
            "Custodian = technique, Steward = métier"
          ],
          narration:
            "Le data custodian, le gardien de la donnée, reçoit par délégation les responsabilités quotidiennes : stocker correctement les données, faire les sauvegardes, archiver, prévenir la perte ou la corruption, et restaurer si nécessaire. C'est typiquement un rôle technique, souvent au sein de l'équipe informatique. Le data steward, lui, porte la responsabilité métier de la donnée : sa qualité, sa gouvernance, sa conformité, la définition des métadonnées. Un moyen simple de les distinguer : le custodian s'occupe de la technique, le steward s'occupe du sens métier."
        },
        {
          type: "standard",
          titre: "Data Controller et Data Processor (GDPR)",
          points: [
            "Controller : décide quelles données traiter, pourquoi et comment",
            "Processor : traite les données pour le compte du controller",
            "Exemple : l'employeur est controller, le prestataire de paie est processor",
            "GDPR : restrictions de transfert hors UE et amendes en cas de violation"
          ],
          narration:
            "Deux rôles venus du monde du GDPR, incontournables à l'examen. Le data controller décide quelles données traiter, pourquoi et comment : par exemple, une entreprise qui collecte les informations personnelles de ses employés pour la paie. Le data processor, lui, traite les données pour le compte et sous la direction du controller : si l'entreprise confie sa paie à un prestataire externe, ce prestataire est le processor. Il ne doit utiliser les données que selon les directives du controller. Rappelez-vous aussi que le GDPR restreint les transferts de données hors de l'Union européenne, avec de lourdes amendes à la clé."
        },
        {
          type: "standard",
          titre: "DPO, administrateurs, utilisateurs et sujets",
          points: [
            "DPO : rôle indépendant qui supervise la stratégie de confidentialité et la conformité GDPR",
            "Security administrator : sécurité de l'infrastructure, outils, politiques",
            "Users : accèdent aux données selon leur rôle et le need-to-know",
            "Subject : toute entité qui accède à un objet (utilisateur, processus, service)"
          ],
          narration:
            "Complétons le tableau. Le Data Protection Officer est un rôle de leadership indépendant qui supervise la stratégie de protection de la vie privée et garantit la conformité aux exigences légales comme le GDPR. Le security administrator assure la sécurité globale de l'infrastructure : pare-feux, antivirus, surveillance du réseau. Les utilisateurs, eux, accèdent aux données pour accomplir leur travail, selon leur rôle et leur besoin d'en connaître. Et notez cette subtilité : les utilisateurs sont des subjects, mais un subject peut aussi être un programme, un processus ou un service, bref toute entité qui accède à une ressource."
        },
        {
          type: "schema",
          titre: "Vue d'ensemble des rôles",
          points: [
            "Owner : accountability et classification",
            "Controller : décide du traitement",
            "Processor : exécute le traitement",
            "Custodian : protection quotidienne",
            "Steward : qualité et gouvernance métier",
            "User : consomme selon le need-to-know"
          ],
          schema: {
            type: "grid",
            items: [
              "Data Owner — classifie, autorise, accountable",
              "Data Controller — décide quoi, pourquoi, comment",
              "Data Processor — traite pour le controller",
              "Data Custodian — sauvegardes, stockage, restauration",
              "Data Steward — qualité, gouvernance métier",
              "User / Subject — accès selon le rôle"
            ]
          },
          narration:
            "Voici la carte complète des rôles. Le data owner classifie et reste responsable en dernier ressort. Le controller décide du traitement, le processor l'exécute pour son compte. Le custodian assure la protection quotidienne, sauvegardes et restaurations. Le steward veille à la qualité et à la gouvernance métier. Et l'utilisateur consomme les données selon son rôle et son besoin d'en connaître. Gardez cette carte en tête : l'examen vous demandera régulièrement quel rôle correspond à quelle responsabilité."
        },
        {
          type: "standard",
          titre: "Need-to-know et moindre privilège",
          points: [
            "Need-to-know : accès uniquement aux données nécessaires à la tâche",
            "Least privilege : uniquement les privilèges nécessaires, rien de plus",
            "Deux principes qui fondent le provisionnement sécurisé des actifs",
            "Inventaire des actifs tangibles et intangibles comme point de départ"
          ],
          narration:
            "Deux principes gouvernent l'accès aux actifs. Le need-to-know impose qu'une personne n'accède à une donnée que si sa mission l'exige absolument. Le moindre privilège, least privilege, va dans le même sens pour les droits : uniquement les privilèges nécessaires à la tâche, et rien de plus. Ces principes s'appliquent dans le cadre d'une gestion d'actifs rigoureuse, qui commence toujours par un inventaire complet : les actifs tangibles comme le matériel, et les actifs intangibles comme les logiciels, les brevets, les droits d'auteur ou la réputation de l'entreprise."
        },
        {
          type: "question",
          titre: "Contrôle de connaissance",
          points: [],
          narration:
            "Vérifions que les rôles sont bien en place. Lisez attentivement le scénario.",
          q: "Une entreprise confie le traitement de sa paie à un prestataire externe. Au sens du GDPR, quel est le rôle du prestataire ?",
          choix: [
            "Data controller",
            "Data owner",
            "Data processor",
            "Data steward"
          ],
          reponse: 2,
          explication:
            "Le prestataire traite les données personnelles pour le compte et sous la direction de l'entreprise cliente : c'est un data processor. L'entreprise, qui décide quoi traiter et pourquoi, reste le data controller."
        },
        {
          type: "resume",
          titre: "Résumé de la leçon",
          points: [
            "Le data owner classifie et reste accountable ; il délègue les tâches",
            "Le system owner sécurise le système ; le custodian gère le quotidien",
            "Controller décide, processor exécute (GDPR)",
            "Le steward porte la qualité métier ; le DPO supervise la conformité",
            "Need-to-know et least privilege encadrent tout accès"
          ],
          narration:
            "En résumé, le data owner classifie la donnée et porte la responsabilité ultime, qu'il ne peut pas déléguer. Le system owner sécurise le système, le custodian exécute les tâches quotidiennes de protection, et le steward veille à la qualité métier. Côté GDPR, le controller décide du traitement et le processor l'exécute pour son compte, sous la supervision éventuelle d'un DPO. Et dans tous les cas, l'accès est gouverné par le need-to-know et le moindre privilège."
        }
      ]
    },

    // ────────────────────────────────────────────────────────────
    // LEÇON 3 — Cycle de vie de la donnée et états de la donnée
    // ────────────────────────────────────────────────────────────
    {
      id: "d2-l3",
      titre: "Cycle de vie de la donnée et data states",
      duree: 10,
      slides: [
        {
          type: "intro",
          titre: "Protéger la donnée du berceau à la tombe",
          points: [
            "Le cycle de vie couvre la donnée de sa création à sa destruction",
            "Chaque phase appelle des contrôles adaptés",
            "La donnée existe aussi dans trois états, chacun avec ses protections"
          ],
          narration:
            "On dit souvent qu'il faut protéger la donnée du berceau à la tombe. C'est l'idée du cycle de vie : depuis la création ou la collecte de la donnée jusqu'à sa destruction définitive, chaque phase appelle des contrôles adaptés. Et à tout moment de ce cycle, la donnée se trouve dans l'un de trois états : au repos, en transit ou en cours d'utilisation. Nous allons voir les deux dimensions dans cette leçon."
        },
        {
          type: "schema",
          titre: "Les phases du cycle de vie",
          points: [
            "Création : générer ou modifier la donnée",
            "Classification et stockage : classer puis stocker selon la classe",
            "Utilisation : protéger pendant le traitement et le partage",
            "Archivage : stockage long terme protégé",
            "Destruction : élimination définitive selon la classification"
          ],
          schema: {
            type: "flow",
            items: ["Création", "Classification & Stockage", "Utilisation", "Archivage", "Destruction"]
          },
          narration:
            "Voici le cycle de vie de la donnée. Tout commence par la création ou la collecte. Vient ensuite la classification, suivie du stockage avec des contrôles adaptés à la classe attribuée. Pendant l'utilisation, la donnée doit être protégée lors des transmissions et contre l'exfiltration. Quand elle n'est plus utilisée activement, elle passe en archivage, un stockage de long terme avec protection des données au repos. Enfin, quand elle n'est plus nécessaire, elle est détruite définitivement, avec une méthode adaptée à sa classification."
        },
        {
          type: "standard",
          titre: "Collecte et localisation des données",
          points: [
            "Règle d'or : ne pas collecter ce qui n'a pas de but clair",
            "La donnée non collectée ne peut pas fuiter",
            "Data location : copies de sauvegarde sur site ET hors site",
            "Distance suffisante entre sites pour éviter un sinistre commun"
          ],
          narration:
            "La façon la plus simple d'éviter la perte d'une donnée, c'est de ne pas la collecter. C'est la règle de la limitation de collecte, reprise par la plupart des réglementations de protection de la vie privée : si la donnée n'a pas de but d'utilisation clair, on ne la collecte pas et on ne la stocke pas. Pour ce qui est collecté, pensez à la localisation : la bonne pratique est de conserver une copie de sauvegarde sur site et une autre hors site, avec une distance suffisante entre les deux pour qu'un même sinistre ne détruise pas l'original et la sauvegarde."
        },
        {
          type: "standard",
          titre: "Localisation, résidence et souveraineté des données",
          points: [
            "Data localization : la LOI impose que la donnée reste dans le pays (ex. Russie, Chine)",
            "Data residency : CHOIX de l'organisation du lieu de stockage (conformité, latence, contrat)",
            "Data sovereignty : la donnée est soumise aux LOIS du pays où elle réside physiquement",
            "Cloud : les régions et zones du provider déterminent quelles juridictions s'appliquent",
            "Conflits de lois : CLOUD Act américain vs GDPR européen sur l'accès aux données"
          ],
          narration:
            "Trois notions proches mais distinctes à bien séparer pour l'examen. La data localization est une exigence légale : certains pays, comme la Russie ou la Chine, imposent que les données de leurs citoyens soient stockées et parfois traitées sur leur territoire. La data residency, elle, relève du choix de l'organisation : décider où stocker ses données pour des raisons de conformité, de latence ou de contrat. Enfin, la data sovereignty est le principe selon lequel une donnée est soumise aux lois du pays où elle réside physiquement. Dans le cloud, le choix des régions du fournisseur détermine donc quelles juridictions peuvent s'appliquer à vos données. Attention aux conflits de lois : le CLOUD Act américain peut obliger un fournisseur américain à remettre des données stockées en Europe, ce qui entre en tension directe avec le GDPR. D'où l'intérêt de clauses contractuelles solides, du chiffrement avec des clés gérées par le client, et d'une sélection réfléchie des régions cloud.",
          astuce: "💡 Conseil examen : localization = obligation légale de rester dans le pays ; residency = choix du lieu de stockage ; sovereignty = les lois locales s'appliquent à la donnée."
        },
        {
          type: "standard",
          titre: "Maintenance et rétention",
          points: [
            "Data maintenance : soin continu de la donnée à travers son cycle de vie",
            "Conserver aussi longtemps que nécessaire, mais pas plus longtemps",
            "Record retention : trois questions — quoi, combien de temps, comment",
            "Tendance : politiques de rétention courtes des e-mails pour limiter la responsabilité juridique"
          ],
          narration:
            "La maintenance des données, c'est l'effort continu, souvent automatisé, pour organiser et prendre soin de la donnée tout au long de son cycle de vie. La règle de rétention tient en une phrase : conserver la donnée aussi longtemps que le métier ou la loi l'exige, mais pas plus longtemps que nécessaire. Une politique de rétention répond à trois questions : quelles données retenir, combien de temps, et sous quelle forme pour qu'elles restent accessibles. La ligne directrice générale pour les données d'entreprise est de sept ans, mais elle varie selon les pays et les réglementations. Notez la tendance actuelle : des politiques de rétention courtes pour les e-mails, afin de réduire les responsabilités juridiques.",
          astuce: "💡 Conseil examen : la rétention concerne les données, mais aussi les supports, les systèmes ET le personnel qui y a accès."
        },
        {
          type: "schema",
          titre: "Les trois états de la donnée",
          points: [
            "Data at rest : stockée sur un support",
            "Data in transit : transmise sur un réseau",
            "Data in use : en mémoire, utilisée par une application"
          ],
          schema: {
            type: "grid",
            items: [
              "At Rest — disques, bandes, sauvegardes → chiffrement",
              "In Transit — réseau, sessions → TLS, IPsec",
              "In Use — mémoire, traitement → patching, purge des buffers"
            ]
          },
          narration:
            "À tout instant, une donnée est dans l'un de trois états. Au repos, data at rest, elle est stockée sur un support : disque dur, bande, clé USB, sauvegarde. En transit, data in transit ou in motion, elle circule sur un réseau. En cours d'utilisation, data in use, elle est en mémoire, traitée par une application. Chaque état demande une approche différente, et l'examen adore vous demander laquelle."
        },
        {
          type: "standard",
          titre: "Protéger chaque état",
          points: [
            "At rest : chiffrer volumes, sauvegardes, et tous les supports (USB, SAN, NAS...)",
            "In transit : chiffrer partout, TLS et IPsec, même en interne",
            "In use : moins d'options — patching, builds standardisés, antimalware",
            "Les applications doivent purger les buffers mémoire après usage"
          ],
          narration:
            "Pour la donnée au repos, la réponse est le chiffrement : volumes système, volumes de données, sauvegardes, sans oublier tous les supports comme les bandes, clés USB, disques externes, baies RAID, SAN et NAS. Pour la donnée en transit, chiffrez partout : certificats TLS sur les serveurs web, IPsec pour les sessions, y compris pour les applications internes. La donnée en cours d'utilisation est la plus difficile à protéger, car les options sont limitées : maintenir les systèmes à jour, utiliser des builds standardisés, exécuter des antimalwares, et s'assurer que les applications purgent les buffers mémoire dès que la donnée n'est plus nécessaire.",
          astuce: "💡 Conseil examen : le chiffrement fort est la MEILLEURE protection de la confidentialité pour les données at rest et in transit."
        },
        {
          type: "standard",
          titre: "Rémanence des données",
          points: [
            "Data remanence : donnée qui subsiste après un effacement supposé",
            "Flux magnétique résiduel et slack space (espace inutilisé des clusters)",
            "Certains OS remplissent le slack space avec des données de la mémoire",
            "D'où l'interdiction de traiter du classifié sur des systèmes non classifiés"
          ],
          narration:
            "La rémanence des données, data remanence, désigne les données qui subsistent sur un support après un effacement supposé. Sur un disque magnétique, il s'agit du flux magnétique résiduel, mais aussi du slack space, cet espace inutilisé à l'intérieur des clusters où des fragments de données peuvent traîner. Détail important : certains systèmes d'exploitation remplissent le slack space avec des données issues de la mémoire. C'est précisément pour cela qu'on ne doit jamais traiter des données classifiées sur un système non classifié : des fragments pourraient y rester à votre insu."
        },
        {
          type: "standard",
          titre: "TEMPEST et émanations électromagnétiques",
          points: [
            "TEMPEST : limiter les émanations électromagnétiques des équipements",
            "Contre-mesure au Van Eck phreaking (interception des émanations)",
            "Moyens : cages de Faraday, bruit blanc, zones de contrôle, blindage",
            "Mémoires : RAM volatile ; ROM, PROM, EPROM, EEPROM non volatiles"
          ],
          narration:
            "La donnée peut aussi fuir par des canaux physiques. TEMPEST désigne les technologies conçues pour minimiser les émanations électromagnétiques des équipements informatiques, qui pourraient sinon être interceptées, une attaque appelée Van Eck phreaking. Les contre-mesures incluent les cages de Faraday, le bruit blanc, les zones de contrôle et le blindage. Profitons-en pour un rappel sur les mémoires : la RAM est volatile, elle perd son contenu hors tension ; la ROM et ses variantes PROM, EPROM effaçable aux ultraviolets, et EEPROM effaçable électriquement, sont non volatiles et peuvent donc retenir des données sensibles."
        },
        {
          type: "question",
          titre: "Contrôle de connaissance",
          points: [],
          narration:
            "Une question sur les états de la donnée. Réfléchissez à l'état concerné avant de choisir.",
          q: "Quel état de la donnée est le PLUS difficile à protéger, avec le moins d'options de contrôle disponibles ?",
          choix: [
            "Data at rest",
            "Data in transit",
            "Data in use",
            "Data archivée"
          ],
          reponse: 2,
          explication:
            "La donnée en cours d'utilisation (in use) est en clair en mémoire pendant son traitement : les options se limitent au patching, aux builds standardisés, à l'antimalware et à la purge des buffers. At rest et in transit bénéficient du chiffrement, bien plus robuste."
        },
        {
          type: "resume",
          titre: "Résumé de la leçon",
          points: [
            "Cycle de vie : création, classification et stockage, utilisation, archivage, destruction",
            "Ne pas collecter sans but clair ; sauvegardes sur site et hors site",
            "Localization (obligation légale), residency (choix), sovereignty (lois locales) — attention CLOUD Act vs GDPR",
            "Rétention : aussi longtemps que nécessaire, pas plus",
            "Trois états : at rest et in transit se chiffrent, in use est le plus dur à protéger",
            "Rémanence et émanations : slack space, TEMPEST, Van Eck phreaking"
          ],
          narration:
            "Récapitulons. Le cycle de vie mène la donnée de la création à la destruction, en passant par la classification, le stockage, l'utilisation et l'archivage. On ne collecte que ce qui a un but clair, on garde des sauvegardes sur site et hors site, et on retient la donnée aussi longtemps que nécessaire, mais pas davantage. La donnée existe en trois états : le chiffrement protège le repos et le transit, tandis que l'état in use reste le plus difficile à sécuriser. Enfin, méfiez-vous de la rémanence dans le slack space et des émanations électromagnétiques, contrées par TEMPEST."
        }
      ]
    },

    // ────────────────────────────────────────────────────────────
    // LEÇON 4 — Rétention des actifs et destruction sécurisée
    // ────────────────────────────────────────────────────────────
    {
      id: "d2-l4",
      titre: "Rétention des actifs, EOL et destruction sécurisée",
      duree: 9,
      slides: [
        {
          type: "intro",
          titre: "Garder, puis détruire proprement",
          points: [
            "La rétention ne concerne pas que la donnée : matériel et personnel aussi",
            "EOL et EOS : anticiper la fin de vie des produits",
            "La destruction doit être proportionnée à la classification"
          ],
          narration:
            "Conserver une donnée pendant dix ans ne sert à rien si plus aucun matériel ne peut la lire, ou si plus personne ne sait faire fonctionner ce matériel. La rétention des actifs englobe donc la donnée, le matériel capable de la lire, et le personnel qui sait l'exploiter. Et quand vient le moment de s'en séparer, la destruction doit être proportionnée à la classification. C'est le programme de cette leçon."
        },
        {
          type: "standard",
          titre: "End-of-Life et End-of-Support",
          points: [
            "EOL : le vendeur cesse de commercialiser le produit",
            "EOS ou EOSL : le vendeur cesse tout support (correctifs, assistance)",
            "S'applique au matériel comme au logiciel",
            "Un système en EOS ne reçoit plus de correctifs : risque majeur"
          ],
          narration:
            "Deux jalons à connaître dans la vie d'un produit. End-of-Life, EOL, marque le moment où le vendeur cesse de commercialiser le produit. End-of-Support, EOS, parfois appelé End-of-Service-Life, marque la fin de tout support : plus de correctifs de sécurité, plus d'assistance. Ces jalons s'appliquent aussi bien au matériel qu'au logiciel. Du point de vue du manager, un système en EOS est un risque majeur, car les vulnérabilités découvertes ensuite ne seront jamais corrigées. Il faut planifier le remplacement avant d'atteindre cette échéance."
        },
        {
          type: "schema",
          titre: "Le spectre de la destruction",
          points: [
            "Erasing : simple suppression, la rémanence subsiste",
            "Clearing : réécriture, résiste aux outils logiciels standards",
            "Purging : vise l'irrécupérable même en laboratoire",
            "Destruction : élimination physique, la plus sûre"
          ],
          schema: {
            type: "flow",
            items: ["Erasing", "Clearing (overwrite)", "Purging", "Destruction physique"]
          },
          narration:
            "Visualisez la destruction comme un spectre d'assurance croissante. Tout en bas, l'erasing : une simple opération de suppression, qui laisse la rémanence intacte et ne protège de rien. Ensuite, le clearing : on réécrit les données existantes avec un motif, ce qui empêche la récupération par les fonctions normales des logiciels de récupération, mais des techniques avancées de laboratoire peuvent encore ramener les données. Puis le purging, qui vise à rendre la donnée irrécupérable par toute technique connue, y compris en laboratoire. Et enfin la destruction physique, la méthode la plus sûre."
        },
        {
          type: "standard",
          titre: "Clearing versus Purging : la nuance qui compte",
          points: [
            "Clearing : protège contre la récupération logicielle standard",
            "Purging : vise à résister même aux techniques de laboratoire",
            "Le purging n'est PAS jugé acceptable pour du Top Secret",
            "La politique définit la méthode acceptable par classification (NIST SP 800-88)"
          ],
          narration:
            "L'examen joue beaucoup sur la nuance entre clearing et purging. Le clearing protège uniquement contre la récupération par des utilitaires logiciels standards. Le purging a l'intention de rendre la donnée irrécupérable par toute technique connue, mais il n'est pas garanti contre les techniques les plus avancées, et c'est pourquoi il n'est pas considéré comme acceptable pour des données Top Secret. La référence en la matière est le NIST SP 800-88 : la politique de l'organisation doit définir les méthodes de destruction acceptables selon le type de support et la classification de la donnée."
        },
        {
          type: "standard",
          titre: "Degaussing et destruction physique",
          points: [
            "Degaussing : champ magnétique puissant, efface bandes et disques magnétiques",
            "Sans effet sur les SSD et les supports optiques",
            "Destruction physique : broyage, incinération, pulvérisation, désintégration",
            "Méthode privilégiée pour les SSD et composants électroniques"
          ],
          narration:
            "Le degaussing, ou démagnétisation, applique un champ magnétique puissant pour effacer les supports magnétiques : bandes et disques durs classiques. Attention, piège d'examen : le degaussing n'a aucun effet sur les supports optiques ni sur les SSD, qui ne stockent pas l'information magnétiquement. Pour les SSD et composants électroniques, on privilégie la destruction physique : broyage, incinération, pulvérisation ou désintégration, éventuellement combinée à d'autres méthodes. Quand la donnée doit absolument disparaître, la destruction physique reste la valeur sûre.",
          astuce: "💡 Conseil examen : degaussing + SSD = mauvaise réponse. Pour un SSD, pensez destruction physique ou crypto-shredding."
        },
        {
          type: "standard",
          titre: "Crypto-shredding et destruction défendable",
          points: [
            "Cryptographic erasure : chiffrer fort, puis détruire la clé",
            "Meilleure méthode contre la rémanence dans le cloud",
            "Defensible destruction : contrôlée, légalement défendable, conforme",
            "File carving : technique forensique qui récupère les fichiers non détruits"
          ],
          narration:
            "Le crypto-shredding, ou cryptographic erasure, consiste à chiffrer les données avec un chiffrement fort, puis à détruire la clé de chiffrement : sans la clé, les données deviennent logiquement irrécupérables. C'est la meilleure méthode pour traiter la rémanence dans le cloud, où vous ne contrôlez pas physiquement les disques. Pensez aussi à la destruction défendable : éliminer les données de manière contrôlée, légalement défendable et conforme aux réglementations. Et souvenez-vous que si la destruction est bâclée, des techniques forensiques comme le file carving peuvent reconstruire des fichiers à partir des données brutes du support, même sans index du système de fichiers."
        },
        {
          type: "question",
          titre: "Contrôle de connaissance",
          points: [],
          narration:
            "Question pratique sur la destruction. Pensez au type de support avant de répondre.",
          q: "Votre organisation résilie un contrat cloud et veut s'assurer que ses données ne pourront pas être récupérées sur l'infrastructure du fournisseur. Quelle est la MEILLEURE méthode ?",
          choix: [
            "Demander au fournisseur de démagnétiser ses disques",
            "Le crypto-shredding : détruire les clés de chiffrement des données",
            "Supprimer les fichiers puis vider la corbeille",
            "Réécrire les volumes avec des zéros"
          ],
          reponse: 1,
          explication:
            "Dans le cloud, vous ne contrôlez pas les supports physiques : impossible de garantir un degaussing ou une réécriture exhaustive sur des supports mutualisés. Le crypto-shredding — chiffrer les données puis détruire la clé — est la meilleure réponse à la rémanence cloud. La simple suppression laisse une rémanence totale."
        },
        {
          type: "question",
          titre: "Contrôle de connaissance",
          points: [],
          narration:
            "Encore une, sur la nuance entre les méthodes d'assainissement.",
          q: "Quelle méthode d'assainissement protège contre la récupération par des utilitaires logiciels standards, mais PAS contre des techniques de laboratoire avancées ?",
          choix: ["Purging", "Clearing", "Destruction", "Degaussing"],
          reponse: 1,
          explication:
            "Le clearing (réécriture avec un motif) empêche la récupération par les fonctions normales des logiciels, mais des techniques avancées peuvent encore restaurer les données. Le purging vise l'irrécupérabilité même en laboratoire, et la destruction physique élimine le support lui-même."
        },
        {
          type: "resume",
          titre: "Résumé de la leçon",
          points: [
            "Rétention = données + matériel capable de les lire + personnel compétent",
            "EOL : fin de commercialisation ; EOS : fin des correctifs, risque majeur",
            "Erasing < Clearing < Purging < Destruction : assurance croissante",
            "Degaussing pour le magnétique seulement ; destruction physique pour les SSD",
            "Crypto-shredding : la réponse à la rémanence dans le cloud"
          ],
          narration:
            "Résumons cette leçon. La rétention couvre les données, mais aussi le matériel capable de les lire et le personnel qui sait l'utiliser. Anticipez les jalons EOL et EOS, car un produit sans support est un risque permanent. Sur le spectre de la destruction, retenez l'ordre : erasing, clearing, purging, puis destruction physique, avec une assurance croissante. Le degaussing ne fonctionne que sur les supports magnétiques, jamais sur les SSD. Et pour le cloud, la bonne réponse est presque toujours le crypto-shredding."
        }
      ]
    },

    // ────────────────────────────────────────────────────────────
    // LEÇON 5 — Contrôles de protection : DRM, DLP, CASB, baselines
    // ────────────────────────────────────────────────────────────
    {
      id: "d2-l5",
      titre: "DRM, DLP, CASB, baselines et scoping/tailoring",
      duree: 11,
      slides: [
        {
          type: "intro",
          titre: "Choisir et adapter les contrôles",
          points: [
            "Des technologies dédiées protègent la donnée dans chaque état",
            "DRM, DLP et CASB : trois familles à bien distinguer",
            "Les baselines se personnalisent par scoping et tailoring"
          ],
          narration:
            "Dernière leçon du domaine : comment choisir et adapter les contrôles de protection des données. Nous verrons trois familles de technologies que l'examen adore comparer : le DRM pour protéger la propriété intellectuelle, le DLP pour empêcher l'exfiltration, et le CASB pour étendre les politiques de sécurité vers le cloud. Puis nous verrons comment partir d'une baseline de contrôles et l'adapter à votre organisation grâce au scoping et au tailoring."
        },
        {
          type: "standard",
          titre: "Digital Rights Management (DRM)",
          points: [
            "Protège les œuvres et contenus soumis au droit d'auteur",
            "Empêche l'usage, la modification et la distribution non autorisés",
            "La protection voyage avec la donnée, quel que soit son état",
            "Utile quand on ne peut pas chiffrer les volumes de données"
          ],
          narration:
            "Le Digital Rights Management regroupe les méthodes qui protègent les contenus soumis au droit d'auteur. Son but : empêcher l'utilisation, la modification et la distribution non autorisées d'une œuvre. La grande force du DRM, c'est que la protection voyage avec la donnée : où que le fichier aille, les restrictions le suivent, quel que soit son état. C'est particulièrement utile pour la donnée au repos, notamment quand vous ne pouvez pas chiffrer les volumes eux-mêmes."
        },
        {
          type: "standard",
          titre: "Data Loss Prevention (DLP)",
          points: [
            "Détecte et bloque les tentatives d'exfiltration de données",
            "Network-based : en bordure de réseau, scanne le trafic sortant",
            "Endpoint-based : scanne les fichiers, bloque impression et copie USB",
            "Cloud-based : conçu pour les environnements cloud natifs"
          ],
          narration:
            "Le Data Loss Prevention, DLP, désigne les systèmes qui détectent et bloquent les tentatives d'exfiltration en surveillant la donnée en mouvement, au repos et en usage. Il en existe trois types principaux. Le DLP réseau se place en bordure du réseau et scanne tout le trafic sortant : par exemple, une règle peut bloquer un flux contenant des numéros au format sécurité sociale. Le DLP endpoint scanne les fichiers stockés et peut empêcher l'impression ou la copie de données sensibles vers un support amovible. Enfin, le DLP cloud est conçu spécifiquement pour les environnements cloud natifs.",
          astuce: "💡 Conseil examen : exfiltration ou fuite de données dans l'énoncé → pensez DLP. Protection du copyright → pensez DRM."
        },
        {
          type: "standard",
          titre: "Cloud Access Security Broker (CASB)",
          points: [
            "Placé logiquement entre les utilisateurs et les ressources cloud",
            "Étend les protections internes vers le cloud, applique les politiques",
            "Quatre piliers : visibilité, sécurité des données, détection des menaces, conformité",
            "Combine souvent DLP, WAF, authentification et pare-feu"
          ],
          narration:
            "Le Cloud Access Security Broker, CASB, est un logiciel placé logiquement entre les utilisateurs et les ressources cloud. Sa mission : garantir que les ressources cloud bénéficient des mêmes protections que les ressources internes, en appliquant les politiques de sécurité et de conformité lors de l'accès aux applications et aux données cloud. Retenez ses quatre piliers : visibilité, sécurité des données, détection des menaces et conformité. En pratique, un CASB combine souvent un DLP, un pare-feu applicatif web, des fonctions d'authentification et un pare-feu réseau, ce qui en fait un excellent outil pour la donnée en usage et en transit."
        },
        {
          type: "standard",
          titre: "Anonymisation, pseudonymisation, tokenisation",
          points: [
            "Anonymization : identités supprimées, irréversible quand bien faite",
            "Randomized masking : méthode d'anonymisation non réversible",
            "Pseudonymization : alias, réversible avec le jeu de correspondance",
            "Tokenization : jeton aléatoire, l'original reste dans un coffre (vault)"
          ],
          narration:
            "Pour partager ou traiter des données personnelles en limitant les risques, plusieurs techniques existent. L'anonymisation remplace les données privées par des données utilisables mais inexactes : les identités sont supprimées de façon permanente et, bien réalisée, notamment par masquage aléatoire, elle est irréversible. La pseudonymisation remplace les données par des alias, mais un jeu de données externe conserve la correspondance : elle est donc réversible si l'on détient la clé. La tokenisation remplace la donnée par un jeton aléatoire sans valeur propre, l'original restant dans un coffre sécurisé, comme dans les transactions par carte bancaire où le point de vente ne voit jamais le numéro de carte, seulement le jeton.",
          astuce: "💡 Conseil examen : anonymisation = irréversible ; pseudonymisation, tokenisation et chiffrement = réversibles (quasi-anonymisation)."
        },
        {
          type: "standard",
          titre: "Baselines de sécurité",
          points: [
            "Baseline : niveau minimal documenté de configuration de sécurité",
            "Point de départ commun, jamais une fin en soi",
            "Doit ensuite être ajustée aux besoins réels de l'organisation",
            "Exemples : baselines NIST SP 800-53 par niveau d'impact"
          ],
          narration:
            "Une baseline est le niveau minimal documenté de configuration de sécurité autorisé par un standard ou par l'organisation. C'est un excellent point de départ : plutôt que de choisir des centaines de contrôles un par un, on part d'un ensemble éprouvé, comme les baselines du NIST par niveau d'impact. Mais une baseline n'est jamais une fin en soi : elle contient des contrôles inutiles pour votre contexte et il peut lui en manquer d'autres. C'est là qu'interviennent le tailoring et le scoping."
        },
        {
          type: "schema",
          titre: "De la baseline aux contrôles adaptés",
          points: [
            "Sélection d'une baseline de contrôles",
            "Scoping : retirer les contrôles qui ne s'appliquent pas",
            "Tailoring : ajuster les contrôles à la mission et au contexte",
            "Contrôles compensatoires et paramètres définis par l'organisation"
          ],
          schema: {
            type: "flow",
            items: ["Baseline", "Scoping (retirer l'inapplicable)", "Tailoring (ajuster à la mission)", "Contrôles adaptés"]
          },
          narration:
            "Voici le processus. On sélectionne d'abord une baseline. Le scoping consiste à en délimiter le périmètre : on passe en revue la liste des contrôles et on retire ceux qui ne s'appliquent pas aux systèmes à protéger. Par exemple, inutile de garder des contrôles sur les communications sans fil si aucun système n'en utilise. Le tailoring, dont le scoping fait partie, va plus loin : il ajuste la liste des contrôles à la mission de l'organisation, en identifiant les contrôles communs, en fixant les paramètres définis par l'organisation, et en sélectionnant des contrôles compensatoires si nécessaire. Résultat : un ensemble de contrôles réellement adapté."
        },
        {
          type: "standard",
          titre: "Sélection des standards et des vendeurs",
          points: [
            "Identifier les standards applicables : PCI DSS, GDPR, etc.",
            "Même sans obligation, un standard communautaire solide aide (NIST SP 800)",
            "Processus de sélection objectif et mesurable, reproductible",
            "Vendor selection : même logique, appliquée aux fournisseurs"
          ],
          narration:
            "Les organisations doivent identifier les standards qui s'appliquent à elles, comme PCI DSS pour les cartes de paiement ou le GDPR pour les données personnelles européennes, et s'assurer que les contrôles choisis y sont pleinement conformes. Même sans obligation, s'appuyer sur un standard communautaire bien conçu, comme les documents NIST SP 800, est une bonne pratique. La sélection de standards, comme la sélection de vendeurs, doit être un processus objectif et mesurable : si une équipe totalement différente refaisait l'exercice, elle devrait aboutir au même choix."
        },
        {
          type: "question",
          titre: "Contrôle de connaissance",
          points: [],
          narration:
            "Testons la distinction entre scoping et tailoring, un classique de l'examen.",
          q: "Une organisation part d'une baseline NIST et retire les contrôles relatifs aux réseaux sans fil car aucun de ses systèmes n'en utilise. Comment s'appelle ce processus ?",
          choix: [
            "Tailoring uniquement",
            "Scoping",
            "Standards selection",
            "Hardening"
          ],
          reponse: 1,
          explication:
            "Retirer d'une baseline les contrôles qui ne s'appliquent pas aux systèmes concernés, c'est le scoping. Le scoping fait partie du processus plus large de tailoring, qui inclut aussi l'ajustement des paramètres et les contrôles compensatoires — mais l'action décrite ici est précisément le scoping."
        },
        {
          type: "question",
          titre: "Contrôle de connaissance",
          points: [],
          narration:
            "Une dernière question sur les technologies de protection.",
          q: "Quelle solution est spécifiquement conçue pour garantir que les ressources cloud bénéficient des mêmes politiques de sécurité que les ressources internes ?",
          choix: ["DLP réseau", "DRM", "CASB", "SIEM"],
          reponse: 2,
          explication:
            "Le Cloud Access Security Broker (CASB) se place logiquement entre les utilisateurs et les ressources cloud pour appliquer les politiques de sécurité et de conformité de l'organisation. Le DLP bloque l'exfiltration, le DRM protège le copyright, et le SIEM centralise les journaux."
        },
        {
          type: "resume",
          titre: "Résumé de la leçon",
          points: [
            "DRM : protège le copyright, la protection voyage avec la donnée",
            "DLP : bloque l'exfiltration — network, endpoint, cloud",
            "CASB : visibilité, sécurité des données, détection des menaces, conformité",
            "Anonymisation irréversible ; pseudonymisation et tokenisation réversibles",
            "Baseline → scoping (retirer) → tailoring (ajuster) → contrôles adaptés"
          ],
          narration:
            "Concluons ce domaine. Le DRM protège les contenus soumis au droit d'auteur et sa protection accompagne la donnée partout. Le DLP détecte et bloque l'exfiltration, en version réseau, endpoint ou cloud. Le CASB étend vos politiques vers le cloud avec ses quatre piliers : visibilité, sécurité des données, détection des menaces et conformité. Pour les données personnelles, l'anonymisation est irréversible, tandis que pseudonymisation, tokenisation et chiffrement sont réversibles. Et pour les contrôles, partez d'une baseline, retirez l'inapplicable par scoping, puis ajustez par tailoring. Vous avez maintenant tous les outils du Domaine 2."
        }
      ]
    }
  ],

  // ────────────────────────────────────────────────────────────
  // QUIZ — questions type examen
  // ────────────────────────────────────────────────────────────
  quiz: [
    {
      q: "Que devrait faire une organisation EN PREMIER avant de pouvoir protéger efficacement ses données ?",
      choix: [
        "Déployer une solution DLP sur le réseau",
        "Identifier et classifier les informations et les actifs",
        "Chiffrer toutes les données au repos",
        "Souscrire une cyber-assurance"
      ],
      reponse: 1,
      explication:
        "On ne peut protéger que ce que l'on connaît : l'identification et la classification des actifs sont la première étape du cycle de vie, généralement formalisées dans la politique de sécurité. DLP, chiffrement et assurance sont des contrôles qui viennent APRÈS, une fois que l'on sait quoi protéger et à quel niveau.",
      difficulte: 1
    },
    {
      q: "Qui est le MIEUX placé pour déterminer la classification d'un ensemble de données métier ?",
      choix: [
        "Le data custodian, qui gère les sauvegardes",
        "L'administrateur sécurité, qui configure les contrôles",
        "Le data owner, qui connaît la valeur de la donnée pour le métier",
        "L'utilisateur final, qui manipule la donnée au quotidien"
      ],
      reponse: 2,
      explication:
        "Le data owner — typiquement un cadre dirigeant ou chef de département — est la personne la plus familière avec l'importance de la donnée pour le métier ; c'est lui qui classifie et autorise l'accès. Le custodian exécute des tâches déléguées, l'administrateur applique les contrôles, et l'utilisateur consomme la donnée : aucun d'eux ne porte l'accountability de la classification.",
      difficulte: 1
    },
    {
      q: "Une entreprise décide quelles données personnelles collecter sur ses clients et dans quel but, puis mandate un tiers pour les analyser. Au sens du GDPR, quels sont respectivement leurs rôles ?",
      choix: [
        "Processor et controller",
        "Controller et processor",
        "Owner et custodian",
        "Steward et processor"
      ],
      reponse: 1,
      explication:
        "Le data controller décide quelles données traiter, pourquoi et comment : c'est l'entreprise. Le data processor traite les données pour le compte et sous la direction du controller : c'est le tiers mandaté. Owner/custodian et steward sont des rôles internes de gouvernance, pas les rôles GDPR demandés ici.",
      difficulte: 1
    },
    {
      q: "Quelle est la MEILLEURE méthode pour protéger la confidentialité des données au repos ?",
      choix: [
        "Un contrôle d'accès basé sur les rôles",
        "Un chiffrement fort",
        "Une politique de mots de passe robuste",
        "La journalisation des accès"
      ],
      reponse: 1,
      explication:
        "Le chiffrement fort est la meilleure protection de la confidentialité pour les données au repos : même si le support est volé ou l'accès contourné, la donnée reste illisible. Le RBAC et les mots de passe protègent l'accès logique mais pas le support lui-même, et la journalisation est un contrôle détectif, pas préventif.",
      difficulte: 1
    },
    {
      q: "Un data owner surchargé souhaite confier les sauvegardes quotidiennes et la restauration des données à l'équipe informatique. Quel rôle cette équipe assume-t-elle ?",
      choix: [
        "Data controller",
        "Data steward",
        "Data custodian",
        "Data processor"
      ],
      reponse: 2,
      explication:
        "Le data custodian reçoit par délégation les responsabilités quotidiennes de stockage et de protection : sauvegardes, archivage, restauration, prévention de la perte. Le steward porte la qualité métier, le controller décide du traitement (contexte GDPR) et le processor traite pour le compte d'un controller.",
      difficulte: 1
    },
    {
      q: "Quelle affirmation décrit le MIEUX la différence entre labeling et marking ?",
      choix: [
        "Le labeling est lisible par l'humain, le marking par le système",
        "Le labeling est lisible par le système, le marking par l'humain",
        "Les deux termes sont strictement synonymes",
        "Le marking ne s'applique qu'aux documents papier"
      ],
      reponse: 1,
      explication:
        "Le labeling associe des attributs de sécurité lisibles par le système (métadonnées, codes-barres, RFID), permettant une application automatique des politiques. Le marking est la forme lisible par l'humain (tampon, bandeau), qui permet une application par les processus. Le marking s'applique aussi bien au physique qu'à l'électronique.",
      difficulte: 2
    },
    {
      q: "Un employé demande l'accès à des données classifiées Confidential pour un nouveau projet. Que devrait exiger le processus EN PREMIER ?",
      choix: [
        "Que l'employé signe une décharge de responsabilité",
        "L'approbation formelle du data owner et la vérification du besoin d'en connaître",
        "Une augmentation générale de la clearance de tout le département",
        "L'installation d'un agent DLP sur son poste"
      ],
      reponse: 1,
      explication:
        "Tout changement d'accès doit passer par un processus formel d'approbation impliquant le data owner, fondé sur le need-to-know, avec information de l'utilisateur sur les règles du niveau concerné. Élever la clearance de tout un département viole le moindre privilège ; la décharge et le DLP ne remplacent pas l'autorisation formelle.",
      difficulte: 2
    },
    {
      q: "Quel est l'objectif PRINCIPAL de la gestion des actifs (asset management) ?",
      choix: [
        "Optimiser les coûts d'achat du matériel",
        "Prévenir les pertes en inventoriant, suivant et protégeant les actifs",
        "Accélérer le déploiement des nouveaux systèmes",
        "Satisfaire les auditeurs financiers"
      ],
      reponse: 1,
      explication:
        "La gestion des actifs — tangibles et intangibles — commence par l'inventaire et vise avant tout à prévenir les pertes, en suivant les actifs et en les protégeant tout au long de leur vie. Les bénéfices financiers ou d'audit sont secondaires par rapport à cet objectif de protection.",
      difficulte: 1
    },
    {
      q: "Quelle est la façon la PLUS simple et la plus efficace d'éviter la perte d'une donnée sensible ?",
      choix: [
        "La chiffrer avec un algorithme fort",
        "Ne pas la collecter si elle n'a pas de but métier clair",
        "La répliquer sur plusieurs sites",
        "La pseudonymiser dès la collecte"
      ],
      reponse: 1,
      explication:
        "Une donnée qui n'existe pas ne peut ni fuiter ni être volée : la limitation de collecte est la première ligne de défense, reprise par la plupart des réglementations de protection de la vie privée. Chiffrement, réplication et pseudonymisation protègent des données déjà collectées — donc déjà exposées à un risque.",
      difficulte: 1
    },
    {
      q: "Une organisation conserve tous ses e-mails indéfiniment « au cas où ». Quel est le PRINCIPAL risque de cette pratique du point de vue d'un manager ?",
      choix: [
        "Le coût de stockage devient prohibitif",
        "Les e-mails anciens sont difficiles à rechercher",
        "L'augmentation de la responsabilité juridique et de la surface d'exposition",
        "Les sauvegardes deviennent plus lentes"
      ],
      reponse: 2,
      explication:
        "Conserver des données plus longtemps que nécessaire accroît la responsabilité juridique (tout e-mail conservé est produisible en justice) et la surface d'exposition en cas de compromission. C'est pourquoi la tendance est aux politiques de rétention courtes pour les e-mails. Le coût et la performance sont des considérations réelles mais secondaires face au risque juridique.",
      difficulte: 2
    },
    {
      q: "Quelle règle résume le MIEUX une politique de rétention des données saine ?",
      choix: [
        "Conserver toutes les données au moins dix ans",
        "Conserver aussi longtemps que l'exige le besoin métier ou légal, mais pas plus longtemps",
        "Supprimer toutes les données après un an pour limiter les risques",
        "Laisser chaque département décider librement de sa rétention"
      ],
      reponse: 1,
      explication:
        "La rétention doit être bornée dans les deux sens : pas moins que ce que le métier et la loi exigent, pas plus que nécessaire. Une durée uniforme (dix ans ou un an) ignore les exigences réglementaires variées, et laisser chaque département décider sans cadre produit une rétention incohérente et indéfendable.",
      difficulte: 2
    },
    {
      q: "Pourquoi ne faut-il JAMAIS traiter des données classifiées sur un système non classifié ?",
      choix: [
        "Les systèmes non classifiés sont trop lents",
        "Certains OS écrivent des données de la mémoire dans le slack space, créant une rémanence invisible",
        "Les licences logicielles l'interdisent",
        "Le chiffrement ne fonctionne pas sur ces systèmes"
      ],
      reponse: 1,
      explication:
        "Certains systèmes d'exploitation remplissent le slack space (espace inutilisé des clusters) avec des données provenant de la mémoire : des fragments de données classifiées peuvent donc persister sur le disque à l'insu de l'utilisateur. C'est un problème de rémanence, pas de performance, de licence ou de chiffrement.",
      difficulte: 3
    },
    {
      q: "Quel terme désigne les données qui subsistent sur un support après un effacement supposé ?",
      choix: [
        "Data remanence",
        "Slack space",
        "File carving",
        "Data masking"
      ],
      reponse: 0,
      explication:
        "La data remanence est la donnée résiduelle qui subsiste après un effacement — flux magnétique résiduel ou fragments dans le slack space. Le slack space est un lieu où la rémanence se cache (pas le phénomène lui-même), le file carving est la technique forensique qui exploite cette rémanence, et le masking est une technique d'anonymisation.",
      difficulte: 1
    },
    {
      q: "Votre organisation doit se débarrasser de disques durs magnétiques ayant contenu des données Top Secret. Quelle approche est la PLUS appropriée ?",
      choix: [
        "Clearing par réécriture simple",
        "Purging par degaussing",
        "Destruction physique (broyage ou incinération)",
        "Suppression des partitions et reformatage"
      ],
      reponse: 2,
      explication:
        "Le purging n'est pas considéré comme acceptable pour des données Top Secret, car il n'est pas garanti contre les techniques les plus avancées. Pour la classification la plus élevée, la destruction physique — broyage, incinération, pulvérisation — est la méthode la plus sûre. Le clearing et le reformatage laissent une rémanence exploitable.",
      difficulte: 2
    },
    {
      q: "Quelle méthode d'assainissement est TOTALEMENT inefficace sur un SSD ?",
      choix: [
        "La destruction physique",
        "Le crypto-shredding",
        "Le degaussing",
        "Le broyage"
      ],
      reponse: 2,
      explication:
        "Le degaussing agit sur le magnétisme : il efface bandes et disques magnétiques, mais n'a aucun effet sur les SSD (mémoire flash) ni sur les supports optiques. Pour un SSD, il faut la destruction physique ou le crypto-shredding.",
      difficulte: 1
    },
    {
      q: "Qu'est-ce que le crypto-shredding (cryptographic erasure) ?",
      choix: [
        "Broyer physiquement les supports contenant des clés",
        "Chiffrer les données puis détruire la clé de chiffrement",
        "Réécrire les données avec des motifs aléatoires chiffrés",
        "Fragmenter un fichier chiffré sur plusieurs supports"
      ],
      reponse: 1,
      explication:
        "Le crypto-shredding consiste à chiffrer les données avec un chiffrement fort puis à détruire la clé : sans clé, les données deviennent logiquement irrécupérables. C'est la meilleure méthode contre la rémanence dans le cloud, où l'on ne contrôle pas les supports physiques.",
      difficulte: 1
    },
    {
      q: "Un analyste forensique doit récupérer des fichiers supprimés dont le répertoire entier est corrompu. Quelle technique est la PLUS adaptée ?",
      choix: [
        "Le degaussing",
        "Le file carving",
        "Le crypto-shredding",
        "Le clearing"
      ],
      reponse: 1,
      explication:
        "Le file carving reconstruit les fichiers à partir des données brutes du support en s'appuyant sur leur structure et leur contenu, sans dépendre de l'index du système de fichiers — idéal quand un répertoire est manquant ou corrompu. Le degaussing et le clearing détruisent les données, et le crypto-shredding les rend irrécupérables.",
      difficulte: 2
    },
    {
      q: "Le support d'un logiciel critique atteint son End-of-Support (EOS) dans six mois. Quelle est la MEILLEURE action du manager sécurité ?",
      choix: [
        "Attendre la première vulnérabilité pour agir",
        "Planifier dès maintenant la migration ou le remplacement avant l'échéance",
        "Isoler définitivement le système et continuer à l'utiliser",
        "Négocier une baisse du prix des licences"
      ],
      reponse: 1,
      explication:
        "Après l'EOS, plus aucun correctif de sécurité n'est publié : chaque nouvelle vulnérabilité reste ouverte à jamais. Le manager doit planifier la migration AVANT l'échéance. Attendre une vulnérabilité est réactif et dangereux ; l'isolation est au mieux une mesure compensatoire temporaire, pas une stratégie.",
      difficulte: 2
    },
    {
      q: "Pourquoi la rétention des données doit-elle aussi prendre en compte le matériel et le personnel ?",
      choix: [
        "Pour amortir comptablement les équipements",
        "Parce que des données conservées sont inutiles sans matériel capable de les lire ni personnel sachant l'exploiter",
        "Parce que la loi impose de conserver les employés pendant la durée de rétention",
        "Pour réduire le coût des sauvegardes"
      ],
      reponse: 1,
      explication:
        "Conserver des bandes pendant dix ans ne sert à rien si plus aucun lecteur ne peut les lire, ou si plus personne ne sait exécuter la procédure de restauration. La rétention des actifs couvre donc les données, le matériel de lecture et les compétences du personnel.",
      difficulte: 2
    },
    {
      q: "Une organisation veut empêcher que des documents sensibles soient copiés sur des clés USB depuis les postes de travail. Quelle solution répond le MIEUX à ce besoin ?",
      choix: [
        "Un DLP network-based",
        "Un DLP endpoint-based",
        "Un CASB",
        "Un DRM"
      ],
      reponse: 1,
      explication:
        "Le DLP endpoint-based s'exécute sur les postes : il scanne les fichiers stockés et peut bloquer l'impression ou la copie vers un support amovible. Le DLP réseau ne voit que le trafic sortant du réseau, le CASB gouverne l'accès au cloud, et le DRM protège les contenus soumis au droit d'auteur.",
      difficulte: 2
    },
    {
      q: "Une règle bloque tout trafic sortant contenant des numéros au format « numéro de sécurité sociale ». De quel type de contrôle s'agit-il ?",
      choix: [
        "DRM appliqué à la donnée au repos",
        "CASB en mode proxy",
        "DLP network-based sur la donnée en transit",
        "Pare-feu applicatif web"
      ],
      reponse: 2,
      explication:
        "Scanner les données sur le fil et bloquer une transmission selon un motif (pattern) est la fonction typique d'un DLP réseau, placé en bordure du réseau pour inspecter le trafic sortant. Le DRM protège le copyright, le CASB gouverne l'accès aux ressources cloud, et un WAF protège les applications web entrantes.",
      difficulte: 2
    },
    {
      q: "Quels sont les quatre piliers d'un CASB ?",
      choix: [
        "Confidentialité, intégrité, disponibilité, non-répudiation",
        "Visibilité, sécurité des données, détection des menaces, conformité",
        "Identification, authentification, autorisation, audit",
        "Prévention, détection, correction, dissuasion"
      ],
      reponse: 1,
      explication:
        "Les quatre piliers du Cloud Access Security Broker sont la visibilité, la sécurité des données, la détection des menaces et la conformité. La première proposition est la triade CIA étendue, la troisième le processus IAAA, la quatrième une typologie de contrôles — tous vrais ailleurs, mais pas les piliers du CASB.",
      difficulte: 2
    },
    {
      q: "Votre organisation doit partager un jeu de données clients avec un partenaire de recherche, sans qu'AUCUNE identité ne puisse jamais être reconstituée. Quelle technique choisir ?",
      choix: [
        "La pseudonymisation",
        "La tokenisation",
        "Le chiffrement",
        "L'anonymisation par masquage aléatoire"
      ],
      reponse: 3,
      explication:
        "Seule l'anonymisation — notamment par randomized masking bien réalisé — est permanente et irréversible. La pseudonymisation, la tokenisation et le chiffrement sont des quasi-anonymisations réversibles : quiconque détient la table de correspondance, le vault ou la clé peut reconstituer les identités.",
      difficulte: 2
    },
    {
      q: "Dans un système de paiement tokenisé, que reçoit le terminal de point de vente (POS) lors d'un achat ?",
      choix: [
        "Le numéro de carte chiffré avec la clé du commerçant",
        "Un jeton sans valeur intrinsèque, associé à la carte dans un vault",
        "Le numéro de carte pseudonymisé mais réversible localement",
        "Un hash irréversible du numéro de carte"
      ],
      reponse: 1,
      explication:
        "Avec la tokenisation, le POS ne manipule qu'un jeton — une chaîne aléatoire sans signification hors du vault de tokenisation qui détient la correspondance avec la vraie carte. Le numéro réel ne transite jamais par le point de vente, ce qui empêche son vol en cas de compromission du POS.",
      difficulte: 3
    },
    {
      q: "Qu'est-ce qu'une baseline de sécurité ?",
      choix: [
        "Le niveau minimal documenté de configuration de sécurité autorisé",
        "La liste exhaustive de tous les contrôles possibles",
        "Le rapport d'audit initial d'un système",
        "La configuration maximale de sécurité applicable"
      ],
      reponse: 0,
      explication:
        "Une baseline est le niveau minimal documenté de configuration de sécurité autorisé par un standard ou l'organisation. C'est un point de départ que l'on affine ensuite par tailoring et scoping — ni un maximum, ni une liste exhaustive, ni un livrable d'audit.",
      difficulte: 1
    },
    {
      q: "Quelle activité fait partie du tailoring mais va AU-DELÀ du simple scoping ?",
      choix: [
        "Retirer les contrôles sans objet pour les systèmes concernés",
        "Sélectionner des contrôles compensatoires et fixer les paramètres définis par l'organisation",
        "Choisir la baseline de départ",
        "Documenter l'inventaire des actifs"
      ],
      reponse: 1,
      explication:
        "Le scoping se limite à retirer de la baseline les contrôles inapplicables. Le tailoring englobe le scoping mais ajoute l'identification des contrôles communs, la spécification des paramètres définis par l'organisation, l'assignation de valeurs aux contrôles et la sélection de contrôles compensatoires — c'est l'ajustement complet à la mission.",
      difficulte: 3
    },
    {
      q: "Quel critère indique qu'un processus de sélection de standards ou de vendeurs est bien conçu ?",
      choix: [
        "Il aboutit toujours au fournisseur le moins cher",
        "Une équipe totalement différente, refaisant l'exercice, aboutirait au même choix",
        "Il est validé par le fournisseur retenu",
        "Il repose sur l'expérience personnelle du décideur"
      ],
      reponse: 1,
      explication:
        "L'objectif est un processus objectif et mesurable : sa reproductibilité — une autre équipe arriverait à la même sélection — en est le meilleur indicateur. Le prix seul, la validation par le vendeur ou l'intuition d'un décideur sont des critères subjectifs ou biaisés.",
      difficulte: 2
    },
    {
      q: "Une entreprise ne peut pas chiffrer certains volumes de données partagés, mais veut que la protection accompagne les documents où qu'ils aillent. Quelle solution est la PLUS adaptée ?",
      choix: [
        "Le DRM, car la protection voyage avec la donnée quel que soit son état",
        "Le DLP réseau, qui bloque toute sortie de fichier",
        "Une ACL renforcée sur le partage de fichiers",
        "Un VPN pour tous les accès au partage"
      ],
      reponse: 0,
      explication:
        "La force du DRM est que ses restrictions accompagnent le fichier indépendamment de son emplacement ou de son état — particulièrement utile quand le chiffrement de volume est impossible. Le DLP, les ACL et le VPN protègent des périmètres ou des canaux, pas le document lui-même une fois sorti.",
      difficulte: 3
    },
    {
      q: "Quelle contre-mesure ne relève PAS de la protection TEMPEST contre le Van Eck phreaking ?",
      choix: [
        "La cage de Faraday",
        "Le bruit blanc",
        "Les zones de contrôle",
        "Le degaussing"
      ],
      reponse: 3,
      explication:
        "TEMPEST vise à limiter la capture des émanations électromagnétiques : cages de Faraday, bruit blanc, zones de contrôle et blindage en sont les contre-mesures. Le degaussing est une méthode d'assainissement de supports magnétiques, sans rapport avec les émanations.",
      difficulte: 2
    },
    {
      q: "Du point de vue d'un manager, pourquoi surveiller la conformité des licences logicielles fait-il partie de la gestion des actifs ?",
      choix: [
        "Pour négocier de meilleurs prix aux renouvellements",
        "Pour éviter les problèmes juridiques et détecter les logiciels non autorisés",
        "Pour accélérer les déploiements applicatifs",
        "Pour réduire la consommation des serveurs"
      ],
      reponse: 1,
      explication:
        "Le suivi des actifs logiciels vise deux risques : l'usage au-delà des licences acquises, source de contentieux juridique, et la présence de logiciels non autorisés, source de vulnérabilités. Les gains d'achat ou de performance sont accessoires par rapport à ces enjeux de conformité et de sécurité.",
      difficulte: 2
    },
    {
      q: "Un pays exige par la loi que les données personnelles de ses citoyens soient stockées et traitées exclusivement sur son territoire. De quel concept s'agit-il ?",
      choix: [
        "Data sovereignty",
        "Data localization",
        "Data residency",
        "Data remanence"
      ],
      reponse: 1,
      explication:
        "La data localization est l'exigence LÉGALE de conserver les données dans les frontières du pays (ex. Russie, Chine). La data sovereignty est le principe général selon lequel la donnée est soumise aux lois du pays où elle réside ; la data residency est le CHOIX par l'organisation du lieu de stockage ; la data remanence concerne les résidus de données après effacement.",
      difficulte: 2
    },
    {
      q: "Une entreprise européenne stocke des données personnelles chez un fournisseur cloud américain, dans une région située dans l'Union européenne. Quelle est la MEILLEURE mesure pour réduire le risque de conflit entre le CLOUD Act et le GDPR ?",
      choix: [
        "Se fier uniquement à la localisation européenne de la région cloud",
        "Chiffrer les données avec des clés gérées et conservées par le client, complété par des clauses contractuelles",
        "Interdire tout usage du cloud pour les données personnelles",
        "Transférer la responsabilité de conformité au fournisseur cloud"
      ],
      reponse: 1,
      explication:
        "Le CLOUD Act peut contraindre un fournisseur américain à remettre des données même stockées en Europe : la localisation seule ne suffit donc pas. Le chiffrement avec des clés détenues par le client rend les données remises inexploitables, et les clauses contractuelles encadrent les transferts. Interdire le cloud est disproportionné, et la responsabilité de conformité du controller ne se transfère jamais.",
      difficulte: 3
    }
  ],

  // ────────────────────────────────────────────────────────────
  // FLASHCARDS
  // ────────────────────────────────────────────────────────────
  flashcards: [
    {
      recto: "Data Owner",
      verso: "Personne (souvent cadre dirigeant ou chef de département) qui classifie la donnée, autorise l'accès et porte la responsabilité ultime (accountability) de sa protection. Délègue les tâches, jamais l'accountability."
    },
    {
      recto: "Data Custodian",
      verso: "Rôle délégué chargé des tâches quotidiennes de protection : stockage correct, sauvegardes, archivage, prévention de la perte et restauration des données."
    },
    {
      recto: "Data Controller vs Data Processor",
      verso: "Le controller décide quelles données traiter, pourquoi et comment ; le processor traite les données pour le compte et sous la direction du controller (ex. prestataire de paie). Rôles clés du GDPR."
    },
    {
      recto: "Data Steward",
      verso: "Rôle qui porte la responsabilité MÉTIER de la donnée : qualité, gouvernance, conformité, définition des métadonnées."
    },
    {
      recto: "DPO (Data Protection Officer)",
      verso: "Rôle de leadership indépendant qui supervise la stratégie de protection de la vie privée de l'organisation et garantit la conformité aux exigences légales comme le GDPR."
    },
    {
      recto: "System Owner",
      verso: "Responsable du système qui stocke ou traite la donnée : développe et maintient le System Security Plan (NIST SP 800-18), assure exploitation, patching et formation sécurité des utilisateurs."
    },
    {
      recto: "PII / PHI",
      verso: "PII : toute information permettant d'identifier ou de tracer un individu (NIST SP 800-122). PHI : information de santé rattachable à une personne, encadrée par HIPAA pour tout organisme qui la manipule."
    },
    {
      recto: "Labeling vs Marking",
      verso: "Labeling : attributs de sécurité lisibles par le SYSTÈME (métadonnées, RFID, QR codes) → application automatique. Marking : forme lisible par l'HUMAIN (tampon, bandeau) → application par les processus."
    },
    {
      recto: "Clearance",
      verso: "Habilitation qui détermine à quel niveau de classification de données ou d'équipements une personne peut accéder. L'accès requiert en plus le besoin d'en connaître (need-to-know)."
    },
    {
      recto: "Need-to-know vs Least Privilege",
      verso: "Need-to-know : accès uniquement aux DONNÉES nécessaires à la mission. Least privilege : uniquement les PRIVILÈGES nécessaires aux tâches, et rien de plus."
    },
    {
      recto: "Les trois data states",
      verso: "At rest : stockée sur un support → chiffrement. In transit : transmise sur un réseau → TLS, IPsec. In use : en mémoire, traitée par une application → patching, builds standardisés, purge des buffers (le plus difficile à protéger)."
    },
    {
      recto: "Data Remanence",
      verso: "Données subsistant sur un support après un effacement supposé : flux magnétique résiduel, fragments dans le slack space (espace inutilisé des clusters). À éliminer avant réutilisation ou mise au rebut du support."
    },
    {
      recto: "Clearing vs Purging",
      verso: "Clearing : réécriture qui protège contre la récupération par outils logiciels standards seulement. Purging : vise l'irrécupérabilité par toute technique connue, y compris en laboratoire — mais reste inacceptable pour du Top Secret."
    },
    {
      recto: "Degaussing",
      verso: "Effacement par champ magnétique puissant : efficace sur bandes et disques magnétiques, AUCUN effet sur les SSD et les supports optiques."
    },
    {
      recto: "Crypto-shredding (cryptographic erasure)",
      verso: "Chiffrer les données avec un chiffrement fort puis détruire la clé, rendant les données logiquement irrécupérables. Meilleure méthode contre la rémanence dans le cloud."
    },
    {
      recto: "EOL vs EOS/EOSL",
      verso: "End-of-Life : le vendeur cesse de commercialiser le produit. End-of-Support / End-of-Service-Life : fin de tout support et des correctifs de sécurité — le vrai signal de risque à anticiper."
    },
    {
      recto: "DRM (Digital Rights Management)",
      verso: "Méthodes de protection des contenus soumis au droit d'auteur : empêche usage, modification et distribution non autorisés. La protection voyage avec la donnée, quel que soit son état."
    },
    {
      recto: "DLP et ses trois types",
      verso: "Data Loss Prevention : détecte et bloque l'exfiltration. Network-based : en bordure de réseau, scanne le trafic sortant. Endpoint-based : bloque impression et copie USB. Cloud-based : pour les environnements cloud natifs."
    },
    {
      recto: "CASB (Cloud Access Security Broker)",
      verso: "Logiciel placé logiquement entre les utilisateurs et les ressources cloud, garantissant que le cloud bénéficie des mêmes politiques que le réseau interne. Quatre piliers : visibilité, sécurité des données, détection des menaces, conformité."
    },
    {
      recto: "Anonymization vs Pseudonymization vs Tokenization",
      verso: "Anonymisation : suppression permanente et IRRÉVERSIBLE des identités (ex. randomized masking). Pseudonymisation : alias RÉVERSIBLE via une table externe. Tokenisation : jeton aléatoire sans valeur, l'original restant dans un vault (réversible)."
    },
    {
      recto: "Scoping vs Tailoring",
      verso: "Scoping : retirer d'une baseline les contrôles qui ne s'appliquent pas aux systèmes visés. Tailoring : processus plus large d'ajustement à la mission — inclut le scoping, les paramètres définis par l'organisation et les contrôles compensatoires."
    },
    {
      recto: "Security Baseline",
      verso: "Niveau minimal documenté de configuration de sécurité autorisé par un standard ou l'organisation. Point de départ à affiner ensuite par scoping et tailoring."
    },
    {
      recto: "TEMPEST",
      verso: "Technologies limitant les émanations électromagnétiques des équipements pour contrer le Van Eck phreaking. Contre-mesures : cages de Faraday, bruit blanc, zones de contrôle, blindage."
    },
    {
      recto: "Defensible destruction",
      verso: "Élimination des données de manière contrôlée, légalement défendable et conforme aux réglementations — la méthode de destruction doit être définie par la politique selon la classification (NIST SP 800-88)."
    },
    {
      recto: "Data localization vs Data residency vs Data sovereignty",
      verso: "Localization : la LOI impose de garder la donnée dans le pays (Russie, Chine). Residency : CHOIX par l'organisation du lieu de stockage (conformité, latence). Sovereignty : la donnée est soumise aux LOIS du pays où elle réside physiquement."
    },
    {
      recto: "CLOUD Act vs GDPR",
      verso: "Le CLOUD Act américain peut obliger un fournisseur US à remettre des données même stockées hors des États-Unis, en tension avec le GDPR. Mitigations : clauses contractuelles, choix des régions cloud, chiffrement avec clés gérées par le client."
    }
  ]
};
