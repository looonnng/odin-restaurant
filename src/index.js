import { loadHomePage } from './home.js';
import { loadMenuPage } from './menu.js';
import { loadContactPage } from './contact.js';
import './style.css';

// Initial Page Load
const content = document.querySelector('#content');
content.appendChild(loadHomePage());

const handleNavBtn = (event) => {
  if (event.target.textContent === 'Home')
    content.replaceChildren(loadHomePage());
  else if (event.target.textContent === 'Menu')
    content.replaceChildren(loadMenuPage());
  else content.replaceChildren(loadContactPage());
};

// Attach listeners to each button
document.querySelectorAll('.nav__btn').forEach((button) => {
  button.addEventListener('click', handleNavBtn);
});
