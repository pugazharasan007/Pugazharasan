/* ============================================================
   Pugazharasan — Portfolio JS
   Shared across all pages
   ============================================================ */

// --- Year in footer ---
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// --- Nav scroll effect ---
const nav = document.getElementById('nav');
if (nav) {
  const onScroll = () => {
    if (window.scrollY > 24) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// --- Mobile nav toggle ---
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    links.classList.toggle('open');
  });
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      toggle.classList.remove('open');
      links.classList.remove('open');
    });
  });
}

// --- Smooth scroll for hash links ---
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id.length <= 1) return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// --- Reveal on scroll ---
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => io.observe(el));
}

// --- Stats counter ---
const counters = document.querySelectorAll('[data-count]');
if (counters.length) {
  const counterIO = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      const duration = 1400;
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.floor(target * eased);
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = target;
      };
      requestAnimationFrame(tick);
      counterIO.unobserve(el);
    });
  }, { threshold: 0.4 });
  counters.forEach(c => counterIO.observe(c));
}

// --- Dynamic tenure (Experience page) ---
const tenureEl = document.getElementById('tenure');
if (tenureEl) {
  const start = new Date(tenureEl.dataset.start);
  const now = new Date();
  const months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
  const years = Math.floor(months / 12) + (months % 12) / 10;
  tenureEl.textContent = `Current · ${years.toFixed(1)}+ years`;
}

// --- Project filter (Projects page) ---
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card[data-cat]');
if (filterBtns.length && projectCards.length) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      projectCards.forEach(card => {
        const cats = (card.dataset.cat || '').split(/\s+/);
        const show = filter === 'all' || cats.includes(filter);
        card.classList.toggle('hide', !show);
      });
    });
  });
}

// --- Contact form (Formspree) ---
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
if (form && status) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // If user hasn't replaced the placeholder, show a helpful note
    if (form.action.includes('YOUR_FORM_ID')) {
      status.className = 'form-status error';
      status.textContent = 'Form not configured yet — replace YOUR_FORM_ID in contact.html with your Formspree ID.';
      return;
    }

    status.className = 'form-status';
    status.textContent = 'Sending…';

    try {
      const data = new FormData(form);
      const res = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        form.reset();
        status.className = 'form-status success';
        status.textContent = '✓ Message sent — I\'ll get back to you soon.';
      } else {
        const j = await res.json().catch(() => ({}));
        status.className = 'form-status error';
        status.textContent = j.error || 'Something went wrong. Please try again or email me directly.';
      }
    } catch (err) {
      status.className = 'form-status error';
      status.textContent = 'Network error — please try again later or email directly.';
    }
  });
}
