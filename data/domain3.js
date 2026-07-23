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
      difficulte: 1,
      pourquoi: [
        "Faux : la star (*) property interdit l'écriture vers le bas (no write down) — piège d'inversion entre lecture et écriture.",
        "Correct : la simple security property énonce « no read up » — un sujet ne peut pas lire au-dessus de son niveau d'habilitation.",
        "Faux : la strong star property restreint lecture ET écriture au seul niveau du sujet — réponse trop large pour la seule lecture.",
        "Faux : la discretionary security property repose sur une matrice d'accès et le besoin d'en connaître, pas sur les niveaux de classification."
      ]
    },
    {
      q: "Quel est l'objectif PRINCIPAL du modèle Biba ?",
      choix: ["Protéger la confidentialité des données classifiées", "Protéger l'intégrité des données", "Prévenir les conflits d'intérêts", "Garantir la disponibilité des systèmes"],
      reponse: 1,
      explication: "Biba est un modèle d'intégrité : no read down (ne pas lire des données de moindre intégrité) et no write up (ne pas écrire vers une intégrité supérieure). La confidentialité est l'objectif de Bell-LaPadula, la prévention des conflits d'intérêts celui de Brewer-Nash, et aucun de ces modèles formels ne traite la disponibilité.",
      difficulte: 1,
      pourquoi: [
        "Faux : la confidentialité des données classifiées est l'objectif de Bell-LaPadula — piège de substitution de modèle.",
        "Correct : Biba est le modèle d'INTÉGRITÉ — no read down, no write up.",
        "Faux : la prévention des conflits d'intérêts est l'objet de Brewer-Nash, pas de Biba.",
        "Faux : aucun des modèles formels classiques ne traite la disponibilité — attribut hors périmètre."
      ]
    },
    {
      q: "Un cabinet de conseil souhaite empêcher qu'un consultant travaillant pour la banque A accède aux données de la banque B, sa concurrente. Quel modèle de sécurité répond le MIEUX à ce besoin ?",
      choix: ["Clark-Wilson", "Bell-LaPadula", "Brewer-Nash", "Graham-Denning"],
      reponse: 2,
      explication: "Brewer-Nash, surnommé « ethical wall », a été créé pour prévenir les conflits d'intérêts : les droits d'accès changent dynamiquement selon l'activité passée de l'utilisateur. Clark-Wilson protège l'intégrité via des programmes intermédiaires, Bell-LaPadula protège la confidentialité par niveaux de classification, et Graham-Denning traite la création et la suppression sûres de sujets et d'objets.",
      difficulte: 1,
      pourquoi: [
        "Faux : Clark-Wilson protège l'intégrité via des programmes intermédiaires — techniquement vrai ailleurs, hors besoin ici.",
        "Faux : Bell-LaPadula protège la confidentialité par niveaux, il ne gère pas les conflits d'intérêts entre clients.",
        "Correct : Brewer-Nash (« ethical wall ») ajuste dynamiquement les droits selon l'historique d'accès, exactement pour prévenir les conflits d'intérêts.",
        "Faux : Graham-Denning régit la création et la suppression sûres de sujets et d'objets — hors sujet."
      ]
    },
    {
      q: "Dans le modèle Clark-Wilson, quel composant est le SEUL autorisé à manipuler les Constrained Data Items (CDI) ?",
      choix: ["Les utilisateurs authentifiés", "Les Transformation Procedures (TP)", "Les Integrity Verification Procedures (IVP)", "Les Unconstrained Data Items (UDI)"],
      reponse: 1,
      explication: "Les CDI ne peuvent être manipulés que par des Transformation Procedures (TP), qui garantissent des transactions bien formées. Les utilisateurs n'accèdent jamais directement aux CDI, c'est le principe du triplet sujet-programme-objet. Les IVP servent à auditer et vérifier la cohérence, pas à manipuler les données. Les UDI sont des données non protégées, accessibles directement.",
      difficulte: 2,
      pourquoi: [
        "Faux : les utilisateurs n'accèdent jamais directement aux CDI — c'est le principe même du triplet sujet-programme-objet.",
        "Correct : seules les Transformation Procedures (TP) manipulent les CDI, garantissant des transactions bien formées.",
        "Faux : les IVP vérifient et auditent la cohérence des CDI, elles ne les modifient pas — piège de proximité fonctionnelle.",
        "Faux : les UDI sont des données non contraintes, pas un composant autorisé à manipuler les CDI."
      ]
    },
    {
      q: "Lors d'une évaluation Common Criteria, quel document décrit les prétentions de sécurité que le fournisseur a intégrées dans son produit ?",
      choix: ["Le Protection Profile (PP)", "Le Security Target (ST)", "La Target of Evaluation (TOE)", "Le Security Assurance Requirement (SAR)"],
      reponse: 1,
      explication: "Le Security Target (ST) spécifie les prétentions de sécurité du fournisseur pour sa TOE. Le Protection Profile (PP) décrit au contraire les besoins de sécurité du client (« je veux »). La TOE est le produit évalué lui-même, et les SAR décrivent comment la TOE doit être évaluée.",
      difficulte: 2,
      pourquoi: [
        "Faux : le Protection Profile exprime les besoins du CLIENT (« je veux ») — piège d'inversion des rôles.",
        "Correct : le Security Target contient les prétentions de sécurité du FOURNISSEUR pour sa TOE.",
        "Faux : la TOE est le produit évalué lui-même, pas un document.",
        "Faux : les SAR décrivent comment la TOE doit être évaluée, pas ce qu'elle prétend faire."
      ]
    },
    {
      q: "Quel niveau EAL des Common Criteria correspond à « méthodiquement conçu, testé et revu » ?",
      choix: ["EAL2", "EAL4", "EAL6", "EAL7"],
      reponse: 1,
      explication: "EAL4 correspond à « methodically designed, tested, and reviewed » ; c'est le niveau le plus élevé raisonnablement atteignable pour un produit commercial existant. EAL2 est « structurellement testé », EAL6 « semi-formellement vérifié, conçu et testé » et EAL7 « formellement vérifié, conçu et testé », réservé aux systèmes les plus critiques.",
      difficulte: 2,
      pourquoi: [
        "Faux : EAL2 correspond à « structurellement testé » — niveau inférieur.",
        "Correct : EAL4 = « methodically designed, tested, and reviewed », plafond réaliste pour un produit commercial existant.",
        "Faux : EAL6 correspond à « semi-formellement vérifié, conçu et testé ».",
        "Faux : EAL7 correspond à « formellement vérifié, conçu et testé », réservé aux systèmes les plus critiques."
      ]
    },
    {
      q: "Un EAL7 signifie que le produit évalué est :",
      choix: ["Impossible à compromettre", "Formellement vérifié, conçu et testé", "Certifié pour un usage militaire uniquement", "Doté d'un chiffrement AES-256 obligatoire"],
      reponse: 1,
      explication: "EAL7 signifie « formally verified, designed, and tested » : la rigueur de l'ÉVALUATION est maximale. Attention au piège classique : un EAL mesure la rigueur de l'évaluation, pas une garantie d'invulnérabilité du produit. Rien ne le limite à un usage militaire et l'EAL n'impose aucun algorithme de chiffrement particulier.",
      difficulte: 3,
      pourquoi: [
        "Faux : formulation absolue — aucun niveau d'évaluation ne rend un produit impossible à compromettre.",
        "Correct : EAL7 = « formally verified, designed, and tested » — c'est la rigueur de l'ÉVALUATION qui est maximale.",
        "Faux : aucune restriction d'usage militaire n'est attachée aux EAL — affirmation hors périmètre des Common Criteria.",
        "Faux : l'EAL ne prescrit aucun algorithme de chiffrement — confusion entre assurance et fonctionnalité."
      ]
    },
    {
      q: "Quel principe de conception affirme qu'aucun utilisateur, appareil ou système ne doit être considéré comme fiable par défaut, même à l'intérieur du réseau ?",
      choix: ["Defense in depth", "Trust but verify", "Zero Trust", "Least privilege"],
      reponse: 2,
      explication: "Le Zero Trust repose sur la devise « never trust, always verify » : chaque requête est authentifiée, autorisée et chiffrée avant tout accès, quelle que soit sa provenance. Trust but verify est justement l'approche traditionnelle (périmétrique) que Zero Trust remplace. Defense in depth empile des contrôles en série, et least privilege limite les privilèges accordés, mais aucun des deux ne définit la posture de non-confiance par défaut.",
      difficulte: 1,
      pourquoi: [
        "Faux : defense in depth empile des contrôles en série mais ne définit pas la posture de non-confiance par défaut — piège de proximité.",
        "Faux : « trust but verify » est justement le modèle périmétrique traditionnel que Zero Trust remplace — inversion.",
        "Correct : Zero Trust = « never trust, always verify » — aucune confiance implicite, chaque requête est vérifiée.",
        "Faux : least privilege limite les droits accordés, il ne décrit pas l'absence de confiance par défaut — trop étroit."
      ]
    },
    {
      q: "En cas d'incendie, les portes contrôlées d'un datacenter se déverrouillent automatiquement pour permettre l'évacuation. Quel principe est appliqué ?",
      choix: ["Fail-secure, car le datacenter reste protégé", "Fail-safe, car la protection des personnes prime", "Fail-closed, car la confidentialité est maintenue", "Secure defaults, car c'est la configuration d'usine"],
      reponse: 1,
      explication: "Dans le monde physique, fail-safe signifie que la défaillance protège les personnes : les portes s'ouvrent pour permettre l'évacuation, car la vie humaine prime toujours sur la protection des actifs. Fail-secure aurait maintenu les portes verrouillées pour protéger les équipements, ce qui est inacceptable quand des vies sont en jeu. Fail-closed est un concept numérique, et secure defaults concerne la configuration initiale.",
      difficulte: 2,
      pourquoi: [
        "Faux : fail-secure maintiendrait les portes verrouillées pour protéger les actifs — inacceptable quand des vies sont en jeu.",
        "Correct : fail-safe fait primer la protection des personnes — la vie humaine passe avant tout actif.",
        "Faux : fail-closed est un concept de systèmes logiques/réseau, pas de sécurité physique des personnes — hors contexte.",
        "Faux : secure defaults concerne la configuration initiale d'un système, pas le comportement en défaillance."
      ]
    },
    {
      q: "Quelle est la fonction PRINCIPALE d'un Trusted Platform Module (TPM) ?",
      choix: ["Accélérer le processeur graphique", "Réaliser des opérations cryptographiques matérielles et protéger des clés", "Filtrer le trafic réseau entrant", "Sauvegarder automatiquement les fichiers système"],
      reponse: 1,
      explication: "Le TPM est une puce inviolable de la carte mère qui réalise des opérations cryptographiques (dont la génération de clés) et protège de petites quantités de données sensibles comme des clés et mots de passe. Il ne joue aucun rôle graphique, réseau ou de sauvegarde. C'est un prérequis de nombreuses solutions de chiffrement de disque.",
      difficulte: 1,
      pourquoi: [
        "Faux : le TPM n'a aucun rôle graphique — distracteur hors domaine.",
        "Correct : le TPM est une puce inviolable dédiée aux opérations cryptographiques matérielles et à la protection de clés.",
        "Faux : le filtrage réseau est le rôle d'un pare-feu, pas d'un TPM.",
        "Faux : la sauvegarde de fichiers relève d'une solution de backup, pas d'un cryptoprocesseur."
      ]
    },
    {
      q: "Quelle différence essentielle distingue un HSM d'entreprise d'un TPM ?",
      choix: ["Le HSM ne peut pas générer de clés", "Le TPM est un dispositif réseau externe", "Le HSM est un cryptoprocesseur dédié, souvent un boîtier externe, tandis que le TPM est intégré à la carte mère", "Le TPM offre plus de puissance de calcul cryptographique que le HSM"],
      reponse: 2,
      explication: "Le TPM est une puce soudée à la carte mère d'une machine, alors que le HSM d'entreprise est un équipement dédié (boîtier ou carte) conçu pour gérer et stocker des clés à grande échelle et accélérer les opérations cryptographiques ; le TPM est d'ailleurs considéré comme un exemple de HSM. Les deux génèrent des clés, le TPM n'est pas un équipement réseau, et c'est le HSM dédié qui offre les meilleures performances.",
      difficulte: 2,
      pourquoi: [
        "Faux : le HSM génère bel et bien des clés — c'est l'une de ses fonctions centrales.",
        "Faux : c'est l'inverse — le TPM est soudé à la carte mère, pas un équipement externe.",
        "Correct : le HSM est un cryptoprocesseur dédié (souvent en boîtier externe) pour la gestion de clés à grande échelle, le TPM une puce intégrée.",
        "Faux : inversion — le HSM dédié offre bien plus de puissance cryptographique que la petite puce TPM."
      ]
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
      difficulte: 2,
      pourquoi: [
        "Correct : Non-bypassable, Evaluable, Always invoked, Tamper-proof — les quatre propriétés du reference monitor.",
        "Faux : vocabulaire de sécurité plausible mais sans rapport avec les propriétés du reference monitor — piège lexical.",
        "Faux : liste de services de sécurité, pas les propriétés d'un mécanisme de médiation des accès.",
        "Faux : adjectifs génériques inventés qui ne correspondent à aucun concept formel."
      ]
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
      difficulte: 2,
      pourquoi: [
        "Faux : le VM sprawl est la prolifération incontrôlée de VM — mauvais diagnostic de l'attaque.",
        "Correct : c'est un VM escape ; séparer physiquement les systèmes les plus sensibles limite l'impact d'une évasion, en complément du patching.",
        "Faux : le side-channel est une autre famille d'attaques (fuites physiques) — diagnostic erroné.",
        "Faux : diagnostic exact mais remède aggravant — désactiver la journalisation supprime la capacité de détection."
      ]
    },
    {
      q: "Dans quel modèle de service cloud le fournisseur assure-t-il le MOINS de maintenance et de sécurité ?",
      choix: ["SaaS", "PaaS", "IaaS", "FaaS"],
      reponse: 2,
      explication: "En IaaS, le fournisseur ne livre que les ressources de base (serveurs, stockage, réseau) : le client installe et maintient lui-même les systèmes d'exploitation et les applications. En PaaS le fournisseur gère aussi la plateforme, en SaaS il gère la quasi-totalité, et le FaaS (serverless) est une sous-catégorie du PaaS où le fournisseur gère toute l'infrastructure d'exécution.",
      difficulte: 2,
      pourquoi: [
        "Faux : en SaaS le fournisseur gère la quasi-totalité de la pile — c'est le maximum de prise en charge, pas le minimum.",
        "Faux : en PaaS le fournisseur gère aussi la plateforme d'exécution — plus que l'IaaS.",
        "Correct : en IaaS le fournisseur ne livre que l'infrastructure de base ; OS et applications restent à la charge du client.",
        "Faux : le FaaS est une sous-catégorie du PaaS où le fournisseur gère toute l'infrastructure d'exécution."
      ]
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
      difficulte: 2,
      pourquoi: [
        "Faux : le remplacement immédiat d'un SCADA est rarement réaliste ni justifiable économiquement — réponse hors contrainte.",
        "Correct : la segmentation isole le système non patchable et réduit drastiquement sa surface d'attaque — le contrôle compensatoire de référence.",
        "Faux : réponse de technicien inapplicable — les automates ne supportent généralement pas d'agent antivirus.",
        "Faux : chiffrer les disques des postes ne protège pas les communications legacy vulnérables — hors cible."
      ]
    },
    {
      q: "Quelle est la PREMIÈRE recommandation pour sécuriser des objets connectés (IoT) dans une entreprise ?",
      choix: [
        "Les déployer sur un réseau distinct et isolé",
        "Changer les identifiants par défaut de chaque objet",
        "Installer un agent antivirus ou EDR sur chaque objet",
        "N'acheter que des objets certifiés Common Criteria"
      ],
      reponse: 0,
      explication: "La mesure de référence est de placer les équipements IoT sur un réseau dédié, séparé et isolé du réseau de production : elle contient l'impact de n'importe quelle compromission, y compris celle d'un objet non patchable. Changer les identifiants par défaut est indispensable mais ne limite pas la propagation d'une compromission ; la plupart des objets ne peuvent pas héberger d'agent EDR ; exiger une certification Common Criteria est irréaliste pour l'essentiel du marché IoT et ne protège pas le réseau existant.",
      difficulte: 1,
      pourquoi: [
        "Correct : un réseau dédié et isolé contient l'impact de toute compromission, y compris celle d'objets non patchables.",
        "Faux : indispensable mais insuffisant — changer les identifiants ne limite pas la propagation une fois l'objet compromis ; vrai mais pas prioritaire.",
        "Faux : réponse de technicien irréaliste — la plupart des objets IoT ne peuvent pas héberger d'agent antivirus ou EDR.",
        "Faux : exigence de sur-certification irréaliste pour le marché IoT, et sans effet protecteur sur le réseau existant."
      ]
    },
    {
      q: "Une base de données permet à un analyste sans habilitation de déduire des informations classifiées en combinant mentalement plusieurs données non sensibles. De quelle attaque s'agit-il ?",
      choix: ["Aggregation", "Inference", "SQL injection", "Pass the hash"],
      reponse: 1,
      explication: "L'inférence repose sur la capacité de déduction humaine : combiner plusieurs informations non sensibles pour en déduire une information d'un niveau de classification supérieur. L'agrégation, elle, utilise les fonctions mathématiques de la base (SUM, COUNT...) pour combiner des enregistrements. L'injection SQL est une attaque applicative, et le pass the hash une attaque d'authentification.",
      difficulte: 2,
      pourquoi: [
        "Faux : l'aggregation est le piège de proximité — elle désigne l'accumulation de données dont l'ensemble devient sensible ; ici l'analyste DÉDUIT une information nouvelle.",
        "Correct : l'inference consiste à déduire des informations classifiées à partir de données individuellement non sensibles.",
        "Faux : la SQL injection est une attaque technique d'injection de code — hors sujet.",
        "Faux : le pass the hash est une attaque d'authentification — hors domaine des bases de données."
      ]
    },
    {
      q: "Combien de clés symétriques sont nécessaires pour que 12 personnes communiquent toutes deux à deux de manière sécurisée ?",
      choix: ["12", "24", "66", "132"],
      reponse: 2,
      explication: "La formule est n(n-1)/2, soit 12 × 11 / 2 = 66 clés. C'est ce problème de croissance quadratique qui rend le symétrique difficile à gérer à grande échelle : la cryptographie asymétrique le résout avec seulement une paire de clés par personne.",
      difficulte: 2,
      pourquoi: [
        "Faux : 12 correspondrait à une clé par personne — mauvaise formule.",
        "Faux : 24 évoque deux clés par personne, la logique de l'asymétrique — piège de substitution de formule.",
        "Correct : n(n-1)/2 = 12×11/2 = 66 clés symétriques pour des échanges deux à deux.",
        "Faux : 132 = n(n-1), l'oubli de la division par deux — erreur de calcul classique."
      ]
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
      difficulte: 1,
      pourquoi: [
        "Faux : mélange de paramètres qui ne correspond à aucune version d'AES.",
        "Correct : AES accepte des clés de 128, 192 ou 256 bits et travaille toujours sur des blocs de 128 bits.",
        "Faux : clé de 56 bits et blocs de 64 bits décrivent DES — piège de substitution d'algorithme.",
        "Faux : les clés de 1024 à 4096 bits décrivent RSA, un algorithme asymétrique."
      ]
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
      difficulte: 1,
      pourquoi: [
        "Faux : le logarithme discret elliptique fonde ECC, pas RSA — piège de substitution.",
        "Correct : RSA repose sur la difficulté de factoriser le produit de deux grands nombres premiers.",
        "Faux : le problème du sac à dos fonde d'anciens cryptosystèmes abandonnés (Merkle-Hellman).",
        "Faux : les lattices fondent la cryptographie post-quantique, pas RSA."
      ]
    },
    {
      q: "Pourquoi choisir ECC plutôt que RSA pour des équipements mobiles à ressources limitées ?",
      choix: [
        "ECC est un algorithme symétrique, donc plus rapide",
        "Une clé ECC de 256 bits offre une sécurité comparable à une clé RSA de 3072 bits",
        "La vérification d'une signature ECC est toujours plus rapide que celle d'une signature RSA",
        "ECC résiste nativement aux ordinateurs quantiques, contrairement à RSA"
      ],
      reponse: 1,
      explication: "ECC repose sur le logarithme discret elliptique et atteint un niveau de sécurité équivalent avec des clés beaucoup plus courtes : 256 bits ECC équivalent environ à 3072 bits RSA. Des clés plus courtes signifient moins de calcul, de mémoire et d'énergie, un atout décisif sur mobile. ECC reste asymétrique ; la vérification RSA (petit exposant public) est en réalité souvent plus rapide que la vérification ECDSA — l'avantage d'ECC porte sur la taille des clés et le coût global ; et l'algorithme de Shor casse aussi bien ECC que RSA : ECC n'est pas post-quantique.",
      difficulte: 2,
      pourquoi: [
        "Faux : ECC est un algorithme asymétrique — confusion de famille cryptographique.",
        "Correct : à sécurité équivalente, les clés ECC sont bien plus courtes (256 bits ≈ RSA 3072), d'où moins de calcul, de mémoire et d'énergie.",
        "Faux : techniquement séduisant mais inexact — la vérification RSA (petit exposant public) est souvent plus rapide que la vérification ECDSA ; formulation absolue (« toujours »).",
        "Faux : piège de modernité — l'algorithme de Shor casse aussi bien ECC que RSA ; ECC n'est pas post-quantique."
      ]
    },
    {
      q: "Alice veut envoyer un message confidentiel à Bob en utilisant la cryptographie asymétrique. Quelle clé doit-elle utiliser pour chiffrer ?",
      choix: ["Sa propre clé privée", "Sa propre clé publique", "La clé publique de Bob", "La clé privée de Bob"],
      reponse: 2,
      explication: "Pour la confidentialité, on chiffre avec la clé publique du destinataire : seul Bob, détenteur de la clé privée correspondante, pourra déchiffrer. Chiffrer avec sa propre clé privée correspond à une signature (authentification, pas confidentialité). Alice ne possède jamais la clé privée de Bob, et sa propre clé publique ne permettrait qu'à elle-même... de ne rien faire d'utile.",
      difficulte: 1,
      pourquoi: [
        "Faux : sa clé privée sert à signer — elle n'apporterait aucune confidentialité.",
        "Faux : chiffrer avec sa propre clé publique rendrait le message lisible par elle seule — Bob ne pourrait pas le déchiffrer.",
        "Correct : chiffrer avec la clé publique de Bob garantit que seul Bob, détenteur de la clé privée associée, peut déchiffrer.",
        "Faux : la clé privée de Bob n'est jamais partagée — Alice ne peut pas l'utiliser."
      ]
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
      difficulte: 2,
      pourquoi: [
        "Faux : chiffrer avec la clé publique du destinataire assure la confidentialité, pas la signature — inversion des services.",
        "Correct : signer = hacher le message puis chiffrer le digest avec la clé PRIVÉE de l'émetteur, seule preuve de son identité.",
        "Faux : la clé publique de l'émetteur est connue de tous — un digest ainsi chiffré ne prouverait rien.",
        "Faux : cette séquence décrit une enveloppe numérique (échange de clé de session), pas une signature."
      ]
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
      difficulte: 1,
      pourquoi: [
        "Faux : la signature ne chiffre pas le message — elle n'apporte aucune confidentialité ; piège du service en trop.",
        "Correct : la signature garantit intégrité, authentification de l'émetteur et non-répudiation.",
        "Faux : ni la confidentialité ni la disponibilité ne sont des services rendus par une signature.",
        "Faux : c'est l'inverse — la signature identifie formellement l'expéditeur au lieu de l'anonymiser."
      ]
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
      difficulte: 2,
      pourquoi: [
        "Faux : ECB est au contraire rapide et parallélisable — mauvais motif.",
        "Correct : sans chaînage ni IV, des blocs de clair identiques donnent des blocs chiffrés identiques — les motifs du message transparaissent.",
        "Faux : inversion — ECB n'utilise justement aucun vecteur d'initialisation.",
        "Faux : la taille de clé dépend de l'algorithme, pas du mode d'opération."
      ]
    },
    {
      q: "Quel mode de chiffrement fournit à la fois la confidentialité ET l'intégrité des données ?",
      choix: ["ECB", "CBC", "CTR", "GCM"],
      reponse: 3,
      explication: "GCM (Galois/Counter Mode) combine le mode compteur avec l'authentification de Galois : c'est un mode de chiffrement authentifié qui fournit confidentialité et intégrité, reconnu par le NIST. ECB et CBC ne fournissent que la confidentialité (CBC étant en outre vulnérable à POODLE), et CTR est rapide et parallélisable mais dépourvu d'intégrité.",
      difficulte: 2,
      pourquoi: [
        "Faux : ECB n'offre même pas une confidentialité correcte — le plus faible des modes.",
        "Faux : CBC fournit la confidentialité mais aucune protection d'intégrité — vrai à moitié, donc insuffisant.",
        "Faux : CTR fournit la confidentialité seule, sans authentification des données.",
        "Correct : GCM est un mode de chiffrement authentifié (AEAD) — confidentialité ET intégrité dans une seule opération."
      ]
    },
    {
      q: "Quel principe énonce qu'un cryptosystème doit rester sûr même si tout, sauf la clé, est connu publiquement ?",
      choix: ["Le principe de Kerckhoff", "La loi de Moore", "Le work factor", "Le principe de Locard"],
      reponse: 0,
      explication: "Le principe de Kerckhoff affirme que la sécurité doit reposer uniquement sur le secret de la clé, jamais sur celui de l'algorithme — la « sécurité par l'obscurité » est une illusion. La loi de Moore concerne le doublement de la puissance des processeurs, le work factor mesure l'effort nécessaire pour casser un système, et le principe de Locard appartient à la criminalistique.",
      difficulte: 1,
      pourquoi: [
        "Correct : le principe de Kerckhoff — la sécurité doit reposer uniquement sur le secret de la clé, pas sur celui de l'algorithme.",
        "Faux : la loi de Moore décrit la croissance de la puissance de calcul — hors sujet.",
        "Faux : le work factor mesure l'effort nécessaire pour casser un système, il n'énonce pas ce principe de conception.",
        "Faux : le principe de Locard relève de la criminalistique (tout contact laisse une trace)."
      ]
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
      difficulte: 2,
      pourquoi: [
        "Faux : une clé de 256 bits renouvelée chaque mois décrit une bonne hygiène symétrique moderne, pas un one-time pad — piège de vraisemblance.",
        "Correct : les quatre conditions du OTP — clé vraiment aléatoire, au moins aussi longue que le message, à usage unique, protégée physiquement.",
        "Faux : une clé dérivée d'une phrase de passe n'est pas vraiment aléatoire — condition fondatrice violée.",
        "Faux : DH et TPM sont de bonnes pratiques mais ne satisfont ni l'unicité d'usage ni la longueur exigées par l'OTP."
      ]
    },
    {
      q: "Quelle mesure protège le MIEUX les mots de passe stockés contre les attaques par rainbow tables ?",
      choix: ["Chiffrer la base avec AES", "Ajouter un salt unique avant hachage", "Doubler la longueur du hash", "Utiliser le mode CBC"],
      reponse: 1,
      explication: "Le salting ajoute une valeur aléatoire unique à chaque mot de passe avant hachage : les tables précalculées deviennent inutilisables puisque le même mot de passe produit des hashes différents. Le chiffrement de la base déplace le problème vers la clé, la longueur du hash ne neutralise pas la précomputation, et CBC est un mode de chiffrement sans rapport avec le stockage de mots de passe. On complète le salting par du key stretching (bcrypt, PBKDF2, Argon2).",
      difficulte: 1,
      pourquoi: [
        "Faux : chiffrer la base déplace le problème vers la gestion de la clé et ne neutralise pas la logique des tables précalculées — techniquement vrai mais pas la parade spécifique.",
        "Correct : un salt unique par mot de passe rend inutilisables les rainbow tables, précalculées sans ce salt.",
        "Faux : la longueur du hash ne change rien — les tables sont construites pour l'algorithme utilisé ; piège de fausse robustesse.",
        "Faux : CBC est un mode de chiffrement par blocs — hors sujet pour du hachage de mots de passe."
      ]
    },
    {
      q: "L'attaque meet-in-the-middle a démontré la faiblesse de quel schéma cryptographique ?",
      choix: ["AES-256", "Le double DES (2DES)", "RSA-2048", "ChaCha20"],
      reponse: 1,
      explication: "Le meet-in-the-middle est une attaque de type known plaintext qui mène deux recherches simultanées — chiffrement du plaintext et déchiffrement du ciphertext — pour retrouver les clés. Elle a réduit la sécurité effective du double DES à peine au-dessus de celle du DES simple, ce qui explique le passage direct au triple DES. AES, RSA et ChaCha20 ne sont pas concernés par cette construction en double chiffrement.",
      difficulte: 3,
      pourquoi: [
        "Faux : AES-256 n'est pas concerné par le meet-in-the-middle — il reste l'étalon actuel.",
        "Correct : le meet-in-the-middle réduit la sécurité effective du double DES à environ 2^57, à peine mieux que DES simple — d'où le passage direct à 3DES.",
        "Faux : RSA-2048 n'est pas visé par cette attaque de chiffrements composés.",
        "Faux : ChaCha20 est un chiffrement de flux moderne, hors périmètre de cette attaque."
      ]
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
      difficulte: 3,
      pourquoi: [
        "Faux : trop étroit — la lecture d'e-mails est anecdotique face à la compromission totale du domaine.",
        "Correct : avec le hash KRBTGT, l'attaquant forge des TGT arbitraires (golden ticket) : contrôle durable de tout le domaine.",
        "Faux : trop étroit — usurper un compte de service décrit le silver ticket, bien moins grave.",
        "Faux : la désactivation d'antivirus n'est pas la conséquence propre de ce vol — hors sujet."
      ]
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
      difficulte: 3,
      pourquoi: [
        "Faux : allonger les clés ne supprime pas la fuite d'information temporelle — hors cible.",
        "Correct : des opérations en temps constant suppriment la corrélation entre durée d'exécution et secrets manipulés.",
        "Faux : changer d'algorithme chaque mois est coûteux et n'élimine pas la fuite par le temps d'exécution — fausse rotation.",
        "Faux : chiffrer les journaux ne modifie pas le comportement temporel observable par l'attaquant."
      ]
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
      difficulte: 2,
      pourquoi: [
        "Faux : trop étroit — le vol de clés dans des sauvegardes ne décrit pas le pari sur le déchiffrement quantique futur.",
        "Correct : Harvest Now, Decrypt Later = intercepter et stocker aujourd'hui des données chiffrées pour les déchiffrer demain grâce au quantique.",
        "Faux : la collecte de hashes relève du pass the hash — autre famille d'attaques.",
        "Faux : l'archivage légal des opérateurs est une obligation réglementaire, pas cette menace adverse."
      ]
    },
    {
      q: "Quel composant d'une PKI est chargé de VÉRIFIER l'identité du demandeur avant l'émission d'un certificat ?",
      choix: ["La Certification Authority (CA)", "La Registration Authority (RA)", "Le certificate practice statement (CPS)", "Le serveur OCSP"],
      reponse: 1,
      explication: "La Registration Authority (RA) vérifie l'identité de l'utilisateur ou de l'équipement qui demande un certificat ; la CA émet ensuite le certificat liant l'identité à la clé publique. Le CPS documente les pratiques de sécurité de la PKI, et OCSP sert à vérifier le statut de révocation d'un certificat déjà émis.",
      difficulte: 2,
      pourquoi: [
        "Faux : la CA signe et émet les certificats — la vérification d'identité est justement déléguée ; piège d'inversion des rôles.",
        "Correct : la Registration Authority vérifie l'identité du demandeur avant de transmettre la demande à la CA.",
        "Faux : le CPS est le document décrivant les pratiques de certification, pas un acteur opérationnel.",
        "Faux : le serveur OCSP renseigne sur la révocation, pas sur l'enrôlement."
      ]
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
      difficulte: 2,
      pourquoi: [
        "Faux : des copies complètes chez m administrateurs seraient l'exact contraire du contrôle recherché.",
        "Correct : m of n = au moins m agents parmi n désignés doivent coopérer pour reconstituer la clé — aucun individu seul ne le peut.",
        "Faux : la fragmentation géographique par pays est une invention plausible mais étrangère à ce contrôle.",
        "Faux : confusion avec une politique de durée de vie de clé — hors sujet."
      ]
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
      difficulte: 2,
      pourquoi: [
        "Faux : une clôture barbelée relève du target hardening mécanique, pas d'un aménagement « naturel ».",
        "Correct : allées ouvertes et bien éclairées = natural surveillance — rendre les intrus visibles par l'environnement lui-même.",
        "Faux : le badge est un contrôle d'accès technique, pas une mesure d'aménagement naturel.",
        "Faux : situer la salle au cœur du bâtiment relève de la protection par l'emplacement, pas de la surveillance."
      ]
    },
    {
      q: "Quel terme désigne une sous-tension PROLONGÉE de l'alimentation électrique ?",
      choix: ["Sag", "Brownout", "Spike", "Inrush"],
      reponse: 1,
      explication: "Le brownout est une sous-tension prolongée, tandis que le sag (ou dip) est une sous-tension momentanée. Le spike est une surtension momentanée (le surge étant sa version prolongée), et l'inrush est l'appel de courant initial lors du branchement à une source d'alimentation.",
      difficulte: 2,
      pourquoi: [
        "Faux : le sag est une sous-tension MOMENTANÉE — piège sur la durée.",
        "Correct : le brownout est une sous-tension PROLONGÉE du réseau électrique.",
        "Faux : le spike est une surtension brève — mauvais sens de variation.",
        "Faux : l'inrush est le courant d'appel initial d'un équipement — hors sujet."
      ]
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
      difficulte: 1,
      pourquoi: [
        "Faux : objectif réel mais jamais prioritaire sur les personnes — piège du gestionnaire d'actifs.",
        "Correct : la vie humaine prime toujours — tout système d'extinction se conçoit d'abord pour protéger les personnes.",
        "Faux : la reprise d'activité compte mais reste subordonnée à la sûreté des personnes — vrai mais pas prioritaire.",
        "Faux : le coût ne peut jamais primer sur la sécurité des personnes — arbitrage inacceptable."
      ]
    },
    {
      q: "Un extincteur de classe C est conçu pour quel type de feu ?",
      choix: ["Combustibles ordinaires (bois, papier)", "Liquides inflammables", "Feux d'origine électrique", "Métaux combustibles"],
      reponse: 2,
      explication: "La classe C couvre les feux d'origine électrique. La classe A concerne les combustibles ordinaires, la classe B les liquides inflammables, la classe D les métaux, et la classe K les huiles et graisses de cuisine. Pour une salle informatique, on pense classe C et agents non conducteurs comme le CO2.",
      difficulte: 1,
      pourquoi: [
        "Faux : bois et papier relèvent de la classe A.",
        "Faux : les liquides inflammables relèvent de la classe B.",
        "Correct : la classe C couvre les feux d'origine électrique — agents non conducteurs requis.",
        "Faux : les métaux combustibles relèvent de la classe D."
      ]
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
      difficulte: 2,
      pourquoi: [
        "Faux : le halon était au contraire très efficace sur les feux électriques — mauvais motif.",
        "Correct : le halon se dégrade en gaz toxiques à haute température et détruit la couche d'ozone — d'où son abandon.",
        "Faux : inversion — le halon est un agent gazeux propre, sans résidu de poudre.",
        "Faux : le coût de stockage n'est pas la raison de son interdiction."
      ]
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
      difficulte: 2,
      pourquoi: [
        "Faux : le rez-de-chaussée privilégie la commodité logistique au prix d'une exposition aux intrusions et véhicules.",
        "Faux : le dernier étage expose aux fuites de toiture et complique l'intervention des secours.",
        "Correct : le cœur du bâtiment évite inondations du sous-sol, intrusions du rez-de-chaussée et sinistres de toiture.",
        "Faux : le sous-sol est le premier touché en cas d'inondation — la fraîcheur ne compense pas ce risque."
      ]
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
      difficulte: 2,
      pourquoi: [
        "Faux : l'IV ne participe pas à la longueur ni à la force de la clé.",
        "Correct : l'IV introduit de l'aléa initial pour que deux messages identiques produisent des chiffrés différents.",
        "Faux : aucun mode de chiffrement ne compresse les données — hors sujet.",
        "Faux : l'authentification de l'émetteur relève d'un MAC ou d'une signature, pas de l'IV."
      ]
    },
    {
      q: "Un employé du support technique peut créer des comptes utilisateurs ET valider leurs droits d'accès. Quel principe de conception sécurisée est violé ?",
      choix: ["Defense in depth", "Separation of duties", "Secure defaults", "Keep it simple"],
      reponse: 1,
      explication: "La séparation des tâches exige qu'aucune personne seule ne contrôle une fonction critique de bout en bout : créer les comptes et valider leurs droits doit être confié à des personnes différentes, sans quoi la fraude devient possible sans complicité. Les autres principes (contrôles en couches, configuration sûre par défaut, simplicité) ne sont pas directement concernés ici.",
      difficulte: 1,
      pourquoi: [
        "Faux : defense in depth concerne l'empilement de contrôles — hors sujet.",
        "Correct : créer des comptes ET valider leurs droits cumule deux fonctions incompatibles — violation de la separation of duties.",
        "Faux : secure defaults concerne les configurations initiales sûres — hors sujet.",
        "Faux : le principe de simplicité ne traite pas le cumul de fonctions critiques."
      ]
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
      difficulte: 2,
      pourquoi: [
        "Faux : inversion — c'est la machine virtuelle qui embarque un OS complet, pas le conteneur.",
        "Correct : les conteneurs partagent le noyau de l'hôte — densité supérieure mais isolation plus faible que les VM.",
        "Faux : formulation absolue — les images de conteneurs véhiculent régulièrement des vulnérabilités.",
        "Faux : formulation absolue — le noyau partagé rend le patching de l'hôte plus critique que jamais."
      ]
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
      difficulte: 3,
      pourquoi: [
        "Faux : la taille de clé n'est pas la spécificité de la QKD — critère hors sujet.",
        "Correct : par principe quantique, toute écoute perturbe l'état mesuré et se détecte — c'est la propriété distinctive de la QKD.",
        "Faux : la QKD distribue des clés ; elle ne chiffre pas les données « en qubits » — confusion sur l'objet.",
        "Faux : la QKD ne remplace ni certificats ni jetons — hors sujet."
      ]
    },
    {
      q: "Sur un système gouvernemental, tous les utilisateurs possèdent une clearance valide pour l'ensemble des informations traitées, mais leur approbation d'accès et leur need-to-know sont limités aux seuls compartiments dont ils ont besoin. Dans quel mode de sécurité ce système fonctionne-t-il ?",
      choix: ["Dedicated", "System high", "Compartmented", "Multilevel"],
      reponse: 2,
      explication: "C'est la définition exacte du mode compartmented : clearance pour TOUTES les informations, mais approbation d'accès et need-to-know par compartiment. En mode dedicated, les utilisateurs ont clearance, approbation et need-to-know pour tout. En system high, seul le need-to-know est partiel (l'approbation couvre tout). En multilevel, certains utilisateurs n'ont pas la clearance pour toutes les informations et c'est le système qui applique la séparation des niveaux.",
      difficulte: 2,
      pourquoi: [
        "Faux : en mode dedicated, tous ont aussi l'approbation ET le need-to-know pour tout — plus permissif que la situation décrite.",
        "Faux : en mode system high, l'approbation d'accès couvre tout le système ; ici elle est limitée par compartiment.",
        "Correct : compartmented = clearance pour tout, mais approbation d'accès et need-to-know limités aux compartiments nécessaires.",
        "Faux : le mode multilevel implique que certains utilisateurs n'ont PAS de clearance pour tout — ce n'est pas le cas décrit."
      ]
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
      difficulte: 3,
      pourquoi: [
        "Faux : la clearance universelle décrit les modes dedicated, system high ou compartmented — pas le multilevel.",
        "Correct : en multilevel, certains utilisateurs ne sont pas habilités à tout — le système doit lui-même séparer les niveaux et arbitrer chaque accès.",
        "Faux : le need-to-know varie par utilisateur — affirmation contraire au principe.",
        "Faux : c'est l'inverse — le multilevel traite simultanément plusieurs niveaux de classification."
      ]
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
      difficulte: 2,
      pourquoi: [
        "Faux : la protection minimale (échec d'évaluation) correspond au niveau D.",
        "Faux : la protection discrétionnaire avec journalisation décrit la famille C.",
        "Correct : A1 = verified design — conception formellement vérifiée, sommet du TCSEC.",
        "Faux : le TCSEC n'impose pas de chiffrement obligatoire des supports — critère inventé."
      ]
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
      difficulte: 2,
      pourquoi: [
        "Faux : hors phase — TLS protège les données EN TRANSIT, mais le calcul chez le fournisseur exigerait toujours le clair.",
        "Correct : le chiffrement homomorphe permet d'exécuter des calculs directement sur données chiffrées — le fournisseur ne voit jamais le clair.",
        "Faux : le hachage est à sens unique — il détruit l'utilisabilité statistique des données médicales.",
        "Faux : trop étroit — la tokenisation masque des identifiants, mais les données médicales à analyser resteraient en clair."
      ]
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
      difficulte: 2,
      pourquoi: [
        "Faux : key clustering (clés équivalentes) et key stretching (renforcement de dérivation) — vocabulaire cryptographique piège, hors sujet.",
        "Correct : chacun ne connaît qu'une partie du secret (split knowledge) et l'action exige deux personnes simultanées (dual control).",
        "Faux : key escrow (dépôt de clés) et cryptographic erase (effacement) ne décrivent pas ce dispositif.",
        "Faux : Zero Trust et least privilege sont des principes généraux — trop larges pour nommer ces mécanismes précis."
      ]
    },
    {
      q: "Une entreprise dont les effectifs sont majoritairement en télétravail souhaite remplacer ses VPN et ses appliances de sécurité d'agence par un service unique fourni depuis le cloud, combinant SD-WAN, CASB, SWG, ZTNA et FWaaS. Quelle architecture répond le MIEUX à ce besoin ?",
      choix: [
        "Un backbone MPLS avec pare-feu nouvelle génération centralisé",
        "Une architecture SASE (Secure Access Service Edge)",
        "Un bastion host placé en DMZ",
        "Un SD-WAN seul, sans fonctions de sécurité"
      ],
      reponse: 1,
      explication: "Le SASE regroupe précisément les fonctions réseau (SD-WAN) et les fonctions de sécurité (CASB, Secure Web Gateway, Zero Trust Network Access, Firewall as a Service) en un service unifié fourni depuis le cloud, au plus près de l'utilisateur où qu'il soit. Le MPLS avec pare-feu centralisé oblige à rapatrier tout le trafic vers le siège (backhauling), ce qui est inefficace pour des télétravailleurs. Le bastion host ne protège qu'un point d'entrée, et un SD-WAN seul optimise le routage sans apporter les fonctions de sécurité demandées.",
      difficulte: 2,
      pourquoi: [
        "Faux : MPLS avec pare-feu centralisé décrit le modèle périmétrique avec backhauling — l'inverse du besoin exprimé.",
        "Correct : le SASE fusionne exactement SD-WAN, CASB, SWG, ZTNA et FWaaS en service cloud unique — définition du besoin.",
        "Faux : un bastion en DMZ ne couvre que l'accès administratif — trop étroit pour des effectifs entiers en télétravail.",
        "Faux : le SD-WAN seul apporte le transport mais aucune des fonctions de sécurité demandées — réponse incomplète."
      ]
    },
    {
      q: "Quel est l'avantage PRINCIPAL d'une architecture SASE par rapport au modèle de sécurité périmétrique traditionnel ?",
      choix: [
        "Elle réduit les coûts en regroupant tous les contrats de sécurité chez un fournisseur unique",
        "Elle applique les politiques de sécurité au plus près de l'utilisateur, où qu'il se trouve, sans rapatrier le trafic vers le datacenter",
        "Elle permet de conserver les pare-feux d'agence existants sans modification",
        "Elle centralise l'inspection de tout le trafic dans le datacenter de l'entreprise"
      ],
      reponse: 1,
      explication: "Le SASE déplace l'application des politiques de sécurité vers des points de présence cloud proches de l'utilisateur : le trafic n'a plus besoin d'être rapatrié (backhauled) vers le périmètre de l'entreprise pour être inspecté, ce qui réduit la latence tout en conservant un contrôle homogène. La consolidation des contrats est un effet de bord économique possible, pas l'avantage de sécurité principal ; le SASE remplace justement les appliances d'agence au lieu de les conserver ; et la centralisation de l'inspection dans le datacenter décrit le modèle périmétrique traditionnel, exactement ce que le SASE abandonne.",
      difficulte: 2,
      pourquoi: [
        "Faux : la consolidation des contrats est un effet économique possible, pas l'avantage de sécurité principal — vrai mais pas prioritaire.",
        "Correct : le SASE applique les politiques dans des points de présence cloud proches de l'utilisateur, sans rapatrier le trafic.",
        "Faux : le SASE remplace justement les appliances d'agence — il ne les conserve pas.",
        "Faux : centraliser l'inspection dans le datacenter décrit le modèle périmétrique traditionnel — inversion complète."
      ]
    },
    {
      q: "Une nouvelle application mobile collecte par défaut la géolocalisation précise des utilisateurs, qui doivent naviguer dans les paramètres pour la désactiver. Quel principe du Privacy by Design est violé ?",
      choix: [
        "Privacy as the default setting (vie privée par défaut)",
        "Full functionality (positive-sum)",
        "Visibility and transparency",
        "End-to-end security"
      ],
      reponse: 0,
      explication: "Le principe « privacy as the default » exige que la configuration la plus protectrice de la vie privée soit active sans aucune action de l'utilisateur : la collecte de géolocalisation devrait être désactivée par défaut et activée seulement sur consentement (opt-in). Le positive-sum affirme qu'on peut concilier vie privée et fonctionnalités sans compromis, la transparence concerne l'information des utilisateurs sur les pratiques, et l'end-to-end security concerne la protection des données sur tout leur cycle de vie.",
      difficulte: 2,
      pourquoi: [
        "Correct : la collecte activée d'office viole « privacy as the default setting » — la protection maximale doit s'appliquer sans action de l'utilisateur.",
        "Faux : full functionality traite le faux dilemme fonctionnalité/vie privée, pas les réglages par défaut.",
        "Faux : la transparence concerne l'information de l'utilisateur, pas l'état initial des paramètres.",
        "Faux : end-to-end security concerne la protection sur tout le cycle de vie des données — hors sujet ici."
      ]
    },
    {
      q: "Lors d'un projet, l'équipe marketing affirme qu'il faut choisir entre une expérience utilisateur riche et la protection de la vie privée. Quel principe du Privacy by Design contredit DIRECTEMENT cette affirmation ?",
      choix: [
        "Proactive not reactive",
        "Privacy embedded into design",
        "Full functionality — positive-sum, not zero-sum",
        "Respect for user privacy"
      ],
      reponse: 2,
      explication: "Le principe « positive-sum » rejette les faux dilemmes du type vie privée CONTRE fonctionnalité : une bonne conception doit atteindre les deux objectifs à la fois, sans compromis artificiels. « Proactive not reactive » impose d'anticiper les atteintes avant qu'elles ne surviennent, « privacy embedded into design » d'intégrer la protection au cœur de l'architecture, et « respect for user privacy » de garder l'utilisateur au centre — aucun ne répond aussi directement à l'argument du compromis obligatoire.",
      difficulte: 3,
      pourquoi: [
        "Faux : « proactive not reactive » concerne l'anticipation des risques, pas le refus du compromis annoncé.",
        "Faux : piège de proximité — l'intégration dès la conception ne répond pas frontalement au dilemme présenté.",
        "Correct : « positive-sum, not zero-sum » affirme qu'expérience riche ET vie privée sont conciliables — il contredit directement le faux dilemme.",
        "Faux : principe chapeau trop général — il n'adresse pas spécifiquement l'arbitrage prétendu."
      ]
    },
    {
      q: "Votre organisation adopte une solution SaaS de gestion RH. Selon le modèle de responsabilité partagée, quelle responsabilité de sécurité reste TOUJOURS à la charge du client ?",
      choix: [
        "Le patching de l'application SaaS",
        "La sécurité physique des datacenters du fournisseur",
        "La classification des données et la gestion des identités et des accès des utilisateurs",
        "La redondance de l'infrastructure réseau du fournisseur"
      ],
      reponse: 2,
      explication: "Quel que soit le modèle de service, le client demeure responsable de SES données (classification, exactitude, conformité) et de la gestion de ses identités et habilitations : le fournisseur ne peut pas décider qui, chez le client, doit accéder à quoi. En SaaS, le patching applicatif, la sécurité physique et la redondance de l'infrastructure incombent au fournisseur. Retenez la formule : le CSP sécurise LE cloud, le client sécurise ce qui est DANS le cloud.",
      difficulte: 1,
      pourquoi: [
        "Faux : en SaaS, le patching applicatif incombe au fournisseur.",
        "Faux : la sécurité physique des datacenters reste toujours au fournisseur.",
        "Correct : la classification des données et la gestion des identités et accès demeurent TOUJOURS la responsabilité du client, quel que soit le modèle.",
        "Faux : la redondance de l'infrastructure relève du fournisseur."
      ]
    },
    {
      q: "Un analyste habilité Secret tente d'enregistrer une synthèse de travail dans un dossier partagé classé Confidentiel. Le système, conforme à Bell-LaPadula, bloque l'opération. Quelle règle est appliquée ?",
      choix: [
        "La simple security property (no read up)",
        "La star (*) property (no write down)",
        "La discretionary security property",
        "L'invocation property"
      ],
      reponse: 1,
      explication: "L'analyste tente d'écrire vers un niveau INFÉRIEUR à son habilitation : la star property l'interdit (no write down) afin d'empêcher toute fuite d'information classifiée vers des niveaux moins protégés. La simple security property interdit la lecture vers le haut, la discretionary property s'appuie sur une matrice d'accès et le besoin d'en connaître, et l'invocation property appartient au modèle Biba, pas à Bell-LaPadula.",
      difficulte: 2,
      pourquoi: [
        "Faux : la simple security property régit la LECTURE vers le haut — ici il s'agit d'une écriture ; piège lecture/écriture.",
        "Correct : la star (*) property interdit d'écrire vers un niveau inférieur (no write down) — c'est elle qui bloque l'enregistrement.",
        "Faux : la discretionary property applique une matrice d'accès et le besoin d'en connaître — pas la règle déclenchée ici.",
        "Faux : l'invocation property appartient au modèle Biba, pas à Bell-LaPadula."
      ]
    },
    {
      q: "Quelle est une limite RECONNUE du modèle Bell-LaPadula ?",
      choix: [
        "Il ne protège pas la confidentialité des données classifiées",
        "Il ne traite ni l'intégrité, ni la disponibilité, ni les canaux cachés (covert channels)",
        "Il est incompatible avec le contrôle d'accès obligatoire (MAC)",
        "Il autorise par défaut l'écriture vers les niveaux inférieurs"
      ],
      reponse: 1,
      explication: "Bell-LaPadula est un modèle exclusivement orienté confidentialité : il ignore l'intégrité (traitée par Biba et Clark-Wilson), la disponibilité, et surtout les canaux cachés par lesquels une information peut fuir en contournant les règles formelles. Il protège justement la confidentialité, il est au contraire l'archétype des systèmes MAC multiniveaux, et sa star property interdit précisément l'écriture vers le bas.",
      difficulte: 3,
      pourquoi: [
        "Faux : contraire à l'objet même du modèle — la confidentialité est précisément ce qu'il protège.",
        "Correct : Bell-LaPadula ignore l'intégrité, la disponibilité et les canaux cachés — limites documentées du modèle.",
        "Faux : Bell-LaPadula s'appuie précisément sur le contrôle d'accès obligatoire (MAC).",
        "Faux : la star property interdit justement l'écriture vers le bas — affirmation inverse de la règle."
      ]
    },
    {
      q: "Un système de commandement militaire empêche un processus de haute intégrité d'ingérer des données provenant d'un flux non fiable de moindre intégrité. Quelle propriété du modèle Biba est appliquée ?",
      choix: [
        "La simple integrity property (no read down)",
        "La star integrity property (no write up)",
        "La simple security property (no read up)",
        "La strong star property"
      ],
      reponse: 0,
      explication: "La simple integrity property interdit de LIRE des données d'un niveau d'intégrité inférieur : un processus critique ne doit pas se « contaminer » avec des données douteuses, comme on ne cuisine pas avec des ingrédients avariés. La star integrity property interdit d'écrire vers un niveau d'intégrité supérieur. Les deux dernières propositions appartiennent à Bell-LaPadula et concernent la confidentialité, pas l'intégrité.",
      difficulte: 2,
      pourquoi: [
        "Correct : la simple integrity property (no read down) empêche un processus de haute intégrité de lire des données de moindre intégrité.",
        "Faux : la star integrity property concerne l'ÉCRITURE vers une intégrité supérieure — ici il s'agit d'une lecture.",
        "Faux : la simple security property appartient à Bell-LaPadula (confidentialité) — mauvais modèle.",
        "Faux : la strong star property relève de Bell-LaPadula — hors modèle Biba."
      ]
    },
    {
      q: "Dans le modèle Biba, que stipule l'invocation property ?",
      choix: [
        "Un sujet ne peut pas lire un objet de moindre intégrité",
        "Un sujet ne peut pas invoquer (appeler) un sujet d'un niveau d'intégrité supérieur",
        "Un sujet doit invoquer une Transformation Procedure pour modifier un CDI",
        "Un sujet peut librement invoquer n'importe quel service du système"
      ],
      reponse: 1,
      explication: "L'invocation property complète les deux axiomes de Biba : un sujet ne peut pas solliciter un sujet placé à un niveau d'intégrité supérieur, ce qui l'empêcherait d'obtenir indirectement des privilèges ou des traitements de plus haute intégrité que les siens. La lecture vers le bas est couverte par la simple integrity property. Les Transformation Procedures appartiennent à Clark-Wilson, pas à Biba.",
      difficulte: 3,
      pourquoi: [
        "Faux : décrit la simple integrity property, pas l'invocation property — piège de substitution interne au modèle.",
        "Correct : l'invocation property interdit à un sujet d'invoquer un sujet d'un niveau d'intégrité supérieur.",
        "Faux : les Transformation Procedures appartiennent à Clark-Wilson — mauvais modèle.",
        "Faux : affirmation inverse — la règle restreint précisément les invocations."
      ]
    },
    {
      q: "Une banque exige que tout virement passe obligatoirement par l'application métier, qui vérifie les plafonds et journalise l'opération ; l'accès direct à la base de données est interdit aux utilisateurs. Quel modèle de sécurité cette architecture met-elle en œuvre ?",
      choix: ["Bell-LaPadula", "Brewer-Nash", "Clark-Wilson", "Take-Grant"],
      reponse: 2,
      explication: "C'est l'illustration classique de Clark-Wilson : les données protégées (CDI, ici les comptes) ne sont manipulées que par des programmes certifiés (les Transformation Procedures, ici l'application de virement) qui garantissent des transactions bien formées, et jamais directement par les utilisateurs — c'est le triplet sujet-programme-objet. Bell-LaPadula protège la confidentialité par niveaux, Brewer-Nash prévient les conflits d'intérêts et Take-Grant modélise le transfert de droits entre sujets.",
      difficulte: 2,
      pourquoi: [
        "Faux : Bell-LaPadula gère des niveaux de confidentialité — rien à voir avec des transactions contrôlées.",
        "Faux : Brewer-Nash prévient les conflits d'intérêts — hors sujet bancaire ici.",
        "Correct : accès aux données uniquement via l'application certifiée (TP), plafonds et journalisation = triplet Clark-Wilson et transactions bien formées.",
        "Faux : Take-Grant modélise la propagation des droits dans un graphe — hors sujet."
      ]
    },
    {
      q: "Quel modèle de sécurité définit huit règles primitives de protection régissant la création et la suppression sûres des sujets et des objets ainsi que l'attribution des droits d'accès ?",
      choix: ["Graham-Denning", "Biba", "Bell-LaPadula", "Sutherland"],
      reponse: 0,
      explication: "Graham-Denning est centré sur la gestion sûre des sujets, des objets et des droits : ses huit règles couvrent la création et la suppression de sujets et d'objets, ainsi que l'octroi, le transfert et la révocation des droits d'accès (lecture, octroi, suppression...). Biba et Bell-LaPadula sont des modèles à niveaux (intégrité et confidentialité), et Sutherland est un modèle d'intégrité fondé sur la non-interférence.",
      difficulte: 2,
      pourquoi: [
        "Correct : Graham-Denning définit huit règles primitives de création/suppression de sujets et objets et d'attribution de droits.",
        "Faux : Biba est un modèle d'intégrité par niveaux — pas de huit règles.",
        "Faux : Bell-LaPadula traite la confidentialité — hors sujet.",
        "Faux : Sutherland traite la non-interférence appliquée à l'intégrité — pas ces huit règles."
      ]
    },
    {
      q: "Le modèle Take-Grant utilise un graphe orienté pour déterminer comment les droits peuvent se propager d'un sujet à un autre. Quelles sont ses quatre règles fondamentales ?",
      choix: [
        "Read, write, execute, delete",
        "Take, grant, create, remove",
        "Create subject, create object, delete subject, delete object",
        "Simple, star, strong star, discretionary"
      ],
      reponse: 1,
      explication: "Take-Grant repose sur quatre opérations : take (prendre les droits d'un autre sujet), grant (accorder ses droits à un autre), create (créer de nouveaux droits) et remove (retirer des droits que l'on détient). Le graphe orienté permet d'analyser si un droit peut « fuir » vers un sujet non autorisé. Les autres propositions mélangent des permissions de systèmes de fichiers, les primitives de Graham-Denning et les propriétés de Bell-LaPadula.",
      difficulte: 3,
      pourquoi: [
        "Faux : read/write/execute/delete sont des droits de fichiers classiques — vocabulaire hors modèle.",
        "Correct : take, grant, create, remove — les quatre règles de propagation des droits du modèle Take-Grant.",
        "Faux : piège de proximité — ce sont quatre des huit règles de Graham-Denning.",
        "Faux : simple/star/strong star/discretionary sont les propriétés de Bell-LaPadula."
      ]
    },
    {
      q: "Un auditeur s'inquiète qu'un utilisateur non habilité puisse DÉDUIRE l'existence d'activités classifiées en observant les variations de comportement du système (temps de réponse, ressources occupées). Quel modèle de sécurité traite DIRECTEMENT ce problème ?",
      choix: ["Le modèle de non-interférence", "Le modèle Graham-Denning", "Le modèle Clark-Wilson", "Le modèle HRU"],
      reponse: 0,
      explication: "Le modèle de non-interférence exige que les actions des sujets de niveau supérieur n'aient AUCUN effet observable sur l'état du système vu par les sujets de niveau inférieur : ce qui se passe « en haut » ne doit pas interférer avec ce qui est perçu « en bas », neutralisant ainsi les fuites par inférence et les canaux cachés. Graham-Denning gère les droits, Clark-Wilson l'intégrité transactionnelle, et HRU analyse l'évolution des droits dans une matrice d'accès.",
      difficulte: 3,
      pourquoi: [
        "Correct : le modèle de non-interférence garantit que les actions des niveaux supérieurs ne sont pas observables, même indirectement, depuis les niveaux inférieurs.",
        "Faux : Graham-Denning régit la gestion des sujets et objets — il ne traite pas les fuites par observation.",
        "Faux : Clark-Wilson traite l'intégrité transactionnelle — hors sujet.",
        "Faux : HRU raisonne sur les droits d'une matrice d'accès, pas sur l'inférence comportementale."
      ]
    },
    {
      q: "Sur quel concept fondamental reposent les modèles Bell-LaPadula et Biba pour garantir qu'un système sûr le reste après chaque opération ?",
      choix: [
        "Le modèle de machine à états sécurisée (secure state machine)",
        "Le chiffrement de bout en bout",
        "La matrice de contrôle d'accès discrétionnaire",
        "La séparation physique des réseaux"
      ],
      reponse: 0,
      explication: "Un modèle de machine à états décrit le système comme une succession d'états reliés par des transitions : si chaque état est sûr et si chaque transition préserve la sécurité, alors le système est sûr par induction, quel que soit l'enchaînement des opérations. Bell-LaPadula et Biba sont tous deux des state machine models (et des modèles de flux d'information). Le chiffrement, les matrices DAC et la séparation physique sont des mécanismes, pas le fondement formel de ces modèles.",
      difficulte: 2,
      pourquoi: [
        "Correct : la machine à états sécurisée — chaque transition part d'un état sûr et aboutit à un état sûr ; c'est le socle de BLP et Biba.",
        "Faux : le chiffrement n'est pas le fondement formel de ces modèles — hors sujet.",
        "Faux : BLP et Biba sont des modèles MAC — la matrice discrétionnaire n'en est pas le socle.",
        "Faux : la séparation physique est une mesure d'architecture, pas un concept formel de modèle."
      ]
    },
    {
      q: "Avant de lancer un appel d'offres pour un pare-feu, une agence gouvernementale rédige un document décrivant ses exigences de sécurité selon le formalisme des Common Criteria. Comment s'appelle ce document ?",
      choix: ["Le Security Target (ST)", "Le Protection Profile (PP)", "La Target of Evaluation (TOE)", "Le certificat EAL"],
      reponse: 1,
      explication: "Le Protection Profile exprime les besoins de sécurité du CLIENT, indépendamment de tout produit : c'est le « je veux ». Les fournisseurs répondent ensuite avec un Security Target décrivant les prétentions de sécurité de leur produit (« voici ce que j'offre »), la TOE étant le produit évalué lui-même. L'EAL n'est pas un document d'exigences mais le niveau d'assurance atteint à l'issue de l'évaluation.",
      difficulte: 2,
      pourquoi: [
        "Faux : le Security Target est la réponse du FOURNISSEUR (« je fournis ») — inversion classique PP/ST.",
        "Correct : le Protection Profile formalise les exigences du CLIENT (« je veux ») en amont de l'appel d'offres.",
        "Faux : la TOE est le produit soumis à évaluation, pas un document d'exigences.",
        "Faux : l'EAL est le niveau d'assurance obtenu à l'issue de l'évaluation, pas un cahier des charges."
      ]
    },
    {
      q: "Un pare-feu certifié EAL4 et un antivirus certifié EAL5 sont proposés à votre organisation. Un collègue conclut que l'antivirus est « plus sûr » que le pare-feu. Pourquoi cette conclusion est-elle ERRONÉE ?",
      choix: [
        "Parce que EAL4 est en réalité supérieur à EAL5",
        "Parce que les EAL ne sont comparables qu'entre produits évalués contre des cibles de sécurité comparables, et mesurent la rigueur de l'évaluation, pas la sécurité absolue",
        "Parce que les antivirus ne peuvent pas être certifiés Common Criteria",
        "Parce que l'EAL ne s'applique qu'aux systèmes gouvernementaux"
      ],
      reponse: 1,
      explication: "Un EAL mesure la profondeur et la rigueur avec lesquelles les prétentions du Security Target ont été ÉVALUÉES — pas la robustesse intrinsèque du produit. Deux produits de catégories différentes, évalués contre des cibles de sécurité différentes, ne sont pas directement comparables : un EAL5 sur des prétentions modestes ne vaut pas un EAL4 sur des prétentions ambitieuses. Tout type de produit peut être évalué, et les Common Criteria s'appliquent bien au-delà du secteur gouvernemental.",
      difficulte: 3,
      pourquoi: [
        "Faux : l'échelle EAL est bien croissante — l'erreur du collègue est ailleurs.",
        "Correct : les EAL mesurent la rigueur de l'ÉVALUATION et ne se comparent qu'entre produits évalués contre des cibles de sécurité comparables.",
        "Faux : tout type de produit peut être évalué Common Criteria — affirmation inventée.",
        "Faux : les Common Criteria sont un standard international civil et commercial — pas réservé au gouvernement."
      ]
    },
    {
      q: "Dans les Common Criteria, quelle est la différence entre les SFR et les SAR ?",
      choix: [
        "Les SFR décrivent les fonctions de sécurité que la TOE doit fournir ; les SAR décrivent les mesures prises pour vérifier la conformité et la qualité de l'évaluation",
        "Les SFR concernent le matériel et les SAR le logiciel",
        "Les SFR sont rédigés par le client et les SAR par le laboratoire",
        "Les SFR s'appliquent aux EAL pairs et les SAR aux EAL impairs"
      ],
      reponse: 0,
      explication: "Les Security Functional Requirements (SFR) spécifient les fonctions de sécurité individuelles que le produit doit offrir (authentification, audit, chiffrement...). Les Security Assurance Requirements (SAR) décrivent comment le produit doit être évalué : rigueur du développement, tests, analyses de vulnérabilités. Les paquets de SAR déterminent l'EAL atteint. La distinction n'a rien à voir avec matériel/logiciel, avec l'auteur du document ou avec la parité des niveaux.",
      difficulte: 3,
      pourquoi: [
        "Correct : les SFR décrivent les fonctions de sécurité attendues de la TOE ; les SAR décrivent les mesures d'assurance de l'évaluation.",
        "Faux : la distinction matériel/logiciel est inventée — les deux catégories s'appliquent à toute TOE.",
        "Faux : répartition rédactionnelle fantaisiste — SFR et SAR proviennent des catalogues des Common Criteria.",
        "Faux : l'association aux EAL pairs/impairs est absurde — les SAR définissent précisément les paquets EAL."
      ]
    },
    {
      q: "Un ordinateur portable protégé par chiffrement intégral de disque ne libère sa clé de déchiffrement que si les mesures d'intégrité de la séquence de démarrage correspondent aux valeurs enregistrées dans les PCR du TPM. Quelle fonction du TPM est utilisée ?",
      choix: [
        "Le scellement (sealing) de la clé à un état de plateforme connu",
        "La génération de nombres aléatoires",
        "L'accélération du chiffrement réseau",
        "La signature de code du BIOS"
      ],
      reponse: 0,
      explication: "Le sealing (scellement) lie une clé aux valeurs des Platform Configuration Registers : la clé n'est descellée que si l'état mesuré du système (firmware, bootloader, configuration) correspond à l'état de confiance enregistré. Un démarrage altéré — par exemple par un bootkit — produit des mesures différentes et la clé reste inaccessible. Le TPM génère effectivement de l'aléa, mais ce n'est pas la fonction décrite ; il n'accélère pas le chiffrement réseau et ne signe pas le BIOS.",
      difficulte: 2,
      pourquoi: [
        "Correct : le sealing lie la clé aux mesures d'intégrité (PCR) — elle n'est libérée que si la plateforme est dans l'état attendu.",
        "Faux : techniquement vrai (le TPM génère de l'aléa) mais ce n'est pas la fonction décrite — piège de la capacité voisine.",
        "Faux : l'accélération du chiffrement réseau n'est pas un rôle du TPM.",
        "Faux : la signature de code du BIOS ne conditionne pas la libération de la clé décrite ici."
      ]
    },
    {
      q: "Avant d'autoriser un poste de travail à rejoindre le réseau, un serveur de contrôle demande au TPM du poste une preuve signée de l'intégrité de sa configuration de démarrage. Comment s'appelle ce mécanisme ?",
      choix: ["Le key escrow", "La remote attestation (attestation à distance)", "Le certificate pinning", "Le secure enclave provisioning"],
      reponse: 1,
      explication: "La remote attestation permet à un tiers de vérifier l'intégrité d'une plateforme : le TPM signe le condensé des mesures de démarrage (PCR) avec une clé d'attestation, et le serveur distant compare ces valeurs aux valeurs de référence attendues avant d'accorder l'accès. Le key escrow est la garde de clés par un tiers, le certificate pinning fige le certificat attendu d'un serveur TLS, et le provisioning d'enclave concerne les environnements d'exécution de confiance, pas la vérification du démarrage.",
      difficulte: 2,
      pourquoi: [
        "Faux : le key escrow est un dépôt de clés auprès d'un tiers — hors sujet.",
        "Correct : la remote attestation fournit une preuve signée par le TPM de l'intégrité de la séquence de démarrage à un vérificateur distant.",
        "Faux : le certificate pinning fige le certificat attendu côté client TLS — autre domaine.",
        "Faux : vocabulaire plausible mais ce terme ne désigne pas le mécanisme d'attestation décrit."
      ]
    },
    {
      q: "Une banque doit stocker les clés privées de signature de ses transactions dans un module certifié contre les intrusions physiques. Quelle norme certifie les exigences de sécurité des modules cryptographiques ?",
      choix: ["ISO 9001", "FIPS 140-3", "PCI DSS", "IEEE 802.1X"],
      reponse: 1,
      explication: "FIPS 140-3 (successeur de FIPS 140-2) définit les exigences de sécurité des modules cryptographiques, avec quatre niveaux croissants allant de composants de base jusqu'à la résistance active aux intrusions physiques avec effacement des secrets en cas de tentative d'ouverture. C'est la certification de référence pour les HSM. ISO 9001 concerne la qualité, PCI DSS la protection des données de cartes de paiement (qui exige d'ailleurs des modules validés FIPS), et 802.1X le contrôle d'accès réseau.",
      difficulte: 3,
      pourquoi: [
        "Faux : ISO 9001 certifie le management de la qualité, pas la sécurité des modules cryptographiques.",
        "Correct : FIPS 140-3 est LA norme de certification des modules cryptographiques, y compris la résistance aux intrusions physiques.",
        "Faux : PCI DSS exige des protections pour les données de paiement mais ne certifie pas les modules eux-mêmes — piège du référentiel voisin.",
        "Faux : IEEE 802.1X traite le contrôle d'accès réseau — hors sujet."
      ]
    },
    {
      q: "Plusieurs hôpitaux soumis aux mêmes exigences réglementaires décident de mutualiser une infrastructure cloud dédiée à leurs besoins communs, inaccessible au grand public. Quel modèle de déploiement cloud décrit cette situation ?",
      choix: ["Public cloud", "Private cloud", "Community cloud", "Hybrid cloud"],
      reponse: 2,
      explication: "Le community cloud est partagé par plusieurs organisations ayant des besoins communs — mission, exigences de sécurité, conformité réglementaire — comme des établissements de santé soumis aux mêmes obligations. Le cloud public est ouvert à tous les clients, le cloud privé est dédié à une seule organisation, et le cloud hybride combine plusieurs modèles reliés entre eux.",
      difficulte: 1,
      pourquoi: [
        "Faux : le cloud public est ouvert à tout client — contraire à l'exclusivité décrite.",
        "Faux : le cloud privé sert UNE seule organisation — ici plusieurs hôpitaux mutualisent.",
        "Correct : le community cloud mutualise une infrastructure entre organisations partageant les mêmes exigences (réglementaires, sectorielles).",
        "Faux : l'hybride combine plusieurs modèles de déploiement — il ne décrit pas ce partage communautaire."
      ]
    },
    {
      q: "Votre équipe déploie des fonctions serverless (FaaS) chez un fournisseur cloud. Quelles responsabilités de sécurité restent à la charge de votre organisation ?",
      choix: [
        "Le patching du système d'exploitation des serveurs d'exécution",
        "La sécurité du code des fonctions, la configuration des permissions (IAM) et la protection des données traitées",
        "La sécurité physique des datacenters",
        "La maintenance du runtime d'exécution des fonctions"
      ],
      reponse: 1,
      explication: "En FaaS, le fournisseur gère toute l'infrastructure d'exécution : serveurs, OS, runtime, mise à l'échelle. Le client reste responsable de ce qu'il déploie : la qualité et la sécurité de son code, la configuration fine des permissions accordées à chaque fonction (principe du moindre privilège dans l'IAM), la gestion des secrets et la protection des données. Une fonction sur-privilégiée ou un code vulnérable restent les risques majeurs du serverless.",
      difficulte: 2,
      pourquoi: [
        "Faux : en FaaS, l'OS des serveurs d'exécution est entièrement géré par le fournisseur.",
        "Correct : code des fonctions, permissions IAM et protection des données traitées restent au client — cœur de la responsabilité partagée en serverless.",
        "Faux : la sécurité physique relève toujours du fournisseur.",
        "Faux : le runtime d'exécution est maintenu par le fournisseur — c'est l'intérêt du FaaS."
      ]
    },
    {
      q: "Un audit révèle des dizaines de machines virtuelles inconnues, créées sans validation, non patchées et oubliées sur les hyperviseurs de l'entreprise. Comment s'appelle ce phénomène et quelle est la MEILLEURE réponse ?",
      choix: [
        "VM escape ; patcher l'hyperviseur",
        "VM sprawl ; instaurer un processus formel de provisionnement et de gestion du cycle de vie des VM",
        "Shadow IT ; bloquer tous les hyperviseurs",
        "Live migration ; désactiver le déplacement automatique des VM"
      ],
      reponse: 1,
      explication: "Le VM sprawl est la prolifération incontrôlée de machines virtuelles : créées en quelques clics, elles échappent à l'inventaire, ne sont pas patchées et élargissent silencieusement la surface d'attaque. La réponse est une mesure de GOUVERNANCE : processus formel de demande, d'approbation, d'inventaire et de décommissionnement des VM. Le VM escape est une attaque d'évasion (autre problème), bloquer les hyperviseurs est disproportionné, et la live migration est une fonctionnalité légitime de déplacement à chaud.",
      difficulte: 2,
      pourquoi: [
        "Faux : VM escape = évasion depuis une VM — mauvais diagnostic ; le patching ne traite pas la prolifération.",
        "Correct : c'est du VM sprawl — un problème de gouvernance qui se traite par un processus formel de provisionnement et de cycle de vie.",
        "Faux : le blocage total des hyperviseurs est disproportionné — il arrêterait la production ; réponse punitive, pas gouvernance.",
        "Faux : la live migration est un mécanisme légitime de déplacement de VM — hors sujet."
      ]
    },
    {
      q: "Quelle pratique réduit le MIEUX le risque d'introduire des vulnérabilités via des images de conteneurs en production ?",
      choix: [
        "N'utiliser que des images de base minimales de type distroless",
        "Scanner les images, n'utiliser que des images signées provenant d'un registre de confiance et les reconstruire régulièrement",
        "Analyser les hôtes de conteneurs avec un antivirus traditionnel",
        "Figer les versions d'images validées et ne plus jamais les reconstruire"
      ],
      reponse: 1,
      explication: "La chaîne d'approvisionnement des conteneurs est un vecteur d'attaque majeur : il faut scanner les images à la recherche de vulnérabilités et de secrets, exiger des images signées issues d'un registre privé ou de confiance, et les reconstruire régulièrement pour intégrer les correctifs des couches de base. Les images minimales réduisent la surface d'attaque mais ne garantissent ni la provenance ni l'absence de vulnérabilités — c'est une mesure partielle ; un antivirus sur l'hôte n'inspecte pas la chaîne d'approvisionnement des images ; et figer les images fige aussi leurs vulnérabilités.",
      difficulte: 2,
      pourquoi: [
        "Faux : vraie bonne pratique mais partielle — les images minimales ne garantissent ni la provenance ni l'absence de vulnérabilités ; trop étroit.",
        "Correct : scan + signature + registre de confiance + reconstruction régulière couvrent toute la chaîne d'approvisionnement des images.",
        "Faux : réponse de technicien inadaptée — un antivirus sur l'hôte n'inspecte pas la chaîne d'approvisionnement des images.",
        "Faux : figer les images fige aussi leurs vulnérabilités — faux arbitrage stabilité contre sécurité."
      ]
    },
    {
      q: "Un développeur a inclus les identifiants de la base de données de production directement dans l'image d'un conteneur publiée sur le registre interne. Quel est le risque PRINCIPAL et la MEILLEURE remédiation ?",
      choix: [
        "Risque limité au périmètre interne ; restreindre les droits d'accès au registre et conserver l'image telle quelle",
        "Exposition des secrets à quiconque accède à l'image ; utiliser un gestionnaire de secrets injectant les identifiants à l'exécution, et révoquer les identifiants exposés",
        "Exposition des secrets ; supprimer les identifiants dans une nouvelle couche de l'image et republier",
        "Exposition des secrets ; chiffrer l'image entière dans le registre"
      ],
      reponse: 1,
      explication: "Un secret embarqué dans une image est lisible par toute personne pouvant tirer l'image ou inspecter ses couches — y compris dans l'historique de construction. La bonne pratique est d'injecter les secrets à l'exécution via un gestionnaire dédié (vault) ou les mécanismes de secrets de l'orchestrateur, et de considérer les identifiants exposés comme compromis : ils doivent être révoqués et remplacés immédiatement. Restreindre l'accès au registre réduit l'exposition sans traiter la compromission déjà possible ; supprimer le secret dans une couche ultérieure le laisse lisible dans les couches précédentes de l'image ; et chiffrer l'image au repos ne protège pas les secrets une fois l'image tirée et exécutée, ni ne révoque les identifiants.",
      difficulte: 2,
      pourquoi: [
        "Faux : restreindre l'accès au registre réduit l'exposition mais ignore la compromission déjà possible — vrai mais pas prioritaire, le secret doit être révoqué.",
        "Correct : traite la cause (injection des secrets à l'exécution via un gestionnaire dédié) ET la conséquence (révocation des identifiants exposés).",
        "Faux : piège technique classique — supprimer le secret dans une nouvelle couche le laisse lisible dans les couches précédentes de l'image.",
        "Faux : réponse de technicien — chiffrer l'image au repos ne protège pas le secret une fois l'image tirée, et ne révoque rien."
      ]
    },
    {
      q: "Le fournisseur d'un automate industriel publie un correctif de sécurité pour une vulnérabilité critique. Quelle est la MEILLEURE approche pour déployer ce correctif sur l'environnement OT de production ?",
      choix: [
        "Le déployer immédiatement sur tous les automates, comme pour un poste bureautique",
        "Tester le correctif approuvé par le fabricant dans un environnement représentatif, puis le déployer lors d'une fenêtre de maintenance planifiée",
        "Ne jamais patcher les systèmes industriels",
        "Attendre la prochaine mise à niveau matérielle complète"
      ],
      reponse: 1,
      explication: "En environnement industriel, la disponibilité et la sûreté priment : un correctif appliqué à l'aveugle peut arrêter une chaîne de production ou créer un danger physique. La démarche correcte consiste à n'utiliser que des correctifs validés par le fabricant, à les tester sur un environnement de préproduction représentatif, puis à les déployer pendant une fenêtre de maintenance planifiée avec plan de retour arrière. Ne jamais patcher laisse la vulnérabilité exploitable ; attendre une mise à niveau lointaine aussi.",
      difficulte: 2,
      pourquoi: [
        "Faux : appliquer la méthode IT du déploiement immédiat risque d'arrêter le procédé industriel — la disponibilité OT l'interdit.",
        "Correct : test du correctif approuvé par le fabricant en environnement représentatif, puis déploiement en fenêtre de maintenance planifiée — l'équilibre OT.",
        "Faux : formulation absolue — ne jamais patcher laisse une vulnérabilité critique exploitable indéfiniment.",
        "Faux : hors délai — attendre la prochaine mise à niveau matérielle expose l'environnement pendant des années."
      ]
    },
    {
      q: "Dans un environnement ICS pilotant un procédé chimique, quelle priorité de sécurité distingue FONDAMENTALEMENT l'OT de l'IT traditionnel ?",
      choix: [
        "La confidentialité des données de production avant tout",
        "La sûreté des personnes et la disponibilité du procédé priment sur la confidentialité",
        "La non-répudiation des opérateurs avant tout",
        "L'authentification multifacteur avant tout"
      ],
      reponse: 1,
      explication: "En OT, l'ordre des priorités est inversé par rapport au triptyque IT classique : la sûreté (safety) des personnes et de l'environnement d'abord, puis la disponibilité et l'intégrité du procédé industriel, la confidentialité venant en dernier. Un arrêt intempestif ou une commande falsifiée peuvent provoquer des dommages physiques réels. La MFA et la non-répudiation sont des contrôles utiles, mais ne définissent pas la priorité fondamentale de l'OT.",
      difficulte: 2,
      pourquoi: [
        "Faux : inversion IT/OT — en environnement industriel, la confidentialité passe après la sûreté et la disponibilité.",
        "Correct : en ICS, la sûreté des personnes puis la disponibilité du procédé priment — c'est la différence fondamentale avec l'IT.",
        "Faux : la non-répudiation est utile mais n'est pas le critère structurant de l'OT — vrai mais pas prioritaire.",
        "Faux : le MFA est un contrôle parmi d'autres, pas la priorité fondamentale distinguant l'OT."
      ]
    },
    {
      q: "Un cryptanalyste peut soumettre les textes clairs de SON choix au système de chiffrement cible et observer les textes chiffrés produits. De quel type d'attaque s'agit-il ?",
      choix: ["Ciphertext-only", "Known plaintext", "Chosen plaintext", "Brute force"],
      reponse: 2,
      explication: "Dans une attaque à texte clair choisi (chosen plaintext), l'attaquant contrôle les entrées soumises au chiffrement et analyse les sorties pour en déduire la clé ou des faiblesses de l'algorithme — c'est une position plus favorable que le known plaintext, où il ne dispose que de paires clair/chiffré existantes qu'il n'a pas choisies. En ciphertext-only, il n'a que des textes chiffrés. Le brute force essaie toutes les clés sans exploiter de connaissance du clair.",
      difficulte: 2,
      pourquoi: [
        "Faux : en ciphertext-only, l'attaquant n'a AUCUN accès aux textes clairs — situation plus pauvre que celle décrite.",
        "Faux : en known plaintext, les paires clair/chiffré sont subies, pas choisies — piège de nuance sur le contrôle exercé.",
        "Correct : l'attaquant CHOISIT les clairs soumis et observe les chiffrés — définition du chosen plaintext.",
        "Faux : la force brute essaie des clés — elle ne suppose aucun accès au système de chiffrement."
      ]
    },
    {
      q: "Un attaquant a intercepté plusieurs messages chiffrés ainsi que la version en clair de certains d'entre eux, récupérée par ailleurs. Il tente d'en déduire la clé. Quel type d'attaque cryptanalytique mène-t-il ?",
      choix: ["Chosen ciphertext", "Known plaintext", "Ciphertext-only", "Side-channel"],
      reponse: 1,
      explication: "L'attaquant dispose de paires texte clair / texte chiffré qu'il n'a pas choisies lui-même : c'est l'attaque à texte clair connu (known plaintext), qui a par exemple permis de casser Enigma grâce aux formules répétitives des messages allemands. Le chosen ciphertext suppose qu'il peut faire déchiffrer des textes chiffrés de son choix, le ciphertext-only qu'il n'a que du chiffré, et le side-channel exploite des fuites physiques, pas le contenu des messages.",
      difficulte: 1,
      pourquoi: [
        "Faux : en chosen ciphertext, l'attaquant soumettrait des chiffrés de SON choix au déchiffrement — pas la situation décrite.",
        "Correct : il possède des paires clair/chiffré obtenues passivement, sans les avoir choisies — définition du known plaintext.",
        "Faux : en ciphertext-only, il n'aurait aucune version en clair — condition non remplie ici.",
        "Faux : le side-channel exploite des fuites physiques (temps, consommation) — hors sujet."
      ]
    },
    {
      q: "Pourquoi un chiffrement par simple substitution monoalphabétique est-il vulnérable, même avec une clé gardée secrète ?",
      choix: [
        "Parce que la clé est toujours trop courte",
        "Parce que l'analyse fréquentielle des lettres du texte chiffré révèle la correspondance avec les lettres fréquentes de la langue",
        "Parce qu'il ne fonctionne qu'avec l'alphabet latin",
        "Parce qu'il nécessite un canal sûr pour échanger la clé"
      ],
      reponse: 1,
      explication: "Une substitution monoalphabétique préserve la fréquence d'apparition des lettres : le symbole le plus fréquent du chiffré correspond très probablement au E en français ou en anglais, et de proche en proche l'analyse fréquentielle reconstitue tout l'alphabet de substitution. C'est la faiblesse historique des chiffres de César et consorts. La longueur de clé et l'échange de clé sont des problèmes distincts, et l'alphabet utilisé n'est pas la cause de la vulnérabilité.",
      difficulte: 1,
      pourquoi: [
        "Faux : la longueur de clé n'est pas la faiblesse propre de la substitution monoalphabétique.",
        "Correct : les fréquences des lettres de la langue subsistent dans le chiffré — l'analyse fréquentielle reconstitue la correspondance.",
        "Faux : la substitution fonctionne avec n'importe quel alphabet — argument hors sujet.",
        "Faux : l'échange de clé concerne tout chiffrement symétrique — ce n'est pas la vulnérabilité spécifique demandée ; trop général."
      ]
    },
    {
      q: "Un attaquant cherche deux documents différents produisant le même hash afin de substituer un contrat frauduleux à un contrat légitimement signé. Comment s'appelle cette attaque et sur quoi repose-t-elle ?",
      choix: [
        "L'attaque par dictionnaire, fondée sur des mots de passe courants",
        "L'attaque des anniversaires (birthday attack), fondée sur la probabilité élevée de collisions",
        "Le rainbow table, fondé sur des hashes précalculés",
        "Le pass the hash, fondé sur la réutilisation d'un hash d'authentification"
      ],
      reponse: 1,
      explication: "La birthday attack exploite le paradoxe des anniversaires : trouver DEUX entrées quelconques ayant le même hash (collision) est beaucoup plus facile que trouver une entrée correspondant à un hash donné — la difficulté tombe d'environ 2^n à 2^(n/2). L'attaquant fait signer le document légitime puis lui substitue le document frauduleux au hash identique : la signature reste valide. C'est pourquoi les fonctions à collisions connues comme MD5 et SHA-1 sont bannies des signatures.",
      difficulte: 2,
      pourquoi: [
        "Faux : l'attaque par dictionnaire vise les mots de passe courants — hors sujet.",
        "Correct : la birthday attack exploite la probabilité élevée de collisions (2^(n/2)) pour trouver deux documents au même hash.",
        "Faux : les rainbow tables inversent des hashes de mots de passe précalculés — autre usage du hachage.",
        "Faux : le pass the hash rejoue un hash d'authentification volé — hors contexte documentaire."
      ]
    },
    {
      q: "Lors de la négociation TLS, un attaquant en position d'interception force le client et le serveur à utiliser une version obsolète du protocole comportant des faiblesses connues. Comment s'appelle cette attaque ?",
      choix: ["Replay attack", "Downgrade attack", "Birthday attack", "Key clustering"],
      reponse: 1,
      explication: "L'attaque par repli (downgrade) manipule la négociation pour imposer une version ou une suite cryptographique affaiblie, ensuite exploitable — POODLE contre SSL 3.0 en est l'exemple emblématique. La parade consiste à désactiver les versions et suites obsolètes côté serveur et à utiliser les mécanismes anti-repli de TLS 1.3. Le replay rejoue des messages capturés, la birthday attack cherche des collisions de hash, et le key clustering est une faiblesse d'algorithme, pas une attaque de négociation.",
      difficulte: 2,
      pourquoi: [
        "Faux : le replay rejoue des messages capturés — il ne force pas le choix d'une version de protocole.",
        "Correct : forcer la négociation vers une version obsolète et vulnérable = downgrade attack.",
        "Faux : la birthday attack concerne les collisions de hachage — hors sujet.",
        "Faux : le key clustering est un phénomène de clés équivalentes — pas une attaque de négociation."
      ]
    },
    {
      q: "Un laboratoire parvient à extraire la clé d'une carte à puce en mesurant finement sa consommation électrique pendant les opérations de chiffrement. De quelle famille d'attaques s'agit-il ?",
      choix: [
        "Une attaque par canal auxiliaire (side-channel), ici l'analyse de consommation",
        "Une attaque par force brute",
        "Une attaque de type chosen plaintext",
        "Une attaque par ingénierie sociale"
      ],
      reponse: 0,
      explication: "L'analyse de consommation (simple ou différentielle, SPA/DPA) est une attaque par canal auxiliaire : elle n'attaque pas les mathématiques de l'algorithme mais son IMPLÉMENTATION physique, dont la consommation électrique varie selon les bits de la clé manipulés. Les parades incluent le lissage de la consommation, l'ajout de bruit, le masquage et les contre-mesures matérielles. Le brute force essaie des clés, le chosen plaintext exploite des paires clair/chiffré et l'ingénierie sociale manipule des humains.",
      difficulte: 3,
      pourquoi: [
        "Correct : mesurer la consommation électrique pendant le chiffrement est une attaque par canal auxiliaire (side-channel), ici l'analyse de puissance.",
        "Faux : la force brute essaie exhaustivement des clés — aucune mesure physique en jeu.",
        "Faux : chosen plaintext est un modèle cryptanalytique d'accès aux clairs — pas une mesure matérielle.",
        "Faux : l'ingénierie sociale manipule des humains — hors sujet."
      ]
    },
    {
      q: "Deux clés DIFFÉRENTES chiffrent le même message en produisant le même texte chiffré. Comment s'appelle ce phénomène et pourquoi est-il dangereux ?",
      choix: [
        "Le key stretching ; il ralentit le déchiffrement légitime",
        "Le key clustering ; il réduit l'espace de clés effectif et facilite la cryptanalyse",
        "La collision de hash ; il casse la non-répudiation",
        "Le key escrow ; il expose les clés à un tiers"
      ],
      reponse: 1,
      explication: "Le key clustering désigne le cas où deux clés distinctes produisent le même chiffré à partir du même clair : l'attaquant peut alors déchiffrer avec une clé différente de l'originale, ce qui réduit l'espace de recherche effectif et trahit une faiblesse de conception de l'algorithme. Le key stretching est une technique volontaire de renforcement des mots de passe, la collision de hash concerne les fonctions de hachage, et le key escrow est un dispositif organisationnel de garde de clés.",
      difficulte: 3,
      pourquoi: [
        "Faux : le key stretching est un renforcement volontaire de clés dérivées — il ne décrit pas ce phénomène.",
        "Correct : le key clustering (deux clés produisant le même chiffré) réduit l'espace de clés effectif et facilite la cryptanalyse.",
        "Faux : la collision concerne les fonctions de hachage, pas deux clés de chiffrement — piège de vocabulaire voisin.",
        "Faux : le key escrow est un dépôt volontaire de clés auprès d'un tiers — hors sujet."
      ]
    },
    {
      q: "Pour réduire la charge de ses serveurs OCSP et préserver la vie privée des clients, une organisation fait présenter par ses serveurs web une réponse OCSP signée et horodatée directement pendant la négociation TLS. Comment s'appelle ce mécanisme ?",
      choix: ["Certificate pinning", "OCSP stapling (agrafage OCSP)", "CRL delta", "Cross-certification"],
      reponse: 1,
      explication: "L'OCSP stapling fait porter la preuve de non-révocation par le serveur web lui-même : il obtient périodiquement une réponse OCSP signée par la CA et l'« agrafe » à la négociation TLS. Le client n'a plus à contacter le répondeur OCSP, ce qui réduit la latence, la charge de la PKI et la fuite d'informations de navigation vers la CA. Le pinning fige un certificat attendu, la delta CRL ne publie que les révocations récentes, et la cross-certification établit la confiance entre deux PKI.",
      difficulte: 3,
      pourquoi: [
        "Faux : le certificate pinning fige côté client le certificat attendu — autre mécanisme.",
        "Correct : l'OCSP stapling fait présenter par le serveur une réponse OCSP signée et horodatée pendant la négociation TLS — décharge les répondeurs et préserve la vie privée.",
        "Faux : la CRL delta est une liste différentielle toujours téléchargée par le client — pas ce mécanisme.",
        "Faux : la cross-certification établit la confiance entre PKI distinctes — hors sujet."
      ]
    },
    {
      q: "Une application de paiement doit vérifier EN TEMPS RÉEL le statut de révocation des certificats qu'elle accepte. Quel mécanisme est le PLUS adapté ?",
      choix: [
        "Télécharger la CRL complète une fois par semaine",
        "Interroger un répondeur OCSP à chaque validation",
        "Faire confiance au certificat tant qu'il n'est pas expiré",
        "Vérifier la date de signature du certificat"
      ],
      reponse: 1,
      explication: "OCSP (Online Certificate Status Protocol) interroge en ligne le statut d'un certificat précis et obtient une réponse fraîche et signée : c'est le mécanisme adapté à une vérification en temps réel. Une CRL téléchargée hebdomadairement peut laisser passer un certificat révoqué pendant plusieurs jours. Ignorer la révocation ou se contenter des dates de validité revient à accepter des certificats compromis avant leur expiration.",
      difficulte: 2,
      pourquoi: [
        "Faux : une CRL hebdomadaire laisse une fenêtre d'exposition de plusieurs jours — hors exigence temps réel.",
        "Correct : OCSP interroge le statut de révocation certificat par certificat, en temps réel — l'exigence du paiement.",
        "Faux : l'expiration ne dit rien de la révocation — un certificat volé reste « valide » jusqu'à sa date de fin ; raisonnement dangereux.",
        "Faux : la date de signature n'indique pas le statut actuel du certificat."
      ]
    },
    {
      q: "Pourquoi la root CA d'une PKI d'entreprise doit-elle être maintenue HORS LIGNE, ses émissions étant déléguées à des CA intermédiaires ?",
      choix: [
        "Pour satisfaire une exigence de certification Common Criteria applicable aux autorités racines",
        "Parce que la compromission de la root CA invaliderait la confiance de TOUS les certificats de la hiérarchie, sans remédiation simple",
        "Parce que les CA intermédiaires émettent plus vite, la root ne servant qu'à répartir la charge",
        "Parce qu'une root CA compromise se révoque facilement via la CRL de l'autorité supérieure"
      ],
      reponse: 1,
      explication: "La root CA est l'ancre de confiance de toute la hiérarchie : si sa clé privée est compromise, chaque certificat émis directement ou indirectement sous elle devient suspect, et la reconstruction de la PKI est extrêmement coûteuse. On la garde donc hors ligne, activée rarement et sous contrôles stricts (dual control, cérémonie de clés), les CA intermédiaires assurant l'émission quotidienne — leur compromission, elle, se répare par révocation. Aucune exigence Common Criteria n'impose ce choix ; la répartition de charge est un bénéfice accessoire, pas la raison de sécurité ; et une root, auto-signée, n'a précisément aucune autorité supérieure pour la révoquer — c'est tout le problème.",
      difficulte: 2,
      pourquoi: [
        "Faux : fausse attribution réglementaire — aucune exigence Common Criteria n'impose la root hors ligne.",
        "Correct : la root est l'ancre de confiance — sa compromission invaliderait TOUTE la hiérarchie sans remédiation simple, d'où sa mise hors ligne.",
        "Faux : bénéfice de performance accessoire — vrai en pratique mais ce n'est pas la raison de sécurité qui motive l'architecture.",
        "Faux : une root auto-signée n'a précisément AUCUNE autorité supérieure pour la révoquer — c'est tout le problème."
      ]
    },
    {
      q: "Un administrateur découvre que la clé privée du certificat TLS du portail client a été copiée sur un dépôt de code public. Quelle est la PREMIÈRE action à entreprendre ?",
      choix: [
        "Attendre l'expiration naturelle du certificat",
        "Demander immédiatement la révocation du certificat auprès de la CA, puis générer une nouvelle paire de clés et un nouveau certificat",
        "Supprimer discrètement le dépôt public",
        "Renouveler le certificat avec la même paire de clés"
      ],
      reponse: 1,
      explication: "Une clé privée exposée doit être considérée comme définitivement compromise : la priorité est de faire révoquer le certificat (publication en CRL/OCSP) pour que les clients cessent de lui faire confiance, puis de générer une NOUVELLE paire de clés et d'obtenir un nouveau certificat. Attendre l'expiration laisse l'attaquant usurper le portail ; supprimer le dépôt n'efface pas les copies déjà faites ; renouveler avec la même paire de clés reconduit la compromission.",
      difficulte: 2,
      pourquoi: [
        "Faux : attendre l'expiration laisse la fenêtre d'usurpation ouverte pendant des mois — inaction inacceptable.",
        "Correct : révoquer immédiatement, puis générer une NOUVELLE paire de clés et un nouveau certificat — traiter la clé comme compromise.",
        "Faux : illusion de confinement — supprimer le dépôt n'annule pas les copies déjà réalisées.",
        "Faux : renouveler avec la MÊME paire de clés reconduit la compromission — contresens cryptographique."
      ]
    },
    {
      q: "À l'entrée d'un datacenter, un sas à double porte ne laisse passer qu'une seule personne à la fois : la seconde porte ne s'ouvre qu'après fermeture de la première et vérification de l'identité. Contre quelle menace ce dispositif est-il PRINCIPALEMENT conçu ?",
      choix: [
        "L'incendie",
        "Le piggybacking et le tailgating (passage à plusieurs sur un seul badge)",
        "La coupure électrique",
        "L'écoute électromagnétique"
      ],
      reponse: 1,
      explication: "Le mantrap (sas de sécurité) impose un passage individuel : il empêche qu'une personne non autorisée se glisse derrière un porteur de badge, avec sa complicité (piggybacking) ou à son insu (tailgating). Certains sas pèsent même l'occupant pour détecter une double présence. Il ne joue aucun rôle contre le feu, les coupures électriques ou les émanations électromagnétiques, qui relèvent d'autres contrôles.",
      difficulte: 1,
      pourquoi: [
        "Faux : l'incendie relève des dispositifs d'évacuation et d'extinction — pas d'un sas de contrôle.",
        "Correct : le mantrap force le passage individuel avec vérification — parade directe au piggybacking et au tailgating.",
        "Faux : la coupure électrique n'est pas traitée par un sas — hors sujet.",
        "Faux : l'écoute électromagnétique relève de TEMPEST et du blindage — hors sujet."
      ]
    },
    {
      q: "Quel dispositif protège la façade d'un bâtiment contre une attaque par véhicule-bélier tout en restant discret dans l'aménagement urbain ?",
      choix: ["Des bollards (bornes anti-véhicules)", "Un éclairage à détection de mouvement", "Des caméras PTZ", "Un tourniquet à badge"],
      reponse: 0,
      explication: "Les bollards sont des bornes fixes ou escamotables conçues pour arrêter un véhicule lancé contre une entrée ou une vitrine ; ils s'intègrent discrètement sous forme de plots, jardinières ou bancs renforcés — l'esprit CPTED. L'éclairage et les caméras dissuadent et détectent mais n'arrêtent pas physiquement un véhicule, et le tourniquet contrôle le passage des piétons, pas des véhicules.",
      difficulte: 1,
      pourquoi: [
        "Correct : les bollards arrêtent physiquement un véhicule-bélier tout en s'intégrant discrètement à l'aménagement urbain.",
        "Faux : l'éclairage dissuade et révèle mais n'arrête pas un véhicule lancé — contrôle dissuasif, pas préventif physique.",
        "Faux : les caméras détectent et enregistrent sans bloquer — contrôle détectif face à une menace cinétique.",
        "Faux : le tourniquet canalise les piétons — sans effet sur un véhicule."
      ]
    },
    {
      q: "Le nouveau siège d'une entreprise canalise tous les visiteurs vers une entrée unique grâce à des haies, des jardinières et un dessin des allées qui décourage naturellement l'accès aux autres façades. Quel principe CPTED est appliqué ?",
      choix: ["Natural surveillance", "Natural access control", "Territorial reinforcement", "Target hardening"],
      reponse: 1,
      explication: "Le natural access control guide subtilement les personnes vers les points d'entrée voulus et restreint l'accès aux zones sensibles par l'aménagement lui-même : haies, jardinières, tracé des allées, différences de niveau. La natural surveillance maximise les occasions d'observer (éclairage, zones dégagées), le territorial reinforcement marque l'appropriation des lieux (signalétique, entretien), et le target hardening (serrures, barreaux) est justement l'approche traditionnelle que le CPTED complète.",
      difficulte: 2,
      pourquoi: [
        "Faux : la natural surveillance consiste à VOIR (visibilité, éclairage) — ici on canalise les déplacements.",
        "Correct : haies, jardinières et dessin des allées qui canalisent vers l'entrée unique = natural access control.",
        "Faux : le territorial reinforcement marque l'appartenance des lieux (signalétique, entretien) — autre principe.",
        "Faux : le target hardening est le renforcement mécanique (serrures, barreaux) — pas un aménagement naturel."
      ]
    },
    {
      q: "Pour la salle informatique d'un nouveau bâtiment, l'équipe projet veut un système d'extinction à eau qui ne se déclenche qu'après DEUX événements indépendants : une détection d'incendie qui remplit les canalisations, puis la fusion d'une tête d'extincteur. Quel système choisir ?",
      choix: ["Wet pipe", "Dry pipe", "Pre-action", "Deluge"],
      reponse: 2,
      explication: "Le système pre-action combine deux déclencheurs : les canalisations, normalement vides, ne se remplissent qu'à la détection d'un incendie, et l'eau n'est libérée que si la chaleur fait fondre une tête de sprinkler. Ce double verrou minimise le risque de décharge accidentelle sur les équipements — c'est LE choix recommandé pour les datacenters. Le wet pipe est toujours en eau (risque de fuite), le dry pipe n'a qu'un seul déclencheur, et le deluge libère de gros volumes d'eau, inadapté à l'informatique.",
      difficulte: 2,
      pourquoi: [
        "Faux : en wet pipe, l'eau est en permanence dans les canalisations — un seul déclenchement suffit ; risque de fuite au-dessus des serveurs.",
        "Faux : en dry pipe, l'air comprimé retarde l'eau mais UN seul événement déclenche le remplissage — pas de double condition.",
        "Correct : le pre-action exige DEUX événements indépendants — détection qui remplit les canalisations, puis fusion d'une tête ; idéal en salle informatique.",
        "Faux : le deluge inonde massivement par têtes ouvertes — l'inverse de la précaution recherchée."
      ]
    },
    {
      q: "Lors d'une coupure de courant, quel est le rôle EXACT de l'UPS par rapport au générateur de secours ?",
      choix: [
        "L'UPS alimente le site pendant plusieurs jours",
        "L'UPS assure une alimentation immédiate et de courte durée, le temps que le générateur démarre et se stabilise",
        "Le générateur démarre instantanément, l'UPS ne sert qu'au filtrage",
        "L'UPS et le générateur sont redondants et interchangeables"
      ],
      reponse: 1,
      explication: "L'UPS (onduleur) prend le relais instantanément sur batteries, mais pour une durée courte — typiquement quelques minutes : son rôle est de couvrir la transition jusqu'à ce que le générateur, qui a besoin de secondes ou de minutes pour démarrer et se stabiliser, reprenne la charge. Le générateur assure ensuite l'alimentation prolongée tant qu'il est ravitaillé en carburant. Les deux dispositifs sont complémentaires, pas interchangeables : l'un est immédiat et bref, l'autre différé et durable.",
      difficulte: 2,
      pourquoi: [
        "Faux : l'autonomie d'un UPS se compte en minutes, pas en jours — surestimation de sa capacité.",
        "Correct : l'UPS assure l'alimentation instantanée de courte durée, le temps que le générateur démarre et se stabilise — rôles complémentaires.",
        "Faux : inversion — un générateur met des dizaines de secondes à démarrer et se stabiliser ; l'UPS fait bien plus que du filtrage.",
        "Faux : ils ne sont pas interchangeables — l'un est immédiat et bref, l'autre différé et durable."
      ]
    },
    {
      q: "Dans une salle serveurs, quels sont les risques respectifs d'une humidité TROP BASSE et d'une humidité TROP ÉLEVÉE ?",
      choix: [
        "Trop basse : corrosion ; trop élevée : électricité statique",
        "Trop basse : électricité statique ; trop élevée : condensation et corrosion",
        "Trop basse : condensation au redémarrage des serveurs ; trop élevée : électricité statique",
        "Trop basse : aucun risque matériel ; trop élevée : simple perte de rendement du refroidissement"
      ],
      reponse: 1,
      explication: "Une humidité trop faible favorise l'accumulation d'électricité statique, dont les décharges peuvent détruire des composants électroniques ; une humidité trop élevée provoque condensation et corrosion des circuits. C'est pourquoi le HVAC maintient l'hygrométrie dans une plage contrôlée (autour de 40 à 60 %), en complément de la température. Les deux premières réponses fausses inversent les phénomènes physiques, et la dernière minimise un paramètre pourtant critique : l'air trop sec présente bien un risque matériel réel (décharges électrostatiques).",
      difficulte: 2,
      pourquoi: [
        "Faux : inversion des phénomènes — la corrosion vient de l'humidité ÉLEVÉE, la statique de l'air SEC.",
        "Correct : air trop sec = électricité statique (décharges destructrices) ; air trop humide = condensation et corrosion.",
        "Faux : inversion partielle plausible — la condensation est liée à l'humidité élevée, et la statique à l'air sec, pas l'inverse.",
        "Faux : minimisation — l'air trop sec présente un risque matériel bien réel (décharges électrostatiques), pas seulement un enjeu de rendement."
      ]
    },
    {
      q: "Le fournisseur d'un équipement critique annonce la date d'« end-of-support ». Pourquoi cette date représente-t-elle un jalon de risque MAJEUR dans le cycle de vie du système ?",
      choix: [
        "L'équipement cessera de fonctionner à cette date",
        "Après cette date, plus aucun correctif de sécurité ne sera publié : les nouvelles vulnérabilités resteront définitivement exploitables",
        "La licence deviendra automatiquement gratuite",
        "La garantie constructeur sera prolongée"
      ],
      reponse: 1,
      explication: "L'end-of-support (ou end-of-service-life) marque la fin des correctifs et du support du fournisseur : toute vulnérabilité découverte ensuite restera béante, faisant de l'équipement une cible permanente. L'end-of-life, en amont, marque la fin de la commercialisation. Le système doit être remplacé ou migré avant l'EOS ; à défaut, des mesures compensatoires (isolation, segmentation, surveillance renforcée) s'imposent. L'équipement ne s'arrête pas de lui-même, et les deux dernières réponses sont fantaisistes.",
      difficulte: 2,
      pourquoi: [
        "Faux : l'équipement continue de fonctionner après l'end-of-support — confusion avec une fin de service contractuelle.",
        "Correct : après l'end-of-support, plus aucun correctif n'est publié — toute nouvelle vulnérabilité reste définitivement exploitable ; jalon de risque majeur.",
        "Faux : la fin de support ne modifie pas le modèle de licence — affirmation fantaisiste.",
        "Faux : contraire de la réalité — la garantie et le support cessent, ils ne se prolongent pas."
      ]
    },
    {
      q: "Votre organisation retire du service une baie de stockage ayant contenu des données confidentielles. Quelle est la PREMIÈRE étape d'un décommissionnement sécurisé ?",
      choix: [
        "Revendre immédiatement les disques pour amortir l'investissement",
        "Identifier les données présentes et leur classification afin de déterminer la méthode de sanitisation exigée",
        "Formater rapidement les disques",
        "Retirer les étiquettes d'inventaire"
      ],
      reponse: 1,
      explication: "Le décommissionnement commence par l'inventaire des données et de leur classification : c'est elle qui dicte la méthode de sanitisation requise (clear, purge ou destroy selon NIST SP 800-88) et les exigences de traçabilité. Revendre ou simplement formater expose les données résiduelles — un formatage ne supprime pas réellement les contenus. La gestion des étiquettes vient en fin de processus, avec le certificat de destruction ou d'effacement.",
      difficulte: 2,
      pourquoi: [
        "Faux : revendre avant sanitisation expose les données résiduelles — la priorité financière passe avant la sécurité ; ordre inversé.",
        "Correct : identifier les données et leur classification d'abord — c'est elle qui dicte la méthode de sanitisation exigée (clear, purge, destroy).",
        "Faux : hors phase et insuffisant — un formatage ne supprime pas réellement les données ; agir avant d'avoir déterminé l'exigence.",
        "Faux : la gestion des étiquettes intervient en fin de processus — hors phase."
      ]
    },
    {
      q: "Le CISO d'un groupe industriel lance une migration Zero Trust sur trois ans. L'équipe réseau propose de commencer immédiatement par le déploiement d'agents ZTNA sur tous les postes, l'équipe datacenter par la microsegmentation des serveurs. Que devriez-vous faire EN PREMIER ?",
      choix: [
        "Déployer le ZTNA pour sécuriser les accès distants, vecteur d'attaque le plus visible",
        "Inventorier les actifs critiques et cartographier les flux afin de définir les surfaces à protéger, avant tout déploiement technique",
        "Microsegmenter le datacenter, là où résident les données les plus sensibles",
        "Désactiver le VPN existant pour forcer l'adoption rapide du nouveau modèle"
      ],
      reponse: 1,
      explication: "Une migration Zero Trust réussie part de la connaissance : inventaire des actifs, cartographie des flux et définition des surfaces de protection (protect surfaces). Sans cette étape, les politiques ZTNA et la microsegmentation seront construites sur des hypothèses fausses et bloqueront des flux légitimes — ou laisseront passer des flux dangereux. ZTNA et microsegmentation sont deux chantiers légitimes du programme, mais ils viennent APRÈS la cartographie ; couper le VPN sans solution de remplacement validée créerait une rupture de service et des contournements.",
      difficulte: 3,
      pourquoi: [
        "Faux : chantier légitime du programme mais hors phase — sans cartographie des flux, les politiques ZTNA seront fondées sur des hypothèses ; techniquement vrai mais prématuré.",
        "Correct : la démarche Zero Trust commence par l'inventaire des actifs et la cartographie des flux — c'est elle qui fonde toutes les politiques ultérieures.",
        "Faux : vrai objectif de la cible mais contextuellement faux en premier — microsegmenter sans connaître les flux casse la production ou laisse des angles morts.",
        "Faux : mesure brutale qui crée une rupture de service et pousse aux contournements — l'adoption forcée n'est pas une stratégie de migration."
      ]
    },
    {
      q: "Une DSI migre ses 40 sites tertiaires vers une architecture SASE. L'usine principale héberge un MES dont les échanges avec les automates exigent une latence de quelques millisecondes ; le point de présence cloud le plus proche ajoute 30 ms. L'intégrateur propose de basculer l'usine comme les autres sites pour homogénéiser. Quelle est la MEILLEURE recommandation du CISO ?",
      choix: [
        "Basculer l'usine avec les autres sites : l'homogénéité des politiques prime sur la latence",
        "Reporter l'ensemble du projet SASE jusqu'à ce que le fournisseur garantisse contractuellement la latence industrielle",
        "Adopter une architecture hybride : SASE pour les sites tertiaires, inspection et politiques appliquées localement pour les flux temps réel de l'usine",
        "Exclure définitivement l'usine du programme et conserver son architecture actuelle sans modification"
      ],
      reponse: 2,
      explication: "Le SASE apporte sa valeur aux utilisateurs et sites tertiaires, mais rediriger des flux industriels temps réel vers un point de présence cloud viole la contrainte de latence du procédé — donc sa disponibilité. Le bon arbitrage d'architecte est hybride : les politiques du programme s'appliquent partout, mais leur point d'application (enforcement) reste local pour les flux temps réel de l'usine (pare-feu OT local, segmentation sur site), tandis que les flux non temps réel de l'usine peuvent, eux, passer par le SASE. Homogénéiser au prix du procédé est une faute, tout reporter sacrifie les bénéfices sur 40 sites, et exclure l'usine sans rien faire la laisse hors gouvernance.",
      difficulte: 3,
      pourquoi: [
        "Faux : l'homogénéité est un vrai bénéfice d'exploitation mais contextuellement faux ici — elle sacrifie la contrainte de latence, donc la disponibilité du procédé.",
        "Faux : précaution en apparence prudente mais disproportionnée — elle prive 40 sites des bénéfices pour une contrainte qui ne concerne qu'un site ; hors arbitrage.",
        "Correct : l'arbitrage d'architecte — politiques uniformes, mais point d'application local pour les flux temps réel ; le SASE sert là où il apporte de la valeur.",
        "Faux : exclusion sans contrôle compensatoire ni gouvernance — l'usine resterait le maillon faible du dispositif."
      ]
    },
    {
      q: "Le CISO d'un groupe de santé dispose d'un budget limité pour engager la transition post-quantique. Les données génétiques des patients doivent rester confidentielles plusieurs décennies. Quelle démarche devriez-vous engager EN PREMIER ?",
      choix: [
        "Remplacer immédiatement tous les certificats et signatures TLS par des algorithmes post-quantiques",
        "Établir un inventaire cryptographique, instaurer la crypto-agilité et prioriser la protection des échanges de clés couvrant les données à longue durée de confidentialité",
        "Attendre que l'ensemble des éditeurs supportent nativement les nouveaux standards avant toute action",
        "Porter les clés RSA existantes à 8192 bits pour gagner le temps nécessaire"
      ],
      reponse: 1,
      explication: "Face à la menace Harvest Now, Decrypt Later, la priorité est le chiffrement en transit des données dont la confidentialité doit durer des décennies : des adversaires peuvent capturer ces flux dès aujourd'hui. La démarche rationnelle commence par l'inventaire cryptographique (où, quels algorithmes, quelles données), la crypto-agilité (pouvoir changer d'algorithme sans refonte) puis la migration priorisée des échanges de clés (par exemple en mode hybride). Les signatures sont moins urgentes : une signature ne peut pas être « déchiffrée plus tard », elle ne sera falsifiable qu'à l'arrivée de l'ordinateur quantique. Attendre expose les flux actuels à la capture, et grossir les clés RSA ne résiste pas à l'algorithme de Shor.",
      difficulte: 3,
      pourquoi: [
        "Faux : techniquement vrai qu'il faudra migrer les signatures, mais mauvaise priorité — une signature ne se « déchiffre pas plus tard » ; l'urgence HNDL porte sur les échanges de clés.",
        "Correct : inventaire, crypto-agilité, puis priorisation par durée de sensibilité des données — la démarche de gestion de risque post-quantique.",
        "Faux : attendre laisse capturer dès aujourd'hui des flux qui devront rester secrets des décennies — la menace HNDL rend l'attentisme perdant.",
        "Faux : fausse parade de technicien — l'algorithme de Shor casse RSA quelle que soit la taille de clé ; grossir les clés n'achète pas de résistance quantique."
      ]
    },
    {
      q: "Pour ses VPN inter-sites, une banque hésite entre un échange de clés purement post-quantique et un mode hybride combinant un algorithme classique éprouvé et un algorithme post-quantique. Quel est le MEILLEUR argument en faveur du mode hybride ?",
      choix: [
        "Le mode hybride offre de meilleures performances que l'algorithme post-quantique seul",
        "Le mode hybride élimine définitivement le risque quantique",
        "Les régulateurs bancaires interdisent l'usage exclusif d'algorithmes post-quantiques",
        "Si une faiblesse encore inconnue est découverte dans le jeune algorithme post-quantique, la composante classique éprouvée continue de protéger l'échange, et réciproquement"
      ],
      reponse: 3,
      explication: "Les algorithmes post-quantiques standardisés sont récents et ont un historique de cryptanalyse court — l'exemple de SIKE, cassé en 2022 après des années d'évaluation, l'a rappelé. Le mode hybride applique la défense en profondeur à la cryptographie : la session ne tombe que si les DEUX composantes sont cassées, ce qui couvre à la fois le risque quantique futur (composante PQC) et le risque de jeunesse des nouveaux algorithmes (composante classique). L'hybride coûte au contraire un peu plus cher en calcul, aucune protection n'est définitive, et l'argument réglementaire est inventé.",
      difficulte: 3,
      pourquoi: [
        "Faux : c'est l'inverse — combiner deux échanges de clés ajoute du calcul et de la taille de messages ; l'hybride se paie en performance.",
        "Faux : formulation absolue — aucun mécanisme n'élimine « définitivement » un risque ; l'hybride le réduit.",
        "Faux : fausse attribution réglementaire — aucune interdiction de ce type n'existe.",
        "Correct : c'est la défense en profondeur cryptographique — la session résiste tant que l'une des deux composantes tient, couvrant le risque quantique ET le risque de jeunesse des algorithmes PQC."
      ]
    },
    {
      q: "Un assureur veut exécuter sur un cloud public un traitement de données réglementées, avec une exigence contractuelle : le fournisseur cloud ne doit jamais pouvoir accéder aux données PENDANT leur traitement. Quelle architecture répond le MIEUX à cette exigence aujourd'hui ?",
      choix: [
        "Chiffrer les données au repos avec des clés apportées et gérées par l'assureur (BYOK)",
        "Exécuter le traitement dans des enclaves d'exécution de confiance (TEE), les clés n'étant livrées qu'après attestation à distance de l'enclave",
        "Imposer TLS 1.3 sur tous les flux entre les services du traitement",
        "Réécrire l'ensemble du traitement en chiffrement homomorphe complet"
      ],
      reponse: 1,
      explication: "L'exigence porte sur les données EN COURS D'UTILISATION (in use) : le chiffrement au repos et TLS protègent d'autres phases — au repos et en transit — mais les données sont en clair en mémoire pendant le calcul, accessibles à un hyperviseur ou à un administrateur du fournisseur. Le confidential computing répond précisément à ce besoin : le traitement s'exécute dans une enclave matérielle chiffrée, inaccessible à l'hôte, et les clés ne sont provisionnées qu'après vérification par attestation à distance que l'enclave exécute bien le code attendu. Le chiffrement homomorphe complet répond aussi sur le papier, mais son coût de calcul le rend irréaliste pour un traitement généraliste en production.",
      difficulte: 3,
      pourquoi: [
        "Faux : techniquement vrai et utile, mais hors phase — le BYOK protège les données AU REPOS ; pendant le calcul elles sont en clair en mémoire, visibles de l'hôte.",
        "Correct : le confidential computing protège les données EN COURS D'UTILISATION — enclave chiffrée inaccessible à l'hôte, clés livrées seulement après attestation à distance.",
        "Faux : hors phase également — TLS protège les données EN TRANSIT, pas la mémoire pendant le traitement.",
        "Faux : théoriquement exact mais irréaliste — le chiffrement homomorphe complet est trop coûteux pour un traitement généraliste en production ; vrai sur le papier, faux en contexte."
      ]
    },
    {
      q: "Une application de scoring s'exécute dans une enclave (TEE) sur une infrastructure mutualisée. L'architecte doit garantir que les clés de déchiffrement des données ne seront jamais remises à un code altéré ou à une fausse enclave. Quel contrôle répond DIRECTEMENT à cette exigence ?",
      choix: [
        "Signer le code applicatif dans la chaîne CI/CD avant tout déploiement",
        "Chiffrer la mémoire de l'enclave avec une clé propre au processeur",
        "Conditionner la livraison des clés à une attestation à distance réussie, vérifiant les mesures de l'enclave auprès du service de gestion de clés",
        "Stocker les clés chiffrées dans l'image de l'application déployée"
      ],
      reponse: 2,
      explication: "La question n'est pas de protéger la mémoire (le TEE le fait nativement) mais de décider À QUI livrer les secrets. La remote attestation répond exactement à ce besoin : l'enclave produit une preuve signée par le matériel de son identité et de ses mesures (code chargé, configuration), que le service de gestion de clés vérifie AVANT de provisionner les clés — un code altéré ou une enclave simulée échoue à l'attestation et ne reçoit rien. La signature de code en CI/CD est nécessaire mais ne prouve pas ce qui s'exécute réellement à l'instant T ; le chiffrement mémoire est une propriété du TEE, pas un mécanisme de livraison de secrets ; embarquer les clés dans l'image les expose à quiconque obtient l'image.",
      difficulte: 3,
      pourquoi: [
        "Faux : nécessaire mais insuffisant — la signature en CI/CD ne prouve pas ce qui s'exécute réellement dans l'enclave au moment de la demande de clés ; trop en amont.",
        "Faux : techniquement vrai mais déjà fourni nativement par le TEE — le chiffrement mémoire ne décide pas à qui livrer les secrets ; hors exigence.",
        "Correct : l'attestation à distance vérifie l'identité et les mesures de l'enclave avant tout provisionnement de clés — c'est le contrôle qui conditionne la confiance.",
        "Faux : contresens — des clés embarquées dans l'image sont exposées à quiconque tire l'image, exactement ce que l'on veut éviter."
      ]
    },
    {
      q: "Un opérateur d'importance vitale renouvelle son parc de serveurs et craint l'insertion d'implants matériels ou de firmwares piégés dans la chaîne d'approvisionnement. Quelle stratégie réduit le MIEUX ce risque ?",
      choix: [
        "Exiger l'audit du code source des firmwares de chaque composant avant tout achat",
        "N'acheter que du matériel fabriqué sur le territoire national",
        "Faire réaliser un test d'intrusion complet des serveurs après leur mise en production",
        "Combiner des fournisseurs qualifiés contractuellement, la vérification d'intégrité à la réception et le démarrage mesuré avec attestation (racine de confiance matérielle)"
      ],
      reponse: 3,
      explication: "Le risque de supply chain matérielle se traite par une combinaison de contrôles sur tout le cycle : exigences contractuelles et qualification des fournisseurs (traçabilité, canaux de livraison sûrs, transparence des composants), vérification d'intégrité à la réception, puis ancrage technique — secure boot et measured boot appuyés sur une racine de confiance matérielle, avec attestation permettant de détecter un firmware modifié avant la mise en service et pendant la vie du serveur. Auditer le code source de tous les firmwares est hors de portée réaliste (propriétaire, volumétrie), l'origine nationale ne garantit pas l'intégrité d'une chaîne logistique mondialisée, et un pentest après mise en production intervient trop tard et détecte mal les implants bas niveau.",
      difficulte: 3,
      pourquoi: [
        "Faux : exigence irréaliste — firmwares propriétaires et volumétrie rendent l'audit source exhaustif impossible ; la sur-exigence bloque l'achat sans réduire le risque.",
        "Faux : trop étroit et fausse garantie — l'origine nationale ne maîtrise ni les composants importés ni la logistique ; le risque est dans la chaîne, pas le drapeau.",
        "Faux : hors phase — après la mise en production, l'implant est déjà dans le périmètre, et un pentest applicatif détecte mal les compromissions de firmware.",
        "Correct : défense en profondeur sur toute la chaîne — qualification contractuelle, contrôle à la réception et measured boot avec attestation sur racine de confiance matérielle."
      ]
    },
    {
      q: "Dans une usine fonctionnant en continu, l'équipe sécurité veut déployer un IPS en coupure sur le réseau de contrôle pour bloquer les attaques ; l'ingénieur procédé refuse tout équipement susceptible d'interrompre les flux des automates. Quelle est la MEILLEURE décision d'architecture ?",
      choix: [
        "Imposer l'IPS en coupure : la sécurité prime sur les objections opérationnelles",
        "Déployer une surveillance passive hors bande (TAP/port mirror) avec détection spécialisée OT, appuyée sur la segmentation et des procédures de réponse",
        "Renoncer aux contrôles réseau et concentrer l'effort sur le durcissement des postes de supervision",
        "Planifier un arrêt mensuel du procédé pour exécuter des scans actifs de vulnérabilités"
      ],
      reponse: 1,
      explication: "En environnement OT, la disponibilité et la sûreté du procédé sont premières : un IPS en coupure introduit un point de défaillance et un risque de faux positif bloquant des ordres de contrôle — inacceptable sur un procédé continu. L'architecture adaptée est la surveillance passive hors bande via TAP ou port mirror, avec une détection comprenant les protocoles industriels, adossée à la segmentation (zones et conduits) et à des procédures de réponse : on obtient la visibilité sans créer de risque sur la production. Imposer l'IPS ignore la contrainte fondamentale de l'OT, tout miser sur les postes laisse le réseau de contrôle aveugle, et arrêter le procédé chaque mois pour des scans actifs coûte une disponibilité disproportionnée — les scans actifs sont d'ailleurs eux-mêmes risqués sur des automates.",
      difficulte: 3,
      pourquoi: [
        "Faux : posture de sécurité absolue qui ignore la priorité OT — un blocage à tort d'ordres de contrôle peut arrêter, voire endommager le procédé.",
        "Correct : la surveillance passive hors bande donne la visibilité sans aucun risque d'interruption — l'arbitrage sécurité/disponibilité propre à l'OT.",
        "Faux : trop étroit — durcir les postes est utile mais laisse le trafic du réseau de contrôle totalement aveugle ; abandon du contrôle réseau.",
        "Faux : coût de disponibilité disproportionné et technique inadaptée — les scans actifs peuvent eux-mêmes faire tomber des automates."
      ]
    },
    {
      q: "Une vulnérabilité exploitable à distance est publiée pour le contrôleur d'une turbine, en fin de vie et non patchable ; son remplacement qualifié est planifié dans dix-huit mois et un arrêt non planifié coûte plusieurs millions. Aucune atteinte aux personnes n'est en jeu. Que devriez-vous faire EN PREMIER ?",
      choix: [
        "Arrêter la turbine jusqu'au remplacement du contrôleur",
        "Faire accepter formellement le risque par la direction et attendre le remplacement planifié",
        "Avancer le remplacement du contrôleur sans attendre la qualification complète du nouveau matériel",
        "Déployer des contrôles compensatoires : segmentation renforcée, accès distant limité à un rebond avec MFA, et surveillance dédiée du contrôleur jusqu'au remplacement"
      ],
      reponse: 3,
      explication: "Quand un correctif est impossible et le remplacement lointain, la réponse managériale est la réduction du risque par contrôles compensatoires : isoler le contrôleur dans une zone dédiée aux flux strictement nécessaires, supprimer toute exposition distante directe (rebond durci avec MFA pour la maintenance), et surveiller spécifiquement les communications du contrôleur pour détecter toute tentative d'exploitation. L'arrêt de production est disproportionné puisque aucune vie n'est menacée ; l'acceptation formelle sans mesure de réduction laisse une vulnérabilité exploitable à distance ouverte dix-huit mois ; précipiter un remplacement non qualifié transfère le risque vers la sûreté et la disponibilité du procédé.",
      difficulte: 3,
      pourquoi: [
        "Faux : disproportionné — sans menace pour les personnes, sacrifier dix-huit mois de production excède largement le risque ; la vie humaine n'est pas en jeu ici.",
        "Faux : l'acceptation formelle est un outil légitime mais contextuellement faux seul — on n'accepte pas un risque exploitable à distance sans avoir d'abord tenté de le réduire.",
        "Faux : hors procédure — déployer un matériel non qualifié sur un procédé industriel déplace le risque vers la sûreté et la disponibilité.",
        "Correct : réduction du risque par contrôles compensatoires — isolation, accès distant durci, surveillance ciblée — en attendant le remplacement qualifié."
      ]
    },
    {
      q: "Au cours d'une migration Zero Trust, une application métier critique ne supporte ni SSO, ni MFA, ni protocoles d'authentification modernes ; son éditeur a disparu. L'équipe projet propose de l'exclure du programme. Quelle est la MEILLEURE décision du CISO ?",
      choix: [
        "Accepter l'exclusion et documenter l'application comme exception permanente au programme",
        "Placer l'application derrière un proxy d'accès qui impose en frontal l'authentification moderne et le MFA, et isoler l'application dans un segment dédié",
        "Lancer immédiatement la réécriture complète de l'application avant de poursuivre la migration",
        "Imposer le MFA à l'ouverture de session des postes de travail qui accèdent à l'application"
      ],
      reponse: 1,
      explication: "Le modèle Zero Trust prévoit précisément ce cas : quand la ressource ne peut pas porter elle-même les contrôles, on les déplace devant elle. Un proxy d'accès applicatif (composante ZTNA) impose l'authentification moderne, le MFA et les politiques d'accès en frontal, pendant que la segmentation isole l'application pour que seul le proxy puisse l'atteindre. L'exclusion documentée laisse un accès non contrôlé au cœur du système d'information — une exception « permanente » est une dette de sécurité, pas une décision. La réécriture est peut-être la cible à long terme mais ne protège rien pendant des années, et le MFA du poste de travail ne contrôle pas l'accès à l'application elle-même : n'importe quel processus du poste authentifié peut l'atteindre.",
      difficulte: 3,
      pourquoi: [
        "Faux : une exception « permanente » sans contrôle compensatoire est une acceptation déguisée — l'application resterait un accès non contrôlé au SI.",
        "Correct : déplacer les contrôles devant la ressource — proxy imposant authentification moderne et MFA, plus isolation réseau — est le patron Zero Trust pour le legacy.",
        "Faux : techniquement vrai comme cible à long terme, mais hors délai et hors budget — la réécriture ne protège rien pendant des années ; elle ne remplace pas un contrôle immédiat.",
        "Faux : trop étroit — le MFA du poste contrôle la session locale, pas l'accès à l'application ; tout processus du poste authentifié atteindrait encore l'application."
      ]
    }
    ,
    {"q": "Votre organisation migre son ERP critique vers un IaaS public. L'architecte propose de répliquer à l'identique l'architecture on-premise (pare-feu virtuels en périmètre, VLAN simulés, bastion unique). Un audit de conception relève que ce « lift-and-shift » du modèle de sécurité ignore les spécificités du cloud. Quelle lacune est la PLUS critique à corriger en premier ?", "choix": ["L'absence de gestion des identités et des droits IAM cloud (rôles sur-privilégiés, clés d'API non gouvernées), nouveau périmètre réel de l'environnement", "Le choix de l'éditeur de pare-feu virtuel, qui devrait être le même que celui du datacenter", "L'absence de chiffrement des disques virtuels, que le fournisseur n'active jamais par défaut", "Le dimensionnement des instances, qui risque de faire dériver les coûts"], "reponse": 0, "explication": "Dans le cloud, l'identité EST le périmètre : la majorité des compromissions cloud passent par des identités et clés mal gouvernées, pas par le réseau. Répliquer le modèle périmétrique on-premise laisse ce plan de contrôle sans gouvernance.", "pourquoi": ["Correct : le plan de contrôle IAM (rôles, clés, fédération) est la surface d'attaque dominante du IaaS — c'est la rupture de modèle que le lift-and-shift ignore.", "Réponse de technicien : l'homogénéité d'éditeur est un confort opérationnel, pas une lacune de sécurité structurelle.", "Factuellement faible : la plupart des IaaS chiffrent les volumes par défaut — et ce n'est pas la rupture de modèle en cause.", "Hors périmètre : la dérive des coûts est un enjeu FinOps, pas la lacune de sécurité la plus critique."], "difficulte": 3},
    {"q": "Un fabricant intègre un module cryptographique certifié FIPS 140-3 niveau 2 dans un produit destiné à un client exigeant le niveau 3. Le chef de produit propose « d'ajouter du code de détection d'intrusion logicielle » pour combler l'écart. Que devez-vous expliquer EN PREMIER à la direction ?", "choix": ["Le niveau 3 exige des mécanismes physiques de résistance et de réponse aux intrusions validés lors de la certification du module : on ne « surclasse » pas un module par du logiciel ajouté, il faut un module certifié au bon niveau", "Le code additionnel devra être développé selon un cycle sécurisé pour être recevable", "Le niveau 2 est suffisant en pratique car le produit sera déployé dans des locaux sécurisés", "Il faut négocier avec le client un avenant au contrat pour accepter le niveau 2"], "reponse": 0, "explication": "Les niveaux FIPS 140-3 s'obtiennent par certification du module dans son ensemble (exigences physiques croissantes : preuves d'effraction niveau 2, résistance/réponse niveau 3). Un ajout logiciel externe ne modifie pas le niveau certifié.", "pourquoi": ["Correct : le niveau est une propriété certifiée du module, incluant des exigences physiques — l'écart ne se comble pas par du code applicatif.", "Techniquement vrai mais hors sujet : la qualité du code additionnel ne change rien au niveau de certification du module.", "Piège du contournement : substituer son propre jugement à l'exigence du client sans analyse contractuelle ni de risque n'est pas une position défendable.", "Prématuré : renégocier est une option commerciale de repli, pas la première explication due à la direction sur la nature de l'écart."], "difficulte": 3}
  ],
  quizEn: [
    {
      q: "A security architect designs a network so that if the perimeter firewall is misconfigured, an intrusion prevention system, internal segmentation, and host-based controls still protect critical assets. Which security principle is being applied?",
      choix: ["Least privilege", "Defense in depth", "Separation of duties", "Fail securely"],
      reponse: 1,
      explication: "La défense en profondeur consiste à empiler plusieurs contrôles indépendants en série, afin que la défaillance de l'un d'eux (ici le pare-feu périmétrique) n'expose pas les actifs : IPS, segmentation interne et contrôles sur les hôtes prennent le relais. Le moindre privilège limite les droits accordés, la séparation des tâches répartit les fonctions critiques entre plusieurs personnes, et fail securely concerne le comportement d'un composant en cas de panne — aucun ne décrit cet empilement de couches.",
      difficulte: 1,
      pourquoi: [
        "Faux : least privilege limite les droits accordés — il ne décrit pas l'empilement de contrôles indépendants.",
        "Correct : plusieurs contrôles en série (IPS, segmentation, contrôles hôtes) prenant le relais du pare-feu défaillant = defense in depth.",
        "Faux : la separation of duties répartit des fonctions critiques entre personnes — hors sujet architecture.",
        "Faux : fail securely décrit le comportement sûr d'un composant en panne, pas la superposition de couches."
      ]
    },
    {
      q: "During a design review, an engineer argues that a proposed authentication module is too complex to be properly analyzed and tested, and should be simplified. Which secure design principle supports this position?",
      choix: ["Economy of mechanism (keep it simple)", "Complete mediation", "Open design", "Psychological acceptability"],
      reponse: 0,
      explication: "L'économie de mécanisme (keep it simple) affirme que plus une conception est simple, plus elle est facile à analyser, à tester et à sécuriser : la complexité multiplie les erreurs et les surfaces d'attaque. Complete mediation exige la vérification de chaque accès, open design que la sécurité ne repose pas sur le secret de la conception, et psychological acceptability que les contrôles restent utilisables — aucun ne vise directement la réduction de la complexité.",
      difficulte: 2,
      pourquoi: [
        "Correct : economy of mechanism — un mécanisme simple est analysable, testable et donc plus sûr ; c'est l'argument de l'ingénieur.",
        "Faux : complete mediation exige la vérification de chaque accès — sans lien avec la complexité du module.",
        "Faux : open design affirme que la sécurité ne doit pas reposer sur le secret de conception — autre principe.",
        "Faux : psychological acceptability concerne l'utilisabilité des contrôles pour les utilisateurs — hors sujet."
      ]
    },
    {
      q: "A shared temporary directory allows information to leak between processes belonging to different users. Which secure design principle was violated?",
      choix: ["Least common mechanism", "Secure defaults", "Zero Trust", "Abstraction"],
      reponse: 0,
      explication: "Le principe du least common mechanism recommande de minimiser les mécanismes et ressources PARTAGÉS entre utilisateurs ou processus, car chaque élément commun (répertoire temporaire, cache, canal partagé) est un vecteur potentiel de fuite d'information entre domaines de sécurité. Secure defaults concerne la configuration initiale, Zero Trust la vérification systématique des requêtes, et l'abstraction masque les détails d'implémentation — aucun ne traite spécifiquement le partage de ressources.",
      difficulte: 3,
      pourquoi: [
        "Correct : un mécanisme partagé entre utilisateurs (répertoire commun) devient un canal de fuite — violation du least common mechanism.",
        "Faux : secure defaults concerne les configurations initiales sûres — pas le partage de ressources.",
        "Faux : Zero Trust est une posture d'accès réseau/identité — il ne vise pas les mécanismes partagés internes.",
        "Faux : l'abstraction est un concept de conception (masquer les détails) — pas le principe violé ici."
      ]
    },
    {
      q: "After stealing one employee's credentials, an attacker moved laterally across the flat corporate network and reached the finance servers. Which architectural approach would BEST have limited this attack?",
      choix: [
        "A stronger perimeter firewall",
        "A Zero Trust architecture with microsegmentation and continuous verification of every request",
        "Longer password requirements for all users",
        "Full-disk encryption on all servers"
      ],
      reponse: 1,
      explication: "Le problème décrit est la confiance implicite accordée à tout ce qui se trouve DÉJÀ dans le réseau : une architecture Zero Trust avec microsegmentation authentifie et autorise chaque requête, quel que soit son point d'origine, ce qui bloque le mouvement latéral même après un vol d'identifiants. Renforcer le périmètre n'aide pas une fois l'attaquant entré, des mots de passe plus longs n'empêchent pas l'usage d'identifiants volés valides, et le chiffrement de disque ne protège pas des accès effectués via des sessions légitimes.",
      difficulte: 2,
      pourquoi: [
        "Faux : renforcer le périmètre ne traite pas le mouvement latéral INTERNE — c'est le modèle dont l'échec est décrit.",
        "Correct : Zero Trust avec microsegmentation et vérification continue bloque le mouvement latéral, même avec des identifiants volés.",
        "Faux : la longueur des mots de passe n'arrête pas l'usage d'identifiants déjà volés — contrôle hors cible.",
        "Faux : le chiffrement de disque protège les données au repos — inopérant face à un attaquant authentifié ; réponse de technicien."
      ]
    },
    {
      q: "A multinational with thousands of remote workers wants identity-based access policies enforced in the cloud, close to each user, combining SD-WAN, ZTNA, CASB, and firewall-as-a-service. Which architecture matches this requirement?",
      choix: ["SASE (Secure Access Service Edge)", "DMZ with screened subnet", "Hub-and-spoke VPN concentrators", "Air-gapped network"],
      reponse: 0,
      explication: "Le SASE fournit les fonctions réseau et sécurité (SD-WAN, ZTNA, CASB, SWG, FWaaS) comme un service cloud unifié appliqué au plus près de l'utilisateur, avec des politiques fondées sur l'identité — exactement le besoin d'une organisation distribuée. La DMZ et les concentrateurs VPN relèvent du modèle périmétrique traditionnel qui rapatrie le trafic, et l'air gap isole physiquement un réseau, ce qui est incompatible avec le télétravail de masse.",
      difficulte: 2,
      pourquoi: [
        "Correct : SASE = SD-WAN + ZTNA + CASB + FWaaS délivrés depuis le cloud, près de chaque utilisateur — la définition du besoin.",
        "Faux : la DMZ est une architecture périmétrique de datacenter — inadaptée à des milliers de télétravailleurs.",
        "Faux : les concentrateurs VPN rapatrient le trafic vers le centre — le backhauling que l'on cherche à éliminer.",
        "Faux : l'air gap isole physiquement — incompatible avec le travail à distance."
      ]
    },
    {
      q: "In a Bell-LaPadula system, a user cleared at Secret attempts to append information to an Unclassified document. The system denies the operation. Which rule causes the denial?",
      choix: [
        "Simple security property",
        "Star (*) property",
        "Simple integrity property",
        "Invocation property"
      ],
      reponse: 1,
      explication: "Écrire vers un niveau de classification INFÉRIEUR est interdit par la star property (« no write down ») : elle empêche qu'un sujet habilité fasse fuir, volontairement ou non, de l'information classifiée vers des conteneurs moins protégés. La simple security property interdit la lecture vers le haut, tandis que la simple integrity property et l'invocation property appartiennent au modèle Biba, qui traite l'intégrité et non la confidentialité.",
      difficulte: 2,
      pourquoi: [
        "Faux : la simple security property régit la LECTURE vers le haut — ici c'est une écriture vers le bas.",
        "Correct : la star (*) property interdit d'écrire vers un niveau inférieur (no write down) — c'est elle qui bloque.",
        "Faux : la simple integrity property appartient à Biba — mauvais modèle.",
        "Faux : l'invocation property appartient à Biba — hors modèle Bell-LaPadula."
      ]
    },
    {
      q: "Which statement BEST describes the purpose of the Bell-LaPadula simple security property?",
      choix: [
        "A subject cannot read information classified above its clearance level",
        "A subject cannot write to a lower classification level",
        "A subject cannot execute programs of higher integrity",
        "A subject cannot create objects at its own level"
      ],
      reponse: 0,
      explication: "La simple security property énonce « no read up » : un sujet ne peut pas lire d'objets classés au-dessus de son niveau d'habilitation, ce qui constitue la protection de base de la confidentialité multiniveaux. Le « no write down » est la star property, et les questions d'intégrité ou d'invocation relèvent de Biba. La création d'objets n'est pas restreinte par cette propriété.",
      difficulte: 1,
      pourquoi: [
        "Correct : la simple security property = no read up — pas de lecture au-dessus de sa clearance.",
        "Faux : l'interdiction d'écrire vers le bas décrit la star property — piège d'inversion.",
        "Faux : l'intégrité des programmes relève de Biba — hors modèle.",
        "Faux : règle inventée — aucune propriété de BLP ne limite la création d'objets ainsi."
      ]
    },
    {
      q: "Which pair of rules correctly summarizes the Biba integrity model?",
      choix: [
        "No read up, no write down",
        "No read down, no write up",
        "No read down, no write down",
        "No read up, no write up"
      ],
      reponse: 1,
      explication: "Biba protège l'intégrité en inversant la logique de Bell-LaPadula : la simple integrity property interdit de lire des données de moindre intégrité (no read down, pour ne pas se contaminer) et la star integrity property interdit d'écrire vers une intégrité supérieure (no write up, pour ne pas corrompre). « No read up, no write down » est la combinaison de Bell-LaPadula pour la confidentialité ; les deux autres combinaisons ne correspondent à aucun modèle standard.",
      difficulte: 1,
      pourquoi: [
        "Faux : no read up / no write down est le couple de Bell-LaPadula — inversion classique confidentialité/intégrité.",
        "Correct : Biba = no read down, no write up — l'exact miroir de Bell-LaPadula, au service de l'intégrité.",
        "Faux : mélange incohérent des règles des deux modèles.",
        "Faux : mélange incohérent — ce couple n'appartient à aucun des deux modèles."
      ]
    },
    {
      q: "A brokerage firm wants to guarantee that customer account records can only be modified through certified application programs enforcing well-formed transactions, with all changes audited. Which security model BEST describes this design?",
      choix: ["Bell-LaPadula", "Clark-Wilson", "Brewer-Nash", "Non-interference"],
      reponse: 1,
      explication: "Clark-Wilson impose le triplet sujet-programme-objet : les données protégées (CDI) ne sont modifiables qu'à travers des Transformation Procedures certifiées, qui garantissent des transactions bien formées, avec vérification par des IVP et séparation des tâches. C'est le modèle d'intégrité commerciale par excellence. Bell-LaPadula traite la confidentialité multiniveaux, Brewer-Nash les conflits d'intérêts, et la non-interférence l'absence d'influence observable entre niveaux.",
      difficulte: 2,
      pourquoi: [
        "Faux : Bell-LaPadula gère la confidentialité par niveaux — il ne contraint pas les modifications à des programmes certifiés.",
        "Correct : modifications uniquement via des programmes certifiés imposant des transactions bien formées, avec audit = Clark-Wilson.",
        "Faux : Brewer-Nash prévient les conflits d'intérêts entre clients concurrents — hors sujet.",
        "Faux : la non-interférence traite l'observation entre niveaux — pas l'intégrité transactionnelle."
      ]
    },
    {
      q: "An audit firm serves two competing airlines. Once a consultant accesses Airline A's files, the system dynamically prevents any access to Airline B's files. Which security model is implemented?",
      choix: ["Brewer-Nash (Chinese Wall)", "Graham-Denning", "Biba", "Take-Grant"],
      reponse: 0,
      explication: "Brewer-Nash, ou « ethical wall », a été conçu pour les cabinets servant des clients concurrents : les droits d'accès évoluent DYNAMIQUEMENT en fonction de l'historique de consultation de l'utilisateur, afin de prévenir tout conflit d'intérêts. Graham-Denning définit huit règles de gestion des sujets, objets et droits, Biba protège l'intégrité par niveaux, et Take-Grant analyse la propagation des droits dans un graphe — aucun n'offre cette restriction dynamique.",
      difficulte: 1,
      pourquoi: [
        "Correct : le mur dynamique fondé sur l'historique d'accès (Airline A consultée, Airline B bloquée) = Brewer-Nash (Chinese Wall).",
        "Faux : Graham-Denning définit huit règles de gestion des sujets/objets — pas de droits dynamiques par conflit d'intérêts.",
        "Faux : Biba protège l'intégrité par niveaux — hors sujet.",
        "Faux : Take-Grant modélise la propagation des droits — pas les conflits d'intérêts."
      ]
    },
    {
      q: "A certifier is concerned that actions performed by high-level processes could be observed indirectly by lower-level subjects through changes in system behavior. Which security model directly addresses this concern?",
      choix: ["Non-interference model", "Clark-Wilson", "Graham-Denning", "Bell-LaPadula discretionary property"],
      reponse: 0,
      explication: "Le modèle de non-interférence exige que l'activité des sujets de niveau supérieur ne produise AUCUN effet observable sur ce que perçoivent les sujets de niveau inférieur : il vise précisément les fuites indirectes, l'inférence et les canaux cachés que les règles d'accès classiques ne couvrent pas. Clark-Wilson traite l'intégrité transactionnelle, Graham-Denning la gestion des droits, et la discretionary property de Bell-LaPadula repose sur une matrice d'accès — sans traiter l'observabilité indirecte.",
      difficulte: 3,
      pourquoi: [
        "Correct : le modèle de non-interférence garantit que les actions des niveaux hauts ne sont pas observables, même indirectement, par les niveaux bas.",
        "Faux : Clark-Wilson traite l'intégrité transactionnelle — hors sujet.",
        "Faux : Graham-Denning régit la création/suppression de sujets et objets — hors sujet.",
        "Faux : la discretionary property de BLP applique le need-to-know — elle ne traite pas les fuites par observation."
      ]
    },
    {
      q: "Under the Common Criteria, which document contains the vendor's claims about the security functionality implemented in the product being evaluated?",
      choix: ["Protection Profile", "Security Target", "Evaluation Assurance Level", "Security Functional Requirement catalog"],
      reponse: 1,
      explication: "Le Security Target est rédigé par le fournisseur : il décrit les prétentions de sécurité de sa TOE, c'est-à-dire les fonctions implémentées et le périmètre évalué. Le Protection Profile exprime au contraire les besoins du client, l'EAL est le niveau d'assurance atteint à l'issue de l'évaluation, et le catalogue de SFR est la bibliothèque normalisée d'exigences fonctionnelles dans laquelle PP et ST puisent.",
      difficulte: 2,
      pourquoi: [
        "Faux : le Protection Profile exprime les besoins du client — inversion des rôles PP/ST.",
        "Correct : le Security Target contient les prétentions de sécurité du vendeur pour le produit évalué.",
        "Faux : l'EAL est le niveau d'assurance attribué, pas un document de prétentions.",
        "Faux : le catalogue des SFR est une bibliothèque d'exigences génériques — pas les revendications du produit."
      ]
    },
    {
      q: "What does a higher Evaluation Assurance Level (EAL) under the Common Criteria actually indicate?",
      choix: [
        "The product is guaranteed to be free of vulnerabilities",
        "The product's security claims were evaluated with greater rigor and depth",
        "The product uses longer encryption keys",
        "The product is approved for classified government networks"
      ],
      reponse: 1,
      explication: "Un EAL élevé signifie que les prétentions du Security Target ont été vérifiées avec davantage de rigueur, de profondeur et de formalisme — EAL7 impliquant une vérification formelle de la conception. Il ne garantit ni l'absence de vulnérabilités, ni un niveau de chiffrement particulier, ni une homologation automatique pour des réseaux classifiés : l'homologation est une décision distincte prise par l'autorité d'accréditation. C'est le piège classique : l'EAL mesure l'ÉVALUATION, pas la sécurité absolue du produit.",
      difficulte: 2,
      pourquoi: [
        "Faux : formulation absolue — aucune évaluation ne garantit l'absence de vulnérabilités.",
        "Correct : un EAL plus élevé signifie une évaluation plus rigoureuse et profonde des prétentions de sécurité — rien de plus.",
        "Faux : l'EAL n'a aucun lien avec la longueur des clés — confusion assurance/fonctionnalité.",
        "Faux : l'EAL n'est pas une autorisation d'emploi sur réseaux classifiés — décision d'accréditation distincte."
      ]
    },
    {
      q: "A network access control server requires each laptop to prove, before joining the network, that its boot process has not been tampered with, using values signed by the laptop's TPM. Which TPM capability is being used?",
      choix: ["Key escrow", "Remote attestation", "Bulk encryption acceleration", "Certificate pinning"],
      reponse: 1,
      explication: "La remote attestation permet au TPM de fournir à un tiers une preuve signée de l'état de la plateforme : les mesures de la séquence de démarrage, accumulées dans les PCR, sont signées par une clé d'attestation et comparées par le serveur aux valeurs de référence. Le key escrow est la garde de clés par un tiers, le TPM n'est pas conçu pour accélérer le chiffrement de masse, et le certificate pinning est une technique de validation TLS côté client, sans rapport avec le TPM.",
      difficulte: 2,
      pourquoi: [
        "Faux : le key escrow est un dépôt de clés auprès d'un tiers — hors sujet.",
        "Correct : prouver à un serveur distant, par des valeurs signées du TPM, que la séquence de démarrage est intègre = remote attestation.",
        "Faux : le TPM n'est pas un accélérateur de chiffrement de masse — capacité inventée.",
        "Faux : le certificate pinning est un mécanisme TLS côté client — autre domaine."
      ]
    },
    {
      q: "A certificate authority must protect its signing keys in a dedicated, tamper-resistant appliance validated under FIPS 140-3, capable of high-volume cryptographic operations. Which solution fits this requirement?",
      choix: ["A TPM chip on each server motherboard", "A Hardware Security Module (HSM)", "A software keystore encrypted with AES", "A smart card issued to the administrator"],
      reponse: 1,
      explication: "Le HSM est un cryptoprocesseur dédié, résistant aux intrusions physiques et certifiable FIPS 140-3, conçu pour générer, stocker et utiliser des clés à grande échelle — c'est l'équipement standard pour protéger les clés d'une autorité de certification. Le TPM est une puce liée à UNE machine, aux capacités limitées ; un keystore logiciel reste exposé aux compromissions de l'hôte ; et une carte à puce protège les clés d'une personne, pas celles d'une infrastructure d'émission.",
      difficulte: 1,
      pourquoi: [
        "Faux : le TPM est une puce locale par machine — inadapté à la volumétrie et à la centralisation d'une CA.",
        "Correct : le HSM est l'équipement dédié inviolable, validé FIPS 140-3, conçu pour les opérations cryptographiques à haut volume.",
        "Faux : un keystore logiciel n'offre aucune résistance physique certifiée — protection de niveau inférieur.",
        "Faux : la smart card protège une clé individuelle à faible volumétrie — pas une infrastructure de CA."
      ]
    },
    {
      q: "An operating system prevents one application from reading or writing the memory space allocated to another application. Which security capability does this describe?",
      choix: ["Process isolation through memory protection", "Data execution prevention only", "Full-disk encryption", "Address translation caching"],
      reponse: 0,
      explication: "L'isolation des processus, mise en œuvre par la protection mémoire (espaces d'adressage virtuels distincts, contrôle par la MMU), empêche qu'un processus accède à la mémoire d'un autre : c'est un fondement du confinement des applications et de la stabilité du système. Le DEP empêche l'exécution de code dans des zones de données, mais ne suffit pas à isoler les processus entre eux ; le chiffrement de disque protège les données au repos ; et le cache de traduction d'adresses est un mécanisme de performance.",
      difficulte: 2,
      pourquoi: [
        "Correct : empêcher un processus de lire ou écrire la mémoire d'un autre = isolation des processus par protection mémoire.",
        "Faux : trop étroit — le DEP empêche l'exécution de zones de données, pas la lecture croisée entre applications.",
        "Faux : le chiffrement de disque protège au repos — sans effet sur la mémoire vive.",
        "Faux : la traduction d'adresses en cache (TLB) est un mécanisme de performance, pas de sécurité."
      ]
    },
    {
      q: "Under the cloud shared responsibility model, who is responsible for patching the guest operating system of virtual machines deployed in an IaaS environment?",
      choix: ["The cloud service provider", "The customer", "The hypervisor vendor", "The internet service provider"],
      reponse: 1,
      explication: "En IaaS, le fournisseur livre et sécurise l'infrastructure — installations physiques, hyperviseurs, réseau et stockage sous-jacents — mais tout ce que le client installe au-dessus lui appartient : systèmes d'exploitation invités, middleware, applications et données. Le patching des OS invités incombe donc au client. L'éditeur de l'hyperviseur fournit des correctifs au CSP, et le fournisseur d'accès internet n'a aucun rôle dans cette répartition.",
      difficulte: 1,
      pourquoi: [
        "Faux : en IaaS, la responsabilité du fournisseur s'arrête à l'hyperviseur et à l'infrastructure.",
        "Correct : l'OS invité des VM IaaS est installé et administré par le client — son patching lui incombe.",
        "Faux : l'éditeur de l'hyperviseur ne gère pas les systèmes invités des clients.",
        "Faux : le fournisseur d'accès internet n'a aucun rôle dans la pile cloud."
      ]
    },
    {
      q: "What is the PRIMARY security concern introduced by multitenancy in a public cloud environment?",
      choix: [
        "Increased hardware costs",
        "Data leakage or attacks crossing the isolation boundary between tenants sharing the same infrastructure",
        "Inability to encrypt data at rest",
        "Mandatory use of proprietary protocols"
      ],
      reponse: 1,
      explication: "La multi-location fait cohabiter plusieurs clients sur la même infrastructure physique : le risque premier est une rupture d'isolation entre locataires — fuite de données, attaque par canal auxiliaire ou évasion de VM permettant d'atteindre les ressources d'un autre client. Le cloud réduit généralement les coûts matériels, le chiffrement au repos reste parfaitement possible, et l'usage de protocoles propriétaires n'est ni systématique ni le risque principal.",
      difficulte: 2,
      pourquoi: [
        "Faux : la mutualisation RÉDUIT les coûts — argument économique inversé et hors sujet sécurité.",
        "Correct : le risque premier de la multitenancy est la rupture de l'isolation entre locataires partageant la même infrastructure.",
        "Faux : le chiffrement au repos est parfaitement disponible en cloud public — affirmation fausse.",
        "Faux : rien n'impose de protocoles propriétaires — affirmation fausse."
      ]
    },
    {
      q: "Compared with virtual machines, what is the MAIN security trade-off of containerization?",
      choix: [
        "Containers cannot be patched",
        "Containers share the host kernel, providing weaker isolation than hypervisor-based virtual machines",
        "Containers require dedicated hardware for each instance",
        "Containers cannot run in the cloud"
      ],
      reponse: 1,
      explication: "Les conteneurs partagent le noyau du système hôte : une vulnérabilité du noyau ou une mauvaise configuration peut permettre à un conteneur compromis d'affecter l'hôte ou les autres conteneurs, alors qu'une VM bénéficie de l'isolation plus forte de l'hyperviseur avec un OS complet par machine. En contrepartie, les conteneurs offrent densité et rapidité de déploiement. Ils se patchent en reconstruisant les images, ne requièrent aucun matériel dédié et sont omniprésents dans le cloud.",
      difficulte: 2,
      pourquoi: [
        "Faux : formulation absolue — les conteneurs se patchent en reconstruisant leurs images.",
        "Correct : les conteneurs partagent le noyau de l'hôte — isolation plus faible que celle d'un hyperviseur ; c'est LE compromis de sécurité.",
        "Faux : c'est l'inverse — les conteneurs maximisent la densité sur un même matériel.",
        "Faux : les conteneurs sont omniprésents dans le cloud — affirmation fausse."
      ]
    },
    {
      q: "Which control BEST reduces the impact of a potential VM escape vulnerability in a virtualized environment hosting workloads of very different sensitivity levels?",
      choix: [
        "Encrypting virtual disk files",
        "Hosting the most sensitive workloads on physically separate infrastructure and keeping the hypervisor patched",
        "Increasing the memory allocated to each VM",
        "Disabling hypervisor audit logging"
      ],
      reponse: 1,
      explication: "Le VM escape permet de sortir d'une machine virtuelle pour atteindre l'hyperviseur, puis les autres VM du même hôte : la mesure la plus efficace est donc de ne PAS faire cohabiter des charges de sensibilités très différentes — les systèmes critiques vont sur une infrastructure physiquement séparée — tout en maintenant l'hyperviseur à jour. Le chiffrement des disques virtuels ne bloque pas l'évasion à l'exécution, la mémoire n'a aucun rapport, et désactiver la journalisation aggraverait la détection.",
      difficulte: 2,
      pourquoi: [
        "Faux : le chiffrement des disques virtuels ne bloque pas une évasion via l'hyperviseur — contrôle hors cible.",
        "Correct : héberger les charges les plus sensibles sur une infrastructure physiquement séparée limite l'impact d'un VM escape ; le patching réduit sa probabilité.",
        "Faux : la mémoire allouée est un paramètre de capacité, pas un contrôle de sécurité.",
        "Faux : désactiver la journalisation supprime la détection — mesure aggravante."
      ]
    },
    {
      q: "An organization runs its order-processing logic as serverless functions. Which security responsibilities remain with the organization? (Choose the BEST answer.)",
      choix: [
        "Hardening the underlying host operating system",
        "Securing the function code, granting each function least-privilege permissions, and protecting the data it processes",
        "Patching the runtime environment",
        "Maintaining physical access controls at the provider's data center"
      ],
      reponse: 1,
      explication: "En serverless (FaaS), le fournisseur gère serveurs, OS, runtime et mise à l'échelle : le client reste responsable de son code (vulnérabilités applicatives, dépendances), des permissions IAM accordées à chaque fonction — le sur-privilège est le risque numéro un — et des données traitées, y compris la gestion des secrets. Le durcissement des hôtes, le patching du runtime et la sécurité physique relèvent du fournisseur dans ce modèle.",
      difficulte: 3,
      pourquoi: [
        "Faux : en serverless, le durcissement de l'OS hôte relève du fournisseur.",
        "Correct : code des fonctions, permissions de moindre privilège et protection des données traitées restent au client — cœur du modèle partagé en FaaS.",
        "Faux : le patching du runtime est assuré par le fournisseur — c'est l'intérêt du serverless.",
        "Faux : la sécurité physique du datacenter appartient au fournisseur."
      ]
    },
    {
      q: "A power utility must allow a corporate monitoring team to view real-time data from its SCADA network while guaranteeing that no traffic can ever flow back into the control network. Which control BEST meets this requirement?",
      choix: [
        "A unidirectional security gateway (data diode)",
        "A firewall with permissive outbound rules",
        "A VPN between corporate and SCADA networks",
        "An intrusion detection system on the SCADA segment"
      ],
      reponse: 0,
      explication: "La passerelle unidirectionnelle (data diode) garantit PHYSIQUEMENT que les données ne circulent que dans un sens — du réseau de contrôle vers le réseau bureautique — rendant tout flux retour impossible par construction, ce qu'un pare-feu, configurable et faillible, ne peut garantir de manière absolue. Le VPN chiffre un canal mais reste bidirectionnel, et l'IDS détecte sans empêcher. Pour les environnements OT critiques, la diode est la référence quand l'exigence est l'impossibilité du retour.",
      difficulte: 3,
      pourquoi: [
        "Correct : la diode de données garantit PHYSIQUEMENT l'unidirectionnalité — aucun trafic ne peut revenir vers le réseau de contrôle.",
        "Faux : un pare-feu reste une garantie logique, configurable et contournable — insuffisant face à l'exigence « jamais ».",
        "Faux : un VPN chiffre mais crée précisément un canal bidirectionnel vers le SCADA — contraire au besoin.",
        "Faux : l'IDS détecte sans empêcher — contrôle détectif face à une exigence préventive absolue."
      ]
    },
    {
      q: "A hospital deploys network-connected infusion pumps that cannot be patched and only support weak embedded credentials. What is the BEST compensating control?",
      choix: [
        "Accept the risk since the devices are medically certified",
        "Isolate the pumps on a dedicated network segment with strict access control and monitoring",
        "Install antivirus agents on each pump",
        "Expose the pumps' management interface to the vendor over the internet"
      ],
      reponse: 1,
      explication: "Quand un équipement médical ou IoT ne peut être ni patché ni durci, le contrôle compensatoire de référence est l'isolation réseau : segment dédié, règles d'accès strictes limitées aux flux nécessaires, et surveillance des communications. Accepter le risque sans mesure d'atténuation est injustifiable pour des dispositifs touchant à la vie des patients, les pompes ne peuvent pas héberger d'agent antivirus, et exposer leur interface de gestion sur internet multiplierait la surface d'attaque.",
      difficulte: 2,
      pourquoi: [
        "Faux : accepter le risque sans compensation ignore la sécurité des patients — la certification médicale n'est pas une sécurité réseau.",
        "Correct : isoler les pompes sur un segment dédié avec contrôle d'accès strict et surveillance = contrôle compensatoire de référence pour du non-patchable.",
        "Faux : impossible techniquement — ces dispositifs embarqués ne supportent pas d'agent antivirus.",
        "Faux : exposer l'interface de gestion sur internet AUGMENTE la surface d'attaque — mesure aggravante."
      ]
    },
    {
      q: "Which constraint MOST influences the choice of cryptographic algorithms for battery-powered embedded devices?",
      choix: [
        "The devices' limited processing power, memory, and energy budget",
        "The lack of network connectivity",
        "The need to remain compatible with desktop-class TLS cipher suites",
        "The devices' inability to store cryptographic keys"
      ],
      reponse: 0,
      explication: "Les systèmes embarqués disposent de peu de puissance de calcul, de mémoire et d'énergie : on privilégie donc des algorithmes efficaces à clés courtes, comme ECC, dont une clé de 256 bits offre une sécurité comparable à RSA 3072 bits pour un coût bien moindre, ou des chiffrements légers dédiés. La connectivité n'est pas le facteur déterminant du choix d'algorithme ; la compatibilité avec les suites TLS des postes de travail est un objectif secondaire, pas une contrainte de conception première ; et les systèmes embarqués savent stocker des clés (secure element, TPM, mémoire protégée).",
      difficulte: 2,
      pourquoi: [
        "Correct : puissance de calcul, mémoire et budget énergétique limités dictent le choix d'algorithmes efficaces à clés courtes (ECC, chiffrement léger).",
        "Faux : la connectivité ne détermine pas le choix d'algorithme cryptographique — facteur hors sujet.",
        "Faux : la compatibilité avec les suites TLS de postes de travail est un objectif secondaire — pas une contrainte de conception première.",
        "Faux : les systèmes embarqués savent stocker des clés (secure element, TPM, mémoire protégée) — affirmation fausse."
      ]
    },
    {
      q: "A project team of 20 people needs pairwise secure communication using symmetric cryptography. How many unique keys are required?",
      choix: ["20", "40", "190", "380"],
      reponse: 2,
      explication: "La formule du nombre de clés symétriques deux à deux est n(n-1)/2, soit 20 × 19 / 2 = 190 clés. Cette croissance quadratique illustre le problème de gestion des clés symétriques à grande échelle, que la cryptographie asymétrique résout avec une seule paire de clés par participant (40 clés au total pour 20 personnes). 380 correspond à n(n-1), l'oubli de la division par deux — piège classique de l'examen.",
      difficulte: 2,
      pourquoi: [
        "Faux : 20 correspondrait à une clé par personne — mauvaise formule.",
        "Faux : 40 évoque deux clés par personne, la logique asymétrique — piège de substitution.",
        "Correct : n(n-1)/2 = 20×19/2 = 190 clés symétriques uniques pour tous les échanges deux à deux.",
        "Faux : 380 = n(n-1), l'oubli de la division par deux."
      ]
    },
    {
      q: "Bob receives a digitally signed message from Alice. Which key does Bob use to verify the signature?",
      choix: ["Bob's private key", "Bob's public key", "Alice's public key", "Alice's private key"],
      reponse: 2,
      explication: "Alice signe en chiffrant le condensé du message avec sa clé PRIVÉE ; quiconque peut ensuite vérifier la signature en la déchiffrant avec la clé PUBLIQUE d'Alice et en comparant le condensé obtenu à celui recalculé sur le message. Les clés de Bob n'interviennent que si le message doit aussi être chiffré pour lui (confidentialité). La clé privée d'Alice n'est jamais partagée — c'est ce qui fonde la non-répudiation.",
      difficulte: 1,
      pourquoi: [
        "Faux : la clé privée de Bob sert à déchiffrer ce qui lui est destiné — pas à vérifier une signature d'Alice.",
        "Faux : la clé publique de Bob ne prouve rien concernant Alice.",
        "Correct : la signature créée avec la clé PRIVÉE d'Alice se vérifie avec sa clé PUBLIQUE — seule Alice a pu la produire.",
        "Faux : la clé privée d'Alice n'est jamais partagée — Bob ne peut pas l'utiliser."
      ]
    },
    {
      q: "Why do protocols such as TLS use asymmetric cryptography only to establish a symmetric session key, rather than encrypting the whole session asymmetrically?",
      choix: [
        "Asymmetric algorithms cannot encrypt more than one block",
        "Symmetric encryption is orders of magnitude faster for bulk data, while asymmetric solves the key exchange problem",
        "Symmetric keys are more secure than asymmetric keys",
        "Certificates expire during long sessions"
      ],
      reponse: 1,
      explication: "C'est le principe du chiffrement hybride : l'asymétrique, lent mais capable d'établir un secret entre inconnus, sert uniquement à échanger ou négocier une clé de session ; le symétrique, extrêmement rapide, chiffre ensuite le volume des données. Chaque famille apporte sa force et compense la faiblesse de l'autre. L'asymétrique peut chiffrer plusieurs blocs (mais inefficacement), la « supériorité » d'une clé ne se mesure pas ainsi, et l'expiration des certificats n'est pas la raison de cette conception.",
      difficulte: 2,
      pourquoi: [
        "Faux : l'asymétrique peut chiffrer plusieurs blocs — c'est son coût prohibitif qui l'interdit, pas une impossibilité.",
        "Correct : le symétrique est des ordres de grandeur plus rapide pour les volumes, l'asymétrique résout l'échange de clé — d'où le modèle hybride.",
        "Faux : la « force » n'est pas le critère — les deux familles se complètent, elles ne se classent pas ainsi.",
        "Faux : l'expiration des certificats est sans rapport avec le choix hybride."
      ]
    },
    {
      q: "An attacker repeatedly submits modified ciphertexts to a server and uses the server's padding error messages to progressively recover the plaintext. Which type of attack is this?",
      choix: [
        "A chosen ciphertext attack exploiting a padding oracle",
        "A known plaintext attack",
        "A brute-force attack against the key",
        "A frequency analysis attack"
      ],
      reponse: 0,
      explication: "L'attaquant soumet des textes chiffrés de son choix et exploite le comportement du serveur (les messages d'erreur de padding) comme un « oracle » qui révèle progressivement le clair : c'est une attaque à texte chiffré choisi, dont le padding oracle est l'exemple le plus célèbre (Lucky13, POODLE). Les parades incluent les modes authentifiés comme GCM et des réponses d'erreur indistinctes. Il n'essaie pas toutes les clés, ne dispose pas de paires clair/chiffré préalables et n'analyse pas de fréquences.",
      difficulte: 3,
      pourquoi: [
        "Correct : soumettre des chiffrés modifiés et exploiter les messages d'erreur de padding = chosen ciphertext attack via padding oracle.",
        "Faux : en known plaintext, l'attaquant observe des paires existantes — il ne soumet rien activement.",
        "Faux : la force brute essaie des clés — ici l'attaquant exploite les réponses du serveur, pas l'espace de clés.",
        "Faux : l'analyse fréquentielle vise les chiffrements classiques par substitution — hors sujet."
      ]
    },
    {
      q: "Which control renders precomputed rainbow tables ineffective against a stolen password database?",
      choix: [
        "Hashing passwords with unsalted MD5",
        "Adding a unique random salt to each password before hashing",
        "Storing passwords encrypted with a single AES key",
        "Truncating passwords to eight characters"
      ],
      reponse: 1,
      explication: "Le salt est une valeur aléatoire unique concaténée à chaque mot de passe avant hachage : deux utilisateurs ayant le même mot de passe obtiennent des hashes différents, et les tables précalculées deviennent inutilisables puisqu'il faudrait une table par valeur de salt. On y ajoute le key stretching (bcrypt, PBKDF2, Argon2) pour ralentir le brute force. MD5 sans salt est exactement ce que les rainbow tables exploitent, le chiffrement par une clé unique déplace le problème vers cette clé, et la troncature AFFAIBLIT les mots de passe.",
      difficulte: 1,
      pourquoi: [
        "Faux : MD5 sans salt est exactement la configuration que les rainbow tables exploitent — mesure contraire au but.",
        "Correct : un salt aléatoire unique par mot de passe invalide toute table précalculée — chaque hash devient unique.",
        "Faux : un chiffrement réversible avec clé unique crée un point de défaillance central et ne neutralise pas la logique de précalcul — mauvaise parade.",
        "Faux : tronquer les mots de passe AFFAIBLIT le système — mesure aggravante."
      ]
    },
    {
      q: "Why did the industry move directly from DES to Triple DES, skipping Double DES?",
      choix: [
        "Double DES was too slow for commercial hardware",
        "The meet-in-the-middle attack reduces Double DES's effective strength to barely more than single DES",
        "Double DES required incompatible key lengths",
        "Triple DES was already standardized before Double DES was invented"
      ],
      reponse: 1,
      explication: "L'attaque meet-in-the-middle mène deux calculs simultanés — chiffrer le clair connu avec toutes les clés possibles d'un côté, déchiffrer le chiffré de l'autre — et cherche la « rencontre » au milieu : elle ramène la sécurité effective du double DES à environ 2^57 opérations, à peine plus que le DES simple. Doubler le chiffrement n'a donc presque rien apporté, d'où le passage direct au triple DES. La lenteur, les longueurs de clés et la chronologie des normes ne sont pas les raisons de cet abandon.",
      difficulte: 3,
      pourquoi: [
        "Faux : la lenteur n'était pas le motif — 2DES a été écarté pour sa faiblesse structurelle.",
        "Correct : le meet-in-the-middle ramène la force effective de 2DES à environ 2^57 — à peine mieux que DES ; d'où le saut direct vers 3DES.",
        "Faux : les longueurs de clés de 2DES n'avaient rien d'incompatible — affirmation inventée.",
        "Faux : chronologie fantaisiste — 3DES a été standardisé en réponse à la faiblesse démontrée de 2DES."
      ]
    },
    {
      q: "A government facility lines the walls of a sensitive room with shielding to prevent attackers from reconstructing screen contents from electromagnetic emanations. Which program or standard addresses this threat?",
      choix: ["TEMPEST", "FIPS 140-3", "Common Criteria", "CPTED"],
      reponse: 0,
      explication: "TEMPEST désigne les normes et contre-mesures contre la fuite d'informations par émanations électromagnétiques : blindage des salles (cage de Faraday), équipements certifiés à faibles émissions, zones de contrôle. Reconstituer l'affichage d'un écran à distance (attaque de type Van Eck) est le scénario classique. FIPS 140-3 certifie les modules cryptographiques, les Common Criteria évaluent les produits de sécurité, et le CPTED prévient la criminalité par l'aménagement — aucun ne traite les émanations.",
      difficulte: 2,
      pourquoi: [
        "Correct : TEMPEST est le programme traitant les émanations électromagnétiques compromettantes (blindage, zones, distances).",
        "Faux : FIPS 140-3 certifie les modules cryptographiques — pas les émanations.",
        "Faux : les Common Criteria évaluent des produits de sécurité — hors sujet.",
        "Faux : le CPTED concerne la prévention par l'aménagement des lieux — pas les signaux électromagnétiques."
      ]
    },
    {
      q: "In a PKI, which component is responsible for verifying the identity of certificate applicants before issuance?",
      choix: ["The Certification Authority", "The Registration Authority", "The OCSP responder", "The relying party"],
      reponse: 1,
      explication: "La Registration Authority prend en charge la vérification d'identité du demandeur — contrôle des justificatifs, validation de l'organisation — avant de transmettre la demande à la Certification Authority, qui émet et signe le certificat liant l'identité à la clé publique. Le répondeur OCSP renseigne sur le statut de révocation des certificats déjà émis, et la relying party est simplement l'entité qui fait confiance au certificat lors d'une transaction.",
      difficulte: 2,
      pourquoi: [
        "Faux : la CA émet et signe les certificats — la vérification d'identité est déléguée ; inversion des rôles.",
        "Correct : la Registration Authority vérifie l'identité des demandeurs avant l'émission par la CA.",
        "Faux : le répondeur OCSP renseigne le statut de révocation — pas l'enrôlement.",
        "Faux : la relying party est le consommateur qui fait confiance au certificat — elle ne vérifie pas les demandeurs."
      ]
    },
    {
      q: "A browser needs an immediate, per-certificate revocation status without downloading the CA's full list of revoked certificates. Which mechanism provides this?",
      choix: ["Certificate Revocation List (CRL)", "Online Certificate Status Protocol (OCSP)", "Key escrow", "Certificate Signing Request (CSR)"],
      reponse: 1,
      explication: "OCSP interroge en ligne le statut d'UN certificat précis et reçoit une réponse signée quasi immédiate — good, revoked ou unknown — sans télécharger la liste complète. La CRL est une liste signée de tous les certificats révoqués, publiée périodiquement, plus lourde et moins fraîche. Le stapling OCSP optimise encore le procédé en faisant porter la réponse par le serveur web. Le key escrow et le CSR n'ont aucun rapport avec la vérification de révocation.",
      difficulte: 2,
      pourquoi: [
        "Faux : la CRL exige le téléchargement de la liste complète — exactement ce que l'on veut éviter.",
        "Correct : OCSP fournit un statut de révocation immédiat, certificat par certificat, sans liste complète.",
        "Faux : le key escrow est un dépôt de clés — hors sujet.",
        "Faux : le CSR est la demande de certificat initiale — rien à voir avec la révocation."
      ]
    },
    {
      q: "An organization's key recovery policy requires that at least three of the five designated key recovery agents cooperate to reconstruct any escrowed encryption key. What is this control called?",
      choix: ["Key stretching", "M of N control", "Key clustering", "Perfect forward secrecy"],
      reponse: 1,
      explication: "Le contrôle m of n exige qu'au moins m agents parmi les n désignés (ici 3 parmi 5) coopèrent pour récupérer une clé : aucune personne seule ne peut le faire, ce qui applique la séparation des tâches, le split knowledge et le dual control à la gestion des clés. Le key stretching ralentit volontairement le hachage des mots de passe, le key clustering est une faiblesse d'algorithme, et la perfect forward secrecy protège les sessions passées en cas de compromission d'une clé de longue durée.",
      difficulte: 2,
      pourquoi: [
        "Faux : le key stretching renforce la dérivation de clés depuis des mots de passe — hors sujet.",
        "Correct : exiger au moins m agents parmi n (ici 3 sur 5) pour reconstituer une clé = M of N control.",
        "Faux : le key clustering désigne deux clés produisant le même chiffré — phénomène indésirable, pas un contrôle.",
        "Faux : la perfect forward secrecy protège les sessions passées en cas de compromission de clé — autre concept."
      ]
    },
    {
      q: "During the design of a new office building, the architect specifies low hedges, wide sight lines, and abundant lighting around all entrances so that intruders can easily be observed by employees and passers-by. Which CPTED principle does this illustrate?",
      choix: ["Natural access control", "Natural surveillance", "Territorial reinforcement", "Mechanical hardening"],
      reponse: 1,
      explication: "La natural surveillance consiste à maximiser les occasions d'observer les abords — haies basses, lignes de vue dégagées, éclairage généreux — afin que tout intrus se sente exposé aux regards : la simple probabilité d'être vu dissuade. Le natural access control guide les flux vers les entrées voulues, le territorial reinforcement marque l'appropriation du site (signalétique, entretien), et le durcissement mécanique (serrures, barreaux) relève du target hardening traditionnel, hors de l'esprit CPTED.",
      difficulte: 2,
      pourquoi: [
        "Faux : le natural access control CANALISE les déplacements — ici l'objectif est de voir, pas de canaliser.",
        "Correct : haies basses, lignes de vue dégagées et éclairage pour rendre les intrus observables = natural surveillance.",
        "Faux : le territorial reinforcement marque l'appartenance du lieu (signalétique, entretien) — autre principe.",
        "Faux : le renforcement mécanique (serrures, barreaux) n'est pas un aménagement « naturel »."
      ]
    },
    {
      q: "A data center operator needs a fire suppression agent for an occupied server room that extinguishes fire quickly, leaves no residue, and does not endanger personnel. Which option is MOST appropriate?",
      choix: [
        "Carbon dioxide (CO2) total flooding",
        "A clean agent system such as FM-200",
        "A deluge water system",
        "Dry powder extinguishers"
      ],
      reponse: 1,
      explication: "Les agents propres comme le FM-200 (HFC-227ea) éteignent rapidement le feu en absorbant la chaleur, ne laissent aucun résidu sur l'électronique et restent respirables aux concentrations d'extinction : ils conviennent aux salles OCCUPÉES. Le CO2, efficace, est mortel par asphyxie aux concentrations utiles et exige l'évacuation préalable. Le deluge noierait les équipements, et la poudre laisse des résidus corrosifs très dommageables pour les serveurs.",
      difficulte: 2,
      pourquoi: [
        "Faux : le CO2 en noyage total prive d'oxygène — létal pour le personnel présent dans la salle occupée.",
        "Correct : un agent propre type FM-200 éteint vite, sans résidu et sans danger pour les personnes — le choix pour une salle occupée.",
        "Faux : le deluge inonde massivement et détruit les équipements — contraire aux exigences.",
        "Faux : la poudre laisse des résidus destructeurs pour l'électronique — critère « no residue » violé."
      ]
    },
    {
      q: "Which term describes a prolonged period of low voltage from the electrical utility?",
      choix: ["Sag", "Brownout", "Surge", "Transient"],
      reponse: 1,
      explication: "Le brownout est une sous-tension PROLONGÉE, souvent imposée par le fournisseur d'électricité en période de forte demande ; le sag est le même phénomène mais momentané. Le surge est à l'inverse une surtension prolongée, et le transient un parasite bref sur la ligne. Ces distinctions momentané/prolongé (sag/brownout, spike/surge, fault/blackout) sont un classique de l'examen — un onduleur avec régulation de tension protège contre les sous-tensions.",
      difficulte: 1,
      pourquoi: [
        "Faux : le sag est une sous-tension MOMENTANÉE — piège sur la durée.",
        "Correct : le brownout est une baisse de tension PROLONGÉE du réseau électrique.",
        "Faux : le surge est une SURtension prolongée — mauvais sens de variation.",
        "Faux : le transient est une perturbation très brève — hors durée."
      ]
    },
    {
      q: "When selecting a site for a new data center, which factor should raise the MOST concern?",
      choix: [
        "The site is located in a flood plain near a river",
        "The site is more than one hour from headquarters",
        "The land requires landscaping before construction",
        "The site is served by two different power utilities"
      ],
      reponse: 0,
      explication: "L'implantation en zone inondable est un risque naturel majeur et permanent pour un datacenter : l'eau détruit les équipements, interdit le sous-sol et peut rendre le site inaccessible — les référentiels de conception excluent ou pénalisent fortement ces emplacements. La distance au siège est une contrainte opérationnelle gérable, l'aménagement paysager un simple coût, et la double alimentation électrique par deux fournisseurs distincts est au contraire un ATOUT de résilience.",
      difficulte: 2,
      pourquoi: [
        "Correct : une zone inondable est un risque naturel majeur, quasi impossible à compenser — critère rédhibitoire de choix de site.",
        "Faux : la distance au siège est un inconvénient logistique gérable — vrai mais pas critique.",
        "Faux : l'aménagement paysager est un coût mineur sans enjeu de sécurité.",
        "Faux : deux réseaux électriques distincts sont un AVANTAGE de redondance, pas une préoccupation."
      ]
    },
    {
      q: "An organization is retiring self-encrypting SSDs that stored highly confidential data. Overwriting is unreliable on SSDs due to wear leveling. Which sanitization method is MOST appropriate if the drives must be reused?",
      choix: [
        "A single-pass overwrite of all visible sectors",
        "Cryptographic erasure: securely destroying the encryption keys so the data becomes unrecoverable",
        "Deleting all files and emptying the recycle bin",
        "Degaussing the drives"
      ],
      reponse: 1,
      explication: "Sur un SSD auto-chiffrant, l'effacement cryptographique (crypto-erase) détruit de façon sûre les clés de chiffrement : les données, toujours physiquement présentes, deviennent définitivement indéchiffrables — méthode reconnue par NIST SP 800-88 et compatible avec la réutilisation du support. La réécriture est peu fiable sur SSD à cause du wear leveling et des blocs de réserve, la suppression de fichiers ne retire que les références, et le dégaussage, conçu pour les supports magnétiques, est inefficace sur la mémoire flash (et détruirait l'usage du disque sans garantie).",
      difficulte: 2,
      pourquoi: [
        "Faux : le wear leveling laisse des blocs non réécrits — la réécriture simple est précisément peu fiable sur SSD.",
        "Correct : le crypto-erase détruit les clés de chiffrement — les données deviennent indéchiffrables et le disque reste réutilisable (NIST SP 800-88).",
        "Faux : supprimer les fichiers ne retire que les références — les données restent récupérables.",
        "Faux : le dégaussage est inefficace sur la mémoire flash et rendrait le disque inutilisable — double contre-indication."
      ]
    },
    {
      q: "A CISO is starting a three-year Zero Trust migration. The network team wants to deploy ZTNA agents to every endpoint immediately, and the data center team wants to begin microsegmentation. What should the CISO do FIRST?",
      choix: [
        "Deploy ZTNA to secure remote access, the most exposed attack vector",
        "Inventory critical assets and map transaction flows to define the protect surfaces before any technical rollout",
        "Microsegment the data center where the most sensitive data resides",
        "Decommission the legacy VPN to force rapid adoption of the new model"
      ],
      reponse: 1,
      explication: "Une migration Zero Trust commence par la connaissance : inventaire des actifs critiques, cartographie des flux et définition des surfaces à protéger. Sans cette base, les politiques ZTNA et la microsegmentation reposeront sur des hypothèses — elles bloqueront des flux légitimes ou laisseront passer des flux dangereux. Le ZTNA et la microsegmentation sont des chantiers valables mais viennent après la cartographie, et couper le VPN sans remplacement validé provoquerait rupture de service et contournements.",
      difficulte: 3,
      pourquoi: [
        "Faux : chantier légitime mais hors phase — sans cartographie préalable, les politiques ZTNA reposeront sur des suppositions ; vrai mais prématuré.",
        "Correct : inventaire et cartographie des flux définissent les surfaces à protéger — le fondement de toutes les politiques Zero Trust ultérieures.",
        "Faux : vrai objectif de la cible mais contextuellement faux en premier — microsegmenter sans connaître les flux casse la production ou laisse des angles morts.",
        "Faux : mesure brutale — la rupture de service pousse aux contournements ; forcer l'adoption n'est pas une stratégie de migration."
      ]
    },
    {
      q: "A healthcare organization holds genomic data that must remain confidential for decades. With a limited budget, which post-quantum readiness step should the security executive take FIRST?",
      choix: [
        "Replace all TLS certificates and digital signatures with post-quantum algorithms immediately",
        "Build a cryptographic inventory, establish crypto-agility, and prioritize migrating the key exchanges protecting long-lived confidential data",
        "Wait until every vendor natively supports the new standards before acting",
        "Increase existing RSA key sizes to 8192 bits to buy time"
      ],
      reponse: 1,
      explication: "La menace Harvest Now, Decrypt Later rend prioritaires les échanges de clés protégeant les données à longue durée de confidentialité : ces flux peuvent être capturés dès aujourd'hui et déchiffrés plus tard. La démarche commence par l'inventaire cryptographique et la crypto-agilité, puis la migration priorisée (souvent en mode hybride). Les signatures sont moins urgentes — elles ne peuvent pas être « déchiffrées plus tard » ; attendre expose les flux actuels à la capture ; et l'algorithme de Shor casse RSA quelle que soit la taille de clé.",
      difficulte: 3,
      pourquoi: [
        "Faux : la migration des signatures sera nécessaire mais n'est pas l'urgence — une signature ne se « déchiffre pas plus tard » ; mauvaise priorité face à HNDL.",
        "Correct : inventaire, crypto-agilité et priorisation par durée de sensibilité — la réponse de gestion de risque à la menace Harvest Now, Decrypt Later.",
        "Faux : l'attentisme laisse capturer aujourd'hui des flux qui doivent rester secrets des décennies — perdant par construction.",
        "Faux : parade de technicien inopérante — Shor casse RSA indépendamment de la taille de clé."
      ]
    },
    {
      q: "An insurer must run regulated data processing in a public cloud under a contractual requirement that the provider can never access the data WHILE it is being processed. Which architecture BEST meets this requirement today?",
      choix: [
        "Encrypting data at rest with customer-managed keys (BYOK)",
        "Running the workload inside hardware trusted execution environments, releasing keys only after successful remote attestation",
        "Enforcing TLS 1.3 on all traffic between processing services",
        "Rewriting the entire workload to use fully homomorphic encryption"
      ],
      reponse: 1,
      explication: "L'exigence vise les données EN COURS D'UTILISATION : le chiffrement au repos (BYOK) et TLS protègent d'autres phases — au repos et en transit — mais pendant le calcul, les données sont en clair en mémoire, accessibles à l'hôte. Le confidential computing exécute le traitement dans une enclave matérielle chiffrée inaccessible au fournisseur, et les clés ne sont livrées qu'après attestation à distance prouvant que l'enclave exécute le code attendu. Le chiffrement homomorphe complet répond en théorie mais reste irréaliste en production généraliste à cause de son coût de calcul.",
      difficulte: 3,
      pourquoi: [
        "Faux : hors phase — le BYOK protège les données AU REPOS ; en cours de traitement elles sont en clair en mémoire, visibles de l'hôte.",
        "Correct : le confidential computing (TEE) protège les données EN COURS D'UTILISATION, avec livraison des clés conditionnée à l'attestation à distance.",
        "Faux : hors phase — TLS protège les données EN TRANSIT, pas la mémoire pendant le calcul.",
        "Faux : théoriquement vrai mais irréaliste en production — le coût de calcul du chiffrement homomorphe complet le disqualifie pour un traitement généraliste."
      ]
    },
    {
      q: "In a plant that operates continuously, the security team wants an inline IPS on the control network, but process engineers reject any device that could interrupt controller traffic. Which architecture decision BEST balances these constraints?",
      choix: [
        "Deploy the inline IPS anyway, because security requirements override operational objections",
        "Deploy passive out-of-band monitoring (TAP/SPAN) with OT-aware detection, supported by network segmentation and response procedures",
        "Abandon network controls and focus solely on hardening the engineering workstations",
        "Schedule a monthly production shutdown to run active vulnerability scans"
      ],
      reponse: 1,
      explication: "En OT, la sûreté et la disponibilité du procédé priment : un IPS en coupure crée un point de défaillance et un risque de faux positif bloquant des ordres de contrôle. La bonne architecture est la surveillance passive hors bande (TAP ou port mirror) avec une détection comprenant les protocoles industriels, appuyée sur la segmentation en zones et conduits et des procédures de réponse — la visibilité sans risque pour la production. Imposer l'IPS ignore la contrainte OT fondamentale, tout miser sur les postes laisse le réseau de contrôle aveugle, et des arrêts mensuels pour scans actifs coûtent une disponibilité disproportionnée — les scans actifs sont eux-mêmes dangereux pour les automates.",
      difficulte: 3,
      pourquoi: [
        "Faux : posture absolue qui inverse les priorités OT — un blocage à tort d'ordres de contrôle peut arrêter ou endommager le procédé.",
        "Correct : la surveillance passive hors bande apporte la visibilité sans risque d'interruption — l'arbitrage sécurité/disponibilité adapté à l'OT.",
        "Faux : trop étroit — durcir les postes laisse le trafic du réseau de contrôle totalement aveugle.",
        "Faux : coût de disponibilité disproportionné et technique risquée — les scans actifs peuvent faire tomber les automates."
      ]
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
