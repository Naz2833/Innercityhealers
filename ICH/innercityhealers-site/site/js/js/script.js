// mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('.navlinks');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    // close the menu when any link is tapped
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('open'));
    });
  }

  // contact form (front-end only — wire up to a backend / mailto / form service)
  const form = document.getElementById('joinForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = this.querySelector('button');
      const original = btn.textContent;
      btn.textContent = 'Message sent ✓';
      this.reset();
      setTimeout(() => (btn.textContent = original), 2500);
    });
  }
});

// gallery slideshow (manual arrows)
document.addEventListener('DOMContentLoaded', () => {
  const slideshow = document.getElementById('slideshow');
  if (!slideshow) return;

  const slides = slideshow.querySelectorAll('.slide');
  const prevBtn = document.getElementById('slidePrev');
  const nextBtn = document.getElementById('slideNext');
  const currentEl = document.getElementById('slideCurrent');
  const totalEl = document.getElementById('slideTotal');
  let index = 0;

  if (totalEl) totalEl.textContent = slides.length;

  function show(i) {
    slides[index].classList.remove('active');
    index = (i + slides.length) % slides.length;
    slides[index].classList.add('active');
    if (currentEl) currentEl.textContent = index + 1;
  }

  if (prevBtn) prevBtn.addEventListener('click', () => show(index - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => show(index + 1));

  // keyboard arrows
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') show(index - 1);
    if (e.key === 'ArrowRight') show(index + 1);
  });
});
