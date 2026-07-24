/* Révision par flashcards avec répétition espacée (système Leitner) :
   les cartes dues aujourd'hui passent en premier, « Je connais » espace
   la prochaine revue (1, 3, 7, 14, 30 jours), « À revoir » ramène en boîte 1. */
const Flashcards = (() => {
  let deck, idx, known, scope;

  function allCards(domainId) {
    let cards = [];
    const push = d => d.flashcards.forEach((c, i) =>
      cards.push({ ...c, dom: d.code, couleur: d.couleur, key: `d${d.id}:${i}:${c.recto.slice(0, 40)}` }));
    if (domainId === "all") Object.values(CISSP_DATA.domains).forEach(push);
    else push(CISSP_DATA.domains[domainId]);
    return cards;
  }

  function build(domainId) {
    const cards = allCards(domainId);
    const due = cards.filter(c => Progress.cardDue(c.key));
    const rest = cards.filter(c => !Progress.cardDue(c.key));
    const shuffle = a => {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    };
    // cartes dues d'abord ; les autres ensuite (révision d'avance)
    return { due: shuffle(due), ahead: shuffle(rest) };
  }

  function open(domainId) {
    scope = domainId || "all";
    const b = build(scope);
    deck = b.due.length ? b.due : b.ahead;
    idx = 0; known = 0;
    renderInfo(b);
  }

  let aheadMode = false;
  function renderInfo(b) {
    aheadMode = !b.due.length;
    render(b.due.length);
  }

  function render(dueCount) {
    const app = document.getElementById("app");
    if (idx >= deck.length) {
      app.innerHTML = `
        <div class="card" style="max-width:620px;margin:2rem auto;text-align:center">
          <span style="width:48px;height:48px;margin:0 auto .6rem;border-radius:12px;background:var(--primary-soft);color:var(--primary);display:flex;align-items:center;justify-content:center">${icon("brain", 24)}</span>
          <h1 class="page-title">Session terminée !</h1>
          <p>Vous avez marqué <strong>${known} / ${deck.length}</strong> cartes comme connues.</p>
          <p style="color:var(--text-dim);font-size:.9rem;margin-top:.5rem">Les cartes connues reviendront plus tard (répétition espacée) ;
          celles à revoir reviendront dès demain.</p>
          <div style="display:flex;gap:.7rem;justify-content:center;margin-top:1rem;flex-wrap:wrap">
            <button class="btn" onclick="Flashcards.open('${scope}')">Nouvelle session</button>
            <a class="btn secondary" href="#/">Tableau de bord</a>
          </div>
        </div>`;
      return;
    }
    const c = deck[idx];
    const st = Progress.cardState(c.key);
    app.innerHTML = `
      <div style="max-width:680px;margin:0 auto">
        <div class="q-head" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;flex-wrap:wrap;gap:.6rem">
          <span class="badge" style="border-color:${c.couleur};color:${c.couleur}">${c.dom}</span>
          <span class="badge">Carte ${idx + 1} / ${deck.length}</span>
          <span class="badge" title="Niveau de mémorisation (boîte de Leitner)">niveau ${st.box}/5</span>
          <select id="fc-domsel" class="btn secondary small" style="cursor:pointer">
            <option value="all" ${scope === "all" ? "selected" : ""}>Tous les domaines</option>
            ${Object.values(CISSP_DATA.domains).map(d =>
              `<option value="${d.id}" ${String(scope) === String(d.id) ? "selected" : ""}>${d.code} — ${esc(d.titre)}</option>`).join("")}
          </select>
        </div>
        ${aheadMode ? `<p style="text-align:center;color:var(--ok);font-size:.88rem;margin-bottom:.6rem">Aucune carte due aujourd'hui — vous révisez en avance.</p>` : ""}
        <div class="flashcard-scene">
          <div class="flashcard" id="fc" style="border-color:${c.couleur}">
            <div class="face front">${esc(c.recto)}</div>
            <div class="face back">${esc(c.verso)}</div>
          </div>
        </div>
        <p style="text-align:center;color:var(--text-dim);font-size:.85rem;margin-top:.6rem">Cliquez sur la carte pour la retourner</p>
        <div class="fc-controls">
          <button class="btn danger" id="fc-again" disabled title="Retournez d'abord la carte">À revoir</button>
          <button class="btn" id="fc-known" style="background:var(--ok)" disabled title="Retournez d'abord la carte">✓ Je connais</button>
        </div>
      </div>`;

    const fc = document.getElementById("fc");
    // on ne peut se juger qu'après avoir vu le verso : anti-triche envers soi-même
    fc.onclick = () => {
      fc.classList.toggle("flipped");
      document.getElementById("fc-known").disabled = false;
      document.getElementById("fc-again").disabled = false;
    };
    document.getElementById("fc-known").onclick = () => {
      Progress.reviewCard(c.key, true); known++; idx++; render();
    };
    document.getElementById("fc-again").onclick = () => {
      Progress.reviewCard(c.key, false); deck.push(deck[idx]); idx++; render();
    };
    document.getElementById("fc-domsel").onchange = e => open(e.target.value === "all" ? "all" : +e.target.value);
  }

  function dueTotal() {
    return Progress.dueCount(allCards("all").map(c => c.key));
  }

  return { open, dueTotal };
})();
