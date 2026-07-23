/* Scénarios de cas réels : études de cas séquentielles où l'apprenant
   prend des décisions de RSSI dans des contextes variés. */
const Scenarios = (() => {
  let sc, step, score, log;

  function list() {
    const all = CISSP_DATA.scenarios || [];
    const ds = CISSP_DATA.domains;
    document.getElementById("app").innerHTML = `
      <h1 class="page-title">🎬 Scénarios — cas réels</h1>
      <p class="page-sub">Mettez-vous dans la peau d'un RSSI : chaque scénario est une histoire réaliste, inspirée d'incidents connus,
      où vos décisions successives sont évaluées comme à l'examen. C'est le meilleur moyen d'ancrer les concepts dans des contextes variés.</p>
      <div class="grid cols-3">
        ${all.map(s => {
          const d = ds[s.domaine];
          return `
          <div class="card domain-card" style="--dc:${d ? d.couleur : "#4f8ef7"}" onclick="Scenarios.open('${s.id}')">
            <div class="dc-head"><span class="dc-icon">${s.icone || "🎬"}</span>
              <span class="badge">${d ? d.code : ""} · ${"⭐".repeat(s.difficulte || 2)}</span></div>
            <h3>${esc(s.titre)}</h3>
            <div class="dc-en">${s.etapes.length} décisions à prendre</div>
            <div class="dc-meta"><span class="badge">${d ? esc(d.titre) : ""}</span></div>
          </div>`;
        }).join("")}
      </div>`;
  }

  function open(id) {
    sc = (CISSP_DATA.scenarios || []).find(s => s.id === id);
    if (!sc) return list();
    step = -1; score = 0; log = [];
    renderContext();
  }

  function renderContext() {
    const d = CISSP_DATA.domains[sc.domaine];
    document.getElementById("app").innerHTML = `
      <div style="max-width:840px;margin:0 auto;--dc:${d ? d.couleur : "#4f8ef7"}">
        <a class="btn secondary small" href="#/scenarios">← Tous les scénarios</a>
        <div class="card" style="margin-top:1rem">
          <div style="font-size:2.6rem">${sc.icone || "🎬"}</div>
          <h1 class="page-title">${esc(sc.titre)}</h1>
          <p style="color:var(--text-dim);margin-bottom:.8rem">${d ? d.code + " — " + esc(d.titre) : ""} · ${"⭐".repeat(sc.difficulte || 2)} · ${sc.etapes.length} décisions</p>
          <p style="font-size:1.05rem;line-height:1.7">${esc(sc.contexte)}</p>
          <div style="margin-top:1.2rem"><button class="btn" onclick="Scenarios.next()">🎬 Entrer dans le scénario</button></div>
        </div>
      </div>`;
  }

  function next() {
    step++;
    if (step >= sc.etapes.length) return debrief();
    const e = sc.etapes[step];
    const d = CISSP_DATA.domains[sc.domaine];
    document.getElementById("app").innerHTML = `
      <div style="max-width:840px;margin:0 auto;--dc:${d ? d.couleur : "#4f8ef7"}">
        <div class="q-head" style="display:flex;justify-content:space-between;align-items:center;gap:.6rem;margin-bottom:1rem;flex-wrap:wrap">
          <span class="badge">${sc.icone || "🎬"} ${esc(sc.titre)}</span>
          <span class="badge">Décision ${step + 1} / ${sc.etapes.length}</span>
          <span class="badge">Score : ${score}</span>
        </div>
        <div class="progressbar" style="margin-bottom:1.2rem"><span style="width:${Math.round(100 * step / sc.etapes.length)}%"></span></div>
        <div class="card">
          <p style="line-height:1.7;margin-bottom:1rem">📟 ${esc(e.situation)}</p>
          <p class="q-text">${esc(e.q)}</p>
          <div class="choices">
            ${e.choix.map((c, i) => `<button class="choice" data-i="${i}">${LETTRES[i]}. ${esc(c)}</button>`).join("")}
          </div>
          <div id="sc-exp"></div>
          <div style="margin-top:1rem;text-align:right">
            <button class="btn" id="sc-next" style="display:none"></button>
          </div>
        </div>
      </div>`;

    document.querySelectorAll(".choice").forEach(btn => {
      btn.onclick = () => {
        const i = +btn.dataset.i;
        const good = i === e.reponse;
        if (good) score++;
        log.push({ e, chosen: i, good });
        document.querySelectorAll(".choice").forEach((b, j) => {
          b.disabled = true;
          if (j === e.reponse) b.classList.add("correct");
          else if (j === i) b.classList.add("wrong");
        });
        document.getElementById("sc-exp").innerHTML = `
          <div class="explication">
            <strong>${good ? "✅ Bonne décision." : "❌ Décision risquée."}</strong> ${esc(e.explication)}
            ${e.concept ? `<div style="margin-top:.5rem"><span class="badge">🧩 Concept : ${esc(e.concept)}</span></div>` : ""}
          </div>`;
        const nb = document.getElementById("sc-next");
        nb.style.display = "inline-flex";
        nb.textContent = step + 1 < sc.etapes.length ? "Suite de l'histoire →" : "Débrief du scénario 🏁";
        nb.onclick = next;
        nb.focus();
      };
    });
  }

  function debrief() {
    const pct = Math.round(100 * score / sc.etapes.length);
    document.getElementById("app").innerHTML = `
      <div style="max-width:840px;margin:0 auto">
        <div class="card" style="text-align:center">
          <div style="font-size:3rem">${pct >= 80 ? "🏆" : pct >= 50 ? "🟡" : "🚨"}</div>
          <h1 class="page-title">Débrief — ${esc(sc.titre)}</h1>
          <div class="quiz-result-ring" style="--p:${pct}"><span>${pct}%</span></div>
          <p>${score} bonne(s) décision(s) sur ${sc.etapes.length}.</p>
        </div>
        <div class="card" style="margin-top:1rem">
          <h3 style="color:var(--accent);margin-bottom:.6rem">🧠 Ce qu'il faut retenir</h3>
          <p style="line-height:1.7">${esc(sc.debrief)}</p>
          <h3 style="color:var(--accent);margin:1.2rem 0 .6rem">🧩 Concepts traversés</h3>
          <div style="display:flex;flex-wrap:wrap;gap:.5rem">
            ${sc.etapes.filter(e => e.concept).map(e => `<span class="badge">${esc(e.concept)}</span>`).join("")}
          </div>
          <div style="display:flex;gap:.7rem;margin-top:1.4rem;flex-wrap:wrap">
            <a class="btn" href="#/scenarios">Autre scénario</a>
            <a class="btn secondary" href="#/domaine/${sc.domaine}">Réviser le domaine ${sc.domaine}</a>
          </div>
        </div>
      </div>`;
    window.scrollTo(0, 0);
  }

  return { list, open, next };
})();
