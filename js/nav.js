import { ICON_MENU, ICON_CLOSE, ICON_SUN, ICON_MOON, ICON_GITHUB, ICON_LINKEDIN } from './icons.js';
import { toggleTheme, updateToggleLabel } from './theme.js';

export function initNav() {
  const mount = document.getElementById('nav-mount');
  if (!mount) return;

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  const links = [
    { href: '/', label: 'Home' },
    { href: 'projects.html', label: 'Projects' },
    { href: 'music.html', label: 'Music' },
    { href: 'videos.html', label: 'Videos' },
    { href: 'writing.html', label: 'Writing' },
    { href: 'about.html', label: 'About' },
    { href: 'contact.html', label: 'Contact' },
  ];

  const navLinks = links.map(link => {
    const isActive = currentPage === link.href || (currentPage === '/' && link.href === '/') || (currentPage === 'index.html' && link.href === '/');
    return `<a href="${link.href}" class="nav-link${isActive ? ' active' : ''}">${link.label}</a>`;
  }).join('');

  const isDark = document.documentElement.getAttribute('data-theme') !== 'light';

  mount.innerHTML = `
    <nav class="site-nav" role="navigation" aria-label="Main navigation">
      <div class="nav-inner">
        <a href="/" class="nav-logo">studio<span>max</span></a>
        <div class="nav-links" id="nav-links">
          ${navLinks}
        </div>
        <div class="nav-actions">
          <button class="theme-toggle" aria-label="${isDark ? 'Switch to light theme' : 'Switch to dark theme'}">
            ${isDark ? ICON_SUN : ICON_MOON}
          </button>
          <a href="https://github.com/StudioMaxIO" class="nav-social-link" target="_blank" rel="noopener" aria-label="GitHub">
            ${ICON_GITHUB}
          </a>
          <a href="https://linkedin.com/in/maxmeier" class="nav-social-link" target="_blank" rel="noopener" aria-label="LinkedIn">
            ${ICON_LINKEDIN}
          </a>
        </div>
        <button class="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false">
          ${ICON_MENU}
        </button>
      </div>
    </nav>
  `;

  // Theme toggle
  const themeBtn = mount.querySelector('.theme-toggle');
  themeBtn.addEventListener('click', () => {
    toggleTheme();
    const nowDark = document.documentElement.getAttribute('data-theme') !== 'light';
    themeBtn.innerHTML = nowDark ? ICON_SUN : ICON_MOON;
  });

  // Hamburger
  const hamburger = document.getElementById('hamburger');
  const navLinksEl = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    const isOpen = navLinksEl.classList.toggle('open');
    hamburger.innerHTML = isOpen ? ICON_CLOSE : ICON_MENU;
    hamburger.setAttribute('aria-expanded', isOpen);
    hamburger.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close mobile nav on link click
  navLinksEl.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinksEl.classList.remove('open');
      hamburger.innerHTML = ICON_MENU;
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}
