// Domaine 4 — Sécurité des communications et des réseaux (Communication and Network Security)
// Généré selon data/SCHEMA.md

window.CISSP_DATA = window.CISSP_DATA || { domains: {} };
window.CISSP_DATA.domains[4] = {
  id: 4,
  code: "D4",
  titre: "Sécurité des communications et des réseaux",
  titreEn: "Communication and Network Security",
  poids: "13%",
  couleur: "#06d6a0",
  icone: "🌐",
  description: "Ce domaine couvre l'architecture réseau sécurisée : les modèles OSI et TCP/IP, les protocoles sécurisés comme TLS et IPsec, la segmentation, les réseaux sans fil, ainsi que les attaques réseau courantes et les équipements de défense. C'est un domaine technique qui pèse environ 13 % de l'examen : si vous n'avez pas de bagage réseau, prévoyez d'y consacrer plus de temps.",
  objectifs: [
    "4.1 Appliquer les principes de conception sécurisée aux architectures réseau : modèles OSI et TCP/IP, IPv4/IPv6, protocoles sécurisés, protocoles multicouches et convergés, segmentation physique et logique, microsegmentation, SDN et SD-WAN, réseaux sans fil et cellulaires, CDN et edge networks",
    "4.2 Sécuriser les composants réseau : matériel et redondance, supports de transmission, Network Access Control (NAC), sécurité des endpoints, pare-feux et proxys",
    "4.3 Mettre en oeuvre des canaux de communication sécurisés : voix et collaboration (VoIP), accès distant, communications de données, connectivité tierce"
  ],

  lecons: [
    // ------------------------------------------------------------------
    // LEÇON 1 — Modèles OSI et TCP/IP
    // ------------------------------------------------------------------
    {
      id: "d4-l1",
      titre: "Les modèles OSI et TCP/IP couche par couche",
      duree: 12,
      slides: [
        {
          type: "intro",
          titre: "Pourquoi des modèles en couches ?",
          points: [
            "Le modèle OSI : cadre de référence en 7 couches créé par l'ISO",
            "Le modèle TCP/IP (DoD) : 4 couches, celui du monde réel",
            "Communication entre couches par encapsulation et de-encapsulation"
          ],
          narration: "Bienvenue dans le domaine quatre, le domaine des réseaux. Pour que des machines très différentes puissent communiquer, on a défini des modèles en couches, où chaque couche rend un service précis à celle du dessus. Le modèle OSI, avec ses sept couches, est un cadre de référence abstrait créé par l'ISO, tandis que le modèle TCP/IP, en quatre couches, est celui réellement implémenté sur Internet. À l'examen, on vous demandera régulièrement à quelle couche opère tel protocole ou tel équipement, donc apprenez-les par coeur.",
          astuce: "💡 Conseil examen : mémorisez un moyen mnémotechnique, par exemple « Please Do Not Throw Sausage Pizza Away » en partant de la couche 1."
        },
        {
          type: "schema",
          titre: "Les 7 couches du modèle OSI",
          points: [
            "Couche 7 Application, couche 6 Présentation, couche 5 Session",
            "Couche 4 Transport, couche 3 Réseau, couche 2 Liaison, couche 1 Physique"
          ],
          schema: {
            type: "pyramid",
            items: [
              "7. Application",
              "6. Présentation (Presentation)",
              "5. Session",
              "4. Transport",
              "3. Réseau (Network)",
              "2. Liaison de données (Data Link)",
              "1. Physique (Physical)"
            ]
          },
          narration: "Voici la pile OSI complète, de la couche physique tout en bas jusqu'à la couche application tout en haut. Quand une donnée descend la pile, chaque couche ajoute son propre en-tête : c'est l'encapsulation. À la réception, chaque couche retire l'en-tête qui la concerne : c'est la de-encapsulation. Gardez ce schéma en tête, il structure tout le reste du domaine."
        },
        {
          type: "standard",
          titre: "Couche 1 — Physique",
          points: [
            "Convertit les trames en bits transmis sur le support physique",
            "Équipements : hubs, repeaters, concentrateurs, amplificateurs",
            "Topologies : star, mesh, ring, bus",
            "Supports : cuivre, fibre optique, ondes radio"
          ],
          narration: "La couche physique transforme les trames en bits, puis en signaux électriques, lumineux ou radio. On y trouve les équipements les plus simples : les hubs et les répéteurs, qui régénèrent le signal sans aucune intelligence. C'est aussi à ce niveau qu'on parle des topologies de réseau : l'étoile, le maillage, l'anneau et le bus. Retenez que la topologie en étoile, où chaque noeud est relié à un commutateur central, est aujourd'hui la plus répandue."
        },
        {
          type: "standard",
          titre: "Couche 2 — Liaison de données",
          points: [
            "Formate les paquets en trames avec adresses matérielles source et destination",
            "Adresse MAC : 48 bits en hexadécimal, dont 24 bits d'OUI fabricant",
            "Protocoles : ARP, Ethernet 802.3, PPP, L2TP, 802.1X",
            "Équipements : switches, bridges, cartes réseau, points d'accès"
          ],
          narration: "La couche liaison de données prépare les trames et y ajoute les adresses matérielles, les fameuses adresses MAC de quarante-huit bits. Les vingt-quatre premiers bits identifient le fabricant, c'est l'Organizationally Unique Identifier. Les switches et les bridges opèrent ici : ils commutent les trames en fonction de l'adresse MAC de destination. On y trouve aussi ARP, qui traduit une adresse IP en adresse MAC, et des protocoles de tunnel comme L2TP ou d'authentification comme 802.1X."
        },
        {
          type: "standard",
          titre: "Couche 3 — Réseau",
          points: [
            "Adressage logique et routage des paquets, sans garantie de livraison",
            "Protocoles : IPv4, IPv6, IPsec, ICMP, IGMP",
            "Protocoles de routage intérieurs : RIP et OSPF ; extérieur : BGP",
            "Équipements : routeurs et pare-feux à filtrage de paquets"
          ],
          narration: "La couche réseau gère l'adressage logique et le routage : c'est le royaume du protocole IP et des routeurs. ICMP y fournit les messages d'erreur et de contrôle, c'est lui qui fait fonctionner le ping et le traceroute. Côté routage, distinguez les protocoles à vecteur de distance comme RIP, qui comptent les sauts, des protocoles à état de liens comme OSPF, qui tiennent compte de la vitesse et de la latence. BGP, lui, est le protocole extérieur qui relie les systèmes autonomes sur Internet.",
          astuce: "💡 Conseil examen : RIP compte les hops, OSPF calcule le chemin le plus court, BGP route entre systèmes autonomes sur Internet."
        },
        {
          type: "standard",
          titre: "Couche 4 — Transport : TCP et UDP",
          points: [
            "TCP : orienté connexion, fiable, full-duplex, three-way handshake SYN, SYN-ACK, ACK",
            "Drapeaux TCP : URG, ACK, PSH, RST, SYN, FIN",
            "UDP : sans connexion, best effort, rapide, en-tête minimal",
            "Segmentation, séquencement et contrôle d'erreurs"
          ],
          narration: "La couche transport contrôle la session de bout en bout. TCP est le protocole fiable et orienté connexion : il ouvre chaque session par la poignée de main en trois temps, SYN, SYN-ACK puis ACK, et garantit l'ordre et l'intégrité des segments. UDP, au contraire, est sans connexion : il envoie ses datagrammes en mode meilleur effort, sans accusé de réception, ce qui le rend rapide et adapté à la voix ou à la vidéo. Retenez aussi les six drapeaux TCP, souvent testés à l'examen."
        },
        {
          type: "standard",
          titre: "Couches 5, 6 et 7 — Session, Présentation, Application",
          points: [
            "Session : établit, maintient et termine les dialogues ; simplex, half-duplex, full-duplex ; NetBIOS, RPC",
            "Présentation : formatage, compression, chiffrement ; JPEG, ASCII, MIME",
            "Application : interface avec les applications ; HTTP, DNS, SMTP, SSH, SIP, BGP"
          ],
          narration: "Les trois couches hautes correspondent à la couche application unique du modèle TCP/IP. La couche session gère le dialogue entre deux machines et connaît trois modes : simplex à sens unique, half-duplex en alternance, et full-duplex simultané. La couche présentation met les données dans un format compréhensible par tous, avec la compression et une partie du chiffrement. Enfin, la couche application fait le lien avec vos logiciels : c'est là que vivent HTTP, DNS, SMTP ou encore SIP pour la voix sur IP."
        },
        {
          type: "schema",
          titre: "Encapsulation et unités de données (PDU)",
          points: [
            "Couches 5 à 7 : data (PDU)",
            "Couche 4 : segment TCP ou datagram UDP",
            "Couche 3 : packet — Couche 2 : frame — Couche 1 : bit"
          ],
          schema: {
            type: "flow",
            items: ["Data (L7-L5)", "Segment / Datagram (L4)", "Packet (L3)", "Frame (L2)", "Bits (L1)"]
          },
          narration: "Chaque couche donne un nom différent à son unité de données, le PDU. Dans les couches hautes on parle simplement de données, la couche transport produit des segments en TCP ou des datagrammes en UDP, la couche réseau des paquets, la couche liaison des trames, et la couche physique des bits. Ce vocabulaire précis est un grand classique des questions d'examen : si on vous parle de trames, vous savez qu'on est en couche deux."
        },
        {
          type: "question",
          titre: "Contrôle de connaissance",
          points: ["Vérifions les couches et les équipements."],
          narration: "Petit contrôle avant de continuer. Réfléchissez bien à l'équipement mentionné et à l'unité de données qu'il manipule.",
          q: "À quelle couche du modèle OSI un switch classique prend-il ses décisions de commutation ?",
          choix: [
            "Couche 1 — Physique",
            "Couche 2 — Liaison de données",
            "Couche 3 — Réseau",
            "Couche 4 — Transport"
          ],
          reponse: 1,
          explication: "Un switch classique commute les trames en se basant sur les adresses MAC, qui appartiennent à la couche 2. Un hub opère en couche 1, un routeur en couche 3, et la couche 4 concerne TCP et UDP. Notez que certains switches multicouches savent aussi router en couche 3."
        },
        {
          type: "standard",
          titre: "Les ports à connaître",
          points: [
            "FTP 20 et 21, SSH 22, Telnet 23, SMTP 25, DNS 53",
            "HTTP 80, HTTPS 443, POP3 110, IMAP 143",
            "LDAP 389, LDAPS 636, RDP 3389",
            "Plages : well-known 0 à 1023, registered 1024 à 49151, dynamiques au-delà"
          ],
          narration: "Il existe soixante-cinq mille cinq cent trente-cinq ports, répartis en trois plages : les ports bien connus jusqu'à mille vingt-trois, les ports enregistrés, puis les ports dynamiques utilisés temporairement par les clients. Apprenez les grands classiques : vingt-deux pour SSH, vingt-cinq pour SMTP, cinquante-trois pour DNS, quatre-cent-quarante-trois pour HTTPS ou encore trois-mille-trois-cent-quatre-vingt-neuf pour le bureau à distance. Pensez aussi aux ports des services d'authentification : RADIUS utilise l'UDP mille-huit-cent-douze et TACACS plus le TCP quarante-neuf."
        },
        {
          type: "resume",
          titre: "Résumé de la leçon",
          points: [
            "OSI : 7 couches abstraites ; TCP/IP : 4 couches concrètes",
            "Encapsulation en descendant, de-encapsulation en remontant",
            "PDU : data, segment ou datagram, packet, frame, bit",
            "Équipements : hub en L1, switch en L2, routeur en L3",
            "TCP fiable avec three-way handshake, UDP rapide sans connexion"
          ],
          narration: "Récapitulons. Le modèle OSI compte sept couches et sert de référence, tandis que TCP/IP en compte quatre et fait tourner Internet. Chaque couche a son unité de données, ses protocoles et ses équipements : le hub en couche physique, le switch en couche liaison, le routeur en couche réseau. Enfin, TCP offre la fiabilité avec sa poignée de main en trois temps, quand UDP privilégie la vitesse. Maîtrisez ce socle, tout le reste du domaine s'appuie dessus."
        }
      ]
    },

    // ------------------------------------------------------------------
    // LEÇON 2 — IPv4, IPv6 et protocoles sécurisés
    // ------------------------------------------------------------------
    {
      id: "d4-l2",
      titre: "IPv4, IPv6 et protocoles sécurisés",
      duree: 13,
      slides: [
        {
          type: "intro",
          titre: "Le protocole IP et sa sécurisation",
          points: [
            "IPv4 : adresses sur 32 bits, épuisées depuis longtemps",
            "IPv6 : adresses sur 128 bits, conçu avec IPsec en tête",
            "IP est sans connexion : la sécurité vient des protocoles au-dessus"
          ],
          narration: "Dans cette leçon, nous plongeons dans le protocole IP lui-même, puis dans les protocoles qui le sécurisent. IP est un protocole sans connexion : il achemine les paquets sans garantie ni chiffrement. La confidentialité et l'intégrité viennent donc de protocoles complémentaires comme TLS, IPsec, SSH ou DNSSEC, que tout candidat CISSP doit savoir comparer et positionner."
        },
        {
          type: "standard",
          titre: "IPv4 : classes, adresses privées et NAT",
          points: [
            "Classes historiques : A jusqu'à 127, B jusqu'à 191, C jusqu'à 223",
            "Adresses privées RFC 1918 : 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16",
            "APIPA : 169.254.0.0/16 en cas d'échec du DHCP",
            "NAT traduit les adresses privées ; PAT y ajoute la traduction de ports"
          ],
          narration: "IPv4 utilise des adresses de trente-deux bits, historiquement découpées en classes A, B et C. Comme les adresses publiques manquent, on utilise en interne les plages privées de la RFC dix-neuf-cent-dix-huit, non routables sur Internet. Le NAT traduit ces adresses privées en adresses publiques, et le PAT va plus loin en multiplexant de nombreux clients derrière une seule adresse publique grâce aux numéros de port. Enfin, si un poste n'obtient pas de bail DHCP, il s'attribue tout seul une adresse APIPA dans la plage cent-soixante-neuf point deux-cent-cinquante-quatre.",
          astuce: "💡 Conseil examen : une adresse en 169.254.x.x signale presque toujours un serveur DHCP injoignable."
        },
        {
          type: "standard",
          titre: "Subnetting et notation CIDR",
          points: [
            "Le masque sépare la partie réseau de la partie hôte",
            "CIDR : 192.168.1.0/24 signifie 24 bits de réseau, 254 hôtes utilisables",
            "On exclut toujours l'adresse de réseau et l'adresse de broadcast"
          ],
          narration: "Le subnetting découpe un grand réseau en sous-réseaux plus faciles à gérer et à sécuriser. La notation CIDR résume le masque : slash vingt-quatre veut dire que les vingt-quatre premiers bits identifient le réseau, ce qui laisse deux-cent-cinquante-six adresses dont deux-cent-cinquante-quatre utilisables, car on réserve l'adresse du réseau et celle de broadcast. Savoir lire un slash seize ou un slash douze suffit largement pour l'examen : on teste votre compréhension, pas votre calcul mental."
        },
        {
          type: "standard",
          titre: "IPv6 et modes de diffusion",
          points: [
            "IPv6 : 128 bits, SLAAC pour l'autoconfiguration, IPsec recommandé",
            "Unicast : un vers un — Broadcast : un vers tous (IPv4 seulement)",
            "Multicast : un vers un groupe abonné",
            "Anycast : vers le noeud le plus proche, utilisé par les CDN"
          ],
          narration: "IPv6 modernise IP avec des adresses de cent-vingt-huit bits, soit un espace quasiment illimité, et l'autoconfiguration SLAAC qui permet à une machine de fabriquer son adresse à partir des annonces du routeur, sans serveur DHCP. Côté diffusion, retenez quatre modes : l'unicast d'une machine vers une autre, le broadcast vers tout le segment, le multicast vers un groupe d'abonnés, et l'anycast qui atteint le noeud le plus proche parmi plusieurs qui partagent la même adresse. L'anycast est la mécanique préférée des CDN pour servir l'utilisateur depuis le serveur le plus rapide."
        },
        {
          type: "question",
          titre: "Contrôle de connaissance",
          points: ["Modes de diffusion et cas d'usage."],
          narration: "Voyons si les modes de diffusion sont bien en place. Pensez au besoin exprimé : servir chaque utilisateur depuis le point le plus proche.",
          q: "Un Content Distribution Network veut diriger chaque utilisateur vers le serveur le plus proche partageant la même adresse IP. Quel mode de diffusion utilise-t-il ?",
          choix: ["Broadcast", "Multicast", "Anycast", "Unicast"],
          reponse: 2,
          explication: "L'anycast permet à plusieurs serveurs de partager la même adresse : le routage achemine chaque client vers l'instance la plus proche ou la plus performante, ce qui est exactement le fonctionnement d'un CDN. Le broadcast envoie à tous, le multicast à un groupe abonné, et l'unicast à un destinataire unique."
        },
        {
          type: "standard",
          titre: "TLS : le standard du web sécurisé",
          points: [
            "TLS a remplacé SSL, désormais obsolète",
            "TLS 1.0 et 1.1 dépréciés : exigez TLS 1.2 ou 1.3",
            "Cryptographie hybride : asymétrique pour échanger une clé de session, symétrique ensuite",
            "Fournit chiffrement, intégrité et authentification via certificats X.509"
          ],
          narration: "TLS, successeur de SSL, protège les transactions web, la messagerie et bien d'autres flux. Son fonctionnement repose sur la cryptographie hybride : la cryptographie asymétrique sert à échanger une clé de session éphémère, puis la cryptographie symétrique, beaucoup plus rapide, chiffre le reste des échanges. Les versions un point zéro et un point un sont dépréciées : une organisation sérieuse impose au minimum TLS un point deux, idéalement un point trois. Les certificats X point cinq-cent-neuf, vérifiables en temps réel via OCSP, assurent l'authentification du serveur."
        },
        {
          type: "standard",
          titre: "IPsec : AH, ESP et les deux modes",
          points: [
            "AH (Authentication Header) : intégrité, authentification, anti-rejeu — pas de chiffrement",
            "ESP (Encapsulating Security Payload) : chiffrement et confidentialité du contenu",
            "Mode transport : seule la charge utile est chiffrée, de pair à pair",
            "Mode tunnel : paquet entier chiffré, de passerelle à passerelle",
            "IKE et ISAKMP gèrent les clés ; chaque session repose sur des Security Associations"
          ],
          narration: "IPsec est la suite standard pour sécuriser IP, omniprésente dans les VPN. Retenez la répartition des rôles : l'Authentication Header garantit l'intégrité, l'authentification et la protection contre le rejeu, mais ne chiffre rien ; l'Encapsulating Security Payload apporte le chiffrement et donc la confidentialité. En mode transport, seule la charge utile est protégée, ce qui convient aux échanges de machine à machine ; en mode tunnel, c'est le paquet entier, en-tête compris, idéal entre deux passerelles de sites. Les clés sont négociées par IKE, qui s'appuie sur ISAKMP pour organiser les Security Associations, chacune représentant une connexion simplex.",
          astuce: "💡 Conseil examen : AH authentifie sans chiffrer, ESP chiffre. Si la question parle de confidentialité, la réponse contient ESP."
        },
        {
          type: "standard",
          titre: "SSH, SFTP et Kerberos",
          points: [
            "SSH : administration distante entièrement chiffrée sur TCP 22",
            "SFTP : transfert de fichiers chiffré s'appuyant sur SSH",
            "Kerberos : authentification réseau et SSO sur les LAN, coeur d'Active Directory"
          ],
          narration: "SSH est le protocole d'administration à distance par excellence : tout le trafic est chiffré, contrairement au vieux Telnet qui transmet tout en clair. SFTP s'appuie sur SSH pour transférer des fichiers de manière sécurisée. Kerberos, de son côté, n'est pas un protocole de chiffrement de flux mais un protocole d'authentification réseau : il fournit l'authentification unique, le single sign-on, sur les réseaux locaux, et c'est lui qui fait battre le coeur d'Active Directory."
        },
        {
          type: "standard",
          titre: "Sécuriser le DNS et la messagerie",
          points: [
            "DNSSEC : signatures cryptographiques des réponses DNS contre le poisoning",
            "SPF : liste des serveurs autorisés à émettre pour un domaine",
            "DKIM : signature numérique des messages via une clé publiée en DNS",
            "DMARC : politique d'alignement s'appuyant sur SPF et DKIM",
            "S/MIME, STARTTLS et SMTPS implicite pour chiffrer les échanges"
          ],
          narration: "Le DNS et la messagerie sont nés sans sécurité, il faut donc la rajouter. DNSSEC signe cryptographiquement les réponses DNS, ce qui permet au client de vérifier leur authenticité et contrecarre l'empoisonnement de cache. Pour l'email, trois protocoles complémentaires luttent contre l'usurpation : SPF publie la liste des serveurs autorisés à émettre, DKIM signe chaque message avec une clé privée vérifiable en DNS, et DMARC définit la politique à appliquer quand l'alignement échoue, par exemple mettre en quarantaine ou rejeter. Enfin, S/MIME chiffre et signe les messages de bout en bout grâce à une PKI, tandis que STARTTLS ou le SMTPS implicite sur le port quatre-cent-soixante-cinq chiffrent le transport."
        },
        {
          type: "question",
          titre: "Contrôle de connaissance",
          points: ["AH ou ESP, il faut choisir."],
          narration: "Question de synthèse sur IPsec, un incontournable de l'examen.",
          q: "Une organisation exige la CONFIDENTIALITÉ des données échangées entre deux passerelles de sites via IPsec. Quelle combinaison est la PLUS appropriée ?",
          choix: [
            "AH en mode transport",
            "AH en mode tunnel",
            "ESP en mode tunnel",
            "ISAKMP en mode transport"
          ],
          reponse: 2,
          explication: "Seul ESP fournit le chiffrement, donc la confidentialité ; entre deux passerelles, le mode tunnel protège le paquet entier, en-tête compris. AH n'offre aucun chiffrement, quel que soit le mode, et ISAKMP est un cadre de gestion de clés, pas un mode de protection du trafic."
        },
        {
          type: "resume",
          titre: "Résumé de la leçon",
          points: [
            "IPv4 en 32 bits avec RFC 1918 et NAT/PAT ; IPv6 en 128 bits avec SLAAC",
            "Unicast, broadcast, multicast, anycast : quatre modes de diffusion",
            "TLS 1.2/1.3 et cryptographie hybride pour le web",
            "IPsec : AH pour l'authentification, ESP pour le chiffrement, transport ou tunnel",
            "DNSSEC, SPF, DKIM, DMARC et S/MIME sécurisent DNS et messagerie"
          ],
          narration: "En résumé, IP fournit l'acheminement mais aucune sécurité intrinsèque. Vous savez maintenant lire une adresse IPv4 en notation CIDR, situer les plages privées, et distinguer les quatre modes de diffusion jusqu'à l'anycast des CDN. Côté protection, TLS règne sur le web, IPsec sur les VPN avec son duo AH et ESP, SSH sur l'administration, et le trio SPF, DKIM, DMARC défend la messagerie. Ces protocoles reviendront sans cesse dans les questions du domaine."
        }
      ]
    },

    // ------------------------------------------------------------------
    // LEÇON 3 — Segmentation, SDN et architectures modernes
    // ------------------------------------------------------------------
    {
      id: "d4-l3",
      titre: "Segmentation, SDN et architectures modernes",
      duree: 12,
      slides: [
        {
          type: "intro",
          titre: "Diviser pour mieux protéger",
          points: [
            "La segmentation limite la propagation des attaques et les mouvements latéraux",
            "Du physique au logique : air gap, VLAN, VRF, microsegmentation",
            "Le SDN centralise l'intelligence du réseau"
          ],
          narration: "Un réseau à plat, où tout communique avec tout, est le rêve de l'attaquant : une seule machine compromise et tout le parc est à portée. La segmentation consiste à découper le réseau en zones aux politiques distinctes, du simple VLAN jusqu'à l'isolement physique complet. Nous verrons ensuite comment le Software Defined Networking et ses dérivés rendent cette segmentation programmable et dynamique."
        },
        {
          type: "standard",
          titre: "Segmentation physique",
          points: [
            "In-band management : administration via le réseau de production, moins sûr",
            "Out-of-band management : réseau d'administration dédié et séparé",
            "Air gap : isolement physique et logique total, typique des ICS",
            "Screened subnet (DMZ) : zone tampon entre Internet et le réseau interne"
          ],
          narration: "Commençons par la segmentation physique. Administrer ses équipements in-band, c'est-à-dire via le même réseau que les données de production, est pratique mais risqué ; l'administration out-of-band, sur un réseau dédié, est nettement plus sûre. À l'extrême, l'air gap isole totalement un segment, physiquement et logiquement : c'est la norme pour les systèmes de contrôle industriels sensibles. Enfin, le screened subnet, l'ancienne DMZ, place les serveurs exposés à Internet dans une zone tampon encadrée par des pare-feux, afin de protéger le réseau interne."
        },
        {
          type: "standard",
          titre: "Segmentation logique : VLAN, VRF et domaines virtuels",
          points: [
            "VLAN : segmentation de couche 2 imposée par les switches ; routage requis entre VLANs",
            "VRF : plusieurs tables de routage indépendantes sur un même routeur, en couche 3",
            "Virtual domains : plusieurs instances de pare-feu virtuelles dans un même boîtier"
          ],
          narration: "La segmentation logique découpe un même matériel en plusieurs réseaux virtuels. Le VLAN partitionne un réseau physique en segments de couche deux : pour passer d'un VLAN à l'autre, il faut obligatoirement une fonction de routage, ce qui crée un point de contrôle. Le Virtual Routing and Forwarding transpose l'idée en couche trois : plusieurs tables de routage cohabitent sur le même routeur, ce qui autorise même des adresses IP qui se recouvrent. Les domaines virtuels, enfin, permettent de créer plusieurs pare-feux logiques indépendants dans un seul équipement physique."
        },
        {
          type: "standard",
          titre: "Microsegmentation et Zero Trust",
          points: [
            "Zones très petites, parfois réduites à une seule machine ou un seul serveur",
            "Pare-feux distribués appliqués à l'interface de chaque VM ou conteneur",
            "IDS et IPS déployés au plus près des charges de travail",
            "Objectif : bloquer les mouvements latéraux, vérifier chaque accès"
          ],
          narration: "La microsegmentation pousse la logique jusqu'au bout : chaque serveur critique, voire chaque machine virtuelle, devient sa propre zone de sécurité avec ses propres règles. Au lieu d'un pare-feu central, on distribue des pare-feux virtuels directement sur l'interface réseau de chaque charge de travail. C'est la brique technique du Zero Trust : on ne fait confiance à rien, on vérifie l'identité et le contexte de chaque requête avant d'ouvrir l'accès à la micro-zone. Le grand bénéfice, c'est l'arrêt net des mouvements latéraux d'un attaquant.",
          astuce: "💡 Conseil examen : si la question associe « limiter le mouvement latéral » et « Zero Trust », pensez microsegmentation."
        },
        {
          type: "schema",
          titre: "SDN : les trois plans du réseau",
          points: [
            "Plan d'application : les applications dialoguent avec le contrôleur via des API",
            "Plan de contrôle : l'intelligence centralisée qui calcule les chemins",
            "Plan de données : les équipements qui commutent les paquets"
          ],
          schema: {
            type: "flow",
            items: ["Plan d'application (API northbound)", "Plan de contrôle (contrôleur SDN)", "Plan de données (forwarding)"]
          },
          narration: "Le Software Defined Networking sépare l'intelligence du réseau de son exécution. Dans un réseau classique, chaque switch possède son propre plan de contrôle et décide seul où envoyer les paquets. Dans un SDN, le plan de contrôle est centralisé dans un contrôleur, et les équipements se contentent d'appliquer ses instructions dans le plan de données. Les interfaces northbound relient le contrôleur aux applications situées au-dessus, les interfaces southbound le relient aux équipements situés en dessous. On ajoute souvent un plan de management, qui supervise et configure l'ensemble."
        },
        {
          type: "standard",
          titre: "SD-WAN, VXLAN et NFV",
          points: [
            "SD-WAN : extension du SDN aux liaisons WAN, gère plusieurs ISP et le cloud",
            "VXLAN : étend les VLANs à travers les sous-réseaux, jusqu'à 16 millions de segments",
            "NFV : virtualise les fonctions réseau — pare-feu, NAT, IDS — hors du matériel dédié"
          ],
          narration: "Le SD-WAN applique les principes du SDN aux liaisons longue distance : il pilote plusieurs opérateurs et types de liens pour optimiser coût, débit et fiabilité, ce qui accompagne parfaitement les migrations vers le cloud. Le VXLAN, lui, encapsule des trames de couche deux dans des paquets de couche trois : on peut ainsi étirer un segment logique à travers des sous-réseaux et des sites distants, avec jusqu'à seize millions de réseaux virtuels contre quatre mille quatre-vingt-seize VLANs classiques ; c'est aussi un outil de microsegmentation. Enfin, la Network Function Virtualization transforme les fonctions réseau, pare-feu, NAT, détection d'intrusion, en logiciels découplés du matériel."
        },
        {
          type: "question",
          titre: "Contrôle de connaissance",
          points: ["SDN : qui décide, qui exécute ?"],
          narration: "Vérifions la compréhension des plans du SDN, un sujet que l'examen adore.",
          q: "Dans une architecture SDN, quel plan détermine le chemin optimal que doivent emprunter les paquets ?",
          choix: [
            "Le plan de données",
            "Le plan de contrôle",
            "Le plan de management",
            "Le plan d'application"
          ],
          reponse: 1,
          explication: "Le plan de contrôle est l'intelligence du réseau : il calcule les routes et transmet ses décisions au plan de données, qui se contente de commuter les paquets. Le plan de management supervise et configure l'ensemble, et le plan d'application héberge les applications qui dialoguent avec le contrôleur via des API."
        },
        {
          type: "standard",
          titre: "Flux de trafic, edge et CDN",
          points: [
            "Trafic north-south : entre le datacenter et l'extérieur",
            "Trafic east-west : latéral, entre serveurs au sein du datacenter",
            "Edge networks : rapprocher les services de l'utilisateur pour réduire la latence",
            "CDN : contenu distribué géographiquement ; peering entre réseaux ; VPC dans le cloud"
          ],
          narration: "Deux directions structurent l'analyse du trafic : le nord-sud, qui entre et sort du datacenter vers les clients, et l'est-ouest, qui circule latéralement entre les serveurs internes. La microsegmentation vise justement ce trafic est-ouest, angle mort des défenses périmétriques classiques. Les réseaux edge et les CDN rapprochent contenus et services de l'utilisateur final pour réduire la latence, souvent grâce à l'anycast. Le peering interconnecte directement deux réseaux sans transiter par un tiers, et dans le cloud, le Virtual Private Cloud offre une portion logiquement isolée de l'infrastructure d'un fournisseur public."
        },
        {
          type: "standard",
          titre: "Supervision et métriques de performance",
          points: [
            "Bandwidth : capacité théorique ; throughput : débit réellement atteint",
            "Latency : temps d'aller-retour ; jitter : variation de la latence",
            "Signal-to-noise ratio élevé souhaité ; traffic shaping pour prioriser la voix",
            "Observabilité, gestion de capacité et détection de pannes"
          ],
          narration: "Un réseau sécurisé doit aussi être supervisé et performant. Distinguez la bande passante, capacité théorique maximale, du débit réel effectivement transféré. La latence mesure le temps d'aller-retour d'un signal, et le jitter sa variation dans le temps : la voix sur IP déteste le jitter. On cherche donc une latence et un jitter faibles, un rapport signal sur bruit élevé et un débit élevé. Le traffic shaping priorise les flux critiques, la gestion de capacité anticipe la demande, et l'observabilité donne la visibilité nécessaire pour détecter pannes et anomalies."
        },
        {
          type: "resume",
          titre: "Résumé de la leçon",
          points: [
            "Segmentation physique : in-band, out-of-band, air gap, screened subnet",
            "Segmentation logique : VLAN en couche 2, VRF en couche 3, domaines virtuels",
            "Microsegmentation et pare-feux distribués : socle du Zero Trust",
            "SDN : contrôle centralisé ; SD-WAN pour le WAN ; VXLAN pour étirer les segments",
            "North-south contre east-west ; edge, CDN, peering et VPC"
          ],
          narration: "Retenez la gradation : segmentation physique jusqu'à l'air gap pour les systèmes les plus critiques, segmentation logique avec VLAN et VRF pour le quotidien, et microsegmentation pour bâtir le Zero Trust en bloquant les mouvements latéraux. Le SDN centralise le plan de contrôle, le SD-WAN étend cette logique aux liaisons distantes et le VXLAN affranchit les segments des contraintes géographiques. Enfin, pensez toujours aux deux axes de trafic, nord-sud et est-ouest : les architectures modernes se jugent sur leur capacité à contrôler les deux."
        }
      ]
    },

    // ------------------------------------------------------------------
    // LEÇON 4 — Réseaux sans fil et mobiles
    // ------------------------------------------------------------------
    {
      id: "d4-l4",
      titre: "Réseaux sans fil : Wi-Fi, Bluetooth, cellulaire",
      duree: 12,
      slides: [
        {
          type: "intro",
          titre: "L'air, un support que tout le monde partage",
          points: [
            "Réseaux unbound : radio, lumière, satellite — pas de câble à protéger",
            "Le signal déborde des murs : le chiffrement est vital",
            "Du WEP cassé au WPA3 moderne : une histoire d'erreurs corrigées"
          ],
          narration: "Les réseaux sans fil, dits unbound, transmettent par ondes radio ou lumière : impossible d'enfermer le signal dans un câble, il traverse les murs et atteint le parking. La sécurité repose donc entièrement sur le chiffrement et l'authentification. L'histoire du Wi-Fi est une succession de protocoles cassés puis remplacés, et l'examen adore vous demander lequel utiliser aujourd'hui et pourquoi les anciens ont échoué."
        },
        {
          type: "standard",
          titre: "WEP et WPA : les leçons du passé",
          points: [
            "WEP : clé RC4 statique partagée, IV court transmis en clair, aucune intégrité sérieuse",
            "WPA avec TKIP : rustine temporaire, aujourd'hui dépréciée",
            "LEAP, propriétaire Cisco : à éviter au profit d'EAP-TLS"
          ],
          narration: "Le WEP, défini par le standard huit-cent-deux point onze d'origine, utilisait une clé RC4 statique partagée par tout le monde, avec un vecteur d'initialisation court transmis en clair et réutilisé : il se casse en quelques minutes. Le WPA et son protocole TKIP ont servi de rustine en attendant mieux, mais TKIP est lui aussi déprécié. Même sort pour LEAP, l'alternative propriétaire de Cisco. Le message de l'examen est simple : WEP, WPA, TKIP et LEAP appartiennent au musée."
        },
        {
          type: "standard",
          titre: "WPA2 : AES-CCMP, personal et enterprise",
          points: [
            "IEEE 802.11i : WPA2 remplace WEP et WPA avec AES-CCMP",
            "Mode personal (PSK) : passphrase partagée, adapté au domicile",
            "Mode enterprise : 802.1X/EAP avec serveur d'authentification et comptes individuels"
          ],
          narration: "WPA2, issu du standard huit-cent-deux point onze i, a introduit le chiffrement AES avec le protocole CCMP, solide encore aujourd'hui. Il existe en deux modes : le mode personnel, à clé pré-partagée, où tout le monde connaît la même passphrase, convient à la maison ; le mode entreprise s'appuie sur huit-cent-deux point un X et EAP, avec un serveur d'authentification et des identifiants individuels pour chaque utilisateur. En entreprise, la clé partagée est une faiblesse : un départ de collaborateur devrait imposer de la changer partout."
        },
        {
          type: "standard",
          titre: "WPA3 et SAE",
          points: [
            "WPA3 personal : AES CCMP 128 bits ; WPA3 enterprise : 192 bits",
            "SAE — Simultaneous Authentication of Equals — remplace le PSK",
            "Dragonfly Key Exchange : preuve à divulgation nulle dérivée de Diffie-Hellman",
            "Protège contre les attaques par dictionnaire hors ligne"
          ],
          narration: "WPA3 est le standard actuel. Sa grande nouveauté est SAE, la Simultaneous Authentication of Equals, qui remplace le mode à clé pré-partagée de WPA2. SAE réalise un échange Dragonfly, dérivé de Diffie-Hellman, sous forme de preuve à divulgation nulle de connaissance : le mot de passe n'est jamais transmis, et un attaquant qui capture l'échange ne peut plus mener d'attaque par dictionnaire hors ligne. La version entreprise de WPA3 monte le chiffrement à cent-quatre-vingt-douze bits.",
          astuce: "💡 Conseil examen : associez WPA3 à SAE et Dragonfly ; c'est la réponse attendue dès qu'on parle d'authentification Wi-Fi moderne sans serveur d'entreprise."
        },
        {
          type: "standard",
          titre: "802.1X, EAP et l'authentification d'entreprise",
          points: [
            "802.1X : contrôle d'accès réseau basé sur les ports, proxy vers un serveur AAA",
            "EAP : cadre d'authentification, pas une méthode unique",
            "EAP-TLS : certificats des deux côtés, référence de sécurité",
            "PEAP : encapsule EAP dans un tunnel TLS ; RADIUS sur UDP 1812, TACACS+ sur TCP 49"
          ],
          narration: "Le standard huit-cent-deux point un X, nommé Port-Based Network Access Control, bloque toute communication tant que le client ne s'est pas authentifié auprès d'un service dédié, typiquement un serveur RADIUS. EAP n'est pas une méthode d'authentification mais un cadre qui en accueille plusieurs : mots de passe, certificats, cartes à puce. EAP-TLS, avec certificats côté client et côté serveur, est la référence ; PEAP protège les méthodes EAP plus faibles en les encapsulant dans un tunnel TLS. Évitez EAP-MD5 et les méthodes en clair.",
          astuce: "💡 Conseil examen : 802.1X n'est pas réservé au Wi-Fi, il contrôle aussi l'accès aux ports des switches filaires."
        },
        {
          type: "question",
          titre: "Contrôle de connaissance",
          points: ["Choisir le bon standard sans fil."],
          narration: "Mettez-vous dans la peau du RSSI qui déploie un nouveau réseau sans fil d'entreprise.",
          q: "Quel mécanisme de WPA3 empêche les attaques par dictionnaire hors ligne sur le mot de passe du réseau ?",
          choix: [
            "TKIP",
            "SAE avec l'échange Dragonfly",
            "WPS avec code PIN",
            "Le filtrage d'adresses MAC"
          ],
          reponse: 1,
          explication: "SAE, Simultaneous Authentication of Equals, effectue un échange Dragonfly en preuve à divulgation nulle : le mot de passe n'est jamais exposé, ce qui rend inopérantes les attaques par dictionnaire hors ligne. TKIP est un protocole déprécié de WPA, le PIN WPS est justement vulnérable au brute-force, et le filtrage MAC se contourne trivialement par usurpation d'adresse."
        },
        {
          type: "standard",
          titre: "Hygiène Wi-Fi : SSID, WPS, site survey",
          points: [
            "SSID : nom du réseau ; ESSID partagé entre APs, BSSID unique par AP",
            "WPS : PIN de 8 chiffres validé en deux moitiés, vulnérable au brute-force — désactivez-le",
            "Site survey : cartographier signal et interférences",
            "Captive portal pour les invités ; MAC filtering : obstacle faible"
          ],
          narration: "Quelques réflexes d'hygiène complètent le chiffrement. Le SSID est le nom diffusé du réseau ; plusieurs points d'accès peuvent partager le même ESSID pour permettre l'itinérance, chacun gardant un BSSID unique, son adresse MAC. Le Wi-Fi Protected Setup est une vraie faille : son code PIN de huit chiffres se valide en deux moitiés, souvent sans limitation de tentatives, donc la meilleure protection est de le désactiver. Un site survey mesure la couverture radio pour éviter que le signal ne déborde inutilement, le portail captif encadre les invités, et rappelez-vous que le filtrage MAC ne bloque que les attaquants paresseux."
        },
        {
          type: "standard",
          titre: "Bluetooth, Zigbee, NFC et RFID",
          points: [
            "Bluejacking : messages non sollicités ; bluesnarfing : vol de données ; bluebugging : prise de contrôle",
            "Réflexes Bluetooth : désactiver la découverte, changer le PIN, couper hors usage",
            "Zigbee (IEEE 802.15.4) : IoT basse consommation, chiffrement AES 128 bits",
            "RFID et NFC : identification radio courte portée, pensez au paiement sans contact"
          ],
          narration: "Le Bluetooth a sa propre famille d'attaques, à connaître par ordre de gravité : le bluejacking envoie des messages non sollicités, gênant mais bénin ; le bluesnarfing vole des données sur l'appareil ; et le bluebugging prend carrément le contrôle du téléphone, jusqu'à écouter les appels. Les parades sont simples : mode non découvrable, PIN modifié, Bluetooth coupé hors utilisation. Zigbee, basé sur huit-cent-deux point quinze point quatre, connecte les objets IoT à basse consommation et chiffre en AES cent-vingt-huit bits. Enfin, RFID et NFC assurent l'identification à courte portée, le NFC ajoutant la communication bidirectionnelle utilisée par le paiement sans contact."
        },
        {
          type: "standard",
          titre: "Cellulaire et satellite",
          points: [
            "4G : LTE et WiMAX ; 5G : jusqu'à 10 Gbps, meilleure protection de l'identité de l'abonné",
            "Le chiffrement s'arrête souvent à l'antenne : ajoutez TLS ou un VPN",
            "Tours simulées : risque d'attaque on-path sur mobile",
            "Satellites : LEO à faible latence comme Starlink, MEO, GEO fixe à latence élevée"
          ],
          narration: "Sur les réseaux cellulaires, le trafic est généralement chiffré entre le mobile et l'antenne, mais peut circuler en clair ensuite : ne considérez jamais le réseau de l'opérateur comme sûr et superposez TLS ou un VPN. La 5G améliore la protection de l'identité de l'abonné et impose l'authentification mutuelle, ce qui complique la simulation de tours malveillantes, un vecteur classique d'attaque on-path. Côté satellites, retenez les trois orbites : les constellations basses LEO offrent une faible latence, les orbites moyennes un compromis, et l'orbite géostationnaire une couverture fixe très large mais une latence élevée."
        },
        {
          type: "resume",
          titre: "Résumé de la leçon",
          points: [
            "WEP, WPA/TKIP et LEAP : obsolètes ; WPA2 : AES-CCMP ; WPA3 : SAE et Dragonfly",
            "802.1X/EAP : contrôle d'accès par port avec serveur AAA ; préférez EAP-TLS ou PEAP",
            "Désactivez WPS ; le filtrage MAC et le masquage de SSID ne sont pas des protections",
            "Bluetooth : bluejacking, bluesnarfing, bluebugging par gravité croissante",
            "Cellulaire et satellite : chiffrez par-dessus, le réseau de l'opérateur n'est pas de confiance"
          ],
          narration: "Retenez la chronologie Wi-Fi : WEP cassé, WPA et TKIP en sursis, WPA2 avec AES, et WPA3 avec SAE qui élimine les attaques par dictionnaire. En entreprise, l'authentification passe par huit-cent-deux point un X, EAP et un serveur RADIUS. Méfiez-vous des fausses protections comme le WPS, le filtrage MAC ou le masquage du SSID. Et pour le Bluetooth comme pour le cellulaire, le principe est le même : la couche radio n'est jamais une garantie, chiffrez au-dessus."
        }
      ]
    },

    // ------------------------------------------------------------------
    // LEÇON 5 — Attaques réseau courantes
    // ------------------------------------------------------------------
    {
      id: "d4-l5",
      titre: "Attaques réseau courantes et contre-mesures",
      duree: 11,
      slides: [
        {
          type: "intro",
          titre: "Connaître l'attaquant pour concevoir la défense",
          points: [
            "Déni de service : saturer la disponibilité",
            "On-path (MITM) : s'interposer dans la communication",
            "Spoofing et poisoning : mentir sur son identité ou corrompre les annuaires"
          ],
          narration: "Pour l'examen, il faut savoir reconnaître une attaque à partir de sa description et proposer la meilleure contre-mesure. Les attaques réseau se regroupent en trois grandes familles : celles qui saturent la disponibilité, comme les dénis de service ; celles qui s'interposent dans les échanges, les attaques on-path autrefois appelées man-in-the-middle ; et celles qui trompent les mécanismes d'adressage, le spoofing et le poisoning. Passons-les en revue."
        },
        {
          type: "standard",
          titre: "DoS et DDoS",
          points: [
            "SYN flood : inonder de demandes de connexion jamais achevées",
            "DDoS : attaque distribuée depuis un botnet de machines compromises",
            "Contre-mesures : filtrage, rate limiting, services anti-DDoS, CDN"
          ],
          narration: "Le déni de service vise la disponibilité. Le SYN flood exploite la poignée de main TCP : l'attaquant envoie des SYN en masse sans jamais terminer la connexion, jusqu'à épuiser les ressources du serveur. La version distribuée, le DDoS, mobilise un botnet de milliers de machines compromises, ce qui rend le simple blocage d'adresse inefficace. La défense combine le filtrage en amont, la limitation de débit, les services spécialisés d'atténuation et l'absorption par les CDN."
        },
        {
          type: "standard",
          titre: "Smurf, ping of death et teardrop",
          points: [
            "Smurf : echo request ICMP envoyé en broadcast avec l'adresse de la victime usurpée — amplification",
            "Ping of death : paquets ping surdimensionnés qui font planter la cible",
            "Teardrop : fragments IP aux offsets incohérents qui cassent le réassemblage"
          ],
          narration: "Trois classiques historiques restent au programme. L'attaque smurf envoie une requête d'écho ICMP à l'adresse de broadcast d'un réseau en usurpant l'adresse de la victime : tous les hôtes répondent à la victime en même temps, c'est le principe du réseau d'amplification. Le ping of death envoie des paquets ping surdimensionnés qui provoquaient gel ou redémarrage des systèmes anciens. Le teardrop, enfin, expédie des fragments IP dont les décalages se chevauchent, ce qui plantait le réassemblage. Retenez surtout leurs mécanismes : amplification, dépassement de taille et fragmentation malformée.",
          astuce: "💡 Conseil examen : « broadcast + adresse source usurpée + ICMP » égale smurf ; « fragments qui se chevauchent » égale teardrop."
        },
        {
          type: "standard",
          titre: "Attaques on-path et ARP poisoning",
          points: [
            "On-path (MITM) : l'attaquant s'interpose pour lire ou modifier les échanges",
            "ARP poisoning : associer la MAC de l'attaquant à l'IP de la passerelle",
            "Contre-mesures : chiffrement de bout en bout, dynamic ARP inspection, segmentation"
          ],
          narration: "Dans une attaque on-path, l'ancien man-in-the-middle, l'attaquant s'insère entre deux interlocuteurs pour intercepter, voire modifier le trafic. Sur un réseau local, la méthode reine est l'empoisonnement ARP : l'attaquant diffuse de fausses réponses ARP pour associer sa propre adresse MAC à l'adresse IP de la passerelle par défaut ; tout le trafic sortant transite alors par lui. Les parades sont le chiffrement de bout en bout, qui rend l'interception stérile, l'inspection ARP dynamique sur les switches et une bonne segmentation."
        },
        {
          type: "standard",
          titre: "DNS poisoning et détournement de domaine",
          points: [
            "DNS poisoning : fausses réponses DNS, cache corrompu, fichier hosts altéré, rogue DNS",
            "Domain hijacking : modification frauduleuse de l'enregistrement du domaine",
            "Contre-mesures : DNSSEC, verrouillage registrar, surveillance des enregistrements"
          ],
          narration: "L'empoisonnement DNS falsifie la résolution de noms : serveur DNS pirate, corruption du cache d'un résolveur, altération du fichier hosts ou usurpation de réponses aux requêtes. La victime croit visiter son site de banque et atterrit chez l'attaquant. Le détournement de domaine, lui, s'attaque à l'enregistrement même du nom auprès du registrar, sans autorisation du propriétaire. Les défenses sont DNSSEC pour authentifier les réponses, le verrouillage des modifications chez le registrar, et la surveillance active des enregistrements."
        },
        {
          type: "standard",
          titre: "Spoofing, VLAN hopping et CAM flooding",
          points: [
            "IP et MAC spoofing : usurper une adresse pour contourner les filtres",
            "VLAN hopping : sauter vers un VLAN normalement inaccessible",
            "CAM table flooding : saturer la table du switch pour le forcer à diffuser — port security"
          ],
          narration: "L'usurpation d'adresse, IP ou MAC, permet de se faire passer pour un équipement de confiance et de contourner les listes de contrôle. Le VLAN hopping envoie des trames spécialement forgées pour atteindre un VLAN auquel le port de l'attaquant ne devrait pas donner accès : la parade passe par la configuration rigoureuse des trunks. Le CAM table flooding inonde le switch de fausses adresses MAC jusqu'à saturer sa table : le switch se met alors à diffuser toutes les trames comme un hub, offrant l'écoute à l'attaquant. La fonction port security des switches bloque cette attaque."
        },
        {
          type: "question",
          titre: "Contrôle de connaissance",
          points: ["Identifier l'attaque à partir de son mécanisme."],
          narration: "À vous de jouer : reconnaissez l'attaque décrite, comme le jour de l'examen.",
          q: "Un attaquant envoie des requêtes echo ICMP à l'adresse de broadcast d'un réseau en usurpant l'adresse IP de sa victime, qui est alors submergée de réponses. De quelle attaque s'agit-il ?",
          choix: [
            "Teardrop",
            "SYN flood",
            "Smurf",
            "Ping of death"
          ],
          reponse: 2,
          explication: "C'est la signature exacte de l'attaque smurf : un réseau d'amplification répond en masse à la victime dont l'adresse a été usurpée dans la requête ICMP de broadcast. Le teardrop joue sur les fragments IP malformés, le SYN flood sur des connexions TCP inachevées, et le ping of death sur des paquets surdimensionnés."
        },
        {
          type: "standard",
          titre: "Attaques sans fil : evil twin et désassociation",
          points: [
            "Evil twin : faux point d'accès imitant le SSID légitime pour capter le trafic",
            "Attaque de désassociation : trames de gestion forgées qui déconnectent les clients",
            "Attaques IV : exploitation de vecteurs d'initialisation prévisibles ou réutilisés",
            "Souvent combinées : déconnecter la victime pour la pousser vers le faux AP"
          ],
          narration: "Côté sans fil, l'evil twin est un point d'accès pirate qui copie le nom du réseau légitime : les victimes s'y connectent de bonne foi et livrent leur trafic à l'attaquant. L'attaque de désassociation, ou deauthentication, exploite les trames de gestion du Wi-Fi pour déconnecter de force les clients ; elle sert de déni de service, mais aussi de rabatteur vers l'evil twin. Les attaques sur vecteur d'initialisation, qui ont tué le WEP, exploitent des IV courts, prévisibles ou réutilisés pour retrouver la clé. Les protections des trames de gestion introduites avec WPA3 réduisent fortement ces risques."
        },
        {
          type: "standard",
          titre: "Vue d'ensemble des contre-mesures",
          points: [
            "Chiffrer partout : TLS, IPsec, WPA3 — l'interception devient inutile",
            "Durcir la couche 2 : port security, dynamic ARP inspection, trunks maîtrisés",
            "Authentifier les annuaires : DNSSEC, SPF, DKIM, DMARC",
            "Superviser : IDS/IPS, NetFlow, journaux — et segmenter pour contenir"
          ],
          narration: "Prenons de la hauteur, comme le ferait un manager. Le chiffrement systématique neutralise la valeur de l'interception ; le durcissement de la couche deux, avec port security et inspection ARP, coupe les attaques locales ; l'authentification des infrastructures de noms et de messagerie ferme la porte aux usurpations ; et la supervision, couplée à la segmentation, permet de détecter puis de contenir ce qui passe malgré tout. À l'examen, la meilleure réponse est rarement un gadget : c'est la mesure qui traite la cause à l'échelle de l'organisation.",
          astuce: "💡 Conseil examen : entre deux bonnes réponses techniques, choisissez celle qui protège le plus largement et durablement."
        },
        {
          type: "resume",
          titre: "Résumé de la leçon",
          points: [
            "DoS/DDoS : SYN flood, smurf par amplification, ping of death, teardrop",
            "On-path via ARP poisoning ; parades : chiffrement et dynamic ARP inspection",
            "DNS poisoning et domain hijacking ; parade : DNSSEC et verrouillage registrar",
            "Couche 2 : spoofing, VLAN hopping, CAM flooding ; parade : port security",
            "Sans fil : evil twin, désassociation, attaques IV ; parade : WPA3"
          ],
          narration: "Vous savez désormais reconnaître les grandes attaques réseau à leur mécanisme : l'amplification du smurf, les fragments du teardrop, les fausses réponses de l'ARP poisoning, le faux jumeau du Wi-Fi. Face à chacune, associez le bon réflexe : chiffrement de bout en bout, durcissement des switches, DNSSEC, WPA3 et supervision continue. Cette gymnastique attaque contre contre-mesure est exactement ce que l'examen attend de vous."
        }
      ]
    },

    // ------------------------------------------------------------------
    // LEÇON 6 — Équipements, pare-feux, NAC et canaux sécurisés
    // ------------------------------------------------------------------
    {
      id: "d4-l6",
      titre: "Équipements, pare-feux, NAC, VPN et canaux sécurisés",
      duree: 13,
      slides: [
        {
          type: "intro",
          titre: "Les briques de la défense réseau",
          points: [
            "Des équipements de base aux pare-feux nouvelle génération",
            "Contrôler qui entre : NAC et authentification",
            "Protéger les canaux : VPN, VoIP, accès distant et tiers"
          ],
          narration: "Dernière leçon du domaine : les composants qui matérialisent la sécurité réseau. Nous partirons des équipements de base et des supports de transmission, puis nous monterons vers les pare-feux et les proxys, le contrôle d'accès réseau, et enfin la protection des canaux de communication, du VPN à la voix sur IP en passant par la connectivité avec les tiers."
        },
        {
          type: "standard",
          titre: "Équipements réseau essentiels",
          points: [
            "Repeater et hub en couche 1 ; bridge et switch en couche 2 ; routeur en couche 3",
            "Modem et CSU/DSU : conversion analogique-numérique vers l'opérateur",
            "Load balancer : active-active pleine capacité, active-passive capacité constante",
            "Alimentation redondante sur les équipements critiques"
          ],
          narration: "Replaçons chaque équipement sur la pile. Le répéteur et le hub régénèrent bêtement le signal en couche physique. Le bridge relie deux segments et le switch commute les trames en couche deux, créant au passage des domaines de collision séparés. Le routeur interconnecte les réseaux en couche trois. Le modem et le couple CSU-DSU convertissent les signaux vers le réseau de l'opérateur. Les répartiteurs de charge existent en deux modes : l'actif-actif utilise toutes les ressources en temps normal mais perd de la capacité en cas de panne, tandis que l'actif-passif garde une réserve dormante et offre une capacité constante même en incident."
        },
        {
          type: "standard",
          titre: "Supports de transmission",
          points: [
            "UTP : économique et répandu ; STP : blindé contre les interférences EMI",
            "Catégories : Cat 5e pour 1 Gbps, Cat 6a pour 10 Gbps sur 100 mètres",
            "Fibre optique : immunisée aux EMI ; monomode longue distance, multimode courte",
            "Première cause de panne réseau : câbles défaillants ou mal configurés"
          ],
          narration: "Le cuivre à paires torsadées domine les réseaux locaux : la version non blindée UTP est économique, la version blindée STP résiste aux interférences électromagnétiques des environnements industriels. Retenez les catégories utiles : Cat cinq e pour le gigabit, Cat six a pour dix gigabits sur cent mètres. La fibre optique transmet la lumière, ce qui l'immunise contre les interférences et les écoutes électromagnétiques : le monomode couvre de longues distances, le multimode les liaisons courtes du datacenter. Souvenez-vous enfin que la cause la plus fréquente d'indisponibilité réseau reste le câble défaillant ou mal branché, d'où l'importance de la sécurité physique du câblage."
        },
        {
          type: "schema",
          titre: "La famille des pare-feux",
          points: [
            "Du simple filtre de paquets au pare-feu applicatif spécialisé"
          ],
          schema: {
            type: "flow",
            items: [
              "Stateless (filtrage de paquets)",
              "Stateful (suivi des connexions)",
              "NGFW (inspection applicative, IPS, identités)",
              "WAF (protection dédiée des applications web)"
            ]
          },
          narration: "Les pare-feux ont évolué en générations. Le pare-feu stateless filtre chaque paquet isolément selon adresses et ports, sans mémoire. Le pare-feu stateful suit l'état des connexions : il sait qu'une réponse correspond à une requête légitime, ce qui le rend bien plus pertinent. Le pare-feu nouvelle génération, le NGFW, ajoute l'inspection applicative profonde, la prévention d'intrusion et la prise en compte des identités des utilisateurs. Enfin, le Web Application Firewall se spécialise dans le trafic HTTP et HTTPS pour protéger les applications web contre les injections et autres attaques applicatives."
        },
        {
          type: "standard",
          titre: "Proxys et screened subnet",
          points: [
            "Forward proxy : côté client, filtrage, cache et anonymisation",
            "Reverse proxy : devant les serveurs, répartition de charge et masquage du backend",
            "Transparent : sans configuration client ; nontransparent : configuration explicite",
            "Screened subnet (DMZ) : héberger les services exposés entre deux niveaux de pare-feu"
          ],
          narration: "Le proxy s'interpose entre clients et serveurs. Le forward proxy sert les clients internes : filtrage de contenu, cache et anonymisation de leurs adresses. Le reverse proxy se place devant les serveurs : il répartit la charge, termine le TLS et masque l'architecture interne, souvent depuis un réseau de périmètre. Le proxy transparent intercepte le trafic sans aucune configuration côté client, quand le proxy non transparent exige une configuration explicite. Le screened subnet, l'ancienne DMZ, accueille les serveurs exposés à Internet dans une zone tampon contrôlée par des pare-feux, de sorte qu'une compromission n'ouvre pas le réseau interne."
        },
        {
          type: "standard",
          titre: "Network Access Control (NAC)",
          points: [
            "Vérifier la conformité d'un poste avant ou après son admission au réseau",
            "Preadmission : conformité exigée avant l'accès ; postadmission : contrôle selon l'activité",
            "Agent permanent ou dissolvable ; agentless via l'infrastructure existante",
            "Posture assessment : patchs, antivirus, configuration — accès basé sur le risque"
          ],
          narration: "Le Network Access Control applique la politique de sécurité à l'entrée du réseau : un poste non conforme, mal patché ou sans antivirus à jour, est bloqué ou mis en quarantaine. La philosophie preadmission exige la conformité avant d'accorder l'accès, la philosophie postadmission surveille l'activité après coup. Techniquement, on déploie soit un agent, permanent ou dissolvable au moment de la connexion, soit une approche agentless qui interroge l'infrastructure existante, pratique pour les imprimantes et objets connectés. L'évaluation de posture fait du NAC un contrôle d'accès fondé sur le risque, pilier d'une stratégie Zero Trust."
        },
        {
          type: "question",
          titre: "Contrôle de connaissance",
          points: ["Choisir le bon équipement pour le bon besoin."],
          narration: "Question de mise en situation, très proche du style de l'examen.",
          q: "Une organisation veut protéger spécifiquement son site de e-commerce contre les injections SQL et le cross-site scripting. QUEL équipement est le PLUS adapté ?",
          choix: [
            "Un pare-feu stateful",
            "Un Web Application Firewall (WAF)",
            "Un pare-feu à filtrage de paquets",
            "Un IDS réseau"
          ],
          reponse: 1,
          explication: "Le WAF inspecte le contenu applicatif HTTP et HTTPS et bloque les attaques propres aux applications web comme l'injection SQL ou le XSS. Un pare-feu stateful ou à filtrage de paquets travaille sur les adresses, ports et états de connexion, sans comprendre la logique applicative, et un IDS détecte sans bloquer nativement."
        },
        {
          type: "standard",
          titre: "VPN : protocoles et tunnels",
          points: [
            "PPTP : obsolète ; L2TP : pas de chiffrement seul, à coupler avec IPsec",
            "IPsec et TLS : les standards actuels ; WireGuard : moderne, code minimal, très rapide",
            "Full tunnel : tout le trafic passe par l'organisation",
            "Split tunnel : accès simultané au réseau interne et à Internet — risque de pont"
          ],
          narration: "Le VPN crée un tunnel chiffré à travers un réseau public. Côté protocoles, PPTP est obsolète et L2TP ne chiffre rien par lui-même, d'où le classique couple L2TP sur IPsec ; les standards actuels sont IPsec, TLS et le moderne WireGuard, apprécié pour son code minimal et ses performances. La configuration compte autant que le protocole : en full tunnel, tout le trafic du poste distant transite par l'organisation et ses contrôles ; en split tunnel, le poste accède en même temps au réseau interne et directement à Internet, ce qui crée un pont potentiel pour un attaquant. Pour l'examen, le split tunnel est un risque à signaler.",
          astuce: "💡 Conseil examen : L2TP seul ne chiffre pas ; la réponse sécurisée est toujours « L2TP/IPsec »."
        },
        {
          type: "standard",
          titre: "Voix et collaboration : sécuriser la VoIP",
          points: [
            "VoIP : protocole convergé encapsulant la voix dans IP ; SIP établit les sessions",
            "SIPS chiffre la signalisation avec TLS ; SRTP chiffre et authentifie les flux média",
            "VLAN voix dédié et QoS pour la priorité et l'isolement",
            "Héritage télécom : PBX à protéger, phreaking, vishing sur les canaux voix"
          ],
          narration: "La voix sur IP est l'exemple type de protocole convergé : l'audio et la vidéo voyagent dans des paquets IP ordinaires, donc avec les vulnérabilités du réseau IP. La signalisation SIP, qui établit et termine les appels, se protège avec SIPS, sa version chiffrée par TLS ; les flux média eux-mêmes se protègent avec SRTP, qui ajoute chiffrement, authentification et protection contre le rejeu. On isole la téléphonie dans un VLAN voix dédié, avec une qualité de service qui lui garantit la priorité. N'oubliez pas l'héritage télécom : les PBX se protègent comme n'importe quel serveur, et le phreaking, la fraude téléphonique, existe toujours."
        },
        {
          type: "standard",
          titre: "Accès distant et connectivité tierce",
          points: [
            "Jumpbox : point d'entrée unique et durci vers une zone sensible",
            "VDI : postes de travail virtualisés côté serveur, données hors de l'endpoint",
            "Télétravail : authentification forte, VPN, protection des endpoints, sensibilisation",
            "Tiers : MOU pour l'intention, ISA pour les exigences techniques de l'interconnexion, moindre privilège"
          ],
          narration: "L'accès distant multiplie les surfaces d'attaque, il faut donc l'encadrer par une politique dédiée. Le jumpbox concentre les connexions d'administration vers une zone sensible sur un serveur unique, durci et surveillé. La VDI garde les postes de travail dans le datacenter : l'utilisateur ne reçoit qu'un affichage, les données ne quittent pas le serveur. Pour le télétravail, combinez authentification forte, VPN, protection des endpoints et sensibilisation. Enfin, toute interconnexion avec un tiers mérite un cadre formel : le memorandum of understanding exprime l'intention, et l'interconnection security agreement fixe les exigences techniques et de sécurité du lien, le tout gouverné par le moindre privilège et une surveillance de l'usage."
        },
        {
          type: "resume",
          titre: "Résumé de la leçon",
          points: [
            "Équipements par couche ; load balancing active-active ou active-passive",
            "Pare-feux : stateless, stateful, NGFW, WAF ; proxys forward et reverse ; screened subnet",
            "NAC : preadmission ou postadmission, agent ou agentless, posture assessment",
            "VPN : IPsec, TLS, WireGuard ; méfiance envers le split tunneling",
            "VoIP : SIPS et SRTP ; accès distant via jumpbox et VDI ; tiers encadrés par MOU et ISA"
          ],
          narration: "Ce tour d'horizon clôt le domaine quatre. Vous savez situer chaque équipement sur la pile OSI, choisir le bon type de pare-feu selon la menace, et poser un NAC pour n'admettre que des postes conformes. Les canaux se protègent avec les bons protocoles : IPsec ou WireGuard pour les VPN, SIPS et SRTP pour la voix, et un cadre contractuel comme l'ISA pour les tiers. Gardez le réflexe du manager : défense en profondeur, moindre privilège et supervision permanente."
        }
      ]
    }
  ],

  // --------------------------------------------------------------------
  // QUIZ — questions de style examen CISSP
  // --------------------------------------------------------------------
  quiz: [
    {
      q: "À quelle couche du modèle OSI le protocole IP opère-t-il ?",
      choix: ["Couche 2 — Liaison de données", "Couche 3 — Réseau", "Couche 4 — Transport", "Couche 5 — Session"],
      reponse: 1,
      explication: "IP assure l'adressage logique et le routage des paquets, fonctions de la couche 3 (Réseau). La couche 2 manipule les trames et les adresses MAC, la couche 4 gère TCP et UDP, et la couche 5 gère les sessions de dialogue.",
      difficulte: 1
    },
    {
      q: "Quelle est l'unité de données (PDU) manipulée à la couche 2 du modèle OSI ?",
      choix: ["Le paquet", "Le segment", "La trame (frame)", "Le bit"],
      reponse: 2,
      explication: "La couche Liaison de données encapsule les paquets dans des trames, avec les adresses MAC source et destination. Le paquet appartient à la couche 3, le segment à la couche 4, et le bit à la couche 1.",
      difficulte: 1
    },
    {
      q: "Quel est l'ordre correct de la poignée de main en trois temps de TCP ?",
      choix: ["ACK, SYN, SYN-ACK", "SYN, ACK, SYN-ACK", "SYN, SYN-ACK, ACK", "SYN-ACK, SYN, ACK"],
      reponse: 2,
      explication: "Le client envoie SYN, le serveur répond SYN-ACK, et le client conclut par ACK : la connexion est établie. Les autres séquences ne respectent pas ce déroulement normalisé, régulièrement testé à l'examen.",
      difficulte: 1
    },
    {
      q: "Un administrateur constate qu'un poste a l'adresse 169.254.10.23. Quelle est la cause la PLUS probable ?",
      choix: [
        "Le poste utilise une adresse privée RFC 1918 normale",
        "Le poste n'a pas pu joindre de serveur DHCP et s'est auto-configuré via APIPA",
        "Le poste a été configuré en IPv6",
        "Le poste est victime d'un empoisonnement ARP"
      ],
      reponse: 1,
      explication: "La plage 169.254.0.0/16 correspond à l'APIPA : le poste se l'attribue automatiquement quand aucun serveur DHCP ne répond. Ce n'est pas une plage RFC 1918 (10/8, 172.16/12, 192.168/16), cela n'a rien à voir avec IPv6, et l'ARP poisoning ne change pas l'adresse IP du poste.",
      difficulte: 2
    },
    {
      q: "Combien d'adresses d'hôtes utilisables offre le réseau 192.168.10.0/24 ?",
      choix: ["256", "254", "255", "512"],
      reponse: 1,
      explication: "Un /24 laisse 8 bits pour les hôtes, soit 256 adresses, dont on retire l'adresse de réseau et l'adresse de broadcast : 254 adresses utilisables. Les autres valeurs oublient cette soustraction ou se trompent de masque.",
      difficulte: 2
    },
    {
      q: "Quel mode de diffusion envoie les données vers le noeud LE PLUS PROCHE parmi plusieurs partageant la même adresse ?",
      choix: ["Multicast", "Broadcast", "Unicast", "Anycast"],
      reponse: 3,
      explication: "L'anycast route la requête vers l'instance la plus proche ou la plus performante, mécanisme au coeur des CDN et du DNS mondial. Le multicast vise un groupe abonné, le broadcast tout le segment, l'unicast un destinataire unique.",
      difficulte: 1
    },
    {
      q: "Quel composant d'IPsec fournit la CONFIDENTIALITÉ des données ?",
      choix: [
        "Authentication Header (AH)",
        "Encapsulating Security Payload (ESP)",
        "Internet Key Exchange (IKE)",
        "Security Association (SA)"
      ],
      reponse: 1,
      explication: "ESP chiffre la charge utile et assure ainsi la confidentialité, en plus d'une intégrité et d'une authentification limitées. AH authentifie et protège l'intégrité mais ne chiffre pas, IKE négocie les clés, et la SA n'est que l'enregistrement des paramètres d'une session simplex.",
      difficulte: 2
    },
    {
      q: "Quelle affirmation décrit le MIEUX le mode tunnel d'IPsec ?",
      choix: [
        "Seule la charge utile du paquet est chiffrée, pour des échanges de pair à pair",
        "Le paquet entier, en-tête inclus, est chiffré, typiquement entre deux passerelles",
        "Seul l'en-tête est chiffré pour masquer les adresses",
        "Le chiffrement est délégué à TLS au-dessus d'IPsec"
      ],
      reponse: 1,
      explication: "En mode tunnel, tout le paquet d'origine est encapsulé et chiffré dans un nouveau paquet : c'est le mode des VPN de site à site entre passerelles. Le mode transport ne chiffre que la charge utile ; chiffrer seulement l'en-tête n'existe pas, et TLS est un protocole distinct.",
      difficulte: 2
    },
    {
      q: "Pourquoi HTTPS utilise-t-il une cryptographie dite hybride ?",
      choix: [
        "Parce qu'il chiffre deux fois les données pour plus de sécurité",
        "Parce qu'il utilise l'asymétrique pour échanger une clé de session, puis le symétrique pour le trafic",
        "Parce qu'il alterne aléatoirement entre deux algorithmes",
        "Parce qu'il combine hachage et compression"
      ],
      reponse: 1,
      explication: "TLS utilise la cryptographie asymétrique, lente mais sans secret partagé préalable, pour négocier une clé de session éphémère, puis bascule sur la cryptographie symétrique, rapide, pour chiffrer les échanges. Il n'y a ni double chiffrement systématique, ni alternance aléatoire, et le hachage sert à l'intégrité, pas au chiffrement.",
      difficulte: 2
    },
    {
      q: "Quelles versions de TLS une organisation devrait-elle exiger au minimum aujourd'hui ?",
      choix: ["SSL 3.0 et supérieur", "TLS 1.0 et supérieur", "TLS 1.1 et supérieur", "TLS 1.2 ou 1.3"],
      reponse: 3,
      explication: "TLS 1.0 et 1.1 sont officiellement dépréciés, et SSL est totalement obsolète. Seuls TLS 1.2 et 1.3 sont considérés comme sûrs ; TLS 1.3 supprime en outre les suites cryptographiques faibles et accélère la négociation.",
      difficulte: 1
    },
    {
      q: "Quel protocole authentifie cryptographiquement les réponses DNS pour empêcher l'empoisonnement de cache ?",
      choix: ["DoH", "DNSSEC", "DMARC", "LDAPS"],
      reponse: 1,
      explication: "DNSSEC signe les enregistrements DNS, permettant au résolveur de vérifier leur authenticité et leur intégrité, ce qui contre l'empoisonnement. DoH chiffre le transport des requêtes mais n'authentifie pas les données, DMARC concerne la messagerie, et LDAPS sécurise l'annuaire LDAP.",
      difficulte: 2
    },
    {
      q: "Quel protocole de messagerie permet au propriétaire d'un domaine de publier la politique à appliquer aux emails qui échouent aux contrôles SPF et DKIM ?",
      choix: ["S/MIME", "STARTTLS", "DMARC", "IMAPS"],
      reponse: 2,
      explication: "DMARC s'appuie sur SPF et DKIM, vérifie l'alignement du domaine émetteur et publie la politique à appliquer en cas d'échec : none, quarantine ou reject, avec des rapports. S/MIME chiffre et signe les messages de bout en bout, STARTTLS chiffre le transport, IMAPS sécurise la consultation des boîtes.",
      difficulte: 2
    },
    {
      q: "Quelle est la PRINCIPALE différence entre NAT et PAT ?",
      choix: [
        "NAT chiffre le trafic, PAT non",
        "PAT utilise les numéros de port pour multiplexer plusieurs clients derrière une adresse publique, NAT non",
        "NAT ne fonctionne qu'en IPv6",
        "PAT est réservé aux réseaux sans fil"
      ],
      reponse: 1,
      explication: "Le PAT traduit aussi le port source, ce qui permet à de nombreux clients internes de partager une seule adresse IP publique ; le NAT traduit les adresses sans toucher aux ports (un pour un ou plusieurs vers un pool). Ni l'un ni l'autre ne chiffre, et ces mécanismes concernent avant tout IPv4.",
      difficulte: 2
    },
    {
      q: "Un VLAN fournit une segmentation à quelle couche du modèle OSI ?",
      choix: ["Couche 1", "Couche 2", "Couche 3", "Couche 7"],
      reponse: 1,
      explication: "Le VLAN est une segmentation imposée par les switches en couche 2 : la communication entre VLANs exige une fonction de routage en couche 3. C'est ce point de passage obligé qui en fait un outil de contrôle. Le VRF, lui, est l'équivalent en couche 3.",
      difficulte: 1
    },
    {
      q: "Quel est le PRINCIPAL bénéfice de sécurité de la microsegmentation ?",
      choix: [
        "Elle augmente la bande passante disponible",
        "Elle limite le mouvement latéral d'un attaquant à l'intérieur du réseau",
        "Elle supprime le besoin de pare-feux",
        "Elle chiffre automatiquement tout le trafic"
      ],
      reponse: 1,
      explication: "En découpant le réseau en zones minuscules avec des politiques propres, la microsegmentation confine une compromission et bloque la progression latérale, ce qui en fait un pilier du Zero Trust. Elle multiplie au contraire les points de contrôle de type pare-feu, ne joue pas sur la bande passante et ne chiffre rien par elle-même.",
      difficulte: 2
    },
    {
      q: "Dans un SDN, comment appelle-t-on l'interface entre le contrôleur et les applications situées au-dessus de lui ?",
      choix: ["Interface southbound", "Interface east-west", "Interface northbound", "Interface de management"],
      reponse: 2,
      explication: "L'interface northbound relie le contrôleur SDN aux applications et à l'orchestration au-dessus de lui ; l'interface southbound le relie aux équipements du plan de données en dessous. East-west décrit des flux de trafic entre serveurs, pas une interface SDN.",
      difficulte: 3
    },
    {
      q: "Quelle technologie permet d'étendre des segments de couche 2 à travers des réseaux de couche 3 et supporte environ 16 millions de segments ?",
      choix: ["VLAN 802.1Q", "VXLAN", "MPLS", "GRE"],
      reponse: 1,
      explication: "VXLAN encapsule les trames de couche 2 dans des paquets de couche 3, étirant les segments à travers sous-réseaux et sites, avec un espace d'environ 16 millions d'identifiants contre 4096 pour les VLANs classiques. MPLS commute par labels et GRE est une encapsulation générique sans cet espace d'adressage de segments.",
      difficulte: 3
    },
    {
      q: "Quel terme désigne le trafic circulant LATÉRALEMENT entre les serveurs d'un même datacenter ?",
      choix: ["Trafic north-south", "Trafic east-west", "Trafic ingress", "Trafic backhaul"],
      reponse: 1,
      explication: "Le trafic east-west circule horizontalement entre serveurs, stockage et applications au sein du datacenter ; le north-south entre et sort vers les clients. L'ingress est le trafic entrant dans un réseau, et le backhaul désigne les liaisons qui raccordent des réseaux locaux à un coeur de réseau.",
      difficulte: 1
    },
    {
      q: "Quel mécanisme de WPA2 mode enterprise le distingue du mode personal ?",
      choix: [
        "L'utilisation d'AES au lieu de RC4",
        "L'authentification 802.1X/EAP via un serveur avec des identifiants individuels",
        "Un SSID masqué",
        "Le chiffrement en 192 bits"
      ],
      reponse: 1,
      explication: "Les deux modes de WPA2 utilisent AES-CCMP ; ce qui change, c'est l'authentification : le mode personal repose sur une clé pré-partagée commune, le mode enterprise sur 802.1X/EAP avec un serveur d'authentification et des comptes individuels. Le 192 bits est propre à WPA3 enterprise, et masquer le SSID n'est pas une mesure d'authentification.",
      difficulte: 2
    },
    {
      q: "Pourquoi le WPS est-il considéré comme dangereux même sur un réseau WPA2 correctement chiffré ?",
      choix: [
        "Il diffuse la clé Wi-Fi en clair",
        "Son PIN de 8 chiffres est validé en deux moitiés et souvent sans limitation de tentatives, facilitant le brute-force",
        "Il désactive AES",
        "Il force l'utilisation de TKIP"
      ],
      reponse: 1,
      explication: "La structure du protocole WPS valide le PIN en deux moitiés, réduisant drastiquement l'espace de recherche, et beaucoup de routeurs n'imposent aucun verrouillage après échecs : le brute-force devient réaliste et livre l'accès au réseau. Le WPS ne diffuse pas la clé en clair et ne touche ni à AES ni à TKIP ; la parade est de le désactiver.",
      difficulte: 3
    },
    {
      q: "Un employé signale que son téléphone s'est connecté à un réseau Wi-Fi portant le nom exact de celui de l'entreprise, mais situé sur le parking. De quelle attaque s'agit-il probablement ?",
      choix: ["Bluesnarfing", "Evil twin", "VLAN hopping", "Teardrop"],
      reponse: 1,
      explication: "Un point d'accès pirate qui imite le SSID légitime pour capter les connexions est un evil twin ; l'attaquant peut alors intercepter le trafic des victimes. Le bluesnarfing concerne le Bluetooth, le VLAN hopping les réseaux commutés filaires, et le teardrop est un déni de service par fragmentation.",
      difficulte: 1
    },
    {
      q: "Quelle attaque Bluetooth donne à l'attaquant le CONTRÔLE de l'appareil, jusqu'à écouter les appels ?",
      choix: ["Bluejacking", "Bluesniffing", "Bluebugging", "Bluesnarfing"],
      reponse: 2,
      explication: "Le bluebugging exploite des vulnérabilités Bluetooth pour prendre le contrôle de l'appareil : écoute d'appels, envoi de messages, modification de paramètres. Le bluejacking se limite à des messages non sollicités, le bluesniffing à l'écoute passive, et le bluesnarfing au vol de données.",
      difficulte: 2
    },
    {
      q: "Une attaque envoie des trames de gestion forgées pour déconnecter les clients d'un point d'accès Wi-Fi. Comment s'appelle-t-elle et à quoi sert-elle souvent ?",
      choix: [
        "Attaque IV, pour casser la clé WEP",
        "Attaque de désassociation, souvent pour pousser les victimes vers un evil twin",
        "Wardriving, pour cartographier les réseaux",
        "CAM flooding, pour transformer le switch en hub"
      ],
      reponse: 1,
      explication: "L'attaque de désassociation, ou deauthentication, abuse des trames de gestion du 802.11 pour déconnecter de force les clients : c'est un déni de service qui sert souvent de rabatteur vers un faux point d'accès. Les attaques IV visent le chiffrement, le wardriving est de la reconnaissance, et le CAM flooding cible les switches filaires.",
      difficulte: 2
    },
    {
      q: "Un attaquant associe son adresse MAC à l'adresse IP de la passerelle par défaut en diffusant de fausses réponses sur le LAN. Quelle attaque réalise-t-il ?",
      choix: ["DNS poisoning", "IP spoofing", "ARP poisoning", "Smurf"],
      reponse: 2,
      explication: "C'est l'empoisonnement ARP : en corrompant les tables ARP des victimes, l'attaquant détourne vers lui le trafic destiné à la passerelle, position idéale pour une attaque on-path. Le DNS poisoning corrompt la résolution de noms, l'IP spoofing usurpe une adresse source, et le smurf est un déni de service par amplification ICMP.",
      difficulte: 1
    },
    {
      q: "Quelle mesure prévient le PLUS efficacement le CAM table flooding sur un switch ?",
      choix: [
        "Activer le port security sur les ports du switch",
        "Masquer le SSID",
        "Déployer un WAF",
        "Utiliser des adresses IP statiques"
      ],
      reponse: 0,
      explication: "Le port security limite le nombre d'adresses MAC apprises par port et bloque les violations, ce qui neutralise la saturation de la table CAM qui forcerait le switch à diffuser toutes les trames. Le SSID concerne le Wi-Fi, le WAF les applications web, et l'adressage statique n'empêche pas l'apprentissage MAC.",
      difficulte: 2
    },
    {
      q: "Quelle est la différence FONDAMENTALE entre un pare-feu stateful et un pare-feu stateless ?",
      choix: [
        "Le stateful chiffre le trafic, pas le stateless",
        "Le stateful suit l'état des connexions et évalue chaque paquet dans son contexte",
        "Le stateless est plus récent et plus sûr",
        "Le stateful ne fonctionne qu'en couche 7"
      ],
      reponse: 1,
      explication: "Le pare-feu stateful maintient une table des connexions : il sait qu'un paquet entrant répond à une requête légitime sortante. Le stateless évalue chaque paquet isolément selon adresses et ports, sans mémoire. Aucun des deux ne chiffre, et l'inspection applicative de couche 7 est l'apanage des NGFW et des WAF.",
      difficulte: 1
    },
    {
      q: "Quel type de proxy est placé DEVANT des serveurs web pour répartir la charge et masquer l'architecture interne ?",
      choix: ["Forward proxy", "Transparent proxy", "Reverse proxy", "SOCKS proxy"],
      reponse: 2,
      explication: "Le reverse proxy s'interpose côté serveurs : répartition de charge, terminaison TLS, masquage du backend, souvent depuis un réseau de périmètre. Le forward proxy sert les clients internes, le proxy transparent intercepte sans configuration client, et SOCKS est un protocole de proxy générique côté client.",
      difficulte: 1
    },
    {
      q: "Une organisation veut vérifier que chaque poste est patché et dispose d'un antivirus à jour AVANT de lui accorder l'accès au réseau. Quelle approche répond à ce besoin ?",
      choix: [
        "NAC en philosophie postadmission",
        "NAC en philosophie preadmission avec évaluation de posture",
        "Un IDS réseau en coeur de réseau",
        "Un portail captif sans authentification"
      ],
      reponse: 1,
      explication: "Le NAC preadmission conditionne l'accès à la conformité préalable du poste, vérifiée par une évaluation de posture : patchs, antivirus, configuration. La philosophie postadmission contrôle après coup selon l'activité, l'IDS détecte sans contrôler l'admission, et un portail captif sans authentification ne vérifie rien.",
      difficulte: 2
    },
    {
      q: "Quel risque spécifique le split tunneling d'un VPN introduit-il ?",
      choix: [
        "Il double la consommation de bande passante de l'organisation",
        "Le poste connecté simultanément à Internet et au réseau interne peut servir de pont à un attaquant, hors des contrôles de l'organisation",
        "Il empêche le chiffrement du trafic VPN",
        "Il interdit l'authentification multifacteur"
      ],
      reponse: 1,
      explication: "En split tunnel, seul le trafic vers l'organisation passe dans le tunnel ; le reste va directement sur Internet sans filtrage ni inspection par l'organisation, et le poste devient un pont potentiel entre Internet et le réseau interne. Le tunnel reste chiffré, la MFA reste possible, et la bande passante de l'organisation est au contraire soulagée.",
      difficulte: 3
    },
    {
      q: "Quels protocoles sécurisent respectivement la signalisation et les flux média d'une infrastructure VoIP ?",
      choix: [
        "SIPS pour la signalisation et SRTP pour les média",
        "SNMP pour la signalisation et RTP pour les média",
        "S/MIME pour la signalisation et TLS pour les média",
        "DKIM pour la signalisation et IPsec pour les média"
      ],
      reponse: 0,
      explication: "SIPS ajoute TLS au protocole SIP pour protéger l'établissement des sessions, et SRTP étend RTP avec chiffrement, authentification et protection anti-rejeu pour l'audio et la vidéo. SNMP supervise les équipements, RTP seul n'est pas chiffré, S/MIME et DKIM concernent la messagerie.",
      difficulte: 2
    },
    {
      q: "Avant d'interconnecter son réseau avec celui d'un partenaire, quel document formalise le MIEUX les exigences techniques et de sécurité du lien ?",
      choix: [
        "Un memorandum of understanding (MOU)",
        "Un interconnection security agreement (ISA)",
        "Un service level agreement (SLA) standard",
        "Une non-disclosure agreement (NDA)"
      ],
      reponse: 1,
      explication: "L'ISA est la déclaration formelle de la posture de sécurité, des risques et des exigences techniques d'une interconnexion entre deux infrastructures. Le MOU n'exprime qu'une intention d'alignement, le SLA porte sur les niveaux de service, et la NDA sur la confidentialité des informations échangées.",
      difficulte: 3
    },
    {
      q: "Quelle architecture de répartition de charge conserve une capacité CONSTANTE même en cas de défaillance d'un noeud ?",
      choix: [
        "Active-active",
        "Active-passive",
        "Round-robin DNS",
        "Anycast"
      ],
      reponse: 1,
      explication: "En active-passive, le noeud secondaire reste dormant et prend le relais en cas de panne : la capacité offerte reste celle d'un seul noeud, donc constante. L'active-active exploite tous les noeuds en temps normal mais perd de la capacité en incident. Le round-robin DNS et l'anycast répartissent le trafic sans garantie de capacité constante.",
      difficulte: 3
    },
    {
      q: "Quel avantage de sécurité la fibre optique offre-t-elle par rapport au cuivre à paires torsadées ?",
      choix: [
        "Elle est moins chère à installer",
        "Elle est immunisée contre les interférences électromagnétiques et bien plus difficile à écouter",
        "Elle ne nécessite aucune sécurité physique",
        "Elle chiffre nativement les données"
      ],
      reponse: 1,
      explication: "La fibre transmet de la lumière : pas d'émissions électromagnétiques exploitables, immunité aux interférences, et une écoute clandestine exige une intervention physique détectable. Elle reste plus coûteuse que le cuivre, doit être protégée physiquement comme tout support, et ne chiffre rien par elle-même.",
      difficulte: 1
    },
    {
      q: "Un commutateur commence à transmettre une trame dès qu'il a lu l'adresse de destination, sans vérifier les erreurs. Quel mode de commutation utilise-t-il ?",
      choix: ["Store-and-forward", "Cut-through", "Fragment-free", "Token passing"],
      reponse: 1,
      explication: "Le mode cut-through relaie la trame dès la lecture de l'adresse de destination : latence minimale mais aucune vérification d'erreur. Le store-and-forward attend la trame complète et contrôle les erreurs ; le fragment-free vérifie les 64 premiers octets, un compromis ; le token passing est une méthode d'accès au support, pas un mode de commutation.",
      difficulte: 3
    },
    {
      q: "Du point de vue d'un RSSI, quelle est la MEILLEURE stratégie face aux risques d'interception sur les réseaux d'opérateurs mobiles ?",
      choix: [
        "Interdire l'usage des téléphones mobiles professionnels",
        "Considérer le réseau de l'opérateur comme non fiable et imposer un chiffrement de bout en bout comme TLS ou VPN",
        "Se reposer sur le chiffrement radio entre le mobile et l'antenne",
        "N'autoriser que la 5G"
      ],
      reponse: 1,
      explication: "Le chiffrement cellulaire s'arrête souvent à l'antenne et des tours peuvent être simulées pour des attaques on-path : la posture correcte est de traiter le réseau de l'opérateur comme non fiable et de chiffrer au-dessus, via TLS ou VPN. Interdire les mobiles est disproportionné, et la 5G améliore mais ne supprime pas le besoin de chiffrement applicatif.",
      difficulte: 2
    }
  ],

  // --------------------------------------------------------------------
  // FLASHCARDS
  // --------------------------------------------------------------------
  flashcards: [
    { recto: "Les 7 couches du modèle OSI ?", verso: "1 Physique, 2 Liaison de données (Data Link), 3 Réseau, 4 Transport, 5 Session, 6 Présentation, 7 Application. Mnémonique : Please Do Not Throw Sausage Pizza Away." },
    { recto: "PDU par couche OSI ?", verso: "Couches 5 à 7 : data ; couche 4 : segment (TCP) ou datagram (UDP) ; couche 3 : packet ; couche 2 : frame ; couche 1 : bit." },
    { recto: "Three-way handshake TCP", verso: "SYN, puis SYN-ACK, puis ACK. Les six drapeaux TCP : URG, ACK, PSH, RST, SYN, FIN." },
    { recto: "Adresses privées RFC 1918", verso: "10.0.0.0/8, 172.16.0.0/12 et 192.168.0.0/16 : non routables sur Internet, utilisées derrière du NAT." },
    { recto: "APIPA", verso: "Automatic Private IP Addressing : plage 169.254.0.0/16 auto-attribuée quand aucun serveur DHCP ne répond." },
    { recto: "NAT vs PAT", verso: "NAT traduit les adresses IP sans toucher aux ports ; PAT traduit aussi le port source, permettant à de nombreux clients de partager une seule adresse publique." },
    { recto: "Unicast / Broadcast / Multicast / Anycast", verso: "Un vers un ; un vers tous les hôtes du segment ; un vers un groupe abonné ; vers le noeud le plus proche partageant l'adresse (utilisé par les CDN)." },
    { recto: "IPsec : AH vs ESP", verso: "AH (Authentication Header) : intégrité, authentification, anti-rejeu, PAS de chiffrement. ESP (Encapsulating Security Payload) : chiffrement, donc confidentialité." },
    { recto: "IPsec : mode transport vs mode tunnel", verso: "Transport : seule la charge utile est chiffrée (pair à pair). Tunnel : le paquet entier, en-tête compris, est chiffré (passerelle à passerelle, VPN de sites)." },
    { recto: "TLS : versions acceptables", verso: "TLS 1.2 et 1.3 uniquement ; SSL, TLS 1.0 et 1.1 sont dépréciés. TLS repose sur une cryptographie hybride : asymétrique pour la clé de session, symétrique ensuite." },
    { recto: "SPF / DKIM / DMARC", verso: "SPF : liste des serveurs autorisés à émettre pour un domaine. DKIM : signature numérique des messages via clé publiée en DNS. DMARC : politique d'alignement et de traitement des échecs (quarantine, reject) avec rapports." },
    { recto: "DNSSEC", verso: "Extension du DNS qui signe cryptographiquement les enregistrements : le résolveur vérifie authenticité et intégrité des réponses, contrant le DNS poisoning." },
    { recto: "VLAN vs VRF", verso: "VLAN : segmentation logique de couche 2 imposée par les switches. VRF (Virtual Routing and Forwarding) : plusieurs tables de routage indépendantes sur un même routeur, en couche 3." },
    { recto: "Microsegmentation", verso: "Découpage du réseau en zones minimes (jusqu'à une seule machine) avec pare-feux distribués : bloque les mouvements latéraux, brique technique du Zero Trust." },
    { recto: "SDN : les trois plans", verso: "Plan d'application (API northbound), plan de contrôle (intelligence centralisée qui calcule les chemins), plan de données (commutation des paquets). Le plan de management supervise l'ensemble." },
    { recto: "VXLAN", verso: "Encapsulation qui étire des segments de couche 2 à travers des réseaux de couche 3 ; environ 16 millions de segments possibles contre 4096 VLANs ; outil de microsegmentation multi-sites." },
    { recto: "Trafic north-south vs east-west", verso: "North-south : entre le datacenter et l'extérieur (clients, Internet). East-west : latéral, entre serveurs et applications au sein du datacenter — cible de la microsegmentation." },
    { recto: "WPA3 : SAE", verso: "Simultaneous Authentication of Equals : remplace le PSK de WPA2 par l'échange Dragonfly (dérivé de Diffie-Hellman) en preuve à divulgation nulle ; empêche les attaques par dictionnaire hors ligne." },
    { recto: "802.1X", verso: "Port-Based Network Access Control : bloque toute communication tant que le client ne s'est pas authentifié (via EAP) auprès d'un serveur AAA, par exemple RADIUS (UDP 1812) ou TACACS+ (TCP 49)." },
    { recto: "Bluejacking / Bluesnarfing / Bluebugging", verso: "Bluejacking : envoi de messages non sollicités (bénin). Bluesnarfing : vol de données sur l'appareil. Bluebugging : prise de contrôle complète (écoute d'appels, envoi de messages)." },
    { recto: "Evil twin", verso: "Faux point d'accès Wi-Fi imitant le SSID légitime pour capter les connexions et intercepter le trafic ; souvent combiné à une attaque de désassociation qui déconnecte les victimes du vrai AP." },
    { recto: "Smurf attack", verso: "DoS par amplification : echo request ICMP envoyé à l'adresse de broadcast avec l'adresse source usurpée de la victime ; tous les hôtes répondent à la victime." },
    { recto: "ARP poisoning", verso: "Fausses réponses ARP associant la MAC de l'attaquant à l'IP d'un tiers de confiance (souvent la passerelle) : permet interception, modification ou blocage du trafic (attaque on-path). Parade : dynamic ARP inspection, chiffrement." },
    { recto: "Stateless / Stateful / NGFW / WAF", verso: "Stateless : filtre chaque paquet isolément. Stateful : suit l'état des connexions. NGFW : inspection applicative profonde, IPS, identités. WAF : protection dédiée des applications web (HTTP/S) contre injections, XSS, etc." },
    { recto: "Forward proxy vs reverse proxy", verso: "Forward : côté clients internes (filtrage, cache, anonymisation). Reverse : devant les serveurs (répartition de charge, terminaison TLS, masquage du backend), souvent en screened subnet." },
    { recto: "NAC : preadmission vs postadmission", verso: "Preadmission : conformité (patchs, antivirus) exigée AVANT l'accès au réseau. Postadmission : autorisation ou refus selon l'activité APRÈS admission. Déploiement avec agent (permanent/dissolvable) ou agentless." },
    { recto: "Split tunnel vs full tunnel", verso: "Full tunnel : tout le trafic du client passe par l'organisation. Split tunnel : accès simultané au réseau interne et à Internet en direct — risque de pont contournant les contrôles." },
    { recto: "SIPS et SRTP", verso: "SIPS : SIP chiffré par TLS, protège la signalisation VoIP. SRTP : extension de RTP ajoutant chiffrement, authentification et anti-rejeu aux flux audio et vidéo." },
    { recto: "MOU vs ISA", verso: "MOU (memorandum of understanding) : expression d'intention entre deux entités. ISA (interconnection security agreement) : déclaration formelle des exigences techniques et de sécurité d'une interconnexion de réseaux." },
    { recto: "Cut-through / Store-and-forward / Fragment-free", verso: "Cut-through : transmet dès l'adresse lue (rapide, sans contrôle). Store-and-forward : reçoit tout, vérifie les erreurs, puis transmet. Fragment-free : vérifie les 64 premiers octets, compromis entre les deux." }
  ]
};
