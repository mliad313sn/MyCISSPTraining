/* Domaine 2 — données générées ; schéma : data/SCHEMA.md */
window.CISSP_DATA = window.CISSP_DATA || { domains: {} };
window.CISSP_DATA.domains[2] = {
  "id": 2,
  "code": "D2",
  "titre": "Sécurité des actifs",
  "titreEn": "Asset Security",
  "poids": "10%",
  "couleur": "#f78c6b",
  "icone": "📦",
  "description": "Le Domaine 2 couvre la protection des informations et des actifs tout au long de leur cycle de vie : classification, rôles et responsabilités, états de la donnée, rétention et destruction sécurisée. Il aborde aussi les méthodes de protection comme le DRM, le DLP et les CASB, ainsi que l'adaptation des baselines de sécurité via le scoping et le tailoring.",
  "objectifs": [
    "2.1 Identifier et classifier l'information et les actifs",
    "2.2 Établir les exigences de manipulation de l'information et des actifs",
    "2.3 Provisionner l'information et les actifs de manière sécurisée",
    "2.4 Gérer le cycle de vie de la donnée (rôles, collecte, localisation, maintenance, rétention, rémanence, destruction)",
    "2.5 Assurer une rétention appropriée des actifs (End-of-Life, End-of-Support)",
    "2.6 Déterminer les contrôles de sécurité des données et les exigences de conformité (data states, scoping et tailoring, sélection de standards, DRM, DLP, CASB)"
  ],
  "lecons": [
    {
      "id": "d2-l1",
      "titre": "Classification des données et des actifs",
      "duree": 10,
      "slides": [
        {
          "type": "intro",
          "titre": "Pourquoi classifier ?",
          "points": [
            "Toute protection commence par savoir ce que l'on possède",
            "La classification attribue une valeur et un niveau de protection",
            "Un actif : tout ce qui a de la valeur pour l'organisation"
          ],
          "narration": "Bienvenue dans le Domaine 2, la sécurité des actifs. Avant de protéger quoi que ce soit, il faut savoir ce que l'on possède et combien cela vaut. C'est exactement le rôle de la classification : attribuer à chaque donnée et à chaque actif un niveau de sensibilité, qui déterminera ensuite le niveau de protection requis. Retenez qu'un actif, c'est tout ce qui a de la valeur pour l'organisation : les données bien sûr, mais aussi le matériel qui les traite et les supports qui les stockent."
        },
        {
          "type": "standard",
          "titre": "Données sensibles : PII, PHI, données propriétaires",
          "points": [
            "Sensitive data : toute information non publique à protéger",
            "PII : toute information permettant d'identifier un individu",
            "PHI : information de santé rattachable à une personne (HIPAA)",
            "Proprietary data : donne un avantage concurrentiel à l'organisation"
          ],
          "narration": "Une donnée sensible, c'est toute information qui n'est pas publique et que l'organisation doit protéger, soit pour sa valeur, soit pour respecter des lois et règlements. Les PII, Personally Identifiable Information, regroupent tout ce qui permet d'identifier ou de tracer un individu : nom, numéro de sécurité sociale, données biométriques. Les PHI, Protected Health Information, sont les informations de santé rattachables à une personne, encadrées par HIPAA. Enfin, les données propriétaires sont celles qui donnent à l'entreprise son avantage concurrentiel, comme les secrets de fabrication.",
          "astuce": "💡 Conseil examen : PII vient de NIST SP 800-122 ; PHI concerne tout organisme qui manipule des données de santé, pas seulement les hôpitaux."
        },
        {
          "type": "schema",
          "titre": "Niveaux de classification gouvernementaux",
          "points": [
            "Top Secret : dommage exceptionnellement grave à la sécurité nationale",
            "Secret : dommage sérieux",
            "Confidential : dommage",
            "Unclassified : non sensible"
          ],
          "schema": {
            "type": "pyramid",
            "items": [
              "Top Secret",
              "Secret",
              "Confidential",
              "Unclassified"
            ]
          },
          "narration": "Le secteur gouvernemental utilise une pyramide de classification bien connue. Au sommet, Top Secret : une divulgation causerait un dommage exceptionnellement grave à la sécurité nationale, pensez aux informations sur les satellites espions. En dessous, Secret, dont la divulgation affecterait sérieusement la sécurité nationale, puis Confidential, dont la divulgation causerait un dommage. Tout en bas, Unclassified, qui n'est pas sensible. Plus on monte dans la pyramide, plus les contrôles sont stricts."
        },
        {
          "type": "schema",
          "titre": "Niveaux de classification du secteur privé",
          "points": [
            "Confidential / Proprietary : conséquences graves si divulgué",
            "Private : données personnelles, bancaires",
            "Sensitive : précautions particulières requises",
            "Public : divulgation sans dommage"
          ],
          "schema": {
            "type": "pyramid",
            "items": [
              "Confidential / Proprietary",
              "Private",
              "Sensitive",
              "Public"
            ]
          },
          "narration": "Les organisations privées utilisent leurs propres étiquettes, souvent Confidential ou Proprietary pour les données dont la divulgation aurait des conséquences graves, Private pour les données personnelles comme les cartes bancaires, Sensitive pour ce qui exige des précautions particulières, et Public pour ce qui peut être vu de tous. Retenez bien que ces étiquettes ne sont pas normalisées : chaque organisation peut définir des niveaux aussi granulaires qu'elle le souhaite, du moment que la politique de sécurité les documente clairement."
        },
        {
          "type": "standard",
          "titre": "Classification des actifs et clearance",
          "points": [
            "L'actif hérite de la classification de la donnée la plus sensible qu'il traite",
            "Chaque actif classifié doit avoir un owner identifié",
            "Clearance : habilitation d'accès à un niveau de classification",
            "Processus formel d'approbation d'accès par le data owner"
          ],
          "narration": "La classification ne s'arrête pas aux données : les systèmes, serveurs et appareils mobiles doivent aussi être classifiés. La règle est simple : un actif hérite de la classification de la donnée la plus sensible qu'il traite. Si un ordinateur traite des données Top Secret, cet ordinateur est un actif Top Secret. Pour accéder à un niveau donné, une personne doit détenir la clearance correspondante, c'est-à-dire l'habilitation. Et tout changement d'accès doit passer par un processus formel d'approbation impliquant le data owner, avec une sensibilisation de l'utilisateur aux règles de ce niveau."
        },
        {
          "type": "standard",
          "titre": "Marking et Labeling",
          "points": [
            "Marking : attributs de sécurité lisibles par l'humain",
            "Labeling : attributs lisibles par le système (metadata, RFID, QR codes)",
            "Le marquage guide les processus, le label permet l'application automatique",
            "Le handling dépend de la classification, pas du type de support"
          ],
          "narration": "Deux termes proches mais distincts à l'examen. Le marking, c'est l'association d'attributs de sécurité sous une forme lisible par l'humain : un tampon Confidentiel sur un dossier, un bandeau en haut d'un document. Le labeling, lui, est lisible par le système : métadonnées, codes-barres, QR codes ou étiquettes RFID, ce qui permet une application automatique des politiques de sécurité. Retenez enfin que les exigences de manipulation, le handling, découlent toujours de la classification de l'actif, jamais du type de support."
        },
        {
          "type": "standard",
          "titre": "Exigences de manipulation des actifs",
          "points": [
            "Asset handling : procédures pour déplacer, stocker et récupérer les actifs",
            "Objectif clé : prévenir les fuites de données",
            "Limiter la collecte : ne stocker que ce qui a un but métier clair",
            "Stockage selon la classification : verrous physiques, chiffrement"
          ],
          "narration": "Une fois les actifs classifiés, il faut définir comment les manipuler. L'asset handling regroupe les procédures qui encadrent le déplacement, le stockage et la récupération des actifs, avec un objectif central : prévenir les fuites de données. Deux bonnes pratiques dominent. D'abord, limiter la collecte : si une donnée n'a pas de but métier clair, on ne la collecte pas et on ne la stocke pas. Ensuite, adapter le stockage à la classification : verrous physiques pour le papier, chiffrement pour l'électronique, et copies de sauvegarde sur site et hors site."
        },
        {
          "type": "standard",
          "titre": "Transport sécurisé des supports",
          "points": [
            "Chain of custody : documenter qui détient le support, quand, et chaque transfert",
            "Emballage inviolable (tamper-evident) et coursier agréé pour les supports sensibles",
            "Journal de mouvement pour les supports amovibles et les bandes de sauvegarde",
            "Chiffrer les supports AVANT le transport : une perte devient un incident mineur"
          ],
          "narration": "Le handling ne s'arrête pas aux murs du bâtiment : les supports voyagent, et c'est en transit qu'ils se perdent. Quand des bandes de sauvegarde, des disques ou des documents classifiés quittent un site, quatre mesures s'imposent. D'abord, une chain of custody documentée : on sait à tout moment qui détient le support, depuis quand, et chaque remise de main en main est signée et horodatée. Ensuite, un emballage inviolable, dit tamper-evident, qui révèle toute tentative d'ouverture. Puis un transporteur de confiance : coursier agréé ou personnel habilité, jamais le courrier ordinaire pour du sensible. Enfin, un journal de mouvement trace les entrées et sorties des supports amovibles. Et bien sûr, on chiffre les supports avant leur départ : ainsi, même perdue, une bande chiffrée ne livre rien.",
          "astuce": "💡 Conseil examen : la chain of custody n'est pas réservée au forensique du Domaine 7 — elle s'applique aussi aux sauvegardes et supports qui transitent vers un site externe."
        },
        {
          "type": "standard",
          "titre": "Déclassification et revue périodique",
          "points": [
            "La sensibilité diminue souvent avec le temps : une classification n'est pas éternelle",
            "Declassification : processus FORMEL, approuvé par le data owner",
            "Downgrading : abaisser le niveau — attention à la rémanence sur les supports",
            "Revue périodique des classifications : éviter la sur-classification coûteuse"
          ],
          "narration": "La classification n'est pas gravée dans le marbre. Un plan produit ultra-confidentiel avant son lancement devient banal une fois le produit commercialisé. La déclassification est le processus formel qui abaisse ou retire la classification d'une donnée devenue moins sensible : elle est décidée par le data owner, jamais improvisée par un utilisateur. On distingue le downgrading, qui abaisse le niveau, de la declassification complète ; dans les deux cas, méfiez-vous des supports qui ont hébergé la donnée à son ancien niveau, car la rémanence peut y laisser des traces plus sensibles que l'étiquette actuelle. Enfin, une revue périodique des classifications évite la sur-classification, qui coûte cher et pousse les utilisateurs à contourner les règles.",
          "astuce": "💡 Conseil examen : sur-classifier n'est pas prudent, c'est du gaspillage — la bonne réponse CISSP est la classification proportionnée, revue périodiquement."
        },
        {
          "type": "question",
          "titre": "Contrôle de connaissance",
          "points": [],
          "narration": "Petit contrôle de connaissance. Prenez le temps de bien lire la question avant de répondre.",
          "q": "Un serveur traite des données classifiées Secret et des données Public. Quelle classification l'organisation devrait-elle attribuer à ce serveur ?",
          "choix": [
            "Unclassified, car un serveur n'est pas une donnée",
            "Une moyenne entre Secret et Public",
            "Public, car c'est le niveau le plus courant",
            "Secret, car l'actif hérite de la donnée la plus sensible qu'il traite"
          ],
          "reponse": 3,
          "explication": "Un actif doit être classifié au niveau de la donnée la plus sensible qu'il traite ou stocke. Ici, le serveur traite du Secret : il devient donc un actif Secret, avec les contrôles correspondants."
        },
        {
          "type": "resume",
          "titre": "Résumé de la leçon",
          "points": [
            "Classifier données ET actifs selon leur valeur et leur impact",
            "PII, PHI et données propriétaires sont des données sensibles à protéger",
            "L'actif hérite de la classification de la donnée la plus sensible",
            "Marking = lisible par l'humain ; Labeling = lisible par le système",
            "Le handling découle de la classification, pas du support",
            "Transport des supports : chiffrement, emballage inviolable, coursier agréé, chain of custody",
            "Déclassification : processus formel décidé par le data owner, avec revue périodique"
          ],
          "narration": "Résumons. La classification est la première étape de la protection : elle attribue à chaque donnée et à chaque actif un niveau de sensibilité fondé sur la valeur et l'impact d'une compromission. Les PII, les PHI et les données propriétaires exigent une protection particulière. Un actif hérite toujours de la classification de la donnée la plus sensible qu'il traite. Distinguez le marking, lisible par l'humain, du labeling, lisible par le système, et souvenez-vous que les règles de manipulation dépendent de la classification et non du type de support. Quand les supports voyagent, exigez chiffrement, emballage inviolable, coursier agréé et chain of custody documentée. Enfin, la classification se revoit : la déclassification est un processus formel approuvé par le data owner."
        }
      ]
    },
    {
      "id": "d2-l2",
      "titre": "Les rôles de la donnée : owner, custodian, controller, processor",
      "duree": 10,
      "slides": [
        {
          "type": "intro",
          "titre": "Qui est responsable de quoi ?",
          "points": [
            "Chaque actif doit avoir un propriétaire identifié",
            "L'accountability ne se délègue pas, les tâches oui",
            "Les rôles data sont un grand classique de l'examen"
          ],
          "narration": "Dans cette leçon, nous allons répondre à une question essentielle : qui est responsable de quoi autour de la donnée ? L'examen CISSP adore ces questions de rôles, car elles testent votre jugement de manager. Retenez le principe fondateur : chaque actif doit avoir un propriétaire identifié, et si les tâches opérationnelles peuvent être déléguées, la responsabilité ultime, l'accountability, elle, ne se délègue jamais."
        },
        {
          "type": "standard",
          "titre": "Data Owner et Asset Owner",
          "points": [
            "Le data owner classifie, catégorise et autorise l'accès aux données",
            "Typiquement un cadre dirigeant : CEO, président, chef de département",
            "Responsable ultime de la protection de l'actif",
            "Délègue les tâches, jamais l'accountability"
          ],
          "narration": "Le data owner, ou propriétaire de la donnée, est la personne qui connaît le mieux l'importance de la donnée pour le métier. C'est lui qui classifie, catégorise et autorise l'accès. À l'examen, le data owner est presque toujours un cadre dirigeant : le CEO, un président ou un chef de département. Il porte la responsabilité ultime de la protection, s'assure que les contrôles appropriés sont en place, et délègue les tâches quotidiennes à d'autres rôles. Mais attention : il délègue les tâches, jamais la responsabilité."
        },
        {
          "type": "standard",
          "titre": "System Owner",
          "points": [
            "Responsable du système qui stocke ou traite la donnée",
            "Développe et maintient le System Security Plan (NIST SP 800-18)",
            "Assure exploitation, maintenance, patching et formation des utilisateurs",
            "Distinct du data owner : le système versus la donnée"
          ],
          "narration": "Le system owner est responsable du système qui stocke ou traite les données, y compris les configurations matérielles et logicielles. Selon le NIST SP 800-18, c'est lui qui développe et maintient le plan de sécurité du système, s'assure que le système est exploité conformément aux exigences, que les utilisateurs reçoivent la formation de sécurité requise, et il participe à l'identification et à l'évaluation des contrôles communs. Ne le confondez pas avec le data owner : l'un possède le système, l'autre possède la donnée."
        },
        {
          "type": "standard",
          "titre": "Data Custodian et Data Steward",
          "points": [
            "Custodian : tâches quotidiennes déléguées de stockage et protection",
            "Sauvegardes, archivage, prévention de la perte, restauration",
            "Steward : responsabilité métier de la donnée (qualité, gouvernance, metadata)",
            "Custodian = technique, Steward = métier"
          ],
          "narration": "Le data custodian, le gardien de la donnée, reçoit par délégation les responsabilités quotidiennes : stocker correctement les données, faire les sauvegardes, archiver, prévenir la perte ou la corruption, et restaurer si nécessaire. C'est typiquement un rôle technique, souvent au sein de l'équipe informatique. Le data steward, lui, porte la responsabilité métier de la donnée : sa qualité, sa gouvernance, sa conformité, la définition des métadonnées. Un moyen simple de les distinguer : le custodian s'occupe de la technique, le steward s'occupe du sens métier."
        },
        {
          "type": "standard",
          "titre": "Data Controller et Data Processor (GDPR)",
          "points": [
            "Controller : décide quelles données traiter, pourquoi et comment",
            "Processor : traite les données pour le compte du controller",
            "Exemple : l'employeur est controller, le prestataire de paie est processor",
            "GDPR : restrictions de transfert hors UE et amendes en cas de violation"
          ],
          "narration": "Deux rôles venus du monde du GDPR, incontournables à l'examen. Le data controller décide quelles données traiter, pourquoi et comment : par exemple, une entreprise qui collecte les informations personnelles de ses employés pour la paie. Le data processor, lui, traite les données pour le compte et sous la direction du controller : si l'entreprise confie sa paie à un prestataire externe, ce prestataire est le processor. Il ne doit utiliser les données que selon les directives du controller. Rappelez-vous aussi que le GDPR restreint les transferts de données hors de l'Union européenne, avec de lourdes amendes à la clé."
        },
        {
          "type": "standard",
          "titre": "DPO, administrateurs, utilisateurs et sujets",
          "points": [
            "DPO : rôle indépendant qui supervise la stratégie de confidentialité et la conformité GDPR",
            "Security administrator : sécurité de l'infrastructure, outils, politiques",
            "Users : accèdent aux données selon leur rôle et le need-to-know",
            "Subject : toute entité qui accède à un objet (utilisateur, processus, service)"
          ],
          "narration": "Complétons le tableau. Le Data Protection Officer est un rôle de leadership indépendant qui supervise la stratégie de protection de la vie privée et garantit la conformité aux exigences légales comme le GDPR. Le security administrator assure la sécurité globale de l'infrastructure : pare-feux, antivirus, surveillance du réseau. Les utilisateurs, eux, accèdent aux données pour accomplir leur travail, selon leur rôle et leur besoin d'en connaître. Et notez cette subtilité : les utilisateurs sont des subjects, mais un subject peut aussi être un programme, un processus ou un service, bref toute entité qui accède à une ressource."
        },
        {
          "type": "schema",
          "titre": "Vue d'ensemble des rôles",
          "points": [
            "Owner : accountability et classification",
            "Controller : décide du traitement",
            "Processor : exécute le traitement",
            "Custodian : protection quotidienne",
            "Steward : qualité et gouvernance métier",
            "User : consomme selon le need-to-know"
          ],
          "schema": {
            "type": "grid",
            "items": [
              "Data Owner — classifie, autorise, accountable",
              "Data Controller — décide quoi, pourquoi, comment",
              "Data Processor — traite pour le controller",
              "Data Custodian — sauvegardes, stockage, restauration",
              "Data Steward — qualité, gouvernance métier",
              "User / Subject — accès selon le rôle"
            ]
          },
          "narration": "Voici la carte complète des rôles. Le data owner classifie et reste responsable en dernier ressort. Le controller décide du traitement, le processor l'exécute pour son compte. Le custodian assure la protection quotidienne, sauvegardes et restaurations. Le steward veille à la qualité et à la gouvernance métier. Et l'utilisateur consomme les données selon son rôle et son besoin d'en connaître. Gardez cette carte en tête : l'examen vous demandera régulièrement quel rôle correspond à quelle responsabilité."
        },
        {
          "type": "standard",
          "titre": "Need-to-know et moindre privilège",
          "points": [
            "Need-to-know : accès uniquement aux données nécessaires à la tâche",
            "Least privilege : uniquement les privilèges nécessaires, rien de plus",
            "Deux principes qui fondent le provisionnement sécurisé des actifs",
            "Inventaire des actifs tangibles et intangibles comme point de départ"
          ],
          "narration": "Deux principes gouvernent l'accès aux actifs. Le need-to-know impose qu'une personne n'accède à une donnée que si sa mission l'exige absolument. Le moindre privilège, least privilege, va dans le même sens pour les droits : uniquement les privilèges nécessaires à la tâche, et rien de plus. Ces principes s'appliquent dans le cadre d'une gestion d'actifs rigoureuse, qui commence toujours par un inventaire complet : les actifs tangibles comme le matériel, et les actifs intangibles comme les logiciels, les brevets, les droits d'auteur ou la réputation de l'entreprise."
        },
        {
          "type": "standard",
          "titre": "Inventaire des actifs : CMDB, découverte automatisée, ITAM",
          "points": [
            "On ne peut pas protéger un actif dont on ignore l'existence",
            "Inventaire = matériel, logiciels, licences, machines virtuelles, données",
            "CMDB : base de données de configuration, source de vérité des actifs et de leurs relations",
            "Découverte automatisée (scans réseau, agents) : détecte les actifs non déclarés",
            "ITAM : gestion du cycle de vie complet, de l'acquisition à la mise au rebut",
            "Tagging : étiquettes physiques (code-barres, RFID) et logiques (owner, classification, environnement)"
          ],
          "narration": "Le provisionnement sécurisé des actifs commence par une évidence trop souvent négligée : on ne peut pas protéger un actif dont on ignore l'existence. L'inventaire doit couvrir le matériel, les logiciels et leurs licences, les machines virtuelles et conteneurs, et les données elles-mêmes. La CMDB, Configuration Management Database, sert de source de vérité : elle recense les actifs, leurs configurations et surtout leurs relations, ce qui permet d'évaluer l'impact d'un incident ou d'un changement. Mais un inventaire déclaratif se périme vite : la découverte automatisée, par scans réseau ou par agents installés sur les postes, détecte en continu les actifs qui apparaissent sans avoir été déclarés. L'ensemble s'inscrit dans l'IT Asset Management, l'ITAM, qui suit chaque actif de l'acquisition à la mise au rebut. Enfin, le tagging associe à chaque actif des étiquettes physiques, comme un code-barres ou une puce RFID, et des étiquettes logiques : propriétaire, classification, environnement. Sans tag, pas de responsable identifié, et sans responsable, pas de protection.",
          "astuce": "💡 Conseil examen : à la question « que faire EN PREMIER pour protéger les actifs ? », la réponse est presque toujours l'inventaire — on ne protège que ce que l'on connaît."
        },
        {
          "type": "standard",
          "titre": "Provisioning, déprovisioning et shadow IT",
          "points": [
            "Provisioning sécurisé : déployer l'actif durci (baseline), tagué, inventorié, avec un owner assigné",
            "Vaut pour le matériel, les logiciels ET les actifs virtuels (VM, conteneurs, comptes cloud)",
            "Déprovisioning : retirer l'actif de l'inventaire, révoquer les accès, assainir le support",
            "Un actif oublié (VM orpheline, serveur fantôme) n'est plus patché : cible idéale",
            "Shadow IT : actifs ou services adoptés sans approbation de l'IT — invisibles donc non protégés",
            "Réponses au shadow IT : découverte automatisée, CASB, politique claire et processus de demande simple"
          ],
          "narration": "Provisionner un actif de manière sécurisée, ce n'est pas seulement le brancher. C'est le déployer à partir d'une configuration durcie conforme à la baseline, l'enregistrer dans l'inventaire, le taguer, et lui assigner un owner responsable dès le premier jour. Cette discipline vaut pour un serveur physique comme pour une machine virtuelle, un conteneur ou un compte cloud, qui se créent en quelques secondes et s'oublient tout aussi vite. Le déprovisioning est le miroir : quand l'actif quitte le service, on le retire de l'inventaire, on révoque ses accès et ses certificats, et on assainit le support selon sa classification. Un actif oublié, comme une machine virtuelle orpheline, ne reçoit plus de correctifs et devient une cible idéale. Le shadow IT désigne les actifs et services adoptés par les employés sans approbation de l'informatique : une application cloud souscrite par un département, un disque personnel branché au réseau. Invisibles pour l'inventaire, ils échappent à toute protection. Les réponses du manager combinent la découverte automatisée, un CASB pour révéler les services cloud utilisés, une politique claire, et surtout un processus de demande suffisamment simple pour que les employés n'aient pas envie de le contourner.",
          "astuce": "💡 Conseil examen : le shadow IT est avant tout un problème de VISIBILITÉ. Le CASB est l'outil clé pour découvrir les services cloud non autorisés."
        },
        {
          "type": "question",
          "titre": "Contrôle de connaissance",
          "points": [],
          "narration": "Vérifions que les rôles sont bien en place. Lisez attentivement le scénario.",
          "q": "Une entreprise confie le traitement de sa paie à un prestataire externe. Au sens du GDPR, quel est le rôle du prestataire ?",
          "choix": [
            "Data controller",
            "Data owner",
            "Data steward",
            "Data processor"
          ],
          "reponse": 3,
          "explication": "Le prestataire traite les données personnelles pour le compte et sous la direction de l'entreprise cliente : c'est un data processor. L'entreprise, qui décide quoi traiter et pourquoi, reste le data controller."
        },
        {
          "type": "resume",
          "titre": "Résumé de la leçon",
          "points": [
            "Le data owner classifie et reste accountable ; il délègue les tâches",
            "Le system owner sécurise le système ; le custodian gère le quotidien",
            "Controller décide, processor exécute (GDPR)",
            "Le steward porte la qualité métier ; le DPO supervise la conformité",
            "Need-to-know et least privilege encadrent tout accès"
          ],
          "narration": "En résumé, le data owner classifie la donnée et porte la responsabilité ultime, qu'il ne peut pas déléguer. Le system owner sécurise le système, le custodian exécute les tâches quotidiennes de protection, et le steward veille à la qualité métier. Côté GDPR, le controller décide du traitement et le processor l'exécute pour son compte, sous la supervision éventuelle d'un DPO. Et dans tous les cas, l'accès est gouverné par le need-to-know et le moindre privilège."
        }
      ]
    },
    {
      "id": "d2-l3",
      "titre": "Cycle de vie de la donnée et data states",
      "duree": 10,
      "slides": [
        {
          "type": "intro",
          "titre": "Protéger la donnée du berceau à la tombe",
          "points": [
            "Le cycle de vie couvre la donnée de sa création à sa destruction",
            "Chaque phase appelle des contrôles adaptés",
            "La donnée existe aussi dans trois états, chacun avec ses protections"
          ],
          "narration": "On dit souvent qu'il faut protéger la donnée du berceau à la tombe. C'est l'idée du cycle de vie : depuis la création ou la collecte de la donnée jusqu'à sa destruction définitive, chaque phase appelle des contrôles adaptés. Et à tout moment de ce cycle, la donnée se trouve dans l'un de trois états : au repos, en transit ou en cours d'utilisation. Nous allons voir les deux dimensions dans cette leçon."
        },
        {
          "type": "schema",
          "titre": "Les phases du cycle de vie",
          "points": [
            "Création : générer ou modifier la donnée",
            "Classification et stockage : classer puis stocker selon la classe",
            "Utilisation : protéger pendant le traitement et le partage",
            "Archivage : stockage long terme protégé",
            "Destruction : élimination définitive selon la classification"
          ],
          "schema": {
            "type": "flow",
            "items": [
              "Création",
              "Classification & Stockage",
              "Utilisation",
              "Archivage",
              "Destruction"
            ]
          },
          "narration": "Voici le cycle de vie de la donnée. Tout commence par la création ou la collecte. Vient ensuite la classification, suivie du stockage avec des contrôles adaptés à la classe attribuée. Pendant l'utilisation, la donnée doit être protégée lors des transmissions et contre l'exfiltration. Quand elle n'est plus utilisée activement, elle passe en archivage, un stockage de long terme avec protection des données au repos. Enfin, quand elle n'est plus nécessaire, elle est détruite définitivement, avec une méthode adaptée à sa classification."
        },
        {
          "type": "standard",
          "titre": "Collecte et localisation des données",
          "points": [
            "Règle d'or : ne pas collecter ce qui n'a pas de but clair",
            "La donnée non collectée ne peut pas fuiter",
            "Data location : copies de sauvegarde sur site ET hors site",
            "Distance suffisante entre sites pour éviter un sinistre commun"
          ],
          "narration": "La façon la plus simple d'éviter la perte d'une donnée, c'est de ne pas la collecter. C'est la règle de la limitation de collecte, reprise par la plupart des réglementations de protection de la vie privée : si la donnée n'a pas de but d'utilisation clair, on ne la collecte pas et on ne la stocke pas. Pour ce qui est collecté, pensez à la localisation : la bonne pratique est de conserver une copie de sauvegarde sur site et une autre hors site, avec une distance suffisante entre les deux pour qu'un même sinistre ne détruise pas l'original et la sauvegarde."
        },
        {
          "type": "standard",
          "titre": "Localisation, résidence et souveraineté des données",
          "points": [
            "Data localization : la LOI impose que la donnée reste dans le pays (ex. Russie, Chine)",
            "Data residency : CHOIX de l'organisation du lieu de stockage (conformité, latence, contrat)",
            "Data sovereignty : la donnée est soumise aux LOIS du pays où elle réside physiquement",
            "Cloud : les régions et zones du provider déterminent quelles juridictions s'appliquent",
            "Conflits de lois : CLOUD Act américain vs GDPR européen sur l'accès aux données"
          ],
          "narration": "Trois notions proches mais distinctes à bien séparer pour l'examen. La data localization est une exigence légale : certains pays, comme la Russie ou la Chine, imposent que les données de leurs citoyens soient stockées et parfois traitées sur leur territoire. La data residency, elle, relève du choix de l'organisation : décider où stocker ses données pour des raisons de conformité, de latence ou de contrat. Enfin, la data sovereignty est le principe selon lequel une donnée est soumise aux lois du pays où elle réside physiquement. Dans le cloud, le choix des régions du fournisseur détermine donc quelles juridictions peuvent s'appliquer à vos données. Attention aux conflits de lois : le CLOUD Act américain peut obliger un fournisseur américain à remettre des données stockées en Europe, ce qui entre en tension directe avec le GDPR. D'où l'intérêt de clauses contractuelles solides, du chiffrement avec des clés gérées par le client, et d'une sélection réfléchie des régions cloud.",
          "astuce": "💡 Conseil examen : localization = obligation légale de rester dans le pays ; residency = choix du lieu de stockage ; sovereignty = les lois locales s'appliquent à la donnée."
        },
        {
          "type": "standard",
          "titre": "Maintenance et rétention",
          "points": [
            "Data maintenance : soin continu de la donnée à travers son cycle de vie",
            "Conserver aussi longtemps que nécessaire, mais pas plus longtemps",
            "Record retention : trois questions — quoi, combien de temps, comment",
            "Tendance : politiques de rétention courtes des e-mails pour limiter la responsabilité juridique"
          ],
          "narration": "La maintenance des données, c'est l'effort continu, souvent automatisé, pour organiser et prendre soin de la donnée tout au long de son cycle de vie. La règle de rétention tient en une phrase : conserver la donnée aussi longtemps que le métier ou la loi l'exige, mais pas plus longtemps que nécessaire. Une politique de rétention répond à trois questions : quelles données retenir, combien de temps, et sous quelle forme pour qu'elles restent accessibles. La ligne directrice générale pour les données d'entreprise est de sept ans, mais elle varie selon les pays et les réglementations. Notez la tendance actuelle : des politiques de rétention courtes pour les e-mails, afin de réduire les responsabilités juridiques.",
          "astuce": "💡 Conseil examen : la rétention concerne les données, mais aussi les supports, les systèmes ET le personnel qui y a accès."
        },
        {
          "type": "standard",
          "titre": "Data maintenance : qualité, flux et migrations",
          "points": [
            "Revue continue de la qualité et de l'EXACTITUDE des données — une donnée fausse est un passif",
            "Gérer les flux entre systèmes : quand la donnée circule, ses contrôles doivent suivre",
            "Migrations et conversions de format : maintenir classification, chiffrement et droits d'accès",
            "Après migration : vérifier l'intégrité des données converties, puis assainir la source"
          ],
          "narration": "Approfondissons la maintenance, car elle ne se limite pas à ranger des fichiers. C'est d'abord une revue continue de la qualité et de l'exactitude des données : une adresse client périmée ou un dossier erroné conduisent à de mauvaises décisions et, pour des données personnelles, violent le principe d'exactitude du GDPR. C'est ensuite la gestion des flux entre systèmes : quand une donnée est copiée d'une application vers un entrepôt de données ou un partenaire, ses contrôles de sécurité doivent voyager avec elle. Enfin, les migrations et les conversions de format sont des moments à risque : la classification, le chiffrement et les restrictions d'accès doivent être maintenus pendant et après l'opération, l'intégrité des données converties doit être vérifiée, et l'ancien support doit être assaini pour éviter la rémanence.",
          "astuce": "💡 Conseil examen : dans une question de migration, la bonne réponse préserve les contrôles existants pendant l'opération — jamais « on remettra la sécurité après la migration »."
        },
        {
          "type": "schema",
          "titre": "Les trois états de la donnée",
          "points": [
            "Data at rest : stockée sur un support",
            "Data in transit : transmise sur un réseau",
            "Data in use : en mémoire, utilisée par une application"
          ],
          "schema": {
            "type": "grid",
            "items": [
              "At Rest — disques, bandes, sauvegardes → chiffrement",
              "In Transit — réseau, sessions → TLS, IPsec",
              "In Use — mémoire, traitement → patching, purge des buffers"
            ]
          },
          "narration": "À tout instant, une donnée est dans l'un de trois états. Au repos, data at rest, elle est stockée sur un support : disque dur, bande, clé USB, sauvegarde. En transit, data in transit ou in motion, elle circule sur un réseau. En cours d'utilisation, data in use, elle est en mémoire, traitée par une application. Chaque état demande une approche différente, et l'examen adore vous demander laquelle."
        },
        {
          "type": "standard",
          "titre": "Protéger chaque état",
          "points": [
            "At rest : chiffrer volumes, sauvegardes, et tous les supports (USB, SAN, NAS...)",
            "In transit : chiffrer partout, TLS et IPsec, même en interne",
            "In use : moins d'options — patching, builds standardisés, antimalware",
            "Les applications doivent purger les buffers mémoire après usage"
          ],
          "narration": "Pour la donnée au repos, la réponse est le chiffrement : volumes système, volumes de données, sauvegardes, sans oublier tous les supports comme les bandes, clés USB, disques externes, baies RAID, SAN et NAS. Pour la donnée en transit, chiffrez partout : certificats TLS sur les serveurs web, IPsec pour les sessions, y compris pour les applications internes. La donnée en cours d'utilisation est la plus difficile à protéger, car les options sont limitées : maintenir les systèmes à jour, utiliser des builds standardisés, exécuter des antimalwares, et s'assurer que les applications purgent les buffers mémoire dès que la donnée n'est plus nécessaire.",
          "astuce": "💡 Conseil examen : le chiffrement fort est la MEILLEURE protection de la confidentialité pour les données at rest et in transit."
        },
        {
          "type": "standard",
          "titre": "Rémanence des données",
          "points": [
            "Data remanence : donnée qui subsiste après un effacement supposé",
            "Flux magnétique résiduel et slack space (espace inutilisé des clusters)",
            "Certains OS remplissent le slack space avec des données de la mémoire",
            "D'où l'interdiction de traiter du classifié sur des systèmes non classifiés"
          ],
          "narration": "La rémanence des données, data remanence, désigne les données qui subsistent sur un support après un effacement supposé. Sur un disque magnétique, il s'agit du flux magnétique résiduel, mais aussi du slack space, cet espace inutilisé à l'intérieur des clusters où des fragments de données peuvent traîner. Détail important : certains systèmes d'exploitation remplissent le slack space avec des données issues de la mémoire. C'est précisément pour cela qu'on ne doit jamais traiter des données classifiées sur un système non classifié : des fragments pourraient y rester à votre insu."
        },
        {
          "type": "standard",
          "titre": "TEMPEST et émanations électromagnétiques",
          "points": [
            "TEMPEST : limiter les émanations électromagnétiques des équipements",
            "Contre-mesure au Van Eck phreaking (interception des émanations)",
            "Moyens : cages de Faraday, bruit blanc, zones de contrôle, blindage",
            "Mémoires : RAM volatile ; ROM, PROM, EPROM, EEPROM non volatiles"
          ],
          "narration": "La donnée peut aussi fuir par des canaux physiques. TEMPEST désigne les technologies conçues pour minimiser les émanations électromagnétiques des équipements informatiques, qui pourraient sinon être interceptées, une attaque appelée Van Eck phreaking. Les contre-mesures incluent les cages de Faraday, le bruit blanc, les zones de contrôle et le blindage. Profitons-en pour un rappel sur les mémoires : la RAM est volatile, elle perd son contenu hors tension ; la ROM et ses variantes PROM, EPROM effaçable aux ultraviolets, et EEPROM effaçable électriquement, sont non volatiles et peuvent donc retenir des données sensibles."
        },
        {
          "type": "question",
          "titre": "Contrôle de connaissance",
          "points": [],
          "narration": "Une question sur les états de la donnée. Réfléchissez à l'état concerné avant de choisir.",
          "q": "Quel état de la donnée est le PLUS difficile à protéger, avec le moins d'options de contrôle disponibles ?",
          "choix": [
            "Data archivée",
            "Data at rest",
            "Data in use",
            "Data in transit"
          ],
          "reponse": 2,
          "explication": "La donnée en cours d'utilisation (in use) est en clair en mémoire pendant son traitement : les options se limitent au patching, aux builds standardisés, à l'antimalware et à la purge des buffers. At rest et in transit bénéficient du chiffrement, bien plus robuste."
        },
        {
          "type": "resume",
          "titre": "Résumé de la leçon",
          "points": [
            "Cycle de vie : création, classification et stockage, utilisation, archivage, destruction",
            "Ne pas collecter sans but clair ; sauvegardes sur site et hors site",
            "Localization (obligation légale), residency (choix), sovereignty (lois locales) — attention CLOUD Act vs GDPR",
            "Maintenance : qualité et exactitude en continu ; les contrôles suivent la donnée lors des migrations et conversions",
            "Rétention : aussi longtemps que nécessaire, pas plus",
            "Trois états : at rest et in transit se chiffrent, in use est le plus dur à protéger",
            "Rémanence et émanations : slack space, TEMPEST, Van Eck phreaking"
          ],
          "narration": "Récapitulons. Le cycle de vie mène la donnée de la création à la destruction, en passant par la classification, le stockage, l'utilisation et l'archivage. On ne collecte que ce qui a un but clair, on garde des sauvegardes sur site et hors site, et on retient la donnée aussi longtemps que nécessaire, mais pas davantage. La maintenance veille en continu à la qualité et à l'exactitude des données, et garantit que les contrôles suivent la donnée lors des migrations et des conversions de format. La donnée existe en trois états : le chiffrement protège le repos et le transit, tandis que l'état in use reste le plus difficile à sécuriser. Enfin, méfiez-vous de la rémanence dans le slack space et des émanations électromagnétiques, contrées par TEMPEST."
        }
      ]
    },
    {
      "id": "d2-l4",
      "titre": "Rétention des actifs, EOL et destruction sécurisée",
      "duree": 9,
      "slides": [
        {
          "type": "intro",
          "titre": "Garder, puis détruire proprement",
          "points": [
            "La rétention ne concerne pas que la donnée : matériel et personnel aussi",
            "EOL et EOS : anticiper la fin de vie des produits",
            "La destruction doit être proportionnée à la classification"
          ],
          "narration": "Conserver une donnée pendant dix ans ne sert à rien si plus aucun matériel ne peut la lire, ou si plus personne ne sait faire fonctionner ce matériel. La rétention des actifs englobe donc la donnée, le matériel capable de la lire, et le personnel qui sait l'exploiter. Et quand vient le moment de s'en séparer, la destruction doit être proportionnée à la classification. C'est le programme de cette leçon."
        },
        {
          "type": "standard",
          "titre": "End-of-Life et End-of-Support",
          "points": [
            "EOL : le vendeur cesse de commercialiser le produit",
            "EOS ou EOSL : le vendeur cesse tout support (correctifs, assistance)",
            "S'applique au matériel comme au logiciel",
            "Un système en EOS ne reçoit plus de correctifs : risque majeur"
          ],
          "narration": "Deux jalons à connaître dans la vie d'un produit. End-of-Life, EOL, marque le moment où le vendeur cesse de commercialiser le produit. End-of-Support, EOS, parfois appelé End-of-Service-Life, marque la fin de tout support : plus de correctifs de sécurité, plus d'assistance. Ces jalons s'appliquent aussi bien au matériel qu'au logiciel. Du point de vue du manager, un système en EOS est un risque majeur, car les vulnérabilités découvertes ensuite ne seront jamais corrigées. Il faut planifier le remplacement avant d'atteindre cette échéance."
        },
        {
          "type": "schema",
          "titre": "Le spectre de la destruction",
          "points": [
            "Erasing : simple suppression, la rémanence subsiste",
            "Clearing : réécriture, résiste aux outils logiciels standards",
            "Purging : vise l'irrécupérable même en laboratoire",
            "Destruction : élimination physique, la plus sûre"
          ],
          "schema": {
            "type": "flow",
            "items": [
              "Erasing",
              "Clearing (overwrite)",
              "Purging",
              "Destruction physique"
            ]
          },
          "narration": "Visualisez la destruction comme un spectre d'assurance croissante. Tout en bas, l'erasing : une simple opération de suppression, qui laisse la rémanence intacte et ne protège de rien. Ensuite, le clearing : on réécrit les données existantes avec un motif, ce qui empêche la récupération par les fonctions normales des logiciels de récupération, mais des techniques avancées de laboratoire peuvent encore ramener les données. Puis le purging, qui vise à rendre la donnée irrécupérable par toute technique connue, y compris en laboratoire. Et enfin la destruction physique, la méthode la plus sûre."
        },
        {
          "type": "standard",
          "titre": "Clearing versus Purging : la nuance qui compte",
          "points": [
            "Clearing : protège contre la récupération logicielle standard",
            "Purging : vise à résister même aux techniques de laboratoire",
            "Le purging n'est PAS jugé acceptable pour du Top Secret",
            "La politique définit la méthode acceptable par classification (NIST SP 800-88)"
          ],
          "narration": "L'examen joue beaucoup sur la nuance entre clearing et purging. Le clearing protège uniquement contre la récupération par des utilitaires logiciels standards. Le purging a l'intention de rendre la donnée irrécupérable par toute technique connue, mais il n'est pas garanti contre les techniques les plus avancées, et c'est pourquoi il n'est pas considéré comme acceptable pour des données Top Secret. La référence en la matière est le NIST SP 800-88 : la politique de l'organisation doit définir les méthodes de destruction acceptables selon le type de support et la classification de la donnée."
        },
        {
          "type": "standard",
          "titre": "Degaussing et destruction physique",
          "points": [
            "Degaussing : champ magnétique puissant, efface bandes et disques magnétiques",
            "Sans effet sur les SSD et les supports optiques",
            "Destruction physique : broyage, incinération, pulvérisation, désintégration",
            "Méthode privilégiée pour les SSD et composants électroniques"
          ],
          "narration": "Le degaussing, ou démagnétisation, applique un champ magnétique puissant pour effacer les supports magnétiques : bandes et disques durs classiques. Attention, piège d'examen : le degaussing n'a aucun effet sur les supports optiques ni sur les SSD, qui ne stockent pas l'information magnétiquement. Pour les SSD et composants électroniques, on privilégie la destruction physique : broyage, incinération, pulvérisation ou désintégration, éventuellement combinée à d'autres méthodes. Quand la donnée doit absolument disparaître, la destruction physique reste la valeur sûre.",
          "astuce": "💡 Conseil examen : degaussing + SSD = mauvaise réponse. Pour un SSD, pensez destruction physique ou crypto-shredding."
        },
        {
          "type": "standard",
          "titre": "Crypto-shredding et destruction défendable",
          "points": [
            "Cryptographic erasure : chiffrer fort, puis détruire la clé",
            "Meilleure méthode contre la rémanence dans le cloud",
            "Defensible destruction : contrôlée, légalement défendable, conforme",
            "File carving : technique forensique qui récupère les fichiers non détruits"
          ],
          "narration": "Le crypto-shredding, ou cryptographic erasure, consiste à chiffrer les données avec un chiffrement fort, puis à détruire la clé de chiffrement : sans la clé, les données deviennent logiquement irrécupérables. C'est la meilleure méthode pour traiter la rémanence dans le cloud, où vous ne contrôlez pas physiquement les disques. Pensez aussi à la destruction défendable : éliminer les données de manière contrôlée, légalement défendable et conforme aux réglementations. Et souvenez-vous que si la destruction est bâclée, des techniques forensiques comme le file carving peuvent reconstruire des fichiers à partir des données brutes du support, même sans index du système de fichiers."
        },
        {
          "type": "question",
          "titre": "Contrôle de connaissance",
          "points": [],
          "narration": "Question pratique sur la destruction. Pensez au type de support avant de répondre.",
          "q": "Votre organisation résilie un contrat cloud et veut s'assurer que ses données ne pourront pas être récupérées sur l'infrastructure du fournisseur. Quelle est la MEILLEURE méthode ?",
          "choix": [
            "Le crypto-shredding : détruire les clés de chiffrement des données",
            "Demander au fournisseur de démagnétiser ses disques",
            "Réécrire les volumes avec des zéros",
            "Supprimer les fichiers puis vider la corbeille"
          ],
          "reponse": 0,
          "explication": "Dans le cloud, vous ne contrôlez pas les supports physiques : impossible de garantir un degaussing ou une réécriture exhaustive sur des supports mutualisés. Le crypto-shredding — chiffrer les données puis détruire la clé — est la meilleure réponse à la rémanence cloud. La simple suppression laisse une rémanence totale."
        },
        {
          "type": "question",
          "titre": "Contrôle de connaissance",
          "points": [],
          "narration": "Encore une, sur la nuance entre les méthodes d'assainissement.",
          "q": "Quelle méthode d'assainissement protège contre la récupération par des utilitaires logiciels standards, mais PAS contre des techniques de laboratoire avancées ?",
          "choix": [
            "Purging",
            "Clearing",
            "Degaussing",
            "Destruction"
          ],
          "reponse": 1,
          "explication": "Le clearing (réécriture avec un motif) empêche la récupération par les fonctions normales des logiciels, mais des techniques avancées peuvent encore restaurer les données. Le purging vise l'irrécupérabilité même en laboratoire, et la destruction physique élimine le support lui-même."
        },
        {
          "type": "resume",
          "titre": "Résumé de la leçon",
          "points": [
            "Rétention = données + matériel capable de les lire + personnel compétent",
            "EOL : fin de commercialisation ; EOS : fin des correctifs, risque majeur",
            "Erasing < Clearing < Purging < Destruction : assurance croissante",
            "Degaussing pour le magnétique seulement ; destruction physique pour les SSD",
            "Crypto-shredding : la réponse à la rémanence dans le cloud"
          ],
          "narration": "Résumons cette leçon. La rétention couvre les données, mais aussi le matériel capable de les lire et le personnel qui sait l'utiliser. Anticipez les jalons EOL et EOS, car un produit sans support est un risque permanent. Sur le spectre de la destruction, retenez l'ordre : erasing, clearing, purging, puis destruction physique, avec une assurance croissante. Le degaussing ne fonctionne que sur les supports magnétiques, jamais sur les SSD. Et pour le cloud, la bonne réponse est presque toujours le crypto-shredding."
        }
      ]
    },
    {
      "id": "d2-l5",
      "titre": "DRM, DLP, CASB, baselines et scoping/tailoring",
      "duree": 11,
      "slides": [
        {
          "type": "intro",
          "titre": "Choisir et adapter les contrôles",
          "points": [
            "Des technologies dédiées protègent la donnée dans chaque état",
            "DRM, DLP et CASB : trois familles à bien distinguer",
            "Les baselines se personnalisent par scoping et tailoring"
          ],
          "narration": "Dernière leçon du domaine : comment choisir et adapter les contrôles de protection des données. Nous verrons trois familles de technologies que l'examen adore comparer : le DRM pour protéger la propriété intellectuelle, le DLP pour empêcher l'exfiltration, et le CASB pour étendre les politiques de sécurité vers le cloud. Puis nous verrons comment partir d'une baseline de contrôles et l'adapter à votre organisation grâce au scoping et au tailoring."
        },
        {
          "type": "standard",
          "titre": "Digital Rights Management (DRM)",
          "points": [
            "Protège les œuvres et contenus soumis au droit d'auteur",
            "Empêche l'usage, la modification et la distribution non autorisés",
            "La protection voyage avec la donnée, quel que soit son état",
            "Utile quand on ne peut pas chiffrer les volumes de données"
          ],
          "narration": "Le Digital Rights Management regroupe les méthodes qui protègent les contenus soumis au droit d'auteur. Son but : empêcher l'utilisation, la modification et la distribution non autorisées d'une œuvre. La grande force du DRM, c'est que la protection voyage avec la donnée : où que le fichier aille, les restrictions le suivent, quel que soit son état. C'est particulièrement utile pour la donnée au repos, notamment quand vous ne pouvez pas chiffrer les volumes eux-mêmes."
        },
        {
          "type": "standard",
          "titre": "Data Loss Prevention (DLP)",
          "points": [
            "Détecte et bloque les tentatives d'exfiltration de données",
            "Network-based : en bordure de réseau, scanne le trafic sortant",
            "Endpoint-based : scanne les fichiers, bloque impression et copie USB",
            "Cloud-based : conçu pour les environnements cloud natifs"
          ],
          "narration": "Le Data Loss Prevention, DLP, désigne les systèmes qui détectent et bloquent les tentatives d'exfiltration en surveillant la donnée en mouvement, au repos et en usage. Il en existe trois types principaux. Le DLP réseau se place en bordure du réseau et scanne tout le trafic sortant : par exemple, une règle peut bloquer un flux contenant des numéros au format sécurité sociale. Le DLP endpoint scanne les fichiers stockés et peut empêcher l'impression ou la copie de données sensibles vers un support amovible. Enfin, le DLP cloud est conçu spécifiquement pour les environnements cloud natifs.",
          "astuce": "💡 Conseil examen : exfiltration ou fuite de données dans l'énoncé → pensez DLP. Protection du copyright → pensez DRM."
        },
        {
          "type": "standard",
          "titre": "Cloud Access Security Broker (CASB)",
          "points": [
            "Placé logiquement entre les utilisateurs et les ressources cloud",
            "Étend les protections internes vers le cloud, applique les politiques",
            "Quatre piliers : visibilité, sécurité des données, détection des menaces, conformité",
            "Combine souvent DLP, WAF, authentification et pare-feu"
          ],
          "narration": "Le Cloud Access Security Broker, CASB, est un logiciel placé logiquement entre les utilisateurs et les ressources cloud. Sa mission : garantir que les ressources cloud bénéficient des mêmes protections que les ressources internes, en appliquant les politiques de sécurité et de conformité lors de l'accès aux applications et aux données cloud. Retenez ses quatre piliers : visibilité, sécurité des données, détection des menaces et conformité. En pratique, un CASB combine souvent un DLP, un pare-feu applicatif web, des fonctions d'authentification et un pare-feu réseau, ce qui en fait un excellent outil pour la donnée en usage et en transit."
        },
        {
          "type": "standard",
          "titre": "Anonymisation, pseudonymisation, tokenisation",
          "points": [
            "Anonymization : identités supprimées, irréversible quand bien faite",
            "Randomized masking : méthode d'anonymisation non réversible",
            "Pseudonymization : alias, réversible avec le jeu de correspondance",
            "Tokenization : jeton aléatoire, l'original reste dans un coffre (vault)"
          ],
          "narration": "Pour partager ou traiter des données personnelles en limitant les risques, plusieurs techniques existent. L'anonymisation remplace les données privées par des données utilisables mais inexactes : les identités sont supprimées de façon permanente et, bien réalisée, notamment par masquage aléatoire, elle est irréversible. La pseudonymisation remplace les données par des alias, mais un jeu de données externe conserve la correspondance : elle est donc réversible si l'on détient la clé. La tokenisation remplace la donnée par un jeton aléatoire sans valeur propre, l'original restant dans un coffre sécurisé, comme dans les transactions par carte bancaire où le point de vente ne voit jamais le numéro de carte, seulement le jeton.",
          "astuce": "💡 Conseil examen : anonymisation = irréversible ; pseudonymisation, tokenisation et chiffrement = réversibles (quasi-anonymisation)."
        },
        {
          "type": "standard",
          "titre": "Baselines de sécurité",
          "points": [
            "Baseline : niveau minimal documenté de configuration de sécurité",
            "Point de départ commun, jamais une fin en soi",
            "Doit ensuite être ajustée aux besoins réels de l'organisation",
            "Exemples : baselines NIST SP 800-53 par niveau d'impact"
          ],
          "narration": "Une baseline est le niveau minimal documenté de configuration de sécurité autorisé par un standard ou par l'organisation. C'est un excellent point de départ : plutôt que de choisir des centaines de contrôles un par un, on part d'un ensemble éprouvé, comme les baselines du NIST par niveau d'impact. Mais une baseline n'est jamais une fin en soi : elle contient des contrôles inutiles pour votre contexte et il peut lui en manquer d'autres. C'est là qu'interviennent le tailoring et le scoping."
        },
        {
          "type": "schema",
          "titre": "De la baseline aux contrôles adaptés",
          "points": [
            "Sélection d'une baseline de contrôles",
            "Scoping : retirer les contrôles qui ne s'appliquent pas",
            "Tailoring : ajuster les contrôles à la mission et au contexte",
            "Contrôles compensatoires et paramètres définis par l'organisation"
          ],
          "schema": {
            "type": "flow",
            "items": [
              "Baseline",
              "Scoping (retirer l'inapplicable)",
              "Tailoring (ajuster à la mission)",
              "Contrôles adaptés"
            ]
          },
          "narration": "Voici le processus. On sélectionne d'abord une baseline. Le scoping consiste à en délimiter le périmètre : on passe en revue la liste des contrôles et on retire ceux qui ne s'appliquent pas aux systèmes à protéger. Par exemple, inutile de garder des contrôles sur les communications sans fil si aucun système n'en utilise. Le tailoring, dont le scoping fait partie, va plus loin : il ajuste la liste des contrôles à la mission de l'organisation, en identifiant les contrôles communs, en fixant les paramètres définis par l'organisation, et en sélectionnant des contrôles compensatoires si nécessaire. Résultat : un ensemble de contrôles réellement adapté."
        },
        {
          "type": "standard",
          "titre": "Sélection des standards et des vendeurs",
          "points": [
            "Identifier les standards applicables : PCI DSS, GDPR, etc.",
            "Même sans obligation, un standard communautaire solide aide (NIST SP 800)",
            "Conformité OBLIGATOIRE (PCI DSS, GDPR) versus adoption VOLONTAIRE (NIST CSF, CIS)",
            "ISO/IEC 27001 : ISMS certifiable — quand clients, régulateurs ou appels d'offres exigent une preuve formelle",
            "NIST CSF : cadre volontaire et flexible pour structurer le programme et dialoguer avec la direction",
            "CIS Controls : prescriptif et priorisé (Implementation Groups) — gains rapides avec des ressources limitées",
            "Processus de sélection objectif et mesurable, reproductible",
            "Vendor selection : même logique, appliquée aux fournisseurs"
          ],
          "narration": "Les organisations doivent identifier les standards qui s'appliquent à elles, comme PCI DSS pour les cartes de paiement ou le GDPR pour les données personnelles européennes, et s'assurer que les contrôles choisis y sont pleinement conformes. Distinguez d'abord ce qui est obligatoire de ce qui est volontaire : PCI DSS s'impose dès qu'on traite des cartes, le GDPR dès qu'on traite des données personnelles européennes ; NIST CSF ou les CIS Controls, eux, sont des choix. Ensuite vient l'arbitrage entre référentiels volontaires. ISO 27001 définit un système de management de la sécurité certifiable : on le choisit quand des clients, des régulateurs ou des appels d'offres exigent une preuve formelle et internationalement reconnue. Le NIST Cybersecurity Framework est un cadre flexible et gratuit, idéal pour structurer un programme de gestion des risques et le communiquer à la direction, sans certification. Les CIS Controls sont prescriptifs et priorisés par Implementation Groups : parfaits pour une équipe réduite qui veut des gains techniques rapides. Ces choix ne s'excluent pas : beaucoup d'organisations démarrent avec les CIS Controls, se structurent avec le NIST CSF, puis se font certifier ISO 27001 quand le marché l'exige. Dans tous les cas, la sélection de standards, comme la sélection de vendeurs, doit être un processus objectif et mesurable : si une équipe totalement différente refaisait l'exercice, elle devrait aboutir au même choix.",
          "astuce": "💡 Conseil examen : certifiable et exigé par un client = ISO 27001 ; structurer et communiquer le risque = NIST CSF ; actions techniques priorisées à petit budget = CIS Controls."
        },
        {
          "type": "question",
          "titre": "Contrôle de connaissance",
          "points": [],
          "narration": "Testons la distinction entre scoping et tailoring, un classique de l'examen.",
          "q": "Une organisation part d'une baseline NIST et retire les contrôles relatifs aux réseaux sans fil car aucun de ses systèmes n'en utilise. Comment s'appelle ce processus ?",
          "choix": [
            "Hardening",
            "Standards selection",
            "Scoping",
            "Tailoring uniquement"
          ],
          "reponse": 2,
          "explication": "Retirer d'une baseline les contrôles qui ne s'appliquent pas aux systèmes concernés, c'est le scoping. Le scoping fait partie du processus plus large de tailoring, qui inclut aussi l'ajustement des paramètres et les contrôles compensatoires — mais l'action décrite ici est précisément le scoping."
        },
        {
          "type": "question",
          "titre": "Contrôle de connaissance",
          "points": [],
          "narration": "Une dernière question sur les technologies de protection.",
          "q": "Quelle solution est spécifiquement conçue pour garantir que les ressources cloud bénéficient des mêmes politiques de sécurité que les ressources internes ?",
          "choix": [
            "DLP réseau",
            "SIEM",
            "DRM",
            "CASB"
          ],
          "reponse": 3,
          "explication": "Le Cloud Access Security Broker (CASB) se place logiquement entre les utilisateurs et les ressources cloud pour appliquer les politiques de sécurité et de conformité de l'organisation. Le DLP bloque l'exfiltration, le DRM protège le copyright, et le SIEM centralise les journaux."
        },
        {
          "type": "resume",
          "titre": "Résumé de la leçon",
          "points": [
            "DRM : protège le copyright, la protection voyage avec la donnée",
            "DLP : bloque l'exfiltration — network, endpoint, cloud",
            "CASB : visibilité, sécurité des données, détection des menaces, conformité",
            "Anonymisation irréversible ; pseudonymisation et tokenisation réversibles",
            "Baseline → scoping (retirer) → tailoring (ajuster) → contrôles adaptés",
            "Standards : obligatoire (PCI DSS, GDPR) vs volontaire — ISO 27001 certifiable, NIST CSF structurant, CIS Controls priorisés"
          ],
          "narration": "Concluons ce domaine. Le DRM protège les contenus soumis au droit d'auteur et sa protection accompagne la donnée partout. Le DLP détecte et bloque l'exfiltration, en version réseau, endpoint ou cloud. Le CASB étend vos politiques vers le cloud avec ses quatre piliers : visibilité, sécurité des données, détection des menaces et conformité. Pour les données personnelles, l'anonymisation est irréversible, tandis que pseudonymisation, tokenisation et chiffrement sont réversibles. Et pour les contrôles, partez d'une baseline, retirez l'inapplicable par scoping, puis ajustez par tailoring. Côté référentiels, distinguez l'obligatoire du volontaire, et retenez le trio : ISO 27001 quand il faut une certification, NIST CSF pour structurer le programme, CIS Controls pour agir vite avec peu de moyens. Vous avez maintenant tous les outils du Domaine 2."
        }
      ]
    }
  ],
  "quiz": [
    {
      "q": "Que devrait faire une organisation EN PREMIER avant de pouvoir protéger efficacement ses données ?",
      "choix": [
        "Souscrire une police de cyber-assurance dédiée",
        "Identifier et classifier les informations et les actifs",
        "Déployer une solution DLP sur l'ensemble du réseau interne",
        "Chiffrer toutes les données stockées au repos"
      ],
      "reponse": 1,
      "explication": "On ne peut protéger que ce que l'on connaît : l'identification et la classification des actifs sont la première étape du cycle de vie, généralement formalisées dans la politique de sécurité. DLP, chiffrement et assurance sont des contrôles qui viennent APRÈS, une fois que l'on sait quoi protéger et à quel niveau.",
      "difficulte": 1,
      "pourquoi": [
        "Piège du transfert : l'assurance couvre le risque financier résiduel, elle ne protège aucune donnée et se souscrit après l'analyse.",
        "Bonne réponse : on ne protège que ce que l'on connaît — l'identification et la classification précèdent tout choix de contrôle.",
        "Réponse de technicien : déployer un DLP sans savoir quelles données protéger revient à configurer un outil à l'aveugle.",
        "Techniquement vrai mais hors phase : le chiffrement se dimensionne APRÈS la classification, et tout chiffrer sans discernement gaspille les ressources."
      ]
    },
    {
      "q": "Qui est le MIEUX placé pour déterminer la classification d'un ensemble de données métier ?",
      "choix": [
        "Le data owner, qui connaît la valeur de la donnée pour le métier",
        "Le data custodian, qui gère les sauvegardes",
        "L'utilisateur final, qui manipule la donnée au quotidien",
        "L'administrateur sécurité, qui configure les contrôles"
      ],
      "reponse": 0,
      "explication": "Le data owner — typiquement un cadre dirigeant ou chef de département — est la personne la plus familière avec l'importance de la donnée pour le métier ; c'est lui qui classifie et autorise l'accès. Le custodian exécute des tâches déléguées, l'administrateur applique les contrôles, et l'utilisateur consomme la donnée : aucun d'eux ne porte l'accountability de la classification.",
      "difficulte": 1,
      "pourquoi": [
        "Bonne réponse : le data owner connaît la valeur de la donnée pour le métier et porte l'accountability — c'est lui qui classifie.",
        "Piège du rôle d'exécution : le custodian applique des protections déléguées, il ne détermine pas la valeur métier de la donnée.",
        "Trop étroit : l'utilisateur manipule la donnée au quotidien mais n'a ni la vision d'ensemble ni l'autorité pour la classifier.",
        "Réponse de technicien : l'administrateur configure les contrôles mais n'a pas la vision métier nécessaire pour classifier."
      ]
    },
    {
      "q": "Une entreprise décide quelles données personnelles collecter sur ses clients et dans quel but, puis mandate un tiers pour les analyser. Au sens du GDPR, quels sont respectivement leurs rôles ?",
      "choix": [
        "Steward et processor",
        "Processor et controller",
        "Owner et custodian",
        "Controller et processor"
      ],
      "reponse": 3,
      "explication": "Le data controller décide quelles données traiter, pourquoi et comment : c'est l'entreprise. Le data processor traite les données pour le compte et sous la direction du controller : c'est le tiers mandaté. Owner/custodian et steward sont des rôles internes de gouvernance, pas les rôles GDPR demandés ici.",
      "difficulte": 1,
      "pourquoi": [
        "Hors périmètre : le steward gère la qualité métier des données, ce n'est pas un rôle GDPR.",
        "Inversion des rôles : c'est l'entreprise qui décide des finalités du traitement (controller), pas le tiers mandaté.",
        "Hors périmètre : owner et custodian sont des rôles de gouvernance interne, pas les rôles définis par le GDPR.",
        "Bonne réponse : celui qui décide quelles données traiter et pourquoi est le controller ; celui qui traite pour son compte est le processor."
      ]
    },
    {
      "q": "Quelle est la MEILLEURE méthode pour protéger la confidentialité des données au repos ?",
      "choix": [
        "La journalisation des accès",
        "Un contrôle d'accès basé sur les rôles",
        "Un chiffrement fort",
        "Une politique de mots de passe robuste"
      ],
      "reponse": 2,
      "explication": "Le chiffrement fort est la meilleure protection de la confidentialité pour les données au repos : même si le support est volé ou l'accès contourné, la donnée reste illisible. Le RBAC et les mots de passe protègent l'accès logique mais pas le support lui-même, et la journalisation est un contrôle détectif, pas préventif.",
      "difficulte": 1,
      "pourquoi": [
        "Piège du contrôle détectif : la journalisation constate l'accès après coup, elle n'empêche rien.",
        "Techniquement vrai mais insuffisant : le RBAC protège le chemin d'accès logique, pas le support physique volé ou copié.",
        "Bonne réponse : le chiffrement fort rend la donnée illisible même si le support est volé ou les contrôles d'accès contournés.",
        "Trop étroit : les mots de passe protègent l'authentification, pas la donnée elle-même sur le support."
      ]
    },
    {
      "q": "Un data owner surchargé souhaite confier les sauvegardes quotidiennes et la restauration des données à l'équipe informatique. Quel rôle cette équipe assume-t-elle ?",
      "choix": [
        "Data controller",
        "Data custodian",
        "Data processor",
        "Data steward"
      ],
      "reponse": 1,
      "explication": "Le data custodian reçoit par délégation les responsabilités quotidiennes de stockage et de protection : sauvegardes, archivage, restauration, prévention de la perte. Le steward porte la qualité métier, le controller décide du traitement (contexte GDPR) et le processor traite pour le compte d'un controller.",
      "difficulte": 1,
      "pourquoi": [
        "Hors périmètre : le controller est un rôle GDPR qui décide des finalités du traitement, pas un rôle de sauvegarde interne.",
        "Bonne réponse : le custodian reçoit par délégation les tâches opérationnelles de protection — sauvegardes, restauration, stockage.",
        "Hors périmètre : le processor traite des données pour le compte d'un controller au sens GDPR, ce n'est pas une délégation interne.",
        "Piège métier/technique : le steward porte la qualité et la gouvernance métier, pas les tâches techniques quotidiennes."
      ]
    },
    {
      "q": "Quelle affirmation décrit le MIEUX la différence entre labeling et marking ?",
      "choix": [
        "Le marking ne s'applique qu'aux documents papier",
        "Le labeling est lisible par l'humain, le marking par le système",
        "Le labeling est lisible par le système, le marking par l'humain",
        "Les deux termes sont strictement synonymes"
      ],
      "reponse": 2,
      "explication": "Le labeling associe des attributs de sécurité lisibles par le système (métadonnées, codes-barres, RFID), permettant une application automatique des politiques. Le marking est la forme lisible par l'humain (tampon, bandeau), qui permet une application par les processus. Le marking s'applique aussi bien au physique qu'à l'électronique.",
      "difficulte": 2,
      "pourquoi": [
        "Trop étroit : le marking s'applique aussi bien aux supports électroniques qu'au papier.",
        "Inversion classique : c'est exactement le contraire — le piège joue sur la confusion entre les deux termes.",
        "Bonne réponse : le labeling est lisible par le système (métadonnées, RFID) pour l'application automatique des politiques ; le marking est lisible par l'humain.",
        "Piège de la simplification : les deux notions se distinguent par leur destinataire — système ou humain — elles ne sont pas synonymes."
      ]
    },
    {
      "q": "Un employé demande l'accès à des données classifiées Confidential pour un nouveau projet. Que devrait exiger le processus EN PREMIER ?",
      "choix": [
        "Une augmentation générale de la clearance de tout le département",
        "Que l'employé signe une décharge de responsabilité écrite couvrant tout risque d'accès",
        "L'installation d'un agent DLP de surveillance sur son poste de travail",
        "L'approbation formelle du data owner et la vérification du besoin d'en connaître"
      ],
      "reponse": 3,
      "explication": "Tout changement d'accès doit passer par un processus formel d'approbation impliquant le data owner, fondé sur le need-to-know, avec information de l'utilisateur sur les règles du niveau concerné. Élever la clearance de tout un département viole le moindre privilège ; la décharge et le DLP ne remplacent pas l'autorisation formelle.",
      "difficulte": 2,
      "pourquoi": [
        "Absolu et contraire au moindre privilège : élever toute une population pour un besoin individuel est exactement ce qu'il faut éviter.",
        "Piège administratif : une décharge ne remplace pas l'autorisation formelle et ne vérifie pas le besoin d'en connaître.",
        "Réponse de technicien : le DLP est un contrôle de surveillance, il n'autorise rien et vient après la décision d'accès.",
        "Bonne réponse : tout accès passe par l'approbation formelle du data owner fondée sur le need-to-know — le processus avant l'outil."
      ]
    },
    {
      "q": "Quel est l'objectif PRINCIPAL de la gestion des actifs (asset management) ?",
      "choix": [
        "Prévenir les pertes en inventoriant, suivant et protégeant les actifs",
        "Satisfaire les auditeurs financiers et les régulateurs sectoriels externes",
        "Optimiser les coûts d'achat et de renouvellement du matériel",
        "Accélérer le déploiement des nouveaux systèmes en production"
      ],
      "reponse": 0,
      "explication": "La gestion des actifs — tangibles et intangibles — commence par l'inventaire et vise avant tout à prévenir les pertes, en suivant les actifs et en les protégeant tout au long de leur vie. Les bénéfices financiers ou d'audit sont secondaires par rapport à cet objectif de protection.",
      "difficulte": 1,
      "pourquoi": [
        "Bonne réponse : inventorier, suivre et protéger les actifs pour prévenir les pertes est la finalité première de l'asset management.",
        "Trop étroit : la satisfaction des auditeurs est une conséquence heureuse, pas l'objectif principal.",
        "Techniquement vrai mais accessoire : l'optimisation des coûts est un bénéfice secondaire, pas l'objectif de sécurité.",
        "Hors sujet : la vitesse de déploiement est un objectif d'exploitation, pas de gestion des actifs."
      ]
    },
    {
      "q": "Quelle est la façon la PLUS simple et la plus efficace d'éviter la perte d'une donnée sensible ?",
      "choix": [
        "La pseudonymiser systématiquement dès la collecte",
        "La chiffrer avec un algorithme de chiffrement fort et éprouvé",
        "La répliquer sur plusieurs sites géographiques distants",
        "Ne pas la collecter si elle n'a pas de but métier clair"
      ],
      "reponse": 3,
      "explication": "Une donnée qui n'existe pas ne peut ni fuiter ni être volée : la limitation de collecte est la première ligne de défense, reprise par la plupart des réglementations de protection de la vie privée. Chiffrement, réplication et pseudonymisation protègent des données déjà collectées — donc déjà exposées à un risque.",
      "difficulte": 1,
      "pourquoi": [
        "Techniquement vrai mais partiel : la pseudonymisation reste réversible et suppose que la donnée existe déjà.",
        "Techniquement vrai mais second : le chiffrement protège une donnée déjà collectée, donc déjà exposée à un risque.",
        "Contresens : la réplication protège la disponibilité mais multiplie les copies, donc la surface d'exposition.",
        "Bonne réponse : une donnée jamais collectée ne peut ni fuiter ni être volée — la minimisation de la collecte est la défense la plus simple et la plus efficace."
      ]
    },
    {
      "q": "Une organisation conserve tous ses e-mails indéfiniment « au cas où ». Quel est le PRINCIPAL risque de cette pratique du point de vue d'un manager ?",
      "choix": [
        "Les sauvegardes deviennent nettement plus lentes à exécuter",
        "L'augmentation de la responsabilité juridique et de la surface d'exposition",
        "Les e-mails anciens deviennent difficiles à rechercher et à indexer rapidement",
        "Le coût de stockage finit par devenir prohibitif"
      ],
      "reponse": 1,
      "explication": "Conserver des données plus longtemps que nécessaire accroît la responsabilité juridique (tout e-mail conservé est produisible en justice) et la surface d'exposition en cas de compromission. C'est pourquoi la tendance est aux politiques de rétention courtes pour les e-mails. Le coût et la performance sont des considérations réelles mais secondaires face au risque juridique.",
      "difficulte": 2,
      "pourquoi": [
        "Réponse de technicien : la lenteur des sauvegardes est un détail opérationnel face à la responsabilité juridique.",
        "Bonne réponse : tout e-mail conservé est produisible en justice (eDiscovery) et élargit la surface d'exposition — le risque juridique prime.",
        "Trop étroit : la difficulté de recherche est un problème d'exploitation, pas un risque majeur.",
        "Vrai mais secondaire pour un manager : le coût de stockage est une conséquence opérationnelle, pas le risque principal."
      ]
    },
    {
      "q": "Quelle règle résume le MIEUX une politique de rétention des données saine ?",
      "choix": [
        "Laisser chaque département décider librement et sans cadre commun de sa propre rétention",
        "Supprimer toutes les données après un an pour limiter les risques",
        "Conserver aussi longtemps que l'exige le besoin métier ou légal, mais pas plus longtemps",
        "Conserver toutes les données au moins dix ans par précaution"
      ],
      "reponse": 2,
      "explication": "La rétention doit être bornée dans les deux sens : pas moins que ce que le métier et la loi exigent, pas plus que nécessaire. Une durée uniforme (dix ans ou un an) ignore les exigences réglementaires variées, et laisser chaque département décider sans cadre produit une rétention incohérente et indéfendable.",
      "difficulte": 2,
      "pourquoi": [
        "Piège de la décentralisation : sans cadre commun, la rétention devient incohérente et juridiquement indéfendable.",
        "Absolu inverse : supprimer tout après un an violerait les obligations légales de conservation plus longues.",
        "Bonne réponse : la rétention est bornée dans les deux sens — pas moins que l'exigence légale ou métier, pas plus que nécessaire.",
        "Absolu : une durée uniforme de dix ans ignore la diversité des exigences légales et métier."
      ]
    },
    {
      "q": "Pourquoi ne faut-il JAMAIS traiter des données classifiées sur un système non classifié ?",
      "choix": [
        "Certains OS écrivent des données de la mémoire dans le slack space, créant une rémanence invisible",
        "Parce que la politique impose de chiffrer les données classifiées, ce que ce système ne garantit pas",
        "Parce que les utilisateurs du système n'ont pas signé de NDA couvrant ce niveau de classification",
        "Parce que les systèmes non classifiés ne sont pas audités assez fréquemment"
      ],
      "reponse": 0,
      "explication": "Certains systèmes d'exploitation remplissent le slack space (espace inutilisé des clusters) avec des données provenant de la mémoire : des fragments de données classifiées peuvent donc persister sur le disque à l'insu de l'utilisateur. C'est un problème de rémanence — ni le NDA, ni la fréquence d'audit, ni même le chiffrement du système ne traitent ces résidus issus de la mémoire.",
      "difficulte": 3,
      "pourquoi": [
        "Bonne réponse : l'OS peut écrire des données de la mémoire dans le slack space, créant une rémanence invisible de données classifiées sur un système non habilité.",
        "Techniquement vrai mais à côté : même chiffré, le système peut laisser des résidus en clair issus de la mémoire — le chiffrement ne traite pas ce risque.",
        "Plausible mais hors sujet : le NDA est un contrôle administratif, il n'explique pas l'interdiction technique de mélanger les niveaux.",
        "Piège de la conformité : la fréquence d'audit ne change rien au fond du problème, qui est la rémanence des données."
      ]
    },
    {
      "q": "Quel terme désigne les données qui subsistent sur un support après un effacement supposé ?",
      "choix": [
        "Data remanence",
        "Data masking",
        "File carving",
        "Slack space"
      ],
      "reponse": 0,
      "explication": "La data remanence est la donnée résiduelle qui subsiste après un effacement — flux magnétique résiduel ou fragments dans le slack space. Le slack space est un lieu où la rémanence se cache (pas le phénomène lui-même), le file carving est la technique forensique qui exploite cette rémanence, et le masking est une technique d'anonymisation.",
      "difficulte": 1,
      "pourquoi": [
        "Bonne réponse : la data remanence désigne précisément les données résiduelles qui subsistent après un effacement supposé.",
        "Hors sujet : le masking est une technique d'obscurcissement de données, sans rapport avec l'effacement.",
        "Piège de la technique : le file carving est la méthode forensique qui exploite la rémanence, pas la rémanence elle-même.",
        "Piège du lieu et du phénomène : le slack space est un endroit où la rémanence se loge, pas le phénomène lui-même."
      ]
    },
    {
      "q": "Votre organisation doit se débarrasser de disques durs magnétiques ayant contenu des données Top Secret. Quelle approche est la PLUS appropriée ?",
      "choix": [
        "Suppression des partitions et reformatage",
        "Destruction physique (broyage ou incinération)",
        "Clearing par réécriture simple",
        "Purging par degaussing"
      ],
      "reponse": 1,
      "explication": "Le purging n'est pas considéré comme acceptable pour des données Top Secret, car il n'est pas garanti contre les techniques les plus avancées. Pour la classification la plus élevée, la destruction physique — broyage, incinération, pulvérisation — est la méthode la plus sûre. Le clearing et le reformatage laissent une rémanence exploitable.",
      "difficulte": 2,
      "pourquoi": [
        "Piège du faux effacement : le reformatage ne détruit que les index, la rémanence reste totale.",
        "Bonne réponse : pour du Top Secret, seule la destruction physique offre l'assurance requise contre toute récupération.",
        "Trop faible : le clearing résiste aux outils logiciels standards mais pas aux techniques de laboratoire — inacceptable pour du Top Secret.",
        "Techniquement vrai mais insuffisant : même le purging n'est pas jugé assez sûr pour la classification la plus élevée."
      ]
    },
    {
      "q": "Quelle méthode d'assainissement est TOTALEMENT inefficace sur un SSD ?",
      "choix": [
        "Le broyage",
        "La destruction physique",
        "Le degaussing",
        "Le crypto-shredding"
      ],
      "reponse": 2,
      "explication": "Le degaussing agit sur le magnétisme : il efface bandes et disques magnétiques, mais n'a aucun effet sur les SSD (mémoire flash) ni sur les supports optiques. Pour un SSD, il faut la destruction physique ou le crypto-shredding.",
      "difficulte": 1,
      "pourquoi": [
        "Efficace : le broyage est une forme de destruction physique valable pour les SSD.",
        "Efficace : la destruction physique fonctionne sur tout support, y compris les SSD.",
        "Bonne réponse : le degaussing agit sur le magnétisme et n'a aucun effet sur la mémoire flash d'un SSD.",
        "Efficace : le crypto-shredding rend les données logiquement irrécupérables quel que soit le support."
      ]
    },
    {
      "q": "Qu'est-ce que le crypto-shredding (cryptographic erasure) ?",
      "choix": [
        "Broyer physiquement les supports contenant des clés",
        "Fragmenter un fichier chiffré sur plusieurs supports",
        "Réécrire les données avec des motifs aléatoires chiffrés",
        "Chiffrer les données puis détruire la clé de chiffrement"
      ],
      "reponse": 3,
      "explication": "Le crypto-shredding consiste à chiffrer les données avec un chiffrement fort puis à détruire la clé : sans clé, les données deviennent logiquement irrécupérables. C'est la meilleure méthode contre la rémanence dans le cloud, où l'on ne contrôle pas les supports physiques.",
      "difficulte": 1,
      "pourquoi": [
        "Piège du mot « shredding » : il ne s'agit pas de broyage physique mais de destruction logique par la clé.",
        "Invention plausible : fragmenter un fichier ne détruit rien tant que les fragments et la clé existent.",
        "Confusion avec le clearing : la réécriture par motifs est une autre méthode d'assainissement, pas le crypto-shredding.",
        "Bonne réponse : chiffrer puis détruire la clé rend les données logiquement irrécupérables — idéal quand on ne contrôle pas les supports physiques."
      ]
    },
    {
      "q": "Un analyste forensique doit récupérer des fichiers supprimés dont le répertoire entier est corrompu. Quelle technique est la PLUS adaptée ?",
      "choix": [
        "Le crypto-shredding",
        "Le clearing",
        "Le degaussing",
        "Le file carving"
      ],
      "reponse": 3,
      "explication": "Le file carving reconstruit les fichiers à partir des données brutes du support en s'appuyant sur leur structure et leur contenu, sans dépendre de l'index du système de fichiers — idéal quand un répertoire est manquant ou corrompu. Le degaussing et le clearing détruisent les données, et le crypto-shredding les rend irrécupérables.",
      "difficulte": 2,
      "pourquoi": [
        "Contresens : le crypto-shredding rend les données irrécupérables — l'inverse de l'objectif.",
        "Contresens : le clearing efface par réécriture, il ne récupère rien.",
        "Contresens : le degaussing détruit les données au lieu de les récupérer.",
        "Bonne réponse : le file carving reconstruit les fichiers à partir des données brutes, sans dépendre de l'index corrompu du système de fichiers."
      ]
    },
    {
      "q": "Le support d'un logiciel critique atteint son End-of-Support (EOS) dans six mois. Quelle est la MEILLEURE action du manager sécurité ?",
      "choix": [
        "Négocier une baisse du prix des licences existantes",
        "Planifier dès maintenant la migration ou le remplacement avant l'échéance",
        "Isoler définitivement le système du réseau et continuer malgré tout à l'utiliser",
        "Attendre la première vulnérabilité critique pour agir"
      ],
      "reponse": 1,
      "explication": "Après l'EOS, plus aucun correctif de sécurité n'est publié : chaque nouvelle vulnérabilité reste ouverte à jamais. Le manager doit planifier la migration AVANT l'échéance. Attendre une vulnérabilité est réactif et dangereux ; l'isolation est au mieux une mesure compensatoire temporaire, pas une stratégie.",
      "difficulte": 2,
      "pourquoi": [
        "Hors sujet sécurité : le prix des licences ne traite pas le risque des vulnérabilités non corrigées.",
        "Bonne réponse : la posture managériale est proactive — planifier la migration avant l'échéance, tant que le support existe encore.",
        "Techniquement vrai mais pas une stratégie : l'isolation est une mesure compensatoire temporaire, pas une réponse durable.",
        "Piège réactif : attendre une vulnérabilité laisse une fenêtre d'exposition qui ne se refermera jamais après l'EOS."
      ]
    },
    {
      "q": "Pourquoi la rétention des données doit-elle aussi prendre en compte le matériel et le personnel ?",
      "choix": [
        "Pour aligner la durée de rétention sur l'amortissement comptable des équipements",
        "Pour pouvoir renégocier les contrats de maintenance des lecteurs avant leur échéance",
        "Parce que des données conservées sont inutiles sans matériel capable de les lire ni personnel sachant l'exploiter",
        "Parce que seuls les administrateurs d'origine sont habilités à restaurer les archives"
      ],
      "reponse": 2,
      "explication": "Conserver des bandes pendant dix ans ne sert à rien si plus aucun lecteur ne peut les lire, ou si plus personne ne sait exécuter la procédure de restauration. La rétention des actifs couvre donc les données, le matériel de lecture et les compétences du personnel.",
      "difficulte": 2,
      "pourquoi": [
        "Piège comptable : la durée d'amortissement financier n'a aucun lien avec l'exploitabilité future des archives.",
        "Trop étroit : renégocier la maintenance est un moyen ponctuel, pas la raison de fond d'inclure matériel et personnel dans la rétention.",
        "Bonne réponse : des données conservées sont inutiles sans matériel capable de les lire ni personnel sachant les restaurer — la rétention couvre les trois.",
        "Absolu inventé : aucune règle n'exige les administrateurs d'origine ; il faut des compétences maintenues, pas des personnes précises."
      ]
    },
    {
      "q": "Une organisation veut empêcher que des documents sensibles soient copiés sur des clés USB depuis les postes de travail. Quelle solution répond le MIEUX à ce besoin ?",
      "choix": [
        "Un DLP endpoint-based",
        "Un DLP network-based en périmètre réseau",
        "Un DRM sur les documents",
        "Un CASB en proxy cloud"
      ],
      "reponse": 0,
      "explication": "Le DLP endpoint-based s'exécute sur les postes : il scanne les fichiers stockés et peut bloquer l'impression ou la copie vers un support amovible. Le DLP réseau ne voit que le trafic sortant du réseau, le CASB gouverne l'accès au cloud, et le DRM protège les contenus soumis au droit d'auteur.",
      "difficulte": 2,
      "pourquoi": [
        "Bonne réponse : seul le DLP endpoint, exécuté sur le poste, peut intercepter la copie locale vers un support amovible.",
        "Techniquement vrai ailleurs : le DLP réseau inspecte le trafic en bordure, il ne voit jamais le port USB d'un poste.",
        "Hors périmètre : le DRM protège des contenus soumis au droit d'auteur, il ne bloque pas la copie USB de documents internes.",
        "Hors périmètre : le CASB gouverne l'accès aux services cloud, pas les périphériques locaux."
      ]
    },
    {
      "q": "Une règle bloque tout trafic sortant contenant des numéros au format « numéro de sécurité sociale ». De quel type de contrôle s'agit-il ?",
      "choix": [
        "DRM appliqué à la donnée au repos et en transit",
        "Pare-feu applicatif web (WAF) en frontal",
        "CASB en mode reverse proxy inline",
        "DLP network-based sur la donnée en transit"
      ],
      "reponse": 3,
      "explication": "Scanner les données sur le fil et bloquer une transmission selon un motif (pattern) est la fonction typique d'un DLP réseau, placé en bordure du réseau pour inspecter le trafic sortant. Le DRM protège le copyright, le CASB gouverne l'accès aux ressources cloud, et un WAF protège les applications web entrantes.",
      "difficulte": 2,
      "pourquoi": [
        "Hors périmètre : le DRM protège des œuvres, il n'inspecte pas le trafic sortant.",
        "Contresens de direction : un WAF protège les applications web contre le trafic entrant, il ne filtre pas l'exfiltration sortante.",
        "Plausible mais inexact : le CASB gouverne l'accès au cloud, il ne scanne pas des motifs de données dans tout le trafic sortant.",
        "Bonne réponse : bloquer une transmission selon un motif (pattern) sur le fil est la fonction typique du DLP réseau sur la donnée en transit."
      ]
    },
    {
      "q": "Quels sont les quatre piliers d'un CASB ?",
      "choix": [
        "Visibilité, sécurité des données, détection des menaces, conformité",
        "Prévention, détection, correction, dissuasion",
        "Confidentialité, intégrité, disponibilité, non-répudiation",
        "Identification, authentification, autorisation, audit"
      ],
      "reponse": 0,
      "explication": "Les quatre piliers du Cloud Access Security Broker sont la visibilité, la sécurité des données, la détection des menaces et la conformité. La deuxième proposition est une typologie de contrôles de sécurité, la troisième la triade CIA étendue, la quatrième le processus IAAA — tous vrais ailleurs, mais pas les piliers du CASB.",
      "difficulte": 2,
      "pourquoi": [
        "Bonne réponse : visibilité, sécurité des données, détection des menaces et conformité sont les quatre piliers du CASB.",
        "Piège du déjà-vu : c'est une typologie de contrôles de sécurité, pas les piliers du CASB.",
        "Piège du déjà-vu : c'est la triade CIA étendue — vraie ailleurs, mais pas les piliers du CASB.",
        "Piège du déjà-vu : IAAA décrit le processus de contrôle d'accès, pas le CASB."
      ]
    },
    {
      "q": "Votre organisation doit partager un jeu de données clients avec un partenaire de recherche, sans qu'AUCUNE identité ne puisse jamais être reconstituée. Quelle technique choisir ?",
      "choix": [
        "La pseudonymisation avec table de correspondance",
        "L'anonymisation par masquage aléatoire",
        "La tokenisation adossée à un vault",
        "Le chiffrement à clé symétrique"
      ],
      "reponse": 1,
      "explication": "Seule l'anonymisation — notamment par randomized masking bien réalisé — est permanente et irréversible. La pseudonymisation, la tokenisation et le chiffrement sont des quasi-anonymisations réversibles : quiconque détient la table de correspondance, le vault ou la clé peut reconstituer les identités.",
      "difficulte": 2,
      "pourquoi": [
        "Techniquement vrai mais réversible : la table de correspondance permet toujours la ré-identification.",
        "Bonne réponse : seule l'anonymisation bien réalisée est permanente et irréversible — aucune identité ne pourra jamais être reconstituée.",
        "Techniquement vrai mais réversible : le vault de tokenisation conserve la correspondance avec les identités.",
        "Techniquement vrai mais réversible : quiconque détient la clé peut déchiffrer et reconstituer les identités."
      ]
    },
    {
      "q": "Dans un système de paiement tokenisé, que reçoit le terminal de point de vente (POS) lors d'un achat ?",
      "choix": [
        "Le numéro de carte chiffré avec la clé du commerçant",
        "Le numéro de carte pseudonymisé mais réversible localement",
        "Un jeton sans valeur intrinsèque, associé à la carte dans un vault",
        "Un hash irréversible du numéro de carte"
      ],
      "reponse": 2,
      "explication": "Avec la tokenisation, le POS ne manipule qu'un jeton — une chaîne aléatoire sans signification hors du vault de tokenisation qui détient la correspondance avec la vraie carte. Le numéro réel ne transite jamais par le point de vente, ce qui empêche son vol en cas de compromission du POS.",
      "difficulte": 3,
      "pourquoi": [
        "Faux : si le POS détenait le numéro chiffré et la clé, sa compromission exposerait les cartes.",
        "Piège de la réversibilité locale : une pseudonymisation réversible sur le terminal exposerait la table en cas de compromission.",
        "Bonne réponse : le POS ne manipule qu'un jeton sans valeur intrinsèque ; la correspondance n'existe que dans le vault sécurisé.",
        "Plausible mais impraticable : un hash irréversible empêcherait de retrouver la carte pour traiter le paiement."
      ]
    },
    {
      "q": "Qu'est-ce qu'une baseline de sécurité ?",
      "choix": [
        "La configuration maximale de sécurité applicable",
        "Le rapport d'audit initial d'un système",
        "Le niveau minimal documenté de configuration de sécurité autorisé",
        "La liste exhaustive de tous les contrôles possibles"
      ],
      "reponse": 2,
      "explication": "Une baseline est le niveau minimal documenté de configuration de sécurité autorisé par un standard ou l'organisation. C'est un point de départ que l'on affine ensuite par tailoring et scoping — ni un maximum, ni une liste exhaustive, ni un livrable d'audit.",
      "difficulte": 1,
      "pourquoi": [
        "Contresens : la baseline est un plancher, pas un plafond de sécurité.",
        "Hors sujet : un rapport d'audit constate un état, il ne définit pas un niveau minimal autorisé.",
        "Bonne réponse : la baseline est le niveau minimal documenté de configuration de sécurité, point de départ du tailoring.",
        "Absolu : une baseline sélectionne des contrôles pertinents, elle n'est jamais exhaustive."
      ]
    },
    {
      "q": "Quelle activité fait partie du tailoring mais va AU-DELÀ du simple scoping ?",
      "choix": [
        "Choisir la baseline de contrôles de sécurité de départ",
        "Documenter l'inventaire complet des actifs concernés",
        "Retirer de la baseline tous les contrôles sans objet pour les systèmes du périmètre concerné",
        "Sélectionner des contrôles compensatoires et fixer les paramètres définis par l'organisation"
      ],
      "reponse": 3,
      "explication": "Le scoping se limite à retirer de la baseline les contrôles inapplicables. Le tailoring englobe le scoping mais ajoute l'identification des contrôles communs, la spécification des paramètres définis par l'organisation, l'assignation de valeurs aux contrôles et la sélection de contrôles compensatoires — c'est l'ajustement complet à la mission.",
      "difficulte": 3,
      "pourquoi": [
        "Hors phase : le choix de la baseline précède le tailoring, il n'en fait pas partie.",
        "Hors sujet : l'inventaire relève de la gestion des actifs, pas du tailoring.",
        "Piège de la confusion : retirer les contrôles sans objet, c'est précisément le scoping, pas ce qui va au-delà.",
        "Bonne réponse : le tailoring ajoute au scoping la sélection de contrôles compensatoires et la fixation des paramètres définis par l'organisation."
      ]
    },
    {
      "q": "Quel critère indique qu'un processus de sélection de standards ou de vendeurs est bien conçu ?",
      "choix": [
        "Il repose entièrement sur l'expérience personnelle et l'intuition du décideur en charge",
        "Une équipe totalement différente, refaisant l'exercice, aboutirait au même choix",
        "Il est validé a posteriori par le fournisseur retenu",
        "Il aboutit systématiquement au fournisseur le moins cher"
      ],
      "reponse": 1,
      "explication": "L'objectif est un processus objectif et mesurable : sa reproductibilité — une autre équipe arriverait à la même sélection — en est le meilleur indicateur. Le prix seul, la validation par le vendeur ou l'intuition d'un décideur sont des critères subjectifs ou biaisés.",
      "difficulte": 2,
      "pourquoi": [
        "Piège de la subjectivité : l'expérience personnelle est un biais, pas un critère de processus bien conçu.",
        "Bonne réponse : la reproductibilité — une autre équipe aboutirait au même choix — prouve que le processus est objectif et mesurable.",
        "Conflit d'intérêts : le fournisseur retenu ne peut pas valider le processus qui l'a choisi.",
        "Piège du critère unique : le prix le plus bas n'est un indicateur ni d'objectivité ni de pertinence."
      ]
    },
    {
      "q": "Une entreprise ne peut pas chiffrer certains volumes de données partagés, mais veut que la protection accompagne les documents où qu'ils aillent. Quelle solution est la PLUS adaptée ?",
      "choix": [
        "Le DRM : la protection voyage avec la donnée",
        "Un VPN pour tous les accès au partage",
        "Le DLP réseau, qui bloque toute sortie de fichier",
        "Une ACL renforcée sur le partage de fichiers"
      ],
      "reponse": 0,
      "explication": "La force du DRM est que ses restrictions accompagnent le fichier indépendamment de son emplacement ou de son état — particulièrement utile quand le chiffrement de volume est impossible. Le DLP, les ACL et le VPN protègent des périmètres ou des canaux, pas le document lui-même une fois sorti.",
      "difficulte": 3,
      "pourquoi": [
        "Bonne réponse : les restrictions du DRM voyagent avec le document quel que soit son emplacement ou son état — exactement le besoin exprimé.",
        "Piège du canal : le VPN chiffre le transport, il ne restreint pas l'usage du document à l'arrivée.",
        "Techniquement vrai mais périmétrique : le DLP bloque des sorties, il ne protège plus le fichier une fois celui-ci sorti.",
        "Trop étroit : une ACL protège l'emplacement d'origine, pas le document en circulation."
      ]
    },
    {
      "q": "Quelle contre-mesure ne relève PAS de la protection TEMPEST contre le Van Eck phreaking ?",
      "choix": [
        "Le degaussing",
        "La cage de Faraday",
        "Les zones de contrôle",
        "Le bruit blanc"
      ],
      "reponse": 0,
      "explication": "TEMPEST vise à limiter la capture des émanations électromagnétiques : cages de Faraday, bruit blanc, zones de contrôle et blindage en sont les contre-mesures. Le degaussing est une méthode d'assainissement de supports magnétiques, sans rapport avec les émanations.",
      "difficulte": 2,
      "pourquoi": [
        "Bonne réponse : le degaussing est une méthode d'assainissement des supports magnétiques, sans rapport avec les émanations électromagnétiques.",
        "Contre-mesure TEMPEST : la cage de Faraday bloque les émanations électromagnétiques.",
        "Contre-mesure TEMPEST : les zones de contrôle éloignent physiquement les capteurs potentiels.",
        "Contre-mesure TEMPEST : le bruit blanc noie les émanations dans un signal parasite."
      ]
    },
    {
      "q": "Du point de vue d'un manager, pourquoi surveiller la conformité des licences logicielles fait-il partie de la gestion des actifs ?",
      "choix": [
        "Pour accélérer les déploiements applicatifs internes",
        "Pour réduire la consommation électrique des serveurs",
        "Pour éviter les problèmes juridiques et détecter les logiciels non autorisés",
        "Pour négocier de meilleurs prix lors des renouvellements de licences annuelles"
      ],
      "reponse": 2,
      "explication": "Le suivi des actifs logiciels vise deux risques : l'usage au-delà des licences acquises, source de contentieux juridique, et la présence de logiciels non autorisés, source de vulnérabilités. Les gains d'achat ou de performance sont accessoires par rapport à ces enjeux de conformité et de sécurité.",
      "difficulte": 2,
      "pourquoi": [
        "Hors sujet : la vitesse de déploiement n'est pas l'objet du suivi des licences.",
        "Hors sujet : la consommation des serveurs relève de l'exploitation, pas de la gestion des actifs logiciels.",
        "Bonne réponse : le suivi des licences prévient le contentieux juridique et révèle les logiciels non autorisés, source de vulnérabilités.",
        "Techniquement vrai mais accessoire : la négociation des prix est un bénéfice d'achat, pas l'enjeu de sécurité."
      ]
    },
    {
      "q": "Un pays exige par la loi que les données personnelles de ses citoyens soient stockées et traitées exclusivement sur son territoire. De quel concept s'agit-il ?",
      "choix": [
        "Data residency",
        "Data localization",
        "Data sovereignty",
        "Data remanence"
      ],
      "reponse": 1,
      "explication": "La data localization est l'exigence LÉGALE de conserver les données dans les frontières du pays (ex. Russie, Chine). La data sovereignty est le principe général selon lequel la donnée est soumise aux lois du pays où elle réside ; la data residency est le CHOIX par l'organisation du lieu de stockage ; la data remanence concerne les résidus de données après effacement.",
      "difficulte": 2,
      "pourquoi": [
        "Piège du terme voisin : la residency est un CHOIX de l'organisation, pas une obligation imposée par la loi.",
        "Bonne réponse : la data localization est l'obligation LÉGALE de conserver les données sur le territoire national.",
        "Piège du terme voisin : la sovereignty est le principe général de soumission aux lois locales, pas l'exigence légale de stockage national.",
        "Hors sujet : la remanence concerne les résidus de données après effacement."
      ]
    },
    {
      "q": "Une entreprise européenne stocke des données personnelles chez un fournisseur cloud américain, dans une région située dans l'Union européenne. Quelle est la MEILLEURE mesure pour réduire le risque de conflit entre le CLOUD Act et le GDPR ?",
      "choix": [
        "Interdire purement et simplement tout usage du cloud pour les données personnelles",
        "Transférer toute la responsabilité de conformité GDPR au fournisseur cloud",
        "Se fier uniquement à la localisation européenne de la région cloud choisie chez le fournisseur",
        "Chiffrer les données avec des clés gérées par le client et des clauses contractuelles"
      ],
      "reponse": 3,
      "explication": "Le CLOUD Act peut contraindre un fournisseur américain à remettre des données même stockées en Europe : la localisation seule ne suffit donc pas. Le chiffrement avec des clés détenues par le client rend les données remises inexploitables, et les clauses contractuelles encadrent les transferts. Interdire le cloud est disproportionné, et la responsabilité de conformité du controller ne se transfère jamais.",
      "difficulte": 3,
      "pourquoi": [
        "Absolu et disproportionné : interdire le cloud sacrifie le besoin métier au lieu de traiter le risque.",
        "Impossible juridiquement : la responsabilité de conformité du controller ne se transfère jamais au fournisseur.",
        "Piège de la fausse assurance : le CLOUD Act s'applique au fournisseur américain quelle que soit la localisation des données.",
        "Bonne réponse : des clés détenues par le client rendent inexploitables les données remises, et les clauses contractuelles encadrent les transferts — défense proportionnée."
      ]
    },
    {
      "q": "Dans la classification gouvernementale américaine, quel niveau correspond à une divulgation qui causerait un dommage « exceptionnellement grave » à la sécurité nationale ?",
      "choix": [
        "Secret",
        "Confidential",
        "Sensitive But Unclassified",
        "Top Secret"
      ],
      "reponse": 3,
      "explication": "Top Secret correspond au dommage exceptionnellement grave (exceptionally grave damage), Secret au dommage sérieux (serious damage) et Confidential au dommage (damage). Sensitive But Unclassified désigne des données non classifiées mais méritant des précautions. L'examen teste souvent la correspondance exacte entre le niveau et la formulation du dommage.",
      "difficulte": 1,
      "pourquoi": [
        "Piège de la correspondance : Secret correspond au dommage « sérieux » (serious damage), pas exceptionnellement grave.",
        "Piège de la correspondance : Confidential correspond au simple « dommage » (damage).",
        "Hors échelle : SBU désigne des données non classifiées méritant des précautions, sans niveau de dommage associé.",
        "Bonne réponse : Top Secret est défini par le dommage « exceptionnellement grave » (exceptionally grave damage) à la sécurité nationale."
      ]
    },
    {
      "q": "Quelle affirmation sur les niveaux de classification du secteur privé est CORRECTE ?",
      "choix": [
        "Ils ne s'appliquent qu'aux données électroniques, pas au papier",
        "Ils doivent obligatoirement reprendre les niveaux gouvernementaux",
        "Chaque organisation définit librement ses niveaux, documentés dans sa politique de sécurité",
        "Ils sont normalisés par NIST et identiques dans toutes les entreprises"
      ],
      "reponse": 2,
      "explication": "Contrairement au secteur gouvernemental, les étiquettes du privé (Confidential/Proprietary, Private, Sensitive, Public…) ne sont pas normalisées : chaque organisation choisit ses niveaux et leur granularité, du moment que la politique de sécurité les définit clairement. La classification s'applique à tous les supports, papier comme électronique.",
      "difficulte": 1,
      "pourquoi": [
        "Trop étroit : la classification s'applique à tous les supports, papier compris.",
        "Absolu : rien n'oblige le privé à reprendre les niveaux gouvernementaux.",
        "Bonne réponse : chaque organisation définit librement ses niveaux, à condition de les documenter dans sa politique de sécurité.",
        "Faux : aucune norme n'impose des niveaux identiques dans le secteur privé."
      ]
    },
    {
      "q": "Un hôpital externalise la numérisation de dossiers médicaux à un prestataire. Quelle affirmation sur les PHI est CORRECTE ?",
      "choix": [
        "Le prestataire manipule des PHI et doit donc aussi respecter les exigences applicables",
        "Seul l'hôpital est légalement soumis à HIPAA, pas le prestataire",
        "Les dossiers numérisés ne sont plus des PHI une fois qu'ils changent de support physique",
        "Les PHI deviennent de simples PII dès leur numérisation complète"
      ],
      "reponse": 0,
      "explication": "Les exigences sur les PHI s'appliquent à tout organisme qui manipule des informations de santé rattachables à une personne, pas seulement aux hôpitaux : le prestataire (business associate au sens HIPAA) y est également soumis. Le changement de support ne change rien à la nature de la donnée, et les PHI sont une catégorie spécifique qui ne « devient » pas de simples PII.",
      "difficulte": 2,
      "pourquoi": [
        "Bonne réponse : tout organisme qui manipule des PHI — y compris le prestataire — est soumis aux exigences applicables.",
        "Trop étroit : HIPAA s'applique aussi aux business associates qui manipulent des PHI pour le compte de l'entité couverte.",
        "Piège du support : la nature de la donnée ne change pas avec son support.",
        "Confusion de catégories : les PHI sont une catégorie spécifique de données de santé, elles ne se transforment pas en simples PII."
      ]
    },
    {
      "q": "Quelle est la PREMIÈRE conséquence pratique de l'attribution d'une classification à un actif ?",
      "choix": [
        "Il est automatiquement chiffré et sauvegardé par le système d'exploitation",
        "Les exigences de manipulation (handling) et de stockage sont déterminées",
        "Son prix d'assurance et de couverture augmente sensiblement",
        "Il doit être remplacé beaucoup plus fréquemment"
      ],
      "reponse": 1,
      "explication": "La classification détermine directement les exigences de handling : comment déplacer, stocker, transmettre et détruire l'actif. C'est tout l'intérêt de classifier — proportionner les contrôles à la sensibilité. Le chiffrement peut être l'une de ces exigences, mais rien n'est « automatique » : les contrôles découlent de la politique associée au niveau.",
      "difficulte": 1,
      "pourquoi": [
        "Piège de l'automatisme : le chiffrement peut découler de la politique du niveau, mais rien n'est automatique.",
        "Bonne réponse : la classification détermine les exigences de manipulation, stockage, transmission et destruction — sa finalité pratique première.",
        "Hors sujet : le prix d'assurance n'est pas une conséquence directe de la classification.",
        "Hors sujet : la fréquence de remplacement relève du cycle de vie matériel, pas de la classification."
      ]
    },
    {
      "q": "Un employé détient une clearance Secret. Peut-il accéder à TOUTES les données classifiées Secret de l'organisation ?",
      "choix": [
        "Oui, mais uniquement en lecture seule et sans copie",
        "Non, il doit d'abord obtenir une clearance de niveau Top Secret plus élevé",
        "Non, il lui faut aussi le besoin d'en connaître et l'approbation formelle",
        "Oui, la clearance seule suffit toujours largement"
      ],
      "reponse": 2,
      "explication": "La clearance est une condition nécessaire mais pas suffisante : l'accès exige aussi le need-to-know — la donnée doit être nécessaire à la mission — et une approbation formelle impliquant le data owner. C'est un principe fondamental : détenir l'habilitation au niveau n'ouvre jamais l'accès à tout le niveau.",
      "difficulte": 2,
      "pourquoi": [
        "Invention plausible : aucune règle générale ne limite la clearance à la lecture seule.",
        "Contresens : une clearance supérieure ne remplace pas le need-to-know sur les données Secret.",
        "Bonne réponse : l'accès exige la clearance ET le besoin d'en connaître ET l'approbation formelle — trois conditions cumulatives.",
        "Piège classique : la clearance est une condition nécessaire mais jamais suffisante."
      ]
    },
    {
      "q": "Qui, selon NIST SP 800-18, développe et maintient le System Security Plan d'un système d'information ?",
      "choix": [
        "Le system owner",
        "Le data owner",
        "Le DPO",
        "Le data custodian"
      ],
      "reponse": 0,
      "explication": "Le system owner est responsable du système qui traite la donnée : il développe et maintient le System Security Plan, s'assure du déploiement des contrôles, du patching et de la formation des utilisateurs (NIST SP 800-18). Le data owner possède la donnée, le custodian exécute les tâches déléguées, et le DPO supervise la conformité vie privée.",
      "difficulte": 2,
      "pourquoi": [
        "Bonne réponse : selon NIST SP 800-18, le system owner développe et maintient le System Security Plan.",
        "Piège du rôle voisin : le data owner possède la donnée, mais le SSP relève du responsable du système.",
        "Hors périmètre : le DPO supervise la conformité vie privée, pas les plans de sécurité système.",
        "Rôle d'exécution : le custodian applique des tâches déléguées, il ne rédige pas le SSP."
      ]
    },
    {
      "q": "Quel rôle est responsable de la QUALITÉ et de la gouvernance MÉTIER des données, y compris la définition des métadonnées ?",
      "choix": [
        "Data custodian",
        "System owner",
        "Security administrator",
        "Data steward"
      ],
      "reponse": 3,
      "explication": "Le data steward porte la responsabilité métier de la donnée : qualité, gouvernance, conformité et métadonnées. Le custodian assure les tâches techniques quotidiennes (sauvegardes, restauration), l'administrateur sécurité protège l'infrastructure, et le system owner sécurise le système. Astuce : custodian = technique, steward = sens métier.",
      "difficulte": 1,
      "pourquoi": [
        "Piège technique/métier : le custodian assure les tâches techniques (sauvegardes), pas la qualité métier.",
        "Hors périmètre : le system owner sécurise le système, pas le contenu métier des données.",
        "Réponse de technicien : l'administrateur sécurité protège l'infrastructure, il ne gouverne pas la donnée métier.",
        "Bonne réponse : le data steward porte la qualité, la gouvernance métier et la définition des métadonnées."
      ]
    },
    {
      "q": "Quelle affirmation sur la notion de « subject » est CORRECTE ?",
      "choix": [
        "Un subject désigne toujours et uniquement un être humain",
        "Un subject est toute entité qui accède à un objet : utilisateur, processus ou service",
        "Un subject est la ressource passive à laquelle un utilisateur accède directement en lecture",
        "Les termes subject et user sont toujours strictement synonymes"
      ],
      "reponse": 1,
      "explication": "Un subject est toute entité active qui accède à un objet (la ressource passive) : les utilisateurs en sont, mais aussi les programmes, processus et services. Tous les users sont des subjects, mais tous les subjects ne sont pas des users — nuance que l'examen aime tester.",
      "difficulte": 2,
      "pourquoi": [
        "Absolu : les processus et services sont aussi des subjects, pas seulement les humains.",
        "Bonne réponse : un subject est toute entité active qui accède à un objet — utilisateur, processus ou service.",
        "Inversion : la ressource accédée est l'objet, pas le subject.",
        "Trop étroit : tous les users sont des subjects, mais l'inverse est faux."
      ]
    },
    {
      "q": "Le DPO d'une entreprise rapporte directement au responsable marketing, qui décide aussi de ses objectifs annuels. Quel est le PRINCIPAL problème ?",
      "choix": [
        "Le rôle de DPO doit être indépendant : ce rattachement crée un conflit d'intérêts",
        "Le DPO devrait obligatoirement être externalisé auprès d'un cabinet externe indépendant",
        "Le DPO devrait plutôt rapporter directement au DSI de l'entreprise",
        "Aucun : le GDPR n'impose rien sur le rattachement du DPO"
      ],
      "reponse": 0,
      "explication": "Le DPO est un rôle de leadership indépendant qui supervise la conformité vie privée. Le rattacher à une fonction qui exploite intensivement les données personnelles (marketing) et qui fixe ses objectifs compromet son indépendance — le GDPR exige justement que le DPO exerce ses missions sans conflit d'intérêts et rapporte au plus haut niveau de direction.",
      "difficulte": 3,
      "pourquoi": [
        "Bonne réponse : le DPO doit être indépendant et sans conflit d'intérêts — être évalué par une fonction grande consommatrice de données personnelles compromet sa mission.",
        "Plausible mais hors sujet : l'externalisation est une option d'organisation, pas la réponse au conflit d'intérêts décrit.",
        "Piège du rattachement alternatif : le DSI est aussi une partie prenante opérationnelle — le vrai problème est l'indépendance, pas le choix d'un autre chef.",
        "Faux : le GDPR exige que le DPO rapporte au plus haut niveau de direction et exerce sans conflit d'intérêts."
      ]
    },
    {
      "q": "Quelle est la PREMIÈRE phase du cycle de vie de la donnée ?",
      "choix": [
        "L'archivage à long terme",
        "La création ou la collecte",
        "La classification des données",
        "Le stockage chiffré des données"
      ],
      "reponse": 1,
      "explication": "Le cycle de vie commence par la création ou la collecte de la donnée, suivie de la classification, du stockage, de l'utilisation, de l'archivage et enfin de la destruction. La classification intervient juste après la création — on ne peut classifier une donnée qui n'existe pas encore.",
      "difficulte": 1,
      "pourquoi": [
        "Hors phase : l'archivage intervient en fin de cycle, juste avant la destruction.",
        "Bonne réponse : le cycle de vie commence par la création ou la collecte de la donnée.",
        "Hors phase : on ne peut classifier une donnée qui n'existe pas encore — la classification vient juste après.",
        "Hors phase : le stockage suit la classification."
      ]
    },
    {
      "q": "Où une organisation devrait-elle conserver ses copies de sauvegarde pour se protéger d'un sinistre majeur ?",
      "choix": [
        "Uniquement sur site, pour garantir un accès rapide aux restaurations",
        "Dans le même bâtiment mais répartis sur des étages différents",
        "Sur site ET hors site, avec une distance suffisante entre les deux emplacements",
        "Uniquement hors site, le stockage sur site étant jugé coûteux et totalement inutile"
      ],
      "reponse": 2,
      "explication": "La bonne pratique combine une copie sur site (restauration rapide) et une copie hors site, séparées par une distance suffisante pour qu'un même sinistre — incendie, inondation, tempête — ne détruise pas l'original et la sauvegarde. Un autre étage du même bâtiment ne protège pas d'un incendie généralisé.",
      "difficulte": 1,
      "pourquoi": [
        "Trop étroit : une copie uniquement sur site disparaît avec le site en cas de sinistre majeur.",
        "Fausse séparation : un même incendie ou une même inondation peut détruire tous les étages d'un bâtiment.",
        "Bonne réponse : combiner sur site (restauration rapide) et hors site distant (survie au sinistre) couvre les deux besoins.",
        "Absolu : sans copie locale, chaque restauration devient lente et coûteuse."
      ]
    },
    {
      "q": "Une multinationale choisit de stocker les données de ses clients allemands dans un datacenter à Francfort pour des raisons de latence et de conformité, sans y être légalement obligée. De quel concept s'agit-il ?",
      "choix": [
        "Data localization ET sovereignty",
        "Data sovereignty",
        "Data localization",
        "Data residency"
      ],
      "reponse": 3,
      "explication": "La data residency est le CHOIX par l'organisation du lieu de stockage de ses données, pour des raisons de conformité, de latence ou de contrat. La localization serait une OBLIGATION légale de garder les données dans le pays ; la sovereignty est le principe selon lequel la donnée est soumise aux lois du pays où elle réside.",
      "difficulte": 2,
      "pourquoi": [
        "Piège du cumul : aucune obligation légale n'existe dans le scénario, la localization ne s'applique donc pas.",
        "Piège du principe : la sovereignty s'appliquera aux données une fois stockées, mais ne décrit pas le choix effectué.",
        "Piège de l'obligation : la localization est une exigence légale — ici l'entreprise choisit librement.",
        "Bonne réponse : choisir volontairement le lieu de stockage pour des raisons de latence ou de conformité est la data residency."
      ]
    },
    {
      "q": "Pourquoi le choix des régions cloud d'un fournisseur est-il une décision de SÉCURITÉ et pas seulement de performance ?",
      "choix": [
        "Le prix de stockage et de transfert varie selon les régions",
        "Certaines régions du fournisseur ont des datacenters moins fiables, sûrs et disponibles",
        "Les régions géographiquement éloignées augmentent la latence réseau",
        "La région détermine les juridictions où réside la donnée, donc les lois applicables (data sovereignty)"
      ],
      "reponse": 3,
      "explication": "En vertu de la data sovereignty, une donnée est soumise aux lois du pays où elle réside physiquement : choisir une région cloud, c'est choisir les juridictions qui pourront s'appliquer à vos données (réquisitions, obligations de divulgation…). La latence et le coût sont des considérations opérationnelles, pas l'enjeu de sécurité principal.",
      "difficulte": 2,
      "pourquoi": [
        "Considération de coût, pas de sécurité.",
        "Plausible mais opérationnel : la fiabilité des datacenters relève de la disponibilité contractuelle, pas de l'enjeu juridique principal.",
        "Considération de performance, pas de sécurité.",
        "Bonne réponse : la région choisie détermine les juridictions applicables aux données (data sovereignty) — réquisitions et obligations locales comprises."
      ]
    },
    {
      "q": "Quel état de la donnée est protégé par TLS et IPsec ?",
      "choix": [
        "Data archivée",
        "Data in use",
        "Data in transit",
        "Data at rest"
      ],
      "reponse": 2,
      "explication": "TLS et IPsec chiffrent la donnée en transit, c'est-à-dire lorsqu'elle circule sur un réseau. La donnée at rest se protège par le chiffrement des supports et volumes, et la donnée in use par le patching, les builds standardisés et la purge des buffers mémoire.",
      "difficulte": 1,
      "pourquoi": [
        "Cas particulier du repos : l'archive relève du chiffrement at rest.",
        "Piège de l'état : la donnée in use se protège par le patching et la purge des buffers mémoire.",
        "Bonne réponse : TLS et IPsec chiffrent la donnée qui circule sur le réseau — l'état in transit.",
        "Piège de l'état : la donnée au repos se protège par le chiffrement des supports, pas par TLS."
      ]
    },
    {
      "q": "Pourquoi faut-il chiffrer les flux réseau MÊME entre applications internes ?",
      "choix": [
        "Parce qu'un attaquant ayant pénétré le réseau interne pourrait intercepter les flux en clair",
        "Parce que les référentiels de conformité l'exigent pour tous les flux, internes comme externes",
        "Parce que la segmentation interne coûte plus cher que le chiffrement généralisé",
        "Parce que les autres applications internes n'ont pas le besoin d'en connaître sur ces flux"
      ],
      "reponse": 0,
      "explication": "Considérer le réseau interne comme sûr est une erreur : après une intrusion, un attaquant peut écouter le trafic interne (mouvement latéral, sniffing). Chiffrer partout — y compris en interne — limite ce risque ; c'est aussi l'esprit du Zero Trust. Le coût comparé, la conformité et le cloisonnement sont des considérations annexes : la raison de fond est le risque d'interception interne.",
      "difficulte": 2,
      "pourquoi": [
        "Bonne réponse : après une intrusion, un attaquant peut intercepter le trafic interne en clair ; chiffrer partout limite le mouvement latéral — l'esprit Zero Trust.",
        "Piège de la conformité : certains référentiels l'exigent, mais la raison de fond est le risque d'interception, pas la case à cocher.",
        "Faux arbitrage : le coût comparé de la segmentation ne justifie pas le chiffrement — les deux contrôles se complètent.",
        "Plausible mais secondaire : le cloisonnement des flux entre applications est un bénéfice annexe, pas la motivation principale."
      ]
    },
    {
      "q": "Quelle mémoire conserve son contenu après une mise hors tension et peut donc retenir des données sensibles ?",
      "choix": [
        "La RAM dynamique",
        "L'EEPROM",
        "Le cache du processeur",
        "La RAM statique"
      ],
      "reponse": 1,
      "explication": "L'EEPROM (comme la ROM, la PROM et l'EPROM) est non volatile : elle conserve les données hors tension et peut donc retenir des informations sensibles à assainir avant mise au rebut. La RAM (dynamique ou statique) et le cache CPU sont volatils et perdent leur contenu à la coupure d'alimentation.",
      "difficulte": 2,
      "pourquoi": [
        "Volatile : la RAM dynamique perd son contenu hors tension.",
        "Bonne réponse : l'EEPROM est non volatile — elle conserve les données hors tension et doit être assainie avant mise au rebut.",
        "Volatile : le cache processeur s'efface à la coupure d'alimentation.",
        "Volatile : la RAM statique aussi, malgré sa stabilité en fonctionnement."
      ]
    },
    {
      "q": "Quelle attaque consiste à intercepter les émanations électromagnétiques d'un écran pour reconstituer son affichage ?",
      "choix": [
        "Le sniffing",
        "Le Van Eck phreaking",
        "Le file carving",
        "Le side-channel timing"
      ],
      "reponse": 1,
      "explication": "Le Van Eck phreaking capte les émanations électromagnétiques des équipements (écrans, câbles) pour reconstituer l'information affichée ou traitée. Les contre-mesures relèvent de TEMPEST : cages de Faraday, bruit blanc, zones de contrôle, blindage. Le sniffing capture le trafic réseau, pas les émanations.",
      "difficulte": 2,
      "pourquoi": [
        "Piège du canal : le sniffing capture le trafic réseau, pas les émanations électromagnétiques.",
        "Bonne réponse : le Van Eck phreaking reconstitue l'affichage à partir des émanations électromagnétiques — contré par TEMPEST.",
        "Hors sujet : le file carving est une technique forensique sur support de stockage.",
        "Piège du terme voisin : une attaque par canal auxiliaire temporel exploite les durées de calcul, pas les émanations d'un écran."
      ]
    },
    {
      "q": "Classez ces méthodes d'assainissement de l'assurance la PLUS FAIBLE à la PLUS FORTE.",
      "choix": [
        "Erasing → Purging → Clearing → Destruction",
        "Purging → Clearing → Destruction → Erasing",
        "Clearing → Erasing → Purging → Destruction",
        "Erasing → Clearing → Purging → Destruction"
      ],
      "reponse": 3,
      "explication": "L'ordre croissant d'assurance est : erasing (simple suppression, rémanence intacte), clearing (réécriture, résiste aux outils logiciels standards), purging (vise l'irrécupérabilité même en laboratoire), destruction physique (élimination du support, la plus sûre).",
      "difficulte": 1,
      "pourquoi": [
        "Ordre faux : le purging est plus fort que le clearing, pas l'inverse.",
        "Ordre faux : la destruction est l'assurance maximale — elle termine l'échelle, et l'erasing la commence.",
        "Ordre faux : le clearing offre plus d'assurance que l'erasing, il ne peut pas le précéder.",
        "Bonne réponse : erasing (simple suppression) < clearing (réécriture) < purging (irrécupérable même en laboratoire) < destruction physique."
      ]
    },
    {
      "q": "Après un simple reformatage, un disque destiné au don contient encore des données récupérables. Quel principe cette situation illustre-t-elle ?",
      "choix": [
        "Le slack space résiduel des clusters du disque",
        "La defensible destruction, correctement documentée et tracée",
        "La data remanence : le formatage ne détruit pas les données",
        "Le crypto-shredding préalable des données"
      ],
      "reponse": 2,
      "explication": "Le reformatage reconstruit les structures du système de fichiers mais laisse les données elles-mêmes sur le support : c'est la data remanence, exploitable par des outils de récupération ou par file carving. Avant don ou mise au rebut, il faut au minimum un clearing, et une méthode proportionnée à la classification.",
      "difficulte": 1,
      "pourquoi": [
        "Trop étroit : le slack space est un lieu de rémanence, pas le principe illustré par un formatage insuffisant.",
        "Piège du terme séduisant : la defensible destruction est la documentation d'une destruction correcte — ce qui a manqué, pas le phénomène observé.",
        "Bonne réponse : le formatage reconstruit les index sans toucher aux données — c'est la data remanence, exploitable par des outils de récupération.",
        "Contresens : le crypto-shredding aurait justement rendu les données irrécupérables."
      ]
    },
    {
      "q": "Quel document du NIST est LA référence pour choisir les méthodes d'assainissement des supports (media sanitization) ?",
      "choix": [
        "NIST SP 800-88",
        "NIST SP 800-53",
        "NIST SP 800-122",
        "NIST SP 800-18"
      ],
      "reponse": 0,
      "explication": "NIST SP 800-88 (Guidelines for Media Sanitization) est la référence pour définir les méthodes d'assainissement acceptables selon le support et la classification. SP 800-53 catalogue les contrôles de sécurité, SP 800-18 traite des System Security Plans, et SP 800-122 définit la protection des PII.",
      "difficulte": 3,
      "pourquoi": [
        "Bonne réponse : NIST SP 800-88, Guidelines for Media Sanitization, est LA référence pour l'assainissement des supports.",
        "Piège du catalogue : SP 800-53 recense les contrôles de sécurité, pas les méthodes d'assainissement.",
        "Hors sujet : SP 800-122 traite de la protection des PII.",
        "Hors sujet : SP 800-18 traite des System Security Plans."
      ]
    },
    {
      "q": "Votre organisation retire du service des bandes magnétiques de sauvegarde contenant des données Confidential, destinées à être réutilisées en interne pour des données de même niveau. Quelle méthode est la PLUS appropriée et la plus économique ?",
      "choix": [
        "Le crypto-shredding préalable de toutes les bandes magnétiques",
        "Le clearing ou le degaussing, suffisants pour une réutilisation au même niveau",
        "Aucune mesure : la réutilisation interne ne nécessite aucun assainissement particulier",
        "La destruction physique systématique par incinération"
      ],
      "reponse": 1,
      "explication": "Pour une réutilisation interne au même niveau de classification, détruire le support serait un gaspillage : un clearing (réécriture) ou un degaussing (support magnétique) suffit selon la politique. La destruction physique s'impose pour la mise au rebut de supports très sensibles ; ne rien faire exposerait les données au prochain utilisateur.",
      "difficulte": 3,
      "pourquoi": [
        "Plausible mais inadapté : le crypto-shredding suppose des données chiffrées dès l'origine et n'apporte rien de plus pour une réutilisation interne.",
        "Bonne réponse : pour une réutilisation au même niveau de classification, un clearing ou un degaussing est suffisant et économique.",
        "Négligence : sans assainissement, le prochain utilisateur accéderait aux données résiduelles.",
        "Disproportionné : détruire des supports destinés à être réutilisés en interne gaspille des actifs sans gain de sécurité."
      ]
    },
    {
      "q": "Quel est le risque PRINCIPAL de continuer à exploiter un équipement matériel après son End-of-Support ?",
      "choix": [
        "Il risque de ne plus être couvert par la cyber-assurance de l'organisation",
        "Le coût des contrats de maintenance étendue dépasse celui d'un équipement neuf",
        "Les pièces de rechange deviennent difficiles à obtenir, allongeant les réparations",
        "Les vulnérabilités découvertes ne seront plus jamais corrigées par le constructeur"
      ],
      "reponse": 3,
      "explication": "Après l'EOS, le constructeur ne publie plus ni correctifs ni assistance : toute vulnérabilité découverte reste exploitable indéfiniment. C'est un risque de sécurité majeur qui impose de planifier le remplacement avant l'échéance, ou à défaut des mesures compensatoires (isolation) strictement temporaires.",
      "difficulte": 1,
      "pourquoi": [
        "Plausible mais dérivé : une éventuelle exclusion d'assurance serait la conséquence du risque, pas le risque lui-même.",
        "Vrai mais financier : le surcoût de maintenance étendue est un argument budgétaire, pas le risque de sécurité principal.",
        "Vrai mais disponibilité : la rareté des pièces menace les délais de réparation, pas la sécurité en premier lieu.",
        "Bonne réponse : après l'EOS, aucune vulnérabilité découverte ne sera plus corrigée — une exposition définitive et croissante."
      ]
    },
    {
      "q": "Une organisation prévoit de conserver des archives sur bandes pendant quinze ans. Quelle considération est la PLUS souvent oubliée ?",
      "choix": [
        "Maintenir des lecteurs compatibles et du personnel sachant restaurer",
        "Le coût d'achat récurrent des bandes magnétiques",
        "Le chiffrement systématique de toutes les bandes",
        "La capacité de stockage totale à provisionner pour toute la durée de rétention"
      ],
      "reponse": 0,
      "explication": "La rétention couvre les données, mais aussi le MATÉRIEL capable de les lire et le PERSONNEL compétent : dans quinze ans, les lecteurs actuels seront obsolètes et les experts partis. Sans plan de migration des supports et de maintien des compétences, les archives deviennent illisibles — donc inutiles.",
      "difficulte": 2,
      "pourquoi": [
        "Bonne réponse : maintenir pendant quinze ans des lecteurs compatibles et du personnel sachant restaurer est la dimension la plus souvent négligée.",
        "Considération évidente : le coût des supports est budgété dès le départ, il est rarement oublié.",
        "Considération standard : le chiffrement des bandes fait partie des pratiques courantes dès la mise en place.",
        "Considération planifiée : la volumétrie se calcule au dimensionnement initial, elle est rarement oubliée."
      ]
    },
    {
      "q": "Quel type de DLP est le MIEUX placé pour empêcher l'impression d'un document sensible ?",
      "choix": [
        "Cloud-based",
        "Un DLP ne peut pas bloquer l'impression",
        "Endpoint-based",
        "Network-based"
      ],
      "reponse": 2,
      "explication": "L'impression se déclenche sur le poste de travail : seul le DLP endpoint-based, qui s'exécute localement, peut l'intercepter, comme il bloque la copie vers USB. Le DLP réseau ne voit que le trafic en bordure de réseau et le DLP cloud protège les environnements cloud natifs.",
      "difficulte": 2,
      "pourquoi": [
        "Hors périmètre : le DLP cloud protège les environnements cloud natifs.",
        "Faux : le blocage de l'impression est une capacité classique des DLP endpoint.",
        "Bonne réponse : l'impression se déclenche localement — seul le DLP endpoint peut l'intercepter.",
        "Mauvais point d'observation : le DLP réseau ne voit que le trafic en bordure, pas le spooler d'impression du poste."
      ]
    },
    {
      "q": "Un éditeur veut empêcher la copie et la redistribution non autorisées de ses livres numériques après leur vente. Quelle technologie répond à ce besoin ?",
      "choix": [
        "Le DRM",
        "La tokenisation",
        "Le CASB",
        "Le DLP"
      ],
      "reponse": 0,
      "explication": "Le Digital Rights Management protège les contenus soumis au droit d'auteur : il empêche l'usage, la modification et la distribution non autorisés, et la protection voyage avec le fichier même après sa vente. Le DLP protège les données de l'ORGANISATION contre l'exfiltration — pas des œuvres vendues à des tiers.",
      "difficulte": 1,
      "pourquoi": [
        "Bonne réponse : le DRM contrôle l'usage, la copie et la redistribution d'un contenu soumis au droit d'auteur, même après sa vente.",
        "Hors sujet : la tokenisation substitue des valeurs sensibles, elle ne contrôle pas l'usage d'un contenu.",
        "Hors sujet : le CASB gouverne l'accès aux services cloud.",
        "Piège du périmètre : le DLP protège les données de l'organisation contre l'exfiltration, pas des œuvres vendues à des tiers."
      ]
    },
    {
      "q": "Le RSSI découvre que plusieurs départements utilisent des applications SaaS non approuvées. Quel outil lui donnera la MEILLEURE visibilité sur ces usages cloud ?",
      "choix": [
        "Un gestionnaire de mots de passe",
        "Un DRM",
        "Un antivirus centralisé",
        "Un CASB"
      ],
      "reponse": 3,
      "explication": "La visibilité est le premier pilier du CASB : placé entre les utilisateurs et le cloud, il révèle quels services cloud sont réellement utilisés — y compris le shadow IT — puis permet d'y appliquer les politiques de sécurité. Le DRM protège le copyright et l'antivirus les endpoints ; aucun ne cartographie l'usage du cloud.",
      "difficulte": 2,
      "pourquoi": [
        "Trop étroit : un gestionnaire de mots de passe ne voit que les services que les utilisateurs y déclarent.",
        "Hors sujet : le DRM protège des contenus, il ne cartographie pas l'usage du cloud.",
        "Réponse de technicien : l'antivirus protège les endpoints, il ne recense pas les services SaaS utilisés.",
        "Bonne réponse : la visibilité — y compris sur le shadow IT — est le premier pilier du CASB, placé entre les utilisateurs et le cloud."
      ]
    },
    {
      "q": "Un chercheur reçoit un jeu de données où les noms sont remplacés par des alias, la table de correspondance restant chez l'émetteur. Quelle technique a été utilisée et quel est le risque résiduel ?",
      "choix": [
        "Chiffrement symétrique ; la clé de déchiffrement est perdue",
        "Anonymisation irréversible ; strictement aucun risque résiduel de ré-identification",
        "Pseudonymisation ; la ré-identification reste possible pour qui détient la table",
        "Tokenisation ; le vault de correspondance est public"
      ],
      "reponse": 2,
      "explication": "Remplacer les identités par des alias avec conservation d'une table de correspondance est la pseudonymisation : elle est réversible, donc les données restent des données personnelles au sens du GDPR, et une fuite de la table permettrait la ré-identification. Seule l'anonymisation véritable est irréversible.",
      "difficulte": 2,
      "pourquoi": [
        "Incohérent avec le scénario : rien n'indique un chiffrement ni une clé perdue.",
        "Faux et absolu : une table de correspondance existe, donc ce n'est pas de l'anonymisation et le risque n'est pas nul.",
        "Bonne réponse : alias + table de correspondance conservée = pseudonymisation, réversible pour qui détient la table.",
        "Invention incohérente : un vault de tokenisation n'est jamais public, et le scénario décrit des alias, pas des jetons."
      ]
    },
    {
      "q": "Pourquoi le GDPR continue-t-il de s'appliquer à des données pseudonymisées ?",
      "choix": [
        "Parce que le GDPR s'applique à toutes les données, même totalement anonymisées et agrégées",
        "Parce que la pseudonymisation est réversible : les personnes restent identifiables",
        "Parce que la pseudonymisation est formellement interdite par le GDPR",
        "Il ne s'applique plus : pseudonymiser équivaut juridiquement à anonymiser"
      ],
      "reponse": 1,
      "explication": "Les données pseudonymisées restent des données personnelles car la ré-identification est possible via la table de correspondance : le GDPR continue de s'appliquer (la pseudonymisation y est d'ailleurs encouragée comme mesure de protection). Seules les données véritablement anonymisées — irréversiblement — sortent du champ du règlement.",
      "difficulte": 3,
      "pourquoi": [
        "Absolu et faux : les données véritablement anonymisées sortent du champ du GDPR.",
        "Bonne réponse : la ré-identification restant possible via la table, les personnes demeurent identifiables — les données restent personnelles.",
        "Contresens : le GDPR encourage la pseudonymisation comme mesure de protection.",
        "Confusion clé de l'examen : pseudonymiser n'est pas anonymiser — la réversibilité fait toute la différence."
      ]
    },
    {
      "q": "Que devrait faire une organisation EN PREMIER pour bâtir son programme de gestion des actifs ?",
      "choix": [
        "Rédiger d'abord la procédure de mise au rebut",
        "Former tous les utilisateurs au tagging des actifs",
        "Acheter d'emblée un outil ITAM du leader du marché mondial reconnu",
        "Établir un inventaire complet des actifs tangibles et intangibles"
      ],
      "reponse": 3,
      "explication": "Tout programme de gestion d'actifs commence par l'inventaire : matériel, logiciels, licences, machines virtuelles, mais aussi actifs intangibles (brevets, réputation). Sans inventaire, l'outil, les procédures et la formation n'ont pas d'objet — on ne protège que ce que l'on connaît.",
      "difficulte": 1,
      "pourquoi": [
        "Hors phase : la mise au rebut est la fin du cycle de vie, pas le point de départ du programme.",
        "Hors phase : la formation au tagging suppose un cadre d'inventaire déjà défini.",
        "Piège de l'outil d'abord : un ITAM sans inventaire initial n'a rien à gérer — l'outil sert le processus, pas l'inverse.",
        "Bonne réponse : tout commence par l'inventaire complet des actifs tangibles et intangibles — on ne protège que ce que l'on connaît."
      ]
    },
    {
      "q": "Quel est le PRINCIPAL apport d'une CMDB par rapport à un simple tableur d'inventaire ?",
      "choix": [
        "Elle modélise les relations et dépendances entre actifs, utiles à l'analyse d'impact",
        "Elle est nettement moins chère à maintenir qu'un tableur",
        "Elle chiffre automatiquement tous les actifs matériels recensés dans la base de configuration",
        "Elle remplace entièrement la découverte automatisée des actifs"
      ],
      "reponse": 0,
      "explication": "La Configuration Management Database recense les actifs ET leurs relations : quel service dépend de quel serveur, quelle application de quelle base. Cette cartographie des dépendances permet d'évaluer l'impact d'un incident ou d'un changement — ce qu'un tableur statique ne fait pas. Elle se nourrit de la découverte automatisée, elle ne la remplace pas.",
      "difficulte": 2,
      "pourquoi": [
        "Bonne réponse : la CMDB modélise les dépendances entre actifs, ce qui permet d'évaluer l'impact d'un incident ou d'un changement.",
        "Faux : une CMDB coûte plus cher à maintenir qu'un tableur — sa valeur est ailleurs.",
        "Invention : aucune CMDB ne chiffre les actifs qu'elle recense.",
        "Inversion : la CMDB se nourrit de la découverte automatisée, elle ne la remplace pas."
      ]
    },
    {
      "q": "Malgré un inventaire déclaratif tenu à jour, un audit révèle des serveurs inconnus sur le réseau. Quelle mesure corrige le MIEUX cette lacune de façon durable ?",
      "choix": [
        "Le blocage systématique de tous les ports réseau inutilisés",
        "Un inventaire manuel annuel nettement plus rigoureux",
        "La découverte automatisée et continue des actifs (scans réseau, agents)",
        "Une sanction disciplinaire systématique pour les administrateurs négligents"
      ],
      "reponse": 2,
      "explication": "Un inventaire déclaratif se périme entre deux campagnes : seule la découverte automatisée et continue (scans réseau, agents, intégration DHCP/AD) détecte en permanence les actifs non déclarés. L'inventaire annuel reste ponctuel, la sanction ne traite pas la cause, et le blocage de ports est un contrôle utile mais qui n'inventorie rien.",
      "difficulte": 2,
      "pourquoi": [
        "Techniquement vrai mais hors objectif : bloquer des ports limite les branchements, mais n'inventorie rien.",
        "Piège du même processus en mieux : une campagne annuelle, même rigoureuse, se périme entre deux passages.",
        "Bonne réponse : seule la découverte automatisée et continue détecte en permanence les actifs non déclarés.",
        "Piège de la cause humaine : sanctionner ne corrige pas un processus structurellement lacunaire."
      ]
    },
    {
      "q": "Lors du provisioning d'une nouvelle machine virtuelle de production, quelle étape garantit qu'un responsable pourra être identifié pendant toute la vie de l'actif ?",
      "choix": [
        "La création d'un snapshot initial complet de la machine virtuelle avant sa mise en production",
        "Le tagging de la VM (owner, classification, environnement) et son inscription à l'inventaire",
        "L'installation d'un antivirus et d'un agent EDR de surveillance",
        "L'attribution d'une adresse IP fixe et d'un nom DNS dédié"
      ],
      "reponse": 1,
      "explication": "Le provisioning sécurisé impose d'enregistrer l'actif dans l'inventaire et de le taguer dès sa création : owner, classification, environnement. Sans owner assigné, personne n'est responsable du patching ni du déprovisioning — la VM risque de devenir orpheline. Antivirus, IP et snapshot sont utiles mais n'établissent pas la responsabilité.",
      "difficulte": 2,
      "pourquoi": [
        "Utile mais hors sujet : un snapshot facilite la restauration, pas l'accountability.",
        "Bonne réponse : taguer la VM (owner, classification, environnement) et l'inscrire à l'inventaire garantit un responsable identifiable toute sa vie.",
        "Utile mais hors sujet : l'antivirus protège la VM, il n'établit pas la responsabilité.",
        "Réponse de technicien : une IP fixe identifie la machine sur le réseau, pas son responsable."
      ]
    },
    {
      "q": "Un administrateur supprime une VM de test mais oublie de révoquer son compte de service et ses certificats. Quel risque cette situation illustre-t-elle ?",
      "choix": [
        "Une violation caractérisée du droit d'auteur logiciel",
        "Un simple problème de surcoût des licences logicielles non résiliées à temps",
        "Un déprovisioning incomplet : des credentials orphelins restent exploitables",
        "Un problème de rémanence magnétique sur les supports physiques"
      ],
      "reponse": 2,
      "explication": "Le déprovisioning ne se limite pas à supprimer l'actif : il faut retirer l'actif de l'inventaire, révoquer ses accès, comptes de service et certificats, et assainir les données selon leur classification. Des credentials orphelins sont une porte d'entrée classique — ils ne sont plus surveillés mais restent valides.",
      "difficulte": 2,
      "pourquoi": [
        "Hors sujet : aucun enjeu de droit d'auteur dans ce scénario.",
        "Trop étroit : le coût de licences est marginal face au risque d'accès résiduel.",
        "Bonne réponse : un déprovisioning incomplet laisse des credentials orphelins — valides, non surveillés, exploitables par un attaquant.",
        "Piège du support : une VM supprimée pose la question des credentials et des données logiques, pas de rémanence magnétique matérielle."
      ]
    },
    {
      "q": "Un département marketing souscrit de sa propre initiative à un outil SaaS d'e-mailing pour ses campagnes, sans en informer l'IT. Comment appelle-t-on ce phénomène et quel est son PRINCIPAL danger ?",
      "choix": [
        "Shadow IT ; les données de l'entreprise échappent à tout inventaire et à toute protection",
        "Vendor lock-in ; le coût de sortie et de migration sera très élevé",
        "Scope creep ; le projet dépasse progressivement son périmètre initial",
        "BYOD ; les appareils personnels non gérés contaminent durablement le réseau interne de l'entreprise"
      ],
      "reponse": 0,
      "explication": "Le shadow IT désigne les actifs et services adoptés sans approbation de l'IT. Le danger principal est la perte de visibilité : des données d'entreprise (ici, des listes de clients) partent vers un service ni inventorié, ni évalué, ni protégé par les contrôles de l'organisation. La réponse combine découverte (CASB), politique claire et processus de demande simple.",
      "difficulte": 1,
      "pourquoi": [
        "Bonne réponse : un service adopté sans approbation de l'IT est du shadow IT — les données échappent à l'inventaire et aux contrôles.",
        "Vrai ailleurs : le lock-in est un risque contractuel, pas le phénomène décrit.",
        "Hors sujet : le scope creep est une dérive de périmètre projet.",
        "Piège du terme voisin : le BYOD concerne les appareils personnels, pas les services souscrits."
      ]
    },
    {
      "q": "Quelle approche réduit le MIEUX le shadow IT de façon durable, au-delà des outils de détection ?",
      "choix": [
        "Interdire le cloud dans la charte informatique",
        "Sanctionner systématiquement les employés fautifs",
        "Bloquer l'ensemble des sites web non professionnels",
        "Offrir un processus d'approbation simple et rapide pour les nouveaux services, avec un catalogue d'alternatives validées"
      ],
      "reponse": 3,
      "explication": "Le shadow IT naît souvent d'un besoin métier légitime face à un processus IT trop lourd : la réponse durable est de rendre la voie officielle plus facile que le contournement — catalogue de services approuvés, approbation rapide. Le blocage total et la sanction traitent les symptômes et poussent les usages encore plus loin dans l'ombre ; un CASB détecte mais ne supprime pas la cause.",
      "difficulte": 3,
      "pourquoi": [
        "Absolu : interdire le cloud nie le besoin métier et sera contourné.",
        "Piège répressif : la sanction traite le symptôme et dégrade la coopération sans supprimer le besoin métier.",
        "Absolu et contre-productif : le blocage massif pousse les usages encore plus loin dans l'ombre.",
        "Bonne réponse : rendre la voie officielle plus simple que le contournement traite la cause racine du shadow IT."
      ]
    },
    {
      "q": "Votre entreprise acquiert une société dont le schéma de classification comporte trois niveaux, alors que le vôtre en compte quatre. Les équipes métier doivent échanger des documents dès la clôture de l'opération. En tant que CISO, que faites-vous EN PREMIER ?",
      "choix": [
        "Lancer la reclassification document par document du patrimoine de la société acquise selon votre schéma",
        "Faire établir par les data owners des deux entités une table de correspondance entre les niveaux, validée par la gouvernance, avec protection par défaut au niveau équivalent le plus élevé",
        "Suspendre tout échange de données entre les deux entités jusqu'à l'achèvement d'une reclassification complète",
        "Demander à la DSI d'appliquer techniquement les étiquettes du schéma de la maison mère sur tous les dépôts de la cible"
      ],
      "reponse": 1,
      "explication": "Le besoin business est immédiat : la réponse managériale est un pont de gouvernance entre les deux schémas — une table de correspondance décidée par les data owners, validée par la gouvernance, avec un principe de précaution (protection au niveau équivalent le plus élevé). La reclassification exhaustive viendra ensuite ; l'application technique sans mapping court-circuiterait les owners, et le blocage total sacrifierait l'objectif de la fusion.",
      "difficulte": 3,
      "pourquoi": [
        "Techniquement vrai mais hors phase : la reclassification exhaustive est l'étape suivante — la lancer d'abord ne répond pas au besoin d'échange immédiat.",
        "Bonne réponse : la table de correspondance validée par la gouvernance, protectrice par défaut, permet l'échange immédiat sans sacrifier la sécurité.",
        "Absolu : bloquer tout partage sacrifie l'objectif business de la fusion alors qu'une mesure de gouvernance provisoire suffit.",
        "Réponse de technicien : appliquer des étiquettes sans mapping décidé par les data owners inverse la gouvernance — la classification est une décision métier."
      ]
    },
    {
      "q": "Lors d'une acquisition, la due diligence révèle que la société cible ne dispose d'aucun inventaire fiable de ses données personnelles, et l'intégration des systèmes est prévue dans six mois. Quelle action du CISO est la PLUS importante avant la migration ?",
      "choix": [
        "Faire porter contractuellement à la cible la responsabilité de ses données historiques",
        "Chiffrer l'ensemble des dépôts de données de la cible avant tout transfert",
        "Commencer la migration par les systèmes les moins critiques pour tenir le calendrier",
        "Conduire une découverte et une classification des données de la cible pour savoir ce qui sera migré et sous quelles obligations légales"
      ],
      "reponse": 3,
      "explication": "On ne migre pas ce que l'on ne connaît pas : sans découverte ni classification préalables, l'organisation absorberait des données personnelles aux obligations inconnues (bases légales, durées de rétention, transferts). Le chiffrement est un contrôle qui se dimensionne après la classification, la responsabilité du controller ne s'élimine pas par une clause après la fusion, et l'ordre de migration ne traite pas l'ignorance du contenu.",
      "difficulte": 3,
      "pourquoi": [
        "Techniquement vrai mais illusoire : après la fusion, l'acquéreur devient responsable de fait — la conformité ne s'externalise pas par clause contractuelle.",
        "Réponse de technicien : chiffrer sans connaître le contenu ne dit ni ce qui est migré ni quelles obligations s'appliquent — le contrôle précéderait la connaissance.",
        "Hors sujet : l'ordonnancement de la migration est une décision de planification qui ne résout pas l'absence d'inventaire.",
        "Bonne réponse : la découverte et la classification donnent la visibilité indispensable pour décider quoi migrer, purger ou protéger, et sous quelles obligations."
      ]
    },
    {
      "q": "Une multinationale déploie une application RH sur un cloud public avec réplication automatique entre trois régions (Union européenne, États-Unis, Singapour) pour la résilience. Le DPO alerte sur les données des salariés européens. Que devrait faire le CISO EN PREMIER ?",
      "choix": [
        "Activer le chiffrement au repos proposé par défaut par le fournisseur dans les trois régions",
        "Cartographier où les données sont réellement stockées et répliquées, puis restreindre la réplication des données des salariés européens aux juridictions autorisées",
        "Signer des clauses contractuelles types (SCC) avec le fournisseur pour couvrir l'ensemble des transferts",
        "Migrer l'application vers un fournisseur cloud dont le siège est situé dans l'Union européenne"
      ],
      "reponse": 1,
      "explication": "Avant tout instrument technique ou juridique, il faut la visibilité : cartographier les flux et les localisations réelles révèle quels transferts existent, puis on restreint la réplication aux juridictions autorisées. Les SCC sont utiles mais s'appliquent à des transferts qu'il faut d'abord identifier et minimiser ; le chiffrement par défaut laisse les clés au fournisseur ; changer de fournisseur est disproportionné avant l'analyse.",
      "difficulte": 3,
      "pourquoi": [
        "Réponse de technicien : le chiffrement natif laisse les clés chez le fournisseur et ne traite pas la question juridictionnelle de la réplication.",
        "Bonne réponse : cartographier les flux d'abord, restreindre ensuite — la gouvernance des localisations précède le choix des instruments juridiques et techniques.",
        "Techniquement vrai mais hors phase : les SCC couvrent des transferts qu'il faut d'abord avoir identifiés et réduits au nécessaire.",
        "Absolu et disproportionné : changer de fournisseur avant d'avoir analysé les flux traite le symptôme au prix fort — et le siège du fournisseur ne règle pas tout."
      ]
    },
    {
      "q": "Une banque doit déployer une charge de travail contenant des données clients dans une région cloud d'un pays dont la loi permet au régulateur local d'exiger l'accès aux données. La présence locale est une obligation commerciale. Quel arbitrage du CISO protège le MIEUX l'organisation tout en permettant l'activité ?",
      "choix": [
        "Limiter les données stockées localement au strict nécessaire et conserver les clés de chiffrement hors de la juridiction concernée",
        "Refuser le déploiement dans ce pays tant que la loi locale n'évolue pas",
        "Obtenir du fournisseur un engagement contractuel de notification préalable en cas de réquisition",
        "Déployer en activant le service de chiffrement managé du fournisseur dans la région locale"
      ],
      "reponse": 0,
      "explication": "Le rôle du CISO est de permettre le business en réduisant le risque : minimiser les données exposées à la juridiction et garder les clés hors de portée du régulateur local limite ce qu'une réquisition peut réellement produire. Refuser bloque l'activité ; le chiffrement managé localement laisse les clés saisissables avec les données ; un engagement de notification ne prime jamais sur une loi locale, souvent assortie d'une interdiction de notifier.",
      "difficulte": 3,
      "pourquoi": [
        "Bonne réponse : minimisation des données exposées et clés hors juridiction — une réquisition ne produirait qu'un périmètre réduit de données chiffrées.",
        "Absolu : refuser sacrifie une obligation commerciale alors que des mesures de réduction du risque existent — le risque se gère avant de se fuir.",
        "Techniquement vrai mais insuffisant : la notification est utile, mais un contrat ne fait pas obstacle à une obligation légale locale.",
        "Réponse de technicien : un chiffrement dont les clés sont gérées par le fournisseur dans la même juridiction reste saisissable avec les données."
      ]
    },
    {
      "q": "L'équipe data science, sponsorisée par la direction générale, veut entraîner un modèle d'IA générative interne sur l'historique des tickets de support, qui contient des données personnelles de clients et des extraits de contrats. Que devrait exiger le CISO EN PREMIER ?",
      "choix": [
        "Que les sorties du modèle soient filtrées par une solution DLP avant diffusion",
        "Que l'équipe signe une charte d'usage responsable de l'intelligence artificielle",
        "Que le corpus d'entraînement soit inventorié, classifié et minimisé (purge, pseudonymisation) avec l'accord des data owners avant tout entraînement",
        "Que le modèle soit hébergé sur l'infrastructure interne plutôt que dans le cloud"
      ],
      "reponse": 2,
      "explication": "Le corpus d'entraînement est un actif de données comme un autre : il doit être inventorié, classifié et minimisé avant usage, avec l'autorisation des data owners — car une fois les données apprises par le modèle, il est très difficile de revenir en arrière. Le lieu d'hébergement, la charte et le filtrage des sorties sont des contrôles utiles mais en aval : ils ne corrigent pas une ingestion incontrôlée.",
      "difficulte": 3,
      "pourquoi": [
        "Techniquement vrai mais hors phase : filtrer les sorties intervient après coup et ne garantit pas l'absence de régurgitation de données sensibles.",
        "Gouvernance de façade : une charte encadre les comportements mais ne contrôle pas le contenu du corpus.",
        "Bonne réponse : classifier et minimiser AVANT l'entraînement, avec l'accord des owners — un modèle ne « désapprend » pas facilement ce qu'il a mémorisé.",
        "Réponse de technicien : le lieu d'hébergement ne change rien au fait d'ingérer des données personnelles et contractuelles non maîtrisées."
      ]
    },
    {
      "q": "Après le déploiement d'un modèle d'IA interne, l'organisation découvre que son corpus d'entraînement contenait des données de clients ayant depuis exercé leur droit à l'effacement (GDPR). Quelle position du CISO reflète le MIEUX la réalité du risque ?",
      "choix": [
        "Retirer immédiatement le modèle de production jusqu'à un réentraînement complet",
        "La suppression des données dans le corpus source suffit, le modèle entraîné n'est pas concerné",
        "Le modèle peut avoir mémorisé des données personnelles : il faut évaluer le risque de régurgitation et arbitrer entre réentraînement, désapprentissage ou filtrage, en documentant la décision",
        "Un modèle entraîné est une agrégation statistique anonyme qui sort du champ du GDPR"
      ],
      "reponse": 2,
      "explication": "Un modèle peut mémoriser puis restituer des données d'entraînement : supprimer le corpus source ne purge pas le modèle, et l'argument de l'agrégation anonyme ne tient pas si des données personnelles restent régurgitables. La réponse managériale est une évaluation de risque documentée débouchant sur une mesure proportionnée — réentraînement, machine unlearning ou filtrage des sorties. Le retrait immédiat, avant toute évaluation, est disproportionné.",
      "difficulte": 3,
      "pourquoi": [
        "Absolu : retirer le modèle avant toute évaluation sacrifie le service sans mesure du risque réel — la proportionnalité est le cœur de l'arbitrage managérial.",
        "Trop étroit : la purge du corpus source laisse intactes les représentations mémorisées par le modèle, potentiellement régurgitables.",
        "Bonne réponse : évaluation du risque de régurgitation puis mesure proportionnée et documentée — la démarche de risque attendue d'un data controller.",
        "Absolu et juridiquement fragile : si le modèle peut restituer des données personnelles, il ne s'agit pas d'une anonymisation irréversible."
      ]
    },
    {
      "q": "La politique de rétention de votre organisation supprime automatiquement les e-mails après dix-huit mois. Le service juridique vous informe qu'un litige impliquant un ancien projet est raisonnablement probable, et la prochaine purge automatique interviendra le mois prochain. Que doit faire le CISO EN PREMIER ?",
      "choix": [
        "Mettre en place un legal hold suspendant la suppression automatique pour les données concernées et en documenter le périmètre avec le juridique",
        "Laisser la purge s'exécuter puisque la politique de rétention approuvée fait foi",
        "Exporter l'intégralité des boîtes aux lettres de l'entreprise vers une archive isolée",
        "Attendre la notification formelle de l'assignation avant de modifier le calendrier de purge"
      ],
      "reponse": 0,
      "explication": "Dès qu'un litige est raisonnablement anticipé, l'obligation de préservation naît : le legal hold suspend la destruction pour le périmètre concerné, défini avec le juridique et documenté. Appliquer la politique malgré tout exposerait à une accusation de destruction de preuves (spoliation) ; tout exporter est disproportionné et accroît l'exposition ; attendre l'assignation formelle arriverait trop tard.",
      "difficulte": 3,
      "pourquoi": [
        "Bonne réponse : le legal hold ciblé et documenté, déclenché dès l'anticipation raisonnable du litige, prime sur le calendrier de rétention.",
        "Piège de la politique-refuge : une politique interne ne protège pas contre une accusation de spoliation — l'obligation légale de préservation prime.",
        "Disproportionné : préserver tout le parc élargit inutilement le périmètre, les coûts et la surface d'exposition, au lieu du périmètre défini avec le juridique.",
        "Hors phase : l'obligation de préservation naît à l'anticipation raisonnable du litige, pas à la réception de l'assignation — attendre détruirait des preuves."
      ]
    },
    {
      "q": "La direction commerciale demande de porter de un à sept ans la rétention des enregistrements d'appels clients afin d'entraîner de futurs modèles d'analyse. Le DPO rappelle le principe de limitation de la conservation. Quel arbitrage du CISO est le PLUS défendable ?",
      "choix": [
        "Refuser la demande : la rétention des enregistrements ne doit jamais dépasser un an",
        "N'autoriser l'extension que sur une base légale documentée, avec des données minimisées, voire anonymisées, pour l'usage d'entraînement",
        "Laisser l'éditeur de la solution d'enregistrement définir la durée de rétention appropriée",
        "Accepter la demande : la valeur métier des données justifie la conservation étendue"
      ],
      "reponse": 1,
      "explication": "L'arbitrage défendable concilie le besoin métier et la conformité : une conservation étendue exige une base légale documentée et une finalité précise, et l'usage d'entraînement se satisfait souvent de données minimisées ou anonymisées — qui sortent alors du champ de la limitation de conservation. Accepter sans condition ignore la loi, refuser par principe invente une règle absolue, et déléguer au fournisseur abandonne une responsabilité qui ne se transfère pas.",
      "difficulte": 3,
      "pourquoi": [
        "Absolu : aucune règle ne fixe un plafond universel d'un an — la bonne durée découle de la finalité et de la base légale, pas d'un chiffre inventé.",
        "Bonne réponse : base légale documentée et minimisation ou anonymisation pour l'entraînement — l'arbitrage qui sert le métier tout en restant défendable.",
        "Hors périmètre : la durée de rétention est une décision du controller — un fournisseur ne peut pas porter cette responsabilité.",
        "Piège du business d'abord : la valeur métier ne constitue pas une base légale — accepter exposerait l'organisation à une non-conformité caractérisée."
      ]
    },
    {
      "q": "Le contrat de votre organisation avec un fournisseur SaaS se termine et les données — des dossiers clients classifiés Confidential — migrent vers un concurrent. Le fournisseur sortant s'engage contractuellement à « supprimer » les données sous quatre-vingt-dix jours. Quelle exigence du CISO apporte la MEILLEURE assurance d'irrécupérabilité ?",
      "choix": [
        "Obtenir un certificat de destruction signé par le fournisseur à l'issue des quatre-vingt-dix jours",
        "Faire réaliser un audit sur site des datacenters du fournisseur après la suppression",
        "Exiger la destruction physique des disques ayant hébergé les données",
        "Avoir chiffré les données avec des clés gérées par l'organisation et détruire ces clés une fois la migration validée (crypto-shredding)"
      ],
      "reponse": 3,
      "explication": "Dans une infrastructure mutualisée, ni la destruction physique ciblée ni un audit ponctuel ne peuvent prouver l'effacement de VOS seules données, et un certificat reste déclaratif. Seul le crypto-shredding — clés détenues par le client et détruites après validation de la migration — rend les données logiquement irrécupérables indépendamment de ce que fait le fournisseur, y compris dans ses sauvegardes.",
      "difficulte": 3,
      "pourquoi": [
        "Techniquement vrai mais déclaratif : le certificat documente un engagement, il ne prouve pas l'effacement réel dans tous les systèmes et sauvegardes du fournisseur.",
        "Disproportionné et peu probant : un audit ponctuel ne peut pas vérifier l'absence de copies dans l'ensemble des systèmes et des sauvegardes.",
        "Irréaliste en environnement mutualisé : les disques hébergent les données de nombreux clients — aucun fournisseur ne les détruira pour un seul contrat.",
        "Bonne réponse : la destruction des clés détenues par le client rend les données irrécupérables partout — y compris dans les sauvegardes du fournisseur — sans dépendre de sa bonne exécution."
      ]
    },
    {
      "q": "Lors de la négociation d'un nouveau contrat IaaS destiné à héberger des données sensibles, quel choix du CISO facilitera le PLUS une sortie (exit) sécurisée en fin de contrat ?",
      "choix": [
        "Sélectionner un fournisseur certifié ISO/IEC 27001 sur le périmètre d'hébergement",
        "Négocier une clause de réversibilité garantissant l'export des données dans un format standard",
        "Chiffrer dès le premier jour toutes les données avec des clés détenues et gérées par l'organisation",
        "Prévoir des pénalités contractuelles en cas de non-suppression des données en fin de contrat"
      ],
      "reponse": 2,
      "explication": "La sortie sécurisée se prépare à l'entrée : chiffrer dès le premier jour avec des clés détenues par le client rend possible le crypto-shredding à la sortie — la destruction des clés rendra irrécupérables toutes les copies résiduelles chez le fournisseur. La réversibilité garantit de récupérer ses données mais pas l'irrécupérabilité des résidus ; la certification et les pénalités sont des assurances indirectes, déclaratives ou réactives.",
      "difficulte": 3,
      "pourquoi": [
        "Vrai mais générique : la certification atteste d'un système de management, elle ne garantit pas l'effacement effectif de vos données en fin de contrat.",
        "Techniquement vrai mais partiel : la réversibilité assure de récupérer ses données, pas de rendre irrécupérables les copies restées chez le fournisseur.",
        "Bonne réponse : des clés client dès le premier jour rendent le crypto-shredding possible à la sortie — la décision d'architecture qui conditionne tout le reste.",
        "Réactif : une pénalité indemnise après coup un manquement — elle ne prouve ni n'assure l'irrécupérabilité."
      ]
    },
    {
      "q": "Votre organisation migre une base de données clients classifiée Confidential d'un système legacy vers une nouvelle plateforme, avec conversion du format des enregistrements. Du point de vue de la data maintenance, quelle est la préoccupation PRINCIPALE ?",
      "choix": [
        "Terminer la migration dans la fenêtre de maintenance afin de limiter l'indisponibilité du service",
        "Maintenir les contrôles — classification, chiffrement, restrictions d'accès — pendant et après la migration, et vérifier l'intégrité des données converties",
        "Choisir un format de fichier propriétaire afin de rendre les données plus difficiles à lire",
        "Conserver indéfiniment l'ancien système en ligne comme copie de secours"
      ],
      "reponse": 1,
      "explication": "La data maintenance exige que les contrôles de sécurité suivent la donnée lors des migrations et des conversions de format : la classification, le chiffrement et les droits d'accès doivent être maintenus pendant toute l'opération, et l'exactitude comme l'intégrité des données converties doivent être vérifiées à l'arrivée. La disponibilité est un objectif opérationnel secondaire ici, un format propriétaire n'est pas un contrôle de sécurité, et garder l'ancien système en ligne indéfiniment aggrave la surface d'attaque et la rémanence.",
      "difficulte": 2,
      "pourquoi": [
        "Objectif opérationnel, pas de sécurité : respecter la fenêtre de maintenance ne protège en rien la donnée pendant la conversion.",
        "Bonne réponse : les contrôles doivent voyager avec la donnée — les maintenir pendant et après la migration, puis vérifier l'intégrité du résultat, est le cœur de la data maintenance.",
        "Fausse sécurité : l'obscurité d'un format propriétaire n'est pas un contrôle — la confidentialité repose sur le chiffrement et les accès, pas sur l'illisibilité supposée.",
        "Contre-productif : conserver le legacy en ligne indéfiniment multiplie les copies non maîtrisées, la rémanence et la surface d'attaque — il faut le migrer, vérifier, puis l'assainir."
      ]
    },
    {
      "q": "Des bandes de sauvegarde contenant des données Confidential sont transférées chaque semaine vers un site de stockage externe. Quelle combinaison de mesures répond le MIEUX aux exigences de handling pendant le transport ?",
      "choix": [
        "Chiffrement des bandes, emballage inviolable, coursier agréé et chain of custody documentée à chaque transfert",
        "Envoi par courrier postal ordinaire, les bandes étant illisibles sans le logiciel de sauvegarde",
        "Transport par n'importe quel employé disponible, avec un e-mail de confirmation à l'arrivée",
        "Étiquetage visible « Confidentiel » sur les bandes pour que le transporteur en prenne particulièrement soin"
      ],
      "reponse": 0,
      "explication": "Le transport de supports classifiés combine quatre mesures : le chiffrement rend la perte inoffensive, l'emballage inviolable révèle toute manipulation, le coursier agréé est un tiers de confiance, et la chain of custody documente chaque détenteur et chaque transfert. Le format propriétaire n'est pas un contrôle, un employé quelconque sans traçabilité ne constitue pas une chain of custody, et un étiquetage visible sans autre protection signale surtout la valeur du colis à un voleur.",
      "difficulte": 2,
      "pourquoi": [
        "Bonne réponse : la défense en profondeur du transport — chiffrement, tamper-evident, transporteur de confiance et traçabilité de bout en bout.",
        "Fausse sécurité : un format de sauvegarde se lit avec des outils courants — sans chiffrement, une bande perdue est une fuite de données.",
        "Absence de contrôle : sans habilitation ni traçabilité signée des remises, il n'y a ni chain of custody ni détection possible d'un détournement.",
        "Contre-productif : un marquage visible sans chiffrement ni emballage inviolable attire l'attention sur le support le plus précieux du lot."
      ]
    },
    {
      "q": "Une PME industrielle sans programme de sécurité formalisé veut des résultats rapides avec une équipe réduite. Son principal donneur d'ordres annonce qu'il exigera à terme une certification de son système de management de la sécurité. Quelle stratégie de sélection de référentiels est la PLUS pertinente ?",
      "choix": [
        "Adopter uniquement NIST SP 800-53, le catalogue de contrôles le plus complet du marché",
        "Viser immédiatement la certification ISO/IEC 27001 avant toute mesure technique",
        "Attendre que l'exigence contractuelle soit formalisée avant de choisir un référentiel",
        "Démarrer avec les CIS Controls priorisés pour des gains rapides, puis bâtir l'ISMS vers la certification ISO/IEC 27001 exigée par le client"
      ],
      "reponse": 3,
      "explication": "Le bon arbitrage combine les forces des référentiels : les CIS Controls, prescriptifs et priorisés par Implementation Groups, donnent des gains techniques rapides à une petite équipe ; la certification ISO/IEC 27001, seule à attester formellement un système de management, se construit ensuite pour répondre à l'exigence du client. Un catalogue exhaustif comme SP 800-53 écraserait une PME sans programme, viser la certification avant toute mesure inverse les priorités de réduction du risque, et attendre le contrat fait perdre le temps d'anticipation.",
      "difficulte": 3,
      "pourquoi": [
        "Disproportionné : SP 800-53 est un catalogue exhaustif pensé pour le fédéral américain — sans priorisation, une petite équipe s'y noie, et il ne fournit pas de certification.",
        "Hors séquence : la certification atteste un ISMS qui fonctionne — la viser avant toute mesure technique laisse le risque réel intact pendant des mois.",
        "Attentisme : l'exigence est annoncée — anticiper la trajectoire de certification est exactement le rôle du CISO ; attendre le contrat crée l'urgence subie.",
        "Bonne réponse : gains rapides et priorisés avec les CIS Controls, puis montée vers l'ISMS certifiable ISO 27001 — la trajectoire qui sert le risque ET l'exigence client."
      ]
    }
  ],
  "quizEn": [
    {
      "q": "Which of the following BEST describes the primary purpose of data classification?",
      "choix": [
        "To determine the level of protection required based on the value and sensitivity of the data",
        "To satisfy external audit requirements",
        "To assign encryption keys to each dataset",
        "To reduce storage costs by identifying obsolete data"
      ],
      "reponse": 0,
      "explication": "La classification attribue à chaque donnée un niveau de sensibilité fondé sur sa valeur et l'impact d'une compromission, ce qui détermine ensuite le niveau de protection requis. Les audits, la réduction des coûts de stockage et l'attribution de clés sont au mieux des bénéfices secondaires ou des contrôles en aval, pas l'objectif premier.",
      "difficulte": 1,
      "pourquoi": [
        "Bonne réponse : la classification proportionne la protection à la valeur et à la sensibilité de la donnée.",
        "Trop étroit : la conformité d'audit est un bénéfice dérivé, pas l'objectif premier de la classification.",
        "Réponse de technicien : l'attribution de clés est un contrôle en aval, pas le but de la classification.",
        "Vrai mais accessoire : identifier l'obsolète est un sous-produit, pas la finalité."
      ]
    },
    {
      "q": "Who is ULTIMATELY accountable for the protection of an organization's data assets?",
      "choix": [
        "The end users who handle the data daily",
        "The security administrator who configures the controls",
        "The data custodian who performs daily backups",
        "The data owner, typically a senior manager or department head"
      ],
      "reponse": 3,
      "explication": "Le data owner — typiquement un cadre dirigeant — porte l'accountability ultime de la protection de la donnée : il classifie, autorise l'accès et s'assure que les contrôles sont en place. Il peut déléguer les tâches (au custodian, à l'administrateur), mais jamais la responsabilité. Les utilisateurs n'ont qu'une responsabilité d'usage conforme.",
      "difficulte": 1,
      "pourquoi": [
        "Trop étroit : les utilisateurs ont un devoir d'usage conforme, pas l'accountability.",
        "Réponse de technicien : l'administrateur configure les contrôles sans porter la responsabilité ultime.",
        "Rôle d'exécution : le custodian réalise des tâches déléguées, il ne porte pas l'accountability.",
        "Bonne réponse : le data owner porte l'accountability ultime — il peut déléguer les tâches, jamais la responsabilité."
      ]
    },
    {
      "q": "A company hires a third-party firm to process customer data for targeted analytics. Under GDPR, which role does the third-party firm assume?",
      "choix": [
        "Data owner",
        "Data processor",
        "Data protection officer",
        "Data controller"
      ],
      "reponse": 1,
      "explication": "Le tiers traite les données pour le compte et sous la direction de l'entreprise cliente : c'est le data processor. L'entreprise, qui décide quelles données traiter, pourquoi et comment, reste le data controller. Le DPO est un rôle interne de supervision de la conformité, et « data owner » est un rôle de gouvernance interne, pas un rôle GDPR.",
      "difficulte": 1,
      "pourquoi": [
        "Hors périmètre : « data owner » est un rôle de gouvernance interne, pas un rôle GDPR.",
        "Bonne réponse : le tiers traite pour le compte et sous la direction du client — c'est le data processor.",
        "Hors sujet : le DPO est une fonction interne de supervision de la conformité.",
        "Inversion : le controller est l'entreprise qui décide des finalités, pas le sous-traitant."
      ]
    },
    {
      "q": "Which of the following BEST distinguishes marking from labeling?",
      "choix": [
        "Marking applies to paper documents only while labeling applies to digital files",
        "Marking is human-readable while labeling is system-readable",
        "Marking is mandatory while labeling is optional",
        "Marking is applied by users while labeling is applied by the data owner"
      ],
      "reponse": 1,
      "explication": "Le marking associe des attributs de sécurité sous forme lisible par l'humain (tampon, bandeau) et guide les processus manuels ; le labeling est lisible par le système (métadonnées, RFID, QR codes) et permet l'application automatique des politiques. Les deux s'appliquent à tous les supports, physiques comme numériques.",
      "difficulte": 2,
      "pourquoi": [
        "Trop étroit : les deux s'appliquent à tous les supports, physiques comme numériques.",
        "Bonne réponse : le marking est lisible par l'humain (tampon, bandeau) et le labeling par le système (métadonnées).",
        "Invention : aucune règle générale ne rend l'un obligatoire et l'autre optionnel.",
        "Invention : la distinction porte sur le destinataire (humain ou système), pas sur qui l'applique."
      ]
    },
    {
      "q": "A server processes both Secret and Unclassified data. What classification should the organization assign to the server?",
      "choix": [
        "An intermediate custom level between the two",
        "No classification, because hardware is not classified",
        "Unclassified, because it is the lowest common level",
        "Secret, because an asset inherits the classification of the most sensitive data it processes"
      ],
      "reponse": 3,
      "explication": "Un actif hérite toujours de la classification de la donnée la plus sensible qu'il traite ou stocke : le serveur devient un actif Secret et reçoit les contrôles correspondants. Classer au niveau le plus bas exposerait les données Secret, et le matériel qui traite des données classifiées est bel et bien classifié.",
      "difficulte": 1,
      "pourquoi": [
        "Invention : créer un niveau intermédiaire ne protégerait pas la donnée la plus sensible.",
        "Faux : le matériel qui traite des données classifiées est lui-même classifié.",
        "Contresens dangereux : classer au plus bas exposerait les données Secret à des contrôles insuffisants.",
        "Bonne réponse : un actif hérite de la classification de la donnée la plus sensible qu'il traite ou stocke."
      ]
    },
    {
      "q": "An employee holds a Secret clearance and requests access to a Secret project file. What else is REQUIRED before access is granted?",
      "choix": [
        "A demonstrated need-to-know and formal approval from the data owner",
        "A signed non-disclosure agreement only",
        "A Top Secret clearance as a safety margin",
        "Nothing, since the clearance level matches the data classification"
      ],
      "reponse": 0,
      "explication": "La clearance ne suffit jamais : l'accès exige aussi le need-to-know — la donnée doit être nécessaire à la mission — et une approbation formelle impliquant le data owner. C'est le piège classique de l'examen : niveau d'habilitation égal ne signifie pas accès automatique.",
      "difficulte": 2,
      "pourquoi": [
        "Bonne réponse : la clearance seule ne suffit jamais — il faut le need-to-know et l'approbation formelle du data owner.",
        "Trop étroit : le NDA est un contrôle administratif, pas l'autorisation d'accès.",
        "Contresens : une clearance supérieure n'est pas requise et ne remplace pas le need-to-know.",
        "Piège classique : niveau d'habilitation égal ne signifie pas accès automatique."
      ]
    },
    {
      "q": "Which of the following is the FIRST step an organization should take before implementing data protection controls?",
      "choix": [
        "Purchase cyber liability insurance",
        "Encrypt all data at rest",
        "Identify and classify information and assets",
        "Deploy a network-based DLP solution"
      ],
      "reponse": 2,
      "explication": "On ne protège que ce que l'on connaît : l'identification et la classification des actifs précèdent toujours le choix des contrôles. DLP, chiffrement et assurance sont des mesures qui se choisissent et se dimensionnent EN FONCTION de la classification établie — les déployer d'abord serait mettre la charrue avant les bœufs.",
      "difficulte": 1,
      "pourquoi": [
        "Piège du transfert : l'assurance transfère un risque financier, elle ne protège aucune donnée.",
        "Techniquement vrai mais hors phase : le chiffrement se dimensionne après la classification.",
        "Bonne réponse : identifier et classifier d'abord — les contrôles se choisissent en fonction de la classification.",
        "Réponse de technicien : déployer un DLP sans classification revient à protéger à l'aveugle."
      ]
    },
    {
      "q": "Which data state is the MOST difficult to protect?",
      "choix": [
        "Data in transit",
        "Data at rest",
        "Data in archive",
        "Data in use"
      ],
      "reponse": 3,
      "explication": "La donnée en cours d'utilisation est en clair en mémoire pendant son traitement : les options se limitent au patching, aux builds standardisés, à l'antimalware et à la purge des buffers. Les états at rest et in transit bénéficient du chiffrement (volumes, TLS, IPsec), bien plus robuste. L'archive n'est qu'un cas particulier du repos.",
      "difficulte": 1,
      "pourquoi": [
        "Bien protégeable : TLS et IPsec chiffrent robustement le transit.",
        "Bien protégeable : la donnée au repos se chiffre efficacement (volumes, supports).",
        "Cas particulier du repos, bien couvert par le chiffrement.",
        "Bonne réponse : la donnée en cours de traitement est en clair en mémoire — les protections (patching, purge des buffers) restent limitées."
      ]
    },
    {
      "q": "Which of the following BEST protects the confidentiality of data at rest?",
      "choix": [
        "Continuous access logging",
        "Role-based access control",
        "Strong encryption of volumes and backup media",
        "A strict password policy"
      ],
      "reponse": 2,
      "explication": "Le chiffrement fort est la meilleure protection de la confidentialité au repos : même si le support est volé ou les contrôles d'accès contournés, la donnée reste illisible. Le RBAC et les mots de passe protègent le chemin d'accès logique mais pas le support lui-même ; la journalisation est un contrôle détectif, pas préventif.",
      "difficulte": 1,
      "pourquoi": [
        "Piège du contrôle détectif : la journalisation constate, elle n'empêche pas.",
        "Techniquement vrai mais contournable : le RBAC ne protège pas le support volé.",
        "Bonne réponse : le chiffrement fort rend la donnée illisible même en cas de vol du support ou de contournement des contrôles.",
        "Trop étroit : la politique de mots de passe protège l'authentification, pas le support."
      ]
    },
    {
      "q": "A retention policy states that all corporate email must be deleted after one year unless subject to a legal hold. Which of the following BEST describes the rationale?",
      "choix": [
        "Retaining data longer than necessary increases legal liability and breach exposure",
        "Older email has no business value",
        "Email backups slow down the network",
        "Storage costs grow linearly with retention time"
      ],
      "reponse": 0,
      "explication": "Conserver des données au-delà du nécessaire accroît la responsabilité juridique — tout e-mail conservé est produisible en justice (eDiscovery) — et augmente la surface d'exposition en cas de compromission. La règle d'or : conserver aussi longtemps que le métier ou la loi l'exige, mais pas plus. Les coûts sont secondaires face au risque juridique, et le legal hold suspend la suppression.",
      "difficulte": 2,
      "pourquoi": [
        "Bonne réponse : conserver au-delà du nécessaire accroît la responsabilité juridique (eDiscovery) et la surface d'exposition.",
        "Généralisation abusive : certains e-mails anciens gardent une valeur — ce n'est pas la logique de la politique.",
        "Détail opérationnel sans rapport avec la logique juridique de la politique.",
        "Vrai mais secondaire : le coût de stockage n'est pas le moteur principal d'une rétention courte."
      ]
    },
    {
      "q": "Which of the following BEST explains why classified data must NEVER be processed on an unclassified system?",
      "choix": [
        "Software licenses prohibit mixed processing",
        "The operating system may write memory contents into slack space, leaving hidden remnants of classified data",
        "Unclassified systems lack sufficient processing power",
        "Unclassified systems cannot run encryption software"
      ],
      "reponse": 1,
      "explication": "Certains systèmes d'exploitation remplissent le slack space — l'espace inutilisé des clusters — avec des données issues de la mémoire : des fragments de données classifiées peuvent persister sur le disque à l'insu de tous, créant une rémanence invisible sur un système non habilité. C'est un problème de data remanence, pas de performance ni de licence.",
      "difficulte": 3,
      "pourquoi": [
        "Invention : les licences logicielles ne régissent pas la classification.",
        "Bonne réponse : l'OS peut écrire le contenu mémoire dans le slack space, créant une rémanence cachée de données classifiées.",
        "Hors sujet : la puissance de calcul n'a aucun lien avec l'interdiction.",
        "Faux : les systèmes non classifiés exécutent parfaitement du chiffrement — le problème est la rémanence."
      ]
    },
    {
      "q": "Which sanitization method renders data unrecoverable by standard software recovery tools but NOT by advanced laboratory techniques?",
      "choix": [
        "Clearing",
        "Erasing",
        "Destruction",
        "Purging"
      ],
      "reponse": 0,
      "explication": "Le clearing — réécriture des données avec un motif — protège contre la récupération par les utilitaires logiciels standards, mais des techniques de laboratoire avancées peuvent encore restaurer les données. Le purging vise l'irrécupérabilité même en laboratoire ; l'erasing (simple suppression) ne protège de rien ; la destruction élimine le support.",
      "difficulte": 2,
      "pourquoi": [
        "Bonne réponse : le clearing résiste aux outils logiciels standards mais pas aux techniques de laboratoire avancées.",
        "Trop faible : l'erasing (suppression simple) ne résiste même pas aux outils standards.",
        "Hors définition : la destruction élimine le support lui-même.",
        "Trop fort pour la définition : le purging vise l'irrécupérabilité même en laboratoire."
      ]
    },
    {
      "q": "An organization is disposing of solid-state drives (SSDs) that contained highly sensitive data. Which method would be INEFFECTIVE?",
      "choix": [
        "Incineration",
        "Physical shredding",
        "Degaussing",
        "Cryptographic erasure"
      ],
      "reponse": 2,
      "explication": "Le degaussing applique un champ magnétique puissant : il efface bandes et disques magnétiques, mais n'a AUCUN effet sur les SSD, qui stockent l'information dans de la mémoire flash, ni sur les supports optiques. Pour un SSD : destruction physique (broyage, incinération) ou crypto-shredding. « Degaussing + SSD » est un piège récurrent de l'examen.",
      "difficulte": 1,
      "pourquoi": [
        "Efficace sur SSD : l'incinération est une destruction physique.",
        "Efficace sur SSD : le broyage détruit physiquement les puces mémoire.",
        "Bonne réponse : le degaussing n'agit que sur les supports magnétiques — aucun effet sur la mémoire flash.",
        "Efficace sur SSD : le crypto-shredding rend les données logiquement irrécupérables."
      ]
    },
    {
      "q": "A company is terminating its contract with a cloud provider and wants assurance that its data cannot be recovered from the provider's infrastructure. Which of the following is the BEST approach?",
      "choix": [
        "Delete all files and empty the recycle bin before leaving",
        "Cryptographic erasure: destroy the encryption keys protecting the data",
        "Request that the provider degauss all storage arrays",
        "Ask the provider for a certificate of physical destruction of the disks"
      ],
      "reponse": 1,
      "explication": "Dans le cloud, on ne contrôle pas les supports physiques mutualisés : ni degaussing ni destruction physique ne sont réalistes pour VOS seules données. Le crypto-shredding — chiffrer les données puis détruire les clés — les rend logiquement irrécupérables où qu'elles résident. La simple suppression laisse une rémanence totale.",
      "difficulte": 2,
      "pourquoi": [
        "Piège du faux effacement : la suppression logique laisse une rémanence totale chez le fournisseur.",
        "Bonne réponse : détruire les clés rend les données logiquement irrécupérables où qu'elles résident — la seule méthode maîtrisée par le client.",
        "Irréaliste en cloud : les baies mutualisées du fournisseur ne peuvent pas être dégaussées pour un seul client.",
        "Vrai mais déclaratif : un certificat n'est qu'une attestation, et la destruction physique de disques mutualisés est irréaliste pour un seul client."
      ]
    },
    {
      "q": "Which of the following BEST describes the difference between End-of-Life (EOL) and End-of-Support (EOS)?",
      "choix": [
        "EOL is when support ends; EOS is when sales end",
        "They are synonyms used interchangeably by vendors",
        "EOL applies to hardware only; EOS applies to software only",
        "EOL is when the vendor stops selling the product; EOS is when the vendor stops providing patches and assistance"
      ],
      "reponse": 3,
      "explication": "L'EOL marque la fin de la commercialisation ; l'EOS (ou EOSL) marque la fin de tout support : plus de correctifs de sécurité ni d'assistance. Les deux jalons s'appliquent au matériel comme au logiciel. Du point de vue du risque, l'EOS est le signal critique : toute vulnérabilité découverte ensuite reste ouverte à jamais.",
      "difficulte": 1,
      "pourquoi": [
        "Inversion des définitions : c'est exactement le contraire.",
        "Faux : les deux termes désignent des jalons distincts du cycle de vie.",
        "Faux : les deux jalons s'appliquent au matériel comme au logiciel.",
        "Bonne réponse : EOL = fin de commercialisation ; EOS = fin des correctifs et de l'assistance."
      ]
    },
    {
      "q": "A security manager learns that a business-critical application reaches End-of-Support in six months. What should the manager do FIRST?",
      "choix": [
        "Wait for the first unpatched vulnerability before acting",
        "Permanently isolate the system and continue operating it",
        "Begin planning the migration or replacement before the EOS date",
        "Renegotiate the license price with the vendor"
      ],
      "reponse": 2,
      "explication": "La bonne réponse managériale est proactive : planifier la migration AVANT l'échéance, tant que le support existe encore. Attendre une vulnérabilité est réactif et dangereux ; l'isolation n'est qu'une mesure compensatoire temporaire, pas une stratégie ; le prix des licences est hors sujet sécurité.",
      "difficulte": 2,
      "pourquoi": [
        "Réactif et dangereux : après l'EOS, toute vulnérabilité restera ouverte à jamais.",
        "Mesure compensatoire temporaire au mieux, jamais une stratégie pérenne.",
        "Bonne réponse : la posture managériale proactive est de planifier la migration avant l'échéance.",
        "Hors sujet sécurité : le prix ne réduit pas le risque de vulnérabilités non corrigées."
      ]
    },
    {
      "q": "Which DLP deployment is BEST suited to prevent users from copying sensitive files to USB drives?",
      "choix": [
        "Network-based DLP",
        "A web application firewall",
        "Cloud-based DLP",
        "Endpoint-based DLP"
      ],
      "reponse": 3,
      "explication": "La copie vers un support amovible se produit sur le poste : seul le DLP endpoint-based, exécuté localement, peut la bloquer (comme l'impression). Le DLP réseau n'inspecte que le trafic en bordure, le DLP cloud protège les environnements cloud natifs, et le WAF protège les applications web — aucun ne voit le port USB.",
      "difficulte": 2,
      "pourquoi": [
        "Mauvais point d'observation : le DLP réseau ne voit pas les ports USB des postes.",
        "Hors sujet : le WAF protège les applications web contre le trafic entrant.",
        "Hors périmètre : le DLP cloud protège les environnements cloud natifs.",
        "Bonne réponse : seul le DLP endpoint, exécuté sur le poste, peut bloquer la copie vers un support amovible."
      ]
    },
    {
      "q": "An organization wants its security policies enforced consistently when employees access sanctioned cloud applications. Which solution BEST meets this requirement?",
      "choix": [
        "A network intrusion detection system",
        "A cloud access security broker (CASB)",
        "A security information and event management (SIEM) system",
        "A digital rights management platform"
      ],
      "reponse": 1,
      "explication": "Le CASB se place logiquement entre les utilisateurs et les ressources cloud pour appliquer les politiques de sécurité et de conformité de l'organisation, avec ses quatre piliers : visibilité, sécurité des données, détection des menaces, conformité. Le DRM protège le copyright, l'IDS détecte les intrusions réseau et le SIEM centralise les journaux.",
      "difficulte": 1,
      "pourquoi": [
        "Contrôle détectif réseau : l'IDS n'applique pas de politiques d'accès cloud.",
        "Bonne réponse : le CASB s'interpose entre les utilisateurs et le cloud pour appliquer uniformément les politiques de l'organisation.",
        "Le SIEM centralise et corrèle les journaux, il n'applique pas de politiques cloud.",
        "Hors sujet : le DRM protège des contenus soumis au droit d'auteur."
      ]
    },
    {
      "q": "Which of the following is a core pillar of a CASB?",
      "choix": [
        "Data security",
        "Load balancing",
        "Patch management",
        "Non-repudiation"
      ],
      "reponse": 0,
      "explication": "Les quatre piliers du CASB sont : visibilité, sécurité des données (data security), détection des menaces et conformité. La non-répudiation est un service de sécurité générique, le load balancing une fonction réseau et le patch management une pratique d'exploitation — aucun n'est un pilier du CASB.",
      "difficulte": 2,
      "pourquoi": [
        "Bonne réponse : la sécurité des données est l'un des quatre piliers, avec la visibilité, la détection des menaces et la conformité.",
        "Fonction réseau sans rapport avec le CASB.",
        "Pratique d'exploitation, pas un pilier du CASB.",
        "Service de sécurité générique, pas un pilier du CASB."
      ]
    },
    {
      "q": "A research partner must receive a customer dataset in a form where individual identities can NEVER be reconstructed, even by the sender. Which technique BEST meets this requirement?",
      "choix": [
        "Encryption with a customer-managed key",
        "Anonymization using randomized masking",
        "Pseudonymization with a protected mapping table",
        "Tokenization backed by a secure vault"
      ],
      "reponse": 1,
      "explication": "Seule l'anonymisation — notamment par randomized masking bien réalisé — est permanente et irréversible : les identités sont définitivement supprimées, y compris pour l'émetteur. Pseudonymisation, tokenisation et chiffrement sont réversibles pour qui détient la table, le vault ou la clé : ce sont des quasi-anonymisations.",
      "difficulte": 2,
      "pourquoi": [
        "Réversible : la clé permet toujours le déchiffrement.",
        "Bonne réponse : l'anonymisation par masquage aléatoire est irréversible, y compris pour l'émetteur.",
        "Réversible : la table de correspondance permet la ré-identification, même protégée.",
        "Réversible : le vault conserve la correspondance avec les identités."
      ]
    },
    {
      "q": "In a payment system using tokenization, why does compromising the point-of-sale terminal NOT expose customers' card numbers?",
      "choix": [
        "The terminal stores card numbers encrypted with a merchant key",
        "The terminal hashes the card numbers irreversibly",
        "The terminal only handles random tokens; the real card numbers remain in a secure vault",
        "Card numbers are pseudonymized locally on the terminal"
      ],
      "reponse": 2,
      "explication": "Avec la tokenisation, le terminal ne manipule qu'un jeton aléatoire sans valeur intrinsèque ; la correspondance avec le vrai numéro de carte n'existe que dans le vault de tokenisation sécurisé. Le numéro réel ne transite jamais par le point de vente — sa compromission ne livre donc que des jetons inutilisables ailleurs.",
      "difficulte": 3,
      "pourquoi": [
        "Faux : détenir localement le numéro chiffré et la clé exposerait les cartes en cas de compromission.",
        "Impraticable : un hash irréversible empêcherait de retrouver la carte pour traiter le paiement.",
        "Bonne réponse : le terminal ne voit que des jetons aléatoires ; les vrais numéros restent dans le vault sécurisé.",
        "Dangereux : une pseudonymisation réversible locale exposerait la correspondance sur le terminal."
      ]
    },
    {
      "q": "An organization adopts a NIST control baseline and removes all controls related to wireless networking because no system in scope uses wireless. Which process does this describe?",
      "choix": [
        "Scoping",
        "Tailoring parameters",
        "Hardening",
        "Categorization"
      ],
      "reponse": 0,
      "explication": "Retirer d'une baseline les contrôles qui ne s'appliquent pas aux systèmes visés, c'est le scoping. Il fait partie du processus plus large de tailoring, qui ajoute l'ajustement des paramètres définis par l'organisation et les contrôles compensatoires — mais l'action décrite ici est précisément le scoping. Le hardening durcit une configuration, la categorization évalue l'impact.",
      "difficulte": 2,
      "pourquoi": [
        "Bonne réponse : retirer les contrôles sans objet pour les systèmes visés est précisément le scoping.",
        "Piège du processus englobant : l'ajustement des paramètres est du tailoring, mais l'action décrite est le retrait de contrôles inapplicables.",
        "Hors sujet : le hardening durcit une configuration existante.",
        "Hors phase : la categorization évalue l'impact avant le choix de la baseline."
      ]
    },
    {
      "q": "Which of the following BEST describes tailoring as it goes BEYOND scoping?",
      "choix": [
        "Documenting the asset inventory",
        "Selecting the initial control baseline",
        "Removing controls that do not apply to in-scope systems",
        "Adjusting controls to the mission, specifying organization-defined parameters, and selecting compensating controls"
      ],
      "reponse": 3,
      "explication": "Le tailoring englobe le scoping mais va plus loin : il ajuste l'ensemble des contrôles à la mission de l'organisation — identification des contrôles communs, spécification des paramètres définis par l'organisation, sélection de contrôles compensatoires. Le scoping seul se limite à retirer l'inapplicable.",
      "difficulte": 3,
      "pourquoi": [
        "Hors sujet : l'inventaire relève de la gestion des actifs.",
        "Hors phase : le choix de la baseline précède le tailoring.",
        "Trop étroit : retirer l'inapplicable n'est que le scoping.",
        "Bonne réponse : le tailoring ajuste les contrôles à la mission — paramètres définis par l'organisation et contrôles compensatoires inclus."
      ]
    },
    {
      "q": "A country's law requires that all personal data of its citizens be stored and processed within its national borders. Which concept does this describe?",
      "choix": [
        "Data localization",
        "Data sovereignty",
        "Data minimization",
        "Data residency"
      ],
      "reponse": 0,
      "explication": "La data localization est l'exigence LÉGALE de conserver (et parfois traiter) les données dans les frontières du pays — comme en Russie ou en Chine. La sovereignty est le principe général selon lequel la donnée est soumise aux lois du pays où elle réside ; la residency est le CHOIX du lieu de stockage par l'organisation ; la minimization limite la collecte.",
      "difficulte": 2,
      "pourquoi": [
        "Bonne réponse : l'obligation légale de stocker et traiter sur le territoire national est la data localization.",
        "Piège du terme voisin : la sovereignty est le principe général de soumission aux lois locales, pas l'obligation décrite.",
        "Hors sujet : la minimisation limite la collecte, pas la localisation.",
        "Piège du terme voisin : la residency est un choix volontaire de l'organisation, pas une contrainte légale."
      ]
    },
    {
      "q": "A European company stores personal data with a US cloud provider in an EU region. Which measure BEST mitigates the risk of a CLOUD Act request conflicting with GDPR?",
      "choix": [
        "Prohibiting all cloud usage for personal data",
        "Relying solely on the EU location of the cloud region",
        "Transferring GDPR compliance responsibility to the cloud provider",
        "Encrypting the data with customer-managed keys, combined with strong contractual clauses"
      ],
      "reponse": 3,
      "explication": "Le CLOUD Act peut contraindre un fournisseur américain à remettre des données même stockées en Europe : la localisation seule ne protège pas. Le chiffrement avec des clés détenues par le client rend les données remises inexploitables, complété par des clauses contractuelles. La responsabilité du controller ne se transfère jamais, et bannir le cloud est disproportionné.",
      "difficulte": 3,
      "pourquoi": [
        "Absolu et disproportionné face au besoin métier.",
        "Fausse assurance : le CLOUD Act s'applique au fournisseur américain indépendamment de la localisation des données.",
        "Impossible juridiquement : la responsabilité de conformité du controller ne se transfère jamais.",
        "Bonne réponse : des clés gérées par le client rendent les données remises inexploitables, complétées par des clauses contractuelles solides."
      ]
    },
    {
      "q": "Which of the following BEST explains why an accurate asset inventory is a prerequisite for security management?",
      "choix": [
        "It speeds up procurement of replacement hardware",
        "It allows the finance department to depreciate assets correctly",
        "An organization cannot protect assets it does not know exist",
        "It is required by all software license agreements"
      ],
      "reponse": 2,
      "explication": "Le principe fondateur de la gestion des actifs : on ne peut pas protéger un actif dont on ignore l'existence. L'inventaire — matériel, logiciels, licences, VM, données — est le point de départ de la classification, du patching, de la surveillance et du déprovisioning. Les bénéfices comptables ou d'achat sont accessoires.",
      "difficulte": 1,
      "pourquoi": [
        "Bénéfice d'achat sans lien avec la sécurité.",
        "Bénéfice comptable accessoire, sans lien avec la sécurité.",
        "Bonne réponse : on ne peut pas protéger un actif dont on ignore l'existence — l'inventaire précède tout contrôle.",
        "Généralisation abusive : les licences ne l'exigent pas toutes, et ce n'est pas l'enjeu de sécurité."
      ]
    },
    {
      "q": "Despite maintaining a manually updated asset register, an audit finds several unknown servers on the network. Which control BEST addresses this gap?",
      "choix": [
        "Disabling all unused switch ports",
        "Automated and continuous asset discovery feeding the CMDB",
        "A more detailed annual manual inventory campaign",
        "Disciplinary action against system administrators"
      ],
      "reponse": 1,
      "explication": "Un inventaire déclaratif se périme entre deux campagnes. La découverte automatisée et continue — scans réseau, agents, intégration DHCP et annuaire — détecte en permanence les actifs non déclarés et alimente la CMDB. L'inventaire annuel reste ponctuel, la sanction ne corrige pas le processus, et couper des ports n'inventorie rien.",
      "difficulte": 2,
      "pourquoi": [
        "Techniquement vrai mais hors objectif : couper des ports n'inventorie rien.",
        "Bonne réponse : la découverte continue alimente la CMDB et détecte en permanence les actifs non déclarés.",
        "Piège du même processus en mieux : une campagne manuelle se périme entre deux passages.",
        "Piège de la cause humaine : la sanction ne corrige pas le processus défaillant."
      ]
    },
    {
      "q": "During secure provisioning of a new virtual machine, which step ensures accountability throughout the asset's lifecycle?",
      "choix": [
        "Taking an initial snapshot",
        "Assigning a static IP address",
        "Registering the VM in the inventory and tagging it with its owner, classification, and environment",
        "Installing endpoint protection software"
      ],
      "reponse": 2,
      "explication": "Le provisioning sécurisé exige d'enregistrer l'actif dans l'inventaire et de le taguer dès sa création — owner, classification, environnement. Sans owner assigné, personne n'est responsable du patching ni du déprovisioning : la VM risque de devenir orpheline, donc non maintenue. IP, snapshot et antivirus sont utiles mais n'établissent pas la responsabilité.",
      "difficulte": 2,
      "pourquoi": [
        "Utile mais hors sujet : un snapshot facilite la restauration, pas l'accountability.",
        "Réponse de technicien : une IP fixe identifie la machine, pas son responsable.",
        "Bonne réponse : inventaire + tags (owner, classification, environnement) garantissent un responsable identifiable durant tout le cycle de vie.",
        "Utile mais hors sujet : l'antivirus protège la VM sans établir de responsabilité."
      ]
    },
    {
      "q": "Which of the following BEST describes the PRIMARY risk created by shadow IT?",
      "choix": [
        "Duplicated tooling across departments increasing integration complexity",
        "Corporate data flows into services that are not inventoried, assessed, or protected by organizational controls",
        "Increased software licensing costs",
        "Reduced network bandwidth for approved applications"
      ],
      "reponse": 1,
      "explication": "Le shadow IT — services et actifs adoptés sans approbation de l'IT — crée avant tout un problème de VISIBILITÉ : des données d'entreprise partent vers des services ni inventoriés, ni évalués, ni couverts par les contrôles (DLP, sauvegarde, conformité). Les coûts et la bande passante sont des préoccupations mineures en comparaison.",
      "difficulte": 1,
      "pourquoi": [
        "Vrai mais architectural : la complexité d'intégration est un problème d'urbanisation, pas le risque de sécurité principal.",
        "Bonne réponse : le risque premier est la perte de visibilité — des données partent vers des services non inventoriés, non évalués et non protégés.",
        "Vrai mais mineur : le coût des licences est un enjeu financier secondaire.",
        "Préoccupation opérationnelle marginale face au risque sur les données."
      ]
    },
    {
      "q": "A CISO wants to discover which unsanctioned cloud services employees are actually using. Which tool BEST provides this visibility?",
      "choix": [
        "A host-based intrusion prevention system",
        "A password manager with SSO integration",
        "A digital rights management solution",
        "A cloud access security broker (CASB)"
      ],
      "reponse": 3,
      "explication": "La visibilité est le premier pilier du CASB : en analysant les flux vers le cloud, il révèle les services réellement utilisés — y compris le shadow IT — puis permet d'y appliquer les politiques. Le DRM protège le copyright, le HIPS protège un hôte, et le gestionnaire de mots de passe ne voit que les services déclarés.",
      "difficulte": 2,
      "pourquoi": [
        "Trop étroit : le HIPS protège un hôte, sans vision des flux cloud.",
        "Trop étroit : le gestionnaire de mots de passe ne voit que les services déclarés par les utilisateurs.",
        "Hors sujet : le DRM protège des contenus, il ne cartographie rien.",
        "Bonne réponse : la visibilité sur les services cloud réellement utilisés — shadow IT compris — est le premier pilier du CASB."
      ]
    },
    {
      "q": "When decommissioning a server that stored Confidential data, which sequence BEST describes a defensible process?",
      "choix": [
        "Revoke its credentials and certificates, sanitize the media per policy and classification, update the inventory, and document the disposal",
        "Remove it from the inventory, then delete all user accounts",
        "Power off the server and ship it to a recycler immediately",
        "Reformat the drives and reinstall the operating system before resale"
      ],
      "reponse": 0,
      "explication": "Un déprovisioning défendable enchaîne : révocation des accès et certificats, assainissement des supports selon la classification et la politique (NIST SP 800-88), mise à jour de l'inventaire, et documentation de l'élimination — la trace écrite rend la destruction légalement défendable. Expédier ou reformater sans assainir laisse une rémanence exploitable.",
      "difficulte": 3,
      "pourquoi": [
        "Bonne réponse : révocation des accès, assainissement selon la classification (SP 800-88), mise à jour de l'inventaire et documentation — la trace écrite rend la destruction défendable.",
        "Incomplet et hors ordre : rien sur l'assainissement des supports ni la révocation des certificats.",
        "Négligence : expédier sans assainir livre la rémanence au recycleur.",
        "Piège du faux effacement : le reformatage laisse une rémanence exploitable avant revente."
      ]
    },
    {
      "q": "During a merger, the acquiring company uses a four-level data classification scheme while the acquired company uses three levels. Business teams must exchange documents immediately after closing. What should the CISO do FIRST?",
      "choix": [
        "Have the data owners of both entities establish a governance-approved mapping between the schemes, defaulting to the higher equivalent protection level",
        "Reclassify every acquired document under the parent company's scheme",
        "Suspend all inter-entity data sharing until a full reclassification is completed",
        "Instruct IT to apply the parent company's technical labels across all acquired repositories"
      ],
      "reponse": 0,
      "explication": "Le besoin d'échange est immédiat : la réponse managériale est un pont de gouvernance — une table de correspondance décidée par les data owners, validée par la gouvernance et protectrice par défaut (niveau équivalent le plus élevé). La reclassification exhaustive viendra ensuite, l'application technique sans mapping court-circuite les owners, et le blocage total sacrifie l'objectif de la fusion.",
      "difficulte": 3,
      "pourquoi": [
        "Bonne réponse : le mapping validé par la gouvernance, protecteur par défaut, permet l'échange immédiat sans sacrifier la sécurité.",
        "Techniquement vrai mais hors phase : la reclassification complète est l'étape suivante, elle ne répond pas au besoin d'échange immédiat.",
        "Absolu : bloquer tout partage sacrifie l'objectif business alors qu'une mesure provisoire de gouvernance suffit.",
        "Réponse de technicien : appliquer des étiquettes sans décision des data owners inverse la gouvernance de la classification."
      ]
    },
    {
      "q": "A multinational's HR application automatically replicates employee data across cloud regions in three jurisdictions for resilience. The privacy officer raises concerns about European employee data. What should the CISO do FIRST?",
      "choix": [
        "Enable the provider's default at-rest encryption in all three regions",
        "Execute standard contractual clauses with the provider to cover all transfers",
        "Map where the data is actually stored and replicated, then restrict European employee data to approved jurisdictions",
        "Migrate the workload to a cloud provider headquartered in the European Union"
      ],
      "reponse": 2,
      "explication": "Avant tout instrument technique ou juridique, il faut la visibilité : cartographier les localisations et les flux réels, puis restreindre la réplication aux juridictions autorisées. Les clauses contractuelles couvrent des transferts qu'il faut d'abord identifier et minimiser, le chiffrement par défaut laisse les clés au fournisseur, et changer de fournisseur est disproportionné avant l'analyse.",
      "difficulte": 3,
      "pourquoi": [
        "Réponse de technicien : le chiffrement par défaut, clés chez le fournisseur, ne traite pas la question juridictionnelle de la réplication.",
        "Techniquement vrai mais hors phase : les SCC s'appliquent à des transferts qu'il faut d'abord avoir identifiés et minimisés.",
        "Bonne réponse : cartographier d'abord, restreindre ensuite — la gouvernance des localisations précède les instruments contractuels et techniques.",
        "Absolu et disproportionné : changer de fournisseur avant l'analyse traite le symptôme au prix fort."
      ]
    },
    {
      "q": "A data science team sponsored by executive leadership plans to fine-tune an internal generative AI model on customer support transcripts that contain personal data and contract excerpts. Which requirement should the CISO impose FIRST?",
      "choix": [
        "Host the model on internal infrastructure rather than in the cloud",
        "Inventory, classify, and minimize the training corpus, with data owner approval, before any training begins",
        "Filter the model's outputs through a DLP solution before release",
        "Require the team to sign an acceptable-use policy for artificial intelligence"
      ],
      "reponse": 1,
      "explication": "Le corpus d'entraînement est un actif de données : il doit être inventorié, classifié et minimisé avant l'entraînement, avec l'accord des data owners — car un modèle mémorise, et revenir en arrière après coup est très difficile. L'hébergement, la charte et le filtrage des sorties sont des contrôles utiles mais situés en aval de l'ingestion.",
      "difficulte": 3,
      "pourquoi": [
        "Réponse de technicien : le lieu d'hébergement ne change rien à l'ingestion de données non maîtrisées.",
        "Bonne réponse : gouvernance des données AVANT l'entraînement — un modèle ne « désapprend » pas facilement ce qu'il a mémorisé.",
        "Techniquement vrai mais hors phase : le filtrage des sorties intervient après l'ingestion et ne garantit pas l'absence de régurgitation.",
        "Gouvernance de façade : une charte encadre les usages, pas le contenu du corpus."
      ]
    },
    {
      "q": "An organization's retention schedule automatically deletes email after 18 months. Legal counsel advises that litigation related to a past project is reasonably anticipated, and the next automated purge runs next month. What should be done FIRST?",
      "choix": [
        "Export every employee mailbox to an isolated long-term archive",
        "Allow the scheduled purge to proceed, because the approved retention policy governs",
        "Wait for formal service of the lawsuit before altering the deletion schedule",
        "Place a legal hold suspending automated deletion for the relevant data and document its scope with legal counsel"
      ],
      "reponse": 3,
      "explication": "L'obligation de préservation naît dès l'anticipation raisonnable du litige : le legal hold suspend la destruction pour le périmètre défini avec le juridique et documenté. Laisser la purge s'exécuter exposerait à une accusation de spoliation, tout archiver est disproportionné, et attendre l'assignation formelle arriverait trop tard.",
      "difficulte": 3,
      "pourquoi": [
        "Disproportionné : préserver la totalité des boîtes élargit coûts et exposition au lieu du périmètre pertinent.",
        "Piège de la politique-refuge : la politique interne ne protège pas d'une accusation de destruction de preuves — l'obligation légale prime.",
        "Hors phase : l'obligation naît avant l'assignation — attendre détruirait des preuves potentielles.",
        "Bonne réponse : le legal hold ciblé et documenté, déclenché dès l'anticipation raisonnable, est l'action immédiate attendue."
      ]
    },
    {
      "q": "A government agency determines that documents classified Secret ten years ago no longer require that level of protection. What is the MOST appropriate course of action?",
      "choix": [
        "Destroy the documents, since their classification is now obsolete",
        "Keep the Secret classification unchanged, because lowering it would create unnecessary risk",
        "Follow the formal declassification process, with approval from the data owner, before lowering the protection level",
        "Allow custodians to relabel the documents as Unclassified as they access them"
      ],
      "reponse": 2,
      "explication": "La déclassification est un processus formel, approuvé par le data owner : la sensibilité diminue souvent avec le temps, et maintenir des protections coûteuses sur des données devenues banales est de la sur-classification. Détruire des documents encore utiles n'est pas une réponse à une classification obsolète, conserver le niveau par prudence gaspille des ressources, et laisser les custodians ré-étiqueter au fil de l'eau court-circuite l'autorité du owner et tout processus formel.",
      "difficulte": 2,
      "pourquoi": [
        "Hors sujet : l'obsolescence de la classification ne signifie pas que la donnée n'a plus de valeur — la destruction relève de la politique de rétention, pas de la déclassification.",
        "Piège de la fausse prudence : sur-classifier gaspille des ressources et pousse au contournement — la réponse CISSP est la protection proportionnée, pas maximale.",
        "Bonne réponse : la déclassification est un processus formel décidé par le data owner — jamais un ajustement improvisé.",
        "Violation des rôles : le custodian applique les protections, il ne décide pas du niveau de classification — seul le owner a cette autorité."
      ]
    },
    {
      "q": "A multinational company must demonstrate to customers and regulators in several countries that its security management system meets a recognized, certifiable standard. Which framework BEST meets this requirement?",
      "choix": [
        "NIST Cybersecurity Framework",
        "ISO/IEC 27001",
        "CIS Critical Security Controls",
        "NIST SP 800-53"
      ],
      "reponse": 1,
      "explication": "ISO/IEC 27001 est le seul référentiel de la liste qui définit un système de management de la sécurité (ISMS) certifiable par un organisme accrédité et reconnu internationalement — exactement ce qu'exigent clients et régulateurs multi-pays. Le NIST CSF est un cadre volontaire sans mécanisme de certification, les CIS Controls sont un ensemble prescriptif de mesures techniques priorisées, et NIST SP 800-53 est un catalogue de contrôles conçu pour le secteur fédéral américain — aucun des trois ne délivre de certification du système de management.",
      "difficulte": 3,
      "pourquoi": [
        "Techniquement utile mais non certifiable : le NIST CSF structure et communique un programme de gestion des risques, il n'offre aucune certification formelle.",
        "Bonne réponse : ISO/IEC 27001 est l'ISMS certifiable et internationalement reconnu — la preuve formelle attendue par des clients et régulateurs de plusieurs pays.",
        "Mauvais niveau : les CIS Controls priorisent des mesures techniques — excellents pour agir, mais ils ne certifient pas un système de management.",
        "Mauvais contexte : SP 800-53 est un catalogue de contrôles orienté fédéral américain, pas un standard de certification international du management de la sécurité."
      ]
    }
  ],
  "flashcards": [
    {
      "recto": "Data Owner",
      "verso": "Personne (souvent cadre dirigeant ou chef de département) qui classifie la donnée, autorise l'accès et porte la responsabilité ultime (accountability) de sa protection. Délègue les tâches, jamais l'accountability."
    },
    {
      "recto": "Data Custodian",
      "verso": "Rôle délégué chargé des tâches quotidiennes de protection : stockage correct, sauvegardes, archivage, prévention de la perte et restauration des données."
    },
    {
      "recto": "Data Controller vs Data Processor",
      "verso": "Le controller décide quelles données traiter, pourquoi et comment ; le processor traite les données pour le compte et sous la direction du controller (ex. prestataire de paie). Rôles clés du GDPR."
    },
    {
      "recto": "Data Steward",
      "verso": "Rôle qui porte la responsabilité MÉTIER de la donnée : qualité, gouvernance, conformité, définition des métadonnées."
    },
    {
      "recto": "DPO (Data Protection Officer)",
      "verso": "Rôle de leadership indépendant qui supervise la stratégie de protection de la vie privée de l'organisation et garantit la conformité aux exigences légales comme le GDPR."
    },
    {
      "recto": "System Owner",
      "verso": "Responsable du système qui stocke ou traite la donnée : développe et maintient le System Security Plan (NIST SP 800-18), assure exploitation, patching et formation sécurité des utilisateurs."
    },
    {
      "recto": "PII / PHI",
      "verso": "PII : toute information permettant d'identifier ou de tracer un individu (NIST SP 800-122). PHI : information de santé rattachable à une personne, encadrée par HIPAA pour tout organisme qui la manipule."
    },
    {
      "recto": "Labeling vs Marking",
      "verso": "Labeling : attributs de sécurité lisibles par le SYSTÈME (métadonnées, RFID, QR codes) → application automatique. Marking : forme lisible par l'HUMAIN (tampon, bandeau) → application par les processus."
    },
    {
      "recto": "Clearance",
      "verso": "Habilitation qui détermine à quel niveau de classification de données ou d'équipements une personne peut accéder. L'accès requiert en plus le besoin d'en connaître (need-to-know)."
    },
    {
      "recto": "Need-to-know vs Least Privilege",
      "verso": "Need-to-know : accès uniquement aux DONNÉES nécessaires à la mission. Least privilege : uniquement les PRIVILÈGES nécessaires aux tâches, et rien de plus."
    },
    {
      "recto": "Les trois data states",
      "verso": "At rest : stockée sur un support → chiffrement. In transit : transmise sur un réseau → TLS, IPsec. In use : en mémoire, traitée par une application → patching, builds standardisés, purge des buffers (le plus difficile à protéger)."
    },
    {
      "recto": "Data Remanence",
      "verso": "Données subsistant sur un support après un effacement supposé : flux magnétique résiduel, fragments dans le slack space (espace inutilisé des clusters). À éliminer avant réutilisation ou mise au rebut du support."
    },
    {
      "recto": "Clearing vs Purging",
      "verso": "Clearing : réécriture qui protège contre la récupération par outils logiciels standards seulement. Purging : vise l'irrécupérabilité par toute technique connue, y compris en laboratoire — mais reste inacceptable pour du Top Secret."
    },
    {
      "recto": "Degaussing",
      "verso": "Effacement par champ magnétique puissant : efficace sur bandes et disques magnétiques, AUCUN effet sur les SSD et les supports optiques."
    },
    {
      "recto": "Crypto-shredding (cryptographic erasure)",
      "verso": "Chiffrer les données avec un chiffrement fort puis détruire la clé, rendant les données logiquement irrécupérables. Meilleure méthode contre la rémanence dans le cloud."
    },
    {
      "recto": "EOL vs EOS/EOSL",
      "verso": "End-of-Life : le vendeur cesse de commercialiser le produit. End-of-Support / End-of-Service-Life : fin de tout support et des correctifs de sécurité — le vrai signal de risque à anticiper."
    },
    {
      "recto": "DRM (Digital Rights Management)",
      "verso": "Méthodes de protection des contenus soumis au droit d'auteur : empêche usage, modification et distribution non autorisés. La protection voyage avec la donnée, quel que soit son état."
    },
    {
      "recto": "DLP et ses trois types",
      "verso": "Data Loss Prevention : détecte et bloque l'exfiltration. Network-based : en bordure de réseau, scanne le trafic sortant. Endpoint-based : bloque impression et copie USB. Cloud-based : pour les environnements cloud natifs."
    },
    {
      "recto": "CASB (Cloud Access Security Broker)",
      "verso": "Logiciel placé logiquement entre les utilisateurs et les ressources cloud, garantissant que le cloud bénéficie des mêmes politiques que le réseau interne. Quatre piliers : visibilité, sécurité des données, détection des menaces, conformité."
    },
    {
      "recto": "Anonymization vs Pseudonymization vs Tokenization",
      "verso": "Anonymisation : suppression permanente et IRRÉVERSIBLE des identités (ex. randomized masking). Pseudonymisation : alias RÉVERSIBLE via une table externe. Tokenisation : jeton aléatoire sans valeur, l'original restant dans un vault (réversible)."
    },
    {
      "recto": "Scoping vs Tailoring",
      "verso": "Scoping : retirer d'une baseline les contrôles qui ne s'appliquent pas aux systèmes visés. Tailoring : processus plus large d'ajustement à la mission — inclut le scoping, les paramètres définis par l'organisation et les contrôles compensatoires."
    },
    {
      "recto": "Security Baseline",
      "verso": "Niveau minimal documenté de configuration de sécurité autorisé par un standard ou l'organisation. Point de départ à affiner ensuite par scoping et tailoring."
    },
    {
      "recto": "TEMPEST",
      "verso": "Technologies limitant les émanations électromagnétiques des équipements pour contrer le Van Eck phreaking. Contre-mesures : cages de Faraday, bruit blanc, zones de contrôle, blindage."
    },
    {
      "recto": "Defensible destruction",
      "verso": "Élimination des données de manière contrôlée, légalement défendable et conforme aux réglementations — la méthode de destruction doit être définie par la politique selon la classification (NIST SP 800-88)."
    },
    {
      "recto": "Data localization vs Data residency vs Data sovereignty",
      "verso": "Localization : la LOI impose de garder la donnée dans le pays (Russie, Chine). Residency : CHOIX par l'organisation du lieu de stockage (conformité, latence). Sovereignty : la donnée est soumise aux LOIS du pays où elle réside physiquement."
    },
    {
      "recto": "CLOUD Act vs GDPR",
      "verso": "Le CLOUD Act américain peut obliger un fournisseur US à remettre des données même stockées hors des États-Unis, en tension avec le GDPR. Mitigations : clauses contractuelles, choix des régions cloud, chiffrement avec clés gérées par le client."
    }
  ]
};
