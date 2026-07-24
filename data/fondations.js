/* Pseudo-domaine 0 — Fondations techniques ; schéma : data/SCHEMA.md */
window.CISSP_DATA = window.CISSP_DATA || { domains: {} };
window.CISSP_DATA.domains[0] = {
  id: 0,
  code: "F",
  titre: "Fondations techniques",
  titreEn: "IT Foundations",
  poids: "hors examen",
  couleur: "#64748b",
  icone: "🧱",
  description: "Le socle pour aborder le CISSP sans bagage IT : ordinateurs, réseaux, systèmes et vocabulaire de base, expliqués simplement.",
  objectifs: [
    "Comprendre ce qu'est un système d'information",
    "Lire une adresse IP et comprendre un réseau",
    "Situer les grands composants (serveur, OS, base de données, cloud)",
    "Maîtriser le vocabulaire technique de base utilisé dans le cours"
  ],
  lecons: [
    {
      id: "f-l1",
      titre: "L'ordinateur et le système d'exploitation",
      duree: 12,
      slides: [
        {
          type: "intro",
          titre: "Bienvenue : on part de zéro, et c'est très bien",
          points: [
            "Aucun prérequis : ce module est fait pour vous",
            "Le CISSP protège des systèmes d'information : commençons par comprendre ce qu'ils sont",
            "Un ordinateur, ce n'est que trois idées simples : du matériel, un chef d'orchestre, et des fichiers"
          ],
          narration: "Bienvenue dans ce tout premier chapitre. Si vous n'avez jamais travaillé dans l'informatique, vous êtes exactement au bon endroit. Le CISSP parle sans arrêt de systèmes d'information, alors avant de les protéger, nous allons simplement comprendre comment ils fonctionnent. Rassurez-vous, un ordinateur repose sur quelques idées très simples que nous allons découvrir ensemble, avec des analogies du quotidien."
        },
        {
          type: "standard",
          titre: "Le matériel : une cuisine de restaurant",
          points: [
            "Le processeur, ou CPU (Central Processing Unit), est le cuisinier : il exécute les tâches une par une, très vite",
            "La mémoire vive, ou RAM (Random Access Memory), est le plan de travail : rapide mais vidée quand on éteint",
            "Le disque (disk, storage) est le garde-manger : plus lent, mais tout y est conservé durablement"
          ],
          narration: "Imaginez une cuisine de restaurant. Le processeur, qu'on appelle en anglais le CPU, c'est le cuisinier : il exécute les instructions les unes après les autres, à une vitesse phénoménale. La mémoire vive, la RAM, c'est le plan de travail : le cuisinier y pose les ingrédients dont il a besoin tout de suite, mais quand on ferme la cuisine, tout est débarrassé. Le disque, lui, c'est le garde-manger : on y range tout ce qu'on veut conserver, même quand l'ordinateur est éteint.",
          astuce: "💡 À retenir : la RAM s'efface à l'extinction, le disque conserve. Cette différence reviendra au Domaine 7 avec la collecte de preuves."
        },
        {
          type: "schema",
          titre: "Les trois composants essentiels",
          points: [
            "Le CPU calcule, la RAM sert de zone de travail, le disque stocke",
            "Les données circulent en permanence entre ces trois éléments"
          ],
          narration: "Voici le trio essentiel. Quand vous ouvrez un document, il est lu depuis le disque, chargé dans la mémoire vive, puis le processeur travaille dessus. Quand vous enregistrez, le chemin inverse se produit : le contenu repart de la mémoire vers le disque. Tout ordinateur, du téléphone au supercalculateur, fonctionne sur ce modèle.",
          schema: { type: "flow", items: ["Disque (stockage durable)", "RAM (zone de travail)", "CPU (calcul)"] }
        },
        {
          type: "standard",
          titre: "Le système d'exploitation, chef d'orchestre",
          points: [
            "Le système d'exploitation, ou OS (Operating System), fait le lien entre le matériel et les programmes",
            "Exemples : Windows, macOS, Linux, Android, iOS",
            "C'est lui qui distribue le temps de calcul, la mémoire et l'accès aux fichiers"
          ],
          narration: "Le matériel seul ne sait rien faire. Il lui faut un chef d'orchestre : le système d'exploitation, en anglais Operating System, abrégé OS. Windows, macOS, Linux, Android : ce sont tous des systèmes d'exploitation. L'OS décide quel programme utilise le processeur à quel moment, combien de mémoire chacun reçoit, et qui a le droit d'ouvrir quel fichier. C'est pour cela qu'en sécurité, contrôler l'OS, c'est contrôler toute la machine."
        },
        {
          type: "standard",
          titre: "Programmes et processus",
          points: [
            "Un programme est une recette écrite sur le disque ; un processus (process) est cette recette en cours d'exécution",
            "Ouvrir deux fois le même programme crée deux processus distincts",
            "L'OS surveille et isole les processus les uns des autres"
          ],
          narration: "Faisons une distinction utile. Un programme, c'est une recette de cuisine posée sur une étagère : un fichier inerte sur le disque. Un processus, en anglais process, c'est cette recette en train d'être cuisinée : le programme chargé en mémoire et exécuté par le processeur. Si vous ouvrez deux fois votre navigateur, il y a un seul programme mais deux processus. Le système d'exploitation les isole pour qu'un processus ne puisse pas lire la mémoire d'un autre, et c'est déjà de la sécurité."
        },
        {
          type: "standard",
          titre: "Fichiers, dossiers et permissions",
          points: [
            "Un fichier (file) est un contenu nommé ; un dossier (folder, directory) les organise",
            "Chaque fichier porte des permissions : lire (read), écrire (write), exécuter (execute)",
            "Les permissions répondent à la question : qui a le droit de faire quoi ?"
          ],
          narration: "Tout ce que stocke un ordinateur prend la forme de fichiers, rangés dans des dossiers, comme des documents dans des classeurs. Chaque fichier porte des permissions, c'est-à-dire des droits : le droit de lire, en anglais read, le droit de modifier, write, et le droit d'exécuter, execute. C'est comme une armoire de bureau : certains collègues peuvent seulement consulter les dossiers, d'autres peuvent les modifier, et certains n'ont pas la clé du tout. Cette idée simple, qui a le droit de faire quoi, est le cœur du contrôle d'accès que vous verrez au Domaine 5."
        },
        {
          type: "standard",
          titre: "Comptes utilisateurs et administrateur",
          points: [
            "Chaque personne se connecte avec un compte (user account) qui définit ses droits",
            "Le compte administrateur (administrator, root) a tous les droits sur la machine",
            "Bonne pratique : travailler au quotidien avec un compte ordinaire, jamais en administrateur"
          ],
          narration: "Pour que l'ordinateur applique des permissions, il doit savoir qui vous êtes. C'est le rôle du compte utilisateur. Un compte ordinaire peut utiliser la machine, mais pas la modifier en profondeur. Le compte administrateur, appelé root sur Linux, a lui tous les pouvoirs : installer, supprimer, tout lire. C'est le passe-partout de l'immeuble. Vous comprenez déjà pourquoi les attaquants cherchent avant tout à voler ce compte-là, et pourquoi on ne l'utilise jamais pour les tâches de tous les jours."
        },
        {
          type: "standard",
          titre: "Les machines virtuelles",
          points: [
            "Une machine virtuelle, ou VM (Virtual Machine), est un ordinateur simulé par logiciel dans un ordinateur physique",
            "Un même serveur physique peut héberger des dizaines de VM isolées",
            "L'hyperviseur (hypervisor) est le logiciel qui crée et sépare les VM"
          ],
          narration: "Dernière notion, très utilisée dans le cloud : la machine virtuelle, en anglais Virtual Machine ou VM. C'est un ordinateur complet, avec son propre système d'exploitation, mais simulé par logiciel à l'intérieur d'une machine physique. Pensez à un immeuble : un seul bâtiment, mais plusieurs appartements indépendants, chacun avec sa serrure. Le logiciel qui découpe la machine en appartements s'appelle l'hyperviseur. Si les cloisons sont solides, chaque VM est isolée des autres ; si elles fuient, c'est un problème de sécurité majeur."
        },
        {
          type: "question",
          titre: "Vérifions : la mémoire vive",
          points: ["Prenez quelques secondes pour répondre avant de continuer"],
          narration: "Petite vérification avant de passer à la suite. Réfléchissez à l'analogie de la cuisine et répondez.",
          q: "Vous éteignez brutalement un ordinateur. Qu'advient-il du contenu de la RAM et de celui du disque ?",
          choix: [
            "Les deux sont effacés",
            "Les deux sont conservés",
            "La RAM est effacée, le disque est conservé",
            "La RAM est conservée, le disque est effacé"
          ],
          reponse: 2,
          explication: "La RAM est une mémoire de travail volatile : elle se vide dès que le courant est coupé, comme un plan de travail qu'on débarrasse. Le disque, lui, est un stockage durable : son contenu survit à l'extinction, comme le garde-manger."
        },
        {
          type: "resume",
          titre: "Ce qu'il faut retenir",
          points: [
            "CPU = cuisinier, RAM = plan de travail volatil, disque = garde-manger durable",
            "L'OS (Operating System) orchestre tout : processus, mémoire, fichiers",
            "Les permissions et les comptes répondent à : qui a le droit de faire quoi ?",
            "Le compte administrateur (root) a tous les pouvoirs : c'est la cible favorite des attaquants",
            "Une VM est un ordinateur simulé, isolé par l'hyperviseur"
          ],
          narration: "Résumons. Un ordinateur, c'est un processeur qui calcule, une mémoire vive qui sert de zone de travail temporaire, et un disque qui conserve les données. Le système d'exploitation orchestre l'ensemble et applique les permissions : qui a le droit de lire, de modifier, d'exécuter. Le compte administrateur détient tous les pouvoirs, et les machines virtuelles permettent de faire tourner plusieurs ordinateurs isolés sur une seule machine physique. Avec ce socle, le réseau sera bien plus facile à comprendre."
        }
      ]
    },
    {
      id: "f-l2",
      titre: "Le réseau, expliqué simplement",
      duree: 12,
      slides: [
        {
          type: "intro",
          titre: "Relier les ordinateurs entre eux",
          points: [
            "Un ordinateur isolé est rare : presque tout passe par le réseau",
            "Objectif : comprendre adresse IP, DNS, routeur et le chemin d'une page web",
            "Analogie directrice : le courrier postal"
          ],
          narration: "Un ordinateur seul dans son coin ne sert plus à grand-chose : consulter un site, envoyer un message, tout passe par le réseau. Dans cette leçon, nous allons suivre le voyage d'une information d'un ordinateur à un autre, avec une analogie qui va nous accompagner du début à la fin : celle du courrier postal. À la fin, vous saurez lire une adresse IP et raconter ce qui se passe quand vous tapez l'adresse d'un site web."
        },
        {
          type: "standard",
          titre: "Qu'est-ce qu'un réseau ?",
          points: [
            "Un réseau (network) est un ensemble de machines qui échangent des données",
            "Les données voyagent découpées en petits paquets (packets), comme des colis",
            "Chaque paquet porte une adresse d'expéditeur et une adresse de destinataire"
          ],
          narration: "Un réseau, c'est tout simplement plusieurs machines reliées entre elles pour échanger des informations, par câble ou par ondes wifi. Détail important : les données ne voyagent pas d'un bloc. Elles sont découpées en petits paquets, comme un déménagement expédié en plusieurs colis. Chaque paquet porte l'adresse de l'expéditeur et celle du destinataire, exactement comme une enveloppe postale, et le tout est réassemblé à l'arrivée."
        },
        {
          type: "standard",
          titre: "L'adresse IP : l'adresse postale de la machine",
          points: [
            "Chaque machine sur un réseau a une adresse IP (Internet Protocol), par exemple 192.168.1.20",
            "Format IPv4 : quatre nombres de 0 à 255 séparés par des points",
            "Sans adresse, impossible de livrer un paquet : l'IP identifie la destination"
          ],
          narration: "Pour livrer un colis, il faut une adresse. Sur un réseau, cette adresse s'appelle l'adresse IP, pour Internet Protocol. Elle ressemble à ceci : cent quatre-vingt-douze, point, cent soixante-huit, point, un, point, vingt. Quatre nombres entre zéro et deux cent cinquante-cinq, séparés par des points. C'est le format le plus courant, appelé IPv4. Retenez l'essentiel : une adresse IP identifie une machine sur un réseau, comme une adresse postale identifie une maison dans une ville.",
          astuce: "💡 Les adresses qui commencent par 192.168, 10, ou 172.16 à 172.31 sont réservées aux réseaux privés : vous les recroiserez au Domaine 4."
        },
        {
          type: "standard",
          titre: "Le DNS : l'annuaire d'Internet",
          points: [
            "Les humains retiennent des noms (www.exemple.com), les machines utilisent des adresses IP",
            "Le DNS (Domain Name System) traduit les noms en adresses IP",
            "C'est l'annuaire téléphonique d'Internet : un nom en entrée, un numéro en sortie"
          ],
          narration: "Personne ne retient l'adresse IP de son site préféré. Nous retenons des noms, comme www point exemple point com. Mais les machines, elles, ne comprennent que les adresses IP. Il faut donc un traducteur : c'est le DNS, le Domain Name System. Pensez à un annuaire téléphonique : vous connaissez le nom d'une personne, l'annuaire vous donne son numéro. Le DNS fait pareil : vous lui donnez un nom de site, il vous répond avec l'adresse IP correspondante. Si l'annuaire ment, vous appelez le mauvais numéro sans le savoir : voilà pourquoi les attaques contre le DNS sont si redoutées."
        },
        {
          type: "standard",
          titre: "Switch et routeur : le facteur et le centre de tri",
          points: [
            "Le switch (commutateur) relie les machines d'un même réseau local, comme le facteur d'un quartier",
            "Le routeur (router) fait passer les paquets d'un réseau à un autre, comme un centre de tri postal",
            "Votre box Internet joue les deux rôles à la maison"
          ],
          narration: "Deux équipements font circuler les paquets. Le switch, ou commutateur, distribue le courrier à l'intérieur d'un même réseau, comme le facteur qui connaît chaque boîte aux lettres de son quartier. Le routeur, lui, fait le lien entre des réseaux différents : c'est le centre de tri qui décide qu'un colis pour une autre ville doit partir sur telle route. À la maison, votre box Internet fait les deux à la fois : elle relie vos appareils entre eux et les connecte au reste du monde."
        },
        {
          type: "standard",
          titre: "Réseau local et Internet",
          points: [
            "Le réseau local, ou LAN (Local Area Network), regroupe les machines d'un même lieu : maison, bureau",
            "Internet est un réseau de réseaux : des millions de LAN reliés par des routeurs",
            "Frontière entre les deux = point de passage stratégique pour la sécurité"
          ],
          narration: "Faisons la différence entre chez vous et le reste du monde. Le réseau local, en anglais LAN pour Local Area Network, c'est le réseau d'un lieu précis : votre maison, un bureau, une école. Internet, c'est autre chose : c'est un réseau de réseaux, des millions de réseaux locaux interconnectés par des routeurs, à l'échelle de la planète. La frontière entre votre réseau local et Internet est un point de passage stratégique : c'est là qu'on place les protections, comme un poste de douane à la frontière d'un pays."
        },
        {
          type: "schema",
          titre: "Le voyage d'une page web",
          points: [
            "De votre clic jusqu'au serveur, puis retour : quelques dizaines de millisecondes",
            "Chaque étape correspond à un équipement que vous connaissez maintenant"
          ],
          narration: "Assemblons tout. Vous tapez le nom d'un site dans votre navigateur. Premièrement, le DNS traduit ce nom en adresse IP. Deuxièmement, votre requête part en paquets vers votre box, qui la route vers Internet. Troisièmement, de routeur en routeur, les paquets atteignent le serveur du site. Enfin, le serveur renvoie la page, qui refait le chemin en sens inverse jusqu'à votre écran. Tout cela en une fraction de seconde.",
          schema: { type: "flow", items: ["Navigateur", "DNS : nom → IP", "Box / routeur", "Internet (routeurs)", "Serveur web", "Réponse : la page s'affiche"] }
        },
        {
          type: "standard",
          titre: "La notion de port",
          points: [
            "Une même machine rend plusieurs services : web, mail, transfert de fichiers",
            "Le port est un numéro qui précise le service visé, comme un numéro d'appartement",
            "Exemples à retenir : 80 pour le web (HTTP), 443 pour le web sécurisé (HTTPS)"
          ],
          narration: "Dernière pièce du puzzle : le port. Une adresse IP désigne une machine, mais cette machine peut rendre plusieurs services à la fois : servir un site web, recevoir du courrier électronique, transférer des fichiers. Le port est un numéro qui précise à quel service on s'adresse. Si l'adresse IP est l'adresse de l'immeuble, le port est le numéro de l'appartement. Retenez deux exemples : le port quatre-vingts pour le web classique, HTTP, et le port quatre cent quarante-trois pour le web sécurisé, HTTPS. Fermer les ports inutiles, c'est fermer les portes qui ne servent à rien."
        },
        {
          type: "question",
          titre: "Vérifions : le rôle du DNS",
          points: ["Repensez à l'analogie de l'annuaire"],
          narration: "À vous de jouer. Repensez à notre annuaire téléphonique et choisissez la bonne réponse.",
          q: "Quel est le rôle du DNS (Domain Name System) ?",
          choix: [
            "Traduire un nom de site en adresse IP",
            "Chiffrer les données qui circulent sur le réseau",
            "Relier physiquement les ordinateurs d'un bureau",
            "Bloquer les connexions dangereuses venant d'Internet"
          ],
          reponse: 0,
          explication: "Le DNS est l'annuaire d'Internet : il traduit un nom lisible par un humain, comme www.exemple.com, en adresse IP compréhensible par les machines. Le chiffrement est le rôle de protocoles comme TLS, la liaison physique celui du switch, et le blocage celui du pare-feu."
        },
        {
          type: "resume",
          titre: "Ce qu'il faut retenir",
          points: [
            "Les données voyagent en paquets, chacun avec son adresse, comme des colis",
            "Adresse IP = adresse postale de la machine ; port = numéro d'appartement (service)",
            "DNS = annuaire qui traduit les noms en adresses IP",
            "Switch = facteur du réseau local ; routeur = centre de tri entre réseaux",
            "Internet = réseau de réseaux ; la frontière avec le LAN est le point à défendre"
          ],
          narration: "Récapitulons avec notre analogie postale. Les données circulent en paquets adressés. L'adresse IP identifie la machine, le port précise le service, comme un numéro d'appartement dans l'immeuble. Le DNS sert d'annuaire, le switch distribue le courrier dans le quartier, et le routeur trie entre les villes. Internet est un immense réseau de réseaux, et la frontière entre votre réseau local et lui est l'endroit stratégique où l'on placera les défenses. Vous avez maintenant tout le vocabulaire réseau nécessaire pour le Domaine 4."
        }
      ]
    },
    {
      id: "f-l3",
      titre: "Serveurs, applications et données",
      duree: 12,
      slides: [
        {
          type: "intro",
          titre: "Où vivent les applications et les données ?",
          points: [
            "Derrière chaque site ou appli mobile, il y a des serveurs, du code et des données",
            "Objectif : comprendre client/serveur, base de données, API, cloud et sauvegarde",
            "Analogie directrice : le restaurant"
          ],
          narration: "Quand vous consultez vos comptes bancaires ou commandez un repas sur votre téléphone, que se passe-t-il vraiment derrière l'écran ? C'est ce que nous allons découvrir : des serveurs, des applications, des bases de données, souvent hébergés dans le cloud. Pour rendre tout cela concret, nous allons filer une analogie gourmande du début à la fin : celle du restaurant."
        },
        {
          type: "standard",
          titre: "Client et serveur",
          points: [
            "Le client (client) demande un service : votre navigateur, votre appli mobile",
            "Le serveur (server) est une machine qui répond aux demandes, jour et nuit",
            "Un serveur est un ordinateur comme un autre, mais puissant, partagé et toujours allumé"
          ],
          narration: "Au restaurant, il y a celui qui commande et celui qui prépare. En informatique, c'est pareil. Le client, c'est le programme qui demande : votre navigateur, votre application mobile. Le serveur, c'est la machine qui répond : elle héberge le site ou le service, et elle tourne jour et nuit pour servir des milliers de clients à la fois. Ne vous laissez pas impressionner par le mot : un serveur est un ordinateur comme celui de la leçon un, simplement plus puissant, partagé, et rangé dans une salle dédiée plutôt que sur un bureau."
        },
        {
          type: "standard",
          titre: "L'application web et ses étages",
          points: [
            "Une application web se découpe souvent en trois couches (tiers)",
            "La présentation : ce que vous voyez ; la logique : les règles métier ; les données : ce qui est stocké",
            "Séparer les couches permet de les protéger et de les faire évoluer indépendamment"
          ],
          narration: "Une application web, comme un site de commerce en ligne, est presque toujours organisée en étages, qu'on appelle des couches. En haut, la présentation : les pages et les boutons que vous voyez. Au milieu, la logique : le code qui applique les règles, par exemple vérifier que votre panier n'est pas vide avant de payer. En bas, les données : tout ce qui doit être conservé. Au restaurant : la salle où l'on vous accueille, la cuisine où l'on prépare, et la réserve où l'on stocke. Séparer ces étages permet de mieux les protéger, un principe que vous retrouverez souvent."
        },
        {
          type: "standard",
          titre: "La base de données",
          points: [
            "Une base de données (database) stocke l'information de façon organisée et interrogeable",
            "Image : un immense classeur de fiches rangées, avec un index pour tout retrouver",
            "SQL est le langage le plus courant pour l'interroger ; c'est souvent là que dorment les données sensibles"
          ],
          narration: "Où sont rangées vos commandes, votre adresse, votre historique ? Dans une base de données, en anglais database. Imaginez un immense meuble à fiches parfaitement organisé : chaque client a sa fiche, chaque commande la sienne, et un index permet de retrouver n'importe quelle information en une fraction de seconde. On l'interroge le plus souvent avec un langage nommé SQL. Retenez surtout ceci : la base de données est le coffre aux trésors de l'entreprise. C'est là que dorment les données personnelles et confidentielles, et donc c'est la cible numéro un des attaquants."
        },
        {
          type: "standard",
          titre: "L'API : le serveur du restaurant",
          points: [
            "Une API (Application Programming Interface) permet à deux logiciels de se parler",
            "Comme un serveur de restaurant : elle prend la commande, la transmet en cuisine, rapporte le plat",
            "Vous ne rentrez jamais en cuisine : l'API contrôle ce qui peut être demandé, et comment"
          ],
          narration: "Comment votre application de météo obtient-elle les prévisions ? Grâce à une API, une interface de programmation. L'analogie parfaite, c'est le serveur du restaurant. Vous ne rentrez jamais en cuisine vous-même : vous passez commande au serveur, dans les termes du menu, il transmet en cuisine, et il vous rapporte le plat. L'API fait exactement cela entre deux logiciels : elle définit ce qu'on peut demander, dans quel format, et elle rapporte la réponse. Et comme le serveur du restaurant, elle protège la cuisine : personne ne touche directement aux casseroles, ni à la base de données.",
          astuce: "💡 Les API sont partout dans les architectures modernes ; leur sécurité est un sujet à part entière au Domaine 8."
        },
        {
          type: "schema",
          titre: "Le trajet d'une commande",
          points: [
            "Du clic du client jusqu'à la base de données, et retour",
            "Chaque maillon est un point à sécuriser"
          ],
          narration: "Mettons tout bout à bout. Votre application mobile, le client, envoie une demande à l'API, le serveur du restaurant. L'API transmet à l'application, la cuisine, qui applique ses règles. L'application interroge la base de données, la réserve, pour lire ou enregistrer l'information. Puis la réponse remonte toute la chaîne jusqu'à votre écran. Chaque maillon de cette chaîne est un endroit où quelque chose peut mal tourner, et donc un endroit à sécuriser.",
          schema: { type: "flow", items: ["Client (appli, navigateur)", "API (prise de commande)", "Application (cuisine : la logique)", "Base de données (réserve)"] }
        },
        {
          type: "standard",
          titre: "Datacenter et cloud",
          points: [
            "Un datacenter est un bâtiment rempli de serveurs, climatisé, sécurisé, alimenté en continu",
            "Le cloud : louer les serveurs de quelqu'un d'autre (Amazon AWS, Microsoft Azure, Google Cloud) au lieu de les posséder",
            "Comme l'électricité : on ne construit plus sa centrale, on paie à l'usage"
          ],
          narration: "Où vivent physiquement tous ces serveurs ? Dans des datacenters : d'immenses bâtiments climatisés, gardés, alimentés en électricité de secours, remplis d'armoires de serveurs. Longtemps, chaque entreprise possédait les siens. Puis est venu le cloud : au lieu d'acheter et d'entretenir ses machines, on loue à la demande celles de géants comme Amazon, Microsoft ou Google, et on paie à l'usage. C'est la même bascule que pour l'électricité : autrefois chaque usine avait son générateur, aujourd'hui on se branche sur le réseau et on paie sa consommation."
        },
        {
          type: "standard",
          titre: "IaaS, PaaS, SaaS : trois niveaux de location",
          points: [
            "IaaS (Infrastructure as a Service) : on loue les machines nues, on gère tout le reste — un local vide",
            "PaaS (Platform as a Service) : on loue une plateforme prête à recevoir son code — une cuisine équipée",
            "SaaS (Software as a Service) : on utilise un logiciel fini, comme Gmail — on va au restaurant"
          ],
          narration: "Le cloud se loue à trois niveaux, et une analogie de restaurant les rend limpides. Le IaaS, l'infrastructure en tant que service, c'est louer un local vide : on vous fournit les murs, l'eau et l'électricité, c'est-à-dire des machines virtuelles, mais vous apportez cuisine, recettes et personnel. Le PaaS, la plateforme en tant que service, c'est louer une cuisine toute équipée : vous n'apportez que vos recettes, votre code. Le SaaS, le logiciel en tant que service, c'est aller au restaurant : tout est prêt, vous consommez, comme avec Gmail ou Office en ligne. Plus vous montez vers le SaaS, moins vous gérez de choses, mais moins vous contrôlez."
        },
        {
          type: "standard",
          titre: "La sauvegarde : le filet de sécurité",
          points: [
            "Une sauvegarde (backup) est une copie des données, conservée ailleurs, pour pouvoir les restaurer",
            "Panne, erreur humaine, rançongiciel : sans sauvegarde, la perte peut être définitive",
            "Une sauvegarde jamais testée est une promesse, pas une protection"
          ],
          narration: "Terminons par le filet de sécurité de toute cette belle mécanique : la sauvegarde, en anglais backup. C'est une copie des données, faite régulièrement et conservée dans un autre endroit, pour pouvoir tout restaurer en cas de coup dur. Un disque qui meurt, une erreur de manipulation, un logiciel malveillant qui chiffre tout : sans sauvegarde, les données sont perdues pour de bon. Et retenez ce réflexe de professionnel : une sauvegarde qu'on n'a jamais testée en la restaurant pour de vrai n'est qu'une promesse. Le CISSP y consacre une bonne partie du Domaine 7."
        },
        {
          type: "question",
          titre: "Vérifions : les niveaux de cloud",
          points: ["Repensez au local vide, à la cuisine équipée et au restaurant"],
          narration: "Vérifions que les trois étages du cloud sont clairs. Prenez le temps de relire les choix.",
          q: "Votre entreprise utilise une messagerie en ligne prête à l'emploi, comme Gmail, sans rien installer ni gérer. De quel modèle de cloud s'agit-il ?",
          choix: [
            "IaaS (Infrastructure as a Service)",
            "PaaS (Platform as a Service)",
            "Un datacenter privé",
            "SaaS (Software as a Service)"
          ],
          reponse: 3,
          explication: "Un logiciel fini, utilisable immédiatement sans rien gérer, c'est le SaaS : on va au restaurant et on consomme. Le IaaS fournirait des machines nues à administrer, le PaaS une plateforme pour déployer son propre code, et un datacenter privé signifierait posséder soi-même les serveurs."
        },
        {
          type: "resume",
          titre: "Ce qu'il faut retenir",
          points: [
            "Client = celui qui demande ; serveur = la machine qui répond jour et nuit",
            "Application en couches : présentation (salle), logique (cuisine), données (réserve)",
            "Base de données = coffre aux trésors ; API = serveur de restaurant entre deux logiciels",
            "Cloud = location de serveurs à l'usage ; IaaS local vide, PaaS cuisine équipée, SaaS restaurant",
            "La sauvegarde testée est le filet de sécurité de tout le système"
          ],
          narration: "Résumons notre visite du restaurant numérique. Le client commande, le serveur répond. L'application est organisée en couches, de la salle à la réserve, et la base de données concentre les trésors de l'entreprise. L'API joue le serveur de salle entre les logiciels. Le cloud permet de louer tout cela à trois niveaux : le local vide, la cuisine équipée, ou le restaurant complet. Et la sauvegarde, régulièrement testée, reste le filet de sécurité indispensable. Il ne nous manque plus que le vocabulaire de la sécurité elle-même : c'est la prochaine leçon."
        }
      ]
    },
    {
      id: "f-l4",
      titre: "Le vocabulaire de la sécurité",
      duree: 12,
      slides: [
        {
          type: "intro",
          titre: "Les mots que vous entendrez tous les jours",
          points: [
            "Cette leçon est la passerelle directe vers le Domaine 1",
            "Objectif : menace, vulnérabilité, risque, malware, chiffrement, authentification, pare-feu",
            "Analogie directrice : la protection d'une maison"
          ],
          narration: "Dernière leçon des fondations, et sans doute la plus importante : le vocabulaire de la sécurité elle-même. Tous les mots que nous allons voir ici reviendront dans chaque domaine du CISSP, à commencer par le Domaine 1 qui vous attend juste après. Pour rester concret, nous allons protéger ensemble une maison : ses portes, ses fenêtres, ses clés et ses objets de valeur."
        },
        {
          type: "standard",
          titre: "Menace, vulnérabilité, risque",
          points: [
            "La menace (threat) : ce qui pourrait causer du tort — le cambrioleur qui rôde",
            "La vulnérabilité (vulnerability) : la faiblesse exploitable — la fenêtre restée ouverte",
            "Le risque (risk) : la rencontre des deux — la probabilité d'être cambriolé et ce que cela coûterait"
          ],
          narration: "Voici le trio le plus important de tout le CISSP. La menace, c'est ce qui pourrait vous nuire : le cambrioleur qui rôde dans le quartier. La vulnérabilité, c'est votre faiblesse : la fenêtre du rez-de-chaussée restée ouverte. Et le risque, c'est la rencontre des deux : la probabilité que le cambrioleur passe par cette fenêtre, combinée à la valeur de ce qu'il pourrait emporter. Pas de cambrioleur, pas de risque. Fenêtre fermée, presque pas de risque non plus. Toute la gestion de la sécurité consiste à jouer sur ces deux leviers.",
          astuce: "💡 Formule à mémoriser dès maintenant : risque = menace × vulnérabilité × impact. Elle structure tout le Domaine 1."
        },
        {
          type: "schema",
          titre: "La mécanique du risque",
          points: [
            "Le risque naît de la rencontre d'une menace et d'une vulnérabilité",
            "Les contrôles de sécurité réduisent le risque en agissant sur la vulnérabilité ou l'impact"
          ],
          narration: "Visualisons la mécanique. Une menace rencontre une vulnérabilité : cela crée un risque, mesuré par sa probabilité et son impact. Face à ce risque, on met en place des contrôles de sécurité, c'est-à-dire des protections : fermer la fenêtre, poser une alarme, assurer les objets de valeur. On ne supprime jamais le cambrioleur ; on réduit ses opportunités et les conséquences.",
          schema: { type: "flow", items: ["Menace (cambrioleur)", "Vulnérabilité (fenêtre ouverte)", "Risque (probabilité × impact)", "Contrôles (fermer, alarmer, assurer)"] }
        },
        {
          type: "standard",
          titre: "Le malware, logiciel malveillant",
          points: [
            "Malware = malicious software : tout logiciel conçu pour nuire",
            "Le virus se propage en infectant des fichiers ; le ransomware (rançongiciel) chiffre vos données et exige une rançon",
            "Le spyware espionne ; le trojan (cheval de Troie) se déguise en programme légitime"
          ],
          narration: "Le mot malware est la contraction de malicious software, logiciel malveillant. C'est le terme générique pour tout programme conçu pour nuire. Quelques membres de la famille : le virus, qui se propage en infectant d'autres fichiers, comme son homonyme biologique. Le ransomware, ou rançongiciel, qui verrouille vos données et exige une rançon pour les rendre : c'est le cambrioleur qui change vos serrures et vous vend la nouvelle clé. Le spyware, qui espionne en silence. Et le cheval de Troie, le trojan, qui se fait passer pour un programme utile afin que vous l'installiez vous-même."
        },
        {
          type: "standard",
          titre: "Hacker, attaquant : précisons les mots",
          points: [
            "Un hacker est d'abord un passionné qui comprend les systèmes en profondeur : le mot n'est pas négatif en soi",
            "L'attaquant (attacker, threat actor) est celui qui agit avec une intention de nuire",
            "On distingue les white hats (chercheurs éthiques, autorisés) des black hats (criminels)"
          ],
          narration: "Un point de vocabulaire qui a son importance dans la profession. Dans les médias, hacker veut dire pirate. Mais historiquement, un hacker est un passionné qui aime comprendre et détourner les systèmes, sans intention de nuire. Le terme précis pour désigner celui qui cherche à nuire, c'est l'attaquant, en anglais attacker ou threat actor, l'acteur de la menace. On parle aussi de white hat, chapeau blanc, pour le chercheur en sécurité qui teste les défenses avec autorisation, et de black hat pour le criminel. Retenez : c'est l'intention et l'autorisation qui font la différence, une nuance que le CISSP prend très au sérieux avec l'éthique."
        },
        {
          type: "standard",
          titre: "Le chiffrement en une image",
          points: [
            "Le chiffrement (encryption) transforme un message lisible en texte illisible sans la clé",
            "Image : un coffre-fort portable — n'importe qui peut voir le coffre, seul le porteur de la clé lit le contenu",
            "Il protège les données volées : sans la clé, l'attaquant n'emporte que du charabia"
          ],
          narration: "Le chiffrement, en anglais encryption, tient en une image : le coffre-fort portable. Chiffrer un message, c'est l'enfermer dans un coffre dont seul le destinataire possède la clé. Le coffre peut voyager par la poste, être intercepté, volé : sans la clé, son contenu reste un charabia illisible. C'est pour cela que le chiffrement est partout : sur les sites web en HTTPS, sur les disques des ordinateurs portables, dans les messageries. Même si l'attaquant met la main sur les données, il n'emporte qu'une boîte verrouillée. La clé, elle, devient le nouveau trésor à protéger."
        },
        {
          type: "standard",
          titre: "Authentification et mots de passe",
          points: [
            "S'identifier (identification) : dire qui on est ; s'authentifier (authentication) : le prouver",
            "Trois façons de prouver : ce que je sais (mot de passe), ce que je possède (téléphone), ce que je suis (empreinte)",
            "La MFA (Multi-Factor Authentication) combine au moins deux de ces facteurs : deux verrous valent mieux qu'un"
          ],
          narration: "Devant votre porte, dire je suis chez moi ne suffit pas : il faut la clé. En sécurité, c'est pareil. S'identifier, c'est déclarer qui on est, par exemple avec un nom d'utilisateur. S'authentifier, c'est le prouver. Il existe trois grandes façons de prouver son identité : ce que je sais, comme un mot de passe ; ce que je possède, comme mon téléphone qui reçoit un code ; et ce que je suis, comme mon empreinte digitale. L'authentification multifacteur, la MFA, en combine au moins deux : même si un voleur devine votre mot de passe, il lui manque encore votre téléphone. C'est l'une des protections les plus efficaces qui existent."
        },
        {
          type: "standard",
          titre: "Pare-feu et mises à jour",
          points: [
            "Le pare-feu (firewall) filtre le trafic réseau selon des règles : le portier qui contrôle les entrées",
            "La mise à jour (update, patch) corrige les vulnérabilités découvertes : réparer la fenêtre cassée",
            "Un patch non appliqué, c'est une faiblesse connue de tous, attaquants compris"
          ],
          narration: "Deux dernières protections du quotidien. Le pare-feu, en anglais firewall, est le portier posté à la frontière de votre réseau, celle que nous avons vue à la leçon deux. Il examine chaque paquet et applique des règles simples : le courrier web entre, le reste est refusé. Ensuite, la mise à jour, ou patch. Quand une vulnérabilité est découverte dans un logiciel, l'éditeur publie un correctif : c'est réparer la fenêtre cassée. Attention au piège : une fois la faille annoncée publiquement, tous les cambrioleurs du monde savent quelle fenêtre essayer. Repousser ses mises à jour, c'est laisser la fenêtre cassée avec un panneau qui l'indique."
        },
        {
          type: "question",
          titre: "Vérifions : le trio du risque",
          points: ["Repensez à la maison, au cambrioleur et à la fenêtre"],
          narration: "Dernière vérification des fondations. Reprenez l'analogie de la maison et choisissez.",
          q: "Dans l'analogie de la maison, la fenêtre du rez-de-chaussée restée ouverte représente…",
          choix: [
            "La menace (threat)",
            "La vulnérabilité (vulnerability)",
            "Le risque (risk)",
            "Le contrôle de sécurité (control)"
          ],
          reponse: 1,
          explication: "La fenêtre ouverte est une faiblesse exploitable : c'est la vulnérabilité. La menace, c'est le cambrioleur ; le risque, c'est la rencontre des deux pondérée par l'impact ; et le contrôle, c'est la protection qu'on ajoute, comme fermer la fenêtre ou poser une alarme."
        },
        {
          type: "resume",
          titre: "Ce qu'il faut retenir — cap sur le Domaine 1",
          points: [
            "Risque = menace (cambrioleur) × vulnérabilité (fenêtre ouverte) × impact",
            "Malware : virus, ransomware, spyware, trojan — des logiciels conçus pour nuire",
            "Attaquant = intention de nuire ; hacker n'est pas un gros mot ; white hat = éthique et autorisé",
            "Chiffrement = coffre-fort portable ; MFA = au moins deux preuves d'identité",
            "Pare-feu = portier du réseau ; patch = réparer la fenêtre cassée, vite"
          ],
          narration: "Félicitations, vos fondations sont posées. Vous savez ce qu'est un ordinateur et son système d'exploitation, comment les réseaux acheminent les paquets, où vivent les applications et les données, et vous parlez désormais la langue de la sécurité : menace, vulnérabilité, risque, chiffrement, authentification, pare-feu. Le Domaine 1 va reprendre exactement ces notions, cette fois avec le regard d'un manager : évaluer les risques, choisir les protections, et en répondre devant l'organisation. Vous êtes prêt."
        }
      ]
    }
  ],
  quiz: [
    {
      q: "Quel composant d'un ordinateur conserve les données de façon durable, même une fois la machine éteinte ?",
      choix: ["La RAM (mémoire vive)", "Le disque (stockage)", "Le CPU (processeur)", "L'écran"],
      reponse: 1,
      explication: "Le disque est le garde-manger de l'ordinateur : il conserve les données durablement. La RAM est un plan de travail volatil qui s'efface à l'extinction, et le CPU calcule sans rien stocker durablement.",
      difficulte: 1,
      pourquoi: [
        "Faux : la RAM est volatile, son contenu disparaît dès que le courant est coupé.",
        "Correct : le disque est le stockage durable, son contenu survit à l'extinction de la machine.",
        "Faux : le CPU exécute les calculs mais ne conserve pas les données.",
        "Faux : l'écran ne fait qu'afficher, il ne stocke rien."
      ]
    },
    {
      q: "Quel est le rôle principal d'un système d'exploitation (Operating System) ?",
      choix: [
        "Protéger l'ordinateur contre les virus",
        "Stocker les documents de l'utilisateur",
        "Naviguer sur Internet",
        "Faire le lien entre le matériel et les programmes, et répartir les ressources"
      ],
      reponse: 3,
      explication: "L'OS est le chef d'orchestre : il fait le lien entre le matériel et les programmes, répartit le processeur et la mémoire, et applique les permissions sur les fichiers. L'antivirus, le stockage et le navigateur sont des rôles d'autres composants ou logiciels.",
      difficulte: 1,
      pourquoi: [
        "Faux : c'est le rôle d'un antivirus, un logiciel qui s'ajoute au-dessus de l'OS.",
        "Faux : le stockage est assuré par le disque ; l'OS ne fait qu'organiser l'accès aux fichiers.",
        "Faux : c'est le rôle du navigateur, un programme parmi d'autres que l'OS exécute.",
        "Correct : l'OS orchestre le matériel, exécute les programmes et distribue processeur, mémoire et accès aux fichiers."
      ]
    },
    {
      q: "Pourquoi recommande-t-on de ne PAS utiliser le compte administrateur pour le travail quotidien ?",
      choix: [
        "Parce qu'il a tous les droits : une erreur ou un malware exécuté avec ce compte peut tout compromettre",
        "Parce qu'il rend l'ordinateur plus lent",
        "Parce qu'il ne peut pas ouvrir les fichiers des autres utilisateurs",
        "Parce qu'il coûte plus cher en licence"
      ],
      reponse: 0,
      explication: "Le compte administrateur est le passe-partout de la machine : tout ce qui s'exécute avec lui hérite de tous les droits. Une erreur ou un malware lancé depuis ce compte peut donc compromettre tout le système. Les autres réponses n'ont aucun fondement technique.",
      difficulte: 1,
      pourquoi: [
        "Correct : tout programme lancé avec ce compte hérite de tous les pouvoirs, y compris un malware.",
        "Faux : le compte utilisé n'a pas d'effet notable sur les performances de la machine.",
        "Faux : c'est l'inverse, l'administrateur peut justement accéder aux fichiers de tous.",
        "Faux : le compte administrateur n'est pas facturé à part, la licence n'a rien à voir."
      ]
    },
    {
      q: "À quoi sert une adresse IP (Internet Protocol) ?",
      choix: [
        "À chiffrer les communications entre deux machines",
        "À donner un nom facile à retenir à un site web",
        "À identifier une machine sur un réseau, comme une adresse postale",
        "À bloquer les connexions indésirables"
      ],
      reponse: 2,
      explication: "L'adresse IP est l'adresse postale de la machine : elle permet d'acheminer les paquets vers la bonne destination. Les noms faciles à retenir relèvent du DNS, le chiffrement de protocoles comme TLS, et le blocage du pare-feu.",
      difficulte: 1,
      pourquoi: [
        "Faux : le chiffrement est assuré par des protocoles comme TLS, pas par l'adressage.",
        "Faux : les noms lisibles comme www.exemple.com relèvent du DNS, qui les traduit ensuite en IP.",
        "Correct : l'IP identifie la machine destinataire pour que les paquets lui soient livrés, comme une adresse postale.",
        "Faux : filtrer et bloquer les connexions est le rôle du pare-feu."
      ]
    },
    {
      q: "Quelle analogie décrit le mieux le DNS (Domain Name System) ?",
      choix: [
        "Un coffre-fort qui protège les données",
        "Un annuaire qui traduit un nom en numéro",
        "Un portier qui filtre les entrées",
        "Un centre de tri qui achemine les colis"
      ],
      reponse: 1,
      explication: "Le DNS est l'annuaire d'Internet : on lui donne un nom de domaine, il répond avec l'adresse IP correspondante. Le coffre-fort évoque le chiffrement, le portier le pare-feu, et le centre de tri le routeur.",
      difficulte: 1,
      pourquoi: [
        "Faux : le coffre-fort est l'image du chiffrement, qui protège le contenu des données.",
        "Correct : comme un annuaire, le DNS reçoit un nom (www.exemple.com) et renvoie le numéro correspondant (l'adresse IP).",
        "Faux : le portier est l'image du pare-feu, qui autorise ou refuse le trafic.",
        "Faux : le centre de tri est l'image du routeur, qui achemine les paquets entre réseaux."
      ]
    },
    {
      q: "Quel équipement fait passer les paquets d'un réseau à un autre, par exemple de votre réseau local vers Internet ?",
      choix: ["Le routeur (router)", "Le clavier", "L'écran", "Le disque dur"],
      reponse: 0,
      explication: "Le routeur est le centre de tri postal du réseau : il achemine les paquets entre réseaux différents, notamment entre votre réseau local et Internet. Clavier, écran et disque sont des composants de la machine, sans rôle d'acheminement.",
      difficulte: 1,
      pourquoi: [
        "Correct : le routeur choisit la route des paquets entre réseaux, comme un centre de tri entre villes.",
        "Faux : le clavier est un périphérique de saisie, il ne transporte aucun paquet réseau.",
        "Faux : l'écran affiche l'information, il n'a aucun rôle dans le réseau.",
        "Faux : le disque dur stocke les données localement, il n'achemine rien."
      ]
    },
    {
      q: "Dans l'analogie de l'immeuble, si l'adresse IP est l'adresse du bâtiment, que représente le port ?",
      choix: [
        "Le nom de la rue",
        "Le code postal de la ville",
        "La boîte aux lettres commune",
        "Le numéro d'appartement, c'est-à-dire le service visé sur la machine"
      ],
      reponse: 3,
      explication: "Le port précise à quel service d'une même machine on s'adresse : le web sur le port 80 ou 443, le courrier sur d'autres ports. C'est le numéro d'appartement dans l'immeuble désigné par l'adresse IP.",
      difficulte: 1,
      pourquoi: [
        "Faux : la rue fait partie de l'adresse elle-même, donc de l'adresse IP, pas du port.",
        "Faux : le code postal relève aussi de la localisation de la machine, pas du service visé.",
        "Faux : une boîte commune ne distingue pas les destinataires, alors que le port distingue précisément les services.",
        "Correct : une même machine héberge plusieurs services, et le port désigne lequel, comme un numéro d'appartement."
      ]
    },
    {
      q: "Dans le modèle client/serveur, quel est le rôle du serveur ?",
      choix: [
        "Envoyer des demandes vers les autres machines",
        "Afficher les pages web à l'utilisateur",
        "Répondre aux demandes des clients, en continu, pour de nombreux utilisateurs",
        "Relier physiquement les câbles du réseau"
      ],
      reponse: 2,
      explication: "Le serveur est la machine qui répond aux demandes des clients, jour et nuit, pour des milliers d'utilisateurs à la fois. C'est le client (navigateur, application) qui envoie les demandes et affiche le résultat.",
      difficulte: 1,
      pourquoi: [
        "Faux : envoyer des demandes est le rôle du client ; le serveur, lui, y répond.",
        "Faux : l'affichage se fait côté client, dans le navigateur ou l'application de l'utilisateur.",
        "Correct : le serveur héberge le service et répond en continu aux demandes de nombreux clients.",
        "Faux : le câblage relève des équipements réseau comme le switch, pas du serveur."
      ]
    },
    {
      q: "Quelle analogie illustre le mieux une API (Application Programming Interface) ?",
      choix: [
        "Le serveur d'un restaurant, qui prend la commande et fait l'intermédiaire avec la cuisine",
        "Le coffre-fort de la banque, qui garde les objets de valeur",
        "Le gardien de nuit, qui surveille le bâtiment",
        "Le livreur, qui transporte les colis entre les villes"
      ],
      reponse: 0,
      explication: "L'API est l'intermédiaire codifié entre deux logiciels : comme le serveur du restaurant, elle prend la commande dans les termes du menu, la transmet en cuisine et rapporte la réponse, sans jamais laisser le client entrer en cuisine.",
      difficulte: 1,
      pourquoi: [
        "Correct : l'API prend les demandes dans un format défini, les transmet à l'application et rapporte la réponse, exactement comme le serveur du restaurant.",
        "Faux : le coffre-fort illustre le chiffrement ou la protection des données, pas un intermédiaire d'échange.",
        "Faux : la surveillance évoque les outils de détection, pas l'interface entre deux logiciels.",
        "Faux : le livreur évoque le transport de paquets sur le réseau, pas la définition d'un échange entre applications."
      ]
    },
    {
      q: "Votre équipe loue chez un fournisseur cloud des machines virtuelles nues, sur lesquelles elle installe et gère elle-même le système et les logiciels. De quel modèle s'agit-il ?",
      choix: [
        "SaaS (Software as a Service)",
        "PaaS (Platform as a Service)",
        "IaaS (Infrastructure as a Service)",
        "Un logiciel installé sur les postes de travail"
      ],
      reponse: 2,
      explication: "Louer des machines nues et gérer tout le reste soi-même, c'est le IaaS : le local vide dont on apporte la cuisine et les recettes. Le PaaS fournirait la plateforme prête pour le code, et le SaaS un logiciel fini prêt à consommer.",
      difficulte: 1,
      pourquoi: [
        "Faux : le SaaS est un logiciel fini prêt à l'emploi, sans rien installer ni administrer.",
        "Faux : le PaaS fournit une plateforme déjà équipée où l'on dépose seulement son code.",
        "Correct : le IaaS fournit l'infrastructure brute (machines virtuelles), et le client gère système et logiciels : c'est le local vide.",
        "Faux : un logiciel installé localement sur les postes n'est pas du cloud du tout."
      ]
    },
    {
      q: "Un ransomware (rançongiciel) vient de chiffrer tous les fichiers d'une petite entreprise. Qu'est-ce qui lui permettrait le MIEUX de récupérer ses données sans payer ?",
      choix: [
        "Un antivirus installé après l'attaque",
        "Un mot de passe plus long sur les postes",
        "Un écran de veille verrouillé",
        "Une sauvegarde récente, conservée séparément et déjà testée"
      ],
      reponse: 3,
      explication: "Face à un ransomware, la sauvegarde saine, stockée hors d'atteinte et testée, est le vrai filet de sécurité : on restaure les données sans payer. Les autres mesures sont utiles en prévention mais ne rendent pas les fichiers déjà chiffrés.",
      difficulte: 1,
      pourquoi: [
        "Faux : installer un antivirus après coup ne déchiffre pas les fichiers déjà pris en otage.",
        "Faux : un mot de passe plus long est une bonne pratique préventive, mais il ne restaure aucune donnée.",
        "Faux : le verrouillage d'écran protège contre un accès physique, pas contre des fichiers déjà chiffrés.",
        "Correct : une sauvegarde récente, séparée du réseau et testée, permet de restaurer les données sans céder à la rançon."
      ]
    },
    {
      q: "Complétez avec le vocabulaire exact : un cambrioleur rôde (…), la fenêtre est restée ouverte (…), il pourrait entrer et voler les bijoux (…).",
      choix: [
        "Risque, menace, vulnérabilité",
        "Menace, vulnérabilité, risque",
        "Vulnérabilité, risque, menace",
        "Menace, risque, vulnérabilité"
      ],
      reponse: 1,
      explication: "Le cambrioleur est la menace (ce qui peut nuire), la fenêtre ouverte est la vulnérabilité (la faiblesse exploitable), et la possibilité qu'il entre voler les bijoux est le risque (probabilité et impact de la rencontre des deux).",
      difficulte: 1,
      pourquoi: [
        "Faux : cet ordre inverse les notions ; le cambrioleur n'est pas le risque mais la source de danger, donc la menace.",
        "Correct : menace = le cambrioleur, vulnérabilité = la fenêtre ouverte, risque = la probabilité et l'impact du cambriolage.",
        "Faux : la fenêtre ouverte n'est pas un risque en soi, c'est la faiblesse que la menace pourrait exploiter.",
        "Faux : les deux derniers termes sont intervertis ; la fenêtre est la vulnérabilité et le vol potentiel est le risque."
      ]
    }
  ],
  quizEn: [],
  flashcards: [
    { recto: "CPU (Central Processing Unit)", verso: "Le processeur : le « cuisinier » de l'ordinateur, qui exécute les instructions une à une, très rapidement." },
    { recto: "RAM (Random Access Memory)", verso: "La mémoire vive : zone de travail rapide mais volatile — son contenu s'efface quand la machine s'éteint (contrairement au disque)." },
    { recto: "OS (Operating System)", verso: "Le système d'exploitation (Windows, Linux, macOS…) : le chef d'orchestre qui relie matériel et programmes et applique les permissions." },
    { recto: "IP address", verso: "L'adresse IP : l'« adresse postale » d'une machine sur un réseau (ex. 192.168.1.20), utilisée pour acheminer les paquets." },
    { recto: "DNS (Domain Name System)", verso: "L'« annuaire d'Internet » : il traduit un nom lisible (www.exemple.com) en adresse IP compréhensible par les machines." },
    { recto: "Server", verso: "Le serveur : machine puissante, allumée en continu, qui répond aux demandes des clients (navigateurs, applications)." },
    { recto: "Cloud (IaaS / PaaS / SaaS)", verso: "Location de ressources informatiques à l'usage : IaaS = local vide (machines nues), PaaS = cuisine équipée (plateforme pour son code), SaaS = restaurant (logiciel fini, ex. Gmail)." },
    { recto: "Encryption", verso: "Le chiffrement : transformer un message lisible en texte illisible sans la clé — un « coffre-fort portable » pour les données." },
    { recto: "Firewall", verso: "Le pare-feu : le « portier » du réseau, qui filtre le trafic entrant et sortant selon des règles (autoriser le web, refuser le reste)." },
    { recto: "Malware", verso: "Logiciel malveillant (malicious software) : terme générique couvrant virus, ransomware (rançongiciel), spyware et trojan (cheval de Troie)." }
  ]
};
