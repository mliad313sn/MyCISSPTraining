/* Examen blanc : tirage pondéré selon les poids officiels des domaines,
   chronomètre, pas de retour arrière (comme l'examen CAT réel),
   correction finale avec analyse par domaine. */
const Exam = (() => {
  let questions, idx, answers, timerId, endTime, config;

  const FORMATS = {
    mini:  { n: 30,  minutes: 45,  label: "Mini examen — 30 questions / 45 min" },
    demi:  { n: 60,  minutes: 90,  label: "Demi examen — 60 questions / 1 h 30" },
    complet: { n: 100, minutes: 180, label: "Examen complet — 100 questions / 3 h (format CAT)" }
  };

  function weightedDraw(n) {
    const domains = Object.values(CISSP_DATA.domains);
    const totalW = domains.reduce((s, d) => s + parseFloat(d.poids), 0);
    let pool = [];
    domains.forEach(d => {
      const want = Math.max(1, Math.round(n * parseFloat(d.poids) / totalW));
      const qs = d.quiz.slice();
      for (let i = qs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [qs[i], qs[j]] = [qs[j], qs[i]];
      }
      qs.slice(0, want).forEach(q => pool.push({ ...q, domId: d.id, domCode: d.code, domTitre: d.titre }));
    });
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    return pool.slice(0, n);
  }

  function home() {
    clearInterval(timerId);
    const hist = Progress.exams().slice(-5).reverse();
    document.getElementById("app").innerHTML = `
      <h1 class="page-title">🎯 Examen blanc</h1>
      <p class="page-sub">Simulez les conditions réelles : questions tirées des 8 domaines selon leur poids officiel à l'examen,
      chronomètre, aucune possibilité de revenir en arrière (comme le vrai CAT d'ISC2). La correction détaillée arrive à la fin.
      Objectif avant de réserver votre examen : <strong>≥ 80 %</strong> de façon constante.</p>
      <div class="card" style="margin-bottom:1.4rem;border-color:var(--warn)">
        <strong>🧭 Les 3 méta-règles à garder en tête sur CHAQUE question :</strong>
        <ul style="padding-left:1.2rem;color:var(--text-dim);margin-top:.4rem">
          <li>La <strong>vie humaine</strong> prime toujours — toute réponse qui protège les personnes gagne.</li>
          <li><strong>Think like a manager</strong> : processus, politique et portée organisationnelle avant la solution technique ponctuelle.</li>
          <li>Questions « FIRST / BEST / MOST » : cherchez l'étape la plus en <strong>amont</strong> du processus (identifier/évaluer avant corriger).</li>
        </ul>
      </div>
      <div class="grid cols-3">
        ${Object.entries(FORMATS).map(([k, f]) => `
          <div class="card" style="text-align:center">
            <div style="font-size:2.2rem">${k === "complet" ? "🏆" : k === "demi" ? "⏱" : "⚡"}</div>
            <h3 style="margin:.5rem 0">${f.label.split("—")[0]}</h3>
            <p style="color:var(--text-dim);font-size:.9rem;margin-bottom:1rem">${f.n} questions · ${f.minutes >= 60 ? (f.minutes / 60) + " h" : f.minutes + " min"}</p>
            <button class="btn" onclick="Exam.start('${k}')">Commencer</button>
          </div>`).join("")}
      </div>
      ${hist.length ? `
        <h2 class="section-title">📈 Mes derniers examens blancs</h2>
        <div class="card">
          ${hist.map(e => `
            <div style="display:flex;justify-content:space-between;gap:1rem;padding:.45rem 0;border-bottom:1px solid var(--border)">
              <span>${new Date(e.date).toLocaleDateString("fr-FR", { day: "2-digit", month: "short", year: "numeric" })}</span>
              <span>${e.score} / ${e.total}</span>
              <strong style="color:${e.pct >= 80 ? "var(--ok)" : e.pct >= 65 ? "var(--warn)" : "var(--ko)"}">${e.pct}%</strong>
            </div>`).join("")}
        </div>` : ""}`;
  }

  function start(formatKey) {
    config = FORMATS[formatKey];
    questions = weightedDraw(config.n);
    idx = 0; answers = [];
    endTime = Date.now() + config.minutes * 60000;
    timerId = setInterval(tick, 1000);
    render();
  }

  function tick() {
    const left = endTime - Date.now();
    const el = document.getElementById("exam-timer");
    if (!el) return;
    if (left <= 0) { clearInterval(timerId); finish(true); return; }
    const h = Math.floor(left / 3600000), m = Math.floor(left / 60000) % 60, s = Math.floor(left / 1000) % 60;
    el.textContent = (h ? h + ":" : "") + String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
    el.classList.toggle("low", left < 5 * 60000);
  }

  function render() {
    if (idx >= questions.length) return finish(false);
    const q = questions[idx];
    document.getElementById("app").innerHTML = `
      <div style="max-width:840px;margin:0 auto">
        <div class="q-head" style="display:flex;justify-content:space-between;align-items:center;gap:1rem;margin-bottom:1rem;flex-wrap:wrap">
          <span class="badge">Question ${idx + 1} / ${questions.length}</span>
          <span class="exam-timer" id="exam-timer">…</span>
          <button class="btn danger small" onclick="if(confirm('Abandonner cet examen blanc ?')) Exam.home()">Abandonner</button>
        </div>
        <div class="progressbar" style="margin-bottom:1.2rem"><span style="width:${Math.round(100 * idx / questions.length)}%"></span></div>
        <div class="card">
          <p class="q-text">${esc(q.q)}</p>
          <div class="choices">
            ${q.choix.map((c, i) => `<button class="choice" data-i="${i}">${LETTRES[i]}. ${esc(c)}</button>`).join("")}
          </div>
        </div>
        <p style="color:var(--text-dim);font-size:.83rem;margin-top:.7rem">⚠️ Comme à l'examen réel : une fois validée, impossible de revenir sur une question.</p>
      </div>`;
    tick();
    document.querySelectorAll(".choice").forEach(btn => {
      btn.onclick = () => {
        const good = +btn.dataset.i === q.reponse;
        answers.push({ q, chosen: +btn.dataset.i, good });
        if (good) Progress.clearError(q.q); else Progress.recordError(q);
        idx++;
        render();
      };
    });
  }

  function finish(timeout) {
    clearInterval(timerId);
    const score = answers.filter(a => a.good).length;
    const total = questions.length;
    const pct = Math.round(100 * score / Math.max(1, answers.length));
    Progress.recordExam(score, total);

    // analyse par domaine
    const byDom = {};
    answers.forEach(a => {
      const b = byDom[a.q.domId] = byDom[a.q.domId] || { code: a.q.domCode, titre: a.q.domTitre, ok: 0, n: 0 };
      b.n++; if (a.good) b.ok++;
    });
    const failed = answers.filter(a => !a.good);

    document.getElementById("app").innerHTML = `
      <div style="max-width:840px;margin:0 auto">
        <div class="card" style="text-align:center">
          ${timeout ? `<p style="color:var(--warn)">⏰ Temps écoulé !</p>` : ""}
          <h1 class="page-title">${pct >= 80 ? "🏆 Réussi !" : pct >= 65 ? "🟡 Presque…" : "📚 À retravailler"}</h1>
          <div class="quiz-result-ring" style="--p:${pct}"><span>${pct}%</span></div>
          <p>${score} bonnes réponses sur ${answers.length} traitées (${total} prévues).</p>
          <p style="color:var(--text-dim)">${pct >= 80
            ? "À ce niveau de constance, vous êtes prêt à réserver l'examen réel."
            : "Concentrez vos révisions sur les domaines les plus faibles ci-dessous, puis retentez."}</p>
          <div style="display:flex;gap:.7rem;justify-content:center;margin-top:1rem;flex-wrap:wrap">
            <button class="btn" onclick="Exam.home()">Nouvel examen blanc</button>
            <a class="btn secondary" href="#/domaines">Réviser les domaines</a>
          </div>
        </div>
        <h2 class="section-title">📊 Résultat par domaine</h2>
        <div class="card">
          ${Object.values(byDom).map(b => {
            const p = Math.round(100 * b.ok / b.n);
            return `<div style="margin-bottom:.8rem">
              <div style="display:flex;justify-content:space-between;font-size:.92rem">
                <span>${b.code} — ${esc(b.titre)}</span><strong style="color:${p >= 80 ? "var(--ok)" : p >= 60 ? "var(--warn)" : "var(--ko)"}">${b.ok}/${b.n} · ${p}%</strong>
              </div>
              <div class="progressbar"><span style="width:${p}%"></span></div>
            </div>`;
          }).join("")}
        </div>
        ${failed.length ? `
        <h2 class="section-title">📝 Questions ratées (${failed.length})</h2>
        ${failed.map(a => `
          <div class="card" style="margin-bottom:.8rem">
            <span class="badge">${a.q.domCode}</span>
            <p class="q-text" style="margin-top:.5rem">${esc(a.q.q)}</p>
            <p style="color:var(--ko)">Votre réponse : ${LETTRES[a.chosen]}. ${esc(a.q.choix[a.chosen])}</p>
            <p style="color:var(--ok)">Bonne réponse : ${LETTRES[a.q.reponse]}. ${esc(a.q.choix[a.q.reponse])}</p>
            <div class="explication">${esc(a.q.explication)}</div>
          </div>`).join("")}` : ""}
      </div>`;
    window.scrollTo(0, 0);
  }

  return { home, start };
})();
