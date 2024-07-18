import { createMyElement } from './menu.js';
import { createImage } from './menu.js';
import heroImage from './images/food.png';

const createHomeTitle = (title) => {
  return createMyElement('h1', ['home__title'], title);
};

const createHomeParagraph = (para) => {
  return createMyElement('p', ['home__paragraph'], para);
};

export const loadHomePage = () => {
  const homeText = document.createElement('div');
  homeText.classList.add('home__text');
  homeText.append(
    createHomeTitle('Echo Chamber'),
    createHomeParagraph(
      'a unique dining experience that blends the deep, hypnotic sounds of dub and minimalist techno with innovative cuisine.',
    ),
  );

  const homeImageWrapper = document.createElement('div');
  homeImageWrapper.classList.add('home-image-wrapper');
  homeImageWrapper.appendChild(
    createImage(heroImage, 'Hero Image Placeholder', ['home-image']),
  );

  const homeWrapper = document.createElement('div');
  homeWrapper.classList.add('home-wrapper', 'row');
  homeWrapper.append(homeText, homeImageWrapper);

  return homeWrapper;
};
