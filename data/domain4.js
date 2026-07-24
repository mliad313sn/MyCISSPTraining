/* Domaine 4 — données générées ; schéma : data/SCHEMA.md */
window.CISSP_DATA = window.CISSP_DATA || { domains: {} };
window.CISSP_DATA.domains[4] = {
  "id": 4,
  "code": "D4",
  "titre": "Sécurité des communications et des réseaux",
  "titreEn": "Communication and Network Security",
  "poids": "13%",
  "couleur": "#06d6a0",
  "icone": "🌐",
  "description": "Ce domaine couvre l'architecture réseau sécurisée : les modèles OSI et TCP/IP, les protocoles sécurisés comme TLS et IPsec, la segmentation, les réseaux sans fil, ainsi que les attaques réseau courantes et les équipements de défense. C'est un domaine technique qui pèse environ 13 % de l'examen : si vous n'avez pas de bagage réseau, prévoyez d'y consacrer plus de temps.",
  "objectifs": [
    "4.1 Appliquer les principes de conception sécurisée aux architectures réseau : modèles OSI et TCP/IP, IPv4/IPv6, protocoles sécurisés, protocoles multicouches et convergés, segmentation physique et logique, microsegmentation, SDN et SD-WAN, réseaux sans fil et cellulaires, CDN et edge networks",
    "4.2 Sécuriser les composants réseau : matériel et redondance, supports de transmission, Network Access Control (NAC), sécurité des endpoints, pare-feux et proxys",
    "4.3 Mettre en oeuvre des canaux de communication sécurisés : voix et collaboration (VoIP), accès distant, communications de données, connectivité tierce"
  ],
  "lecons": [
    {
      "id": "d4-l1",
      "titre": "Les modèles OSI et TCP/IP couche par couche",
      "duree": 12,
      "slides": [
        {
          "type": "intro",
          "titre": "Pourquoi des modèles en couches ?",
          "points": [
            "Le modèle OSI : cadre de référence en 7 couches créé par l'ISO",
            "Le modèle TCP/IP (DoD) : 4 couches, celui du monde réel",
            "Communication entre couches par encapsulation et de-encapsulation"
          ],
          "narration": "Bienvenue dans le domaine quatre, le domaine des réseaux. Pour que des machines très différentes puissent communiquer, on a défini des modèles en couches, où chaque couche rend un service précis à celle du dessus. Le modèle OSI, avec ses sept couches, est un cadre de référence abstrait créé par l'ISO, tandis que le modèle TCP/IP, en quatre couches, est celui réellement implémenté sur Internet. À l'examen, on vous demandera régulièrement à quelle couche opère tel protocole ou tel équipement, donc apprenez-les par coeur.",
          "astuce": "💡 Conseil examen : mémorisez un moyen mnémotechnique, par exemple « Please Do Not Throw Sausage Pizza Away » en partant de la couche 1."
        },
        {
          "type": "schema",
          "titre": "Les 7 couches du modèle OSI",
          "points": [
            "Couche 7 Application, couche 6 Présentation, couche 5 Session",
            "Couche 4 Transport, couche 3 Réseau, couche 2 Liaison, couche 1 Physique"
          ],
          "schema": {
            "type": "pyramid",
            "items": [
              "7. Application",
              "6. Présentation (Presentation)",
              "5. Session",
              "4. Transport",
              "3. Réseau (Network)",
              "2. Liaison de données (Data Link)",
              "1. Physique (Physical)"
            ]
          },
          "narration": "Voici la pile OSI complète, de la couche physique tout en bas jusqu'à la couche application tout en haut. Quand une donnée descend la pile, chaque couche ajoute son propre en-tête : c'est l'encapsulation. À la réception, chaque couche retire l'en-tête qui la concerne : c'est la de-encapsulation. Gardez ce schéma en tête, il structure tout le reste du domaine."
        },
        {
          "type": "standard",
          "titre": "Couche 1 — Physique",
          "points": [
            "Convertit les trames en bits transmis sur le support physique",
            "Équipements : hubs, repeaters, concentrateurs, amplificateurs",
            "Topologies : star, mesh, ring, bus",
            "Supports : cuivre, fibre optique, ondes radio"
          ],
          "narration": "La couche physique transforme les trames en bits, puis en signaux électriques, lumineux ou radio. On y trouve les équipements les plus simples : les hubs et les répéteurs, qui régénèrent le signal sans aucune intelligence. C'est aussi à ce niveau qu'on parle des topologies de réseau : l'étoile, le maillage, l'anneau et le bus. Retenez que la topologie en étoile, où chaque noeud est relié à un commutateur central, est aujourd'hui la plus répandue."
        },
        {
          "type": "standard",
          "titre": "Couche 2 — Liaison de données",
          "points": [
            "Formate les paquets en trames avec adresses matérielles source et destination",
            "Adresse MAC : 48 bits en hexadécimal, dont 24 bits d'OUI fabricant",
            "Protocoles : ARP, Ethernet 802.3, PPP, L2TP, 802.1X",
            "Équipements : switches, bridges, cartes réseau, points d'accès"
          ],
          "narration": "La couche liaison de données prépare les trames et y ajoute les adresses matérielles, les fameuses adresses MAC de quarante-huit bits. Les vingt-quatre premiers bits identifient le fabricant, c'est l'Organizationally Unique Identifier. Les switches et les bridges opèrent ici : ils commutent les trames en fonction de l'adresse MAC de destination. On y trouve aussi ARP, qui traduit une adresse IP en adresse MAC, et des protocoles de tunnel comme L2TP ou d'authentification comme 802.1X."
        },
        {
          "type": "standard",
          "titre": "Couche 3 — Réseau",
          "points": [
            "Adressage logique et routage des paquets, sans garantie de livraison",
            "Protocoles : IPv4, IPv6, IPsec, ICMP, IGMP",
            "Protocoles de routage intérieurs : RIP et OSPF ; extérieur : BGP",
            "Équipements : routeurs et pare-feux à filtrage de paquets"
          ],
          "narration": "La couche réseau gère l'adressage logique et le routage : c'est le royaume du protocole IP et des routeurs. ICMP y fournit les messages d'erreur et de contrôle, c'est lui qui fait fonctionner le ping et le traceroute. Côté routage, distinguez les protocoles à vecteur de distance comme RIP, qui comptent les sauts, des protocoles à état de liens comme OSPF, qui tiennent compte de la vitesse et de la latence. BGP, lui, est le protocole extérieur qui relie les systèmes autonomes sur Internet.",
          "astuce": "💡 Conseil examen : RIP compte les hops, OSPF calcule le chemin le plus court, BGP route entre systèmes autonomes sur Internet."
        },
        {
          "type": "standard",
          "titre": "Couche 4 — Transport : TCP et UDP",
          "points": [
            "TCP : orienté connexion, fiable, full-duplex, three-way handshake SYN, SYN-ACK, ACK",
            "Drapeaux TCP : URG, ACK, PSH, RST, SYN, FIN",
            "UDP : sans connexion, best effort, rapide, en-tête minimal",
            "Segmentation, séquencement et contrôle d'erreurs"
          ],
          "narration": "La couche transport contrôle la session de bout en bout. TCP est le protocole fiable et orienté connexion : il ouvre chaque session par la poignée de main en trois temps, SYN, SYN-ACK puis ACK, et garantit l'ordre et l'intégrité des segments. UDP, au contraire, est sans connexion : il envoie ses datagrammes en mode meilleur effort, sans accusé de réception, ce qui le rend rapide et adapté à la voix ou à la vidéo. Retenez aussi les six drapeaux TCP, souvent testés à l'examen."
        },
        {
          "type": "standard",
          "titre": "Couches 5, 6 et 7 — Session, Présentation, Application",
          "points": [
            "Session : établit, maintient et termine les dialogues ; simplex, half-duplex, full-duplex ; NetBIOS, RPC",
            "Présentation : formatage, compression, chiffrement ; JPEG, ASCII, MIME",
            "Application : interface avec les applications ; HTTP, DNS, SMTP, SSH, SIP"
          ],
          "narration": "Les trois couches hautes correspondent à la couche application unique du modèle TCP/IP. La couche session gère le dialogue entre deux machines et connaît trois modes : simplex à sens unique, half-duplex en alternance, et full-duplex simultané. La couche présentation met les données dans un format compréhensible par tous, avec la compression et une partie du chiffrement. Enfin, la couche application fait le lien avec vos logiciels : c'est là que vivent HTTP, DNS, SMTP ou encore SIP pour la voix sur IP."
        },
        {
          "type": "schema",
          "titre": "Encapsulation et unités de données (PDU)",
          "points": [
            "Couches 5 à 7 : data (PDU)",
            "Couche 4 : segment TCP ou datagram UDP",
            "Couche 3 : packet — Couche 2 : frame — Couche 1 : bit"
          ],
          "schema": {
            "type": "flow",
            "items": [
              "Data (L7-L5)",
              "Segment / Datagram (L4)",
              "Packet (L3)",
              "Frame (L2)",
              "Bits (L1)"
            ]
          },
          "narration": "Chaque couche donne un nom différent à son unité de données, le PDU. Dans les couches hautes on parle simplement de données, la couche transport produit des segments en TCP ou des datagrammes en UDP, la couche réseau des paquets, la couche liaison des trames, et la couche physique des bits. Ce vocabulaire précis est un grand classique des questions d'examen : si on vous parle de trames, vous savez qu'on est en couche deux."
        },
        {
          "type": "question",
          "titre": "Contrôle de connaissance",
          "points": [
            "Vérifions les couches et les équipements."
          ],
          "narration": "Petit contrôle avant de continuer. Réfléchissez bien à l'équipement mentionné et à l'unité de données qu'il manipule.",
          "q": "À quelle couche du modèle OSI un switch classique prend-il ses décisions de commutation ?",
          "choix": [
            "Couche 1 — Physique",
            "Couche 2 — Liaison de données",
            "Couche 4 — Transport",
            "Couche 3 — Réseau"
          ],
          "reponse": 1,
          "explication": "Un switch classique commute les trames en se basant sur les adresses MAC, qui appartiennent à la couche 2. Un hub opère en couche 1, un routeur en couche 3, et la couche 4 concerne TCP et UDP. Notez que certains switches multicouches savent aussi router en couche 3."
        },
        {
          "type": "standard",
          "titre": "Les ports à connaître",
          "points": [
            "FTP 20 et 21, SSH 22, Telnet 23, SMTP 25, DNS 53",
            "HTTP 80, HTTPS 443, POP3 110, IMAP 143",
            "LDAP 389, LDAPS 636, RDP 3389",
            "Plages : well-known 0 à 1023, registered 1024 à 49151, dynamiques au-delà"
          ],
          "narration": "Il existe soixante-cinq mille cinq cent trente-six ports, numérotés de zéro à soixante-cinq mille cinq cent trente-cinq, répartis en trois plages : les ports bien connus jusqu'à mille vingt-trois, les ports enregistrés, puis les ports dynamiques utilisés temporairement par les clients. Apprenez les grands classiques : vingt-deux pour SSH, vingt-cinq pour SMTP, cinquante-trois pour DNS, quatre-cent-quarante-trois pour HTTPS ou encore trois-mille-trois-cent-quatre-vingt-neuf pour le bureau à distance. Pensez aussi aux ports des services d'authentification : RADIUS utilise l'UDP mille-huit-cent-douze et TACACS plus le TCP quarante-neuf."
        },
        {
          "type": "standard",
          "titre": "Implications des protocoles multicouches",
          "points": [
            "Un protocole peut en encapsuler un autre à répétition : HTTP dans TLS, dans TCP, dans IP — voire IP dans un tunnel SSH",
            "Bénéfices : flexibilité, chiffrement possible à plusieurs couches, réutilisation de l'infrastructure existante",
            "Risques : canaux cachés (covert channels) et contournement de filtrage — un trafic interdit se glisse dans un protocole autorisé",
            "Exemples : DNS tunneling pour exfiltrer des données ; protocoles industriels Modbus/DNP3 ré-encapsulés sur TCP/IP",
            "Parade : inspection applicative profonde (deep packet inspection), pas un simple filtrage par ports"
          ],
          "narration": "TCP sur IP est déjà un empilement de protocoles, mais l'encapsulation peut aller beaucoup plus loin : on glisse du HTTP dans TLS, du TLS dans TCP, et l'on peut même encapsuler IP dans un tunnel SSH. Cette souplesse est une force, car elle permet de chiffrer à plusieurs niveaux et de réutiliser l'infrastructure en place. Mais elle a un revers : un protocole interdit peut se cacher à l'intérieur d'un protocole autorisé et franchir les pare-feux, c'est le principe du canal caché. Le DNS tunneling en est l'exemple classique, avec des données exfiltrées qui voyagent dans d'innocentes requêtes DNS ; c'est aussi ainsi que des protocoles industriels comme Modbus se retrouvent exposés une fois ré-encapsulés sur TCP IP. La parade est l'inspection applicative profonde, car un filtrage fondé sur les seuls numéros de ports ne voit rien.",
          "astuce": "💡 Conseil examen : « un protocole caché dans un autre pour franchir un filtre » égale implication des protocoles multicouches — la réponse défensive attendue est l'inspection profonde (DPI), pas le filtrage de ports."
        },
        {
          "type": "resume",
          "titre": "Résumé de la leçon",
          "points": [
            "OSI : 7 couches abstraites ; TCP/IP : 4 couches concrètes",
            "Encapsulation en descendant, de-encapsulation en remontant",
            "Multicouches : l'encapsulation permet aussi canaux cachés et contournement de filtres — parade : DPI",
            "PDU : data, segment ou datagram, packet, frame, bit",
            "Équipements : hub en L1, switch en L2, routeur en L3",
            "TCP fiable avec three-way handshake, UDP rapide sans connexion"
          ],
          "narration": "Récapitulons. Le modèle OSI compte sept couches et sert de référence, tandis que TCP/IP en compte quatre et fait tourner Internet. Chaque couche a son unité de données, ses protocoles et ses équipements : le hub en couche physique, le switch en couche liaison, le routeur en couche réseau. Enfin, TCP offre la fiabilité avec sa poignée de main en trois temps, quand UDP privilégie la vitesse. Maîtrisez ce socle, tout le reste du domaine s'appuie dessus."
        }
      ]
    },
    {
      "id": "d4-l2",
      "titre": "IPv4, IPv6 et protocoles sécurisés",
      "duree": 13,
      "slides": [
        {
          "type": "intro",
          "titre": "Le protocole IP et sa sécurisation",
          "points": [
            "IPv4 : adresses sur 32 bits, épuisées depuis longtemps",
            "IPv6 : adresses sur 128 bits, conçu avec IPsec en tête",
            "IP est sans connexion : la sécurité vient des protocoles au-dessus"
          ],
          "narration": "Dans cette leçon, nous plongeons dans le protocole IP lui-même, puis dans les protocoles qui le sécurisent. IP est un protocole sans connexion : il achemine les paquets sans garantie ni chiffrement. La confidentialité et l'intégrité viennent donc de protocoles complémentaires comme TLS, IPsec, SSH ou DNSSEC, que tout candidat CISSP doit savoir comparer et positionner."
        },
        {
          "type": "standard",
          "titre": "IPv4 : classes, adresses privées et NAT",
          "points": [
            "Classes historiques : A jusqu'à 127, B jusqu'à 191, C jusqu'à 223",
            "Adresses privées RFC 1918 : 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16",
            "APIPA : 169.254.0.0/16 en cas d'échec du DHCP",
            "NAT traduit les adresses privées ; PAT y ajoute la traduction de ports"
          ],
          "narration": "IPv4 utilise des adresses de trente-deux bits, historiquement découpées en classes A, B et C. Comme les adresses publiques manquent, on utilise en interne les plages privées de la RFC dix-neuf-cent-dix-huit, non routables sur Internet. Le NAT traduit ces adresses privées en adresses publiques, et le PAT va plus loin en multiplexant de nombreux clients derrière une seule adresse publique grâce aux numéros de port. Enfin, si un poste n'obtient pas de bail DHCP, il s'attribue tout seul une adresse APIPA dans la plage cent-soixante-neuf point deux-cent-cinquante-quatre.",
          "astuce": "💡 Conseil examen : une adresse en 169.254.x.x signale presque toujours un serveur DHCP injoignable."
        },
        {
          "type": "standard",
          "titre": "Subnetting et notation CIDR",
          "points": [
            "Le masque sépare la partie réseau de la partie hôte",
            "CIDR : 192.168.1.0/24 signifie 24 bits de réseau, 254 hôtes utilisables",
            "On exclut toujours l'adresse de réseau et l'adresse de broadcast"
          ],
          "narration": "Le subnetting découpe un grand réseau en sous-réseaux plus faciles à gérer et à sécuriser. La notation CIDR résume le masque : slash vingt-quatre veut dire que les vingt-quatre premiers bits identifient le réseau, ce qui laisse deux-cent-cinquante-six adresses dont deux-cent-cinquante-quatre utilisables, car on réserve l'adresse du réseau et celle de broadcast. Savoir lire un slash seize ou un slash douze suffit largement pour l'examen : on teste votre compréhension, pas votre calcul mental."
        },
        {
          "type": "standard",
          "titre": "IPv6 et modes de diffusion",
          "points": [
            "IPv6 : 128 bits, SLAAC pour l'autoconfiguration, IPsec recommandé",
            "Unicast : un vers un — Broadcast : un vers tous (IPv4 seulement)",
            "Multicast : un vers un groupe abonné",
            "Anycast : vers le noeud le plus proche, utilisé par les CDN"
          ],
          "narration": "IPv6 modernise IP avec des adresses de cent-vingt-huit bits, soit un espace quasiment illimité, et l'autoconfiguration SLAAC qui permet à une machine de fabriquer son adresse à partir des annonces du routeur, sans serveur DHCP. Côté diffusion, retenez quatre modes : l'unicast d'une machine vers une autre, le broadcast vers tout le segment, le multicast vers un groupe d'abonnés, et l'anycast qui atteint le noeud le plus proche parmi plusieurs qui partagent la même adresse. L'anycast est la mécanique préférée des CDN pour servir l'utilisateur depuis le serveur le plus rapide."
        },
        {
          "type": "question",
          "titre": "Contrôle de connaissance",
          "points": [
            "Modes de diffusion et cas d'usage."
          ],
          "narration": "Voyons si les modes de diffusion sont bien en place. Pensez au besoin exprimé : servir chaque utilisateur depuis le point le plus proche.",
          "q": "Un Content Distribution Network veut diriger chaque utilisateur vers le serveur le plus proche partageant la même adresse IP. Quel mode de diffusion utilise-t-il ?",
          "choix": [
            "Unicast",
            "Broadcast",
            "Anycast",
            "Multicast"
          ],
          "reponse": 2,
          "explication": "L'anycast permet à plusieurs serveurs de partager la même adresse : le routage achemine chaque client vers l'instance la plus proche ou la plus performante, ce qui est exactement le fonctionnement d'un CDN. Le broadcast envoie à tous, le multicast à un groupe abonné, et l'unicast à un destinataire unique."
        },
        {
          "type": "standard",
          "titre": "TLS : le standard du web sécurisé",
          "points": [
            "TLS a remplacé SSL, désormais obsolète",
            "TLS 1.0 et 1.1 dépréciés : exigez TLS 1.2 ou 1.3",
            "Cryptographie hybride : asymétrique pour échanger une clé de session, symétrique ensuite",
            "Fournit chiffrement, intégrité et authentification via certificats X.509"
          ],
          "narration": "TLS, successeur de SSL, protège les transactions web, la messagerie et bien d'autres flux. Son fonctionnement repose sur la cryptographie hybride : la cryptographie asymétrique sert à échanger une clé de session éphémère, puis la cryptographie symétrique, beaucoup plus rapide, chiffre le reste des échanges. Les versions un point zéro et un point un sont dépréciées : une organisation sérieuse impose au minimum TLS un point deux, idéalement un point trois. Les certificats X point cinq-cent-neuf, vérifiables en temps réel via OCSP, assurent l'authentification du serveur."
        },
        {
          "type": "standard",
          "titre": "IPsec : AH, ESP et les deux modes",
          "points": [
            "AH (Authentication Header) : intégrité, authentification, anti-rejeu — pas de chiffrement",
            "ESP (Encapsulating Security Payload) : chiffrement et confidentialité du contenu",
            "Mode transport : seule la charge utile est chiffrée, de pair à pair",
            "Mode tunnel : paquet entier chiffré, de passerelle à passerelle",
            "IKE et ISAKMP gèrent les clés ; chaque session repose sur des Security Associations"
          ],
          "narration": "IPsec est la suite standard pour sécuriser IP, omniprésente dans les VPN. Retenez la répartition des rôles : l'Authentication Header garantit l'intégrité, l'authentification et la protection contre le rejeu, mais ne chiffre rien ; l'Encapsulating Security Payload apporte le chiffrement et donc la confidentialité. En mode transport, seule la charge utile est protégée, ce qui convient aux échanges de machine à machine ; en mode tunnel, c'est le paquet entier, en-tête compris, idéal entre deux passerelles de sites. Les clés sont négociées par IKE, qui s'appuie sur ISAKMP pour organiser les Security Associations, chacune représentant une connexion simplex.",
          "astuce": "💡 Conseil examen : AH authentifie sans chiffrer, ESP chiffre. Si la question parle de confidentialité, la réponse contient ESP."
        },
        {
          "type": "standard",
          "titre": "SSH, SFTP et Kerberos",
          "points": [
            "SSH : administration distante entièrement chiffrée sur TCP 22",
            "SFTP : transfert de fichiers chiffré s'appuyant sur SSH",
            "Kerberos : authentification réseau et SSO sur les LAN, coeur d'Active Directory"
          ],
          "narration": "SSH est le protocole d'administration à distance par excellence : tout le trafic est chiffré, contrairement au vieux Telnet qui transmet tout en clair. SFTP s'appuie sur SSH pour transférer des fichiers de manière sécurisée. Kerberos, de son côté, n'est pas un protocole de chiffrement de flux mais un protocole d'authentification réseau : il fournit l'authentification unique, le single sign-on, sur les réseaux locaux, et c'est lui qui fait battre le coeur d'Active Directory."
        },
        {
          "type": "standard",
          "titre": "Sécuriser le DNS et la messagerie",
          "points": [
            "DNSSEC : signatures cryptographiques des réponses DNS contre le poisoning",
            "SPF : liste des serveurs autorisés à émettre pour un domaine",
            "DKIM : signature numérique des messages via une clé publiée en DNS",
            "DMARC : politique d'alignement s'appuyant sur SPF et DKIM",
            "S/MIME, STARTTLS et SMTPS implicite pour chiffrer les échanges"
          ],
          "narration": "Le DNS et la messagerie sont nés sans sécurité, il faut donc la rajouter. DNSSEC signe cryptographiquement les réponses DNS, ce qui permet au client de vérifier leur authenticité et contrecarre l'empoisonnement de cache. Pour l'email, trois protocoles complémentaires luttent contre l'usurpation : SPF publie la liste des serveurs autorisés à émettre, DKIM signe chaque message avec une clé privée vérifiable en DNS, et DMARC définit la politique à appliquer quand l'alignement échoue, par exemple mettre en quarantaine ou rejeter. Enfin, S/MIME chiffre et signe les messages de bout en bout grâce à une PKI, tandis que STARTTLS ou le SMTPS implicite sur le port quatre-cent-soixante-cinq chiffrent le transport."
        },
        {
          "type": "question",
          "titre": "Contrôle de connaissance",
          "points": [
            "AH ou ESP, il faut choisir."
          ],
          "narration": "Question de synthèse sur IPsec, un incontournable de l'examen.",
          "q": "Une organisation exige la CONFIDENTIALITÉ des données échangées entre deux passerelles de sites via IPsec. Quelle combinaison est la PLUS appropriée ?",
          "choix": [
            "ISAKMP en mode transport",
            "AH en mode transport",
            "ESP en mode tunnel",
            "AH en mode tunnel"
          ],
          "reponse": 2,
          "explication": "Seul ESP fournit le chiffrement, donc la confidentialité ; entre deux passerelles, le mode tunnel protège le paquet entier, en-tête compris. AH n'offre aucun chiffrement, quel que soit le mode, et ISAKMP est un cadre de gestion de clés, pas un mode de protection du trafic."
        },
        {
          "type": "standard",
          "titre": "Protocoles convergés : FCoE, iSCSI, MPLS, VoIP",
          "points": [
            "Convergence : faire voyager des protocoles spécialisés sur l'infrastructure Ethernet/IP standard",
            "FCoE (Fibre Channel over Ethernet) : trafic de stockage Fibre Channel encapsulé dans des trames Ethernet — réseau 10 Gbps minimum, reste en couche 2",
            "iSCSI : commandes de stockage SCSI encapsulées dans TCP/IP — un SAN économique sur un réseau IP standard, sans matériel dédié",
            "MPLS : commutation rapide par labels, indépendante du protocole transporté ; VoIP : la voix dans des paquets IP ordinaires",
            "Risque : le trafic convergé hérite des attaques du réseau porteur — segmentation et chiffrement obligatoires"
          ],
          "narration": "Parlons maintenant des protocoles convergés, un item explicite de l'outline officiel. La convergence consiste à faire transiter sur un même réseau Ethernet et IP des trafics historiquement séparés, comme le stockage ou la voix. FCoE, Fibre Channel over Ethernet, encapsule le trafic de stockage Fibre Channel directement dans des trames Ethernet à haut débit, en restant en couche deux. iSCSI, lui, encapsule les commandes SCSI dans TCP sur IP : on obtient un réseau de stockage, un SAN, sur une infrastructure IP tout à fait ordinaire et bien moins coûteuse. MPLS commute les paquets par labels sans se soucier du protocole transporté, et la voix sur IP est l'exemple le plus quotidien de convergence. Retenez le revers de la médaille : un trafic convergé hérite de toutes les attaques du réseau IP, il faut donc le segmenter et le chiffrer.",
          "astuce": "💡 Conseil examen : « stockage SCSI sur un réseau IP standard » égale iSCSI ; « stockage sur Ethernet haut débit, couche 2 » égale FCoE."
        },
        {
          "type": "question",
          "titre": "Contrôle de connaissance",
          "points": [
            "Reconnaître le bon protocole convergé."
          ],
          "narration": "Question type de l'examen sur les protocoles convergés. Lisez bien l'indice : réseau IP standard, sans matériel dédié.",
          "q": "Quel protocole transporte des commandes de stockage SCSI sur un réseau IP standard, sans matériel dédié ?",
          "choix": [
            "FCoE",
            "SRTP",
            "MPLS",
            "iSCSI"
          ],
          "reponse": 3,
          "explication": "iSCSI encapsule les commandes SCSI dans TCP/IP : n'importe quel réseau IP standard peut ainsi porter un SAN, sans équipement spécialisé. FCoE encapsule le Fibre Channel dans des trames Ethernet (couche 2, réseau 10 Gbps dédié, pas IP), MPLS est une technique de commutation par labels, et SRTP sécurise les flux média de la VoIP."
        },
        {
          "type": "standard",
          "titre": "InfiniBand et Compute Express Link (CXL)",
          "points": [
            "InfiniBand : interconnexion à très haut débit et très faible latence des clusters HPC et du stockage — RDMA : accès direct à la mémoire d'un serveur distant sans solliciter son CPU",
            "Sécurité InfiniBand : cloisonnement du fabric par partitions (P_Key), mais pas de chiffrement natif — isoler ce réseau des zones moins sûres",
            "Compute Express Link (CXL) : interconnexion ouverte bâtie sur PCIe reliant CPU, accélérateurs (GPU) et modules de mémoire avec cohérence de cache",
            "CXL permet la mutualisation de mémoire (memory pooling) entre hôtes — isolement des locataires, effacement de la mémoire réallouée, chiffrement IDE des liens"
          ],
          "narration": "L'outline officiel cite deux autres protocoles convergés à connaître. InfiniBand est l'interconnexion privilégiée des clusters de calcul haute performance et du stockage : un débit énorme, une latence minuscule, et surtout le RDMA, l'accès direct à la mémoire d'un serveur distant sans passer par son processeur. C'est très rapide, mais un flux qui contourne le système d'exploitation échappe aussi à une partie de ses contrôles : on cloisonne donc le fabric avec des partitions, et comme le chiffrement natif fait défaut, on isole ce réseau des zones moins sûres. Compute Express Link, ou CXL, est plus récent : bâti sur PCIe, il relie processeurs, accélérateurs et modules de mémoire en maintenant la cohérence de cache, jusqu'à mutualiser la mémoire entre plusieurs hôtes. Qui dit mémoire partagée dit risque de fuite entre locataires : il faut garantir l'isolement, effacer la mémoire avant réallocation et activer le chiffrement des liens quand il est disponible.",
          "astuce": "💡 Conseil examen : « cluster HPC, RDMA, très faible latence » égale InfiniBand ; « mémoire cohérente mutualisée sur PCIe entre CPU et accélérateurs » égale CXL."
        },
        {
          "type": "resume",
          "titre": "Résumé de la leçon",
          "points": [
            "IPv4 en 32 bits avec RFC 1918 et NAT/PAT ; IPv6 en 128 bits avec SLAAC",
            "Unicast, broadcast, multicast, anycast : quatre modes de diffusion",
            "TLS 1.2/1.3 et cryptographie hybride pour le web",
            "IPsec : AH pour l'authentification, ESP pour le chiffrement, transport ou tunnel",
            "Protocoles convergés : FCoE (stockage sur Ethernet), iSCSI (SCSI sur TCP/IP), MPLS, VoIP",
            "InfiniBand (HPC, RDMA, partitions P_Key) et Compute Express Link (CXL, mémoire cohérente sur PCIe)",
            "DNSSEC, SPF, DKIM, DMARC et S/MIME sécurisent DNS et messagerie"
          ],
          "narration": "En résumé, IP fournit l'acheminement mais aucune sécurité intrinsèque. Vous savez maintenant lire une adresse IPv4 en notation CIDR, situer les plages privées, et distinguer les quatre modes de diffusion jusqu'à l'anycast des CDN. Côté protection, TLS règne sur le web, IPsec sur les VPN avec son duo AH et ESP, SSH sur l'administration, et le trio SPF, DKIM, DMARC défend la messagerie. Ces protocoles reviendront sans cesse dans les questions du domaine."
        }
      ]
    },
    {
      "id": "d4-l3",
      "titre": "Segmentation, SDN et architectures modernes",
      "duree": 12,
      "slides": [
        {
          "type": "intro",
          "titre": "Diviser pour mieux protéger",
          "points": [
            "La segmentation limite la propagation des attaques et les mouvements latéraux",
            "Du physique au logique : air gap, VLAN, VRF, microsegmentation",
            "Le SDN centralise l'intelligence du réseau"
          ],
          "narration": "Un réseau à plat, où tout communique avec tout, est le rêve de l'attaquant : une seule machine compromise et tout le parc est à portée. La segmentation consiste à découper le réseau en zones aux politiques distinctes, du simple VLAN jusqu'à l'isolement physique complet. Nous verrons ensuite comment le Software Defined Networking et ses dérivés rendent cette segmentation programmable et dynamique."
        },
        {
          "type": "standard",
          "titre": "Segmentation physique",
          "points": [
            "In-band management : administration via le réseau de production, moins sûr",
            "Out-of-band management : réseau d'administration dédié et séparé",
            "Air gap : isolement physique et logique total, typique des ICS",
            "Screened subnet (DMZ) : zone tampon entre Internet et le réseau interne"
          ],
          "narration": "Commençons par la segmentation physique. Administrer ses équipements in-band, c'est-à-dire via le même réseau que les données de production, est pratique mais risqué ; l'administration out-of-band, sur un réseau dédié, est nettement plus sûre. À l'extrême, l'air gap isole totalement un segment, physiquement et logiquement : c'est la norme pour les systèmes de contrôle industriels sensibles. Enfin, le screened subnet, l'ancienne DMZ, place les serveurs exposés à Internet dans une zone tampon encadrée par des pare-feux, afin de protéger le réseau interne."
        },
        {
          "type": "standard",
          "titre": "Protocoles industriels (ICS) : Modbus et DNP3",
          "points": [
            "Modbus : protocole de communication des automates (PLC), en série ou sur TCP — conçu SANS authentification ni chiffrement",
            "DNP3 : supervision SCADA des réseaux d'électricité et d'eau — lui aussi conçu sans sécurité native",
            "Impossible de « patcher » ces protocoles : la parade est l'isolement et la segmentation stricte",
            "Organiser les zones OT/IT selon le modèle Purdue, vu au domaine 3 ; air gap ou passerelles contrôlées"
          ],
          "narration": "Les environnements industriels utilisent des protocoles nés à une époque où la sécurité n'était pas une préoccupation. Modbus, le langage des automates programmables, et DNP3, très répandu dans la supervision des réseaux d'électricité et d'eau, ne prévoient nativement ni authentification ni chiffrement : quiconque parle le protocole peut envoyer des commandes. Comme on ne peut pas réécrire ces protocoles ni redémarrer une usine pour les patcher, la réponse du CISSP est architecturale : isoler et segmenter strictement les réseaux industriels, en organisant les zones selon le modèle Purdue vu au domaine trois, avec au besoin un air gap ou des passerelles unidirectionnelles contrôlées.",
          "astuce": "💡 Conseil examen : face à Modbus ou DNP3, la MEILLEURE réponse n'est jamais « ajouter un antivirus » mais « isoler et segmenter » le réseau OT."
        },
        {
          "type": "standard",
          "titre": "Segmentation logique : VLAN, VRF et domaines virtuels",
          "points": [
            "VLAN : segmentation de couche 2 imposée par les switches ; routage requis entre VLANs",
            "VRF : plusieurs tables de routage indépendantes sur un même routeur, en couche 3",
            "Virtual domains : plusieurs instances de pare-feu virtuelles dans un même boîtier"
          ],
          "narration": "La segmentation logique découpe un même matériel en plusieurs réseaux virtuels. Le VLAN partitionne un réseau physique en segments de couche deux : pour passer d'un VLAN à l'autre, il faut obligatoirement une fonction de routage, ce qui crée un point de contrôle. Le Virtual Routing and Forwarding transpose l'idée en couche trois : plusieurs tables de routage cohabitent sur le même routeur, ce qui autorise même des adresses IP qui se recouvrent. Les domaines virtuels, enfin, permettent de créer plusieurs pare-feux logiques indépendants dans un seul équipement physique."
        },
        {
          "type": "standard",
          "titre": "Microsegmentation et Zero Trust",
          "points": [
            "Zones très petites, parfois réduites à une seule machine ou un seul serveur",
            "Pare-feux distribués appliqués à l'interface de chaque VM ou conteneur",
            "IDS et IPS déployés au plus près des charges de travail",
            "Objectif : bloquer les mouvements latéraux, vérifier chaque accès"
          ],
          "narration": "La microsegmentation pousse la logique jusqu'au bout : chaque serveur critique, voire chaque machine virtuelle, devient sa propre zone de sécurité avec ses propres règles. Au lieu d'un pare-feu central, on distribue des pare-feux virtuels directement sur l'interface réseau de chaque charge de travail. C'est la brique technique du Zero Trust : on ne fait confiance à rien, on vérifie l'identité et le contexte de chaque requête avant d'ouvrir l'accès à la micro-zone. Le grand bénéfice, c'est l'arrêt net des mouvements latéraux d'un attaquant.",
          "astuce": "💡 Conseil examen : si la question associe « limiter le mouvement latéral » et « Zero Trust », pensez microsegmentation."
        },
        {
          "type": "schema",
          "titre": "SDN : les trois plans du réseau",
          "points": [
            "Plan d'application : les applications dialoguent avec le contrôleur via des API",
            "Plan de contrôle : l'intelligence centralisée qui calcule les chemins",
            "Plan de données : les équipements qui commutent les paquets"
          ],
          "schema": {
            "type": "flow",
            "items": [
              "Plan d'application (API northbound)",
              "Plan de contrôle (contrôleur SDN)",
              "Plan de données (forwarding)"
            ]
          },
          "narration": "Le Software Defined Networking sépare l'intelligence du réseau de son exécution. Dans un réseau classique, chaque switch possède son propre plan de contrôle et décide seul où envoyer les paquets. Dans un SDN, le plan de contrôle est centralisé dans un contrôleur, et les équipements se contentent d'appliquer ses instructions dans le plan de données. Les interfaces northbound relient le contrôleur aux applications situées au-dessus, les interfaces southbound le relient aux équipements situés en dessous. On ajoute souvent un plan de management, qui supervise et configure l'ensemble."
        },
        {
          "type": "standard",
          "titre": "SD-WAN, VXLAN et NFV",
          "points": [
            "SD-WAN : extension du SDN aux liaisons WAN, gère plusieurs ISP et le cloud",
            "VXLAN : étend les VLANs à travers les sous-réseaux, jusqu'à 16 millions de segments",
            "NFV : virtualise les fonctions réseau — pare-feu, NAT, IDS — hors du matériel dédié"
          ],
          "narration": "Le SD-WAN applique les principes du SDN aux liaisons longue distance : il pilote plusieurs opérateurs et types de liens pour optimiser coût, débit et fiabilité, ce qui accompagne parfaitement les migrations vers le cloud. Le VXLAN, lui, encapsule des trames de couche deux dans des paquets de couche trois : on peut ainsi étirer un segment logique à travers des sous-réseaux et des sites distants, avec jusqu'à seize millions de réseaux virtuels contre quatre mille quatre-vingt-seize VLANs classiques ; c'est aussi un outil de microsegmentation. Enfin, la Network Function Virtualization transforme les fonctions réseau, pare-feu, NAT, détection d'intrusion, en logiciels découplés du matériel."
        },
        {
          "type": "question",
          "titre": "Contrôle de connaissance",
          "points": [
            "SDN : qui décide, qui exécute ?"
          ],
          "narration": "Vérifions la compréhension des plans du SDN, un sujet que l'examen adore.",
          "q": "Dans une architecture SDN, quel plan détermine le chemin optimal que doivent emprunter les paquets ?",
          "choix": [
            "Le plan de contrôle",
            "Le plan d'application",
            "Le plan de management",
            "Le plan de données"
          ],
          "reponse": 0,
          "explication": "Le plan de contrôle est l'intelligence du réseau : il calcule les routes et transmet ses décisions au plan de données, qui se contente de commuter les paquets. Le plan de management supervise et configure l'ensemble, et le plan d'application héberge les applications qui dialoguent avec le contrôleur via des API."
        },
        {
          "type": "standard",
          "titre": "Flux de trafic, edge et CDN",
          "points": [
            "Trafic north-south : entre le datacenter et l'extérieur",
            "Trafic east-west : latéral, entre serveurs au sein du datacenter",
            "Edge networks : rapprocher les services de l'utilisateur pour réduire la latence",
            "CDN : contenu distribué géographiquement ; peering entre réseaux ; VPC dans le cloud"
          ],
          "narration": "Deux directions structurent l'analyse du trafic : le nord-sud, qui entre et sort du datacenter vers les clients, et l'est-ouest, qui circule latéralement entre les serveurs internes. La microsegmentation vise justement ce trafic est-ouest, angle mort des défenses périmétriques classiques. Les réseaux edge et les CDN rapprochent contenus et services de l'utilisateur final pour réduire la latence, souvent grâce à l'anycast. Le peering interconnecte directement deux réseaux sans transiter par un tiers, et dans le cloud, le Virtual Private Cloud offre une portion logiquement isolée de l'infrastructure d'un fournisseur public."
        },
        {
          "type": "standard",
          "titre": "Supervision et métriques de performance",
          "points": [
            "Bandwidth : capacité théorique ; throughput : débit réellement atteint",
            "Latency : temps d'aller-retour ; jitter : variation de la latence",
            "Signal-to-noise ratio élevé souhaité ; traffic shaping pour prioriser la voix",
            "Observabilité, gestion de capacité et détection de pannes"
          ],
          "narration": "Un réseau sécurisé doit aussi être supervisé et performant. Distinguez la bande passante, capacité théorique maximale, du débit réel effectivement transféré. La latence mesure le temps d'aller-retour d'un signal, et le jitter sa variation dans le temps : la voix sur IP déteste le jitter. On cherche donc une latence et un jitter faibles, un rapport signal sur bruit élevé et un débit élevé. Le traffic shaping priorise les flux critiques, la gestion de capacité anticipe la demande, et l'observabilité donne la visibilité nécessaire pour détecter pannes et anomalies."
        },
        {
          "type": "standard",
          "titre": "Virtual Private Cloud (VPC) : le réseau dans le cloud",
          "points": [
            "VPC : portion logiquement isolée du cloud public, avec son propre plan d'adressage privé (CIDR)",
            "Subnets publics (route vers l'internet gateway) et privés (sortie uniquement via NAT gateway) — bases de données en subnet privé",
            "Security group : au niveau de l'instance, stateful, règles d'AUTORISATION uniquement (le trafic retour est admis automatiquement)",
            "NACL (network access control list) : au niveau du subnet, stateless, règles allow ET deny évaluées dans l'ordre",
            "VPC peering : non transitif ; transit gateway en hub pour interconnecter de nombreux VPC et sites"
          ],
          "narration": "Le Virtual Private Cloud mérite mieux qu'une simple définition : c'est votre réseau privé découpé logiquement dans le cloud d'un fournisseur public, avec votre propre plan d'adressage. On y distingue les subnets publics, qui possèdent une route vers l'internet gateway, des subnets privés, qui ne sortent qu'à travers une passerelle NAT et où l'on place bases de données et serveurs applicatifs. Deux niveaux de filtrage se complètent. Le security group s'applique à l'instance : il est stateful, c'est-à-dire qu'il laisse automatiquement revenir les réponses, et il ne contient que des règles d'autorisation. La NACL, elle, s'applique à tout le subnet : elle est stateless, il faut donc penser au trafic retour, et elle sait explicitement interdire, ce qui la rend idéale pour bloquer une plage d'adresses hostile. Retenez enfin que le peering entre deux VPC n'est pas transitif : pour relier de nombreux VPC entre eux, on passe par un transit gateway en étoile.",
          "astuce": "💡 Conseil examen : security group égale stateful, instance, allow uniquement ; NACL égale stateless, subnet, allow et deny. « Bloquer explicitement une plage d'adresses » égale NACL."
        },
        {
          "type": "standard",
          "titre": "Outils de supervision : NetFlow, SNMPv3 et syslog",
          "points": [
            "NetFlow/IPFIX : métadonnées des flux (qui parle à qui, quand, quel volume) sans capturer le contenu — détection d'exfiltration et d'anomalies",
            "SNMP v1/v2c : community strings en clair, à proscrire ; SNMPv3 : authentification et chiffrement",
            "Syslog centralisé vers le SIEM, horloges synchronisées par NTP, intégrité des journaux",
            "Traffic shaping : retarder les flux non prioritaires pour garantir les flux critiques (QoS) ; capacity management : anticiper la demande ; fault detection : repérer les pannes"
          ],
          "narration": "Passons aux outils de supervision. NetFlow, et son standard IPFIX, exportent les métadonnées des conversations réseau : qui parle à qui, sur quel port, quel volume et à quelle heure, sans capturer le contenu des paquets. C'est un moyen précieux et économe pour repérer une exfiltration de données ou un poste qui se met soudain à balayer le réseau. Pour administrer les équipements, SNMP versions un et deux c transmettent leurs community strings en clair, autant dire un mot de passe sur une carte postale : seule la version trois, avec authentification et chiffrement, est acceptable. Les journaux partent en syslog vers un collecteur central ou un SIEM, avec des horloges synchronisées par NTP pour que les investigations tiennent la route. Ajoutez la gestion de la performance : le traffic shaping retarde les flux non prioritaires pour préserver la qualité des flux critiques, la gestion de capacité anticipe la croissance avant la saturation, et la détection de pannes s'appuie sur cette observabilité.",
          "astuce": "💡 Conseil examen : « visibilité sur les flux sans capture complète des paquets » égale NetFlow ; « supervision d'équipements authentifiée et chiffrée » égale SNMPv3."
        },
        {
          "type": "resume",
          "titre": "Résumé de la leçon",
          "points": [
            "Segmentation physique : in-band, out-of-band, air gap, screened subnet",
            "ICS : Modbus et DNP3 sans sécurité native — isoler et segmenter selon le modèle Purdue",
            "Segmentation logique : VLAN en couche 2, VRF en couche 3, domaines virtuels",
            "Microsegmentation et pare-feux distribués : socle du Zero Trust",
            "SDN : contrôle centralisé ; SD-WAN pour le WAN ; VXLAN pour étirer les segments",
            "North-south contre east-west ; edge, CDN, peering et VPC",
            "VPC : subnets publics/privés ; security group stateful (instance) vs NACL stateless (subnet) ; peering non transitif",
            "Supervision : NetFlow pour les flux, SNMPv3 seul acceptable, traffic shaping et capacity management"
          ],
          "narration": "Retenez la gradation : segmentation physique jusqu'à l'air gap pour les systèmes les plus critiques, segmentation logique avec VLAN et VRF pour le quotidien, et microsegmentation pour bâtir le Zero Trust en bloquant les mouvements latéraux. Le SDN centralise le plan de contrôle, le SD-WAN étend cette logique aux liaisons distantes et le VXLAN affranchit les segments des contraintes géographiques. Enfin, pensez toujours aux deux axes de trafic, nord-sud et est-ouest : les architectures modernes se jugent sur leur capacité à contrôler les deux."
        }
      ]
    },
    {
      "id": "d4-l4",
      "titre": "Réseaux sans fil : Wi-Fi, Bluetooth, cellulaire",
      "duree": 12,
      "slides": [
        {
          "type": "intro",
          "titre": "L'air, un support que tout le monde partage",
          "points": [
            "Réseaux unbound : radio, lumière, satellite — pas de câble à protéger",
            "Le signal déborde des murs : le chiffrement est vital",
            "Du WEP cassé au WPA3 moderne : une histoire d'erreurs corrigées"
          ],
          "narration": "Les réseaux sans fil, dits unbound, transmettent par ondes radio ou lumière : impossible d'enfermer le signal dans un câble, il traverse les murs et atteint le parking. La sécurité repose donc entièrement sur le chiffrement et l'authentification. L'histoire du Wi-Fi est une succession de protocoles cassés puis remplacés, et l'examen adore vous demander lequel utiliser aujourd'hui et pourquoi les anciens ont échoué."
        },
        {
          "type": "standard",
          "titre": "WEP et WPA : les leçons du passé",
          "points": [
            "WEP : clé RC4 statique partagée, IV court transmis en clair, aucune intégrité sérieuse",
            "WPA avec TKIP : rustine temporaire, aujourd'hui dépréciée",
            "LEAP, propriétaire Cisco : à éviter au profit d'EAP-TLS"
          ],
          "narration": "Le WEP, défini par le standard huit-cent-deux point onze d'origine, utilisait une clé RC4 statique partagée par tout le monde, avec un vecteur d'initialisation court transmis en clair et réutilisé : il se casse en quelques minutes. Le WPA et son protocole TKIP ont servi de rustine en attendant mieux, mais TKIP est lui aussi déprécié. Même sort pour LEAP, l'alternative propriétaire de Cisco. Le message de l'examen est simple : WEP, WPA, TKIP et LEAP appartiennent au musée."
        },
        {
          "type": "standard",
          "titre": "WPA2 : AES-CCMP, personal et enterprise",
          "points": [
            "IEEE 802.11i : WPA2 remplace WEP et WPA avec AES-CCMP",
            "Mode personal (PSK) : passphrase partagée, adapté au domicile",
            "Mode enterprise : 802.1X/EAP avec serveur d'authentification et comptes individuels"
          ],
          "narration": "WPA2, issu du standard huit-cent-deux point onze i, a introduit le chiffrement AES avec le protocole CCMP, solide encore aujourd'hui. Il existe en deux modes : le mode personnel, à clé pré-partagée, où tout le monde connaît la même passphrase, convient à la maison ; le mode entreprise s'appuie sur huit-cent-deux point un X et EAP, avec un serveur d'authentification et des identifiants individuels pour chaque utilisateur. En entreprise, la clé partagée est une faiblesse : un départ de collaborateur devrait imposer de la changer partout."
        },
        {
          "type": "standard",
          "titre": "WPA3 et SAE",
          "points": [
            "WPA3 personal : AES CCMP 128 bits ; WPA3 enterprise : 192 bits",
            "SAE — Simultaneous Authentication of Equals — remplace le PSK",
            "Dragonfly Key Exchange : preuve à divulgation nulle dérivée de Diffie-Hellman",
            "Protège contre les attaques par dictionnaire hors ligne"
          ],
          "narration": "WPA3 est le standard actuel. Sa grande nouveauté est SAE, la Simultaneous Authentication of Equals, qui remplace le mode à clé pré-partagée de WPA2. SAE réalise un échange Dragonfly, dérivé de Diffie-Hellman, sous forme de preuve à divulgation nulle de connaissance : le mot de passe n'est jamais transmis, et un attaquant qui capture l'échange ne peut plus mener d'attaque par dictionnaire hors ligne. La version entreprise de WPA3 monte le chiffrement à cent-quatre-vingt-douze bits.",
          "astuce": "💡 Conseil examen : associez WPA3 à SAE et Dragonfly ; c'est la réponse attendue dès qu'on parle d'authentification Wi-Fi moderne sans serveur d'entreprise."
        },
        {
          "type": "standard",
          "titre": "802.1X, EAP et l'authentification d'entreprise",
          "points": [
            "802.1X : contrôle d'accès réseau basé sur les ports, proxy vers un serveur AAA",
            "EAP : cadre d'authentification, pas une méthode unique",
            "EAP-TLS : certificats des deux côtés, référence de sécurité",
            "PEAP : encapsule EAP dans un tunnel TLS ; RADIUS sur UDP 1812, TACACS+ sur TCP 49"
          ],
          "narration": "Le standard huit-cent-deux point un X, nommé Port-Based Network Access Control, bloque toute communication tant que le client ne s'est pas authentifié auprès d'un service dédié, typiquement un serveur RADIUS. EAP n'est pas une méthode d'authentification mais un cadre qui en accueille plusieurs : mots de passe, certificats, cartes à puce. EAP-TLS, avec certificats côté client et côté serveur, est la référence ; PEAP protège les méthodes EAP plus faibles en les encapsulant dans un tunnel TLS. Évitez EAP-MD5 et les méthodes en clair.",
          "astuce": "💡 Conseil examen : 802.1X n'est pas réservé au Wi-Fi, il contrôle aussi l'accès aux ports des switches filaires."
        },
        {
          "type": "question",
          "titre": "Contrôle de connaissance",
          "points": [
            "Choisir le bon standard sans fil."
          ],
          "narration": "Mettez-vous dans la peau du RSSI qui déploie un nouveau réseau sans fil d'entreprise.",
          "q": "Quel mécanisme de WPA3 empêche les attaques par dictionnaire hors ligne sur le mot de passe du réseau ?",
          "choix": [
            "TKIP",
            "SAE avec l'échange Dragonfly",
            "WPS avec code PIN",
            "Le filtrage d'adresses MAC"
          ],
          "reponse": 1,
          "explication": "SAE, Simultaneous Authentication of Equals, effectue un échange Dragonfly en preuve à divulgation nulle : le mot de passe n'est jamais exposé, ce qui rend inopérantes les attaques par dictionnaire hors ligne. TKIP est un protocole déprécié de WPA, le PIN WPS est justement vulnérable au brute-force, et le filtrage MAC se contourne trivialement par usurpation d'adresse."
        },
        {
          "type": "standard",
          "titre": "Hygiène Wi-Fi : SSID, WPS, site survey",
          "points": [
            "SSID : nom du réseau ; ESSID partagé entre APs, BSSID unique par AP",
            "WPS : PIN de 8 chiffres validé en deux moitiés, vulnérable au brute-force — désactivez-le",
            "Site survey : cartographier signal et interférences",
            "Captive portal pour les invités ; MAC filtering : obstacle faible"
          ],
          "narration": "Quelques réflexes d'hygiène complètent le chiffrement. Le SSID est le nom diffusé du réseau ; plusieurs points d'accès peuvent partager le même ESSID pour permettre l'itinérance, chacun gardant un BSSID unique, son adresse MAC. Le Wi-Fi Protected Setup est une vraie faille : son code PIN de huit chiffres se valide en deux moitiés, souvent sans limitation de tentatives, donc la meilleure protection est de le désactiver. Un site survey mesure la couverture radio pour éviter que le signal ne déborde inutilement, le portail captif encadre les invités, et rappelez-vous que le filtrage MAC ne bloque que les attaquants paresseux."
        },
        {
          "type": "standard",
          "titre": "Bluetooth, Zigbee, NFC et RFID",
          "points": [
            "Bluejacking : messages non sollicités ; bluesnarfing : vol de données ; bluebugging : prise de contrôle",
            "Réflexes Bluetooth : désactiver la découverte, changer le PIN, couper hors usage",
            "Zigbee (IEEE 802.15.4) : IoT basse consommation, chiffrement AES 128 bits",
            "RFID et NFC : identification radio courte portée, pensez au paiement sans contact"
          ],
          "narration": "Le Bluetooth a sa propre famille d'attaques, à connaître par ordre de gravité : le bluejacking envoie des messages non sollicités, gênant mais bénin ; le bluesnarfing vole des données sur l'appareil ; et le bluebugging prend carrément le contrôle du téléphone, jusqu'à écouter les appels. Les parades sont simples : mode non découvrable, PIN modifié, Bluetooth coupé hors utilisation. Zigbee, basé sur huit-cent-deux point quinze point quatre, connecte les objets IoT à basse consommation et chiffre en AES cent-vingt-huit bits. Enfin, RFID et NFC assurent l'identification à courte portée, le NFC ajoutant la communication bidirectionnelle utilisée par le paiement sans contact."
        },
        {
          "type": "standard",
          "titre": "Cellulaire et satellite",
          "points": [
            "4G : LTE et WiMAX ; 5G : jusqu'à 10 Gbps, meilleure protection de l'identité de l'abonné",
            "Le chiffrement s'arrête souvent à l'antenne : ajoutez TLS ou un VPN",
            "Tours simulées : risque d'attaque on-path sur mobile",
            "Satellites : LEO à faible latence comme Starlink, MEO, GEO fixe à latence élevée"
          ],
          "narration": "Sur les réseaux cellulaires, le trafic est généralement chiffré entre le mobile et l'antenne, mais peut circuler en clair ensuite : ne considérez jamais le réseau de l'opérateur comme sûr et superposez TLS ou un VPN. La 5G améliore la protection de l'identité de l'abonné et impose l'authentification mutuelle, ce qui complique la simulation de tours malveillantes, un vecteur classique d'attaque on-path. Côté satellites, retenez les trois orbites : les constellations basses LEO offrent une faible latence, les orbites moyennes un compromis, et l'orbite géostationnaire une couverture fixe très large mais une latence élevée."
        },
        {
          "type": "resume",
          "titre": "Résumé de la leçon",
          "points": [
            "WEP, WPA/TKIP et LEAP : obsolètes ; WPA2 : AES-CCMP ; WPA3 : SAE et Dragonfly",
            "802.1X/EAP : contrôle d'accès par port avec serveur AAA ; préférez EAP-TLS ou PEAP",
            "Désactivez WPS ; le filtrage MAC et le masquage de SSID ne sont pas des protections",
            "Bluetooth : bluejacking, bluesnarfing, bluebugging par gravité croissante",
            "Cellulaire et satellite : chiffrez par-dessus, le réseau de l'opérateur n'est pas de confiance"
          ],
          "narration": "Retenez la chronologie Wi-Fi : WEP cassé, WPA et TKIP en sursis, WPA2 avec AES, et WPA3 avec SAE qui élimine les attaques par dictionnaire. En entreprise, l'authentification passe par huit-cent-deux point un X, EAP et un serveur RADIUS. Méfiez-vous des fausses protections comme le WPS, le filtrage MAC ou le masquage du SSID. Et pour le Bluetooth comme pour le cellulaire, le principe est le même : la couche radio n'est jamais une garantie, chiffrez au-dessus."
        }
      ]
    },
    {
      "id": "d4-l5",
      "titre": "Attaques réseau courantes et contre-mesures",
      "duree": 11,
      "slides": [
        {
          "type": "intro",
          "titre": "Connaître l'attaquant pour concevoir la défense",
          "points": [
            "Déni de service : saturer la disponibilité",
            "On-path (MITM) : s'interposer dans la communication",
            "Spoofing et poisoning : mentir sur son identité ou corrompre les annuaires"
          ],
          "narration": "Pour l'examen, il faut savoir reconnaître une attaque à partir de sa description et proposer la meilleure contre-mesure. Les attaques réseau se regroupent en trois grandes familles : celles qui saturent la disponibilité, comme les dénis de service ; celles qui s'interposent dans les échanges, les attaques on-path autrefois appelées man-in-the-middle ; et celles qui trompent les mécanismes d'adressage, le spoofing et le poisoning. Passons-les en revue."
        },
        {
          "type": "standard",
          "titre": "DoS et DDoS",
          "points": [
            "SYN flood : inonder de demandes de connexion jamais achevées",
            "DDoS : attaque distribuée depuis un botnet de machines compromises",
            "Contre-mesures : filtrage, rate limiting, services anti-DDoS, CDN"
          ],
          "narration": "Le déni de service vise la disponibilité. Le SYN flood exploite la poignée de main TCP : l'attaquant envoie des SYN en masse sans jamais terminer la connexion, jusqu'à épuiser les ressources du serveur. La version distribuée, le DDoS, mobilise un botnet de milliers de machines compromises, ce qui rend le simple blocage d'adresse inefficace. La défense combine le filtrage en amont, la limitation de débit, les services spécialisés d'atténuation et l'absorption par les CDN."
        },
        {
          "type": "standard",
          "titre": "Smurf, ping of death et teardrop",
          "points": [
            "Smurf : echo request ICMP envoyé en broadcast avec l'adresse de la victime usurpée — amplification",
            "Ping of death : paquets ping surdimensionnés qui font planter la cible",
            "Teardrop : fragments IP aux offsets incohérents qui cassent le réassemblage"
          ],
          "narration": "Trois classiques historiques restent au programme. L'attaque smurf envoie une requête d'écho ICMP à l'adresse de broadcast d'un réseau en usurpant l'adresse de la victime : tous les hôtes répondent à la victime en même temps, c'est le principe du réseau d'amplification. Le ping of death envoie des paquets ping surdimensionnés qui provoquaient gel ou redémarrage des systèmes anciens. Le teardrop, enfin, expédie des fragments IP dont les décalages se chevauchent, ce qui plantait le réassemblage. Retenez surtout leurs mécanismes : amplification, dépassement de taille et fragmentation malformée.",
          "astuce": "💡 Conseil examen : « broadcast + adresse source usurpée + ICMP » égale smurf ; « fragments qui se chevauchent » égale teardrop."
        },
        {
          "type": "standard",
          "titre": "Attaques on-path et ARP poisoning",
          "points": [
            "On-path (MITM) : l'attaquant s'interpose pour lire ou modifier les échanges",
            "ARP poisoning : associer la MAC de l'attaquant à l'IP de la passerelle",
            "Contre-mesures : chiffrement de bout en bout, dynamic ARP inspection, segmentation"
          ],
          "narration": "Dans une attaque on-path, l'ancien man-in-the-middle, l'attaquant s'insère entre deux interlocuteurs pour intercepter, voire modifier le trafic. Sur un réseau local, la méthode reine est l'empoisonnement ARP : l'attaquant diffuse de fausses réponses ARP pour associer sa propre adresse MAC à l'adresse IP de la passerelle par défaut ; tout le trafic sortant transite alors par lui. Les parades sont le chiffrement de bout en bout, qui rend l'interception stérile, l'inspection ARP dynamique sur les switches et une bonne segmentation."
        },
        {
          "type": "standard",
          "titre": "DNS poisoning et détournement de domaine",
          "points": [
            "DNS poisoning : fausses réponses DNS, cache corrompu, fichier hosts altéré, rogue DNS",
            "Domain hijacking : modification frauduleuse de l'enregistrement du domaine",
            "Contre-mesures : DNSSEC, verrouillage registrar, surveillance des enregistrements"
          ],
          "narration": "L'empoisonnement DNS falsifie la résolution de noms : serveur DNS pirate, corruption du cache d'un résolveur, altération du fichier hosts ou usurpation de réponses aux requêtes. La victime croit visiter son site de banque et atterrit chez l'attaquant. Le détournement de domaine, lui, s'attaque à l'enregistrement même du nom auprès du registrar, sans autorisation du propriétaire. Les défenses sont DNSSEC pour authentifier les réponses, le verrouillage des modifications chez le registrar, et la surveillance active des enregistrements."
        },
        {
          "type": "standard",
          "titre": "Spoofing, VLAN hopping et CAM flooding",
          "points": [
            "IP et MAC spoofing : usurper une adresse pour contourner les filtres",
            "VLAN hopping : sauter vers un VLAN normalement inaccessible",
            "CAM table flooding : saturer la table du switch pour le forcer à diffuser — port security"
          ],
          "narration": "L'usurpation d'adresse, IP ou MAC, permet de se faire passer pour un équipement de confiance et de contourner les listes de contrôle. Le VLAN hopping envoie des trames spécialement forgées pour atteindre un VLAN auquel le port de l'attaquant ne devrait pas donner accès : la parade passe par la configuration rigoureuse des trunks. Le CAM table flooding inonde le switch de fausses adresses MAC jusqu'à saturer sa table : le switch se met alors à diffuser toutes les trames comme un hub, offrant l'écoute à l'attaquant. La fonction port security des switches bloque cette attaque."
        },
        {
          "type": "question",
          "titre": "Contrôle de connaissance",
          "points": [
            "Identifier l'attaque à partir de son mécanisme."
          ],
          "narration": "À vous de jouer : reconnaissez l'attaque décrite, comme le jour de l'examen.",
          "q": "Un attaquant envoie des requêtes echo ICMP à l'adresse de broadcast d'un réseau en usurpant l'adresse IP de sa victime, qui est alors submergée de réponses. De quelle attaque s'agit-il ?",
          "choix": [
            "Teardrop",
            "Ping of death",
            "SYN flood",
            "Smurf"
          ],
          "reponse": 3,
          "explication": "C'est la signature exacte de l'attaque smurf : un réseau d'amplification répond en masse à la victime dont l'adresse a été usurpée dans la requête ICMP de broadcast. Le teardrop joue sur les fragments IP malformés, le SYN flood sur des connexions TCP inachevées, et le ping of death sur des paquets surdimensionnés."
        },
        {
          "type": "standard",
          "titre": "Attaques sans fil : evil twin et désassociation",
          "points": [
            "Evil twin : faux point d'accès imitant le SSID légitime pour capter le trafic",
            "Attaque de désassociation : trames de gestion forgées qui déconnectent les clients",
            "Attaques IV : exploitation de vecteurs d'initialisation prévisibles ou réutilisés",
            "Souvent combinées : déconnecter la victime pour la pousser vers le faux AP"
          ],
          "narration": "Côté sans fil, l'evil twin est un point d'accès pirate qui copie le nom du réseau légitime : les victimes s'y connectent de bonne foi et livrent leur trafic à l'attaquant. L'attaque de désassociation, ou deauthentication, exploite les trames de gestion du Wi-Fi pour déconnecter de force les clients ; elle sert de déni de service, mais aussi de rabatteur vers l'evil twin. Les attaques sur vecteur d'initialisation, qui ont tué le WEP, exploitent des IV courts, prévisibles ou réutilisés pour retrouver la clé. Les protections des trames de gestion introduites avec WPA3 réduisent fortement ces risques."
        },
        {
          "type": "standard",
          "titre": "Vue d'ensemble des contre-mesures",
          "points": [
            "Chiffrer partout : TLS, IPsec, WPA3 — l'interception devient inutile",
            "Durcir la couche 2 : port security, dynamic ARP inspection, trunks maîtrisés",
            "Authentifier les annuaires : DNSSEC, SPF, DKIM, DMARC",
            "Superviser : IDS/IPS, NetFlow, journaux — et segmenter pour contenir"
          ],
          "narration": "Prenons de la hauteur, comme le ferait un manager. Le chiffrement systématique neutralise la valeur de l'interception ; le durcissement de la couche deux, avec port security et inspection ARP, coupe les attaques locales ; l'authentification des infrastructures de noms et de messagerie ferme la porte aux usurpations ; et la supervision, couplée à la segmentation, permet de détecter puis de contenir ce qui passe malgré tout. À l'examen, la meilleure réponse est rarement un gadget : c'est la mesure qui traite la cause à l'échelle de l'organisation.",
          "astuce": "💡 Conseil examen : entre deux bonnes réponses techniques, choisissez celle qui protège le plus largement et durablement."
        },
        {
          "type": "resume",
          "titre": "Résumé de la leçon",
          "points": [
            "DoS/DDoS : SYN flood, smurf par amplification, ping of death, teardrop",
            "On-path via ARP poisoning ; parades : chiffrement et dynamic ARP inspection",
            "DNS poisoning et domain hijacking ; parade : DNSSEC et verrouillage registrar",
            "Couche 2 : spoofing, VLAN hopping, CAM flooding ; parade : port security",
            "Sans fil : evil twin, désassociation, attaques IV ; parade : WPA3"
          ],
          "narration": "Vous savez désormais reconnaître les grandes attaques réseau à leur mécanisme : l'amplification du smurf, les fragments du teardrop, les fausses réponses de l'ARP poisoning, le faux jumeau du Wi-Fi. Face à chacune, associez le bon réflexe : chiffrement de bout en bout, durcissement des switches, DNSSEC, WPA3 et supervision continue. Cette gymnastique attaque contre contre-mesure est exactement ce que l'examen attend de vous."
        }
      ]
    },
    {
      "id": "d4-l6",
      "titre": "Équipements, pare-feux, NAC, VPN et canaux sécurisés",
      "duree": 13,
      "slides": [
        {
          "type": "intro",
          "titre": "Les briques de la défense réseau",
          "points": [
            "Des équipements de base aux pare-feux nouvelle génération",
            "Contrôler qui entre : NAC et authentification",
            "Protéger les canaux : VPN, VoIP, accès distant et tiers"
          ],
          "narration": "Dernière leçon du domaine : les composants qui matérialisent la sécurité réseau. Nous partirons des équipements de base et des supports de transmission, puis nous monterons vers les pare-feux et les proxys, le contrôle d'accès réseau, et enfin la protection des canaux de communication, du VPN à la voix sur IP en passant par la connectivité avec les tiers."
        },
        {
          "type": "standard",
          "titre": "Équipements réseau essentiels",
          "points": [
            "Repeater et hub en couche 1 ; bridge et switch en couche 2 ; routeur en couche 3",
            "Modem : conversion analogique-numérique ; CSU/DSU : interface vers les liaisons numériques de l'opérateur",
            "Load balancer : active-active pleine capacité, active-passive capacité constante",
            "Alimentation redondante sur les équipements critiques"
          ],
          "narration": "Replaçons chaque équipement sur la pile. Le répéteur et le hub régénèrent bêtement le signal en couche physique. Le bridge relie deux segments et le switch commute les trames en couche deux, créant au passage des domaines de collision séparés. Le routeur interconnecte les réseaux en couche trois. Le modem convertit les signaux analogiques en signaux numériques, tandis que le couple CSU-DSU raccorde l'équipement aux liaisons numériques de l'opérateur. Les répartiteurs de charge existent en deux modes : l'actif-actif utilise toutes les ressources en temps normal mais perd de la capacité en cas de panne, tandis que l'actif-passif garde une réserve dormante et offre une capacité constante même en incident."
        },
        {
          "type": "standard",
          "titre": "Exploiter l'infrastructure : garantie, support et cycle de vie",
          "points": [
            "Warranty : réparation ou remplacement du matériel défaillant — vérifier durée, périmètre et délais de retour (RMA)",
            "Contrat de support : mises à jour logicielles, assistance et SLA de remplacement (4 heures, next business day) selon la criticité",
            "End-of-life / end-of-support : plus AUCUN correctif de sécurité — planifier le remplacement AVANT l'échéance",
            "Pièces de rechange (spares), alimentation redondante et maintenance préventive pour la disponibilité"
          ],
          "narration": "Sécuriser des composants réseau, c'est aussi les exploiter dans la durée. La garantie constructeur couvre la réparation ou l'échange du matériel défaillant : un manager en vérifie la durée, le périmètre et les délais de retour. Le contrat de support va plus loin : il donne accès aux mises à jour logicielles, à l'assistance technique et à des engagements de remplacement chiffrés, en quatre heures ou au jour ouvré suivant, à dimensionner selon la criticité de l'équipement. Le vrai signal d'alarme est la fin de support annoncée par le constructeur : un équipement end-of-support ne recevra plus aucun correctif de sécurité, chaque nouvelle vulnérabilité restera béante, il faut donc planifier son remplacement avant l'échéance. Complétez avec des pièces de rechange en stock, des alimentations redondantes et une maintenance préventive : la disponibilité se prépare, elle ne s'improvise pas.",
          "astuce": "💡 Conseil examen : un équipement réseau end-of-support est d'abord un risque de sécurité (plus de patchs), pas seulement un risque de panne."
        },
        {
          "type": "standard",
          "titre": "Supports de transmission",
          "points": [
            "UTP : économique et répandu ; STP : blindé contre les interférences EMI",
            "Catégories : Cat 5e pour 1 Gbps, Cat 6a pour 10 Gbps sur 100 mètres",
            "Fibre optique : immunisée aux EMI ; monomode longue distance, multimode courte",
            "Première cause de panne réseau : câbles défaillants ou mal configurés"
          ],
          "narration": "Le cuivre à paires torsadées domine les réseaux locaux : la version non blindée UTP est économique, la version blindée STP résiste aux interférences électromagnétiques des environnements industriels. Retenez les catégories utiles : Cat cinq e pour le gigabit, Cat six a pour dix gigabits sur cent mètres. La fibre optique transmet la lumière, ce qui l'immunise contre les interférences et les écoutes électromagnétiques : le monomode couvre de longues distances, le multimode les liaisons courtes du datacenter. Souvenez-vous enfin que la cause la plus fréquente d'indisponibilité réseau reste le câble défaillant ou mal branché, d'où l'importance de la sécurité physique du câblage."
        },
        {
          "type": "schema",
          "titre": "La famille des pare-feux",
          "points": [
            "Du simple filtre de paquets au pare-feu applicatif spécialisé"
          ],
          "schema": {
            "type": "flow",
            "items": [
              "Stateless (filtrage de paquets)",
              "Stateful (suivi des connexions)",
              "NGFW (inspection applicative, IPS, identités)",
              "WAF (protection dédiée des applications web)"
            ]
          },
          "narration": "Les pare-feux ont évolué en générations. Le pare-feu stateless filtre chaque paquet isolément selon adresses et ports, sans mémoire. Le pare-feu stateful suit l'état des connexions : il sait qu'une réponse correspond à une requête légitime, ce qui le rend bien plus pertinent. Le pare-feu nouvelle génération, le NGFW, ajoute l'inspection applicative profonde, la prévention d'intrusion et la prise en compte des identités des utilisateurs. Enfin, le Web Application Firewall se spécialise dans le trafic HTTP et HTTPS pour protéger les applications web contre les injections et autres attaques applicatives."
        },
        {
          "type": "standard",
          "titre": "Proxys et screened subnet",
          "points": [
            "Forward proxy : côté client, filtrage, cache et anonymisation",
            "Reverse proxy : devant les serveurs, répartition de charge et masquage du backend",
            "Transparent : sans configuration client ; nontransparent : configuration explicite",
            "Screened subnet (DMZ) : héberger les services exposés entre deux niveaux de pare-feu"
          ],
          "narration": "Le proxy s'interpose entre clients et serveurs. Le forward proxy sert les clients internes : filtrage de contenu, cache et anonymisation de leurs adresses. Le reverse proxy se place devant les serveurs : il répartit la charge, termine le TLS et masque l'architecture interne, souvent depuis un réseau de périmètre. Le proxy transparent intercepte le trafic sans aucune configuration côté client, quand le proxy non transparent exige une configuration explicite. Le screened subnet, l'ancienne DMZ, accueille les serveurs exposés à Internet dans une zone tampon contrôlée par des pare-feux, de sorte qu'une compromission n'ouvre pas le réseau interne."
        },
        {
          "type": "standard",
          "titre": "Network Access Control (NAC)",
          "points": [
            "Vérifier la conformité d'un poste avant ou après son admission au réseau",
            "Preadmission : conformité exigée avant l'accès ; postadmission : contrôle selon l'activité",
            "Agent permanent ou dissolvable ; agentless via l'infrastructure existante",
            "Posture assessment : patchs, antivirus, configuration — accès basé sur le risque"
          ],
          "narration": "Le Network Access Control applique la politique de sécurité à l'entrée du réseau : un poste non conforme, mal patché ou sans antivirus à jour, est bloqué ou mis en quarantaine. La philosophie preadmission exige la conformité avant d'accorder l'accès, la philosophie postadmission surveille l'activité après coup. Techniquement, on déploie soit un agent, permanent ou dissolvable au moment de la connexion, soit une approche agentless qui interroge l'infrastructure existante, pratique pour les imprimantes et objets connectés. L'évaluation de posture fait du NAC un contrôle d'accès fondé sur le risque, pilier d'une stratégie Zero Trust."
        },
        {
          "type": "standard",
          "titre": "Sécurité des endpoints : la défense host-based",
          "points": [
            "Le réseau ne voit pas tout : la défense doit aussi résider SUR la machine",
            "Host-based firewall : filtre le trafic de l'hôte et reste actif même hors du réseau d'entreprise",
            "HIDS/HIPS : détection (et prévention pour le HIPS) d'intrusion sur l'hôte — fichiers, processus, journaux",
            "EDR : analyse comportementale, investigation et réponse à distance ; antimalware, allow-listing, durcissement et patching",
            "Complément des contrôles réseau (défense en profondeur), jamais un remplacement"
          ],
          "narration": "Les contrôles réseau ne suffisent plus quand les portables voyagent et se connectent depuis n'importe où : la défense doit donc résider sur la machine elle-même. Le pare-feu host-based filtre le trafic entrant et sortant de l'hôte et continue de protéger le poste dans un hôtel ou un aéroport, là où le pare-feu de l'entreprise ne voit rien. Le HIDS surveille les fichiers, les processus et les journaux pour détecter une intrusion, et sa variante HIPS peut la bloquer. L'EDR modernise le tout avec l'analyse comportementale, la chasse aux menaces et la réponse à distance, comme l'isolement d'un poste compromis. Ajoutez l'antimalware, l'allow-listing des applications, le durcissement et les correctifs : l'endpoint devient une ligne de défense complète qui suit l'utilisateur partout, en complément, jamais en remplacement, des contrôles réseau.",
          "astuce": "💡 Conseil examen : si l'utilisateur est mobile ou hors du périmètre, la bonne réponse est un contrôle host-based qui suit la machine."
        },
        {
          "type": "question",
          "titre": "Contrôle de connaissance",
          "points": [
            "Choisir le bon équipement pour le bon besoin."
          ],
          "narration": "Question de mise en situation, très proche du style de l'examen.",
          "q": "Une organisation veut protéger spécifiquement son site de e-commerce contre les injections SQL et le cross-site scripting. QUEL équipement est le PLUS adapté ?",
          "choix": [
            "Un pare-feu à filtrage de paquets",
            "Un Web Application Firewall (WAF)",
            "Un pare-feu stateful",
            "Un IDS réseau"
          ],
          "reponse": 1,
          "explication": "Le WAF inspecte le contenu applicatif HTTP et HTTPS et bloque les attaques propres aux applications web comme l'injection SQL ou le XSS. Un pare-feu stateful ou à filtrage de paquets travaille sur les adresses, ports et états de connexion, sans comprendre la logique applicative, et un IDS détecte sans bloquer nativement."
        },
        {
          "type": "standard",
          "titre": "VPN : protocoles et tunnels",
          "points": [
            "PPTP : obsolète ; L2TP : pas de chiffrement seul, à coupler avec IPsec",
            "IPsec et TLS : les standards actuels ; WireGuard : moderne, code minimal, très rapide",
            "Full tunnel : tout le trafic passe par l'organisation",
            "Split tunnel : accès simultané au réseau interne et à Internet — risque de pont"
          ],
          "narration": "Le VPN crée un tunnel chiffré à travers un réseau public. Côté protocoles, PPTP est obsolète et L2TP ne chiffre rien par lui-même, d'où le classique couple L2TP sur IPsec ; les standards actuels sont IPsec, TLS et le moderne WireGuard, apprécié pour son code minimal et ses performances. La configuration compte autant que le protocole : en full tunnel, tout le trafic du poste distant transite par l'organisation et ses contrôles ; en split tunnel, le poste accède en même temps au réseau interne et directement à Internet, ce qui crée un pont potentiel pour un attaquant. Pour l'examen, le split tunnel est un risque à signaler.",
          "astuce": "💡 Conseil examen : L2TP seul ne chiffre pas ; la réponse sécurisée est toujours « L2TP/IPsec »."
        },
        {
          "type": "standard",
          "titre": "Authentification d'accès distant : PAP, CHAP, EAP",
          "points": [
            "PAP (Password Authentication Protocol) : identifiants transmis EN CLAIR — jamais acceptable",
            "CHAP (Challenge Handshake Authentication Protocol) : challenge-response, le secret ne circule jamais sur le réseau",
            "CHAP ré-authentifie périodiquement en cours de session, contre le vol de session",
            "EAP (Extensible Authentication Protocol) : un framework, pas une méthode — accueille certificats, cartes à puce, OTP"
          ],
          "narration": "Qui dit accès distant dit authentification, et l'examen adore comparer trois sigles. PAP, le Password Authentication Protocol, transmet le nom d'utilisateur et le mot de passe en clair sur le réseau : il ne doit jamais être utilisé. CHAP, le Challenge Handshake Authentication Protocol, procède par défi-réponse : le serveur envoie un challenge, le client répond avec un haché combinant le challenge et le secret, si bien que le mot de passe ne circule jamais en clair ; CHAP ré-authentifie même périodiquement pendant la session pour déjouer le vol de connexion. EAP, enfin, n'est pas une méthode d'authentification mais un cadre extensible qui en accueille des dizaines, des certificats aux cartes à puce, comme nous l'avons vu avec 802.1X.",
          "astuce": "💡 Conseil examen : PAP égale mot de passe en clair, éliminez-le d'office ; CHAP égale challenge-response sans transmission du secret ; EAP égale framework."
        },
        {
          "type": "standard",
          "titre": "Voix et collaboration : sécuriser la VoIP",
          "points": [
            "VoIP : protocole convergé encapsulant la voix dans IP ; SIP établit les sessions",
            "SIPS chiffre la signalisation avec TLS ; SRTP chiffre et authentifie les flux média",
            "VLAN voix dédié et QoS pour la priorité et l'isolement",
            "Héritage télécom : PBX à protéger, phreaking, vishing sur les canaux voix"
          ],
          "narration": "La voix sur IP est l'exemple type de protocole convergé : l'audio et la vidéo voyagent dans des paquets IP ordinaires, donc avec les vulnérabilités du réseau IP. La signalisation SIP, qui établit et termine les appels, se protège avec SIPS, sa version chiffrée par TLS ; les flux média eux-mêmes se protègent avec SRTP, qui ajoute chiffrement, authentification et protection contre le rejeu. On isole la téléphonie dans un VLAN voix dédié, avec une qualité de service qui lui garantit la priorité. N'oubliez pas l'héritage télécom : les PBX se protègent comme n'importe quel serveur, et le phreaking, la fraude téléphonique, existe toujours."
        },
        {
          "type": "standard",
          "titre": "Visioconférence et outils collaboratifs",
          "points": [
            "Zoom, Teams, Webex et salles équipées (Zoom rooms) : signalisation, audio, vidéo et partage transitent par IP — mêmes exigences que la VoIP",
            "Contre l'intrusion en réunion (meeting bombing) : salle d'attente (lobby), authentification des participants, codes de réunion uniques",
            "Chiffrement de transport par défaut ; chiffrement de bout en bout (E2EE) pour les échanges les plus sensibles",
            "Encadrer partage d'écran, enregistrements et messagerie instantanée : autorisations, stockage, rétention — et sensibiliser au vishing"
          ],
          "narration": "La collaboration ne se limite plus à la voix : visioconférence, partage d'écran et messagerie instantanée sont devenus le quotidien, y compris dans des salles de réunion équipées comme les Zoom rooms. Ces flux transitent par IP et méritent les mêmes protections que la VoIP, avec quelques risques propres. Le premier est l'intrusion en réunion, le fameux meeting bombing : on s'en protège par une salle d'attente, l'authentification des participants et des codes de réunion uniques, jamais réutilisés. Le deuxième est la confidentialité : le chiffrement de transport est généralement actif par défaut, mais les échanges les plus sensibles justifient un vrai chiffrement de bout en bout, quitte à renoncer à l'enregistrement dans le cloud. Encadrez enfin le partage d'écran, le stockage et la rétention des enregistrements, et sensibilisez les utilisateurs au vishing, cette ingénierie sociale par la voix qui prospère sur ces canaux.",
          "astuce": "💡 Conseil examen : pour une réunion sensible, pensez d'abord « salle d'attente, authentification, code unique » — l'E2EE protège le contenu, pas l'admission des participants."
        },
        {
          "type": "standard",
          "titre": "Accès distant et connectivité tierce",
          "points": [
            "Jumpbox : point d'entrée unique et durci vers une zone sensible",
            "VDI : postes de travail virtualisés côté serveur, données hors de l'endpoint",
            "Télétravail : authentification forte, VPN, protection des endpoints, sensibilisation",
            "Tiers : MOU pour l'intention, ISA pour les exigences techniques de l'interconnexion, moindre privilège"
          ],
          "narration": "L'accès distant multiplie les surfaces d'attaque, il faut donc l'encadrer par une politique dédiée. Le jumpbox concentre les connexions d'administration vers une zone sensible sur un serveur unique, durci et surveillé. La VDI garde les postes de travail dans le datacenter : l'utilisateur ne reçoit qu'un affichage, les données ne quittent pas le serveur. Pour le télétravail, combinez authentification forte, VPN, protection des endpoints et sensibilisation. Enfin, toute interconnexion avec un tiers mérite un cadre formel : le memorandum of understanding exprime l'intention, et l'interconnection security agreement fixe les exigences techniques et de sécurité du lien, le tout gouverné par le moindre privilège et une surveillance de l'usage."
        },
        {
          "type": "resume",
          "titre": "Résumé de la leçon",
          "points": [
            "Équipements par couche ; load balancing active-active ou active-passive",
            "Pare-feux : stateless, stateful, NGFW, WAF ; proxys forward et reverse ; screened subnet",
            "NAC : preadmission ou postadmission, agent ou agentless, posture assessment",
            "VPN : IPsec, TLS, WireGuard ; méfiance envers le split tunneling",
            "Authentification distante : PAP en clair (jamais), CHAP en challenge-response, EAP en framework",
            "VoIP : SIPS et SRTP ; accès distant via jumpbox et VDI ; tiers encadrés par MOU et ISA",
            "Exploitation : warranty et contrats de support (SLA), remplacement avant l'end-of-support",
            "Endpoints : host firewall, HIDS/HIPS, EDR — la défense suit la machine hors du périmètre",
            "Visioconférence : lobby, authentification, codes uniques ; E2EE pour les réunions sensibles"
          ],
          "narration": "Ce tour d'horizon clôt le domaine quatre. Vous savez situer chaque équipement sur la pile OSI, choisir le bon type de pare-feu selon la menace, et poser un NAC pour n'admettre que des postes conformes. Les canaux se protègent avec les bons protocoles : IPsec ou WireGuard pour les VPN, SIPS et SRTP pour la voix, et un cadre contractuel comme l'ISA pour les tiers. Gardez le réflexe du manager : défense en profondeur, moindre privilège et supervision permanente."
        }
      ]
    }
  ],
  "quiz": [
    {
      "q": "À quelle couche du modèle OSI le protocole IP opère-t-il ?",
      "choix": [
        "Couche 3 — Réseau",
        "Couche 2 — Liaison de données",
        "Couche 5 — Session",
        "Couche 4 — Transport"
      ],
      "reponse": 0,
      "explication": "IP assure l'adressage logique et le routage des paquets, fonctions de la couche 3 (Réseau). La couche 2 manipule les trames et les adresses MAC, la couche 4 gère TCP et UDP, et la couche 5 gère les sessions de dialogue.",
      "difficulte": 1,
      "pourquoi": [
        "Correct : IP assure l'adressage logique et le routage des paquets, fonctions définies à la couche 3 Réseau.",
        "Piège de confusion : la couche 2 manipule les trames et les adresses MAC, pas l'adressage logique IP.",
        "Hors sujet : la couche 5 gère l'ouverture et la clôture des dialogues, sans aucun rôle d'adressage.",
        "Piège de voisinage : la couche 4 transporte TCP et UDP au-dessus d'IP, elle ne route pas les paquets."
      ]
    },
    {
      "q": "Quelle est l'unité de données (PDU) manipulée à la couche 2 du modèle OSI ?",
      "choix": [
        "Le paquet",
        "Le segment",
        "Le bit",
        "La trame (frame)"
      ],
      "reponse": 3,
      "explication": "La couche Liaison de données encapsule les paquets dans des trames, avec les adresses MAC source et destination. Le paquet appartient à la couche 3, le segment à la couche 4, et le bit à la couche 1.",
      "difficulte": 1,
      "pourquoi": [
        "Piège d'une couche trop haut : le paquet est la PDU de la couche 3 Réseau.",
        "Piège d'une couche trop haut : le segment est la PDU de la couche 4 Transport.",
        "Piège d'une couche trop bas : le bit est l'unité de la couche 1 Physique.",
        "Correct : la couche Liaison de données encapsule les paquets dans des trames porteuses des adresses MAC."
      ]
    },
    {
      "q": "Quel est l'ordre correct de la poignée de main en trois temps de TCP ?",
      "choix": [
        "SYN, SYN-ACK, ACK",
        "SYN, ACK, SYN-ACK",
        "ACK, SYN, SYN-ACK",
        "SYN-ACK, SYN, ACK"
      ],
      "reponse": 0,
      "explication": "Le client envoie SYN, le serveur répond SYN-ACK, et le client conclut par ACK : la connexion est établie. Les autres séquences ne respectent pas ce déroulement normalisé, régulièrement testé à l'examen.",
      "difficulte": 1,
      "pourquoi": [
        "Correct : SYN du client, SYN-ACK du serveur, ACK du client — la séquence normalisée du three-way handshake.",
        "Ordre faux : le SYN-ACK du serveur précède l'ACK final du client, pas l'inverse.",
        "Ordre inversé : la connexion commence toujours par un SYN du client, jamais par un ACK.",
        "Ordre faux : le SYN-ACK est une réponse, il ne peut pas ouvrir l'échange."
      ]
    },
    {
      "q": "Un administrateur constate qu'un poste a l'adresse 169.254.10.23. Quelle est la cause la PLUS probable ?",
      "choix": [
        "Le poste est victime d'un empoisonnement ARP",
        "Le poste utilise une adresse privée RFC 1918 normale",
        "Le poste n'a pas pu joindre de serveur DHCP et s'est auto-configuré via APIPA",
        "Le poste a été configuré en IPv6"
      ],
      "reponse": 2,
      "explication": "La plage 169.254.0.0/16 correspond à l'APIPA : le poste se l'attribue automatiquement quand aucun serveur DHCP ne répond. Ce n'est pas une plage RFC 1918 (10/8, 172.16/12, 192.168/16), cela n'a rien à voir avec IPv6, et l'ARP poisoning ne change pas l'adresse IP du poste.",
      "difficulte": 2,
      "pourquoi": [
        "Confusion d'attaque : l'ARP poisoning corrompt les tables ARP mais ne modifie jamais l'adresse IP du poste.",
        "Piège de plage : 169.254.0.0/16 n'appartient pas aux plages privées RFC 1918 (10/8, 172.16/12, 192.168/16).",
        "Correct : la plage 169.254.0.0/16 est l'auto-configuration APIPA adoptée quand aucun serveur DHCP ne répond — symptôme à reconnaître d'emblée.",
        "Confusion de protocole : une adresse en notation décimale pointée est une adresse IPv4, pas IPv6."
      ]
    },
    {
      "q": "Combien d'adresses d'hôtes utilisables offre le réseau 192.168.10.0/24 ?",
      "choix": [
        "256",
        "254",
        "512",
        "255"
      ],
      "reponse": 1,
      "explication": "Un /24 laisse 8 bits pour les hôtes, soit 256 adresses, dont on retire l'adresse de réseau et l'adresse de broadcast : 254 adresses utilisables. Les autres valeurs oublient cette soustraction ou se trompent de masque.",
      "difficulte": 2,
      "pourquoi": [
        "Piège de calcul : 256 est le nombre total d'adresses, sans retirer l'adresse de réseau ni le broadcast.",
        "Correct : 2 puissance 8 donne 256 adresses, moins l'adresse de réseau et l'adresse de broadcast, soit 254 hôtes utilisables.",
        "Erreur de masque : 512 correspondrait à un /23, pas à un /24.",
        "Piège de calcul : 255 ne retire qu'une seule des deux adresses réservées."
      ]
    },
    {
      "q": "Quel mode de diffusion envoie les données vers le noeud LE PLUS PROCHE parmi plusieurs partageant la même adresse ?",
      "choix": [
        "Anycast",
        "Unicast",
        "Broadcast",
        "Multicast"
      ],
      "reponse": 0,
      "explication": "L'anycast route la requête vers l'instance la plus proche ou la plus performante, mécanisme au coeur des CDN et du DNS mondial. Le multicast vise un groupe abonné, le broadcast tout le segment, l'unicast un destinataire unique.",
      "difficulte": 1,
      "pourquoi": [
        "Correct : l'anycast route vers l'instance la plus proche parmi celles partageant l'adresse — le mécanisme des CDN et du DNS racine.",
        "Trop étroit : l'unicast vise un destinataire unique et déterminé.",
        "Trop large : le broadcast inonde tout le segment sans notion de proximité.",
        "Piège de proximité : le multicast livre à tous les membres d'un groupe abonné, pas au noeud le plus proche."
      ]
    },
    {
      "q": "Quel composant d'IPsec fournit la CONFIDENTIALITÉ des données ?",
      "choix": [
        "Internet Key Exchange (IKE)",
        "Encapsulating Security Payload (ESP)",
        "Authentication Header (AH)",
        "Security Association (SA)"
      ],
      "reponse": 1,
      "explication": "ESP chiffre la charge utile et assure ainsi la confidentialité, en plus d'une intégrité et d'une authentification limitées. AH authentifie et protège l'intégrité mais ne chiffre pas, IKE négocie les clés, et la SA n'est que l'enregistrement des paramètres d'une session simplex.",
      "difficulte": 2,
      "pourquoi": [
        "Hors rôle : IKE négocie les clés et les Security Associations, il ne protège pas les données elles-mêmes.",
        "Correct : ESP chiffre la charge utile et apporte ainsi la confidentialité, en plus d'une intégrité et d'une authentification.",
        "Piège classique : AH fournit intégrité et authentification mais ne chiffre jamais, donc aucune confidentialité.",
        "Hors rôle : la SA n'est que l'enregistrement des paramètres d'une session, pas un mécanisme de protection."
      ]
    },
    {
      "q": "Quelle affirmation décrit le MIEUX le mode tunnel d'IPsec ?",
      "choix": [
        "Le chiffrement est délégué à TLS au-dessus d'IPsec",
        "Seule la charge utile du paquet est chiffrée, pour des échanges de pair à pair",
        "Seul l'en-tête est chiffré pour masquer les adresses",
        "Le paquet entier, en-tête inclus, est chiffré, typiquement entre deux passerelles"
      ],
      "reponse": 3,
      "explication": "En mode tunnel, tout le paquet d'origine est encapsulé et chiffré dans un nouveau paquet : c'est le mode des VPN de site à site entre passerelles. Le mode transport ne chiffre que la charge utile ; chiffrer seulement l'en-tête n'existe pas, et TLS est un protocole distinct.",
      "difficulte": 2,
      "pourquoi": [
        "Confusion de pile : TLS est un protocole distinct, IPsec ne lui délègue rien.",
        "Confusion de mode : ne chiffrer que la charge utile décrit le mode transport, utilisé de pair à pair.",
        "Option inventée : chiffrer uniquement l'en-tête n'existe dans aucun mode IPsec.",
        "Correct : le mode tunnel encapsule et chiffre le paquet entier, en-tête compris — le mode des VPN de site à site entre passerelles."
      ]
    },
    {
      "q": "Pourquoi HTTPS utilise-t-il une cryptographie dite hybride ?",
      "choix": [
        "Parce qu'il alterne aléatoirement entre deux algorithmes",
        "Parce qu'il chiffre deux fois les données pour plus de sécurité",
        "Parce qu'il utilise l'asymétrique pour échanger une clé de session, puis le symétrique pour le trafic",
        "Parce qu'il combine hachage et compression"
      ],
      "reponse": 2,
      "explication": "TLS utilise la cryptographie asymétrique, lente mais sans secret partagé préalable, pour négocier une clé de session éphémère, puis bascule sur la cryptographie symétrique, rapide, pour chiffrer les échanges. Il n'y a ni double chiffrement systématique, ni alternance aléatoire, et le hachage sert à l'intégrité, pas au chiffrement.",
      "difficulte": 2,
      "pourquoi": [
        "Option inventée : aucune alternance aléatoire d'algorithmes n'est prévue par le protocole.",
        "Idée fausse : le double chiffrement systématique n'existe pas dans TLS et n'apporterait rien.",
        "Correct : l'asymétrique, lent mais sans secret préalable, négocie une clé de session ; le symétrique, rapide, chiffre ensuite le trafic — c'est la définition du chiffrement hybride.",
        "Confusion de service : le hachage assure l'intégrité, il ne chiffre rien, et la compression a été abandonnée."
      ]
    },
    {
      "q": "Quelles versions de TLS une organisation devrait-elle exiger au minimum aujourd'hui ?",
      "choix": [
        "TLS 1.1 et supérieur",
        "SSL 3.0 et supérieur",
        "TLS 1.2 ou 1.3",
        "TLS 1.0 et supérieur"
      ],
      "reponse": 2,
      "explication": "TLS 1.0 et 1.1 sont officiellement dépréciés, et SSL est totalement obsolète. Seuls TLS 1.2 et 1.3 sont considérés comme sûrs ; TLS 1.3 supprime en outre les suites cryptographiques faibles et accélère la négociation.",
      "difficulte": 1,
      "pourquoi": [
        "Obsolète : TLS 1.1 est déprécié conjointement avec TLS 1.0 depuis 2021.",
        "Obsolète : SSL 3.0 est cassé depuis POODLE et totalement proscrit.",
        "Correct : seuls TLS 1.2 et 1.3 sont considérés comme sûrs, et TLS 1.3 supprime en outre les suites faibles.",
        "Obsolète : TLS 1.0 est officiellement déprécié et interdit par les référentiels comme PCI DSS."
      ]
    },
    {
      "q": "Quel protocole authentifie cryptographiquement les réponses DNS pour empêcher l'empoisonnement de cache ?",
      "choix": [
        "DMARC",
        "DoH",
        "LDAPS",
        "DNSSEC"
      ],
      "reponse": 3,
      "explication": "DNSSEC signe les enregistrements DNS, permettant au résolveur de vérifier leur authenticité et leur intégrité, ce qui contre l'empoisonnement. DoH chiffre le transport des requêtes mais n'authentifie pas les données, DMARC concerne la messagerie, et LDAPS sécurise l'annuaire LDAP.",
      "difficulte": 2,
      "pourquoi": [
        "Hors domaine : DMARC protège la messagerie, pas la résolution DNS.",
        "Piège de périmètre : DoH chiffre le transport des requêtes mais n'authentifie pas le contenu des réponses.",
        "Hors domaine : LDAPS sécurise l'accès à l'annuaire LDAP, sans rapport avec le DNS.",
        "Correct : DNSSEC signe les enregistrements, permettant au résolveur de vérifier authenticité et intégrité — la parade directe à l'empoisonnement."
      ]
    },
    {
      "q": "Quel protocole de messagerie permet au propriétaire d'un domaine de publier la politique à appliquer aux emails qui échouent aux contrôles SPF et DKIM ?",
      "choix": [
        "S/MIME",
        "DMARC",
        "IMAPS",
        "STARTTLS"
      ],
      "reponse": 1,
      "explication": "DMARC s'appuie sur SPF et DKIM, vérifie l'alignement du domaine émetteur et publie la politique à appliquer en cas d'échec : none, quarantine ou reject, avec des rapports. S/MIME chiffre et signe les messages de bout en bout, STARTTLS chiffre le transport, IMAPS sécurise la consultation des boîtes.",
      "difficulte": 2,
      "pourquoi": [
        "Hors rôle : S/MIME chiffre et signe le contenu des messages de bout en bout, il ne publie aucune politique de domaine.",
        "Correct : DMARC s'appuie sur SPF et DKIM et publie la politique de traitement des échecs (none, quarantine, reject) avec des rapports.",
        "Hors rôle : IMAPS sécurise la consultation des boîtes, pas l'authentification des domaines émetteurs.",
        "Hors rôle : STARTTLS chiffre le transport SMTP, sans lien avec SPF ou DKIM."
      ]
    },
    {
      "q": "Quelle est la PRINCIPALE différence entre NAT et PAT ?",
      "choix": [
        "PAT utilise les numéros de port pour multiplexer plusieurs clients derrière une adresse publique, NAT non",
        "NAT opère en couche 3 tandis que PAT opère en couche 7 pour lire les URL",
        "PAT exige une adresse publique dédiée par client interne, contrairement au NAT",
        "NAT masque les adresses internes alors que PAT les expose dans les en-têtes traduits"
      ],
      "reponse": 0,
      "explication": "Le PAT traduit aussi le port source, ce qui permet à de nombreux clients internes de partager une seule adresse IP publique ; le NAT traduit les adresses sans toucher aux ports (un pour un ou plusieurs vers un pool). Les deux masquent également les adresses internes, les deux opèrent sur les en-têtes IP et transport (jamais en couche 7), et c'est précisément le PAT qui économise les adresses publiques, pas l'inverse.",
      "difficulte": 2,
      "pourquoi": [
        "Correct : le PAT traduit aussi le port source, ce qui multiplexe de nombreux clients internes derrière une seule adresse publique — la vraie différence.",
        "Confusion de couches : NAT et PAT travaillent tous deux sur les en-têtes IP et transport, jamais en couche 7.",
        "Inversion : c'est justement le PAT qui économise les adresses publiques en les partageant, pas l'inverse.",
        "Faux point de différence : NAT comme PAT masquent tous deux les adresses internes derrière l'adresse traduite."
      ]
    },
    {
      "q": "Un VLAN fournit une segmentation à quelle couche du modèle OSI ?",
      "choix": [
        "Couche 1",
        "Couche 3",
        "Couche 7",
        "Couche 2"
      ],
      "reponse": 3,
      "explication": "Le VLAN est une segmentation imposée par les switches en couche 2 : la communication entre VLANs exige une fonction de routage en couche 3. C'est ce point de passage obligé qui en fait un outil de contrôle. Le VRF, lui, est l'équivalent en couche 3.",
      "difficulte": 1,
      "pourquoi": [
        "Trop bas : la couche 1 concerne les supports physiques, pas l'étiquetage logique des trames.",
        "Piège de voisinage : la couche 3 est celle du routage inter-VLAN et des VRF, pas du VLAN lui-même.",
        "Hors sujet : la couche 7 traite le contenu applicatif, sans rôle de segmentation réseau.",
        "Correct : le VLAN est une segmentation imposée par les switches sur les trames en couche 2 ; passer d'un VLAN à l'autre exige un routage de couche 3."
      ]
    },
    {
      "q": "Quel est le PRINCIPAL bénéfice de sécurité de la microsegmentation ?",
      "choix": [
        "Elle limite le mouvement latéral d'un attaquant à l'intérieur du réseau",
        "Elle simplifie l'administration en réduisant le nombre de règles de filtrage à maintenir",
        "Elle détecte les intrusions en analysant les signatures du trafic east-west",
        "Elle isole physiquement chaque charge de travail sur un commutateur dédié"
      ],
      "reponse": 0,
      "explication": "En découpant le réseau en zones minuscules avec des politiques propres, la microsegmentation confine une compromission et bloque la progression latérale, ce qui en fait un pilier du Zero Trust. Elle multiplie au contraire le nombre de politiques à gérer (d'où l'importance de l'automatisation), reste une isolation logique et non physique, et applique des règles de filtrage sans faire de détection d'intrusion, rôle d'un IDS/IPS.",
      "difficulte": 2,
      "pourquoi": [
        "Correct : en confinant chaque zone avec ses propres politiques, elle bloque le mouvement latéral d'un attaquant — le bénéfice central recherché par le Zero Trust.",
        "Inversion : la microsegmentation multiplie les politiques à maintenir, elle ne simplifie pas l'administration.",
        "Confusion de fonction : elle filtre les flux mais ne fait pas de détection par signatures, rôle d'un IDS/IPS.",
        "Confusion de nature : la microsegmentation est une isolation logique et distribuée, pas une séparation physique par commutateur."
      ]
    },
    {
      "q": "Dans un SDN, comment appelle-t-on l'interface entre le contrôleur et les applications situées au-dessus de lui ?",
      "choix": [
        "Interface east-west",
        "Interface northbound",
        "Interface southbound",
        "Interface de management"
      ],
      "reponse": 1,
      "explication": "L'interface northbound relie le contrôleur SDN aux applications et à l'orchestration au-dessus de lui ; l'interface southbound le relie aux équipements du plan de données en dessous. East-west décrit des flux de trafic entre serveurs, pas une interface SDN.",
      "difficulte": 3,
      "pourquoi": [
        "Confusion de vocabulaire : east-west décrit des flux de trafic entre serveurs, pas une interface SDN.",
        "Correct : l'interface northbound expose le contrôleur aux applications et à l'orchestration situées au-dessus de lui.",
        "Inversion : l'interface southbound relie le contrôleur aux équipements du plan de données, en dessous de lui.",
        "Option vague : le plan de management supervise l'infrastructure mais ne désigne pas cette interface."
      ]
    },
    {
      "q": "Quelle technologie permet d'étendre des segments de couche 2 à travers des réseaux de couche 3 et supporte environ 16 millions de segments ?",
      "choix": [
        "GRE",
        "VLAN 802.1Q",
        "VXLAN",
        "MPLS"
      ],
      "reponse": 2,
      "explication": "VXLAN encapsule les trames de couche 2 dans des paquets de couche 3, étirant les segments à travers sous-réseaux et sites, avec un espace d'environ 16 millions d'identifiants contre 4096 pour les VLANs classiques. MPLS commute par labels et GRE est une encapsulation générique sans cet espace d'adressage de segments.",
      "difficulte": 3,
      "pourquoi": [
        "Trop générique : GRE encapsule sans notion d'identifiants de segments à cette échelle.",
        "Trop limité : le VLAN 802.1Q reste confiné à la couche 2 locale et plafonne à 4096 identifiants.",
        "Correct : VXLAN encapsule les trames de couche 2 dans des paquets de couche 3 et offre environ 16 millions de segments.",
        "Confusion de rôle : MPLS commute par labels pour l'ingénierie de trafic, il n'étend pas des segments L2 avec cet espace d'identifiants."
      ]
    },
    {
      "q": "Quel terme désigne le trafic circulant LATÉRALEMENT entre les serveurs d'un même datacenter ?",
      "choix": [
        "Trafic ingress",
        "Trafic north-south",
        "Trafic east-west",
        "Trafic backhaul"
      ],
      "reponse": 2,
      "explication": "Le trafic east-west circule horizontalement entre serveurs, stockage et applications au sein du datacenter ; le north-south entre et sort vers les clients. L'ingress est le trafic entrant dans un réseau, et le backhaul désigne les liaisons qui raccordent des réseaux locaux à un coeur de réseau.",
      "difficulte": 1,
      "pourquoi": [
        "Trop étroit : l'ingress ne décrit que le trafic entrant dans un réseau.",
        "Inversion : le trafic north-south entre et sort du datacenter vers les clients et Internet.",
        "Correct : east-west désigne les flux latéraux entre serveurs, stockage et applications au sein du datacenter — la cible de la microsegmentation.",
        "Hors sujet : le backhaul désigne les liaisons de collecte vers un coeur de réseau."
      ]
    },
    {
      "q": "Quel mécanisme de WPA2 mode enterprise le distingue du mode personal ?",
      "choix": [
        "L'authentification 802.1X/EAP via un serveur avec des identifiants individuels",
        "L'utilisation d'AES au lieu de RC4",
        "Le chiffrement en 192 bits",
        "Un SSID masqué"
      ],
      "reponse": 0,
      "explication": "Les deux modes de WPA2 utilisent AES-CCMP ; ce qui change, c'est l'authentification : le mode personal repose sur une clé pré-partagée commune, le mode enterprise sur 802.1X/EAP avec un serveur d'authentification et des comptes individuels. Le 192 bits est propre à WPA3 enterprise, et masquer le SSID n'est pas une mesure d'authentification.",
      "difficulte": 2,
      "pourquoi": [
        "Correct : le mode enterprise remplace la clé pré-partagée commune par 802.1X/EAP avec serveur d'authentification et identifiants individuels — traçabilité et révocation par utilisateur.",
        "Faux point de différence : les deux modes de WPA2 utilisent AES-CCMP ; RC4 appartient au passé de WEP/WPA.",
        "Confusion de version : le chiffrement 192 bits est une option de WPA3 enterprise, pas de WPA2.",
        "Mesure cosmétique : masquer le SSID n'authentifie personne et se contourne par simple écoute radio."
      ]
    },
    {
      "q": "Pourquoi le WPS est-il considéré comme dangereux même sur un réseau WPA2 correctement chiffré ?",
      "choix": [
        "Il force l'utilisation de TKIP",
        "Il diffuse la clé Wi-Fi en clair",
        "Il désactive AES",
        "Son PIN de 8 chiffres est validé en deux moitiés et souvent sans limitation de tentatives, facilitant le brute-force"
      ],
      "reponse": 3,
      "explication": "La structure du protocole WPS valide le PIN en deux moitiés, réduisant drastiquement l'espace de recherche, et beaucoup de routeurs n'imposent aucun verrouillage après échecs : le brute-force devient réaliste et livre l'accès au réseau. Le WPS ne diffuse pas la clé en clair et ne touche ni à AES ni à TKIP ; la parade est de le désactiver.",
      "difficulte": 3,
      "pourquoi": [
        "Faux : le WPS n'impose pas TKIP ; le problème est l'authentification du PIN, pas le chiffrement.",
        "Faux : le WPS ne diffuse jamais la clé en clair, sa faiblesse est structurelle, pas une fuite directe.",
        "Faux : le WPS n'affecte pas le chiffrement AES du réseau.",
        "Correct : le PIN de 8 chiffres est validé en deux moitiés, réduisant l'espace de recherche à environ 11 000 essais, souvent sans verrouillage — le brute-force devient réaliste."
      ]
    },
    {
      "q": "Un employé signale que son téléphone s'est connecté à un réseau Wi-Fi portant le nom exact de celui de l'entreprise, mais situé sur le parking. De quelle attaque s'agit-il probablement ?",
      "choix": [
        "Bluesnarfing",
        "Evil twin",
        "Teardrop",
        "VLAN hopping"
      ],
      "reponse": 1,
      "explication": "Un point d'accès pirate qui imite le SSID légitime pour capter les connexions est un evil twin ; l'attaquant peut alors intercepter le trafic des victimes. Le bluesnarfing concerne le Bluetooth, le VLAN hopping les réseaux commutés filaires, et le teardrop est un déni de service par fragmentation.",
      "difficulte": 1,
      "pourquoi": [
        "Hors technologie : le bluesnarfing est un vol de données via Bluetooth, pas une usurpation Wi-Fi.",
        "Correct : un point d'accès pirate imitant le SSID légitime pour capter les connexions est la définition de l'evil twin.",
        "Hors catégorie : le teardrop est un déni de service par fragmentation, sans usurpation d'identité réseau.",
        "Hors technologie : le VLAN hopping vise les réseaux commutés filaires, pas le Wi-Fi."
      ]
    },
    {
      "q": "Quelle attaque Bluetooth donne à l'attaquant le CONTRÔLE de l'appareil, jusqu'à écouter les appels ?",
      "choix": [
        "Bluesnarfing",
        "Bluejacking",
        "Bluebugging",
        "Bluesniffing"
      ],
      "reponse": 2,
      "explication": "Le bluebugging exploite des vulnérabilités Bluetooth pour prendre le contrôle de l'appareil : écoute d'appels, envoi de messages, modification de paramètres. Le bluejacking se limite à des messages non sollicités, le bluesniffing à l'écoute passive, et le bluesnarfing au vol de données.",
      "difficulte": 2,
      "pourquoi": [
        "Trop limité : le bluesnarfing vole des données mais ne pilote pas l'appareil.",
        "Trop bénin : le bluejacking se limite à l'envoi de messages non sollicités.",
        "Correct : le bluebugging donne le contrôle de l'appareil, jusqu'à l'écoute des appels — le niveau d'attaque Bluetooth le plus grave.",
        "Trop passif : le bluesniffing n'est que de l'écoute, sans prise de contrôle."
      ]
    },
    {
      "q": "Une attaque envoie des trames de gestion forgées pour déconnecter les clients d'un point d'accès Wi-Fi. Comment s'appelle-t-elle et à quoi sert-elle souvent ?",
      "choix": [
        "Wardriving, pour cartographier les réseaux",
        "Attaque IV, pour casser la clé WEP",
        "CAM flooding, pour transformer le switch en hub",
        "Attaque de désassociation, souvent pour pousser les victimes vers un evil twin"
      ],
      "reponse": 3,
      "explication": "L'attaque de désassociation, ou deauthentication, abuse des trames de gestion du 802.11 pour déconnecter de force les clients : c'est un déni de service qui sert souvent de rabatteur vers un faux point d'accès. Les attaques IV visent le chiffrement, le wardriving est de la reconnaissance, et le CAM flooding cible les switches filaires.",
      "difficulte": 2,
      "pourquoi": [
        "Hors catégorie : le wardriving est de la reconnaissance passive, il ne déconnecte personne.",
        "Confusion d'objectif : les attaques IV visent le chiffrement WEP, pas la déconnexion des clients.",
        "Hors technologie : le CAM flooding sature la table MAC d'un switch filaire.",
        "Correct : la désassociation abuse des trames de gestion 802.11 pour déconnecter les clients, souvent afin de les rabattre vers un evil twin ou de forcer un handshake à capturer."
      ]
    },
    {
      "q": "Un attaquant associe son adresse MAC à l'adresse IP de la passerelle par défaut en diffusant de fausses réponses sur le LAN. Quelle attaque réalise-t-il ?",
      "choix": [
        "ARP poisoning",
        "DNS poisoning",
        "IP spoofing",
        "Smurf"
      ],
      "reponse": 0,
      "explication": "C'est l'empoisonnement ARP : en corrompant les tables ARP des victimes, l'attaquant détourne vers lui le trafic destiné à la passerelle, position idéale pour une attaque on-path. Le DNS poisoning corrompt la résolution de noms, l'IP spoofing usurpe une adresse source, et le smurf est un déni de service par amplification ICMP.",
      "difficulte": 1,
      "pourquoi": [
        "Correct : diffuser de fausses réponses ARP pour associer sa MAC à l'IP de la passerelle est l'empoisonnement ARP, position idéale pour une attaque on-path.",
        "Confusion de service : le DNS poisoning corrompt la résolution de noms, pas les tables ARP locales.",
        "Trop générique : l'IP spoofing usurpe une adresse source sans corrompre l'association IP-MAC des victimes.",
        "Hors catégorie : le smurf est un déni de service par amplification ICMP."
      ]
    },
    {
      "q": "Quelle mesure prévient le PLUS efficacement le CAM table flooding sur un switch ?",
      "choix": [
        "Masquer le SSID",
        "Activer le port security sur les ports du switch",
        "Utiliser des adresses IP statiques",
        "Déployer un WAF"
      ],
      "reponse": 1,
      "explication": "Le port security limite le nombre d'adresses MAC apprises par port et bloque les violations, ce qui neutralise la saturation de la table CAM qui forcerait le switch à diffuser toutes les trames. Le SSID concerne le Wi-Fi, le WAF les applications web, et l'adressage statique n'empêche pas l'apprentissage MAC.",
      "difficulte": 2,
      "pourquoi": [
        "Hors technologie : le SSID concerne le Wi-Fi, pas la commutation filaire.",
        "Correct : le port security limite le nombre d'adresses MAC apprises par port et bloque les violations, neutralisant la saturation de la table CAM.",
        "Inefficace : l'adressage IP statique n'empêche pas le switch d'apprendre des adresses MAC forgées.",
        "Hors couche : le WAF protège les applications web, il ne voit pas les trames Ethernet."
      ]
    },
    {
      "q": "Quelle est la différence FONDAMENTALE entre un pare-feu stateful et un pare-feu stateless ?",
      "choix": [
        "Le stateful suit l'état des connexions et évalue chaque paquet dans son contexte",
        "Le stateless applique ses règles dans les deux sens, le stateful uniquement au trafic entrant",
        "Le stateful inspecte le contenu applicatif des requêtes, le stateless s'arrête aux en-têtes",
        "Le stateful authentifie les utilisateurs avant d'autoriser leurs connexions"
      ],
      "reponse": 0,
      "explication": "Le pare-feu stateful maintient une table des connexions : il sait qu'un paquet entrant répond à une requête légitime sortante. Le stateless évalue chaque paquet isolément selon adresses et ports, sans mémoire. L'inspection applicative de couche 7 est l'apanage des NGFW et des WAF, les deux types filtrent dans les deux sens, et l'authentification des utilisateurs relève d'un NAC ou d'un proxy authentifiant, pas du suivi d'état.",
      "difficulte": 1,
      "pourquoi": [
        "Correct : le stateful maintient une table des connexions et évalue chaque paquet dans le contexte de sa session, là où le stateless juge chaque paquet isolément.",
        "Faux point de différence : les deux types filtrent le trafic dans les deux sens selon leurs règles.",
        "Confusion d'équipement : l'inspection du contenu applicatif est le propre des NGFW et des WAF, pas du pare-feu stateful classique.",
        "Confusion de fonction : l'authentification des utilisateurs relève d'un NAC ou d'un proxy authentifiant, pas du suivi d'état."
      ]
    },
    {
      "q": "Quel type de proxy est placé DEVANT des serveurs web pour répartir la charge et masquer l'architecture interne ?",
      "choix": [
        "Forward proxy",
        "Reverse proxy",
        "SOCKS proxy",
        "Transparent proxy"
      ],
      "reponse": 1,
      "explication": "Le reverse proxy s'interpose côté serveurs : répartition de charge, terminaison TLS, masquage du backend, souvent depuis un réseau de périmètre. Le forward proxy sert les clients internes, le proxy transparent intercepte sans configuration client, et SOCKS est un protocole de proxy générique côté client.",
      "difficulte": 1,
      "pourquoi": [
        "Inversion : le forward proxy sert les clients internes vers l'extérieur, pas les serveurs.",
        "Correct : le reverse proxy s'interpose devant les serveurs — répartition de charge, terminaison TLS et masquage du backend.",
        "Trop générique : SOCKS est un protocole de proxy côté client, sans rôle de publication de serveurs.",
        "Hors sujet : le proxy transparent intercepte les clients sans configuration, côté sortie."
      ]
    },
    {
      "q": "Une organisation veut vérifier que chaque poste est patché et dispose d'un antivirus à jour AVANT de lui accorder l'accès au réseau. Quelle approche répond à ce besoin ?",
      "choix": [
        "Un IDS réseau en coeur de réseau",
        "NAC en philosophie postadmission",
        "Un portail captif sans authentification",
        "NAC en philosophie preadmission avec évaluation de posture"
      ],
      "reponse": 3,
      "explication": "Le NAC preadmission conditionne l'accès à la conformité préalable du poste, vérifiée par une évaluation de posture : patchs, antivirus, configuration. La philosophie postadmission contrôle après coup selon l'activité, l'IDS détecte sans contrôler l'admission, et un portail captif sans authentification ne vérifie rien.",
      "difficulte": 2,
      "pourquoi": [
        "Confusion de rôle : un IDS détecte des attaques mais ne conditionne pas l'admission au réseau.",
        "Hors phase : la postadmission contrôle l'activité après l'accès, elle ne vérifie rien avant.",
        "Insuffisant : un portail captif sans authentification n'évalue ni identité ni conformité.",
        "Correct : la philosophie preadmission conditionne l'accès à une évaluation de posture préalable — patchs, antivirus, configuration."
      ]
    },
    {
      "q": "Quel risque spécifique le split tunneling d'un VPN introduit-il ?",
      "choix": [
        "Le concentrateur VPN se dégrade car tout le trafic Internet des postes y transite",
        "Les utilisateurs doivent se ré-authentifier à chaque changement de réseau, ce qui expose leurs identifiants",
        "Le poste connecté simultanément à Internet et au réseau interne peut servir de pont à un attaquant, hors des contrôles de l'organisation",
        "Le trafic destiné à l'organisation circule en clair sur les segments Internet traversés"
      ],
      "reponse": 2,
      "explication": "En split tunnel, seul le trafic vers l'organisation passe dans le tunnel ; le reste va directement sur Internet sans filtrage ni inspection par l'organisation, et le poste devient un pont potentiel entre Internet et le réseau interne. Le tunnel lui-même reste chiffré, c'est le full tunnel (et non le split) qui fait transiter tout le trafic Internet par le concentrateur, et la ré-authentification n'est pas une caractéristique du split tunneling.",
      "difficulte": 3,
      "pourquoi": [
        "Inversion : c'est le full tunnel qui fait transiter tout le trafic Internet par le concentrateur, le split l'en soulage.",
        "Hors sujet : la ré-authentification au changement de réseau n'est pas une caractéristique du split tunneling.",
        "Correct : le poste, connecté à la fois à Internet en direct et au réseau interne, échappe aux contrôles de l'organisation et peut servir de pont à un attaquant.",
        "Faux : le tunnel VPN lui-même reste chiffré ; le split tunneling ne dégrade pas la cryptographie."
      ]
    },
    {
      "q": "Quels protocoles sécurisent respectivement la signalisation et les flux média d'une infrastructure VoIP ?",
      "choix": [
        "DKIM pour la signalisation et IPsec pour les média",
        "SNMP pour la signalisation et RTP pour les média",
        "S/MIME pour la signalisation et TLS pour les média",
        "SIPS pour la signalisation et SRTP pour les média"
      ],
      "reponse": 3,
      "explication": "SIPS ajoute TLS au protocole SIP pour protéger l'établissement des sessions, et SRTP étend RTP avec chiffrement, authentification et protection anti-rejeu pour l'audio et la vidéo. SNMP supervise les équipements, RTP seul n'est pas chiffré, S/MIME et DKIM concernent la messagerie.",
      "difficulte": 2,
      "pourquoi": [
        "Hors domaine : DKIM authentifie les emails ; IPsec pourrait chiffrer mais n'est pas le mécanisme dédié aux média VoIP.",
        "Confusion de rôle : SNMP supervise les équipements et RTP seul ne chiffre rien.",
        "Hors domaine : S/MIME protège la messagerie, pas la signalisation téléphonique.",
        "Correct : SIPS protège la signalisation SIP par TLS et SRTP chiffre et authentifie les flux média — le couple standard de la VoIP sécurisée."
      ]
    },
    {
      "q": "Avant d'interconnecter son réseau avec celui d'un partenaire, quel document formalise le MIEUX les exigences techniques et de sécurité du lien ?",
      "choix": [
        "Un memorandum of understanding (MOU)",
        "Un interconnection security agreement (ISA)",
        "Une non-disclosure agreement (NDA)",
        "Un service level agreement (SLA) standard"
      ],
      "reponse": 1,
      "explication": "L'ISA est la déclaration formelle de la posture de sécurité, des risques et des exigences techniques d'une interconnexion entre deux infrastructures. Le MOU n'exprime qu'une intention d'alignement, le SLA porte sur les niveaux de service, et la NDA sur la confidentialité des informations échangées.",
      "difficulte": 3,
      "pourquoi": [
        "Trop faible : le MOU n'exprime qu'une intention d'alignement, sans exigences techniques opposables.",
        "Correct : l'ISA formalise la posture de sécurité, les risques et les exigences techniques précises d'une interconnexion de réseaux.",
        "Trop étroit : la NDA ne couvre que la confidentialité des informations échangées.",
        "Hors périmètre : le SLA porte sur les niveaux de service, pas sur les contrôles de sécurité du lien."
      ]
    },
    {
      "q": "Quelle architecture de répartition de charge conserve une capacité CONSTANTE même en cas de défaillance d'un noeud ?",
      "choix": [
        "Round-robin DNS",
        "Anycast",
        "Active-passive",
        "Active-active"
      ],
      "reponse": 2,
      "explication": "En active-passive, le noeud secondaire reste dormant et prend le relais en cas de panne : la capacité offerte reste celle d'un seul noeud, donc constante. L'active-active exploite tous les noeuds en temps normal mais perd de la capacité en incident. Le round-robin DNS et l'anycast répartissent le trafic sans garantie de capacité constante.",
      "difficulte": 3,
      "pourquoi": [
        "Insuffisant : le round-robin DNS répartit sans détection de panne fiable ni garantie de capacité.",
        "Hors sujet : l'anycast optimise la proximité, sans promesse de capacité constante.",
        "Correct : en active-passive, le secondaire dormant prend le relais ; la capacité servie reste celle d'un seul noeud, donc constante avant comme après l'incident.",
        "Piège séduisant : l'active-active exploite tous les noeuds mais perd de la capacité dès qu'un noeud tombe."
      ]
    },
    {
      "q": "Quel avantage de sécurité la fibre optique offre-t-elle par rapport au cuivre à paires torsadées ?",
      "choix": [
        "Elle est immunisée contre les interférences électromagnétiques et bien plus difficile à écouter",
        "Elle authentifie les équipements raccordés à chacune de ses extrémités",
        "Toute coupure du lien est localisée instantanément, ce qui rend le sabotage impossible",
        "Elle élimine la diaphonie entre paires, ce qui garantit la confidentialité des données"
      ],
      "reponse": 0,
      "explication": "La fibre transmet de la lumière : pas d'émissions électromagnétiques exploitables, immunité aux interférences, et une écoute clandestine exige une intervention physique détectable. L'absence de diaphonie est réelle mais ne garantit pas à elle seule la confidentialité (seul le chiffrement le fait), la localisation d'une coupure n'empêche pas le sabotage, et aucun support de transmission n'authentifie quoi que ce soit par lui-même.",
      "difficulte": 1,
      "pourquoi": [
        "Correct : la fibre n'émet pas de rayonnement électromagnétique exploitable et son écoute exige une intervention physique détectable — l'avantage de sécurité décisif sur le cuivre.",
        "Confusion de fonction : aucun support de transmission n'authentifie les équipements ; c'est le rôle de 802.1X ou des certificats.",
        "Absolu : localiser une coupure n'a jamais rendu le sabotage impossible.",
        "Sur-extension : l'absence de diaphonie est réelle mais ne garantit pas la confidentialité — seul le chiffrement le fait."
      ]
    },
    {
      "q": "Un commutateur commence à transmettre une trame dès qu'il a lu l'adresse de destination, sans vérifier les erreurs. Quel mode de commutation utilise-t-il ?",
      "choix": [
        "Fragment-free",
        "Token passing",
        "Store-and-forward",
        "Cut-through"
      ],
      "reponse": 3,
      "explication": "Le mode cut-through relaie la trame dès la lecture de l'adresse de destination : latence minimale mais aucune vérification d'erreur. Le store-and-forward attend la trame complète et contrôle les erreurs ; le fragment-free vérifie les 64 premiers octets, un compromis ; le token passing est une méthode d'accès au support, pas un mode de commutation.",
      "difficulte": 3,
      "pourquoi": [
        "Piège intermédiaire : le fragment-free vérifie les 64 premiers octets, ce n'est pas une transmission immédiate.",
        "Hors catégorie : le token passing est une méthode d'accès au support, pas un mode de commutation.",
        "Inversion : le store-and-forward attend la trame complète et vérifie les erreurs avant de transmettre.",
        "Correct : le cut-through relaie dès la lecture de l'adresse de destination — latence minimale, aucune vérification d'erreur."
      ]
    },
    {
      "q": "Du point de vue d'un RSSI, quelle est la MEILLEURE stratégie face aux risques d'interception sur les réseaux d'opérateurs mobiles ?",
      "choix": [
        "Considérer le réseau de l'opérateur comme non fiable et imposer un chiffrement de bout en bout comme TLS ou VPN",
        "Se reposer sur le chiffrement radio entre le mobile et l'antenne",
        "Interdire l'usage des téléphones mobiles professionnels",
        "N'autoriser que la 5G"
      ],
      "reponse": 0,
      "explication": "Le chiffrement cellulaire s'arrête souvent à l'antenne et des tours peuvent être simulées pour des attaques on-path : la posture correcte est de traiter le réseau de l'opérateur comme non fiable et de chiffrer au-dessus, via TLS ou VPN. Interdire les mobiles est disproportionné, et la 5G améliore mais ne supprime pas le besoin de chiffrement applicatif.",
      "difficulte": 2,
      "pourquoi": [
        "Correct : traiter le réseau d'opérateur comme non fiable et chiffrer de bout en bout (TLS, VPN) protège quel que soit le maillon compromis — le réflexe managérial attendu.",
        "Trop étroit : le chiffrement radio s'arrête à l'antenne et de fausses tours peuvent s'interposer.",
        "Disproportionné : interdire les mobiles professionnels sacrifie le métier au lieu de traiter le risque.",
        "Faux sentiment de sécurité : la 5G améliore la protection mais ne dispense pas du chiffrement applicatif."
      ]
    },
    {
      "q": "Une organisation veut déployer un réseau de stockage (SAN) en réutilisant son infrastructure IP existante, sans acheter de matériel Fibre Channel dédié. Quel protocole répond le MIEUX à ce besoin ?",
      "choix": [
        "NFS sur UDP",
        "MPLS",
        "iSCSI",
        "FCoE"
      ],
      "reponse": 2,
      "explication": "iSCSI encapsule les commandes SCSI dans TCP/IP : un réseau IP standard suffit pour bâtir un SAN économique, sans matériel spécialisé. FCoE exige au contraire une infrastructure Ethernet 10 Gbps dédiée et du matériel compatible Fibre Channel, NFS est un partage de fichiers et non un protocole de stockage en mode bloc, et MPLS est une technique de commutation par labels, pas un protocole de stockage.",
      "difficulte": 2,
      "pourquoi": [
        "Confusion de mode : NFS est un partage de fichiers, pas un protocole de stockage en mode bloc.",
        "Hors catégorie : MPLS est une technique de commutation par labels, pas un protocole de stockage.",
        "Correct : iSCSI encapsule les commandes SCSI dans TCP/IP et bâtit un SAN économique sur le réseau IP existant — la réponse à la contrainte budgétaire posée.",
        "Contresens : FCoE exige précisément une infrastructure Ethernet dédiée et du matériel compatible Fibre Channel."
      ]
    },
    {
      "q": "Quelle affirmation décrit le MIEUX FCoE (Fibre Channel over Ethernet) ?",
      "choix": [
        "Il remplace MPLS pour l'interconnexion des sites distants",
        "Il encapsule le trafic Fibre Channel dans des trames Ethernet en couche 2, sur un réseau à 10 Gbps minimum",
        "Il encapsule les commandes SCSI dans TCP/IP et traverse les routeurs",
        "Il chiffre nativement le trafic de stockage avec TLS"
      ],
      "reponse": 1,
      "explication": "FCoE fait converger le stockage Fibre Channel sur l'infrastructure Ethernet : les trames Fibre Channel sont encapsulées en couche 2, ce qui exige un réseau haut débit (10 Gbps minimum) et ne traverse pas nativement les routeurs IP. C'est iSCSI qui encapsule SCSI dans TCP/IP ; ni l'un ni l'autre ne chiffre nativement, et FCoE n'a aucun rapport avec MPLS.",
      "difficulte": 3,
      "pourquoi": [
        "Hors sujet : FCoE est un protocole de stockage, sans rapport avec l'interconnexion MPLS de sites.",
        "Correct : FCoE encapsule les trames Fibre Channel dans Ethernet en couche 2, exige un réseau sans perte à 10 Gbps minimum et ne se route pas nativement en IP.",
        "Confusion avec iSCSI : c'est iSCSI qui encapsule SCSI dans TCP/IP et traverse les routeurs.",
        "Faux : FCoE n'embarque aucun chiffrement natif ; la sécurité repose sur l'isolement du fabric."
      ]
    },
    {
      "q": "Pourquoi CHAP est-il préférable à PAP pour authentifier un accès distant ?",
      "choix": [
        "CHAP impose des certificats des deux côtés",
        "CHAP est un framework qui accepte de nombreuses méthodes d'authentification",
        "CHAP utilise un échange challenge-response : le mot de passe ne circule jamais en clair, et la ré-authentification est périodique",
        "CHAP chiffre l'ensemble de la session de données"
      ],
      "reponse": 2,
      "explication": "CHAP répond au challenge du serveur par un haché combinant le défi et le secret : le mot de passe n'est jamais transmis, contrairement à PAP qui l'envoie en clair, et CHAP ré-authentifie périodiquement en cours de session. CHAP n'assure pas le chiffrement des données de la session, n'utilise pas de certificats (c'est EAP-TLS), et le framework extensible décrit EAP, pas CHAP.",
      "difficulte": 2,
      "pourquoi": [
        "Confusion de méthode : les certificats des deux côtés décrivent EAP-TLS, pas CHAP.",
        "Confusion de protocole : le framework multi-méthodes est EAP, pas CHAP.",
        "Correct : l'échange challenge-response de CHAP évite toute transmission du mot de passe et ré-authentifie périodiquement — l'avantage décisif sur PAP qui envoie tout en clair.",
        "Sur-promesse : CHAP authentifie mais ne chiffre pas la session de données."
      ]
    },
    {
      "q": "Quelle affirmation à propos d'EAP (Extensible Authentication Protocol) est EXACTE ?",
      "choix": [
        "EAP est réservé aux réseaux sans fil",
        "EAP est un framework d'authentification qui accueille de multiples méthodes, comme les certificats ou les cartes à puce",
        "EAP transmet les identifiants en clair comme PAP",
        "EAP est une méthode d'authentification par mot de passe chiffré"
      ],
      "reponse": 1,
      "explication": "EAP n'est pas une méthode unique mais un cadre extensible : EAP-TLS avec certificats, PEAP avec tunnel TLS, méthodes à carte à puce ou OTP s'y branchent. Ce n'est ni un simple mot de passe chiffré, ni un protocole en clair, et il s'utilise aussi bien sur le filaire (802.1X sur les switches) que sur le Wi-Fi ou les liens VPN.",
      "difficulte": 2,
      "pourquoi": [
        "Trop restrictif : EAP s'utilise aussi sur le filaire avec 802.1X et sur les liens VPN.",
        "Correct : EAP est un framework extensible où se branchent EAP-TLS, PEAP, cartes à puce ou OTP.",
        "Contresens : transmettre en clair décrit PAP ; EAP délègue la protection à la méthode choisie.",
        "Trop étroit : EAP n'est pas une méthode par mot de passe, c'est un cadre qui en accueille beaucoup."
      ]
    },
    {
      "q": "Un audit révèle que des automates industriels communiquent en Modbus et DNP3 sur le réseau de l'usine. Sachant que ces protocoles n'offrent ni authentification ni chiffrement, quelle est la MEILLEURE mesure à recommander ?",
      "choix": [
        "Isoler et segmenter strictement le réseau OT, en s'appuyant sur le modèle Purdue",
        "Installer un antivirus sur les automates",
        "Activer WPA3 sur le réseau industriel",
        "Remplacer Modbus par HTTPS sur tous les équipements"
      ],
      "reponse": 0,
      "explication": "Modbus et DNP3 ont été conçus sans sécurité et ne peuvent généralement pas être corrigés ni remplacés sur des équipements industriels : la réponse architecturale est l'isolement et la segmentation stricte des réseaux OT, organisés en zones selon le modèle Purdue, avec des passerelles contrôlées vers l'IT. Les automates ne supportent pas d'antivirus, le remplacement protocolaire est irréaliste, et WPA3 ne concerne que le Wi-Fi.",
      "difficulte": 2,
      "pourquoi": [
        "Correct : quand les protocoles ne peuvent être ni corrigés ni remplacés, la réponse architecturale est l'isolement et la segmentation stricte du réseau OT selon le modèle Purdue.",
        "Irréaliste : les automates industriels ne supportent généralement pas d'antivirus.",
        "Hors sujet : WPA3 ne concerne que le Wi-Fi, pas les bus industriels filaires.",
        "Irréaliste : remplacer les protocoles industriels sur des équipements en production est rarement possible."
      ]
    },
    {
      "q": "Un utilisateur peut joindre un serveur en tapant son adresse IP, mais pas en tapant son nom de domaine. À quelle couche du modèle OSI le problème se situe-t-il le PLUS probablement ?",
      "choix": [
        "Couche 4 — Transport",
        "Couche 3 — Réseau",
        "Couche 2 — Liaison de données",
        "Couche 7 — Application"
      ],
      "reponse": 3,
      "explication": "Le fait que l'adresse IP fonctionne prouve que le routage (couche 3), le transport (couche 4) et la liaison (couche 2) sont opérationnels. Ce qui échoue, c'est la résolution de noms : DNS est un service de la couche 7 Application. À l'examen, ce type de scénario teste votre capacité à isoler la couche défaillante par élimination des couches qui fonctionnent.",
      "difficulte": 2,
      "pourquoi": [
        "Éliminé par le scénario : le transport fonctionne puisque la connexion par IP aboutit.",
        "Éliminé par le scénario : l'accès par IP fonctionne, donc le routage de couche 3 est opérationnel.",
        "Éliminé par le scénario : la liaison locale fonctionne, sinon rien ne passerait.",
        "Correct : ce qui échoue est la résolution de noms, service DNS de la couche 7 Application — raisonnement par élimination des couches qui fonctionnent."
      ]
    },
    {
      "q": "Un ingénieur réseau constate un nombre croissant d'erreurs FCS/CRC sur un port de commutateur. Que devrait-il vérifier EN PREMIER ?",
      "choix": [
        "La table de routage du routeur en amont",
        "Les ACL configurées sur le port",
        "La configuration du serveur DHCP",
        "Le câblage, la connectique et les interférences électromagnétiques (couche 1)"
      ],
      "reponse": 3,
      "explication": "Le FCS (Frame Check Sequence) est un contrôle d'intégrité vérifié en couche 2, mais les trames corrompues qu'il détecte sont presque toujours causées par un défaut de couche 1 : câble endommagé, connecteur défectueux, longueur excessive ou interférences électromagnétiques. Le routage, les ACL et le DHCP n'altèrent pas les trames au niveau binaire. La méthode de dépannage part du bas de la pile.",
      "difficulte": 3,
      "pourquoi": [
        "Trop haut dans la pile : la table de routage n'altère pas les trames au niveau binaire.",
        "Hors sujet : une ACL bloque ou autorise, elle ne corrompt pas les trames.",
        "Hors sujet : le DHCP attribue des adresses, sans influence sur l'intégrité des trames.",
        "Correct : les erreurs FCS trahissent presque toujours un défaut de couche 1 — câble, connectique, interférences ; le dépannage part du bas de la pile."
      ]
    },
    {
      "q": "Un répartiteur de charge aiguille les requêtes vers différents groupes de serveurs selon l'URL demandée (/api vers un pool, /images vers un autre). À quelle couche du modèle OSI cette décision est-elle prise ?",
      "choix": [
        "Couche 4",
        "Couche 5",
        "Couche 7",
        "Couche 3"
      ],
      "reponse": 2,
      "explication": "Analyser l'URL exige de lire le contenu HTTP, donc d'inspecter la couche 7 Application : c'est un load balancer applicatif (L7). Un répartiteur de couche 4 ne voit que les adresses IP et les ports TCP/UDP ; il ne peut pas distinguer /api de /images. Les couches 3 et 5 ne manipulent ni ports applicatifs ni contenu HTTP.",
      "difficulte": 2,
      "pourquoi": [
        "Trop bas : un répartiteur de couche 4 s'arrête aux ports TCP/UDP et ne distingue pas /api de /images.",
        "Hors rôle : la couche 5 gère les sessions, pas le contenu HTTP.",
        "Correct : lire l'URL exige d'inspecter le contenu HTTP, donc une décision de couche 7 — c'est un load balancer applicatif.",
        "Trop bas : la couche 3 ne voit que les adresses IP, jamais les URL."
      ]
    },
    {
      "q": "Un pare-feu filtre le trafic en se basant sur les numéros de port TCP et UDP. Ces informations appartiennent à quelle couche du modèle OSI ?",
      "choix": [
        "Couche 2",
        "Couche 4",
        "Couche 7",
        "Couche 3"
      ],
      "reponse": 1,
      "explication": "Les numéros de port sont des champs des en-têtes TCP et UDP, protocoles de la couche 4 Transport. La couche 2 manipule les adresses MAC, la couche 3 les adresses IP, et la couche 7 le contenu applicatif. Un filtre par ports est donc un contrôle de couche 4, même si on associe souvent un port à une application.",
      "difficulte": 1,
      "pourquoi": [
        "Trop bas : la couche 2 manipule les adresses MAC, pas les ports.",
        "Correct : les numéros de port sont des champs des en-têtes TCP et UDP, protocoles de la couche 4 Transport.",
        "Piège d'association : on relie un port à une application, mais le champ lui-même appartient au transport, pas à la couche 7.",
        "Trop bas : la couche 3 traite les adresses IP, pas les ports."
      ]
    },
    {
      "q": "Quelle est la longueur d'une adresse IPv6 ?",
      "choix": [
        "128 bits",
        "256 bits",
        "64 bits",
        "32 bits"
      ],
      "reponse": 0,
      "explication": "Une adresse IPv6 fait 128 bits, notée en huit groupes hexadécimaux, contre 32 bits pour IPv4. Cet espace d'adressage colossal supprime le besoin structurel de NAT. Les 64 bits correspondent souvent à la partie préfixe ou identifiant d'interface, mais l'adresse complète fait bien 128 bits.",
      "difficulte": 1,
      "pourquoi": [
        "Correct : une adresse IPv6 fait 128 bits, notée en huit groupes hexadécimaux.",
        "Invention : aucune version d'IP n'utilise d'adresses de 256 bits.",
        "Piège partiel : 64 bits n'est que la taille usuelle du préfixe ou de l'identifiant d'interface.",
        "Confusion avec IPv4 : 32 bits est la taille d'une adresse IPv4."
      ]
    },
    {
      "q": "Une équipe de sécurité ne surveille que le trafic IPv4, alors que les postes de travail ont IPv6 activé par défaut. Quel est le PRINCIPAL risque de cette situation ?",
      "choix": [
        "Les adresses IPv6 auto-configurées changent trop souvent pour être corrélées dans le SIEM",
        "L'absence de NAT en IPv6 expose directement les adresses internes sur Internet",
        "IPv6 constitue un canal non surveillé permettant de contourner les contrôles de sécurité configurés uniquement pour IPv4",
        "Les postes en dual stack privilégient IPv4, ce qui rend le trafic IPv6 résiduel et négligeable"
      ],
      "reponse": 2,
      "explication": "Quand IPv6 est actif mais ignoré par les pare-feux, IDS et outils de supervision, il devient un angle mort : exfiltration de données, tunnels et communications de commande et contrôle peuvent transiter sans détection. La posture correcte est soit d'intégrer IPv6 dans tous les contrôles, soit de le désactiver explicitement s'il n'est pas utilisé. Les systèmes modernes préfèrent au contraire IPv6 quand il est disponible, la rotation d'adresses SLAAC se gère par la journalisation des baux et des tables de voisinage, et l'exposition des adresses n'équivaut pas à une joignabilité : c'est le pare-feu, pas le NAT, qui contrôle les accès.",
      "difficulte": 3,
      "pourquoi": [
        "Techniquement vrai mais gérable : la rotation d'adresses SLAAC se traite par la journalisation des baux et tables de voisinage, ce n'est pas le risque principal.",
        "Confusion classique : sans NAT, l'exposition d'adresses n'équivaut pas à une joignabilité ; c'est le pare-feu qui contrôle les accès.",
        "Correct : un protocole actif mais ignoré des pare-feux et IDS est un canal de contournement et d'exfiltration invisible — il faut le contrôler ou le désactiver explicitement.",
        "Rationalisation dangereuse : les systèmes modernes préfèrent au contraire IPv6 dès qu'il est disponible."
      ]
    },
    {
      "q": "Un analyste détecte du trafic Teredo sortant du réseau de l'entreprise. Pourquoi ce mécanisme de transition IPv6 est-il préoccupant du point de vue de la sécurité ?",
      "choix": [
        "Il expose les adresses MAC internes sur Internet",
        "Il désactive automatiquement le chiffrement TLS",
        "Il ralentit fortement les connexions des utilisateurs",
        "Il encapsule IPv6 dans UDP, traverse le NAT et peut échapper à l'inspection des pare-feux et IDS configurés pour IPv4"
      ],
      "reponse": 3,
      "explication": "Teredo encapsule des paquets IPv6 dans de l'UDP IPv4, précisément pour traverser les NAT : ce tunnel peut transporter du trafic que les équipements de sécurité, qui n'inspectent que l'IPv4 apparent, ne décodent pas. Les mécanismes de transition (Teredo, 6to4) doivent être bloqués ou strictement contrôlés en entreprise. Les autres réponses ne décrivent pas le fonctionnement de Teredo.",
      "difficulte": 3,
      "pourquoi": [
        "Invention : Teredo n'expose pas les adresses MAC internes sur Internet.",
        "Invention : Teredo n'a aucune interaction avec la négociation TLS.",
        "Hors sujet sécurité : la lenteur éventuelle est un enjeu de performance, pas le risque posé.",
        "Correct : Teredo encapsule IPv6 dans UDP pour traverser les NAT, créant un tunnel que les équipements configurés pour IPv4 n'inspectent pas."
      ]
    },
    {
      "q": "En IPv6, quel protocole remplace ARP pour la découverte des voisins, et quelle protection les commutateurs offrent-ils contre ses abus ?",
      "choix": [
        "IGMP, protégé par le snooping multicast",
        "ICMPv6 NDP, protégé par RA Guard et SEND",
        "OSPFv3, protégé par l'authentification de zone",
        "DHCPv6, protégé par le port security"
      ],
      "reponse": 1,
      "explication": "Le Neighbor Discovery Protocol, bâti sur ICMPv6, remplace ARP : il est vulnérable aux mêmes usurpations, notamment via de faux Router Advertisements qui détournent le trafic. Les parades sont RA Guard sur les switches, qui filtre les annonces de routeurs illégitimes, et SEND (Secure Neighbor Discovery). DHCPv6 attribue des adresses, IGMP gère le multicast IPv4, OSPFv3 est un protocole de routage.",
      "difficulte": 3,
      "pourquoi": [
        "Confusion de protocole : IGMP gère les groupes multicast IPv4.",
        "Correct : NDP sur ICMPv6 remplace ARP et se protège par RA Guard contre les faux Router Advertisements, et par SEND.",
        "Hors catégorie : OSPFv3 est un protocole de routage, pas de découverte de voisins.",
        "Confusion de rôle : DHCPv6 attribue des adresses ; le port security limite les MAC, sans lien avec la découverte de voisins."
      ]
    },
    {
      "q": "Quelle affirmation à propos d'IPv6 est EXACTE ?",
      "choix": [
        "IPv6 supprime le broadcast et le remplace par le multicast",
        "IPv6 rend le NAT obligatoire",
        "IPv6 utilise des adresses de 64 bits",
        "IPv6 ne supporte pas IPsec"
      ],
      "reponse": 0,
      "explication": "IPv6 n'a pas d'adresse de broadcast : les fonctions équivalentes reposent sur des groupes multicast bien définis (tous les noeuds, tous les routeurs), ce qui réduit le bruit sur le réseau. Le NAT devient au contraire inutile grâce à l'immensité de l'espace d'adressage, le support d'IPsec est intégré à la conception d'IPv6, et les adresses font 128 bits.",
      "difficulte": 2,
      "pourquoi": [
        "Correct : IPv6 supprime le broadcast et le remplace par des groupes multicast bien définis, réduisant le bruit réseau.",
        "Inversion : l'immensité de l'espace d'adressage rend le NAT structurellement inutile.",
        "Erreur de taille : les adresses IPv6 font 128 bits, pas 64.",
        "Contresens : le support d'IPsec est intégré à la conception d'IPv6."
      ]
    },
    {
      "q": "Pourquoi une organisation devrait-elle exiger des suites cryptographiques à base d'ECDHE pour ses serveurs TLS ?",
      "choix": [
        "ECDHE est la seule suite compatible avec les navigateurs anciens",
        "ECDHE fournit la confidentialité persistante (forward secrecy) : la compromission future de la clé privée du serveur ne permet pas de déchiffrer les sessions passées",
        "ECDHE accélère le chiffrement des données de session",
        "ECDHE supprime le besoin de certificat serveur"
      ],
      "reponse": 1,
      "explication": "Avec un échange de clé éphémère Diffie-Hellman (ECDHE), chaque session dérive des clés uniques jamais transmises : même si la clé privée du serveur est volée plus tard, le trafic capturé auparavant reste indéchiffrable. C'est la forward secrecy, rendue obligatoire par TLS 1.3. À l'inverse, l'ancien échange par chiffrement RSA de la clé de session expose tout l'historique en cas de vol de la clé privée. Le chiffrement des données reste symétrique, et le certificat serveur demeure nécessaire pour l'authentification.",
      "difficulte": 3,
      "pourquoi": [
        "Inversion : ce sont plutôt les vieux navigateurs qui posent problème avec les suites modernes.",
        "Correct : les clés éphémères d'ECDHE assurent la forward secrecy — la compromission future de la clé privée ne déchiffre pas les sessions passées capturées.",
        "Confusion de rôle : le chiffrement des données de session reste symétrique ; ECDHE ne l'accélère pas.",
        "Faux : le certificat serveur reste indispensable pour authentifier le serveur."
      ]
    },
    {
      "q": "Quel est le rôle d'IKE (Internet Key Exchange) dans une connexion IPsec ?",
      "choix": [
        "Négocier les Security Associations et établir les clés de session, via une phase 1 (canal sécurisé) puis une phase 2 (SA IPsec)",
        "Chiffrer les données utilisateur pendant la session",
        "Compresser les paquets avant chiffrement",
        "Vérifier l'intégrité de l'en-tête IP comme le fait AH"
      ],
      "reponse": 0,
      "explication": "IKE automatise la négociation : la phase 1 authentifie les pairs et établit un canal de gestion sécurisé (IKE SA), la phase 2 négocie les SA IPsec qui protégeront réellement le trafic, avec les algorithmes et les clés. Le chiffrement des données est ensuite assuré par ESP, l'intégrité de l'en-tête par AH ; IKE ne chiffre pas les données utilisateur lui-même.",
      "difficulte": 2,
      "pourquoi": [
        "Correct : IKE négocie les Security Associations et établit les clés — phase 1 pour le canal sécurisé, phase 2 pour les SA IPsec du trafic réel.",
        "Confusion de rôle : le chiffrement des données utilisateur est assuré par ESP, pas par IKE.",
        "Hors sujet : la compression n'est pas la fonction d'IKE.",
        "Confusion de composant : l'intégrité de l'en-tête IP est le rôle d'AH."
      ]
    },
    {
      "q": "Un tunnel IPsec utilisant AH échoue dès qu'il traverse un équipement NAT. Quelle en est la cause et quelle est la solution standard ?",
      "choix": [
        "AH exige IPv6 ; il faut migrer le réseau",
        "Le NAT bloque le port TCP 500 utilisé par AH ; il faut ouvrir ce port",
        "AH protège l'intégrité de l'en-tête IP que le NAT modifie, ce qui invalide le contrôle ; la solution est ESP avec NAT-Traversal (encapsulation UDP 4500)",
        "AH est trop lent pour le NAT ; il faut augmenter la bande passante"
      ],
      "reponse": 2,
      "explication": "AH calcule son contrôle d'intégrité sur l'en-tête IP, y compris les adresses : le NAT, qui réécrit précisément ces adresses, casse systématiquement la vérification. La solution éprouvée est d'utiliser ESP, qui ne couvre pas l'en-tête externe, avec NAT-T qui encapsule le trafic dans UDP 4500 pour franchir les NAT. IKE utilise UDP 500 et non TCP, et AH fonctionne aussi bien en IPv4 qu'en IPv6.",
      "difficulte": 3,
      "pourquoi": [
        "Faux : AH fonctionne aussi bien en IPv4 qu'en IPv6.",
        "Erreur factuelle : IKE utilise UDP 500, pas TCP, et le problème n'est pas un port bloqué.",
        "Correct : AH couvre l'en-tête IP dans son contrôle d'intégrité ; le NAT réécrit les adresses et invalide la vérification — la solution est ESP avec NAT-T (UDP 4500).",
        "Hors sujet : la performance n'explique en rien l'échec systématique derrière un NAT."
      ]
    },
    {
      "q": "Deux microservices doivent s'authentifier mutuellement avant d'échanger des données sensibles. Quelle configuration TLS répond à ce besoin ?",
      "choix": [
        "Un simple en-tête HTTP contenant un identifiant de service",
        "TLS avec clé pré-partagée diffusée à tous les services",
        "TLS standard avec certificat serveur uniquement",
        "TLS mutuel (mTLS) : chaque partie présente et valide un certificat"
      ],
      "reponse": 3,
      "explication": "Le TLS classique n'authentifie que le serveur ; en mTLS, le client présente lui aussi un certificat que le serveur valide, garantissant l'identité des deux extrémités. C'est le standard des architectures de microservices et des service meshes, et une brique du Zero Trust. Une clé pré-partagée diffusée largement est un secret commun fragile, et un en-tête HTTP se forge trivialement.",
      "difficulte": 2,
      "pourquoi": [
        "Trivialement contournable : un en-tête HTTP se forge sans effort.",
        "Fragile : une clé pré-partagée diffusée à tous les services est un secret commun impossible à révoquer proprement.",
        "Trop étroit : le TLS standard n'authentifie que le serveur, pas le client.",
        "Correct : en mTLS, chaque partie présente et valide un certificat — l'authentification mutuelle exigée entre microservices et une brique du Zero Trust."
      ]
    },
    {
      "q": "Un attaquant en position d'interception force un client et un serveur à négocier une version obsolète de TLS afin d'exploiter ses faiblesses. Comment s'appelle cette attaque et quelle est la MEILLEURE parade ?",
      "choix": [
        "Attaque par force brute ; allonger les clés",
        "Attaque de downgrade ; désactiver les versions et suites obsolètes côté serveur",
        "Attaque par rejeu ; ajouter des numéros de séquence",
        "Certificate pinning ; renouveler les certificats"
      ],
      "reponse": 1,
      "explication": "L'attaque de downgrade (illustrée historiquement par POODLE) manipule la négociation pour retomber sur SSL 3.0 ou TLS 1.0 et leurs vulnérabilités. La parade décisive est de ne plus proposer du tout les versions et suites faibles : ce qui n'est pas négociable ne peut pas être imposé. TLS 1.3 intègre en outre une protection cryptographique de la négociation. Les autres réponses décrivent des mécanismes sans rapport avec la manipulation de version.",
      "difficulte": 2,
      "pourquoi": [
        "Hors sujet : la force brute vise les clés, pas la négociation de version.",
        "Correct : forcer la négociation vers une version obsolète est une attaque de downgrade ; la parade décisive est de ne plus proposer du tout les versions faibles côté serveur.",
        "Confusion d'attaque : le rejeu réutilise des messages capturés, il ne manipule pas la négociation de version.",
        "Contresens : le certificate pinning est une défense, pas une attaque."
      ]
    },
    {
      "q": "Dans une négociation TLS, à quoi sert le certificat présenté par le serveur ?",
      "choix": [
        "À chiffrer l'ensemble du trafic de la session",
        "À compresser les données échangées",
        "À authentifier l'utilisateur final",
        "À prouver l'identité du serveur via une autorité de certification de confiance et à fournir sa clé publique"
      ],
      "reponse": 3,
      "explication": "Le certificat lie l'identité du serveur (son nom de domaine) à sa clé publique, sous la signature d'une autorité de certification que le client vérifie : c'est ce qui empêche un imposteur de se faire passer pour le site. Le chiffrement de la session utilise ensuite une clé symétrique négociée, l'utilisateur n'est authentifié que si mTLS ou un autre mécanisme est ajouté, et TLS moderne a abandonné la compression pour raisons de sécurité.",
      "difficulte": 1,
      "pourquoi": [
        "Confusion de mécanisme : le chiffrement de session utilise une clé symétrique négociée, pas le certificat lui-même.",
        "Hors sujet : TLS moderne a abandonné la compression pour raisons de sécurité.",
        "Inversion de sens : l'utilisateur final n'est authentifié que si l'on ajoute mTLS ou un autre mécanisme.",
        "Correct : le certificat lie l'identité du serveur à sa clé publique sous la signature d'une CA de confiance — c'est ce qui empêche l'usurpation du site."
      ]
    },
    {
      "q": "Après connexion au VPN, les télétravailleurs d'une organisation peuvent atteindre librement tous les serveurs internes. Quelle évolution s'inscrit le MIEUX dans une démarche Zero Trust ?",
      "choix": [
        "Restreindre les accès par microsegmentation et politiques par application, selon l'identité et la posture, au moindre privilège",
        "Doubler la capacité du concentrateur VPN",
        "Passer le VPN en split tunneling",
        "Renforcer le mot de passe du VPN"
      ],
      "reponse": 0,
      "explication": "Le Zero Trust rejette le modèle où franchir le périmètre (ici le VPN) donne une confiance implicite sur tout le réseau : chaque accès doit être autorisé explicitement, par application, selon l'identité, le contexte et la posture du poste, au moindre privilège. La microsegmentation matérialise ce contrôle. Renforcer le mot de passe ou la capacité ne change pas le modèle de confiance, et le split tunneling ajoute un risque au lieu d'en retirer.",
      "difficulte": 2,
      "pourquoi": [
        "Correct : restreindre par microsegmentation et politiques par application, selon identité et posture, matérialise le moindre privilège du Zero Trust.",
        "Hors sujet : la capacité du concentrateur est un enjeu de performance, pas de modèle de confiance.",
        "Contre-productif : le split tunneling ajoute un risque de pont au lieu de réduire la confiance implicite.",
        "Réponse de technicien : renforcer le mot de passe conserve le modèle de confiance périmétrique inchangé."
      ]
    },
    {
      "q": "Une organisation veut filtrer le trafic east-west entre machines virtuelles hébergées sur le MÊME hyperviseur. Pourquoi son NGFW de périmètre est-il insuffisant, et quelle est la bonne approche ?",
      "choix": [
        "Le NGFW est trop lent ; il faut un modèle plus puissant",
        "Le trafic virtuel ne peut pas être filtré ; il faut l'accepter comme risque résiduel",
        "Le trafic entre VM d'un même hôte ne sort jamais vers le pare-feu physique ; il faut un pare-feu distribué au niveau de l'hyperviseur (microsegmentation)",
        "Il suffit de créer des VLAN supplémentaires sur le switch physique"
      ],
      "reponse": 2,
      "explication": "Les flux entre VM colocalisées transitent par le switch virtuel de l'hyperviseur sans jamais toucher le réseau physique : le pare-feu de périmètre ne les voit tout simplement pas. La microsegmentation avec pare-feu distribué applique les politiques directement au niveau de l'hyperviseur ou de la carte virtuelle de chaque VM. Les VLAN physiques n'interceptent pas ce trafic interne, et le risque est parfaitement traitable.",
      "difficulte": 3,
      "pourquoi": [
        "Réponse de technicien : la puissance du NGFW ne change rien s'il ne voit jamais le trafic.",
        "Fatalisme injustifié : ce trafic est parfaitement filtrable avec les bons outils.",
        "Correct : les flux entre VM colocalisées restent dans le switch virtuel de l'hyperviseur ; seule la microsegmentation par pare-feu distribué au niveau de l'hyperviseur les contrôle.",
        "Inefficace : des VLAN sur le switch physique n'interceptent pas un trafic qui ne sort pas de l'hôte."
      ]
    },
    {
      "q": "Quelle caractéristique définit un Software-Defined Perimeter (SDP) ?",
      "choix": [
        "Il désigne le périmètre physique du datacenter défini par logiciel",
        "Il remplace le chiffrement par de l'obfuscation d'adresses",
        "Les ressources restent invisibles et injoignables tant que l'utilisateur et son appareil ne sont pas authentifiés : on authentifie d'abord, on connecte ensuite",
        "Il place toutes les ressources dans une DMZ accessible publiquement"
      ],
      "reponse": 2,
      "explication": "Le SDP applique le principe « authenticate first, connect second » : un contrôleur vérifie l'identité et la posture avant d'ouvrir dynamiquement un tunnel vers la seule ressource autorisée ; le reste de l'infrastructure reste sombre, non scannable. C'est l'inverse du VPN traditionnel qui expose une passerelle publique puis donne un large accès. Le SDP conserve évidemment le chiffrement et n'a rien de physique.",
      "difficulte": 2,
      "pourquoi": [
        "Contresens : le périmètre défini par logiciel n'a rien de physique.",
        "Invention : le SDP conserve le chiffrement, il n'obfusque pas des adresses à la place.",
        "Correct : le SDP applique « authenticate first, connect second » — les ressources restent invisibles tant que l'utilisateur et l'appareil ne sont pas authentifiés.",
        "Contresens : une DMZ publique expose, le SDP cache."
      ]
    },
    {
      "q": "Quelle méthode EAP offre l'authentification la PLUS robuste pour un réseau Wi-Fi d'entreprise, et quel est son principal coût opérationnel ?",
      "choix": [
        "EAP-TLS ; il exige une PKI pour déployer et gérer des certificats sur chaque client",
        "PEAP ; il exige des jetons matériels pour tous les utilisateurs",
        "LEAP ; il exige des mots de passe complexes",
        "EAP-MD5 ; il exige un serveur RADIUS redondant"
      ],
      "reponse": 0,
      "explication": "EAP-TLS repose sur une authentification mutuelle par certificats : pas de mot de passe à voler ni à hameçonner, résistance maximale. Sa contrepartie est opérationnelle : une PKI complète pour émettre, distribuer, renouveler et révoquer les certificats de chaque poste. PEAP se contente d'un certificat côté serveur, LEAP est un protocole Cisco cassé depuis longtemps, et EAP-MD5 n'offre ni certificat ni protection sérieuse.",
      "difficulte": 2,
      "pourquoi": [
        "Correct : EAP-TLS offre l'authentification mutuelle par certificats — pas de mot de passe à voler — au prix d'une PKI pour gérer les certificats de chaque client.",
        "Association fausse : PEAP n'exige pas de jetons matériels, seulement un certificat serveur.",
        "Disqualifié : LEAP est cassé depuis des années, quelle que soit la complexité des mots de passe.",
        "Disqualifié : EAP-MD5 n'offre aucune protection sérieuse, redondance RADIUS ou non."
      ]
    },
    {
      "q": "Comment PEAP protège-t-il les identifiants des utilisateurs lors de l'authentification Wi-Fi ?",
      "choix": [
        "Il exige un certificat client sur chaque poste",
        "Il les hache avec MD5 avant envoi",
        "Il les transmet en clair mais sur un canal radio séparé",
        "Il établit d'abord un tunnel TLS grâce au certificat du serveur, puis fait circuler l'authentification interne (ex. MSCHAPv2) à l'intérieur de ce tunnel"
      ],
      "reponse": 3,
      "explication": "PEAP (Protected EAP) crée un tunnel TLS authentifié par le seul certificat du serveur ; l'échange d'identifiants, souvent MSCHAPv2, se déroule ensuite à l'abri de ce tunnel. Point de vigilance : les clients doivent valider strictement le certificat du serveur, sinon un evil twin peut monter le tunnel à la place du serveur légitime et capter les identifiants. Le certificat client généralisé est le propre d'EAP-TLS, pas de PEAP.",
      "difficulte": 2,
      "pourquoi": [
        "Confusion de méthode : le certificat client généralisé est le propre d'EAP-TLS.",
        "Confusion : MD5 n'est pas le mécanisme de PEAP et un simple hachage ne protégerait pas des attaques.",
        "Absurde sur le fond : un canal radio séparé n'existe pas et ne protégerait rien en clair.",
        "Correct : PEAP monte d'abord un tunnel TLS authentifié par le certificat du serveur, puis fait circuler l'authentification interne à l'abri de ce tunnel."
      ]
    },
    {
      "q": "Des employés en déplacement utilisent des réseaux Wi-Fi publics avec portail captif. Quelle recommandation offre la MEILLEURE protection de leurs communications ?",
      "choix": [
        "Se connecter uniquement aux portails exigeant une adresse email",
        "Imposer un VPN full tunnel systématique, le réseau public étant considéré comme hostile",
        "Préférer les réseaux dont le SSID contient le nom de l'hôtel",
        "Désactiver le pare-feu local pour éviter les conflits avec le portail"
      ],
      "reponse": 1,
      "explication": "Un portail captif n'authentifie que l'accès au service : il ne chiffre rien, et un réseau ouvert expose au sniffing et aux evil twins. La posture correcte est de traiter tout Wi-Fi public comme hostile et de chiffrer l'intégralité du trafic dans un VPN full tunnel, complété par TLS de bout en bout. L'adresse email demandée ne protège rien, désactiver le pare-feu aggrave la situation, et un SSID se falsifie sans effort.",
      "difficulte": 1,
      "pourquoi": [
        "Faux confort : demander une adresse email n'apporte aucune protection cryptographique.",
        "Correct : traiter tout Wi-Fi public comme hostile et imposer un VPN full tunnel chiffre l'intégralité du trafic — la seule posture robuste.",
        "Naïf : un SSID se falsifie sans effort, le nom de l'hôtel ne prouve rien.",
        "Aggravant : désactiver le pare-feu local expose davantage le poste."
      ]
    },
    {
      "q": "Lors d'un audit Wi-Fi, vous découvrez que le réseau utilise encore LEAP pour l'authentification. Que devriez-vous recommander ?",
      "choix": [
        "Le compléter par du filtrage d'adresses MAC",
        "Ajouter simplement un SSID masqué",
        "Le remplacer par une méthode EAP robuste comme EAP-TLS ou PEAP, LEAP étant vulnérable aux attaques par dictionnaire",
        "Le conserver car il est propriétaire donc peu attaqué"
      ],
      "reponse": 2,
      "explication": "LEAP, protocole propriétaire Cisco, repose sur MS-CHAP sans tunnel de protection : des outils publics cassent ses échanges par attaque par dictionnaire depuis des années. La sécurité par l'obscurité n'est pas une défense. Il faut migrer vers EAP-TLS ou au minimum PEAP. Le SSID masqué et le filtrage MAC sont des mesures cosmétiques contournables en quelques minutes par capture radio.",
      "difficulte": 2,
      "pourquoi": [
        "Cosmétique : le filtrage MAC se contourne par usurpation en quelques minutes.",
        "Cosmétique : masquer le SSID ne corrige pas une authentification cassée.",
        "Correct : LEAP est vulnérable aux attaques par dictionnaire depuis des années ; la migration vers EAP-TLS ou PEAP s'impose.",
        "Sécurité par l'obscurité : un protocole propriétaire cassé publiquement n'est pas protégé par sa rareté."
      ]
    },
    {
      "q": "Un serveur web devient injoignable : sa table de connexions est saturée de connexions TCP à moitié ouvertes provenant d'adresses sources aléatoires. Quelle attaque est en cours et quelle parade est la PLUS adaptée ?",
      "choix": [
        "SYN flood ; activer les SYN cookies et des mécanismes anti-DDoS",
        "Evil twin ; renforcer le WPA3",
        "Smurf ; désactiver ICMP",
        "Teardrop ; corriger le réassemblage de fragments"
      ],
      "reponse": 0,
      "explication": "L'accumulation de connexions half-open (SYN reçus jamais complétés par un ACK) est la signature du SYN flood, qui épuise la table d'états du serveur. Les SYN cookies permettent de ne pas allouer de ressources avant la validation du handshake ; on y ajoute filtrage amont et services anti-DDoS. Le smurf est une amplification ICMP, le teardrop un DoS par fragments malformés, et l'evil twin une attaque Wi-Fi.",
      "difficulte": 2,
      "pourquoi": [
        "Correct : l'accumulation de connexions half-open est la signature du SYN flood ; les SYN cookies évitent d'allouer des ressources avant validation du handshake.",
        "Hors technologie : l'evil twin est une attaque Wi-Fi, sans rapport avec la table d'états d'un serveur.",
        "Confusion d'attaque : le smurf inonde en ICMP, il ne laisse pas de connexions à moitié ouvertes.",
        "Confusion d'attaque : le teardrop exploite des fragments malformés, pas la table de connexions."
      ]
    },
    {
      "q": "Une victime reçoit un déluge de volumineuses réponses DNS qu'elle n'a jamais demandées, provenant de résolveurs ouverts légitimes. Quelle technique l'attaquant utilise-t-il ?",
      "choix": [
        "Tunneling DNS : exfiltration de données dans les requêtes",
        "Amplification DNS : requêtes à source usurpée envoyées à des résolveurs ouverts, dont les réponses, bien plus grosses, convergent vers la victime",
        "Typosquatting : enregistrement de domaines ressemblants",
        "DNS poisoning : corruption du cache des résolveurs"
      ],
      "reponse": 1,
      "explication": "C'est une attaque par réflexion et amplification : l'attaquant usurpe l'adresse IP de la victime dans de petites requêtes DNS ; les résolveurs ouverts répondent à la victime avec des réponses beaucoup plus volumineuses, démultipliant le débit d'attaque. Les parades incluent le filtrage anti-spoofing chez les opérateurs (BCP 38) et la fermeture des résolveurs ouverts. Le poisoning corrompt des réponses, le tunneling exfiltre, le typosquatting trompe les utilisateurs : rien à voir avec ce déluge.",
      "difficulte": 2,
      "pourquoi": [
        "Confusion d'objectif : le tunneling DNS exfiltre des données, il ne sature pas la victime.",
        "Correct : requêtes à source usurpée vers des résolveurs ouverts dont les réponses volumineuses convergent vers la victime — la définition de la réflexion-amplification DNS.",
        "Hors catégorie : le typosquatting trompe des utilisateurs, sans volumétrie d'attaque.",
        "Confusion de mécanisme : le poisoning corrompt des caches, il ne génère pas de déluge de trafic."
      ]
    },
    {
      "q": "Un attaquant insère deux étiquettes 802.1Q dans ses trames pour atteindre un VLAN auquel il n'appartient pas. Quelles mesures contrent ce VLAN hopping par double tagging ?",
      "choix": [
        "Chiffrer le trafic avec TLS",
        "Réduire la taille des trames Ethernet",
        "Activer le spanning tree sur tous les ports",
        "Changer le VLAN natif des trunks, ne jamais y placer de ports d'accès, et désactiver la négociation automatique de trunk (DTP)"
      ],
      "reponse": 3,
      "explication": "Le double tagging exploite le VLAN natif non étiqueté des trunks : le premier switch retire l'étiquette externe et transmet la trame avec l'étiquette interne vers le VLAN cible. Les parades sont architecturales : dédier un VLAN natif inutilisé, étiqueter le VLAN natif, refuser DTP et figer les ports en mode access ou trunk explicite. Le spanning tree prévient les boucles, pas le hopping, et TLS ne protège pas la topologie de commutation.",
      "difficulte": 3,
      "pourquoi": [
        "Hors couche : TLS chiffre les données mais ne protège pas la topologie de commutation.",
        "Sans effet : la taille des trames n'a aucun rapport avec l'empilement d'étiquettes 802.1Q.",
        "Confusion de rôle : le spanning tree prévient les boucles, pas la manipulation d'étiquettes.",
        "Correct : dédier un VLAN natif inutilisé, l'étiqueter et désactiver DTP supprime les conditions mêmes du double tagging."
      ]
    },
    {
      "q": "Dans un café, un attaquant intercepte le trafic entre les clients du Wi-Fi et Internet en se faisant passer pour la passerelle. Comment nomme-t-on sa position, et qu'est-ce qui protège le MIEUX les victimes ?",
      "choix": [
        "Wardriving ; la géolocalisation",
        "Attaque on-path (man-in-the-middle) ; le chiffrement de bout en bout via VPN et TLS",
        "Salami ; la journalisation des transactions",
        "Attaque par rejeu ; les horodatages"
      ],
      "reponse": 1,
      "explication": "S'interposer entre la victime et sa destination pour lire ou modifier les échanges est une attaque on-path, terme moderne pour man-in-the-middle. Même interceptés, des flux chiffrés en VPN ou TLS avec validation stricte des certificats restent illisibles et inviolables : le chiffrement de bout en bout est la protection décisive. Le rejeu réutilise des messages capturés, le wardriving cartographie des réseaux, et l'attaque salami accumule des micro-détournements financiers.",
      "difficulte": 1,
      "pourquoi": [
        "Hors catégorie : le wardriving cartographie des réseaux sans intercepter de sessions.",
        "Correct : s'interposer entre la victime et sa destination est une attaque on-path ; le chiffrement de bout en bout (VPN, TLS) rend l'interception inexploitable.",
        "Hors domaine : l'attaque salami est une fraude financière par micro-détournements.",
        "Confusion d'attaque : le rejeu réutilise des messages capturés ; les horodatages ne protègent pas d'une interception en direct."
      ]
    },
    {
      "q": "Quelle attaque par déni de service envoie des paquets UDP vers les ports echo et chargen de l'adresse de broadcast d'un réseau, avec l'adresse source de la victime ?",
      "choix": [
        "Fraggle",
        "Land attack",
        "Smurf",
        "Ping of death"
      ],
      "reponse": 0,
      "explication": "Le fraggle est le cousin UDP du smurf : il vise les services UDP echo (port 7) et chargen (port 19) en broadcast avec une source usurpée, pour que toutes les réponses convergent vers la victime. Le smurf utilise ICMP echo, le ping of death un paquet ICMP surdimensionné qui plantait les piles anciennes, et la land attack un paquet dont source et destination sont identiques.",
      "difficulte": 2,
      "pourquoi": [
        "Correct : le fraggle vise les ports UDP 7 (echo) et 19 (chargen) en broadcast avec source usurpée — la variante UDP du smurf.",
        "Confusion d'attaque : la land attack utilise un paquet dont source et destination sont identiques.",
        "Piège du cousin : le smurf utilise ICMP echo, pas les ports UDP echo et chargen.",
        "Confusion d'attaque : le ping of death exploite un paquet ICMP surdimensionné."
      ]
    },
    {
      "q": "Un attaquant tente de s'insérer dans une session TCP établie en prédisant les numéros de séquence. Quelles défenses rendent ce détournement de session impraticable ?",
      "choix": [
        "Le passage d'UDP à TCP",
        "La désactivation des accusés de réception",
        "Des numéros de séquence initiaux aléatoires et le chiffrement de la session (TLS, IPsec)",
        "L'augmentation de la MTU"
      ],
      "reponse": 2,
      "explication": "Le TCP session hijacking exige de deviner les numéros de séquence pour injecter des segments acceptés par la pile de la victime : des ISN réellement aléatoires (standard sur les systèmes modernes) rendent la prédiction infaisable, et le chiffrement authentifié (TLS, IPsec) fait qu'une injection éventuelle échoue à la vérification cryptographique. La MTU concerne la taille des paquets, la session est déjà en TCP, et supprimer les ACK casserait simplement le protocole.",
      "difficulte": 3,
      "pourquoi": [
        "Absurde : la session attaquée est déjà en TCP.",
        "Destructeur : supprimer les accusés de réception casserait le protocole lui-même.",
        "Correct : des ISN réellement aléatoires rendent la prédiction infaisable et le chiffrement authentifié fait échouer toute injection — la défense en profondeur adaptée.",
        "Hors sujet : la MTU règle la taille des paquets, pas la prédictibilité des séquences."
      ]
    },
    {
      "q": "Malgré un pare-feu stateful correctement configuré, le site web d'une organisation subit des injections SQL. Quel équipement complémentaire cible ce problème ?",
      "choix": [
        "Un serveur RADIUS",
        "Un routeur avec des ACL plus strictes",
        "Un concentrateur VPN",
        "Un web application firewall (WAF) qui inspecte les requêtes HTTP/S"
      ],
      "reponse": 3,
      "explication": "L'injection SQL circule dans des requêtes HTTP légitimes sur le port 443 : un pare-feu stateful, qui raisonne en adresses, ports et états de connexion, la laisse passer. Le WAF analyse le contenu applicatif des requêtes web et bloque injections, XSS et autres attaques du top OWASP. Les ACL restent au niveau réseau, le VPN chiffre des accès, et RADIUS authentifie : aucun ne lit le contenu HTTP.",
      "difficulte": 1,
      "pourquoi": [
        "Hors rôle : RADIUS authentifie, il n'analyse aucune requête applicative.",
        "Hors couche : des ACL réseau ne lisent pas le contenu des requêtes HTTP légitimes sur le port 443.",
        "Hors rôle : un concentrateur VPN chiffre des accès, il ne filtre pas le contenu web.",
        "Correct : le WAF inspecte le contenu applicatif HTTP/S et bloque injections SQL, XSS et autres attaques du top OWASP que le pare-feu stateful laisse passer."
      ]
    },
    {
      "q": "Quelle capacité distingue FONDAMENTALEMENT un NGFW d'un pare-feu stateful traditionnel ?",
      "choix": [
        "Le NGFW identifie les applications indépendamment du port utilisé, grâce à l'inspection profonde des paquets, et intègre IPS et connaissance des identités",
        "Le NGFW suit l'état des connexions TCP",
        "Le NGFW fonctionne sans table d'états pour plus de rapidité",
        "Le NGFW filtre par adresses IP source et destination"
      ],
      "reponse": 0,
      "explication": "Le suivi d'état et le filtrage par adresses existent déjà sur un pare-feu stateful classique. La valeur ajoutée du next-generation firewall est l'app-awareness : reconnaître l'application réelle même sur un port non standard ou chiffré, appliquer des politiques par application et par utilisateur, avec IPS intégré et souvent inspection TLS. Il conserve bien entendu une table d'états.",
      "difficulte": 2,
      "pourquoi": [
        "Correct : l'app-awareness — identifier l'application quel que soit le port, avec IPS intégré et connaissance des identités — est la valeur ajoutée définissant le NGFW.",
        "Déjà acquis : le suivi d'état existe sur tout pare-feu stateful classique.",
        "Contresens : le NGFW conserve évidemment une table d'états.",
        "Déjà acquis : le filtrage par adresses est la base de tout pare-feu."
      ]
    },
    {
      "q": "Une organisation autorise le BYOD mais refuse d'installer un logiciel permanent sur les appareils personnels. Comment vérifier néanmoins leur posture de sécurité avant l'accès au réseau ?",
      "choix": [
        "L'inscription manuelle des adresses MAC",
        "Un pare-feu stateless en périmètre",
        "Un simple portail captif d'acceptation des conditions",
        "Un NAC avec agent dissolvable ou en mode agentless"
      ],
      "reponse": 3,
      "explication": "Le NAC propose des modes adaptés au BYOD : l'agent dissolvable s'exécute le temps de l'évaluation de posture puis s'efface, et le mode agentless évalue l'appareil depuis le réseau sans rien installer. Un pare-feu stateless ne connaît pas la posture des appareils, un portail d'acceptation ne vérifie rien techniquement, et le filtrage MAC s'usurpe facilement sans rien dire de l'état de l'appareil.",
      "difficulte": 2,
      "pourquoi": [
        "Contournable : une adresse MAC s'usurpe et ne dit rien de l'état de l'appareil.",
        "Hors sujet : un pare-feu stateless ignore tout de la posture des appareils.",
        "Insuffisant : accepter des conditions ne vérifie techniquement rien.",
        "Correct : l'agent dissolvable s'exécute le temps de l'évaluation de posture puis s'efface, et l'agentless évalue depuis le réseau — les modes NAC conçus pour le BYOD."
      ]
    },
    {
      "q": "Quelle est la différence OPÉRATIONNELLE essentielle entre un IDS et un IPS réseau ?",
      "choix": [
        "L'IDS chiffre le trafic analysé, pas l'IPS",
        "L'IDS est matériel, l'IPS est logiciel",
        "L'IPS est placé en coupure (inline) et peut bloquer le trafic malveillant en temps réel ; l'IDS écoute une copie du trafic et se limite à détecter et alerter",
        "L'IPS ne fonctionne que sur les postes de travail"
      ],
      "reponse": 2,
      "explication": "Tout tient au placement : l'IPS, en coupure sur le chemin du trafic, peut rejeter les paquets malveillants immédiatement, au prix d'un risque de blocage légitime (faux positif) et d'un point de panne potentiel. L'IDS, alimenté par un port SPAN ou un TAP, observe sans pouvoir intervenir directement. Les deux existent en versions réseau et hôte, aucun ne chiffre le trafic.",
      "difficulte": 1,
      "pourquoi": [
        "Invention : aucun des deux ne chiffre le trafic analysé.",
        "Faux clivage : les deux existent en versions matérielles et logicielles.",
        "Correct : l'IPS en coupure bloque en temps réel, l'IDS sur copie de trafic ne fait que détecter et alerter — tout tient au placement.",
        "Faux : l'IPS existe en version réseau (NIPS) comme en version hôte, il n'est pas limité aux postes de travail."
      ]
    },
    {
      "q": "Lors d'une revue d'architecture, vous découvrez un VPN d'accès distant encore configuré en PPTP. Pourquoi faut-il le remplacer d'URGENCE ?",
      "choix": [
        "PPTP impose un débit maximal de 10 Mbps",
        "L'authentification MS-CHAPv2 de PPTP est cassée et son chiffrement MPPE est faible : le trafic peut être déchiffré",
        "PPTP est trop coûteux en licences",
        "PPTP ne fonctionne pas sur les réseaux modernes"
      ],
      "reponse": 1,
      "explication": "PPTP est cryptographiquement mort : MS-CHAPv2 se casse par des services de calcul spécialisés en un temps court, et le chiffrement MPPE qui en dérive tombe avec lui. Toute donnée transitant par PPTP doit être considérée comme exposée. Les remplaçants sont IKEv2/IPsec, les VPN TLS ou WireGuard. Les questions de coût, de compatibilité ou de débit ne sont pas le sujet : c'est la confidentialité qui est rompue.",
      "difficulte": 2,
      "pourquoi": [
        "Invention : PPTP n'impose aucune limite de débit de ce type.",
        "Correct : MS-CHAPv2 se casse en un temps court et le chiffrement MPPE tombe avec lui — la confidentialité de PPTP est rompue, d'où l'urgence du remplacement.",
        "Hors sujet : le coût n'est pas le problème d'un protocole cryptographiquement cassé.",
        "Faux : PPTP fonctionne techniquement, c'est sa sécurité qui est morte."
      ]
    },
    {
      "q": "Des consultants externes doivent accéder à UNE seule application web interne, sans installation de logiciel sur leurs machines. Quelle solution d'accès distant est la PLUS appropriée ?",
      "choix": [
        "Un VPN TLS clientless : un portail web publiant uniquement l'application autorisée",
        "La création de comptes sur le VPN full tunnel de l'entreprise",
        "Un VPN IPsec en mode tunnel avec client complet",
        "Un accès RDP direct exposé sur Internet"
      ],
      "reponse": 0,
      "explication": "Le VPN TLS clientless s'utilise depuis un simple navigateur et le portail ne publie que les applications explicitement autorisées : accès au moindre privilège, aucune installation, aucune visibilité sur le reste du réseau. Un VPN IPsec ou full tunnel donnerait aux consultants un accès réseau bien trop large depuis des machines non maîtrisées, et exposer RDP directement sur Internet est une des premières causes de compromission par ransomware.",
      "difficulte": 2,
      "pourquoi": [
        "Correct : le portail TLS clientless fonctionne dans un navigateur et ne publie que l'application autorisée — moindre privilège sans installation.",
        "Trop large : un compte full tunnel ouvre tout le réseau, à l'opposé du besoin exprimé.",
        "Trop large : un client IPsec complet donne un accès réseau démesuré à des machines non maîtrisées.",
        "Dangereux : RDP exposé sur Internet est une cause majeure de compromission par ransomware."
      ]
    },
    {
      "q": "Pourquoi L2TP est-il presque toujours déployé conjointement avec IPsec ?",
      "choix": [
        "IPsec accélère les performances de L2TP",
        "L2TP ne fonctionne qu'en IPv6 et IPsec assure la conversion",
        "L2TP ne fournit aucun chiffrement par lui-même : IPsec apporte la confidentialité et l'intégrité du tunnel",
        "IPsec fournit l'attribution d'adresses que L2TP ne sait pas faire"
      ],
      "reponse": 2,
      "explication": "L2TP (Layer 2 Tunneling Protocol) sait encapsuler et tunneler, mais ne chiffre rien : utilisé seul, tout le trafic circule en clair. Le couple L2TP/IPsec confie à IPsec (ESP) la confidentialité, l'intégrité et l'authentification du tunnel. IPsec ajoute au contraire une surcharge de traitement, L2TP fonctionne en IPv4 comme en IPv6, et l'attribution d'adresses relève d'autres mécanismes du tunnel.",
      "difficulte": 2,
      "pourquoi": [
        "Inversion : IPsec ajoute une surcharge de traitement, il n'accélère rien.",
        "Faux : L2TP fonctionne en IPv4 comme en IPv6.",
        "Correct : L2TP tunnelise mais ne chiffre rien ; IPsec apporte confidentialité, intégrité et authentification au tunnel.",
        "Confusion de rôle : l'attribution d'adresses relève d'autres mécanismes du tunnel, pas d'IPsec."
      ]
    },
    {
      "q": "Un test d'intrusion démontre que les appels VoIP internes peuvent être capturés et réécoutés depuis n'importe quelle prise réseau. Quelle combinaison de mesures corrige le MIEUX cette exposition ?",
      "choix": [
        "Augmenter la bande passante et prioriser la voix",
        "Publier une charte interdisant l'écoute des appels",
        "Remplacer les téléphones IP par des softphones",
        "Chiffrer les flux avec SRTP et la signalisation avec SIPS, et isoler la téléphonie dans un VLAN voix dédié"
      ],
      "reponse": 3,
      "explication": "RTP non chiffré se réécoute avec des outils triviaux dès que le trafic est accessible. La réponse est technique et en profondeur : SRTP chiffre et authentifie les flux média, SIPS protège la signalisation, et le VLAN voix dédié réduit la surface d'écoute depuis le réseau data. La QoS améliore la qualité, pas la confidentialité ; les softphones ne changent rien au protocole ; une charte ne bloque aucune capture.",
      "difficulte": 2,
      "pourquoi": [
        "Hors sujet : la QoS améliore la qualité des appels, pas leur confidentialité.",
        "Contrôle administratif seul : une charte n'empêche techniquement aucune capture.",
        "Sans effet : des softphones utilisent les mêmes protocoles, rien ne change.",
        "Correct : SRTP chiffre les média, SIPS protège la signalisation et le VLAN voix réduit la surface d'écoute — une défense en profondeur qui traite la cause."
      ]
    },
    {
      "q": "Outre la qualité de service, quel bénéfice de SÉCURITÉ apporte le placement des téléphones IP dans un VLAN voix séparé ?",
      "choix": [
        "Il rend les téléphones invisibles sur le réseau",
        "Il sépare la téléphonie du réseau data, compliquant l'écoute des flux voix et le rebond depuis un poste compromis vers l'infrastructure téléphonique",
        "Il chiffre automatiquement les communications",
        "Il supprime le besoin d'authentifier les téléphones"
      ],
      "reponse": 1,
      "explication": "La ségrégation en VLAN voix crée une frontière logique : un poste de travail compromis n'a plus d'accès direct aux flux et aux serveurs de téléphonie, et le trafic voix n'est plus exposé sur le segment data. C'est de la segmentation, pas du chiffrement : SRTP reste nécessaire pour la confidentialité, les téléphones restent adressables dans leur VLAN, et leur authentification (802.1X) reste pertinente.",
      "difficulte": 2,
      "pourquoi": [
        "Faux : les téléphones restent adressables dans leur VLAN.",
        "Correct : la séparation voix/data complique l'écoute des flux et le rebond d'un poste compromis vers l'infrastructure téléphonique — un bénéfice de segmentation.",
        "Sur-promesse : la segmentation ne chiffre rien ; SRTP reste nécessaire.",
        "Contresens : l'authentification des téléphones (802.1X) reste pertinente."
      ]
    },
    {
      "q": "Une organisation déploie un SAN iSCSI transportant des données sensibles. Quelle combinaison de mesures constitue la MEILLEURE ligne de défense ?",
      "choix": [
        "Faire transiter l'iSCSI sur le VLAN utilisateurs pour simplifier l'administration",
        "Limiter l'accès par un filtrage d'adresses MAC",
        "Isoler le trafic de stockage sur un réseau ou VLAN dédié, activer l'authentification CHAP mutuelle et chiffrer par IPsec si le réseau n'est pas de confiance",
        "Se reposer sur le chiffrement natif du protocole iSCSI"
      ],
      "reponse": 2,
      "explication": "iSCSI n'embarque nativement ni chiffrement ni authentification forte : la défense repose sur l'isolement du réseau de stockage (VLAN ou infrastructure dédiée), l'authentification CHAP mutuelle entre initiateurs et cibles, et IPsec lorsque le trafic traverse des segments non maîtrisés. Mélanger le stockage au trafic utilisateurs l'expose au sniffing et aux accès indus, et le filtrage MAC se contourne par usurpation.",
      "difficulte": 2,
      "pourquoi": [
        "Aggravant : mélanger le stockage au trafic utilisateurs l'expose au sniffing et aux accès indus.",
        "Contournable : le filtrage MAC s'usurpe et ne protège ni la confidentialité ni l'authentification.",
        "Correct : isolement du réseau de stockage, CHAP mutuel entre initiateurs et cibles, et IPsec sur les segments non maîtrisés — la combinaison couvrant les lacunes natives d'iSCSI.",
        "Faux postulat : iSCSI n'a pas de chiffrement natif sur lequel se reposer."
      ]
    },
    {
      "q": "Quelle est la différence essentielle entre un SAN et un NAS ?",
      "choix": [
        "Le SAN fonctionne uniquement en Wi-Fi",
        "Le SAN est toujours moins cher que le NAS",
        "Le NAS est réservé aux sauvegardes",
        "Le SAN offre un accès en mode bloc (les serveurs voient des disques), le NAS un accès en mode fichier via des protocoles comme NFS ou SMB"
      ],
      "reponse": 3,
      "explication": "Le SAN (via Fibre Channel, FCoE ou iSCSI) présente aux serveurs des volumes en mode bloc, qu'ils formatent comme des disques locaux : c'est le choix des bases de données et de la virtualisation. Le NAS expose des systèmes de fichiers partagés via NFS ou SMB. Le SAN est généralement plus coûteux, le NAS sert bien au-delà des sauvegardes, et aucun des deux n'a de rapport avec le Wi-Fi.",
      "difficulte": 1,
      "pourquoi": [
        "Absurde : aucun des deux n'a de rapport avec le Wi-Fi.",
        "Faux : le SAN est généralement plus coûteux que le NAS.",
        "Trop étroit : le NAS sert bien au-delà des sauvegardes.",
        "Correct : le SAN présente des volumes en mode bloc que les serveurs formatent comme des disques ; le NAS expose des fichiers via NFS ou SMB — la distinction structurante."
      ]
    },
    {
      "q": "Un site marchand subit régulièrement des attaques DDoS volumétriques qui saturent sa connexion Internet. Quelle approche architecturale absorbe le MIEUX ce type d'attaque ?",
      "choix": [
        "Passer par un CDN avec adressage anycast, qui répartit et absorbe le trafic d'attaque sur des points de présence mondiaux",
        "Bloquer les adresses IP attaquantes une par une au pare-feu",
        "Doubler la bande passante du lien Internet",
        "Ajouter un IDS derrière le routeur de bordure"
      ],
      "reponse": 0,
      "explication": "Contre une attaque volumétrique, tout équipement situé derrière le lien saturé arrive trop tard : il faut absorber en amont. Un CDN en anycast disperse le trafic vers des dizaines de points de présence dont la capacité cumulée dépasse largement l'attaque, tout en servant le contenu légitime depuis le cache. Doubler la bande passante ne fait que relever marginalement le seuil, l'IDS ne bloque rien, et le blocage manuel d'adresses ne suit pas le rythme d'un botnet.",
      "difficulte": 2,
      "pourquoi": [
        "Correct : le CDN anycast disperse et absorbe l'attaque sur des points de présence mondiaux dont la capacité cumulée dépasse l'attaque, tout en servant le cache.",
        "Ingérable : bloquer les adresses une à une ne suit pas le rythme d'un botnet.",
        "Palliatif : doubler la bande passante ne fait que relever marginalement le seuil de saturation.",
        "Hors position : un IDS derrière le lien saturé détecte mais ne peut rien bloquer en amont."
      ]
    },
    {
      "q": "Une enseigne déploie des noeuds de edge computing dans ses centaines de magasins pour traiter les données localement. Quelle préoccupation de sécurité SPÉCIFIQUE cette architecture introduit-elle par rapport à un datacenter centralisé ?",
      "choix": [
        "La bande passante consommée entre les magasins et le siège augmente fortement",
        "Des équipements traitant des données sensibles se retrouvent hors du périmètre physique maîtrisé : sécurité physique, durcissement et gestion à distance de centaines de sites deviennent critiques",
        "La conformité réglementaire devient impossible dès que les données quittent le datacenter certifié",
        "La panne d'un seul noeud edge interrompt l'activité de l'ensemble des magasins"
      ],
      "reponse": 1,
      "explication": "L'edge computing rapproche traitement et données des utilisateurs, mais disperse l'infrastructure dans des lieux sans les protections d'un datacenter : accès physique facilité, vol possible d'équipements, patching et supervision à grande échelle. Les réponses passent par le chiffrement au repos, le démarrage sécurisé, la gestion centralisée et la segmentation de chaque site. Le traitement local réduit au contraire la bande passante vers le siège, la conformité reste atteignable avec des contrôles adaptés, et l'architecture distribuée limite justement l'impact de la panne d'un noeud à son seul site.",
      "difficulte": 3,
      "pourquoi": [
        "Inversion : le traitement local réduit au contraire la bande passante consommée vers le siège.",
        "Correct : des équipements sensibles se retrouvent hors du périmètre physique maîtrisé — sécurité physique, durcissement et gestion à distance de centaines de sites deviennent la préoccupation spécifique.",
        "Absolu : la conformité reste atteignable avec des contrôles adaptés à la périphérie.",
        "Absolu : l'architecture distribuée limite justement la panne d'un noeud à son seul site."
      ]
    },
    {
      "q": "À la suite d'un ransomware ayant paralysé un concurrent par mouvement latéral, le comité exécutif demande au RSSI de « passer en Zero Trust ». Le budget de l'année ne couvre qu'une fraction d'une refonte complète, et la BIA a identifié trois applications critiques. Que devrait faire le RSSI EN PREMIER ?",
      "choix": [
        "Microsegmenter d'abord les zones hébergeant les trois applications critiques identifiées par la BIA, et inscrire le reste dans une feuille de route Zero Trust pluriannuelle",
        "Imposer la MFA sur l'accès VPN de tous les utilisateurs distants",
        "Lancer immédiatement la refonte Zero Trust complète : IAM moderne, ZTNA, microsegmentation généralisée et remplacement du VPN",
        "Remplacer le pare-feu de périmètre par un NGFW de dernière génération pour durcir la frontière du réseau"
      ],
      "reponse": 0,
      "explication": "Le mindset managérial impose de traiter le risque identifié (mouvement latéral) là où l'impact métier est maximal, dans la limite du budget : microsegmenter les zones critiques réduit immédiatement le risque démontré par l'incident du concurrent, tout en s'inscrivant dans la trajectoire Zero Trust demandée par le COMEX. La refonte complète est la bonne cible mais pas la bonne première étape avec ce budget ; le NGFW renforce un périmètre que le ransomware contourne justement par l'intérieur ; la MFA sur le VPN est utile mais ne traite pas le mouvement latéral interne.",
      "difficulte": 3,
      "pourquoi": [
        "Correct : prioriser les actifs critiques identifiés par la BIA traite le risque démontré (mouvement latéral) sous contrainte budgétaire, tout en amorçant la trajectoire Zero Trust.",
        "Techniquement vraie mais trop étroite : la MFA protège l'entrée par le VPN sans rien limiter une fois l'attaquant à l'intérieur.",
        "Vraie mais hors phase : c'est la cible pluriannuelle, pas la première étape finançable avec une fraction du budget.",
        "Réponse de technicien périmétrique : le ransomware progresse à l'intérieur, un meilleur pare-feu de bordure ne confine pas le mouvement latéral."
      ]
    },
    {
      "q": "Un architecte réseau remplace le MPLS de 40 agences par un SD-WAN avec sorties Internet locales vers les applications SaaS, pour réduire les coûts. Quelle exigence de sécurité est la PLUS importante à intégrer dès la conception ?",
      "choix": [
        "Conserver le backhaul de tout le trafic SaaS vers le siège pour l'inspecter avec les équipements existants",
        "Appliquer à chaque sortie Internet locale une politique de sécurité homogène et administrée centralement, par exemple via un modèle SASE",
        "Chiffrer en IPsec les tunnels entre les agences et les datacenters",
        "Doubler les liens Internet de chaque agence pour garantir la disponibilité des accès SaaS"
      ],
      "reponse": 1,
      "explication": "Le vrai changement de surface d'attaque du SD-WAN est la multiplication des sorties Internet directes : chaque agence devient un point d'exposition qui doit recevoir la même politique de sécurité que le siège, administrée centralement — ce que le modèle SASE (SD-WAN + services de sécurité cloud) industrialise. Le chiffrement des tunnels est nécessaire mais ne couvre pas le trafic qui sort localement vers le SaaS ; réintroduire le backhaul annule le business case qui motive le projet ; doubler les liens traite la disponibilité, pas le risque introduit.",
      "difficulte": 3,
      "pourquoi": [
        "Vraie mais contextuellement fausse : réintroduire le backhaul sécurise au prix d'annuler la réduction de coûts qui justifie le projet.",
        "Correct : la multiplication des sorties locales exige une politique homogène et centralisée à chaque point d'exposition — l'enjeu de conception central, que SASE adresse.",
        "Techniquement vraie mais trop étroite : les tunnels chiffrés ne couvrent pas le trafic sortant localement vers le SaaS, qui est le nouveau risque.",
        "Hors sujet sécurité : la redondance des liens traite la disponibilité, pas la nouvelle surface d'attaque."
      ]
    },
    {
      "q": "Le SOC d'une banque demande l'inspection TLS de tout le trafic sortant pour détecter l'exfiltration de données. Le DPO objecte que les salariés accèdent aussi à leur banque en ligne, à des sites de santé et à des services syndicaux. Quelle est la MEILLEURE décision du RSSI ?",
      "choix": [
        "Déployer l'inspection TLS sur la totalité du trafic : la détection de l'exfiltration prime sur toute autre considération",
        "Limiter l'inspection TLS aux seuls dirigeants et détenteurs d'accès privilégiés, population la plus à risque",
        "Renoncer à l'inspection TLS et s'appuyer uniquement sur l'EDR des postes pour détecter l'exfiltration",
        "Déployer une inspection TLS sélective excluant les catégories sensibles (santé, banque, vie privée), encadrée par une politique validée avec le DPO et notifiée aux salariés"
      ],
      "reponse": 3,
      "explication": "Le RSSI doit arbitrer entre deux exigences légitimes : la visibilité du SOC et les obligations de protection de la vie privée. L'inspection sélective par catégories, gouvernée avec le DPO et transparente pour les salariés, préserve la détection sur l'essentiel du trafic tout en respectant la proportionnalité juridique — c'est l'équilibre attendu d'un manager. Tout inspecter est un absolu juridiquement indéfendable ; tout abandonner sacrifie la visibilité réseau alors qu'un compromis existe ; cibler des personnes plutôt que des catégories de trafic est discriminatoire et laisse le reste du personnel sans détection.",
      "difficulte": 3,
      "pourquoi": [
        "Absolu : ignorer les obligations de vie privée expose la banque à un risque juridique et social supérieur au bénéfice de détection marginal.",
        "Trop étroit et discriminatoire : cibler des personnes plutôt que des catégories de trafic crée un problème juridique et laisse la majorité du trafic sans détection.",
        "Vraie mais contextuellement fausse : l'EDR est complémentaire, y renoncer à toute visibilité réseau abandonne un pan entier de détection alors qu'un compromis existe.",
        "Correct : l'inspection sélective gouvernée avec le DPO concilie visibilité du SOC et proportionnalité légale — l'arbitrage managérial attendu."
      ]
    },
    {
      "q": "Lors d'un projet de convergence IT/OT, un audit révèle que des automates (PLC) sont joignables depuis le réseau bureautique. La direction de production refuse tout arrêt des lignes, et les PLC ne peuvent pas être patchés avant l'arrêt annuel dans neuf mois. Que devrait recommander le RSSI EN PREMIER ?",
      "choix": [
        "Exiger de la direction générale un arrêt exceptionnel des lignes pour traiter la vulnérabilité",
        "Déployer une sonde de détection passive spécialisée OT pour obtenir la visibilité sur les échanges industriels",
        "Segmenter les réseaux IT et OT en zones et conduits avec des contrôles compensatoires aux points de passage, conformément au modèle Purdue et à l'IEC 62443",
        "Planifier une campagne de patching d'urgence des PLC en dehors des heures de production"
      ],
      "reponse": 2,
      "explication": "Quand le patching est impossible sous contrainte métier, la réponse architecturale est le contrôle compensatoire : segmenter IT et OT en zones et conduits supprime immédiatement le chemin d'attaque depuis la bureautique, sans toucher aux lignes de production. La campagne de patching ignore la contrainte opérationnelle réelle des PLC (fenêtres de maintenance rares, requalification) ; la sonde passive donne de la visibilité mais ne bloque rien — elle vient en complément, après la segmentation ; exiger l'arrêt des lignes fait prévaloir la sécurité sur le métier sans avoir d'abord épuisé les mesures compensatoires.",
      "difficulte": 3,
      "pourquoi": [
        "Absolu : imposer l'arrêt des lignes sacrifie le métier alors qu'une mesure compensatoire efficace existe.",
        "Vraie mais hors phase : la visibilité passive est un excellent second pas, mais détecter sans avoir coupé le chemin d'attaque ne réduit pas l'exposition.",
        "Correct : la segmentation en zones et conduits coupe le chemin d'attaque immédiatement, sans arrêt de production — le contrôle compensatoire architectural de référence (Purdue, IEC 62443).",
        "Hors contrainte : les PLC exigent des fenêtres de maintenance et une requalification — le scénario précise que le patch est impossible avant neuf mois."
      ]
    },
    {
      "q": "En pleine période de déclaration fiscale, le portail de télé-déclaration d'une administration subit un DDoS volumétrique qui sature son lien Internet ; les pare-feux tiennent la charge. Le plan de continuité interdit plus d'une heure d'indisponibilité. Que faire EN PREMIER ?",
      "choix": [
        "Configurer les pare-feux pour bloquer les adresses IP sources identifiées dans les journaux",
        "Commander en urgence une augmentation de la bande passante du lien Internet",
        "Basculer le portail vers le site de secours prévu au plan de reprise",
        "Activer le service de mitigation anti-DDoS de l'opérateur ou du fournisseur cloud prévu au contrat, pour filtrer le trafic en amont du lien"
      ],
      "reponse": 3,
      "explication": "Une attaque volumétrique se gagne en amont du lien saturé : seul le service de mitigation de l'opérateur ou un scrubbing center cloud peut filtrer le trafic avant qu'il n'atteigne le goulot d'étranglement, dans le délai imposé par le PCA. Bloquer les IP au pare-feu est inutile : les paquets ont déjà traversé et saturé le lien, et un botnet change d'adresses plus vite que les règles ; basculer vers le site de secours ne fait que déplacer la cible, que l'attaque suivra via le DNS ; augmenter la bande passante prend des jours et ne fait que relever marginalement le seuil.",
      "difficulte": 3,
      "pourquoi": [
        "Réponse de technicien hors position : les paquets ont déjà saturé le lien avant d'atteindre le pare-feu, et le botnet renouvelle ses adresses plus vite que les règles.",
        "Hors délai : un upgrade de lien prend des jours et ne fait que relever marginalement le seuil de saturation.",
        "Vraie mais contextuellement fausse : la bascule déplace la cible sans neutraliser l'attaque, qui suivra la nouvelle adresse publiée en DNS.",
        "Correct : filtrer en amont du lien saturé est la seule action qui restaure le service dans le délai du PCA — le réflexe contractuel et architectural attendu."
      ]
    },
    {
      "q": "La direction de production exige que le prestataire de maintenance des automates puisse intervenir à distance 24 h/24. Le RSSI doit concilier cette exigence métier avec la protection du réseau OT. Quelle architecture d'accès distant est la PLUS appropriée ?",
      "choix": [
        "Un outil de prise en main à distance grand public installé sur le poste d'ingénierie, activé à la demande par l'exploitant",
        "Un VPN site à site permanent entre le réseau du prestataire et le réseau OT de l'usine",
        "Un accès via un bastion (jump host) placé dans une DMZ industrielle, avec MFA, enregistrement des sessions et fenêtres d'accès limitées dans le temps",
        "Le refus de tout accès distant au réseau OT, les interventions devant se faire sur site"
      ],
      "reponse": 2,
      "explication": "Le bastion en DMZ industrielle est le point de passage unique contrôlé : authentification forte du prestataire, traçabilité complète par enregistrement de session, accès ouverts uniquement pendant les fenêtres d'intervention et limités aux équipements concernés — l'exigence métier est satisfaite sans exposer le réseau OT. Le VPN site à site crée une confiance permanente envers un réseau tiers non maîtrisé ; un outil de prise en main grand public échappe à la gouvernance (pas de MFA d'entreprise, pas de journalisation centrale, flux sortants incontrôlés) ; interdire tout accès distant viole l'exigence métier posée et pousse les équipes vers des contournements non maîtrisés.",
      "difficulte": 3,
      "pourquoi": [
        "Réponse de technicien pragmatique mais non gouvernée : pas de MFA d'entreprise, pas de journalisation centrale, flux sortants incontrôlés.",
        "Trop large : un tunnel permanent accorde une confiance durable à un réseau tiers non maîtrisé et expose tout le réseau OT en cas de compromission du prestataire.",
        "Correct : le bastion en DMZ industrielle concentre authentification forte, traçabilité et moindre privilège temporel — l'exigence métier est servie sans confiance permanente.",
        "Absolu : refuser l'exigence métier pousse aux contournements et n'est pas un arbitrage acceptable pour un RSSI."
      ]
    },
    {
      "q": "L'API de paiement d'un commerçant subit un DDoS applicatif (couche 7) qui épuise le CPU du WAF. Un géoblocage total des régions d'origine de l'attaque couperait aussi 15 % des clients légitimes en pleine campagne commerciale. Quelle réponse le RSSI devrait-il privilégier ?",
      "choix": [
        "Appliquer immédiatement le géoblocage total : la survie de la plateforme justifie la perte temporaire de clients",
        "Mettre en place un rate limiting progressif et des défis de validation (challenge) ciblant les signatures de trafic anormales, en préservant les parcours clients légitimes",
        "Mettre l'API hors ligne le temps que l'attaque cesse afin de protéger l'infrastructure",
        "Augmenter en urgence les ressources CPU du WAF pour absorber la charge"
      ],
      "reponse": 1,
      "explication": "Le DDoS applicatif se distingue par un trafic qui imite les requêtes légitimes : la réponse proportionnée est de discriminer par le comportement — rate limiting progressif, défis de validation sur les patterns anormaux — pour dégrader l'attaque sans sacrifier les clients légitimes, ce qui est l'objectif business en pleine campagne. Le géoblocage total est un remède disproportionné qui réalise lui-même le déni de service sur 15 % du chiffre d'affaires ; couper l'API réalise l'objectif de l'attaquant ; ajouter du CPU sans discrimination ne fait que retarder l'épuisement en subventionnant l'attaque.",
      "difficulte": 3,
      "pourquoi": [
        "Absolu : sacrifier 15 % des clients légitimes réalise soi-même une partie du déni de service que l'on prétend éviter.",
        "Correct : discriminer par le comportement (rate limiting, challenges) dégrade l'attaque tout en préservant le chiffre d'affaires — l'arbitrage proportionné attendu.",
        "Capitulation : mettre l'API hors ligne accomplit l'objectif de l'attaquant et viole la continuité métier.",
        "Réponse de technicien court-termiste : ajouter du CPU sans discriminer le trafic subventionne l'attaque et ne fait que différer l'épuisement."
      ]
    },
    {
      "q": "Une entreprise a obtenu un budget triennal pour une transformation Zero Trust de son réseau. Par quelle étape le programme devrait-il COMMENCER ?",
      "choix": [
        "Inventorier les actifs, cartographier les flux applicatifs et les identités afin de définir les surfaces à protéger",
        "Microsegmenter l'ensemble du datacenter avec des pare-feux distribués",
        "Remplacer le VPN par une solution ZTNA/SDP pour tous les collaborateurs dès la première année",
        "Généraliser le mTLS entre tous les services internes"
      ],
      "reponse": 0,
      "explication": "Toute démarche Zero Trust commence par la connaissance : on ne peut définir des politiques d'accès au moindre privilège que si l'on sait quels actifs existent, quels flux sont légitimes et quelles identités y accèdent. Sans cette cartographie, la microsegmentation produit des règles fausses qui cassent la production, le ZTNA reproduit les accès trop larges existants, et le mTLS chiffre des flux dont on ignore la légitimité. Les trois autres actions sont des composantes valides du programme, mais placées en première étape elles échouent faute de fondation.",
      "difficulte": 3,
      "pourquoi": [
        "Correct : inventaire, cartographie des flux et des identités sont la fondation — on ne protège au moindre privilège que ce que l'on connaît.",
        "Vraie mais hors phase : microsegmenter sans connaître les flux légitimes produit des règles fausses qui cassent la production.",
        "Vraie mais hors phase : déployer le ZTNA sans cartographie des accès reproduit les autorisations trop larges de l'ancien VPN.",
        "Réponse de technicien : le mTLS authentifie et chiffre des flux dont la légitimité n'a pas encore été établie."
      ]
    },
    {
      "q": "Faute de budget pour des boîtiers d'inspection TLS, le RSSI d'une PME doit néanmoins conserver une capacité de détection de l'exfiltration de données dans le trafic chiffré sortant. Quelle approche est la PLUS pertinente ?",
      "choix": [
        "Bloquer tout trafic chiffré sortant dont la destination n'est pas une application métier approuvée",
        "Configurer les serveurs mandataires pour forcer une rétrogradation vers TLS 1.2 sans forward secrecy afin de permettre un déchiffrement passif",
        "Analyser les métadonnées du trafic chiffré (destinations, volumes, empreintes de sessions, requêtes DNS) et corréler avec la télémétrie EDR des postes",
        "Reporter la détection d'exfiltration à l'exercice budgétaire suivant, le risque étant accepté par défaut"
      ],
      "reponse": 2,
      "explication": "L'analyse des métadonnées — destinations inhabituelles, volumes anormaux, empreintes de sessions TLS, requêtes DNS suspectes — combinée à la télémétrie EDR qui voit les données avant chiffrement, offre une détection réelle sans déchiffrer ni dépasser le budget : c'est le contrôle compensatoire proportionné. Forcer une rétrogradation cryptographique affaiblit délibérément la sécurité de toute l'entreprise pour un bénéfice de surveillance ; bloquer tout trafic non approuvé est un absolu ingérable en pratique (mises à jour, SaaS légitimes, faux positifs massifs) ; accepter le risque par défaut n'est pas une décision de gestion des risques mais une abdication sans analyse ni validation.",
      "difficulte": 3,
      "pourquoi": [
        "Absolu ingérable : bloquer tout trafic non approuvé génère des faux positifs massifs et casse les usages légitimes.",
        "Dangereux : affaiblir délibérément la cryptographie de toute l'entreprise crée un risque supérieur à celui que l'on cherche à détecter.",
        "Correct : métadonnées réseau plus télémétrie EDR donnent une détection réelle sans déchiffrement ni dépassement budgétaire — le contrôle compensatoire proportionné.",
        "Abdication : accepter un risque « par défaut », sans analyse ni validation par la direction, n'est pas une décision de gestion des risques."
      ]
    },
    {
      "q": "Dans le cadre d'une migration SD-WAN, la direction financière impose la résiliation complète du MPLS. L'architecte doit décider du transport des flux SCADA critiques entre les sites industriels. Quelle conception répond le MIEUX à la fois à la contrainte budgétaire et au besoin de sécurité ?",
      "choix": [
        "Conserver un lien MPLS résiduel dédié aux seuls flux SCADA, malgré la directive de résiliation",
        "Transporter les flux SCADA dans les tunnels IPsec du SD-WAN, isolés dans un segment ou une topologie dédiée avec QoS prioritaire et supervision spécifique",
        "Migrer la supervision SCADA vers une plateforme cloud publique pour éliminer les flux inter-sites",
        "Faire transiter les flux SCADA sur les liens Internet avec une priorité QoS élevée, le chiffrement étant facultatif pour réduire la latence"
      ],
      "reponse": 1,
      "explication": "Le SD-WAN sait répondre aux deux contraintes : les flux SCADA transitent dans les tunnels IPsec comme le reste, mais isolés dans un segment ou une topologie dédiée (VRF/segmentation du SD-WAN) avec une classe de service prioritaire et une supervision propre — sécurité et déterminisme sans conserver le MPLS. Garder un MPLS résiduel viole frontalement la directive budgétaire alors qu'une alternative sûre existe ; transporter des flux industriels critiques en clair sur Internet est inacceptable quel que soit le gain de latence ; migrer le SCADA vers un cloud public est une transformation majeure hors périmètre de la décision, avec ses propres risques et délais.",
      "difficulte": 3,
      "pourquoi": [
        "Vraie mais contextuellement fausse : conserver le MPLS est défendable techniquement mais viole la contrainte budgétaire alors qu'une alternative sûre existe.",
        "Correct : tunnels IPsec avec segment dédié, QoS et supervision propre satisfont sécurité et budget — le SD-WAN offre nativement cette isolation.",
        "Hors phase et hors périmètre : une migration cloud du SCADA est un projet majeur distinct, pas une réponse à la décision de transport posée.",
        "Inacceptable : des flux industriels critiques en clair sur Internet, aucun gain de latence ne le justifie."
      ]
    },
    {
      "q": "Après une fusion, vous devez interconnecter deux réseaux d'entreprise qui utilisent tous deux 10.0.0.0/8 avec des plans d'adressage qui se chevauchent largement. La direction veut des échanges applicatifs opérationnels en six semaines. Quelle approche recommandez-vous EN PREMIER ?",
      "choix": [
        "Interconnexion contrôlée via NAT double sens sur des passerelles dédiées, limitée aux flux applicatifs identifiés, le temps de planifier la convergence d'adressage",
        "Établir un VPN site à site standard entre les deux cœurs de réseau",
        "Fusionner les domaines d'administration réseau des deux entités pour simplifier la gestion",
        "Renuméroter immédiatement le réseau de la société acquise pour éliminer le chevauchement"
      ],
      "reponse": 0,
      "explication": "Le chevauchement d'adressage rend le routage direct impossible : le NAT double sens sur des points de passage contrôlés répond au besoin métier dans le délai, en limitant l'exposition aux seuls flux nécessaires — et laisse le temps de traiter la renumérotation comme un projet.",
      "pourquoi": [
        "Correct : solution de transition maîtrisée qui respecte le délai, minimise la surface d'interconnexion et n'hypothèque pas la cible.",
        "Inopérant : un VPN n'élimine pas le conflit d'adressage — les routes se chevauchent toujours.",
        "Dangereux et prématuré : fusionner l'administration avant d'avoir évalué la posture de sécurité de l'entité acquise étend la surface de compromission.",
        "Techniquement juste mais irréaliste dans le délai : renuméroter un /8 exploité est un projet de plusieurs mois à fort risque d'interruption."
      ],
      "difficulte": 3
    },
    {
      "q": "Votre SOC signale que l'inspection TLS du proxy sortant est aveugle sur un service SaaS critique depuis que celui-ci impose le certificate pinning. L'équipe réseau propose de placer le domaine en liste d'exemption globale. Quelle est la MEILLEURE réponse ?",
      "choix": [
        "Refuser l'exemption et bloquer le service jusqu'à ce que l'éditeur retire le pinning",
        "Désactiver l'inspection TLS globalement puisqu'elle devient inefficace",
        "Installer l'autorité de certification interne sur les serveurs de l'éditeur SaaS",
        "Accepter l'exemption mais la compenser : restreindre l'exemption au strict domaine concerné, renforcer les contrôles alternatifs (télémétrie endpoint, CASB via API, journaux du SaaS) et documenter le risque résiduel accepté"
      ],
      "reponse": 3,
      "explication": "Le pinning empêche l'interception licite comme illicite : la réponse mature est une exemption minimale assortie de contrôles compensatoires (visibilité par l'endpoint et l'API du SaaS) et d'une acceptation de risque documentée.",
      "pourquoi": [
        "Absolu contre-productif : bloquer un service critique pour un point de visibilité inverse la hiérarchie risque/besoin métier.",
        "Généralisation abusive : renoncer à toute inspection parce qu'un domaine y échappe détruit un contrôle qui reste efficace ailleurs.",
        "Techniquement absurde : on n'installe pas sa CA chez un tiers — c'est méconnaître le fonctionnement du pinning.",
        "Correct : exemption minimale + contrôles compensatoires + risque documenté — l'arbitrage proportionné d'un manager."
      ],
      "difficulte": 3
    },
    {
      "q": "Un site industriel connecte ses automates (OT) au réseau IT pour remonter des données de production vers un outil d'analyse cloud. L'intégrateur propose une règle de pare-feu autorisant le serveur d'historisation, situé dans la zone OT, à pousser directement vers Internet. Quelle exigence d'architecture imposez-vous ?",
      "choix": [
        "Le chiffrement TLS du flux direct entre l'historian OT et le cloud",
        "La limitation du débit du flux sortant pour éviter l'exfiltration massive",
        "Une authentification forte de l'outil cloud avant chaque collecte",
        "Le passage par une zone démilitarisée industrielle (iDMZ) : l'historian OT pousse vers un réplica en iDMZ, seul ce réplica dialogue avec le cloud — aucun flux direct OT→Internet"
      ],
      "reponse": 3,
      "explication": "Le modèle Purdue/IEC 62443 impose la rupture de flux en iDMZ : la zone OT ne dialogue jamais directement avec Internet. Le réplica en iDMZ absorbe l'exposition ; TLS et authentification s'ajoutent mais ne remplacent pas la ségrégation.",
      "pourquoi": [
        "Techniquement vrai mais insuffisant : TLS protège le transport, pas la topologie — un canal chiffré direct reste un chemin d'attaque vers l'OT.",
        "Trop étroit : limiter le débit gêne l'exfiltration mais n'empêche ni l'intrusion ni la latéralisation vers les automates.",
        "Contrôle utile mais secondaire : l'authentification ne compense pas une exposition directe de la zone OT.",
        "Correct : la rupture de zone (iDMZ) est l'exigence structurelle — elle évite qu'une compromission cloud/Internet touche directement la zone de contrôle industriel."
      ],
      "difficulte": 3
    },
    {
      "q": "Une PME dont le site e-commerce subit un DDoS applicatif (L7) sous une adresse IP directement exposée envisage trois offres : un service anti-DDoS BGP de son opérateur, un CDN avec WAF intégré, ou le doublement de la capacité de ses serveurs. Le budget ne permet qu'une option. Laquelle est la PLUS adaptée ?",
      "choix": [
        "Le doublement de la capacité serveur, qui améliore aussi les performances au quotidien",
        "Les trois sont équivalents : choisir la moins chère",
        "Le CDN avec WAF : il masque l'origine, absorbe la charge en périphérie et filtre les requêtes applicatives — le vecteur exact de l'attaque",
        "Le service anti-DDoS BGP de l'opérateur, référence contre les attaques volumétriques"
      ],
      "reponse": 2,
      "explication": "Une attaque L7 se filtre au niveau applicatif : le CDN/WAF traite les requêtes malveillantes en périphérie et cache l'IP d'origine. La protection BGP excelle contre le volumétrique L3/L4 mais laisse passer du L7 « propre » ; ajouter des serveurs ne fait que renchérir la cible.",
      "pourquoi": [
        "Piège du sur-dimensionnement : doubler la capacité ne fait que repousser le seuil — l'attaquant scale plus vite que votre budget serveur.",
        "Faux : les trois options traitent des couches différentes — les mettre à égalité nie l'analyse du vecteur.",
        "Correct : réponse alignée sur le vecteur (applicatif) — filtrage L7 en périphérie + masquage de l'origine.",
        "Techniquement vrai mais décalé : l'anti-DDoS BGP vise le volumétrique réseau, pas les requêtes applicatives légitimes en apparence."
      ],
      "difficulte": 3
    }
  ],
  "quizEn": [
    {
      "q": "Which OSI layer is responsible for reliable end-to-end delivery, including segmentation, sequencing, and flow control?",
      "choix": [
        "Layer 3 — Network",
        "Layer 4 — Transport",
        "Layer 2 — Data Link",
        "Layer 5 — Session"
      ],
      "reponse": 1,
      "explication": "La couche 4 Transport (TCP) assure la livraison de bout en bout : segmentation, numéros de séquence, accusés de réception et contrôle de flux. La couche 2 garantit la liaison locale entre noeuds adjacents, la couche 3 route les paquets sans garantie de livraison, et la couche 5 gère l'établissement et la clôture des dialogues.",
      "difficulte": 1,
      "pourquoi": [
        "Piège de couche : la couche 3 route les paquets sans garantie de livraison.",
        "Correct : segmentation, séquencement et contrôle de flux de bout en bout sont les fonctions de la couche 4 Transport (TCP).",
        "Piège de couche : la couche 2 assure la liaison entre noeuds adjacents, pas la livraison de bout en bout.",
        "Piège de couche : la couche 5 gère les dialogues, pas la fiabilité du transport."
      ]
    },
    {
      "q": "A security analyst observes a massive volume of ICMP echo replies converging on a single internal host from many different sources. Which attack is MOST likely occurring?",
      "choix": [
        "Smurf attack",
        "DNS tunneling",
        "ARP poisoning",
        "SYN flood"
      ],
      "reponse": 0,
      "explication": "Recevoir des réponses ICMP echo de sources multiples sans les avoir sollicitées est la signature du smurf : l'attaquant a envoyé des echo requests en broadcast avec l'adresse source usurpée de la victime, et tous les hôtes répondent vers elle. Le SYN flood produit des connexions TCP à moitié ouvertes, l'ARP poisoning corrompt des tables locales, et le tunneling DNS exfiltre des données dans des requêtes DNS.",
      "difficulte": 2,
      "pourquoi": [
        "Correct : des réponses ICMP echo non sollicitées convergeant de sources multiples signent le smurf — echo requests en broadcast avec la source usurpée de la victime.",
        "Hors objectif : le tunneling DNS exfiltre des données, il n'inonde pas la victime.",
        "Hors mécanisme : l'ARP poisoning corrompt des tables locales sans générer ce trafic.",
        "Confusion de signature : le SYN flood laisse des connexions TCP à moitié ouvertes, pas un déluge d'echo replies."
      ]
    },
    {
      "q": "An organization must establish a site-to-site IPsec VPN where one gateway sits behind a NAT device. Which configuration is MOST likely to function correctly?",
      "choix": [
        "AH in transport mode",
        "ESP in transport mode without IKE",
        "ESP in tunnel mode with NAT-Traversal (UDP encapsulation)",
        "AH in tunnel mode"
      ],
      "reponse": 2,
      "explication": "AH protège l'intégrité de l'en-tête IP, que le NAT modifie : la vérification échoue systématiquement, quel que soit le mode. ESP en mode tunnel ne couvre pas l'en-tête externe réécrit par le NAT, et NAT-T encapsule le trafic IPsec dans UDP 4500 pour franchir la traduction d'adresses. Se passer d'IKE supprimerait la négociation automatique des clés, ce qui n'est pas viable.",
      "difficulte": 3,
      "pourquoi": [
        "Disqualifié : AH couvre l'en-tête IP que le NAT modifie — échec garanti en mode transport.",
        "Non viable : sans IKE, plus de négociation automatique des clés.",
        "Correct : ESP ne couvre pas l'en-tête externe réécrit, et NAT-T encapsule le trafic dans UDP 4500 pour franchir la traduction d'adresses.",
        "Disqualifié : le mode tunnel ne sauve pas AH, dont le contrôle d'intégrité reste cassé par le NAT."
      ]
    },
    {
      "q": "Which technology enables a DNS resolver to cryptographically verify that a DNS response is authentic and unmodified?",
      "choix": [
        "DNSSEC",
        "Reverse DNS lookup",
        "Split-horizon DNS",
        "DNS over HTTPS (DoH)"
      ],
      "reponse": 0,
      "explication": "DNSSEC signe les enregistrements DNS avec une chaîne de confiance partant de la racine : le résolveur vérifie l'authenticité et l'intégrité des réponses, ce qui bloque l'empoisonnement de cache. DoH chiffre le transport des requêtes mais ne signe pas les données, le split-horizon sert des réponses différentes selon l'origine, et le reverse lookup traduit une IP en nom.",
      "difficulte": 2,
      "pourquoi": [
        "Correct : DNSSEC signe les enregistrements avec une chaîne de confiance vérifiable par le résolveur — authenticité et intégrité garanties.",
        "Hors sujet : le reverse lookup traduit une IP en nom, sans aucune garantie d'authenticité.",
        "Hors sujet : le split-horizon sert des réponses différentes selon l'origine, sans vérification cryptographique.",
        "Piège de périmètre : DoH chiffre le transport des requêtes sans signer les données."
      ]
    },
    {
      "q": "During a wireless assessment, a tester captures the WPA2-PSK four-way handshake and successfully recovers the passphrase using an offline dictionary attack. Which control BEST prevents this attack in the future?",
      "choix": [
        "Hiding the SSID",
        "Enabling MAC address filtering",
        "Shortening the DHCP lease time",
        "Migrating to WPA3 with Simultaneous Authentication of Equals (SAE)"
      ],
      "reponse": 3,
      "explication": "Le handshake WPA2-PSK expose un matériel cryptographique attaquable hors ligne par dictionnaire. SAE, dans WPA3, remplace cet échange par le protocole Dragonfly en preuve à divulgation nulle : chaque tentative de mot de passe exige une interaction en ligne, rendant l'attaque hors ligne impossible. Masquer le SSID et filtrer les MAC sont contournables par simple capture radio, et le bail DHCP n'a aucun rapport avec l'authentification.",
      "difficulte": 2,
      "pourquoi": [
        "Cosmétique : masquer le SSID n'empêche ni la capture du handshake ni l'attaque hors ligne.",
        "Cosmétique : le filtrage MAC se contourne par usurpation après simple écoute radio.",
        "Hors sujet : le bail DHCP n'a aucun rapport avec l'authentification Wi-Fi.",
        "Correct : SAE remplace le handshake attaquable de WPA2 par l'échange Dragonfly — chaque essai de mot de passe exige une interaction en ligne, tuant l'attaque par dictionnaire hors ligne."
      ]
    },
    {
      "q": "Which network device makes forwarding decisions PRIMARILY based on MAC addresses?",
      "choix": [
        "Load balancer",
        "Switch",
        "Router",
        "Application-layer firewall"
      ],
      "reponse": 1,
      "explication": "Le commutateur opère en couche 2 : il apprend les adresses MAC dans sa table CAM et commute les trames vers le port du destinataire. Le routeur décide selon les adresses IP en couche 3, le pare-feu applicatif inspecte jusqu'à la couche 7, et le load balancer répartit selon des critères de couches 4 à 7.",
      "difficulte": 1,
      "pourquoi": [
        "Trop haut : le load balancer répartit selon des critères de couches 4 à 7.",
        "Correct : le switch apprend les adresses MAC dans sa table CAM et commute les trames en couche 2.",
        "Piège de couche : le routeur décide selon les adresses IP en couche 3.",
        "Trop haut : le pare-feu applicatif inspecte jusqu'à la couche 7."
      ]
    },
    {
      "q": "A company needs to give external auditors access to a single internal reporting application. The auditors cannot install any software on their workstations. Which remote access solution BEST meets this requirement?",
      "choix": [
        "A full-tunnel IPsec VPN client",
        "A site-to-site VPN to the auditors' office network",
        "Direct RDP access through a firewall rule",
        "A clientless TLS VPN portal publishing only the reporting application"
      ],
      "reponse": 3,
      "explication": "Le portail VPN TLS clientless fonctionne dans un simple navigateur et ne publie que l'application autorisée : moindre privilège, aucune installation, aucune exposition du reste du réseau. Un VPN IPsec exige un client et donne un accès réseau trop large, exposer RDP sur Internet est une cause majeure de compromission, et un VPN site à site ouvrirait tout un réseau tiers non maîtrisé.",
      "difficulte": 2,
      "pourquoi": [
        "Trop large : un client full tunnel exige une installation et ouvre bien plus que l'application visée.",
        "Disproportionné : un VPN site à site ouvrirait tout un réseau tiers non maîtrisé.",
        "Dangereux : exposer RDP à travers le pare-feu est un vecteur classique de compromission.",
        "Correct : le portail TLS clientless fonctionne dans un navigateur et ne publie que l'application autorisée — moindre privilège sans logiciel à installer."
      ]
    },
    {
      "q": "What is the PRIMARY security improvement of TLS 1.3 over TLS 1.2?",
      "choix": [
        "It removes support for weak cryptographic algorithms and mandates forward secrecy for all key exchanges",
        "It replaces certificates with pre-shared passwords",
        "It introduces certificate-based server authentication",
        "It doubles the symmetric key length to 512 bits"
      ],
      "reponse": 0,
      "explication": "TLS 1.3 élague le protocole : suppression des suites faibles (RSA statique, RC4, CBC anciennes, SHA-1), échange de clé exclusivement éphémère garantissant la forward secrecy, négociation raccourcie et chiffrée plus tôt. L'authentification serveur par certificat existe depuis SSL, les clés symétriques restent de 128 ou 256 bits, et les certificats demeurent le mécanisme central.",
      "difficulte": 2,
      "pourquoi": [
        "Correct : TLS 1.3 supprime les algorithmes faibles et rend la forward secrecy obligatoire pour tous les échanges de clés.",
        "Contresens : les certificats demeurent le mécanisme central d'authentification.",
        "Anachronisme : l'authentification serveur par certificat existe depuis SSL.",
        "Invention : les clés symétriques restent de 128 ou 256 bits."
      ]
    },
    {
      "q": "Which EAP method requires digital certificates on BOTH the authentication server and every client device?",
      "choix": [
        "LEAP",
        "EAP-TLS",
        "PEAP",
        "EAP-TTLS"
      ],
      "reponse": 1,
      "explication": "EAP-TLS impose l'authentification mutuelle par certificats : serveur ET client. C'est la méthode la plus robuste, au prix d'une PKI pour gérer les certificats de chaque poste. PEAP et EAP-TTLS n'exigent un certificat que côté serveur et tunnellisent une authentification interne, et LEAP est un protocole propriétaire Cisco cassé, à proscrire.",
      "difficulte": 2,
      "pourquoi": [
        "Disqualifié : LEAP est un protocole propriétaire cassé, sans certificats.",
        "Correct : EAP-TLS impose des certificats côté serveur ET sur chaque client — authentification mutuelle la plus robuste, au prix d'une PKI.",
        "Trop étroit : PEAP n'exige un certificat que côté serveur.",
        "Trop étroit : EAP-TTLS tunnellise une authentification interne avec un seul certificat serveur."
      ]
    },
    {
      "q": "After compromising one virtual machine, an attacker moves laterally to other servers in the same flat network segment. Which control would have BEST limited this movement?",
      "choix": [
        "A honeypot in the DMZ",
        "A stronger perimeter firewall policy",
        "Microsegmentation enforcing per-workload firewall policies",
        "Full-disk encryption on all servers"
      ],
      "reponse": 2,
      "explication": "Le mouvement latéral exploite l'absence de contrôle sur le trafic east-west : le pare-feu de périmètre ne voit pas ces flux internes. La microsegmentation applique une politique par charge de travail, n'autorisant que les flux strictement nécessaires, ce qui confine la compromission. Le chiffrement de disque protège les données au repos, pas les connexions réseau, et un honeypot détecte sans confiner.",
      "difficulte": 2,
      "pourquoi": [
        "Trop passif : un honeypot détecte et leurre, il ne confine pas.",
        "Hors position : le pare-feu de périmètre ne voit pas les flux east-west internes.",
        "Correct : des politiques de filtrage par charge de travail n'autorisent que les flux strictement nécessaires et confinent la compromission — la parade directe au mouvement latéral.",
        "Hors sujet : le chiffrement de disque protège les données au repos, pas les connexions réseau."
      ]
    },
    {
      "q": "Which addressing scheme delivers traffic to the NEAREST node among several nodes sharing the same IP address, and is widely used by CDNs and global DNS?",
      "choix": [
        "Broadcast",
        "Multicast",
        "Anycast",
        "Unicast"
      ],
      "reponse": 2,
      "explication": "L'anycast annonce la même adresse depuis plusieurs points du globe : le routage conduit chaque client vers l'instance la plus proche, ce qui réduit la latence et disperse naturellement les attaques DDoS. L'unicast vise un destinataire unique, le broadcast tout un segment, et le multicast un groupe d'abonnés.",
      "difficulte": 1,
      "pourquoi": [
        "Trop large : le broadcast inonde tout un segment.",
        "Piège de proximité : le multicast livre à un groupe abonné, sans notion de noeud le plus proche.",
        "Correct : l'anycast route chaque client vers l'instance la plus proche partageant l'adresse — le mécanisme des CDN et du DNS mondial.",
        "Trop étroit : l'unicast vise un destinataire unique."
      ]
    },
    {
      "q": "What is the KEY operational difference between a network-based IDS and a network-based IPS?",
      "choix": [
        "An IPS sits inline and can block malicious traffic in real time, while an IDS monitors a copy of traffic and can only alert",
        "An IDS encrypts monitored traffic while an IPS does not",
        "An IPS works only at Layer 2",
        "An IDS uses signatures while an IPS uses only anomaly detection"
      ],
      "reponse": 0,
      "explication": "La différence est le placement : l'IPS, en coupure sur le chemin du trafic, peut rejeter les paquets malveillants immédiatement, avec pour contrepartie le risque de bloquer du trafic légitime et de constituer un point de panne. L'IDS écoute passivement via SPAN ou TAP et alerte seulement. Les deux peuvent combiner signatures et détection d'anomalies, aucun ne chiffre, et l'IPS opère bien au-delà de la couche 2.",
      "difficulte": 1,
      "pourquoi": [
        "Correct : l'IPS en coupure bloque en temps réel, l'IDS sur copie de trafic ne fait qu'alerter — la différence opérationnelle est le placement.",
        "Invention : aucun des deux ne chiffre le trafic surveillé.",
        "Faux : l'IPS opère bien au-delà de la couche 2.",
        "Faux clivage : les deux peuvent combiner signatures et détection d'anomalies."
      ]
    },
    {
      "q": "A NAC solution verifies that each endpoint has current patches and updated antivirus BEFORE granting network access. Which NAC approach does this describe?",
      "choix": [
        "Captive portal authentication",
        "Preadmission posture assessment",
        "Agentless asset discovery",
        "Postadmission behavioral monitoring"
      ],
      "reponse": 1,
      "explication": "Conditionner l'accès à une vérification préalable de conformité (patchs, antivirus, configuration) est la philosophie preadmission avec évaluation de posture ; les postes non conformes sont refusés ou placés en quarantaine de remédiation. La postadmission surveille le comportement après l'accès, la découverte agentless inventorie sans contrôler, et un portail captif authentifie sans évaluer l'état du poste.",
      "difficulte": 2,
      "pourquoi": [
        "Insuffisant : un portail captif authentifie sans évaluer l'état du poste.",
        "Correct : conditionner l'accès à la vérification préalable de conformité (patchs, antivirus) est l'évaluation de posture preadmission.",
        "Hors rôle : la découverte agentless inventorie sans conditionner l'admission.",
        "Hors phase : la surveillance postadmission agit après l'accès, pas avant."
      ]
    },
    {
      "q": "Why has the IPsec Authentication Header (AH) protocol become rarely used on the modern Internet?",
      "choix": [
        "It encrypts traffic too slowly for modern links",
        "It provides no integrity protection",
        "It only supports IPv6 networks",
        "Its integrity check covers the IP header, which NAT devices modify, breaking verification"
      ],
      "reponse": 3,
      "explication": "AH calcule son contrôle d'intégrité sur des champs de l'en-tête IP, adresses comprises : tout NAT sur le chemin réécrit ces champs et invalide la vérification. Or le NAT est omniprésent sur Internet. AH fournit précisément intégrité et authentification (mais pas de chiffrement, donc pas de lenteur de chiffrement), et il fonctionne en IPv4 comme en IPv6. ESP avec NAT-T l'a supplanté.",
      "difficulte": 3,
      "pourquoi": [
        "Faux : AH ne chiffre pas, il ne peut donc pas être lent à chiffrer.",
        "Contresens : AH fournit précisément l'intégrité, c'est sa raison d'être.",
        "Faux : AH fonctionne en IPv4 comme en IPv6.",
        "Correct : le contrôle d'intégrité d'AH couvre l'en-tête IP que tout NAT réécrit, ce qui casse la vérification — or le NAT est omniprésent, d'où l'abandon d'AH au profit d'ESP avec NAT-T."
      ]
    },
    {
      "q": "Which protocol secures VoIP call SIGNALING by wrapping it in TLS?",
      "choix": [
        "RTCP",
        "H.323",
        "SIPS",
        "SRTP"
      ],
      "reponse": 2,
      "explication": "SIPS est SIP protégé par TLS : il chiffre l'établissement, la modification et la clôture des sessions VoIP, empêchant l'écoute et la manipulation de la signalisation. SRTP protège les flux média (audio et vidéo), pas la signalisation ; RTCP transporte des statistiques de qualité ; H.323 est une pile de signalisation concurrente de SIP, sans chiffrement intrinsèque.",
      "difficulte": 2,
      "pourquoi": [
        "Hors rôle : RTCP transporte des statistiques de qualité.",
        "Hors rôle : H.323 est une pile de signalisation concurrente, sans chiffrement intrinsèque.",
        "Correct : SIPS est SIP encapsulé dans TLS — il chiffre l'établissement, la modification et la clôture des sessions VoIP.",
        "Confusion de rôle : SRTP protège les flux média, pas la signalisation."
      ]
    },
    {
      "q": "An attacker transmits forged 802.11 deauthentication frames to wireless clients. What is the attacker's MOST likely objective?",
      "choix": [
        "To force clients to disconnect and lure them into reconnecting to a rogue access point",
        "To disable the RADIUS server",
        "To exhaust the DHCP address pool",
        "To crack the AES encryption key directly"
      ],
      "reponse": 0,
      "explication": "Les trames de désauthentification forgées déconnectent les clients de force : c'est un déni de service, mais surtout un rabatteur classique vers un evil twin qui imite le SSID légitime, ou un moyen de forcer un nouveau handshake WPA2 à capturer. Ces trames ne cassent pas AES, ne touchent pas au DHCP et n'atteignent pas le serveur RADIUS. La parade est le 802.11w (Protected Management Frames).",
      "difficulte": 2,
      "pourquoi": [
        "Correct : déconnecter les clients de force sert le plus souvent à les rabattre vers un evil twin ou à forcer un handshake à capturer — la parade est 802.11w.",
        "Hors portée : le serveur RADIUS n'est pas atteint par des trames de gestion radio.",
        "Hors mécanisme : ces trames ne consomment pas le pool DHCP.",
        "Faux : les trames de désauthentification ne cassent pas le chiffrement AES."
      ]
    },
    {
      "q": "Which IPv4-to-IPv6 transition strategy runs both protocol stacks simultaneously on the same devices?",
      "choix": [
        "Tunneling",
        "Dual stack",
        "Header compression",
        "Protocol translation (NAT64)"
      ],
      "reponse": 1,
      "explication": "En dual stack, chaque équipement traite IPv4 et IPv6 en parallèle et dialogue nativement dans les deux mondes : c'est la stratégie de transition la plus propre, à condition de sécuriser les DEUX piles. Le tunneling encapsule un protocole dans l'autre, NAT64 traduit entre les deux familles d'adresses, et la compression d'en-têtes est une optimisation sans rapport avec la transition.",
      "difficulte": 1,
      "pourquoi": [
        "Confusion de stratégie : le tunneling encapsule un protocole dans l'autre, il ne les exécute pas en parallèle.",
        "Correct : le dual stack fait tourner IPv4 et IPv6 simultanément sur les mêmes équipements — à condition de sécuriser les deux piles.",
        "Hors sujet : la compression d'en-têtes est une optimisation, pas une stratégie de transition.",
        "Confusion de stratégie : NAT64 traduit entre les deux familles d'adresses."
      ]
    },
    {
      "q": "A security engineer discovers Teredo traffic leaving the corporate network. What is the PRIMARY security concern?",
      "choix": [
        "Teredo relays introduce unacceptable latency for business-critical applications",
        "Teredo requires opening inbound TCP port 3544, enlarging the external attack surface",
        "Teredo assigns public IPv6 addresses that conflict with the internal RFC 1918 addressing plan",
        "IPv6 traffic tunneled inside UDP may bypass firewall rules and IDS inspection designed for native IPv4 traffic"
      ],
      "reponse": 3,
      "explication": "Teredo encapsule IPv6 dans UDP sur IPv4, précisément pour traverser NAT et pare-feux : les équipements de sécurité qui n'inspectent pas l'intérieur du tunnel laissent passer un trafic IPv6 invisible, exploitable pour l'exfiltration ou le contournement des règles. En entreprise, les mécanismes de transition automatiques doivent être bloqués au profit d'un déploiement IPv6 maîtrisé. La latence est un enjeu de performance et non de sécurité, les adresses IPv6 de Teredo ne peuvent pas entrer en conflit avec un plan d'adressage IPv4 RFC 1918, et Teredo utilise UDP en sortie, sans ouverture entrante de port TCP.",
      "difficulte": 3,
      "pourquoi": [
        "Hors sujet sécurité : la latence des relais est un enjeu de performance, pas le risque principal.",
        "Erreur factuelle : Teredo utilise UDP en sortie, aucune ouverture entrante de port TCP n'est requise.",
        "Invention plausible : des adresses IPv6 ne peuvent pas entrer en conflit avec un plan d'adressage IPv4 RFC 1918.",
        "Correct : l'IPv6 encapsulé dans UDP traverse NAT et pare-feux sans être inspecté par les équipements configurés pour l'IPv4 natif — un canal de contournement et d'exfiltration."
      ]
    },
    {
      "q": "Which capability BEST distinguishes a next-generation firewall (NGFW) from a traditional stateful firewall?",
      "choix": [
        "Identifying applications regardless of port through deep packet inspection, with integrated IPS and user awareness",
        "Performing network address translation",
        "Filtering based on source and destination IP addresses",
        "Tracking the state of TCP connections"
      ],
      "reponse": 0,
      "explication": "Suivi d'état, filtrage par adresses et NAT existent déjà sur les pare-feux stateful classiques. Le NGFW ajoute l'app-awareness : reconnaître l'application réelle même sur un port détourné, appliquer des politiques par application et par identité d'utilisateur, avec IPS intégré et souvent déchiffrement TLS pour inspection. C'est cette visibilité applicative qui le définit.",
      "difficulte": 2,
      "pourquoi": [
        "Correct : identifier l'application quel que soit le port grâce à l'inspection profonde, avec IPS intégré et connaissance des utilisateurs, est la capacité définissant le NGFW.",
        "Déjà acquis : le NAT est une fonction banale des pare-feux classiques.",
        "Déjà acquis : le filtrage par adresses est la base de tout pare-feu.",
        "Déjà acquis : le suivi d'état existe sur tout pare-feu stateful."
      ]
    },
    {
      "q": "A web application behind a properly configured stateful firewall continues to suffer cross-site scripting (XSS) attacks. Which control BEST addresses this exposure?",
      "choix": [
        "Enabling port security on the access switches",
        "Adding a VPN concentrator in front of the web server",
        "Deploying a web application firewall (WAF)",
        "Tightening the firewall's port-based rules"
      ],
      "reponse": 2,
      "explication": "Le XSS voyage dans des requêtes HTTP valides sur le port 443 : le pare-feu stateful, aveugle au contenu applicatif, les laisse passer. Le WAF inspecte les requêtes et réponses HTTP/S et bloque XSS, injections et autres attaques applicatives, en complément de la correction du code. Resserrer les ports ne change rien au port 443 légitime, le VPN chiffre sans filtrer le contenu, et le port security concerne les adresses MAC.",
      "difficulte": 1,
      "pourquoi": [
        "Hors couche : le port security concerne les adresses MAC des switches d'accès.",
        "Hors rôle : un concentrateur VPN chiffre des accès sans filtrer le contenu applicatif.",
        "Correct : le WAF inspecte requêtes et réponses HTTP/S et bloque XSS et injections que le pare-feu stateful, aveugle au contenu, laisse passer.",
        "Sans effet : resserrer les règles de ports ne change rien au trafic légitime du port 443."
      ]
    },
    {
      "q": "Which storage protocol encapsulates SCSI commands within TCP/IP, allowing a SAN to be built over standard IP network infrastructure?",
      "choix": [
        "FCoE",
        "iSCSI",
        "Fibre Channel",
        "NFS"
      ],
      "reponse": 1,
      "explication": "iSCSI transporte les commandes SCSI dans TCP/IP : un SAN en mode bloc peut ainsi s'appuyer sur des équipements IP standard, routables, sans matériel spécialisé. Fibre Channel exige une infrastructure dédiée, FCoE encapsule Fibre Channel dans des trames Ethernet de couche 2 non routables, et NFS est un protocole de partage de fichiers, pas de stockage en mode bloc.",
      "difficulte": 2,
      "pourquoi": [
        "Trop limité : FCoE encapsule en couche 2 Ethernet, non routable en IP.",
        "Correct : iSCSI transporte les commandes SCSI dans TCP/IP — un SAN en mode bloc sur infrastructure IP standard.",
        "Contrainte matérielle : Fibre Channel exige une infrastructure dédiée.",
        "Confusion de mode : NFS est un protocole de partage de fichiers, pas de stockage en mode bloc."
      ]
    },
    {
      "q": "Which statement about Fibre Channel over Ethernet (FCoE) is CORRECT?",
      "choix": [
        "It natively encrypts all storage traffic with TLS",
        "It authenticates initiators using Kerberos by default",
        "It routes storage traffic across any IP network",
        "It encapsulates Fibre Channel frames at Layer 2 and requires a lossless, high-speed Ethernet fabric, typically 10 Gbps or more"
      ],
      "reponse": 3,
      "explication": "FCoE fait converger le stockage Fibre Channel sur l'Ethernet du datacenter : encapsulation en couche 2, non routable en IP, exigeant un réseau sans perte (Data Center Bridging) à 10 Gbps minimum. C'est iSCSI qui traverse les réseaux IP routés. FCoE ne chiffre rien nativement et n'utilise pas Kerberos : la sécurité repose sur l'isolement du fabric et le zoning.",
      "difficulte": 3,
      "pourquoi": [
        "Faux : FCoE ne chiffre rien nativement.",
        "Invention : FCoE n'authentifie pas par Kerberos ; la sécurité repose sur l'isolement du fabric et le zoning.",
        "Confusion avec iSCSI : FCoE ne se route pas sur un réseau IP quelconque.",
        "Correct : FCoE encapsule les trames Fibre Channel en couche 2 et exige un fabric Ethernet sans perte à 10 Gbps minimum."
      ]
    },
    {
      "q": "What is the PRIMARY security benefit a content delivery network (CDN) provides to a public-facing website?",
      "choix": [
        "It encrypts data stored in the origin database",
        "It replaces the need for TLS certificates",
        "It patches web application vulnerabilities automatically",
        "It absorbs and disperses volumetric DDoS attacks across globally distributed points of presence while caching content"
      ],
      "reponse": 3,
      "explication": "Grâce à l'anycast et à ses points de présence mondiaux, le CDN encaisse les attaques volumétriques sur une capacité cumulée énorme, loin de l'origine, tout en continuant de servir le contenu depuis le cache ; beaucoup intègrent aussi un WAF. Il ne chiffre pas la base de données d'origine, il utilise TLS (il ne le remplace pas), et il ne corrige pas les vulnérabilités du code applicatif.",
      "difficulte": 2,
      "pourquoi": [
        "Hors périmètre : le CDN ne chiffre pas la base de données de l'origine.",
        "Contresens : le CDN utilise TLS, il ne le remplace pas.",
        "Sur-promesse : le CDN ne corrige pas les vulnérabilités du code applicatif.",
        "Correct : grâce à l'anycast et à ses points de présence mondiaux, le CDN absorbe les attaques volumétriques loin de l'origine tout en servant le cache."
      ]
    },
    {
      "q": "Which principle is at the CORE of the Zero Trust network model?",
      "choix": [
        "Devices inside the corporate perimeter are trusted by default",
        "All security controls should be consolidated at the network perimeter",
        "No user or device is trusted based on network location; every access request must be authenticated, authorized, and continuously validated",
        "Encryption is only required for traffic crossing the Internet"
      ],
      "reponse": 2,
      "explication": "Le Zero Trust abolit la confiance implicite liée à l'emplacement réseau : « never trust, always verify ». Chaque requête est authentifiée, autorisée selon l'identité, la posture et le contexte, et revalidée en continu, avec moindre privilège et microsegmentation. Les trois autres propositions décrivent précisément le modèle périmétrique traditionnel que le Zero Trust remplace, y compris l'idée que le trafic interne n'aurait pas besoin de chiffrement.",
      "difficulte": 1,
      "pourquoi": [
        "Contresens : la confiance par défaut à l'intérieur du périmètre est exactement ce que le Zero Trust abolit.",
        "Modèle périmé : concentrer les contrôles au périmètre décrit l'ancien modèle château-fort.",
        "Correct : « never trust, always verify » — aucune confiance liée à l'emplacement, chaque requête authentifiée, autorisée et revalidée en continu.",
        "Contresens : le Zero Trust chiffre aussi le trafic interne, pas seulement Internet."
      ]
    },
    {
      "q": "Which set of countermeasures BEST mitigates VLAN hopping via double tagging?",
      "choix": [
        "Enabling jumbo frames and increasing the MTU",
        "Changing the native VLAN to an unused ID, tagging the native VLAN, and disabling automatic trunk negotiation (DTP)",
        "Deploying spanning tree protocol on all trunk links",
        "Encrypting inter-switch links with MACsec only"
      ],
      "reponse": 1,
      "explication": "Le double tagging abuse du VLAN natif non étiqueté : le premier switch retire l'étiquette externe et laisse la trame atteindre le VLAN cible. Les parades sont de dédier un VLAN natif inutilisé, d'étiqueter le VLAN natif, de figer les ports (access ou trunk explicite) et de désactiver DTP. Le spanning tree prévient les boucles, les jumbo frames concernent la taille des trames, et MACsec chiffre les liens sans corriger la logique d'étiquetage.",
      "difficulte": 3,
      "pourquoi": [
        "Sans effet : les jumbo frames concernent la taille des trames, pas l'empilement d'étiquettes.",
        "Correct : VLAN natif dédié et étiqueté plus désactivation de DTP suppriment les conditions du double tagging.",
        "Confusion de rôle : le spanning tree prévient les boucles, pas la manipulation d'étiquettes.",
        "Incomplet : MACsec chiffre les liens sans corriger la logique d'étiquetage exploitée."
      ]
    },
    {
      "q": "Which legacy protocol should be replaced because it transmits authentication credentials in cleartext?",
      "choix": [
        "Telnet",
        "SFTP",
        "SNMPv3",
        "SSH"
      ],
      "reponse": 0,
      "explication": "Telnet transmet identifiants et commandes en clair : toute écoute du réseau les capture. Il doit être remplacé par SSH, qui chiffre la session d'administration. SFTP transfère les fichiers au-dessus de SSH, et SNMPv3 est justement la version de SNMP qui ajoute authentification et chiffrement, contrairement aux versions 1 et 2c.",
      "difficulte": 1,
      "pourquoi": [
        "Correct : Telnet transmet identifiants et commandes en clair — à remplacer par SSH.",
        "Inversion : SFTP transfère les fichiers au-dessus de SSH, donc chiffré.",
        "Inversion : SNMPv3 est la version qui ajoute authentification et chiffrement.",
        "Inversion : SSH est justement le remplaçant chiffré."
      ]
    },
    {
      "q": "Compared with RADIUS, which statement about TACACS+ is CORRECT?",
      "choix": [
        "TACACS+ runs over UDP ports 1812 and 1813",
        "TACACS+ uses TCP port 49, encrypts the entire packet payload, and separates authentication, authorization, and accounting",
        "TACACS+ encrypts only the password field of each packet",
        "TACACS+ cannot be used for network device administration"
      ],
      "reponse": 1,
      "explication": "TACACS+ utilise TCP 49, chiffre l'intégralité de la charge utile et sépare les trois fonctions AAA, ce qui permet des autorisations fines commande par commande : il est privilégié pour l'administration des équipements réseau. RADIUS, lui, fonctionne en UDP 1812/1813 et ne chiffre que le mot de passe, le reste de l'échange circulant en clair.",
      "difficulte": 3,
      "pourquoi": [
        "Confusion : UDP 1812/1813 sont les ports de RADIUS.",
        "Correct : TCP 49, chiffrement de toute la charge utile et séparation des trois fonctions AAA — d'où sa préférence pour l'administration des équipements.",
        "Inversion : ne chiffrer que le mot de passe est la limite de RADIUS, pas de TACACS+.",
        "Contresens : l'administration des équipements réseau est précisément son cas d'usage phare."
      ]
    },
    {
      "q": "An organization requires that captured TLS traffic remain undecryptable even if the server's private key is later compromised. Which key exchange mechanism satisfies this requirement?",
      "choix": [
        "Static RSA key transport",
        "Pre-shared symmetric keys distributed annually",
        "Key escrow with a trusted third party",
        "Ephemeral Diffie-Hellman (DHE/ECDHE)"
      ],
      "reponse": 3,
      "explication": "L'exigence décrite est la forward secrecy : seuls les échanges Diffie-Hellman éphémères (DHE/ECDHE) génèrent des clés de session uniques, jamais transmises et non dérivables de la clé privée du serveur. Avec le transport RSA statique, le vol de la clé privée déchiffre tout le trafic capturé. Des clés pré-partagées longue durée et l'escrow créent au contraire des secrets durables dont la compromission expose l'historique.",
      "difficulte": 3,
      "pourquoi": [
        "Piège historique : avec le transport RSA statique, le vol de la clé privée déchiffre tout le trafic capturé.",
        "Contresens : des clés pré-partagées longue durée créent un secret durable dont la compromission expose l'historique.",
        "Contresens : l'escrow ajoute un dépositaire du secret, l'inverse de l'exigence.",
        "Correct : seuls les échanges Diffie-Hellman éphémères génèrent des clés de session uniques non dérivables de la clé privée — la forward secrecy exigée."
      ]
    },
    {
      "q": "When adopting SD-WAN with direct Internet breakout at branch offices, which security measure is MOST important?",
      "choix": [
        "Encrypting all inter-site tunnels and applying consistent, centrally managed security policy at every breakout, for example through a SASE model",
        "Disabling encryption to maximize throughput on Internet links",
        "Backhauling all branch traffic to headquarters permanently",
        "Relying solely on each ISP's built-in security services"
      ],
      "reponse": 0,
      "explication": "Le SD-WAN fait transiter le trafic d'entreprise par des liens Internet non fiables et ouvre des sorties locales dans chaque agence : il faut chiffrer tous les tunnels inter-sites (IPsec) et appliquer partout une politique de sécurité homogène et centralisée, ce que le modèle SASE apporte en combinant SD-WAN et services de sécurité cloud. Désactiver le chiffrement est inacceptable, déléguer aveuglément aux FAI ne donne aucune garantie, et tout rapatrier au siège annule l'intérêt du SD-WAN.",
      "difficulte": 2,
      "pourquoi": [
        "Correct : chiffrer tous les tunnels inter-sites et appliquer une politique homogène et centralisée à chaque sortie locale — ce que le modèle SASE industrialise.",
        "Inacceptable : désactiver le chiffrement sur des liens Internet publics expose tout le trafic.",
        "Contre-productif : tout rapatrier au siège annule le bénéfice même du SD-WAN.",
        "Abdication : déléguer aveuglément la sécurité aux FAI ne donne aucune garantie ni visibilité."
      ]
    },
    {
      "q": "Which switch feature BEST mitigates ARP poisoning on a local network?",
      "choix": [
        "Enabling jumbo frames",
        "Configuring a longer CAM table aging time",
        "Dynamic ARP Inspection validating ARP replies against trusted bindings",
        "Disabling the spanning tree protocol"
      ],
      "reponse": 2,
      "explication": "Dynamic ARP Inspection valide chaque réponse ARP contre les associations IP-MAC de confiance apprises par le DHCP snooping, et rejette les réponses forgées qui tenteraient de détourner le trafic vers l'attaquant. Les jumbo frames et le vieillissement de la table CAM n'ont aucun effet sur ARP, et désactiver le spanning tree crée des risques de boucles sans le moindre bénéfice de sécurité.",
      "difficulte": 2,
      "pourquoi": [
        "Sans effet : les jumbo frames n'ont aucun rapport avec ARP.",
        "Sans effet : le vieillissement de la table CAM ne valide pas les réponses ARP.",
        "Correct : Dynamic ARP Inspection valide chaque réponse ARP contre les associations IP-MAC de confiance issues du DHCP snooping et rejette les réponses forgées.",
        "Aggravant : désactiver le spanning tree crée des risques de boucles sans bénéfice de sécurité."
      ]
    },
    {
      "q": "After a competitor was crippled by ransomware spreading laterally, the board directs the CISO to \"implement Zero Trust.\" This year's budget covers only a fraction of a full redesign, and the BIA has identified three mission-critical applications. What should the CISO do FIRST?",
      "choix": [
        "Enforce multifactor authentication on VPN access for all remote users",
        "Microsegment the network zones hosting the three mission-critical applications first, and place the remainder on a multi-year Zero Trust roadmap",
        "Launch the complete Zero Trust redesign at once: modern IAM, ZTNA, network-wide microsegmentation, and VPN replacement",
        "Replace the perimeter firewall with a latest-generation NGFW to harden the network boundary"
      ],
      "reponse": 1,
      "explication": "Le réflexe managérial est de traiter le risque démontré (le mouvement latéral) là où l'impact métier est maximal, dans la limite du budget : microsegmenter les zones des applications critiques identifiées par la BIA réduit immédiatement le risque tout en amorçant la trajectoire Zero Trust voulue par le conseil. La refonte complète est la cible, pas la première étape finançable ; le NGFW durcit un périmètre que le ransomware contourne de l'intérieur ; la MFA sur le VPN protège l'entrée sans limiter la progression interne.",
      "difficulte": 3,
      "pourquoi": [
        "Techniquement vraie mais trop étroite : la MFA sécurise l'entrée sans confiner un attaquant déjà présent.",
        "Correct : prioriser les zones critiques identifiées par la BIA traite le risque démontré sous contrainte budgétaire tout en lançant la trajectoire Zero Trust.",
        "Vraie mais hors phase : c'est la cible pluriannuelle, infinançable en première étape avec une fraction du budget.",
        "Réponse de technicien périmétrique : le mouvement latéral se joue à l'intérieur, pas à la frontière."
      ]
    },
    {
      "q": "A financial institution plans to deploy outbound TLS inspection to detect data exfiltration. The privacy officer objects that employees also access personal banking, health, and union-related websites. Which course of action BEST balances these concerns?",
      "choix": [
        "Deploy selective TLS inspection that exempts sensitive categories, governed by a documented policy agreed with the privacy officer and communicated to employees",
        "Abandon TLS inspection entirely and rely solely on endpoint detection and response (EDR) telemetry",
        "Restrict TLS inspection to executives and privileged users, as they present the highest risk",
        "Inspect all outbound TLS traffic, because exfiltration detection outweighs any other consideration"
      ],
      "reponse": 0,
      "explication": "L'arbitrage attendu d'un manager concilie la visibilité du SOC et la proportionnalité juridique : une inspection sélective, exemptant les catégories sensibles, encadrée par une politique validée avec le DPO et notifiée aux salariés, conserve la détection sur l'essentiel du trafic sans violer la vie privée. Tout inspecter est un absolu juridiquement indéfendable ; tout abandonner sacrifie la visibilité réseau alors qu'un compromis existe ; cibler des personnes plutôt que des catégories de trafic est discriminatoire et laisse la majorité du trafic sans détection.",
      "difficulte": 3,
      "pourquoi": [
        "Correct : l'inspection sélective gouvernée avec le DPO et transparente pour les salariés est l'équilibre proportionné entre visibilité et vie privée.",
        "Vraie mais contextuellement fausse : l'EDR complète l'inspection, y renoncer abandonne toute la visibilité réseau alors qu'un compromis existe.",
        "Trop étroit et discriminatoire : viser des personnes plutôt que des catégories de trafic pose un problème juridique et laisse le reste sans détection.",
        "Absolu : ignorer la proportionnalité et la vie privée crée un risque juridique supérieur au gain marginal de détection."
      ]
    },
    {
      "q": "During an IT/OT convergence project, an audit finds legacy PLCs reachable from the corporate office network. Production leadership refuses any line downtime, and the PLCs cannot be patched until the annual shutdown in nine months. What should the CISO recommend FIRST?",
      "choix": [
        "Escalate to executive management to mandate an exceptional production shutdown",
        "Schedule an emergency patching campaign for the PLCs outside production hours",
        "Deploy a passive OT-specific monitoring sensor to gain visibility into industrial traffic",
        "Segment IT and OT networks into zones and conduits with compensating controls at the boundaries, consistent with the Purdue model and IEC 62443"
      ],
      "reponse": 3,
      "explication": "Quand le patching est impossible sous contrainte métier, la réponse est le contrôle compensatoire architectural : segmenter IT et OT en zones et conduits coupe immédiatement le chemin d'attaque depuis la bureautique, sans toucher aux lignes. Le patching d'urgence ignore la contrainte posée (fenêtres rares, requalification des automates) ; la sonde passive apporte une visibilité précieuse mais ne bloque rien — elle vient après la segmentation ; exiger l'arrêt des lignes fait primer la sécurité sur le métier sans avoir épuisé les mesures compensatoires.",
      "difficulte": 3,
      "pourquoi": [
        "Absolu : imposer l'arrêt sacrifie le métier alors qu'une mesure compensatoire efficace existe.",
        "Hors contrainte : le scénario établit que le patch est impossible avant neuf mois — fenêtres de maintenance et requalification obligent.",
        "Vraie mais hors phase : la visibilité passive est le bon second pas, mais détecter sans couper le chemin d'attaque ne réduit pas l'exposition.",
        "Correct : les zones et conduits (Purdue, IEC 62443) coupent le chemin d'attaque sans arrêt de production — le contrôle compensatoire de référence."
      ]
    },
    {
      "q": "During the holiday sales peak, a retailer's e-commerce platform is hit by a volumetric DDoS attack that saturates its Internet link; the firewalls are holding. The continuity plan tolerates no more than one hour of downtime. What should the operations team do FIRST?",
      "choix": [
        "Fail over the platform to the disaster recovery site",
        "Order an emergency bandwidth upgrade for the Internet link",
        "Activate the contracted upstream anti-DDoS scrubbing service from the ISP or cloud provider to filter traffic before it reaches the link",
        "Add firewall rules blocking the source IP addresses observed in the logs"
      ],
      "reponse": 2,
      "explication": "Une attaque volumétrique se neutralise en amont du lien saturé : seul le scrubbing de l'opérateur ou d'un fournisseur cloud filtre le trafic avant le goulot d'étranglement, dans le délai du plan de continuité. Bloquer les adresses au pare-feu est inopérant — les paquets ont déjà saturé le lien et le botnet change d'adresses plus vite que les règles ; basculer vers le site de secours déplace la cible que l'attaque suivra via le DNS ; un upgrade de bande passante prend des jours et ne fait que relever marginalement le seuil.",
      "difficulte": 3,
      "pourquoi": [
        "Vraie mais contextuellement fausse : la bascule déplace la cible sans neutraliser l'attaque, qui suivra la nouvelle adresse via le DNS.",
        "Hors délai : un upgrade de lien prend des jours et ne relève que marginalement le seuil de saturation.",
        "Correct : filtrer en amont du lien saturé via le service contractuel est la seule action qui restaure le service dans le délai de continuité imposé.",
        "Réponse de technicien hors position : le pare-feu est derrière le goulot d'étranglement et le botnet renouvelle ses adresses plus vite que les règles."
      ]
    }
  ],
  "flashcards": [
    {
      "recto": "Les 7 couches du modèle OSI ?",
      "verso": "1 Physique, 2 Liaison de données (Data Link), 3 Réseau, 4 Transport, 5 Session, 6 Présentation, 7 Application. Mnémonique : Please Do Not Throw Sausage Pizza Away."
    },
    {
      "recto": "PDU par couche OSI ?",
      "verso": "Couches 5 à 7 : data ; couche 4 : segment (TCP) ou datagram (UDP) ; couche 3 : packet ; couche 2 : frame ; couche 1 : bit."
    },
    {
      "recto": "Three-way handshake TCP",
      "verso": "SYN, puis SYN-ACK, puis ACK. Les six drapeaux TCP : URG, ACK, PSH, RST, SYN, FIN."
    },
    {
      "recto": "Adresses privées RFC 1918",
      "verso": "10.0.0.0/8, 172.16.0.0/12 et 192.168.0.0/16 : non routables sur Internet, utilisées derrière du NAT."
    },
    {
      "recto": "APIPA",
      "verso": "Automatic Private IP Addressing : plage 169.254.0.0/16 auto-attribuée quand aucun serveur DHCP ne répond."
    },
    {
      "recto": "NAT vs PAT",
      "verso": "NAT traduit les adresses IP sans toucher aux ports ; PAT traduit aussi le port source, permettant à de nombreux clients de partager une seule adresse publique."
    },
    {
      "recto": "Unicast / Broadcast / Multicast / Anycast",
      "verso": "Un vers un ; un vers tous les hôtes du segment ; un vers un groupe abonné ; vers le noeud le plus proche partageant l'adresse (utilisé par les CDN)."
    },
    {
      "recto": "IPsec : AH vs ESP",
      "verso": "AH (Authentication Header) : intégrité, authentification, anti-rejeu, PAS de chiffrement. ESP (Encapsulating Security Payload) : chiffrement, donc confidentialité."
    },
    {
      "recto": "IPsec : mode transport vs mode tunnel",
      "verso": "Transport : seule la charge utile est chiffrée (pair à pair). Tunnel : le paquet entier, en-tête compris, est chiffré (passerelle à passerelle, VPN de sites)."
    },
    {
      "recto": "TLS : versions acceptables",
      "verso": "TLS 1.2 et 1.3 uniquement ; SSL, TLS 1.0 et 1.1 sont dépréciés. TLS repose sur une cryptographie hybride : asymétrique pour la clé de session, symétrique ensuite."
    },
    {
      "recto": "SPF / DKIM / DMARC",
      "verso": "SPF : liste des serveurs autorisés à émettre pour un domaine. DKIM : signature numérique des messages via clé publiée en DNS. DMARC : politique d'alignement et de traitement des échecs (quarantine, reject) avec rapports."
    },
    {
      "recto": "DNSSEC",
      "verso": "Extension du DNS qui signe cryptographiquement les enregistrements : le résolveur vérifie authenticité et intégrité des réponses, contrant le DNS poisoning."
    },
    {
      "recto": "VLAN vs VRF",
      "verso": "VLAN : segmentation logique de couche 2 imposée par les switches. VRF (Virtual Routing and Forwarding) : plusieurs tables de routage indépendantes sur un même routeur, en couche 3."
    },
    {
      "recto": "Microsegmentation",
      "verso": "Découpage du réseau en zones minimes (jusqu'à une seule machine) avec pare-feux distribués : bloque les mouvements latéraux, brique technique du Zero Trust."
    },
    {
      "recto": "SDN : les trois plans",
      "verso": "Plan d'application (API northbound), plan de contrôle (intelligence centralisée qui calcule les chemins), plan de données (commutation des paquets). Le plan de management supervise l'ensemble."
    },
    {
      "recto": "VXLAN",
      "verso": "Encapsulation qui étire des segments de couche 2 à travers des réseaux de couche 3 ; environ 16 millions de segments possibles contre 4096 VLANs ; outil de microsegmentation multi-sites."
    },
    {
      "recto": "Trafic north-south vs east-west",
      "verso": "North-south : entre le datacenter et l'extérieur (clients, Internet). East-west : latéral, entre serveurs et applications au sein du datacenter — cible de la microsegmentation."
    },
    {
      "recto": "WPA3 : SAE",
      "verso": "Simultaneous Authentication of Equals : remplace le PSK de WPA2 par l'échange Dragonfly (dérivé de Diffie-Hellman) en preuve à divulgation nulle ; empêche les attaques par dictionnaire hors ligne."
    },
    {
      "recto": "802.1X",
      "verso": "Port-Based Network Access Control : bloque toute communication tant que le client ne s'est pas authentifié (via EAP) auprès d'un serveur AAA, par exemple RADIUS (UDP 1812) ou TACACS+ (TCP 49)."
    },
    {
      "recto": "Bluejacking / Bluesnarfing / Bluebugging",
      "verso": "Bluejacking : envoi de messages non sollicités (bénin). Bluesnarfing : vol de données sur l'appareil. Bluebugging : prise de contrôle complète (écoute d'appels, envoi de messages)."
    },
    {
      "recto": "Evil twin",
      "verso": "Faux point d'accès Wi-Fi imitant le SSID légitime pour capter les connexions et intercepter le trafic ; souvent combiné à une attaque de désassociation qui déconnecte les victimes du vrai AP."
    },
    {
      "recto": "Smurf attack",
      "verso": "DoS par amplification : echo request ICMP envoyé à l'adresse de broadcast avec l'adresse source usurpée de la victime ; tous les hôtes répondent à la victime."
    },
    {
      "recto": "ARP poisoning",
      "verso": "Fausses réponses ARP associant la MAC de l'attaquant à l'IP d'un tiers de confiance (souvent la passerelle) : permet interception, modification ou blocage du trafic (attaque on-path). Parade : dynamic ARP inspection, chiffrement."
    },
    {
      "recto": "Stateless / Stateful / NGFW / WAF",
      "verso": "Stateless : filtre chaque paquet isolément. Stateful : suit l'état des connexions. NGFW : inspection applicative profonde, IPS, identités. WAF : protection dédiée des applications web (HTTP/S) contre injections, XSS, etc."
    },
    {
      "recto": "Forward proxy vs reverse proxy",
      "verso": "Forward : côté clients internes (filtrage, cache, anonymisation). Reverse : devant les serveurs (répartition de charge, terminaison TLS, masquage du backend), souvent en screened subnet."
    },
    {
      "recto": "NAC : preadmission vs postadmission",
      "verso": "Preadmission : conformité (patchs, antivirus) exigée AVANT l'accès au réseau. Postadmission : autorisation ou refus selon l'activité APRÈS admission. Déploiement avec agent (permanent/dissolvable) ou agentless."
    },
    {
      "recto": "Split tunnel vs full tunnel",
      "verso": "Full tunnel : tout le trafic du client passe par l'organisation. Split tunnel : accès simultané au réseau interne et à Internet en direct — risque de pont contournant les contrôles."
    },
    {
      "recto": "SIPS et SRTP",
      "verso": "SIPS : SIP chiffré par TLS, protège la signalisation VoIP. SRTP : extension de RTP ajoutant chiffrement, authentification et anti-rejeu aux flux audio et vidéo."
    },
    {
      "recto": "MOU vs ISA",
      "verso": "MOU (memorandum of understanding) : expression d'intention entre deux entités. ISA (interconnection security agreement) : déclaration formelle des exigences techniques et de sécurité d'une interconnexion de réseaux."
    },
    {
      "recto": "Cut-through / Store-and-forward / Fragment-free",
      "verso": "Cut-through : transmet dès l'adresse lue (rapide, sans contrôle). Store-and-forward : reçoit tout, vérifie les erreurs, puis transmet. Fragment-free : vérifie les 64 premiers octets, compromis entre les deux."
    },
    {
      "recto": "FCoE (Fibre Channel over Ethernet)",
      "verso": "Protocole convergé qui encapsule le trafic de stockage Fibre Channel dans des trames Ethernet, en couche 2, sur un réseau à 10 Gbps minimum. Ne traverse pas nativement les routeurs IP."
    },
    {
      "recto": "iSCSI",
      "verso": "Protocole convergé qui encapsule les commandes de stockage SCSI dans TCP/IP : permet de bâtir un SAN économique sur un réseau IP standard, sans matériel Fibre Channel dédié."
    },
    {
      "recto": "CHAP vs PAP",
      "verso": "PAP : identifiants transmis EN CLAIR, à proscrire. CHAP : challenge-response, le serveur envoie un défi et le client répond par un haché (défi + secret) — le mot de passe ne circule jamais, avec ré-authentification périodique. EAP : framework accueillant de multiples méthodes."
    },
    {
      "recto": "Modbus / DNP3",
      "verso": "Protocoles industriels (ICS/SCADA) : Modbus pour les automates (PLC), DNP3 pour la supervision des réseaux d'énergie et d'eau. Conçus sans authentification ni chiffrement : parade = isolement et segmentation stricte du réseau OT selon le modèle Purdue."
    }
  ]
};
