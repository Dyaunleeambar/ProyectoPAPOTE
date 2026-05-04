/* ============================================
   SOLCUBA — MAIN SCRIPT (sin módulos ES6)
   Funciona abriendo index.html directamente
   desde el sistema de archivos (file:///)
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initScrollReveal();
  initSmoothScroll();
  initFormValidation();
  initAgendarForm();
  initHeroParallax();
});

/* ============================================
   MOBILE MENU
   ============================================ */

function initMobileMenu() {
  const navToggle   = document.getElementById('navToggle');
  const mobileMenu  = document.getElementById('mobileMenu');
  const mobileClose = document.getElementById('mobileClose');

  navToggle.addEventListener('click',  () => mobileMenu.classList.add('open'));
  mobileClose.addEventListener('click', () => mobileMenu.classList.remove('open'));

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

/* ============================================
   SCROLL REVEAL (Intersection Observer)
   ============================================ */

function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -30px 0px'
  });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ============================================
   SMOOTH SCROLL
   ============================================ */

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

/* ============================================
   FORM VALIDACION — CONTACTO
   ============================================ */

function initFormValidation() {
  const form        = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    form.querySelectorAll('.form-input, .form-select').forEach(el => el.classList.remove('error'));
    form.querySelectorAll('.form-error').forEach(el => el.classList.remove('visible'));

    const fname  = document.getElementById('fname');
    const fphone = document.getElementById('fphone');
    const femail = document.getElementById('femail');
    const ftype  = document.getElementById('ftype');

    if (!fname.value.trim()) { showErr(fname, 'fnameErr'); valid = false; }
    if (fphone.value.replace(/\D/g, '').length < 8) { showErr(fphone, 'fphoneErr'); valid = false; }
    if (femail.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(femail.value)) {
      showErr(femail, 'femailErr'); valid = false;
    }
    if (!ftype.value) { showErr(ftype, 'ftypeErr'); valid = false; }

    if (valid) {
      console.log('Form data:', {
        nombre:   fname.value.trim(),
        telefono: fphone.value.trim(),
        email:    femail.value.trim(),
        tipo:     ftype.value,
        mensaje:  document.getElementById('fmsg').value.trim()
      });
      form.style.display = 'none';
      formSuccess.classList.add('visible');
      showToast('Solicitud enviada correctamente!');
    }
  });

  function showErr(input, errId) {
    input.classList.add('error');
    const el = document.getElementById(errId);
    if (el) el.classList.add('visible');
  }

  form.querySelectorAll('.form-input, .form-select').forEach(el => {
    const clear = () => {
      el.classList.remove('error');
      const err = el.parentElement.querySelector('.form-error');
      if (err) err.classList.remove('visible');
    };
    el.addEventListener('input',  clear);
    el.addEventListener('change', clear);
  });
}

/* ============================================
   FORM VALIDACION — AGENDAR
   ============================================ */

function initAgendarForm() {
  const form    = document.getElementById('agendarForm');
  const success = document.getElementById('agendarSuccess');
  if (!form) return;

  const fechaInput = document.getElementById('ag-fecha');
  if (fechaInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    fechaInput.min = tomorrow.toISOString().split('T')[0];
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    form.querySelectorAll('.form-input, .form-select').forEach(el => el.classList.remove('error'));
    form.querySelectorAll('.form-error').forEach(el => el.classList.remove('visible'));

    const nombre    = document.getElementById('ag-nombre');
    const telefono  = document.getElementById('ag-telefono');
    const direccion = document.getElementById('ag-direccion');
    const tipo      = document.getElementById('ag-tipo');
    const fecha     = document.getElementById('ag-fecha');
    const hora      = document.getElementById('ag-hora');

    if (!nombre.value.trim())                          { showAgErr(nombre,    'agNombreErr');    valid = false; }
    if (telefono.value.replace(/\D/g, '').length < 8) { showAgErr(telefono,  'agTelefonoErr');  valid = false; }
    if (!direccion.value.trim())                       { showAgErr(direccion, 'agDireccionErr'); valid = false; }
    if (!tipo.value)                                   { showAgErr(tipo,      'agTipoErr');      valid = false; }
    if (!fecha.value)                                  { showAgErr(fecha,     'agFechaErr');     valid = false; }
    if (!hora.value)                                   { showAgErr(hora,      'agHoraErr');      valid = false; }

    if (valid) {
      console.log('Agendar data:', {
        nombre:    nombre.value.trim(),
        telefono:  telefono.value.trim(),
        direccion: direccion.value.trim(),
        tipo:      tipo.value,
        fecha:     fecha.value,
        hora:      hora.value,
        nota:      document.getElementById('ag-nota').value.trim()
      });
      form.style.display = 'none';
      success.classList.add('visible');
      showToast('Visita agendada! Te confirmamos pronto.');
    }
  });

  function showAgErr(input, errId) {
    input.classList.add('error');
    const el = document.getElementById(errId);
    if (el) el.classList.add('visible');
  }

  form.querySelectorAll('.form-input, .form-select').forEach(el => {
    const clear = () => {
      el.classList.remove('error');
      const err = el.parentElement.querySelector('.form-error');
      if (err) err.classList.remove('visible');
    };
    el.addEventListener('input',  clear);
    el.addEventListener('change', clear);
  });
}

/* ============================================
   TOAST
   ============================================ */

function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('visible');
  setTimeout(() => toast.classList.remove('visible'), 4000);
}

/* ============================================
   REQUEST QUOTE (llamado desde onclick inline)
   ============================================ */

function requestQuote(service) {
  const ftype = document.getElementById('ftype');
  if (!ftype) return;
  for (let opt of ftype.options) {
    if (opt.value && opt.text.toLowerCase().includes(service.toLowerCase().split(' ')[0])) {
      ftype.value = opt.value;
      break;
    }
  }
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => document.getElementById('fname').focus(), 600);
}

window.requestQuote = requestQuote;

/* ============================================
   HERO PARALLAX
   Mouse parallax + scroll parallax sobre .hero-bg
   ============================================ */

function initHeroParallax() {
  const bg     = document.getElementById('heroBg');
  const hero   = document.querySelector('.hero');
  if (!bg || !hero) return;

  /* ── Respect prefers-reduced-motion ── */
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  /* Clamp helper */
  function clamp(val, min, max) { return Math.min(Math.max(val, min), max); }

  /* ── MOUSE PARALLAX ── */
  let mouseActive = false;

  hero.addEventListener('mouseenter', () => {
    bg.classList.add('parallax-active');
    mouseActive = true;
  });

  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    /* Normalized -0.5 → 0.5 relative to hero center */
    const cx = (e.clientX - rect.left)  / rect.width  - 0.5;
    const cy = (e.clientY - rect.top)   / rect.height - 0.5;

    /* Background moves more than the user (creates depth) */
    const tx = clamp(cx * -28, -14, 14);
    const ty = clamp(cy * -18, -9,   9);

    bg.style.transform = `translate(${tx}px, ${ty}px) scale(1.12)`;
  });

  hero.addEventListener('mouseleave', () => {
    mouseActive = false;
    bg.classList.remove('parallax-active');
    /* Slow ease back to neutral */
    bg.style.transition = 'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    bg.style.transform  = 'translate(0px, 0px) scale(1.12)';
    /* After the ease restore fast transition class next time */
    setTimeout(() => {
      bg.style.transition = '';
    }, 720);
  });

  /* ── SCROLL PARALLAX ── */
  /* Only active when mouse is NOT dragging the parallax,
     so both effects don't fight each other */
  let rafId = null;

  function onScroll() {
    if (mouseActive) return;
    if (rafId) return;
    rafId = requestAnimationFrame(() => {
      rafId = null;
      const rect    = hero.getBoundingClientRect();
      const heroH   = hero.offsetHeight;
      const viewH   = window.innerHeight;

      /* progress: 0 = hero top at viewport bottom, 1 = hero bottom at viewport top */
      const rawProgress = 1 - (rect.bottom / (viewH + heroH));
      const progress    = clamp(rawProgress, 0, 1);

      /* Move background up as user scrolls down (classic parallax) */
      const offsetY = progress * 90;
      bg.style.transform = `translateY(${offsetY}px) scale(1.12)`;
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  /* Set initial scale so we have room to shift without showing edges */
  bg.style.transform = 'translate(0px, 0px) scale(1.12)';
}
