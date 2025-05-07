// assets/js/script.js

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const tgt = document.querySelector(anchor.getAttribute('href'));
    if (tgt) tgt.scrollIntoView({ behavior: 'smooth' });
  });
});

// Dark mode toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const root = document.documentElement;
themeToggleBtn.addEventListener('click', () => {
  const isDark = root.classList.toggle('dark');
  localStorage.theme = isDark ? 'dark' : 'light';
});
if (
  localStorage.theme === 'dark' ||
  (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  root.classList.add('dark');
} else {
  root.classList.remove('dark');
}

// Back-to-top button
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTopBtn.classList.toggle('show', window.scrollY > 300);
});
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
// assets/js/script.js

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const tgt = document.querySelector(anchor.getAttribute('href'));
    if (tgt) tgt.scrollIntoView({ behavior: 'smooth' });
    // close mobile menu
    document.getElementById('mobile-menu').classList.add('hidden');
  });
});

// Dark mode toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const root = document.documentElement;
themeToggleBtn.addEventListener('click', () => {
  const isDark = root.classList.toggle('dark');
  localStorage.theme = isDark ? 'dark' : 'light';
});
if (
  localStorage.theme === 'dark' ||
  (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  root.classList.add('dark');
}

// Back-to-top button
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTopBtn.classList.toggle('show', window.scrollY > 300);
});

// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
navToggle.addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.toggle('hidden');
});

// Highlight active nav item on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
  let scrollY = window.pageYOffset;
  sections.forEach(sec => {
    const top = sec.offsetTop - 120;
    const height = sec.offsetHeight;
    if (scrollY >= top && scrollY < top + height) {
      const id = sec.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
});
