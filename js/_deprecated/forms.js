/* ============================================
   FORM VALIDATION
   ============================================ */

export function initFormValidation() {
  const form = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    // Clear errors
    form.querySelectorAll('.form-input, .form-select').forEach(el => el.classList.remove('error'));
    form.querySelectorAll('.form-error').forEach(el => el.classList.remove('visible'));

    const fname = document.getElementById('fname');
    const fphone = document.getElementById('fphone');
    const femail = document.getElementById('femail');
    const ftype = document.getElementById('ftype');

    if (!fname.value.trim()) {
      showErr(fname, 'fnameErr');
      valid = false;
    }
    if (fphone.value.replace(/\D/g, '').length < 8) {
      showErr(fphone, 'fphoneErr');
      valid = false;
    }
    if (femail.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(femail.value)) {
      showErr(femail, 'femailErr');
      valid = false;
    }
    if (!ftype.value) {
      showErr(ftype, 'ftypeErr');
      valid = false;
    }

    if (valid) {
      const data = {
        nombre: fname.value.trim(),
        telefono: fphone.value.trim(),
        email: femail.value.trim(),
        tipo: ftype.value,
        mensaje: document.getElementById('fmsg').value.trim()
      };
      console.log('Form data:', data);

      form.style.display = 'none';
      formSuccess.classList.add('visible');
      showToast('¡Solicitud enviada correctamente!');
    }
  });

  function showErr(input, errId) {
    input.classList.add('error');
    document.getElementById(errId).classList.add('visible');
  }

  form.querySelectorAll('.form-input, .form-select').forEach(el => {
    const handler = () => {
      el.classList.remove('error');
      const err = el.parentElement.querySelector('.form-error');
      if (err) err.classList.remove('visible');
    };
    el.addEventListener('input', handler);
    el.addEventListener('change', handler);
  });
}

/* ============================================
   REQUEST QUOTE FROM SERVICE CARDS
   ============================================ */

export function requestQuote(service) {
  const ftype = document.getElementById('ftype');
  // Find matching option
  for (let opt of ftype.options) {
    if (opt.value && opt.text.toLowerCase().includes(service.toLowerCase().split(' ')[0])) {
      ftype.value = opt.value;
      break;
    }
  }
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => document.getElementById('fname').focus(), 600);
}

/* ============================================
   AGENDAR FORM VALIDATION
   ============================================ */

export function initAgendarForm() {
  const form = document.getElementById('agendarForm');
  const success = document.getElementById('agendarSuccess');
  if (!form) return;

  // Set min date to tomorrow
  const fechaInput = document.getElementById('ag-fecha');
  if (fechaInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    fechaInput.min = tomorrow.toISOString().split('T')[0];
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    // Clear errors
    form.querySelectorAll('.form-input, .form-select').forEach(el => el.classList.remove('error'));
    form.querySelectorAll('.form-error').forEach(el => el.classList.remove('visible'));

    const nombre    = document.getElementById('ag-nombre');
    const telefono  = document.getElementById('ag-telefono');
    const direccion = document.getElementById('ag-direccion');
    const tipo      = document.getElementById('ag-tipo');
    const fecha     = document.getElementById('ag-fecha');
    const hora      = document.getElementById('ag-hora');

    if (!nombre.value.trim()) { showAgErr(nombre, 'agNombreErr'); valid = false; }
    if (telefono.value.replace(/\D/g, '').length < 8) { showAgErr(telefono, 'agTelefonoErr'); valid = false; }
    if (!direccion.value.trim()) { showAgErr(direccion, 'agDireccionErr'); valid = false; }
    if (!tipo.value) { showAgErr(tipo, 'agTipoErr'); valid = false; }
    if (!fecha.value) { showAgErr(fecha, 'agFechaErr'); valid = false; }
    if (!hora.value) { showAgErr(hora, 'agHoraErr'); valid = false; }

    if (valid) {
      const data = {
        nombre:    nombre.value.trim(),
        telefono:  telefono.value.trim(),
        direccion: direccion.value.trim(),
        tipo:      tipo.value,
        fecha:     fecha.value,
        hora:      hora.value,
        nota:      document.getElementById('ag-nota').value.trim()
      };
      console.log('Agendar data:', data);

      form.style.display = 'none';
      success.classList.add('visible');
      showToast('¡Visita agendada! Te confirmamos pronto.');
    }
  });

  function showAgErr(input, errId) {
    input.classList.add('error');
    const errEl = document.getElementById(errId);
    if (errEl) errEl.classList.add('visible');
  }

  form.querySelectorAll('.form-input, .form-select').forEach(el => {
    const handler = () => {
      el.classList.remove('error');
      const err = el.parentElement.querySelector('.form-error');
      if (err) err.classList.remove('visible');
    };
    el.addEventListener('input', handler);
    el.addEventListener('change', handler);
  });
}



export function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('visible');
  setTimeout(() => toast.classList.remove('visible'), 4000);
}
