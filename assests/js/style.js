// assets/js/script.js

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const mobileMenu    = document.getElementById('mobile-menu');
  const navToggle     = document.getElementById('nav-toggle');
  const themeToggle   = document.getElementById('theme-toggle');
  const backToTopBtn  = document.getElementById('backToTop');
  const navLinks      = document.querySelectorAll('#nav-menu .nav-link, #mobile-menu .nav-link');
  const sections      = document.querySelectorAll('section[id]');

  /* Smooth scroll & mobile menu close */
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      target?.scrollIntoView({ behavior: 'smooth' });
      mobileMenu?.classList.remove('show');
    });
  });

  /* Mobile menu toggle */
  navToggle?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('show');
  });

  /* Dark mode toggle */
  const applyTheme = isDark => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.theme = isDark ? 'dark' : 'light';
  };
  themeToggle?.addEventListener('click', () => {
    applyTheme(!document.documentElement.classList.contains('dark'));
  });
  // Initialize theme
  applyTheme(
    localStorage.theme === 'dark'
    || (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  /* Back-to-top button */
  const handleScrollUI = () => {
    backToTopBtn?.classList.toggle('show', window.scrollY > 300);
    highlightNav();
  };
  window.addEventListener('scroll', () => {
    window.requestAnimationFrame(handleScrollUI);
  });
  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* Highlight active nav link based on scroll position */
  function highlightNav() {
    const scrollY = window.pageYOffset;
    sections.forEach(sec => {
      const top = sec.offsetTop - 150;
      const bottom = top + sec.offsetHeight;
      const id = sec.getAttribute('id');
      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        link.classList.toggle(
          'active',
          href === `#${id}` && scrollY >= top && scrollY < bottom
        );
      });
    });
  }
  highlightNav();
});
