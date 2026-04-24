/* ============================================================
   MAIN — Massage Évasion Paris
   Init nav, scroll, animations, langue, back-top
   ============================================================ */

(function() {
  'use strict';

  // ============================================================
  // NAV — comportement au scroll
  // ============================================================
  const nav = document.getElementById('nav');
  if (nav) {
    // Nav sur hero sombre : applique classe si la page a un .hero-cine
    const heroCine = document.querySelector('.hero-cine');
    if (heroCine) {
      nav.classList.add('on-dark');
      document.documentElement.classList.add('has-hero-dark');
    }

    let lastScroll = 0;
    let ticking = false;

    function onScroll() {
      const sy = window.scrollY;
      const scrolled = sy > 40;
      nav.classList.toggle('scrolled', scrolled);
      // Retire on-dark dès qu'on scrolle (nav devient claire avec blur)
      if (heroCine) {
        nav.classList.toggle('on-dark', !scrolled);
      }
      lastScroll = sy;
      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(onScroll);
        ticking = true;
      }
    }, { passive: true });
  }

  // ============================================================
  // BURGER MOBILE
  // ============================================================
  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.nav-mobile');

  if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
      const isOpen = burger.classList.toggle('on');
      mobileMenu.classList.toggle('on', isOpen);
      burger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Fermer au clic sur lien
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        burger.classList.remove('on');
        mobileMenu.classList.remove('on');
        burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Fermer avec Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('on')) {
        burger.click();
      }
    });
  }

  // ============================================================
  // LANGUE — switch FR/EN
  // ============================================================
  document.querySelectorAll('.lang button').forEach(b => {
    b.addEventListener('click', () => {
      if (window.applyLang) window.applyLang(b.dataset.lang);
    });
  });

  // Boot langue depuis localStorage
  if (window.applyLang && window.getCurrentLang) {
    window.applyLang(window.getCurrentLang());
  }

  // ============================================================
  // ANIMATIONS — fade-up au scroll (IntersectionObserver)
  // ============================================================
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.01, rootMargin: '0px 0px -5% 0px' });

    document.querySelectorAll('.fade-up').forEach(el => io.observe(el));

    // Above-the-fold immediat
    requestAnimationFrame(() => {
      document.querySelectorAll('.hero .fade-up, .hero-cine .fade-up, .page-hero .fade-up').forEach(el => {
        el.classList.add('in');
      });
    });
  } else {
    // Fallback: tout visible
    document.querySelectorAll('.fade-up').forEach(el => el.classList.add('in'));
  }

  // ============================================================
  // STICKY MOBILE CTA — apparait apres le hero, disparait pres du footer
  // ============================================================
  const stickyCta = document.querySelector('.sticky-mobile-cta');
  if (stickyCta) {
    const heroEl = document.querySelector('.hero-cine, .hero, .page-hero');
    const footerEl = document.querySelector('.footer, footer');
    let stickyTicking = false;
    function updateSticky() {
      const sy = window.scrollY;
      const heroBottom = heroEl ? heroEl.getBoundingClientRect().bottom + sy : 400;
      const footerTop = footerEl ? footerEl.getBoundingClientRect().top + sy : Infinity;
      const viewportBottom = sy + window.innerHeight;
      const past = sy > heroBottom - 100;
      const beforeFooter = viewportBottom < footerTop + 200;
      stickyCta.classList.toggle('show', past && beforeFooter);
      stickyCta.setAttribute('aria-hidden', !(past && beforeFooter));
      stickyTicking = false;
    }
    window.addEventListener('scroll', () => {
      if (!stickyTicking) {
        requestAnimationFrame(updateSticky);
        stickyTicking = true;
      }
    }, { passive: true });
    updateSticky();
  }

  // ============================================================
  // BACK TO TOP
  // ============================================================
  const backTop = document.querySelector('.back-top');
  if (backTop) {
    let bttTicking = false;
    window.addEventListener('scroll', () => {
      if (!bttTicking) {
        requestAnimationFrame(() => {
          backTop.classList.toggle('show', window.scrollY > 600);
          bttTicking = false;
        });
        bttTicking = true;
      }
    }, { passive: true });

    backTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ============================================================
  // NAV ACTIVE STATE — highlight de la page courante
  // ============================================================
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.setAttribute('aria-current', 'page');
    }
  });

  // ============================================================
  // SMOOTH SCROLL pour ancres internes
  // ============================================================
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#' || href.length < 2) return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ============================================================
  // STATS COUNTER — count-up cinematique au scroll
  // Attributs attendus sur .rs-num :
  //   data-target="4.9"        (obligatoire)
  //   data-decimals="1"        (optionnel — nombre de decimales)
  //   data-decimal-sep=","     (optionnel — separateur decimal, defaut ".")
  //   data-thousand-sep=" "    (optionnel — separateur de milliers)
  //   data-suffix="%"          (optionnel — suffixe injecte dans le texte)
  // Le chiffre est injecte dans <span class="rs-num-value"></span>
  // ============================================================
  function formatNumber(value, el) {
    const decimals = parseInt(el.dataset.decimals || '0', 10);
    const decSep = el.dataset.decimalSep || '.';
    const thoSep = el.dataset.thousandSep || '';
    let str = decimals > 0 ? value.toFixed(decimals) : String(Math.floor(value));
    // separer partie entiere / decimale
    const parts = str.split('.');
    if (thoSep) {
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thoSep);
    }
    return parts.join(decSep);
  }

  function animateCount(el, duration) {
    const target = parseFloat(el.dataset.target);
    if (isNaN(target)) return;
    const valueEl = el.querySelector('.rs-num-value') || el;
    const start = performance.now();
    // easeOutCubic — editorial, pas mecanique
    const easing = t => 1 - Math.pow(1 - t, 3);
    function tick(now) {
      const elapsed = now - start;
      const p = Math.min(elapsed / duration, 1);
      const current = target * easing(p);
      valueEl.textContent = formatNumber(current, el);
      if (p < 1) {
        requestAnimationFrame(tick);
      } else {
        // Valeur finale exacte
        valueEl.textContent = formatNumber(target, el);
      }
    }
    requestAnimationFrame(tick);
  }

  function initStatsCounter() {
    const blocks = document.querySelectorAll('.stats-counter, .reviews-summary, .about-stats');
    if (!blocks.length) return;

    if (reducedMotion || !('IntersectionObserver' in window)) {
      // Fallback : affiche la valeur finale sans animation
      blocks.forEach(block => {
        block.classList.add('is-visible');
        block.querySelectorAll('.rs-num[data-target]').forEach(el => {
          const valueEl = el.querySelector('.rs-num-value') || el;
          const target = parseFloat(el.dataset.target);
          if (!isNaN(target)) valueEl.textContent = formatNumber(target, el);
        });
      });
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const block = entry.target;
        block.classList.add('is-visible');
        const items = block.querySelectorAll('.rs-num[data-target]');
        items.forEach((el, i) => {
          // Stagger 180ms, duration 1800ms (ease-out cubic)
          setTimeout(() => animateCount(el, 1800), 180 * i + 120);
        });
        io.unobserve(block);
      });
    }, { threshold: 0.25, rootMargin: '0px 0px -5% 0px' });

    blocks.forEach(b => io.observe(b));
  }

  initStatsCounter();

  // ============================================================
  // PARALLAX hero photo subtil au scroll
  // ============================================================
  const heroMedia = document.querySelector('.hero-cine-media img');
  const heroInner = document.querySelector('.hero-cine-inner');
  if (heroMedia && heroInner && !reducedMotion) {
    let parallaxTicking = false;
    window.addEventListener('scroll', () => {
      if (parallaxTicking) return;
      parallaxTicking = true;
      requestAnimationFrame(() => {
        const sy = window.scrollY;
        if (sy < window.innerHeight) {
          heroInner.style.transform = `translateY(${sy * 0.18}px)`;
          heroInner.style.opacity = String(Math.max(0, 1 - sy / (window.innerHeight * 0.7)));
        }
        parallaxTicking = false;
      });
    }, { passive: true });
  }

})();
