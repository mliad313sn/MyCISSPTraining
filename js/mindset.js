/* Module Mindset : penser et parler comme un expert CISSP.
   - Principes de raisonnement d'examen
   - Drills « éliminez d'abord les 2 pièges, puis tranchez »
   - Reformulations : choisir la formulation d'un security manager */
const Mindset = (() => {
  let drill, phase, eliminated, misses, reform;

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

  return { list, startDrill, startReform };
})();
