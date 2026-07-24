/* Mindset — données générées ; voir js/mindset.js */
window.CISSP_DATA = window.CISSP_DATA || { domains: {} };
window.CISSP_DATA.mindset = {
  "principes": [
    {
      "icone": "🚑",
      "titre": "La vie humaine d'abord",
      "texte": "Face à tout scénario impliquant un danger physique, la sécurité des personnes (human safety) prime sur les données, les systèmes et la continuité d'activité. Aucun actif informationnel ne vaut une vie : c'est la valeur suprême de la profession et de l'éthique (ISC)². Si une option protège des personnes et une autre protège des serveurs, la question est déjà résolue. Ce principe s'applique aussi à la conception : issues de secours, systèmes d'extinction respectueux des occupants, plans d'évacuation avant plans de reprise.",
      "exemple": "Question : « Un incendie se déclare dans le datacenter, que faire en PREMIER ? » Entre déclencher le failover, sauvegarder les données et évacuer le personnel, la réponse est toujours l'évacuation. Toute option « safety of personnel » gagne d'office."
    },
    {
      "icone": "👔",
      "titre": "Think like a manager, pas comme un technicien",
      "texte": "Le CISSP vous place dans le fauteuil d'un CISO ou d'un security manager, jamais dans celui de l'administrateur qui tape des commandes. Vous ne configurez pas le firewall : vous décidez s'il faut un firewall, pourquoi, avec quel budget et qui en sera responsable. Les réponses centrées sur une manipulation technique précise sont presque toujours des pièges. Demandez-vous : « Que ferait un dirigeant responsable de la sécurité de toute l'organisation ? » plutôt que « Comment je réglerais ça en ligne de commande ? ».",
      "exemple": "Question : « Comment traiter au MIEUX des vulnérabilités récurrentes ? » Le technicien répond « patcher les serveurs » ; le manager répond « établir un programme de vulnerability management ». La réponse programme/gouvernance gagne."
    },
    {
      "icone": "🧭",
      "titre": "Le processus avant l'action",
      "texte": "Quand une question demande la PREMIÈRE chose à faire, la bonne réponse est rarement une action immédiate : c'est presque toujours une étape de processus — évaluer, analyser, planifier, consulter la policy, obtenir l'approbation du management. Agir sans comprendre est un réflexe de technicien ; comprendre avant d'agir est un réflexe de manager. Le CISSP récompense la démarche structurée : risk assessment avant contrôle, Business Impact Analysis (BIA) avant plan de continuité, investigation avant remédiation.",
      "exemple": "Question : « Une nouvelle réglementation s'applique à votre secteur, que faites-vous en PREMIER ? » Entre « acheter un outil de conformité » et « déterminer l'applicabilité et réaliser une gap analysis », la gap analysis gagne : on évalue avant d'agir."
    },
    {
      "icone": "🏢",
      "titre": "La portée organisationnelle avant la solution technique",
      "texte": "Une réponse qui couvre toute l'organisation (policy, programme, gouvernance, culture) bat presque toujours une réponse qui ne corrige qu'un système ou un symptôme. Le CISSP raisonne en top-down : la mission et les objectifs business dictent la stratégie de sécurité, qui dicte les policies, qui dictent les contrôles techniques. Si deux réponses semblent correctes, choisissez celle qui a l'impact le plus large et le plus durable. Corriger un serveur résout un incident ; corriger le processus empêche le suivant.",
      "exemple": "Question : « Des employés cliquent régulièrement sur des liens de phishing, quelle est la MEILLEURE réponse ? » Entre « bloquer ce domaine expéditeur » et « mettre en place un programme de security awareness », le programme organisationnel gagne."
    },
    {
      "icone": "⚖️",
      "titre": "Le risque se gère, il ne s'élimine pas",
      "texte": "Il n'existe pas de sécurité à 100 % et le CISSP le sait : l'objectif est de réduire le risque à un niveau acceptable pour la direction, pas de le faire disparaître. Les quatre traitements du risque sont mitigate, transfer, avoid et accept — et il reste toujours un residual risk, formellement accepté par le management. Toute réponse qui promet d'« éliminer », « garantir » ou « supprimer totalement » un risque trahit une incompréhension fondamentale. La sécurité est un arbitrage permanent entre protection, coût et fonctionnement du business.",
      "exemple": "Question : « Quel est l'objectif PRINCIPAL d'un programme de gestion des risques ? » Entre « éliminer toutes les menaces » et « réduire le risque à un niveau acceptable pour l'organisation », la réduction à un niveau acceptable gagne — l'élimination est impossible."
    },
    {
      "icone": "💰",
      "titre": "Coût/bénéfice : la sécurité au service du business",
      "texte": "Un contrôle de sécurité ne se justifie que si son coût est inférieur à la valeur du risque qu'il réduit : on ne dépense pas 100 000 € pour protéger un actif qui en vaut 10 000. Le manager CISSP raisonne en Annualized Loss Expectancy (ALE), en retour sur investissement et en valeur pour la mission, pas en « meilleure techno du marché ». La sécurité existe pour permettre au business d'atteindre ses objectifs, pas l'inverse. Face à deux contrôles efficaces, choisissez le plus proportionné, pas le plus sophistiqué.",
      "exemple": "Question : « Comment choisir un contrôle pour un risque identifié ? » Entre « sélectionner la solution la plus avancée technologiquement » et « sélectionner un contrôle dont le coût est proportionné à la réduction du risque », l'analyse coût/bénéfice gagne."
    },
    {
      "icone": "🎯",
      "titre": "La direction est responsable en dernier ressort (accountability)",
      "texte": "Le senior management porte l'accountability ultime de la sécurité : c'est lui qui approuve les policies, accepte les risques résiduels et répond devant les régulateurs et les actionnaires. On peut déléguer des responsabilités (responsibility) — au data owner, au custodian, au security officer — mais jamais l'accountability. De même, le data owner décide de la classification et des règles d'accès ; le custodian ne fait qu'appliquer. Quand une question demande « qui décide / qui approuve / qui est responsable en dernier ressort », cherchez le rôle le plus haut placé et le plus proche du business.",
      "exemple": "Question : « Qui doit accepter formellement le risque résiduel d'une application métier ? » Entre l'administrateur système, l'auditeur et le senior management (ou le business owner), c'est toujours le management/owner qui accepte le risque."
    },
    {
      "icone": "📖",
      "titre": "Lire toute la question avant les réponses",
      "texte": "La communauté r/cissp le répète : lisez le scénario en entier, identifiez ce qui est réellement demandé, reformulez la question dans vos propres mots — et seulement ensuite regardez les options. Les scénarios CISSP noient l'essentiel sous des détails distracteurs ; la vraie question tient souvent dans la dernière phrase. Beaucoup de candidats échouent parce qu'ils répondent à la question qu'ils imaginent, pas à celle qui est posée. Repérez le rôle que l'on vous donne (CISO ? auditeur ? consultant ?) et le moment du scénario (avant, pendant ou après l'incident ?).",
      "exemple": "Un long scénario décrit une attaque ransomware, puis demande « quelle mesure aurait PRÉVENU cet incident ? ». Ceux qui lisent trop vite choisissent une action de réponse à incident (restore des backups) alors que la question porte sur la prévention (patch management)."
    },
    {
      "icone": "🔑",
      "titre": "Décoder FIRST, BEST, MOST, PRIMARY",
      "texte": "Ces mots-clés changent complètement la réponse attendue et sont mis là pour départager quatre options souvent toutes « vraies ». FIRST/NEXT demande l'ordre chronologique du processus (souvent : évaluer, ou assurer la sécurité des personnes). BEST/MOST effective demande l'option la plus large, la plus durable, la plus alignée sur le business. PRIMARY demande la raison d'être fondamentale, pas un bénéfice secondaire. MOST important demande ce sans quoi tout le reste s'effondre — souvent le support du senior management.",
      "exemple": "Question : « Quel est le facteur le PLUS important du succès d'un programme de sécurité ? » Formation, outils, budget… tous utiles, mais « le soutien du senior management » gagne : sans lui, rien d'autre n'existe."
    },
    {
      "icone": "🚫",
      "titre": "Se méfier des absolus et des extrêmes",
      "texte": "Les réponses contenant « toujours », « jamais », « tous », « aucun », « garantit », « élimine » sont statistiquement presque toujours fausses : la sécurité vit dans la nuance et le contexte. De même, les options extrêmes — tout interdire, tout chiffrer, tout débrancher, licencier immédiatement — ignorent l'équilibre entre sécurité et besoins du business. Éliminez d'abord ces réponses absolues ou disproportionnées : il en restera deux plausibles, et vos principes (processus, portée, coût/bénéfice) départageront. Cette technique d'élimination transforme une question difficile en choix binaire.",
      "exemple": "Question : « Comment traiter les risques liés au BYOD ? » L'option « interdire définitivement tous les appareils personnels » s'élimine d'un coup d'œil : trop absolue, hostile au business. La bonne réponse sera une policy encadrant l'usage avec des contrôles proportionnés (MDM, etc.)."
    }
  ],
  "drills": [
    {
      "q": "Un incendie se déclare dans le bâtiment qui héberge votre datacenter principal pendant les heures de bureau. En tant que responsable sécurité présent sur place, que faites-vous en PREMIER ?",
      "choix": [
        "Copier les sauvegardes critiques sur un support externe",
        "Lancer le basculement (failover) vers le site de secours",
        "Éteindre manuellement les serveurs pour limiter les dégâts",
        "Déclencher la procédure d'évacuation du personnel"
      ],
      "pieges": [
        0,
        2
      ],
      "reponse": 3,
      "pourquoiPieges": "Copier des sauvegardes et éteindre des serveurs pendant un incendie mettent des vies en danger pour protéger du matériel : dès qu'une option « personnes » existe, toute option « matériel/données » exécutée sur place s'élimine d'un coup d'œil.",
      "explication": "L'évacuation bat le failover : la vie humaine prime toujours sur la continuité d'activité. Le failover est légitime, mais il vient APRÈS la mise en sécurité des personnes — et il peut souvent être déclenché à distance.",
      "regle": "La vie humaine d'abord"
    },
    {
      "q": "Votre organisation vient d'apprendre qu'une nouvelle réglementation de protection des données s'appliquera à son secteur dans 18 mois. En tant que CISO, quelle est la PREMIÈRE chose à faire ?",
      "choix": [
        "Chiffrer immédiatement toutes les données de l'entreprise",
        "Attendre les premières sanctions du régulateur pour calibrer l'effort",
        "Déterminer l'applicabilité de la réglementation et mener une gap analysis",
        "Acquérir une suite logicielle de conformité recommandée par un cabinet"
      ],
      "pieges": [
        0,
        1
      ],
      "reponse": 2,
      "pourquoiPieges": "« Chiffrer toutes les données » est un absolu technique disproportionné décidé sans analyse ; « attendre les sanctions » est une négligence délibérée contraire à la due diligence. Les deux s'éliminent immédiatement.",
      "explication": "La gap analysis bat l'achat d'un outil : on évalue d'abord ce que la réglementation exige et où l'on se situe, puis on décide des moyens. Acheter une solution avant d'avoir défini le besoin, c'est agir avant de comprendre.",
      "regle": "Le processus avant l'action"
    },
    {
      "q": "Lors d'une revue, vous découvrez que des employés partagent des fichiers clients via des services cloud personnels non approuvés. Quelle est la MEILLEURE réponse à long terme ?",
      "choix": [
        "Interdire tout accès à Internet depuis les postes de travail",
        "Mettre en place une policy d'usage du cloud avec une alternative approuvée et un programme de sensibilisation",
        "Licencier les employés concernés pour violation de sécurité",
        "Bloquer sur le proxy les URL des services cloud identifiés"
      ],
      "pieges": [
        2,
        0
      ],
      "reponse": 1,
      "pourquoiPieges": "Licencier immédiatement est disproportionné (aucune enquête, la policy n'existait peut-être même pas) ; couper tout Internet est un absolu qui tue le business. Deux réponses extrêmes, éliminées d'un coup d'œil.",
      "explication": "La policy + alternative + sensibilisation bat le blocage d'URL : bloquer quelques domaines traite un symptôme (le shadow IT se déplacera ailleurs), tandis que la réponse organisationnelle traite la cause en donnant aux employés un moyen légitime de travailler.",
      "regle": "La portée organisationnelle avant la solution technique"
    },
    {
      "q": "Le comité de direction vous demande de justifier l'objectif PRINCIPAL du programme de gestion des risques de l'information. Que répondez-vous ?",
      "choix": [
        "Réduire les risques à un niveau acceptable défini par la direction",
        "Éliminer toutes les menaces pesant sur les actifs informationnels",
        "Ramener le risque résiduel à zéro avant chaque audit",
        "Déployer les contrôles de sécurité les plus récents du marché"
      ],
      "pieges": [
        1,
        2
      ],
      "reponse": 0,
      "pourquoiPieges": "« Éliminer toutes les menaces » et « risque résiduel à zéro » sont des absolus impossibles : le risque zéro n'existe pas. Toute promesse d'élimination totale s'élimine elle-même.",
      "explication": "« Réduire à un niveau acceptable » bat « déployer les derniers contrôles » : les outils sont des moyens, pas un objectif. Le programme de risk management existe pour aligner le niveau de risque sur l'appétence (risk appetite) définie par la direction.",
      "regle": "Le risque se gère, il ne s'élimine pas"
    },
    {
      "q": "Une analyse quantitative montre qu'un risque a une Annualized Loss Expectancy (ALE) de 20 000 €. Un fournisseur propose un contrôle qui le réduirait presque totalement pour 150 000 € par an. Quelle est la MEILLEURE décision ?",
      "choix": [
        "Acheter le contrôle : la sécurité n'a pas de prix",
        "Demander au fournisseur une démonstration technique approfondie",
        "Ignorer ce risque puisqu'il est trop cher à traiter",
        "Évaluer d'autres traitements du risque (transfert, contrôles moins coûteux, acceptation)"
      ],
      "pieges": [
        0,
        2
      ],
      "reponse": 3,
      "pourquoiPieges": "« La sécurité n'a pas de prix » nie le raisonnement coût/bénéfice (dépenser 150 k€ pour éviter 20 k€ de perte annuelle est indéfendable) ; « ignorer le risque » n'est pas un traitement — l'acceptation est une décision formelle, pas de l'oubli.",
      "explication": "Explorer les autres traitements bat la démonstration technique : le problème n'est pas de savoir si l'outil fonctionne, mais que son coût dépasse largement la perte attendue. Le manager cherche un traitement proportionné : assurance (transfer), contrôle moins cher (mitigate) ou acceptation formelle.",
      "regle": "Coût/bénéfice : la sécurité au service du business"
    },
    {
      "q": "Dans le cadre du programme de classification des données, qui doit déterminer le niveau de classification d'un nouveau jeu de données métier ?",
      "choix": [
        "Le data owner",
        "Le data custodian, car il applique les contrôles au quotidien",
        "Le prestataire cloud qui stocke physiquement les données",
        "L'administrateur de la base de données qui héberge les données"
      ],
      "pieges": [
        3,
        2
      ],
      "reponse": 0,
      "pourquoiPieges": "L'administrateur de base de données est un rôle purement technique sans autorité sur la valeur métier des données ; le prestataire cloud est un tiers totalement hors périmètre de décision. Les deux s'éliminent d'un coup d'œil.",
      "explication": "Le data owner bat le custodian : le custodian applique les protections décidées, mais c'est l'owner — responsable métier — qui connaît la valeur et la sensibilité des données et qui rend des comptes. La décision suit l'accountability, pas l'exécution.",
      "regle": "La direction est responsable en dernier ressort (accountability)"
    },
    {
      "q": "Votre équipe de développement propose de créer son propre algorithme de chiffrement « plus rapide et secret » pour protéger les échanges d'une application sensible (Domaine 3). Quelle est la MEILLEURE recommandation ?",
      "choix": [
        "Doubler la longueur de clé de l'algorithme maison pour compenser",
        "Utiliser des algorithmes standards éprouvés et publiquement analysés (ex : AES)",
        "Approuver : un algorithme secret est plus difficile à attaquer",
        "Interdire tout chiffrement pour éviter les problèmes de performance"
      ],
      "pieges": [
        3,
        0
      ],
      "reponse": 1,
      "pourquoiPieges": "« Interdire tout chiffrement » est un absolu absurde pour une application sensible ; « doubler la clé d'un algorithme maison » est un bricolage technique qui ne corrige pas le vice de conception. Élimination immédiate.",
      "explication": "Les standards éprouvés battent le secret : c'est le principe de Kerckhoffs — la sécurité doit reposer sur la clé, pas sur le secret de l'algorithme. La « security through obscurity » est un anti-pattern classique que l'examen adore piéger.",
      "regle": "Se méfier des absolus et des extrêmes"
    },
    {
      "q": "L'entreprise envisage de migrer une application métier critique vers un fournisseur IaaS. En tant que security manager, que faites-vous en PREMIER ?",
      "choix": [
        "Migrer d'abord un petit lot de données de production pour tester la sécurité réelle",
        "Choisir le fournisseur le moins cher pour maximiser le retour sur investissement",
        "Réaliser un risk assessment de la migration incluant les exigences légales et contractuelles",
        "Configurer les security groups et le chiffrement des volumes chez le fournisseur"
      ],
      "pieges": [
        3,
        1
      ],
      "reponse": 2,
      "pourquoiPieges": "Configurer les security groups est une tâche de technicien qui présuppose une décision jamais analysée ; choisir « le moins cher » ignore totalement le risque et la due diligence. Deux réponses hors rôle, éliminées d'emblée.",
      "explication": "Le risk assessment bat le test avec des données de production : exposer de vraies données pour « tester » crée le risque qu'on cherche à évaluer. Le manager évalue les risques, les obligations (localisation des données, clauses contractuelles, shared responsibility model) AVANT toute action.",
      "regle": "Le processus avant l'action"
    },
    {
      "q": "Quelle est la raison PRINCIPALE de segmenter un réseau d'entreprise (Domaine 4) ?",
      "choix": [
        "Empêcher définitivement toute attaque interne",
        "Permettre l'usage de VLAN tagging 802.1Q sur les commutateurs",
        "Réduire le nombre d'adresses IP consommées par le DHCP",
        "Limiter la propagation d'une compromission et réduire la surface d'exposition"
      ],
      "pieges": [
        2,
        0
      ],
      "reponse": 3,
      "pourquoiPieges": "L'économie d'adresses DHCP est un détail opérationnel sans rapport avec la sécurité ; « empêcher définitivement toute attaque » est un absolu impossible. Élimination immédiate.",
      "explication": "La limitation de propagation bat le VLAN tagging : 802.1Q est un moyen technique de segmenter, pas une raison. PRIMARY demande le pourquoi managérial (containment, moindre exposition), jamais le comment technique.",
      "regle": "Décoder FIRST, BEST, MOST, PRIMARY"
    },
    {
      "q": "Un employé quitte l'entreprise en mauvais termes ce matin (Domaine 5). Quelle est la PREMIÈRE mesure de sécurité à prendre ?",
      "choix": [
        "Effacer son compte et toutes ses données personnelles des systèmes",
        "Prévenir la presse pour protéger la réputation de l'entreprise",
        "Désactiver l'ensemble de ses accès logiques et physiques",
        "Archiver sa boîte mail pour une éventuelle enquête"
      ],
      "pieges": [
        0,
        1
      ],
      "reponse": 2,
      "pourquoiPieges": "Effacer le compte et les données détruit des éléments potentiellement nécessaires à une enquête (et viole la rétention légale) ; prévenir la presse est absurde et hors sujet. Deux options éliminées d'un coup d'œil.",
      "explication": "La désactivation des accès bat l'archivage de la boîte mail : dans un départ conflictuel, le risque immédiat est l'usage malveillant des accès encore actifs. On désactive (sans détruire) d'abord, on préserve et archive ensuite.",
      "regle": "Think like a manager, pas comme un technicien"
    },
    {
      "q": "Un test d'intrusion commandité révèle une vulnérabilité critique exploitable sur une application exposée sur Internet (Domaine 6). En tant que responsable du programme, que faites-vous en PREMIER ?",
      "choix": [
        "Suspendre définitivement l'application concernée",
        "Publier la vulnérabilité en interne pour sensibiliser les développeurs",
        "Réécrire immédiatement le module vulnérable vous-même",
        "Évaluer le risque et informer le management pour prioriser la remédiation"
      ],
      "pieges": [
        2,
        0
      ],
      "reponse": 3,
      "pourquoiPieges": "Réécrire le code soi-même est un réflexe de technicien hors du rôle de manager ; suspendre « définitivement » une application métier est un extrême disproportionné décidé sans analyse d'impact. Élimination immédiate.",
      "explication": "L'évaluation du risque et l'information du management battent la communication de sensibilisation : les résultats d'un pentest alimentent d'abord la décision de traitement (prioriser, corriger, compenser) portée par le management, la pédagogie vient ensuite.",
      "regle": "Le processus avant l'action"
    },
    {
      "q": "Votre SOC détecte un ransomware en train de chiffrer les fichiers d'un serveur de production (Domaine 7). Quelle est la PREMIÈRE action appropriée ?",
      "choix": [
        "Contenir l'incident en isolant le système conformément au plan de réponse à incident",
        "Formater le serveur et restaurer les sauvegardes immédiatement",
        "Envoyer un e-mail à toute l'entreprise pour annoncer la compromission",
        "Payer la rançon rapidement pour minimiser l'interruption"
      ],
      "pieges": [
        3,
        2
      ],
      "reponse": 0,
      "pourquoiPieges": "Payer la rançon finance le crime, ne garantit rien et n'est jamais la réponse attendue ; l'e-mail à toute l'entreprise est une communication non maîtrisée qui peut alerter l'attaquant et créer la panique. Élimination immédiate.",
      "explication": "Le containment selon le plan bat le formatage immédiat : formater détruit les preuves (forensics) et peut restaurer avant d'avoir compris le vecteur d'entrée — l'attaquant reviendra. Le cycle de réponse à incident (detect, respond/contain, mitigate, report, recover, remediate, lessons learned) impose de contenir d'abord.",
      "regle": "Le processus avant l'action"
    },
    {
      "q": "Vous lancez l'élaboration du Business Continuity Plan (BCP) de l'organisation (Domaine 7). Quel élément est le PLUS important pour la réussite du projet ?",
      "choix": [
        "La liste exhaustive des numéros de téléphone des employés",
        "Le soutien et l'engagement formels du senior management",
        "Un générateur électrique de secours dans chaque bâtiment",
        "Un outil logiciel spécialisé de gestion de crise"
      ],
      "pieges": [
        0,
        2
      ],
      "reponse": 1,
      "pourquoiPieges": "L'annuaire téléphonique et les générateurs sont des composants opérationnels de niveau détail — utiles, mais absurdes comme facteur « le PLUS important » d'un programme entier. Élimination immédiate.",
      "explication": "Le soutien du management bat l'outil logiciel : sans sponsorship de la direction, pas de budget, pas de priorité, pas de participation des métiers — le BCP reste un document mort. « MOST important » pointe presque toujours vers ce sans quoi tout le reste s'effondre.",
      "regle": "Décoder FIRST, BEST, MOST, PRIMARY"
    },
    {
      "q": "Votre organisation veut réduire durablement le nombre de vulnérabilités dans ses applications développées en interne (Domaine 8). Quelle est la MEILLEURE approche ?",
      "choix": [
        "Ajouter un scan de vulnérabilités automatisé juste avant chaque mise en production",
        "Confier la sécurité à un audit externe annuel qui garantira un code sans défaut",
        "Intégrer la sécurité dès la phase d'exigences et tout au long du SDLC",
        "Interdire aux développeurs d'utiliser des bibliothèques open source"
      ],
      "pieges": [
        3,
        1
      ],
      "reponse": 2,
      "pourquoiPieges": "Interdire tout l'open source est un absolu irréaliste qui ne rend pas le code interne plus sûr ; un audit annuel qui « garantit un code sans défaut » promet l'impossible. Élimination immédiate.",
      "explication": "La sécurité intégrée au SDLC bat le scan pré-production : le scan tardif détecte quelques défauts en bout de chaîne, alors que « shift left » (exigences, design, code review, tests) prévient leur introduction. Corriger tôt coûte des ordres de grandeur moins cher.",
      "regle": "La portée organisationnelle avant la solution technique"
    },
    {
      "q": "L'entreprise met au rebut des SSD ayant contenu des données classifiées « confidentiel » (Domaine 2). Quelle est la MEILLEURE façon de procéder ?",
      "choix": [
        "Stocker indéfiniment tous les disques dans un carton au sous-sol",
        "Appliquer la méthode de sanitization définie par la policy pour ce niveau de classification (ex : destruction ou crypto-erase)",
        "Effectuer un formatage rapide de chaque disque avant don à une association",
        "Supprimer manuellement les fichiers visibles puis vider la corbeille"
      ],
      "pieges": [
        2,
        3
      ],
      "reponse": 1,
      "pourquoiPieges": "Le formatage rapide et la suppression de fichiers ne retirent pas réellement les données (data remanence) — ce sont des gestes de particulier, pas de professionnel. Élimination immédiate.",
      "explication": "La sanitization pilotée par la policy bat le stockage indéfini : entasser les disques ne fait que déplacer et prolonger le risque (perte, vol, oubli). La bonne réponse relie toujours la méthode de destruction au niveau de classification défini par l'organisation.",
      "regle": "La portée organisationnelle avant la solution technique"
    },
    {
      "q": "Après un incident majeur résolu, le RSSI veut s'assurer que l'organisation en tire profit (Domaine 7). Quelle est la MEILLEURE étape finale du processus de réponse à incident ?",
      "choix": [
        "Conduire une revue post-incident (lessons learned) et mettre à jour processus et contrôles",
        "Racheter immédiatement le dernier outil EDR du marché",
        "Sanctionner l'analyste qui a mis du temps à détecter l'attaque",
        "Classer le dossier rapidement pour ne pas inquiéter la direction"
      ],
      "pieges": [
        2,
        3
      ],
      "reponse": 0,
      "pourquoiPieges": "Sanctionner un individu installe une culture du blâme qui dissuade de signaler les incidents ; cacher le dossier à la direction viole le devoir de reporting et la transparence. Élimination immédiate.",
      "explication": "La revue lessons learned bat l'achat d'outil : acheter un EDR sans analyse répond peut-être à côté du vrai problème (processus, détection, formation ?). La dernière phase du cycle de réponse à incident consiste précisément à améliorer le dispositif à partir des faits.",
      "regle": "Le processus avant l'action"
    }
  ],
  "reformulations": [
    {
      "contexte": "Le CEO vous demande pourquoi il devrait investir 200 000 € dans une solution DLP (Data Loss Prevention).",
      "technicien": "Le DLP inspecte les flux SMTP et HTTPS, fait du fingerprinting de fichiers et bloque les patterns regex de numéros de carte. C'est la techno la plus mature du marché.",
      "options": [
        "C'est un outil très puissant qui analyse tout le trafic sortant et détecte des centaines de formats de données ; toutes les grandes entreprises en ont un.",
        "Nos données clients sont un actif stratégique : une fuite nous exposerait à environ 2 M€ entre sanctions réglementaires, perte de clients et atteinte à la réputation. Cet investissement de 200 k€ réduit significativement ce risque et soutient nos engagements de conformité.",
        "Sans DLP, nous serons hackés tôt ou tard et ce sera la catastrophe ; il faut signer avant la fin du trimestre."
      ],
      "meilleure": 1,
      "pourquoi": "La formulation experte quantifie le risque (exposition estimée vs coût du contrôle), parle la langue du CEO (actif, clients, réputation, conformité) et présente la sécurité comme un investissement au service du business — ni catalogue de features, ni discours de peur."
    },
    {
      "contexte": "Vous présentez l'état de la sécurité au board pour la première fois, en dix minutes.",
      "technicien": "On a patché 1 243 CVE ce trimestre, le SIEM ingère 80 Go de logs par jour et on a déployé l'EDR sur 92 % du parc.",
      "options": [
        "Voici le détail de nos métriques : volume de logs, taux de couverture antivirus, nombre de règles firewall et tickets fermés par le SOC.",
        "La cybersécurité est un sujet trop technique pour être résumé ; faites-nous confiance, tout est sous contrôle.",
        "Voici nos trois risques majeurs alignés sur les objectifs de l'entreprise, leur évolution depuis le dernier trimestre, et les décisions que nous vous demandons d'arbitrer, avec leur coût et leur impact."
      ],
      "meilleure": 2,
      "pourquoi": "Le board gouverne : il veut des risques reliés à la stratégie, des tendances et des décisions à prendre — pas des métriques opérationnelles. La formulation experte positionne le RSSI comme conseiller de la gouvernance et respecte l'accountability de la direction."
    },
    {
      "contexte": "Un auditeur externe vous interroge sur une non-conformité : des comptes à privilèges sans MFA ont été découverts.",
      "technicien": "Ouais, c'est un vieux serveur legacy, le MFA n'est pas compatible avec cette appli, on n'a jamais eu le temps de s'en occuper, mais personne ne l'attaque jamais.",
      "options": [
        "Nous confirmons l'écart. Un risque a été documenté, un contrôle compensatoire est en place (accès restreint par bastion et journalisé), et un plan de remédiation daté a été approuvé par le management, dont voici le suivi.",
        "Cette non-conformité est mineure et votre référentiel est trop strict pour notre contexte ; nous contestons le constat.",
        "C'est la faute de l'équipe infrastructure, nous, côté sécurité, avions bien signalé le problème dans un e-mail il y a deux ans."
      ],
      "meilleure": 0,
      "pourquoi": "Face à un auditeur, l'expert reconnaît le constat factuellement, démontre la maîtrise du risque (documentation, contrôle compensatoire, plan de remédiation approuvé) et matérialise la gouvernance. Ni déni, ni rejet de faute : des faits, des preuves, un plan."
    },
    {
      "contexte": "Après une fuite de données, un journaliste vous appelle pour obtenir une déclaration au nom de l'entreprise.",
      "technicien": "L'attaquant a exploité une injection SQL sur notre API v2 non patchée, il a exfiltré la table users complète avant qu'on kill les sessions.",
      "options": [
        "Aucun commentaire, nous ne confirmons rien et nous vous prions de ne rien publier.",
        "Nous avons identifié un incident de sécurité, pris des mesures de confinement et notifié les autorités compétentes. Les personnes concernées sont informées conformément à la réglementation, et l'enquête se poursuit avec des experts. Toute communication passe par notre porte-parole désigné.",
        "C'était une attaque extrêmement sophistiquée qu'aucune entreprise au monde n'aurait pu arrêter ; nos systèmes sont désormais totalement sécurisés."
      ],
      "meilleure": 1,
      "pourquoi": "La formulation experte suit le plan de communication de crise : reconnaître sans détailler techniquement (ne jamais donner le mode opératoire), montrer la maîtrise (confinement, notification légale, enquête) et canaliser via le porte-parole. Le déni bloque la confiance ; « totalement sécurisés » est un absolu intenable."
    },
    {
      "contexte": "Un chef de projet refuse d'intégrer vos exigences de sécurité : « ça va retarder la mise en production de trois semaines ».",
      "technicien": "C'est non négociable, la policy exige un pentest et du chiffrement AES-256, sinon je bloque la mise en prod au CAB.",
      "options": [
        "D'accord, mettez en production, on verra la sécurité plus tard dans une version 2.",
        "Je bloque le projet ; la sécurité passe avant les délais, c'est comme ça.",
        "Regardons ensemble les risques : sans ces contrôles, le projet expose des données clients réglementées — en cas d'incident, c'est le lancement lui-même qui est menacé. Priorisons les exigences selon le risque et voyons ce qui peut être phasé, puis faisons arbitrer le risque résiduel par le sponsor."
      ],
      "meilleure": 2,
      "pourquoi": "L'expert traduit les exigences en risques pour le projet lui-même, propose une priorisation proportionnée (toutes les exigences ne se valent pas) et fait porter l'acceptation du risque résiduel au bon niveau : le sponsor/management. Ni capitulation, ni blocage autoritaire : partenariat et arbitrage éclairé."
    },
    {
      "contexte": "Au lendemain d'un incident ransomware maîtrisé, le COMEX vous demande « comment éviter que ça se reproduise ».",
      "technicien": "On a déjà réinstallé les serveurs et changé les mots de passe ; on va acheter le nouvel EDR avec IA dont tout le monde parle.",
      "options": [
        "La revue post-incident identifie trois causes racines : patching irrégulier, sauvegardes non testées et droits d'accès excessifs. Voici un plan de remédiation priorisé par risque avec coûts et échéances, et l'indicateur de suivi que nous vous proposons de revoir trimestriellement.",
        "Ce genre d'attaque est imprévisible ; nous avons eu de la malchance, mais l'incident est clos et tout est réparé.",
        "Il faut doubler le budget de l'équipe sécurité immédiatement, sinon je ne peux plus rien garantir."
      ],
      "meilleure": 0,
      "pourquoi": "La formulation experte s'appuie sur les lessons learned (causes racines factuelles), propose un plan priorisé par le risque avec coût et jalons, et installe un suivi de gouvernance. Pas de fatalisme, pas de chantage budgétaire : des faits, un plan, une mesure."
    },
    {
      "contexte": "Vous défendez votre budget sécurité annuel devant le CFO, qui demande des coupes de 15 %.",
      "technicien": "Impossible de couper : il nous faut le renouvellement des licences firewall, le SIEM, deux sondes réseau et un abonnement threat intelligence. Tout est indispensable.",
      "options": [
        "Chaque ligne budgétaire est reliée à un risque pour l'activité : voici ce que couvre chaque investissement, l'exposition qu'une coupe de 15 % rouvrirait, et trois scénarios d'arbitrage avec leur risque résiduel — l'acceptation de ce risque relevant de la direction.",
        "Couper la sécurité, c'est comme rouler sans assurance : si vous le faites, la prochaine attaque sera de votre responsabilité personnelle.",
        "Les autres entreprises du secteur dépensent plus que nous ; nous devrions plutôt augmenter le budget de 20 %."
      ],
      "meilleure": 0,
      "pourquoi": "L'expert parle au CFO en termes d'exposition financière et de scénarios d'arbitrage, relie chaque euro à un risque business et replace la décision d'acceptation du risque au niveau de la direction (accountability). La menace personnelle et le benchmark sans analyse ne sont pas des arguments de gestion."
    },
    {
      "contexte": "La direction veut migrer le CRM vers un SaaS et vous demande votre avis sécurité en réunion de direction.",
      "technicien": "Le SaaS c'est risqué : on perd la main sur l'infra, on ne sait pas où sont les VM, et leur API OAuth a déjà eu des CVE.",
      "options": [
        "Je déconseille le cloud : on ne contrôle plus rien et les fuites de données y sont permanentes.",
        "La migration est envisageable si nous maîtrisons les risques clés : due diligence sur le fournisseur (certifications, localisation des données), clauses contractuelles de sécurité et de réversibilité, et compréhension du shared responsibility model — je propose un risk assessment formel pour éclairer votre décision.",
        "Aucun problème, les fournisseurs SaaS sont de toute façon plus sécurisés que nous ; signons."
      ],
      "meilleure": 1,
      "pourquoi": "L'expert n'est ni bloqueur ni béni-oui-oui : il conditionne l'opportunité business à une gestion structurée du risque (due diligence, contrat, shared responsibility) et propose le processus (risk assessment) qui permettra à la direction de décider en connaissance de cause."
    },
    {
      "contexte": "Un vendeur historique, critique pour la production, refuse de remplir votre questionnaire de sécurité annuel.",
      "technicien": "Ils ne veulent pas répondre au questionnaire, donc je propose qu'on coupe leur accès VPN dès lundi.",
      "options": [
        "Tant pis, c'est un partenaire de confiance depuis dix ans, dispensons-le d'évaluation.",
        "Ce fournisseur est critique pour la production : son refus augmente notre risque tiers au-delà du niveau accepté. Je propose d'activer les clauses d'audit du contrat, d'évaluer des mesures alternatives d'assurance (certification, attestation indépendante) et de faire arbitrer par la direction si le blocage persiste.",
        "Coupons tous ses accès immédiatement pour lui montrer que la sécurité ne plaisante pas."
      ],
      "meilleure": 1,
      "pourquoi": "L'expert traite le sujet comme du third-party risk management : criticité business, leviers contractuels, moyens d'assurance alternatifs, puis escalade vers la direction pour arbitrage. Ni confiance aveugle fondée sur l'ancienneté, ni sanction unilatérale qui casserait la production."
    },
    {
      "contexte": "Le DRH trouve le programme de security awareness « infantilisant » et propose de le supprimer pour économiser.",
      "technicien": "On ne peut pas supprimer les e-learnings : c'est exigé par l'ISO 27001 et j'ai déjà payé la plateforme de phishing simulé pour l'année.",
      "options": [
        "L'humain est notre premier vecteur d'incident : 60 % de nos événements de sécurité partent d'un clic. Plutôt que supprimer, je propose de refondre le programme — formats courts, ciblés par métier — et de mesurer son effet sur le taux de clic et de signalement, indicateurs que nous suivrons ensemble.",
        "Supprimer la sensibilisation serait une faute grave dont vous porterez seul la responsabilité devant la direction.",
        "D'accord pour tout supprimer si vous signez une décharge écrite."
      ],
      "meilleure": 0,
      "pourquoi": "L'expert appuie sa position sur des données internes (part des incidents d'origine humaine), transforme la critique en amélioration du programme (formats adaptés au métier) et propose des métriques partagées — l'awareness devient un investissement mesurable, pas une contrainte réglementaire subie."
    }
  ]
};
