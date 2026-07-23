/* Module Mindset : penser et parler comme un expert CISSP.
   - Principes de raisonnement d'examen
   - Drills « éliminez d'abord les 2 pièges, puis tranchez »
   - Reformulations : choisir la formulation d'un security manager */
const Mindset = (() => {
  let drill, phase, eliminated, misses, reform;

  /* Familles de mots-opérateurs qui pilotent la réponse attendue (« décoder la question ») */
  const OPERATEURS = [
    { mots: ["MEILLEUR", "MEILLEURE", "MIEUX", "BEST"], nom: "MEILLEUR / BEST", sens: "Plusieurs réponses sont vraies — cherchez la plus complète, la plus « amont », celle qui englobe les autres." },
    { mots: ["EN PREMIER", "PREMIÈRE", "PREMIER", "FIRST", "D'ABORD"], nom: "EN PREMIER / FIRST", sens: "On teste l'ordre du processus : la bonne réponse est l'étape la plus en amont (souvent identifier/évaluer, jamais corriger d'emblée)." },
    { mots: ["PRINCIPAL", "PRINCIPALE", "PRIMARY", "PRIORITAIRE"], nom: "PRINCIPAL / PRIMARY", sens: "On demande la raison d'être ou l'objectif n°1 — pas un bénéfice secondaire, aussi vrai soit-il." },
    { mots: ["PLUS", "MOST"], nom: "LE PLUS / MOST", sens: "Comparatif : toutes les options se défendent, une seule maximise le critère demandé (risque, efficacité, probabilité…)." },
    { mots: ["MOINS", "LEAST", "SAUF", "EXCEPT", "NE ", "N'EST PAS", "PAS "], nom: "MOINS / SAUF / NOT", sens: "Question inversée : on cherche l'intrus ou le minimum. Relisez deux fois — c'est le piège classique de l'inattention." },
    { mots: ["RESPONSABLE", "RESPONSIBLE", "ACCOUNTABLE", "IMPUTABLE"], nom: "RESPONSABLE / ACCOUNTABLE", sens: "Question de rôles : accountability (imputabilité) reste en haut (direction, data owner) ; la responsibility opérationnelle se délègue (custodian)." }
  ];

  function detectOperateur(txt) {
    const up = txt.toUpperCase();
    return OPERATEURS.find(o => o.mots.some(m => up.includes(m)));
  }

  function data() { return CISSP_DATA.mindset || { principes: [], drills: [], reformulations: [] }; }
  function rand(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

  function list(tab) {
    Progress.markVisited("mindset");
    tab = tab || "principes";
    const m = data();
    document.getElementById("app").innerHTML = `
      <h1 class="page-title">🧭 Mindset — penser et parler comme un CISSP</h1>
      <p class="page-sub">L'examen ne teste pas votre technique : il teste votre <strong>jugement de security manager</strong>.
      Ce module entraîne le raisonnement (éliminer les pièges, choisir la réponse la plus « amont »)
      et le langage (parler risque et business, pas outils et features).</p>
      <div style="display:flex;gap:.6rem;margin-bottom:1.4rem;flex-wrap:wrap">
        <button class="btn ${tab === "principes" ? "" : "secondary"}" onclick="Mindset.list('principes')">🧭 Principes</button>
        <button class="btn ${tab === "drills" ? "" : "secondary"}" onclick="Mindset.startDrill()">🎯 Drills d'élimination <span class="badge">${Progress.mindsetCount("drills")} réussis</span></button>
        <button class="btn ${tab === "reformulations" ? "" : "secondary"}" onclick="Mindset.startReform()">🗣 Parler comme un CISSP <span class="badge">${Progress.mindsetCount("reform")} réussies</span></button>
        <button class="btn ${tab === "decoder" ? "" : "secondary"}" onclick="Mindset.startDecoder()">🔍 Décoder la question <span class="badge">${Progress.mindsetCount("decoder")} réussis</span></button>
      </div>
      ${tab === "principes" ? `
      <div class="grid cols-2">
        ${m.principes.map(p => `
          <div class="card">
            <h3 style="display:flex;gap:.5rem;align-items:center">${p.icone || "🧭"} ${esc(p.titre)}</h3>
            <p style="color:var(--text-dim);margin:.5rem 0">${esc(p.texte)}</p>
            <div class="astuce">${esc(p.exemple)}</div>
          </div>`).join("")}
      </div>` : ""}`;
    window.scrollTo(0, 0);
  }

  /* ---- Drill : éliminer 2 pièges puis trancher ---- */
  function startDrill() {
    const m = data();
    if (!m.drills.length) return list("principes");
    drill = rand(m.drills);
    phase = 1; eliminated = []; misses = 0;
    renderDrill();
  }

  function renderDrill(feedback) {
    document.getElementById("app").innerHTML = `
      <div style="max-width:820px;margin:0 auto">
        <div class="q-head" style="display:flex;justify-content:space-between;align-items:center;gap:.6rem;margin-bottom:1rem;flex-wrap:wrap">
          <button class="btn secondary small" onclick="Mindset.list('principes')">← Mindset</button>
          <span class="badge">${phase === 1 ? "Phase 1 — éliminez les 2 pièges" : "Phase 2 — tranchez entre les 2 restantes"}</span>
          <span class="badge">🎯 ${Progress.mindsetCount("drills")} drills réussis</span>
        </div>
        <div class="card">
          <p class="q-text">${esc(drill.q)}</p>
          <p style="color:${phase === 1 ? "var(--warn)" : "var(--accent)"};font-size:.92rem;margin-bottom:.7rem">
            ${phase === 1
              ? "🔍 Réflexe d'expert : avant de chercher la bonne réponse, écartez les 2 réponses évidemment hors jeu (hors sujet, trop techniques, absolues, hors périmètre)."
              : "⚖️ Il en reste deux. Laquelle est la plus « amont », la plus large, la plus manager ?"}
          </p>
          <div class="choices">
            ${drill.choix.map((c, i) => {
              const isElim = eliminated.includes(i);
              return `<button class="choice" data-i="${i}" ${isElim ? "disabled" : ""}
                style="${isElim ? "opacity:.35;text-decoration:line-through;" : ""}">${LETTRES[i]}. ${esc(c)}</button>`;
            }).join("")}
          </div>
          <div id="dr-exp">${feedback || ""}</div>
        </div>
      </div>`;

    document.querySelectorAll(".choice:not([disabled])").forEach(btn => {
      btn.onclick = () => clickDrill(+btn.dataset.i, btn);
    });
  }

  function clickDrill(i, btn) {
    if (phase === 1) {
      if (drill.pieges.includes(i)) {
        eliminated.push(i);
        if (eliminated.length === 2) {
          phase = 2;
          renderDrill(`<div class="explication">✅ Les 2 pièges sont écartés. ${esc(drill.pourquoiPieges)}</div>`);
        } else {
          renderDrill(`<div class="explication">✅ Bien vu, c'est un piège. Encore un à trouver.</div>`);
        }
      } else {
        misses++;
        btn.style.animation = "none"; void btn.offsetWidth; btn.style.animation = "shake .3s";
        document.getElementById("dr-exp").innerHTML =
          `<div class="explication" style="border-color:var(--ko)">❌ Non — celle-ci reste en course. Cherchez les réponses hors sujet, absolues ou purement techniques.</div>`;
      }
    } else {
      const good = i === drill.reponse;
      if (good && misses === 0) Progress.bumpMindset("drills");
      document.querySelectorAll(".choice").forEach((b, j) => {
        b.disabled = true;
        if (j === drill.reponse) b.classList.add("correct");
        else if (j === i && !good) b.classList.add("wrong");
      });
      document.getElementById("dr-exp").innerHTML = `
        <div class="explication">
          <strong>${good ? (misses === 0 ? "🏆 Sans faute — drill validé !" : "✅ Bonne réponse (mais avec des hésitations en phase 1).") : "❌ C'était l'autre."}</strong>
          ${esc(drill.explication)}
          <div style="margin-top:.5rem"><span class="badge">🧭 Règle : ${esc(drill.regle)}</span></div>
        </div>
        <div style="margin-top:1rem;text-align:right">
          <button class="btn" onclick="Mindset.startDrill()">Drill suivant →</button>
        </div>`;
    }
  }

  /* ---- Reformulations : parler comme un CISSP ---- */
  function startReform() {
    const m = data();
    if (!m.reformulations.length) return list("principes");
    reform = rand(m.reformulations);
    document.getElementById("app").innerHTML = `
      <div style="max-width:820px;margin:0 auto">
        <div class="q-head" style="display:flex;justify-content:space-between;align-items:center;gap:.6rem;margin-bottom:1rem;flex-wrap:wrap">
          <button class="btn secondary small" onclick="Mindset.list('principes')">← Mindset</button>
          <span class="badge">🗣 Parler comme un CISSP</span>
          <span class="badge">${Progress.mindsetCount("reform")} réussies</span>
        </div>
        <div class="card">
          <p style="margin-bottom:.8rem">📋 <strong>Contexte :</strong> ${esc(reform.contexte)}</p>
          <div class="explication" style="border-color:var(--ko);background:rgba(231,76,60,.07);margin-bottom:1rem">
            🙅 <em>Réponse de technicien :</em> « ${esc(reform.technicien)} »
          </div>
          <p class="q-text">Quelle reformulation est celle d'un expert CISSP ?</p>
          <div class="choices">
            ${reform.options.map((o, i) => `<button class="choice" data-i="${i}">${LETTRES[i]}. ${esc(o)}</button>`).join("")}
          </div>
          <div id="rf-exp"></div>
        </div>
      </div>`;

    document.querySelectorAll(".choice").forEach(btn => {
      btn.onclick = () => {
        const i = +btn.dataset.i;
        const good = i === reform.meilleure;
        if (good) Progress.bumpMindset("reform");
        document.querySelectorAll(".choice").forEach((b, j) => {
          b.disabled = true;
          if (j === reform.meilleure) b.classList.add("correct");
          else if (j === i) b.classList.add("wrong");
        });
        document.getElementById("rf-exp").innerHTML = `
          <div class="explication">
            <strong>${good ? "✅ C'est la voix d'un security manager." : "❌ Pas celle-ci."}</strong> ${esc(reform.pourquoi)}
          </div>
          <div style="margin-top:1rem;text-align:right">
            <button class="btn" onclick="Mindset.startReform()">Situation suivante →</button>
          </div>`;
      };
    });
  }

  /* ---- Décoder la question : repérer le mot-opérateur qui pilote la réponse ---- */
  function startDecoder() {
    // question tirée de toute la banque, contenant un opérateur détectable
    const pool = [];
    Object.values(CISSP_DATA.domains).forEach(d =>
      d.quiz.forEach(q => { if (detectOperateur(q.q)) pool.push({ ...q, domCode: d.code }); }));
    if (!pool.length) return list("principes");
    const q = rand(pool);
    const bon = detectOperateur(q.q);
    // 3 distracteurs parmi les autres familles
    const autres = OPERATEURS.filter(o => o !== bon).sort(() => Math.random() - .5).slice(0, 3);
    const options = [bon, ...autres].sort(() => Math.random() - .5);

    document.getElementById("app").innerHTML = `
      <div style="max-width:820px;margin:0 auto">
        <div class="q-head" style="display:flex;justify-content:space-between;align-items:center;gap:.6rem;margin-bottom:1rem;flex-wrap:wrap">
          <button class="btn secondary small" onclick="Mindset.list('principes')">← Mindset</button>
          <span class="badge">🔍 Décoder la question</span>
          <span class="badge">${q.domCode}</span>
          <span class="badge">${Progress.mindsetCount("decoder")} réussis</span>
        </div>
        <div class="card">
          <p style="color:var(--warn);font-size:.92rem;margin-bottom:.7rem">🔍 Avant même de penser à la réponse : quel <strong>mot-opérateur</strong> pilote cette question, et donc la nature de la bonne réponse ?</p>
          <p class="q-text">${esc(q.q)}</p>
          <div class="choices">
            ${options.map((o, i) => `<button class="choice" data-n="${o.nom === bon.nom ? 1 : 0}">${LETTRES[i]}. ${esc(o.nom)}</button>`).join("")}
          </div>
          <div id="dc-exp"></div>
        </div>
        <div class="card" style="margin-top:1rem">
          <h3 style="margin-bottom:.5rem">🗝 Les familles de mots-opérateurs</h3>
          ${OPERATEURS.map(o => `<p style="font-size:.9rem;color:var(--text-dim);margin:.3rem 0"><strong style="color:var(--text)">${esc(o.nom)}</strong> — ${esc(o.sens)}</p>`).join("")}
        </div>
      </div>`;

    document.querySelectorAll(".choice").forEach(btn => {
      btn.onclick = () => {
        const good = btn.dataset.n === "1";
        if (good) Progress.bumpMindset("decoder");
        document.querySelectorAll(".choice").forEach(b => {
          b.disabled = true;
          if (b.dataset.n === "1") b.classList.add("correct");
          else if (b === btn && !good) b.classList.add("wrong");
        });
        document.getElementById("dc-exp").innerHTML = `
          <div class="explication">
            <strong>${good ? "✅ Bien décodé." : "❌ L'opérateur était « " + esc(bon.nom) + " »."}</strong> ${esc(bon.sens)}
            <div style="margin-top:.5rem;color:var(--text-dim)">Réponse attendue à cette question : « ${esc(q.choix[q.reponse])} » — ${esc(q.explication.split(".")[0])}.</div>
          </div>
          <div style="margin-top:1rem;text-align:right"><button class="btn" onclick="Mindset.startDecoder()">Question suivante →</button></div>`;
      };
    });
  }

  return { list, startDrill, startReform, startDecoder };
})();
