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
