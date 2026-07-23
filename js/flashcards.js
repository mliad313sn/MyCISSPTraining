/* Révision par flashcards : cartes recto/verso par domaine ou tous domaines. */
const Flashcards = (() => {
  let deck, idx, known;

  function build(domainId) {
    let cards = [];
    if (domainId === "all") {
      Object.values(CISSP_DATA.domains).forEach(d =>
        d.flashcards.forEach(c => cards.push({ ...c, dom: d.code, couleur: d.couleur })));
    } else {
      const d = CISSP_DATA.domains[domainId];
      cards = d.flashcards.map(c => ({ ...c, dom: d.code, couleur: d.couleur }));
    }
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
  }

  function open(domainId) {
    deck = build(domainId || "all");
    idx = 0; known = 0;
    render();
  }

  function render() {
    const app = document.getElementById("app");
    if (idx >= deck.length) {
      app.innerHTML = `
        <div class="card" style="max-width:620px;margin:2rem auto;text-align:center">
          <div style="font-size:3rem">🧠</div>
          <h1 class="page-title">Session terminée !</h1>
          <p>Vous avez marqué <strong>${known} / ${deck.length}</strong> cartes comme connues.</p>
          <div style="display:flex;gap:.7rem;justify-content:center;margin-top:1rem;flex-wrap:wrap">
            <button class="btn" onclick="Flashcards.open('all')">Nouvelle session</button>
            <a class="btn secondary" href="#/">Tableau de bord</a>
          </div>
        </div>`;
      return;
    }
    const c = deck[idx];
    app.innerHTML = `
      <div style="max-width:680px;margin:0 auto">
        <div class="q-head" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;flex-wrap:wrap;gap:.6rem">
          <span class="badge" style="border-color:${c.couleur};color:${c.couleur}">${c.dom}</span>
          <span class="badge">Carte ${idx + 1} / ${deck.length}</span>
          <select id="fc-domsel" class="btn secondary small" style="cursor:pointer">
            <option value="all">Tous les domaines</option>
            ${Object.values(CISSP_DATA.domains).map(d =>
              `<option value="${d.id}">${d.code} — ${esc(d.titre)}</option>`).join("")}
          </select>
        </div>
        <div class="flashcard-scene">
          <div class="flashcard" id="fc" style="border-color:${c.couleur}">
            <div class="face front">${esc(c.recto)}</div>
            <div class="face back">${esc(c.verso)}</div>
          </div>
        </div>
        <p style="text-align:center;color:var(--text-dim);font-size:.85rem;margin-top:.6rem">Cliquez sur la carte pour la retourner</p>
        <div class="fc-controls">
          <button class="btn danger" id="fc-again">🔁 À revoir</button>
          <button class="btn" id="fc-known" style="background:linear-gradient(135deg,#1e8f4d,#2ecc71)">✔ Je connais</button>
        </div>
      </div>`;

    const fc = document.getElementById("fc");
    fc.onclick = () => fc.classList.toggle("flipped");
    document.getElementById("fc-known").onclick = () => { known++; idx++; render(); };
    document.getElementById("fc-again").onclick = () => { deck.push(deck[idx]); idx++; render(); };
    document.getElementById("fc-domsel").onchange = e => open(e.target.value === "all" ? "all" : +e.target.value);
  }

  return { open };
})();
