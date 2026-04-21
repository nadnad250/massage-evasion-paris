/* ============================================================
   BOOKING — Massage Évasion Paris
   Formulaire de reservation + recap + modales paiement/succes
   Validation temps reel + ARIA
   ============================================================ */

(function() {
  'use strict';

  const form = document.getElementById('booking-form');
  if (!form) return;

  // ============================================================
  // DATE PAR DEFAUT — J+2
  // ============================================================
  const dateField = document.getElementById('f-date');
  if (dateField && !dateField.value) {
    const d = new Date();
    d.setDate(d.getDate() + 2);
    dateField.value = d.toISOString().split('T')[0];
    dateField.min = new Date().toISOString().split('T')[0];
  }

  // ============================================================
  // RECAP — mise a jour service / prix
  // ============================================================
  function updateRecap() {
    const sel = document.getElementById('f-service');
    if (!sel) return;
    const opt = sel.options[sel.selectedIndex];
    const parts = opt.value.split('|');
    const price = parts[1] || '0';
    const duration = parts[2] || '60 min';
    const label = opt.textContent.split(' — ')[0].trim();

    const recapService = document.getElementById('recap-service');
    const recapPrice = document.getElementById('recap-price');
    if (recapService) recapService.textContent = `${label} · ${duration}`;
    if (recapPrice) recapPrice.textContent = price + '€';
  }
  window.updateRecap = updateRecap;

  const serviceSelect = document.getElementById('f-service');
  if (serviceSelect) {
    serviceSelect.addEventListener('change', updateRecap);
    updateRecap();
  }

  // Pre-selection via ?service=xxx dans l'URL
  const urlParams = new URLSearchParams(window.location.search);
  const presetService = urlParams.get('service');
  if (presetService && serviceSelect) {
    for (const opt of serviceSelect.options) {
      if (opt.value.startsWith(presetService + '|')) {
        opt.selected = true;
        updateRecap();
        break;
      }
    }
  }

  // ============================================================
  // VALIDATION — temps reel + messages d'erreur
  // ============================================================
  function getDict() {
    const lang = document.documentElement.lang || 'fr';
    return (window.STRINGS && window.STRINGS[lang]) || (window.STRINGS && window.STRINGS.fr) || {};
  }

  function showError(field, msgKey) {
    const wrapper = field.closest('.field');
    if (!wrapper) return;
    wrapper.classList.add('error');
    field.setAttribute('aria-invalid', 'true');
    let errEl = wrapper.querySelector('.field-error');
    if (!errEl) {
      errEl = document.createElement('div');
      errEl.className = 'field-error';
      errEl.id = field.id + '-error';
      field.setAttribute('aria-describedby', errEl.id);
      wrapper.appendChild(errEl);
    }
    const dict = getDict();
    errEl.textContent = dict[msgKey] || msgKey;
  }

  function clearError(field) {
    const wrapper = field.closest('.field');
    if (!wrapper) return;
    wrapper.classList.remove('error');
    field.removeAttribute('aria-invalid');
    const errEl = wrapper.querySelector('.field-error');
    if (errEl) errEl.textContent = '';
  }

  function validateField(field) {
    const value = field.value.trim();

    if (field.required && !value) {
      showError(field, 'err.required');
      return false;
    }
    if (field.type === 'email' && value) {
      const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      if (!ok) { showError(field, 'err.email'); return false; }
    }
    if (field.type === 'tel' && value) {
      const ok = /^[\d\s+().-]{8,}$/.test(value);
      if (!ok) { showError(field, 'err.phone'); return false; }
    }

    clearError(field);
    return true;
  }

  // Attach validation on blur + input
  form.querySelectorAll('input, select, textarea').forEach(field => {
    if (field.type === 'submit') return;
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.closest('.field')?.classList.contains('error')) {
        validateField(field);
      }
    });
  });

  // ============================================================
  // SUBMIT — ouvre modale paiement
  // ============================================================
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let allValid = true;
    form.querySelectorAll('input[required], select[required], textarea[required]').forEach(field => {
      if (!validateField(field)) allValid = false;
    });

    if (!allValid) {
      // Focus sur le premier champ invalide
      const firstError = form.querySelector('.field.error input, .field.error select, .field.error textarea');
      if (firstError) firstError.focus();
      return;
    }

    openPayment();
  });

  // ============================================================
  // OPEN PAYMENT MODAL
  // ============================================================
  function openPayment() {
    const sel = document.getElementById('f-service');
    if (!sel) return;
    const opt = sel.options[sel.selectedIndex];
    const parts = opt.value.split('|');
    const price = parts[1];
    const duration = parts[2];
    const label = opt.textContent.split(' — ')[0].trim();
    const date = document.getElementById('f-date').value;
    const time = document.getElementById('f-time').value;

    const paySvc = document.getElementById('pay-service');
    const payDur = document.getElementById('pay-duration');
    const payWhen = document.getElementById('pay-when');
    const payTotal = document.getElementById('pay-total');

    if (paySvc) paySvc.textContent = label;
    if (payDur) payDur.textContent = duration;
    if (payWhen) {
      const d = new Date(date);
      const fmt = d.toLocaleDateString(document.documentElement.lang || 'fr', {
        weekday: 'short', day: 'numeric', month: 'short'
      });
      payWhen.textContent = `${fmt} · ${time}`;
    }
    if (payTotal) payTotal.textContent = price + '€';

    const payBtn = document.querySelector('#pay-modal .btn-primary');
    if (payBtn) {
      const isEn = document.documentElement.lang === 'en';
      payBtn.textContent = (isEn ? 'Pay ' : 'Payer ') + price + '€ ' +
        (isEn ? '& confirm →' : '& confirmer →');
    }

    if (window.openModal) window.openModal('pay-modal');
  }

  window.confirmPayment = function() {
    if (window.closeModal) window.closeModal('pay-modal');

    const svc = document.getElementById('pay-service')?.textContent || '';
    const when = document.getElementById('pay-when')?.textContent || '';
    const detail = document.getElementById('success-detail');
    if (detail) {
      const dict = getDict();
      detail.innerHTML = `${svc} · ${when}<div class="success-ref">${dict['ok.ref'] || 'Réf. #ME-2026-0431'}</div>`;
    }

    setTimeout(() => {
      if (window.openModal) window.openModal('success-modal');
    }, 220);
  };

})();
