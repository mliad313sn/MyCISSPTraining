/* Routeur + vues principales : tableau de bord, domaines, glossaire, méthode. */
const App = (() => {

  function domains() {
    return Object.values(CISSP_DATA.domains).sort((a, b) => a.id - b.id);
  }

  /* ---------- Routage ---------- */
  function route() {
    Player.close();
    const hash = location.hash || "#/";
    const parts = hash.replace(/^#\//, "").split("/");
    const view = parts[0] || "";

    setActiveNav(view);
    window.scrollTo(0, 0);

    switch (view) {
      case "": renderHome(); break;
      case "domaines": renderDomains(); break;
      case "domaine": renderDomain(+parts[1]); break;
      case "lecon": Player.open(+parts[1], parts[2]); break;
      case "quiz": Quiz.open(+parts[1]); break;
      case "flashcards": Flashcards.open("all"); break;
      case "scenarios": parts[1] ? Scenarios.open(parts[1]) : Scenarios.list(); break;
      case "memo": Memo.list(parts[1]); break;
      case "examen": Exam.home(); break;
      case "glossaire": renderGlossary(); break;
      case "methode": renderMethod(); break;
      default: renderHome();
    }
  }

  function setActiveNav(view) {
    const map = { "": "accueil", domaines: "domaines", domaine: "domaines", lecon: "domaines", quiz: "domaines", flashcards: "flashcards", scenarios: "scenarios", memo: "memo", examen: "examen", glossaire: "glossaire", methode: "methode" };
    document.querySelectorAll(".topnav a").forEach(a =>
      a.classList.toggle("active", a.dataset.route === (map[view] || "")));
  }

  function nav(hash) { location.hash = hash; return false; }

  /* ---------- Accueil / tableau de bord ---------- */
  function renderHome() {
    const ds = domains();
    const pct = Progress.globalPct(ds);
    const totalLecons = ds.reduce((s, d) => s + d.lecons.length, 0);
    const totalQuiz = ds.reduce((s, d) => s + d.quiz.length, 0);
    const totalCards = ds.reduce((s, d) => s + d.flashcards.length, 0);
    const exams = Progress.exams();
    const lastExam = exams[exams.length - 1];

    // prochaine leçon à suivre
    let next = null;
    outer: for (const d of ds) for (const l of d.lecons)
      if (!Progress.lessonDone(l.id)) { next = { d, l }; break outer; }

    document.getElementById("app").innerHTML = `
      <section class="hero">
        <h1>Réussissez le <span>CISSP</span> du premier coup,<br>en français.</h1>
        <p>Une formation complète et interactive couvrant les 8 domaines du CBK d'ISC2 :
        vidéos interactives avec narration vocale, quiz corrigés, flashcards et examens blancs chronométrés.
        Les termes techniques restent en anglais — comme à l'examen.</p>
        <div class="cta">
          ${next
            ? `<a class="btn" href="#/lecon/${next.d.id}/${next.l.id}">▶ ${pct > 0 ? "Reprendre" : "Commencer"} : ${esc(next.l.titre)}</a>`
            : `<a class="btn" href="#/examen">🏆 Tout est terminé — Examen blanc !</a>`}
          <a class="btn secondary" href="#/methode">📋 La méthode pour réussir</a>
        </div>
      </section>

      <div class="stats-row">
        <div class="stat"><div class="num">${pct}%</div><div class="lbl">Progression du cours</div></div>
        <div class="stat"><div class="num">${totalLecons}</div><div class="lbl">Leçons vidéo</div></div>
        <div class="stat"><div class="num">${totalQuiz}</div><div class="lbl">Questions d'entraînement</div></div>
        <div class="stat"><div class="num">${totalCards}</div><div class="lbl">Flashcards</div></div>
        <div class="stat"><div class="num">${Flashcards.dueTotal()}</div><div class="lbl">Cartes à réviser aujourd'hui</div></div>
        <div class="stat"><div class="num">${lastExam ? lastExam.pct + "%" : "—"}</div><div class="lbl">Dernier examen blanc</div></div>
      </div>

      <h2 class="section-title">📚 Les 8 domaines du CISSP</h2>
      <div class="grid cols-4">${ds.map(domainCard).join("")}</div>

      <h2 class="section-title">🚀 Entraînement</h2>
      <div class="grid cols-4">
        <div class="card" style="text-align:center">
          <div style="font-size:2rem">🎬</div><h3>Scénarios réels</h3>
          <p style="color:var(--text-dim);font-size:.9rem;margin:.4rem 0 1rem">${(CISSP_DATA.scenarios || []).length} études de cas inspirées d'incidents réels.</p>
          <a class="btn secondary" href="#/scenarios">Décider</a>
        </div>
        <div class="card" style="text-align:center">
          <div style="font-size:2rem">🃏</div><h3>Flashcards</h3>
          <p style="color:var(--text-dim);font-size:.9rem;margin:.4rem 0 1rem">${totalCards} cartes avec répétition espacée (Leitner).</p>
          <a class="btn secondary" href="#/flashcards">Réviser</a>
        </div>
        <div class="card" style="text-align:center">
          <div style="font-size:2rem">🧠</div><h3>Mémo</h3>
          <p style="color:var(--text-dim);font-size:.9rem;margin:.4rem 0 1rem">Mnémoniques et séquences à remettre dans l'ordre.</p>
          <a class="btn secondary" href="#/memo">Mémoriser</a>
        </div>
        <div class="card" style="text-align:center">
          <div style="font-size:2rem">🎯</div><h3>Examen blanc</h3>
          <p style="color:var(--text-dim);font-size:.9rem;margin:.4rem 0 1rem">Simulation chronométrée, tirage pondéré comme le vrai examen.</p>
          <a class="btn secondary" href="#/examen">Se tester</a>
        </div>
        <div class="card" style="text-align:center">
          <div style="font-size:2rem">📖</div><h3>Glossaire</h3>
          <p style="color:var(--text-dim);font-size:.9rem;margin:.4rem 0 1rem">Tous les termes techniques anglais expliqués en français.</p>
          <a class="btn secondary" href="#/glossaire">Consulter</a>
        </div>
      </div>`;
  }

  function domainCard(d) {
    const pct = Progress.domainPct(d);
    const best = Progress.quizBest(d.id);
    return `
      <div class="card domain-card" style="--dc:${d.couleur}" onclick="App.nav('#/domaine/${d.id}')">
        <div class="dc-head"><span class="dc-icon">${d.icone}</span><span class="badge">${d.code} · ${d.poids}</span></div>
        <h3>${esc(d.titre)}</h3>
        <div class="dc-en">${esc(d.titreEn)}</div>
        <div class="progressbar"><span style="width:${pct}%"></span></div>
        <div class="dc-meta">
          <span class="badge">${d.lecons.length} leçons</span>
          ${best ? `<span class="badge">quiz : ${best}%</span>` : ""}
          <span class="dc-pct">${pct}%</span>
        </div>
      </div>`;
  }

  /* ---------- Liste des domaines ---------- */
  function renderDomains() {
    document.getElementById("app").innerHTML = `
      <h1 class="page-title">Les 8 domaines du CBK</h1>
      <p class="page-sub">Le CISSP couvre huit domaines pondérés. Travaillez-les dans l'ordre — le Domaine 1 pose les fondations
      de « penser comme un manager », l'état d'esprit qui fait réussir l'examen.</p>
      <div class="grid cols-2">${domains().map(domainCard).join("")}</div>`;
  }

  /* ---------- Page d'un domaine ---------- */
  function renderDomain(id) {
    const d = CISSP_DATA.domains[id];
    if (!d) return renderDomains();
    const pct = Progress.domainPct(d);
    const best = Progress.quizBest(d.id);

    document.getElementById("app").innerHTML = `
      <div style="--dc:${d.couleur}">
        <a class="btn secondary small" href="#/domaines">← Tous les domaines</a>
        <div class="domain-hero" style="margin-top:1.1rem">
          <div class="dh-icon">${d.icone}</div>
          <div style="flex:1;min-width:260px">
            <h1 class="page-title">${d.code} — ${esc(d.titre)}</h1>
            <p style="color:var(--text-dim);font-style:italic">${esc(d.titreEn)} · ${d.poids} de l'examen</p>
            <p style="margin-top:.5rem;max-width:75ch">${esc(d.description)}</p>
          </div>
          <div class="card" style="min-width:210px;text-align:center">
            <div style="font-size:1.6rem;font-weight:800;color:${d.couleur}">${pct}%</div>
            <div class="progressbar" style="margin:.5rem 0"><span style="width:${pct}%"></span></div>
            <div style="font-size:.85rem;color:var(--text-dim)">${best ? "Meilleur quiz : " + best + "%" : "Quiz non tenté"}</div>
          </div>
        </div>

        <h2 class="section-title">🎬 Leçons vidéo interactives</h2>
        ${d.lecons.map((l, i) => `
          <div class="lesson-row ${Progress.lessonDone(l.id) ? "done" : ""}" onclick="App.nav('#/lecon/${d.id}/${l.id}')">
            <div class="lr-num">${Progress.lessonDone(l.id) ? "✓" : i + 1}</div>
            <div>
              <div class="lr-title">${esc(l.titre)}</div>
              <div class="lr-sub">${l.slides.length} diapositives · ≈ ${l.duree} min · narration vocale 🇫🇷</div>
            </div>
            <div class="lr-play">▶</div>
          </div>`).join("")}

        <h2 class="section-title">🧪 Se tester sur ce domaine</h2>
        <div class="grid cols-3">
          <div class="card" style="text-align:center">
            <h3>Quiz du domaine</h3>
            <p style="color:var(--text-dim);font-size:.9rem;margin:.4rem 0 1rem">15 questions tirées au hasard parmi ${d.quiz.length}, correction immédiate.</p>
            <a class="btn" href="#/quiz/${d.id}">Lancer le quiz</a>
          </div>
          <div class="card" style="text-align:center">
            <h3>Flashcards ${d.code}</h3>
            <p style="color:var(--text-dim);font-size:.9rem;margin:.4rem 0 1rem">${d.flashcards.length} cartes pour ancrer le vocabulaire.</p>
            <button class="btn secondary" onclick="Flashcards.open(${d.id})">Réviser</button>
          </div>
          <div class="card">
            <h3>🎯 Objectifs officiels</h3>
            <ul style="padding-left:1.1rem;color:var(--text-dim);font-size:.88rem;margin-top:.5rem">
              ${d.objectifs.slice(0, 8).map(o => `<li>${esc(o)}</li>`).join("")}
            </ul>
          </div>
        </div>
      </div>`;
  }

  /* ---------- Glossaire ---------- */
  function renderGlossary() {
    const terms = (CISSP_DATA.glossaire || []).slice().sort((a, b) => a.terme.localeCompare(b.terme));
    document.getElementById("app").innerHTML = `
      <h1 class="page-title">📖 Glossaire CISSP</h1>
      <p class="page-sub">Les termes techniques restent en anglais à l'examen — voici leur explication en français.</p>
      <div style="display:flex;gap:.8rem;align-items:center;flex-wrap:wrap;margin-bottom:1.2rem">
        <input class="gloss-search" id="gs" type="search" placeholder="🔍 Rechercher un terme (ex : ALE, Kerberos, Zero Trust…)" autocomplete="off" style="flex:1;min-width:240px;margin-bottom:0">
        <label class="badge" style="cursor:pointer;padding:.55rem .9rem;font-size:.9rem">
          <input type="checkbox" id="gs-acro" style="margin-right:.4rem">Acronymes uniquement
        </label>
      </div>
      <div class="card"><dl id="gloss-list">
        ${terms.map(t => `<div class="gloss-item" data-k="${esc((t.terme + " " + t.def).toLowerCase())}">
          <dt>${esc(t.terme)}</dt><dd>${esc(t.def)}</dd></div>`).join("")}
      </dl></div>`;
    const applyFilter = () => {
      const v = document.getElementById("gs").value.toLowerCase().trim();
      const acro = document.getElementById("gs-acro").checked;
      document.querySelectorAll(".gloss-item").forEach(el => {
        const term = el.querySelector("dt").textContent;
        const isAcro = /^[A-Z0-9]{2,}[\s(\/]|^[A-Z0-9]{2,}$/.test(term);
        const okText = !v || el.dataset.k.includes(v);
        el.style.display = okText && (!acro || isAcro) ? "" : "none";
      });
    };
    document.getElementById("gs").oninput = applyFilter;
    document.getElementById("gs-acro").onchange = applyFilter;
  }

  /* ---------- Méthode ---------- */
  function renderMethod() {
    document.getElementById("app").innerHTML = `
      <h1 class="page-title">📋 La méthode pour réussir du premier coup</h1>
      <p class="page-sub">Le CISSP n'est pas un examen technique : c'est un examen de <strong>jugement managérial</strong>.
      Voici la stratégie complète, adaptée de l'expérience de candidats certifiés.</p>
      <div class="card rich">
        <h3>🧠 1. Penser comme un manager (« Think like a CEO »)</h3>
        <ul>
          <li>Vous êtes un <strong>conseiller du business</strong>, pas un technicien : la sécurité sert les objectifs de l'organisation.</li>
          <li>La <strong>vie humaine</strong> prime toujours sur tout le reste ; ensuite viennent la mission et les données.</li>
          <li>Privilégiez les réponses de <strong>gouvernance et de processus</strong> (politique, analyse de risque, validation de la direction) avant les réponses purement techniques.</li>
          <li>Le bon réflexe : quelle option réduit le risque de façon <strong>rentable</strong> (cost-effective) ?</li>
        </ul>
        <h3>🗓 2. Plan d'étude conseillé (8 à 12 semaines)</h3>
        <ul>
          <li><strong>Semaines 1–6 :</strong> une leçon vidéo par jour, quiz du domaine à la fin de chaque domaine. Visez ≥ 80 % avant de passer au suivant.</li>
          <li><strong>Semaines 7–8 :</strong> flashcards quotidiennes (15 min) + mini examens blancs. Notez chaque erreur dans un carnet.</li>
          <li><strong>Semaines 9–10 :</strong> examens blancs complets (100 questions / 3 h). Constance ≥ 80 % = vous êtes prêt.</li>
          <li><strong>Dernière semaine :</strong> relisez vos erreurs et les résumés de leçons. Pas de bachotage la veille : dormez.</li>
        </ul>
        <h3>🎯 3. Stratégie le jour J (examen CAT)</h3>
        <ul>
          <li>3 heures, 100 à 150 questions, <strong>impossible de revenir en arrière</strong> — répondez et avancez.</li>
          <li>Lisez la question <strong>sans regarder les réponses</strong> ; imaginez la réponse idéale, puis cherchez-la.</li>
          <li>Traquez les mots-clés : <strong>MOST, BEST, FIRST, PRIMARY, LEAST</strong> — ils changent tout.</li>
          <li>Éliminez d'abord les 2 réponses hors sujet (ex : réponses techniques quand on demande un processus).</li>
          <li>Méfiez-vous des <strong>absolus</strong> (« always », « never ») ; cherchez la réponse qui englobe les autres.</li>
          <li>En cas d'incident dans un scénario : <strong>sauver les vies d'abord</strong>, puis contenir, puis le reste.</li>
        </ul>
        <h3>📌 4. Repères de l'examen</h3>
        <ul>
          <li>Expérience requise : 5 ans dans au moins 2 domaines du CBK (1 an offert par un diplôme reconnu) ; sinon statut <em>Associate of ISC2</em>.</li>
          <li>Les 8 domaines pèsent chacun entre 10 % et 16 % — aucun ne peut être ignoré.</li>
          <li>Après l'examen : endorsement par un membre ISC2, adhésion au <em>Code of Ethics</em>, puis 120 CPE sur 3 ans pour maintenir le titre.</li>
        </ul>
        <h3>💪 5. Le mental</h3>
        <ul>
          <li>Croyez au processus : votre préparation paiera. Un doute sur une question ? Répondez, oubliez, avancez.</li>
          <li>Étudiez en groupe ou à voix haute : verbaliser les concepts est le meilleur test de compréhension.</li>
        </ul>
      </div>`;
  }

  /* ---------- Initialisation ---------- */
  function init() {
    window.addEventListener("hashchange", route);
    document.getElementById("btn-reset").onclick = () => {
      if (confirm("Réinitialiser toute votre progression (leçons, quiz, examens) ?")) {
        Progress.reset(); route();
      }
    };
    route();
  }

  document.addEventListener("DOMContentLoaded", init);
  return { nav };
})();
