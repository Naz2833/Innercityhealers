// mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('.navlinks');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
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

// quote sliders (member + council) — manual arrows, multiple per page
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.quote-slider').forEach(slider => {
    const slides = slider.querySelectorAll('.qs-slide');
    if (!slides.length) return;
    const prev = slider.querySelector('.qs-prev');
    const next = slider.querySelector('.qs-next');
    const current = slider.querySelector('.qs-current');
    const total = slider.querySelector('.qs-total');
    let i = 0;

    if (total) total.textContent = slides.length;

    function show(n) {
      slides[i].classList.remove('active');
      i = (n + slides.length) % slides.length;
      slides[i].classList.add('active');
      if (current) current.textContent = i + 1;
    }

    if (prev) prev.addEventListener('click', () => show(i - 1));
    if (next) next.addEventListener('click', () => show(i + 1));
  });
});

// activity card slider (manual arrows) — events page
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('#activitySlider .acard-track');
  if (!track) return;

  const slides = track.querySelectorAll('.acard-slide');
  const prevBtn = document.getElementById('acardPrev');
  const nextBtn = document.getElementById('acardNext');
  const currentEl = document.getElementById('acardCurrent');
  const totalEl = document.getElementById('acardTotal');
  let i = 0;

  if (totalEl) totalEl.textContent = slides.length;

  function show(n) {
    slides[i].classList.remove('active');
    i = (n + slides.length) % slides.length;
    slides[i].classList.add('active');
    if (currentEl) currentEl.textContent = i + 1;
  }

  if (prevBtn) prevBtn.addEventListener('click', () => show(i - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => show(i + 1));
});