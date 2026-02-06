import { ICON_GITHUB, ICON_LINKEDIN, ICON_EMAIL } from './icons.js';

export function initFooter() {
  const mount = document.getElementById('footer-mount');
  if (!mount) return;

  const year = new Date().getFullYear();

  mount.innerHTML = `
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-top">
          <div class="footer-brand">
            <div class="footer-brand-name">studio<span>max</span></div>
            <p>Developer, musician, creator. Building at the intersection of technology and creativity.</p>
          </div>
          <div class="footer-links">
            <div class="footer-column">
              <h4>Explore</h4>
              <a href="projects.html">Projects</a>
              <a href="music.html">Music</a>
              <a href="videos.html">Videos</a>
              <a href="writing.html">Writing</a>
            </div>
            <div class="footer-column">
              <h4>Connect</h4>
              <a href="about.html">About</a>
              <a href="contact.html">Contact</a>
              <a href="https://github.com/StudioMaxIO" target="_blank" rel="noopener">GitHub</a>
              <a href="https://linkedin.com/in/maxmeier" target="_blank" rel="noopener">LinkedIn</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <span class="footer-copyright">&copy; ${year} Max Meier. All rights reserved.</span>
          <div class="footer-socials">
            <a href="https://github.com/StudioMaxIO" target="_blank" rel="noopener" aria-label="GitHub">${ICON_GITHUB}</a>
            <a href="https://linkedin.com/in/maxmeier" target="_blank" rel="noopener" aria-label="LinkedIn">${ICON_LINKEDIN}</a>
            <a href="mailto:max@studiomax.io" aria-label="Email">${ICON_EMAIL}</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}
