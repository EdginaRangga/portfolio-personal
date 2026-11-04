
(() => {
  'use strict';
  document.documentElement.classList.add('js-enabled');

  // Keep all existing page-specific scripts intact; enhance only shared behaviors.
  const menuButton = document.querySelector('.edgina-menu-button');
  const mobileMenu = document.querySelector('.edgina-mobile-menu');
  if (menuButton && mobileMenu) {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-controls', 'edgina-mobile-menu');
    mobileMenu.id = 'edgina-mobile-menu';
    const closeMenu = () => {
      mobileMenu.style.display = 'none';
      menuButton.setAttribute('aria-expanded', 'false');
    };
    menuButton.addEventListener('click', () => {
      const opening = mobileMenu.style.display !== 'block';
      mobileMenu.style.display = opening ? 'block' : 'none';
      menuButton.setAttribute('aria-expanded', String(opening));
    });
    mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
    document.addEventListener('click', event => {
      if (!mobileMenu.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
    });
  }

  // Native lazy loading for off-screen images without changing their original sources.
  document.querySelectorAll('img').forEach((image, index) => {
    if (index > 0 && !image.hasAttribute('loading')) image.loading = 'lazy';
    if (!image.hasAttribute('decoding')) image.decoding = 'async';
  });

  // Mark the current page in shared navigation when its link matches this URL.
  const currentFile = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.edgina-nav a, .edgina-mobile-menu a, .edgina-footer-nav a').forEach(link => {
    const target = (link.getAttribute('href') || '').split('#')[0].split('/').pop();
    if (target && target.toLowerCase() === currentFile.toLowerCase()) {
      link.classList.add('edgina-nav-active');
      link.setAttribute('aria-current', 'page');
    }
  });
})();
