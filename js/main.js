import { initTheme } from './theme.js';
import { initNav } from './nav.js';
import { initFooter } from './footer.js';
import { initAnimations } from './animations.js';

// Initialize theme first to prevent flash
initTheme();

// Initialize shared components
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initFooter();
  initAnimations();
});
