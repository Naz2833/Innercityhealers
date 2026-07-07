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
  getElementById

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
// (currently unused: testimonials display as a stacked list, not a slider)

// activity card slider (manual arrows) — events page
// (currently unused: activity cards display as a static side-by-side grid)
// member quote slider (manual arrows) — testimonials page
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('memberSlider');
  if (!slider) return;

  const slides = slider.querySelectorAll('.qs-slide');
  const prevBtn = slider.querySelector('.qs-prev');
  const nextBtn = slider.querySelector('.qs-next');
  const currentEl = slider.querySelector('.qs-current');
  const totalEl = slider.querySelector('.qs-total');
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