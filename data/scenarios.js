/* Scénarios de cas réels — données générées ; voir js/scenarios.js */
window.CISSP_DATA = window.CISSP_DATA || { domains: {} };
window.CISSP_DATA.scenarios = [
  {
    "id": "sc-1",
    "domaine": 1,
    "titre": "Fusion-acquisition : la due diligence oubliée",
    "icone": "🤝",
    "difficulte": 2,
    "contexte": "Vous êtes RSSI (CISO) du groupe hôtelier Meridiana, qui vient de signer une lettre d'intention pour racheter StayEasy, une chaîne concurrente disposant d'un programme de fidélité de 40 millions de clients. La direction veut boucler l'acquisition en trois mois pour des raisons boursières. Le directeur financier vous convoque : « La sécurité ne doit pas ralentir le deal. » Vous découvrez que l'équipe M&A n'a prévu aucune évaluation de sécurité de la cible. Vous vous souvenez qu'une grande chaîne hôtelière a payé très cher la compromission héritée d'une société rachetée.",
    "etapes": [
      {
        "situation": "La direction vous demande votre avis avant la phase de due diligence. Vous n'avez pour l'instant aucune information sur la posture de sécurité de StayEasy.",
        "q": "Quelle est la MEILLEURE action à entreprendre EN PREMIER ?",
        "choix": [
          "Lancer un scan de vulnérabilités externe sur les serveurs de StayEasy pour évaluer leur exposition",
          "Exiger contractuellement que StayEasy soit certifiée ISO 27001 avant la signature",
          "Demander l'intégration d'une évaluation des risques de sécurité (security due diligence) dans le processus de due diligence global",
          "Attendre la finalisation de l'acquisition pour auditer le SI de la cible en toute légalité"
        ],
        "reponse": 2,
        "pourquoi": [
          "Techniquement faisable mais illégal : scanner les systèmes d'un tiers sans autorisation écrite constitue une intrusion.",
          "Vrai levier contractuel, mais irréaliste en trois mois — et une certification ne révèle ni les incidents passés ni les passifs.",
          "Bonne réponse : le risque de sécurité doit entrer dans la décision d'affaires via la due diligence, avant tout engagement.",
          "Attendre la clôture revient à acheter un risque inconnu : la due diligence existe précisément pour l'éviter."
        ],
        "explication": "Le rôle du RSSI est d'intégrer le risque de sécurité dans la décision d'affaires : la due diligence doit inclure une évaluation de la posture de sécurité, des incidents passés et des passifs (liabilities) de la cible. Scanner les systèmes d'un tiers sans autorisation (A) est illégal. Exiger une certification (B) est irréaliste dans le délai et ne remplace pas une évaluation. Attendre la clôture (D) signifie acheter un risque inconnu — c'est exactement l'erreur des cas célèbres.",
        "concept": "Risk Management — Security Due Diligence en M&A"
      },
      {
        "situation": "Votre équipe obtient l'accès aux questionnaires et interviews. StayEasy avoue « un incident mineur » il y a deux ans, jamais notifié aux clients. Les journaux (logs) de l'époque ont été partiellement conservés.",
        "q": "Que devez-vous faire EN PREMIER face à cette révélation ?",
        "choix": [
          "Exiger l'arrêt immédiat des négociations",
          "Faire évaluer par les conseils juridiques et l'équipe M&A l'impact de ce passif (legal liability) sur la valorisation et les clauses du contrat",
          "Informer immédiatement la CNIL de la violation passée au nom de StayEasy",
          "Demander à votre SOC d'analyser discrètement le réseau de StayEasy"
        ],
        "reponse": 1,
        "pourquoi": [
          "Arrêter le deal est une décision de la direction : le RSSI éclaire le risque, il ne décide pas à sa place.",
          "Bonne réponse : un passif juridique se qualifie avec le juridique et l'équipe M&A pour ajuster valorisation, garanties et clauses.",
          "Vous n'avez ni autorité ni mandat pour notifier à la place de StayEasy, entité juridique encore distincte.",
          "Analyser le réseau d'un tiers sans autorisation reste une intrusion, même avec de bonnes intentions."
        ],
        "explication": "Une violation non notifiée est un passif juridique et financier majeur : la bonne réponse managériale est de la faire qualifier par le juridique et de l'intégrer dans la négociation (garanties, ajustement de prix, clauses d'indemnisation). Vous n'avez pas autorité pour notifier à la place de StayEasy (C). Arrêter le deal (A) est une décision de la direction, pas du RSSI : votre rôle est d'informer le risque. L'option D reste une intrusion non autorisée.",
        "concept": "Governance — rôle consultatif du RSSI, Due Care de l'acquéreur"
      },
      {
        "situation": "L'acquisition est signée avec des garanties contractuelles. La direction veut interconnecter les deux réseaux « dès la semaine prochaine » pour unifier les réservations.",
        "q": "Quelle approche recommandez-vous pour l'interconnexion des SI ?",
        "choix": [
          "Migrer d'abord tous les utilisateurs de StayEasy dans l'Active Directory de Meridiana",
          "Refuser toute interconnexion tant que StayEasy n'a pas atteint le niveau de maturité de Meridiana",
          "Interconnecter immédiatement : le contrat couvre désormais les risques",
          "Traiter le réseau de StayEasy comme non fiable (untrusted) : segmentation, contrôles compensatoires et interconnexion progressive après évaluation technique"
        ],
        "reponse": 3,
        "pourquoi": [
          "Fusionner les annuaires en premier propagerait une compromission éventuelle : le vecteur classique des attaques post-acquisition.",
          "Refus absolu : bloque le business sans le protéger — la sécurité doit permettre l'intégration, pas l'empêcher.",
          "Le contrat transfère une partie du risque financier, jamais le risque opérationnel d'une compromission qui se propage.",
          "Bonne réponse : traiter le SI acquis comme untrusted (segmentation, contrôles compensatoires, intégration progressive) équilibre business et risque."
        ],
        "explication": "Tant que la posture réelle n'est pas vérifiée, le réseau acquis doit être traité comme une zone de moindre confiance : segmentation, filtrage, supervision renforcée, puis intégration par étapes selon les résultats des évaluations. Le contrat (C) transfère une partie du risque financier mais pas le risque opérationnel. Un refus absolu (B) bloque le business sans le protéger. Fusionner les annuaires en premier (A) propagerait une éventuelle compromission — c'est le vecteur classique des attaques post-acquisition.",
        "concept": "Risk Treatment — contrôles compensatoires, intégration sécurisée post-M&A"
      },
      {
        "situation": "Six semaines plus tard, l'évaluation technique révèle des malwares dormants sur trois serveurs de StayEasy, présents depuis avant l'acquisition. Aucune donnée ne semble avoir été exfiltrée récemment.",
        "q": "En tant que RSSI, quelle est votre MEILLEURE action ?",
        "choix": [
          "Déclencher le processus de réponse à incident, préserver les preuves et informer la direction et le juridique pour activer les garanties contractuelles",
          "Licencier l'ancien administrateur système de StayEasy",
          "Faire nettoyer discrètement les serveurs pour ne pas inquiéter la direction",
          "Débrancher définitivement tout le réseau StayEasy"
        ],
        "reponse": 0,
        "pourquoi": [
          "Bonne réponse : processus formel de réponse à incident, preuves préservées (chain of custody) et garanties contractuelles activées.",
          "Sanction prématurée : aucune enquête n'a établi de responsabilité individuelle.",
          "Nettoyer discrètement détruit les preuves et viole le devoir de transparence (due care) envers la direction.",
          "Disproportionné : la segmentation en place contient déjà le risque ; une coupure totale punirait le business inutilement."
        ],
        "explication": "Un incident avéré exige le processus formel : containment, préservation des preuves (chain of custody) — indispensables pour invoquer les garanties négociées — et information de la direction. Nettoyer discrètement (C) détruit les preuves et viole le devoir de transparence (Due Care). Sanctionner sans enquête (B) est prématuré. Une coupure totale (D) est disproportionnée puisque la segmentation mise en place contient déjà le risque.",
        "concept": "Incident Response et préservation des preuves au service des clauses contractuelles"
      }
    ],
    "debrief": "Ce scénario, inspiré de l'affaire Marriott/Starwood, illustre que l'on n'achète pas seulement une entreprise : on achète aussi ses risques et ses violations passées. Le RSSI doit intégrer la security due diligence dans tout projet M&A, faire qualifier les passifs par le juridique, et traiter le SI acquis comme non fiable jusqu'à preuve du contraire. Retenez la posture CISSP : le RSSI informe et conseille, la direction décide ; les preuves se préservent, elles ne se nettoient pas."
  },
  {
    "id": "sc-2",
    "domaine": 1,
    "titre": "E-commerce : 72 heures chrono (GDPR)",
    "icone": "🛒",
    "difficulte": 2,
    "contexte": "Vous êtes DPO adjoint et responsable sécurité de ModaClick, un site e-commerce français de prêt-à-porter (2 millions de clients européens). Un lundi matin à 8h15, votre SOC externalisé vous alerte : un script malveillant de type web skimming (à la Magecart) a été injecté dans la page de paiement, probablement depuis dix jours. Les données de cartes bancaires et les adresses des clients ont pu être captées. Le PDG, en déplacement, vous demande de « gérer ça sans faire de vagues ». Le compte à rebours réglementaire vient de commencer.",
    "etapes": [
      {
        "situation": "L'alerte vient de tomber. Le script est toujours actif sur la page de paiement et les clients continuent de commander.",
        "q": "Que faites-vous EN PREMIER ?",
        "choix": [
          "Notifier la CNIL immédiatement, avant toute autre action",
          "Publier un communiqué de presse pour devancer les médias",
          "Contenir l'incident : retirer le script malveillant et sécuriser la page de paiement",
          "Analyser les logs des dix derniers jours pour identifier tous les clients touchés"
        ],
        "reponse": 2,
        "pourquoi": [
          "Le délai de 72 h court à partir de la connaissance de la violation : quelques heures pour contenir d'abord sont légitimes et attendues.",
          "La communication publique se prépare ; elle n'est jamais la première action d'un incident en cours.",
          "Bonne réponse : tant que le skimmer est actif, chaque transaction fait de nouvelles victimes — contenir d'abord.",
          "L'analyse exhaustive viendra en parallèle : elle ne stoppe pas l'hémorragie."
        ],
        "explication": "La priorité opérationnelle est de stopper l'hémorragie : tant que le skimmer est actif, chaque transaction expose de nouvelles victimes. La notification (A) doit intervenir sous 72 heures après avoir eu connaissance de la violation, pas avant le containment — vous avez quelques heures pour agir techniquement. La communication (B) et l'analyse exhaustive (D) viennent ensuite. Style CISSP : contenir d'abord, notifier ensuite, analyser en parallèle.",
        "concept": "Incident Response — Containment avant notification"
      },
      {
        "situation": "Le script est retiré, la page est saine. L'investigation préliminaire confirme la captation probable de données de cartes et d'adresses sur dix jours. Le PDG insiste : « On n'est sûrs de rien, attendons d'avoir des certitudes avant de prévenir qui que ce soit. »",
        "q": "Concernant la notification à l'autorité de contrôle (CNIL), quelle est la position CORRECTE ?",
        "choix": [
          "Notifier sous 72 heures à compter de la prise de connaissance, même avec des informations partielles, quitte à compléter ensuite",
          "Le PDG a raison : on ne notifie que lorsque la fuite est prouvée à 100 %",
          "La notification n'est pas requise car les données de cartes relèvent de PCI DSS, pas du GDPR",
          "Notifier uniquement les clients, pas l'autorité"
        ],
        "reponse": 0,
        "pourquoi": [
          "Bonne réponse : notification sous 72 h dès la prise de connaissance, complétée en phases si nécessaire.",
          "Attendre la certitude fait dépasser les 72 h et aggrave la sanction : la vraisemblance suffit à déclencher la notification.",
          "PCI DSS et GDPR se cumulent : des données de paiement liées à des personnes sont des données personnelles.",
          "L'information des personnes est une obligation distincte (en cas de risque élevé) : elle ne remplace pas la notification à l'autorité."
        ],
        "explication": "Le GDPR impose la notification à l'autorité sous 72 heures dès qu'une violation de données personnelles est vraisemblable, avec possibilité de notification en phases (informations complémentaires fournies ultérieurement). Attendre des certitudes (B) fait dépasser le délai et aggrave la sanction. PCI DSS et GDPR se cumulent, ils ne s'excluent pas (C) : les données de paiement associées à des personnes sont des données personnelles. La notification aux personnes concernées (D) est une obligation distincte, en cas de risque élevé.",
        "concept": "GDPR — notification de violation sous 72 h (breach notification)"
      },
      {
        "situation": "La notification CNIL est partie dans les délais. L'analyse montre un risque élevé pour environ 300 000 clients : données de cartes potentiellement exploitables pour de la fraude.",
        "q": "Quelle est la MEILLEURE action vis-à-vis des clients concernés ?",
        "choix": [
          "Publier l'information uniquement dans les conditions générales de vente",
          "Informer sans retard injustifié les clients concernés, en langage clair : nature de la violation, conséquences probables, mesures prises et recommandations (opposition sur carte, vigilance)",
          "Ne rien communiquer tant que la CNIL n'a pas rendu ses conclusions",
          "Envoyer un e-mail générique à toute la base « par précaution » sans mentionner l'incident"
        ],
        "reponse": 1,
        "pourquoi": [
          "Enfouir l'information dans les CGV n'est pas une communication « claire » au sens du GDPR.",
          "Bonne réponse : information sans retard injustifié, claire et actionnable, exigée en cas de risque élevé.",
          "Attendre la CNIL prive les clients de la possibilité de se protéger contre la fraude en cours.",
          "Un message vague qui tait l'incident viole l'esprit et la lettre du règlement, et détruit la confiance."
        ],
        "explication": "En cas de risque élevé pour les droits et libertés, le GDPR impose d'informer les personnes concernées sans retard injustifié, de façon claire et actionnable. Attendre la CNIL (C) prive les clients de la possibilité de se protéger contre la fraude. Un message vague ou dissimulé (C, D) viole l'esprit et la lettre du règlement et détruit la confiance — la transparence est aussi une décision de gestion de réputation.",
        "concept": "GDPR — information des personnes concernées en cas de risque élevé"
      },
      {
        "situation": "La crise est passée. Le comité de direction vous demande comment éviter qu'un tel incident se reproduise et combien investir.",
        "q": "Quelle démarche managériale proposez-vous pour dimensionner l'investissement ?",
        "choix": [
          "Externaliser entièrement le paiement et considérer le sujet clos",
          "Acheter la solution de sécurité web la plus complète du marché",
          "Souscrire une cyber-assurance et ne rien changer techniquement",
          "Conduire une analyse de risque : estimer l'exposition (amendes GDPR, fraude, réputation) et comparer le coût annuel des contrôles à la réduction d'ALE attendue"
        ],
        "reponse": 3,
        "pourquoi": [
          "Excellente mesure de réduction de surface PCI, mais elle ne « clôt » pas le risque : le site reste injectable.",
          "« La solution la plus complète » sans analyse de risque est une dépense non justifiée par l'exposition réelle.",
          "L'assurance transfère une partie du risque financier sans réduire la probabilité — et exige elle-même des contrôles.",
          "Bonne réponse : un contrôle se justifie quand son coût annuel est inférieur à la réduction d'ALE qu'il apporte."
        ],
        "explication": "La décision d'investissement se fonde sur l'analyse de risque quantitative : un contrôle est justifié quand son coût est inférieur à la réduction de perte annualisée (ALE) qu'il apporte. Acheter « le plus complet » (B) sans analyse est du gaspillage. L'externalisation du paiement (A) est une excellente mesure de réduction de surface PCI, mais elle ne « clôt » pas le risque (le site reste injectable). L'assurance seule (C) transfère une partie du risque financier sans réduire la probabilité — et les assureurs exigent des contrôles.",
        "concept": "Risk Analysis quantitative — SLE, ARO, ALE et justification des contrôles"
      },
      {
        "situation": "Vous présentez le plan. Un administrateur suggère de conserver désormais l'intégralité des logs de navigation de tous les clients pendant dix ans « pour faciliter les futures investigations ».",
        "q": "Quelle est la MEILLEURE réponse à cette suggestion ?",
        "choix": [
          "Appliquer les principes de minimisation et de limitation de conservation : ne garder que les données nécessaires, pour une durée justifiée et documentée",
          "Conserver les logs mais les stocker hors d'Europe pour échapper au GDPR",
          "Accepter : plus on a de logs, mieux on investigue",
          "Refuser toute conservation de logs pour respecter la vie privée"
        ],
        "reponse": 0,
        "pourquoi": [
          "Bonne réponse : minimisation et durée de conservation proportionnée à une finalité légitime et documentée.",
          "Le GDPR s'applique aux données de résidents européens où qu'elles soient stockées : la délocalisation ne contourne rien.",
          "Tout conserver dix ans crée un nouveau risque (masse de données personnelles) et une non-conformité de rétention.",
          "Ne rien garder empêche la détection d'incidents et peut violer d'autres obligations légales."
        ],
        "explication": "Le GDPR repose sur la minimisation des données et la limitation de la durée de conservation : la rétention doit être proportionnée à une finalité légitime (par exemple 6 à 12 mois pour la détection d'incidents, selon la politique et les obligations légales). Tout garder dix ans (C) crée un nouveau risque et une non-conformité. Ne rien garder (D) empêche la détection et peut violer d'autres obligations. Délocaliser pour contourner le règlement (B) est illusoire : le GDPR s'applique dès lors que l'on traite des données de résidents européens.",
        "concept": "Privacy by Design — data minimization et retention limitée"
      }
    ],
    "debrief": "Inspiré des campagnes Magecart (notamment l'affaire British Airways), ce scénario montre l'articulation entre réponse à incident et obligations réglementaires : contenir d'abord, notifier l'autorité sous 72 heures même avec des informations partielles, informer les personnes en cas de risque élevé. Retenez aussi que la sécurité se pilote par le risque : les investissements se justifient par la réduction d'ALE, et la protection de la vie privée impose minimisation et durées de conservation limitées. Dissimuler une violation n'est jamais une option — ni éthiquement, ni légalement."
  },
  {
    "id": "sc-3",
    "domaine": 2,
    "titre": "Ministère : le rapport qui n'aurait jamais dû sortir",
    "icone": "🏛️",
    "difficulte": 1,
    "contexte": "Vous venez d'être nommé responsable de la sécurité de l'information d'une direction ministérielle chargée des infrastructures de transport. Un rapport interne sensible sur les vulnérabilités d'ouvrages d'art s'est retrouvé cité dans la presse. L'enquête montre qu'il circulait par e-mail sans aucune mention de sensibilité, qu'il a été imprimé et laissé sur une imprimante partagée. Votre directrice vous confie la mission : « Faites en sorte que cela ne se reproduise plus. » Vous découvrez qu'il n'existe ni politique de classification, ni inventaire des informations sensibles.",
    "etapes": [
      {
        "situation": "Vous devez structurer votre plan d'action. Plusieurs chantiers sont possibles : outils DLP, chiffrement, sensibilisation, classification.",
        "q": "Quelle est la PREMIÈRE étape indispensable ?",
        "choix": [
          "Déployer un outil de DLP (Data Loss Prevention) sur la messagerie",
          "Établir une politique de classification de l'information avec des niveaux définis et des critères clairs",
          "Interdire l'impression de documents",
          "Chiffrer tous les documents du ministère"
        ],
        "reponse": 1,
        "pourquoi": [
          "Un DLP sans classification ne sait pas quoi bloquer : l'outil vient après la politique.",
          "Bonne réponse : on ne protège correctement que ce qui est classifié — la politique définit niveaux, critères et exigences.",
          "Interdire l'impression traite un symptôme de l'incident, pas l'absence de cadre.",
          "Chiffrer tout uniformément est coûteux et disproportionné pour les informations non sensibles."
        ],
        "explication": "On ne peut protéger correctement que ce que l'on a classifié : la politique de classification définit les niveaux (par exemple Public, Diffusion Restreinte, Confidentiel, Secret), les critères et les exigences de manipulation associées. Un DLP (A) sans classification ne sait pas quoi bloquer. Chiffrer tout (D) est coûteux et inapplicable uniformément. Interdire l'impression (C) traite un symptôme, pas la cause.",
        "concept": "Data Classification — la classification précède les contrôles"
      },
      {
        "situation": "La politique définit quatre niveaux. Il faut maintenant classifier les milliers de documents et de bases de données de la direction. Vos équipes demandent qui décide du niveau de chaque information.",
        "q": "Qui doit déterminer le niveau de classification d'une information ?",
        "choix": [
          "Chaque agent, librement, pour ses propres documents",
          "Le service informatique, qui héberge les données",
          "Le propriétaire de la donnée (data owner), c'est-à-dire le responsable métier de l'information",
          "Le RSSI, car c'est lui l'expert sécurité"
        ],
        "reponse": 2,
        "pourquoi": [
          "Sans cadre ni responsabilité désignée, chacun classe différemment : c'est l'incohérence qui a causé la fuite.",
          "L'informatique est custodian : elle applique les protections décidées, elle ne décide pas de la valeur.",
          "Bonne réponse : le data owner, responsable métier, connaît la valeur de l'information et en est redevable (accountable).",
          "Le RSSI définit le cadre et conseille : il ne connaît pas la valeur métier de chaque information."
        ],
        "explication": "C'est le data owner — le responsable métier — qui connaît la valeur et la sensibilité de l'information et qui est redevable (accountable) de sa classification. Le RSSI (D) définit le cadre et conseille. L'informatique (B) est custodian : elle applique les protections décidées, elle ne décide pas de la valeur. Laisser chacun décider sans cadre (A) produit l'incohérence qui a causé la fuite.",
        "concept": "Rôles — Data Owner (accountable) vs Data Custodian (responsible)"
      },
      {
        "situation": "La classification avance. Un chef de bureau propose de classer « Secret » la quasi-totalité de ses documents « pour être tranquille ».",
        "q": "Pourquoi la sur-classification est-elle une MAUVAISE pratique ?",
        "choix": [
          "Elle est interdite uniquement pour des raisons budgétaires",
          "Elle ne pose aucun problème : mieux vaut trop protéger que pas assez",
          "Elle oblige à chiffrer les documents, ce qui est trop lent",
          "Elle augmente inutilement les coûts de protection, entrave le travail et banalise les niveaux élevés, ce qui affaiblit la protection des vrais secrets"
        ],
        "reponse": 3,
        "pourquoi": [
          "La raison n'est pas seulement budgétaire : c'est un principe de proportionnalité entre coût des contrôles et valeur de l'actif.",
          "« Trop protéger » a un coût réel : contrôles inutiles, lenteurs, et banalisation des marquages élevés.",
          "Le chiffrement n'est pas l'enjeu central : le problème est l'inflation des exigences sur des documents ordinaires.",
          "Bonne réponse : la sur-classification coûte, entrave le travail et érode la crédibilité des niveaux élevés."
        ],
        "explication": "La classification doit être proportionnée : sur-classifier impose des contrôles coûteux à des informations qui ne le justifient pas, ralentit les processus et surtout érode la crédibilité des marquages — quand tout est « Secret », plus rien ne l'est vraiment. Les niveaux élevés doivent rester rares pour être respectés. C'est un principe d'équilibre coût/valeur, pas seulement budgétaire (A).",
        "concept": "Classification proportionnée — coût des contrôles vs valeur de l'actif"
      },
      {
        "situation": "Le programme se déploie : marquage (labeling) des documents, règles de manipulation par niveau, impression sécurisée par badge. Reste la question du matériel réformé : d'anciens disques durs et copieurs partent régulièrement au recyclage.",
        "q": "Quelle exigence imposez-vous pour les supports en fin de vie contenant des données classifiées ?",
        "choix": [
          "La confiance dans le prestataire de recyclage, qui « s'occupe de tout »",
          "Une suppression des fichiers et un formatage rapide avant enlèvement",
          "Une procédure de sanitization adaptée au niveau : effacement sécurisé vérifié, dégaussage ou destruction physique pour les plus sensibles, avec certificat de destruction",
          "Le stockage indéfini de tous les vieux disques dans une armoire fermée"
        ],
        "reponse": 2,
        "pourquoi": [
          "On peut déléguer l'exécution, jamais la responsabilité : sans exigences ni contrôle, on externalise la fuite.",
          "Le formatage ne supprime pas réellement les données : la data remanence les laisse récupérables.",
          "Bonne réponse : sanitization proportionnée au niveau (effacement vérifié, dégaussage, destruction physique) avec traçabilité et certificats.",
          "Accumuler les disques déplace et prolonge le risque sans jamais le traiter."
        ],
        "explication": "Le formatage (B) ne supprime pas réellement les données (data remanence) : il faut une sanitization proportionnée au niveau de classification — clearing/purging vérifié, degaussing pour les supports magnétiques, destruction physique (broyage) pour les plus sensibles — avec traçabilité et certificats. Accumuler les disques (D) déplace le risque. Déléguer sans exigences ni contrôle (A) revient à externaliser la fuite : la responsabilité, elle, ne s'externalise pas.",
        "concept": "Media Sanitization — data remanence, clearing/purging/destruction"
      },
      {
        "situation": "Un an plus tard, un audit confirme les progrès. La directrice demande comment garantir que la classification reste juste dans le temps, car certains rapports perdent leur sensibilité une fois les travaux réalisés.",
        "q": "Que proposez-vous ?",
        "choix": [
          "Le passage de tous les documents au niveau le plus bas après cinq ans",
          "Des révisions périodiques et des règles de déclassification, pilotées par les data owners, intégrées au cycle de vie de l'information",
          "La suppression automatique de tous les documents après un an",
          "Une classification définitive : un document classé le reste pour toujours"
        ],
        "reponse": 1,
        "pourquoi": [
          "Une déclassification automatique aveugle exposerait des informations restées sensibles des décennies.",
          "Bonne réponse : revues périodiques et règles de déclassification pilotées par les data owners, intégrées au cycle de vie.",
          "Supprimer tout après un an ignore la valeur résiduelle et les obligations de conservation.",
          "Figer la classification reproduit la sur-classification : la sensibilité évolue avec le temps."
        ],
        "explication": "La sensibilité d'une information évolue : le cycle de vie des données doit prévoir des revues périodiques et des critères de déclassification décidés par les data owners. Une classification figée (D) reproduit la sur-classification. Une purge (C) ou une déclassification automatique aveugle (A) ignore la valeur résiduelle de certaines informations — certains documents restent sensibles des décennies.",
        "concept": "Information Lifecycle — révision et déclassification"
      }
    ],
    "debrief": "Ce scénario illustre le cœur du Domaine 2 : la protection des actifs commence par leur classification, décidée par les data owners et appliquée par les custodians. Retenez la chaîne complète : politique de classification, marquage, règles de manipulation par niveau, sanitization des supports en fin de vie (le formatage ne suffit jamais), et révision périodique de la classification. La sur-classification est un piège classique de l'examen : la protection doit toujours être proportionnée à la valeur de l'actif."
  },
  {
    "id": "sc-4",
    "domaine": 2,
    "titre": "Startup SaaS : le bucket S3 grand ouvert",
    "icone": "☁️",
    "difficulte": 2,
    "contexte": "Vous êtes le premier responsable sécurité recruté par Fitrack, une startup SaaS de 80 personnes qui édite une application de suivi santé/fitness utilisée par 3 millions d'utilisateurs. Trois jours après votre arrivée, un chercheur en sécurité vous contacte de manière responsable (responsible disclosure) : un bucket S3 de l'entreprise est accessible publiquement et contient des exports de base de données avec e-mails, poids, fréquence cardiaque et historiques d'activité des utilisateurs. Chez Fitrack, chaque développeur crée ses propres ressources cloud, et personne ne sait combien de buckets existent.",
    "etapes": [
      {
        "situation": "Le chercheur vous a fourni l'URL du bucket exposé. Les données sont toujours accessibles publiquement à cet instant.",
        "q": "Que faites-vous EN PREMIER ?",
        "choix": [
          "Restreindre immédiatement l'accès public du bucket, puis préserver les journaux d'accès pour l'investigation",
          "Lancer un inventaire complet de tous les buckets de l'entreprise",
          "Supprimer le bucket et son contenu pour faire disparaître l'exposition",
          "Répondre au chercheur pour négocier son silence"
        ],
        "reponse": 0,
        "pourquoi": [
          "Bonne réponse : fermer l'accès public (containment) puis préserver les access logs pour qualifier la violation.",
          "L'inventaire global est le chantier structurel suivant, pas l'action des premières minutes.",
          "Supprimer le bucket détruit les preuves nécessaires à l'investigation et aux obligations de notification.",
          "Négocier le silence du chercheur est contraire à l'éthique et laisse l'exposition ouverte."
        ],
        "explication": "Priorité au containment : fermer l'accès public stoppe l'exposition en cours, et la préservation des access logs permettra de savoir qui a accédé aux données (élément clé pour qualifier la violation). Négocier le silence (D) est contraire à l'éthique et ne règle rien. L'inventaire global (B) est l'étape suivante, pas la première. Supprimer le bucket (C) détruit les preuves nécessaires à l'investigation et aux obligations de notification.",
        "concept": "Containment et préservation des preuves dans le cloud"
      },
      {
        "situation": "L'accès est fermé. Les logs montrent plusieurs téléchargements depuis des adresses IP inconnues avant le signalement. Les données de santé de dizaines de milliers d'utilisateurs européens sont concernées.",
        "q": "Comment qualifiez-vous ces données pour orienter la suite ?",
        "choix": [
          "Ce sont des données marketing ordinaires : un simple e-mail d'excuse suffira",
          "Ce sont des données anonymes puisqu'il n'y a ni nom ni adresse postale",
          "Ce sont des données appartenant à AWS, qui est responsable de la notification",
          "Ce sont des données de catégorie particulière (données concernant la santé) au sens du GDPR : la violation présente un risque élevé et déclenche notification à l'autorité et information des personnes"
        ],
        "reponse": 3,
        "pourquoi": [
          "Poids et fréquence cardiaque ne sont pas des données marketing : la qualification conditionne toutes les obligations.",
          "Un e-mail est un identifiant : les données sont au mieux pseudonymisées, jamais anonymes.",
          "Le Shared Responsibility Model laisse la configuration au client : Fitrack est data controller, pas AWS.",
          "Bonne réponse : données concernant la santé = catégorie particulière du GDPR, risque élevé, notification et information des personnes."
        ],
        "explication": "Poids, fréquence cardiaque et historique d'activité liés à un e-mail sont des données concernant la santé : catégorie particulière du GDPR, protection renforcée, et risque élevé en cas de violation — donc notification à l'autorité et information des personnes. Un e-mail est un identifiant : les données ne sont pas anonymes (B), au mieux pseudonymisées. Dans le modèle de responsabilité partagée, la configuration du bucket relève du client, pas d'AWS (C) : Fitrack est le data controller.",
        "concept": "Données sensibles (special categories) et Shared Responsibility Model"
      },
      {
        "situation": "La crise est gérée. Vous vous attaquez à la cause racine : personne ne sait quelles données existent, où elles sont, ni qui en est responsable. Les exports S3 avaient été créés « temporairement » par un data engineer parti depuis.",
        "q": "Quel chantier structurel lancez-vous EN PRIORITÉ ?",
        "choix": [
          "Établir un inventaire des données et des actifs cloud, avec désignation d'un owner pour chaque jeu de données et classification associée",
          "Chiffrer tous les buckets et considérer le problème résolu",
          "Faire signer une charte de bonne conduite aux développeurs",
          "Interdire l'usage de S3 dans toute l'entreprise"
        ],
        "reponse": 0,
        "pourquoi": [
          "Bonne réponse : inventaire, ownership et classification sont le socle — on ne protège pas ce qu'on ignore posséder.",
          "Le chiffrement est utile mais ne corrige pas des permissions publiques — et sans inventaire, on ne sait pas quoi chiffrer.",
          "Une charte sans contrôles techniques ne prévient pas l'erreur de configuration.",
          "Interdire S3 fera migrer le problème vers d'autres services : le shadow IT se déplace."
        ],
        "explication": "On ne protège pas ce qu'on ignore posséder : l'inventaire (data discovery et asset inventory), l'assignation d'ownership et la classification sont le socle de toute protection. Interdire S3 (D) fera migrer le problème ailleurs (shadow IT). Le chiffrement (B) est utile mais un bucket public avec des objets lisibles reste exposé si les permissions sont fausses — et sans inventaire, on ne sait même pas quoi chiffrer. La charte (C) ne remplace pas des contrôles.",
        "concept": "Asset Management — inventaire, ownership et classification des données"
      },
      {
        "situation": "L'inventaire révèle 214 buckets, dont 12 mal configurés, et des données de production copiées dans les environnements de développement et de test.",
        "q": "Concernant les données de production dans les environnements de dev/test, quelle est la MEILLEURE pratique ?",
        "choix": [
          "Déplacer les environnements de dev vers un autre fournisseur cloud",
          "Utiliser des données masquées, pseudonymisées ou synthétiques en dev/test, et réserver les données réelles à la production",
          "Restreindre l'accès aux environnements de dev par mot de passe partagé",
          "Les conserver : les développeurs ont besoin de données réalistes"
        ],
        "reponse": 1,
        "pourquoi": [
          "Changer de fournisseur déplace le problème de gouvernance sans le résoudre.",
          "Bonne réponse : masking, pseudonymisation ou données synthétiques donnent le réalisme sans le risque.",
          "Un mot de passe partagé supprime l'imputabilité : c'est une régression IAM, pas une protection.",
          "Le réalisme ne justifie pas d'exposer des données réelles dans des environnements moins protégés."
        ],
        "explication": "Les environnements hors production ont presque toujours des contrôles plus faibles : y copier des données réelles multiplie la surface d'exposition. Le data masking, la pseudonymisation ou les données synthétiques donnent le réalisme nécessaire sans le risque. Un mot de passe partagé (C) est une hérésie IAM. Changer de cloud (A) déplace le problème sans le résoudre.",
        "concept": "Data Security — masking et ségrégation production/développement"
      },
      {
        "situation": "Pour pérenniser, vous voulez empêcher techniquement la réapparition de buckets publics et détecter les dérives de configuration en continu.",
        "q": "Quelle combinaison de mesures est la PLUS efficace ?",
        "choix": [
          "Une formation annuelle de sensibilisation au cloud",
          "Un audit manuel annuel des configurations cloud",
          "La revue de chaque déploiement par le RSSI en personne",
          "Des guardrails préventifs (blocage du public access au niveau de l'organisation, policies) combinés à une surveillance continue de la posture cloud (CSPM) et au chiffrement par défaut"
        ],
        "reponse": 3,
        "pourquoi": [
          "La sensibilisation est nécessaire mais ne bloque mécaniquement aucune mauvaise configuration.",
          "Un audit annuel laisse onze mois d'angle mort face à des dérives de configuration quotidiennes.",
          "Faire du RSSI un point de passage obligé ne passe pas à l'échelle et sera contourné.",
          "Bonne réponse : guardrails préventifs, surveillance continue (CSPM) et chiffrement par défaut — l'erreur devient impossible ou détectée."
        ],
        "explication": "La défense en profondeur cloud combine le préventif (guardrails organisationnels qui rendent l'erreur impossible, comme le blocage global du public access), le détectif (CSPM qui alerte en continu sur les dérives) et la protection des données elles-mêmes (chiffrement par défaut). Un audit annuel (B) laisse onze mois d'exposition. La formation (A) est nécessaire mais insuffisante seule. Faire du RSSI un goulot d'étranglement (C) ne passe pas à l'échelle et sera contourné.",
        "concept": "Cloud Security Posture Management et guardrails préventifs"
      }
    ],
    "debrief": "Inspiré des innombrables fuites de buckets S3 mal configurés (Accenture, des applications de santé et de fitness, etc.), ce scénario rappelle que dans le cloud, la configuration relève du client : le Shared Responsibility Model ne couvre jamais vos erreurs de permissions. Les fondamentaux du Domaine 2 s'appliquent pleinement au cloud : inventorier, désigner des owners, classifier, puis protéger — et jamais de données de production réelles en dev/test. La réponse durable est structurelle : guardrails préventifs et surveillance continue plutôt que des audits ponctuels."
  },
  {
    "id": "sc-5",
    "domaine": 3,
    "titre": "Pipeline sous pression : sécuriser l'OT",
    "icone": "🏭",
    "difficulte": 3,
    "contexte": "Vous êtes consultant senior en cybersécurité industrielle, missionné par PetroSud, un opérateur d'oléoducs alimentant le sud du pays en carburant. Suite à l'attaque qui a paralysé un grand pipeline américain, la direction et l'ANSSI (l'entreprise est un OIV) exigent une évaluation de l'architecture. Sur site, vous découvrez que le réseau bureautique (IT) et le réseau industriel (OT) qui pilote les systèmes SCADA sont interconnectés sans réelle séparation : les opérateurs consultent leurs e-mails depuis les postes de supervision, et un accès de télémaintenance permanent est ouvert pour l'intégrateur.",
    "etapes": [
      {
        "situation": "Vous présentez vos premières observations. Le directeur d'exploitation minimise : « Le SCADA n'est pas connecté à Internet, on ne risque rien. »",
        "q": "Quel est le PRINCIPAL défaut architectural que vous mettez en avant ?",
        "choix": [
          "L'ancienneté des automates programmables (PLC)",
          "L'absence de supervision de sécurité (monitoring) des événements du réseau industriel",
          "L'absence de segmentation entre IT et OT : toute compromission du réseau bureautique peut se propager aux systèmes industriels",
          "L'absence d'antivirus sur les serveurs SCADA"
        ],
        "reponse": 2,
        "pourquoi": [
          "L'ancienneté des PLC est un risque réel mais secondaire : c'est l'exposition réseau qui les rend attaquables.",
          "Superviser l'OT est nécessaire, mais détecter sans cloisonner ne bloque pas la propagation : le défaut structurel est ailleurs.",
          "Bonne réponse : sans segmentation, toute compromission bureautique peut se propager aux systèmes industriels — le mythe de l'air gap.",
          "Les antivirus sont souvent inapplicables sur les systèmes OT et ne traitent pas le chemin d'attaque IT vers OT."
        ],
        "explication": "Le mythe de l'« air gap » : le SCADA n'est peut-être pas directement exposé à Internet, mais il est connecté au réseau IT, qui l'est. Un phishing réussi côté bureautique offre un chemin direct vers l'OT — c'est le scénario de la plupart des attaques industrielles réelles. L'antivirus (D) est souvent inapplicable sur les systèmes OT. L'âge des PLC (A) et l'absence de supervision OT (B) sont des sujets réels — mais détecter sans cloisonner revient à regarder l'attaque se propager : la segmentation est le défaut structurel à traiter en premier.",
        "concept": "Segmentation IT/OT — modèle Purdue, zones et conduits (IEC 62443)"
      },
      {
        "situation": "La direction accepte un programme de sécurisation. Vous devez proposer l'architecture cible de séparation IT/OT.",
        "q": "Quelle architecture recommandez-vous ?",
        "choix": [
          "Un simple VLAN séparant IT et OT sur les mêmes commutateurs",
          "Le chiffrement de tous les flux entre IT et OT, sans modifier la topologie",
          "La déconnexion physique totale et définitive de l'OT, sans aucun échange de données",
          "Une architecture en zones selon le modèle Purdue, avec une DMZ industrielle : aucun flux direct entre IT et OT, tous les échanges transitent par des serveurs relais dans la DMZ"
        ],
        "reponse": 3,
        "pourquoi": [
          "Un VLAN est une séparation logique aisément traversée : insuffisant pour un environnement critique.",
          "Chiffrer protège la confidentialité des flux mais ne bloque pas la propagation : le chiffrement n'est pas de la segmentation.",
          "L'air gap total est irréaliste : le métier a besoin des données de production.",
          "Bonne réponse : zones et DMZ industrielle (modèle Purdue, IEC 62443) — aucun flux direct entre IT et OT."
        ],
        "explication": "La référence (IEC 62443, modèle Purdue) est la séparation en zones avec une DMZ industrielle : les données nécessaires au métier (historisation, supervision) transitent par des relais contrôlés, jamais en flux direct. Un VLAN seul (A) est une séparation logique facilement traversée. L'air gap total (C) est irréaliste : le métier a besoin des données de production. Chiffrer des flux (B) protège leur confidentialité mais ne bloque pas la propagation d'une compromission — le chiffrement n'est pas de la segmentation.",
        "concept": "Defense in Depth — DMZ industrielle et architecture en zones"
      },
      {
        "situation": "Vous traitez l'accès de télémaintenance de l'intégrateur : un tunnel VPN permanent, avec un compte générique partagé par ses techniciens, arrivant directement sur le réseau OT.",
        "q": "Comment sécurisez-vous cet accès distant ?",
        "choix": [
          "Mettre en place des accès nominatifs avec MFA, activés à la demande et limités dans le temps, passant par un bastion (jump server) enregistrant les sessions",
          "Changer le mot de passe du compte générique tous les mois",
          "Supprimer purement et simplement la télémaintenance",
          "Limiter le VPN aux adresses IP de l'intégrateur"
        ],
        "reponse": 0,
        "pourquoi": [
          "Bonne réponse : comptes nominatifs, MFA, activation just-in-time limitée dans le temps et bastion enregistrant les sessions.",
          "La rotation d'un compte partagé ne rétablit pas l'imputabilité individuelle (accountability).",
          "Supprimer la télémaintenance dégrade la maintenance et sera contourné par des accès sauvages.",
          "Le filtrage IP est un complément : il ne protège ni contre la compromission de l'intégrateur ni contre l'absence de traçabilité."
        ],
        "explication": "L'accès distant tiers doit respecter le moindre privilège dans le temps et l'espace : comptes nominatifs (accountability), MFA, activation à la demande (just-in-time) pour une durée limitée, et passage obligé par un bastion qui enregistre les sessions pour l'audit. La rotation d'un compte partagé (B) ne rétablit pas l'imputabilité. Supprimer la télémaintenance (C) dégrade la maintenance et sera contourné. Le filtrage IP (D) est un complément, pas une solution : il ne protège ni contre la compromission de l'intégrateur ni contre l'absence de traçabilité.",
        "concept": "Third-Party Remote Access — bastion, just-in-time, session recording"
      },
      {
        "situation": "Pendant le déploiement, un test de détection révèle une intrusion en cours : un poste de supervision communique avec un serveur de commande externe. Les automates fonctionnent normalement pour l'instant, mais le risque de sabotage des systèmes de sécurité (safety) existe.",
        "q": "Quelle est la considération PRIORITAIRE qui guide votre réponse à incident ?",
        "choix": [
          "Identifier les attaquants pour engager des poursuites",
          "La sûreté (safety) : protéger les vies humaines et l'intégrité physique des installations avant toute autre considération",
          "Préserver la confidentialité des données de production",
          "Maintenir la disponibilité du pipeline pour éviter les pertes financières"
        ],
        "reponse": 1,
        "pourquoi": [
          "L'attribution intéresse l'enquête, pas la protection immédiate des vies.",
          "Bonne réponse : la sûreté des personnes et des installations prime tout — vérifier l'intégrité des SIS, pouvoir passer en manuel.",
          "En OT, la confidentialité passe en dernier : ce n'est pas l'enjeu quand un sabotage physique menace.",
          "La disponibilité compte énormément en OT, mais jamais avant la sécurité physique des personnes."
        ],
        "explication": "Règle d'or CISSP, encore plus vraie en environnement industriel : la vie humaine et la sûreté physique priment tout. Dans l'OT, la hiérarchie classique s'inverse : safety d'abord, puis disponibilité et intégrité des procédés, la confidentialité (C) en dernier. Les pertes financières (D) et l'attribution (A) passent après. Concrètement : s'assurer que les systèmes instrumentés de sécurité (SIS) sont intègres et pouvoir passer en conduite manuelle si nécessaire.",
        "concept": "Safety First — priorités inversées en environnement OT/ICS"
      },
      {
        "situation": "L'incident est contenu sans impact physique. La direction demande si elle aurait dû couper préventivement le pipeline, comme l'a fait l'opérateur américain dont l'attaque n'avait touché que le réseau IT de facturation.",
        "q": "Quelle leçon d'architecture en tirez-vous pour PetroSud ?",
        "choix": [
          "Il suffit de souscrire une assurance couvrant les arrêts de production",
          "Il faut toujours couper la production au moindre incident IT",
          "Une segmentation robuste et éprouvée entre IT et OT permet de continuer à opérer en confiance même quand l'IT est compromis, et doit être validée par des exercices",
          "Il faut supprimer le réseau IT pour ne garder que l'OT"
        ],
        "reponse": 2,
        "pourquoi": [
          "L'assurance indemnise l'arrêt, elle ne l'évite pas : ce n'est pas une réponse d'architecture.",
          "Couper systématiquement transforme chaque incident IT en crise nationale : disproportionné.",
          "Bonne réponse : une segmentation éprouvée par des exercices permet de continuer à opérer en confiance quand l'IT est compromis.",
          "Supprimer l'IT n'est pas une stratégie : le métier en dépend."
        ],
        "explication": "Le pipeline américain a été arrêté notamment parce que l'opérateur ne pouvait pas garantir que la compromission IT n'atteindrait pas l'OT — un aveu de segmentation insuffisante. Une architecture en zones réellement étanche, testée par des exercices réguliers, permet de prendre des décisions proportionnées au lieu d'arrêts totaux coûteux. Couper systématiquement (B) transforme chaque incident IT en crise nationale. Les options C et D ne sont pas des stratégies d'architecture.",
        "concept": "Résilience — la segmentation comme condition de la continuité d'activité"
      }
    ],
    "debrief": "Inspiré de l'affaire Colonial Pipeline, ce scénario concentre les fondamentaux de la sécurité des systèmes industriels : le mythe de l'air gap, la segmentation IT/OT en zones et conduits avec DMZ industrielle (modèle Purdue, IEC 62443), la sécurisation des accès tiers par bastion et just-in-time, et surtout l'inversion des priorités en OT — safety et disponibilité avant confidentialité. Retenez pour l'examen : la vie humaine prime toujours, et une bonne segmentation est ce qui permet de ne pas tout arrêter quand l'IT tombe."
  },
  {
    "id": "sc-6",
    "domaine": 3,
    "titre": "Datacenter en flammes",
    "icone": "🔥",
    "difficulte": 2,
    "contexte": "Vous êtes responsable de la sécurité physique et de la continuité chez HostCentral, un hébergeur régional exploitant deux datacenters distants de 15 km. À 2h47 du matin, un départ de feu se déclare dans une salle d'énergie du datacenter principal (DC1), où sont hébergés 800 clients. Le système de détection incendie s'est déclenché, deux techniciens de nuit sont présents dans le bâtiment. Vous êtes appelé pendant que l'incendie se propage vers les salles serveurs. Certains clients n'ont souscrit aucune option de réplication vers le second site.",
    "etapes": [
      {
        "situation": "Vous arrivez sur le pont de crise téléphonique. Le chef d'équipe de nuit demande les priorités : les pompiers arrivent, les techniciens veulent tenter de sauver des baies de serveurs.",
        "q": "Quelle est votre PREMIÈRE priorité ?",
        "choix": [
          "Faire évacuer immédiatement le personnel et laisser les secours opérer : aucune intervention humaine dans le bâtiment",
          "Appeler les clients pour les informer",
          "Demander aux techniciens de sauver les baies des plus gros clients",
          "Lancer la sauvegarde d'urgence des données"
        ],
        "reponse": 0,
        "pourquoi": [
          "Bonne réponse : la vie humaine prime tout actif, sans exception — évacuation et coordination avec les secours.",
          "La communication clients est légitime mais vient après la mise en sécurité des personnes.",
          "Aucun client ne vaut qu'on expose des personnes aux fumées : les baies attendront.",
          "Les sauvegardes se protègent avant le sinistre, pas pendant, au péril des équipes."
        ],
        "explication": "La vie humaine prime toujours sur les actifs, sans exception — c'est LE réflexe attendu à l'examen CISSP. Aucun serveur ne vaut qu'on expose des personnes aux fumées ou aux flammes. Sauver du matériel (C), sauvegarder (D) ou communiquer (B) sont des préoccupations légitimes qui viennent après la mise en sécurité des personnes et la coordination avec les secours.",
        "concept": "Human Safety First — la vie humaine avant tout actif"
      },
      {
        "situation": "Le personnel est évacué, sain et sauf. Les pompiers combattent le feu. L'alimentation de DC1 doit être coupée à leur demande, ce qui arrêtera tous les services hébergés.",
        "q": "Quel dispositif organisationnel activez-vous à ce stade ?",
        "choix": [
          "Un audit des causes de l'incendie",
          "Une réunion de retour d'expérience (lessons learned)",
          "Le plan de continuité/reprise : cellule de crise, plan de communication, et déclenchement du disaster recovery vers DC2 selon les priorités définies par le BIA",
          "Rien de formel : on gère au fil de l'eau, l'urgence prime sur la procédure"
        ],
        "reponse": 2,
        "pourquoi": [
          "L'analyse des causes viendra : elle ne restaure aucun service cette nuit.",
          "Le lessons learned appartient à la phase post-incident, pas au cœur de la crise.",
          "Bonne réponse : activation formelle du BCP/DRP — cellule de crise, communication maîtrisée, bascule selon les priorités du BIA.",
          "Improviser en crise garantit le chaos : c'est précisément pour cet instant que le plan formel existe."
        ],
        "explication": "C'est exactement pour cet instant que le BCP/DRP existe : activation formelle de la cellule de crise, communication maîtrisée, et bascule vers le site secondaire dans l'ordre de priorité issu du Business Impact Analysis (les services critiques d'abord, selon leurs RTO). Improviser (D) garantit le chaos. Le retour d'expérience (B) et l'analyse des causes (A) appartiennent à la phase post-incident.",
        "concept": "BCP/DRP Activation — cellule de crise et priorités issues du BIA"
      },
      {
        "situation": "La bascule vers DC2 commence. Les clients ayant souscrit la réplication redémarrent en moins de deux heures. Pour les autres, il faudra restaurer depuis les sauvegardes. On découvre alors que certaines sauvegardes « hors site » étaient en réalité stockées... dans une autre salle de DC1.",
        "q": "Quel principe fondamental a été violé ?",
        "choix": [
          "La rotation des supports de sauvegarde",
          "La règle de séparation géographique des sauvegardes : une copie hors site doit être réellement distante pour survivre à un sinistre majeur du site principal",
          "Le principe du moindre privilège",
          "Le chiffrement des sauvegardes"
        ],
        "reponse": 1,
        "pourquoi": [
          "La rotation ne change rien si toutes les copies partagent le même bâtiment.",
          "Bonne réponse : la règle 3-2-1 exige une copie réellement hors site — des sauvegardes qui brûlent avec la production ne protègent rien.",
          "Le moindre privilège concerne les accès : il n'aurait pas sauvé des copies co-localisées.",
          "Le chiffrement protège la confidentialité, pas la survie physique des supports."
        ],
        "explication": "Une sauvegarde stockée sur le même site que la production partage son sort en cas d'incendie, d'inondation ou d'explosion : la règle 3-2-1 (trois copies, deux supports différents, une copie hors site) exige une distance réelle entre les copies. Le moindre privilège (C), le chiffrement (D) et la rotation (A) sont d'autres bonnes pratiques, mais aucune n'aurait sauvé des données dont toutes les copies ont brûlé ensemble.",
        "concept": "Backup Strategy — règle 3-2-1 et séparation géographique"
      },
      {
        "situation": "Trois jours plus tard, les services critiques tournent sur DC2, mais des clients sans réplication ont perdu des données définitivement. L'enquête révèle que le système d'extinction automatique de la salle d'énergie était hors service depuis des mois, et que le dernier test du DRP datait de quatre ans.",
        "q": "Dans votre rapport, quelle recommandation structurante mettez-vous EN AVANT ?",
        "choix": [
          "Remplacer le système d'extinction et considérer le dossier clos",
          "Transférer toute l'infrastructure dans le cloud public",
          "Fermer DC1 définitivement",
          "Instaurer un programme de maintenance et de test réguliers : contrôles périodiques des systèmes de protection incendie ET exercices de DRP planifiés (du walkthrough au test de bascule)"
        ],
        "reponse": 3,
        "pourquoi": [
          "Remplacer l'équipement sans processus de test recrée les conditions exactes de l'échec.",
          "Migrer au cloud déplace l'infrastructure, pas l'obligation de tester ses plans.",
          "Fermer le site est une décision stratégique qui ne corrige pas l'absence de programme de test.",
          "Bonne réponse : maintenance et tests récurrents — un contrôle ou un plan jamais testé n'existe pas."
        ],
        "explication": "La leçon dépasse l'équipement défaillant : des contrôles non testés sont des contrôles inexistants. Il faut un programme récurrent — maintenance et vérification des protections physiques (détection, extinction, énergie), et exercices de continuité gradués (tabletop, walkthrough, tests parallèles, bascule réelle). Remplacer un équipement (A) sans processus de test recrée les conditions de l'échec. Fermer le site (C) ou tout migrer (B) sont des décisions stratégiques qui ne dispensent pas de tester ses plans.",
        "concept": "Testing & Maintenance — un plan non testé n'est pas un plan"
      },
      {
        "situation": "Lors de la reconstruction de la salle d'énergie, l'architecte vous consulte sur le futur système d'extinction des salles serveurs, où du personnel peut être présent.",
        "q": "Quel système d'extinction recommandez-vous pour les salles serveurs occupées ?",
        "choix": [
          "Des extincteurs portatifs uniquement, pour laisser le personnel gérer",
          "Un sprinkler à eau classique déclenché en premier",
          "Un système à agent gazeux propre (clean agent, type inergen/FM-200) sans danger pour les personnes et non destructeur pour les équipements, avec temporisation d'évacuation",
          "Du dioxyde de carbone (CO2) à saturation, le plus efficace"
        ],
        "reponse": 2,
        "pourquoi": [
          "Les extincteurs seuls n'offrent aucune protection automatique et exposent le personnel.",
          "L'eau détruit l'électronique : elle reste un recours bâtiment (souvent en pre-action), pas le premier déclenchement en salle serveurs.",
          "Bonne réponse : agent propre, sûr pour les personnes et les équipements, avec pré-alarme et temporisation d'évacuation.",
          "Le CO2 à saturation est mortel par asphyxie : réservé aux espaces non occupés."
        ],
        "explication": "Dans un espace occupé abritant de l'électronique, on privilégie un agent gazeux propre : il éteint sans détruire les équipements et reste respirable, avec pré-alarme et temporisation d'évacuation. L'eau (B) détruit l'électronique (elle reste pertinente en dernier recours pour le bâtiment, souvent en pre-action). Le CO2 à saturation (D) est mortel par asphyxie : réservé aux espaces non occupés. Les extincteurs seuls (A) ne constituent pas une protection automatique et exposent le personnel.",
        "concept": "Fire Suppression — clean agents vs eau vs CO2, sécurité des personnes"
      }
    ],
    "debrief": "Inspiré de l'incendie du datacenter OVHcloud de Strasbourg en 2021, ce scénario ancre plusieurs réflexes d'examen : la vie humaine prime absolument tout ; un sinistre déclenche le BCP/DRP formel avec les priorités du BIA ; les sauvegardes doivent être réellement hors site (règle 3-2-1) ; et un contrôle ou un plan jamais testé n'existe pas. Retenez aussi la logique des systèmes d'extinction : clean agent pour les salles occupées, CO2 uniquement pour les espaces vides, l'eau en protection du bâtiment."
  },
  {
    "id": "sc-7",
    "domaine": 4,
    "titre": "Le climaticien qui ouvrait les caisses",
    "icone": "🏬",
    "difficulte": 2,
    "contexte": "Vous êtes le nouveau responsable sécurité réseau de RetailPlus, une enseigne de 400 magasins. Lors de votre état des lieux, vous découvrez une architecture réseau à plat : les terminaux de paiement (POS), les caisses, la vidéosurveillance, la climatisation connectée et la bureautique des magasins partagent le même réseau, accessible depuis le siège. Plusieurs prestataires — dont la société de maintenance CVC (chauffage-ventilation-climatisation) — disposent d'accès VPN permanents avec des identifiants simples. Vous connaissez l'histoire de ce grand distributeur américain compromis via son prestataire de climatisation.",
    "etapes": [
      {
        "situation": "Vous devez convaincre la direction d'investir. Le DSI objecte : « Nos terminaux de paiement sont certifiés, le reste du réseau importe peu. »",
        "q": "Quel argument PRINCIPAL opposez-vous ?",
        "choix": [
          "Sur un réseau à plat, la compromission de n'importe quel équipement — même la climatisation — permet le mouvement latéral jusqu'à l'environnement de paiement",
          "Les certifications des terminaux expirent régulièrement",
          "Les identifiants simples des prestataires ne respectent pas la politique de mots de passe",
          "Les terminaux certifiés peuvent présenter des vulnérabilités entre deux cycles de certification"
        ],
        "reponse": 0,
        "pourquoi": [
          "Bonne réponse : sur un réseau à plat, le maillon le plus faible ouvre un chemin latéral jusqu'au paiement — l'argument structurel qui parle à une direction.",
          "Vrai mais accessoire : l'expiration des certifications ne crée pas le chemin d'attaque.",
          "Vrai aussi, mais corriger les mots de passe sans cloisonner laisse le chemin d'attaque intact.",
          "Exact techniquement, mais c'est un symptôme : le vrai problème est que le réseau expose les terminaux à tout le reste."
        ],
        "explication": "C'est la leçon centrale des grandes compromissions retail : sans segmentation, l'attaquant qui compromet le maillon le plus faible (un prestataire CVC, une caméra) circule latéralement jusqu'aux systèmes de paiement. La certification d'un terminal ne protège pas contre un réseau qui l'expose. PCI DSS exige d'ailleurs la segmentation du cardholder data environment (CDE) — ou à défaut, tout le réseau entre dans le périmètre d'audit. Les failles entre cycles de certification (D) et la faiblesse des identifiants prestataires (C) sont réelles, mais ce sont des symptômes : l'argument décisif est le chemin d'attaque structurel qu'ouvre le réseau à plat.",
        "concept": "Network Segmentation — mouvement latéral et périmètre PCI DSS"
      },
      {
        "situation": "Le budget est validé. Vous concevez la nouvelle architecture des magasins et du siège.",
        "q": "Quelle conception réseau proposez-vous ?",
        "choix": [
          "Un chiffrement de tous les flux internes, réseau inchangé",
          "Un antivirus renforcé sur tous les équipements, réseau inchangé",
          "Un réseau Wi-Fi dédié aux prestataires",
          "Des zones segmentées par fonction (paiement, bureautique, IoT/CVC, vidéo) séparées par des pare-feux avec règles de filtrage en deny by default entre zones"
        ],
        "reponse": 3,
        "pourquoi": [
          "Le chiffrement protège la confidentialité des flux mais ne cloisonne rien.",
          "L'antivirus ne bloque pas le mouvement latéral réseau : mauvais niveau de réponse.",
          "Un Wi-Fi prestataires ne traite qu'un vecteur périphérique du problème.",
          "Bonne réponse : zones par fonction et filtrage deny by default — l'environnement de paiement devient une enclave."
        ],
        "explication": "La segmentation par fonction avec filtrage inter-zones en refus par défaut (deny by default, allow by exception) est la réponse structurelle : l'environnement de paiement devient une enclave où seuls les flux strictement nécessaires entrent et sortent. L'antivirus (B) ne bloque pas le mouvement latéral réseau. Le chiffrement (A) protège la confidentialité des flux mais ne cloisonne rien. Un Wi-Fi prestataires (C) ne traite qu'un vecteur périphérique.",
        "concept": "Zoning — deny by default, moindre privilège appliqué aux flux"
      },
      {
        "situation": "Reste l'accès des prestataires. Le mainteneur CVC a besoin d'accéder à distance aux équipements de climatisation ; le prestataire vidéo à ses caméras ; aucun n'a besoin d'autre chose.",
        "q": "Comment redessinez-vous les accès tiers ?",
        "choix": [
          "L'interdiction de tout accès distant : intervention sur site uniquement",
          "Des accès par prestataire avec MFA, restreints à la seule zone dont chacun a besoin, journalisés et revus périodiquement",
          "Un accès complet mais uniquement en horaires ouvrés",
          "Un VPN unique partagé par tous les prestataires, avec un mot de passe robuste"
        ],
        "reponse": 1,
        "pourquoi": [
          "Le tout-sur-site est coûteux, lent, et finira contourné.",
          "Bonne réponse : moindre privilège par prestataire, MFA, journalisation et revue périodique des droits.",
          "Restreindre les horaires sans restreindre le périmètre laisse l'essentiel du risque.",
          "Un VPN partagé supprime l'imputabilité et donne à chacun l'accès de tous."
        ],
        "explication": "Moindre privilège appliqué aux tiers : chaque prestataire n'accède qu'à sa zone (le climaticien ne voit que le CVC, jamais le paiement), avec authentification forte, journalisation et revue régulière des droits — les accès tiers dormants sont une cible privilégiée. Le VPN partagé (D) supprime l'imputabilité et donne à chacun l'accès de tous. Le tout-sur-site (A) est coûteux et sera contourné. Restreindre les horaires (C) sans restreindre le périmètre passe à côté du problème.",
        "concept": "Third-Party Access — moindre privilège, MFA, journalisation"
      },
      {
        "situation": "Six mois après la mise en œuvre, votre SOC détecte des requêtes DNS anormales depuis la zone bureautique d'un magasin : des rafales de requêtes vers un domaine inconnu, avec des sous-domaines longs et pseudo-aléatoires.",
        "q": "Que suspectez-vous et que faites-vous ?",
        "choix": [
          "Une exfiltration de données par tunnel DNS : isoler le poste concerné, bloquer le domaine, et investiguer",
          "Une attaque DDoS entrante : contacter l'opérateur",
          "Un simple dysfonctionnement du resolver : purger le cache DNS",
          "Une mise à jour logicielle automatique : ignorer l'alerte"
        ],
        "reponse": 0,
        "pourquoi": [
          "Bonne réponse : signature classique du DNS tunneling — isoler le poste, bloquer le domaine, investiguer.",
          "Le trafic décrit est sortant et discret : rien d'un DDoS entrant.",
          "Purger le cache masque le symptôme et laisse l'exfiltration continuer.",
          "Ignorer une anomalie DNS de ce profil, c'est ignorer un canal d'exfiltration connu."
        ],
        "explication": "Des rafales de requêtes vers un même domaine avec des sous-domaines longs et aléatoires sont la signature classique du DNS tunneling : les données volées sont encodées dans les requêtes, car le port 53 sort presque toujours. Réponse : containment du poste, blocage du domaine, analyse de ce qui a pu être exfiltré. Purger le cache (C) ou ignorer (D) laisse l'exfiltration continuer ; un DDoS entrant (B) ne ressemble pas à ce trafic sortant.",
        "concept": "Covert Channels — DNS tunneling et détection d'exfiltration"
      },
      {
        "situation": "L'incident est contenu : un poste bureautique compromis par phishing tentait d'exfiltrer des fichiers. Grâce à la segmentation, la zone paiement n'a jamais été atteinte. La direction demande l'étape d'après.",
        "q": "Quelle évolution d'architecture proposez-vous à moyen terme ?",
        "choix": [
          "Doubler la bande passante des magasins",
          "Interdire l'accès Internet à tous les magasins",
          "Revenir à un réseau à plat, plus simple à administrer, puisque le SOC détecte bien",
          "Évoluer vers une approche Zero Trust : micro-segmentation, vérification continue de l'identité et de la posture des équipements, accès par application plutôt que par réseau"
        ],
        "reponse": 3,
        "pourquoi": [
          "La bande passante n'est pas un sujet de sécurité ici.",
          "Couper Internet tuerait le métier sans traiter les menaces internes.",
          "Détecter n'est pas prévenir : revenir au réseau à plat annulerait ce qui vient de contenir l'incident.",
          "Bonne réponse : le Zero Trust prolonge la segmentation — vérification continue de l'identité et de la posture, accès par application."
        ],
        "explication": "Le Zero Trust prolonge la segmentation : ne jamais faire confiance par défaut, même à l'intérieur (« never trust, always verify »), authentifier et autoriser chaque accès par identité, contexte et posture du device, et micro-segmenter jusqu'à l'application. Revenir en arrière (C) confond détection et prévention. La bande passante (A) n'est pas un sujet de sécurité ici, et couper Internet (B) tuerait le métier sans traiter les menaces internes.",
        "concept": "Zero Trust Architecture — never trust, always verify"
      }
    ],
    "debrief": "Inspiré de la compromission d'un grand distributeur américain via son prestataire de climatisation (affaire Target, 2013), ce scénario illustre le Domaine 4 : un réseau à plat transforme le moindre équipement compromis en porte d'entrée vers les joyaux de la couronne. Retenez la segmentation par zones avec deny by default, le moindre privilège appliqué aux accès tiers, la vigilance sur les canaux d'exfiltration détournés comme le DNS tunneling, et la trajectoire vers le Zero Trust. À l'examen, « segmentation » est presque toujours la réponse structurelle aux problèmes de mouvement latéral."
  },
  {
    "id": "sc-8",
    "domaine": 4,
    "titre": "Aéroport : turbulences sur le réseau",
    "icone": "✈️",
    "difficulte": 3,
    "contexte": "Vous êtes RSSI de l'aéroport international de Beaulieu, désigné opérateur d'importance vitale (OIV). L'aéroport opère des réseaux très hétérogènes : systèmes d'affichage des vols (FIDS), enregistrement et tri bagages, contrôle d'accès des zones réservées, Wi-Fi public pour 12 millions de passagers annuels, et liaisons avec les compagnies aériennes et le contrôle aérien. Un vendredi de départ en vacances, l'affichage des vols se fige dans tous les terminaux, le site web et l'application mobile deviennent inaccessibles, et votre SOC signale un trafic entrant massif et anormal.",
    "etapes": [
      {
        "situation": "Le trafic entrant sature les liens Internet : des millions de requêtes proviennent de dizaines de milliers d'adresses IP à travers le monde. Site web, application et affichage des vols (qui dépend d'une API exposée sur Internet) sont hors service. Les passagers s'agglutinent devant les comptoirs.",
        "q": "Quelle est la MEILLEURE action immédiate ?",
        "choix": [
          "Bloquer une par une les adresses IP attaquantes sur le pare-feu",
          "Porter plainte immédiatement auprès des autorités",
          "Activer le service de mitigation DDoS (scrubbing) prévu au contrat avec votre opérateur/CDN et déclencher la cellule de crise",
          "Éteindre le site web en attendant que l'attaque cesse"
        ],
        "reponse": 2,
        "pourquoi": [
          "Bloquer des dizaines de milliers d'adresses une à une est sans espoir face à un DDoS distribué.",
          "La plainte viendra, mais elle ne restaure aucun service.",
          "Bonne réponse : dérouter le trafic vers la mitigation pré-contractée (scrubbing, CDN) et activer la cellule de crise.",
          "Éteindre le site donne la victoire à l'attaquant : l'objectif est de restaurer le service."
        ],
        "explication": "Face à un DDoS volumétrique distribué, le filtrage manuel d'IP (A) est sans espoir : le trafic doit être dérouté vers un service de mitigation (scrubbing center, protection CDN/anycast) capable d'absorber et filtrer en amont — idéalement pré-contracté et testé. L'activation de la cellule de crise coordonne technique, communication et opérations. Éteindre le site (D) donne la victoire à l'attaquant. La plainte (B) viendra, mais elle ne restaure aucun service.",
        "concept": "DDoS Mitigation — scrubbing, protection amont pré-contractée"
      },
      {
        "situation": "La mitigation absorbe l'attaque, les services publics reviennent progressivement. Mais votre SOC remarque une anomalie inquiétante : pendant le pic du DDoS, des tentatives d'authentification ciblées ont visé la passerelle VPN d'administration des systèmes de tri bagages.",
        "q": "Comment interprétez-vous cette concomitance ?",
        "choix": [
          "Une coïncidence : les deux événements sont indépendants",
          "Le DDoS sert probablement d'écran de fumée (smokescreen) pour une intrusion ciblée : il faut traiter les deux comme un incident coordonné et renforcer la surveillance des accès critiques",
          "Une erreur de configuration du VPN",
          "Un test de charge lancé par un prestataire"
        ],
        "reponse": 1,
        "pourquoi": [
          "Conclure à la coïncidence sans investigation est la faute classique face à une diversion.",
          "Bonne réponse : le DDoS sert souvent d'écran de fumée — corréler les événements et traiter comme un incident coordonné.",
          "Rien n'indique une erreur de configuration : l'hypothèse ignore le contexte d'attaque.",
          "Un test de charge ne cible pas une passerelle d'administration par des tentatives d'authentification."
        ],
        "explication": "Les attaquants sophistiqués utilisent fréquemment le DDoS comme diversion : pendant que les équipes luttent pour la disponibilité, l'intrusion réelle vise des accès critiques. Le réflexe professionnel est de corréler les événements, d'élever le niveau de vigilance sur les systèmes sensibles et de vérifier l'intégrité des accès pendant toute la fenêtre d'attaque. Conclure à une coïncidence (A) sans investigation est la faute classique.",
        "concept": "Attack Correlation — le DDoS comme diversion"
      },
      {
        "situation": "L'investigation montre que la passerelle VPN visée est accessible depuis tout Internet et protégée par simple mot de passe. Elle donne accès au réseau d'administration du tri bagages, lui-même relié au réseau du contrôle d'accès des zones réservées sûreté.",
        "q": "Quelle faiblesse d'architecture corrigez-vous EN PRIORITÉ ?",
        "choix": [
          "L'absence de chiffrement des flux entre le tri bagages et sa supervision",
          "L'absence de revue périodique des comptes de la passerelle VPN",
          "Le manque de journalisation centralisée des connexions d'administration",
          "L'exposition d'un accès d'administration critique sans MFA et l'absence de cloisonnement entre systèmes opérationnels et systèmes de sûreté"
        ],
        "reponse": 3,
        "pourquoi": [
          "Chiffrer ces flux serait une amélioration réelle, mais ne réduit ni l'exposition Internet ni le risque de propagation vers la sûreté.",
          "Les revues de comptes sont nécessaires, mais elles n'empêchent pas l'exploitation d'un accès exposé sans MFA.",
          "La journalisation détecte a posteriori : elle ne corrige pas l'exposition.",
          "Bonne réponse : MFA et bastion sur l'accès d'administration exposé, et cloisonnement des systèmes de sûreté — le cœur du risque."
        ],
        "explication": "Deux défauts majeurs se cumulent : un accès d'administration exposé à Internet avec authentification faible (il faut MFA, restriction d'accès, bastion), et surtout l'interconnexion sans cloisonnement entre le tri bagages et le contrôle d'accès sûreté — une compromission pourrait affecter la sécurité physique de zones critiques. Pour un OIV, la réglementation (SAIV/NIS2) impose précisément le cloisonnement des systèmes d'importance vitale. Le chiffrement des flux (A), les revues de comptes (B) et la journalisation (C) sont de vraies améliorations, mais aucune ne réduit l'exposition directe de l'accès d'administration ni le risque de propagation vers les systèmes de sûreté : on corrige d'abord l'architecture.",
        "concept": "Critical Infrastructure — cloisonnement des systèmes vitaux, durcissement des accès d'administration"
      },
      {
        "situation": "Les correctifs d'urgence sont déployés. En comité de direction, vous présentez le plan de résilience réseau à long terme de l'aéroport, en tenant compte du statut d'OIV.",
        "q": "Quel ensemble de mesures constitue le MEILLEUR plan de résilience réseau ?",
        "choix": [
          "Doubler tous les équipements réseau du terminal principal",
          "Redondance des liens et des équipements sans point unique de défaillance (SPOF), diversité des opérateurs, segmentation stricte des réseaux critiques, protection DDoS permanente et exercices de crise réguliers avec les parties prenantes",
          "Migrer tous les systèmes de l'aéroport vers un cloud public unique",
          "Recruter deux analystes SOC supplémentaires"
        ],
        "reponse": 1,
        "pourquoi": [
          "Doubler un seul terminal laisse tous les autres SPOF : la redondance se pense de bout en bout.",
          "Bonne réponse : SPOF éliminés, diversité d'opérateurs, segmentation stricte, protection DDoS permanente et exercices avec les parties prenantes.",
          "Un cloud unique crée une nouvelle dépendance critique : on déplace le SPOF, on ne l'élimine pas.",
          "Renforcer le SOC aide à détecter, mais ne constitue pas un plan de résilience."
        ],
        "explication": "La résilience d'une infrastructure vitale est un système complet : élimination des SPOF (liens, équipements, sites), diversité des fournisseurs télécoms (deux liens du même opérateur partagent souvent le même fourreau), segmentation des réseaux critiques, protection DDoS toujours active, et exercices impliquant compagnies, prestataires et autorités. Doubler un seul terminal (A) laisse d'autres SPOF. Un cloud unique (C) crée une nouvelle dépendance critique. Renforcer le SOC (D) aide mais ne constitue pas un plan de résilience.",
        "concept": "Network Resilience — élimination des SPOF, diversité et redondance"
      },
      {
        "situation": "Dernier point du comité : l'attaque DDoS a été revendiquée par un groupe hacktiviste dans un contexte géopolitique tendu. Le préfet demande comment l'aéroport s'articule avec l'État en cas de nouvelle attaque.",
        "q": "En tant qu'OIV, quelle est votre obligation et votre MEILLEURE pratique ?",
        "choix": [
          "Riposter techniquement contre l'infrastructure du groupe hacktiviste",
          "Gérer l'incident en interne et ne communiquer qu'en cas de fuite dans la presse",
          "Notifier les incidents significatifs à l'ANSSI conformément aux obligations OIV/NIS2, entretenir des canaux d'échange avec les autorités et intégrer l'État dans les exercices de crise",
          "Confier la gestion de crise à un prestataire étranger"
        ],
        "reponse": 2,
        "pourquoi": [
          "Le hack-back est illégal pour un acteur privé, quel que soit le contexte géopolitique.",
          "Le silence est une infraction pour un OIV : la notification est une obligation légale, pas une option.",
          "Bonne réponse : notification à l'ANSSI (SAIV, NIS2), canaux d'échange établis et exercices conjoints avec l'État.",
          "Externaliser la crise d'une infrastructure vitale à un prestataire étranger pose des problèmes évidents de souveraineté."
        ],
        "explication": "Un OIV a l'obligation légale de notifier les incidents de sécurité significatifs à l'ANSSI (dispositif SAIV, et NIS2 par ailleurs), et tout intérêt à coopérer en continu : partage de renseignement sur la menace, exercices conjoints, points de contact établis avant la crise. Le silence (B) est une infraction. Le hack-back (A) est illégal pour un acteur privé. Externaliser la crise d'une infrastructure vitale à un prestataire étranger (D) pose des problèmes évidents de souveraineté.",
        "concept": "Obligations réglementaires OIV/NIS2 — notification et coopération avec l'État"
      }
    ],
    "debrief": "Ce scénario, inspiré des vagues de DDoS hacktivistes contre les aéroports et sites institutionnels européens, combine plusieurs leçons du Domaine 4 : la mitigation DDoS se prépare et se contracte avant l'attaque ; un DDoS peut masquer une intrusion ciblée, d'où l'importance de la corrélation ; les accès d'administration ne s'exposent jamais sans MFA et bastion ; et la résilience se construit par l'élimination des SPOF et la diversité des liens. Pour un OIV, ajoutez les obligations de notification à l'ANSSI et la coopération avec l'État — et jamais de riposte offensive."
  },
  {
    "id": "sc-9",
    "domaine": 5,
    "titre": "Banque : la fraude aux mille virements",
    "icone": "🏦",
    "difficulte": 2,
    "contexte": "Vous êtes responsable de la sécurité des SI de la Banque Régionale du Centre. L'audit interne vous alerte : un gestionnaire de back-office est soupçonné d'avoir détourné 1,2 million d'euros en trois ans, par des centaines de petits virements vers des comptes complices. L'analyse révèle qu'il pouvait à la fois créer des bénéficiaires, saisir des virements ET les valider — il avait conservé les droits de ses trois postes successifs. Personne n'avait jamais revu ses habilitations. La direction générale exige un plan de remédiation complet du dispositif IAM.",
    "etapes": [
      {
        "situation": "L'enquête interne démarre. Vous analysez comment la fraude a été rendue possible sur le plan des contrôles d'accès.",
        "q": "Quelle défaillance FONDAMENTALE a permis cette fraude ?",
        "choix": [
          "L'absence de séparation des tâches (Separation of Duties) : une même personne cumulait création de bénéficiaire, saisie et validation des virements",
          "L'absence de supervision des transactions atypiques (monitoring anti-fraude)",
          "L'absence d'authentification forte (MFA) sur l'application de virements",
          "L'absence de plafond technique sur le montant des virements individuels"
        ],
        "reponse": 0,
        "pourquoi": [
          "Bonne réponse : le cumul création + saisie + validation supprimait tout regard tiers — la défaillance fondamentale est l'absence de SoD.",
          "Un monitoring anti-fraude aurait pu détecter plus tôt, mais c'est un contrôle détectif : la faille fondamentale est préventive.",
          "Le fraudeur utilisait ses propres accès légitimes : renforcer l'authentification n'aurait rien changé.",
          "Les virements étaient précisément petits pour passer sous les seuils : un plafond n'aurait pas empêché la fraude."
        ],
        "explication": "La séparation des tâches est LE contrôle anti-fraude : aucune personne seule ne doit pouvoir dérouler de bout en bout une transaction sensible. Ici, le cumul création + saisie + validation supprimait tout regard tiers. Le MFA (C) n'aurait rien changé : le fraudeur utilisait ses accès légitimes. Le monitoring anti-fraude (B) est un contrôle détectif utile mais la défaillance fondamentale est préventive. Le plafond (D) était contourné par construction : des centaines de petits virements sous les seuils.",
        "concept": "Separation of Duties (SoD) — contrôle anti-fraude fondamental"
      },
      {
        "situation": "Vous constatez que le gestionnaire avait accumulé les droits de ses trois postes successifs : chaque mobilité interne avait ajouté des droits sans jamais en retirer.",
        "q": "Comment s'appelle ce phénomène et quel est le contrôle qui l'empêche ?",
        "choix": [
          "Le privilege creep (accumulation de privilèges), empêché par des revues d'accès périodiques et des processus de mobilité qui réattribuent les droits au lieu de les additionner",
          "L'accumulation de combinaisons toxiques (toxic combinations), empêchée par une matrice de séparation des tâches",
          "L'élévation de privilèges (privilege escalation), empêchée par le durcissement des applications",
          "Les comptes orphelins (orphaned accounts), empêchés par le deprovisioning automatisé au départ"
        ],
        "reponse": 0,
        "pourquoi": [
          "Bonne réponse : le privilege creep se combat par les revues d'accès périodiques et des mobilités qui réattribuent au lieu d'additionner.",
          "Les combinaisons toxiques sont la conséquence SoD de l'accumulation, pas le nom du phénomène : la matrice complète la recertification, elle ne la remplace pas.",
          "L'escalade de privilèges est une attaque technique exploitant une faille, pas une accumulation administrative de droits légitimes.",
          "Les comptes orphelins concernent les collaborateurs partis : ici, l'intéressé était toujours en poste avec des droits officiels."
        ],
        "explication": "Le privilege creep (ou authorization creep) désigne l'accumulation de droits au fil des mobilités. Les parades : des revues d'accès périodiques (access recertification) où chaque manager valide les droits de ses équipes, et un processus de mutation qui applique « nouveaux droits = droits du nouveau poste », pas une addition. Les combinaisons toxiques (B) sont la conséquence de l'accumulation, pas son nom ; l'escalade de privilèges (C) est une attaque technique, pas une dérive administrative ; les comptes orphelins (D) concernent les partants — ce gestionnaire était toujours en poste.",
        "concept": "Privilege Creep — recertification périodique des accès"
      },
      {
        "situation": "Vous refondez le modèle d'habilitation. La banque compte 2 400 collaborateurs et environ 150 métiers types. Aujourd'hui, les droits sont attribués individuellement, à la demande, par des tickets.",
        "q": "Quel modèle de contrôle d'accès recommandez-vous ?",
        "choix": [
          "Le DAC (Discretionary Access Control) : chaque propriétaire de ressource décide qui y accède",
          "Le RBAC (Role-Based Access Control) : des rôles métiers définis avec les métiers, intégrant les contraintes de séparation des tâches, et l'attribution des droits par affectation à un rôle",
          "Donner les mêmes droits à tout le monde et surveiller les logs",
          "Continuer l'attribution individuelle mais avec un double niveau d'approbation"
        ],
        "reponse": 1,
        "pourquoi": [
          "Le DAC disperse les décisions chez chaque propriétaire, sans vision d'ensemble ni matrice de séparation des tâches.",
          "Bonne réponse : le RBAC attache les droits à des rôles métiers intégrant la SoD — une mutation devient un changement de rôle.",
          "Des droits identiques pour tous avec surveillance a posteriori nient le principe même du contrôle d'accès.",
          "Le double niveau d'approbation par tickets reste ingérable à 2 400 collaborateurs et n'empêche pas l'accumulation."
        ],
        "explication": "Avec 150 métiers types, le RBAC est le modèle adapté : les droits sont attachés à des rôles conçus avec les métiers, les combinaisons toxiques (saisie + validation) sont interdites au niveau du modèle, et une mutation se traduit par un changement de rôle — ce qui élimine structurellement le privilege creep. L'attribution individuelle (D) reste ingérable à cette échelle. Le DAC (A) disperse les décisions sans vision d'ensemble. L'option C est une négation du contrôle d'accès.",
        "concept": "RBAC — rôles métiers et matrice de séparation des tâches"
      },
      {
        "situation": "Le modèle RBAC est en place. Pour les opérations les plus sensibles (virements au-delà d'un seuil, modification des paramètres de l'outil de paiement), le comité des risques demande des garanties supplémentaires.",
        "q": "Quels contrôles complémentaires proposez-vous pour ces opérations critiques ?",
        "choix": [
          "L'enregistrement vidéo des écrans du back-office",
          "Un simple e-mail d'alerte au manager après chaque opération",
          "Le dual control (validation par une seconde personne) pour les opérations au-delà des seuils, complété par des rotations de poste et des congés obligatoires pour faire émerger les fraudes dissimulées",
          "L'interdiction des virements supérieurs au seuil"
        ],
        "reponse": 2,
        "pourquoi": [
          "L'enregistrement vidéo est disproportionné, intrusif et difficilement exploitable.",
          "Une alerte a posteriori détecte après coup : les opérations critiques exigent un contrôle préventif.",
          "Bonne réponse : dual control préventif au-delà des seuils, plus rotation de poste et congés obligatoires pour faire émerger les fraudes.",
          "Interdire les opérations bloque le métier : la sécurité encadre, elle n'empêche pas de travailler."
        ],
        "explication": "Le dual control (ou two-person rule) impose un second regard sur chaque opération critique — préventif, contrairement à l'alerte a posteriori (B). La job rotation et les congés obligatoires (mandatory vacation) sont des contrôles détectifs classiques du secteur bancaire : une fraude entretenue quotidiennement se révèle quand son auteur s'absente. La vidéo (A) est disproportionnée et peu exploitable. Interdire les opérations (D) bloque le métier.",
        "concept": "Dual Control, Job Rotation, Mandatory Vacation — le triptyque bancaire anti-fraude"
      },
      {
        "situation": "Dernier chantier : l'audit a aussi révélé que d'anciens salariés conservaient des comptes actifs des semaines après leur départ, et que les comptes des prestataires n'expiraient jamais.",
        "q": "Quelle mesure structurelle mettez-vous en place ?",
        "choix": [
          "Demander aux managers de penser à signaler les départs",
          "Supprimer tous les comptes inactifs une fois par an",
          "Faire signer aux partants un engagement de ne plus se connecter",
          "Automatiser le cycle de vie des identités (joiner-mover-leaver) en connectant l'IAM au SIRH : désactivation immédiate au départ, comptes prestataires à durée limitée avec propriétaire interne responsable"
        ],
        "reponse": 3,
        "pourquoi": [
          "Compter sur la mémoire des managers est précisément ce qui vient d'échouer.",
          "Une purge annuelle laisse jusqu'à un an d'exposition aux comptes dormants.",
          "Un engagement signé n'est pas un contrôle : il ne désactive aucun accès.",
          "Bonne réponse : cycle de vie automatisé depuis le SIRH — désactivation immédiate au départ, comptes tiers à durée limitée avec sponsor interne."
        ],
        "explication": "Le provisioning/deprovisioning doit être automatisé et piloté par la source RH autoritaire : l'arrivée crée les accès du rôle, la mutation les remplace, le départ les désactive immédiatement. Les comptes de tiers doivent expirer par défaut et avoir un sponsor interne qui en répond. Compter sur la mémoire des managers (A) est ce qui vient d'échouer. Une purge annuelle (B) laisse des mois d'exposition. Un engagement signé (C) n'est pas un contrôle technique.",
        "concept": "Identity Lifecycle — provisioning automatisé joiner/mover/leaver"
      }
    ],
    "debrief": "Cette étude de cas, typique des fraudes internes bancaires réelles, couvre les contrôles anti-fraude majeurs du Domaine 5 : la séparation des tâches (aucun individu ne déroule seul une transaction sensible), la lutte contre le privilege creep par les revues d'accès et le RBAC, le dual control pour les opérations critiques, et les contrôles détectifs propres au secteur financier — job rotation et congés obligatoires. Retenez enfin que le cycle de vie des identités (joiner-mover-leaver) doit être automatisé depuis le SIRH : les comptes orphelins et les droits accumulés sont le carburant de la fraude interne."
  },
  {
    "id": "sc-10",
    "domaine": 5,
    "titre": "PME : le piège du smartphone",
    "icone": "📱",
    "difficulte": 1,
    "contexte": "Vous êtes consultant sécurité pour Charpentes Morel, une PME de 140 salariés spécialisée dans la construction bois. Le dirigeant vous appelle, inquiet : sa comptable a reçu un e-mail « du président » exigeant un virement urgent et confidentiel de 87 000 euros, qu'elle a heureusement trouvé étrange. En creusant, vous découvrez que les commerciaux consultent la messagerie et le CRM de l'entreprise depuis leurs téléphones personnels sans aucun encadrement, que personne n'utilise de MFA, et que le mot de passe « Morel2024! » circule sur des post-it. La PME n'a ni RSSI ni politique de sécurité.",
    "etapes": [
      {
        "situation": "La tentative de fraude au président a échoué de justesse. Le dirigeant demande la mesure qui aurait le mieux protégé l'entreprise si la comptable avait cliqué.",
        "q": "Quelle mesure IAM aurait le MIEUX limité le risque de compromission des comptes ?",
        "choix": [
          "Un pare-feu plus puissant",
          "Le changement des mots de passe chaque mois",
          "Un antivirus plus récent",
          "L'activation du MFA (multi-factor authentication) sur la messagerie et les applications de l'entreprise"
        ],
        "reponse": 3,
        "pourquoi": [
          "Le pare-feu ne distingue pas une connexion légitime d'une connexion avec identifiants volés.",
          "La rotation mensuelle pousse aux mots de passe faibles : NIST 800-63B ne la recommande plus sans indice de compromission.",
          "L'antivirus n'empêche pas l'utilisation d'identifiants volés depuis Internet.",
          "Bonne réponse : le MFA bloque l'accès même quand le mot de passe est hameçonné ou affiché sur un post-it."
        ],
        "explication": "Le MFA est la mesure au meilleur rapport efficacité/coût contre la compromission de comptes : même si un mot de passe est deviné, hameçonné ou trouvé sur un post-it, le facteur supplémentaire bloque l'accès. L'antivirus (C) et le pare-feu (A) n'empêchent pas l'utilisation d'identifiants volés depuis Internet. La rotation mensuelle (B) pousse aux mots de passe faibles et prévisibles — les référentiels modernes (NIST 800-63B) ne la recommandent plus sans indice de compromission.",
        "concept": "MFA — le contrôle prioritaire contre le vol d'identifiants"
      },
      {
        "situation": "Vous auditez les usages mobiles : e-mails professionnels, devis clients et photos de chantiers transitent par les smartphones personnels des commerciaux, sans code PIN pour certains. Un téléphone a déjà été perdu l'an dernier.",
        "q": "Quelle approche recommandez-vous pour encadrer le BYOD ?",
        "choix": [
          "Acheter des téléphones professionnels pour toute l'entreprise",
          "Une politique BYOD formalisée avec MDM/MAM : conteneur professionnel chiffré et séparé, exigences minimales (code, chiffrement, verrouillage), et effacement à distance limité aux données de l'entreprise",
          "Interdire immédiatement tout usage professionnel des téléphones personnels",
          "Faire confiance aux salariés : ce sont leurs téléphones"
        ],
        "reponse": 1,
        "pourquoi": [
          "Une flotte complète est une option coûteuse à évaluer, pas la réponse la plus proportionnée pour cette PME.",
          "Bonne réponse : politique BYOD outillée (MDM/MAM) — conteneur chiffré, prérequis minimaux, selective wipe respectueux de la vie privée.",
          "L'interdiction brutale sera contournée et pénalise l'activité commerciale.",
          "Le laisser-faire vient de démontrer ses limites : un téléphone a déjà été perdu."
        ],
        "explication": "Le BYOD s'encadre, il ne s'ignore ni ne s'interdit brutalement : une politique claire adossée à un MDM/MAM crée un conteneur professionnel chiffré, impose des prérequis (code, version d'OS, verrouillage) et permet le selective wipe — effacer les données de l'entreprise sans toucher aux photos de famille, point clé d'acceptabilité et de respect de la vie privée. L'interdiction (C) sera contournée et pénalise le business. Le laisser-faire (D) vient de démontrer ses limites. La flotte complète (A) est une option coûteuse que la PME peut évaluer, mais pas la réponse la plus adaptée.",
        "concept": "BYOD — MDM/MAM, conteneurisation et selective wipe"
      },
      {
        "situation": "Vous analysez l'e-mail frauduleux : l'adresse imitait celle du dirigeant à une lettre près, et le message exploitait l'urgence et la confidentialité. La comptable explique qu'elle a « juste eu de la chance » d'avoir un doute.",
        "q": "Quel contrôle organisationnel mettez-vous en place contre la fraude au président (BEC) ?",
        "choix": [
          "Une procédure de vérification hors bande (out-of-band) obligatoire : tout virement inhabituel ou changement de RIB est confirmé par un canal différent (appel au numéro connu), complétée par un double regard au-delà d'un seuil",
          "Punir tout employé qui se ferait piéger, pour responsabiliser",
          "L'interdiction pour la comptabilité d'utiliser la messagerie",
          "Un filtre anti-spam plus strict, qui réglera le problème"
        ],
        "reponse": 0,
        "pourquoi": [
          "Bonne réponse : vérification out-of-band systématique et double regard au-delà d'un seuil — un contrôle procédural, pas technique.",
          "La punition installe une culture de la peur où les incidents se cachent.",
          "Priver la comptabilité de messagerie est inapplicable opérationnellement.",
          "Le filtrage aide, mais des e-mails bien conçus passeront toujours."
        ],
        "explication": "Contre le Business Email Compromise, le contrôle décisif est procédural : une vérification par un canal indépendant (rappeler le dirigeant à son numéro connu, jamais à celui indiqué dans l'e-mail) et un dual control sur les paiements au-delà d'un seuil. La punition (B) crée une culture de la peur où les incidents sont cachés — l'inverse d'une security culture saine. Le filtrage (D) aide mais des e-mails bien conçus passeront toujours. L'option C est absurde opérationnellement.",
        "concept": "BEC / fraude au président — vérification out-of-band et dual control"
      },
      {
        "situation": "Le dirigeant veut aussi agir sur le facteur humain : les post-it de mots de passe, les clics hasardeux, l'absence totale de réflexes.",
        "q": "Quelle démarche de sensibilisation est la PLUS efficace pour cette PME ?",
        "choix": [
          "Envoyer une fois par e-mail les 30 pages de la nouvelle politique de sécurité",
          "Une journée de formation unique à l'embauche",
          "Un programme continu et adapté : sessions courtes et concrètes par métier, exercices de phishing simulé bienveillants, gestionnaire de mots de passe fourni, et rappels réguliers",
          "Un règlement intérieur prévoyant des sanctions"
        ],
        "reponse": 2,
        "pourquoi": [
          "Un envoi massif de documentation ne change aucun comportement.",
          "Une journée unique s'oublie : sans rappels réguliers, les réflexes retombent.",
          "Bonne réponse : programme continu, ciblé par métier, simulations bienveillantes et outils qui rendent le bon comportement facile.",
          "La menace de sanction dissuade de signaler — l'inverse du but recherché."
        ],
        "explication": "La sensibilisation efficace est continue, concrète et positive : formats courts ciblés par métier (la comptabilité sur le BEC, les commerciaux sur le mobile), simulations de phishing pédagogiques (mesurer et former, pas piéger et punir), et surtout des outils qui rendent le bon comportement facile — un password manager élimine les post-it mieux que n'importe quelle interdiction. Un envoi unique (A), une journée isolée (B) ou la menace (D) ne changent pas durablement les comportements.",
        "concept": "Security Awareness — programme continu et facilitation du bon comportement"
      },
      {
        "situation": "Six mois plus tard, MFA déployé, BYOD encadré, procédures de virement en place. Une campagne de phishing simulé affiche encore 18 % de clics, mais 40 % des destinataires ont signalé l'e-mail suspect — contre 0 % avant.",
        "q": "Comment interprétez-vous ces résultats en tant que consultant ?",
        "choix": [
          "C'est une réussite totale : on peut arrêter les campagnes",
          "C'est une progression réelle : le taux de signalement est un indicateur clé de la détection humaine ; on poursuit le programme en ciblant les populations à risque, sachant que le risque ne sera jamais nul — d'où l'importance des contrôles techniques en profondeur",
          "C'est un échec : il reste 18 % de clics, il faut sanctionner les cliqueurs",
          "Les statistiques de phishing ne veulent rien dire"
        ],
        "reponse": 1,
        "pourquoi": [
          "S'arrêter ferait retomber les réflexes : la sensibilisation est un processus permanent.",
          "Bonne réponse : le taux de signalement est l'indicateur clé de détection humaine — on poursuit, le risque résiduel étant couvert par les contrôles techniques.",
          "Sanctionner détruirait la dynamique de signalement qui vient de naître.",
          "Ces métriques sont au contraire les indicateurs standard d'un programme d'awareness."
        ],
        "explication": "Le taux de signalement (reporting rate) est aussi important que le taux de clic : des employés qui signalent transforment chaque salarié en capteur de détection. On ne vise pas 0 % de clics — irréaliste — mais une amélioration continue, en acceptant que le facteur humain reste faillible : c'est précisément pourquoi le MFA, les procédures de virement et la défense en profondeur existent. Sanctionner (C) détruirait la dynamique de signalement. S'arrêter (A) ferait retomber les réflexes.",
        "concept": "Métriques de sensibilisation — taux de signalement et défense en profondeur"
      }
    ],
    "debrief": "Ce scénario de PME concentre les basiques qui stoppent la majorité des attaques réelles : le MFA d'abord (le meilleur investissement IAM), l'encadrement du BYOD par conteneurisation plutôt que par interdiction, et des procédures out-of-band contre la fraude au président — un contrôle organisationnel, pas technique. Retenez la philosophie : rendre le bon comportement facile (password manager), mesurer le signalement autant que les clics, et ne jamais bâtir la sécurité sur la punition. L'humain restant faillible, les contrôles techniques et procéduraux forment le filet de sécurité."
  },
  {
    "id": "sc-11",
    "domaine": 6,
    "titre": "Pentest : l'art du cadrage",
    "icone": "🎯",
    "difficulte": 2,
    "contexte": "Vous êtes RSSI de MutuAssur, une mutuelle d'assurance santé de 3 000 collaborateurs. Le comité d'audit exige un test d'intrusion complet du SI — applications web, réseau interne, et ingénierie sociale — avant le lancement d'un nouveau portail adhérents manipulant des données de santé. Vous devez organiser la prestation avec un cabinet spécialisé. Le DSI est réticent : « La dernière fois, un scanner a fait tomber la production pendant six heures. » La production tourne 24h/24 car les téléconseillers travaillent en horaires étendus.",
    "etapes": [
      {
        "situation": "Avant toute chose, vous préparez le cadre contractuel de la mission avec le cabinet retenu.",
        "q": "Quel document est INDISPENSABLE avant le premier paquet envoyé par les pentesteurs ?",
        "choix": [
          "Les Rules of Engagement signées : périmètre précis (systèmes inclus/exclus), fenêtres horaires, techniques autorisées et interdites, contacts d'urgence et autorisation écrite formelle de la direction",
          "Le rapport du précédent audit",
          "La liste des vulnérabilités déjà connues",
          "Le certificat ISO 27001 du prestataire"
        ],
        "reponse": 0,
        "pourquoi": [
          "Bonne réponse : Rules of Engagement signées et autorisation écrite — la protection juridique des deux parties.",
          "Utile pour le contexte, mais aucun rapport d'audit n'autorise légalement une intrusion.",
          "La liste des vulnérabilités connues oriente le test, elle ne l'autorise pas.",
          "La certification du prestataire rassure sur son sérieux, pas sur la légalité du test."
        ],
        "explication": "Sans autorisation écrite et Rules of Engagement signées, un test d'intrusion est juridiquement une intrusion : le document définit le périmètre exact, les fenêtres, les techniques permises (ou proscrites, comme le DoS), les contacts d'escalade et la conduite à tenir en cas de découverte critique. C'est la protection juridique des deux parties — le fameux « get out of jail free card ». Les autres documents sont utiles mais aucun n'autorise légalement le test.",
        "concept": "Rules of Engagement — autorisation formelle et cadrage du pentest"
      },
      {
        "situation": "Le DSI, échaudé par l'incident passé, demande d'exclure du périmètre la production et de ne tester qu'un environnement de recette « identique ».",
        "q": "Comment arbitrez-vous cette demande ?",
        "choix": [
          "Refuser : on teste tout en production sans restriction, sinon le test ne vaut rien",
          "Annuler le pentest et se contenter d'un scan de vulnérabilités automatique",
          "Négocier une approche par les risques : tests sur la production avec précautions (fenêtres creuses, exclusion des techniques destructives, supervision renforcée, procédure d'arrêt d'urgence), les scénarios dangereux étant joués en recette",
          "Accepter : la stabilité de la production passe avant tout"
        ],
        "reponse": 2,
        "pourquoi": [
          "Tout tester sans précaution fait courir un risque opérationnel injustifiable sur une production 24h/24.",
          "Un scan automatique ne répond pas à l'exigence d'un test d'intrusion complet du comité d'audit.",
          "Bonne réponse : approche par les risques — production encadrée (fenêtres, exclusions, arrêt d'urgence), scénarios dangereux en recette.",
          "Tester uniquement la recette donne une fausse assurance : elle n'est jamais identique à la production."
        ],
        "explication": "Un environnement de recette n'est jamais parfaitement identique (configurations, données, interconnexions) : tester uniquement hors production donne une fausse assurance. La réponse professionnelle équilibre valeur du test et risque opérationnel : production incluse mais encadrée (fenêtres, exclusions explicites du DoS, canal d'arrêt immédiat), scénarios risqués rejoués en recette. Le tout-recette (D) et le tout-production sans précaution (A) sont deux extrêmes ; le scan seul (B) ne répond pas à l'exigence du comité d'audit.",
        "concept": "Risk-based Testing — valeur du test vs risque opérationnel"
      },
      {
        "situation": "La mission démarre en boîte grise (grey box). Au troisième jour, les pentesteurs vous appellent en urgence : ils ont découvert une vulnérabilité critique donnant accès aux données de santé de tous les adhérents — et des traces suspectes suggérant que quelqu'un d'autre l'exploite peut-être déjà.",
        "q": "Que doit-il se passer conformément aux Rules of Engagement ?",
        "choix": [
          "On efface les traces suspectes pour garder le test « propre »",
          "Les pentesteurs corrigent eux-mêmes la vulnérabilité",
          "Les pentesteurs continuent leur mission et mentionneront tout dans le rapport final",
          "Arrêt sur ce périmètre et notification immédiate au contact d'escalade : la vulnérabilité critique est signalée sans délai, et l'indice de compromission antérieure déclenche le processus de réponse à incident"
        ],
        "reponse": 3,
        "pourquoi": [
          "Effacer des traces détruit des preuves, potentiellement celles d'un véritable attaquant.",
          "Les pentesteurs testent et documentent : ils ne corrigent pas les systèmes du client.",
          "Attendre le rapport final laisse des données de santé exposées, peut-être déjà exploitées.",
          "Bonne réponse : escalade immédiate prévue par les RoE — signalement de la vulnérabilité critique et bascule en réponse à incident sur l'indice de compromission."
        ],
        "explication": "Les Rules of Engagement prévoient toujours deux cas d'escalade immédiate : la découverte d'une vulnérabilité critique exposant des données sensibles (signalement sans attendre le rapport) et les indices d'une compromission réelle préexistante — le pentest s'interrompt sur ce périmètre et la réponse à incident prend le relais, avec préservation des preuves. Attendre le rapport (C) laisse les données exposées. Les pentesteurs ne corrigent pas (B) : ils testent. Effacer des traces (A) détruit des preuves, potentiellement d'un vrai attaquant.",
        "concept": "Escalation Procedures — vulnérabilité critique et compromission découverte en test"
      },
      {
        "situation": "L'alerte était fondée : la vulnérabilité est corrigée en urgence et l'investigation écarte finalement une compromission réelle. La mission se termine. Le rapport arrive : 3 vulnérabilités critiques, 8 majeures, 23 mineures. Le DSI propose de « tout corriger dans l'ordre du rapport ».",
        "q": "Quelle est la MEILLEURE façon d'exploiter le rapport de pentest ?",
        "choix": [
          "Corriger uniquement les 3 critiques et archiver le rapport",
          "Transmettre le rapport brut au comité d'audit sans plan d'action",
          "Prioriser par le risque métier : criticité contextualisée (exposabilité, données concernées, exploitabilité), plan de remédiation avec responsables et échéances, puis tests de re-validation (retest) des correctifs",
          "Corriger les 34 vulnérabilités dans l'ordre où le rapport les liste"
        ],
        "reponse": 2,
        "pourquoi": [
          "Ne traiter que les critiques laisse des chaînes d'exploitation par combinaison de failles moyennes.",
          "Le comité d'audit attend un plan d'action, pas un document brut.",
          "Bonne réponse : priorisation par le risque métier contextualisé, plan avec responsables et échéances, retest des correctifs.",
          "L'ordre du rapport n'est pas un ordre de risque : c'est une liste, pas une priorisation."
        ],
        "explication": "Un rapport de pentest se traite par le risque, pas par l'ordre des pages : chaque constat est contextualisé (une vulnérabilité « majeure » sur un système exposé peut primer une « critique » sur un système isolé), transformé en plan d'action avec propriétaires et échéances, et chaque correctif est re-testé — un correctif non vérifié est une hypothèse. Ne traiter que les critiques (A) laisse des chaînes d'exploitation possibles par combinaison de failles moyennes. Le comité d'audit attend un plan, pas un document brut (B).",
        "concept": "Remediation Management — priorisation par le risque et retest"
      },
      {
        "situation": "Le comité d'audit, satisfait, demande comment garantir le niveau de sécurité dans la durée, au-delà de ce pentest ponctuel.",
        "q": "Que proposez-vous ?",
        "choix": [
          "Faire confiance aux correctifs appliqués : le SI est maintenant sécurisé",
          "Un programme d'assurance continue : scans de vulnérabilités réguliers automatisés, pentests périodiques et à chaque évolution majeure, exercices ciblés (red team) à maturité, et indicateurs suivis en comité",
          "Un pentest identique tous les cinq ans",
          "Remplacer les pentests par la certification des développeurs"
        ],
        "reponse": 1,
        "pourquoi": [
          "« Sécurisé une fois pour toutes » n'existe pas : le SI et la menace évoluent en permanence.",
          "Bonne réponse : assurance continue — scans réguliers, pentests périodiques et sur évolution majeure, red team à maturité, indicateurs en comité.",
          "Cinq ans entre deux tests laissent des années d'angle mort.",
          "Former les développeurs est complémentaire, jamais substitutif à l'évaluation indépendante."
        ],
        "explication": "La sécurité s'évalue en continu : les scans automatisés détectent en permanence les nouvelles vulnérabilités et régressions, les pentests apportent périodiquement l'intelligence humaine (et systématiquement avant chaque mise en production majeure), et les exercices red team testent la détection et la réponse une fois la maturité suffisante. Un instantané tous les cinq ans (C) laisse des années d'angle mort. « Sécurisé une fois pour toutes » (A) n'existe pas. La formation des développeurs (D) est complémentaire, pas substitutive.",
        "concept": "Continuous Assessment — scans, pentests périodiques et red teaming"
      }
    ],
    "debrief": "Ce scénario couvre le cycle complet d'un test d'intrusion professionnel : jamais de test sans autorisation écrite et Rules of Engagement signées (protection juridique mutuelle), un périmètre négocié par les risques plutôt que par le confort, des procédures d'escalade pour les découvertes critiques et les compromissions réelles, puis une exploitation du rapport pilotée par le risque métier avec retest systématique. Retenez pour l'examen : le pentesteur signale et documente, il ne corrige pas ; une compromission réelle découverte en test bascule immédiatement en réponse à incident ; et l'assurance sécurité est un programme continu, pas un événement."
  },
  {
    "id": "sc-12",
    "domaine": 6,
    "titre": "Le patch fantôme",
    "icone": "📉",
    "difficulte": 2,
    "contexte": "Vous venez de prendre la direction sécurité de CreditScore+, une société qui agrège des données financières sur 30 millions de particuliers pour évaluer leur solvabilité. Une vulnérabilité critique vient d'être publiée sur le framework web utilisé par votre portail de contestation en ligne, exploitée activement dans la nature (exploit public disponible). Votre prédécesseur a laissé un processus de gestion des vulnérabilités embryonnaire : un e-mail mensuel listant les CVE « importantes », envoyé aux équipes « pour action », sans suivi. Vous savez qu'une entreprise du même secteur a été dévastée pour n'avoir pas appliqué un correctif équivalent.",
    "etapes": [
      {
        "situation": "L'alerte sur la vulnérabilité critique (CVSS 9.8, exploitée activement) tombe un vendredi. L'e-mail mensuel de votre équipe partirait normalement dans douze jours.",
        "q": "Que faites-vous EN PREMIER ?",
        "choix": [
          "Déclencher une procédure d'urgence : identifier immédiatement tous les systèmes exposés utilisant le composant vulnérable, et appliquer le correctif ou des mesures de mitigation (virtual patching via WAF) sans attendre",
          "Demander à l'éditeur du framework des garanties écrites",
          "Attendre l'e-mail mensuel : le processus doit être respecté",
          "Commander un audit complet du portail"
        ],
        "reponse": 0,
        "pourquoi": [
          "Bonne réponse : procédure d'urgence — localiser, patcher les systèmes exposés, mitiger (virtual patching WAF) si le correctif doit attendre.",
          "Des garanties écrites de l'éditeur ne protègent aucun serveur exposé.",
          "Le cycle mensuel n'est pas conçu pour une exploitation active : le respecter ici est une faute de priorisation.",
          "Un audit complet prend des semaines : la fenêtre d'exploitation se compte en heures."
        ],
        "explication": "Une vulnérabilité critique activement exploitée sur un système exposé à Internet est une urgence opérationnelle : le cycle mensuel ne s'applique pas. Il faut immédiatement localiser les instances vulnérables, patcher en priorité les systèmes exposés, et si le patch ne peut être immédiat, mitiger (règle WAF, restriction d'accès). C'est exactement la fenêtre de quelques jours — parfois quelques heures — que les attaquants exploitent. Les options A, C et D consomment le temps qui manque.",
        "concept": "Emergency Patching — vulnérabilités critiques activement exploitées"
      },
      {
        "situation": "Problème : personne ne sait avec certitude quels serveurs utilisent le framework vulnérable. L'inventaire des applications date de deux ans, et plusieurs équipes déploient sans référencement.",
        "q": "Quelle capacité fondamentale fait défaut et doit être construite ?",
        "choix": [
          "Un abonnement à des flux de threat intelligence pour être alerté plus tôt",
          "Un contrat de support étendu avec l'éditeur du framework",
          "Des scans de vulnérabilités plus fréquents sur le périmètre déjà connu",
          "Un inventaire des actifs et des composants logiciels maintenu en continu (asset inventory, SBOM), sans lequel aucune gestion des vulnérabilités n'est fiable"
        ],
        "reponse": 3,
        "pourquoi": [
          "Être alerté plus tôt ne sert à rien si l'on ignore où le composant est déployé.",
          "Le support de l'éditeur fournit des correctifs, pas la connaissance de votre propre parc.",
          "Scanner plus souvent un périmètre incomplet reproduit exactement l'angle mort actuel.",
          "Bonne réponse : inventaire des actifs et SBOM maintenus en continu — le prérequis absolu de toute gestion des vulnérabilités."
        ],
        "explication": "On ne peut corriger que ce que l'on sait posséder : l'inventaire des actifs et la connaissance des composants logiciels (SBOM — Software Bill of Materials) sont le prérequis absolu de la gestion des vulnérabilités. C'est précisément la défaillance qui a coulé l'entreprise du même secteur : le composant vulnérable n'avait pas été identifié sur tous les serveurs. La threat intelligence (A) alerte plus tôt mais ne dit pas où vous êtes exposé ; des scans plus fréquents (C) sur un périmètre incomplet reproduisent l'angle mort ; le support éditeur (B) fournit des correctifs, pas la connaissance de votre parc. Sans inventaire, chaque nouvelle CVE redéclenche la même course aveugle.",
        "concept": "Asset Inventory & SBOM — prérequis de la gestion des vulnérabilités"
      },
      {
        "situation": "Le correctif est déployé sur les serveurs identifiés. Un ingénieur affirme : « C'est bon, tout est patché. » Vous vous souvenez que dans l'affaire du secteur, les équipes croyaient aussi avoir tout corrigé.",
        "q": "Quelle étape INDISPENSABLE reste-t-il à réaliser ?",
        "choix": [
          "Vérifier la remédiation par un scan indépendant : contrôler que la vulnérabilité n'est effectivement plus détectable sur l'ensemble du parc, y compris les systèmes qui auraient échappé à l'inventaire",
          "Planifier la vérification lors du prochain cycle mensuel de scans",
          "Documenter le correctif dans l'outil de gestion des changements et informer les équipes",
          "Clore le ticket et passer à la CVE suivante"
        ],
        "reponse": 0,
        "pourquoi": [
          "Bonne réponse : scan de vérification indépendant sur tout le parc — « trust, but verify », l'étape qui a manqué dans l'affaire célèbre.",
          "Attendre le cycle mensuel laisse des jours d'exposition à un exploit actif.",
          "Documenter le changement est une bonne pratique, mais une déclaration n'est pas une preuve d'efficacité.",
          "Clore sans vérifier transforme une croyance en angle mort."
        ],
        "explication": "La déclaration de correction n'est pas une preuve : la validation passe par un scan de vérification indépendant sur tout le périmètre — c'est l'étape qui a manqué dans l'affaire célèbre, où un scan mal configuré n'avait pas détecté les serveurs restés vulnérables. Le principe d'audit s'applique : « trust, but verify ». Documenter le changement (C) est une bonne pratique mais ne prouve rien ; clore sans vérifier (D) transforme une croyance en angle mort ; attendre le cycle mensuel (B) laisse des jours d'exposition à un exploit actif.",
        "concept": "Remediation Verification — scanner pour prouver, pas pour croire"
      },
      {
        "situation": "La vérification révèle deux serveurs encore vulnérables, oubliés car déployés hors processus par une équipe marketing. Vous structurez maintenant le programme pérenne de gestion des vulnérabilités.",
        "q": "Quels éléments composent un programme de vulnerability management complet ?",
        "choix": [
          "La délégation complète du sujet à chaque équipe applicative",
          "Un scan annuel et un rapport à la direction",
          "L'abonnement à un flux de renseignement sur les menaces",
          "Un cycle continu : découverte des actifs, scans réguliers authentifiés, priorisation par le risque (criticité, exposition, exploitation active), remédiation avec SLA par sévérité, vérification, et reporting d'indicateurs (délai moyen de correction, taux de couverture)"
        ],
        "pourquoi": [
          "La délégation sans cadre central reproduit les serveurs oubliés du marketing.",
          "Un scan annuel est décoratif face à un flux continu de nouvelles vulnérabilités.",
          "Le renseignement seul informe, il ne corrige rien.",
          "Bonne réponse : cycle complet — découverte, scans authentifiés, priorisation par le risque réel, SLA, vérification, indicateurs."
        ],
        "reponse": 3,
        "explication": "Le vulnerability management est un cycle continu et outillé : découvrir (inventaire dynamique), scanner (en mode authentifié pour voir l'intérieur des systèmes), prioriser par le risque réel (une CVSS 7 exploitée activement sur un serveur exposé prime une 9 sur un système isolé — logique des catalogues d'exploitation active type KEV), corriger dans des délais engagés (SLA par sévérité), vérifier, et mesurer (MTTR, couverture). Un scan annuel (B) est décoratif ; le renseignement seul (C) n'agit pas ; la délégation sans cadre (A) reproduit les serveurs oubliés du marketing.",
        "concept": "Vulnerability Management Lifecycle — priorisation par le risque et SLA"
      },
      {
        "situation": "Votre programme fonctionne depuis six mois. Le comité exécutif vous demande de rendre compte : « Comment savons-nous que ça marche ? »",
        "q": "Quels indicateurs présentez-vous au comité ?",
        "choix": [
          "Le nombre total de vulnérabilités détectées depuis six mois",
          "Le nombre d'e-mails envoyés aux équipes",
          "Des indicateurs orientés risque et tendance : délai moyen de remédiation (MTTR) par sévérité vs SLA, pourcentage du parc couvert par les scans, nombre de vulnérabilités critiques exposées au-delà du SLA, et évolution dans le temps",
          "La liste brute des 4 000 CVE ouvertes"
        ],
        "reponse": 2,
        "pourquoi": [
          "Le volume détecté mesure l'activité, pas la performance — il peut croître quand la découverte s'améliore.",
          "Compter les e-mails mesure l'agitation, pas le résultat.",
          "Bonne réponse : MTTR par sévérité vs SLA, couverture des scans, stock de critiques hors délai et tendances.",
          "Une liste brute de 4 000 CVE est illisible pour un comité exécutif."
        ],
        "explication": "Un comité exécutif pilote par le risque et la tendance, pas par le volume brut : le MTTR par sévérité comparé aux SLA montre la capacité à réagir, la couverture des scans montre les angles morts, et le stock de critiques hors délai matérialise l'exposition résiduelle. Le nombre total de vulnérabilités (A) est un indicateur d'activité, pas de performance — il peut même augmenter quand la découverte s'améliore. Une liste brute (D) est illisible ; le volume d'e-mails (B) mesure l'agitation, pas le résultat.",
        "concept": "Security Metrics — KPI orientés risque pour la gouvernance"
      }
    ],
    "debrief": "Inspiré de l'affaire Equifax (2017), où un correctif Apache Struts non appliqué et une vérification défaillante ont exposé les données de 147 millions de personnes, ce scénario déroule la chaîne complète du vulnerability management : procédure d'urgence pour les vulnérabilités activement exploitées, inventaire des actifs et SBOM comme fondation, vérification systématique de la remédiation par scan indépendant (croire n'est pas prouver), puis programme continu avec priorisation par le risque, SLA et indicateurs. Retenez le triptyque fatal d'Equifax : inventaire incomplet, patch supposé appliqué, vérification manquée."
  },
  {
    "id": "sc-13",
    "domaine": 7,
    "titre": "Hôpital sous ransomware",
    "icone": "🏥",
    "difficulte": 3,
    "contexte": "Vous êtes RSSI du Centre Hospitalier Universitaire de Valmont, 1 200 lits, qui traite aussi des patients américains via un partenariat de télémédecine (données soumises à HIPAA). Samedi, 3h20 du matin : l'astreinte vous réveille. Les écrans du service des urgences affichent une demande de rançon. Le dossier patient informatisé (DPI) est inaccessible, la biologie et l'imagerie commencent à tomber. Des ambulances sont en route, un bloc opératoire est en cours d'intervention. Le chiffrement semble se propager encore sur le réseau.",
    "etapes": [
      {
        "situation": "Vous êtes en ligne avec l'astreinte technique et le directeur de garde. Le chiffrement se propage. Le bloc opère, les urgences reçoivent, les ambulances arrivent.",
        "q": "Quelle est votre PREMIÈRE priorité absolue ?",
        "choix": [
          "Payer la rançon rapidement pour tout débloquer",
          "La sécurité des patients : activation immédiate du plan de continuité métier (procédures dégradées papier, transferts si nécessaire) et déclenchement du plan blanc avec la direction médicale",
          "Identifier la souche du ransomware",
          "Éteindre tous les systèmes de l'hôpital, y compris les équipements biomédicaux en service"
        ],
        "reponse": 1,
        "explication": "Dans un hôpital, la vie des patients prime tout : la première décision est métier — basculer en procédures dégradées éprouvées (dossiers papier, prescriptions manuelles), sécuriser les soins en cours et organiser les déroutements d'ambulances si nécessaire, en lien avec la direction médicale. Payer (A) ne garantit rien et ne se décide pas dans la panique. L'identification de la souche (C) vient ensuite. Éteindre aveuglément (D) pourrait arrêter des équipements dont dépendent des patients : le containment doit être sélectif.",
        "pourquoi": [
          "Piège du raccourci : payer ne débloque rien d'immédiat (déchiffrement lent et incertain) et ne protège aucun patient dans les minutes critiques.",
          "La vie humaine prime toujours : on sécurise les soins par le plan de continuité et le plan blanc avant toute considération technique — c'est LE réflexe CISSP.",
          "Techniquement utile mais prématuré : identifier la souche est une étape d'analyse qui ne protège pas les patients pendant que le chiffrement se propage.",
          "Absolu dangereux : éteindre les équipements biomédicaux en service peut tuer — exactement l'inverse de la priorité vie humaine."
        ],
        "concept": "Life Safety First — continuité des soins avant la technique"
      },
      {
        "situation": "Les soins basculent en mode dégradé. Côté SI, il faut maintenant stopper la propagation du chiffrement, qui gagne les serveurs de fichiers des services cliniques.",
        "q": "Quelle action de containment menez-vous ?",
        "choix": [
          "Formater immédiatement les serveurs déjà chiffrés",
          "Restaurer immédiatement toutes les sauvegardes sur l'infrastructure actuelle",
          "Négocier avec les attaquants pour gagner du temps",
          "Isoler les segments touchés : coupure ciblée des liens réseau concernés, déconnexion des sauvegardes pour les protéger, en préservant les systèmes critiques pour les soins et les preuves pour l'investigation"
        ],
        "reponse": 3,
        "explication": "Le containment doit être chirurgical : isoler les segments compromis pour stopper la propagation, mettre les sauvegardes hors d'atteinte (les ransomwares modernes les ciblent en priorité), tout en maintenant les systèmes vitaux et en préservant les preuves. Formater (A) détruit preuves et données peut-être récupérables. Restaurer sur une infrastructure encore compromise (B) offrirait les sauvegardes au chiffrement — on ne restaure que sur un environnement assaini.",
        "pourquoi": [
          "Destructeur : formater détruit les preuves forensiques et peut effacer des données récupérables — on ne passe jamais à l'éradication avant la fin du containment.",
          "Prématuré et risqué : restaurer sur une infrastructure encore compromise expose les sauvegardes au chiffrement — d'abord contenir, ensuite éradiquer, puis restaurer.",
          "Hors rôle : la négociation éventuelle relève de spécialistes mandatés par la direction, et ce n'est pas une action de containment.",
          "Le bon containment : ciblé, il stoppe la propagation, protège les sauvegardes (cible n°1 des ransomwares) et préserve soins et preuves."
        ],
        "concept": "Incident Response — containment sélectif et protection des sauvegardes"
      },
      {
        "situation": "Dimanche, la propagation est stoppée. L'analyse révèle une exfiltration de données avant chiffrement : dossiers médicaux de patients français et américains. Les attaquants menacent de publier (double extorsion). Le directeur demande qui prévenir et quand.",
        "q": "Quelles sont vos obligations de notification ?",
        "choix": [
          "Notification multiple et coordonnée avec le juridique : CNIL sous 72 h et information des patients (GDPR, risque élevé sur données de santé), obligations HIPAA pour les patients américains via le partenaire, signalement à l'ANSSI/CERT Santé, et dépôt de plainte",
          "Un communiqué de presse global qui vaut notification",
          "Aucune tant que la publication n'a pas eu lieu",
          "Uniquement la compagnie d'assurance cyber"
        ],
        "reponse": 0,
        "explication": "L'exfiltration de données de santé déclenche un faisceau d'obligations parallèles : GDPR (CNIL sous 72 h, information des personnes en cas de risque élevé — ici évident), volet HIPAA pour les données des patients américains (notification via les mécanismes contractuels du partenariat, HHS et personnes concernées selon les règles applicables), signalement réglementaire de l'incident (établissement de santé, CERT Santé/ANSSI) et plainte pénale. Attendre la publication (C) viole les délais. L'assureur (D) s'ajoute mais ne remplace rien ; un communiqué (B) ne vaut pas notification formelle.",
        "pourquoi": [
          "Complet et conforme : données de santé = risque élevé (CNIL 72 h + personnes concernées), patients US = obligations HIPAA, OIV/santé = ANSSI/CERT Santé, plus le volet judiciaire.",
          "Confusion : un communiqué de presse n'est pas une notification légale — chaque régime (GDPR, HIPAA) a ses canaux et contenus exigés.",
          "Faux : le vol de données de santé constitue une violation notifiable dès sa constatation, publication ou non.",
          "Trop étroit : l'assureur est un acteur contractuel, pas une obligation légale — les régulateurs et les personnes concernées passent d'abord."
        ],
        "concept": "Breach Notification multi-juridictions — GDPR, HIPAA, obligations sectorielles"
      },
      {
        "situation": "Lundi, le comité de crise débat du paiement : les attaquants promettent une clé de déchiffrement et la destruction des données volées contre 2 millions d'euros. Les sauvegardes sont saines mais la restauration complète prendra dix jours.",
        "q": "Quelle position recommandez-vous au comité sur le paiement de la rançon ?",
        "choix": [
          "Payer la moitié pour tester la bonne foi des attaquants",
          "Recommander de ne pas payer : les sauvegardes sont exploitables, le paiement ne garantit ni le déchiffrement ni la destruction des données déjà volées, il finance la criminalité et peut poser des problèmes légaux (sanctions) — tout en laissant la décision finale à la direction, éclairée par les autorités",
          "Payer : c'est plus rapide que dix jours de restauration",
          "Ignorer totalement la question et couper tout contact"
        ],
        "reponse": 1,
        "explication": "Avec des sauvegardes saines, le paiement perd son principal argument. Il ne garantit rien : les clés fournies sont souvent défaillantes, et la « destruction » des données volées est invérifiable — la menace de publication demeure. S'ajoutent le financement du crime, le risque de sanctions internationales selon le groupe attaquant, et l'incitation à être re-ciblé. Le RSSI recommande et documente ; la décision revient à la direction, en lien avec les autorités (position constante : ne pas payer). Payer « à moitié » (A) n'a aucun sens ; refuser tout contact (D) prive d'informations utiles à l'enquête.",
        "pourquoi": [
          "Fausse bonne idée : payer « pour tester » finance le crime sans aucune garantie et signale que l'organisation paie.",
          "Posture d'expert : recommandation argumentée (sauvegardes exploitables, garanties nulles, financement du crime, risque légal) en laissant la DÉCISION à la direction — le RSSI conseille, il ne décide pas.",
          "Vision court-termiste : le paiement ne garantit rien (déchiffreurs défaillants, données déjà exfiltrées) et expose à des sanctions légales.",
          "Extrême inverse : couper tout contact sans analyse prive la direction d'options et d'informations — la recommandation doit être éclairée, pas dogmatique."
        ],
        "concept": "Ransomware — décision de paiement, rôle consultatif du RSSI"
      },
      {
        "situation": "Trois semaines plus tard, l'hôpital fonctionne à nouveau normalement. L'investigation établit le vecteur initial : un accès VPN d'un prestataire de maintenance biomédicale, sans MFA, compromis par credential stuffing. Vous préparez la réunion de retour d'expérience.",
        "q": "Quel est l'objectif PRINCIPAL de la réunion de lessons learned ?",
        "choix": [
          "Établir les responsabilités individuelles et sanctionner les fautifs",
          "Clore administrativement l'incident au plus vite",
          "Améliorer durablement le dispositif : analyser la chronologie complète sans blâme, identifier les causes racines (accès tiers sans MFA, segmentation insuffisante, détection tardive) et transformer chaque constat en action suivie qui met à jour plans, procédures et contrôles",
          "Produire un rapport confidentiel pour la direction et le classer"
        ],
        "reponse": 2,
        "explication": "Le lessons learned est la phase qui transforme la crise en progrès : chronologie factuelle, culture sans blâme (blameless) pour que la vérité émerge, causes racines au-delà des symptômes, et plan d'action avec responsables et échéances qui boucle sur la préparation (mise à jour du plan de réponse, exercices). Chercher des coupables (A) garantit que le prochain incident sera caché plus longtemps. Un rapport classé sans actions (D) ou une clôture expéditive (B) condamnent à revivre le même incident.",
        "pourquoi": [
          "Contresens : une culture du blâme tue la remontée d'information — les lessons learned sont sans blâme (blameless) pour être honnêtes.",
          "Piège de l'expéditif : clore vite administrativement fait perdre la valeur de l'incident le plus instructif de l'année.",
          "L'objectif réel : transformer l'incident en amélioration durable — causes racines, actions suivies, mise à jour des plans et contrôles.",
          "Trop étroit : un rapport classé sans actions ne change rien — le livrable est un plan d'action suivi, pas un document."
        ],
        "concept": "Post-Incident Activity — lessons learned et amélioration continue"
      }
    ],
    "debrief": "Inspiré des ransomwares qui ont frappé les hôpitaux (Düsseldorf, Corbeil-Essonnes, WannaCry au NHS), ce scénario déroule une réponse à incident complète sous contrainte vitale : la sécurité des patients commande tout, le containment est sélectif et protège d'abord les sauvegardes, la double extorsion déclenche des notifications multi-juridictions (GDPR et HIPAA se cumulent), et la décision de rançon appartient à la direction éclairée par le RSSI — avec des sauvegardes saines, ne pas payer. Retenez enfin que le lessons learned sans blâme est ce qui distingue les organisations qui apprennent de celles qui rechutent."
  },
  {
    "id": "sc-14",
    "domaine": 7,
    "titre": "La mise à jour empoisonnée",
    "icone": "🧩",
    "difficulte": 3,
    "contexte": "Vous dirigez le SOC de Federatis, un éditeur de logiciels de supervision réseau utilisés par 8 000 clients, dont des ministères et des banques. Un jeudi soir, une société de sécurité renommée vous contacte en urgence : elle a détecté, chez l'un de ses clients, un trafic de commande et contrôle (C2) émanant de VOTRE logiciel. Ses analystes suspectent qu'une mise à jour officielle signée de votre plateforme contient une porte dérobée (backdoor). Si c'est vrai, votre chaîne de build est compromise et des milliers de clients distribuent votre malware.",
    "etapes": [
      {
        "situation": "L'appel vient de se terminer. L'information n'est pas encore publique. Vous devez organiser les toutes premières heures.",
        "q": "Que faites-vous EN PREMIER ?",
        "choix": [
          "Supprimer la mise à jour suspecte des serveurs et effacer l'environnement de build pour repartir sur une base saine",
          "Publier immédiatement un démenti public : votre chaîne de build est certifiée",
          "Attendre que la société de sécurité publie ses preuves complètes",
          "Activer la cellule de crise et vérifier l'allégation : analyse comparative des binaires distribués (hash, rétro-ingénierie de la mise à jour suspecte), en préservant l'environnement de build pour l'investigation forensique"
        ],
        "reponse": 3,
        "explication": "Première étape : vérifier techniquement l'allégation — comparer les binaires distribués aux sources, analyser la mise à jour suspecte — tout en gelant l'environnement de build comme scène de crime numérique. Un démenti (B) avant vérification peut devenir une faute grave. Effacer l'environnement de build (A) détruirait les preuves de la compromission et empêcherait de comprendre le mode opératoire. Attendre passivement (C) laisse la backdoor active chez 8 000 clients.",
        "pourquoi": [
          "Destructeur : effacer l'environnement de build détruit les preuves de l'intrusion et la capacité à comprendre l'étendue de la compromission.",
          "Piège de la réputation : démentir sans vérifier expose à un démenti public inverse — la crédibilité ne se reconstruit pas.",
          "Passif : attendre des preuves externes laisse les clients exposés et abandonne la maîtrise de la crise.",
          "Réflexe correct : vérifier l'allégation par les faits (comparaison de binaires, analyse) en préservant les preuves — on qualifie avant d'agir."
        ],
        "concept": "Incident Verification — analyse forensique et préservation de la chaîne de build"
      },
      {
        "situation": "Vérification faite : la mise à jour contient bien un implant discret, inséré pendant la compilation — le code source dans le dépôt est propre, c'est le serveur de build qui injecte le malware. L'implant est signé avec votre certificat légitime et dort plusieurs semaines avant d'activer son C2.",
        "q": "Face à cette compromission confirmée, quelle combinaison d'actions immédiates priorisez-vous ?",
        "choix": [
          "Porter plainte et attendre les conclusions de l'enquête judiciaire",
          "Corriger le serveur de build et publier discrètement une mise à jour propre",
          "Retirer les mises à jour compromises de la distribution, révoquer le certificat de signature compromis, isoler la chaîne de build, et préparer la notification aux clients et aux autorités",
          "Surveiller le C2 quelques semaines pour étudier les attaquants avant d'agir"
        ],
        "reponse": 2,
        "explication": "Tout se joue en parallèle : stopper la distribution du poison, révoquer le certificat qui donne au malware sa légitimité (mesure douloureuse — elle invalide aussi les versions saines — mais indispensable), isoler la chaîne de build compromise, et préparer une notification rapide car chaque jour de silence prolonge l'exposition des clients. Une correction discrète (B) trahirait les clients et violerait les obligations de notification. Attendre la justice (A) ou observer les attaquants (D) pendant que des ministères et des banques restent compromis est indéfendable.",
        "pourquoi": [
          "Hors tempo : la plainte est nécessaire mais l'enquête judiciaire ne protège pas les clients aujourd'hui.",
          "Silencieux et incomplet : corriger discrètement laisse les clients compromis dans l'ignorance et le certificat volé actif.",
          "La combinaison complète : stopper la distribution, révoquer le certificat (l'arme de l'attaquant), isoler, et préparer les notifications — chaque volet traite un risque distinct.",
          "Inacceptable : « étudier » les attaquants pendant des semaines laisse des clients activement compromis — le devoir de protection prime sur la curiosité."
        ],
        "concept": "Supply Chain Incident — révocation de certificat et arrêt de distribution"
      },
      {
        "situation": "Vient la question de la communication : 8 000 clients, dont des OIV, utilisent potentiellement une version piégée. Le directeur commercial redoute « la mort de l'entreprise » si l'affaire devient publique. Le juridique évoque les obligations de notification.",
        "q": "Quelle stratégie de communication recommandez-vous ?",
        "choix": [
          "La communication est prématurée tant que l'enquête n'est pas terminée",
          "Une divulgation rapide, coordonnée et complète : notification à tous les clients avec indicateurs de compromission (IoC), versions touchées et instructions de remédiation, information des autorités (ANSSI, CERT), et communication publique transparente",
          "Le silence : ne communiquer que si des clients découvrent le problème",
          "Une notification limitée aux 30 plus gros clients sous accord de confidentialité"
        ],
        "reponse": 1,
        "explication": "Chaque client, grand ou petit, héberge potentiellement une backdoor active : tous doivent recevoir sans délai les IoC, la liste des versions compromises et la marche à suivre. Les autorités doivent être notifiées (obligations légales, et le CERT peut coordonner la réponse nationale). La transparence rapide est aussi la seule stratégie qui préserve la confiance à long terme — les précédents célèbres le montrent : c'est la dissimulation qui tue les entreprises, pas l'incident. Les options A, C et D laissent des clients compromis dans l'ignorance.",
        "pourquoi": [
          "Piège du perfectionnisme : l'enquête durera des mois — les clients doivent pouvoir se protéger MAINTENANT avec ce qu'on sait déjà.",
          "Le standard post-SolarWinds : divulgation rapide, complète et actionnable (IoC, versions, remédiation) — la transparence est le seul chemin qui préserve la confiance.",
          "Indéfendable : le silence transforme une crise technique en scandale de dissimulation, avec circonstance aggravante légale.",
          "Discriminatoire et risqué : tous les clients touchés ont le même droit d'être protégés — une notification sélective aggrave la responsabilité."
        ],
        "concept": "Coordinated Disclosure — transparence et partage d'IoC"
      },
      {
        "situation": "La notification est publiée, la crise est gérée avec les CERT. L'investigation révèle que les attaquants étaient présents depuis neuf mois : entrés par le VPN d'un développeur sans MFA, ils ont patiemment étudié puis piégé le processus de build sans déclencher aucune alerte.",
        "q": "Neuf mois sans détection : quelle capacité opérationnelle a le PLUS manqué ?",
        "choix": [
          "La détection des comportements anormaux en interne : surveillance de l'intégrité de la chaîne de build, détection d'anomalies sur les comptes et les mouvements latéraux, et chasse proactive aux menaces (threat hunting)",
          "Un pare-feu de nouvelle génération",
          "Un plus grand nombre d'alertes remontées au SOC",
          "Des mots de passe plus longs"
        ],
        "reponse": 0,
        "explication": "Un attaquant patient et discret ne déclenche pas les alertes classiques : il faut des capacités de détection comportementale (UEBA, intégrité des systèmes critiques comme la chaîne de build, détection de mouvement latéral) et une démarche active de threat hunting — chercher l'adversaire en partant de l'hypothèse qu'il est déjà là, au lieu d'attendre les alertes. Le pare-feu (B) n'a pas vu un accès VPN légitime volé. Multiplier les alertes (C) sans qualité noie le SOC — c'est la pertinence qui manquait, pas le volume.",
        "pourquoi": [
          "La vraie lacune : détection d'anomalies internes, surveillance d'intégrité de la chaîne de build et threat hunting — l'attaquant vivait « normalement » dans le réseau.",
          "Réponse produit : un NGFW n'aurait pas vu un attaquant déjà à l'intérieur utilisant des accès légitimes.",
          "Confusion volume/pertinence : plus d'alertes noie le SOC — il fallait de MEILLEURES détections, pas davantage de bruit.",
          "Hors sujet : la longueur des mots de passe n'a rien à voir avec neuf mois de présence indétectée."
        ],
        "concept": "Threat Hunting & Detection Engineering — « assume breach »"
      },
      {
        "situation": "Six mois après, vous reconstruisez la chaîne de build. Le comité exécutif veut des garanties : « Comment être sûrs que cela ne se reproduira jamais ? »",
        "q": "Quelle architecture de build sécurisée présentez-vous ?",
        "choix": [
          "Une chaîne durcie et vérifiable : environnements de build isolés et éphémères, intégrité vérifiée à chaque étape, builds reproductibles permettant de comparer les binaires aux sources, signature dans un HSM avec accès contrôlé, SBOM publié, et surveillance continue de l'intégrité",
          "La même chaîne, avec un antivirus sur le serveur de build",
          "L'arrêt des mises à jour automatiques pour tous les clients",
          "L'externalisation complète du build chez un prestataire"
        ],
        "reponse": 0,
        "explication": "La réponse structurelle est une chaîne de build vérifiable de bout en bout : environnements éphémères (rien de persistant à piéger), vérification d'intégrité à chaque maillon, builds reproductibles (le binaire distribué peut être recompilé et comparé indépendamment — le contrôle qui aurait révélé l'injection), clés de signature dans un HSM, SBOM pour la transparence. Un antivirus (B) n'aurait rien vu d'un implant sur mesure. Externaliser (D) déplace la confiance sans la fonder. Supprimer les mises à jour (C) aggraverait la sécurité globale des clients.",
        "pourquoi": [
          "L'état de l'art : builds éphémères et reproductibles, intégrité vérifiée, signature en HSM, SBOM, surveillance — chaque propriété ferme une voie d'attaque de SolarWinds.",
          "Cosmétique : un antivirus sur la même chaîne compromise ne change pas le modèle de menace.",
          "Régression : arrêter les mises à jour automatiques laisse les clients vulnérables plus longtemps — on sécurise le canal, on ne le supprime pas.",
          "Transfert illusoire : externaliser déplace le risque supply chain chez un tiers sans le réduire — votre responsabilité demeure."
        ],
        "concept": "Secure Build Pipeline — builds reproductibles, HSM, intégrité de bout en bout"
      }
    ],
    "debrief": "Inspiré de l'affaire SolarWinds/SUNBURST (2020), ce scénario montre qu'un éditeur compromis devient l'arme de l'attaquant contre tous ses clients. Les réflexes clés : vérifier avant de démentir, préserver la chaîne de build comme une scène de crime, révoquer le certificat de signature même si c'est douloureux, et notifier vite et largement — la transparence protège mieux la confiance que le silence. En profondeur, retenez la posture « assume breach » (threat hunting, détection comportementale) et l'architecture de build vérifiable : environnements éphémères, builds reproductibles et signature en HSM."
  },
  {
    "id": "sc-15",
    "domaine": 8,
    "titre": "DevSecOps : la clé était dans le code",
    "icone": "🚀",
    "difficulte": 2,
    "contexte": "Vous rejoignez Paylio, une scale-up fintech de 200 personnes, comme responsable de la sécurité applicative. L'équipe déploie en production quinze fois par jour via une chaîne CI/CD moderne. Deux semaines après votre arrivée, un développeur pousse par erreur sur un dépôt GitHub public un fichier de configuration contenant la clé API de production du prestataire de paiement. Trois heures plus tard, des transactions frauduleuses apparaissent. La sécurité, jusqu'ici, intervenait uniquement en revue finale avant les grosses releases — autant dire jamais, vu le rythme.",
    "etapes": [
      {
        "situation": "La fuite vient d'être découverte : la clé est publique depuis trois heures, des transactions frauduleuses sont en cours chez le prestataire de paiement.",
        "q": "Que faites-vous EN PREMIER ?",
        "choix": [
          "Rendre le dépôt privé",
          "Révoquer immédiatement la clé compromise et la remplacer, en coordination avec le prestataire de paiement pour bloquer la fraude en cours",
          "Supprimer le fichier du dépôt GitHub : la clé ne sera plus visible",
          "Chercher quel développeur a commis l'erreur"
        ],
        "reponse": 1,
        "explication": "Un secret publié est compromis pour toujours : les bots des attaquants scannent GitHub en permanence et clonent en quelques minutes. Supprimer le fichier (C) ou privatiser le dépôt (A) est illusoire — la clé vit dans l'historique Git et dans les copies déjà faites. La seule réponse est la révocation immédiate et la rotation, couplée au blocage de la fraude avec le prestataire. La recherche du responsable (D) n'est pas une urgence — et la cause est systémique, pas individuelle.",
        "pourquoi": [
          "Insuffisant : le dépôt a déjà été cloné par des scanners automatiques — les secrets exposés se font voler en minutes.",
          "Le réflexe : révoquer la clé tue l'accès de l'attaquant immédiatement — on coupe d'abord, on nettoie ensuite.",
          "Piège classique : supprimer le fichier ne retire rien de l'historique Git, et la clé est déjà volée — le mal est fait.",
          "Culture du blâme et perte de temps : l'urgence est la fraude en cours, pas le coupable."
        ],
        "concept": "Secrets Compromise — révocation immédiate, jamais de simple suppression"
      },
      {
        "situation": "La clé est révoquée, la fraude stoppée. L'analyse montre que des dizaines de secrets (clés API, mots de passe de bases de données) sont codés en dur dans les dépôts de l'entreprise depuis des années.",
        "q": "Quelle solution structurelle mettez-vous en place pour les secrets ?",
        "choix": [
          "Une règle écrite interdisant les secrets dans le code",
          "Le chiffrement de tous les dépôts Git",
          "La limitation de l'accès aux dépôts aux seuls développeurs seniors",
          "Un gestionnaire de secrets centralisé (vault) : les applications récupèrent leurs secrets à l'exécution, rotation automatisée, et détection de secrets (secret scanning) intégrée à la CI et aux hooks de commit pour bloquer les fuites à la source"
        ],
        "reponse": 3,
        "explication": "La réponse combine le remède et la prévention : un secrets manager centralisé sort les secrets du code (injection à l'exécution, rotation automatique, audit des accès), et le secret scanning en pre-commit et dans la CI bloque mécaniquement les fuites avant qu'elles n'atteignent le dépôt. Une règle écrite (A) sans outillage sera violée par accident, comme on vient de le voir. Chiffrer les dépôts (B) ne change rien pour ceux qui y ont accès. L'ancienneté (C) ne protège pas de l'erreur.",
        "pourquoi": [
          "Papier sans contrôle : une règle écrite sans outillage se fera oublier à la première urgence.",
          "Contresens technique : chiffrer les dépôts ne change rien, les développeurs (et leurs commits) y accèdent en clair.",
          "Faux lien : l'ancienneté ne protège pas des erreurs — le senior aussi commit des secrets sous pression.",
          "Structurel : vault centralisé + rotation + secret scanning bloquant en CI — la prévention est automatisée, plus dépendante de la discipline humaine."
        ],
        "concept": "Secrets Management — vault centralisé et secret scanning automatisé"
      },
      {
        "situation": "Vous élargissez le chantier : comment intégrer la sécurité dans une chaîne qui déploie quinze fois par jour ? L'ancien modèle de revue finale est mathématiquement impossible.",
        "q": "Quelle approche adoptez-vous ?",
        "choix": [
          "Faire confiance aux tests unitaires des développeurs",
          "Recruter dix analystes sécurité pour relire tout le code",
          "Le shift-left automatisé : SAST, analyse des dépendances (SCA) et secret scanning intégrés au pipeline avec des seuils bloquants pour les vulnérabilités critiques, DAST sur les environnements de test, et revue manuelle réservée aux changements à haut risque",
          "Réduire les déploiements à un par semaine pour permettre les revues manuelles"
        ],
        "reponse": 2,
        "explication": "À quinze déploiements par jour, la sécurité doit être automatisée dans le pipeline (« shift-left ») : analyse statique (SAST), analyse des dépendances tierces (SCA), secret scanning — avec des quality gates bloquants sur les criticités — et tests dynamiques (DAST) en aval. L'expertise humaine se concentre là où elle a le plus de valeur : architecture, changements sensibles, threat modeling. Ralentir le business (D) fait de la sécurité l'ennemi. Une armée de relecteurs (B) ne suit pas le rythme. Les tests unitaires (A) vérifient le fonctionnel, pas la sécurité.",
        "pourquoi": [
          "Confusion de périmètre : les tests unitaires vérifient le fonctionnel, pas la sécurité.",
          "Non scalable : dix relecteurs ne suivront jamais vingt déploiements par jour — l'automatisation est la seule échelle.",
          "Le vrai shift-left : contrôles automatisés proportionnés (bloquants sur le critique) et l'humain réservé au haut risque — sécurité À la vitesse du delivery.",
          "Frein business : ralentir les déploiements oppose sécurité et vélocité — le DevSecOps les réconcilie."
        ],
        "concept": "DevSecOps — shift-left, security gates automatisés dans la CI/CD"
      },
      {
        "situation": "Les outils remontent leurs premiers résultats : 60 % des alertes concernent des bibliothèques open source vulnérables dans les dépendances, dont certaines très profondes (dépendances de dépendances).",
        "q": "Comment gérez-vous le risque des dépendances tierces ?",
        "choix": [
          "Figer toutes les versions pour toujours afin d'éviter les régressions",
          "Ignorer les alertes sur les dépendances indirectes, trop nombreuses",
          "Une gouvernance des dépendances : SBOM généré à chaque build, mise à jour continue priorisée par l'exploitabilité réelle, et politique d'approbation des nouvelles dépendances",
          "Interdire l'open source et tout redévelopper en interne"
        ],
        "reponse": 2,
        "explication": "Le code moderne est composé à 80 % de composants tiers : il faut en avoir la cartographie (SBOM à chaque build), les maintenir à jour en continu avec une priorisation par l'exploitabilité réelle (une vulnérabilité dans une fonction jamais appelée n'a pas la même urgence), et contrôler l'entrée de nouvelles dépendances. Tout redévelopper (D) est économiquement absurde et pas plus sûr. Ignorer les dépendances transitives (B) ignore le vecteur des grandes crises open source. Figer les versions (A) accumule une dette de vulnérabilités explosive.",
        "pourquoi": [
          "Fausse stabilité : figer les versions accumule une dette de vulnérabilités qui explosera plus tard.",
          "Angle mort dangereux : Log4Shell était une dépendance indirecte — les ignorer, c'est ignorer le vecteur principal.",
          "Gouvernance mature : SBOM, priorisation par exploitabilité réelle, approbation des nouveautés — on gère le risque, on ne le fuit pas.",
          "Absolu irréaliste : redévelopper l'open source coûterait des années et créerait ses propres vulnérabilités."
        ],
        "concept": "Software Supply Chain — SBOM et gestion des dépendances (SCA)"
      },
      {
        "situation": "La chaîne est outillée. Reste l'amont : les développeurs conçoivent des fonctionnalités manipulant des données de paiement sans jamais se poser de questions de sécurité avant le premier commit.",
        "q": "Comment intégrez-vous la sécurité dès la conception ?",
        "choix": [
          "Faire valider chaque spécification par le RSSI",
          "Imposer un framework unique qui « gère la sécurité tout seul »",
          "Ajouter encore plus d'outils de scan dans le pipeline",
          "Instaurer le threat modeling sur les fonctionnalités sensibles dès la conception, des exigences de sécurité dans les user stories, la formation au code sécurisé, et un réseau de security champions dans les équipes"
        ],
        "reponse": 3,
        "explication": "Les outils détectent des défauts d'implémentation, pas des erreurs de conception : un défaut d'architecture (mauvais flux d'authentification, données sensibles au mauvais endroit) passe tous les scanners. Le vrai shift-left est humain et méthodologique — threat modeling (STRIDE) sur les features sensibles, critères de sécurité dans la definition of done, formation, et security champions qui portent le sujet au quotidien dans chaque équipe. Le RSSI-goulot (A) ne passe pas à l'échelle ; aucun framework (B) ne « gère la sécurité tout seul ».",
        "pourquoi": [
          "Goulot d'étranglement : le RSSI validateur universel ne passe pas à l'échelle et déresponsabilise les équipes.",
          "Pensée magique : aucun framework ne « gère la sécurité tout seul » — la sécurité est un processus, pas un produit.",
          "Piège de l'outil : encore plus de scanners trouve les défauts APRÈS codage — la conception sécurisée les évite AVANT.",
          "Security by design réel : threat modeling en conception, exigences dans les user stories, formation, security champions — la sécurité devient le travail de tous."
        ],
        "concept": "Secure by Design — threat modeling et security champions"
      }
    ],
    "debrief": "Ce scénario illustre la sécurité applicative à l'ère du déploiement continu : un secret publié est compromis à jamais (révoquer, jamais seulement supprimer), les secrets vivent dans un vault et non dans le code, et la sécurité s'intègre au pipeline par l'automatisation — SAST, SCA, secret scanning avec seuils bloquants. Retenez la double dimension du shift-left : outillée (les scanners dans la CI) et humaine (threat modeling, security champions), car les outils trouvent les bugs d'implémentation mais jamais les erreurs de conception. La gestion des dépendances tierces via SBOM est désormais un pilier à part entière."
  },
  {
    "id": "sc-16",
    "domaine": 8,
    "titre": "Vulnérabilité zero-day dans une brique universelle",
    "icone": "🪵",
    "difficulte": 2,
    "contexte": "Vous êtes responsable de la sécurité applicative de VoyaGo, une plateforme de réservation de voyages en ligne (600 applications et microservices, équipes de développement réparties sur trois pays). Un vendredi soir de décembre, une vulnérabilité critique (CVSS 10.0) est divulguée publiquement dans une bibliothèque de journalisation open source utilisée par la moitié de l'écosystème Java mondial. L'exploitation est triviale — une simple chaîne de caractères dans n'importe quel champ journalisé permet l'exécution de code à distance (RCE). Les tentatives d'exploitation massives commencent dans les heures qui suivent. Personne ne sait combien de vos applications utilisent cette bibliothèque.",
    "etapes": [
      {
        "situation": "L'alerte mondiale est lancée. Les scans d'exploitation massifs balaient déjà Internet. Vos 600 applications sont potentiellement concernées, et aucun inventaire des dépendances n'existe.",
        "q": "Que faites-vous EN PREMIER ?",
        "choix": [
          "Activer une cellule de crise et mener de front : identification des usages de la bibliothèque (scan des artefacts et des dépendances), priorisation des applications exposées à Internet, et mitigation immédiate en périphérie (règles WAF sur les motifs d'exploitation connus)",
          "Demander à chaque équipe de vérifier son code lundi matin",
          "Attendre le correctif officiel définitif de la fondation open source",
          "Éteindre les 600 applications par précaution"
        ],
        "reponse": 0,
        "explication": "Face à une RCE triviale activement exploitée, chaque heure compte : on ne peut pas attendre lundi (B) ni un correctif parfait (C). La démarche parallèle s'impose : détecter les usages (scan des binaires et manifests de dépendances), prioriser par l'exposition (Internet d'abord), et mitiger tout de suite en périphérie — les règles WAF ne sont pas parfaites (contournements connus) mais réduisent le bruit d'attaque pendant qu'on patche. Tout éteindre (D) revient à s'infliger le déni de service qu'on redoute, en pleine saison de réservations.",
        "pourquoi": [
          "La réponse de crise : cellule activée, identification automatisée des usages, priorisation par exposition, mitigation périphérique immédiate — on réduit le risque PENDANT qu'on inventorie.",
          "Trop lent : lundi matin, les scanners automatiques auront déjà trouvé vos applications exposées — la fenêtre se compte en heures.",
          "Passif : les exploits circulent déjà — attendre le correctif parfait, c'est offrir la fenêtre d'attaque.",
          "Absolu destructeur : éteindre 600 applications arrête l'entreprise — le remède pire que le mal."
        ],
        "concept": "Zero-Day Response — mitigation périphérique en parallèle de la remédiation"
      },
      {
        "situation": "Le recensement avance : 240 applications embarquent la bibliothèque, dont 60 exposées à Internet. Problème : la bibliothèque est souvent une dépendance transitive, enfouie, que les équipes ne connaissaient même pas, et certaines applications critiques reposent sur des versions anciennes difficiles à mettre à jour.",
        "q": "Quelle stratégie de remédiation appliquez-vous ?",
        "choix": [
          "Tout confier aux équipes sans coordination : elles connaissent leurs applications",
          "Une remédiation par vagues pilotée par le risque : d'abord les 60 applications exposées (mise à jour, ou mitigations documentées si la mise à jour immédiate est impossible : désactivation de la fonctionnalité vulnérable, isolation), puis l'interne, avec suivi centralisé de l'avancement",
          "Mettre à jour uniquement les applications où c'est facile",
          "Réécrire les applications concernées sans la bibliothèque"
        ],
        "reponse": 1,
        "explication": "La remédiation se pilote par le risque et se coordonne centralement : les applications exposées d'abord, avec pour chacune la meilleure option disponible — mise à jour de la bibliothèque, ou à défaut mitigations reconnues (suppression de la classe vulnérable, paramètres de désactivation, isolation réseau) documentées et tracées jusqu'à la correction définitive. La facilité (C) n'est pas un critère de risque. Sans coordination (A), les dépendances transitives passeront à travers — c'est justement pour cela que les équipes ignoraient leur exposition. Réécrire (D) prendra des mois ; la crise se joue en jours.",
        "pourquoi": [
          "Abdication : sans coordination centrale, pas de vision d'avancement ni de priorisation — le chaos des 600 applications.",
          "Pilotée par le risque : vagues priorisées par exposition, mitigations documentées quand le patch immédiat est impossible, suivi centralisé — la définition même du vulnerability management.",
          "Priorisation par confort : la facilité n'est pas un critère de risque — les applications exposées d'abord, même si c'est difficile.",
          "Démesuré : réécrire des applications prend des mois — la crise se joue en jours."
        ],
        "concept": "Risk-based Remediation — priorisation par exposition, mitigations temporaires tracées"
      },
      {
        "situation": "Pendant la remédiation, votre SOC détecte des tentatives d'exploitation réussies sur une application de recherche de vols datant d'avant les correctifs : un web shell a été déposé.",
        "q": "Comment articulez-vous remédiation de masse et réponse à incident ?",
        "choix": [
          "On suspend toute la remédiation pour se consacrer à l'incident",
          "On patche l'application compromise et on passe à la suivante",
          "L'application compromise bascule en réponse à incident complète : isolation, investigation forensique (étendue de l'intrusion, mouvement latéral, exfiltration), éradication et reconstruction — pendant que la remédiation de masse continue en parallèle, et on recherche rétroactivement des indices de compromission sur toutes les applications vulnérables exposées",
          "On surveille le web shell sans y toucher"
        ],
        "reponse": 2,
        "explication": "Patcher une machine compromise (B) enferme l'attaquant à l'intérieur : le correctif ferme la porte d'entrée mais ne supprime ni le web shell ni les accès déjà établis. L'application compromise exige la réponse à incident complète (isoler, investiguer, éradiquer, reconstruire depuis une base saine). Et puisqu'une exploitation a réussi là, il faut du compromise assessment rétroactif sur toutes les applications qui furent vulnérables et exposées — l'absence d'alerte n'est pas l'absence d'intrusion. Tout arrêter (A) laisserait les autres applications exploitables ; observer sans agir (D) n'a pas de justification ici.",
        "pourquoi": [
          "Faux dilemme : suspendre la remédiation expose les 59 autres applications pendant l'investigation.",
          "Confusion des processus : une compromission avérée exige l'investigation complète — patcher par-dessus un web shell laisse l'attaquant en place.",
          "L'articulation correcte : l'application compromise passe en réponse à incident complète, la remédiation de masse continue en parallèle, et on chasse rétroactivement sur les autres exposées.",
          "Irresponsable hors laboratoire : « surveiller » un web shell actif sur une application de production, c'est accepter l'exfiltration."
        ],
        "concept": "Patch ≠ éradication — compromise assessment après exploitation avérée"
      },
      {
        "situation": "Après trois semaines d'efforts, le parc est corrigé. La direction demande un bilan : « Comment se fait-il qu'une bibliothèque gratuite maintenue par trois bénévoles se retrouve dans la moitié de nos applications critiques sans que personne ne le sache ? »",
        "q": "Quelle réponse structurelle apportez-vous à cette question ?",
        "choix": [
          "C'est inévitable : l'open source est incontrôlable par nature",
          "Une gouvernance de la supply chain logicielle : SBOM systématique pour chaque application, évaluation des composants critiques (maintenance, santé du projet), capacité de réponse rapide (savoir en quelques minutes « qui utilise quoi »), et contribution au financement des projets open source critiques",
          "L'interdiction des bibliothèques maintenues par moins de dix développeurs",
          "Le remplacement de tout l'open source par des solutions commerciales"
        ],
        "reponse": 1,
        "explication": "La leçon structurelle : on ne peut pas défendre ce qu'on ne connaît pas. Le SBOM systématique donne la réponse instantanée à « sommes-nous concernés ? » — la question qui a coûté un week-end de recensement. S'y ajoutent l'évaluation de la santé des composants critiques et, à maturité, le soutien aux projets dont l'entreprise dépend (le problème de fond étant le sous-financement de briques universelles). Le fatalisme (A), les seuils arbitraires (C) ou le tout-commercial (D — les logiciels commerciaux embarquent le même open source) ne répondent pas au problème.",
        "pourquoi": [
          "Fatalisme : l'open source se gouverne très bien — SBOM, évaluation, veille — le déclarer incontrôlable est un aveu d'immaturité.",
          "La réponse de gouvernance : SBOM systématique, évaluation de la santé des composants critiques, capacité de réponse en minutes, contribution aux projets — le risque supply chain se GÈRE.",
          "Métrique arbitraire : un seuil de mainteneurs interdirait la moitié de l'écosystème (OpenSSL comme Log4j, pourtant universellement déployés, n'étaient portés que par une poignée de bénévoles) sans rendre le reste plus sûr — c'est la gouvernance qui protège, pas un seuil.",
          "Illusion commerciale : le propriétaire a les mêmes vulnérabilités avec moins de transparence — et repose souvent sur le même open source."
        ],
        "concept": "Software Supply Chain Governance — SBOM et dépendances open source critiques"
      },
      {
        "situation": "Dernière réunion du retour d'expérience : les équipes veulent savoir comment réagir plus vite la prochaine fois, car « il y aura une prochaine fois ».",
        "q": "Quel dispositif pérenne proposez-vous pour les futures alertes de ce type ?",
        "choix": [
          "Une capacité de réponse organisée : inventaire des dépendances requêtable en temps réel, veille sur les vulnérabilités branchée sur cet inventaire pour l'auto-identification des applications touchées, playbook de crise « vulnérabilité critique massive » testé par exercice, et canaux d'urgence établis avec les équipes",
          "Le gel des dépendances entre novembre et janvier pour éviter les crises de fin d'année",
          "Une équipe dédiée qui patcherait tout en 24 h quoi qu'il arrive",
          "Un abonnement à davantage de newsletters de sécurité"
        ],
        "reponse": 0,
        "explication": "La vitesse de réaction se construit avant la crise : un inventaire des dépendances interrogeable en temps réel (alimenté par les SBOM de chaque build), une veille corrélée automatiquement à cet inventaire (l'alerte désigne d'elle-même les applications touchées), un playbook spécifique testé par des exercices, et des canaux d'escalade pré-établis. L'information seule (D) sans capacité d'action ne raccourcit rien. Une promesse de « tout en 24 h » (C) est irréaliste sans les fondations. Geler les dépendances (B) ne fait qu'accumuler du retard de correctifs — les vulnérabilités ne prennent pas de vacances.",
        "pourquoi": [
          "Capacité organisée de bout en bout : inventaire requêtable en temps réel, veille branchée dessus, playbook testé par exercice, canaux d'urgence — l'alerte devient un processus, pas une panique.",
          "Anecdotique : geler les dépendances en fin d'année ne répond pas à une zero-day de mars.",
          "Vœu pieux : « tout patcher en 24 h quoi qu'il arrive » ignore les contraintes de test et de production — une promesse intenable n'est pas un dispositif.",
          "Veille sans action : recevoir l'alerte n'est pas le problème — savoir en minutes QUI est touché et QUOI faire l'est."
        ],
        "concept": "Preparedness — corrélation veille/inventaire et playbooks exercés"
      }
    ],
    "debrief": "Inspiré de la crise Log4Shell (décembre 2021), ce scénario enseigne la gestion d'une vulnérabilité massive dans une dépendance universelle : mitiger en périphérie pendant qu'on recense, prioriser par l'exposition réelle, et surtout ne jamais confondre patch et éradication — une application exploitée avant correctif reste compromise après. La leçon de fond relève de la gouvernance de la supply chain logicielle : SBOM systématique, veille corrélée à l'inventaire des dépendances, et playbooks testés. La question décisive en crise n'est pas « existe-t-il un correctif ? » mais « savons-nous en quelques minutes qui est concerné ? »."
  }
];
