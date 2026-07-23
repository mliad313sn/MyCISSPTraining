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
    },
    {
      q: "Un employé badge à l'entrée du datacenter, saisit un code PIN, puis le système enregistre son entrée dans un journal horodaté. À quelles étapes du modèle IAAA correspondent respectivement le badge présenté, le PIN saisi et le journal ?",
      choix: [
        "Identification ; authentification ; accountability",
        "Authentification ; autorisation ; audit",
        "Identification ; autorisation ; accountability",
        "Authentification ; identification ; autorisation"
      ],
      reponse: 0,
      explication:
        "Présenter le badge revient à déclarer une identité (identification), le PIN prouve que le porteur est bien le titulaire (authentification), et le journal horodaté fournit la trace qui rend l'individu responsable de ses actions (accountability via l'audit). L'autorisation, non citée ici, serait la vérification que cette identité a le droit d'entrer dans cette zone. Les autres réponses inversent ou confondent les étapes.",
      difficulte: 1
    },
    {
      q: "Lors d'une investigation, l'équipe SOC ne parvient pas à déterminer QUEL administrateur a supprimé une base de données, car les trois administrateurs partagent le compte 'admin'. Quel pilier du modèle IAAA est fondamentalement compromis ?",
      choix: [
        "L'autorisation, car le compte avait trop de droits",
        "L'accountability, car l'identification n'est pas unique",
        "L'authentification, car le mot de passe était faible",
        "La disponibilité, car la base a été supprimée"
      ],
      reponse: 1,
      explication:
        "L'accountability exige une chaîne complète : identification unique, authentification fiable et audit. Un compte partagé brise le premier maillon — impossible d'attribuer une action à un individu précis, donc impossible de le tenir responsable, même avec des journaux parfaits. Ce n'est pas d'abord un problème d'autorisation ni de robustesse du mot de passe, et la disponibilité est une conséquence de l'incident, pas le pilier IAM compromis.",
      difficulte: 2
    },
    {
      q: "Après plusieurs compromissions par phishing malgré le déploiement de codes TOTP, le RSSI veut une authentification résistante au phishing. Quelle solution répond le MIEUX à ce besoin ?",
      choix: [
        "Envoyer les codes par SMS plutôt que par application",
        "Déployer des authentificateurs FIDO2/WebAuthn liés à l'origine du site",
        "Allonger les codes TOTP à huit chiffres",
        "Imposer un changement de mot de passe tous les 30 jours"
      ],
      reponse: 1,
      explication:
        "FIDO2/WebAuthn est résistant au phishing par conception : la clé privée ne quitte jamais l'authentificateur et la signature est cryptographiquement liée à l'origine (le domaine) du site légitime — un site de phishing, même parfaitement imité, ne peut pas obtenir de réponse valide. Les codes TOTP et SMS restent saisissables par l'utilisateur sur un faux site (attaque adversary-in-the-middle), quelle que soit leur longueur, et la rotation des mots de passe n'empêche pas leur capture en temps réel.",
      difficulte: 2
    },
    {
      q: "Quelle est la PRINCIPALE différence de sécurité entre une passkey synchronisée (via un cloud grand public) et une passkey liée à l'appareil (device-bound, ex. clé de sécurité matérielle) ?",
      choix: [
        "La passkey synchronisée n'utilise pas la cryptographie asymétrique",
        "La passkey device-bound garantit que la clé privée ne peut pas être copiée hors du matériel",
        "La passkey synchronisée est vulnérable au phishing, contrairement à la device-bound",
        "La passkey device-bound exige obligatoirement un mot de passe en complément"
      ],
      reponse: 1,
      explication:
        "Les deux types reposent sur la même cryptographie asymétrique WebAuthn et sont résistants au phishing. La différence porte sur l'exportabilité de la clé privée : une passkey synchronisée est répliquée entre appareils via un compte cloud (la sécurité dépend alors de ce compte et de son recouvrement), tandis qu'une passkey device-bound reste confinée dans le matériel (élément sécurisé, clé FIDO), ce qui offre une assurance supérieure — exigée par exemple pour atteindre AAL3. Les réponses A et C sont fausses, et D n'est pas une exigence.",
      difficulte: 3
    },
    {
      q: "Des employés reçoivent en pleine nuit des dizaines de notifications push MFA et l'un d'eux finit par approuver pour faire cesser les alertes. Quelle attaque est décrite et quelle est la MEILLEURE contre-mesure ?",
      choix: [
        "Credential stuffing ; imposer des mots de passe uniques",
        "MFA fatigue (push bombing) ; activer le number matching ou passer à FIDO2",
        "SIM swapping ; contacter l'opérateur mobile",
        "Session hijacking ; raccourcir la durée des sessions"
      ],
      reponse: 1,
      explication:
        "Le MFA fatigue (ou push bombing) consiste à bombarder l'utilisateur de demandes push jusqu'à ce qu'il approuve par lassitude ou erreur — l'attaquant possède déjà le mot de passe. Le number matching (saisir un code affiché à l'écran de connexion dans l'application) ou un authentificateur FIDO2 supprime l'approbation aveugle. Le credential stuffing est l'étape amont probable mais ne décrit pas le bombardement de notifications ; le SIM swapping vise les SMS et le session hijacking des sessions déjà ouvertes.",
      difficulte: 2
    },
    {
      q: "Dans l'architecture FIDO2, quels sont les deux composants standardisés et leur rôle respectif ?",
      choix: [
        "SAML pour le navigateur et OAuth pour l'authentificateur",
        "WebAuthn, l'API entre le navigateur et le service web ; CTAP, le protocole entre le navigateur et l'authentificateur externe",
        "TOTP pour générer les codes et HOTP pour les vérifier",
        "PKCS#11 pour la carte à puce et X.509 pour le certificat"
      ],
      reponse: 1,
      explication:
        "FIDO2 combine WebAuthn (API du W3C permettant au site web, via le navigateur, de créer et vérifier des credentials à clé publique) et CTAP (Client to Authenticator Protocol de la FIDO Alliance, qui fait dialoguer le navigateur avec un authentificateur externe comme une clé USB/NFC ou un smartphone). TOTP/HOTP sont des générateurs de codes à usage unique sans lien avec FIDO2, et PKCS#11/X.509 relèvent des infrastructures à clé publique classiques.",
      difficulte: 3
    },
    {
      q: "Le service RH se plaint qu'un nouveau lecteur biométrique exige trois minutes par personne pour l'enrôlement et plus de dix secondes à chaque passage. Quels critères d'acceptabilité opérationnelle sont en cause ?",
      choix: [
        "Le CER et le FAR",
        "Le temps d'enrôlement et le throughput (débit de passage)",
        "La précision et le taux de faux rejets",
        "La résistance au spoofing et la vivacité (liveness)"
      ],
      reponse: 1,
      explication:
        "Au-delà de la précision (FAR/FRR/CER), un système biométrique doit être opérationnellement acceptable : un enrôlement de moins de deux minutes environ et un temps de passage de l'ordre de six à dix secondes maximum sont les repères classiques. Ici, le problème n'est ni la précision ni l'anti-spoofing, mais l'ergonomie : enrôlement trop long et débit insuffisant, qui provoquent le rejet du système par les utilisateurs.",
      difficulte: 2
    },
    {
      q: "Quelle est la MEILLEURE pratique pour le stockage des données biométriques d'authentification ?",
      choix: [
        "Stocker les images brutes chiffrées dans une base centrale pour faciliter le ré-enrôlement",
        "Stocker uniquement un gabarit (template) mathématique protégé, idéalement sur l'appareil de l'utilisateur",
        "Stocker les empreintes en clair mais sur un serveur isolé du réseau",
        "Convertir les empreintes en mot de passe réutilisable"
      ],
      reponse: 1,
      explication:
        "On ne stocke jamais l'image biométrique brute : on en dérive un gabarit mathématique, protégé (chiffré, voire conservé dans un élément sécurisé local comme le fait Touch ID/Face ID), car une caractéristique biométrique compromise ne peut pas être révoquée ni changée, contrairement à un mot de passe. La centralisation d'images brutes crée une cible de très grande valeur ; le stockage en clair est inacceptable même isolé ; et convertir une biométrie en mot de passe réutilisable annule tout l'intérêt du facteur.",
      difficulte: 2
    },
    {
      q: "Pour réduire les plaintes d'employés rejetés par le lecteur d'empreintes de la cafétéria, l'administrateur diminue la sensibilité du capteur. Quelle est la conséquence directe de ce réglage ?",
      choix: [
        "Le FRR augmente et le FAR diminue",
        "Le FRR diminue mais le FAR augmente",
        "Le CER diminue mécaniquement",
        "Le temps d'enrôlement augmente"
      ],
      reponse: 1,
      explication:
        "Diminuer la sensibilité réduit les faux rejets (erreurs de type 1, FRR) — les employés légitimes passent plus facilement — mais augmente les fausses acceptations (erreurs de type 2, FAR) : des imposteurs pourront être acceptés. C'est un arbitrage acceptable pour une cafétéria, pas pour un laboratoire sensible. Le CER est une caractéristique intrinsèque du système, qui ne change pas avec le réglage, et l'enrôlement n'est pas concerné.",
      difficulte: 1
    },
    {
      q: "Un système d'authentification continue analyse la dynamique de frappe (keystroke dynamics) de l'utilisateur pendant toute la session. À quel type de facteur cette technique appartient-elle ?",
      choix: [
        "Something you know",
        "Something you have",
        "Something you do (biométrie comportementale)",
        "Somewhere you are"
      ],
      reponse: 2,
      explication:
        "La dynamique de frappe — rythme, durée d'appui, temps entre les touches — est une biométrie comportementale, classée 'something you do'. Elle permet notamment l'authentification continue pour détecter qu'un imposteur a pris la place de l'utilisateur en cours de session. Ce n'est ni une connaissance, ni un objet possédé, ni une localisation.",
      difficulte: 1
    },
    {
      q: "Un attaquant a extrait le hash du compte krbtgt d'un domaine Active Directory et forge désormais des TGT valides pour n'importe quel utilisateur. Comment s'appelle cette attaque et quelle est la remédiation reconnue ?",
      choix: [
        "Silver ticket ; réinitialiser le mot de passe du compte de service concerné",
        "Golden ticket ; réinitialiser deux fois le mot de passe du compte krbtgt",
        "Kerberoasting ; allonger les mots de passe des comptes de service",
        "Pass-the-ticket ; bloquer le port 88"
      ],
      reponse: 1,
      explication:
        "Avec le hash du compte krbtgt (qui signe et chiffre tous les TGT), l'attaquant forge des golden tickets : des TGT valides pour n'importe quel principal, avec la durée de vie de son choix — un contrôle quasi total du domaine. La remédiation exige de réinitialiser le mot de passe de krbtgt deux fois (à cause de l'historique de mots de passe conservé pour la continuité), en plus de l'éradication de l'attaquant. Le silver ticket ne forge que des service tickets pour un service précis, le Kerberoasting casse des mots de passe hors ligne, et bloquer le port 88 paralyserait le domaine.",
      difficulte: 3
    },
    {
      q: "Quelle est la différence ESSENTIELLE entre une attaque golden ticket et une attaque silver ticket dans Kerberos ?",
      choix: [
        "Le golden ticket vise RADIUS, le silver ticket vise Kerberos",
        "Le golden ticket forge des TGT avec le hash de krbtgt ; le silver ticket forge des service tickets avec le hash d'un compte de service, sans contacter le KDC",
        "Le silver ticket donne plus de privilèges que le golden ticket",
        "Le golden ticket ne fonctionne que si la pré-authentification est désactivée"
      ],
      reponse: 1,
      explication:
        "Le golden ticket exploite le hash du compte krbtgt pour forger des TGT donnant accès à tout le domaine. Le silver ticket, plus discret mais plus limité, exploite le hash d'un compte de service pour forger directement un service ticket vers CE service, sans jamais dialoguer avec le KDC — ce qui le rend difficile à détecter dans les journaux du contrôleur de domaine. Le silver ticket est donc moins puissant, pas plus. La pré-authentification désactivée concerne l'AS-REP roasting, pas le golden ticket.",
      difficulte: 3
    },
    {
      q: "Lors d'un audit Active Directory, vous découvrez des comptes configurés avec l'option « Do not require Kerberos preauthentication ». Quelle attaque ces comptes rendent-ils possible ?",
      choix: [
        "AS-REP roasting : obtenir une réponse chiffrée avec le hash du mot de passe et la casser hors ligne",
        "Golden ticket : forger des TGT arbitraires",
        "Pass-the-hash : rejouer le hash NTLM sur d'autres machines",
        "Overpass-the-hash : convertir un hash en TGT"
      ],
      reponse: 0,
      explication:
        "Sans pré-authentification, n'importe qui peut demander à l'AS une réponse (AS-REP) pour ce compte : une partie de cette réponse est chiffrée avec une clé dérivée du mot de passe de l'utilisateur, ce qui permet une attaque par force brute hors ligne — c'est l'AS-REP roasting. La pré-authentification exige justement de prouver la connaissance du mot de passe (horodatage chiffré) AVANT toute réponse du KDC. Les trois autres attaques existent mais ne dépendent pas de cette option.",
      difficulte: 3
    },
    {
      q: "Outre le SSO, quel service de sécurité Kerberos fournit-il nativement entre le client et le serveur de ressources ?",
      choix: [
        "La non-répudiation par signature numérique",
        "L'authentification mutuelle : le client prouve son identité au service, et le service peut prouver la sienne au client",
        "Le chiffrement de bout en bout de toutes les données applicatives",
        "La haute disponibilité du KDC"
      ],
      reponse: 1,
      explication:
        "Kerberos offre l'authentification mutuelle : grâce aux clés de session partagées via le KDC, le client s'authentifie auprès du service et peut exiger que le service renvoie une preuve (l'horodatage chiffré avec la clé de session), démontrant qu'il détient la clé attendue — parade contre l'usurpation de serveur. Kerberos utilise la cryptographie symétrique, donc pas de non-répudiation (qui exige des signatures asymétriques) ; il protège ses échanges de tickets mais ne chiffre pas automatiquement tout le trafic applicatif ; et le KDC reste un point unique de défaillance à redonder soi-même.",
      difficulte: 3
    },
    {
      q: "Quel est le PRINCIPAL point faible architectural de Kerberos qu'un concepteur doit compenser ?",
      choix: [
        "L'absence totale de chiffrement des tickets",
        "Le KDC concentre toutes les clés secrètes et constitue un point unique de défaillance et de compromission",
        "L'impossibilité de fonctionner avec Active Directory",
        "L'obligation d'utiliser des certificats X.509 pour chaque utilisateur"
      ],
      reponse: 1,
      explication:
        "Le KDC détient les clés secrètes de tous les principals et délivre tous les tickets : sa panne bloque toute authentification (single point of failure) et sa compromission livre le domaine entier (cf. golden ticket). On le compense par la redondance, un durcissement maximal et une surveillance renforcée. Les tickets sont bien chiffrés (AES en Kerberos v5), Active Directory repose précisément sur Kerberos, et Kerberos utilise la cryptographie symétrique, pas des certificats par utilisateur.",
      difficulte: 2
    },
    {
      q: "Votre entreprise veut offrir aux employés un SSO navigateur vers une dizaine d'applications SaaS d'entreprise (paie, CRM, RH), l'annuaire interne restant la source d'autorité. Quel standard est le PLUS classiquement déployé pour ce scénario ?",
      choix: [
        "OAuth 2.0 sans OIDC",
        "SAML 2.0, l'IdP interne émettant des assertions vers chaque SaaS (SP)",
        "Kerberos, en exposant le KDC sur Internet",
        "RADIUS avec un portail captif"
      ],
      reponse: 1,
      explication:
        "Le SSO web d'entreprise vers des SaaS est le cas d'usage historique de SAML 2.0 : l'IdP interne authentifie l'employé puis transmet au fournisseur de service une assertion signée contenant identité et attributs. OAuth 2.0 seul fait de la délégation d'autorisation, pas de l'authentification ; exposer un KDC Kerberos sur Internet est une hérésie de sécurité ; RADIUS sert au contrôle d'accès réseau, pas au SSO applicatif web. Notez qu'OIDC est aussi possible pour ce besoin, mais il n'est pas proposé ici.",
      difficulte: 2
    },
    {
      q: "Une application de gestion de photos demande l'autorisation d'accéder aux fichiers stockés dans votre drive cloud, sans jamais connaître votre mot de passe. Quel protocole réalise EXACTEMENT cette fonction ?",
      choix: [
        "SAML 2.0, via une assertion d'attributs",
        "OAuth 2.0 : le serveur d'autorisation délivre un access token à portée limitée",
        "OIDC, via l'ID token",
        "SCIM, via une API REST"
      ],
      reponse: 1,
      explication:
        "C'est la délégation d'autorisation, cœur d'OAuth 2.0 : l'utilisateur (resource owner) consent, le serveur d'autorisation émet un access token à portée (scope) limitée, et l'application (client) l'utilise auprès du serveur de ressources — le mot de passe n'est jamais partagé avec l'application tierce. L'ID token OIDC prouve une identité, il ne donne pas accès à des ressources ; SAML fait du SSO web ; SCIM fait du provisioning de comptes.",
      difficulte: 2
    },
    {
      q: "Pour une application mobile native qui propose « Se connecter avec votre compte d'entreprise », quelle combinaison est aujourd'hui recommandée ?",
      choix: [
        "OAuth 2.0 implicit flow, optimisé pour les clients publics",
        "OIDC avec authorization code flow et PKCE",
        "SAML 2.0 avec artifact binding",
        "Resource Owner Password Credentials : l'app collecte le mot de passe et le transmet"
      ],
      reponse: 1,
      explication:
        "Pour les clients publics (applications mobiles, SPA) incapables de garder un secret, la recommandation actuelle est OIDC sur le flux authorization code renforcé par PKCE (Proof Key for Code Exchange), qui empêche l'interception du code d'autorisation. L'implicit flow est déprécié (tokens exposés dans l'URL), SAML est peu adapté aux applications natives, et le flux ROPC — où l'application manipule directement le mot de passe — contredit le principe même de la délégation et est déconseillé.",
      difficulte: 3
    },
    {
      q: "Dans une fédération SAML, quelle entité VÉRIFIE les identifiants de l'utilisateur, et quelle entité CONSOMME l'assertion pour ouvrir la session ?",
      choix: [
        "Le Service Provider vérifie ; l'Identity Provider consomme",
        "L'Identity Provider authentifie l'utilisateur ; le Service Provider consomme l'assertion",
        "Le KDC authentifie ; le TGS consomme",
        "Le client authentifie ; le serveur d'autorisation consomme"
      ],
      reponse: 1,
      explication:
        "Dans SAML, l'Identity Provider (IdP) détient les comptes et vérifie les identifiants, puis émet une assertion signée ; le Service Provider (SP) fait confiance à cette assertion, la valide (signature, audience, durée) et ouvre la session locale sans jamais voir le mot de passe. La réponse A inverse les rôles, la C décrit Kerberos, et la D mélange les rôles OAuth.",
      difficulte: 1
    },
    {
      q: "Dans la terminologie OAuth 2.0, votre application de calendrier demande l'accès aux contacts stockés chez un fournisseur cloud, avec votre accord. Qui est le « client » et qui est le « resource owner » ?",
      choix: [
        "Le client est le fournisseur cloud ; le resource owner est l'application",
        "Le client est l'application de calendrier ; le resource owner est l'utilisateur",
        "Le client est l'utilisateur ; le resource owner est le serveur d'autorisation",
        "Le client et le resource owner désignent la même entité"
      ],
      reponse: 1,
      explication:
        "En OAuth 2.0, le resource owner est l'utilisateur qui possède les données et donne son consentement ; le client est l'application tierce qui demande l'accès ; le serveur d'autorisation émet les tokens après consentement ; et le serveur de ressources héberge les données et accepte les access tokens. Bien distinguer ces quatre rôles est indispensable pour analyser les flux OAuth à l'examen.",
      difficulte: 1
    },
    {
      q: "Un consultant sécurité déconseille le flux OAuth « implicit » pour votre nouvelle SPA. Quelle est la raison PRINCIPALE ?",
      choix: [
        "Il est trop lent car il exige deux allers-retours supplémentaires",
        "L'access token transite par l'URL du navigateur, où il peut fuiter (historique, referrer, scripts)",
        "Il ne fonctionne pas avec les serveurs d'autorisation modernes",
        "Il impose un secret client impossible à stocker"
      ],
      reponse: 1,
      explication:
        "Dans le flux implicit, l'access token est retourné directement dans le fragment de l'URL de redirection : il s'expose à l'historique du navigateur, aux en-têtes referrer et aux scripts tiers, sans possibilité d'authentifier le client. Les bonnes pratiques OAuth 2.0 actuelles (et OAuth 2.1) le remplacent par l'authorization code flow avec PKCE, qui ne fait transiter qu'un code à usage unique. Ce n'est ni une question de performance ni de compatibilité, et l'implicit flow a justement été conçu pour les clients SANS secret.",
      difficulte: 3
    },
    {
      q: "Un utilisateur exécute par mégarde un cheval de Troie qui partage silencieusement ses documents avec un attaquant, en utilisant les propres permissions de l'utilisateur. Quel modèle de contrôle d'accès est INTRINSÈQUEMENT vulnérable à ce scénario ?",
      choix: [
        "MAC, car les labels peuvent être modifiés par le malware",
        "DAC, car tout programme exécuté hérite des droits du propriétaire, y compris celui de re-partager",
        "RBAC, car les rôles sont trop larges",
        "ABAC, car les attributs sont dynamiques"
      ],
      reponse: 1,
      explication:
        "C'est la faiblesse classique du DAC face aux chevaux de Troie : un programme s'exécute avec les droits de l'utilisateur, et comme le propriétaire peut re-partager ses objets à discrétion, le malware le peut aussi. Le MAC contre précisément ce risque : les labels sont imposés par le système et ni l'utilisateur ni ses programmes ne peuvent déclasser une information ou étendre les accès. RBAC et ABAC centralisent les décisions et ne donnent pas ce pouvoir discrétionnaire au propriétaire.",
      difficulte: 3
    },
    {
      q: "Un système militaire applique des étiquettes (Secret, Très Secret) aux documents et aux utilisateurs ; un analyste habilité Secret ne peut pas lire un document Très Secret, même si son collègue propriétaire du document le souhaite. Quel modèle est en place ?",
      choix: [
        "DAC, avec des ACL renforcées",
        "MAC : le système impose la politique via les labels, le propriétaire n'a pas voix au chapitre",
        "RBAC hiérarchique",
        "Risk-based access control"
      ],
      reponse: 1,
      explication:
        "Deux indices signent le MAC : les labels de classification appliqués aux sujets et aux objets, et l'impossibilité pour le propriétaire de passer outre — la politique est imposée par le système (nondiscretionary, lattice-based). C'est exactement l'inverse du DAC. Le RBAC hiérarchique organise des rôles, pas des niveaux de classification avec dominance, et le risk-based évalue le contexte, pas des habilitations.",
      difficulte: 1
    },
    {
      q: "Votre déploiement RBAC compte désormais 900 rôles pour 1 100 employés, à force de créer un rôle par exception (par projet, par site, par horaire). Comment s'appelle ce phénomène et quelle évolution est la PLUS pertinente ?",
      choix: [
        "Privilege creep ; lancer des revues d'accès",
        "Role explosion ; évoluer vers l'ABAC, qui exprime les exceptions par des attributs et non par de nouveaux rôles",
        "Toxic combination ; appliquer la separation of duties",
        "Roles mining ; supprimer tous les rôles inutilisés"
      ],
      reponse: 1,
      explication:
        "Quand chaque combinaison de contexte devient un rôle, on subit la 'role explosion' : le RBAC perd son avantage de simplicité administrative. L'ABAC résout élégamment le problème en exprimant les conditions (projet, site, horaire, appareil) comme des attributs de politiques dynamiques, au lieu de multiplier les rôles statiques. Le privilege creep est l'accumulation de droits par un individu, la toxic combination un cumul de droits incompatibles, et le role mining une technique de découverte de rôles — aucun ne décrit la prolifération de rôles.",
      difficulte: 2
    },
    {
      q: "Vous devez implémenter la politique suivante : « Un prestataire externe ne peut accéder au dépôt de code QUE depuis un poste géré par l'entreprise, pendant les heures ouvrées, et si son contrat est actif dans l'outil RH ». Quel mécanisme d'autorisation choisir ?",
      choix: [
        "RBAC avec un rôle 'prestataire'",
        "ABAC : la politique combine des attributs du sujet, de l'environnement et une donnée RH évaluée dynamiquement",
        "DAC : le responsable du dépôt gère les accès",
        "MAC avec un label 'prestataire'"
      ],
      reponse: 1,
      explication:
        "La règle mêle des attributs du sujet (statut contractuel issu de la RH), de l'environnement (heures ouvrées, poste géré) et de la ressource (le dépôt) : c'est la définition de l'ABAC, où un PDP évalue dynamiquement ces attributs à chaque demande. Un simple rôle RBAC ne capture ni l'horaire ni l'état du poste ni la fin de contrat en temps réel ; le DAC repose sur des décisions manuelles du propriétaire ; le MAC classe des niveaux de sensibilité, pas des conditions contextuelles.",
      difficulte: 2
    },
    {
      q: "Un pare-feu applique la même liste de règles à tous les paquets, quel que soit l'utilisateur, et termine par un refus implicite. Quel modèle de contrôle d'accès illustre-t-il ?",
      choix: [
        "Rule-based access control avec implicit deny",
        "RBAC, car les règles forment des rôles",
        "DAC, car l'administrateur possède le pare-feu",
        "ABAC, car l'adresse IP est un attribut"
      ],
      reponse: 0,
      explication:
        "Le rule-based access control applique des règles globales identiques pour tous les sujets, sans considération d'identité ou de rôle — le pare-feu en est l'exemple canonique, avec l'implicit deny (tout ce qui n'est pas explicitement autorisé est refusé) en règle finale. Ce ne sont pas des rôles métier (RBAC), le propriétaire n'accorde pas d'accès discrétionnaires (DAC), et même si une IP peut être vue comme un attribut, une ACL de pare-feu statique n'est pas un moteur de politiques ABAC.",
      difficulte: 1
    },
    {
      q: "Quel est l'objectif FINAL d'une stratégie d'accès Just-In-Time (JIT) pour les administrateurs ?",
      choix: [
        "Accélérer la connexion des administrateurs",
        "Tendre vers le zéro privilège permanent : les droits élevés n'existent que pendant la tâche, puis disparaissent",
        "Supprimer le besoin de MFA pour les comptes à privilèges",
        "Remplacer les revues d'accès périodiques"
      ],
      reponse: 1,
      explication:
        "Le JIT vise le 'zero standing privileges' : au lieu de comptes administrateurs dotés de droits permanents — cibles idéales en cas de vol d'identifiants —, les privilèges sont accordés à la demande, pour une durée limitée, souvent après approbation, puis automatiquement retirés. La fenêtre d'attaque se réduit drastiquement. Le JIT complète le MFA et les revues d'accès, il ne les remplace pas, et son but n'est pas la commodité.",
      difficulte: 2
    },
    {
      q: "Votre solution PAM crée un compte administrateur éphémère à la demande, valable une heure, puis le supprime automatiquement. Quelle approche est mise en œuvre ?",
      choix: [
        "Le password vaulting classique",
        "Le provisioning JIT de comptes éphémères (broker and remove)",
        "La rotation de secrets à intervalle fixe",
        "La délégation Kerberos contrainte"
      ],
      reponse: 1,
      explication:
        "Créer un compte à privilèges à la volée pour une tâche, puis le détruire, est une forme de JIT dite 'broker and remove' (ou comptes éphémères) : aucun compte privilégié permanent n'existe entre deux usages, ce qui élimine les privilèges dormants. Le vaulting conserve des comptes permanents dont il protège les mots de passe ; la rotation change des secrets de comptes qui, eux, persistent ; la délégation Kerberos contrainte est un mécanisme technique sans rapport avec le cycle de vie des comptes.",
      difficulte: 2
    },
    {
      q: "Comment une organisation devrait-elle gérer son compte « break-glass » d'administration d'urgence ?",
      choix: [
        "Le supprimer : il contredit le principe du moindre privilège",
        "Identifiants scellés en coffre, MFA exclu si l'IdP peut être en panne, alertes et audit systématiques à chaque usage, rotation après chaque utilisation",
        "Le confier au RSSI qui en mémorise le mot de passe",
        "L'utiliser au quotidien pour éviter que le mot de passe n'expire"
      ],
      reponse: 1,
      explication:
        "Le compte break-glass sert quand tout le reste est en panne (IdP, MFA, PAM) : ses identifiants sont conservés hors ligne sous scellé, son usage doit déclencher une alerte immédiate et un audit complet, et ses secrets sont changés après chaque utilisation. Le lier au MFA de l'IdP le rendrait inutilisable précisément quand on en a besoin. Le supprimer expose à une perte totale d'administration ; le confier à la mémoire d'une personne crée un point unique de défaillance humain ; l'utiliser au quotidien détruit sa valeur d'exception et noie les alertes.",
      difficulte: 3
    },
    {
      q: "Trois administrateurs de bases de données utilisent le même compte 'sa'. Quelle configuration PAM restaure le MIEUX l'accountability sans supprimer le compte ?",
      choix: [
        "Communiquer le mot de passe par messagerie chiffrée",
        "Coffre-fort PAM : chaque administrateur s'authentifie individuellement (avec MFA), obtient le mot de passe ou une session injectée, la session est enregistrée et le mot de passe est changé après chaque utilisation",
        "Changer le mot de passe chaque mois et l'afficher dans la salle serveur",
        "Interdire l'usage du compte et attendre la refonte de l'application"
      ],
      reponse: 1,
      explication:
        "Le check-out via un coffre PAM rattache chaque usage du compte partagé à une identité individuelle authentifiée : qui a pris le mot de passe, quand, pour quelle session (enregistrée), et la rotation immédiate après restitution empêche la réutilisation hors du circuit. L'accountability est restaurée même si le compte technique reste partagé. Les réponses A et C perpétuent l'anonymat, et la D ignore le besoin opérationnel immédiat.",
      difficulte: 2
    },
    {
      q: "Pour une application bancaire en ligne, quelle combinaison de contrôles de session est la PLUS appropriée ?",
      choix: [
        "Session illimitée tant que l'utilisateur est actif, pour le confort",
        "Timeout d'inactivité court, durée de session absolue maximale, et ré-authentification avant toute opération sensible",
        "Uniquement un timeout d'inactivité de 24 heures",
        "Déconnexion uniquement à la fermeture du navigateur"
      ],
      reponse: 1,
      explication:
        "La gestion de session robuste combine trois contrôles : un timeout d'inactivité court (l'utilisateur qui s'éloigne est déconnecté), une durée de vie absolue de la session (même active, elle expire et limite l'exploitation d'un jeton volé), et la ré-authentification (step-up) avant les opérations sensibles comme un virement. Les autres options laissent des sessions exploitables indéfiniment — une session détournée resterait valide tant que l'attaquant génère de l'activité.",
      difficulte: 2
    },
    {
      q: "Un attaquant a volé le cookie de session d'un utilisateur via un script malveillant et rejoue la session depuis son propre poste. Quelles mesures auraient le MIEUX limité cette attaque ?",
      choix: [
        "Allonger la durée de vie du cookie pour éviter les reconnexions",
        "Attributs Secure et HttpOnly sur le cookie, régénération de l'identifiant de session après connexion, et liaison de la session au contexte du client",
        "Stocker l'identifiant de session dans l'URL",
        "Utiliser le même identifiant de session avant et après l'authentification"
      ],
      reponse: 1,
      explication:
        "HttpOnly rend le cookie inaccessible aux scripts (contre le vol par XSS), Secure impose HTTPS (contre l'interception), la régénération de l'ID à la connexion contre la fixation de session, et la liaison au contexte (empreinte de l'appareil, adresse, ré-évaluation continue) rend le rejeu depuis un autre poste détectable. Les réponses A et D aggravent le risque, et placer l'ID en URL l'expose dans les journaux, l'historique et les referrers — l'exact contraire d'une bonne pratique.",
      difficulte: 2
    },
    {
      q: "Votre entreprise ouvre son portail fournisseurs aux 2 000 employés d'un partenaire. Le partenaire exige que ses employés utilisent leurs identifiants internes existants et que les départs soient immédiatement répercutés. Quelle architecture répond le MIEUX à ces exigences ?",
      choix: [
        "Créer 2 000 comptes locaux et envoyer les mots de passe au partenaire",
        "Fédération B2B : le partenaire reste l'IdP de ses employés, votre portail agit en SP et fait confiance à ses assertions",
        "Un compte générique partagé 'partenaire' avec un mot de passe fort",
        "Synchroniser une copie de l'annuaire du partenaire chaque trimestre"
      ],
      reponse: 1,
      explication:
        "La fédération B2B répond aux deux exigences : les employés du partenaire s'authentifient auprès de LEUR IdP avec leurs identifiants habituels (jamais transmis à votre organisation), et dès qu'un compte est désactivé chez le partenaire, l'accès au portail cesse — le deprovisioning reste là où l'information existe, chez l'employeur. Les comptes locaux créent une charge de gestion et un risque de comptes orphelins, le compte partagé détruit l'accountability, et une synchronisation trimestrielle laisse des accès actifs des semaines après un départ.",
      difficulte: 2
    },
    {
      q: "Dans une fédération avec un partenaire, quel document ou mécanisme établit les exigences mutuelles (niveaux d'assurance, attributs échangés, obligations de sécurité) AVANT l'échange technique d'assertions ?",
      choix: [
        "Le certificat TLS du Service Provider",
        "Un accord de fédération (trust agreement) négocié entre les organisations, complété par l'échange de métadonnées",
        "Le fichier de zone DNS",
        "La politique de mots de passe locale"
      ],
      reponse: 1,
      explication:
        "La fédération est d'abord une relation de confiance organisationnelle : un accord définit les niveaux d'assurance d'authentification exigés (par ex. MFA obligatoire), les attributs transmis, les responsabilités en cas d'incident et les obligations de deprovisioning ; l'échange de métadonnées SAML/OIDC (certificats de signature, endpoints) en est la traduction technique. Le certificat TLS sécurise le canal mais ne définit aucune exigence mutuelle, et les réponses C et D sont hors sujet. À l'examen, pensez gouvernance avant technique.",
      difficulte: 3
    },
    {
      q: "Des millions d'identifiants issus d'une fuite chez un site tiers sont rejoués tels quels contre votre portail, avec un taux de réussite de 1 %. Puis un autre attaquant essaie « Printemps2026! » sur des milliers de vos comptes. Comment nommer ces DEUX attaques, dans l'ordre ?",
      choix: [
        "Password spraying, puis credential stuffing",
        "Credential stuffing, puis password spraying",
        "Brute force, puis rainbow table",
        "Phishing, puis MFA fatigue"
      ],
      reponse: 1,
      explication:
        "Le credential stuffing rejoue des couples identifiant/mot de passe volés ailleurs, en pariant sur la réutilisation des mots de passe entre sites. Le password spraying inverse la logique : un seul mot de passe probable, essayé sur un grand nombre de comptes, pour rester sous les seuils de verrouillage par compte. Les parades diffèrent : MFA et vérification des mots de passe contre les bases de fuites pour le premier ; détection transversale des échecs et bannissement des mots de passe communs pour le second.",
      difficulte: 2
    },
    {
      q: "Pourquoi le password spraying échappe-t-il souvent aux politiques classiques de verrouillage de compte, et quel contrôle le détecte le MIEUX ?",
      choix: [
        "Il utilise des mots de passe chiffrés ; seul un HSM le détecte",
        "Il ne fait qu'un ou deux essais par compte, sous le seuil de verrouillage ; une détection centralisée des échecs sur l'ensemble des comptes (et depuis les mêmes sources) le révèle",
        "Il passe par le protocole Kerberos, invisible dans les journaux",
        "Il ne génère aucun échec d'authentification"
      ],
      reponse: 1,
      explication:
        "Le verrouillage de compte compte les échecs PAR COMPTE ; le spraying distribue les essais sur des milliers de comptes avec un ou deux mots de passe, restant sous chaque seuil individuel. La détection doit donc être transversale : un pic d'échecs répartis sur de nombreux comptes, souvent depuis les mêmes adresses ou avec le même mot de passe, visible dans un SIEM. Les réponses A et C sont techniquement fausses et l'attaque génère bien des échecs — mais dispersés.",
      difficulte: 3
    },
    {
      q: "Quelle exigence de gouvernance est la PLUS appropriée pour les revues d'accès (access reviews) des comptes à privilèges par rapport aux comptes standard ?",
      choix: [
        "Les mêmes revues annuelles pour tous les comptes, par équité",
        "Des revues plus fréquentes et plus approfondies pour les comptes à privilèges, menées par les managers ou propriétaires de ressources, avec retrait immédiat des droits non justifiés",
        "Aucune revue pour les comptes à privilèges, car le PAM suffit",
        "Des revues uniquement lors du départ de l'employé"
      ],
      reponse: 1,
      explication:
        "Le risque porté par un compte à privilèges est démesuré par rapport à un compte standard : les revues doivent y être plus fréquentes (souvent trimestrielles, contre annuelles pour les comptes standard), vérifier la justification métier de chaque droit, et aboutir au retrait immédiat des accès injustifiés — c'est le contrôle qui détecte le privilege creep et les comptes orphelins. Le PAM protège l'usage des comptes mais ne juge pas de la légitimité des droits ; attendre le départ laisse des années d'exposition.",
      difficulte: 1
    },
    {
      q: "Un développeur quitte l'entreprise un vendredi en mauvais termes. Concernant ses accès, que devriez-vous faire EN PREMIER ?",
      choix: [
        "Supprimer immédiatement son compte et toutes ses données",
        "Désactiver son compte dès l'annonce du départ, avant même l'entretien de sortie",
        "Attendre la revue d'accès trimestrielle",
        "Transférer son compte à son remplaçant pour assurer la continuité"
      ],
      reponse: 1,
      explication:
        "Pour un départ, surtout conflictuel, on DÉSACTIVE le compte immédiatement — idéalement pendant que la personne est en entretien de sortie — pour couper tout accès sans détruire les données, les clés de chiffrement ni les éléments nécessaires aux enquêtes ; la suppression définitive intervient plus tard, selon la politique de rétention. Supprimer d'emblée fait perdre des données et des preuves ; attendre la revue trimestrielle laisse une fenêtre d'attaque béante ; transférer un compte nominatif à un tiers détruit l'accountability.",
      difficulte: 1
    }
  ],

  // ================================================================
  // QUIZ EN — questions d'entraînement en anglais, style examen CISSP CAT
  // (q et choix en anglais ; explication en français)
  // ================================================================
  quizEn: [
    {
      q: "A security administrator reviews logs and finds that actions performed on a critical server cannot be traced to any specific individual because operators share a generic account. Which access control principle is MOST directly undermined?",
      choix: ["Least privilege", "Accountability", "Separation of duties", "Defense in depth"],
      reponse: 1,
      explication:
        "L'accountability exige de pouvoir attribuer chaque action à un individu identifié de manière unique et authentifié. Un compte générique partagé brise cette chaîne : même avec des journaux complets, on ne sait pas QUI a agi. Le least privilege concerne l'étendue des droits, la separation of duties la répartition des tâches sensibles, et la defense in depth la superposition de contrôles — aucun n'est directement en cause ici.",
      difficulte: 1
    },
    {
      q: "Which of the following BEST describes the difference between identification and authentication?",
      choix: [
        "Identification proves an identity; authentication claims it",
        "Identification is claiming an identity; authentication is proving that claim",
        "Identification grants access rights; authentication logs user actions",
        "They are synonymous terms in modern IAM systems"
      ],
      reponse: 1,
      explication:
        "L'identification est la déclaration d'une identité (saisir un nom d'utilisateur, présenter un badge) ; l'authentification est la preuve de cette déclaration (mot de passe, biométrie, token). La réponse A inverse les définitions, la C confond avec l'autorisation et l'audit, et les deux termes ne sont jamais synonymes à l'examen CISSP.",
      difficulte: 1
    },
    {
      q: "A user authenticates with a password and then approves a push notification on a registered smartphone. Which factor types are being combined?",
      choix: [
        "Two instances of something you know",
        "Something you know and something you have",
        "Something you know and something you are",
        "Something you have and somewhere you are"
      ],
      reponse: 1,
      explication:
        "Le mot de passe est un facteur de connaissance (something you know) ; la notification push validée sur un smartphone enrôlé prouve la possession de cet appareil (something you have). C'est donc un vrai MFA à deux types de facteurs. Aucune biométrie (something you are) ni géolocalisation n'intervient dans ce scénario.",
      difficulte: 1
    },
    {
      q: "An organization deploying biometric authentication for a high-security vault should tune the system to achieve which of the following?",
      choix: [
        "The lowest possible False Rejection Rate",
        "A False Acceptance Rate as low as possible, even at the cost of more false rejections",
        "Equal FAR and FRR at all times",
        "The highest possible throughput"
      ],
      reponse: 1,
      explication:
        "Pour un coffre de haute sécurité, accepter un imposteur (FAR, erreur de type 2) est bien plus grave que rejeter un utilisateur légitime (FRR, erreur de type 1). On augmente donc la sensibilité pour minimiser le FAR, en acceptant davantage de faux rejets. Le CER (point d'égalité FAR/FRR) sert à comparer la précision des systèmes, pas à régler un site sensible, et le débit est un critère de confort, pas de sécurité.",
      difficulte: 2
    },
    {
      q: "When comparing biometric systems from different vendors, which single metric is MOST useful?",
      choix: [
        "False Acceptance Rate at maximum sensitivity",
        "Crossover Error Rate (CER)",
        "Enrollment time",
        "Template storage size"
      ],
      reponse: 1,
      explication:
        "Le CER — le point où FAR et FRR sont égaux — est la mesure standard pour comparer objectivement la précision de systèmes biométriques : plus il est bas, plus le système est précis, indépendamment du réglage de sensibilité choisi ensuite. Le FAR à sensibilité maximale ne reflète qu'un point extrême de la courbe, et le temps d'enrôlement ou la taille des gabarits sont des critères opérationnels secondaires.",
      difficulte: 1
    },
    {
      q: "Which NIST SP 800-63B Authenticator Assurance Level requires multi-factor authentication using a hardware-based authenticator with verifier impersonation resistance?",
      choix: ["AAL1", "AAL2", "AAL3", "IAL3"],
      reponse: 2,
      explication:
        "AAL3 est le niveau le plus élevé d'assurance d'authentification : il exige un authentificateur matériel, du MFA et la résistance à l'usurpation du vérifieur (phishing resistance), typiquement une clé FIDO2 matérielle. AAL1 accepte un facteur unique, AAL2 exige le MFA sans imposer le matériel, et IAL3 concerne l'identity proofing (preuve d'identité à l'enrôlement), pas l'authentification.",
      difficulte: 2
    },
    {
      q: "During a Kerberos logon, which component issues the Ticket-Granting Ticket (TGT)?",
      choix: [
        "The Ticket-Granting Service after validating a service ticket",
        "The Authentication Service component of the KDC",
        "The resource server the user wants to access",
        "The client workstation itself"
      ],
      reponse: 1,
      explication:
        "C'est l'Authentication Service (AS) du KDC qui vérifie l'authentification initiale de l'utilisateur et délivre le TGT, chiffré de sorte que seul le détenteur du bon mot de passe puisse exploiter la clé de session associée. Le TGS intervient ensuite : il vérifie le TGT et délivre les service tickets. Ni le serveur de ressources ni le poste client n'émettent de tickets.",
      difficulte: 2
    },
    {
      q: "Users in a single Active Directory site report authentication failures shortly after a virtualization snapshot rollback on a domain controller. What is the MOST likely cause?",
      choix: [
        "Expired TLS certificates on the domain controller",
        "Kerberos clock skew exceeding the allowed tolerance",
        "A corrupted LDAP schema",
        "RADIUS shared secret mismatch"
      ],
      reponse: 1,
      explication:
        "Un retour de snapshot ramène l'horloge du contrôleur de domaine en arrière ; or Kerberos horodate ses tickets et rejette par défaut toute dérive supérieure à la tolérance (classiquement cinq minutes) afin d'empêcher les attaques par rejeu. Le symptôme — échecs d'authentification massifs juste après un décalage temporel — signe le clock skew. Les certificats TLS, le schéma LDAP ou un secret RADIUS n'expliqueraient pas cette corrélation temporelle.",
      difficulte: 2
    },
    {
      q: "An attacker who has compromised the krbtgt account hash of a domain can perform which attack?",
      choix: [
        "Kerberoasting against service accounts",
        "Forging Golden Tickets granting arbitrary domain access",
        "AS-REP roasting against users without preauthentication",
        "Offline cracking of NTLM hashes"
      ],
      reponse: 1,
      explication:
        "Le compte krbtgt signe et chiffre tous les TGT du domaine : avec son hash, l'attaquant forge des golden tickets — des TGT parfaitement valides pour n'importe quelle identité, y compris des comptes inexistants, avec la durée de vie de son choix. Le Kerberoasting et l'AS-REP roasting ne nécessitent pas krbtgt (ils exploitent des service tickets ou l'absence de pré-authentification), et le cassage NTLM est une attaque distincte.",
      difficulte: 3
    },
    {
      q: "Which statement about Security Assertion Markup Language (SAML) 2.0 is TRUE?",
      choix: [
        "It is a JSON-based protocol maintained by the IETF",
        "It is an XML-based standard maintained by OASIS used to exchange authentication and authorization assertions",
        "It replaced OAuth 2.0 for API authorization",
        "It requires Kerberos as the underlying ticket system"
      ],
      reponse: 1,
      explication:
        "SAML 2.0 est un standard ouvert fondé sur XML, maintenu par l'OASIS, qui permet d'échanger des assertions d'authentification, d'attributs et d'autorisation entre un Identity Provider et un Service Provider — c'est le socle historique du SSO web fédéré. Il n'est ni JSON ni IETF (c'est OAuth qui est une RFC de l'IETF), il ne remplace pas OAuth (rôles différents) et n'a aucun lien avec Kerberos.",
      difficulte: 1
    },
    {
      q: "A company wants employees to sign in once to the corporate identity provider and then access dozens of third-party SaaS applications without re-entering credentials. Which technology BEST meets this requirement?",
      choix: [
        "TACACS+ command authorization",
        "Federated SSO using SAML or OIDC assertions/tokens",
        "Password synchronization across all SaaS providers",
        "Local accounts with a password manager"
      ],
      reponse: 1,
      explication:
        "Le besoin décrit est le SSO fédéré : l'IdP d'entreprise authentifie une fois, puis transmet des assertions SAML ou des jetons OIDC aux applications SaaS, qui ouvrent la session sans revoir les identifiants. La synchronisation de mots de passe multiplie les surfaces d'attaque et n'est pas du SSO ; un gestionnaire de mots de passe automatise la saisie mais reste de l'authentification répétée ; TACACS+ gère l'administration d'équipements réseau.",
      difficulte: 1
    },
    {
      q: "In the OAuth 2.0 framework, which entity issues access tokens after the resource owner grants consent?",
      choix: ["The resource server", "The authorization server", "The client application", "The user agent"],
      reponse: 1,
      explication:
        "Le serveur d'autorisation authentifie le resource owner, recueille son consentement puis émet les access tokens (et refresh tokens). Le serveur de ressources se contente de vérifier et d'accepter ces tokens pour servir les données ; le client les utilise mais ne les émet jamais ; le user agent (navigateur) n'est qu'un intermédiaire de transport.",
      difficulte: 1
    },
    {
      q: "What does OpenID Connect add on top of OAuth 2.0?",
      choix: [
        "Transport encryption for bearer tokens",
        "An identity layer with a signed ID token (JWT) that proves user authentication",
        "Automatic account provisioning across domains",
        "A replacement for TLS in mobile applications"
      ],
      reponse: 1,
      explication:
        "OIDC ajoute à OAuth 2.0 une couche d'AUTHENTIFICATION : l'ID token, un JWT signé contenant l'identité de l'utilisateur, l'IdP émetteur, l'heure et la méthode d'authentification. OAuth seul délègue des autorisations sans prouver l'identité. Le chiffrement du transport reste assuré par TLS (qu'OIDC ne remplace pas), et le provisioning inter-domaines relève de SCIM.",
      difficulte: 2
    },
    {
      q: "Which access control model relies on security labels assigned to both subjects and objects, with access decisions enforced by the system rather than the data owner?",
      choix: [
        "Discretionary Access Control",
        "Mandatory Access Control",
        "Role-Based Access Control",
        "Rule-Based Access Control"
      ],
      reponse: 1,
      explication:
        "Le MAC se définit par les labels de classification appliqués aux sujets (habilitations) et aux objets (classifications), l'accès étant imposé par le système selon la politique — le propriétaire n'a aucun pouvoir discrétionnaire. C'est le modèle des environnements militaires (lattice-based). Le DAC laisse le propriétaire décider, le RBAC passe par des rôles métier, et le rule-based applique des règles globales uniformes.",
      difficulte: 1
    },
    {
      q: "A hospital grants access to patient records based on the user's department, the sensitivity of the record, the time of day, and whether the workstation is inside the clinical network. Which access control model is being used?",
      choix: [
        "Role-Based Access Control",
        "Attribute-Based Access Control",
        "Discretionary Access Control",
        "Mandatory Access Control"
      ],
      reponse: 1,
      explication:
        "La décision combine des attributs du sujet (service), de l'objet (sensibilité du dossier), de l'environnement (heure, localisation réseau du poste) : c'est la signature de l'ABAC, où un moteur de politiques évalue dynamiquement ces attributs à chaque requête (souvent exprimées en XACML). Un RBAC pur ne considérerait que le rôle, sans le contexte ; le DAC dépendrait du propriétaire du dossier ; le MAC utiliserait des labels de classification imposés.",
      difficulte: 2
    },
    {
      q: "An organization with high staff turnover wants to minimize administrative effort when employees change positions. Which access control approach BEST achieves this?",
      choix: [
        "Granting permissions individually to each user account",
        "Assigning permissions to job-based roles and moving users between roles",
        "Letting data owners grant access on request",
        "Applying a single access rule set to all employees"
      ],
      reponse: 1,
      explication:
        "Le RBAC est conçu pour cela : les privilèges sont rattachés à des rôles alignés sur les fonctions ; lors d'une mutation, il suffit de retirer l'ancien rôle et d'assigner le nouveau — les anciens droits disparaissent automatiquement, ce qui prévient aussi le privilege creep. L'attribution individuelle (A) et le DAC (C) explosent en charge administrative et en erreurs, et une règle unique pour tous (D) ne reflète pas les différences de fonctions.",
      difficulte: 1
    },
    {
      q: "During a quarterly access review, an auditor finds that a financial analyst who transferred from accounts payable can both create vendors and approve payments to them. What is the PRIMARY concern?",
      choix: [
        "Password policy violation",
        "A toxic combination violating separation of duties, enabling potential fraud",
        "Excessive session duration",
        "Lack of encryption on financial data"
      ],
      reponse: 1,
      explication:
        "Créer un fournisseur ET approuver ses paiements est une combinaison toxique : une seule personne peut monter une fraude complète (fournisseur fictif, paiements approuvés par elle-même). C'est une violation de la separation of duties, souvent issue du privilege creep après une mutation — exactement ce que les revues d'accès doivent détecter, avec retrait immédiat des droits hérités de l'ancien poste. Les autres réponses sont hors sujet par rapport au risque décrit.",
      difficulte: 2
    },
    {
      q: "What is the PRIMARY security benefit of just-in-time (JIT) privileged access?",
      choix: [
        "Administrators no longer need MFA",
        "It eliminates standing privileges, shrinking the window during which stolen credentials grant elevated access",
        "It removes the need for privileged session logging",
        "It allows unlimited concurrent administrative sessions"
      ],
      reponse: 1,
      explication:
        "Le JIT supprime les privilèges permanents : les droits élevés sont accordés à la demande, pour une durée limitée et une tâche précise, puis retirés automatiquement. Des identifiants volés entre deux élévations ne donnent alors AUCUN privilège — la fenêtre d'attaque se réduit à la durée de la tâche. Le JIT ne dispense ni du MFA ni de l'enregistrement des sessions, qu'il complète au sein d'une solution PAM.",
      difficulte: 2
    },
    {
      q: "Which capability is a core function of a Privileged Access Management (PAM) solution?",
      choix: [
        "Scanning web applications for SQL injection",
        "Vaulting privileged credentials, rotating them, and recording privileged sessions",
        "Encrypting backup tapes",
        "Filtering outbound email for data loss"
      ],
      reponse: 1,
      explication:
        "Le cœur d'une solution PAM est la gestion des comptes à privilèges : coffre-fort d'identifiants (vaulting), rotation automatique des mots de passe (notamment après chaque check-out), courtage et enregistrement des sessions privilégiées, et élévation just-in-time. L'analyse applicative, le chiffrement de sauvegardes et le DLP de messagerie relèvent d'autres familles d'outils de sécurité.",
      difficulte: 1
    },
    {
      q: "A web application keeps users logged in indefinitely as long as the browser remains open. Which control BEST reduces the risk of session hijacking exploitation?",
      choix: [
        "Storing the session ID in the page URL for easy tracking",
        "Enforcing both an idle timeout and an absolute session lifetime with re-authentication",
        "Increasing cookie lifetime to one year",
        "Disabling TLS to simplify session inspection"
      ],
      reponse: 1,
      explication:
        "Une session sans expiration reste exploitable indéfiniment si son jeton est volé. Le duo timeout d'inactivité (déconnexion de l'utilisateur inactif) et durée de vie absolue (la session expire même active, forçant la ré-authentification) borne l'exploitation d'un jeton détourné. Mettre l'ID de session dans l'URL l'expose aux journaux et referrers, allonger la vie du cookie aggrave le risque, et désactiver TLS est une faute grave.",
      difficulte: 2
    },
    {
      q: "An attacker obtains a list of usernames and attempts the password \"Winter2026!\" against every account, staying below the account lockout threshold. What is this attack called?",
      choix: ["Credential stuffing", "Password spraying", "Rainbow table attack", "Pass-the-hash"],
      reponse: 1,
      explication:
        "Essayer UN mot de passe probable sur un grand nombre de comptes, en restant sous le seuil de verrouillage par compte, est du password spraying. Le credential stuffing rejoue des couples identifiant/mot de passe volés ailleurs ; les rainbow tables cassent des hashes hors ligne ; le pass-the-hash rejoue un hash NTLM sans connaître le mot de passe. La détection du spraying exige une corrélation transversale des échecs, pas un simple compteur par compte.",
      difficulte: 2
    },
    {
      q: "Which attack involves replaying username/password pairs stolen from one breached website against many other sites?",
      choix: ["Password spraying", "Credential stuffing", "Kerberoasting", "Session fixation"],
      reponse: 1,
      explication:
        "Le credential stuffing exploite la réutilisation des mots de passe : des couples identifiant/mot de passe issus d'une fuite sont rejoués en masse sur d'autres services. Les parades incluent le MFA, la vérification des mots de passe contre les bases de fuites connues et la détection d'automatisation. Le spraying utilise un mot de passe unique sur beaucoup de comptes, le Kerberoasting casse des tickets de service, et la fixation de session impose un ID de session connu de l'attaquant.",
      difficulte: 1
    },
    {
      q: "Why are FIDO2/WebAuthn authenticators considered phishing-resistant while TOTP codes are not?",
      choix: [
        "FIDO2 codes are longer than TOTP codes",
        "The FIDO2 signature is cryptographically bound to the legitimate site's origin, so a fake site cannot obtain a valid response, whereas a user can type a TOTP code into any site",
        "TOTP requires a network connection while FIDO2 does not",
        "FIDO2 encrypts the password before transmission"
      ],
      reponse: 1,
      explication:
        "La résistance au phishing de FIDO2 tient au 'origin binding' : le navigateur inclut l'origine du site dans le défi signé par la clé privée, qui ne quitte jamais l'authentificateur — un site de phishing, sur un autre domaine, ne peut pas obtenir de signature valide pour le site légitime. Un code TOTP, lui, est une simple suite de chiffres que la victime peut saisir sur un faux site, que l'attaquant relaie en temps réel (adversary-in-the-middle). Les autres réponses sont techniquement fausses.",
      difficulte: 3
    },
    {
      q: "An identity federation allows a partner's employees to access your procurement portal using their own corporate credentials. Who remains responsible for authenticating these users and deprovisioning them when they leave the partner company?",
      choix: [
        "Your organization, as the service provider",
        "The partner organization, acting as the identity provider",
        "A neutral third-party certificate authority",
        "Each individual user"
      ],
      reponse: 1,
      explication:
        "Dans une fédération B2B, le partenaire reste l'Identity Provider de ses employés : il les authentifie avec leurs identifiants internes et, dès qu'un employé part, la désactivation de son compte chez le partenaire coupe automatiquement l'accès fédéré à votre portail. C'est le grand avantage : le deprovisioning reste là où l'information de départ existe. Votre organisation (SP) consomme les assertions mais ne gère ni mots de passe ni cycle de vie des comptes du partenaire.",
      difficulte: 2
    },
    {
      q: "Which protocol is the modern REST/JSON-based standard for automating user account provisioning and deprovisioning across cloud applications?",
      choix: ["SPML", "SCIM", "SAML", "LDAP"],
      reponse: 1,
      explication:
        "SCIM (System for Cross-domain Identity Management) est le standard moderne de provisioning : API REST et objets JSON pour créer, mettre à jour et supprimer automatiquement les comptes dans les applications SaaS depuis l'annuaire central. SPML est son prédécesseur XML quasi abandonné ; SAML transporte des assertions d'authentification, pas des opérations de gestion de comptes ; LDAP est un protocole d'accès aux annuaires, pas un standard de synchronisation inter-domaines.",
      difficulte: 2
    },
    {
      q: "When an employee is terminated under hostile circumstances, what should the security team do FIRST regarding the employee's accounts?",
      choix: [
        "Delete all accounts and associated data immediately",
        "Disable the accounts immediately, ideally during the exit interview",
        "Wait for the next scheduled access review",
        "Reset the passwords and give them to the employee's manager"
      ],
      reponse: 1,
      explication:
        "La bonne pratique est de DÉSACTIVER immédiatement les comptes — idéalement pendant l'entretien de sortie — afin de couper tout accès sans détruire les données, clés de chiffrement ou preuves potentiellement nécessaires. La suppression définitive vient plus tard, selon la politique de rétention. Supprimer d'emblée fait perdre des éléments irremplaçables, attendre une revue planifiée laisse une fenêtre d'attaque, et donner les identifiants au manager brise l'accountability (mieux vaut des accès délégués tracés).",
      difficulte: 1
    },
    {
      q: "Which of the following BEST describes an access control matrix and its two derived views?",
      choix: [
        "A network diagram showing firewalls and routers",
        "A table of subjects and objects where each column is an object's ACL and each row is a subject's capability list",
        "A list of roles mapped to organizational units",
        "A lattice of security labels ordered by sensitivity"
      ],
      reponse: 1,
      explication:
        "La matrice de contrôle d'accès croise sujets (lignes) et objets (colonnes) : lue en colonne, elle donne l'ACL d'un objet (qui peut y accéder et comment) ; lue en ligne, elle donne la capability list d'un sujet (ce à quoi il peut accéder). Cette distinction colonne/ligne est un classique de l'examen. Le treillis de labels (D) décrit le MAC lattice-based, un autre concept.",
      difficulte: 2
    },
    {
      q: "A bank teller application only exposes menu options and data fields appropriate to the teller's job, hiding administrative functions entirely. Which access control technique is this?",
      choix: [
        "Content-dependent access control",
        "Constrained (restricted) user interface",
        "Context-dependent access control",
        "Capability-based security"
      ],
      reponse: 1,
      explication:
        "Une interface contrainte (constrained/restricted interface) limite ce que l'utilisateur peut voir et faire en masquant ou grisant les fonctions hors de son périmètre — l'application du guichetier n'affiche que ses opérations. Le content-dependent filtre selon le CONTENU des données (ex. une vue base de données masquant une colonne), le context-dependent selon le contexte de la demande (heure, séquence), et la sécurité par capabilities est un mécanisme de jetons d'accès, pas d'interface.",
      difficulte: 2
    },
    {
      q: "A risk-based authentication system prompts for additional verification only when a login originates from a new device in an unusual country. What is this pattern called?",
      choix: [
        "Static multi-factor authentication",
        "Adaptive (step-up) authentication driven by risk scoring",
        "Single sign-on with session persistence",
        "Certificate-based mutual TLS"
      ],
      reponse: 1,
      explication:
        "L'authentification adaptative évalue un score de risque contextuel (appareil, localisation, comportement, heure) et n'exige un facteur supplémentaire (step-up) que lorsque le risque dépasse un seuil — équilibre entre sécurité et expérience utilisateur, et composant clé des architectures Zero Trust. Le MFA statique impose les mêmes exigences à chaque connexion ; le SSO et le mTLS ne modulent rien selon le risque.",
      difficulte: 2
    },
    {
      q: "Which of the following is the MOST significant risk introduced by single sign-on, and its BEST mitigation?",
      choix: [
        "Users must remember more passwords; deploy a password manager",
        "A compromised SSO credential exposes every connected application; require strong MFA on the SSO identity",
        "Applications can no longer log user activity; enable local logging",
        "Session length becomes too short; extend token lifetimes"
      ],
      reponse: 1,
      explication:
        "Le SSO concentre le risque : un seul identifiant compromis ouvre TOUTES les applications reliées (single point of compromise). La parade prioritaire est de durcir cette authentification unique — MFA fort, idéalement résistant au phishing, surveillance des connexions et gestion de session rigoureuse. La réponse A est contradictoire (le SSO réduit le nombre de mots de passe), et les réponses C et D n'adressent pas le risque principal.",
      difficulte: 1
    },
    {
      q: "During identity proofing for a new remote employee, which approach provides the HIGHEST assurance according to identity assurance level practices?",
      choix: [
        "Accepting a self-asserted email address",
        "Verifying government-issued identity evidence, with biometric comparison, in person or via supervised remote session",
        "Sending a one-time code to any phone number the applicant provides",
        "Checking that the username is not already taken"
      ],
      reponse: 1,
      explication:
        "L'identity proofing de plus haute assurance (IAL3 dans NIST SP 800-63A) exige la vérification de preuves d'identité officielles avec comparaison biométrique, en présence physique ou en session à distance supervisée — on établit que la personne EST bien qui elle prétend être avant de créer son compte. L'auto-déclaration (A) correspond à IAL1, et les réponses C et D ne prouvent rien sur l'identité réelle du demandeur.",
      difficulte: 3
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
