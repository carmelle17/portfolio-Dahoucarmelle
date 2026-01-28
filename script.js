// Scroll fluide
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const targetId = link.getAttribute('href');
    const section = document.querySelector(targetId);

    section.scrollIntoView({
      behavior: 'smooth'
    });
  });
});
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
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
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      el.classList.add('active');
    }
  });
});
const form = document.querySelector('#contact form');

form.addEventListener('submit', e => {
  // e.preventDefault();  // ❌ bloquait Formspree


  const inputs = form.querySelectorAll('input, textarea');
  let valid = true;

  inputs.forEach(input => {
    if (!input.value.trim()) {
      valid = false;
      input.style.border = '2px solid red';
    } else {
      input.style.border = '2px solid #1e90ff';
    }
  });

  // if (valid) {
//   alert('Message envoyé avec succès 👍');
//   form.reset();
// }

});

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    entries => {
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
          }, 15); // vitesse de l’animation

          observer.unobserve(bar);
        }
      });
    },
    { threshold: 0.4 }
  );

  document.querySelectorAll("#competences progress").forEach(bar => {
    bar.value = 0;
    observer.observe(bar);
  });
});


