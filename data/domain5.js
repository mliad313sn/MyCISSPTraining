// Domaine 5 — Gestion des identités et des accès (IAM)
// Généré pour MyCISSPTraining — respecte data/SCHEMA.md

window.CISSP_DATA = window.CISSP_DATA || { domains: {} };
window.CISSP_DATA.domains[5] = {
  id: 5,
  code: "D5",
  titre: "Gestion des identités et des accès (IAM)",
  titreEn: "Identity and Access Management",
  poids: "13%",
  couleur: "#118ab2",
  icone: "🔑",
  description:
    "Le Domaine 5 couvre l'attribution et la révocation des privilèges d'accès aux données et aux systèmes. " +
    "Vous y apprendrez le modèle IAAA, les facteurs d'authentification et le MFA, la biométrie, le SSO et la fédération d'identités " +
    "(Kerberos, SAML, OAuth 2.0, OIDC), les modèles d'autorisation, ainsi que le cycle de vie du provisioning des identités.",
  objectifs: [
    "5.1 Contrôler l'accès physique et logique aux actifs (informations, systèmes, appareils, installations, applications, services)",
    "5.2 Concevoir une stratégie d'identification et d'authentification (personnes, appareils et services) : IAAA, MFA, passwordless, gestion des sessions, identity proofing, fédération, credential management, SSO, Just-In-Time",
    "5.3 Mettre en œuvre l'identité fédérée avec un service tiers (on-premise, cloud, hybride)",
    "5.4 Implémenter et gérer les mécanismes d'autorisation : RBAC, rule-based, MAC, DAC, ABAC, risk-based, PDP/PEP",
    "5.5 Gérer le cycle de vie du provisioning des identités et des accès : revues de comptes, provisioning et deprovisioning, définition des rôles, escalade de privilèges, comptes de service",
    "5.6 Implémenter les systèmes d'authentification : SAML, OAuth/OIDC, Kerberos, RADIUS/TACACS+"
  ],

  lecons: [
    // ================================================================
    // LEÇON 1 — Contrôle d'accès aux actifs et modèle IAAA
    // ================================================================
    {
      id: "d5-l1",
      titre: "Contrôle d'accès aux actifs et modèle IAAA",
      duree: 10,
      slides: [
        {
          type: "intro",
          titre: "Bienvenue dans le Domaine 5",
          points: [
            "13 % de l'examen CISSP",
            "Accorder et révoquer les privilèges d'accès",
            "L'identité est le nouveau périmètre"
          ],
          narration:
            "Bienvenue dans le Domaine 5, consacré à la gestion des identités et des accès, ou IAM. Ce domaine représente environ treize pour cent de l'examen. Il traite d'une question centrale de la sécurité : qui a le droit d'accéder à quoi, et comment on accorde puis révoque ces droits. Retenez dès maintenant une idée forte : avec le cloud et la mobilité, l'identité est devenue le nouveau périmètre de sécurité."
        },
        {
          type: "standard",
          titre: "Les actifs à protéger",
          points: [
            "Informations et données (fichiers, bases de données)",
            "Systèmes et appareils (serveurs, routeurs, smartphones, BYOD)",
            "Installations physiques (facilities)",
            "Applications et services"
          ],
          narration:
            "Un actif, c'est tout ce qui a de la valeur pour l'organisation. Cela inclut les informations stockées dans des fichiers ou des bases de données, les systèmes qui fournissent des services, les appareils comme les routeurs, les ordinateurs portables ou les smartphones, y compris en mode BYOD, mais aussi les bâtiments et les applications. Le contrôle d'accès consiste à protéger tous ces actifs en n'autorisant que les sujets légitimes à y accéder."
        },
        {
          type: "standard",
          titre: "Contrôles d'accès physiques et logiques",
          points: [
            "Pas de sécurité sans sécurité physique",
            "Contrôles physiques : périmètre, environnement, locaux",
            "Contrôles logiques : authentification, autorisations, permissions",
            "S'appliquent on-premise comme dans le cloud"
          ],
          narration:
            "On distingue deux grandes familles de contrôles d'accès. Les contrôles physiques protègent le périmètre, l'environnement et les locaux. Les contrôles logiques sont des systèmes automatisés qui accordent ou refusent l'accès après vérification de l'identité : authentification, autorisation et permissions. Retenez ce principe d'examen : il n'y a pas de sécurité sans sécurité physique. Les meilleurs contrôles techniques ne servent à rien si n'importe qui peut entrer dans la salle serveur.",
          astuce: "💡 Conseil examen : si une question oppose contrôles techniques sophistiqués et absence de sécurité physique, la sécurité physique prime toujours."
        },
        {
          type: "standard",
          titre: "Sujets, objets et principes fondamentaux",
          points: [
            "Subject : entité active qui accède (utilisateur, processus)",
            "Object : entité passive accédée (fichier, base de données)",
            "Need to know, Least Privilege, Separation of Duties"
          ],
          narration:
            "Le vocabulaire est essentiel. Le sujet, ou subject, est l'entité active qui demande l'accès, comme un utilisateur ou un processus. L'objet est l'entité passive à laquelle on accède, par exemple un fichier. Trois principes gouvernent tout contrôle d'accès : le need to know, qui limite l'accès aux informations nécessaires ; le least privilege, qui limite les droits au strict minimum pour accomplir la tâche ; et la separation of duties, qui répartit les tâches sensibles entre plusieurs personnes."
        },
        {
          type: "schema",
          titre: "Le modèle IAAA",
          points: [
            "Identification : je déclare qui je suis",
            "Authentication : je le prouve",
            "Authorization : ce que j'ai le droit de faire",
            "Accountability : je réponds de mes actions"
          ],
          schema: {
            type: "flow",
            items: ["Identification", "Authentication", "Authorization", "Accountability"]
          },
          narration:
            "Le cœur du domaine, c'est le modèle IAAA. D'abord l'identification : le sujet déclare une identité, par exemple en saisissant un nom d'utilisateur. Ensuite l'authentification : il prouve cette identité, par exemple avec un mot de passe. Puis l'autorisation : le système détermine ce que cette identité prouvée a le droit de faire. Enfin l'accountability, la responsabilité : grâce à la journalisation et à l'audit, chaque action peut être attribuée à un individu. On parle aussi de services AAA, où le dernier A signifie accounting, mais le principe est identique."
        },
        {
          type: "standard",
          titre: "Accountability : le vrai but du contrôle d'accès",
          points: [
            "Auditing : journaux et pistes d'audit (audit trails)",
            "Identification + authentification + audit = accountability",
            "Encourage les bons comportements et la conformité"
          ],
          narration:
            "L'accountability mérite qu'on s'y attarde, car l'examen la considère comme le principe même du contrôle d'accès. L'audit enregistre qui a fait quoi et quand, dans des journaux qui forment une piste d'audit. Mais attention : les journaux seuls ne suffisent pas. C'est la combinaison d'une identification unique, d'une authentification solide et de l'audit qui permet de tenir chaque individu responsable de ses actions. C'est aussi pour cela que chaque sujet doit avoir une identité unique, jamais de compte partagé."
        },
        {
          type: "standard",
          titre: "Identity proofing et enregistrement",
          points: [
            "Registration : vérifier que la personne est bien qui elle prétend être",
            "En personne : passeport, permis de conduire",
            "En ligne : Knowledge-Based Authentication (KBA)",
            "Cognitive passwords : questions de sécurité, souvent faibles"
          ],
          narration:
            "Avant même de créer un compte, il faut s'assurer que la personne est bien celle qu'elle prétend être : c'est l'identity proofing, ou enregistrement. En personne, on vérifie des documents officiels comme un passeport. En ligne, on utilise souvent la knowledge-based authentication : on pose des questions dont les réponses sont vérifiées auprès de sources faisant autorité, comme le montant d'un crédit immobilier. Attention aux cognitive passwords, ces questions de sécurité du type nom de votre premier animal : les réponses se trouvent souvent sur les réseaux sociaux."
        },
        {
          type: "standard",
          titre: "Gestion des sessions",
          points: [
            "Une session naît d'une identification, authentification et autorisation réussies",
            "Time-out après inactivité, écrans de veille avec ré-authentification",
            "Limitation des connexions simultanées et plages horaires",
            "Protège contre le session hijacking"
          ],
          narration:
            "Une fois l'utilisateur authentifié et autorisé, une session est créée. La gestion des sessions vise à empêcher qu'une session laissée sans surveillance soit détournée. Les stratégies classiques incluent l'expiration après une période d'inactivité, les écrans de veille exigeant une ré-authentification, l'interdiction des connexions simultanées avec le même identifiant et la limitation des horaires d'accès. Terminer les sessions inactives et ré-authentifier régulièrement aide à prévenir le détournement de session. L'OWASP publie des cheat sheets très utiles sur ce sujet pour les développeurs."
        },
        {
          type: "question",
          titre: "Contrôle de connaissances",
          points: [],
          narration:
            "Vérifions que le modèle IAAA est bien en place. Prenez le temps de réfléchir avant de répondre.",
          q: "Un utilisateur saisit son nom d'utilisateur puis son mot de passe. Que représente la saisie du nom d'utilisateur ?",
          choix: [
            "L'identification",
            "L'authentification",
            "L'autorisation",
            "L'accountability"
          ],
          reponse: 0,
          explication:
            "Saisir un nom d'utilisateur revient à déclarer une identité : c'est l'identification. Le mot de passe qui suit sert à prouver cette identité : c'est l'authentification. L'autorisation intervient après, pour définir les droits, et l'accountability repose sur la journalisation des actions."
        },
        {
          type: "resume",
          titre: "Résumé de la leçon",
          points: [
            "Les actifs incluent informations, systèmes, appareils, installations, applications et services",
            "Pas de sécurité sans sécurité physique ; l'identité est le nouveau périmètre",
            "IAAA : Identification, Authentication, Authorization, Accountability",
            "Need to know, least privilege et separation of duties encadrent tout accès",
            "Identity proofing avant la création du compte, gestion des sessions après"
          ],
          narration:
            "Récapitulons. Le contrôle d'accès protège tous les actifs de l'organisation, du fichier au bâtiment, grâce à des contrôles physiques et logiques. Le modèle IAAA structure le processus : on s'identifie, on prouve son identité, on reçoit des autorisations, et l'audit garantit l'accountability, qui est le but ultime du contrôle d'accès. Avant tout cela, l'identity proofing vérifie l'identité réelle de la personne, et après, la gestion des sessions protège l'accès en cours. Dans la prochaine leçon, nous verrons comment prouver son identité avec les facteurs d'authentification."
        }
      ]
    },

    // ================================================================
    // LEÇON 2 — Facteurs d'authentification, MFA, biométrie et mots de passe
    // ================================================================
    {
      id: "d5-l2",
      titre: "Facteurs d'authentification, MFA et biométrie",
      duree: 12,
      slides: [
        {
          type: "intro",
          titre: "Prouver son identité",
          points: [
            "Les trois facteurs principaux d'authentification",
            "MFA, tokens, passwordless",
            "Biométrie : FAR, FRR, CER"
          ],
          narration:
            "Dans cette leçon, nous répondons à une question simple : comment un sujet prouve-t-il son identité ? Nous verrons les trois facteurs principaux d'authentification, la manière de les combiner en authentification multifacteur, les tokens matériels et logiciels, l'authentification sans mot de passe, et enfin la biométrie avec ses fameuses métriques FAR, FRR et CER que l'examen adore."
        },
        {
          type: "standard",
          titre: "Les facteurs d'authentification",
          points: [
            "Type 1 — Something you know : mot de passe, PIN, passphrase",
            "Type 2 — Something you have : smart card, token, badge",
            "Type 3 — Something you are : biométrie",
            "Compléments : somewhere you are, something you do"
          ],
          narration:
            "Il existe trois facteurs principaux. Le type un, something you know, l'authentification par la connaissance : mots de passe, phrases de passe, codes PIN. Le type deux, something you have, l'authentification par la possession : carte à puce, token, badge. Le type trois, something you are, l'authentification par une caractéristique : la biométrie. On ajoute parfois deux facteurs contextuels : somewhere you are, comme une adresse IP, et something you do, comme une signature ou un schéma de déverrouillage. Ces deux derniers sont considérés comme complémentaires plutôt que principaux."
        },
        {
          type: "standard",
          titre: "MFA : la vraie définition",
          points: [
            "MFA = au moins deux facteurs de TYPES différents",
            "Mot de passe + PIN = un seul facteur (deux connaissances)",
            "Mot de passe + token TOTP = vrai MFA",
            "NIST AAL1 à AAL3 : robustesse croissante de l'authentification"
          ],
          narration:
            "L'authentification multifacteur exige au moins deux facteurs de types différents. C'est un piège classique de l'examen : demander un mot de passe et un code PIN n'est pas du MFA, car ce sont deux éléments de connaissance. En revanche, un mot de passe combiné à un token constitue un vrai MFA. Le NIST définit d'ailleurs des niveaux d'assurance de l'authentification, les Authenticator Assurance Levels : AAL1 accepte un facteur unique, AAL2 exige le MFA avec résistance au rejeu, et AAL3 exige un MFA matériel résistant au phishing et à l'usurpation du vérifieur.",
          astuce: "💡 Conseil examen : deux éléments du même type ne font jamais du MFA. Cherchez toujours des types différents."
        },
        {
          type: "standard",
          titre: "Tokens et mots de passe à usage unique",
          points: [
            "Token synchrone : même code généré toutes les 30 à 60 secondes (TOTP)",
            "Token asynchrone : défi-réponse, plus complexe mais plus sûr",
            "HOTP : basé sur un compteur et HMAC ; TOTP : basé sur le temps",
            "SMS déprécié par NIST SP 800-63B ; smart card avec puce contre memory card à piste magnétique"
          ],
          narration:
            "Les tokens illustrent le facteur de possession. Un token synchrone génère le même mot de passe à usage unique que le serveur, toutes les trente à soixante secondes : c'est le principe du TOTP, utilisé par les applications d'authentification sur smartphone. Un token asynchrone fonctionne en mode défi-réponse : plus coûteux, mais plus sûr. Le standard HOTP repose sur un compteur et une fonction HMAC, tandis que TOTP y ajoute l'horodatage. Notez que le NIST déprécie l'envoi de codes par SMS pour les agences fédérales, à cause de ses vulnérabilités. Enfin, distinguez la smart card, dotée d'une puce qui génère des données uniques à chaque transaction, de la simple memory card à piste magnétique qui rejoue toujours les mêmes données."
        },
        {
          type: "standard",
          titre: "Passwordless : FIDO2 et WebAuthn",
          points: [
            "Authentification sans mot de passe par clés cryptographiques",
            "FIDO2 : spécifications de la FIDO Alliance",
            "WebAuthn : API web du W3C, résistante au phishing",
            "Avantages : sécurité, confort ; inconvénients : dépendance à l'appareil, coûts"
          ],
          narration:
            "L'authentification passwordless supprime le mot de passe au profit de la biométrie, de tokens de sécurité ou de l'appareil mobile. Les standards FIDO2 et WebAuthn en sont les piliers : FIDO2 est l'ensemble de spécifications de la FIDO Alliance qui remplace les mots de passe par des clés cryptographiques, et WebAuthn est l'API web du W3C qui permet aux sites de dialoguer directement avec le navigateur pour une authentification résistante au phishing. Les avantages sont une sécurité accrue et un meilleur confort utilisateur. Les inconvénients : la dépendance à l'appareil, les questions de fiabilité et de vie privée de la biométrie, et les coûts de mise en œuvre."
        },
        {
          type: "standard",
          titre: "Biométrie : FAR, FRR et CER",
          points: [
            "FRR (Type 1) : rejeter à tort un utilisateur légitime",
            "FAR (Type 2) : accepter à tort un imposteur",
            "CER : point où FAR = FRR ; plus le CER est bas, plus le système est précis",
            "Template : représentation mathématique à sens unique des traits biométriques"
          ],
          narration:
            "La biométrie compare une mesure du corps, empreinte digitale, iris, géométrie du visage, à un template, c'est-à-dire une représentation mathématique à sens unique enregistrée au préalable. Deux erreurs sont possibles. L'erreur de type un, le false rejection rate, rejette à tort un utilisateur légitime : c'est comme être refoulé devant sa propre porte. L'erreur de type deux, le false acceptance rate, accepte un imposteur : c'est laisser entrer un inconnu, et c'est la plus dangereuse. Le crossover error rate est le point où ces deux taux sont égaux : plus le CER est bas, plus le système biométrique est précis.",
          astuce: "💡 Moyen mnémotechnique : Type 1 = rejeté à sa propre porte (FRR), Type 2 = un inconnu entre (FAR). Pour comparer deux systèmes biométriques, regardez le CER."
        },
        {
          type: "schema",
          titre: "Régler la sensibilité d'un capteur biométrique",
          points: [
            "Sensibilité haute : FRR augmente, FAR baisse",
            "Sensibilité basse : FAR augmente, FRR baisse",
            "Le CER est le point d'équilibre optimal"
          ],
          schema: {
            type: "flow",
            items: ["Sensibilité basse → FAR élevé", "Point d'équilibre → CER", "Sensibilité haute → FRR élevé"]
          },
          narration:
            "Imaginez le curseur de sensibilité d'un lecteur d'empreintes. Si vous le montez, le capteur devient exigeant : il rejette davantage d'utilisateurs légitimes, le FRR grimpe, mais les imposteurs passent moins, le FAR baisse. Si vous le baissez, c'est l'inverse. Le point où les deux courbes se croisent est le crossover error rate. C'est le point de fonctionnement optimal lorsque les deux types d'erreurs ont des impacts équivalents. Dans un environnement très sensible, on acceptera un FRR plus élevé pour minimiser le FAR."
        },
        {
          type: "standard",
          titre: "Mots de passe : la forme la plus faible",
          points: [
            "Le mot de passe est la forme d'authentification la plus faible",
            "Politiques : complexité, historique, longueur",
            "Attaques : brute force, dictionnaire, credential stuffing, phishing, rainbow tables",
            "Password vault : coffre chiffré protégé par un mot de passe maître"
          ],
          narration:
            "Le mot de passe reste la forme d'authentification la plus faible, mais aussi la plus répandue. Les politiques de mots de passe renforcent la sécurité en imposant longueur, complexité et historique. Les attaques sont nombreuses : force brute, dictionnaire, credential stuffing qui rejoue des mots de passe volés ailleurs, phishing, ou rainbow tables contre les hachages. Les gestionnaires de mots de passe, ou password vaults, stockent les identifiants dans une base chiffrée protégée par un mot de passe maître : ils permettent d'avoir un mot de passe fort et unique par système. Le revers de la médaille : si le mot de passe maître est compromis, tout l'est."
        },
        {
          type: "question",
          titre: "Contrôle de connaissances",
          points: [],
          narration:
            "Une question de style examen sur la biométrie. Réfléchissez à l'impact de chaque type d'erreur.",
          q: "Quelle métrique est la MEILLEURE pour comparer la précision globale de deux systèmes biométriques ?",
          choix: [
            "Le False Acceptance Rate (FAR)",
            "Le False Rejection Rate (FRR)",
            "Le Crossover Error Rate (CER)",
            "Le débit d'enrôlement (throughput)"
          ],
          reponse: 2,
          explication:
            "Le CER, point où FAR et FRR sont égaux, mesure la précision globale d'un système biométrique : plus il est bas, plus le système est précis. FAR et FRR pris isolément dépendent du réglage de sensibilité et ne permettent pas une comparaison objective. Le débit concerne la performance, pas la précision."
        },
        {
          type: "resume",
          titre: "Résumé de la leçon",
          points: [
            "Trois facteurs : connaissance, possession, caractéristique (+ localisation et comportement)",
            "MFA = types différents ; mot de passe + PIN n'est pas du MFA",
            "HOTP/TOTP, tokens synchrones et asynchrones ; SMS déprécié par le NIST",
            "FIDO2/WebAuthn : passwordless résistant au phishing",
            "FRR (Type 1), FAR (Type 2), CER bas = système précis ; le mot de passe reste le maillon faible"
          ],
          narration:
            "Retenez l'essentiel. Trois facteurs principaux : ce que je sais, ce que je possède, ce que je suis. Le MFA exige des types différents. Les tokens génèrent des mots de passe à usage unique, en mode synchrone avec TOTP ou asynchrone par défi-réponse, et le NIST déprécie le SMS. FIDO2 et WebAuthn ouvrent la voie du passwordless résistant au phishing. En biométrie, l'erreur de type un rejette un légitime, l'erreur de type deux accepte un imposteur, et le CER mesure la précision. Prochaine étape : ne s'authentifier qu'une seule fois grâce au SSO et à la fédération."
        }
      ]
    },

    // ================================================================
    // LEÇON 3 — SSO et fédération : Kerberos, SAML, OAuth, OIDC
    // ================================================================
    {
      id: "d5-l3",
      titre: "SSO et fédération : Kerberos, SAML, OAuth 2.0 et OIDC",
      duree: 14,
      slides: [
        {
          type: "intro",
          titre: "S'authentifier une fois, accéder à tout",
          points: [
            "Single Sign-On (SSO) et ses risques",
            "Kerberos en détail : KDC, TGT, tickets",
            "Fédération : SAML, OAuth 2.0, OIDC",
            "AAA réseau : RADIUS, TACACS+, Diameter"
          ],
          narration:
            "Cette leçon est l'une des plus importantes du domaine. Nous allons voir comment un utilisateur peut s'authentifier une seule fois et accéder à de multiples ressources, d'abord au sein de l'organisation avec le SSO et Kerberos, puis entre organisations grâce à la fédération d'identités avec SAML, OAuth deux point zéro et OpenID Connect. Nous terminerons avec les protocoles AAA réseau : RADIUS, TACACS plus et Diameter. Ces protocoles tombent très souvent à l'examen."
        },
        {
          type: "standard",
          titre: "Single Sign-On : avantages et risque",
          points: [
            "Une seule authentification pour accéder à plusieurs ressources",
            "Moins de mots de passe à retenir, administration simplifiée",
            "Risque : single point of compromise → protéger le SSO par MFA",
            "Repose souvent sur un directory service (LDAP)"
          ],
          narration:
            "Le single sign-on est une technique centralisée qui permet à un sujet de s'authentifier une seule fois puis d'accéder à plusieurs ressources sans se ré-authentifier. Les avantages sont clairs : moins de mots de passe à mémoriser, donc moins de mots de passe notés sur des post-it, et une administration allégée. Mais le SSO crée un point de compromission unique : si l'identifiant SSO est volé, toutes les ressources liées sont exposées. C'est pourquoi il faut impérativement protéger le compte SSO par du MFA. En interne, le SSO s'appuie souvent sur un service d'annuaire centralisé, généralement basé sur LDAP."
        },
        {
          type: "standard",
          titre: "Kerberos : les fondamentaux",
          points: [
            "SSO le plus répandu en entreprise ; objectif premier : l'authentification",
            "Cryptographie symétrique (AES) et tickets",
            "Dépend de NTP pour la synchronisation horaire",
            "Port 88 (UDP, TCP pour les gros tickets) ; utilisé par Active Directory"
          ],
          narration:
            "Kerberos est la méthode de SSO la plus répandue au sein des organisations, notamment via Microsoft Active Directory. Son objectif premier est l'authentification. Kerberos version cinq utilise la cryptographie symétrique, avec AES, et un système de tickets pour prouver l'identité, tout en protégeant le trafic d'authentification contre l'écoute et le rejeu. Deux détails d'examen : Kerberos dépend de NTP, car les tickets sont horodatés et une dérive d'horloge fait échouer l'authentification, et il communique sur le port quatre-vingt-huit, en UDP par défaut, en TCP pour les tickets volumineux."
        },
        {
          type: "standard",
          titre: "Les acteurs de Kerberos",
          points: [
            "KDC : tiers de confiance qui fournit le service d'authentification",
            "AS (Authentication Service) : vérifie l'authenticité des demandes",
            "TGS (Ticket-Granting Service) : délivre les tickets de service",
            "TGT : ticket chiffré (clé symétrique, expiration, adresse IP) ; principal et realm"
          ],
          narration:
            "Kerberos repose sur un tiers de confiance, le key distribution center ou KDC, qui héberge deux fonctions : l'authentication service, qui vérifie ou rejette l'authenticité et la fraîcheur des demandes, et le ticket-granting service, qui délivre les tickets d'accès aux ressources. Le ticket-granting ticket, ou TGT, prouve que le sujet s'est authentifié : il est chiffré et contient une clé symétrique, une durée d'expiration et l'adresse IP de l'utilisateur. Un principal est toute entité pouvant demander un ticket, généralement un utilisateur, et le realm est la zone logique, comme un domaine, gouvernée par Kerberos."
        },
        {
          type: "schema",
          titre: "Flux de connexion Kerberos",
          points: [
            "Le mot de passe n'est jamais transmis sur le réseau",
            "La clé de session est chiffrée avec un hash du mot de passe",
            "Le TGT sert ensuite à demander des service tickets"
          ],
          schema: {
            type: "flow",
            items: [
              "1. L'utilisateur saisit ses identifiants",
              "2. Le client envoie le nom chiffré au KDC",
              "3. Le KDC génère clé de session + TGT horodaté",
              "4. Le client déchiffre avec le hash du mot de passe",
              "5. TGT → TGS : demande de service ticket",
              "6. Le service ticket est présenté au serveur cible"
            ]
          },
          narration:
            "Suivons le flux. L'utilisateur saisit son nom et son mot de passe. Le client transmet le nom d'utilisateur au KDC, qui le vérifie dans sa base, génère une clé de session symétrique et la chiffre avec un hash du mot de passe de l'utilisateur, puis renvoie cette clé accompagnée d'un TGT horodaté. Le client ne peut déchiffrer la clé que s'il connaît le bon mot de passe : ainsi, le mot de passe n'est jamais transmis sur le réseau, mais il est bien vérifié. Ensuite, pour accéder à une ressource, le client présente son TGT au KDC, qui vérifie les privilèges et délivre un service ticket. Le client présente ce ticket au serveur hébergeant la ressource, qui en vérifie la validité, puis ouvre la session."
        },
        {
          type: "standard",
          titre: "Fédération d'identités (FIM)",
          points: [
            "Lie l'identité d'un utilisateur entre plusieurs organisations",
            "Acteurs : principal (utilisateur), Identity Provider (IdP), Relying Party / Service Provider",
            "SSO = une organisation ; FIM = plusieurs organisations en relation de confiance",
            "Déploiement on-premise (contrôle maximal), cloud (IDaaS), ou hybride (le plus complexe)"
          ],
          narration:
            "La fédération d'identités, ou federated identity management, étend le SSO au-delà des frontières de l'organisation. Plusieurs organisations forment une fédération et acceptent de partager des informations d'identité : l'utilisateur s'authentifie une fois dans sa propre organisation et accède aux ressources des partenaires. Trois acteurs interviennent : le principal, c'est-à-dire l'utilisateur, l'identity provider qui détient l'identité et réalise l'authentification, et le relying party, aussi appelé service provider, qui fournit le service. La fédération peut être hébergée on-premise, ce qui donne le plus de contrôle, dans le cloud via un service IDaaS, ou en hybride, le scénario le plus complexe à gérer. Le provisioning just-in-time, souvent via SAML, crée automatiquement les comptes chez le partenaire lors de la première connexion."
        },
        {
          type: "standard",
          titre: "SAML : le standard de la fédération",
          points: [
            "Standard ouvert basé sur XML, maintenu par OASIS",
            "Échange d'informations d'authentification ET d'autorisation",
            "Trois entités : Principal, Service Provider, Identity Provider",
            "Trois assertions : Authentication, Authorization, Attribute"
          ],
          narration:
            "Le security assertion markup language, SAML, est un standard ouvert basé sur XML et maintenu par l'OASIS. Il sert à échanger des informations d'authentification et d'autorisation entre organisations fédérées, et fournit le SSO pour les accès par navigateur, notamment vers les services cloud. SAML deux point zéro définit trois entités : le principal, c'est-à-dire l'utilisateur, le service provider qui rend le service, et l'identity provider qui détient les informations d'identité. L'IdP émet trois types d'assertions : l'assertion d'authentification, qui prouve que l'utilisateur a fourni les bons identifiants ; l'assertion d'autorisation, qui indique si l'accès est accordé ou refusé ; et l'assertion d'attribut, qui transporte toute information complémentaire sur l'utilisateur."
        },
        {
          type: "standard",
          titre: "OAuth 2.0 et OpenID Connect",
          points: [
            "OAuth 2.0 : framework d'AUTORISATION (RFC 6749, IETF) — délégation d'accès",
            "OIDC : couche d'AUTHENTIFICATION au-dessus d'OAuth 2.0 (OpenID Foundation)",
            "OIDC : RESTful, JSON, JSON Web Tokens (ID token)",
            "Exemple : un jeu qui lit vos contacts = OAuth ; se connecter avec Google = OIDC"
          ],
          narration:
            "Deux protocoles à ne jamais confondre. OAuth deux point zéro est un framework d'autorisation, décrit dans la RFC six mille sept cent quarante-neuf de l'IETF : il permet à une application tierce d'obtenir un accès limité à un service, par délégation, sans jamais partager le mot de passe. OpenID Connect, maintenu par l'OpenID Foundation, est une couche d'authentification construite au-dessus d'OAuth : c'est un protocole RESTful basé sur JSON qui utilise des JSON web tokens comme jetons d'identité. Un moyen simple de les distinguer : quand un jeu mobile retrouve automatiquement vos amis depuis un réseau social, c'est OAuth, de l'autorisation déléguée. Quand vous vous connectez au jeu avec votre compte de réseau social, c'est OIDC, de l'authentification.",
          astuce: "💡 Conseil examen : OAuth = autorisation, OpenID/OIDC = authentification. SAML fait les deux, en XML ; OIDC fait les deux, en JSON."
        },
        {
          type: "standard",
          titre: "RADIUS, TACACS+ et Diameter",
          points: [
            "RADIUS : AAA centralisé pour l'accès distant ; UDP 1812/1813, ne chiffre que le mot de passe",
            "RADIUS/TLS (RadSec) : TCP 2083 pour chiffrer toute la session",
            "TACACS+ (Cisco, standard ouvert) : TCP 49, sépare AAA, chiffre tout",
            "Diameter : successeur de RADIUS, TCP/SCTP avec IPsec ou TLS, non rétrocompatible"
          ],
          narration:
            "Pour l'accès réseau distant, comme les VPN, on utilise des protocoles AAA centralisés. RADIUS centralise l'authentification : le serveur d'accès réseau agit comme client RADIUS et relaie les identifiants au serveur RADIUS. Par défaut, RADIUS fonctionne en UDP, ports mille huit cent douze et mille huit cent treize, et ne chiffre que le mot de passe ; la variante RADIUS sur TLS, en TCP port deux mille quatre-vingt-trois, chiffre toute la session. TACACS plus, développé par Cisco puis publié en standard ouvert, sépare l'authentification, l'autorisation et l'accounting, chiffre l'intégralité des échanges et utilise TCP port quarante-neuf, donc plus fiable. Diameter, conçu pour dépasser RADIUS, utilise TCP ou SCTP avec IPsec ou TLS, gère des sessions complexes, mais n'est pas compatible avec RADIUS."
        },
        {
          type: "question",
          titre: "Contrôle de connaissances",
          points: [],
          narration:
            "Question de style examen sur la fédération. Attention à la distinction entre autorisation et authentification.",
          q: "Une application mobile de retouche photo demande l'accès à vos albums stockés chez un fournisseur cloud, sans jamais connaître votre mot de passe. Quel protocole est le PLUS probablement utilisé ?",
          choix: [
            "SAML 2.0",
            "OAuth 2.0",
            "Kerberos",
            "TACACS+"
          ],
          reponse: 1,
          explication:
            "Il s'agit d'une délégation d'autorisation : l'application tierce obtient un accès limité à une ressource au nom de son propriétaire, sans partage d'identifiants — c'est exactement le rôle d'OAuth 2.0. SAML sert surtout au SSO navigateur entre organisations fédérées, Kerberos est le SSO interne à base de tickets, et TACACS+ est un protocole AAA pour l'administration d'équipements réseau."
        },
        {
          type: "resume",
          titre: "Résumé de la leçon",
          points: [
            "SSO : une authentification, plusieurs ressources ; point de compromission unique → MFA",
            "Kerberos : KDC (AS + TGS), TGT, tickets, cryptographie symétrique AES, NTP, port 88",
            "SAML (XML, OASIS) : assertions authentication, authorization, attribute",
            "OAuth 2.0 = autorisation ; OIDC = authentification en JSON/JWT",
            "RADIUS (UDP, mot de passe seul chiffré), TACACS+ (TCP 49, tout chiffré, AAA séparés), Diameter"
          ],
          narration:
            "Faisons le point. Le SSO simplifie la vie des utilisateurs mais crée un point de compromission unique qu'il faut protéger par MFA. Kerberos, le SSO d'entreprise par excellence, s'appuie sur le KDC, les TGT et les tickets de service, avec de la cryptographie symétrique et une dépendance forte à la synchronisation horaire. Pour la fédération, SAML échange des assertions XML entre identity provider et service provider, OAuth délègue l'autorisation et OIDC apporte l'authentification en JSON. Enfin, RADIUS, TACACS plus et Diameter fournissent les services AAA pour l'accès réseau. Prochaine leçon : une fois authentifié, que puis-je faire ? Place aux modèles d'autorisation."
        }
      ]
    },

    // ================================================================
    // LEÇON 4 — Modèles et mécanismes d'autorisation
    // ================================================================
    {
      id: "d5-l4",
      titre: "Modèles d'autorisation : DAC, MAC, RBAC, ABAC",
      duree: 11,
      slides: [
        {
          type: "intro",
          titre: "Qui décide de l'accès ?",
          points: [
            "Mécanismes d'autorisation : implicit deny, ACL, capability tables",
            "DAC, MAC, RBAC, rule-based, ABAC, risk-based",
            "PDP et PEP : l'application des politiques"
          ],
          narration:
            "Après l'authentification vient l'autorisation : le système vérifie que l'activité demandée est permise au regard des privilèges de l'identité prouvée. Dans cette leçon, nous passons en revue les mécanismes d'autorisation, puis les grands modèles de contrôle d'accès que sont DAC, MAC, RBAC, rule-based, ABAC et risk-based. À l'examen, on vous demandera d'identifier le modèle à partir de sa caractéristique clé : soyez attentifs à ces indices."
        },
        {
          type: "standard",
          titre: "Mécanismes d'autorisation de base",
          points: [
            "Implicit deny : tout ce qui n'est pas explicitement permis est refusé",
            "ACL : liste centrée sur l'objet ; capability table : centrée sur le sujet",
            "Constrained interface : limiter ce que l'utilisateur voit et peut faire",
            "Content-dependent et context-dependent controls"
          ],
          narration:
            "Quelques mécanismes fondamentaux. L'implicit deny pose que tout accès non explicitement accordé est refusé : c'est la base des pare-feu et des systèmes de permissions. L'access control list est attachée à un objet et liste qui peut y accéder, tandis que la capability table est attachée à un sujet et liste ce à quoi il peut accéder. Les interfaces contraintes restreignent ce que l'utilisateur peut voir ou faire, par exemple des menus grisés. Le contrôle content-dependent examine le contenu accédé, comme un employé qui peut consulter la base RH mais pas la fiche du directeur. Le contrôle context-dependent examine le contexte, comme l'heure de la demande."
        },
        {
          type: "standard",
          titre: "DAC : Discretionary Access Control",
          points: [
            "Caractéristique clé : chaque objet a un propriétaire qui décide des accès",
            "Le propriétaire accorde ou refuse à sa discrétion via des ACL",
            "Exemple : NTFS sous Windows",
            "Tous les autres modèles sont non-discrétionnaires (gérés centralement)"
          ],
          narration:
            "Dans le modèle discrétionnaire, chaque objet a un propriétaire, et ce propriétaire décide, à sa discrétion, qui accède à son objet. Vous créez un fichier, vous en êtes le propriétaire, vous accordez les permissions via une access control list. C'est le modèle du système de fichiers NTFS de Windows. Souplesse maximale, mais gouvernance faible : les décisions sont dispersées entre tous les propriétaires. Tous les autres modèles sont dits non-discrétionnaires, car c'est une autorité centrale, l'administrateur, qui gère les accès et non le propriétaire de l'actif."
        },
        {
          type: "standard",
          titre: "MAC : Mandatory Access Control",
          points: [
            "Caractéristique clé : labels appliqués aux sujets ET aux objets",
            "Le système impose l'accès selon la politique, pas l'utilisateur",
            "Modèle lattice-based ; environnements hiérarchiques, compartimentés ou hybrides",
            "Applique le need to know ; typique des environnements militaires"
          ],
          narration:
            "Le modèle mandatory access control est le plus rigide : c'est le système lui-même qui impose les contrôles conformément à la politique de sécurité de l'organisation. Sa caractéristique clé est l'usage d'étiquettes, ou labels, appliquées à la fois aux sujets et aux objets : un sujet doit porter un label correspondant, par exemple top secret, pour accéder à un document top secret. Représenté en tableau, le modèle ressemble à un treillis, d'où le nom de lattice-based model. Le MAC applique strictement le need to know et supporte des environnements hiérarchiques, compartimentés, ou hybrides combinant les deux. C'est le modèle typique des environnements militaires et gouvernementaux."
        },
        {
          type: "standard",
          titre: "RBAC et Rule-Based Access Control",
          points: [
            "RBAC : privilèges assignés à des rôles calqués sur les fonctions métier",
            "Ajouter/retirer un utilisateur d'un rôle suffit ; faible charge d'administration",
            "Non-discrétionnaire ; utilisé par les groupes Windows",
            "Rule-based : règles globales appliquées à tous les sujets (ex. ACL de pare-feu)"
          ],
          narration:
            "Le role-based access control attribue les privilèges non pas aux individus, mais à des rôles définis par les fonctions métier, comme analyste helpdesk niveau un. On place le compte de l'utilisateur dans le rôle, il hérite des privilèges ; on l'en retire, il les perd. C'est un modèle non-discrétionnaire qui réduit fortement la charge d'administration et limite le privilege creep, particulièrement adapté aux organisations à fort turnover. Ne confondez pas rôles et groupes : le rôle est centré sur la fonction, le groupe est une collection d'utilisateurs. Le modèle rule-based, lui, applique des règles globales identiques à tous les sujets : l'exemple classique est la liste de règles d'un pare-feu, où les règles sont parfois appelées restrictions ou filtres."
        },
        {
          type: "standard",
          titre: "ABAC et Risk-Based Access Control",
          points: [
            "ABAC : règles combinant attributs du sujet, de l'action, de la ressource et de l'environnement",
            "Politiques en langage naturel ; XACML ; utilisé par les SDN",
            "Risk-based : évalue la situation (localisation, MFA, appareil) avant d'accorder l'accès",
            "Peut s'appuyer sur du machine learning"
          ],
          narration:
            "L'attribute-based access control est une évolution avancée du modèle à règles : les règles combinent de multiples attributs concernant l'utilisateur, son action, la ressource cible et l'environnement. On peut écrire des politiques en langage presque naturel, comme autoriser les managers à accéder au WAN depuis un appareil mobile. Le langage XACML définit la syntaxe de ces politiques, et les réseaux définis par logiciel utilisent souvent l'ABAC. Le modèle risk-based va plus loin encore : il évalue l'environnement et la situation, la localisation de l'utilisateur, l'usage du MFA, l'état de l'appareil, et peut s'appuyer sur du machine learning pour comparer l'activité courante aux comportements passés, par exemple pour bloquer le trafic anormal d'un objet connecté infecté."
        },
        {
          type: "schema",
          titre: "PDP et PEP : appliquer la politique",
          points: [
            "PEP : le portier qui reçoit la demande et applique la décision",
            "PDP : le juge qui décide selon les règles prédéfinies"
          ],
          schema: {
            type: "flow",
            items: ["Sujet → demande d'accès", "PEP (gatekeeper)", "PDP (décision selon les règles)", "PEP applique : accès accordé ou refusé"]
          },
          narration:
            "L'application des politiques d'accès repose sur deux composants. Le policy enforcement point est le portier : il reçoit la demande d'accès et la transmet au policy decision point. Le PDP est le juge : il évalue la demande au regard des règles et des politiques prédéfinies, puis rend sa décision. Le PEP applique alors cette décision, en accordant ou refusant l'accès. Cette séparation entre décision et application est au cœur des architectures modernes, notamment du Zero Trust."
        },
        {
          type: "question",
          titre: "Contrôle de connaissances",
          points: [],
          narration:
            "Identifiez le modèle à partir de sa caractéristique clé. C'est exactement le réflexe attendu à l'examen.",
          q: "Un système applique des étiquettes de classification aux sujets et aux objets, et seul un sujet dont le label correspond peut accéder à l'objet. De quel modèle s'agit-il ?",
          choix: [
            "Discretionary Access Control (DAC)",
            "Mandatory Access Control (MAC)",
            "Role-Based Access Control (RBAC)",
            "Attribute-Based Access Control (ABAC)"
          ],
          reponse: 1,
          explication:
            "Les labels appliqués aux sujets et aux objets sont la caractéristique clé du MAC : le système impose l'accès selon la politique. Le DAC se reconnaît au propriétaire qui décide, le RBAC aux rôles calqués sur les fonctions, et l'ABAC aux règles combinant de multiples attributs."
        },
        {
          type: "resume",
          titre: "Résumé de la leçon",
          points: [
            "Implicit deny, ACL (objet), capability table (sujet), interfaces contraintes",
            "DAC : le propriétaire décide ; MAC : labels imposés par le système (lattice)",
            "RBAC : rôles métier ; rule-based : règles globales (pare-feu)",
            "ABAC : attributs multiples (XACML) ; risk-based : évaluation de la situation",
            "PEP applique, PDP décide"
          ],
          narration:
            "Résumons avec les caractéristiques clés, car c'est ainsi que l'examen vous interrogera. Propriétaire qui décide : DAC. Labels sur sujets et objets : MAC, le modèle en treillis. Rôles alignés sur les fonctions métier : RBAC. Règles globales appliquées à tous : rule-based. Règles à attributs multiples exprimées en XACML : ABAC. Évaluation dynamique de la situation et du risque : risk-based. Et pour appliquer tout cela, le PEP joue le portier tandis que le PDP rend les décisions. Il nous reste à gérer la vie des comptes eux-mêmes : c'est le cycle de vie du provisioning."
        }
      ]
    },

    // ================================================================
    // LEÇON 5 — Cycle de vie des identités, PAM et attaques sur l'IAM
    // ================================================================
    {
      id: "d5-l5",
      titre: "Cycle de vie des identités, PAM et attaques sur l'IAM",
      duree: 12,
      slides: [
        {
          type: "intro",
          titre: "De la création du compte à sa suppression",
          points: [
            "Provisioning, onboarding, transferts, deprovisioning",
            "Revues d'accès et lutte contre le privilege creep",
            "Privileged Access Management (PAM)",
            "Attaques : Kerberoasting, pass-the-hash, escalade de privilèges"
          ],
          narration:
            "Dernière leçon du domaine : le cycle de vie du provisioning des identités et des accès, c'est-à-dire la création, la gestion et la suppression des comptes. Sans ce cycle bien maîtrisé, impossible d'établir des identités fiables, d'authentifier, d'autoriser et de tracer. Nous verrons aussi la gestion des accès à privilèges, les revues de comptes, et les attaques qui ciblent directement l'IAM, comme le Kerberoasting et le pass-the-hash."
        },
        {
          type: "schema",
          titre: "Le cycle de vie identité et accès",
          points: [
            "Chaque étape conditionne la suivante",
            "Un compte oublié est une porte d'entrée pour l'attaquant"
          ],
          schema: {
            type: "cycle",
            items: ["Provisioning / Onboarding", "Gestion et revues d'accès", "Transferts et changements de rôle", "Deprovisioning / Offboarding"]
          },
          narration:
            "Visualisons le cycle. Tout commence par le provisioning et l'onboarding du nouvel arrivant. Vient ensuite la vie du compte : gestion courante et revues d'accès périodiques. Puis les changements : transferts, promotions, nouveaux rôles, qui exigent d'ajuster les privilèges. Enfin, le départ déclenche le deprovisioning et l'offboarding. Chaque étape négligée crée un risque : un compte dormant ou un ancien salarié qui garde ses accès sont des portes d'entrée idéales pour un attaquant."
        },
        {
          type: "standard",
          titre: "Provisioning et onboarding",
          points: [
            "Création des comptes avec les privilèges appropriés (enrollment/registration)",
            "Automated provisioning : règles prédéfinies, cohérence ; workflow provisioning : processus RH",
            "Remise du matériel : traçabilité indispensable",
            "Onboarding : signature de l'AUP, sensibilisation, password manager, helpdesk"
          ],
          narration:
            "Le provisioning garantit que les comptes sont créés selon des procédures définies, avec les privilèges correspondant strictement aux tâches. Le provisioning automatisé applique des règles prédéfinies, par exemple l'affectation aux bons groupes selon le rôle, ce qui assure la cohérence ; le workflow provisioning suit un processus établi, souvent déclenché par les ressources humaines. Le provisioning inclut aussi la remise de matériel, ordinateurs, tokens, cartes à puce, avec des registres précis. L'onboarding complète le tout : signature de la charte d'utilisation acceptable, sensibilisation aux bonnes pratiques, configuration d'un gestionnaire de mots de passe et présentation du support."
        },
        {
          type: "standard",
          titre: "SCIM et SPML : le provisioning automatisé inter-domaines",
          points: [
            "SCIM : System for Cross-domain Identity Management — standard MODERNE de provisioning",
            "API REST et format JSON : créer, mettre à jour et supprimer des comptes entre systèmes",
            "Cas d'usage : synchroniser les identités entre l'annuaire interne et les applications SaaS",
            "SPML : Service Provisioning Markup Language — l'ancêtre basé XML, quasi abandonné",
            "Bénéfices : onboarding/offboarding cohérents et rapides, moins d'erreurs manuelles"
          ],
          narration:
            "Quand une organisation utilise des dizaines d'applications SaaS, créer et supprimer les comptes à la main devient ingérable et dangereux. C'est le rôle de SCIM, System for Cross-domain Identity Management : un standard moderne de provisioning automatisé entre domaines, fondé sur une API REST et le format JSON. Concrètement, quand les ressources humaines créent un utilisateur dans l'annuaire, SCIM propage automatiquement la création du compte vers les applications cloud ; et au départ de l'employé, la suppression se propage de la même manière, ce qui ferme vite les portes. Son ancêtre s'appelle SPML, Service Provisioning Markup Language : un standard basé sur XML qui poursuivait le même objectif, mais qui n'a jamais été largement adopté et est aujourd'hui considéré comme obsolète. À l'examen, retenez le duo : SCIM pour le provisioning, SAML pour l'authentification fédérée — deux standards complémentaires, pas concurrents.",
          astuce: "💡 Conseil examen : SCIM = provisioning des COMPTES (REST/JSON, moderne) ; SPML = son ancêtre XML ; SAML = échange d'ASSERTIONS d'authentification. Ne les confondez pas."
        },
        {
          type: "standard",
          titre: "Revues d'accès et dérive des privilèges",
          points: [
            "Revoir périodiquement comptes utilisateurs, systèmes et de service",
            "Excessive privilege : plus de droits que nécessaire → révoquer",
            "Privilege creep : accumulation de droits au fil des changements de poste",
            "Scripts pour détecter comptes inutilisés et appartenances privilégiées"
          ],
          narration:
            "Les administrateurs doivent périodiquement passer en revue les comptes utilisateurs, systèmes et de service, pour vérifier leur conformité à la politique. Deux dérives sont à surveiller. L'excessive privilege : un utilisateur détient plus de droits que ses tâches ne l'exigent ; ces droits doivent être révoqués. Et le privilege creep, la dérive des privilèges : au fil des changements de poste, un compte accumule des droits sans jamais perdre les anciens. C'est une violation directe du least privilege. Des scripts périodiques peuvent détecter les comptes inutilisés et vérifier les membres des groupes privilégiés. Lors d'un transfert ou de la création d'un nouveau rôle, on redéfinit les privilèges nécessaires, on n'empile pas."
        },
        {
          type: "standard",
          titre: "Deprovisioning et offboarding",
          points: [
            "Désactiver d'abord, supprimer ensuite (après revue des données par le supérieur)",
            "Désactivation immédiate lors de l'entretien de départ : risque élevé de sabotage sinon",
            "Récupérer tout le matériel : laptops, mobiles, tokens",
            "S'applique aussi aux transferts internes"
          ],
          narration:
            "Au départ d'un employé, le compte est généralement d'abord désactivé plutôt que supprimé : le supérieur peut ainsi examiner les données de l'utilisateur, comme des fichiers chiffrés, avant la suppression définitive. Point critique pour l'examen : si un employé licencié conserve son accès après l'entretien de départ, le risque de sabotage est très élevé ; la désactivation doit donc être immédiate. L'offboarding inclut la restitution de tout le matériel : ordinateurs, mobiles, tokens d'authentification. Et n'oubliez pas que le deprovisioning concerne aussi les transferts internes, pour retirer les accès de l'ancien poste."
        },
        {
          type: "standard",
          titre: "PAM et comptes de service",
          points: [
            "PAM : gérer, surveiller et auditer les comptes à privilèges",
            "Fonctions : credential vaulting, session recording, just-in-time privileged access",
            "Comptes de service : utilisés par les applications, sans intervention humaine",
            "Éviter le compte système local : privilèges excessifs ; limiter et auditer sudo"
          ],
          narration:
            "Le privileged access management est un composant critique du cycle de vie : les solutions PAM gèrent, surveillent et auditent l'usage des comptes à privilèges. Elles offrent le coffre-fort d'identifiants, l'enregistrement des sessions et l'accès privilégié just-in-time, où les droits élevés ne sont accordés que temporairement, au moment du besoin. Les comptes de service, utilisés par les applications pour dialoguer avec d'autres ressources sans intervention humaine, doivent eux aussi être gérés et revus : évitez d'utiliser le compte système local comme compte de service, car il accorde généralement bien plus d'accès que nécessaire. Enfin, limitez et auditez l'usage de sudo."
        },
        {
          type: "standard",
          titre: "Escalade de privilèges et mouvement latéral",
          points: [
            "Vertical : obtenir des privilèges supérieurs (utilisateur → administrateur)",
            "Horizontal : privilèges similaires depuis d'autres comptes",
            "Mouvement latéral : propagation horizontale à travers le réseau",
            "Défense : limiter les privilèges des comptes de service, minimiser sudo"
          ],
          narration:
            "Après avoir compromis un premier système, l'attaquant cherche à étendre ses privilèges. L'escalade verticale lui donne des privilèges nettement supérieurs, par exemple passer d'un compte utilisateur standard à administrateur de la machine. L'escalade horizontale lui donne des privilèges similaires, mais depuis d'autres comptes ; lorsqu'il se propage ainsi de machine en machine à travers le réseau, on parle de mouvement latéral, ou lateral movement. Limiter les privilèges des comptes de service et minimiser l'usage de sudo réduit l'efficacité de ces attaques."
        },
        {
          type: "standard",
          titre: "Attaques ciblant l'IAM",
          points: [
            "Pass-the-hash : réutiliser un hash NTLM volé sans connaître le mot de passe",
            "Kerberoasting : demander des service tickets et casser hors ligne le mot de passe du compte de service",
            "Golden ticket : forger des TGT après compromission du compte krbtgt",
            "Credential stuffing, brute force, rainbow tables ; défenses : MFA, mots de passe forts, surveillance"
          ],
          narration:
            "L'IAM est une cible de choix. Avec pass-the-hash, l'attaquant s'authentifie en rejouant un hash NTLM volé, sans jamais connaître le mot de passe en clair. Le Kerberoasting exploite Kerberos : tout utilisateur authentifié peut demander des service tickets chiffrés avec le hash du mot de passe du compte de service, puis tenter de les casser hors ligne ; des mots de passe de service longs et aléatoires sont la parade. Pire encore, la compromission du compte krbtgt permet de forger des golden tickets, des TGT falsifiés donnant un accès quasi illimité au domaine. Ajoutez les attaques sur mots de passe, credential stuffing et rainbow tables. Les défenses : MFA, mots de passe robustes, surveillance des demandes de tickets anormales et protection renforcée des comptes à privilèges.",
          astuce: "💡 Conseil examen : Kerberoasting cible les comptes de service via les service tickets ; pass-the-hash rejoue un hash NTLM ; golden ticket forge des TGT via krbtgt."
        },
        {
          type: "question",
          titre: "Contrôle de connaissances",
          points: [],
          narration:
            "Une mise en situation managériale, comme à l'examen. Pensez à la chronologie des priorités.",
          q: "Un employé vient d'être licencié et son entretien de départ se termine. Que devriez-vous faire EN PREMIER ?",
          choix: [
            "Supprimer définitivement son compte et ses données",
            "Désactiver immédiatement son compte utilisateur",
            "Archiver ses courriels pour son successeur",
            "Récupérer son ordinateur portable à la fin de la semaine"
          ],
          reponse: 1,
          explication:
            "La priorité est de désactiver immédiatement le compte : un employé licencié qui conserve ses accès représente un risque de sabotage très élevé. On ne supprime pas tout de suite, car le supérieur doit pouvoir examiner les données du compte. L'archivage et la récupération du matériel font partie de l'offboarding mais viennent après la désactivation, qui doit être immédiate."
        },
        {
          type: "resume",
          titre: "Résumé de la leçon et du domaine",
          points: [
            "Cycle de vie : provisioning → revues → transferts → deprovisioning",
            "SCIM (REST/JSON) automatise le provisioning inter-domaines ; SPML est son ancêtre XML",
            "Privilege creep et excessive privilege : détectés par les revues d'accès",
            "Départ : désactiver immédiatement, puis revoir les données, puis supprimer",
            "PAM : vaulting, session recording, accès just-in-time ; comptes de service sous contrôle",
            "Attaques IAM : pass-the-hash, Kerberoasting, golden ticket, escalade et mouvement latéral"
          ],
          narration:
            "Terminons. Le cycle de vie des identités court de la création du compte à sa suppression, en passant par les revues d'accès qui traquent la dérive des privilèges. Au départ d'un collaborateur, on désactive immédiatement, on récupère le matériel, et on ne supprime qu'après revue. Le PAM encadre les comptes à privilèges avec coffre-fort, enregistrement de session et accès just-in-time. Et gardez en tête les attaques qui visent l'IAM : pass-the-hash, Kerberoasting, golden ticket et le mouvement latéral qui s'ensuit. Vous avez maintenant une vision complète du Domaine 5 : place aux quiz pour consolider tout cela."
        }
      ]
    }
  ],

  // ================================================================
  // QUIZ — 30 questions style examen CISSP
  // ================================================================
  quiz: [
    {
      q: "Quel est le but ULTIME de la combinaison identification, authentification et audit dans un système de contrôle d'accès ?",
      choix: [
        "Garantir la disponibilité des systèmes",
        "Assurer l'accountability des sujets",
        "Chiffrer les données sensibles",
        "Réduire les coûts d'administration"
      ],
      reponse: 1,
      explication:
        "L'accountability est le principe même du contrôle d'accès : c'est la combinaison d'une identification unique, d'une authentification fiable et de l'audit qui permet d'attribuer chaque action à un individu et de le tenir responsable. La disponibilité et le chiffrement relèvent d'autres objectifs de sécurité, et la réduction des coûts n'est pas un objectif de sécurité.",
      difficulte: 1
    },
    {
      q: "Un système exige un mot de passe puis un code PIN pour ouvrir une session. Comment qualifier cette authentification ?",
      choix: [
        "Authentification multifacteur, car deux éléments sont exigés",
        "Authentification à deux facteurs conforme à AAL2",
        "Authentification à facteur unique, car les deux éléments sont de type connaissance",
        "Authentification forte, car le PIN est indépendant du mot de passe"
      ],
      reponse: 2,
      explication:
        "Le MFA exige des facteurs de types différents. Un mot de passe et un PIN sont tous deux 'something you know' : c'est donc une authentification à facteur unique en deux étapes. Les réponses A, B et D confondent le nombre d'éléments demandés avec le nombre de types de facteurs, ce qui est le piège classique.",
      difficulte: 1
    },
    {
      q: "Dans un centre de recherche très sensible, quel réglage biométrique est le PLUS approprié pour la porte d'accès au laboratoire ?",
      choix: [
        "Minimiser le FRR pour fluidifier l'accès des chercheurs",
        "Régler le capteur exactement au CER",
        "Accepter un FRR plus élevé afin de minimiser le FAR",
        "Maximiser le débit d'enrôlement des utilisateurs"
      ],
      reponse: 2,
      explication:
        "Dans un environnement très sensible, laisser entrer un imposteur (erreur de type 2, FAR) est bien plus grave que rejeter un utilisateur légitime (erreur de type 1, FRR). On augmente donc la sensibilité, quitte à subir plus de faux rejets. Le CER est le point d'équilibre optimal seulement quand les deux erreurs ont des impacts équivalents, ce qui n'est pas le cas ici.",
      difficulte: 2
    },
    {
      q: "Quelle affirmation décrit le MIEUX le Crossover Error Rate (CER) ?",
      choix: [
        "Le taux d'utilisateurs légitimes rejetés par le système",
        "Le point où le FAR est égal au FRR ; plus il est bas, plus le système est précis",
        "Le taux d'imposteurs acceptés lorsque la sensibilité est maximale",
        "Le temps moyen nécessaire pour enrôler un nouvel utilisateur"
      ],
      reponse: 1,
      explication:
        "Le CER est le point où le taux de fausses acceptations (FAR) égale le taux de faux rejets (FRR) : c'est la mesure de référence pour comparer la précision de systèmes biométriques, et un CER bas indique un système précis. La réponse A décrit le FRR, la C évoque le FAR, et la D concerne le processus d'enrôlement.",
      difficulte: 1
    },
    {
      q: "Selon NIST SP 800-63B, quel niveau d'assurance d'authentification exige un authentificateur matériel avec résistance au phishing et à l'usurpation du vérifieur ?",
      choix: ["AAL1", "AAL2", "AAL3", "AAL4"],
      reponse: 2,
      explication:
        "AAL3 exige un MFA basé sur du matériel et impose la résistance au phishing et à l'usurpation du vérifieur (verifier impersonation). AAL1 accepte un facteur unique, AAL2 exige le MFA avec résistance au rejeu, et AAL4 n'existe pas dans NIST SP 800-63B.",
      difficulte: 2
    },
    {
      q: "Pourquoi le NIST déprécie-t-il l'usage du SMS comme second facteur pour les agences fédérales ?",
      choix: [
        "Le SMS est trop lent pour les utilisateurs",
        "Le canal SMS présente des vulnérabilités permettant l'interception des codes",
        "Le SMS coûte trop cher à grande échelle",
        "Les téléphones ne peuvent pas recevoir de codes chiffrés"
      ],
      reponse: 1,
      explication:
        "NIST SP 800-63B pointe les vulnérabilités du canal SMS : interception, SIM swapping, redirection. Ce n'est ni une question de lenteur ni de coût, et la réponse D est techniquement hors sujet. Les alternatives recommandées incluent les applications TOTP et les authentificateurs matériels.",
      difficulte: 2
    },
    {
      q: "Quelle est la PRINCIPALE différence entre une smart card et une memory card ?",
      choix: [
        "La smart card contient une puce qui génère des données d'authentification uniques à chaque transaction",
        "La memory card est plus sécurisée car ses données ne changent jamais",
        "La smart card fonctionne uniquement avec la biométrie",
        "La memory card exige toujours un code PIN"
      ],
      reponse: 0,
      explication:
        "La smart card embarque un circuit intégré capable de générer des données uniques à chaque transaction, ce qui empêche le rejeu. La memory card, à piste magnétique, restitue toujours les mêmes données, ce qui la rend facilement clonable — l'inverse de la sécurité affirmée en B. Les réponses C et D décrivent des exigences qui ne sont pas systématiques.",
      difficulte: 2
    },
    {
      q: "Quel est le PRINCIPAL risque introduit par le Single Sign-On, et quelle est la MEILLEURE parade ?",
      choix: [
        "La lenteur d'authentification ; ajouter des serveurs",
        "Le point de compromission unique ; exiger le MFA sur l'identifiant SSO",
        "La multiplication des mots de passe ; imposer un gestionnaire de mots de passe",
        "L'absence d'audit ; activer la journalisation"
      ],
      reponse: 1,
      explication:
        "Le SSO crée un single point of compromise : un identifiant SSO volé expose toutes les ressources liées. La meilleure parade est de protéger cette authentification unique par du MFA. Le SSO réduit justement le nombre de mots de passe (C est contradictoire), et les réponses A et D n'adressent pas le risque principal.",
      difficulte: 1
    },
    {
      q: "Des utilisateurs d'un domaine Active Directory ne peuvent plus s'authentifier après le dérèglement de l'horloge d'un contrôleur de domaine. Quel protocole est la cause la PLUS probable du problème ?",
      choix: [
        "LDAP, car l'annuaire est corrompu",
        "Kerberos, car il dépend de la synchronisation horaire via NTP",
        "RADIUS, car les ports UDP sont bloqués",
        "SAML, car les assertions ont expiré"
      ],
      reponse: 1,
      explication:
        "Kerberos horodate ses tickets (TGT et service tickets) pour prévenir les attaques par rejeu ; il dépend donc de NTP pour synchroniser clients et serveurs. Une dérive d'horloge excessive fait échouer l'authentification. LDAP, RADIUS et SAML ne sont pas en cause dans un scénario de dérive horaire d'un contrôleur de domaine.",
      difficulte: 2
    },
    {
      q: "Dans Kerberos, quel composant délivre les service tickets après vérification du TGT ?",
      choix: [
        "L'Authentication Service (AS)",
        "Le Ticket-Granting Service (TGS)",
        "Le principal",
        "Le realm"
      ],
      reponse: 1,
      explication:
        "Le TGS, hébergé par le KDC, vérifie le TGT présenté par le client puis délivre un service ticket pour la ressource demandée. L'AS vérifie l'authenticité initiale des demandes et participe à l'émission du TGT. Le principal est l'entité qui demande les tickets, et le realm est la zone logique gouvernée par Kerberos.",
      difficulte: 2
    },
    {
      q: "Quelle affirmation sur le processus de connexion Kerberos est EXACTE ?",
      choix: [
        "Le mot de passe de l'utilisateur est transmis chiffré au KDC",
        "Le mot de passe n'est jamais transmis ; la clé de session est chiffrée avec un hash du mot de passe",
        "Le KDC utilise la cryptographie asymétrique pour distribuer les clés",
        "Le TGT est stocké en clair sur le serveur de ressources"
      ],
      reponse: 1,
      explication:
        "Le KDC chiffre la clé de session avec un hash du mot de passe de l'utilisateur : seul le détenteur du bon mot de passe peut la déchiffrer. Le mot de passe n'est donc jamais transmis, mais il est bien vérifié. Kerberos v5 utilise la cryptographie symétrique (AES), pas asymétrique, et le TGT chiffré est installé côté client, pas sur le serveur de ressources.",
      difficulte: 3
    },
    {
      q: "Quelle organisation maintient le standard SAML 2.0 ?",
      choix: ["IETF", "OASIS", "OpenID Foundation", "W3C"],
      reponse: 1,
      explication:
        "SAML 2.0 est un standard ouvert basé sur XML maintenu par l'OASIS. L'IETF maintient OAuth 2.0 (RFC 6749), l'OpenID Foundation maintient OIDC, et le W3C est derrière WebAuthn et l'API Credential Management.",
      difficulte: 2
    },
    {
      q: "Dans SAML 2.0, quelle assertion prouve que l'utilisateur a fourni les bons identifiants et précise la méthode et l'heure de connexion ?",
      choix: [
        "L'assertion d'autorisation",
        "L'assertion d'attribut",
        "L'assertion d'authentification",
        "L'assertion de session"
      ],
      reponse: 2,
      explication:
        "L'authentication assertion prouve que l'agent utilisateur a fourni les bons identifiants, identifie la méthode d'identification et l'heure de connexion. L'authorization assertion indique si l'accès au service est accordé (et pourquoi en cas de refus), l'attribute assertion transporte des informations sur l'utilisateur, et l'assertion de session n'existe pas dans SAML.",
      difficulte: 2
    },
    {
      q: "Un utilisateur se connecte à une nouvelle application mobile en utilisant son compte Google au lieu de créer un compte dédié. Quel protocole est le PLUS probablement à l'œuvre ?",
      choix: ["OAuth 2.0 seul", "OpenID Connect (OIDC)", "Kerberos", "TACACS+"],
      reponse: 1,
      explication:
        "Se connecter à un service tiers via un compte existant est un scénario d'authentification fédérée : OIDC, couche d'authentification bâtie sur OAuth 2.0, avec des jetons JWT. OAuth seul ne fait que de l'autorisation déléguée (accéder à des ressources, pas prouver une identité). Kerberos est un SSO interne et TACACS+ un protocole AAA réseau.",
      difficulte: 2
    },
    {
      q: "Quelle est la relation ENTRE OAuth 2.0 et OpenID Connect ?",
      choix: [
        "OIDC est une couche d'authentification construite sur le framework d'autorisation OAuth 2.0",
        "OAuth 2.0 est une extension d'OIDC dédiée au chiffrement",
        "Les deux sont des protocoles d'authentification concurrents et incompatibles",
        "OIDC remplace OAuth 2.0, qui est déprécié"
      ],
      reponse: 0,
      explication:
        "OIDC ajoute l'authentification (jetons d'identité JWT, profil utilisateur) au-dessus du framework d'autorisation OAuth 2.0 : les deux sont complémentaires, pas concurrents. OAuth n'est ni une extension d'OIDC ni déprécié ; il reste le standard ouvert le plus utilisé pour l'autorisation et la délégation de droits vers les services cloud.",
      difficulte: 2
    },
    {
      q: "Quel avantage TACACS+ offre-t-il par rapport à RADIUS ?",
      choix: [
        "Il utilise UDP, plus rapide que TCP",
        "Il chiffre l'ensemble des informations d'authentification et sépare les processus AAA",
        "Il ne nécessite aucun serveur central",
        "Il est rétrocompatible avec Diameter"
      ],
      reponse: 1,
      explication:
        "TACACS+ chiffre la totalité des échanges d'authentification (RADIUS ne chiffre par défaut que le mot de passe) et sépare authentification, autorisation et accounting en processus distincts, hébergeables sur des serveurs différents. Il utilise TCP port 49 (pas UDP), reste un modèle centralisé, et Diameter n'est compatible ni avec RADIUS ni concerné ici.",
      difficulte: 2
    },
    {
      q: "Quels ports UDP RADIUS utilise-t-il par défaut pour les messages d'authentification et d'accounting ?",
      choix: ["88 et 89", "1812 et 1813", "49 et 50", "2083 et 2084"],
      reponse: 1,
      explication:
        "RADIUS utilise UDP 1812 pour l'authentification et UDP 1813 pour l'accounting. Le port 88 est celui de Kerberos, TCP 49 celui de TACACS+, et TCP 2083 celui de RADIUS sur TLS (RadSec) défini par la RFC 6614.",
      difficulte: 3
    },
    {
      q: "Quelle caractéristique distingue Diameter de RADIUS ?",
      choix: [
        "Diameter est rétrocompatible avec RADIUS pour faciliter la migration",
        "Diameter utilise TCP ou SCTP et sécurise les échanges avec IPsec ou TLS",
        "Diameter ne chiffre que le mot de passe pour rester performant",
        "Diameter est limité aux petits réseaux d'accès distant"
      ],
      reponse: 1,
      explication:
        "Diameter corrige les faiblesses de RADIUS : transport fiable en TCP ou SCTP, sécurité par IPsec ou TLS (au lieu du hachage MD5), attributs étendus pour les grands réseaux et gestion de sessions complexes. Mais il n'est PAS rétrocompatible avec RADIUS, ne se limite pas au mot de passe, et vise justement les réseaux vastes et complexes.",
      difficulte: 3
    },
    {
      q: "Vous créez un fichier sur un partage NTFS et accordez vous-même les permissions de lecture à vos collègues. Quel modèle de contrôle d'accès est en jeu ?",
      choix: [
        "Mandatory Access Control",
        "Discretionary Access Control",
        "Role-Based Access Control",
        "Rule-Based Access Control"
      ],
      reponse: 1,
      explication:
        "Dans le DAC, chaque objet a un propriétaire qui accorde ou refuse l'accès à sa discrétion via des ACL — c'est le modèle de NTFS. Le MAC repose sur des labels imposés par le système, le RBAC sur des rôles gérés centralement, et le rule-based sur des règles globales appliquées à tous les sujets.",
      difficulte: 1
    },
    {
      q: "Quelle est la caractéristique CLÉ du modèle Mandatory Access Control ?",
      choix: [
        "Le propriétaire de l'objet décide des accès",
        "Des labels sont appliqués aux sujets et aux objets, et le système impose la politique",
        "Les privilèges sont attribués via des rôles métier",
        "Les règles s'appuient sur des attributs multiples exprimés en XACML"
      ],
      reponse: 1,
      explication:
        "Le MAC se reconnaît à ses labels de classification appliqués aux sujets comme aux objets, l'accès étant imposé par le système selon la politique de l'organisation (modèle lattice-based, need to know). La réponse A décrit le DAC, la C le RBAC et la D l'ABAC.",
      difficulte: 1
    },
    {
      q: "Une organisation à fort turnover veut réduire la charge d'administration des permissions tout en limitant le privilege creep. Quel modèle est le PLUS adapté ?",
      choix: [
        "DAC, pour responsabiliser les propriétaires de fichiers",
        "RBAC, en assignant les privilèges à des rôles métier",
        "MAC, avec des labels de classification",
        "Rule-based, avec des règles de pare-feu"
      ],
      reponse: 1,
      explication:
        "Le RBAC attribue les privilèges à des rôles alignés sur les fonctions : à chaque mouvement de personnel, il suffit de changer l'appartenance au rôle, ce qui minimise la charge d'administration et empêche l'accumulation de droits. Le DAC disperse les décisions, le MAC est lourd et destiné aux environnements de haute sécurité, et le rule-based ne gère pas les fonctions métier.",
      difficulte: 2
    },
    {
      q: "Une politique s'écrit : « Autoriser les managers à accéder au WAN depuis un appareil mobile pendant les heures ouvrées ». Quel modèle permet ce type de règle ?",
      choix: [
        "Attribute-Based Access Control (ABAC)",
        "Discretionary Access Control (DAC)",
        "Mandatory Access Control (MAC)",
        "Role-Based Access Control (RBAC) seul"
      ],
      reponse: 0,
      explication:
        "L'ABAC combine plusieurs attributs — le rôle du sujet (manager), le type d'appareil (mobile), la ressource (WAN) et l'environnement (heures ouvrées) — dans des politiques exprimables en langage naturel, formalisées avec XACML. Le RBAC seul ne prend en compte que le rôle, sans les attributs d'environnement ; DAC et MAC ne fonctionnent pas par règles à attributs.",
      difficulte: 2
    },
    {
      q: "Dans une architecture d'application de politiques d'accès, quel composant PREND la décision et lequel l'APPLIQUE ?",
      choix: [
        "Le PEP décide, le PDP applique",
        "Le PDP décide, le PEP applique",
        "L'IdP décide, le SP applique",
        "Le KDC décide, le TGS applique"
      ],
      reponse: 1,
      explication:
        "Le Policy Decision Point évalue les demandes d'accès selon les règles prédéfinies et rend la décision ; le Policy Enforcement Point, en gatekeeper, reçoit les demandes, les transmet au PDP puis applique la décision (accès accordé ou refusé). La réponse A inverse les rôles ; IdP/SP relèvent de la fédération et KDC/TGS de Kerberos.",
      difficulte: 2
    },
    {
      q: "Un système bloque automatiquement le trafic d'un appareil IoT dont le comportement est jugé anormal par un moteur d'apprentissage automatique. Quel modèle de contrôle d'accès est illustré ?",
      choix: [
        "Rule-based access control",
        "Risk-based access control",
        "Content-dependent control",
        "Discretionary access control"
      ],
      reponse: 1,
      explication:
        "Le risk-based access control évalue l'environnement et la situation (localisation, MFA, appareil, comportement) et peut utiliser le machine learning pour comparer l'activité courante aux comportements passés, par exemple pour bloquer le trafic anormal d'un IoT infecté. Le rule-based applique des règles statiques identiques pour tous, le content-dependent examine le contenu accédé, et le DAC repose sur le propriétaire.",
      difficulte: 2
    },
    {
      q: "Lors d'une revue d'accès, vous découvrez qu'un employé muté deux fois conserve les droits de ses trois postes successifs. Comment nomme-t-on ce phénomène et quel principe viole-t-il ?",
      choix: [
        "Escalade verticale ; violation de la separation of duties",
        "Privilege creep ; violation du least privilege",
        "Excessive delegation ; violation du need to know",
        "Mouvement latéral ; violation de l'implicit deny"
      ],
      reponse: 1,
      explication:
        "L'accumulation de privilèges au fil des changements de poste est le privilege creep (creeping privileges), qui viole le principe du least privilege. L'escalade verticale et le mouvement latéral sont des techniques d'attaque, pas des dérives administratives. Les revues d'accès périodiques sont précisément le contrôle qui détecte cette dérive.",
      difficulte: 1
    },
    {
      q: "Pourquoi faut-il éviter d'utiliser le compte système local comme compte de service pour une application ?",
      choix: [
        "Il empêche l'application de démarrer automatiquement",
        "Il accorde généralement à l'application plus d'accès qu'elle n'en a besoin",
        "Il ne peut pas être audité par le système",
        "Il expire automatiquement tous les 30 jours"
      ],
      reponse: 1,
      explication:
        "Le compte système local évite de créer un compte de service dédié, mais il accorde presque toujours des privilèges excessifs à l'application, en violation du least privilege — et limiter les privilèges des comptes de service réduit le succès des attaques par escalade. Les réponses A, C et D sont factuellement fausses.",
      difficulte: 2
    },
    {
      q: "Un attaquant authentifié sur le domaine demande des service tickets Kerberos pour des comptes de service, puis tente de casser hors ligne les mots de passe à partir des tickets. Comment s'appelle cette attaque ?",
      choix: ["Pass-the-hash", "Kerberoasting", "Golden ticket", "Credential stuffing"],
      reponse: 1,
      explication:
        "Le Kerberoasting consiste à demander des service tickets (chiffrés avec le hash du mot de passe du compte de service) puis à les casser hors ligne ; la parade est d'utiliser des mots de passe de service longs et aléatoires. Le pass-the-hash rejoue un hash NTLM volé, le golden ticket forge des TGT après compromission du compte krbtgt, et le credential stuffing rejoue des identifiants volés sur d'autres sites.",
      difficulte: 3
    },
    {
      q: "Après avoir compromis le poste d'un utilisateur standard, un attaquant obtient les droits administrateur de la machine, puis accède avec des privilèges similaires à d'autres postes du réseau. Quelles techniques décrit ce scénario, dans l'ordre ?",
      choix: [
        "Escalade horizontale, puis escalade verticale",
        "Escalade verticale, puis escalade horizontale (mouvement latéral)",
        "Kerberoasting, puis pass-the-hash",
        "Privilege creep, puis session hijacking"
      ],
      reponse: 1,
      explication:
        "Passer d'utilisateur standard à administrateur est une escalade verticale (privilèges nettement supérieurs) ; se propager ensuite vers d'autres machines avec des privilèges similaires est une escalade horizontale, appelée mouvement latéral à l'échelle du réseau. La réponse A inverse l'ordre, la C nomme des attaques spécifiques non décrites ici, et la D confond avec des dérives administratives.",
      difficulte: 2
    },
    {
      q: "Quelle fonctionnalité relève spécifiquement d'une solution de Privileged Access Management (PAM) ?",
      choix: [
        "La génération de certificats TLS pour les serveurs web",
        "L'enregistrement des sessions privilégiées et l'accès privilégié just-in-time",
        "Le filtrage des courriels entrants",
        "La sauvegarde chiffrée des bases de données"
      ],
      reponse: 1,
      explication:
        "Les solutions PAM gèrent, surveillent et auditent les comptes à privilèges : coffre-fort d'identifiants (credential vaulting), enregistrement des sessions et attribution just-in-time des privilèges élevés. Les certificats, le filtrage de courriels et les sauvegardes relèvent d'autres familles d'outils.",
      difficulte: 1
    },
    {
      q: "Une fédération d'identités permet aux employés d'un partenaire d'accéder à votre portail : leur compte est créé automatiquement lors de leur première connexion, sans intervention d'un administrateur. Quel mécanisme et quel protocole d'échange sont les PLUS probablement utilisés ?",
      choix: [
        "Workflow provisioning via LDAP",
        "Just-in-time provisioning via SAML",
        "Automated deprovisioning via OAuth",
        "Self-service provisioning via RADIUS"
      ],
      reponse: 1,
      explication:
        "Le provisioning just-in-time crée automatiquement le compte chez le fournisseur de service lors de la première connexion fédérée, sans intervention administrative, et s'appuie couramment sur SAML pour échanger les données requises. Le workflow provisioning passe par un processus établi (souvent RH), le deprovisioning supprime des comptes, et RADIUS n'est pas un protocole de fédération.",
      difficulte: 2
    },
    {
      q: "Votre organisation utilise 40 applications SaaS et souhaite que la création et la suppression des comptes soient automatiquement synchronisées depuis l'annuaire central. Quel standard est le MIEUX adapté ?",
      choix: [
        "SPML",
        "SAML",
        "SCIM",
        "OAuth 2.0"
      ],
      reponse: 2,
      explication:
        "SCIM (System for Cross-domain Identity Management) est le standard moderne de provisioning automatisé inter-domaines, basé sur une API REST et le format JSON : il propage créations, mises à jour et suppressions de comptes vers les applications cloud. SPML poursuivait le même but mais est un ancien standard XML quasi abandonné ; SAML sert à l'authentification fédérée (assertions), et OAuth 2.0 à la délégation d'autorisation, pas au provisioning.",
      difficulte: 2
    },
    {
      q: "Quelle affirmation décrit le MIEUX la relation entre SPML et SCIM ?",
      choix: [
        "SCIM est un profil de SPML pour les environnements cloud",
        "SPML est l'ancien standard de provisioning basé XML ; SCIM est son successeur moderne basé REST et JSON",
        "SPML gère le provisioning et SCIM gère l'authentification des utilisateurs",
        "Les deux sont des protocoles d'authentification unique (SSO)"
      ],
      reponse: 1,
      explication:
        "SPML (Service Provisioning Markup Language) est un standard XML de provisioning qui n'a jamais été largement adopté ; SCIM l'a remplacé avec une approche moderne fondée sur des API REST et JSON, largement supportée par les fournisseurs SaaS. Aucun des deux n'authentifie les utilisateurs ni ne fournit de SSO : ce sont des standards de gestion du cycle de vie des comptes.",
      difficulte: 2
    }
  ],

  // ================================================================
  // FLASHCARDS — 24 cartes
  // ================================================================
  flashcards: [
    {
      recto: "IAAA",
      verso: "Identification (déclarer une identité), Authentication (la prouver), Authorization (définir les droits), Accountability (répondre de ses actions grâce à l'audit). L'accountability est le principe même du contrôle d'accès."
    },
    {
      recto: "Les trois facteurs principaux d'authentification",
      verso: "Type 1 : something you know (mot de passe, PIN). Type 2 : something you have (smart card, token). Type 3 : something you are (biométrie). Facteurs contextuels : somewhere you are, something you do."
    },
    {
      recto: "MFA (Multifactor Authentication)",
      verso: "Authentification utilisant au moins deux facteurs de TYPES différents. Mot de passe + PIN = un seul facteur (deux connaissances) ; mot de passe + token TOTP = vrai MFA."
    },
    {
      recto: "FRR (False Rejection Rate)",
      verso: "Erreur de Type 1 : probabilité de rejeter à tort un utilisateur légitime (être refoulé à sa propre porte). Exprimée en pourcentage."
    },
    {
      recto: "FAR (False Acceptance Rate)",
      verso: "Erreur de Type 2 : probabilité d'accepter à tort un imposteur (laisser entrer un inconnu). C'est l'erreur la plus dangereuse en environnement sensible."
    },
    {
      recto: "CER (Crossover Error Rate)",
      verso: "Point où FAR = FRR. Mesure de référence de la précision d'un système biométrique : plus le CER est bas, plus le système est précis."
    },
    {
      recto: "HOTP vs TOTP",
      verso: "HOTP : one-time password basé sur un compteur et une fonction HMAC. TOTP : ajoute un horodatage, le code n'est valide que 30 à 60 secondes (applications d'authentification). Le SMS comme second facteur est déprécié par NIST SP 800-63B."
    },
    {
      recto: "FIDO2 / WebAuthn",
      verso: "Standards d'authentification passwordless résistante au phishing. FIDO2 : spécifications de la FIDO Alliance remplaçant les mots de passe par des clés cryptographiques. WebAuthn : API web du W3C permettant au site (relying party) de dialoguer avec le navigateur."
    },
    {
      recto: "Identity proofing",
      verso: "AKA registration : confirmer qu'une personne est bien qui elle prétend être avant de créer le compte. En personne : passeport, permis. En ligne : Knowledge-Based Authentication (KBA) vérifiée auprès de sources faisant autorité."
    },
    {
      recto: "Single Sign-On (SSO)",
      verso: "Authentification unique donnant accès à plusieurs ressources sans se ré-authentifier. Avantages : moins de mots de passe, administration simplifiée. Risque : single point of compromise → protéger par MFA."
    },
    {
      recto: "Kerberos — caractéristiques clés",
      verso: "SSO le plus répandu en entreprise ; but premier : authentification ; cryptographie symétrique (AES) et tickets ; dépend de NTP (horodatage) ; port 88 (UDP, TCP pour gros tickets) ; utilisé par Active Directory."
    },
    {
      recto: "KDC, AS, TGS, TGT",
      verso: "KDC : tiers de confiance d'authentification. AS : vérifie l'authenticité et la fraîcheur des demandes. TGS : délivre les service tickets. TGT : ticket chiffré (clé symétrique, expiration, adresse IP) prouvant l'authentification, présenté pour obtenir les tickets."
    },
    {
      recto: "SAML 2.0",
      verso: "Standard ouvert XML maintenu par OASIS pour échanger authentification ET autorisation entre organisations fédérées (SSO navigateur). Entités : Principal, Service Provider, Identity Provider. Assertions : authentication, authorization, attribute."
    },
    {
      recto: "OAuth 2.0 vs OpenID Connect (OIDC)",
      verso: "OAuth 2.0 (RFC 6749, IETF) : framework d'AUTORISATION et de délégation d'accès. OIDC (OpenID Foundation) : couche d'AUTHENTIFICATION bâtie sur OAuth, RESTful/JSON, jetons JWT. Un jeu qui lit vos contacts = OAuth ; se connecter avec Google = OIDC."
    },
    {
      recto: "RADIUS vs TACACS+",
      verso: "RADIUS : UDP 1812/1813, ne chiffre que le mot de passe (RADIUS/TLS : TCP 2083). TACACS+ (Cisco, standard ouvert) : TCP 49, chiffre tout, sépare authentification/autorisation/accounting."
    },
    {
      recto: "Diameter",
      verso: "Successeur de RADIUS (« le diamètre vaut deux rayons ») : TCP/SCTP, sécurité IPsec ou TLS, attributs étendus, sessions complexes. NON rétrocompatible avec RADIUS."
    },
    {
      recto: "DAC (Discretionary Access Control)",
      verso: "Chaque objet a un propriétaire qui accorde ou refuse l'accès à sa discrétion via des ACL. Exemple : NTFS. Tous les autres modèles sont non-discrétionnaires (gérés centralement)."
    },
    {
      recto: "MAC (Mandatory Access Control)",
      verso: "Le système impose l'accès selon la politique : labels appliqués aux sujets ET aux objets (modèle lattice-based). Applique le need to know ; environnements hiérarchiques, compartimentés ou hybrides."
    },
    {
      recto: "RBAC vs Rule-based",
      verso: "RBAC : privilèges assignés à des rôles calqués sur les fonctions métier (non-discrétionnaire, faible charge d'administration). Rule-based : règles globales appliquées à tous les sujets, ex. ACL de pare-feu (restrictions/filtres)."
    },
    {
      recto: "ABAC (Attribute-Based Access Control)",
      verso: "Règles combinant attributs du sujet, de l'action, de la ressource et de l'environnement ; politiques en langage naturel formalisées avec XACML ; utilisé par les SDN. Plus flexible que le rule-based classique."
    },
    {
      recto: "PDP vs PEP",
      verso: "Policy Decision Point : évalue les demandes et DÉCIDE selon les règles prédéfinies. Policy Enforcement Point : gatekeeper qui reçoit la demande, la transmet au PDP, puis APPLIQUE la décision."
    },
    {
      recto: "Privilege creep / Excessive privilege",
      verso: "Privilege creep : accumulation de droits au fil des changements de poste. Excessive privilege : plus de droits que les tâches n'exigent. Violations du least privilege, détectées par les revues d'accès périodiques."
    },
    {
      recto: "Kerberoasting / Pass-the-hash / Golden ticket",
      verso: "Kerberoasting : demander des service tickets et casser hors ligne le mot de passe du compte de service. Pass-the-hash : rejouer un hash NTLM volé sans connaître le mot de passe. Golden ticket : forger des TGT après compromission du compte krbtgt."
    },
    {
      recto: "Provisioning Just-In-Time (JIT)",
      verso: "En fédération, création automatique du compte chez le fournisseur de service lors de la première connexion, sans intervention administrative ; utilise couramment SAML. Réduit la charge d'administration. (En PAM, JIT = privilèges élevés accordés temporairement au moment du besoin.)"
    },
    {
      recto: "SCIM (System for Cross-domain Identity Management)",
      verso: "Standard MODERNE de provisioning automatisé inter-domaines : API REST et format JSON pour créer, mettre à jour et supprimer les comptes entre l'annuaire et les applications SaaS. Complémentaire de SAML (SCIM = comptes, SAML = authentification)."
    },
    {
      recto: "SPML (Service Provisioning Markup Language)",
      verso: "Ancien standard de provisioning basé sur XML, ancêtre de SCIM. Jamais largement adopté, aujourd'hui considéré comme obsolète — remplacé par SCIM (REST/JSON) dans les environnements cloud."
    }
  ]
};
