/* G&D Construction & Snow Removal — Site JS */

// Mobile nav toggle
(function() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function() {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open);
    });
    // Close menu when a nav link is tapped
    nav.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', function() {
        if (window.innerWidth <= 980) {
          nav.classList.remove('is-open');
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }
})();

// Auto-set footer year
(function() {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

// Smooth-scroll offset adjustment for sticky header
(function() {
  document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
      const id = this.getAttribute('href');
      if (id.length <= 1) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const headerH = document.querySelector('.site-header')?.offsetHeight || 0;
      const top = target.getBoundingClientRect().top + window.pageYOffset - headerH - 12;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });
})();

// Pre-fill contact form service from URL parameter ?service=Patio
(function() {
  const params = new URLSearchParams(window.location.search);
  const svc = params.get('service');
  if (svc) {
    const select = document.getElementById('service');
    if (select) {
      for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].text.toLowerCase().includes(svc.toLowerCase())) {
          select.selectedIndex = i;
          break;
        }
      }
    }
  }
  const city = params.get('city');
  if (city) {
    const cityField = document.getElementById('city');
    if (cityField) cityField.value = city;
  }
})();
