const items = document.querySelectorAll('.accordion button');



function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));

const navImg = document.querySelector('.nav-img');
const navLinks = document.getElementById('ul');
const menuIcon = document.getElementById('menu-icon');

menuIcon.addEventListener('click', () => {
  console.log(navLinks.style.display);
});

menuIcon.addEventListener('click', () => {
  console.log('Menu icon clicked');
  if (navLinks.style.display === 'flex') {
    navLinks.style.display = 'none';
  } else {
    navLinks.style.display = 'flex';
  }
});

menuIcon.addEventListener('click', () => {});

