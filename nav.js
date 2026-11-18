/* Site header behaviour: Solutions dropdown (click, tap and keyboard) and the
   mobile menu button. Escape closes the open menu and returns focus to the
   button that opened it. */
(function () {
  var header = document.querySelector('.site-header');
  if (!header) return;

  var ddBtn = header.querySelector('.sh-dd-btn');
  var ddMenu = header.querySelector('.sh-dd-menu');
  var menuBtn = header.querySelector('.sh-menu-btn');
  var nav = header.querySelector('nav');

  function items() {
    return Array.prototype.slice.call(ddMenu.querySelectorAll('a'));
  }

  function openDd(focusFirst) {
    ddMenu.hidden = false;
    ddBtn.setAttribute('aria-expanded', 'true');
    if (focusFirst) items()[0].focus();
  }

  function closeDd(returnFocus) {
    if (ddMenu.hidden) return;
    ddMenu.hidden = true;
    ddBtn.setAttribute('aria-expanded', 'false');
    if (returnFocus) ddBtn.focus();
  }

  function setMenu(open) {
    nav.classList.toggle('is-open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.querySelector('.sh-menu-label').textContent = open ? 'Close' : 'Menu';
    if (!open) closeDd(false);
  }

  if (ddBtn && ddMenu) {
    ddBtn.addEventListener('click', function () {
      if (ddMenu.hidden) openDd(false); else closeDd(false);
    });
    ddBtn.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); openDd(true); }
    });
    ddMenu.addEventListener('keydown', function (e) {
      var list = items(), i = list.indexOf(document.activeElement);
      if (e.key === 'ArrowDown') { e.preventDefault(); list[(i + 1) % list.length].focus(); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); list[(i - 1 + list.length) % list.length].focus(); }
      else if (e.key === 'Home') { e.preventDefault(); list[0].focus(); }
      else if (e.key === 'End') { e.preventDefault(); list[list.length - 1].focus(); }
    });
    // Close when focus or a click leaves the dropdown.
    ddBtn.parentNode.addEventListener('focusout', function (e) {
      if (!ddBtn.parentNode.contains(e.relatedTarget)) closeDd(false);
    });
    document.addEventListener('click', function (e) {
      if (!ddBtn.parentNode.contains(e.target)) closeDd(false);
    });
    // Following a link closes the menus (same-page section links included).
    ddMenu.addEventListener('click', function (e) {
      if (e.target.closest('a')) { closeDd(false); if (menuBtn) setMenu(false); }
    });
  }

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () {
      setMenu(!nav.classList.contains('is-open'));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (ddMenu && !ddMenu.hidden) { closeDd(true); return; }
    if (nav && nav.classList.contains('is-open')) { setMenu(false); menuBtn.focus(); }
  });

  // Mark the current destination.
  var here = location.pathname.split('/').pop() || 'index.html';
  var hash = location.hash;
  header.querySelectorAll('a[href]').forEach(function (a) {
    var href = a.getAttribute('href');
    var page = href.split('#')[0], frag = href.indexOf('#') >= 0 ? '#' + href.split('#')[1] : '';
    if (page === here && (!frag || frag === hash) && !a.classList.contains('sh-cta') && !a.classList.contains('sh-logo')) {
      a.setAttribute('aria-current', 'page');
    }
  });
})();
