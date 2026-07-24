/* Examens blancs :
   - Entraînements français (30/60/100 questions, tirage pondéré officiel)
   - Simulation CAT réaliste EN ANGLAIS : adaptative (la difficulté suit vos
     réponses), longueur variable 100-150 questions dont 25 items pré-test
     non notés, arrêt anticipé par confiance statistique, 3 h, sans retour
     arrière — le format exact que rencontre un candidat francophone,
     puisque le CISSP ne se passe plus qu'en anglais (ou zh/de/ja/es).
   - Items « avancés » : questions d'ordonnancement (drag-and-drop du réel)
     injectées dans l'examen complet et le CAT. */
const Exam = (() => {
  let mode, questions, idx, answers, timerId, endTime, config;
  // état CAT
  let pools, targetDiff, askedCount, pretestFlags, orderPlan;
  // état item d'ordonnancement en cours
  let ordChoice;

  const FORMATS = {
    mini:  { n: 30,  minutes: 45,  label: "Mini examen (FR) — 30 questions / 45 min" },
    demi:  { n: 60,  minutes: 90,  label: "Demi examen (FR) — 60 questions / 1 h 30" },
    complet: { n: 100, minutes: 180, label: "Examen complet (FR) — 100 questions / 3 h" },
    cat: { minutes: 180, label: "Simulation CAT réelle (EN) — 100-150 questions / 3 h" }
  };

  const shuffle = a => {
    a = a.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  function domains() { return Object.values(CISSP_DATA.domains); }

  function tagged(d, q) { return { ...q, domId: d.id, domCode: d.code, domTitre: d.titre }; }

  /* Tirage pondéré par domaine ET par difficulté : l'examen réel est
     majoritairement du jugement en situation, donc les difficultés 2-3
     dominent (~30 % d3, ~45 % d2, le reste d1). */
  function weightedDraw(n, lang) {
    const ds = domains();
    const totalW = ds.reduce((s, d) => s + parseFloat(d.poids), 0);
    let pool = [];
    ds.forEach(d => {
      const bank = shuffle(lang === "en" ? (d.quizEn || []) : d.quiz);
      const want = Math.max(1, Math.round(n * parseFloat(d.poids) / totalW));
      const byDiff = k => bank.filter(q => (q.difficulte || 2) === k);
      const picked = [];
      [[3, Math.round(want * 0.3)], [2, Math.round(want * 0.45)]].forEach(([lvl, quota]) => {
        byDiff(lvl).slice(0, quota).forEach(q => picked.push(q));
      });
      for (const q of bank) {
        if (picked.length >= want) break;
        if (!picked.includes(q)) picked.push(q);
      }
      picked.slice(0, want).forEach(q => pool.push(tagged(d, q)));
    });
    return shuffle(pool).slice(0, n);
  }

  function orderingItems(nb) {
    const ordres = ((CISSP_DATA.memo || {}).ordres || []);
    return shuffle(ordres).slice(0, nb).map(o => ({
      type: "ordre", id: o.id, titre: o.titre, consigne: o.consigne,
      items: o.items, domId: o.domaine,
      domCode: (CISSP_DATA.domains[o.domaine] || {}).code || "",
      domTitre: (CISSP_DATA.domains[o.domaine] || {}).titre || ""
    }));
  }

  /* ---------- Accueil ---------- */
  function enCours() { return timerId != null; }
  function resume() { render(); }
  function abandon() { clearInterval(timerId); timerId = null; }

  function home() {
    clearInterval(timerId); timerId = null;
    const hist = Progress.exams().slice(-5).reverse();
    const enTotal = domains().reduce((s, d) => s + (d.quizEn || []).length, 0);
    document.getElementById("app").innerHTML = `
      <h1 class="page-title">Examen blanc</h1>
      <p class="page-sub">Entraînez-vous en français, puis passez en <strong>conditions réelles</strong>.
      Objectif avant de réserver : <strong>≥ 80 %</strong> de façon constante.</p>

      <div class="card" style="border-color:var(--warn);margin-bottom:1.4rem">
        <h3 style="display:flex;align-items:center;gap:.5rem;color:var(--warn)">${icon("alert", 17)} Important : l'examen réel est en anglais</h3>
        <p style="color:var(--text-dim);margin-top:.4rem">Depuis 2024, le CISSP n'est plus proposé en français : un candidat francophone passe
        l'examen <strong>CAT en anglais</strong> (100 à 150 questions, 3 h, dont 25 items pré-test non notés, arrêt anticipé possible,
        aucun retour arrière, pas de temps additionnel). Entraînez-vous d'abord en français pour les concepts,
        puis basculez sur la <strong>simulation CAT en anglais</strong> pour vous préparer aux conditions exactes du jour J.</p>
      </div>

      <div class="card" style="border-color:var(--accent);margin-bottom:1.4rem;display:flex;gap:1.2rem;align-items:center;flex-wrap:wrap">
        <span style="flex:none;width:44px;height:44px;border-radius:11px;background:var(--primary-soft);color:var(--primary);display:flex;align-items:center;justify-content:center">${icon("globe", 22)}</span>
        <div style="flex:1;min-width:240px">
          <h3>Simulation CAT réelle — en anglais</h3>
          <p style="color:var(--text-dim);font-size:.92rem">Adaptative (la difficulté suit vos réponses), 100-150 questions selon votre constance,
          25 items pré-test non notés, items d'ordonnancement, corrections expliquées en français. Banque : ${enTotal} questions EN.</p>
        </div>
        <button class="btn" onclick="Exam.start('cat')" ${enTotal >= 60 ? "" : "disabled title='Banque anglaise en cours de chargement'"}>Passer en conditions réelles</button>
      </div>

      <h2 class="section-title">Entraînements en français</h2>
      <div class="grid cols-3">
        ${["mini", "demi", "complet"].map(k => {
          const f = FORMATS[k];
          return `
          <div class="card" style="text-align:center">
            <span style="width:40px;height:40px;margin:0 auto;border-radius:10px;background:var(--surface-3);color:var(--muted);display:flex;align-items:center;justify-content:center">${icon(k === "complet" ? "award" : k === "demi" ? "timer" : "sparkle", 20)}</span>
            <h3 style="margin:.5rem 0">${f.label.split("—")[0]}</h3>
            <p style="color:var(--text-dim);font-size:.9rem;margin-bottom:1rem">${f.n} questions · ${f.minutes >= 60 ? (f.minutes / 60) + " h" : f.minutes + " min"}${k === "complet" ? " · items d'ordonnancement inclus" : ""}</p>
            <button class="btn secondary" onclick="Exam.start('${k}')">Commencer</button>
          </div>`;
        }).join("")}
      </div>
      ${hist.length ? `
        <h2 class="section-title">Mes derniers examens blancs</h2>
        <div class="card">
          ${hist.map(e => `
            <div style="display:flex;justify-content:space-between;gap:1rem;padding:.45rem 0;border-bottom:1px solid var(--border)">
              <span>${new Date(e.date).toLocaleDateString("fr-FR", { day: "2-digit", month: "short", year: "numeric" })}</span>
              <span>${e.total} q${e.en ? " · EN/CAT" : " · FR"}</span>
              <strong style="color:${e.pct >= 80 ? "var(--ok)" : e.pct >= 65 ? "var(--warn)" : "var(--ko)"}">${e.pct}%</strong>
            </div>`).join("")}
        </div>` : ""}`;
  }

  /* ---------- Démarrage ---------- */
  function start(formatKey) {
    config = FORMATS[formatKey];
    mode = formatKey === "cat" ? "cat" : "lin";
    idx = 0; answers = []; ordChoice = [];

    if (mode === "lin") {
      questions = weightedDraw(config.n, "fr");
      if (formatKey === "complet") {
        // items avancés : 3 ordonnancements insérés à des positions aléatoires
        orderingItems(3).forEach(o =>
          questions.splice(1 + Math.floor(Math.random() * (questions.length - 2)), 0, o));
      }
    } else {
      // CAT : pools par domaine, tirage adaptatif, 25 pré-tests non notés
      pools = {};
      domains().forEach(d => pools[d.id] = shuffle((d.quizEn || []).map(q => tagged(d, q))));
      targetDiff = 2; askedCount = 0;
      pretestFlags = new Set(shuffle([...Array(100).keys()]).slice(0, 25));
      // 2 items d'ordonnancement à des positions fixes aléatoires (notés)
      orderPlan = new Set(shuffle([...Array(80).keys()].map(i => i + 10)).slice(0, 2));
      questions = null;
    }
    endTime = Date.now() + config.minutes * 60000;
    timerId = setInterval(tick, 1000);
    render();
  }

  /* Tirage CAT : domaine pondéré, difficulté proche de la cible */
  function nextCatQuestion() {
    if (orderPlan.has(askedCount)) {
      const o = orderingItems(1)[0];
      if (o) return o;
    }
    const ds = domains().filter(d => (pools[d.id] || []).length);
    if (!ds.length) return null;
    const totalW = ds.reduce((s, d) => s + parseFloat(d.poids), 0);
    let r = Math.random() * totalW, dom = ds[0];
    for (const d of ds) { r -= parseFloat(d.poids); if (r <= 0) { dom = d; break; } }
    const pool = pools[dom.id];
    // question dont la difficulté est la plus proche de la cible adaptative
    let best = 0, bestDelta = 99;
    pool.forEach((q, i) => {
      const delta = Math.abs((q.difficulte || 2) - targetDiff);
      if (delta < bestDelta) { bestDelta = delta; best = i; }
    });
    return pool.splice(best, 1)[0];
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

  /* ---------- Rendu d'une question ---------- */
  let current = null;
  function render() {
    if (mode === "lin" && idx >= questions.length) return finish(false);
    if (mode === "cat") {
      // règles d'arrêt du CAT
      const scored = answers.filter(a => !a.pretest && a.q.type !== "ordre");
      const acc = scored.length ? scored.filter(a => a.good).length / scored.length : 0;
      if (askedCount >= 150 || (askedCount >= 100 && (acc >= 0.72 || acc <= 0.58))) return finish(false);
      current = nextCatQuestion();
      if (!current) return finish(false);
    } else {
      current = questions[idx];
    }
    const q = current;
    const numero = mode === "cat" ? askedCount + 1 : idx + 1;
    const total = mode === "cat" ? "100-150" : questions.length;

    document.getElementById("app").innerHTML = `
      <div style="max-width:840px;margin:0 auto">
        <div class="q-head" style="display:flex;justify-content:space-between;align-items:center;gap:1rem;margin-bottom:1rem;flex-wrap:wrap">
          <span class="badge">${mode === "cat" ? "CAT · EN" : "FR"} · Question ${numero} ${mode === "cat" ? "(max 150)" : "/ " + total}</span>
          <span class="exam-timer" id="exam-timer">…</span>
          <button class="btn danger small" onclick="if(confirm('Abandonner cet examen blanc ?')) Exam.home()">Abandonner</button>
        </div>
        <div class="progressbar" style="margin-bottom:1.2rem"><span style="width:${mode === "cat" ? Math.round(100 * askedCount / 150) : Math.round(100 * idx / questions.length)}%"></span></div>
        <div class="card">
          ${q.type === "ordre" ? renderOrdreHTML(q) : `
          <p class="q-text">${esc(q.q)}</p>
          <div class="choices">
            ${q.choix.map((c, i) => `<button class="choice" data-i="${i}">${LETTRES[i]}. ${esc(c)}</button>`).join("")}
          </div>`}
        </div>
        <p style="color:var(--text-dim);font-size:.83rem;margin-top:.7rem">Comme à l'examen réel : une fois validée, impossible de revenir sur une question.${mode === "cat" ? " Certaines questions sont des items pré-test non notés — impossible de les distinguer, comme au vrai CAT." : ""}</p>
      </div>`;
    tick();

    if (q.type === "ordre") wireOrdre(q);
    else document.querySelectorAll(".choice").forEach(btn => {
      btn.onclick = () => submitAnswer(+btn.dataset.i === q.reponse, +btn.dataset.i);
    });
  }

  /* ---------- Item d'ordonnancement ---------- */
  function renderOrdreHTML(q) {
    ordChoice = [];
    return `
      <span class="badge" style="margin-bottom:.6rem">Item avancé — ordonnancement (comme les drag-and-drop du réel)</span>
      <p class="q-text" style="margin-top:.5rem">${esc(q.titre)}</p>
      <p style="color:var(--text-dim);font-size:.92rem;margin-bottom:.8rem">${esc(q.consigne)} Cliquez les éléments dans l'ordre.</p>
      <div class="choices" id="ord-src">
        ${shuffle(q.items.map((it, i) => ({ it, i }))).map(o =>
          `<button class="choice" data-i="${o.i}">${esc(o.it)}</button>`).join("")}
      </div>
      <p style="margin-top:.8rem;font-size:.9rem">Votre ordre : <span id="ord-out" style="color:var(--accent)">—</span></p>`;
  }

  function wireOrdre(q) {
    document.querySelectorAll("#ord-src .choice").forEach(btn => {
      btn.onclick = () => {
        btn.disabled = true; btn.style.opacity = ".35";
        ordChoice.push(+btn.dataset.i);
        document.getElementById("ord-out").textContent =
          ordChoice.map(i => q.items[i]).join(" → ");
        if (ordChoice.length === q.items.length) {
          const good = ordChoice.every((v, k) => v === k);
          submitAnswer(good, ordChoice.map(i => q.items[i]).join(" → "));
        }
      };
    });
  }

  /* ---------- Réponse ---------- */
  function submitAnswer(good, chosen) {
    const q = current;
    const pretest = mode === "cat" && q.type !== "ordre" && pretestFlags.has(askedCount);
    answers.push({ q, chosen, good, pretest });
    if (q.type !== "ordre") {
      if (good) Progress.clearError(q.q); else Progress.recordError(q);
    }
    if (mode === "cat") {
      askedCount++;
      if (q.type !== "ordre" && !pretest)
        targetDiff = good ? Math.min(3, targetDiff + 0.5) : Math.max(1, targetDiff - 0.5);
    } else idx++;
    render();
  }

  /* ---------- Résultat ---------- */
  function finish(timeout) {
    clearInterval(timerId); timerId = null;
    const scored = answers.filter(a => !a.pretest);
    const score = scored.filter(a => a.good).length;
    const total = scored.length;
    const pct = total ? Math.round(100 * score / total) : 0;
    Progress.recordExam(score, Math.max(total, 1), mode === "cat");

    const byDom = {};
    scored.forEach(a => {
      const b = byDom[a.q.domId] = byDom[a.q.domId] || { code: a.q.domCode, titre: a.q.domTitre, ok: 0, n: 0 };
      b.n++; if (a.good) b.ok++;
    });
    const failed = answers.filter(a => !a.good);
    const passe = pct >= (mode === "cat" ? 72 : 80);
    const scaled = Math.min(1000, Math.round(pct * 10.5));

    document.getElementById("app").innerHTML = `
      <div style="max-width:840px;margin:0 auto">
        <div class="card" style="text-align:center">
          ${timeout ? `<p style="color:var(--warn)">Temps écoulé.</p>` : ""}
          ${mode === "cat" ? `<span class="badge">Simulation CAT · EN · ${answers.length} questions posées · ${answers.length - total} pré-test non notées</span>` : ""}
          <h1 class="page-title" style="margin-top:.5rem">${passe ? (mode === "cat" ? "PASS (estimation)" : "Réussi") : pct >= 60 ? "Presque…" : "À retravailler"}</h1>
          <div class="quiz-result-ring" style="--p:${pct}"><span>${pct}%</span></div>
          <p>${score} bonnes réponses sur ${total} notées.
          ${mode === "cat" ? `Score estimé ≈ <strong>${scaled}/1000</strong> (standard de passage : 700).` : ""}</p>
          <p style="color:var(--text-dim)">${passe
            ? "À ce niveau de constance, vous êtes prêt à réserver l'examen réel."
            : "Concentrez vos révisions sur les domaines les plus faibles ci-dessous, puis retentez."}</p>
          <div style="display:flex;gap:.7rem;justify-content:center;margin-top:1rem;flex-wrap:wrap">
            <button class="btn" onclick="Exam.home()">Nouvel examen blanc</button>
            <a class="btn secondary" href="#/erreurs">Mon journal d'erreurs</a>
            <a class="btn secondary" href="#/domaines">Réviser les domaines</a>
          </div>
        </div>
        <h2 class="section-title">Résultat par domaine</h2>
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
        <h2 class="section-title">Questions ratées (${failed.length})</h2>
        ${failed.map(a => `
          <div class="card" style="margin-bottom:.8rem">
            <span class="badge">${a.q.domCode}</span>${a.pretest ? `<span class="badge">pré-test non noté</span>` : ""}
            <p class="q-text" style="margin-top:.5rem">${esc(a.q.type === "ordre" ? a.q.titre : a.q.q)}</p>
            ${a.q.type === "ordre"
              ? `<p style="color:var(--ko)">Votre ordre : ${esc(String(a.chosen))}</p>
                 <p style="color:var(--ok)">Ordre correct : ${a.q.items.map(esc).join(" → ")}</p>`
              : `<p style="color:var(--ko)">Votre réponse : ${LETTRES[a.chosen]}. ${esc(a.q.choix[a.chosen])}</p>
                 <p style="color:var(--ok)">Bonne réponse : ${LETTRES[a.q.reponse]}. ${esc(a.q.choix[a.q.reponse])}</p>
                 <div class="explication">${esc(a.q.explication)}${perOptionHTML(a.q)}</div>`}
          </div>`).join("")}` : ""}
      </div>`;
    window.scrollTo(0, 0);
  }

  return { home, start, enCours, resume, abandon };
})();
