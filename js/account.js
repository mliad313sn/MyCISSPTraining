/* Compte apprenant (100 % local et gratuit) : inscription guidée, profil,
   objectif du jour, plan personnalisé selon la date d'examen, suivi
   d'assiduité et sauvegarde/restauration des données. */
const Account = (() => {
  const KEY = "cissp-fr-profil-v1";

  function profil() {
    try { return JSON.parse(localStorage.getItem(KEY)); } catch { return null; }
  }
  function saveProfil(p) { localStorage.setItem(KEY, JSON.stringify(p)); }

  function joursRestants() {
    const p = profil();
    if (!p || !p.examDate) return null;
    return Math.ceil((new Date(p.examDate) - Date.now()) / 86400000);
  }

  /* ---------- Inscription (3 étapes) ---------- */
  function signup(step) {
    step = +step || 1;
    const p = profil() || {};
    const app = document.getElementById("app");

    if (step === 1) {
      app.innerHTML = `
        <div class="card" style="max-width:640px;margin:2rem auto">
          <div style="text-align:center;margin-bottom:1rem">
            <span style="width:48px;height:48px;margin:0 auto;border-radius:12px;background:var(--primary-soft);color:var(--primary);display:flex;align-items:center;justify-content:center">${icon("user", 24)}</span>
            <h1 class="page-title">Créer mon compte gratuit</h1>
            <p style="color:var(--text-dim)">Étape 1 / 3 — Faisons connaissance. Vos données restent sur votre appareil :
            aucune inscription par e-mail, aucun serveur, aucune publicité.</p>
          </div>
          <label style="display:block;margin-bottom:.4rem;font-weight:600">Votre prénom</label>
          <input id="su-prenom" class="gloss-search" style="margin-bottom:1rem" type="text" maxlength="30"
                 placeholder="ex : Amadou" value="${esc(p.prenom || "")}">
          <label style="display:block;margin-bottom:.4rem;font-weight:600">Votre situation</label>
          <select id="su-niveau" class="gloss-search" style="margin-bottom:1.4rem">
            <option value="debutant" ${p.niveau === "debutant" ? "selected" : ""}>Je découvre la sécurité de l'information</option>
            <option value="pratiquant" ${!p.niveau || p.niveau === "pratiquant" ? "selected" : ""}>Je travaille en IT/sécurité, je vise la certification</option>
            <option value="avance" ${p.niveau === "avance" ? "selected" : ""}>J'ai déjà commencé à préparer le CISSP</option>
          </select>
          <p id="su-err" style="color:var(--ko);font-size:.85rem;display:none;margin-bottom:.6rem">Indiquez un prénom pour continuer.</p>
          <div style="text-align:right"><button class="btn" id="su-next1">Continuer →</button></div>
        </div>`;
      document.getElementById("su-next1").onclick = () => {
        const prenom = document.getElementById("su-prenom").value.trim();
        if (!prenom) { document.getElementById("su-err").style.display = "block"; document.getElementById("su-prenom").focus(); return; }
        saveProfil({ ...p, prenom, niveau: document.getElementById("su-niveau").value, created: p.created || Date.now() });
        signup(2);
      };
      return;
    }

    if (step === 2) {
      const dMin = new Date(Date.now() + 7 * 86400000).toISOString().slice(0, 10);
      app.innerHTML = `
        <div class="card" style="max-width:640px;margin:2rem auto">
          <div style="text-align:center;margin-bottom:1rem">
            <span style="width:48px;height:48px;margin:0 auto;border-radius:12px;background:var(--primary-soft);color:var(--primary);display:flex;align-items:center;justify-content:center">${icon("calendar", 24)}</span>
            <h1 class="page-title">Votre objectif</h1>
            <p style="color:var(--text-dim)">Étape 2 / 3 — Une date cible transforme une envie en plan.
            Vous pourrez la modifier à tout moment.</p>
          </div>
          <label style="display:block;margin-bottom:.4rem;font-weight:600">Date visée pour l'examen (recommandé)</label>
          <input id="su-date" class="gloss-search" style="margin-bottom:1rem" type="date" min="${dMin}" value="${p.examDate || ""}">
          <label style="display:block;margin-bottom:.4rem;font-weight:600">Temps d'étude par semaine</label>
          <select id="su-rythme" class="gloss-search" style="margin-bottom:1.4rem">
            <option value="5" ${p.rythme == 5 ? "selected" : ""}>≈ 5 h / semaine (rythme tranquille, ~14 semaines)</option>
            <option value="8" ${!p.rythme || p.rythme == 8 ? "selected" : ""}>≈ 8 h / semaine (rythme conseillé, ~10 semaines)</option>
            <option value="12" ${p.rythme == 12 ? "selected" : ""}>≈ 12 h / semaine (rythme intensif, ~7 semaines)</option>
          </select>
          <div style="display:flex;justify-content:space-between">
            <button class="btn secondary" onclick="Account.signup(1)">← Retour</button>
            <button class="btn" id="su-next2">Continuer →</button>
          </div>
        </div>`;
      document.getElementById("su-next2").onclick = () => {
        saveProfil({ ...profil(), examDate: document.getElementById("su-date").value || null, rythme: +document.getElementById("su-rythme").value });
        signup(3);
      };
      return;
    }

    // Étape 3 : le mode d'emploi (guideline)
    const jr = joursRestants();
    app.innerHTML = `
      <div class="card" style="max-width:720px;margin:2rem auto">
        <div style="text-align:center;margin-bottom:1rem">
          <span style="width:48px;height:48px;margin:0 auto;border-radius:12px;background:var(--primary-soft);color:var(--primary);display:flex;align-items:center;justify-content:center">${icon("compass", 24)}</span>
          <h1 class="page-title">Bienvenue ${esc(profil().prenom)}</h1>
          <p style="color:var(--text-dim)">Étape 3 / 3 — Voici comment utiliser la plateforme pour réussir du premier coup${jr ? ` (examen dans <strong>${jr} jours</strong>)` : ""}.</p>
        </div>
        <div class="rich">
          <h3>Votre routine gagnante</h3>
          <ul>
            <li><strong>Chaque jour (20-60 min)</strong> : suivez l'objectif du jour sur votre tableau de bord — une ou deux leçons vidéo, puis les flashcards dues (répétition espacée).</li>
            <li><strong>Fin de chaque domaine</strong> : quiz jusqu'à ≥ 80 %, scénarios du domaine, exercices d'ordonnancement.</li>
            <li><strong>Chaque semaine</strong> : videz votre journal d'erreurs et faites quelques drills Mindset (penser/parler comme un manager).</li>
            <li><strong>Dernières semaines</strong> : examens blancs complets jusqu'à une constance ≥ 80 % — c'est le feu vert pour réserver.</li>
          </ul>
          <h3>Votre boussole : le Parcours</h3>
          <ul>
            <li>Le <strong>Parcours en 12 escales</strong> est votre fil conducteur : chaque activité s'y coche automatiquement. En cas de doute sur « quoi faire maintenant », ouvrez-le.</li>
            <li>Le <strong>score de préparation</strong> du tableau de bord devient vert à 80 % : il combine leçons, quiz et examens blancs.</li>
          </ul>
          <h3>Vos données</h3>
          <ul>
            <li>Tout est stocké sur cet appareil. Pensez à <strong>exporter une sauvegarde</strong> depuis la page Suivi (ou pour changer d'appareil).</li>
          </ul>
        </div>
        <div style="display:flex;gap:.7rem;justify-content:center;margin-top:1.4rem;flex-wrap:wrap">
          <a class="btn" href="#/parcours">Commencer mon parcours ${icon("arrowRight", 15)}</a>
          <a class="btn secondary" href="#/">Mon tableau de bord</a>
        </div>
      </div>`;
  }

  /* ---------- Objectif du jour ---------- */
  function objectifDuJour() {
    const items = [];
    const due = Flashcards.dueTotal();
    const errs = Progress.errors().length;
    // prochaine activité du parcours
    const etapes = Parcours.etapes();
    outer: for (const e of etapes) {
      for (const a of e.activites) {
        if (!a.done()) { items.push({ icone: "map", label: a.label, href: a.href }); break outer; }
      }
    }
    if (due > 0) items.push({ icone: "cards", label: due > 25 ? `Réviser 20 flashcards (${due} dues au total — inutile de tout faire d'un coup)` : `Réviser ${due} flashcard(s) due(s) aujourd'hui`, href: "#/flashcards" });
    if (errs > 0) items.push({ icone: "journal", label: `Rejouer ${Math.min(20, errs)} question(s) de votre journal d'erreurs`, href: "#/rejouer-erreurs" });
    if (!items.length) items.push({ icone: "target", label: "Tout est à jour — faites un examen blanc pour confirmer !", href: "#/examen" });
    return items.slice(0, 3);
  }

  /* ---------- Plan personnalisé (semaines restantes → escales) ---------- */
  function plan() {
    const p = profil();
    const etapes = Parcours.etapes();
    const restantes = etapes.filter(e => e.activites.some(a => !a.done()));
    const jr = joursRestants();
    if (!jr || jr <= 0) return { texte: "Fixez une date d'examen dans votre profil pour obtenir un plan semaine par semaine.", alerte: false };
    const semaines = Math.max(1, Math.floor(jr / 7));
    // garder ~2 semaines pour les examens blancs finaux
    const semainesContenu = Math.max(1, semaines - 2);
    const parSemaine = restantes.length / semainesContenu;
    // marge de 25 % avant d'alerter : pas d'avertissement anxiogène dès le premier jour
    const rythmeOk = parSemaine <= 1.25 * (p.rythme >= 12 ? 2.2 : p.rythme >= 8 ? 1.6 : 1.1);
    return {
      texte: `${jr} jours restants (${semaines} semaine${semaines > 1 ? "s" : ""}) pour ${restantes.length} escale${restantes.length > 1 ? "s" : ""} : ` +
        `visez ${Math.max(1, Math.ceil(parSemaine * 10) / 10)} escale(s) par semaine, en gardant les 2 dernières semaines pour les examens blancs.`,
      alerte: !rythmeOk
    };
  }

  /* ---------- Page Suivi ---------- */
  function suivi() {
    const p = profil();
    if (!p) { location.hash = "#/inscription"; return; }
    const jr = joursRestants();
    const streak = Progress.streak();
    const jours = Progress.activityByDay(14);
    const maxN = Math.max(1, ...jours.map(j => j.n));
    const exams = Progress.exams().slice(-8);
    const pl = plan();
    const ds = Object.values(CISSP_DATA.domains).sort((a, b) => a.id - b.id);

    document.getElementById("app").innerHTML = `
      <h1 class="page-title">Suivi — ${esc(p.prenom)}</h1>
      <p class="page-sub">${jr && jr > 0 ? `Examen dans <strong>${jr} jours</strong> (${new Date(p.examDate).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}). ` : ""}
        Votre assiduité et votre plan, mis à jour en continu.</p>

      <div class="stats-row">
        <div class="stat"><div class="num" style="display:flex;align-items:center;gap:.35rem;color:var(--warn)">${icon("flame", 20)} ${streak}</div><div class="lbl">jour(s) d'étude consécutifs</div></div>
        <div class="stat"><div class="num">${jr && jr > 0 ? "J-" + jr : "—"}</div><div class="lbl">avant l'examen</div></div>
        <div class="stat"><div class="num">${Progress.exams().length}</div><div class="lbl">examens blancs passés</div></div>
        <div class="stat"><div class="num">${Progress.errorTotal() - Progress.errors().length}</div><div class="lbl">erreurs corrigées au total</div></div>
      </div>

      <div class="card" style="margin-bottom:1.1rem;${pl.alerte ? "border-color:var(--warn)" : ""}">
        <h3 style="margin-bottom:.4rem">Mon plan</h3>
        <p style="color:var(--text-dim)">${pl.texte}</p>
        ${pl.alerte ? `<p style="color:var(--warn);margin-top:.4rem">Rythme serré par rapport à votre disponibilité déclarée : augmentez le temps hebdomadaire ou décalez la date.</p>` : ""}
        <div style="margin-top:.7rem"><button class="btn secondary small" onclick="Account.signup(2)">Modifier ma date / mon rythme</button></div>
      </div>

      <div class="card" style="margin-bottom:1.1rem">
        <h3 style="margin-bottom:.7rem">Mes 14 derniers jours</h3>
        <div style="display:flex;align-items:flex-end;gap:5px;height:90px">
          ${jours.map(j => `<div title="${j.jour} : ${j.n} action(s)" style="flex:1;background:${j.n ? "var(--ok)" : "var(--bg-elev)"};height:${Math.max(6, Math.round(84 * j.n / maxN))}px;border-radius:4px"></div>`).join("")}
        </div>
        <div style="display:flex;justify-content:space-between;color:var(--text-dim);font-size:.75rem;margin-top:.3rem"><span>il y a 14 j</span><span>aujourd'hui</span></div>
      </div>

      <div class="grid cols-2" style="margin-bottom:1.1rem">
        <div class="card">
          <h3 style="margin-bottom:.7rem">Niveau de préparation par domaine</h3>
          ${ds.map(d => {
            const v = Math.min(100, Math.round(0.5 * Progress.domainPct(d) + 0.5 * Progress.quizBest(d.id)));
            return `<div style="margin-bottom:.55rem">
              <div style="display:flex;justify-content:space-between;font-size:.88rem"><span>${d.icone} ${d.code}</span><span style="color:${v >= 80 ? "var(--ok)" : v >= 50 ? "var(--warn)" : "var(--text-dim)"}">${v}%</span></div>
              <div class="progressbar"><span style="width:${v}%;background:${d.couleur}"></span></div>
            </div>`;
          }).join("")}
        </div>
        <div class="card">
          <h3 style="margin-bottom:.7rem">Mes examens blancs</h3>
          ${exams.length ? exams.slice().reverse().map(e => `
            <div style="display:flex;justify-content:space-between;gap:1rem;padding:.4rem 0;border-bottom:1px solid var(--border);font-size:.92rem">
              <span>${new Date(e.date).toLocaleDateString("fr-FR", { day: "2-digit", month: "short" })}</span>
              <span>${e.total} q</span>
              <strong style="color:${e.pct >= 80 ? "var(--ok)" : e.pct >= 65 ? "var(--warn)" : "var(--ko)"}">${e.pct}%</strong>
            </div>`).join("")
          : `<p style="color:var(--text-dim)">Aucun examen blanc pour l'instant — le premier sert de diagnostic, lancez-vous !</p>
             <a class="btn secondary small" style="margin-top:.6rem" href="#/examen">Faire mon diagnostic</a>`}
        </div>
      </div>

      <div class="card">
        <h3 style="margin-bottom:.5rem">Mes données (100 % locales)</h3>
        <p style="color:var(--text-dim);font-size:.9rem;margin-bottom:.8rem">Profil et progression sont stockés uniquement sur cet appareil.
        Exportez une sauvegarde régulière, ou transférez-la sur un autre appareil.</p>
        <div style="display:flex;gap:.7rem;flex-wrap:wrap">
          <button class="btn secondary" onclick="Account.exporter()">${icon("download", 15)} Exporter ma sauvegarde</button>
          <label class="btn secondary" style="cursor:pointer">${icon("upload", 15)} Restaurer une sauvegarde<input id="import-file" type="file" accept=".json" style="display:none"></label>
          <button class="btn danger" onclick="if(confirm('Tout effacer (profil + progression) sur cet appareil ?')){Account.reset();}">${icon("trash", 15)} Tout réinitialiser</button>
        </div>
      </div>`;

    document.getElementById("import-file").onchange = e => importer(e.target.files[0]);
    window.scrollTo(0, 0);
  }

  /* ---------- Export / import / reset ---------- */
  function exporter() {
    const data = {
      profil: profil(),
      progression: JSON.parse(localStorage.getItem("cissp-fr-progress-v1") || "{}"),
      exporte: new Date().toISOString(), version: 1
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "cissp-en-clair-sauvegarde-" + new Date().toISOString().slice(0, 10) + ".json";
    a.click();
    URL.revokeObjectURL(a.href);
  }

  function importer(file) {
    if (!file) return;
    const r = new FileReader();
    r.onload = () => {
      try {
        const d = JSON.parse(r.result);
        if (!d.profil && !d.progression) throw new Error("format inconnu");
        if (d.profil) saveProfil(d.profil);
        if (d.progression) localStorage.setItem("cissp-fr-progress-v1", JSON.stringify(d.progression));
        alert("Sauvegarde restaurée ✓");
        location.hash = "#/suivi"; location.reload();
      } catch { alert("Fichier de sauvegarde invalide."); }
    };
    r.readAsText(file);
  }

  function reset() {
    localStorage.removeItem(KEY);
    Progress.reset();
    location.hash = "#/"; location.reload();
  }

  return { profil, signup, suivi, objectifDuJour, plan, joursRestants, exporter, importer, reset };
})();
