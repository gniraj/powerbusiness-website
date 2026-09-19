// Mobile nav
const toggle = document.getElementById('nav-toggle');
const links = document.getElementById('nav-links');
toggle.addEventListener('click', () => links.classList.toggle('open'));
links.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => links.classList.remove('open')));

document.getElementById('year').textContent = new Date().getFullYear();

// Reveal-on-scroll
const io = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in')), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// Pilot form: hands off to the visitor's mail client until a form backend is connected.
// Replace CONTACT_EMAIL (or wire the form to Formspree / your CRM) before launch.
const CONTACT_EMAIL = 'hello@example.com';
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const f = new FormData(e.target);
  const subject = encodeURIComponent(`Pilot request — ${f.get('hotel')}`);
  const body = encodeURIComponent(
    `Name: ${f.get('name')}\nHotel: ${f.get('hotel')}\nEmail: ${f.get('email')}\nRooms: ${f.get('rooms') || '-'}\n\n${f.get('notes') || ''}`
  );
  document.getElementById('form-note').textContent = 'Opening your email app…';
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
});
