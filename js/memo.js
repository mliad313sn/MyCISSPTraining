/* Module Mémo : mnémoniques (masquer/révéler) + exercices « remettre dans l'ordre ». */
const Memo = (() => {
  let ex, picked, errors;

  function list(tab) {
    tab = tab || "mnemo";
    const m = CISSP_DATA.memo || { mnemoniques: [], ordres: [] };
    const ds = CISSP_DATA.domains;
    document.getElementById("app").innerHTML = `
      <h1 class="page-title">🧠 Mémo — mnémoniques & séquences</h1>
      <p class="page-sub">L'examen adore les listes ordonnées et les acronymes. Cette section rassemble les moyens
      mnémotechniques éprouvés de la communauté CISSP et des exercices interactifs pour ancrer les séquences.</p>
      <div style="display:flex;gap:.6rem;margin-bottom:1.4rem">
        <button class="btn ${tab === "mnemo" ? "" : "secondary"}" onclick="Memo.list('mnemo')">💡 Mnémoniques</button>
        <button class="btn ${tab === "ordres" ? "" : "secondary"}" onclick="Memo.list('ordres')">🔢 Remettre dans l'ordre</button>
      </div>
      ${tab === "mnemo" ? `
        <div class="grid cols-2">
          ${m.mnemoniques.map((x, i) => {
            const d = ds[x.domaine];
            return `
            <div class="card" style="--dc:${d ? d.couleur : "#4f8ef7"}">
              <div style="display:flex;justify-content:space-between;gap:.6rem;align-items:center">
                <h3 style="font-size:1.02rem">${esc(x.titre)}</h3>
                <span class="badge" style="border-color:${d ? d.couleur : ""};color:${d ? d.couleur : ""}">${d ? d.code : ""}</span>
              </div>
              <p style="margin:.5rem 0;color:var(--warn)">${esc(x.moyen)}</p>
              <button class="btn secondary small" onclick="const el=document.getElementById('mn-${i}');el.style.display=el.style.display==='none'?'block':'none';this.textContent=el.style.display==='none'?'👁 Révéler le détail':'🙈 Masquer'">👁 Révéler le détail</button>
              <p id="mn-${i}" style="display:none;margin-top:.6rem;color:var(--text-dim)">${esc(x.detail)}</p>
            </div>`;
          }).join("")}
        </div>` : `
        <div class="grid cols-2">
          ${m.ordres.map(o => {
            const d = ds[o.domaine];
            return `
            <div class="card domain-card" style="--dc:${d ? d.couleur : "#4f8ef7"}" onclick="Memo.openEx('${o.id}')">
              <div class="dc-head"><span class="dc-icon">🔢</span><span class="badge">${d ? d.code : ""}</span></div>
              <h3>${esc(o.titre)}</h3>
              <div class="dc-en">${o.items.length} éléments à ordonner</div>
            </div>`;
          }).join("")}
        </div>`}`;
    window.scrollTo(0, 0);
  }

  function shuffle(a) {
    a = a.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    // éviter de présenter l'ordre déjà correct
    return a.join() === ex.items.join() ? shuffle(a) : a;
  }

  function openEx(id) {
    ex = (CISSP_DATA.memo.ordres || []).find(o => o.id === id);
    if (!ex) return list("ordres");
    picked = [];
    errors = 0;
    renderEx(shuffle(ex.items));
  }

  function renderEx(pool) {
    const d = CISSP_DATA.domains[ex.domaine];
    document.getElementById("app").innerHTML = `
      <div style="max-width:760px;margin:0 auto;--dc:${d ? d.couleur : "#4f8ef7"}">
        <button class="btn secondary small" onclick="Memo.list('ordres')">← Tous les exercices</button>
        <div class="card" style="margin-top:1rem">
          <h1 class="page-title" style="font-size:1.4rem">🔢 ${esc(ex.titre)}</h1>
          <p style="color:var(--text-dim);margin-bottom:1rem">${esc(ex.consigne)} Cliquez les éléments <strong>dans l'ordre</strong> — une erreur et l'élément vibre.</p>
          <div id="ex-done" style="display:flex;flex-direction:column;gap:.4rem;margin-bottom:1rem">
            ${picked.map((p, i) => `<div class="choice correct" style="cursor:default">${i + 1}. ${esc(p)}</div>`).join("")}
          </div>
          <div id="ex-pool" style="display:flex;flex-wrap:wrap;gap:.6rem">
            ${pool.map(p => `<button class="choice" style="flex:0 1 auto" data-v="${esc(p)}">${esc(p)}</button>`).join("")}
          </div>
          <p style="margin-top:1rem;color:var(--text-dim);font-size:.9rem">Erreurs : <span id="ex-err">${errors}</span></p>
          <div id="ex-result"></div>
        </div>
      </div>`;

    document.querySelectorAll("#ex-pool .choice").forEach(btn => {
      btn.onclick = () => {
        const v = btn.dataset.v;
        const expected = ex.items[picked.length];
        if (v === expected) {
          picked.push(v);
          const remaining = [...document.querySelectorAll("#ex-pool .choice")]
            .map(b => b.dataset.v).filter(x => x !== v);
          if (picked.length === ex.items.length) return renderResult();
          renderEx(remaining);
        } else {
          errors++;
          document.getElementById("ex-err").textContent = errors;
          btn.style.animation = "none"; void btn.offsetWidth;
          btn.style.animation = "shake .3s";
          btn.classList.add("wrong");
          setTimeout(() => btn.classList.remove("wrong"), 600);
        }
      };
    });
  }

  function renderResult() {
    const d = CISSP_DATA.domains[ex.domaine];
    const perfect = errors === 0;
    if (errors <= 2) Progress.markMemo(ex.id);
    document.getElementById("app").innerHTML = `
      <div style="max-width:760px;margin:0 auto;--dc:${d ? d.couleur : "#4f8ef7"}">
        <div class="card" style="text-align:center">
          <div style="font-size:3rem">${perfect ? "🏆" : errors <= 2 ? "👍" : "📚"}</div>
          <h1 class="page-title">${perfect ? "Sans faute !" : errors + " erreur(s)"}</h1>
          <p style="color:var(--text-dim)">${esc(ex.titre)}</p>
          <div style="display:flex;flex-direction:column;gap:.4rem;margin:1.2rem 0;text-align:left">
            ${ex.items.map((p, i) => `<div class="choice correct" style="cursor:default">${i + 1}. ${esc(p)}</div>`).join("")}
          </div>
          <div class="astuce" style="text-align:left">💡 Moyen mnémotechnique : ${esc(ex.indice)}</div>
          <div style="display:flex;gap:.7rem;justify-content:center;margin-top:1.2rem;flex-wrap:wrap">
            <button class="btn" onclick="Memo.openEx('${ex.id}')">🔁 Recommencer</button>
            <button class="btn secondary" onclick="Memo.list('ordres')">Autres exercices</button>
          </div>
        </div>
      </div>`;
  }

  return { list, openEx };
})();
