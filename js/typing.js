export function initTyping(element, phrases, options = {}) {
  const { typeSpeed = 80, deleteSpeed = 40, pauseTime = 2000 } = options;

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function tick() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      charIndex--;
      element.textContent = currentPhrase.substring(0, charIndex);
    } else {
      charIndex++;
      element.textContent = currentPhrase.substring(0, charIndex);
    }

    let delay = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIndex === currentPhrase.length) {
      delay = pauseTime;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      delay = 400;
    }

    setTimeout(tick, delay);
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    element.textContent = phrases[0];
    return;
  }

  tick();
}
