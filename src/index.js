import { loadHomePage } from './homePage.js';
import { loadMenuPage } from './menuPage.js';
import { loadContactPage } from './contactPage.js';
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

document.querySelectorAll('.nav__btn').forEach((button) => {
  button.addEventListener('click', handleNavBtn);
});
