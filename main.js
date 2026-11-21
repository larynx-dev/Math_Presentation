/* =========================================================================
   MATHEMATICS PROBLEM SET — slide navigation
   ← →  previous / next slide
   ↓    show the next hidden answer on this slide
   ↑    hide the last shown answer
   F    fullscreen
   ========================================================================= */
(() => {
'use strict';

const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

const slides = $$('.slide');
const progress = $('#progress'), btnPrev = $('#prev'), btnNext = $('#next'), dots = $('#ansdots');
let cur = -1, lastNav = 0;

/* ---- setup: stagger indexes + progress bar ---- */
slides.forEach((s, i) => {
  $$('.rv', s).forEach((el, k) => el.style.setProperty('--i', k));
  $$('.h .ln', s).forEach((el, k) => el.style.setProperty('--d', k));
  const b = document.createElement('button');
  b.innerHTML = `<span>${i + 1}. ${s.dataset.title}</span>`;
  b.setAttribute('aria-label', `Go to slide ${i + 1}: ${s.dataset.title}`);
  b.addEventListener('click', () => go(i));
  progress.appendChild(b);
});
$('#tot').textContent = slides.length;

/* ---- answers ---- */
const cards = () => $$('.prob', slides[cur]);
function updateDots() {
  const c = cards();
  dots.innerHTML = c.length ? 'Solutions ' + c.map(p => `<i class="${p.classList.contains('open') ? 'on' : ''}"></i>`).join('') : '';
}
function showNext() { const p = cards().find(p => !p.classList.contains('open')); if (p) { p.classList.add('open'); updateDots(); } }
function hideLast() { const p = cards().filter(p => p.classList.contains('open')).pop(); if (p) { p.classList.remove('open'); updateDots(); } }
$$('.prob').forEach(p => p.addEventListener('click', () => { p.classList.toggle('open'); updateDots(); }));

/* ---- navigation ---- */
function go(i) {
  i = Math.max(0, Math.min(slides.length - 1, i));
  if (i === cur) return;
  const now = performance.now();
  if (cur !== -1 && now - lastNav < 250) return;
  lastNav = now;

  const prev = slides[cur];
  if (prev) {
    prev.classList.remove('is-active'); prev.classList.add('is-leaving');
    clearTimeout(prev._t); prev._t = setTimeout(() => prev.classList.remove('is-leaving'), 600);
  }
  cur = i;
  const el = slides[i];
  clearTimeout(el._t); el.classList.remove('is-leaving');
  $$('.prob', el).forEach(p => p.classList.remove('open'));          // answers start hidden
  void el.offsetWidth;
  el.classList.add('is-active');

  document.documentElement.style.setProperty('--accent', el.dataset.accent);
  $('#cur').textContent = i + 1;
  [...progress.children].forEach((b, k) => { b.classList.toggle('on', k === i); b.classList.toggle('done', k < i); });
  btnPrev.disabled = i === 0; btnNext.disabled = i === slides.length - 1;
  history.replaceState(null, '', '#' + (i + 1));
  updateDots();
}
const next = () => go(cur + 1), prev = () => go(cur - 1);
const hit = b => { b.classList.add('hit'); setTimeout(() => b.classList.remove('hit'), 200); };

btnNext.addEventListener('click', next);
btnPrev.addEventListener('click', prev);
addEventListener('keydown', e => {
  if (e.altKey || e.ctrlKey || e.metaKey) return;
  switch (e.key) {
    case 'ArrowRight': case 'PageDown': case ' ': e.preventDefault(); hit(btnNext); next(); break;
    case 'ArrowLeft':  case 'PageUp':             e.preventDefault(); hit(btnPrev); prev(); break;
    case 'ArrowDown': e.preventDefault(); showNext(); break;
    case 'ArrowUp':   e.preventDefault(); hideLast(); break;
    case 'Home': go(0); break;
    case 'End':  go(slides.length - 1); break;
  }
  if (e.code === 'KeyF') document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen?.();
});
// swipe left / right on touch screens
let tx = null;
addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
addEventListener('touchend', e => {
  if (tx === null) return;
  const dx = e.changedTouches[0].clientX - tx; tx = null;
  if (Math.abs(dx) > 60) (dx < 0 ? next : prev)();
}, { passive: true });

go(Math.max(0, (parseInt(location.hash.slice(1)) || 1) - 1));
})();
