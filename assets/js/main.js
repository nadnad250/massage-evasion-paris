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
      document.querySelectorAll('.hero .fade-up, .page-hero .fade-up').forEach(el => {
        el.classList.add('in');
      });
    });
  } else {
    // Fallback: tout visible
    document.querySelectorAll('.fade-up').forEach(el => el.classList.add('in'));
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

  // ============================================================
  // 3D TILT — effet parallax mouse sur les cartes
  // ============================================================
  const tiltCards = document.querySelectorAll('.tilt-3d');
  const supportsHover = matchMedia('(hover: hover)').matches;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (supportsHover && !reducedMotion && tiltCards.length) {
    tiltCards.forEach(card => {
      let rafId = null;
      card.addEventListener('mousemove', (e) => {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
          const r = card.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5;
          const y = (e.clientY - r.top) / r.height - 0.5;
          const rx = (-y * 8).toFixed(2);
          const ry = (x * 10).toFixed(2);
          card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
        });
      });
      card.addEventListener('mouseleave', () => {
        if (rafId) cancelAnimationFrame(rafId);
        card.style.transform = 'perspective(900px) rotateX(0) rotateY(0) translateZ(0)';
      });
    });
  }

  // ============================================================
  // PARALLAX hero subtil au scroll
  // ============================================================
  const heroVideo = document.querySelector('.hero-cine-video');
  const heroInner = document.querySelector('.hero-cine-inner');
  if (heroVideo && heroInner && !reducedMotion) {
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
