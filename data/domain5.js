/* Domaine 5 — données générées ; schéma : data/SCHEMA.md */
window.CISSP_DATA = window.CISSP_DATA || { domains: {} };
window.CISSP_DATA.domains[5] = {
  "id": 5,
  "code": "D5",
  "titre": "Gestion des identités et des accès (IAM)",
  "titreEn": "Identity and Access Management",
  "poids": "13%",
  "couleur": "#118ab2",
  "icone": "🔑",
  "description": "Le Domaine 5 couvre l'attribution et la révocation des privilèges d'accès aux données et aux systèmes. Vous y apprendrez le modèle IAAA, les facteurs d'authentification et le MFA, la biométrie, le SSO et la fédération d'identités (Kerberos, SAML, OAuth 2.0, OIDC), les modèles d'autorisation, ainsi que le cycle de vie du provisioning des identités.",
  "objectifs": [
    "5.1 Contrôler l'accès physique et logique aux actifs (informations, systèmes, appareils, installations, applications, services)",
    "5.2 Concevoir une stratégie d'identification et d'authentification (personnes, appareils et services) : IAAA, MFA, passwordless, gestion des sessions, identity proofing, fédération, credential management, SSO, Just-In-Time",
    "5.3 Mettre en œuvre l'identité fédérée avec un service tiers (on-premise, cloud, hybride)",
    "5.4 Implémenter et gérer les mécanismes d'autorisation : RBAC, rule-based, MAC, DAC, ABAC, risk-based, PDP/PEP",
    "5.5 Gérer le cycle de vie du provisioning des identités et des accès : revues de comptes, provisioning et deprovisioning, définition des rôles, escalade de privilèges, comptes de service",
    "5.6 Implémenter les systèmes d'authentification : SAML, OAuth/OIDC, Kerberos, RADIUS/TACACS+"
  ],
  "lecons": [
    {
      "id": "d5-l1",
      "titre": "Contrôle d'accès aux actifs et modèle IAAA",
      "duree": 11,
      "slides": [
        {
          "type": "intro",
          "titre": "Bienvenue dans le Domaine 5",
          "points": [
            "13 % de l'examen CISSP",
            "Accorder et révoquer les privilèges d'accès",
            "L'identité est le nouveau périmètre"
          ],
          "narration": "Bienvenue dans le Domaine 5, consacré à la gestion des identités et des accès, ou IAM. Ce domaine représente environ treize pour cent de l'examen. Il traite d'une question centrale de la sécurité : qui a le droit d'accéder à quoi, et comment on accorde puis révoque ces droits. Retenez dès maintenant une idée forte : avec le cloud et la mobilité, l'identité est devenue le nouveau périmètre de sécurité."
        },
        {
          "type": "standard",
          "titre": "Les actifs à protéger",
          "points": [
            "Informations et données (fichiers, bases de données)",
            "Systèmes et appareils (serveurs, routeurs, smartphones, BYOD)",
            "Installations physiques (facilities)",
            "Applications et services"
          ],
          "narration": "Un actif, c'est tout ce qui a de la valeur pour l'organisation. Cela inclut les informations stockées dans des fichiers ou des bases de données, les systèmes qui fournissent des services, les appareils comme les routeurs, les ordinateurs portables ou les smartphones, y compris en mode BYOD, mais aussi les bâtiments et les applications. Le contrôle d'accès consiste à protéger tous ces actifs en n'autorisant que les sujets légitimes à y accéder."
        },
        {
          "type": "standard",
          "titre": "Contrôles d'accès physiques et logiques",
          "points": [
            "Pas de sécurité sans sécurité physique",
            "Contrôles physiques : périmètre, environnement, locaux",
            "Contrôles logiques : authentification, autorisations, permissions",
            "S'appliquent on-premise comme dans le cloud"
          ],
          "narration": "On distingue deux grandes familles de contrôles d'accès. Les contrôles physiques protègent le périmètre, l'environnement et les locaux. Les contrôles logiques sont des systèmes automatisés qui accordent ou refusent l'accès après vérification de l'identité : authentification, autorisation et permissions. Retenez ce principe d'examen : il n'y a pas de sécurité sans sécurité physique. Les meilleurs contrôles techniques ne servent à rien si n'importe qui peut entrer dans la salle serveur.",
          "astuce": "💡 Conseil examen : si une question oppose contrôles techniques sophistiqués et absence de sécurité physique, la sécurité physique prime toujours."
        },
        {
          "type": "standard",
          "titre": "Accès physique aux installations : badges, PACS et visiteurs",
          "points": [
            "PACS (Physical Access Control System) : badges, lecteurs, contrôleurs — des identités à gérer comme les autres",
            "Le cycle de vie IAM s'applique au badge : provisioning à l'arrivée, désactivation immédiate au départ",
            "Tailgating / piggybacking : contré par sas (mantrap), tourniquets et sensibilisation",
            "Visiteurs : enregistrement, badge temporaire à durée limitée, escorte, journal des entrées",
            "Détail des contrôles physiques (clôtures, éclairage, gardes) : voir le Domaine 3"
          ],
          "narration": "Concrétisons le contrôle d'accès aux installations. Les bâtiments modernes s'appuient sur un système de contrôle d'accès physique, ou PACS : des badges, des lecteurs et des contrôleurs de portes, souvent reliés à l'annuaire de l'entreprise. Pour l'examen, retenez que le badge est une identité comme une autre : il suit le même cycle de vie que le compte logique, provisionné à l'arrivée et désactivé immédiatement au départ ou à la fin d'un contrat. Un badge oublié dans le PACS est l'équivalent physique d'un compte orphelin. Le badge ne protège pas contre le tailgating, où un intrus suit un employé légitime à travers la porte : on y répond par des sas mantrap, des tourniquets et la sensibilisation. Enfin, les visiteurs doivent être enregistrés, recevoir un badge temporaire à durée limitée, être escortés, et leurs entrées journalisées pour l'accountability. Les détails des contrôles physiques, clôtures, éclairage, gardiens, sont couverts dans le Domaine 3.",
          "astuce": "💡 Conseil examen : le deprovisioning ne s'arrête pas au compte logique — le badge physique doit être désactivé en même temps, par le même processus."
        },
        {
          "type": "standard",
          "titre": "Sujets, objets et principes fondamentaux",
          "points": [
            "Subject : entité active qui accède (utilisateur, processus)",
            "Object : entité passive accédée (fichier, base de données)",
            "Need to know, Least Privilege, Separation of Duties"
          ],
          "narration": "Le vocabulaire est essentiel. Le sujet, ou subject, est l'entité active qui demande l'accès, comme un utilisateur ou un processus. L'objet est l'entité passive à laquelle on accède, par exemple un fichier. Trois principes gouvernent tout contrôle d'accès : le need to know, qui limite l'accès aux informations nécessaires ; le least privilege, qui limite les droits au strict minimum pour accomplir la tâche ; et la separation of duties, qui répartit les tâches sensibles entre plusieurs personnes."
        },
        {
          "type": "schema",
          "titre": "Le modèle IAAA",
          "points": [
            "Identification : je déclare qui je suis",
            "Authentication : je le prouve",
            "Authorization : ce que j'ai le droit de faire",
            "Accountability : je réponds de mes actions"
          ],
          "schema": {
            "type": "flow",
            "items": [
              "Identification",
              "Authentication",
              "Authorization",
              "Accountability"
            ]
          },
          "narration": "Le cœur du domaine, c'est le modèle IAAA. D'abord l'identification : le sujet déclare une identité, par exemple en saisissant un nom d'utilisateur. Ensuite l'authentification : il prouve cette identité, par exemple avec un mot de passe. Puis l'autorisation : le système détermine ce que cette identité prouvée a le droit de faire. Enfin l'accountability, la responsabilité : grâce à la journalisation et à l'audit, chaque action peut être attribuée à un individu. On parle aussi de services AAA, où le dernier A signifie accounting, mais le principe est identique."
        },
        {
          "type": "standard",
          "titre": "Accountability : le vrai but du contrôle d'accès",
          "points": [
            "Auditing : journaux et pistes d'audit (audit trails)",
            "Identification + authentification + audit = accountability",
            "Encourage les bons comportements et la conformité"
          ],
          "narration": "L'accountability mérite qu'on s'y attarde, car l'examen la considère comme le principe même du contrôle d'accès. L'audit enregistre qui a fait quoi et quand, dans des journaux qui forment une piste d'audit. Mais attention : les journaux seuls ne suffisent pas. C'est la combinaison d'une identification unique, d'une authentification solide et de l'audit qui permet de tenir chaque individu responsable de ses actions. C'est aussi pour cela que chaque sujet doit avoir une identité unique, jamais de compte partagé."
        },
        {
          "type": "standard",
          "titre": "Identity proofing et enregistrement",
          "points": [
            "Registration : vérifier que la personne est bien qui elle prétend être",
            "En personne : passeport, permis de conduire",
            "En ligne : Knowledge-Based Authentication (KBA)",
            "Cognitive passwords : questions de sécurité, souvent faibles"
          ],
          "narration": "Avant même de créer un compte, il faut s'assurer que la personne est bien celle qu'elle prétend être : c'est l'identity proofing, ou enregistrement. En personne, on vérifie des documents officiels comme un passeport. En ligne, on utilise souvent la knowledge-based authentication : on pose des questions dont les réponses sont vérifiées auprès de sources faisant autorité, comme le montant d'un crédit immobilier. Attention aux cognitive passwords, ces questions de sécurité du type nom de votre premier animal : les réponses se trouvent souvent sur les réseaux sociaux."
        },
        {
          "type": "standard",
          "titre": "Gestion des sessions",
          "points": [
            "Une session naît d'une identification, authentification et autorisation réussies",
            "Time-out après inactivité, écrans de veille avec ré-authentification",
            "Limitation des connexions simultanées et plages horaires",
            "Protège contre le session hijacking"
          ],
          "narration": "Une fois l'utilisateur authentifié et autorisé, une session est créée. La gestion des sessions vise à empêcher qu'une session laissée sans surveillance soit détournée. Les stratégies classiques incluent l'expiration après une période d'inactivité, les écrans de veille exigeant une ré-authentification, l'interdiction des connexions simultanées avec le même identifiant et la limitation des horaires d'accès. Terminer les sessions inactives et ré-authentifier régulièrement aide à prévenir le détournement de session. L'OWASP publie des cheat sheets très utiles sur ce sujet pour les développeurs."
        },
        {
          "type": "question",
          "titre": "Contrôle de connaissances",
          "points": [],
          "narration": "Vérifions que le modèle IAAA est bien en place. Prenez le temps de réfléchir avant de répondre.",
          "q": "Un utilisateur saisit son nom d'utilisateur puis son mot de passe. Que représente la saisie du nom d'utilisateur ?",
          "choix": [
            "L'autorisation",
            "L'accountability",
            "L'identification",
            "L'authentification"
          ],
          "reponse": 2,
          "explication": "Saisir un nom d'utilisateur revient à déclarer une identité : c'est l'identification. Le mot de passe qui suit sert à prouver cette identité : c'est l'authentification. L'autorisation intervient après, pour définir les droits, et l'accountability repose sur la journalisation des actions."
        },
        {
          "type": "resume",
          "titre": "Résumé de la leçon",
          "points": [
            "Les actifs incluent informations, systèmes, appareils, installations, applications et services",
            "Pas de sécurité sans sécurité physique ; l'identité est le nouveau périmètre",
            "IAAA : Identification, Authentication, Authorization, Accountability",
            "Need to know, least privilege et separation of duties encadrent tout accès",
            "Identity proofing avant la création du compte, gestion des sessions après"
          ],
          "narration": "Récapitulons. Le contrôle d'accès protège tous les actifs de l'organisation, du fichier au bâtiment, grâce à des contrôles physiques et logiques. Le modèle IAAA structure le processus : on s'identifie, on prouve son identité, on reçoit des autorisations, et l'audit garantit l'accountability, qui est le but ultime du contrôle d'accès. Avant tout cela, l'identity proofing vérifie l'identité réelle de la personne, et après, la gestion des sessions protège l'accès en cours. Dans la prochaine leçon, nous verrons comment prouver son identité avec les facteurs d'authentification."
        }
      ]
    },
    {
      "id": "d5-l2",
      "titre": "Facteurs d'authentification, MFA et biométrie",
      "duree": 12,
      "slides": [
        {
          "type": "intro",
          "titre": "Prouver son identité",
          "points": [
            "Les trois facteurs principaux d'authentification",
            "MFA, tokens, passwordless",
            "Biométrie : FAR, FRR, CER"
          ],
          "narration": "Dans cette leçon, nous répondons à une question simple : comment un sujet prouve-t-il son identité ? Nous verrons les trois facteurs principaux d'authentification, la manière de les combiner en authentification multifacteur, les tokens matériels et logiciels, l'authentification sans mot de passe, et enfin la biométrie avec ses fameuses métriques FAR, FRR et CER que l'examen adore."
        },
        {
          "type": "standard",
          "titre": "Les facteurs d'authentification",
          "points": [
            "Type 1 — Something you know : mot de passe, PIN, passphrase",
            "Type 2 — Something you have : smart card, token, badge",
            "Type 3 — Something you are : biométrie",
            "Compléments : somewhere you are, something you do"
          ],
          "narration": "Il existe trois facteurs principaux. Le type un, something you know, l'authentification par la connaissance : mots de passe, phrases de passe, codes PIN. Le type deux, something you have, l'authentification par la possession : carte à puce, token, badge. Le type trois, something you are, l'authentification par une caractéristique : la biométrie. On ajoute parfois deux facteurs contextuels : somewhere you are, comme une adresse IP, et something you do, comme une signature ou un schéma de déverrouillage. Ces deux derniers sont considérés comme complémentaires plutôt que principaux."
        },
        {
          "type": "standard",
          "titre": "MFA : la vraie définition",
          "points": [
            "MFA = au moins deux facteurs de TYPES différents",
            "Mot de passe + PIN = un seul facteur (deux connaissances)",
            "Mot de passe + token TOTP = vrai MFA",
            "NIST AAL1 à AAL3 : robustesse croissante de l'authentification"
          ],
          "narration": "L'authentification multifacteur exige au moins deux facteurs de types différents. C'est un piège classique de l'examen : demander un mot de passe et un code PIN n'est pas du MFA, car ce sont deux éléments de connaissance. En revanche, un mot de passe combiné à un token constitue un vrai MFA. Le NIST définit d'ailleurs des niveaux d'assurance de l'authentification, les Authenticator Assurance Levels : AAL1 accepte un facteur unique, AAL2 exige le MFA avec résistance au rejeu, et AAL3 exige un MFA matériel résistant au phishing et à l'usurpation du vérifieur.",
          "astuce": "💡 Conseil examen : deux éléments du même type ne font jamais du MFA. Cherchez toujours des types différents."
        },
        {
          "type": "standard",
          "titre": "Tokens et mots de passe à usage unique",
          "points": [
            "Token synchrone : même code généré toutes les 30 à 60 secondes (TOTP)",
            "Token asynchrone : défi-réponse, plus complexe mais plus sûr",
            "HOTP : basé sur un compteur et HMAC ; TOTP : basé sur le temps",
            "SMS déprécié par NIST SP 800-63B ; smart card avec puce contre memory card à piste magnétique"
          ],
          "narration": "Les tokens illustrent le facteur de possession. Un token synchrone génère le même mot de passe à usage unique que le serveur, toutes les trente à soixante secondes : c'est le principe du TOTP, utilisé par les applications d'authentification sur smartphone. Un token asynchrone fonctionne en mode défi-réponse : plus coûteux, mais plus sûr. Le standard HOTP repose sur un compteur et une fonction HMAC, tandis que TOTP y ajoute l'horodatage. Notez que le NIST déprécie l'envoi de codes par SMS pour les agences fédérales, à cause de ses vulnérabilités. Enfin, distinguez la smart card, dotée d'une puce qui génère des données uniques à chaque transaction, de la simple memory card à piste magnétique qui rejoue toujours les mêmes données."
        },
        {
          "type": "standard",
          "titre": "Passwordless : FIDO2 et WebAuthn",
          "points": [
            "Authentification sans mot de passe par clés cryptographiques",
            "FIDO2 : spécifications de la FIDO Alliance",
            "WebAuthn : API web du W3C, résistante au phishing",
            "Avantages : sécurité, confort ; inconvénients : dépendance à l'appareil, coûts"
          ],
          "narration": "L'authentification passwordless supprime le mot de passe au profit de la biométrie, de tokens de sécurité ou de l'appareil mobile. Les standards FIDO2 et WebAuthn en sont les piliers : FIDO2 est l'ensemble de spécifications de la FIDO Alliance qui remplace les mots de passe par des clés cryptographiques, et WebAuthn est l'API web du W3C qui permet aux sites de dialoguer directement avec le navigateur pour une authentification résistante au phishing. Les avantages sont une sécurité accrue et un meilleur confort utilisateur. Les inconvénients : la dépendance à l'appareil, les questions de fiabilité et de vie privée de la biométrie, et les coûts de mise en œuvre."
        },
        {
          "type": "standard",
          "titre": "Biométrie : FAR, FRR et CER",
          "points": [
            "FRR (Type 1) : rejeter à tort un utilisateur légitime",
            "FAR (Type 2) : accepter à tort un imposteur",
            "CER : point où FAR = FRR ; plus le CER est bas, plus le système est précis",
            "Template : représentation mathématique à sens unique des traits biométriques"
          ],
          "narration": "La biométrie compare une mesure du corps, empreinte digitale, iris, géométrie du visage, à un template, c'est-à-dire une représentation mathématique à sens unique enregistrée au préalable. Deux erreurs sont possibles. L'erreur de type un, le false rejection rate, rejette à tort un utilisateur légitime : c'est comme être refoulé devant sa propre porte. L'erreur de type deux, le false acceptance rate, accepte un imposteur : c'est laisser entrer un inconnu, et c'est la plus dangereuse. Le crossover error rate est le point où ces deux taux sont égaux : plus le CER est bas, plus le système biométrique est précis.",
          "astuce": "💡 Moyen mnémotechnique : Type 1 = rejeté à sa propre porte (FRR), Type 2 = un inconnu entre (FAR). Pour comparer deux systèmes biométriques, regardez le CER."
        },
        {
          "type": "schema",
          "titre": "Régler la sensibilité d'un capteur biométrique",
          "points": [
            "Sensibilité haute : FRR augmente, FAR baisse",
            "Sensibilité basse : FAR augmente, FRR baisse",
            "Le CER est le point d'équilibre optimal"
          ],
          "schema": {
            "type": "flow",
            "items": [
              "Sensibilité basse → FAR élevé",
              "Point d'équilibre → CER",
              "Sensibilité haute → FRR élevé"
            ]
          },
          "narration": "Imaginez le curseur de sensibilité d'un lecteur d'empreintes. Si vous le montez, le capteur devient exigeant : il rejette davantage d'utilisateurs légitimes, le FRR grimpe, mais les imposteurs passent moins, le FAR baisse. Si vous le baissez, c'est l'inverse. Le point où les deux courbes se croisent est le crossover error rate. C'est le point de fonctionnement optimal lorsque les deux types d'erreurs ont des impacts équivalents. Dans un environnement très sensible, on acceptera un FRR plus élevé pour minimiser le FAR."
        },
        {
          "type": "standard",
          "titre": "Mots de passe : la forme la plus faible",
          "points": [
            "Le mot de passe est la forme d'authentification la plus faible",
            "Politiques : complexité, historique, longueur",
            "Attaques : brute force, dictionnaire, credential stuffing, phishing, rainbow tables",
            "Password vault : coffre chiffré protégé par un mot de passe maître"
          ],
          "narration": "Le mot de passe reste la forme d'authentification la plus faible, mais aussi la plus répandue. Les politiques de mots de passe renforcent la sécurité en imposant longueur, complexité et historique. Les attaques sont nombreuses : force brute, dictionnaire, credential stuffing qui rejoue des mots de passe volés ailleurs, phishing, ou rainbow tables contre les hachages. Les gestionnaires de mots de passe, ou password vaults, stockent les identifiants dans une base chiffrée protégée par un mot de passe maître : ils permettent d'avoir un mot de passe fort et unique par système. Le revers de la médaille : si le mot de passe maître est compromis, tout l'est."
        },
        {
          "type": "question",
          "titre": "Contrôle de connaissances",
          "points": [],
          "narration": "Une question de style examen sur la biométrie. Réfléchissez à l'impact de chaque type d'erreur.",
          "q": "Quelle métrique est la MEILLEURE pour comparer la précision globale de deux systèmes biométriques ?",
          "choix": [
            "Le Crossover Error Rate (CER)",
            "Le False Rejection Rate (FRR)",
            "Le débit d'enrôlement (throughput)",
            "Le False Acceptance Rate (FAR)"
          ],
          "reponse": 0,
          "explication": "Le CER, point où FAR et FRR sont égaux, mesure la précision globale d'un système biométrique : plus il est bas, plus le système est précis. FAR et FRR pris isolément dépendent du réglage de sensibilité et ne permettent pas une comparaison objective. Le débit concerne la performance, pas la précision."
        },
        {
          "type": "resume",
          "titre": "Résumé de la leçon",
          "points": [
            "Trois facteurs : connaissance, possession, caractéristique (+ localisation et comportement)",
            "MFA = types différents ; mot de passe + PIN n'est pas du MFA",
            "HOTP/TOTP, tokens synchrones et asynchrones ; SMS déprécié par le NIST",
            "FIDO2/WebAuthn : passwordless résistant au phishing",
            "FRR (Type 1), FAR (Type 2), CER bas = système précis ; le mot de passe reste le maillon faible"
          ],
          "narration": "Retenez l'essentiel. Trois facteurs principaux : ce que je sais, ce que je possède, ce que je suis. Le MFA exige des types différents. Les tokens génèrent des mots de passe à usage unique, en mode synchrone avec TOTP ou asynchrone par défi-réponse, et le NIST déprécie le SMS. FIDO2 et WebAuthn ouvrent la voie du passwordless résistant au phishing. En biométrie, l'erreur de type un rejette un légitime, l'erreur de type deux accepte un imposteur, et le CER mesure la précision. Prochaine étape : ne s'authentifier qu'une seule fois grâce au SSO et à la fédération."
        }
      ]
    },
    {
      "id": "d5-l3",
      "titre": "SSO et fédération : Kerberos, SAML, OAuth 2.0 et OIDC",
      "duree": 17,
      "slides": [
        {
          "type": "intro",
          "titre": "S'authentifier une fois, accéder à tout",
          "points": [
            "Single Sign-On (SSO) et ses risques",
            "Kerberos en détail : KDC, TGT, tickets",
            "Fédération : SAML, OAuth 2.0, OIDC",
            "AAA réseau : RADIUS, TACACS+, Diameter"
          ],
          "narration": "Cette leçon est l'une des plus importantes du domaine. Nous allons voir comment un utilisateur peut s'authentifier une seule fois et accéder à de multiples ressources, d'abord au sein de l'organisation avec le SSO et Kerberos, puis entre organisations grâce à la fédération d'identités avec SAML, OAuth deux point zéro et OpenID Connect. Nous terminerons avec les protocoles AAA réseau : RADIUS, TACACS plus et Diameter. Ces protocoles tombent très souvent à l'examen."
        },
        {
          "type": "standard",
          "titre": "Single Sign-On : avantages et risque",
          "points": [
            "Une seule authentification pour accéder à plusieurs ressources",
            "Moins de mots de passe à retenir, administration simplifiée",
            "Risque : single point of compromise → protéger le SSO par MFA",
            "Repose souvent sur un directory service (LDAP)"
          ],
          "narration": "Le single sign-on est une technique centralisée qui permet à un sujet de s'authentifier une seule fois puis d'accéder à plusieurs ressources sans se ré-authentifier. Les avantages sont clairs : moins de mots de passe à mémoriser, donc moins de mots de passe notés sur des post-it, et une administration allégée. Mais le SSO crée un point de compromission unique : si l'identifiant SSO est volé, toutes les ressources liées sont exposées. C'est pourquoi il faut impérativement protéger le compte SSO par du MFA. En interne, le SSO s'appuie souvent sur un service d'annuaire centralisé, généralement basé sur LDAP."
        },
        {
          "type": "standard",
          "titre": "Services d'annuaire : LDAP et Active Directory",
          "points": [
            "Directory service : référentiel central des identités, comptes et groupes — le socle de l'IdM",
            "LDAP (TCP 389) : protocole d'interrogation ; arborescence hiérarchique, entrées désignées par un DN (Distinguished Name), organisées en OU (Organizational Units)",
            "Active Directory : annuaire LDAP + authentification Kerberos ; groupes pour attribuer les droits à l'échelle (jamais individu par individu)",
            "Sécurisation : LDAPS (TCP 636) ou StartTLS — proscrire le simple bind en clair et le bind anonyme"
          ],
          "narration": "Avant Kerberos, posons le socle : le service d'annuaire. C'est le référentiel central qui stocke les identités, les comptes, les groupes et leurs attributs ; c'est la pièce maîtresse de toute implémentation de gestion des identités. On l'interroge avec LDAP, le lightweight directory access protocol, sur le port TCP trois cent quatre-vingt-neuf. L'annuaire est organisé en arborescence hiérarchique : chaque entrée possède un nom distinctif unique, le distinguished name, et les entrées sont rangées dans des unités d'organisation, les OU, qui reflètent souvent la structure de l'entreprise. Active Directory de Microsoft est l'exemple dominant : un annuaire compatible LDAP couplé à Kerberos pour l'authentification. Bonne pratique de conception : on attribue les droits à des groupes correspondant aux rôles métier, jamais utilisateur par utilisateur, sinon la gestion devient ingérable à l'échelle. Enfin, LDAP en clair expose les identifiants lors du bind : il faut imposer LDAPS sur le port six cent trente-six, ou StartTLS, et proscrire le bind anonyme.",
          "astuce": "💡 Conseil examen : LDAP 389 en clair, LDAPS 636 chiffré. L'annuaire est le socle de l'IdM ; les droits se donnent aux groupes, pas aux individus."
        },
        {
          "type": "standard",
          "titre": "Kerberos : les fondamentaux",
          "points": [
            "SSO le plus répandu en entreprise ; objectif premier : l'authentification",
            "Cryptographie symétrique (AES) et tickets",
            "Dépend de NTP pour la synchronisation horaire",
            "Port 88 (UDP, TCP pour les gros tickets) ; utilisé par Active Directory"
          ],
          "narration": "Kerberos est la méthode de SSO la plus répandue au sein des organisations, notamment via Microsoft Active Directory. Son objectif premier est l'authentification. Kerberos version cinq utilise la cryptographie symétrique, avec AES, et un système de tickets pour prouver l'identité, tout en protégeant le trafic d'authentification contre l'écoute et le rejeu. Deux détails d'examen : Kerberos dépend de NTP, car les tickets sont horodatés et une dérive d'horloge fait échouer l'authentification, et il communique sur le port quatre-vingt-huit, en UDP par défaut, en TCP pour les tickets volumineux."
        },
        {
          "type": "standard",
          "titre": "Les acteurs de Kerberos",
          "points": [
            "KDC : tiers de confiance qui fournit le service d'authentification",
            "AS (Authentication Service) : vérifie l'authenticité des demandes",
            "TGS (Ticket-Granting Service) : délivre les tickets de service",
            "TGT : ticket chiffré (clé symétrique, expiration, adresse IP) ; principal et realm"
          ],
          "narration": "Kerberos repose sur un tiers de confiance, le key distribution center ou KDC, qui héberge deux fonctions : l'authentication service, qui vérifie ou rejette l'authenticité et la fraîcheur des demandes, et le ticket-granting service, qui délivre les tickets d'accès aux ressources. Le ticket-granting ticket, ou TGT, prouve que le sujet s'est authentifié : il est chiffré et contient une clé symétrique, une durée d'expiration et l'adresse IP de l'utilisateur. Un principal est toute entité pouvant demander un ticket, généralement un utilisateur, et le realm est la zone logique, comme un domaine, gouvernée par Kerberos."
        },
        {
          "type": "schema",
          "titre": "Flux de connexion Kerberos",
          "points": [
            "Le mot de passe n'est jamais transmis sur le réseau",
            "La clé de session est chiffrée avec un hash du mot de passe",
            "Le TGT sert ensuite à demander des service tickets"
          ],
          "schema": {
            "type": "flow",
            "items": [
              "1. L'utilisateur saisit ses identifiants",
              "2. Le client envoie le nom chiffré au KDC",
              "3. Le KDC génère clé de session + TGT horodaté",
              "4. Le client déchiffre avec le hash du mot de passe",
              "5. TGT → TGS : demande de service ticket",
              "6. Le service ticket est présenté au serveur cible"
            ]
          },
          "narration": "Suivons le flux. L'utilisateur saisit son nom et son mot de passe. Le client transmet le nom d'utilisateur au KDC, qui le vérifie dans sa base, génère une clé de session symétrique et la chiffre avec un hash du mot de passe de l'utilisateur, puis renvoie cette clé accompagnée d'un TGT horodaté. Le client ne peut déchiffrer la clé que s'il connaît le bon mot de passe : ainsi, le mot de passe n'est jamais transmis sur le réseau, mais il est bien vérifié. Ensuite, pour accéder à une ressource, le client présente son TGT au KDC, qui vérifie les privilèges et délivre un service ticket. Le client présente ce ticket au serveur hébergeant la ressource, qui en vérifie la validité, puis ouvre la session."
        },
        {
          "type": "standard",
          "titre": "Fédération d'identités (FIM)",
          "points": [
            "Lie l'identité d'un utilisateur entre plusieurs organisations",
            "Acteurs : principal (utilisateur), Identity Provider (IdP), Relying Party / Service Provider",
            "SSO = une organisation ; FIM = plusieurs organisations en relation de confiance",
            "Déploiement on-premise (contrôle maximal), cloud (IDaaS), ou hybride (le plus complexe)"
          ],
          "narration": "La fédération d'identités, ou federated identity management, étend le SSO au-delà des frontières de l'organisation. Plusieurs organisations forment une fédération et acceptent de partager des informations d'identité : l'utilisateur s'authentifie une fois dans sa propre organisation et accède aux ressources des partenaires. Trois acteurs interviennent : le principal, c'est-à-dire l'utilisateur, l'identity provider qui détient l'identité et réalise l'authentification, et le relying party, aussi appelé service provider, qui fournit le service. La fédération peut être hébergée on-premise, ce qui donne le plus de contrôle, dans le cloud via un service IDaaS, ou en hybride, le scénario le plus complexe à gérer. Le provisioning just-in-time, souvent via SAML, crée automatiquement les comptes chez le partenaire lors de la première connexion."
        },
        {
          "type": "standard",
          "titre": "Identité hybride : relier l'annuaire on-premise au cloud",
          "points": [
            "Password hash synchronization : un hash dérivé (re-haché) est copié vers l'IdP cloud — simple, résiste à une panne on-premise",
            "Pass-through authentication : le cloud délègue la vérification à des agents on-premise — le hash ne quitte jamais l'annuaire",
            "Fédération (relation de confiance, ex. AD FS) : authentification entièrement on-premise — contrôle maximal, mais infrastructure et complexité en plus",
            "Vigilance : le serveur de synchronisation est un actif critique (niveau contrôleur de domaine) ; certificats de fédération ciblés par les attaques type Golden SAML",
            "Cas fréquent : acquisition d'entreprise → relier deux annuaires via confiance ou synchronisation, le temps de converger"
          ],
          "narration": "Le scénario hybride mérite qu'on ouvre le capot, car l'examen le teste. Quand l'organisation garde son annuaire on-premise tout en consommant des services cloud, trois mécanismes relient les deux mondes. Premier mécanisme, la synchronisation de hash de mots de passe : un hash dérivé du hash local, jamais le mot de passe lui-même, est copié vers le fournisseur d'identité cloud ; c'est la solution la plus simple, et l'authentification cloud continue de fonctionner même si le site local tombe. Deuxième mécanisme, l'authentification pass-through : le cloud transmet la vérification à des agents installés on-premise ; aucun hash ne quitte l'annuaire, mais l'authentification dépend de la disponibilité du site. Troisième mécanisme, la fédération via une relation de confiance, par exemple avec AD FS : l'authentification reste entièrement on-premise et l'organisation garde le contrôle maximal, au prix d'une infrastructure supplémentaire à sécuriser. Points de vigilance : le serveur de synchronisation détient des secrets équivalents à ceux d'un contrôleur de domaine, il doit être protégé au même niveau ; et les certificats de signature de la fédération sont une cible de choix, comme l'ont montré les attaques de type Golden SAML. Enfin, l'hybride est le quotidien des fusions-acquisitions : on relie temporairement deux annuaires par confiance ou synchronisation, le temps de converger vers une identité unique.",
          "astuce": "💡 Conseil examen : hash sync = simplicité et résilience ; pass-through = le hash reste chez vous ; fédération = contrôle maximal mais complexité maximale. Le serveur de synchro se protège comme un contrôleur de domaine."
        },
        {
          "type": "standard",
          "titre": "SAML : le standard de la fédération",
          "points": [
            "Standard ouvert basé sur XML, maintenu par OASIS",
            "Échange d'informations d'authentification ET d'autorisation",
            "Trois entités : Principal, Service Provider, Identity Provider",
            "Trois assertions : Authentication, Authorization, Attribute"
          ],
          "narration": "Le security assertion markup language, SAML, est un standard ouvert basé sur XML et maintenu par l'OASIS. Il sert à échanger des informations d'authentification et d'autorisation entre organisations fédérées, et fournit le SSO pour les accès par navigateur, notamment vers les services cloud. SAML deux point zéro définit trois entités : le principal, c'est-à-dire l'utilisateur, le service provider qui rend le service, et l'identity provider qui détient les informations d'identité. L'IdP émet trois types d'assertions : l'assertion d'authentification, qui prouve que l'utilisateur a fourni les bons identifiants ; l'assertion d'autorisation, qui indique si l'accès est accordé ou refusé ; et l'assertion d'attribut, qui transporte toute information complémentaire sur l'utilisateur."
        },
        {
          "type": "standard",
          "titre": "OAuth 2.0 et OpenID Connect",
          "points": [
            "OAuth 2.0 : framework d'AUTORISATION (RFC 6749, IETF) — délégation d'accès",
            "OIDC : couche d'AUTHENTIFICATION au-dessus d'OAuth 2.0 (OpenID Foundation)",
            "OIDC : RESTful, JSON, JSON Web Tokens (ID token)",
            "Exemple : un jeu qui lit vos contacts = OAuth ; se connecter avec Google = OIDC"
          ],
          "narration": "Deux protocoles à ne jamais confondre. OAuth deux point zéro est un framework d'autorisation, décrit dans la RFC six mille sept cent quarante-neuf de l'IETF : il permet à une application tierce d'obtenir un accès limité à un service, par délégation, sans jamais partager le mot de passe. OpenID Connect, maintenu par l'OpenID Foundation, est une couche d'authentification construite au-dessus d'OAuth : c'est un protocole RESTful basé sur JSON qui utilise des JSON web tokens comme jetons d'identité. Un moyen simple de les distinguer : quand un jeu mobile retrouve automatiquement vos amis depuis un réseau social, c'est OAuth, de l'autorisation déléguée. Quand vous vous connectez au jeu avec votre compte de réseau social, c'est OIDC, de l'authentification.",
          "astuce": "💡 Conseil examen : OAuth = autorisation, OpenID/OIDC = authentification. SAML fait les deux, en XML ; OIDC fait les deux, en JSON."
        },
        {
          "type": "standard",
          "titre": "RADIUS, TACACS+ et Diameter",
          "points": [
            "RADIUS : AAA centralisé pour l'accès distant ; UDP 1812/1813, ne chiffre que le mot de passe",
            "RADIUS/TLS (RadSec) : TCP 2083 pour chiffrer toute la session",
            "TACACS+ (Cisco, standard ouvert) : TCP 49, sépare AAA, chiffre tout",
            "Diameter : successeur de RADIUS, TCP/SCTP avec IPsec ou TLS, non rétrocompatible"
          ],
          "narration": "Pour l'accès réseau distant, comme les VPN, on utilise des protocoles AAA centralisés. RADIUS centralise l'authentification : le serveur d'accès réseau agit comme client RADIUS et relaie les identifiants au serveur RADIUS. Par défaut, RADIUS fonctionne en UDP, ports mille huit cent douze et mille huit cent treize, et ne chiffre que le mot de passe ; la variante RADIUS sur TLS, en TCP port deux mille quatre-vingt-trois, chiffre toute la session. TACACS plus, développé par Cisco puis publié en standard ouvert, sépare l'authentification, l'autorisation et l'accounting, chiffre l'intégralité des échanges et utilise TCP port quarante-neuf, donc plus fiable. Diameter, conçu pour dépasser RADIUS, utilise TCP ou SCTP avec IPsec ou TLS, gère des sessions complexes, mais n'est pas compatible avec RADIUS."
        },
        {
          "type": "question",
          "titre": "Contrôle de connaissances",
          "points": [],
          "narration": "Question de style examen sur la fédération. Attention à la distinction entre autorisation et authentification.",
          "q": "Une application mobile de retouche photo demande l'accès à vos albums stockés chez un fournisseur cloud, sans jamais connaître votre mot de passe. Quel protocole est le PLUS probablement utilisé ?",
          "choix": [
            "SAML 2.0",
            "OAuth 2.0",
            "TACACS+",
            "Kerberos"
          ],
          "reponse": 1,
          "explication": "Il s'agit d'une délégation d'autorisation : l'application tierce obtient un accès limité à une ressource au nom de son propriétaire, sans partage d'identifiants — c'est exactement le rôle d'OAuth 2.0. SAML sert surtout au SSO navigateur entre organisations fédérées, Kerberos est le SSO interne à base de tickets, et TACACS+ est un protocole AAA pour l'administration d'équipements réseau."
        },
        {
          "type": "resume",
          "titre": "Résumé de la leçon",
          "points": [
            "SSO : une authentification, plusieurs ressources ; point de compromission unique → MFA",
            "Kerberos : KDC (AS + TGS), TGT, tickets, cryptographie symétrique AES, NTP, port 88",
            "SAML (XML, OASIS) : assertions authentication, authorization, attribute",
            "OAuth 2.0 = autorisation ; OIDC = authentification en JSON/JWT",
            "RADIUS (UDP, mot de passe seul chiffré), TACACS+ (TCP 49, tout chiffré, AAA séparés), Diameter"
          ],
          "narration": "Faisons le point. Le SSO simplifie la vie des utilisateurs mais crée un point de compromission unique qu'il faut protéger par MFA. Kerberos, le SSO d'entreprise par excellence, s'appuie sur le KDC, les TGT et les tickets de service, avec de la cryptographie symétrique et une dépendance forte à la synchronisation horaire. Pour la fédération, SAML échange des assertions XML entre identity provider et service provider, OAuth délègue l'autorisation et OIDC apporte l'authentification en JSON. Enfin, RADIUS, TACACS plus et Diameter fournissent les services AAA pour l'accès réseau. Prochaine leçon : une fois authentifié, que puis-je faire ? Place aux modèles d'autorisation."
        }
      ]
    },
    {
      "id": "d5-l4",
      "titre": "Modèles d'autorisation : DAC, MAC, RBAC, ABAC",
      "duree": 11,
      "slides": [
        {
          "type": "intro",
          "titre": "Qui décide de l'accès ?",
          "points": [
            "Mécanismes d'autorisation : implicit deny, ACL, capability tables",
            "DAC, MAC, RBAC, rule-based, ABAC, risk-based",
            "PDP et PEP : l'application des politiques"
          ],
          "narration": "Après l'authentification vient l'autorisation : le système vérifie que l'activité demandée est permise au regard des privilèges de l'identité prouvée. Dans cette leçon, nous passons en revue les mécanismes d'autorisation, puis les grands modèles de contrôle d'accès que sont DAC, MAC, RBAC, rule-based, ABAC et risk-based. À l'examen, on vous demandera d'identifier le modèle à partir de sa caractéristique clé : soyez attentifs à ces indices."
        },
        {
          "type": "standard",
          "titre": "Mécanismes d'autorisation de base",
          "points": [
            "Implicit deny : tout ce qui n'est pas explicitement permis est refusé",
            "ACL : liste centrée sur l'objet ; capability table : centrée sur le sujet",
            "Constrained interface : limiter ce que l'utilisateur voit et peut faire",
            "Content-dependent et context-dependent controls"
          ],
          "narration": "Quelques mécanismes fondamentaux. L'implicit deny pose que tout accès non explicitement accordé est refusé : c'est la base des pare-feu et des systèmes de permissions. L'access control list est attachée à un objet et liste qui peut y accéder, tandis que la capability table est attachée à un sujet et liste ce à quoi il peut accéder. Les interfaces contraintes restreignent ce que l'utilisateur peut voir ou faire, par exemple des menus grisés. Le contrôle content-dependent examine le contenu accédé, comme un employé qui peut consulter la base RH mais pas la fiche du directeur. Le contrôle context-dependent examine le contexte, comme l'heure de la demande."
        },
        {
          "type": "standard",
          "titre": "DAC : Discretionary Access Control",
          "points": [
            "Caractéristique clé : chaque objet a un propriétaire qui décide des accès",
            "Le propriétaire accorde ou refuse à sa discrétion via des ACL",
            "Exemple : NTFS sous Windows",
            "Tous les autres modèles sont non-discrétionnaires (gérés centralement)"
          ],
          "narration": "Dans le modèle discrétionnaire, chaque objet a un propriétaire, et ce propriétaire décide, à sa discrétion, qui accède à son objet. Vous créez un fichier, vous en êtes le propriétaire, vous accordez les permissions via une access control list. C'est le modèle du système de fichiers NTFS de Windows. Souplesse maximale, mais gouvernance faible : les décisions sont dispersées entre tous les propriétaires. Tous les autres modèles sont dits non-discrétionnaires, car c'est une autorité centrale, l'administrateur, qui gère les accès et non le propriétaire de l'actif."
        },
        {
          "type": "standard",
          "titre": "MAC : Mandatory Access Control",
          "points": [
            "Caractéristique clé : labels appliqués aux sujets ET aux objets",
            "Le système impose l'accès selon la politique, pas l'utilisateur",
            "Modèle lattice-based ; environnements hiérarchiques, compartimentés ou hybrides",
            "Applique le need to know ; typique des environnements militaires"
          ],
          "narration": "Le modèle mandatory access control est le plus rigide : c'est le système lui-même qui impose les contrôles conformément à la politique de sécurité de l'organisation. Sa caractéristique clé est l'usage d'étiquettes, ou labels, appliquées à la fois aux sujets et aux objets : un sujet doit porter un label correspondant, par exemple top secret, pour accéder à un document top secret. Représenté en tableau, le modèle ressemble à un treillis, d'où le nom de lattice-based model. Le MAC applique strictement le need to know et supporte des environnements hiérarchiques, compartimentés, ou hybrides combinant les deux. C'est le modèle typique des environnements militaires et gouvernementaux."
        },
        {
          "type": "standard",
          "titre": "RBAC et Rule-Based Access Control",
          "points": [
            "RBAC : privilèges assignés à des rôles calqués sur les fonctions métier",
            "Ajouter/retirer un utilisateur d'un rôle suffit ; faible charge d'administration",
            "Non-discrétionnaire ; utilisé par les groupes Windows",
            "Rule-based : règles globales appliquées à tous les sujets (ex. ACL de pare-feu)"
          ],
          "narration": "Le role-based access control attribue les privilèges non pas aux individus, mais à des rôles définis par les fonctions métier, comme analyste helpdesk niveau un. On place le compte de l'utilisateur dans le rôle, il hérite des privilèges ; on l'en retire, il les perd. C'est un modèle non-discrétionnaire qui réduit fortement la charge d'administration et limite le privilege creep, particulièrement adapté aux organisations à fort turnover. Ne confondez pas rôles et groupes : le rôle est centré sur la fonction, le groupe est une collection d'utilisateurs. Le modèle rule-based, lui, applique des règles globales identiques à tous les sujets : l'exemple classique est la liste de règles d'un pare-feu, où les règles sont parfois appelées restrictions ou filtres."
        },
        {
          "type": "standard",
          "titre": "ABAC et Risk-Based Access Control",
          "points": [
            "ABAC : règles combinant attributs du sujet, de l'action, de la ressource et de l'environnement",
            "Politiques en langage naturel ; XACML ; utilisé par les SDN",
            "Risk-based : évalue la situation (localisation, MFA, appareil) avant d'accorder l'accès",
            "Peut s'appuyer sur du machine learning"
          ],
          "narration": "L'attribute-based access control est une évolution avancée du modèle à règles : les règles combinent de multiples attributs concernant l'utilisateur, son action, la ressource cible et l'environnement. On peut écrire des politiques en langage presque naturel, comme autoriser les managers à accéder au WAN depuis un appareil mobile. Le langage XACML définit la syntaxe de ces politiques, et les réseaux définis par logiciel utilisent souvent l'ABAC. Le modèle risk-based va plus loin encore : il évalue l'environnement et la situation, la localisation de l'utilisateur, l'usage du MFA, l'état de l'appareil, et peut s'appuyer sur du machine learning pour comparer l'activité courante aux comportements passés, par exemple pour bloquer le trafic anormal d'un objet connecté infecté."
        },
        {
          "type": "schema",
          "titre": "PDP et PEP : appliquer la politique",
          "points": [
            "PEP : le portier qui reçoit la demande et applique la décision",
            "PDP : le juge qui décide selon les règles prédéfinies"
          ],
          "schema": {
            "type": "flow",
            "items": [
              "Sujet → demande d'accès",
              "PEP (gatekeeper)",
              "PDP (décision selon les règles)",
              "PEP applique : accès accordé ou refusé"
            ]
          },
          "narration": "L'application des politiques d'accès repose sur deux composants. Le policy enforcement point est le portier : il reçoit la demande d'accès et la transmet au policy decision point. Le PDP est le juge : il évalue la demande au regard des règles et des politiques prédéfinies, puis rend sa décision. Le PEP applique alors cette décision, en accordant ou refusant l'accès. Cette séparation entre décision et application est au cœur des architectures modernes, notamment du Zero Trust."
        },
        {
          "type": "question",
          "titre": "Contrôle de connaissances",
          "points": [],
          "narration": "Identifiez le modèle à partir de sa caractéristique clé. C'est exactement le réflexe attendu à l'examen.",
          "q": "Un système applique des étiquettes de classification aux sujets et aux objets, et seul un sujet dont le label correspond peut accéder à l'objet. De quel modèle s'agit-il ?",
          "choix": [
            "Mandatory Access Control (MAC)",
            "Discretionary Access Control (DAC)",
            "Attribute-Based Access Control (ABAC)",
            "Role-Based Access Control (RBAC)"
          ],
          "reponse": 0,
          "explication": "Les labels appliqués aux sujets et aux objets sont la caractéristique clé du MAC : le système impose l'accès selon la politique. Le DAC se reconnaît au propriétaire qui décide, le RBAC aux rôles calqués sur les fonctions, et l'ABAC aux règles combinant de multiples attributs."
        },
        {
          "type": "resume",
          "titre": "Résumé de la leçon",
          "points": [
            "Implicit deny, ACL (objet), capability table (sujet), interfaces contraintes",
            "DAC : le propriétaire décide ; MAC : labels imposés par le système (lattice)",
            "RBAC : rôles métier ; rule-based : règles globales (pare-feu)",
            "ABAC : attributs multiples (XACML) ; risk-based : évaluation de la situation",
            "PEP applique, PDP décide"
          ],
          "narration": "Résumons avec les caractéristiques clés, car c'est ainsi que l'examen vous interrogera. Propriétaire qui décide : DAC. Labels sur sujets et objets : MAC, le modèle en treillis. Rôles alignés sur les fonctions métier : RBAC. Règles globales appliquées à tous : rule-based. Règles à attributs multiples exprimées en XACML : ABAC. Évaluation dynamique de la situation et du risque : risk-based. Et pour appliquer tout cela, le PEP joue le portier tandis que le PDP rend les décisions. Il nous reste à gérer la vie des comptes eux-mêmes : c'est le cycle de vie du provisioning."
        }
      ]
    },
    {
      "id": "d5-l5",
      "titre": "Cycle de vie des identités, PAM et attaques sur l'IAM",
      "duree": 13,
      "slides": [
        {
          "type": "intro",
          "titre": "De la création du compte à sa suppression",
          "points": [
            "Provisioning, onboarding, transferts, deprovisioning",
            "Revues d'accès et lutte contre le privilege creep",
            "Privileged Access Management (PAM)",
            "Attaques : Kerberoasting, pass-the-hash, escalade de privilèges"
          ],
          "narration": "Dernière leçon du domaine : le cycle de vie du provisioning des identités et des accès, c'est-à-dire la création, la gestion et la suppression des comptes. Sans ce cycle bien maîtrisé, impossible d'établir des identités fiables, d'authentifier, d'autoriser et de tracer. Nous verrons aussi la gestion des accès à privilèges, les revues de comptes, et les attaques qui ciblent directement l'IAM, comme le Kerberoasting et le pass-the-hash."
        },
        {
          "type": "schema",
          "titre": "Le cycle de vie identité et accès",
          "points": [
            "Chaque étape conditionne la suivante",
            "Un compte oublié est une porte d'entrée pour l'attaquant"
          ],
          "schema": {
            "type": "cycle",
            "items": [
              "Provisioning / Onboarding",
              "Gestion et revues d'accès",
              "Transferts et changements de rôle",
              "Deprovisioning / Offboarding"
            ]
          },
          "narration": "Visualisons le cycle. Tout commence par le provisioning et l'onboarding du nouvel arrivant. Vient ensuite la vie du compte : gestion courante et revues d'accès périodiques. Puis les changements : transferts, promotions, nouveaux rôles, qui exigent d'ajuster les privilèges. Enfin, le départ déclenche le deprovisioning et l'offboarding. Chaque étape négligée crée un risque : un compte dormant ou un ancien salarié qui garde ses accès sont des portes d'entrée idéales pour un attaquant."
        },
        {
          "type": "standard",
          "titre": "Provisioning et onboarding",
          "points": [
            "Création des comptes avec les privilèges appropriés (enrollment/registration)",
            "Automated provisioning : règles prédéfinies, cohérence ; workflow provisioning : processus RH",
            "Remise du matériel : traçabilité indispensable",
            "Onboarding : signature de l'AUP, sensibilisation, password manager, helpdesk"
          ],
          "narration": "Le provisioning garantit que les comptes sont créés selon des procédures définies, avec les privilèges correspondant strictement aux tâches. Le provisioning automatisé applique des règles prédéfinies, par exemple l'affectation aux bons groupes selon le rôle, ce qui assure la cohérence ; le workflow provisioning suit un processus établi, souvent déclenché par les ressources humaines. Le provisioning inclut aussi la remise de matériel, ordinateurs, tokens, cartes à puce, avec des registres précis. L'onboarding complète le tout : signature de la charte d'utilisation acceptable, sensibilisation aux bonnes pratiques, configuration d'un gestionnaire de mots de passe et présentation du support."
        },
        {
          "type": "standard",
          "titre": "SCIM et SPML : le provisioning automatisé inter-domaines",
          "points": [
            "SCIM : System for Cross-domain Identity Management — standard MODERNE de provisioning",
            "API REST et format JSON : créer, mettre à jour et supprimer des comptes entre systèmes",
            "Cas d'usage : synchroniser les identités entre l'annuaire interne et les applications SaaS",
            "SPML : Service Provisioning Markup Language — l'ancêtre basé XML, quasi abandonné",
            "Bénéfices : onboarding/offboarding cohérents et rapides, moins d'erreurs manuelles"
          ],
          "narration": "Quand une organisation utilise des dizaines d'applications SaaS, créer et supprimer les comptes à la main devient ingérable et dangereux. C'est le rôle de SCIM, System for Cross-domain Identity Management : un standard moderne de provisioning automatisé entre domaines, fondé sur une API REST et le format JSON. Concrètement, quand les ressources humaines créent un utilisateur dans l'annuaire, SCIM propage automatiquement la création du compte vers les applications cloud ; et au départ de l'employé, la suppression se propage de la même manière, ce qui ferme vite les portes. Son ancêtre s'appelle SPML, Service Provisioning Markup Language : un standard basé sur XML qui poursuivait le même objectif, mais qui n'a jamais été largement adopté et est aujourd'hui considéré comme obsolète. À l'examen, retenez le duo : SCIM pour le provisioning, SAML pour l'authentification fédérée — deux standards complémentaires, pas concurrents.",
          "astuce": "💡 Conseil examen : SCIM = provisioning des COMPTES (REST/JSON, moderne) ; SPML = son ancêtre XML ; SAML = échange d'ASSERTIONS d'authentification. Ne les confondez pas."
        },
        {
          "type": "standard",
          "titre": "Revues d'accès et dérive des privilèges",
          "points": [
            "Revoir périodiquement comptes utilisateurs, systèmes et de service",
            "Excessive privilege : plus de droits que nécessaire → révoquer",
            "Privilege creep : accumulation de droits au fil des changements de poste",
            "Scripts pour détecter comptes inutilisés et appartenances privilégiées"
          ],
          "narration": "Les administrateurs doivent périodiquement passer en revue les comptes utilisateurs, systèmes et de service, pour vérifier leur conformité à la politique. Deux dérives sont à surveiller. L'excessive privilege : un utilisateur détient plus de droits que ses tâches ne l'exigent ; ces droits doivent être révoqués. Et le privilege creep, la dérive des privilèges : au fil des changements de poste, un compte accumule des droits sans jamais perdre les anciens. C'est une violation directe du least privilege. Des scripts périodiques peuvent détecter les comptes inutilisés et vérifier les membres des groupes privilégiés. Lors d'un transfert ou de la création d'un nouveau rôle, on redéfinit les privilèges nécessaires, on n'empile pas."
        },
        {
          "type": "standard",
          "titre": "Deprovisioning et offboarding",
          "points": [
            "Désactiver d'abord, supprimer ensuite (après revue des données par le supérieur)",
            "Désactivation immédiate lors de l'entretien de départ : risque élevé de sabotage sinon",
            "Récupérer tout le matériel : laptops, mobiles, tokens",
            "S'applique aussi aux transferts internes"
          ],
          "narration": "Au départ d'un employé, le compte est généralement d'abord désactivé plutôt que supprimé : le supérieur peut ainsi examiner les données de l'utilisateur, comme des fichiers chiffrés, avant la suppression définitive. Point critique pour l'examen : si un employé licencié conserve son accès après l'entretien de départ, le risque de sabotage est très élevé ; la désactivation doit donc être immédiate. L'offboarding inclut la restitution de tout le matériel : ordinateurs, mobiles, tokens d'authentification. Et n'oubliez pas que le deprovisioning concerne aussi les transferts internes, pour retirer les accès de l'ancien poste."
        },
        {
          "type": "standard",
          "titre": "PAM et comptes de service",
          "points": [
            "PAM : gérer, surveiller et auditer les comptes à privilèges",
            "Fonctions : credential vaulting, session recording, just-in-time privileged access",
            "Comptes de service : utilisés par les applications, sans intervention humaine",
            "Éviter le compte système local : privilèges excessifs ; limiter et auditer sudo"
          ],
          "narration": "Le privileged access management est un composant critique du cycle de vie : les solutions PAM gèrent, surveillent et auditent l'usage des comptes à privilèges. Elles offrent le coffre-fort d'identifiants, l'enregistrement des sessions et l'accès privilégié just-in-time, où les droits élevés ne sont accordés que temporairement, au moment du besoin. Les comptes de service, utilisés par les applications pour dialoguer avec d'autres ressources sans intervention humaine, doivent eux aussi être gérés et revus : évitez d'utiliser le compte système local comme compte de service, car il accorde généralement bien plus d'accès que nécessaire. Enfin, limitez et auditez l'usage de sudo."
        },
        {
          "type": "standard",
          "titre": "Managed service accounts et bonnes pratiques sudo",
          "points": [
            "Managed Service Account (MSA) : compte de service géré par l'annuaire — mot de passe long, aléatoire, rotation automatique, pas d'ouverture de session interactive",
            "gMSA (group Managed Service Account) : partageable entre plusieurs serveurs ; aucun humain ne connaît le mot de passe",
            "La rotation automatique contre le Kerberoasting : un mot de passe de 240 caractères changé régulièrement est incassable hors ligne",
            "sudo : accorder des commandes précises (jamais ALL), journaliser chaque commande, interdire l'ouverture d'un shell root persistant",
            "Minimiser l'usage de sudo : moins d'exécutions privilégiées = moins de surface d'escalade"
          ],
          "narration": "Le DCO cite nommément les managed service accounts, alors nommons-les. Sur Windows, un managed service account est un compte de service dont l'annuaire gère lui-même le mot de passe : long, aléatoire, et pivoté automatiquement à intervalle régulier, sans intervention humaine et sans ouverture de session interactive possible. Sa version de groupe, le group managed service account ou gMSA, peut être utilisée par plusieurs serveurs, par exemple une ferme web. L'intérêt sécurité est double : aucun humain ne connaît le mot de passe, donc il ne peut être ni noté ni partagé, et la rotation automatique neutralise le Kerberoasting, car un mot de passe de deux cent quarante caractères renouvelé régulièrement est incassable hors ligne. Côté Unix et Linux, la bonne pratique équivalente concerne sudo : accordez des commandes précises plutôt que le droit ALL, journalisez chaque commande exécutée pour l'accountability, et interdisez l'ouverture d'un shell root persistant qui échappe à la journalisation. Et surtout, minimisez l'usage de sudo lui-même : chaque exécution privilégiée évitée est une opportunité d'escalade en moins.",
          "astuce": "💡 Conseil examen : gMSA = rotation automatique du mot de passe par l'annuaire, aucun humain ne le connaît — la réponse attendue face à des comptes de service à mot de passe fixe. sudo = minimiser et journaliser."
        },
        {
          "type": "standard",
          "titre": "Escalade de privilèges et mouvement latéral",
          "points": [
            "Vertical : obtenir des privilèges supérieurs (utilisateur → administrateur)",
            "Horizontal : privilèges similaires depuis d'autres comptes",
            "Mouvement latéral : propagation horizontale à travers le réseau",
            "Défense : limiter les privilèges des comptes de service, minimiser sudo"
          ],
          "narration": "Après avoir compromis un premier système, l'attaquant cherche à étendre ses privilèges. L'escalade verticale lui donne des privilèges nettement supérieurs, par exemple passer d'un compte utilisateur standard à administrateur de la machine. L'escalade horizontale lui donne des privilèges similaires, mais depuis d'autres comptes ; lorsqu'il se propage ainsi de machine en machine à travers le réseau, on parle de mouvement latéral, ou lateral movement. Limiter les privilèges des comptes de service et minimiser l'usage de sudo réduit l'efficacité de ces attaques."
        },
        {
          "type": "standard",
          "titre": "Attaques ciblant l'IAM",
          "points": [
            "Pass-the-hash : réutiliser un hash NTLM volé sans connaître le mot de passe",
            "Kerberoasting : demander des service tickets et casser hors ligne le mot de passe du compte de service",
            "Golden ticket : forger des TGT après compromission du compte krbtgt",
            "Credential stuffing, brute force, rainbow tables ; défenses : MFA, mots de passe forts, surveillance"
          ],
          "narration": "L'IAM est une cible de choix. Avec pass-the-hash, l'attaquant s'authentifie en rejouant un hash NTLM volé, sans jamais connaître le mot de passe en clair. Le Kerberoasting exploite Kerberos : tout utilisateur authentifié peut demander des service tickets chiffrés avec le hash du mot de passe du compte de service, puis tenter de les casser hors ligne ; des mots de passe de service longs et aléatoires sont la parade. Pire encore, la compromission du compte krbtgt permet de forger des golden tickets, des TGT falsifiés donnant un accès quasi illimité au domaine. Ajoutez les attaques sur mots de passe, credential stuffing et rainbow tables. Les défenses : MFA, mots de passe robustes, surveillance des demandes de tickets anormales et protection renforcée des comptes à privilèges.",
          "astuce": "💡 Conseil examen : Kerberoasting cible les comptes de service via les service tickets ; pass-the-hash rejoue un hash NTLM ; golden ticket forge des TGT via krbtgt."
        },
        {
          "type": "question",
          "titre": "Contrôle de connaissances",
          "points": [],
          "narration": "Une mise en situation managériale, comme à l'examen. Pensez à la chronologie des priorités.",
          "q": "Un employé vient d'être licencié et son entretien de départ se termine. Que devriez-vous faire EN PREMIER ?",
          "choix": [
            "Archiver ses courriels pour son successeur",
            "Récupérer son ordinateur portable à la fin de la semaine",
            "Désactiver immédiatement son compte utilisateur",
            "Supprimer définitivement son compte et ses données"
          ],
          "reponse": 2,
          "explication": "La priorité est de désactiver immédiatement le compte : un employé licencié qui conserve ses accès représente un risque de sabotage très élevé. On ne supprime pas tout de suite, car le supérieur doit pouvoir examiner les données du compte. L'archivage et la récupération du matériel font partie de l'offboarding mais viennent après la désactivation, qui doit être immédiate."
        },
        {
          "type": "resume",
          "titre": "Résumé de la leçon et du domaine",
          "points": [
            "Cycle de vie : provisioning → revues → transferts → deprovisioning",
            "SCIM (REST/JSON) automatise le provisioning inter-domaines ; SPML est son ancêtre XML",
            "Privilege creep et excessive privilege : détectés par les revues d'accès",
            "Départ : désactiver immédiatement, puis revoir les données, puis supprimer",
            "PAM : vaulting, session recording, accès just-in-time ; comptes de service sous contrôle",
            "Attaques IAM : pass-the-hash, Kerberoasting, golden ticket, escalade et mouvement latéral"
          ],
          "narration": "Terminons. Le cycle de vie des identités court de la création du compte à sa suppression, en passant par les revues d'accès qui traquent la dérive des privilèges. Au départ d'un collaborateur, on désactive immédiatement, on récupère le matériel, et on ne supprime qu'après revue. Le PAM encadre les comptes à privilèges avec coffre-fort, enregistrement de session et accès just-in-time. Et gardez en tête les attaques qui visent l'IAM : pass-the-hash, Kerberoasting, golden ticket et le mouvement latéral qui s'ensuit. Vous avez maintenant une vision complète du Domaine 5 : place aux quiz pour consolider tout cela."
        }
      ]
    }
  ],
  "quiz": [
    {
      "q": "Quel est le but ULTIME de la combinaison identification, authentification et audit dans un système de contrôle d'accès ?",
      "choix": [
        "Assurer l'accountability des sujets",
        "Chiffrer les données sensibles",
        "Empêcher toute tentative d'accès non autorisé",
        "Garantir la disponibilité des systèmes"
      ],
      "reponse": 0,
      "explication": "L'accountability est le principe même du contrôle d'accès : c'est la combinaison d'une identification unique, d'une authentification fiable et de l'audit qui permet d'attribuer chaque action à un individu et de le tenir responsable. La disponibilité et le chiffrement relèvent d'autres objectifs de sécurité, et aucun mécanisme ne peut empêcher TOUTE tentative d'accès — le contrôle d'accès vise la responsabilité, pas l'impossibilité.",
      "pourquoi": [
        "Bonne réponse : l'accountability est la finalité du contrôle d'accès — attribuer chaque action à un individu unique et pouvoir le tenir responsable.",
        "Réponse de technicien : le chiffrement protège la confidentialité, mais il n'est pas le but de la chaîne IAAA.",
        "Piège absolu : aucun mécanisme ne peut empêcher TOUTE tentative d'accès non autorisé ; le contrôle d'accès vise la responsabilité, pas l'impossibilité.",
        "Techniquement souhaitable mais hors sujet : la disponibilité relève de la triade CIA, pas de la finalité du trio identification-authentification-audit."
      ],
      "difficulte": 1
    },
    {
      "q": "Un système exige un mot de passe puis un code PIN pour ouvrir une session. Comment qualifier cette authentification ?",
      "choix": [
        "Authentification à deux facteurs conforme à AAL2",
        "Facteur unique : les deux éléments sont de type connaissance",
        "Authentification forte, car le PIN est indépendant du mot de passe",
        "Authentification multifacteur, car deux éléments sont exigés"
      ],
      "reponse": 1,
      "explication": "Le MFA exige des facteurs de types différents. Un mot de passe et un PIN sont tous deux 'something you know' : c'est donc une authentification à facteur unique en deux étapes. Les réponses A, C et D confondent le nombre d'éléments demandés avec le nombre de types de facteurs, ce qui est le piège classique.",
      "pourquoi": [
        "Hors cadre : AAL2 exige deux TYPES de facteurs différents, ce que mot de passe + PIN ne fournissent pas.",
        "Bonne réponse : mot de passe et PIN sont tous deux « something you know » — authentification à facteur unique en deux étapes.",
        "Faux : l'indépendance de deux secrets ne crée pas une authentification forte s'ils appartiennent au même type de facteur.",
        "Piège classique : deux éléments demandés ne font pas deux facteurs quand ils sont du même type (connaissance)."
      ],
      "difficulte": 1
    },
    {
      "q": "Dans un centre de recherche très sensible, quel réglage biométrique est le PLUS approprié pour la porte d'accès au laboratoire ?",
      "choix": [
        "Minimiser le FRR pour fluidifier l'accès des chercheurs",
        "Régler le capteur exactement au CER",
        "Maximiser le débit d'enrôlement des utilisateurs",
        "Accepter un FRR plus élevé afin de minimiser le FAR"
      ],
      "reponse": 3,
      "explication": "Dans un environnement très sensible, laisser entrer un imposteur (erreur de type 2, FAR) est bien plus grave que rejeter un utilisateur légitime (erreur de type 1, FRR). On augmente donc la sensibilité, quitte à subir plus de faux rejets. Le CER est le point d'équilibre optimal seulement quand les deux erreurs ont des impacts équivalents, ce qui n'est pas le cas ici.",
      "pourquoi": [
        "Techniquement confortable mais contextuellement faux : fluidifier l'accès augmente le FAR, inacceptable pour un site très sensible.",
        "Trop générique : le CER sert à comparer des systèmes ; il n'est le bon réglage que si les deux erreurs ont un impact équivalent, ce qui n'est pas le cas ici.",
        "Hors sujet : le débit d'enrôlement est un critère d'ergonomie, pas de sécurité.",
        "Bonne réponse : dans un environnement très sensible, on accepte plus de faux rejets (FRR) pour minimiser les fausses acceptations (FAR)."
      ],
      "difficulte": 2
    },
    {
      "q": "Quelle affirmation décrit le MIEUX le Crossover Error Rate (CER) ?",
      "choix": [
        "Le temps moyen nécessaire pour enrôler un nouvel utilisateur",
        "Le taux d'utilisateurs légitimes rejetés par le système",
        "Le point où le FAR est égal au FRR ; plus il est bas, plus précis",
        "Le taux d'imposteurs acceptés lorsque la sensibilité est maximale"
      ],
      "reponse": 2,
      "explication": "Le CER est le point où le taux de fausses acceptations (FAR) égale le taux de faux rejets (FRR) : c'est la mesure de référence pour comparer la précision de systèmes biométriques, et un CER bas indique un système précis. La réponse B décrit le FRR, la D évoque le FAR, et la A concerne le processus d'enrôlement.",
      "pourquoi": [
        "Hors sujet : le temps d'enrôlement est un critère opérationnel sans lien avec la précision.",
        "Confusion de définition : le taux de rejets d'utilisateurs légitimes est le FRR, pas le CER.",
        "Bonne réponse : le CER est le point d'égalité FAR/FRR, mesure de référence de la précision d'un système biométrique.",
        "Confusion : l'acceptation d'imposteurs décrit le FAR, pas le point de croisement."
      ],
      "difficulte": 1
    },
    {
      "q": "Selon NIST SP 800-63B, quel niveau d'assurance d'authentification exige un authentificateur matériel avec résistance au phishing et à l'usurpation du vérifieur ?",
      "choix": [
        "AAL3",
        "AAL4",
        "AAL1",
        "AAL2"
      ],
      "reponse": 0,
      "explication": "AAL3 exige un MFA basé sur du matériel et impose la résistance au phishing et à l'usurpation du vérifieur (verifier impersonation). AAL1 accepte un facteur unique, AAL2 exige le MFA avec résistance au rejeu, et AAL4 n'existe pas dans NIST SP 800-63B.",
      "pourquoi": [
        "Bonne réponse : AAL3 impose un authentificateur matériel avec résistance au phishing et à l'usurpation du vérifieur.",
        "Piège d'invention : AAL4 n'existe pas dans NIST SP 800-63B.",
        "Trop faible : AAL1 accepte l'authentification à facteur unique.",
        "Trop faible : AAL2 exige le MFA mais n'impose ni matériel ni résistance à l'usurpation du vérifieur."
      ],
      "difficulte": 2
    },
    {
      "q": "Pourquoi le NIST déprécie-t-il l'usage du SMS comme second facteur pour les agences fédérales ?",
      "choix": [
        "Le SMS coûte trop cher à grande échelle",
        "Le SMS repose sur un appareil personnel qui échappe souvent à la gestion (MDM) de l'organisation",
        "Le canal SMS présente des vulnérabilités permettant l'interception des codes",
        "Le SMS est trop lent pour les utilisateurs"
      ],
      "reponse": 2,
      "explication": "NIST SP 800-63B pointe les vulnérabilités du canal SMS : interception, SIM swapping, redirection. Ce n'est ni une question de lenteur ni de coût ; et si l'appareil personnel non géré est un vrai enjeu de gestion des terminaux, ce n'est pas le motif de la dépréciation — le problème est la vulnérabilité du canal lui-même. Les alternatives recommandées incluent les applications TOTP et les authentificateurs matériels.",
      "pourquoi": [
        "Hors sujet : le coût n'entre pas dans l'analyse de sécurité du NIST.",
        "Techniquement vrai (terminal souvent hors MDM) mais ce n'est pas le motif du NIST : le problème est la vulnérabilité du canal lui-même.",
        "Bonne réponse : le canal SMS est vulnérable à l'interception, au SIM swapping et à la redirection — motif de la dépréciation par NIST SP 800-63B.",
        "Hors sujet : la latence n'est pas un critère de sécurité retenu par le NIST."
      ],
      "difficulte": 2
    },
    {
      "q": "Quelle est la PRINCIPALE différence entre une smart card et une memory card ?",
      "choix": [
        "La memory card est plus sécurisée car ses données ne changent jamais",
        "La puce de la smart card génère des données uniques à chaque usage",
        "La memory card exige toujours un code PIN",
        "La smart card fonctionne uniquement avec la biométrie"
      ],
      "reponse": 1,
      "explication": "La smart card embarque un circuit intégré capable de générer des données uniques à chaque transaction, ce qui empêche le rejeu. La memory card, à piste magnétique, restitue toujours les mêmes données, ce qui la rend facilement clonable — l'inverse de la sécurité affirmée en A. Les réponses C et D décrivent des exigences qui ne sont pas systématiques.",
      "pourquoi": [
        "Inversion : des données statiques rendent la memory card facilement clonable — c'est une faiblesse, pas une force.",
        "Bonne réponse : la puce de la smart card génère des données uniques à chaque transaction, ce qui empêche clonage et rejeu.",
        "Généralisation abusive : le PIN n'est pas systématique sur une memory card.",
        "Trop étroit et faux : la smart card fonctionne avec PIN, certificats ou biométrie, sans exclusivité."
      ],
      "difficulte": 2
    },
    {
      "q": "Quel est le PRINCIPAL risque introduit par le Single Sign-On, et quelle est la MEILLEURE parade ?",
      "choix": [
        "La dépendance à un annuaire central ; redonder l'infrastructure d'authentification",
        "L'absence d'audit ; activer la journalisation",
        "La multiplication des mots de passe ; imposer un gestionnaire de mots de passe",
        "Le point de compromission unique ; exiger le MFA sur l'identifiant SSO"
      ],
      "reponse": 3,
      "explication": "Le SSO crée un single point of compromise : un identifiant SSO volé expose toutes les ressources liées. La meilleure parade est de protéger cette authentification unique par du MFA. La dépendance à l'annuaire (A) est un vrai enjeu de disponibilité mais pas le risque de sécurité principal ; le SSO réduit justement le nombre de mots de passe (C est contradictoire) ; et B n'adresse pas le risque principal.",
      "pourquoi": [
        "Techniquement vrai (la disponibilité de l'annuaire est un enjeu) mais ce n'est pas le risque PRINCIPAL : le danger majeur est la compromission, pas la panne.",
        "Hors sujet : le SSO n'empêche pas l'audit ; la journalisation existe indépendamment.",
        "Contradiction : le SSO réduit justement le nombre de mots de passe.",
        "Bonne réponse : le SSO crée un point de compromission unique ; le MFA sur l'identifiant SSO est la parade prioritaire."
      ],
      "difficulte": 1
    },
    {
      "q": "Des utilisateurs d'un domaine Active Directory ne peuvent plus s'authentifier après le dérèglement de l'horloge d'un contrôleur de domaine. Quel protocole est la cause la PLUS probable du problème ?",
      "choix": [
        "SAML, car les assertions ont expiré",
        "RADIUS, car les ports UDP 1812 et 1813 seraient bloqués par le pare-feu",
        "Kerberos, car il dépend de la synchronisation horaire via NTP",
        "LDAP, car l'annuaire est corrompu"
      ],
      "reponse": 2,
      "explication": "Kerberos horodate ses tickets (TGT et service tickets) pour prévenir les attaques par rejeu ; il dépend donc de NTP pour synchroniser clients et serveurs. Une dérive d'horloge excessive fait échouer l'authentification. LDAP, RADIUS et SAML ne sont pas en cause dans un scénario de dérive horaire d'un contrôleur de domaine.",
      "pourquoi": [
        "Hors contexte : SAML n'intervient pas dans l'authentification interne d'un domaine AD.",
        "Hors phase : aucun blocage de ports n'est décrit dans le scénario.",
        "Bonne réponse : Kerberos horodate ses tickets contre le rejeu et tolère une dérive limitée — la synchronisation NTP est vitale.",
        "Réponse de technicien hors cause : une dérive d'horloge ne corrompt pas l'annuaire LDAP."
      ],
      "difficulte": 2
    },
    {
      "q": "Dans Kerberos, quel composant délivre les service tickets après vérification du TGT ?",
      "choix": [
        "Le Ticket-Granting Service (TGS)",
        "Le principal",
        "L’Authentication Service (AS), qui délivre le TGT initial",
        "Le realm"
      ],
      "reponse": 0,
      "explication": "Le TGS, hébergé par le KDC, vérifie le TGT présenté par le client puis délivre un service ticket pour la ressource demandée. L'AS vérifie l'authenticité initiale des demandes et participe à l'émission du TGT. Le principal est l'entité qui demande les tickets, et le realm est la zone logique gouvernée par Kerberos.",
      "pourquoi": [
        "Bonne réponse : le TGS vérifie le TGT présenté puis délivre les service tickets.",
        "Contresens : le principal est l'entité qui DEMANDE les tickets, il n'en délivre pas.",
        "Trop tôt dans le processus : l'AS gère l'authentification initiale et participe à l'émission du TGT, pas des service tickets.",
        "Hors sujet : le realm est la zone logique Kerberos, pas un composant actif."
      ],
      "difficulte": 2
    },
    {
      "q": "Quelle affirmation sur le processus de connexion Kerberos est EXACTE ?",
      "choix": [
        "Le KDC utilise la cryptographie asymétrique pour distribuer les clés",
        "Le mot de passe n’est jamais transmis, mais vérifié via son hash",
        "Le mot de passe de l'utilisateur est transmis chiffré au KDC",
        "Le TGT est stocké en clair sur le serveur de ressources"
      ],
      "reponse": 1,
      "explication": "Le KDC chiffre la clé de session avec un hash du mot de passe de l'utilisateur : seul le détenteur du bon mot de passe peut la déchiffrer. Le mot de passe n'est donc jamais transmis, mais il est bien vérifié. Kerberos v5 utilise la cryptographie symétrique (AES), pas asymétrique, et le TGT chiffré est installé côté client, pas sur le serveur de ressources.",
      "pourquoi": [
        "Faux : Kerberos v5 repose sur la cryptographie symétrique (AES), pas asymétrique.",
        "Bonne réponse : le KDC chiffre la clé de session avec un hash du mot de passe — seul le détenteur du bon mot de passe peut la déchiffrer.",
        "Faux : le mot de passe n'est jamais transmis, même chiffré.",
        "Faux et dangereux : le TGT chiffré est conservé côté client, jamais en clair sur le serveur de ressources."
      ],
      "difficulte": 3
    },
    {
      "q": "Quelle organisation maintient le standard SAML 2.0 ?",
      "choix": [
        "OpenID Foundation",
        "W3C",
        "IETF",
        "OASIS"
      ],
      "reponse": 3,
      "explication": "SAML 2.0 est un standard ouvert basé sur XML maintenu par l'OASIS. L'IETF maintient OAuth 2.0 (RFC 6749), l'OpenID Foundation maintient OIDC, et le W3C est derrière WebAuthn et l'API Credential Management.",
      "pourquoi": [
        "Confusion : l'OpenID Foundation maintient OIDC, pas SAML.",
        "Confusion : le W3C est derrière WebAuthn, pas SAML.",
        "Confusion d'organismes : l'IETF maintient OAuth 2.0 (RFC 6749).",
        "Bonne réponse : SAML 2.0 est un standard XML maintenu par l'OASIS."
      ],
      "difficulte": 2
    },
    {
      "q": "Dans SAML 2.0, quelle assertion prouve que l'utilisateur a fourni les bons identifiants et précise la méthode et l'heure de connexion ?",
      "choix": [
        "L’assertion d’autorisation (décision d’accès au service)",
        "L'assertion d'attribut",
        "L'assertion d'authentification",
        "L'assertion de session"
      ],
      "reponse": 2,
      "explication": "L'authentication assertion prouve que l'agent utilisateur a fourni les bons identifiants, identifie la méthode d'identification et l'heure de connexion. L'authorization assertion indique si l'accès au service est accordé (et pourquoi en cas de refus), l'attribute assertion transporte des informations sur l'utilisateur, et l'assertion de session n'existe pas dans SAML.",
      "pourquoi": [
        "Hors cible : l'assertion d'autorisation indique si l'accès est accordé, pas comment l'utilisateur s'est authentifié.",
        "Hors cible : l'assertion d'attribut transporte des informations sur l'utilisateur, pas la preuve de connexion.",
        "Bonne réponse : l'authentication assertion prouve la fourniture des identifiants et précise la méthode et l'heure de connexion.",
        "Piège d'invention : l'assertion de session n'existe pas dans SAML."
      ],
      "difficulte": 2
    },
    {
      "q": "Un utilisateur se connecte à une nouvelle application mobile en utilisant son compte Google au lieu de créer un compte dédié. Quel protocole est le PLUS probablement à l'œuvre ?",
      "choix": [
        "OpenID Connect (OIDC)",
        "TACACS+",
        "OAuth 2.0 seul, sans couche d’identité",
        "Kerberos"
      ],
      "reponse": 0,
      "explication": "Se connecter à un service tiers via un compte existant est un scénario d'authentification fédérée : OIDC, couche d'authentification bâtie sur OAuth 2.0, avec des jetons JWT. OAuth seul ne fait que de l'autorisation déléguée (accéder à des ressources, pas prouver une identité). Kerberos est un SSO interne et TACACS+ un protocole AAA réseau.",
      "pourquoi": [
        "Bonne réponse : se connecter via un compte existant est de l'authentification fédérée — OIDC, couche d'identité bâtie sur OAuth 2.0.",
        "Hors sujet : TACACS+ est un protocole AAA pour équipements réseau.",
        "Trop étroit : OAuth seul délègue des autorisations, il ne prouve pas une identité.",
        "Hors contexte : Kerberos est un SSO de réseau interne, pas un protocole web grand public."
      ],
      "difficulte": 2
    },
    {
      "q": "Quelle est la relation ENTRE OAuth 2.0 et OpenID Connect ?",
      "choix": [
        "Les deux sont des protocoles d'authentification concurrents et incompatibles",
        "OIDC est une couche d’authentification bâtie sur le framework OAuth 2.0",
        "OAuth 2.0 est une extension d'OIDC dédiée au chiffrement",
        "OIDC remplace OAuth 2.0, qui est déprécié"
      ],
      "reponse": 1,
      "explication": "OIDC ajoute l'authentification (jetons d'identité JWT, profil utilisateur) au-dessus du framework d'autorisation OAuth 2.0 : les deux sont complémentaires, pas concurrents. OAuth n'est ni une extension d'OIDC ni déprécié ; il reste le standard ouvert le plus utilisé pour l'autorisation et la délégation de droits vers les services cloud.",
      "pourquoi": [
        "Faux : les deux protocoles sont complémentaires, pas concurrents.",
        "Bonne réponse : OIDC est la couche d'authentification construite sur le framework d'autorisation OAuth 2.0.",
        "Inversion des rôles : OAuth n'étend pas OIDC et ne traite pas de chiffrement.",
        "Faux : OAuth 2.0 n'est pas déprécié — il reste le standard d'autorisation le plus utilisé."
      ],
      "difficulte": 2
    },
    {
      "q": "Quel avantage TACACS+ offre-t-il par rapport à RADIUS ?",
      "choix": [
        "Il utilise UDP, plus rapide que TCP",
        "Il ne nécessite aucun serveur central et fonctionne entièrement en pair-à-pair sur le réseau local",
        "Il est rétrocompatible avec Diameter",
        "Il chiffre l'ensemble des informations d'authentification et sépare les processus AAA"
      ],
      "reponse": 3,
      "explication": "TACACS+ chiffre la totalité des échanges d'authentification (RADIUS ne chiffre par défaut que le mot de passe) et sépare authentification, autorisation et accounting en processus distincts, hébergeables sur des serveurs différents. Il utilise TCP port 49 (pas UDP), reste un modèle centralisé, et Diameter n'est compatible ni avec RADIUS ni concerné ici.",
      "pourquoi": [
        "Doublement faux : TACACS+ utilise TCP (port 49), et UDP n'est pas un avantage de sécurité.",
        "Faux : TACACS+ reste un modèle AAA centralisé.",
        "Faux : Diameter n'est rétrocompatible ni avec RADIUS ni avec TACACS+.",
        "Bonne réponse : TACACS+ chiffre l'intégralité des échanges et sépare authentification, autorisation et accounting."
      ],
      "difficulte": 2
    },
    {
      "q": "Quels ports UDP RADIUS utilise-t-il par défaut pour les messages d'authentification et d'accounting ?",
      "choix": [
        "1812 et 1813",
        "2083 et 2084 (RadSec)",
        "88 et 89",
        "49 et 50"
      ],
      "reponse": 0,
      "explication": "RADIUS utilise UDP 1812 pour l'authentification et UDP 1813 pour l'accounting. Le port 88 est celui de Kerberos, TCP 49 celui de TACACS+, et TCP 2083 celui de RADIUS sur TLS (RadSec) défini par la RFC 6614.",
      "pourquoi": [
        "Bonne réponse : UDP 1812 pour l'authentification et UDP 1813 pour l'accounting.",
        "Confusion : 2083 correspond à RadSec (RADIUS sur TLS, RFC 6614).",
        "Confusion : 88 est le port de Kerberos.",
        "Confusion : 49 est le port TCP de TACACS+."
      ],
      "difficulte": 3
    },
    {
      "q": "Quelle caractéristique distingue Diameter de RADIUS ?",
      "choix": [
        "Diameter est limité aux petits réseaux d'accès distant",
        "Diameter est rétrocompatible avec RADIUS pour faciliter la migration",
        "Diameter ne chiffre que le mot de passe pour rester performant",
        "Diameter utilise TCP ou SCTP et sécurise les échanges avec IPsec ou TLS"
      ],
      "reponse": 3,
      "explication": "Diameter corrige les faiblesses de RADIUS : transport fiable en TCP ou SCTP, sécurité par IPsec ou TLS (au lieu du hachage MD5), attributs étendus pour les grands réseaux et gestion de sessions complexes. Mais il n'est PAS rétrocompatible avec RADIUS, ne se limite pas au mot de passe, et vise justement les réseaux vastes et complexes.",
      "pourquoi": [
        "Inversion : Diameter vise précisément les grands réseaux complexes.",
        "Piège fréquent : Diameter n'est PAS rétrocompatible avec RADIUS.",
        "Contresens : c'est RADIUS qui ne chiffre par défaut que le mot de passe.",
        "Bonne réponse : Diameter utilise TCP ou SCTP et sécurise les échanges par IPsec ou TLS."
      ],
      "difficulte": 3
    },
    {
      "q": "Vous créez un fichier sur un partage NTFS et accordez vous-même les permissions de lecture à vos collègues. Quel modèle de contrôle d'accès est en jeu ?",
      "choix": [
        "Mandatory Access Control",
        "Rule-Based Access Control",
        "Discretionary Access Control",
        "Role-Based Access Control"
      ],
      "reponse": 2,
      "explication": "Dans le DAC, chaque objet a un propriétaire qui accorde ou refuse l'accès à sa discrétion via des ACL — c'est le modèle de NTFS. Le MAC repose sur des labels imposés par le système, le RBAC sur des rôles gérés centralement, et le rule-based sur des règles globales appliquées à tous les sujets.",
      "pourquoi": [
        "Contresens : le MAC impose des labels par le système — personne ne s'octroie de permissions soi-même.",
        "Hors modèle : le rule-based applique des règles globales identiques à tous.",
        "Bonne réponse : accorder soi-même des accès sur son fichier via des ACL est la définition du DAC — le modèle de NTFS.",
        "Hors modèle : le RBAC centralise les droits dans des rôles gérés par l'administration."
      ],
      "difficulte": 1
    },
    {
      "q": "Quelle est la caractéristique CLÉ du modèle Mandatory Access Control ?",
      "choix": [
        "Le propriétaire de l'objet décide des accès",
        "Le système impose la politique via des labels sur sujets et objets",
        "Les règles s'appuient sur des attributs multiples exprimés en XACML",
        "Les privilèges sont attribués via des rôles métier"
      ],
      "reponse": 1,
      "explication": "Le MAC se reconnaît à ses labels de classification appliqués aux sujets comme aux objets, l'accès étant imposé par le système selon la politique de l'organisation (modèle lattice-based, need to know). La réponse A décrit le DAC, la C l'ABAC et la D le RBAC.",
      "pourquoi": [
        "Confusion : le propriétaire qui décide, c'est la définition du DAC.",
        "Bonne réponse : labels sur sujets et objets, politique imposée par le système — la signature du MAC.",
        "Confusion : les règles à attributs multiples en XACML décrivent l'ABAC.",
        "Confusion : les privilèges par rôles métier décrivent le RBAC."
      ],
      "difficulte": 1
    },
    {
      "q": "Une organisation à fort turnover veut réduire la charge d'administration des permissions tout en limitant le privilege creep. Quel modèle est le PLUS adapté ?",
      "choix": [
        "DAC, pour responsabiliser les propriétaires de fichiers",
        "MAC, avec des labels de classification",
        "Rule-based, avec des règles de pare-feu",
        "RBAC, en assignant les privilèges à des rôles métier"
      ],
      "reponse": 3,
      "explication": "Le RBAC attribue les privilèges à des rôles alignés sur les fonctions : à chaque mouvement de personnel, il suffit de changer l'appartenance au rôle, ce qui minimise la charge d'administration et empêche l'accumulation de droits. Le DAC disperse les décisions, le MAC est lourd et destiné aux environnements de haute sécurité, et le rule-based ne gère pas les fonctions métier.",
      "pourquoi": [
        "Techniquement possible mais contre-productif : le DAC disperse les décisions et aggrave la charge à fort turnover.",
        "Techniquement vrai mais hors contexte : le MAC est lourd et réservé aux environnements de haute sécurité.",
        "Hors sujet : le rule-based ne modélise pas les fonctions métier.",
        "Bonne réponse : avec le RBAC, un changement de poste se gère en changeant l'appartenance au rôle, ce qui limite aussi le privilege creep."
      ],
      "difficulte": 2
    },
    {
      "q": "Une politique s'écrit : « Autoriser les managers à accéder au WAN depuis un appareil mobile pendant les heures ouvrées ». Quel modèle permet ce type de règle ?",
      "choix": [
        "Mandatory Access Control (MAC)",
        "Discretionary Access Control (DAC)",
        "Attribute-Based Access Control (ABAC)",
        "Role-Based Access Control (RBAC) seul"
      ],
      "reponse": 2,
      "explication": "L'ABAC combine plusieurs attributs — le rôle du sujet (manager), le type d'appareil (mobile), la ressource (WAN) et l'environnement (heures ouvrées) — dans des politiques exprimables en langage naturel, formalisées avec XACML. Le RBAC seul ne prend en compte que le rôle, sans les attributs d'environnement ; DAC et MAC ne fonctionnent pas par règles à attributs.",
      "pourquoi": [
        "Hors modèle : le MAC classe par niveaux de sensibilité, sans conditions contextuelles.",
        "Hors modèle : le DAC repose sur le propriétaire, pas sur des règles à attributs.",
        "Bonne réponse : rôle, type d'appareil, ressource et plage horaire sont des attributs combinés — c'est l'ABAC.",
        "Trop étroit : le RBAC seul ne capture ni l'appareil ni l'horaire."
      ],
      "difficulte": 2
    },
    {
      "q": "Dans une architecture d'application de politiques d'accès, quel composant PREND la décision et lequel l'APPLIQUE ?",
      "choix": [
        "Le KDC décide, le TGS applique",
        "Le PDP décide, le PEP applique",
        "L'IdP décide, le SP applique",
        "Le PEP décide, le PDP applique"
      ],
      "reponse": 1,
      "explication": "Le Policy Decision Point évalue les demandes d'accès selon les règles prédéfinies et rend la décision ; le Policy Enforcement Point, en gatekeeper, reçoit les demandes, les transmet au PDP puis applique la décision (accès accordé ou refusé). La réponse D inverse les rôles ; IdP/SP relèvent de la fédération et KDC/TGS de Kerberos.",
      "pourquoi": [
        "Hors sujet : KDC et TGS relèvent de Kerberos.",
        "Bonne réponse : le PDP évalue la demande et décide ; le PEP, en point de passage, applique la décision.",
        "Hors sujet : IdP et SP relèvent de la fédération, pas de l'architecture de politiques.",
        "Inversion des rôles PEP/PDP — le piège classique de cette architecture."
      ],
      "difficulte": 2
    },
    {
      "q": "Un système bloque automatiquement le trafic d'un appareil IoT dont le comportement est jugé anormal par un moteur d'apprentissage automatique. Quel modèle de contrôle d'accès est illustré ?",
      "choix": [
        "Risk-based access control",
        "Rule-based access control",
        "Content-dependent control",
        "Discretionary access control"
      ],
      "reponse": 0,
      "explication": "Le risk-based access control évalue l'environnement et la situation (localisation, MFA, appareil, comportement) et peut utiliser le machine learning pour comparer l'activité courante aux comportements passés, par exemple pour bloquer le trafic anormal d'un IoT infecté. Le rule-based applique des règles statiques identiques pour tous, le content-dependent examine le contenu accédé, et le DAC repose sur le propriétaire.",
      "pourquoi": [
        "Bonne réponse : évaluer le contexte et le comportement, y compris par machine learning, est du risk-based access control.",
        "Trop statique : le rule-based applique des règles identiques pour tous, sans analyse comportementale.",
        "Hors cible : le content-dependent examine le contenu accédé, pas le comportement.",
        "Hors modèle : le DAC repose sur le propriétaire, sans moteur d'évaluation."
      ],
      "difficulte": 2
    },
    {
      "q": "Lors d'une revue d'accès, vous découvrez qu'un employé muté deux fois conserve les droits de ses trois postes successifs. Comment nomme-t-on ce phénomène et quel principe viole-t-il ?",
      "choix": [
        "Escalade verticale ; violation de la separation of duties",
        "Excessive delegation ; violation du need to know",
        "Mouvement latéral ; violation de l'implicit deny",
        "Privilege creep ; violation du least privilege"
      ],
      "reponse": 3,
      "explication": "L'accumulation de privilèges au fil des changements de poste est le privilege creep (creeping privileges), qui viole le principe du least privilege. L'escalade verticale et le mouvement latéral sont des techniques d'attaque, pas des dérives administratives. Les revues d'accès périodiques sont précisément le contrôle qui détecte cette dérive.",
      "pourquoi": [
        "Confusion : l'escalade verticale est une technique d'attaque, pas une dérive administrative.",
        "Piège d'invention : « excessive delegation » n'est pas le terme consacré.",
        "Confusion : le mouvement latéral est une technique d'attaque réseau, pas un cumul de droits.",
        "Bonne réponse : l'accumulation de droits au fil des postes est le privilege creep, violation du least privilege."
      ],
      "difficulte": 1
    },
    {
      "q": "Pourquoi faut-il éviter d'utiliser le compte système local comme compte de service pour une application ?",
      "choix": [
        "Il accorde généralement à l'application plus d'accès qu'elle n'en a besoin",
        "Son mot de passe ne peut pas être placé dans un coffre-fort PAM",
        "Ses actions se confondent avec celles du système, ce qui complique l'audit",
        "Il ne permet pas l'authentification auprès des ressources réseau"
      ],
      "reponse": 0,
      "explication": "Le compte système local évite de créer un compte de service dédié, mais il accorde presque toujours des privilèges excessifs à l'application, en violation du least privilege — et limiter les privilèges des comptes de service réduit le succès des attaques par escalade. La difficulté d'attribution dans les journaux (C) est réelle mais secondaire par rapport au sur-privilège ; B et D sont factuellement fausses.",
      "pourquoi": [
        "Bonne réponse : le compte système accorde presque toujours plus de privilèges que nécessaire, en violation du least privilege.",
        "Faux : la gestion en coffre-fort n'est pas le problème — le risque du compte système est ailleurs.",
        "Techniquement vrai mais secondaire : la difficulté d'audit est réelle, mais le risque premier est le sur-privilège exploitable par escalade.",
        "Faux techniquement : dans un domaine, le compte machine peut s'authentifier auprès des ressources réseau."
      ],
      "difficulte": 2
    },
    {
      "q": "Un attaquant authentifié sur le domaine demande des service tickets Kerberos pour des comptes de service, puis tente de casser hors ligne les mots de passe à partir des tickets. Comment s'appelle cette attaque ?",
      "choix": [
        "Pass-the-hash",
        "Credential stuffing",
        "Kerberoasting",
        "Golden ticket"
      ],
      "reponse": 2,
      "explication": "Le Kerberoasting consiste à demander des service tickets (chiffrés avec le hash du mot de passe du compte de service) puis à les casser hors ligne ; la parade est d'utiliser des mots de passe de service longs et aléatoires. Le pass-the-hash rejoue un hash NTLM volé, le golden ticket forge des TGT après compromission du compte krbtgt, et le credential stuffing rejoue des identifiants volés sur d'autres sites.",
      "pourquoi": [
        "Confusion : le pass-the-hash rejoue un hash NTLM volé, sans cassage hors ligne de tickets.",
        "Hors sujet : le credential stuffing rejoue des identifiants volés ailleurs, sans lien avec Kerberos.",
        "Bonne réponse : demander des service tickets puis casser hors ligne le mot de passe du compte de service est le Kerberoasting.",
        "Trop puissant pour le scénario : le golden ticket exige le hash de krbtgt, non décrit ici."
      ],
      "difficulte": 3
    },
    {
      "q": "Après avoir compromis le poste d'un utilisateur standard, un attaquant obtient les droits administrateur de la machine, puis accède avec des privilèges similaires à d'autres postes du réseau. Quelles techniques décrit ce scénario, dans l'ordre ?",
      "choix": [
        "Privilege creep, puis session hijacking après vol du cookie de session",
        "Escalade verticale, puis escalade horizontale (mouvement latéral)",
        "Escalade horizontale, puis escalade verticale",
        "Kerberoasting, puis pass-the-hash"
      ],
      "reponse": 1,
      "explication": "Passer d'utilisateur standard à administrateur est une escalade verticale (privilèges nettement supérieurs) ; se propager ensuite vers d'autres machines avec des privilèges similaires est une escalade horizontale, appelée mouvement latéral à l'échelle du réseau. La réponse C inverse l'ordre, la D nomme des attaques spécifiques non décrites ici, et la A confond avec des dérives administratives.",
      "pourquoi": [
        "Confusion : privilege creep et session hijacking sont d'autres notions.",
        "Bonne réponse : utilisateur vers administrateur = escalade verticale ; propagation à privilèges équivalents = escalade horizontale (mouvement latéral).",
        "Inversion de l'ordre des deux escalades.",
        "Trop spécifique : aucune de ces deux attaques nommées n'est décrite dans le scénario."
      ],
      "difficulte": 2
    },
    {
      "q": "Quelle fonctionnalité relève spécifiquement d'une solution de Privileged Access Management (PAM) ?",
      "choix": [
        "L’enregistrement de session et l’accès just-in-time",
        "Le filtrage des courriels entrants",
        "La génération de certificats TLS pour les serveurs web",
        "La sauvegarde chiffrée des bases de données"
      ],
      "reponse": 0,
      "explication": "Les solutions PAM gèrent, surveillent et auditent les comptes à privilèges : coffre-fort d'identifiants (credential vaulting), enregistrement des sessions et attribution just-in-time des privilèges élevés. Les certificats, le filtrage de courriels et les sauvegardes relèvent d'autres familles d'outils.",
      "pourquoi": [
        "Bonne réponse : enregistrement des sessions privilégiées et accès just-in-time sont des fonctions cœur du PAM.",
        "Hors famille d'outils : le filtrage de courriels relève de la sécurité de messagerie.",
        "Réponse de technicien PKI : la gestion de certificats TLS n'est pas du PAM.",
        "Hors famille d'outils : les sauvegardes relèvent de la continuité d'activité."
      ],
      "difficulte": 1
    },
    {
      "q": "Une fédération d'identités permet aux employés d'un partenaire d'accéder à votre portail : leur compte est créé automatiquement lors de leur première connexion, sans intervention d'un administrateur. Quel mécanisme et quel protocole d'échange sont les PLUS probablement utilisés ?",
      "choix": [
        "Self-service provisioning via RADIUS",
        "Just-in-time provisioning via SAML",
        "Workflow provisioning via LDAP",
        "Automated deprovisioning via OAuth"
      ],
      "reponse": 1,
      "explication": "Le provisioning just-in-time crée automatiquement le compte chez le fournisseur de service lors de la première connexion fédérée, sans intervention administrative, et s'appuie couramment sur SAML pour échanger les données requises. Le workflow provisioning passe par un processus établi (souvent RH), le deprovisioning supprime des comptes, et RADIUS n'est pas un protocole de fédération.",
      "pourquoi": [
        "Faux : RADIUS n'est pas un protocole de fédération.",
        "Bonne réponse : création automatique du compte à la première connexion fédérée = just-in-time provisioning, classiquement porté par SAML.",
        "Hors mécanisme : le workflow provisioning passe par un processus d'approbation, pas une création automatique à la connexion.",
        "Hors phase : le deprovisioning supprime des comptes, il n'en crée pas."
      ],
      "difficulte": 2
    },
    {
      "q": "Votre organisation utilise 40 applications SaaS et souhaite que la création et la suppression des comptes soient automatiquement synchronisées depuis l'annuaire central. Quel standard est le MIEUX adapté ?",
      "choix": [
        "SPML",
        "SAML",
        "SCIM",
        "OAuth 2.0"
      ],
      "reponse": 2,
      "explication": "SCIM (System for Cross-domain Identity Management) est le standard moderne de provisioning automatisé inter-domaines, basé sur une API REST et le format JSON : il propage créations, mises à jour et suppressions de comptes vers les applications cloud. SPML poursuivait le même but mais est un ancien standard XML quasi abandonné ; SAML sert à l'authentification fédérée (assertions), et OAuth 2.0 à la délégation d'autorisation, pas au provisioning.",
      "pourquoi": [
        "Piège d'ancienneté : SPML poursuivait ce but mais c'est un standard XML quasi abandonné.",
        "Hors rôle : SAML transporte des assertions d'authentification, pas des opérations de gestion de comptes.",
        "Bonne réponse : SCIM, standard REST/JSON, automatise création, mise à jour et suppression de comptes vers les applications SaaS.",
        "Hors rôle : OAuth 2.0 délègue des autorisations, il ne provisionne pas de comptes."
      ],
      "difficulte": 2
    },
    {
      "q": "Quelle affirmation décrit le MIEUX la relation entre SPML et SCIM ?",
      "choix": [
        "Les deux sont des protocoles d'authentification unique (SSO)",
        "SCIM est un profil de SPML pour les environnements cloud",
        "SPML gère le provisioning et SCIM gère l'authentification des utilisateurs",
        "SPML est l’ancien provisioning XML ; SCIM son successeur REST/JSON"
      ],
      "reponse": 3,
      "explication": "SPML (Service Provisioning Markup Language) est un standard XML de provisioning qui n'a jamais été largement adopté ; SCIM l'a remplacé avec une approche moderne fondée sur des API REST et JSON, largement supportée par les fournisseurs SaaS. Aucun des deux n'authentifie les utilisateurs ni ne fournit de SSO : ce sont des standards de gestion du cycle de vie des comptes.",
      "pourquoi": [
        "Faux : aucun des deux ne fournit de SSO.",
        "Faux : SCIM n'est pas un profil de SPML, c'est un standard distinct qui l'a remplacé.",
        "Faux : ni l'un ni l'autre n'authentifie les utilisateurs.",
        "Bonne réponse : SPML est l'ancien standard de provisioning en XML ; SCIM est son successeur moderne REST/JSON."
      ],
      "difficulte": 2
    },
    {
      "q": "Un employé badge à l'entrée du datacenter, saisit un code PIN, puis le système enregistre son entrée dans un journal horodaté. À quelles étapes du modèle IAAA correspondent respectivement le badge présenté, le PIN saisi et le journal ?",
      "choix": [
        "Identification ; authentification ; accountability",
        "Identification ; autorisation ; accountability",
        "Authentification ; identification ; autorisation",
        "Authentification ; autorisation ; audit"
      ],
      "reponse": 0,
      "explication": "Présenter le badge revient à déclarer une identité (identification), le PIN prouve que le porteur est bien le titulaire (authentification), et le journal horodaté fournit la trace qui rend l'individu responsable de ses actions (accountability via l'audit). L'autorisation, non citée ici, serait la vérification que cette identité a le droit d'entrer dans cette zone. Les autres réponses inversent ou confondent les étapes.",
      "pourquoi": [
        "Bonne réponse : badge = déclaration d'identité, PIN = preuve de cette identité, journal = accountability.",
        "Confusion : le PIN est une preuve (authentification), pas une autorisation.",
        "Double inversion des deux premières étapes du modèle.",
        "Inversion : le badge seul ne prouve rien et le PIN n'accorde pas de droits."
      ],
      "difficulte": 1
    },
    {
      "q": "Lors d'une investigation, l'équipe SOC ne parvient pas à déterminer QUEL administrateur a supprimé une base de données, car les trois administrateurs partagent le compte 'admin'. Quel pilier du modèle IAAA est fondamentalement compromis ?",
      "choix": [
        "L'authentification, car le mot de passe était faible",
        "L'accountability, car l'identification n'est pas unique",
        "La disponibilité, car la base a été supprimée",
        "L'autorisation, car le compte avait trop de droits"
      ],
      "reponse": 1,
      "explication": "L'accountability exige une chaîne complète : identification unique, authentification fiable et audit. Un compte partagé brise le premier maillon — impossible d'attribuer une action à un individu précis, donc impossible de le tenir responsable, même avec des journaux parfaits. Ce n'est pas d'abord un problème d'autorisation ni de robustesse du mot de passe, et la disponibilité est une conséquence de l'incident, pas le pilier IAM compromis.",
      "pourquoi": [
        "Hors sujet : la robustesse du mot de passe n'est pas en cause.",
        "Bonne réponse : sans identification unique, la chaîne de l'accountability est brisée dès le premier maillon.",
        "Confusion cause/conséquence : la perte de la base est l'impact de l'incident, pas le pilier IAM compromis.",
        "Techniquement discutable mais hors cible : le scénario décrit une impossibilité d'ATTRIBUER l'action, pas un excès de droits."
      ],
      "difficulte": 2
    },
    {
      "q": "Après plusieurs compromissions par phishing malgré le déploiement de codes TOTP, le RSSI veut une authentification résistante au phishing. Quelle solution répond le MIEUX à ce besoin ?",
      "choix": [
        "Imposer un changement de mot de passe tous les 30 jours",
        "Envoyer les codes par SMS plutôt que par application",
        "Allonger les codes TOTP à huit chiffres",
        "Déployer des clés FIDO2/WebAuthn liées à l’origine"
      ],
      "reponse": 3,
      "explication": "FIDO2/WebAuthn est résistant au phishing par conception : la clé privée ne quitte jamais l'authentificateur et la signature est cryptographiquement liée à l'origine (le domaine) du site légitime — un site de phishing, même parfaitement imité, ne peut pas obtenir de réponse valide. Les codes TOTP et SMS restent saisissables par l'utilisateur sur un faux site (attaque adversary-in-the-middle), quelle que soit leur longueur, et la rotation des mots de passe n'empêche pas leur capture en temps réel.",
      "pourquoi": [
        "Hors sujet : la rotation des mots de passe n'empêche pas leur capture en temps réel.",
        "Régression : le SMS est plus vulnérable que le TOTP (interception, SIM swapping).",
        "Inutile : un code TOTP à huit chiffres reste saisissable sur un faux site relayé en temps réel.",
        "Bonne réponse : FIDO2/WebAuthn lie cryptographiquement la signature à l'origine du site — un site de phishing n'obtient jamais de réponse valide."
      ],
      "difficulte": 2
    },
    {
      "q": "Quelle est la PRINCIPALE différence de sécurité entre une passkey synchronisée (via un cloud grand public) et une passkey liée à l'appareil (device-bound, ex. clé de sécurité matérielle) ?",
      "choix": [
        "La passkey device-bound exige obligatoirement un mot de passe en complément",
        "La passkey synchronisée est vulnérable au phishing, contrairement à la device-bound",
        "La passkey device-bound garantit que la clé privée ne peut pas être copiée hors du matériel",
        "La passkey synchronisée n'utilise pas la cryptographie asymétrique"
      ],
      "reponse": 2,
      "explication": "Les deux types reposent sur la même cryptographie asymétrique WebAuthn et sont résistants au phishing. La différence porte sur l'exportabilité de la clé privée : une passkey synchronisée est répliquée entre appareils via un compte cloud (la sécurité dépend alors de ce compte et de son recouvrement), tandis qu'une passkey device-bound reste confinée dans le matériel (élément sécurisé, clé FIDO), ce qui offre une assurance supérieure — exigée par exemple pour atteindre AAL3. Les réponses A, B et D sont fausses.",
      "pourquoi": [
        "Faux : aucun mot de passe complémentaire n'est exigé pour une passkey device-bound.",
        "Faux : les deux types sont résistants au phishing par conception.",
        "Bonne réponse : la clé privée d'une passkey device-bound ne peut pas être extraite du matériel — assurance supérieure, exigée par exemple pour AAL3.",
        "Faux : les deux types de passkeys utilisent la même cryptographie asymétrique WebAuthn."
      ],
      "difficulte": 3
    },
    {
      "q": "Des employés reçoivent en pleine nuit des dizaines de notifications push MFA et l'un d'eux finit par approuver pour faire cesser les alertes. Quelle attaque est décrite et quelle est la MEILLEURE contre-mesure ?",
      "choix": [
        "Credential stuffing ; imposer des mots de passe uniques et surveiller les fuites",
        "Session hijacking ; raccourcir la durée des sessions",
        "MFA fatigue (push bombing) ; activer le number matching ou passer à FIDO2",
        "SIM swapping ; contacter l'opérateur mobile"
      ],
      "reponse": 2,
      "explication": "Le MFA fatigue (ou push bombing) consiste à bombarder l'utilisateur de demandes push jusqu'à ce qu'il approuve par lassitude ou erreur — l'attaquant possède déjà le mot de passe. Le number matching (saisir un code affiché à l'écran de connexion dans l'application) ou un authentificateur FIDO2 supprime l'approbation aveugle. Le credential stuffing est l'étape amont probable mais ne décrit pas le bombardement de notifications ; le SIM swapping vise les SMS et le session hijacking des sessions déjà ouvertes.",
      "pourquoi": [
        "Hors phase : le credential stuffing est l'étape amont probable, mais il ne décrit pas le bombardement de notifications.",
        "Hors phase : le session hijacking détourne des sessions déjà ouvertes.",
        "Bonne réponse : le MFA fatigue (push bombing) exploite la lassitude ; le number matching ou FIDO2 supprime l'approbation aveugle.",
        "Hors canal : le SIM swapping vise le SMS, absent du scénario."
      ],
      "difficulte": 2
    },
    {
      "q": "Dans l'architecture FIDO2, quels sont les deux composants standardisés et leur rôle respectif ?",
      "choix": [
        "SAML pour le navigateur et OAuth pour l'authentificateur",
        "PKCS#11 pour la carte à puce et X.509 pour le certificat",
        "TOTP pour générer les codes et HOTP pour les vérifier",
        "WebAuthn (API) et CTAP (protocole vers l’authentificateur)"
      ],
      "reponse": 3,
      "explication": "FIDO2 combine WebAuthn (API du W3C permettant au site web, via le navigateur, de créer et vérifier des credentials à clé publique) et CTAP (Client to Authenticator Protocol de la FIDO Alliance, qui fait dialoguer le navigateur avec un authentificateur externe comme une clé USB/NFC ou un smartphone). TOTP/HOTP sont des générateurs de codes à usage unique sans lien avec FIDO2, et PKCS#11/X.509 relèvent des infrastructures à clé publique classiques.",
      "pourquoi": [
        "Mélange incohérent : SAML et OAuth n'interviennent pas dans FIDO2.",
        "Hors sujet : PKCS#11 et X.509 relèvent des infrastructures à clé publique classiques.",
        "Hors sujet : TOTP et HOTP sont des générateurs de codes à usage unique sans lien avec FIDO2.",
        "Bonne réponse : WebAuthn est l'API entre navigateur et service web ; CTAP le protocole entre navigateur et authentificateur externe."
      ],
      "difficulte": 3
    },
    {
      "q": "Le service RH se plaint qu'un nouveau lecteur biométrique exige trois minutes par personne pour l'enrôlement et plus de dix secondes à chaque passage. Quels critères d'acceptabilité opérationnelle sont en cause ?",
      "choix": [
        "La précision et le taux de faux rejets",
        "Le temps d’enrôlement et le débit de passage",
        "Le CER et le FAR",
        "La résistance au spoofing et la vivacité (liveness)"
      ],
      "reponse": 1,
      "explication": "Au-delà de la précision (FAR/FRR/CER), un système biométrique doit être opérationnellement acceptable : un enrôlement de moins de deux minutes environ et un temps de passage de l'ordre de six à dix secondes maximum sont les repères classiques. Ici, le problème n'est ni la précision ni l'anti-spoofing, mais l'ergonomie : enrôlement trop long et débit insuffisant, qui provoquent le rejet du système par les utilisateurs.",
      "pourquoi": [
        "Hors cible : la précision n'est pas mise en cause par le service RH.",
        "Bonne réponse : enrôlement trop long et débit de passage insuffisant sont des critères d'acceptabilité opérationnelle.",
        "Réponse de métrologue : CER et FAR mesurent la précision, or la plainte porte sur les délais.",
        "Hors cible : l'anti-spoofing n'est pas le problème décrit."
      ],
      "difficulte": 2
    },
    {
      "q": "Quelle est la MEILLEURE pratique pour le stockage des données biométriques d'authentification ?",
      "choix": [
        "Stocker uniquement un gabarit mathématique protégé, idéalement sur l’appareil",
        "Stocker les images brutes chiffrées dans une base centrale pour faciliter le ré-enrôlement",
        "Stocker les empreintes en clair mais sur un serveur isolé du réseau",
        "Hacher les images brutes avec un algorithme lent comme bcrypt, comme pour les mots de passe"
      ],
      "reponse": 0,
      "explication": "On ne stocke jamais l'image biométrique brute : on en dérive un gabarit mathématique, protégé (chiffré, voire conservé dans un élément sécurisé local comme le fait Touch ID/Face ID), car une caractéristique biométrique compromise ne peut pas être révoquée ni changée, contrairement à un mot de passe. La centralisation d'images brutes crée une cible de très grande valeur ; le stockage en clair est inacceptable même isolé ; et le hachage type mot de passe est inapplicable : la biométrie produit des mesures approchées, jamais strictement identiques, ce qui rendrait toute comparaison de hash impossible.",
      "pourquoi": [
        "Bonne réponse : ne stocker qu'un gabarit mathématique protégé, idéalement dans un élément sécurisé local (modèle Touch ID/Face ID).",
        "Fausse bonne idée : centraliser des images brutes, même chiffrées, crée une cible de très grande valeur pour un vol irrévocable.",
        "Inacceptable : le stockage en clair reste une faute, même sur un serveur isolé.",
        "Techniquement séduisant mais inapplicable : la biométrie produit des mesures approchées, jamais identiques — un hash exact ne pourrait jamais correspondre."
      ],
      "difficulte": 2
    },
    {
      "q": "Pour réduire les plaintes d'employés rejetés par le lecteur d'empreintes de la cafétéria, l'administrateur diminue la sensibilité du capteur. Quelle est la conséquence directe de ce réglage ?",
      "choix": [
        "Le temps d'enrôlement augmente",
        "Le CER diminue mécaniquement",
        "Le FRR augmente et le FAR diminue",
        "Le FRR diminue mais le FAR augmente"
      ],
      "reponse": 3,
      "explication": "Diminuer la sensibilité réduit les faux rejets (erreurs de type 1, FRR) — les employés légitimes passent plus facilement — mais augmente les fausses acceptations (erreurs de type 2, FAR) : des imposteurs pourront être acceptés. C'est un arbitrage acceptable pour une cafétéria, pas pour un laboratoire sensible. Le CER est une caractéristique intrinsèque du système, qui ne change pas avec le réglage, et l'enrôlement n'est pas concerné.",
      "pourquoi": [
        "Hors sujet : l'enrôlement n'est pas affecté par la sensibilité du capteur.",
        "Faux : le CER est une caractéristique intrinsèque du système, il ne bouge pas avec le réglage.",
        "Inversion : baisser la sensibilité réduit le FRR, il ne l'augmente pas.",
        "Bonne réponse : moins de faux rejets (FRR) mais plus de fausses acceptations (FAR) — arbitrage acceptable pour une cafétéria."
      ],
      "difficulte": 1
    },
    {
      "q": "Un système d'authentification continue analyse la dynamique de frappe (keystroke dynamics) de l'utilisateur pendant toute la session. À quel type de facteur cette technique appartient-elle ?",
      "choix": [
        "Something you do (biométrie comportementale)",
        "Something you know",
        "Somewhere you are",
        "Something you have (un objet possédé, ex. token)"
      ],
      "reponse": 0,
      "explication": "La dynamique de frappe — rythme, durée d'appui, temps entre les touches — est une biométrie comportementale, classée 'something you do'. Elle permet notamment l'authentification continue pour détecter qu'un imposteur a pris la place de l'utilisateur en cours de session. Ce n'est ni une connaissance, ni un objet possédé, ni une localisation.",
      "pourquoi": [
        "Bonne réponse : la dynamique de frappe est une biométrie comportementale — « something you do » —, utile pour l'authentification continue.",
        "Hors type : la dynamique de frappe n'est pas une connaissance mémorisée.",
        "Hors type : aucune donnée de localisation n'est utilisée.",
        "Hors type : aucun objet possédé n'intervient."
      ],
      "difficulte": 1
    },
    {
      "q": "Un attaquant a extrait le hash du compte krbtgt d'un domaine Active Directory et forge désormais des TGT valides pour n'importe quel utilisateur. Comment s'appelle cette attaque et quelle est la remédiation reconnue ?",
      "choix": [
        "Kerberoasting ; allonger les mots de passe des comptes de service",
        "Golden ticket ; réinitialiser deux fois le mot de passe du compte krbtgt",
        "Silver ticket ; réinitialiser le mot de passe du compte de service concerné",
        "Pass-the-ticket ; bloquer le port 88"
      ],
      "reponse": 1,
      "explication": "Avec le hash du compte krbtgt (qui signe et chiffre tous les TGT), l'attaquant forge des golden tickets : des TGT valides pour n'importe quel principal, avec la durée de vie de son choix — un contrôle quasi total du domaine. La remédiation exige de réinitialiser le mot de passe de krbtgt deux fois (à cause de l'historique de mots de passe conservé pour la continuité), en plus de l'éradication de l'attaquant. Le silver ticket ne forge que des service tickets pour un service précis, le Kerberoasting casse des mots de passe hors ligne, et bloquer le port 88 paralyserait le domaine.",
      "pourquoi": [
        "Hors mécanisme : le Kerberoasting casse des mots de passe hors ligne, il ne forge rien.",
        "Bonne réponse : le hash de krbtgt permet de forger des golden tickets ; la remédiation est la double réinitialisation du mot de passe krbtgt.",
        "Trop étroit : le silver ticket forge des service tickets avec le hash d'un compte de service, pas des TGT.",
        "Réponse de technicien désastreuse : bloquer le port 88 paralyserait toute l'authentification du domaine."
      ],
      "difficulte": 3
    },
    {
      "q": "Quelle est la différence ESSENTIELLE entre une attaque golden ticket et une attaque silver ticket dans Kerberos ?",
      "choix": [
        "Le golden ticket ne fonctionne que si la pré-authentification est désactivée",
        "Le golden ticket vise RADIUS, le silver ticket vise Kerberos",
        "Golden ticket : TGT via krbtgt ; silver ticket : service tickets",
        "Le silver ticket donne plus de privilèges que le golden ticket"
      ],
      "reponse": 2,
      "explication": "Le golden ticket exploite le hash du compte krbtgt pour forger des TGT donnant accès à tout le domaine. Le silver ticket, plus discret mais plus limité, exploite le hash d'un compte de service pour forger directement un service ticket vers CE service, sans jamais dialoguer avec le KDC — ce qui le rend difficile à détecter dans les journaux du contrôleur de domaine. Le silver ticket est donc moins puissant, pas plus. La pré-authentification désactivée concerne l'AS-REP roasting, pas le golden ticket.",
      "pourquoi": [
        "Confusion : la pré-authentification désactivée concerne l'AS-REP roasting.",
        "Faux : les deux attaques visent Kerberos.",
        "Bonne réponse : golden = TGT forgés avec le hash de krbtgt ; silver = service tickets forgés sans contacter le KDC, donc plus discrets.",
        "Inversion : le silver ticket est plus limité, pas plus puissant."
      ],
      "difficulte": 3
    },
    {
      "q": "Lors d'un audit Active Directory, vous découvrez des comptes configurés avec l'option « Do not require Kerberos preauthentication ». Quelle attaque ces comptes rendent-ils possible ?",
      "choix": [
        "Overpass-the-hash : convertir un hash en TGT",
        "AS-REP roasting : réponse chiffrée cassée hors ligne",
        "Golden ticket : forger des TGT arbitraires",
        "Pass-the-hash : rejouer le hash NTLM sur d'autres machines"
      ],
      "reponse": 1,
      "explication": "Sans pré-authentification, n'importe qui peut demander à l'AS une réponse (AS-REP) pour ce compte : une partie de cette réponse est chiffrée avec une clé dérivée du mot de passe de l'utilisateur, ce qui permet une attaque par force brute hors ligne — c'est l'AS-REP roasting. La pré-authentification exige justement de prouver la connaissance du mot de passe (horodatage chiffré) AVANT toute réponse du KDC. Les trois autres attaques existent mais ne dépendent pas de cette option.",
      "pourquoi": [
        "Hors dépendance : l'overpass-the-hash existe mais ne repose pas sur la pré-authentification désactivée.",
        "Bonne réponse : sans pré-authentification, l'AS-REP contient un élément chiffré avec une clé dérivée du mot de passe, cassable hors ligne.",
        "Hors mécanisme : le golden ticket exige le hash de krbtgt, indépendant de cette option.",
        "Hors protocole : le pass-the-hash concerne NTLM, pas cette option Kerberos."
      ],
      "difficulte": 3
    },
    {
      "q": "Outre le SSO, quel service de sécurité Kerberos fournit-il nativement entre le client et le serveur de ressources ?",
      "choix": [
        "La haute disponibilité du KDC",
        "La non-répudiation par signature numérique",
        "Le chiffrement de bout en bout de toutes les données applicatives",
        "L’authentification mutuelle du client et du service"
      ],
      "reponse": 3,
      "explication": "Kerberos offre l'authentification mutuelle : grâce aux clés de session partagées via le KDC, le client s'authentifie auprès du service et peut exiger que le service renvoie une preuve (l'horodatage chiffré avec la clé de session), démontrant qu'il détient la clé attendue — parade contre l'usurpation de serveur. Kerberos utilise la cryptographie symétrique, donc pas de non-répudiation (qui exige des signatures asymétriques) ; il protège ses échanges de tickets mais ne chiffre pas automatiquement tout le trafic applicatif ; et le KDC reste un point unique de défaillance à redonder soi-même.",
      "pourquoi": [
        "Inversion : le KDC est justement un point unique de défaillance qu'il faut redonder soi-même.",
        "Faux : la cryptographie symétrique de Kerberos ne peut pas fournir de non-répudiation.",
        "Trop large : Kerberos protège ses échanges de tickets mais ne chiffre pas automatiquement tout le trafic applicatif.",
        "Bonne réponse : les clés de session partagées via le KDC permettent l'authentification mutuelle entre client et service."
      ],
      "difficulte": 3
    },
    {
      "q": "Quel est le PRINCIPAL point faible architectural de Kerberos qu'un concepteur doit compenser ?",
      "choix": [
        "Le KDC concentre toutes les clés : point unique de compromission",
        "L'obligation d'utiliser des certificats X.509 pour chaque utilisateur",
        "L'impossibilité de fonctionner avec Active Directory",
        "L'absence totale de chiffrement des tickets"
      ],
      "reponse": 0,
      "explication": "Le KDC détient les clés secrètes de tous les principals et délivre tous les tickets : sa panne bloque toute authentification (single point of failure) et sa compromission livre le domaine entier (cf. golden ticket). On le compense par la redondance, un durcissement maximal et une surveillance renforcée. Les tickets sont bien chiffrés (AES en Kerberos v5), Active Directory repose précisément sur Kerberos, et Kerberos utilise la cryptographie symétrique, pas des certificats par utilisateur.",
      "pourquoi": [
        "Bonne réponse : le KDC concentre toutes les clés secrètes — sa panne bloque tout, sa compromission livre le domaine entier (golden ticket).",
        "Faux : Kerberos utilise la cryptographie symétrique, pas des certificats par utilisateur.",
        "Faux : Active Directory repose précisément sur Kerberos.",
        "Faux : les tickets sont chiffrés (AES) dans Kerberos v5."
      ],
      "difficulte": 2
    },
    {
      "q": "Votre entreprise veut offrir aux employés un SSO navigateur vers une dizaine d'applications SaaS d'entreprise (paie, CRM, RH), l'annuaire interne restant la source d'autorité. Quel standard est le PLUS classiquement déployé pour ce scénario ?",
      "choix": [
        "OAuth 2.0 sans OIDC",
        "Kerberos, en exposant le KDC sur Internet",
        "SAML 2.0 : IdP interne vers les SP",
        "RADIUS avec un portail captif"
      ],
      "reponse": 2,
      "explication": "Le SSO web d'entreprise vers des SaaS est le cas d'usage historique de SAML 2.0 : l'IdP interne authentifie l'employé puis transmet au fournisseur de service une assertion signée contenant identité et attributs. OAuth 2.0 seul fait de la délégation d'autorisation, pas de l'authentification ; exposer un KDC Kerberos sur Internet est une hérésie de sécurité ; RADIUS sert au contrôle d'accès réseau, pas au SSO applicatif web. Notez qu'OIDC est aussi possible pour ce besoin, mais il n'est pas proposé ici.",
      "pourquoi": [
        "Trop étroit : OAuth 2.0 seul fait de l'autorisation déléguée, pas de l'authentification SSO.",
        "Hérésie de sécurité : on n'expose jamais un KDC Kerberos sur Internet.",
        "Bonne réponse : le SSO web d'entreprise vers des SaaS est le cas d'usage historique de SAML 2.0 — IdP interne, assertions signées vers chaque SP.",
        "Hors sujet : RADIUS sert au contrôle d'accès réseau, pas au SSO applicatif web."
      ],
      "difficulte": 2
    },
    {
      "q": "Une application de gestion de photos demande l'autorisation d'accéder aux fichiers stockés dans votre drive cloud, sans jamais connaître votre mot de passe. Quel protocole réalise EXACTEMENT cette fonction ?",
      "choix": [
        "OAuth 2.0 : access token limité",
        "SAML 2.0, via une assertion d'attributs",
        "OIDC, via l'ID token",
        "SCIM, via une API REST"
      ],
      "reponse": 0,
      "explication": "C'est la délégation d'autorisation, cœur d'OAuth 2.0 : l'utilisateur (resource owner) consent, le serveur d'autorisation émet un access token à portée (scope) limitée, et l'application (client) l'utilise auprès du serveur de ressources — le mot de passe n'est jamais partagé avec l'application tierce. L'ID token OIDC prouve une identité, il ne donne pas accès à des ressources ; SAML fait du SSO web ; SCIM fait du provisioning de comptes.",
      "pourquoi": [
        "Bonne réponse : c'est la délégation d'autorisation OAuth 2.0 — access token à portée limitée, sans jamais partager le mot de passe.",
        "Hors rôle : SAML fait du SSO web, pas de la délégation d'accès à des ressources.",
        "Trop étroit : l'ID token OIDC prouve une identité, il ne donne pas accès aux fichiers.",
        "Hors rôle : SCIM provisionne des comptes, il ne délègue pas d'accès."
      ],
      "difficulte": 2
    },
    {
      "q": "Pour une application mobile native qui propose « Se connecter avec votre compte d'entreprise », quelle combinaison est aujourd'hui recommandée ?",
      "choix": [
        "Resource Owner Password Credentials : l'app collecte le mot de passe et le transmet",
        "SAML 2.0 avec artifact binding",
        "OAuth 2.0 implicit flow, optimisé pour les clients publics",
        "OIDC avec authorization code flow et PKCE"
      ],
      "reponse": 3,
      "explication": "Pour les clients publics (applications mobiles, SPA) incapables de garder un secret, la recommandation actuelle est OIDC sur le flux authorization code renforcé par PKCE (Proof Key for Code Exchange), qui empêche l'interception du code d'autorisation. L'implicit flow est déprécié (tokens exposés dans l'URL), SAML est peu adapté aux applications natives, et le flux ROPC — où l'application manipule directement le mot de passe — contredit le principe même de la délégation et est déconseillé.",
      "pourquoi": [
        "Contresens : le flux ROPC fait manipuler le mot de passe par l'application — l'inverse de la délégation.",
        "Mal adapté : SAML convient mal aux applications natives mobiles.",
        "Piège d'obsolescence : l'implicit flow est déprécié — les tokens s'exposent dans l'URL.",
        "Bonne réponse : authorization code flow avec PKCE est la recommandation actuelle pour les clients publics incapables de garder un secret."
      ],
      "difficulte": 3
    },
    {
      "q": "Dans une fédération SAML, quelle entité VÉRIFIE les identifiants de l'utilisateur, et quelle entité CONSOMME l'assertion pour ouvrir la session ?",
      "choix": [
        "Le KDC authentifie ; le TGS consomme",
        "Le client authentifie ; le serveur d'autorisation consomme",
        "L’IdP authentifie ; le SP consomme l’assertion",
        "Le Service Provider vérifie ; l'Identity Provider consomme"
      ],
      "reponse": 2,
      "explication": "Dans SAML, l'Identity Provider (IdP) détient les comptes et vérifie les identifiants, puis émet une assertion signée ; le Service Provider (SP) fait confiance à cette assertion, la valide (signature, audience, durée) et ouvre la session locale sans jamais voir le mot de passe. La réponse D inverse les rôles, la A décrit Kerberos, et la B mélange les rôles OAuth.",
      "pourquoi": [
        "Hors protocole : cette description correspond à Kerberos.",
        "Hors protocole : ce sont des rôles OAuth mélangés.",
        "Bonne réponse : l'IdP vérifie les identifiants et émet l'assertion signée ; le SP la valide et ouvre la session locale.",
        "Inversion des rôles IdP/SP — le piège classique de la fédération."
      ],
      "difficulte": 1
    },
    {
      "q": "Dans la terminologie OAuth 2.0, votre application de calendrier demande l'accès aux contacts stockés chez un fournisseur cloud, avec votre accord. Qui est le « client » et qui est le « resource owner » ?",
      "choix": [
        "Le client est l'utilisateur ; le resource owner est le serveur d'autorisation",
        "Le client est l'application de calendrier ; le resource owner est l'utilisateur",
        "Le client et le resource owner désignent la même entité",
        "Le client est le fournisseur cloud ; le resource owner est l'application"
      ],
      "reponse": 1,
      "explication": "En OAuth 2.0, le resource owner est l'utilisateur qui possède les données et donne son consentement ; le client est l'application tierce qui demande l'accès ; le serveur d'autorisation émet les tokens après consentement ; et le serveur de ressources héberge les données et accepte les access tokens. Bien distinguer ces quatre rôles est indispensable pour analyser les flux OAuth à l'examen.",
      "pourquoi": [
        "Contresens sur les deux rôles à la fois.",
        "Bonne réponse : le client est l'application tierce qui demande l'accès ; le resource owner est l'utilisateur qui possède les données et consent.",
        "Faux : ce sont deux rôles distincts du framework OAuth 2.0.",
        "Inversion : le fournisseur cloud héberge les ressources, il n'est pas le client."
      ],
      "difficulte": 1
    },
    {
      "q": "Un consultant sécurité déconseille le flux OAuth « implicit » pour votre nouvelle SPA. Quelle est la raison PRINCIPALE ?",
      "choix": [
        "Il impose un secret client impossible à stocker",
        "Il ne fonctionne pas avec les serveurs d'autorisation modernes",
        "Il est trop lent car il exige deux allers-retours supplémentaires",
        "L’access token transite par l’URL et peut y fuiter"
      ],
      "reponse": 3,
      "explication": "Dans le flux implicit, l'access token est retourné directement dans le fragment de l'URL de redirection : il s'expose à l'historique du navigateur, aux en-têtes referrer et aux scripts tiers, sans possibilité d'authentifier le client. Les bonnes pratiques OAuth 2.0 actuelles (et OAuth 2.1) le remplacent par l'authorization code flow avec PKCE, qui ne fait transiter qu'un code à usage unique. Ce n'est ni une question de performance ni de compatibilité, et l'implicit flow a justement été conçu pour les clients SANS secret.",
      "pourquoi": [
        "Contresens : l'implicit flow a été conçu précisément pour les clients SANS secret.",
        "Faux : les serveurs modernes le supportent encore ; il est déconseillé, pas incompatible.",
        "Hors sujet : la performance n'est pas la raison de la dépréciation.",
        "Bonne réponse : l'access token transite par l'URL du navigateur — historique, referrer et scripts tiers peuvent le capturer."
      ],
      "difficulte": 3
    },
    {
      "q": "Un utilisateur exécute par mégarde un cheval de Troie qui partage silencieusement ses documents avec un attaquant, en utilisant les propres permissions de l'utilisateur. Quel modèle de contrôle d'accès est INTRINSÈQUEMENT vulnérable à ce scénario ?",
      "choix": [
        "ABAC, car les attributs sont dynamiques",
        "DAC : tout programme hérite des droits du propriétaire",
        "MAC, car les labels peuvent être modifiés par le malware",
        "RBAC, car les rôles sont trop larges"
      ],
      "reponse": 1,
      "explication": "C'est la faiblesse classique du DAC face aux chevaux de Troie : un programme s'exécute avec les droits de l'utilisateur, et comme le propriétaire peut re-partager ses objets à discrétion, le malware le peut aussi. Le MAC contre précisément ce risque : les labels sont imposés par le système et ni l'utilisateur ni ses programmes ne peuvent déclasser une information ou étendre les accès. RBAC et ABAC centralisent les décisions et ne donnent pas ce pouvoir discrétionnaire au propriétaire.",
      "pourquoi": [
        "Hors mécanisme : le dynamisme des attributs ABAC n'est pas en cause.",
        "Bonne réponse : en DAC, tout programme hérite des droits du propriétaire, y compris celui de re-partager — la faiblesse classique face aux chevaux de Troie.",
        "Inversion : le MAC contre précisément ce risque — les labels ne sont modifiables ni par l'utilisateur ni par ses programmes.",
        "Hors mécanisme : la largeur des rôles n'est pas ce que le malware exploite."
      ],
      "difficulte": 3
    },
    {
      "q": "Un système militaire applique des étiquettes (Secret, Très Secret) aux documents et aux utilisateurs ; un analyste habilité Secret ne peut pas lire un document Très Secret, même si son collègue propriétaire du document le souhaite. Quel modèle est en place ?",
      "choix": [
        "Risk-based access control",
        "DAC, avec des ACL renforcées gérées à la discrétion de chaque propriétaire de fichier ou dossier",
        "MAC : le système impose la politique via les labels, le propriétaire n'a pas voix au chapitre",
        "RBAC hiérarchique"
      ],
      "reponse": 2,
      "explication": "Deux indices signent le MAC : les labels de classification appliqués aux sujets et aux objets, et l'impossibilité pour le propriétaire de passer outre — la politique est imposée par le système (nondiscretionary, lattice-based). C'est exactement l'inverse du DAC. Le RBAC hiérarchique organise des rôles, pas des niveaux de classification avec dominance, et le risk-based évalue le contexte, pas des habilitations.",
      "pourquoi": [
        "Hors modèle : le risk-based évalue le contexte, pas des habilitations.",
        "Contresens : en DAC, le propriétaire pourrait accorder l'accès — or ici il ne le peut pas.",
        "Bonne réponse : labels imposés par le système et impuissance du propriétaire signent le MAC (nondiscretionary, lattice-based).",
        "Confusion : le RBAC hiérarchique organise des rôles, pas des niveaux de classification avec dominance."
      ],
      "difficulte": 1
    },
    {
      "q": "Votre déploiement RBAC compte désormais 900 rôles pour 1 100 employés, à force de créer un rôle par exception (par projet, par site, par horaire). Comment s'appelle ce phénomène et quelle évolution est la PLUS pertinente ?",
      "choix": [
        "Role explosion ; évoluer vers l’ABAC",
        "Roles mining ; supprimer tous les rôles inutilisés",
        "Privilege creep ; lancer des revues d'accès",
        "Toxic combination ; appliquer la separation of duties"
      ],
      "reponse": 0,
      "explication": "Quand chaque combinaison de contexte devient un rôle, on subit la 'role explosion' : le RBAC perd son avantage de simplicité administrative. L'ABAC résout élégamment le problème en exprimant les conditions (projet, site, horaire, appareil) comme des attributs de politiques dynamiques, au lieu de multiplier les rôles statiques. Le privilege creep est l'accumulation de droits par un individu, la toxic combination un cumul de droits incompatibles, et le role mining une technique de découverte de rôles — aucun ne décrit la prolifération de rôles.",
      "pourquoi": [
        "Bonne réponse : 900 rôles pour 1 100 employés = role explosion ; l'ABAC exprime les exceptions par des attributs au lieu de multiplier les rôles.",
        "Confusion : le role mining découvre des rôles, il ne résout pas leur prolifération.",
        "Confusion : le privilege creep est l'accumulation de droits par un individu, pas la prolifération de rôles.",
        "Confusion : la toxic combination est un cumul de droits incompatibles chez une même personne."
      ],
      "difficulte": 2
    },
    {
      "q": "Vous devez implémenter la politique suivante : « Un prestataire externe ne peut accéder au dépôt de code QUE depuis un poste géré par l'entreprise, pendant les heures ouvrées, et si son contrat est actif dans l'outil RH ». Quel mécanisme d'autorisation choisir ?",
      "choix": [
        "DAC : le responsable du dépôt gère les accès",
        "RBAC avec un rôle 'prestataire'",
        "ABAC : attributs évalués dynamiquement",
        "MAC avec un label 'prestataire'"
      ],
      "reponse": 2,
      "explication": "La règle mêle des attributs du sujet (statut contractuel issu de la RH), de l'environnement (heures ouvrées, poste géré) et de la ressource (le dépôt) : c'est la définition de l'ABAC, où un PDP évalue dynamiquement ces attributs à chaque demande. Un simple rôle RBAC ne capture ni l'horaire ni l'état du poste ni la fin de contrat en temps réel ; le DAC repose sur des décisions manuelles du propriétaire ; le MAC classe des niveaux de sensibilité, pas des conditions contextuelles.",
      "pourquoi": [
        "Trop manuel : le DAC repose sur des décisions ponctuelles du propriétaire.",
        "Trop étroit : un rôle statique ne capture ni l'horaire, ni l'état du poste, ni le statut contractuel en temps réel.",
        "Bonne réponse : attributs du sujet, de l'environnement et donnée RH évaluée dynamiquement — la définition de l'ABAC.",
        "Hors modèle : le MAC classe des sensibilités, pas des conditions contextuelles."
      ],
      "difficulte": 2
    },
    {
      "q": "Un pare-feu applique la même liste de règles à tous les paquets, quel que soit l'utilisateur, et termine par un refus implicite. Quel modèle de contrôle d'accès illustre-t-il ?",
      "choix": [
        "Rule-based access control avec implicit deny",
        "DAC, car l'administrateur possède le pare-feu",
        "ABAC, car l'adresse IP est un attribut",
        "RBAC, car les règles forment des rôles"
      ],
      "reponse": 0,
      "explication": "Le rule-based access control applique des règles globales identiques pour tous les sujets, sans considération d'identité ou de rôle — le pare-feu en est l'exemple canonique, avec l'implicit deny (tout ce qui n'est pas explicitement autorisé est refusé) en règle finale. Ce ne sont pas des rôles métier (RBAC), le propriétaire n'accorde pas d'accès discrétionnaires (DAC), et même si une IP peut être vue comme un attribut, une ACL de pare-feu statique n'est pas un moteur de politiques ABAC.",
      "pourquoi": [
        "Bonne réponse : règles globales identiques pour tous et refus implicite final = rule-based access control.",
        "Confusion : la propriété administrative de l'équipement ne fait pas du filtrage un modèle DAC.",
        "Trop généreux : une ACL statique n'est pas un moteur de politiques à attributs.",
        "Confusion : des règles de pare-feu ne sont pas des rôles métier."
      ],
      "difficulte": 1
    },
    {
      "q": "Quel est l'objectif FINAL d'une stratégie d'accès Just-In-Time (JIT) pour les administrateurs ?",
      "choix": [
        "Accélérer la connexion des administrateurs",
        "Remplacer les revues d'accès périodiques",
        "Supprimer le besoin de MFA pour les comptes à privilèges",
        "Tendre vers le zéro privilège permanent"
      ],
      "reponse": 3,
      "explication": "Le JIT vise le 'zero standing privileges' : au lieu de comptes administrateurs dotés de droits permanents — cibles idéales en cas de vol d'identifiants —, les privilèges sont accordés à la demande, pour une durée limitée, souvent après approbation, puis automatiquement retirés. La fenêtre d'attaque se réduit drastiquement. Le JIT complète le MFA et les revues d'accès, il ne les remplace pas, et son but n'est pas la commodité.",
      "pourquoi": [
        "Hors sujet : le JIT n'est pas un dispositif de confort ou de rapidité.",
        "Faux : les revues d'accès restent nécessaires, le JIT ne les remplace pas.",
        "Contresens dangereux : le JIT complète le MFA, il ne le remplace pas.",
        "Bonne réponse : le JIT vise le zéro privilège permanent — les droits élevés n'existent que pendant la tâche puis disparaissent."
      ],
      "difficulte": 2
    },
    {
      "q": "Votre solution PAM crée un compte administrateur éphémère à la demande, valable une heure, puis le supprime automatiquement. Quelle approche est mise en œuvre ?",
      "choix": [
        "La délégation Kerberos contrainte",
        "Le provisioning JIT de comptes jetables",
        "La rotation de secrets à intervalle fixe",
        "Le password vaulting classique"
      ],
      "reponse": 1,
      "explication": "Créer un compte à privilèges à la volée pour une tâche, puis le détruire, est une forme de JIT dite 'broker and remove' (ou comptes éphémères) : aucun compte privilégié permanent n'existe entre deux usages, ce qui élimine les privilèges dormants. Le vaulting conserve des comptes permanents dont il protège les mots de passe ; la rotation change des secrets de comptes qui, eux, persistent ; la délégation Kerberos contrainte est un mécanisme technique sans rapport avec le cycle de vie des comptes.",
      "pourquoi": [
        "Hors sujet : la délégation Kerberos contrainte ne concerne pas le cycle de vie des comptes.",
        "Bonne réponse : créer puis détruire un compte à privilèges à la demande = JIT « broker and remove » (comptes éphémères).",
        "Hors mécanisme : la rotation change les secrets de comptes qui, eux, persistent.",
        "Hors mécanisme : le vaulting protège des comptes permanents ; ici aucun compte ne persiste entre deux usages."
      ],
      "difficulte": 2
    },
    {
      "q": "Comment une organisation devrait-elle gérer son compte « break-glass » d'administration d'urgence ?",
      "choix": [
        "Le confier au RSSI qui en mémorise le mot de passe",
        "Le supprimer : il contredit le principe du moindre privilège",
        "L'intégrer à l'IdP et au MFA d'entreprise pour bénéficier des contrôles standards",
        "Identifiants scellés en coffre, audités à chaque usage et changés ensuite"
      ],
      "reponse": 3,
      "explication": "Le compte break-glass sert quand tout le reste est en panne (IdP, MFA, PAM) : ses identifiants sont conservés hors ligne sous scellé, son usage doit déclencher une alerte immédiate et un audit complet, et ses secrets sont changés après chaque utilisation. L'intégrer à l'IdP et à son MFA — séduisant sur le papier — le rendrait inutilisable précisément quand on en a besoin, lors d'une panne de l'IdP. Le supprimer expose à une perte totale d'administration, et le confier à la mémoire d'une personne crée un point unique de défaillance humain.",
      "pourquoi": [
        "Point unique de défaillance humain : la mémoire d'une personne n'est ni auditable ni disponible en son absence.",
        "Contresens : supprimer le break-glass expose à une perte totale d'administration en cas de panne de l'IdP.",
        "Techniquement séduisant mais contre-productif : lier le break-glass à l'IdP et son MFA le rend inutilisable précisément quand l'IdP est en panne.",
        "Bonne réponse : identifiants scellés hors ligne, indépendance vis-à-vis de l'IdP, alerte et audit à chaque usage, rotation après utilisation."
      ],
      "difficulte": 3
    },
    {
      "q": "Trois administrateurs de bases de données utilisent le même compte 'sa'. Quelle configuration PAM restaure le MIEUX l'accountability sans supprimer le compte ?",
      "choix": [
        "Changer le mot de passe chaque mois et l'afficher dans la salle serveur",
        "Coffre-fort PAM : accès individuel tracé, rotation après usage",
        "Communiquer le mot de passe par messagerie chiffrée",
        "Interdire l'usage du compte et attendre la refonte de l'application"
      ],
      "reponse": 1,
      "explication": "Le check-out via un coffre PAM rattache chaque usage du compte partagé à une identité individuelle authentifiée : qui a pris le mot de passe, quand, pour quelle session (enregistrée), et la rotation immédiate après restitution empêche la réutilisation hors du circuit. L'accountability est restaurée même si le compte technique reste partagé. Les réponses A et C perpétuent l'anonymat, et la D ignore le besoin opérationnel immédiat.",
      "pourquoi": [
        "Pire pratique : un mot de passe affiché reste anonyme et exposé à tous.",
        "Bonne réponse : check-out individuel authentifié avec MFA, session enregistrée et rotation après usage — l'accountability est restaurée.",
        "Perpétue l'anonymat : le partage du mot de passe, même chiffré en transit, reste intraçable.",
        "Hors délai : interdire sans alternative ignore le besoin opérationnel immédiat."
      ],
      "difficulte": 2
    },
    {
      "q": "Pour une application bancaire en ligne, quelle combinaison de contrôles de session est la PLUS appropriée ?",
      "choix": [
        "Uniquement un timeout d'inactivité de 24 heures",
        "Session illimitée tant que l'utilisateur est actif, pour le confort",
        "Timeout d’inactivité court et durée de session absolue maximale",
        "Déconnexion uniquement à la fermeture du navigateur"
      ],
      "reponse": 2,
      "explication": "La gestion de session robuste combine trois contrôles : un timeout d'inactivité court (l'utilisateur qui s'éloigne est déconnecté), une durée de vie absolue de la session (même active, elle expire et limite l'exploitation d'un jeton volé), et la ré-authentification (step-up) avant les opérations sensibles comme un virement. Les autres options laissent des sessions exploitables indéfiniment — une session détournée resterait valide tant que l'attaquant génère de l'activité.",
      "pourquoi": [
        "Beaucoup trop long : 24 heures d'inactivité est une éternité pour une banque.",
        "Confort au détriment de la sécurité : une session détournée resterait exploitable indéfiniment tant qu'elle est « active ».",
        "Bonne réponse : timeout d'inactivité court, durée de session absolue et ré-authentification avant les opérations sensibles.",
        "Insuffisant : la fermeture du navigateur ne borne rien — un jeton volé reste valide ailleurs."
      ],
      "difficulte": 2
    },
    {
      "q": "Un attaquant a volé le cookie de session d'un utilisateur via un script malveillant et rejoue la session depuis son propre poste. Quelles mesures auraient le MIEUX limité cette attaque ?",
      "choix": [
        "Cookies Secure/HttpOnly et régénération de l’ID de session",
        "Utiliser le même identifiant de session avant et après l'authentification",
        "Stocker l'identifiant de session dans l'URL",
        "Allonger la durée de vie du cookie pour éviter les reconnexions"
      ],
      "reponse": 0,
      "explication": "HttpOnly rend le cookie inaccessible aux scripts (contre le vol par XSS), Secure impose HTTPS (contre l'interception), la régénération de l'ID à la connexion contre la fixation de session, et la liaison au contexte (empreinte de l'appareil, adresse, ré-évaluation continue) rend le rejeu depuis un autre poste détectable. Les réponses B et D aggravent le risque, et placer l'ID en URL (C) l'expose dans les journaux, l'historique et les referrers — l'exact contraire d'une bonne pratique.",
      "pourquoi": [
        "Bonne réponse : Secure et HttpOnly, régénération de l'identifiant à la connexion et liaison au contexte client limitent le vol et le rejeu.",
        "Facilite la fixation de session : l'identifiant doit changer après l'authentification.",
        "Contre-pratique : l'identifiant en URL fuit dans les journaux, l'historique et les referrers.",
        "Aggrave le risque : un cookie durable prolonge la fenêtre d'exploitation."
      ],
      "difficulte": 2
    },
    {
      "q": "Votre entreprise ouvre son portail fournisseurs aux 2 000 employés d'un partenaire. Le partenaire exige que ses employés utilisent leurs identifiants internes existants et que les départs soient immédiatement répercutés. Quelle architecture répond le MIEUX à ces exigences ?",
      "choix": [
        "Fédération B2B : le partenaire reste l’IdP, votre portail agit en SP",
        "Créer 2 000 comptes locaux et envoyer les mots de passe au partenaire",
        "Synchroniser une copie de l'annuaire du partenaire chaque trimestre",
        "Un compte générique partagé 'partenaire' avec un mot de passe fort"
      ],
      "reponse": 0,
      "explication": "La fédération B2B répond aux deux exigences : les employés du partenaire s'authentifient auprès de LEUR IdP avec leurs identifiants habituels (jamais transmis à votre organisation), et dès qu'un compte est désactivé chez le partenaire, l'accès au portail cesse — le deprovisioning reste là où l'information existe, chez l'employeur. Les comptes locaux créent une charge de gestion et un risque de comptes orphelins, le compte partagé détruit l'accountability, et une synchronisation trimestrielle laisse des accès actifs des semaines après un départ.",
      "pourquoi": [
        "Bonne réponse : fédération B2B — le partenaire reste l'IdP de ses employés et le deprovisioning suit automatiquement les départs.",
        "Charge de gestion énorme et comptes orphelins garantis au premier départ non signalé.",
        "Hors délai : une synchronisation trimestrielle laisse des accès actifs des semaines après un départ.",
        "Détruit l'accountability : un compte générique rend toute action anonyme."
      ],
      "difficulte": 2
    },
    {
      "q": "Dans une fédération avec un partenaire, quel document ou mécanisme établit les exigences mutuelles (niveaux d'assurance, attributs échangés, obligations de sécurité) AVANT l'échange technique d'assertions ?",
      "choix": [
        "Le certificat TLS et la clé privée du Service Provider",
        "Un accord de fédération (trust agreement) négocié",
        "La politique de mots de passe locale",
        "Le fichier de zone DNS"
      ],
      "reponse": 1,
      "explication": "La fédération est d'abord une relation de confiance organisationnelle : un accord définit les niveaux d'assurance d'authentification exigés (par ex. MFA obligatoire), les attributs transmis, les responsabilités en cas d'incident et les obligations de deprovisioning ; l'échange de métadonnées SAML/OIDC (certificats de signature, endpoints) en est la traduction technique. Le certificat TLS sécurise le canal mais ne définit aucune exigence mutuelle, et les réponses C et D sont hors sujet. À l'examen, pensez gouvernance avant technique.",
      "pourquoi": [
        "Réponse de technicien : le certificat TLS sécurise le canal mais ne définit aucune exigence mutuelle.",
        "Bonne réponse : l'accord de fédération définit niveaux d'assurance, attributs échangés et obligations — la gouvernance précède la technique.",
        "Hors périmètre : la politique de mots de passe locale ne régit pas la relation inter-organisations.",
        "Hors sujet : le DNS ne gouverne pas la confiance fédérée."
      ],
      "difficulte": 3
    },
    {
      "q": "Des millions d'identifiants issus d'une fuite chez un site tiers sont rejoués tels quels contre votre portail, avec un taux de réussite de 1 %. Puis un autre attaquant essaie « Printemps2026! » sur des milliers de vos comptes. Comment nommer ces DEUX attaques, dans l'ordre ?",
      "choix": [
        "Brute force, puis rainbow table",
        "Password spraying, puis credential stuffing massif",
        "Credential stuffing, puis password spraying",
        "Phishing, puis MFA fatigue"
      ],
      "reponse": 2,
      "explication": "Le credential stuffing rejoue des couples identifiant/mot de passe volés ailleurs, en pariant sur la réutilisation des mots de passe entre sites. Le password spraying inverse la logique : un seul mot de passe probable, essayé sur un grand nombre de comptes, pour rester sous les seuils de verrouillage par compte. Les parades diffèrent : MFA et vérification des mots de passe contre les bases de fuites pour le premier ; détection transversale des échecs et bannissement des mots de passe communs pour le second.",
      "pourquoi": [
        "Hors scénario : ni cassage brut ni tables précalculées ne sont décrits.",
        "Inversion de l'ordre des deux attaques.",
        "Bonne réponse : rejeu de couples volés = credential stuffing ; un mot de passe probable sur des milliers de comptes = password spraying.",
        "Hors scénario : aucun hameçonnage ni bombardement push n'est décrit."
      ],
      "difficulte": 2
    },
    {
      "q": "Pourquoi le password spraying échappe-t-il souvent aux politiques classiques de verrouillage de compte, et quel contrôle le détecte le MIEUX ?",
      "choix": [
        "Il ne génère aucun échec d'authentification",
        "Il passe par le protocole Kerberos, invisible dans les journaux",
        "Il utilise des mots de passe chiffrés ; seul un HSM le détecte",
        "Peu d’essais par compte, sous le seuil de verrouillage"
      ],
      "reponse": 3,
      "explication": "Le verrouillage de compte compte les échecs PAR COMPTE ; le spraying distribue les essais sur des milliers de comptes avec un ou deux mots de passe, restant sous chaque seuil individuel. La détection doit donc être transversale : un pic d'échecs répartis sur de nombreux comptes, souvent depuis les mêmes adresses ou avec le même mot de passe, visible dans un SIEM. Les réponses A et C sont techniquement fausses et l'attaque génère bien des échecs — mais dispersés.",
      "pourquoi": [
        "Faux : l'attaque génère des échecs — mais dispersés sur des milliers de comptes.",
        "Faux : Kerberos journalise bien les échecs d'authentification.",
        "Faux techniquement : ni chiffrement des mots de passe ni HSM ne sont en cause.",
        "Bonne réponse : un ou deux essais par compte restent sous chaque seuil individuel ; seule une corrélation transversale des échecs (SIEM) le révèle."
      ],
      "difficulte": 3
    },
    {
      "q": "Quelle exigence de gouvernance est la PLUS appropriée pour les revues d'accès (access reviews) des comptes à privilèges par rapport aux comptes standard ?",
      "choix": [
        "Des revues plus fréquentes des comptes à privilèges",
        "Aucune revue pour les comptes à privilèges, car le PAM suffit",
        "Des revues uniquement lors du départ de l'employé",
        "Les mêmes revues annuelles pour tous les comptes, par équité"
      ],
      "reponse": 0,
      "explication": "Le risque porté par un compte à privilèges est démesuré par rapport à un compte standard : les revues doivent y être plus fréquentes (souvent trimestrielles, contre annuelles pour les comptes standard), vérifier la justification métier de chaque droit, et aboutir au retrait immédiat des accès injustifiés — c'est le contrôle qui détecte le privilege creep et les comptes orphelins. Le PAM protège l'usage des comptes mais ne juge pas de la légitimité des droits ; attendre le départ laisse des années d'exposition.",
      "pourquoi": [
        "Bonne réponse : revues plus fréquentes et approfondies, menées par les responsables, avec retrait immédiat des droits injustifiés.",
        "Contresens : le PAM protège l'usage des comptes mais ne juge pas la légitimité des droits.",
        "Hors phase : attendre le départ laisse des années d'exposition au privilege creep.",
        "Fausse équité : le risque porté par un compte à privilèges est démesuré et justifie un traitement renforcé."
      ],
      "difficulte": 1
    },
    {
      "q": "Un développeur quitte l'entreprise un vendredi en mauvais termes. Concernant ses accès, que devriez-vous faire EN PREMIER ?",
      "choix": [
        "Supprimer immédiatement son compte et toutes ses données",
        "Désactiver son compte dès l’annonce du départ",
        "Attendre la revue d'accès trimestrielle",
        "Transférer son compte à son remplaçant pour assurer la continuité"
      ],
      "reponse": 1,
      "explication": "Pour un départ, surtout conflictuel, on DÉSACTIVE le compte immédiatement — idéalement pendant que la personne est en entretien de sortie — pour couper tout accès sans détruire les données, les clés de chiffrement ni les éléments nécessaires aux enquêtes ; la suppression définitive intervient plus tard, selon la politique de rétention. Supprimer d'emblée fait perdre des données et des preuves ; attendre la revue trimestrielle laisse une fenêtre d'attaque béante ; transférer un compte nominatif à un tiers détruit l'accountability.",
      "pourquoi": [
        "Hors phase : supprimer d'emblée détruit données, clés de chiffrement et preuves nécessaires aux enquêtes.",
        "Bonne réponse : désactiver immédiatement, idéalement pendant l'entretien de sortie — couper l'accès sans rien détruire.",
        "Fenêtre d'attaque béante : un départ conflictuel n'attend pas la revue trimestrielle.",
        "Détruit l'accountability : un compte nominatif ne se transfère pas à un tiers."
      ],
      "difficulte": 1
    },
    {
      "q": "Après un incident majeur par adversary-in-the-middle, le COMEX d'un groupe industriel (45 000 employés : sièges, usines avec postes partagés, centres d'appels) donne douze mois au RSSI pour migrer vers un MFA résistant au phishing. Que devrait faire le RSSI EN PREMIER ?",
      "choix": [
        "Commander des clés FIDO2 pour l'ensemble des employés et fixer une date de bascule unique",
        "Activer le number matching sur les notifications push existantes pour toute l'entreprise",
        "Prioriser par le risque : migrer d’abord les comptes à privilèges et les accès exposés à Internet",
        "Lancer un pilote sur la base du volontariat au siège et généraliser selon les retours utilisateurs"
      ],
      "reponse": 2,
      "explication": "Une migration MFA à cette échelle est un programme de gestion du risque, pas un déploiement technique : on commence par cartographier les populations (postes partagés en usine ≠ cadres du siège) et les applications, puis on traite d'abord les comptes dont la compromission coûte le plus — privilèges et accès exposés. Le big-bang matériel ignore les contraintes d'usage (postes partagés) et échouera ; le number matching durcit le push mais ne le rend pas résistant au phishing, donc ne répond pas à l'exigence ; le pilote volontaire est une bonne pratique mais, sans priorisation par le risque, il laisse les comptes critiques exposés pendant des mois.",
      "pourquoi": [
        "Réponse de technicien : un big-bang matériel sans analyse des populations (postes partagés, centres d'appels) ignore les contraintes d'usage et voue le déploiement à l'échec.",
        "Techniquement vrai mais insuffisant : le number matching réduit le MFA fatigue mais un code relayé en temps réel reste hameçonnable — l'exigence de résistance au phishing n'est pas satisfaite.",
        "Bonne réponse : cartographier puis prioriser par le risque — comptes à privilèges et accès exposés d'abord — est la première étape d'un programme de migration managé.",
        "Techniquement vrai mais pas prioritaire : un pilote volontaire sans priorisation par le risque laisse les comptes les plus critiques exposés pendant des mois."
      ],
      "difficulte": 3
    },
    {
      "q": "Un audit révèle 1 200 secrets applicatifs (clés API, mots de passe de bases de données) codés en dur dans les dépôts de code et les pipelines CI/CD d'une entreprise. Quelle est la MEILLEURE stratégie de remédiation durable ?",
      "choix": [
        "Faire tourner manuellement tous les secrets identifiés et clore le constat d'audit",
        "Publier une politique interdisant le stockage de secrets dans le code et former les développeurs",
        "Chiffrer l'ensemble des dépôts de code afin que les secrets ne soient plus lisibles",
        "Coffre-fort de secrets avec injection éphémère et détection dans les pipelines"
      ],
      "reponse": 3,
      "explication": "Le problème est systémique : tant que les applications ont besoin de secrets statiques, ils réapparaîtront dans le code. La remédiation durable combine un coffre-fort centralisé (les secrets sont récupérés à l'exécution, idéalement éphémères et générés à la demande) et un contrôle préventif dans les pipelines (secret scanning bloquant). La rotation manuelle corrige le passé sans empêcher la récidive ; chiffrer les dépôts ne change rien pour les développeurs et les pipelines qui doivent les lire ; la politique et la formation sont nécessaires mais, sans mécanisme technique, elles ne survivent pas à la pression des délais de livraison.",
      "pourquoi": [
        "Hors phase : la rotation corrige le stock existant mais ne prévient pas la récidive — les secrets reviendront au prochain commit.",
        "Techniquement vraie mais insuffisante : une politique sans mécanisme d'application ne résiste pas à la pression des livraisons — il faut le contrôle technique qui va avec.",
        "Réponse de technicien : le chiffrement des dépôts ne change rien puisque développeurs et pipelines doivent les déchiffrer pour travailler — les secrets restent exposés à l'usage.",
        "Bonne réponse : coffre-fort centralisé, secrets éphémères injectés à l'exécution et détection préventive dans les pipelines traitent la cause et empêchent la récidive."
      ],
      "difficulte": 3
    },
    {
      "q": "Une plateforme de 400 microservices répartis sur deux clouds et un datacenter legacy utilise des secrets statiques partagés pour les appels inter-services. L'architecte sécurité veut une authentification mutuelle des workloads à grande échelle. Quelle approche répond le MIEUX au besoin ?",
      "choix": [
        "Créer un compte de service unique par cloud, avec rotation trimestrielle du secret",
        "Attribuer à chaque workload une identité attestée de courte durée (SPIFFE/SVID)",
        "Restreindre les flux entre clusters par filtrage d'adresses IP et micro-segmentation réseau",
        "Émettre manuellement des certificats TLS par service, renouvelés chaque année par l'équipe PKI"
      ],
      "reponse": 1,
      "explication": "À l'échelle de centaines de workloads éphémères multi-environnements, seule une identité de workload délivrée automatiquement sur la base d'une attestation (qui est ce workload, où s'exécute-t-il), de courte durée et renouvelée sans intervention humaine — le modèle SPIFFE et ses SVID — permet l'authentification mutuelle sans gestion manuelle de secrets. Les certificats manuels annuels ne passent pas l'échelle et créent des expirations en cascade ; le filtrage IP authentifie des adresses, pas des workloads, et s'effondre dans des environnements dynamiques ; un compte partagé par cloud reproduit exactement le problème initial : secret partagé, accountability nulle.",
      "pourquoi": [
        "Techniquement vraie (rotation) mais contextuellement fausse : un compte partagé par cloud conserve le défaut initial — secret partagé et aucune attribution par workload.",
        "Bonne réponse : identités de workload attestées, de courte durée et renouvelées automatiquement (SPIFFE/SVID) — l'authentification mutuelle sans secrets partagés ni gestion manuelle.",
        "Réponse réseau, pas identité : une adresse IP n'authentifie pas un workload, surtout dans des environnements dynamiques où les adresses changent sans cesse.",
        "Hors échelle : la gestion manuelle de certificats pour des centaines de workloads éphémères est ingérable et provoque des expirations en cascade."
      ],
      "difficulte": 3
    },
    {
      "q": "Votre entreprise vient d'acquérir un concurrent. La direction exige que les 3 000 employés acquis accèdent aux applications du groupe dès le premier jour, mais l'équipe sécurité n'a aucune visibilité sur l'hygiène IAM de la cible. En tant que RSSI, que faites-vous EN PREMIER ?",
      "choix": [
        "Bloquer tout accès croisé jusqu'à la fin du programme d'intégration des systèmes d'information",
        "Créer des comptes invités dans votre annuaire pour tous les employés acquis",
        "Évaluer les contrôles IAM de la cible, puis fédérer avec des exigences contractualisées",
        "Fusionner immédiatement les deux annuaires pour simplifier l'administration"
      ],
      "reponse": 2,
      "explication": "En fusion-acquisition, fédérer plutôt que fusionner : la fédération donne l'accès demandé par le métier tout en maintenant une frontière de confiance contrôlable — et elle n'est acceptable qu'après une évaluation des contrôles IAM de la cible et la contractualisation des exigences (MFA, assurance, répercussion immédiate des départs). Fusionner les annuaires d'une entité à l'hygiène inconnue importe ses compromissions potentielles au cœur du groupe ; les comptes invités en masse créent une population parallèle sans cycle de vie rattaché à la source RH de la cible ; bloquer tout accès est la posture la plus sûre techniquement mais elle sacrifie l'objectif business que le RSSI doit servir.",
      "pourquoi": [
        "Techniquement le plus sûr mais inacceptable pour un manager : bloquer l'accès sacrifie l'objectif business de la fusion au lieu de gérer le risque.",
        "Techniquement faisable mais contextuellement faux : 3 000 comptes invités forment une population parallèle sans lien avec la source RH de la cible — comptes orphelins garantis.",
        "Bonne réponse : évaluer puis fédérer avec des exigences contractualisées donne l'accès jour 1 en maintenant une frontière de confiance — le compromis risque/business attendu d'un RSSI.",
        "Hors phase et dangereux : fusionner des annuaires avant toute évaluation importe les compromissions potentielles de la cible au cœur du groupe."
      ],
      "difficulte": 3
    },
    {
      "q": "Les campagnes de certification d'accès de votre outil IGA affichent 98 % d'approbations, la plupart validées en bloc en quelques minutes par les managers (« rubber stamping »). Quelle évolution améliorera le MIEUX la valeur de ces certifications ?",
      "choix": [
        "Cibler les campagnes sur les accès à risque et révoquer par défaut les droits non justifiés",
        "Augmenter la fréquence des campagnes de trimestrielle à mensuelle",
        "Rappeler aux managers leur responsabilité et sanctionner les validations en bloc",
        "Transférer les revues aux administrateurs de l'outil IGA, qui connaissent mieux les droits techniques"
      ],
      "reponse": 0,
      "explication": "Le rubber stamping est un symptôme de surcharge cognitive : des centaines de lignes techniques illisibles poussent à tout approuver. Le remède est de réduire et qualifier la charge : campagnes ciblées par le risque, mise en évidence des anomalies (écarts par rapport aux pairs, privilèges élevés, droits dormants), et inversion de la charge de la preuve — un droit non justifié est révoqué par défaut. Sanctionner sans réduire la charge ne change pas le comportement ; augmenter la fréquence aggrave la surcharge qui cause le problème ; les administrateurs IGA connaissent la technique mais ignorent la légitimité métier, qui est précisément l'objet de la certification.",
      "pourquoi": [
        "Bonne réponse : cibler par le risque, surfacer les anomalies et révoquer par défaut les droits injustifiés rend la décision du manager possible et significative.",
        "Contre-productif : augmenter la fréquence aggrave la surcharge qui est la cause racine des validations en bloc.",
        "Trop punitif, cause ignorée : sanctionner sans réduire la surcharge cognitive qui provoque le rubber stamping ne changera pas le comportement.",
        "Contresens de gouvernance : les administrateurs IGA connaissent la technique mais pas la légitimité métier des droits — c'est justement ce que la certification doit établir."
      ],
      "difficulte": 3
    },
    {
      "q": "Votre entreprise déploie des agents IA autonomes qui appellent des API internes (RH, finance, support). Vous découvrez que tous les agents utilisent la clé API partagée de l'équipe plateforme, dotée de larges privilèges. Quelle est la MEILLEURE mesure à mettre en place ?",
      "choix": [
        "Exiger une approbation humaine avant chaque action de chaque agent",
        "Déplacer la clé API partagée dans un coffre-fort de secrets avec rotation automatique",
        "Limiter le nombre d'agents IA autorisés à s'exécuter simultanément",
        "Attribuer à chaque agent une identité non humaine à droits limités et jetons courts"
      ],
      "reponse": 3,
      "explication": "Les agents IA sont des identités non humaines et doivent être gouvernés comme telles : identité individuelle (pas de clé partagée), least privilege par fonction, jetons de courte durée pour limiter la fenêtre d'exploitation, et journalisation qui rattache chaque appel à l'agent ET au commanditaire humain ou service — sans quoi ni accountability ni révocation ciblée ne sont possibles. Limiter le nombre d'agents ne change rien à l'anonymat ni au sur-privilège ; l'approbation humaine systématique est un absolu qui détruit la valeur de l'autonomie et sera contourné ; le coffre-fort avec rotation améliore la protection du secret mais conserve une identité partagée sur-privilégiée — le problème de fond demeure.",
      "pourquoi": [
        "Piège absolu : approuver chaque action détruit la valeur de l'autonomie et sera contourné — le contrôle doit porter sur l'identité et les droits, pas sur chaque geste.",
        "Techniquement vraie mais contextuellement fausse : le vaulting protège le secret mais conserve une identité partagée sur-privilégiée — accountability et moindre privilège restent absents.",
        "Hors sujet : réduire le nombre d'agents ne corrige ni l'identité partagée ni le sur-privilège.",
        "Bonne réponse : identité propre par agent, least privilege, jetons courts et journalisation attribuable — la gouvernance d'identités non humaines qui restaure accountability et révocation ciblée."
      ],
      "difficulte": 3
    },
    {
      "q": "Une banque en ligne a déployé les passkeys pour ses clients. Six mois plus tard, le support traite des milliers de demandes de récupération après perte d'appareil, via un simple lien envoyé par e-mail. Quel risque le RSSI doit-il traiter EN PRIORITÉ ?",
      "choix": [
        "La récupération par e-mail, qui rabaisse l’assurance au niveau de la boîte mail",
        "La synchronisation des passkeys via des clouds grand public, hors du contrôle de la banque",
        "L'incompatibilité des passkeys avec les navigateurs anciens de certains clients",
        "La dégradation de l'expérience client provoquée par les pertes d'accès répétées"
      ],
      "reponse": 0,
      "explication": "La chaîne d'authentification vaut son maillon le plus faible : si un attaquant peut déclencher une récupération et enregistrer SA propre passkey via un simple lien e-mail, la résistance au phishing de WebAuthn est contournée — les attaquants ciblent désormais la récupération, pas l'authentification. Le RSSI doit durcir ce parcours (vérification d'identité proportionnée, signaux de risque, délais et notifications, canaux multiples). La dégradation de l'expérience est réelle mais c'est un symptôme, pas le risque de sécurité prioritaire ; la synchronisation cloud des passkeys est un vrai sujet d'assurance mais secondaire face à une récupération triviale ; la compatibilité des navigateurs est un problème de technicien.",
      "pourquoi": [
        "Bonne réponse : la récupération est devenue le maillon faible — un lien e-mail permet à un attaquant d'enregistrer sa propre passkey, annulant la résistance au phishing.",
        "Techniquement vrai mais secondaire : l'assurance des passkeys synchronisées est un arbitrage réel, mais sans commune mesure avec une récupération triviale par e-mail.",
        "Réponse de technicien : la compatibilité navigateur est un sujet de support, pas un risque de sécurité prioritaire.",
        "Vrai mais pas prioritaire pour un RSSI : l'irritation client est un symptôme business, pas le risque de sécurité à traiter d'abord."
      ],
      "difficulte": 3
    },
    {
      "q": "Après une acquisition, un audit révèle que l'application mainframe de facturation héritée de la cible — sans API ni support SCIM — compte des dizaines de comptes d'employés partis depuis plus de 90 jours. Son remplacement est budgété dans trois ans. Quelle est la MEILLEURE réponse ?",
      "choix": [
        "Accélérer le remplacement du mainframe en réallouant le budget sécurité",
        "Réconcilier automatiquement les comptes avec la source RH, plus des revues d’accès rapprochées",
        "Accepter formellement le risque puisque l'application sera décommissionnée",
        "Rappeler aux administrateurs de l'application leur obligation de supprimer les comptes sous 24 heures"
      ],
      "reponse": 1,
      "explication": "Le constat d'audit porte sur le processus leaver, pas sur la technologie : même sans SCIM, on peut réconcilier régulièrement les comptes de l'application avec la source d'autorité RH (connecteur spécifique, export/import automatisé) pour détecter et désactiver les comptes de partants, avec des revues d'accès rapprochées en contrôle compensatoire. Réallouer le budget pour remplacer le mainframe est disproportionné et hors du pouvoir du seul RSSI ; accepter le risque pendant trois ans face à des comptes orphelins actifs sur une application financière est indéfendable ; et rappeler des obligations à un processus manuel qui a déjà échoué n'est pas un contrôle.",
      "pourquoi": [
        "Vrai à long terme mais hors budget et hors délai : réallouer le budget sécurité pour un remplacement à trois ans ne corrige pas l'exposition actuelle.",
        "Bonne réponse : réconciliation automatisée avec la source RH et revues compensatoires rapprochées — le processus leaver est réparé sans attendre la modernisation.",
        "Inacceptable : accepter trois ans de comptes orphelins actifs sur une application financière n'est pas une gestion de risque défendable.",
        "Illusoire : ré-énoncer une obligation à un processus manuel qui a déjà échoué n'est pas un contrôle — il faut un mécanisme."
      ],
      "difficulte": 3
    },
    {
      "q": "Le RSSI veut généraliser un MFA résistant au phishing, mais 30 % des applications, héritées, ne supportent que des protocoles d'authentification anciens (NTLM, LDAP bind) incompatibles avec l'authentification moderne. Quelle approche est la MEILLEURE ?",
      "choix": [
        "Imposer une connexion VPN avec MFA pour atteindre les applications héritées",
        "Reporter le programme MFA jusqu'à la modernisation complète du parc applicatif",
        "Placer les applications héritées derrière un proxy imposant l’authentification moderne",
        "Exempter définitivement les applications héritées de l'exigence MFA, documentée dans la politique"
      ],
      "reponse": 2,
      "explication": "Le pattern éprouvé consiste à interposer un point d'application moderne (proxy d'accès, passerelle d'identité) : l'utilisateur s'authentifie en frontal avec un MFA résistant au phishing, la passerelle traduit ensuite vers le protocole hérité — le tout assorti d'un plan de réduction de la dette. Reporter tout le programme suspend la protection de 100 % du parc à cause de 30 % ; une exemption définitive est un absolu qui institutionnalise la faiblesse sur des applications souvent critiques ; le VPN avec MFA protège l'accès au réseau mais laisse l'authentification applicative faible pour tout attaquant déjà interne — c'est du périmètre, pas de l'identité.",
      "pourquoi": [
        "Techniquement vraie mais insuffisante : le VPN protège l'entrée réseau, pas l'authentification applicative — un attaquant interne exploite toujours NTLM ; c'est une réponse périmétrique à un problème d'identité.",
        "Hors délai : suspendre tout le programme à la modernisation de 30 % du parc laisse 100 % des utilisateurs sans protection pendant des années.",
        "Bonne réponse : une passerelle d'accès impose le MFA moderne en frontal des protocoles hérités et transforme le legacy en dette gérée plutôt qu'en blocage.",
        "Piège absolu : une exemption définitive institutionnalise la faiblesse précisément sur des applications anciennes et souvent critiques."
      ],
      "difficulte": 3
    },
    {
      "q": "Le nouveau programme de gouvernance des identités révèle 12 000 identités humaines et 45 000 identités non humaines (comptes de service, workloads, robots, agents IA) totalement non gouvernées. Le budget de la première année est limité. Que devriez-vous faire EN PREMIER ?",
      "choix": [
        "Supprimer tous les comptes non humains inactifs depuis plus de 90 jours",
        "Imposer la rotation immédiate des mots de passe de tous les comptes de service",
        "Étendre immédiatement les campagnes de certification existantes à toutes les identités non humaines",
        "Inventorier les identités non humaines et leur assigner un propriétaire"
      ],
      "reponse": 3,
      "explication": "On ne gouverne pas ce qu'on ne connaît pas : la première étape est l'inventaire et l'assignation d'un propriétaire (ownership) pour chaque identité non humaine, en priorisant les privilèges élevés — c'est le prérequis de toute certification, rotation ou nettoyage. Étendre les certifications à 45 000 identités sans propriétaire identifié produirait du rubber stamping à grande échelle : personne ne peut attester d'un compte dont on ignore la fonction. La rotation massive sans connaître les dépendances provoque des pannes en chaîne ; supprimer les comptes « inactifs » sans propriétaire ni analyse casse des traitements périodiques légitimes (batchs trimestriels, plans de secours).",
      "pourquoi": [
        "Techniquement vraie mais hors phase : supprimer des comptes « inactifs » sans propriétaire ni analyse casse des traitements légitimes (batchs périodiques, procédures de secours).",
        "Réponse de technicien : une rotation massive sans connaissance des dépendances déclenche des pannes en chaîne sur les applications consommatrices.",
        "Hors phase : certifier 45 000 identités sans propriétaire identifié produit du rubber stamping — personne ne peut attester d'un compte dont la fonction est inconnue.",
        "Bonne réponse : inventaire et ownership, priorisés par le niveau de privilège — le prérequis de toute gouvernance ; on ne protège pas ce qu'on ne connaît pas."
      ],
      "difficulte": 3
    },
    {
      "q": "Une nouvelle application interne doit authentifier les utilisateurs auprès de l'annuaire Active Directory. L'équipe projet propose un simple bind LDAP vers le port 389 du contrôleur de domaine. Quelle est la MEILLEURE recommandation ?",
      "choix": [
        "Accepter la proposition, car le réseau interne est considéré comme de confiance",
        "Exiger LDAPS (ou StartTLS) afin que les identifiants transmis lors du bind ne circulent jamais en clair",
        "Faire réaliser le bind avec un compte administrateur du domaine pour simplifier les autorisations",
        "Autoriser le bind anonyme afin d'éviter de stocker des identifiants dans l'application"
      ],
      "reponse": 1,
      "explication": "Un simple bind LDAP sur le port 389 transmet le DN et le mot de passe en clair : n'importe quel attaquant en position d'écoute sur le réseau interne les capture. La bonne réponse est d'imposer LDAPS (TCP 636) ou StartTLS pour chiffrer la session. Considérer le réseau interne comme de confiance contredit le Zero Trust ; un compte Domain Admin pour un bind applicatif viole le least privilege ; et le bind anonyme supprime l'authentification, donc l'accountability.",
      "pourquoi": [
        "Piège périmétrique : « le réseau interne est de confiance » contredit le Zero Trust — un attaquant déjà interne capturerait les identifiants en clair.",
        "Bonne réponse : LDAPS (TCP 636) ou StartTLS chiffre la session et protège les identifiants transmis lors du bind.",
        "Violation du least privilege : un bind applicatif n'a besoin que de droits de lecture ciblés, jamais des privilèges d'administrateur du domaine.",
        "Pire encore : le bind anonyme supprime l'authentification elle-même, donc toute accountability sur les requêtes annuaire."
      ],
      "difficulte": 2
    },
    {
      "q": "Un audit révèle qu'un prestataire est entré plusieurs fois dans le bâtiment après la fin de son contrat : son badge n'avait jamais été désactivé dans le système de contrôle d'accès physique (PACS). Quelle mesure corrective traite la cause RACINE ?",
      "choix": [
        "Intégrer la désactivation des badges PACS au deprovisioning IAM",
        "Installer des caméras de surveillance supplémentaires aux entrées du bâtiment",
        "Diffuser une note interne rappelant l'interdiction du tailgating aux employés",
        "Exiger que tous les visiteurs signent le registre à l'accueil et portent un badge visiteur"
      ],
      "reponse": 0,
      "explication": "La cause racine est un badge resté actif après la fin du contrat : l'accès physique n'était pas couvert par le processus de deprovisioning. La correction consiste à traiter le badge comme toute autre identité et à intégrer sa désactivation au workflow d'offboarding déclenché par la fin de contrat, exactement comme pour les comptes logiques. Les caméras sont un contrôle détectif qui n'empêche pas l'entrée ; une note de sensibilisation ne corrige pas le badge actif ; et le prestataire n'était pas un visiteur — il entrait avec un badge valide.",
      "pourquoi": [
        "Bonne réponse : le badge est une identité comme une autre — sa désactivation doit être déclenchée par le même processus de deprovisioning que les comptes logiques.",
        "Contrôle détectif : les caméras enregistrent l'intrusion mais ne l'empêchent pas, et ne corrigent pas le badge resté actif.",
        "Contrôle faible et hors cible : la sensibilisation au tailgating ne traite pas la cause — le prestataire entrait avec un badge valide.",
        "Hors sujet : le prestataire n'était pas un visiteur ; un registre d'accueil n'aurait rien changé à un badge actif."
      ],
      "difficulte": 2
    },
    {
      "q": "Une revue de sécurité montre que plusieurs comptes de service Windows utilisent des mots de passe fixes définis il y a des années, exposés au Kerberoasting. Quelle est la MEILLEURE mesure corrective ?",
      "choix": [
        "Planifier une rotation manuelle trimestrielle des mots de passe par les administrateurs",
        "Basculer les services concernés vers le compte système local pour supprimer les mots de passe de domaine",
        "Imposer le MFA sur ces comptes de service",
        "Migrer ces services vers des group Managed Service Accounts (gMSA) à mot de passe géré par l’annuaire"
      ],
      "reponse": 3,
      "explication": "Les gMSA répondent exactement au problème : l'annuaire génère un mot de passe de 240 caractères, le renouvelle automatiquement et aucun humain ne le connaît — le Kerberoasting devient inopérant car le hash est incassable hors ligne. La rotation manuelle trimestrielle dépend de la discipline humaine et laisse des fenêtres d'exposition ; le compte système local accorde des privilèges excessifs sur la machine, ce que la leçon déconseille explicitement ; et le MFA ne s'applique pas aux comptes de service, qui s'authentifient sans interaction humaine.",
      "pourquoi": [
        "Palliatif fragile : la rotation manuelle dépend de la discipline des administrateurs, laisse des fenêtres d'exposition et des mots de passe connus des humains.",
        "Fausse bonne idée : le compte système local accorde bien plus de privilèges que nécessaire — un remède pire que le mal.",
        "Inapplicable : un compte de service s'authentifie sans interaction humaine ; il ne peut pas répondre à un défi MFA.",
        "Bonne réponse : le gMSA délègue la gestion du mot de passe à l'annuaire — long, aléatoire, rotation automatique, inconnu des humains — ce qui neutralise le Kerberoasting."
      ],
      "difficulte": 2
    }
  ],
  "quizEn": [
    {
      "q": "A security administrator reviews logs and finds that actions performed on a critical server cannot be traced to any specific individual because operators share a generic account. Which access control principle is MOST directly undermined?",
      "choix": [
        "Separation of duties",
        "Least privilege",
        "Accountability",
        "Defense in depth"
      ],
      "reponse": 2,
      "explication": "L'accountability exige de pouvoir attribuer chaque action à un individu identifié de manière unique et authentifié. Un compte générique partagé brise cette chaîne : même avec des journaux complets, on ne sait pas QUI a agi. Le least privilege concerne l'étendue des droits, la separation of duties la répartition des tâches sensibles, et la defense in depth la superposition de contrôles — aucun n'est directement en cause ici.",
      "pourquoi": [
        "Hors cible : la separation of duties répartit les tâches sensibles, ce n'est pas le problème décrit.",
        "Hors cible : le least privilege concerne l'étendue des droits, pas l'attribution des actions.",
        "Bonne réponse : le compte générique partagé empêche d'attribuer chaque action à un individu — l'accountability est directement compromise.",
        "Trop général : la defense in depth superpose des contrôles, sans lien direct ici."
      ],
      "difficulte": 1
    },
    {
      "q": "Which of the following BEST describes the difference between identification and authentication?",
      "choix": [
        "Identification proves an identity; authentication claims it",
        "They are synonymous terms in modern IAM systems",
        "Identification grants access rights; authentication logs user actions",
        "Identification claims an identity; authentication proves that claim"
      ],
      "reponse": 3,
      "explication": "L'identification est la déclaration d'une identité (saisir un nom d'utilisateur, présenter un badge) ; l'authentification est la preuve de cette déclaration (mot de passe, biométrie, token). La réponse A inverse les définitions, la C confond avec l'autorisation et l'audit, et les deux termes ne sont jamais synonymes à l'examen CISSP.",
      "pourquoi": [
        "Inversion des deux définitions.",
        "Faux : les deux termes ne sont jamais synonymes à l'examen CISSP.",
        "Confusion avec l'autorisation et l'audit.",
        "Bonne réponse : identifier = déclarer une identité ; authentifier = prouver cette déclaration."
      ],
      "difficulte": 1
    },
    {
      "q": "A user authenticates with a password and then approves a push notification on a registered smartphone. Which factor types are being combined?",
      "choix": [
        "Something you know and something you have",
        "Two instances of something you know",
        "Something you have and somewhere you are",
        "Something you know and something you are"
      ],
      "reponse": 0,
      "explication": "Le mot de passe est un facteur de connaissance (something you know) ; la notification push validée sur un smartphone enrôlé prouve la possession de cet appareil (something you have). C'est donc un vrai MFA à deux types de facteurs. Aucune biométrie (something you are) ni géolocalisation n'intervient dans ce scénario.",
      "pourquoi": [
        "Bonne réponse : mot de passe (something you know) + possession du smartphone enrôlé (something you have) = vrai MFA à deux types de facteurs.",
        "Faux : le smartphone enrôlé n'est pas une connaissance.",
        "Hors scénario : aucune géolocalisation n'est utilisée.",
        "Hors scénario : aucune biométrie n'intervient."
      ],
      "difficulte": 1
    },
    {
      "q": "An organization deploying biometric authentication for a high-security vault should tune the system to achieve which of the following?",
      "choix": [
        "The lowest possible False Rejection Rate, even if some impostors are occasionally accepted",
        "A False Acceptance Rate as low as possible, even at the cost of more false rejections",
        "The highest possible throughput",
        "Equal FAR and FRR at all times"
      ],
      "reponse": 1,
      "explication": "Pour un coffre de haute sécurité, accepter un imposteur (FAR, erreur de type 2) est bien plus grave que rejeter un utilisateur légitime (FRR, erreur de type 1). On augmente donc la sensibilité pour minimiser le FAR, en acceptant davantage de faux rejets. Le CER (point d'égalité FAR/FRR) sert à comparer la précision des systèmes, pas à régler un site sensible, et le débit est un critère de confort, pas de sécurité.",
      "pourquoi": [
        "Confort maximal = risque maximal : minimiser le FRR facilite l'entrée d'imposteurs dans un site de haute sécurité.",
        "Bonne réponse : minimiser le FAR, quitte à subir plus de faux rejets — la priorité d'un coffre de haute sécurité.",
        "Hors sujet : le débit est un critère de confort, pas de sécurité.",
        "Hors usage : l'égalité FAR/FRR (CER) sert à comparer des systèmes, pas à régler un site sensible."
      ],
      "difficulte": 2
    },
    {
      "q": "When comparing biometric systems from different vendors, which single metric is MOST useful?",
      "choix": [
        "Template storage size",
        "Crossover Error Rate (CER)",
        "Enrollment time",
        "False Acceptance Rate at maximum sensitivity"
      ],
      "reponse": 1,
      "explication": "Le CER — le point où FAR et FRR sont égaux — est la mesure standard pour comparer objectivement la précision de systèmes biométriques : plus il est bas, plus le système est précis, indépendamment du réglage de sensibilité choisi ensuite. Le FAR à sensibilité maximale ne reflète qu'un point extrême de la courbe, et le temps d'enrôlement ou la taille des gabarits sont des critères opérationnels secondaires.",
      "pourquoi": [
        "La taille des gabarits n'indique rien sur la précision.",
        "Bonne réponse : le CER, point d'égalité FAR/FRR, est la métrique standard pour comparer la précision entre fournisseurs.",
        "Critère opérationnel secondaire, sans lien avec la précision.",
        "Trop partiel : un point extrême de la courbe ne caractérise pas la précision globale."
      ],
      "difficulte": 1
    },
    {
      "q": "Which NIST SP 800-63B Authenticator Assurance Level requires multi-factor authentication using a hardware-based authenticator with verifier impersonation resistance?",
      "choix": [
        "AAL1",
        "IAL3",
        "AAL2",
        "AAL3"
      ],
      "reponse": 3,
      "explication": "AAL3 est le niveau le plus élevé d'assurance d'authentification : il exige un authentificateur matériel, du MFA et la résistance à l'usurpation du vérifieur (phishing resistance), typiquement une clé FIDO2 matérielle. AAL1 accepte un facteur unique, AAL2 exige le MFA sans imposer le matériel, et IAL3 concerne l'identity proofing (preuve d'identité à l'enrôlement), pas l'authentification.",
      "pourquoi": [
        "Trop faible : AAL1 accepte un facteur unique.",
        "Piège de sigle : IAL3 concerne l'identity proofing à l'enrôlement, pas l'authentification.",
        "Trop faible : AAL2 exige le MFA sans imposer le matériel ni la résistance à l'usurpation du vérifieur.",
        "Bonne réponse : AAL3 exige un MFA matériel avec verifier impersonation resistance."
      ],
      "difficulte": 2
    },
    {
      "q": "During a Kerberos logon, which component issues the Ticket-Granting Ticket (TGT)?",
      "choix": [
        "The Authentication Service component of the KDC",
        "The resource server the user wants to access",
        "The Ticket-Granting Service after validating a service ticket",
        "The client workstation itself"
      ],
      "reponse": 0,
      "explication": "C'est l'Authentication Service (AS) du KDC qui vérifie l'authentification initiale de l'utilisateur et délivre le TGT, chiffré de sorte que seul le détenteur du bon mot de passe puisse exploiter la clé de session associée. Le TGS intervient ensuite : il vérifie le TGT et délivre les service tickets. Ni le serveur de ressources ni le poste client n'émettent de tickets.",
      "pourquoi": [
        "Bonne réponse : l'Authentication Service du KDC vérifie l'authentification initiale et émet le TGT.",
        "Hors rôle : le serveur de ressources consomme les service tickets, il n'en émet pas.",
        "Inversion : le TGS délivre les service tickets APRÈS présentation du TGT, il n'émet pas le TGT initial.",
        "Hors rôle : le poste client demande les tickets, il ne les délivre pas."
      ],
      "difficulte": 2
    },
    {
      "q": "Users in a single Active Directory site report authentication failures shortly after a virtualization snapshot rollback on a domain controller. What is the MOST likely cause?",
      "choix": [
        "Expired TLS certificates on the domain controller",
        "A corrupted LDAP schema",
        "Kerberos clock skew beyond tolerance",
        "RADIUS shared secret mismatch"
      ],
      "reponse": 2,
      "explication": "Un retour de snapshot ramène l'horloge du contrôleur de domaine en arrière ; or Kerberos horodate ses tickets et rejette par défaut toute dérive supérieure à la tolérance (classiquement cinq minutes) afin d'empêcher les attaques par rejeu. Le symptôme — échecs d'authentification massifs juste après un décalage temporel — signe le clock skew. Les certificats TLS, le schéma LDAP ou un secret RADIUS n'expliqueraient pas cette corrélation temporelle.",
      "pourquoi": [
        "Sans corrélation : des certificats expirés ne coïncideraient pas avec un retour de snapshot.",
        "Sans corrélation : un schéma LDAP corrompu n'est pas lié au snapshot.",
        "Bonne réponse : le rollback ramène l'horloge en arrière — dérive supérieure à la tolérance Kerberos (cinq minutes par défaut), d'où les rejets massifs.",
        "Hors protocole : aucun secret RADIUS n'intervient dans l'authentification AD interne."
      ],
      "difficulte": 2
    },
    {
      "q": "An attacker who has compromised the krbtgt account hash of a domain can perform which attack?",
      "choix": [
        "Kerberoasting against service accounts",
        "Offline cracking of NTLM hashes",
        "Forging Golden Tickets granting arbitrary domain access",
        "AS-REP roasting against domain users without Kerberos preauthentication"
      ],
      "reponse": 2,
      "explication": "Le compte krbtgt signe et chiffre tous les TGT du domaine : avec son hash, l'attaquant forge des golden tickets — des TGT parfaitement valides pour n'importe quelle identité, y compris des comptes inexistants, avec la durée de vie de son choix. Le Kerberoasting et l'AS-REP roasting ne nécessitent pas krbtgt (ils exploitent des service tickets ou l'absence de pré-authentification), et le cassage NTLM est une attaque distincte.",
      "pourquoi": [
        "Trop faible pour ce butin : le Kerberoasting ne nécessite pas krbtgt, de simples service tickets suffisent.",
        "Hors protocole : le cassage NTLM est une attaque distincte.",
        "Bonne réponse : le hash de krbtgt, qui signe et chiffre tous les TGT, permet de forger des golden tickets valides pour tout le domaine.",
        "Hors dépendance : l'AS-REP roasting exploite l'absence de pré-authentification, pas krbtgt."
      ],
      "difficulte": 3
    },
    {
      "q": "Which statement about Security Assertion Markup Language (SAML) 2.0 is TRUE?",
      "choix": [
        "It is a JSON-based protocol maintained by the IETF",
        "An XML-based standard maintained by OASIS",
        "It replaced OAuth 2.0 for API authorization",
        "It requires Kerberos as the underlying ticket system"
      ],
      "reponse": 1,
      "explication": "SAML 2.0 est un standard ouvert fondé sur XML, maintenu par l'OASIS, qui permet d'échanger des assertions d'authentification, d'attributs et d'autorisation entre un Identity Provider et un Service Provider — c'est le socle historique du SSO web fédéré. Il n'est ni JSON ni IETF (c'est OAuth qui est une RFC de l'IETF), il ne remplace pas OAuth (rôles différents) et n'a aucun lien avec Kerberos.",
      "pourquoi": [
        "Faux : SAML est en XML et maintenu par l'OASIS, pas par l'IETF.",
        "Bonne réponse : standard XML de l'OASIS servant à échanger des assertions d'authentification et d'autorisation entre IdP et SP.",
        "Faux : SAML et OAuth ont des rôles différents et complémentaires.",
        "Faux : SAML n'a aucun lien avec Kerberos."
      ],
      "difficulte": 1
    },
    {
      "q": "A company wants employees to sign in once to the corporate identity provider and then access dozens of third-party SaaS applications without re-entering credentials. Which technology BEST meets this requirement?",
      "choix": [
        "Local accounts with a password manager",
        "Password synchronization across all SaaS providers nightly",
        "TACACS+ command authorization",
        "Federated SSO using SAML or OIDC assertions/tokens"
      ],
      "reponse": 3,
      "explication": "Le besoin décrit est le SSO fédéré : l'IdP d'entreprise authentifie une fois, puis transmet des assertions SAML ou des jetons OIDC aux applications SaaS, qui ouvrent la session sans revoir les identifiants. La synchronisation de mots de passe multiplie les surfaces d'attaque et n'est pas du SSO ; un gestionnaire de mots de passe automatise la saisie mais reste de l'authentification répétée ; TACACS+ gère l'administration d'équipements réseau.",
      "pourquoi": [
        "Trop faible : un gestionnaire de mots de passe automatise la saisie mais reste de l'authentification répétée.",
        "Fausse bonne idée : la synchronisation de mots de passe multiplie les surfaces d'attaque sans faire de SSO.",
        "Hors sujet : TACACS+ administre des équipements réseau, il ne fait pas de SSO applicatif.",
        "Bonne réponse : SSO fédéré — l'IdP d'entreprise authentifie une fois, puis assertions SAML ou jetons OIDC vers chaque SaaS."
      ],
      "difficulte": 1
    },
    {
      "q": "In the OAuth 2.0 framework, which entity issues access tokens after the resource owner grants consent?",
      "choix": [
        "The authorization server",
        "The user agent",
        "The resource server",
        "The client application requesting the token"
      ],
      "reponse": 0,
      "explication": "Le serveur d'autorisation authentifie le resource owner, recueille son consentement puis émet les access tokens (et refresh tokens). Le serveur de ressources se contente de vérifier et d'accepter ces tokens pour servir les données ; le client les utilise mais ne les émet jamais ; le user agent (navigateur) n'est qu'un intermédiaire de transport.",
      "pourquoi": [
        "Bonne réponse : le serveur d'autorisation émet les access tokens après consentement du resource owner.",
        "Hors rôle : le navigateur n'est qu'un transporteur.",
        "Hors rôle : le resource server vérifie les tokens, il ne les émet pas.",
        "Hors rôle : le client utilise les tokens, il ne les crée jamais."
      ],
      "difficulte": 1
    },
    {
      "q": "What does OpenID Connect add on top of OAuth 2.0?",
      "choix": [
        "A replacement for TLS in mobile applications",
        "Automatic account provisioning across domains",
        "An identity layer adding a signed ID token",
        "Transport encryption for bearer tokens"
      ],
      "reponse": 2,
      "explication": "OIDC ajoute à OAuth 2.0 une couche d'AUTHENTIFICATION : l'ID token, un JWT signé contenant l'identité de l'utilisateur, l'IdP émetteur, l'heure et la méthode d'authentification. OAuth seul délègue des autorisations sans prouver l'identité. Le chiffrement du transport reste assuré par TLS (qu'OIDC ne remplace pas), et le provisioning inter-domaines relève de SCIM.",
      "pourquoi": [
        "Faux : OIDC ne remplace pas TLS.",
        "Hors rôle : le provisioning inter-domaines relève de SCIM.",
        "Bonne réponse : OIDC ajoute la couche d'identité — un ID token JWT signé qui prouve l'authentification de l'utilisateur.",
        "Hors rôle : le chiffrement du transport reste assuré par TLS, pas par OIDC."
      ],
      "difficulte": 2
    },
    {
      "q": "Which access control model relies on security labels assigned to both subjects and objects, with access decisions enforced by the system rather than the data owner?",
      "choix": [
        "Mandatory Access Control",
        "Rule-Based Access Control",
        "Role-Based Access Control",
        "Discretionary Access Control"
      ],
      "reponse": 0,
      "explication": "Le MAC se définit par les labels de classification appliqués aux sujets (habilitations) et aux objets (classifications), l'accès étant imposé par le système selon la politique — le propriétaire n'a aucun pouvoir discrétionnaire. C'est le modèle des environnements militaires (lattice-based). Le DAC laisse le propriétaire décider, le RBAC passe par des rôles métier, et le rule-based applique des règles globales uniformes.",
      "pourquoi": [
        "Bonne réponse : labels sur sujets et objets et décision imposée par le système, pas par le propriétaire = MAC.",
        "Hors modèle : le rule-based applique des règles globales sans labels.",
        "Hors modèle : le RBAC passe par des rôles métier, pas des labels.",
        "Contresens : le DAC laisse le propriétaire décider — l'inverse du scénario."
      ],
      "difficulte": 1
    },
    {
      "q": "A hospital grants access to patient records based on the user's department, the sensitivity of the record, the time of day, and whether the workstation is inside the clinical network. Which access control model is being used?",
      "choix": [
        "Mandatory Access Control",
        "Attribute-Based Access Control",
        "Discretionary Access Control",
        "Role-Based Access Control"
      ],
      "reponse": 1,
      "explication": "La décision combine des attributs du sujet (service), de l'objet (sensibilité du dossier), de l'environnement (heure, localisation réseau du poste) : c'est la signature de l'ABAC, où un moteur de politiques évalue dynamiquement ces attributs à chaque requête (souvent exprimées en XACML). Un RBAC pur ne considérerait que le rôle, sans le contexte ; le DAC dépendrait du propriétaire du dossier ; le MAC utiliserait des labels de classification imposés.",
      "pourquoi": [
        "Hors modèle : le MAC utiliserait des labels de classification imposés.",
        "Bonne réponse : service, sensibilité du dossier, heure et réseau sont des attributs évalués dynamiquement — ABAC.",
        "Hors modèle : le DAC dépendrait du propriétaire du dossier.",
        "Trop étroit : le rôle seul n'explique ni l'heure ni la localisation réseau du poste."
      ],
      "difficulte": 2
    },
    {
      "q": "An organization with high staff turnover wants to minimize administrative effort when employees change positions. Which access control approach BEST achieves this?",
      "choix": [
        "Granting permissions individually to each user account",
        "Applying a single access rule set to all employees",
        "Letting data owners grant access on request",
        "Assigning permissions to job-based roles"
      ],
      "reponse": 3,
      "explication": "Le RBAC est conçu pour cela : les privilèges sont rattachés à des rôles alignés sur les fonctions ; lors d'une mutation, il suffit de retirer l'ancien rôle et d'assigner le nouveau — les anciens droits disparaissent automatiquement, ce qui prévient aussi le privilege creep. L'attribution individuelle (A) et le DAC (C) explosent en charge administrative et en erreurs, et une règle unique pour tous (B) ne reflète pas les différences de fonctions.",
      "pourquoi": [
        "Ingérable : l'attribution individuelle explose en charge administrative et en erreurs.",
        "Trop uniforme : une règle unique ignore les différences de fonctions.",
        "Dispersé : le DAC sur demande éparpille les décisions et favorise les dérives.",
        "Bonne réponse : rattacher les droits à des rôles métier réduit chaque mutation à un changement de rôle et prévient le privilege creep."
      ],
      "difficulte": 1
    },
    {
      "q": "During a quarterly access review, an auditor finds that a financial analyst who transferred from accounts payable can both create vendors and approve payments to them. What is the PRIMARY concern?",
      "choix": [
        "Excessive session duration",
        "Password policy violation",
        "A toxic combination violating separation of duties, enabling potential fraud",
        "Lack of encryption on the financial data stored at rest in the reporting database"
      ],
      "reponse": 2,
      "explication": "Créer un fournisseur ET approuver ses paiements est une combinaison toxique : une seule personne peut monter une fraude complète (fournisseur fictif, paiements approuvés par elle-même). C'est une violation de la separation of duties, souvent issue du privilege creep après une mutation — exactement ce que les revues d'accès doivent détecter, avec retrait immédiat des droits hérités de l'ancien poste. Les autres réponses sont hors sujet par rapport au risque décrit.",
      "pourquoi": [
        "Hors scénario : la durée de session n'est pas en cause.",
        "Hors scénario : rien ne concerne les mots de passe.",
        "Bonne réponse : créer des fournisseurs ET approuver leurs paiements = combinaison toxique violant la separation of duties, porte ouverte à la fraude.",
        "Hors scénario : le chiffrement n'est pas le risque décrit."
      ],
      "difficulte": 2
    },
    {
      "q": "What is the PRIMARY security benefit of just-in-time (JIT) privileged access?",
      "choix": [
        "Administrators no longer need MFA",
        "It allows unlimited concurrent administrative sessions",
        "It removes the need for privileged session logging",
        "It eliminates standing (always-on) privileges"
      ],
      "reponse": 3,
      "explication": "Le JIT supprime les privilèges permanents : les droits élevés sont accordés à la demande, pour une durée limitée et une tâche précise, puis retirés automatiquement. Des identifiants volés entre deux élévations ne donnent alors AUCUN privilège — la fenêtre d'attaque se réduit à la durée de la tâche. Le JIT ne dispense ni du MFA ni de l'enregistrement des sessions, qu'il complète au sein d'une solution PAM.",
      "pourquoi": [
        "Contresens dangereux : le JIT complète le MFA, il ne le supprime pas.",
        "Faux : le nombre de sessions simultanées n'a rien à voir avec le JIT.",
        "Faux : l'enregistrement des sessions privilégiées reste nécessaire.",
        "Bonne réponse : la suppression des privilèges permanents réduit la fenêtre pendant laquelle des identifiants volés donnent un accès élevé."
      ],
      "difficulte": 2
    },
    {
      "q": "Which capability is a core function of a Privileged Access Management (PAM) solution?",
      "choix": [
        "Scanning web applications for SQL injection",
        "Vaulting and recording privileged sessions",
        "Filtering outbound email for data loss",
        "Encrypting backup tapes"
      ],
      "reponse": 1,
      "explication": "Le cœur d'une solution PAM est la gestion des comptes à privilèges : coffre-fort d'identifiants (vaulting), rotation automatique des mots de passe (notamment après chaque check-out), courtage et enregistrement des sessions privilégiées, et élévation just-in-time. L'analyse applicative, le chiffrement de sauvegardes et le DLP de messagerie relèvent d'autres familles d'outils de sécurité.",
      "pourquoi": [
        "Hors famille : le scan applicatif relève des outils AppSec.",
        "Bonne réponse : coffre-fort d'identifiants, rotation automatique et enregistrement des sessions privilégiées sont le cœur du PAM.",
        "Hors famille : le DLP de messagerie est une autre catégorie d'outils.",
        "Hors famille : le chiffrement de sauvegardes relève de la continuité."
      ],
      "difficulte": 1
    },
    {
      "q": "A web application keeps users logged in indefinitely as long as the browser remains open. Which control BEST reduces the risk of session hijacking exploitation?",
      "choix": [
        "Enforcing both an idle timeout and an absolute session lifetime",
        "Requiring TLS only on the authentication page where credentials are entered",
        "Storing the session ID in the page URL for easy tracking",
        "Increasing cookie lifetime to one year"
      ],
      "reponse": 0,
      "explication": "Une session sans expiration reste exploitable indéfiniment si son jeton est volé. Le duo timeout d'inactivité (déconnexion de l'utilisateur inactif) et durée de vie absolue (la session expire même active, forçant la ré-authentification) borne l'exploitation d'un jeton détourné. Mettre l'ID de session dans l'URL l'expose aux journaux et referrers, allonger la vie du cookie aggrave le risque, et limiter TLS à la page de connexion laisse ensuite le cookie de session circuler en clair (session sidejacking) — TLS doit couvrir toute la session.",
      "pourquoi": [
        "Bonne réponse : timeout d'inactivité et durée de vie absolue avec ré-authentification bornent l'exploitation d'un jeton volé.",
        "Techniquement séduisant mais insuffisant : limiter TLS à la page de connexion laisse ensuite le cookie de session circuler en clair (session sidejacking).",
        "Contre-pratique : l'identifiant en URL fuit dans les journaux, l'historique et les referrers.",
        "Aggrave le risque : allonger la vie du cookie prolonge la fenêtre d'exploitation."
      ],
      "difficulte": 2
    },
    {
      "q": "An attacker obtains a list of usernames and attempts the password \"Winter2026!\" against every account, staying below the account lockout threshold. What is this attack called?",
      "choix": [
        "Credential stuffing",
        "Rainbow table attack",
        "Pass-the-hash",
        "Password spraying"
      ],
      "reponse": 3,
      "explication": "Essayer UN mot de passe probable sur un grand nombre de comptes, en restant sous le seuil de verrouillage par compte, est du password spraying. Le credential stuffing rejoue des couples identifiant/mot de passe volés ailleurs ; les rainbow tables cassent des hashes hors ligne ; le pass-the-hash rejoue un hash NTLM sans connaître le mot de passe. La détection du spraying exige une corrélation transversale des échecs, pas un simple compteur par compte.",
      "pourquoi": [
        "Confusion : le credential stuffing rejoue des COUPLES volés, pas un mot de passe unique.",
        "Hors mode : les rainbow tables cassent des hashes hors ligne.",
        "Hors mode : le pass-the-hash rejoue un hash NTLM, pas un mot de passe.",
        "Bonne réponse : un seul mot de passe probable essayé sur tous les comptes, sous le seuil de verrouillage = password spraying."
      ],
      "difficulte": 2
    },
    {
      "q": "Which attack involves replaying username/password pairs stolen from one breached website against many other sites?",
      "choix": [
        "Credential stuffing",
        "Password spraying",
        "Session fixation",
        "Kerberoasting"
      ],
      "reponse": 0,
      "explication": "Le credential stuffing exploite la réutilisation des mots de passe : des couples identifiant/mot de passe issus d'une fuite sont rejoués en masse sur d'autres services. Les parades incluent le MFA, la vérification des mots de passe contre les bases de fuites connues et la détection d'automatisation. Le spraying utilise un mot de passe unique sur beaucoup de comptes, le Kerberoasting casse des tickets de service, et la fixation de session impose un ID de session connu de l'attaquant.",
      "pourquoi": [
        "Bonne réponse : rejouer des couples identifiant/mot de passe volés sur d'autres sites = credential stuffing, qui parie sur la réutilisation.",
        "Confusion : le spraying utilise un mot de passe unique sur beaucoup de comptes.",
        "Hors mode : la fixation de session impose un identifiant de session, sans identifiants volés.",
        "Hors mode : le Kerberoasting casse des tickets de service."
      ],
      "difficulte": 1
    },
    {
      "q": "Why are FIDO2/WebAuthn authenticators considered phishing-resistant while TOTP codes are not?",
      "choix": [
        "FIDO2 codes are longer than TOTP codes",
        "FIDO2 signatures are bound to the site’s origin",
        "TOTP requires a network connection while FIDO2 does not",
        "FIDO2 encrypts the password before transmission"
      ],
      "reponse": 1,
      "explication": "La résistance au phishing de FIDO2 tient au 'origin binding' : le navigateur inclut l'origine du site dans le défi signé par la clé privée, qui ne quitte jamais l'authentificateur — un site de phishing, sur un autre domaine, ne peut pas obtenir de signature valide pour le site légitime. Un code TOTP, lui, est une simple suite de chiffres que la victime peut saisir sur un faux site, que l'attaquant relaie en temps réel (adversary-in-the-middle). Les autres réponses sont techniquement fausses.",
      "pourquoi": [
        "Hors sujet : la longueur des codes n'a aucun rapport avec la résistance au phishing.",
        "Bonne réponse : la signature FIDO2 est liée à l'origine du site légitime — un faux site n'obtient aucune réponse valide, alors qu'un TOTP se saisit n'importe où.",
        "Hors sujet : la connexion réseau n'est pas le facteur discriminant.",
        "Faux : FIDO2 n'utilise pas de mot de passe à chiffrer."
      ],
      "difficulte": 3
    },
    {
      "q": "An identity federation allows a partner's employees to access your procurement portal using their own corporate credentials. Who remains responsible for authenticating these users and deprovisioning them when they leave the partner company?",
      "choix": [
        "Each individual user",
        "Your organization, as the service provider",
        "The partner, acting as identity provider",
        "A neutral third-party certificate authority"
      ],
      "reponse": 2,
      "explication": "Dans une fédération B2B, le partenaire reste l'Identity Provider de ses employés : il les authentifie avec leurs identifiants internes et, dès qu'un employé part, la désactivation de son compte chez le partenaire coupe automatiquement l'accès fédéré à votre portail. C'est le grand avantage : le deprovisioning reste là où l'information de départ existe. Votre organisation (SP) consomme les assertions mais ne gère ni mots de passe ni cycle de vie des comptes du partenaire.",
      "pourquoi": [
        "Absurde : l'utilisateur ne se déprovisionne pas lui-même.",
        "Inversion : le SP consomme les assertions mais ne gère ni mots de passe ni cycle de vie des comptes du partenaire.",
        "Bonne réponse : le partenaire, en tant qu'IdP, authentifie ses employés ; la désactivation chez lui coupe automatiquement l'accès fédéré.",
        "Hors rôle : une autorité de certification n'authentifie pas les utilisateurs de la fédération."
      ],
      "difficulte": 2
    },
    {
      "q": "Which protocol is the modern REST/JSON-based standard for automating user account provisioning and deprovisioning across cloud applications?",
      "choix": [
        "SPML",
        "LDAP",
        "SCIM",
        "SAML"
      ],
      "reponse": 2,
      "explication": "SCIM (System for Cross-domain Identity Management) est le standard moderne de provisioning : API REST et objets JSON pour créer, mettre à jour et supprimer automatiquement les comptes dans les applications SaaS depuis l'annuaire central. SPML est son prédécesseur XML quasi abandonné ; SAML transporte des assertions d'authentification, pas des opérations de gestion de comptes ; LDAP est un protocole d'accès aux annuaires, pas un standard de synchronisation inter-domaines.",
      "pourquoi": [
        "Piège d'ancienneté : SPML est l'ancêtre XML quasi abandonné.",
        "Hors rôle : LDAP interroge des annuaires, il ne synchronise pas des comptes inter-domaines.",
        "Bonne réponse : SCIM est le standard REST/JSON de provisioning et deprovisioning automatisés vers les applications cloud.",
        "Hors rôle : SAML transporte des assertions, pas des opérations de gestion de comptes."
      ],
      "difficulte": 2
    },
    {
      "q": "When an employee is terminated under hostile circumstances, what should the security team do FIRST regarding the employee's accounts?",
      "choix": [
        "Wait for the next scheduled access review",
        "Reset the passwords and give them to the employee's manager",
        "Delete all accounts and associated data immediately",
        "Disable the accounts immediately on notice of departure"
      ],
      "reponse": 3,
      "explication": "La bonne pratique est de DÉSACTIVER immédiatement les comptes — idéalement pendant l'entretien de sortie — afin de couper tout accès sans détruire les données, clés de chiffrement ou preuves potentiellement nécessaires. La suppression définitive vient plus tard, selon la politique de rétention. Supprimer d'emblée fait perdre des éléments irremplaçables, attendre une revue planifiée laisse une fenêtre d'attaque, et donner les identifiants au manager brise l'accountability (mieux vaut des accès délégués tracés).",
      "pourquoi": [
        "Fenêtre d'attaque : attendre la revue planifiée est inacceptable pour un départ hostile.",
        "Brise l'accountability : donner les identifiants au manager rend les actions inattribuables.",
        "Hors phase : supprimer d'emblée détruit données et preuves potentiellement nécessaires.",
        "Bonne réponse : désactiver immédiatement les comptes, idéalement pendant l'entretien de sortie."
      ],
      "difficulte": 1
    },
    {
      "q": "Which of the following BEST describes an access control matrix and its two derived views?",
      "choix": [
        "A network diagram showing firewalls and routers",
        "A subjects-by-objects table of access rights",
        "A list of roles mapped to organizational units",
        "A lattice of security labels ordered by sensitivity"
      ],
      "reponse": 1,
      "explication": "La matrice de contrôle d'accès croise sujets (lignes) et objets (colonnes) : lue en colonne, elle donne l'ACL d'un objet (qui peut y accéder et comment) ; lue en ligne, elle donne la capability list d'un sujet (ce à quoi il peut accéder). Cette distinction colonne/ligne est un classique de l'examen. Le treillis de labels (D) décrit le MAC lattice-based, un autre concept.",
      "pourquoi": [
        "Hors sujet : un schéma réseau n'est pas une matrice de contrôle d'accès.",
        "Bonne réponse : lue en colonne, la matrice donne l'ACL d'un objet ; lue en ligne, la capability list d'un sujet.",
        "Confusion : le mapping rôles/unités décrit le RBAC.",
        "Confusion : le treillis de labels décrit le MAC lattice-based."
      ],
      "difficulte": 2
    },
    {
      "q": "A bank teller application only exposes menu options and data fields appropriate to the teller's job, hiding administrative functions entirely. Which access control technique is this?",
      "choix": [
        "Constrained (restricted) user interface",
        "Context-dependent access control using session state",
        "Content-dependent access control",
        "Capability-based security"
      ],
      "reponse": 0,
      "explication": "Une interface contrainte (constrained/restricted interface) limite ce que l'utilisateur peut voir et faire en masquant ou grisant les fonctions hors de son périmètre — l'application du guichetier n'affiche que ses opérations. Le content-dependent filtre selon le CONTENU des données (ex. une vue base de données masquant une colonne), le context-dependent selon le contexte de la demande (heure, séquence), et la sécurité par capabilities est un mécanisme de jetons d'accès, pas d'interface.",
      "pourquoi": [
        "Bonne réponse : masquer menus et fonctions hors du périmètre du guichetier = interface contrainte (constrained/restricted UI).",
        "Hors cible : le context-dependent dépend du contexte de la demande (heure, séquence).",
        "Hors cible : le content-dependent filtre selon le CONTENU des données, pas l'interface.",
        "Hors mécanisme : les capabilities sont des jetons d'accès, pas une technique d'interface."
      ],
      "difficulte": 2
    },
    {
      "q": "A risk-based authentication system prompts for additional verification only when a login originates from a new device in an unusual country. What is this pattern called?",
      "choix": [
        "Adaptive step-up authentication",
        "Certificate-based mutual TLS",
        "Single sign-on with session persistence",
        "Static multi-factor authentication"
      ],
      "reponse": 0,
      "explication": "L'authentification adaptative évalue un score de risque contextuel (appareil, localisation, comportement, heure) et n'exige un facteur supplémentaire (step-up) que lorsque le risque dépasse un seuil — équilibre entre sécurité et expérience utilisateur, et composant clé des architectures Zero Trust. Le MFA statique impose les mêmes exigences à chaque connexion ; le SSO et le mTLS ne modulent rien selon le risque.",
      "pourquoi": [
        "Bonne réponse : score de risque contextuel et facteur supplémentaire exigé seulement au-delà d'un seuil = authentification adaptative (step-up).",
        "Hors mécanisme : le mTLS est statique et n'évalue aucun risque.",
        "Hors mécanisme : le SSO persistant ne module rien selon le risque.",
        "Contresens : le MFA statique impose les mêmes exigences à chaque connexion."
      ],
      "difficulte": 2
    },
    {
      "q": "Which of the following is the MOST significant risk introduced by single sign-on, and its BEST mitigation?",
      "choix": [
        "Users must remember more passwords; deploy a password manager",
        "Applications can no longer log user activity; enable local logging",
        "Session length becomes too short; extend token lifetimes",
        "One stolen SSO credential exposes every connected app"
      ],
      "reponse": 3,
      "explication": "Le SSO concentre le risque : un seul identifiant compromis ouvre TOUTES les applications reliées (single point of compromise). La parade prioritaire est de durcir cette authentification unique — MFA fort, idéalement résistant au phishing, surveillance des connexions et gestion de session rigoureuse. La réponse A est contradictoire (le SSO réduit le nombre de mots de passe), et les réponses B et C n'adressent pas le risque principal.",
      "pourquoi": [
        "Contradiction : le SSO réduit le nombre de mots de passe à mémoriser.",
        "Faux : le SSO ne supprime pas la journalisation applicative.",
        "Faux problème : allonger la vie des jetons AUGMENTE le risque.",
        "Bonne réponse : un identifiant SSO compromis expose toutes les applications reliées ; la parade est un MFA fort sur l'identité SSO."
      ],
      "difficulte": 1
    },
    {
      "q": "During identity proofing for a new remote employee, which approach provides the HIGHEST assurance according to identity assurance level practices?",
      "choix": [
        "Accepting a self-asserted email address",
        "Verifying government-issued ID evidence with biometric comparison",
        "Sending a one-time code to any phone number the applicant provides",
        "Confirming control of a corporate email address through a verification link"
      ],
      "reponse": 1,
      "explication": "L'identity proofing de plus haute assurance (IAL3 dans NIST SP 800-63A) exige la vérification de preuves d'identité officielles avec comparaison biométrique, en présence physique ou en session à distance supervisée — on établit que la personne EST bien qui elle prétend être avant de créer son compte. L'auto-déclaration (A) correspond à IAL1 ; un code envoyé à un numéro fourni par le demandeur (C) ne prouve rien ; et contrôler une boîte mail (D) démontre la possession d'un compte, pas l'identité réelle de la personne.",
      "pourquoi": [
        "Niveau plancher : l'auto-déclaration correspond à IAL1, la plus faible assurance.",
        "Bonne réponse : preuves d'identité officielles avec comparaison biométrique, en présence ou en session supervisée — la plus haute assurance (IAL3).",
        "Insuffisant : un code envoyé à un numéro fourni par le demandeur ne prouve rien sur son identité réelle.",
        "Techniquement utile mais très insuffisant : contrôler une boîte mail démontre une possession, pas l'identité de la personne."
      ],
      "difficulte": 3
    },
    {
      "q": "Following a successful adversary-in-the-middle attack, the board gives the CISO of a 40,000-employee manufacturer twelve months to deploy phishing-resistant MFA across offices, shared-workstation plants, and call centers. What should the CISO do FIRST?",
      "choix": [
        "Run a voluntary pilot at headquarters and expand based on user feedback",
        "Enable number matching on the existing push notifications for the whole company",
        "Prioritize by risk: migrate privileged and internet-exposed accounts first",
        "Purchase hardware security keys for all employees and set a single cutover date"
      ],
      "reponse": 2,
      "explication": "Une migration MFA à grande échelle est un programme de gestion du risque : la première étape est la cartographie des populations et des applications, suivie d'une priorisation par le risque — comptes à privilèges et accès exposés d'abord, avec des parcours adaptés aux postes partagés. Le big-bang matériel ignore les contraintes d'usage et échouera ; le number matching durcit le push sans le rendre résistant au phishing ; le pilote volontaire, sans priorisation, laisse les comptes critiques exposés pendant des mois.",
      "pourquoi": [
        "Techniquement vrai mais pas prioritaire : un pilote volontaire sans logique de risque retarde la protection des comptes les plus critiques.",
        "Techniquement vrai mais insuffisant : le number matching contre le MFA fatigue ne rend pas le push résistant au phishing — l'exigence du COMEX n'est pas satisfaite.",
        "Bonne réponse : cartographier puis prioriser par le risque — privilèges et exposition Internet d'abord — est la démarche managériale attendue en première étape.",
        "Réponse de technicien : un achat massif avec bascule unique ignore les contraintes des populations (postes partagés, centres d'appels) et voue le déploiement à l'échec."
      ],
      "difficulte": 3
    },
    {
      "q": "A company deploys autonomous AI agents that invoke internal HR and finance APIs. A review finds all agents authenticate with a single shared, highly privileged API key. Which remediation BEST addresses the risk?",
      "choix": [
        "Store the shared API key in a secrets vault with automatic rotation",
        "Require human approval before every action any agent performs",
        "Limit how many AI agents may run concurrently",
        "Give each agent its own least-privilege non-human identity"
      ],
      "reponse": 3,
      "explication": "Les agents IA sont des identités non humaines et doivent être gouvernés comme telles : identité individuelle, moindre privilège par fonction, jetons de courte durée et journalisation rattachant chaque appel à l'agent et à son commanditaire — conditions de l'accountability et de la révocation ciblée. Limiter le nombre d'agents ne change rien à l'anonymat ; l'approbation humaine de chaque action est un absolu qui détruit l'autonomie et sera contourné ; le coffre-fort avec rotation protège le secret mais conserve une identité partagée sur-privilégiée.",
      "pourquoi": [
        "Techniquement vraie mais contextuellement fausse : le vaulting protège le secret sans corriger le vrai problème — une identité partagée et sur-privilégiée.",
        "Piège absolu : approuver chaque action supprime la valeur de l'autonomie et sera contourné ; le contrôle porte sur l'identité et les droits, pas sur chaque geste.",
        "Hors sujet : le nombre d'agents ne corrige ni l'identité partagée ni le sur-privilège.",
        "Bonne réponse : identité non humaine dédiée, least privilege, jetons courts et journalisation attribuable — la gouvernance qui restaure accountability et révocation ciblée."
      ],
      "difficulte": 3
    },
    {
      "q": "Your company has just acquired a competitor. The business requires the acquired employees to reach group applications on day one, but the security team has no visibility into the target's IAM hygiene. As CISO, what should you do FIRST?",
      "choix": [
        "Assess the target’s IAM, then federate with contractual requirements",
        "Block all cross-company access until the integration program completes",
        "Create guest accounts in your directory for every acquired employee",
        "Merge both directories immediately to simplify administration"
      ],
      "reponse": 0,
      "explication": "En fusion-acquisition, on fédère avant de fusionner : après une évaluation des contrôles IAM de la cible, la fédération inter-entreprises donne l'accès exigé par le métier tout en maintenant une frontière de confiance, avec des exigences contractualisées (MFA, niveaux d'assurance, répercussion immédiate des départs). Fusionner des annuaires à l'hygiène inconnue importe les compromissions potentielles ; les comptes invités en masse créent une population sans cycle de vie rattaché à la source RH de la cible ; bloquer tout accès sacrifie l'objectif business que le RSSI doit servir.",
      "pourquoi": [
        "Bonne réponse : évaluer puis fédérer sous exigences contractualisées — l'accès jour 1 avec une frontière de confiance maîtrisée, l'arbitrage attendu d'un CISO.",
        "Techniquement le plus sûr mais inacceptable : bloquer l'accès sacrifie l'objectif business de l'acquisition au lieu de gérer le risque.",
        "Techniquement faisable mais contextuellement faux : des milliers de comptes invités sans lien avec la source RH de la cible garantissent des comptes orphelins.",
        "Hors phase et dangereux : fusionner avant d'évaluer importe les compromissions potentielles de la cible au cœur du groupe."
      ],
      "difficulte": 3
    },
    {
      "q": "An online bank rolled out passkeys. Months later, thousands of customers who lost their devices regain access through a simple emailed recovery link. Which risk should the CISO address FIRST?",
      "choix": [
        "Customer dissatisfaction caused by repeated loss of access",
        "The email-based recovery path, which lowers assurance to the mailbox’s strength",
        "Passkey synchronization through consumer cloud accounts outside the bank's control",
        "Passkey incompatibility with older browsers used by some customers"
      ],
      "reponse": 1,
      "explication": "La chaîne d'authentification vaut son maillon le plus faible : si un lien e-mail suffit à déclencher la récupération et à enregistrer une nouvelle passkey, un attaquant contourne toute la résistance au phishing de WebAuthn en attaquant la boîte mail — les attaques se déplacent vers la récupération. Le parcours doit être durci (vérification proportionnée, signaux de risque, délais, notifications multi-canaux). L'insatisfaction client est un symptôme, pas le risque prioritaire ; la synchronisation cloud est un vrai sujet d'assurance mais secondaire ; la compatibilité navigateur est un problème de support.",
      "pourquoi": [
        "Vrai mais pas prioritaire pour un CISO : l'insatisfaction est un symptôme business, pas le risque de sécurité à traiter d'abord.",
        "Bonne réponse : la récupération par e-mail est le maillon faible — elle permet à un attaquant d'enregistrer sa propre passkey et annule la résistance au phishing.",
        "Techniquement vrai mais secondaire : l'assurance des passkeys synchronisées pèse peu face à une récupération triviale par simple lien e-mail.",
        "Réponse de technicien : la compatibilité des navigateurs relève du support, pas du risque prioritaire."
      ],
      "difficulte": 3
    }
  ],
  "flashcards": [
    {
      "recto": "IAAA",
      "verso": "Identification (déclarer une identité), Authentication (la prouver), Authorization (définir les droits), Accountability (répondre de ses actions grâce à l'audit). L'accountability est le principe même du contrôle d'accès."
    },
    {
      "recto": "Les trois facteurs principaux d'authentification",
      "verso": "Type 1 : something you know (mot de passe, PIN). Type 2 : something you have (smart card, token). Type 3 : something you are (biométrie). Facteurs contextuels : somewhere you are, something you do."
    },
    {
      "recto": "MFA (Multifactor Authentication)",
      "verso": "Authentification utilisant au moins deux facteurs de TYPES différents. Mot de passe + PIN = un seul facteur (deux connaissances) ; mot de passe + token TOTP = vrai MFA."
    },
    {
      "recto": "FRR (False Rejection Rate)",
      "verso": "Erreur de Type 1 : probabilité de rejeter à tort un utilisateur légitime (être refoulé à sa propre porte). Exprimée en pourcentage."
    },
    {
      "recto": "FAR (False Acceptance Rate)",
      "verso": "Erreur de Type 2 : probabilité d'accepter à tort un imposteur (laisser entrer un inconnu). C'est l'erreur la plus dangereuse en environnement sensible."
    },
    {
      "recto": "CER (Crossover Error Rate)",
      "verso": "Point où FAR = FRR. Mesure de référence de la précision d'un système biométrique : plus le CER est bas, plus le système est précis."
    },
    {
      "recto": "HOTP vs TOTP",
      "verso": "HOTP : one-time password basé sur un compteur et une fonction HMAC. TOTP : ajoute un horodatage, le code n'est valide que 30 à 60 secondes (applications d'authentification). Le SMS comme second facteur est déprécié par NIST SP 800-63B."
    },
    {
      "recto": "FIDO2 / WebAuthn",
      "verso": "Standards d'authentification passwordless résistante au phishing. FIDO2 : spécifications de la FIDO Alliance remplaçant les mots de passe par des clés cryptographiques. WebAuthn : API web du W3C permettant au site (relying party) de dialoguer avec le navigateur."
    },
    {
      "recto": "Identity proofing",
      "verso": "AKA registration : confirmer qu'une personne est bien qui elle prétend être avant de créer le compte. En personne : passeport, permis. En ligne : Knowledge-Based Authentication (KBA) vérifiée auprès de sources faisant autorité."
    },
    {
      "recto": "Single Sign-On (SSO)",
      "verso": "Authentification unique donnant accès à plusieurs ressources sans se ré-authentifier. Avantages : moins de mots de passe, administration simplifiée. Risque : single point of compromise → protéger par MFA."
    },
    {
      "recto": "Kerberos — caractéristiques clés",
      "verso": "SSO le plus répandu en entreprise ; but premier : authentification ; cryptographie symétrique (AES) et tickets ; dépend de NTP (horodatage) ; port 88 (UDP, TCP pour gros tickets) ; utilisé par Active Directory."
    },
    {
      "recto": "KDC, AS, TGS, TGT",
      "verso": "KDC : tiers de confiance d'authentification. AS : vérifie l'authenticité et la fraîcheur des demandes. TGS : délivre les service tickets. TGT : ticket chiffré (clé symétrique, expiration, adresse IP) prouvant l'authentification, présenté pour obtenir les tickets."
    },
    {
      "recto": "SAML 2.0",
      "verso": "Standard ouvert XML maintenu par OASIS pour échanger authentification ET autorisation entre organisations fédérées (SSO navigateur). Entités : Principal, Service Provider, Identity Provider. Assertions : authentication, authorization, attribute."
    },
    {
      "recto": "OAuth 2.0 vs OpenID Connect (OIDC)",
      "verso": "OAuth 2.0 (RFC 6749, IETF) : framework d'AUTORISATION et de délégation d'accès. OIDC (OpenID Foundation) : couche d'AUTHENTIFICATION bâtie sur OAuth, RESTful/JSON, jetons JWT. Un jeu qui lit vos contacts = OAuth ; se connecter avec Google = OIDC."
    },
    {
      "recto": "RADIUS vs TACACS+",
      "verso": "RADIUS : UDP 1812/1813, ne chiffre que le mot de passe (RADIUS/TLS : TCP 2083). TACACS+ (Cisco, standard ouvert) : TCP 49, chiffre tout, sépare authentification/autorisation/accounting."
    },
    {
      "recto": "Diameter",
      "verso": "Successeur de RADIUS (« le diamètre vaut deux rayons ») : TCP/SCTP, sécurité IPsec ou TLS, attributs étendus, sessions complexes. NON rétrocompatible avec RADIUS."
    },
    {
      "recto": "DAC (Discretionary Access Control)",
      "verso": "Chaque objet a un propriétaire qui accorde ou refuse l'accès à sa discrétion via des ACL. Exemple : NTFS. Tous les autres modèles sont non-discrétionnaires (gérés centralement)."
    },
    {
      "recto": "MAC (Mandatory Access Control)",
      "verso": "Le système impose l'accès selon la politique : labels appliqués aux sujets ET aux objets (modèle lattice-based). Applique le need to know ; environnements hiérarchiques, compartimentés ou hybrides."
    },
    {
      "recto": "RBAC vs Rule-based",
      "verso": "RBAC : privilèges assignés à des rôles calqués sur les fonctions métier (non-discrétionnaire, faible charge d'administration). Rule-based : règles globales appliquées à tous les sujets, ex. ACL de pare-feu (restrictions/filtres)."
    },
    {
      "recto": "ABAC (Attribute-Based Access Control)",
      "verso": "Règles combinant attributs du sujet, de l'action, de la ressource et de l'environnement ; politiques en langage naturel formalisées avec XACML ; utilisé par les SDN. Plus flexible que le rule-based classique."
    },
    {
      "recto": "PDP vs PEP",
      "verso": "Policy Decision Point : évalue les demandes et DÉCIDE selon les règles prédéfinies. Policy Enforcement Point : gatekeeper qui reçoit la demande, la transmet au PDP, puis APPLIQUE la décision."
    },
    {
      "recto": "Privilege creep / Excessive privilege",
      "verso": "Privilege creep : accumulation de droits au fil des changements de poste. Excessive privilege : plus de droits que les tâches n'exigent. Violations du least privilege, détectées par les revues d'accès périodiques."
    },
    {
      "recto": "Kerberoasting / Pass-the-hash / Golden ticket",
      "verso": "Kerberoasting : demander des service tickets et casser hors ligne le mot de passe du compte de service. Pass-the-hash : rejouer un hash NTLM volé sans connaître le mot de passe. Golden ticket : forger des TGT après compromission du compte krbtgt."
    },
    {
      "recto": "Provisioning Just-In-Time (JIT)",
      "verso": "En fédération, création automatique du compte chez le fournisseur de service lors de la première connexion, sans intervention administrative ; utilise couramment SAML. Réduit la charge d'administration. (En PAM, JIT = privilèges élevés accordés temporairement au moment du besoin.)"
    },
    {
      "recto": "SCIM (System for Cross-domain Identity Management)",
      "verso": "Standard MODERNE de provisioning automatisé inter-domaines : API REST et format JSON pour créer, mettre à jour et supprimer les comptes entre l'annuaire et les applications SaaS. Complémentaire de SAML (SCIM = comptes, SAML = authentification)."
    },
    {
      "recto": "SPML (Service Provisioning Markup Language)",
      "verso": "Ancien standard de provisioning basé sur XML, ancêtre de SCIM. Jamais largement adopté, aujourd'hui considéré comme obsolète — remplacé par SCIM (REST/JSON) dans les environnements cloud."
    }
  ]
};
