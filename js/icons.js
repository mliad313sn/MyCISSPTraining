/* Système d'icônes SVG inline (style trait, 24×24, currentColor) —
   remplace les emojis dans le chrome de l'interface. */
const ICONS = {
  logo: '<path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3z" fill="var(--primary)" stroke="none"/><path d="m8.8 12 2.2 2.2 4.4-4.6" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  map: '<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2zM9 4v14M15 6v14"/>',
  layers: '<path d="m12 2 9 5-9 5-9-5 9-5zM3 12l9 5 9-5M3 17l9 5 9-5"/>',
  compass: '<circle cx="12" cy="12" r="10"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2z"/>',
  clapper: '<rect x="3" y="8" width="18" height="12" rx="2"/><path d="m3 8 2-4h4L7 8m2 0 2-4h4l-2 4m2 0 2-4h3v4"/>',
  memo: '<path d="M9 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M9 7h6M9 11h6M9 15h4"/>',
  cards: '<rect x="3" y="6" width="13" height="15" rx="2"/><path d="M8 3h11a2 2 0 0 1 2 2v13"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V4a2 2 0 0 0-2-2H6.5A2.5 2.5 0 0 0 4 4.5v15zM20 17v5H6.5a2.5 2.5 0 0 1 0-5"/>',
  clipboard: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2M9 10h6M9 14h6"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5"/>',
  chart: '<path d="M3 3v18h18"/><path d="M7 15v-4M12 15V7m5 8v-6"/>',
  flame: '<path d="M12 2s5 4.5 5 9.5a5 5 0 0 1-10 0c0-2 1-4 2.5-5.5C9.5 8 12 8.5 12 6.5 12 5 12 3.5 12 2z"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4m8-4v4"/>',
  play: '<path d="m7 5 12 7-12 7V5z" fill="currentColor" stroke="none"/>',
  check: '<path d="m4.5 12.5 5 5 10-11"/>',
  arrowRight: '<path d="M4 12h15m-6-7 7 7-7 7"/>',
  alert: '<path d="M12 3 2 20h20L12 3z"/><path d="M12 10v4m0 3v.5"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  brain: '<path d="M9.5 3a3 3 0 0 0-3 3 3.5 3.5 0 0 0-2 6 3.5 3.5 0 0 0 2.5 6H9a3 3 0 0 0 3-3V6a3 3 0 0 0-2.5-3zM14.5 3a3 3 0 0 1 3 3 3.5 3.5 0 0 1 2 6 3.5 3.5 0 0 1-2.5 6H15a3 3 0 0 1-3-3"/>',
  mic: '<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v4"/>',
  timer: '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2.5M9 2h6"/>',
  download: '<path d="M12 3v12m0 0 5-5m-5 5-5-5M4 21h16"/>',
  upload: '<path d="M12 21V9m0 0 5 5m-5-5-5 5M4 3h16"/>',
  trash: '<path d="M4 7h16M9 7V4h6v3m-9 0 1 13h10l1-13"/>',
  refresh: '<path d="M20 11a8 8 0 1 0-2.3 6.3M20 5v6h-6"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 4 5.5 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.5-4-9s1.5-6.5 4-9z"/>',
  award: '<circle cx="12" cy="9" r="6"/><path d="m8.5 14-1.5 7 5-3 5 3-1.5-7"/>',
  puzzle: '<path d="M10 3h4v3.5a1.5 1.5 0 0 0 3 0V6h4v4h-2.5a1.5 1.5 0 0 0 0 3H21v4h-4v2.5a1.5 1.5 0 0 1-3 0V17h-4v-4H7.5a1.5 1.5 0 0 1 0-3H10V3z"/>',
  message: '<path d="M21 12a8 8 0 0 1-8 8H4l2-3.5A8 8 0 1 1 21 12z"/>',
  key: '<circle cx="8" cy="15" r="4.5"/><path d="m11.5 11.5 8-8M17 6l3 3m-6-1 2.5 2.5"/>',
  journal: '<path d="M5 4a2 2 0 0 1 2-2h12v18H7a2 2 0 0 0-2 2V4z"/><path d="M9 6h6m-6 4h6"/>',
  sparkle: '<path d="M12 3v4m0 10v4m9-9h-4M7 12H3m14.7-5.7-2.9 2.9M9.2 14.8l-2.9 2.9m11.4 0-2.9-2.9M9.2 9.2 6.3 6.3"/>',
  pause: '<path d="M8 5v14M16 5v14" stroke-width="2.4"/>',
  prev: '<path d="M18 5v14L8 12l10-7z" fill="currentColor" stroke="none"/><path d="M6 5v14" stroke-width="2.2"/>',
  next: '<path d="M6 5v14l10-7L6 5z" fill="currentColor" stroke="none"/><path d="M18 5v14" stroke-width="2.2"/>',
  volume: '<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16 9a4 4 0 0 1 0 6m2.5-9a8 8 0 0 1 0 12"/>',
  volumeOff: '<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="m16 9 5 6m0-6-5 6"/>',
  lock: '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>'
};

function icon(name, size, cls) {
  const p = ICONS[name] || ICONS.target;
  return `<svg class="ic ${cls || ""}" width="${size || 18}" height="${size || 18}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
}
