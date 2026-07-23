/* Suivi de progression — stocké dans localStorage */
const Progress = (() => {
  const KEY = "cissp-fr-progress-v1";

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; }
    catch { return {}; }
  }
  function save(state) {
    // toute sauvegarde = une action d'étude : alimente le suivi quotidien
    state.activity = state.activity || {};
    const t = new Date().toISOString().slice(0, 10);
    state.activity[t] = (state.activity[t] || 0) + 1;
    localStorage.setItem(KEY, JSON.stringify(state));
  }

  function state() {
    const s = load();
    s.lessons = s.lessons || {};   // { "d1-l1": true }
    s.quiz = s.quiz || {};         // { "1": { best: 80, attempts: 3 } }
    s.exams = s.exams || [];       // [ { date, score, total, pct } ]
    s.cards = s.cards || {};       // { "<clé carte>": { box: 1-6, due: timestamp } } — système Leitner
    s.scen = s.scen || {};         // { "sc-1": meilleurPct }
    s.memo = s.memo || {};         // { "osi": true } — exercices d'ordonnancement réussis
    s.mindset = s.mindset || {};   // { drills: nbFaits, reform: nbFaits }
    s.visites = s.visites || {};   // { methode: true, mindset: true }
    s.errlog = s.errlog || {};     // journal d'erreurs : { "<clé question>": { q, fails, ts } }
    s.errTotal = s.errTotal || 0;  // nb total d'erreurs jamais enregistrées
    s.activity = s.activity || {}; // { "2026-07-23": nbActions } — suivi quotidien
    return s;
  }

  function today() { return new Date().toISOString().slice(0, 10); }

  function qKey(text) {
    let h = 5381;
    for (let i = 0; i < text.length; i++) h = ((h << 5) + h + text.charCodeAt(i)) >>> 0;
    return "q" + h.toString(36);
  }

  // Répétition espacée (Leitner) : intervalles en jours selon la boîte
  const INTERVALLES = [0, 1, 3, 7, 14, 30];

  return {
    lessonDone(id) { return !!state().lessons[id]; },
    markLesson(id) { const s = state(); s.lessons[id] = true; save(s); },

    quizBest(domainId) { return (state().quiz[domainId] || {}).best || 0; },
    recordQuiz(domainId, pct) {
      const s = state();
      const q = s.quiz[domainId] || { best: 0, attempts: 0 };
      q.attempts++; q.best = Math.max(q.best, pct);
      s.quiz[domainId] = q; save(s);
    },

    recordExam(score, total, en) {
      const s = state();
      s.exams.push({ date: new Date().toISOString(), score, total, pct: Math.round(100 * score / total), en: !!en });
      save(s);
    },
    exams() { return state().exams; },

    domainPct(domain) {
      const total = domain.lecons.length;
      if (!total) return 0;
      const done = domain.lecons.filter(l => this.lessonDone(l.id)).length;
      return Math.round(100 * done / total);
    },

    globalPct(domains) {
      let done = 0, total = 0;
      domains.forEach(d => {
        total += d.lecons.length;
        done += d.lecons.filter(l => this.lessonDone(l.id)).length;
      });
      return total ? Math.round(100 * done / total) : 0;
    },

    /* ---- Scénarios, mémo et mindset ---- */
    recordScenario(id, pct) {
      const s = state();
      s.scen[id] = Math.max(s.scen[id] || 0, pct); save(s);
    },
    scenarioPct(id) { return state().scen[id] || 0; },
    scenariosDone(domainId) {
      const s = state();
      return (CISSP_DATA.scenarios || []).filter(sc =>
        (!domainId || sc.domaine === domainId) && (s.scen[sc.id] || 0) >= 60).length;
    },
    markMemo(id) { const s = state(); s.memo[id] = true; save(s); },
    memoDone(id) { return !!state().memo[id]; },
    memoCount() { return Object.keys(state().memo).length; },
    /* ---- Suivi d'activité quotidienne (streak, graphique) ---- */
    touch() { save(state()); },
    activityByDay(nbJours) {
      const s = state(), out = [];
      for (let i = nbJours - 1; i >= 0; i--) {
        const d = new Date(Date.now() - i * 86400000).toISOString().slice(0, 10);
        out.push({ jour: d, n: s.activity[d] || 0 });
      }
      return out;
    },
    streak() {
      const s = state();
      let n = 0;
      // la journée en cours compte si elle a de l'activité, sinon on part d'hier
      for (let i = s.activity[today()] ? 0 : 1; ; i++) {
        const d = new Date(Date.now() - i * 86400000).toISOString().slice(0, 10);
        if (s.activity[d]) n++; else break;
      }
      return n;
    },

    /* ---- Journal d'erreurs : chaque question ratée y entre,
       une bonne réponse ultérieure l'en sort ---- */
    recordError(q) {
      const s = state();
      const k = qKey(q.q);
      const e = s.errlog[k] || { q, fails: 0, ts: Date.now() };
      e.fails++; e.ts = Date.now();
      s.errlog[k] = e; s.errTotal++; save(s);
    },
    clearError(qText) {
      const s = state();
      delete s.errlog[qKey(qText)]; save(s);
    },
    errors() {
      const s = state();
      return Object.values(s.errlog).sort((a, b) => b.ts - a.ts);
    },
    errorTotal() { return state().errTotal; },

    markVisited(page) { const s = state(); s.visites[page] = true; save(s); },
    visited(page) { return !!state().visites[page]; },
    reviewedCount() { return Object.keys(state().cards).length; },
    bumpMindset(kind) {
      const s = state();
      s.mindset[kind] = (s.mindset[kind] || 0) + 1; save(s);
    },
    mindsetCount(kind) { return state().mindset[kind] || 0; },

    /* ---- Flashcards : répétition espacée (Leitner) ---- */
    cardState(key) { return state().cards[key] || { box: 0, due: 0 }; },
    cardDue(key) { return this.cardState(key).due <= Date.now(); },
    reviewCard(key, known) {
      const s = state();
      const c = s.cards[key] || { box: 0, due: 0 };
      c.box = known ? Math.min(c.box + 1, INTERVALLES.length - 1) : 1;
      c.due = Date.now() + INTERVALLES[c.box] * 86400000;
      s.cards[key] = c; save(s);
      return c;
    },
    dueCount(allKeys) {
      const cards = state().cards;
      return allKeys.filter(k => !cards[k] || cards[k].due <= Date.now()).length;
    },

    reset() { localStorage.removeItem(KEY); }
  };
})();
