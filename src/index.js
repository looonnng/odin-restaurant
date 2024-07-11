import { loadHomePage } from './homePage.js';
import { loadMenuPage } from './menuPage.js';
import { loadContactPage } from './contactPage.js';
import './style.css';

const handleNavBtn = (event) => {
  const content = document.querySelector('#content');

  if (event.target.textContent === 'Home')
    content.replaceChildren(loadHomePage());
  else if (event.target.textContent === 'Menu')
    content.replaceChildren(loadMenuPage());
  else content.replaceChildren(loadContactPage());
};

document.querySelectorAll('.nav__btn').forEach((button) => {
  button.addEventListener('click', handleNavBtn);
});
