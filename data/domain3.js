// Domaine 3 — Architecture et ingénierie de sécurité (Security Architecture and Engineering)
window.CISSP_DATA = window.CISSP_DATA || { domains: {} };
window.CISSP_DATA.domains[3] = {
  id: 3,
  code: "D3",
  titre: "Architecture et ingénierie de sécurité",
  titreEn: "Security Architecture and Engineering",
  poids: "13%",
  couleur: "#ffd166",
  icone: "🏛️",
  description: "Le Domaine 3 est le plus technique de l'examen CISSP. Il couvre les principes de conception sécurisée, les modèles de sécurité formels, les critères d'évaluation, la sécurité du matériel, du cloud et des systèmes industriels, l'ensemble de la cryptographie ainsi que la sécurité physique des sites et installations.",
  objectifs: [
    "3.1 Rechercher, mettre en œuvre et gérer des processus d'ingénierie fondés sur des principes de conception sécurisée",
    "3.2 Comprendre les concepts fondamentaux des modèles de sécurité (Bell-LaPadula, Biba, Clark-Wilson, etc.)",
    "3.3 Sélectionner des contrôles selon les exigences de sécurité des systèmes (Common Criteria)",
    "3.4 Comprendre les capacités de sécurité des systèmes d'information (protection mémoire, TPM, chiffrement)",
    "3.5 Évaluer et atténuer les vulnérabilités des architectures : clients, serveurs, bases de données, cloud, ICS, IoT, systèmes embarqués",
    "3.6 Sélectionner et déterminer des solutions cryptographiques (cycle de vie, méthodes, PKI, gestion des clés, signatures)",
    "3.7 Comprendre les méthodes d'attaques cryptanalytiques",
    "3.8 Appliquer les principes de sécurité à la conception des sites et installations",
    "3.9 Concevoir les contrôles de sécurité des sites et installations (incendie, alimentation, HVAC)",
    "3.10 Gérer le cycle de vie des systèmes d'information"
  ],
  lecons: [
    // ------------------------------------------------------------------
    // LEÇON 1 — Principes de conception sécurisée
    // ------------------------------------------------------------------
    {
      id: "d3-l1",
      titre: "Principes de conception sécurisée",
      duree: 10,
      slides: [
        {
          type: "intro",
          titre: "Pourquoi des principes de conception ?",
          points: [
            "La sécurité se conçoit dès le départ, elle ne se rajoute pas",
            "Le Domaine 3 pèse environ 13 % de l'examen",
            "Dix principes standards à connaître par cœur"
          ],
          narration: "Bienvenue dans le Domaine 3, le plus technique de l'examen CISSP. Nous commençons par les principes de conception sécurisée, c'est-à-dire les règles fondamentales qui guident tout ingénieur en sécurité. Retenez l'idée maîtresse : la sécurité doit être intégrée dès la conception d'un système, jamais ajoutée après coup. Ces dix principes reviennent sans cesse dans les questions d'examen."
        },
        {
          type: "standard",
          titre: "Threat modeling et Least Privilege",
          points: [
            "Threat modeling : identifier, catégoriser et analyser les menaces potentielles",
            "Méthodes à connaître : STRIDE, DREAD, OCTAVE, Trike",
            "Least privilege : accorder uniquement les privilèges nécessaires à la tâche"
          ],
          narration: "Le threat modeling consiste à identifier, catégoriser et analyser les menaces potentielles, idéalement de façon proactive pendant la conception. Pour l'examen, retenez les quatre méthodes principales : STRIDE, DREAD, OCTAVE et Trike. Le principe du moindre privilège, ou least privilege, impose de n'accorder à un sujet que les privilèges strictement nécessaires à ses tâches, ce qui réduit la surface et l'impact d'une attaque.",
          astuce: "💡 Conseil examen : si une question évoque la réduction de la surface d'attaque par les droits d'accès, pensez Least Privilege."
        },
        {
          type: "standard",
          titre: "Defense in Depth",
          points: [
            "Plusieurs contrôles en série : un contrôle qui échoue ne doit pas tout exposer",
            "Mots-clés associés : layers, levels, zones, compartments, protection rings",
            "L'attaquant doit franchir des barrières successives"
          ],
          narration: "La défense en profondeur, ou defense in depth, consiste à empiler plusieurs contrôles en série, de sorte que la défaillance d'un seul contrôle n'expose ni les systèmes ni les données. Imaginez un attaquant qui doit franchir plusieurs barrières successives : pare-feu, segmentation, authentification, chiffrement. À l'examen, dès que vous voyez des mots comme layers, zones, compartments ou protection rings, pensez défense en profondeur."
        },
        {
          type: "standard",
          titre: "Secure defaults et Fail securely",
          points: [
            "Secure defaults : configuration la plus sûre dès la sortie d'usine",
            "Fail securely : une défaillance ne doit pas révéler d'information ni affaiblir la sécurité",
            "Fail-open protège la disponibilité, fail-closed protège confidentialité et intégrité",
            "En physique : fail-safe protège les personnes, fail-secure protège les actifs"
          ],
          narration: "Le principe des secure defaults exige que systèmes et équipements soient livrés avec les réglages les plus sûrs activés par défaut, sans intervention de l'utilisateur. Pensez au mot de passe administrateur d'un routeur neuf. Le principe fail securely impose qu'en cas de panne, un système ne révèle aucune information sensible et ne devienne pas moins sûr qu'en fonctionnement normal. Retenez la nuance essentielle : dans le monde numérique, fail-open privilégie la disponibilité tandis que fail-closed protège la confidentialité et l'intégrité ; dans le monde physique, fail-safe protège les personnes et fail-secure protège les actifs.",
          astuce: "💡 Conseil examen : pour une porte en cas d'incendie, la vie humaine prime toujours, donc fail-safe, la porte s'ouvre."
        },
        {
          type: "standard",
          titre: "Separation of Duties et Keep it simple",
          points: [
            "SoD : aucune personne seule ne contrôle une fonction critique de bout en bout",
            "La SoD prévient la fraude et les abus",
            "KISS : éviter la complexité inutile, car la complexité nuit à la sécurité"
          ],
          narration: "La séparation des tâches, ou separation of duties, garantit qu'aucune personne seule ne détient le contrôle total d'une fonction critique. Pensez au cinéma : une personne vend les billets, une autre les contrôle à l'entrée. C'est un rempart classique contre la fraude. Le principe keep it simple, parfois appelé KISS, nous rappelle qu'un environnement trop complexe est plus difficile à sécuriser, à auditer et à maintenir."
        },
        {
          type: "schema",
          titre: "Zero Trust : never trust, always verify",
          points: [
            "Aucun utilisateur, appareil ou système n'est digne de confiance par défaut",
            "Remplace le modèle traditionnel « château et douves » du trust but verify",
            "Chaque requête est authentifiée, autorisée et chiffrée avant l'accès",
            "Posture « assume breach » : on suppose que la brèche a déjà eu lieu"
          ],
          schema: { type: "flow", items: ["Requête d'accès", "Authentification", "Autorisation", "Chiffrement", "Accès accordé"] },
          narration: "Le Zero Trust est un modèle de sécurité qui n'accorde aucune confiance implicite, même à l'intérieur du réseau. Il remplace l'approche traditionnelle du château entouré de douves, où tout ce qui était à l'intérieur du périmètre était considéré comme fiable. La devise est never trust, always verify : chaque requête d'accès doit être authentifiée, autorisée et chiffrée avant que l'accès soit accordé. On adopte aussi la posture assume breach, c'est-à-dire qu'on suppose que l'attaquant est peut-être déjà dans le réseau."
        },
        {
          type: "standard",
          titre: "Privacy by Design et Shared Responsibility",
          points: [
            "PbD : intégrer la protection de la vie privée dès la conception, sept principes reconnus",
            "Privé par défaut, protection de bout en bout, transparence, centré sur l'utilisateur",
            "Shared responsibility : la sécurité est l'affaire de tous, y compris entre client et CSP",
            "Cloud : le CSP sécurise le cloud, le client sécurise ce qui est dans le cloud"
          ],
          narration: "Le privacy by design impose d'intégrer la protection de la vie privée dès la première phase de conception d'un produit, et non de la rajouter à la fin. Ses sept principes incluent la proactivité, le réglage privé par défaut, la protection sur tout le cycle de vie et le respect de l'utilisateur. La responsabilité partagée, ou shared responsibility, rappelle que chacun dans l'organisation a un rôle en sécurité. Dans le cloud, elle décrit le partage entre le fournisseur, qui sécurise le cloud lui-même, et le client, qui sécurise ses données, ses identités et ses configurations dans le cloud."
        },
        {
          type: "standard",
          titre: "SASE : sécurité et réseau convergés dans le cloud",
          points: [
            "Secure Access Service Edge : plateforme cloud unifiant réseau et sécurité",
            "Intègre SD-WAN, SWG, CASB, FWaaS et ZTNA",
            "Rapproche la sécurité des utilisateurs, où qu'ils soient",
            "Répond aux limites du modèle périmétrique traditionnel"
          ],
          narration: "Le SASE, pour Secure Access Service Edge, est un cadre livré depuis le cloud qui fusionne les fonctions réseau et sécurité dans une plateforme unifiée. Il combine le SD-WAN, la passerelle web sécurisée, le CASB, le pare-feu en tant que service et le Zero Trust Network Access. L'idée est de rapprocher la sécurité des utilisateurs et des appareils, où qu'ils se trouvent, plutôt que de faire transiter tout le trafic par un centre de données central. C'est la réponse moderne au télétravail et à l'adoption massive du cloud."
        },
        {
          type: "question",
          titre: "Contrôle de connaissance",
          q: "Un pare-feu applicatif tombe en panne et bloque automatiquement tout le trafic pour préserver la confidentialité des données. De quel comportement s'agit-il ?",
          choix: ["Fail-open", "Fail-closed", "Fail-safe physique", "Secure defaults"],
          reponse: 1,
          explication: "Bloquer tout le trafic en cas de panne pour préserver la confidentialité et l'intégrité correspond au comportement fail-closed (ou fail-secure numérique). Fail-open aurait maintenu la disponibilité en laissant passer le trafic. Fail-safe physique concerne la protection des personnes, et secure defaults concerne la configuration initiale.",
          narration: "Prenons un instant pour vérifier votre compréhension des modes de défaillance, un sujet très apprécié de l'examen."
        },
        {
          type: "resume",
          titre: "Résumé de la leçon",
          points: [
            "Dix principes : threat modeling, least privilege, defense in depth, secure defaults, fail securely, SoD, KISS, Zero Trust, shared responsibility, privacy by design",
            "Zero Trust : never trust, always verify, assume breach",
            "Fail-safe protège les personnes, fail-secure protège les actifs",
            "SASE unifie réseau et sécurité dans le cloud"
          ],
          narration: "Récapitulons. Vous connaissez maintenant les dix principes de conception sécurisée exigés par l'examen, du threat modeling au privacy by design. Retenez particulièrement le Zero Trust et sa devise never trust, always verify, ainsi que la distinction entre fail-safe qui protège les personnes et fail-secure qui protège les actifs. Enfin, le SASE illustre l'évolution moderne vers une sécurité livrée depuis le cloud."
        }
      ]
    },
    // ------------------------------------------------------------------
    // LEÇON 2 — Modèles de sécurité et critères d'évaluation
    // ------------------------------------------------------------------
    {
      id: "d3-l2",
      titre: "Modèles de sécurité et critères d'évaluation",
      duree: 16,
      slides: [
        {
          type: "intro",
          titre: "Des règles formelles pour les machines",
          points: [
            "Un modèle de sécurité traduit une politique en règles applicables par un ordinateur",
            "Modèles fondateurs : state machine, information flow, noninterference",
            "Sujet incontournable de l'examen : Bell-LaPadula, Biba, Clark-Wilson, Brewer-Nash"
          ],
          narration: "Un modèle de sécurité fournit un ensemble explicite de règles qu'un ordinateur peut suivre pour appliquer une politique de sécurité. Trois concepts fondateurs servent de socle : le modèle à machine à états, qui garantit que chaque transition laisse le système dans un état sûr, le modèle de flux d'information, qui empêche les flux non autorisés, et le modèle de non-interférence, qui empêche les actions d'un niveau élevé d'influencer ce qu'observe un niveau inférieur. Voyons maintenant les modèles nommés que l'examen adore."
        },
        {
          type: "schema",
          titre: "Bell-LaPadula : la confidentialité",
          points: [
            "Créé en 1973 pour protéger la confidentialité",
            "Simple property : no read up",
            "Star property : no write down (confinement)",
            "Ne traite pas les canaux cachés (covert channels)"
          ],
          schema: { type: "pyramid", items: ["Top Secret", "Secret", "Confidentiel", "Non classifié"] },
          narration: "Bell-LaPadula, établi en 1973, vise exclusivement la confidentialité. Sa règle simple, la simple security property, interdit de lire vers le haut : no read up. Sa règle étoile, la star property, interdit d'écrire vers le bas : no write down, pour empêcher qu'une information classifiée fuie vers un niveau inférieur. Il existe aussi la strong star property, où un sujet ne lit et n'écrit que dans son propre niveau. Notez que ce modèle ne traite pas les canaux cachés.",
          astuce: "💡 Moyen mnémotechnique : dans Bell-LaPadula, pensez « chut, c'est secret » — tout est orienté confidentialité."
        },
        {
          type: "schema",
          titre: "Biba : l'intégrité",
          points: [
            "Publié en 1977 en complément de Bell-LaPadula",
            "Simple integrity property : no read down",
            "Star integrity property : no write up",
            "Invocation property : pas d'appel vers un niveau d'intégrité supérieur"
          ],
          schema: { type: "pyramid", items: ["Intégrité haute", "Intégrité moyenne", "Intégrité basse"] },
          narration: "Biba, publié en 1977, est le miroir de Bell-LaPadula, mais orienté intégrité. Sa règle simple interdit de lire vers le bas, no read down, pour éviter de contaminer des données fiables par des données douteuses. Sa règle étoile interdit d'écrire vers le haut, no write up. La propriété d'invocation empêche un sujet d'appeler un sujet de niveau d'intégrité supérieur. Retenez enfin l'implémentation Lipner, qui combine Biba et Bell-LaPadula pour obtenir à la fois confidentialité et intégrité.",
          astuce: "💡 Conseil examen : les règles de Biba sont l'inverse exact de celles de Bell-LaPadula. Confidentialité = BLP, Intégrité = Biba."
        },
        {
          type: "standard",
          titre: "Clark-Wilson : l'intégrité par le triplet",
          points: [
            "Triplet de contrôle d'accès : sujet, programme (interface), objet",
            "TP : Transformation Procedures, seules opérations autorisées sur les CDI",
            "CDI protégés, UDI accessibles directement, IVP pour auditer la cohérence",
            "Impose des transactions bien formées et la séparation des tâches"
          ],
          narration: "Clark-Wilson protège l'intégrité d'une manière différente : par un triplet sujet, programme, objet. Le sujet n'accède jamais directement aux données protégées, appelées constrained data items ou CDI ; il passe obligatoirement par des transformation procedures, les TP, qui garantissent des transactions bien formées. Les unconstrained data items, ou UDI, restent accessibles directement. Les integrity verification procedures, les IVP, vérifient la cohérence interne et externe. Si une question mentionne un programme intermédiaire qui protège l'intégrité entre sujet et objet, la réponse est Clark-Wilson."
        },
        {
          type: "standard",
          titre: "Brewer-Nash et les autres modèles",
          points: [
            "Brewer-Nash : « ethical wall », prévention des conflits d'intérêts, accès dynamique selon l'historique",
            "Take-Grant : graphe orienté, règles take, grant, create, remove",
            "Graham-Denning : création et suppression sûres de sujets et objets, huit règles",
            "Harrison-Ruzzo-Ullman : extension de Graham-Denning sur les droits d'accès",
            "Goguen-Meseguer et Sutherland : fondements de la non-interférence et de l'intégrité"
          ],
          narration: "Le modèle Brewer-Nash, surnommé ethical wall ou muraille de Chine, empêche les conflits d'intérêts : les droits d'accès changent dynamiquement selon l'activité passée de l'utilisateur. Pensez à un cabinet de conseil qui sert deux concurrents. Take-Grant utilise un graphe orienté avec quatre opérations : take, grant, create et remove. Graham-Denning se concentre sur la création et la suppression sécurisées des sujets et des objets avec huit règles, et Harrison-Ruzzo-Ullman l'étend en s'intéressant à l'attribution des droits. Enfin, Goguen-Meseguer et Sutherland sont des modèles d'intégrité liés à la non-interférence.",
          astuce: "💡 Conseil examen : « conflit d'intérêts » ou « cabinet d'audit avec clients concurrents » = Brewer-Nash, sans hésiter."
        },
        {
          type: "standard",
          titre: "Modes de sécurité : dedicated et system high",
          points: [
            "Quatre modes pour les systèmes traitant de l'information classifiée : dedicated, system high, compartmented, multilevel",
            "Trois critères à vérifier : clearance, approbation d'accès (access approval), need-to-know",
            "Dedicated : clearance, approbation ET need-to-know pour TOUTES les informations du système",
            "System high : clearance et approbation pour TOUT, mais need-to-know seulement pour CERTAINES informations"
          ],
          narration: "Les modes de sécurité décrivent comment un système gouvernemental ou militaire traite l'information classifiée, selon trois critères appliqués à chaque utilisateur : la clearance, c'est-à-dire l'habilitation, l'approbation d'accès formelle, et le need-to-know, le besoin d'en connaître. En mode dedicated, chaque utilisateur possède les trois pour la totalité des informations traitées par le système. En mode system high, chaque utilisateur possède la clearance et l'approbation pour tout, mais le need-to-know ne porte que sur une partie des informations. Retenez que dans ces deux modes, c'est l'organisation, et non le système, qui porte l'essentiel du contrôle."
        },
        {
          type: "standard",
          titre: "Modes de sécurité : compartmented et multilevel",
          points: [
            "Compartmented : clearance pour TOUTES les informations, mais approbation et need-to-know limités à chaque compartiment",
            "Multilevel (controlled) : certains utilisateurs n'ont PAS la clearance pour toutes les informations",
            "En multilevel, c'est le système (trusted computing base) qui applique le contrôle d'accès entre niveaux",
            "Progression : du dedicated (tout le monde a tout) au multilevel (le système arbitre tout)"
          ],
          narration: "En mode compartmented, chaque utilisateur détient une clearance valide pour toutes les informations traitées par le système, mais l'approbation d'accès et le need-to-know sont limités aux seuls compartiments auxquels il accède. C'est la réponse attendue quand une question évoque une habilitation globale avec un besoin d'en connaître par compartiment. Enfin, en mode multilevel, aussi appelé controlled security mode, certains utilisateurs n'ont même pas la clearance pour toutes les informations : c'est alors le système lui-même, via sa trusted computing base, qui doit séparer les niveaux de classification et arbitrer chaque accès. Plus on descend vers le multilevel, plus la confiance repose sur la technique.",
          astuce: "💡 Moyen mnémotechnique : de dedicated à multilevel, les exigences imposées aux UTILISATEURS diminuent et celles imposées au SYSTÈME augmentent."
        },
        {
          type: "question",
          titre: "Contrôle de connaissance",
          q: "Quel mode de sécurité exige que chaque utilisateur possède une clearance valide pour TOUTES les informations traitées par le système, mais un need-to-know limité aux seuls compartiments auxquels il accède ?",
          choix: ["Dedicated", "System high", "Compartmented", "Multilevel"],
          reponse: 2,
          explication: "Le mode compartmented exige une clearance pour toutes les informations du système, mais l'approbation d'accès et le need-to-know sont limités à chaque compartiment. En mode dedicated, l'utilisateur a clearance, approbation et need-to-know pour tout. En system high, seul le need-to-know est partiel. En multilevel, certains utilisateurs n'ont pas la clearance pour toutes les informations et le système applique lui-même le contrôle.",
          narration: "Vérifions votre maîtrise des modes de sécurité, une question type de l'examen."
        },
        {
          type: "question",
          titre: "Contrôle de connaissance",
          q: "Dans le modèle Bell-LaPadula, que signifie la star (*) property ?",
          choix: ["No read up", "No write down", "No read down", "No write up"],
          reponse: 1,
          explication: "La star property de Bell-LaPadula interdit d'écrire vers un niveau inférieur (no write down), pour empêcher la fuite d'informations classifiées. No read up est la simple property de Bell-LaPadula. No read down et no write up appartiennent au modèle Biba, orienté intégrité.",
          narration: "Vérifions que les propriétés de Bell-LaPadula sont bien en place dans votre mémoire."
        },
        {
          type: "standard",
          titre: "TCSEC (Orange Book) et ITSEC : les ancêtres des Common Criteria",
          points: [
            "TCSEC (Orange Book, USA) : niveaux D à A1 — D protection minimale, C1/C2 discretionary protection, B1/B2/B3 mandatory protection, A1 verified design",
            "TCSEC n'évaluait que la confidentialité et les systèmes autonomes",
            "ITSEC (Europe) : évalue séparément la fonctionnalité (F) et l'assurance (E1 à E6), couvre aussi intégrité et disponibilité",
            "Les Common Criteria (ISO 15408) ont remplacé les deux ; correspondance approximative : C2 ≈ EAL3, B1 ≈ EAL4, A1/E6 ≈ EAL7"
          ],
          narration: "Avant les Common Criteria, deux référentiels historiques dominaient. Le TCSEC américain, surnommé Orange Book, classait les systèmes de D, protection minimale, à A1, conception formellement vérifiée, en passant par les niveaux C de protection discrétionnaire et les niveaux B de protection obligatoire fondée sur les labels. Sa grande limite : il n'évaluait que la confidentialité. L'ITSEC européen a innové en évaluant séparément la fonctionnalité et l'assurance, notée E1 à E6, et en couvrant aussi l'intégrité et la disponibilité. Les Common Criteria ont fusionné et remplacé ces deux référentiels ; retenez la correspondance approximative : C2 équivaut à peu près à EAL3, B1 à EAL4, et A1, comme E6, à EAL7.",
          astuce: "💡 Conseil examen : Orange Book = TCSEC = confidentialité uniquement, niveaux D à A1. Si la question parle d'un référentiel européen séparant fonctionnalité et assurance, c'est ITSEC."
        },
        {
          type: "standard",
          titre: "Common Criteria : le vocabulaire",
          points: [
            "Norme ISO/IEC 15408, cadre international d'évaluation de sécurité",
            "TOE : Target of Evaluation, le produit évalué",
            "PP : Protection Profile, les besoins de sécurité du client (« je veux »)",
            "ST : Security Target, les prétentions de sécurité du fournisseur (« je fournis »)"
          ],
          narration: "Les Common Criteria, fondés sur la norme ISO 15408, fournissent un cadre standard pour évaluer la sécurité des produits informatiques. Le produit évalué s'appelle la Target of Evaluation, ou TOE, par exemple un pare-feu. Le protection profile, ou PP, décrit les besoins de sécurité du client, ce qu'il veut. Le security target, ou ST, décrit ce que le fournisseur prétend avoir intégré dans sa TOE. L'organisation compare son PP aux ST des fournisseurs et choisit la meilleure correspondance."
        },
        {
          type: "schema",
          titre: "Les niveaux EAL",
          points: [
            "EAL1 : testé fonctionnellement — EAL2 : testé structurellement",
            "EAL3 : testé et vérifié méthodiquement — EAL4 : conçu, testé et revu méthodiquement",
            "EAL5 : conçu et testé semi-formellement — EAL6 : vérifié semi-formellement",
            "EAL7 : conçu, testé et vérifié formellement"
          ],
          schema: { type: "flow", items: ["EAL1", "EAL2", "EAL3", "EAL4", "EAL5", "EAL6", "EAL7"] },
          narration: "L'évaluation aboutit à un evaluation assurance level, ou EAL, qui mesure la rigueur de l'évaluation, et non directement la sécurité du produit. L'échelle va de EAL1, un simple test fonctionnel, peu coûteux, jusqu'à EAL7, une vérification formelle, très chère et réservée aux systèmes les plus critiques. EAL4, conçu, testé et revu méthodiquement, est le niveau le plus élevé économiquement raisonnable pour des produits commerciaux existants."
        },
        {
          type: "standard",
          titre: "ATO : l'autorisation d'exploiter",
          points: [
            "Authorization to Operate : autorisation officielle d'utiliser un système en acceptant les risques identifiés",
            "Délivrée par un Authorizing Official (AO)",
            "Doit être renouvelée après un changement de sécurité majeur, une brèche, ou à expiration"
          ],
          narration: "L'authorization to operate, ou ATO, est l'autorisation officielle d'exploiter un système d'information en acceptant les risques résiduels identifiés. Elle est délivrée par un authorizing official. Retenez les cas de renouvellement : l'ATO doit être réobtenue quand le système subit un changement de sécurité significatif, après une brèche de sécurité, ou tout simplement lorsque sa période de validité expire."
        },
        {
          type: "resume",
          titre: "Résumé de la leçon",
          points: [
            "Bell-LaPadula = confidentialité : no read up, no write down",
            "Biba = intégrité : no read down, no write up",
            "Clark-Wilson = intégrité via TP, CDI, UDI, IVP ; Brewer-Nash = conflits d'intérêts",
            "Modes de sécurité : dedicated (tout pour tous), system high (need-to-know partiel), compartmented (need-to-know par compartiment), multilevel (le système arbitre)",
            "TCSEC (Orange Book, D à A1) et ITSEC (F + E1-E6) : ancêtres des Common Criteria",
            "Common Criteria : TOE, PP (besoins client), ST (promesses vendeur), EAL1 à EAL7",
            "ATO : autorisation d'exploiter, renouvelée après changement majeur ou brèche"
          ],
          narration: "Faisons le point. Bell-LaPadula protège la confidentialité avec no read up et no write down. Biba protège l'intégrité avec les règles inverses. Clark-Wilson impose un programme intermédiaire entre sujet et objet, et Brewer-Nash prévient les conflits d'intérêts. Les quatre modes de sécurité, du dedicated au multilevel, décrivent qui, de l'organisation ou du système, porte le contrôle : retenez que le compartmented exige une clearance pour tout mais un need-to-know par compartiment. Côté évaluation, le TCSEC et l'ITSEC ont cédé la place aux Common Criteria, qui articulent la TOE, le protection profile du client, le security target du vendeur et les sept niveaux EAL. Enfin, l'ATO officialise l'acceptation du risque d'exploitation d'un système."
        }
      ]
    },
    // ------------------------------------------------------------------
    // LEÇON 3 — Capacités de sécurité des systèmes et sécurité matérielle
    // ------------------------------------------------------------------
    {
      id: "d3-l3",
      titre: "Capacités de sécurité des systèmes : mémoire, TPM, HSM",
      duree: 9,
      slides: [
        {
          type: "intro",
          titre: "La sécurité ancrée dans le matériel",
          points: [
            "Protection mémoire, virtualisation, TPM, chiffrement, tolérance aux pannes",
            "Le matériel offre une racine de confiance que le logiciel seul ne peut garantir"
          ],
          narration: "Dans cette leçon, nous descendons au niveau des capacités de sécurité intégrées aux systèmes d'information eux-mêmes : la protection de la mémoire, le moniteur de référence, les puces cryptographiques comme le TPM et le HSM, les anneaux de protection et la tolérance aux pannes. L'idée centrale est que le matériel peut fournir une racine de confiance que le logiciel seul ne peut pas garantir."
        },
        {
          type: "standard",
          titre: "Protection de la mémoire",
          points: [
            "Process isolation : chaque processus a son espace mémoire séparé",
            "Hardware segmentation : séparation imposée par le matériel lui-même",
            "ASLR : randomisation des adresses mémoire contre les buffer overflows"
          ],
          narration: "Un ordinateur exécute de nombreuses applications simultanément, chacune occupant un segment de mémoire. La protection mémoire empêche qu'un processus n'en affecte un autre. Deux méthodes principales existent : l'isolation de processus, où le système d'exploitation fournit des espaces mémoire séparés, et la segmentation matérielle, où la séparation est imposée physiquement par le matériel. Ajoutons l'ASLR, qui randomise l'emplacement des exécutables en mémoire pour compliquer les attaques par débordement de tampon."
        },
        {
          type: "standard",
          titre: "Le moniteur de référence et le noyau de sécurité",
          points: [
            "Reference Monitor Concept : contrôle théorique de chaque accès sujet-objet",
            "Quatre propriétés NEAT : Non-bypassable, Evaluable, Always invoked, Tamper-proof",
            "Le Security Kernel est l'implémentation concrète du moniteur de référence"
          ],
          narration: "Le reference monitor est un concept théorique : un mécanisme qui vérifie et contrôle chaque tentative d'accès d'un sujet à un objet. Il doit respecter quatre propriétés, résumées par l'acronyme NEAT : non contournable, évaluable, toujours invoqué et inviolable. Le security kernel, ou noyau de sécurité, est tout simplement l'implémentation concrète de ce concept dans un système réel."
        },
        {
          type: "schema",
          titre: "Les anneaux de protection",
          points: [
            "Ring 0 : le noyau, le plus privilégié",
            "Rings 1 et 2 : pilotes et services système",
            "Ring 3 : applications utilisateur, le moins privilégié"
          ],
          schema: { type: "cycle", items: ["Ring 0 : Kernel", "Ring 1 : Composants OS", "Ring 2 : Pilotes", "Ring 3 : Applications"] },
          narration: "Les protection rings organisent les privilèges en anneaux concentriques. L'anneau zéro, au centre, héberge le noyau du système d'exploitation avec les privilèges maximaux. Plus on s'éloigne du centre, moins on a de privilèges, jusqu'à l'anneau trois où s'exécutent les applications utilisateur. Ce cloisonnement empêche une application ordinaire de manipuler directement les ressources critiques du système."
        },
        {
          type: "standard",
          titre: "TPM : la puce de confiance",
          points: [
            "Trusted Platform Module : puce cryptographique inviolable sur la carte mère",
            "Génère et protège des clés, stocke mots de passe et secrets",
            "Remote attestation : hash de la configuration pour prouver l'intégrité du système",
            "Requis par de nombreuses solutions de chiffrement de disque"
          ],
          narration: "Le trusted platform module, ou TPM, est une puce cryptographique inviolable intégrée à certaines cartes mères. Elle réalise des opérations cryptographiques matérielles, dont la génération de clés, et protège de petites quantités d'informations sensibles comme des mots de passe et des clés de chiffrement. La remote attestation est une fonction du TPM qui crée une empreinte de la configuration système pour en prouver l'intégrité à distance. Beaucoup de solutions de chiffrement de disque exigent un TPM."
        },
        {
          type: "standard",
          titre: "HSM et enclaves sécurisées",
          points: [
            "HSM : cryptoprocesseur dédié pour gérer et stocker les clés, accélérer la crypto",
            "Le TPM est un exemple de HSM intégré ; le HSM d'entreprise est un boîtier dédié",
            "Enclave sécurisée : zone d'exécution isolée du processeur pour les données sensibles"
          ],
          narration: "Le hardware security module, ou HSM, est un cryptoprocesseur utilisé pour gérer et stocker les clés numériques, accélérer les opérations cryptographiques et renforcer l'authentification. Le TPM peut être vu comme un HSM intégré à la carte mère, tandis que les HSM d'entreprise sont des boîtiers dédiés, souvent utilisés par les autorités de certification et les banques. Les enclaves sécurisées, quant à elles, sont des zones d'exécution isolées au sein même du processeur, où les données sensibles restent protégées même si le système d'exploitation est compromis."
        },
        {
          type: "question",
          titre: "Contrôle de connaissance",
          q: "Quelle fonctionnalité du TPM crée une empreinte de la configuration système afin d'en confirmer l'intégrité ?",
          choix: ["Key escrow", "Remote attestation", "Secure boot", "Hardware segmentation"],
          reponse: 1,
          explication: "La remote attestation est la fonction du TPM qui génère un hash de la configuration du système pour en attester l'intégrité auprès d'un tiers. Le key escrow concerne la garde de clés par un tiers de confiance. Secure boot vérifie la chaîne de démarrage mais n'est pas la réponse attendue ici. La hardware segmentation concerne la mémoire.",
          narration: "Petite vérification sur le TPM, un sujet récurrent de l'examen."
        },
        {
          type: "standard",
          titre: "Interfaces et tolérance aux pannes",
          points: [
            "Constrained UI : restreindre ce que l'utilisateur voit selon ses privilèges",
            "Chiffrer et signer les communications entre systèmes (sinon IPsec)",
            "Fault tolerance : maintenir la disponibilité malgré panne ou attaque"
          ],
          narration: "Une interface utilisateur contrainte restreint ce qu'un utilisateur peut voir ou faire selon ses privilèges, par exemple en grisant certaines options. Entre systèmes, les interfaces doivent offrir chiffrement et signature ; si ce n'est pas le cas, on encapsule les échanges dans IPsec ou un autre transport chiffré. Enfin, la tolérance aux pannes est une capacité au service de la disponibilité : elle maintient le système opérationnel malgré une panne ou une attaque par déni de service."
        },
        {
          type: "resume",
          titre: "Résumé de la leçon",
          points: [
            "Protection mémoire : process isolation, hardware segmentation, ASLR",
            "Reference monitor NEAT, implémenté par le security kernel",
            "Rings : Ring 0 noyau privilégié, Ring 3 applications",
            "TPM : puce inviolable, remote attestation ; HSM : cryptoprocesseur dédié",
            "Interfaces chiffrées et signées, fault tolerance pour la disponibilité"
          ],
          narration: "En résumé, les systèmes offrent des capacités de sécurité natives : l'isolation mémoire et l'ASLR protègent les processus, le moniteur de référence et ses propriétés NEAT contrôlent chaque accès, les anneaux de protection hiérarchisent les privilèges. Le TPM et le HSM ancrent la cryptographie dans le matériel, tandis que les interfaces sécurisées et la tolérance aux pannes complètent le tableau."
        }
      ]
    },
    // ------------------------------------------------------------------
    // LEÇON 4 — Vulnérabilités des architectures : cloud, virtualisation, ICS, IoT
    // ------------------------------------------------------------------
    {
      id: "d3-l4",
      titre: "Cloud, virtualisation, ICS/SCADA et IoT",
      duree: 12,
      slides: [
        {
          type: "intro",
          titre: "Chaque architecture a ses vulnérabilités",
          points: [
            "Clients, serveurs, bases de données, cloud, industriel, embarqué",
            "L'examen teste votre capacité à associer environnement et mitigation"
          ],
          narration: "L'objectif 3.5 de l'examen demande d'évaluer et d'atténuer les vulnérabilités propres à chaque type d'architecture : postes clients, serveurs, bases de données, systèmes virtualisés, cloud, systèmes industriels, objets connectés et systèmes embarqués. La clé pour l'examen est de savoir associer chaque environnement à ses risques typiques et à ses contre-mesures."
        },
        {
          type: "standard",
          titre: "Clients, serveurs et bases de données",
          points: [
            "Le poste client est le point d'entrée le plus attaqué : EDR, antivirus, pare-feu local",
            "Serveurs : patching régulier, images durcies, pare-feu hôte",
            "Bases de données : attaque par aggregation (mathématique) et par inference (déduction humaine)",
            "Modèle ACID : Atomicity, Consistency, Isolation, Durability"
          ],
          narration: "Les postes clients sont le point d'entrée le plus attaqué, notamment via le navigateur et le phishing ; on les protège avec une suite complète incluant EDR, antivirus et pare-feu local. Les serveurs, cibles finales des attaquants, exigent un patching régulier et des images durcies. Les bases de données concentrent les données les plus sensibles : retenez l'attaque par agrégation, qui combine mathématiquement des enregistrements, et l'attaque par inférence, qui repose sur la déduction humaine à partir d'informations non sensibles. Retenez aussi le modèle ACID des transactions : atomicité, cohérence, isolation et durabilité.",
          astuce: "💡 Conseil examen : aggregation = fonctions mathématiques de la base ; inference = déduction humaine. Ne les confondez pas."
        },
        {
          type: "standard",
          titre: "Virtualisation et hyperviseurs",
          points: [
            "Type 1 : bare metal, directement sur le matériel ; Type 2 : application sur un OS classique",
            "VM escape : sortir de sa VM pour atteindre l'hôte via une faille de l'hyperviseur",
            "VM sprawl : prolifération incontrôlée de machines virtuelles",
            "Mitigations : patcher l'hyperviseur, isoler les systèmes très sensibles, protéger les comptes admin"
          ],
          narration: "Un hyperviseur de type un s'installe directement sur le matériel, alors qu'un type deux tourne comme une application sur un système d'exploitation classique. Le risque emblématique est le VM escape : un attaquant exploite une faille de l'hyperviseur pour sortir de sa machine virtuelle et atteindre l'hôte, donc potentiellement toutes les autres VM. Les mitigations : garder l'hyperviseur à jour, placer les systèmes les plus sensibles sur des machines physiques séparées, durcir l'hôte et protéger les comptes d'administration. Attention aussi au VM sprawl, la prolifération incontrôlée de machines virtuelles, souvent liée au shadow IT."
        },
        {
          type: "schema",
          titre: "Cloud : IaaS, PaaS, SaaS et responsabilité partagée",
          points: [
            "IaaS : ressources de base, le client gère OS et applications",
            "PaaS : plateforme et runtime fournis, le client gère ses applications",
            "SaaS : application complète, le fournisseur gère presque tout",
            "Le client reste toujours responsable de ses données, identités et configurations"
          ],
          schema: { type: "flow", items: ["IaaS : client gère le plus", "PaaS : partage intermédiaire", "SaaS : fournisseur gère le plus"] },
          narration: "Les trois modèles de service cloud répartissent différemment les responsabilités. En IaaS, le fournisseur livre des ressources de base, serveurs, stockage et réseau, et c'est le client qui installe et maintient systèmes et applications : c'est le modèle où le fournisseur assure le moins de maintenance et de sécurité. En PaaS, le fournisseur gère aussi la plateforme et le runtime. En SaaS, il gère la quasi-totalité de la pile. Mais dans tous les cas, le client reste responsable de ses données, de ses identités et de ses configurations. Chiffrez tout, utilisez une gestion d'identité centralisée avec MFA, et préférez des clés de chiffrement que vous contrôlez vous-même."
        },
        {
          type: "standard",
          titre: "Conteneurs, microservices et serverless",
          points: [
            "Containerization : partage du noyau de l'hôte, densité dix à cent fois supérieure",
            "Sécuriser : scanner les images, signer les images, protéger le registre, minimiser les composants",
            "Microservices : services faiblement couplés exposant des API — sécuriser authentification et chiffrement",
            "Serverless (FaaS) : le CSP gère les serveurs, le client gère le code ; sous-catégorie du PaaS"
          ],
          narration: "La conteneurisation élimine la duplication des éléments du système d'exploitation : chaque application embarque seulement ses dépendances et partage le noyau de l'hôte, ce qui offre une densité dix à cent fois supérieure à la virtualisation classique, mais une isolation moindre. On sécurise les conteneurs en scannant et signant les images, en contrôlant l'accès au registre et en minimisant les composants. Les microservices, dérivés de la SOA, sont des services faiblement couplés qui communiquent par API : il faut chiffrer tous les échanges, sécuriser l'authentification des API et intégrer la sécurité tôt dans le cycle de développement, ce qu'on appelle shift left. Enfin, le serverless, ou function as a service, confie les serveurs au fournisseur cloud pendant que le client gère uniquement son code."
        },
        {
          type: "standard",
          titre: "ICS et SCADA : la technologie opérationnelle",
          points: [
            "ICS = operational technology : DCS, PLC et SCADA en sont des formes",
            "SCADA : contrôle d'installations physiques, adapté aux environnements très distribués",
            "Risques : protocoles legacy propriétaires, impact physique réel",
            "Mitigations : segmentation réseau, change management strict, patches approuvés par le vendeur, sécurité physique, durcissement et journalisation"
          ],
          narration: "Les industrial control systems, ou ICS, aussi appelés operational technology, pilotent des processus industriels. Retenez trois formes : le DCS, système de contrôle distribué au sein d'une usine, le PLC, automate programmable robuste, et le SCADA, qui supervise des installations physiques parfois réparties sur des continents entiers, comme un réseau électrique. Beaucoup de systèmes SCADA reposent encore sur des protocoles legacy vulnérables. Les mitigations clés sont la segmentation réseau, une gestion des changements rigoureuse avec uniquement des correctifs approuvés par le fabricant, la sécurité physique, le chiffrement des communications et la journalisation.",
          astuce: "💡 Conseil examen : pour un système SCADA vulnérable qu'on ne peut pas patcher, la MEILLEURE réponse est presque toujours la segmentation réseau."
        },
        {
          type: "standard",
          titre: "IoT et systèmes embarqués",
          points: [
            "IoT : rarement conçu avec la sécurité comme priorité, souvent point de pivot",
            "Mitigations IoT : réseau dédié isolé, patching, désactiver la gestion à distance, HTTPS uniquement, évaluer le vendeur",
            "Embedded systems : statiques, difficiles à patcher, impact physique réel",
            "Mitigations embarqué : isolation réseau, secure boot, protection physique"
          ],
          narration: "Les objets connectés sont rarement conçus avec la sécurité en tête ; une fois compromis, ils servent de point de pivot vers le reste du réseau. On les place donc sur un réseau dédié et isolé, on les patche, on désactive la gestion à distance, on n'autorise que des communications sécurisées et on évalue sérieusement l'historique de sécurité du vendeur. Les systèmes embarqués posent un problème voisin : ils sont statiques, difficiles voire impossibles à mettre à jour, et souvent liés à des systèmes physiques dont la compromission a un impact réel. On les isole d'internet et du réseau de production, on active le secure boot et on protège physiquement le matériel."
        },
        {
          type: "standard",
          titre: "Systèmes distribués, HPC et edge computing",
          points: [
            "DCE : systèmes coopérants ; la sécurité doit être traitée partout, pas en un point central",
            "HPC : calcul haute performance, souvent partagé, avec RTOS ; isoler via des head nodes",
            "Edge computing : traitement au plus près de la donnée, latence minimale",
            "Fog computing : couche intermédiaire distribuée entre l'edge et le cloud"
          ],
          narration: "Dans un environnement distribué, données et traitements sont répartis sur de multiples systèmes : la sécurité doit donc être assurée partout, y compris sur les liens réseau, et non sur un hôte central unique. Les systèmes de calcul haute performance, souvent loués ou partagés, limitent l'efficacité des pare-feux et des air gaps ; on les protège en routant le trafic par des nœuds de tête et en surveillant les comportements anormaux. L'edge computing rapproche le traitement des données de leur source pour réduire la latence, et le fog computing forme une couche intermédiaire entre la périphérie et le cloud. Pour la périphérie, appliquez une approche Zero Trust, une segmentation et une politique de patching cohérente."
        },
        {
          type: "question",
          titre: "Contrôle de connaissance",
          q: "Dans le modèle IaaS, quelle affirmation décrit le MIEUX la répartition des responsabilités de sécurité ?",
          choix: [
            "Le fournisseur gère les systèmes d'exploitation et les applications du client",
            "Le client gère les systèmes d'exploitation, les applications et leurs correctifs",
            "Le fournisseur est responsable de la totalité de la sécurité",
            "Le client est responsable de la sécurité physique des centres de données"
          ],
          reponse: 1,
          explication: "En IaaS, le fournisseur ne livre que l'infrastructure de base (serveurs, stockage, réseau) et en assure la maintenance ; le client installe et maintient les OS et les applications, y compris le patching. C'est le modèle où le fournisseur assure le moins de sécurité. La sécurité physique des centres de données reste toujours du ressort du fournisseur.",
          narration: "Testons votre maîtrise du modèle de responsabilité partagée, un grand classique de l'examen."
        },
        {
          type: "resume",
          titre: "Résumé de la leçon",
          points: [
            "Clients = point d'entrée, serveurs = cible finale ; aggregation vs inference en base de données",
            "VM escape et VM sprawl : patcher l'hyperviseur, séparer le très sensible",
            "IaaS/PaaS/SaaS : le client garde toujours données, identités et configurations",
            "ICS/SCADA : segmentation avant tout ; IoT et embarqué : réseau isolé, secure boot",
            "Distribué, HPC, edge : sécurité partout, Zero Trust, cohérence des politiques"
          ],
          narration: "Retenons l'essentiel. Chaque architecture a son talon d'Achille : le poste client face au phishing, l'hyperviseur face au VM escape, la base de données face à l'inférence, le cloud face aux erreurs de configuration, le SCADA face aux protocoles legacy et l'IoT face à ses réglages d'usine. Dans presque tous les cas, la segmentation réseau, le durcissement, le chiffrement et une gestion rigoureuse des correctifs forment le socle des réponses attendues à l'examen."
        }
      ]
    },
    // ------------------------------------------------------------------
    // LEÇON 5 — Cryptographie : fondamentaux, symétrique, asymétrique, hachage
    // ------------------------------------------------------------------
    {
      id: "d3-l5",
      titre: "Cryptographie : symétrique, asymétrique et hachage",
      duree: 14,
      slides: [
        {
          type: "intro",
          titre: "Le cœur du Domaine 3",
          points: [
            "Vocabulaire : plaintext, ciphertext, key, algorithm, key space",
            "Kerckhoff : la sécurité repose sur le secret de la clé, pas de l'algorithme",
            "Confusion et diffusion : les deux piliers d'un bon chiffre"
          ],
          narration: "Nous voici au cœur du Domaine 3 : la cryptographie. Posons d'abord le vocabulaire. Le plaintext est le message lisible, le ciphertext sa version chiffrée, l'algorithme est la fonction mathématique, et la clé est le paramètre secret qui pilote l'algorithme. Le key space, l'espace des clés, vaut deux puissance n pour une clé de n bits. Le principe de Kerckhoff est fondamental : un système doit rester sûr même si tout est public, sauf la clé. Enfin, un bon chiffre combine la confusion, qui complexifie la relation entre clé et ciphertext, et la diffusion, qui propage chaque bit du plaintext dans tout le ciphertext."
        },
        {
          type: "standard",
          titre: "Chiffrement symétrique : une seule clé partagée",
          points: [
            "Même clé pour chiffrer et déchiffrer : rapide, idéal pour le chiffrement de masse",
            "Ne fournit que la confidentialité ; le défi est la distribution des clés",
            "Nombre de clés pour n participants : n(n-1)/2",
            "Stream ciphers (bit à bit) et block ciphers (par blocs)"
          ],
          narration: "Le chiffrement symétrique utilise la même clé secrète pour chiffrer et déchiffrer. Il est rapide et parfaitement adapté au chiffrement de gros volumes, mais il ne fournit que la confidentialité, et surtout il pose le problème du partage sécurisé de la clé. Retenez la formule du nombre de clés nécessaires pour relier n participants : n multiplié par n moins un, le tout divisé par deux. Pour dix personnes, cela fait déjà quarante-cinq clés. Les chiffres symétriques opèrent soit en flux, symbole par symbole, soit par blocs de taille fixe.",
          astuce: "💡 Conseil examen : mémorisez n(n-1)/2. Pour 10 utilisateurs : 45 clés. Pour 100 : 4950 clés."
        },
        {
          type: "standard",
          titre: "AES et les algorithmes symétriques",
          points: [
            "AES = Rijndael : clés de 128, 192 ou 256 bits, blocs fixes de 128 bits",
            "Standard du gouvernement américain, remplace DES",
            "DES insécurisé depuis longtemps ; 3DES formellement déprécié par le NIST en 2023",
            "Autres : IDEA (clé 128 bits, blocs 64 bits), Blowfish, Twofish, ChaCha20, RC4/5/6"
          ],
          narration: "L'advanced encryption standard, AES, repose sur l'algorithme Rijndael. Il utilise des clés de cent vingt-huit, cent quatre-vingt-douze ou deux cent cinquante-six bits, avec une taille de bloc fixe de cent vingt-huit bits. C'est le standard du gouvernement américain pour les données sensibles non classifiées, et il remplace DES, considéré comme insécurisé depuis des décennies. Notez que le NIST a formellement déprécié triple DES en 2023. Parmi les autres algorithmes symétriques, citons IDEA avec sa clé de cent vingt-huit bits sur des blocs de soixante-quatre bits, Blowfish, Twofish et ChaCha20."
        },
        {
          type: "schema",
          titre: "Les modes d'opération des chiffres par blocs",
          points: [
            "ECB : le plus simple et le plus faible, blocs identiques donnent ciphertext identique",
            "CBC : chaînage par XOR avec le bloc précédent et un IV ; séquentiel",
            "CFB/OFB : versions flux ; OFB ne propage pas les erreurs",
            "CTR : parallélisable et rapide, mais sans intégrité",
            "GCM : CTR + authentification Galois = confidentialité ET intégrité"
          ],
          schema: { type: "flow", items: ["ECB (faible)", "CBC (chaînage + IV)", "CFB/OFB (flux)", "CTR (parallèle)", "GCM/CCM (authentifié)"] },
          narration: "Les chiffres par blocs fonctionnent selon plusieurs modes. ECB, electronic code book, est le plus simple et le plus faible : deux blocs de plaintext identiques donnent le même ciphertext. CBC, cipher block chaining, chaîne chaque bloc avec le précédent grâce à une opération XOR et un vecteur d'initialisation, ce qui masque les répétitions mais impose un traitement séquentiel. CFB et OFB transforment le chiffre par blocs en chiffre de flux, OFB ayant l'avantage de ne pas propager les erreurs. CTR utilise un compteur et se parallélise très bien, mais n'offre aucune intégrité. Enfin GCM, Galois counter mode, combine le mode compteur avec une authentification : il fournit à la fois confidentialité et intégrité, c'est le mode moderne recommandé.",
          astuce: "💡 Conseil examen : GCM et CCM sont les modes « authentifiés » — la réponse attendue quand on demande confidentialité + intégrité."
        },
        {
          type: "standard",
          titre: "Chiffrement asymétrique : la paire de clés",
          points: [
            "Deux clés liées : publique (diffusable) et privée (secrète)",
            "Résout la distribution des clés et passe à l'échelle",
            "Fournit confidentialité, authentification et non-répudiation",
            "Chiffrer pour quelqu'un : sa clé publique ; déchiffrer : sa propre clé privée",
            "Plus lent que le symétrique"
          ],
          narration: "Le chiffrement asymétrique, ou à clé publique, utilise une paire de clés mathématiquement liées : une clé publique qu'on peut diffuser librement, et une clé privée qui doit rester absolument secrète. Il résout élégamment les deux grands problèmes du symétrique : l'échange de clés et le passage à l'échelle. Il fournit la confidentialité, l'authentification et la non-répudiation. Retenez la règle d'or : pour envoyer un message confidentiel, on chiffre avec la clé publique du destinataire, qui déchiffre avec sa clé privée. Le prix à payer, c'est la lenteur : l'asymétrique est bien plus lent que le symétrique."
        },
        {
          type: "standard",
          titre: "RSA, Diffie-Hellman, ElGamal et ECC",
          points: [
            "RSA : repose sur la factorisation du produit de grands nombres premiers",
            "Diffie-Hellman et ElGamal : arithmétique modulaire, échange de clés",
            "ECC : logarithme discret sur courbes elliptiques ; clé 256 bits ECC ≈ RSA 3072 bits",
            "Minimums usuels : 2048 bits pour l'asymétrique, 256 bits pour le symétrique"
          ],
          narration: "Quatre cryptosystèmes asymétriques dominent. RSA repose sur la difficulté de factoriser le produit de grands nombres premiers : à l'examen, si vous voyez factoring attack, pensez RSA. Diffie-Hellman, fondé sur l'arithmétique modulaire, sert avant tout à l'échange de clés, et ElGamal en est une extension. La cryptographie sur courbes elliptiques, ECC, repose sur le problème du logarithme discret elliptique : une clé ECC de deux cent cinquante-six bits offre une sécurité équivalente à une clé RSA de trois mille soixante-douze bits, ce qui la rend idéale pour les appareils mobiles et contraints. Côté longueurs, on recommande au minimum deux mille quarante-huit bits en asymétrique et deux cent cinquante-six bits en symétrique."
        },
        {
          type: "standard",
          titre: "Le chiffrement hybride et TLS",
          points: [
            "Hybride : l'asymétrique échange une clé de session symétrique éphémère",
            "Le contenu est ensuite protégé par le symétrique, rapide",
            "TLS fonctionne exactement ainsi",
            "Session key : clé symétrique à usage unique"
          ],
          narration: "En pratique, on combine le meilleur des deux mondes : c'est le chiffrement hybride. La cryptographie asymétrique sert uniquement à échanger en toute sécurité une clé de session symétrique éphémère, puis tout le contenu est chiffré avec cette clé symétrique, rapide et efficace. C'est exactement le fonctionnement de TLS : une poignée de main asymétrique, puis une session symétrique. La session key est donc une clé symétrique à usage unique, générée pour une seule communication."
        },
        {
          type: "standard",
          titre: "Le hachage : l'empreinte à sens unique",
          points: [
            "Fonction à sens unique : entrée de taille quelconque, empreinte de taille fixe",
            "Collision : deux entrées différentes produisent le même hash",
            "Salting : ajoute de l'aléa, contre les rainbow tables ; pepper stocké hors base",
            "Key stretching : ralentir volontairement le hachage — PBKDF2, bcrypt, scrypt, Argon2"
          ],
          narration: "Une fonction de hachage transforme une entrée de taille quelconque en une empreinte de taille fixe, appelée hash ou digest. C'est une fonction à sens unique : il est infaisable de retrouver le plaintext à partir du hash. Une collision survient quand deux entrées différentes produisent la même empreinte, ce qui signe la faiblesse d'un algorithme. Pour stocker des mots de passe, on ajoute un salt, une valeur aléatoire qui neutralise les rainbow tables, et parfois un pepper, une constante secrète stockée hors de la base. Le key stretching ralentit volontairement le calcul pour décourager le brute force : c'est le rôle de PBKDF2, bcrypt, scrypt et Argon2, ce dernier ayant remporté la Password Hashing Competition de 2015."
        },
        {
          type: "standard",
          titre: "One-time pad et vecteurs d'initialisation",
          points: [
            "One-time pad : théoriquement incassable si la clé est aléatoire, aussi longue que le message, utilisée une seule fois et protégée",
            "IV / nonce : valeur aléatoire XORée pour casser la prédictibilité",
            "Key clustering : des clés différentes produisent le même ciphertext — faiblesse",
            "Work factor : effort en temps et coût nécessaire pour casser le système"
          ],
          narration: "Le one-time pad est le seul chiffre théoriquement incassable, à quatre conditions strictes : la clé doit être parfaitement aléatoire, au moins aussi longue que le message, utilisée une seule et unique fois, et protégée physiquement. Le vecteur d'initialisation, ou nonce, est une valeur aléatoire combinée au message par XOR pour éliminer la prédictibilité et la répétition. Deux notions de faiblesse à connaître : le key clustering, quand des clés différentes produisent le même ciphertext, et le work factor, qui mesure l'effort en temps et en coût nécessaire pour casser un système ; plus il est élevé, mieux c'est."
        },
        {
          type: "question",
          titre: "Contrôle de connaissance",
          q: "Une organisation de 20 personnes veut que chaque paire de collaborateurs communique avec une clé symétrique unique. Combien de clés faut-il ?",
          choix: ["20", "40", "190", "380"],
          reponse: 2,
          explication: "La formule est n(n-1)/2, soit 20 × 19 / 2 = 190 clés. C'est précisément ce problème d'explosion du nombre de clés que la cryptographie asymétrique résout : avec elle, il suffit de 2n clés, soit une paire par personne (40 clés pour 20 personnes).",
          narration: "Un calcul classique de l'examen : le nombre de clés symétriques nécessaires."
        },
        {
          type: "resume",
          titre: "Résumé de la leçon",
          points: [
            "Symétrique : rapide, une clé partagée, n(n-1)/2 clés, confidentialité seule",
            "AES/Rijndael : 128/192/256 bits, blocs de 128 bits ; GCM = mode authentifié",
            "Asymétrique : RSA (factorisation), DH/ElGamal (modulaire), ECC (courbes, clés courtes)",
            "Hybride : l'asymétrique échange la clé de session, le symétrique chiffre le contenu",
            "Hachage à sens unique : salting contre rainbow tables, key stretching contre brute force"
          ],
          narration: "Résumons ce socle cryptographique. Le symétrique est rapide mais souffre de la distribution des clés ; l'asymétrique résout ce problème au prix de la lenteur ; l'hybride, comme dans TLS, combine les deux. AES est le standard symétrique, RSA et ECC dominent l'asymétrique, et les modes authentifiés comme GCM apportent l'intégrité en plus de la confidentialité. Enfin, le hachage fournit l'empreinte à sens unique, renforcée par le salting et le key stretching pour les mots de passe."
        }
      ]
    },
    // ------------------------------------------------------------------
    // LEÇON 6 — PKI, signatures, gestion des clés, attaques et post-quantique
    // ------------------------------------------------------------------
    {
      id: "d3-l6",
      titre: "PKI, signatures, attaques cryptographiques et post-quantique",
      duree: 17,
      slides: [
        {
          type: "intro",
          titre: "De la confiance aux attaques",
          points: [
            "PKI : l'infrastructure qui distribue la confiance",
            "Signatures numériques : intégrité, authentification, non-répudiation",
            "Panorama des attaques cryptanalytiques et l'horizon post-quantique"
          ],
          narration: "La cryptographie ne vaut rien sans un système de confiance pour distribuer les clés publiques et sans une gestion rigoureuse des clés. Dans cette leçon, nous couvrons l'infrastructure à clés publiques, les signatures numériques, la gestion du cycle de vie des clés, puis nous passons du côté de l'attaquant avec les méthodes de cryptanalyse, avant de terminer sur la menace quantique."
        },
        {
          type: "schema",
          titre: "La PKI et ses composants",
          points: [
            "CA : Certification Authority, émet les certificats",
            "RA : Registration Authority, vérifie l'identité des demandeurs",
            "Certificat numérique : lie une identité à une clé publique",
            "Hiérarchies : root CA hors ligne, CA intermédiaires émettrices",
            "Révocation : la PKI doit publier l'état des certificats"
          ],
          schema: { type: "pyramid", items: ["Root CA (hors ligne)", "CA intermédiaires / politiques", "Certificats utilisateurs et serveurs"] },
          narration: "La public key infrastructure est une hiérarchie de relations de confiance qui combine cryptographie asymétrique, symétrique, hachage et certificats numériques. L'autorité de certification, la CA, émet les certificats ; l'autorité d'enregistrement, la RA, vérifie l'identité des demandeurs. Le certificat numérique lie l'identité d'un utilisateur ou d'un serveur à sa clé publique. Dans une architecture à deux niveaux, la root CA reste hors ligne pour être protégée, tandis que les CA intermédiaires émettent les certificats au quotidien. Plus il y a de niveaux, plus la sécurité augmente, mais aussi la complexité et le coût. Une PKI doit aussi publier l'information de révocation des certificats et documenter ses pratiques dans une certificate policy et un certificate practice statement."
        },
        {
          type: "standard",
          titre: "Les signatures numériques",
          points: [
            "Signer : hacher le message, puis chiffrer le digest avec sa clé PRIVÉE",
            "Vérifier : déchiffrer avec la clé PUBLIQUE de l'émetteur et comparer les digests",
            "Garantit intégrité, authentification et non-répudiation — PAS la confidentialité",
            "FIPS 186-5 : RSA, ECDSA, EdDSA (DSA seulement pour vérifier l'existant)"
          ],
          narration: "La signature numérique combine hachage et cryptographie à clé publique. Pour signer, on calcule d'abord l'empreinte du message, puis on chiffre ce digest avec sa propre clé privée. Pour vérifier, le destinataire déchiffre la signature avec la clé publique de l'émetteur et compare le digest obtenu avec celui qu'il calcule lui-même : s'ils correspondent, le message est authentique et intact. La signature garantit l'intégrité, l'authentification et la non-répudiation, mais attention, elle ne fournit aucune confidentialité par elle-même. Le standard FIPS 186-5 reconnaît trois techniques : RSA, ECDSA et EdDSA.",
          astuce: "💡 Conseil examen : signature = clé privée de l'émetteur ; chiffrement confidentiel = clé publique du destinataire. Ne jamais inverser."
        },
        {
          type: "standard",
          titre: "La gestion des clés",
          points: [
            "Cycle : génération, distribution, stockage, rotation, révocation, archivage, destruction",
            "Trois méthodes d'échange : distribution hors ligne, chiffrement à clé publique, Diffie-Hellman",
            "Key escrow : garde des clés par un tiers ; m of n control pour la récupération",
            "Jamais de clé en clair hors du dispositif ; sauvegarder les clés ; cryptographic erase"
          ],
          narration: "La gestion des clés couvre tout leur cycle de vie : génération aléatoire exploitant tout le key space, distribution sécurisée, stockage protégé, rotation régulière, révocation, archivage et destruction. Trois méthodes principales existent pour échanger des clés secrètes : la distribution hors ligne, le chiffrement à clé publique et l'algorithme Diffie-Hellman. Le key escrow confie les clés à un tiers de confiance pour permettre leur récupération ; avec le contrôle m parmi n, on désigne n agents de récupération dont seulement m sont nécessaires. Retenez aussi que les clés ne doivent jamais apparaître en clair hors du dispositif cryptographique, qu'elles doivent être sauvegardées, et que le cryptographic erase détruit définitivement les clés pour rendre les données irrécupérables."
        },
        {
          type: "standard",
          titre: "Split knowledge et dual control",
          points: [
            "Split knowledge : la connaissance de la clé est FRAGMENTÉE — personne ne détient seul l'information complète",
            "Dual control : l'UTILISATION d'une fonction critique exige la présence simultanée de deux personnes (ou plus)",
            "Le contrôle m of n combine les deux : n fragments distribués, m requis pour reconstituer la clé",
            "Historique : le Clipper chip (algorithme Skipjack, NSA, années 90) prévoyait un key escrow gouvernemental avec la clé scindée entre deux agences — abandonné après une forte opposition"
          ],
          narration: "Deux principes appliquent la séparation des tâches à la cryptographie. Le split knowledge fragmente la connaissance : chaque personne ne détient qu'une partie de la clé ou du secret, si bien que personne seule ne peut la reconstituer. Le dual control, lui, porte sur l'usage : une opération critique, comme l'activation d'un HSM ou la signature d'une root CA, exige la présence et l'action simultanées d'au moins deux personnes. Le contrôle m parmi n, vu à la diapositive précédente, combine élégamment les deux idées. Petit détour historique : dans les années quatre-vingt-dix, le gouvernement américain a proposé le Clipper chip, une puce de chiffrement fondée sur l'algorithme secret Skipjack, avec un key escrow gouvernemental où la clé de chaque puce était scindée entre deux agences fédérales, illustration même du split knowledge. Le projet a été abandonné face à l'opposition sur la vie privée et aux faiblesses découvertes.",
          astuce: "💡 Conseil examen : split knowledge = personne ne SAIT tout ; dual control = personne ne FAIT rien seul. Les deux ensemble = m of n control."
        },
        {
          type: "standard",
          titre: "Attaques par force brute et sur les mots de passe",
          points: [
            "Brute force : essayer toutes les combinaisons possibles",
            "Dictionary attack : essayer des listes de mots ; hybrid : dictionnaire + variations",
            "Rainbow tables : bases précalculées de hashes — contrées par le salting",
            "Contre-mesures : mots de passe forts, salting, key stretching"
          ],
          narration: "L'attaque par force brute essaie méthodiquement toutes les combinaisons possibles d'une clé ou d'un mot de passe. L'attaque par dictionnaire se limite à des listes de mots probables, et l'attaque hybride combine dictionnaire et variations. Les rainbow tables sont d'immenses bases précalculées de mots de passe et de leurs hashes, permettant une recherche inversée quasi instantanée ; c'est exactement ce que le salting neutralise, puisque chaque hash devient unique. Les contre-mesures classiques sont donc des politiques de mots de passe robustes, le salting et le key stretching."
        },
        {
          type: "standard",
          titre: "Attaques analytiques : du ciphertext au chosen plaintext",
          points: [
            "Ciphertext only : l'attaquant n'a que des messages chiffrés",
            "Known plaintext : il possède des paires plaintext/ciphertext (linear cryptanalysis, meet-in-the-middle contre 2DES)",
            "Chosen plaintext : il fait chiffrer les textes de son choix (differential cryptanalysis)",
            "Chosen ciphertext : il fait déchiffrer des portions choisies — la plus puissante",
            "Frequency analysis : exploite la fréquence des lettres contre les chiffres de substitution"
          ],
          narration: "Classons les attaques analytiques par puissance croissante. Dans l'attaque ciphertext only, l'attaquant ne dispose que de messages chiffrés ; l'analyse de fréquence, qui exploite la fréquence des lettres d'une langue, fonctionne contre les chiffres de substitution simples. Dans la known plaintext, il possède des paires de plaintext et de ciphertext correspondants ; la cryptanalyse linéaire en est un exemple, tout comme l'attaque meet-in-the-middle qui a condamné le double DES. Dans la chosen plaintext, il peut faire chiffrer les textes de son choix, ce qui permet la cryptanalyse différentielle. Enfin, dans la chosen ciphertext, la plus puissante, il peut faire déchiffrer des portions choisies du ciphertext. Les modes authentifiés comme GCM et CCM constituent une bonne parade."
        },
        {
          type: "standard",
          titre: "Attaques d'implémentation, side-channel et fault injection",
          points: [
            "Implementation attack : exploite bugs et défauts du code, pas les maths",
            "Side-channel : observe consommation électrique, émissions électromagnétiques, temps d'exécution",
            "Timing attack : mesure précise des durées d'opération ; contre-mesure : temps constant",
            "Fault injection : provoquer une panne (tension, température) pour compromettre le dispositif",
            "TEMPEST : normes contre les émanations électromagnétiques"
          ],
          narration: "Les attaques d'implémentation ne s'attaquent pas aux mathématiques mais au code : bugs logiciels, firmware obsolète, méthodologie défaillante. Les attaques side-channel observent les traces physiques du calcul : consommation électrique, émissions électromagnétiques ou temps d'exécution. L'attaque par timing en est l'exemple type : on mesure précisément la durée des opérations cryptographiques pour en déduire des informations sur la clé ; la parade est d'exécuter les opérations sensibles en temps constant ou d'ajouter des délais aléatoires. La fault injection provoque volontairement un dysfonctionnement, par exemple par surtension ou température extrême. Enfin, TEMPEST désigne les normes de protection contre les émanations électromagnétiques : blindage, équipements certifiés et bruit d'obfuscation."
        },
        {
          type: "standard",
          titre: "MITM, pass the hash et exploitation Kerberos",
          points: [
            "MITM / on-path : l'attaquant s'intercale et relaie deux sessions chiffrées distinctes",
            "Pass the hash : réutiliser le hash NTLM capturé sans le déchiffrer",
            "Silver ticket : hash d'un compte de service → ticket TGS ; Golden ticket : hash du compte KRBTGT → tickets à volonté",
            "Kerberoasting : collecte de tickets TGS chiffrés à casser hors ligne",
            "Ransomware : la cryptographie utilisée comme arme"
          ],
          narration: "Dans l'attaque man-in-the-middle, aussi appelée on-path, l'attaquant s'intercale entre deux parties et établit deux sessions sécurisées distinctes, lisant tout le trafic au passage ; on la contre par des protocoles robustes et une authentification forte. Le pass the hash consiste à capturer le hash d'un mot de passe, souvent en mémoire, et à le rejouer tel quel pour s'authentifier, typiquement sur NTLM. Côté Kerberos, retenez la hiérarchie : le silver ticket exploite le hash d'un compte de service pour forger un ticket de service, tandis que le golden ticket exploite le hash du compte KRBTGT et permet de créer des tickets à volonté dans tout l'Active Directory. Le kerberoasting collecte des tickets TGS chiffrés pour les casser hors ligne. Enfin, le ransomware est la cryptographie transformée en arme : la parade essentielle reste des sauvegardes régulières et hors ligne.",
          astuce: "💡 Conseil examen : Golden ticket = KRBTGT = contrôle total du domaine. Silver ticket = un seul compte de service."
        },
        {
          type: "standard",
          titre: "Quantique et post-quantique",
          points: [
            "Quantum supremacy : les qubits menacent factorisation et logarithme discret, donc RSA et Diffie-Hellman",
            "Harvest Now, Decrypt Later : intercepter aujourd'hui, déchiffrer demain",
            "PQC : algorithmes classiques résistants au quantique, ex. cryptographie sur réseaux (lattice-based)",
            "QKD : distribution quantique de clés, l'écoute perturbe l'état mesuré et se détecte"
          ],
          narration: "L'informatique quantique exploite des qubits capables de représenter zéro et un simultanément. La quantum supremacy désigne sa capacité potentielle à résoudre facilement la factorisation des grands entiers et le logarithme discret, ce qui rendrait RSA et Diffie-Hellman obsolètes. La menace est déjà actuelle avec la stratégie harvest now, decrypt later : des adversaires interceptent et stockent aujourd'hui des données chiffrées pour les déchiffrer demain. La cryptographie post-quantique développe des algorithmes exécutables sur des ordinateurs classiques mais résistants aux attaques quantiques ; la cryptographie fondée sur les réseaux, lattice-based, en est l'exemple phare. À distinguer de la quantum key distribution, qui utilise la mécanique quantique elle-même pour échanger des clés : toute écoute perturbe l'état quantique mesuré et devient détectable."
        },
        {
          type: "standard",
          titre: "Cryptographie émergente : homomorphe et confidential computing",
          points: [
            "Homomorphic encryption : effectuer des CALCULS directement sur des données chiffrées, sans jamais les déchiffrer",
            "Le résultat, une fois déchiffré, est identique au calcul sur les données en clair",
            "Cas d'usage : sous-traiter l'analyse de données sensibles (santé, finance) à un cloud non totalement fiable",
            "Confidential computing : protéger les données EN COURS DE TRAITEMENT grâce aux enclaves matérielles (TEE) du processeur",
            "Complète le triptyque : chiffrement at rest, in transit, et désormais in use"
          ],
          narration: "Deux technologies émergentes comblent le dernier angle mort du chiffrement : la donnée en cours d'utilisation. Le chiffrement homomorphe permet d'effectuer des calculs directement sur des données chiffrées, sans jamais les déchiffrer : le résultat, une fois déchiffré par le propriétaire, est identique à celui qu'on aurait obtenu sur les données en clair. On peut ainsi confier l'analyse de données médicales ou financières à un fournisseur cloud sans jamais lui révéler leur contenu ; le prix à payer reste un coût de calcul très élevé. Le confidential computing adopte une approche matérielle : les données sont traitées dans une enclave sécurisée du processeur, un trusted execution environment isolé, inaccessible même à l'hyperviseur et à l'administrateur du cloud. Retenez la formule : le chiffrement protégeait déjà les données at rest et in transit ; ces technologies protègent les données in use.",
          astuce: "💡 Conseil examen : « effectuer des calculs sur des données chiffrées sans les déchiffrer » = homomorphic encryption. « Enclave matérielle isolée dans le cloud » = confidential computing."
        },
        {
          type: "question",
          titre: "Contrôle de connaissance",
          q: "Un attaquant mesure précisément la durée des opérations de déchiffrement d'une carte à puce pour en déduire la clé privée. De quel type d'attaque s'agit-il ?",
          choix: ["Fault injection", "Chosen ciphertext", "Timing (side-channel)", "Meet-in-the-middle"],
          reponse: 2,
          explication: "Mesurer les durées d'exécution des opérations cryptographiques est une attaque par timing, une forme d'attaque side-channel qui exploite les caractéristiques physiques observables du système. La fault injection provoquerait une panne (tension, température). Chosen ciphertext ferait déchiffrer des textes choisis. Meet-in-the-middle est une attaque de type known plaintext visant les doubles chiffrements comme 2DES.",
          narration: "Voyons si vous distinguez bien les familles d'attaques cryptanalytiques."
        },
        {
          type: "resume",
          titre: "Résumé de la leçon",
          points: [
            "PKI : CA émet, RA vérifie, root CA hors ligne, révocation obligatoire",
            "Signature : hash chiffré avec la clé privée = intégrité + authentification + non-répudiation",
            "Gestion des clés : cycle complet, escrow, m of n, cryptographic erase",
            "Split knowledge (personne ne sait tout) et dual control (personne n'agit seul) ; Clipper/Skipjack en exemple historique",
            "Attaques : brute force → known/chosen plaintext/ciphertext → side-channel → Kerberos",
            "Post-quantique : lattice-based contre la menace harvest now, decrypt later",
            "Émergent : homomorphic encryption (calcul sur données chiffrées), confidential computing (enclaves, données in use)"
          ],
          narration: "Récapitulons. La PKI distribue la confiance grâce aux autorités de certification et d'enregistrement, avec une root CA gardée hors ligne. La signature numérique, un hash chiffré avec la clé privée, apporte intégrité, authentification et non-répudiation. La gestion des clés couvre tout le cycle de vie, avec l'escrow et le contrôle m parmi n pour la récupération, renforcés par le split knowledge et le dual control. Vous savez maintenant classer les attaques, du brute force au golden ticket en passant par les side-channels. Et vous êtes prêts pour l'avenir : la cryptographie post-quantique face à la menace harvest now decrypt later, le chiffrement homomorphe et le confidential computing pour protéger les données en cours d'utilisation."
        }
      ]
    },
    // ------------------------------------------------------------------
    // LEÇON 7 — Sécurité physique : sites, incendie, alimentation
    // ------------------------------------------------------------------
    {
      id: "d3-l7",
      titre: "Sécurité physique : sites, incendie et alimentation",
      duree: 11,
      slides: [
        {
          type: "intro",
          titre: "La sécurité commence par les murs",
          points: [
            "La vie et la sécurité des personnes priment TOUJOURS",
            "Plan de site fondé sur l'analyse de risque et le critical path analysis",
            "Défense en couches, du périmètre au serveur"
          ],
          narration: "Terminons le Domaine 3 par la sécurité physique. Gravez cette règle dans votre mémoire : la protection de la vie et de la sécurité des personnes prime toujours sur tout le reste, y compris sur la protection des actifs. Le plan de sécurisation d'une installation découle d'une évaluation des risques et d'une analyse du chemin critique, qui identifie les liens entre applications, processus et composants de support. L'ensemble s'organise en défense en couches, du périmètre extérieur jusqu'au serveur."
        },
        {
          type: "standard",
          titre: "Choix du site et conception de l'installation",
          points: [
            "Critères : risques naturels, visibilité, environnement, accessibilité des secours",
            "La sécurité prime sur le coût, l'emplacement et la taille",
            "Attention à la technology convergence : point de défaillance unique",
            "Site secondaire suffisamment éloigné pour ne pas subir le même sinistre"
          ],
          narration: "Le choix d'un site évalue le risque inhérent, comme la fréquence des catastrophes naturelles, la visibilité du bâtiment, la composition du voisinage et l'accessibilité aux ressources essentielles : eau, énergie, secours médicaux, pompiers et police. Le coût, l'emplacement et la taille comptent, mais la sécurité doit toujours primer. Méfiez-vous de la convergence technologique, cette tendance des systèmes à fusionner au fil du temps, créant des points de défaillance uniques et des cibles de grande valeur. Enfin, un site secondaire doit être assez éloigné du site principal pour ne pas être touché par le même sinistre."
        },
        {
          type: "schema",
          titre: "CPTED : prévenir le crime par l'architecture",
          points: [
            "Natural access control : guider subtilement les entrées et sorties",
            "Natural surveillance : maximiser les occasions d'être observé, zones bien éclairées",
            "Natural territorial reinforcement : créer un sentiment de communauté attentive",
            "L'entretien compte : un site négligé invite à l'intrusion"
          ],
          schema: { type: "grid", items: ["Natural access control", "Natural surveillance", "Territorial reinforcement", "Maintenance du site"] },
          narration: "Le crime prevention through environmental design, CPTED, est une approche architecturale qui utilise des dispositifs passifs pour réduire la criminalité. Trois principes le structurent. Le contrôle d'accès naturel guide subtilement les personnes vers des entrées évidentes et crée des zones de sécurité internes. La surveillance naturelle multiplie les occasions d'être observé : allées ouvertes, entrées dégagées, zones bien éclairées. Le renforcement territorial naturel crée un sentiment de communauté attentive et inclusive. Ajoutons l'entretien : un site en apparence négligé donne aux attaquants le sentiment qu'ils peuvent agir en toute impunité."
        },
        {
          type: "standard",
          titre: "Locaux techniques : du wiring closet au datacenter",
          points: [
            "Wiring closet / IDF : accès restreint, dans les zones privées du bâtiment",
            "Server room : cœur du bâtiment, ni rez-de-chaussée, ni dernier étage, ni sous-sol ; une seule entrée",
            "Datacenter : protections renforcées, gardes et mantraps ; mono ou multi-tenant",
            "Media storage et evidence storage : protégés comme des salles serveurs, chaîne de custody"
          ],
          narration: "Les locaux techniques suivent une gradation. Le wiring closet, ou IDF, est la plus petite salle abritant du matériel réseau : son accès doit être restreint et il doit se trouver dans les zones privées du bâtiment. La salle serveurs se place au cœur du bâtiment, jamais au rez-de-chaussée, au dernier étage ou au sous-sol, avec une entrée unique et une sortie de secours, et toutes les entrées journalisées. Le datacenter ajoute gardes et mantraps. Les installations de stockage de médias protègent les sauvegardes contre le vol et la récupération de données résiduelles, idéalement avec un bibliothécaire des médias et un processus d'entrée-sortie. Le stockage des preuves, lui, existe pour préserver la chaîne de custody, avec stockage isolé hors ligne, suivi d'activité et gestion des empreintes."
        },
        {
          type: "standard",
          titre: "Alimentation électrique",
          points: [
            "Échelle : surge protector → line conditioner → UPS → generator",
            "UPS double conversion : alimente en continu depuis la batterie ; line-interactive : batterie hors ligne en temps normal",
            "Fault/blackout : perte de courant ; sag/brownout : sous-tension ; spike/surge : surtension ; inrush : appel de courant initial",
            "Datacenter sur des circuits séparés, générateur de secours, tests réguliers du basculement"
          ],
          narration: "L'alimentation se protège par paliers : parasurtenseur, conditionneur de ligne, onduleur, puis générateur. L'UPS double conversion tire en permanence l'énergie de sa batterie, tandis que le line-interactive garde la batterie hors circuit en fonctionnement normal. Retenez le vocabulaire des incidents : le fault est une perte momentanée de courant et le blackout une coupure prolongée ; le sag est une sous-tension momentanée et le brownout une sous-tension prolongée ; le spike est une surtension momentanée et le surge une surtension prolongée ; l'inrush est l'appel de courant initial au branchement. Le datacenter doit être sur des circuits séparés des zones occupées, avec générateur de secours et tests réguliers du basculement.",
          astuce: "💡 Moyen mnémotechnique : momentané/prolongé — fault/blackout (perte), sag/brownout (sous-tension), spike/surge (surtension)."
        },
        {
          type: "standard",
          titre: "HVAC et environnement",
          points: [
            "Température des salles informatiques : 15 à 32 °C ; humidité entre 20 et 80 %",
            "Trop d'humidité : corrosion ; trop sec : électricité statique destructrice",
            "Gaines HVAC limitées aux zones contrôlées, systèmes séparés et redondants",
            "Eau et électricité ne font pas bon ménage : serveurs loin des canalisations"
          ],
          narration: "Le contrôle climatique protège les équipements. Les salles à dominante informatique se maintiennent entre quinze et trente-deux degrés Celsius, avec une humidité entre vingt et quatre-vingts pour cent, selon les repères de l'industrie établis par l'ASHRAE. Trop d'humidité provoque la corrosion ; un air trop sec favorise des décharges électrostatiques pouvant atteindre vingt mille volts, destructrices pour l'électronique. Les gaines de ventilation doivent être limitées aux zones contrôlées et les systèmes HVAC des salles informatiques doivent être séparés et redondants. Enfin, placez les salles serveurs loin de toute source ou canalisation d'eau, et prévoyez la coupure automatique de l'électricité avant tout déclenchement de sprinklers."
        },
        {
          type: "schema",
          titre: "Le feu : triangle, stades et détection",
          points: [
            "Fire triangle : fuel, heat, oxygen + réaction chimique — retirer un élément éteint le feu",
            "Stades : incipient (ionisation), smoke, flame, heat",
            "VESDA : détection très précoce de fumée par analyse de l'air",
            "Classes d'extincteurs : A combustibles, B liquides, C électrique, D métaux, K cuisine"
          ],
          schema: { type: "cycle", items: ["Fuel (combustible)", "Heat (chaleur)", "Oxygen (oxygène)", "Réaction chimique"] },
          narration: "Le triangle du feu réunit le combustible, la chaleur et l'oxygène autour de la réaction chimique de combustion : retirer un seul de ces éléments éteint le feu. L'eau supprime la chaleur, les poudres sèches étouffent le combustible, le dioxyde de carbone prive d'oxygène, et les substituts du halon perturbent la chimie de la combustion. Un incendie évolue en quatre stades : le stade incipient avec simple ionisation de l'air, le stade de fumée visible, le stade de flamme, puis le stade de chaleur intense. Les systèmes VESDA détectent la fumée très précocement en analysant l'air. Mémorisez les classes d'extincteurs : A pour les combustibles ordinaires, B pour les liquides, C pour l'électrique, D pour les métaux et K pour les huiles de cuisine."
        },
        {
          type: "standard",
          titre: "Systèmes d'extinction",
          points: [
            "Wet pipe : toujours rempli d'eau, décharge immédiate",
            "Dry pipe : gaz inerte comprimé, l'eau n'arrive qu'au déclenchement",
            "Pre-action : dry pipe à double détection — idéal pour les datacenters",
            "Deluge : gros volumes d'eau ; halon : efficace mais toxique et interdit"
          ],
          narration: "Quatre grands systèmes d'extinction à eau existent. Le wet pipe est toujours rempli d'eau et décharge immédiatement. Le dry pipe contient un gaz inerte comprimé, l'eau n'entrant dans les canalisations qu'au déclenchement, ce qui convient aux locaux exposés au gel. Le pre-action est une variante du dry pipe à détection et libération en deux étapes : il laisse le temps de réagir à une fausse alarme avant que l'eau n'arrive, ce qui en fait le choix privilégié pour les salles informatiques. Le deluge délivre de gros volumes d'eau par de larges canalisations. Quant au halon, il étouffait efficacement la combustion, mais il se dégrade en gaz toxiques à haute température et détruit la couche d'ozone : on utilise aujourd'hui ses substituts ou le dioxyde de carbone.",
          astuce: "💡 Conseil examen : pour un datacenter, la réponse attendue est presque toujours le système pre-action."
        },
        {
          type: "question",
          titre: "Contrôle de connaissance",
          q: "Quel système d'extinction est le PLUS approprié pour une salle serveurs, car il réduit le risque de décharge d'eau accidentelle ?",
          choix: ["Wet pipe", "Deluge", "Pre-action", "Soda acid"],
          reponse: 2,
          explication: "Le système pre-action utilise un mécanisme de détection et de libération en deux étapes : l'eau n'entre dans les canalisations qu'après une première détection, et n'est libérée qu'à la fusion des têtes de sprinkler. Cela laisse le temps de réagir aux fausses alarmes, protégeant les équipements électroniques. Wet pipe décharge immédiatement, deluge libère de gros volumes d'eau, et soda acid est un agent chimique, pas un système de canalisation adapté.",
          narration: "Une question incontournable sur la protection incendie des salles informatiques."
        },
        {
          type: "standard",
          titre: "Cycle de vie des systèmes d'information",
          points: [
            "Phases : besoins des parties prenantes, analyse des exigences, conception, développement, intégration, vérification et validation, déploiement, exploitation et maintenance, retrait",
            "Les contrôles de sécurité se prescrivent dès la phase de conception",
            "Le retrait inclut l'élimination sécurisée des données"
          ],
          narration: "Un dernier objectif du Domaine 3 : la gestion du cycle de vie des systèmes d'information, très proche du cycle de développement logiciel. Il commence par la compréhension des besoins des parties prenantes et l'analyse détaillée des exigences, se poursuit par la conception architecturale où les contrôles de sécurité sont prescrits pour traiter les risques identifiés, puis le développement, l'intégration, la vérification et la validation. Vient ensuite le déploiement en production, puis la longue phase d'exploitation et de maintenance : supervision, correctifs, gestion des changements, sauvegardes et tests de reprise. Enfin, le retrait clôt le cycle, avec l'élimination sécurisée du système et de ses données."
        },
        {
          type: "resume",
          titre: "Résumé de la leçon",
          points: [
            "La vie humaine prime toujours sur les actifs",
            "CPTED : access control, surveillance et renforcement territorial naturels",
            "Salle serveurs au cœur du bâtiment ; datacenter avec mantraps",
            "Alimentation : fault/blackout, sag/brownout, spike/surge ; UPS puis générateur",
            "Incendie : triangle du feu, classes A-K, pre-action pour les datacenters",
            "Cycle de vie : de l'analyse des besoins au retrait sécurisé"
          ],
          narration: "Concluons le Domaine 3. En sécurité physique, la vie humaine prime toujours. Le CPTED prévient le crime par l'architecture, les locaux techniques se protègent par couches successives, et l'alimentation électrique se sécurise du parasurtenseur au générateur. Face au feu, retirez un élément du triangle, choisissez la bonne classe d'extincteur et privilégiez le pre-action en salle informatique. Enfin, le cycle de vie des systèmes rappelle que la sécurité accompagne un système de sa conception jusqu'à son retrait. Vous avez maintenant toutes les cartes pour aborder les questions du domaine le plus technique de l'examen."
        }
      ]
    }
  ],
  quiz: [
    {
      q: "Dans le modèle Bell-LaPadula, quelle propriété interdit à un sujet de lire des données d'un niveau de classification supérieur au sien ?",
      choix: ["La star (*) property", "La simple security property", "La strong star property", "La discretionary security property"],
      reponse: 1,
      explication: "La simple security property énonce « no read up » : un sujet ne peut pas lire de données classées au-dessus de son niveau d'habilitation. La star property interdit d'écrire vers le bas (no write down). La strong star property limite lecture et écriture au propre niveau du sujet, et la discretionary security property utilise une matrice d'accès fondée sur le besoin d'en connaître.",
      difficulte: 1
    },
    {
      q: "Quel est l'objectif PRINCIPAL du modèle Biba ?",
      choix: ["Protéger la confidentialité des données classifiées", "Protéger l'intégrité des données", "Prévenir les conflits d'intérêts", "Garantir la disponibilité des systèmes"],
      reponse: 1,
      explication: "Biba est un modèle d'intégrité : no read down (ne pas lire des données de moindre intégrité) et no write up (ne pas écrire vers une intégrité supérieure). La confidentialité est l'objectif de Bell-LaPadula, la prévention des conflits d'intérêts celui de Brewer-Nash, et aucun de ces modèles formels ne traite la disponibilité.",
      difficulte: 1
    },
    {
      q: "Un cabinet de conseil souhaite empêcher qu'un consultant travaillant pour la banque A accède aux données de la banque B, sa concurrente. Quel modèle de sécurité répond le MIEUX à ce besoin ?",
      choix: ["Clark-Wilson", "Bell-LaPadula", "Brewer-Nash", "Graham-Denning"],
      reponse: 2,
      explication: "Brewer-Nash, surnommé « ethical wall », a été créé pour prévenir les conflits d'intérêts : les droits d'accès changent dynamiquement selon l'activité passée de l'utilisateur. Clark-Wilson protège l'intégrité via des programmes intermédiaires, Bell-LaPadula protège la confidentialité par niveaux de classification, et Graham-Denning traite la création et la suppression sûres de sujets et d'objets.",
      difficulte: 1
    },
    {
      q: "Dans le modèle Clark-Wilson, quel composant est le SEUL autorisé à manipuler les Constrained Data Items (CDI) ?",
      choix: ["Les utilisateurs authentifiés", "Les Transformation Procedures (TP)", "Les Integrity Verification Procedures (IVP)", "Les Unconstrained Data Items (UDI)"],
      reponse: 1,
      explication: "Les CDI ne peuvent être manipulés que par des Transformation Procedures (TP), qui garantissent des transactions bien formées. Les utilisateurs n'accèdent jamais directement aux CDI, c'est le principe du triplet sujet-programme-objet. Les IVP servent à auditer et vérifier la cohérence, pas à manipuler les données. Les UDI sont des données non protégées, accessibles directement.",
      difficulte: 2
    },
    {
      q: "Lors d'une évaluation Common Criteria, quel document décrit les prétentions de sécurité que le fournisseur a intégrées dans son produit ?",
      choix: ["Le Protection Profile (PP)", "Le Security Target (ST)", "La Target of Evaluation (TOE)", "Le Security Assurance Requirement (SAR)"],
      reponse: 1,
      explication: "Le Security Target (ST) spécifie les prétentions de sécurité du fournisseur pour sa TOE. Le Protection Profile (PP) décrit au contraire les besoins de sécurité du client (« je veux »). La TOE est le produit évalué lui-même, et les SAR décrivent comment la TOE doit être évaluée.",
      difficulte: 2
    },
    {
      q: "Quel niveau EAL des Common Criteria correspond à « méthodiquement conçu, testé et revu » ?",
      choix: ["EAL2", "EAL4", "EAL6", "EAL7"],
      reponse: 1,
      explication: "EAL4 correspond à « methodically designed, tested, and reviewed » ; c'est le niveau le plus élevé raisonnablement atteignable pour un produit commercial existant. EAL2 est « structurellement testé », EAL6 « semi-formellement vérifié, conçu et testé » et EAL7 « formellement vérifié, conçu et testé », réservé aux systèmes les plus critiques.",
      difficulte: 2
    },
    {
      q: "Un EAL7 signifie que le produit évalué est :",
      choix: ["Impossible à compromettre", "Formellement vérifié, conçu et testé", "Certifié pour un usage militaire uniquement", "Doté d'un chiffrement AES-256 obligatoire"],
      reponse: 1,
      explication: "EAL7 signifie « formally verified, designed, and tested » : la rigueur de l'ÉVALUATION est maximale. Attention au piège classique : un EAL mesure la rigueur de l'évaluation, pas une garantie d'invulnérabilité du produit. Rien ne le limite à un usage militaire et l'EAL n'impose aucun algorithme de chiffrement particulier.",
      difficulte: 3
    },
    {
      q: "Quel principe de conception affirme qu'aucun utilisateur, appareil ou système ne doit être considéré comme fiable par défaut, même à l'intérieur du réseau ?",
      choix: ["Defense in depth", "Trust but verify", "Zero Trust", "Least privilege"],
      reponse: 2,
      explication: "Le Zero Trust repose sur la devise « never trust, always verify » : chaque requête est authentifiée, autorisée et chiffrée avant tout accès, quelle que soit sa provenance. Trust but verify est justement l'approche traditionnelle (périmétrique) que Zero Trust remplace. Defense in depth empile des contrôles en série, et least privilege limite les privilèges accordés, mais aucun des deux ne définit la posture de non-confiance par défaut.",
      difficulte: 1
    },
    {
      q: "En cas d'incendie, les portes contrôlées d'un datacenter se déverrouillent automatiquement pour permettre l'évacuation. Quel principe est appliqué ?",
      choix: ["Fail-secure, car le datacenter reste protégé", "Fail-safe, car la protection des personnes prime", "Fail-closed, car la confidentialité est maintenue", "Secure defaults, car c'est la configuration d'usine"],
      reponse: 1,
      explication: "Dans le monde physique, fail-safe signifie que la défaillance protège les personnes : les portes s'ouvrent pour permettre l'évacuation, car la vie humaine prime toujours sur la protection des actifs. Fail-secure aurait maintenu les portes verrouillées pour protéger les équipements, ce qui est inacceptable quand des vies sont en jeu. Fail-closed est un concept numérique, et secure defaults concerne la configuration initiale.",
      difficulte: 2
    },
    {
      q: "Quelle est la fonction PRINCIPALE d'un Trusted Platform Module (TPM) ?",
      choix: ["Accélérer le processeur graphique", "Réaliser des opérations cryptographiques matérielles et protéger des clés", "Filtrer le trafic réseau entrant", "Sauvegarder automatiquement les fichiers système"],
      reponse: 1,
      explication: "Le TPM est une puce inviolable de la carte mère qui réalise des opérations cryptographiques (dont la génération de clés) et protège de petites quantités de données sensibles comme des clés et mots de passe. Il ne joue aucun rôle graphique, réseau ou de sauvegarde. C'est un prérequis de nombreuses solutions de chiffrement de disque.",
      difficulte: 1
    },
    {
      q: "Quelle différence essentielle distingue un HSM d'entreprise d'un TPM ?",
      choix: ["Le HSM ne peut pas générer de clés", "Le TPM est un dispositif réseau externe", "Le HSM est un cryptoprocesseur dédié, souvent un boîtier externe, tandis que le TPM est intégré à la carte mère", "Le TPM offre plus de puissance de calcul cryptographique que le HSM"],
      reponse: 2,
      explication: "Le TPM est une puce soudée à la carte mère d'une machine, alors que le HSM d'entreprise est un équipement dédié (boîtier ou carte) conçu pour gérer et stocker des clés à grande échelle et accélérer les opérations cryptographiques ; le TPM est d'ailleurs considéré comme un exemple de HSM. Les deux génèrent des clés, le TPM n'est pas un équipement réseau, et c'est le HSM dédié qui offre les meilleures performances.",
      difficulte: 2
    },
    {
      q: "Quelles sont les quatre propriétés du reference monitor résumées par l'acronyme NEAT ?",
      choix: [
        "Non-bypassable, Evaluable, Always invoked, Tamper-proof",
        "Networked, Encrypted, Authenticated, Trusted",
        "Non-repudiation, Encryption, Authorization, Tokenization",
        "Nominal, Efficient, Auditable, Transparent"
      ],
      reponse: 0,
      explication: "Le reference monitor doit être Non-bypassable (impossible à contourner), Evaluable (analysable et vérifiable), Always invoked (sollicité à chaque accès) et Tamper-proof (inviolable). Le security kernel en est l'implémentation. Les autres propositions sont des distracteurs plausibles mais ne correspondent pas au concept.",
      difficulte: 2
    },
    {
      q: "Un attaquant exploite une vulnérabilité de l'hyperviseur pour sortir de sa machine virtuelle et accéder à l'hôte. Comment s'appelle cette attaque, et quelle est la MEILLEURE mesure préventive complémentaire au patching ?",
      choix: [
        "VM sprawl ; chiffrer les disques virtuels",
        "VM escape ; héberger les systèmes très sensibles sur des machines physiques séparées",
        "Side-channel ; ajouter du bruit aux signaux",
        "VM escape ; désactiver la journalisation de l'hyperviseur"
      ],
      reponse: 1,
      explication: "Il s'agit d'un VM escape. Outre le maintien à jour de l'hyperviseur, la meilleure mesure est de conserver les systèmes et données hautement sensibles sur des machines physiques distinctes, afin qu'une évasion ne les expose pas. Le VM sprawl est la prolifération incontrôlée de VM (autre problème), le chiffrement des disques n'empêche pas l'évasion, et désactiver la journalisation aggraverait la situation.",
      difficulte: 2
    },
    {
      q: "Dans quel modèle de service cloud le fournisseur assure-t-il le MOINS de maintenance et de sécurité ?",
      choix: ["SaaS", "PaaS", "IaaS", "FaaS"],
      reponse: 2,
      explication: "En IaaS, le fournisseur ne livre que les ressources de base (serveurs, stockage, réseau) : le client installe et maintient lui-même les systèmes d'exploitation et les applications. En PaaS le fournisseur gère aussi la plateforme, en SaaS il gère la quasi-totalité, et le FaaS (serverless) est une sous-catégorie du PaaS où le fournisseur gère toute l'infrastructure d'exécution.",
      difficulte: 2
    },
    {
      q: "Votre organisation exploite un système SCADA reposant sur des protocoles propriétaires anciens qui ne peuvent pas être mis à jour. Quelle est la MEILLEURE mesure d'atténuation ?",
      choix: [
        "Remplacer immédiatement tout le système",
        "Segmenter le réseau pour isoler le système SCADA",
        "Installer un antivirus sur les automates",
        "Chiffrer les disques des postes de supervision"
      ],
      reponse: 1,
      explication: "Quand un système industriel ne peut être ni patché ni remplacé rapidement, la segmentation réseau est la mesure la plus efficace : elle isole le SCADA des réseaux exposés et limite drastiquement la surface d'attaque. Le remplacement immédiat est rarement réaliste ni économiquement justifiable. Les automates ne supportent généralement pas d'antivirus, et le chiffrement des disques ne protège pas les communications legacy vulnérables.",
      difficulte: 2
    },
    {
      q: "Quelle est la PREMIÈRE recommandation pour sécuriser des objets connectés (IoT) dans une entreprise ?",
      choix: [
        "Les déployer sur un réseau distinct et isolé",
        "Leur attribuer des adresses IP publiques pour la supervision",
        "Conserver les identifiants par défaut pour faciliter la maintenance",
        "Activer la gestion à distance via internet"
      ],
      reponse: 0,
      explication: "La mesure de référence est de placer les équipements IoT sur un réseau dédié, séparé et isolé du réseau de production. Les trois autres propositions sont des contre-exemples : exposer les IoT publiquement augmente la surface d'attaque, les identifiants par défaut sont l'une des premières causes de compromission, et la gestion à distance doit au contraire être désactivée.",
      difficulte: 1
    },
    {
      q: "Une base de données permet à un analyste sans habilitation de déduire des informations classifiées en combinant mentalement plusieurs données non sensibles. De quelle attaque s'agit-il ?",
      choix: ["Aggregation", "Inference", "SQL injection", "Pass the hash"],
      reponse: 1,
      explication: "L'inférence repose sur la capacité de déduction humaine : combiner plusieurs informations non sensibles pour en déduire une information d'un niveau de classification supérieur. L'agrégation, elle, utilise les fonctions mathématiques de la base (SUM, COUNT...) pour combiner des enregistrements. L'injection SQL est une attaque applicative, et le pass the hash une attaque d'authentification.",
      difficulte: 2
    },
    {
      q: "Combien de clés symétriques sont nécessaires pour que 12 personnes communiquent toutes deux à deux de manière sécurisée ?",
      choix: ["12", "24", "66", "132"],
      reponse: 2,
      explication: "La formule est n(n-1)/2, soit 12 × 11 / 2 = 66 clés. C'est ce problème de croissance quadratique qui rend le symétrique difficile à gérer à grande échelle : la cryptographie asymétrique le résout avec seulement une paire de clés par personne.",
      difficulte: 2
    },
    {
      q: "Quelles sont les caractéristiques de l'algorithme AES ?",
      choix: [
        "Clés de 64, 128 ou 192 bits et blocs de 64 bits",
        "Clés de 128, 192 ou 256 bits et blocs fixes de 128 bits",
        "Clé de 56 bits et blocs de 64 bits",
        "Clés de 1024 à 4096 bits, chiffrement asymétrique"
      ],
      reponse: 1,
      explication: "AES (algorithme Rijndael) utilise des clés de 128, 192 ou 256 bits avec une taille de bloc fixe de 128 bits ; c'est un chiffrement symétrique, standard du gouvernement américain. La clé de 56 bits sur blocs de 64 bits décrit DES, obsolète. Les clés de 1024 à 4096 bits évoquent RSA, qui est asymétrique.",
      difficulte: 1
    },
    {
      q: "Sur quel problème mathématique difficile repose la sécurité de l'algorithme RSA ?",
      choix: [
        "Le logarithme discret sur courbes elliptiques",
        "La factorisation du produit de grands nombres premiers",
        "Le problème du sac à dos",
        "Les réseaux euclidiens (lattices)"
      ],
      reponse: 1,
      explication: "RSA repose sur la difficulté de factoriser le produit de deux grands nombres premiers : à l'examen, « factoring attack » doit immédiatement évoquer RSA. Le logarithme discret elliptique fonde ECC, et les lattices fondent la cryptographie post-quantique. Le problème du sac à dos a servi à des cryptosystèmes historiques cassés depuis.",
      difficulte: 1
    },
    {
      q: "Pourquoi choisir ECC plutôt que RSA pour des équipements mobiles à ressources limitées ?",
      choix: [
        "ECC est un algorithme symétrique, donc plus rapide",
        "Une clé ECC de 256 bits offre une sécurité comparable à une clé RSA de 3072 bits",
        "ECC ne nécessite aucune gestion de clés",
        "RSA est interdit sur les mobiles par le NIST"
      ],
      reponse: 1,
      explication: "ECC repose sur le logarithme discret elliptique et atteint un niveau de sécurité équivalent avec des clés beaucoup plus courtes : 256 bits ECC équivalent environ à 3072 bits RSA. Des clés plus courtes signifient moins de calcul, de mémoire et d'énergie, un atout décisif sur mobile. ECC reste asymétrique, exige une gestion de clés, et le NIST n'interdit pas RSA sur mobile.",
      difficulte: 2
    },
    {
      q: "Alice veut envoyer un message confidentiel à Bob en utilisant la cryptographie asymétrique. Quelle clé doit-elle utiliser pour chiffrer ?",
      choix: ["Sa propre clé privée", "Sa propre clé publique", "La clé publique de Bob", "La clé privée de Bob"],
      reponse: 2,
      explication: "Pour la confidentialité, on chiffre avec la clé publique du destinataire : seul Bob, détenteur de la clé privée correspondante, pourra déchiffrer. Chiffrer avec sa propre clé privée correspond à une signature (authentification, pas confidentialité). Alice ne possède jamais la clé privée de Bob, et sa propre clé publique ne permettrait qu'à elle-même... de ne rien faire d'utile.",
      difficulte: 1
    },
    {
      q: "Quelle séquence décrit correctement la création d'une signature numérique ?",
      choix: [
        "Chiffrer le message avec la clé publique du destinataire, puis le hacher",
        "Hacher le message, puis chiffrer le digest avec la clé privée de l'émetteur",
        "Hacher le message, puis chiffrer le digest avec la clé publique de l'émetteur",
        "Chiffrer le message avec une clé de session symétrique, puis signer la clé"
      ],
      reponse: 1,
      explication: "Signer consiste à générer le digest du message via une fonction de hachage, puis à chiffrer ce digest avec sa propre clé privée. Le destinataire vérifie en déchiffrant avec la clé publique de l'émetteur et en comparant les digests. La signature garantit intégrité, authentification et non-répudiation, mais pas la confidentialité. Chiffrer avec la clé publique de l'émetteur ne permettrait pas la vérification par des tiers.",
      difficulte: 2
    },
    {
      q: "Que garantit une signature numérique valide ? (Choisissez la MEILLEURE réponse)",
      choix: [
        "La confidentialité et l'intégrité du message",
        "L'intégrité, l'authentification et la non-répudiation",
        "La confidentialité et la disponibilité",
        "L'anonymat de l'expéditeur"
      ],
      reponse: 1,
      explication: "La signature numérique assure que le message provient bien de l'émetteur revendiqué (authentification), qu'il n'a pas été modifié en transit (intégrité) et que l'émetteur ne peut pas nier l'avoir envoyé (non-répudiation). Elle ne chiffre pas le message : la confidentialité exige un chiffrement séparé. Elle identifie l'expéditeur, c'est l'inverse de l'anonymat.",
      difficulte: 1
    },
    {
      q: "Pourquoi le mode ECB (Electronic Code Book) est-il considéré comme le plus faible des modes de chiffrement par blocs ?",
      choix: [
        "Il est trop lent pour un usage en production",
        "Des blocs de plaintext identiques produisent des blocs de ciphertext identiques",
        "Il exige un vecteur d'initialisation difficile à générer",
        "Il ne fonctionne qu'avec des clés de 56 bits"
      ],
      reponse: 1,
      explication: "En ECB, chaque bloc est chiffré indépendamment et de la même manière : tout motif répété du plaintext se retrouve dans le ciphertext, révélant la structure des données. ECB est au contraire rapide et parallélisable, n'utilise justement pas d'IV (c'est une partie du problème), et n'est pas limité à des clés de 56 bits.",
      difficulte: 2
    },
    {
      q: "Quel mode de chiffrement fournit à la fois la confidentialité ET l'intégrité des données ?",
      choix: ["ECB", "CBC", "CTR", "GCM"],
      reponse: 3,
      explication: "GCM (Galois/Counter Mode) combine le mode compteur avec l'authentification de Galois : c'est un mode de chiffrement authentifié qui fournit confidentialité et intégrité, reconnu par le NIST. ECB et CBC ne fournissent que la confidentialité (CBC étant en outre vulnérable à POODLE), et CTR est rapide et parallélisable mais dépourvu d'intégrité.",
      difficulte: 2
    },
    {
      q: "Quel principe énonce qu'un cryptosystème doit rester sûr même si tout, sauf la clé, est connu publiquement ?",
      choix: ["Le principe de Kerckhoff", "La loi de Moore", "Le work factor", "Le principe de Locard"],
      reponse: 0,
      explication: "Le principe de Kerckhoff affirme que la sécurité doit reposer uniquement sur le secret de la clé, jamais sur celui de l'algorithme — la « sécurité par l'obscurité » est une illusion. La loi de Moore concerne le doublement de la puissance des processeurs, le work factor mesure l'effort nécessaire pour casser un système, et le principe de Locard appartient à la criminalistique.",
      difficulte: 1
    },
    {
      q: "Quelles conditions rendent un one-time pad théoriquement incassable ? (MEILLEURE réponse)",
      choix: [
        "Clé de 256 bits minimum, renouvelée chaque mois",
        "Clé vraiment aléatoire, au moins aussi longue que le message, utilisée une seule fois et protégée physiquement",
        "Clé dérivée d'une phrase de passe robuste avec PBKDF2",
        "Clé partagée via Diffie-Hellman et stockée dans un TPM"
      ],
      reponse: 1,
      explication: "Le one-time pad est le seul chiffre parfaitement sûr, mais uniquement si quatre conditions sont réunies : génération vraiment aléatoire, longueur au moins égale au message, usage strictement unique, et protection physique des pads. Les autres réponses décrivent de bonnes pratiques modernes, mais ne satisfont pas les conditions théoriques du one-time pad (clé plus courte que le message, réutilisation, etc.).",
      difficulte: 2
    },
    {
      q: "Quelle mesure protège le MIEUX les mots de passe stockés contre les attaques par rainbow tables ?",
      choix: ["Chiffrer la base avec AES", "Ajouter un salt unique avant hachage", "Doubler la longueur du hash", "Utiliser le mode CBC"],
      reponse: 1,
      explication: "Le salting ajoute une valeur aléatoire unique à chaque mot de passe avant hachage : les tables précalculées deviennent inutilisables puisque le même mot de passe produit des hashes différents. Le chiffrement de la base déplace le problème vers la clé, la longueur du hash ne neutralise pas la précomputation, et CBC est un mode de chiffrement sans rapport avec le stockage de mots de passe. On complète le salting par du key stretching (bcrypt, PBKDF2, Argon2).",
      difficulte: 1
    },
    {
      q: "L'attaque meet-in-the-middle a démontré la faiblesse de quel schéma cryptographique ?",
      choix: ["AES-256", "Le double DES (2DES)", "RSA-2048", "ChaCha20"],
      reponse: 1,
      explication: "Le meet-in-the-middle est une attaque de type known plaintext qui mène deux recherches simultanées — chiffrement du plaintext et déchiffrement du ciphertext — pour retrouver les clés. Elle a réduit la sécurité effective du double DES à peine au-dessus de celle du DES simple, ce qui explique le passage direct au triple DES. AES, RSA et ChaCha20 ne sont pas concernés par cette construction en double chiffrement.",
      difficulte: 3
    },
    {
      q: "Un attaquant a obtenu le hash du compte de service KRBTGT d'un domaine Active Directory. Quelle est la conséquence la PLUS grave ?",
      choix: [
        "Il peut lire les e-mails de l'administrateur",
        "Il peut créer des tickets Kerberos à volonté : c'est un golden ticket",
        "Il peut uniquement usurper un compte de service applicatif",
        "Il peut désactiver l'antivirus des postes clients"
      ],
      reponse: 1,
      explication: "Le hash du compte KRBTGT permet de forger des tickets Kerberos à volonté dans tout l'Active Directory : c'est le golden ticket, qui confère un contrôle quasi total et durable du domaine. L'usurpation d'un seul compte de service correspond au silver ticket (hash d'un compte de service ordinaire). Les deux autres réponses sous-estiment gravement l'impact.",
      difficulte: 3
    },
    {
      q: "Quelle contre-mesure est la PLUS efficace contre les attaques par timing sur une implémentation cryptographique ?",
      choix: [
        "Augmenter la longueur des clés",
        "Exécuter les opérations sensibles en temps constant",
        "Changer d'algorithme tous les mois",
        "Chiffrer les journaux d'exécution"
      ],
      reponse: 1,
      explication: "L'attaque par timing exploite les variations de durée des opérations cryptographiques pour en déduire des secrets. La parade directe est d'assurer une exécution en temps constant (ou d'ajouter des délais aléatoires) afin que la durée ne dépende plus des données secrètes. La longueur de clé n'empêche pas la fuite par canal auxiliaire, la rotation d'algorithme est irréaliste, et chiffrer les journaux ne masque pas le temps d'exécution observable.",
      difficulte: 3
    },
    {
      q: "Que désigne la menace « Harvest Now, Decrypt Later » ?",
      choix: [
        "Le vol de clés dans les sauvegardes anciennes",
        "L'interception et le stockage de données chiffrées aujourd'hui, en vue de les déchiffrer avec un ordinateur quantique demain",
        "La collecte de hashes pour des attaques pass the hash différées",
        "L'archivage légal des communications par les opérateurs"
      ],
      reponse: 1,
      explication: "Harvest Now, Decrypt Later désigne des adversaires qui interceptent et stockent dès maintenant des données chiffrées, en pariant que l'informatique quantique leur permettra de les déchiffrer à l'avenir. C'est pourquoi les données à longue durée de sensibilité doivent migrer sans attendre vers des algorithmes post-quantiques comme la cryptographie lattice-based. Les autres réponses ne décrivent pas ce concept.",
      difficulte: 2
    },
    {
      q: "Quel composant d'une PKI est chargé de VÉRIFIER l'identité du demandeur avant l'émission d'un certificat ?",
      choix: ["La Certification Authority (CA)", "La Registration Authority (RA)", "Le certificate practice statement (CPS)", "Le serveur OCSP"],
      reponse: 1,
      explication: "La Registration Authority (RA) vérifie l'identité de l'utilisateur ou de l'équipement qui demande un certificat ; la CA émet ensuite le certificat liant l'identité à la clé publique. Le CPS documente les pratiques de sécurité de la PKI, et OCSP sert à vérifier le statut de révocation d'un certificat déjà émis.",
      difficulte: 2
    },
    {
      q: "Votre organisation applique un contrôle « m of n » pour la récupération des clés de chiffrement. Qu'est-ce que cela signifie ?",
      choix: [
        "m administrateurs détiennent chacun une copie complète de la clé",
        "Sur n agents de récupération désignés, m d'entre eux au minimum doivent coopérer pour reconstituer une clé",
        "Les clés sont fragmentées en n morceaux stockés dans m pays",
        "Chaque clé est valable m mois sur une durée de vie de n mois"
      ],
      reponse: 1,
      explication: "Le contrôle m of n désigne n agents de récupération, dont un sous-ensemble de m est requis pour récupérer une clé : aucune personne seule ne peut le faire, ce qui applique la séparation des tâches au key escrow. Les autres réponses décrivent des dispositifs différents ou inventés.",
      difficulte: 2
    },
    {
      q: "Selon les principes CPTED, quel aménagement relève de la « natural surveillance » ?",
      choix: [
        "Une clôture barbelée de trois mètres",
        "Des allées ouvertes et bien éclairées autour des entrées",
        "Un badge obligatoire pour entrer dans le bâtiment",
        "Une salle serveurs située au cœur du bâtiment"
      ],
      reponse: 1,
      explication: "La natural surveillance vise à rendre les criminels mal à l'aise en multipliant les occasions d'être observés : allées et escaliers ouverts, zones dégagées et bien éclairées autour des entrées. La clôture est un contrôle physique actif (pas un aménagement « naturel » CPTED), le badge est un contrôle technique d'accès, et l'emplacement de la salle serveurs relève de la conception des locaux techniques.",
      difficulte: 2
    },
    {
      q: "Quel terme désigne une sous-tension PROLONGÉE de l'alimentation électrique ?",
      choix: ["Sag", "Brownout", "Spike", "Inrush"],
      reponse: 1,
      explication: "Le brownout est une sous-tension prolongée, tandis que le sag (ou dip) est une sous-tension momentanée. Le spike est une surtension momentanée (le surge étant sa version prolongée), et l'inrush est l'appel de courant initial lors du branchement à une source d'alimentation.",
      difficulte: 2
    },
    {
      q: "Lors de la conception d'un système d'extinction d'incendie pour un centre de données, quelle doit être la priorité ABSOLUE ?",
      choix: [
        "Minimiser les dégâts sur les serveurs",
        "La protection de la vie des personnes",
        "La reprise rapide de l'activité",
        "Le coût total de possession du système"
      ],
      reponse: 1,
      explication: "La protection des personnes est toujours l'objectif prioritaire de tout système de sécurité ou de protection : c'est un réflexe d'examen à ancrer définitivement. La protection des équipements, la continuité d'activité et le coût sont des considérations légitimes, mais toujours secondaires par rapport à la vie humaine.",
      difficulte: 1
    },
    {
      q: "Un extincteur de classe C est conçu pour quel type de feu ?",
      choix: ["Combustibles ordinaires (bois, papier)", "Liquides inflammables", "Feux d'origine électrique", "Métaux combustibles"],
      reponse: 2,
      explication: "La classe C couvre les feux d'origine électrique. La classe A concerne les combustibles ordinaires, la classe B les liquides inflammables, la classe D les métaux, et la classe K les huiles et graisses de cuisine. Pour une salle informatique, on pense classe C et agents non conducteurs comme le CO2.",
      difficulte: 1
    },
    {
      q: "Pourquoi le halon n'est-il plus utilisé comme agent d'extinction dans les installations modernes ?",
      choix: [
        "Il est inefficace contre les feux électriques",
        "Il se dégrade en gaz toxiques à haute température et nuit à l'environnement",
        "Il endommage les équipements par résidu de poudre",
        "Il est trop coûteux à stocker sous pression"
      ],
      reponse: 1,
      explication: "Le halon interrompt efficacement la réaction chimique de combustion, mais il se dégrade en gaz toxiques vers 900 degrés Fahrenheit et détruit la couche d'ozone, d'où son abandon au profit de substituts et du CO2. Il était justement apprécié pour les feux électriques et ne laisse pas de résidu ; le coût n'est pas la raison principale de son interdiction.",
      difficulte: 2
    },
    {
      q: "Où une salle serveurs devrait-elle idéalement être située dans un bâtiment ?",
      choix: [
        "Au rez-de-chaussée, pour faciliter les livraisons d'équipements",
        "Au dernier étage, loin des intrusions",
        "Au cœur du bâtiment, ni rez-de-chaussée, ni dernier étage, ni sous-sol",
        "Au sous-sol, à température naturellement fraîche"
      ],
      reponse: 2,
      explication: "La salle serveurs se place au cœur du bâtiment : le rez-de-chaussée est exposé aux intrusions et véhicules, le dernier étage aux dégâts de toiture et à la foudre, et le sous-sol aux inondations. Elle doit aussi avoir une entrée unique contrôlée (plus une sortie de secours) et des accès journalisés.",
      difficulte: 2
    },
    {
      q: "Quel est le rôle d'un vecteur d'initialisation (IV) dans un chiffrement par blocs comme le mode CBC ?",
      choix: [
        "Allonger la clé de chiffrement",
        "Introduire de l'aléa pour que des messages identiques produisent des ciphertexts différents",
        "Compresser le message avant chiffrement",
        "Authentifier l'émetteur du message"
      ],
      reponse: 1,
      explication: "L'IV est une valeur aléatoire (nonce) combinée par XOR au premier bloc : il élimine la prédictibilité et garantit que deux messages identiques chiffrés avec la même clé produisent des ciphertexts différents. Il n'allonge pas la clé, ne compresse rien et n'authentifie personne — l'authentification exige un MAC ou un mode authentifié comme GCM.",
      difficulte: 2
    },
    {
      q: "Un employé du support technique peut créer des comptes utilisateurs ET valider leurs droits d'accès. Quel principe de conception sécurisée est violé ?",
      choix: ["Defense in depth", "Separation of duties", "Secure defaults", "Keep it simple"],
      reponse: 1,
      explication: "La séparation des tâches exige qu'aucune personne seule ne contrôle une fonction critique de bout en bout : créer les comptes et valider leurs droits doit être confié à des personnes différentes, sans quoi la fraude devient possible sans complicité. Les autres principes (contrôles en couches, configuration sûre par défaut, simplicité) ne sont pas directement concernés ici.",
      difficulte: 1
    },
    {
      q: "Quelle affirmation à propos de la conteneurisation est EXACTE ?",
      choix: [
        "Chaque conteneur embarque son propre système d'exploitation complet",
        "Les conteneurs partagent le noyau de l'hôte, offrant plus de densité mais moins d'isolation que les VM",
        "Les conteneurs sont immunisés contre les vulnérabilités des images",
        "La conteneurisation supprime le besoin de patcher l'hôte"
      ],
      reponse: 1,
      explication: "La conteneurisation élimine la duplication des éléments d'OS : les conteneurs partagent le noyau de l'hôte, ce qui permet une densité 10 à 100 fois supérieure aux VM, au prix d'une isolation moindre. C'est la VM qui embarque un OS complet. Les images de conteneurs doivent être scannées et signées, et l'hôte doit toujours être durci et patché.",
      difficulte: 2
    },
    {
      q: "Quelle est la caractéristique distinctive de la Quantum Key Distribution (QKD) ?",
      choix: [
        "Elle utilise des clés de 4096 bits minimum",
        "Toute tentative d'écoute perturbe l'état quantique mesuré et devient détectable",
        "Elle chiffre les données avec des qubits au lieu de bits",
        "Elle remplace les certificats numériques par des jetons matériels"
      ],
      reponse: 1,
      explication: "La QKD exploite la mécanique quantique pour échanger des clés : selon le principe d'incertitude de Heisenberg, mesurer un état quantique le perturbe intrinsèquement, ce qui rend toute interception détectable — on parle de sécurité inconditionnelle. Elle distribue des clés, elle ne chiffre pas les données elles-mêmes, et n'a rien à voir avec la taille des clés classiques ni avec les certificats.",
      difficulte: 3
    },
    {
      q: "Sur un système gouvernemental, tous les utilisateurs possèdent une clearance valide pour l'ensemble des informations traitées, mais leur approbation d'accès et leur need-to-know sont limités aux seuls compartiments dont ils ont besoin. Dans quel mode de sécurité ce système fonctionne-t-il ?",
      choix: ["Dedicated", "System high", "Compartmented", "Multilevel"],
      reponse: 2,
      explication: "C'est la définition exacte du mode compartmented : clearance pour TOUTES les informations, mais approbation d'accès et need-to-know par compartiment. En mode dedicated, les utilisateurs ont clearance, approbation et need-to-know pour tout. En system high, seul le need-to-know est partiel (l'approbation couvre tout). En multilevel, certains utilisateurs n'ont pas la clearance pour toutes les informations et c'est le système qui applique la séparation des niveaux.",
      difficulte: 2
    },
    {
      q: "Dans un système fonctionnant en mode multilevel, quelle affirmation est EXACTE ?",
      choix: [
        "Tous les utilisateurs possèdent une clearance pour toutes les informations du système",
        "Certains utilisateurs n'ont pas de clearance pour toutes les informations : le système lui-même doit séparer les niveaux et arbitrer chaque accès",
        "Le need-to-know est identique pour tous les utilisateurs",
        "Le système ne peut traiter qu'un seul niveau de classification à la fois"
      ],
      reponse: 1,
      explication: "Le mode multilevel (ou controlled security mode) permet à des utilisateurs de niveaux d'habilitation différents d'utiliser un système traitant plusieurs niveaux de classification : la trusted computing base doit alors appliquer elle-même le contrôle d'accès entre niveaux. C'est le mode le plus exigeant pour le SYSTÈME. Les trois autres affirmations décrivent au contraire les modes dedicated, system high ou un système mono-niveau.",
      difficulte: 3
    },
    {
      q: "Dans le référentiel historique TCSEC (Orange Book), que représente le niveau A1 ?",
      choix: [
        "Une protection minimale, le système a échoué à l'évaluation",
        "Une protection discrétionnaire avec journalisation",
        "Une conception formellement vérifiée (verified design), le niveau le plus élevé",
        "Un chiffrement obligatoire de tous les supports"
      ],
      reponse: 2,
      explication: "Dans le TCSEC, l'échelle va de D (protection minimale, évaluation échouée) à A1 (verified design, conception formellement vérifiée), en passant par C1/C2 (protection discrétionnaire) et B1/B2/B3 (protection obligatoire fondée sur les labels). A1 correspond approximativement à EAL7 dans les Common Criteria qui ont remplacé le TCSEC et l'ITSEC. Le TCSEC n'imposait pas d'algorithme de chiffrement et n'évaluait que la confidentialité.",
      difficulte: 2
    },
    {
      q: "Un hôpital souhaite confier l'analyse statistique de données médicales à un fournisseur cloud SANS jamais lui révéler les données en clair, même pendant les calculs. Quelle technologie répond DIRECTEMENT à ce besoin ?",
      choix: [
        "Le chiffrement TLS de bout en bout",
        "Le chiffrement homomorphe (homomorphic encryption)",
        "Le hachage avec salt des enregistrements",
        "La tokenisation des identifiants patients"
      ],
      reponse: 1,
      explication: "Le chiffrement homomorphe permet d'effectuer des calculs directement sur des données chiffrées : le fournisseur ne voit jamais le plaintext, et le résultat déchiffré est identique au calcul sur les données en clair. TLS ne protège les données qu'en transit, elles seraient déchiffrées pour le calcul. Le hachage est à sens unique et interdirait les analyses, et la tokenisation ne protège que les identifiants, pas les données analysées. Le confidential computing (enclaves) serait une alternative matérielle, mais il n'est pas proposé ici.",
      difficulte: 2
    },
    {
      q: "Pour ouvrir le coffre contenant les composants de la clé maîtresse d'un HSM, la politique exige que deux responsables soient présents simultanément, chacun ne connaissant que la moitié de la combinaison. Quels principes sont appliqués ?",
      choix: [
        "Key clustering et key stretching",
        "Split knowledge (connaissance fragmentée) et dual control (action à deux)",
        "Key escrow et cryptographic erase",
        "Zero Trust et least privilege"
      ],
      reponse: 1,
      explication: "Chaque responsable ne connaît que la moitié de la combinaison : c'est le split knowledge (personne ne SAIT tout). La présence simultanée des deux est exigée pour agir : c'est le dual control (personne ne FAIT rien seul). Le contrôle m of n généralise ces principes. Key clustering est une faiblesse cryptographique, key stretching ralentit le hachage, key escrow confie les clés à un tiers, et Zero Trust/least privilege sont des principes de conception qui ne décrivent pas ce mécanisme précis.",
      difficulte: 2
    }
  ],
  flashcards: [
    { recto: "Zero Trust", verso: "Modèle de sécurité qui n'accorde aucune confiance implicite : chaque requête est authentifiée, autorisée et chiffrée avant l'accès. Devise : « never trust, always verify » ; posture « assume breach »." },
    { recto: "Defense in Depth", verso: "Utilisation de plusieurs contrôles en série (couches successives) afin que la défaillance d'un seul contrôle n'expose ni les systèmes ni les données." },
    { recto: "Fail-safe vs Fail-secure (physique)", verso: "Fail-safe : la défaillance protège les PERSONNES (les portes s'ouvrent). Fail-secure : la défaillance protège les ACTIFS (les portes restent verrouillées). La vie humaine prime toujours." },
    { recto: "Privacy by Design (PbD)", verso: "Intégration de la protection de la vie privée dès la conception : proactif, privé par défaut, intégré, positive-sum, protection de bout en bout, transparent, centré sur l'utilisateur (7 principes)." },
    { recto: "Bell-LaPadula", verso: "Modèle de CONFIDENTIALITÉ (1973). Simple property : no read up. Star property : no write down. Ne traite pas les canaux cachés." },
    { recto: "Biba", verso: "Modèle d'INTÉGRITÉ (1977), inverse de Bell-LaPadula. Simple integrity : no read down. Star integrity : no write up. Invocation property : pas d'appel vers une intégrité supérieure." },
    { recto: "Clark-Wilson", verso: "Modèle d'intégrité fondé sur le triplet sujet-programme-objet : les CDI ne sont manipulés que par des Transformation Procedures (TP), auditées par des IVP. Impose des transactions bien formées et la séparation des tâches." },
    { recto: "Brewer-Nash", verso: "Modèle « ethical wall » qui prévient les conflits d'intérêts : les droits d'accès changent dynamiquement selon l'activité passée de l'utilisateur (ex. cabinet servant deux concurrents)." },
    { recto: "TOE / PP / ST (Common Criteria)", verso: "TOE : Target of Evaluation, le produit évalué. PP : Protection Profile, les besoins du client (« je veux »). ST : Security Target, les prétentions de sécurité du fournisseur." },
    { recto: "EAL (Evaluation Assurance Level)", verso: "Échelle 1 à 7 mesurant la rigueur de l'ÉVALUATION Common Criteria : EAL1 testé fonctionnellement → EAL4 méthodiquement conçu, testé et revu → EAL7 formellement vérifié, conçu et testé." },
    { recto: "Reference Monitor (NEAT)", verso: "Concept théorique contrôlant chaque accès sujet-objet. Propriétés NEAT : Non-bypassable, Evaluable, Always invoked, Tamper-proof. Implémenté par le security kernel." },
    { recto: "TPM (Trusted Platform Module)", verso: "Puce cryptographique inviolable de la carte mère : opérations cryptographiques matérielles, génération et protection de clés, remote attestation (hash de la configuration système). Exemple de HSM intégré." },
    { recto: "HSM (Hardware Security Module)", verso: "Cryptoprocesseur dédié servant à gérer et stocker les clés numériques, accélérer les opérations cryptographiques et les signatures, et renforcer l'authentification." },
    { recto: "VM Escape", verso: "Attaque exploitant une faille de l'hyperviseur pour sortir d'une VM et atteindre l'hôte. Mitigations : patcher l'hyperviseur, isoler les systèmes très sensibles sur des machines physiques séparées." },
    { recto: "Cloud Shared Responsibility Model", verso: "Le CSP sécurise LE cloud (infrastructure), le client sécurise ce qui est DANS le cloud (données, identités, configurations). En IaaS le client gère le plus ; en SaaS, le moins." },
    { recto: "SCADA / ICS", verso: "Systèmes de contrôle industriel (operational technology) : SCADA supervise des installations distribuées, DCS pilote une usine, PLC est un automate. Mitigation clé : segmentation réseau + patches approuvés par le vendeur." },
    { recto: "Symétrique vs Asymétrique", verso: "Symétrique : une clé partagée, rapide, chiffrement de masse, confidentialité seule, n(n-1)/2 clés. Asymétrique : paire publique/privée, plus lent, résout l'échange de clés, apporte authentification et non-répudiation." },
    { recto: "Formule des clés symétriques", verso: "n(n-1)/2 clés pour connecter n participants deux à deux. Exemples : 10 personnes → 45 clés ; 20 personnes → 190 clés ; 100 personnes → 4950 clés." },
    { recto: "AES (Rijndael)", verso: "Standard symétrique du gouvernement américain : clés de 128, 192 ou 256 bits, blocs fixes de 128 bits. Remplace DES (insécurisé) ; 3DES déprécié par le NIST en 2023." },
    { recto: "RSA vs ECC", verso: "RSA : repose sur la factorisation de grands nombres premiers (« factoring attack » = RSA). ECC : logarithme discret elliptique ; 256 bits ECC ≈ 3072 bits RSA, idéal pour les appareils contraints." },
    { recto: "Mode GCM", verso: "Galois/Counter Mode : mode de chiffrement authentifié combinant CTR et authentification de Galois. Fournit confidentialité ET intégrité ; très rapide, reconnu par le NIST." },
    { recto: "Hash / Collision", verso: "Fonction à sens unique produisant une empreinte de taille fixe (digest). Collision : deux entrées différentes donnent le même hash — signe de faiblesse de l'algorithme." },
    { recto: "Salting vs Key stretching", verso: "Salting : aléa unique ajouté avant hachage, neutralise les rainbow tables. Key stretching : rend le hachage volontairement lent (PBKDF2, bcrypt, scrypt, Argon2) pour freiner le brute force." },
    { recto: "Signature numérique", verso: "Hash du message chiffré avec la clé PRIVÉE de l'émetteur ; vérification avec sa clé publique. Garantit intégrité, authentification, non-répudiation — pas la confidentialité. FIPS 186-5 : RSA, ECDSA, EdDSA." },
    { recto: "PKI : CA et RA", verso: "La Certification Authority émet les certificats liant identité et clé publique ; la Registration Authority vérifie l'identité du demandeur. Root CA hors ligne, CA intermédiaires émettrices ; la PKI publie la révocation." },
    { recto: "Key escrow / m of n", verso: "Key escrow : garde des clés par un tiers de confiance pour récupération. Contrôle m of n : sur n agents de récupération désignés, m minimum doivent coopérer — séparation des tâches appliquée aux clés." },
    { recto: "Kerckhoff's Principle", verso: "Un cryptosystème doit rester sûr même si tout est connu publiquement, sauf la clé. La sécurité repose sur le secret de la clé, jamais sur celui de l'algorithme." },
    { recto: "Side-channel / Timing attack", verso: "Attaques exploitant les traces physiques du calcul : consommation électrique, émissions électromagnétiques (TEMPEST), temps d'exécution. Parade au timing : exécution en temps constant ou délais aléatoires." },
    { recto: "Golden ticket vs Silver ticket", verso: "Silver ticket : hash d'un compte de service → ticket TGS pour CE service. Golden ticket : hash du compte KRBTGT → tickets Kerberos à volonté, contrôle quasi total de l'Active Directory." },
    { recto: "Post-Quantum Cryptography / HNDL", verso: "PQC : algorithmes classiques résistants au quantique (ex. lattice-based). Menace « Harvest Now, Decrypt Later » : intercepter et stocker aujourd'hui des données chiffrées pour les déchiffrer demain avec un ordinateur quantique." },
    { recto: "CPTED", verso: "Crime Prevention Through Environmental Design : réduire le crime par l'architecture passive. Trois principes : natural access control, natural surveillance, natural territorial reinforcement." },
    { recto: "Incidents électriques", verso: "Fault : perte momentanée ; blackout : coupure prolongée. Sag : sous-tension momentanée ; brownout : prolongée. Spike : surtension momentanée ; surge : prolongée. Inrush : appel de courant initial." },
    { recto: "Fire triangle et classes d'extincteurs", verso: "Triangle : fuel + heat + oxygen + réaction chimique — retirer un élément éteint le feu. Classes : A combustibles, B liquides, C électrique, D métaux, K cuisine." },
    { recto: "Systèmes sprinkler", verso: "Wet pipe : toujours en eau, décharge immédiate. Dry pipe : gaz inerte, eau au déclenchement. Pre-action : double détection, LE choix pour les datacenters. Deluge : gros volumes d'eau." },
    { recto: "Security modes : dedicated vs system high", verso: "Dedicated : clearance, approbation d'accès ET need-to-know pour TOUTES les informations du système. System high : clearance et approbation pour tout, mais need-to-know seulement pour CERTAINES informations." },
    { recto: "Security modes : compartmented vs multilevel", verso: "Compartmented : clearance pour TOUTES les informations, mais approbation et need-to-know limités à chaque compartiment. Multilevel (controlled) : certains utilisateurs n'ont PAS la clearance pour tout — le système (TCB) applique la séparation des niveaux." },
    { recto: "TCSEC (Orange Book) / ITSEC", verso: "TCSEC (USA) : niveaux D (minimal) → C1/C2 (discretionary) → B1/B2/B3 (mandatory, labels) → A1 (verified design) ; confidentialité uniquement. ITSEC (Europe) : fonctionnalité (F) et assurance (E1-E6) séparées. Remplacés par les Common Criteria : C2 ≈ EAL3, B1 ≈ EAL4, A1/E6 ≈ EAL7." },
    { recto: "Homomorphic encryption / Confidential computing", verso: "Homomorphic encryption : calculs effectués directement sur des données CHIFFRÉES, sans jamais les déchiffrer (cloud non fiable). Confidential computing : traitement dans une enclave matérielle isolée (TEE) du processeur. Les deux protègent la donnée « in use »." },
    { recto: "Split knowledge vs Dual control", verso: "Split knowledge : la connaissance d'une clé est fragmentée, personne ne SAIT tout. Dual control : une opération critique exige deux personnes simultanément, personne ne FAIT rien seul. Combinés dans le contrôle m of n. Exemple historique de key escrow : Clipper chip (algorithme Skipjack), clé scindée entre deux agences." }
  ]
};
