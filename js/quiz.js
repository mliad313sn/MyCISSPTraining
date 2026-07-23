/* Moteur de quiz par domaine : questions mélangées, correction immédiate,
   explication pédagogique, score enregistré. */
const Quiz = (() => {
  let domain, questions, idx, score, answers;

  function shuffle(a) {
    a = a.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function open(domainId, count) {
    domain = CISSP_DATA.domains[domainId];
    questions = shuffle(domain.quiz).slice(0, count || 15);
    idx = 0; score = 0; answers = [];
    render();
  }

  function render() {
    const app = document.getElementById("app");
    if (idx >= questions.length) return renderResult();
    const q = questions[idx];
    const diff = ["", "🟢 facile", "🟡 moyen", "🔴 difficile"][q.difficulte || 2];

    app.innerHTML = `
      <div class="quiz-view" style="max-width:820px;margin:0 auto;--dc:${domain.couleur}">
        <div class="q-head">
          <a class="btn secondary small" href="#/domaine/${domain.id}">← ${domain.code}</a>
          <span class="badge">Question ${idx + 1} / ${questions.length}</span>
          <span class="badge">${diff}</span>
          <span class="badge">Score : ${score}</span>
        </div>
        <div class="progressbar" style="margin-bottom:1.2rem"><span style="width:${Math.round(100 * idx / questions.length)}%"></span></div>
        <div class="card">
          <p class="q-text">${esc(q.q)}</p>
          <div class="choices">
            ${q.choix.map((c, i) => `<button class="choice" data-i="${i}">${LETTRES[i]}. ${esc(c)}</button>`).join("")}
          </div>
          <div id="q-exp"></div>
          <div style="margin-top:1rem;text-align:right">
            <button class="btn" id="q-next" style="display:none">Question suivante →</button>
          </div>
        </div>
      </div>`;

    document.querySelectorAll(".quiz-view .choice").forEach(btn => {
      btn.onclick = () => answer(+btn.dataset.i, q);
    });
  }

  function answer(i, q) {
    const good = i === q.reponse;
    if (good) score++;
    answers.push({ q, chosen: i, good });
    document.querySelectorAll(".quiz-view .choice").forEach((b, j) => {
      b.disabled = true;
      if (j === q.reponse) b.classList.add("correct");
      else if (j === i) b.classList.add("wrong");
    });
    document.getElementById("q-exp").innerHTML =
      `<div class="explication"><strong>${good ? "✅ Bonne réponse !" : "❌ Mauvaise réponse."}</strong> ${esc(q.explication)}</div>`;
    const nextBtn = document.getElementById("q-next");
    nextBtn.style.display = "inline-flex";
    nextBtn.textContent = idx + 1 < questions.length ? "Question suivante →" : "Voir mon résultat 🏁";
    nextBtn.onclick = () => { idx++; render(); };
    nextBtn.focus();
  }

  function renderResult() {
    const pct = Math.round(100 * score / questions.length);
    Progress.recordQuiz(domain.id, pct);
    const verdict =
      pct >= 80 ? "Excellent ! Vous maîtrisez ce domaine — objectif ≥ 80 % atteint." :
      pct >= 65 ? "Bien. Encore un petit effort pour atteindre la zone de confort (≥ 80 %)." :
      "Ce domaine mérite une nouvelle révision : revoyez les leçons puis retentez le quiz.";
    const failed = answers.filter(a => !a.good);

    document.getElementById("app").innerHTML = `
      <div style="max-width:820px;margin:0 auto">
        <div class="card" style="text-align:center">
          <h1 class="page-title">Résultat — ${esc(domain.titre)}</h1>
          <div class="quiz-result-ring" style="--p:${pct}"><span>${pct}%</span></div>
          <p>${score} / ${questions.length} bonnes réponses. ${verdict}</p>
          <div style="display:flex;gap:.7rem;justify-content:center;margin-top:1rem;flex-wrap:wrap">
            <button class="btn" onclick="Quiz.open(${domain.id})">Refaire un quiz</button>
            <a class="btn secondary" href="#/domaine/${domain.id}">Retour au domaine</a>
            <a class="btn secondary" href="#/examen">Examen blanc</a>
          </div>
        </div>
        ${failed.length ? `
        <h2 class="section-title">📝 À revoir (${failed.length})</h2>
        ${failed.map(a => `
          <div class="card" style="margin-bottom:.8rem">
            <p class="q-text">${esc(a.q.q)}</p>
            <p style="color:var(--ko)">Votre réponse : ${LETTRES[a.chosen]}. ${esc(a.q.choix[a.chosen])}</p>
            <p style="color:var(--ok)">Bonne réponse : ${LETTRES[a.q.reponse]}. ${esc(a.q.choix[a.q.reponse])}</p>
            <div class="explication">${esc(a.q.explication)}</div>
          </div>`).join("")}` : ""}
      </div>`;
    window.scrollTo(0, 0);
  }

  return { open };
})();
