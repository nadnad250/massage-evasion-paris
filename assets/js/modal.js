/* ============================================================
   MODAL — Massage Évasion Paris
   Open / close + focus trap + ESC + ARIA
   ============================================================ */

(function() {
  'use strict';

  let lastFocused = null;

  function getFocusable(modal) {
    return modal.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
  }

  function trapFocus(e, modal) {
    if (e.key !== 'Tab') return;
    const focusable = Array.from(getFocusable(modal)).filter(el => el.offsetParent !== null);
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  window.openModal = function(id) {
    const modal = document.getElementById(id);
    if (!modal) return;

    lastFocused = document.activeElement;
    modal.classList.add('on');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus sur le premier element focusable
    setTimeout(() => {
      const focusable = getFocusable(modal);
      if (focusable.length) focusable[0].focus();
    }, 50);

    // Trap focus
    const trapHandler = (e) => trapFocus(e, modal);
    modal._trap = trapHandler;
    document.addEventListener('keydown', trapHandler);
  };

  window.closeModal = function(id) {
    const modal = document.getElementById(id);
    if (!modal) return;

    modal.classList.remove('on');
    modal.setAttribute('aria-hidden', 'true');

    // Verifier qu'aucune autre modale n'est ouverte
    const otherOpen = document.querySelector('.modal-backdrop.on');
    if (!otherOpen) document.body.style.overflow = '';

    if (modal._trap) {
      document.removeEventListener('keydown', modal._trap);
      modal._trap = null;
    }

    if (lastFocused && lastFocused.focus) lastFocused.focus();
  };

  // Click sur backdrop ferme
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
      const id = e.target.id;
      if (id) window.closeModal(id);
    }
  });

  // ESC ferme la modale active
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const open = document.querySelector('.modal-backdrop.on');
      if (open && open.id) window.closeModal(open.id);
    }
  });

})();
