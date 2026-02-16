document.addEventListener("DOMContentLoaded", () => {

  // Scroll fluide
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const section = document.querySelector(targetId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Lien actif au scroll
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');

  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Reveal animation
  const reveals = document.querySelectorAll('.reveal');
  window.addEventListener('scroll', () => {
    reveals.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        el.classList.add('active');
      }
    });
  });

  // Formulaire (sécurisé)
  const form = document.querySelector('#contact form');
  if (form) {
    form.addEventListener('submit', () => {
      const inputs = form.querySelectorAll('input, textarea');
      inputs.forEach(input => {
        input.style.border = input.value.trim()
          ? '2px solid #1e90ff'
          : '2px solid red';
      });
    });
  }

  // 🔵 BARRES DE COMPÉTENCES (FIX DÉFINITIF)
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const target = Number(bar.dataset.value);
        let current = 0;

        const interval = setInterval(() => {
          if (current >= target) {
            clearInterval(interval);
          } else {
            current++;
            bar.value = current;
          }
        }, 15);

        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.4 });

  document.querySelectorAll('#competences progress').forEach(bar => {
    bar.value = 0;
    observer.observe(bar);
  });

});
