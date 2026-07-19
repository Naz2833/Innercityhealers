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

  // contact form — submits to Formspree (real email delivery)
  const form = document.getElementById('joinForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = this.querySelector('button');
      const original = btn.textContent;
      const formData = new FormData(this);

      btn.textContent = 'Sending...';
      btn.disabled = true;

      fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      })
        .then(response => {
          if (response.ok) {
            btn.textContent = 'Message sent ✓';
            this.reset();
          } else {
            btn.textContent = 'Something went wrong — try again';
          }
        })
        .catch(() => {
          btn.textContent = 'Something went wrong — try again';
        })
        .finally(() => {
          btn.disabled = false;
          setTimeout(() => (btn.textContent = original), 3000);
        });
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

// activity card slider (manual arrows) — events page
// (currently unused: activity cards display as a static side-by-side grid)

// back to top button (auto-injected on every page)
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.createElement('button');
  btn.className = 'back-to-top';
  btn.setAttribute('aria-label', 'Back to top');
  btn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// cookie notice banner (auto-injected on every page)
document.addEventListener('DOMContentLoaded', () => {
  const choice = localStorage.getItem('ich_cookie_choice');
  if (choice) return; // already accepted or declined, don't show again

  const banner = document.createElement('div');
  banner.className = 'cookie-banner';
  banner.innerHTML = `
    <p>We don't use cookies or tracking on this site right now &mdash; but if that changes, we'll ask again. Read our <a href="cookies.html">Cookie Policy</a> for details.</p>
    <div class="cookie-banner-actions">
      <button class="cookie-accept">Accept</button>
      <button class="cookie-decline">Decline</button>
    </div>
  `;
  document.body.appendChild(banner);

  requestAnimationFrame(() => banner.classList.add('show'));

  function dismiss(choiceValue) {
    localStorage.setItem('ich_cookie_choice', choiceValue);
    banner.classList.remove('show');
    setTimeout(() => banner.remove(), 300);
  }

  banner.querySelector('.cookie-accept').addEventListener('click', () => dismiss('accepted'));
  banner.querySelector('.cookie-decline').addEventListener('click', () => dismiss('declined'));
});