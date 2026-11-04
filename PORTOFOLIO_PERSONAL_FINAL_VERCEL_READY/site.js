(() => {
  'use strict';
  document.documentElement.classList.add('js-enabled');

  // Shared responsive navigation on every page.
  const menuButton = document.querySelector('.edgina-menu');
  const mobileMenu = document.querySelector('.edgina-mobile-menu');
  if (menuButton && mobileMenu) {
    const setMenuOpen = (open) => {
      mobileMenu.classList.toggle('edgina-mobile-open', open);
      mobileMenu.toggleAttribute('inert', !open);
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? 'Tutup menu navigasi' : 'Buka menu navigasi');
    };
    setMenuOpen(false);
    menuButton.addEventListener('click', () => {
      setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
    });
    mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenuOpen(false)));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') setMenuOpen(false); });
    document.addEventListener('click', event => {
      if (!mobileMenu.contains(event.target) && !menuButton.contains(event.target)) setMenuOpen(false);
    });
  }

  // Preserve original remote image URLs while avoiding referrer-based hotlink blocks.
  document.querySelectorAll('img').forEach((image, index) => {
    if (index > 0 && !image.hasAttribute('loading')) image.loading = 'lazy';
    if (!image.hasAttribute('decoding')) image.decoding = 'async';
    if (/^https?:\/\//i.test(image.currentSrc || image.src)) image.referrerPolicy = 'no-referrer';
    image.addEventListener('error', () => {
      image.dataset.imageFailed = 'true';
      const wrapper = image.parentElement;
      if (wrapper && !wrapper.querySelector('.edgina-image-fallback')) {
        const fallback = document.createElement('span');
        fallback.className = 'edgina-image-fallback';
        fallback.setAttribute('role', 'img');
        fallback.setAttribute('aria-label', image.alt || 'Gambar tidak dapat dimuat');
        fallback.textContent = image.alt || 'Gambar tidak dapat dimuat';
        wrapper.appendChild(fallback);
      }
    }, { once: true });
  });

  // Highlight the current page in header, mobile and footer navigation.
  const currentFile = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.edgina-links a, .edgina-mobile-menu a, .edgina-footer-nav a').forEach(link => {
    const target = (link.getAttribute('href') || '').split('#')[0].split('/').pop();
    if (target && target.toLowerCase() === currentFile.toLowerCase()) {
      link.classList.add('edgina-nav-active');
      link.setAttribute('aria-current', 'page');
    }
  });
})();
