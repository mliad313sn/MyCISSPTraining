/* Lecteur de « vidéos interactives » : diapositives animées + narration
   vocale française (Web Speech API) + contrôles de connaissances intégrés. */
const Player = (() => {
  let domain, lesson, idx, playing, utter, revealTimers = [];
  let frVoice = null;

  function pickVoice() {
    const voices = speechSynthesis.getVoices();
    frVoice = voices.find(v => /^fr(-|_)/i.test(v.lang) && /fr-FR/i.test(v.lang))
           || voices.find(v => /^fr/i.test(v.lang)) || null;
  }
  if ("speechSynthesis" in window) {
    pickVoice();
    speechSynthesis.onvoiceschanged = pickVoice;
  }

  function stopAudio() {
    if ("speechSynthesis" in window) speechSynthesis.cancel();
    revealTimers.forEach(clearTimeout);
    revealTimers = [];
    utter = null;
  }

  let active = false;

  function open(domainId, lessonId) {
    domain = CISSP_DATA.domains[domainId];
    lesson = domain.lecons.find(l => l.id === lessonId);
    idx = 0;
    playing = true;
    active = true;
    render();
  }

  function close() {
    stopAudio();
    playing = false;
    active = false;
  }

  // Raccourcis clavier : ← → naviguent, espace lecture/pause, M coupe le son
  document.addEventListener("keydown", e => {
    if (!active || e.target.tagName === "INPUT" || e.target.tagName === "SELECT") return;
    if (e.key === "ArrowRight") { e.preventDefault(); go(idx + 1); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); go(idx - 1); }
    else if (e.key === " ") { e.preventDefault(); togglePlay(); }
    else if (e.key.toLowerCase() === "m") { toggleMute(); }
  });

  function render() {
    const app = document.getElementById("app");
    const s = lesson.slides[idx];
    const li = lesson.slides.length;

    app.innerHTML = `
      <div class="player-wrap" style="--dc:${domain.couleur}">
        <div class="player-meta">
          <div>
            <a class="btn secondary small" href="#/domaine/${domain.id}" onclick="Player.close()">← ${domain.code}</a>
            <strong style="margin-left:.6rem">${esc(lesson.titre)}</strong>
          </div>
          <span class="tts-note">${icon("mic", 13)} Narration vocale : ${("speechSynthesis" in window) ? (frVoice ? "voix française activée" : "voix du navigateur") : "non disponible sur ce navigateur"}</span>
        </div>
        <div class="player">
          <div class="slide ${s.type === "intro" ? "intro" : ""} ${s.type === "question" ? "slide-question" : ""}" id="slide">
            ${slideHTML(s)}
          </div>
          <div class="player-controls">
            <button id="pv-prev" title="Diapositive précédente">${icon("prev", 16)}</button>
            <button id="pv-play" title="Lecture / pause">${playing ? icon("pause", 16) : icon("play", 16)}</button>
            <button id="pv-next" title="Diapositive suivante">${icon("next", 16)}</button>
            <div class="timeline">
              ${lesson.slides.map((_, i) =>
                `<div class="seg ${i < idx ? "seen" : ""}" data-i="${i}"><i id="seg-${i}"></i></div>`).join("")}
            </div>
            <span class="counter">${idx + 1} / ${li}</span>
            <button id="pv-mute" title="Couper / activer la narration">${muted ? icon("volumeOff", 16) : icon("volume", 16)}</button>
          </div>
        </div>
      </div>`;

    document.getElementById("pv-prev").onclick = () => go(idx - 1);
    document.getElementById("pv-next").onclick = () => go(idx + 1);
    document.getElementById("pv-play").onclick = togglePlay;
    document.getElementById("pv-mute").onclick = toggleMute;
    app.querySelectorAll(".seg").forEach(seg => seg.onclick = () => go(+seg.dataset.i));

    if (s.type === "question") wireQuestion(s);
    animateSlide(s);
  }

  let muted = false;
  function toggleMute() {
    muted = !muted;
    if (muted) stopAudio(); else playSlide(lesson.slides[idx]);
    const b = document.getElementById("pv-mute");
    if (b) b.innerHTML = muted ? icon("volumeOff", 16) : icon("volume", 16);
  }

  function slideHTML(s) {
    let h = `<h2>${esc(s.titre)}</h2>`;
    if (s.type === "question") {
      h += `<p class="q-text">${esc(s.q)}</p>
            <div class="choices">
              ${s.choix.map((c, i) => `<button class="choice" data-i="${i}">${LETTRES[i]}. ${esc(c)}</button>`).join("")}
            </div>
            <div id="sq-exp"></div>`;
      return h;
    }
    if (s.schema) h += schemaHTML(s.schema);
    if (s.points && s.points.length) {
      h += `<ul class="points">${s.points.map((p, i) =>
        `<li style="animation-delay:${playing ? (i * 1.1) : 0}s">${esc(p)}</li>`).join("")}</ul>`;
    }
    if (s.astuce) h += `<div class="astuce">${esc(s.astuce)}</div>`;
    if (s.narration) h += `<div class="narration-text">${esc(s.narration)}</div>`;
    return h;
  }

  function schemaHTML(sc) {
    const items = sc.items || [];
    if (sc.type === "flow" || sc.type === "cycle") {
      const arrow = `<span class="arrow">→</span>`;
      let inner = items.map(i => `<span class="node">${esc(i)}</span>`).join(arrow);
      if (sc.type === "cycle") inner += `<span class="arrow">↻</span>`;
      return `<div class="schema">${inner}</div>`;
    }
    if (sc.type === "pyramid") {
      return `<div class="schema pyramid">${items.map((i, n) =>
        `<span class="node" style="min-width:${120 + n * 55}px">${esc(i)}</span>`).join("")}</div>`;
    }
    return `<div class="schema grid">${items.map(i => `<span class="node">${esc(i)}</span>`).join("")}</div>`;
  }

  function wireQuestion(s) {
    document.querySelectorAll("#slide .choice").forEach(btn => {
      btn.onclick = () => {
        const i = +btn.dataset.i;
        document.querySelectorAll("#slide .choice").forEach((b, j) => {
          b.disabled = true;
          if (j === s.reponse) b.classList.add("correct");
          else if (j === i) b.classList.add("wrong");
        });
        document.getElementById("sq-exp").innerHTML =
          `<div class="explication">${i === s.reponse ? "✓ Exact !" : "✗ Pas tout à fait."} ${esc(s.explication)}</div>`;
        if (playing) speak(i === s.reponse
          ? "Bonne réponse ! " + s.explication
          : "Ce n'est pas la bonne réponse. " + s.explication, () => advanceSoon(3200));
      };
    });
  }

  function animateSlide(s) {
    stopAudio();
    if (s.type === "question") {
      if (playing) speak(s.narration ? s.narration + " " + s.q : "Petit contrôle de connaissances. " + s.q);
      return; // on attend la réponse de l'apprenant
    }
    playSlide(s);
  }

  function playSlide(s) {
    if (!playing || muted) return;
    const seg = document.getElementById("seg-" + idx);
    if (seg) seg.style.width = "15%";
    speak(s.narration || s.titre, () => {
      if (seg) seg.style.width = "100%";
      advanceSoon(900);
    });
  }

  function advanceSoon(ms) {
    if (!playing) return;
    revealTimers.push(setTimeout(() => {
      if (idx < lesson.slides.length - 1) go(idx + 1);
      else finish();
    }, ms));
  }

  function speak(text, onEnd) {
    if (!("speechSynthesis" in window) || muted) { if (onEnd) revealTimers.push(setTimeout(onEnd, estimate(text))); return; }
    stopAudioKeepTimers();
    utter = new SpeechSynthesisUtterance(text);
    utter.lang = "fr-FR";
    if (frVoice) utter.voice = frVoice;
    utter.rate = 1.02;
    if (onEnd) utter.onend = onEnd;
    // repli si la synthèse échoue silencieusement
    utter.onerror = () => { if (onEnd) revealTimers.push(setTimeout(onEnd, estimate(text))); };
    speechSynthesis.speak(utter);
  }
  function stopAudioKeepTimers() { if ("speechSynthesis" in window) speechSynthesis.cancel(); }
  function estimate(text) { return Math.max(2500, (text || "").split(/\s+/).length * 380); }

  function go(n) {
    if (n < 0 || n >= lesson.slides.length) return;
    stopAudio();
    idx = n;
    render();
  }

  function togglePlay() {
    playing = !playing;
    if (!playing) stopAudio();
    render();
  }

  function finish() {
    stopAudio();
    Progress.markLesson(lesson.id);
    const next = domain.lecons[domain.lecons.indexOf(lesson) + 1];
    document.getElementById("slide").innerHTML = `
      <div style="margin:auto;text-align:center">
        <div style="color:var(--ok);margin-bottom:.5rem">${icon("award", 40)}</div>
        <h2 style="border:none;padding:0">Leçon terminée !</h2>
        <p style="color:var(--text-dim);margin:.6rem 0 1.2rem">« ${esc(lesson.titre)} » est validée dans votre progression.</p>
        <div style="display:flex;gap:.7rem;justify-content:center;flex-wrap:wrap">
          ${next ? `<a class="btn" href="#/lecon/${domain.id}/${next.id}" onclick="Player.open(${domain.id},'${next.id}');return false;">Leçon suivante →</a>` : ""}
          <a class="btn secondary" href="#/quiz/${domain.id}">Quiz du domaine ${domain.id}</a>
          <a class="btn secondary" href="#/domaine/${domain.id}">Retour au domaine</a>
        </div>
      </div>`;
    speak("Félicitations, vous avez terminé cette leçon !");
  }

  return { open, close };
})();

const LETTRES = ["A", "B", "C", "D", "E"];
function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, c =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
