export function initVideoFacades() {
  const facades = document.querySelectorAll('.video-facade[data-video-id]');

  facades.forEach(facade => {
    const videoId = facade.dataset.videoId;
    const img = facade.querySelector('img');

    if (img && videoId) {
      // Try maxresdefault first, fallback to hqdefault
      img.src = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
      img.onerror = function () {
        this.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        this.onerror = null;
      };
    }

    facade.addEventListener('click', () => {
      if (facade.classList.contains('video-facade--active')) return;

      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
      iframe.allow = 'autoplay; encrypted-media; picture-in-picture';
      iframe.allowFullscreen = true;
      iframe.loading = 'lazy';

      // Remove img and play button, add iframe
      const playBtn = facade.querySelector('.play-overlay');
      if (img) img.style.display = 'none';
      if (playBtn) playBtn.style.display = 'none';
      facade.appendChild(iframe);
      facade.classList.add('video-facade--active');
    });
  });
}
