export function initTheme() {
  const saved = localStorage.getItem('theme');
  if (saved) {
    document.documentElement.setAttribute('data-theme', saved);
  } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    document.documentElement.setAttribute('data-theme', 'light');
  }
}

export function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateToggleLabel();
}

export function updateToggleLabel() {
  const btn = document.querySelector('.theme-toggle');
  if (!btn) return;
  const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
  btn.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
}
