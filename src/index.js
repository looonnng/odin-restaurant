import { loadHomePage } from './homePage.js';
import { loadMenuPage } from './menuPage.js';
import { loadContactPage } from './contactPage.js';
import './style.css';

document.querySelector('#content').appendChild(loadHomePage());
