// Mobile nav
const burger = document.querySelector('.burger');
if (burger) burger.addEventListener('click', () => document.querySelector('nav ul').classList.toggle('open'));

// Scroll reveal
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Season tabs (seasonal guide + workshops)
document.querySelectorAll('.season-tabs').forEach(tabs => {
  tabs.querySelectorAll('button').forEach(btn => btn.addEventListener('click', () => {
    tabs.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const scope = tabs.parentElement;
    scope.querySelectorAll('.season-panel').forEach(p => p.classList.remove('active'));
    scope.querySelector('#' + btn.dataset.season).classList.add('active');
  }));
});

// Auto-select current season where tabs exist
(() => {
  const m = new Date().getMonth(); // 0-11
  const season = m <= 1 || m === 11 ? 'winter' : m <= 4 ? 'spring' : m <= 7 ? 'summer' : 'autumn';
  document.querySelectorAll('.season-tabs [data-season="' + season + '"]').forEach(b => b.click());
})();
