/* Parcours guidé : le « voyage » en 12 escales qui mène un lecteur débutant
   au niveau de réflexion d'un expert CISSP. Chaque escale est une liste
   d'activités vérifiées automatiquement depuis la progression réelle. */
const Parcours = (() => {

  // Une activité = { label, href, done() }
  function buildEtapes() {
    const ds = Object.values(CISSP_DATA.domains).sort((a, b) => a.id - b.id);
    const etapes = [];

    etapes.push({
      icone: "🛫", titre: "Décollage — l'état d'esprit CISSP",
      texte: "Avant tout contenu technique : comprendre l'examen et adopter le regard d'un manager de la sécurité. C'est ce qui distingue ceux qui réussissent du premier coup.",
      activites: [
        { label: "Lire la Méthode (plan d'étude + stratégie jour J)", href: "#/methode", done: () => Progress.visited("methode") },
        { label: "Découvrir les 10 principes du Mindset CISSP", href: "#/mindset", done: () => Progress.visited("mindset") },
        { label: "Réussir 3 drills « éliminez les 2 pièges »", href: "#/mindset/drills", done: () => Progress.mindsetCount("drills") >= 3 },
        { label: "Réussir 3 décodages de question (repérer le mot-opérateur)", href: "#/mindset/decoder", done: () => Progress.mindsetCount("decoder") >= 3 }
      ]
    });

    ds.forEach(d => {
      const scen = (CISSP_DATA.scenarios || []).filter(s => s.domaine === d.id);
      const ordres = ((CISSP_DATA.memo || {}).ordres || []).filter(o => o.domaine === d.id);
      const acts = [
        { label: `Suivre les ${d.lecons.length} leçons vidéo du domaine`, href: `#/domaine/${d.id}`, done: () => Progress.domainPct(d) === 100 },
        { label: "Obtenir ≥ 80 % au quiz du domaine", href: `#/quiz/${d.id}`, done: () => Progress.quizBest(d.id) >= 80 }
      ];
      if (ordres.length) acts.push({
        label: `Réussir ${ordres.length === 1 ? "l'exercice" : "les " + ordres.length + " exercices"} d'ordonnancement (${ordres.map(o => o.titre.split(",")[0]).join(" · ")})`,
        href: "#/memo/ordres", done: () => ordres.every(o => Progress.memoDone(o.id))
      });
      if (scen.length) acts.push({
        label: `Traverser les ${scen.length} scénarios du domaine (≥ 60 % de bonnes décisions)`,
        href: "#/scenarios", done: () => scen.every(s => Progress.scenarioPct(s.id) >= 60)
      });
      etapes.push({
        icone: d.icone, titre: `Escale ${d.id} — ${d.titre}`,
        texte: d.description, couleur: d.couleur, activites: acts
      });
    });

    etapes.push({
      icone: "🧠", titre: "Consolidation — mémoire et langage d'expert",
      texte: "Le contenu est vu : maintenant on l'ancre. Répétition espacée quotidienne, mnémoniques, et entraînement à parler comme un RSSI face à une direction.",
      activites: [
        { label: "Réviser au moins 30 flashcards et vider la file du jour", href: "#/flashcards", done: () => Progress.reviewedCount() >= 30 && Flashcards.dueTotal() === 0 },
        { label: "Réussir 10 drills d'élimination au total", href: "#/mindset/drills", done: () => Progress.mindsetCount("drills") >= 10 },
        { label: "Réussir 5 reformulations « parler comme un CISSP »", href: "#/mindset/reformulations", done: () => Progress.mindsetCount("reform") >= 5 },
        { label: "Réussir tous les exercices d'ordonnancement du Mémo", href: "#/memo/ordres", done: () => ((CISSP_DATA.memo || {}).ordres || []).every(o => Progress.memoDone(o.id)) },
        { label: "Vider le journal d'erreurs (rejouer jusqu'à 0 question en attente)", href: "#/erreurs", done: () => Progress.errorTotal() > 0 && Progress.errors().length === 0 }
      ]
    });

    etapes.push({
      icone: "🎯", titre: "Examens blancs — la répétition générale",
      texte: "Simulez les conditions réelles jusqu'à la constance : ≥ 80 % sur un examen complet, c'est le signal que vous êtes prêt à réserver votre place.",
      activites: [
        { label: "Réussir un mini examen (30 questions) à ≥ 80 %", href: "#/examen", done: () => Progress.exams().some(e => e.total <= 30 && e.pct >= 80) },
        { label: "Réussir un examen complet en français (100 questions / 3 h) à ≥ 80 %", href: "#/examen", done: () => Progress.exams().some(e => !e.en && e.total >= 100 && e.pct >= 80) },
        { label: "Réussir la simulation CAT en anglais — les conditions exactes du jour J (≥ 72 %)", href: "#/examen", done: () => Progress.exams().some(e => e.en && e.pct >= 72) }
      ]
    });

    etapes.push({
      icone: "🏁", titre: "Prêt pour le jour J",
      texte: "Tout est validé. Derniers conseils : relisez vos erreurs d'examens blancs, refaites les mnémoniques la veille, dormez bien — et le jour J, répondez puis avancez sans jamais douter. La communauté vous attend de l'autre côté : vous allez réussir.",
      activites: [
        { label: "Relire la stratégie du jour J dans la Méthode", href: "#/methode", done: () => Progress.visited("methode") }
      ]
    });

    return etapes;
  }

  function etapePct(e) {
    const done = e.activites.filter(a => a.done()).length;
    return Math.round(100 * done / e.activites.length);
  }

  function render() {
    const etapes = buildEtapes();
    const pcts = etapes.map(etapePct);
    const global = Math.round(pcts.reduce((s, p) => s + p, 0) / etapes.length);
    // première escale incomplète = escale courante
    let courante = pcts.findIndex(p => p < 100);
    if (courante === -1) courante = etapes.length - 1;

    document.getElementById("app").innerHTML = `
      <h1 class="page-title">🗺️ Votre parcours vers le niveau CISSP</h1>
      <p class="page-sub">Un voyage simple, escale par escale : à chaque étape, des activités concrètes cochées automatiquement
      au fil de votre progression. Suivez l'ordre — chaque escale prépare la suivante — et vous arriverez à penser,
      parler et raisonner comme un expert CISSP.</p>

      <div class="card" style="margin-bottom:1.6rem">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:.6rem">
          <strong>✈️ Avancement du voyage</strong><span style="font-weight:800;color:var(--accent)">${global}%</span>
        </div>
        <div class="progressbar" style="margin-top:.6rem;height:10px"><span style="width:${global}%"></span></div>
      </div>

      ${etapes.map((e, i) => {
        const pct = pcts[i];
        const locked = i > courante;
        const isCurrent = i === courante;
        return `
        <div class="card" style="margin-bottom:.9rem;${e.couleur ? `--dc:${e.couleur};` : ""}
             ${isCurrent ? "border-color:var(--accent);box-shadow:0 0 0 1px var(--accent);" : ""}
             ${locked ? "opacity:.55;" : ""}">
          <div style="display:flex;align-items:center;gap:.8rem;flex-wrap:wrap;cursor:pointer" onclick="const b=document.getElementById('et-${i}');b.style.display=b.style.display==='none'?'block':'none'">
            <span style="font-size:1.7rem">${pct === 100 ? "✅" : locked ? "🔒" : e.icone}</span>
            <div style="flex:1;min-width:220px">
              <strong>${esc(e.titre)}</strong>
              ${isCurrent ? `<span class="badge" style="margin-left:.5rem;border-color:var(--accent);color:var(--accent)">escale en cours</span>` : ""}
              <div class="progressbar" style="margin-top:.4rem;max-width:320px"><span style="width:${pct}%"></span></div>
            </div>
            <span style="color:var(--text-dim);font-size:.9rem">${pct}%</span>
          </div>
          <div id="et-${i}" style="display:${isCurrent ? "block" : "none"};margin-top:1rem">
            <p style="color:var(--text-dim);font-size:.93rem;margin-bottom:.8rem">${esc(e.texte)}</p>
            ${e.activites.map(a => `
              <a href="${a.href}" style="text-decoration:none;color:inherit">
                <div class="choice" style="display:flex;gap:.7rem;align-items:center;margin-bottom:.5rem;${a.done() ? "border-color:var(--ok);" : ""}">
                  <span>${a.done() ? "✅" : "⬜"}</span><span style="flex:1">${esc(a.label)}</span><span style="color:var(--accent)">→</span>
                </div>
              </a>`).join("")}
          </div>
        </div>`;
      }).join("")}`;
    window.scrollTo(0, 0);
  }

  return { render, etapes: buildEtapes };
})();
