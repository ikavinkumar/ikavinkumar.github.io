// Toggle responsive navbar
const navbarToggle = document.querySelector('.menu-icon');
const navbarLinks = document.querySelector('.navbar');

navbarToggle.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});
const projectLink = document.querySelector('.navbar-links li:nth-child(2) a');
const projectsSection = document.querySelector('.projects');

projectLink.addEventListener('click', (event) => {
  event.preventDefault();
  projectsSection.scrollIntoView({ behavior: 'smooth' });
});