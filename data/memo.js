/* Mnémoniques et séquences à connaître par cœur — compilés depuis les
   ressources communautaires CISSP (cissp-mnemonics, Sunflower notes, RFC 3227,
   NIST 800-34/800-37). Termes techniques en anglais, explications en français. */
window.CISSP_DATA = window.CISSP_DATA || { domains: {} };
window.CISSP_DATA.memo = {

  mnemoniques: [
    { domaine: 4, titre: "Couches OSI (1 → 7)", moyen: "« Please Do Not Throw Sausage Pizza Away » — version FR : « Pas De Nouvelles, Tout Se Passe Ainsi »", detail: "Physical, Data Link, Network, Transport, Session, Presentation, Application." },
    { domaine: 4, titre: "Couches OSI (7 → 1)", moyen: "« All People Seem To Need Data Processing »", detail: "Application, Presentation, Session, Transport, Network, Data Link, Physical." },
    { domaine: 4, titre: "PDU par couche", moyen: "« Don't Some People Fear Birthdays »", detail: "Data (7-5), Segment (4), Packet (3), Frame (2), Bits (1)." },
    { domaine: 1, titre: "Calcul de l'ALE", moyen: "« ALE causes AROSLE » — la bière (ale) cause l'ivresse", detail: "ALE = ARO × SLE." },
    { domaine: 1, titre: "Calcul du SLE", moyen: "« SLEAV-EF » (comme sleeve, la manche)", detail: "SLE = AV (Asset Value) × EF (Exposure Factor)." },
    { domaine: 1, titre: "Catégories de contrôles", moyen: "« PTA » — comme l'association de parents d'élèves qui protège les enfants", detail: "Physical, Technical (logical), Administrative (managerial)." },
    { domaine: 1, titre: "RMF NIST 800-37", moyen: "« PC-SIA-AM »", detail: "Prepare, Categorize, Select, Implement, Assess, Authorize, Monitor." },
    { domaine: 1, titre: "Due Care vs Due Diligence", moyen: "Due Care = « Do Correct » (agir) ; Due Diligence = « Do Detect » (vérifier)", detail: "Care : construire la clôture autour de la piscine. Diligence : l'inspecter régulièrement." },
    { domaine: 1, titre: "STRIDE (threat modeling)", moyen: "S-T-R-I-D-E", detail: "Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege." },
    { domaine: 1, titre: "DREAD (cotation des menaces)", moyen: "D-R-E-A-D", detail: "Damage, Reproducibility, Exploitability, Affected users, Discoverability." },
    { domaine: 3, titre: "Bell-LaPadula vs Biba", moyen: "« Biba a un I comme Integrity »", detail: "Biba protège l'intégrité (no write up / no read down) ; Bell-LaPadula la confidentialité (no read up / no write down). L'un est l'exact miroir de l'autre." },
    { domaine: 3, titre: "Propriétés Simple vs ★ (star)", moyen: "« Lire est plus SIMPLE qu'écrire »", detail: "Propriété Simple = lecture (read) ; propriété ★ = écriture (write). Valable pour Bell-LaPadula et Biba." },
    { domaine: 3, titre: "Brewer-Nash", moyen: "« On brew (infuse) du thé chinois » → Chinese Wall", detail: "Modèle anti-conflits d'intérêts : murailles dynamiques entre clients concurrents." },
    { domaine: 3, titre: "Anneaux de protection", moyen: "« Zero KODU »", detail: "Ring 0 Kernel, Ring 1 OS, Ring 2 Drivers, Ring 3 User." },
    { domaine: 3, titre: "Modes DES / chiffrement par bloc", moyen: "ECB est le seul sans IV → le plus faible ; CTR le plus moderne", detail: "ECB < CBC < CFB < OFB < CTR. Ne jamais utiliser ECB (motifs visibles)." },
    { domaine: 3, titre: "Diffie-Hellman & ElGamal", moyen: "« Ils laissent des discrete logs »", detail: "DH et ElGamal reposent sur les logarithmes discrets ; RSA sur la factorisation de grands nombres premiers ; ECC sur les courbes elliptiques." },
    { domaine: 5, titre: "Facteurs d'authentification", moyen: "« Savoir, Avoir, Être »", detail: "Type 1 : something you KNOW ; Type 2 : something you HAVE ; Type 3 : something you ARE (+ somewhere you are, something you do)." },
    { domaine: 5, titre: "Erreurs biométriques", moyen: "FRR = type I (le Rejeté Râle) ; FAR = type II (le Fraudeur Accepté)", detail: "False Rejection Rate (erreur I), False Acceptance Rate (erreur II), CER = point d'égalité (plus bas = meilleur)." },
    { domaine: 2, titre: "Rôles de la donnée", moyen: "« Owner = Overall, Custodian = Computer »", detail: "Owner : responsable global (management). Custodian : garde technique (sauvegardes, ACL). Steward : qualité métier. Processor : traite pour le Controller (GDPR)." },
    { domaine: 2, titre: "Rémanence des données", moyen: "« CPSOW » (Cow Pig Sow)", detail: "Clearing Can be recovered ; Purging is Permanent ; Sanitizing = Same (que purging) ; Overwriting = des « Oh » (zéros) ; Wiping = Writing." },
    { domaine: 7, titre: "Incident response (8 étapes)", moyen: "« Please Don't Rub My Red Round Rash, Larry »", detail: "Preparation, Detection, Response, Mitigation, Reporting, Recovery, Remediation, Lessons learned." },
    { domaine: 7, titre: "Classes de feu", moyen: "A = Âtre, B = Bouillir, C = Circuits, D = Dur (métal), K = Kuisine", detail: "A : combustibles ordinaires (eau) ; B : liquides inflammables (CO2/mousse) ; C : électrique (CO2/agents propres) ; D : métaux (poudres spéciales) ; K : huiles de cuisine (saponification)." },
    { domaine: 7, titre: "Order of volatility (RFC 3227)", moyen: "« Du plus éphémère au plus durable »", detail: "Registres/cache CPU → tables (ARP, routing, process) → RAM → fichiers temporaires → disque → logs distants → sauvegardes/archives." },
    { domaine: 7, titre: "Types de sauvegarde", moyen: "Incremental = Infime ; Differential = Depuis Full", detail: "Full : tout. Incremental : depuis la dernière sauvegarde quelle qu'elle soit (remet le bit d'archive). Differential : tout depuis le dernier Full (ne touche pas le bit)." },
    { domaine: 7, titre: "MTD = RTO + WRT", moyen: "« Le business tolère (MTD) le temps de restaurer (RTO) puis de vérifier (WRT) »", detail: "RPO regarde le passé (données perdues) ; RTO le futur (délai de restauration) ; WRT la remise en marche applicative ; MTD la limite business totale." },
    { domaine: 7, titre: "Tests DRP (du moins au plus disruptif)", moyen: "« Réviser Sans Stresser Puis Foncer »", detail: "Read-through (checklist) → Structured walk-through (table-top) → Simulation → Parallel test → Full interruption." },
    { domaine: 1, titre: "BCP selon NIST 800-34", moyen: "« DC I DD PP »", detail: "Develop policy, Conduct BIA, Identify preventive controls, Develop recovery strategies, Develop contingency plan, Plan testing/training/exercises, Plan maintenance." },
    { domaine: 8, titre: "Tests logiciels SAST vs DAST", moyen: "SAST = Source (code au repos) ; DAST = Dynamique (app qui tourne)", detail: "SAST analyse le code source (white box, tôt dans le SDLC) ; DAST attaque l'application en exécution (black box) ; IAST instrumente en exécution ; RASP protège en production." },
    { domaine: 6, titre: "Boîtes de pentest", moyen: "« Plus c'est noir, moins on en sait »", detail: "Black box : zéro connaissance ; Gray box : connaissance partielle ; White box : accès complet (code, architecture)." }
  ],

  ordres: [
    {
      id: "osi", domaine: 4, titre: "Couches OSI, de la couche 1 à la couche 7",
      consigne: "Cliquez les couches dans l'ordre, de la couche physique (1) à la couche application (7).",
      items: ["Physical", "Data Link", "Network", "Transport", "Session", "Presentation", "Application"],
      indice: "« Please Do Not Throw Sausage Pizza Away »"
    },
    {
      id: "ir", domaine: 7, titre: "Les 8 étapes de l'incident response",
      consigne: "Remettez le cycle de gestion d'incident dans l'ordre officiel ISC2.",
      items: ["Preparation", "Detection", "Response", "Mitigation", "Reporting", "Recovery", "Remediation", "Lessons learned"],
      indice: "« Please Don't Rub My Red Round Rash, Larry »"
    },
    {
      id: "rmf", domaine: 1, titre: "Les 7 étapes du RMF (NIST 800-37)",
      consigne: "Ordonnez le Risk Management Framework.",
      items: ["Prepare", "Categorize", "Select", "Implement", "Assess", "Authorize", "Monitor"],
      indice: "« PC-SIA-AM »"
    },
    {
      id: "volatility", domaine: 7, titre: "Order of volatility (RFC 3227)",
      consigne: "En forensics, collectez du plus volatil au moins volatil.",
      items: ["Registres et cache CPU", "Tables ARP / routing / processus", "Mémoire vive (RAM)", "Fichiers temporaires / swap", "Disque dur", "Logs distants", "Sauvegardes et archives"],
      indice: "Ce qui disparaît à l'extinction se collecte en premier."
    },
    {
      id: "drp", domaine: 7, titre: "Tests DRP, du moins au plus disruptif",
      consigne: "Classez les tests de plan de reprise du plus doux au plus risqué.",
      items: ["Read-through (checklist)", "Structured walk-through (table-top)", "Simulation", "Parallel test", "Full interruption test"],
      indice: "« Réviser Sans Stresser Puis Foncer »"
    },
    {
      id: "80034", domaine: 1, titre: "Contingency planning NIST 800-34",
      consigne: "Ordonnez les 7 étapes du plan de contingence.",
      items: ["Develop policy", "Conduct BIA", "Identify preventive controls", "Develop recovery strategies", "Develop contingency plan", "Plan testing, training, exercises", "Plan maintenance"],
      indice: "« DC I DD PP »"
    },
    {
      id: "datalife", domaine: 2, titre: "Cycle de vie de la donnée",
      consigne: "Remettez les phases du data lifecycle dans l'ordre.",
      items: ["Create / Collect", "Store", "Use", "Share", "Archive", "Destroy"],
      indice: "De la naissance à la destruction sécurisée."
    },
    {
      id: "sdlc", domaine: 8, titre: "Phases du SDLC",
      consigne: "Ordonnez le cycle de développement logiciel classique.",
      items: ["Requirements", "Design", "Development", "Testing", "Deployment", "Operations & Maintenance", "Disposal"],
      indice: "La sécurité doit intervenir dès Requirements — pas à la fin !"
    },
    {
      id: "kerberos", domaine: 5, titre: "Flux d'authentification Kerberos",
      consigne: "Remettez les échanges Kerberos dans l'ordre.",
      items: ["L'utilisateur s'authentifie auprès de l'AS", "L'AS délivre un TGT", "Le client présente le TGT au TGS", "Le TGS délivre un ticket de service", "Le client présente le ticket au serveur cible", "Accès à la ressource accordé"],
      indice: "AS → TGT → TGS → ticket de service → ressource."
    },
    {
      id: "risk", domaine: 1, titre: "Processus de gestion des risques",
      consigne: "Ordonnez la démarche de management du risque.",
      items: ["Identifier les actifs et leur valeur", "Identifier menaces et vulnérabilités", "Analyser le risque (probabilité × impact)", "Évaluer et prioriser", "Traiter le risque (mitigate/transfer/accept/avoid)", "Surveiller et réviser"],
      indice: "On ne peut pas protéger ce qu'on n'a pas identifié."
    },
    {
      id: "change", domaine: 7, titre: "Change management",
      consigne: "Ordonnez le processus de gestion des changements.",
      items: ["Demande de changement (RFC)", "Revue et analyse d'impact", "Approbation (CAB)", "Test en pré-production", "Implémentation planifiée", "Documentation et revue post-implémentation"],
      indice: "Jamais de changement sans approbation ni retour arrière possible."
    },
    {
      id: "backup", domaine: 3, titre: "Chaîne de traitement cryptographique d'un message signé et chiffré",
      consigne: "Alice envoie un message confidentiel et signé à Bob : dans quel ordre ?",
      items: ["Hacher le message", "Signer le hash avec la clé privée d'Alice", "Chiffrer message + signature avec une clé symétrique", "Chiffrer la clé symétrique avec la clé publique de Bob", "Envoyer l'ensemble à Bob"],
      indice: "Signer d'abord (preuve d'origine), chiffrer ensuite (confidentialité), enveloppe hybride pour la performance."
    }
  ]
};
