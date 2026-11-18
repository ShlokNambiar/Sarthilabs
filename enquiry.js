/* Enquiry forms (contact form and Urban Sanction Desk form).
   - The visitor picks Email or Phone and fills one matching field.
   - Spam trap: a hidden "website" field and the time taken to fill the form
     are sent with the enquiry; the server drops obvious bots.
   - One submission at a time; a client id lets the server answer a retried
     submission with the original reference instead of saving it twice.
   - Success is shown only after the server has saved the enquiry. A slow or
     failed request keeps everything the visitor typed and says what to do. */
window.SarthiEnquiry = (function () {
  var EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  var TIMEOUT_MS = 30000;

  function digits(v) { return (v || '').replace(/\D/g, ''); }

  function contactControls(form) {
    function method() {
      var r = form.querySelector('input[name=cmethod]:checked');
      return r ? r.value : 'Email';
    }
    function field() { return form.elements[method() === 'Email' ? 'email' : 'phone']; }
    function sync() {
      form.querySelectorAll('[data-cm]').forEach(function (l) {
        l.hidden = l.getAttribute('data-cm') !== method();
      });
    }
    form.querySelectorAll('input[name=cmethod]').forEach(function (r) {
      r.addEventListener('change', sync);
    });
    sync();
    return { method: method, field: field, value: function () { return field().value.trim(); } };
  }

  /* '' when valid, otherwise what to ask the visitor for. */
  function contactProblem(method, value) {
    if (!value) return method === 'Email' ? 'your email address' : 'your phone number';
    if (method === 'Email' && !EMAIL.test(value)) return 'a complete email address, like name@example.com';
    if (method === 'Phone') {
      var n = digits(value).length;
      if (n < 10 || n > 13) return 'a phone number with 10 digits (country code optional)';
    }
    return '';
  }

  function send(url, body) {
    var isForm = typeof FormData !== 'undefined' && body instanceof FormData;
    var ctl = typeof AbortController !== 'undefined' ? new AbortController() : null;
    var timer = setTimeout(function () { if (ctl) ctl.abort(); }, TIMEOUT_MS);
    var init = { method: 'POST', body: isForm ? body : JSON.stringify(body) };
    if (!isForm) init.headers = { 'Content-Type': 'application/json' };
    if (ctl) init.signal = ctl.signal;
    return fetch(url, init).then(function (r) {
      clearTimeout(timer);
      return r.json().catch(function () { return {}; }).then(function (j) {
        if (r.ok && j.reference) return j;
        var e = new Error('rejected'); e.status = r.status; e.detail = j.detail; throw e;
      });
    }, function (err) {
      clearTimeout(timer);
      var e = new Error('network'); e.status = 0; e.timeout = !!(err && err.name === 'AbortError'); throw e;
    });
  }

  function failureMessage(e) {
    if (e.timeout) return 'The connection is slow and we have not had a reply yet. Your details are still here. Check your connection and press Send enquiry again; you will not be sent a duplicate.';
    if (e.status === 429) return 'Too many attempts from this connection. Please wait a minute and send again. Your details are still here.';
    if (e.status === 413) return 'An attached file is too large. Remove it and send again; you can share files later.';
    if (e.status === 415) return 'One of the attached files is not an accepted type (PDF, JPG, PNG, DWG or DXF). Remove it and send again.';
    if (e.status === 422) return 'Some details could not be accepted (' + (e.detail || 'please check the form') + '). Your details are still here.';
    return 'We could not send your enquiry just now. Your details are still here. Please try again in a few minutes.';
  }

  function newId() {
    if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
    return Date.now().toString(36) + Math.random().toString(36).slice(2);
  }

  function endpoint() {
    var api = window.SARTHI_ENGINE_ENDPOINT;
    return typeof api === 'string' ? api.replace(/\/$/, '') + '/v1/enquiries' : null;
  }

  /* Validate, send and report. opts: {form, errEl, statusEl, required:[[name,label]],
     build(contact) -> body (object or FormData), onSaved(json, contact)} */
  function wire(opts) {
    var form = opts.form, errEl = opts.errEl, statusEl = opts.statusEl;
    var contact = contactControls(form);
    var started = Date.now(), clientId = newId(), sending = false;
    var btn = form.querySelector('button[type=submit]');

    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      if (sending) return;
      if (opts.precheck && !opts.precheck()) return;
      form.querySelectorAll('[aria-invalid]').forEach(function (el) { el.removeAttribute('aria-invalid'); });
      var missing = [], first = null;
      function bad(el, what) { missing.push(what); el.setAttribute('aria-invalid', 'true'); if (!first) first = el; }
      opts.required.forEach(function (r) {
        var el = form.elements[r[0]];
        if (el && !el.value.trim()) bad(el, r[1]);
      });
      var problem = contactProblem(contact.method(), contact.value());
      if (problem) bad(contact.field(), problem);
      if (missing.length) {
        errEl.textContent = 'Please add ' + missing.join(', ') + '. Everything you entered is kept.';
        first.focus();
        return;
      }
      var url = endpoint();
      if (!url) {
        errEl.textContent = 'Enquiries cannot be sent from this copy of the site. Please use sarthilabs.in.';
        return;
      }
      errEl.textContent = '';
      sending = true;
      btn.disabled = true; btn.textContent = 'Sending…';
      statusEl.textContent = 'Sending your enquiry…';
      var c = { method: contact.method(), value: contact.value() };
      var meta = { client_id: clientId, elapsed_ms: Date.now() - started, website: (form.elements.website || {}).value || '' };
      send(url, opts.build(c, meta)).then(function (j) {
        statusEl.textContent = 'Enquiry received. Reference ' + j.reference + '.';
        opts.onSaved(j, c);
      }, function (e) {
        sending = false;
        btn.disabled = false; btn.textContent = 'Send enquiry';
        statusEl.textContent = '';
        errEl.textContent = failureMessage(e);
      });
    });
  }

  return { wire: wire, contactProblem: contactProblem };
})();
