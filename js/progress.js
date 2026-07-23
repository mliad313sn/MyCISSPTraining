/* Suivi de progression — stocké dans localStorage */
const Progress = (() => {
  const KEY = "cissp-fr-progress-v1";

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; }
    catch { return {}; }
  }
  function save(state) { localStorage.setItem(KEY, JSON.stringify(state)); }

  function state() {
    const s = load();
    s.lessons = s.lessons || {};   // { "d1-l1": true }
    s.quiz = s.quiz || {};         // { "1": { best: 80, attempts: 3 } }
    s.exams = s.exams || [];       // [ { date, score, total, pct } ]
    s.cards = s.cards || {};       // { "1": nbConnues }
    return s;
  }

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

    recordExam(score, total) {
      const s = state();
      s.exams.push({ date: new Date().toISOString(), score, total, pct: Math.round(100 * score / total) });
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

    reset() { localStorage.removeItem(KEY); }
  };
})();
