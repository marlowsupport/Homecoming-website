// Homecoming – mobiel menu en jaartal in de voettekst
(function () {
  var knop = document.querySelector('.menu-toggle');
  var menu = document.getElementById('hoofdmenu');
  if (knop && menu) {
    knop.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      knop.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('open')) {
        menu.classList.remove('open');
        knop.setAttribute('aria-expanded', 'false');
        knop.focus();
      }
    });
  }
  var jaar = document.querySelector('[data-jaar]');
  if (jaar) { jaar.textContent = new Date().getFullYear(); }
})();

// Achtergrondvideo pauzeren voor bezoekers die minder beweging willen
(function () {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('video[autoplay]').forEach(function (v) { v.pause(); v.removeAttribute('autoplay'); });
  }
})();

// Tabjes bij Aanbod: zorg dat het actieve tabje in beeld staat als je opzij kunt vegen
(function () {
  var tabs = document.querySelector('.tabs');
  var actief = tabs && tabs.querySelector('[aria-current="page"]');
  if (actief && tabs.scrollWidth > tabs.clientWidth) {
    var rechts = actief.offsetLeft - tabs.offsetLeft + actief.offsetWidth;
    if (rechts > tabs.clientWidth) { tabs.scrollLeft = rechts - tabs.clientWidth + 16; }
  }
})();
